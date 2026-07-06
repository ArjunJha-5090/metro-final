import fs from 'fs';
import path from 'path';

function replaceInFile(filePath, replacements) {
  const fullPath = path.join(process.cwd(), filePath);
  let content = fs.readFileSync(fullPath, 'utf-8');
  for (const [search, replace] of replacements) {
    content = content.replace(search, replace);
  }
  fs.writeFileSync(fullPath, content, 'utf-8');
  console.log(`Updated ${filePath}`);
}

const getUrl = (prompt, w=800, h=600) => `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${w}&height=${h}&nologo=true`;

// FoodStallsPage.tsx & FoodStalls.tsx & Specialities.tsx
const rollsImg = getUrl('delicious indian chicken kathi roll street food photography');
const northIndianImg = getUrl('delicious luxury north indian butter chicken and naan food photography');
const chineseImg = getUrl('delicious indo chinese hakka noodles and chilli chicken food photography');

replaceInFile('src/pages/FoodStallsPage.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=36/g, chineseImg],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=37/g, rollsImg],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=38/g, northIndianImg],
]);

replaceInFile('src/components/FoodStalls.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=6/g, chineseImg],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=7/g, rollsImg],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=8/g, northIndianImg],
]);

replaceInFile('src/components/Specialities.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=19/g, rollsImg],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=20/g, northIndianImg],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=21/g, chineseImg],
]);

// FAQPage.tsx & About.tsx & AboutPage.tsx & FinalCTA.tsx & MenuPage.tsx (Generic beautiful restaurant / food images)
replaceInFile('src/pages/FAQPage.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=35/g, getUrl('luxury indian restaurant interior with warm lighting', 1974, 800)]
]);
replaceInFile('src/components/About.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=1/g, getUrl('luxurious modern indian restaurant fine dining interior', 800, 600)]
]);
replaceInFile('src/pages/AboutPage.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=22/g, getUrl('chef cooking in a high end commercial kitchen cinematic lighting', 1974, 1000)]
]);
replaceInFile('src/components/FinalCTA.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=5/g, getUrl('massive feast of indian food on a dark table top down view', 1400, 800)]
]);
replaceInFile('src/pages/MenuPage.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=47/g, getUrl('beautifully plated indian curry dish fine dining', 1974, 800)]
]);

// BlogPage.tsx (Specific articles)
replaceInFile('src/pages/BlogPage.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=23/g, getUrl('authentic lucknow dum biryani in a handi with steam food photography', 1200, 800)],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=24/g, getUrl('vibrant indian spices in wooden bowls on a dark table', 1200, 800)],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=25/g, getUrl('happy people celebrating holi festival with colors in a restaurant', 1200, 800)],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=26/g, getUrl('crispy golden masala dosa with sambar and chutney food photography', 1200, 800)],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=27/g, getUrl('colorful indian street food pani puri chaat on a plate', 1200, 800)],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=28/g, getUrl('steaming cup of indian masala chai pouring into a glass', 1200, 800)],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=29/g, getUrl('assortment of raw indian spices and ingredients top down photography', 1974, 800)],
]);

// EventsPage.tsx & Events.tsx
const event1 = getUrl('live music band playing in a luxury restaurant warm lighting');
const event2 = getUrl('crowded food festival outdoor night lights');
const event3 = getUrl('chef giving a masterclass cooking demonstration');
const event4 = getUrl('luxurious weekend brunch spread with champagne');
const event5 = getUrl('elegant private dining party celebration');
replaceInFile('src/pages/EventsPage.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=30/g, event1],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=31/g, event2],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=32/g, event3],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=33/g, event4],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=34/g, event5],
]);
replaceInFile('src/components/Events.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=2/g, event1],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=3/g, event2],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=4/g, event3],
]);

// GalleryPage.tsx & Gallery.tsx (Various beautiful shots)
const g1 = getUrl('luxurious warm restaurant interior fine dining', 1000, 1000);
const g2 = getUrl('macro shot of spicy indian chicken tikka', 1000, 1000);
const g3 = getUrl('delicious indian dessert gulab jamun with pistachios', 1000, 1000);
const g4 = getUrl('elegant restaurant dining area with set tables', 1000, 1000);
const g5 = getUrl('sizzling hot tandoori kebabs on a platter', 1000, 1000);
const g6 = getUrl('people enjoying dinner at a luxury restaurant', 1000, 1000);
const g7 = getUrl('pouring cocktails at a high end restaurant bar', 1000, 1000);
const g8 = getUrl('beautifully presented indian thali', 1000, 1000);

replaceInFile('src/pages/GalleryPage.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=39/g, g1],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=40/g, g2],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=41/g, g3],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=42/g, g4],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=43/g, g5],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=44/g, g6],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=45/g, g7],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=46/g, g8],
]);
replaceInFile('src/components/Gallery.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=9/g, g1],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=10/g, g2],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=11/g, g3],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=12/g, g4],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=13/g, g5],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=14/g, g6],
]);

// Reviews.tsx (Avatars - use real people from pexels or a generic profile)
replaceInFile('src/components/Reviews.tsx', [
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=16/g, 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=17/g, 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200'],
  [/https:\/\/loremflickr\.com\/800\/600\/food,dish\?lock=18/g, 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200'],
]);

console.log('All images contextually updated!');
