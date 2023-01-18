(() => {
    var __webpack_modules__ = {
        732: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", m = "applied", p = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, m, p ], C = function(n, t, e, i) {
                    n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, m), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, p), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, mn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, pn = function(n) {
                    return function(n) {
                        return k(n) === p;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || mn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = mn(n), bn(e).filter(pn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        mn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        mn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (void 0 !== cachedModule) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const modules_flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(2 == webP.height);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = true === support ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        function getHash() {
            if (location.hash) return location.hash.replace("#", "");
        }
        function setHash(hash) {
            hash = hash ? `#${hash}` : window.location.href.split("#")[0];
            history.pushState("", "", hash);
        }
        let _slideUp = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = `${target.offsetHeight}px`;
                target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                window.setTimeout((() => {
                    target.hidden = !showmore ? true : false;
                    !showmore ? target.style.removeProperty("height") : null;
                    target.style.removeProperty("padding-top");
                    target.style.removeProperty("padding-bottom");
                    target.style.removeProperty("margin-top");
                    target.style.removeProperty("margin-bottom");
                    !showmore ? target.style.removeProperty("overflow") : null;
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideUpDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideDown = (target, duration = 500, showmore = 0) => {
            if (!target.classList.contains("_slide")) {
                target.classList.add("_slide");
                target.hidden = target.hidden ? false : null;
                showmore ? target.style.removeProperty("height") : null;
                let height = target.offsetHeight;
                target.style.overflow = "hidden";
                target.style.height = showmore ? `${showmore}px` : `0px`;
                target.style.paddingTop = 0;
                target.style.paddingBottom = 0;
                target.style.marginTop = 0;
                target.style.marginBottom = 0;
                target.offsetHeight;
                target.style.transitionProperty = "height, margin, padding";
                target.style.transitionDuration = duration + "ms";
                target.style.height = height + "px";
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                window.setTimeout((() => {
                    target.style.removeProperty("height");
                    target.style.removeProperty("overflow");
                    target.style.removeProperty("transition-duration");
                    target.style.removeProperty("transition-property");
                    target.classList.remove("_slide");
                    document.dispatchEvent(new CustomEvent("slideDownDone", {
                        detail: {
                            target
                        }
                    }));
                }), duration);
            }
        };
        let _slideToggle = (target, duration = 500) => {
            if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
        };
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 0) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 0) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 0) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function spollers() {
            const spollersArray = document.querySelectorAll("[data-spollers]");
            if (spollersArray.length > 0) {
                const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                    return !item.dataset.spollers.split(",")[0];
                }));
                if (spollersRegular.length) initSpollers(spollersRegular);
                let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                function initSpollers(spollersArray, matchMedia = false) {
                    spollersArray.forEach((spollersBlock => {
                        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                        if (matchMedia.matches || !matchMedia) {
                            spollersBlock.classList.add("_spoller-init");
                            initSpollerBody(spollersBlock);
                            spollersBlock.addEventListener("click", setSpollerAction);
                        } else {
                            spollersBlock.classList.remove("_spoller-init");
                            initSpollerBody(spollersBlock, false);
                            spollersBlock.removeEventListener("click", setSpollerAction);
                        }
                    }));
                }
                function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                    let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                    if (spollerTitles.length) {
                        spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                        spollerTitles.forEach((spollerTitle => {
                            if (hideSpollerBody) {
                                spollerTitle.removeAttribute("tabindex");
                                if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                            } else {
                                spollerTitle.setAttribute("tabindex", "-1");
                                spollerTitle.nextElementSibling.hidden = false;
                            }
                        }));
                    }
                }
                function setSpollerAction(e) {
                    const el = e.target;
                    if (el.closest("[data-spoller]")) {
                        const spollerTitle = el.closest("[data-spoller]");
                        const spollersBlock = spollerTitle.closest("[data-spollers]");
                        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                        if (!spollersBlock.querySelectorAll("._slide").length) {
                            if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                            spollerTitle.classList.toggle("_spoller-active");
                            _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                        }
                        e.preventDefault();
                    }
                }
                function hideSpollersBody(spollersBlock) {
                    const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
                        spollerActiveTitle.classList.remove("_spoller-active");
                        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
                    }
                }
                const spollersClose = document.querySelectorAll("[data-spoller-close]");
                if (spollersClose.length) document.addEventListener("click", (function(e) {
                    const el = e.target;
                    if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                        const spollersBlock = spollerClose.closest("[data-spollers]");
                        if (spollersBlock.classList.contains("_spoller-init")) {
                            const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                            spollerClose.classList.remove("_spoller-active");
                            _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                        }
                    }));
                }));
            }
        }
        function tabs() {
            const tabs = document.querySelectorAll("[data-tabs]");
            let tabsActiveHash = [];
            if (tabs.length > 0) {
                const hash = getHash();
                if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
                tabs.forEach(((tabsBlock, index) => {
                    tabsBlock.classList.add("_tab-init");
                    tabsBlock.setAttribute("data-tabs-index", index);
                    tabsBlock.addEventListener("click", setTabsAction);
                    initTabs(tabsBlock);
                }));
                let mdQueriesArray = dataMediaQueries(tabs, "tabs");
                if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                    setTitlePosition(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
            }
            function setTitlePosition(tabsMediaArray, matchMedia) {
                tabsMediaArray.forEach((tabsMediaItem => {
                    tabsMediaItem = tabsMediaItem.item;
                    let tabsTitles = tabsMediaItem.querySelector("[data-tabs-titles]");
                    let tabsTitleItems = tabsMediaItem.querySelectorAll("[data-tabs-title]");
                    let tabsContent = tabsMediaItem.querySelector("[data-tabs-body]");
                    let tabsContentItems = tabsMediaItem.querySelectorAll("[data-tabs-item]");
                    tabsTitleItems = Array.from(tabsTitleItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems = Array.from(tabsContentItems).filter((item => item.closest("[data-tabs]") === tabsMediaItem));
                    tabsContentItems.forEach(((tabsContentItem, index) => {
                        if (matchMedia.matches) {
                            tabsContent.append(tabsTitleItems[index]);
                            tabsContent.append(tabsContentItem);
                            tabsMediaItem.classList.add("_tab-spoller");
                        } else {
                            tabsTitles.append(tabsTitleItems[index]);
                            tabsMediaItem.classList.remove("_tab-spoller");
                        }
                    }));
                }));
            }
            function initTabs(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-titles]>*");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-body]>*");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;
                if (tabsActiveHashBlock) {
                    const tabsActiveTitle = tabsBlock.querySelector("[data-tabs-titles]>._tab-active");
                    tabsActiveTitle ? tabsActiveTitle.classList.remove("_tab-active") : null;
                }
                if (tabsContent.length) {
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        tabsTitles[index].setAttribute("data-tabs-title", "");
                        tabsContentItem.setAttribute("data-tabs-item", "");
                        if (tabsActiveHashBlock && index == tabsActiveHash[1]) tabsTitles[index].classList.add("_tab-active");
                        tabsContentItem.hidden = !tabsTitles[index].classList.contains("_tab-active");
                    }));
                }
            }
            function setTabsStatus(tabsBlock) {
                let tabsTitles = tabsBlock.querySelectorAll("[data-tabs-title]");
                let tabsContent = tabsBlock.querySelectorAll("[data-tabs-item]");
                const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
                function isTabsAnamate(tabsBlock) {
                    if (tabsBlock.hasAttribute("data-tabs-animate")) return tabsBlock.dataset.tabsAnimate > 0 ? Number(tabsBlock.dataset.tabsAnimate) : 500;
                }
                const tabsBlockAnimate = isTabsAnamate(tabsBlock);
                if (tabsContent.length > 0) {
                    const isHash = tabsBlock.hasAttribute("data-tabs-hash");
                    tabsContent = Array.from(tabsContent).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsTitles = Array.from(tabsTitles).filter((item => item.closest("[data-tabs]") === tabsBlock));
                    tabsContent.forEach(((tabsContentItem, index) => {
                        if (tabsTitles[index].classList.contains("_tab-active")) {
                            if (tabsBlockAnimate) _slideDown(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = false;
                            if (isHash && !tabsContentItem.closest(".popup")) setHash(`tab-${tabsBlockIndex}-${index}`);
                        } else if (tabsBlockAnimate) _slideUp(tabsContentItem, tabsBlockAnimate); else tabsContentItem.hidden = true;
                    }));
                }
            }
            function setTabsAction(e) {
                const el = e.target;
                if (el.closest("[data-tabs-title]")) {
                    const tabTitle = el.closest("[data-tabs-title]");
                    const tabsBlock = tabTitle.closest("[data-tabs]");
                    if (!tabTitle.classList.contains("_tab-active") && !tabsBlock.querySelector("._slide")) {
                        let tabActiveTitle = tabsBlock.querySelectorAll("[data-tabs-title]._tab-active");
                        tabActiveTitle.length ? tabActiveTitle = Array.from(tabActiveTitle).filter((item => item.closest("[data-tabs]") === tabsBlock)) : null;
                        tabActiveTitle.length ? tabActiveTitle[0].classList.remove("_tab-active") : null;
                        tabTitle.classList.add("_tab-active");
                        setTabsStatus(tabsBlock);
                    }
                    e.preventDefault();
                }
            }
        }
        function menuInit() {
            let body = document.querySelector("body");
            let pageHat = document.querySelector("header");
            if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
                if (bodyLockStatus && e.target.closest(".icon-menu")) {
                    bodyLockToggle();
                    document.documentElement.classList.toggle("menu-open");
                    body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                    pageHat.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                } else if (!e.target.closest(".menu") || e.target.closest(".icon-menu")) {
                    bodyUnlock();
                    document.documentElement.classList.remove("menu-open");
                    body.style.paddingRight = "0px";
                    pageHat.style.paddingRight = "0px";
                }
            }));
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
        }
        function functions_FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        function uniqArray(array) {
            return array.filter((function(item, index, self) {
                return self.indexOf(item) === index;
            }));
        }
        function dataMediaQueries(array, dataSetValue) {
            const media = Array.from(array).filter((function(item, index, self) {
                if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
            }));
            if (media.length) {
                const breakpointsArray = [];
                media.forEach((item => {
                    const params = item.dataset[dataSetValue];
                    const breakpoint = {};
                    const paramsArray = params.split(",");
                    breakpoint.value = paramsArray[0];
                    breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                    breakpoint.item = item;
                    breakpointsArray.push(breakpoint);
                }));
                let mdQueries = breakpointsArray.map((function(item) {
                    return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
                }));
                mdQueries = uniqArray(mdQueries);
                const mdQueriesArray = [];
                if (mdQueries.length) {
                    mdQueries.forEach((breakpoint => {
                        const paramsArray = breakpoint.split(",");
                        const mediaBreakpoint = paramsArray[1];
                        const mediaType = paramsArray[2];
                        const matchMedia = window.matchMedia(paramsArray[0]);
                        const itemsArray = breakpointsArray.filter((function(item) {
                            if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                        }));
                        mdQueriesArray.push({
                            itemsArray,
                            matchMedia
                        });
                    }));
                    return mdQueriesArray;
                }
            }
        }
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    const headerElement = document.querySelector(headerItem);
                    if (!headerElement.classList.contains("_header-scroll")) {
                        headerElement.style.cssText = `transition-duration: 0s;`;
                        headerElement.classList.add("_header-scroll");
                        headerItemHeight = headerElement.offsetHeight;
                        headerElement.classList.remove("_header-scroll");
                        setTimeout((() => {
                            headerElement.style.cssText = ``;
                        }), 0);
                    } else headerItemHeight = headerElement.offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                functions_FLS(`[gotoBlock]: Юхуу...їдемо до ${targetBlock}`);
            } else functions_FLS(`[gotoBlock]: Йой... Такого блоку немає на сторінці: ${targetBlock}`);
        };
        var lazyload_min = __webpack_require__(732);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        class ScrollWatcher {
            constructor(props) {
                let defaultConfig = {
                    logging: true
                };
                this.config = Object.assign(defaultConfig, props);
                this.observer;
                !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null;
            }
            scrollWatcherUpdate() {
                this.scrollWatcherRun();
            }
            scrollWatcherRun() {
                document.documentElement.classList.add("watcher");
                this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]"));
            }
            scrollWatcherConstructor(items) {
                if (items.length) {
                    this.scrollWatcherLogging(`Прокинувся, стежу за об'єктами (${items.length})...`);
                    let uniqParams = uniqArray(Array.from(items).map((function(item) {
                        return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
                    })));
                    uniqParams.forEach((uniqParam => {
                        let uniqParamArray = uniqParam.split("|");
                        let paramsWatch = {
                            root: uniqParamArray[0],
                            margin: uniqParamArray[1],
                            threshold: uniqParamArray[2]
                        };
                        let groupItems = Array.from(items).filter((function(item) {
                            let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                            let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                            let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                            if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                        }));
                        let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                        this.scrollWatcherInit(groupItems, configWatcher);
                    }));
                } else this.scrollWatcherLogging("Сплю, немає об'єктів для стеження. ZzzZZzz");
            }
            getScrollWatcherConfig(paramsWatch) {
                let configWatcher = {};
                if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); else if ("null" !== paramsWatch.root) this.scrollWatcherLogging(`Эмм... батьківського об'єкта ${paramsWatch.root} немає на сторінці`);
                configWatcher.rootMargin = paramsWatch.margin;
                if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
                    this.scrollWatcherLogging(`йой, налаштування data-watch-margin потрібно задавати в PX або %`);
                    return;
                }
                if ("prx" === paramsWatch.threshold) {
                    paramsWatch.threshold = [];
                    for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i);
                } else paramsWatch.threshold = paramsWatch.threshold.split(",");
                configWatcher.threshold = paramsWatch.threshold;
                return configWatcher;
            }
            scrollWatcherCreate(configWatcher) {
                this.observer = new IntersectionObserver(((entries, observer) => {
                    entries.forEach((entry => {
                        this.scrollWatcherCallback(entry, observer);
                    }));
                }), configWatcher);
            }
            scrollWatcherInit(items, configWatcher) {
                this.scrollWatcherCreate(configWatcher);
                items.forEach((item => this.observer.observe(item)));
            }
            scrollWatcherIntersecting(entry, targetElement) {
                if (entry.isIntersecting) {
                    !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я бачу ${targetElement.classList}, додав клас _watcher-view`);
                } else {
                    targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null;
                    this.scrollWatcherLogging(`Я не бачу ${targetElement.classList}, прибрав клас _watcher-view`);
                }
            }
            scrollWatcherOff(targetElement, observer) {
                observer.unobserve(targetElement);
                this.scrollWatcherLogging(`Я перестав стежити за ${targetElement.classList}`);
            }
            scrollWatcherLogging(message) {
                this.config.logging ? functions_FLS(`[Спостерігач]: ${message}`) : null;
            }
            scrollWatcherCallback(entry, observer) {
                const targetElement = entry.target;
                this.scrollWatcherIntersecting(entry, targetElement);
                targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
                document.dispatchEvent(new CustomEvent("watcherCallback", {
                    detail: {
                        entry
                    }
                }));
            }
        }
        modules_flsModules.watcher = new ScrollWatcher({});
        let addWindowScrollEvent = false;
        function pageNavigation() {
            document.addEventListener("click", pageNavigationAction);
            document.addEventListener("watcherCallback", pageNavigationAction);
            function pageNavigationAction(e) {
                if ("click" === e.type) {
                    const targetElement = e.target;
                    if (targetElement.closest("[data-goto]")) {
                        const gotoLink = targetElement.closest("[data-goto]");
                        const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
                        const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
                        const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
                        const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
                        if (modules_flsModules.fullpage) {
                            const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                            const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                            if (null !== fullpageSectionId) {
                                modules_flsModules.fullpage.switchingSection(fullpageSectionId);
                                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                            }
                        } else gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
                        e.preventDefault();
                    }
                } else if ("watcherCallback" === e.type && e.detail) {
                    const entry = e.detail.entry;
                    const targetElement = entry.target;
                    if ("navigator" === targetElement.dataset.watch) {
                        document.querySelector(`[data-goto]._navigator-active`);
                        let navigatorCurrentItem;
                        if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                            const element = targetElement.classList[index];
                            if (document.querySelector(`[data-goto=".${element}"]`)) {
                                navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                                break;
                            }
                        }
                        if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
                    }
                }
            }
            if (getHash()) {
                let goToHash;
                if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`; else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
                goToHash ? gotoblock_gotoBlock(goToHash, true, 500, 20) : null;
            }
        }
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        /*!
 * lightgallery | 2.7.1 | January 11th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var __assign = function() {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
            var r = Array(s), k = 0;
            for (i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
            k++) r[k] = a[j];
            return r;
        }
        var lGEvents = {
            afterAppendSlide: "lgAfterAppendSlide",
            init: "lgInit",
            hasVideo: "lgHasVideo",
            containerResize: "lgContainerResize",
            updateSlides: "lgUpdateSlides",
            afterAppendSubHtml: "lgAfterAppendSubHtml",
            beforeOpen: "lgBeforeOpen",
            afterOpen: "lgAfterOpen",
            slideItemLoad: "lgSlideItemLoad",
            beforeSlide: "lgBeforeSlide",
            afterSlide: "lgAfterSlide",
            posterClick: "lgPosterClick",
            dragStart: "lgDragStart",
            dragMove: "lgDragMove",
            dragEnd: "lgDragEnd",
            beforeNextSlide: "lgBeforeNextSlide",
            beforePrevSlide: "lgBeforePrevSlide",
            beforeClose: "lgBeforeClose",
            afterClose: "lgAfterClose",
            rotateLeft: "lgRotateLeft",
            rotateRight: "lgRotateRight",
            flipHorizontal: "lgFlipHorizontal",
            flipVertical: "lgFlipVertical",
            autoplay: "lgAutoplay",
            autoplayStart: "lgAutoplayStart",
            autoplayStop: "lgAutoplayStop"
        };
        var lightGalleryCoreSettings = {
            mode: "lg-slide",
            easing: "ease",
            speed: 400,
            licenseKey: "0000-0000-000-0000",
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 300,
            container: "",
            startAnimationDuration: 400,
            zoomFromOrigin: true,
            hideBarsDelay: 0,
            showBarsAfter: 1e4,
            slideDelay: 0,
            supportLegacyBrowser: true,
            allowMediaOverlap: false,
            videoMaxSize: "1280-720",
            loadYouTubePoster: true,
            defaultCaptionHeight: 0,
            ariaLabelledby: "",
            ariaDescribedby: "",
            resetScrollPosition: true,
            hideScrollbar: false,
            closable: true,
            swipeToClose: true,
            closeOnTap: true,
            showCloseIcon: true,
            showMaximizeIcon: false,
            loop: true,
            escKey: true,
            keyPress: true,
            trapFocus: true,
            controls: true,
            slideEndAnimation: true,
            hideControlOnEnd: false,
            mousewheel: false,
            getCaptionFromTitleOrAlt: true,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: false,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: 0,
            iframeWidth: "100%",
            iframeHeight: "100%",
            iframeMaxWidth: "100%",
            iframeMaxHeight: "100%",
            download: true,
            counter: true,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: true,
            enableDrag: true,
            dynamic: false,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: "",
            isMobile: void 0,
            mobileSettings: {
                controls: false,
                showCloseIcon: false,
                download: false
            },
            plugins: [],
            strings: {
                closeGallery: "Close gallery",
                toggleMaximize: "Toggle maximize",
                previousSlide: "Previous slide",
                nextSlide: "Next slide",
                download: "Download",
                playVideo: "Play video"
            }
        };
        function initLgPolyfills() {
            (function() {
                if ("function" === typeof window.CustomEvent) return false;
                function CustomEvent(event, params) {
                    params = params || {
                        bubbles: false,
                        cancelable: false,
                        detail: null
                    };
                    var evt = document.createEvent("CustomEvent");
                    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                    return evt;
                }
                window.CustomEvent = CustomEvent;
            })();
            (function() {
                if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            })();
        }
        var lgQuery = function() {
            function lgQuery(selector) {
                this.cssVenderPrefixes = [ "TransitionDuration", "TransitionTimingFunction", "Transform", "Transition" ];
                this.selector = this._getSelector(selector);
                this.firstElement = this._getFirstEl();
                return this;
            }
            lgQuery.generateUUID = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(c) {
                    var r = 16 * Math.random() | 0, v = "x" == c ? r : 3 & r | 8;
                    return v.toString(16);
                }));
            };
            lgQuery.prototype._getSelector = function(selector, context) {
                if (void 0 === context) context = document;
                if ("string" !== typeof selector) return selector;
                context = context || document;
                var fl = selector.substring(0, 1);
                if ("#" === fl) return context.querySelector(selector); else return context.querySelectorAll(selector);
            };
            lgQuery.prototype._each = function(func) {
                if (!this.selector) return this;
                if (void 0 !== this.selector.length) [].forEach.call(this.selector, func); else func(this.selector, 0);
                return this;
            };
            lgQuery.prototype._setCssVendorPrefix = function(el, cssProperty, value) {
                var property = cssProperty.replace(/-([a-z])/gi, (function(s, group1) {
                    return group1.toUpperCase();
                }));
                if (-1 !== this.cssVenderPrefixes.indexOf(property)) {
                    el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
                    el.style["webkit" + property] = value;
                    el.style["moz" + property] = value;
                    el.style["ms" + property] = value;
                    el.style["o" + property] = value;
                } else el.style[property] = value;
            };
            lgQuery.prototype._getFirstEl = function() {
                if (this.selector && void 0 !== this.selector.length) return this.selector[0]; else return this.selector;
            };
            lgQuery.prototype.isEventMatched = function(event, eventName) {
                var eventNamespace = eventName.split(".");
                return event.split(".").filter((function(e) {
                    return e;
                })).every((function(e) {
                    return -1 !== eventNamespace.indexOf(e);
                }));
            };
            lgQuery.prototype.attr = function(attr, value) {
                if (void 0 === value) {
                    if (!this.firstElement) return "";
                    return this.firstElement.getAttribute(attr);
                }
                this._each((function(el) {
                    el.setAttribute(attr, value);
                }));
                return this;
            };
            lgQuery.prototype.find = function(selector) {
                return $LG(this._getSelector(selector, this.selector));
            };
            lgQuery.prototype.first = function() {
                if (this.selector && void 0 !== this.selector.length) return $LG(this.selector[0]); else return $LG(this.selector);
            };
            lgQuery.prototype.eq = function(index) {
                return $LG(this.selector[index]);
            };
            lgQuery.prototype.parent = function() {
                return $LG(this.selector.parentElement);
            };
            lgQuery.prototype.get = function() {
                return this._getFirstEl();
            };
            lgQuery.prototype.removeAttr = function(attributes) {
                var attrs = attributes.split(" ");
                this._each((function(el) {
                    attrs.forEach((function(attr) {
                        return el.removeAttribute(attr);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.wrap = function(className) {
                if (!this.firstElement) return this;
                var wrapper = document.createElement("div");
                wrapper.className = className;
                this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
                this.firstElement.parentNode.removeChild(this.firstElement);
                wrapper.appendChild(this.firstElement);
                return this;
            };
            lgQuery.prototype.addClass = function(classNames) {
                if (void 0 === classNames) classNames = "";
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.add(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.removeClass = function(classNames) {
                this._each((function(el) {
                    classNames.split(" ").forEach((function(className) {
                        if (className) el.classList.remove(className);
                    }));
                }));
                return this;
            };
            lgQuery.prototype.hasClass = function(className) {
                if (!this.firstElement) return false;
                return this.firstElement.classList.contains(className);
            };
            lgQuery.prototype.hasAttribute = function(attribute) {
                if (!this.firstElement) return false;
                return this.firstElement.hasAttribute(attribute);
            };
            lgQuery.prototype.toggleClass = function(className) {
                if (!this.firstElement) return this;
                if (this.hasClass(className)) this.removeClass(className); else this.addClass(className);
                return this;
            };
            lgQuery.prototype.css = function(property, value) {
                var _this = this;
                this._each((function(el) {
                    _this._setCssVendorPrefix(el, property, value);
                }));
                return this;
            };
            lgQuery.prototype.on = function(events, listener) {
                var _this = this;
                if (!this.selector) return this;
                events.split(" ").forEach((function(event) {
                    if (!Array.isArray(lgQuery.eventListeners[event])) lgQuery.eventListeners[event] = [];
                    lgQuery.eventListeners[event].push(listener);
                    _this.selector.addEventListener(event.split(".")[0], listener);
                }));
                return this;
            };
            lgQuery.prototype.once = function(event, listener) {
                var _this = this;
                this.on(event, (function() {
                    _this.off(event);
                    listener(event);
                }));
                return this;
            };
            lgQuery.prototype.off = function(event) {
                var _this = this;
                if (!this.selector) return this;
                Object.keys(lgQuery.eventListeners).forEach((function(eventName) {
                    if (_this.isEventMatched(event, eventName)) {
                        lgQuery.eventListeners[eventName].forEach((function(listener) {
                            _this.selector.removeEventListener(eventName.split(".")[0], listener);
                        }));
                        lgQuery.eventListeners[eventName] = [];
                    }
                }));
                return this;
            };
            lgQuery.prototype.trigger = function(event, detail) {
                if (!this.firstElement) return this;
                var customEvent = new CustomEvent(event.split(".")[0], {
                    detail: detail || null
                });
                this.firstElement.dispatchEvent(customEvent);
                return this;
            };
            lgQuery.prototype.load = function(url) {
                var _this = this;
                fetch(url).then((function(res) {
                    return res.text();
                })).then((function(html) {
                    _this.selector.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.html = function(html) {
                if (void 0 === html) {
                    if (!this.firstElement) return "";
                    return this.firstElement.innerHTML;
                }
                this._each((function(el) {
                    el.innerHTML = html;
                }));
                return this;
            };
            lgQuery.prototype.append = function(html) {
                this._each((function(el) {
                    if ("string" === typeof html) el.insertAdjacentHTML("beforeend", html); else el.appendChild(html);
                }));
                return this;
            };
            lgQuery.prototype.prepend = function(html) {
                this._each((function(el) {
                    el.insertAdjacentHTML("afterbegin", html);
                }));
                return this;
            };
            lgQuery.prototype.remove = function() {
                this._each((function(el) {
                    el.parentNode.removeChild(el);
                }));
                return this;
            };
            lgQuery.prototype.empty = function() {
                this._each((function(el) {
                    el.innerHTML = "";
                }));
                return this;
            };
            lgQuery.prototype.scrollTop = function(scrollTop) {
                if (void 0 !== scrollTop) {
                    document.body.scrollTop = scrollTop;
                    document.documentElement.scrollTop = scrollTop;
                    return this;
                } else return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            };
            lgQuery.prototype.scrollLeft = function(scrollLeft) {
                if (void 0 !== scrollLeft) {
                    document.body.scrollLeft = scrollLeft;
                    document.documentElement.scrollLeft = scrollLeft;
                    return this;
                } else return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            };
            lgQuery.prototype.offset = function() {
                if (!this.firstElement) return {
                    left: 0,
                    top: 0
                };
                var rect = this.firstElement.getBoundingClientRect();
                var bodyMarginLeft = $LG("body").style().marginLeft;
                return {
                    left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
                    top: rect.top + this.scrollTop()
                };
            };
            lgQuery.prototype.style = function() {
                if (!this.firstElement) return {};
                return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
            };
            lgQuery.prototype.width = function() {
                var style = this.style();
                return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
            };
            lgQuery.prototype.height = function() {
                var style = this.style();
                return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
            };
            lgQuery.eventListeners = {};
            return lgQuery;
        }();
        function $LG(selector) {
            initLgPolyfills();
            return new lgQuery(selector);
        }
        var defaultDynamicOptions = [ "src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl" ];
        function convertToData(attr) {
            if ("href" === attr) return "src";
            attr = attr.replace("data-", "");
            attr = attr.charAt(0).toLowerCase() + attr.slice(1);
            attr = attr.replace(/-([a-z])/g, (function(g) {
                return g[1].toUpperCase();
            }));
            return attr;
        }
        var utils = {
            getSize: function(el, container, spacing, defaultLgSize) {
                if (void 0 === spacing) spacing = 0;
                var LGel = $LG(el);
                var lgSize = LGel.attr("data-lg-size") || defaultLgSize;
                if (!lgSize) return;
                var isResponsiveSizes = lgSize.split(",");
                if (isResponsiveSizes[1]) {
                    var wWidth = window.innerWidth;
                    for (var i = 0; i < isResponsiveSizes.length; i++) {
                        var size_1 = isResponsiveSizes[i];
                        var responsiveWidth = parseInt(size_1.split("-")[2], 10);
                        if (responsiveWidth > wWidth) {
                            lgSize = size_1;
                            break;
                        }
                        if (i === isResponsiveSizes.length - 1) lgSize = size_1;
                    }
                }
                var size = lgSize.split("-");
                var width = parseInt(size[0], 10);
                var height = parseInt(size[1], 10);
                var cWidth = container.width();
                var cHeight = container.height() - spacing;
                var maxWidth = Math.min(cWidth, width);
                var maxHeight = Math.min(cHeight, height);
                var ratio = Math.min(maxWidth / width, maxHeight / height);
                return {
                    width: width * ratio,
                    height: height * ratio
                };
            },
            getTransform: function(el, container, top, bottom, imageSize) {
                if (!imageSize) return;
                var LGel = $LG(el).find("img").first();
                if (!LGel.get()) return;
                var containerRect = container.get().getBoundingClientRect();
                var wWidth = containerRect.width;
                var wHeight = container.height() - (top + bottom);
                var elWidth = LGel.width();
                var elHeight = LGel.height();
                var elStyle = LGel.style();
                var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
                var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
                var scX = elWidth / imageSize.width;
                var scY = elHeight / imageSize.height;
                var transform = "translate3d(" + (x *= -1) + "px, " + (y *= -1) + "px, 0) scale3d(" + scX + ", " + scY + ", 1)";
                return transform;
            },
            getIframeMarkup: function(iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
                var title = iframeTitle ? 'title="' + iframeTitle + '"' : "";
                return '<div class="lg-video-cont lg-has-iframe" style="width:' + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + '">\n                    <iframe class="lg-object" frameborder="0" ' + title + ' src="' + src + '"  allowfullscreen="true"></iframe>\n                </div>';
            },
            getImgMarkup: function(index, src, altAttr, srcset, sizes, sources) {
                var srcsetAttr = srcset ? 'srcset="' + srcset + '"' : "";
                var sizesAttr = sizes ? 'sizes="' + sizes + '"' : "";
                var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + ' class="lg-object lg-image" data-index="' + index + '" src="' + src + '" />';
                var sourceTag = "";
                if (sources) {
                    var sourceObj = "string" === typeof sources ? JSON.parse(sources) : sources;
                    sourceTag = sourceObj.map((function(source) {
                        var attrs = "";
                        Object.keys(source).forEach((function(key) {
                            attrs += " " + key + '="' + source[key] + '"';
                        }));
                        return "<source " + attrs + "></source>";
                    }));
                }
                return "" + sourceTag + imgMarkup;
            },
            getResponsiveSrc: function(srcItms) {
                var rsWidth = [];
                var rsSrc = [];
                var src = "";
                for (var i = 0; i < srcItms.length; i++) {
                    var _src = srcItms[i].split(" ");
                    if ("" === _src[0]) _src.splice(0, 1);
                    rsSrc.push(_src[0]);
                    rsWidth.push(_src[1]);
                }
                var wWidth = window.innerWidth;
                for (var j = 0; j < rsWidth.length; j++) if (parseInt(rsWidth[j], 10) > wWidth) {
                    src = rsSrc[j];
                    break;
                }
                return src;
            },
            isImageLoaded: function(img) {
                if (!img) return false;
                if (!img.complete) return false;
                if (0 === img.naturalWidth) return false;
                return true;
            },
            getVideoPosterMarkup: function(_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
                var videoClass = "";
                if (_isVideo && _isVideo.youtube) videoClass = "lg-has-youtube"; else if (_isVideo && _isVideo.vimeo) videoClass = "lg-has-vimeo"; else videoClass = "lg-has-html5";
                return '<div class="lg-video-cont ' + videoClass + '" style="' + videoContStyle + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + playVideoString + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + playVideoString + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (dummyImg || "") + '\n            <img class="lg-object lg-video-poster" src="' + _poster + '" />\n        </div>';
            },
            getFocusableElements: function(container) {
                var elements = container.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
                var visibleElements = [].filter.call(elements, (function(element) {
                    var style = window.getComputedStyle(element);
                    return "none" !== style.display && "hidden" !== style.visibility;
                }));
                return visibleElements;
            },
            getDynamicOptions: function(items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
                var dynamicElements = [];
                var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);
                [].forEach.call(items, (function(item) {
                    var dynamicEl = {};
                    for (var i = 0; i < item.attributes.length; i++) {
                        var attr = item.attributes[i];
                        if (attr.specified) {
                            var dynamicAttr = convertToData(attr.name);
                            var label = "";
                            if (availableDynamicOptions.indexOf(dynamicAttr) > -1) label = dynamicAttr;
                            if (label) dynamicEl[label] = attr.value;
                        }
                    }
                    var currentItem = $LG(item);
                    var alt = currentItem.find("img").first().attr("alt");
                    var title = currentItem.attr("title");
                    var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find("img").first().attr("src");
                    dynamicEl.thumb = thumb;
                    if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) dynamicEl.subHtml = title || alt || "";
                    dynamicEl.alt = alt || title || "";
                    dynamicElements.push(dynamicEl);
                }));
                return dynamicElements;
            },
            isMobile: function() {
                return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            },
            isVideo: function(src, isHTML5VIdeo, index) {
                if (!src) if (isHTML5VIdeo) return {
                    html5: true
                }; else {
                    console.error("lightGallery :- data-src is not provided on slide item " + (index + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                    return;
                }
                var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
                var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
                var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
                if (youtube) return {
                    youtube
                }; else if (vimeo) return {
                    vimeo
                }; else if (wistia) return {
                    wistia
                };
            }
        };
        var lgId = 0;
        var LightGallery = function() {
            function LightGallery(element, options) {
                this.lgOpened = false;
                this.index = 0;
                this.plugins = [];
                this.lGalleryOn = false;
                this.lgBusy = false;
                this.currentItemsInDom = [];
                this.prevScrollTop = 0;
                this.bodyPaddingRight = 0;
                this.isDummyImageRemoved = false;
                this.dragOrSwipeEnabled = false;
                this.mediaContainerPosition = {
                    top: 0,
                    bottom: 0
                };
                if (!element) return this;
                lgId++;
                this.lgId = lgId;
                this.el = element;
                this.LGel = $LG(element);
                this.generateSettings(options);
                this.buildModules();
                if (this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                this.galleryItems = this.getItems();
                this.normalizeSettings();
                this.init();
                this.validateLicense();
                return this;
            }
            LightGallery.prototype.generateSettings = function(options) {
                this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);
                if (this.settings.isMobile && "function" === typeof this.settings.isMobile ? this.settings.isMobile() : utils.isMobile()) {
                    var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);
                    this.settings = __assign(__assign({}, this.settings), mobileSettings);
                }
            };
            LightGallery.prototype.normalizeSettings = function() {
                if (this.settings.slideEndAnimation) this.settings.hideControlOnEnd = false;
                if (!this.settings.closable) this.settings.swipeToClose = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                if (this.settings.dynamic) this.zoomFromOrigin = false;
                if (!this.settings.container) this.settings.container = document.body;
                this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
            };
            LightGallery.prototype.init = function() {
                var _this = this;
                this.addSlideVideoInfo(this.galleryItems);
                this.buildStructure();
                this.LGel.trigger(lGEvents.init, {
                    instance: this
                });
                if (this.settings.keyPress) this.keyPress();
                setTimeout((function() {
                    _this.enableDrag();
                    _this.enableSwipe();
                    _this.triggerPosterClick();
                }), 50);
                this.arrow();
                if (this.settings.mousewheel) this.mousewheel();
                if (!this.settings.dynamic) this.openGalleryOnItemClick();
            };
            LightGallery.prototype.openGalleryOnItemClick = function() {
                var _this = this;
                var _loop_1 = function(index) {
                    var element = this_1.items[index];
                    var $element = $LG(element);
                    var uuid = lgQuery.generateUUID();
                    $element.attr("data-lg-id", uuid).on("click.lgcustom-item-" + uuid, (function(e) {
                        e.preventDefault();
                        var currentItemIndex = _this.settings.index || index;
                        _this.openGallery(currentItemIndex, element);
                    }));
                };
                var this_1 = this;
                for (var index = 0; index < this.items.length; index++) _loop_1(index);
            };
            LightGallery.prototype.buildModules = function() {
                var _this = this;
                this.settings.plugins.forEach((function(plugin) {
                    _this.plugins.push(new plugin(_this, $LG));
                }));
            };
            LightGallery.prototype.validateLicense = function() {
                if (!this.settings.licenseKey) console.error("Please provide a valid license key"); else if ("0000-0000-000-0000" === this.settings.licenseKey) console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
            };
            LightGallery.prototype.getSlideItem = function(index) {
                return $LG(this.getSlideItemId(index));
            };
            LightGallery.prototype.getSlideItemId = function(index) {
                return "#lg-item-" + this.lgId + "-" + index;
            };
            LightGallery.prototype.getIdName = function(id) {
                return id + "-" + this.lgId;
            };
            LightGallery.prototype.getElementById = function(id) {
                return $LG("#" + this.getIdName(id));
            };
            LightGallery.prototype.manageSingleSlideClassName = function() {
                if (this.galleryItems.length < 2) this.outer.addClass("lg-single-item"); else this.outer.removeClass("lg-single-item");
            };
            LightGallery.prototype.buildStructure = function() {
                var _this = this;
                var container = this.$container && this.$container.get();
                if (container) return;
                var controls = "";
                var subHtmlCont = "";
                if (this.settings.controls) controls = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings["previousSlide"] + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings["nextSlide"] + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>";
                if (".lg-item" !== this.settings.appendSubHtmlTo) subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
                var addClasses = "";
                if (this.settings.allowMediaOverlap) addClasses += "lg-media-overlap ";
                var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "";
                var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "";
                var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : "");
                var closeIcon = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings["closeGallery"] + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "";
                var maximizeIcon = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings["toggleMaximize"] + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "";
                var template = '\n        <div class="' + containerClassName + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + ariaLabelledby + " " + ariaDescribedby + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + addClasses + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + controls + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? subHtmlCont : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? subHtmlCont : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                $LG(this.settings.container).append(template);
                if (document.body !== this.settings.container) $LG(this.settings.container).css("position", "relative");
                this.outer = this.getElementById("lg-outer");
                this.$lgComponents = this.getElementById("lg-components");
                this.$backdrop = this.getElementById("lg-backdrop");
                this.$container = this.getElementById("lg-container");
                this.$inner = this.getElementById("lg-inner");
                this.$content = this.getElementById("lg-content");
                this.$toolbar = this.getElementById("lg-toolbar");
                this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                var outerClassNames = this.settings.mode + " ";
                this.manageSingleSlideClassName();
                if (this.settings.enableDrag) outerClassNames += "lg-grab ";
                this.outer.addClass(outerClassNames);
                this.$inner.css("transition-timing-function", this.settings.easing);
                this.$inner.css("transition-duration", this.settings.speed + "ms");
                if (this.settings.download) this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings["download"] + '" download class="lg-download lg-icon"></a>');
                this.counter();
                $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                    _this.refreshOnResize();
                }));
                this.hideBars();
                this.manageCloseGallery();
                this.toggleMaximize();
                this.initModules();
            };
            LightGallery.prototype.refreshOnResize = function() {
                if (this.lgOpened) {
                    var currentGalleryItem = this.galleryItems[this.index];
                    var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var _a = this.mediaContainerPosition, top_1 = _a.top, bottom = _a.bottom;
                    this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    if (__slideVideoInfo) this.resizeVideoSlide(this.index, this.currentImageSize);
                    if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                        this.outer.find(".lg-current .lg-dummy-img").first().attr("style", imgStyle);
                    }
                    this.LGel.trigger(lGEvents.containerResize);
                }
            };
            LightGallery.prototype.resizeVideoSlide = function(index, imageSize) {
                var lgVideoStyle = this.getVideoContStyle(imageSize);
                var currentSlide = this.getSlideItem(index);
                currentSlide.find(".lg-video-cont").attr("style", lgVideoStyle);
            };
            LightGallery.prototype.updateSlides = function(items, index) {
                if (this.index > items.length - 1) this.index = items.length - 1;
                if (1 === items.length) this.index = 0;
                if (!items.length) {
                    this.closeGallery();
                    return;
                }
                var currentSrc = this.galleryItems[index].src;
                this.galleryItems = items;
                this.updateControls();
                this.$inner.empty();
                this.currentItemsInDom = [];
                var _index = 0;
                this.galleryItems.some((function(galleryItem, itemIndex) {
                    if (galleryItem.src === currentSrc) {
                        _index = itemIndex;
                        return true;
                    }
                    return false;
                }));
                this.currentItemsInDom = this.organizeSlideItems(_index, -1);
                this.loadContent(_index, true);
                this.getSlideItem(_index).addClass("lg-current");
                this.index = _index;
                this.updateCurrentCounter(_index);
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.getItems = function() {
                this.items = [];
                if (!this.settings.dynamic) {
                    if ("this" === this.settings.selector) this.items.push(this.el); else if (this.settings.selector) if ("string" === typeof this.settings.selector) if (this.settings.selectWithin) {
                        var selectWithin = $LG(this.settings.selectWithin);
                        this.items = selectWithin.find(this.settings.selector).get();
                    } else this.items = this.el.querySelectorAll(this.settings.selector); else this.items = this.settings.selector; else this.items = this.el.children;
                    return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
                } else return this.settings.dynamicEl || [];
            };
            LightGallery.prototype.shouldHideScrollbar = function() {
                return this.settings.hideScrollbar && document.body === this.settings.container;
            };
            LightGallery.prototype.hideScrollbar = function() {
                if (!this.shouldHideScrollbar()) return;
                this.bodyPaddingRight = parseFloat($LG("body").style().paddingRight);
                var bodyRect = document.documentElement.getBoundingClientRect();
                var scrollbarWidth = window.innerWidth - bodyRect.width;
                $LG(document.body).css("padding-right", scrollbarWidth + this.bodyPaddingRight + "px");
                $LG(document.body).addClass("lg-overlay-open");
            };
            LightGallery.prototype.resetScrollBar = function() {
                if (!this.shouldHideScrollbar()) return;
                $LG(document.body).css("padding-right", this.bodyPaddingRight + "px");
                $LG(document.body).removeClass("lg-overlay-open");
            };
            LightGallery.prototype.openGallery = function(index, element) {
                var _this = this;
                if (void 0 === index) index = this.settings.index;
                if (this.lgOpened) return;
                this.lgOpened = true;
                this.outer.removeClass("lg-hide-items");
                this.hideScrollbar();
                this.$container.addClass("lg-show");
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
                this.currentItemsInDom = itemsToBeInsertedToDom;
                var items = "";
                itemsToBeInsertedToDom.forEach((function(item) {
                    items = items + '<div id="' + item + '" class="lg-item"></div>';
                }));
                this.$inner.append(items);
                this.addHtml(index);
                var transform = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var _a = this.mediaContainerPosition, top = _a.top, bottom = _a.bottom;
                if (!this.settings.allowMediaOverlap) this.setMediaContainerPosition(top, bottom);
                var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;
                if (this.zoomFromOrigin && element) {
                    this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                    transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
                }
                if (!this.zoomFromOrigin || !transform) {
                    this.outer.addClass(this.settings.startClass);
                    this.getSlideItem(index).removeClass("lg-complete");
                }
                var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                setTimeout((function() {
                    _this.outer.addClass("lg-components-open");
                }), timeout);
                this.index = index;
                this.LGel.trigger(lGEvents.beforeOpen);
                this.getSlideItem(index).addClass("lg-current");
                this.lGalleryOn = false;
                this.prevScrollTop = $LG(window).scrollTop();
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) {
                        var currentSlide_1 = _this.getSlideItem(index);
                        currentSlide_1.css("transform", transform);
                        setTimeout((function() {
                            currentSlide_1.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", _this.settings.startAnimationDuration + "ms");
                            _this.outer.addClass("lg-zoom-from-image");
                        }));
                        setTimeout((function() {
                            currentSlide_1.css("transform", "translate3d(0, 0, 0)");
                        }), 100);
                    }
                    setTimeout((function() {
                        _this.$backdrop.addClass("in");
                        _this.$container.addClass("lg-show-in");
                    }), 10);
                    setTimeout((function() {
                        if (_this.settings.trapFocus && document.body === _this.settings.container) _this.trapFocus();
                    }), _this.settings.backdropDuration + 50);
                    if (!_this.zoomFromOrigin || !transform) setTimeout((function() {
                        _this.outer.addClass("lg-visible");
                    }), _this.settings.backdropDuration);
                    _this.slide(index, false, false, false);
                    _this.LGel.trigger(lGEvents.afterOpen);
                }));
                if (document.body === this.settings.container) $LG("html").addClass("lg-on");
            };
            LightGallery.prototype.getMediaContainerPosition = function() {
                if (this.settings.allowMediaOverlap) return {
                    top: 0,
                    bottom: 0
                };
                var top = this.$toolbar.get().clientHeight || 0;
                var subHtml = this.outer.find(".lg-components .lg-sub-html").get();
                var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
                var thumbContainer = this.outer.find(".lg-thumb-outer").get();
                var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
                var bottom = thumbHeight + captionHeight;
                return {
                    top,
                    bottom
                };
            };
            LightGallery.prototype.setMediaContainerPosition = function(top, bottom) {
                if (void 0 === top) top = 0;
                if (void 0 === bottom) bottom = 0;
                this.$content.css("top", top + "px").css("bottom", bottom + "px");
            };
            LightGallery.prototype.hideBars = function() {
                var _this = this;
                setTimeout((function() {
                    _this.outer.removeClass("lg-hide-items");
                    if (_this.settings.hideBarsDelay > 0) {
                        _this.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                            _this.outer.removeClass("lg-hide-items");
                            clearTimeout(_this.hideBarTimeout);
                            _this.hideBarTimeout = setTimeout((function() {
                                _this.outer.addClass("lg-hide-items");
                            }), _this.settings.hideBarsDelay);
                        }));
                        _this.outer.trigger("mousemove.lg");
                    }
                }), this.settings.showBarsAfter);
            };
            LightGallery.prototype.initPictureFill = function($img) {
                if (this.settings.supportLegacyBrowser) try {
                    picturefill({
                        elements: [ $img.get() ]
                    });
                } catch (e) {
                    console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.");
                }
            };
            LightGallery.prototype.counter = function() {
                if (this.settings.counter) {
                    var counterHtml = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                    this.outer.find(this.settings.appendCounterTo).append(counterHtml);
                }
            };
            LightGallery.prototype.addHtml = function(index) {
                var subHtml;
                var subHtmlUrl;
                if (this.galleryItems[index].subHtmlUrl) subHtmlUrl = this.galleryItems[index].subHtmlUrl; else subHtml = this.galleryItems[index].subHtml;
                if (!subHtmlUrl) if (subHtml) {
                    var fL = subHtml.substring(0, 1);
                    if ("." === fL || "#" === fL) if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) subHtml = $LG(this.items).eq(index).find(subHtml).first().html(); else subHtml = $LG(subHtml).first().html();
                } else subHtml = "";
                if (".lg-item" !== this.settings.appendSubHtmlTo) if (subHtmlUrl) this.outer.find(".lg-sub-html").load(subHtmlUrl); else this.outer.find(".lg-sub-html").html(subHtml); else {
                    var currentSlide = $LG(this.getSlideItemId(index));
                    if (subHtmlUrl) currentSlide.load(subHtmlUrl); else currentSlide.append('<div class="lg-sub-html">' + subHtml + "</div>");
                }
                if ("undefined" !== typeof subHtml && null !== subHtml) if ("" === subHtml) this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html"); else this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html");
                this.LGel.trigger(lGEvents.afterAppendSubHtml, {
                    index
                });
            };
            LightGallery.prototype.preload = function(index) {
                for (var i = 1; i <= this.settings.preload; i++) {
                    if (i >= this.galleryItems.length - index) break;
                    this.loadContent(index + i, false);
                }
                for (var j = 1; j <= this.settings.preload; j++) {
                    if (index - j < 0) break;
                    this.loadContent(index - j, false);
                }
            };
            LightGallery.prototype.getDummyImgStyles = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getVideoContStyle = function(imageSize) {
                if (!imageSize) return "";
                return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
            };
            LightGallery.prototype.getDummyImageContent = function($currentSlide, index, alt) {
                var $currentItem;
                if (!this.settings.dynamic) $currentItem = $LG(this.items).eq(index);
                if ($currentItem) {
                    var _dummyImgSrc = void 0;
                    if (!this.settings.exThumbImage) _dummyImgSrc = $currentItem.find("img").first().attr("src"); else _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
                    if (!_dummyImgSrc) return "";
                    var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                    var dummyImgContent = "<img " + alt + ' style="' + imgStyle + '" class="lg-dummy-img" src="' + _dummyImgSrc + '" />';
                    $currentSlide.addClass("lg-first-slide");
                    this.outer.addClass("lg-first-slide-loading");
                    return dummyImgContent;
                }
                return "";
            };
            LightGallery.prototype.setImgMarkup = function(src, $currentSlide, index) {
                var currentGalleryItem = this.galleryItems[index];
                var alt = currentGalleryItem.alt, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var imgContent = "";
                var altAttr = alt ? 'alt="' + alt + '"' : "";
                if (this.isFirstSlideWithZoomAnimation()) imgContent = this.getDummyImageContent($currentSlide, index, altAttr); else imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
                var imgMarkup = '<picture class="lg-img-wrap"> ' + imgContent + "</picture>";
                $currentSlide.prepend(imgMarkup);
            };
            LightGallery.prototype.onSlideObjectLoad = function($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
                var mediaObject = $slide.find(".lg-object").first();
                if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) onLoad(); else {
                    mediaObject.on("load.lg error.lg", (function() {
                        onLoad && onLoad();
                    }));
                    mediaObject.on("error.lg", (function() {
                        onError && onError();
                    }));
                }
            };
            LightGallery.prototype.onLgObjectLoad = function(currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
                var _this = this;
                this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, (function() {
                    _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
                }), (function() {
                    currentSlide.addClass("lg-complete lg-complete_");
                    currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
                }));
            };
            LightGallery.prototype.triggerSlideItemLoad = function($currentSlide, index, delay, speed, isFirstSlide) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var _speed = isFirstSlide && "video" === this.getSlideType(currentGalleryItem) && !currentGalleryItem.poster ? speed : 0;
                setTimeout((function() {
                    $currentSlide.addClass("lg-complete lg-complete_");
                    _this.LGel.trigger(lGEvents.slideItemLoad, {
                        index,
                        delay: delay || 0,
                        isFirstSlide
                    });
                }), _speed);
            };
            LightGallery.prototype.isFirstSlideWithZoomAnimation = function() {
                return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
            };
            LightGallery.prototype.addSlideVideoInfo = function(items) {
                var _this = this;
                items.forEach((function(element, index) {
                    element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);
                    if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
                }));
            };
            LightGallery.prototype.loadContent = function(index, rec) {
                var _this = this;
                var currentGalleryItem = this.galleryItems[index];
                var $currentSlide = $LG(this.getSlideItemId(index));
                var poster = currentGalleryItem.poster, srcset = currentGalleryItem.srcset, sizes = currentGalleryItem.sizes, sources = currentGalleryItem.sources;
                var src = currentGalleryItem.src;
                var video = currentGalleryItem.video;
                var _html5Video = video && "string" === typeof video ? JSON.parse(video) : video;
                if (currentGalleryItem.responsive) {
                    var srcDyItms = currentGalleryItem.responsive.split(",");
                    src = utils.getResponsiveSrc(srcDyItms) || src;
                }
                var videoInfo = currentGalleryItem.__slideVideoInfo;
                var lgVideoStyle = "";
                var iframe = !!currentGalleryItem.iframe;
                var isFirstSlide = !this.lGalleryOn;
                var delay = 0;
                if (isFirstSlide) if (this.zoomFromOrigin && this.currentImageSize) delay = this.settings.startAnimationDuration + 10; else delay = this.settings.backdropDuration + 10;
                if (!$currentSlide.hasClass("lg-loaded")) {
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_2 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                        lgVideoStyle = this.getVideoContStyle(videoSize);
                    }
                    if (iframe) {
                        var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                        $currentSlide.prepend(markup);
                    } else if (poster) {
                        var dummyImg = "";
                        var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;
                        if (hasStartAnimation) dummyImg = this.getDummyImageContent($currentSlide, index, "");
                        markup = utils.getVideoPosterMarkup(poster, dummyImg || "", lgVideoStyle, this.settings.strings["playVideo"], videoInfo);
                        $currentSlide.prepend(markup);
                    } else if (videoInfo) {
                        markup = '<div class="lg-video-cont " style="' + lgVideoStyle + '"></div>';
                        $currentSlide.prepend(markup);
                    } else {
                        this.setImgMarkup(src, $currentSlide, index);
                        if (srcset || sources) {
                            var $img = $currentSlide.find(".lg-object");
                            this.initPictureFill($img);
                        }
                    }
                    if (poster || videoInfo) this.LGel.trigger(lGEvents.hasVideo, {
                        index,
                        src,
                        html5Video: _html5Video,
                        hasPoster: !!poster
                    });
                    this.LGel.trigger(lGEvents.afterAppendSlide, {
                        index
                    });
                    if (this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo) this.addHtml(index);
                }
                var _speed = 0;
                if (delay && !$LG(document.body).hasClass("lg-from-hash")) _speed = delay;
                if (this.isFirstSlideWithZoomAnimation()) {
                    setTimeout((function() {
                        $currentSlide.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style");
                    }), this.settings.startAnimationDuration + 100);
                    if (!$currentSlide.hasClass("lg-loaded")) setTimeout((function() {
                        if ("image" === _this.getSlideType(currentGalleryItem)) {
                            var alt = currentGalleryItem.alt;
                            var altAttr = alt ? 'alt="' + alt + '"' : "";
                            $currentSlide.find(".lg-img-wrap").append(utils.getImgMarkup(index, src, altAttr, srcset, sizes, currentGalleryItem.sources));
                            if (srcset || sources) {
                                var $img = $currentSlide.find(".lg-object");
                                _this.initPictureFill($img);
                            }
                        }
                        if ("image" === _this.getSlideType(currentGalleryItem) || "video" === _this.getSlideType(currentGalleryItem) && poster) {
                            _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false);
                            _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }), (function() {
                                _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                            }));
                        }
                    }), this.settings.startAnimationDuration + 100);
                }
                $currentSlide.addClass("lg-loaded");
                if (!this.isFirstSlideWithZoomAnimation() || "video" === this.getSlideType(currentGalleryItem) && !poster) this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
                if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass("lg-complete_") && !this.lGalleryOn) setTimeout((function() {
                    $currentSlide.addClass("lg-complete");
                }), this.settings.backdropDuration);
                this.lGalleryOn = true;
                if (true === rec) if (!$currentSlide.hasClass("lg-complete_")) $currentSlide.find(".lg-object").first().on("load.lg error.lg", (function() {
                    _this.preload(index);
                })); else this.preload(index);
            };
            LightGallery.prototype.loadContentOnFirstSlideLoad = function(index, $currentSlide, speed) {
                var _this = this;
                setTimeout((function() {
                    $currentSlide.find(".lg-dummy-img").remove();
                    $currentSlide.removeClass("lg-first-slide");
                    _this.outer.removeClass("lg-first-slide-loading");
                    _this.isDummyImageRemoved = true;
                    _this.preload(index);
                }), speed + 300);
            };
            LightGallery.prototype.getItemsToBeInsertedToDom = function(index, prevIndex, numberOfItems) {
                var _this = this;
                if (void 0 === numberOfItems) numberOfItems = 0;
                var itemsToBeInsertedToDom = [];
                var possibleNumberOfItems = Math.max(numberOfItems, 3);
                possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
                var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;
                if (this.galleryItems.length <= 3) {
                    this.galleryItems.forEach((function(_element, index) {
                        itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
                    }));
                    return itemsToBeInsertedToDom;
                }
                if (index < (this.galleryItems.length - 1) / 2) {
                    for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    var numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
                } else {
                    for (idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                    numberOfExistingItems = itemsToBeInsertedToDom.length;
                    for (idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
                }
                if (this.settings.loop) if (index === this.galleryItems.length - 1) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0); else if (0 === index) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
                if (-1 === itemsToBeInsertedToDom.indexOf(prevIndexItem)) itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.organizeSlideItems = function(index, prevIndex) {
                var _this = this;
                var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
                itemsToBeInsertedToDom.forEach((function(item) {
                    if (-1 === _this.currentItemsInDom.indexOf(item)) _this.$inner.append('<div id="' + item + '" class="lg-item"></div>');
                }));
                this.currentItemsInDom.forEach((function(item) {
                    if (-1 === itemsToBeInsertedToDom.indexOf(item)) $LG("#" + item).remove();
                }));
                return itemsToBeInsertedToDom;
            };
            LightGallery.prototype.getPreviousSlideIndex = function() {
                var prevIndex = 0;
                try {
                    var currentItemId = this.outer.find(".lg-current").first().attr("id");
                    prevIndex = parseInt(currentItemId.split("-")[3]) || 0;
                } catch (error) {
                    prevIndex = 0;
                }
                return prevIndex;
            };
            LightGallery.prototype.setDownloadValue = function(index) {
                if (this.settings.download) {
                    var currentGalleryItem = this.galleryItems[index];
                    var hideDownloadBtn = false === currentGalleryItem.downloadUrl || "false" === currentGalleryItem.downloadUrl;
                    if (hideDownloadBtn) this.outer.addClass("lg-hide-download"); else {
                        var $download = this.getElementById("lg-download");
                        this.outer.removeClass("lg-hide-download");
                        $download.attr("href", currentGalleryItem.downloadUrl || currentGalleryItem.src);
                        if (currentGalleryItem.download) $download.attr("download", currentGalleryItem.download);
                    }
                }
            };
            LightGallery.prototype.makeSlideAnimation = function(direction, currentSlideItem, previousSlideItem) {
                var _this = this;
                if (this.lGalleryOn) previousSlideItem.addClass("lg-slide-progress");
                setTimeout((function() {
                    _this.outer.addClass("lg-no-trans");
                    _this.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide");
                    if ("prev" === direction) {
                        currentSlideItem.addClass("lg-prev-slide");
                        previousSlideItem.addClass("lg-next-slide");
                    } else {
                        currentSlideItem.addClass("lg-next-slide");
                        previousSlideItem.addClass("lg-prev-slide");
                    }
                    setTimeout((function() {
                        _this.outer.find(".lg-item").removeClass("lg-current");
                        currentSlideItem.addClass("lg-current");
                        _this.outer.removeClass("lg-no-trans");
                    }), 50);
                }), this.lGalleryOn ? this.settings.slideDelay : 0);
            };
            LightGallery.prototype.slide = function(index, fromTouch, fromThumb, direction) {
                var _this = this;
                var prevIndex = this.getPreviousSlideIndex();
                this.currentItemsInDom = this.organizeSlideItems(index, prevIndex);
                if (this.lGalleryOn && prevIndex === index) return;
                var numberOfGalleryItems = this.galleryItems.length;
                if (!this.lgBusy) {
                    if (this.settings.counter) this.updateCurrentCounter(index);
                    var currentSlideItem = this.getSlideItem(index);
                    var previousSlideItem_1 = this.getSlideItem(prevIndex);
                    var currentGalleryItem = this.galleryItems[index];
                    var videoInfo = currentGalleryItem.__slideVideoInfo;
                    this.outer.attr("data-lg-slide-type", this.getSlideType(currentGalleryItem));
                    this.setDownloadValue(index);
                    if (videoInfo) {
                        var _a = this.mediaContainerPosition, top_3 = _a.top, bottom = _a.bottom;
                        var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                        this.resizeVideoSlide(index, videoSize);
                    }
                    this.LGel.trigger(lGEvents.beforeSlide, {
                        prevIndex,
                        index,
                        fromTouch: !!fromTouch,
                        fromThumb: !!fromThumb
                    });
                    this.lgBusy = true;
                    clearTimeout(this.hideBarTimeout);
                    this.arrowDisable(index);
                    if (!direction) if (index < prevIndex) direction = "prev"; else if (index > prevIndex) direction = "next";
                    if (!fromTouch) this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1); else {
                        this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                        var touchPrev = void 0;
                        var touchNext = void 0;
                        if (numberOfGalleryItems > 2) {
                            touchPrev = index - 1;
                            touchNext = index + 1;
                            if (0 === index && prevIndex === numberOfGalleryItems - 1) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            } else if (index === numberOfGalleryItems - 1 && 0 === prevIndex) {
                                touchNext = 0;
                                touchPrev = numberOfGalleryItems - 1;
                            }
                        } else {
                            touchPrev = 0;
                            touchNext = 1;
                        }
                        if ("prev" === direction) this.getSlideItem(touchNext).addClass("lg-next-slide"); else this.getSlideItem(touchPrev).addClass("lg-prev-slide");
                        currentSlideItem.addClass("lg-current");
                    }
                    if (!this.lGalleryOn) this.loadContent(index, true); else setTimeout((function() {
                        _this.loadContent(index, true);
                        if (".lg-item" !== _this.settings.appendSubHtmlTo) _this.addHtml(index);
                    }), this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
                    setTimeout((function() {
                        _this.lgBusy = false;
                        previousSlideItem_1.removeClass("lg-slide-progress");
                        _this.LGel.trigger(lGEvents.afterSlide, {
                            prevIndex,
                            index,
                            fromTouch,
                            fromThumb
                        });
                    }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
                }
                this.index = index;
            };
            LightGallery.prototype.updateCurrentCounter = function(index) {
                this.getElementById("lg-counter-current").html(index + 1 + "");
            };
            LightGallery.prototype.updateCounterTotal = function() {
                this.getElementById("lg-counter-all").html(this.galleryItems.length + "");
            };
            LightGallery.prototype.getSlideType = function(item) {
                if (item.__slideVideoInfo) return "video"; else if (item.iframe) return "iframe"; else return "image";
            };
            LightGallery.prototype.touchMove = function(startCoords, endCoords, e) {
                var distanceX = endCoords.pageX - startCoords.pageX;
                var distanceY = endCoords.pageY - startCoords.pageY;
                var allowSwipe = false;
                if (this.swipeDirection) allowSwipe = true; else if (Math.abs(distanceX) > 15) {
                    this.swipeDirection = "horizontal";
                    allowSwipe = true;
                } else if (Math.abs(distanceY) > 15) {
                    this.swipeDirection = "vertical";
                    allowSwipe = true;
                }
                if (!allowSwipe) return;
                var $currentSlide = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                    null === e || void 0 === e ? void 0 : e.preventDefault();
                    this.outer.addClass("lg-dragging");
                    this.setTranslate($currentSlide, distanceX, 0);
                    var width = $currentSlide.get().offsetWidth;
                    var slideWidthAmount = 15 * width / 100;
                    var gutter = slideWidthAmount - Math.abs(10 * distanceX / 100);
                    this.setTranslate(this.outer.find(".lg-prev-slide").first(), -width + distanceX - gutter, 0);
                    this.setTranslate(this.outer.find(".lg-next-slide").first(), width + distanceX + gutter, 0);
                } else if ("vertical" === this.swipeDirection) if (this.settings.swipeToClose) {
                    null === e || void 0 === e ? void 0 : e.preventDefault();
                    this.$container.addClass("lg-dragging-vertical");
                    var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                    this.$backdrop.css("opacity", opacity);
                    var scale = 1 - Math.abs(distanceY) / (2 * window.innerWidth);
                    this.setTranslate($currentSlide, 0, distanceY, scale, scale);
                    if (Math.abs(distanceY) > 100) this.outer.addClass("lg-hide-items").removeClass("lg-components-open");
                }
            };
            LightGallery.prototype.touchEnd = function(endCoords, startCoords, event) {
                var _this = this;
                var distance;
                if ("lg-slide" !== this.settings.mode) this.outer.addClass("lg-slide");
                setTimeout((function() {
                    _this.$container.removeClass("lg-dragging-vertical");
                    _this.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                    var triggerClick = true;
                    if ("horizontal" === _this.swipeDirection) {
                        distance = endCoords.pageX - startCoords.pageX;
                        var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);
                        if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToNextSlide(true);
                            triggerClick = false;
                        } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                            _this.goToPrevSlide(true);
                            triggerClick = false;
                        }
                    } else if ("vertical" === _this.swipeDirection) {
                        distance = Math.abs(endCoords.pageY - startCoords.pageY);
                        if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                            _this.closeGallery();
                            return;
                        } else _this.$backdrop.css("opacity", 1);
                    }
                    _this.outer.find(".lg-item").removeAttr("style");
                    if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                        var target = $LG(event.target);
                        if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                    }
                    _this.swipeDirection = void 0;
                }));
                setTimeout((function() {
                    if (!_this.outer.hasClass("lg-dragging") && "lg-slide" !== _this.settings.mode) _this.outer.removeClass("lg-slide");
                }), this.settings.speed + 100);
            };
            LightGallery.prototype.enableSwipe = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isMoved = false;
                var isSwiping = false;
                if (this.settings.enableSwipe) {
                    this.$inner.on("touchstart.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if (($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) && !_this.outer.hasClass("lg-zoomed") && !_this.lgBusy && 1 === e.touches.length) {
                            isSwiping = true;
                            _this.touchAction = "swipe";
                            _this.manageSwipeClass();
                            startCoords = {
                                pageX: e.touches[0].pageX,
                                pageY: e.touches[0].pageY
                            };
                        }
                    }));
                    this.$inner.on("touchmove.lg", (function(e) {
                        if (isSwiping && "swipe" === _this.touchAction && 1 === e.touches.length) {
                            endCoords = {
                                pageX: e.touches[0].pageX,
                                pageY: e.touches[0].pageY
                            };
                            _this.touchMove(startCoords, endCoords, e);
                            isMoved = true;
                        }
                    }));
                    this.$inner.on("touchend.lg", (function(event) {
                        if ("swipe" === _this.touchAction) {
                            if (isMoved) {
                                isMoved = false;
                                _this.touchEnd(endCoords, startCoords, event);
                            } else if (isSwiping) {
                                var target = $LG(event.target);
                                if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                            }
                            _this.touchAction = void 0;
                            isSwiping = false;
                        }
                    }));
                }
            };
            LightGallery.prototype.enableDrag = function() {
                var _this = this;
                var startCoords = {};
                var endCoords = {};
                var isDraging = false;
                var isMoved = false;
                if (this.settings.enableDrag) {
                    this.outer.on("mousedown.lg", (function(e) {
                        _this.dragOrSwipeEnabled = true;
                        var $item = _this.getSlideItem(_this.index);
                        if ($LG(e.target).hasClass("lg-item") || $item.get().contains(e.target)) if (!_this.outer.hasClass("lg-zoomed") && !_this.lgBusy) {
                            e.preventDefault();
                            if (!_this.lgBusy) {
                                _this.manageSwipeClass();
                                startCoords = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                };
                                isDraging = true;
                                _this.outer.get().scrollLeft += 1;
                                _this.outer.get().scrollLeft -= 1;
                                _this.outer.removeClass("lg-grab").addClass("lg-grabbing");
                                _this.LGel.trigger(lGEvents.dragStart);
                            }
                        }
                    }));
                    $LG(window).on("mousemove.lg.global" + this.lgId, (function(e) {
                        if (isDraging && _this.lgOpened) {
                            isMoved = true;
                            endCoords = {
                                pageX: e.pageX,
                                pageY: e.pageY
                            };
                            _this.touchMove(startCoords, endCoords);
                            _this.LGel.trigger(lGEvents.dragMove);
                        }
                    }));
                    $LG(window).on("mouseup.lg.global" + this.lgId, (function(event) {
                        if (!_this.lgOpened) return;
                        var target = $LG(event.target);
                        if (isMoved) {
                            isMoved = false;
                            _this.touchEnd(endCoords, startCoords, event);
                            _this.LGel.trigger(lGEvents.dragEnd);
                        } else if (_this.isPosterElement(target)) _this.LGel.trigger(lGEvents.posterClick);
                        if (isDraging) {
                            isDraging = false;
                            _this.outer.removeClass("lg-grabbing").addClass("lg-grab");
                        }
                    }));
                }
            };
            LightGallery.prototype.triggerPosterClick = function() {
                var _this = this;
                this.$inner.on("click.lg", (function(event) {
                    if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) _this.LGel.trigger(lGEvents.posterClick);
                }));
            };
            LightGallery.prototype.manageSwipeClass = function() {
                var _touchNext = this.index + 1;
                var _touchPrev = this.index - 1;
                if (this.settings.loop && this.galleryItems.length > 2) if (0 === this.index) _touchPrev = this.galleryItems.length - 1; else if (this.index === this.galleryItems.length - 1) _touchNext = 0;
                this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide");
                if (_touchPrev > -1) this.getSlideItem(_touchPrev).addClass("lg-prev-slide");
                this.getSlideItem(_touchNext).addClass("lg-next-slide");
            };
            LightGallery.prototype.goToNextSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index + 1 < this.galleryItems.length) {
                    this.index++;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (_loop) {
                    this.index = 0;
                    this.LGel.trigger(lGEvents.beforeNextSlide, {
                        index: this.index
                    });
                    this.slide(this.index, !!fromTouch, false, "next");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-right-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-right-end");
                    }), 400);
                }
            };
            LightGallery.prototype.goToPrevSlide = function(fromTouch) {
                var _this = this;
                var _loop = this.settings.loop;
                if (fromTouch && this.galleryItems.length < 3) _loop = false;
                if (!this.lgBusy) if (this.index > 0) {
                    this.index--;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (_loop) {
                    this.index = this.galleryItems.length - 1;
                    this.LGel.trigger(lGEvents.beforePrevSlide, {
                        index: this.index,
                        fromTouch
                    });
                    this.slide(this.index, !!fromTouch, false, "prev");
                } else if (this.settings.slideEndAnimation && !fromTouch) {
                    this.outer.addClass("lg-left-end");
                    setTimeout((function() {
                        _this.outer.removeClass("lg-left-end");
                    }), 400);
                }
            };
            LightGallery.prototype.keyPress = function() {
                var _this = this;
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (_this.lgOpened && true === _this.settings.escKey && 27 === e.keyCode) {
                        e.preventDefault();
                        if (_this.settings.allowMediaOverlap && _this.outer.hasClass("lg-can-toggle") && _this.outer.hasClass("lg-components-open")) _this.outer.removeClass("lg-components-open"); else _this.closeGallery();
                    }
                    if (_this.lgOpened && _this.galleryItems.length > 1) {
                        if (37 === e.keyCode) {
                            e.preventDefault();
                            _this.goToPrevSlide();
                        }
                        if (39 === e.keyCode) {
                            e.preventDefault();
                            _this.goToNextSlide();
                        }
                    }
                }));
            };
            LightGallery.prototype.arrow = function() {
                var _this = this;
                this.getElementById("lg-prev").on("click.lg", (function() {
                    _this.goToPrevSlide();
                }));
                this.getElementById("lg-next").on("click.lg", (function() {
                    _this.goToNextSlide();
                }));
            };
            LightGallery.prototype.arrowDisable = function(index) {
                if (!this.settings.loop && this.settings.hideControlOnEnd) {
                    var $prev = this.getElementById("lg-prev");
                    var $next = this.getElementById("lg-next");
                    if (index + 1 === this.galleryItems.length) $next.attr("disabled", "disabled").addClass("disabled"); else $next.removeAttr("disabled").removeClass("disabled");
                    if (0 === index) $prev.attr("disabled", "disabled").addClass("disabled"); else $prev.removeAttr("disabled").removeClass("disabled");
                }
            };
            LightGallery.prototype.setTranslate = function($el, xValue, yValue, scaleX, scaleY) {
                if (void 0 === scaleX) scaleX = 1;
                if (void 0 === scaleY) scaleY = 1;
                $el.css("transform", "translate3d(" + xValue + "px, " + yValue + "px, 0px) scale3d(" + scaleX + ", " + scaleY + ", 1)");
            };
            LightGallery.prototype.mousewheel = function() {
                var _this = this;
                var lastCall = 0;
                this.outer.on("wheel.lg", (function(e) {
                    if (!e.deltaY || _this.galleryItems.length < 2) return;
                    e.preventDefault();
                    var now = (new Date).getTime();
                    if (now - lastCall < 1e3) return;
                    lastCall = now;
                    if (e.deltaY > 0) _this.goToNextSlide(); else if (e.deltaY < 0) _this.goToPrevSlide();
                }));
            };
            LightGallery.prototype.isSlideElement = function(target) {
                return target.hasClass("lg-outer") || target.hasClass("lg-item") || target.hasClass("lg-img-wrap");
            };
            LightGallery.prototype.isPosterElement = function(target) {
                var playButton = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                return target.hasClass("lg-video-poster") || target.hasClass("lg-video-play-button") || playButton && playButton.contains(target.get());
            };
            LightGallery.prototype.toggleMaximize = function() {
                var _this = this;
                this.getElementById("lg-maximize").on("click.lg", (function() {
                    _this.$container.toggleClass("lg-inline");
                    _this.refreshOnResize();
                }));
            };
            LightGallery.prototype.invalidateItems = function() {
                for (var index = 0; index < this.items.length; index++) {
                    var element = this.items[index];
                    var $element = $LG(element);
                    $element.off("click.lgcustom-item-" + $element.attr("data-lg-id"));
                }
            };
            LightGallery.prototype.trapFocus = function() {
                var _this = this;
                this.$container.get().focus({
                    preventScroll: true
                });
                $LG(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    if (!_this.lgOpened) return;
                    var isTabPressed = "Tab" === e.key || 9 === e.keyCode;
                    if (!isTabPressed) return;
                    var focusableEls = utils.getFocusableElements(_this.$container.get());
                    var firstFocusableEl = focusableEls[0];
                    var lastFocusableEl = focusableEls[focusableEls.length - 1];
                    if (e.shiftKey) {
                        if (document.activeElement === firstFocusableEl) {
                            lastFocusableEl.focus();
                            e.preventDefault();
                        }
                    } else if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                    }
                }));
            };
            LightGallery.prototype.manageCloseGallery = function() {
                var _this = this;
                if (!this.settings.closable) return;
                var mousedown = false;
                this.getElementById("lg-close").on("click.lg", (function() {
                    _this.closeGallery();
                }));
                if (this.settings.closeOnTap) {
                    this.outer.on("mousedown.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target)) mousedown = true; else mousedown = false;
                    }));
                    this.outer.on("mousemove.lg", (function() {
                        mousedown = false;
                    }));
                    this.outer.on("mouseup.lg", (function(e) {
                        var target = $LG(e.target);
                        if (_this.isSlideElement(target) && mousedown) if (!_this.outer.hasClass("lg-dragging")) _this.closeGallery();
                    }));
                }
            };
            LightGallery.prototype.closeGallery = function(force) {
                var _this = this;
                if (!this.lgOpened || !this.settings.closable && !force) return 0;
                this.LGel.trigger(lGEvents.beforeClose);
                if (this.settings.resetScrollPosition && !this.settings.hideScrollbar) $LG(window).scrollTop(this.prevScrollTop);
                var currentItem = this.items[this.index];
                var transform;
                if (this.zoomFromOrigin && currentItem) {
                    var _a = this.mediaContainerPosition, top_4 = _a.top, bottom = _a.bottom;
                    var _b = this.galleryItems[this.index], __slideVideoInfo = _b.__slideVideoInfo, poster = _b.poster;
                    var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
                    transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
                }
                if (this.zoomFromOrigin && transform) {
                    this.outer.addClass("lg-closing lg-zoom-from-image");
                    this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", transform);
                } else {
                    this.outer.addClass("lg-hide-items");
                    this.outer.removeClass("lg-zoom-from-image");
                }
                this.destroyModules();
                this.lGalleryOn = false;
                this.isDummyImageRemoved = false;
                this.zoomFromOrigin = this.settings.zoomFromOrigin;
                clearTimeout(this.hideBarTimeout);
                this.hideBarTimeout = false;
                $LG("html").removeClass("lg-on");
                this.outer.removeClass("lg-visible lg-components-open");
                this.$backdrop.removeClass("in").css("opacity", 0);
                var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                this.$container.removeClass("lg-show-in");
                setTimeout((function() {
                    if (_this.zoomFromOrigin && transform) _this.outer.removeClass("lg-zoom-from-image");
                    _this.$container.removeClass("lg-show");
                    _this.resetScrollBar();
                    _this.$backdrop.removeAttr("style").css("transition-duration", _this.settings.backdropDuration + "ms");
                    _this.outer.removeClass("lg-closing " + _this.settings.startClass);
                    _this.getSlideItem(_this.index).removeClass("lg-start-end-progress");
                    _this.$inner.empty();
                    if (_this.lgOpened) _this.LGel.trigger(lGEvents.afterClose, {
                        instance: _this
                    });
                    if (_this.$container.get()) _this.$container.get().blur();
                    _this.lgOpened = false;
                }), removeTimeout + 100);
                return removeTimeout + 100;
            };
            LightGallery.prototype.initModules = function() {
                this.plugins.forEach((function(module) {
                    try {
                        module.init();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly initiated");
                    }
                }));
            };
            LightGallery.prototype.destroyModules = function(destroy) {
                this.plugins.forEach((function(module) {
                    try {
                        if (destroy) module.destroy(); else module.closeGallery && module.closeGallery();
                    } catch (err) {
                        console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
                    }
                }));
            };
            LightGallery.prototype.refresh = function(galleryItems) {
                if (!this.settings.dynamic) this.invalidateItems();
                if (galleryItems) this.galleryItems = galleryItems; else this.galleryItems = this.getItems();
                this.updateControls();
                this.openGalleryOnItemClick();
                this.LGel.trigger(lGEvents.updateSlides);
            };
            LightGallery.prototype.updateControls = function() {
                this.addSlideVideoInfo(this.galleryItems);
                this.updateCounterTotal();
                this.manageSingleSlideClassName();
            };
            LightGallery.prototype.destroyGallery = function() {
                this.destroyModules(true);
                if (!this.settings.dynamic) this.invalidateItems();
                $LG(window).off(".lg.global" + this.lgId);
                this.LGel.off(".lg");
                this.$container.remove();
            };
            LightGallery.prototype.destroy = function() {
                var closeTimeout = this.closeGallery(true);
                if (closeTimeout) setTimeout(this.destroyGallery.bind(this), closeTimeout); else this.destroyGallery();
                return closeTimeout;
            };
            return LightGallery;
        }();
        function lightGallery(el, options) {
            return new LightGallery(el, options);
        }
        const lightgallery_es5 = lightGallery;
        const galleries = document.querySelectorAll("[data-gallery]");
        if (galleries.length) {
            let galleyItems = [];
            galleries.forEach((gallery => {
                galleyItems.push({
                    gallery,
                    galleryClass: lightgallery_es5(gallery, {
                        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
                        speed: 500
                    })
                });
            }));
            modules_flsModules.gallery = galleyItems;
        }
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if ("last" === place || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if ("first" === place) {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (void 0 !== parent.children[index]) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if ("min" === this.type) arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if ("first" === a.place || "last" === b.place) return -1;
                        if ("last" === a.place || "first" === b.place) return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if ("first" === a.place || "last" === b.place) return 1;
                            if ("last" === a.place || "first" === b.place) return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        /**!
 * MixItUp v3.3.1
 * A high-performance, dependency-free library for animated filtering, sorting and more
 * Build 94e0fbf6-cd0b-4987-b3c0-14b59b67b8a0
 *
 * @copyright Copyright 2014-2018 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://www.kunkalabs.com/mixitup/
 *
 * @license   Commercial use requires a commercial license.
 *            https://www.kunkalabs.com/mixitup/licenses/
 *
 *            Non-commercial use permitted under same terms as CC BY-NC 3.0 license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
        !function(t) {
            "use strict";
            var e = null, n = null;
            !function() {
                var e = [ "webkit", "moz", "o", "ms" ], n = t.document.createElement("div"), a = -1;
                for (a = 0; a < e.length && !t.requestAnimationFrame; a++) t.requestAnimationFrame = t[e[a] + "RequestAnimationFrame"];
                "undefined" == typeof n.nextElementSibling && Object.defineProperty(t.Element.prototype, "nextElementSibling", {
                    get: function() {
                        for (var t = this.nextSibling; t; ) {
                            if (1 === t.nodeType) return t;
                            t = t.nextSibling;
                        }
                        return null;
                    }
                }), function(t) {
                    t.matches = t.matches || t.machesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector || function(t) {
                        return Array.prototype.indexOf.call(this.parentElement.querySelectorAll(t), this) > -1;
                    };
                }(t.Element.prototype), Object.keys || (Object.keys = function() {
                    var t = Object.prototype.hasOwnProperty, e = !1, n = [], a = -1;
                    return e = !{
                        toString: null
                    }.propertyIsEnumerable("toString"), n = [ "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor" ], 
                    a = n.length, function(i) {
                        var o = [], r = "", s = -1;
                        if ("object" != typeof i && ("function" != typeof i || null === i)) throw new TypeError("Object.keys called on non-object");
                        for (r in i) t.call(i, r) && o.push(r);
                        if (e) for (s = 0; s < a; s++) t.call(i, n[s]) && o.push(n[s]);
                        return o;
                    };
                }()), Array.isArray || (Array.isArray = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t);
                }), "function" != typeof Object.create && (Object.create = function(t) {
                    var e = function() {};
                    return function(n, a) {
                        if (n !== Object(n) && null !== n) throw TypeError("Argument must be an object, or null");
                        e.prototype = n || {};
                        var i = new e;
                        return e.prototype = null, a !== t && Object.defineProperties(i, a), null === n && (i.__proto__ = null), 
                        i;
                    };
                }()), String.prototype.trim || (String.prototype.trim = function() {
                    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t) {
                    var e, n, a, i;
                    if (null === this) throw new TypeError;
                    if (a = Object(this), i = a.length >>> 0, 0 === i) return -1;
                    if (e = 0, arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e)))), 
                    e >= i) return -1;
                    for (n = e >= 0 ? e : Math.max(i - Math.abs(e), 0); n < i; n++) if (n in a && a[n] === t) return n;
                    return -1;
                }), Function.prototype.bind || (Function.prototype.bind = function(t) {
                    var e, n, a, i;
                    if ("function" != typeof this) throw new TypeError;
                    return e = Array.prototype.slice.call(arguments, 1), n = this, a = function() {}, 
                    i = function() {
                        return n.apply(this instanceof a ? this : t, e.concat(Array.prototype.slice.call(arguments)));
                    }, this.prototype && (a.prototype = this.prototype), i.prototype = new a, i;
                }), t.Element.prototype.dispatchEvent || (t.Element.prototype.dispatchEvent = function(t) {
                    try {
                        return this.fireEvent("on" + t.type, t);
                    } catch (e) {}
                });
            }(), e = function(a, i, o) {
                var r = null, s = !1, l = null, c = null, u = null, h = [], d = "", m = [], g = -1;
                if (u = o || t.document, (s = arguments[3]) && (s = "boolean" == typeof s), "string" == typeof a) m = u.querySelectorAll(a); else if (a && "object" == typeof a && n.isElement(a, u)) m = [ a ]; else {
                    if (!a || "object" != typeof a || !a.length) throw new Error(e.messages.errorFactoryInvalidContainer());
                    m = a;
                }
                if (m.length < 1) throw new Error(e.messages.errorFactoryContainerNotFound());
                for (g = 0; (r = m[g]) && (!(g > 0) || s); g++) r.id ? d = r.id : (d = "MixItUp" + n.randomHex(), 
                r.id = d), e.instances[d] instanceof e.Mixer ? (l = e.instances[d], (!i || i && i.debug && !1 !== i.debug.showWarnings) && console.warn(e.messages.warningFactoryPreexistingInstance())) : (l = new e.Mixer, 
                l.attach(r, u, d, i), e.instances[d] = l), c = new e.Facade(l), i && i.debug && i.debug.enable ? h.push(l) : h.push(c);
                return s ? new e.Collection(h) : h[0];
            }, e.use = function(t) {
                e.Base.prototype.callActions.call(e, "beforeUse", arguments), "function" == typeof t && "mixitup-extension" === t.TYPE ? "undefined" == typeof e.extensions[t.NAME] && (t(e), 
                e.extensions[t.NAME] = t) : t.fn && t.fn.jquery && (e.libraries.$ = t), e.Base.prototype.callActions.call(e, "afterUse", arguments);
            }, e.instances = {}, e.extensions = {}, e.libraries = {}, n = {
                hasClass: function(t, e) {
                    return !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"));
                },
                addClass: function(t, e) {
                    this.hasClass(t, e) || (t.className += t.className ? " " + e : e);
                },
                removeClass: function(t, e) {
                    if (this.hasClass(t, e)) {
                        var n = new RegExp("(\\s|^)" + e + "(\\s|$)");
                        t.className = t.className.replace(n, " ").trim();
                    }
                },
                extend: function(t, e, n, a) {
                    var i = [], o = "", r = -1;
                    n = n || !1, a = a || !1;
                    try {
                        if (Array.isArray(e)) for (r = 0; r < e.length; r++) i.push(r); else e && (i = Object.keys(e));
                        for (r = 0; r < i.length; r++) o = i[r], !n || "object" != typeof e[o] || this.isElement(e[o]) ? t[o] = e[o] : Array.isArray(e[o]) ? (t[o] || (t[o] = []), 
                        this.extend(t[o], e[o], n, a)) : (t[o] || (t[o] = {}), this.extend(t[o], e[o], n, a));
                    } catch (s) {
                        if (!a) throw s;
                        this.handleExtendError(s, t);
                    }
                    return t;
                },
                handleExtendError: function(t, n) {
                    var a = /property "?(\w*)"?[,:] object/i, i = null, o = "", r = "", s = "", l = "", c = "", u = -1, f = -1;
                    if (t instanceof TypeError && (i = a.exec(t.message))) {
                        o = i[1];
                        for (c in n) {
                            for (f = 0; f < o.length && o.charAt(f) === c.charAt(f); ) f++;
                            f > u && (u = f, l = c);
                        }
                        throw u > 1 && (s = e.messages.errorConfigInvalidPropertySuggestion({
                            probableMatch: l
                        })), r = e.messages.errorConfigInvalidProperty({
                            erroneous: o,
                            suggestion: s
                        }), new TypeError(r);
                    }
                    throw t;
                },
                template: function(t) {
                    for (var e = /\${([\w]*)}/g, n = {}, a = null; a = e.exec(t); ) n[a[1]] = new RegExp("\\${" + a[1] + "}", "g");
                    return function(e) {
                        var a = "", i = t;
                        e = e || {};
                        for (a in n) i = i.replace(n[a], "undefined" != typeof e[a] ? e[a] : "");
                        return i;
                    };
                },
                on: function(e, n, a, i) {
                    e && (e.addEventListener ? e.addEventListener(n, a, i) : e.attachEvent && (e["e" + n + a] = a, 
                    e[n + a] = function() {
                        e["e" + n + a](t.event);
                    }, e.attachEvent("on" + n, e[n + a])));
                },
                off: function(t, e, n) {
                    t && (t.removeEventListener ? t.removeEventListener(e, n, !1) : t.detachEvent && (t.detachEvent("on" + e, t[e + n]), 
                    t[e + n] = null));
                },
                getCustomEvent: function(e, n, a) {
                    var i = null;
                    return a = a || t.document, "function" == typeof t.CustomEvent ? i = new t.CustomEvent(e, {
                        detail: n,
                        bubbles: !0,
                        cancelable: !0
                    }) : "function" == typeof a.createEvent ? (i = a.createEvent("CustomEvent"), i.initCustomEvent(e, !0, !0, n)) : (i = a.createEventObject(), 
                    i.type = e, i.returnValue = !1, i.cancelBubble = !1, i.detail = n), i;
                },
                getOriginalEvent: function(t) {
                    return t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
                },
                index: function(t, e) {
                    for (var n = 0; null !== (t = t.previousElementSibling); ) e && !t.matches(e) || ++n;
                    return n;
                },
                camelCase: function(t) {
                    return t.toLowerCase().replace(/([_-][a-z])/g, (function(t) {
                        return t.toUpperCase().replace(/[_-]/, "");
                    }));
                },
                pascalCase: function(t) {
                    return (t = this.camelCase(t)).charAt(0).toUpperCase() + t.slice(1);
                },
                dashCase: function(t) {
                    return t.replace(/([A-Z])/g, "-$1").replace(/^-/, "").toLowerCase();
                },
                isElement: function(e, n) {
                    return n = n || t.document, !!(t.HTMLElement && e instanceof t.HTMLElement) || !!(n.defaultView && n.defaultView.HTMLElement && e instanceof n.defaultView.HTMLElement) || null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
                },
                createElement: function(e, n) {
                    var a = null, i = null;
                    for (n = n || t.document, a = n.createDocumentFragment(), i = n.createElement("div"), 
                    i.innerHTML = e.trim(); i.firstChild; ) a.appendChild(i.firstChild);
                    return a;
                },
                removeWhitespace: function(t) {
                    for (var e; t && "#text" === t.nodeName; ) e = t, t = t.previousSibling, e.parentElement && e.parentElement.removeChild(e);
                },
                isEqualArray: function(t, e) {
                    var n = t.length;
                    if (n !== e.length) return !1;
                    for (;n--; ) if (t[n] !== e[n]) return !1;
                    return !0;
                },
                deepEquals: function(t, e) {
                    var n;
                    if ("object" == typeof t && t && "object" == typeof e && e) {
                        if (Object.keys(t).length !== Object.keys(e).length) return !1;
                        for (n in t) if (!e.hasOwnProperty(n) || !this.deepEquals(t[n], e[n])) return !1;
                    } else if (t !== e) return !1;
                    return !0;
                },
                arrayShuffle: function(t) {
                    for (var e = t.slice(), n = e.length, a = n, i = -1, o = []; a--; ) i = ~~(Math.random() * n), 
                    o = e[a], e[a] = e[i], e[i] = o;
                    return e;
                },
                arrayFromList: function(t) {
                    var e, n;
                    try {
                        return Array.prototype.slice.call(t);
                    } catch (a) {
                        for (e = [], n = 0; n < t.length; n++) e.push(t[n]);
                        return e;
                    }
                },
                debounce: function(t, e, n) {
                    var a;
                    return function() {
                        var i = this, o = arguments, r = n && !a, s = null;
                        s = function() {
                            a = null, n || t.apply(i, o);
                        }, clearTimeout(a), a = setTimeout(s, e), r && t.apply(i, o);
                    };
                },
                position: function(t) {
                    for (var e = 0, n = 0, a = t; t; ) e -= t.scrollLeft, n -= t.scrollTop, t === a && (e += t.offsetLeft, 
                    n += t.offsetTop, a = t.offsetParent), t = t.parentElement;
                    return {
                        x: e,
                        y: n
                    };
                },
                getHypotenuse: function(t, e) {
                    var n = t.x - e.x, a = t.y - e.y;
                    return n = n < 0 ? -1 * n : n, a = a < 0 ? -1 * a : a, Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
                },
                getIntersectionRatio: function(t, e) {
                    var n = t.width * t.height, a = -1, i = -1, o = -1;
                    return a = Math.max(0, Math.min(t.left + t.width, e.left + e.width) - Math.max(t.left, e.left)), 
                    i = Math.max(0, Math.min(t.top + t.height, e.top + e.height) - Math.max(t.top, e.top)), 
                    o = i * a, o / n;
                },
                closestParent: function(e, n, a, i) {
                    var o = e.parentNode;
                    if (i = i || t.document, a && e.matches(n)) return e;
                    for (;o && o != i.body; ) {
                        if (o.matches && o.matches(n)) return o;
                        if (!o.parentNode) return null;
                        o = o.parentNode;
                    }
                    return null;
                },
                children: function(e, n, a) {
                    var i = [], o = "";
                    return a = a || t.doc, e && (e.id || (o = "Temp" + this.randomHexKey(), e.id = o), 
                    i = a.querySelectorAll("#" + e.id + " > " + n), o && e.removeAttribute("id")), i;
                },
                clean: function(t) {
                    var e = [], n = -1;
                    for (n = 0; n < t.length; n++) "" !== t[n] && e.push(t[n]);
                    return e;
                },
                defer: function(n) {
                    var a = null, i = null, o = null;
                    return i = new this.Deferred, e.features.has.promises ? i.promise = new Promise((function(t, e) {
                        i.resolve = t, i.reject = e;
                    })) : (o = t.jQuery || n.$) && "function" == typeof o.Deferred ? (a = o.Deferred(), 
                    i.promise = a.promise(), i.resolve = a.resolve, i.reject = a.reject) : t.console && console.warn(e.messages.warningNoPromiseImplementation()), 
                    i;
                },
                all: function(n, a) {
                    var i = null;
                    return e.features.has.promises ? Promise.all(n) : (i = t.jQuery || a.$) && "function" == typeof i.when ? i.when.apply(i, n).done((function() {
                        return arguments;
                    })) : (t.console && console.warn(e.messages.warningNoPromiseImplementation()), []);
                },
                getPrefix: function(t, e, a) {
                    var i = -1, o = "";
                    if (n.dashCase(e) in t.style) return "";
                    for (i = 0; o = a[i]; i++) if (o + e in t.style) return o.toLowerCase();
                    return "unsupported";
                },
                randomHex: function() {
                    return ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6).toUpperCase();
                },
                getDocumentState: function(e) {
                    return e = "object" == typeof e.body ? e : t.document, {
                        scrollTop: t.pageYOffset,
                        scrollLeft: t.pageXOffset,
                        docHeight: e.documentElement.scrollHeight,
                        docWidth: e.documentElement.scrollWidth,
                        viewportHeight: e.documentElement.clientHeight,
                        viewportWidth: e.documentElement.clientWidth
                    };
                },
                bind: function(t, e) {
                    return function() {
                        return e.apply(t, arguments);
                    };
                },
                isVisible: function(e) {
                    var n = null;
                    return !!e.offsetParent || (n = t.getComputedStyle(e), "fixed" === n.position && "hidden" !== n.visibility && "0" !== n.opacity);
                },
                seal: function(t) {
                    "function" == typeof Object.seal && Object.seal(t);
                },
                freeze: function(t) {
                    "function" == typeof Object.freeze && Object.freeze(t);
                },
                compareVersions: function(t, e) {
                    var n = t.split("."), a = e.split("."), i = -1, o = -1, r = -1;
                    for (r = 0; r < n.length; r++) {
                        if (i = parseInt(n[r].replace(/[^\d.]/g, "")), o = parseInt(a[r].replace(/[^\d.]/g, "") || 0), 
                        o < i) return !1;
                        if (o > i) return !0;
                    }
                    return !0;
                },
                Deferred: function() {
                    this.promise = null, this.resolve = null, this.reject = null, this.id = n.randomHex();
                },
                isEmptyObject: function(t) {
                    var e = "";
                    if ("function" == typeof Object.keys) return 0 === Object.keys(t).length;
                    for (e in t) if (t.hasOwnProperty(e)) return !1;
                    return !0;
                },
                getClassname: function(t, e, n) {
                    var a = "";
                    return a += t.block, a.length && (a += t.delineatorElement), a += t["element" + this.pascalCase(e)], 
                    n ? (a.length && (a += t.delineatorModifier), a += n) : a;
                },
                getProperty: function(t, e) {
                    var n = e.split("."), a = null, i = "", o = 0;
                    if (!e) return t;
                    for (a = function(t) {
                        return t ? t[i] : null;
                    }; o < n.length; ) i = n[o], t = a(t), o++;
                    return "undefined" != typeof t ? t : null;
                }
            }, e.h = n, e.Base = function() {}, e.Base.prototype = {
                constructor: e.Base,
                callActions: function(t, e) {
                    var a = this, i = a.constructor.actions[t], o = "";
                    if (i && !n.isEmptyObject(i)) for (o in i) i[o].apply(a, e);
                },
                callFilters: function(t, e, a) {
                    var i = this, o = i.constructor.filters[t], r = e, s = "";
                    if (!o || n.isEmptyObject(o)) return r;
                    a = a || [];
                    for (s in o) a = n.arrayFromList(a), a.unshift(r), r = o[s].apply(i, a);
                    return r;
                }
            }, e.BaseStatic = function() {
                this.actions = {}, this.filters = {}, this.extend = function(t) {
                    n.extend(this.prototype, t);
                }, this.registerAction = function(t, e, n) {
                    (this.actions[t] = this.actions[t] || {})[e] = n;
                }, this.registerFilter = function(t, e, n) {
                    (this.filters[t] = this.filters[t] || {})[e] = n;
                };
            }, e.Features = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.boxSizingPrefix = "", 
                this.transformPrefix = "", this.transitionPrefix = "", this.boxSizingPrefix = "", 
                this.transformProp = "", this.transformRule = "", this.transitionProp = "", this.perspectiveProp = "", 
                this.perspectiveOriginProp = "", this.has = new e.Has, this.canary = null, this.BOX_SIZING_PROP = "boxSizing", 
                this.TRANSITION_PROP = "transition", this.TRANSFORM_PROP = "transform", this.PERSPECTIVE_PROP = "perspective", 
                this.PERSPECTIVE_ORIGIN_PROP = "perspectiveOrigin", this.VENDORS = [ "Webkit", "moz", "O", "ms" ], 
                this.TWEENABLE = [ "opacity", "width", "height", "marginRight", "marginBottom", "x", "y", "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ], 
                this.callActions("afterConstruct");
            }, e.BaseStatic.call(e.Features), e.Features.prototype = Object.create(e.Base.prototype), 
            n.extend(e.Features.prototype, {
                constructor: e.Features,
                init: function() {
                    var t = this;
                    t.callActions("beforeInit", arguments), t.canary = document.createElement("div"), 
                    t.setPrefixes(), t.runTests(), t.callActions("beforeInit", arguments);
                },
                runTests: function() {
                    var e = this;
                    e.callActions("beforeRunTests", arguments), e.has.promises = "function" == typeof t.Promise, 
                    e.has.transitions = "unsupported" !== e.transitionPrefix, e.callActions("afterRunTests", arguments), 
                    n.freeze(e.has);
                },
                setPrefixes: function() {
                    var t = this;
                    t.callActions("beforeSetPrefixes", arguments), t.transitionPrefix = n.getPrefix(t.canary, "Transition", t.VENDORS), 
                    t.transformPrefix = n.getPrefix(t.canary, "Transform", t.VENDORS), t.boxSizingPrefix = n.getPrefix(t.canary, "BoxSizing", t.VENDORS), 
                    t.boxSizingProp = t.boxSizingPrefix ? t.boxSizingPrefix + n.pascalCase(t.BOX_SIZING_PROP) : t.BOX_SIZING_PROP, 
                    t.transitionProp = t.transitionPrefix ? t.transitionPrefix + n.pascalCase(t.TRANSITION_PROP) : t.TRANSITION_PROP, 
                    t.transformProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.TRANSFORM_PROP) : t.TRANSFORM_PROP, 
                    t.transformRule = t.transformPrefix ? "-" + t.transformPrefix + "-" + t.TRANSFORM_PROP : t.TRANSFORM_PROP, 
                    t.perspectiveProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_PROP) : t.PERSPECTIVE_PROP, 
                    t.perspectiveOriginProp = t.transformPrefix ? t.transformPrefix + n.pascalCase(t.PERSPECTIVE_ORIGIN_PROP) : t.PERSPECTIVE_ORIGIN_PROP, 
                    t.callActions("afterSetPrefixes", arguments);
                }
            }), e.Has = function() {
                this.transitions = !1, this.promises = !1, n.seal(this);
            }, e.features = new e.Features, e.features.init(), e.ConfigAnimation = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.effects = "fade scale", 
                this.effectsIn = "", this.effectsOut = "", this.duration = 600, this.easing = "ease", 
                this.applyPerspective = !0, this.perspectiveDistance = "3000px", this.perspectiveOrigin = "50% 50%", 
                this.queue = !0, this.queueLimit = 3, this.animateResizeContainer = !0, this.animateResizeTargets = !1, 
                this.staggerSequence = null, this.reverseOut = !1, this.nudge = !0, this.clampHeight = !0, 
                this.clampWidth = !0, this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigAnimation), e.ConfigAnimation.prototype = Object.create(e.Base.prototype), 
            e.ConfigAnimation.prototype.constructor = e.ConfigAnimation, e.ConfigBehavior = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.liveSort = !1, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.ConfigBehavior), e.ConfigBehavior.prototype = Object.create(e.Base.prototype), 
            e.ConfigBehavior.prototype.constructor = e.ConfigBehavior, e.ConfigCallbacks = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.onMixStart = null, 
                this.onMixBusy = null, this.onMixEnd = null, this.onMixFail = null, this.onMixClick = null, 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigCallbacks), e.ConfigCallbacks.prototype = Object.create(e.Base.prototype), 
            e.ConfigCallbacks.prototype.constructor = e.ConfigCallbacks, e.ConfigControls = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !0, this.live = !1, 
                this.scope = "global", this.toggleLogic = "or", this.toggleDefault = "all", this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.ConfigControls), e.ConfigControls.prototype = Object.create(e.Base.prototype), 
            e.ConfigControls.prototype.constructor = e.ConfigControls, e.ConfigClassNames = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.block = "mixitup", 
                this.elementContainer = "container", this.elementFilter = "control", this.elementSort = "control", 
                this.elementMultimix = "control", this.elementToggle = "control", this.modifierActive = "active", 
                this.modifierDisabled = "disabled", this.modifierFailed = "failed", this.delineatorElement = "-", 
                this.delineatorModifier = "-", this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigClassNames), e.ConfigClassNames.prototype = Object.create(e.Base.prototype), 
            e.ConfigClassNames.prototype.constructor = e.ConfigClassNames, e.ConfigData = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.uidKey = "", this.dirtyCheck = !1, 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigData), e.ConfigData.prototype = Object.create(e.Base.prototype), 
            e.ConfigData.prototype.constructor = e.ConfigData, e.ConfigDebug = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.enable = !1, this.showWarnings = !0, 
                this.fauxAsync = !1, this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigDebug), e.ConfigDebug.prototype = Object.create(e.Base.prototype), 
            e.ConfigDebug.prototype.constructor = e.ConfigDebug, e.ConfigLayout = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.allowNestedTargets = !0, 
                this.containerClassName = "", this.siblingBefore = null, this.siblingAfter = null, 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigLayout), e.ConfigLayout.prototype = Object.create(e.Base.prototype), 
            e.ConfigLayout.prototype.constructor = e.ConfigLayout, e.ConfigLoad = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.filter = "all", this.sort = "default:asc", 
                this.dataset = null, this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigLoad), e.ConfigLoad.prototype = Object.create(e.Base.prototype), 
            e.ConfigLoad.prototype.constructor = e.ConfigLoad, e.ConfigSelectors = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.target = ".mix", this.control = "", 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.ConfigSelectors), e.ConfigSelectors.prototype = Object.create(e.Base.prototype), 
            e.ConfigSelectors.prototype.constructor = e.ConfigSelectors, e.ConfigRender = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.target = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.ConfigRender), e.ConfigRender.prototype = Object.create(e.Base.prototype), 
            e.ConfigRender.prototype.constructor = e.ConfigRender, e.ConfigTemplates = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.ConfigTemplates), e.ConfigTemplates.prototype = Object.create(e.Base.prototype), 
            e.ConfigTemplates.prototype.constructor = e.ConfigTemplates, e.Config = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.animation = new e.ConfigAnimation, 
                this.behavior = new e.ConfigBehavior, this.callbacks = new e.ConfigCallbacks, this.controls = new e.ConfigControls, 
                this.classNames = new e.ConfigClassNames, this.data = new e.ConfigData, this.debug = new e.ConfigDebug, 
                this.layout = new e.ConfigLayout, this.load = new e.ConfigLoad, this.selectors = new e.ConfigSelectors, 
                this.render = new e.ConfigRender, this.templates = new e.ConfigTemplates, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.Config), e.Config.prototype = Object.create(e.Base.prototype), 
            e.Config.prototype.constructor = e.Config, e.MixerDom = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.document = null, this.body = null, 
                this.container = null, this.parent = null, this.targets = [], this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.MixerDom), e.MixerDom.prototype = Object.create(e.Base.prototype), 
            e.MixerDom.prototype.constructor = e.MixerDom, e.UiClassNames = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.base = "", this.active = "", 
                this.disabled = "", this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.UiClassNames), e.UiClassNames.prototype = Object.create(e.Base.prototype), 
            e.UiClassNames.prototype.constructor = e.UiClassNames, e.CommandDataset = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.dataset = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.CommandDataset), e.CommandDataset.prototype = Object.create(e.Base.prototype), 
            e.CommandDataset.prototype.constructor = e.CommandDataset, e.CommandMultimix = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.filter = null, this.sort = null, 
                this.insert = null, this.remove = null, this.changeLayout = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.CommandMultimix), e.CommandMultimix.prototype = Object.create(e.Base.prototype), 
            e.CommandMultimix.prototype.constructor = e.CommandMultimix, e.CommandFilter = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.selector = "", this.collection = null, 
                this.action = "show", this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.CommandFilter), e.CommandFilter.prototype = Object.create(e.Base.prototype), 
            e.CommandFilter.prototype.constructor = e.CommandFilter, e.CommandSort = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.sortString = "", this.attribute = "", 
                this.order = "asc", this.collection = null, this.next = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.CommandSort), e.CommandSort.prototype = Object.create(e.Base.prototype), 
            e.CommandSort.prototype.constructor = e.CommandSort, e.CommandInsert = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.index = 0, this.collection = [], 
                this.position = "before", this.sibling = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.CommandInsert), e.CommandInsert.prototype = Object.create(e.Base.prototype), 
            e.CommandInsert.prototype.constructor = e.CommandInsert, e.CommandRemove = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.targets = [], this.collection = [], 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.CommandRemove), e.CommandRemove.prototype = Object.create(e.Base.prototype), 
            e.CommandRemove.prototype.constructor = e.CommandRemove, e.CommandChangeLayout = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.containerClassName = "", 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.CommandChangeLayout), e.CommandChangeLayout.prototype = Object.create(e.Base.prototype), 
            e.CommandChangeLayout.prototype.constructor = e.CommandChangeLayout, e.ControlDefinition = function(t, a, i, o) {
                e.Base.call(this), this.callActions("beforeConstruct"), this.type = t, this.selector = a, 
                this.live = i || !1, this.parent = o || "", this.callActions("afterConstruct"), 
                n.freeze(this), n.seal(this);
            }, e.BaseStatic.call(e.ControlDefinition), e.ControlDefinition.prototype = Object.create(e.Base.prototype), 
            e.ControlDefinition.prototype.constructor = e.ControlDefinition, e.controlDefinitions = [], 
            e.controlDefinitions.push(new e.ControlDefinition("multimix", "[data-filter][data-sort]")), 
            e.controlDefinitions.push(new e.ControlDefinition("filter", "[data-filter]")), e.controlDefinitions.push(new e.ControlDefinition("sort", "[data-sort]")), 
            e.controlDefinitions.push(new e.ControlDefinition("toggle", "[data-toggle]")), e.Control = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.selector = "", 
                this.bound = [], this.pending = -1, this.type = "", this.status = "inactive", this.filter = "", 
                this.sort = "", this.canDisable = !1, this.handler = null, this.classNames = new e.UiClassNames, 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.Control), e.Control.prototype = Object.create(e.Base.prototype), 
            n.extend(e.Control.prototype, {
                constructor: e.Control,
                init: function(t, n, a) {
                    var i = this;
                    if (this.callActions("beforeInit", arguments), i.el = t, i.type = n, i.selector = a, 
                    i.selector) i.status = "live"; else switch (i.canDisable = "boolean" == typeof i.el.disable, 
                    i.type) {
                      case "filter":
                        i.filter = i.el.getAttribute("data-filter");
                        break;

                      case "toggle":
                        i.filter = i.el.getAttribute("data-toggle");
                        break;

                      case "sort":
                        i.sort = i.el.getAttribute("data-sort");
                        break;

                      case "multimix":
                        i.filter = i.el.getAttribute("data-filter"), i.sort = i.el.getAttribute("data-sort");
                    }
                    i.bindClick(), e.controls.push(i), this.callActions("afterInit", arguments);
                },
                isBound: function(t) {
                    var e = this, n = !1;
                    return this.callActions("beforeIsBound", arguments), n = e.bound.indexOf(t) > -1, 
                    e.callFilters("afterIsBound", n, arguments);
                },
                addBinding: function(t) {
                    var e = this;
                    this.callActions("beforeAddBinding", arguments), e.isBound() || e.bound.push(t), 
                    this.callActions("afterAddBinding", arguments);
                },
                removeBinding: function(t) {
                    var n = this, a = -1;
                    this.callActions("beforeRemoveBinding", arguments), (a = n.bound.indexOf(t)) > -1 && n.bound.splice(a, 1), 
                    n.bound.length < 1 && (n.unbindClick(), a = e.controls.indexOf(n), e.controls.splice(a, 1), 
                    "active" === n.status && n.renderStatus(n.el, "inactive")), this.callActions("afterRemoveBinding", arguments);
                },
                bindClick: function() {
                    var t = this;
                    this.callActions("beforeBindClick", arguments), t.handler = function(e) {
                        t.handleClick(e);
                    }, n.on(t.el, "click", t.handler), this.callActions("afterBindClick", arguments);
                },
                unbindClick: function() {
                    var t = this;
                    this.callActions("beforeUnbindClick", arguments), n.off(t.el, "click", t.handler), 
                    t.handler = null, this.callActions("afterUnbindClick", arguments);
                },
                handleClick: function(t) {
                    var a = this, i = null, o = null, r = !1, s = void 0, l = {}, c = null, u = [], f = -1;
                    if (this.callActions("beforeHandleClick", arguments), this.pending = 0, o = a.bound[0], 
                    i = a.selector ? n.closestParent(t.target, o.config.selectors.control + a.selector, !0, o.dom.document) : a.el, 
                    !i) return void a.callActions("afterHandleClick", arguments);
                    switch (a.type) {
                      case "filter":
                        l.filter = a.filter || i.getAttribute("data-filter");
                        break;

                      case "sort":
                        l.sort = a.sort || i.getAttribute("data-sort");
                        break;

                      case "multimix":
                        l.filter = a.filter || i.getAttribute("data-filter"), l.sort = a.sort || i.getAttribute("data-sort");
                        break;

                      case "toggle":
                        l.filter = a.filter || i.getAttribute("data-toggle"), r = "live" === a.status ? n.hasClass(i, a.classNames.active) : "active" === a.status;
                    }
                    for (f = 0; f < a.bound.length; f++) c = new e.CommandMultimix, n.extend(c, l), 
                    u.push(c);
                    for (u = a.callFilters("commandsHandleClick", u, arguments), a.pending = a.bound.length, 
                    f = 0; o = a.bound[f]; f++) l = u[f], l && (o.lastClicked || (o.lastClicked = i), 
                    e.events.fire("mixClick", o.dom.container, {
                        state: o.state,
                        instance: o,
                        originalEvent: t,
                        control: o.lastClicked
                    }, o.dom.document), "function" == typeof o.config.callbacks.onMixClick && (s = o.config.callbacks.onMixClick.call(o.lastClicked, o.state, t, o), 
                    !1 === s) || ("toggle" === a.type ? r ? o.toggleOff(l.filter) : o.toggleOn(l.filter) : o.multimix(l)));
                    this.callActions("afterHandleClick", arguments);
                },
                update: function(t, n) {
                    var a = this, i = new e.CommandMultimix;
                    a.callActions("beforeUpdate", arguments), a.pending--, a.pending = Math.max(0, a.pending), 
                    a.pending > 0 || ("live" === a.status ? a.updateLive(t, n) : (i.sort = a.sort, i.filter = a.filter, 
                    a.callFilters("actionsUpdate", i, arguments), a.parseStatusChange(a.el, t, i, n)), 
                    a.callActions("afterUpdate", arguments));
                },
                updateLive: function(t, n) {
                    var a = this, i = null, o = null, r = null, s = -1;
                    if (a.callActions("beforeUpdateLive", arguments), a.el) {
                        for (i = a.el.querySelectorAll(a.selector), s = 0; r = i[s]; s++) {
                            switch (o = new e.CommandMultimix, a.type) {
                              case "filter":
                                o.filter = r.getAttribute("data-filter");
                                break;

                              case "sort":
                                o.sort = r.getAttribute("data-sort");
                                break;

                              case "multimix":
                                o.filter = r.getAttribute("data-filter"), o.sort = r.getAttribute("data-sort");
                                break;

                              case "toggle":
                                o.filter = r.getAttribute("data-toggle");
                            }
                            o = a.callFilters("actionsUpdateLive", o, arguments), a.parseStatusChange(r, t, o, n);
                        }
                        a.callActions("afterUpdateLive", arguments);
                    }
                },
                parseStatusChange: function(t, e, n, a) {
                    var i = this, o = "", r = "", s = -1;
                    switch (i.callActions("beforeParseStatusChange", arguments), i.type) {
                      case "filter":
                        e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                        break;

                      case "multimix":
                        e.sort === n.sort && e.filter === n.filter ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                        break;

                      case "sort":
                        e.sort.match(/:asc/g) && (o = e.sort.replace(/:asc/g, "")), e.sort === n.sort || o === n.sort ? i.renderStatus(t, "active") : i.renderStatus(t, "inactive");
                        break;

                      case "toggle":
                        for (a.length < 1 && i.renderStatus(t, "inactive"), e.filter === n.filter && i.renderStatus(t, "active"), 
                        s = 0; s < a.length; s++) {
                            if (r = a[s], r === n.filter) {
                                i.renderStatus(t, "active");
                                break;
                            }
                            i.renderStatus(t, "inactive");
                        }
                    }
                    i.callActions("afterParseStatusChange", arguments);
                },
                renderStatus: function(t, e) {
                    var a = this;
                    switch (a.callActions("beforeRenderStatus", arguments), e) {
                      case "active":
                        n.addClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), a.canDisable && (a.el.disabled = !1);
                        break;

                      case "inactive":
                        n.removeClass(t, a.classNames.active), n.removeClass(t, a.classNames.disabled), 
                        a.canDisable && (a.el.disabled = !1);
                        break;

                      case "disabled":
                        a.canDisable && (a.el.disabled = !0), n.addClass(t, a.classNames.disabled), n.removeClass(t, a.classNames.active);
                    }
                    "live" !== a.status && (a.status = e), a.callActions("afterRenderStatus", arguments);
                }
            }), e.controls = [], e.StyleData = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.x = 0, this.y = 0, 
                this.top = 0, this.right = 0, this.bottom = 0, this.left = 0, this.width = 0, this.height = 0, 
                this.marginRight = 0, this.marginBottom = 0, this.opacity = 0, this.scale = new e.TransformData, 
                this.translateX = new e.TransformData, this.translateY = new e.TransformData, this.translateZ = new e.TransformData, 
                this.rotateX = new e.TransformData, this.rotateY = new e.TransformData, this.rotateZ = new e.TransformData, 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.StyleData), e.StyleData.prototype = Object.create(e.Base.prototype), 
            e.StyleData.prototype.constructor = e.StyleData, e.TransformData = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.value = 0, this.unit = "", 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.TransformData), e.TransformData.prototype = Object.create(e.Base.prototype), 
            e.TransformData.prototype.constructor = e.TransformData, e.TransformDefaults = function() {
                e.StyleData.apply(this), this.callActions("beforeConstruct"), this.scale.value = .01, 
                this.scale.unit = "", this.translateX.value = 20, this.translateX.unit = "px", this.translateY.value = 20, 
                this.translateY.unit = "px", this.translateZ.value = 20, this.translateZ.unit = "px", 
                this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateY.value = 90, this.rotateY.unit = "deg", 
                this.rotateX.value = 90, this.rotateX.unit = "deg", this.rotateZ.value = 180, this.rotateZ.unit = "deg", 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.TransformDefaults), e.TransformDefaults.prototype = Object.create(e.StyleData.prototype), 
            e.TransformDefaults.prototype.constructor = e.TransformDefaults, e.transformDefaults = new e.TransformDefaults, 
            e.EventDetail = function() {
                this.state = null, this.futureState = null, this.instance = null, this.originalEvent = null;
            }, e.Events = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.mixStart = null, this.mixBusy = null, 
                this.mixEnd = null, this.mixFail = null, this.mixClick = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.Events), e.Events.prototype = Object.create(e.Base.prototype), 
            e.Events.prototype.constructor = e.Events, e.Events.prototype.fire = function(t, a, i, o) {
                var r = this, s = null, l = new e.EventDetail;
                if (r.callActions("beforeFire", arguments), "undefined" == typeof r[t]) throw new Error('Event type "' + t + '" not found.');
                l.state = new e.State, n.extend(l.state, i.state), i.futureState && (l.futureState = new e.State, 
                n.extend(l.futureState, i.futureState)), l.instance = i.instance, i.originalEvent && (l.originalEvent = i.originalEvent), 
                s = n.getCustomEvent(t, l, o), r.callFilters("eventFire", s, arguments), a.dispatchEvent(s);
            }, e.events = new e.Events, e.QueueItem = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.args = [], this.instruction = null, 
                this.triggerElement = null, this.deferred = null, this.isToggling = !1, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.QueueItem), e.QueueItem.prototype = Object.create(e.Base.prototype), 
            e.QueueItem.prototype.constructor = e.QueueItem, e.Mixer = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.config = new e.Config, 
                this.id = "", this.isBusy = !1, this.isToggling = !1, this.incPadding = !0, this.controls = [], 
                this.targets = [], this.origOrder = [], this.cache = {}, this.toggleArray = [], 
                this.targetsMoved = 0, this.targetsImmovable = 0, this.targetsBound = 0, this.targetsDone = 0, 
                this.staggerDuration = 0, this.effectsIn = null, this.effectsOut = null, this.transformIn = [], 
                this.transformOut = [], this.queue = [], this.state = null, this.lastOperation = null, 
                this.lastClicked = null, this.userCallback = null, this.userDeferred = null, this.dom = new e.MixerDom, 
                this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.Mixer), e.Mixer.prototype = Object.create(e.Base.prototype), 
            n.extend(e.Mixer.prototype, {
                constructor: e.Mixer,
                attach: function(a, i, o, r) {
                    var s = this, l = null, c = -1;
                    for (s.callActions("beforeAttach", arguments), s.id = o, r && n.extend(s.config, r, !0, !0), 
                    s.sanitizeConfig(), s.cacheDom(a, i), s.config.layout.containerClassName && n.addClass(s.dom.container, s.config.layout.containerClassName), 
                    e.features.has.transitions || (s.config.animation.enable = !1), "undefined" == typeof t.console && (s.config.debug.showWarnings = !1), 
                    s.config.data.uidKey && (s.config.controls.enable = !1), s.indexTargets(), s.state = s.getInitialState(), 
                    c = 0; l = s.lastOperation.toHide[c]; c++) l.hide();
                    s.config.controls.enable && (s.initControls(), s.buildToggleArray(null, s.state), 
                    s.updateControls({
                        filter: s.state.activeFilter,
                        sort: s.state.activeSort
                    })), s.parseEffects(), s.callActions("afterAttach", arguments);
                },
                sanitizeConfig: function() {
                    var t = this;
                    t.callActions("beforeSanitizeConfig", arguments), t.config.controls.scope = t.config.controls.scope.toLowerCase().trim(), 
                    t.config.controls.toggleLogic = t.config.controls.toggleLogic.toLowerCase().trim(), 
                    t.config.controls.toggleDefault = t.config.controls.toggleDefault.toLowerCase().trim(), 
                    t.config.animation.effects = t.config.animation.effects.trim(), t.callActions("afterSanitizeConfig", arguments);
                },
                getInitialState: function() {
                    var t = this, n = new e.State, a = new e.Operation;
                    if (t.callActions("beforeGetInitialState", arguments), n.activeContainerClassName = t.config.layout.containerClassName, 
                    t.config.load.dataset) {
                        if (!t.config.data.uidKey || "string" != typeof t.config.data.uidKey) throw new TypeError(e.messages.errorConfigDataUidKeyNotSet());
                        a.startDataset = a.newDataset = n.activeDataset = t.config.load.dataset.slice(), 
                        a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName, 
                        a.show = t.targets.slice(), n = t.callFilters("stateGetInitialState", n, arguments);
                    } else n.activeFilter = t.parseFilterArgs([ t.config.load.filter ]).command, n.activeSort = t.parseSortArgs([ t.config.load.sort ]).command, 
                    n.totalTargets = t.targets.length, n = t.callFilters("stateGetInitialState", n, arguments), 
                    n.activeSort.collection || n.activeSort.attribute || "random" === n.activeSort.order || "desc" === n.activeSort.order ? (a.newSort = n.activeSort, 
                    t.sortOperation(a), t.printSort(!1, a), t.targets = a.newOrder) : a.startOrder = a.newOrder = t.targets, 
                    a.startFilter = a.newFilter = n.activeFilter, a.startSort = a.newSort = n.activeSort, 
                    a.startContainerClassName = a.newContainerClassName = n.activeContainerClassName, 
                    "all" === a.newFilter.selector ? a.newFilter.selector = t.config.selectors.target : "none" === a.newFilter.selector && (a.newFilter.selector = "");
                    return a = t.callFilters("operationGetInitialState", a, [ n ]), t.lastOperation = a, 
                    a.newFilter && t.filterOperation(a), n = t.buildState(a);
                },
                cacheDom: function(t, e) {
                    var n = this;
                    n.callActions("beforeCacheDom", arguments), n.dom.document = e, n.dom.body = n.dom.document.querySelector("body"), 
                    n.dom.container = t, n.dom.parent = t, n.callActions("afterCacheDom", arguments);
                },
                indexTargets: function() {
                    var t = this, a = null, i = null, o = null, r = -1;
                    if (t.callActions("beforeIndexTargets", arguments), t.dom.targets = t.config.layout.allowNestedTargets ? t.dom.container.querySelectorAll(t.config.selectors.target) : n.children(t.dom.container, t.config.selectors.target, t.dom.document), 
                    t.dom.targets = n.arrayFromList(t.dom.targets), t.targets = [], (o = t.config.load.dataset) && o.length !== t.dom.targets.length) throw new Error(e.messages.errorDatasetPrerenderedMismatch());
                    if (t.dom.targets.length) {
                        for (r = 0; i = t.dom.targets[r]; r++) a = new e.Target, a.init(i, t, o ? o[r] : void 0), 
                        a.isInDom = !0, t.targets.push(a);
                        t.dom.parent = t.dom.targets[0].parentElement === t.dom.container ? t.dom.container : t.dom.targets[0].parentElement;
                    }
                    t.origOrder = t.targets, t.callActions("afterIndexTargets", arguments);
                },
                initControls: function() {
                    var t = this, n = "", a = null, i = null, o = null, r = null, s = null, l = -1, c = -1;
                    switch (t.callActions("beforeInitControls", arguments), t.config.controls.scope) {
                      case "local":
                        o = t.dom.container;
                        break;

                      case "global":
                        o = t.dom.document;
                        break;

                      default:
                        throw new Error(e.messages.errorConfigInvalidControlsScope());
                    }
                    for (l = 0; n = e.controlDefinitions[l]; l++) if (t.config.controls.live || n.live) {
                        if (n.parent) {
                            if (r = t.dom[n.parent], !r || r.length < 0) continue;
                            "number" != typeof r.length && (r = [ r ]);
                        } else r = [ o ];
                        for (c = 0; i = r[c]; c++) s = t.getControl(i, n.type, n.selector), t.controls.push(s);
                    } else for (a = o.querySelectorAll(t.config.selectors.control + n.selector), c = 0; i = a[c]; c++) s = t.getControl(i, n.type, ""), 
                    s && t.controls.push(s);
                    t.callActions("afterInitControls", arguments);
                },
                getControl: function(t, a, i) {
                    var o = this, r = null, s = -1;
                    if (o.callActions("beforeGetControl", arguments), !i) for (s = 0; r = e.controls[s]; s++) {
                        if (r.el === t && r.isBound(o)) return o.callFilters("controlGetControl", null, arguments);
                        if (r.el === t && r.type === a && r.selector === i) return r.addBinding(o), o.callFilters("controlGetControl", r, arguments);
                    }
                    return r = new e.Control, r.init(t, a, i), r.classNames.base = n.getClassname(o.config.classNames, a), 
                    r.classNames.active = n.getClassname(o.config.classNames, a, o.config.classNames.modifierActive), 
                    r.classNames.disabled = n.getClassname(o.config.classNames, a, o.config.classNames.modifierDisabled), 
                    r.addBinding(o), o.callFilters("controlGetControl", r, arguments);
                },
                getToggleSelector: function() {
                    var t = this, e = "or" === t.config.controls.toggleLogic ? ", " : "", a = "";
                    return t.callActions("beforeGetToggleSelector", arguments), t.toggleArray = n.clean(t.toggleArray), 
                    a = t.toggleArray.join(e), "" === a && (a = t.config.controls.toggleDefault), t.callFilters("selectorGetToggleSelector", a, arguments);
                },
                buildToggleArray: function(t, e) {
                    var a = this, i = "";
                    if (a.callActions("beforeBuildToggleArray", arguments), t && t.filter) i = t.filter.selector.replace(/\s/g, ""); else {
                        if (!e) return;
                        i = e.activeFilter.selector.replace(/\s/g, "");
                    }
                    i !== a.config.selectors.target && "all" !== i || (i = ""), "or" === a.config.controls.toggleLogic ? a.toggleArray = i.split(",") : a.toggleArray = a.splitCompoundSelector(i), 
                    a.toggleArray = n.clean(a.toggleArray), a.callActions("afterBuildToggleArray", arguments);
                },
                splitCompoundSelector: function(t) {
                    var e = t.split(/([\.\[])/g), n = [], a = "", i = -1;
                    for ("" === e[0] && e.shift(), i = 0; i < e.length; i++) i % 2 === 0 && (a = ""), 
                    a += e[i], i % 2 !== 0 && n.push(a);
                    return n;
                },
                updateControls: function(t) {
                    var a = this, i = null, o = new e.CommandMultimix, r = -1;
                    for (a.callActions("beforeUpdateControls", arguments), t.filter ? o.filter = t.filter.selector : o.filter = a.state.activeFilter.selector, 
                    t.sort ? o.sort = a.buildSortString(t.sort) : o.sort = a.buildSortString(a.state.activeSort), 
                    o.filter === a.config.selectors.target && (o.filter = "all"), "" === o.filter && (o.filter = "none"), 
                    n.freeze(o), r = 0; i = a.controls[r]; r++) i.update(o, a.toggleArray);
                    a.callActions("afterUpdateControls", arguments);
                },
                buildSortString: function(t) {
                    var e = this, n = "";
                    return n += t.sortString, t.next && (n += " " + e.buildSortString(t.next)), n;
                },
                insertTargets: function(t, a) {
                    var i = this, o = null, r = -1, s = null, l = null, c = null, u = -1;
                    if (i.callActions("beforeInsertTargets", arguments), "undefined" == typeof t.index && (t.index = 0), 
                    o = i.getNextSibling(t.index, t.sibling, t.position), s = i.dom.document.createDocumentFragment(), 
                    r = o ? n.index(o, i.config.selectors.target) : i.targets.length, t.collection) {
                        for (u = 0; c = t.collection[u]; u++) {
                            if (i.dom.targets.indexOf(c) > -1) throw new Error(e.messages.errorInsertPreexistingElement());
                            c.style.display = "none", s.appendChild(c), s.appendChild(i.dom.document.createTextNode(" ")), 
                            n.isElement(c, i.dom.document) && c.matches(i.config.selectors.target) && (l = new e.Target, 
                            l.init(c, i), l.isInDom = !0, i.targets.splice(r, 0, l), r++);
                        }
                        i.dom.parent.insertBefore(s, o);
                    }
                    a.startOrder = i.origOrder = i.targets, i.callActions("afterInsertTargets", arguments);
                },
                getNextSibling: function(t, e, n) {
                    var a = this, i = null;
                    return t = Math.max(t, 0), e && "before" === n ? i = e : e && "after" === n ? i = e.nextElementSibling || null : a.targets.length > 0 && "undefined" != typeof t ? i = t < a.targets.length || !a.targets.length ? a.targets[t].dom.el : a.targets[a.targets.length - 1].dom.el.nextElementSibling : 0 === a.targets.length && a.dom.parent.children.length > 0 && (a.config.layout.siblingAfter ? i = a.config.layout.siblingAfter : a.config.layout.siblingBefore ? i = a.config.layout.siblingBefore.nextElementSibling : a.dom.parent.children[0]), 
                    a.callFilters("elementGetNextSibling", i, arguments);
                },
                filterOperation: function(t) {
                    var e = this, n = !1, a = -1, i = "", o = null, r = -1;
                    for (e.callActions("beforeFilterOperation", arguments), i = t.newFilter.action, 
                    r = 0; o = t.newOrder[r]; r++) n = t.newFilter.collection ? t.newFilter.collection.indexOf(o.dom.el) > -1 : "" !== t.newFilter.selector && o.dom.el.matches(t.newFilter.selector), 
                    e.evaluateHideShow(n, o, i, t);
                    if (t.toRemove.length) for (r = 0; o = t.show[r]; r++) t.toRemove.indexOf(o) > -1 && (t.show.splice(r, 1), 
                    (a = t.toShow.indexOf(o)) > -1 && t.toShow.splice(a, 1), t.toHide.push(o), t.hide.push(o), 
                    r--);
                    t.matching = t.show.slice(), 0 === t.show.length && "" !== t.newFilter.selector && 0 !== e.targets.length && (t.hasFailed = !0), 
                    e.callActions("afterFilterOperation", arguments);
                },
                evaluateHideShow: function(t, e, n, a) {
                    var i = this, o = !1, r = Array.prototype.slice.call(arguments, 1);
                    o = i.callFilters("testResultEvaluateHideShow", t, r), i.callActions("beforeEvaluateHideShow", arguments), 
                    !0 === o && "show" === n || !1 === o && "hide" === n ? (a.show.push(e), !e.isShown && a.toShow.push(e)) : (a.hide.push(e), 
                    e.isShown && a.toHide.push(e)), i.callActions("afterEvaluateHideShow", arguments);
                },
                sortOperation: function(t) {
                    var a = this, i = [], o = null, r = null, s = -1;
                    if (a.callActions("beforeSortOperation", arguments), t.startOrder = a.targets, t.newSort.collection) {
                        for (i = [], s = 0; r = t.newSort.collection[s]; s++) {
                            if (a.dom.targets.indexOf(r) < 0) throw new Error(e.messages.errorSortNonExistentElement());
                            o = new e.Target, o.init(r, a), o.isInDom = !0, i.push(o);
                        }
                        t.newOrder = i;
                    } else "random" === t.newSort.order ? t.newOrder = n.arrayShuffle(t.startOrder) : "" === t.newSort.attribute ? (t.newOrder = a.origOrder.slice(), 
                    "desc" === t.newSort.order && t.newOrder.reverse()) : (t.newOrder = t.startOrder.slice(), 
                    t.newOrder.sort((function(e, n) {
                        return a.compare(e, n, t.newSort);
                    })));
                    n.isEqualArray(t.newOrder, t.startOrder) && (t.willSort = !1), a.callActions("afterSortOperation", arguments);
                },
                compare: function(t, e, n) {
                    var a = this, i = n.order, o = a.getAttributeValue(t, n.attribute), r = a.getAttributeValue(e, n.attribute);
                    return isNaN(1 * o) || isNaN(1 * r) ? (o = o.toLowerCase(), r = r.toLowerCase()) : (o *= 1, 
                    r *= 1), o < r ? "asc" === i ? -1 : 1 : o > r ? "asc" === i ? 1 : -1 : o === r && n.next ? a.compare(t, e, n.next) : 0;
                },
                getAttributeValue: function(t, n) {
                    var a = this, i = "";
                    return i = t.dom.el.getAttribute("data-" + n), null === i && a.config.debug.showWarnings && console.warn(e.messages.warningInconsistentSortingAttributes({
                        attribute: "data-" + n
                    })), a.callFilters("valueGetAttributeValue", i || 0, arguments);
                },
                printSort: function(e, a) {
                    var i = this, o = e ? a.newOrder : a.startOrder, r = e ? a.startOrder : a.newOrder, s = o.length ? o[o.length - 1].dom.el.nextElementSibling : null, l = t.document.createDocumentFragment(), c = null, u = null, f = null, h = -1;
                    for (i.callActions("beforePrintSort", arguments), h = 0; u = o[h]; h++) f = u.dom.el, 
                    "absolute" !== f.style.position && (n.removeWhitespace(f.previousSibling), f.parentElement.removeChild(f));
                    for (c = s ? s.previousSibling : i.dom.parent.lastChild, c && "#text" === c.nodeName && n.removeWhitespace(c), 
                    h = 0; u = r[h]; h++) f = u.dom.el, n.isElement(l.lastChild) && l.appendChild(t.document.createTextNode(" ")), 
                    l.appendChild(f);
                    i.dom.parent.firstChild && i.dom.parent.firstChild !== s && l.insertBefore(t.document.createTextNode(" "), l.childNodes[0]), 
                    s ? (l.appendChild(t.document.createTextNode(" ")), i.dom.parent.insertBefore(l, s)) : i.dom.parent.appendChild(l), 
                    i.callActions("afterPrintSort", arguments);
                },
                parseSortString: function(t, a) {
                    var i = this, o = t.split(" "), r = a, s = [], l = -1;
                    for (l = 0; l < o.length; l++) {
                        switch (s = o[l].split(":"), r.sortString = o[l], r.attribute = n.dashCase(s[0]), 
                        r.order = s[1] || "asc", r.attribute) {
                          case "default":
                            r.attribute = "";
                            break;

                          case "random":
                            r.attribute = "", r.order = "random";
                        }
                        if (!r.attribute || "random" === r.order) break;
                        l < o.length - 1 && (r.next = new e.CommandSort, n.freeze(r), r = r.next);
                    }
                    return i.callFilters("commandsParseSort", a, arguments);
                },
                parseEffects: function() {
                    var t = this, n = "", a = t.config.animation.effectsIn || t.config.animation.effects, i = t.config.animation.effectsOut || t.config.animation.effects;
                    t.callActions("beforeParseEffects", arguments), t.effectsIn = new e.StyleData, t.effectsOut = new e.StyleData, 
                    t.transformIn = [], t.transformOut = [], t.effectsIn.opacity = t.effectsOut.opacity = 1, 
                    t.parseEffect("fade", a, t.effectsIn, t.transformIn), t.parseEffect("fade", i, t.effectsOut, t.transformOut, !0);
                    for (n in e.transformDefaults) e.transformDefaults[n] instanceof e.TransformData && (t.parseEffect(n, a, t.effectsIn, t.transformIn), 
                    t.parseEffect(n, i, t.effectsOut, t.transformOut, !0));
                    t.parseEffect("stagger", a, t.effectsIn, t.transformIn), t.parseEffect("stagger", i, t.effectsOut, t.transformOut, !0), 
                    t.callActions("afterParseEffects", arguments);
                },
                parseEffect: function(t, n, a, i, o) {
                    var r = this, s = /\(([^)]+)\)/, l = -1, c = "", u = [], f = "", h = [ "%", "px", "em", "rem", "vh", "vw", "deg" ], d = "", m = -1;
                    if (r.callActions("beforeParseEffect", arguments), "string" != typeof n) throw new TypeError(e.messages.errorConfigInvalidAnimationEffects());
                    if (n.indexOf(t) < 0) return void ("stagger" === t && (r.staggerDuration = 0));
                    switch (l = n.indexOf(t + "("), l > -1 && (c = n.substring(l), u = s.exec(c), f = u[1]), 
                    t) {
                      case "fade":
                        a.opacity = f ? parseFloat(f) : 0;
                        break;

                      case "stagger":
                        r.staggerDuration = f ? parseFloat(f) : 100;
                        break;

                      default:
                        if (o && r.config.animation.reverseOut && "scale" !== t ? a[t].value = -1 * (f ? parseFloat(f) : e.transformDefaults[t].value) : a[t].value = f ? parseFloat(f) : e.transformDefaults[t].value, 
                        f) {
                            for (m = 0; d = h[m]; m++) if (f.indexOf(d) > -1) {
                                a[t].unit = d;
                                break;
                            }
                        } else a[t].unit = e.transformDefaults[t].unit;
                        i.push(t + "(" + a[t].value + a[t].unit + ")");
                    }
                    r.callActions("afterParseEffect", arguments);
                },
                buildState: function(t) {
                    var n = this, a = new e.State, i = null, o = -1;
                    for (n.callActions("beforeBuildState", arguments), o = 0; i = n.targets[o]; o++) (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.targets.push(i.dom.el);
                    for (o = 0; i = t.matching[o]; o++) a.matching.push(i.dom.el);
                    for (o = 0; i = t.show[o]; o++) a.show.push(i.dom.el);
                    for (o = 0; i = t.hide[o]; o++) (!t.toRemove.length || t.toRemove.indexOf(i) < 0) && a.hide.push(i.dom.el);
                    return a.id = n.id, a.container = n.dom.container, a.activeFilter = t.newFilter, 
                    a.activeSort = t.newSort, a.activeDataset = t.newDataset, a.activeContainerClassName = t.newContainerClassName, 
                    a.hasFailed = t.hasFailed, a.totalTargets = n.targets.length, a.totalShow = t.show.length, 
                    a.totalHide = t.hide.length, a.totalMatching = t.matching.length, a.triggerElement = t.triggerElement, 
                    n.callFilters("stateBuildState", a, arguments);
                },
                goMix: function(a, i) {
                    var o = this, r = null;
                    return o.callActions("beforeGoMix", arguments), o.config.animation.duration && o.config.animation.effects && n.isVisible(o.dom.container) || (a = !1), 
                    i.toShow.length || i.toHide.length || i.willSort || i.willChangeLayout || (a = !1), 
                    i.startState.show.length || i.show.length || (a = !1), e.events.fire("mixStart", o.dom.container, {
                        state: i.startState,
                        futureState: i.newState,
                        instance: o
                    }, o.dom.document), "function" == typeof o.config.callbacks.onMixStart && o.config.callbacks.onMixStart.call(o.dom.container, i.startState, i.newState, o), 
                    n.removeClass(o.dom.container, n.getClassname(o.config.classNames, "container", o.config.classNames.modifierFailed)), 
                    r = o.userDeferred ? o.userDeferred : o.userDeferred = n.defer(e.libraries), o.isBusy = !0, 
                    a && e.features.has.transitions ? (t.pageYOffset !== i.docState.scrollTop && t.scrollTo(i.docState.scrollLeft, i.docState.scrollTop), 
                    o.config.animation.applyPerspective && (o.dom.parent.style[e.features.perspectiveProp] = o.config.animation.perspectiveDistance, 
                    o.dom.parent.style[e.features.perspectiveOriginProp] = o.config.animation.perspectiveOrigin), 
                    o.config.animation.animateResizeContainer && i.startHeight !== i.newHeight && i.viewportDeltaY !== i.startHeight - i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"), 
                    o.config.animation.animateResizeContainer && i.startWidth !== i.newWidth && i.viewportDeltaX !== i.startWidth - i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"), 
                    i.startHeight === i.newHeight && (o.dom.parent.style.height = i.startHeight + "px"), 
                    i.startWidth === i.newWidth && (o.dom.parent.style.width = i.startWidth + "px"), 
                    i.startHeight === i.newHeight && i.startWidth === i.newWidth && (o.dom.parent.style.overflow = "hidden"), 
                    requestAnimationFrame((function() {
                        o.moveTargets(i);
                    })), o.callFilters("promiseGoMix", r.promise, arguments)) : (o.config.debug.fauxAsync ? setTimeout((function() {
                        o.cleanUp(i);
                    }), o.config.animation.duration) : o.cleanUp(i), o.callFilters("promiseGoMix", r.promise, arguments));
                },
                getStartMixData: function(n) {
                    var a = this, i = t.getComputedStyle(a.dom.parent), o = a.dom.parent.getBoundingClientRect(), r = null, s = {}, l = -1, c = i[e.features.boxSizingProp];
                    for (a.incPadding = "border-box" === c, a.callActions("beforeGetStartMixData", arguments), 
                    l = 0; r = n.show[l]; l++) s = r.getPosData(), n.showPosData[l] = {
                        startPosData: s
                    };
                    for (l = 0; r = n.toHide[l]; l++) s = r.getPosData(), n.toHidePosData[l] = {
                        startPosData: s
                    };
                    n.startX = o.left, n.startY = o.top, n.startHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom), 
                    n.startWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight), 
                    a.callActions("afterGetStartMixData", arguments);
                },
                setInter: function(t) {
                    var e = this, a = null, i = -1;
                    for (e.callActions("beforeSetInter", arguments), e.config.animation.clampHeight && (e.dom.parent.style.height = t.startHeight + "px", 
                    e.dom.parent.style.overflow = "hidden"), e.config.animation.clampWidth && (e.dom.parent.style.width = t.startWidth + "px", 
                    e.dom.parent.style.overflow = "hidden"), i = 0; a = t.toShow[i]; i++) a.show();
                    t.willChangeLayout && (n.removeClass(e.dom.container, t.startContainerClassName), 
                    n.addClass(e.dom.container, t.newContainerClassName)), e.callActions("afterSetInter", arguments);
                },
                getInterMixData: function(t) {
                    var e = this, n = null, a = -1;
                    for (e.callActions("beforeGetInterMixData", arguments), a = 0; n = t.show[a]; a++) t.showPosData[a].interPosData = n.getPosData();
                    for (a = 0; n = t.toHide[a]; a++) t.toHidePosData[a].interPosData = n.getPosData();
                    e.callActions("afterGetInterMixData", arguments);
                },
                setFinal: function(t) {
                    var e = this, n = null, a = -1;
                    for (e.callActions("beforeSetFinal", arguments), t.willSort && e.printSort(!1, t), 
                    a = 0; n = t.toHide[a]; a++) n.hide();
                    e.callActions("afterSetFinal", arguments);
                },
                getFinalMixData: function(e) {
                    var a = this, i = null, o = null, r = null, s = -1;
                    for (a.callActions("beforeGetFinalMixData", arguments), s = 0; r = e.show[s]; s++) e.showPosData[s].finalPosData = r.getPosData();
                    for (s = 0; r = e.toHide[s]; s++) e.toHidePosData[s].finalPosData = r.getPosData();
                    for ((a.config.animation.clampHeight || a.config.animation.clampWidth) && (a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = ""), 
                    a.incPadding || (i = t.getComputedStyle(a.dom.parent)), o = a.dom.parent.getBoundingClientRect(), 
                    e.newX = o.left, e.newY = o.top, e.newHeight = a.incPadding ? o.height : o.height - parseFloat(i.paddingTop) - parseFloat(i.paddingBottom) - parseFloat(i.borderTop) - parseFloat(i.borderBottom), 
                    e.newWidth = a.incPadding ? o.width : o.width - parseFloat(i.paddingLeft) - parseFloat(i.paddingRight) - parseFloat(i.borderLeft) - parseFloat(i.borderRight), 
                    e.viewportDeltaX = e.docState.viewportWidth - this.dom.document.documentElement.clientWidth, 
                    e.viewportDeltaY = e.docState.viewportHeight - this.dom.document.documentElement.clientHeight, 
                    e.willSort && a.printSort(!0, e), s = 0; r = e.toShow[s]; s++) r.hide();
                    for (s = 0; r = e.toHide[s]; s++) r.show();
                    e.willChangeLayout && (n.removeClass(a.dom.container, e.newContainerClassName), 
                    n.addClass(a.dom.container, a.config.layout.containerClassName)), a.callActions("afterGetFinalMixData", arguments);
                },
                getTweenData: function(t) {
                    var n = this, a = null, i = null, o = Object.getOwnPropertyNames(n.effectsIn), r = "", s = null, l = -1, c = -1, u = -1, f = -1;
                    for (n.callActions("beforeGetTweenData", arguments), u = 0; a = t.show[u]; u++) for (i = t.showPosData[u], 
                    i.posIn = new e.StyleData, i.posOut = new e.StyleData, i.tweenData = new e.StyleData, 
                    a.isShown ? (i.posIn.x = i.startPosData.x - i.interPosData.x, i.posIn.y = i.startPosData.y - i.interPosData.y) : i.posIn.x = i.posIn.y = 0, 
                    i.posOut.x = i.finalPosData.x - i.interPosData.x, i.posOut.y = i.finalPosData.y - i.interPosData.y, 
                    i.posIn.opacity = a.isShown ? 1 : n.effectsIn.opacity, i.posOut.opacity = 1, i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity, 
                    a.isShown || n.config.animation.nudge || (i.posIn.x = i.posOut.x, i.posIn.y = i.posOut.y), 
                    i.tweenData.x = i.posOut.x - i.posIn.x, i.tweenData.y = i.posOut.y - i.posIn.y, 
                    n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width, 
                    i.posIn.height = i.startPosData.height, l = (i.startPosData.width || i.finalPosData.width) - i.interPosData.width, 
                    i.posIn.marginRight = i.startPosData.marginRight - l, c = (i.startPosData.height || i.finalPosData.height) - i.interPosData.height, 
                    i.posIn.marginBottom = i.startPosData.marginBottom - c, i.posOut.width = i.finalPosData.width, 
                    i.posOut.height = i.finalPosData.height, l = (i.finalPosData.width || i.startPosData.width) - i.interPosData.width, 
                    i.posOut.marginRight = i.finalPosData.marginRight - l, c = (i.finalPosData.height || i.startPosData.height) - i.interPosData.height, 
                    i.posOut.marginBottom = i.finalPosData.marginBottom - c, i.tweenData.width = i.posOut.width - i.posIn.width, 
                    i.tweenData.height = i.posOut.height - i.posIn.height, i.tweenData.marginRight = i.posOut.marginRight - i.posIn.marginRight, 
                    i.tweenData.marginBottom = i.posOut.marginBottom - i.posIn.marginBottom), f = 0; r = o[f]; f++) s = n.effectsIn[r], 
                    s instanceof e.TransformData && s.value && (i.posIn[r].value = s.value, i.posOut[r].value = 0, 
                    i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value, i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
                    for (u = 0; a = t.toHide[u]; u++) for (i = t.toHidePosData[u], i.posIn = new e.StyleData, 
                    i.posOut = new e.StyleData, i.tweenData = new e.StyleData, i.posIn.x = a.isShown ? i.startPosData.x - i.interPosData.x : 0, 
                    i.posIn.y = a.isShown ? i.startPosData.y - i.interPosData.y : 0, i.posOut.x = n.config.animation.nudge ? 0 : i.posIn.x, 
                    i.posOut.y = n.config.animation.nudge ? 0 : i.posIn.y, i.tweenData.x = i.posOut.x - i.posIn.x, 
                    i.tweenData.y = i.posOut.y - i.posIn.y, n.config.animation.animateResizeTargets && (i.posIn.width = i.startPosData.width, 
                    i.posIn.height = i.startPosData.height, l = i.startPosData.width - i.interPosData.width, 
                    i.posIn.marginRight = i.startPosData.marginRight - l, c = i.startPosData.height - i.interPosData.height, 
                    i.posIn.marginBottom = i.startPosData.marginBottom - c), i.posIn.opacity = 1, i.posOut.opacity = n.effectsOut.opacity, 
                    i.tweenData.opacity = i.posOut.opacity - i.posIn.opacity, f = 0; r = o[f]; f++) s = n.effectsOut[r], 
                    s instanceof e.TransformData && s.value && (i.posIn[r].value = 0, i.posOut[r].value = s.value, 
                    i.tweenData[r].value = i.posOut[r].value - i.posIn[r].value, i.posIn[r].unit = i.posOut[r].unit = i.tweenData[r].unit = s.unit);
                    n.callActions("afterGetTweenData", arguments);
                },
                moveTargets: function(t) {
                    var a = this, i = null, o = null, r = null, s = "", l = !1, c = -1, u = -1, f = a.checkProgress.bind(a);
                    for (a.callActions("beforeMoveTargets", arguments), u = 0; i = t.show[u]; u++) o = new e.IMoveData, 
                    r = t.showPosData[u], s = i.isShown ? "none" : "show", l = a.willTransition(s, t.hasEffect, r.posIn, r.posOut), 
                    l && c++, i.show(), o.posIn = r.posIn, o.posOut = r.posOut, o.statusChange = s, 
                    o.staggerIndex = c, o.operation = t, o.callback = l ? f : null, i.move(o);
                    for (u = 0; i = t.toHide[u]; u++) r = t.toHidePosData[u], o = new e.IMoveData, s = "hide", 
                    l = a.willTransition(s, r.posIn, r.posOut), o.posIn = r.posIn, o.posOut = r.posOut, 
                    o.statusChange = s, o.staggerIndex = u, o.operation = t, o.callback = l ? f : null, 
                    i.move(o);
                    a.config.animation.animateResizeContainer && (a.dom.parent.style[e.features.transitionProp] = "height " + a.config.animation.duration + "ms ease, width " + a.config.animation.duration + "ms ease ", 
                    requestAnimationFrame((function() {
                        t.startHeight !== t.newHeight && t.viewportDeltaY !== t.startHeight - t.newHeight && (a.dom.parent.style.height = t.newHeight + "px"), 
                        t.startWidth !== t.newWidth && t.viewportDeltaX !== t.startWidth - t.newWidth && (a.dom.parent.style.width = t.newWidth + "px");
                    }))), t.willChangeLayout && (n.removeClass(a.dom.container, a.config.layout.ContainerClassName), 
                    n.addClass(a.dom.container, t.newContainerClassName)), a.callActions("afterMoveTargets", arguments);
                },
                hasEffect: function() {
                    var t = this, e = [ "scale", "translateX", "translateY", "translateZ", "rotateX", "rotateY", "rotateZ" ], n = "", a = null, i = !1, o = -1, r = -1;
                    if (1 !== t.effectsIn.opacity) return t.callFilters("resultHasEffect", !0, arguments);
                    for (r = 0; n = e[r]; r++) if (a = t.effectsIn[n], o = "undefined" !== a.value ? a.value : a, 
                    0 !== o) {
                        i = !0;
                        break;
                    }
                    return t.callFilters("resultHasEffect", i, arguments);
                },
                willTransition: function(t, e, a, i) {
                    var o = this, r = !1;
                    return r = !!n.isVisible(o.dom.container) && (!!("none" !== t && e || a.x !== i.x || a.y !== i.y) || !!o.config.animation.animateResizeTargets && (a.width !== i.width || a.height !== i.height || a.marginRight !== i.marginRight || a.marginTop !== i.marginTop)), 
                    o.callFilters("resultWillTransition", r, arguments);
                },
                checkProgress: function(t) {
                    var e = this;
                    e.targetsDone++, e.targetsBound === e.targetsDone && e.cleanUp(t);
                },
                cleanUp: function(t) {
                    var a = this, i = null, o = null, r = null, s = null, l = -1;
                    for (a.callActions("beforeCleanUp", arguments), a.targetsMoved = a.targetsImmovable = a.targetsBound = a.targetsDone = 0, 
                    l = 0; i = t.show[l]; l++) i.cleanUp(), i.show();
                    for (l = 0; i = t.toHide[l]; l++) i.cleanUp(), i.hide();
                    if (t.willSort && a.printSort(!1, t), a.dom.parent.style[e.features.transitionProp] = a.dom.parent.style.height = a.dom.parent.style.width = a.dom.parent.style.overflow = a.dom.parent.style[e.features.perspectiveProp] = a.dom.parent.style[e.features.perspectiveOriginProp] = "", 
                    t.willChangeLayout && (n.removeClass(a.dom.container, t.startContainerClassName), 
                    n.addClass(a.dom.container, t.newContainerClassName)), t.toRemove.length) {
                        for (l = 0; i = a.targets[l]; l++) t.toRemove.indexOf(i) > -1 && ((o = i.dom.el.previousSibling) && "#text" === o.nodeName && (r = i.dom.el.nextSibling) && "#text" === r.nodeName && n.removeWhitespace(o), 
                        t.willSort || a.dom.parent.removeChild(i.dom.el), a.targets.splice(l, 1), i.isInDom = !1, 
                        l--);
                        a.origOrder = a.targets;
                    }
                    t.willSort && (a.targets = t.newOrder), a.state = t.newState, a.lastOperation = t, 
                    a.dom.targets = a.state.targets, e.events.fire("mixEnd", a.dom.container, {
                        state: a.state,
                        instance: a
                    }, a.dom.document), "function" == typeof a.config.callbacks.onMixEnd && a.config.callbacks.onMixEnd.call(a.dom.container, a.state, a), 
                    t.hasFailed && (e.events.fire("mixFail", a.dom.container, {
                        state: a.state,
                        instance: a
                    }, a.dom.document), "function" == typeof a.config.callbacks.onMixFail && a.config.callbacks.onMixFail.call(a.dom.container, a.state, a), 
                    n.addClass(a.dom.container, n.getClassname(a.config.classNames, "container", a.config.classNames.modifierFailed))), 
                    "function" == typeof a.userCallback && a.userCallback.call(a.dom.container, a.state, a), 
                    "function" == typeof a.userDeferred.resolve && a.userDeferred.resolve(a.state), 
                    a.userCallback = null, a.userDeferred = null, a.lastClicked = null, a.isToggling = !1, 
                    a.isBusy = !1, a.queue.length && (a.callActions("beforeReadQueueCleanUp", arguments), 
                    s = a.queue.shift(), a.userDeferred = s.deferred, a.isToggling = s.isToggling, a.lastClicked = s.triggerElement, 
                    s.instruction.command instanceof e.CommandMultimix ? a.multimix.apply(a, s.args) : a.dataset.apply(a, s.args)), 
                    a.callActions("afterCleanUp", arguments);
                },
                parseMultimixArgs: function(t) {
                    var a = this, i = new e.UserInstruction, o = null, r = -1;
                    for (i.animate = a.config.animation.enable, i.command = new e.CommandMultimix, r = 0; r < t.length; r++) o = t[r], 
                    null !== o && ("object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
                    return !i.command.insert || i.command.insert instanceof e.CommandInsert || (i.command.insert = a.parseInsertArgs([ i.command.insert ]).command), 
                    !i.command.remove || i.command.remove instanceof e.CommandRemove || (i.command.remove = a.parseRemoveArgs([ i.command.remove ]).command), 
                    !i.command.filter || i.command.filter instanceof e.CommandFilter || (i.command.filter = a.parseFilterArgs([ i.command.filter ]).command), 
                    !i.command.sort || i.command.sort instanceof e.CommandSort || (i.command.sort = a.parseSortArgs([ i.command.sort ]).command), 
                    !i.command.changeLayout || i.command.changeLayout instanceof e.CommandChangeLayout || (i.command.changeLayout = a.parseChangeLayoutArgs([ i.command.changeLayout ]).command), 
                    i = a.callFilters("instructionParseMultimixArgs", i, arguments), n.freeze(i), i;
                },
                parseFilterArgs: function(t) {
                    var a = this, i = new e.UserInstruction, o = null, r = -1;
                    for (i.animate = a.config.animation.enable, i.command = new e.CommandFilter, r = 0; r < t.length; r++) o = t[r], 
                    "string" == typeof o ? i.command.selector = o : null === o ? i.command.collection = [] : "object" == typeof o && n.isElement(o, a.dom.document) ? i.command.collection = [ o ] : "object" == typeof o && "undefined" != typeof o.length ? i.command.collection = n.arrayFromList(o) : "object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o);
                    if (i.command.selector && i.command.collection) throw new Error(e.messages.errorFilterInvalidArguments());
                    return i = a.callFilters("instructionParseFilterArgs", i, arguments), n.freeze(i), 
                    i;
                },
                parseSortArgs: function(t) {
                    var a = this, i = new e.UserInstruction, o = null, r = "", s = -1;
                    for (i.animate = a.config.animation.enable, i.command = new e.CommandSort, s = 0; s < t.length; s++) if (o = t[s], 
                    null !== o) switch (typeof o) {
                      case "string":
                        r = o;
                        break;

                      case "object":
                        o.length && (i.command.collection = n.arrayFromList(o));
                        break;

                      case "boolean":
                        i.animate = o;
                        break;

                      case "function":
                        i.callback = o;
                    }
                    return r && (i.command = a.parseSortString(r, i.command)), i = a.callFilters("instructionParseSortArgs", i, arguments), 
                    n.freeze(i), i;
                },
                parseInsertArgs: function(t) {
                    var a = this, i = new e.UserInstruction, o = null, r = -1;
                    for (i.animate = a.config.animation.enable, i.command = new e.CommandInsert, r = 0; r < t.length; r++) o = t[r], 
                    null !== o && ("number" == typeof o ? i.command.index = o : "string" == typeof o && [ "before", "after" ].indexOf(o) > -1 ? i.command.position = o : "string" == typeof o ? i.command.collection = n.arrayFromList(n.createElement(o).childNodes) : "object" == typeof o && n.isElement(o, a.dom.document) ? i.command.collection.length ? i.command.sibling = o : i.command.collection = [ o ] : "object" == typeof o && o.length ? i.command.collection.length ? i.command.sibling = o[0] : i.command.collection = o : "object" == typeof o && o.childNodes && o.childNodes.length ? i.command.collection.length ? i.command.sibling = o.childNodes[0] : i.command.collection = n.arrayFromList(o.childNodes) : "object" == typeof o ? n.extend(i.command, o) : "boolean" == typeof o ? i.animate = o : "function" == typeof o && (i.callback = o));
                    if (i.command.index && i.command.sibling) throw new Error(e.messages.errorInsertInvalidArguments());
                    return !i.command.collection.length && a.config.debug.showWarnings && console.warn(e.messages.warningInsertNoElements()), 
                    i = a.callFilters("instructionParseInsertArgs", i, arguments), n.freeze(i), i;
                },
                parseRemoveArgs: function(t) {
                    var a = this, i = new e.UserInstruction, o = null, r = null, s = -1;
                    for (i.animate = a.config.animation.enable, i.command = new e.CommandRemove, s = 0; s < t.length; s++) if (r = t[s], 
                    null !== r) switch (typeof r) {
                      case "number":
                        a.targets[r] && (i.command.targets[0] = a.targets[r]);
                        break;

                      case "string":
                        i.command.collection = n.arrayFromList(a.dom.parent.querySelectorAll(r));
                        break;

                      case "object":
                        r && r.length ? i.command.collection = r : n.isElement(r, a.dom.document) ? i.command.collection = [ r ] : n.extend(i.command, r);
                        break;

                      case "boolean":
                        i.animate = r;
                        break;

                      case "function":
                        i.callback = r;
                    }
                    if (i.command.collection.length) for (s = 0; o = a.targets[s]; s++) i.command.collection.indexOf(o.dom.el) > -1 && i.command.targets.push(o);
                    return !i.command.targets.length && a.config.debug.showWarnings && console.warn(e.messages.warningRemoveNoElements()), 
                    n.freeze(i), i;
                },
                parseDatasetArgs: function(t) {
                    var a = this, i = new e.UserInstruction, o = null, r = -1;
                    for (i.animate = a.config.animation.enable, i.command = new e.CommandDataset, r = 0; r < t.length; r++) if (o = t[r], 
                    null !== o) switch (typeof o) {
                      case "object":
                        Array.isArray(o) || "number" == typeof o.length ? i.command.dataset = o : n.extend(i.command, o);
                        break;

                      case "boolean":
                        i.animate = o;
                        break;

                      case "function":
                        i.callback = o;
                    }
                    return n.freeze(i), i;
                },
                parseChangeLayoutArgs: function(t) {
                    var a = this, i = new e.UserInstruction, o = null, r = -1;
                    for (i.animate = a.config.animation.enable, i.command = new e.CommandChangeLayout, 
                    r = 0; r < t.length; r++) if (o = t[r], null !== o) switch (typeof o) {
                      case "string":
                        i.command.containerClassName = o;
                        break;

                      case "object":
                        n.extend(i.command, o);
                        break;

                      case "boolean":
                        i.animate = o;
                        break;

                      case "function":
                        i.callback = o;
                    }
                    return n.freeze(i), i;
                },
                queueMix: function(t) {
                    var a = this, i = null, o = "";
                    return a.callActions("beforeQueueMix", arguments), i = n.defer(e.libraries), a.config.animation.queue && a.queue.length < a.config.animation.queueLimit ? (t.deferred = i, 
                    a.queue.push(t), a.config.controls.enable && (a.isToggling ? (a.buildToggleArray(t.instruction.command), 
                    o = a.getToggleSelector(), a.updateControls({
                        filter: {
                            selector: o
                        }
                    })) : a.updateControls(t.instruction.command))) : (a.config.debug.showWarnings && console.warn(e.messages.warningMultimixInstanceQueueFull()), 
                    i.resolve(a.state), e.events.fire("mixBusy", a.dom.container, {
                        state: a.state,
                        instance: a
                    }, a.dom.document), "function" == typeof a.config.callbacks.onMixBusy && a.config.callbacks.onMixBusy.call(a.dom.container, a.state, a)), 
                    a.callFilters("promiseQueueMix", i.promise, arguments);
                },
                getDataOperation: function(t) {
                    var a = this, i = new e.Operation, o = [];
                    if (i = a.callFilters("operationUnmappedGetDataOperation", i, arguments), a.dom.targets.length && !(o = a.state.activeDataset || []).length) throw new Error(e.messages.errorDatasetNotSet());
                    return i.id = n.randomHex(), i.startState = a.state, i.startDataset = o, i.newDataset = t.slice(), 
                    a.diffDatasets(i), i.startOrder = a.targets, i.newOrder = i.show, a.config.animation.enable && (a.getStartMixData(i), 
                    a.setInter(i), i.docState = n.getDocumentState(a.dom.document), a.getInterMixData(i), 
                    a.setFinal(i), a.getFinalMixData(i), a.parseEffects(), i.hasEffect = a.hasEffect(), 
                    a.getTweenData(i)), a.targets = i.show.slice(), i.newState = a.buildState(i), Array.prototype.push.apply(a.targets, i.toRemove), 
                    i = a.callFilters("operationMappedGetDataOperation", i, arguments);
                },
                diffDatasets: function(t) {
                    var a = this, i = [], o = [], r = [], s = null, l = null, c = null, u = null, f = null, h = {}, d = "", m = -1;
                    for (a.callActions("beforeDiffDatasets", arguments), m = 0; s = t.newDataset[m]; m++) {
                        if ("undefined" == typeof (d = s[a.config.data.uidKey]) || d.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                            uidKey: a.config.data.uidKey
                        }));
                        if (h[d]) throw new Error(e.messages.errorDatasetDuplicateUid({
                            uid: d
                        }));
                        h[d] = !0, (l = a.cache[d]) instanceof e.Target ? (a.config.data.dirtyCheck && !n.deepEquals(s, l.data) && (c = l.render(s), 
                        l.data = s, c !== l.dom.el && (l.isInDom && (l.unbindEvents(), a.dom.parent.replaceChild(c, l.dom.el)), 
                        l.isShown || (c.style.display = "none"), l.dom.el = c, l.isInDom && l.bindEvents())), 
                        c = l.dom.el) : (l = new e.Target, l.init(null, a, s), l.hide()), l.isInDom ? (f = l.dom.el.nextElementSibling, 
                        o.push(d), u && (u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")), 
                        a.insertDatasetFrag(u, l.dom.el, r), u = null)) : (u || (u = a.dom.document.createDocumentFragment()), 
                        u.lastElementChild && u.appendChild(a.dom.document.createTextNode(" ")), u.appendChild(l.dom.el), 
                        l.isInDom = !0, l.unbindEvents(), l.bindEvents(), l.hide(), t.toShow.push(l), r.push(l)), 
                        t.show.push(l);
                    }
                    for (u && (f = f || a.config.layout.siblingAfter, f && u.appendChild(a.dom.document.createTextNode(" ")), 
                    a.insertDatasetFrag(u, f, r)), m = 0; s = t.startDataset[m]; m++) d = s[a.config.data.uidKey], 
                    l = a.cache[d], t.show.indexOf(l) < 0 ? (t.hide.push(l), t.toHide.push(l), t.toRemove.push(l)) : i.push(d);
                    n.isEqualArray(i, o) || (t.willSort = !0), a.callActions("afterDiffDatasets", arguments);
                },
                insertDatasetFrag: function(t, e, a) {
                    var i = this, o = e ? n.arrayFromList(i.dom.parent.children).indexOf(e) : i.targets.length;
                    for (i.dom.parent.insertBefore(t, e); a.length; ) i.targets.splice(o, 0, a.shift()), 
                    o++;
                },
                willSort: function(t, e) {
                    var n = this, a = !1;
                    return a = !!(n.config.behavior.liveSort || "random" === t.order || t.attribute !== e.attribute || t.order !== e.order || t.collection !== e.collection || null === t.next && e.next || t.next && null === e.next) || !(!t.next || !e.next) && n.willSort(t.next, e.next), 
                    n.callFilters("resultWillSort", a, arguments);
                },
                show: function() {
                    var t = this;
                    return t.filter("all");
                },
                hide: function() {
                    var t = this;
                    return t.filter("none");
                },
                isMixing: function() {
                    var t = this;
                    return t.isBusy;
                },
                filter: function() {
                    var t = this, e = t.parseFilterArgs(arguments);
                    return t.multimix({
                        filter: e.command
                    }, e.animate, e.callback);
                },
                toggleOn: function() {
                    var t = this, e = t.parseFilterArgs(arguments), n = e.command.selector, a = "";
                    return t.isToggling = !0, t.toggleArray.indexOf(n) < 0 && t.toggleArray.push(n), 
                    a = t.getToggleSelector(), t.multimix({
                        filter: a
                    }, e.animate, e.callback);
                },
                toggleOff: function() {
                    var t = this, e = t.parseFilterArgs(arguments), n = e.command.selector, a = t.toggleArray.indexOf(n), i = "";
                    return t.isToggling = !0, a > -1 && t.toggleArray.splice(a, 1), i = t.getToggleSelector(), 
                    t.multimix({
                        filter: i
                    }, e.animate, e.callback);
                },
                sort: function() {
                    var t = this, e = t.parseSortArgs(arguments);
                    return t.multimix({
                        sort: e.command
                    }, e.animate, e.callback);
                },
                changeLayout: function() {
                    var t = this, e = t.parseChangeLayoutArgs(arguments);
                    return t.multimix({
                        changeLayout: e.command
                    }, e.animate, e.callback);
                },
                dataset: function() {
                    var t = this, n = t.parseDatasetArgs(arguments), a = null, i = null, o = !1;
                    return t.callActions("beforeDataset", arguments), t.isBusy ? (i = new e.QueueItem, 
                    i.args = arguments, i.instruction = n, t.queueMix(i)) : (n.callback && (t.userCallback = n.callback), 
                    o = n.animate ^ t.config.animation.enable ? n.animate : t.config.animation.enable, 
                    a = t.getDataOperation(n.command.dataset), t.goMix(o, a));
                },
                multimix: function() {
                    var t = this, n = null, a = !1, i = null, o = t.parseMultimixArgs(arguments);
                    return t.callActions("beforeMultimix", arguments), t.isBusy ? (i = new e.QueueItem, 
                    i.args = arguments, i.instruction = o, i.triggerElement = t.lastClicked, i.isToggling = t.isToggling, 
                    t.queueMix(i)) : (n = t.getOperation(o.command), t.config.controls.enable && (o.command.filter && !t.isToggling && (t.toggleArray.length = 0, 
                    t.buildToggleArray(n.command)), t.queue.length < 1 && t.updateControls(n.command)), 
                    o.callback && (t.userCallback = o.callback), a = o.animate ^ t.config.animation.enable ? o.animate : t.config.animation.enable, 
                    t.callFilters("operationMultimix", n, arguments), t.goMix(a, n));
                },
                getOperation: function(t) {
                    var a = this, i = t.sort, o = t.filter, r = t.changeLayout, s = t.remove, l = t.insert, c = new e.Operation;
                    return c = a.callFilters("operationUnmappedGetOperation", c, arguments), c.id = n.randomHex(), 
                    c.command = t, c.startState = a.state, c.triggerElement = a.lastClicked, a.isBusy ? (a.config.debug.showWarnings && console.warn(e.messages.warningGetOperationInstanceBusy()), 
                    null) : (l && a.insertTargets(l, c), s && (c.toRemove = s.targets), c.startSort = c.newSort = c.startState.activeSort, 
                    c.startOrder = c.newOrder = a.targets, i && (c.startSort = c.startState.activeSort, 
                    c.newSort = i, c.willSort = a.willSort(i, c.startState.activeSort), c.willSort && a.sortOperation(c)), 
                    c.startFilter = c.startState.activeFilter, o ? c.newFilter = o : c.newFilter = n.extend(new e.CommandFilter, c.startFilter), 
                    "all" === c.newFilter.selector ? c.newFilter.selector = a.config.selectors.target : "none" === c.newFilter.selector && (c.newFilter.selector = ""), 
                    a.filterOperation(c), c.startContainerClassName = c.startState.activeContainerClassName, 
                    r ? (c.newContainerClassName = r.containerClassName, c.newContainerClassName !== c.startContainerClassName && (c.willChangeLayout = !0)) : c.newContainerClassName = c.startContainerClassName, 
                    a.config.animation.enable && (a.getStartMixData(c), a.setInter(c), c.docState = n.getDocumentState(a.dom.document), 
                    a.getInterMixData(c), a.setFinal(c), a.getFinalMixData(c), a.parseEffects(), c.hasEffect = a.hasEffect(), 
                    a.getTweenData(c)), c.willSort && (a.targets = c.newOrder), c.newState = a.buildState(c), 
                    a.callFilters("operationMappedGetOperation", c, arguments));
                },
                tween: function(t, e) {
                    var n = null, a = null, i = -1, o = -1;
                    for (e = Math.min(e, 1), e = Math.max(e, 0), o = 0; n = t.show[o]; o++) a = t.showPosData[o], 
                    n.applyTween(a, e);
                    for (o = 0; n = t.hide[o]; o++) n.isShown && n.hide(), (i = t.toHide.indexOf(n)) > -1 && (a = t.toHidePosData[i], 
                    n.isShown || n.show(), n.applyTween(a, e));
                },
                insert: function() {
                    var t = this, e = t.parseInsertArgs(arguments);
                    return t.multimix({
                        insert: e.command
                    }, e.animate, e.callback);
                },
                insertBefore: function() {
                    var t = this, e = t.parseInsertArgs(arguments);
                    return t.insert(e.command.collection, "before", e.command.sibling, e.animate, e.callback);
                },
                insertAfter: function() {
                    var t = this, e = t.parseInsertArgs(arguments);
                    return t.insert(e.command.collection, "after", e.command.sibling, e.animate, e.callback);
                },
                prepend: function() {
                    var t = this, e = t.parseInsertArgs(arguments);
                    return t.insert(0, e.command.collection, e.animate, e.callback);
                },
                append: function() {
                    var t = this, e = t.parseInsertArgs(arguments);
                    return t.insert(t.state.totalTargets, e.command.collection, e.animate, e.callback);
                },
                remove: function() {
                    var t = this, e = t.parseRemoveArgs(arguments);
                    return t.multimix({
                        remove: e.command
                    }, e.animate, e.callback);
                },
                getConfig: function(t) {
                    var e = this, a = null;
                    return a = t ? n.getProperty(e.config, t) : e.config, e.callFilters("valueGetConfig", a, arguments);
                },
                configure: function(t) {
                    var e = this;
                    e.callActions("beforeConfigure", arguments), n.extend(e.config, t, !0, !0), e.callActions("afterConfigure", arguments);
                },
                getState: function() {
                    var t = this, a = null;
                    return a = new e.State, n.extend(a, t.state), n.freeze(a), t.callFilters("stateGetState", a, arguments);
                },
                forceRefresh: function() {
                    var t = this;
                    t.indexTargets();
                },
                forceRender: function() {
                    var t = this, e = null, n = null, a = "";
                    for (a in t.cache) e = t.cache[a], n = e.render(e.data), n !== e.dom.el && (e.isInDom && (e.unbindEvents(), 
                    t.dom.parent.replaceChild(n, e.dom.el)), e.isShown || (n.style.display = "none"), 
                    e.dom.el = n, e.isInDom && e.bindEvents());
                    t.state = t.buildState(t.lastOperation);
                },
                destroy: function(t) {
                    var n = this, a = null, i = null, o = 0;
                    for (n.callActions("beforeDestroy", arguments), o = 0; a = n.controls[o]; o++) a.removeBinding(n);
                    for (o = 0; i = n.targets[o]; o++) t && i.show(), i.unbindEvents();
                    n.dom.container.id.match(/^MixItUp/) && n.dom.container.removeAttribute("id"), delete e.instances[n.id], 
                    n.callActions("afterDestroy", arguments);
                }
            }), e.IMoveData = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.posIn = null, this.posOut = null, 
                this.operation = null, this.callback = null, this.statusChange = "", this.duration = -1, 
                this.staggerIndex = -1, this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.IMoveData), e.IMoveData.prototype = Object.create(e.Base.prototype), 
            e.IMoveData.prototype.constructor = e.IMoveData, e.TargetDom = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.el = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.TargetDom), e.TargetDom.prototype = Object.create(e.Base.prototype), 
            e.TargetDom.prototype.constructor = e.TargetDom, e.Target = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.sortString = "", 
                this.mixer = null, this.callback = null, this.isShown = !1, this.isBound = !1, this.isExcluded = !1, 
                this.isInDom = !1, this.handler = null, this.operation = null, this.data = null, 
                this.dom = new e.TargetDom, this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.Target), e.Target.prototype = Object.create(e.Base.prototype), 
            n.extend(e.Target.prototype, {
                constructor: e.Target,
                init: function(t, n, a) {
                    var i = this, o = "";
                    if (i.callActions("beforeInit", arguments), i.mixer = n, t || (t = i.render(a)), 
                    i.cacheDom(t), i.bindEvents(), "none" !== i.dom.el.style.display && (i.isShown = !0), 
                    a && n.config.data.uidKey) {
                        if ("undefined" == typeof (o = a[n.config.data.uidKey]) || o.toString().length < 1) throw new TypeError(e.messages.errorDatasetInvalidUidKey({
                            uidKey: n.config.data.uidKey
                        }));
                        i.id = o, i.data = a, n.cache[o] = i;
                    }
                    i.callActions("afterInit", arguments);
                },
                render: function(t) {
                    var a = this, i = null, o = null, r = null, s = "";
                    if (a.callActions("beforeRender", arguments), i = a.callFilters("renderRender", a.mixer.config.render.target, arguments), 
                    "function" != typeof i) throw new TypeError(e.messages.errorDatasetRendererNotSet());
                    return s = i(t), s && "object" == typeof s && n.isElement(s) ? o = s : "string" == typeof s && (r = document.createElement("div"), 
                    r.innerHTML = s, o = r.firstElementChild), a.callFilters("elRender", o, arguments);
                },
                cacheDom: function(t) {
                    var e = this;
                    e.callActions("beforeCacheDom", arguments), e.dom.el = t, e.callActions("afterCacheDom", arguments);
                },
                getSortString: function(t) {
                    var e = this, n = e.dom.el.getAttribute("data-" + t) || "";
                    e.callActions("beforeGetSortString", arguments), n = isNaN(1 * n) ? n.toLowerCase() : 1 * n, 
                    e.sortString = n, e.callActions("afterGetSortString", arguments);
                },
                show: function() {
                    var t = this;
                    t.callActions("beforeShow", arguments), t.isShown || (t.dom.el.style.display = "", 
                    t.isShown = !0), t.callActions("afterShow", arguments);
                },
                hide: function() {
                    var t = this;
                    t.callActions("beforeHide", arguments), t.isShown && (t.dom.el.style.display = "none", 
                    t.isShown = !1), t.callActions("afterHide", arguments);
                },
                move: function(t) {
                    var e = this;
                    e.callActions("beforeMove", arguments), e.isExcluded || e.mixer.targetsMoved++, 
                    e.applyStylesIn(t), requestAnimationFrame((function() {
                        e.applyStylesOut(t);
                    })), e.callActions("afterMove", arguments);
                },
                applyTween: function(t, n) {
                    var a = this, i = "", o = null, r = t.posIn, s = [], l = new e.StyleData, c = -1;
                    for (a.callActions("beforeApplyTween", arguments), l.x = r.x, l.y = r.y, 0 === n ? a.hide() : a.isShown || a.show(), 
                    c = 0; i = e.features.TWEENABLE[c]; c++) if (o = t.tweenData[i], "x" === i) {
                        if (!o) continue;
                        l.x = r.x + o * n;
                    } else if ("y" === i) {
                        if (!o) continue;
                        l.y = r.y + o * n;
                    } else if (o instanceof e.TransformData) {
                        if (!o.value) continue;
                        l[i].value = r[i].value + o.value * n, l[i].unit = o.unit, s.push(i + "(" + l[i].value + o.unit + ")");
                    } else {
                        if (!o) continue;
                        l[i] = r[i] + o * n, a.dom.el.style[i] = l[i];
                    }
                    (l.x || l.y) && s.unshift("translate(" + l.x + "px, " + l.y + "px)"), s.length && (a.dom.el.style[e.features.transformProp] = s.join(" ")), 
                    a.callActions("afterApplyTween", arguments);
                },
                applyStylesIn: function(t) {
                    var n = this, a = t.posIn, i = 1 !== n.mixer.effectsIn.opacity, o = [];
                    n.callActions("beforeApplyStylesIn", arguments), o.push("translate(" + a.x + "px, " + a.y + "px)"), 
                    n.mixer.config.animation.animateResizeTargets && ("show" !== t.statusChange && (n.dom.el.style.width = a.width + "px", 
                    n.dom.el.style.height = a.height + "px"), n.dom.el.style.marginRight = a.marginRight + "px", 
                    n.dom.el.style.marginBottom = a.marginBottom + "px"), i && (n.dom.el.style.opacity = a.opacity), 
                    "show" === t.statusChange && (o = o.concat(n.mixer.transformIn)), n.dom.el.style[e.features.transformProp] = o.join(" "), 
                    n.callActions("afterApplyStylesIn", arguments);
                },
                applyStylesOut: function(t) {
                    var n = this, a = [], i = [], o = n.mixer.config.animation.animateResizeTargets, r = "undefined" != typeof n.mixer.effectsIn.opacity;
                    if (n.callActions("beforeApplyStylesOut", arguments), a.push(n.writeTransitionRule(e.features.transformRule, t.staggerIndex)), 
                    "none" !== t.statusChange && a.push(n.writeTransitionRule("opacity", t.staggerIndex, t.duration)), 
                    o && (a.push(n.writeTransitionRule("width", t.staggerIndex, t.duration)), a.push(n.writeTransitionRule("height", t.staggerIndex, t.duration)), 
                    a.push(n.writeTransitionRule("margin", t.staggerIndex, t.duration))), !t.callback) return n.mixer.targetsImmovable++, 
                    void (n.mixer.targetsMoved === n.mixer.targetsImmovable && n.mixer.cleanUp(t.operation));
                    switch (n.operation = t.operation, n.callback = t.callback, !n.isExcluded && n.mixer.targetsBound++, 
                    n.isBound = !0, n.applyTransition(a), o && t.posOut.width > 0 && t.posOut.height > 0 && (n.dom.el.style.width = t.posOut.width + "px", 
                    n.dom.el.style.height = t.posOut.height + "px", n.dom.el.style.marginRight = t.posOut.marginRight + "px", 
                    n.dom.el.style.marginBottom = t.posOut.marginBottom + "px"), n.mixer.config.animation.nudge || "hide" !== t.statusChange || i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), 
                    t.statusChange) {
                      case "hide":
                        r && (n.dom.el.style.opacity = n.mixer.effectsOut.opacity), i = i.concat(n.mixer.transformOut);
                        break;

                      case "show":
                        r && (n.dom.el.style.opacity = 1);
                    }
                    (n.mixer.config.animation.nudge || !n.mixer.config.animation.nudge && "hide" !== t.statusChange) && i.push("translate(" + t.posOut.x + "px, " + t.posOut.y + "px)"), 
                    n.dom.el.style[e.features.transformProp] = i.join(" "), n.callActions("afterApplyStylesOut", arguments);
                },
                writeTransitionRule: function(t, e, n) {
                    var a = this, i = a.getDelay(e), o = "";
                    return o = t + " " + (n > 0 ? n : a.mixer.config.animation.duration) + "ms " + i + "ms " + ("opacity" === t ? "linear" : a.mixer.config.animation.easing), 
                    a.callFilters("ruleWriteTransitionRule", o, arguments);
                },
                getDelay: function(t) {
                    var e = this, n = -1;
                    return "function" == typeof e.mixer.config.animation.staggerSequence && (t = e.mixer.config.animation.staggerSequence.call(e, t, e.state)), 
                    n = e.mixer.staggerDuration ? t * e.mixer.staggerDuration : 0, e.callFilters("delayGetDelay", n, arguments);
                },
                applyTransition: function(t) {
                    var n = this, a = t.join(", ");
                    n.callActions("beforeApplyTransition", arguments), n.dom.el.style[e.features.transitionProp] = a, 
                    n.callActions("afterApplyTransition", arguments);
                },
                handleTransitionEnd: function(t) {
                    var e = this, n = t.propertyName, a = e.mixer.config.animation.animateResizeTargets;
                    e.callActions("beforeHandleTransitionEnd", arguments), e.isBound && t.target.matches(e.mixer.config.selectors.target) && (n.indexOf("transform") > -1 || n.indexOf("opacity") > -1 || a && n.indexOf("height") > -1 || a && n.indexOf("width") > -1 || a && n.indexOf("margin") > -1) && (e.callback.call(e, e.operation), 
                    e.isBound = !1, e.callback = null, e.operation = null), e.callActions("afterHandleTransitionEnd", arguments);
                },
                eventBus: function(t) {
                    var e = this;
                    switch (e.callActions("beforeEventBus", arguments), t.type) {
                      case "webkitTransitionEnd":
                      case "transitionend":
                        e.handleTransitionEnd(t);
                    }
                    e.callActions("afterEventBus", arguments);
                },
                unbindEvents: function() {
                    var t = this;
                    t.callActions("beforeUnbindEvents", arguments), n.off(t.dom.el, "webkitTransitionEnd", t.handler), 
                    n.off(t.dom.el, "transitionend", t.handler), t.callActions("afterUnbindEvents", arguments);
                },
                bindEvents: function() {
                    var t = this, a = "";
                    t.callActions("beforeBindEvents", arguments), a = "webkit" === e.features.transitionPrefix ? "webkitTransitionEnd" : "transitionend", 
                    t.handler = function(e) {
                        return t.eventBus(e);
                    }, n.on(t.dom.el, a, t.handler), t.callActions("afterBindEvents", arguments);
                },
                getPosData: function(n) {
                    var a = this, i = {}, o = null, r = new e.StyleData;
                    return a.callActions("beforeGetPosData", arguments), r.x = a.dom.el.offsetLeft, 
                    r.y = a.dom.el.offsetTop, (a.mixer.config.animation.animateResizeTargets || n) && (o = a.dom.el.getBoundingClientRect(), 
                    r.top = o.top, r.right = o.right, r.bottom = o.bottom, r.left = o.left, r.width = o.width, 
                    r.height = o.height), a.mixer.config.animation.animateResizeTargets && (i = t.getComputedStyle(a.dom.el), 
                    r.marginBottom = parseFloat(i.marginBottom), r.marginRight = parseFloat(i.marginRight)), 
                    a.callFilters("posDataGetPosData", r, arguments);
                },
                cleanUp: function() {
                    var t = this;
                    t.callActions("beforeCleanUp", arguments), t.dom.el.style[e.features.transformProp] = "", 
                    t.dom.el.style[e.features.transitionProp] = "", t.dom.el.style.opacity = "", t.mixer.config.animation.animateResizeTargets && (t.dom.el.style.width = "", 
                    t.dom.el.style.height = "", t.dom.el.style.marginRight = "", t.dom.el.style.marginBottom = ""), 
                    t.callActions("afterCleanUp", arguments);
                }
            }), e.Collection = function(t) {
                var e = null, a = -1;
                for (this.callActions("beforeConstruct"), a = 0; e = t[a]; a++) this[a] = e;
                this.length = t.length, this.callActions("afterConstruct"), n.freeze(this);
            }, e.BaseStatic.call(e.Collection), e.Collection.prototype = Object.create(e.Base.prototype), 
            n.extend(e.Collection.prototype, {
                constructor: e.Collection,
                mixitup: function(t) {
                    var a = this, i = null, o = Array.prototype.slice.call(arguments), r = [], s = -1;
                    for (this.callActions("beforeMixitup"), o.shift(), s = 0; i = a[s]; s++) r.push(i[t].apply(i, o));
                    return a.callFilters("promiseMixitup", n.all(r, e.libraries), arguments);
                }
            }), e.Operation = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.args = [], 
                this.command = null, this.showPosData = [], this.toHidePosData = [], this.startState = null, 
                this.newState = null, this.docState = null, this.willSort = !1, this.willChangeLayout = !1, 
                this.hasEffect = !1, this.hasFailed = !1, this.triggerElement = null, this.show = [], 
                this.hide = [], this.matching = [], this.toShow = [], this.toHide = [], this.toMove = [], 
                this.toRemove = [], this.startOrder = [], this.newOrder = [], this.startSort = null, 
                this.newSort = null, this.startFilter = null, this.newFilter = null, this.startDataset = null, 
                this.newDataset = null, this.viewportDeltaX = 0, this.viewportDeltaY = 0, this.startX = 0, 
                this.startY = 0, this.startHeight = 0, this.startWidth = 0, this.newX = 0, this.newY = 0, 
                this.newHeight = 0, this.newWidth = 0, this.startContainerClassName = "", this.startDisplay = "", 
                this.newContainerClassName = "", this.newDisplay = "", this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.Operation), e.Operation.prototype = Object.create(e.Base.prototype), 
            e.Operation.prototype.constructor = e.Operation, e.State = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.id = "", this.activeFilter = null, 
                this.activeSort = null, this.activeContainerClassName = "", this.container = null, 
                this.targets = [], this.hide = [], this.show = [], this.matching = [], this.totalTargets = -1, 
                this.totalShow = -1, this.totalHide = -1, this.totalMatching = -1, this.hasFailed = !1, 
                this.triggerElement = null, this.activeDataset = null, this.callActions("afterConstruct"), 
                n.seal(this);
            }, e.BaseStatic.call(e.State), e.State.prototype = Object.create(e.Base.prototype), 
            e.State.prototype.constructor = e.State, e.UserInstruction = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.command = {}, this.animate = !1, 
                this.callback = null, this.callActions("afterConstruct"), n.seal(this);
            }, e.BaseStatic.call(e.UserInstruction), e.UserInstruction.prototype = Object.create(e.Base.prototype), 
            e.UserInstruction.prototype.constructor = e.UserInstruction, e.Messages = function() {
                e.Base.call(this), this.callActions("beforeConstruct"), this.ERROR_FACTORY_INVALID_CONTAINER = "[MixItUp] An invalid selector or element reference was passed to the mixitup factory function", 
                this.ERROR_FACTORY_CONTAINER_NOT_FOUND = "[MixItUp] The provided selector yielded no container element", 
                this.ERROR_CONFIG_INVALID_ANIMATION_EFFECTS = "[MixItUp] Invalid value for `animation.effects`", 
                this.ERROR_CONFIG_INVALID_CONTROLS_SCOPE = "[MixItUp] Invalid value for `controls.scope`", 
                this.ERROR_CONFIG_INVALID_PROPERTY = '[MixitUp] Invalid configuration object property "${erroneous}"${suggestion}', 
                this.ERROR_CONFIG_INVALID_PROPERTY_SUGGESTION = '. Did you mean "${probableMatch}"?', 
                this.ERROR_CONFIG_DATA_UID_KEY_NOT_SET = "[MixItUp] To use the dataset API, a UID key must be specified using `data.uidKey`", 
                this.ERROR_DATASET_INVALID_UID_KEY = '[MixItUp] The specified UID key "${uidKey}" is not present on one or more dataset items', 
                this.ERROR_DATASET_DUPLICATE_UID = '[MixItUp] The UID "${uid}" was found on two or more dataset items. UIDs must be unique.', 
                this.ERROR_INSERT_INVALID_ARGUMENTS = "[MixItUp] Please provider either an index or a sibling and position to insert, not both", 
                this.ERROR_INSERT_PREEXISTING_ELEMENT = "[MixItUp] An element to be inserted already exists in the container", 
                this.ERROR_FILTER_INVALID_ARGUMENTS = "[MixItUp] Please provide either a selector or collection `.filter()`, not both", 
                this.ERROR_DATASET_NOT_SET = "[MixItUp] To use the dataset API with pre-rendered targets, a starting dataset must be set using `load.dataset`", 
                this.ERROR_DATASET_PRERENDERED_MISMATCH = "[MixItUp] `load.dataset` does not match pre-rendered targets", 
                this.ERROR_DATASET_RENDERER_NOT_SET = "[MixItUp] To insert an element via the dataset API, a target renderer function must be provided to `render.target`", 
                this.ERROR_SORT_NON_EXISTENT_ELEMENT = "[MixItUp] An element to be sorted does not already exist in the container", 
                this.WARNING_FACTORY_PREEXISTING_INSTANCE = "[MixItUp] WARNING: This element already has an active MixItUp instance. The provided configuration object will be ignored. If you wish to perform additional methods on this instance, please create a reference.", 
                this.WARNING_INSERT_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.insert()`", 
                this.WARNING_REMOVE_NO_ELEMENTS = "[MixItUp] WARNING: No valid elements were passed to `.remove()`", 
                this.WARNING_MULTIMIX_INSTANCE_QUEUE_FULL = "[MixItUp] WARNING: An operation was requested but the MixItUp instance was busy. The operation was rejected because the queue is full or queuing is disabled.", 
                this.WARNING_GET_OPERATION_INSTANCE_BUSY = "[MixItUp] WARNING: Operations can be be created while the MixItUp instance is busy.", 
                this.WARNING_NO_PROMISE_IMPLEMENTATION = "[MixItUp] WARNING: No Promise implementations could be found. If you wish to use promises with MixItUp please install an ES6 Promise polyfill.", 
                this.WARNING_INCONSISTENT_SORTING_ATTRIBUTES = '[MixItUp] WARNING: The requested sorting data attribute "${attribute}" was not present on one or more target elements which may product unexpected sort output', 
                this.callActions("afterConstruct"), this.compileTemplates(), n.seal(this);
            }, e.BaseStatic.call(e.Messages), e.Messages.prototype = Object.create(e.Base.prototype), 
            e.Messages.prototype.constructor = e.Messages, e.Messages.prototype.compileTemplates = function() {
                var t = "", e = "";
                for (t in this) "string" == typeof (e = this[t]) && (this[n.camelCase(t)] = n.template(e));
            }, e.messages = new e.Messages, e.Facade = function(t) {
                e.Base.call(this), this.callActions("beforeConstruct", arguments), this.configure = t.configure.bind(t), 
                this.show = t.show.bind(t), this.hide = t.hide.bind(t), this.filter = t.filter.bind(t), 
                this.toggleOn = t.toggleOn.bind(t), this.toggleOff = t.toggleOff.bind(t), this.sort = t.sort.bind(t), 
                this.changeLayout = t.changeLayout.bind(t), this.multimix = t.multimix.bind(t), 
                this.dataset = t.dataset.bind(t), this.tween = t.tween.bind(t), this.insert = t.insert.bind(t), 
                this.insertBefore = t.insertBefore.bind(t), this.insertAfter = t.insertAfter.bind(t), 
                this.prepend = t.prepend.bind(t), this.append = t.append.bind(t), this.remove = t.remove.bind(t), 
                this.destroy = t.destroy.bind(t), this.forceRefresh = t.forceRefresh.bind(t), this.forceRender = t.forceRender.bind(t), 
                this.isMixing = t.isMixing.bind(t), this.getOperation = t.getOperation.bind(t), 
                this.getConfig = t.getConfig.bind(t), this.getState = t.getState.bind(t), this.callActions("afterConstruct", arguments), 
                n.freeze(this), n.seal(this);
            }, e.BaseStatic.call(e.Facade), e.Facade.prototype = Object.create(e.Base.prototype), 
            e.Facade.prototype.constructor = e.Facade, "object" == typeof exports && "object" == typeof module ? module.exports = e : "function" == typeof define && define.amd ? define((function() {
                return e;
            })) : "undefined" != typeof t.mixitup && "function" == typeof t.mixitup || (t.mixitup = e), 
            e.BaseStatic.call(e.constructor), e.NAME = "mixitup", e.CORE_VERSION = "3.3.1";
        }(window);
        let vh = .01 * window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        const toTopButton = document.querySelector(".to-top");
        toTopButton.addEventListener("click", (function(e) {
            e.preventDefault();
            scrollToTop(0, 500);
        }));
        function scrollToTop(target, duration) {
            if (duration <= 0) return;
            let difference = target - document.documentElement.scrollTop;
            let speed = difference / duration * 10;
            setTimeout((function() {
                document.documentElement.scrollTop += speed;
                if (document.documentElement.scrollTop == target) return;
                scrollToTop(target, duration - 10);
            }), 10);
        }
        window.addEventListener("scroll", showButton);
        function showButton() {
            let windowY = window.scrollY;
            let showPosition = 500;
            if (windowY >= showPosition) toTopButton.classList.add("show-to-top"); else toTopButton.classList.remove("show-to-top");
        }
        let filterContainer = document.querySelector(".filter-work__content");
        let mixer;
        if (filterContainer) mixer = mixitup(filterContainer);
        window["FLS"] = true;
        isWebp();
        menuInit();
        spollers();
        tabs();
        pageNavigation();
        headerScroll();
    })();
})();