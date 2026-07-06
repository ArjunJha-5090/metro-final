const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'src');

const indianImages = [
  '1585937421612-70a008356fbe', // Naan/Curry
  '1610192244261-3f33de3f55e4', // Dosa
  '1589301760014-d929f3979cbc', // Biryani
  '1606491956689-2ea866880c84', // Chaat
  '1588667634358-8b3a0e10b27f', // Jalebi
  '1546833999-b9f581a1996d', // Spices
  '1561336313-0bd5e0b27ec8', // Chai
  '1626777174640-7ddb2f568603', // Indian Food Spread
  '1631452180149-25e9c059340e', // Thali
  '1599487647085-88aa3a7589d3', // Tandoori
  '1603894584373-585145b23d53', // Indian Decor
  '1590164287349-43ccefcde764', // Indian Dining
  '1628294895950-9805252327bc', // North Indian Spread
];

let imageIndex = 0;

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dirPath);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Specific replacements
  if (file.endsWith('FAQPage.tsx')) {
    content = content.replace(/photo-[a-zA-Z0-9-]+/g, 'photo-1603894584373-585145b23d53'); // Indian decor
  } else if (file.endsWith('Hero.tsx')) {
    content = content.replace(/photo-[a-zA-Z0-9-]+/g, 'photo-1626777174640-7ddb2f568603'); // Indian Food Spread
  } else if (file.endsWith('AboutPage.tsx') || file.endsWith('About.tsx')) {
    content = content.replace(/photo-[a-zA-Z0-9-]+/g, 'photo-1590164287349-43ccefcde764'); // Dining
  } else if (file.endsWith('FinalCTA.tsx')) {
    content = content.replace(/photo-[a-zA-Z0-9-]+/g, 'photo-1631452180149-25e9c059340e'); // Thali
  } else if (file.endsWith('MenuPage.tsx')) {
    content = content.replace(/photo-[a-zA-Z0-9-]+/g, 'photo-1589301760014-d929f3979cbc'); // Biryani
  } else if (!file.endsWith('Reviews.tsx')) {
    // For general arrays (Gallery, Blog, Events, FoodStalls), we replace them with random Indian images
    let match;
    const regex = /photo-[a-zA-Z0-9-]+/g;
    let newContent = content;
    while ((match = regex.exec(content)) !== null) {
        newContent = newContent.replace(match[0], `photo-${indianImages[imageIndex % indianImages.length]}`);
        imageIndex++;
    }
    content = newContent;
  }
  
  // Reviews uses faces, let's keep them or replace with Indian faces from Unsplash
  if (file.endsWith('Reviews.tsx')) {
    const indianFaces = [
      '1534030347209-467a5b0ad3e6', // Indian man
      '1573496359142-b8d87734a5a2', // Indian woman
      '1554727242-741c14fa561c', // Indian man 2
    ];
    let faceIndex = 0;
    let newContent = content;
    const regex = /photo-[a-zA-Z0-9-]+/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        newContent = newContent.replace(match[0], `photo-${indianFaces[faceIndex % indianFaces.length]}`);
        faceIndex++;
    }
    content = newContent;
  }

  fs.writeFileSync(file, content, 'utf8');
});

console.log("Images replaced successfully!");
