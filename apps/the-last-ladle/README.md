The Last Ladle — Flutter Web App
================================

How to deploy your Flutter Web build here
-----------------------------------------

1) Build the app with the correct base href and optional service worker strategy.

   Hash-based routing (recommended for GitHub Pages):

       flutter build web \
         --base-href /apps/the-last-ladle/ \
         --pwa-strategy=none

   Notes:
   - Use hash routing (do not call `usePathUrlStrategy()`), so deep links work on GitHub Pages.
   - `--pwa-strategy=none` avoids aggressive caching while you iterate. You can omit this when you’re ready for PWA caching.

2) Copy the contents of your Flutter `build/web/` into this folder:

   - Required files include: `index.html`, `flutter.js`, `assets/`, `icons/`, `manifest.json`, and optionally `flutter_service_worker.js`.
   - The final structure should look like:

       apps/
         the-last-ladle/
           index.html
           flutter.js
           assets/
           icons/
             Icon-192.png
             Icon-512.png
           manifest.json
           (flutter_service_worker.js)  # if PWA caching is enabled

Icons and artwork
-----------------
- For the PWA manifest, provide `icons/Icon-192.png` and `icons/Icon-512.png` in your Flutter web build. Flutter will reference these automatically if present.
- For the website cards, game art placeholders live in `assets/images/games/thelastladle/` (SVG). Replace with your production art when ready.

Test locally
------------
- You can use a simple static server to preview (e.g., `python -m http.server`) at the repo root, then open `http://localhost:8000/apps/the-last-ladle/`.

