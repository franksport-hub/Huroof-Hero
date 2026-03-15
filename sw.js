const CACHE_NAME = 'huroof-hero-v1';
const assetsToCache = [
  './',
  './index.html',
  './manifest.json'
];

// Installeer Service Worker en cache bestanden
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(assetsToCache);
      })
  );
});

// Netwerkverzoeken afhandelen (offline support)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
