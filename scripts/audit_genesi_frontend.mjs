import fs from 'fs';
import path from 'path';

const pages = [
  'about/page.tsx',
  'page.tsx',
  'studio/page.tsx',
  'services/page.tsx',
  'projects/page.tsx',
  'projects/[projectSlug]/page.tsx',
  'catalogue/page.tsx',
  'catalogue/[categorySlug]/page.tsx',
  'catalogue/[categorySlug]/[productSlug]/page.tsx',
  'materials/page.tsx',
  'materials/GenesiMaterials.tsx',
  'contact/page.tsx',
  'dashboard/page.tsx',
  'trade/page.tsx'
];

console.log('=== AUDITING GENESI FRONTEND PAGES ===\n');

const baseDir = fs.existsSync('src/app/[locale]') ? 'src/app/[locale]' : 'genesi-web/src/app/[locale]';
const compDir = fs.existsSync('src/components') ? 'src/components' : 'genesi-web/src/components';

for (const p of pages) {
  const full = path.join(baseDir, p);
  if (!fs.existsSync(full)) {
    console.log(`[!] File not found: ${full}`);
    continue;
  }
  const content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');

  const usesTranslations = content.includes('getTranslations') || content.includes('useTranslations');
  const hasIsIt = /locale\s*===?\s*['"]it['"]/.test(content);
  const hasHardcodedIt = /href=["']\/it\//.test(content);

  // Look for potential hardcoded Italian words in JSX like >Chi Siamo<, >Scopri<, etc.
  const suspiciousItalian = [];
  const italianWords = [
    'Chi Siamo', 'I Nostri Progetti', 'Servizi', 'Soluzioni Chiavi in Mano', 'Contatti',
    'Esplora', 'Progetti', 'Richiedi', 'Descrizione', 'Specifiche', 'Materiali e Finiture',
    'Torna a', 'Tutti i', 'Visualizza', 'Area Riservata', 'Preventivo'
  ];

  lines.forEach((line, idx) => {
    // Only check lines that look like JSX text (contain > and < or quotes outside imports)
    if (line.includes('//') || line.includes('import ') || line.includes('interface ') || line.includes('type ')) return;
    for (const w of italianWords) {
      if (line.includes(`>${w}<`) || line.includes(`>${w} `) || line.includes(` ${w}<`)) {
        suspiciousItalian.push({ lineNum: idx + 1, word: w, text: line.trim() });
      }
    }
  });

  console.log(`FILE: ${p}`);
  console.log(`  - Uses next-intl translations: ${usesTranslations ? 'YES' : 'NO'}`);
  console.log(`  - Has 'locale === "it"' binary check: ${hasIsIt ? 'YES (needs check)' : 'NO'}`);
  console.log(`  - Has hardcoded '/it/' links: ${hasHardcodedIt ? 'YES (needs fix)' : 'NO'}`);
  if (suspiciousItalian.length > 0) {
    console.log(`  - Suspicious hardcoded Italian occurrences (${suspiciousItalian.length}):`);
    suspiciousItalian.slice(0, 5).forEach(s => {
      console.log(`      Line ${s.lineNum}: "${s.word}" in: ${s.text}`);
    });
  } else {
    console.log(`  - No obvious hardcoded Italian markers detected in JSX tags`);
  }
  console.log('');
}

console.log('=== AUDITING LAYOUT & NAVIGATION COMPONENTS ===\n');

const layoutComponents = [
  'src/components/layout/Header.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/Navigation.tsx',
  'src/components/layout/LanguageSelector.tsx',
  'src/components/home/HomeHero.tsx',
  'src/components/home/FeaturedCollections.tsx',
  'src/components/home/TurnkeySection.tsx'
];

for (const comp of layoutComponents) {
  const full = fs.existsSync(comp) ? comp : path.join('genesi-web', comp);
  if (!fs.existsSync(full)) {
    console.log(`[!] File not found: ${full}`);
    continue;
  }
  const content = fs.readFileSync(full, 'utf8');
  const usesTranslations = content.includes('getTranslations') || content.includes('useTranslations');
  const hasIsIt = /locale\s*===?\s*['"]it['"]/.test(content);
  const hasHardcodedIt = /href=["']\/it\//.test(content);

  console.log(`COMPONENT: ${comp}`);
  console.log(`  - Uses next-intl translations: ${usesTranslations ? 'YES' : 'NO'}`);
  console.log(`  - Has 'locale === "it"' binary check: ${hasIsIt ? 'YES' : 'NO'}`);
  console.log(`  - Has hardcoded '/it/' links: ${hasHardcodedIt ? 'YES' : 'NO'}`);
  console.log('');
}

