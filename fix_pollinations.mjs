import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, replacements) {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  for (const [search, replace] of replacements) {
    // using string replacement or regex
    // since we know the exact pollinations strings, let's just do a regex replace based on the prompt
    content = content.replace(search, replace);
  }
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

const getUrl = (keywords, lock, w=800, h=600) => `https://loremflickr.com/${w}/${h}/${keywords}?lock=${lock}`;

// FoodStallsPage.tsx & FoodStalls.tsx & Specialities.tsx
const rollsImg = getUrl('kebab,wrap', 101);
const northIndianImg = getUrl('curry,food', 102);
const chineseImg = getUrl('noodles,chinese', 103);

const p = (prompt, w=800, h=600) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&nologo=true`;

replaceInFile('src/pages/FoodStallsPage.tsx', [
  [p('delicious indo chinese hakka noodles and chilli chicken food photography'), chineseImg],
  [p('delicious indian chicken kathi roll street food photography'), rollsImg],
  [p('delicious luxury north indian butter chicken and naan food photography'), northIndianImg],
]);

replaceInFile('src/components/FoodStalls.tsx', [
  [p('delicious indo chinese hakka noodles and chilli chicken food photography'), chineseImg],
  [p('delicious indian chicken kathi roll street food photography'), rollsImg],
  [p('delicious luxury north indian butter chicken and naan food photography'), northIndianImg],
]);

replaceInFile('src/components/Specialities.tsx', [
  [p('delicious indian chicken kathi roll street food photography'), rollsImg],
  [p('delicious luxury north indian butter chicken and naan food photography'), northIndianImg],
  [p('delicious indo chinese hakka noodles and chilli chicken food photography'), chineseImg],
]);

// FAQPage.tsx & About.tsx & AboutPage.tsx & FinalCTA.tsx & MenuPage.tsx 
replaceInFile('src/pages/FAQPage.tsx', [
  [p('luxury indian restaurant interior with warm lighting', 1974, 800), getUrl('restaurant,interior', 104, 1974, 800)]
]);
replaceInFile('src/components/About.tsx', [
  [p('luxurious modern indian restaurant fine dining interior', 800, 600), getUrl('restaurant,dining', 105, 800, 600)]
]);
replaceInFile('src/pages/AboutPage.tsx', [
  [p('chef cooking in a high end commercial kitchen cinematic lighting', 1974, 1000), getUrl('chef,cooking', 106, 1974, 1000)]
]);
replaceInFile('src/components/FinalCTA.tsx', [
  [p('massive feast of indian food on a dark table top down view', 1400, 800), getUrl('feast,food', 107, 1400, 800)]
]);
replaceInFile('src/pages/MenuPage.tsx', [
  [p('beautifully plated indian curry dish fine dining', 1974, 800), getUrl('curry,plate', 108, 1974, 800)]
]);

// BlogPage.tsx 
replaceInFile('src/pages/BlogPage.tsx', [
  [p('authentic lucknow dum biryani in a handi with steam food photography', 1200, 800), getUrl('biryani,food', 109, 1200, 800)],
  [p('vibrant indian spices in wooden bowls on a dark table', 1200, 800), getUrl('spices,food', 110, 1200, 800)],
  [p('happy people celebrating holi festival with colors in a restaurant', 1200, 800), getUrl('festival,party', 111, 1200, 800)],
  [p('crispy golden masala dosa with sambar and chutney food photography', 1200, 800), getUrl('dosa,food', 112, 1200, 800)],
  [p('colorful indian street food pani puri chaat on a plate', 1200, 800), getUrl('snacks,food', 113, 1200, 800)],
  [p('steaming cup of indian masala chai pouring into a glass', 1200, 800), getUrl('chai,tea', 114, 1200, 800)],
  [p('assortment of raw indian spices and ingredients top down photography', 1974, 800), getUrl('spices,ingredients', 115, 1974, 800)],
]);

// EventsPage.tsx & Events.tsx
const event1 = getUrl('live,music', 116);
const event2 = getUrl('food,festival', 117);
const event3 = getUrl('cooking,class', 118);
const event4 = getUrl('brunch,food', 119);
const event5 = getUrl('party,celebration', 120);

replaceInFile('src/pages/EventsPage.tsx', [
  [p('live music band playing in a luxury restaurant warm lighting'), event1],
  [p('crowded food festival outdoor night lights'), event2],
  [p('chef giving a masterclass cooking demonstration'), event3],
  [p('luxurious weekend brunch spread with champagne'), event4],
  [p('elegant private dining party celebration'), event5],
]);
replaceInFile('src/components/Events.tsx', [
  [p('live music band playing in a luxury restaurant warm lighting'), event1],
  [p('crowded food festival outdoor night lights'), event2],
  [p('chef giving a masterclass cooking demonstration'), event3],
]);

// GalleryPage.tsx & Gallery.tsx 
const g1 = getUrl('restaurant,interior', 121, 1000, 1000);
const g2 = getUrl('chicken,tikka', 122, 1000, 1000);
const g3 = getUrl('indian,dessert', 123, 1000, 1000);
const g4 = getUrl('restaurant,table', 124, 1000, 1000);
const g5 = getUrl('kebab,food', 125, 1000, 1000);
const g6 = getUrl('people,dining', 126, 1000, 1000);
const g7 = getUrl('cocktails,bar', 127, 1000, 1000);
const g8 = getUrl('indian,thali', 128, 1000, 1000);

replaceInFile('src/pages/GalleryPage.tsx', [
  [p('luxurious warm restaurant interior fine dining', 1000, 1000), g1],
  [p('macro shot of spicy indian chicken tikka', 1000, 1000), g2],
  [p('delicious indian dessert gulab jamun with pistachios', 1000, 1000), g3],
  [p('elegant restaurant dining area with set tables', 1000, 1000), g4],
  [p('sizzling hot tandoori kebabs on a platter', 1000, 1000), g5],
  [p('people enjoying dinner at a luxury restaurant', 1000, 1000), g6],
  [p('pouring cocktails at a high end restaurant bar', 1000, 1000), g7],
  [p('beautifully presented indian thali', 1000, 1000), g8],
]);
replaceInFile('src/components/Gallery.tsx', [
  [p('luxurious warm restaurant interior fine dining', 1000, 1000), g1],
  [p('macro shot of spicy indian chicken tikka', 1000, 1000), g2],
  [p('delicious indian dessert gulab jamun with pistachios', 1000, 1000), g3],
  [p('elegant restaurant dining area with set tables', 1000, 1000), g4],
  [p('sizzling hot tandoori kebabs on a platter', 1000, 1000), g5],
  [p('people enjoying dinner at a luxury restaurant', 1000, 1000), g6],
]);

console.log('Fixed pollinations issue');
