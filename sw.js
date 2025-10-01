const CACHE_NAME = 'directorio-v1';

// Lista de archivos estáticos esenciales para el App Shell (la aplicación base)
const urlsToCache = [
    '/',
    'index.html',
    'sw.js',
    'assets/css/styles.css',
    'assets/js/script.js',
    'assets/js/data.css',
    'https://cdn.tailwindcss.com', // Tailwind CSS CDN
    'https://unpkg.com/lucide@latest', // Lucide Icons
    'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' // Fuente Inter
];

// Instalación del Service Worker y precarga de recursos
self.addEventListener('install', (event) => {
    // Forzar la activación inmediata del nuevo Service Worker
    self.skipWaiting(); 
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                // Agregar todos los archivos esenciales a la caché
                return cache.addAll(urlsToCache);
            })
            .catch((error) => {
                console.error('Fallo en la precarga de la caché:', error);
            })
    );
});

// Activación del Service Worker y limpieza de cachés antiguas
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Eliminar cachés que no coincidan con el CACHE_NAME actual
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Estrategia de caché: Cache-First, Network-Fallback
self.addEventListener('fetch', (event) => {
    // Ignorar las solicitudes de Google Maps y Facebook (que son iframes y no deben ser cacheados localmente)
    if (event.request.url.includes('google.com/maps') || event.request.url.includes('facebook.com')) {
        return;
    }
    
    event.respondWith(
        // Intentar responder con el recurso de la caché
        caches.match(event.request)
            .then((response) => {
                // Si está en caché, devolver la respuesta cacheada
                if (response) {
                    return response;
                }

                // Si no está en caché, intentar obtenerlo de la red
                return fetch(event.request).then(
                    (response) => {
                        // Comprobar si la respuesta es válida (status 200, no es opaca)
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clonar la respuesta para poder almacenarla en caché
                        const responseToCache = response.clone();

                        // Abrir la caché y almacenar la nueva respuesta
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                ).catch(() => {
                    // Manejo de fallos de red. 
                    // Si falla, el usuario verá el App Shell cacheado, pero los datos dinámicos fallarán.
                    // Para una PWA de una sola página como esta, la caché de archivos esenciales es suficiente.
                    return new Response('Offline: Recurso no encontrado en caché.', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                });
            })
    );
});
