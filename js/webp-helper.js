// 在 themes/hexo-theme-amazing-master/source/js/ 下创建 webp-helper.js
// 或者在已有的 main.js 中添加

// 检测WebP支持
function checkWebPSupport() {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = function() {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }
  
  // 替换图片为WebP格式
  async function replaceImagesWithWebP() {
    const supportsWebP = await checkWebPSupport();
    if (!supportsWebP) return;
    
    // 替换所有图片
    document.querySelectorAll('img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"], img[src$=".gif"]').forEach(img => {
      const src = img.getAttribute('src');
      // 排除已经是webp的情况
      if (src && !src.endsWith('.webp') && !img.classList.contains('no-webp')) {
        const webpSrc = src + '.webp';
        
        // 预加载WebP图片
        const webpImage = new Image();
        webpImage.onload = () => {
          img.src = webpSrc;
        };
        webpImage.src = webpSrc;
      }
    });
    
    // 替换背景图片
    document.querySelectorAll('[style*="background-image"]').forEach(el => {
      const style = el.getAttribute('style');
      const match = style.match(/url\(['"]?([^'")]+)['"]?\)/);
      if (match && !match[1].endsWith('.webp')) {
        const webpUrl = match[1] + '.webp';
        el.style.backgroundImage = style.replace(match[0], `url("${webpUrl}")`);
      }
    });
  }
  
  // 在DOM加载完成后执行
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(replaceImagesWithWebP, 100); // 延迟一点确保图片已加载
  });
  
  // 监听懒加载图片
  if (window.MutationObserver) {
    const observer = new MutationObserver(() => {
      replaceImagesWithWebP();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }