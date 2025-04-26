const CACHE_NAME = 'cv-parfait-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  // Ajoutez ici les chemins vers vos assets statiques importants
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
  '/icons/android-chrome-192x192.png',
  '/icons/android-chrome-512x512.png'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(    
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});