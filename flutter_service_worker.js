'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "d1cf3285cc2bedfbc86320c7db92f1c9",
"version.json": "e2c6e98aeaeb063715ca0418271acd88",
"splash/img/light-2x.png": "15c711d615b4f71881276ec18b387218",
"splash/img/dark-4x.png": "42884e1fbc9c04bd8afa11eeaf7f01e9",
"splash/img/light-3x.png": "31b8e694a596189403827dc1f4a3414a",
"splash/img/dark-3x.png": "31b8e694a596189403827dc1f4a3414a",
"splash/img/light-4x.png": "42884e1fbc9c04bd8afa11eeaf7f01e9",
"splash/img/dark-2x.png": "15c711d615b4f71881276ec18b387218",
"splash/img/dark-1x.png": "3ec3fab1cd5b21947f1d430aa5fe173d",
"splash/img/light-1x.png": "3ec3fab1cd5b21947f1d430aa5fe173d",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "c7a4cbc4f9b4c51264c57bdffbb83f48",
"safari-pinned-tab.svg": "e89975102df75fe39bf3dea260df71a4",
"favicon.ico": "0806bf57a00de1e99aaf6fb80757cb09",
"index.html": "856c8cded773333202695278c43f3947",
"/": "856c8cded773333202695278c43f3947",
"android-chrome-192x192.png": "ac95c0fa34df4965c5bad07babad6a8a",
"apple-touch-icon.png": "7995031b019f754ce59893f159d5f23e",
"main.dart.js": "cd4beb94cf0200150d16561205cfb2d3",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"android-chrome-512x512.png": "1d886144dbb209b1f4b857805a9063aa",
"site.webmanifest": "16ce9348ed8042c80163269502e90f4f",
"manifest.json": "49d5eefb1057fa9486db806acc1b814a",
"mstile-150x150.png": "a04e26fd246761580b81b92d7ed058a0",
"assets/AssetManifest.json": "2fda9c3dea331a9471a676b92240e3a6",
"assets/NOTICES": "ce6a79789259d1d5e39514ff18c161db",
"assets/FontManifest.json": "dce67f094af9ed3a5b57546be0f01b4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9713978c68bcf226d5b984ada43cb8a0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "c2281cf0a22c29917ebf755ba9d11e50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "45e1d3666d6e25e67f39fc1ae39837ce",
"assets/shaders/ink_sparkle.frag": "57f2f020e63be0dd85efafc7b7b25d80",
"assets/AssetManifest.bin": "8ed93f286c3b504f317551359e0a1688",
"assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/MaterialIcons-Regular.otf": "bfe509af075b8dc76cb95ea25d84ec07",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/database.png": "eefc92872a64dcf256cd9299fec374a2",
"assets/assets/java.png": "7a7a2d16cd7c8ebe9dadb35d2147938d",
"assets/assets/android.png": "54a1b34c313cc1b568ffc0fb813c29b4",
"assets/assets/splash.png": "f8e0b7ba001b09d3eb8d6cfeebfa241e",
"assets/assets/graduate.png": "e5115bd05312f07a9641c75d1a9b9658",
"assets/assets/ml.png": "36503e613925728612886c62a5949569",
"assets/assets/backend.png": "6ad3eb9dc1c7222478408f778abdc607",
"assets/assets/dev_logo.png": "09825437a478ccebe1f9235b5f886315",
"assets/assets/frontend.png": "c960c79635f0bd160c06d9e3e0b4bebc",
"browserconfig.xml": "ee4194d2187c8df1a2601077fa52ff5e",
"favicon-32x32.png": "ce5c9064e97fe3b59e7bb13aa547cf84",
"canvaskit/canvaskit.js": "1338eccfe817956d34753284f2b1cdf6",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "78daff025a185d11c6a08349e295f9eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
