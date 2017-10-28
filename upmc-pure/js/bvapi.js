"version:507";
"build:0.39.0";
"date:Tue Aug 15 2017 16:06:49 GMT+0000 (UTC)";
! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    e.exports = n(1)
}, function(e, t, n) {
    "use strict";
    var r = n(2);
    try {
        n(5)
    } catch (i) {
        console.error("Failed to load module `bvapiproduction`", i.message)
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = r.namespace("BV")
}, function(e, t, n) {
    function r(e) {
        this.name = e
    }
    var i = n(4);
    r.prototype.registerProperty = function(e, t) {
        if (this.hasOwnProperty(e)) throw new Error("Cannot register " + e + " because a property with that name already exists on window." + this.name);
        return this[e] = t, this
    }, e.exports = {
        namespace: function(e) {
            if (void 0 === i[e]) i[e] = new r(e);
            else {
                if ("object" != typeof i[e]) throw new Error("Namespace " + e + " cannot be created. A non-object variable is already assigned to window." + e);
                if (!(i[e] instanceof r)) {
                    r.call(i[e], e);
                    for (var t in r.prototype) i[e][t] = r.prototype[t]
                }
            }
            return i[e]
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = (new Function("return this;"))()
}, function(e, t, n) {
    var r, i;
    r = [n(6), n(2)], i = function(e, t) {
        var r = e.console,
            i = r && (r.time || r.timeline || !1);
        try {
            if (t._bvapijs) return;
            e._bvaq = e._bvaq || [];
            var s = n(7);
            t = n(8)(t), i && i.call(r, "scout-to-render");
            var o = t._internal;
            o.startTime = new Date, o.apiCache = {}, o.fbVersion = s.version, o.uiVersion = s.firebirdVersion, o.protocol = "https:" === e.location.protocol ? "https:" : "http:", o.preview = !1, o.asEvented = n(9), o.ie = n(11), o._ = n(13), t._bvapijs = !0, t._options = s.rawFirebirdConfig;
            var u = t.performance = n(14);
            u.mark("scoutStart"), t = n(19)(t), t.options = n(20)(t), n(23)(t);
            var a = t.extensions = n(30);
            t._internal.extensionsRegistry = n(31)(a), t._internal.preload = n(32)(t), e.$BV = n(33)(t, e.$BV), n(34), u.mark("scoutEnd")
        } catch (f) {
            r && r.log && (r.log(f.stack), r.log("Error loading Bazaarvoice", f))
        }
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    "use strict";
    e.exports = n(4)
}, function(e, t, n) {
    "use strict";
    e.exports = {
        rawFirebirdConfig: {
            build: !0,
            site: "Main Site",
            siteId: "main_site",
            siteName: "Main Site",
            implementations: {
                weights: {
                    2001: 100
                },
                total: 100
            },
            configs: {
                2001: {
                    version: 507,
                    locale: "en_US",
                    locales: [{
                        locale: "en_US",
                        language: "en",
                        country: "US"
                    }],
                    apiconfig: {
                        limit: 10,
                        passkey: "tpcm2y0z48bicyt0z3et5n2xf",
                        baseUrl: "//api.bazaarvoice.com/data/",
                        notificationsUrl: "//api.bazaarvoice.com/notifications/",
                        bvLocalUrl: "//api.bazaarvoice.com/bvlocal/",
                        bvLocalKey: "95uqgm8emmjyp9ymrthmtxb9",
                        contentLocales: ["en", "en_AU", "en_CA", "en_GB", "en_US"],
                        displaycode: "2001-en_us"
                    },
                    allowedDomains: [{
                        domainAddress: ".bazaarvoice.com",
                        allowSubdomain: !0,
                        firstPartyCookieEnabled: !0,
                        thirdPartyCookieEnabled: !0
                    }, {
                        firstPartyCookieEnabled: !0,
                        thirdPartyCookieEnabled: !0,
                        domainAddress: ".usdk.mobi",
                        allowSubdomain: !0
                    }, {
                        firstPartyCookieEnabled: !0,
                        thirdPartyCookieEnabled: !0,
                        domainAddress: ".usablenet.com",
                        allowSubdomain: !0
                    }, {
                        firstPartyCookieEnabled: !0,
                        thirdPartyCookieEnabled: !0,
                        domainAddress: ".walgreens.com",
                        allowSubdomain: !0
                    }],
                    build: !0,
                    statsTypes: ["Questions", "Reviews"],
                    externalFeatures: [],
                    page: {
                        size: 8,
                        size2n: 8,
                        reInject: !0,
                        details: {
                            review: {
                                size: 8,
                                size2n: 30
                            },
                            question: {
                                size: 10,
                                size2n: 10
                            },
                            comment: {
                                size: 3,
                                size2n: 3
                            },
                            reviewcomment: {
                                size: 3,
                                size2n: 3
                            },
                            answer: {
                                size: 10,
                                size2n: 10
                            },
                            author: {
                                size: 1,
                                size2n: 1
                            }
                        }
                    },
                    homePageUrl: "http://www.walgreens.com/",
                    container: {
                        url: null,
                        subjectRedirect: !0
                    },
                    analytics: {
                        vendors: {
                            magpie: {
                                brandDomain: null
                            }
                        }
                    },
                    vendorConfig: {
                        facebook: {
                            key: ""
                        }
                    },
                    uiActions: {
                        rr_inline_ratings: ["inlineRatingList1"],
                        rr_show_reviews: ["reviewContentList1", "reviewSubmission1", "reviewSummary1", "contentSearch1"],
                        rr_submit_review: ["reviewSubmission1"],
                        rr_submit_comment: ["commentSubmission1_inline"],
                        rr_submit_generic: ["reviewGenericSubmission1"],
                        qa_show_summary: ["reviewSummary1"],
                        qa_show_questions: ["questionContentList1", "questionSubmission1"],
                        qa_show_answers: [],
                        qa_submit_question: ["questionSubmission1"],
                        qa_submit_answer: ["answerSubmission1_inline"],
                        cp_show_profile: ["fullProfile1"],
                        sy_show_stories: []
                    },
                    containers: {
                        BVRRSummaryContainer: "summaryContainerDiv",
                        BVRRContainer: "contentContainerDiv",
                        BVQAContainer: "contentContainerDiv",
                        BVLBContainer: "contentContainerDiv"
                    },
                    injectionZone: {
                        BVRRContainer: ["contentSearch1", "reviewContentList1"]
                    },
                    submission: {
                        duplicateTimeout: 432e5,
                        userTimeout: 6048e5,
                        maxAnswers: 10,
                        questionsPageSize: 4,
                        rating: {
                            range: [1, 5]
                        },
                        reviewtext: {
                            maxlength: 1e4,
                            minlength: 0
                        },
                        title: {
                            maxlength: 50,
                            minlength: 0
                        },
                        usernickname: {
                            maxlength: 50,
                            minlength: 0
                        },
                        userlocation: {
                            maxlength: 100,
                            minlength: 0
                        },
                        netpromoterscore: {
                            range: [0, 10]
                        },
                        netpromotercomment: {
                            maxlength: 1e5,
                            minlength: 0
                        }
                    },
                    display: {
                        filters: [],
                        sprite: !1,
                        syndicationFilter: []
                    },
                    fqhn: "display.ugc.bazaarvoice.com",
                    environment: "production",
                    workspace: "production",
                    cdnhost: "display.ugc.bazaarvoice.com",
                    imagesPath: "//display.ugc.bazaarvoice.com/common/images/",
                    utilPath: "//display.ugc.bazaarvoice.com/common/util/",
                    displaycode: "2001",
                    implementationID: "24336627-f238-450a-af5b-471bd2d3b964",
                    clientname: "Walgreens",
                    clientDisplayName: "Walgreens",
                    siteAuth: {},
                    loginPage: "",
                    experiments: {},
                    clientLogo: "http://image.sa.bazaarvoice.com/lib/fe6915707561007e751d/m/1/",
                    sort: {
                        reviews: "relevancy",
                        questions: "recentAnswersFirst"
                    },
                    sci: {
                        enabled: !1,
                        waps: []
                    },
                    bvLocal: {
                        enabled: !1,
                        isLocalNode: !1
                    },
                    rrReadOnlyEnabled: !1,
                    queryRouter: {
                        editCanonicalTags: !0
                    },
                    termsAndConditions: {
                        rrTermsAndConditionsRemoteUrl: "",
                        rrTermsAndConditionsRemoteUrlEnabled: !1,
                        qaTermsAndConditionsRemoteUrl: "",
                        qaTermsAndConditionsRemoteUrlEnabled: !1
                    },
                    fingerprintingEnabled: !0,
                    trackingDataRegion: "undecided",
                    statistics: {
                        onlyShowDisplayedLocaleStatistics: !0
                    },
                    piiDataRegion: "unitedStates",
                    contentLocales: ["en", "en_AU", "en_CA", "en_GB", "en_US"],
                    deploymentId: "Walgreens/main_site/PRODUCTION/en_US",
                    deploymentPath: "dimsum/doc/clientDeploymentConfigs/Walgreens/main_site/PRODUCTION/en_US",
                    deploymentVersion: "14-59931bbb6ee2ca0b380a1260",
                    revision: "14-59931bbb6ee2ca0b380a1260",
                    site: "Main Site",
                    siteId: "main_site",
                    siteName: "Main Site",
                    prefetchConfigs: [{
                        url: "//api.bazaarvoice.com/data/batch.json?passkey=tpcm2y0z48bicyt0z3et5n2xf&apiversion=5.5&displaycode=2001-en_us&resource.q0=products&filter.q0=id%3Aeq%3A___PRODUCTIDTOKEN___&stats.q0=questions%2Creviews&filteredstats.q0=questions%2Creviews&filter_questions.q0=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_answers.q0=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_reviews.q0=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_reviewcomments.q0=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&resource.q1=questions&filter.q1=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q1=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&sort.q1=lastapprovedanswersubmissiontime%3Adesc&stats.q1=questions&filteredstats.q1=questions&include.q1=authors%2Cproducts%2Canswers&filter_questions.q1=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_answers.q1=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&sort_answers.q1=submissiontime%3Adesc&limit.q1=10&offset.q1=0&limit_answers.q1=10&resource.q2=reviews&filter.q2=isratingsonly%3Aeq%3Afalse&filter.q2=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter.q2=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&sort.q2=relevancy%3Aa1&stats.q2=reviews&filteredstats.q2=reviews&include.q2=authors%2Cproducts%2Ccomments&filter_reviews.q2=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_reviewcomments.q2=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_comments.q2=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&limit.q2=8&offset.q2=0&limit_comments.q2=3",
                        subQueries: ["//api.bazaarvoice.com/data/products.json?passkey=tpcm2y0z48bicyt0z3et5n2xf&apiversion=5.5&displaycode=2001-en_us&filter=id%3Aeq%3A___PRODUCTIDTOKEN___&stats=questions%2Creviews&filteredstats=questions%2Creviews&filter_questions=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_answers=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_reviews=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_reviewcomments=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US", "//api.bazaarvoice.com/data/questions.json?passkey=tpcm2y0z48bicyt0z3et5n2xf&apiversion=5.5&displaycode=2001-en_us&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&sort=lastapprovedanswersubmissiontime%3Adesc&stats=questions&filteredstats=questions&include=authors%2Cproducts%2Canswers&filter_questions=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_answers=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&sort_answers=submissiontime%3Adesc&limit=10&offset=0&limit_answers=10", "//api.bazaarvoice.com/data/reviews.json?passkey=tpcm2y0z48bicyt0z3et5n2xf&apiversion=5.5&displaycode=2001-en_us&filter=isratingsonly%3Aeq%3Afalse&filter=productid%3Aeq%3A___PRODUCTIDTOKEN___&filter=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&sort=relevancy%3Aa1&stats=reviews&filteredstats=reviews&include=authors%2Cproducts%2Ccomments&filter_reviews=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_reviewcomments=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&filter_comments=contentlocale%3Aeq%3Aen%2Cen_AU%2Cen_CA%2Cen_GB%2Cen_US&limit=8&offset=0&limit_comments=3"]
                    }]
                }
            },
            version: 507,
            notifications: {
                passkey: "b8d57893b7754e2d390348dc172b7c76"
            }
        },
        debug: !1,
        siteId: "main_site",
        siteName: "Main Site",
        version: 507,
        build: !0,
        env: "production",
        firebirdVersion: "0.39.0",
        date: "Tue Aug 15 2017 16:06:49 GMT+0000 (UTC)"
    }
}, function(e, t, n) {
    var r;
    r = function() {
        return function(e) {
            return e._internal = {}, e.options = {}, e.initialData && (e.options.initialData = e.initialData), e.API_BASE_URL && (e._internal.apiOverrideURL = e.API_BASE_URL), e
        }
    }.call(t, n, t, e), void 0 === r || !(e.exports = r)
}, function(e, t, n) {
    "use strict";
    e.exports = n(10)
}, function(e, t) {
    function n(e, t) {
        var n, r, i = this.events = this.events || {},
            s = e.split(/\s+/),
            o = s.length;
        for (n = 0; o > n; n++) i[r = s[n]] = i[r] || [], i[r].push(t);
        return this
    }

    function r(e, t) {
        var n = function() {
            this.off(e, n), t.apply(this, f.call(arguments))
        };
        return this.on(e, n), this
    }

    function i(e, t) {
        var n, r, i, s, u, a = this.events;
        if (a) {
            for (u = e.split(/\s+/), r = 0, s = u.length; s > r; r++)(n = u[r]) in a != 0 && (i = t ? o(a[n], t) : 0, -1 !== i && a[n].splice(i, 1));
            return this
        }
    }

    function s(e) {
        var t, n, r = this.events;
        if (r && e in r != 0) {
            for (t = f.call(arguments, 1), n = r[e].length - 1; n >= 0; n--) try {
                r[e][n].apply(this, t)
            } catch (i) {}
            return this
        }
    }

    function o(e, t) {
        var n, r;
        if (a && e.indexOf === a) return e.indexOf(t);
        for (n = 0, r = e.length; r > n; n++)
            if (e[n] === t) return n;
        return -1
    }
    var u = Array.prototype,
        a = u.indexOf,
        f = u.slice;
    e.exports = function() {
        return this.on = n, this.off = i, this.trigger = this.emit = s, this.one = this.once = r, this
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(12)
}, function(e, t, n) {
    var r = n(4).document;
    e.exports = function() {
        var e = function(e, t, n) {
            for (var r = t.getElementsByTagName("i"); t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->", r[0];);
            return e > 4 ? e : n
        }(3, r.createElement("div"));
        return e
    }()
}, function(e, t, n) {
    var r;
    r = function() {
        function e(e) {
            var t = m[e] = {};
            return f(e.split(/\s+/), function(e) {
                t[e] = !0
            }), t
        }
        var t = {},
            n = Array.prototype,
            r = Object.prototype,
            i = r.hasOwnProperty,
            s = r.toString,
            o = n.forEach,
            u = n.indexOf,
            a = n.slice,
            f = function(e, n, r) {
                var s, u, a;
                if (e)
                    if (o && e.forEach === o) e.forEach(n, r);
                    else if (e.length === +e.length) {
                        for (u = 0, a = e.length; a > u; u++)
                            if (u in e && n.call(r, e[u], u, e) === t) return
                    } else
                        for (s in e)
                            if (i.call(e, s) && n.call(r, e[s], s, e) === t) return
            },
            l = function(e) {
                return !!(e && e.constructor && e.call && e.apply)
            },
            c = function(e) {
                return f(a.call(arguments, 1), function(t) {
                    var n;
                    for (n in t) void 0 !== t[n] && (e[n] = t[n])
                }), e
            },
            h = function(e, t, n) {
                var r;
                if (t) {
                    if (u) return u.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            p = {};
        f("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            p["[object " + e + "]"] = e.toLowerCase()
        });
        var d = function(e) {
                return null == e ? String(e) : p[s.call(e)] || "object"
            },
            v = {
                extend: c,
                each: f,
                isFunction: l
            },
            m = {};
        return v.Callbacks = function(t) {
            t = "string" == typeof t ? m[t] || e(t) : c({}, t);
            var n, r, i, s, o, u, a = [],
                l = !t.once && [],
                p = function(e) {
                    for (n = t.memory && e, r = !0, u = s || 0, s = 0, o = a.length, i = !0; a && o > u; u++)
                        if (a[u].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                            n = !1;
                            break
                        }
                    i = !1, a && (l ? l.length && p(l.shift()) : n ? a = [] : v.disable())
                },
                v = {
                    add: function() {
                        if (a) {
                            var e = a.length;
                            ! function r(e) {
                                f(e, function(e) {
                                    var n = d(e);
                                    "function" === n ? t.unique && v.has(e) || a.push(e) : e && e.length && "string" !== n && r(e)
                                })
                            }(arguments), i ? o = a.length : n && (s = e, p(n))
                        }
                        return this
                    },
                    remove: function() {
                        return a && f(arguments, function(e) {
                            for (var t;
                                 (t = h(e, a, t)) > -1;) a.splice(t, 1), i && (o >= t && o--, u >= t && u--)
                        }), this
                    },
                    has: function(e) {
                        return h(e, a) > -1
                    },
                    empty: function() {
                        return a = [], this
                    },
                    disable: function() {
                        return a = l = n = void 0, this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return l = void 0, n || v.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], !a || r && !l || (i ? l.push(t) : p(t)), this
                    },
                    fire: function() {
                        return v.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return v
        }, v.Deferred = function(e) {
            var t = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            f(t, function(t, r) {
                                var s = t[0],
                                    o = e[r];
                                i[t[1]](l(o) ? function() {
                                    var e = o.apply(this, arguments);
                                    e && l(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? c(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, f(t, function(e, s) {
                var o = e[2],
                    u = e[3];
                r[e[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[1 ^ s][2].disable, t[2][2].lock), i[e[0]] = o.fire, i[e[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, v.when = function(e) {
            var t = 0,
                n = "array" === d(e) && 1 === arguments.length ? e : a.call(arguments),
                r = n.length;
            "array" === d(e) && 1 === e.length && (e = e[0]);
            var i, s, o, u = 1 !== r || e && l(e.promise) ? r : 0,
                f = 1 === u ? e : v.Deferred(),
                c = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? a.call(arguments) : r, n === i ? f.notifyWith(t, n) : --u || f.resolveWith(t, n)
                    }
                };
            if (r > 1)
                for (i = new Array(r), s = new Array(r), o = new Array(r); r > t; t++) n[t] && l(n[t].promise) ? n[t].promise().done(c(t, o, n)).fail(f.reject).progress(c(t, s, i)) : --u;
            return u || f.resolveWith(o, n), f.promise()
        }, v
    }.call(t, n, t, e), void 0 === r || !(e.exports = r)
}, function(e, t, n) {
    var r, i;
    r = [n(15), n(16), n(17), n(18), n(2)], i = function(e, t, n, r, i) {
        return i.performance = {}, i.Date = t(window), i.requestAnimationFrame = e(window), i.performance.now = n(window), i.performance.mark = r(i.performance, window), i.performance
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    var r;
    r = function() {
        return function(e) {
            var t = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
                e.setTimeout(t, 1e3 / 60)
            };
            return function() {
                return t.apply(e, arguments)
            }
        }
    }.call(t, n, t, e), void 0 === r || !(e.exports = r)
}, function(e, t, n) {
    var r;
    r = function() {
        return function(e) {
            return {
                now: function() {
                    var t = e.Date,
                        n = t.now;
                    return "function" == typeof n ? function() {
                        return n.call(t)
                    } : function() {
                        return (new t).getTime()
                    }
                }()
            }
        }
    }.call(t, n, t, e), void 0 === r || !(e.exports = r)
}, function(e, t, n) {
    var r, i;
    r = [n(16)], i = function(e) {
        return function(t) {
            var n = t.performance,
                r = n && n.now;
            if ("function" == typeof r) return function() {
                return r.call(n)
            };
            var i = e(t).now();
            return n && n.timing && "number" == typeof n.timing.navigationStart && (i = n.timing.navigationStart),
                function() {
                    return e(t).now() - i
                }
        }
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    var r;
    r = function() {
        return function(e, t) {
            var n = t.performance,
                r = n && n.mark,
                i = e._marks = {},
                s = e._timeline = [],
                o = {
                    navigationStart: 1,
                    unloadEventStart: 1,
                    unloadEventEnd: 1,
                    redirectStart: 1,
                    redirectEnd: 1,
                    fetchStart: 1,
                    domainLookupStart: 1,
                    domainLookupEnd: 1,
                    connectStart: 1,
                    connectEnd: 1,
                    secureConnectionStart: 1,
                    requestStart: 1,
                    responseStart: 1,
                    responseEnd: 1,
                    domLoading: 1,
                    domInteractive: 1,
                    domContentLoadedEventStart: 1,
                    domContentLoadedEventEnd: 1,
                    domComplete: 1,
                    loadEventStart: 1,
                    loadEventEnd: 1
                };
            return function(t) {
                if ("function" == typeof r && r.call(n, t), arguments.length < 1) throw new SyntaxError("Cannot set mark without name");
                if (t in o) throw new SyntaxError('Cannot set mark with reserved name "' + t + '"');
                var u = {
                    entryType: "mark",
                    name: t,
                    startTime: e.now(),
                    duration: 0
                };
                i[t] = i[t] || [], i[t].push(u.startTime), s.push(u)
            }
        }
    }.call(t, n, t, e), void 0 === r || !(e.exports = r)
}, function(e, t, n) {
    var r;
    r = function() {
        return function(e) {
            var t = e._internal,
                n = e._options.configs;
            if (t.apiOverrideURL) {
                t.originalApiHosts = {};
                for (var r in n) n.hasOwnProperty(r) && (t.originalApiHosts[r] = n[r].apiconfig.baseUrl, n[r].apiconfig.baseUrl = t.apiOverrideURL)
            }
            return e
        }
    }.call(t, n, t, e), void 0 === r || !(e.exports = r)
}, function(e, t, n) {
    var r, i;
    r = [n(21)], i = function(e) {
        return function(t) {
            function n(t, n, r) {
                var i = e.read("BVImpl" + t);
                if (i && n.hasOwnProperty(i)) return i;
                var s = Math.random() * r,
                    o = 0;
                for (var u in n)
                    if (n.hasOwnProperty(u)) {
                        if (s >= o && s < o + n[u]) {
                            i = u;
                            break
                        }
                        o += n[u]
                    }
                return e.create("BVImpl" + t, i), i
            }
            var r = t._internal,
                i = n(t._options.siteId, t._options.implementations.weights, t._options.implementations.total),
                s = t.options = t._options.configs[i];
            return r.baseUrl = r.protocol + "//" + s.fqhn + "/static/" + s.clientname + "/" + t._options.siteId + "/" + s.version + "/" + i + "/" + s.locale, t.options
        }
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    "use strict";
    e.exports = n(22)
}, function(e, t, n) {
    var r = n(4);
    e.exports = {
        create: function(e, t, n, i, s) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
            var u = n ? ";expires=" + o.toGMTString() : "",
                a = encodeURIComponent(e) + "=" + encodeURIComponent(t) + u + ";path=/" + (i ? ";domain=" + i : "") + (s ? ";secure" : "");
            r.document.cookie = a
        },
        read: function(e) {
            var t, n = encodeURIComponent(e) + "=",
                i = r.document.cookie.split(";");
            for (t = 0; t < i.length; t++) {
                for (var s = i[t];
                     " " === s.charAt(0);) s = s.substring(1, s.length);
                if (0 === s.indexOf(n)) return decodeURIComponent(s.substring(n.length, s.length))
            }
            return null
        },
        remove: function(e) {
            this.create(e, "", -1)
        }
    }
}, function(e, t, n) {
    var r, i;
    r = [n(13), n(11), n(24), n(6), n(26)], i = function(e, t, n, r, i) {
        return function(s) {
            var o = s._internal;
            s.staticAssetLoader = s.staticAssetLoader || i.create({
                generateUrl: function(e, t) {
                    var n = encodeURIComponent(e.slice(0).sort().join("+")) + ".js",
                        r = "2.0.0";
                    return "https://display.ugc.bazaarvoice.com/common/static-assets/" + r + "/" + n
                },
                namespaceName: "BV"
            }), s.staticAssetLoader.require(["jquery-bv@1.11.1", "lodash-bv@1.2.0"], function() {});
            var u, a, f = r.document.getElementsByTagName("head")[0],
                l = o.baseUrl + "/stylesheets/",
                c = t && t > 4 && 9 > t,
                h = l + (o.preview ? "cleanslate" : c ? "screen-ie" : "screen") + ".css";
            u = "bv-primary.js", a = {}, n.loadScript(o.baseUrl + "/scripts/" + u, a);
            var p = {};
            return f && (p.injectionNode = f), !o.preview && c && (o.loadCSS = function() {
                n.loadStyleSheet(h, p)
            }), n.loadStyleSheet(h, p), e.each(s.options.externalFeatures, function(t) {
                e.each(t.scripts, function(e) {
                    n.loadScript(e)
                })
            }), s
        }
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    "use strict";
    e.exports = n(25)
}, function(e, t, n) {
    function r() {
        return u.getElementsByTagName("script")[0]
    }

    function i(e) {
        return !e || "loaded" === e || "complete" === e || "uninitialized" === e
    }

    function s(e, t, n) {
        if (!e || "string" != typeof e) throw new Error("`url` must be a string");
        if ("number" != typeof t.timeout) throw new Error("`options.timeout` must be a number");
        if (n && "function" != typeof n) throw new Error("`callback` must be a function")
    }
    var o = n(4),
        u = o.document,
        a = 1e4;
    e.exports = {
        loadScript: function(e, t, n) {
            function o(e) {
                h = !0, clearTimeout(p), l.onload = l.onreadystatechange = l.onerror = null, l.parentNode.removeChild(l), "function" == typeof n && n(e)
            }
            "function" == typeof t && (n = t, t = null), t = t || {}, t.timeout = t.timeout || a, s(e, t, n);
            var f, l = u.createElement("script"),
                h = !1;
            if (t.attributes)
                for (f in t.attributes) l.setAttribute(f, t.attributes[f]);
            l.onreadystatechange = l.onload = function() {
                !h && i(l.readyState) && o()
            }, l.onerror = function() {
                h || o(new Error("Error: could not load " + e))
            };
            var p = setTimeout(function() {
                h || o(new Error("Error: script timeout " + e))
            }, t.timeout);
            setTimeout(function() {
                l.src = e;
                var t = r();
                t.parentNode.insertBefore(l, t)
            }, 0)
        },
        loadStyleSheet: function(e, t, n) {
            function f(e) {
                p = !0, clearTimeout(d), h.onload = h.onreadystatechange = h.onerror = null, "function" == typeof n && n(e)
            }
            if ("function" == typeof t && (n = t, t = null), t = t || {}, t.timeout = t.timeout || a, s(e, t, n), "injectionNode" in t && !(t.injectionNode instanceof o.Element)) throw new Error("`options.injectionNode` must be a DOM node");
            var l, h = u.createElement("link"),
                p = !1;
            if (t.attributes)
                for (l in t.attributes) h.setAttribute(l, t.attributes[l]);
            h.onreadystatechange = h.onload = function() {
                !p && i(h.readyState) && f()
            }, h.onerror = function() {
                p || f(new Error("Error: could not load " + e))
            };
            var d = setTimeout(h.onerror, t.timeout);
            setTimeout(function() {
                h.media = "only x", h.rel = "stylesheet", h.type = "text/css", h.href = e, setTimeout(function() {
                    h.media = "all"
                }, 0);
                var n = t.injectionNode || r().parentNode;
                try {
                    n.appendChild(h)
                } catch (i) {
                    f(new Error("Error: could not append LINK element"))
                }
            }, 0)
        }
    }
}, function(e, t, n) {
    function r(e, t) {
        if (e && e.length)
            for (var n = 0; n < e.length; n++) t(e[n], n, e)
    }

    function i(e, t) {
        var n = [];
        return r(e, function(e, r, i) {
            n.push(t(e, r, i))
        }), n
    }
    var s = n(27),
        o = n(29);
    e.exports = {
        create: function(e) {
            function t(e) {
                if (!e.complete) {
                    var t = !0,
                        n = i(e.assetNames, function(e) {
                            var n = p.assets[e];
                            return n || (t = !1), n
                        });
                    t && (e.complete = !0, "function" == typeof e.callback && e.callback.apply(null, n))
                }
            }

            function n(e, n) {
                p.assets[e] || (p.assets[e] = n, r(p.requests[e], t))
            }

            function u(e, n) {
                var i = {
                    assetNames: e,
                    callback: n,
                    complete: !1
                };
                if (r(e, function(e) {
                        p.requests[e] = p.requests[e] || [], p.requests[e].push(i)
                    }), t(i), !i.complete) {
                    var o = [];
                    r(e, function(e) {
                        p.assets[e] || p.requests[e].length > 1 || o.push(e)
                    }), o.length && s.loadScript(f(o, l), c, function(e) {
                        if (e) throw new Error("Failed to load " + o.join(", ") + ": " + e.toString())
                    })
                }
            }
            var f = e.generateUrl,
                l = e.namespaceName;
            if (!l) throw new Error("Cannot initialize staticAssetLoader without a namespace name.");
            if ("function" != typeof f) throw new Error("Cannot initialize staticAssetLoader without a URL generation function.");
            var c = {},
                h = o.namespace(l),
                p = h._staticAssetRegistry = h._staticAssetRegistry || {
                    assets: {},
                    requests: {},
                    define: void 0
                };
            return p.define = n, {
                require: u,
                define: n
            }
        }
    }
}, function(e, t, n) {
    function r() {
        return a.getElementsByTagName("script")[0]
    }

    function i(e) {
        return !e || "loaded" === e || "complete" === e || "uninitialized" === e
    }

    function s(e, t, n) {
        if (!e || "string" != typeof e) throw new Error("`url` must be a string");
        if (t.namespaceName && "string" != typeof t.namespaceName) throw new Error("`options.namespaceName` must be a string");
        if (t.forceLoad && "boolean" != typeof t.forceLoad) throw new Error("`options.forceLoad` must be a boolean");
        if ("number" != typeof t.timeout) throw new Error("`options.timeout` must be a number");
        if (n && "function" != typeof n) throw new Error("`callback` must be a function")
    }
    var o = n(28),
        u = n(29),
        a = o.document,
        f = 1e4,
        l = {};
    e.exports = {
        _clearLoadedUrls: function(e) {
            if (e) {
                var t = u.namespace(e);
                t.loadedUrls = {}
            } else l = {}
        },
        loadScript: function(e, t, n) {
            function o(r) {
                m = !0, clearTimeout(g), v.onload = v.onreadystatechange = v.onerror = null, v.parentNode.removeChild(v), r || (p[e] = !0, t.namespaceName ? h.loadedUrls = p : l = p), "function" == typeof n && n(r)
            }
            var h, p = l;
            if ("function" == typeof t && (n = t, t = null), t = t || {}, t.timeout = t.timeout || f, s(e, t, n), t.namespaceName && (h = u.namespace(t.namespaceName), p = h.loadedUrls || {}), !t.forceLoad && p[e]) return void("function" == typeof n && n());
            var d, v = a.createElement("script"),
                m = !1;
            if (t.attributes)
                for (d in t.attributes) v.setAttribute(d, t.attributes[d]);
            v.onreadystatechange = v.onload = function() {
                !m && i(v.readyState) && o()
            }, v.onerror = function() {
                m || o(new Error("Error: could not load " + e))
            };
            var g = setTimeout(function() {
                m || o(new Error("Error: script timeout " + e))
            }, t.timeout);
            setTimeout(function() {
                v.src = e;
                var t = r();
                t.parentNode.insertBefore(v, t)
            }, 0)
        },
        loadStyleSheet: function(e, t, n) {
            function h(r) {
                g = !0, clearTimeout(y), m.onload = m.onreadystatechange = m.onerror = null, r || (d[e] = !0, t.namespaceName ? p.loadedUrls = d : l = d), "function" == typeof n && n(r)
            }
            var p, d = l;
            if ("function" == typeof t && (n = t, t = null), t = t || {}, t.timeout = t.timeout || f, s(e, t, n), "injectionNode" in t && !(t.injectionNode instanceof o.Element)) throw new Error("`options.injectionNode` must be a DOM node");
            if (t.namespaceName && (p = u.namespace(t.namespaceName), d = p.loadedUrls || {}), !t.forceLoad && d[e]) return void("function" == typeof n && n());
            var v, m = a.createElement("link"),
                g = !1;
            if (t.attributes)
                for (v in t.attributes) m.setAttribute(v, t.attributes[v]);
            m.onreadystatechange = m.onload = function() {
                !g && i(m.readyState) && h()
            }, m.onerror = function() {
                g || h(new Error("Error: could not load " + e))
            };
            var y = setTimeout(m.onerror, t.timeout);
            setTimeout(function() {
                m.media = "only x", m.rel = "stylesheet", m.type = "text/css", m.href = e, setTimeout(function() {
                    m.media = "all"
                }, 0);
                var n = t.injectionNode || r().parentNode;
                try {
                    n.appendChild(m)
                } catch (i) {
                    h(new Error("Error: could not append LINK element"))
                }
            }, 0)
        }
    }
}, function(e, t) {
    "use strict";
    e.exports = (new Function("return this;"))()
}, function(e, t, n) {
    function r(e) {
        this.name = e
    }
    var i = n(28);
    r.prototype.registerProperty = function(e, t) {
        if (this.hasOwnProperty(e)) throw new Error("Cannot register " + e + " because a property with that name already exists on window." + this.name);
        return this[e] = t, this
    }, e.exports = {
        namespace: function(e) {
            if (void 0 === i[e]) Object.defineProperty(i, e, {
                value: new r(e)
            });
            else {
                if ("object" != typeof i[e]) throw new Error("Namespace " + e + " cannot be created. A non-object variable is already assigned to window." + e);
                if (!(i[e] instanceof r)) {
                    r.call(i[e], e);
                    for (var t in r.prototype) i[e][t] = r.prototype[t]
                }
            }
            return i[e]
        }
    }
}, function(e, t, n) {
    var r, i;
    r = [n(9), n(13)], i = function(e, t) {
        function n(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function() {
                var r = n.concat(Array.prototype.slice.call(arguments));
                return e.apply(t || null, r)
            }
        }

        function r(e, t, r) {
            return this[e](t, r), {
                off: n(this.off, this, t, r)
            }
        }

        function i(e, t) {
            var i = this.publicHandle = {
                name: e
            };
            this.config = t, u(["on", "one", "once"], function(e) {
                i[e] = n(r, this, e)
            }, this), this.trigger = o
        }

        function s(e) {
            var t = new f;
            return e.push(t.promise()), {
                allowDefault: function() {
                    t.resolve()
                },
                preventDefault: function() {
                    t.reject()
                }
            }
        }

        function o(e) {
            var t = [];
            return this.deferDefault = n(s, null, t), this.preventDefault = function() {
                t.push(l)
            }, this.constructor.prototype.trigger.apply(this, arguments), this.deferDefault = null, this.preventDefault = null, a(t)
        }
        var u = t.each,
            a = t.when,
            f = t.Deferred;
        e.call(i.prototype);
        var l = (Array.prototype.slice, (new f).reject().promise()),
            c = {};
        e.call(c);
        var h = n(c.emit, c);
        delete c.emit, delete c.trigger;
        var p = {};
        return c.register = function(e, t) {
            if (e && !(e in p)) {
                var r = p[e] = new i(e, t);
                return setTimeout(n(function() {
                    h("register", r.publicHandle)
                }, this), 0), r
            }
        }, c.get = function(e) {
            return p[e] ? p[e].publicHandle : null
        }, c
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    var r, i;
    r = [n(13), n(9)], i = function(e, t) {
        return function(n) {
            function r(e) {
                var t = e._events = {},
                    n = e.publicHandle;
                return o(["call", "invoke", "complete"], function(n) {
                    t[n] = [], e.on(n, function(e) {
                        t[n].push(e)
                    })
                }), e.getEvents = n.getEvents = function(e) {
                    var n = t[e];
                    return n ? n.slice() : []
                }, e
            }
            var i = e.Deferred,
                s = {},
                o = e.each,
                u = {
                    data: function(e) {
                        function t(t, r) {
                            var s = i();
                            return !r && n[t] ? s.resolve(e.sanitize(n[t])) : e.once("data." + t, function() {
                                s.resolve(e.sanitize(n[t]))
                            }), s.promise()
                        }
                        var n = e.history = {},
                            r = e.publicHandle;
                        return e.sendData = function(t) {
                            var r = t.contentType;
                            r && (n[r] = t, e.trigger("data." + r))
                        }, e.getLast = r.getLast = function(e) {
                            return t(e)
                        }, e.getNext = r.getNext = function(e) {
                            return t(e, !0)
                        }, e.sanitize = function(e) {
                            return e
                        }, e
                    },
                    ui: function(e) {
                        return e = r(e), e.publicHandle.init = function(t) {
                            e.trigger("call", t)
                        }, e
                    },
                    configure: r
                };
            o(["ui", "configure", "data"], function(e) {
                var r = [];
                n[e] = {
                    register: function(t, i) {
                        var s = n.register(e + "." + t, i || {}),
                            o = s.publicHandle;
                        u[e] && (s = u[e](s));
                        try {
                            n[e].trigger("register", o)
                        } catch (a) {
                            $BV.log("Failed to register extension in " + e)
                        }
                        return r.push(t), s
                    },
                    get: function(t) {
                        return n.get(e + "." + t)
                    },
                    getAll: function() {
                        return r
                    }
                }, t.call(n[e])
            });
            var a = {
                global: {},
                rr: {
                    show_reviews: 1,
                    show_category_gallery: 0,
                    submit_review: 0,
                    submit_comment: 0,
                    submit_generic: 0,
                    inline_ratings: 0
                },
                qa: {
                    show_questions: 1,
                    show_summary: 0,
                    submit_question: 0,
                    submit_answer: 0
                },
                cp: {
                    show_profile: 0
                }
            };
            return o(a, function(e, t) {
                s["configure." + t] = n.configure.register(t), o(e, function(e, r) {
                    var i = t + "_" + r;
                    s["ui." + i] = n.ui.register(i, {
                        preload: e
                    })
                })
            }), s["data.bvapi"] = n.data.register("bvapi"), s
        }
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    var r, i;
    r = [n(13), n(11), n(24)], i = function(e, t, n) {
        return function(r) {
            var i, s = r._internal;
            return function(u) {
                var a = r.options,
                    f = e.each,
                    l = s.protocol;
                f(a.prefetchConfigs, function(f, c) {
                    var h = l + f.url.replace(/___PRODUCTIDTOKEN___/g, u);
                    if (s.apiOverrideURL && (h = h.replace(s.originalApiHosts[a.displaycode || "default"], a.apiconfig.baseUrl)), !(t && 9 > t && h.length > 2e3)) {
                        var p = "dataHandler" + c,
                            d = e.Deferred(),
                            v = h + "&callback=BV._internal." + p;
                        f.promise = d.promise();
                        var m = d.resolve;
                        d.resolver = p, d.resolve = function() {
                            p === i && r.performance.mark("bv-preload-end"), r.performance.mark(d.resolver + "-start"), m.apply(d, Array.prototype.slice.call(arguments)), r.performance.mark(d.resolver + "-end")
                        }, a.page.reInject = !0, s[p] = d.resolve, i || (r.performance.mark("bv-preload-start"), i = p), n.loadScript(v)
                    }
                })
            }
        }
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    var r, i;
    r = [n(6)], i = function(e) {
        var t = e.console;
        return function(e, n) {
            var r = e._internal;
            return function() {
                function i(e, t, n) {
                    var r;
                    return n ? (r = s(e, t, n), !!(r && r.config && r.config.preload)) : !0
                }

                function s(e, t, n) {
                    return c && c[e + "." + t + (n ? "_" + n : "")]
                }
                var o, u, a, f = n && n._apiQueue || n || [],
                    l = n && n._bvjsAppsScoutfile,
                    c = r.extensionsRegistry;
                for (r.timing = {
                    ui: {}
                }, u = {
                    _apiQueue: [],
                    log: function() {
                        t && t.log && t.log(arguments)
                    },
                    push: function(t) {
                        var n, o, a, f, l = t[0],
                            c = t[1];
                        ("ui" === l || "configure" === l) && (n = "ui" === l ? t[3] : t[2], o = "ui" === l ? t[2] : null, n && e._internal.preload && n.productId && i(l, c, o) && (r.preload(n.productId), r.preload = null), a = s(l, c, o)), "ui" === l && (f = (c + "_" + o).toLowerCase(), e.performance.mark(f + "-call"), r.timing = r.timing || {
                            ui: {}
                        }, r.timing.ui[f] = {
                            init: (new Date).getTime(),
                            config: n
                        }), u._apiQueue.push(t), a && a.trigger("call", {
                            config: n
                        })
                    }
                }, l && (u._bvjsAppsScoutfile = l), o = 0; o < f.length; o++) u.push(f[o]);
                for (a = ["ui", "configure", "container", "ready", "SI.trackProductPageView", "SI.trackGenericPageView", "SI.trackTransactionPageView", "SI.disable", "SI.enable", "SI.setDebugEnabled", "SI.trackConversion", "DSI.trackBVPageView", "DSI.trackProduct", "DSI.trackTransaction"], o = a.length - 1; o >= 0; --o) ! function(e, t, n) {
                    for (var i = t.split("."), s = i.pop(); n = i.shift();) e = e[n] = e[n] || {};
                    e[s] = function(e) {
                        return function() {
                            var t, n = [e].concat(Array.prototype.slice.call(arguments));
                            return "ui" === e ? (t = n[3] = n[3] || {}, t.loadedDeferred = t.loadedDeferred || r._.Deferred(), u.push(n), t.loadedDeferred.promise()) : u.push(n)
                        }
                    }(t.replace(/\./g, "_"))
                }(u, a[o]);
                return u
            }()
        }
    }.apply(t, r), void 0 === i || !(e.exports = i)
}, function(e, t, n) {
    var r, i;
    r = [n(6), n(24)], i = function(e, t) {
        var n, r;
        e.$BV.Internal = e.$BV.Internal || {}, e.$BV.Internal._bvScoutEventQueue = [], n = "production" !== BV.options.environment ? "https://s3.amazonaws.com/bvscout-stg/clients/firebird" : "https://apps.nexus.bazaarvoice.com/firebird", r = "default", t.loadScript(n + "/" + r + "/bv.js", function(t) {
            t && e.$BV.log("Error loading shopper-profile-sdk.")
        })
    }.apply(t, r), void 0 === i || !(e.exports = i)
}]);