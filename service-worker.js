if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,d,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/18/hello-world/index.html",revision:"15f015d4b87431e749f97529384a9e73"},{url:"2021/06/23/skb/index.html",revision:"48f66372956a2b5287f6def1209a29b4"},{url:"2022/01/21/hexo/index.html",revision:"7c1a870007245c036229c344a5c11fcf"},{url:"about/index.html",revision:"b33c1b7d3272fd3ab5f7c9897155c0c5"},{url:"archives/2021/06/index.html",revision:"086bd7a2f26eeccdc607aabe654a65b0"},{url:"archives/2021/index.html",revision:"ee80c38f1c4b0e010544488ab84009ee"},{url:"archives/2022/01/index.html",revision:"eb724a3f3e607563f16cac160a341392"},{url:"archives/2022/index.html",revision:"1ef5c8e8deb5011bc0ffa048e10b8de9"},{url:"archives/index.html",revision:"7febfafce7395f1ed360c6eccdaae34e"},{url:"artitalk/index.html",revision:"26ef6054ea7cf807b2196c9d119aa2a1"},{url:"baidu_verify_code-LJjmBwzzHH.html",revision:"58ce81f5e7c2ed8eb9453b45f2cdae1c"},{url:"categories/Hexo/index.html",revision:"b36d2be76b57e78ce7cb864bb358244f"},{url:"categories/index.html",revision:"5d39694ef441ace669a0cd067f8329d9"},{url:"categories/web前端/index.html",revision:"794be155390c4186d29defb8697fde6a"},{url:"css/index.css",revision:"513821326d3e46650cf641f42d661596"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/20220121153403.png",revision:"9ad8b8c73f088d9c51f7634bec0c6212"},{url:"images/20220121160948.png",revision:"74439ee76d3fdc03ccaf4d8da68f5af1"},{url:"images/20220121161000.png",revision:"e97b715a2bb3485895679f2130e1cb9b"},{url:"images/kp.png",revision:"f4bb0013fff2680584742005a7e1db2b"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/comment_bg.png",revision:"34a79bf208a1c3bee9d6e491a00cd369"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/tb.jpg",revision:"5c2a9da6c7ce9d2f497b7ad3f3dc4d9d"},{url:"img/tx.jpg",revision:"243a9087565bebe03e9c7a06c89d6b5f"},{url:"index.html",revision:"0dd5382d4cd607c2da6bac357d9eab38"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"link/index.html",revision:"c2ccc8eb253da61139f9a27e246c07c5"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"ed6060817a4de0735ea29ca62e644ee9"},{url:"live2d-widget/demo/demo.html",revision:"2596a8630c0801002b3dff127b50518b"},{url:"live2d-widget/demo/login.html",revision:"6790fe17ee0264f77ba972c941f5d4c3"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.html",revision:"5e61153c81680871c6b501997e4df15f"},{url:"live2d-widget/waifu-tips.js",revision:"e01c75f70a9465389471f638b1356bf8"},{url:"live2d-widget/waifu.css",revision:"8b9b5194e565c684647858ef1b922fc9"},{url:"tags/element-ui/index.html",revision:"98b5b071f68af00d427f32256ea8e59d"},{url:"tags/git/index.html",revision:"1da0e79fd33f007b317049e1bf8cc0eb"},{url:"tags/github/index.html",revision:"648dca3035a25057439b6130819580ab"},{url:"tags/Hexo/index.html",revision:"63dcbab9e8147e51fe42531ac9f70bf5"},{url:"tags/index.html",revision:"bb973206fb45f4bab6deee2c1c4813ef"},{url:"tags/Vue/index.html",revision:"600397ba29eebc3a2216da17510bbf7d"},{url:"tags/深拷贝/index.html",revision:"1ee391a332362275965443f2ffc6d192"}],{})}));
//# sourceMappingURL=service-worker.js.map
