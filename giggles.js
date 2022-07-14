const CACHE_NAME = 'ICDNCache';
let cachelist = [];

let cachelist = [
];

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
    return fetch(req.url.replace("https://transfer.chuckle.top/", "https://www.chuckle.top/"));
}
