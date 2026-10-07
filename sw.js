const CACHE = 'profes-tossal-v4';
const ASSETS = ['./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./icons/ausencias-comedor.svg','./icons/menu-comedor.svg','./icons/calendario.svg','./icons/contacto-docentes.svg','./icons/web-colegio.svg','./icons/correo.svg','./imagenes/menu-comedor.svg','./horarios/1A.pdf','./horarios/2A.pdf','./horarios/3A.pdf','./horarios/4A.pdf','./horarios/5A.pdf','./horarios/6A.pdf','./horarios/Garcia.pdf','./horarios/Lopez.pdf','./horarios/Martinez.pdf','./horarios/Sanchez.pdf'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
