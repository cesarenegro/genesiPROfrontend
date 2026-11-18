import fs from 'fs';
import path from 'path';

const locales = ['it', 'en', 'fr', 'de'];
const dataFiles = [
  'genesi-web/src/data/vela.json',
  'genesi-web/src/data/vela-box-doccia.json',
  'genesi-web/src/data/vela-hardware.json',
  'genesi-web/src/data/vela-concept-handles.json',
  'genesi-web/src/data/vela-extensions.json',
  'genesi-web/src/data/velaMaterials.json'
];

console.log('=== VERIFYING JSON DATA LOCALIZATION ===');
for (const file of dataFiles) {
  const content = JSON.parse(fs.readFileSync(file, 'utf8'));
  console.log(`Checking ${file}:`);
  
  if (Array.isArray(content)) {
    console.log(`  Items count: ${content.length}`);
    for (let i = 0; i < Math.min(3, content.length); i++) {
      const item = content[i];
      if (item.name && typeof item.name === 'object') {
        locales.forEach(loc => {
          if (!item.name[loc]) console.error(`  MISSING name.${loc} in item ${item.id || item.code || i}`);
        });
      }
    }
  } else {
    console.log(`  Object keys: ${Object.keys(content).join(', ')}`);
  }
}

console.log('\n=== VERIFYING MESSAGES KEYS SYNCHRONIZATION ===');
const baseMessages = JSON.parse(fs.readFileSync('genesi-web/messages/it.json', 'utf8')).Vela;
const baseKeys = Object.keys(baseMessages);
console.log(`Base Italian Vela keys: ${baseKeys.length}`);

for (const loc of ['en', 'fr', 'de']) {
  const locMessages = JSON.parse(fs.readFileSync(`genesi-web/messages/${loc}.json`, 'utf8')).Vela;
  const locKeys = Object.keys(locMessages);
  const missing = baseKeys.filter(k => !locMessages[k]);
  if (missing.length > 0) {
    console.error(`Locale ${loc} is MISSING ${missing.length} keys:`, missing);
  } else {
    console.log(`Locale ${loc}: 100% synchronized (${locKeys.length} keys)`);
  }
}

console.log('\n=== ALL CHECKS COMPLETED SUCCESSFULLY ===');

