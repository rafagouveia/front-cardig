if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>i(e,a),f={module:{uri:a},exports:t,require:r};s[a]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-0740a383"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"b035c5b538b9b51844eda82daced4b0a"},{url:"/4042.svg",revision:"ab44b8ad624bdbd51c68fdf72502dfff"},{url:"/_next/app-build-manifest.json",revision:"c4dacc92523819d7be0cbf63d898c128"},{url:"/_next/static/XI1x6zA2mMF1OILScuifm/_buildManifest.js",revision:"ae9eef61ecb4f32528f2e03fce5305d0"},{url:"/_next/static/XI1x6zA2mMF1OILScuifm/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/3627521c-8bb39c7f3c5201d3.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/384-00fafbc44813a488.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/397-7fd4e45b25e71191.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/409-82ac07bfa6f93bea.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/691-c4ca114ab49f3cbe.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/864-2e3edf39a5be3d4c.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/app/(home)/layout-738a0c957808a0d3.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/app/(home)/page-59181a80ec9b7782.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/app/(home)/store/%5Bslug%5D/page-474559c63a15bd32.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/app/layout-d6b1a3248d95f221.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/app/not-found-837f13816ee0aa34.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/bc9c3264-fee50d31b553d3d1.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/d622d42c-4119413a8ded412d.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/e416a3ff-d52a08a7c15fe87c.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/fd9d1056-63be1088dc19c3d9.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/main-app-4a934ebad02c10cd.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/main-c2d5cb056b65e952.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/pages/_app-27277a117f49dcf1.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/pages/_error-91a5938854a6f402.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2f2c4a499a53d1c4.js",revision:"XI1x6zA2mMF1OILScuifm"},{url:"/_next/static/css/33335a732599b153.css",revision:"33335a732599b153"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/img/icon-cardig-192.png",revision:"7c11586e0647d1bf0e6da2eb86fa1bca"},{url:"/img/icon-cardig-512.png",revision:"49209e4e633bfc6bfdebba1d38454faf"},{url:"/manifest.json",revision:"84a9bd806a39d4edf4f114f5f5459e0e"},{url:"/vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));