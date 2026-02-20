# Axciton Static Website

## Project structure
- HTML pages are at repo root (e.g. `index.html`, `products.html`, `downloads.html`).
- Shared styles: `assets/css/styles.css`.
- Shared behavior: `assets/js/main.js`.
- Owner-provided files should be placed in `assets/img/` and `assets/files/`.

## Editing content
1. Replace `{{OWNER_COPY_HERE}}`, `TODO:OWNER_COPY_REQUIRED`, and `TODO:OWNER_FILE_REQUIRED` with finalized copy and asset paths.
2. Replace `{IMAGE_PLACEHOLDER: ...}` blocks with real image markup or updated figures.
3. Keep page metadata (`<title>`, description, OG tags) unique per page for SEO.

## Deployment
- This is a static site; deploy to any static host.
- Ensure canonical URLs and OG image URL placeholders are updated before publishing.

## Local preview
Run:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.
