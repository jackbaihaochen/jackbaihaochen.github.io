#!/usr/bin/env node
import { promises as fs } from 'fs';
import path from 'path';

const BASE = 'https://jackbaihaochen.github.io';
const today = new Date().toISOString().slice(0, 10);

const routes = [
  { loc: '/', changefreq: 'weekly', priority: 0.8 },
  { loc: '/tools/json-formatter/', changefreq: 'weekly', priority: 0.8 },
  { loc: '/tools/json-yaml/', changefreq: 'weekly', priority: 0.8 },
  { loc: '/faq.html', changefreq: 'weekly', priority: 0.6 },
  { loc: '/privacy.html', changefreq: 'monthly', priority: 0.5 },
];

const langs = [
  { hreflang: 'zh-CN', param: 'zh' },
  { hreflang: 'en', param: 'en' },
  { hreflang: 'ja', param: 'ja' },
];

function buildXml() {
  const head = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
  const body = routes.map(r => {
    const loc = `${BASE}${r.loc}`;
    const alt = langs.map(l => `\n    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${loc}${loc.includes('?') ? '&' : '?'}lang=${l.param}" />`).join('');
    const xdefault = `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}" />`;
    return `\n  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>${alt}${xdefault}\n  </url>`;
  }).join('');
  const tail = '\n</urlset>\n';
  return head + body + tail;
}

async function writeFileSafe(filepath, content) {
  await fs.mkdir(path.dirname(filepath), { recursive: true });
  await fs.writeFile(filepath, content, 'utf8');
}

async function main() {
  const xml = buildXml();
  // Write to public for Vite copy and to repo root for convenience
  await writeFileSafe(path.resolve('public/sitemap.xml'), xml);
  await writeFileSafe(path.resolve('sitemap.xml'), xml);
  console.log('Sitemap generated at public/sitemap.xml and sitemap.xml');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

