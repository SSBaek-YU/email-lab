# Gallery Images

Place lab photos in this directory organized by event.

## Directory Structure

```
gallery/
├── 2024-agu/
│   ├── photo1.jpg
│   └── photo2.jpg
├── 2024-graduation/
│   └── photo1.jpg
└── ...
```

## Naming Convention

- Use lowercase with hyphens: `event-name/descriptive-name.jpg`
- Optimize images before adding (max 1200px width, compress to <200KB)
- Add alt text in `src/data/gallery.ts`

## Adding Photos

1. Place optimized images in a subfolder matching the event ID
2. Update `src/data/gallery.ts` to add image paths to the event's `images` array
3. Rebuild the site
