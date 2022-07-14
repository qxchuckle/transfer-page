const CACHE_NAME = 'ICDNCache';//可以为Cache版本号，但这样可能会导致缓存冗余累积
let cachelist = [];

self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(cachelist);
            })
    );
});

self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});

const handle = async (req) => {
    return fetch(req.url.replace("https://zzchuckle.vercel.app/", "https://www.chuckle.top/"));
}
