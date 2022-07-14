self.addEventListener('install', async function (installEvent) {
    self.skipWaiting();
    installEvent.waitUntil();
});

self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});

const handle = async (req) => {
    const res = await fetch(req)
    const resp = res.clone()
    return new Response((await resp.text()).replace(/transfer.chuckle.top/g, 'www.chuckle.top'), {
        headers: resp.headers,
        status: resp.status
    })
}
