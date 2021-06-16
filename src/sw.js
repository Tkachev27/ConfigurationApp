const staticCacheName = 's-app-v2'
const dynamicCaceName = 'd-app-v1'

const assetUrls = ['bundle.js', 'bundle.css', 'index.html', 'offline.html']
self.addEventListener('install', (event) => {
    // const cache = await caches.open(staticCacheName)
    // await cache.addAll(assetUrls)

    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assetUrls)
        })
    )
})

self.addEventListener('activate', async (event) => {
    const casheNames = await caches.keys()
    await Promise.all(
        casheNames
            .filter((name) => name !== staticCacheName)
            .filter((name) => name !== dynamicCaceName)
            .map((name) => caches.delete(name))
    )
})

self.addEventListener('fetch', (event) => {
    

    const { request } = event
    const url = new URL(request.url)

    if (url.origin == location.origin) {
        event.respondWith(cacheFirst(request))
    } else {
        event.respondWith(networkFirst(request))
    }
})

async function cacheFirst(req) {
    const cashed = await caches.match(req)
    return cashed ?? (await fetch(req))
}

async function networkFirst(req) {
    const cache = await caches.open(dynamicCaceName)
    try {
        const response = await fetch(req)
        await cache.put(req, response.clone())
        return response
    } catch {
        const cached = await cache.match(req)
        return cached ?? caches.match('/offline.html')
    }
}
