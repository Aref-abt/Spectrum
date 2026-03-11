const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images', 'gallery');

async function processImages() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('compressed_') || !file.toLowerCase().match(/\.(jpg|jpeg|png)$/)) continue;
    
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.size > 1024 * 1024) { // > 1MB
      const tempPath = path.join(dir, `compressed_${file}`);
      console.log(`Compressing ${file}...`);
      try {
        await sharp(filePath)
          .resize({ width: 1920, withoutEnlargement: true })
          .jpeg({ quality: 75 })
          .toFile(tempPath);
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    }
  }
  console.log('Finished creating compressed files.');
}

processImages();
