import https from 'https';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    }).on('error', reject);
  });
}

const tests = [
  { loc: 'it', expected: 'Eleganza in Ogni Dettaglio' },
  { loc: 'en', expected: 'Elegance in Every Detail' },
  { loc: 'fr', expected: "Élégance dans les Moindres Détails" },
  { loc: 'de', expected: 'Eleganz in Jedem Detail' },
  { loc: 'ru', expected: 'Элегантность в Каждой Детали' },
  { loc: 'zh', expected: '细节诠释非凡典雅' },
  { loc: 'id', expected: 'Keanggunan di Setiap Detail' }
];

async function check() {
  console.log('Testing rendered HTML for all 7 languages on Vercel:');
  for (const t of tests) {
    const res = await get('https://genesi-pr-ofrontend.vercel.app/' + t.loc);
    const ok = res.body.includes(t.expected);
    console.log(`[${t.loc.toUpperCase()}] HTTP ${res.status} | Text match "${t.expected}": ${ok}`);
  }
}

check().catch(console.error);
