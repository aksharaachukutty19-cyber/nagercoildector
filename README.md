# Nagercoil Decors website
Run: `npm install && npm run dev` · Build: `npm run build` · Deploy `dist/` with SPA fallback (`public/_redirects` is included for Netlify/Cloudflare; on other hosts rewrite all routes to index.html).
## Owner checklist
- `src/data/siteConfig.ts`: set `whatsappNumber` (BUSINESS_WHATSAPP_NUMBER), real `url`, optional `mapUrl`.
- Replace `https://www.example.com` in `public/sitemap.xml` and `public/robots.txt`.
- Photos: add WebP files to `public/images` named as in `src/data/gallery.ts` (plus `hero.webp`, `signature.webp`); until then labelled placeholders show. Only use authorised photos; set `placeholder:false` for real project photos.
- Service copy: `src/data/services.ts`.
