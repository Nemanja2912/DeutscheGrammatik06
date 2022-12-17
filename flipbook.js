!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.0",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(j).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join("|"), "i");
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ["Webkit", "Moz", "ms"],
    $e = E.createElement("div").style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: "absolute", visibility: "hidden", display: "block" },
    Ge = { letterSpacing: "0", fontWeight: "400" };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = We(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        "normal" === i && t in Ge && (i = Ge[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement("input")),
    (nt = E.createElement("select").appendChild(E.createElement("option"))),
    (tt.type = "checkbox"),
    (y.checkOn = "" !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (y.radioValue = "t" === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(yt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) At(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = "*/".concat("*"),
    Mt = E.createElement("a");
  function It(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Rt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + "").replace(
            Ht,
            bt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(Nt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Tt.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, "$1")),
              (o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              S.inArray("json", v.dataTypes) < 0 &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && "withCredentials" in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + "_" + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Ut.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Xt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});
/*! jQuery Browser - v0.1.0 - 3/23/2012
 * https://github.com/jquery/jquery-browser
 * Copyright (c) 2012 John Resig; Licensed MIT */
/*
	THIS IS A STRIPPED VERSION OF THE ORIGINAL LIBRARY!
*/
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
/*! Hammer.JS - v2.0.4 - 2015-10-30
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
/*
 * @name wowBook
 *
 * @author Marcio Aguiar
 * @version 1.3.8
 * @requires jQuery v1.7.0+
 *
 * Copyright 2010 Marcio Aguiar. All rights reserved.
 *
 * To use this file you must to buy a license at http://codecanyon.net/user/maguiar01/portfolio
 *
 */
/*
 jQuery Browser - v0.1.0 - 3/23/2012
 https://github.com/jquery/jquery-browser
 Copyright (c) 2012 John Resig; Licensed MIT  jQuery hashchange event - v1.3 - 7/21/2010
 http://benalman.com/projects/jquery-hashchange-plugin/

 Copyright (c) 2010 "Cowboy" Ben Alman
 Dual licensed under the MIT and GPL licenses.
 http://benalman.com/about/license/
 Hammer.JS - v2.0.4 - 2015-10-30
 http://hammerjs.github.io/

 Copyright (c) 2015 Jorik Tangelder;
 Licensed under the  license  Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 Licensed under the MIT License (LICENSE.txt).

 Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 Thanks to: Seamus Leahy for adding deltaX and deltaY

 Version: 3.0.6

 Requires: 1.2.2+
*/
(function (f) {
  if (!f.browser) {
    var H = navigator.userAgent || "";
    f.uaMatch = function (E) {
      E = E.toLowerCase();
      E =
        /(edge)[ \/]([\w.]+)/.exec(E) ||
        /(chrome)[ \/]([\w.]+)/.exec(E) ||
        /(webkit)[ \/]([\w.]+)/.exec(E) ||
        /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(E) ||
        /(msie) ([\w.]+)/.exec(E) ||
        (0 > E.indexOf("compatible") &&
          /(mozilla)(?:.*? rv:([\w.]+))?/.exec(E)) ||
        [];
      return { browser: E[1] || "", version: E[2] || "0" };
    };
    H = f.uaMatch(H);
    f.browser = {};
    H.browser && ((f.browser[H.browser] = !0), (f.browser.version = H.version));
    f.browser.webkit && (f.browser.safari = !0);
  }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  easeOutCubic: function (f, H, E, J, B) {
    return J * ((H = H / B - 1) * H * H + 1) + E;
  },
  easeOutExpo: function (f, H, E, J, B) {
    return H == B ? E + J : J * (-Math.pow(2, (-10 * H) / B) + 1) + E;
  },
});
window.Modernizr = (function (f, H, E) {
  function J(k, n) {
    for (var p in k) if (M[k[p]] !== E) return "pfx" == n ? k[p] : !0;
    return !1;
  }
  function B(k, n, p) {
    var r = k.charAt(0).toUpperCase() + k.substr(1),
      t = (k + " " + I.join(r + " ") + r).split(" ");
    if ("string" === typeof n || "undefined" === typeof n) n = J(t, n);
    else
      a: {
        (t = (k + " " + O.join(r + " ") + r).split(" ")), (k = t);
        for (var u in k)
          if (((r = n[k[u]]), r !== E)) {
            n = !1 === p ? k[u] : "function" === typeof r ? r.bind(p || n) : r;
            break a;
          }
        n = !1;
      }
    return n;
  }
  var w = {},
    K = H.documentElement,
    C = H.createElement("modernizr"),
    M = C.style;
  f = " -webkit- -moz- -o- -ms- ".split(" ");
  var I = ["Webkit", "Moz", "O", "ms"],
    O = ["webkit", "moz", "o", "ms"];
  C = {};
  var P = [],
    a = P.slice,
    b,
    c = function (k, n, p, r) {
      var t,
        u,
        A = H.createElement("div"),
        D = H.body,
        F = D ? D : H.createElement("body");
      if (parseInt(p, 10))
        for (; p--; ) {
          var L = H.createElement("div");
          L.id = r ? r[p] : "modernizr" + (p + 1);
          A.appendChild(L);
        }
      return (
        (t = ["&#173;<style>", k, "</style>"].join("")),
        (A.id = "modernizr"),
        ((D ? A : F).innerHTML += t),
        F.appendChild(A),
        D || ((F.style.background = ""), K.appendChild(F)),
        (u = n(A, k)),
        D ? A.parentNode.removeChild(A) : F.parentNode.removeChild(F),
        !!u
      );
    },
    d = {}.hasOwnProperty,
    e;
  "undefined" === typeof d || "undefined" === typeof d.call
    ? (e = function (k, n) {
        return n in k && "undefined" === typeof k.constructor.prototype[n];
      })
    : (e = function (k, n) {
        return d.call(k, n);
      });
  Function.prototype.bind ||
    (Function.prototype.bind = function (k) {
      var n = this;
      if ("function" != typeof n) throw new TypeError();
      var p = a.call(arguments, 1),
        r = function () {
          if (this instanceof r) {
            var t = function () {};
            t.prototype = n.prototype;
            t = new t();
            var u = n.apply(t, p.concat(a.call(arguments)));
            return Object(u) === u ? u : t;
          }
          return n.apply(k, p.concat(a.call(arguments)));
        };
      return r;
    });
  (function (k, n) {
    var p = k.join(""),
      r = n.length;
    c(
      p,
      function (t, u) {
        for (var A = t.childNodes, D = {}; r--; ) D[A[r].id] = A[r];
        w.csstransforms3d =
          9 === (D.csstransforms3d && D.csstransforms3d.offsetLeft) &&
          3 === D.csstransforms3d.offsetHeight;
      },
      r,
      n
    );
  })(
    [
      ,
      [
        "@media (",
        f.join("transform-3d),("),
        "modernizr){#csstransforms3d{left:9px;position:absolute;height:3px;}}",
      ].join(""),
    ],
    [, "csstransforms3d"]
  );
  C.csstransforms3d = function () {
    var k = !!B("perspective");
    return k && "webkitPerspective" in K.style && (k = w.csstransforms3d), k;
  };
  for (var g in C)
    e(C, g) &&
      ((b = g.toLowerCase()), (w[b] = C[g]()), P.push((w[b] ? "" : "no-") + b));
  M.cssText = "";
  return (
    (C = null),
    (w._version = "2.5.3"),
    (w._prefixes = f),
    (w._domPrefixes = O),
    (w._cssomPrefixes = I),
    (w.testProp = function (k) {
      return J([k]);
    }),
    (w.testAllProps = B),
    (w.testStyles = c),
    (w.prefixed = function (k, n, p) {
      return n ? B(k, n, p) : B(k, "pfx");
    }),
    w
  );
})(this, this.document);
(function (f, H, E) {
  function J(I) {
    I = I || location.href;
    return "#" + I.replace(/^[^#]*#?(.*)$/, "$1");
  }
  ("$:nomunge");
  var B = document,
    w = f.event.special,
    K = B.documentMode,
    C = "onhashchange" in H && (K === E || 7 < K);
  f.fn.hashchange = function (I) {
    return I ? this.bind("hashchange", I) : this.trigger("hashchange");
  };
  f.fn.hashchange.delay = 50;
  w.hashchange = f.extend(w.hashchange, {
    setup: function () {
      if (C) return !1;
      f(M.start);
    },
    teardown: function () {
      if (C) return !1;
      f(M.stop);
    },
  });
  var M = (function () {
    function I() {
      var e = J(),
        g = d(a);
      e !== a
        ? (c((a = e), g), f(H).trigger("hashchange"))
        : g !== a && (location.href = location.href.replace(/#.*/, "") + g);
      P = setTimeout(I, f.fn.hashchange.delay);
    }
    var O = {},
      P,
      a = J(),
      b = function (e) {
        return e;
      },
      c = b,
      d = b;
    O.start = function () {
      P || I();
    };
    O.stop = function () {
      P && clearTimeout(P);
      P = E;
    };
    f.browser.msie &&
      !C &&
      (function () {
        var e, g;
        O.start = function () {
          e ||
            ((g = (g = f.fn.hashchange.src) && g + J()),
            (e = f('<iframe tabindex="-1" title="empty"/>')
              .hide()
              .one("load", function () {
                g || c(J());
                I();
              })
              .attr("src", g || "javascript:0")
              .insertAfter("body")[0].contentWindow),
            (B.onpropertychange = function () {
              try {
                "title" === event.propertyName && (e.document.title = B.title);
              } catch (k) {}
            }));
        };
        O.stop = b;
        d = function () {
          return J(e.location.href);
        };
        c = function (k, n) {
          var p = e.document,
            r = f.fn.hashchange.domain;
          k !== n &&
            ((p.title = B.title),
            p.open(),
            r && p.write('<script>document.domain="' + r + '"\x3c/script>'),
            p.close(),
            (e.location.hash = k));
        };
      })();
    return O;
  })();
})(jQuery, this);
try {
  (function (f, H, E, J) {
    function B(h, l, m) {
      return setTimeout(O(h, m), l);
    }
    function w(h, l, m) {
      return Array.isArray(h) ? (K(h, m[l], m), !0) : !1;
    }
    function K(h, l, m) {
      var q;
      if (h)
        if (h.forEach) h.forEach(l, m);
        else if (h.length !== J)
          for (q = 0; q < h.length; ) l.call(m, h[q], q, h), q++;
        else for (q in h) h.hasOwnProperty(q) && l.call(m, h[q], q, h);
    }
    function C(h, l, m) {
      for (var q = Object.keys(l), v = 0; v < q.length; ) {
        if (!m || (m && h[q[v]] === J)) h[q[v]] = l[q[v]];
        v++;
      }
      return h;
    }
    function M(h, l) {
      return C(h, l, !0);
    }
    function I(h, l, m) {
      l = l.prototype;
      var q = (h.prototype = Object.create(l));
      q.constructor = h;
      q._super = l;
      m && C(q, m);
    }
    function O(h, l) {
      return function () {
        return h.apply(l, arguments);
      };
    }
    function P(h, l) {
      return "function" == typeof h ? h.apply(l ? l[0] || J : J, l) : h;
    }
    function a(h, l, m) {
      K(d(l), function (q) {
        h.addEventListener(q, m, !1);
      });
    }
    function b(h, l, m) {
      K(d(l), function (q) {
        h.removeEventListener(q, m, !1);
      });
    }
    function c(h, l) {
      for (; h; ) {
        if (h == l) return !0;
        h = h.parentNode;
      }
      return !1;
    }
    function d(h) {
      return h.trim().split(/\s+/g);
    }
    function e(h, l, m) {
      if (h.indexOf && !m) return h.indexOf(l);
      for (var q = 0; q < h.length; ) {
        if ((m && h[q][m] == l) || (!m && h[q] === l)) return q;
        q++;
      }
      return -1;
    }
    function g(h) {
      return Array.prototype.slice.call(h, 0);
    }
    function k(h, l, m) {
      for (var q = [], v = [], z = 0; z < h.length; ) {
        var G = l ? h[z][l] : h[z];
        0 > e(v, G) && q.push(h[z]);
        v[z] = G;
        z++;
      }
      m &&
        (q = l
          ? q.sort(function (N, R) {
              return N[l] > R[l];
            })
          : q.sort());
      return q;
    }
    function n(h, l) {
      for (var m, q = l[0].toUpperCase() + l.slice(1), v = 0; v < oa.length; ) {
        m = (m = oa[v]) ? m + q : l;
        if (m in h) return m;
        v++;
      }
      return J;
    }
    function p(h) {
      h = h.ownerDocument || h;
      return h.defaultView || h.parentWindow || f;
    }
    function r(h, l) {
      var m = this;
      this.manager = h;
      this.callback = l;
      this.element = h.element;
      this.target = h.options.inputTarget;
      this.domHandler = function (q) {
        P(h.options.enable, [h]) && m.handler(q);
      };
      this.init();
    }
    function t(h) {
      var l = h.options.inputClass;
      return new (l ? l : ya ? V : za ? W : pa ? fa : S)(h, u);
    }
    function u(h, l, m) {
      var q = m.pointers.length,
        v = m.changedPointers.length;
      var z = l & 1 && 0 === q - v;
      m.isFirst = !!z;
      m.isFinal = !!(l & 12 && 0 === q - v);
      z && (h.session = {});
      m.eventType = l;
      l = h.session;
      q = m.pointers;
      v = q.length;
      l.firstInput || (l.firstInput = A(m));
      1 < v && !l.firstMultiple
        ? (l.firstMultiple = A(m))
        : 1 === v && (l.firstMultiple = !1);
      z = l.firstInput;
      var G = (v = l.firstMultiple) ? v.center : z.center;
      var N = (m.center = D(q));
      m.timeStamp = ha();
      m.deltaTime = m.timeStamp - z.timeStamp;
      m.angle = Q(G, N);
      m.distance = L(G, N);
      z = m.center;
      G = l.offsetDelta || {};
      N = l.prevDelta || {};
      var R = l.prevInput || {};
      if (1 === m.eventType || 4 === R.eventType)
        (N = l.prevDelta = { x: R.deltaX || 0, y: R.deltaY || 0 }),
          (G = l.offsetDelta = { x: z.x, y: z.y });
      m.deltaX = N.x + (z.x - G.x);
      m.deltaY = N.y + (z.y - G.y);
      m.offsetDirection = F(m.deltaX, m.deltaY);
      G = m.deltaTime;
      z = m.deltaX / G || 0;
      G = m.deltaY / G || 0;
      m.overallVelocityX = z;
      m.overallVelocityY = G;
      m.overallVelocity = Y(z) > Y(G) ? z : G;
      v
        ? ((z = v.pointers), (z = L(q[0], q[1], ba) / L(z[0], z[1], ba)))
        : (z = 1);
      m.scale = z;
      v
        ? ((v = v.pointers), (q = Q(q[1], q[0], ba) + Q(v[1], v[0], ba)))
        : (q = 0);
      m.rotation = q;
      m.maxPointers = l.prevInput
        ? m.pointers.length > l.prevInput.maxPointers
          ? m.pointers.length
          : l.prevInput.maxPointers
        : m.pointers.length;
      G = l.lastInterval || m;
      q = m.timeStamp - G.timeStamp;
      8 != m.eventType && (25 < q || G.velocity === J)
        ? ((z = m.deltaX - G.deltaX),
          (G = m.deltaY - G.deltaY),
          (N = z / q || 0),
          (R = G / q || 0),
          (q = N),
          (v = R),
          (N = Y(N) > Y(R) ? N : R),
          (z = F(z, G)),
          (l.lastInterval = m))
        : ((N = G.velocity),
          (q = G.velocityX),
          (v = G.velocityY),
          (z = G.direction));
      m.velocity = N;
      m.velocityX = q;
      m.velocityY = v;
      m.direction = z;
      l = h.element;
      c(m.srcEvent.target, l) && (l = m.srcEvent.target);
      m.target = l;
      h.emit("hammer.input", m);
      h.recognize(m);
      h.session.prevInput = m;
    }
    function A(h) {
      for (var l = [], m = 0; m < h.pointers.length; )
        (l[m] = {
          clientX: aa(h.pointers[m].clientX),
          clientY: aa(h.pointers[m].clientY),
        }),
          m++;
      return {
        timeStamp: ha(),
        pointers: l,
        center: D(l),
        deltaX: h.deltaX,
        deltaY: h.deltaY,
      };
    }
    function D(h) {
      var l = h.length;
      if (1 === l) return { x: aa(h[0].clientX), y: aa(h[0].clientY) };
      for (var m = 0, q = 0, v = 0; v < l; )
        (m += h[v].clientX), (q += h[v].clientY), v++;
      return { x: aa(m / l), y: aa(q / l) };
    }
    function F(h, l) {
      return h === l ? 1 : Y(h) >= Y(l) ? (0 > h ? 2 : 4) : 0 > l ? 8 : 16;
    }
    function L(h, l, m) {
      m || (m = qa);
      var q = l[m[0]] - h[m[0]];
      h = l[m[1]] - h[m[1]];
      return Math.sqrt(q * q + h * h);
    }
    function Q(h, l, m) {
      m || (m = qa);
      return (180 * Math.atan2(l[m[1]] - h[m[1]], l[m[0]] - h[m[0]])) / Math.PI;
    }
    function S() {
      this.evEl = Aa;
      this.evWin = Ba;
      this.allow = !0;
      this.pressed = !1;
      r.apply(this, arguments);
    }
    function V() {
      this.evEl = ra;
      this.evWin = sa;
      r.apply(this, arguments);
      this.store = this.manager.session.pointerEvents = [];
    }
    function Z() {
      this.evTarget = "touchstart";
      this.evWin = "touchstart touchmove touchend touchcancel";
      this.started = !1;
      r.apply(this, arguments);
    }
    function W() {
      this.evTarget = Ca;
      this.targetIds = {};
      r.apply(this, arguments);
    }
    function Da(h, l) {
      var m = g(h.touches),
        q = this.targetIds;
      if (l & 3 && 1 === m.length) return (q[m[0].identifier] = !0), [m, m];
      var v = g(h.changedTouches),
        z = [],
        G = this.target;
      var N = m.filter(function (R) {
        return c(R.target, G);
      });
      if (1 === l) for (m = 0; m < N.length; ) (q[N[m].identifier] = !0), m++;
      for (m = 0; m < v.length; )
        q[v[m].identifier] && z.push(v[m]),
          l & 12 && delete q[v[m].identifier],
          m++;
      if (z.length) return [k(N.concat(z), "identifier", !0), z];
    }
    function fa() {
      r.apply(this, arguments);
      var h = O(this.handler, this);
      this.touch = new W(this.manager, h);
      this.mouse = new S(this.manager, h);
    }
    function ia(h, l) {
      this.manager = h;
      this.set(l);
    }
    function Ea(h) {
      if (-1 < h.indexOf("none")) return "none";
      var l = -1 < h.indexOf("pan-x"),
        m = -1 < h.indexOf("pan-y");
      return l && m
        ? "none"
        : l || m
        ? l
          ? "pan-x"
          : "pan-y"
        : -1 < h.indexOf("manipulation")
        ? "manipulation"
        : "auto";
    }
    function U(h) {
      h = C({}, h || {});
      this.id = Fa++;
      this.manager = null;
      this.options = M(h, this.defaults);
      h = this.options.enable;
      this.options.enable = h === J ? !0 : h;
      this.state = 1;
      this.simultaneous = {};
      this.requireFail = [];
    }
    function ta(h) {
      return h & 16
        ? "cancel"
        : h & 8
        ? "end"
        : h & 4
        ? "move"
        : h & 2
        ? "start"
        : "";
    }
    function ua(h) {
      return 16 == h
        ? "down"
        : 8 == h
        ? "up"
        : 2 == h
        ? "left"
        : 4 == h
        ? "right"
        : "";
    }
    function ca(h, l) {
      var m = l.manager;
      return m ? m.get(h) : h;
    }
    function T() {
      U.apply(this, arguments);
    }
    function da() {
      T.apply(this, arguments);
      this.pY = this.pX = null;
    }
    function ja() {
      T.apply(this, arguments);
    }
    function ka() {
      U.apply(this, arguments);
      this._input = this._timer = null;
    }
    function la() {
      T.apply(this, arguments);
    }
    function ma() {
      T.apply(this, arguments);
    }
    function ea() {
      U.apply(this, arguments);
      this.pCenter = this.pTime = !1;
      this._input = this._timer = null;
      this.count = 0;
    }
    function X(h, l) {
      l = l || {};
      var m = l.recognizers;
      l.recognizers = m === J ? X.defaults.preset : m;
      return new na(h, l);
    }
    function na(h, l) {
      l = l || {};
      this.options = M(l, X.defaults);
      this.options.inputTarget = this.options.inputTarget || h;
      this.handlers = {};
      this.session = {};
      this.recognizers = [];
      this.element = h;
      this.input = t(this);
      this.touchAction = new ia(this, this.options.touchAction);
      va(this, !0);
      K(
        l.recognizers,
        function (m) {
          var q = this.add(new m[0](m[1]));
          m[2] && q.recognizeWith(m[2]);
          m[3] && q.requireFailure(m[3]);
        },
        this
      );
    }
    function va(h, l) {
      var m = h.element;
      m.style &&
        K(h.options.cssProps, function (q, v) {
          m.style[n(m.style, v)] = l ? q : "";
        });
    }
    function Ga(h, l) {
      var m = H.createEvent("Event");
      m.initEvent(h, !0, !0);
      m.gesture = l;
      l.target.dispatchEvent(m);
    }
    var oa = " webkit moz MS ms o".split(" "),
      Ha = H.createElement("div"),
      aa = Math.round,
      Y = Math.abs,
      ha = Date.now,
      Fa = 1,
      Ia = /mobile|tablet|ip(ad|hone|od)|android/i,
      pa = "ontouchstart" in f,
      ya = n(f, "PointerEvent") !== J,
      za = pa && Ia.test(navigator.userAgent),
      qa = ["x", "y"],
      ba = ["clientX", "clientY"];
    r.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && a(this.element, this.evEl, this.domHandler);
        this.evTarget && a(this.target, this.evTarget, this.domHandler);
        this.evWin && a(p(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && b(this.element, this.evEl, this.domHandler);
        this.evTarget && b(this.target, this.evTarget, this.domHandler);
        this.evWin && b(p(this.element), this.evWin, this.domHandler);
      },
    };
    var Ja = { mousedown: 1, mousemove: 2, mouseup: 4 },
      Aa = "mousedown",
      Ba = "mousemove mouseup";
    I(S, r, {
      handler: function (h) {
        var l = Ja[h.type];
        l & 1 && 0 === h.button && (this.pressed = !0);
        l & 2 && 1 !== h.which && (l = 4);
        this.pressed &&
          this.allow &&
          (l & 4 && (this.pressed = !1),
          this.callback(this.manager, l, {
            pointers: [h],
            changedPointers: [h],
            pointerType: "mouse",
            srcEvent: h,
          }));
      },
    });
    var Ka = {
        pointerdown: 1,
        pointermove: 2,
        pointerup: 4,
        pointercancel: 8,
        pointerout: 8,
      },
      La = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
      ra = "pointerdown",
      sa = "pointermove pointerup pointercancel";
    f.MSPointerEvent &&
      ((ra = "MSPointerDown"),
      (sa = "MSPointerMove MSPointerUp MSPointerCancel"));
    I(V, r, {
      handler: function (h) {
        var l = this.store,
          m = !1,
          q = h.type.toLowerCase().replace("ms", "");
        q = Ka[q];
        var v = La[h.pointerType] || h.pointerType,
          z = "touch" == v,
          G = e(l, h.pointerId, "pointerId");
        q & 1 && (0 === h.button || z)
          ? 0 > G && (l.push(h), (G = l.length - 1))
          : q & 12 && (m = !0);
        0 > G ||
          ((l[G] = h),
          this.callback(this.manager, q, {
            pointers: l,
            changedPointers: [h],
            pointerType: v,
            srcEvent: h,
          }),
          m && l.splice(G, 1));
      },
    });
    var Ma = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
    I(Z, r, {
      handler: function (h) {
        var l = Ma[h.type];
        1 === l && (this.started = !0);
        if (this.started) {
          var m = g(h.touches);
          var q = g(h.changedTouches);
          l & 12 && (m = k(m.concat(q), "identifier", !0));
          m = [m, q];
          l & 12 && 0 === m[0].length - m[1].length && (this.started = !1);
          this.callback(this.manager, l, {
            pointers: m[0],
            changedPointers: m[1],
            pointerType: "touch",
            srcEvent: h,
          });
        }
      },
    });
    var Na = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 },
      Ca = "touchstart touchmove touchend touchcancel";
    I(W, r, {
      handler: function (h) {
        var l = Na[h.type],
          m = Da.call(this, h, l);
        m &&
          this.callback(this.manager, l, {
            pointers: m[0],
            changedPointers: m[1],
            pointerType: "touch",
            srcEvent: h,
          });
      },
    });
    I(fa, r, {
      handler: function (h, l, m) {
        var q = "mouse" == m.pointerType;
        if ("touch" == m.pointerType) this.mouse.allow = !1;
        else if (q && !this.mouse.allow) return;
        l & 12 && (this.mouse.allow = !0);
        this.callback(h, l, m);
      },
      destroy: function () {
        this.touch.destroy();
        this.mouse.destroy();
      },
    });
    var wa = n(Ha.style, "touchAction"),
      xa = wa !== J;
    ia.prototype = {
      set: function (h) {
        "compute" == h && (h = this.compute());
        xa &&
          this.manager.element.style &&
          (this.manager.element.style[wa] = h);
        this.actions = h.toLowerCase().trim();
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var h = [];
        K(this.manager.recognizers, function (l) {
          P(l.options.enable, [l]) && (h = h.concat(l.getTouchAction()));
        });
        return Ea(h.join(" "));
      },
      preventDefaults: function (h) {
        if (!xa) {
          var l = h.srcEvent,
            m = h.offsetDirection;
          if (this.manager.session.prevented) l.preventDefault();
          else {
            var q = this.actions,
              v = -1 < q.indexOf("none"),
              z = -1 < q.indexOf("pan-y");
            q = -1 < q.indexOf("pan-x");
            if (v) {
              var G = 2 > h.distance,
                N = 250 > h.deltaTime;
              if (1 === h.pointers.length && G && N) return;
            }
            if (!q || !z)
              if (v || (z && m & 6) || (q && m & 24)) return this.preventSrc(l);
          }
        }
      },
      preventSrc: function (h) {
        this.manager.session.prevented = !0;
        h.preventDefault();
      },
    };
    U.prototype = {
      defaults: {},
      set: function (h) {
        C(this.options, h);
        this.manager && this.manager.touchAction.update();
        return this;
      },
      recognizeWith: function (h) {
        if (w(h, "recognizeWith", this)) return this;
        var l = this.simultaneous;
        h = ca(h, this);
        l[h.id] || ((l[h.id] = h), h.recognizeWith(this));
        return this;
      },
      dropRecognizeWith: function (h) {
        if (w(h, "dropRecognizeWith", this)) return this;
        h = ca(h, this);
        delete this.simultaneous[h.id];
        return this;
      },
      requireFailure: function (h) {
        if (w(h, "requireFailure", this)) return this;
        var l = this.requireFail;
        h = ca(h, this);
        -1 === e(l, h) && (l.push(h), h.requireFailure(this));
        return this;
      },
      dropRequireFailure: function (h) {
        if (w(h, "dropRequireFailure", this)) return this;
        h = ca(h, this);
        h = e(this.requireFail, h);
        -1 < h && this.requireFail.splice(h, 1);
        return this;
      },
      hasRequireFailures: function () {
        return 0 < this.requireFail.length;
      },
      canRecognizeWith: function (h) {
        return !!this.simultaneous[h.id];
      },
      emit: function (h) {
        function l(v) {
          m.manager.emit(v, h);
        }
        var m = this,
          q = this.state;
        8 > q && l(m.options.event + ta(q));
        l(m.options.event);
        h.additionalEvent && l(h.additionalEvent);
        8 <= q && l(m.options.event + ta(q));
      },
      tryEmit: function (h) {
        if (this.canEmit()) return this.emit(h);
        this.state = 32;
      },
      canEmit: function () {
        for (var h = 0; h < this.requireFail.length; ) {
          if (!(this.requireFail[h].state & 33)) return !1;
          h++;
        }
        return !0;
      },
      recognize: function (h) {
        h = C({}, h);
        P(this.options.enable, [this, h])
          ? (this.state & 56 && (this.state = 1),
            (this.state = this.process(h)),
            this.state & 30 && this.tryEmit(h))
          : (this.reset(), (this.state = 32));
      },
      process: function (h) {},
      getTouchAction: function () {},
      reset: function () {},
    };
    I(T, U, {
      defaults: { pointers: 1 },
      attrTest: function (h) {
        var l = this.options.pointers;
        return 0 === l || h.pointers.length === l;
      },
      process: function (h) {
        var l = this.state,
          m = h.eventType,
          q = l & 6;
        h = this.attrTest(h);
        return q && (m & 8 || !h)
          ? l | 16
          : q || h
          ? m & 4
            ? l | 8
            : l & 2
            ? l | 4
            : 2
          : 32;
      },
    });
    I(da, T, {
      defaults: { event: "pan", threshold: 10, pointers: 1, direction: 30 },
      getTouchAction: function () {
        var h = this.options.direction,
          l = [];
        h & 6 && l.push("pan-y");
        h & 24 && l.push("pan-x");
        return l;
      },
      directionTest: function (h) {
        var l = this.options,
          m = !0,
          q = h.distance,
          v = h.direction,
          z = h.deltaX,
          G = h.deltaY;
        v & l.direction ||
          (l.direction & 6
            ? ((v = 0 === z ? 1 : 0 > z ? 2 : 4),
              (m = z != this.pX),
              (q = Math.abs(h.deltaX)))
            : ((v = 0 === G ? 1 : 0 > G ? 8 : 16),
              (m = G != this.pY),
              (q = Math.abs(h.deltaY))));
        h.direction = v;
        return m && q > l.threshold && v & l.direction;
      },
      attrTest: function (h) {
        return (
          T.prototype.attrTest.call(this, h) &&
          (this.state & 2 || (!(this.state & 2) && this.directionTest(h)))
        );
      },
      emit: function (h) {
        this.pX = h.deltaX;
        this.pY = h.deltaY;
        var l = ua(h.direction);
        l && (h.additionalEvent = this.options.event + l);
        this._super.emit.call(this, h);
      },
    });
    I(ja, T, {
      defaults: { event: "pinch", threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return ["none"];
      },
      attrTest: function (h) {
        return (
          this._super.attrTest.call(this, h) &&
          (Math.abs(h.scale - 1) > this.options.threshold || this.state & 2)
        );
      },
      emit: function (h) {
        1 !== h.scale &&
          (h.additionalEvent =
            this.options.event + (1 > h.scale ? "in" : "out"));
        this._super.emit.call(this, h);
      },
    });
    I(ka, U, {
      defaults: { event: "press", pointers: 1, time: 500, threshold: 5 },
      getTouchAction: function () {
        return ["auto"];
      },
      process: function (h) {
        var l = this.options,
          m = h.pointers.length === l.pointers,
          q = h.distance < l.threshold,
          v = h.deltaTime > l.time;
        this._input = h;
        if (!q || !m || (h.eventType & 12 && !v)) this.reset();
        else if (h.eventType & 1)
          this.reset(),
            (this._timer = B(
              function () {
                this.state = 8;
                this.tryEmit();
              },
              l.time,
              this
            ));
        else if (h.eventType & 4) return 8;
        return 32;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function (h) {
        8 === this.state &&
          (h && h.eventType & 4
            ? this.manager.emit(this.options.event + "up", h)
            : ((this._input.timeStamp = ha()),
              this.manager.emit(this.options.event, this._input)));
      },
    });
    I(la, T, {
      defaults: { event: "rotate", threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return ["none"];
      },
      attrTest: function (h) {
        return (
          this._super.attrTest.call(this, h) &&
          (Math.abs(h.rotation) > this.options.threshold || this.state & 2)
        );
      },
    });
    I(ma, T, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.65,
        direction: 30,
        pointers: 1,
      },
      getTouchAction: function () {
        return da.prototype.getTouchAction.call(this);
      },
      attrTest: function (h) {
        var l = this.options.direction;
        if (l & 30) var m = h.overallVelocity;
        else
          l & 6 ? (m = h.overallVelocityX) : l & 24 && (m = h.overallVelocityY);
        return (
          this._super.attrTest.call(this, h) &&
          l & h.offsetDirection &&
          h.distance > this.options.threshold &&
          h.maxPointers == this.options.pointers &&
          Y(m) > this.options.velocity &&
          h.eventType & 4
        );
      },
      emit: function (h) {
        var l = ua(h.offsetDirection);
        l && this.manager.emit(this.options.event + l, h);
        this.manager.emit(this.options.event, h);
      },
    });
    I(ea, U, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 2,
        posThreshold: 10,
      },
      getTouchAction: function () {
        return ["manipulation"];
      },
      process: function (h) {
        var l = this.options,
          m = h.pointers.length === l.pointers,
          q = h.distance < l.threshold,
          v = h.deltaTime < l.time;
        this.reset();
        if (h.eventType & 1 && 0 === this.count) return this.failTimeout();
        if (q && v && m) {
          if (4 != h.eventType) return this.failTimeout();
          m = this.pTime ? h.timeStamp - this.pTime < l.interval : !0;
          q = !this.pCenter || L(this.pCenter, h.center) < l.posThreshold;
          this.pTime = h.timeStamp;
          this.pCenter = h.center;
          this.count = q && m ? this.count + 1 : 1;
          this._input = h;
          if (0 === this.count % l.taps)
            return this.hasRequireFailures()
              ? ((this._timer = B(
                  function () {
                    this.state = 8;
                    this.tryEmit();
                  },
                  l.interval,
                  this
                )),
                2)
              : 8;
        }
        return 32;
      },
      failTimeout: function () {
        this._timer = B(
          function () {
            this.state = 32;
          },
          this.options.interval,
          this
        );
        return 32;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function () {
        8 == this.state &&
          ((this._input.tapCount = this.count),
          this.manager.emit(this.options.event, this._input));
      },
    });
    X.VERSION = "2.0.4";
    X.defaults = {
      domEvents: !1,
      touchAction: "compute",
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [
        [la, { enable: !1 }],
        [ja, { enable: !1 }, ["rotate"]],
        [ma, { direction: 6 }],
        [da, { direction: 6 }, ["swipe"]],
        [ea],
        [ea, { event: "doubletap", taps: 2 }, ["tap"]],
        [ka],
      ],
      cssProps: {
        userSelect: "none",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)",
      },
    };
    na.prototype = {
      set: function (h) {
        C(this.options, h);
        h.touchAction && this.touchAction.update();
        h.inputTarget &&
          (this.input.destroy(),
          (this.input.target = h.inputTarget),
          this.input.init());
        return this;
      },
      stop: function (h) {
        this.session.stopped = h ? 2 : 1;
      },
      recognize: function (h) {
        var l = this.session;
        if (!l.stopped) {
          this.touchAction.preventDefaults(h);
          var m = this.recognizers,
            q = l.curRecognizer;
          if (!q || (q && q.state & 8)) q = l.curRecognizer = null;
          for (var v = 0; v < m.length; ) {
            var z = m[v];
            2 === l.stopped || (q && z != q && !z.canRecognizeWith(q))
              ? z.reset()
              : z.recognize(h);
            !q && z.state & 14 && (q = l.curRecognizer = z);
            v++;
          }
        }
      },
      get: function (h) {
        if (h instanceof U) return h;
        for (var l = this.recognizers, m = 0; m < l.length; m++)
          if (l[m].options.event == h) return l[m];
        return null;
      },
      add: function (h) {
        if (w(h, "add", this)) return this;
        var l = this.get(h.options.event);
        l && this.remove(l);
        this.recognizers.push(h);
        h.manager = this;
        this.touchAction.update();
        return h;
      },
      remove: function (h) {
        if (w(h, "remove", this)) return this;
        var l = this.recognizers;
        h = this.get(h);
        l.splice(e(l, h), 1);
        this.touchAction.update();
        return this;
      },
      on: function (h, l) {
        var m = this.handlers;
        K(d(h), function (q) {
          m[q] = m[q] || [];
          m[q].push(l);
        });
        return this;
      },
      off: function (h, l) {
        var m = this.handlers;
        K(d(h), function (q) {
          l ? m[q].splice(e(m[q], l), 1) : delete m[q];
        });
        return this;
      },
      emit: function (h, l) {
        this.options.domEvents && Ga(h, l);
        var m = this.handlers[h] && this.handlers[h].slice();
        if (m && m.length) {
          l.type = h;
          l.preventDefault = function () {
            l.srcEvent.preventDefault();
          };
          for (var q = 0; q < m.length; ) m[q](l), q++;
        }
      },
      destroy: function () {
        this.element && va(this, !1);
        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
      },
    };
    C(X, {
      INPUT_START: 1,
      INPUT_MOVE: 2,
      INPUT_END: 4,
      INPUT_CANCEL: 8,
      STATE_POSSIBLE: 1,
      STATE_BEGAN: 2,
      STATE_CHANGED: 4,
      STATE_ENDED: 8,
      STATE_RECOGNIZED: 8,
      STATE_CANCELLED: 16,
      STATE_FAILED: 32,
      DIRECTION_NONE: 1,
      DIRECTION_LEFT: 2,
      DIRECTION_RIGHT: 4,
      DIRECTION_UP: 8,
      DIRECTION_DOWN: 16,
      DIRECTION_HORIZONTAL: 6,
      DIRECTION_VERTICAL: 24,
      DIRECTION_ALL: 30,
      Manager: na,
      Input: r,
      TouchAction: ia,
      TouchInput: W,
      MouseInput: S,
      PointerEventInput: V,
      TouchMouseInput: fa,
      SingleTouchInput: Z,
      Recognizer: U,
      AttrRecognizer: T,
      Tap: ea,
      Pan: da,
      Swipe: ma,
      Pinch: ja,
      Rotate: la,
      Press: ka,
      on: a,
      off: b,
      each: K,
      merge: M,
      extend: C,
      inherit: I,
      bindFn: O,
      prefixed: n,
    });
    "function" == typeof define && define.amd
      ? define(function () {
          return X;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = X)
      : (f[E] = X);
  })(window, document, "Hammer");
} catch (f) {
  console && console.log && console.log(f);
}
(function (f) {
  function H(a, b) {
    a = f(a);
    var c = this;
    this.elem = a;
    this.id = a.attr("id");
    this.pages = [];
    this.opts = b;
    this.currentPage = null;
    this.pageWidth = b.width / 2;
    this.pageHeight = b.height;
    this.startPage = b.startPage;
    this.onShowPage = b.onShowPage;
    this.slideShow = b.slideShow;
    this.slideShowDelay = b.slideShowDelay;
    this.pauseOnHover = b.pauseOnHover;
    this.turnPageDuration = b.turnPageDuration;
    this.foldGradient = b.foldGradient;
    this.foldGradientThreshold = b.foldGradientThreshold;
    this.shadows = b.shadows;
    this.shadowThreshold = b.shadowThreshold;
    this.clipBoundaries = b.clipBoundaries;
    this.zoomLevel = 1;
    this.zoomMax = Math.max(b.zoomMax, 1);
    this.zoomMin = b.zoomMin;
    this.zoomBoundingBox = b.zoomBoundingBox;
    this.zoomStep = b.zoomStep;
    this.onZoom = b.onZoom;
    this.mouseWheel = b.mouseWheel;
    this.flipSound = b.flipSound;
    this.centeredWhenClosed = b.centeredWhenClosed;
    this.sectionDefinition = b.sections;
    this.rtl = !!b.rtl;
    this.closable = b.closable;
    f.wowBook.support.filters = "filters" in a[0];
    this.opts.toolbarContainerPosition &&
      (this.opts.toolbarPosition = this.opts.toolbarContainerPosition);
    this.opts.toolbarLightboxPosition &&
      (this.opts.toolbarPosition = this.opts.toolbarLightboxPosition);
    (this._isMobile = f.wowBook.utils.isMobile()) && this.mobileSetup();
    a.addClass("wowbook");
    "static" === a.css("position") && a.css("position", "relative");
    var d = a.children();
    if (d.length < b.pageCount) {
      for (var e = b.pageCount - d.length; e--; ) a.append("<div />");
      d = a.children();
    }
    e =
      this.pagesContainer =
      this.origin =
        f("<div class='wowbook-origin'></div>")
          .css({ position: "absolute" })
          .appendTo(a);
    c.bookShadow = f("<div class='wowbook-book-shadow'></div>")
      .appendTo(a)
      .css({ top: 0, position: "absolute", display: "none", zIndex: 0 });
    this._controls = {};
    this.controllify(this.opts.controls);
    this.insertPages(d, !0);
    e.append(
      "<div class='wowbook-shadow-clipper'><div class='wowbook-shadow-container'><div class='wowbook-shadow-internal'></div></div></div>"
    );
    c.shadowContainer = f(".wowbook-shadow-container", e);
    c.internalShadow = f(".wowbook-shadow-internal", e);
    c.shadowClipper = f(".wowbook-shadow-clipper", e).css({ display: "none" });
    c.foldShadow = f("<div class='wowbook-shadow-fold'></div>").appendTo(
      c.shadowContainer
    );
    c.foldGradientContainer = f(
      "<div class='wowbook-fold-gradient-container'></div>"
    ).appendTo(c.shadowContainer);
    c.foldGradientElem = f(
      "<div class='wowbook-fold-gradient'></div>"
    ).appendTo(c.foldGradientContainer);
    c.hardPageDropShadow = f("<div class='wowbook-hard-page-dropshadow'></div>")
      .css({ display: "none" })
      .appendTo(e);
    !f.support.opacity &&
      f.wowBook.support.filters &&
      f.wowBook.applyAlphaImageLoader([
        "wowbook-fold-gradient",
        "wowbook-fold-gradient-flipped",
        "wowbook-shadow-fold",
        "wowbook-shadow-fold-flipped",
      ]);
    c.shadowContainer.css("position", "relative");
    this.leftHandle = f("<div class='wowbook-handle wowbook-left'></div>")
      .data("corner", "l")
      .appendTo(e);
    this.rightHandle = f("<div class='wowbook-handle wowbook-right'></div>")
      .data("corner", "r")
      .appendTo(e);
    Modernizr.csstransforms3d &&
      ((d = f("<div>").css("transform", "perspective(1px)")),
      (this.perspectiveUnit = "none" != d.css("transform") ? "px" : ""),
      (d = null));
    f.browser.msie &&
      f(".wowbook-handle", a).css({ backgroundColor: "#fff", opacity: "0.01" });
    f(".wowbook-handle", e).bind("mousedown.wowbook", function (r) {
      return c.pageEdgeDragStart(r);
    });
    b.curl &&
      f(".wowbook-handle", e).hover(
        function (r) {
          c.curlTimer ||
            (c.curlTimer = setTimeout(function () {
              var t =
                r.target == c.leftHandle[0] ? c.leftPage() : c.rightPage();
              if (t) {
                var u = t.offset();
                c.curl(
                  t,
                  r.pageY - u.top >
                    (c.pageHeight * c.currentScale * c._cssZoom) / 2
                );
              }
            }, 120));
        },
        function () {
          c.curlTimer = clearTimeout(c.curlTimer);
          c.uncurl();
        }
      );
    var g, k;
    f(".wowbook-handle", e)
      .on("mousedown.wowbook", function () {
        g = f.now();
        k = f(this).data("corner");
      })
      .on("mouseup.wowbook", function () {
        var r = f(this).data("corner");
        if (
          !(new Date().getTime() - g > c.opts.handleClickDuration || r != k)
        ) {
          c._cantStopAnimation || c.stopAnimation(!1);
          if ("r" === r) c[c.rtl ? "back" : "advance"]();
          if ("l" === r) c[c.rtl ? "advance" : "back"]();
          k = "";
        }
      });
    var n = !1;
    a.hover(
      function (r) {
        c.pauseOnHover && ((n = c.slideShowTimer), c.stopSlideShow(!0));
      },
      function () {
        c.pauseOnHover && n && c.startSlideShow();
      }
    );
    this.clipBoundaries &&
      (this.origin.wrap(
        "<div class='wowbook-clipper'><div class='wowbook-inner-clipper'></div></div>"
      ),
      f(".wowbook-inner-clipper", a).css({
        position: "absolute",
        width: "100%",
        overflow: "hidden",
      }),
      (this.clipper = f(".wowbook-clipper", a).css({
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        overflow: "hidden",
        zIndex: 1,
      })));
    a.wrapInner(
      "<div class='wowbook-zoomwindow'><div class='wowbook-zoomcontent'></div></div>"
    );
    this.zoomWindow = f(".wowbook-zoomwindow", a);
    this.zoomContent = f(".wowbook-zoomcontent", a);
    f.browser.ie8mode &&
      this.zoomContent.wrapInner(
        "<div class='IE8-zoom-helper'style='position:relative'></div>"
      );
    this.zoomWindow.css({ position: "absolute", top: 0 });
    this.zoomContent.css({ position: "absolute", left: 0, top: 0 });
    this.zoomSetup();
    this.setDimensions(2 * b.coverWidth || b.width, b.coverHeight || b.height);
    this.opts.container && this.createContainer();
    this.singlePage(b.singlePage);
    b.responsiveSinglePage && this.responsiveSinglePage();
    b.scaleToFit && (this.scaleToFit(), this.responsive());
    this.fillToc();
    e = b.useTranslate3d;
    Modernizr.csstransforms3d &&
      e &&
      (f.wowBook.useTranslate3d =
        1 == e || ("mobile" == e && f.wowBook.utils.isMobile()));
    b.useScale3d = b.useScale3d && Modernizr.csstransforms3d;
    if (b.deepLinking && this.getLocationHash()) {
      try {
        var p = c.selectorToPage("#" + this.getLocationHash());
      } catch (r) {}
      void 0 === p && (p = c.locationHashToPage());
      "number" === typeof p &&
        ((c.startPage = p),
        b.moveToViewPort && !J(c.elem) && c.elem[0].scrollIntoView());
    }
    this.flipSound && (this.audio = this.createAudioPlayer());
    this.opts.keyboardNavigation &&
      ((p = f.wowBook.defaults.keyboardNavigation),
      this.rtl &&
        this.opts.keyboardNavigation == p &&
        (this.opts.keyboardNavigation = { back: p.advance, advance: p.back }),
      f(document).on("keydown.wowbook", function (r) {
        f(r.target).filter("input, textarea, select").length ||
          c.holdedPage ||
          (c.opts.lightbox && !c.lightboxOn) ||
          (r.which === c.opts.keyboardNavigation.back && c.back(),
          r.which === c.opts.keyboardNavigation.advance && c.advance());
      }));
    f(window).on("hashchange.wowbook", function () {
      var r = window.location.hash;
      if (r === c.locationHashSetTo) c.locationHashSetTo = void 0;
      else {
        var t = (r = "" === r && !c.locationEndsInHash())
          ? c.startPage
          : c.locationHashToPage();
        "number" === typeof t &&
          (c.gotoPage(t, !r),
          r || !b.moveToViewPort || J(c.elem) || c.elem[0].scrollIntoView());
      }
    });
    b.forceBasicPage &&
      (this.foldPage = this.holdHardpage = this.foldPageBasic);
    f.wowBook.support.transform ||
      ((this.foldPage = this.foldPageBasic),
      f.wowBook.support.filters || (this.holdHardpage = this.foldPageBasic));
    this.mouseWheel &&
      ("zoom" == c.mouseWheel &&
        a.bind("mousemove.wowbook mouseenter.wowbook", function (r) {
          c._mousemoveEvent = r;
        }),
      a.mousewheel(function (r, t) {
        if (c.mouseWheel) {
          if ("zoom" === c.mouseWheel) {
            var u = c.elem.offset(),
              A = c._mousemoveEvent,
              D = A.pageX - u.left;
            u = A.pageY - u.top;
            0 < t && c.zoomIn({ x: D, y: u });
            0 > t && c.zoomOut({ x: D, y: u });
          } else 0 < t && c.advance(), 0 > t && c.back();
          return !1;
        }
      }));
    this.opts.touchEnabled && this.touchSupport();
    b.toc && (this.createToc(), b.displayToc && this.showToc());
    this.opts.thumbnails && this.createThumbnails();
    this.setupFullscreen();
    b.loadingIndicator &&
      (b.pdf || b.images || b.srcs) &&
      this.elem.addClass("wowbook-loading");
    this.showPage(this.startPage, !1);
    1 != this.opts.zoomLevel && this.zoom(this.opts.zoomLevel, { duration: 0 });
    this.opts.pdf && this.setPDF(this.opts.pdf);
    this.opts.lightbox && this.lightbox(this.opts.lightbox);
    this.toolbars = [];
    this.opts.toolbar &&
      (this.createToolbar(this.opts.toolbar),
      this.opts.responsiveToolbar &&
        (this.opts.lightbox || this.opts.container) &&
        this.setupResponsiveToolbar());
    this.setStyle(this.opts.styles || this.opts.style);
    this.opts.navControls && this.createNavigationControls();
    this.showPage(this.startPage, !1);
    this.opts.container &&
      (this.updateContainer(),
      b.scaleToFit && this.scaleToFit(),
      b.responsiveSinglePage && this.responsiveSinglePage());
    1 != this.opts.zoomLevel && this.zoom(this.opts.zoomLevel, { duration: 0 });
    this.opts.strings && this.setStrings();
    this.callRAFCallback = function () {
      c.rafCallback();
    };
    window.raf(this.callRAFCallback);
    b.slideShow && this.startSlideShow();
  }
  function E(a, b) {
    var c = Math.cos(b),
      d = Math.sin(b);
    return { x: c * a.x - d * a.y, y: d * a.x + c * a.y };
  }
  function J(a) {
    var b = f(window).height(),
      c = a.offset(),
      d = f(window).scrollTop();
    return c.top > d && c.top + a.height() < d + b;
  }
  function B(a, b, c) {
    var d;
    var e = (d = 0);
    if (!f.wowBook.support.boxSizing) {
      var g;
      e =
        "none" == a.css("borderTopStyle")
          ? 0
          : K[(g = a.css("borderTopWidth"))] || parseFloat(g);
      d =
        "none" == a.css("borderRightStyle")
          ? 0
          : K[(g = a.css("borderRightWidth"))] || parseFloat(g);
      var k =
        "none" == a.css("borderBottomStyle")
          ? 0
          : K[(g = a.css("borderBottomWidth"))] || parseFloat(g);
      var n =
        "none" == a.css("borderLeftStyle")
          ? 0
          : K[(g = a.css("borderLeftWidth"))] || parseFloat(g);
      d =
        parseFloat(a.css("paddingLeft")) +
        parseFloat(a.css("paddingRight")) +
        n +
        d;
      e =
        parseFloat(a.css("paddingTop")) +
        parseFloat(a.css("paddingBottom")) +
        e +
        k;
    }
    a.css("width", b - d);
    a.css("height", c - e);
  }
  f.wowBook = function (a) {
    return f(a).data("wowBook");
  };
  f.wowBook.version = "1.3.8";
  f.wowBook.support = {};
  f.fn.wowBook = function (a) {
    if ("string" === typeof a) {
      var b = Array.prototype.slice.call(arguments, 1);
      if ("options" === a || "prop" === a) {
        var c = f.wowBook(this[0]),
          d = b[0];
        return 1 < b.length ? (c[d] = b[1]) : c[d];
      }
      return this.each(function () {
        var g = f.wowBook(this);
        g[a].apply(g, b);
      });
    }
    var e = f.extend({}, f.wowBook.defaults, a);
    return this.each(function () {
      if (f.wowBook(this))
        console.log(
          "Error: the following element cannot be used twice by wowBook plugin: ",
          this
        );
      else {
        var g = new H(this, e);
        f(this).data("wowBook", g);
      }
    });
  };
  H.prototype = {
    destroy: function () {
      this.callRAFCallback = f.noop;
      this.curlTimer = clearTimeout(this.curlTimer);
      this.stopSlideShow();
      f("*").add(document).add(window).off(".wowbook");
      this.destroyThumbnails();
      this.destroyToc();
      this.destroyToolbars();
      this.destroyLightbox();
      this.destroyContainer();
      this.stopAnimation(!1);
      this.clearLocationHash();
      this.elem.empty().removeData().off();
    },
    mobileSetup: function () {
      this.opts.hardPageShadow = !1;
    },
    setDimensions: function (a, b) {
      this.zoomed && this.zoomReset(0);
      this.currentScale = 1;
      var c = this.elem,
        d = this.pageWidth;
      c.css({ height: b, width: a });
      var e = c.parent(),
        g = e.css("display");
      0 <= g.indexOf("flex") && e.css("display", "block");
      var k = c.height();
      this.pageWidth = c.width() / 2;
      this.pageHeight = k;
      this._originalHeight || (this._originalHeight = this.pageHeight);
      this._originalWidth || (this._originalWidth = 2 * this.pageWidth);
      0 <= g.indexOf("flex") && e.css("display", g);
      e = this.origin.css({ width: "100%", height: k });
      d &&
        this.centeredWhenClosed &&
        ((g = parseFloat(e.css("left"), 10)),
        e.css("left", g / (d / this.pageWidth)));
      this.bookShadow.css({ width: a, height: b });
      this.setPagesDimension();
      this.positionBookShadow();
      this.shadowClipper.css({ width: c.width(), height: k });
      this.hardPageDropShadow.css({
        width: this.pageWidth,
        height: this.pageHeight,
      });
      this.opts.handleWidth &&
        f(".wowbook-handle", e).css("width", this.opts.handleWidth);
      this.rightHandle.css("left", a - this.rightHandle.width());
      if (this.clipBoundaries || this._restoreClipBoundaries)
        (d = Math.ceil(
          Math.sqrt(
            this.pageWidth * this.pageWidth + this.pageHeight * this.pageHeight
          )
        )),
          (d = [this.pageHeight - d, c.width(), d, 0]),
          this.origin.css("top", -d[0]),
          f(".wowbook-inner-clipper", c).css({
            width: "100%",
            height: d[2] - d[0],
            top: d[0],
          }),
          this.clipper.css({ width: "100%", height: k });
      this.zoomWindow.css({ width: 2 * this.pageWidth, height: k });
      this.zoomContent.css({ width: 2 * this.pageWidth, height: k });
      this.corners = {
        tl: [0, 0],
        bl: [0, this.pageHeight],
        tr: [this.pageWidth, 0],
        br: [this.pageWidth, this.pageHeight],
        l: [0, 0],
        r: [this.pageWidth, 0],
      };
      this.pdf && this.pdfResetPages();
      this.thumbnails && this.updateThumbnails();
    },
    setPagesDimension: function () {
      for (var a, b, c, d = 0, e = this.pages.length; d < e; d++)
        (page = this.pages[d]),
          (b = page.isCover
            ? this.pageWidth
            : this.opts.pageWidth || this.pageWidth),
          (c = page.isCover
            ? this.pageHeight
            : this.opts.pageHeight || this.pageHeight),
          (page.pageWidth = b),
          (page.pageHeight = c),
          page.css({
            width: b,
            height: c,
            left: page.onLeft ? 0 : this.pageWidth,
          }),
          (a = f(".wowbook-page-content", page)),
          B(a, b, c),
          this.setPageCorners(page);
      this.opts.gutterShadow &&
        f(".wowbook-gutter-shadow", this.elem).css("height", c);
    },
    setPageCorners: function (a) {
      var b = 0 + a.pageWidth,
        c = 0 + a.pageHeight;
      a.corners = {
        tl: [0, 0],
        bl: [0, c],
        tr: [b, 0],
        br: [b, c],
        l: [0, 0],
        r: [b, 0],
      };
    },
    setPagePosition: function (a) {
      a.left = a.onLeft ? this.pageWidth - a.pageWidth : this.pageWidth;
      a.top = Math.floor((this.pageHeight - a.pageHeight) / 2);
      a.css({ left: a.left, top: a.top });
    },
    scale: function (a) {
      if (f.wowBook.support.transform) {
        this.zoomed && this.zoom(1, 0, { offset: { dx: 0, dy: 0 } });
        this.currentScale = a;
        var b = this.zoomContent;
        this.opts.zoomUsingTransform
          ? (b.css({ transform: "scale(" + a + ")", transformOrigin: "0 0" }),
            (this._cssZoom = 1))
          : (b.css("zoom", a), (this._cssZoom = a * this.zoomLevel));
        this.elem.css({
          height: this._originalHeight * a,
          width: this._originalWidth * a,
        });
        this.zoomWindow.css({
          height: this._originalHeight * a,
          width: this._originalWidth * a,
        });
        this.resizeHandles();
        if (this.opts.onResize) this.opts.onResize(this);
        this.pdfDoc && this.pdfUpdateRender();
      }
    },
    scaleToFit: function (a, b) {
      var c = a;
      if (!f.isNumeric(a)) {
        var d = f(a || this.opts.scaleToFit);
        if (!d.length)
          throw "jQuery selector passed to wowbook.resize did not matched in any DOM element.";
        c = d.width();
        b = d.height();
      }
      this.opts.maxWidth && c > this.opts.maxWidth && (c = this.opts.maxWidth);
      this.opts.maxHeight &&
        b > this.opts.maxHeight &&
        (b = this.opts.maxHeight);
      this._singlePage && (c *= 2);
      d = this._originalWidth / this._originalHeight;
      b * d <= c || (b = c / d);
      this.scale(b / this._originalHeight);
    },
    resize: function (a, b) {
      this.setDimensions(a, b);
      if (this.opts.onResize) this.opts.onResize(this);
    },
    responsive: function () {
      var a = this;
      this._reponsiveApplied = !0;
      f(window).on("resize.wowbook", function () {
        a.responsiveResizeHandler();
      });
    },
    responsiveResizeHandler: function () {
      if (f.wowBook.utils.isIOS) {
        var a =
            (this.opts.container == window && this.container) ||
            (this.lightboxOn && this._lightboxElem),
          b = f(window);
        if (
          a &&
          (a.outerHeight() != b.height() || a.outerWidth() != b.width()) &&
          (this.safariFixTotalDelayedTime ||
            (this.safariFixTotalDelayedTime = 0),
          800 > (this.safariFixTotalDelayedTime || 0))
        ) {
          var c = this;
          setTimeout(function () {
            c.safariFixTotalDelayedTime += 100;
            c.responsiveResizeHandler();
          }, 100);
          return;
        }
        this.safariFixTotalDelayedTime = 0;
      }
      this.responsiveUpdater();
    },
    responsiveUpdater: function () {
      this.opts.container && this.updateContainer();
      this.lightboxOn && this.centerLightbox();
      this.responsiveSinglePage();
      !0 !== this.opts.container || this.opts.containerHeight
        ? this.scaleToFit()
        : (this.scaleToFit(this.containerBook.width(), 1e4),
          this.containerBook.css("height", "auto"),
          this.updateContainer());
      if ((this.opts.container || this.lightboxOn) && this._singlePage) {
        var a = this.pageWidth * this.currentScale;
        this.elem.css("left", (this.opts.scaleToFit.width() - a) / 2);
      }
    },
    responsiveSinglePage: function (a) {
      if ((a = void 0 != a ? a : this.opts.responsiveSinglePage))
        f.isFunction(a) ||
          (a = function (b) {
            if (!this._isMobile) return !1;
            b = f(b.opts.scaleToFit);
            var c = b.width();
            return b.height() > c;
          }),
          this.singlePage(this.opts.singlePage || a.call(this, this));
    },
    resizeHandles: function () {
      if (this.opts.responsiveHandleWidth) {
        var a = this.opts.responsiveHandleWidth / this.currentScale;
        f(".wowbook-handle").width(a);
        this.rightHandle.css("left", 2 * this.pageWidth - a);
      }
    },
    insertPages: function (a, b) {
      for (var c = 0, d = a.length; c < d; c++) this.insertPage(a[c], !0);
      this.updateBook(b);
    },
    insertPage: function (a, b) {
      if (this.isDoublePage(a)) this.insertDoublePage(a, b);
      else {
        a = f(a).addClass("wowbook-page-content");
        var c = f("<div class='wowbook-page'></div>")
          .css({
            width: this.pageWidth,
            height: this.pageHeight,
            display: "none",
            position: "absolute",
          })
          .appendTo(this.pagesContainer)
          .append(a);
        f.wowBook.support.boxSizing &&
          a.css(f.wowBook.support.boxSizing, "border-box");
        B(a, this.pageWidth, this.pageHeight);
        c.hardPageSetByUser = a.hasClass("wowbook-hardpage");
        this.opts.gutterShadow && this.upsertGutterShadowInPage(c);
        this.pages.push(c);
        b || this.updateBook();
        return c;
      }
    },
    insertDoublePage: function (a, b) {
      if (!this._insertingDoublePage) {
        this._insertingDoublePage = !0;
        var c = f(a),
          d = c.clone().insertAfter(c),
          e = c.add(d);
        c.css("left", 0);
        d.css("right", "100%");
        e.css({ width: "200%", height: "100%", position: "relative" });
        e.css(f.wowBook.support.boxSizing + "", "border-box").wrap(
          "<div class='wowbook-double-page'></div>"
        );
        c.parent().data("src", c.data("src"));
        d.parent().data("src", d.data("src"));
        c.parent().data("image", c.data("image"));
        d.parent().data("image", d.data("image"));
        if (this.rtl)
          (g = this.insertPage(d.parent(), !0)),
            (e = this.insertPage(c.parent(), !0));
        else {
          e = this.insertPage(c.parent(), !0);
          var g = this.insertPage(d.parent(), !0);
        }
        e && (e.otherHalf = g);
        g && (g.otherHalf = e);
        f.wowBook.support.boxSizing ||
          (B(c, 2 * this.pageWidth, this.pageHeight),
          B(d, 2 * this.pageWidth, this.pageHeight));
        b || this.updateBook();
        this._insertingDoublePage = !1;
      }
    },
    isDoublePage: function (a) {
      a = f(a);
      return a.data("double") || a.is(this.opts.doublePages);
    },
    replaceNumberHolder: function (a, b) {
      if (void 0 == a) return a;
      b += "";
      return a.replace(/\{\{([^}]+)\}\}/g, function (c, d) {
        if (b.length < d.length) {
          var e = d.replace(/./g, "0");
          return (e + b).slice(-e.length);
        }
        return b;
      });
    },
    loadPage: function (a) {
      "number" === typeof a && (a = this.pages[a]);
      if (
        a &&
        !a.loaded &&
        !a.loading &&
        (a.src || a.image || a.cached || this.pdfDoc)
      ) {
        if (a.cached) return this.finishPageLoading(a, a.cache);
        a.loading = !0;
        this.opts.loadingIndicator && a.addClass("wowbook-loading");
        var b = this;
        if (a.src)
          (a.otherHalf && a.otherHalf.loading) ||
            f.get(a.src, function (d) {
              b.finishPageLoading(a, d);
              a.otherHalf && b.finishPageLoading(a.otherHalf, d);
            });
        else if (a.image) {
          var c = new Image();
          c.onload = function () {
            b.finishPageLoading(a, this);
          };
          f(c).addClass("wowbook-lazy");
          c.src = a.image;
        } else this.pdfDoc && b.pdfLoadPage(a.pageIndex);
      }
    },
    finishPageLoading: function (a, b) {
      a.loading = !1;
      a.loaded = !0;
      var c = !a.cached;
      a.cached = !1;
      this.opts.loadingIndicator &&
        (a.removeClass("wowbook-loading"),
        this.elem.removeClass("wowbook-loading"));
      var d = a.find(".wowbook-page-content");
      c &&
        (a.image || a.src) &&
        this.isDoublePage(d.children().first()) &&
        (d = d.children().first());
      d.append(b);
      this.upsertNumberInPage(a);
      this.opts.gutterShadow && this.upsertGutterShadowInPage(a);
      if (this.opts.onLoadPage) this.opts.onLoadPage(this, a, a.pageIndex);
      this.pdfDoc &&
        !this._onLoadPDFCalled &&
        (c = this.opts.onLoadPDF || this.opts.onLoadPdf) &&
        (c(this, a, a.pageIndex), (this._onLoadPDFCalled = !0));
      this.updateThumbnail(a.pageIndex);
    },
    unloadPage: function (a) {
      "number" === typeof a && (a = this.pages[a]);
      if (
        a &&
        a.loaded &&
        !this.isPageToKeep(a) &&
        ((a.cache = a.find(".wowbook-page-content").html()),
        a.find(".wowbook-page-content").empty(),
        (a.cached = !0),
        (a.loaded = !1),
        this.pdfDoc &&
          ((a.cache = void 0), (a.cached = !1), (a.textLayer = null)),
        this.opts.onUnloadPage)
      )
        this.opts.onUnloadPage(this, a, a.pageIndex);
    },
    isPageToKeep: function (a) {
      if (!a.keep) var b = a.find(".wowbook-page-content");
      return a.keep || b.data("keep") || b.is(this.opts.pagesToKeep);
    },
    selectPagesToUnload: function (a) {
      void 0 == a && (a = this.currentPage);
      var b = [],
        c = this.leftPageIndex(a);
      a = this.rightPageIndex(a);
      var d = this.pageBelow(c),
        e = this.pageBelow(a),
        g = this.backPage(c),
        k = this.backPage(a);
      g = g && g.pageIndex;
      k = k && k.pageIndex;
      for (var n = 0, p = this.pages.length; n < p; n++) {
        var r = this.pages[n];
        r.loaded &&
          n != c &&
          n != a &&
          n != d &&
          n != e &&
          n != g &&
          n != k &&
          !this.isPageToKeep(r) &&
          b.push(n);
      }
      return b;
    },
    loadedPages: function () {
      for (var a = [], b = 0, c = this.pages.length; b < c; b++)
        this.pages[b].loaded && a.push(b);
      return a;
    },
    unloadUnusedPages: function (a) {
      var b = this.loadedPages();
      if (!(b.length <= this.opts.pagesInMemory)) {
        b = b.length - this.opts.pagesInMemory;
        a = this.selectPagesToUnload(a);
        for (var c = 0; c < b; c++) this.unloadPage(a[c]);
      }
    },
    removePages: function (a, b) {
      arguments.length || ((a = 0), (b = -1));
      this.holdedPage && this.releasePage(this.holdedPage);
      var c = this.pages;
      b = (b || a) + 1 || c.length;
      var d = c.slice(a, b),
        e = c.slice(b);
      c.length = 0 > a ? c.length + a : a;
      c.push.apply(c, e);
      e = 0;
      for (var g = d.length; e < g; e++) d[e].remove();
      this.updateBook();
      return c.length;
    },
    updateBook: function (a) {
      this.doPageNumbering();
      this.findPagesType();
      this.positionBookShadow();
      var b = (this.rtl && this.closable) || (!this.rtl && !this.closable),
        c = this.opts.pageWidth || this.opts.pageHeight;
      this.differentPageSizes = c;
      for (var d = 0, e = this.pages.length - 1; d <= e; d++) {
        var g = this.pages[d]
          .toggleClass("wowbook-left", b)
          .toggleClass("wowbook-right", !b)
          .data({ pageIndex: d, holded: !1 });
        g.pageIndex = d;
        g.cover = !1;
        g.insideCover = !1;
        g.isCover =
          c &&
          (0 == d ||
            d == e ||
            (this.closable && 1 == d) ||
            (d == e - 1 && !this.otherPage(e)));
        var k = f(".wowbook-page-content", g);
        g.src = this.replaceNumberHolder(k.data("src") || this.opts.srcs, d);
        g.image = this.replaceNumberHolder(
          k.data("image") || this.opts.images,
          d
        );
        1 != g.loaded && (g.loaded = !g.src && !g.image && !g.cached);
        !g.loaded &&
          this.opts.loadingIndicator &&
          g.addClass("wowbook-loading");
        g.onLeft = b;
        g.onRight = !b;
        b = !b;
        g.thickness = this.opts.pageThickness;
        c && (g.thickness = g.isCover ? this.opts.pageThickness : "1px");
      }
      this.setCovers();
      this.setPagesDimension();
      this.findSections();
      this.opts.currentPageControlWidth || this.setCurrentPageControlWidth();
      a ? this.updateCurrentPageControl() : this.showPage(this.currentPage);
    },
    setCovers: function () {
      function a(k) {
        if (0 == k || k == b) {
          var n = c.pages[k];
          if (n) {
            var p = c.backPage(k);
            c.otherPage(k)
              ? p || ((n.cover = !1), (n.insideCover = !0))
              : ((n.cover = !0),
                (n.insideCover = !1),
                p && !p.cover && (p.insideCover = !0));
          }
        }
      }
      var b = this.pages.length - 1,
        c = this;
      a(0);
      a(b);
      c.insideCoverLeft = null;
      c.insideCoverRight = null;
      for (var d = 0, e = this.pages.length - 1; d <= e; d++) {
        var g = c.pages[d];
        g.insideCover &&
          (g.onLeft ? (c.insideCoverLeft = g) : (c.insideCoverRight = g),
          c.differentPageSizes && (g.keep = !0));
      }
    },
    singlePage: function (a) {
      if (void 0 !== a) {
        (this._singlePage = !!a)
          ? this.clipBoundaries &&
            ((this.clipBoundaries = !1),
            (this._restoreClipBoundaries = !0),
            this.clipper.css("overflow", "visible"),
            this.clipper
              .children(".wowbook-inner-clipper")
              .css("overflow", "visible"),
            this.container && this.container.css("overflow", "hidden"))
          : this._restoreClipBoundaries &&
            ((this._restoreClipBoundaries = !1),
            (this.clipBoundaries = !0),
            this.clipper.css("overflow", "hidden"),
            this.clipper
              .children(".wowbook-inner-clipper")
              .css("overflow", "visible"));
        a = 0;
        var b = this.pageWidth;
        if (this._singlePage)
          a = this.pageIsOnTheRight(this.currentPage) ? -b : 0;
        else if (this.centeredWhenClosed) {
          a = !!this.leftPage(this.currentPage);
          var c = this.rightPage(this.currentPage);
          a = a && c ? 0 : a ? b / 2 : -b / 2;
        }
        this.origin.css("left", a);
        this.positionBookShadow();
      }
      return this._singlePage;
    },
    doPageNumbering: function () {
      var a = this.opts;
      if (a.pageNumbers && this.pages.length) {
        var b = a.numberedPages;
        a = this.pages.length - 1;
        var c = this.pageIsOnTheLeft(a);
        "all" == b && (b = [0, -1]);
        b || (b = this.closable ? [2, c ? -3 : -2] : [0, -1]);
        var d = b[0];
        b = b[1];
        0 > d && (d = a + d + 1);
        0 > d && (d = 0);
        d > this.pages.length - 1 && (d = a);
        0 > b && (b = a + b + 1);
        0 > b && (b = 0);
        b > this.pages.length - 1 && (b = a);
        var e = this.opts.firstPageNumber;
        for (c = 0; c < a; c++) delete this.pages[c].number;
        for (c = 0; c < d; c++)
          f(".wowbook-page-number", this.pages[c]).remove();
        for (c = b + 1; c < a; c++)
          f(".wowbook-page-number", this.pages[c]).remove();
        for (c = d; c <= b; c++)
          (this.pages[c].number = e),
            (a = f(".wowbook-page-number", this.pages[c])),
            a.length ||
              ((a = f(".wowbook-page-content", this.pages[c])),
              (a = f('<div class="wowbook-page-number"></div>').appendTo(a))),
            a.html(e++);
      }
    },
    upsertNumberInPage: function (a) {
      "number" === typeof a && (a = this.pages[a]);
      if (a.number || 0 === a.number) {
        var b = f(".wowbook-page-number", a);
        b.length ||
          ((content = f(".wowbook-page-content", a)),
          (b = f('<div class="wowbook-page-number"></div>').appendTo(content)));
        b.html(a.number);
      }
    },
    upsertGutterShadowInPage: function (a) {
      "number" === typeof a && (a = this.pages[a]);
      a.find(".wowbook-gutter-shadow").length ||
        ((a = a.find(".wowbook-page-content")),
        f("<div class='wowbook-gutter-shadow'>")
          .css("height", this.pageHeight)
          .appendTo(a));
    },
    findPagesType: function () {
      var a = this.opts,
        b = {},
        c;
      var d = a.hardPages || [];
      var e = !0 === d;
      if (!e)
        for (
          a.hardcovers &&
            (d.push(0, -1),
            this.closable && d.push(1),
            this.otherPage(this.pages.length - 1) || d.push(-2)),
            a = 0,
            c = d.length;
          a < c;
          a++
        ) {
          var g = d[a];
          0 > g && (g = this.pages.length + g);
          0 <= g && g < this.pages.length && (b[g] = !0);
        }
      for (a = this.pages.length; a--; )
        (d = e || b[a] || this.pages[a].hardPageSetByUser),
          (this.pages[a].toggleClass("wowbook-hardpage", d).isHardPage = d);
    },
    showPage: function (a, b) {
      0 > a && (a = 0);
      a > this.pages.length - 1 && (a = this.pages.length - 1);
      var c = this.leftPageIndex(a),
        d = this.rightPageIndex(a),
        e = this.pageBelow(c),
        g = this.pageBelow(d),
        k = this.pageWidth,
        n = this.pages.length - 1;
      this.loadPage(c);
      this.loadPage(d);
      this.loadPage(e);
      this.loadPage(g);
      this.loadPage(this.backPage(c));
      this.loadPage(this.backPage(d));
      this.differentPageSizes &&
        (null !== e && this.loadPage(this.insideCoverLeft),
        null !== g && this.loadPage(this.insideCoverRight));
      this.opts.pagesInMemory && this.unloadUnusedPages(a);
      for (var p = 0; p <= n; p++) {
        var r = this.pages[p].onLeft != this.rtl ? p : n - p;
        var t = p === e || p === c || p === d || p === g ? "block" : "none";
        this.pages[p].data("zIndex", r).css({
          display: t,
          left: this.pages[p].onLeft ? 0 : k,
          top: 0,
          zIndex: r,
        });
        this.setPagePosition(this.pages[p]);
      }
      this.differentPageSizes &&
        (null !== e && this.insideCoverLeft.css("display", "block"),
        null !== g && this.insideCoverRight.css("display", "block"));
      e = 0 == a || (!this.closable && 1 == a);
      n = a == n || a == this.otherPage(n);
      this.leftHandle.toggleClass("wowbook-disabled", !this.backPage(c));
      this.rightHandle.toggleClass("wowbook-disabled", !this.backPage(d));
      this.toggleControl("back", e);
      this.toggleControl("next", n);
      this.toggleControl("first", e);
      this.toggleControl("last", n);
      c = !this.pages.length;
      this.toggleControl("left", c || (this.rtl ? n : e));
      this.toggleControl("lastLeft", c || (this.rtl ? n : e));
      this.toggleControl("right", c || (this.rtl ? e : n));
      this.toggleControl("lastRight", c || (this.rtl ? e : n));
      (c = this.onShowPage) &&
        f.isFunction(c) &&
        !this.isOnPage(a) &&
        ((this.currentPage = a),
        c(this, this.pages[a], a),
        (d = this.otherPage(a)) && c(this, this.pages[d], d));
      this.currentPage = a;
      this.pdf && this.pdfUpdateRender();
      this._controls.currentpage && this.updateCurrentPageControl();
      this._sliding ||
        ((c = this._singlePage && this.pageIsOnTheRight(a) ? -k : 0),
        this.origin.css("left", c),
        this.origin.css("transform", ""));
      this.centeredWhenClosed &&
        !this._singlePage &&
        ((c = !!this.leftPage(a)),
        (d = this.rightPage(a)),
        this.origin.css("left", c && d ? 0 : c ? k / 2 : -k / 2));
      this.positionBookShadow();
      !1 !== b &&
        this.opts.updateBrowserURL &&
        this.locationHashToPage() != a &&
        (this.locationHashSetTo = window.location.hash =
          this.pageToLocationHash(a));
      this.showThumbnail();
    },
    slideX: function (a, b) {
      var c = parseFloat(this.origin.css("left")),
        d = a - c;
      this.origin.css("left", 0);
      var e = this;
      this._move = 0;
      this._sliding = !0;
      f(this).animate(
        { _move: 1 },
        {
          duration: this.opts.turnPageDuration,
          easing: "easeOutCubic",
          complete: function () {
            this._sliding = !1;
            this.origin.css("transform", "");
            this.origin.css("left", a);
            this.positionBookShadow();
            f.isFunction(b) && b();
          },
          step: function (g, k) {
            e.translate(this.origin, c + g * d);
            this.positionBookShadow();
          },
        }
      );
    },
    holdPage: function (a, b, c, d, e) {
      "number" === typeof a && (a = this.pages[a]);
      if (a) {
        var g = a.pageIndex,
          k = this.pages.length - 1,
          n = !this.otherPage(k);
        if (!d) d = this.pageIsOnTheLeft(g) ? "l" : "r";
        else if (
          !this.corners[d] ||
          (this.pageIsOnTheLeft(g) ? /r/ : /l/).test(d)
        )
          return;
        void 0 === e && (e = this.backPage(g));
        if (e) {
          var p = e.pageIndex;
          a.data("holded_info", [b, c, d]);
          if (
            !this._singlePage &&
            this.centeredWhenClosed &&
            (0 === g || 0 === p || (n && (p === k || g === k)))
          ) {
            var r = 0,
              t = !this.rtl,
              u = this.pageWidth;
            if (t ? 0 === g : g === k && n) {
              var A = -u / 2;
              var D = -u / 4;
              var F = 0;
              var L = -u / 2;
              var Q = -u;
              var S = D;
              var V = Q;
              var Z = b;
            }
            if (t ? g === k && n : 0 === g)
              (A = u),
                (D = (3 * u) / 2),
                (F = u / 2),
                (L = 0),
                (Q = u),
                (S = 2 * u),
                (V = b),
                (Z = S);
            if (t ? 0 === p : p === k && n)
              (A = u / 2),
                (D = g === (t ? k : 0) ? u : (3 * u) / 2),
                (F = g === (t ? k : 0) ? u / 2 : 0),
                (L = -u / 2),
                (Q = A),
                (S = 2 * u),
                (V = b),
                (Z = S);
            if (t ? p === k && n : 0 === p)
              (A = g === (t ? 0 : k) ? 0 : -u / 2),
                (D = u / 2),
                (F = u / 2),
                (L = g === (t ? 0 : k) ? -u / 2 : 0),
                (Q = -u),
                (S = D),
                (V = Q),
                (Z = b);
            if (b < A) {
              r = F;
              var W = V;
            }
            b > D && ((r = L), (W = Z));
            b >= A &&
              b <= D &&
              ((b = (b - A) / (D - A)),
              (r = F + b * (L - F)),
              (W = Q + b * (S - Q)));
            b = W;
            this.origin.css("left", r);
            this.positionBookShadow();
          }
          this.zoomed ||
          "basic" == this.pageType(a) ||
          "basic" == this.pageType(e)
            ? this.foldPageBasic(a, b, c, d, e)
            : a.isHardPage || e.isHardPage
            ? this.holdHardpage(a, b, c, d, e)
            : this.foldPage(a, b, c, d, e);
          if (
            !a.data("holded") &&
            (a.addClass("wowbook-page-holded"),
            e.addClass("wowbook-page-holded"),
            a.data("holded", !0),
            (this.holdedPage = a),
            (this.holdedPageBack = e),
            this.shadows && this.shadowClipper.css("display", "block"),
            this.clipBoundaries && this.clipper.css("overflow", "visible"),
            this.positionBookShadow(),
            this.opts.onHoldPage)
          )
            this.opts.onHoldPage(this, g, a, e);
        }
      }
    },
    foldPage: function (a, b, c, d, e) {
      this._currentFlip ||
        (this._currentFlip = this.foldPageStart(a, b, c, d, e));
      this._currentFlip.page == a &&
        ((this._currentFlip.x = b),
        (this._currentFlip.y = c),
        this._currentFlip.page.data("holdedAt", { x: b, y: c }),
        (this._currentFlip.corner = d),
        this.foldPageStyles(this._currentFlip));
    },
    foldPageStart: function (a, b, c, d, e) {
      var g = {};
      "number" === typeof a && (a = this.pages[a]);
      g.book = this;
      g.page = a;
      g.pageIndex = a.data("pageIndex");
      void 0 === e && (e = this.backPage(g.pageIndex));
      if (e && e.length) {
        g.back = e;
        g.pageContent = a.children().first();
        g.backContent = e.children().first();
        var k = g.page.pageWidth,
          n = g.page.pageHeight;
        d || (d = "tl");
        if ("l" == d || "r" == d) {
          var p = { x: "l" == d ? 0 : k, y: c };
          a.data("grabPoint", p);
          g.grabPoint = p;
          d = (c >= p.y ? "t" : "b") + d;
        }
        g.page.data("holdedAt", { x: b, y: c });
        g.x = b;
        g.y = c;
        g.page.data("holdedCorner", d);
        g.corner = d;
        g.pageDiagonal = Math.sqrt(k * k + n * n);
        b = Math.ceil(g.pageDiagonal);
        b = "rect(-" + b + "px " + b + "px " + b + "px 0px)";
        g.page.css("clip", b);
        g.pageLeft = parseFloat(a.css("left"));
        e.css({ left: g.pageLeft + "px", zIndex: 1e5, clip: b });
        g.shadowHeight = 2 * Math.ceil(g.pageDiagonal);
        g.shadowTop = -(g.shadowHeight - n) / 2;
        this.shadowClipper.css({
          top: g.page.top,
          left: a.onLeft ? a.left : e.left,
          width: 2 * k,
          height: n,
        });
        this.internalShadow.css({ display: "block", height: g.shadowHeight });
        g.foldShadowWidth = this.foldShadow.width();
        this.foldShadow.css({ display: "block", height: g.shadowHeight });
        this.foldGradientContainer.appendTo(g.backContent);
        g.foldGradientWidth = this.foldGradientElem.width();
        g.foldGradientHeight = 2 * Math.ceil(g.pageDiagonal);
        this.foldGradientElem.css("height", g.foldGradientHeight);
        this.foldGradientContainer.css({
          position: "absolute",
          width: g.foldGradientWidth,
          height: g.foldGradientHeight,
          top: 0,
          left: 0,
          display: "none",
        });
        g.foldGradientVisible = !1;
        return g;
      }
    },
    foldPageStyles: function (a) {
      var b = a.page.pageWidth,
        c = a.page.pageHeight,
        d = b / 2,
        e = c / 2,
        g = f.wowBook.utils.translate,
        k = a.x,
        n = a.y,
        p = a.back,
        r = a.corner || "tl";
      if ("l" == r || "r" == r) {
        var t = a.page.data("grabPoint");
        t || ((t = { x: "l" == r ? 0 : b, y: n }), page.data("grabPoint", t));
        r =
          (n >= t.y ? "t" : "b") +
          (this.pageIsOnTheLeft(a.pageIndex) ? "l" : "r");
        a.corner = r;
        a.page.data("holdedCorner", r);
        var u = k - t.x,
          A = n - t.y;
        u = Math.atan2(A, u);
        t = { x: 0, y: (n >= t.y ? 0 : c) - t.y };
        t = E(t, 2 * u);
        k = t.x + k;
        n = t.y + n;
      }
      a.page.data("holdedAt", { x: k, y: n });
      a.page.data("holdedCorner", r);
      t = a.page.corners[r];
      r = b - t[0];
      var D = t[1];
      u = k - r;
      A = n - D;
      var F = Math.sqrt(u * u + A * A);
      F > b && ((k = r + (b * u) / F), (n = D + (b * A) / F));
      D = c - D;
      u = k - r;
      A = n - D;
      F = Math.sqrt(u * u + A * A);
      var L = a.pageDiagonal;
      F > L && ((k = r + (L * u) / F), (n = D + (L * A) / F));
      r = t[0];
      t = t[1];
      t == n && (n = t + 0.001);
      u = k - r;
      A = n - t;
      F = Math.sqrt(u * u + A * A);
      k = F / 2;
      u = Math.atan2(A, u);
      A = Math.tan(u);
      n = u;
      u = (180 * u) / Math.PI;
      D = { x: r - d, y: e - t };
      L = E(D, n);
      F = L.x + k + d + 0.5;
      a.pageContent.css(
        "transform",
        g(-F, 0) + " rotate(" + (-u).toFixed(7) + "deg)"
      );
      a.page.css(
        "transform",
        g((Math.cos(n) * F).toFixed(5), (Math.sin(n) * F).toFixed(5)) +
          " rotate(" +
          u.toFixed(7) +
          "deg)"
      );
      L = this.calculateOpacity(k, b, this.shadowThreshold, 50);
      if (this.shadows && 0 < L) {
        var Q = a.shadowTop;
        this.internalShadow.css({
          transform:
            g(F + (a.page.onRight ? a.page.pageWidth : 0), Q) +
            " rotate(" +
            u +
            "deg)",
          transformOrigin:
            d - F + "px " + (e + (a.shadowHeight - c) / 2) + "px",
        });
        F -= a.foldShadowWidth;
        this.foldShadow.css({
          transform:
            g(F + (a.page.onRight ? a.page.pageWidth : 0), Q) +
            " rotate(" +
            u +
            "deg)",
          transformOrigin:
            d - F + "px " + (e + (a.shadowHeight - c) / 2) + "px",
        });
        this.shadowContainer.css({ opacity: L, display: "block" });
      } else this.shadowContainer.css("display", "none");
      p.show();
      D.x = -D.x;
      L = E(D, -n);
      F = L.x - k + d - 1;
      c = { x: L.x - k, y: L.y + k * A };
      p = { x: L.x - k, y: L.y - k / (0 == A ? 1e-4 : A) };
      c = E(c, -n);
      p = E(p, -n);
      p = -(p.x + d);
      c = -(c.y - e);
      a.backContent.css("transform", g(-F, 0) + " rotate(" + u + "deg)");
      a.back.css(
        "transform",
        g(
          (r + p + Math.cos(n) * F).toFixed(5),
          (t - c + Math.sin(n) * F).toFixed(5)
        ) +
          " rotate(" +
          u +
          "deg)"
      );
      L = this.calculateOpacity(2 * k, 2 * b, this.foldGradientThreshold, 50);
      this.foldGradient && 0 < L
        ? (this.foldGradientContainer.css({
            opacity: L,
            display: "block",
            transform:
              g(b - r - a.foldGradientWidth / 2, t - a.foldGradientHeight / 2) +
              " rotate(" +
              -u +
              "deg)",
          }),
          this.foldGradientElem.css(
            "transform",
            g(-k + a.foldGradientWidth / 2, 0)
          ),
          a.foldGradientVisible ||
            (this.foldGradientContainer.css("display", "block"),
            (a.foldGradientVisible = !0)))
        : a.foldGradientVisible &&
          (this.foldGradientContainer.css("display", "none"),
          (a.foldGradientVisible = !1));
    },
    holdHardpage: function (a, b, c, d, e) {
      this._currentFlip ||
        (this._currentFlip = this.flipHardPageStart(a, b, c, d, e));
      this._currentFlip.page == a &&
        ((this._currentFlip.x = b),
        (this._currentFlip.y = c),
        this._currentFlip.page.data("holdedAt", { x: b, y: c }),
        (this._currentFlip.corner = d),
        this.flipHardPageStyles(this._currentFlip));
    },
    flipHardPageStart: function (a, b, c, d, e) {
      this.clipBoundaries &&
        this.clipper
          .children(".wowbook-inner-clipper")
          .css("overflow", "visible");
      !this.border3D &&
        this.opts.pageThickness &&
        this.opts.use3d &&
        Modernizr.csstransforms3d &&
        ((this.border3D = f('<div class="wowbook-3d-border">')),
        this.border3D.css("background", this.opts.pageEdgeColor));
      this.opts.hardPageShadow &&
        !this.hardPageShadow &&
        (this.hardPageShadow = f('<div class="wowbook-hard-page-shadow">'));
      var g = {};
      "number" === typeof a && (a = this.pages[a]);
      g.book = this;
      g.page = a;
      g.pageIndex = a.data("pageIndex");
      void 0 === e && (e = this.backPage(g.pageIndex));
      if (e && e.length) {
        g.back = e;
        var k = a.pageWidth;
        d || (d = "tl");
        a.data("holdedAt", { x: b, y: c });
        a.data("holdedCorner", d);
        a.css("zIndex", 1e5);
        e.css("zIndex", 1e5);
        this.opts.use3d &&
          Modernizr.csstransforms3d &&
          (a.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"),
          e.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"));
        b = a.onLeft ? k : 0;
        a.css("transformOrigin", b + "px 50%");
        e.css("transformOrigin", k - b + "px 50%");
        this.border3D && this.border3D.css("width", a.thickness);
        this.shadows &&
          this.hardPageDropShadow.css({
            display: "block",
            width: a.pageWidth,
            height: a.pageHeight,
            top: a.top,
          });
        return g;
      }
    },
    flipHardPageStyles: function (a) {
      var b = a.page,
        c = a.back,
        d = a.x,
        e = a.y,
        g = this.pageIsOnTheRight(a.pageIndex),
        k = this.pageWidth,
        n = this.pageHeight;
      (a = a.corner) || (a = "tl");
      b.data("holdedAt", { x: d, y: e });
      b.data("holdedCorner", a);
      e = g ? k - d : d;
      a = g ? 0 : k;
      var p;
      0 > e && (e = 0);
      e = (p = e < k) ? b : c;
      (p ? c : b).css("display", "none");
      g = g != p;
      a = d - a;
      a > k && (a = k);
      a < -k && (a = -k);
      var r = -Math.sqrt(1600 * (1 - (a * a) / ((k + 15) * (k + 15))));
      p = Math.abs(a / k);
      r = 1 == p ? 0 : Math.atan2(r, a);
      if (this.opts.use3d && Modernizr.csstransforms3d) {
        var t = g
          ? -this._calculateAngleFromX(-a, k)
          : this._calculateAngleFromX(a, k);
        if (this.animating) {
          var u = this._animationData;
          if (this.curledPage || u.curled)
            (u.curled = !0),
              u.angle ||
                ((r = { from: t, to: 0 }),
                (u.angle = r),
                (t = a + u.dx),
                (r.to = g
                  ? -this._calculateAngleFromX(-t, k)
                  : this._calculateAngleFromX(t, k)),
                Math.abs(a) == k && (r.from = 0),
                Math.abs(t) == k && (r.to = 0),
                (r.delta = r.to - r.from)),
              (t = u.angle.from - (u.angle.delta * (u.from.x - d)) / u.dx);
        }
        e.append(this.border3D);
        this.hardPageShadow &&
          (e.append(this.hardPageShadow),
          this.hardPageShadow.css("opacity", 1 - p));
        e.css({
          transform:
            "perspective(" +
            this.opts.perspective +
            this.perspectiveUnit +
            ") rotate3d(0, 1, 0, " +
            t +
            "deg)",
          display: "block",
        });
      } else
        e.css({
          transform: "skewY(" + r + "rad) scaleX(" + p + ")",
          display: "block",
        });
      !f.wowBook.support.transform &&
        f.wowBook.support.filters &&
        (e.css(
          "filter",
          "progid:DXImageTransform.Microsoft.Matrix(M11=" +
            (p +
              ", M12=0, M21=" +
              Math.tan(r) * p +
              ", M22=1, sizingMethod='auto expand')")
        ),
        e.css({
          marginTop: n - e.height(),
          marginLeft: g ? k - e.width() : 0,
        }));
      this.shadows &&
        this.hardPageDropShadow.css({
          left: g ? (b.onLeft ? b.left : c.left) : k,
          opacity: Math.abs(a) < k / 2 ? 0 : ((Math.abs(a) - k / 2) / k) * 0.8,
        });
    },
    _calculateAngleFromX: function (a, b, c) {
      var d = (2 * b) / 3;
      if (a > d) {
        var e = this._calculateAngleFromX(d, b, c);
        return e + ((a - d) / (b - d)) * (0 - e);
      }
      c = c || this.opts.perspective;
      d = 180 / Math.PI;
      e = b * b;
      c *= c;
      var g = a * a;
      a = Math.acos(
        (b * c * a - Math.sqrt(e * e * c * g + e * e * g * g - e * c * g * g)) /
          (e * c + e * g)
      );
      return -a * d;
    },
    foldPageBasic: function (a, b, c, d, e) {
      this._currentFlip ||
        (this._currentFlip = this.foldPageBasicStart(a, b, c, d, e));
      this._currentFlip &&
        this._currentFlip.page == a &&
        ((this._currentFlip.x = b),
        (this._currentFlip.y = c),
        this._currentFlip.page.data("holdedAt", { x: b, y: c }),
        (this._currentFlip.corner = d),
        this.foldPageBasicStyles(this._currentFlip));
    },
    foldPageBasicStart: function (a, b, c, d, e) {
      var g = {};
      "number" === typeof a && (a = this.pages[a]);
      g.book = this;
      g.page = a;
      g.pageIndex = a.data("pageIndex");
      void 0 === e && (e = this.backPage(g.pageIndex));
      if (e && e.length) {
        g.back = e;
        var k = a.pageHeight;
        d || (d = "tl");
        a.data("holdedAt", { x: b, y: c });
        a.data("holdedCorner", d);
        e.css("zIndex", 1e5);
        a.data("foldPageBasic", !0);
        g.foldGradientWidth = this.foldGradientElem.width();
        g.foldShadowWidth = this.foldShadow.width();
        this.internalShadow.css("display", "none");
        this.foldShadow
          .css({ display: "none", height: k, transform: "", top: a.top })
          .toggleClass("wowbook-shadow-fold-flipped", a.onRight);
        this.shadowContainer.css("display", "block");
        b = e.children().first();
        this.foldGradientContainer.appendTo(b).css({
          width: g.foldGradientWidth,
          height: k,
          top: 0,
          transform: "",
          zIndex: 1e9,
        });
        this.foldGradientElem
          .css({ left: 0, height: k })
          .toggleClass("wowbook-fold-gradient-flipped", a.onRight);
        return g;
      }
    },
    foldPageBasicStyles: function (a) {
      var b = a.page,
        c = a.back;
      x = a.x;
      y = a.y;
      var d = b.pageWidth,
        e = b.pageHeight,
        g = a.corner;
      g || (g = "tl");
      b.data("holdedAt", { x: x, y: y });
      b.data("holdedCorner", g);
      var k = (g = this.pageIsOnTheLeft(a.pageIndex)) ? x : d - x;
      0 > k && (k = 0);
      k > 2 * d && (k = 2 * d);
      var n = k / 2;
      if (g) {
        var p = "rect(-1000px " + d + "px " + e + "px " + n + "px)";
        e = "rect(-1000px " + d + "px " + e + "px " + (d - n) + "px)";
        k = b.left + (k - d);
      } else
        (p = "rect(-1000px " + (d - n) + "px " + e + "px -1000px)"),
          (e = "rect(-1000px " + n + "px " + e + "px -1000px)"),
          (k = c.left + (d - k + d));
      b.css("clip", p);
      c.css({ clip: e, left: k, display: "block" });
      p = this.calculateOpacity(2 * n, 2 * d, this.shadowThreshold, 50);
      this.shadows && 0 < p
        ? ((b = g ? b.left + n - a.foldShadowWidth : c.left + d - n + d),
          this.shadowContainer.css("opacity", p),
          this.foldShadow.css({ left: b, display: "block" }))
        : this.foldShadow.css("display", "none");
      p = this.calculateOpacity(2 * n, 2 * d, this.foldGradientThreshold, 50);
      this.foldGradient && 0 < p
        ? ((b = g ? d - n : n - a.foldGradientWidth),
          this.foldGradientContainer.css({
            opacity: p,
            left: b,
            display: "block",
          }))
        : this.foldGradientContainer.css("display", "none");
    },
    stopAnimation: function (a) {
      arguments.length || (a = !0);
      f(this).stop(!0, a);
      this.animating = !1;
      this.currentFlip && (this.currentFlip.finished = !0);
    },
    flip: function (a, b, c, d) {
      d || (d = f.isPlainObject(a) ? a : {});
      d.from || (d.from = []);
      d.to || (d.to = []);
      var e = this;
      if (!e.animating) {
        e.animating = !0;
        c || (c = d.page || e.holdedPage);
        var g = c.data("holded_info");
        c.data("holdedAt");
        var k = d.corner || c.data("holdedCorner"),
          n =
            f.easing[d.easing] ||
            d.easing ||
            function (p) {
              return 1 == p ? 1 : -Math.pow(2, -10 * p) + 1;
            };
        a = {
          page: c,
          back: d.back || e.holdedPageBack || e.backPage(c.pageIndex),
          initialX: void 0 != d.from[0] ? d.from[0] : g[0],
          initialY: void 0 != d.from[1] ? d.from[1] : g[1],
          finalX: void 0 != d.to[0] ? d.to[0] : a,
          finalY: void 0 != d.to[1] ? d.to[1] : b,
          corner: k || g[2],
          duration: d.duration,
          complete: function () {
            e.animating = !1;
            f.isFunction(d.complete) && d.complete();
          },
          easing: n,
          arc: d.arc,
          dragging: d.dragging,
          start: f.now(),
          finished: !1,
        };
        a.deltaX = a.finalX - a.initialX;
        a.deltaY = a.finalY - a.initialY;
        this._animationData = {
          from: { x: a.initialX, y: a.initialY },
          to: { x: a.finalX, y: a.finalY },
          dx: a.deltaX,
        };
        void 0 == a.duration &&
          (a.duration =
            (this.turnPageDuration * Math.abs(a.deltaX)) /
            (2 * this.pageWidth));
        a.duration < this.opts.turnPageDurationMin &&
          (a.duration = this.opts.turnPageDurationMin);
        !c.isHardPage &&
          0.4 < a.duration / this.turnPageDuration &&
          this.playFlipSound();
        this.currentFlip = a;
      }
    },
    rafCallback: function () {
      window.raf(this.callRAFCallback);
      this._zoomUpdateOnRAF();
      if (this.currentFlip && !this.currentFlip.finished) {
        var a = this.currentFlip,
          b = (f.now() - a.start) / a.duration;
        1 <= b && (b = 1);
        a.x =
          a.initialX + a.deltaX * a.easing(b, a.duration * b, 0, 1, a.duration);
        a.y =
          a.initialY + a.deltaY * a.easing(b, a.duration * b, 0, 1, a.duration);
        a.arc &&
          (a.y -=
            ((0.5 - Math.abs(0.5 - a.easing(b, a.duration * b, 0, 1))) *
              this.pageHeight) /
            10);
        a.dragging &&
          ((a.x = a.initialX + 0.2 * a.deltaX),
          (a.y = a.initialY + 0.2 * a.deltaY),
          (a.initialX = a.x),
          (a.initialY = a.y),
          (a.deltaX = a.finalX - a.initialX),
          (a.deltaY = a.finalY - a.initialY),
          1 > a.deltaX && 1 > a.deltaY && 1 == b);
        this.holdPage(a.page, a.x, a.y, a.corner, a.back);
        1 == b && ((a.finished = !0), a.complete && a.complete());
      }
    },
    releasePages: function () {
      for (var a = 0, b = this.pages.length; a < b; a++)
        this.pages[a].data("holded") && this.releasePage(a);
    },
    releasePage: function (a, b, c, d) {
      "number" === typeof a && (a = this.pages[a]);
      var e = this,
        g = a.data("holdedAt"),
        k = a.data("holdedCorner");
      if (b && g)
        this.flip({
          from: [g.x, g.y],
          to: a.corners[k],
          page: a,
          easing: "linear",
          duration: d,
          complete: function () {
            e.releasePage(a);
          },
        });
      else if (
        ((b = a.data("pageIndex")),
        void 0 === c && (c = this.holdedPageBack || this.backPage(b)),
        (this.holdedPageBack = this.holdedPage = null),
        a.data({
          holded_info: null,
          holdedAt: null,
          holdedCorner: null,
          grabPoint: !1,
          foldPageBasic: null,
          holded: !1,
        }),
        this.clipBoundaries &&
          !this.zoomed &&
          (this.clipper.css("overflow", "hidden"),
          this.clipper
            .children(".wowbook-inner-clipper")
            .css("overflow", "hidden")),
        this.shadowClipper.css("display", "none"),
        this.internalShadow.parent().hide(),
        this.foldGradientContainer.hide(),
        this.hardPageDropShadow.hide(),
        this.resetPage(a),
        c && c.length && (this.resetPage(c), c.hide()),
        this.foldShadow
          .removeClass("wowbook-shadow-fold-flipped")
          .css({ transform: "", left: "" }),
        this.foldGradientElem
          .removeClass("wowbook-fold-gradient-flipped")
          .css("transform", ""),
        this.foldGradientContainer
          .css("transform", "")
          .appendTo(this.pagesContainer),
        this.positionBookShadow(),
        this.opts.onReleasePage)
      )
        this.opts.onReleasePage(this, b, a, c);
    },
    resetPage: function (a) {
      this._currentFlip = void 0;
      a.removeClass("wowbook-page-holded");
      this.resetCSS ||
        (this.resetCSS = {
          transform: "",
          transformOrigin: "",
          clip: "auto",
          marginLeft: 0,
          marginTop: 0,
          filter: "",
        });
      var b = a.pageWidth,
        c = a.pageHeight;
      a.css(this.resetCSS).css({
        zIndex: a.data("zIndex"),
        width: b,
        height: c,
        left: a.onLeft ? 0 : this.pageWidth,
      });
      this.setPagePosition(a);
      f.browser.msie &&
        9 > f.browser.version &&
        a.attr("style", a.attr("style").replace(/clip: [^;]+;/i, ""));
      a = f(".wowbook-page-content", a);
      a.css(this.resetCSS);
      B(a, b, c);
      this.hardPageShadow && this.hardPageShadow.hide();
    },
    gotoPage: function (a, b) {
      var c;
      if (!this.animating) {
        "string" === typeof a &&
          "#" == a.charAt(0) &&
          (a = this.selectorToPage(a));
        0 > a && (a = 0);
        a > this.pages.length - 1 && (a = this.pages.length - 1);
        if (this._singlePage) {
          if (a == this.currentPage) return;
        } else if (this.isOnPage(a)) return;
        if (!this.elem.is(":visible")) return this.showPage(a, b), a;
        this._cantStopAnimation = !0;
        var d = a < this.currentPage;
        var e = this.rtl ? a > this.currentPage : d;
        var g = this,
          k = e ? g.leftPage() : g.rightPage();
        if (k) {
          this.uncurl(!0);
          if (e) {
            var n = this.leftPage(a);
            var p = this.rightPage(a);
          } else (n = this.rightPage(a)), (p = this.leftPage(a));
          if (
            this.closable &&
            this.differentPageSizes &&
            k.isCover != p.isCover &&
            k.pageIndex !== a
          ) {
            if (0 == k.pageIndex || 0 == p.pageIndex) this.showPage(1, !1);
            else {
              var r = this.pages.length - 1;
              this.otherPage(r) ||
                (k.pageIndex != r && p.pageIndex != r) ||
                this.showPage(this.backPage(r).pageIndex, !1);
            }
            this.gotoPage(p.pageIndex);
          } else {
            var t = p && p.is(":visible");
            if (d)
              for (d = k.pageIndex - 1; 0 <= d; d--)
                this.pages[d].css("display", "none");
            else
              for (d = k.pageIndex + 1, c = this.pages.length; d < c; d++)
                this.pages[d].css("display", "none");
            n &&
              (n.css("display", "block"),
              n.onLeft
                ? this.insideCoverLeft.css("display", "block")
                : this.insideCoverRight.css("display", "block"));
            t && p.css("display", "block");
            var u = a;
            n = k.data("holdedAt");
            t = k.data("holdedAt");
            d = k.data("holdedCorner") || (e ? "tl" : "tr");
            e
              ? ((t = t || { x: 0, y: 0 }),
                (e = 2 * g.pageWidth),
                (c = "bl" != d ? 0 : k.pageHeight))
              : ((t = t || { x: k.pageWidth, y: 0 }),
                (e = -k.pageWidth),
                (c = "br" != d ? 0 : k.pageHeight));
            var A = "linear";
            if (
              this.centeredWhenClosed &&
              !this._singlePage &&
              (k.isHardPage || p.isHardPage)
            ) {
              r = this.pages.length - 1;
              var D = !this.rtl;
              A = "easeOutCubic";
              this.pageIsOnTheRight(this.currentPage) &&
                !this.otherPage(this.currentPage) &&
                ((e += this.pageWidth / 2),
                a != (D ? r : 0) ||
                  this.otherPage(a) ||
                  (e += this.pageWidth / 2));
              this.pageIsOnTheLeft(this.currentPage) &&
                !this.otherPage(this.currentPage) &&
                ((e -= this.pageWidth / 2),
                a != (D ? 0 : r) ||
                  this.otherPage(a) ||
                  (e -= this.pageWidth / 2));
            }
            if (this._singlePage) {
              if (this.isOnPage(a))
                return (
                  (this.animating = !0),
                  this.slideX(
                    this.pageIsOnTheLeft(a) ? 0 : -this.pageWidth,
                    function () {
                      g._cantStopAnimation = !1;
                      g.animating = !1;
                      g.showPage(u, b);
                    }
                  ),
                  a
                );
              this.slideX(
                this.pageIsOnTheLeft(a) ? 0 : -this.pageWidth,
                function () {
                  g.showPage(u, b);
                }
              );
            }
            g.flip({
              from: [t.x, t.y],
              to: [e, c],
              easing: A,
              arc: !n,
              page: k,
              back: p,
              corner: d,
              complete: function () {
                g._cantStopAnimation = !1;
                g.releasePage(k, !1);
                g.showPage(u, b);
              },
            });
            return a;
          }
        }
      }
    },
    gotoDirection: function (a, b) {
      void 0 == b && (b = this.currentPage);
      "left" == a && (a = -1);
      "right" == a && (a = 1);
      var c = a * (this._singlePage ? 1 : 2);
      this.rtl && (c = -c);
      return this.gotoPage(b + c);
    },
    gotoLeft: function (a) {
      return this.gotoDirection("left", a);
    },
    gotoRight: function (a) {
      return this.gotoDirection("right", a);
    },
    gotoLastLeft: function (a) {
      return this.gotoPage(this.rtl ? this.pages.length : 0);
    },
    gotoLastRight: function (a) {
      return this.gotoPage(this.rtl ? 0 : this.pages.length);
    },
    back: function () {
      return this.gotoPage(this.currentPage - (this._singlePage ? 1 : 2));
    },
    advance: function () {
      return this.gotoPage(this.currentPage + (this._singlePage ? 1 : 2));
    },
    leftPage: function (a) {
      void 0 === a && (a = this.currentPage);
      return this.pages[this.leftPageIndex(a)] || null;
    },
    leftPageIndex: function (a) {
      if (null != a) {
        this.pageIsOnTheRight(a) && (a += this.rtl ? 1 : -1);
        if (0 > a || a > this.pages.length - 1) a = null;
        return a;
      }
    },
    rightPage: function (a) {
      void 0 === a && (a = this.currentPage);
      return this.pages[this.rightPageIndex(a)] || null;
    },
    rightPageIndex: function (a) {
      if (null != a) {
        this.pageIsOnTheLeft(a) && (a += this.rtl ? -1 : 1);
        if (0 > a || a > this.pages.length - 1) a = null;
        return a;
      }
    },
    pageIsOnTheRight: function (a) {
      return !this.pageIsOnTheLeft(a);
    },
    pageIsOnTheLeft: function (a) {
      a = !(a % 2);
      this.closable && (a = !a);
      this.rtl && (a = !a);
      return a;
    },
    otherPage: function (a) {
      var b = this.pageIsOnTheLeft(a) ? 1 : -1;
      this.rtl && (b = -b);
      a += b;
      if (0 > a || a > this.pages.length - 1) a = null;
      return a;
    },
    isOnPage: function (a) {
      return (
        "number" === typeof a &&
        (a === this.currentPage || a === this.otherPage(this.currentPage))
      );
    },
    backPage: function (a) {
      if (!this.pages[a]) return null;
      var b = a % 2 ? 1 : -1;
      a += this.closable ? -b : b;
      return this.pages[a];
    },
    pageBelow: function (a) {
      a = parseInt(a, 10);
      if (a != a) return null;
      a += this.pageIsOnTheLeft(a) != this.rtl ? -2 : 2;
      if (0 > a || a > this.pages.length - 1) a = null;
      return a;
    },
    pageType: function (a) {
      a = "number" === typeof a ? this.pages[a] : a;
      return a.isHardPage
        ? "hard"
        : a.find(".wowbook-page-content.wowbook-basic-page").length
        ? "basic"
        : "soft";
    },
    calculateOpacity: function (a, b, c, d) {
      if (a <= c || a >= b - c) return 0;
      if (a >= d && a <= b - d) return 1;
      a > d && (a = b - a);
      return (a - c) / (d - c);
    },
    startSlideShow: function () {
      this.slideShowRunning = !0;
      this.advanceAfterTimeout(this.slideShowDelay);
      this.toggleControl("slideshow", !0);
    },
    advanceAfterTimeout: function (a) {
      var b = this;
      this.slideShowTimer = setTimeout(function () {
        if (b.animating || b.holdedPage) b.advanceAfterTimeout(100);
        else {
          var c = b.isOnPage(b.pages.length - 1);
          b.opts.slideShowLoop && c ? b.gotoPage(0) : b.advance();
          b.opts.slideShowLoop || !c
            ? b.advanceAfterTimeout(b.slideShowDelay + b.turnPageDuration)
            : b.stopSlideShow();
        }
      }, a);
    },
    stopSlideShow: function (a) {
      clearTimeout(this.slideShowTimer);
      this.slideShowTimer = void 0;
      this.slideShowRunning = !1;
      a || this.toggleControl("slideshow", !1);
    },
    toggleSlideShow: function () {
      this.slideShowRunning ? this.stopSlideShow() : this.startSlideShow();
    },
    findSections: function (a) {
      a && (this.sectionDefinition = a);
      var b = this.sectionDefinition;
      a = [];
      if ("string" === typeof b) {
        var c = b;
        b = [];
        f(c, this.elem).each(function (g, k) {
          b.push(["#" + k.id, f(k).html()]);
        });
      }
      if (f.isArray(b)) {
        for (var d = 0, e = b.length; d < e; d++) {
          c = b[d];
          if ("string" === typeof c)
            try {
              c = [c, f(c, this.elem).html()];
            } catch (g) {
              continue;
            }
          try {
            c[2] = this.selectorToPage(c[0]);
          } catch (g) {
            continue;
          }
          void 0 !== c[2] && a.push({ id: c[0], title: c[1], page: c[2] });
        }
        a = a.sort(function (g, k) {
          return g.page - k.page;
        });
      }
      return (this.sections = a);
    },
    pageToSection: function (a) {
      for (
        var b = this.sections, c, d = 0, e = b.length;
        d < e && !(b[d].page > a);
        d++
      )
        c = b[d];
      return c;
    },
    currentSection: function () {
      return this.pageToSection(this.currentPage);
    },
    fillToc: function (a, b) {
      var c = f(a || this.opts.toc),
        d = "";
      if (0 !== c.length) {
        var e = this.sections;
        "undefined" === typeof b && (b = this.opts.tocTemplate);
        b ||
          ((d = c.is("UL, OL") ? "<li>" : "<div>"),
          (b = '<a href="${link}">${section}</a>'));
        for (var g = 0, k = e.length; g < k; g++) {
          var n = e[g];
          n = b
            .replace(/\$\{link\}/g, "#" + this.id + "/" + n.id.substr(1))
            .replace(/\$\{section\}/g, n.title)
            .replace(/\$\{page\}/g, n.page);
          f(n).appendTo(c).wrap(d);
        }
      }
    },
    createToc: function (a) {
      a = this.opts.toc || a || [];
      var b = (this.tocContainer = f(
        "<div class='wowbook-toc' style='display:none'>"
      ).prependTo(f(this.opts.tocParent || "body")));
      b.append(
        "<h1><span class='wowbook-toc-header-text'>" +
          this.opts.tocHeader +
          "</span><button class='wowbook-close'>&#10005;</button></h1>"
      );
      this.controllify({ toc: b.find(".wowbook-close") });
      b = f("<ul class='wowbook-toc-items'>").appendTo(b);
      this.createTocItemList(a, b);
      b.on("click", ".wowbook-toc-item-toggle", function () {
        f(this).parent().toggleClass("wowbook-collapsed");
      });
      this.setStyle(this.opts.styles || this.opts.style);
    },
    createTocItemList: function (a, b) {
      for (var c = this, d, e, g = 0, k = a.length; g < k; g++) {
        d = a[g];
        e = this.createTocItem(d[0], d[1]).appendTo(b);
        if (d[3])
          e.find("a").on("click", { dest: d[3] }, function (n) {
            n.preventDefault();
            c.pdfNavigateTo(n.data.dest);
          });
        if (d[2] && d[2].length) {
          if (null === d[1] && null === d[3])
            e.find("a").on("click", function (n) {
              f(this)
                .parent()
                .find(".wowbook-toc-item-toggle")
                .trigger("click");
              n.preventDefault();
            });
          e.addClass("wowbook-collapsed");
          f("<span class='wowbook-toc-item-toggle'></span>").prependTo(e);
          e = f("<ul class='wowbook-toc-items'>").appendTo(e);
          this.createTocItemList(d[2], e);
        }
      }
    },
    createTocItem: function (a, b) {
      var c =
          this.opts.tocItemTemplate ||
          '<li class="wowbook-toc-item"><a href="${link}">${title}<span class="page">${page}</span></a></li>',
        d = "";
      f.isNumeric(b) && ((d = b), (b = this.pageToLocationHash(b)));
      if (null === b || void 0 === b) b = "";
      c = c
        .replace(/\$\{link\}/g, b)
        .replace(/\$\{title\}/g, a)
        .replace(/\$\{page\}/g, d);
      return f(c);
    },
    destroyToc: function () {
      this.tocContainer && this.tocContainer.remove();
      this.tocContainer = null;
    },
    showToc: function (a) {
      (this.tocContainer && this.tocContainer.length) || this.createToc();
      this.tocContainer.fadeIn(a);
    },
    hideToc: function (a) {
      this.tocContainer.fadeOut(a);
    },
    toggleToc: function (a) {
      f(this.tocContainer).is(":visible") ? this.hideToc(a) : this.showToc(a);
    },
    locationHashToPage: function (a, b) {
      void 0 === a && (a = window.location.hash);
      if (a == "#" + this.id + "/") return 0;
      a = a.slice(1).split("/");
      if (a[0] === this.id) {
        if (1 === a.length) return 0;
        var c = parseInt(a[1]);
        if (!isNaN(c)) return Math.max(c - 1, 0);
        c = this.selectorToPage("#" + a[1]);
        if (void 0 === c) return 0;
        isNaN(a[2]) || (c += Math.max(parseInt(a[2]) - 1, 0));
        return +c;
      }
    },
    pageToLocationHash: function (a) {
      a = parseInt(a, 10);
      var b = "",
        c = a + 1;
      if ((a = this.pageToSection(a)))
        (b += "/" + a.id.replace("#", "")), (c -= a.page);
      1 < c && (b += "/" + c);
      return "#" + this.id + (b || "/");
    },
    clearLocationHash: function () {
      new RegExp("^#" + this.id + "/?").exec(window.location.hash) &&
        (window.location.hash = "");
    },
    selectorToPage: function (a) {
      a = f(a, this.elem).closest(".wowbook-page");
      if (a.length) return +a.data("pageIndex");
    },
    getLocationHash: function () {
      return window.location.hash.slice(1);
    },
    locationEndsInHash: function (a) {
      void 0 === a && (a = window.location.href);
      return a.lastIndexOf("#") == a.length - 1;
    },
    zoomSetup: function () {
      this._zoomOffset = { dx: 0, dy: 0 };
      this._cssZoom = this._cssZoom || 1;
      this.zoomLevel = 1;
      this.detectBestZoomMethod();
      this.zoomTouchSupport();
      this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
      this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
      this.toggleControl("zoomReset", 1 == this.zoomLevel);
      if (this.opts.doubleClickToZoom) {
        var a = this;
        this.elem.on("dblclick", function (b) {
          var c = a.elem.offset(),
            d = b.pageX - c.left;
          b = b.pageY - c.top;
          a.zoomed ? a.zoomReset() : a.zoomIn(1, { x: d, y: b });
        });
      }
    },
    _zoomUpdateOnRAF: function () {
      if (this._zoomDataRAF) {
        var a = f.extend({}, this._zoomDataRAF.options),
          b = this._zoomDataRAF.options.offset;
        if (b) {
          var c = this._zoomOffset,
            d = b.dx - c.dx,
            e = b.dy - c.dy;
          a.offset = { dx: c.dx + 0.2 * d, dy: c.dy + 0.2 * e };
        }
        c = this._zoomDataRAF.level || this.zoomLevel;
        c != this.zoomLevel &&
          (c = this.zoomLevel + 0.2 * (c - this.zoomLevel));
        a.transform = !0;
        this._zoom(c, a);
        b &&
          1 > Math.abs(d) &&
          1 > Math.abs(e) &&
          1 > Math.abs(this.zoomLevel - c) &&
          (this._zoomDataRAF.callback && this._zoomDataRAF.callback.call(this),
          (this._zoomDataRAF = null));
      }
    },
    _zoom: function (a, b) {
      b || (b = {});
      var c = void 0 != b.x ? b.x : this.pageWidth * this.currentScale,
        d = b.y || 0;
      this._zoomOffset = b.offset || this.zoomFocusOffset(a, c, d);
      this.zoomLevel = a;
      c = b.transform || this.opts.zoomUsingTransform;
      var e = a * this.currentScale;
      d = f.browser.ie7 ? 1 : c ? this._cssZoom : e;
      var g = this.zoomWindow,
        k = this.zoomContent,
        n = f(this.zoomBoundingBox),
        p = n.outerWidth(),
        r = n.outerHeight(),
        t = g.offset();
      g.position();
      n =
        n[0] !== window
          ? n.offset()
          : { left: n.scrollLeft(), top: n.scrollTop() };
      g.css({ width: p, height: r });
      p = n.left - t.left;
      t = n.top - t.top;
      p &&
        ((p += parseFloat(g.css("marginLeft"))),
        g.css("marginLeft", p),
        (k.marginLeft = p));
      t &&
        ((t += parseFloat(g.css("marginTop"))),
        g.css("marginTop", t),
        (k.marginTop = t));
      g = "";
      t = this._zoomOffset.dx / d;
      p = this._zoomOffset.dy / d;
      f.wowBook.support.transform && (t || p)
        ? (g = f.wowBook.utils.translate(t, p))
        : k.css({ left: t, top: p });
      c
        ? ((e /= d),
          (g += this.opts.useScale3d
            ? "scale3d(" + e + "," + e + ",1)"
            : "scale(" + e + ")"))
        : ((this._cssZoom = e),
          k.css("zoom", e),
          k.css("marginLeft", -k.marginLeft / d),
          k.css("marginTop", -k.marginTop / d));
      f.wowBook.support.transform && k.css("transform", g);
      1 !== this.zoomLevel
        ? this.zoomed ||
          (k.css("marginLeft", -k.marginLeft / d),
          k.css("marginTop", -k.marginTop / d),
          c && k.css("transformOrigin", "0 0"),
          this.elem.find("img").each(function () {
            var u = f(this);
            u.data("wowbook-draggable-before-zoom", u.attr("draggable"));
            u.attr("draggable", !1);
          }))
        : this.zoomFinished();
      this.zoomed = 1 !== a;
      k.toggleClass("wowbook-draggable", this.zoomed);
      this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
      this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
      this.toggleControl("zoomReset", 1 == this.zoomLevel);
    },
    zoom: function (a, b, c) {
      this.uncurl(!0);
      for (var d = 0, e = this.pages.length; d < e; d++)
        if (this.pages[d].data("holdedAt")) return;
      f.isPlainObject(b) && ((c = b), (b = c.duration));
      c || (c = {});
      if (a <= this.zoomMin && !c.resetting) return this.zoomReset(b, c);
      a > this.zoomMax && (a = this.zoomMax);
      if (a !== this.zoomLevel || c.force)
        if ((void 0 == b && (b = this.opts.zoomDuration), 0 == b)) {
          if (
            (this._zoom(a, c),
            c.callback && c.callback.apply(this),
            this.pdf && this.pdfUpdateRender(),
            this.onZoom)
          )
            this.onZoom(this);
        } else {
          d = !this.opts.zoomUsingTransform && f.wowBook.support.transform;
          this._zoomAnimating &&
            (f(this).stop(), d && this.zoomContent.css("transform", ""));
          this._zoomAnimating = this.zoomLevel;
          var g = this;
          e = c.x;
          var k = c.y;
          void 0 == e &&
            (e =
              this.pageWidth *
              (this._singlePage ? 1 : 2) *
              this.currentScale *
              this.opts.zoomFocusX);
          void 0 == k &&
            (k = this.pageHeight * this.currentScale * this.opts.zoomFocusY);
          var n = { x: e, y: k, offset: { dx: 0, dy: 0 } },
            p = f.extend({ dx: 0, dy: 0 }, this._zoomOffset);
          e = c.offset || this.zoomFocusOffset(a, e, k);
          var r = e.dx - p.dx,
            t = e.dy - p.dy;
          d &&
            ((n.transform = !0),
            this._isMobile &&
              (this.leftPage() &&
                this.leftPage().css("-webkit-transform", "translateZ(0)"),
              this.rightPage() &&
                this.rightPage().css("-webkit-transform", "translateZ(0)")));
          f(this).animate(
            { _zoomAnimating: a },
            {
              duration: b,
              easing: c.easing || this.opts.zoomEasing,
              complete: function () {
                g._zoomAnimating = !1;
                g._zoom(a);
                c.callback && c.callback.apply(this);
                this.pdf && this.pdfUpdateRender();
                if (g.onZoom) g.onZoom(g);
              },
              step: function (u, A) {
                n.offset.dx = p.dx + r * A.pos;
                n.offset.dy = p.dy + t * A.pos;
                g._zoom(u, n);
              },
            }
          );
        }
    },
    zoomFinished: function () {
      this.zoomWindow.css({
        overflow: "visible",
        width: this.zoomContent.width() * this.currentScale,
        height: this.zoomContent.height() * this.currentScale,
        marginLeft: 0,
        marginTop: 0,
      });
      this.zoomContent.css({ left: 0, top: 0, marginLeft: 0, marginTop: 0 });
      this._zoomOffset = { dx: 0, dy: 0 };
      this.elem.find("img").each(function () {
        var a = f(this);
        void 0 == a.data("wowbook-draggable-before-zoom")
          ? a.removeAttr("draggable")
          : a.attr("draggable", a.data("wowbook-draggable-before-zoom"));
      });
    },
    zoomReset: function (a, b) {
      f.isPlainObject(a) && ((b = a), (a = b.duration));
      b || (b = {});
      this._zoomDataRAF = null;
      b.offset = { dx: 0, dy: 0 };
      b.resetting = !0;
      b.force = !0;
      b.callback = function () {
        this.zoomContent.css({ left: 0, top: 0 });
        this.zoomed = !1;
      };
      this.zoom(1, a, b);
    },
    zoomIn: function (a, b) {
      f.isPlainObject(a) && ((b = a), (a = void 0));
      this.zoom(this.zoomLevel + (a || this.zoomStep), b);
    },
    zoomOut: function (a, b) {
      f.isPlainObject(a) && ((b = a), (a = void 0));
      this.zoom(this.zoomLevel - (a || this.zoomStep), b);
    },
    zoomFocusOffset: function (a, b, c, d, e) {
      d || (d = this._zoomOffset || { dx: 0, dy: 0 });
      d = f.extend({ dx: 0, dy: 0 }, d);
      var g = d.dx || 0,
        k = d.dy || 0;
      e = a / (e || this.zoomLevel);
      b -= g;
      c -= k;
      a = b * e;
      e *= c;
      d.dx = g - (a - b);
      d.dy = k - (e - c);
      return { dx: g - (a - b), dy: k - (e - c) };
    },
    zoomTouchSupport: function () {
      if (this.opts.touchEnabled) {
        if (f.browser.ie8mode || f.browser.ie7)
          return this.zoomDragSupportForIE();
        var a = this,
          b,
          c,
          d;
        a._hammer = new Hammer(a.zoomContent[0], a.opts.touch);
        var e = a._hammer;
        e.on("panstart pinchstart", function (g) {
          a.zoomContent.addClass("wowbook-dragging");
        });
        e.on("hammer.input", function (g) {
          if (
            a.zoomContent.hasClass("wowbook-draggable") &&
            (f(g.target).is("img") &&
              "mousedown" == g.srcEvent.type &&
              g.preventDefault(),
            g.isFinal && a.zoomContent.hasClass("wowbook-dragging"))
          ) {
            c = d = null;
            a.zoomContent.removeClass("wowbook-dragging");
            g = a.zoomLevel;
            var k = a._zoomDataRAF,
              n = k ? k.level : g;
            n < a.zoomMin ||
            (n == a.zoomMin && (a._zoomOffset.dx || a._zoomOffset.dy))
              ? k
                ? (k.callback = function () {
                    a.zoomReset();
                  })
                : a.zoomReset()
              : (a._zoom(g, { force: !0, offset: a._zoomOffset }),
                a.pdf && a.pdfUpdateRender());
          }
        });
        e.on("panstart panmove", function (g) {
          a.zoomed &&
            (g.preventDefault(),
            (d = null),
            c ||
              (c = {
                offset: f.extend({}, a._zoomOffset),
                pageX: g.center.x,
                pageY: g.center.y,
              }),
            (a._zoomDataRAF = {
              level: a.zoomLevel,
              options: {
                force: !0,
                offset: {
                  dx: c.offset.dx + (g.center.x - c.pageX),
                  dy: c.offset.dy + (g.center.y - c.pageY),
                },
              },
            }));
        });
        e.on("pinchmove pinchstart", function (g) {
          g.preventDefault();
          c = null;
          var k = g.center.x,
            n = g.center.y;
          if (!d) {
            if (a.currentFlip && !a.currentFlip.finished) return;
            b = a.elem.offset();
            d = {
              level: a.zoomLevel,
              pageX: k,
              pageY: n,
              x: k - (b.left - f(window).scrollLeft()),
              y: n - (b.top - f(window).scrollTop()),
              offset: f.extend({}, a._zoomOffset),
              useTransform: a.opts.zoomUsingTransform,
            };
          }
          g = d.level * g.scale;
          g > a.zoomMax && (g = a.zoomMax);
          var p = a.zoomFocusOffset(g, d.x, d.y, d.offset, d.level);
          p.dx += k - d.pageX;
          p.dy += n - d.pageY;
          a._zoomDataRAF = { level: g, options: { force: !0, offset: p } };
        });
        a.opts.pinchToZoom &&
          (e.get("pinch").set({ enable: !0 }),
          e.get("pinch").recognizeWith("pan"));
        this.opts.doubleClickToZoom &&
          (e.get("doubletap").set({ posThreshold: 50 }),
          e.on("doubletap", function (g) {
            g.preventDefault();
            var k = a.elem.offset(),
              n = g.center.x - k.left;
            g = g.center.y - k.top;
            a.zoomed ? a.zoomReset() : a.zoomIn(1, { x: n, y: g });
          }));
      }
    },
    zoomDragSupportForIE: function () {
      var a = this,
        b,
        c = function (e) {
          a._zoomDataRAF = {
            level: a.zoomLevel,
            options: {
              force: !0,
              offset: {
                dx: b.offset.dx + (e.pageX - b.pageX),
                dy: b.offset.dy + (e.pageY - b.pageY),
              },
            },
          };
          return !1;
        },
        d = function (e) {
          e = a.zoomLevel;
          (e < a.zoomMin ||
            (e == a.zoomMin && (a._zoomOffset.dx || a._zoomOffset.dy))) &&
            a.zoomReset();
          f(document).unbind("mousemove.wowbook", c);
          f(document).unbind("mouseup.wowbook", d);
        };
      a.zoomContent.bind("mousedown.wowbook", function (e) {
        if (a.zoomed)
          return (
            (b = {
              offset: f.extend({}, a._zoomOffset),
              pageX: e.pageX,
              pageY: e.pageY,
            }),
            f(document).bind("mousemove.wowbook", c).bind("mouseup.wowbook", d),
            !1
          );
      });
    },
    detectBestZoomMethod: function (a, b, c) {
      if (void 0 != this.opts.zoomUsingTransform)
        return this.opts.zoomUsingTransform ? "transform" : "zoom";
      void 0 === a && (a = f.wowBook.support.transform);
      void 0 === c && (c = f.browser.ie8mode);
      a =
        f.browser.chrome ||
        f.browser.webkit ||
        f.browser.safari ||
        f.browser.opera ||
        c ||
        !a;
      this.opts.zoomUsingTransform = !a;
      return a ? "zoom" : "transform";
    },
    setupFullscreen: function () {
      if (I) {
        var a = this,
          b =
            "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError ";
        var c =
          "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange ".replace(
            / /g,
            ".wowbook "
          );
        b = b.replace(/ /g, ".wowbook ");
        this._fullscreenChangeHandler = function () {
          var d = !!P();
          f(a.opts.fullscreenElement).toggleClass(
            "fullscreen wowbook-fullscreen-fix",
            d
          );
          a.elem.toggleClass("fullscreen", d);
          a.toggleControl("fullscreen", d);
          a.elem.trigger("resize");
        };
        f(document).on(c, this._fullscreenChangeHandler);
        this._fullscreenErrorHandler = function () {
          var d;
          a.opts.onFullscreenError &&
            (d = a.opts.onFullscreenError.apply(this, arguments));
          !1 !== d &&
            ("string" == typeof d
              ? alert(d)
              : a.opts.onFullscreenErrorMessage &&
                alert(a.opts.onFullscreenErrorMessage));
        };
        f(document).on(b, this._fullscreenErrorHandler);
      } else f("html").addClass("no-fullscreen");
    },
    enterFullscreen: function (a) {
      a = f(a || this.opts.fullscreenElement)[0];
      I.call(a || M);
    },
    exitFullscreen: function () {
      O.call(C);
    },
    toggleFullscreen: function () {
      P() ? this.exitFullscreen() : this.enterFullscreen();
    },
    positionBookShadow: function () {
      var a = this.pages.length,
        b = !(!this.opts.bookShadow || !a || (3 > a && this.holdedPage));
      this.bookShadow.toggle(b);
      if (b) {
        b = this.pageWidth;
        var c = this.holdedPageBack,
          d = !!c && c.onRight && c.pageIndex == (this.rtl ? a - 1 : 0);
        c = !!c && c.onLeft && c.pageIndex == (this.rtl ? 0 : a - 1);
        a = !this.leftPage() || d;
        c = !this.rightPage() || c;
        d = a != c;
        if (a && c) this.bookShadow.hide();
        else {
          c = this.opts.zoomUsingTransform
            ? this.currentScale * this.zoomLevel
            : 1;
          var e = this.elem.is(":visible")
            ? this.pagesContainer.position().left
            : parseFloat(this.pagesContainer.css("left")) || 0;
          this.translate(this.bookShadow, (a ? b : 0) + e / c, 0);
          this.bookShadow.css({ width: d ? b : 2 * b });
        }
      }
    },
    playFlipSound: function () {
      if (this.flipSound) {
        var a = this.opts.onPlayFlipSound;
        (f.isFunction(a) && !1 === a(this)) ||
          (this.audio || (this.audio = this.createAudioPlayer()),
          this.audio && this.audio.play && this.audio.play());
      }
    },
    toggleFlipSound: function (a) {
      arguments.length || (a = !this.flipSound);
      this.flipSound = a;
      this.toggleControl("flipSound", !a);
    },
    createAudioPlayer: function (a, b) {
      a || (a = this.opts.flipSoundPath);
      b || (b = this.opts.flipSoundFile);
      for (var c = [], d = 0, e = b.length; d < e; d++)
        c.push('<source src="' + a + b[d] + '">');
      return f("<audio preload>" + c.join("") + "</audio>")[0];
    },
    _untouch: function (a) {
      return (a.originalEvent.touches && a.originalEvent.touches[0]) || a;
    },
    touchSupport: function () {
      var a = this;
      a.elem.bind("touchstart.wowbook", function (b) {
        var c = b.originalEvent.touches;
        1 < c.length ||
          ((a._touchStarted = {
            x: c[0].pageX,
            y: c[0].pageY,
            timestamp: b.originalEvent.timeStamp,
            inHandle: f(b.target).hasClass("wowbook-handle"),
          }),
          a._touchStarted.inHandle && a.pageEdgeDragStart(a._untouch(b)));
      });
      f(document).on("touchmove.wowbook", function (b) {
        if (a._touchStarted) {
          var c = b.originalEvent.touches;
          a._touchEnded = {
            x: c[0].pageX,
            y: c[0].pageY,
            timestamp: b.originalEvent.timeStamp,
          };
          if (a._touchStarted.inHandle) return a.pageEdgeDrag(a._untouch(b));
          (a.opts.allowDragBrowserPageZoom &&
            1 != document.documentElement.clientWidth / window.innerWidth) ||
            b.preventDefault();
        }
      });
      f(document).on("touchend.wowbook touchcancel.wowbook", function (b) {
        if (a._touchStarted) {
          !a._touchEnded &&
            f(b.target).hasClass("wowbook-handle") &&
            ((b = f(b.target).data("corner")),
            "r" === b && a.gotoRight(),
            "l" === b && a.gotoLeft());
          b = a._touchStarted;
          var c = a._touchEnded || a._touchStarted;
          a._touchStarted = null;
          a._touchEnded = null;
          if (!a.zoomed) {
            if (b.inHandle) return a.pageEdgeDragStop({ pageX: c.x }), !1;
            var d = c.x - b.x,
              e = c.timestamp - b.timestamp;
            if (
              !(20 > Math.abs(d) || e > a.opts.swipeDuration) &&
              Math.abs(d) > Math.abs(c.y - b.y)
            )
              return 0 > d ? a.gotoRight() : a.gotoLeft(), !1;
          }
        }
      });
    },
    pageEdgeDragStart: function (a) {
      if (!this.zoomed) {
        if (
          (this.animating && !this.curledPage) ||
          !f(a.target).hasClass("wowbook-handle")
        )
          return !1;
        var b = this,
          c = b.origin.offset();
        this.opts.zoomUsingTransform || (c.left *= this.currentScale);
        b.elem.addClass("wowbook-unselectable");
        b.mouseDownAtLeft =
          (a.pageX - c.left) / this.currentScale < b.pageWidth;
        b.pageGrabbed = b.mouseDownAtLeft ? b.leftPage() : b.rightPage();
        if (!b.pageGrabbed) return !1;
        this.uncurl(!0);
        b.pageGrabbedOffset = b.pageGrabbed.offset();
        b._dragging = !0;
        this.opts.zoomUsingTransform &&
          ((b.pageGrabbedOffset.left /= this.currentScale),
          (b.pageGrabbedOffset.top /= this.currentScale));
        c = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
        a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
        this.stopAnimation(!1);
        var d = b.mouseDownAtLeft ? "l" : "r";
        this.holdPage(this.pageGrabbed, c, a);
        this.flip(c, a, this.pageGrabbed, { corner: d });
        f(document)
          .bind("mousemove.wowbook", function (e) {
            return b.pageEdgeDrag(e);
          })
          .bind("mouseup.wowbook", function (e) {
            return b.pageEdgeDragStop(e);
          });
        return !1;
      }
    },
    pageEdgeDrag: function (a) {
      if (!this._dragging) return !1;
      var b = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
      a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
      var c = this.mouseDownAtLeft ? "l" : "r";
      this.stopAnimation(!1);
      this.flip(b, a, this.pageGrabbed, { corner: c, dragging: !0 });
      return !1;
    },
    pageEdgeDragStop: function (a) {
      if (!this._dragging) return !1;
      var b = this.origin.offset();
      this.opts.zoomUsingTransform || (b.left *= this.currentScale);
      var c = (a.pageX - b.left) / this.currentScale;
      a = (a.pageX - b.left) / this.currentScale < this.pageWidth;
      this.elem.removeClass("wowbook-unselectable");
      this._cantStopAnimation || this.stopAnimation(!1);
      this._singlePage
        ? this.pageGrabbed.onLeft
          ? c > this.pageWidth / 2
            ? this.pageGrabbed.pageIndex == this.currentPage
              ? this.rtl
                ? this.advance()
                : this.back()
              : ((c = this.pageGrabbed.pageIndex + (this.rtl ? 1 : -1)),
                this.gotoPage(c))
            : this.releasePage(this.pageGrabbed, !0)
          : c < this.pageWidth + this.pageWidth / 2
          ? this.pageGrabbed.pageIndex == this.currentPage
            ? this.rtl
              ? this.back()
              : this.advance()
            : ((c = this.pageGrabbed.pageIndex + (this.rtl ? -1 : 1)),
              this.gotoPage(c))
          : this.releasePage(this.pageGrabbed, !0)
        : this.mouseDownAtLeft && !a
        ? this.rtl
          ? this.advance()
          : this.back()
        : !this.mouseDownAtLeft && a
        ? this.rtl
          ? this.back()
          : this.advance()
        : this.releasePage(this.pageGrabbed, !0);
      this._dragging = !1;
      f(document).unbind("mousemove.wowbook mouseup.wowbook");
    },
    curl: function (a, b) {
      if (!(this.curledPage || this.holdedPage || this.zoomed)) {
        void 0 == a && (a = this.currentPage);
        if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
        if (a && !a.isCurled) {
          a.isCurled = !0;
          this.curledPage = a;
          var c = this.pageIsOnTheLeft(a.pageIndex),
            d = c ? 0 : a.pageWidth || this.pageWidth,
            e = b ? (a.pageHeight || this.pageHeight) - 1 : 2;
          this.flip({
            from: [d, e],
            to: [
              d + this.opts.curlSize * (c ? 1 : -1),
              e + this.opts.curlSize * (b ? -1 : 1),
            ],
            corner: (b ? "b" : "t") + (c ? "l" : "r"),
            page: a,
            duration: 400,
          });
        }
      }
    },
    uncurl: function (a, b) {
      if (this.curledPage) {
        1 == a && ((b = !0), (a = void 0));
        void 0 == a && (a = this.curledPage || this.currentPage);
        if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
        a.isCurled &&
          (this.stopAnimation(!1),
          this.releasePage(a, !b, void 0, 400),
          (a.isCurled = !1),
          (this.curledPage = null));
      }
    },
    initThumbnails: function () {
      var a = this.opts;
      this.thumbnails = [];
      var b = (this.thumbnailsContainer = f("<div class='wowbook-thumbnails'>")
        .append(
          "<div class='wowbook-wrapper'><a class='wowbook-back wowbook-button wowbook-control wowbook-control-back'></a><div class='wowbook-clipper'><ul></ul></div><a class='wowbook-next wowbook-button wowbook-control wowbook-control-next'></a></div>"
        )
        .css("display", "none")
        .css("transform", "translateZ(0)")
        .appendTo(f(a.thumbnailsParent)));
      this.thumbnailsList = b.find("ul");
      this.thumbnailsClipper = b.find(".wowbook-clipper");
      a.thumbnailsContainerWidth && b.width(a.thumbnailsContainerWidth);
      a.thumbnailsContainerHeight && b.height(a.thumbnailsContainerHeight);
      var c = a.thumbnailsPosition;
      if ("left" == c || "right" == c)
        (a.thumbnailsVertical = !0),
          "right" == c &&
            b.css({ position: "absolute", left: "auto", right: "0px" });
      if ("top" == c || "bottom" == c)
        (a.thumbnailsVertical = !1),
          "bottom" == c &&
            b.css({ position: "absolute", top: "auto", bottom: "0px" });
      b.addClass(
        a.thumbnailsVertical ? "wowbook-vertical" : "wowbook-horizontal"
      );
      b.toggleClass("wowbook-closable", this.closable);
      var d = this,
        e = a.thumbnailsVertical ? "height" : "width";
      this.thumbnailsBackButton = b
        .find(".wowbook-back.wowbook-button")
        .on("click", function () {
          d._moveThumbnailsList(d.thumbnailsClipper[e]());
        });
      this.thumbnailsNextButton = b
        .find(".wowbook-next.wowbook-button")
        .on("click", function () {
          d._moveThumbnailsList(-d.thumbnailsClipper[e]());
        });
      this.thumbnailsClipper.css("transform", "translateZ(0)");
      0 == this.scrollBarWidth() &&
        this.thumbnailsClipper.css("overflow", "auto");
      this._scrollDebounceTimeout = null;
      this.thumbnailsClipper.on("scroll", function () {
        d._scrollDebounceTimeout && clearTimeout(d._scrollDebounceTimeout);
        d._scrollDebounceTimeout = setTimeout(function () {
          d.updateVisibleThumbnails();
        }, d.opts.thumbnailsScrollDebounceWait);
      });
    },
    destroyThumbnails: function () {
      this._scrollDebounceTimeout && clearTimeout(this._scrollDebounceTimeout);
      this.thumbnailsContainer && this.thumbnailsContainer.remove();
      this.thumbnails = this._thumbnailsPos = this.thumbnailsContainer = null;
    },
    scrollBarWidth: function () {
      var a = f(
          "<div style='width:50px;height:60px;overflow-y:auto;display:inline-block;position: absolute;left:-1000px;'></div>"
        ).appendTo("body"),
        b = a.width(),
        c = f(
          "<div style='width:100%;height:100px;display:inline-block;'>Hi!<br/>He<br/>llo!</div>"
        )
          .appendTo(a)
          .width();
      a.remove();
      return b - c;
    },
    createThumbnails: function () {
      this.thumbnails || this.initThumbnails();
      var a = this.thumbnailConfig();
      this.thumbnails = [];
      this._customThumbnail = !1;
      for (var b = 0, c = this.pages.length; b < c; b++) {
        var d = this.createThumbnail(b, a);
        d.src && (this._customThumbnail = !0);
        this.thumbnailsList.append(d);
        this.thumbnails.push(d);
      }
      if (this.rtl)
        for (
          d = this.thumbnailsList.children(),
            d.eq(0).addClass("wowbook-right").removeClass("wowbook-left"),
            b = 1,
            c = d.length;
          b < c;
          b += 2
        )
          d.eq(b).insertAfter(d.eq(b + 1));
      this._setThumbnailsContainerWidth();
      this.setStyle(this.opts.styles || this.opts.style);
    },
    _setThumbnailsContainerWidth: function () {
      var a = this.thumbnailsContainer;
      this.opts.thumbnailsContainerHeight &&
        a.height(this.opts.thumbnailsContainerHeight);
      if (this.opts.thumbnailsContainerWidth)
        a.width(this.opts.thumbnailsContainerWidth);
      else if (this.opts.thumbnailsVertical) {
        var b = this.thumbnailConfig();
        a.width(2 * b.width);
      }
    },
    thumbnailConfig: function () {
      var a = {},
        b = f(
          '<div class="wowbook-thumbnail" style="display:none;position:absolute;line-height:0px;font-size:0px;">'
        ).prependTo(this.thumbnailsContainer),
        c = this.opts.thumbnailHeight || (2 >= b.height() ? 0 : b.height()),
        d = this.opts.thumbnailWidth || b.width(),
        e =
          d / this.pageWidth || c / this.pageHeight || this.opts.thumbnailScale;
      b.remove();
      this.thumbnailScale = e;
      a.width = d || Math.floor(this.pageWidth * e);
      a.height = c || Math.floor(this.pageHeight * e);
      a.cloneCSS = {
        display: "block",
        left: 0,
        top: 0,
        position: "relative",
        transformOrigin: "0 0",
      };
      f.wowBook.support.transform
        ? (a.cloneCSS.transform = "scale(" + e + ")")
        : (a.cloneCSS.zoom = e);
      this.differentPageSizes &&
        ((b = this.opts.pageWidth
          ? (e * this.pageWidth) / this.opts.pageWidth
          : this.opts.pageHeight
          ? (e * this.pageHeight) / this.opts.pageHeight
          : this.opts.thumbnailScale),
        (a.scaleInternalPage = f.wowBook.support.transform
          ? { transform: "scale(" + b + ")" }
          : { zoom: b }));
      return a;
    },
    createThumbnail: function (a, b) {
      var c = this.pages[a];
      if (c) {
        b || (b = this.thumbnailConfig());
        var d = f('<li class="wowbook-thumbnail"><div class="wowbook-overlay">')
          .addClass(this.pageIsOnTheLeft(a) ? "wowbook-left" : "wowbook-right")
          .css({ width: b.width, height: b.height });
        if (this.opts.thumbnailNumber || this.opts.thumbnailsNumber) {
          var e = this.opts.onThumbnailNumberString
            ? this.opts.onThumbnailNumberString(this, c, a)
            : a + 1;
          d.find(".wowbook-overlay").append(
            '<div class="wowbook-thumbnail-number">' + e + "</div>"
          );
        }
        e = c.find(".wowbook-page-content");
        (e = e.data("thumb") || e.data("thumbnail"))
          ? (d.addClass("wowbook-thumbnail-custom"), (d.src = e))
          : this.opts.thumbnailsSprite
          ? d.css(
              "background",
              'url("' +
                this.opts.thumbnailsSprite +
                '") no-repeat 0px -' +
                a * b.height +
                "px"
            )
          : this.opts.thumbnailsImages
          ? d.addClass("wowbook-thumbnail-custom")
          : ((e = c.clone()),
            e.hasClass("wowbook-page-holded") &&
              (this.resetPage(e),
              e.find(".wowbook-fold-gradient-container").remove()),
            e.css(b.cloneCSS),
            b.scaleInternalPage && !c.isCover && e.css(b.scaleInternalPage),
            d.prepend(e));
        var g = this;
        d.on("click", function () {
          g.gotoPage(a);
          g.opts.thumbnailsHideOnClick && g.hideThumbnails();
        });
        return d;
      }
    },
    updateThumbnail: function (a, b) {
      if (this.thumbnails) {
        var c = this.thumbnails[a];
        if (c) {
          var d = this.createThumbnail(a, b);
          if (d) {
            c.width(d.width());
            c.height(d.height());
            if (!this.opts.thumbnailsSprite)
              if (this.opts.thumbnailsImages || c.src) {
                var e = c.src || this.thumbnailImageSrc(a);
                if (c.loadedImage != e) {
                  c.addClass("wowbook-loading");
                  var g = new Image();
                  g.onload = function () {
                    c.removeClass("wowbook-loading");
                    c.css("background-image", 'url("' + e + '")');
                    c.loadedImage = e;
                  };
                  g.src = e;
                }
              } else
                this.pdfDoc
                  ? this.pdfRenderThumbnail(a, c, b)
                  : c
                      .children(":not(.wowbook-overlay)")
                      .replaceWith(d.children(":not(.wowbook-overlay)"));
            c.width(d.width());
            c.height(d.height());
          }
        }
      }
    },
    updateThumbnails: function () {
      if (this.thumbnails) {
        for (
          var a = this.thumbnailConfig(), b = 0, c = this.pages.length;
          b < c;
          b++
        )
          this.updateThumbnail(b, a);
        this._setThumbnailsContainerWidth();
        this.thumbnailsContainer.toggleClass("wowbook-closable", this.closable);
      } else this.createThumbnails();
    },
    thumbnailImageSrc: function (a) {
      if (!(0 > a || a > this.pages.length - 1))
        return this.replaceNumberHolder(this.opts.thumbnailsImages, a);
    },
    _moveThumbnailsList: function (a, b) {
      var c =
        this.thumbnailsList.position()[
          this.opts.thumbnailsVertical ? "top" : "left"
        ];
      this._setThumbnailsListPosition(c + a, b);
    },
    _setThumbnailsListPosition: function (a, b) {
      var c = this.opts.thumbnailsVertical,
        d = c ? "height" : "width",
        e = this.thumbnailsClipper[d]();
      d = -this.thumbnailsList[d]() + e;
      a < d && (a = d);
      0 < a && (a = 0);
      this.thumbnailsBackButton.toggleClass(
        "wowbook-disabled",
        0 == a || 0 < d
      );
      this.thumbnailsNextButton.toggleClass(
        "wowbook-disabled",
        a == d || 0 < d
      );
      void 0 == b && (b = f.extend({}, this.opts.thumbnailsAnimOptions));
      var g = this;
      f.isNumeric(b) && (b = { duration: b });
      b.step = c
        ? function (k) {
            g.thumbnailsClipper.scrollTop(k);
          }
        : function (k) {
            g.thumbnailsClipper.scrollLeft(k);
          };
      b.complete = function () {
        (g.pdfDoc || g.opts.thumbnailsImages || g._customThumbnail) &&
          g.updateVisibleThumbnails();
      };
      this._tb = this.thumbnailsClipper[c ? "scrollTop" : "scrollLeft"]();
      f(this).stop();
      f(this).animate({ _tb: -a }, b);
    },
    updateVisibleThumbnails: function () {
      if (this.thumbnails) {
        var a = this.opts.thumbnailsVertical,
          b = a ? "top" : "left",
          c = a ? "height" : "width";
        if (!this._thumbnailsPos)
          for (this._thumbnailsPos = [], a = 0; a < this.thumbnails.length; a++)
            this._thumbnailsPos[a] = this.thumbnails[a].position()[b];
        var d = this._thumbnailsPos;
        b = -this.thumbnailsList.position()[b];
        c = b + this.thumbnailsClipper[c]();
        var e, g;
        for (a = 0; a < this.thumbnails.length; a++)
          void 0 == e && d[a] > b && (e = a),
            void 0 == g && d[a] > c && (g = a);
        e || (e = 0);
        g || (g = this.thumbnails.length - 1);
        this.pdfDoc &&
          (this.pdfCancelRenderThumbnail(0, e),
          this.pdfCancelRenderThumbnail(g, this.thumbnails.length));
        for (a = e - 2; a <= g; a++) this.updateThumbnail(a);
      }
    },
    showThumbnail: function (a, b) {
      if (this.thumbnails && this.thumbnailsContainer.is(":visible")) {
        void 0 == a && (a = this.currentPage);
        0 < a && this.pageIsOnTheRight(a) && a--;
        var c = this.opts.thumbnailsVertical,
          d = c ? "top" : "left",
          e = c ? "height" : "width",
          g = this.thumbnails[a],
          k = this.thumbnailsClipper;
        c = k[e]() / 2 - g[e]() / (c ? 2 : 1);
        d = g.offset()[d] - k.offset()[d];
        this._moveThumbnailsList(c - d, b);
      }
    },
    showThumbnails: function (a) {
      (this.thumbnails && this.thumbnails.length) || this.createThumbnails();
      this.thumbnailsContainer.fadeIn(
        void 0 != a ? a : this.opts.thumbnailsAnimOptions
      );
      this.showThumbnail(void 0, 0);
    },
    hideThumbnails: function (a) {
      this.thumbnailsContainer.fadeOut(
        void 0 != a ? a : this.opts.thumbnailsAnimOptions
      );
    },
    toggleThumbnails: function (a) {
      f(this.thumbnailsContainer).is(":visible")
        ? this.hideThumbnails(a)
        : this.showThumbnails(a);
    },
    setPDF: function (a) {
      this.pdf = a;
      this.pdfRenderQueue = [];
      this.pdfPageRendering = !1;
      this.opts.zoomUsingTransform = !0;
      this.zoomContent.css("zoom", 1);
      1 != this.currentScale && this.scale(this.currentScale);
      this.elem.addClass("wowbook-pdf");
      this.removePages();
      null == this.opts.pagesInMemory && (this.opts.pagesInMemory = 6);
      var b = this;
      this.pdfCSS_UNITS = 96 / 72;
      b.opts.pdfTextSelectable &&
        this.zoomContent.css("-webkit-user-select", "text");
      PDFJS.cMapPacked = this.opts.pdfcMapPacked;
      PDFJS.cMapUrl = this.opts.pdfcMapUrl;
      PDFJS.getDocument(a, null, null, this.opts.onPDFLoadProgress).then(
        function (c) {
          b.pdfDoc = c;
          b.currentPage = b.startPage;
          c.getPage(1).then(function (d) {
            for (var e = 0; e < c.numPages; e++) b.insertPage("<div>", !0);
            b.opts.pdfFind && b.pdfFindSetup();
            b.pdfBuildLinkService();
            b._pdfFindController && b._pdfFindController.resolveFirstPage();
            b.opts.toc || b.pdfOutline();
            b.updateBook(!0);
            d = d.getViewport(1 * b.pdfCSS_UNITS * b.opts.pdfScale);
            b.pdfHeight = d.height;
            b.pdfWidth = d.width;
            b.pdfViewport = d;
            b._originalHeight = null;
            b._originalWidth = null;
            b.setDimensions(2 * b.pdfWidth, b.pdfHeight);
            1 != b.opts.zoomLevel && b.zoom(b.opts.zoomLevel, { duration: 0 });
          });
        },
        b.opts.onPDFLoadError ||
          function (c) {
            f(b.pages[0] || b.elem).html("Error: " + c.message);
            "file:" == location.protocol &&
              (this.pdfLocalErrorMsg ||
                (this.pdfLocalErrorMsg =
                  "<p>Note: error messages about the browser not being able to fecth the PDF file usually happens when you are trying to open the html file directly from the local file system.<br/>To load the pdf file, PDFjs (the library used by Wowbook) uses ajax requests, and the browser can't do ajax requests to the local filesystem. Browsers blocks them for security reasons. You must use a local webserver or you can try to run your browser using a configuration option to allow this behaviour. (something like https://stackoverflow.com/questions/38344612/ajax-request-to-local-file-system-not-working-in-chrome/38344639#38344639 ).</p>"),
              f(b.pages[0] || b.elem).append(this.pdfLocalErrorMsg));
            console && console.log && console.log(c);
          }
      );
    },
    pdfBuildLinkService: function () {
      var a = this;
      this.pdfLinkService = {
        navigateTo: function () {
          a.pdfNavigateTo.apply(a, arguments);
        },
        getDestinationHash: function (b) {
          return this.getAnchorUrl("");
        },
        getAnchorUrl: function (b) {
          return b;
        },
      };
      return this._pdfLinkService;
    },
    pdfResetPages: function () {
      this.updateBook(!0);
      for (var a = 0; a < this.pages.length; a++)
        this.unloadPage(this.pages[a]);
      a = this.opts.pdfUpdateRender;
      this.opts.pdfUpdateRender = !1;
      this._reponsiveApplied
        ? this.elem.trigger("resize")
        : this.opts.scaleToFit && this.scaleToFit();
      this.showPage(this.currentPage);
      this.opts.pdfUpdateRender = a;
      this.positionBookShadow();
    },
    pdfLoadPage: function (a, b) {
      var c = f("<canvas>");
      this.opts.pdfProgressiveRender &&
        c.appendTo(this.pages[a].find(".wowbook-page-content"));
      this.pdfRenderPage(a, c[0], this.finishPageLoading);
    },
    pdfRenderPage: function (a, b, c, d, e) {
      if (this.pdfPageRendering) this.pdfQueueRenderPage(a, b, c, d, e);
      else {
        this.pdfPageRendering = !0;
        var g = this;
        this.pdfDoc.getPage(a + 1).then(function (k) {
          d || (d = g.pdfFindScaleToFit());
          var n = k.getViewport(d * g.pdfCSS_UNITS * g.opts.pdfScale),
            p = g.pages[a],
            r = !1,
            t = !1;
          if (g.opts.pdfUpdateRender && "thumb" != e) {
            var u = g.currentScale * g.zoomLevel * g.opts.pdfPixelRatio;
            n = p.pageWidth * u;
            g.opts.pdfRoundWidth && 0.5 <= n % 1 && (n = Math.round(n));
            var A = k.getViewport(1);
            n = k.getViewport(n / A.width);
            b
              ? f(b)
                  .addClass("wowbook-pdf-zoom-" + u)
                  .css({
                    transform: "scale(" + 1 / u + ")",
                    "transform-origin": "0 0 0",
                  })
              : ((b = p.find(".wowbook-pdf-zoom-" + u)),
                (t = b.length),
                b.length ||
                  ((b = f("<canvas>").addClass("wowbook-pdf-zoom-" + u)),
                  b.css({
                    transform: "scale(" + 1 / u + ")",
                    "transform-origin": "0 0 0",
                  }),
                  (r = !0)),
                (b = b[0]));
          }
          t ||
            ((b.height = Math.ceil(n.height)), (b.width = Math.ceil(n.width)));
          u = { canvasContext: b.getContext("2d"), viewport: n };
          n = function () {
            r &&
              !f(b).parent().length &&
              f(b).appendTo(p.find(".wowbook-page-content"));
            c && c.call(g, g.pages[a], b);
            if ("thumb" != e) {
              p.find("canvas").not(b).remove();
              var D = k.getViewport(1 * g.pdfCSS_UNITS * g.opts.pdfScale);
              D = k.getViewport(
                (g.pdfWidth / D.width) * g.pdfCSS_UNITS * g.opts.pdfScale
              );
              if (!p.find(".wowbook-pdf-annotations").length) {
                var F = f('<div class="wowbook-pdf-annotations">').appendTo(
                  p.find(".wowbook-page-content")
                );
                g.pdfAnnotations(k, D, F);
              }
              g.opts.pdfTextSelectable &&
                !p.textLayer &&
                "thumb" != e &&
                g.pdfTextLayer(k, a, D);
            }
            g.pdfPageRendering = !1;
            g.pdfDequeueRenderPage();
          };
          t ? n() : k.render(u).then(n, function () {});
        });
      }
    },
    pdfUpdateRender: function (a) {
      if (this.opts.pdfUpdateRender) {
        var b = this.pages[this.currentPage],
          c = this.otherPage(this.currentPage);
        b && this.pdfRenderPage(b.pageIndex, void 0, a);
        void 0 != c && this.pdfRenderPage(c, void 0, a);
      }
    },
    pdfAnnotations: function (a, b, c) {
      var d = this;
      a.getAnnotations().then(function (e) {
        b = b.clone({ dontFlip: !0 });
        PDFJS.AnnotationLayer.render({
          viewport: b,
          div: c[0],
          annotations: e,
          page: a,
          linkService: d.pdfLinkService,
        });
        c.find("a").attr("target", "_blank");
      });
    },
    pdfTextLayer: function (a, b, c, d) {
      if (!d) {
        var e = this.pages[b];
        d = e.find(".wowbook-pdf-text");
        d.length ||
          (d = f('<div class="wowbook-pdf-text">').appendTo(
            e.find(".wowbook-page-content")
          ));
      }
      var g = new PDFJS.TextLayerBuilder({
        textLayerDiv: d[0],
        pageIndex: b,
        viewport: c,
        findController: this._pdfFindController,
      });
      e.textLayer = g;
      a.getTextContent({ normalizeWhitespace: !0 }).then(function (k) {
        g.setTextContent(k);
        g.render(PDFJS.TextLayerBuilder.TEXT_LAYER_RENDER_DELAY);
      });
    },
    pdfNavigateTo: function (a) {
      var b = this;
      b.pagesRefMap || (b.pagesRefMap = {});
      var c = function (d) {
        var e =
          d instanceof Object
            ? b.pagesRefMap[d.num + " " + d.gen + " R"]
            : d + 1;
        e
          ? b.gotoPage(e - 1)
          : b.pdfDoc.getPageIndex(d).then(function (g) {
              b.pagesRefMap[d.num + " " + d.gen + " R"] = g + 1;
              c(d);
            });
      };
      ("string" == typeof a
        ? this.pdfDoc.getDestination(a)
        : Promise.resolve(a)
      ).then(function (d) {
        d instanceof Array && c(d[0]);
      });
    },
    pdfRenderThumbnail: function (a, b, c) {
      this.thumbnailsContainer.addClass("wowbook-pdf");
      if ((c = this.pages[a]) && !c.loading && !b.pdf && !b.rendering) {
        b.rendering = !0;
        var d = b.find("canvas");
        d.length ||
          (d = f("<canvas>").appendTo(b.find(".wowbook-page-content")));
        d.css("transform", "");
        this.opts.pdfProgressiveRender || d.css("display", "none");
        b.find(".wowbook-page").css({
          width: b.width(),
          height: b.height(),
          zoom: 1,
          transform: "scale(1)",
        });
        this.pdfRenderPage(
          a,
          d[0],
          function (e, g) {
            d.css("display", "block");
            b.rendering = !1;
            b.pdf = !0;
            b.find(".wowbook-pdf-text, .wowbook-pdf-annotations").remove();
          },
          this.thumbnailScale * this.opts.pdfScale,
          "thumb"
        );
      }
    },
    pdfCancelRenderThumbnail: function (a, b) {
      for (var c = this.pdfRenderQueue, d = 0; d < c.length; ) {
        var e = c[d][0];
        e >= a && e <= b && "thumb" == c[d][4]
          ? ((this.thumbnails[e].rendering = !1), c.splice(d, 1))
          : d++;
      }
    },
    pdfQueueRenderPage: function (a, b, c, d, e) {
      this.pdfRenderQueue.push([].slice.call(arguments));
    },
    pdfDequeueRenderPage: function () {
      var a = this.pdfRenderQueue.shift();
      a && this.pdfRenderPage.apply(this, a);
    },
    pdfFindScaleToFit: function () {
      var a = this.pageWidth,
        b = this.pageHeight,
        c = this.pdfWidth / this.pdfHeight;
      b * c > a && (b = a / c);
      return b / this.pdfHeight;
    },
    pdfOutline: function () {
      var a = this;
      this.pdfDoc.getOutline().then(function (b) {
        function c(d) {
          for (var e = [], g = 0, k = d.length; g < k; g++) {
            var n = [];
            n[0] = PDFJS.removeNullCharacters(d[g].title);
            n[1] = d[g].url;
            d[g].items && d[g].items.length && (n[2] = c(d[g].items));
            n[3] = d[g].dest;
            e.push(n);
          }
          return e;
        }
        b && ((a.opts.toc = c(b)), a.opts.displayToc && a.showToc());
      });
    },
    pdfFindSetup: function () {
      this._pdfFindController ||
        ((this.opts.pdfTextSelectable = !0),
        this.createFindBar(),
        this.pdfCreateFindController(),
        this.setStrings());
    },
    pdfFind: function () {
      this.pdfSearch.apply(this, arguments);
    },
    pdfFindNext: function () {
      var a = Array.prototype.slice.call(arguments);
      a[3] = !1;
      a[4] = "again";
      this.pdfSearch.apply(this, a);
    },
    pdfFindPrevious: function () {
      var a = Array.prototype.slice.call(arguments);
      a[3] = !0;
      a[4] = "again";
      this.pdfSearch.apply(this, a);
    },
    createFindControl: function (a, b) {
      b || (b = this.opts);
      var c = this;
      f(a)
        .addClass("wowbook-control-find")
        .on("click.wowbook", function (d) {
          if (!f(d.target).closest(".wowbook-findbar").length)
            return c.toggleFindBar(), !1;
        });
    },
    toggleFindBar: function (a) {
      a || (a = f(this._pdfFindBar));
      a.hasClass("wowbook-hidden")
        ? (a.css("opacity", 0).removeClass("wowbook-hidden"),
          J(a) || a.toggleClass("wowbook-up"),
          a.css("opacity", 1),
          a.find(".wowbook-find-text").focus())
        : a.addClass("wowbook-hidden");
    },
    createFindBar: function () {
      var a = f(
        '<div id="findbar" class="wowbook-findbar wowbook-hidden"><label style="display:none">Find: </label><div class="wowbook-find-text-container"><input class="wowbook-find-text" placeholder="Text to find"><span class="wowbook-find-count"></span></div><a title="Find the previous occurrence of the phrase" class="wowbook-find-previous wowbook-control-back"><i></i><span>Previous</span></a><a title="Find the next occurrence of the phrase" class="wowbook-find-next wowbook-control-next"><i></i><span>Next</span></a><label style="display:none"><input type="checkbox" class="wowbook-find-highlight-all" checked="1"> Highlight all</label><label><input type="checkbox" class="wowbook-find-match-case"> <span>Match case</span></label><a class="wowbook-close"><i></i></a></div>'
      ).appendTo(f(this.toolbars[0]).find(".wowbook-controls"));
      this._pdfFindBar = a;
      this.setFindBarEventHandlers(a);
      this.pdfFindBarMethods(a);
      return a;
    },
    setFindBarEventHandlers: function (a) {
      var b = this,
        c = function (d) {
          d = d.data || {};
          var e = a.find(".wowbook-find-text").val(),
            g = a.find(".wowbook-find-match-case").prop("checked"),
            k = a.find(".wowbook-find-highlight-all").prop("checked");
          b.pdfSearch(e, k, g, d.previous, d.next || d.previous ? "again" : "");
        };
      a.find(".wowbook-find-text").on("input", c);
      a.find(".wowbook-find-match-case, .wowbook-find-highlight-all").on(
        "click",
        c
      );
      a.find(".wowbook-find-previous").on("click", { previous: !0 }, c);
      a.find(".wowbook-find-next").on("click", { next: !0 }, c);
      a.find(".wowbook-close").on("click", function () {
        b.toggleFindBar(a);
      });
      a.find(".wowbook-find-count").on("click", function () {
        a.find(".wowbook-find-text").focus();
      });
    },
    createContainer: function (a) {
      a = this.container = f("<div class='wowbook-container'>");
      var b = this.opts,
        c = f.wowBook.defaults;
      a.prependTo(this.elem.parent());
      this.containerBook = f("<div class='wowbook-book-container'>")
        .appendTo(a)
        .append(this.elem);
      this.containerToolbar = f(
        "<div class='wowbook-toolbar-container'>"
      ).appendTo(a);
      b.containerWidth && a.css("width", b.containerWidth);
      b.containerHeight && a.css("height", b.containerHeight);
      b.containerBackground && a.css("background", b.containerBackground);
      b.containerPadding &&
        this.containerBook.css("padding", b.containerPadding);
      b.thumbnailsParent == c.thumbnailsParent && (b.thumbnailsParent = a);
      b.tocParent == c.tocParent && (b.tocParent = a);
      b.fullscreenElement == c.fullscreenElement && (b.fullscreenElement = a);
      b.scaleToFit || (b.scaleToFit = this.containerBook);
      ("window" != b.container && b.container != window) ||
        a.addClass("wowbook-container-full");
      b.toolbar &&
        (b.toolbarParent == c.toolbarParent &&
          (b.toolbarParent = this.containerToolbar),
        this._isMobile && (b.toolbarPosition = "bottom"));
      this._isMobile && a.addClass("wowbook-mobile");
    },
    destroyContainer: function () {
      this.container &&
        (this.container.replaceWith(this.elem), (this.container = void 0));
    },
    updateContainer: function () {
      var a = this.opts,
        b = 0;
      this.opts.responsiveToolbar && this.updateResponsiveToolbar();
      a.toolbarParent == this.containerToolbar &&
        ((b = "top" == a.toolbarPosition) &&
          !this.containerToolbar.is(".wowbook-top") &&
          this.containerToolbar.insertBefore(this.containerBook),
        !b &&
          this.containerToolbar.is(".wowbook-top") &&
          this.containerToolbar.insertAfter(this.containerBook),
        this.containerToolbar.toggleClass("wowbook-top", b),
        (b = f(this.toolbars[0]).outerHeight(!0)));
      b = this.container.height() - b;
      this.containerBook.outerHeight(b);
      if (!a.conteinerHeight) {
        this.elem.css("top", this.elem.css("top"));
        var c = this;
        setTimeout(function () {
          c.elem.css("top", "");
        }, 0);
      }
      f.wowBook.support.transform || this.elem.css("top", "auto");
      this.mobileToolbar && this.updateMobileToolbar();
    },
    lightbox: function (a) {
      this._lightboxElem = f("<div class='wowbook-lightbox'>")
        .appendTo("body")
        .addClass(this.opts.lightboxClass);
      this._lightboxBookContainer = f(
        "<div class='wowbook-book-container'>"
      ).appendTo(this._lightboxElem);
      this._lightboxOverlay = this.opts.lightboxOverlay
        ? f("<div class='wowbook-lightbox-overlay'>").appendTo("body")
        : f();
      this.opts.thumbnailsParent = this._lightboxElem;
      this.opts.tocParent = this._lightboxElem;
      this.opts.fullscreenElement = this._lightboxElem;
      this.opts.lightboxResponsive &&
        ((this.opts.scaleToFit = this._lightboxBookContainer),
        this.responsive());
      this._isMobile && this._lightboxElem.addClass("wowbook-mobile");
      this.opts.lightboxBackground &&
        this._lightboxElem.css("background", this.opts.lightboxBackground);
      this.opts.lightboxColor &&
        this._lightboxElem.css("backgroundColor", this.opts.lightboxColor);
      this.opts.lightboxOverlayColor &&
        this._lightboxOverlay.css(
          "backgroundColor",
          this.opts.lightboxOverlayColor
        );
      this._lightboxElem.css({
        width: this.opts.lightboxWidth,
        height: this.opts.lightboxHeight,
      });
      this.elem.appendTo(this._lightboxBookContainer);
      this.opts.toolbar &&
        ((this.opts.toolbarParent = this._lightboxElem),
        this._isMobile && (this.opts.toolbarPosition = "bottom"));
      var b = this;
      f(a).on("click.wowbook", function () {
        b.showLightbox();
      });
      f("<button class='wowbook-close'>\u2715</button>")
        .appendTo(this._lightboxElem)
        .on("click.wowbook", function () {
          b.hideLightbox();
        });
      f(document).on("keydown.wowbook.lightbox", function (c) {
        b.lightboxOn &&
          (f(c.target).filter("input, textarea, select").length ||
            (27 === c.which && b.hideLightbox()));
      });
    },
    destroyLightbox: function (a) {
      this.lightboxOn && this.hideLightbox();
      f(this._lightboxElem).remove();
      f(this._lightboxOverlay).remove();
    },
    showLightbox: function () {
      this.thumbnailsContainer &&
        this.thumbnailsContainer.parent()[0] != this._lightboxElem &&
        this.thumbnailsContainer.appendTo(this._lightboxElem);
      this.elem.parent()[0] != this._lightboxBookContainer &&
        this.elem.appendTo(this._lightboxBookContainer);
      this.tocContainer &&
        this.tocContainer.parent()[0] != this._lightboxElem &&
        this.tocContainer.appendTo(this._lightboxElem);
      this.lightboxOn = !0;
      f("body").addClass("wowbook-lightbox-on");
      f.wowBook.utils.isIOS && f("html").addClass("wowbook-lightbox-ios");
      this._lightboxElem.fadeIn();
      this.centerLightbox();
      this.setCurrentPageControlWidth();
      this._lightboxOverlay.fadeIn();
      this.positionBookShadow();
      this.opts.responsiveToolbar && this.updateResponsiveToolbar();
      if (this.opts.toolbarParent == this._lightboxElem) {
        var a = f(this.toolbars[0]).outerHeight(!0),
          b = "top" == this.opts.toolbarPosition ? "top" : "bottom";
        this._lightboxBookContainer.css(b, a);
        f(this.toolbars[0]).css(b, 0);
      }
      this.opts.lightboxResponsive && this.responsiveUpdater();
      this.mobileToolbar && this.updateMobileToolbar();
      if (this.opts.onShowLightbox)
        this.opts.onShowLightbox(
          this,
          this.pages[this.currentPage],
          this.currentPage
        );
    },
    hideLightbox: function () {
      this.lightboxOn = !1;
      this._lightboxElem.fadeOut();
      this._lightboxOverlay.fadeOut();
      f("body").removeClass("wowbook-lightbox-on");
      f("body").removeClass("wowbook-lightbox-ios");
      P() && this.exitFullscreen();
      if (this.opts.onHideLightbox)
        this.opts.onHideLightbox(
          this,
          this.pages[this.currentPage],
          this.currentPage
        );
    },
    centerLightbox: function () {
      var a = f(window).width(),
        b = f(window).height();
      (f.browser.chrome ||
        f.browser.webkit ||
        f.browser.safari ||
        f.browser.opera) &&
        window.innerHeight > b &&
        (b = window.innerHeight);
      this._lightboxElem.css("left", (a - this._lightboxElem.outerWidth()) / 2);
      this._lightboxElem.css("top", (b - this._lightboxElem.outerHeight()) / 2);
      this.opts.toolbarParent == this._lightboxElem &&
        (this.opts.responsiveToolbar && this.updateResponsiveToolbar(),
        (a = f(this.toolbars[0]).outerHeight(!0)),
        this._lightboxBookContainer.css(
          "height",
          this._lightboxElem.outerHeight() - a
        ));
    },
    setStyle: function (a) {
      "string" == typeof a && (this._customCSSClass = a);
      f.isPlainObject(a) &&
        (this._customCSSClass ||
          (this._customCSSClass = this.generateCSSClassName()),
        (a = this.generateCSSClass(a, this._customCSSClass)),
        f("body").append("<style>" + a + "</style>"));
      a = this._customCSSClass;
      f(this.toolbars)
        .addClass(a)
        .find(".wowbook-controls")
        .addClass(a)
        .find(".wowbook-share-buttons")
        .addClass(a);
      f(this.tocContainer).addClass(a);
      f(this.thumbnailsContainer).addClass(a);
      f(this.thumbnailsContainer).find(".wowbook-control").addClass(a);
      f(this.elem).find(".wowbook-page-number").addClass(a);
      f(this._lightboxElem).find(".wowbook-close").addClass(a);
      f(this._navControls).addClass(a);
    },
    generateCSSClassName: function () {
      f.wowBook.utils._cssClassCounter =
        (f.wowBook.utils._cssClassCounter || 0) + 1;
      return "wowbook-cs-" + f.wowBook.utils._cssClassCounter;
    },
    generateCSSClass: function (a, b) {
      function c(g, k) {
        var n = [];
        n.push(g + " {");
        for (var p in k) n.push("\t" + p + " : " + k[p] + " !important;");
        n.push("}");
        n = n.join("\n");
        e.push(n);
        return n;
      }
      function d(g, k, n) {
        g[k] && (c(n, g[k]), delete g[k]);
      }
      if (!a || !b) return "";
      a = f.extend({}, a);
      var e = [];
      a.hover && c("." + b + " .wowbook-close:hover", { color: a.hover.color });
      d(a, "hover", "." + b + " a:hover, ." + b + ".wowbook-control:hover");
      d(a, "active", "." + b + " a:active, ." + b + ".wowbook-control:active");
      d(
        a,
        "disabled",
        "." +
          b +
          " a.wowbook-disabled, ." +
          b +
          ".wowbook-control.wowbook-disabled"
      );
      a.separator &&
        ((a.separator = a.separator.split(",")),
        c("." + b + " a", {
          "border-color": a.separator[0],
          "box-shadow":
            "0 1px 0 " + (a.separator[1] || "transparent") + " inset",
        }),
        delete a.separator);
      c("." + b + ".wowbook-page-number", { background: "transparent" });
      a.pageNumber &&
        (c("." + b + ".wowbook-page-number", { color: a.pageNumber }),
        delete a.pageNumber);
      c("." + b + " .wowbook-control", a);
      c("." + b + " .wowbook-control.remove-sticky-hover-style:hover", a);
      c("." + b, a);
      return e.join("\n");
    },
    controllify: function (a) {
      var b = this,
        c = this.opts;
      f(a.zoomIn || a.zoomin).on("click.wowbook", function () {
        b.zoomIn({});
        return !1;
      });
      f(a.zoomOut || a.zoomout).on("click.wowbook", function () {
        b.zoomOut({});
        return !1;
      });
      f(a.zoomReset || a.zoomreset).on("click.wowbook", function () {
        b.zoomReset({});
        return !1;
      });
      f(a.next).on("click.wowbook", function () {
        b.advance();
        return !1;
      });
      f(a.back).on("click.wowbook", function () {
        b.back();
        return !1;
      });
      f(a.first).on("click.wowbook", function () {
        b.gotoPage(0);
        return !1;
      });
      f(a.last).on("click.wowbook", function () {
        b.gotoPage(b.pages.length - 1);
        return !1;
      });
      f(a.left).on("click.wowbook", function () {
        b.gotoLeft();
        return !1;
      });
      f(a.right).on("click.wowbook", function () {
        b.gotoRight();
        return !1;
      });
      f(a.lastLeft || a.lastleft).on("click.wowbook", function () {
        b.gotoLastLeft();
        return !1;
      });
      f(a.lastRight || a.lastright).on("click.wowbook", function () {
        b.gotoLastRight();
        return !1;
      });
      f(a.slideShow || a.slideshow).on("click.wowbook", function () {
        b.toggleSlideShow();
        return !1;
      });
      f(a.flipSound || a.flipsound).on("click.wowbook", function () {
        b.toggleFlipSound();
        return !1;
      });
      f(a.thumbnails).on("click.wowbook", function () {
        b.toggleThumbnails();
        return !1;
      });
      f(a.fullscreen).on("click.wowbook", function () {
        b.toggleFullscreen();
        return !1;
      });
      f(a.toc).on("click.wowbook", function () {
        b.toggleToc();
        return !1;
      });
      f(a.find).length && this.createFindControl(f(a.find));
      f(a.fullscreen).length && !I && f(a.fullscreen).hide();
      var d =
        c.downloadURL ||
        c.downloadurl ||
        c.downloadUrl ||
        (f.isPlainObject(c.pdf) ? c.pdf.url : c.pdf);
      d && f(a.download).attr("href", d).attr("download", d);
      (c = c.homeURL || c.homeurl || c.homeUrl) && f(a.home).attr("href", c);
      f(a.share).length && this.createShareControl(f(a.share));
      a.currentPage && this.createCurrentPageControl(a.currentPage);
      c =
        "zoomIn zoomOut zoomReset left lastLeft right lastRight next back first last slideShow flipSound thumbnails fullscreen toc currentPage download find home".split(
          " "
        );
      for (var e = 0, g = c.length; e < g; e++)
        (d = c[e].toLowerCase()),
          (this._controls[d] = f(this._controls[d]).add(a[c[e]] || a[d]));
      this.setStrings();
    },
    toggleControl: function (a, b) {
      (a = this._controls[a.toLowerCase()]) &&
        f(a).toggleClass("wowbook-disabled", b);
    },
    createNavigationControls: function (a) {
      if (!this._isMobile || !this.opts.responsiveNavControls)
        if (
          (a || (a = this.opts.navControls),
          "parent" === a && (a = this.elem.parent()),
          !0 === a && (a = this.containerBook || this._lightboxBookContainer),
          a)
        ) {
          "string" == typeof a && (a = f(a));
          var b = f(
            "<button class='wowbook-nav wowbook-nav-left wowbook-disabled'><i></i></button>"
          ).appendTo(a);
          a = f(
            "<button class='wowbook-nav wowbook-nav-right wowbook-disabled'><i></i></button>"
          ).appendTo(a);
          this.controllify({ left: b, right: a });
          this._navControls = f(b).add(a);
          this.opts.toolbarIcons &&
            this._navControls.addClass("wowbook-" + this.opts.toolbarIcons);
        }
    },
    shareControlButtons: {
      twitter: [
        '<a href="http://twitter.com/share" target="_blank"><i class="fa-twitter"></i></a>',
        { text: "text", via: "via", url: "url" },
      ],
      googleplus: [
        '<a href="https://plus.google.com/share" target="_blank" ><i class="fa-google-plus"></i></a>',
        { url: "url" },
      ],
      facebook: [
        '<a href="http://www.facebook.com/sharer/sharer.php" target="_blank" ><i class="fa-facebook"></i></a>',
        { u: "url" },
      ],
      stumbleupon: [
        '<a href="http://www.stumbleupon.com/submit" target="_blank"><i class="fa fa-stumbleupon"></i></a>',
        { url: "url", title: "title" },
      ],
      reddit: [
        '<a href="http://reddit.com/submit" target="_blank"><i class="fa fa-reddit"></i></a>',
        { url: "url", title: "title" },
      ],
      linkedin: [
        '<a href="http://www.linkedin.com/shareArticle" target="_blank"><i class="fa fa-linkedin"></i></a>',
        {
          url: "url",
          title: "title",
          summary: "summary",
          source: "source_url",
        },
      ],
    },
    createShareControl: function (a, b) {
      b || (b = this.opts);
      for (
        var c = f.extend({}, this.shareControlButtons, b.shareButtons),
          d,
          e = b.share.split(/\s*,\s*|\s+/),
          g = f("<div class='wowbook-share-buttons wowbook-hidden'>"),
          k = 0,
          n = e.length;
        k < n;
        k++
      )
        (d = c[e[k]]) &&
          f(d[0])
            .appendTo(g)
            .addClass("wowbook-control wowbook-share-button")
            .data("params", d[1]);
      c = f(a).addClass("wowbook-control-share").append(g);
      var p = this;
      c.on("click", function (r) {
        p.toggleShareButtons(r.target);
      });
      c.on("click", ".wowbook-share-button", function () {
        var r = p.opts.shareButtonCallback;
        if (!f.isFunction(r) || !1 !== r(p, this)) {
          r = f.extend({}, f(this).data("params"));
          var t = f.extend(f.wowBook.defaults.shareParams, p.opts.shareParams);
          "_current_" == t.url && (t.url = window.location.href);
          for (paramName in r) {
            var u = r[paramName];
            void 0 != t[u] ? (r[paramName] = t[u]) : delete r[paramName];
          }
          this.search = f.param(r);
          window.open(this.href, "_blank");
          p.toggleShareButtons(this);
          return !1;
        }
      });
    },
    toggleShareButtons: function (a) {
      a = f(a).closest(".wowbook-control-share");
      a = a.find(".wowbook-share-buttons");
      a.hasClass("wowbook-hidden")
        ? (a.css("opacity", 0).removeClass("wowbook-hidden"),
          J(a) || a.toggleClass("wowbook-up"),
          a.css("opacity", 1))
        : a.addClass("wowbook-hidden");
    },
    createCurrentPageControl: function (a) {
      a = f(a);
      if (a.length) {
        a.append(
          "<input class='wowbook-input-page' /><span class='wowbook-current-page'></span>"
        );
        var b = this,
          c = a.find(".wowbook-input-page"),
          d = a.find(".wowbook-current-page");
        c.hide();
        a.on("click.wowbook", function () {
          d.hide();
          c.show().focus();
        });
        c.on("keypress.wowbook", function (e) {
          var g = "8,9,13,35,36,37,39".match(new RegExp(e.which));
          !e.which ||
            (49 <= e.which && 57 >= e.which) ||
            (48 == e.which && f(this).val()) ||
            g ||
            e.preventDefault();
        });
        c.on("focusin.wowbook", function () {
          var e = b.currentPage + 1;
          f(this).val(e).data("value", e).select();
        });
        c.on("focusout.wowbook", function () {
          f(this).hide();
          d.show();
        });
        c.on("change.wowbook", function () {
          var e = f(this),
            g = e.data("value"),
            k = parseInt(this.value);
          1 <= k && k <= b.pages.length ? b.gotoPage(k - 1) : e.val(g);
          e.hide();
          d.show();
        });
        this.setCurrentPageControlWidth(a);
      }
    },
    updateCurrentPageControl: function (a) {
      !a && this._controls && (a = this._controls.currentpage);
      if (a && a.length) {
        var b = this.currentPage + 1;
        b += "/" + this.pages.length;
        a.find(".wowbook-current-page").text(b);
        b = a.find(".wowbook-input-page");
        b.outerHeight() && b.css("top", (a.height() - b.outerHeight()) / 2);
      }
    },
    setCurrentPageControlWidth: function (a, b) {
      a || (a = this._controls && this._controls.currentpage);
      if (a && a.length) {
        2 > arguments.length && (b = this.opts.CurrentPageControlWidth);
        if (!b) {
          var c = a.find(".wowbook-current-page"),
            d = c.text(),
            e = ("" + this.pages.length).replace(/./g, "0");
          c.css("width", "auto");
          c.css("visibility", "hidden").text(e + "/" + e);
          b = c.width();
          c.text(d).css("visibility", "visible").css("width", "100%");
          c = a.find(".wowbook-input-page");
          c.outerHeight() && c.css("top", (a.height() - c.outerHeight()) / 2);
        }
        a.width(b);
      }
    },
    setStrings: function (a) {
      function b(e, g) {
        var k = a[e];
        void 0 != k && c[g] && c[g].attr("title", k);
      }
      a || (a = this.opts.strings || {});
      a.tocHeader &&
        ((this.opts.tocHeader = a.tocHeader),
        this.tocContainer &&
          this.tocContainer
            .find("h1 > .wowbook-toc-header-text")
            .text(a.tocHeader));
      if (this._controls) {
        var c = this._controls;
        b("findTooltip", "find");
        if (this._pdfFindBar) {
          var d = this._pdfFindBar;
          d.find(".wowbook-find-text").attr(
            "placeholder",
            a.findInputPlaceHolder
          );
          d.find(".wowbook-find-previous").attr("title", a.findPreviousTooltip);
          d.find(".wowbook-find-next").attr("title", a.findNextTooltip);
          d.find(".wowbook-find-match-case")
            .parent()
            .find("span")
            .text(a.findMatchCase);
        }
        b("lastLeftTooltip", "lastLeft");
        b("leftTooltip", "left");
        b("rightTooltip", "right");
        b("lastRightTooltip", "lastRight");
        b("firstTooltip", "first");
        b("backTooltip", "back");
        b("nextTooltip", "next");
        b("lastTooltip", "last");
        b("zoominTooltip", "zoomin");
        b("zoomoutTooltip", "zoomout");
        b("slideshowTooltip", "slideshow");
        b("flipsoundTooltip", "flipsound");
        b("fullscreenTooltip", "fullscreen");
        b("thumbnailsTooltip", "thumbnails");
        b("tocTooltip", "toc");
        b("downloadTooltip", "download");
        b("shareTooltip", "share");
        b("homeTooltip", "home");
      }
    },
    toolbarControls: {
      _default: "<a href='#'><i></i></a>",
      lastLeft: "<a><i></i></a>",
      left: "<a><i></i></a>",
      right: "<a><i></i></a>",
      lastRight: "<a><i></i></a>",
      first: "<a title='go to first page'><i></i></a>",
      back: "<a title='go back one page'><i></i></a>",
      next: "<a title='go foward one page'><i></i></a>",
      last: "<a title='go to last page'><i></i></a>",
      zoomin: "<a title='zoom in'><i></i></a>",
      zoomout: "<a title='zoom out'><i></i></a>",
      slideshow: "<a title='start slideshow'><i></i></a>",
      flipsound: "<a title='flip sound on/off'><i></i></a>",
      fullscreen: "<a title='fullscreen on/off'><i></i></a>",
      thumbnails: "<a title='thumbnails on/off'><i></i></a>",
      toc: "<a title='table of contents on/off'><i></i></a>",
      download: "<a title='download'><i></i></a>",
      home: "<a title=''><i></i></a>",
      find: "<a title='find'><i></i></a>",
      share: "<a title='share'><i></i></a>",
      currentPage: "<span></span>",
    },
    createToolbar: function (a, b) {
      if (
        a &&
        (b = f(b || this.opts.toolbarParent || this.elem.parent())) &&
        b.length
      ) {
        var c = f('<div class="wowbook-toolbar">'),
          d = f('<div class="wowbook-controls">').appendTo(c);
        this.opts.toolbarIcons &&
          c.addClass("wowbook-" + this.opts.toolbarIcons);
        a = a.trim().split(/\s*,\s*/);
        for (var e = {}, g, k = 0; k < a.length; k += 1)
          (g = this.createToolbarControl(a[k])), (e[a[k]] = g), d.append(g);
        this.opts.removeStickyHoverStyle &&
          (c.on("touchstart", ".wowbook-control", function () {
            f(this).removeClass("remove-sticky-hover-style");
          }),
          c.on("touchend", ".wowbook-control", function () {
            f(".remove-sticky-hover-style").removeClass(
              "remove-sticky-hover-style"
            );
            f(this).addClass("remove-sticky-hover-style");
          }));
        b.prepend(c);
        this.controllify(e);
        this.toolbars.push(c[0]);
        this.setStyle(this.opts.styles || this.opts.style);
        return c;
      }
    },
    destroyToolbars: function () {
      this.toolbars && f(this.toolbars).remove();
      this.toolbars = null;
    },
    createToolbarControl: function (a) {
      this._avoidLoopControl || (this._avoidLoopControl = {});
      var b = a;
      if (f.isPlainObject(a)) {
        var c = a;
        a = f(this.toolbarControls._default);
        for (prop in c)
          if (jQuery.isFunction(a[prop])) a[prop](c[prop]);
          else a.attr(prop, c[prop]);
      }
      if ("string" == typeof a)
        if ("<" == a.charAt(0)) a = f(a);
        else {
          a =
            this.toolbarControls[a] ||
            this.toolbarControls[a.toLowerCase()] ||
            this.toolbarControls._default;
          if (this._avoidLoopControl[b])
            return "Error CreateToolbarControl in loop";
          this._avoidLoopControl[b] = 1;
          a = this.createToolbarControl(a);
          this._avoidLoopControl[b] = 0;
          a = f(a).addClass("wowbook-control-" + b);
        }
      a.addClass("wowbook-control");
      return a;
    },
    setupMobileToolbar: function () {
      this.opts.toolbarPosition = "bottom";
      this.mobileToolbar = f(this.toolbars[0]);
      this.mobileToolbar
        .find(".wowbook-controls")
        .css({ position: "absolute", left: 0 });
      this.createMobileToolbarToggle();
      this.slideDownMobileToolbar(0);
      this.updateMobileToolbar();
    },
    toolbarIsExpandable: function (a) {
      return 1.1 * a.height() < a.find(".wowbook-controls").height();
    },
    updateMobileToolbar: function () {
      this.mobileToolbarToggle.toggleClass(
        "wowbook-collapsed",
        !this._mobileToolbarExpanded
      );
      this.mobileToolbarToggle.toggle(
        this.toolbarIsExpandable(this.mobileToolbar)
      );
    },
    createMobileToolbarToggle: function () {
      this.mobileToolbarToggle = f(
        "<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>"
      ).prependTo(this.mobileToolbar.find(".wowbook-controls"));
      var a = this;
      this.mobileToolbarToggle.on("click", function () {
        a.toogleMobileToolbar();
      });
      f(window).on("resize.wowbook", function () {
        a.mobileToolbarToggle && a.mobileToolbar && a.updateMobileToolbar();
      });
    },
    slideUpMobileToolbar: function (a) {
      var b = this.mobileToolbar.find(".wowbook-controls"),
        c =
          this.mobileToolbar.children().height() - this.mobileToolbar.height();
      b.css({ bottom: -c }).animate({ bottom: 0 }, a);
      this._mobileToolbarExpanded = !0;
      this.updateMobileToolbar();
    },
    slideDownMobileToolbar: function (a) {
      var b = this.mobileToolbar.find(".wowbook-controls"),
        c =
          this.mobileToolbar.children().height() - this.mobileToolbar.height();
      b.animate(
        { bottom: -c },
        {
          duration: a,
          complete: function () {
            f(this).css("bottom", "");
          },
        }
      );
      this._mobileToolbarExpanded = !1;
      this.updateMobileToolbar();
    },
    toogleMobileToolbar: function () {
      this._mobileToolbarExpanded
        ? this.slideDownMobileToolbar()
        : this.slideUpMobileToolbar();
    },
    setupResponsiveToolbar: function () {
      this.responsiveToolbar = f(this.toolbars[0]);
      this.createResponsiveToolbarToggle();
      this.updateResponsiveToolbar();
    },
    makeToolbarExpandable: function (a) {
      this._responsiveToolbarExpandable ||
        ((this._responsiveToolbarExpandable = !0),
        this._originalToolbarPosition ||
          (this._originalToolbarPosition = this.opts.toolbarPosition),
        (this.opts.toolbarPosition = "bottom"),
        this.responsiveToolbar
          .find(".wowbook-controls")
          .css({ position: "absolute", left: 0 }),
        this.container &&
          "hidden" != this.container.css("overflow") &&
          (this.container.data(
            "originalOverflow",
            this.container.css("overflow")
          ),
          this.container.css("overflow", "hidden")),
        this.slideDownResponsiveToolbar(0));
    },
    unmakeToolbarExpandable: function () {
      this._responsiveToolbarExpandable &&
        ((this._responsiveToolbarExpandable = !1),
        this._originalToolbarPosition &&
          (this.opts.toolbarPosition = this._originalToolbarPosition),
        this.responsiveToolbar
          .find(".wowbook-controls")
          .css({ bottom: "", position: "", left: "" }),
        this.container &&
          this.container.data("originalOverflow") &&
          (this.container.css(
            "overflow",
            this.container.data("originalOverflow")
          ),
          this.container.data("originalOverflow", "")));
    },
    updateResponsiveToolbar: function () {
      if (this.responsiveToolbar) {
        this.responsiveToolbar.toggleClass(
          "wowbook-small",
          480 > this.responsiveToolbar.width()
        );
        var a = this.toolbarIsExpandable(this.responsiveToolbar);
        a ? this.makeToolbarExpandable() : this.unmakeToolbarExpandable();
        this.responsiveToolbar.toggleClass("wowbook-collapsable", a);
        this.responsiveToolbarToggle.toggleClass(
          "wowbook-collapsed",
          !this._responsiveToolbarExpanded
        );
        this.responsiveToolbarToggle.toggle(a);
      }
    },
    createResponsiveToolbarToggle: function () {
      this.responsiveToolbarToggle = f(
        "<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>"
      ).prependTo(this.responsiveToolbar.find(".wowbook-controls"));
      var a = this;
      this.responsiveToolbarToggle.on("click", function () {
        a.toogleResponsiveToolbar();
      });
      f(window).on("resize.wowbook", function () {
        a.responsiveToolbarToggle &&
          a.responsiveToolbar &&
          a.updateResponsiveToolbar();
      });
    },
    slideUpResponsiveToolbar: function (a) {
      var b = this.responsiveToolbar.find(".wowbook-controls"),
        c =
          this.responsiveToolbar.children().height() -
          this.responsiveToolbar.height();
      b.css({ bottom: -c }).animate({ bottom: 0 }, a);
      this._responsiveToolbarExpanded = !0;
      this.updateResponsiveToolbar();
    },
    slideDownResponsiveToolbar: function (a) {
      var b = this.responsiveToolbar.find(".wowbook-controls"),
        c =
          this.responsiveToolbar.children().height() -
          this.responsiveToolbar.height();
      b.animate(
        { bottom: -c },
        {
          duration: a,
          complete: function () {
            f(this).css("bottom", "");
          },
        }
      );
      this._responsiveToolbarExpanded = !1;
      this.updateResponsiveToolbar();
    },
    toogleResponsiveToolbar: function () {
      this._responsiveToolbarExpanded
        ? this.slideDownResponsiveToolbar()
        : this.slideUpResponsiveToolbar();
    },
    translate: function (a, b, c, d) {
      f.wowBook.support.transform && !1 !== d
        ? a.css(
            "transform",
            f.wowBook.useTranslate3d
              ? "translate3d(" + (b || 0) + "px, " + (c || 0) + "px, 0px)"
              : "translate(" + (b || 0) + "px, " + (c || 0) + "px) "
          )
        : (void 0 !== b && a.css({ left: b }),
          void 0 !== c && a.css({ top: c }));
    },
  };
  f.wowBook.defaults = {
    width: 500,
    height: 300,
    pageWidth: void 0,
    pageHeight: void 0,
    coverWidth: void 0,
    coverHeight: void 0,
    startPage: 0,
    hardcovers: !1,
    hardPages: !1,
    closable: !0,
    centeredWhenClosed: !1,
    doublePages: ".double",
    container: !1,
    containerWidth: void 0,
    containerHeight: void 0,
    containerPadding: void 0,
    containerBackground: void 0,
    toolbarContainerPosition: "",
    rtl: !1,
    responsive: !1,
    scaleToFit: "",
    maxWidth: void 0,
    maxHeight: void 0,
    onResize: null,
    responsiveHandleWidth: void 0,
    singlePage: !1,
    responsiveSinglePage: !0,
    fullscreenElement: document.documentElement,
    onFullscreenError: null,
    onFullscreenErrorMessage: "Cannot enter fullscreen mode.",
    use3d: !0,
    perspective: 2e3,
    useTranslate3d: "mobile",
    useScale3d: !0,
    pageThickness: 0,
    pageEdgeColor: null,
    hardPageShadow: !0,
    style: null,
    bookShadow: !0,
    gutterShadow: !0,
    shadowThreshold: 20,
    shadows: !0,
    foldGradient: !0,
    foldGradientThreshold: 20,
    pageNumbers: !0,
    firstPageNumber: 1,
    numberedPages: !1,
    deepLinking: !0,
    updateBrowserURL: !0,
    moveToViewPort: !1,
    curl: !0,
    curlSize: 40,
    slideShow: !1,
    slideShowDelay: 1e3,
    slideShowLoop: !1,
    pauseOnHover: !0,
    touchEnabled: !0,
    swipeDuration: 200,
    mouseWheel: !1,
    handleWidth: !1,
    handleClickDuration: 300,
    turnPageDuration: 1e3,
    turnPageDurationMin: 300,
    forceBasicPage: !1,
    sections: ".wowbook-section",
    images: void 0,
    srcs: void 0,
    loadingIndicator: !0,
    pdf: null,
    pdfScale: 1,
    pdfProgressiveRender: !1,
    pdfTextSelectable: !1,
    pdfFind: !1,
    pdfUpdateRender: !0,
    onPDFLoadError: null,
    onPDFLoadProgress: null,
    onLoadPdf: null,
    pdfPixelRatio: Math.min(window.devicePixelRatio || 1, 2),
    pdfRoundWidth: !0,
    pdfcMapPacked: !0,
    pdfcMapUrl: "wow_book/cmaps/",
    zoomLevel: 1,
    zoomMax: 2,
    zoomMin: 1,
    zoomBoundingBox: window,
    zoomStep: 0.25,
    zoomDuration: 200,
    zoomEasing: "linear",
    onZoom: null,
    pinchToZoom: !0,
    doubleClickToZoom: !1,
    zoomFocusX: 0.5,
    zoomFocusY: 0.5,
    allowDragBrowserPageZoom: !1,
    flipSound: !0,
    flipSoundFile: ["page-flip.mp3", "page-flip.ogg"],
    flipSoundPath: "./wow_book/sound/",
    onPlayFlipSound: null,
    keyboardNavigation: { back: 37, advance: 39 },
    clipBoundaries: !0,
    onShowPage: null,
    onHoldPage: null,
    onReleasePage: null,
    pagesInMemory: null,
    pagesToKeep: null,
    onLoadPage: null,
    onUnloadPage: null,
    lightbox: null,
    lightboxColor: null,
    lightboxOverlay: !1,
    lightboxOverlayColor: null,
    lightboxWidth: "100%",
    lightboxHeight: "100%",
    lightboxResponsive: !0,
    onShowLightbox: void 0,
    onHideLightbox: void 0,
    toc: void 0,
    tocParent: "body",
    tocHeader: "Table of contents",
    tocItemTemplate: void 0,
    toolbarLightboxPosition: "",
    displayToc: !1,
    controls: {},
    navControls: !1,
    responsiveNavControls: !0,
    downloadURL: null,
    homeURL: null,
    currentPageControlWidth: void 0,
    toolbar: !1,
    toolbarParent: "body",
    toolbarIcons: "fontawesome",
    responsiveToolbar: !0,
    toolbarPosition: "bottom",
    removeStickyHoverStyle: !0,
    share: "twitter, googleplus, facebook, stumbleupon, reddit, linkedin",
    shareParams: {
      url: "_current_",
      text: void 0,
      via: void 0,
      title: void 0,
      summary: void 0,
      source_url: void 0,
    },
    thumbnails: !1,
    thumbnailsParent: "body",
    thumbnailScale: 0.2,
    thumbnailWidth: null,
    thumbnailHeight: null,
    thumbnailNumber: !1,
    onThumbnailNumberString: null,
    thumbnailsPosition: null,
    thumbnailsVertical: !0,
    thumbnailsContainerWidth: null,
    thumbnailsContainerHeight: null,
    thumbnailsSprite: null,
    thumbnailsImages: null,
    thumbnailsHideOnClick: !0,
    thumbnailsScrollDebounceWait: 300,
    thumbnailsAnimOptions: {},
  };
  f.wowBook.wowBookConstructor = H;
  window.raf = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (a) {
        window.setTimeout(a, 1e3 / 60);
      }
    );
  })();
  f.browser.ie8mode = f.browser.msie && 8 == document.documentMode;
  f.browser.ie7 =
    f.browser.msie && (7 == f.browser.version || 7 == document.documentMode);
  var w = f.browser.msie && 9 > f.browser.version ? 1 : 0,
    K = { thin: 2 - w, medium: 4 - w, thick: 6 - w },
    C = window.document,
    M = C.documentElement,
    I =
      M.requestFullscreen ||
      M.mozRequestFullScreen ||
      M.msRequestFullscreen ||
      M.webkitRequestFullscreen ||
      M.webkitRequestFullScreen,
    O =
      C.exitFullscreen ||
      C.mozCancelFullScreen ||
      C.msExitFullscreen ||
      C.webkitExitFullscreen ||
      C.webkitCancelFullScreen,
    P = function () {
      return (
        C.fullscreenElement ||
        C.mozFullScreenElement ||
        C.msFullscreenElement ||
        C.webkitFullscreenElement ||
        C.webkitCurrentFullScreenElement
      );
    };
  f.wowBook.utils = {
    translate: function (a, b, c) {
      return f.wowBook.useTranslate3d
        ? "translate3d(" + a + "px, " + b + "px, " + (c || 0) + "px) "
        : "translate(" + a + "px, " + b + "px) ";
    },
    isMobile: function () {
      return 480 >= f(window).width() || 480 >= f(window).height();
    },
    isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
  };
})(jQuery);
(function (f) {
  function H(B) {
    var w = B || window.event,
      K = [].slice.call(arguments, 1),
      C = 0,
      M = 0;
    B = f.event.fix(w);
    B.type = "mousewheel";
    w.wheelDelta && (C = w.wheelDelta / 120);
    w.detail && (C = -w.detail / 3);
    var I = C;
    void 0 !== w.axis &&
      w.axis === w.HORIZONTAL_AXIS &&
      ((I = 0), (M = -1 * C));
    void 0 !== w.wheelDeltaY && (I = w.wheelDeltaY / 120);
    void 0 !== w.wheelDeltaX && (M = (-1 * w.wheelDeltaX) / 120);
    K.unshift(B, C, M, I);
    return (f.event.dispatch || f.event.handle).apply(this, K);
  }
  var E = ["DOMMouseScroll", "mousewheel"];
  if (f.event.fixHooks)
    for (var J = E.length; J; ) f.event.fixHooks[E[--J]] = f.event.mouseHooks;
  f.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener)
        for (var B = E.length; B; ) this.addEventListener(E[--B], H, !1);
      else this.onmousewheel = H;
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var B = E.length; B; ) this.removeEventListener(E[--B], H, !1);
      else this.onmousewheel = null;
    },
  };
  f.fn.extend({
    mousewheel: function (B) {
      return B ? this.bind("mousewheel", B) : this.trigger("mousewheel");
    },
    unmousewheel: function (B) {
      return this.unbind("mousewheel", B);
    },
  });
})(jQuery);
(function (f) {
  function H(B) {
    if (B in E.style) return (f.wowBook.support[B] = B);
    for (
      var w = J.length, K, C = B.charAt(0).toUpperCase() + B.substr(1);
      w--;

    )
      if (((K = J[w] + C), K in E.style)) return (f.wowBook.support[B] = K);
  }
  if (f.cssHooks) {
    var E = document.createElement("div"),
      J = ["O", "ms", "Webkit", "Moz"];
    H("transform");
    H("transformOrigin");
    H("boxSizing");
    H("zoom");
    f.wowBook.support.boxSizing &&
      8 > document.documentMode &&
      (f.wowBook.support.boxSizing = !1);
    E = null;
    f.each(["transform", "transformOrigin"], function (B, w) {
      f.wowBook.support[w] &&
        f.wowBook.support[w] !== w &&
        !f.cssHooks[w] &&
        (f.cssHooks[w] = {
          get: function (K, C, M) {
            return f.css(K, f.wowBook.support[w]);
          },
          set: function (K, C) {
            K.style[f.wowBook.support[w]] = C;
          },
        });
    });
    f.wowBook.applyAlphaImageLoader = function (B) {
      var w,
        K,
        C = "",
        M = f("<div style='display:none'></div>").appendTo("body");
      var I = 0;
      for (K = B.length; I < K; I++) {
        var O = B[I];
        M.addClass(O);
        if ((w = M.css("background-image").match(/^url\("(.*)"\)$/)))
          (C +=
            "." +
            O +
            "{background:none; filter : progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
            w[1] +
            "', sizingMethod='scale'); } "),
            M.removeClass(O);
      }
      f("body").append("<style>" + C + "</style>");
    };
  } else alert("jQuery 1.4.3+ is needed for this plugin to work");
})(jQuery);
