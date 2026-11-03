# Catherin Demo Website

A demo personal website: plain HTML/CSS/JS, no build step, hosted on Cloudflare.

## Structure

```
public/          Site root (served as-is)
  index.html, projects.html, about.html, experience.html, cv.html, contact.html, 404.html
  css/style.css
  js/main.js
  _headers       Cloudflare security/cache headers
wrangler.jsonc   Cloudflare config (static assets from ./public)
```

## Deploy on Cloudflare

Connect this repo in the Cloudflare dashboard (Workers & Pages → Create → Connect to Git):

- Build command: *(leave empty)*
- Build output / assets directory: `public`

Every push to `main` then deploys automatically.

## Local preview

Open `public/index.html` in a browser, or with Node installed: `npx wrangler dev`.
