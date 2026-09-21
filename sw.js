self.addEventListener("install", function (e) {
  e.waitUntil(caches.open("gw-v1").then(function (c) {
    return c.addAll(["./", "./index.html", "./chats.js", "./manifest.json"]);
  }));
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  e.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      return r || fetch(e.request);
    })
  );
});
