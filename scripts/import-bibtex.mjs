/**
 * BibTeX to Publications Data Converter
 *
 * Usage:
 *   node scripts/import-bibtex.mjs path/to/references.bib
 *
 * This script parses a BibTeX file and outputs publication entries
 * in the format used by src/data/publications.ts
 *
 * Export BibTeX from Google Scholar:
 *   1. Go to Google Scholar profile
 *   2. Select publications
 *   3. Click Export > BibTeX
 *   4. Save as .bib file
 *   5. Run this script
 */

import { readFileSync } from 'fs';

const bibFile = process.argv[2];
if (!bibFile) {
  console.error('Usage: node scripts/import-bibtex.mjs <bibtex-file>');
  process.exit(1);
}

const content = readFileSync(bibFile, 'utf-8');

// Simple BibTeX parser
function parseBibtex(text) {
  const entries = [];
  const regex = /@(\w+)\{([^,]+),\s*([\s\S]*?)(?=\n@|\n*$)/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const entry = { type: match[1], key: match[2].trim() };
    const fields = match[3];

    const fieldRegex = /(\w+)\s*=\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g;
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(fields)) !== null) {
      entry[fieldMatch[1].toLowerCase()] = fieldMatch[2].trim();
    }

    entries.push(entry);
  }

  return entries;
}

const entries = parseBibtex(content);

console.log('// Auto-generated from BibTeX import');
console.log(`// ${entries.length} entries found\n`);

entries.forEach((entry, i) => {
  const pub = {
    id: entries.length - i,
    authors: entry.author?.replace(/\band\b/g, ',').replace(/\s+/g, ' ') || '',
    title: entry.title || '',
    journal: entry.journal || entry.booktitle || '',
    year: parseInt(entry.year) || 0,
    volume: entry.volume || undefined,
    issue: entry.number || undefined,
    pages: entry.pages || undefined,
    doi: entry.doi || undefined,
    needsVerification: true,
  };

  console.log(`  ${JSON.stringify(pub, null, 2).replace(/\n/g, '\n  ')},`);
});

// Check for duplicate DOIs
const dois = entries.filter(e => e.doi).map(e => e.doi);
const duplicateDois = dois.filter((doi, i) => dois.indexOf(doi) !== i);
if (duplicateDois.length > 0) {
  console.error('\n// WARNING: Duplicate DOIs found:');
  duplicateDois.forEach(doi => console.error(`//   ${doi}`));
}

// Check for duplicate titles
const titles = entries.map(e => e.title?.toLowerCase());
const duplicateTitles = titles.filter((t, i) => t && titles.indexOf(t) !== i);
if (duplicateTitles.length > 0) {
  console.error('\n// WARNING: Duplicate titles found:');
  duplicateTitles.forEach(t => console.error(`//   ${t}`));
}
