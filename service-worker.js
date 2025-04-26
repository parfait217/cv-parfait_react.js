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
  '/icons/image_1.jpg',
  '/icons/image_2.jpg',
  '/icons/image_3.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

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

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(
          function(response) {
            // Vérifiez que nous avons reçu une réponse valide
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone la réponse
            var responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          }
        );
      })
  );
});