import fs from 'fs';
import path from 'path';
import https from 'https';

const getFiles = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') {
        getFiles(path.join(dir, file), filesList);
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filesList.push(path.join(dir, file));
      }
    }
  }
  return filesList;
};

const files = getFiles('./src');
const urlRegex = /https:\/\/images\.unsplash\.com\/[^'"]+/g;
const urls = new Set();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
    urls.add(match[0]);
  }
});

const checkUrl = (url) => {
  return new Promise((resolve) => {
    https.request(url, { method: 'HEAD' }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', () => resolve({ url, status: 'error' })).end();
  });
};

(async () => {
  console.log(`Checking ${urls.size} URLs...`);
  const results = [];
  for (const url of urls) {
    results.push(await checkUrl(url));
  }
  const broken = results.filter(r => r.status === 404 || r.status === 'error' || r.status === 403);
  console.log('Broken URLs:');
  console.log(JSON.stringify(broken, null, 2));
})();
