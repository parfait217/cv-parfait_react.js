const CACHE_NAME = 'cv-parfait-cache-v1';
const urlsToCache = [
  '/cv-parfait_react.js/',
  '/cv-parfait_react.js/index.html',
  '/cv-parfait_react.js/manifest.json',
  '/cv-parfait_react.js/assets/index-CioGEDsf.css',
  '/cv-parfait_react.js/assets/index-DDwDUxb2.js',
  '/cv-parfait_react.js/assets/accueil-CVTm2QPe.mp3',
  '/cv-parfait_react.js/assets/experience-B6Oh33Yr.mp3',
  '/cv-parfait_react.js/assets/loisirs-CIW6Pw_U.mp3',
  '/cv-parfait_react.js/assets/contact-BcOejTfv.mp3',
  '/cv-parfait_react.js/assets/loic1-BLE0MWRb.JPG',
  '/cv-parfait_react.js/assets/c-ls9uf1LB.jpeg',
  '/cv-parfait_react.js/assets/velo-BRjqkHHg.jpeg',
  '/cv-parfait_react.js/assets/guerre-CJ5Hkc5M.jpeg',
  '/cv-parfait_react.js/assets/Untitled-f97gyyVf.jpeg',
  '/cv-parfait_react.js/assets/mages-dipwYHEi.jpeg',
  '/cv-parfait_react.js/icons/image_192.png',
  '/cv-parfait_react.js/icons/image_512.png',
  "/cv-parfait_react.js/screenshots/desktop.png",
  '/cv-parfait_react.js/screenshots/mobile.png',
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