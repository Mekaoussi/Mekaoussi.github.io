'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6fa29daa958cd2721a8acef161e94d21",
"assets/AssetManifest.bin.json": "c0f6607355ec7813848e9d97416352d2",
"assets/AssetManifest.json": "9f17afe8b2344aa6f2eb93765b35b503",
"assets/assets/images/avatar.jpg": "119fffbfa1344a20d2e31654d4172862",
"assets/assets/images/idoom.png": "c9e432f1b2ad1c8a88282644419854f5",
"assets/assets/images/quiz.png": "14ed8825f92bfebd1ff5f89e1866c19d",
"assets/assets/images/sillage%2520mock.png": "57f2618a68059afa6a79844446b766e6",
"assets/assets/images/sillage%2520mock1.png": "e020598cbc6d5a1dd54eebb32e1696db",
"assets/assets/images/tracker.png": "e38cad4e39fb5b7c24bfbaf5b2c57569",
"assets/assets/images/weather%2520app%2520cover.png": "baea154bfb69c0f05e1d26e7bc4b2308",
"assets/assets/projects/idoom_bookstore/image1.png": "a7ea6f164658dbf91b4464a4a8e1f990",
"assets/assets/projects/idoom_bookstore/image10.png": "98033f09bab53b554d3b7e79c36020b6",
"assets/assets/projects/idoom_bookstore/image11.png": "61ec6c679ffd1d1336b0b29830959443",
"assets/assets/projects/idoom_bookstore/image12.png": "f69964d6046b07096ae05e8dff78837b",
"assets/assets/projects/idoom_bookstore/image13.png": "c56efa8f7f623fa6b5d69a13949db090",
"assets/assets/projects/idoom_bookstore/image14.png": "855ffc1c796620eb69408060aaca52ba",
"assets/assets/projects/idoom_bookstore/image15.png": "d25bf67c11fadf1532d21ba4209701e0",
"assets/assets/projects/idoom_bookstore/image16.png": "a2446c753648b976385af7ae16d6459e",
"assets/assets/projects/idoom_bookstore/image17.png": "4ecdf0f6ac35a67b2cda8a631478dab5",
"assets/assets/projects/idoom_bookstore/image18.png": "cfaa1fb6efefa285500aada0f485999a",
"assets/assets/projects/idoom_bookstore/image19.png": "b6d2d2ae23ae60543deec55b5cfb1ff1",
"assets/assets/projects/idoom_bookstore/image2.png": "81bd98e0cbb3a26158b464a7b83a7c7d",
"assets/assets/projects/idoom_bookstore/image20.png": "a283ab7585f48d3bec968b6454fc3602",
"assets/assets/projects/idoom_bookstore/image21.png": "bc74b4f6d99a26591e3b3c9f281c772a",
"assets/assets/projects/idoom_bookstore/image22.png": "7bf3994a04765d6bc657609bdb1ab4d3",
"assets/assets/projects/idoom_bookstore/image23.png": "0a0646b63c67478233fba4cf9a0d9871",
"assets/assets/projects/idoom_bookstore/image24.png": "cdfa49ba7570c0832038e515209e6494",
"assets/assets/projects/idoom_bookstore/image3.png": "ff6ca3d4b64a774b83f3ed25155a1ca0",
"assets/assets/projects/idoom_bookstore/image4.png": "c88f08fbcdc34051a7d08bd0513031fc",
"assets/assets/projects/idoom_bookstore/image5.png": "661a03cdfda42e56c6abe6a26d8eb54a",
"assets/assets/projects/idoom_bookstore/image6.png": "f0527f57bba1a63ffb93223db4799d66",
"assets/assets/projects/idoom_bookstore/image7.png": "f3a7508ac39512a2a90554b91ec15c56",
"assets/assets/projects/idoom_bookstore/image8.png": "b8dafc1086ff619f36a3eb8f0fccd62c",
"assets/assets/projects/idoom_bookstore/image9.png": "6166396e12ec5a9998f5c403fc62ba12",
"assets/assets/projects/idoom_bookstore/video/demo.webm": "a7e40ab1329ea0467bc3cd4d669a2eb7",
"assets/assets/projects/quiz_app/image1.png": "9296199fd525dbb35cb43045f4b8357a",
"assets/assets/projects/quiz_app/image2.png": "63d2c0b08755182c9dc9d107de25c6bb",
"assets/assets/projects/quiz_app/image3.png": "4a52307791af77379266273ee3e3aa04",
"assets/assets/projects/quiz_app/image4.png": "2739976a6dd2f6c5d4573d3272ac263b",
"assets/assets/projects/quiz_app/image5.png": "41b94fe754482c8d0afe9ce6d33013c3",
"assets/assets/projects/quiz_app/image6.png": "9c686df1ba5a6a4753666d51fa61980e",
"assets/assets/projects/quiz_app/video/demo.mp4": "4fd4b205e64fa930384da75abbaa9a85",
"assets/assets/projects/sillage/image1.png": "8146f90de4fb11d6582caa7b0877bee2",
"assets/assets/projects/sillage/image2.png": "5998105342ad8adfbaee42b607381cc5",
"assets/assets/projects/sillage/image3.png": "f729a81744d6fa346b7c6c857514509b",
"assets/assets/projects/sillage/image4.png": "6ccd771a246b1f8fa7a98f7908004cc4",
"assets/assets/projects/sillage/image5.png": "fb9b740dd5545e734ad0e612850b2577",
"assets/assets/projects/sillage/image6.png": "8ea2f5f6ef37f392c9a762c55e853eca",
"assets/assets/projects/sillage/image7.png": "6d83b67f7c82b850bfdef723c4687d14",
"assets/assets/projects/sillage/video/demo.mp4": "ee29ab643788f8261cf7255a5297b471",
"assets/assets/projects/time_tracker/image1.png": "3a813c6767cd58865cb6cd405144766b",
"assets/assets/projects/time_tracker/image2.png": "ccbfc9d068490ccdf0e22e198785b731",
"assets/assets/projects/time_tracker/image3.png": "ab9e444a722e1a7806a45df1f31b3aea",
"assets/assets/projects/time_tracker/image4.png": "9fcb4e5831e69936a2404c7bc4c206d2",
"assets/assets/projects/time_tracker/video/demo.mp4": "d9e4ad3dc6dd21361862e44f04c82d24",
"assets/assets/projects/weather_app/image1.png": "743ada0ba92dc7cb574e7b67c5d0b441",
"assets/assets/projects/weather_app/image2.png": "ee7677a47c58de61c8be22388f0b2782",
"assets/assets/projects/weather_app/video/demo.mp4": "916e9139894c7e75da23a9993a380c37",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "abd9b2eafa38e1a849f77eac797b4468",
"assets/NOTICES": "05ff9b124b9205d201a2ea576c5ed296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "1c2ffe426e5bc13e8543c175efeb42c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9efc3a296eef713c193382c24b542c53",
"/": "9efc3a296eef713c193382c24b542c53",
"main.dart.js": "34898d74b64897f828520b6400f6ac20",
"manifest.json": "40d3d720b212237dbb631ff9dc6c20cc",
"version.json": "1bf7f8be133f14d0c5a7f0c6232dce89"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
