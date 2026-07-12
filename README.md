# EMAIL Lab Website

Official website for the **Environmental Monitoring/Modelling and AI Lab (EMAIL)** at Yeungnam University.

## Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- TypeScript
- GitHub Pages + GitHub Actions

## Getting Started

### Prerequisites

- Node.js 22+ (LTS)
- npm

### Local Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview  # preview built site locally
```

### Type Check

```bash
npm run check
```

## Deployment (GitHub Pages)

### 1. Create GitHub Repository

```bash
git init
git add .
git commit -m "feat: initialize EMAIL Lab website"
gh repo create email-lab --public --source=. --push
```

### 2. Configure GitHub Pages

1. Go to repository **Settings > Pages**
2. Set **Source** to **GitHub Actions**
3. The deploy workflow (`.github/workflows/deploy.yml`) runs automatically on push to `main`

### 3. Update Site URL

Edit `astro.config.mjs`:

```js
const SITE_URL = 'https://YOUR_USERNAME.github.io';
const BASE_PATH = '/email-lab';
```

Also update `public/robots.txt` with the correct sitemap URL.

## Content Management

### Adding a New Lab Member

Edit `src/data/people.ts` and add a new entry:

```typescript
{
  id: 'firstname-lastname',
  name: 'Full Name',
  nameKo: '한국이름',
  role: 'ms-phd',  // pi, postdoc, phd, ms-phd, ms, undergraduate
  roleLabel: 'Integrated M.S.–Ph.D. Student',
  roleLabelKo: '석박사통합과정',
  period: '2025–present',
  photo: '/images/people/lastname-firstname.jpg',
  alumni: false,
  displayOrder: 25,
  verified: true,
}
```

### Moving a Member to Alumni

Set `alumni: true` and update `period` and `alumniInfo`.

### Adding a Publication

Edit `src/data/publications.ts` and add at the top of the array:

```typescript
{
  id: 67,
  authors: 'Author1, Author2, ..., & Baek, S. S.',
  title: 'Paper Title',
  journal: 'Journal Name',
  year: 2025,
  volume: '1',
  doi: '10.xxxx/xxxxx',
  researchArea: 'water-quality-hab',
  needsVerification: false,
}
```

### Adding a Research Project

Edit `src/data/projects.ts`.

### Adding News

Create a new `.md` file in `src/content/news/`:

```markdown
---
title: "News Title"
date: 2025-07-12
category: "publication"
draft: false
---

News content here.
```

### Adding Gallery Photos

1. Place optimized images in `public/images/gallery/EVENT_ID/`
2. Update `src/data/gallery.ts` to add image paths
3. See `public/images/gallery/README.md` for details

### Changing Contact Info

Edit `src/data/site.ts` - all contact information is centralized there.

### Changing Google Scholar Link

Update `scholarUrl` and `scholarUserId` in `src/data/site.ts`.

## BibTeX Import

A BibTeX import script can be added at `scripts/import-bibtex.mjs` to convert exported BibTeX to the publications data format.

## Multilingual

The site defaults to English. Korean content is shown alongside English where available. To add full Korean page support, create Korean versions of pages under a `/ko/` path prefix.

## License

All rights reserved. Content belongs to EMAIL Lab, Yeungnam University.
