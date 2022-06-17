'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b97d67f59d619abfcff9fae8a3ecede2",
".git/config": "2edac52e407e9684edbfb7e5e10cf742",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3c3cc0813083598738da2f6cb7c627b6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "803ce8c384611f50d1fa81d6452bbae8",
".git/logs/refs/heads/master": "803ce8c384611f50d1fa81d6452bbae8",
".git/logs/refs/remotes/origin/master": "aba8e78acd33a998fad5a47299acfbe0",
".git/objects/04/71c6326ceec6e94a456d6810dde4cb918ad043": "ecc9422f153b9ef89855aa24a7a694eb",
".git/objects/06/95fde773952916f119763af2ac583ce68bd202": "e421ea55c1ad2016952673390c000dcb",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1a/d4c1d02f30694f33b7b1c89aa8396fadf39c14": "4c7744bae24ae692a271b4df634c8db8",
".git/objects/1b/6617be053d132c326ede4ff2238ce80b218e61": "f475013f53540409232dba05bb1cf0e5",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/c4d542c5f1a8e2ac923a9af1e6618c85f8dbc9": "3073ce2f2c185eb50912b473fb34fb5b",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/49865b681ce848d1bfe2e8103a5ee39f25cae8": "4c2c55ccf966197df5c6a5cd159ccff8",
".git/objects/37/bb57648b2b2b1bd504f858ee4eabbb13381720": "421f8068159139583d9dc558fb3b7e6a",
".git/objects/3c/53c9cfe1b3ebc43f167934e14972953e97de20": "9cd7f2730a8cab3d0bf2284572f73391",
".git/objects/3d/7deb8aeb0646fcb0a8aa781e75b5c897258021": "ea28e4b5d87254d1efe4647fcfdd1a40",
".git/objects/3f/58d51d18982515923cf93853b2c2964602ef0c": "a07b19f910e3a8f9dc17e91eabcc88e7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cacd379ae10cf1a76beae38011f4dfe329033f": "267bf983186999cfc1bbce343135a4f7",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/0d07a797e123bfd122e7b51cf157a1b8832b85": "7dc32ecc4c156a57316a0fe4dbaf6d6d",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/70/10a59e0caffbbefaccbfa70869edd725a5a9db": "f534afe2f36e2dcb2b757e4cd6f37ed3",
".git/objects/70/25aadd0ced61470d51f44df6ad44a81dcf0daf": "c15a0f907a3e99ad0c8655b789c4268c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/78/7316f907a8464c08fd0b0217d8410b6bbfed03": "70e1b4bad00229f298fa1de86e8dc703",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/86/dbac7b5347191a91ef83d0320642dfe798b921": "25c44d4445e6ff22ebc374bcefed53cf",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a4ddecb2311dfb02bf90c562976e44b717d773": "16a3d556982c8c3ae936834a25de34bd",
".git/objects/8e/017c9daeff927522783d9f028bf5caf48d3071": "97fcbdf122941d63fa4cb21ed813e682",
".git/objects/91/dd25dee49b0ac6b8be496fa18c9bd1c9a8adf0": "ec40536990e3558205ded2c46c0d69c7",
".git/objects/9a/64c078aadf2ab33d4b360cd42a906a5c96da63": "a041584e40a5c674517c3b3320d4e211",
".git/objects/9d/2e177531a95c074e6f760a1f52c192dc6813e6": "12b2a0d46d71b62685f13e794d2cb503",
".git/objects/9e/8f671015ae38c6c368ec2804cf2e70b2c0571a": "5d70a654e3e2fe7b479767f9936bc584",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e872fc5b76d37553a289a6a716aac187599427": "aab570e7da1e5d871359f053d6c9ab0f",
".git/objects/a5/77cbd8230a66752d412dd765ee722b01e6316d": "f14788784098c5e8ba90be206348f35e",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/b6309309cc684d25b4ec3122839c45154ff3ef": "6708d6ec8715e7bec2bb0cc7bde5441f",
".git/objects/b4/d4c6eb12431a5beffbcf4fd012b6e5e0858256": "a0ebb141163eff6feda28ba300f5b52f",
".git/objects/b5/b37d01bab138f684483b4ad0111100c666a49f": "0260e988da36c899267a14967d7ed846",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bc/c9fe0ed52ee5340e9ca685c861e59043fc9445": "5c3bf7d5c6f5355e30b63f6445248d98",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c9/1fb628b029e5a85e8975c9e423c80c6edbc68c": "14f08eadbaa8a5581b460e4af83de9ec",
".git/objects/cb/d96a8a42972857c1188c4a8df10c963d50bb31": "87fddb12fc5d9cbe2fdec26b373802c7",
".git/objects/cc/8405f0dd8cc454a3c7d2fe2f1b7f1a74afe12e": "d0a8d1690cf2293c3cc8a727cb075b5e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/9e89f923a4358b787e2a659c9086fedfdbdd36": "ced39ea12c1eef4c6060b0ffe4b0006a",
".git/objects/dd/ed53af9768f37e1e763369bd94791e2d36da97": "3d4027a8a4233c6dd26686fecfaab6e6",
".git/objects/e3/5b7ab8917ea81b9cf616907b75bbd4901179c5": "acf95c65f82eb2304da1b440291554cd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/ae39202c6d1317bcc4bcffbabc2ed4fd5d3f13": "9b6f071c5e26072f0f7b8152fc205a53",
".git/objects/fc/1ed02050fc663aee1df6481649d25e295e2201": "6e5bddcb7687e0d8e5dfd2a3246f547c",
".git/objects/fd/a099a44fd1587444c3f416502ca869d6687100": "28227685a875ad66f090f9286761df14",
".git/refs/heads/master": "e1e506c9b071d63643df12d39cb13afe",
".git/refs/remotes/origin/master": "e1e506c9b071d63643df12d39cb13afe",
"assets/AssetManifest.json": "70dc8da1c3488a5cf544816bf8d7e631",
"assets/assets/images/android1.jpg": "7122a874bd8afdcd5da0637f2712b99c",
"assets/assets/images/android2.jpg": "76ce03b6afb60d0e304b08255e5571e6",
"assets/assets/images/android3.jpg": "17d7208cec75e933219fe8d87f73d115",
"assets/assets/images/android4.jpg": "f55a4b1c96f1910f51d68894198f6392",
"assets/assets/images/android5.jpg": "75eac53b508fbfc5130723e6bbb83a4d",
"assets/assets/images/ios1.jpg": "5af8f3570704b61a81455212e61d8284",
"assets/assets/images/ios2.jpg": "5e8e7183eedde2da60cacc67526fe591",
"assets/assets/images/ios3.jpg": "dcfe22262811305d15bb23d89c85c194",
"assets/assets/images/ios4.jpg": "1e58b0935d661c6252d6558a4504ad98",
"assets/assets/images/logo.png": "3b5bb5dbbbd6381755bde72aadb85c36",
"assets/assets/images/Thumbs.db": "f51c98d80af777d66c2c61be006d27c3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "d59b8d640c1b5d0444016c72d3e9e771",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/Thumbs.db": "0662f08c36661d8d6675640b8e68a84b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "d3b85b2a090d5df25a95951c04410ead",
"icons/Icon-192.png": "3b5bb5dbbbd6381755bde72aadb85c36",
"icons/Icon-512.png": "1a8814254e6b4fa07acde2c7e4ffef47",
"icons/Icon-maskable-192.png": "3b5bb5dbbbd6381755bde72aadb85c36",
"icons/Icon-maskable-512.png": "1a8814254e6b4fa07acde2c7e4ffef47",
"icons/Thumbs.db": "04b89bd9724837f9ca43e0bba29b3daa",
"index.html": "4535bb5ac4c75b4dee0b2680055dae5c",
"/": "4535bb5ac4c75b4dee0b2680055dae5c",
"main.dart.js": "0f84c1ab7320ab0b7d2454b5e16b62b2",
"manifest.json": "cc0e99fa75b0f79d278b73b7ad86d5ba",
"version.json": "692ffda0fecd69f2ea810ffbcae29b94"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
