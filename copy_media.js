const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Bhavin Parmar\\.gemini\\antigravity-ide\\brain\\eb5a148d-00a4-439f-83d5-707302332bf2';
const destDir = 'f:\\Bhavin\\My Website\\cine-pulse-folio-main\\public\\logos';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Map the known file sizes to the correct logo names
const fileMapping = {
  8832: 'solidworks.png',
  16964: 'fusion360.png',
  110600: 'access.png',
  113348: 'office.png'
};

const files = fs.readdirSync(srcDir);
let copiedCount = 0;

for (const file of files) {
  if (file.startsWith('media__') && file.endsWith('.png')) {
    const filePath = path.join(srcDir, file);
    const stats = fs.statSync(filePath);
    
    if (fileMapping[stats.size]) {
      const newName = fileMapping[stats.size];
      fs.copyFileSync(filePath, path.join(destDir, newName));
      console.log(`Successfully copied and renamed to: ${newName}`);
      copiedCount++;
    }
  }
}

if (copiedCount > 0) {
  console.log(`\nAll done! ${copiedCount} logos were copied to public/logos/. Your website should now display them correctly.`);
} else {
  console.log('No matching logo files were found to copy.');
}
