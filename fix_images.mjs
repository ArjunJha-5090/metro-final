import fs from 'fs';
import path from 'path';

const files = [];
function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isDirectory()) {
      findFiles(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
}

findFiles('./src');

let count = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  
  const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+(\?[^"'\`]*)?/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, () => {
      count++;
      return `https://loremflickr.com/800/600/food,dish?lock=${count}`;
    });
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated images in ${file}`);
  }
}
console.log(`Replaced ${count} broken Unsplash images.`);
