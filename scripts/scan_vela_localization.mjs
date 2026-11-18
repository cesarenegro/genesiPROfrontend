import fs from 'fs';
import path from 'path';

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (/locale\s*===?\s*['"]it['"]/i.test(line)) {
          console.log('Binary ternary (isIt):', full, 'Line', idx + 1, ':', line.trim());
        }
        if (/href=["']\/it\//i.test(line)) {
          console.log('Hardcoded /it/ link:', full, 'Line', idx + 1, ':', line.trim());
        }
      });
    }
  }
}

console.log('--- Scanning vela app directory ---');
scanDir('genesi-web/src/app/[locale]/vela');
console.log('--- Scanning vela components directory ---');
scanDir('genesi-web/src/components/vela');
console.log('--- Scanning materials directory ---');
scanDir('genesi-web/src/app/[locale]/materials');
console.log('--- Scan completed ---');

