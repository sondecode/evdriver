'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6ca98ac903226c368261778f730df01c",
"index.html": "10c3a31cf98dd85b16537e4530237267",
"/": "10c3a31cf98dd85b16537e4530237267",
"main.dart.js": "b5cfe2cbe795fc1b6efeb19596680438",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "538d8343741bcd09eacddc38f550d46d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "85b8ac96dd2f0f735bd558273c964a6c",
"assets/AssetManifest.json": "428c6ac9e5ed493b35f3094c174d322e",
"assets/NOTICES": "69cc0eb6a827692e16f6d56094b08369",
"assets/FontManifest.json": "f1fc8cb2281b74036f261a39bd940d15",
"assets/AssetManifest.bin.json": "6443cab9a91f75cb86e30911f9d89b86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "91321707ecdfd51cc080ee209b9a300d",
"assets/fonts/MaterialIcons-Regular.otf": "eec65473d55bee97bcba5ea2c7ed57ba",
"assets/assets/music/FanQuan-Deleted.wav": "2a6b4736594c9f8cc0b3e230c77d7d06",
"assets/assets/music/README.md": "035041cfb2070f794172dedb2aa709b6",
"assets/assets/images/3x/settings.png": "21ff2cc135a762f74ed1a80aac6502bb",
"assets/assets/images/3x/restart.png": "429270ce832c881b80fbd592e5ff1e0e",
"assets/assets/images/3x/back.png": "88a977a654df5a490037340f90a5a19e",
"assets/assets/images/settings.png": "840fd7e3337c743046bf992ef18a10b8",
"assets/assets/images/restart.png": "d3d2e3f3b2f6cb1e1a69b8b2529096f7",
"assets/assets/images/sprites/vf8_2_sprite.png": "c814a6a4638451408fd7ad4935f5f66a",
"assets/assets/images/sprites/vfe34_3_sprite.png": "3b7ddb1c567ae49f6bb61911cc3b4e57",
"assets/assets/images/sprites/C_3_sprite.png": "3b7ddb1c567ae49f6bb61911cc3b4e57",
"assets/assets/images/sprites/end_bg.png": "c8936fe754ba3efc5b37e886972729c0",
"assets/assets/images/sprites/customer_sprite.png": "46934cc2f9e90108f0a370f653c82c9a",
"assets/assets/images/sprites/vf6_3_sprite.png": "4cc80263aad767863df92c14b26d163a",
"assets/assets/images/sprites/vbus_0_sprite.png": "c7b757cca91358260263aa7ff77550a1",
"assets/assets/images/sprites/vf7_sprite.png": "19943d5e06b991ad7e72e87614e940ca",
"assets/assets/images/sprites/end_old_bg.png": "c3a1ebcae4e0e0c9ddbaaf5ada0617cd",
"assets/assets/images/sprites/police_2_sprite.png": "f0e701206cbae241045721a475ca3001",
"assets/assets/images/sprites/feliz_3_sprite.png": "5b610414ab4253ed0c8d83739f515023",
"assets/assets/images/sprites/vf9_2_sprite.png": "5af309e9ffdc22671723cbc9925e9985",
"assets/assets/images/sprites/T_sprite.png": "c4b7e0a9820fd100fc6eb5f407923f29",
"assets/assets/images/sprites/vf7_3_sprite.png": "710045d436e9fc2ef70e68b3b75650b1",
"assets/assets/images/sprites/vbus_sprite.png": "9a7ee371802142d10e23bf18ade3c526",
"assets/assets/images/sprites/C_1_sprite.png": "26f41f0e88ea8953bcbcdbc1a3b95fd6",
"assets/assets/images/sprites/vfe34_1_sprite.png": "26f41f0e88ea8953bcbcdbc1a3b95fd6",
"assets/assets/images/sprites/vf8_0_sprite.png": "13fcc91f300019bbd0d543e096fb7142",
"assets/assets/images/sprites/S_sprite.png": "6e37fae7e21dda5ab17a5d421cb8c9d3",
"assets/assets/images/sprites/house_sprite.png": "a3513529ba982a1e01088b55d2026e42",
"assets/assets/images/sprites/vf8_sprite.png": "13fcc91f300019bbd0d543e096fb7142",
"assets/assets/images/sprites/vf6_1_sprite.png": "b0190397a9475d3242f9414bca849e2a",
"assets/assets/images/sprites/vbus_2_sprite.png": "53bf1b49752344b8c25f74b4afced20b",
"assets/assets/images/sprites/H1_sprite.png": "cdd5ec2a516ba705066fc69482cd4d4b",
"assets/assets/images/sprites/vf9_0_sprite.png": "138c58e2ea3c0f5989ffb15982f071c2",
"assets/assets/images/sprites/police_0_sprite.png": "69a245e41f5a3611fe563e7e086eafc9",
"assets/assets/images/sprites/feliz_1_sprite.png": "a4eeb1f39e392ab4f9c1b490401799ca",
"assets/assets/images/sprites/vf7_1_sprite.png": "6020039bd17b7b2cbd9e8499ea0bc9ee",
"assets/assets/images/sprites/police_sprite.png": "69a245e41f5a3611fe563e7e086eafc9",
"assets/assets/images/sprites/background.png": "6a82eead5b7512f6e48dee822c739e16",
"assets/assets/images/sprites/feliz_2_sprite.png": "edad362dfcedaf4173b5309ca78aa54b",
"assets/assets/images/sprites/police_3_sprite.png": "30691d5cabefb8897f6bd60a02cfa553",
"assets/assets/images/sprites/start_bg.png": "c8936fe754ba3efc5b37e886972729c0",
"assets/assets/images/sprites/vf9_3_sprite.png": "d3942956f7f0f3e3546b3ad260721f90",
"assets/assets/images/sprites/logo.png": "be240fbd98116a1c7784813655d7e9bc",
"assets/assets/images/sprites/vf7_2_sprite.png": "64106e042ed7f5e427225927773169cc",
"assets/assets/images/sprites/vf8_3_sprite.png": "2a74216672edb6142aa3a6cb82877aed",
"assets/assets/images/sprites/vfe34_2_sprite.png": "e0c8c54de3ed35a1a608d263d9e40b67",
"assets/assets/images/sprites/C_2_sprite.png": "e0c8c54de3ed35a1a608d263d9e40b67",
"assets/assets/images/sprites/vfe34_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/vbus_1_sprite.png": "e840b459ae3a83dd09d70fcf60d09099",
"assets/assets/images/sprites/vf6_2_sprite.png": "c84c0ec6d48605bef4a43417e62bbeeb",
"assets/assets/images/sprites/vf6_sprite.png": "e2b4bfdb3b0d9bb40eac6e2eb85ff7fd",
"assets/assets/images/sprites/feliz_sprite.png": "2ccfaab42b3f6edc1fae8cc68beee77a",
"assets/assets/images/sprites/C_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/background-dark.jpg": "c8183b0a6477e876c060fc49578720e2",
"assets/assets/images/sprites/vehicles/vf7.png": "b54aab09b1e7f5f98c7402901e543fc6",
"assets/assets/images/sprites/vehicles/vf6.png": "59b2f93fda8cda959dd4dd51db0c97ba",
"assets/assets/images/sprites/vehicles/vfe34.png": "5b4cff7c9ec8157d977ff6636dee01bc",
"assets/assets/images/sprites/vehicles/feliz.png": "7f07c32d3d571d26ca99f298ff56fc0a",
"assets/assets/images/sprites/vehicles/vbus.png": "167a3816fc1dd2d7488d57fbcad0ff59",
"assets/assets/images/sprites/vehicles/vf8.png": "569060865ce1993e422df12427105c25",
"assets/assets/images/sprites/vehicles/vf9.png": "e95ad367922ef941aacbcf0be5288db5",
"assets/assets/images/sprites/vf9_1_sprite.png": "8f832b9b279711f4bf0a81bda879c8fe",
"assets/assets/images/sprites/feliz_0_sprite.png": "2ccfaab42b3f6edc1fae8cc68beee77a",
"assets/assets/images/sprites/police_1_sprite.png": "8f61a559225c4472a3334f104aa775a4",
"assets/assets/images/sprites/I_sprite.png": "632270f290ff65432d4f589686f2986d",
"assets/assets/images/sprites/vf7_0_sprite.png": "19943d5e06b991ad7e72e87614e940ca",
"assets/assets/images/sprites/leaf_sprite.png": "96ffba8215b65e59bd267e26b4fe8e4d",
"assets/assets/images/sprites/C_0_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/L_sprite.png": "fcdf41cf72c2aa30d788894df18872fb",
"assets/assets/images/sprites/vf9_sprite.png": "138c58e2ea3c0f5989ffb15982f071c2",
"assets/assets/images/sprites/vfe34_0_sprite.png": "e41fb2d5bca2b94e7812e934662a4a59",
"assets/assets/images/sprites/vf8_1_sprite.png": "75fea5bb98cec904329d14ce586f312d",
"assets/assets/images/sprites/vbus_3_sprite.png": "49a1e56e86d5d337c334d966ac135cd9",
"assets/assets/images/sprites/vf6_0_sprite.png": "e2b4bfdb3b0d9bb40eac6e2eb85ff7fd",
"assets/assets/images/2x/settings.png": "8404e18c68ba99ca0b181bd96ace0376",
"assets/assets/images/2x/restart.png": "83aea4677055df9b0d8171f5315f2a60",
"assets/assets/images/2x/back.png": "85cda8f41a13153d6f3fb1c403f272ea",
"assets/assets/images/back.png": "3c82301693d5c4140786184a06c23f7e",
"assets/assets/images/3.5x/settings.png": "c977a1e6c59e8cfd5cd88a0c973928fc",
"assets/assets/images/3.5x/restart.png": "583169ac365d9515fc12f29e3b530de0",
"assets/assets/images/3.5x/back.png": "85db134e26410547037485447f659277",
"assets/assets/sfx/start.mp3": "a05ea3d2e5ba61dbce9262e96883a0f4",
"assets/assets/sfx/won.wav": "f18b57ee9568589d2f719d26f69f9943",
"assets/assets/sfx/rotate.mp3": "cc20c5e2dac0edfac3434b1d44f2ed7e",
"assets/assets/sfx/tap.mp3": "753f11fcdc693eb9953bdac8721e2e3c",
"assets/assets/fonts/Permanent_Marker/PermanentMarker-Regular.ttf": "c863f8028c2505f92540e0ba7c379002",
"assets/assets/fonts/Electric/electric.ttf": "93bf9b4db74c47f60e87947d92c94ace",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
