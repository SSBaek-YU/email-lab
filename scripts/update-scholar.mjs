// Fetch Google Scholar citation metrics via SerpAPI and write them to
// src/data/scholar.json. Run by the "Update Scholar Stats" GitHub Action
// on a weekly schedule (or manually). Requires the SERPAPI_KEY env var.
//
//   node scripts/update-scholar.mjs
//
// SerpAPI free tier (100 searches/month) is far more than a weekly run needs.
import fs from 'node:fs';
import path from 'node:path';

const API_KEY = process.env.SERPAPI_KEY;
const AUTHOR_ID = 'JarDiqkAAAAJ'; // Prof. Sang-Soo Baek

if (!API_KEY) {
  console.error('ERROR: SERPAPI_KEY environment variable is not set.');
  process.exit(1);
}

const url =
  `https://serpapi.com/search.json?engine=google_scholar_author` +
  `&author_id=${AUTHOR_ID}&api_key=${API_KEY}`;

const res = await fetch(url);
if (!res.ok) {
  console.error(`ERROR: SerpAPI request failed with HTTP ${res.status}`);
  process.exit(1);
}

const data = await res.json();
const table = data?.cited_by?.table;
if (!Array.isArray(table)) {
  console.error('ERROR: unexpected SerpAPI response (no cited_by.table).');
  console.error(JSON.stringify(data?.error ?? data, null, 2).slice(0, 500));
  process.exit(1);
}

// table looks like:
// [{ citations: { all, since_YYYY } }, { h_index: {...} }, { i10_index: {...} }]
const pick = (key) => {
  const row = table.find((r) => r && r[key]);
  const val = row?.[key]?.all;
  return typeof val === 'number' ? val : null;
};

const totalCitations = pick('citations');
const hIndex = pick('h_index');
const i10Index = pick('i10_index');

if (hIndex == null || totalCitations == null) {
  console.error('ERROR: could not parse h-index / citations from response.');
  process.exit(1);
}

const stats = {
  totalCitations,
  hIndex,
  i10Index,
  updatedAt: new Date().toISOString().slice(0, 10),
};

const outPath = path.join(process.cwd(), 'src/data/scholar.json');
fs.writeFileSync(outPath, JSON.stringify(stats, null, 2) + '\n');
console.log('Updated src/data/scholar.json:', stats);
