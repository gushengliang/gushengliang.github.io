function loadBackTop(){const e=$("#back-to-top"),o=$("footer.footer"),t=$(".column-main"),s=$(".column-left"),n=$(".column-right");let i=0;let l=null;const a={base:{classname:"card has-text-centered",left:"",width:64,bottom:20}};function c(o){if(null===l||(t=l,s=o,[].concat(Object.keys(t),Object.keys(s)).some((e=>!Object.prototype.hasOwnProperty.call(t,e)||!Object.prototype.hasOwnProperty.call(s,e)||s[e]!==t[e])))){var t,s;e.attr("class",o.classname);for(const t in o)"classname"!==t&&e.css(t,o[t]);l=o}}function d(){return window.innerWidth>=1078}function r(){return n.length>0}function p(){return $(window).scrollTop()+$(window).height()}function h(){return e.outerHeight(!0)}function b(){if(d()||window.innerWidth>=768&&!d()&&!(s.length>0)&&r()){let s;const i=(t.outerWidth()-t.width())/2,l=$(window).width()-e.outerWidth(!0)-20,d=o.offset().top+h()/2+20;s=0===$(window).scrollTop()||p()<(r()?Math.max.apply(null,n.find(".widget").map((function(){return $(this).offset().top+$(this).outerHeight(!0)}))):0)+i+h()?a["desktop-hidden"]:p()<d?a["desktop-visible"]:Object.assign({},a["desktop-dock"],{bottom:p()-d+20});const b=t.offset().left+t.outerWidth()+i;s=Object.assign({},s,{left:Math.min(b,l)}),c(s)}else $(window).scrollTop()<i&&$(window).scrollTop()>0?c(a["mobile-visible"]):c(a["mobile-hidden"]),i=$(window).scrollTop()}a["desktop-hidden"]=Object.assign({},a.base,{classname:a.base.classname+" rise-up"}),a["desktop-visible"]=Object.assign({},a["desktop-hidden"],{classname:a["desktop-hidden"].classname+" fade-in"}),a["desktop-dock"]=Object.assign({},a["desktop-visible"],{classname:a["desktop-visible"].classname+" fade-in is-rounded",width:40}),a["mobile-hidden"]=Object.assign({},a.base,{classname:a.base.classname+" fade-in",right:20}),a["mobile-visible"]=Object.assign({},a["mobile-hidden"],{classname:a["mobile-hidden"].classname+" rise-up"}),b(),$(window).resize(b),$(window).scroll(b),$("#back-to-top").on("click",(()=>{CSS&&CSS.supports&&CSS.supports("(scroll-behavior: smooth)")?window.scroll({top:0,behavior:"smooth"}):$("body, html").animate({scrollTop:0},400)}))}$(document).ready(loadBackTop());