function loadMainJs(i,t,a,e){function n(){const t=i(".navbar-main .navbar-start").outerWidth()+i(".navbar-main .navbar-end").outerWidth();i(document).outerWidth()<t?i(".navbar-main .navbar-menu").addClass("justify-content-start"):i(".navbar-main .navbar-menu").removeClass("justify-content-start")}function l(t,a){const e=i(t).find(".fold i");a?i(t).addClass("folded"):i(t).removeClass("folded"),a?e.removeClass("fa-angle-down"):e.removeClass("fa-angle-right"),a?e.addClass("fa-angle-right"):e.addClass("fa-angle-down")}function s(i){return'<span class="fold">'+("unfolded"===i?'<i class="fas fa-angle-down"></i>':'<i class="fas fa-angle-right"></i>')+"</span>"}if(i('.article img:not(".not-gallery-item")').each((function(){0===i(this).parent("a").length&&(i(this).wrap('<a class="gallery-item" href="'+i(this).attr("src")+'"></a>'),this.alt&&i(this).after('<p class="has-text-centered is-size-6 caption">'+this.alt+"</p>"))})),"function"==typeof i.fn.lightGallery&&i(".article").lightGallery({selector:".gallery-item"}),"function"==typeof i.fn.justifiedGallery&&(i(".justified-gallery > p > .gallery-item").length&&i(".justified-gallery > p > .gallery-item").unwrap(),i(".justified-gallery").justifiedGallery({rowHeight:230,margins:4})),"function"==typeof t&&i(".article-meta time").each((function(){i(this).text(t(i(this).attr("datetime")).fromNow())})),i(".article > .content > table").each((function(){i(this).width()>i(this).parent().width()&&i(this).wrap('<div class="table-overflow"></div>')})),n(),i(window).resize(n),i("figure.highlight table").wrap('<div class="highlight-body">'),void 0!==e&&void 0!==e.article&&void 0!==e.article.highlight){i("figure.highlight").addClass("hljs"),i("figure.highlight .code .line span").each((function(){const t=i(this).attr("class").split(/\s+/);1===t.length&&(i(this).addClass("hljs-"+t[0]),i(this).removeClass(t[0]))}));const t=e.article.highlight.clipboard,n=e.article.highlight.fold.trim();i("figure.highlight").each((function(){i(this).find("figcaption").length?(i(this).find("figcaption").addClass("level is-mobile"),i(this).find("figcaption").append('<div class="level-left">'),i(this).find("figcaption").append('<div class="level-right">'),i(this).find("figcaption div.level-left").append(i(this).find("figcaption").find("span")),i(this).find("figcaption div.level-right").append(i(this).find("figcaption").find("a"))):(t||n)&&i(this).prepend('<figcaption class="level is-mobile"><div class="level-left"></div><div class="level-right"></div></figcaption>')})),void 0!==a&&t&&(i("figure.highlight").each((function(){const t="code-"+Date.now()+(1e3*Math.random()|0),a='<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#'+t+' .code"><i class="fas fa-copy"></i></a>';i(this).attr("id",t),i(this).find("figcaption div.level-right").append(a)})),new a(".highlight .copy")),n&&(i("figure.highlight").each((function(){if(i(this).find("figcaption").find("span").length>0){const t=i(this).find("figcaption").find("span");if(t[0].innerText.indexOf(">folded")>-1)return t[0].innerText=t[0].innerText.replace(">folded",""),i(this).find("figcaption div.level-left").prepend(s("folded")),void l(this,!0)}i(this).find("figcaption div.level-left").prepend(s(n)),l(this,"folded"===n)})),i("figure.highlight figcaption .fold").click((function(){const t=i(this).closest("figure.highlight");l(t.eq(0),!t.hasClass("folded"))})))}const o=i("#toc");if(o.length>0){const t=i("<div>");function h(){o.toggleClass("is-active"),t.toggleClass("is-active")}t.attr("id","toc-mask"),i("body").append(t),o.on("click",h),t.on("click",h),i(".navbar-main .catalogue").on("click",h)}}function loadMathJax(){$.getScript("/js/MathJax.js",(function(){MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}});var i=document.getElementsByClassName("entry-content")[0];MathJax.Hub.Queue(["Typeset",MathJax.Hub,i])}))}$(document).ready((function(){loadMainJs(jQuery,window.moment,window.ClipboardJS,window.IcarusThemeSettings);var i=$(".is-fixed-top"),t=$(".justify-content-start");i.offset().top>12?(i.addClass("navbar-highlight"),t.addClass("navbar-highlight")):(i.removeClass("navbar-highlight"),t.removeClass("navbar-highlight")),$(window).scroll((function(){i.offset().top>12?(i.addClass("navbar-highlight"),t.addClass("navbar-highlight")):(i.removeClass("navbar-highlight"),t.removeClass("navbar-highlight"))}))}));