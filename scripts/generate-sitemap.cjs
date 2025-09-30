// scripts/generate-sitemap.js
    const fs = require('fs');
const path = require('path');

const hostname = 'https://studioa1.com.br';
const pages = [
  '/', // raiz SPA
  // adicionar outras rotas fixas aqui futuramente
];

const urls = pages.map(p => {
  return `<url>
    <loc>${hostname}${p}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml);
console.log('✅ Sitemap gerado em', outPath);



