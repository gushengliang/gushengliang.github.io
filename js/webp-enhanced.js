// themes/your-theme/source/js/webp-enhanced.js
(function() {
    'use strict';
    
    var config = {
      debug: false,
      lazyLoad: true,
      backgroundImages: false
    };
    
    // 工具函数
    var utils = {
      log: function() {
        if (config.debug && console && console.log) {
          console.log.apply(console, arguments);
        }
      },
      
      isWebPSupported: null,
      
      checkWebP: function(callback) {
        if (utils.isWebPSupported !== null) {
          callback(utils.isWebPSupported);
          return;
        }
        
        var img = new Image();
        img.onload = function() {
          utils.isWebPSupported = (img.width > 0 && img.height > 0);
          callback(utils.isWebPSupported);
        };
        img.onerror = function() {
          utils.isWebPSupported = false;
          callback(false);
        };
        img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      },
      
      isLocalImage: function(src) {
        return src && 
               !src.startsWith('http') && 
               !src.startsWith('//') && 
               !src.startsWith('data:') &&
               /\.(jpg|jpeg|png|gif)(\?.*)?$/i.test(src);
      },
      
      getWebPSrc: function(src) {
        return src.replace(/\.(jpg|jpeg|png|gif)(\?.*)?$/i, '.webp$2');
      },
      
      testWebPExists: function(webpSrc, callback) {
        var img = new Image();
        img.onload = function() { callback(true); };
        img.onerror = function() { callback(false); };
        img.src = webpSrc;
      }
    };
    
    // 图片替换器
    var imageReplacer = {
      processImage: function(img) {
        if (img.hasAttribute('data-webp-processed') || 
            img.hasAttribute('data-no-webp')) {
          return;
        }
        
        var src = img.src;
        if (!utils.isLocalImage(src)) {
          return;
        }
        
        var webpSrc = utils.getWebPSrc(src);
        utils.testWebPExists(webpSrc, function(exists) {
          if (exists) {
            img.setAttribute('data-webp-processed', 'true');
            img.setAttribute('data-original-src', src);
            img.src = webpSrc;
            
            // 错误回退
            img.addEventListener('error', function() {
              this.src = src;
              utils.log('WebP加载失败，回退到原图:', src);
            });
            
            utils.log('图片替换为WebP:', src, '->', webpSrc);
          }
        });
      },
      
      processLazyImage: function(img) {
        var dataSrc = img.getAttribute('data-src') || 
                      img.getAttribute('data-original') || 
                      img.getAttribute('data-lazy-src');
        
        if (!dataSrc || !utils.isLocalImage(dataSrc)) {
          return;
        }
        
        var webpSrc = utils.getWebPSrc(dataSrc);
        utils.testWebPExists(webpSrc, function(exists) {
          if (exists) {
            img.setAttribute('data-webp-processed', 'true');
            img.setAttribute('data-original-src', dataSrc);
            
            // 更新data-src属性
            if (img.hasAttribute('data-src')) {
              img.setAttribute('data-src', webpSrc);
            }
            if (img.hasAttribute('data-original')) {
              img.setAttribute('data-original', webpSrc);
            }
            if (img.hasAttribute('data-lazy-src')) {
              img.setAttribute('data-lazy-src', webpSrc);
            }
            
            // 如果图片已经加载，立即更新
            if (img.src === dataSrc) {
              img.src = webpSrc;
            }
            
            utils.log('懒加载图片替换为WebP:', dataSrc, '->', webpSrc);
          }
        });
      },
      
      processAllImages: function() {
        // 普通图片
        var images = document.querySelectorAll('img:not([data-webp-processed])');
        for (var i = 0; i < images.length; i++) {
          var img = images[i];
          
          // 优先处理懒加载属性
          if (config.lazyLoad && 
              (img.hasAttribute('data-src') || 
               img.hasAttribute('data-original') || 
               img.hasAttribute('data-lazy-src'))) {
            imageReplacer.processLazyImage(img);
          } else {
            imageReplacer.processImage(img);
          }
        }
      }
    };
    
    // 初始化
    function init() {
      utils.checkWebP(function(supported) {
        if (supported) {
          utils.log('浏览器支持WebP，开始替换图片');
          imageReplacer.processAllImages();
          
          // 监听DOM变化
          if (typeof MutationObserver !== 'undefined') {
            var observer = new MutationObserver(function() {
              imageReplacer.processAllImages();
            });
            
            observer.observe(document.body, {
              childList: true,
              subtree: true
            });
          }
          
          // 添加CSS类
          document.documentElement.classList.add('webp-supported');
        } else {
          utils.log('浏览器不支持WebP');
          document.documentElement.classList.add('webp-not-supported');
        }
      });
    }
    
    // 启动
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
    
    // 暴露API（可选）
    window.WebPReplacer = {
      utils: utils,
      imageReplacer: imageReplacer,
      config: config,
      recheck: function() {
        imageReplacer.processAllImages();
      }
    };
  })();