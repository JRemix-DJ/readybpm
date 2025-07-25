!function (e,t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e,!0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this,function (h,e) {
    var d = [],c = d.slice,m = d.concat,s = d.push,i = d.indexOf,n = {},t = n.toString,g = n.hasOwnProperty,v = {},
        r = "1.11.3",C = function (e,t) {
            return new C.fn.init(e,t)
        },o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,a = /^-ms-/,l = /-([\da-z])/gi,u = function (e,t) {
            return t.toUpperCase()
        };

    function f(e) {
        var t = "length" in e && e.length,n = C.type(e);
        return "function" !== n && !C.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }

    C.fn = C.prototype = {
        jquery: r,constructor: C,selector: "",length: 0,toArray: function () {
            return c.call(this)
        },get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
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
            var t = this.length,n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },end: function () {
            return this.prevObject || this.constructor(null)
        },push: s,sort: d.sort,splice: d.splice
    }, C.extend = C.fn.extend = function () {
        var e,t,n,r,i,o,a = arguments[0] || {},s = 1,l = arguments.length,u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || C.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], a !== (n = i[r]) && (u && n && (C.isPlainObject(n) || (t = C.isArray(n))) ? (o = t ? (t = !1, e && C.isArray(e) ? e : []) : e && C.isPlainObject(e) ? e : {}, a[r] = C.extend(u,o,n)) : void 0 !== n && (a[r] = n));
        return a
    }, C.extend({
        expando: "jQuery" + (r + Math.random()).replace(/\D/g,""),isReady: !0,error: function (e) {
            throw new Error(e)
        },noop: function () {
        },isFunction: function (e) {
            return "function" === C.type(e)
        },isArray: Array.isArray || function (e) {
            return "array" === C.type(e)
        },isWindow: function (e) {
            return null != e && e == e.window
        },isNumeric: function (e) {
            return !C.isArray(e) && 0 <= e - parseFloat(e) + 1
        },isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },isPlainObject: function (e) {
            var t;
            if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
            try {
                if (e.constructor && !g.call(e,"constructor") && !g.call(e.constructor.prototype,"isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (v.ownLast) for (t in e) return g.call(e,t);
            for (t in e) ;
            return void 0 === t || g.call(e,t)
        },type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[t.call(e)] || "object" : typeof e
        },globalEval: function (e) {
            e && C.trim(e) && (h.execScript || function (e) {
                h.eval.call(h,e)
            })(e)
        },camelCase: function (e) {
            return e.replace(a,"ms-").replace(l,u)
        },nodeName: function (e,t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },each: function (e,t,n) {
            var r,i = 0,o = e.length,a = f(e);
            if (n) {
                if (a) for (; i < o && !1 !== (r = t.apply(e[i],n)); i++) ; else for (i in e) if (!1 === (r = t.apply(e[i],n))) break
            } else if (a) for (; i < o && !1 !== (r = t.call(e[i],i,e[i])); i++) ; else for (i in e) if (!1 === (r = t.call(e[i],i,e[i]))) break;
            return e
        },trim: function (e) {
            return null == e ? "" : (e + "").replace(o,"")
        },makeArray: function (e,t) {
            var n = t || [];
            return null != e && (f(Object(e)) ? C.merge(n,"string" == typeof e ? [e] : e) : s.call(n,e)), n
        },inArray: function (e,t,n) {
            var r;
            if (t) {
                if (i) return i.call(t,e,n);
                for (r = t.length, n = n ? n < 0 ? Math.max(0,r + n) : n : 0; n < r; n++) if (n in t && t[n] === e) return n
            }
            return -1
        },merge: function (e,t) {
            for (var n = +t.length,r = 0,i = e.length; r < n;) e[i++] = t[r++];
            if (n != n) for (; void 0 !== t[r];) e[i++] = t[r++];
            return e.length = i, e
        },grep: function (e,t,n) {
            for (var r,i = [],o = 0,a = e.length,s = !n; o < a; o++) (r = !t(e[o],o)) !== s && i.push(e[o]);
            return i
        },map: function (e,t,n) {
            var r,i = 0,o = e.length,a,s = [];
            if (f(e)) for (; i < o; i++) null != (r = t(e[i],i,n)) && s.push(r); else for (i in e) null != (r = t(e[i],i,n)) && s.push(r);
            return m.apply([],s)
        },guid: 1,proxy: function (e,t) {
            var n,r,i;
            return "string" == typeof t && (i = e[t], t = e, e = i), C.isFunction(e) ? (n = c.call(arguments,2), (r = function () {
                return e.apply(t || this,n.concat(c.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, r) : void 0
        },now: function () {
            return +new Date
        },support: v
    }), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function (e,t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function (n) {
        var e,h,x,o,r,m,d,g,w,u,c,v,T,i,y,b,a,s,C,N = "sizzle" + 1 * new Date,E = n.document,k = 0,f = 0,l = ae(),
            p = ae(),S = ae(),A = function (e,t) {
                return e === t && (c = !0), 0
            },D = 1 << 31,j = {}.hasOwnProperty,t = [],L = t.pop,H = t.push,q = t.push,_ = t.slice,M = function (e,t) {
                for (var n = 0,r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            },
            F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            O = "[\\x20\\t\\r\\n\\f]",B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",P = B.replace("w","w#"),
            R = "\\[" + O + "*(" + B + ")(?:" + O + "*([*^$|!~]?=)" + O + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + P + "))|)" + O + "*\\]",
            W = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
            $ = new RegExp(O + "+","g"),z = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$","g"),
            I = new RegExp("^" + O + "*," + O + "*"),X = new RegExp("^" + O + "*([>+~]|" + O + ")" + O + "*"),
            U = new RegExp("=" + O + "*([^\\]'\"]*?)" + O + "*\\]","g"),V = new RegExp(W),J = new RegExp("^" + P + "$"),
            Y = {
                ID: new RegExp("^#(" + B + ")"),
                CLASS: new RegExp("^\\.(" + B + ")"),
                TAG: new RegExp("^(" + B.replace("w","w*") + ")"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)","i"),
                bool: new RegExp("^(?:" + F + ")$","i"),
                needsContext: new RegExp("^" + O + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)","i")
            },G = /^(?:input|select|textarea|button)$/i,Q = /^h\d$/i,K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee = /[+~]/,te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + O + "?|(" + O + ")|.)","ig"),re = function (e,t,n) {
                var r = "0x" + t - 65536;
                return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296,1023 & r | 56320)
            },ie = function () {
                v()
            };
        try {
            q.apply(t = _.call(E.childNodes),E.childNodes), t[E.childNodes.length].nodeType
        } catch (e) {
            q = {
                apply: t.length ? function (e,t) {
                    H.apply(e,_.call(t))
                } : function (e,t) {
                    for (var n = e.length,r = 0; e[n++] = t[r++];) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e,t,n,r) {
            var i,o,a,s,l,u,c,d,f,p;
            if ((t ? t.ownerDocument || t : E) !== T && v(t), n = n || [], s = (t = t || T).nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
            if (!r && y) {
                if (11 !== s && (i = Z.exec(e))) if (a = i[1]) {
                    if (9 === s) {
                        if (!(o = t.getElementById(a)) || !o.parentNode) return n;
                        if (o.id === a) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && C(t,o) && o.id === a) return n.push(o), n
                } else {
                    if (i[2]) return q.apply(n,t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && h.getElementsByClassName) return q.apply(n,t.getElementsByClassName(a)), n
                }
                if (h.qsa && (!b || !b.test(e))) {
                    if (d = c = N, f = t, p = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (u = m(e), (c = t.getAttribute("id")) ? d = c.replace(te,"\\$&") : t.setAttribute("id",d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + ge(u[l]);
                        f = ee.test(e) && he(t.parentNode) || t, p = u.join(",")
                    }
                    if (p) try {
                        return q.apply(n,f.querySelectorAll(p)), n
                    } catch (e) {
                    } finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(z,"$1"),t,n,r)
        }

        function ae() {
            var n = [];

            function r(e,t) {
                return n.push(e + " ") > x.cacheLength && delete r[n.shift()], r[e + " "] = t
            }

            return r
        }

        function se(e) {
            return e[N] = !0, e
        }

        function le(e) {
            var t = T.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ue(e,t) {
            for (var n = e.split("|"),r = e.length; r--;) x.attrHandle[n[r]] = t
        }

        function ce(e,t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(n) {
            return function (e) {
                var t;
                return "input" === e.nodeName.toLowerCase() && e.type === n
            }
        }

        function fe(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function pe(a) {
            return se(function (o) {
                return o = +o, se(function (e,t) {
                    for (var n,r = a([],e.length,o),i = r.length; i--;) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
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
            var t,n,l = e ? e.ownerDocument || e : E;
            return l !== T && 9 === l.nodeType && l.documentElement ? (i = (T = l).documentElement, (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload",ie,!1) : n.attachEvent && n.attachEvent("onunload",ie)), y = !r(l), h.attributes = le(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), h.getElementsByTagName = le(function (e) {
                return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length
            }), h.getElementsByClassName = K.test(l.getElementsByClassName), h.getById = le(function (e) {
                return i.appendChild(e).id = N, !l.getElementsByName || !l.getElementsByName(N).length
            }), h.getById ? (x.find.ID = function (e,t) {
                if (void 0 !== t.getElementById && y) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function (e) {
                var t = e.replace(ne,re);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function (e) {
                var n = e.replace(ne,re);
                return function (e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }), x.find.TAG = h.getElementsByTagName ? function (e,t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
            } : function (e,t) {
                var n,r = [],i = 0,o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                return r
            }, x.find.CLASS = h.getElementsByClassName && function (e,t) {
                return y ? t.getElementsByClassName(e) : void 0
            }, a = [], b = [], (h.qsa = K.test(l.querySelectorAll)) && (le(function (e) {
                i.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + O + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || b.push("\\[" + O + "*(?:value|" + F + ")"), e.querySelectorAll("[id~=" + N + "-]").length || b.push("~="), e.querySelectorAll(":checked").length || b.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || b.push(".#.+[+~]")
            }), le(function (e) {
                var t = l.createElement("input");
                t.setAttribute("type","hidden"), e.appendChild(t).setAttribute("name","D"), e.querySelectorAll("[name=d]").length && b.push("name" + O + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || b.push(":enabled",":disabled"), e.querySelectorAll("*,:x"), b.push(",.*:")
            })), (h.matchesSelector = K.test(s = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.oMatchesSelector || i.msMatchesSelector)) && le(function (e) {
                h.disconnectedMatch = s.call(e,"div"), s.call(e,"[s!='']:x"), a.push("!=",W)
            }), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(i.compareDocumentPosition), C = t || K.test(i.contains) ? function (e,t) {
                var n = 9 === e.nodeType ? e.documentElement : e,r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e,t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, A = t ? function (e,t) {
                if (e === t) return c = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === E && C(E,e) ? -1 : t === l || t.ownerDocument === E && C(E,t) ? 1 : u ? M(u,e) - M(u,t) : 0 : 4 & n ? -1 : 1)
            } : function (e,t) {
                if (e === t) return c = !0, 0;
                var n,r = 0,i = e.parentNode,o = t.parentNode,a = [e],s = [t];
                if (!i || !o) return e === l ? -1 : t === l ? 1 : i ? -1 : o ? 1 : u ? M(u,e) - M(u,t) : 0;
                if (i === o) return ce(e,t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; a[r] === s[r];) r++;
                return r ? ce(a[r],s[r]) : a[r] === E ? -1 : s[r] === E ? 1 : 0
            }, l) : T
        }, oe.matches = function (e,t) {
            return oe(e,null,null,t)
        }, oe.matchesSelector = function (e,t) {
            if ((e.ownerDocument || e) !== T && v(e), t = t.replace(U,"='$1']"), !(!h.matchesSelector || !y || a && a.test(t) || b && b.test(t))) try {
                var n = s.call(e,t);
                if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return 0 < oe(t,T,null,[e]).length
        }, oe.contains = function (e,t) {
            return (e.ownerDocument || e) !== T && v(e), C(e,t)
        }, oe.attr = function (e,t) {
            (e.ownerDocument || e) !== T && v(e);
            var n = x.attrHandle[t.toLowerCase()],r = n && j.call(x.attrHandle,t.toLowerCase()) ? n(e,t,!y) : void 0;
            return void 0 !== r ? r : h.attributes || !y ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t,n = [],r = 0,i = 0;
            if (c = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(A), c) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r],1)
            }
            return u = null, e
        }, o = oe.getText = function (e) {
            var t,n = "",r = 0,i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += o(t);
            return n
        }, (x = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: Y,
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
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0,3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                },PSEUDO: function (e) {
                    var t,n = !e[6] && e[2];
                    return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = m(n,!0)) && (t = n.indexOf(")",n.length - t) - n.length) && (e[0] = e[0].slice(0,t), e[2] = n.slice(0,t)), e.slice(0,3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ne,re).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },CLASS: function (e) {
                    var t = l[e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && l(e,function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },ATTR: function (n,r,i) {
                    return function (e) {
                        var t = oe.attr(e,n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($," ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0,i.length + 1) === i + "-"))
                    }
                },CHILD: function (p,e,t,h,m) {
                    var g = "nth" !== p.slice(0,3),v = "last" !== p.slice(-4),y = "of-type" === e;
                    return 1 === h && 0 === m ? function (e) {
                        return !!e.parentNode
                    } : function (e,t,n) {
                        var r,i,o,a,s,l,u = g !== v ? "nextSibling" : "previousSibling",c = e.parentNode,
                            d = y && e.nodeName.toLowerCase(),f = !n && !y;
                        if (c) {
                            if (g) {
                                for (; u;) {
                                    for (o = e; o = o[u];) if (y ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                    l = u = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? c.firstChild : c.lastChild], v && f) {
                                for (s = (r = (i = c[N] || (c[N] = {}))[p] || [])[0] === k && r[1], a = r[0] === k && r[2], o = s && c.childNodes[s]; o = ++s && o && o[u] || (a = s = 0) || l.pop();) if (1 === o.nodeType && ++a && o === e) {
                                    i[p] = [k,s,a];
                                    break
                                }
                            } else if (f && (r = (e[N] || (e[N] = {}))[p]) && r[0] === k) a = r[1]; else for (; (o = ++s && o && o[u] || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++a || (f && ((o[N] || (o[N] = {}))[p] = [k,a]), o !== e));) ;
                            return (a -= m) === h || a % h == 0 && 0 <= a / h
                        }
                    }
                },PSEUDO: function (e,o) {
                    var t,a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return a[N] ? a(o) : 1 < a.length ? (t = [e,e,"",o], x.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e,t) {
                        for (var n,r = a(e,o),i = r.length; i--;) e[n = M(e,r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e,0,t)
                    }) : a
                }
            },
            pseudos: {
                not: se(function (e) {
                    var r = [],i = [],s = d(e.replace(z,"$1"));
                    return s[N] ? se(function (e,t,n,r) {
                        for (var i,o = s(e,null,r,[]),a = e.length; a--;) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e,t,n) {
                        return r[0] = e, s(r,null,n,i), r[0] = null, !i.pop()
                    }
                }),has: se(function (t) {
                    return function (e) {
                        return 0 < oe(t,e).length
                    }
                }),contains: se(function (t) {
                    return t = t.replace(ne,re), function (e) {
                        return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                    }
                }),lang: se(function (n) {
                    return J.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(ne,re).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
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
                    return !x.pseudos.empty(e)
                },header: function (e) {
                    return Q.test(e.nodeName)
                },input: function (e) {
                    return G.test(e.nodeName)
                },button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },first: pe(function () {
                    return [0]
                }),last: pe(function (e,t) {
                    return [t - 1]
                }),eq: pe(function (e,t,n) {
                    return [n < 0 ? n + t : n]
                }),even: pe(function (e,t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),odd: pe(function (e,t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),lt: pe(function (e,t,n) {
                    for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
                    return e
                }),gt: pe(function (e,t,n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq, {radio: !0,checkbox: !0,file: !0,password: !0,image: !0}) x.pseudos[e] = de(e);
        for (e in {submit: !0,reset: !0}) x.pseudos[e] = fe(e);

        function me() {
        }

        function ge(e) {
            for (var t = 0,n = e.length,r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function ve(a,e,t) {
            var s = e.dir,l = t && "parentNode" === s,u = f++;
            return e.first ? function (e,t,n) {
                for (; e = e[s];) if (1 === e.nodeType || l) return a(e,t,n)
            } : function (e,t,n) {
                var r,i,o = [k,u];
                if (n) {
                    for (; e = e[s];) if ((1 === e.nodeType || l) && a(e,t,n)) return !0
                } else for (; e = e[s];) if (1 === e.nodeType || l) {
                    if ((r = (i = e[N] || (e[N] = {}))[s]) && r[0] === k && r[1] === u) return o[2] = r[2];
                    if ((i[s] = o)[2] = a(e,t,n)) return !0
                }
            }
        }

        function ye(i) {
            return 1 < i.length ? function (e,t,n) {
                for (var r = i.length; r--;) if (!i[r](e,t,n)) return !1;
                return !0
            } : i[0]
        }

        function be(e,t,n) {
            for (var r = 0,i = t.length; r < i; r++) oe(e,t[r],n);
            return n
        }

        function xe(e,t,n,r,i) {
            for (var o,a = [],s = 0,l = e.length,u = null != t; s < l; s++) (o = e[s]) && (!n || n(o,r,i)) && (a.push(o), u && t.push(s));
            return a
        }

        function we(p,h,m,g,v,e) {
            return g && !g[N] && (g = we(g)), v && !v[N] && (v = we(v,e)), se(function (e,t,n,r) {
                var i,o,a,s = [],l = [],u = t.length,c = e || be(h || "*",n.nodeType ? [n] : n,[]),
                    d = !p || !e && h ? c : xe(c,s,p,n,r),f = m ? v || (e ? p : u || g) ? [] : t : d;
                if (m && m(d,f,n,r), g) for (i = xe(f,l), g(i,[],n,r), o = i.length; o--;) (a = i[o]) && (f[l[o]] = !(d[l[o]] = a));
                if (e) {
                    if (v || p) {
                        if (v) {
                            for (i = [], o = f.length; o--;) (a = f[o]) && i.push(d[o] = a);
                            v(null,f = [],i,r)
                        }
                        for (o = f.length; o--;) (a = f[o]) && -1 < (i = v ? M(e,a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else f = xe(f === t ? f.splice(u,f.length) : f), v ? v(null,t,f,r) : q.apply(t,f)
            })
        }

        function Te(e) {
            for (var i,t,n,r = e.length,o = x.relative[e[0].type],a = o || x.relative[" "],s = o ? 1 : 0,l = ve(function (e) {
                return e === i
            },a,!0),u = ve(function (e) {
                return -1 < M(i,e)
            },a,!0),c = [function (e,t,n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? l(e,t,n) : u(e,t,n));
                return i = null, r
            }]; s < r; s++) if (t = x.relative[e[s].type]) c = [ve(ye(c),t)]; else {
                if ((t = x.filter[e[s].type].apply(null,e[s].matches))[N]) {
                    for (n = ++s; n < r && !x.relative[e[n].type]; n++) ;
                    return we(1 < s && ye(c),1 < s && ge(e.slice(0,s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(z,"$1"),t,s < n && Te(e.slice(s,n)),n < r && Te(e = e.slice(n)),n < r && ge(e))
                }
                c.push(t)
            }
            return ye(c)
        }

        function Ce(g,v) {
            var y = 0 < v.length,b = 0 < g.length,e = function (e,t,n,r,i) {
                var o,a,s,l = 0,u = "0",c = e && [],d = [],f = w,p = e || b && x.find.TAG("*",i),
                    h = k += null == f ? 1 : Math.random() || .1,m = p.length;
                for (i && (w = t !== T && t); u !== m && null != (o = p[u]); u++) {
                    if (b && o) {
                        for (a = 0; s = g[a++];) if (s(o,t,n)) {
                            r.push(o);
                            break
                        }
                        i && (k = h)
                    }
                    y && ((o = !s && o) && l--, e && c.push(o))
                }
                if (l += u, y && u !== l) {
                    for (a = 0; s = v[a++];) s(c,d,t,n);
                    if (e) {
                        if (0 < l) for (; u--;) c[u] || d[u] || (d[u] = L.call(r));
                        d = xe(d)
                    }
                    q.apply(r,d), i && !e && 0 < d.length && 1 < l + v.length && oe.uniqueSort(r)
                }
                return i && (k = h, w = f), c
            };
            return y ? se(e) : e
        }

        return me.prototype = x.filters = x.pseudos, x.setFilters = new me, m = oe.tokenize = function (e,t) {
            var n,r,i,o,a,s,l,u = p[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, s = [], l = x.preFilter; a;) {
                for (o in (!n || (r = I.exec(a))) && (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(z," ")
                }), a = a.slice(n.length)), x.filter) !(r = Y[o].exec(a)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : p(e,s).slice(0)
        }, d = oe.compile = function (e,t) {
            var n,r = [],i = [],o = S[e + " "];
            if (!o) {
                for (t || (t = m(e)), n = t.length; n--;) (o = Te(t[n]))[N] ? r.push(o) : i.push(o);
                (o = S(e,Ce(i,r))).selector = e
            }
            return o
        }, g = oe.select = function (e,t,n,r) {
            var i,o,a,s,l,u = "function" == typeof e && e,c = !r && m(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && y && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(ne,re),t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = Y.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !x.relative[s = a.type]);) if ((l = x.find[s]) && (r = l(a.matches[0].replace(ne,re),ee.test(o[0].type) && he(t.parentNode) || t))) {
                    if (o.splice(i,1), !(e = r.length && ge(o))) return q.apply(n,r), n;
                    break
                }
            }
            return (u || d(e,c))(r,t,!y,n,ee.test(e) && he(t.parentNode) || t), n
        }, h.sortStable = N.split("").sort(A).join("") === N, h.detectDuplicates = !!c, v(), h.sortDetached = le(function (e) {
            return 1 & e.compareDocumentPosition(T.createElement("div"))
        }), le(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width",function (e,t,n) {
            return n ? void 0 : e.getAttribute(t,"type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && le(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value",""), "" === e.firstChild.getAttribute("value")
        }) || ue("value",function (e,t,n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), le(function (e) {
            return null == e.getAttribute("disabled")
        }) || ue(F,function (e,t,n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(h);
    C.find = p, C.expr = p.selectors, C.expr[":"] = C.expr.pseudos, C.unique = p.uniqueSort, C.text = p.getText, C.isXMLDoc = p.isXML, C.contains = p.contains;
    var y = C.expr.match.needsContext,b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,x = /^.[^:#\[\.,]*$/;

    function w(e,n,r) {
        if (C.isFunction(n)) return C.grep(e,function (e,t) {
            return !!n.call(e,t,e) !== r
        });
        if (n.nodeType) return C.grep(e,function (e) {
            return e === n !== r
        });
        if ("string" == typeof n) {
            if (x.test(n)) return C.filter(n,e,r);
            n = C.filter(n,e)
        }
        return C.grep(e,function (e) {
            return 0 <= C.inArray(e,n) !== r
        })
    }

    C.filter = function (e,t,n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r,e) ? [r] : [] : C.find.matches(e,C.grep(t,function (e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function (e) {
            var t,n = [],r = this,i = r.length;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                for (t = 0; t < i; t++) if (C.contains(r[t],this)) return !0
            }));
            for (t = 0; t < i; t++) C.find(e,r[t],n);
            return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },filter: function (e) {
            return this.pushStack(w(this,e || [],!1))
        },not: function (e) {
            return this.pushStack(w(this,e || [],!0))
        },is: function (e) {
            return !!w(this,"string" == typeof e && y.test(e) ? C(e) : e || [],!1).length
        }
    });
    var T,N = h.document,E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k;
    (C.fn.init = function (e,t) {
        var n,r;
        if (!e) return this;
        if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? void 0 !== T.ready ? T.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e,this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null,e,null] : E.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this,C.parseHTML(n[1],t && t.nodeType ? t.ownerDocument || t : N,!0)), b.test(n[1]) && C.isPlainObject(t)) for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n,t[n]);
            return this
        }
        if ((r = N.getElementById(n[2])) && r.parentNode) {
            if (r.id !== n[2]) return T.find(e);
            this.length = 1, this[0] = r
        }
        return this.context = N, this.selector = e, this
    }).prototype = C.fn, T = C(N);
    var S = /^(?:parents|prev(?:Until|All))/,A = {children: !0,contents: !0,next: !0,prev: !0};

    function D(e,t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    C.extend({
        dir: function (e,t,n) {
            for (var r = [],i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !C(i).is(n));) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },sibling: function (e,t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), C.fn.extend({
        has: function (e) {
            var t,n = C(e,this),r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++) if (C.contains(this,n[t])) return !0
            })
        },closest: function (e,t) {
            for (var n,r = 0,i = this.length,o = [],a = y.test(e) || "string" != typeof e ? C(e,t || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n,e))) {
                o.push(n);
                break
            }
            return this.pushStack(1 < o.length ? C.unique(o) : o)
        },index: function (e) {
            return e ? "string" == typeof e ? C.inArray(this[0],C(e)) : C.inArray(e.jquery ? e[0] : e,this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },add: function (e,t) {
            return this.pushStack(C.unique(C.merge(this.get(),C(e,t))))
        },addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },parents: function (e) {
            return C.dir(e,"parentNode")
        },parentsUntil: function (e,t,n) {
            return C.dir(e,"parentNode",n)
        },next: function (e) {
            return D(e,"nextSibling")
        },prev: function (e) {
            return D(e,"previousSibling")
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
            return C.nodeName(e,"iframe") ? e.contentDocument || e.contentWindow.document : C.merge([],e.childNodes)
        }
    },function (r,i) {
        C.fn[r] = function (e,t) {
            var n = C.map(this,i,e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t,n)), 1 < this.length && (A[r] || (n = C.unique(n)), S.test(r) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var j = /\S+/g,L = {},H;

    function q(e) {
        var n = L[e] = {};
        return C.each(e.match(j) || [],function (e,t) {
            n[t] = !0
        }), n
    }

    function _() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded",M,!1), h.removeEventListener("load",M,!1)) : (N.detachEvent("onreadystatechange",M), h.detachEvent("onload",M))
    }

    function M() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (_(), C.ready())
    }

    C.Callbacks = function (i) {
        i = "string" == typeof i ? L[i] || q(i) : C.extend({},i);
        var r,t,n,o,a,s,l = [],u = !i.once && [],c = function (e) {
            for (t = i.memory && e, n = !0, a = s || 0, s = 0, o = l.length, r = !0; l && a < o; a++) if (!1 === l[a].apply(e[0],e[1]) && i.stopOnFalse) {
                t = !1;
                break
            }
            r = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable())
        },d = {
            add: function () {
                if (l) {
                    var e = l.length;
                    !function r(e) {
                        C.each(e,function (e,t) {
                            var n = C.type(t);
                            "function" === n ? i.unique && d.has(t) || l.push(t) : t && t.length && "string" !== n && r(t)
                        })
                    }(arguments), r ? o = l.length : t && (s = e, c(t))
                }
                return this
            },remove: function () {
                return l && C.each(arguments,function (e,t) {
                    for (var n; -1 < (n = C.inArray(t,l,n));) l.splice(n,1), r && (n <= o && o--, n <= a && a--)
                }), this
            },has: function (e) {
                return e ? -1 < C.inArray(e,l) : !(!l || !l.length)
            },empty: function () {
                return l = [], o = 0, this
            },disable: function () {
                return l = u = t = void 0, this
            },disabled: function () {
                return !l
            },lock: function () {
                return u = void 0, t || d.disable(), this
            },locked: function () {
                return !u
            },fireWith: function (e,t) {
                return !l || n && !u || (t = [e,(t = t || []).slice ? t.slice() : t], r ? u.push(t) : c(t)), this
            },fire: function () {
                return d.fireWith(this,arguments), this
            },fired: function () {
                return !!n
            }
        };
        return d
    }, C.extend({
        Deferred: function (e) {
            var o = [["resolve","done",C.Callbacks("once memory"),"resolved"],["reject","fail",C.Callbacks("once memory"),"rejected"],["notify","progress",C.Callbacks("memory")]],
                i = "pending",a = {
                    state: function () {
                        return i
                    },always: function () {
                        return s.done(arguments).fail(arguments), this
                    },then: function () {
                        var i = arguments;
                        return C.Deferred(function (r) {
                            C.each(o,function (e,t) {
                                var n = C.isFunction(i[e]) && i[e];
                                s[t[1]](function () {
                                    var e = n && n.apply(this,arguments);
                                    e && C.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === a ? r.promise() : this,n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },promise: function (e) {
                        return null != e ? C.extend(e,a) : a
                    }
                },s = {};
            return a.pipe = a.then, C.each(o,function (e,t) {
                var n = t[2],r = t[3];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                },o[1 ^ e][2].disable,o[2][2].lock), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? a : this,arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s,s), s
        },when: function (e) {
            var t = 0,n = c.call(arguments),r = n.length,i = 1 !== r || e && C.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : C.Deferred(),a = function (t,n,r) {
                    return function (e) {
                        n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === s ? o.notifyWith(n,r) : --i || o.resolveWith(n,r)
                    }
                },s,l,u;
            if (1 < r) for (s = new Array(r), l = new Array(r), u = new Array(r); t < r; t++) n[t] && C.isFunction(n[t].promise) ? n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)) : --i;
            return i || o.resolveWith(u,n), o.promise()
        }
    }), C.fn.ready = function (e) {
        return C.ready.promise().done(e), this
    }, C.extend({
        isReady: !1,readyWait: 1,holdReady: function (e) {
            e ? C.readyWait++ : C.ready(!0)
        },ready: function (e) {
            if (!0 === e ? !--C.readyWait : !C.isReady) {
                if (!N.body) return setTimeout(C.ready);
                (C.isReady = !0) !== e && 0 < --C.readyWait || (H.resolveWith(N,[C]), C.fn.triggerHandler && (C(N).triggerHandler("ready"), C(N).off("ready")))
            }
        }
    }), C.ready.promise = function (e) {
        if (!H) if (H = C.Deferred(), "complete" === N.readyState) setTimeout(C.ready); else if (N.addEventListener) N.addEventListener("DOMContentLoaded",M,!1), h.addEventListener("load",M,!1); else {
            N.attachEvent("onreadystatechange",M), h.attachEvent("onload",M);
            var n = !1;
            try {
                n = null == h.frameElement && N.documentElement
            } catch (e) {
            }
            n && n.doScroll && function t() {
                if (!C.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(t,50)
                    }
                    _(), C.ready()
                }
            }()
        }
        return H.promise(e)
    };
    var F = "undefined",O;
    for (O in C(v)) break;
    v.ownLast = "0" !== O, v.inlineBlockNeedsLayout = !1, C(function () {
        var e,t,n,r;
        (n = N.getElementsByTagName("body")[0]) && n.style && (t = N.createElement("div"), (r = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== F && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
    }), function () {
        var e = N.createElement("div");
        if (null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                v.deleteExpando = !1
            }
        }
        e = null
    }(), C.acceptData = function (e) {
        var t = C.noData[(e.nodeName + " ").toLowerCase()],n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    };
    var B = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,P = /([A-Z])/g;

    function R(e,t,n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(P,"-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : B.test(n) ? C.parseJSON(n) : n)
                } catch (e) {
                }
                C.data(e,t,n)
            } else n = void 0
        }
        return n
    }

    function W(e) {
        var t;
        for (t in e) if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function $(e,t,n,r) {
        if (C.acceptData(e)) {
            var i,o,a = C.expando,s = e.nodeType,l = s ? C.cache : e,
                u = s ? e[a] : e[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = d.pop() || C.guid++ : a), l[u] || (l[u] = s ? {} : {toJSON: C.noop}), ("object" == typeof t || "function" == typeof t) && (r ? l[u] = C.extend(l[u],t) : l[u].data = C.extend(l[u].data,t)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[C.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[C.camelCase(t)]) : i = o, i
        }
    }

    function z(e,t,n) {
        if (C.acceptData(e)) {
            var r,i,o = e.nodeType,a = o ? C.cache : e,s = o ? e[C.expando] : C.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    i = (t = C.isArray(t) ? t.concat(C.map(t,C.camelCase)) : t in r ? [t] : (t = C.camelCase(t)) in r ? [t] : t.split(" ")).length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !W(r) : !C.isEmptyObject(r)) return
                }
                (n || (delete a[s].data, W(a[s]))) && (o ? C.cleanData([e],!0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    C.extend({
        cache: {},
        noData: {"applet ": !0,"embed ": !0,"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !W(e)
        },
        data: function (e,t,n) {
            return $(e,t,n)
        },
        removeData: function (e,t) {
            return z(e,t)
        },
        _data: function (e,t,n) {
            return $(e,t,n,!0)
        },
        _removeData: function (e,t) {
            return z(e,t,!0)
        }
    }), C.fn.extend({
        data: function (e,t) {
            var n,r,i,o = this[0],a = o && o.attributes;
            if (void 0 !== e) return "object" == typeof e ? this.each(function () {
                C.data(this,e)
            }) : 1 < arguments.length ? this.each(function () {
                C.data(this,e,t)
            }) : o ? R(o,e,C.data(o,e)) : void 0;
            if (this.length && (i = C.data(o), 1 === o.nodeType && !C._data(o,"parsedAttrs"))) {
                for (n = a.length; n--;) a[n] && (0 === (r = a[n].name).indexOf("data-") && R(o,r = C.camelCase(r.slice(5)),i[r]));
                C._data(o,"parsedAttrs",!0)
            }
            return i
        },removeData: function (e) {
            return this.each(function () {
                C.removeData(this,e)
            })
        }
    }), C.extend({
        queue: function (e,t,n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = C._data(e,t), n && (!r || C.isArray(n) ? r = C._data(e,t,C.makeArray(n)) : r.push(n)), r || []) : void 0
        },dequeue: function (e,t) {
            t = t || "fx";
            var n = C.queue(e,t),r = n.length,i = n.shift(),o = C._queueHooks(e,t),a = function () {
                C.dequeue(e,t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e,a,o)), !r && o && o.empty.fire()
        },_queueHooks: function (e,t) {
            var n = t + "queueHooks";
            return C._data(e,n) || C._data(e,n,{
                empty: C.Callbacks("once memory").add(function () {
                    C._removeData(e,t + "queue"), C._removeData(e,n)
                })
            })
        }
    }), C.fn.extend({
        queue: function (t,n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0],t) : void 0 === n ? this : this.each(function () {
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
            var n,r = 1,i = C.Deferred(),o = this,a = this.length,s = function () {
                --r || i.resolveWith(o,[o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = C._data(o[a],e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var I = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,X = ["Top","Right","Bottom","Left"],U = function (e,t) {
        return e = t || e, "none" === C.css(e,"display") || !C.contains(e.ownerDocument,e)
    },V = C.access = function (e,t,n,r,i,o,a) {
        var s = 0,l = e.length,u = null == n;
        if ("object" === C.type(n)) for (s in i = !0, n) C.access(e,t,s,n[s],!0,o,a); else if (void 0 !== r && (i = !0, C.isFunction(r) || (a = !0), u && (t = a ? (t.call(e,r), null) : (u = t, function (e,t,n) {
            return u.call(C(e),n)
        })), t)) for (; s < l; s++) t(e[s],n,a ? r : r.call(e[s],s,t(e[s],n)));
        return i ? e : u ? t.call(e) : l ? t(e[0],n) : o
    },J = /^(?:checkbox|radio)$/i;
    !function () {
        var e = N.createElement("input"),t = N.createElement("div"),n = N.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === t.firstChild.nodeType, v.tbody = !t.getElementsByTagName("tbody").length, v.htmlSerialize = !!t.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), v.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick",function () {
            v.noCloneEvent = !1
        }), t.cloneNode(!0).click()), null == v.deleteExpando) {
            v.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                v.deleteExpando = !1
            }
        }
    }(), function () {
        var e,t,n = N.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (v[e + "Bubbles"] = t in h) || (n.setAttribute(t,"t"), v[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var Y = /^(?:input|select|textarea)$/i,G = /^key/,Q = /^(?:mouse|pointer|contextmenu)|click/,
        K = /^(?:focusinfocus|focusoutblur)$/,Z = /^([^.]*)(?:\.(.+)|)$/;

    function ee() {
        return !0
    }

    function te() {
        return !1
    }

    function ne() {
        try {
            return N.activeElement
        } catch (e) {
        }
    }

    function re(e) {
        var t = ie.split("|"),n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }

    C.event = {
        global: {},
        add: function (e,t,n,r,i) {
            var o,a,s,l,u,c,d,f,p,h,m,g = C._data(e);
            if (g) {
                for (n.handler && (n = (l = n).handler, i = l.selector), n.guid || (n.guid = C.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function (e) {
                    return typeof C === F || e && C.event.triggered === e.type ? void 0 : C.event.dispatch.apply(c.elem,arguments)
                }).elem = e), s = (t = (t || "").match(j) || [""]).length; s--;) p = m = (o = Z.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (u = C.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = C.event.special[p] || {}, d = C.extend({
                    type: p,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && C.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                },l), (f = a[p]) || ((f = a[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e,r,h,c) || (e.addEventListener ? e.addEventListener(p,c,!1) : e.attachEvent && e.attachEvent("on" + p,c))), u.add && (u.add.call(e,d), d.handler.guid || (d.handler.guid = n.guid)), i ? f.splice(f.delegateCount++,0,d) : f.push(d), C.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e,t,n,r,i) {
            var o,a,s,l,u,c,d,f,p,h,m,g = C.hasData(e) && C._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(j) || [""]).length; u--;) if (p = m = (s = Z.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                    for (d = C.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o,1), a.selector && f.delegateCount--, d.remove && d.remove.call(e,a));
                    l && !f.length && (d.teardown && !1 !== d.teardown.call(e,h,g.handle) || C.removeEvent(e,p,g.handle), delete c[p])
                } else for (p in c) C.event.remove(e,p + t[u],n,r,!0);
                C.isEmptyObject(c) && (delete g.handle, C._removeData(e,"events"))
            }
        },
        trigger: function (e,t,n,r) {
            var i,o,a,s,l,u,c,d = [n || N],f = g.call(e,"type") ? e.type : e,
                p = g.call(e,"namespace") ? e.namespace.split(".") : [];
            if (a = u = n = n || N, 3 !== n.nodeType && 8 !== n.nodeType && !K.test(f + C.event.triggered) && (0 <= f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), o = f.indexOf(":") < 0 && "on" + f, (e = e[C.expando] ? e : new C.Event(f,"object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t,[e]), l = C.event.special[f] || {}, r || !l.trigger || !1 !== l.trigger.apply(n,t))) {
                if (!r && !l.noBubble && !C.isWindow(n)) {
                    for (s = l.delegateType || f, K.test(s + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (n.ownerDocument || N) && d.push(u.defaultView || u.parentWindow || h)
                }
                for (c = 0; (a = d[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : l.bindType || f, (i = (C._data(a,"events") || {})[e.type] && C._data(a,"handle")) && i.apply(a,t), (i = o && a[o]) && i.apply && C.acceptData(a) && (e.result = i.apply(a,t), !1 === e.result && e.preventDefault());
                if (e.type = f, !r && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(),t)) && C.acceptData(n) && o && n[f] && !C.isWindow(n)) {
                    (u = n[o]) && (n[o] = null), C.event.triggered = f;
                    try {
                        n[f]()
                    } catch (e) {
                    }
                    C.event.triggered = void 0, u && (n[o] = u)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t,n,r,i,o,a = [],s = c.call(arguments),l = (C._data(this,"events") || {})[e.type] || [],
                u = C.event.special[e.type] || {};
            if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this,e)) {
                for (a = C.event.handlers.call(this,e,l), t = 0; (i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, o = 0; (r = i.handlers[o++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(i.elem,s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this,e), e.result
            }
        },
        handlers: function (e,t) {
            var n,r,i,o,a = [],s = t.delegateCount,l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (i = [], o = 0; o < s; o++) void 0 === i[n = (r = t[o]).selector + " "] && (i[n] = r.needsContext ? 0 <= C(n,this).index(l) : C.find(n,this,null,[l]).length), i[n] && i.push(r);
                i.length && a.push({elem: l,handlers: i})
            }
            return s < t.length && a.push({elem: this,handlers: t.slice(s)}), a
        },
        fix: function (e) {
            if (e[C.expando]) return e;
            var t,n,r,i = e.type,o = e,a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Q.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(o), t = r.length; t--;) e[n = r[t]] = o[n];
            return e.target || (e.target = o.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e,o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),filter: function (e,t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e,t) {
                var n,r,i,o = t.button,a = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = (r = e.target.ownerDocument || N).documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0},focus: {
                trigger: function () {
                    if (this !== ne() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                },delegateType: "focusin"
            },blur: {
                trigger: function () {
                    return this === ne() && this.blur ? (this.blur(), !1) : void 0
                },delegateType: "focusout"
            },click: {
                trigger: function () {
                    return C.nodeName(this,"input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
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
            r ? C.event.trigger(i,null,t) : C.event.dispatch.call(t,i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, C.removeEvent = N.removeEventListener ? function (e,t,n) {
        e.removeEventListener && e.removeEventListener(t,n,!1)
    } : function (e,t,n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === F && (e[r] = null), e.detachEvent(r,n))
    }, C.Event = function (e,t) {
        return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ee : te) : this.type = e, t && C.extend(this,t), this.timeStamp = e && e.timeStamp || C.now(), void (this[C.expando] = !0)) : new C.Event(e,t)
    }, C.Event.prototype = {
        isDefaultPrevented: te,
        isPropagationStopped: te,
        isImmediatePropagationStopped: te,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ee, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ee, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
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
                return (!r || r !== n && !C.contains(n,r)) && (e.type = i.origType, t = i.handler.apply(this,arguments), e.type = o), t
            }
        }
    }), v.submitBubbles || (C.event.special.submit = {
        setup: function () {
            return !C.nodeName(this,"form") && void C.event.add(this,"click._submit keypress._submit",function (e) {
                var t = e.target,n = C.nodeName(t,"input") || C.nodeName(t,"button") ? t.form : void 0;
                n && !C._data(n,"submitBubbles") && (C.event.add(n,"submit._submit",function (e) {
                    e._submit_bubble = !0
                }), C._data(n,"submitBubbles",!0))
            })
        },postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && C.event.simulate("submit",this.parentNode,e,!0))
        },teardown: function () {
            return !C.nodeName(this,"form") && void C.event.remove(this,"._submit")
        }
    }), v.changeBubbles || (C.event.special.change = {
        setup: function () {
            return Y.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (C.event.add(this,"propertychange._change",function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), C.event.add(this,"click._change",function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), C.event.simulate("change",this,e,!0)
            })), !1) : void C.event.add(this,"beforeactivate._change",function (e) {
                var t = e.target;
                Y.test(t.nodeName) && !C._data(t,"changeBubbles") && (C.event.add(t,"change._change",function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change",this.parentNode,e,!0)
                }), C._data(t,"changeBubbles",!0))
            })
        },handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this,arguments) : void 0
        },teardown: function () {
            return C.event.remove(this,"._change"), !Y.test(this.nodeName)
        }
    }), v.focusinBubbles || C.each({focus: "focusin",blur: "focusout"},function (n,r) {
        var i = function (e) {
            C.event.simulate(r,e.target,C.event.fix(e),!0)
        };
        C.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this,t = C._data(e,r);
                t || e.addEventListener(n,i,!0), C._data(e,r,(t || 0) + 1)
            },teardown: function () {
                var e = this.ownerDocument || this,t = C._data(e,r) - 1;
                t ? C._data(e,r,t) : (e.removeEventListener(n,i,!0), C._removeData(e,r))
            }
        }
    }), C.fn.extend({
        on: function (e,t,n,r,i) {
            var o,a;
            if ("object" == typeof e) {
                for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o,t,n,e[o],i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = te; else if (!r) return this;
            return 1 === i && (a = r, (r = function (e) {
                return C().off(e), a.apply(this,arguments)
            }).guid = a.guid || (a.guid = C.guid++)), this.each(function () {
                C.event.add(this,e,r,n,t)
            })
        },one: function (e,t,n,r) {
            return this.on(e,t,n,r,1)
        },off: function (e,t,n) {
            var r,i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType,r.selector,r.handler), this;
            if ("object" != typeof e) return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = te), this.each(function () {
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
            return n ? C.event.trigger(e,t,n,!0) : void 0
        }
    });
    var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        oe = / jQuery\d+="(?:null|\d+)"/g,ae = new RegExp("<(?:" + ie + ")[\\s/>]","i"),se = /^\s+/,
        le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ue = /<([\w:]+)/,ce = /<tbody/i,
        de = /<|&#?\w+;/,fe = /<(?:script|style|link)/i,pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        he = /^$|\/(?:java|ecma)script/i,me = /^true\/(.*)/,ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ve = {
            option: [1,"<select multiple='multiple'>","</select>"],
            legend: [1,"<fieldset>","</fieldset>"],
            area: [1,"<map>","</map>"],
            param: [1,"<object>","</object>"],
            thead: [1,"<table>","</table>"],
            tr: [2,"<table><tbody>","</tbody></table>"],
            col: [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
            td: [3,"<table><tbody><tr>","</tr></tbody></table>"],
            _default: v.htmlSerialize ? [0,"",""] : [1,"X<div>","</div>"]
        },ye,be = re(N).appendChild(N.createElement("div"));

    function xe(e,t) {
        var n,r,i = 0,
            o = typeof e.getElementsByTagName !== F ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== F ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || C.nodeName(r,t) ? o.push(r) : C.merge(o,xe(r,t));
        return void 0 === t || t && C.nodeName(e,t) ? C.merge([e],o) : o
    }

    function we(e) {
        J.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Te(e,t) {
        return C.nodeName(e,"table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild,"tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ce(e) {
        return e.type = (null !== C.find.attr(e,"type")) + "/" + e.type, e
    }

    function Ne(e) {
        var t = me.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ee(e,t) {
        for (var n,r = 0; null != (n = e[r]); r++) C._data(n,"globalEval",!t || C._data(t[r],"globalEval"))
    }

    function ke(e,t) {
        if (1 === t.nodeType && C.hasData(e)) {
            var n,r,i,o = C._data(e),a = C._data(t,o),s = o.events;
            if (s) for (n in delete a.handle, a.events = {}, s) for (r = 0, i = s[n].length; r < i; r++) C.event.add(t,n,s[n][r]);
            a.data && (a.data = C.extend({},a.data))
        }
    }

    function Se(e,t) {
        var n,r,i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[C.expando]) {
                for (r in (i = C._data(t)).events) C.removeEvent(t,r,i.handle);
                t.removeAttribute(C.expando)
            }
            "script" === n && t.text !== e.text ? (Ce(t).text = e.text, Ne(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && J.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, C.extend({
        clone: function (e,t,n) {
            var r,i,o,a,s,l = C.contains(e.ownerDocument,e);
            if (v.html5Clone || C.isXMLDoc(e) || !ae.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (be.innerHTML = e.outerHTML, be.removeChild(o = be.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (r = xe(o), s = xe(e), a = 0; null != (i = s[a]); ++a) r[a] && Se(i,r[a]);
            if (t) if (n) for (s = s || xe(e), r = r || xe(o), a = 0; null != (i = s[a]); a++) ke(i,r[a]); else ke(e,o);
            return 0 < (r = xe(o,"script")).length && Ee(r,!l && xe(e,"script")), r = s = i = null, o
        },buildFragment: function (e,t,n,r) {
            for (var i,o,a,s,l,u,c,d = e.length,f = re(t),p = [],h = 0; h < d; h++) if ((o = e[h]) || 0 === o) if ("object" === C.type(o)) C.merge(p,o.nodeType ? [o] : o); else if (de.test(o)) {
                for (s = s || f.appendChild(t.createElement("div")), l = (ue.exec(o) || ["",""])[1].toLowerCase(), c = ve[l] || ve._default, s.innerHTML = c[1] + o.replace(le,"<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
                if (!v.leadingWhitespace && se.test(o) && p.push(t.createTextNode(se.exec(o)[0])), !v.tbody) for (i = (o = "table" !== l || ce.test(o) ? "<table>" !== c[1] || ce.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) C.nodeName(u = o.childNodes[i],"tbody") && !u.childNodes.length && o.removeChild(u);
                for (C.merge(p,s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else p.push(t.createTextNode(o));
            for (s && f.removeChild(s), v.appendChecked || C.grep(xe(p,"input"),we), h = 0; o = p[h++];) if ((!r || -1 === C.inArray(o,r)) && (a = C.contains(o.ownerDocument,o), s = xe(f.appendChild(o),"script"), a && Ee(s), n)) for (i = 0; o = s[i++];) he.test(o.type || "") && n.push(o);
            return s = null, f
        },cleanData: function (e,t) {
            for (var n,r,i,o,a = 0,s = C.expando,l = C.cache,u = v.deleteExpando,c = C.event.special; null != (n = e[a]); a++) if ((t || C.acceptData(n)) && (o = (i = n[s]) && l[i])) {
                if (o.events) for (r in o.events) c[r] ? C.event.remove(n,r) : C.removeEvent(n,r,o.handle);
                l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== F ? n.removeAttribute(s) : n[s] = null, d.push(i))
            }
        }
    }), C.fn.extend({
        text: function (e) {
            return V(this,function (e) {
                return void 0 === e ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            },null,e,arguments.length)
        },append: function () {
            return this.domManip(arguments,function (e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Te(this,e).appendChild(e)
            })
        },prepend: function () {
            return this.domManip(arguments,function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Te(this,e);
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
            for (var n,r = e ? C.filter(e,this) : this,i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || C.cleanData(xe(n)), n.parentNode && (t && C.contains(n.ownerDocument,n) && Ee(xe(n,"script")), n.parentNode.removeChild(n));
            return this
        },empty: function () {
            for (var e,t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && C.cleanData(xe(e,!1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && C.nodeName(e,"select") && (e.options.length = 0)
            }
            return this
        },clone: function (e,t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return C.clone(this,e,t)
            })
        },html: function (e) {
            return V(this,function (e) {
                var t = this[0] || {},n = 0,r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(oe,"") : void 0;
                if (!("string" != typeof e || fe.test(e) || !v.htmlSerialize && ae.test(e) || !v.leadingWhitespace && se.test(e) || ve[(ue.exec(e) || ["",""])[1].toLowerCase()])) {
                    e = e.replace(le,"<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(xe(t,!1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            },null,e,arguments.length)
        },replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments,function (e) {
                t = this.parentNode, C.cleanData(xe(this)), t && t.replaceChild(e,this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },detach: function (e) {
            return this.remove(e,!0)
        },domManip: function (n,r) {
            n = m.apply([],n);
            var e,t,i,o,a,s,l = 0,u = this.length,c = this,d = u - 1,f = n[0],p = C.isFunction(f);
            if (p || 1 < u && "string" == typeof f && !v.checkClone && pe.test(f)) return this.each(function (e) {
                var t = c.eq(e);
                p && (n[0] = f.call(this,e,t.html())), t.domManip(n,r)
            });
            if (u && (e = (s = C.buildFragment(n,this[0].ownerDocument,!1,this)).firstChild, 1 === s.childNodes.length && (s = e), e)) {
                for (i = (o = C.map(xe(s,"script"),Ce)).length; l < u; l++) t = s, l !== d && (t = C.clone(t,!0,!0), i && C.merge(o,xe(t,"script"))), r.call(this[l],t,l);
                if (i) for (a = o[o.length - 1].ownerDocument, C.map(o,Ne), l = 0; l < i; l++) t = o[l], he.test(t.type || "") && !C._data(t,"globalEval") && C.contains(a,t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(ge,"")));
                s = e = null
            }
            return this
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },function (e,a) {
        C.fn[e] = function (e) {
            for (var t,n = 0,r = [],i = C(e),o = i.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), C(i[n])[a](t), s.apply(r,t.get());
            return this.pushStack(r)
        }
    });
    var Ae,De = {},je;

    function Le(e,t) {
        var n,r = C(t.createElement(e)).appendTo(t.body),
            i = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0])) ? n.display : C.css(r[0],"display");
        return r.detach(), i
    }

    function He(e) {
        var t = N,n = De[e];
        return n || ("none" !== (n = Le(e,t)) && n || ((t = ((Ae = (Ae || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ae[0].contentDocument).document).write(), t.close(), n = Le(e,t), Ae.detach()), De[e] = n), n
    }

    v.shrinkWrapBlocks = function () {
        return null != je ? je : (je = !1, (t = N.getElementsByTagName("body")[0]) && t.style ? (e = N.createElement("div"), (n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== F && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(N.createElement("div")).style.width = "5px", je = 3 !== e.offsetWidth), t.removeChild(n), je) : void 0);
        var e,t,n
    };
    var qe = /^margin/,_e = new RegExp("^(" + I + ")(?!px)[a-z%]+$","i"),Me,Fe,Oe = /^(top|right|bottom|left)$/;

    function Be(t,n) {
        return {
            get: function () {
                var e = t();
                if (null != e) return e ? void delete this.get : (this.get = n).apply(this,arguments)
            }
        }
    }

    h.getComputedStyle ? (Me = function (e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e,null) : h.getComputedStyle(e,null)
    }, Fe = function (e,t,n) {
        var r,i,o,a,s = e.style;
        return a = (n = n || Me(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || C.contains(e.ownerDocument,e) || (a = C.style(e,t)), _e.test(a) && qe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 === a ? a : a + ""
    }) : N.documentElement.currentStyle && (Me = function (e) {
        return e.currentStyle
    }, Fe = function (e,t,n) {
        var r,i,o,a,s = e.style;
        return null == (a = (n = n || Me(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), _e.test(a) && !Oe.test(t) && (r = s.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto"
    }), function () {
        var e,t,n,i,o,a,s;
        if ((e = N.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = (n = e.getElementsByTagName("a")[0]) && n.style) {
            function r() {
                var e,t,n,r;
                (t = N.getElementsByTagName("body")[0]) && t.style && (e = N.createElement("div"), (n = N.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = o = !1, s = !0, h.getComputedStyle && (i = "1%" !== (h.getComputedStyle(e,null) || {}).top, o = "4px" === (h.getComputedStyle(e,null) || {width: "4px"}).width, (r = e.appendChild(N.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", r.style.marginRight = r.style.width = "0", e.style.width = "1px", s = !parseFloat((h.getComputedStyle(r,null) || {}).marginRight), e.removeChild(r)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (r = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === r[0].offsetHeight) && (r[0].style.display = "", r[1].style.display = "none", a = 0 === r[0].offsetHeight), t.removeChild(n))
            }

            t.cssText = "float:left;opacity:.5", v.opacity = "0.5" === t.opacity, v.cssFloat = !!t.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === e.style.backgroundClip, v.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing, C.extend(v,{
                reliableHiddenOffsets: function () {
                    return null == a && r(), a
                },boxSizingReliable: function () {
                    return null == o && r(), o
                },pixelPosition: function () {
                    return null == i && r(), i
                },reliableMarginRight: function () {
                    return null == s && r(), s
                }
            })
        }
    }(), C.swap = function (e,t,n,r) {
        var i,o,a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        for (o in i = n.apply(e,r || []), t) e.style[o] = a[o];
        return i
    };
    var Pe = /alpha\([^)]*\)/i,Re = /opacity\s*=\s*([^)]*)/,We = /^(none|table(?!-c[ea]).+)/,
        $e = new RegExp("^(" + I + ")(.*)$","i"),ze = new RegExp("^([+-])=(" + I + ")","i"),
        Ie = {position: "absolute",visibility: "hidden",display: "block"},Xe = {letterSpacing: "0",fontWeight: "400"},
        Ue = ["Webkit","O","Moz","ms"];

    function Ve(e,t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1),r = t,i = Ue.length; i--;) if ((t = Ue[i] + n) in e) return t;
        return r
    }

    function Je(e,t) {
        for (var n,r,i,o = [],a = 0,s = e.length; a < s; a++) (r = e[a]).style && (o[a] = C._data(r,"olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && U(r) && (o[a] = C._data(r,"olddisplay",He(r.nodeName)))) : (i = U(r), (n && "none" !== n || !i) && C._data(r,"olddisplay",i ? n : C.css(r,"display"))));
        for (a = 0; a < s; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function Ye(e,t,n) {
        var r = $e.exec(t);
        return r ? Math.max(0,r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Ge(e,t,n,r,i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,a = 0; o < 4; o += 2) "margin" === n && (a += C.css(e,n + X[o],!0,i)), r ? ("content" === n && (a -= C.css(e,"padding" + X[o],!0,i)), "margin" !== n && (a -= C.css(e,"border" + X[o] + "Width",!0,i))) : (a += C.css(e,"padding" + X[o],!0,i), "padding" !== n && (a += C.css(e,"border" + X[o] + "Width",!0,i)));
        return a
    }

    function Qe(e,t,n) {
        var r = !0,i = "width" === t ? e.offsetWidth : e.offsetHeight,o = Me(e),
            a = v.boxSizing && "border-box" === C.css(e,"boxSizing",!1,o);
        if (i <= 0 || null == i) {
            if (((i = Fe(e,t,o)) < 0 || null == i) && (i = e.style[t]), _e.test(i)) return i;
            r = a && (v.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Ge(e,t,n || (a ? "border" : "content"),r,o) + "px"
    }

    function Ke(e,t,n,r,i) {
        return new Ke.prototype.init(e,t,n,r,i)
    }

    C.extend({
        cssHooks: {
            opacity: {
                get: function (e,t) {
                    if (t) {
                        var n = Fe(e,"opacity");
                        return "" === n ? "1" : n
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
        cssProps: {float: v.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e,t,n,r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,o,a,s = C.camelCase(t),l = e.style;
                if (t = C.cssProps[s] || (C.cssProps[s] = Ve(l,s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e,!1,r)) ? i : l[t];
                if ("string" === (o = typeof n) && (i = ze.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(C.css(e,t)), o = "number"), null != n && n == n && ("number" !== o || C.cssNumber[s] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e,n,r))))) try {
                    l[t] = n
                } catch (e) {
                }
            }
        },
        css: function (e,t,n,r) {
            var i,o,a,s = C.camelCase(t);
            return t = C.cssProps[s] || (C.cssProps[s] = Ve(e.style,s)), (a = C.cssHooks[t] || C.cssHooks[s]) && "get" in a && (o = a.get(e,!0,n)), void 0 === o && (o = Fe(e,t,r)), "normal" === o && t in Xe && (o = Xe[t]), "" === n || n ? (i = parseFloat(o), !0 === n || C.isNumeric(i) ? i || 0 : o) : o
        }
    }), C.each(["height","width"],function (e,i) {
        C.cssHooks[i] = {
            get: function (e,t,n) {
                return t ? We.test(C.css(e,"display")) && 0 === e.offsetWidth ? C.swap(e,Ie,function () {
                    return Qe(e,i,n)
                }) : Qe(e,i,n) : void 0
            },set: function (e,t,n) {
                var r = n && Me(e);
                return Ye(e,t,n ? Ge(e,i,n,v.boxSizing && "border-box" === C.css(e,"boxSizing",!1,r),r) : 0)
            }
        }
    }), v.opacity || (C.cssHooks.opacity = {
        get: function (e,t) {
            return Re.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },set: function (e,t) {
            var n = e.style,r = e.currentStyle,i = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === C.trim(o.replace(Pe,"")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = Pe.test(o) ? o.replace(Pe,i) : o + " " + i)
        }
    }), C.cssHooks.marginRight = Be(v.reliableMarginRight,function (e,t) {
        return t ? C.swap(e,{display: "inline-block"},Fe,[e,"marginRight"]) : void 0
    }), C.each({margin: "",padding: "",border: "Width"},function (i,o) {
        C.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0,n = {},r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + X[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, qe.test(i) || (C.cssHooks[i + o].set = Ye)
    }), C.fn.extend({
        css: function (e,t) {
            return V(this,function (e,t,n) {
                var r,i,o = {},a = 0;
                if (C.isArray(t)) {
                    for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = C.css(e,t[a],!1,r);
                    return o
                }
                return void 0 !== n ? C.style(e,t,n) : C.css(e,t)
            },e,t,1 < arguments.length)
        },show: function () {
            return Je(this,!0)
        },hide: function () {
            return Je(this)
        },toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                U(this) ? C(this).show() : C(this).hide()
            })
        }
    }), (C.Tween = Ke).prototype = {
        constructor: Ke,init: function (e,t,n,r,i,o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t,
                this.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" : "px")
        },cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },run: function (e) {
            var t,n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e,this.options.duration * e,0,1,this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem,this.now,this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }, Ke.prototype.init.prototype = Ke.prototype, Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = C.css(e.elem,e.prop,"")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },set: function (e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[C.cssProps[e.prop]] || C.cssHooks[e.prop]) ? C.style(e.elem,e.prop,e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function (e) {
            return e
        },swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, C.fx = Ke.prototype.init, C.fx.step = {};
    var Ze,et,tt = /^(?:toggle|show|hide)$/,nt = new RegExp("^(?:([+-])=|)(" + I + ")([a-z%]*)$","i"),
        rt = /queueHooks$/,it = [ht],ot = {
            "*": [function (e,t) {
                var n = this.createTween(e,t),r = n.cur(),i = nt.exec(t),o = i && i[3] || (C.cssNumber[e] ? "" : "px"),
                    a = (C.cssNumber[e] || "px" !== o && +r) && nt.exec(C.css(n.elem,e)),s = 1,l = 20;
                if (a && a[3] !== o) for (o = o || a[3], i = i || [], a = +r || 1; a /= s = s || ".5", C.style(n.elem,e,a + o), s !== (s = n.cur() / r) && 1 !== s && --l;) ;
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        },at,st,lt,ut,ct;

    function dt() {
        return setTimeout(function () {
            Ze = void 0
        }), Ze = C.now()
    }

    function ft(e,t) {
        var n,r = {height: e},i = 0;
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = X[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function pt(e,t,n) {
        for (var r,i = (ot[t] || []).concat(ot["*"]),o = 0,a = i.length; o < a; o++) if (r = i[o].call(n,t,e)) return r
    }

    function ht(t,e,n) {
        var r,i,o,a,s,l,u,c,d = this,f = {},p = t.style,h = t.nodeType && U(t),m = C._data(t,"fxshow");
        for (r in n.queue || (null == (s = C._queueHooks(t,"fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, d.always(function () {
            d.always(function () {
                s.unqueued--, C.queue(t,"fx").length || s.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow,p.overflowX,p.overflowY], "inline" === (c = "none" === (u = C.css(t,"display")) ? C._data(t,"olddisplay") || He(t.nodeName) : u) && "none" === C.css(t,"float") && (v.inlineBlockNeedsLayout && "inline" !== He(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", v.shrinkWrapBlocks() || d.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        })), e) if (i = e[r], tt.exec(i)) {
            if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !m || void 0 === m[r]) continue;
                h = !0
            }
            f[r] = m && m[r] || C.style(t,r)
        } else u = void 0;
        if (C.isEmptyObject(f)) "inline" === ("none" === u ? He(t.nodeName) : u) && (p.display = u); else for (r in m ? "hidden" in m && (h = m.hidden) : m = C._data(t,"fxshow",{}), o && (m.hidden = !h), h ? C(t).show() : d.done(function () {
            C(t).hide()
        }), d.done(function () {
            var e;
            for (e in C._removeData(t,"fxshow"), f) C.style(t,e,f[e])
        }), f) a = pt(h ? m[r] : 0,r,d), r in m || (m[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
    }

    function mt(e,t) {
        var n,r,i,o,a;
        for (n in e) if (i = t[r = C.camelCase(n)], o = e[n], C.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = C.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
    }

    function gt(a,e,t) {
        var n,s,r = 0,i = it.length,l = C.Deferred().always(function () {
            delete o.elem
        }),o = function () {
            if (s) return !1;
            for (var e = Ze || dt(),t = Math.max(0,u.startTime + u.duration - e),n,r = 1 - (t / u.duration || 0),i = 0,o = u.tweens.length; i < o; i++) u.tweens[i].run(r);
            return l.notifyWith(a,[u,r,t]), r < 1 && o ? t : (l.resolveWith(a,[u]), !1)
        },u = l.promise({
            elem: a,
            props: C.extend({},e),
            opts: C.extend(!0,{specialEasing: {}},t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ze || dt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e,t) {
                var n = C.Tween(a,u.opts,e,t,u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0,n = e ? u.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < n; t++) u.tweens[t].run(1);
                return e ? l.resolveWith(a,[u,e]) : l.rejectWith(a,[u,e]), this
            }
        }),c = u.props;
        for (mt(c,u.opts.specialEasing); r < i; r++) if (n = it[r].call(u,a,c,u.opts)) return n;
        return C.map(c,pt,u), C.isFunction(u.opts.start) && u.opts.start.call(a,u), C.fx.timer(C.extend(o,{
            elem: a,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    C.Animation = C.extend(gt,{
        tweener: function (e,t) {
            for (var n,r = 0,i = (e = C.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; r < i; r++) n = e[r], ot[n] = ot[n] || [], ot[n].unshift(t)
        },prefilter: function (e,t) {
            t ? it.unshift(e) : it.push(e)
        }
    }), C.speed = function (e,t,n) {
        var r = e && "object" == typeof e ? C.extend({},e) : {
            complete: n || !n && t || C.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !C.isFunction(t) && t
        };
        return r.duration = C.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in C.fx.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            C.isFunction(r.old) && r.old.call(this), r.queue && C.dequeue(this,r.queue)
        }, r
    }, C.fn.extend({
        fadeTo: function (e,t,n,r) {
            return this.filter(U).css("opacity",0).show().end().animate({opacity: t},e,n,r)
        },animate: function (t,e,n,r) {
            var i = C.isEmptyObject(t),o = C.speed(e,n,r),a = function () {
                var e = gt(this,C.extend({},t),o);
                (i || C._data(this,"finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue,a)
        },stop: function (i,e,o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx",[]), this.each(function () {
                var e = !0,t = null != i && i + "queueHooks",n = C.timers,r = C._data(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && rt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t,1));
                (e || !o) && C.dequeue(this,i)
            })
        },finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e,t = C._data(this),n = t[a + "queue"],r = t[a + "queueHooks"],i = C.timers,o = n ? n.length : 0;
                for (t.finish = !0, C.queue(this,a,[]), r && r.stop && r.stop.call(this,!0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e,1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle","show","hide"],function (e,r) {
        var i = C.fn[r];
        C.fn[r] = function (e,t,n) {
            return null == e || "boolean" == typeof e ? i.apply(this,arguments) : this.animate(ft(r,!0),e,t,n)
        }
    }), C.each({
        slideDown: ft("show"),
        slideUp: ft("hide"),
        slideToggle: ft("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    },function (e,r) {
        C.fn[e] = function (e,t,n) {
            return this.animate(r,e,t,n)
        }
    }), C.timers = [], C.fx.tick = function () {
        var e,t = C.timers,n = 0;
        for (Ze = C.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--,1);
        t.length || C.fx.stop(), Ze = void 0
    }, C.fx.timer = function (e) {
        C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
    }, C.fx.interval = 13, C.fx.start = function () {
        et || (et = setInterval(C.fx.tick,C.fx.interval))
    }, C.fx.stop = function () {
        clearInterval(et), et = null
    }, C.fx.speeds = {slow: 600,fast: 200,_default: 400}, C.fn.delay = function (r,e) {
        return r = C.fx && C.fx.speeds[r] || r, e = e || "fx", this.queue(e,function (e,t) {
            var n = setTimeout(e,r);
            t.stop = function () {
                clearTimeout(n)
            }
        })
    }, (st = N.createElement("div")).setAttribute("className","t"), st.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ut = st.getElementsByTagName("a")[0], ct = (lt = N.createElement("select")).appendChild(N.createElement("option")), at = st.getElementsByTagName("input")[0], ut.style.cssText = "top:1px", v.getSetAttribute = "t" !== st.className, v.style = /top/.test(ut.getAttribute("style")), v.hrefNormalized = "/a" === ut.getAttribute("href"), v.checkOn = !!at.value, v.optSelected = ct.selected, v.enctype = !!N.createElement("form").enctype, lt.disabled = !0, v.optDisabled = !ct.disabled, (at = N.createElement("input")).setAttribute("value",""), v.input = "" === at.getAttribute("value"), at.value = "t", at.setAttribute("type","radio"), v.radioValue = "t" === at.value;
    var vt = /\r/g;
    C.fn.extend({
        val: function (n) {
            var r,e,i,t = this[0];
            return arguments.length ? (i = C.isFunction(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this,e,C(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t,function (e) {
                    return null == e ? "" : e + ""
                })), (r = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this,t,"value") || (this.value = t))
            })) : t ? (r = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t,"value")) ? e : "string" == typeof (e = t.value) ? e.replace(vt,"") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = C.find.attr(e,"value");
                    return null != t ? t : C.trim(C.text(e))
                }
            },select: {
                get: function (e) {
                    for (var t,n,r = e.options,i = e.selectedIndex,o = "select-one" === e.type || i < 0,a = o ? null : [],s = o ? i + 1 : r.length,l = i < 0 ? s : o ? i : 0; l < s; l++) if (!(!(n = r[l]).selected && l !== i || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && C.nodeName(n.parentNode,"optgroup"))) {
                        if (t = C(n).val(), o) return t;
                        a.push(t)
                    }
                    return a
                },set: function (e,t) {
                    for (var n,r,i = e.options,o = C.makeArray(t),a = i.length; a--;) if (r = i[a], 0 <= C.inArray(C.valHooks.option.get(r),o)) try {
                        r.selected = n = !0
                    } catch (e) {
                        r.scrollHeight
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), C.each(["radio","checkbox"],function () {
        C.valHooks[this] = {
            set: function (e,t) {
                return C.isArray(t) ? e.checked = 0 <= C.inArray(C(e).val(),t) : void 0
            }
        }, v.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var yt,bt,xt = C.expr.attrHandle,wt = /^(?:checked|selected)$/i,Tt = v.getSetAttribute,Ct = v.input;
    C.fn.extend({
        attr: function (e,t) {
            return V(this,C.attr,e,t,1 < arguments.length)
        },removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this,e)
            })
        }
    }), C.extend({
        attr: function (e,t,n) {
            var r,i,o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === F ? C.prop(e,t,n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(), r = C.attrHooks[t] || (C.expr.match.bool.test(t) ? bt : yt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e,t)) ? i : null == (i = C.find.attr(e,t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e,n,t)) ? i : (e.setAttribute(t,n + ""), n) : void C.removeAttr(e,t))
        },removeAttr: function (e,t) {
            var n,r,i = 0,o = t && t.match(j);
            if (o && 1 === e.nodeType) for (; n = o[i++];) r = C.propFix[n] || n, C.expr.match.bool.test(n) ? Ct && Tt || !wt.test(n) ? e[r] = !1 : e[C.camelCase("default-" + n)] = e[r] = !1 : C.attr(e,n,""), e.removeAttribute(Tt ? n : r)
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
    }), bt = {
        set: function (e,t,n) {
            return !1 === t ? C.removeAttr(e,n) : Ct && Tt || !wt.test(n) ? e.setAttribute(!Tt && C.propFix[n] || n,n) : e[C.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g),function (e,t) {
        var o = xt[t] || C.find.attr;
        xt[t] = Ct && Tt || !wt.test(t) ? function (e,t,n) {
            var r,i;
            return n || (i = xt[t], xt[t] = r, r = null != o(e,t,n) ? t.toLowerCase() : null, xt[t] = i), r
        } : function (e,t,n) {
            return n ? void 0 : e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Ct && Tt || (C.attrHooks.value = {
        set: function (e,t,n) {
            return C.nodeName(e,"input") ? void (e.defaultValue = t) : yt && yt.set(e,t,n)
        }
    }), Tt || (yt = {
        set: function (e,t,n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, xt.id = xt.name = xt.coords = function (e,t,n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, C.valHooks.button = {
        get: function (e,t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },set: yt.set
    }, C.attrHooks.contenteditable = {
        set: function (e,t,n) {
            yt.set(e,"" !== t && t,n)
        }
    }, C.each(["width","height"],function (e,n) {
        C.attrHooks[n] = {
            set: function (e,t) {
                return "" === t ? (e.setAttribute(n,"auto"), t) : void 0
            }
        }
    })), v.style || (C.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        },set: function (e,t) {
            return e.style.cssText = t + ""
        }
    });
    var Nt = /^(?:input|select|textarea|button|object)$/i,Et = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function (e,t) {
            return V(this,C.prop,e,t,1 < arguments.length)
        },removeProp: function (e) {
            return e = C.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {
                }
            })
        }
    }), C.extend({
        propFix: {for: "htmlFor",class: "className"},prop: function (e,t,n) {
            var r,i,o,a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return (o = 1 !== a || !C.isXMLDoc(e)) && (t = C.propFix[t] || t, i = C.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e,n,t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e,t)) ? r : e[t]
        },propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = C.find.attr(e,"tabindex");
                    return t ? parseInt(t,10) : Nt.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), v.hrefNormalized || C.each(["href","src"],function (e,t) {
        C.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t,4)
            }
        }
    }), v.optSelected || (C.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function () {
        C.propFix[this.toLowerCase()] = this
    }), v.enctype || (C.propFix.enctype = "encoding");
    var kt = /[\t\r\n\f]/g;
    C.fn.extend({
        addClass: function (t) {
            var e,n,r,i,o,a,s = 0,l = this.length,u = "string" == typeof t && t;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).addClass(t.call(this,e,this.className))
            });
            if (u) for (e = (t || "").match(j) || []; s < l; s++) if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(kt," ") : " ")) {
                for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                a = C.trim(r), n.className !== a && (n.className = a)
            }
            return this
        },removeClass: function (t) {
            var e,n,r,i,o,a,s = 0,l = this.length,u = 0 === arguments.length || "string" == typeof t && t;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).removeClass(t.call(this,e,this.className))
            });
            if (u) for (e = (t || "").match(j) || []; s < l; s++) if (r = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(kt," ") : "")) {
                for (o = 0; i = e[o++];) for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " "," ");
                a = t ? C.trim(r) : "", n.className !== a && (n.className = a)
            }
            return this
        },toggleClass: function (i,t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : this.each(C.isFunction(i) ? function (e) {
                C(this).toggleClass(i.call(this,e,this.className,t),t)
            } : function () {
                if ("string" === o) for (var e,t = 0,n = C(this),r = i.match(j) || []; e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e); else (o === F || "boolean" === o) && (this.className && C._data(this,"__className__",this.className), this.className = this.className || !1 === i ? "" : C._data(this,"__className__") || "")
            })
        },hasClass: function (e) {
            for (var t = " " + e + " ",n = 0,r = this.length; n < r; n++) if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(kt," ").indexOf(t)) return !0;
            return !1
        }
    }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function (e,n) {
        C.fn[n] = function (e,t) {
            return 0 < arguments.length ? this.on(n,null,e,t) : this.trigger(n)
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
            return 1 === arguments.length ? this.off(e,"**") : this.off(t,e || "**",n)
        }
    });
    var St = C.now(),At = /\?/,
        Dt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    C.parseJSON = function (e) {
        if (h.JSON && h.JSON.parse) return h.JSON.parse(e + "");
        var i,o = null,t = C.trim(e + "");
        return t && !C.trim(t.replace(Dt,function (e,t,n,r) {
            return i && t && (o = 0), 0 === o ? e : (i = n || t, o += !r - !n, "")
        })) ? Function("return " + t)() : C.error("Invalid JSON: " + e)
    }, C.parseXML = function (e) {
        var t,n;
        if (!e || "string" != typeof e) return null;
        try {
            h.DOMParser ? t = (n = new DOMParser).parseFromString(e,"text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var jt,Lt,Ht = /#.*$/,qt = /([?&])_=[^&]*/,_t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ft = /^(?:GET|HEAD)$/,Ot = /^\/\//,
        Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Pt = {},Rt = {},Wt = "*/".concat("*");
    try {
        Lt = location.href
    } catch (e) {
        (Lt = N.createElement("a")).href = "", Lt = Lt.href
    }

    function $t(o) {
        return function (e,t) {
            "string" != typeof e && (t = e, e = "*");
            var n,r = 0,i = e.toLowerCase().match(j) || [];
            if (C.isFunction(t)) for (; n = i[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function zt(t,i,o,a) {
        var s = {},l = t === Rt;

        function u(e) {
            var r;
            return s[e] = !0, C.each(t[e] || [],function (e,t) {
                var n = t(i,o,a);
                return "string" != typeof n || l || s[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), u(n), !1)
            }), r
        }

        return u(i.dataTypes[0]) || !s["*"] && u("*")
    }

    function It(e,t) {
        var n,r,i = C.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && C.extend(!0,e,n), e
    }

    function Xt(e,t,n) {
        for (var r,i,o,a,s = e.contents,l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (a in s) if (s[a] && s[a].test(i)) {
            l.unshift(a);
            break
        }
        if (l[0] in n) o = l[0]; else {
            for (a in n) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function Ut(e,t,n,r) {
        var i,o,a,s,l,u = {},c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t,e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror",error: a ? e : "No conversion from " + l + " to " + o}
            }
        }
        return {state: "success",data: t}
    }

    jt = Bt.exec(Lt.toLowerCase()) || [], C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt,
            type: "GET",
            isLocal: Mt.test(jt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
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
            return t ? It(It(e,C.ajaxSettings),t) : It(C.ajaxSettings,e)
        },
        ajaxPrefilter: $t(Pt),
        ajaxTransport: $t(Rt),
        ajax: function (e,t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n,r,c,d,f,p,h,i,m = C.ajaxSetup({},t),g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,y = C.Deferred(),
                b = C.Callbacks("once memory"),x = m.statusCode || {},o = {},a = {},w = 0,s = "canceled",T = {
                    readyState: 0,getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!i) for (i = {}; t = _t.exec(d);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },getAllResponseHeaders: function () {
                        return 2 === w ? d : null
                    },setRequestHeader: function (e,t) {
                        var n = e.toLowerCase();
                        return w || (e = a[n] = a[n] || e, o[e] = t), this
                    },overrideMimeType: function (e) {
                        return w || (m.mimeType = e), this
                    },statusCode: function (e) {
                        var t;
                        if (e) if (w < 2) for (t in e) x[t] = [x[t],e[t]]; else T.always(e[T.status]);
                        return this
                    },abort: function (e) {
                        var t = e || s;
                        return h && h.abort(t), l(0,t), this
                    }
                };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((e || m.url || Lt) + "").replace(Ht,"").replace(Ot,jt[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(j) || [""], null == m.crossDomain && (n = Bt.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === jt[1] && n[2] === jt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (jt[3] || ("http:" === jt[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data,m.traditional)), zt(Pt,m,t,T), 2 === w) return T;
            for (r in (p = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ft.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (At.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = qt.test(c) ? c.replace(qt,"$1_=" + St++) : c + (At.test(c) ? "&" : "?") + "_=" + St++)), m.ifModified && (C.lastModified[c] && T.setRequestHeader("If-Modified-Since",C.lastModified[c]), C.etag[c] && T.setRequestHeader("If-None-Match",C.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type",m.contentType), T.setRequestHeader("Accept",m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(r,m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g,T,m) || 2 === w)) return T.abort();
            for (r in s = "abort", {success: 1,error: 1,complete: 1}) T[r](m[r]);
            if (h = zt(Rt,m,t,T)) {
                T.readyState = 1, p && v.trigger("ajaxSend",[T,m]), m.async && 0 < m.timeout && (f = setTimeout(function () {
                    T.abort("timeout")
                },m.timeout));
                try {
                    w = 1, h.send(o,l)
                } catch (e) {
                    if (!(w < 2)) throw e;
                    l(-1,e)
                }
            } else l(-1,"No Transport");

            function l(e,t,n,r) {
                var i,o,a,s,l,u = t;
                2 !== w && (w = 2, f && clearTimeout(f), h = void 0, d = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = Xt(m,T,n)), s = Ut(m,s,T,i), i ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (C.lastModified[c] = l), (l = T.getResponseHeader("etag")) && (C.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, o = s.data, i = !(a = s.error))) : (a = u, (e || !u) && (u = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || u) + "", i ? y.resolveWith(g,[o,u,T]) : y.rejectWith(g,[T,u,a]), T.statusCode(x), x = void 0, p && v.trigger(i ? "ajaxSuccess" : "ajaxError",[T,m,i ? o : a]), b.fireWith(g,[T,u]), p && (v.trigger("ajaxComplete",[T,m]), --C.active || C.event.trigger("ajaxStop")))
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
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).wrapAll(t.call(this,e))
            });
            if (this[0]) {
                var e = C(t,this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },wrapInner: function (n) {
            return this.each(C.isFunction(n) ? function (e) {
                C(this).wrapInner(n.call(this,e))
            } : function () {
                var e = C(this),t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },wrap: function (t) {
            var n = C.isFunction(t);
            return this.each(function (e) {
                C(this).wrapAll(n ? t.call(this,e) : t)
            })
        },unwrap: function () {
            return this.parent().each(function () {
                C.nodeName(this,"body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }), C.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (e.style && e.style.display || C.css(e,"display"))
    }, C.expr.filters.visible = function (e) {
        return !C.expr.filters.hidden(e)
    };
    var Vt = /%20/g,Jt = /\[\]$/,Yt = /\r?\n/g,Gt = /^(?:submit|button|image|reset|file)$/i,
        Qt = /^(?:input|select|textarea|keygen)/i;

    function Kt(n,e,r,i) {
        var t;
        if (C.isArray(e)) C.each(e,function (e,t) {
            r || Jt.test(n) ? i(n,t) : Kt(n + "[" + ("object" == typeof t ? e : "") + "]",t,r,i)
        }); else if (r || "object" !== C.type(e)) i(n,e); else for (t in e) Kt(n + "[" + t + "]",e[t],r,i)
    }

    C.param = function (e,t) {
        var n,r = [],i = function (e,t) {
            t = C.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e,function () {
            i(this.name,this.value)
        }); else for (n in e) Kt(n,e[n],t,i);
        return r.join("&").replace(Vt,"+")
    }, C.fn.extend({
        serialize: function () {
            return C.param(this.serializeArray())
        },serializeArray: function () {
            return this.map(function () {
                var e = C.prop(this,"elements");
                return e ? C.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Qt.test(this.nodeName) && !Gt.test(e) && (this.checked || !J.test(e))
            }).map(function (e,t) {
                var n = C(this).val();
                return null == n ? null : C.isArray(n) ? C.map(n,function (e) {
                    return {name: t.name,value: e.replace(Yt,"\r\n")}
                }) : {name: t.name,value: n.replace(Yt,"\r\n")}
            }).get()
        }
    }), C.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && nn() || rn()
    } : nn;
    var Zt = 0,en = {},tn = C.ajaxSettings.xhr();

    function nn() {
        try {
            return new h.XMLHttpRequest
        } catch (e) {
        }
    }

    function rn() {
        try {
            return new h.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    h.attachEvent && h.attachEvent("onunload",function () {
        for (var e in en) en[e](void 0,!0)
    }), v.cors = !!tn && "withCredentials" in tn, (tn = v.ajax = !!tn) && C.ajaxTransport(function (l) {
        var u;
        if (!l.crossDomain || v.cors) return {
            send: function (e,o) {
                var t,a = l.xhr(),s = ++Zt;
                if (a.open(l.type,l.url,l.async,l.username,l.password), l.xhrFields) for (t in l.xhrFields) a[t] = l.xhrFields[t];
                for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t,e[t] + "");
                a.send(l.hasContent && l.data || null), u = function (e,t) {
                    var n,r,i;
                    if (u && (t || 4 === a.readyState)) if (delete en[s], u = void 0, a.onreadystatechange = C.noop, t) 4 !== a.readyState && a.abort(); else {
                        i = {}, n = a.status, "string" == typeof a.responseText && (i.text = a.responseText);
                        try {
                            r = a.statusText
                        } catch (e) {
                            r = ""
                        }
                        n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i.text ? 200 : 404
                    }
                    i && o(n,r,i,a.getAllResponseHeaders())
                }, l.async ? 4 === a.readyState ? setTimeout(u) : a.onreadystatechange = en[s] = u : u()
            },abort: function () {
                u && u(void 0,!0)
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
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), C.ajaxTransport("script",function (t) {
        if (t.crossDomain) {
            var r,i = N.head || C("head")[0] || N.documentElement;
            return {
                send: function (e,n) {
                    (r = N.createElement("script")).async = !0, t.scriptCharset && (r.charset = t.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange = function (e,t) {
                        (t || !r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, r.parentNode && r.parentNode.removeChild(r), r = null, t || n(200,"success"))
                    }, i.insertBefore(r,i.firstChild)
                },abort: function () {
                    r && r.onload(void 0,!0)
                }
            }
        }
    });
    var on = [],an = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",jsonpCallback: function () {
            var e = on.pop() || C.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp",function (e,t,n) {
        var r,i,o,
            a = !1 !== e.jsonp && (an.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && an.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(an,"$1" + r) : !1 !== e.jsonp && (e.url += (At.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || C.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = h[r], h[r] = function () {
            o = arguments
        }, n.always(function () {
            h[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, on.push(r)), o && C.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), C.parseHTML = function (e,t,n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || N;
        var r = b.exec(e),i = !n && [];
        return r ? [t.createElement(r[1])] : (r = C.buildFragment([e],t,i), i && i.length && C(i).remove(), C.merge([],r.childNodes))
    };
    var sn = C.fn.load;
    C.fn.load = function (e,t,n) {
        if ("string" != typeof e && sn) return sn.apply(this,arguments);
        var r,i,o,a = this,s = e.indexOf(" ");
        return 0 <= s && (r = C.trim(e.slice(s,e.length)), e = e.slice(0,s)), C.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && C.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
        }).complete(n && function (e,t) {
            a.each(n,i || [e.responseText,t,e])
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
    var ln = h.document.documentElement;

    function un(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    C.offset = {
        setOffset: function (e,t,n) {
            var r,i,o,a,s,l,u,c = C.css(e,"position"),d = C(e),f = {};
            "static" === c && (e.style.position = "relative"), s = d.offset(), o = C.css(e,"top"), l = C.css(e,"left"), i = (u = ("absolute" === c || "fixed" === c) && -1 < C.inArray("auto",[o,l])) ? (a = (r = d.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e,n,s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e,f) : d.css(f)
        }
    }, C.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                C.offset.setOffset(this,t,e)
            });
            var e,n,r = {top: 0,left: 0},i = this[0],o = i && i.ownerDocument;
            return o ? (e = o.documentElement, C.contains(e,i) ? (typeof i.getBoundingClientRect !== F && (r = i.getBoundingClientRect()), n = un(o), {
                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : r) : void 0
        },position: function () {
            if (this[0]) {
                var e,t,n = {top: 0,left: 0},r = this[0];
                return "fixed" === C.css(r,"position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0],"html") || (n = e.offset()), n.top += C.css(e[0],"borderTopWidth",!0), n.left += C.css(e[0],"borderLeftWidth",!0)), {
                    top: t.top - n.top - C.css(r,"marginTop",!0),
                    left: t.left - n.left - C.css(r,"marginLeft",!0)
                }
            }
        },offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || ln; e && !C.nodeName(e,"html") && "static" === C.css(e,"position");) e = e.offsetParent;
                return e || ln
            })
        }
    }), C.each({scrollLeft: "pageXOffset",scrollTop: "pageYOffset"},function (t,i) {
        var o = /Y/.test(i);
        C.fn[t] = function (e) {
            return V(this,function (e,t,n) {
                var r = un(e);
                return void 0 === n ? r ? i in r ? r[i] : r.document.documentElement[t] : e[t] : void (r ? r.scrollTo(o ? C(r).scrollLeft() : n,o ? n : C(r).scrollTop()) : e[t] = n)
            },t,e,arguments.length,null)
        }
    }), C.each(["top","left"],function (e,n) {
        C.cssHooks[n] = Be(v.pixelPosition,function (e,t) {
            return t ? (t = Fe(e,n), _e.test(t) ? C(e).position()[n] + "px" : t) : void 0
        })
    }), C.each({Height: "height",Width: "width"},function (o,a) {
        C.each({padding: "inner" + o,content: a,"": "outer" + o},function (r,e) {
            C.fn[e] = function (e,t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return V(this,function (e,t,n) {
                    var r;
                    return C.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + o],r["scroll" + o],e.body["offset" + o],r["offset" + o],r["client" + o])) : void 0 === n ? C.css(e,t,i) : C.style(e,t,n,i)
                },a,n ? e : void 0,n,null)
            }
        })
    }), C.fn.size = function () {
        return this.length
    }, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery",[],function () {
        return C
    });
    var cn = h.jQuery,dn = h.$;
    return C.noConflict = function (e) {
        return h.$ === C && (h.$ = dn), e && h.jQuery === C && (h.jQuery = cn), C
    }, typeof e === F && (h.jQuery = h.$ = C), C
});