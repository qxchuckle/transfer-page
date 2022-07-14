const CACHE_NAME = 'ICDNCache';
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
    const res = await fetch(req)
    const resp = res.clone()
    if (!!resp.headers.get('content-type')) {
            return new Response((await resp.text()).replace(/transfer/g, 'www'), {
                headers: resp.headers,
                status: resp.status
            })
    }
    return resp
}
