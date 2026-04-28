const CACHE_NAME = 'marriage-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// 安裝時快取檔案
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 攔截請求，優先讀取快取
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
