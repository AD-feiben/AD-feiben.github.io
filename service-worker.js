/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cf4d51ce97cf0240384bd85460b8b4cc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/css/0.styles.b20cb76a.css",
    "revision": "723f6609af59ba61df117764d856ffca"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/1.74dbe1d7.js",
    "revision": "c817681a36e13037dfdba1d02d307637"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/10.bca4209e.js",
    "revision": "924fd74582fa846c0c75d15db02718d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/11.e21556fd.js",
    "revision": "f5c21e9c95c181d48dd1c7560a1f2d96"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/12.d9c3b99a.js",
    "revision": "bfd38b4154e27ce58ec11ba8af551ba5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/13.78a8c1d4.js",
    "revision": "767e36ced41be269af06f3f4ab4d3fd4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/14.21d4cbc1.js",
    "revision": "7992603bfe961db2b6be43d385478a92"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/15.0cb1b38e.js",
    "revision": "95cafbacab433b4abd643256acf4aa92"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/16.25914100.js",
    "revision": "96546d1acc58863d04dadcc5afa96cb3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/17.703d6b34.js",
    "revision": "0876b27ad383fefd53ff0e9e6589fa49"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/18.ab1ef608.js",
    "revision": "e416f172c781ed6dc1b3f093435330ca"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/19.6d90d096.js",
    "revision": "1489e8821ca775225d5e96a527091e16"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/20.15aa5948.js",
    "revision": "2561b0f43be96c018b5aac229d7ce909"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/21.3149ae6f.js",
    "revision": "48206129e5631870d0fadeb529bdca1c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/22.3bd9d4ac.js",
    "revision": "253bda50b755fa7d025a41458dc5c514"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/23.96188e68.js",
    "revision": "1062962385b508940c9dc0944f127f76"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/24.03ab5ba6.js",
    "revision": "920ea1d323f41e3c87b425f1196c5e09"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/25.4fa42d5b.js",
    "revision": "bb0f03eb06619a0c9bfb6f59e2cdaa7b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/26.992bbca1.js",
    "revision": "540975ebf68a68e9ff2a68e17719b7dd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/27.3e72bd16.js",
    "revision": "b34794b102a4f78b9ca6995bdc2d40b6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/28.27e2cc2c.js",
    "revision": "7859dc07e55d3408d2359c8a560c7f07"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/29.4313ed81.js",
    "revision": "f087d0cc8164638e6846296617fc7c6e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/3.87b4aaea.js",
    "revision": "6da3886cb3e5f01cfef7c3b6a4380f37"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/30.1aec007b.js",
    "revision": "2d72d34fdb071d312c65162f6c110a16"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/31.9236a1ad.js",
    "revision": "bb1a63bdf1b83a944e92869da8c31b06"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/32.4aedcda4.js",
    "revision": "0b544386e32253bd415f4cfe8fe8885d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/33.9ce2e10b.js",
    "revision": "4179c01e0a3689715652109b43890788"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/34.f0f178db.js",
    "revision": "a10fb81a3f076635b9e0911ebc9ce9c2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/35.11e20bfa.js",
    "revision": "955f959d9abc6b37b8ec577064924d6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/36.9802c1df.js",
    "revision": "80f4fdf3121d4101a13d31e7bf68d0c0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/37.b00719ec.js",
    "revision": "27e95c7013e55e607f2b393dfffef897"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/38.e84664a4.js",
    "revision": "55156b207ab93b82526d8c283221e513"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/39.ee638bca.js",
    "revision": "1e94269a5cce5ac27203ec5eef609813"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/4.234115b4.js",
    "revision": "edbc2f1850cde58b026ff4907cd05240"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/40.8da26255.js",
    "revision": "760aec6210a428a1bbbd578467ba058d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/41.3ba05e8a.js",
    "revision": "1c401e2314d0363882d755d4969a65f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/42.82b0959d.js",
    "revision": "4b76473da2b1f5c1d5ca2edce31ad766"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/43.f4fa6172.js",
    "revision": "034ca04382498d2c05b58ec2c1b4f4f5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/44.767b6d4d.js",
    "revision": "ce9b87842614a3890f84e66ea143acf8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/5.ad4a5647.js",
    "revision": "7e0ca001ab05619c782e3a8cda3fa507"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/6.bccf36f4.js",
    "revision": "428599fb9e1d7921c7ae30b70a97aa9f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/7.eef0a463.js",
    "revision": "b91dab0897c3b4f3fd52f270de8ddd67"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/8.2268cc0b.js",
    "revision": "30cdfc5c0744fdc893e7fda4d2192380"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/9.4f26c22a.js",
    "revision": "3cb4829a353f491309d3e835665302cf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/ad-feiben/ad-feiben.github.io/assets/js/app.315fe667.js",
    "revision": "0fae68a0d46394ff3921cdb7f442171c"
  },
  {
    "url": "baidu_verify_code-KCDk8hXfbC.html",
    "revision": "e41c2cd49ca573208b18252a9fa07a50"
  },
  {
    "url": "banner.jpg",
    "revision": "9ead67d16ac77651c6d6777f86a53d95"
  },
  {
    "url": "categories/CI/index.html",
    "revision": "bca9c6684176147f837ca2b06ae315f5"
  },
  {
    "url": "categories/Deno/index.html",
    "revision": "47eea348ec1f4b65e20bbaacd9c6927f"
  },
  {
    "url": "categories/Docker/index.html",
    "revision": "cc8e57f99fbfea753b22a6171ba2884a"
  },
  {
    "url": "categories/index.html",
    "revision": "f7cc85db92950354afbd0abbc0d676d4"
  },
  {
    "url": "categories/Nginx/index.html",
    "revision": "c321c27e8cfeb97f1a0d0219924d963e"
  },
  {
    "url": "categories/Python/index.html",
    "revision": "4d0127f620e99fe7cc8ed1b468c80cf3"
  },
  {
    "url": "categories/VuePress/index.html",
    "revision": "6d77c589d20942e343e844a0661c76ac"
  },
  {
    "url": "categories/关于我/index.html",
    "revision": "ec4f82fdcefc2412630ec2db895c9eef"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "42cbb0cbec46bb8107eb5a29b7f2a666"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "b5a58dab755690218975eb28b2ebc218"
  },
  {
    "url": "categories/插件/index.html",
    "revision": "10f8f98022bd5c16f4043b540f362204"
  },
  {
    "url": "categories/随笔/index.html",
    "revision": "38ced1012f97eb159c00ded5bade4ba0"
  },
  {
    "url": "google45349a4c10d0687c.html",
    "revision": "9293295bc173774d5b08ff35a995d5b2"
  },
  {
    "url": "head.png",
    "revision": "df1134f593050b4bd061f90fe2f77283"
  },
  {
    "url": "imgs/docker/0.png",
    "revision": "afca5caf4fe17a319a5ce5d5c8747e47"
  },
  {
    "url": "imgs/docker/1.png",
    "revision": "4d0228a7bffc87291431d2ba89642ff1"
  },
  {
    "url": "imgs/docker/2.png",
    "revision": "390adbebf53ff6654251957b4320e8b8"
  },
  {
    "url": "imgs/docker/3.png",
    "revision": "d027d4033c821c5be3c487d021e22d3c"
  },
  {
    "url": "imgs/docker/4.png",
    "revision": "7f67413739811525bfb8471e143d74b9"
  },
  {
    "url": "imgs/docker/5.png",
    "revision": "3288cc01815e3ef7d1e6dea4426ffa4e"
  },
  {
    "url": "imgs/logo.png",
    "revision": "df1134f593050b4bd061f90fe2f77283"
  },
  {
    "url": "imgs/nginx/0.png",
    "revision": "51343adf3af1a6934d803158cb5186c8"
  },
  {
    "url": "imgs/python/0.png",
    "revision": "4a9bbc45824e3546239f22518be0d9d7"
  },
  {
    "url": "imgs/python/1.png",
    "revision": "6216570128981d66bd6452043d8057bb"
  },
  {
    "url": "imgs/python/2.png",
    "revision": "e757198d1cfab2308235e577846f632e"
  },
  {
    "url": "imgs/qrcode.png",
    "revision": "0d6bac58c5d7d07dabbeb0edd8832a38"
  },
  {
    "url": "imgs/search.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "imgs/前端/0.png",
    "revision": "8ac1b69fb7c68aa28f1c60f2c3db937d"
  },
  {
    "url": "imgs/前端/1.png",
    "revision": "1174c12fb6aa5000ea7fcb3668322700"
  },
  {
    "url": "imgs/前端/2.png",
    "revision": "c1179b2a9ef617d85f20a0330abf9f36"
  },
  {
    "url": "imgs/前端/3.png",
    "revision": "76f9f5af8565d77dc94c34871292ebec"
  },
  {
    "url": "imgs/前端/4.png",
    "revision": "c83e49fdd53d5b1c53d76ff48e0dd93c"
  },
  {
    "url": "imgs/前端/5.png",
    "revision": "9ccea9019071560b90e1c704f94293c6"
  },
  {
    "url": "imgs/前端/6.png",
    "revision": "d3451eb971cd55d728eb5564aced6d42"
  },
  {
    "url": "imgs/前端/7.png",
    "revision": "4cd310e60e3e3b6c827ec72222150171"
  },
  {
    "url": "imgs/前端/8.png",
    "revision": "d690a09e392acffce238d41eda7e244f"
  },
  {
    "url": "imgs/工具/0.jpeg",
    "revision": "42c092796ff1551657fe0cac5c73995b"
  },
  {
    "url": "imgs/工具/1.jpeg",
    "revision": "8a3b920bf57481b9eca951e89293d0f5"
  },
  {
    "url": "index.html",
    "revision": "9d9589a39ef902e1a963426575c450c8"
  },
  {
    "url": "js/push.js",
    "revision": "7ede88c964da73dd6de0cf1df988fd94"
  },
  {
    "url": "tag/index.html",
    "revision": "7017cd27c4ad48a70c8fb49789146257"
  },
  {
    "url": "tags/canvas/index.html",
    "revision": "98f9b0b885c23b1583a774a7e287bbfb"
  },
  {
    "url": "tags/Charles/index.html",
    "revision": "eb8807ec60383318f9db049e1f12542d"
  },
  {
    "url": "tags/CI/index.html",
    "revision": "f66e749e3b4ef19ba766143ff4deb002"
  },
  {
    "url": "tags/Deno/index.html",
    "revision": "33c8cfbd796a4433a6a4c5795dd0f870"
  },
  {
    "url": "tags/Diff/index.html",
    "revision": "4d65c12319a38900bb41b6193195cc65"
  },
  {
    "url": "tags/Docker/index.html",
    "revision": "90fe37e4de26d5cbd10b32b90aa9af6a"
  },
  {
    "url": "tags/Dockerfile/index.html",
    "revision": "fd62528ef8fb8d991ade28cef408e96f"
  },
  {
    "url": "tags/JSENS/index.html",
    "revision": "2747bdfb80c670552258a6c2843d9c55"
  },
  {
    "url": "tags/lw-chart/index.html",
    "revision": "6cae93c6fa7ca0fe6941eea95bb666df"
  },
  {
    "url": "tags/Nexus/index.html",
    "revision": "16e7f28ac57f6205fbcdf78d4f82062f"
  },
  {
    "url": "tags/Nginx/index.html",
    "revision": "b69fca4072a8fbc171016bc09a93c71f"
  },
  {
    "url": "tags/NPM/index.html",
    "revision": "e236cb58071a23aa1b8d8f228d58d162"
  },
  {
    "url": "tags/Nuxt/index.html",
    "revision": "8f70d074819aa5344fc1153a941dbc50"
  },
  {
    "url": "tags/OpenWrite/index.html",
    "revision": "12fc4b6b2369679a8b24e74531b1c955"
  },
  {
    "url": "tags/Postman/index.html",
    "revision": "471f9607e14689c87a3151c649bb5fac"
  },
  {
    "url": "tags/Promise/index.html",
    "revision": "6335f316db5bf7553c2fafddf680beda"
  },
  {
    "url": "tags/selenium/index.html",
    "revision": "f12f9439f24bcaa443742b370ec522bf"
  },
  {
    "url": "tags/Serverless/index.html",
    "revision": "9933a27800b63fcce599866889ec5679"
  },
  {
    "url": "tags/Travis/index.html",
    "revision": "d4d4dc0036a19e04efe6006cb3df2299"
  },
  {
    "url": "tags/Vue/index.html",
    "revision": "fb6b2d267756c6109c2776919c4b6df7"
  },
  {
    "url": "tags/VuePress/index.html",
    "revision": "406cfa444f408bb79fb0eb7f18cd74d5"
  },
  {
    "url": "tags/云开发/index.html",
    "revision": "6c5cab5784079d1570ba46a9be692b70"
  },
  {
    "url": "tags/今日头条/index.html",
    "revision": "83f29c130183d8e068ec030663e4f8b4"
  },
  {
    "url": "tags/公众号/index.html",
    "revision": "3d7b496a9b39540dd51c27a8eea71818"
  },
  {
    "url": "tags/关于我/index.html",
    "revision": "84181483c9f350964c206d31820d6f99"
  },
  {
    "url": "tags/地图/index.html",
    "revision": "1c883bc07fba631c891504489d0808e5"
  },
  {
    "url": "tags/培训/index.html",
    "revision": "8dcc11d2af03c1134768c19aa21280f5"
  },
  {
    "url": "tags/小程序/index.html",
    "revision": "48773a84b5416c088cbb0d0aa56f2895"
  },
  {
    "url": "tags/小霸王游戏机/index.html",
    "revision": "a4423522d669a6f92dde39c5fb610ca7"
  },
  {
    "url": "tags/引流/index.html",
    "revision": "8b5a5728c6b9f893a835064b5b3f2fd9"
  },
  {
    "url": "tags/微信/index.html",
    "revision": "284caf6ad7b01839148340e969991638"
  },
  {
    "url": "tags/抓包/index.html",
    "revision": "bc58e4d518901cdfcbf936d5a6db4e1b"
  },
  {
    "url": "tags/插件开发/index.html",
    "revision": "5dbcac03c2dbe3e95f76e82b236dd806"
  },
  {
    "url": "tags/未来/index.html",
    "revision": "2545f38fca26441b29b9ca31210d136e"
  },
  {
    "url": "tags/源码/index.html",
    "revision": "7309c0408246cc46ebadb8d06b672e19"
  },
  {
    "url": "tags/滑块验证码/index.html",
    "revision": "c86db48b2f921dbb926ddfd86d4f41ff"
  },
  {
    "url": "tags/程序员/index.html",
    "revision": "4a79f63a8fbb53025fc52042d9ca745d"
  },
  {
    "url": "tags/第二技能/index.html",
    "revision": "0ad622b6bde8f762f070298b76c9789a"
  },
  {
    "url": "tags/网站安全/index.html",
    "revision": "d9e03df91e07347f64209d312c35609b"
  },
  {
    "url": "tags/自媒体/index.html",
    "revision": "889edd59a35a55ea910bf142f842e5f2"
  },
  {
    "url": "tags/装饰器/index.html",
    "revision": "dc54f120d09e77f610faaae268263838"
  },
  {
    "url": "tags/面试/index.html",
    "revision": "c4ad54b2bbf066c7941906916ab25642"
  },
  {
    "url": "tags/面试题/index.html",
    "revision": "3a4c34395c9a38db6002cad10ab22ba3"
  },
  {
    "url": "timeline/index.html",
    "revision": "dac160ec73367becde8130c3c1ff6e57"
  },
  {
    "url": "views/about.html",
    "revision": "09ff1ac7d84694574ab13e2656146c4c"
  },
  {
    "url": "views/Deno/2020/【Deno】初识Deno.html",
    "revision": "65c545e48d533f05570237cdb13cf993"
  },
  {
    "url": "views/Docker/2019/Docker 仓库.html",
    "revision": "075b028d438cf15050b3624593c6a3e8"
  },
  {
    "url": "views/Docker/2019/使用 Dockerfile 制作镜像.html",
    "revision": "015c85131be157a32c9e106147b3ce8d"
  },
  {
    "url": "views/Docker/2019/使用 Nexus 创建 Docker 仓库.html",
    "revision": "5f469e767d01c77be75715533a28892d"
  },
  {
    "url": "views/Docker/2019/初识 Docker.html",
    "revision": "cd9f1cac2d4b68ac159f916ca1902fe7"
  },
  {
    "url": "views/Nginx/2018/Nginx 配置.html",
    "revision": "ffa377ea2c9552afe771365247205b01"
  },
  {
    "url": "views/Python/2019/Python实现头条自动发文章，赚点广告费.html",
    "revision": "eadc312960c1b2a970f5602fdd31ae9b"
  },
  {
    "url": "views/Python/2019/装饰器详解.html",
    "revision": "086e7ddeffafdb669032853f703386fa"
  },
  {
    "url": "views/前端/2017/腾讯地图实现地图找房功能.html",
    "revision": "55f6c71e21575ed2c127361ccfc311d3"
  },
  {
    "url": "views/前端/2018/Nuxt 实践.html",
    "revision": "6984b9850c029518f074caf1d5594068"
  },
  {
    "url": "views/前端/2018/Vue 微信自定义分享总结.html",
    "revision": "d1fa79560ed4fb05d5b1d31bd476c5b3"
  },
  {
    "url": "views/前端/2018/记 Nuxt 开发遇到 OOM.html",
    "revision": "50d3b641d4cdd8a95dcbd06d551b6aa6"
  },
  {
    "url": "views/前端/2019/10 分钟搭建私服 NPM.html",
    "revision": "2a359966da4db5c53d36fd570e638b77"
  },
  {
    "url": "views/前端/2020/【源码解读】通过分析 Vue computed 的实现，居然发现隐藏的小彩蛋.html",
    "revision": "e8833a7455e9481b40d0db0251f0adfd"
  },
  {
    "url": "views/前端/2020/【面试题解析】从 Vue 源码分析 key 的作用.html",
    "revision": "767c379d88473c473d361ac4fe6ff8ec"
  },
  {
    "url": "views/前端/2020/【面试题解析】手动实现 Promise.html",
    "revision": "78741bc69df7d67b531484824e58aed6"
  },
  {
    "url": "views/前端/2020/【面试题解析✨】Vue 的数据是如何渲染到页面的？.html",
    "revision": "2975402012c04be6fc963e8a980c4b74"
  },
  {
    "url": "views/前端/2020/开源了一个图表库lw-chart.html",
    "revision": "16a33cfec4621184d47815c4e875b9f9"
  },
  {
    "url": "views/前端/2020/通宵写了个 Chrome 插件.html",
    "revision": "bf4d9ebd425caf01b12aea58fa23ccab"
  },
  {
    "url": "views/前端/2020/通过小程序云开发了解Serverless.html",
    "revision": "7422ce0912edb882fbd2c644e7c2ae3b"
  },
  {
    "url": "views/前端/2021/技术人玩小游戏，如何“不战而胜”.html",
    "revision": "9e2c6fc3f3f840c9b31ef14ab63fd359"
  },
  {
    "url": "views/工具/2019/持续集成工具.html",
    "revision": "98d13fa4409f0e5030ef6594f8766924"
  },
  {
    "url": "views/随笔/2019/关于 IT 培训.html",
    "revision": "fc548d5ef72d1c92f88766b825bd62c0"
  },
  {
    "url": "views/随笔/2019/对未来的一些思考.html",
    "revision": "49397b46f2fb204662375adf2d868241"
  },
  {
    "url": "views/随笔/2019/我是如何面试别人的.html",
    "revision": "4e6364ccc494a396fa914f83393ce191"
  },
  {
    "url": "views/随笔/2019/程序员为什么要培养第二技能.html",
    "revision": "4f5303830ef666d2efe6f232f662c7cd"
  },
  {
    "url": "views/随笔/2020/如何增加收入？.html",
    "revision": "caa9bf073db31c7b0cf61c21ce072f2f"
  },
  {
    "url": "views/随笔/2021/VuePress 配置公众号获取验证码阅读全文 - 公众号引流插件.html",
    "revision": "9da521ea2104f4d0dc318998e822223b"
  },
  {
    "url": "views/随笔/2021/我的年终总结以及新年计划.html",
    "revision": "e746e17e3d926411971e87de8eb7fde3"
  },
  {
    "url": "views/随笔/2021/朋友圈小霸王游戏机，快来领取链接和源码找回青春记忆.html",
    "revision": "6f172abec74904483c5fc5e5214b1423"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
