# Custom Domain Setup

## GitHub Pages Custom Domain

### 1. Purchase a Domain

Example domains:
- `email-lab.org`
- `lab.ssbaek.com`
- Subdomain from Yeungnam University

### 2. DNS Configuration

For an apex domain (e.g., `email-lab.org`), add A records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

For a subdomain (e.g., `lab.ssbaek.com`), add a CNAME record:

```
CNAME lab -> USERNAME.github.io
```

### 3. GitHub Repository Settings

1. Go to **Settings > Pages**
2. Under **Custom domain**, enter your domain
3. Check **Enforce HTTPS**

### 4. CNAME File

Create `public/CNAME` with your domain:

```
email-lab.org
```

### 5. Update Astro Config

In `astro.config.mjs`:

```js
const SITE_URL = 'https://email-lab.org';
const BASE_PATH = '/';  // No base path needed for custom domain
```

Also update `public/robots.txt` with the new sitemap URL.

### 6. HTTPS

GitHub Pages provides free HTTPS via Let's Encrypt. It activates automatically after DNS propagation (may take up to 24 hours).
