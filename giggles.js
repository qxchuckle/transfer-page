self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil();
});

self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});

const handle = async (req) => {
    return fetch(req.url.replace("https://transfer.chuckle.top/", "https://www.chuckle.top/"));
}
