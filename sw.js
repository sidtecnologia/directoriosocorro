const CACHE_NAME = 'directorio-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/script.js',
  'assets/css/styles.css',
  // Agrega aquí todas las URLs estáticas que tu app necesita para funcionar offline
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
];

// Evento 'install': se dispara cuando se instala el Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cacheando archivos estáticos');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento 'fetch': se dispara cada vez que la aplicación solicita un recurso
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si el recurso está en caché, lo devuelve
        if (response) {
          return response;
        }
        // Si no está en caché, hace la solicitud a la red
        return fetch(event.request);
      })
  );
});

// Evento 'activate': se dispara cuando se activa un nuevo Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Elimina los cachés viejos
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
