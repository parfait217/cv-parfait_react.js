const CACHE_NAME = 'cv-parfait-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/index-CioGEDsf.css',
  '/assets/index-DDwDUxb2.js',
  '/assets/accueil-CVTm2QPe.mp3',
  '/assets/experience-B6Oh33Yr.mp3',
  '/assets/loisirs-CIW6Pw_U.mp3',
  '/assets/contact-BcOejTfv.mp3',
  '/assets/loic1-BLE0MWRb.JPG',
  '/assets/c-ls9uf1LB.jpeg',
  '/assets/velo-BRjqkHHg.jpeg',
  '/assets/guerre-CJ5Hkc5M.jpeg',
  '/assets/Untitled-f97gyyVf.jpeg',
  '/assets/mages-dipwYHEi.jpeg',
  '/icons/image_192.png',
  '/icons/image_512.png',
  "/screenshots/desktop.png",
  '/screenshots/mobile.png',

];

// Installation du service worker
self.addEventListener('install', function(event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation du service worker
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});

// Interception des requêtes
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});