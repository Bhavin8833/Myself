import fs from 'fs';
import https from 'https';
import path from 'path';

const logos = {
  fusion360: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Autodesk_Fusion_360_Logo.svg',
  msoffice: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg',
  msaccess: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Microsoft_Office_Access_%282019-present%29.svg',
  solidworks: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Dassault_Syst%C3%A8mes_SolidWorks_Corp._Logo.svg',
  spss: 'https://upload.wikimedia.org/wikipedia/commons/8/86/IBM_SPSS_Statistics_logo.png'
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        reject(`Failed to download: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err.message);
    });
  });
};

async function main() {
  const assetsDir = path.join(process.cwd(), 'src', 'assets', 'logos');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }

  for (const [name, url] of Object.entries(logos)) {
    const ext = url.endsWith('.png') ? '.png' : '.svg';
    const dest = path.join(assetsDir, `${name}${ext}`);
    try {
      await download(url, dest);
      console.log(`Downloaded ${name}`);
    } catch (e) {
      console.error(`Error downloading ${name}:`, e);
    }
  }
}

main();
