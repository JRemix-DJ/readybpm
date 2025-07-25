!function (e,t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e,!0) :function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } :t(e)
}("undefined" != typeof window ? window :this,function (h,e) {
    var t = [],c = t.slice,g = t.concat,a = t.push,i = t.indexOf,n = {},r = n.toString,m = n.hasOwnProperty,v = {},
        y = h.document,o = "2.1.4",C = function (e,t) {
            return new C.fn.init(e,t)
        },s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u = /^-ms-/,l = /-([\da-z])/gi,f = function (e,t) {
            return t.toUpperCase()
        };

    function p(e) {
        var t = "length" in e && e.length,n = C.type(e);
        return "function" !== n && !C.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }

    C.fn = C.prototype = {
        jquery: o,constructor: C,selector: "",length: 0,toArray: function () {
            return c.call(this)
        },get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] :this[e] :c.call(this)
        },pushStack: function (e) {
            var t = C.merge(this.constructor(),e);
            return t.prevObject = this, t.context = this.context, t
        },each: function (e,t) {
            return C.each(this,e,t)
        },map: function (n) {
            return this.pushStack(C.map(this,function (e,t) {
                return n.call(e,t,e)
            }))
        },slice: function () {
            return this.pushStack(c.apply(this,arguments))
        },first: function () {
            return this.eq(0)
        },last: function () {
            return this.eq(-1)
        },eq: function (e) {
            var t = this.length,n = +e + (e < 0 ? t :0);
            return this.pushStack(0 <= n && n < t ? [this[n]] :[])
        },end: function () {
            return this.prevObject || this.constructor(null)
        },push: a,sort: t.sort,splice: t.splice
    }, C.extend = C.fn.extend = function () {
        var e,t,n,r,i,o,s = arguments[0] || {},a = 1,u = arguments.length,l = !1;
        for ("boolean" == typeof s && (l = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], s !== (r = e[t]) && (l && r && (C.isPlainObject(r) || (i = C.isArray(r))) ? (o = i ? (i = !1, n && C.isArray(n) ? n :[]) :n && C.isPlainObject(n) ? n :{}, s[t] = C.extend(l,o,r)) :void 0 !== r && (s[t] = r));
        return s
    }, C.extend({
        expando: "jQuery" + (o + Math.random()).replace(/\D/g,""),isReady: !0,error: function (e) {
            throw new Error(e)
        },noop: function () {
        },isFunction: function (e) {
            return "function" === C.type(e)
        },isArray: Array.isArray,isWindow: function (e) {
            return null != e && e === e.window
        },isNumeric: function (e) {
            return !C.isArray(e) && 0 <= e - parseFloat(e) + 1
        },isPlainObject: function (e) {
            return "object" === C.type(e) && !e.nodeType && !C.isWindow(e) && !(e.constructor && !m.call(e.constructor.prototype,"isPrototypeOf"))
        },isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },type: function (e) {
            return null == e ? e + "" :"object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" :typeof e
        },globalEval: function (e) {
            var t,n = eval;
            (e = C.trim(e)) && (1 === e.indexOf("use strict") ? ((t = y.createElement("script")).text = e, y.head.appendChild(t).parentNode.removeChild(t)) :n(e))
        },camelCase: function (e) {
            return e.replace(u,"ms-").replace(l,f)
        },nodeName: function (e,t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },each: function (e,t,n) {
            var r,i = 0,o = e.length,s = p(e);
            if (n) {
                if (s) for (; i < o && !1 !== (r = t.apply(e[i],n)); i++) ; else for (i in e) if (!1 === (r = t.apply(e[i],n))) break
            } else if (s) for (; i < o && !1 !== (r = t.call(e[i],i,e[i])); i++) ; else for (i in e) if (!1 === (r = t.call(e[i],i,e[i]))) break;
            return e
        },trim: function (e) {
            return null == e ? "" :(e + "").replace(s,"")
        },makeArray: function (e,t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? C.merge(n,"string" == typeof e ? [e] :e) :a.call(n,e)), n
        },inArray: function (e,t,n) {
            return null == t ? -1 :i.call(t,e,n)
        },merge: function (e,t) {
            for (var n = +t.length,r = 0,i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },grep: function (e,t,n) {
            for (var r,i = [],o = 0,s = e.length,a = !n; o < s; o++) (r = !t(e[o],o)) !== a && i.push(e[o]);
            return i
        },map: function (e,t,n) {
            var r,i = 0,o = e.length,s,a = [];
            if (p(e)) for (; i < o; i++) null != (r = t(e[i],i,n)) && a.push(r); else for (i in e) null != (r = t(e[i],i,n)) && a.push(r);
            return g.apply([],a)
        },guid: 1,proxy: function (e,t) {
            var n,r,i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), C.isFunction(e)) return r = c.call(arguments,2), (i = function () {
                return e.apply(t || this,r.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, i
        },now: Date.now,support: v
    }), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function (e,t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e,h,b,o,r,g,f,m,w,l,c,v,T,i,y,x,s,a,C,N = "sizzle" + 1 * new Date,k = n.document,E = 0,p = 0,u = se(),
            d = se(),S = se(),D = function (e,t) {
                return e === t && (c = !0), 0
            },j = 1 << 31,A = {}.hasOwnProperty,t = [],L = t.pop,q = t.push,H = t.push,O = t.slice,F = function (e,t) {
                for (var n = 0,r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W = M.replace("w","w#"),
            $ = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]",
            I = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            B = new RegExp(R + "+","g"),_ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"),
            z = new RegExp("^" + R + "*," + R + "*"),X = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]","g"),V = new RegExp(I),Y = new RegExp("^" + W + "$"),
            G = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w","w*") + ")"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
                bool: new RegExp("^(?:" + P + ")$","i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
            },Q = /^(?:input|select|textarea|button)$/i,J = /^h\d$/i,K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee = /[+~]/,te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"),re = function (e,t,n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t :r < 0 ? String.fromCharCode(r + 65536) :String.fromCharCode(r >> 10 | 55296,1023 & r | 56320)
            },ie = function () {
                v()
            };
        try {
            H.apply(t = O.call(k.childNodes),k.childNodes), t[k.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e,t) {
                    q.apply(e,O.call(t))
                } :function (e,t) {
                    for (var n = e.length,r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e,t,n,r) {
            var i,o,s,a,u,l,c,f,p,d;
            if ((t ? t.ownerDocument || t :k) !== T && v(t), n = n || [], a = (t = t || T).nodeType, "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!r && y) {
                if (11 !== a && (i = Z.exec(e))) if (s = i[1]) {
                    if (9 === a) {
                        if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && C(t,o) && o.id === s) return n.push(o), n
                } else {
                    if (i[2]) return H.apply(n,t.getElementsByTagName(e)), n;
                    if ((s = i[3]) && h.getElementsByClassName) return H.apply(n,t.getElementsByClassName(s)), n
                }
                if (h.qsa && (!x || !x.test(e))) {
                    if (f = c = N, p = t, d = 1 !== a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = g(e), (c = t.getAttribute("id")) ? f = c.replace(te,"\\$&") :t.setAttribute("id",f), f = "[id='" + f + "'] ", u = l.length; u--;) l[u] = f + me(l[u]);
                        p = ee.test(e) && he(t.parentNode) || t, d = l.join(",")
                    }
                    if (d) try {
                        return H.apply(n,p.querySelectorAll(d)), n
                    } catch (e) {
                    } finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(_,"$1"),t,n,r)
        }

        function se() {
            var n = [];

            function r(e,t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
            }

            return r
        }

        function ae(e) {
            return e[N] = !0, e
        }

        function ue(e) {
            var t = T.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e,t) {
            for (var n = e.split("|"),r = e.length; r--;) b.attrHandle[n[r]] = t
        }

        function ce(e,t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || j) - (~e.sourceIndex || j);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 :-1
        }

        function fe(n) {
            return function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && e.type === n
            }
        }

        function pe(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(s) {
            return ae(function (o) {
                return o = +o, ae(function (e,t) {
                    for (var n,r = s([],e.length,o),i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        for (e in h = oe.support = {}, r = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, v = oe.setDocument = function (e) {
            var t,n,u = e ? e.ownerDocument || e :k;
            return u !== T && 9 === u.nodeType && u.documentElement ? (i = (T = u).documentElement, (n = u.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload",ie,!1) :n.attachEvent && n.attachEvent("onunload",ie)), y = !r(u), h.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), h.getElementsByTagName = ue(function (e) {
                return e.appendChild(u.createComment("")), !e.getElementsByTagName("*").length
            }), h.getElementsByClassName = K.test(u.getElementsByClassName), h.getById = ue(function (e) {
                return i.appendChild(e).id = N, !u.getElementsByName || !u.getElementsByName(N).length
            }), h.getById ? (b.find.ID = function (e,t) {
                if (void 0 !== t.getElementById && y) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] :[]
                }
            }, b.filter.ID = function (e) {
                var t = e.replace(ne,re);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) :(delete b.find.ID, b.filter.ID = function (e) {
                var n = e.replace(ne,re);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), b.find.TAG = h.getElementsByTagName ? function (e,t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) :h.qsa ? t.querySelectorAll(e) :void 0
            } :function (e,t) {
                var n,r = [],i = 0,o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
            }, b.find.CLASS = h.getElementsByClassName && function (e,t) {
                if (y) return t.getElementsByClassName(e)
            }, s = [], x = [], (h.qsa = K.test(u.querySelectorAll)) && (ue(function (e) {
                i.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && x.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || x.push("\\[" + R + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + N + "-]").length || x.push("~="), e.querySelectorAll(":checked").length || x.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || x.push(".#.+[+~]")
            }), ue(function (e) {
                var t = u.createElement("input");
                t.setAttribute("type","hidden"), e.appendChild(t).setAttribute("name","D"), e.querySelectorAll("[name=d]").length && x.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || x.push(":enabled",":disabled"), e.querySelectorAll("*,:x"), x.push(",.*:")
            })), (h.matchesSelector = K.test(a = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && ue(function (e) {
                h.disconnectedMatch = a.call(e,"div"), a.call(e,"[s!='']:x"), s.push("!=",I)
            }), x = x.length && new RegExp(x.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(i.compareDocumentPosition), C = t || K.test(i.contains) ? function (e,t) {
                var n = 9 === e.nodeType ? e.documentElement :e,r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } :function (e,t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, D = t ? function (e,t) {
                if (e === t) return c = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) :1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === u || e.ownerDocument === k && C(k,e) ? -1 :t === u || t.ownerDocument === k && C(k,t) ? 1 :l ? F(l,e) - F(l,t) :0 :4 & n ? -1 :1)
            } :function (e,t) {
                if (e === t) return c = !0, 0;
                var n,r = 0,i = e.parentNode,o = t.parentNode,s = [e],a = [t];
                if (!i || !o) return e === u ? -1 :t === u ? 1 :i ? -1 :o ? 1 :l ? F(l,e) - F(l,t) :0;
                if (i === o) return ce(e,t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (; s[r] === a[r];) r++;
                return r ? ce(s[r],a[r]) :s[r] === k ? -1 :a[r] === k ? 1 :0
            }, u) :T
        }, oe.matches = function (e,t) {
            return oe(e,null,null,t)
        }, oe.matchesSelector = function (e,t) {
            if ((e.ownerDocument || e) !== T && v(e), t = t.replace(U,"='$1']"), h.matchesSelector && y && (!s || !s.test(t)) && (!x || !x.test(t))) try {
                var n = a.call(e,t);
                if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return 0 < oe(t,T,null,[e]).length
        }, oe.contains = function (e,t) {
            return (e.ownerDocument || e) !== T && v(e), C(e,t)
        }, oe.attr = function (e,t) {
            (e.ownerDocument || e) !== T && v(e);
            var n = b.attrHandle[t.toLowerCase()],r = n && A.call(b.attrHandle,t.toLowerCase()) ? n(e,t,!y) :void 0;
            return void 0 !== r ? r :h.attributes || !y ? e.getAttribute(t) :(r = e.getAttributeNode(t)) && r.specified ? r.value :null
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t,n = [],r = 0,i = 0;
            if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(D), c) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r],1)
            }
            return l = null, e
        }, o = oe.getText = function (e) {
            var t,n = "",r = 0,i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += o(t);
            return n
        }, (b = oe.selectors = {
            cacheLength: 50,
            createPseudo: ae,
            match: G,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode",first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling",first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ne,re), e[3] = (e[3] || e[4] || e[5] || "").replace(ne,re), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0,4)
                },CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0,3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && oe.error(e[0]), e
                },PSEUDO: function (e) {
                    var t,n = !e[6] && e[2];
                    return G.CHILD.test(e[0]) ? null :(e[3] ? e[2] = e[4] || e[5] || "" :n && V.test(n) && (t = g(n,!0)) && (t = n.indexOf(")",n.length - t) - n.length) && (e[0] = e[0].slice(0,t), e[2] = n.slice(0,t)), e.slice(0,3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ne,re).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } :function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },CLASS: function (e) {
                    var t = u[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && u(e,function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },ATTR: function (n,r,i) {
                    return function (e) {
                        var t = oe.attr(e,n);
                        return null == t ? "!=" === r :!r || (t += "", "=" === r ? t === i :"!=" === r ? t !== i :"^=" === r ? i && 0 === t.indexOf(i) :"*=" === r ? i && -1 < t.indexOf(i) :"$=" === r ? i && t.slice(-i.length) === i :"~=" === r ? -1 < (" " + t.replace(B," ") + " ").indexOf(i) :"|=" === r && (t === i || t.slice(0,i.length + 1) === i + "-"))
                    }
                },CHILD: function (d,e,t,h,g) {
                    var m = "nth" !== d.slice(0,3),v = "last" !== d.slice(-4),y = "of-type" === e;
                    return 1 === h && 0 === g ? function (e) {
                        return !!e.parentNode
                    } :function (e,t,n) {
                        var r,i,o,s,a,u,l = m !== v ? "nextSibling" :"previousSibling",c = e.parentNode,
                            f = y && e.nodeName.toLowerCase(),p = !n && !y;
                        if (c) {
                            if (m) {
                                for (; l;) {
                                    for (o = e; o = o[l];) if (y ? o.nodeName.toLowerCase() === f :1 === o.nodeType) return !1;
                                    u = l = "only" === d && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [v ? c.firstChild :c.lastChild], v && p) {
                                for (a = (r = (i = c[N] || (c[N] = {}))[d] || [])[0] === E && r[1], s = r[0] === E && r[2], o = a && c.childNodes[a]; o = ++a && o && o[l] || (s = a = 0) || u.pop();) if (1 === o.nodeType && ++s && o === e) {
                                    i[d] = [E,a,s];
                                    break
                                }
                            } else if (p && (r = (e[N] || (e[N] = {}))[d]) && r[0] === E) s = r[1]; else for (; (o = ++a && o && o[l] || (s = a = 0) || u.pop()) && ((y ? o.nodeName.toLowerCase() !== f :1 !== o.nodeType) || !++s || (p && ((o[N] || (o[N] = {}))[d] = [E,s]), o !== e));) ;
                            return (s -= g) === h || s % h == 0 && 0 <= s / h
                        }
                    }
                },PSEUDO: function (e,o) {
                    var t,s = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return s[N] ? s(o) :1 < s.length ? (t = [e,e,"",o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function (e,t) {
                        for (var n,r = s(e,o),i = r.length; i--;) e[n = F(e,r[i])] = !(t[n] = r[i])
                    }) :function (e) {
                        return s(e,0,t)
                    }) :s
                }
            },
            pseudos: {
                not: ae(function (e) {
                    var r = [],i = [],a = f(e.replace(_,"$1"));
                    return a[N] ? ae(function (e,t,n,r) {
                        for (var i,o = a(e,null,r,[]),s = e.length; s--;) (i = o[s]) && (e[s] = !(t[s] = i))
                    }) :function (e,t,n) {
                        return r[0] = e, a(r,null,n,i), r[0] = null, !i.pop()
                    }
                }),has: ae(function (t) {
                    return function (e) {
                        return 0 < oe(t,e).length
                    }
                }),contains: ae(function (t) {
                    return t = t.replace(ne,re), function (e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),lang: ae(function (n) {
                    return Y.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(ne,re).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = y ? e.lang :e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },root: function (e) {
                    return e === i
                },focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },enabled: function (e) {
                    return !1 === e.disabled
                },disabled: function (e) {
                    return !0 === e.disabled
                },checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                },parent: function (e) {
                    return !b.pseudos.empty(e)
                },header: function (e) {
                    return J.test(e.nodeName)
                },input: function (e) {
                    return Q.test(e.nodeName)
                },button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },first: de(function () {
                    return [0]
                }),last: de(function (e,t) {
                    return [t - 1]
                }),eq: de(function (e,t,n) {
                    return [n < 0 ? n + t :n]
                }),even: de(function (e,t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),odd: de(function (e,t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),lt: de(function (e,t,n) {
                    for (var r = n < 0 ? n + t :n; 0 <= --r;) e.push(r);
                    return e
                }),gt: de(function (e,t,n) {
                    for (var r = n < 0 ? n + t :n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq, {radio: !0,checkbox: !0,file: !0,password: !0,image: !0}) b.pseudos[e] = fe(e);
        for (e in {submit: !0,reset: !0}) b.pseudos[e] = pe(e);

        function ge() {
        }

        function me(e) {
            for (var t = 0,n = e.length,r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ve(s,e,t) {
            var a = e.dir,u = t && "parentNode" === a,l = p++;
            return e.first ? function (e,t,n) {
                for (; e = e[a];) if (1 === e.nodeType || u) return s(e,t,n)
            } :function (e,t,n) {
                var r,i,o = [E,l];
                if (n) {
                    for (; e = e[a];) if ((1 === e.nodeType || u) && s(e,t,n)) return !0
                } else for (; e = e[a];) if (1 === e.nodeType || u) {
                    if ((r = (i = e[N] || (e[N] = {}))[a]) && r[0] === E && r[1] === l) return o[2] = r[2];
                    if ((i[a] = o)[2] = s(e,t,n)) return !0
                }
            }
        }

        function ye(i) {
            return 1 < i.length ? function (e,t,n) {
                for (var r = i.length; r--;) if (!i[r](e,t,n)) return !1;
                return !0
            } :i[0]
        }

        function xe(e,t,n) {
            for (var r = 0,i = t.length; r < i; r++) oe(e,t[r],n);
            return n
        }

        function be(e,t,n,r,i) {
            for (var o,s = [],a = 0,u = e.length,l = null != t; a < u; a++) (o = e[a]) && (n && !n(o,r,i) || (s.push(o), l && t.push(a)));
            return s
        }

        function we(d,h,g,m,v,e) {
            return m && !m[N] && (m = we(m)), v && !v[N] && (v = we(v,e)), ae(function (e,t,n,r) {
                var i,o,s,a = [],u = [],l = t.length,c = e || xe(h || "*",n.nodeType ? [n] :n,[]),
                    f = !d || !e && h ? c :be(c,a,d,n,r),p = g ? v || (e ? d :l || m) ? [] :t :f;
                if (g && g(f,p,n,r), m) for (i = be(p,u), m(i,[],n,r), o = i.length; o--;) (s = i[o]) && (p[u[o]] = !(f[u[o]] = s));
                if (e) {
                    if (v || d) {
                        if (v) {
                            for (i = [], o = p.length; o--;) (s = p[o]) && i.push(f[o] = s);
                            v(null,p = [],i,r)
                        }
                        for (o = p.length; o--;) (s = p[o]) && -1 < (i = v ? F(e,s) :a[o]) && (e[i] = !(t[i] = s))
                    }
                } else p = be(p === t ? p.splice(l,p.length) :p), v ? v(null,t,p,r) :H.apply(t,p)
            })
        }

        function Te(e) {
            for (var i,t,n,r = e.length,o = b.relative[e[0].type],s = o || b.relative[" "],a = o ? 1 :0,u = ve(function (e) {
                return e === i
            },s,!0),l = ve(function (e) {
                return -1 < F(i,e)
            },s,!0),c = [function (e,t,n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e,t,n) :l(e,t,n));
                return i = null, r
            }]; a < r; a++) if (t = b.relative[e[a].type]) c = [ve(ye(c),t)]; else {
                if ((t = b.filter[e[a].type].apply(null,e[a].matches))[N]) {
                    for (n = ++a; n < r && !b.relative[e[n].type]; n++) ;
                    return we(1 < a && ye(c),1 < a && me(e.slice(0,a - 1).concat({value: " " === e[a - 2].type ? "*" :""})).replace(_,"$1"),t,a < n && Te(e.slice(a,n)),n < r && Te(e = e.slice(n)),n < r && me(e))
                }
                c.push(t)
            }
            return ye(c)
        }

        function Ce(m,v) {
            var y = 0 < v.length,x = 0 < m.length,e = function (e,t,n,r,i) {
                var o,s,a,u = 0,l = "0",c = e && [],f = [],p = w,d = e || x && b.find.TAG("*",i),
                    h = E += null == p ? 1 :Math.random() || .1,g = d.length;
                for (i && (w = t !== T && t); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        for (s = 0; a = m[s++];) if (a(o,t,n)) {
                            r.push(o);
                            break
                        }
                        i && (E = h)
                    }
                    y && ((o = !a && o) && u--, e && c.push(o))
                }
                if (u += l, y && l !== u) {
                    for (s = 0; a = v[s++];) a(c,f,t,n);
                    if (e) {
                        if (0 < u) for (; l--;) c[l] || f[l] || (f[l] = L.call(r));
                        f = be(f)
                    }
                    H.apply(r,f), i && !e && 0 < f.length && 1 < u + v.length && oe.uniqueSort(r)
                }
                return i && (E = h, w = p), c
            };
            return y ? ae(e) :e
        }

        return ge.prototype = b.filters = b.pseudos, b.setFilters = new ge, g = oe.tokenize = function (e,t) {
            var n,r,i,o,s,a,u,l = d[e + " "];
            if (l) return t ? 0 :l.slice(0);
            for (s = e, a = [], u = b.preFilter; s;) {
                for (o in n && !(r = z.exec(s)) || (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = X.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(_," ")
                }), s = s.slice(n.length)), b.filter) !(r = G[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length :s ? oe.error(e) :d(e,a).slice(0)
        }, f = oe.compile = function (e,t) {
            var n,r = [],i = [],o = S[e + " "];
            if (!o) {
                for (t || (t = g(e)), n = t.length; n--;) (o = Te(t[n]))[N] ? r.push(o) :i.push(o);
                (o = S(e,Ce(i,r))).selector = e
            }
            return o
        }, m = oe.select = function (e,t,n,r) {
            var i,o,s,a,u,l = "function" == typeof e && e,c = !r && g(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && h.getById && 9 === t.nodeType && y && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(s.matches[0].replace(ne,re),t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = G.needsContext.test(e) ? 0 :o.length; i-- && (s = o[i], !b.relative[a = s.type]);) if ((u = b.find[a]) && (r = u(s.matches[0].replace(ne,re),ee.test(o[0].type) && he(t.parentNode) || t))) {
                    if (o.splice(i,1), !(e = r.length && me(o))) return H.apply(n,r), n;
                    break
                }
            }
            return (l || f(e,c))(r,t,!y,n,ee.test(e) && he(t.parentNode) || t), n
        }, h.sortStable = N.split("").sort(D).join("") === N, h.detectDuplicates = !!c, v(), h.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("div"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width",function (e,t,n) {
            if (!n) return e.getAttribute(t,"type" === t.toLowerCase() ? 1 :2)
        }), h.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value",""), "" === e.firstChild.getAttribute("value")
        }) || le("value",function (e,t,n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P,function (e,t,n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() :(r = e.getAttributeNode(t)) && r.specified ? r.value :null
        }), oe
    }(h);
    C.find = d, C.expr = d.selectors, C.expr[":"] = C.expr.pseudos, C.unique = d.uniqueSort, C.text = d.getText, C.isXMLDoc = d.isXML, C.contains = d.contains;
    var x = C.expr.match.needsContext,b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,w = /^.[^:#\[\.,]*$/;

    function T(e,n,r) {
        if (C.isFunction(n)) return C.grep(e,function (e,t) {
            return !!n.call(e,t,e) !== r
        });
        if (n.nodeType) return C.grep(e,function (e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (w.test(n)) return C.filter(n,e,r);
            n = C.filter(n,e)
        }
        return C.grep(e,function (e) {
            return 0 <= i.call(n,e) !== r
        })
    }

    C.filter = function (e,t,n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r,e) ? [r] :[] :C.find.matches(e,C.grep(t,function (e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function (e) {
            var t,n = this.length,r = [],i = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                for (t = 0; t < n; t++) if (C.contains(i[t],this)) return !0
            }));
            for (t = 0; t < n; t++) C.find(e,i[t],r);
            return (r = this.pushStack(1 < n ? C.unique(r) :r)).selector = this.selector ? this.selector + " " + e :e, r
        },filter: function (e) {
            return this.pushStack(T(this,e || [],!1))
        },not: function (e) {
            return this.pushStack(T(this,e || [],!0))
        },is: function (e) {
            return !!T(this,"string" == typeof e && x.test(e) ? C(e) :e || [],!1).length
        }
    });
    var N,k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,E;
    (C.fn.init = function (e,t) {
        var n,r;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) :C.isFunction(e) ? void 0 !== N.ready ? N.ready(e) :e(C) :(void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e,this));
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null,e,null] :k.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || N).find(e) :this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof C ? t[0] :t, C.merge(this,C.parseHTML(n[1],t && t.nodeType ? t.ownerDocument || t :y,!0)), b.test(n[1]) && C.isPlainObject(t)) for (n in t) C.isFunction(this[n]) ? this[n](t[n]) :this.attr(n,t[n]);
            return this
        }
        return (r = y.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = y, this.selector = e, this
    }).prototype = C.fn, N = C(y);
    var S = /^(?:parents|prev(?:Until|All))/,D = {children: !0,contents: !0,next: !0,prev: !0};

    function j(e,t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    C.extend({
        dir: function (e,t,n) {
            for (var r = [],i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && C(e).is(n)) break;
                r.push(e)
            }
            return r
        },sibling: function (e,t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), C.fn.extend({
        has: function (e) {
            var t = C(e,this),n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (C.contains(this,t[e])) return !0
            })
        },closest: function (e,t) {
            for (var n,r = 0,i = this.length,o = [],s = x.test(e) || "string" != typeof e ? C(e,t || this.context) :0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) :1 === n.nodeType && C.find.matchesSelector(n,e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? C.unique(o) :o)
        },index: function (e) {
            return e ? "string" == typeof e ? i.call(C(e),this[0]) :i.call(this,e.jquery ? e[0] :e) :this[0] && this[0].parentNode ? this.first().prevAll().length :-1
        },add: function (e,t) {
            return this.pushStack(C.unique(C.merge(this.get(),C(e,t))))
        },addBack: function (e) {
            return this.add(null == e ? this.prevObject :this.prevObject.filter(e))
        }
    }), C.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t :null
        },parents: function (e) {
            return C.dir(e,"parentNode")
        },parentsUntil: function (e,t,n) {
            return C.dir(e,"parentNode",n)
        },next: function (e) {
            return j(e,"nextSibling")
        },prev: function (e) {
            return j(e,"previousSibling")
        },nextAll: function (e) {
            return C.dir(e,"nextSibling")
        },prevAll: function (e) {
            return C.dir(e,"previousSibling")
        },nextUntil: function (e,t,n) {
            return C.dir(e,"nextSibling",n)
        },prevUntil: function (e,t,n) {
            return C.dir(e,"previousSibling",n)
        },siblings: function (e) {
            return C.sibling((e.parentNode || {}).firstChild,e)
        },children: function (e) {
            return C.sibling(e.firstChild)
        },contents: function (e) {
            return e.contentDocument || C.merge([],e.childNodes)
        }
    },function (r,i) {
        C.fn[r] = function (e,t) {
            var n = C.map(this,i,e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t,n)), 1 < this.length && (D[r] || C.unique(n), S.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var A = /\S+/g,L = {},q;

    function H(e) {
        var n = L[e] = {};
        return C.each(e.match(A) || [],function (e,t) {
            n[t] = !0
        }), n
    }

    function O() {
        y.removeEventListener("DOMContentLoaded",O,!1), h.removeEventListener("load",O,!1), C.ready()
    }

    C.Callbacks = function (i) {
        i = "string" == typeof i ? L[i] || H(i) :C.extend({},i);
        var t,n,r,o,s,a,u = [],l = !i.once && [],c = function (e) {
            for (t = i.memory && e, n = !0, a = o || 0, o = 0, s = u.length, r = !0; u && a < s; a++) if (!1 === u[a].apply(e[0],e[1]) && i.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, u && (l ? l.length && c(l.shift()) :t ? u = [] :f.disable())
        },f = {
            add: function () {
                if (u) {
                    var e = u.length;
                    !function r(e) {
                        C.each(e,function (e,t) {
                            var n = C.type(t);
                            "function" === n ? i.unique && f.has(t) || u.push(t) :t && t.length && "string" !== n && r(t)
                        })
                    }(arguments), r ? s = u.length :t && (o = e, c(t))
                }
                return this
            },remove: function () {
                return u && C.each(arguments,function (e,t) {
                    for (var n; -1 < (n = C.inArray(t,u,n));) u.splice(n,1), r && (n <= s && s--, n <= a && a--)
                }), this
            },has: function (e) {
                return e ? -1 < C.inArray(e,u) :!(!u || !u.length)
            },empty: function () {
                return u = [], s = 0, this
            },disable: function () {
                return u = l = t = void 0, this
            },disabled: function () {
                return !u
            },lock: function () {
                return l = void 0, t || f.disable(), this
            },locked: function () {
                return !l
            },fireWith: function (e,t) {
                return !u || n && !l || (t = [e,(t = t || []).slice ? t.slice() :t], r ? l.push(t) :c(t)), this
            },fire: function () {
                return f.fireWith(this,arguments), this
            },fired: function () {
                return !!n
            }
        };
        return f
    }, C.extend({
        Deferred: function (e) {
            var o = [["resolve","done",C.Callbacks("once memory"),"resolved"],["reject","fail",C.Callbacks("once memory"),"rejected"],["notify","progress",C.Callbacks("memory")]],
                i = "pending",s = {
                    state: function () {
                        return i
                    },always: function () {
                        return a.done(arguments).fail(arguments), this
                    },then: function () {
                        var i = arguments;
                        return C.Deferred(function (r) {
                            C.each(o,function (e,t) {
                                var n = C.isFunction(i[e]) && i[e];
                                a[t[1]](function () {
                                    var e = n && n.apply(this,arguments);
                                    e && C.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) :r[t[0] + "With"](this === s ? r.promise() :this,n ? [e] :arguments)
                                })
                            }), i = null
                        }).promise()
                    },promise: function (e) {
                        return null != e ? C.extend(e,s) :s
                    }
                },a = {};
            return s.pipe = s.then, C.each(o,function (e,t) {
                var n = t[2],r = t[3];
                s[t[1]] = n.add, r && n.add(function () {
                    i = r
                },o[1 ^ e][2].disable,o[2][2].lock), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? s :this,arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a,a), a
        },when: function (e) {
            var t = 0,n = c.call(arguments),r = n.length,i = 1 !== r || e && C.isFunction(e.promise) ? r :0,
                o = 1 === i ? e :C.Deferred(),s = function (t,n,r) {
                    return function (e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) :e, r === a ? o.notifyWith(n,r) :--i || o.resolveWith(n,r)
                    }
                },a,u,l;
            if (1 < r) for (a = new Array(r), u = new Array(r), l = new Array(r); t < r; t++) n[t] && C.isFunction(n[t].promise) ? n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)) :--i;
            return i || o.resolveWith(l,n), o.promise()
        }
    }), C.fn.ready = function (e) {
        return C.ready.promise().done(e), this
    }, C.extend({
        isReady: !1,readyWait: 1,holdReady: function (e) {
            e ? C.readyWait++ :C.ready(!0)
        },ready: function (e) {
            (!0 === e ? --C.readyWait :C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || (q.resolveWith(y,[C]), C.fn.triggerHandler && (C(y).triggerHandler("ready"), C(y).off("ready")))
        }
    }), C.ready.promise = function (e) {
        return q || (q = C.Deferred(), "complete" === y.readyState ? setTimeout(C.ready) :(y.addEventListener("DOMContentLoaded",O,!1), h.addEventListener("load",O,!1))), q.promise(e)
    }, C.ready.promise();
    var F = C.access = function (e,t,n,r,i,o,s) {
        var a = 0,u = e.length,l = null == n;
        if ("object" === C.type(n)) for (a in i = !0, n) C.access(e,t,a,n[a],!0,o,s); else if (void 0 !== r && (i = !0, C.isFunction(r) || (s = !0), l && (t = s ? (t.call(e,r), null) :(l = t, function (e,t,n) {
            return l.call(C(e),n)
        })), t)) for (; a < u; a++) t(e[a],n,s ? r :r.call(e[a],a,t(e[a],n)));
        return i ? e :l ? t.call(e) :u ? t(e[0],n) :o
    };

    function P() {
        Object.defineProperty(this.cache = {},0,{
            get: function () {
                return {}
            }
        }), this.expando = C.expando + P.uid++
    }

    C.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, P.uid = 1, P.accepts = C.acceptData, P.prototype = {
        key: function (t) {
            if (!P.accepts(t)) return 0;
            var n = {},r = t[this.expando];
            if (!r) {
                r = P.uid++;
                try {
                    n[this.expando] = {value: r}, Object.defineProperties(t,n)
                } catch (e) {
                    n[this.expando] = r, C.extend(t,n)
                }
            }
            return this.cache[r] || (this.cache[r] = {}), r
        },set: function (e,t,n) {
            var r,i = this.key(e),o = this.cache[i];
            if ("string" == typeof t) o[t] = n; else if (C.isEmptyObject(o)) C.extend(this.cache[i],t); else for (r in t) o[r] = t[r];
            return o
        },get: function (e,t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n :n[t]
        },access: function (e,t,n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e,t)) ? r :this.get(e,C.camelCase(t)) :(this.set(e,t,n), void 0 !== n ? n :t)
        },remove: function (e,t) {
            var n,r,i,o = this.key(e),s = this.cache[o];
            if (void 0 === t) this.cache[o] = {}; else {
                n = (r = C.isArray(t) ? t.concat(t.map(C.camelCase)) :(i = C.camelCase(t), t in s ? [t,i] :(r = i) in s ? [r] :r.match(A) || [])).length;
                for (; n--;) delete s[r[n]]
            }
        },hasData: function (e) {
            return !C.isEmptyObject(this.cache[e[this.expando]] || {})
        },discard: function (e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var R = new P,M = new P,W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,$ = /([A-Z])/g;

    function I(e,t,n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace($,"-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null :+n + "" === n ? +n :W.test(n) ? C.parseJSON(n) :n)
            } catch (e) {
            }
            M.set(e,t,n)
        } else n = void 0;
        return n
    }

    C.extend({
        hasData: function (e) {
            return M.hasData(e) || R.hasData(e)
        },data: function (e,t,n) {
            return M.access(e,t,n)
        },removeData: function (e,t) {
            M.remove(e,t)
        },_data: function (e,t,n) {
            return R.access(e,t,n)
        },_removeData: function (e,t) {
            R.remove(e,t)
        }
    }), C.fn.extend({
        data: function (r,e) {
            var t,n,i,o = this[0],s = o && o.attributes;
            if (void 0 !== r) return "object" == typeof r ? this.each(function () {
                M.set(this,r)
            }) :F(this,function (t) {
                var e,n = C.camelCase(r);
                if (o && void 0 === t) return void 0 !== (e = M.get(o,r)) ? e :void 0 !== (e = M.get(o,n)) ? e :void 0 !== (e = I(o,n,void 0)) ? e :void 0;
                this.each(function () {
                    var e = M.get(this,n);
                    M.set(this,n,t), -1 !== r.indexOf("-") && void 0 !== e && M.set(this,r,t)
                })
            },null,e,1 < arguments.length,null,!0);
            if (this.length && (i = M.get(o), 1 === o.nodeType && !R.get(o,"hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (n = s[t].name).indexOf("data-") && (n = C.camelCase(n.slice(5)), I(o,n,i[n]));
                R.set(o,"hasDataAttrs",!0)
            }
            return i
        },removeData: function (e) {
            return this.each(function () {
                M.remove(this,e)
            })
        }
    }), C.extend({
        queue: function (e,t,n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = R.get(e,t), n && (!r || C.isArray(n) ? r = R.access(e,t,C.makeArray(n)) :r.push(n)), r || []
        },dequeue: function (e,t) {
            t = t || "fx";
            var n = C.queue(e,t),r = n.length,i = n.shift(),o = C._queueHooks(e,t),s = function () {
                C.dequeue(e,t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e,s,o)), !r && o && o.empty.fire()
        },_queueHooks: function (e,t) {
            var n = t + "queueHooks";
            return R.get(e,n) || R.access(e,n,{
                empty: C.Callbacks("once memory").add(function () {
                    R.remove(e,[t + "queue",n])
                })
            })
        }
    }), C.fn.extend({
        queue: function (t,n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0],t) :void 0 === n ? this :this.each(function () {
                var e = C.queue(this,t,n);
                C._queueHooks(this,t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this,t)
            })
        },dequeue: function (e) {
            return this.each(function () {
                C.dequeue(this,e)
            })
        },clearQueue: function (e) {
            return this.queue(e || "fx",[])
        },promise: function (e,t) {
            var n,r = 1,i = C.Deferred(),o = this,s = this.length,a = function () {
                --r || i.resolveWith(o,[o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (n = R.get(o[s],e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_ = ["Top","Right","Bottom","Left"],z = function (e,t) {
        return e = t || e, "none" === C.css(e,"display") || !C.contains(e.ownerDocument,e)
    },X = /^(?:checkbox|radio)$/i,U,V,Y;
    V = y.createDocumentFragment().appendChild(y.createElement("div")), (Y = y.createElement("input")).setAttribute("type","radio"), Y.setAttribute("checked","checked"), Y.setAttribute("name","t"), V.appendChild(Y), v.checkClone = V.cloneNode(!0).cloneNode(!0).lastChild.checked, V.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!V.cloneNode(!0).lastChild.defaultValue;
    var G = "undefined";
    v.focusinBubbles = "onfocusin" in h;
    var Q = /^key/,J = /^(?:mouse|pointer|contextmenu)|click/,K = /^(?:focusinfocus|focusoutblur)$/,
        Z = /^([^.]*)(?:\.(.+)|)$/;

    function ee() {
        return !0
    }

    function te() {
        return !1
    }

    function ne() {
        try {
            return y.activeElement
        } catch (e) {
        }
    }

    C.event = {
        global: {},
        add: function (t,e,n,r,i) {
            var o,s,a,u,l,c,f,p,d,h,g,m = R.get(t);
            if (m) for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = C.guid++), (u = m.events) || (u = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                return typeof C !== G && C.event.triggered !== e.type ? C.event.dispatch.apply(t,arguments) :void 0
            }), l = (e = (e || "").match(A) || [""]).length; l--;) d = g = (a = Z.exec(e[l]) || [])[1], h = (a[2] || "").split(".").sort(), d && (f = C.event.special[d] || {}, d = (i ? f.delegateType :f.bindType) || d, f = C.event.special[d] || {}, c = C.extend({
                type: d,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && C.expr.match.needsContext.test(i),
                namespace: h.join(".")
            },o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t,r,h,s) || t.addEventListener && t.addEventListener(d,s,!1)), f.add && (f.add.call(t,c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++,0,c) :p.push(c), C.event.global[d] = !0)
        },
        remove: function (e,t,n,r,i) {
            var o,s,a,u,l,c,f,p,d,h,g,m = R.hasData(e) && R.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(A) || [""]).length; l--;) if (d = g = (a = Z.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), d) {
                    for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType :f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o,1), c.selector && p.delegateCount--, f.remove && f.remove.call(e,c));
                    s && !p.length && (f.teardown && !1 !== f.teardown.call(e,h,m.handle) || C.removeEvent(e,d,m.handle), delete u[d])
                } else for (d in u) C.event.remove(e,d + t[l],n,r,!0);
                C.isEmptyObject(u) && (delete m.handle, R.remove(e,"events"))
            }
        },
        trigger: function (e,t,n,r) {
            var i,o,s,a,u,l,c,f = [n || y],p = m.call(e,"type") ? e.type :e,
                d = m.call(e,"namespace") ? e.namespace.split(".") :[];
            if (o = s = n = n || y, 3 !== n.nodeType && 8 !== n.nodeType && !K.test(p + C.event.triggered) && (0 <= p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e :new C.Event(p,"object" == typeof e && e)).isTrigger = r ? 2 :3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] :C.makeArray(t,[e]), c = C.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n,t))) {
                if (!r && !c.noBubble && !C.isWindow(n)) {
                    for (a = c.delegateType || p, K.test(a + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), s = o;
                    s === (n.ownerDocument || y) && f.push(s.defaultView || s.parentWindow || h)
                }
                for (i = 0; (o = f[i++]) && !e.isPropagationStopped();) e.type = 1 < i ? a :c.bindType || p, (l = (R.get(o,"events") || {})[e.type] && R.get(o,"handle")) && l.apply(o,t), (l = u && o[u]) && l.apply && C.acceptData(o) && (e.result = l.apply(o,t), !1 === e.result && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(),t) || !C.acceptData(n) || u && C.isFunction(n[p]) && !C.isWindow(n) && ((s = n[u]) && (n[u] = null), n[C.event.triggered = p](), C.event.triggered = void 0, s && (n[u] = s)), e.result
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t,n,r,i,o,s = [],a = c.call(arguments),u = (R.get(this,"events") || {})[e.type] || [],
                l = C.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this,e)) {
                for (s = C.event.handlers.call(this,e,u), t = 0; (i = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((C.event.special[o.origType] || {}).handle || o.handler).apply(i.elem,a)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this,e), e.result
            }
        },
        handlers: function (e,t) {
            var n,r,i,o,s = [],a = t.delegateCount,u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (!0 !== u.disabled || "click" !== e.type) {
                for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? 0 <= C(i,this).index(u) :C.find(i,this,null,[u]).length), r[i] && r.push(o);
                r.length && s.push({elem: u,handlers: r})
            }
            return a < t.length && s.push({elem: this,handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),filter: function (e,t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e,t) {
                var n,r,i,o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || y).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 :2 & o ? 3 :4 & o ? 2 :0), e
            }
        },
        fix: function (e) {
            if (e[C.expando]) return e;
            var t,n,r,i = e.type,o = e,s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = J.test(i) ? this.mouseHooks :Q.test(i) ? this.keyHooks :{}), r = s.props ? this.props.concat(s.props) :this.props, e = new C.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = y), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e,o) :e
        },
        special: {
            load: {noBubble: !0},focus: {
                trigger: function () {
                    if (this !== ne() && this.focus) return this.focus(), !1
                },delegateType: "focusin"
            },blur: {
                trigger: function () {
                    if (this === ne() && this.blur) return this.blur(), !1
                },delegateType: "focusout"
            },click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && C.nodeName(this,"input")) return this.click(), !1
                },_default: function (e) {
                    return C.nodeName(e.target,"a")
                }
            },beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e,t,n,r) {
            var i = C.extend(new C.Event,n,{type: e,isSimulated: !0,originalEvent: {}});
            r ? C.event.trigger(i,null,t) :C.event.dispatch.call(t,i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, C.removeEvent = function (e,t,n) {
        e.removeEventListener && e.removeEventListener(t,n,!1)
    }, C.Event = function (e,t) {
        if (!(this instanceof C.Event)) return new C.Event(e,t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ee :te) :this.type = e, t && C.extend(this,t), this.timeStamp = e && e.timeStamp || C.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        isDefaultPrevented: te,
        isPropagationStopped: te,
        isImmediatePropagationStopped: te,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ee, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ee, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ee, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },function (e,o) {
        C.event.special[e] = {
            delegateType: o,bindType: o,handle: function (e) {
                var t,n = this,r = e.relatedTarget,i = e.handleObj;
                return r && (r === n || C.contains(n,r)) || (e.type = i.origType, t = i.handler.apply(this,arguments), e.type = o), t
            }
        }
    }), v.focusinBubbles || C.each({focus: "focusin",blur: "focusout"},function (n,r) {
        var i = function (e) {
            C.event.simulate(r,e.target,C.event.fix(e),!0)
        };
        C.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this,t = R.access(e,r);
                t || e.addEventListener(n,i,!0), R.access(e,r,(t || 0) + 1)
            },teardown: function () {
                var e = this.ownerDocument || this,t = R.access(e,r) - 1;
                t ? R.access(e,r,t) :(e.removeEventListener(n,i,!0), R.remove(e,r))
            }
        }
    }), C.fn.extend({
        on: function (e,t,n,r,i) {
            var o,s;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t, t = void 0), e) this.on(s,t,n,e[s],i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) :null == r && ("string" == typeof t ? (r = n, n = void 0) :(r = n, n = t, t = void 0)), !1 === r) r = te; else if (!r) return this;
            return 1 === i && (o = r, (r = function (e) {
                return C().off(e), o.apply(this,arguments)
            }).guid = o.guid || (o.guid = C.guid++)), this.each(function () {
                C.event.add(this,e,r,n,t)
            })
        },one: function (e,t,n,r) {
            return this.on(e,t,n,r,1)
        },off: function (e,t,n) {
            var r,i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace :r.origType,r.selector,r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = te), this.each(function () {
                C.event.remove(this,e,n,t)
            });
            for (i in e) this.off(i,t,e[i]);
            return this
        },trigger: function (e,t) {
            return this.each(function () {
                C.event.trigger(e,t,this)
            })
        },triggerHandler: function (e,t) {
            var n = this[0];
            if (n) return C.event.trigger(e,t,n,!0)
        }
    });
    var re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ie = /<([\w:]+)/,
        oe = /<|&#?\w+;/,se = /<(?:script|style|link)/i,ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ue = /^$|\/(?:java|ecma)script/i,le = /^true\/(.*)/,ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,fe = {
            option: [1,"<select multiple='multiple'>","</select>"],
            thead: [1,"<table>","</table>"],
            col: [2,"<table><colgroup>","</colgroup></table>"],
            tr: [2,"<table><tbody>","</tbody></table>"],
            td: [3,"<table><tbody><tr>","</tr></tbody></table>"],
            _default: [0,"",""]
        };

    function pe(e,t) {
        return C.nodeName(e,"table") && C.nodeName(11 !== t.nodeType ? t :t.firstChild,"tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) :e
    }

    function de(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function he(e) {
        var t = le.exec(e.type);
        return t ? e.type = t[1] :e.removeAttribute("type"), e
    }

    function ge(e,t) {
        for (var n = 0,r = e.length; n < r; n++) R.set(e[n],"globalEval",!t || R.get(t[n],"globalEval"))
    }

    function me(e,t) {
        var n,r,i,o,s,a,u,l;
        if (1 === t.nodeType) {
            if (R.hasData(e) && (o = R.access(e), s = R.set(t,o), l = o.events)) for (i in delete s.handle, s.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) C.event.add(t,i,l[i][n]);
            M.hasData(e) && (a = M.access(e), u = C.extend({},a), M.set(t,u))
        }
    }

    function ve(e,t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") :e.querySelectorAll ? e.querySelectorAll(t || "*") :[];
        return void 0 === t || t && C.nodeName(e,t) ? C.merge([e],n) :n
    }

    function ye(e,t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && X.test(e.type) ? t.checked = e.checked :"input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, fe.th = fe.td, C.extend({
        clone: function (e,t,n) {
            var r,i,o,s,a = e.cloneNode(!0),u = C.contains(e.ownerDocument,e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (s = ve(a), r = 0, i = (o = ve(e)).length; r < i; r++) ye(o[r],s[r]);
            if (t) if (n) for (o = o || ve(e), s = s || ve(a), r = 0, i = o.length; r < i; r++) me(o[r],s[r]); else me(e,a);
            return 0 < (s = ve(a,"script")).length && ge(s,!u && ve(e,"script")), a
        },buildFragment: function (e,t,n,r) {
            for (var i,o,s,a,u,l,c = t.createDocumentFragment(),f = [],p = 0,d = e.length; p < d; p++) if ((i = e[p]) || 0 === i) if ("object" === C.type(i)) C.merge(f,i.nodeType ? [i] :i); else if (oe.test(i)) {
                for (o = o || c.appendChild(t.createElement("div")), s = (ie.exec(i) || ["",""])[1].toLowerCase(), a = fe[s] || fe._default, o.innerHTML = a[1] + i.replace(re,"<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                C.merge(f,o.childNodes), (o = c.firstChild).textContent = ""
            } else f.push(t.createTextNode(i));
            for (c.textContent = "", p = 0; i = f[p++];) if ((!r || -1 === C.inArray(i,r)) && (u = C.contains(i.ownerDocument,i), o = ve(c.appendChild(i),"script"), u && ge(o), n)) for (l = 0; i = o[l++];) ue.test(i.type || "") && n.push(i);
            return c
        },cleanData: function (e) {
            for (var t,n,r,i,o = C.event.special,s = 0; void 0 !== (n = e[s]); s++) {
                if (C.acceptData(n) && (i = n[R.expando]) && (t = R.cache[i])) {
                    if (t.events) for (r in t.events) o[r] ? C.event.remove(n,r) :C.removeEvent(n,r,t.handle);
                    R.cache[i] && delete R.cache[i]
                }
                delete M.cache[n[M.expando]]
            }
        }
    }), C.fn.extend({
        text: function (e) {
            return F(this,function (e) {
                return void 0 === e ? C.text(this) :this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            },null,e,arguments.length)
        },append: function () {
            return this.domManip(arguments,function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || pe(this,e).appendChild(e)
            })
        },prepend: function () {
            return this.domManip(arguments,function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = pe(this,e);
                    t.insertBefore(e,t.firstChild)
                }
            })
        },before: function () {
            return this.domManip(arguments,function (e) {
                this.parentNode && this.parentNode.insertBefore(e,this)
            })
        },after: function () {
            return this.domManip(arguments,function (e) {
                this.parentNode && this.parentNode.insertBefore(e,this.nextSibling)
            })
        },remove: function (e,t) {
            for (var n,r = e ? C.filter(e,this) :this,i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || C.cleanData(ve(n)), n.parentNode && (t && C.contains(n.ownerDocument,n) && ge(ve(n,"script")), n.parentNode.removeChild(n));
            return this
        },empty: function () {
            for (var e,t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(ve(e,!1)), e.textContent = "");
            return this
        },clone: function (e,t) {
            return e = null != e && e, t = null == t ? e :t, this.map(function () {
                return C.clone(this,e,t)
            })
        },html: function (e) {
            return F(this,function (e) {
                var t = this[0] || {},n = 0,r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !se.test(e) && !fe[(ie.exec(e) || ["",""])[1].toLowerCase()]) {
                    e = e.replace(re,"<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(ve(t,!1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            },null,e,arguments.length)
        },replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments,function (e) {
                t = this.parentNode, C.cleanData(ve(this)), t && t.replaceChild(e,this)
            }), t && (t.length || t.nodeType) ? this :this.remove()
        },detach: function (e) {
            return this.remove(e,!0)
        },domManip: function (n,r) {
            n = g.apply([],n);
            var e,t,i,o,s,a,u = 0,l = this.length,c = this,f = l - 1,p = n[0],d = C.isFunction(p);
            if (d || 1 < l && "string" == typeof p && !v.checkClone && ae.test(p)) return this.each(function (e) {
                var t = c.eq(e);
                d && (n[0] = p.call(this,e,t.html())), t.domManip(n,r)
            });
            if (l && (t = (e = C.buildFragment(n,this[0].ownerDocument,!1,this)).firstChild, 1 === e.childNodes.length && (e = t), t)) {
                for (o = (i = C.map(ve(e,"script"),de)).length; u < l; u++) s = e, u !== f && (s = C.clone(s,!0,!0), o && C.merge(i,ve(s,"script"))), r.call(this[u],s,u);
                if (o) for (a = i[i.length - 1].ownerDocument, C.map(i,he), u = 0; u < o; u++) s = i[u], ue.test(s.type || "") && !R.access(s,"globalEval") && C.contains(a,s) && (s.src ? C._evalUrl && C._evalUrl(s.src) :C.globalEval(s.textContent.replace(ce,"")))
            }
            return this
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },function (e,s) {
        C.fn[e] = function (e) {
            for (var t,n = [],r = C(e),i = r.length - 1,o = 0; o <= i; o++) t = o === i ? this :this.clone(!0), C(r[o])[s](t), a.apply(n,t.get());
            return this.pushStack(n)
        }
    });
    var xe,be = {};

    function we(e,t) {
        var n,r = C(t.createElement(e)).appendTo(t.body),
            i = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0])) ? n.display :C.css(r[0],"display");
        return r.detach(), i
    }

    function Te(e) {
        var t = y,n = be[e];
        return n || ("none" !== (n = we(e,t)) && n || ((t = (xe = (xe || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = we(e,t), xe.detach()), be[e] = n), n
    }

    var Ce = /^margin/,Ne = new RegExp("^(" + B + ")(?!px)[a-z%]+$","i"),ke = function (e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e,null) :h.getComputedStyle(e,null)
    };

    function Ee(e,t,n) {
        var r,i,o,s,a = e.style;
        return (n = n || ke(e)) && (s = n.getPropertyValue(t) || n[t]), n && ("" !== s || C.contains(e.ownerDocument,e) || (s = C.style(e,t)), Ne.test(s) && Ce.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" :s
    }

    function Se(e,t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this,arguments);
                delete this.get
            }
        }
    }

    !function () {
        var t,n,r = y.documentElement,i = y.createElement("div"),o = y.createElement("div");

        function e() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(i);
            var e = h.getComputedStyle(o,null);
            t = "1%" !== e.top, n = "4px" === e.width, r.removeChild(i)
        }

        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(o), h.getComputedStyle && C.extend(v,{
            pixelPosition: function () {
                return e(), t
            },boxSizingReliable: function () {
                return null == n && e(), n
            },reliableMarginRight: function () {
                var e,t = o.appendChild(y.createElement("div"));
                return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", r.appendChild(i), e = !parseFloat(h.getComputedStyle(t,null).marginRight), r.removeChild(i), o.removeChild(t), e
            }
        }))
    }(), C.swap = function (e,t,n,r) {
        var i,o,s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e,r || []), t) e.style[o] = s[o];
        return i
    };
    var De = /^(none|table(?!-c[ea]).+)/,je = new RegExp("^(" + B + ")(.*)$","i"),
        Ae = new RegExp("^([+-])=(" + B + ")","i"),Le = {position: "absolute",visibility: "hidden",display: "block"},
        qe = {letterSpacing: "0",fontWeight: "400"},He = ["Webkit","O","Moz","ms"];

    function Oe(e,t) {
        if (t in e) return t;
        for (var n = t[0].toUpperCase() + t.slice(1),r = t,i = He.length; i--;) if ((t = He[i] + n) in e) return t;
        return r
    }

    function Fe(e,t,n) {
        var r = je.exec(t);
        return r ? Math.max(0,r[1] - (n || 0)) + (r[2] || "px") :t
    }

    function Pe(e,t,n,r,i) {
        for (var o = n === (r ? "border" :"content") ? 4 :"width" === t ? 1 :0,s = 0; o < 4; o += 2) "margin" === n && (s += C.css(e,n + _[o],!0,i)), r ? ("content" === n && (s -= C.css(e,"padding" + _[o],!0,i)), "margin" !== n && (s -= C.css(e,"border" + _[o] + "Width",!0,i))) :(s += C.css(e,"padding" + _[o],!0,i), "padding" !== n && (s += C.css(e,"border" + _[o] + "Width",!0,i)));
        return s
    }

    function Re(e,t,n) {
        var r = !0,i = "width" === t ? e.offsetWidth :e.offsetHeight,o = ke(e),
            s = "border-box" === C.css(e,"boxSizing",!1,o);
        if (i <= 0 || null == i) {
            if (((i = Ee(e,t,o)) < 0 || null == i) && (i = e.style[t]), Ne.test(i)) return i;
            r = s && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Pe(e,t,n || (s ? "border" :"content"),r,o) + "px"
    }

    function Me(e,t) {
        for (var n,r,i,o = [],s = 0,a = e.length; s < a; s++) (r = e[s]).style && (o[s] = R.get(r,"olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && z(r) && (o[s] = R.access(r,"olddisplay",Te(r.nodeName)))) :(i = z(r), "none" === n && i || R.set(r,"olddisplay",i ? n :C.css(r,"display"))));
        for (s = 0; s < a; s++) (r = e[s]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" :"none"));
        return e
    }

    function We(e,t,n,r,i) {
        return new We.prototype.init(e,t,n,r,i)
    }

    C.extend({
        cssHooks: {
            opacity: {
                get: function (e,t) {
                    if (t) {
                        var n = Ee(e,"opacity");
                        return "" === n ? "1" :n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e,t,n,r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,o,s,a = C.camelCase(t),u = e.style;
                if (t = C.cssProps[a] || (C.cssProps[a] = Oe(u,a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e,!1,r)) ? i :u[t];
                "string" === (o = typeof n) && (i = Ae.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(C.css(e,t)), o = "number"), null != n && n == n && ("number" !== o || C.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e,n,r)) || (u[t] = n))
            }
        },
        css: function (e,t,n,r) {
            var i,o,s,a = C.camelCase(t);
            return t = C.cssProps[a] || (C.cssProps[a] = Oe(e.style,a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (i = s.get(e,!0,n)), void 0 === i && (i = Ee(e,t,r)), "normal" === i && t in qe && (i = qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || C.isNumeric(o) ? o || 0 :i) :i
        }
    }), C.each(["height","width"],function (e,i) {
        C.cssHooks[i] = {
            get: function (e,t,n) {
                if (t) return De.test(C.css(e,"display")) && 0 === e.offsetWidth ? C.swap(e,Le,function () {
                    return Re(e,i,n)
                }) :Re(e,i,n)
            },set: function (e,t,n) {
                var r = n && ke(e);
                return Fe(e,t,n ? Pe(e,i,n,"border-box" === C.css(e,"boxSizing",!1,r),r) :0)
            }
        }
    }), C.cssHooks.marginRight = Se(v.reliableMarginRight,function (e,t) {
        if (t) return C.swap(e,{display: "inline-block"},Ee,[e,"marginRight"])
    }), C.each({margin: "",padding: "",border: "Width"},function (i,o) {
        C.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0,n = {},r = "string" == typeof e ? e.split(" ") :[e]; t < 4; t++) n[i + _[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, Ce.test(i) || (C.cssHooks[i + o].set = Fe)
    }), C.fn.extend({
        css: function (e,t) {
            return F(this,function (e,t,n) {
                var r,i,o = {},s = 0;
                if (C.isArray(t)) {
                    for (r = ke(e), i = t.length; s < i; s++) o[t[s]] = C.css(e,t[s],!1,r);
                    return o
                }
                return void 0 !== n ? C.style(e,t,n) :C.css(e,t)
            },e,t,1 < arguments.length)
        },show: function () {
            return Me(this,!0)
        },hide: function () {
            return Me(this)
        },toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() :this.hide() :this.each(function () {
                z(this) ? C(this).show() :C(this).hide()
            })
        }
    }), (C.Tween = We).prototype = {
        constructor: We,init: function (e,t,n,r,i,o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" :"px")
        },cur: function () {
            var e = We.propHooks[this.prop];
            return e && e.get ? e.get(this) :We.propHooks._default.get(this)
        },run: function (e) {
            var t,n = We.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e,this.options.duration * e,0,1,this.options.duration) :this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem,this.now,this), n && n.set ? n.set(this) :We.propHooks._default.set(this), this
        }
    }, We.prototype.init.prototype = We.prototype, We.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = C.css(e.elem,e.prop,"")) && "auto" !== t ? t :0 :e.elem[e.prop]
            },set: function (e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) :e.elem.style && (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop]) ? C.style(e.elem,e.prop,e.now + e.unit) :e.elem[e.prop] = e.now
            }
        }
    }, We.propHooks.scrollTop = We.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function (e) {
            return e
        },swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, C.fx = We.prototype.init, C.fx.step = {};
    var $e,Ie,Be = /^(?:toggle|show|hide)$/,_e = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$","i"),
        ze = /queueHooks$/,Xe = [Ze],Ue = {
            "*": [function (e,t) {
                var n = this.createTween(e,t),r = n.cur(),i = _e.exec(t),o = i && i[3] || (C.cssNumber[e] ? "" :"px"),
                    s = (C.cssNumber[e] || "px" !== o && +r) && _e.exec(C.css(n.elem,e)),a = 1,u = 20;
                if (s && s[3] !== o) for (o = o || s[3], i = i || [], s = +r || 1; s /= a = a || ".5", C.style(n.elem,e,s + o), a !== (a = n.cur() / r) && 1 !== a && --u;) ;
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] :+i[2]), n
            }]
        },Ve,Ye,Ge;

    function Qe() {
        return setTimeout(function () {
            $e = void 0
        }), $e = C.now()
    }

    function Je(e,t) {
        var n,r = 0,i = {height: e};
        for (t = t ? 1 :0; r < 4; r += 2 - t) i["margin" + (n = _[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function Ke(e,t,n) {
        for (var r,i = (Ue[t] || []).concat(Ue["*"]),o = 0,s = i.length; o < s; o++) if (r = i[o].call(n,t,e)) return r
    }

    function Ze(t,e,n) {
        var r,i,o,s,a,u,l,c,f = this,p = {},d = t.style,h = t.nodeType && z(t),g = R.get(t,"fxshow");
        for (r in n.queue || (null == (a = C._queueHooks(t,"fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, C.queue(t,"fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow,d.overflowX,d.overflowY], "inline" === (c = "none" === (l = C.css(t,"display")) ? R.get(t,"olddisplay") || Te(t.nodeName) :l) && "none" === C.css(t,"float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        })), e) if (i = e[r], Be.exec(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" :"show")) {
                if ("show" !== i || !g || void 0 === g[r]) continue;
                h = !0
            }
            p[r] = g && g[r] || C.style(t,r)
        } else l = void 0;
        if (C.isEmptyObject(p)) "inline" === ("none" === l ? Te(t.nodeName) :l) && (d.display = l); else for (r in g ? "hidden" in g && (h = g.hidden) :g = R.access(t,"fxshow",{}), o && (g.hidden = !h), h ? C(t).show() :f.done(function () {
            C(t).hide()
        }), f.done(function () {
            var e;
            for (e in R.remove(t,"fxshow"), p) C.style(t,e,p[e])
        }), p) s = Ke(h ? g[r] :0,r,f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 :0))
    }

    function et(e,t) {
        var n,r,i,o,s;
        for (n in e) if (i = t[r = C.camelCase(n)], o = e[n], C.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = C.cssHooks[r]) && "expand" in s) for (n in o = s.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
    }

    function tt(s,e,t) {
        var n,a,r = 0,i = Xe.length,u = C.Deferred().always(function () {
            delete o.elem
        }),o = function () {
            if (a) return !1;
            for (var e = $e || Qe(),t = Math.max(0,l.startTime + l.duration - e),n,r = 1 - (t / l.duration || 0),i = 0,o = l.tweens.length; i < o; i++) l.tweens[i].run(r);
            return u.notifyWith(s,[l,r,t]), r < 1 && o ? t :(u.resolveWith(s,[l]), !1)
        },l = u.promise({
            elem: s,
            props: C.extend({},e),
            opts: C.extend(!0,{specialEasing: {}},t),
            originalProperties: e,
            originalOptions: t,
            startTime: $e || Qe(),
            duration: t.duration,
            tweens: [],
            createTween: function (e,t) {
                var n = C.Tween(s,l.opts,e,t,l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0,n = e ? l.tweens.length :0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? u.resolveWith(s,[l,e]) :u.rejectWith(s,[l,e]), this
            }
        }),c = l.props;
        for (et(c,l.opts.specialEasing); r < i; r++) if (n = Xe[r].call(l,s,c,l.opts)) return n;
        return C.map(c,Ke,l), C.isFunction(l.opts.start) && l.opts.start.call(s,l), C.fx.timer(C.extend(o,{
            elem: s,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    C.Animation = C.extend(tt,{
        tweener: function (e,t) {
            for (var n,r = 0,i = (e = C.isFunction(e) ? (t = e, ["*"]) :e.split(" ")).length; r < i; r++) n = e[r], Ue[n] = Ue[n] || [], Ue[n].unshift(t)
        },prefilter: function (e,t) {
            t ? Xe.unshift(e) :Xe.push(e)
        }
    }), C.speed = function (e,t,n) {
        var r = e && "object" == typeof e ? C.extend({},e) :{
            complete: n || !n && t || C.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !C.isFunction(t) && t
        };
        return r.duration = C.fx.off ? 0 :"number" == typeof r.duration ? r.duration :r.duration in C.fx.speeds ? C.fx.speeds[r.duration] :C.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            C.isFunction(r.old) && r.old.call(this), r.queue && C.dequeue(this,r.queue)
        }, r
    }, C.fn.extend({
        fadeTo: function (e,t,n,r) {
            return this.filter(z).css("opacity",0).show().end().animate({opacity: t},e,n,r)
        },animate: function (t,e,n,r) {
            var i = C.isEmptyObject(t),o = C.speed(e,n,r),s = function () {
                var e = tt(this,C.extend({},t),o);
                (i || R.get(this,"finish")) && e.stop(!0)
            };
            return s.finish = s, i || !1 === o.queue ? this.each(s) :this.queue(o.queue,s)
        },stop: function (i,e,o) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx",[]), this.each(function () {
                var e = !0,t = null != i && i + "queueHooks",n = C.timers,r = R.get(this);
                if (t) r[t] && r[t].stop && s(r[t]); else for (t in r) r[t] && r[t].stop && ze.test(t) && s(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t,1));
                !e && o || C.dequeue(this,i)
            })
        },finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e,t = R.get(this),n = t[s + "queue"],r = t[s + "queueHooks"],i = C.timers,o = n ? n.length :0;
                for (t.finish = !0, C.queue(this,s,[]), r && r.stop && r.stop.call(this,!0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e,1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle","show","hide"],function (e,r) {
        var i = C.fn[r];
        C.fn[r] = function (e,t,n) {
            return null == e || "boolean" == typeof e ? i.apply(this,arguments) :this.animate(Je(r,!0),e,t,n)
        }
    }), C.each({
        slideDown: Je("show"),
        slideUp: Je("hide"),
        slideToggle: Je("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    },function (e,r) {
        C.fn[e] = function (e,t,n) {
            return this.animate(r,e,t,n)
        }
    }), C.timers = [], C.fx.tick = function () {
        var e,t = 0,n = C.timers;
        for ($e = C.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--,1);
        n.length || C.fx.stop(), $e = void 0
    }, C.fx.timer = function (e) {
        C.timers.push(e), e() ? C.fx.start() :C.timers.pop()
    }, C.fx.interval = 13, C.fx.start = function () {
        Ie || (Ie = setInterval(C.fx.tick,C.fx.interval))
    }, C.fx.stop = function () {
        clearInterval(Ie), Ie = null
    }, C.fx.speeds = {slow: 600,fast: 200,_default: 400}, C.fn.delay = function (r,e) {
        return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e,function (e,t) {
            var n = setTimeout(e,r);
            t.stop = function () {
                clearTimeout(n)
            }
        })
    }, Ve = y.createElement("input"), Ye = y.createElement("select"), Ge = Ye.appendChild(y.createElement("option")), Ve.type = "checkbox", v.checkOn = "" !== Ve.value, v.optSelected = Ge.selected, Ye.disabled = !0, v.optDisabled = !Ge.disabled, (Ve = y.createElement("input")).value = "t", Ve.type = "radio", v.radioValue = "t" === Ve.value;
    var nt,rt,it = C.expr.attrHandle;
    C.fn.extend({
        attr: function (e,t) {
            return F(this,C.attr,e,t,1 < arguments.length)
        },removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this,e)
            })
        }
    }), C.extend({
        attr: function (e,t,n) {
            var r,i,o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === G ? C.prop(e,t,n) :(1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(), r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? rt :nt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e,t)) ? i :null == (i = C.find.attr(e,t)) ? void 0 :i :null !== n ? r && "set" in r && void 0 !== (i = r.set(e,n,t)) ? i :(e.setAttribute(t,n + ""), n) :void C.removeAttr(e,t))
        },removeAttr: function (e,t) {
            var n,r,i = 0,o = t && t.match(A);
            if (o && 1 === e.nodeType) for (; n = o[i++];
            ) r = C.propFix[n] || n, C.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        },attrHooks: {
            type: {
                set: function (e,t) {
                    if (!v.radioValue && "radio" === t && C.nodeName(e,"input")) {
                        var n = e.value;
                        return e.setAttribute("type",t), n && (e.value = n), t
                    }
                }
            }
        }
    }), rt = {
        set: function (e,t,n) {
            return !1 === t ? C.removeAttr(e,n) :e.setAttribute(n,n), n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g),function (e,t) {
        var o = it[t] || C.find.attr;
        it[t] = function (e,t,n) {
            var r,i;
            return n || (i = it[t], it[t] = r, r = null != o(e,t,n) ? t.toLowerCase() :null, it[t] = i), r
        }
    });
    var ot = /^(?:input|select|textarea|button)$/i;
    C.fn.extend({
        prop: function (e,t) {
            return F(this,C.prop,e,t,1 < arguments.length)
        },removeProp: function (e) {
            return this.each(function () {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        propFix: {for: "htmlFor",class: "className"},prop: function (e,t,n) {
            var r,i,o,s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return (o = 1 !== s || !C.isXMLDoc(e)) && (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e,n,t)) ? r :e[t] = n :i && "get" in i && null !== (r = i.get(e,t)) ? r :e[t]
        },propHooks: {
            tabIndex: {
                get: function (e) {
                    return e.hasAttribute("tabindex") || ot.test(e.nodeName) || e.href ? e.tabIndex :-1
                }
            }
        }
    }), v.optSelected || (C.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function () {
        C.propFix[this.toLowerCase()] = this
    });
    var st = /[\t\r\n\f]/g;
    C.fn.extend({
        addClass: function (t) {
            var e,n,r,i,o,s,a = "string" == typeof t && t,u = 0,l = this.length;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).addClass(t.call(this,e,this.className))
            });
            if (a) for (e = (t || "").match(A) || []; u < l; u++) if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(st," ") :" ")) {
                for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                s = C.trim(r), n.className !== s && (n.className = s)
            }
            return this
        },removeClass: function (t) {
            var e,n,r,i,o,s,a = 0 === arguments.length || "string" == typeof t && t,u = 0,l = this.length;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).removeClass(t.call(this,e,this.className))
            });
            if (a) for (e = (t || "").match(A) || []; u < l; u++) if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(st," ") :"")) {
                for (o = 0; i = e[o++];) for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " "," ");
                s = t ? C.trim(r) :"", n.className !== s && (n.className = s)
            }
            return this
        },toggleClass: function (i,t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) :this.removeClass(i) :C.isFunction(i) ? this.each(function (e) {
                C(this).toggleClass(i.call(this,e,this.className,t),t)
            }) :this.each(function () {
                if ("string" === o) for (var e,t = 0,n = C(this),r = i.match(A) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) :n.addClass(e); else o !== G && "boolean" !== o || (this.className && R.set(this,"__className__",this.className), this.className = this.className || !1 === i ? "" :R.get(this,"__className__") || "")
            })
        },hasClass: function (e) {
            for (var t = " " + e + " ",n = 0,r = this.length; n < r; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(st," ").indexOf(t)) return !0;
            return !1
        }
    });
    var at = /\r/g;
    C.fn.extend({
        val: function (n) {
            var r,e,i,t = this[0];
            return arguments.length ? (i = C.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this,e,C(this).val()) :n) ? t = "" :"number" == typeof t ? t += "" :C.isArray(t) && (t = C.map(t,function (e) {
                    return null == e ? "" :e + ""
                })), (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this,t,"value") || (this.value = t))
            })) :t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t,"value")) ? e :"string" == typeof (e = t.value) ? e.replace(at,"") :null == e ? "" :e :void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = C.find.attr(e,"value");
                    return null != t ? t :C.trim(C.text(e))
                }
            },select: {
                get: function (e) {
                    for (var t,n,r = e.options,i = e.selectedIndex,o = "select-one" === e.type || i < 0,s = o ? null :[],a = o ? i + 1 :r.length,u = i < 0 ? a :o ? i :0; u < a; u++) if (((n = r[u]).selected || u === i) && (v.optDisabled ? !n.disabled :null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !C.nodeName(n.parentNode,"optgroup"))) {
                        if (t = C(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                },set: function (e,t) {
                    for (var n,r,i = e.options,o = C.makeArray(t),s = i.length; s--;) ((r = i[s]).selected = 0 <= C.inArray(r.value,o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), C.each(["radio","checkbox"],function () {
        C.valHooks[this] = {
            set: function (e,t) {
                if (C.isArray(t)) return e.checked = 0 <= C.inArray(C(e).val(),t)
            }
        }, v.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" :e.value
        })
    }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function (e,n) {
        C.fn[n] = function (e,t) {
            return 0 < arguments.length ? this.on(n,null,e,t) :this.trigger(n)
        }
    }), C.fn.extend({
        hover: function (e,t) {
            return this.mouseenter(e).mouseleave(t || e)
        },bind: function (e,t,n) {
            return this.on(e,null,t,n)
        },unbind: function (e,t) {
            return this.off(e,null,t)
        },delegate: function (e,t,n,r) {
            return this.on(t,e,n,r)
        },undelegate: function (e,t,n) {
            return 1 === arguments.length ? this.off(e,"**") :this.off(t,e || "**",n)
        }
    });
    var ut = C.now(),lt = /\?/;
    C.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, C.parseXML = function (e) {
        var t,n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (n = new DOMParser).parseFromString(e,"text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var ct = /#.*$/,ft = /([?&])_=[^&]*/,pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        dt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ht = /^(?:GET|HEAD)$/,gt = /^\/\//,
        mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,vt = {},yt = {},xt = "*/".concat("*"),
        bt = h.location.href,wt = mt.exec(bt.toLowerCase()) || [];

    function Tt(o) {
        return function (e,t) {
            "string" != typeof e && (t = e, e = "*");
            var n,r = 0,i = e.toLowerCase().match(A) || [];
            if (C.isFunction(t)) for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) :(o[n] = o[n] || []).push(t)
        }
    }

    function Ct(t,i,o,s) {
        var a = {},u = t === yt;

        function l(e) {
            var r;
            return a[e] = !0, C.each(t[e] || [],function (e,t) {
                var n = t(i,o,s);
                return "string" != typeof n || u || a[n] ? u ? !(r = n) :void 0 :(i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !a["*"] && l("*")
    }

    function Nt(e,t) {
        var n,r,i = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e :r || (r = {}))[n] = t[n]);
        return r && C.extend(!0,e,r), e
    }

    function kt(e,t,n) {
        for (var r,i,o,s,a = e.contents,u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in a) if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Et(e,t,n,r) {
        var i,o,s,a,u,l = {},c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t,e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o])) for (i in l) if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                !0 === s ? s = l[i] :!0 !== l[i] && (o = a[0], c.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && e.throws) t = s(t); else try {
                t = s(t)
            } catch (e) {
                return {state: "parsererror",error: s ? e :"No conversion from " + u + " to " + o}
            }
        }
        return {state: "success",data: t}
    }

    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt,
            type: "GET",
            isLocal: dt.test(wt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/,html: /html/,json: /json/},
            responseFields: {xml: "responseXML",text: "responseText",json: "responseJSON"},
            converters: {"* text": String,"text html": !0,"text json": C.parseJSON,"text xml": C.parseXML},
            flatOptions: {url: !0,context: !0}
        },
        ajaxSetup: function (e,t) {
            return t ? Nt(Nt(e,C.ajaxSettings),t) :Nt(C.ajaxSettings,e)
        },
        ajaxPrefilter: Tt(vt),
        ajaxTransport: Tt(yt),
        ajax: function (e,t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c,f,p,n,d,r,h,i,g = C.ajaxSetup({},t),m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? C(m) :C.event,y = C.Deferred(),
                x = C.Callbacks("once memory"),b = g.statusCode || {},o = {},s = {},w = 0,a = "canceled",T = {
                    readyState: 0,getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!n) for (n = {}; t = pt.exec(p);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null :t
                    },getAllResponseHeaders: function () {
                        return 2 === w ? p :null
                    },setRequestHeader: function (e,t) {
                        var n = e.toLowerCase();
                        return w || (e = s[n] = s[n] || e, o[e] = t), this
                    },overrideMimeType: function (e) {
                        return w || (g.mimeType = e), this
                    },statusCode: function (e) {
                        var t;
                        if (e) if (w < 2) for (t in e) b[t] = [b[t],e[t]]; else T.always(e[T.status]);
                        return this
                    },abort: function (e) {
                        var t = e || a;
                        return c && c.abort(t), u(0,t), this
                    }
                };
            if (y.promise(T).complete = x.add, T.success = T.done, T.error = T.fail, g.url = ((e || g.url || bt) + "").replace(ct,"").replace(gt,wt[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = C.trim(g.dataType || "*").toLowerCase().match(A) || [""], null == g.crossDomain && (r = mt.exec(g.url.toLowerCase()), g.crossDomain = !(!r || r[1] === wt[1] && r[2] === wt[2] && (r[3] || ("http:" === r[1] ? "80" :"443")) === (wt[3] || ("http:" === wt[1] ? "80" :"443")))), g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data,g.traditional)), Ct(vt,g,t,T), 2 === w) return T;
            for (i in (h = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !ht.test(g.type), f = g.url, g.hasContent || (g.data && (f = g.url += (lt.test(f) ? "&" :"?") + g.data, delete g.data), !1 === g.cache && (g.url = ft.test(f) ? f.replace(ft,"$1_=" + ut++) :f + (lt.test(f) ? "&" :"?") + "_=" + ut++)), g.ifModified && (C.lastModified[f] && T.setRequestHeader("If-Modified-Since",C.lastModified[f]), C.etag[f] && T.setRequestHeader("If-None-Match",C.etag[f])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && T.setRequestHeader("Content-Type",g.contentType), T.setRequestHeader("Accept",g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + xt + "; q=0.01" :"") :g.accepts["*"]), g.headers) T.setRequestHeader(i,g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m,T,g) || 2 === w)) return T.abort();
            for (i in a = "abort", {success: 1,error: 1,complete: 1}) T[i](g[i]);
            if (c = Ct(yt,g,t,T)) {
                T.readyState = 1, h && v.trigger("ajaxSend",[T,g]), g.async && 0 < g.timeout && (d = setTimeout(function () {
                    T.abort("timeout")
                },g.timeout));
                try {
                    w = 1, c.send(o,u)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    u(-1,e)
                }
            } else u(-1,"No Transport");

            function u(e,t,n,r) {
                var i,o,s,a,u,l = t;
                2 !== w && (w = 2, d && clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 :0, i = 200 <= e && e < 300 || 304 === e, n && (a = kt(g,T,n)), a = Et(g,a,T,i), i ? (g.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (C.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (C.etag[f] = u)), 204 === e || "HEAD" === g.type ? l = "nocontent" :304 === e ? l = "notmodified" :(l = a.state, o = a.data, i = !(s = a.error))) :(s = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? y.resolveWith(m,[o,l,T]) :y.rejectWith(m,[T,l,s]), T.statusCode(b), b = void 0, h && v.trigger(i ? "ajaxSuccess" :"ajaxError",[T,g,i ? o :s]), x.fireWith(m,[T,l]), h && (v.trigger("ajaxComplete",[T,g]), --C.active || C.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e,t,n) {
            return C.get(e,t,n,"json")
        },
        getScript: function (e,t) {
            return C.get(e,void 0,t,"script")
        }
    }), C.each(["get","post"],function (e,i) {
        C[i] = function (e,t,n,r) {
            return C.isFunction(t) && (r = r || n, n = t, t = void 0), C.ajax({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            })
        }
    }), C._evalUrl = function (e) {
        return C.ajax({url: e,type: "GET",dataType: "script",async: !1,global: !1,throws: !0})
    }, C.fn.extend({
        wrapAll: function (t) {
            var e;
            return C.isFunction(t) ? this.each(function (e) {
                C(this).wrapAll(t.call(this,e))
            }) :(this[0] && (e = C(t,this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },wrapInner: function (n) {
            return C.isFunction(n) ? this.each(function (e) {
                C(this).wrapInner(n.call(this,e))
            }) :this.each(function () {
                var e = C(this),t = e.contents();
                t.length ? t.wrapAll(n) :e.append(n)
            })
        },wrap: function (t) {
            var n = C.isFunction(t);
            return this.each(function (e) {
                C(this).wrapAll(n ? t.call(this,e) :t)
            })
        },unwrap: function () {
            return this.parent().each(function () {
                C.nodeName(this,"body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }), C.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, C.expr.filters.visible = function (e) {
        return !C.expr.filters.hidden(e)
    };
    var St = /%20/g,Dt = /\[\]$/,jt = /\r?\n/g,At = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function qt(n,e,r,i) {
        var t;
        if (C.isArray(e)) C.each(e,function (e,t) {
            r || Dt.test(n) ? i(n,t) :qt(n + "[" + ("object" == typeof t ? e :"") + "]",t,r,i)
        }); else if (r || "object" !== C.type(e)) i(n,e); else for (t in e) qt(n + "[" + t + "]",e[t],r,i)
    }

    C.param = function (e,t) {
        var n,r = [],i = function (e,t) {
            t = C.isFunction(t) ? t() :null == t ? "" :t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e,function () {
            i(this.name,this.value)
        }); else for (n in e) qt(n,e[n],t,i);
        return r.join("&").replace(St,"+")
    }, C.fn.extend({
        serialize: function () {
            return C.param(this.serializeArray())
        },serializeArray: function () {
            return this.map(function () {
                var e = C.prop(this,"elements");
                return e ? C.makeArray(e) :this
            }).filter(function () {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Lt.test(this.nodeName) && !At.test(e) && (this.checked || !X.test(e))
            }).map(function (e,t) {
                var n = C(this).val();
                return null == n ? null :C.isArray(n) ? C.map(n,function (e) {
                    return {name: t.name,value: e.replace(jt,"\r\n")}
                }) :{name: t.name,value: n.replace(jt,"\r\n")}
            }).get()
        }
    }), C.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (e) {
        }
    };
    var Ht = 0,Ot = {},Ft = {0: 200,1223: 204},Pt = C.ajaxSettings.xhr();
    h.attachEvent && h.attachEvent("onunload",function () {
        for (var e in Ot) Ot[e]()
    }), v.cors = !!Pt && "withCredentials" in Pt, v.ajax = Pt = !!Pt, C.ajaxTransport(function (o) {
        var s;
        if (v.cors || Pt && !o.crossDomain) return {
            send: function (e,t) {
                var n,r = o.xhr(),i = ++Ht;
                if (r.open(o.type,o.url,o.async,o.username,o.password), o.xhrFields) for (n in o.xhrFields) r[n] = o.xhrFields[n];
                for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n,e[n]);
                s = function (e) {
                    return function () {
                        s && (delete Ot[i], s = r.onload = r.onerror = null, "abort" === e ? r.abort() :"error" === e ? t(r.status,r.statusText) :t(Ft[r.status] || r.status,r.statusText,"string" == typeof r.responseText ? {text: r.responseText} :void 0,r.getAllResponseHeaders()))
                    }
                }, r.onload = s(), r.onerror = s("error"), s = Ot[i] = s("abort");
                try {
                    r.send(o.hasContent && o.data || null)
                } catch (e) {
                    if (s) throw e
                }
            },abort: function () {
                s && s()
            }
        }
    }), C.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script",function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script",function (n) {
        var r,i;
        if (n.crossDomain) return {
            send: function (e,t) {
                r = C("<script>").prop({
                    async: !0,
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error",i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 :200,e.type)
                }), y.head.appendChild(r[0])
            },abort: function () {
                i && i()
            }
        }
    });
    var Rt = [],Mt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",jsonpCallback: function () {
            var e = Rt.pop() || C.expando + "_" + ut++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp",function (e,t,n) {
        var r,i,o,
            s = !1 !== e.jsonp && (Mt.test(e.url) ? "url" :"string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() :e.jsonpCallback, s ? e[s] = e[s].replace(Mt,"$1" + r) :!1 !== e.jsonp && (e.url += (lt.test(e.url) ? "&" :"?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || C.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = h[r], h[r] = function () {
            o = arguments
        }, n.always(function () {
            h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Rt.push(r)), o && C.isFunction(i) && i(o[0]), o = i = void 0
        }), "script"
    }), C.parseHTML = function (e,t,n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || y;
        var r = b.exec(e),i = !n && [];
        return r ? [t.createElement(r[1])] :(r = C.buildFragment([e],t,i), i && i.length && C(i).remove(), C.merge([],r.childNodes))
    };
    var Wt = C.fn.load;
    C.fn.load = function (e,t,n) {
        if ("string" != typeof e && Wt) return Wt.apply(this,arguments);
        var r,i,o,s = this,a = e.indexOf(" ");
        return 0 <= a && (r = C.trim(e.slice(a)), e = e.slice(0,a)), C.isFunction(t) ? (n = t, t = void 0) :t && "object" == typeof t && (i = "POST"), 0 < s.length && C.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) :e)
        }).complete(n && function (e,t) {
            s.each(n,o || [e.responseText,t,e])
        }), this
    }, C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function (e,t) {
        C.fn[t] = function (e) {
            return this.on(t,e)
        }
    }), C.expr.filters.animated = function (t) {
        return C.grep(C.timers,function (e) {
            return t === e.elem
        }).length
    };
    var $t = h.document.documentElement;

    function It(e) {
        return C.isWindow(e) ? e :9 === e.nodeType && e.defaultView
    }

    C.offset = {
        setOffset: function (e,t,n) {
            var r,i,o,s,a,u,l,c = C.css(e,"position"),f = C(e),p = {};
            "static" === c && (e.style.position = "relative"), a = f.offset(), o = C.css(e,"top"), u = C.css(e,"left"), i = (l = ("absolute" === c || "fixed" === c) && -1 < (o + u).indexOf("auto")) ? (s = (r = f.position()).top, r.left) :(s = parseFloat(o) || 0, parseFloat(u) || 0), C.isFunction(t) && (t = t.call(e,n,a)), null != t.top && (p.top = t.top - a.top + s), null != t.left && (p.left = t.left - a.left + i), "using" in t ? t.using.call(e,p) :f.css(p)
        }
    }, C.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this :this.each(function (e) {
                C.offset.setOffset(this,t,e)
            });
            var e,n,r = this[0],i = {top: 0,left: 0},o = r && r.ownerDocument;
            return o ? (e = o.documentElement, C.contains(e,r) ? (typeof r.getBoundingClientRect !== G && (i = r.getBoundingClientRect()), n = It(o), {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) :i) :void 0
        },position: function () {
            if (this[0]) {
                var e,t,n = this[0],r = {top: 0,left: 0};
                return "fixed" === C.css(n,"position") ? t = n.getBoundingClientRect() :(e = this.offsetParent(), t = this.offset(), C.nodeName(e[0],"html") || (r = e.offset()), r.top += C.css(e[0],"borderTopWidth",!0), r.left += C.css(e[0],"borderLeftWidth",!0)), {
                    top: t.top - r.top - C.css(n,"marginTop",!0),
                    left: t.left - r.left - C.css(n,"marginLeft",!0)
                }
            }
        },offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || $t; e && !C.nodeName(e,"html") && "static" === C.css(e,"position");) e = e.offsetParent;
                return e || $t
            })
        }
    }), C.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"},function (t,i) {
        var o = "pageYOffset" === i;
        C.fn[t] = function (e) {
            return F(this,function (e,t,n) {
                var r = It(e);
                if (void 0 === n) return r ? r[i] :e[t];
                r ? r.scrollTo(o ? h.pageXOffset :n,o ? n :h.pageYOffset) :e[t] = n
            },t,e,arguments.length,null)
        }
    }), C.each(["top","left"],function (e,n) {
        C.cssHooks[n] = Se(v.pixelPosition,function (e,t) {
            if (t) return t = Ee(e,n), Ne.test(t) ? C(e).position()[n] + "px" :t
        })
    }), C.each({Height: "height",Width: "width"},function (o,s) {
        C.each({padding: "inner" + o,content: s,"": "outer" + o},function (r,e) {
            C.fn[e] = function (e,t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" :"border");
                return F(this,function (e,t,n) {
                    var r;
                    return C.isWindow(e) ? e.document.documentElement["client" + o] :9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o],r["scroll" + o],e.body["offset" + o],r["offset" + o],r["client" + o])) :void 0 === n ? C.css(e,t,i) :C.style(e,t,n,i)
                },s,n ? e :void 0,n,null)
            }
        })
    }), C.fn.size = function () {
        return this.length
    }, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery",[],function () {
        return C
    });
    var Bt = h.jQuery,_t = h.$;
    return C.noConflict = function (e) {
        return h.$ === C && (h.$ = _t), e && h.jQuery === C && (h.jQuery = Bt), C
    }, typeof e === G && (h.jQuery = h.$ = C), C
});