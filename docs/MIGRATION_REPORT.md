# Migration Report

## Source: Google Sites

URL: https://sites.google.com/view/email-modeling-ml-happy

Last checked: 2025-07-12

## Content Migration Status

| Source Page | Content | New Location | Status |
|---|---|---|---|
| Introduction | Lab name, description, research vision, PI info | `src/data/site.ts`, `src/pages/index.astro`, `src/pages/about.astro` | Migrated |
| Members | PI + 6 current members | `src/data/people.ts` | Migrated - needs alumni verification |
| Paper & Patent | 66 publications, 8 patents, 4 awards | `src/data/publications.ts`, `src/data/patents.ts`, `src/data/awards.ts` | Migrated - some entries need DOI verification |
| Gallery | 20+ events listed | `src/data/gallery.ts` | Structure created - photos need manual copy |
| Opening & Contact | Contact info, recruitment info | `src/pages/openings.astro`, `src/pages/contact.astro` | Migrated |

## Items Needing Verification

### People
- [ ] Complete alumni list (not available on current Google Sites)
- [ ] Additional current members not listed
- [ ] Kim Sukyung alumni status and year

### Publications
- [ ] Publications #12 and below (content truncated from source)
- [ ] DOI verification for entries with `needsVerification: true`
- [ ] Volume/issue/pages for entries without them
- [ ] Publication #16 year (listed as 2020 but published in Remote Sensing 2019-2020 range)

### Projects
- [ ] Complete project list (no dedicated projects page found on Google Sites)
- [ ] Funding agencies and amounts
- [ ] Project periods and status

### Contact
- [ ] Verify Room 508, Building E28 is still current

### Images
- [ ] Profile photos exist in project folder but need manual copy to `public/images/people/`
- [ ] Gallery photos exist in project folder but need optimization and copy
- [ ] Research infographics (그림1.png, 그림2.png, 그림3.png) available for use

## Not Migrated

- Google Sites images (could not be downloaded directly via web fetch)
- Detailed project descriptions (no accessible projects page)
- Historical news/announcements
- Full alumni records
