import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const SRC_ROOT = 'C:/Users/USER/Dropbox/영남대학교/홈페이지';
const OUT_ROOT = path.join(process.cwd(), 'public/images/gallery');

// folder (relative to SRC_ROOT) -> gallery event id
const MAP = {
  '2022/2022_06_21_나드리': '2022-outing',
  '2022/2022_생일': '2022-birthday',
  '2022/환경공학회': '2022-kosenv',
  '2023/AGU': '2023-agu',
  '2023/EGU': '2023-egu',
  '2023/겨울MT': '2023-winter-retreat',
  '2023/대한환경공학회': '2023-kosenv',
  '2023/수빈bye사진': '2023-farewell-subin',
  '2023/스승의날': '2023-teachers-day',
  '2023/여름MT': '2023-summer-retreat',
  '2023/팝스포럼': '2023-pops-forum',
  '2024/240216_앞산등산': '2024-apsan',
  '2024/240222_졸업식': '2024-graduation',
  '2024/240409_벚꽃': '2024-cherry-blossom',
  '2024/240831_bye_수경': '2024-farewell-sukyung',
  '2024/241115_가을소풍': '2024-autumn',
  '2024/241207_AGU': '2024-agu',
  '2024/250123_소백산_MT': '2025-winter-retreat',
  '2024/250227_KIOST_방문': '2025-kiost',
  '사진추가/대한환경공학회_251119': '2025-kosenv',
  '사진추가/권나현 졸업식_260220': '2026-graduation',
};

// single source file (relative to SRC_ROOT) -> gallery event id
// used for one-off photos dropped in 사진추가 (named 행사이름_날짜.jpg)
const SINGLE = {
  '사진추가/EGU conference_2026.05.04.jpg': '2026-egu',
  '사진추가/KIOST 연구교류회_2026.07.07.jpg': '2026-kiost',
};

const isImg = (f) => /\.(jpe?g|png)$/i.test(f);
const result = {};

for (const [folder, id] of Object.entries(MAP)) {
  const srcDir = path.join(SRC_ROOT, folder);
  const files = fs.readdirSync(srcDir).filter(isImg).sort();
  const outDir = path.join(OUT_ROOT, id);
  fs.mkdirSync(outDir, { recursive: true });

  const paths = [];
  let i = 1;
  for (const f of files) {
    const outName = `${i}.jpg`;
    const outPath = path.join(outDir, outName);
    await sharp(path.join(srcDir, f))
      .rotate() // respect EXIF orientation
      .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(outPath);
    const kb = Math.round(fs.statSync(outPath).size / 1024);
    paths.push(`/images/gallery/${id}/${outName}`);
    console.log(`  ${id}/${outName}  (${kb} KB)  <- ${f}`);
    i++;
  }
  result[id] = paths;
}

for (const [file, id] of Object.entries(SINGLE)) {
  const srcFile = path.join(SRC_ROOT, file);
  const outDir = path.join(OUT_ROOT, id);
  fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, '1.jpg');
  await sharp(srcFile)
    .rotate() // respect EXIF orientation
    .resize({ width: 1200, height: 1200, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(outPath);
  const kb = Math.round(fs.statSync(outPath).size / 1024);
  console.log(`  ${id}/1.jpg  (${kb} KB)  <- ${path.basename(file)}`);
  result[id] = [`/images/gallery/${id}/1.jpg`];
}

fs.writeFileSync(
  path.join(process.cwd(), 'scripts/gallery-images.json'),
  JSON.stringify(result, null, 2)
);
console.log('\nDone. Wrote scripts/gallery-images.json');
