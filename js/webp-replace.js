// themes/your-theme/source/js/webp-replace.js
(function() {
    'use strict';
    
    // 1. 检测WebP支持
    function checkWebPSupport(callback) {
      var img = new Image();
      img.onload = function() { callback(true); };
      img.onerror = function() { callback(false); };
      img.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }
    
    // 2. 获取需要处理的图片
    function getProcessableImages() {
      var images = document.querySelectorAll('img');
      var processable = [];
      
      for (var i = 0; i < images.length; i++) {
        var img = images[i];
        var src = img.src || '';
        
        // 跳过条件：
        // 1. 已经是WebP格式
        // 2. 外部图片
        // 3. 有data-no-webp属性
        // 4. 不是常见的图片格式
        if (src.indexOf('.webp') > -1 || 
            src.indexOf('http') === 0 || 
            src.indexOf('//') === 0 ||
            src.indexOf('data:') === 0 ||
            img.hasAttribute('data-no-webp')) {
          continue;
        }
        
        // 只处理jpg, jpeg, png, gif格式
        if (/\.(jpg|jpeg|png|gif)(\?.*)?$/i.test(src)) {
          processable.push(img);
        }
      }
      
      return processable;
    }
    
    // 3. 替换单张图片
    function replaceSingleImage(img) {
      var originalSrc = img.src;
      var webpSrc = originalSrc.replace(/\.(jpg|jpeg|png|gif)(\?.*)?$/i, '.webp$2');
      
      // 测试WebP是否存在
      var testImg = new Image();
      testImg.onload = function() {
        if (!img.hasAttribute('data-webp-processed')) {
          img.setAttribute('data-webp-processed', 'true');
          img.setAttribute('data-original-src', originalSrc);
          img.src = webpSrc;
          
          // 添加错误处理
          img.addEventListener('error', function() {
            this.src = originalSrc;
          });
        }
      };
      testImg.src = webpSrc;
    }
    
    // 4. 批量替换图片
    function replaceImages(images) {
      images.forEach(replaceSingleImage);
    }
    
    // 5. 初始化函数
    function initWebP() {
      checkWebPSupport(function(isSupported) {
        if (isSupported) {
          var images = getProcessableImages();
          if (images.length > 0) {
            replaceImages(images);
            
            // 监听DOM变化，处理动态加载的图片
            if (typeof MutationObserver !== 'undefined') {
              var observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  var newImages = getProcessableImages();
                  if (newImages.length > 0) {
                    replaceImages(newImages);
                  }
                });
              });
              
              observer.observe(document.body, {
                childList: true,
                subtree: true
              });
            }
          }
        }
      });
    }
    
    // 6. 执行初始化
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initWebP);
    } else {
      initWebP();
    }
  })();