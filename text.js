 id = "litespeed-css-async-lib"
 type = "text/javascript" >
     ! function(a) {
         "use strict";
         var b = function(b, c, d) {
             function e(a) {
                 return h.body ? a() : void setTimeout(function() {
                     e(a)
                 })
             }

             function f() {
                 i.addEventListener && i.removeEventListener("load", f), i.media = d || "all"
             }
             var g, h = a.document,
                 i = h.createElement("link");
             if (c) g = c;
             else {
                 var j = (h.body || h.getElementsByTagName("head")[0]).childNodes;
                 g = j[j.length - 1]
             }
             var k = h.styleSheets;
             i.rel = "stylesheet", i.href = b, i.media = "only x", e(function() {
                 g.parentNode.insertBefore(i, c ? g : g.nextSibling)
             });
             var l = function(a) {
                 for (var b = i.href, c = k.length; c--;)
                     if (k[c].href === b) return a();
                 setTimeout(function() {
                     l(a)
                 })
             };
             return i.addEventListener && i.addEventListener("load", f), i.onloadcssdefined = l, l(f), i
         };
         "undefined" != typeof exports ? exports.loadCSS = b : a.loadCSS = b
     }("undefined" != typeof global ? global : this);
 ! function(a) {
     if (a.loadCSS) {
         var b = loadCSS.relpreload = {};
         if (b.support = function() {
                 try {
                     return a.document.createElement("link").relList.supports("preload")
                 } catch (b) {
                     return !1
                 }
             }, b.poly = function() {
                 for (var b = a.document.getElementsByTagName("link"), c = 0; c < b.length; c++) {
                     var d = b[c];
                     "preload" === d.rel && "style" === d.getAttribute("as") && (a.loadCSS(d.href, d, d.getAttribute("media")), d.rel = null)
                 }
             }, !b.support()) {
             b.poly();
             var c = a.setInterval(b.poly, 300);
             a.addEventListener && a.addEventListener("load", function() {
                 b.poly(), a.clearInterval(c)
             }), a.attachEvent && a.attachEvent("onload", function() {
                 a.clearInterval(c)
             })
         }
     }
 }(this)
 jQuery(document).ready(function($) {

     //ajusta links slider
     $(".slider_modelos_home a").attr("href", "/sites-sob-demanda-modelos-de-sites/")
         .attr("alt", "Ver modelos de sites").attr("title", "Ver modelos de sites");


     //fix submenu at desktops
     $("html").addClass("no-touch");
 });

 function scb_tawktopopup() {

     SCBPopupCenter('https://tawk.to/chat/56b20e596cfn3877e0c76fec9/default/?$_tawk_popout=true', 'Site.com.br CHAT', 400, 600);
 }

 function SCBPopupCenter(url, title, w, h) {
     // Fixes dual-screen position                         Most browsers      Firefox
     var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : window.screenX;
     var dualScreenTop = window.screenTop != undefined ? window.screenTop : window.screenY;

     var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
     var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

     var left = ((width / 2) - (w / 2)) + dualScreenLeft;
     var top = ((height / 2) - (h / 2)) + dualScreenTop;
     var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

     // Puts focus on the newWindow
     if (window.focus) {
         newWindow.focus();
     }
 }

 function themifyMobileMenuTrigger(e) {
     if (document.body.clientWidth > 0 && document.body.clientWidth <= tf_mobile_menu_trigger_point) {
         document.body.classList.add('mobile_menu_active');
     } else {
         document.body.classList.remove('mobile_menu_active');
     }
 }
 themifyMobileMenuTrigger();
 document.addEventListener('DOMContentLoaded', function() {
     jQuery(window).on('tfsmartresize.tf_mobile_menu', themifyMobileMenuTrigger);
 }, false);
 (function(i, s, o, g, r, a, m) {
     i['GoogleAnalyticsObject'] = r;
     i[r] = i[r] || function() {
         (i[r].q = i[r].q || []).push(arguments)
     }, i[r].l = 1 * new Date();
     a = s.createElement(o),
         m = s.getElementsByTagName(o)[0];
     a.async = 1;
     a.src = g;
     m.parentNode.insertBefore(a, m)
 })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

 ga('create', 'UA-33104336-1', 'auto');
 ga('send', 'pageview');
 document.documentElement.className += " js";
 var Tawk_API = Tawk_API || {},
     Tawk_LoadStart = new Date();
 (function() {
     var s1 = document.createElement("script"),
         s0 = document.getElementsByTagName("script")[0];
     s1.async = true;
     s1.src = 'https://embed.tawk.to/56b20e596cf3877e0c76fec9/default';
     s1.charset = 'UTF-8';
     s1.setAttribute('crossorigin', '*');
     s0.parentNode.insertBefore(s1, s0);
 })();
 [{
     "@context": "https:\/\/schema.org",
     "@type": "WebPage",
     "mainEntityOfPage": {
         "@type": "WebPage",
         "@id": "https:\/\/www.site.com.br\/site-gratis\/"
     },
     "headline": "Site Gr\u00e1tis",
     "datePublished": "2016-11-22T11:44:37+00:00",
     "dateModified": "2016-11-22T11:44:37+00:00",
     "description": "",
     "commentCount": "0"
 }]

 var themify_vars = {
     "version": "3.5.8",
     "url": "https:\/\/www.site.com.br\/wp-content\/themes\/themify-ultra\/themify",
     "map_key": null,
     "includesURL": "https:\/\/www.setejunior.com\/wp-includes\/",
     "isCached": "on",
     "minify": {
         "css": {
             "themify-icons": 1,
             "themify.framework": 1,
             "lightbox": 1,
             "themify-builder-style": 1
         },
         "js": {
             "backstretch.themify-version": 1,
             "bigvideo": 1,
             "themify.dropdown": 1,
             "themify-tiles": 1,
             "themify.mega-menu": 1,
             "sliderPro.helpers": 1,
             "themify.builder.script": 1,
             "themify.scroll-highlight": 1,
             "themify-youtube-bg": 1,
             "themify.parallaxit": 1,
             "themify.ticks": 1
         }
     }
 };
 var tbLocalScript = {
     "isAnimationActive": "1",
     "isParallaxActive": "1",
     "isParallaxScrollActive": "",
     "animationInviewSelectors": [".module.wow", ".module_row.wow", ".builder-posts-wrap > .post.wow", ".module.module-pro-image"],
     "backgroundSlider": {
         "autoplay": 5000,
         "speed": 2000
     },
     "animationOffset": "100",
     "videoPoster": "https:\/\/www.site.com.br\/wp-content\/themes\/themify-ultra\/themify\/themify-builder\/img\/blank.png",
     "backgroundVideoLoop": "yes",
     "builder_url": "https:\/\/www.site.com.br\/wp-content\/themes\/themify-ultra\/themify\/themify-builder",
     "framework_url": "https:\/\/www.site.com.br\/wp-content\/themes\/themify-ultra\/themify",
     "version": "3.5.8",
     "fullwidth_support": "1",
     "fullwidth_container": "body",
     "loadScrollHighlight": "1",
     "addons": {
         "builder_contact": {
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-contact\/assets\/scripts.js",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-contact\/assets\/style.css",
             "ver": "1.2.3",
             "selector": ".module-contact",
             "external": "var BuilderContact = {\"admin_url\":\"https:\\\/\\\/www.site.com.br\\\/wp-admin\\\/admin-ajax.php\"};"
         },
         "builder-slideshow": {
             "selector": ".builder-slideshow",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-slideshow\/assets\/styles.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-slideshow\/assets\/scripts.min.js",
             "ver": "1.0.5",
             "external": "var builderSlideshow = {\"autoplay\":\"0\",\"builder_id\":\"4357003\",\"url\":\"https:\\\/\\\/www.site.com.br\\\/wp-content\\\/plugins\\\/builder-slideshow\\\/assets\\\/\"};"
         },
         "builder-bg-video-slider": {
             "selector": "[data-tb_slider_videos]",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-bg-video-slider\/assets\/frontend-styles.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-bg-video-slider\/assets\/frontend-scripts.min.js",
             "ver": "1.0.6",
             "external": "var tb_slider_videos_vars = {\"url\":\"https:\\\/\\\/www.site.com.br\\\/wp-content\\\/plugins\\\/builder-bg-video-slider\\\/\"};"
         },
         "bar-chart": {
             "selector": ".module-bar-chart",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-bar-chart\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-bar-chart\/assets\/script.min.js",
             "ver": "1.0.7"
         },
         "button": {
             "selector": ".module-button",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-button\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-button\/assets\/scripts.min.js",
             "ver": "1.2.2"
         },
         "contact": {
             "selector": ".module-contact",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-contact\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-contact\/assets\/scripts.min.js",
             "external": "var BuilderContact = {\"admin_url\":\"https:\\\/\\\/www.site.com.br\\\/wp-admin\\\/admin-ajax.php\"};",
             "ver": "1.2.3"
         },
         "countdown": {
             "selector": ".module-countdown",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-countdown\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-countdown\/assets\/script.min.js",
             "ver": "1.1.4"
         },
         "counter": {
             "selector": ".module-counter",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-counter\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-counter\/assets\/scripts.min.js",
             "ver": "1.1.5"
         },
         "fittext": {
             "selector": ".module-fittext, .module-type-fittext",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-fittext\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-fittext\/assets\/fittext.min.js",
             "ver": "1.1.2",
             "external": "var builderFittext = {\"webSafeFonts\":[\"Arial, Helvetica, sans-serif\",\"Verdana, Geneva, sans-serif\",\"Georgia, 'Times New Roman', Times, serif\",\"'Times New Roman', Times, serif\",\"Tahoma, Geneva, sans-serif\",\"'Trebuchet MS', Arial, Helvetica, sans-serif\",\"Palatino, 'Palatino Linotype', 'Book Antiqua', serif\",\"'Lucida Sans Unicode', 'Lucida Grande', sans-serif\"]};"
         },
         "pro-image": {
             "selector": ".module.module-pro-image",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-image-pro\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-image-pro\/assets\/scripts.min.js",
             "ver": "1.2.4"
         },
         "pricing-table": {
             "selector": ".module-pricing-table",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-pricing-table\/assets\/style.min.css",
             "ver": "1.1.2"
         },
         "pro-slider": {
             "selector": ".module-pro-slider",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-slider-pro\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-slider-pro\/assets\/scripts.min.js",
             "ver": "1.2.4",
             "external": "var builderSliderPro = {\"height_ratio\":\"1.9\",\"url\":\"https:\\\/\\\/www.site.com.br\\\/wp-content\\\/plugins\\\/builder-slider-pro\\\/assets\\\/\"};"
         },
         "pointers": {
             "selector": ".module-pointers",
             "css": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-pointers\/assets\/style.min.css",
             "js": "https:\/\/www.site.com.br\/wp-content\/plugins\/builder-pointers\/assets\/scripts.min.js",
             "ver": "1.1.5",
             "external": "var BuilderPointers = {\"trigger\":\"hover\"};"
         }
     },
     "breakpoints": {
         "tablet_landscape": [769, "1024"],
         "tablet": [681, "768"],
         "mobile": "480"
     },
     "ticks": {
         "tick": 30,
         "ajaxurl": "https:\/\/www.site.com.br\/wp-admin\/admin-ajax.php",
         "postID": 4357003
     }
 };
 var themifyScript = {
     "lightbox": {
         "lightboxSelector": ".themify_lightbox",
         "lightboxOn": true,
         "lightboxContentImages": false,
         "lightboxContentImagesSelector": "",
         "theme": "pp_default",
         "social_tools": false,
         "allow_resize": true,
         "show_title": false,
         "overlay_gallery": false,
         "screenWidthNoLightbox": 600,
         "deeplinking": false,
         "contentImagesAreas": "",
         "gallerySelector": ".gallery-icon > a",
         "lightboxGalleryOn": true
     },
     "lightboxContext": "body"
 };
 var tbScrollHighlight = {
     "fixedHeaderSelector": "#headerwrap.fixed-header",
     "speed": "900",
     "navigation": "#main-nav",
     "scrollOffset": "-5",
     "scroll": "internal"
 };
 'https://www.site.com.br/wp-content/themes/themify-ultra/themify/js/main.min.js?ver=3.5.8'
 'https://www.site.com.br/wp-content/plugins/exopite-multifilter/public/js/exopite-core.min.js?ver=1533052228'
 'https://www.site.com.br/wp-includes/js/imagesloaded.min.js?ver=3.2.0'
 'https://www.site.com.br/wp-content/themes/themify-ultra/themify/js/themify.sidemenu.min.js?ver=2.0.1'
 var themifyScript = {
     "themeURI": "https:\/\/www.site.com.br\/wp-content\/themes\/themify-ultra",
     "lightbox": {
         "lightboxSelector": ".themify_lightbox",
         "lightboxOn": true,
         "lightboxContentImages": false,
         "lightboxContentImagesSelector": "",
         "theme": "pp_default",
         "social_tools": false,
         "allow_resize": true,
         "show_title": false,
         "overlay_gallery": false,
         "screenWidthNoLightbox": 600,
         "deeplinking": false,
         "contentImagesAreas": "",
         "gallerySelector": ".gallery-icon > a",
         "lightboxGalleryOn": true
     },
     "lightboxContext": "#pagewrap",
     "fixedHeader": "fixed-header",
     "sticky_header": "",
     "ajax_nonce": "9870c8d8c7",
     "ajax_url": "https:\/\/www.site.com.br\/wp-admin\/admin-ajax.php",
     "smallScreen": "760",
     "resizeRefresh": "250",
     "parallaxHeader": "",
     "loadingImg": "https:\/\/www.site.com.br\/wp-content\/themes\/themify-ultra\/images\/loading.gif",
     "maxPages": "0",
     "currentPage": "1",
     "autoInfinite": "auto",
     "bufferPx": "50",
     "infiniteURL": "0",
     "scrollToNewOnLoad": "scroll",
     "resetFilterOnLoad": "reset",
     "fullPageScroll": "",
     "shop_masonry": "no",
     "tiledata": {
         "grids": {
             "post": {
                 "1": ["AAAA"],
                 "2": ["BBCC", "BBCC"],
                 "3": ["DD.."],
                 "4": [".EEF", ".EEF"],
                 "5": ["DD..", "BBCC", "BBCC"],
                 "6": [".EEF", ".EEF", "BBCC", "BBCC"],
                 "7": [".EEF", ".EEF", "DD.."],
                 "8": [".EEF", ".EEF", "DD..", "AAAA"],
                 "9": [".EEF", ".EEF", "DD..", "BBCC", "BBCC"],
                 "10": [".EEF", ".EEF", "DD..", "MMNN", "MMPP"],
                 "11": [".EEF", ".EEF", "DD..", "MMNN", "MMPP", "AAAA"],
                 "12": [".EEF", ".EEF", "DD..", "MMNN", "MMPP", "BBCC", "BBCC"],
                 "13": [".EEF", ".EEF", "DD..", "MMNN", "MMPP", "LSRR", "LSRR"]
             },
             "mobile": ["AA", ".."]
         },
         "default_grid": "post",
         "small_screen_grid": "mobile",
         "breakpoint": 800,
         "padding": 5,
         "full_width": false,
         "animate_init": false,
         "animate_resize": true,
         "animate_template": false
     },
     "responsiveBreakpoints": {
         "tablet_landscape": "1024",
         "tablet": "768",
         "mobile": "480"
     }
 };
 /*  */
 'https://www.site.com.br/wp-content/themes/themify-ultra/js/themify.script.min.js?ver=2.0.1'
 'https://www.site.com.br/wp-includes/js/comment-reply.min.js?ver=4.9.13'
 'https://www.site.com.br/wp-includes/js/wp-embed.min.js?ver=4.9.13'
 .scb_pt1 {
     padding: 10;
 }
 /*
  * jquery-match-height 0.7.0 by @liabru
  * http://brm.io/jquery-match-height/
  * License MIT
  */
 ! function(t) {
     "use strict";
     "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
 }(function(t) {
     var e = -1,
         o = -1,
         i = function(t) {
             return parseFloat(t) || 0
         },
         a = function(e) {
             var o = 1,
                 a = t(e),
                 n = null,
                 r = [];
             return a.each(function() {
                 var e = t(this),
                     a = e.offset().top - i(e.css("margin-top")),
                     s = r.length > 0 ? r[r.length - 1] : null;
                 null === s ? r.push(e) : Math.floor(Math.abs(n - a)) <= o ? r[r.length - 1] = s.add(e) : r.push(e), n = a
             }), r
         },
         n = function(e) {
             var o = {
                 byRow: !0,
                 property: "height",
                 target: null,
                 remove: !1
             };
             return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
         },
         r = t.fn.matchHeight = function(e) {
             var o = n(e);
             if (o.remove) {
                 var i = this;
                 return this.css(o.property, ""), t.each(r._groups, function(t, e) {
                     e.elements = e.elements.not(i)
                 }), this
             }
             return this.length <= 1 && !o.target ? this : (r._groups.push({
                 elements: this,
                 options: o
             }), r._apply(this, o), this)
         };
     r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null,
         r._afterUpdate = null, r._rows = a, r._parse = i, r._parseOptions = n, r._apply = function(e, o) {
             var s = n(o),
                 h = t(e),
                 l = [h],
                 c = t(window).scrollTop(),
                 p = t("html").outerHeight(!0),
                 d = h.parents().filter(":hidden");
             return d.each(function() {
                     var e = t(this);
                     e.data("style-cache", e.attr("style"))
                 }), d.css("display", "block"), s.byRow && !s.target && (h.each(function() {
                     var e = t(this),
                         o = e.css("display");
                     "inline-block" !== o && "flex" !== o && "inline-flex" !== o && (o = "block"), e.data("style-cache", e.attr("style")), e.css({
                         display: o,
                         "padding-top": "0",
                         "padding-bottom": "0",
                         "margin-top": "0",
                         "margin-bottom": "0",
                         "border-top-width": "0",
                         "border-bottom-width": "0",
                         height: "100px",
                         overflow: "hidden"
                     })
                 }), l = a(h), h.each(function() {
                     var e = t(this);
                     e.attr("style", e.data("style-cache") || "")
                 })), t.each(l, function(e, o) {
                     var a = t(o),
                         n = 0;
                     if (s.target) n = s.target.outerHeight(!1);
                     else {
                         if (s.byRow && a.length <= 1) return void a.css(s.property, "");
                         a.each(function() {
                             var e = t(this),
                                 o = e.attr("style"),
                                 i = e.css("display");
                             "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                             var a = {
                                 display: i
                             };
                             a[s.property] = "", e.css(a), e.outerHeight(!1) > n && (n = e.outerHeight(!1)), o ? e.attr("style", o) : e.css("display", "")
                         })
                     }
                     a.each(function() {
                         var e = t(this),
                             o = 0;
                         s.target && e.is(s.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(s.property, n - o + "px"))
                     })
                 }), d.each(function() {
                     var e = t(this);
                     e.attr("style", e.data("style-cache") || null)
                 }), r._maintainScroll && t(window).scrollTop(c / p * t("html").outerHeight(!0)),
                 this
         }, r._applyDataApi = function() {
             var e = {};
             t("[data-match-height], [data-mh]").each(function() {
                 var o = t(this),
                     i = o.attr("data-mh") || o.attr("data-match-height");
                 i in e ? e[i] = e[i].add(o) : e[i] = o
             }), t.each(e, function() {
                 this.matchHeight(!0)
             })
         };
     var s = function(e) {
         r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
             r._apply(this.elements, this.options)
         }), r._afterUpdate && r._afterUpdate(e, r._groups)
     };
     r._update = function(i, a) {
         if (a && "resize" === a.type) {
             var n = t(window).width();
             if (n === e) return;
             e = n;
         }
         i ? -1 === o && (o = setTimeout(function() {
             s(a), o = -1
         }, r._throttle)) : s(a)
     }, t(r._applyDataApi), t(window).bind("load", function(t) {
         r._update(!1, t)
     }), t(window).bind("resize orientationchange", function(t) {
         r._update(!0, t)
     })
 });

 jQuery(function() {
     scb_ajusta_heights();
     setTimeout(scb_ajusta_heights, 1000);
     setTimeout(scb_ajusta_heights, 5000);

 });

 function scb_ajusta_heights() {
     jQuery('.scb_pt1').matchHeight();
     jQuery('.scb_pt2').matchHeight();
     jQuery('#ptp-4358060 .ptp-cp3-price-holder').matchHeight();
     console.log('scb_ajusta_heights');
 }