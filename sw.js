/* 늘 인터넷에서 새 파일을 먼저 받고, 인터넷이 안 될 때만 저장해 둔 것을 씁니다.
   (예전에는 처음 받은 chats.js 를 계속 써서, 글을 고쳐도 휴대폰에 안 바뀌었습니다) */
var CACHE = "gw-v2";
self.addEventListener("install", function () {
  self.skipWaiting();
});
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  var key = url.origin + url.pathname;
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(key, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(key).then(function (r) { return r || caches.match(req); });
    })
  );
});
