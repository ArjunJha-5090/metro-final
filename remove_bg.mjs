import { Jimp } from 'jimp';

async function removeWhite() {
  try {
    const image = await Jimp.read('public/assets/images/logo.png');
    // We can iterate over the pixels
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const red = this.bitmap.data[idx + 0];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      const alpha = this.bitmap.data[idx + 3];

      // White or very light gray
      if (red > 230 && green > 230 && blue > 230) {
        this.bitmap.data[idx + 3] = 0; // Set alpha to 0
      }
    });
    await image.write('public/assets/images/logo-transparent.png');
    console.log('Background removed successfully.');
  } catch (error) {
    console.error('Error:', error);
  }
}

removeWhite();
