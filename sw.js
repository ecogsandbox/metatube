/* MetaTube service worker — network first, so updates you push to GitHub show up straight away;
   falls back to the cached app shell when offline. Bump VERSION if you ever need to flush it. */
var VERSION = "glasstube-v1";
var SHELL = ["./", "index.html", "styles.css", "app.js", "config.js", "manifest.webmanifest", "icons/icon-192.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin) return; // never touch YouTube / Google traffic
  e.respondWith(fetch(e.request).then(function (r) {
    var copy = r.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copy); }); return r;
  }).catch(function () { return caches.match(e.request, { ignoreSearch: true }); }));
});
