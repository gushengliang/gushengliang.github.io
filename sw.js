/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","ae8cc39eb8c13be283c8d53433981aa9"],["/archives/2019/06/index.html","235d713a1d39730d93b9174f10f0b0fc"],["/archives/2019/09/index.html","170c0b614432846d31445085a7c6a5a7"],["/archives/2019/11/index.html","685703aa2f4642efe7eb574593a46f03"],["/archives/2019/index.html","a594cbc4c3bbfbf34814f7740401aab5"],["/archives/2021/08/index.html","aeeb59a91cab70af683c2e905fdf7dda"],["/archives/2021/09/index.html","892ce0cdbb3beb298b322e7d0a2d5b14"],["/archives/2021/12/index.html","017f04fc3ff39e0a25be825f34b06e83"],["/archives/2021/index.html","78bfb1aa837cf452f68601ba0bb0aee3"],["/archives/2022/01/index.html","7abe7a030a89363b0d9e740028db5beb"],["/archives/2022/01/page/2/index.html","f766ac57779c57075dc9197f7206a929"],["/archives/2022/02/index.html","680fd61fa29ad6a6cded26fd269b1d8c"],["/archives/2022/index.html","eb5877e5f5a27924a7913005d317ca38"],["/archives/2022/page/2/index.html","fff9220526031cab5d57308e1ff28838"],["/archives/index.html","f7f76ab70730a6691679b73287750b8c"],["/archives/page/2/index.html","3216965b7e475321cd5cd290d465294d"],["/archives/page/3/index.html","5e8e05d37d53831fa04697d651a1a497"],["/archives/page/4/index.html","aa672df3e2aa5e3bc247340ac0a14d71"],["/bundle.js","0a54d6a71c05a99019d6e3ba371a098a"],["/categories/Math/index.html","75672d2ee009e3c7220197be769981af"],["/categories/git/index.html","da18cf321a32b0c4f5c41f9c948a4775"],["/categories/index.html","2e5e28fec9f1e501bc040a575418c511"],["/categories/node/index.html","48829a38c6c1fcd8857e15fbf5a8ffb3"],["/categories/themes/index.html","effd6fe955458bc77611f8fe34aeeede"],["/categories/tools/index.html","80de5b0b67aa7a1b7ca70b331870f28c"],["/categories/内网穿透/index.html","0cd02b0ef9e94b3f664a42ce100c1df3"],["/categories/数据结构/index.html","cee3d658922758e3d25e1e2cee87642e"],["/categories/算法/index.html","86453de4bfb635397e7cd0b4b544c73a"],["/categories/计算机网络/index.html","47d2de90d1eea09fcfdc39bc7b5354ef"],["/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/css/cyberpunk.css","f82490b6df19f642021e4c3687714846"],["/css/default.css","cd7f809ae948e5fe947adb304e468e79"],["/css/fonts/fontello.eot","65d1c74452482817dce684c87007c1bb"],["/css/fonts/fontello.svg","ace9d2528820e1c7e298c4ad5961c982"],["/css/fonts/fontello.ttf","7c66ec20be8b24843b3a8bdd77297c67"],["/css/fonts/fontello.woff","32e8cf033865f9ef9b2eff49259e11a6"],["/css/global_gray.css","18bbe9bc01eb8698d90c36f8c4674a40"],["/css/meplayer.min.css","094b143c8213570b28d9bbc09a377131"],["/css/style.css","cd7f809ae948e5fe947adb304e468e79"],["/git/Git命令清单.html","b467f6d94a35c6987c4578fa9cc5e0dd"],["/git/解决Git提交没有权限.html","1c30e7ba02ee1a1689fb9c9a8e9a7d05"],["/img/avatar.png","8c257f9fdc3c92ebd07e84f3eb181297"],["/img/background.png","032563bac5d09e3855e81a7906ec41fa"],["/img/favicon.svg","9d54b7f0cf0548e08932cfd851738442"],["/img/links/nopic.jpg","8b64354e59066b0a18855f2d88a13244"],["/img/logo.svg","78c34960b55c12a2e1286351c45358f5"],["/img/og_image.png","c0c40988f5babf31dba70bccd41506a4"],["/img/razor-bottom-black.svg","05e61e3e4f70fa6615d49f20dfaf0a5f"],["/img/razor-top-black.svg","cfdc87c0ff230d692a43d8582dfc7aec"],["/index.html","6764c3c26f8c059ce97bed06179e5843"],["/js/APlayer.min.js","4a7b59f519e9d72b13b49bd2a9a3a67d"],["/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/js/about-me.js","ef025e99e2204d36bc3e10aaf1c896d4"],["/js/algolia.js","88266318b3903eb74b02980f23df1a9a"],["/js/animation.js","a4c4c64ea7db3fade0433829b74f0648"],["/js/back_to_top.js","51f299017337aa48993710000d91db62"],["/js/banner.js","7a501d4d290dc2b3685c3c35fa58ad51"],["/js/column.js","a00358caf2369c39b2c04475f927dbc2"],["/js/comment-issue-data.js","f77a844d8f1335f0d4465ff906cb0b16"],["/js/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/js/friend.js","fb6ea4471f71021d546faebf4895397b"],["/js/gitalk.min.js","960c59e2e459f0e5b30e3dfa4e8fe456"],["/js/gitalk_self.min.js","6e178aed8c6694e7686d0ff3a14cbe27"],["/js/globalUtils.js","2eaf0aa146bd39eafe501ba4a7463221"],["/js/google_cse.js","87a5caa1a4df03fa4a86efae49b5e401"],["/js/insight.js","bcc59d029592345cded5a7d38384e116"],["/js/main.js","fd015c0af7f35a3ea0e80b61fec0a067"],["/js/md5.min.js","ea27c6f75517dc30bcc46b6795e82b66"],["/js/meplayer.js","cf370a5cd26a1b4217038f019e95a011"],["/js/music.js","c77f63aaef18833a04e278db6a1a524e"],["/js/theme-setting.js","47a42ab8b6ec36c06c018c0f4e0fbc38"],["/js/toc.js","6eb46e0b348426ab981fc67bd0a50d50"],["/live2d/autoload.js","4dfaa176a394aaff4609a06b70385d4c"],["/live2d/flat-ui-icons-regular.eot","f1d025e1d5dc1b25678397fcf6ae70d7"],["/live2d/flat-ui-icons-regular.svg","ffc6ede02a31ec3b6990bfa29c64fdd6"],["/live2d/flat-ui-icons-regular.ttf","71b22c7da4697bc0680e3f603929faba"],["/live2d/flat-ui-icons-regular.woff","b850ecca5ab51e9035e6a36eb33b421a"],["/live2d/live2d.js","4af772ebedff81ae0580babc8a6e7a19"],["/live2d/waifu-tips.js","3ae784ea0af509d876560b23c375824e"],["/live2d/waifu.css","ef11cd77d463786a5fe7cf1158ec92a0"],["/math/二阶常系数线性非齐次微分方程的通解和特解.html","ecddd608f61a140966d4d2eeaa3a6e98"],["/math/数学一元函数和多元函数连续可导与可微关系.html","6f3b985fb966d8a78744dd907cf2ec11"],["/media/index.html","29a3d91a87ab1c1203e03c939d8e18ec"],["/message/index.html","9911731164c5cc26eae2942780321a42"],["/music/index.html","0caeab7e55207c8643f48bb75adbbbc0"],["/node/node和npm安装配置.html","c6586ed587985f603f85edb213cfc2c8"],["/page/2/index.html","f98171f95e55e107f3fa5ba0a844449f"],["/page/3/index.html","38b9d1525682b142c192c60b2fd521c5"],["/page/4/index.html","b5ec237d515604a42a6c2eb674baba2c"],["/page/5/index.html","b3d2635dfa5c27b7a9f6d37d3be79198"],["/picture/icon.jpg","1f131e5b22ec4cfe67cc088b5a60a9c2"],["/self-talking/index.html","db3cf223a41cb008d7523b57fd53edbb"],["/style.css","bf7c2db049551f928701f4773f3f9e69"],["/sw-register.js","3183f94a0a1c59082a221348e2594446"],["/tags/Chrome/index.html","f06594b8ded1af480454931dc9d29dbb"],["/tags/KMP/index.html","c94965cdedff7bf958b9352fe5520607"],["/tags/LeetCode/index.html","f585760b080f677e337b09eafbdb6574"],["/tags/NAT/index.html","72971e1acfd386d55b3566c19adfab97"],["/tags/PicGo/index.html","ff0904a7cb9c18015ff6affd85159c72"],["/tags/TCP/index.html","47940267766f57b85bc35841da83d6c9"],["/tags/Typora/index.html","a0d5fc7443ca4d8a0857d6e075ee7148"],["/tags/auto-deploy/index.html","0aa40fdd41d003d9c37bc7610a94e796"],["/tags/git/index.html","0160ba95d65e54111cdf3cedcdb379c4"],["/tags/git命令/index.html","94168906875fc8652b5feda7e5b000da"],["/tags/index.html","1a510e47187d0532c12aebb29a840f5a"],["/tags/node/index.html","d8fac50bfd3a8118dc3499e22993f23b"],["/tags/npm/index.html","e9ef148a4ea8e8def9c8075d2c6e97d8"],["/tags/themes/index.html","50dfd975f47cddeb980b6edd7cb0d89d"],["/tags/三元组/index.html","51bd6b33a672a6a1bfbb2cf1e68df36c"],["/tags/二叉排序树/index.html","6a117433624e16bd7cb295abcf53d874"],["/tags/关键路径/index.html","0ea3b304e4f64a6b97e639d7d89331f0"],["/tags/多元函数微积分学/index.html","d5692c72bf8a8f4373467339962f79d2"],["/tags/快速转置/index.html","7bb9c9780b58325edd8d0f9a7eccc752"],["/tags/指针/index.html","5f91ed3dbc43c1709cb58d1f31c224ca"],["/tags/数学/index.html","ea9f23a2bd486eb1012ae4aeaebe24b1"],["/tags/特解/index.html","0c350532b6fc43dd36092d2d318beae5"],["/tags/红黑树/index.html","831ce44a0ff5683875cdd3dc47cda4c0"],["/tags/线性表/index.html","8dfe6b1e1608aea6f64668209bc6e5a4"],["/tags/结构体/index.html","8eb2a3ab8d5ea814e1160be7093dd7f2"],["/tags/试题/index.html","78f38ca0974e2e853f3925b3aadfcee5"],["/tags/齐次/index.html","4c3627c88a1d91e5ec4d975c84fa1504"],["/themes/github-Issue-作为博客微型数据库的应用.html","5c91836337802fdfe25e1577958bf168"],["/themes/github-page网站cdn优化加速.html","5570b8b47c952c723531f2f3f72a4bba"],["/themes/使用Github Action实现全自动部署.html","d64c734d77310a3d44758a5a62789f4f"],["/themes/博客换肤的一种实现方式思路.html","39d2b663793701d56b6dd395508e3c70"],["/tools/Typora利用PicGo同步图片.html","c093b4c7136750d11939fef2570a24c9"],["/tools/chrome实验性功能.html","ec1abc8d770c53542363fbd5190a74c8"],["/tools/博客图片上传picgo工具github图传使用.html","924cbd7ee9111ce9c6ac599e47b17b0a"],["/tools/谷歌Chrome浏览器默认https加载导致图片不显示.html","532daed9d832a633f3a8b45038baf03c"],["/内网穿透/内网穿透.html","342691fa55d1a438812ef24e923b4dce"],["/数据结构/二叉排序树的插入与删除.html","ddda8842169d96bda602af3c77570c38"],["/数据结构/关键路径.html","24afea42972498ee70376996a9e7628d"],["/数据结构/头插法和尾插法建立单链表.html","949023bf854db8c3c4b9112ceb742d13"],["/数据结构/数据结构历年试题.html","3b566592bdcd8bc8480a13d5bf945710"],["/数据结构/数据结构白皮书复习题.html","468051a17a7d6d4e130c1db5e981ae6b"],["/数据结构/稀疏矩阵转置算法.html","3222c0484b38db7c3e3c5429ffe6ea83"],["/数据结构/红黑树.html","1c5a583ae5fdb0b85f42a306d3c06427"],["/数据结构/结构体和指针详解.html","5815621749fae5f928f3129d7becec24"],["/算法/KMP算法.html","35e789c592ce39a70693b05637ecf81c"],["/算法/最大值.html","c81cd99fc15830c1e0f026ef284e270e"],["/计算机网络/TCP的三次握手和四次挥手.html","d473ba1bb8f3feec51fa44adb743f7d0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"wkphoto.cdn.bcebos.com"});





/* eslint-enable */
