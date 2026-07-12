import { readFileSync, writeFileSync } from 'fs';

let content = readFileSync('src/data/publications.ts', 'utf-8');

// Remove all isCorresponding lines
content = content.replace(/\s*isCorresponding: true,\n/g, '\n');

// Parse BibTeX
const bib = readFileSync('../bib.txt', 'utf-8');
const roleMap = new Map();

const regex = /@\w+\{([^,]+),\s*([\s\S]*?)(?=\n@|\n*$)/g;
let m;
while ((m = regex.exec(bib)) !== null) {
  const fields = m[2];
  const authorMatch = fields.match(/author\s*=\s*\{(.*?)\}/);
  const titleMatch = fields.match(/title\s*=\s*\{(.*?)\}/);
  if (!authorMatch || !titleMatch) continue;

  const title = titleMatch[1].replace(/\\\\/g, '').replace(/\\&/g, '&').replace(/--/g, '–');
  const authors = authorMatch[1];
  const authorList = authors.split(' and ').map(a => a.trim());

  let baekPos = -1;
  let baekHasStar = false;

  authorList.forEach((a, i) => {
    const hasStar = a.includes('*');
    const name = a.replace(/\*/g, '').trim().toLowerCase();
    const isBaek = name.includes('baek') && (name.includes('sang') || name.includes('상수'));
    if (isBaek) {
      baekPos = i;
      baekHasStar = hasStar;
    }
  });

  let role = null;
  if (baekPos === 0 && !baekHasStar) role = 'first';
  else if (baekPos === 0 && baekHasStar) role = 'co-first';
  else if (baekPos === 1 && baekHasStar && authorList[0].includes('*')) role = 'co-first';
  else if (baekPos > 1 && baekHasStar) role = 'corresponding';
  else if (baekPos >= 0 && baekPos === authorList.length - 1) role = 'corresponding';

  if (role) {
    const key = title.substring(0, 50).toLowerCase().replace(/[^a-z0-9 ]/g, '');
    roleMap.set(key, role);
  }
}

// Match and insert authorRole
const pubRegex = /title: '([^']+)'/g;
let pm;
const replacements = [];
while ((pm = pubRegex.exec(content)) !== null) {
  const tsTitle = pm[1];
  const key = tsTitle.substring(0, 50).toLowerCase().replace(/[^a-z0-9 ]/g, '');
  const role = roleMap.get(key);
  if (role) {
    const catIdx = content.indexOf('category:', pm.index);
    if (catIdx !== -1 && catIdx - pm.index < 500) {
      const catLineEnd = content.indexOf(',', catIdx);
      replacements.push({ pos: catLineEnd + 1, role });
    }
  }
}

replacements.sort((a, b) => b.pos - a.pos);
for (const r of replacements) {
  content = content.slice(0, r.pos) + `\n    authorRole: '${r.role}',` + content.slice(r.pos);
}

writeFileSync('src/data/publications.ts', content, 'utf-8');

const counts = {};
replacements.forEach(r => { counts[r.role] = (counts[r.role] || 0) + 1; });
console.log(`Updated ${replacements.length} entries:`, counts);
