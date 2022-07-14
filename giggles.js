self.addEventListener('fetch', async event => {
    event.respondWith(handle(event.request))
});

const handle = async (req) => {
    const domain = req.url.split('/')[2];
    if (domain.match("unpkg.com")) {
        return fetch(req.url.replace("https://transfer.chuckle.top", "https://www.chuckle.top"));
    }
    else {
        return fetch(req)
    }
}
