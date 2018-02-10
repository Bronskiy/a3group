/*!
 *	Spec Frontend Script
 */
 "user strict";

 jQuery(document).ready(function($) {
                "use strict";
                //  TESTIMONIALS CAROUSEL HOOK
                $('#customers-testimonials').owlCarousel({
                    loop: true,
                    center: true,
                    items: 3,
                    margin: 0,
                    autoplay: true,
                    dots:true,
                    autoplayTimeout: 8500,
                    smartSpeed: 450,
                    responsive: {
                      0: {
                        items: 1
                      },
                      768: {
                        items: 2
                      },
                      1170: {
                        items: 3
                      }
                    }
                });
            });



! function(e) {
    "use strict";
    e(window).on("load", function() {
        e(".layout").addClass("fade-in");
        var t = new WOW({
            mobile: !1
        });
        t.init()
    }), e(document).ready(function() {
        function t() {
            var t = e(".spec-slides").superslides("current"),
                a = e(".slides-container li").eq(t);
            e(".slides-container li").removeClass("active-slide"), a.addClass("active-slide"), e(".slides-container li.bg-dark").hasClass("active-slide") ? (s.addClass("header-light"), e(".spec-slides").removeClass("dark-nav")) : (s.removeClass("header-light"), e(".spec-slides").addClass("dark-nav"))
        }

        function a() {
            e("li.bg-dark").hasClass("flex-active-slide") ? (s.addClass("header-light"), e(".flexslider").removeClass("dark-nav")) : (s.removeClass("header-light"), e(".flexslider").addClass("dark-nav"))
        }

        function i() {
            var e = document.createElement("p");
            e.style.width = "100%", e.style.height = "200px";
            var t = document.createElement("div");
            t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.visibility = "hidden", t.style.width = "200px", t.style.height = "150px", t.style.overflow = "hidden", t.appendChild(e), document.body.appendChild(t);
            var a = e.offsetWidth;
            t.style.overflow = "scroll";
            var i = e.offsetWidth;
            return a === i && (i = t.clientWidth), document.body.removeChild(t), a - i
        }
        e(".sticky-sidebar").imagesLoaded(function() {
            e(".sticky-sidebar").stick_in_parent({
                offset_top: 80,
                recalc_every: 1
            }).on("sticky_kit:bottom", function(t) {
                e(this).parent().css("position", "static")
            }).on("sticky_kit:unbottom", function(t) {
                e(this).parent().css("position", "relative")
            }).scroll()
        });
        var o;
        o = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        var s = e(".header");
        e(window).scroll(function() {
            var t = e(window).scrollTop();
            t >= 20 ? (s.addClass("header-small"), s.addClass("header-shadow")) : (s.removeClass("header-small"), s.removeClass("header-shadow")), e(".spec-header").length <= 0 && e(".spec-slides").length <= 0 && e(".flexslider").length <= 0 && s.addClass("header-small")
        }).scroll();
        var n = e(".spec-header");
        n.length >= 0 && (n.hasClass("bg-dark") ? s.addClass("header-light") : s.removeClass("header-light")), e(".onepage-nav").singlePageNav({
            currentClass: "active",
            filter: ":not(.external)"
        }), e(document).on("click", ".inner-navigation.show", function(t) {
            e(t.target).is("a") && !e(t.target).parent().hasClass("menu-item-has-children") && e(this).collapse("hide")
        }), 1 != o && e(".ripples").each(function() {
            e(this).ripples(e.extend({
                resolution: 500,
                dropRadius: 30,
                perturbance: .04
            }, e(this).data("ripples-options")))
        }), e(".slides-container li").length > 1 ? (e(".spec-slides").superslides({
            play: 1e4,
            animation: "fade",
            animation_speed: 800,
            pagination: !0
        }), e(document).on("animated.slides", function() {
            t()
        })) : 1 === e(".slides-container li").length && (e(".spec-slides").superslides(), t()), e(".flexslider").length > 0 && e(".flexslider").flexslider({
            animation: "fade",
            animationSpeed: 1e3,
            slideshowSpeed: 9e3,
            animationLoop: !0,
            prevText: " ",
            nextText: " ",
            start: function(e) {
                a()
            },
            before: function(t) {
                1 != o && (e(".flexslider .container").fadeOut(500).animate({
                    opacity: "0"
                }, 500), t.slides.eq(t.currentSlide).delay(500), t.slides.eq(t.animatingTo).delay(500))
            },
            after: function(t) {
                a(), 1 != o && e(".flexslider .container").fadeIn(500).animate({
                    opacity: "1"
                }, 500)
            },
            useCSS: !0
        }), e(".rotate").textrotator({
            animation: "dissolve",
            separator: "|",
            speed: 3e3
        }), e("[data-background]").each(function() {
            e(this).css("background-image", "url(" + e(this).attr("data-background") + ")")
        }), e("[data-background-color]").each(function() {
            e(this).css("background-color", e(this).attr("data-background-color"))
        }), e("[data-color]").each(function() {
            e(this).css("color", e(this).attr("data-color"))
        }), e(".parallax").jarallax({
            speed: .4
        });
        var r = e("#filters"),
            l = e(".row-portfolio");
        e("a", r).on("click", function() {
            var t = e(this).attr("data-filter");
            return e(".current", r).removeClass("current"), e(this).addClass("current"), l.isotope({
                filter: t
            }), !1
        }), e(window).on("resize", function() {
            e(".row-portfolio").imagesLoaded(function() {
                e(".row-portfolio").isotope({
                    layoutMode: "masonry",
                    itemSelector: ".portfolio-item, .portfolio-item-classic ",
                    transitionDuration: "0.4s",
                    masonry: {
                        columnWidth: ".grid-sizer"
                    }
                })
            })
        }), e(window).on("resize", function() {
            setTimeout(function() {
                e(".blog-masonry").isotope({
                    layoutMode: "masonry",
                    transitionDuration: "0.8s"
                })
            }, 1e3)
        }), e(window).on("resize", function() {
            e(".row-shop-masonry").isotope({
                layoutMode: "masonry",
                transitionDuration: "0.4s"
            })
        }), e(".open-offcanvas, .close-offcanvas").on("click", function() {
            return e("body").toggleClass("off-canvas-sidebar-open"), !1
        }), e(document).on("click", function(t) {
            var a = e(".off-canvas-sidebar");
            a.is(t.target) || 0 !== a.has(t.target).length || e("body").removeClass("off-canvas-sidebar-open")
        }), e(".off-canvas-sidebar-wrapper").css("margin-right", "-" + i() + "px"), e(window).on("resize", function() {
            var t = Math.max(e(window).width(), window.innerWidth);
            t <= 991 && e("body").removeClass("off-canvas-sidebar-open")
        }), e(".clients-carousel").each(function() {
            e(this).owlCarousel(e.extend({
                navigation: !1,
                pagination: !1,
                autoPlay: 3e3,
                items: 4,
                navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
            }, e(this).data("carousel-options")))
        }), e(".tms-carousel").each(function() {
            e(this).owlCarousel(e.extend({
                navigation: !1,
                pagination: !0,
                autoPlay: 3e3,
                items: 3,
                navigationText: ['<span class="arrows arrows-arrows-slim-left"></span>', '<span class="arrows arrows-arrows-slim-right"></span>']
            }, e(this).data("carousel-options")))
        }), e(".tms-slides").each(function() {
            e(this).owlCarousel(e.extend({
                autoPlay: 5e3,
                navigation: !1,
                singleItem: !0,
                pagination: !0,
                paginationSpeed: 1e3,
                navigationText: ['<span class="arrows arrows-arrows-slim-left"></span>', '<span class="arrows arrows-arrows-slim-right"></span>']
            }, e(this).data("carousel-options")))
        }), e(".spec-carousel-img").each(function() {
            e(this).owlCarousel(e.extend({
                stopOnHover: !0,
                navigation: !0,
                pagination: !0,
                autoPlay: 3e3,
                singleItem: !0,
                items: 1,
                navigationText: ['<span class="arrows arrows-arrows-slim-left"></span>', '<span class="arrows arrows-arrows-slim-right"></span>']
            }, e(this).data("carousel-options")))
        }), e(".progress-bar").each(function() {
            e(this).appear(function() {
                var t = e(this).attr("aria-valuenow");
                e(this).animate({
                    width: t + "%"
                }), e(this).find(".pb-number-box").animate({
                    opacity: 1
                }, 1e3), e(this).find(".pb-number").countTo({
                    from: 0,
                    to: t,
                    speed: 900,
                    refreshInterval: 30
                })
            })
        }), e(".counter-timer").each(function() {
            e(this).appear(function() {
                var t = e(this).attr("data-to");
                e(this).countTo({
                    from: 0,
                    to: t,
                    speed: 1500,
                    refreshInterval: 10,
                    formatter: function(e, t) {
                        return e = e.toFixed(t.decimals), e = e.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                })
            })
        }), e(".chart").each(function() {
            e(this).appear(function() {
                e(this).easyPieChart(e.extend({
                    barColor: "#111111",
                    trackColor: "#eee",
                    scaleColor: !1,
                    lineCap: "round",
                    lineWidth: 5,
                    size: 180
                }, e(this).data("chart-options")));
                var t = e(this).attr("data-percent");
                e(this).find(".chart-text span").countTo({
                    from: 0,
                    to: t,
                    speed: 1e3,
                    refreshInterval: 10,
                    formatter: function(e, t) {
                        return e = e.toFixed(t.decimals), e = e.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                })
            })
        }), e(".twitter-feed").each(function(t) {
            e(this).attr("id", "twitter-" + t);
            var a = e(this).data("twitter"),
                i = e(this).data("number"),
                o = {
                    id: a,
                    domId: "twitter-" + t,
                    maxTweets: i,
                    enableLinks: !0,
                    showPermalinks: !1
                };
            twitterFetcher.fetch(o)
        }), e(".lightbox").magnificPopup({
            type: "image"
        }), e("[rel=single-photo]").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            }
        }), e(".gallery [rel=gallery]").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                titleSrc: "title",
                tError: "The image could not be loaded."
            }
        }), e(".lightbox-video").magnificPopup({
            type: "iframe"
        }), e("a.product-gallery").magnificPopup({
            type: "image",
            gallery: {
                enabled: !0,
                navigateByImgClick: !0,
                preload: [0, 1]
            },
            image: {
                titleSrc: "title",
                tError: "The image could not be loaded."
            }
        }), e(function() {
            e('[data-toggle="tooltip"]').tooltip()
        }), e("body").fitVids(), e(".map").each(function() {
            var t = /\[[^(\]\[)]*\]/g,
                a = e(this),
                i = Math.max(e(window).width(), window.innerWidth) > 736;
            if (a.length > 0) {
                var o, s = a[0].getAttribute("data-addresses").match(t),
                    n = a[0].getAttribute("data-info").match(t),
                    r = a.data("icon"),
                    l = a.data("zoom"),
                    d = [];
                s.forEach(function(e, t) {
                    var a = "{";
                    if (a += '"latLng":' + e, 0 === t && (o = JSON.parse(e)), n[t]) {
                        var i = n[t].replace(/\[|\]/g, "");
                        a += ', "data":"' + i + '"'
                    }
                    a += "}", d.push(JSON.parse(a))
                });
                var c = {
                    scrollwheel: !1,
                    styles: [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }]
                };
                c.center = o, c.zoom = l, c.draggable = i;
                var f = {};
                f.icon = r, a.gmap3({
                    map: {
                        options: c
                    },
                    marker: {
                        values: d,
                        options: f,
                        events: {
                            click: function(t, a, i) {
                                if (i.data) {
                                    var o = e(this).gmap3("get"),
                                        s = e(this).gmap3({
                                            get: {
                                                name: "infowindow"
                                            }
                                        });
                                    s ? (s.open(o, t), s.setContent(i.data)) : e(this).gmap3({
                                        infowindow: {
                                            anchor: t,
                                            options: {
                                                content: i.data
                                            }
                                        }
                                    })
                                }
                            }
                        }
                    }
                })
            }
        }), e("#particles-js").length > 0 && particlesJS("particles-js", {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: !0,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#ffffff"
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: "img/github.svg",
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: .2,
                    random: !0,
                    anim: {
                        enable: !0,
                        speed: 1,
                        opacity_min: .1,
                        sync: !1
                    }
                },
                size: {
                    value: 6,
                    random: !0,
                    anim: {
                        enable: !1,
                        speed: 40,
                        size_min: .1,
                        sync: !1
                    }
                },
                line_linked: {
                    enable: !0,
                    distance: 150,
                    color: "#ffffff",
                    opacity: .4,
                    width: 1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "top",
                    random: !0,
                    straight: !1,
                    out_mode: "out",
                    bounce: !1,
                    attract: {
                        enable: !0,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !0,
                        mode: "grab"
                    },
                    onclick: {
                        enable: !0,
                        mode: "repulse"
                    },
                    resize: !0
                },
                modes: {
                    grab: {
                        distance: 260,
                        line_linked: {
                            opacity: .6
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: .4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: !0
        }), e(".smoothscroll").on("click", function(t) {
            var a = this.hash,
                i = e(a);
            e("html, body").stop().animate({
                scrollTop: i.offset().top - s.height()
            }, 600, "swing"), t.preventDefault()
        }), e(window).scroll(function() {
            e(this).scrollTop() > 100 ? e(".scroll-top").addClass("scroll-top-visible") : e(".scroll-top").removeClass("scroll-top-visible")
        }), e('a[href="#top"]').on("click", function() {
            return e("html, body").animate({
                scrollTop: 0
            }, "slow"), !1
        });
        var d, c = document.body;
        window.addEventListener("scroll", function() {
            clearTimeout(d), c.classList.contains("disable-hover") || c.classList.add("disable-hover"), d = setTimeout(function() {
                c.classList.remove("disable-hover")
            }, 100)
        }, !1)
    })
}(jQuery);

/*
Loading Buttons - Ladda
*/


/*
Files:
spin.min.js
ladda.min.js"
*/

/*!
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
})(this, function() {
    "use strict";

    function t(t, e) {
        var i, n = document.createElement(t || "div");
        for (i in e) n[i] = e[i];
        return n
    }

    function e(t) {
        for (var e = 1, i = arguments.length; i > e; e++) t.appendChild(arguments[e]);
        return t
    }

    function i(t, e, i, n) {
        var o = ["opacity", e, ~~(100 * t), i, n].join("-"),
            r = .01 + 100 * (i / n),
            a = Math.max(1 - (1 - t) / e * (100 - r), t),
            s = u.substring(0, u.indexOf("Animation")).toLowerCase(),
            l = s && "-" + s + "-" || "";
        return f[o] || (c.insertRule("@" + l + "keyframes " + o + "{" + "0%{opacity:" + a + "}" + r + "%{opacity:" + t + "}" + (r + .01) + "%{opacity:1}" + (r + e) % 100 + "%{opacity:" + t + "}" + "100%{opacity:" + a + "}" + "}", c.cssRules.length), f[o] = 1), o
    }

    function n(t, e) {
        var i, n, o = t.style;
        if (void 0 !== o[e]) return e;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), n = 0; d.length > n; n++)
            if (i = d[n] + e, void 0 !== o[i]) return i
    }

    function o(t, e) {
        for (var i in e) t.style[n(t, i) || i] = e[i];
        return t
    }

    function r(t) {
        for (var e = 1; arguments.length > e; e++) {
            var i = arguments[e];
            for (var n in i) void 0 === t[n] && (t[n] = i[n])
        }
        return t
    }

    function a(t) {
        for (var e = {
                x: t.offsetLeft,
                y: t.offsetTop
            }; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
        return e
    }

    function s(t) {
        return this === void 0 ? new s(t) : (this.opts = r(t || {}, s.defaults, p), void 0)
    }

    function l() {
        function i(e, i) {
            return t("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', i)
        }
        c.addRule(".spin-vml", "behavior:url(#default#VML)"), s.prototype.lines = function(t, n) {
            function r() {
                return o(i("group", {
                    coordsize: u + " " + u,
                    coordorigin: -l + " " + -l
                }), {
                    width: u,
                    height: u
                })
            }

            function a(t, a, s) {
                e(f, e(o(r(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~a
                }), e(o(i("roundrect", {
                    arcsize: n.corners
                }), {
                    width: l,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: s
                }), i("fill", {
                    color: n.color,
                    opacity: n.opacity
                }), i("stroke", {
                    opacity: 0
                }))))
            }
            var s, l = n.length + n.width,
                u = 2 * l,
                d = 2 * -(n.width + n.length) + "px",
                f = o(r(), {
                    position: "absolute",
                    top: d,
                    left: d
                });
            if (n.shadow)
                for (s = 1; n.lines >= s; s++) a(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (s = 1; n.lines >= s; s++) a(s);
            return e(t, f)
        }, s.prototype.opacity = function(t, e, i, n) {
            var o = t.firstChild;
            n = n.shadow && n.lines || 0, o && o.childNodes.length > e + n && (o = o.childNodes[e + n], o = o && o.firstChild, o = o && o.firstChild, o && (o.opacity = i))
        }
    }
    var u, d = ["webkit", "Moz", "ms", "O"],
        f = {},
        c = function() {
            var i = t("style", {
                type: "text/css"
            });
            return e(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
        }(),
        p = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        };
    s.defaults = {}, r(s.prototype, {
        spin: function(e) {
            this.stop();
            var i, n, r = this,
                s = r.opts,
                l = r.el = o(t(0, {
                    className: s.className
                }), {
                    position: s.position,
                    width: 0,
                    zIndex: s.zIndex
                }),
                d = s.radius + s.length + s.width;
            if (e && (e.insertBefore(l, e.firstChild || null), n = a(e), i = a(l), o(l, {
                    left: ("auto" == s.left ? n.x - i.x + (e.offsetWidth >> 1) : parseInt(s.left, 10) + d) + "px",
                    top: ("auto" == s.top ? n.y - i.y + (e.offsetHeight >> 1) : parseInt(s.top, 10) + d) + "px"
                })), l.setAttribute("role", "progressbar"), r.lines(l, r.opts), !u) {
                var f, c = 0,
                    p = (s.lines - 1) * (1 - s.direction) / 2,
                    h = s.fps,
                    m = h / s.speed,
                    g = (1 - s.opacity) / (m * s.trail / 100),
                    v = m / s.lines;
                (function y() {
                    c++;
                    for (var t = 0; s.lines > t; t++) f = Math.max(1 - (c + (s.lines - t) * v) % m * g, s.opacity), r.opacity(l, t * s.direction + p, f, s);
                    r.timeout = r.el && setTimeout(y, ~~(1e3 / h))
                })()
            }
            return r
        },
        stop: function() {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = void 0), this
        },
        lines: function(n, r) {
            function a(e, i) {
                return o(t(), {
                    position: "absolute",
                    width: r.length + r.width + "px",
                    height: r.width + "px",
                    background: e,
                    boxShadow: i,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / r.lines * l + r.rotate) + "deg) translate(" + r.radius + "px" + ",0)",
                    borderRadius: (r.corners * r.width >> 1) + "px"
                })
            }
            for (var s, l = 0, d = (r.lines - 1) * (1 - r.direction) / 2; r.lines > l; l++) s = o(t(), {
                position: "absolute",
                top: 1 + ~(r.width / 2) + "px",
                transform: r.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: r.opacity,
                animation: u && i(r.opacity, r.trail, d + l * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
            }), r.shadow && e(s, o(a("#000", "0 0 4px #000"), {
                top: "2px"
            })), e(n, e(s, a(r.color, "0 0 1px rgba(0,0,0,.1)")));
            return n
        },
        opacity: function(t, e, i) {
            t.childNodes.length > e && (t.childNodes[e].style.opacity = i)
        }
    });
    var h = o(t("group"), {
        behavior: "url(#default#VML)"
    });
    return !n(h, "transform") && h.adj ? l() : u = n(h, "animation"), s
});


/*!
 * Ladda 0.8.0 (2013-09-05, 18:54)
 * http://lab.hakim.se/ladda
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */

(function(t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["spin"], e) : t.Ladda = e(t.Spinner)
})(this, function(t) {
    "use strict";

    function e(t) {
        if (t === void 0) return console.warn("Ladda button target must be defined."), void 0;
        t.querySelector(".ladda-label") || (t.innerHTML = '<span class="ladda-label">' + t.innerHTML + "</span>");
        var e = i(t),
            n = document.createElement("span");
        n.className = "ladda-spinner", t.appendChild(n);
        var r, a = {
            start: function() {
                return t.setAttribute("disabled", ""), t.setAttribute("data-loading", ""), clearTimeout(r), e.spin(n), this.setProgress(0), this
            },
            startAfter: function(t) {
                return clearTimeout(r), r = setTimeout(function() {
                    a.start()
                }, t), this
            },
            stop: function() {
                return t.removeAttribute("disabled"), t.removeAttribute("data-loading"), clearTimeout(r), r = setTimeout(function() {
                    e.stop()
                }, 1e3), this
            },
            toggle: function() {
                return this.isLoading() ? this.stop() : this.start(), this
            },
            setProgress: function(e) {
                e = Math.max(Math.min(e, 1), 0);
                var n = t.querySelector(".ladda-progress");
                0 === e && n && n.parentNode ? n.parentNode.removeChild(n) : (n || (n = document.createElement("div"), n.className = "ladda-progress", t.appendChild(n)), n.style.width = (e || 0) * t.offsetWidth + "px")
            },
            enable: function() {
                return this.stop(), this
            },
            disable: function() {
                return this.stop(), t.setAttribute("disabled", ""), this
            },
            isLoading: function() {
                return t.hasAttribute("data-loading")
            }
        };
        return o.push(a), a
    }

    function n(t, n) {
        n = n || {};
        var r = [];
        "string" == typeof t ? r = a(document.querySelectorAll(t)) : "object" == typeof t && "string" == typeof t.nodeName && (r = [t]);
        for (var i = 0, o = r.length; o > i; i++)(function() {
            var t = r[i];
            if ("function" == typeof t.addEventListener) {
                var a = e(t),
                    o = -1;
                t.addEventListener("click", function() {
                    a.startAfter(1), "number" == typeof n.timeout && (clearTimeout(o), o = setTimeout(a.stop, n.timeout)), "function" == typeof n.callback && n.callback.apply(null, [a])
                }, !1)
            }
        })()
    }

    function r() {
        for (var t = 0, e = o.length; e > t; t++) o[t].stop()
    }

    function i(e) {
        var n, r = e.offsetHeight;
        r > 32 && (r *= .8), e.hasAttribute("data-spinner-size") && (r = parseInt(e.getAttribute("data-spinner-size"), 10)), e.hasAttribute("data-spinner-color") && (n = e.getAttribute("data-spinner-color"));
        var i = 12,
            a = .2 * r,
            o = .6 * a,
            s = 7 > a ? 2 : 3;
        return new t({
            color: n || "#fff",
            lines: i,
            radius: a,
            length: o,
            width: s,
            zIndex: "auto",
            top: "auto",
            left: "auto",
            className: ""
        })
    }

    function a(t) {
        for (var e = [], n = 0; t.length > n; n++) e.push(t[n]);
        return e
    }
    var o = [];
    return {
        bind: n,
        create: e,
        stopAll: r
    }
});

// popovers

$(function () {
  $('[data-toggle="popover"]').popover()
})


// Pie charts

function sliceSize(dataNum, dataTotal) {
  return (dataNum / dataTotal) * 360;
}
function addSlice(sliceSize, pieElement, offset, sliceID, color) {
  $(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
  var offset = offset - 1;
  var sizeRotation = -179 + sliceSize;
  $("."+sliceID).css({
    "transform": "rotate("+offset+"deg) translate3d(0,0,0)"
  });
  $("."+sliceID+" span").css({
    "transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
    "background-color": color
  });
}
function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
  var sliceID = "s"+dataCount+"-"+sliceCount;
  var maxSize = 179;
  if(sliceSize<=maxSize) {
    addSlice(sliceSize, pieElement, offset, sliceID, color);
  } else {
    addSlice(maxSize, pieElement, offset, sliceID, color);
    iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
  }
}
function createPie(dataElement, pieElement) {
  var listData = [];
  $(dataElement+" span").each(function() {
    listData.push(Number($(this).html()));
  });
  var listTotal = 0;
  for(var i=0; i<listData.length; i++) {
    listTotal += listData[i];
  }
  var offset = 0;
  var color = [
    "cornflowerblue", 
    "olivedrab", 
    "orange", 
    "tomato", 
    "crimson", 
    "purple", 
    "turquoise", 
    "forestgreen", 
    "navy", 
    "gray"
  ];
  for(var i=0; i<listData.length; i++) {
    var size = sliceSize(listData[i], listTotal);
    iterateSlices(size, pieElement, offset, i, 0, color[i]);
    $(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
    offset += size;
  }
}
createPie(".pieID.legend", ".pieID.pie");



