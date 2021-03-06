/*!
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
function hexToRgb(t) {
    var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    t = t.replace(e, function(t, e, i, n) {
        return e + e + i + i + n + n
    });
    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return i ? {
        r: parseInt(i[1], 16),
        g: parseInt(i[2], 16),
        b: parseInt(i[3], 16)
    } : null
}

function clamp(t, e, i) {
    return Math.min(Math.max(t, e), i)
}

function isInArray(t, e) {
        return e.indexOf(t) > -1
    }! function(t) {
        t.fn.appear = function(e, i) {
            var n = t.extend({
                data: void 0,
                one: !0,
                accX: 0,
                accY: 0
            }, i);
            return this.each(function() {
                var i = t(this);
                if (i.appeared = !1, !e) return void i.trigger("appear", n.data);
                var o = t(window),
                    a = function() {
                        if (!i.is(":visible")) return void(i.appeared = !1);
                        var t = o.scrollLeft(),
                            e = o.scrollTop(),
                            a = i.offset(),
                            r = a.left,
                            s = a.top,
                            l = n.accX,
                            c = n.accY,
                            u = i.height(),
                            d = o.height(),
                            p = i.width(),
                            m = o.width();
                        s + u + c >= e && s <= e + d + c && r + p + l >= t && r <= t + m + l ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
                    },
                    r = function() {
                        if (i.appeared = !0, n.one) {
                            o.unbind("scroll", a);
                            var r = t.inArray(a, t.fn.appear.checks);
                            r >= 0 && t.fn.appear.checks.splice(r, 1)
                        }
                        e.apply(this, arguments)
                    };
                n.one ? i.one("appear", n.data, r) : i.bind("appear", n.data, r), o.scroll(a), t.fn.appear.checks.push(a), a()
            })
        }, t.extend(t.fn.appear, {
            checks: [],
            timeout: null,
            checkAll: function() {
                var e = t.fn.appear.checks.length;
                if (e > 0)
                    for (; e--;) t.fn.appear.checks[e]()
            },
            run: function() {
                t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
            }
        }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, i) {
            var n = t.fn[i];
            n && (t.fn[i] = function() {
                var e = n.apply(this, arguments);
                return t.fn.appear.run(), e
            })
        })
    }(jQuery),
    function(t) {
        t.fn.countTo = function(e) {
            e = t.extend({}, t.fn.countTo.defaults, e || {});
            var i = Math.ceil(e.speed / e.refreshInterval),
                n = (e.to - e.from) / i;
            return t(this).each(function() {
                function o() {
                    s += n, r++, t(a).html(s.toFixed(e.decimals)), "function" == typeof e.onUpdate && e.onUpdate.call(a, s), r >= i && (clearInterval(l), s = e.to, "function" == typeof e.onComplete && e.onComplete.call(a, s))
                }
                var a = this,
                    r = 0,
                    s = e.from,
                    l = setInterval(o, e.refreshInterval)
            })
        }, t.fn.countTo.defaults = {
            from: 0,
            to: 100,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null
        }
    }(jQuery),
    function(t, e) {
        function i(t) {
            return "object" == typeof t
        }

        function n(t) {
            return "string" == typeof t
        }

        function o(t) {
            return "number" == typeof t
        }

        function a(t) {
            return t === e
        }

        function r() {
            N = google.maps, $ || ($ = {
                verbose: !1,
                queryLimit: {
                    attempt: 5,
                    delay: 250,
                    random: 250
                },
                classes: function() {
                    var e = {};
                    return t.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function(t, i) {
                        e[i] = N[i]
                    }), e
                }(),
                map: {
                    mapTypeId: N.MapTypeId.ROADMAP,
                    center: [46.578498, 2.457275],
                    zoom: 2
                },
                overlay: {
                    pane: "floatPane",
                    content: "",
                    offset: {
                        x: 0,
                        y: 0
                    }
                },
                geoloc: {
                    getCurrentPosition: {
                        maximumAge: 6e4,
                        timeout: 5e3
                    }
                }
            })
        }

        function s(t, e) {
            return a(t) ? "gmap3_" + (e ? j + 1 : ++j) : t
        }

        function l(t) {
            var e, i = N.version.split(".");
            for (t = t.split("."), e = 0; e < i.length; e++) i[e] = parseInt(i[e], 10);
            for (e = 0; e < t.length; e++) {
                if (t[e] = parseInt(t[e], 10), !i.hasOwnProperty(e)) return !1;
                if (i[e] < t[e]) return !1
            }
            return !0
        }

        function c(e, i, n, o, a) {
            function r(i, o) {
                i && t.each(i, function(t, i) {
                    var r = e,
                        s = i;
                    W(i) && (r = i[0], s = i[1]), o(n, t, function(t) {
                        s.apply(r, [a || n, t, l])
                    })
                })
            }
            var s = i.td || {},
                l = {
                    id: o,
                    data: s.data,
                    tag: s.tag
                };
            r(s.events, N.event.addListener), r(s.onces, N.event.addListenerOnce)
        }

        function u(t) {
            var e, i = [];
            for (e in t) t.hasOwnProperty(e) && i.push(e);
            return i
        }

        function d(t, e) {
            var i, n = arguments;
            for (i = 2; i < n.length; i++)
                if (e in n[i] && n[i].hasOwnProperty(e)) return void(t[e] = n[i][e])
        }

        function p(e, i) {
            var n, o, a = ["data", "tag", "id", "events", "onces"],
                r = {};
            if (e.td)
                for (n in e.td) e.td.hasOwnProperty(n) && "options" !== n && "values" !== n && (r[n] = e.td[n]);
            for (o = 0; o < a.length; o++) d(r, a[o], i, e.td);
            return r.options = t.extend({}, e.opts || {}, i.options || {}), r
        }

        function m() {
            if ($.verbose) {
                var t, e = [];
                if (window.console && F(console.error)) {
                    for (t = 0; t < arguments.length; t++) e.push(arguments[t]);
                    console.error.apply(console, e)
                } else {
                    for (e = "", t = 0; t < arguments.length; t++) e += arguments[t].toString() + " ";
                    alert(e)
                }
            }
        }

        function h(t) {
            return (o(t) || n(t)) && "" !== t && !isNaN(t)
        }

        function f(t) {
            var e, n = [];
            if (!a(t))
                if (i(t))
                    if (o(t.length)) n = t;
                    else
                        for (e in t) n.push(t[e]);
            else n.push(t);
            return n
        }

        function v(e) {
            if (e) return F(e) ? e : (e = f(e), function(n) {
                var o;
                if (a(n)) return !1;
                if (i(n)) {
                    for (o = 0; o < n.length; o++)
                        if (t.inArray(n[o], e) >= 0) return !0;
                    return !1
                }
                return t.inArray(n, e) >= 0
            })
        }

        function g(t, e, i) {
            var o = e ? t : null;
            return !t || n(t) ? o : t.latLng ? g(t.latLng) : t instanceof N.LatLng ? t : h(t.lat) ? new N.LatLng(t.lat, t.lng) : !i && W(t) && h(t[0]) && h(t[1]) ? new N.LatLng(t[0], t[1]) : o
        }

        function y(t) {
            var e, i;
            return !t || t instanceof N.LatLngBounds ? t || null : (W(t) ? 2 === t.length ? (e = g(t[0]), i = g(t[1])) : 4 === t.length && (e = g([t[0], t[1]]), i = g([t[2], t[3]])) : "ne" in t && "sw" in t ? (e = g(t.ne), i = g(t.sw)) : "n" in t && "e" in t && "s" in t && "w" in t && (e = g([t.n, t.e]), i = g([t.s, t.w])), e && i ? new N.LatLngBounds(i, e) : null)
        }

        function b(t, e, i, o, a) {
            var r = !!i && g(o.td, !1, !0),
                s = r ? {
                    latLng: r
                } : !!o.td.address && (n(o.td.address) ? {
                    address: o.td.address
                } : o.td.address),
                l = !!s && q.get(s),
                c = this;
            s ? (a = a || 0, l ? (o.latLng = l.results[0].geometry.location, o.results = l.results, o.status = l.status, e.apply(t, [o])) : (s.location && (s.location = g(s.location)), s.bounds && (s.bounds = y(s.bounds)), I().geocode(s, function(n, r) {
                r === N.GeocoderStatus.OK ? (q.store(s, {
                    results: n,
                    status: r
                }), o.latLng = n[0].geometry.location, o.results = n, o.status = r, e.apply(t, [o])) : r === N.GeocoderStatus.OVER_QUERY_LIMIT && a < $.queryLimit.attempt ? setTimeout(function() {
                    b.apply(c, [t, e, i, o, a + 1])
                }, $.queryLimit.delay + Math.floor(Math.random() * $.queryLimit.random)) : (m("geocode failed", r, s), o.latLng = o.results = !1, o.status = r, e.apply(t, [o]))
            }))) : (o.latLng = g(o.td, !1, !0), e.apply(t, [o]))
        }

        function w(e, i, n, o) {
            function a() {
                do s++; while (s < e.length && !("address" in e[s]));
                return s >= e.length ? void n.apply(i, [o]) : void b(r, function(i) {
                    delete i.td, t.extend(e[s], i), a.apply(r, [])
                }, !0, {
                    td: e[s]
                })
            }
            var r = this,
                s = -1;
            a()
        }

        function x(t, e, i) {
            var n = !1;
            navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function(o) {
                n || (n = !0, i.latLng = new N.LatLng(o.coords.latitude, o.coords.longitude), e.apply(t, [i]))
            }, function() {
                n || (n = !0, i.latLng = !1, e.apply(t, [i]))
            }, i.opts.getCurrentPosition) : (i.latLng = !1, e.apply(t, [i]))
        }

        function _(t) {
            var e, n = !1;
            if (i(t) && t.hasOwnProperty("get")) {
                for (e in t)
                    if ("get" !== e) return !1;
                n = !t.get.hasOwnProperty("callback")
            }
            return n
        }

        function I() {
            return B.geocoder || (B.geocoder = new N.Geocoder), B.geocoder
        }

        function C() {
            var t = [];
            this.get = function(e) {
                if (t.length) {
                    var n, o, a, r, s, l = u(e);
                    for (n = 0; n < t.length; n++) {
                        for (r = t[n], s = l.length === r.keys.length, o = 0; o < l.length && s; o++) a = l[o], s = a in r.request, s && (s = i(e[a]) && "equals" in e[a] && F(e[a]) ? e[a].equals(r.request[a]) : e[a] === r.request[a]);
                        if (s) return r.results
                    }
                }
            }, this.store = function(e, i) {
                t.push({
                    request: e,
                    keys: u(e),
                    results: i
                })
            }
        }

        function T() {
            var t = [],
                e = this;
            e.empty = function() {
                return !t.length
            }, e.add = function(e) {
                t.push(e)
            }, e.get = function() {
                return !!t.length && t[0]
            }, e.ack = function() {
                t.shift()
            }
        }

        function k() {
            function e(t) {
                return {
                    id: t.id,
                    name: t.name,
                    object: t.obj,
                    tag: t.tag,
                    data: t.data
                }
            }

            function i(t) {
                F(t.setMap) && t.setMap(null), F(t.remove) && t.remove(), F(t.free) && t.free(), t = null
            }
            var n = {},
                o = {},
                r = this;
            r.add = function(t, e, i, a) {
                var l = t.td || {},
                    c = s(l.id);
                return n[e] || (n[e] = []), c in o && r.clearById(c), o[c] = {
                    obj: i,
                    sub: a,
                    name: e,
                    id: c,
                    tag: l.tag,
                    data: l.data
                }, n[e].push(c), c
            }, r.getById = function(t, i, n) {
                var a = !1;
                return t in o && (a = i ? o[t].sub : n ? e(o[t]) : o[t].obj), a
            }, r.get = function(t, i, a, r) {
                var s, l, c = v(a);
                if (!n[t] || !n[t].length) return null;
                for (s = n[t].length; s;)
                    if (s--, l = n[t][i ? s : n[t].length - s - 1], l && o[l]) {
                        if (c && !c(o[l].tag)) continue;
                        return r ? e(o[l]) : o[l].obj
                    }
                return null
            }, r.all = function(t, i, r) {
                var s = [],
                    l = v(i),
                    c = function(t) {
                        var i, a;
                        for (i = 0; i < n[t].length; i++)
                            if (a = n[t][i], a && o[a]) {
                                if (l && !l(o[a].tag)) continue;
                                s.push(r ? e(o[a]) : o[a].obj)
                            }
                    };
                if (t in n) c(t);
                else if (a(t))
                    for (t in n) c(t);
                return s
            }, r.rm = function(t, e, i) {
                var a, s;
                if (!n[t]) return !1;
                if (e)
                    if (i)
                        for (a = n[t].length - 1; a >= 0 && (s = n[t][a], !e(o[s].tag)); a--);
                    else
                        for (a = 0; a < n[t].length && (s = n[t][a], !e(o[s].tag)); a++);
                else a = i ? n[t].length - 1 : 0;
                return a in n[t] && r.clearById(n[t][a], a)
            }, r.clearById = function(t, e) {
                if (t in o) {
                    var r, s = o[t].name;
                    for (r = 0; a(e) && r < n[s].length; r++) t === n[s][r] && (e = r);
                    return i(o[t].obj), o[t].sub && i(o[t].sub), delete o[t], n[s].splice(e, 1), !0
                }
                return !1
            }, r.objGetById = function(t) {
                var e, i;
                if (n.clusterer)
                    for (i in n.clusterer)
                        if ((e = o[n.clusterer[i]].obj.getById(t)) !== !1) return e;
                return !1
            }, r.objClearById = function(t) {
                var e;
                if (n.clusterer)
                    for (e in n.clusterer)
                        if (o[n.clusterer[e]].obj.clearById(t)) return !0;
                return null
            }, r.clear = function(t, e, i, o) {
                var a, s, l, c = v(o);
                if (t && t.length) t = f(t);
                else {
                    t = [];
                    for (a in n) t.push(a)
                }
                for (s = 0; s < t.length; s++)
                    if (l = t[s], e) r.rm(l, c, !0);
                    else if (i) r.rm(l, c, !1);
                else
                    for (; r.rm(l, c, !1););
            }, r.objClear = function(e, i, a, r) {
                var s;
                if (n.clusterer && (t.inArray("marker", e) >= 0 || !e.length))
                    for (s in n.clusterer) o[n.clusterer[s]].obj.clear(i, a, r)
            }
        }

        function S(e, i, o) {
            function a(t) {
                var e = {};
                return e[t] = {}, e
            }

            function r() {
                var t;
                for (t in o)
                    if (o.hasOwnProperty(t) && !l.hasOwnProperty(t)) return t
            }
            var s, l = {},
                c = this,
                u = {
                    latLng: {
                        map: !1,
                        marker: !1,
                        infowindow: !1,
                        circle: !1,
                        overlay: !1,
                        getlatlng: !1,
                        getmaxzoom: !1,
                        getelevation: !1,
                        streetviewpanorama: !1,
                        getaddress: !0
                    },
                    geoloc: {
                        getgeoloc: !0
                    }
                };
            n(o) && (o = a(o)), c.run = function() {
                for (var n, a; n = r();) {
                    if (F(e[n])) return s = n, a = t.extend(!0, {}, $[n] || {}, o[n].options || {}), void(n in u.latLng ? o[n].values ? w(o[n].values, e, e[n], {
                        td: o[n],
                        opts: a,
                        session: l
                    }) : b(e, e[n], u.latLng[n], {
                        td: o[n],
                        opts: a,
                        session: l
                    }) : n in u.geoloc ? x(e, e[n], {
                        td: o[n],
                        opts: a,
                        session: l
                    }) : e[n].apply(e, [{
                        td: o[n],
                        opts: a,
                        session: l
                    }]));
                    l[n] = null
                }
                i.apply(e, [o, l])
            }, c.ack = function(t) {
                l[s] = t, c.run.apply(c, [])
            }
        }

        function E() {
            return B.ds || (B.ds = new N.DirectionsService), B.ds
        }

        function P() {
            return B.dms || (B.dms = new N.DistanceMatrixService), B.dms
        }

        function A() {
            return B.mzs || (B.mzs = new N.MaxZoomService), B.mzs
        }

        function M() {
            return B.es || (B.es = new N.ElevationService), B.es
        }

        function L(t, e) {
            function i() {
                var t = this;
                return t.onAdd = function() {}, t.onRemove = function() {}, t.draw = function() {}, $.classes.OverlayView.apply(t, [])
            }
            i.prototype = $.classes.OverlayView.prototype;
            var n = new i;
            return n.setMap(t), n
        }

        function z(e, n, o) {
            function a(t) {
                z[t] || (delete D[t].options.map, z[t] = new $.classes.Marker(D[t].options), c(e, {
                    td: D[t]
                }, z[t], D[t].id))
            }

            function r() {
                return (y = O.getProjection()) ? (T = !0, E.push(N.event.addListener(n, "zoom_changed", m)), E.push(N.event.addListener(n, "bounds_changed", m)), void f()) : void setTimeout(function() {
                    r.apply(S, [])
                }, 25)
            }

            function l(t) {
                i(P[t]) ? (F(P[t].obj.setMap) && P[t].obj.setMap(null), F(P[t].obj.remove) && P[t].obj.remove(), F(P[t].shadow.remove) && P[t].obj.remove(), F(P[t].shadow.setMap) && P[t].shadow.setMap(null), delete P[t].obj, delete P[t].shadow) : z[t] && z[t].setMap(null), delete P[t]
            }

            function u() {
                var t, e, i, n, o, a, r, s, l = Math.cos,
                    c = Math.sin,
                    u = arguments;
                return u[0] instanceof N.LatLng ? (t = u[0].lat(), i = u[0].lng(), u[1] instanceof N.LatLng ? (e = u[1].lat(), n = u[1].lng()) : (e = u[1], n = u[2])) : (t = u[0], i = u[1], u[2] instanceof N.LatLng ? (e = u[2].lat(), n = u[2].lng()) : (e = u[2], n = u[3])), o = Math.PI * t / 180, a = Math.PI * i / 180, r = Math.PI * e / 180, s = Math.PI * n / 180, 6371e3 * Math.acos(Math.min(l(o) * l(r) * l(a) * l(s) + l(o) * c(a) * l(r) * c(s) + c(o) * c(r), 1))
            }

            function d() {
                var t = u(n.getCenter(), n.getBounds().getNorthEast()),
                    e = new N.Circle({
                        center: n.getCenter(),
                        radius: 1.25 * t
                    });
                return e.getBounds()
            }

            function p() {
                var t, e = {};
                for (t in P) e[t] = !0;
                return e
            }

            function m() {
                clearTimeout(g), g = setTimeout(f, 25)
            }

            function h(t) {
                var e = y.fromLatLngToDivPixel(t),
                    i = y.fromDivPixelToLatLng(new N.Point(e.x + o.radius, e.y - o.radius)),
                    n = y.fromDivPixelToLatLng(new N.Point(e.x - o.radius, e.y + o.radius));
                return new N.LatLngBounds(n, i)
            }

            function f() {
                if (!_ && !C && T) {
                    var e, i, a, r, s, c, u, m, f, v, g, y = !1,
                        x = [],
                        S = {},
                        E = n.getZoom(),
                        A = "maxZoom" in o && E > o.maxZoom,
                        M = p();
                    for (I = !1, E > 3 && (s = d(), y = s.getSouthWest().lng() < s.getNorthEast().lng()), e = 0; e < D.length; e++) !D[e] || y && !s.contains(D[e].options.position) || b && !b(R[e]) || x.push(e);
                    for (;;) {
                        for (e = 0; S[e] && e < x.length;) e++;
                        if (e === x.length) break;
                        if (r = [], k && !A) {
                            g = 10;
                            do
                                for (m = r, r = [], g--, u = m.length ? s.getCenter() : D[x[e]].options.position, s = h(u), i = e; i < x.length; i++) S[i] || s.contains(D[x[i]].options.position) && r.push(i); while (m.length < r.length && r.length > 1 && g)
                        } else
                            for (i = e; i < x.length; i++)
                                if (!S[i]) {
                                    r.push(i);
                                    break
                                } for (c = {
                                indexes: [],
                                ref: []
                            }, f = v = 0, a = 0; a < r.length; a++) S[r[a]] = !0, c.indexes.push(x[r[a]]), c.ref.push(x[r[a]]), f += D[x[r[a]]].options.position.lat(), v += D[x[r[a]]].options.position.lng();
                        f /= r.length, v /= r.length, c.latLng = new N.LatLng(f, v), c.ref = c.ref.join("-"), c.ref in M ? delete M[c.ref] : (1 === r.length && (P[c.ref] = !0), w(c))
                    }
                    t.each(M, function(t) {
                        l(t)
                    }), C = !1
                }
            }
            var g, y, b, w, x, _ = !1,
                I = !1,
                C = !1,
                T = !1,
                k = !0,
                S = this,
                E = [],
                P = {},
                A = {},
                M = {},
                z = [],
                D = [],
                R = [],
                O = L(n, o.radius);
            r(), S.getById = function(t) {
                return t in A && (a(A[t]), z[A[t]])
            }, S.rm = function(t) {
                var e = A[t];
                z[e] && z[e].setMap(null), delete z[e], z[e] = !1, delete D[e], D[e] = !1, delete R[e], R[e] = !1, delete A[t], delete M[e], I = !0
            }, S.clearById = function(t) {
                if (t in A) return S.rm(t), !0
            }, S.clear = function(t, e, i) {
                var n, o, a, r, s, l = [],
                    c = v(i);
                for (t ? (n = D.length - 1, o = -1, a = -1) : (n = 0, o = D.length, a = 1), r = n; r !== o && (!D[r] || c && !c(D[r].tag) || (l.push(M[r]), !e && !t)); r += a);
                for (s = 0; s < l.length; s++) S.rm(l[s])
            }, S.add = function(t, e) {
                t.id = s(t.id), S.clearById(t.id), A[t.id] = z.length, M[z.length] = t.id, z.push(null), D.push(t), R.push(e), I = !0
            }, S.addMarker = function(t, i) {
                i = i || {}, i.id = s(i.id), S.clearById(i.id), i.options || (i.options = {}), i.options.position = t.getPosition(), c(e, {
                    td: i
                }, t, i.id), A[i.id] = z.length, M[z.length] = i.id, z.push(t), D.push(i), R.push(i.data || {}), I = !0
            }, S.td = function(t) {
                return D[t]
            }, S.value = function(t) {
                return R[t]
            }, S.marker = function(t) {
                return t in z && (a(t), z[t])
            }, S.markerIsSet = function(t) {
                return Boolean(z[t])
            }, S.setMarker = function(t, e) {
                z[t] = e
            }, S.store = function(t, e, i) {
                P[t.ref] = {
                    obj: e,
                    shadow: i
                }
            }, S.free = function() {
                var e;
                for (e = 0; e < E.length; e++) N.event.removeListener(E[e]);
                E = [], t.each(P, function(t) {
                    l(t)
                }), P = {}, t.each(D, function(t) {
                    D[t] = null
                }), D = [], t.each(z, function(t) {
                    z[t] && (z[t].setMap(null), delete z[t])
                }), z = [], t.each(R, function(t) {
                    delete R[t]
                }), R = [], A = {}, M = {}
            }, S.filter = function(t) {
                b = t, f()
            }, S.enable = function(t) {
                k !== t && (k = t, f())
            }, S.display = function(t) {
                w = t
            }, S.error = function(t) {
                x = t
            }, S.beginUpdate = function() {
                _ = !0
            }, S.endUpdate = function() {
                _ = !1, I && f()
            }, S.autofit = function(t) {
                var e;
                for (e = 0; e < D.length; e++) D[e] && t.extend(D[e].options.position)
            }
        }

        function D(t, e) {
            var i = this;
            i.id = function() {
                return t
            }, i.filter = function(t) {
                e.filter(t)
            }, i.enable = function() {
                e.enable(!0)
            }, i.disable = function() {
                e.enable(!1)
            }, i.add = function(t, i, n) {
                n || e.beginUpdate(), e.addMarker(t, i), n || e.endUpdate()
            }, i.getById = function(t) {
                return e.getById(t)
            }, i.clearById = function(t, i) {
                var n;
                return i || e.beginUpdate(), n = e.clearById(t), i || e.endUpdate(), n
            }, i.clear = function(t, i, n, o) {
                o || e.beginUpdate(), e.clear(t, i, n), o || e.endUpdate()
            }
        }

        function R(e, i, n, o) {
            var a = this,
                r = [];
            $.classes.OverlayView.call(a), a.setMap(e), a.onAdd = function() {
                var e = a.getPanes();
                i.pane in e && t(e[i.pane]).append(o), t.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function(e, i) {
                    r.push(N.event.addDomListener(o[0], i, function(e) {
                        t.Event(e).stopPropagation(), N.event.trigger(a, i, [e]), a.draw()
                    }))
                }), r.push(N.event.addDomListener(o[0], "contextmenu", function(e) {
                    t.Event(e).stopPropagation(), N.event.trigger(a, "rightclick", [e]), a.draw()
                }))
            }, a.getPosition = function() {
                return n
            }, a.setPosition = function(t) {
                n = t, a.draw()
            }, a.draw = function() {
                var t = a.getProjection().fromLatLngToDivPixel(n);
                o.css("left", t.x + i.offset.x + "px").css("top", t.y + i.offset.y + "px")
            }, a.onRemove = function() {
                var t;
                for (t = 0; t < r.length; t++) N.event.removeListener(r[t]);
                o.remove()
            }, a.hide = function() {
                o.hide()
            }, a.show = function() {
                o.show()
            }, a.toggle = function() {
                o && (o.is(":visible") ? a.show() : a.hide())
            }, a.toggleDOM = function() {
                a.setMap(a.getMap() ? null : e)
            }, a.getDOMElement = function() {
                return o[0]
            }
        }

        function O(o) {
            function r() {
                !x && (x = I.get()) && x.run()
            }

            function u() {
                x = null, I.ack(), r.call(_)
            }

            function d(t) {
                var e, i = t.td.callback;
                i && (e = Array.prototype.slice.call(arguments, 1), F(i) ? i.apply(o, e) : W(i) && F(i[1]) && i[1].apply(i[0], e))
            }

            function h(t, e, i) {
                i && c(o, t, e, i), d(t, e), x.ack(e)
            }

            function v(e, i) {
                i = i || {};
                var n = i.td && i.td.options ? i.td.options : 0;
                L ? n && (n.center && (n.center = g(n.center)), L.setOptions(n)) : (n = i.opts || t.extend(!0, {}, $.map, n || {}), n.center = e || g(n.center), L = new $.classes.Map(o.get(0), n))
            }

            function b(i) {
                var n, a, r = new z(o, L, i),
                    s = {},
                    l = {},
                    u = [],
                    d = /^[0-9]+$/;
                for (a in i) d.test(a) ? (u.push(1 * a), l[a] = i[a], l[a].width = l[a].width || 0, l[a].height = l[a].height || 0) : s[a] = i[a];
                return u.sort(function(t, e) {
                    return t > e
                }), n = s.calculator ? function(e) {
                    var i = [];
                    return t.each(e, function(t, e) {
                        i.push(r.value(e))
                    }), s.calculator.apply(o, [i])
                } : function(t) {
                    return t.length
                }, r.error(function() {
                    m.apply(_, arguments)
                }), r.display(function(a) {
                    var d, p, m, h, f, v, y = n(a.indexes);
                    if (i.force || y > 1)
                        for (d = 0; d < u.length; d++) u[d] <= y && (p = l[u[d]]);
                    p ? (f = p.offset || [-p.width / 2, -p.height / 2], m = t.extend({}, s), m.options = t.extend({
                        pane: "overlayLayer",
                        content: p.content ? p.content.replace("CLUSTER_COUNT", y) : "",
                        offset: {
                            x: ("x" in f ? f.x : f[0]) || 0,
                            y: ("y" in f ? f.y : f[1]) || 0
                        }
                    }, s.options || {}), h = _.overlay({
                        td: m,
                        opts: m.options,
                        latLng: g(a)
                    }, !0), m.options.pane = "floatShadow", m.options.content = t(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({
                        cursor: "pointer"
                    }), v = _.overlay({
                        td: m,
                        opts: m.options,
                        latLng: g(a)
                    }, !0), s.data = {
                        latLng: g(a),
                        markers: []
                    }, t.each(a.indexes, function(t, e) {
                        s.data.markers.push(r.value(e)), r.markerIsSet(e) && r.marker(e).setMap(null)
                    }), c(o, {
                        td: s
                    }, v, e, {
                        main: h,
                        shadow: v
                    }), r.store(a, h, v)) : t.each(a.indexes, function(t, e) {
                        r.marker(e).setMap(L)
                    })
                }), r
            }

            function w(e, i, n) {
                var a = [],
                    r = "values" in e.td;
                return r || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (v(), t.each(e.td.values, function(t, r) {
                    var s, l, u, d, m = p(e, r);
                    if (m.options[n])
                        if (m.options[n][0][0] && W(m.options[n][0][0]))
                            for (l = 0; l < m.options[n].length; l++)
                                for (u = 0; u < m.options[n][l].length; u++) m.options[n][l][u] = g(m.options[n][l][u]);
                        else
                            for (l = 0; l < m.options[n].length; l++) m.options[n][l] = g(m.options[n][l]);
                    m.options.map = L, d = new N[i](m.options), a.push(d), s = C.add({
                        td: m
                    }, i.toLowerCase(), d), c(o, {
                        td: m
                    }, d, s)
                }), void h(e, r ? a : a[0])) : void h(e, !1)
            }
            var x, _ = this,
                I = new T,
                C = new k,
                L = null;
            _._plan = function(t) {
                var e;
                for (e = 0; e < t.length; e++) I.add(new S(_, u, t[e]));
                r()
            }, _.map = function(t) {
                v(t.latLng, t), c(o, t, L), h(t, L)
            }, _.destroy = function(t) {
                C.clear(), o.empty(), L && (L = null), h(t, !0)
            }, _.overlay = function(e, i) {
                var n = [],
                    a = "values" in e.td;
                return a || (e.td.values = [{
                    latLng: e.latLng,
                    options: e.opts
                }]), e.td.values.length ? (R.__initialised || (R.prototype = new $.classes.OverlayView, R.__initialised = !0), t.each(e.td.values, function(a, r) {
                    var s, l, u = p(e, r),
                        d = t(document.createElement("div")).css({
                            border: "none",
                            borderWidth: 0,
                            position: "absolute"
                        });
                    d.append(u.options.content), l = new R(L, u.options, g(u) || g(r), d), n.push(l), d = null, i || (s = C.add(e, "overlay", l), c(o, {
                        td: u
                    }, l, s))
                }), i ? n[0] : void h(e, a ? n : n[0])) : void h(e, !1)
            }, _.marker = function(e) {
                var i, n, a, r = "values" in e.td,
                    l = !L;
                return r || (e.opts.position = e.latLng || g(e.opts.position), e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (l && v(), e.td.cluster && !L.getBounds() ? void N.event.addListenerOnce(L, "bounds_changed", function() {
                    _.marker.apply(_, [e])
                }) : void(e.td.cluster ? (e.td.cluster instanceof D ? (n = e.td.cluster, a = C.getById(n.id(), !0)) : (a = b(e.td.cluster), n = new D(s(e.td.id, !0), a), C.add(e, "clusterer", n, a)), a.beginUpdate(), t.each(e.td.values, function(t, i) {
                    var n = p(e, i);
                    n.options.position = g(n.options.position ? n.options.position : i), n.options.position && (n.options.map = L, l && (L.setCenter(n.options.position), l = !1), a.add(n, i))
                }), a.endUpdate(), h(e, n)) : (i = [], t.each(e.td.values, function(t, n) {
                    var a, r, s = p(e, n);
                    s.options.position = g(s.options.position ? s.options.position : n), s.options.position && (s.options.map = L, l && (L.setCenter(s.options.position), l = !1), r = new $.classes.Marker(s.options), i.push(r), a = C.add({
                        td: s
                    }, "marker", r), c(o, {
                        td: s
                    }, r, a))
                }), h(e, r ? i : i[0])))) : void h(e, !1)
            }, _.getroute = function(t) {
                t.opts.origin = g(t.opts.origin, !0), t.opts.destination = g(t.opts.destination, !0), E().route(t.opts, function(e, i) {
                    d(t, i === N.DirectionsStatus.OK && e, i), x.ack()
                })
            }, _.getdistance = function(t) {
                var e;
                for (t.opts.origins = f(t.opts.origins), e = 0; e < t.opts.origins.length; e++) t.opts.origins[e] = g(t.opts.origins[e], !0);
                for (t.opts.destinations = f(t.opts.destinations), e = 0; e < t.opts.destinations.length; e++) t.opts.destinations[e] = g(t.opts.destinations[e], !0);
                P().getDistanceMatrix(t.opts, function(e, i) {
                    d(t, i === N.DistanceMatrixStatus.OK && e, i), x.ack()
                })
            }, _.infowindow = function(i) {
                var n = [],
                    r = "values" in i.td;
                r || (i.latLng && (i.opts.position = i.latLng), i.td.values = [{
                    options: i.opts
                }]), t.each(i.td.values, function(t, s) {
                    var l, u, d = p(i, s);
                    d.options.position = g(d.options.position ? d.options.position : s.latLng), L || v(d.options.position), u = new $.classes.InfoWindow(d.options), u && (a(d.open) || d.open) && (r ? u.open(L, d.anchor || e) : u.open(L, d.anchor || (i.latLng ? e : i.session.marker ? i.session.marker : e))), n.push(u), l = C.add({
                        td: d
                    }, "infowindow", u), c(o, {
                        td: d
                    }, u, l)
                }), h(i, r ? n : n[0])
            }, _.circle = function(e) {
                var i = [],
                    n = "values" in e.td;
                return n || (e.opts.center = e.latLng || g(e.opts.center), e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, n) {
                    var a, r, s = p(e, n);
                    s.options.center = g(s.options.center ? s.options.center : n), L || v(s.options.center), s.options.map = L, r = new $.classes.Circle(s.options), i.push(r), a = C.add({
                        td: s
                    }, "circle", r), c(o, {
                        td: s
                    }, r, a)
                }), void h(e, n ? i : i[0])) : void h(e, !1)
            }, _.getaddress = function(t) {
                d(t, t.results, t.status), x.ack()
            }, _.getlatlng = function(t) {
                d(t, t.results, t.status), x.ack()
            }, _.getmaxzoom = function(t) {
                A().getMaxZoomAtLatLng(t.latLng, function(e) {
                    d(t, e.status === N.MaxZoomStatus.OK && e.zoom, status), x.ack()
                })
            }, _.getelevation = function(t) {
                var e, i = [],
                    n = function(e, i) {
                        d(t, i === N.ElevationStatus.OK && e, i), x.ack()
                    };
                if (t.latLng) i.push(t.latLng);
                else
                    for (i = f(t.td.locations || []), e = 0; e < i.length; e++) i[e] = g(i[e]);
                if (i.length) M().getElevationForLocations({
                    locations: i
                }, n);
                else {
                    if (t.td.path && t.td.path.length)
                        for (e = 0; e < t.td.path.length; e++) i.push(g(t.td.path[e]));
                    i.length ? M().getElevationAlongPath({
                        path: i,
                        samples: t.td.samples
                    }, n) : x.ack()
                }
            }, _.defaults = function(e) {
                t.each(e.td, function(e, n) {
                    i($[e]) ? $[e] = t.extend({}, $[e], n) : $[e] = n
                }), x.ack(!0)
            }, _.rectangle = function(e) {
                var i = [],
                    n = "values" in e.td;
                return n || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, n) {
                    var a, r, s = p(e, n);
                    s.options.bounds = y(s.options.bounds ? s.options.bounds : n), L || v(s.options.bounds.getCenter()), s.options.map = L, r = new $.classes.Rectangle(s.options), i.push(r), a = C.add({
                        td: s
                    }, "rectangle", r), c(o, {
                        td: s
                    }, r, a)
                }), void h(e, n ? i : i[0])) : void h(e, !1)
            }, _.polyline = function(t) {
                w(t, "Polyline", "path")
            }, _.polygon = function(t) {
                w(t, "Polygon", "paths")
            }, _.trafficlayer = function(t) {
                v();
                var e = C.get("trafficlayer");
                e || (e = new $.classes.TrafficLayer, e.setMap(L), C.add(t, "trafficlayer", e)), h(t, e)
            }, _.bicyclinglayer = function(t) {
                v();
                var e = C.get("bicyclinglayer");
                e || (e = new $.classes.BicyclingLayer, e.setMap(L), C.add(t, "bicyclinglayer", e)), h(t, e)
            }, _.groundoverlay = function(t) {
                t.opts.bounds = y(t.opts.bounds), t.opts.bounds && v(t.opts.bounds.getCenter());
                var e, i = new $.classes.GroundOverlay(t.opts.url, t.opts.bounds, t.opts.opts);
                i.setMap(L), e = C.add(t, "groundoverlay", i), h(t, i, e)
            }, _.streetviewpanorama = function(e) {
                e.opts.opts || (e.opts.opts = {}), e.latLng ? e.opts.opts.position = e.latLng : e.opts.opts.position && (e.opts.opts.position = g(e.opts.opts.position)), e.td.divId ? e.opts.container = document.getElementById(e.td.divId) : e.opts.container && (e.opts.container = t(e.opts.container).get(0));
                var i, n = new $.classes.StreetViewPanorama(e.opts.container, e.opts.opts);
                n && L.setStreetView(n), i = C.add(e, "streetviewpanorama", n), h(e, n, i)
            }, _.kmllayer = function(e) {
                var i = [],
                    n = "values" in e.td;
                return n || (e.td.values = [{
                    options: e.opts
                }]), e.td.values.length ? (t.each(e.td.values, function(t, n) {
                    var a, r, s, u = p(e, n);
                    L || v(), s = u.options, u.options.opts && (s = u.options.opts, u.options.url && (s.url = u.options.url)), s.map = L, r = l("3.10") ? new $.classes.KmlLayer(s) : new $.classes.KmlLayer(s.url, s), i.push(r), a = C.add({
                        td: u
                    }, "kmllayer", r), c(o, {
                        td: u
                    }, r, a)
                }), void h(e, n ? i : i[0])) : void h(e, !1)
            }, _.panel = function(e) {
                v();
                var i, n, r = 0,
                    s = 0,
                    l = t(document.createElement("div"));
                l.css({
                    position: "absolute",
                    zIndex: 1e3,
                    visibility: "hidden"
                }), e.opts.content && (n = t(e.opts.content), l.append(n), o.first().prepend(l), a(e.opts.left) ? a(e.opts.right) ? e.opts.center && (r = (o.width() - n.width()) / 2) : r = o.width() - n.width() - e.opts.right : r = e.opts.left, a(e.opts.top) ? a(e.opts.bottom) ? e.opts.middle && (s = (o.height() - n.height()) / 2) : s = o.height() - n.height() - e.opts.bottom : s = e.opts.top, l.css({
                    top: s,
                    left: r,
                    visibility: "visible"
                })), i = C.add(e, "panel", l), h(e, l, i), l = null
            }, _.directionsrenderer = function(e) {
                e.opts.map = L;
                var i, n = new N.DirectionsRenderer(e.opts);
                e.td.divId ? n.setPanel(document.getElementById(e.td.divId)) : e.td.container && n.setPanel(t(e.td.container).get(0)), i = C.add(e, "directionsrenderer", n), h(e, n, i)
            }, _.getgeoloc = function(t) {
                h(t, t.latLng)
            }, _.styledmaptype = function(t) {
                v();
                var e = new $.classes.StyledMapType(t.td.styles, t.opts);
                L.mapTypes.set(t.td.id, e), h(t, e)
            }, _.imagemaptype = function(t) {
                v();
                var e = new $.classes.ImageMapType(t.opts);
                L.mapTypes.set(t.td.id, e), h(t, e)
            }, _.autofit = function(e) {
                var i = new N.LatLngBounds;
                t.each(C.all(), function(t, e) {
                    e.getPosition ? i.extend(e.getPosition()) : e.getBounds ? (i.extend(e.getBounds().getNorthEast()), i.extend(e.getBounds().getSouthWest())) : e.getPaths ? e.getPaths().forEach(function(t) {
                        t.forEach(function(t) {
                            i.extend(t)
                        })
                    }) : e.getPath ? e.getPath().forEach(function(t) {
                        i.extend(t)
                    }) : e.getCenter ? i.extend(e.getCenter()) : "function" == typeof D && e instanceof D && (e = C.getById(e.id(), !0), e && e.autofit(i))
                }), i.isEmpty() || L.getBounds() && L.getBounds().equals(i) || ("maxZoom" in e.td && N.event.addListenerOnce(L, "bounds_changed", function() {
                    this.getZoom() > e.td.maxZoom && this.setZoom(e.td.maxZoom)
                }), L.fitBounds(i)), h(e, !0)
            }, _.clear = function(e) {
                if (n(e.td)) {
                    if (C.clearById(e.td) || C.objClearById(e.td)) return void h(e, !0);
                    e.td = {
                        name: e.td
                    }
                }
                e.td.id ? t.each(f(e.td.id), function(t, e) {
                    C.clearById(e) || C.objClearById(e)
                }) : (C.clear(f(e.td.name), e.td.last, e.td.first, e.td.tag), C.objClear(f(e.td.name), e.td.last, e.td.first, e.td.tag)), h(e, !0)
            }, _.get = function(i, o, a) {
                var r, s, l = o ? i : i.td;
                return o || (a = l.full), n(l) ? (s = C.getById(l, !1, a) || C.objGetById(l), s === !1 && (r = l, l = {})) : r = l.name, "map" === r && (s = L), s || (s = [], l.id ? (t.each(f(l.id), function(t, e) {
                    s.push(C.getById(e, !1, a) || C.objGetById(e))
                }), W(l.id) || (s = s[0])) : (t.each(r ? f(r) : [e], function(e, i) {
                    var n;
                    l.first ? (n = C.get(i, !1, l.tag, a), n && s.push(n)) : l.all ? t.each(C.all(i, l.tag, a), function(t, e) {
                        s.push(e)
                    }) : (n = C.get(i, !0, l.tag, a), n && s.push(n))
                }), l.all || W(r) || (s = s[0]))), s = W(s) || !l.all ? s : [s], o ? s : void h(i, s)
            }, _.exec = function(e) {
                t.each(f(e.td.func), function(i, n) {
                    t.each(_.get(e.td, !0, !e.td.hasOwnProperty("full") || e.td.full), function(t, e) {
                        n.call(o, e)
                    })
                }), h(e, !0)
            }, _.trigger = function(e) {
                if (n(e.td)) N.event.trigger(L, e.td);
                else {
                    var i = [L, e.td.eventName];
                    e.td.var_args && t.each(e.td.var_args, function(t, e) {
                        i.push(e)
                    }), N.event.trigger.apply(N.event, i)
                }
                d(e), x.ack()
            }
        }
        var $, N, j = 0,
            F = t.isFunction,
            W = t.isArray,
            B = {},
            q = new C;
        t.fn.gmap3 = function() {
            var e, i = [],
                n = !0,
                o = [];
            for (r(), e = 0; e < arguments.length; e++) arguments[e] && i.push(arguments[e]);
            return i.length || i.push("map"), t.each(this, function() {
                var e = t(this),
                    a = e.data("gmap3");
                n = !1, a || (a = new O(e), e.data("gmap3", a)), 1 !== i.length || "get" !== i[0] && !_(i[0]) ? a._plan(i) : "get" === i[0] ? o.push(a.get("map", !0)) : o.push(a.get(i[0].get, !0, i[0].get.full))
            }), o.length ? 1 === o.length ? o[0] : o : this
        }
    }(jQuery),
    /*!
     * imagesLoaded PACKAGED v3.0.2
     * JavaScript is all like "You images are done yet or what?"
     */
    /*!
     * EventEmitter v4.1.0 - git.io/ee
     * Oliver Caldwell
     * MIT license
     * @preserve
     */
    function(t) {
        "use strict";

        function e() {}

        function i(t, e) {
            if (o) return e.indexOf(t);
            for (var i = e.length; i--;)
                if (e[i] === t) return i;
            return -1
        }
        var n = e.prototype,
            o = !!Array.prototype.indexOf;
        n._getEvents = function() {
            return this._events || (this._events = {})
        }, n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, e) {
            var n, o = this.getListenersAsObject(t);
            for (n in o) o.hasOwnProperty(n) && i(e, o[n]) === -1 && o[n].push(e);
            return this
        }, n.on = n.addListener, n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, e) {
            var n, o, a = this.getListenersAsObject(t);
            for (o in a) a.hasOwnProperty(o) && (n = i(e, a[o]), n !== -1 && a[o].splice(n, 1));
            return this
        }, n.off = n.removeListener, n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, o, a = t ? this.removeListener : this.addListener,
                r = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) a.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? a.call(this, n, o) : r.call(this, n, o));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.emitEvent = function(t, e) {
            var i, n, o, a = this.getListenersAsObject(t);
            for (n in a)
                if (a.hasOwnProperty(n))
                    for (i = a[n].length; i--;) o = e ? a[n][i].apply(null, e) : a[n][i](), o === !0 && this.removeListener(t, a[n][i]);
            return this
        }, n.trigger = n.emitEvent, n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, "function" == typeof define && define.amd ? define(function() {
            return e
        }) : t.EventEmitter = e
    }(this),
    /*!
     * eventie v1.0.3
     * event binding helper
     *   eventie.bind( elem, 'click', myFn )
     *   eventie.unbind( elem, 'click', myFn )
     */
    function(t) {
        "use strict";
        var e = document.documentElement,
            i = function() {};
        e.addEventListener ? i = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : e.attachEvent && (i = function(e, i, n) {
            e[i + n] = n.handleEvent ? function() {
                var e = t.event;
                e.target = e.target || e.srcElement, n.handleEvent.call(n, e)
            } : function() {
                var i = t.event;
                i.target = i.target || i.srcElement, n.call(e, i)
            }, e.attachEvent("on" + i, e[i + n])
        });
        var n = function() {};
        e.removeEventListener ? n = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : e.detachEvent && (n = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: n
        };
        "function" == typeof define && define.amd ? define(o) : t.eventie = o
    }(this),
    /*!
     * imagesLoaded v3.0.2
     * JavaScript is all like "You images are done yet or what?"
     */
    function(t) {
        "use strict";

        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === l.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if ("number" == typeof t.length)
                for (var n = 0, o = t.length; n < o; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, i) {
            function o(t, i, r) {
                if (!(this instanceof o)) return new o(t, i);
                "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = e({}, this.options), "function" == typeof i ? r = i : e(this.options, i), r && this.on("always", r), this.getImages(), a && (this.jqDeferred = new a.Deferred);
                var s = this;
                setTimeout(function() {
                    s.check()
                })
            }

            function l(t) {
                this.img = t
            }
            o.prototype = new t, o.prototype.options = {}, o.prototype.getImages = function() {
                this.images = [];
                for (var t = 0, e = this.elements.length; t < e; t++) {
                    var i = this.elements[t];
                    "IMG" === i.nodeName && this.addImage(i);
                    for (var n = i.querySelectorAll("img"), o = 0, a = n.length; o < a; o++) {
                        var r = n[o];
                        this.addImage(r)
                    }
                }
            }, o.prototype.addImage = function(t) {
                var e = new l(t);
                this.images.push(e)
            }, o.prototype.check = function() {
                function t(t, o) {
                    return e.options.debug && s && r.log("confirm", t, o), e.progress(t), i++, i === n && e.complete(), !0
                }
                var e = this,
                    i = 0,
                    n = this.images.length;
                if (this.hasAnyBroken = !1, !n) return void this.complete();
                for (var o = 0; o < n; o++) {
                    var a = this.images[o];
                    a.on("confirm", t), a.check()
                }
            }, o.prototype.progress = function(t) {
                this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emit("progress", this, t), this.jqDeferred && this.jqDeferred.notify(this, t)
            }, o.prototype.complete = function() {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emit(t, this), this.emit("always", this), this.jqDeferred) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this)
                }
            }, a && (a.fn.imagesLoaded = function(t, e) {
                var i = new o(this, t, e);
                return i.jqDeferred.promise(a(this))
            });
            var c = {};
            return l.prototype = new t, l.prototype.check = function() {
                var t = c[this.img.src];
                if (t) return void this.useCached(t);
                if (c[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var e = this.proxyImage = new Image;
                i.bind(e, "load", this), i.bind(e, "error", this), e.src = this.img.src
            }, l.prototype.useCached = function(t) {
                if (t.isConfirmed) this.confirm(t.isLoaded, "cached was confirmed");
                else {
                    var e = this;
                    t.on("confirm", function(t) {
                        return e.confirm(t.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, l.prototype.confirm = function(t, e) {
                this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
            }, l.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, l.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, l.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, l.prototype.unbindProxyEvents = function() {
                i.unbind(this.proxyImage, "load", this), i.unbind(this.proxyImage, "error", this)
            }, o
        }
        var a = t.jQuery,
            r = t.console,
            s = "undefined" != typeof r,
            l = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], o) : t.imagesLoaded = o(t.EventEmitter, t.eventie)
    }(window),
    /*!
     * Isotope PACKAGED v3.0.1
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * http://isotope.metafizzy.co
     * Copyright 2016 Metafizzy
     */
    /**
     * Bridget makes jQuery widgets
     * v2.0.0
     * MIT license
     */
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(i, a, s) {
            function l(t, e, n) {
                var o, a = "$()." + i + '("' + e + '")';
                return t.each(function(t, l) {
                    var c = s.data(l, i);
                    if (!c) return void r(i + " not initialized. Cannot call methods, i.e. " + a);
                    var u = c[e];
                    if (!u || "_" == e.charAt(0)) return void r(a + " is not a valid method");
                    var d = u.apply(c, n);
                    o = void 0 === o ? d : o
                }), void 0 !== o ? o : t
            }

            function c(t, e) {
                t.each(function(t, n) {
                    var o = s.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new a(n, e), s.data(n, i, o))
                })
            }
            s = s || e || t.jQuery, s && (a.prototype.option || (a.prototype.option = function(t) {
                s.isPlainObject(t) && (this.options = s.extend(!0, this.options, t))
            }), s.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, n(s))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var o = Array.prototype.slice,
            a = t.console,
            r = "undefined" == typeof a ? function() {} : function(t) {
                a.error(t)
            };
        return n(e || t.jQuery), i
    }),
    /**
     * EvEmitter v1.0.3
     * Lil' event emitter
     * MIT License
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }("undefined" != typeof window ? window : this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return n.indexOf(e) == -1 && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return n != -1 && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var a = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = a && a[o];
                    r && (this.off(t, o), delete a[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    /*!
     * getSize v2.0.2
     * measure size of elements
     * MIT license
     */
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < c; e++) {
                var i = l[e];
                t[i] = 0
            }
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || s("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function o() {
            if (!u) {
                u = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                a.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
            }
        }

        function a(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var a = n(e);
                if ("none" == a.display) return i();
                var s = {};
                s.width = e.offsetWidth, s.height = e.offsetHeight;
                for (var u = s.isBorderBox = "border-box" == a.boxSizing, d = 0; d < c; d++) {
                    var p = l[d],
                        m = a[p],
                        h = parseFloat(m);
                    s[p] = isNaN(h) ? 0 : h
                }
                var f = s.paddingLeft + s.paddingRight,
                    v = s.paddingTop + s.paddingBottom,
                    g = s.marginLeft + s.marginRight,
                    y = s.marginTop + s.marginBottom,
                    b = s.borderLeftWidth + s.borderRightWidth,
                    w = s.borderTopWidth + s.borderBottomWidth,
                    x = u && r,
                    _ = t(a.width);
                _ !== !1 && (s.width = _ + (x ? 0 : f + b));
                var I = t(a.height);
                return I !== !1 && (s.height = I + (x ? 0 : v + w)), s.innerWidth = s.width - (f + b), s.innerHeight = s.height - (v + w), s.outerWidth = s.width + g, s.outerHeight = s.height + y, s
            }
        }
        var r, s = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            u = !1;
        return a
    }),
    /**
     * matchesSelector v2.0.1
     * matchesSelector( element, '.selector' )
     * MIT license
     */
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    /**
     * Fizzy UI utils v2.0.2
     * MIT license
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), a = 0; a < i.length; a++) o.push(i[a])
                }
            }), o
        }, i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    a = this;
                this[o] = setTimeout(function() {
                    n.apply(a, e), delete a[o]
                }, i || 100)
            }
        }, i.docReady = function(t) {
            var e = document.readyState;
            "complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function(e, o) {
            i.docReady(function() {
                var a = i.toDashed(o),
                    r = "data-" + a,
                    s = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + a),
                    c = i.makeArray(s).concat(i.makeArray(l)),
                    u = r + "-options",
                    d = t.jQuery;
                c.forEach(function(t) {
                    var i, a = t.getAttribute(r) || t.getAttribute(u);
                    try {
                        i = a && JSON.parse(a)
                    } catch (s) {
                        return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + s))
                    }
                    var l = new e(t, i);
                    d && d.data(t, o, l)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var a = document.documentElement.style,
            r = "string" == typeof a.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof a.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[r],
            c = {
                transform: s,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            },
            u = n.prototype = Object.create(t.prototype);
        u.constructor = n, u._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, u.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, u.getSize = function() {
            this.size = e(this.element)
        }, u.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = c[i] || i;
                e[n] = t[i]
            }
        }, u.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                a = this.layout.size,
                r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * a.width : parseInt(n, 10),
                s = o.indexOf("%") != -1 ? parseFloat(o) / 100 * a.height : parseInt(o, 10);
            r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= i ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s
        }, u.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                a = i ? "left" : "right",
                r = i ? "right" : "left",
                s = this.position.x + t[o];
            e[a] = this.getXValue(s), e[r] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                c = n ? "top" : "bottom",
                u = n ? "bottom" : "top",
                d = this.position.y + t[l];
            e[c] = this.getYValue(d), e[u] = "", this.css(e), this.emitEvent("layout", [this])
        }, u.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, u.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, u._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                a = parseInt(e, 10),
                r = o === this.position.x && a === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var s = t - i,
                l = e - n,
                c = {};
            c.transform = this.getTranslate(s, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, u.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, u.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, u.moveTo = u._transitionTo, u.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, u._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, u.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var d = "opacity," + o(s);
        u.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: d,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(l, this, !1)
            }
        }, u.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, u.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var p = {
            "-webkit-transform": "transform"
        };
        u.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = p[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, u.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, u._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var m = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return u.removeTransitionStyles = function() {
            this.css(m)
        }, u.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, u.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, u.remove = function() {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, u.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, u.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, u.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, u.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, u.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, u.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    /*!
     * Outlayer v2.1.0
     * the brains and guts of a layout library
     * MIT license
     */
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, a) {
            return e(t, i, n, o, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, o) {
        "use strict";

        function a(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++d;
            this.element.outlayerGUID = o, p[o] = this, this._create();
            var a = this._getOption("initLayout");
            a && this.layout()
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function s(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = h[n] || 1;
            return i * o
        }
        var l = t.console,
            c = t.jQuery,
            u = function() {},
            d = 0,
            p = {};
        a.namespace = "outlayer", a.Item = o, a.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var m = a.prototype;
        n.extend(m, e.prototype), m.option = function(t) {
            n.extend(this.options, t)
        }, m._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, a.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, m._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, m.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, m._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var a = e[o],
                    r = new i(a, this);
                n.push(r)
            }
            return n
        }, m._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, m.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, m.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, m._init = m.layout, m._resetLayout = function() {
            this.getSize()
        }, m.getSize = function() {
            this.size = i(this.element)
        }, m._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
        }, m.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, m._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, m._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, m._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, m._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, m.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = s(t), this.stagger)
        }, m._positionItem = function(t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
        }, m._postLayout = function() {
            this.resizeContainer()
        }, m.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, m._getContainerSize = u, m._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, m._emitCompleteOnItems = function(t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                r++, r == a && i()
            }
            var o = this,
                a = e.length;
            if (!e || !a) return void i();
            var r = 0;
            e.forEach(function(e) {
                e.once(t, n)
            })
        }, m.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var o = c.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, m.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, m.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, m.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, m.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                n.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, m._find = function(t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)
        }, m._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, m._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, m._manageStamp = u, m._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                a = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return a
        }, m.handleEvent = n.handleEvent, m.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, m.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, m.onresize = function() {
            this.resize()
        }, n.debounceMethod(a, "onresize", 100), m.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, m.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, m.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, m.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, m.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, m.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, m.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, m.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, m.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, m.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, m.getItems = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, m.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), n.removeFrom(this.items, t)
            }, this)
        }, m.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete p[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, a.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && p[e]
        }, a.create = function(t, e) {
            var i = r(a);
            return i.defaults = n.extend({}, a.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, a.compatOptions), i.namespace = t, i.data = a.data, i.Item = r(o), n.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
        };
        var h = {
            ms: 1,
            s: 1e3
        };
        return a.Item = o, a
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            n = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var o = i.destroy;
        return i.destroy = function() {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var n = i.prototype,
            o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return o.forEach(function(t) {
            n[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), n.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, n._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + e]
            }
        }, n.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, n.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }),
    /*!
     * Masonry v4.1.0
     * Cascading grid layout library
     * http://masonry.desandro.com
     * MIT License
     * by David DeSandro
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                a = o / n,
                r = n - o % n,
                s = r && r < 1 ? "round" : "floor";
            a = Math[s](a), this.cols = Math.max(a, 1)
        }, i.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && e < 1 ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), a = Math.min.apply(Math, o), r = o.indexOf(a), s = {
                    x: this.columnWidth * r,
                    y: a
                }, l = a + t.size.outerHeight, c = this.cols + 1 - o.length, u = 0; u < c; u++) this.colYs[r + u] = l;
            return s
        }, i.prototype._getColGroup = function(t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                a = o ? n.left : n.right,
                r = a + i.outerWidth,
                s = Math.floor(a / this.columnWidth);
            s = Math.max(0, s);
            var l = Math.floor(r / this.columnWidth);
            l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var c = this._getOption("originTop"), u = (c ? n.top : n.bottom) + i.outerHeight, d = s; d <= l; d++) this.colYs[d] = Math.max(u, this.colYs[d])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    /*!
     * Masonry layout mode
     * sub-classes Masonry
     * http://masonry.desandro.com
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var a in e.prototype) o[a] || (n[a] = e.prototype[a]);
        var r = n.measureColumns;
        n.measureColumns = function() {
            this.items = this.isotope.filteredItems, r.call(this)
        };
        var s = n._getOption;
        return n._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : s.apply(this.isotope, arguments)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    /*!
     * Isotope v3.0.1
     *
     * Licensed GPLv3 for open source use
     * or Isotope Commercial License for commercial use
     *
     * http://isotope.metafizzy.co
     * Copyright 2016 Metafizzy
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, a, r, s) {
            return e(t, i, n, o, a, r, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, o, a, r) {
        function s(t, e) {
            return function(i, n) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o],
                        r = i.sortData[a],
                        s = n.sortData[a];
                    if (r > s || r < s) {
                        var l = void 0 !== e[a] ? e[a] : e,
                            c = l ? 1 : -1;
                        return (r > s ? 1 : -1) * c
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            c = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        u.Item = a, u.LayoutMode = r;
        var d = u.prototype;
        d._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in r.modes) this._initLayoutMode(t)
        }, d.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, d._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, d._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, d.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, d._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, d.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, d._init = d.arrange, d._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, d._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, d._bindArrangeComplete = function() {
            function t() {
                e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, i, n, o = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                n = !0, t()
            })
        }, d._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], o = [], a = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var s = t[r];
                if (!s.isIgnored) {
                    var l = a(s);
                    l && i.push(s), l && s.isHidden ? n.push(s) : l || s.isHidden || o.push(s)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: o
            }
        }, d._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return n(e.element, t)
            }
        }, d.updateSortData = function(t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, d._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = p(i)
            }
        }, d._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var p = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = c(t).split(" "),
                    n = i[0],
                    o = n.match(/^\[(.+)\]$/),
                    a = o && o[1],
                    r = e(a, n),
                    s = u.sortDataParsers[i[1]];
                return t = s ? function(t) {
                    return t && s(r(t))
                } : function(t) {
                    return t && r(t)
                }
            }

            function e(t, e) {
                return t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
            }
            return t
        }();
        u.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, d._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = s(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, d._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, d._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, d._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, d._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, d._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, d.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, d.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, d.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, d._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, d.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, o = e.length;
                for (i = 0; i < o; i++) n = e[i], this.element.appendChild(n.element);
                var a = this._filter(e).matches;
                for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
                this.reveal(a)
            }
        };
        var m = d.remove;
        return d.remove = function(t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            m.call(this, t);
            for (var i = e && e.length, n = 0; i && n < i; n++) {
                var a = e[n];
                o.removeFrom(this.filteredItems, a)
            }
        }, d.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, d._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return this.options.transitionDuration = i, n
        }, d.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }, u
    }),
    /*! jqBootstrapValidation
     * A plugin for automating validation on Twitter Bootstrap formatted forms.
     *
     * v1.3.6
     *
     * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
     *
     * http://ReactiveRaven.github.com/jqBootstrapValidation/
     */
    function(t) {
        function e(t) {
            return new RegExp("^" + t + "$")
        }

        function i(t, e) {
            for (var i = Array.prototype.slice.call(arguments).splice(2), n = t.split("."), o = n.pop(), a = 0; a < n.length; a++) e = e[n[a]];
            return e[o].apply(this, i)
        }
        var n = [],
            o = {
                options: {
                    prependExistingHelpBlock: !1,
                    sniffHtml: !0,
                    preventSubmit: !0,
                    submitError: !1,
                    submitSuccess: !1,
                    semanticallyStrict: !1,
                    autoAdd: {
                        helpBlocks: !0
                    },
                    filter: function() {
                        return !0
                    }
                },
                methods: {
                    init: function(e) {
                        var i = t.extend(!0, {}, o);
                        i.options = t.extend(!0, i.options, e);
                        var s = this,
                            l = t.unique(s.map(function() {
                                return t(this).parents("form")[0]
                            }).toArray());
                        return t(l).bind("submit", function(e) {
                            var n = t(this),
                                o = 0,
                                a = n.find("input,textarea,select").not("[type=submit],[type=image]").filter(i.options.filter);
                            a.trigger("submit.validation").trigger("validationLostFocus.validation"), a.each(function(e, i) {
                                var n = t(i),
                                    a = n.parents(".form-group").first();
                                a.hasClass("warning") && (a.removeClass("warning").addClass("error"), o++)
                            }), a.trigger("validationLostFocus.validation"), o ? (i.options.preventSubmit && e.preventDefault(), n.addClass("error"), t.isFunction(i.options.submitError) && i.options.submitError(n, e, a.jqBootstrapValidation("collectErrors", !0))) : (n.removeClass("error"), t.isFunction(i.options.submitSuccess) && i.options.submitSuccess(n, e))
                        }), this.each(function() {
                            var e = t(this),
                                o = e.parents(".form-group").first(),
                                s = o.find(".help-block").first(),
                                l = e.parents("form").first(),
                                c = [];
                            if (!s.length && i.options.autoAdd && i.options.autoAdd.helpBlocks && (s = t('<div class="help-block" />'), o.find(".controls").append(s), n.push(s[0])), i.options.sniffHtml) {
                                var u = "";
                                if (void 0 !== e.attr("pattern") && (u = "Not in the expected format<!-- data-validation-pattern-message to override -->", e.data("validationPatternMessage") && (u = e.data("validationPatternMessage")), e.data("validationPatternMessage", u), e.data("validationPatternRegex", e.attr("pattern"))), void 0 !== e.attr("max") || void 0 !== e.attr("aria-valuemax")) {
                                    var d = void 0 !== e.attr("max") ? e.attr("max") : e.attr("aria-valuemax");
                                    u = "Too high: Maximum of '" + d + "'<!-- data-validation-max-message to override -->", e.data("validationMaxMessage") && (u = e.data("validationMaxMessage")), e.data("validationMaxMessage", u), e.data("validationMaxMax", d)
                                }
                                if (void 0 !== e.attr("min") || void 0 !== e.attr("aria-valuemin")) {
                                    var p = void 0 !== e.attr("min") ? e.attr("min") : e.attr("aria-valuemin");
                                    u = "Too low: Minimum of '" + p + "'<!-- data-validation-min-message to override -->", e.data("validationMinMessage") && (u = e.data("validationMinMessage")), e.data("validationMinMessage", u), e.data("validationMinMin", p)
                                }
                                void 0 !== e.attr("maxlength") && (u = "Too long: Maximum of '" + e.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", e.data("validationMaxlengthMessage") && (u = e.data("validationMaxlengthMessage")), e.data("validationMaxlengthMessage", u), e.data("validationMaxlengthMaxlength", e.attr("maxlength"))), void 0 !== e.attr("minlength") && (u = "Too short: Minimum of '" + e.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", e.data("validationMinlengthMessage") && (u = e.data("validationMinlengthMessage")), e.data("validationMinlengthMessage", u), e.data("validationMinlengthMinlength", e.attr("minlength"))), void 0 === e.attr("required") && void 0 === e.attr("aria-required") || (u = i.builtInValidators.required.message, e.data("validationRequiredMessage") && (u = e.data("validationRequiredMessage")), e.data("validationRequiredMessage", u)), void 0 !== e.attr("type") && "number" === e.attr("type").toLowerCase() && (u = i.builtInValidators.number.message, e.data("validationNumberMessage") && (u = e.data("validationNumberMessage")), e.data("validationNumberMessage", u)), void 0 !== e.attr("type") && "email" === e.attr("type").toLowerCase() && (u = "Not a valid email address<!-- data-validator-validemail-message to override -->", e.data("validationValidemailMessage") ? u = e.data("validationValidemailMessage") : e.data("validationEmailMessage") && (u = e.data("validationEmailMessage")), e.data("validationValidemailMessage", u)), void 0 !== e.attr("minchecked") && (u = "Not enough options checked; Minimum of '" + e.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", e.data("validationMincheckedMessage") && (u = e.data("validationMincheckedMessage")), e.data("validationMincheckedMessage", u), e.data("validationMincheckedMinchecked", e.attr("minchecked"))), void 0 !== e.attr("maxchecked") && (u = "Too many options checked; Maximum of '" + e.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", e.data("validationMaxcheckedMessage") && (u = e.data("validationMaxcheckedMessage")), e.data("validationMaxcheckedMessage", u), e.data("validationMaxcheckedMaxchecked", e.attr("maxchecked")))
                            }
                            void 0 !== e.data("validation") && (c = e.data("validation").split(",")), t.each(e.data(), function(t, e) {
                                var i = t.replace(/([A-Z])/g, ",$1").split(",");
                                "validation" === i[0] && i[1] && c.push(i[1])
                            });
                            var m = c,
                                h = [];
                            do t.each(c, function(t, e) {
                                c[t] = a(e)
                            }), c = t.unique(c), h = [], t.each(m, function(n, o) {
                                if (void 0 !== e.data("validation" + o + "Shortcut")) t.each(e.data("validation" + o + "Shortcut").split(","), function(t, e) {
                                    h.push(e)
                                });
                                else if (i.builtInValidators[o.toLowerCase()]) {
                                    var r = i.builtInValidators[o.toLowerCase()];
                                    "shortcut" === r.type.toLowerCase() && t.each(r.shortcut.split(","), function(t, e) {
                                        e = a(e), h.push(e), c.push(e)
                                    })
                                }
                            }), m = h; while (m.length > 0);
                            var f = {};
                            t.each(c, function(n, o) {
                                var r = e.data("validation" + o + "Message"),
                                    s = void 0 !== r,
                                    l = !1;
                                if (r = r ? r : "'" + o + "' validation failed <!-- Add attribute 'data-validation-" + o.toLowerCase() + "-message' to input to change this message -->", t.each(i.validatorTypes, function(i, n) {
                                        void 0 === f[i] && (f[i] = []), l || void 0 === e.data("validation" + o + a(n.name)) || (f[i].push(t.extend(!0, {
                                            name: a(n.name),
                                            message: r
                                        }, n.init(e, o))), l = !0)
                                    }), !l && i.builtInValidators[o.toLowerCase()]) {
                                    var c = t.extend(!0, {}, i.builtInValidators[o.toLowerCase()]);
                                    s && (c.message = r);
                                    var u = c.type.toLowerCase();
                                    "shortcut" === u ? l = !0 : t.each(i.validatorTypes, function(i, n) {
                                        void 0 === f[i] && (f[i] = []), l || u !== i.toLowerCase() || (e.data("validation" + o + a(n.name), c[n.name.toLowerCase()]), f[u].push(t.extend(c, n.init(e, o))), l = !0)
                                    })
                                }
                                l || t.error("Cannot find validation info for '" + o + "'")
                            }), s.data("original-contents", s.data("original-contents") ? s.data("original-contents") : s.html()), s.data("original-role", s.data("original-role") ? s.data("original-role") : s.attr("role")), o.data("original-classes", o.data("original-clases") ? o.data("original-classes") : o.attr("class")), e.data("original-aria-invalid", e.data("original-aria-invalid") ? e.data("original-aria-invalid") : e.attr("aria-invalid")), e.bind("validation.validation", function(n, o) {
                                var a = r(e),
                                    s = [];
                                return t.each(f, function(n, r) {
                                    (a || a.length || o && o.includeEmpty || i.validatorTypes[n].blockSubmit && o && o.submitting) && t.each(r, function(t, o) {
                                        i.validatorTypes[n].validate(e, a, o) && s.push(o.message)
                                    })
                                }), s
                            }), e.bind("getValidators.validation", function() {
                                return f
                            }), e.bind("submit.validation", function() {
                                return e.triggerHandler("change.validation", {
                                    submitting: !0
                                })
                            }), e.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function(n, a) {
                                var c = r(e),
                                    u = [];
                                o.find("input,textarea,select").each(function(i, n) {
                                    var o = u.length;
                                    if (t.each(t(n).triggerHandler("validation.validation", a), function(t, e) {
                                            u.push(e)
                                        }), u.length > o) t(n).attr("aria-invalid", "true");
                                    else {
                                        var r = e.data("original-aria-invalid");
                                        t(n).attr("aria-invalid", void 0 !== r && r)
                                    }
                                }), l.find("input,select,textarea").not(e).not('[name="' + e.attr("name") + '"]').trigger("validationLostFocus.validation"), u = t.unique(u.sort()), u.length ? (o.removeClass("success error").addClass("warning"), i.options.semanticallyStrict && 1 === u.length ? s.html(u[0] + (i.options.prependExistingHelpBlock ? s.data("original-contents") : "")) : s.html('<ul role="alert"><li>' + u.join("</li><li>") + "</li></ul>" + (i.options.prependExistingHelpBlock ? s.data("original-contents") : ""))) : (o.removeClass("warning error success"), c.length > 0 && o.addClass("success"), s.html(s.data("original-contents"))), "blur" === n.type && o.removeClass("success")
                            }), e.bind("validationLostFocus.validation", function() {
                                o.removeClass("success")
                            })
                        })
                    },
                    destroy: function() {
                        return this.each(function() {
                            var e = t(this),
                                i = e.parents(".form-group").first(),
                                o = i.find(".help-block").first();
                            e.unbind(".validation"), o.html(o.data("original-contents")), i.attr("class", i.data("original-classes")), e.attr("aria-invalid", e.data("original-aria-invalid")), o.attr("role", e.data("original-role")), n.indexOf(o[0]) > -1 && o.remove()
                        })
                    },
                    collectErrors: function(e) {
                        var i = {};
                        return this.each(function(e, n) {
                            var o = t(n),
                                a = o.attr("name"),
                                r = o.triggerHandler("validation.validation", {
                                    includeEmpty: !0
                                });
                            i[a] = t.extend(!0, r, i[a])
                        }), t.each(i, function(t, e) {
                            0 === e.length && delete i[t]
                        }), i
                    },
                    hasErrors: function() {
                        var e = [];
                        return this.each(function(i, n) {
                            e = e.concat(t(n).triggerHandler("getValidators.validation") ? t(n).triggerHandler("validation.validation", {
                                submitting: !0
                            }) : [])
                        }), e.length > 0
                    },
                    override: function(e) {
                        o = t.extend(!0, o, e)
                    }
                },
                validatorTypes: {
                    callback: {
                        name: "callback",
                        init: function(t, e) {
                            return {
                                validatorName: e,
                                callback: t.data("validation" + e + "Callback"),
                                lastValue: t.val(),
                                lastValid: !0,
                                lastFinished: !0
                            }
                        },
                        validate: function(t, e, n) {
                            if (n.lastValue === e && n.lastFinished) return !n.lastValid;
                            if (n.lastFinished === !0) {
                                n.lastValue = e, n.lastValid = !0, n.lastFinished = !1;
                                var o = n,
                                    a = t;
                                i(n.callback, window, t, e, function(t) {
                                    o.lastValue === t.value && (o.lastValid = t.valid, t.message && (o.message = t.message), o.lastFinished = !0, a.data("validation" + o.validatorName + "Message", o.message), setTimeout(function() {
                                        a.trigger("change.validation")
                                    }, 1))
                                })
                            }
                            return !1
                        }
                    },
                    ajax: {
                        name: "ajax",
                        init: function(t, e) {
                            return {
                                validatorName: e,
                                url: t.data("validation" + e + "Ajax"),
                                lastValue: t.val(),
                                lastValid: !0,
                                lastFinished: !0
                            }
                        },
                        validate: function(e, i, n) {
                            return "" + n.lastValue == "" + i && n.lastFinished === !0 ? n.lastValid === !1 : (n.lastFinished === !0 && (n.lastValue = i, n.lastValid = !0, n.lastFinished = !1, t.ajax({
                                url: n.url,
                                data: "value=" + i + "&field=" + e.attr("name"),
                                dataType: "json",
                                success: function(t) {
                                    "" + n.lastValue == "" + t.value && (n.lastValid = !!t.valid, t.message && (n.message = t.message), n.lastFinished = !0, e.data("validation" + n.validatorName + "Message", n.message), setTimeout(function() {
                                        e.trigger("change.validation")
                                    }, 1))
                                },
                                failure: function() {
                                    n.lastValid = !0, n.message = "ajax call failed", n.lastFinished = !0, e.data("validation" + n.validatorName + "Message", n.message), setTimeout(function() {
                                        e.trigger("change.validation")
                                    }, 1)
                                }
                            })), !1)
                        }
                    },
                    regex: {
                        name: "regex",
                        init: function(t, i) {
                            return {
                                regex: e(t.data("validation" + i + "Regex"))
                            }
                        },
                        validate: function(t, e, i) {
                            return !i.regex.test(e) && !i.negative || i.regex.test(e) && i.negative
                        }
                    },
                    required: {
                        name: "required",
                        init: function(t, e) {
                            return {}
                        },
                        validate: function(t, e, i) {
                            return !(0 !== e.length || i.negative) || !!(e.length > 0 && i.negative)
                        },
                        blockSubmit: !0
                    },
                    match: {
                        name: "match",
                        init: function(t, e) {
                            var i = t.parents("form").first().find('[name="' + t.data("validation" + e + "Match") + '"]').first();
                            return i.bind("validation.validation", function() {
                                t.trigger("change.validation", {
                                    submitting: !0
                                })
                            }), {
                                element: i
                            }
                        },
                        validate: function(t, e, i) {
                            return e !== i.element.val() && !i.negative || e === i.element.val() && i.negative
                        },
                        blockSubmit: !0
                    },
                    max: {
                        name: "max",
                        init: function(t, e) {
                            return {
                                max: t.data("validation" + e + "Max")
                            }
                        },
                        validate: function(t, e, i) {
                            return parseFloat(e, 10) > parseFloat(i.max, 10) && !i.negative || parseFloat(e, 10) <= parseFloat(i.max, 10) && i.negative
                        }
                    },
                    min: {
                        name: "min",
                        init: function(t, e) {
                            return {
                                min: t.data("validation" + e + "Min")
                            }
                        },
                        validate: function(t, e, i) {
                            return parseFloat(e) < parseFloat(i.min) && !i.negative || parseFloat(e) >= parseFloat(i.min) && i.negative
                        }
                    },
                    maxlength: {
                        name: "maxlength",
                        init: function(t, e) {
                            return {
                                maxlength: t.data("validation" + e + "Maxlength")
                            }
                        },
                        validate: function(t, e, i) {
                            return e.length > i.maxlength && !i.negative || e.length <= i.maxlength && i.negative
                        }
                    },
                    minlength: {
                        name: "minlength",
                        init: function(t, e) {
                            return {
                                minlength: t.data("validation" + e + "Minlength")
                            }
                        },
                        validate: function(t, e, i) {
                            return e.length < i.minlength && !i.negative || e.length >= i.minlength && i.negative
                        }
                    },
                    maxchecked: {
                        name: "maxchecked",
                        init: function(t, e) {
                            var i = t.parents("form").first().find('[name="' + t.attr("name") + '"]');
                            return i.bind("click.validation", function() {
                                t.trigger("change.validation", {
                                    includeEmpty: !0
                                })
                            }), {
                                maxchecked: t.data("validation" + e + "Maxchecked"),
                                elements: i
                            }
                        },
                        validate: function(t, e, i) {
                            return i.elements.filter(":checked").length > i.maxchecked && !i.negative || i.elements.filter(":checked").length <= i.maxchecked && i.negative
                        },
                        blockSubmit: !0
                    },
                    minchecked: {
                        name: "minchecked",
                        init: function(t, e) {
                            var i = t.parents("form").first().find('[name="' + t.attr("name") + '"]');
                            return i.bind("click.validation", function() {
                                t.trigger("change.validation", {
                                    includeEmpty: !0
                                })
                            }), {
                                minchecked: t.data("validation" + e + "Minchecked"),
                                elements: i
                            }
                        },
                        validate: function(t, e, i) {
                            return i.elements.filter(":checked").length < i.minchecked && !i.negative || i.elements.filter(":checked").length >= i.minchecked && i.negative
                        },
                        blockSubmit: !0
                    }
                },
                builtInValidators: {
                    email: {
                        name: "Email",
                        type: "shortcut",
                        shortcut: "validemail"
                    },
                    validemail: {
                        name: "Validemail",
                        type: "regex",
                        regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                        message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
                    },
                    passwordagain: {
                        name: "Passwordagain",
                        type: "match",
                        match: "password",
                        message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
                    },
                    positive: {
                        name: "Positive",
                        type: "shortcut",
                        shortcut: "number,positivenumber"
                    },
                    negative: {
                        name: "Negative",
                        type: "shortcut",
                        shortcut: "number,negativenumber"
                    },
                    number: {
                        name: "Number",
                        type: "regex",
                        regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                        message: "Must be a number<!-- data-validator-number-message to override -->"
                    },
                    integer: {
                        name: "Integer",
                        type: "regex",
                        regex: "[+-]?\\d+",
                        message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
                    },
                    positivenumber: {
                        name: "Positivenumber",
                        type: "min",
                        min: 0,
                        message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
                    },
                    negativenumber: {
                        name: "Negativenumber",
                        type: "max",
                        max: 0,
                        message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
                    },
                    required: {
                        name: "Required",
                        type: "required",
                        message: "This is required<!-- data-validator-required-message to override -->"
                    },
                    checkone: {
                        name: "Checkone",
                        type: "minchecked",
                        minchecked: 1,
                        message: "Check at least one option<!-- data-validation-checkone-message to override -->"
                    }
                }
            },
            a = function(t) {
                return t.toLowerCase().replace(/(^|\s)([a-z])/g, function(t, e, i) {
                    return e + i.toUpperCase()
                })
            },
            r = function(e) {
                var i = e.val(),
                    n = e.attr("type");
                return "checkbox" === n && (i = e.is(":checked") ? i : ""), "radio" === n && (i = t('input[name="' + e.attr("name") + '"]:checked').length > 0 ? i : ""), i
            };
        t.fn.jqBootstrapValidation = function(e) {
            return o.methods[e] ? o.methods[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? (t.error("Method " + e + " does not exist on jQuery.jqBootstrapValidation"), null) : o.methods.init.apply(this, arguments)
        }, t.jqBootstrapValidation = function(e) {
            t(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
        }
    }(jQuery),
    function() {
        var t, e, i = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var i, n;
                for (i in t) n = t[i], null != n && (e[i] = n);
                return e
            }, t.prototype.isMobile = function(t) {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
            }, t
        }(), e = this.WeakMap || (e = function() {
            function t() {
                this.keys = [], this.values = []
            }
            return t.prototype.get = function(t) {
                var e, i, n, o, a;
                for (a = this.keys, e = n = 0, o = a.length; n < o; e = ++n)
                    if (i = a[e], i === t) return this.values[e]
            }, t.prototype.set = function(t, e) {
                var i, n, o, a, r;
                for (r = this.keys, i = o = 0, a = r.length; o < a; i = ++o)
                    if (n = r[i], n === t) return void(this.values[i] = e);
                return this.keys.push(t), this.values.push(e)
            }, t
        }()), this.WOW = function() {
            function n(t) {
                null == t && (t = {}), this.scrollCallback = i(this.scrollCallback, this), this.scrollHandler = i(this.scrollHandler, this), this.start = i(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new e
            }
            return n.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0
            }, n.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : document.addEventListener("DOMContentLoaded", this.start)
            }, n.prototype.start = function() {
                var t, e, i, n;
                if (this.boxes = this.element.getElementsByClassName(this.config.boxClass), this.boxes.length) {
                    if (this.disabled()) return this.resetStyle();
                    for (n = this.boxes, e = 0, i = n.length; e < i; e++) t = n[e], this.applyStyle(t, !0);
                    return window.addEventListener("scroll", this.scrollHandler, !1), window.addEventListener("resize", this.scrollHandler, !1), this.interval = setInterval(this.scrollCallback, 50)
                }
            }, n.prototype.stop = function() {
                if (window.removeEventListener("scroll", this.scrollHandler, !1), window.removeEventListener("resize", this.scrollHandler, !1), null != this.interval) return clearInterval(this.interval)
            }, n.prototype.show = function(t) {
                return this.applyStyle(t), t.className = "" + t.className + " " + this.config.animateClass
            }, n.prototype.applyStyle = function(t, e) {
                var i, n, o;
                return n = t.getAttribute("data-wow-duration"), i = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(a) {
                    return function() {
                        return a.customStyle(t, e, n, i, o)
                    }
                }(this))
            }, n.prototype.animate = function() {
                return "requestAnimationFrame" in window ? function(t) {
                    return window.requestAnimationFrame(t)
                } : function(t) {
                    return t()
                }
            }(), n.prototype.resetStyle = function() {
                var t, e, i, n, o;
                for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) t = n[e], o.push(t.setAttribute("style", "visibility: visible;"));
                return o
            }, n.prototype.customStyle = function(t, e, i, n, o) {
                return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", i && this.vendorSet(t.style, {
                    animationDuration: i
                }), n && this.vendorSet(t.style, {
                    animationDelay: n
                }), o && this.vendorSet(t.style, {
                    animationIterationCount: o
                }), this.vendorSet(t.style, {
                    animationName: e ? "none" : this.cachedAnimationName(t)
                }), t
            }, n.prototype.vendors = ["moz", "webkit"], n.prototype.vendorSet = function(t, e) {
                var i, n, o, a;
                a = [];
                for (i in e) n = e[i], t["" + i] = n, a.push(function() {
                    var e, a, r, s;
                    for (r = this.vendors, s = [], e = 0, a = r.length; e < a; e++) o = r[e], s.push(t["" + o + i.charAt(0).toUpperCase() + i.substr(1)] = n);
                    return s
                }.call(this));
                return a
            }, n.prototype.vendorCSS = function(t, e) {
                var i, n, o, a, r, s;
                for (n = window.getComputedStyle(t), i = n.getPropertyCSSValue(e), s = this.vendors, a = 0, r = s.length; a < r; a++) o = s[a], i = i || n.getPropertyCSSValue("-" + o + "-" + e);
                return i
            }, n.prototype.animationName = function(t) {
                var e;
                try {
                    e = this.vendorCSS(t, "animation-name").cssText
                } catch (i) {
                    e = window.getComputedStyle(t).getPropertyValue("animation-name")
                }
                return "none" === e ? "" : e
            }, n.prototype.cacheAnimationName = function(t) {
                return this.animationNameCache.set(t, this.animationName(t))
            }, n.prototype.cachedAnimationName = function(t) {
                return this.animationNameCache.get(t)
            }, n.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, n.prototype.scrollCallback = function() {
                var t;
                if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                        var e, i, n, o;
                        for (n = this.boxes, o = [], e = 0, i = n.length; e < i; e++) t = n[e], t && (this.isVisible(t) ? this.show(t) : o.push(t));
                        return o
                    }.call(this), !this.boxes.length)) return this.stop()
            }, n.prototype.offsetTop = function(t) {
                for (var e; void 0 === t.offsetTop;) t = t.parentNode;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, n.prototype.isVisible = function(t) {
                var e, i, n, o, a;
                return i = t.getAttribute("data-wow-offset") || this.config.offset, a = window.pageYOffset, o = a + this.element.clientHeight - i, n = this.offsetTop(t), e = n + t.clientHeight, n <= o && e >= a
            }, n.prototype.util = function() {
                return this._util || (this._util = new t)
            }, n.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(navigator.userAgent)
            }, n
        }()
    }.call(this),
    /*! Superslides - v0.6.3-wip - 2013-12-17
     * https://github.com/nicinabox/superslides
     * Copyright (c) 2013 Nic Aitch; Licensed MIT */
    function(t, e) {
        var i, n = "superslides";
        i = function(i, n) {
            this.options = e.extend({
                play: !1,
                animation_speed: 600,
                animation_easing: "swing",
                animation: "slide",
                inherit_width_from: t,
                inherit_height_from: t,
                pagination: !0,
                hashchange: !1,
                scrollable: !0,
                elements: {
                    preserve: ".preserve",
                    nav: ".slides-navigation",
                    container: ".slides-container",
                    pagination: ".slides-pagination"
                }
            }, n);
            var o = this,
                a = e("<div>", {
                    "class": "slides-control"
                }),
                r = 1;
            this.$el = e(i), this.$container = this.$el.find(this.options.elements.container);
            var s = function() {
                    return r = o._findMultiplier(), o.$el.on("click", o.options.elements.nav + " a", function(t) {
                        t.preventDefault(), o.stop(), e(this).hasClass("next") ? o.animate("next", function() {
                            o.start()
                        }) : o.animate("prev", function() {
                            o.start()
                        })
                    }), e(document).on("keyup", function(t) {
                        37 === t.keyCode && o.animate("prev"), 39 === t.keyCode && o.animate("next")
                    }), e(t).on("resize", function() {
                        setTimeout(function() {
                            var t = o.$container.children();
                            o.width = o._findWidth(), o.height = o._findHeight(), t.css({
                                width: o.width,
                                left: o.width
                            }), o.css.containers(), o.css.images()
                        }, 10)
                    }), o.options.hashchange && e(t).on("hashchange", function() {
                        var t, e = o._parseHash();
                        t = o._upcomingSlide(e), t >= 0 && t !== o.current && o.animate(t)
                    }), o.pagination._events(), o.start(), o
                },
                l = {
                    containers: function() {
                        o.init ? (o.$el.css({
                            height: o.height
                        }), o.$control.css({
                            width: o.width * r,
                            left: -o.width
                        }), o.$container.css({})) : (e("body").css({
                            margin: 0
                        }), o.$el.css({
                            position: "relative",
                            overflow: "hidden",
                            width: "100%",
                            height: o.height
                        }), o.$control.css({
                            position: "relative",
                            transform: "translate3d(0)",
                            height: "100%",
                            width: o.width * r,
                            left: -o.width
                        }), o.$container.css({
                            display: "none",
                            margin: "0",
                            padding: "0",
                            listStyle: "none",
                            position: "relative",
                            height: "100%"
                        })), 1 === o.size() && o.$el.find(o.options.elements.nav).hide()
                    },
                    images: function() {
                        var t = o.$container.find("img").not(o.options.elements.preserve);
                        t.removeAttr("width").removeAttr("height").css({
                            "-webkit-backface-visibility": "hidden",
                            "-ms-interpolation-mode": "bicubic",
                            position: "absolute",
                            left: "0",
                            top: "0",
                            "z-index": "-1",
                            "max-width": "none"
                        }), t.each(function() {
                            var t = o.image._aspectRatio(this),
                                i = this;
                            if (e.data(this, "processed")) o.image._scale(i, t), o.image._center(i, t);
                            else {
                                var n = new Image;
                                n.onload = function() {
                                    o.image._scale(i, t), o.image._center(i, t), e.data(i, "processed", !0)
                                }, n.src = this.src
                            }
                        })
                    },
                    children: function() {
                        var t = o.$container.children();
                        t.is("img") && (t.each(function() {
                            if (e(this).is("img")) {
                                e(this).wrap("<div>");
                                var t = e(this).attr("id");
                                e(this).removeAttr("id"), e(this).parent().attr("id", t)
                            }
                        }), t = o.$container.children()), o.init || t.css({
                            display: "none",
                            left: 2 * o.width
                        }), t.css({
                            position: "absolute",
                            overflow: "hidden",
                            height: "100%",
                            width: o.width,
                            top: 0,
                            zIndex: 0
                        })
                    }
                },
                c = {
                    slide: function(t, e) {
                        var i = o.$container.children(),
                            n = i.eq(t.upcoming_slide);
                        n.css({
                            left: t.upcoming_position,
                            display: "block"
                        }), o.$control.animate({
                            left: t.offset
                        }, o.options.animation_speed, o.options.animation_easing, function() {
                            o.size() > 1 && (o.$control.css({
                                left: -o.width
                            }), i.eq(t.upcoming_slide).css({
                                left: o.width,
                                zIndex: 2
                            }), t.outgoing_slide >= 0 && i.eq(t.outgoing_slide).css({
                                left: o.width,
                                display: "none",
                                zIndex: 0
                            })), e()
                        })
                    },
                    fade: function(t, e) {
                        var i = this,
                            n = i.$container.children(),
                            o = n.eq(t.outgoing_slide),
                            a = n.eq(t.upcoming_slide);
                        a.css({
                            left: this.width,
                            opacity: 0,
                            display: "block"
                        }).animate({
                            opacity: 1
                        }, i.options.animation_speed, i.options.animation_easing), o.animate({
                            opacity: 0
                        }), i.$control.animate({
                            opacity: 1,
                            zIndex: 2,
                            display: "block"
                        }, i.options.animation_speed, i.options.animation_easing, function() {
                            i.size() > 1 && (i.$control.css({
                                left: -i.width
                            }), n.eq(t.upcoming_slide).css({
                                zIndex: 2
                            }), t.outgoing_slide >= 0 && n.eq(t.outgoing_slide).css({
                                opacity: 1,
                                display: "none",
                                zIndex: 0
                            })), e()
                        })
                    }
                };
            c = e.extend(c, e.fn.superslides.fx);
            var u = {
                    _centerY: function(t) {
                        var i = e(t);
                        i.css({
                            top: (o.height - i.height()) / 2
                        })
                    },
                    _centerX: function(t) {
                        var i = e(t);
                        i.css({
                            left: (o.width - i.width()) / 2
                        })
                    },
                    _center: function(t) {
                        o.image._centerX(t), o.image._centerY(t)
                    },
                    _aspectRatio: function(t) {
                        if (!t.naturalHeight && !t.naturalWidth) {
                            var e = new Image;
                            e.src = t.src, t.naturalHeight = e.height, t.naturalWidth = e.width
                        }
                        return t.naturalHeight / t.naturalWidth
                    },
                    _scale: function(t, i) {
                        i = i || o.image._aspectRatio(t);
                        var n = o.height / o.width,
                            a = e(t);
                        n > i ? a.css({
                            height: o.height,
                            width: o.height / i
                        }) : a.css({
                            height: o.width * i,
                            width: o.width
                        })
                    }
                },
                d = {
                    _setCurrent: function(t) {
                        if (o.$pagination) {
                            var e = o.$pagination.children();
                            e.removeClass("current"), e.eq(t).addClass("current")
                        }
                    },
                    _addItem: function(t) {
                        var i = t + 1,
                            n = i,
                            a = o.$container.children().eq(t),
                            r = a.attr("id");
                        r && (n = r);
                        var s = e("<a>", {
                            href: "#" + n,
                            text: n
                        });
                        s.appendTo(o.$pagination)
                    },
                    _setup: function() {
                        if (o.options.pagination && 1 !== o.size()) {
                            var t = e("<nav>", {
                                "class": o.options.elements.pagination.replace(/^\./, "")
                            });
                            o.$pagination = t.appendTo(o.$el);
                            for (var i = 0; i < o.size(); i++) o.pagination._addItem(i)
                        }
                    },
                    _events: function() {
                        o.$el.on("click", o.options.elements.pagination + " a", function(t) {
                            t.preventDefault();
                            var e, i = o._parseHash(this.hash);
                            e = o._upcomingSlide(i, !0), e !== o.current && o.animate(e, function() {
                                o.start()
                            })
                        })
                    }
                };
            return this.css = l, this.image = u, this.pagination = d, this.fx = c, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(a).parent(".slides-control"), o._findPositions(), o.width = o._findWidth(), o.height = o._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), s()
        }, i.prototype = {
            _findWidth: function() {
                return e(this.options.inherit_width_from).width()
            },
            _findHeight: function() {
                return e(this.options.inherit_height_from).height()
            },
            _findMultiplier: function() {
                return 1 === this.size() ? 1 : 3
            },
            _upcomingSlide: function(t, e) {
                if (e && !isNaN(t) && (t -= 1), /next/.test(t)) return this._nextInDom();
                if (/prev/.test(t)) return this._prevInDom();
                if (/\d/.test(t)) return +t;
                if (t && /\w/.test(t)) {
                    var i = this._findSlideById(t);
                    return i >= 0 ? i : 0
                }
                return 0
            },
            _findSlideById: function(t) {
                return this.$container.find("#" + t).index()
            },
            _findPositions: function(t, e) {
                e = e || this, void 0 === t && (t = -1), e.current = t, e.next = e._nextInDom(), e.prev = e._prevInDom()
            },
            _nextInDom: function() {
                var t = this.current + 1;
                return t === this.size() && (t = 0), t
            },
            _prevInDom: function() {
                var t = this.current - 1;
                return t < 0 && (t = this.size() - 1), t
            },
            _parseHash: function(e) {
                return e = e || t.location.hash, e = e.replace(/^#/, ""), e && !isNaN(+e) && (e = +e), e
            },
            size: function() {
                return this.$container.children().length
            },
            destroy: function() {
                return this.$el.removeData()
            },
            update: function() {
                this.css.children(), this.css.containers(), this.css.images(), this.pagination._addItem(this.size()), this._findPositions(this.current), this.$el.trigger("updated.slides")
            },
            stop: function() {
                clearInterval(this.play_id), delete this.play_id, this.$el.trigger("stopped.slides")
            },
            start: function() {
                var i = this;
                i.options.hashchange ? e(t).trigger("hashchange") : this.animate(), this.options.play && (this.play_id && this.stop(), this.play_id = setInterval(function() {
                    i.animate()
                }, this.options.play)), this.$el.trigger("started.slides")
            },
            animate: function(e, i) {
                var n = this,
                    o = {};
                if (!(this.animating || (this.animating = !0, void 0 === e && (e = "next"), o.upcoming_slide = this._upcomingSlide(e), o.upcoming_slide >= this.size()))) {
                    if (o.outgoing_slide = this.current, o.upcoming_position = 2 * this.width, o.offset = -o.upcoming_position, ("prev" === e || e < o.outgoing_slide) && (o.upcoming_position = 0, o.offset = 0), n.size() > 1 && n.pagination._setCurrent(o.upcoming_slide), n.options.hashchange) {
                        var a = o.upcoming_slide + 1,
                            r = n.$container.children(":eq(" + o.upcoming_slide + ")").attr("id");
                        r ? t.location.hash = r : t.location.hash = a
                    }
                    1 === n.size() && (n.stop(), n.options.play = 0, n.options.animation_speed = 0, o.upcoming_slide = 0, o.outgoing_slide = -1), n.$el.trigger("animating.slides", [o]), n.animation(o, function() {
                        n._findPositions(o.upcoming_slide, n), "function" == typeof i && i(), n.animating = !1, n.$el.trigger("animated.slides"), n.init || (n.$el.trigger("init.slides"), n.init = !0, n.$container.fadeIn("fast"))
                    })
                }
            }
        }, e.fn[n] = function(t, o) {
            var a = [];
            return this.each(function() {
                var r, s, l;
                if (r = e(this), s = r.data(n), l = "object" == typeof t && t, s || (a = r.data(n, s = new i(this, l))), "string" == typeof t && (a = s[t], "function" == typeof a)) return a = a.call(s, o)
            }), a
        }, e.fn[n].fx = {}
    }(this, jQuery),
    function(t) {
        var e = !0;
        t.flexslider = function(i, n) {
            var o = t(i);
            o.vars = t.extend({}, t.flexslider.defaults, n);
            var a, r = o.vars.namespace,
                s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                l = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && o.vars.touch,
                c = "click touchend MSPointerUp keyup",
                u = "",
                d = "vertical" === o.vars.direction,
                p = o.vars.reverse,
                m = o.vars.itemWidth > 0,
                h = "fade" === o.vars.animation,
                f = "" !== o.vars.asNavFor,
                v = {};
            t.data(i, "flexslider", o), v = {
                init: function() {
                    o.animating = !1, o.currentSlide = parseInt(o.vars.startAt ? o.vars.startAt : 0, 10), isNaN(o.currentSlide) && (o.currentSlide = 0), o.animatingTo = o.currentSlide, o.atEnd = 0 === o.currentSlide || o.currentSlide === o.last, o.containerSelector = o.vars.selector.substr(0, o.vars.selector.search(" ")), o.slides = t(o.vars.selector, o), o.container = t(o.containerSelector, o), o.count = o.slides.length, o.syncExists = t(o.vars.sync).length > 0, "slide" === o.vars.animation && (o.vars.animation = "swing"), o.prop = d ? "top" : "marginLeft", o.args = {}, o.manualPause = !1, o.stopped = !1, o.started = !1, o.startTimeout = null, o.transitions = !o.vars.video && !h && o.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return o.pfx = e[i].replace("Perspective", "").toLowerCase(), o.prop = "-" + o.pfx + "-transform", !0;
                        return !1
                    }(), o.ensureAnimationEnd = "", "" !== o.vars.controlsContainer && (o.controlsContainer = t(o.vars.controlsContainer).length > 0 && t(o.vars.controlsContainer)), "" !== o.vars.manualControls && (o.manualControls = t(o.vars.manualControls).length > 0 && t(o.vars.manualControls)), "" !== o.vars.customDirectionNav && (o.customDirectionNav = 2 === t(o.vars.customDirectionNav).length && t(o.vars.customDirectionNav)), o.vars.randomize && (o.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), o.container.empty().append(o.slides)), o.doMath(), o.setup("init"), o.vars.controlNav && v.controlNav.setup(), o.vars.directionNav && v.directionNav.setup(), o.vars.keyboard && (1 === t(o.containerSelector).length || o.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!o.animating && (39 === e || 37 === e)) {
                            var i = 39 === e ? o.getTarget("next") : 37 === e && o.getTarget("prev");
                            o.flexAnimate(i, o.vars.pauseOnAction)
                        }
                    }), o.vars.mousewheel && o.bind("mousewheel", function(t, e, i, n) {
                        t.preventDefault();
                        var a = e < 0 ? o.getTarget("next") : o.getTarget("prev");
                        o.flexAnimate(a, o.vars.pauseOnAction)
                    }), o.vars.pausePlay && v.pausePlay.setup(), o.vars.slideshow && o.vars.pauseInvisible && v.pauseInvisible.init(), o.vars.slideshow && (o.vars.pauseOnHover && o.hover(function() {
                        o.manualPlay || o.manualPause || o.pause()
                    }, function() {
                        o.manualPause || o.manualPlay || o.stopped || o.play()
                    }), o.vars.pauseInvisible && v.pauseInvisible.isHidden() || (o.vars.initDelay > 0 ? o.startTimeout = setTimeout(o.play, o.vars.initDelay) : o.play())), f && v.asNav.setup(), l && o.vars.touch && v.touch(), (!h || h && o.vars.smoothHeight) && t(window).bind("resize orientationchange focus", v.resize), o.find("img").attr("draggable", "false"), setTimeout(function() {
                        o.vars.start(o)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        o.asNav = !0, o.animatingTo = Math.floor(o.currentSlide / o.move), o.currentItem = o.currentSlide, o.slides.removeClass(r + "active-slide").eq(o.currentItem).addClass(r + "active-slide"), s ? (i._slider = o, o.slides.each(function() {
                            var e = this;
                            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), e.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var i = t(this),
                                    n = i.index();
                                t(o.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (o.direction = o.currentItem < n ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : o.slides.on(c, function(e) {
                            e.preventDefault();
                            var i = t(this),
                                n = i.index(),
                                a = i.offset().left - t(o).scrollLeft();
                            a <= 0 && i.hasClass(r + "active-slide") ? o.flexAnimate(o.getTarget("prev"), !0) : t(o.vars.asNavFor).data("flexslider").animating || i.hasClass(r + "active-slide") || (o.direction = o.currentItem < n ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        o.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var e, i, n = "thumbnails" === o.vars.controlNav ? "control-thumbs" : "control-paging",
                            a = 1;
                        if (o.controlNavScaffold = t('<ol class="' + r + "control-nav " + r + n + '"></ol>'), o.pagingCount > 1)
                            for (var s = 0; s < o.pagingCount; s++) {
                                i = o.slides.eq(s), void 0 === i.attr("data-thumb-alt") && i.attr("data-thumb-alt", "");
                                var l = "" !== i.attr("data-thumb-alt") ? l = ' alt="' + i.attr("data-thumb-alt") + '"' : "";
                                if (e = "thumbnails" === o.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + a + "</a>", "thumbnails" === o.vars.controlNav && !0 === o.vars.thumbCaptions) {
                                    var d = i.attr("data-thumbcaption");
                                    "" !== d && void 0 !== d && (e += '<span class="' + r + 'caption">' + d + "</span>")
                                }
                                o.controlNavScaffold.append("<li>" + e + "</li>"), a++
                            }
                        o.controlsContainer ? t(o.controlsContainer).append(o.controlNavScaffold) : o.append(o.controlNavScaffold), v.controlNav.set(), v.controlNav.active(), o.controlNavScaffold.delegate("a, img", c, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var i = t(this),
                                    n = o.controlNav.index(i);
                                i.hasClass(r + "active") || (o.direction = n > o.currentSlide ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        o.controlNav = o.manualControls, v.controlNav.active(), o.controlNav.bind(c, function(e) {
                            if (e.preventDefault(), "" === u || u === e.type) {
                                var i = t(this),
                                    n = o.controlNav.index(i);
                                i.hasClass(r + "active") || (n > o.currentSlide ? o.direction = "next" : o.direction = "prev", o.flexAnimate(n, o.vars.pauseOnAction))
                            }
                            "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var e = "thumbnails" === o.vars.controlNav ? "img" : "a";
                        o.controlNav = t("." + r + "control-nav li " + e, o.controlsContainer ? o.controlsContainer : o)
                    },
                    active: function() {
                        o.controlNav.removeClass(r + "active").eq(o.animatingTo).addClass(r + "active")
                    },
                    update: function(e, i) {
                        o.pagingCount > 1 && "add" === e ? o.controlNavScaffold.append(t('<li><a href="#">' + o.count + "</a></li>")) : 1 === o.pagingCount ? o.controlNavScaffold.find("li").remove() : o.controlNav.eq(i).closest("li").remove(), v.controlNav.set(), o.pagingCount > 1 && o.pagingCount !== o.controlNav.length ? o.update(i, e) : v.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var e = t('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + o.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + o.vars.nextText + "</a></li></ul>");
                        o.customDirectionNav ? o.directionNav = o.customDirectionNav : o.controlsContainer ? (t(o.controlsContainer).append(e), o.directionNav = t("." + r + "direction-nav li a", o.controlsContainer)) : (o.append(e), o.directionNav = t("." + r + "direction-nav li a", o)), v.directionNav.update(), o.directionNav.bind(c, function(e) {
                            e.preventDefault();
                            var i;
                            "" !== u && u !== e.type || (i = t(this).hasClass(r + "next") ? o.getTarget("next") : o.getTarget("prev"), o.flexAnimate(i, o.vars.pauseOnAction)), "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = r + "disabled";
                        1 === o.pagingCount ? o.directionNav.addClass(t).attr("tabindex", "-1") : o.vars.animationLoop ? o.directionNav.removeClass(t).removeAttr("tabindex") : 0 === o.animatingTo ? o.directionNav.removeClass(t).filter("." + r + "prev").addClass(t).attr("tabindex", "-1") : o.animatingTo === o.last ? o.directionNav.removeClass(t).filter("." + r + "next").addClass(t).attr("tabindex", "-1") : o.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var e = t('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
                        o.controlsContainer ? (o.controlsContainer.append(e), o.pausePlay = t("." + r + "pauseplay a", o.controlsContainer)) : (o.append(e), o.pausePlay = t("." + r + "pauseplay a", o)), v.pausePlay.update(o.vars.slideshow ? r + "pause" : r + "play"), o.pausePlay.bind(c, function(e) {
                            e.preventDefault(), "" !== u && u !== e.type || (t(this).hasClass(r + "pause") ? (o.manualPause = !0, o.manualPlay = !1, o.pause()) : (o.manualPause = !1, o.manualPlay = !0, o.play())), "" === u && (u = e.type), v.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? o.pausePlay.removeClass(r + "pause").addClass(r + "play").html(o.vars.playText) : o.pausePlay.removeClass(r + "play").addClass(r + "pause").html(o.vars.pauseText)
                    }
                },
                touch: function() {
                    function t(t) {
                        t.stopPropagation(), o.animating ? t.preventDefault() : (o.pause(), i._gesture.addPointer(t.pointerId), _ = 0, c = d ? o.h : o.w, f = Number(new Date), l = m && p && o.animatingTo === o.last ? 0 : m && p ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : m && o.currentSlide === o.last ? o.limit : m ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : p ? (o.last - o.currentSlide + o.cloneOffset) * c : (o.currentSlide + o.cloneOffset) * c)
                    }

                    function e(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            var n = -t.translationX,
                                o = -t.translationY;
                            return _ += d ? o : n, u = _, b = d ? Math.abs(_) < Math.abs(-n) : Math.abs(_) < Math.abs(-o), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                i._gesture.stop()
                            }) : void((!b || Number(new Date) - f > 500) && (t.preventDefault(), !h && e.transitions && (e.vars.animationLoop || (u = _ / (0 === e.currentSlide && _ < 0 || e.currentSlide === e.last && _ > 0 ? Math.abs(_) / c + 2 : 1)), e.setProps(l + u, "setTouch"))))
                        }
                    }

                    function n(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            if (e.animatingTo === e.currentSlide && !b && null !== u) {
                                var i = p ? -u : u,
                                    n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
                                e.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(i) > 50 || Math.abs(i) > c / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : h || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                            }
                            a = null, r = null, u = null, l = null, _ = 0
                        }
                    }
                    var a, r, l, c, u, f, v, g, y, b = !1,
                        w = 0,
                        x = 0,
                        _ = 0;
                    s ? (i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", t, !1), i._slider = o, i.addEventListener("MSGestureChange", e, !1), i.addEventListener("MSGestureEnd", n, !1)) : (v = function(t) {
                        o.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (o.pause(), c = d ? o.h : o.w, f = Number(new Date), w = t.touches[0].pageX, x = t.touches[0].pageY, l = m && p && o.animatingTo === o.last ? 0 : m && p ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : m && o.currentSlide === o.last ? o.limit : m ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : p ? (o.last - o.currentSlide + o.cloneOffset) * c : (o.currentSlide + o.cloneOffset) * c, a = d ? x : w, r = d ? w : x, i.addEventListener("touchmove", g, !1), i.addEventListener("touchend", y, !1))
                    }, g = function(t) {
                        w = t.touches[0].pageX, x = t.touches[0].pageY, u = d ? a - x : a - w, b = d ? Math.abs(u) < Math.abs(w - r) : Math.abs(u) < Math.abs(x - r);
                        var e = 500;
                        (!b || Number(new Date) - f > e) && (t.preventDefault(), !h && o.transitions && (o.vars.animationLoop || (u /= 0 === o.currentSlide && u < 0 || o.currentSlide === o.last && u > 0 ? Math.abs(u) / c + 2 : 1), o.setProps(l + u, "setTouch")))
                    }, y = function(t) {
                        if (i.removeEventListener("touchmove", g, !1), o.animatingTo === o.currentSlide && !b && null !== u) {
                            var e = p ? -u : u,
                                n = e > 0 ? o.getTarget("next") : o.getTarget("prev");
                            o.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(e) > 50 || Math.abs(e) > c / 2) ? o.flexAnimate(n, o.vars.pauseOnAction) : h || o.flexAnimate(o.currentSlide, o.vars.pauseOnAction, !0)
                        }
                        i.removeEventListener("touchend", y, !1), a = null, r = null, u = null, l = null
                    }, i.addEventListener("touchstart", v, !1))
                },
                resize: function() {
                    !o.animating && o.is(":visible") && (m || o.doMath(), h ? v.smoothHeight() : m ? (o.slides.width(o.computedW), o.update(o.pagingCount), o.setProps()) : d ? (o.viewport.height(o.h), o.setProps(o.h, "setTotal")) : (o.vars.smoothHeight && v.smoothHeight(), o.newSlides.width(o.computedW), o.setProps(o.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!d || h) {
                        var e = h ? o : o.viewport;
                        t ? e.animate({
                            height: o.slides.eq(o.animatingTo).innerHeight()
                        }, t) : e.innerHeight(o.slides.eq(o.animatingTo).innerHeight())
                    }
                },
                sync: function(e) {
                    var i = t(o.vars.sync).data("flexslider"),
                        n = o.animatingTo;
                    switch (e) {
                        case "animate":
                            i.flexAnimate(n, o.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            i.playing || i.asNav || i.play();
                            break;
                        case "pause":
                            i.pause()
                    }
                },
                uniqueID: function(e) {
                    return e.filter("[id]").add(e.find("[id]")).each(function() {
                        var e = t(this);
                        e.attr("id", e.attr("id") + "_clone")
                    }), e
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = v.pauseInvisible.getHiddenProp();
                        if (t) {
                            var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(e, function() {
                                v.pauseInvisible.isHidden() ? o.startTimeout ? clearTimeout(o.startTimeout) : o.pause() : o.started ? o.play() : o.vars.initDelay > 0 ? setTimeout(o.play, o.vars.initDelay) : o.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var t = v.pauseInvisible.getHiddenProp();
                        return !!t && document[t]
                    },
                    getHiddenProp: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(a), a = setTimeout(function() {
                        u = ""
                    }, 3e3)
                }
            }, o.flexAnimate = function(e, i, n, a, s) {
                if (o.vars.animationLoop || e === o.currentSlide || (o.direction = e > o.currentSlide ? "next" : "prev"), f && 1 === o.pagingCount && (o.direction = o.currentItem < e ? "next" : "prev"), !o.animating && (o.canAdvance(e, s) || n) && o.is(":visible")) {
                    if (f && a) {
                        var c = t(o.vars.asNavFor).data("flexslider");
                        if (o.atEnd = 0 === e || e === o.count - 1, c.flexAnimate(e, !0, !1, !0, s), o.direction = o.currentItem < e ? "next" : "prev", c.direction = o.direction, Math.ceil((e + 1) / o.visible) - 1 === o.currentSlide || 0 === e) return o.currentItem = e, o.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), !1;
                        o.currentItem = e, o.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), e = Math.floor(e / o.visible)
                    }
                    if (o.animating = !0, o.animatingTo = e, i && o.pause(), o.vars.before(o), o.syncExists && !s && v.sync("animate"), o.vars.controlNav && v.controlNav.active(), m || o.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), o.atEnd = 0 === e || e === o.last, o.vars.directionNav && v.directionNav.update(), e === o.last && (o.vars.end(o), o.vars.animationLoop || o.pause()), h) l ? (o.slides.eq(o.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), o.slides.eq(e).css({
                        opacity: 1,
                        zIndex: 2
                    }), o.wrapup(b)) : (o.slides.eq(o.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, o.vars.animationSpeed, o.vars.easing), o.slides.eq(e).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, o.vars.animationSpeed, o.vars.easing, o.wrapup));
                    else {
                        var u, g, y, b = d ? o.slides.filter(":first").height() : o.computedW;
                        m ? (u = o.vars.itemMargin, y = (o.itemW + u) * o.move * o.animatingTo, g = y > o.limit && 1 !== o.visible ? o.limit : y) : g = 0 === o.currentSlide && e === o.count - 1 && o.vars.animationLoop && "next" !== o.direction ? p ? (o.count + o.cloneOffset) * b : 0 : o.currentSlide === o.last && 0 === e && o.vars.animationLoop && "prev" !== o.direction ? p ? 0 : (o.count + 1) * b : p ? (o.count - 1 - e + o.cloneOffset) * b : (e + o.cloneOffset) * b, o.setProps(g, "", o.vars.animationSpeed), o.transitions ? (o.vars.animationLoop && o.atEnd || (o.animating = !1, o.currentSlide = o.animatingTo), o.container.unbind("webkitTransitionEnd transitionend"), o.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(o.ensureAnimationEnd), o.wrapup(b)
                        }), clearTimeout(o.ensureAnimationEnd), o.ensureAnimationEnd = setTimeout(function() {
                            o.wrapup(b)
                        }, o.vars.animationSpeed + 100)) : o.container.animate(o.args, o.vars.animationSpeed, o.vars.easing, function() {
                            o.wrapup(b)
                        })
                    }
                    o.vars.smoothHeight && v.smoothHeight(o.vars.animationSpeed)
                }
            }, o.wrapup = function(t) {
                h || m || (0 === o.currentSlide && o.animatingTo === o.last && o.vars.animationLoop ? o.setProps(t, "jumpEnd") : o.currentSlide === o.last && 0 === o.animatingTo && o.vars.animationLoop && o.setProps(t, "jumpStart")), o.animating = !1, o.currentSlide = o.animatingTo, o.vars.after(o)
            }, o.animateSlides = function() {
                !o.animating && e && o.flexAnimate(o.getTarget("next"))
            }, o.pause = function() {
                clearInterval(o.animatedSlides), o.animatedSlides = null, o.playing = !1, o.vars.pausePlay && v.pausePlay.update("play"), o.syncExists && v.sync("pause")
            }, o.play = function() {
                o.playing && clearInterval(o.animatedSlides), o.animatedSlides = o.animatedSlides || setInterval(o.animateSlides, o.vars.slideshowSpeed), o.started = o.playing = !0, o.vars.pausePlay && v.pausePlay.update("pause"), o.syncExists && v.sync("play")
            }, o.stop = function() {
                o.pause(), o.stopped = !0
            }, o.canAdvance = function(t, e) {
                var i = f ? o.pagingCount - 1 : o.last;
                return !!e || (!(!f || o.currentItem !== o.count - 1 || 0 !== t || "prev" !== o.direction) || (!f || 0 !== o.currentItem || t !== o.pagingCount - 1 || "next" === o.direction) && (!(t === o.currentSlide && !f) && (!!o.vars.animationLoop || (!o.atEnd || 0 !== o.currentSlide || t !== i || "next" === o.direction) && (!o.atEnd || o.currentSlide !== i || 0 !== t || "next" !== o.direction))))
            }, o.getTarget = function(t) {
                return o.direction = t, "next" === t ? o.currentSlide === o.last ? 0 : o.currentSlide + 1 : 0 === o.currentSlide ? o.last : o.currentSlide - 1
            }, o.setProps = function(t, e, i) {
                var n = function() {
                    var i = t ? t : (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo,
                        n = function() {
                            if (m) return "setTouch" === e ? t : p && o.animatingTo === o.last ? 0 : p ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : o.animatingTo === o.last ? o.limit : i;
                            switch (e) {
                                case "setTotal":
                                    return p ? (o.count - 1 - o.currentSlide + o.cloneOffset) * t : (o.currentSlide + o.cloneOffset) * t;
                                case "setTouch":
                                    return p ? t : t;
                                case "jumpEnd":
                                    return p ? t : o.count * t;
                                case "jumpStart":
                                    return p ? o.count * t : t;
                                default:
                                    return t
                            }
                        }();
                    return n * -1 + "px"
                }();
                o.transitions && (n = d ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", o.container.css("-" + o.pfx + "-transition-duration", i), o.container.css("transition-duration", i)), o.args[o.prop] = n, (o.transitions || void 0 === i) && o.container.css(o.args), o.container.css("transform", n)
            }, o.setup = function(e) {
                if (h) o.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === e && (l ? o.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + o.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == o.vars.fadeFirstSlide ? o.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : o.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, o.vars.animationSpeed, o.vars.easing)), o.vars.smoothHeight && v.smoothHeight();
                else {
                    var i, n;
                    "init" === e && (o.viewport = t('<div class="' + r + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(o).append(o.container), o.cloneCount = 0, o.cloneOffset = 0, p && (n = t.makeArray(o.slides).reverse(), o.slides = t(n), o.container.empty().append(o.slides))), o.vars.animationLoop && !m && (o.cloneCount = 2, o.cloneOffset = 1, "init" !== e && o.container.find(".clone").remove(), o.container.append(v.uniqueID(o.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(v.uniqueID(o.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), o.newSlides = t(o.vars.selector, o), i = p ? o.count - 1 - o.currentSlide + o.cloneOffset : o.currentSlide + o.cloneOffset, d && !m ? (o.container.height(200 * (o.count + o.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        o.newSlides.css({
                            display: "block"
                        }), o.doMath(), o.viewport.height(o.h), o.setProps(i * o.h, "init")
                    }, "init" === e ? 100 : 0)) : (o.container.width(200 * (o.count + o.cloneCount) + "%"), o.setProps(i * o.computedW, "init"), setTimeout(function() {
                        o.doMath(), o.newSlides.css({
                            width: o.computedW,
                            marginRight: o.computedM,
                            "float": "left",
                            display: "block"
                        }), o.vars.smoothHeight && v.smoothHeight()
                    }, "init" === e ? 100 : 0))
                }
                m || o.slides.removeClass(r + "active-slide").eq(o.currentSlide).addClass(r + "active-slide"), o.vars.init(o)
            }, o.doMath = function() {
                var t = o.slides.first(),
                    e = o.vars.itemMargin,
                    i = o.vars.minItems,
                    n = o.vars.maxItems;
                o.w = void 0 === o.viewport ? o.width() : o.viewport.width(), o.h = t.height(), o.boxPadding = t.outerWidth() - t.width(), m ? (o.itemT = o.vars.itemWidth + e, o.itemM = e, o.minW = i ? i * o.itemT : o.w, o.maxW = n ? n * o.itemT - e : o.w, o.itemW = o.minW > o.w ? (o.w - e * (i - 1)) / i : o.maxW < o.w ? (o.w - e * (n - 1)) / n : o.vars.itemWidth > o.w ? o.w : o.vars.itemWidth, o.visible = Math.floor(o.w / o.itemW), o.move = o.vars.move > 0 && o.vars.move < o.visible ? o.vars.move : o.visible, o.pagingCount = Math.ceil((o.count - o.visible) / o.move + 1), o.last = o.pagingCount - 1, o.limit = 1 === o.pagingCount ? 0 : o.vars.itemWidth > o.w ? o.itemW * (o.count - 1) + e * (o.count - 1) : (o.itemW + e) * o.count - o.w - e) : (o.itemW = o.w, o.itemM = e, o.pagingCount = o.count, o.last = o.count - 1), o.computedW = o.itemW - o.boxPadding, o.computedM = o.itemM
            }, o.update = function(t, e) {
                o.doMath(), m || (t < o.currentSlide ? o.currentSlide += 1 : t <= o.currentSlide && 0 !== t && (o.currentSlide -= 1), o.animatingTo = o.currentSlide), o.vars.controlNav && !o.manualControls && ("add" === e && !m || o.pagingCount > o.controlNav.length ? v.controlNav.update("add") : ("remove" === e && !m || o.pagingCount < o.controlNav.length) && (m && o.currentSlide > o.last && (o.currentSlide -= 1, o.animatingTo -= 1), v.controlNav.update("remove", o.last))), o.vars.directionNav && v.directionNav.update()
            }, o.addSlide = function(e, i) {
                var n = t(e);
                o.count += 1, o.last = o.count - 1, d && p ? void 0 !== i ? o.slides.eq(o.count - i).after(n) : o.container.prepend(n) : void 0 !== i ? o.slides.eq(i).before(n) : o.container.append(n), o.update(i, "add"), o.slides = t(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.added(o)
            }, o.removeSlide = function(e) {
                var i = isNaN(e) ? o.slides.index(t(e)) : e;
                o.count -= 1, o.last = o.count - 1, isNaN(e) ? t(e, o.slides).remove() : d && p ? o.slides.eq(o.last).remove() : o.slides.eq(e).remove(), o.doMath(), o.update(i, "remove"), o.slides = t(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.removed(o)
            }, v.init()
        }, t(window).blur(function(t) {
            e = !1
        }).focus(function(t) {
            e = !0
        }), t.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, t.fn.flexslider = function(e) {
            if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                var i = t(this),
                    n = e.selector ? e.selector : ".slides > li",
                    o = i.find(n);
                1 === o.length && e.allowOneSlide === !1 || 0 === o.length ? (o.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
            });
            var i = t(this).data("flexslider");
            switch (e) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "stop":
                    i.stop();
                    break;
                case "next":
                    i.flexAnimate(i.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    i.flexAnimate(i.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && i.flexAnimate(e, !0)
            }
        }
    }(jQuery),
    /* ===========================================================
     * jquery-simple-text-rotator.js v1
     * ===========================================================
     * Copyright 2013 Pete Rojwongsuriya.
     * http://www.thepetedesign.com
     *
     * A very simple and light weight jQuery plugin that
     * allows you to rotate multiple text without changing
     * the layout
     * https://github.com/peachananr/simple-text-rotator
     *
     * ========================================================== */
    ! function(t) {
        var e = {
            animation: "dissolve",
            separator: ",",
            speed: 2e3
        };
        t.fx.step.textShadowBlur = function(e) {
            t(e.elem).prop("textShadowBlur", e.now).css({
                textShadow: "0 0 " + Math.floor(e.now) + "px black"
            })
        }, t.fn.textrotator = function(i) {
            var n = t.extend({}, e, i);
            return this.each(function() {
                var e = t(this),
                    i = [];
                t.each(e.text().split(n.separator), function(t, e) {
                    i.push(e)
                }), e.text(i[0]);
                var o = function() {
                    switch (n.animation) {
                        case "dissolve":
                            e.animate({
                                textShadowBlur: 20,
                                opacity: 0
                            }, 500, function() {
                                a = t.inArray(e.text(), i), a + 1 == i.length && (a = -1), e.text(i[a + 1]).animate({
                                    textShadowBlur: 0,
                                    opacity: 1
                                }, 500)
                            });
                            break;
                        case "flip":
                            e.find(".back").length > 0 && e.html(e.find(".back").html());
                            var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({
                                "-webkit-transform": " rotateY(-180deg)",
                                "-moz-transform": " rotateY(-180deg)",
                                "-o-transform": " rotateY(-180deg)",
                                transform: " rotateY(-180deg)"
                            });
                            break;
                        case "flipUp":
                            e.find(".back").length > 0 && e.html(e.find(".back").html());
                            var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
                                "-webkit-transform": " rotateX(-180deg)",
                                "-moz-transform": " rotateX(-180deg)",
                                "-o-transform": " rotateX(-180deg)",
                                transform: " rotateX(-180deg)"
                            });
                            break;
                        case "flipCube":
                            e.find(".back").length > 0 && e.html(e.find(".back").html());
                            var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({
                                "-webkit-transform": " rotateY(180deg)",
                                "-moz-transform": " rotateY(180deg)",
                                "-o-transform": " rotateY(180deg)",
                                transform: " rotateY(180deg)"
                            });
                            break;
                        case "flipCubeUp":
                            e.find(".back").length > 0 && e.html(e.find(".back").html());
                            var o = e.text(),
                                a = t.inArray(o, i);
                            a + 1 == i.length && (a = -1), e.html(""), t("<span class='front'>" + o + "</span>").appendTo(e), t("<span class='back'>" + i[a + 1] + "</span>").appendTo(e), e.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({
                                "-webkit-transform": " rotateX(180deg)",
                                "-moz-transform": " rotateX(180deg)",
                                "-o-transform": " rotateX(180deg)",
                                transform: " rotateX(180deg)"
                            });
                            break;
                        case "spin":
                            e.find(".rotating").length > 0 && e.html(e.find(".rotating").html()), a = t.inArray(e.text(), i), a + 1 == i.length && (a = -1), e.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(i[a + 1]).show().css({
                                "-webkit-transform": " rotate(0) scale(1)",
                                "-moz-transform": "rotate(0) scale(1)",
                                "-o-transform": "rotate(0) scale(1)",
                                transform: "rotate(0) scale(1)"
                            });
                            break;
                        case "fade":
                            e.fadeOut(n.speed, function() {
                                a = t.inArray(e.text(), i), a + 1 == i.length && (a = -1), e.text(i[a + 1]).fadeIn(n.speed)
                            })
                    }
                };
                setInterval(o, n.speed)
            })
        }
    }(window.jQuery),
    /*!
     * FitVids 1.1
     *
     * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
     * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
     * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
     *
     */
    function(t) {
        "use strict";
        t.fn.fitVids = function(e) {
            var i = {
                customSelector: null,
                ignore: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var n = document.head || document.getElementsByTagName("head")[0],
                    o = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                    a = document.createElement("div");
                a.innerHTML = '<p>x</p><style id="fit-vids-style">' + o + "</style>", n.appendChild(a.childNodes[1])
            }
            return e && t.extend(i, e), this.each(function() {
                var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                i.customSelector && e.push(i.customSelector);
                var n = ".fitvidsignore";
                i.ignore && (n = n + ", " + i.ignore);
                var o = t(this).find(e.join(","));
                o = o.not("object object"), o = o.not(n), o.each(function() {
                    var e = t(this);
                    if (!(e.parents(n).length > 0 || "embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        e.css("height") || e.css("width") || !isNaN(e.attr("height")) && !isNaN(e.attr("width")) || (e.attr("height", 9), e.attr("width", 16));
                        var i = "object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height(),
                            o = isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10),
                            a = i / o;
                        if (!e.attr("id")) {
                            var r = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", r)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), e.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto),
    function(t) {
        var e, i, n, o, a, r, s, l = "Close",
            c = "BeforeClose",
            u = "AfterClose",
            d = "BeforeAppend",
            p = "MarkupParse",
            m = "Open",
            h = "Change",
            f = "mfp",
            v = "." + f,
            g = "mfp-ready",
            y = "mfp-removing",
            b = "mfp-prevent-close",
            w = function() {},
            x = !!window.jQuery,
            _ = t(window),
            I = function(t, i) {
                e.ev.on(f + t + v, i)
            },
            C = function(e, i, n, o) {
                var a = document.createElement("div");
                return a.className = "mfp-" + e, n && (a.innerHTML = n), o ? i && i.appendChild(a) : (a = t(a), i && a.appendTo(i)), a
            },
            T = function(i, n) {
                e.ev.triggerHandler(f + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
            },
            k = function(i) {
                return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = i), e.currTemplate.closeBtn
            },
            S = function() {
                t.magnificPopup.instance || (e = new w, e.init(), t.magnificPopup.instance = e)
            },
            E = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        w.prototype = {
            constructor: w,
            init: function() {
                var i = navigator.appVersion;
                e.isIE7 = i.indexOf("MSIE 7.") !== -1, e.isIE8 = i.indexOf("MSIE 8.") !== -1, e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = E(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = t(document), e.popupsCache = {}
            },
            open: function(i) {
                n || (n = t(document.body));
                var a;
                if (i.isObj === !1) {
                    e.items = i.items.toArray(), e.index = 0;
                    var s, l = i.items;
                    for (a = 0; a < l.length; a++)
                        if (s = l[a], s.parsed && (s = s.el[0]), s === i.el[0]) {
                            e.index = a;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], r = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = o, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = C("bg").on("click" + v, function() {
                    e.close()
                }), e.wrap = C("wrap").attr("tabindex", -1).on("click" + v, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = C("container", e.wrap)), e.contentContainer = C("content"), e.st.preloader && (e.preloader = C("preloader", e.container, e.st.tLoading));
                var c = t.magnificPopup.modules;
                for (a = 0; a < c.length; a++) {
                    var u = c[a];
                    u = u.charAt(0).toUpperCase() + u.slice(1), e["init" + u].call(e)
                }
                T("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (I(p, function(t, e, i, n) {
                    i.close_replaceWith = k(n.type)
                }), r += " mfp-close-btn-in") : e.wrap.append(k())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: _.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: o.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && o.on("keyup" + v, function(t) {
                    27 === t.keyCode && e.close()
                }), _.on("resize" + v, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
                var d = e.wH = _.height(),
                    h = {};
                if (e.fixedContentPos && e._hasScrollBar(d)) {
                    var f = e._getScrollbarSize();
                    f && (h.marginRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : h.overflow = "hidden");
                var y = e.st.mainClass;
                return e.isIE7 && (y += " mfp-ie7"), y && e._addClassToMFP(y), e.updateItemHTML(), T("BuildControls"), t("html").css(h), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || n), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), o.on("focusin" + v, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(d), T(m), i
            },
            close: function() {
                e.isOpen && (T(c), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                T(l);
                var i = y + " " + g + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var n = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n)
                }
                o.off("keyup" + v + " focusin" + v), e.ev.off(v), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, T(u)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || _.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), T("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (T("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var o = !!e.st[n] && e.st[n].markup;
                    T("FirstMarkupParse", o), o ? e.currTemplate[n] = t(o) : e.currTemplate[n] = !0
                }
                a && a !== i.type && e.container.removeClass("mfp-" + a + "-holder");
                var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(r, n), i.preloaded = !0, T(h, i), a = i.type, e.container.prepend(e.contentContainer), T("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(k()) : e.content = t : e.content = "", T(d), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n, o = e.items[i];
                if (o.tagName ? o = {
                        el: t(o)
                    } : (n = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var a = e.types, r = 0; r < a.length; r++)
                        if (o.el.hasClass("mfp-" + a[r])) {
                            n = a[r];
                            break
                        }
                    o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, T("ElementParse", o), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this, e._openClick(n, t, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                var a = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
                if (a || 2 !== i.which && !i.ctrlKey && !i.metaKey) {
                    var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (r)
                        if (t.isFunction(r)) {
                            if (!r.call(e)) return !0
                        } else if (_.width() < r) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var o = {
                        status: t,
                        text: n
                    };
                    T("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(b)) {
                    var n = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick;
                    if (n && o) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0
                    } else if (o && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || _.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target)) return e._setFocus(), !1
            },
            _parseMarkup: function(e, i, n) {
                var o;
                n.data && (i = t.extend(n.data, i)), T(p, [e, i, n]), t.each(i, function(t, i) {
                    if (void 0 === i || i === !1) return !0;
                    if (o = t.split("_"), o.length > 1) {
                        var n = e.find(v + "-" + o[0]);
                        if (n.length > 0) {
                            var a = o[1];
                            "replaceWith" === a ? n[0] !== i[0] && n.replaceWith(i) : "img" === a ? n.is("img") ? n.attr("src", i) : n.replaceWith('<img src="' + i + '" class="' + n.attr("class") + '" />') : n.attr(o[1], i)
                        }
                    } else e.find(v + "-" + t).html(i)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.id = "mfp-sbm", t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: w.prototype,
            modules: [],
            open: function(e, i) {
                return S(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, t.fn.magnificPopup = function(i) {
            S();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, a = x ? n.data("magnificPopup") : n[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    a.items ? o = a.items[r] : (o = n, a.delegate && (o = o.find(a.delegate)), o = o.eq(r)), e._openClick({
                        mfpEl: o
                    }, n, a)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), x ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var P, A, M, L = "inline",
            z = function() {
                M && (A.after(M.addClass(P)).detach(), M = null)
            };
        t.magnificPopup.registerModule(L, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(L), I(l + "." + L, function() {
                        z()
                    })
                },
                getInline: function(i, n) {
                    if (z(), i.src) {
                        var o = e.st.inline,
                            a = t(i.src);
                        if (a.length) {
                            var r = a[0].parentNode;
                            r && r.tagName && (A || (P = o.hiddenClass, A = C(P), P = "mfp-" + P), M = a.after(A).detach().removeClass(P)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), a = t("<div>");
                        return i.inlineElement = a, a
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var D, R = "ajax",
            O = function() {
                D && n.removeClass(D)
            },
            $ = function() {
                O(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(R, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(R), D = e.st.ajax.cursor, I(l + "." + R, $), I("BeforeChange." + R, $)
                },
                getAjax: function(i) {
                    D && n.addClass(D), e.updateStatus("loading");
                    var o = t.extend({
                        url: i.src,
                        success: function(n, o, a) {
                            var r = {
                                data: n,
                                xhr: a
                            };
                            T("ParseAjax", r), e.appendContent(t(r.data), R), i.finished = !0, O(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(g)
                            }, 16), e.updateStatus("ready"), T("AjaxContentAdded")
                        },
                        error: function() {
                            O(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(o), ""
                }
            }
        });
        var N, j = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var t = e.st.image,
                        i = ".image";
                    e.types.push("image"), I(m + i, function() {
                        "image" === e.currItem.type && t.cursor && n.addClass(t.cursor)
                    }), I(l + i, function() {
                        t.cursor && n.removeClass(t.cursor), _.off("resize" + v)
                    }), I("Resize" + i, e.resizeImage), e.isLowIE && I("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, T("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        o = function(a) {
                            N && clearInterval(N), N = setInterval(function() {
                                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(N), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                            }, a)
                        };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0,
                        a = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, T("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(a, 100) : r()))
                        },
                        r = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", s.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        s = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.img = t(c).on("load.mfploader", a).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, {
                        title: j(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", s.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var F, W = function() {
            return void 0 === F && (F = void 0 !== document.createElement("p").style.MozTransform), F
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var o, a, r = i.duration,
                            s = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    a = "transition";
                                return o["-webkit-" + a] = o["-moz-" + a] = o["-o-" + a] = o[a] = n, e.css(o), e
                            },
                            u = function() {
                                e.content.css("visibility", "visible")
                            };
                        I("BuildControls" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void u();
                                a = s(t), a.css(e._getOffset()), e.wrap.append(a), o = setTimeout(function() {
                                    a.css(e._getOffset(!0)), o = setTimeout(function() {
                                        u(), setTimeout(function() {
                                            a.remove(), t = a = null, T("ZoomAnimationEnded")
                                        }, 16)
                                    }, r)
                                }, 16)
                            }
                        }), I(c + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.st.removalDelay = r, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    a = s(t)
                                }
                                a.css(e._getOffset(!0)), e.wrap.append(a), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    a.css(e._getOffset())
                                }, 16)
                            }
                        }), I(l + n, function() {
                            e._allowZoom() && (u(), a && a.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return !!e.currItem.hasSize && e.currItem.img
                },
                _getOffset: function(i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var o = n.offset(),
                        a = parseInt(n.css("padding-top"), 10),
                        r = parseInt(n.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - a;
                    var s = {
                        width: n.width(),
                        height: (x ? n.innerHeight() : n[0].offsetHeight) - r - a
                    };
                    return W() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
                }
            }
        });
        var B = "iframe",
            q = "//about:blank",
            H = function(t) {
                if (e.currTemplate[B]) {
                    var i = e.currTemplate[B].find("iframe");
                    i.length && (t || (i[0].src = q), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(B, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(B), I("BeforeChange", function(t, e, i) {
                        e !== i && (e === B ? H() : i === B && H(!0))
                    }), I(l + "." + B, function() {
                        H()
                    })
                },
                getIframe: function(i, n) {
                    var o = i.src,
                        a = e.st.iframe;
                    t.each(a.patterns, function() {
                        if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
                    });
                    var r = {};
                    return a.srcAction && (r[a.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
                }
            }
        });
        var U = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : t < 0 ? i + t : t
            },
            V = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        n = ".mfp-gallery",
                        a = Boolean(t.fn.mfpFastClick);
                    return e.direction = !0, !(!i || !i.enabled) && (r += " mfp-gallery", I(m + n, function() {
                        i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() {
                            if (e.items.length > 1) return e.next(), !1
                        }), o.on("keydown" + n, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), I("UpdateStatus" + n, function(t, i) {
                        i.text && (i.text = V(i.text, e.currItem.index, e.items.length))
                    }), I(p + n, function(t, n, o, a) {
                        var r = e.items.length;
                        o.counter = r > 1 ? V(i.tCounter, a.index, r) : ""
                    }), I("BuildControls" + n, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(b),
                                r = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(b),
                                s = a ? "mfpFastClick" : "click";
                            o[s](function() {
                                e.prev()
                            }), r[s](function() {
                                e.next()
                            }), e.isIE7 && (C("b", o[0], !1, !0), C("a", o[0], !1, !0), C("b", r[0], !1, !0), C("a", r[0], !1, !0)), e.container.append(o.add(r))
                        }
                    }), I(h + n, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void I(l + n, function() {
                        o.off(n), e.wrap.off("click" + n), e.arrowLeft && a && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                    }))
                },
                next: function() {
                    e.direction = !0, e.index = U(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = U(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        o = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = U(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), T("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, T("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var X = "retina";
        t.magnificPopup.registerModule(X, {
                options: {
                    replaceSrc: function(t) {
                        return t.src.replace(/\.\w+$/, function(t) {
                            return "@2x" + t
                        })
                    },
                    ratio: 1
                },
                proto: {
                    initRetina: function() {
                        if (window.devicePixelRatio > 1) {
                            var t = e.st.retina,
                                i = t.ratio;
                            i = isNaN(i) ? i() : i, i > 1 && (I("ImageHasSize." + X, function(t, e) {
                                e.img.css({
                                    "max-width": e.img[0].naturalWidth / i,
                                    width: "100%"
                                })
                            }), I("ElementParse." + X, function(e, n) {
                                n.src = t.replaceSrc(n, i)
                            }))
                        }
                    }
                }
            }),
            function() {
                var e = 1e3,
                    i = "ontouchstart" in window,
                    n = function() {
                        _.off("touchmove" + a + " touchend" + a)
                    },
                    o = "mfpFastClick",
                    a = "." + o;
                t.fn.mfpFastClick = function(o) {
                    return t(this).each(function() {
                        var r, s = t(this);
                        if (i) {
                            var l, c, u, d, p, m;
                            s.on("touchstart" + a, function(t) {
                                d = !1, m = 1, p = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], c = p.clientX, u = p.clientY, _.on("touchmove" + a, function(t) {
                                    p = t.originalEvent ? t.originalEvent.touches : t.touches, m = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - u) > 10) && (d = !0, n())
                                }).on("touchend" + a, function(t) {
                                    n(), d || m > 1 || (r = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                        r = !1
                                    }, e), o())
                                })
                            })
                        }
                        s.on("click" + a, function() {
                            r || o()
                        })
                    })
                }, t.fn.destroyMfpFastClick = function() {
                    t(this).off("touchstart" + a + " click" + a), i && _.off("touchmove" + a + " touchend" + a)
                }
            }(), S()
    }(window.jQuery || window.Zepto),
    /**!
     * easy-pie-chart
     * Lightweight plugin to render simple, animated and retina optimized pie charts
     *
     * @license
     * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
     * @version 2.1.7
     **/
    function(t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function(t) {
            return e(t)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(this, function(t) {
        var e = function(t, e) {
                var i, n = document.createElement("canvas");
                t.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
                var o = n.getContext("2d");
                n.width = n.height = e.size;
                var a = 1;
                window.devicePixelRatio > 1 && (a = window.devicePixelRatio, n.style.width = n.style.height = [e.size, "px"].join(""), n.width = n.height = e.size * a, o.scale(a, a)), o.translate(e.size / 2, e.size / 2), o.rotate((-.5 + e.rotate / 180) * Math.PI);
                var r = (e.size - e.lineWidth) / 2;
                e.scaleColor && e.scaleLength && (r -= e.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var s = function(t, e, i) {
                        i = Math.min(Math.max(-1, i || 0), 1);
                        var n = i <= 0;
                        o.beginPath(), o.arc(0, 0, r, 0, 2 * Math.PI * i, n), o.strokeStyle = t, o.lineWidth = e, o.stroke()
                    },
                    l = function() {
                        var t, i;
                        o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
                        for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), o.fillRect(-e.size / 2 + t, 0, i, 1), o.rotate(Math.PI / 12);
                        o.restore()
                    },
                    c = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                            window.setTimeout(t, 1e3 / 60)
                        }
                    }(),
                    u = function() {
                        e.scaleColor && l(), e.trackColor && s(e.trackColor, e.trackWidth || e.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return n
                }, this.getCtx = function() {
                    return o
                }, this.clear = function() {
                    o.clearRect(e.size / -2, e.size / -2, e.size, e.size)
                }, this.draw = function(t) {
                    e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? i ? o.putImageData(i, 0, 0) : (u(), i = o.getImageData(0, 0, e.size * a, e.size * a)) : (this.clear(), u()) : this.clear(), o.lineCap = e.lineCap;
                    var n;
                    n = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, s(n, e.lineWidth, t / 100)
                }.bind(this), this.animate = function(t, i) {
                    var n = Date.now();
                    e.onStart(t, i);
                    var o = function() {
                        var a = Math.min(Date.now() - n, e.animate.duration),
                            r = e.easing(this, a, t, i - t, e.animate.duration);
                        this.draw(r), e.onStep(t, i, r), a >= e.animate.duration ? e.onStop(t, i) : c(o)
                    }.bind(this);
                    c(o)
                }.bind(this)
            },
            i = function(t, i) {
                var n = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    trackWidth: void 0,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(t, e, i, n, o) {
                        return e /= o / 2, e < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
                    },
                    onStart: function(t, e) {},
                    onStep: function(t, e, i) {},
                    onStop: function(t, e) {}
                };
                if ("undefined" != typeof e) n.renderer = e;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    n.renderer = SVGRenderer
                }
                var o = {},
                    a = 0,
                    r = function() {
                        this.el = t, this.options = o;
                        for (var e in n) n.hasOwnProperty(e) && (o[e] = i && "undefined" != typeof i[e] ? i[e] : n[e], "function" == typeof o[e] && (o[e] = o[e].bind(this)));
                        "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? o.easing = jQuery.easing[o.easing] : o.easing = n.easing, "number" == typeof o.animate && (o.animate = {
                            duration: o.animate,
                            enabled: !0
                        }), "boolean" != typeof o.animate || o.animate || (o.animate = {
                            duration: 1e3,
                            enabled: o.animate
                        }), this.renderer = new o.renderer(t, o), this.renderer.draw(a), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(t) {
                    return t = parseFloat(t), o.animate.enabled ? this.renderer.animate(a, t) : this.renderer.draw(t), a = t, this
                }.bind(this), this.disableAnimation = function() {
                    return o.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return o.animate.enabled = !0, this
                }, r()
            };
        t.fn.easyPieChart = function(e) {
            return this.each(function() {
                var n;
                t.data(this, "easyPieChart") || (n = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, n)))
            })
        }
    }),
    /**
    @license Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
     */
    function() {
        var t, e;
        t = this.jQuery || window.jQuery, e = t(window), t.fn.stick_in_parent = function(i) {
            var n, o, a, r, s, l, c, u, d, p, m, h;
            for (null == i && (i = {}), h = i.sticky_class, l = i.inner_scrolling, m = i.recalc_every, p = i.parent, d = i.offset_top, u = i.spacer, a = i.bottoming, null == d && (d = 0), null == p && (p = void 0), null == l && (l = !0), null == h && (h = "is_stuck"), n = t(document), null == a && (a = !0), r = function(i, o, r, s, c, f, v, g) {
                    var y, b, w, x, _, I, C, T, k, S, E, P;
                    if (!i.data("sticky_kit")) {
                        if (i.data("sticky_kit", !0), _ = n.height(), C = i.parent(), null != p && (C = C.closest(p)), !C.length) throw "failed to find stick parent";
                        if (w = !1, y = !1, E = null != u ? u && i.closest(u) : t("<div />"), E && E.css("position", i.css("position")), T = function() {
                                var t, e, a;
                                if (!g) return _ = n.height(), t = parseInt(C.css("border-top-width"), 10), e = parseInt(C.css("padding-top"), 10), o = parseInt(C.css("padding-bottom"), 10), r = C.offset().top + t + e, s = C.height(), w && (w = !1, y = !1, null == u && (i.insertAfter(E), E.detach()), i.css({
                                    position: "",
                                    top: "",
                                    width: "",
                                    bottom: ""
                                }).removeClass(h), a = !0), c = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - d, f = i.outerHeight(!0), v = i.css("float"), E && E.css({
                                    width: i.outerWidth(!0),
                                    height: f,
                                    display: i.css("display"),
                                    "vertical-align": i.css("vertical-align"),
                                    "float": v
                                }), a ? P() : void 0
                            }, T(), f !== s) return x = void 0, I = d, S = m, P = function() {
                            var t, p, b, k, P, A;
                            if (!g) return b = !1, null != S && (S -= 1, S <= 0 && (S = m, T(), b = !0)), b || n.height() === _ || (T(), b = !0), k = e.scrollTop(), null != x && (p = k - x), x = k, w ? (a && (P = k + f + I > s + r, y && !P && (y = !1, i.css({
                                position: "fixed",
                                bottom: "",
                                top: I
                            }).trigger("sticky_kit:unbottom"))), k < c && (w = !1, I = d, null == u && ("left" !== v && "right" !== v || i.insertAfter(E), E.detach()), t = {
                                position: "",
                                width: "",
                                top: ""
                            }, i.css(t).removeClass(h).trigger("sticky_kit:unstick")), l && (A = e.height(), f + d > A && (y || (I -= p, I = Math.max(A - f, I), I = Math.min(d, I), w && i.css({
                                top: I + "px"
                            }))))) : k > c && (w = !0, t = {
                                position: "fixed",
                                top: I
                            }, t.width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" : i.width() + "px", i.css(t).addClass(h), null == u && (i.after(E), "left" !== v && "right" !== v || E.append(i)), i.trigger("sticky_kit:stick")), w && a && (null == P && (P = k + f + I > s + r), !y && P) ? (y = !0, "static" === C.css("position") && C.css({
                                position: "relative"
                            }), i.css({
                                position: "absolute",
                                bottom: o,
                                top: "auto"
                            }).trigger("sticky_kit:bottom")) : void 0
                        }, k = function() {
                            return T(), P()
                        }, b = function() {
                            if (g = !0, e.off("touchmove", P), e.off("scroll", P), e.off("resize", k), t(document.body).off("sticky_kit:recalc", k), i.off("sticky_kit:detach", b), i.removeData("sticky_kit"), i.css({
                                    position: "",
                                    bottom: "",
                                    top: "",
                                    width: ""
                                }), C.position("position", ""), w) return null == u && ("left" !== v && "right" !== v || i.insertAfter(E), E.remove()), i.removeClass(h)
                        }, e.on("touchmove", P), e.on("scroll", P), e.on("resize", k), t(document.body).on("sticky_kit:recalc", k), i.on("sticky_kit:detach", b), setTimeout(P, 0)
                    }
                }, s = 0, c = this.length; s < c; s++) o = this[s], r(t(o));
            return this
        }
    }.call(this),
    /*
     *  jQuery OwlCarousel v1.3.3
     *
     *  Copyright (c) 2013 Bartosz Wojciechowski
     *  http://www.owlgraphic.com/owlcarousel/
     *
     *  Licensed under MIT
     *
     */
    "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i) {
        var n = {
            init: function(e, i) {
                var n = this;
                n.$elem = t(i), n.options = t.extend({}, t.fn.owlCarousel.options, n.$elem.data(), e), n.userOptions = e, n.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    var e, i = "";
                    if ("function" == typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (i += t.owl[e].item);
                        n.$elem.html(i)
                    }
                    n.logIn()
                }
                var i, n = this;
                "function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath ? (i = n.options.jsonPath, t.getJSON(i, e)) : n.logIn()
            },
            logIn: function() {
                var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")), t.$elem.data("owl-originalClasses", t.$elem.attr("class")), t.$elem.css({
                    opacity: 0
                }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
            },
            setVars: function() {
                var t = this;
                return 0 !== t.$elem.children().length && (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup())
            },
            onStartup: function() {
                var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
            },
            eachMoveUpdate: function() {
                var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
            },
            updateVars: function() {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                return t.$elem.is(":visible") === !1 && (t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    i = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), i || t.$elem.addClass(t.options.theme)
            },
            updateItems: function() {
                var e, i, n = this;
                if (n.options.responsive === !1) return !1;
                if (n.options.singleItem === !0) return n.options.items = n.orignalItems = 1, n.options.itemsCustom = !1, n.options.itemsDesktop = !1, n.options.itemsDesktopSmall = !1, n.options.itemsTablet = !1, n.options.itemsTabletSmall = !1, n.options.itemsMobile = !1, !1;
                if (e = t(n.options.responsiveBaseWidth).width(), e > (n.options.itemsDesktop[0] || n.orignalItems) && (n.options.items = n.orignalItems), n.options.itemsCustom !== !1)
                    for (n.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), i = 0; i < n.options.itemsCustom.length; i += 1) n.options.itemsCustom[i][0] <= e && (n.options.items = n.options.itemsCustom[i][1]);
                else e <= n.options.itemsDesktop[0] && n.options.itemsDesktop !== !1 && (n.options.items = n.options.itemsDesktop[1]), e <= n.options.itemsDesktopSmall[0] && n.options.itemsDesktopSmall !== !1 && (n.options.items = n.options.itemsDesktopSmall[1]), e <= n.options.itemsTablet[0] && n.options.itemsTablet !== !1 && (n.options.items = n.options.itemsTablet[1]), e <= n.options.itemsTabletSmall[0] && n.options.itemsTabletSmall !== !1 && (n.options.items = n.options.itemsTabletSmall[1]), e <= n.options.itemsMobile[0] && n.options.itemsMobile !== !1 && (n.options.items = n.options.itemsMobile[1]);
                n.options.items > n.itemsAmount && n.options.itemsScaleUp === !0 && (n.options.items = n.itemsAmount)
            },
            response: function() {
                var i, n, o = this;
                return o.options.responsive === !0 && (n = t(e).width(), o.resizer = function() {
                    t(e).width() !== n && (o.options.autoPlay !== !1 && e.clearInterval(o.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function() {
                        n = t(e).width(), o.updateVars()
                    }, o.options.responsiveRefreshRate))
                }, void t(e).resize(o.resizer))
            },
            updatePosition: function() {
                var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    i = 0,
                    n = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(o) {
                    var a = t(this);
                    a.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(o)), o % e.options.items !== 0 && o !== n || o > n || (i += 1), a.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({
                    width: 2 * e,
                    left: 0
                }), t.appendItemsSizes()
            },
            calculateAll: function() {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
            },
            calculateWidth: function() {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items)
            },
            max: function() {
                var t = this,
                    e = (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth) * -1;
                return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, i, n, o = this,
                    a = 0,
                    r = 0;
                for (o.positionsInArray = [0], o.pagesInArray = [], e = 0; e < o.itemsAmount; e += 1) r += o.itemWidth, o.positionsInArray.push(-r), o.options.scrollPerPage === !0 && (i = t(o.$owlItems[e]), n = i.data("owl-roundPages"), n !== a && (o.pagesInArray[a] = o.positionsInArray[e], a = n))
            },
            buildControls: function() {
                var e = this;
                e.options.navigation !== !0 && e.options.pagination !== !0 || (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    i = t('<div class="owl-buttons"/>');
                e.owlControls.append(i), e.buttonPrev = t("<div/>", {
                    "class": "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    "class": "owl-next",
                    html: e.options.navigationText[1] || ""
                }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, i, n, o, a, r, s = this;
                if (s.options.pagination === !1) return !1;
                for (s.paginationWrapper.html(""), e = 0, i = s.itemsAmount - s.itemsAmount % s.options.items, o = 0; o < s.itemsAmount; o += 1) o % s.options.items === 0 && (e += 1, i === o && (n = s.itemsAmount - s.options.items), a = t("<div/>", {
                    "class": "owl-page"
                }), r = t("<span></span>", {
                    text: s.options.paginationNumbers === !0 ? e : "",
                    "class": s.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), a.append(r), a.data("owl-page", i === o ? n : o), a.data("owl-roundPages", e), s.paginationWrapper.append(a));
                s.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                return e.options.pagination !== !1 && void e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var t = this;
                return t.options.navigation !== !1 && void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
            },
            destroyControls: function() {
                var t = this;
                t.owlControls && t.owlControls.remove()
            },
            next: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
                    if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            prev: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                    if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            goTo: function(t, i, n) {
                var o, a = this;
                return !a.isTransition && ("function" == typeof a.options.beforeMove && a.options.beforeMove.apply(this, [a.$elem]), t >= a.maximumItem ? t = a.maximumItem : t <= 0 && (t = 0), a.currentItem = a.owl.currentItem = t, a.options.transitionStyle !== !1 && "drag" !== n && 1 === a.options.items && a.browser.support3d === !0 ? (a.swapSpeed(0), a.browser.support3d === !0 ? a.transition3d(a.positionsInArray[t]) : a.css2slide(a.positionsInArray[t], 1), a.afterGo(), a.singleItemTransition(), !1) : (o = a.positionsInArray[t], a.browser.support3d === !0 ? (a.isCss3Finish = !1, i === !0 ? (a.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    a.isCss3Finish = !0
                }, a.options.paginationSpeed)) : "rewind" === i ? (a.swapSpeed(a.options.rewindSpeed), e.setTimeout(function() {
                    a.isCss3Finish = !0
                }, a.options.rewindSpeed)) : (a.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    a.isCss3Finish = !0
                }, a.options.slideSpeed)), a.transition3d(o)) : i === !0 ? a.css2slide(o, a.options.paginationSpeed) : "rewind" === i ? a.css2slide(o, a.options.rewindSpeed) : a.css2slide(o, a.options.slideSpeed), void a.afterGo()))
            },
            jumpTo: function(t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || t === -1 ? t = e.maximumItem : t <= 0 && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
            },
            afterGo: function() {
                var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
            },
            stop: function() {
                var t = this;
                t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
            },
            checkAp: function() {
                var t = this;
                "stop" !== t.apStatus && t.play()
            },
            play: function() {
                var t = this;
                return t.apStatus = "play", t.options.autoPlay !== !1 && (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)))
            },
            swapSpeed: function(t) {
                var e = this;
                "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t))
            },
            css2move: function(t) {
                var e = this;
                e.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t, n, o, a, r = this,
                    s = "translate3d(0px, 0px, 0px)",
                    l = i.createElement("div");
                l.style.cssText = "  -moz-transform:" + s + "; -ms-transform:" + s + "; -o-transform:" + s + "; -webkit-transform:" + s + "; transform:" + s, t = /translate3d\(0px, 0px, 0px\)/g, n = l.style.cssText.match(t), o = null !== n && 1 === n.length, a = "ontouchstart" in e || e.navigator.msMaxTouchPoints, r.browser = {
                    support3d: o,
                    isTouch: a
                }
            },
            moveEvents: function() {
                var t = this;
                t.options.mouseDrag === !1 && t.options.touchDrag === !1 || (t.gestures(), t.disabledEvents())
            },
            eventTypes: function() {
                var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
            },
            disabledEvents: function() {
                var e = this;
                e.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function n(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function o(e) {
                    "on" === e ? (t(i).on(l.ev_types.move, r), t(i).on(l.ev_types.end, s)) : "off" === e && (t(i).off(l.ev_types.move), t(i).off(l.ev_types.end))
                }

                function a(i) {
                    var a, r = i.originalEvent || i || e.event;
                    if (3 === r.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), a = t(this).position(), c.relativePos = a.left, c.offsetX = n(r).x - a.left, c.offsetY = n(r).y - a.top, o("on"), c.sliding = !1, c.targetElement = r.target || r.srcElement
                    }
                }

                function r(o) {
                    var a, r, s = o.originalEvent || o || e.event;
                    l.newPosX = n(s).x - c.offsetX, l.newPosY = n(s).y - c.offsetY, l.newRelativeX = l.newPosX - c.relativePos, "function" == typeof l.options.startDragging && c.dragging !== !0 && 0 !== l.newRelativeX && (c.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== s.preventDefault ? s.preventDefault() : s.returnValue = !1, c.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && c.sliding === !1 && t(i).off("touchmove.owl"), a = function() {
                        return l.newRelativeX / 5
                    }, r = function() {
                        return l.maximumPixels + l.newRelativeX / 5
                    }, l.newPosX = Math.max(Math.min(l.newPosX, a()), r()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
                }

                function s(i) {
                    var n, a, r, s = i.originalEvent || i || e.event;
                    s.target = s.target || s.srcElement, c.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.newRelativeX < 0 ? l.dragDirection = l.owl.dragDirection = "left" : l.dragDirection = l.owl.dragDirection = "right", 0 !== l.newRelativeX && (n = l.getNewPosition(), l.goTo(n, !1, "drag"), c.targetElement === s.target && l.browser.isTouch !== !0 && (t(s.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), a = t._data(s.target, "events").click, r = a.pop(), a.splice(0, 0, r))), o("off")
                }
                var l = this,
                    c = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", a)
            },
            getNewPosition: function() {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
            },
            closestItem: function() {
                var e = this,
                    i = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    n = e.newPosX,
                    o = null;
                return t.each(i, function(a, r) {
                    n - e.itemWidth / 20 > i[a + 1] && n - e.itemWidth / 20 < r && "left" === e.moveDirection() ? (o = r, e.options.scrollPerPage === !0 ? e.currentItem = t.inArray(o, e.positionsInArray) : e.currentItem = a) : n + e.itemWidth / 20 < r && n + e.itemWidth / 20 > (i[a + 1] || i[a] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (o = i[a + 1] || i[i.length - 1], e.currentItem = t.inArray(o, e.positionsInArray)) : (o = i[a + 1], e.currentItem = a + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t, e = this;
                return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, i) {
                    t.options.autoPlay = i, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, i) {
                    t.goTo(i)
                }), t.$elem.on("owl.jumpTo", function(e, i) {
                    t.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var t = this;
                t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, i, n, o, a, r = this;
                if (r.options.lazyLoad === !1) return !1;
                for (e = 0; e < r.itemsAmount; e += 1) i = t(r.$owlItems[e]), "loaded" !== i.data("owl-loaded") && (n = i.data("owl-item"), o = i.find(".lazyOwl"), "string" == typeof o.data("src") ? (void 0 === i.data("owl-loaded") && (o.hide(), i.addClass("loading").data("owl-loaded", "checked")), a = r.options.lazyFollow !== !0 || n >= r.currentItem, a && n < r.currentItem + r.options.items && o.length && r.lazyPreload(i, o)) : i.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(t, i) {
                function n() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === r.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function o() {
                    s += 1, r.completeImg(i.get(0)) || a === !0 ? n() : s <= 100 ? e.setTimeout(o, 100) : n()
                }
                var a, r = this,
                    s = 0;
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), a = !0) : i[0].src = i.data("src"), o()
            },
            autoHeight: function() {
                function i() {
                    var i = t(a.$owlItems[a.currentItem]).height();
                    a.wrapperOuter.css("height", i + "px"), a.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        a.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function n() {
                    o += 1, a.completeImg(r.get(0)) ? i() : o <= 100 ? e.setTimeout(n, 100) : a.wrapperOuter.css("height", "")
                }
                var o, a = this,
                    r = t(a.$owlItems[a.currentItem]).find("img");
                void 0 !== r.get(0) ? (o = 0, n()) : i()
            },
            completeImg: function(t) {
                var e;
                return !!t.complete && (e = typeof t.naturalWidth, "undefined" === e || 0 !== t.naturalWidth)
            },
            onVisibleItems: function() {
                var e, i = this;
                for (i.options.addClassActive === !0 && i.$owlItems.removeClass("active"), i.visibleItems = [], e = i.currentItem; e < i.currentItem + i.options.items; e += 1) i.visibleItems.push(e), i.options.addClassActive === !0 && t(i.$owlItems[e]).addClass("active");
                i.owl.visibleItems = i.visibleItems
            },
            transitionTypes: function(t) {
                var e = this;
                e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                function t(t) {
                    return {
                        position: "relative",
                        left: t + "px"
                    }
                }
                var e = this,
                    i = e.outClass,
                    n = e.inClass,
                    o = e.$owlItems.eq(e.currentItem),
                    a = e.$owlItems.eq(e.prevItem),
                    r = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    s = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": s + "px",
                    "-moz-perspective-origin": s + "px",
                    "perspective-origin": s + "px"
                }), a.css(t(r, 10)).addClass(i).on(l, function() {
                    e.endPrev = !0, a.off(l), e.clearTransStyle(a, i)
                }), o.addClass(n).on(l, function() {
                    e.endCurrent = !0, o.off(l), e.clearTransStyle(o, n)
                })
            },
            clearTransStyle: function(t, e) {
                var i = this;
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), i.endPrev && i.endCurrent && (i.$owlWrapper.removeClass("owl-origin"), i.endPrev = !1, i.endCurrent = !1, i.isTransition = !1)
            },
            owlStatus: function() {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection
                }
            },
            clearEvents: function() {
                var n = this;
                n.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", n.resizer)
            },
            unWrap: function() {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
            },
            reinit: function(e) {
                var i = this,
                    n = t.extend({}, i.userOptions, e);
                i.unWrap(), i.init(n, i.$elem)
            },
            addItem: function(t, e) {
                var i, n = this;
                return !!t && (0 === n.$elem.children().length ? (n.$elem.append(t), n.setVars(), !1) : (n.unWrap(), i = void 0 === e || e === -1 ? -1 : e, i >= n.$userItems.length || i === -1 ? n.$userItems.eq(-1).after(t) : n.$userItems.eq(i).before(t), void n.setVars()))
            },
            removeItem: function(t) {
                var e, i = this;
                return 0 !== i.$elem.children().length && (e = void 0 === t || t === -1 ? -1 : t, i.unWrap(), i.$userItems.eq(e).remove(), void i.setVars())
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0);
                var i = Object.create(n);
                i.init(e, this), t.data(this, "owlCarousel", i)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function() {
        var t, e, i, n, o, a, r, s, l, c, u, d, p, m, h, f, v, g, y, b, w, x, _, I, C, T, k, S, E, P, A, M, L, z, D, R, O, $, N, j, F, W, B, q, H, U, V, X, Y, G = [].slice,
            Q = {}.hasOwnProperty,
            Z = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) Q.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            J = [].indexOf || function(t) {
                for (var e = 0, i = this.length; e < i; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            };
        for (w = {
                catchupTime: 100,
                initialRate: .03,
                minTime: 250,
                ghostTime: 100,
                maxProgressPerFrame: 20,
                easeFactor: 1.25,
                startOnPageLoad: !0,
                restartOnPushState: !0,
                restartOnRequestAfter: 500,
                target: "body",
                elements: {
                    checkInterval: 100,
                    selectors: ["body"]
                },
                eventLag: {
                    minSamples: 10,
                    sampleCount: 3,
                    lagThreshold: 3
                },
                ajax: {
                    trackMethods: ["GET"],
                    trackWebSockets: !0,
                    ignoreURLs: []
                }
            }, E = function() {
                var t;
                return null != (t = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? t : +new Date
            }, A = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, b = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == A && (A = function(t) {
                return setTimeout(t, 50)
            }, b = function(t) {
                return clearTimeout(t)
            }), L = function(t) {
                var e, i;
                return e = E(), (i = function() {
                    var n;
                    return n = E() - e, n >= 33 ? (e = E(), t(n, function() {
                        return A(i)
                    })) : setTimeout(i, 33 - n)
                })()
            }, M = function() {
                var t, e, i;
                return i = arguments[0], e = arguments[1], t = 3 <= arguments.length ? G.call(arguments, 2) : [], "function" == typeof i[e] ? i[e].apply(i, t) : i[e]
            }, x = function() {
                var t, e, i, n, o, a, r;
                for (e = arguments[0], n = 2 <= arguments.length ? G.call(arguments, 1) : [], a = 0, r = n.length; a < r; a++)
                    if (i = n[a])
                        for (t in i) Q.call(i, t) && (o = i[t], null != e[t] && "object" == typeof e[t] && null != o && "object" == typeof o ? x(e[t], o) : e[t] = o);
                return e
            }, v = function(t) {
                var e, i, n, o, a;
                for (i = e = 0, o = 0, a = t.length; o < a; o++) n = t[o], i += Math.abs(n), e++;
                return i / e
            }, I = function(t, e) {
                var i, n, o;
                if (null == t && (t = "options"), null == e && (e = !0), o = document.querySelector("[data-pace-" + t + "]")) {
                    if (i = o.getAttribute("data-pace-" + t), !e) return i;
                    try {
                        return JSON.parse(i)
                    } catch (a) {
                        return n = a, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", n) : void 0
                    }
                }
            }, r = function() {
                function t() {}
                return t.prototype.on = function(t, e, i, n) {
                    var o;
                    return null == n && (n = !1), null == this.bindings && (this.bindings = {}), null == (o = this.bindings)[t] && (o[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: i,
                        once: n
                    })
                }, t.prototype.once = function(t, e, i) {
                    return this.on(t, e, i, !0)
                }, t.prototype.off = function(t, e) {
                    var i, n, o;
                    if (null != (null != (n = this.bindings) ? n[t] : void 0)) {
                        if (null == e) return delete this.bindings[t];
                        for (i = 0, o = []; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? o.push(this.bindings[t].splice(i, 1)) : o.push(i++);
                        return o
                    }
                }, t.prototype.trigger = function() {
                    var t, e, i, n, o, a, r, s, l;
                    if (i = arguments[0], t = 2 <= arguments.length ? G.call(arguments, 1) : [], null != (r = this.bindings) ? r[i] : void 0) {
                        for (o = 0, l = []; o < this.bindings[i].length;) s = this.bindings[i][o], n = s.handler, e = s.ctx, a = s.once, n.apply(null != e ? e : this, t), a ? l.push(this.bindings[i].splice(o, 1)) : l.push(o++);
                        return l
                    }
                }, t
            }(), c = window.Pace || {}, window.Pace = c, x(c, r.prototype), P = c.options = x({}, w, window.paceOptions, I()), V = ["ajax", "document", "eventLag", "elements"], B = 0, H = V.length; B < H; B++) O = V[B], P[O] === !0 && (P[O] = w[O]);
        l = function(t) {
            function e() {
                return X = e.__super__.constructor.apply(this, arguments)
            }
            return Z(e, t), e
        }(Error), e = function() {
            function t() {
                this.progress = 0
            }
            return t.prototype.getElement = function() {
                var t;
                if (null == this.el) {
                    if (t = document.querySelector(P.target), !t) throw new l;
                    this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != t.firstChild ? t.insertBefore(this.el, t.firstChild) : t.appendChild(this.el)
                }
                return this.el
            }, t.prototype.finish = function() {
                var t;
                return t = this.getElement(), t.className = t.className.replace("pace-active", ""), t.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
            }, t.prototype.update = function(t) {
                return this.progress = t, this.render()
            }, t.prototype.destroy = function() {
                try {
                    this.getElement().parentNode.removeChild(this.getElement())
                } catch (t) {
                    l = t
                }
                return this.el = void 0
            }, t.prototype.render = function() {
                var t, e, i, n, o, a, r;
                if (null == document.querySelector(P.target)) return !1;
                for (t = this.getElement(), n = "translate3d(" + this.progress + "%, 0, 0)", r = ["webkitTransform", "msTransform", "transform"], o = 0, a = r.length; o < a; o++) e = r[o], t.children[0].style[e] = n;
                return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (t.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? i = "99" : (i = this.progress < 10 ? "0" : "", i += 0 | this.progress), t.children[0].setAttribute("data-progress", "" + i)), this.lastRenderedProgress = this.progress
            }, t.prototype.done = function() {
                return this.progress >= 100
            }, t
        }(), s = function() {
            function t() {
                this.bindings = {}
            }
            return t.prototype.trigger = function(t, e) {
                var i, n, o, a, r;
                if (null != this.bindings[t]) {
                    for (a = this.bindings[t], r = [], n = 0, o = a.length; n < o; n++) i = a[n], r.push(i.call(this, e));
                    return r
                }
            }, t.prototype.on = function(t, e) {
                var i;
                return null == (i = this.bindings)[t] && (i[t] = []), this.bindings[t].push(e)
            }, t
        }(), W = window.XMLHttpRequest, F = window.XDomainRequest, j = window.WebSocket, _ = function(t, e) {
            var i, n, o;
            o = [];
            for (n in e.prototype) try {
                null == t[n] && "function" != typeof e[n] ? "function" == typeof Object.defineProperty ? o.push(Object.defineProperty(t, n, {
                    get: function() {
                        return e.prototype[n]
                    },
                    configurable: !0,
                    enumerable: !0
                })) : o.push(t[n] = e.prototype[n]) : o.push(void 0)
            } catch (a) {
                i = a
            }
            return o
        }, k = [], c.ignore = function() {
            var t, e, i;
            return e = arguments[0], t = 2 <= arguments.length ? G.call(arguments, 1) : [], k.unshift("ignore"), i = e.apply(null, t), k.shift(), i
        }, c.track = function() {
            var t, e, i;
            return e = arguments[0], t = 2 <= arguments.length ? G.call(arguments, 1) : [], k.unshift("track"), i = e.apply(null, t), k.shift(), i
        }, R = function(t) {
            var e;
            if (null == t && (t = "GET"), "track" === k[0]) return "force";
            if (!k.length && P.ajax) {
                if ("socket" === t && P.ajax.trackWebSockets) return !0;
                if (e = t.toUpperCase(), J.call(P.ajax.trackMethods, e) >= 0) return !0
            }
            return !1
        }, u = function(t) {
            function e() {
                var t, i = this;
                e.__super__.constructor.apply(this, arguments), t = function(t) {
                    var e;
                    return e = t.open, t.open = function(n, o, a) {
                        return R(n) && i.trigger("request", {
                            type: n,
                            url: o,
                            request: t
                        }), e.apply(t, arguments)
                    }
                }, window.XMLHttpRequest = function(e) {
                    var i;
                    return i = new W(e), t(i), i
                };
                try {
                    _(window.XMLHttpRequest, W)
                } catch (n) {}
                if (null != F) {
                    window.XDomainRequest = function() {
                        var e;
                        return e = new F, t(e), e
                    };
                    try {
                        _(window.XDomainRequest, F)
                    } catch (n) {}
                }
                if (null != j && P.ajax.trackWebSockets) {
                    window.WebSocket = function(t, e) {
                        var n;
                        return n = null != e ? new j(t, e) : new j(t), R("socket") && i.trigger("request", {
                            type: "socket",
                            url: t,
                            protocols: e,
                            request: n
                        }), n
                    };
                    try {
                        _(window.WebSocket, j)
                    } catch (n) {}
                }
            }
            return Z(e, t), e
        }(s), q = null, C = function() {
            return null == q && (q = new u), q
        }, D = function(t) {
            var e, i, n, o;
            for (o = P.ajax.ignoreURLs, i = 0, n = o.length; i < n; i++)
                if (e = o[i], "string" == typeof e) {
                    if (t.indexOf(e) !== -1) return !0
                } else if (e.test(t)) return !0;
            return !1
        }, C().on("request", function(e) {
            var i, n, o, a, r;
            if (a = e.type, o = e.request, r = e.url, !D(r)) return c.running || P.restartOnRequestAfter === !1 && "force" !== R(a) ? void 0 : (n = arguments, i = P.restartOnRequestAfter || 0, "boolean" == typeof i && (i = 0), setTimeout(function() {
                var e, i, r, s, l, u;
                if (e = "socket" === a ? o.readyState < 2 : 0 < (s = o.readyState) && s < 4) {
                    for (c.restart(), l = c.sources, u = [], i = 0, r = l.length; i < r; i++) {
                        if (O = l[i], O instanceof t) {
                            O.watch.apply(O, n);
                            break
                        }
                        u.push(void 0)
                    }
                    return u
                }
            }, i))
        }), t = function() {
            function t() {
                var t = this;
                this.elements = [], C().on("request", function() {
                    return t.watch.apply(t, arguments)
                })
            }
            return t.prototype.watch = function(t) {
                var e, i, n, o;
                if (n = t.type, e = t.request, o = t.url, !D(o)) return i = "socket" === n ? new m(e) : new h(e), this.elements.push(i)
            }, t
        }(), h = function() {
            function t(t) {
                var e, i, n, o, a, r, s = this;
                if (this.progress = 0, null != window.ProgressEvent)
                    for (i = null, t.addEventListener("progress", function(t) {
                            return t.lengthComputable ? s.progress = 100 * t.loaded / t.total : s.progress = s.progress + (100 - s.progress) / 2
                        }, !1), r = ["load", "abort", "timeout", "error"], n = 0, o = r.length; n < o; n++) e = r[n], t.addEventListener(e, function() {
                        return s.progress = 100
                    }, !1);
                else a = t.onreadystatechange, t.onreadystatechange = function() {
                    var e;
                    return 0 === (e = t.readyState) || 4 === e ? s.progress = 100 : 3 === t.readyState && (s.progress = 50), "function" == typeof a ? a.apply(null, arguments) : void 0
                }
            }
            return t
        }(), m = function() {
            function t(t) {
                var e, i, n, o, a = this;
                for (this.progress = 0, o = ["error", "open"], i = 0, n = o.length; i < n; i++) e = o[i], t.addEventListener(e, function() {
                    return a.progress = 100
                }, !1)
            }
            return t
        }(), n = function() {
            function t(t) {
                var e, i, n, a;
                for (null == t && (t = {}), this.elements = [], null == t.selectors && (t.selectors = []), a = t.selectors, i = 0, n = a.length; i < n; i++) e = a[i], this.elements.push(new o(e))
            }
            return t
        }(), o = function() {
            function t(t) {
                this.selector = t, this.progress = 0, this.check()
            }
            return t.prototype.check = function() {
                var t = this;
                return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
                    return t.check()
                }, P.elements.checkInterval)
            }, t.prototype.done = function() {
                return this.progress = 100
            }, t
        }(), i = function() {
            function t() {
                var t, e, i = this;
                this.progress = null != (e = this.states[document.readyState]) ? e : 100, t = document.onreadystatechange, document.onreadystatechange = function() {
                    return null != i.states[document.readyState] && (i.progress = i.states[document.readyState]), "function" == typeof t ? t.apply(null, arguments) : void 0
                }
            }
            return t.prototype.states = {
                loading: 0,
                interactive: 50,
                complete: 100
            }, t
        }(), a = function() {
            function t() {
                var t, e, i, n, o, a = this;
                this.progress = 0, t = 0, o = [], n = 0, i = E(), e = setInterval(function() {
                    var r;
                    return r = E() - i - 50, i = E(), o.push(r), o.length > P.eventLag.sampleCount && o.shift(), t = v(o), ++n >= P.eventLag.minSamples && t < P.eventLag.lagThreshold ? (a.progress = 100, clearInterval(e)) : a.progress = 100 * (3 / (t + 3))
                }, 50)
            }
            return t
        }(), p = function() {
            function t(t) {
                this.source = t, this.last = this.sinceLastUpdate = 0, this.rate = P.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = M(this.source, "progress"))
            }
            return t.prototype.tick = function(t, e) {
                var i;
                return null == e && (e = M(this.source, "progress")), e >= 100 && (this.done = !0), e === this.last ? this.sinceLastUpdate += t : (this.sinceLastUpdate && (this.rate = (e - this.last) / this.sinceLastUpdate), this.catchup = (e - this.progress) / P.catchupTime, this.sinceLastUpdate = 0, this.last = e), e > this.progress && (this.progress += this.catchup * t), i = 1 - Math.pow(this.progress / 100, P.easeFactor), this.progress += i * this.rate * t, this.progress = Math.min(this.lastProgress + P.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
            }, t
        }(), $ = null, z = null, g = null, N = null, f = null, y = null, c.running = !1, T = function() {
            if (P.restartOnPushState) return c.restart()
        }, null != window.history.pushState && (U = window.history.pushState, window.history.pushState = function() {
            return T(), U.apply(window.history, arguments)
        }), null != window.history.replaceState && (Y = window.history.replaceState, window.history.replaceState = function() {
            return T(), Y.apply(window.history, arguments)
        }), d = {
            ajax: t,
            elements: n,
            document: i,
            eventLag: a
        }, (S = function() {
            var t, i, n, o, a, r, s, l;
            for (c.sources = $ = [], r = ["ajax", "elements", "document", "eventLag"], i = 0, o = r.length; i < o; i++) t = r[i], P[t] !== !1 && $.push(new d[t](P[t]));
            for (l = null != (s = P.extraSources) ? s : [], n = 0, a = l.length; n < a; n++) O = l[n], $.push(new O(P));
            return c.bar = g = new e, z = [], N = new p
        })(), c.stop = function() {
            return c.trigger("stop"), c.running = !1, g.destroy(), y = !0, null != f && ("function" == typeof b && b(f), f = null), S()
        }, c.restart = function() {
            return c.trigger("restart"), c.stop(), c.start()
        }, c.go = function() {
            var t;
            return c.running = !0, g.render(), t = E(), y = !1, f = L(function(e, i) {
                var n, o, a, r, s, l, u, d, m, h, f, v, b, w, x, _;
                for (d = 100 - g.progress, o = f = 0, a = !0, l = v = 0, w = $.length; v < w; l = ++v)
                    for (O = $[l], h = null != z[l] ? z[l] : z[l] = [], s = null != (_ = O.elements) ? _ : [O], u = b = 0, x = s.length; b < x; u = ++b) r = s[u], m = null != h[u] ? h[u] : h[u] = new p(r), a &= m.done, m.done || (o++, f += m.tick(e));
                return n = f / o, g.update(N.tick(e, n)), g.done() || a || y ? (g.update(100), c.trigger("done"), setTimeout(function() {
                    return g.finish(), c.running = !1, c.trigger("hide")
                }, Math.max(P.ghostTime, Math.max(P.minTime - (E() - t), 0)))) : i()
            })
        }, c.start = function(t) {
            x(P, t), c.running = !0;
            try {
                g.render()
            } catch (e) {
                l = e
            }
            return document.querySelector(".pace") ? (c.trigger("start"), c.go()) : setTimeout(c.start, 50)
        }, "function" == typeof define && define.amd ? define(["pace"], function() {
            return c
        }) : "object" == typeof exports ? module.exports = c : P.startOnPageLoad && c.start()
    }.call(this),
    /*!
     * jQuery Ripples plugin v0.5.3 / https://github.com/sirxemic/jquery.ripples
     * MIT License
     * @author sirxemic / https://sirxemic.com/
     */
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function(t) {
        "use strict";

        function e(t) {
            return "%" == t[t.length - 1]
        }

        function i() {
            function t(t, e) {
                var n = "OES_texture_" + t,
                    o = n + "_linear",
                    a = o in i,
                    r = [n];
                return a && r.push(o), {
                    type: e,
                    linearSupport: a,
                    extensions: r
                }
            }
            var e = document.createElement("canvas");
            if (c = e.getContext("webgl") || e.getContext("experimental-webgl"), !c) return null;
            var i = {};
            if (["OES_texture_float", "OES_texture_half_float", "OES_texture_float_linear", "OES_texture_half_float_linear"].forEach(function(t) {
                    var e = c.getExtension(t);
                    e && (i[t] = e)
                }), !i.OES_texture_float) return null;
            var n = [];
            n.push(t("float", c.FLOAT)), i.OES_texture_half_float && n.push(t("half_float", i.OES_texture_half_float.HALF_FLOAT_OES));
            var o = c.createTexture(),
                a = c.createFramebuffer();
            c.bindFramebuffer(c.FRAMEBUFFER, a), c.bindTexture(c.TEXTURE_2D, o), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE);
            for (var r = null, s = 0; s < n.length; s++)
                if (c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, 32, 32, 0, c.RGBA, n[s].type, null), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, o, 0), c.checkFramebufferStatus(c.FRAMEBUFFER) === c.FRAMEBUFFER_COMPLETE) {
                    r = n[s];
                    break
                }
            return r
        }

        function n(t, e) {
            try {
                return new ImageData(t, e)
            } catch (i) {
                var n = document.createElement("canvas");
                return n.getContext("2d").createImageData(t, e)
            }
        }

        function o(t) {
            var e = t.split(" ");
            if (1 !== e.length) return e.map(function(e) {
                switch (t) {
                    case "center":
                        return "50%";
                    case "top":
                    case "left":
                        return "0";
                    case "right":
                    case "bottom":
                        return "100%";
                    default:
                        return e
                }
            });
            switch (t) {
                case "center":
                    return ["50%", "50%"];
                case "top":
                    return ["50%", "0"];
                case "bottom":
                    return ["50%", "100%"];
                case "left":
                    return ["0", "50%"];
                case "right":
                    return ["100%", "50%"];
                default:
                    return [t, "50%"]
            }
        }

        function a(t, e, i) {
            function n(t, e) {
                var i = c.createShader(t);
                if (c.shaderSource(i, e), c.compileShader(i), !c.getShaderParameter(i, c.COMPILE_STATUS)) throw new Error("compile error: " + c.getShaderInfoLog(i));
                return i
            }
            var o = {};
            if (o.id = c.createProgram(), c.attachShader(o.id, n(c.VERTEX_SHADER, t)), c.attachShader(o.id, n(c.FRAGMENT_SHADER, e)), c.linkProgram(o.id), !c.getProgramParameter(o.id, c.LINK_STATUS)) throw new Error("link error: " + c.getProgramInfoLog(o.id));
            o.uniforms = {}, o.locations = {}, c.useProgram(o.id), c.enableVertexAttribArray(0);
            for (var a, r, s = /uniform (\w+) (\w+)/g, l = t + e; null != (a = s.exec(l));) r = a[2], o.locations[r] = c.getUniformLocation(o.id, r);
            return o
        }

        function r(t, e) {
            c.activeTexture(c.TEXTURE0 + (e || 0)), c.bindTexture(c.TEXTURE_2D, t)
        }

        function s(t) {
            var e = /url\(["']?([^"']*)["']?\)/.exec(t);
            return null == e ? null : e[1]
        }

        function l(t) {
            return t.match(/^data:/)
        }
        var c, u = t(window),
            d = i(),
            p = n(32, 32);
        t("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");
        var m = function(e, i) {
            function n() {
                o.step(), requestAnimationFrame(n)
            }
            var o = this;
            this.$el = t(e), this.interactive = i.interactive, this.resolution = i.resolution, this.textureDelta = new Float32Array([1 / this.resolution, 1 / this.resolution]), this.perturbance = i.perturbance, this.dropRadius = i.dropRadius, this.crossOrigin = i.crossOrigin, this.imageUrl = i.imageUrl;
            var a = document.createElement("canvas");
            a.width = this.$el.innerWidth(), a.height = this.$el.innerHeight(), this.canvas = a, this.$canvas = t(a), this.$canvas.css({
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: -1
            }), this.$el.addClass("jquery-ripples").append(a), this.context = c = a.getContext("webgl") || a.getContext("experimental-webgl"), d.extensions.forEach(function(t) {
                c.getExtension(t)
            }), t(window).on("resize", function() {
                var t = o.$el.innerWidth(),
                    e = o.$el.innerHeight();
                t == o.canvas.width && e == o.canvas.height || (a.width = t, a.height = e)
            }), this.textures = [], this.framebuffers = [], this.bufferWriteIndex = 0, this.bufferReadIndex = 1;
            for (var r = 0; r < 2; r++) {
                var s = c.createTexture(),
                    l = c.createFramebuffer();
                c.bindFramebuffer(c.FRAMEBUFFER, l), l.width = this.resolution, l.height = this.resolution, c.bindTexture(c.TEXTURE_2D, s), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, d.linearSupport ? c.LINEAR : c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, d.linearSupport ? c.LINEAR : c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, this.resolution, this.resolution, 0, c.RGBA, d.type, null), c.framebufferTexture2D(c.FRAMEBUFFER, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, s, 0), this.textures.push(s), this.framebuffers.push(l)
            }
            this.quad = c.createBuffer(), c.bindBuffer(c.ARRAY_BUFFER, this.quad), c.bufferData(c.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), c.STATIC_DRAW), this.initShaders(), this.initTexture(), this.setTransparentTexture(), this.loadImage(), c.clearColor(0, 0, 0, 0), c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA), this.visible = !0, this.running = !0, this.inited = !0, this.setupPointerEvents(), requestAnimationFrame(n)
        };
        m.DEFAULTS = {
            imageUrl: null,
            resolution: 256,
            dropRadius: 20,
            perturbance: .03,
            interactive: !0,
            crossOrigin: ""
        }, m.prototype = {
            setupPointerEvents: function() {
                function t() {
                    return i.visible && i.running && i.interactive
                }

                function e(e, n) {
                    t() && i.dropAtPointer(e, i.dropRadius * (n ? 1.5 : 1), n ? .14 : .01)
                }
                var i = this;
                this.$el.on("mousemove.ripples", function(t) {
                    e(t)
                }).on("touchmove.ripples, touchstart.ripples", function(t) {
                    for (var i = t.originalEvent.changedTouches, n = 0; n < i.length; n++) e(i[n])
                }).on("mousedown.ripples", function(t) {
                    e(t, !0)
                })
            },
            loadImage: function() {
                var t = this;
                c = this.context;
                var e = this.imageUrl || s(this.originalCssBackgroundImage) || s(this.$el.css("backgroundImage"));
                if (e != this.imageSource) {
                    if (this.imageSource = e, !this.imageSource) return void this.setTransparentTexture();
                    var i = new Image;
                    i.onload = function() {
                        function e(t) {
                            return 0 == (t & t - 1)
                        }
                        c = t.context;
                        var n = e(i.width) && e(i.height) ? c.REPEAT : c.CLAMP_TO_EDGE;
                        c.bindTexture(c.TEXTURE_2D, t.backgroundTexture), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, n), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, n), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, i), t.backgroundWidth = i.width, t.backgroundHeight = i.height, t.hideCssBackground()
                    }, i.onerror = function() {
                        c = t.context, t.setTransparentTexture()
                    }, i.crossOrigin = l(this.imageSource) ? null : this.crossOrigin, i.src = this.imageSource
                }
            },
            step: function() {
                c = this.context, this.visible && (this.computeTextureBoundaries(), this.running && this.update(), this.render())
            },
            drawQuad: function() {
                c.bindBuffer(c.ARRAY_BUFFER, this.quad), c.vertexAttribPointer(0, 2, c.FLOAT, !1, 0, 0), c.drawArrays(c.TRIANGLE_FAN, 0, 4)
            },
            render: function() {
                c.bindFramebuffer(c.FRAMEBUFFER, null), c.viewport(0, 0, this.canvas.width, this.canvas.height), c.enable(c.BLEND), c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT), c.useProgram(this.renderProgram.id), r(this.backgroundTexture, 0), r(this.textures[0], 1), c.uniform1f(this.renderProgram.locations.perturbance, this.perturbance), c.uniform2fv(this.renderProgram.locations.topLeft, this.renderProgram.uniforms.topLeft), c.uniform2fv(this.renderProgram.locations.bottomRight, this.renderProgram.uniforms.bottomRight), c.uniform2fv(this.renderProgram.locations.containerRatio, this.renderProgram.uniforms.containerRatio), c.uniform1i(this.renderProgram.locations.samplerBackground, 0), c.uniform1i(this.renderProgram.locations.samplerRipples, 1), this.drawQuad(), c.disable(c.BLEND)
            },
            update: function() {
                c.viewport(0, 0, this.resolution, this.resolution), c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), r(this.textures[this.bufferReadIndex]), c.useProgram(this.updateProgram.id), this.drawQuad(), this.swapBufferIndices()
            },
            swapBufferIndices: function() {
                this.bufferWriteIndex = 1 - this.bufferWriteIndex, this.bufferReadIndex = 1 - this.bufferReadIndex
            },
            computeTextureBoundaries: function() {
                var t, i = this.$el.css("background-size"),
                    n = this.$el.css("background-attachment"),
                    a = o(this.$el.css("background-position"));
                if ("fixed" == n ? (t = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }, t.width = u.width(), t.height = u.height()) : (t = this.$el.offset(), t.width = this.$el.innerWidth(), t.height = this.$el.innerHeight()), "cover" == i) var r = Math.max(t.width / this.backgroundWidth, t.height / this.backgroundHeight),
                    s = this.backgroundWidth * r,
                    l = this.backgroundHeight * r;
                else if ("contain" == i) var r = Math.min(t.width / this.backgroundWidth, t.height / this.backgroundHeight),
                    s = this.backgroundWidth * r,
                    l = this.backgroundHeight * r;
                else {
                    i = i.split(" ");
                    var s = i[0] || "",
                        l = i[1] || s;
                    e(s) ? s = t.width * parseFloat(s) / 100 : "auto" != s && (s = parseFloat(s)), e(l) ? l = t.height * parseFloat(l) / 100 : "auto" != l && (l = parseFloat(l)), "auto" == s && "auto" == l ? (s = this.backgroundWidth, l = this.backgroundHeight) : ("auto" == s && (s = this.backgroundWidth * (l / this.backgroundHeight)), "auto" == l && (l = this.backgroundHeight * (s / this.backgroundWidth)))
                }
                var c = a[0],
                    d = a[1];
                c = e(c) ? t.left + (t.width - s) * parseFloat(c) / 100 : t.left + parseFloat(c), d = e(d) ? t.top + (t.height - l) * parseFloat(d) / 100 : t.top + parseFloat(d);
                var p = this.$el.offset();
                this.renderProgram.uniforms.topLeft = new Float32Array([(p.left - c) / s, (p.top - d) / l]), this.renderProgram.uniforms.bottomRight = new Float32Array([this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / s, this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / l]);
                var m = Math.max(this.canvas.width, this.canvas.height);
                this.renderProgram.uniforms.containerRatio = new Float32Array([this.canvas.width / m, this.canvas.height / m])
            },
            initShaders: function() {
                var t = ["attribute vec2 vertex;", "varying vec2 coord;", "void main() {", "coord = vertex * 0.5 + 0.5;", "gl_Position = vec4(vertex, 0.0, 1.0);", "}"].join("\n");
                this.dropProgram = a(t, ["precision highp float;", "const float PI = 3.141592653589793;", "uniform sampler2D texture;", "uniform vec2 center;", "uniform float radius;", "uniform float strength;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);", "drop = 0.5 - cos(drop * PI) * 0.5;", "info.r += drop * strength;", "gl_FragColor = info;", "}"].join("\n")), this.updateProgram = a(t, ["precision highp float;", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 coord;", "void main() {", "vec4 info = texture2D(texture, coord);", "vec2 dx = vec2(delta.x, 0.0);", "vec2 dy = vec2(0.0, delta.y);", "float average = (", "texture2D(texture, coord - dx).r +", "texture2D(texture, coord - dy).r +", "texture2D(texture, coord + dx).r +", "texture2D(texture, coord + dy).r", ") * 0.25;", "info.g += (average - info.r) * 2.0;", "info.g *= 0.995;", "info.r += info.g;", "gl_FragColor = info;", "}"].join("\n")), c.uniform2fv(this.updateProgram.locations.delta, this.textureDelta), this.renderProgram = a(["precision highp float;", "attribute vec2 vertex;", "uniform vec2 topLeft;", "uniform vec2 bottomRight;", "uniform vec2 containerRatio;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);", "backgroundCoord.y = 1.0 - backgroundCoord.y;", "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;", "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);", "}"].join("\n"), ["precision highp float;", "uniform sampler2D samplerBackground;", "uniform sampler2D samplerRipples;", "uniform vec2 delta;", "uniform float perturbance;", "varying vec2 ripplesCoord;", "varying vec2 backgroundCoord;", "void main() {", "float height = texture2D(samplerRipples, ripplesCoord).r;", "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;", "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;", "vec3 dx = vec3(delta.x, heightX - height, 0.0);", "vec3 dy = vec3(0.0, heightY - height, delta.y);", "vec2 offset = -normalize(cross(dy, dx)).xz;", "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);", "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;", "}"].join("\n")), c.uniform2fv(this.renderProgram.locations.delta, this.textureDelta)
            },
            initTexture: function() {
                this.backgroundTexture = c.createTexture(), c.bindTexture(c.TEXTURE_2D, this.backgroundTexture), c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, 1), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR)
            },
            setTransparentTexture: function() {
                c.bindTexture(c.TEXTURE_2D, this.backgroundTexture), c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, c.UNSIGNED_BYTE, p)
            },
            hideCssBackground: function() {
                var t = this.$el[0].style.backgroundImage;
                "none" != t && (this.originalInlineCss = t, this.originalCssBackgroundImage = this.$el.css("backgroundImage"), this.$el.css("backgroundImage", "none"))
            },
            restoreCssBackground: function() {
                this.$el.css("backgroundImage", this.originalInlineCss || "")
            },
            dropAtPointer: function(t, e, i) {
                var n = parseInt(this.$el.css("border-left-width")) || 0,
                    o = parseInt(this.$el.css("border-top-width")) || 0;
                this.drop(t.pageX - this.$el.offset().left - n, t.pageY - this.$el.offset().top - o, e, i)
            },
            drop: function(t, e, i, n) {
                c = this.context;
                var o = this.$el.innerWidth(),
                    a = this.$el.innerHeight(),
                    s = Math.max(o, a);
                i /= s;
                var l = new Float32Array([(2 * t - o) / s, (a - 2 * e) / s]);
                c.viewport(0, 0, this.resolution, this.resolution), c.bindFramebuffer(c.FRAMEBUFFER, this.framebuffers[this.bufferWriteIndex]), r(this.textures[this.bufferReadIndex]), c.useProgram(this.dropProgram.id), c.uniform2fv(this.dropProgram.locations.center, l), c.uniform1f(this.dropProgram.locations.radius, i), c.uniform1f(this.dropProgram.locations.strength, n), this.drawQuad(), this.swapBufferIndices()
            },
            destroy: function() {
                this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"), this.$canvas.remove(), this.restoreCssBackground()
            },
            show: function() {
                this.visible = !0, this.$canvas.show(), this.hideCssBackground()
            },
            hide: function() {
                this.visible = !1, this.$canvas.hide(), this.restoreCssBackground()
            },
            pause: function() {
                this.running = !1
            },
            play: function() {
                this.running = !0
            },
            set: function(t, e) {
                switch (t) {
                    case "dropRadius":
                    case "perturbance":
                    case "interactive":
                    case "crossOrigin":
                        this[t] = e;
                        break;
                    case "imageUrl":
                        this.imageUrl = e, this.loadImage()
                }
            }
        };
        var h = t.fn.ripples;
        t.fn.ripples = function(e) {
            if (!d) throw new Error("Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");
            var i = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
            return this.each(function() {
                var n = t(this),
                    o = n.data("ripples"),
                    a = t.extend({}, m.DEFAULTS, n.data(), "object" == typeof e && e);
                (o || "string" != typeof e) && (o ? "string" == typeof e && m.prototype[e].apply(o, i) : n.data("ripples", o = new m(this, a)))
            })
        }, t.fn.ripples.Constructor = m, t.fn.ripples.noConflict = function() {
            return t.fn.ripples = h, this
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : e()
    }(this, function() {
        function t(t) {
            if (null === f) {
                for (var e = t.length, i = 0, n = document.getElementById(a), o = "<ul>"; i < e;) o += "<li>" + t[i] + "</li>", i++;
                o += "</ul>", n.innerHTML = o
            } else f(t)
        }

        function e(t) {
            return t.replace(/<b[^>]*>(.*?)<\/b>/gi, function(t, e) {
                return e
            }).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi, "")
        }

        function i(t) {
            for (var e = t.getElementsByTagName("a"), i = e.length - 1; i >= 0; i--) e[i].setAttribute("target", "_blank")
        }

        function n(t, e) {
            for (var i = [], n = new RegExp("(^| )" + e + "( |$)"), o = t.getElementsByTagName("*"), a = 0, r = o.length; a < r; a++) n.test(o[a].className) && i.push(o[a]);
            return i
        }

        function o(t) {
            if (void 0 !== t && t.innerHTML.indexOf("data-srcset") >= 0) {
                var e = t.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0];
                return decodeURIComponent(e).split('"')[1]
            }
        }
        var a = "",
            r = 20,
            s = !0,
            l = [],
            c = !1,
            u = !0,
            d = !0,
            p = null,
            m = !0,
            h = !0,
            f = null,
            v = !0,
            g = !1,
            y = !0,
            b = "en",
            w = !0,
            x = !1,
            _ = null,
            I = {
                fetch: function(t) {
                    if (void 0 === t.maxTweets && (t.maxTweets = 20), void 0 === t.enableLinks && (t.enableLinks = !0), void 0 === t.showUser && (t.showUser = !0), void 0 === t.showTime && (t.showTime = !0), void 0 === t.dateFunction && (t.dateFunction = "default"), void 0 === t.showRetweet && (t.showRetweet = !0), void 0 === t.customCallback && (t.customCallback = null), void 0 === t.showInteraction && (t.showInteraction = !0), void 0 === t.showImages && (t.showImages = !1), void 0 === t.linksInNewWindow && (t.linksInNewWindow = !0), void 0 === t.showPermalinks && (t.showPermalinks = !0), void 0 === t.dataOnly && (t.dataOnly = !1), c) l.push(t);
                    else {
                        c = !0, a = t.domId, r = t.maxTweets, s = t.enableLinks, d = t.showUser, u = t.showTime, h = t.showRetweet, p = t.dateFunction, f = t.customCallback, v = t.showInteraction, g = t.showImages, y = t.linksInNewWindow, w = t.showPermalinks, x = t.dataOnly;
                        var e = document.getElementsByTagName("head")[0];
                        null !== _ && e.removeChild(_), _ = document.createElement("script"), _.type = "text/javascript", void 0 !== t.list ? _.src = "https://syndication.twitter.com/timeline/list?callback=__twttrf.callback&dnt=false&list_slug=" + t.list.listSlug + "&screen_name=" + t.list.screenName + "&suppress_response_codes=true&lang=" + (t.lang || b) + "&rnd=" + Math.random() : void 0 !== t.profile ? _.src = "https://syndication.twitter.com/timeline/profile?callback=__twttrf.callback&dnt=false&screen_name=" + t.profile.screenName + "&suppress_response_codes=true&lang=" + (t.lang || b) + "&rnd=" + Math.random() : void 0 !== t.likes ? _.src = "https://syndication.twitter.com/timeline/likes?callback=__twttrf.callback&dnt=false&screen_name=" + t.likes.screenName + "&suppress_response_codes=true&lang=" + (t.lang || b) + "&rnd=" + Math.random() : _.src = "https://cdn.syndication.twimg.com/widgets/timelines/" + t.id + "?&lang=" + (t.lang || b) + "&callback=__twttrf.callback&suppress_response_codes=true&rnd=" + Math.random(), e.appendChild(_)
                    }
                },
                callback: function(a) {
                    function f(t) {
                        var e = t.getElementsByTagName("img")[0];
                        return e.src = e.getAttribute("data-src-2x"), t
                    }
                    if (void 0 === a || void 0 === a.body) return c = !1, void(l.length > 0 && (I.fetch(l[0]), l.splice(0, 1)));
                    a.body = a.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g, ""), g || (a.body = a.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g, "")), d || (a.body = a.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g, ""));
                    var b = document.createElement("div");
                    b.innerHTML = a.body, "undefined" == typeof b.getElementsByClassName && (m = !1);
                    var _ = [],
                        C = [],
                        T = [],
                        k = [],
                        S = [],
                        E = [],
                        P = [],
                        A = 0;
                    if (m)
                        for (var M = b.getElementsByClassName("timeline-Tweet"); A < M.length;) M[A].getElementsByClassName("timeline-Tweet-retweetCredit").length > 0 ? S.push(!0) : S.push(!1), (!S[A] || S[A] && h) && (_.push(M[A].getElementsByClassName("timeline-Tweet-text")[0]), E.push(M[A].getAttribute("data-tweet-id")), d && C.push(f(M[A].getElementsByClassName("timeline-Tweet-author")[0])), T.push(M[A].getElementsByClassName("dt-updated")[0]), P.push(M[A].getElementsByClassName("timeline-Tweet-timestamp")[0]), void 0 !== M[A].getElementsByClassName("timeline-Tweet-media")[0] ? k.push(M[A].getElementsByClassName("timeline-Tweet-media")[0]) : k.push(void 0)), A++;
                    else
                        for (var M = n(b, "timeline-Tweet"); A < M.length;) n(M[A], "timeline-Tweet-retweetCredit").length > 0 ? S.push(!0) : S.push(!1), (!S[A] || S[A] && h) && (_.push(n(M[A], "timeline-Tweet-text")[0]), E.push(M[A].getAttribute("data-tweet-id")), d && C.push(f(n(M[A], "timeline-Tweet-author")[0])), T.push(n(M[A], "dt-updated")[0]), P.push(n(M[A], "timeline-Tweet-timestamp")[0]), void 0 !== n(M[A], "timeline-Tweet-media")[0] ? k.push(n(M[A], "timeline-Tweet-media")[0]) : k.push(void 0)), A++;
                    _.length > r && (_.splice(r, _.length - r), C.splice(r, C.length - r), T.splice(r, T.length - r), S.splice(r, S.length - r), k.splice(r, k.length - r), P.splice(r, P.length - r));
                    var L = [],
                        A = _.length,
                        z = 0;
                    if (x)
                        for (; z < A;) L.push({
                            tweet: _[z].innerHTML,
                            author: C[z] ? C[z].innerHTML : "Unknown Author",
                            time: T[z].textContent,
                            timestamp: T[z].getAttribute("datetime").replace("+0000", "Z").replace(/([\+\-])(\d\d)(\d\d)/, "$1$2:$3"),
                            image: o(k[z]),
                            rt: S[z],
                            tid: E[z],
                            permalinkURL: void 0 === P[z] ? "" : P[z].href
                        }), z++;
                    else
                        for (; z < A;) {
                            if ("string" != typeof p) {
                                var D = T[z].getAttribute("datetime"),
                                    R = new Date(T[z].getAttribute("datetime").replace(/-/g, "/").replace("T", " ").split("+")[0]),
                                    O = p(R, D);
                                if (T[z].setAttribute("aria-label", O), _[z].textContent)
                                    if (m) T[z].textContent = O;
                                    else {
                                        var $ = document.createElement("p"),
                                            N = document.createTextNode(O);
                                        $.appendChild(N), $.setAttribute("aria-label", O), T[z] = $
                                    } else T[z].textContent = O
                            }
                            var j = "";
                            s ? (y && (i(_[z]), d && i(C[z])), d && (j += '<div class="user">' + e(C[z].innerHTML) + "</div>"), j += '<p class="tweet">' + e(_[z].innerHTML) + "</p>", u && (j += w ? '<p class="timePosted"><a href="' + P[z] + '">' + T[z].getAttribute("aria-label") + "</a></p>" : '<p class="timePosted">' + T[z].getAttribute("aria-label") + "</p>")) : _[z].textContent ? (d && (j += '<p class="user">' + C[z].textContent + "</p>"), j += '<p class="tweet">' + _[z].textContent + "</p>", u && (j += '<p class="timePosted">' + T[z].textContent + "</p>")) : (d && (j += '<p class="user">' + C[z].textContent + "</p>"), j += '<p class="tweet">' + _[z].textContent + "</p>", u && (j += '<p class="timePosted">' + T[z].textContent + "</p>")), v && (j += '<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to=' + E[z] + '" class="twitter_reply_icon"' + (y ? ' target="_blank">' : ">") + 'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id=' + E[z] + '" class="twitter_retweet_icon"' + (y ? ' target="_blank">' : ">") + 'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id=' + E[z] + '" class="twitter_fav_icon"' + (y ? ' target="_blank">' : ">") + "Favorite</a></p>"), g && void 0 !== k[z] && void 0 !== o(k[z]) && (j += '<div class="media"><img src="' + o(k[z]) + '" alt="Image from tweet" /></div>'), g ? L.push(j) : !g && _[z].textContent.length && L.push(j), z++
                        }
                    t(L), c = !1, l.length > 0 && (I.fetch(l[0]), l.splice(0, 1))
                }
            };
        return window.__twttrf = I, window.twitterFetcher = I, I
    }),
    /*!
     * Name    : Just Another Parallax [Jarallax]
     * Version : 1.7.3
     * Author  : _nK https://nkdev.info
     * GitHub  : https://github.com/nk-o/jarallax
     */
    function(t) {
        "use strict";

        function e() {
            o = t.innerWidth || document.documentElement.clientWidth, a = t.innerHeight || document.documentElement.clientHeight
        }

        function i(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i) : t.attachEvent("on" + e, function() {
                i.call(t)
            })
        }

        function n(i) {
            t.requestAnimationFrame(function() {
                "scroll" !== i.type && e();
                for (var t = 0, n = h.length; t < n; t++) "scroll" !== i.type && (h[t].coverImage(), h[t].clipContainer()), h[t].onScroll()
            })
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }), t.requestAnimationFrame || ! function() {
            for (var e = ["webkit", "moz"], i = 0; i < e.length && !t.requestAnimationFrame; ++i) {
                var n = e[i];
                t.requestAnimationFrame = t[n + "RequestAnimationFrame"], t.cancelAnimationFrame = t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent) || !t.requestAnimationFrame || !t.cancelAnimationFrame) {
                var o = 0;
                t.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        i = Math.max(o + 16, e);
                    return setTimeout(function() {
                        t(o = i)
                    }, i - e)
                }, t.cancelAnimationFrame = clearTimeout
            }
        }();
        var o, a, r = function() {
                if (!t.getComputedStyle) return !1;
                var e, i = document.createElement("p"),
                    n = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                (document.body || document.documentElement).insertBefore(i, null);
                for (var o in n) "undefined" != typeof i.style[o] && (i.style[o] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(i).getPropertyValue(n[o]));
                return (document.body || document.documentElement).removeChild(i), "undefined" != typeof e && e.length > 0 && "none" !== e
            }(),
            s = navigator.userAgent.toLowerCase().indexOf("android") > -1,
            l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream,
            c = !!t.opera,
            u = /Edge\/\d+/.test(navigator.userAgent),
            d = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
            p = !!Function("/*@cc_on return document.documentMode===10@*/")(),
            m = document.all && !t.atob;
        e();
        var h = [],
            f = function() {
                function t(t, i) {
                    var n, o = this;
                    if (o.$item = t, o.defaults = {
                            type: "scroll",
                            speed: .5,
                            imgSrc: null,
                            imgWidth: null,
                            imgHeight: null,
                            enableTransform: !0,
                            elementInViewport: null,
                            zIndex: -100,
                            noAndroid: !1,
                            noIos: !0,
                            onScroll: null,
                            onInit: null,
                            onDestroy: null,
                            onCoverImage: null
                        }, n = JSON.parse(o.$item.getAttribute("data-jarallax") || "{}"), o.options = o.extend({}, o.defaults, n, i), !(s && o.options.noAndroid || l && o.options.noIos)) {
                        o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed)));
                        var a = o.options.elementInViewport;
                        a && "object" == typeof a && "undefined" != typeof a.length && (a = a[0]), !a instanceof Element && (a = null), o.options.elementInViewport = a, o.instanceID = e++, o.image = {
                            src: o.options.imgSrc || null,
                            $container: null,
                            $item: null,
                            width: o.options.imgWidth || null,
                            height: o.options.imgHeight || null,
                            useImgTag: l || s || c || d || p || u
                        }, o.initImg() && o.init()
                    }
                }
                var e = 0;
                return t
            }();
        f.prototype.css = function(e, i) {
            if ("string" == typeof i) return t.getComputedStyle ? t.getComputedStyle(e).getPropertyValue(i) : e.style[i];
            i.transform && (i.WebkitTransform = i.MozTransform = i.transform);
            for (var n in i) e.style[n] = i[n];
            return e
        }, f.prototype.extend = function(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        }, f.prototype.initImg = function() {
            var t = this;
            return null === t.image.src && (t.image.src = t.css(t.$item, "background-image").replace(/^url\(['"]?/g, "").replace(/['"]?\)$/g, "")), !(!t.image.src || "none" === t.image.src)
        }, f.prototype.init = function() {
            function t() {
                e.coverImage(), e.clipContainer(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), setTimeout(function() {
                    e.$item && e.css(e.$item, {
                        "background-image": "none",
                        "background-attachment": "scroll",
                        "background-size": "auto"
                    })
                }, 0)
            }
            var e = this,
                i = {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    pointerEvents: "none"
                },
                n = {
                    position: "fixed"
                };
            e.$item.setAttribute("data-jarallax-original-styles", e.$item.getAttribute("style")), "static" === e.css(e.$item, "position") && e.css(e.$item, {
                position: "relative"
            }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                zIndex: 0
            }), e.image.$container = document.createElement("div"), e.css(e.image.$container, i), e.css(e.image.$container, {
                visibility: "hidden",
                "z-index": e.options.zIndex
            }), e.image.$container.setAttribute("id", "jarallax-container-" + e.instanceID), e.$item.appendChild(e.image.$container), e.image.useImgTag && r && e.options.enableTransform ? (e.image.$item = document.createElement("img"), e.image.$item.setAttribute("src", e.image.src), n = e.extend({
                "max-width": "none"
            }, i, n)) : (e.image.$item = document.createElement("div"), n = e.extend({
                "background-position": "50% 50%",
                "background-size": "100% auto",
                "background-repeat": "no-repeat no-repeat",
                "background-image": 'url("' + e.image.src + '")'
            }, i, n)), m && (n.backgroundAttachment = "fixed"), e.parentWithTransform = 0;
            for (var o = e.$item; null !== o && o !== document && 0 === e.parentWithTransform;) {
                var a = e.css(o, "-webkit-transform") || e.css(o, "-moz-transform") || e.css(o, "transform");
                a && "none" !== a && (e.parentWithTransform = 1, e.css(e.image.$container, {
                    transform: "translateX(0) translateY(0)"
                })), o = o.parentNode
            }
            e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.image.width && e.image.height ? t() : e.getImageSize(e.image.src, function(i, n) {
                e.image.width = i, e.image.height = n, t()
            }), h.push(e)
        }, f.prototype.destroy = function() {
            for (var t = this, e = 0, i = h.length; e < i; e++)
                if (h[e].instanceID === t.instanceID) {
                    h.splice(e, 1);
                    break
                }
            var n = t.$item.getAttribute("data-jarallax-original-styles");
            t.$item.removeAttribute("data-jarallax-original-styles"), "null" === n ? t.$item.removeAttribute("style") : t.$item.setAttribute("style", n), t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles), t.image.$container.parentNode.removeChild(t.image.$container), t.options.onDestroy && t.options.onDestroy.call(t), delete t.$item.jarallax;
            for (var o in t) delete t[o]
        }, f.prototype.getImageSize = function(t, e) {
            if (t && e) {
                var i = new Image;
                i.onload = function() {
                    e(i.width, i.height)
                }, i.src = t
            }
        }, f.prototype.clipContainer = function() {
            if (!m) {
                var t = this,
                    e = t.image.$container.getBoundingClientRect(),
                    i = e.width,
                    n = e.height;
                if (!t.$clipStyles) {
                    t.$clipStyles = document.createElement("style"), t.$clipStyles.setAttribute("type", "text/css"), t.$clipStyles.setAttribute("id", "#jarallax-clip-" + t.instanceID);
                    var o = document.head || document.getElementsByTagName("head")[0];
                    o.appendChild(t.$clipStyles)
                }
                var a = ["#jarallax-container-" + t.instanceID + " {", "   clip: rect(0 " + i + "px " + n + "px 0);", "   clip: rect(0, " + i + "px, " + n + "px, 0);", "}"].join("\n");
                t.$clipStyles.styleSheet ? t.$clipStyles.styleSheet.cssText = a : t.$clipStyles.innerHTML = a
            }
        }, f.prototype.coverImage = function() {
            var t = this;
            if (t.image.width && t.image.height) {
                var e = t.image.$container.getBoundingClientRect(),
                    i = e.width,
                    n = e.height,
                    o = e.left,
                    s = t.image.width,
                    l = t.image.height,
                    c = t.options.speed,
                    u = "scroll" === t.options.type || "scroll-opacity" === t.options.type,
                    d = 0,
                    p = 0,
                    m = n,
                    h = 0,
                    f = 0;
                u && (d = c < 0 ? c * Math.max(n, a) : c * (n + a), c > 1 ? m = Math.abs(d - a) : c < 0 ? m = d / c + Math.abs(d) : m += Math.abs(a - n) * (1 - c), d /= 2), p = m * s / l, p < i && (p = i, m = p * l / s), t.bgPosVerticalCenter = 0, !(u && m < a) || r && t.options.enableTransform || (t.bgPosVerticalCenter = (a - m) / 2, m = a), u ? (h = o + (i - p) / 2, f = (a - m) / 2) : (h = (i - p) / 2, f = (n - m) / 2), r && t.options.enableTransform && t.parentWithTransform && (h -= o), t.parallaxScrollDistance = d, t.css(t.image.$item, {
                    width: p + "px",
                    height: m + "px",
                    marginLeft: h + "px",
                    marginTop: f + "px"
                }), t.options.onCoverImage && t.options.onCoverImage.call(t)
            }
        }, f.prototype.isVisible = function() {
            return this.isElementInViewport || !1
        }, f.prototype.onScroll = function(t) {
            var e = this;
            if (e.image.width && e.image.height) {
                var i = e.$item.getBoundingClientRect(),
                    n = i.top,
                    s = i.height,
                    l = {
                        position: "absolute",
                        visibility: "visible",
                        backgroundPosition: "50% 50%"
                    },
                    c = i;
                if (e.options.elementInViewport && (c = e.options.elementInViewport.getBoundingClientRect()), e.isElementInViewport = c.bottom >= 0 && c.right >= 0 && c.top <= a && c.left <= o, t || e.isElementInViewport) {
                    var u = Math.max(0, n),
                        d = Math.max(0, s + n),
                        p = Math.max(0, -n),
                        h = Math.max(0, n + s - a),
                        f = Math.max(0, s - (n + s - a)),
                        v = Math.max(0, -n + a - s),
                        g = 1 - 2 * (a - n) / (a + s),
                        y = 1;
                    if (s < a ? y = 1 - (p || h) / s : d <= a ? y = d / a : f <= a && (y = f / a), "opacity" !== e.options.type && "scale-opacity" !== e.options.type && "scroll-opacity" !== e.options.type || (l.transform = "translate3d(0, 0, 0)", l.opacity = y), "scale" === e.options.type || "scale-opacity" === e.options.type) {
                        var b = 1;
                        e.options.speed < 0 ? b -= e.options.speed * y : b += e.options.speed * (1 - y), l.transform = "scale(" + b + ") translate3d(0, 0, 0)"
                    }
                    if ("scroll" === e.options.type || "scroll-opacity" === e.options.type) {
                        var w = e.parallaxScrollDistance * g;
                        r && e.options.enableTransform ? (e.parentWithTransform && (w -= n), l.transform = "translate3d(0, " + w + "px, 0)") : e.image.useImgTag ? l.top = w + "px" : (e.bgPosVerticalCenter && (w += e.bgPosVerticalCenter), l.backgroundPosition = "50% " + w + "px"), l.position = m ? "absolute" : "fixed"
                    }
                    e.css(e.image.$item, l), e.options.onScroll && e.options.onScroll.call(e, {
                        section: i,
                        beforeTop: u,
                        beforeTopEnd: d,
                        afterTop: p,
                        beforeBottom: h,
                        beforeBottomEnd: f,
                        afterBottom: v,
                        visiblePercent: y,
                        fromViewportCenter: g
                    })
                }
            }
        }, i(t, "scroll", n), i(t, "resize", n), i(t, "orientationchange", n), i(t, "load", n);
        var v = function(t) {
            ("object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName) && (t = [t]);
            var e, i = arguments[1],
                n = Array.prototype.slice.call(arguments, 2),
                o = t.length,
                a = 0;
            for (a; a < o; a++)
                if ("object" == typeof i || "undefined" == typeof i ? t[a].jarallax || (t[a].jarallax = new f(t[a], i)) : t[a].jarallax && (e = t[a].jarallax[i].apply(t[a].jarallax, n)), "undefined" != typeof e) return e;
            return t
        };
        v.constructor = f;
        var g = t.jarallax;
        if (t.jarallax = v, t.jarallax.noConflict = function() {
                return t.jarallax = g, this
            }, "undefined" != typeof jQuery) {
            var y = function() {
                var e = arguments || [];
                Array.prototype.unshift.call(e, this);
                var i = v.apply(t, e);
                return "object" != typeof i ? i : this
            };
            y.constructor = f;
            var b = jQuery.fn.jarallax;
            jQuery.fn.jarallax = y, jQuery.fn.jarallax.noConflict = function() {
                return jQuery.fn.jarallax = b, this
            }
        }
        i(t, "DOMContentLoaded", function() {
            v(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"))
        })
    }(window),
    /*!
     * Name    : Video Worker (wrapper for Youtube, Vimeo and Local videos)
     * Version : 1.2.1
     * Author  : _nK https://nkdev.info
     * GitHub  : https://github.com/nk-o/jarallax
     */
    function(t) {
        "use strict";

        function e(t) {
            t = t || {};
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e])
                    for (var i in arguments[e]) arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
        }

        function i() {
            this._done = [], this._fail = []
        }

        function n(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i) : t.attachEvent("on" + e, function() {
                i.call(t)
            })
        }
        i.prototype = {
            execute: function(t, e) {
                var i = t.length;
                for (e = Array.prototype.slice.call(e); i--;) t[i].apply(null, e)
            },
            resolve: function() {
                this.execute(this._done, arguments)
            },
            reject: function() {
                this.execute(this._fail, arguments)
            },
            done: function(t) {
                this._done.push(t)
            },
            fail: function(t) {
                this._fail.push(t)
            }
        };
        var o = function() {
            function t(t, n) {
                var o = this;
                o.url = t, o.options_default = {
                    autoplay: 1,
                    loop: 1,
                    mute: 1,
                    controls: 0,
                    startTime: 0,
                    endTime: 0
                }, o.options = e({}, o.options_default, n), o.videoID = o.parseURL(t), o.videoID && (o.ID = i++, o.loadAPI(), o.init())
            }
            var i = 0;
            return t
        }();
        o.prototype.parseURL = function(t) {
            function e(t) {
                var e = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
                    i = t.match(e);
                return !(!i || 11 !== i[1].length) && i[1]
            }

            function i(t) {
                var e = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
                    i = t.match(e);
                return !(!i || !i[3]) && i[3]
            }

            function n(t) {
                for (var e = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/), i = {}, n = 0, o = 0; o < e.length; o++) {
                    var a = e[o].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                    a && a[1] && a[2] && (i["ogv" === a[1] ? "ogg" : a[1]] = a[2], n = 1)
                }
                return !!n && i
            }
            var o = e(t),
                a = i(t),
                r = n(t);
            return o ? (this.type = "youtube", o) : a ? (this.type = "vimeo", a) : !!r && (this.type = "local", r)
        }, o.prototype.isValid = function() {
            return !!this.videoID
        }, o.prototype.on = function(t, e) {
            this.userEventsList = this.userEventsList || [], (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e)
        }, o.prototype.off = function(t, e) {
            if (this.userEventsList && this.userEventsList[t])
                if (e)
                    for (var i = 0; i < this.userEventsList[t].length; i++) this.userEventsList[t][i] === e && (this.userEventsList[t][i] = !1);
                else delete this.userEventsList[t]
        }, o.prototype.fire = function(t) {
            var e = [].slice.call(arguments, 1);
            if (this.userEventsList && "undefined" != typeof this.userEventsList[t])
                for (var i in this.userEventsList[t]) this.userEventsList[t][i] && this.userEventsList[t][i].apply(this, e)
        }, o.prototype.play = function(t) {
            var e = this;
            e.player && ("youtube" === e.type && e.player.playVideo && ("undefined" != typeof t && e.player.seekTo(t || 0), e.player.playVideo()), "vimeo" === e.type && ("undefined" != typeof t && e.player.setCurrentTime(t), e.player.getPaused().then(function(t) {
                t && e.player.play()
            })), "local" === e.type && ("undefined" != typeof t && (e.player.currentTime = t), e.player.play()))
        }, o.prototype.pause = function() {
            this.player && ("youtube" === this.type && this.player.pauseVideo && this.player.pauseVideo(), "vimeo" === this.type && this.player.pause(), "local" === this.type && this.player.pause())
        }, o.prototype.getImageURL = function(t) {
            var e = this;
            if (e.videoImage) return void t(e.videoImage);
            if ("youtube" === e.type) {
                var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
                    n = 0,
                    o = new Image;
                o.onload = function() {
                    120 !== (this.naturalWidth || this.width) || n === i.length - 1 ? (e.videoImage = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg", t(e.videoImage)) : (n++, this.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg")
                }, o.src = "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg"
            }
            if ("vimeo" === e.type) {
                var a = new XMLHttpRequest;
                a.open("GET", "https://vimeo.com/api/v2/video/" + e.videoID + ".json", !0), a.onreadystatechange = function() {
                    if (4 === this.readyState && this.status >= 200 && this.status < 400) {
                        var i = JSON.parse(this.responseText);
                        e.videoImage = i[0].thumbnail_large, t(e.videoImage)
                    }
                }, a.send(), a = null
            }
        }, o.prototype.getIframe = function(e) {
            var i = this;
            return i.$iframe ? void e(i.$iframe) : void i.onAPIready(function() {
                function o(t, e, i) {
                    var n = document.createElement("source");
                    n.src = e, n.type = i, t.appendChild(n)
                }
                var a;
                if (i.$iframe || (a = document.createElement("div"), a.style.display = "none"), "youtube" === i.type) {
                    i.playerOptions = {}, i.playerOptions.videoId = i.videoID, i.playerOptions.playerVars = {
                        autohide: 1,
                        rel: 0,
                        autoplay: 0
                    }, i.options.controls || (i.playerOptions.playerVars.iv_load_policy = 3, i.playerOptions.playerVars.modestbranding = 1, i.playerOptions.playerVars.controls = 0, i.playerOptions.playerVars.showinfo = 0, i.playerOptions.playerVars.disablekb = 1);
                    var r, s;
                    i.playerOptions.events = {
                        onReady: function(t) {
                            i.options.mute && t.target.mute(), i.options.autoplay && i.play(i.options.startTime), i.fire("ready", t)
                        },
                        onStateChange: function(t) {
                            i.options.loop && t.data === YT.PlayerState.ENDED && i.play(i.options.startTime), r || t.data !== YT.PlayerState.PLAYING || (r = 1, i.fire("started", t)), t.data === YT.PlayerState.PLAYING && i.fire("play", t), t.data === YT.PlayerState.PAUSED && i.fire("pause", t), t.data === YT.PlayerState.ENDED && i.fire("end", t), i.options.endTime && (t.data === YT.PlayerState.PLAYING ? s = setInterval(function() {
                                i.options.endTime && i.player.getCurrentTime() >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                            }, 150) : clearInterval(s))
                        }
                    };
                    var l = !i.$iframe;
                    if (l) {
                        var c = document.createElement("div");
                        c.setAttribute("id", i.playerID), a.appendChild(c), document.body.appendChild(a)
                    }
                    i.player = i.player || new t.YT.Player(i.playerID, i.playerOptions), l && (i.$iframe = document.getElementById(i.playerID), i.videoWidth = parseInt(i.$iframe.getAttribute("width"), 10) || 1280, i.videoHeight = parseInt(i.$iframe.getAttribute("height"), 10) || 720)
                }
                if ("vimeo" === i.type) {
                    i.playerOptions = "", i.playerOptions += "player_id=" + i.playerID, i.playerOptions += "&autopause=0", i.options.controls || (i.playerOptions += "&badge=0&byline=0&portrait=0&title=0"), i.playerOptions += "&autoplay=" + (i.options.autoplay ? "1" : "0"), i.playerOptions += "&loop=" + (i.options.loop ? 1 : 0), i.$iframe || (i.$iframe = document.createElement("iframe"), i.$iframe.setAttribute("id", i.playerID), i.$iframe.setAttribute("src", "https://player.vimeo.com/video/" + i.videoID + "?" + i.playerOptions), i.$iframe.setAttribute("frameborder", "0"), a.appendChild(i.$iframe), document.body.appendChild(a)), i.player = i.player || new Vimeo.Player(i.$iframe), i.player.getVideoWidth().then(function(t) {
                        i.videoWidth = t || 1280
                    }), i.player.getVideoHeight().then(function(t) {
                        i.videoHeight = t || 720
                    }), i.player.setVolume(i.options.mute ? 0 : 100);
                    var u;
                    i.player.on("timeupdate", function(t) {
                        u || i.fire("started", t), u = 1, i.options.endTime && i.options.endTime && t.seconds >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                    }), i.player.on("play", function(t) {
                        i.fire("play", t), i.options.startTime && 0 === t.seconds && i.play(i.options.startTime)
                    }), i.player.on("pause", function(t) {
                        i.fire("pause", t)
                    }), i.player.on("ended", function(t) {
                        i.fire("end", t)
                    }), i.player.on("loaded", function(t) {
                        i.fire("ready", t)
                    })
                }
                if ("local" === i.type) {
                    if (!i.$iframe) {
                        i.$iframe = document.createElement("video"), i.options.mute && (i.$iframe.muted = !0), i.options.loop && (i.$iframe.loop = !0), i.$iframe.setAttribute("id", i.playerID), a.appendChild(i.$iframe), document.body.appendChild(a);
                        for (var d in i.videoID) o(i.$iframe, i.videoID[d], "video/" + d)
                    }
                    i.player = i.player || i.$iframe;
                    var p;
                    n(i.player, "playing", function(t) {
                        p || i.fire("started", t), p = 1
                    }), n(i.player, "timeupdate", function() {
                        i.options.endTime && i.options.endTime && this.currentTime >= i.options.endTime && (i.options.loop ? i.play(i.options.startTime) : i.pause())
                    }), n(i.player, "play", function(t) {
                        i.fire("play", t)
                    }), n(i.player, "pause", function(t) {
                        i.fire("pause", t)
                    }), n(i.player, "ended", function(t) {
                        i.fire("end", t)
                    }), n(i.player, "loadedmetadata", function() {
                        i.videoWidth = this.videoWidth || 1280, i.videoHeight = this.videoHeight || 720, i.fire("ready"), i.options.autoplay && i.play(i.options.startTime)
                    })
                }
                e(i.$iframe)
            })
        }, o.prototype.init = function() {
            var t = this;
            t.playerID = "VideoWorker-" + t.ID
        };
        var a = 0,
            r = 0;
        o.prototype.loadAPI = function() {
            var e = this;
            if (!a || !r) {
                var i = "";
                if ("youtube" !== e.type || a || (a = 1, i = "//www.youtube.com/iframe_api"), "vimeo" !== e.type || r || (r = 1, i = "//player.vimeo.com/api/player.js"), i) {
                    "file://" === t.location.origin && (i = "http:" + i);
                    var n = document.createElement("script"),
                        o = document.getElementsByTagName("head")[0];
                    n.src = i, o.appendChild(n), o = null, n = null
                }
            }
        };
        var s = 0,
            l = 0,
            c = new i,
            u = new i;
        o.prototype.onAPIready = function(e) {
            var i = this;
            if ("youtube" === i.type && ("undefined" != typeof YT && 0 !== YT.loaded || s ? "object" == typeof YT && 1 === YT.loaded ? e() : c.done(function() {
                    e()
                }) : (s = 1, t.onYouTubeIframeAPIReady = function() {
                    t.onYouTubeIframeAPIReady = null, c.resolve("done"), e()
                })), "vimeo" === i.type)
                if ("undefined" != typeof Vimeo || l) "undefined" != typeof Vimeo ? e() : u.done(function() {
                    e()
                });
                else {
                    l = 1;
                    var n = setInterval(function() {
                        "undefined" != typeof Vimeo && (clearInterval(n), u.resolve("done"), e())
                    }, 20)
                }
                "local" === i.type && e()
        }, t.VideoWorker = o
    }(window),
    /*!
     * Name    : Video Background Extension for Jarallax
     * Version : 1.0.0
     * Author  : _nK http://nkdev.info
     * GitHub  : https://github.com/nk-o/jarallax
     */
    function() {
        "use strict";
        if ("undefined" != typeof jarallax) {
            var t = jarallax.constructor,
                e = t.prototype.init;
            t.prototype.init = function() {
                var t = this;
                e.apply(t), t.video && t.video.getIframe(function(e) {
                    var i = e.parentNode;
                    t.css(e, {
                        position: "fixed",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "100%",
                        maxWidth: "none",
                        maxHeight: "none",
                        visibility: "visible",
                        margin: 0,
                        zIndex: -1
                    }), t.$video = e, t.image.$container.appendChild(e), i.parentNode.removeChild(i)
                })
            };
            var i = t.prototype.coverImage;
            t.prototype.coverImage = function() {
                var t = this;
                i.apply(t), t.video && "IFRAME" === t.image.$item.nodeName && t.css(t.image.$item, {
                    height: t.image.$item.getBoundingClientRect().height + 400 + "px",
                    marginTop: -200 + parseFloat(t.css(t.image.$item, "margin-top")) + "px"
                })
            };
            var n = t.prototype.initImg;
            t.prototype.initImg = function() {
                var t = this,
                    e = n.apply(t);
                if (t.options.videoSrc || (t.options.videoSrc = t.$item.getAttribute("data-jarallax-video") || !1), t.options.videoSrc) {
                    var i = new VideoWorker(t.options.videoSrc, {
                        startTime: t.options.videoStartTime || 0,
                        endTime: t.options.videoEndTime || 0
                    });
                    if (i.isValid() && (t.image.useImgTag = !0, i.on("ready", function() {
                            var e = t.onScroll;
                            t.onScroll = function() {
                                e.apply(t), t.isVisible() ? i.play() : i.pause()
                            }
                        }), i.on("started", function() {
                            t.image.$default_item = t.image.$item, t.image.$item = t.$video, t.image.width = t.options.imgWidth = t.video.videoWidth || 1280, t.image.height = t.options.imgHeight = t.video.videoHeight || 720, t.coverImage(), t.clipContainer(), t.onScroll(), t.image.$default_item && (t.image.$default_item.style.display = "none")
                        }), t.video = i, "local" !== i.type && i.getImageURL(function(e) {
                            t.image.src = e, t.init()
                        })), "local" !== i.type) return !1;
                    if (!e) return t.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", !0
                }
                return e
            };
            var o = t.prototype.destroy;
            t.prototype.destroy = function() {
                var t = this;
                o.apply(t)
            }
        }
    }(),
    /**
     * Single Page Nav Plugin
     * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
     * Dual licensed under MIT and GPL.
     * @author Chris Wojcik
     * @version 1.2.0
     */
    "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i, n) {
        "use strict";
        var o = {
            init: function(i, n) {
                this.options = t.extend({}, t.fn.singlePageNav.defaults, i), this.container = n, this.$container = t(n), this.$links = this.$container.find("a"), "" !== this.options.filter && (this.$links = this.$links.filter(this.options.filter)), this.$window = t(e), this.$htmlbody = t("html, body"), this.$links.on("click.singlePageNav", t.proxy(this.handleClick, this)), this.didScroll = !1, this.checkPosition(), this.setTimer()
            },
            handleClick: function(e) {
                var i = this,
                    n = e.currentTarget,
                    o = t(n.hash);
                e.preventDefault(), o.length && (i.clearTimer(), "function" == typeof i.options.beforeStart && i.options.beforeStart(), i.setActiveLink(n.hash), i.scrollTo(o, function() {
                    i.options.updateHash && history.pushState && history.pushState(null, null, n.hash), i.setTimer(), "function" == typeof i.options.onComplete && i.options.onComplete()
                }))
            },
            scrollTo: function(t, e) {
                var i = this,
                    n = i.getCoords(t).top,
                    o = !1;
                i.$htmlbody.stop().animate({
                    scrollTop: n
                }, {
                    duration: i.options.speed,
                    easing: i.options.easing,
                    complete: function() {
                        "function" != typeof e || o || e(), o = !0
                    }
                })
            },
            setTimer: function() {
                var t = this;
                t.$window.on("scroll.singlePageNav", function() {
                    t.didScroll = !0
                }), t.timer = setInterval(function() {
                    t.didScroll && (t.didScroll = !1, t.checkPosition())
                }, 250)
            },
            clearTimer: function() {
                clearInterval(this.timer), this.$window.off("scroll.singlePageNav"), this.didScroll = !1
            },
            checkPosition: function() {
                var t = this.$window.scrollTop(),
                    e = this.getCurrentSection(t);
                null !== e && this.setActiveLink(e)
            },
            getCoords: function(t) {
                return {
                    top: Math.round(t.offset().top) - this.options.offset
                }
            },
            setActiveLink: function(t) {
                var e = this.$container.find("a[href$='" + t + "']");
                e.hasClass(this.options.currentClass) || (this.$links.removeClass(this.options.currentClass), e.addClass(this.options.currentClass))
            },
            getCurrentSection: function(e) {
                var i, n, o, a;
                for (i = 0; i < this.$links.length; i++) n = this.$links[i].hash, t(n).length && (o = this.getCoords(t(n)), e >= o.top - this.options.threshold && (a = n));
                return a || (0 === this.$links.length ? null : this.$links[0].hash)
            }
        };
        t.fn.singlePageNav = function(t) {
            return this.each(function() {
                var e = Object.create(o);
                e.init(t, this)
            })
        }, t.fn.singlePageNav.defaults = {
            offset: 0,
            threshold: 120,
            speed: 400,
            currentClass: "current",
            easing: "swing",
            updateHash: !1,
            filter: "",
            onComplete: !1,
            beforeStart: !1
        }
    }(jQuery, window, document);
/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
var pJS = function(t, e) {
    var i = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: i,
            w: i.offsetWidth,
            h: i.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
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
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
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
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var n = this.pJS;
    e && Object.deepExtend(n, e), n.tmp.obj = {
        size_value: n.particles.size.value,
        size_anim_speed: n.particles.size.anim.speed,
        move_speed: n.particles.move.speed,
        line_linked_distance: n.particles.line_linked.distance,
        line_linked_width: n.particles.line_linked.width,
        mode_grab_distance: n.interactivity.modes.grab.distance,
        mode_bubble_distance: n.interactivity.modes.bubble.distance,
        mode_bubble_size: n.interactivity.modes.bubble.size,
        mode_repulse_distance: n.interactivity.modes.repulse.distance
    }, n.fn.retinaInit = function() {
        n.retina_detect && window.devicePixelRatio > 1 ? (n.canvas.pxratio = window.devicePixelRatio, n.tmp.retina = !0) : (n.canvas.pxratio = 1, n.tmp.retina = !1), n.canvas.w = n.canvas.el.offsetWidth * n.canvas.pxratio, n.canvas.h = n.canvas.el.offsetHeight * n.canvas.pxratio, n.particles.size.value = n.tmp.obj.size_value * n.canvas.pxratio, n.particles.size.anim.speed = n.tmp.obj.size_anim_speed * n.canvas.pxratio, n.particles.move.speed = n.tmp.obj.move_speed * n.canvas.pxratio, n.particles.line_linked.distance = n.tmp.obj.line_linked_distance * n.canvas.pxratio, n.interactivity.modes.grab.distance = n.tmp.obj.mode_grab_distance * n.canvas.pxratio, n.interactivity.modes.bubble.distance = n.tmp.obj.mode_bubble_distance * n.canvas.pxratio, n.particles.line_linked.width = n.tmp.obj.line_linked_width * n.canvas.pxratio, n.interactivity.modes.bubble.size = n.tmp.obj.mode_bubble_size * n.canvas.pxratio, n.interactivity.modes.repulse.distance = n.tmp.obj.mode_repulse_distance * n.canvas.pxratio
    }, n.fn.canvasInit = function() {
        n.canvas.ctx = n.canvas.el.getContext("2d")
    }, n.fn.canvasSize = function() {
        n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n && n.interactivity.events.resize && window.addEventListener("resize", function() {
            n.canvas.w = n.canvas.el.offsetWidth, n.canvas.h = n.canvas.el.offsetHeight, n.tmp.retina && (n.canvas.w *= n.canvas.pxratio, n.canvas.h *= n.canvas.pxratio), n.canvas.el.width = n.canvas.w, n.canvas.el.height = n.canvas.h, n.particles.move.enable || (n.fn.particlesEmpty(), n.fn.particlesCreate(), n.fn.particlesDraw(), n.fn.vendors.densityAutoParticles()), n.fn.vendors.densityAutoParticles()
        })
    }, n.fn.canvasPaint = function() {
        n.canvas.ctx.fillRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.canvasClear = function() {
        n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h)
    }, n.fn.particle = function(t, e, i) {
        if (this.radius = (n.particles.size.random ? Math.random() : 1) * n.particles.size.value, n.particles.size.anim.enable && (this.size_status = !1, this.vs = n.particles.size.anim.speed / 100, n.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * n.canvas.w, this.y = i ? i.y : Math.random() * n.canvas.h, this.x > n.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > n.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), n.particles.move.bounce && n.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == typeof t.value)
            if (t.value instanceof Array) {
                var o = t.value[Math.floor(Math.random() * n.particles.color.value.length)];
                this.color.rgb = hexToRgb(o)
            } else void 0 != t.value.r && void 0 != t.value.g && void 0 != t.value.b && (this.color.rgb = {
                r: t.value.r,
                g: t.value.g,
                b: t.value.b
            }), void 0 != t.value.h && void 0 != t.value.s && void 0 != t.value.l && (this.color.hsl = {
                h: t.value.h,
                s: t.value.s,
                l: t.value.l
            });
        else "random" == t.value ? this.color.rgb = {
            r: Math.floor(256 * Math.random()) + 0,
            g: Math.floor(256 * Math.random()) + 0,
            b: Math.floor(256 * Math.random()) + 0
        } : "string" == typeof t.value && (this.color = t, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (n.particles.opacity.random ? Math.random() : 1) * n.particles.opacity.value, n.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = n.particles.opacity.anim.speed / 100, n.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var a = {};
        switch (n.particles.move.direction) {
            case "top":
                a = {
                    x: 0,
                    y: -1
                };
                break;
            case "top-right":
                a = {
                    x: .5,
                    y: -.5
                };
                break;
            case "right":
                a = {
                    x: 1,
                    y: -0
                };
                break;
            case "bottom-right":
                a = {
                    x: .5,
                    y: .5
                };
                break;
            case "bottom":
                a = {
                    x: 0,
                    y: 1
                };
                break;
            case "bottom-left":
                a = {
                    x: -.5,
                    y: 1
                };
                break;
            case "left":
                a = {
                    x: -1,
                    y: 0
                };
                break;
            case "top-left":
                a = {
                    x: -.5,
                    y: -.5
                };
                break;
            default:
                a = {
                    x: 0,
                    y: 0
                }
        }
        n.particles.move.straight ? (this.vx = a.x, this.vy = a.y, n.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = a.x + Math.random() - .5, this.vy = a.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var r = n.particles.shape.type;
        if ("object" == typeof r) {
            if (r instanceof Array) {
                var s = r[Math.floor(Math.random() * r.length)];
                this.shape = s
            }
        } else this.shape = r;
        if ("image" == this.shape) {
            var l = n.particles.shape;
            this.img = {
                src: l.image.src,
                ratio: l.image.width / l.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == n.tmp.img_type && void 0 != n.tmp.source_svg && (n.fn.vendors.createSvgImg(this), n.tmp.pushing && (this.img.loaded = !1))
        }
    }, n.fn.particle.prototype.draw = function() {
        function t() {
            n.canvas.ctx.drawImage(r, e.x - i, e.y - i, 2 * i, 2 * i / e.img.ratio)
        }
        var e = this;
        if (void 0 != e.radius_bubble) var i = e.radius_bubble;
        else var i = e.radius;
        if (void 0 != e.opacity_bubble) var o = e.opacity_bubble;
        else var o = e.opacity;
        if (e.color.rgb) var a = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + o + ")";
        else var a = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + o + ")";
        switch (n.canvas.ctx.fillStyle = a, n.canvas.ctx.beginPath(), e.shape) {
            case "circle":
                n.canvas.ctx.arc(e.x, e.y, i, 0, 2 * Math.PI, !1);
                break;
            case "edge":
                n.canvas.ctx.rect(e.x - i, e.y - i, 2 * i, 2 * i);
                break;
            case "triangle":
                n.fn.vendors.drawShape(n.canvas.ctx, e.x - i, e.y + i / 1.66, 2 * i, 3, 2);
                break;
            case "polygon":
                n.fn.vendors.drawShape(n.canvas.ctx, e.x - i / (n.particles.shape.polygon.nb_sides / 3.5), e.y - i / .76, 2.66 * i / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 1);
                break;
            case "star":
                n.fn.vendors.drawShape(n.canvas.ctx, e.x - 2 * i / (n.particles.shape.polygon.nb_sides / 4), e.y - i / 1.52, 2 * i * 2.66 / (n.particles.shape.polygon.nb_sides / 3), n.particles.shape.polygon.nb_sides, 2);
                break;
            case "image":
                if ("svg" == n.tmp.img_type) var r = e.img.obj;
                else var r = n.tmp.img_obj;
                r && t()
        }
        n.canvas.ctx.closePath(), n.particles.shape.stroke.width > 0 && (n.canvas.ctx.strokeStyle = n.particles.shape.stroke.color, n.canvas.ctx.lineWidth = n.particles.shape.stroke.width, n.canvas.ctx.stroke()), n.canvas.ctx.fill()
    }, n.fn.particlesCreate = function() {
        for (var t = 0; t < n.particles.number.value; t++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value))
    }, n.fn.particlesUpdate = function() {
        for (var t = 0; t < n.particles.array.length; t++) {
            var e = n.particles.array[t];
            if (n.particles.move.enable) {
                var i = n.particles.move.speed / 2;
                e.x += e.vx * i, e.y += e.vy * i
            }
            if (n.particles.opacity.anim.enable && (1 == e.opacity_status ? (e.opacity >= n.particles.opacity.value && (e.opacity_status = !1), e.opacity += e.vo) : (e.opacity <= n.particles.opacity.anim.opacity_min && (e.opacity_status = !0), e.opacity -= e.vo), e.opacity < 0 && (e.opacity = 0)), n.particles.size.anim.enable && (1 == e.size_status ? (e.radius >= n.particles.size.value && (e.size_status = !1), e.radius += e.vs) : (e.radius <= n.particles.size.anim.size_min && (e.size_status = !0), e.radius -= e.vs), e.radius < 0 && (e.radius = 0)), "bounce" == n.particles.move.out_mode) var o = {
                x_left: e.radius,
                x_right: n.canvas.w,
                y_top: e.radius,
                y_bottom: n.canvas.h
            };
            else var o = {
                x_left: -e.radius,
                x_right: n.canvas.w + e.radius,
                y_top: -e.radius,
                y_bottom: n.canvas.h + e.radius
            };
            switch (e.x - e.radius > n.canvas.w ? (e.x = o.x_left, e.y = Math.random() * n.canvas.h) : e.x + e.radius < 0 && (e.x = o.x_right, e.y = Math.random() * n.canvas.h), e.y - e.radius > n.canvas.h ? (e.y = o.y_top, e.x = Math.random() * n.canvas.w) : e.y + e.radius < 0 && (e.y = o.y_bottom, e.x = Math.random() * n.canvas.w), n.particles.move.out_mode) {
                case "bounce":
                    e.x + e.radius > n.canvas.w ? e.vx = -e.vx : e.x - e.radius < 0 && (e.vx = -e.vx), e.y + e.radius > n.canvas.h ? e.vy = -e.vy : e.y - e.radius < 0 && (e.vy = -e.vy)
            }
            if (isInArray("grab", n.interactivity.events.onhover.mode) && n.fn.modes.grabParticle(e), (isInArray("bubble", n.interactivity.events.onhover.mode) || isInArray("bubble", n.interactivity.events.onclick.mode)) && n.fn.modes.bubbleParticle(e), (isInArray("repulse", n.interactivity.events.onhover.mode) || isInArray("repulse", n.interactivity.events.onclick.mode)) && n.fn.modes.repulseParticle(e), n.particles.line_linked.enable || n.particles.move.attract.enable)
                for (var a = t + 1; a < n.particles.array.length; a++) {
                    var r = n.particles.array[a];
                    n.particles.line_linked.enable && n.fn.interact.linkParticles(e, r), n.particles.move.attract.enable && n.fn.interact.attractParticles(e, r), n.particles.move.bounce && n.fn.interact.bounceParticles(e, r)
                }
        }
    }, n.fn.particlesDraw = function() {
        n.canvas.ctx.clearRect(0, 0, n.canvas.w, n.canvas.h), n.fn.particlesUpdate();
        for (var t = 0; t < n.particles.array.length; t++) {
            var e = n.particles.array[t];
            e.draw()
        }
    }, n.fn.particlesEmpty = function() {
        n.particles.array = []
    }, n.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(n.fn.checkAnimFrame), cancelRequestAnimFrame(n.fn.drawAnimFrame), n.tmp.source_svg = void 0, n.tmp.img_obj = void 0, n.tmp.count_svg = 0, n.fn.particlesEmpty(), n.fn.canvasClear(), n.fn.vendors.start()
    }, n.fn.interact.linkParticles = function(t, e) {
        var i = t.x - e.x,
            o = t.y - e.y,
            a = Math.sqrt(i * i + o * o);
        if (a <= n.particles.line_linked.distance) {
            var r = n.particles.line_linked.opacity - a / (1 / n.particles.line_linked.opacity) / n.particles.line_linked.distance;
            if (r > 0) {
                var s = n.particles.line_linked.color_rgb_line;
                n.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + r + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(e.x, e.y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
            }
        }
    }, n.fn.interact.attractParticles = function(t, e) {
        var i = t.x - e.x,
            o = t.y - e.y,
            a = Math.sqrt(i * i + o * o);
        if (a <= n.particles.line_linked.distance) {
            var r = i / (1e3 * n.particles.move.attract.rotateX),
                s = o / (1e3 * n.particles.move.attract.rotateY);
            t.vx -= r, t.vy -= s, e.vx += r, e.vy += s
        }
    }, n.fn.interact.bounceParticles = function(t, e) {
        var i = t.x - e.x,
            n = t.y - e.y,
            o = Math.sqrt(i * i + n * n),
            a = t.radius + e.radius;
        o <= a && (t.vx = -t.vx, t.vy = -t.vy, e.vx = -e.vx, e.vy = -e.vy)
    }, n.fn.modes.pushParticles = function(t, e) {
        n.tmp.pushing = !0;
        for (var i = 0; i < t; i++) n.particles.array.push(new n.fn.particle(n.particles.color, n.particles.opacity.value, {
            x: e ? e.pos_x : Math.random() * n.canvas.w,
            y: e ? e.pos_y : Math.random() * n.canvas.h
        })), i == t - 1 && (n.particles.move.enable || n.fn.particlesDraw(), n.tmp.pushing = !1)
    }, n.fn.modes.removeParticles = function(t) {
        n.particles.array.splice(0, t), n.particles.move.enable || n.fn.particlesDraw()
    }, n.fn.modes.bubbleParticle = function(t) {
        function e() {
            t.opacity_bubble = t.opacity, t.radius_bubble = t.radius
        }

        function i(e, i, o, a, s) {
            if (e != i)
                if (n.tmp.bubble_duration_end) {
                    if (void 0 != o) {
                        var l = a - d * (a - e) / n.interactivity.modes.bubble.duration,
                            c = e - l;
                        p = e + c, "size" == s && (t.radius_bubble = p), "opacity" == s && (t.opacity_bubble = p)
                    }
                } else if (r <= n.interactivity.modes.bubble.distance) {
                if (void 0 != o) var u = o;
                else var u = a;
                if (u != e) {
                    var p = a - d * (a - e) / n.interactivity.modes.bubble.duration;
                    "size" == s && (t.radius_bubble = p), "opacity" == s && (t.opacity_bubble = p)
                }
            } else "size" == s && (t.radius_bubble = void 0), "opacity" == s && (t.opacity_bubble = void 0)
        }
        if (n.interactivity.events.onhover.enable && isInArray("bubble", n.interactivity.events.onhover.mode)) {
            var o = t.x - n.interactivity.mouse.pos_x,
                a = t.y - n.interactivity.mouse.pos_y,
                r = Math.sqrt(o * o + a * a),
                s = 1 - r / n.interactivity.modes.bubble.distance;
            if (r <= n.interactivity.modes.bubble.distance) {
                if (s >= 0 && "mousemove" == n.interactivity.status) {
                    if (n.interactivity.modes.bubble.size != n.particles.size.value)
                        if (n.interactivity.modes.bubble.size > n.particles.size.value) {
                            var l = t.radius + n.interactivity.modes.bubble.size * s;
                            l >= 0 && (t.radius_bubble = l)
                        } else {
                            var c = t.radius - n.interactivity.modes.bubble.size,
                                l = t.radius - c * s;
                            l > 0 ? t.radius_bubble = l : t.radius_bubble = 0
                        }
                    if (n.interactivity.modes.bubble.opacity != n.particles.opacity.value)
                        if (n.interactivity.modes.bubble.opacity > n.particles.opacity.value) {
                            var u = n.interactivity.modes.bubble.opacity * s;
                            u > t.opacity && u <= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = u)
                        } else {
                            var u = t.opacity - (n.particles.opacity.value - n.interactivity.modes.bubble.opacity) * s;
                            u < t.opacity && u >= n.interactivity.modes.bubble.opacity && (t.opacity_bubble = u)
                        }
                }
            } else e();
            "mouseleave" == n.interactivity.status && e()
        } else if (n.interactivity.events.onclick.enable && isInArray("bubble", n.interactivity.events.onclick.mode)) {
            if (n.tmp.bubble_clicking) {
                var o = t.x - n.interactivity.mouse.click_pos_x,
                    a = t.y - n.interactivity.mouse.click_pos_y,
                    r = Math.sqrt(o * o + a * a),
                    d = ((new Date).getTime() - n.interactivity.mouse.click_time) / 1e3;
                d > n.interactivity.modes.bubble.duration && (n.tmp.bubble_duration_end = !0), d > 2 * n.interactivity.modes.bubble.duration && (n.tmp.bubble_clicking = !1, n.tmp.bubble_duration_end = !1)
            }
            n.tmp.bubble_clicking && (i(n.interactivity.modes.bubble.size, n.particles.size.value, t.radius_bubble, t.radius, "size"), i(n.interactivity.modes.bubble.opacity, n.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
        }
    }, n.fn.modes.repulseParticle = function(t) {
        function e() {
            var e = Math.atan2(p, d);
            if (t.vx = h * Math.cos(e), t.vy = h * Math.sin(e), "bounce" == n.particles.move.out_mode) {
                var i = {
                    x: t.x + t.vx,
                    y: t.y + t.vy
                };
                i.x + t.radius > n.canvas.w ? t.vx = -t.vx : i.x - t.radius < 0 && (t.vx = -t.vx), i.y + t.radius > n.canvas.h ? t.vy = -t.vy : i.y - t.radius < 0 && (t.vy = -t.vy)
            }
        }
        if (n.interactivity.events.onhover.enable && isInArray("repulse", n.interactivity.events.onhover.mode) && "mousemove" == n.interactivity.status) {
            var i = t.x - n.interactivity.mouse.pos_x,
                o = t.y - n.interactivity.mouse.pos_y,
                a = Math.sqrt(i * i + o * o),
                r = {
                    x: i / a,
                    y: o / a
                },
                s = n.interactivity.modes.repulse.distance,
                l = 100,
                c = clamp(1 / s * (-1 * Math.pow(a / s, 2) + 1) * s * l, 0, 50),
                u = {
                    x: t.x + r.x * c,
                    y: t.y + r.y * c
                };
            "bounce" == n.particles.move.out_mode ? (u.x - t.radius > 0 && u.x + t.radius < n.canvas.w && (t.x = u.x), u.y - t.radius > 0 && u.y + t.radius < n.canvas.h && (t.y = u.y)) : (t.x = u.x, t.y = u.y)
        } else if (n.interactivity.events.onclick.enable && isInArray("repulse", n.interactivity.events.onclick.mode))
            if (n.tmp.repulse_finish || (n.tmp.repulse_count++, n.tmp.repulse_count == n.particles.array.length && (n.tmp.repulse_finish = !0)), n.tmp.repulse_clicking) {
                var s = Math.pow(n.interactivity.modes.repulse.distance / 6, 3),
                    d = n.interactivity.mouse.click_pos_x - t.x,
                    p = n.interactivity.mouse.click_pos_y - t.y,
                    m = d * d + p * p,
                    h = -s / m * 1;
                m <= s && e()
            } else 0 == n.tmp.repulse_clicking && (t.vx = t.vx_i, t.vy = t.vy_i)
    }, n.fn.modes.grabParticle = function(t) {
        if (n.interactivity.events.onhover.enable && "mousemove" == n.interactivity.status) {
            var e = t.x - n.interactivity.mouse.pos_x,
                i = t.y - n.interactivity.mouse.pos_y,
                o = Math.sqrt(e * e + i * i);
            if (o <= n.interactivity.modes.grab.distance) {
                var a = n.interactivity.modes.grab.line_linked.opacity - o / (1 / n.interactivity.modes.grab.line_linked.opacity) / n.interactivity.modes.grab.distance;
                if (a > 0) {
                    var r = n.particles.line_linked.color_rgb_line;
                    n.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + a + ")", n.canvas.ctx.lineWidth = n.particles.line_linked.width, n.canvas.ctx.beginPath(), n.canvas.ctx.moveTo(t.x, t.y), n.canvas.ctx.lineTo(n.interactivity.mouse.pos_x, n.interactivity.mouse.pos_y), n.canvas.ctx.stroke(), n.canvas.ctx.closePath()
                }
            }
        }
    }, n.fn.vendors.eventsListeners = function() {
        "window" == n.interactivity.detect_on ? n.interactivity.el = window : n.interactivity.el = n.canvas.el, (n.interactivity.events.onhover.enable || n.interactivity.events.onclick.enable) && (n.interactivity.el.addEventListener("mousemove", function(t) {
            if (n.interactivity.el == window) var e = t.clientX,
                i = t.clientY;
            else var e = t.offsetX || t.clientX,
                i = t.offsetY || t.clientY;
            n.interactivity.mouse.pos_x = e, n.interactivity.mouse.pos_y = i, n.tmp.retina && (n.interactivity.mouse.pos_x *= n.canvas.pxratio, n.interactivity.mouse.pos_y *= n.canvas.pxratio), n.interactivity.status = "mousemove"
        }), n.interactivity.el.addEventListener("mouseleave", function(t) {
            n.interactivity.mouse.pos_x = null, n.interactivity.mouse.pos_y = null, n.interactivity.status = "mouseleave"
        })), n.interactivity.events.onclick.enable && n.interactivity.el.addEventListener("click", function() {
            if (n.interactivity.mouse.click_pos_x = n.interactivity.mouse.pos_x, n.interactivity.mouse.click_pos_y = n.interactivity.mouse.pos_y, n.interactivity.mouse.click_time = (new Date).getTime(), n.interactivity.events.onclick.enable) switch (n.interactivity.events.onclick.mode) {
                case "push":
                    n.particles.move.enable ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : 1 == n.interactivity.modes.push.particles_nb ? n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb, n.interactivity.mouse) : n.interactivity.modes.push.particles_nb > 1 && n.fn.modes.pushParticles(n.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    n.fn.modes.removeParticles(n.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    n.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    n.tmp.repulse_clicking = !0, n.tmp.repulse_count = 0, n.tmp.repulse_finish = !1, setTimeout(function() {
                        n.tmp.repulse_clicking = !1
                    }, 1e3 * n.interactivity.modes.repulse.duration)
            }
        })
    }, n.fn.vendors.densityAutoParticles = function() {
        if (n.particles.number.density.enable) {
            var t = n.canvas.el.width * n.canvas.el.height / 1e3;
            n.tmp.retina && (t /= 2 * n.canvas.pxratio);
            var e = t * n.particles.number.value / n.particles.number.density.value_area,
                i = n.particles.array.length - e;
            i < 0 ? n.fn.modes.pushParticles(Math.abs(i)) : n.fn.modes.removeParticles(i)
        }
    }, n.fn.vendors.checkOverlap = function(t, e) {
        for (var i = 0; i < n.particles.array.length; i++) {
            var o = n.particles.array[i],
                a = t.x - o.x,
                r = t.y - o.y,
                s = Math.sqrt(a * a + r * r);
            s <= t.radius + o.radius && (t.x = e ? e.x : Math.random() * n.canvas.w, t.y = e ? e.y : Math.random() * n.canvas.h, n.fn.vendors.checkOverlap(t))
        }
    }, n.fn.vendors.createSvgImg = function(t) {
        var e = n.tmp.source_svg,
            i = /#([0-9A-F]{3,6})/gi,
            o = e.replace(i, function(e, i, n, o) {
                if (t.color.rgb) var a = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
                else var a = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
                return a
            }),
            a = new Blob([o], {
                type: "image/svg+xml;charset=utf-8"
            }),
            r = window.URL || window.webkitURL || window,
            s = r.createObjectURL(a),
            l = new Image;
        l.addEventListener("load", function() {
            t.img.obj = l, t.img.loaded = !0, r.revokeObjectURL(s), n.tmp.count_svg++
        }), l.src = s
    }, n.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(n.fn.drawAnimFrame), i.remove(), pJSDom = null
    }, n.fn.vendors.drawShape = function(t, e, i, n, o, a) {
        var r = o * a,
            s = o / a,
            l = 180 * (s - 2) / s,
            c = Math.PI - Math.PI * l / 180;
        t.save(), t.beginPath(), t.translate(e, i), t.moveTo(0, 0);
        for (var u = 0; u < r; u++) t.lineTo(n, 0), t.translate(n, 0), t.rotate(c);
        t.fill(), t.restore()
    }, n.fn.vendors.exportImg = function() {
        window.open(n.canvas.el.toDataURL("image/png"), "_blank")
    }, n.fn.vendors.loadImg = function(t) {
        if (n.tmp.img_error = void 0, "" != n.particles.shape.image.src)
            if ("svg" == t) {
                var e = new XMLHttpRequest;
                e.open("GET", n.particles.shape.image.src), e.onreadystatechange = function(t) {
                    4 == e.readyState && (200 == e.status ? (n.tmp.source_svg = t.currentTarget.response, n.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), n.tmp.img_error = !0))
                }, e.send()
            } else {
                var i = new Image;
                i.addEventListener("load", function() {
                    n.tmp.img_obj = i, n.fn.vendors.checkBeforeDraw()
                }), i.src = n.particles.shape.image.src
            } else console.log("Error pJS - No image.src"), n.tmp.img_error = !0
    }, n.fn.vendors.draw = function() {
        "image" == n.particles.shape.type ? "svg" == n.tmp.img_type ? n.tmp.count_svg >= n.particles.number.value ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : void 0 != n.tmp.img_obj ? (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame)) : n.tmp.img_error || (n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw)) : (n.fn.particlesDraw(), n.particles.move.enable ? n.fn.drawAnimFrame = requestAnimFrame(n.fn.vendors.draw) : cancelRequestAnimFrame(n.fn.drawAnimFrame))
    }, n.fn.vendors.checkBeforeDraw = function() {
        "image" == n.particles.shape.type ? "svg" == n.tmp.img_type && void 0 == n.tmp.source_svg ? n.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(n.tmp.checkAnimFrame), n.tmp.img_error || (n.fn.vendors.init(), n.fn.vendors.draw())) : (n.fn.vendors.init(), n.fn.vendors.draw())
    }, n.fn.vendors.init = function() {
        n.fn.retinaInit(), n.fn.canvasInit(), n.fn.canvasSize(), n.fn.canvasPaint(), n.fn.particlesCreate(), n.fn.vendors.densityAutoParticles(), n.particles.line_linked.color_rgb_line = hexToRgb(n.particles.line_linked.color)
    }, n.fn.vendors.start = function() {
        isInArray("image", n.particles.shape.type) ? (n.tmp.img_type = n.particles.shape.image.src.substr(n.particles.shape.image.src.length - 3), n.fn.vendors.loadImg(n.tmp.img_type)) : n.fn.vendors.checkBeforeDraw()
    }, n.fn.vendors.eventsListeners(), n.fn.vendors.start()
};
Object.deepExtend = function(t, e) {
        for (var i in e) e[i] && e[i].constructor && e[i].constructor === Object ? (t[i] = t[i] || {}, arguments.callee(t[i], e[i])) : t[i] = e[i];
        return t
    }, window.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            window.setTimeout(t, 1e3 / 60)
        }
    }(), window.cancelRequestAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
    }(), window.pJSDom = [], window.particlesJS = function(t, e) {
        "string" != typeof t && (e = t, t = "particles-js"), t || (t = "particles-js");
        var i = document.getElementById(t),
            n = "particles-js-canvas-el",
            o = i.getElementsByClassName(n);
        if (o.length)
            for (; o.length > 0;) i.removeChild(o[0]);
        var a = document.createElement("canvas");
        a.className = n, a.style.width = "100%", a.style.height = "100%";
        var r = document.getElementById(t).appendChild(a);
        null != r && pJSDom.push(new pJS(t, e))
    }, window.particlesJS.load = function(t, e, i) {
        var n = new XMLHttpRequest;
        n.open("GET", e), n.onreadystatechange = function(e) {
            if (4 == n.readyState)
                if (200 == n.status) {
                    var o = JSON.parse(e.currentTarget.response);
                    window.particlesJS(t, o), i && i()
                } else console.log("Error pJS - XMLHttpRequest status: " + n.status), console.log("Error pJS - File config not found")
        }, n.send()
    },
    // Licensed under the terms of the MIT license.
    function() {
        function t() {
            var t = !1;
            t && c("keydown", o), y.keyboardSupport && !t && l("keydown", o)
        }

        function e() {
            if (document.body) {
                var e = document.body,
                    i = document.documentElement,
                    n = window.innerHeight,
                    o = e.scrollHeight;
                if (I = document.compatMode.indexOf("CSS") >= 0 ? i : e, v = e, t(), _ = !0, top != self) w = !0;
                else if (o > n && (e.offsetHeight <= n || i.offsetHeight <= n) && (i.style.height = "auto", I.offsetHeight <= n)) {
                    var a = document.createElement("div");
                    a.style.clear = "both", e.appendChild(a)
                }
                y.fixedBackground || b || (e.style.backgroundAttachment = "scroll", i.style.backgroundAttachment = "scroll")
            }
        }

        function i(t, e, i, n) {
            if (n || (n = 1e3), d(e, i), 1 != y.accelerationMax) {
                var o = +new Date,
                    a = o - E;
                if (a < y.accelerationDelta) {
                    var r = (1 + 30 / a) / 2;
                    r > 1 && (r = Math.min(r, y.accelerationMax), e *= r, i *= r)
                }
                E = +new Date
            }
            if (k.push({
                    x: e,
                    y: i,
                    lastX: e < 0 ? .99 : -.99,
                    lastY: i < 0 ? .99 : -.99,
                    start: +new Date
                }), !S) {
                var s = t === document.body,
                    l = function(o) {
                        for (var a = +new Date, r = 0, c = 0, u = 0; u < k.length; u++) {
                            var d = k[u],
                                p = a - d.start,
                                m = p >= y.animationTime,
                                h = m ? 1 : p / y.animationTime;
                            y.pulseAlgorithm && (h = f(h));
                            var v = d.x * h - d.lastX >> 0,
                                g = d.y * h - d.lastY >> 0;
                            r += v, c += g, d.lastX += v, d.lastY += g, m && (k.splice(u, 1), u--)
                        }
                        s ? window.scrollBy(r, c) : (r && (t.scrollLeft += r), c && (t.scrollTop += c)), e || i || (k = []), k.length ? L(l, t, n / y.frameRate + 1) : S = !1
                    };
                L(l, t, 0), S = !0
            }
        }

        function n(t) {
            _ || e();
            var n = t.target,
                o = s(n);
            if (!o || t.defaultPrevented || u(v, "embed") || u(n, "embed") && /\.pdf/i.test(n.src)) return !0;
            var a = t.wheelDeltaX || 0,
                r = t.wheelDeltaY || 0;
            return a || r || (r = t.wheelDelta || 0), !(y.touchpadSupport || !p(r)) || (Math.abs(a) > 1.2 && (a *= y.stepSize / 120), Math.abs(r) > 1.2 && (r *= y.stepSize / 120), i(o, -a, -r), void t.preventDefault())
        }

        function o(t) {
            var e = t.target,
                n = t.ctrlKey || t.altKey || t.metaKey || t.shiftKey && t.keyCode !== T.spacebar;
            if (/input|textarea|select|embed/i.test(e.nodeName) || e.isContentEditable || t.defaultPrevented || n) return !0;
            if (u(e, "button") && t.keyCode === T.spacebar) return !0;
            var o, a = 0,
                r = 0,
                l = s(v),
                c = l.clientHeight;
            switch (l == document.body && (c = window.innerHeight), t.keyCode) {
                case T.up:
                    r = -y.arrowScroll;
                    break;
                case T.down:
                    r = y.arrowScroll;
                    break;
                case T.spacebar:
                    o = t.shiftKey ? 1 : -1, r = -o * c * .9;
                    break;
                case T.pageup:
                    r = .9 * -c;
                    break;
                case T.pagedown:
                    r = .9 * c;
                    break;
                case T.home:
                    r = -l.scrollTop;
                    break;
                case T.end:
                    var d = l.scrollHeight - l.scrollTop - c;
                    r = d > 0 ? d + 10 : 0;
                    break;
                case T.left:
                    a = -y.arrowScroll;
                    break;
                case T.right:
                    a = y.arrowScroll;
                    break;
                default:
                    return !0
            }
            i(l, a, r), t.preventDefault()
        }

        function a(t) {
            v = t.target
        }

        function r(t, e) {
            for (var i = t.length; i--;) P[M(t[i])] = e;
            return e
        }

        function s(t) {
            var e = [],
                i = I.scrollHeight;
            do {
                var n = P[M(t)];
                if (n) return r(e, n);
                if (e.push(t), i === t.scrollHeight) {
                    if (!w || I.clientHeight + 10 < i) return r(e, document.body)
                } else if (t.clientHeight + 10 < t.scrollHeight && (overflow = getComputedStyle(t, "").getPropertyValue("overflow-y"), "scroll" === overflow || "auto" === overflow)) return r(e, t)
            } while (t = t.parentNode)
        }

        function l(t, e, i) {
            window.addEventListener(t, e, i || !1)
        }

        function c(t, e, i) {
            window.removeEventListener(t, e, i || !1)
        }

        function u(t, e) {
            return (t.nodeName || "").toLowerCase() === e.toLowerCase()
        }

        function d(t, e) {
            t = t > 0 ? 1 : -1, e = e > 0 ? 1 : -1, x.x === t && x.y === e || (x.x = t, x.y = e, k = [], E = 0)
        }

        function p(t) {
            if (t) {
                t = Math.abs(t), C.push(t), C.shift(), clearTimeout(A);
                var e = C[0] == C[1] && C[1] == C[2],
                    i = m(C[0], 120) && m(C[1], 120) && m(C[2], 120);
                return !(e || i)
            }
        }

        function m(t, e) {
            return Math.floor(t / e) == t / e
        }

        function h(t) {
            var e, i, n;
            return t *= y.pulseScale, t < 1 ? e = t - (1 - Math.exp(-t)) : (i = Math.exp(-1), t -= 1, n = 1 - Math.exp(-t), e = i + n * (1 - i)), e * y.pulseNormalize
        }

        function f(t) {
            return t >= 1 ? 1 : t <= 0 ? 0 : (1 == y.pulseNormalize && (y.pulseNormalize /= h(1)), h(t))
        }
        var v, g = {
                frameRate: 150,
                animationTime: 500,
                stepSize: 150,
                pulseAlgorithm: !0,
                pulseScale: 6,
                pulseNormalize: 1,
                accelerationDelta: 20,
                accelerationMax: 1,
                keyboardSupport: !0,
                arrowScroll: 50,
                touchpadSupport: !0,
                fixedBackground: !0,
                excluded: ""
            },
            y = g,
            b = !1,
            w = !1,
            x = {
                x: 0,
                y: 0
            },
            _ = !1,
            I = document.documentElement,
            C = [120, 120, 120],
            T = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                spacebar: 32,
                pageup: 33,
                pagedown: 34,
                end: 35,
                home: 36
            },
            y = g,
            k = [],
            S = !1,
            E = +new Date,
            P = {};
        setInterval(function() {
            P = {}
        }, 1e4);
        var A, M = function() {
                var t = 0;
                return function(e) {
                    return e.uniqueID || (e.uniqueID = t++)
                }
            }(),
            L = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t, e, i) {
                    window.setTimeout(t, i || 1e3 / 60)
                }
            }(),
            z = /chrome/i.test(window.navigator.userAgent),
            D = "onmousewheel" in document;
        D && z && (l("mousedown", a), l("mousewheel", n), l("load", e))
    }(),
    /*!
     *	Bootstrap submenu fix
     *	Version: 1.1
     *	Author web-master72
     */
    function(t) {
        t(window).on("load", function() {
            var e, i = 991;
            e = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), t(window).resize(function() {
                var n = Math.max(t(window).width(), window.innerWidth),
                    o = t(".menu-item-has-children").not(".mega-menu-col");
                o.children(".sub-menu, .mega-menu").css("margin-left", "0"), n > i && o.removeClass("sub-menu-open"), n > i && e !== !0 ? (o.children("a").unbind("click"), o.unbind("mouseenter mouseleave"), o.on({
                    mouseenter: function() {
                        t(this).addClass("sub-menu-open")
                    },
                    mouseleave: function() {
                        t(this).removeClass("sub-menu-open")
                    }
                })) : (o.unbind("mouseenter mouseleave"), o.children("a").unbind("click").click(function(o) {
                    o.preventDefault(), t(this).parent().toggleClass("sub-menu-open"), n > i && 1 == e && (t(this).parent().siblings().removeClass("sub-menu-open"), t(this).parent().siblings().find(".sub-menu-open").removeClass("sub-menu-open"))
                })), n > i && e !== !0 && o.children(".sub-menu, .mega-menu").each(function() {
                    var e = t(this).offset(),
                        i = t(this).width() + e.left,
                        o = n - (i + 30);
                    i > n ? t(this).css("margin-left", o) : t(this).css("margin-left", "0")
                })
            }).resize()
        })
    }(jQuery),
    function(t) {
        t(document).ready(function() {
            t("#contact-form").find("input,textarea").jqBootstrapValidation({
                preventSubmit: !0,
                submitError: function(t, e, i) {},
                submitSuccess: function(e, i) {
                    i.preventDefault();
                    var n = t("#contact-form submit"),
                        o = t("#contact-response"),
                        a = t('#contact-form [name="name"]').val(),
                        r = t('#contact-form [name="email"]').val(),
                        s = t('#contact-form [name="subject"]').val(),
                        l = t('#contact-form [name="message"]').val();
                    t.ajax({
                        type: "POST",
                        url: "assets/php/contact.php",
                        dataType: "json",
                        data: {
                            name: a,
                            email: r,
                            subject: s,
                            message: l
                        },
                        cache: !1,
                        beforeSend: function(t) {
                            n.empty(), n.append('<i class="fa fa-cog fa-spin"></i> Wait...')
                        },
                        success: function(t) {
                            1 == t.sendstatus ? (o.html(t.message), e.fadeOut(500)) : o.html(t.message)
                        }
                    })
                }
            })
        })
    }(jQuery);
