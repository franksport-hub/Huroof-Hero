const CACHE_NAME = 'huroof-hero-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
  // Later voegen we hier CSS, afbeeldingen en geluidsbestanden toe
];

// Installeer de Service Worker en sla bestanden op in de cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(assetsToCache);
      })
  );
});

// Haal bestanden uit de cache als er geen internet is
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
