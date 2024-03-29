const CACHE_NAME = `chat-loader`;
const appShellFiles = [
    '/',
    '/index.html',
    '/sw.js',
    '/main.js',
    '/android-chrome-192x192.png',
    '/android-chrome-512x512.png',
    '/apple-touch-icon.png',
    '/browserconfig.xml',
    '/favicon-16x16.png',
    '/favicon-32x32.png',
    '/favicon.ico',
    '/mstile-150x150.png',
    '/safari-pinned-tab.svg',
    '/site.webmanifest'
    // Include other assets like scripts, stylesheets, and images
];

// Use the install event to pre-cache all initial resources.
self.addEventListener('install', event => {
  console.log("[Service Worker] Install");
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    console.log("[Service Worker] Caching all: app shell and content");
    await cache.addAll(appShellFiles);
  })());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
    //

    // Get the resource from the cache.
      const cachedResponse = await caches.match(event.request);
      console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
      if (cachedResponse) {
        return cachedResponse;
      } else {
          try {
            // If the resource was not in the cache, try the network.
            const fetchResponse = await fetch(event.request);
            const cache = await caches.open(CACHE_NAME);
            console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
            // Save the resource in the cache and return it.
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          } catch (e) {
            // The network failed.
          }
      }
  })());
});