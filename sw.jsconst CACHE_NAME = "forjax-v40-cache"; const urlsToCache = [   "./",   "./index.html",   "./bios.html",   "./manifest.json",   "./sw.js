const CACHE_NAME = "forjax-v40-cache";
const urlsToCache = [
  "./",
  "./index.html",
  "./bios.html",
  "./manifest.json",
  "./forjax_logo_metal.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
