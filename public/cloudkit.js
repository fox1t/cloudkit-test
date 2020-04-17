/*!
 *     IMPORTANT NOTE:
 *     This file is licensed only for use to Apple developers in providing CloudKit Web Services,
 *     or any part thereof, and is subject to the iCloud Terms and Conditions and the Apple Developer
 *     Program License Agreement. You may not port this file to another platform inconsistent with the
 *     iCloud Terms and Conditions, the Apple Developer Program License Agreement, or the accompanying
 *     Documentation without Apple's written consent.
 *
 *     ACKNOWLEDGEMENTS:
 *     https://cdn.apple-cloudkit.com/ck/2/acknowledgements.txt
 */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('crypto'), require('fs')))
    : 'function' == typeof define && define.amd
    ? define(['crypto', 'fs'], t)
    : 'object' == typeof exports
    ? (exports.CloudKit = t(require('crypto'), require('fs')))
    : (e.CloudKit = t(e.crypto, e.fs))
})(this, function (e, t) {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports
      var i = (n[r] = { exports: {}, id: r, loaded: !1 })
      return e[r].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports
    }
    var n = {}
    return (t.m = e), (t.c = n), (t.p = ''), t(0)
  })([
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i = n(1),
        o = r(i),
        u = n(226),
        a = r(u),
        s = n(195),
        f = r(s),
        c = n(112),
        l = r(c),
        d = n(228),
        h = r(d),
        p = n(85),
        v = r(p),
        _ = n(290),
        y = r(_),
        g = n(263),
        m = r(g),
        k = n(305),
        b = r(k),
        E = n(306),
        N = r(E),
        O = n(307),
        I = r(O),
        w = n(308),
        S = r(w),
        A = n(309),
        R = r(A),
        T = n(268),
        L = r(T),
        C = n(310),
        x = r(C),
        M = n(303),
        U = r(M),
        P = null,
        D = {
          configure: function (e) {
            if (v['default'].isNullOrUndefined(e))
              throw a['default'].makeConfigurationError('A configuration object is required')
            return (P = new o['default']({ config: e }))
          },
          getDefaultContainer: function () {
            if (!P) throw a['default'].makeConfigurationError('Please configure CloudKit')
            return P.getDefaultContainer()
          },
          getAllContainers: function () {
            if (!P) throw a['default'].makeConfigurationError('Please configure CloudKit')
            return P.getAllContainers()
          },
          getContainer: function (e) {
            if (!P) throw a['default'].makeConfigurationError('Please configure CloudKit')
            return P.getContainer(e)
          },
          PRODUCTION_ENVIRONMENT: f['default'].PRODUCTION_ENVIRONMENT,
          DEVELOPMENT_ENVIRONMENT: f['default'].DEVELOPMENT_ENVIRONMENT,
          DatabaseScope: m['default'],
          QueryFilterComparator: b['default'],
          ReferenceAction: N['default'],
          SubscriptionType: I['default'],
          ShareRecordType: S['default'],
          ShareParticipantPermission: R['default'],
          ShareParticipantAcceptanceStatus: x['default'],
          ShareParticipantType: L['default'],
          AppleIDButtonTheme: U['default'],
          BUILD_VERSION: f['default'].BUILD_VERSION,
          VERSION: f['default'].VERSION,
          CKError: a['default'],
          get Promise() {
            return l['default'].Promise
          },
          CLOUDKIT_LOADED: f['default'].CLOUDKIT_LOADED,
          fetch: function (e, t) {
            return h['default'].fetch(e, t)
          },
          WS_API_VERSION: f['default'].WS_API_VERSION,
          logToConsole: !!v['default'].getQueryParam('CloudKit.logToConsole'),
          parseRawNotification: y['default'].parseRawNotification,
        }
      if ('undefined' != typeof window && 'undefined' != typeof document) {
        var j = 'document',
          Q = window[j],
          B = Q.createEvent('Event')
        B.initEvent(f['default'].CLOUDKIT_LOADED, !0, !0),
          setTimeout(function () {
            return Q.dispatchEvent(B)
          })
      }
      e.exports = D
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(2),
        o = r(i),
        u = n(41),
        a = r(u),
        s = n(80),
        f = r(s),
        c = n(81),
        l = r(c),
        d = n(85),
        h = r(d),
        p = n(194),
        v = r(p),
        _ = n(259),
        y = r(_),
        g = n(226),
        m = r(g),
        k = n(229),
        b = r(k),
        E = n(228),
        N = r(E),
        O = n(112),
        I = r(O),
        w = (function () {
          function e(t) {
            var n = t.config,
              r = n.containers,
              i = n.services,
              u = void 0 === i ? {} : i,
              s = n.locale
            if (((0, f['default'])(this, e), !h['default'].isArray(r)))
              throw m['default'].makeConfigurationError('config.containers must be an array')
            if (h['default'].isNode() && h['default'].isNullOrUndefined(u.fetch))
              throw m['default'].makeConfigurationError(
                'Please provide an implementation of whatwg fetch via services.fetch',
              )
            b['default'].setDelegate(u.logger),
              (I['default'].Promise = u.Promise || a['default']),
              N['default'].setDelegate(u.fetch)
            var c = new v['default'](),
              l = u.authTokenStore,
              d = h['default'].createUUID()
            this._containers = r
              .map(function (e) {
                return (0, o['default'])({}, e, { locale: s, clientID: e.clientID || d })
              })
              .map(function (e) {
                return new y['default']({ containerConfig: e, authTokenStore: l, apnsManager: c })
              })
          }
          return (
            (0, l['default'])(e, [
              {
                key: 'getDefaultContainer',
                value: function () {
                  return this._containers[0]
                },
              },
              {
                key: 'getContainer',
                value: function (e) {
                  return h['default'].find(this._containers, function (t) {
                    return t.containerIdentifier === e
                  })
                },
              },
              {
                key: 'getAllContainers',
                value: function () {
                  return this._containers
                },
              },
            ]),
            e
          )
        })()
      t['default'] = w
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(3),
        o = r(i)
      t['default'] =
        o['default'] ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }
    },
    function (e, t, n) {
      e.exports = { default: n(4), __esModule: !0 }
    },
    function (e, t, n) {
      n(5), (e.exports = n(8).Object.assign)
    },
    function (e, t, n) {
      var r = n(6)
      r(r.S + r.F, 'Object', { assign: n(22) })
    },
    function (e, t, n) {
      var r = n(7),
        i = n(8),
        o = n(9),
        u = n(11),
        a = n(21),
        s = 'prototype',
        f = function (e, t, n) {
          var c,
            l,
            d,
            h = e & f.F,
            p = e & f.G,
            v = e & f.S,
            _ = e & f.P,
            y = e & f.B,
            g = e & f.W,
            m = p ? i : i[t] || (i[t] = {}),
            k = m[s],
            b = p ? r : v ? r[t] : (r[t] || {})[s]
          p && (n = t)
          for (c in n)
            (l = !h && b && void 0 !== b[c]),
              (l && a(m, c)) ||
                ((d = l ? b[c] : n[c]),
                (m[c] =
                  p && 'function' != typeof b[c]
                    ? n[c]
                    : y && l
                    ? o(d, r)
                    : g && b[c] == d
                    ? (function (e) {
                        var t = function (t, n, r) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e()
                              case 1:
                                return new e(t)
                              case 2:
                                return new e(t, n)
                            }
                            return new e(t, n, r)
                          }
                          return e.apply(this, arguments)
                        }
                        return (t[s] = e[s]), t
                      })(d)
                    : _ && 'function' == typeof d
                    ? o(Function.call, d)
                    : d),
                _ &&
                  (((m.virtual || (m.virtual = {}))[c] = d), e & f.R && k && !k[c] && u(k, c, d)))
        }
      ;(f.F = 1),
        (f.G = 2),
        (f.S = 4),
        (f.P = 8),
        (f.B = 16),
        (f.W = 32),
        (f.U = 64),
        (f.R = 128),
        (e.exports = f)
    },
    function (e, t) {
      var n = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')())
      'number' == typeof __g && (__g = n)
    },
    function (e, t) {
      var n = (e.exports = { version: '2.5.7' })
      'number' == typeof __e && (__e = n)
    },
    function (e, t, n) {
      var r = n(10)
      e.exports = function (e, t, n) {
        if ((r(e), void 0 === t)) return e
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n)
            }
          case 2:
            return function (n, r) {
              return e.call(t, n, r)
            }
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      }
    },
    function (e, t) {
      e.exports = function (e) {
        if ('function' != typeof e) throw TypeError(e + ' is not a function!')
        return e
      }
    },
    function (e, t, n) {
      var r = n(12),
        i = n(20)
      e.exports = n(16)
        ? function (e, t, n) {
            return r.f(e, t, i(1, n))
          }
        : function (e, t, n) {
            return (e[t] = n), e
          }
    },
    function (e, t, n) {
      var r = n(13),
        i = n(15),
        o = n(19),
        u = Object.defineProperty
      t.f = n(16)
        ? Object.defineProperty
        : function (e, t, n) {
            if ((r(e), (t = o(t, !0)), r(n), i))
              try {
                return u(e, t, n)
              } catch (a) {}
            if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!')
            return 'value' in n && (e[t] = n.value), e
          }
    },
    function (e, t, n) {
      var r = n(14)
      e.exports = function (e) {
        if (!r(e)) throw TypeError(e + ' is not an object!')
        return e
      }
    },
    function (e, t) {
      e.exports = function (e) {
        return 'object' == typeof e ? null !== e : 'function' == typeof e
      }
    },
    function (e, t, n) {
      e.exports =
        !n(16) &&
        !n(17)(function () {
          return (
            7 !=
            Object.defineProperty(n(18)('div'), 'a', {
              get: function () {
                return 7
              },
            }).a
          )
        })
    },
    function (e, t, n) {
      e.exports = !n(17)(function () {
        return (
          7 !=
          Object.defineProperty({}, 'a', {
            get: function () {
              return 7
            },
          }).a
        )
      })
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return !!e()
        } catch (t) {
          return !0
        }
      }
    },
    function (e, t, n) {
      var r = n(14),
        i = n(7).document,
        o = r(i) && r(i.createElement)
      e.exports = function (e) {
        return o ? i.createElement(e) : {}
      }
    },
    function (e, t, n) {
      var r = n(14)
      e.exports = function (e, t) {
        if (!r(e)) return e
        var n, i
        if (t && 'function' == typeof (n = e.toString) && !r((i = n.call(e)))) return i
        if ('function' == typeof (n = e.valueOf) && !r((i = n.call(e)))) return i
        if (!t && 'function' == typeof (n = e.toString) && !r((i = n.call(e)))) return i
        throw TypeError("Can't convert object to primitive value")
      }
    },
    function (e, t) {
      e.exports = function (e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
      }
    },
    function (e, t) {
      var n = {}.hasOwnProperty
      e.exports = function (e, t) {
        return n.call(e, t)
      }
    },
    function (e, t, n) {
      'use strict'
      var r = n(23),
        i = n(38),
        o = n(39),
        u = n(40),
        a = n(26),
        s = Object.assign
      e.exports =
        !s ||
        n(17)(function () {
          var e = {},
            t = {},
            n = Symbol(),
            r = 'abcdefghijklmnopqrst'
          return (
            (e[n] = 7),
            r.split('').forEach(function (e) {
              t[e] = e
            }),
            7 != s({}, e)[n] || Object.keys(s({}, t)).join('') != r
          )
        })
          ? function (e, t) {
              for (var n = u(e), s = arguments.length, f = 1, c = i.f, l = o.f; s > f; )
                for (
                  var d,
                    h = a(arguments[f++]),
                    p = c ? r(h).concat(c(h)) : r(h),
                    v = p.length,
                    _ = 0;
                  v > _;

                )
                  l.call(h, (d = p[_++])) && (n[d] = h[d])
              return n
            }
          : s
    },
    function (e, t, n) {
      var r = n(24),
        i = n(37)
      e.exports =
        Object.keys ||
        function (e) {
          return r(e, i)
        }
    },
    function (e, t, n) {
      var r = n(21),
        i = n(25),
        o = n(29)(!1),
        u = n(33)('IE_PROTO')
      e.exports = function (e, t) {
        var n,
          a = i(e),
          s = 0,
          f = []
        for (n in a) n != u && r(a, n) && f.push(n)
        for (; t.length > s; ) r(a, (n = t[s++])) && (~o(f, n) || f.push(n))
        return f
      }
    },
    function (e, t, n) {
      var r = n(26),
        i = n(28)
      e.exports = function (e) {
        return r(i(e))
      }
    },
    function (e, t, n) {
      var r = n(27)
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function (e) {
            return 'String' == r(e) ? e.split('') : Object(e)
          }
    },
    function (e, t) {
      var n = {}.toString
      e.exports = function (e) {
        return n.call(e).slice(8, -1)
      }
    },
    function (e, t) {
      e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e)
        return e
      }
    },
    function (e, t, n) {
      var r = n(25),
        i = n(30),
        o = n(32)
      e.exports = function (e) {
        return function (t, n, u) {
          var a,
            s = r(t),
            f = i(s.length),
            c = o(u, f)
          if (e && n != n) {
            for (; f > c; ) if (((a = s[c++]), a != a)) return !0
          } else for (; f > c; c++) if ((e || c in s) && s[c] === n) return e || c || 0
          return !e && -1
        }
      }
    },
    function (e, t, n) {
      var r = n(31),
        i = Math.min
      e.exports = function (e) {
        return e > 0 ? i(r(e), 9007199254740991) : 0
      }
    },
    function (e, t) {
      var n = Math.ceil,
        r = Math.floor
      e.exports = function (e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e)
      }
    },
    function (e, t, n) {
      var r = n(31),
        i = Math.max,
        o = Math.min
      e.exports = function (e, t) {
        return (e = r(e)), e < 0 ? i(e + t, 0) : o(e, t)
      }
    },
    function (e, t, n) {
      var r = n(34)('keys'),
        i = n(36)
      e.exports = function (e) {
        return r[e] || (r[e] = i(e))
      }
    },
    function (e, t, n) {
      var r = n(8),
        i = n(7),
        o = '__core-js_shared__',
        u = i[o] || (i[o] = {})
      ;(e.exports = function (e, t) {
        return u[e] || (u[e] = void 0 !== t ? t : {})
      })('versions', []).push({
        version: r.version,
        mode: n(35) ? 'pure' : 'global',
        copyright: 'Â© 2018 Denis Pushkarev (zloirock.ru)',
      })
    },
    function (e, t) {
      e.exports = !0
    },
    function (e, t) {
      var n = 0,
        r = Math.random()
      e.exports = function (e) {
        return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36))
      }
    },
    function (e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ',',
      )
    },
    function (e, t) {
      t.f = Object.getOwnPropertySymbols
    },
    function (e, t) {
      t.f = {}.propertyIsEnumerable
    },
    function (e, t, n) {
      var r = n(28)
      e.exports = function (e) {
        return Object(r(e))
      }
    },
    function (e, t, n) {
      e.exports = { default: n(42), __esModule: !0 }
    },
    function (e, t, n) {
      n(43), n(44), n(56), n(60), n(78), n(79), (e.exports = n(8).Promise)
    },
    function (e, t) {},
    function (e, t, n) {
      'use strict'
      var r = n(45)(!0)
      n(46)(
        String,
        'String',
        function (e) {
          ;(this._t = String(e)), (this._i = 0)
        },
        function () {
          var e,
            t = this._t,
            n = this._i
          return n >= t.length
            ? { value: void 0, done: !0 }
            : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 })
        },
      )
    },
    function (e, t, n) {
      var r = n(31),
        i = n(28)
      e.exports = function (e) {
        return function (t, n) {
          var o,
            u,
            a = String(i(t)),
            s = r(n),
            f = a.length
          return s < 0 || s >= f
            ? e
              ? ''
              : void 0
            : ((o = a.charCodeAt(s)),
              o < 55296 ||
              o > 56319 ||
              s + 1 === f ||
              (u = a.charCodeAt(s + 1)) < 56320 ||
              u > 57343
                ? e
                  ? a.charAt(s)
                  : o
                : e
                ? a.slice(s, s + 2)
                : ((o - 55296) << 10) + (u - 56320) + 65536)
        }
      }
    },
    function (e, t, n) {
      'use strict'
      var r = n(35),
        i = n(6),
        o = n(47),
        u = n(11),
        a = n(48),
        s = n(49),
        f = n(53),
        c = n(55),
        l = n(54)('iterator'),
        d = !([].keys && 'next' in [].keys()),
        h = '@@iterator',
        p = 'keys',
        v = 'values',
        _ = function () {
          return this
        }
      e.exports = function (e, t, n, y, g, m, k) {
        s(n, t, y)
        var b,
          E,
          N,
          O = function (e) {
            if (!d && e in A) return A[e]
            switch (e) {
              case p:
                return function () {
                  return new n(this, e)
                }
              case v:
                return function () {
                  return new n(this, e)
                }
            }
            return function () {
              return new n(this, e)
            }
          },
          I = t + ' Iterator',
          w = g == v,
          S = !1,
          A = e.prototype,
          R = A[l] || A[h] || (g && A[g]),
          T = R || O(g),
          L = g ? (w ? O('entries') : T) : void 0,
          C = 'Array' == t ? A.entries || R : R
        if (
          (C &&
            ((N = c(C.call(new e()))),
            N !== Object.prototype &&
              N.next &&
              (f(N, I, !0), r || 'function' == typeof N[l] || u(N, l, _))),
          w &&
            R &&
            R.name !== v &&
            ((S = !0),
            (T = function () {
              return R.call(this)
            })),
          (r && !k) || (!d && !S && A[l]) || u(A, l, T),
          (a[t] = T),
          (a[I] = _),
          g)
        )
          if (((b = { values: w ? T : O(v), keys: m ? T : O(p), entries: L }), k))
            for (E in b) E in A || o(A, E, b[E])
          else i(i.P + i.F * (d || S), t, b)
        return b
      }
    },
    function (e, t, n) {
      e.exports = n(11)
    },
    function (e, t) {
      e.exports = {}
    },
    function (e, t, n) {
      'use strict'
      var r = n(50),
        i = n(20),
        o = n(53),
        u = {}
      n(11)(u, n(54)('iterator'), function () {
        return this
      }),
        (e.exports = function (e, t, n) {
          ;(e.prototype = r(u, { next: i(1, n) })), o(e, t + ' Iterator')
        })
    },
    function (e, t, n) {
      var r = n(13),
        i = n(51),
        o = n(37),
        u = n(33)('IE_PROTO'),
        a = function () {},
        s = 'prototype',
        f = function () {
          var e,
            t = n(18)('iframe'),
            r = o.length,
            i = '<',
            u = '>'
          for (
            t.style.display = 'none',
              n(52).appendChild(t),
              t.src = 'javascript:',
              e = t.contentWindow.document,
              e.open(),
              e.write(i + 'script' + u + 'document.F=Object' + i + '/script' + u),
              e.close(),
              f = e.F;
            r--;

          )
            delete f[s][o[r]]
          return f()
        }
      e.exports =
        Object.create ||
        function (e, t) {
          var n
          return (
            null !== e ? ((a[s] = r(e)), (n = new a()), (a[s] = null), (n[u] = e)) : (n = f()),
            void 0 === t ? n : i(n, t)
          )
        }
    },
    function (e, t, n) {
      var r = n(12),
        i = n(13),
        o = n(23)
      e.exports = n(16)
        ? Object.defineProperties
        : function (e, t) {
            i(e)
            for (var n, u = o(t), a = u.length, s = 0; a > s; ) r.f(e, (n = u[s++]), t[n])
            return e
          }
    },
    function (e, t, n) {
      var r = n(7).document
      e.exports = r && r.documentElement
    },
    function (e, t, n) {
      var r = n(12).f,
        i = n(21),
        o = n(54)('toStringTag')
      e.exports = function (e, t, n) {
        e && !i((e = n ? e : e.prototype), o) && r(e, o, { configurable: !0, value: t })
      }
    },
    function (e, t, n) {
      var r = n(34)('wks'),
        i = n(36),
        o = n(7).Symbol,
        u = 'function' == typeof o,
        a = (e.exports = function (e) {
          return r[e] || (r[e] = (u && o[e]) || (u ? o : i)('Symbol.' + e))
        })
      a.store = r
    },
    function (e, t, n) {
      var r = n(21),
        i = n(40),
        o = n(33)('IE_PROTO'),
        u = Object.prototype
      e.exports =
        Object.getPrototypeOf ||
        function (e) {
          return (
            (e = i(e)),
            r(e, o)
              ? e[o]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? u
              : null
          )
        }
    },
    function (e, t, n) {
      n(57)
      for (
        var r = n(7),
          i = n(11),
          o = n(48),
          u = n(54)('toStringTag'),
          a = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ',',
          ),
          s = 0;
        s < a.length;
        s++
      ) {
        var f = a[s],
          c = r[f],
          l = c && c.prototype
        l && !l[u] && i(l, u, f), (o[f] = o.Array)
      }
    },
    function (e, t, n) {
      'use strict'
      var r = n(58),
        i = n(59),
        o = n(48),
        u = n(25)
      ;(e.exports = n(46)(
        Array,
        'Array',
        function (e, t) {
          ;(this._t = u(e)), (this._i = 0), (this._k = t)
        },
        function () {
          var e = this._t,
            t = this._k,
            n = this._i++
          return !e || n >= e.length
            ? ((this._t = void 0), i(1))
            : 'keys' == t
            ? i(0, n)
            : 'values' == t
            ? i(0, e[n])
            : i(0, [n, e[n]])
        },
        'values',
      )),
        (o.Arguments = o.Array),
        r('keys'),
        r('values'),
        r('entries')
    },
    function (e, t) {
      e.exports = function () {}
    },
    function (e, t) {
      e.exports = function (e, t) {
        return { value: t, done: !!e }
      }
    },
    function (e, t, n) {
      'use strict'
      var r,
        i,
        o,
        u,
        a = n(35),
        s = n(7),
        f = n(9),
        c = n(61),
        l = n(6),
        d = n(14),
        h = n(10),
        p = n(62),
        v = n(63),
        _ = n(67),
        y = n(68).set,
        g = n(70)(),
        m = n(71),
        k = n(72),
        b = n(73),
        E = n(74),
        N = 'Promise',
        O = s.TypeError,
        I = s.process,
        w = I && I.versions,
        S = (w && w.v8) || '',
        A = s[N],
        R = 'process' == c(I),
        T = function () {},
        L = (i = m.f),
        C = !!(function () {
          try {
            var e = A.resolve(1),
              t = ((e.constructor = {})[n(54)('species')] = function (e) {
                e(T, T)
              })
            return (
              (R || 'function' == typeof PromiseRejectionEvent) &&
              e.then(T) instanceof t &&
              0 !== S.indexOf('6.6') &&
              b.indexOf('Chrome/66') === -1
            )
          } catch (r) {}
        })(),
        x = function (e) {
          var t
          return !(!d(e) || 'function' != typeof (t = e.then)) && t
        },
        M = function (e, t) {
          if (!e._n) {
            e._n = !0
            var n = e._c
            g(function () {
              for (
                var r = e._v,
                  i = 1 == e._s,
                  o = 0,
                  u = function (t) {
                    var n,
                      o,
                      u,
                      a = i ? t.ok : t.fail,
                      s = t.resolve,
                      f = t.reject,
                      c = t.domain
                    try {
                      a
                        ? (i || (2 == e._h && D(e), (e._h = 1)),
                          a === !0
                            ? (n = r)
                            : (c && c.enter(), (n = a(r)), c && (c.exit(), (u = !0))),
                          n === t.promise
                            ? f(O('Promise-chain cycle'))
                            : (o = x(n))
                            ? o.call(n, s, f)
                            : s(n))
                        : f(r)
                    } catch (l) {
                      c && !u && c.exit(), f(l)
                    }
                  };
                n.length > o;

              )
                u(n[o++])
              ;(e._c = []), (e._n = !1), t && !e._h && U(e)
            })
          }
        },
        U = function (e) {
          y.call(s, function () {
            var t,
              n,
              r,
              i = e._v,
              o = P(e)
            if (
              (o &&
                ((t = k(function () {
                  R
                    ? I.emit('unhandledRejection', i, e)
                    : (n = s.onunhandledrejection)
                    ? n({ promise: e, reason: i })
                    : (r = s.console) && r.error && r.error('Unhandled promise rejection', i)
                })),
                (e._h = R || P(e) ? 2 : 1)),
              (e._a = void 0),
              o && t.e)
            )
              throw t.v
          })
        },
        P = function (e) {
          return 1 !== e._h && 0 === (e._a || e._c).length
        },
        D = function (e) {
          y.call(s, function () {
            var t
            R
              ? I.emit('rejectionHandled', e)
              : (t = s.onrejectionhandled) && t({ promise: e, reason: e._v })
          })
        },
        j = function (e) {
          var t = this
          t._d ||
            ((t._d = !0),
            (t = t._w || t),
            (t._v = e),
            (t._s = 2),
            t._a || (t._a = t._c.slice()),
            M(t, !0))
        },
        Q = function (e) {
          var t,
            n = this
          if (!n._d) {
            ;(n._d = !0), (n = n._w || n)
            try {
              if (n === e) throw O("Promise can't be resolved itself")
              ;(t = x(e))
                ? g(function () {
                    var r = { _w: n, _d: !1 }
                    try {
                      t.call(e, f(Q, r, 1), f(j, r, 1))
                    } catch (i) {
                      j.call(r, i)
                    }
                  })
                : ((n._v = e), (n._s = 1), M(n, !1))
            } catch (r) {
              j.call({ _w: n, _d: !1 }, r)
            }
          }
        }
      C ||
        ((A = function (e) {
          p(this, A, N, '_h'), h(e), r.call(this)
          try {
            e(f(Q, this, 1), f(j, this, 1))
          } catch (t) {
            j.call(this, t)
          }
        }),
        (r = function (e) {
          ;(this._c = []),
            (this._a = void 0),
            (this._s = 0),
            (this._d = !1),
            (this._v = void 0),
            (this._h = 0),
            (this._n = !1)
        }),
        (r.prototype = n(75)(A.prototype, {
          then: function (e, t) {
            var n = L(_(this, A))
            return (
              (n.ok = 'function' != typeof e || e),
              (n.fail = 'function' == typeof t && t),
              (n.domain = R ? I.domain : void 0),
              this._c.push(n),
              this._a && this._a.push(n),
              this._s && M(this, !1),
              n.promise
            )
          },
          catch: function (e) {
            return this.then(void 0, e)
          },
        })),
        (o = function () {
          var e = new r()
          ;(this.promise = e), (this.resolve = f(Q, e, 1)), (this.reject = f(j, e, 1))
        }),
        (m.f = L = function (e) {
          return e === A || e === u ? new o(e) : i(e)
        })),
        l(l.G + l.W + l.F * !C, { Promise: A }),
        n(53)(A, N),
        n(76)(N),
        (u = n(8)[N]),
        l(l.S + l.F * !C, N, {
          reject: function (e) {
            var t = L(this),
              n = t.reject
            return n(e), t.promise
          },
        }),
        l(l.S + l.F * (a || !C), N, {
          resolve: function (e) {
            return E(a && this === u ? A : this, e)
          },
        }),
        l(
          l.S +
            l.F *
              !(
                C &&
                n(77)(function (e) {
                  A.all(e)['catch'](T)
                })
              ),
          N,
          {
            all: function (e) {
              var t = this,
                n = L(t),
                r = n.resolve,
                i = n.reject,
                o = k(function () {
                  var n = [],
                    o = 0,
                    u = 1
                  v(e, !1, function (e) {
                    var a = o++,
                      s = !1
                    n.push(void 0),
                      u++,
                      t.resolve(e).then(function (e) {
                        s || ((s = !0), (n[a] = e), --u || r(n))
                      }, i)
                  }),
                    --u || r(n)
                })
              return o.e && i(o.v), n.promise
            },
            race: function (e) {
              var t = this,
                n = L(t),
                r = n.reject,
                i = k(function () {
                  v(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r)
                  })
                })
              return i.e && r(i.v), n.promise
            },
          },
        )
    },
    function (e, t, n) {
      var r = n(27),
        i = n(54)('toStringTag'),
        o =
          'Arguments' ==
          r(
            (function () {
              return arguments
            })(),
          ),
        u = function (e, t) {
          try {
            return e[t]
          } catch (n) {}
        }
      e.exports = function (e) {
        var t, n, a
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' == typeof (n = u((t = Object(e)), i))
          ? n
          : o
          ? r(t)
          : 'Object' == (a = r(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : a
      }
    },
    function (e, t) {
      e.exports = function (e, t, n, r) {
        if (!(e instanceof t) || (void 0 !== r && r in e))
          throw TypeError(n + ': incorrect invocation!')
        return e
      }
    },
    function (e, t, n) {
      var r = n(9),
        i = n(64),
        o = n(65),
        u = n(13),
        a = n(30),
        s = n(66),
        f = {},
        c = {},
        t = (e.exports = function (e, t, n, l, d) {
          var h,
            p,
            v,
            _,
            y = d
              ? function () {
                  return e
                }
              : s(e),
            g = r(n, l, t ? 2 : 1),
            m = 0
          if ('function' != typeof y) throw TypeError(e + ' is not iterable!')
          if (o(y)) {
            for (h = a(e.length); h > m; m++)
              if (((_ = t ? g(u((p = e[m]))[0], p[1]) : g(e[m])), _ === f || _ === c)) return _
          } else
            for (v = y.call(e); !(p = v.next()).done; )
              if (((_ = i(v, g, p.value, t)), _ === f || _ === c)) return _
        })
      ;(t.BREAK = f), (t.RETURN = c)
    },
    function (e, t, n) {
      var r = n(13)
      e.exports = function (e, t, n, i) {
        try {
          return i ? t(r(n)[0], n[1]) : t(n)
        } catch (o) {
          var u = e['return']
          throw (void 0 !== u && r(u.call(e)), o)
        }
      }
    },
    function (e, t, n) {
      var r = n(48),
        i = n(54)('iterator'),
        o = Array.prototype
      e.exports = function (e) {
        return void 0 !== e && (r.Array === e || o[i] === e)
      }
    },
    function (e, t, n) {
      var r = n(61),
        i = n(54)('iterator'),
        o = n(48)
      e.exports = n(8).getIteratorMethod = function (e) {
        if (void 0 != e) return e[i] || e['@@iterator'] || o[r(e)]
      }
    },
    function (e, t, n) {
      var r = n(13),
        i = n(10),
        o = n(54)('species')
      e.exports = function (e, t) {
        var n,
          u = r(e).constructor
        return void 0 === u || void 0 == (n = r(u)[o]) ? t : i(n)
      }
    },
    function (e, t, n) {
      var r,
        i,
        o,
        u = n(9),
        a = n(69),
        s = n(52),
        f = n(18),
        c = n(7),
        l = c.process,
        d = c.setImmediate,
        h = c.clearImmediate,
        p = c.MessageChannel,
        v = c.Dispatch,
        _ = 0,
        y = {},
        g = 'onreadystatechange',
        m = function () {
          var e = +this
          if (y.hasOwnProperty(e)) {
            var t = y[e]
            delete y[e], t()
          }
        },
        k = function (e) {
          m.call(e.data)
        }
      ;(d && h) ||
        ((d = function (e) {
          for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++])
          return (
            (y[++_] = function () {
              a('function' == typeof e ? e : Function(e), t)
            }),
            r(_),
            _
          )
        }),
        (h = function (e) {
          delete y[e]
        }),
        'process' == n(27)(l)
          ? (r = function (e) {
              l.nextTick(u(m, e, 1))
            })
          : v && v.now
          ? (r = function (e) {
              v.now(u(m, e, 1))
            })
          : p
          ? ((i = new p()), (o = i.port2), (i.port1.onmessage = k), (r = u(o.postMessage, o, 1)))
          : c.addEventListener && 'function' == typeof postMessage && !c.importScripts
          ? ((r = function (e) {
              c.postMessage(e + '', '*')
            }),
            c.addEventListener('message', k, !1))
          : (r =
              g in f('script')
                ? function (e) {
                    s.appendChild(f('script'))[g] = function () {
                      s.removeChild(this), m.call(e)
                    }
                  }
                : function (e) {
                    setTimeout(u(m, e, 1), 0)
                  })),
        (e.exports = { set: d, clear: h })
    },
    function (e, t) {
      e.exports = function (e, t, n) {
        var r = void 0 === n
        switch (t.length) {
          case 0:
            return r ? e() : e.call(n)
          case 1:
            return r ? e(t[0]) : e.call(n, t[0])
          case 2:
            return r ? e(t[0], t[1]) : e.call(n, t[0], t[1])
          case 3:
            return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2])
          case 4:
            return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
      }
    },
    function (e, t, n) {
      var r = n(7),
        i = n(68).set,
        o = r.MutationObserver || r.WebKitMutationObserver,
        u = r.process,
        a = r.Promise,
        s = 'process' == n(27)(u)
      e.exports = function () {
        var e,
          t,
          n,
          f = function () {
            var r, i
            for (s && (r = u.domain) && r.exit(); e; ) {
              ;(i = e.fn), (e = e.next)
              try {
                i()
              } catch (o) {
                throw (e ? n() : (t = void 0), o)
              }
            }
            ;(t = void 0), r && r.enter()
          }
        if (s)
          n = function () {
            u.nextTick(f)
          }
        else if (!o || (r.navigator && r.navigator.standalone))
          if (a && a.resolve) {
            var c = a.resolve(void 0)
            n = function () {
              c.then(f)
            }
          } else
            n = function () {
              i.call(r, f)
            }
        else {
          var l = !0,
            d = document.createTextNode('')
          new o(f).observe(d, { characterData: !0 }),
            (n = function () {
              d.data = l = !l
            })
        }
        return function (r) {
          var i = { fn: r, next: void 0 }
          t && (t.next = i), e || ((e = i), n()), (t = i)
        }
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        var t, n
        ;(this.promise = new e(function (e, r) {
          if (void 0 !== t || void 0 !== n) throw TypeError('Bad Promise constructor')
          ;(t = e), (n = r)
        })),
          (this.resolve = i(t)),
          (this.reject = i(n))
      }
      var i = n(10)
      e.exports.f = function (e) {
        return new r(e)
      }
    },
    function (e, t) {
      e.exports = function (e) {
        try {
          return { e: !1, v: e() }
        } catch (t) {
          return { e: !0, v: t }
        }
      }
    },
    function (e, t, n) {
      var r = n(7),
        i = r.navigator
      e.exports = (i && i.userAgent) || ''
    },
    function (e, t, n) {
      var r = n(13),
        i = n(14),
        o = n(71)
      e.exports = function (e, t) {
        if ((r(e), i(t) && t.constructor === e)) return t
        var n = o.f(e),
          u = n.resolve
        return u(t), n.promise
      }
    },
    function (e, t, n) {
      var r = n(11)
      e.exports = function (e, t, n) {
        for (var i in t) n && e[i] ? (e[i] = t[i]) : r(e, i, t[i])
        return e
      }
    },
    function (e, t, n) {
      'use strict'
      var r = n(7),
        i = n(8),
        o = n(12),
        u = n(16),
        a = n(54)('species')
      e.exports = function (e) {
        var t = 'function' == typeof i[e] ? i[e] : r[e]
        u &&
          t &&
          !t[a] &&
          o.f(t, a, {
            configurable: !0,
            get: function () {
              return this
            },
          })
      }
    },
    function (e, t, n) {
      var r = n(54)('iterator'),
        i = !1
      try {
        var o = [7][r]()
        ;(o['return'] = function () {
          i = !0
        }),
          Array.from(o, function () {
            throw 2
          })
      } catch (u) {}
      e.exports = function (e, t) {
        if (!t && !i) return !1
        var n = !1
        try {
          var o = [7],
            u = o[r]()
          ;(u.next = function () {
            return { done: n = !0 }
          }),
            (o[r] = function () {
              return u
            }),
            e(o)
        } catch (a) {}
        return n
      }
    },
    function (e, t, n) {
      'use strict'
      var r = n(6),
        i = n(8),
        o = n(7),
        u = n(67),
        a = n(74)
      r(r.P + r.R, 'Promise', {
        finally: function (e) {
          var t = u(this, i.Promise || o.Promise),
            n = 'function' == typeof e
          return this.then(
            n
              ? function (n) {
                  return a(t, e()).then(function () {
                    return n
                  })
                }
              : e,
            n
              ? function (n) {
                  return a(t, e()).then(function () {
                    throw n
                  })
                }
              : e,
          )
        },
      })
    },
    function (e, t, n) {
      'use strict'
      var r = n(6),
        i = n(71),
        o = n(72)
      r(r.S, 'Promise', {
        try: function (e) {
          var t = i.f(this),
            n = o(e)
          return (n.e ? t.reject : t.resolve)(n.v), t.promise
        },
      })
    },
    function (e, t) {
      'use strict'
      ;(t.__esModule = !0),
        (t['default'] = function (e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        })
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(82),
        o = r(i)
      t['default'] = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              (0, o['default'])(e, r.key, r)
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t
        }
      })()
    },
    function (e, t, n) {
      e.exports = { default: n(83), __esModule: !0 }
    },
    function (e, t, n) {
      n(84)
      var r = n(8).Object
      e.exports = function (e, t, n) {
        return r.defineProperty(e, t, n)
      }
    },
    function (e, t, n) {
      var r = n(6)
      r(r.S + r.F * !n(16), 'Object', { defineProperty: n(12).f })
    },
    function (e, t, n) {
      ;(function (e) {
        'use strict'
        function r(e) {
          return e && e.__esModule ? e : { default: e }
        }
        function i(e) {
          return (0, W['default'])(e) || (0, V['default'])(e)
        }
        function o(e) {
          return (0, J['default'])(e) && e.every($['default'])
        }
        function u(e) {
          return Number(e) === e && e % 1 === 0
        }
        function a(e) {
          return !(0, F['default'])(Number(e))
        }
        function s() {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
          return function (e) {
            return (0, ae['default'])(e, [].concat(t))
          }
        }
        function f(e) {
          return (0, J['default'])(e) ? e : [e]
        }
        function c(e, t) {
          if (i(e)) throw new Error(t)
        }
        function l() {
          return 'undefined' == typeof window
        }
        function d(e) {
          return l() ? e.toString() : e
        }
        function h() {
          try {
            return (
              navigator.userAgent.indexOf('Trident') > 0 || navigator.userAgent.indexOf('MSIE') > 0
            )
          } catch (e) {}
        }
        function p(e, t, n) {
          if (h()) {
            var r = window.open(window.location.href, '', 'width=' + t + ', height=' + n)
            r.location.href = e
          } else window.open(e, '', 'width=' + t + ', height=' + n)
        }
        function v(e, t, n) {
          var r = K['default'].defer(),
            i = function (e) {
              ;(0, te['default'])(e.data) && r.resolve(e)
            }
          return (
            window.addEventListener('message', i, !1),
            p(e, t, n),
            r.promise.then(function (e) {
              return window.removeEventListener('message', i), e
            })
          )
        }
        function _(e) {
          var t = (0, Q['default'])(e)
          if (t === (0, Q['default'])({})) return []
          var n = _(t)
          return (
            (0, D['default'])(t).forEach(function (e) {
              return n.push(e)
            }),
            n
          )
        }
        function y(e, t) {
          var n = _(t)
          n = n.sort().filter(function (e) {
            return !(0, re['default'])(t[e]) && e.indexOf('_') === -1
          })
          var r = ''
          return (
            (r += '[' + e),
            n.forEach(function (e) {
              var n = t[e]
              ;(r += '\n\t'),
                (r += (0, J['default'])(n) ? e + ': [' + n.length + ']' : e + ': ' + n)
            }),
            (r += '\n]')
          )
        }
        function g(e, t) {
          var n = 14,
            r = window.location.hostname,
            i = '',
            o = new Date()
          o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3), null === t && o.setTime(-1)
          var u = 'expires=' + o.toUTCString(),
            a = /\./.test(r) ? r : ''
          ;(i = 'path=' + i),
            (window.document.cookie = e + '=' + t + '; ' + u + '; ' + a + '; ' + i)
        }
        function m(e) {
          for (
            var t = e + '=', n = window.document.cookie.split(';'), r = null, i = 0;
            i < n.length;
            i++
          ) {
            for (var o = n[i]; ' ' === o.charAt(0); ) o = o.substring(1)
            0 === o.indexOf(t) && (r = o.substring(t.length, o.length))
          }
          return r
        }
        function k() {
          try {
            var e = location.search.substr(1),
              t = {}
            return (
              e.split('&').forEach(function (e) {
                var n = e.split('=')
                t[n[0]] = decodeURIComponent(n[1])
              }),
              t
            )
          } catch (n) {
            return {}
          }
        }
        function b(e) {
          return k()[e]
        }
        function E(e) {
          return (0, U['default'])(e, function (e, t) {
            return (0, V['default'])(t) ? '<<undefined>>' : t
          })
        }
        function N(e) {
          return function (t) {
            return (0, x['default'])(e).every(function (n) {
              var r = e[n],
                o = !i(t[n])
              return (r && o) || (!r && !o)
            })
          }
        }
        function O(e) {
          return (0, L['default'])(e)
        }
        function I(e, t, n) {
          try {
            return e.apply(void 0, (0, R['default'])(t))
          } catch (r) {
            throw (console.error(n), r)
          }
        }
        function w(e, t, n, r) {
          if ((0, re['default'])(e[t])) return I(e[t].bind(e), n, 'Error calling ' + r + '.' + t)
        }
        function S() {
          return ge['default'].v4()
        }
        Object.defineProperty(t, '__esModule', { value: !0 })
        var A = n(86),
          R = r(A),
          T = n(91),
          L = r(T),
          C = n(95),
          x = r(C),
          M = n(99),
          U = r(M),
          P = n(101),
          D = r(P),
          j = n(106),
          Q = r(j),
          B = n(109),
          F = r(B),
          z = n(112),
          K = r(z),
          H = n(113),
          V = r(H),
          q = n(114),
          W = r(q),
          Z = n(115),
          G = r(Z),
          Y = n(117),
          J = r(Y),
          X = n(123),
          $ = r(X),
          ee = n(121),
          te = r(ee),
          ne = n(120),
          re = r(ne),
          ie = n(124),
          oe = r(ie),
          ue = n(149),
          ae = r(ue),
          se = n(156),
          fe = r(se),
          ce = n(163),
          le = r(ce),
          de = n(166),
          he = r(de),
          pe = n(188),
          ve = (r(pe), n(147)),
          _e = (r(ve), n(191)),
          ye = (r(_e), n(192)),
          ge = r(ye),
          me = (function () {
            return l() ? e.Buffer : null
          })()
        t['default'] = {
          isUndefined: V['default'],
          isNullOrUndefined: i,
          isInt: u,
          isArray: J['default'],
          isString: $['default'],
          isStringArray: o,
          isNumberish: a,
          isObject: te['default'],
          isBoolean: G['default'],
          isFunction: re['default'],
          has: fe['default'],
          pick: ae['default'],
          picker: s,
          makeObjectHasValuesForKeysPredicate: N,
          assertArg: c,
          assign: le['default'],
          clone: oe['default'],
          asArray: f,
          find: he['default'],
          values: O,
          tryInvokeFunction: I,
          tryInvokeMethod: w,
          stringifyExposingUndefined: E,
          instanceToString: y,
          isNode: l,
          getAsyncMessageFromPopup: v,
          prepareForUpload: d,
          setCookie: g,
          getCookie: m,
          Buffer: me,
          getQueryParam: b,
          createUUID: S,
        }
      }.call(
        t,
        (function () {
          return this
        })(),
      ))
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(87),
        o = r(i)
      t['default'] = function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
          return n
        }
        return (0, o['default'])(e)
      }
    },
    function (e, t, n) {
      e.exports = { default: n(88), __esModule: !0 }
    },
    function (e, t, n) {
      n(44), n(89), (e.exports = n(8).Array.from)
    },
    function (e, t, n) {
      'use strict'
      var r = n(9),
        i = n(6),
        o = n(40),
        u = n(64),
        a = n(65),
        s = n(30),
        f = n(90),
        c = n(66)
      i(
        i.S +
          i.F *
            !n(77)(function (e) {
              Array.from(e)
            }),
        'Array',
        {
          from: function (e) {
            var t,
              n,
              i,
              l,
              d = o(e),
              h = 'function' == typeof this ? this : Array,
              p = arguments.length,
              v = p > 1 ? arguments[1] : void 0,
              _ = void 0 !== v,
              y = 0,
              g = c(d)
            if (
              (_ && (v = r(v, p > 2 ? arguments[2] : void 0, 2)),
              void 0 == g || (h == Array && a(g)))
            )
              for (t = s(d.length), n = new h(t); t > y; y++) f(n, y, _ ? v(d[y], y) : d[y])
            else
              for (l = g.call(d), n = new h(); !(i = l.next()).done; y++)
                f(n, y, _ ? u(l, v, [i.value, y], !0) : i.value)
            return (n.length = y), n
          },
        },
      )
    },
    function (e, t, n) {
      'use strict'
      var r = n(12),
        i = n(20)
      e.exports = function (e, t, n) {
        t in e ? r.f(e, t, i(0, n)) : (e[t] = n)
      }
    },
    function (e, t, n) {
      e.exports = { default: n(92), __esModule: !0 }
    },
    function (e, t, n) {
      n(93), (e.exports = n(8).Object.values)
    },
    function (e, t, n) {
      var r = n(6),
        i = n(94)(!1)
      r(r.S, 'Object', {
        values: function (e) {
          return i(e)
        },
      })
    },
    function (e, t, n) {
      var r = n(23),
        i = n(25),
        o = n(39).f
      e.exports = function (e) {
        return function (t) {
          for (var n, u = i(t), a = r(u), s = a.length, f = 0, c = []; s > f; )
            o.call(u, (n = a[f++])) && c.push(e ? [n, u[n]] : u[n])
          return c
        }
      }
    },
    function (e, t, n) {
      e.exports = { default: n(96), __esModule: !0 }
    },
    function (e, t, n) {
      n(97), (e.exports = n(8).Object.keys)
    },
    function (e, t, n) {
      var r = n(40),
        i = n(23)
      n(98)('keys', function () {
        return function (e) {
          return i(r(e))
        }
      })
    },
    function (e, t, n) {
      var r = n(6),
        i = n(8),
        o = n(17)
      e.exports = function (e, t) {
        var n = (i.Object || {})[e] || Object[e],
          u = {}
        ;(u[e] = t(n)),
          r(
            r.S +
              r.F *
                o(function () {
                  n(1)
                }),
            'Object',
            u,
          )
      }
    },
    function (e, t, n) {
      e.exports = { default: n(100), __esModule: !0 }
    },
    function (e, t, n) {
      var r = n(8),
        i = r.JSON || (r.JSON = { stringify: JSON.stringify })
      e.exports = function (e) {
        return i.stringify.apply(i, arguments)
      }
    },
    function (e, t, n) {
      e.exports = { default: n(102), __esModule: !0 }
    },
    function (e, t, n) {
      n(103)
      var r = n(8).Object
      e.exports = function (e) {
        return r.getOwnPropertyNames(e)
      }
    },
    function (e, t, n) {
      n(98)('getOwnPropertyNames', function () {
        return n(104).f
      })
    },
    function (e, t, n) {
      var r = n(25),
        i = n(105).f,
        o = {}.toString,
        u =
          'object' == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        a = function (e) {
          try {
            return i(e)
          } catch (t) {
            return u.slice()
          }
        }
      e.exports.f = function (e) {
        return u && '[object Window]' == o.call(e) ? a(e) : i(r(e))
      }
    },
    function (e, t, n) {
      var r = n(24),
        i = n(37).concat('length', 'prototype')
      t.f =
        Object.getOwnPropertyNames ||
        function (e) {
          return r(e, i)
        }
    },
    function (e, t, n) {
      e.exports = { default: n(107), __esModule: !0 }
    },
    function (e, t, n) {
      n(108), (e.exports = n(8).Object.getPrototypeOf)
    },
    function (e, t, n) {
      var r = n(40),
        i = n(55)
      n(98)('getPrototypeOf', function () {
        return function (e) {
          return i(r(e))
        }
      })
    },
    function (e, t, n) {
      e.exports = { default: n(110), __esModule: !0 }
    },
    function (e, t, n) {
      n(111), (e.exports = n(8).Number.isNaN)
    },
    function (e, t, n) {
      var r = n(6)
      r(r.S, 'Number', {
        isNaN: function (e) {
          return e != e
        },
      })
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(41),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = (function () {
          function e() {
            ;(0, a['default'])(this, e),
              'undefined' != typeof o['default'] && (this.Promise = o['default'])
          }
          return (
            (0, f['default'])(e, [
              {
                key: 'wait',
                value: function (e) {
                  return new this.Promise(function (t, n) {
                    setTimeout(t, e)
                  })
                },
              },
              {
                key: 'waitOrFail',
                value: function (e, t, n) {
                  var r = null,
                    i = new this._Promise(function (e, i) {
                      var o = setTimeout(function () {
                        return i(n)
                      }, t)
                      r = function () {
                        return clearTimeout(o)
                      }
                    })
                  return e.then(r, r), this._Promise.race([e, i])
                },
              },
              {
                key: 'defer',
                value: function () {
                  var e = {},
                    t = new this.Promise(function (t, n) {
                      ;(e.resolve = t), (e.reject = n)
                    })
                  return (e.promise = t), e
                },
              },
              {
                key: 'Promise',
                set: function (e) {
                  this._Promise = e
                },
                get: function () {
                  return this._Promise
                },
              },
            ]),
            e
          )
        })(),
        l = new c()
      t['default'] = l
    },
    function (e, t) {
      function n(e) {
        return void 0 === e
      }
      e.exports = n
    },
    function (e, t) {
      function n(e) {
        return null === e
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e) {
        return e === !0 || e === !1 || (i(e) && a.call(e) == o)
      }
      var i = n(116),
        o = '[object Boolean]',
        u = Object.prototype,
        a = u.toString
      e.exports = r
    },
    function (e, t) {
      function n(e) {
        return !!e && 'object' == typeof e
      }
      e.exports = n
    },
    function (e, t, n) {
      var r = n(118),
        i = n(122),
        o = n(116),
        u = '[object Array]',
        a = Object.prototype,
        s = a.toString,
        f = r(Array, 'isArray'),
        c =
          f ||
          function (e) {
            return o(e) && i(e.length) && s.call(e) == u
          }
      e.exports = c
    },
    function (e, t, n) {
      function r(e, t) {
        var n = null == e ? void 0 : e[t]
        return i(n) ? n : void 0
      }
      var i = n(119)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return null != e && (i(e) ? c.test(s.call(e)) : o(e) && u.test(e))
      }
      var i = n(120),
        o = n(116),
        u = /^\[object .+?Constructor\]$/,
        a = Object.prototype,
        s = Function.prototype.toString,
        f = a.hasOwnProperty,
        c = RegExp(
          '^' +
            s
              .call(f)
              .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        )
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return i(e) && a.call(e) == o
      }
      var i = n(121),
        o = '[object Function]',
        u = Object.prototype,
        a = u.toString
      e.exports = r
    },
    function (e, t) {
      function n(e) {
        var t = typeof e
        return !!e && ('object' == t || 'function' == t)
      }
      e.exports = n
    },
    function (e, t) {
      function n(e) {
        return 'number' == typeof e && e > -1 && e % 1 == 0 && e <= r
      }
      var r = 9007199254740991
      e.exports = n
    },
    function (e, t, n) {
      function r(e) {
        return 'string' == typeof e || (i(e) && a.call(e) == o)
      }
      var i = n(116),
        o = '[object String]',
        u = Object.prototype,
        a = u.toString
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n, r) {
        return (
          t && 'boolean' != typeof t && u(e, t, n)
            ? (t = !1)
            : 'function' == typeof t && ((r = n), (n = t), (t = !1)),
          'function' == typeof n ? i(e, t, o(n, r, 3)) : i(e, t)
        )
      }
      var i = n(125),
        o = n(146),
        u = n(148)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n, p, v, _, y) {
        var m
        if ((n && (m = v ? n(e, p, v) : n(e)), void 0 !== m)) return m
        if (!d(e)) return e
        var k = l(e)
        if (k) {
          if (((m = s(e)), !t)) return i(e, m)
        } else {
          var E = j.call(e),
            N = E == g
          if (E != b && E != h && (!N || v)) return P[E] ? f(e, E, t) : v ? e : {}
          if (((m = c(N ? {} : e)), !t)) return u(m, e)
        }
        _ || (_ = []), y || (y = [])
        for (var O = _.length; O--; ) if (_[O] == e) return y[O]
        return (
          _.push(e),
          y.push(m),
          (k ? o : a)(e, function (i, o) {
            m[o] = r(i, t, n, o, e, _, y)
          }),
          m
        )
      }
      var i = n(126),
        o = n(127),
        u = n(128),
        a = n(138),
        s = n(142),
        f = n(143),
        c = n(145),
        l = n(117),
        d = n(121),
        h = '[object Arguments]',
        p = '[object Array]',
        v = '[object Boolean]',
        _ = '[object Date]',
        y = '[object Error]',
        g = '[object Function]',
        m = '[object Map]',
        k = '[object Number]',
        b = '[object Object]',
        E = '[object RegExp]',
        N = '[object Set]',
        O = '[object String]',
        I = '[object WeakMap]',
        w = '[object ArrayBuffer]',
        S = '[object Float32Array]',
        A = '[object Float64Array]',
        R = '[object Int8Array]',
        T = '[object Int16Array]',
        L = '[object Int32Array]',
        C = '[object Uint8Array]',
        x = '[object Uint8ClampedArray]',
        M = '[object Uint16Array]',
        U = '[object Uint32Array]',
        P = {}
      ;(P[h] = P[p] = P[w] = P[v] = P[_] = P[S] = P[A] = P[R] = P[T] = P[L] = P[k] = P[b] = P[
        E
      ] = P[O] = P[C] = P[x] = P[M] = P[U] = !0),
        (P[y] = P[g] = P[m] = P[N] = P[I] = !1)
      var D = Object.prototype,
        j = D.toString
      e.exports = r
    },
    function (e, t) {
      function n(e, t) {
        var n = -1,
          r = e.length
        for (t || (t = Array(r)); ++n < r; ) t[n] = e[n]
        return t
      }
      e.exports = n
    },
    function (e, t) {
      function n(e, t) {
        for (var n = -1, r = e.length; ++n < r && t(e[n], n, e) !== !1; );
        return e
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t) {
        return null == t ? e : i(t, o(t), e)
      }
      var i = n(129),
        o = n(130)
      e.exports = r
    },
    function (e, t) {
      function n(e, t, n) {
        n || (n = {})
        for (var r = -1, i = t.length; ++r < i; ) {
          var o = t[r]
          n[o] = e[o]
        }
        return n
      }
      e.exports = n
    },
    function (e, t, n) {
      var r = n(118),
        i = n(131),
        o = n(121),
        u = n(134),
        a = r(Object, 'keys'),
        s = a
          ? function (e) {
              var t = null == e ? void 0 : e.constructor
              return ('function' == typeof t && t.prototype === e) ||
                ('function' != typeof e && i(e))
                ? u(e)
                : o(e)
                ? a(e)
                : []
            }
          : u
      e.exports = s
    },
    function (e, t, n) {
      function r(e) {
        return null != e && o(i(e))
      }
      var i = n(132),
        o = n(122)
      e.exports = r
    },
    function (e, t, n) {
      var r = n(133),
        i = r('length')
      e.exports = i
    },
    function (e, t) {
      function n(e) {
        return function (t) {
          return null == t ? void 0 : t[e]
        }
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e) {
        for (
          var t = s(e),
            n = t.length,
            r = n && e.length,
            f = !!r && a(r) && (o(e) || i(e)),
            l = -1,
            d = [];
          ++l < n;

        ) {
          var h = t[l]
          ;((f && u(h, r)) || c.call(e, h)) && d.push(h)
        }
        return d
      }
      var i = n(135),
        o = n(117),
        u = n(136),
        a = n(122),
        s = n(137),
        f = Object.prototype,
        c = f.hasOwnProperty
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return o(e) && i(e) && a.call(e, 'callee') && !s.call(e, 'callee')
      }
      var i = n(131),
        o = n(116),
        u = Object.prototype,
        a = u.hasOwnProperty,
        s = u.propertyIsEnumerable
      e.exports = r
    },
    function (e, t) {
      function n(e, t) {
        return (
          (e = 'number' == typeof e || r.test(e) ? +e : -1),
          (t = null == t ? i : t),
          e > -1 && e % 1 == 0 && e < t
        )
      }
      var r = /^\d+$/,
        i = 9007199254740991
      e.exports = n
    },
    function (e, t, n) {
      function r(e) {
        if (null == e) return []
        s(e) || (e = Object(e))
        var t = e.length
        t = (t && a(t) && (o(e) || i(e)) && t) || 0
        for (
          var n = e.constructor,
            r = -1,
            f = 'function' == typeof n && n.prototype === e,
            l = Array(t),
            d = t > 0;
          ++r < t;

        )
          l[r] = r + ''
        for (var h in e) (d && u(h, t)) || ('constructor' == h && (f || !c.call(e, h))) || l.push(h)
        return l
      }
      var i = n(135),
        o = n(117),
        u = n(136),
        a = n(122),
        s = n(121),
        f = Object.prototype,
        c = f.hasOwnProperty
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t) {
        return i(e, t, o)
      }
      var i = n(139),
        o = n(130)
      e.exports = r
    },
    function (e, t, n) {
      var r = n(140),
        i = r()
      e.exports = i
    },
    function (e, t, n) {
      function r(e) {
        return function (t, n, r) {
          for (var o = i(t), u = r(t), a = u.length, s = e ? a : -1; e ? s-- : ++s < a; ) {
            var f = u[s]
            if (n(o[f], f, o) === !1) break
          }
          return t
        }
      }
      var i = n(141)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return i(e) ? e : Object(e)
      }
      var i = n(121)
      e.exports = r
    },
    function (e, t) {
      function n(e) {
        var t = e.length,
          n = new e.constructor(t)
        return (
          t &&
            'string' == typeof e[0] &&
            i.call(e, 'index') &&
            ((n.index = e.index), (n.input = e.input)),
          n
        )
      }
      var r = Object.prototype,
        i = r.hasOwnProperty
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = e.constructor
        switch (t) {
          case c:
            return i(e)
          case o:
          case u:
            return new r(+e)
          case l:
          case d:
          case h:
          case p:
          case v:
          case _:
          case y:
          case g:
          case m:
            var b = e.buffer
            return new r(n ? i(b) : b, e.byteOffset, e.length)
          case a:
          case f:
            return new r(e)
          case s:
            var E = new r(e.source, k.exec(e))
            E.lastIndex = e.lastIndex
        }
        return E
      }
      var i = n(144),
        o = '[object Boolean]',
        u = '[object Date]',
        a = '[object Number]',
        s = '[object RegExp]',
        f = '[object String]',
        c = '[object ArrayBuffer]',
        l = '[object Float32Array]',
        d = '[object Float64Array]',
        h = '[object Int8Array]',
        p = '[object Int16Array]',
        v = '[object Int32Array]',
        _ = '[object Uint8Array]',
        y = '[object Uint8ClampedArray]',
        g = '[object Uint16Array]',
        m = '[object Uint32Array]',
        k = /\w*$/
      e.exports = r
    },
    function (e, t) {
      ;(function (t) {
        function n(e) {
          var t = new r(e.byteLength),
            n = new i(t)
          return n.set(new i(e)), t
        }
        var r = t.ArrayBuffer,
          i = t.Uint8Array
        e.exports = n
      }.call(
        t,
        (function () {
          return this
        })(),
      ))
    },
    function (e, t) {
      function n(e) {
        var t = e.constructor
        return ('function' == typeof t && t instanceof t) || (t = Object), new t()
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t, n) {
        if ('function' != typeof e) return i
        if (void 0 === t) return e
        switch (n) {
          case 1:
            return function (n) {
              return e.call(t, n)
            }
          case 3:
            return function (n, r, i) {
              return e.call(t, n, r, i)
            }
          case 4:
            return function (n, r, i, o) {
              return e.call(t, n, r, i, o)
            }
          case 5:
            return function (n, r, i, o, u) {
              return e.call(t, n, r, i, o, u)
            }
        }
        return function () {
          return e.apply(t, arguments)
        }
      }
      var i = n(147)
      e.exports = r
    },
    function (e, t) {
      function n(e) {
        return e
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t, n) {
        if (!u(n)) return !1
        var r = typeof t
        if ('number' == r ? i(n) && o(t, n.length) : 'string' == r && t in n) {
          var a = n[t]
          return e === e ? e === a : a !== a
        }
        return !1
      }
      var i = n(131),
        o = n(136),
        u = n(121)
      e.exports = r
    },
    function (e, t, n) {
      var r = n(150),
        i = n(146),
        o = n(152),
        u = n(153),
        a = n(155),
        s = a(function (e, t) {
          return null == e ? {} : 'function' == typeof t[0] ? u(e, i(t[0], t[1], 3)) : o(e, r(t))
        })
      e.exports = s
    },
    function (e, t, n) {
      function r(e, t, n, f) {
        f || (f = [])
        for (var c = -1, l = e.length; ++c < l; ) {
          var d = e[c]
          s(d) && a(d) && (n || u(d) || o(d))
            ? t
              ? r(d, t, n, f)
              : i(f, d)
            : n || (f[f.length] = d)
        }
        return f
      }
      var i = n(151),
        o = n(135),
        u = n(117),
        a = n(131),
        s = n(116)
      e.exports = r
    },
    function (e, t) {
      function n(e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n]
        return e
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t) {
        e = i(e)
        for (var n = -1, r = t.length, o = {}; ++n < r; ) {
          var u = t[n]
          u in e && (o[u] = e[u])
        }
        return o
      }
      var i = n(141)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t) {
        var n = {}
        return (
          i(e, function (e, r, i) {
            t(e, r, i) && (n[r] = e)
          }),
          n
        )
      }
      var i = n(154)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t) {
        return i(e, t, o)
      }
      var i = n(139),
        o = n(137)
      e.exports = r
    },
    function (e, t) {
      function n(e, t) {
        if ('function' != typeof e) throw new TypeError(r)
        return (
          (t = i(void 0 === t ? e.length - 1 : +t || 0, 0)),
          function () {
            for (var n = arguments, r = -1, o = i(n.length - t, 0), u = Array(o); ++r < o; )
              u[r] = n[t + r]
            switch (t) {
              case 0:
                return e.call(this, u)
              case 1:
                return e.call(this, n[0], u)
              case 2:
                return e.call(this, n[0], n[1], u)
            }
            var a = Array(t + 1)
            for (r = -1; ++r < t; ) a[r] = n[r]
            return (a[t] = u), e.apply(this, a)
          }
        )
      }
      var r = 'Expected a function',
        i = Math.max
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t) {
        if (null == e) return !1
        var n = p.call(e, t)
        if (!n && !f(t)) {
          if (((t = d(t)), (e = 1 == t.length ? e : i(e, o(t, 0, -1))), null == e)) return !1
          ;(t = l(t)), (n = p.call(e, t))
        }
        return n || (c(e.length) && s(t, e.length) && (a(e) || u(e)))
      }
      var i = n(157),
        o = n(158),
        u = n(135),
        a = n(117),
        s = n(136),
        f = n(159),
        c = n(122),
        l = n(160),
        d = n(161),
        h = Object.prototype,
        p = h.hasOwnProperty
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n) {
        if (null != e) {
          void 0 !== n && n in i(e) && (t = [n])
          for (var r = 0, o = t.length; null != e && r < o; ) e = e[t[r++]]
          return r && r == o ? e : void 0
        }
      }
      var i = n(141)
      e.exports = r
    },
    function (e, t) {
      function n(e, t, n) {
        var r = -1,
          i = e.length
        ;(t = null == t ? 0 : +t || 0),
          t < 0 && (t = -t > i ? 0 : i + t),
          (n = void 0 === n || n > i ? i : +n || 0),
          n < 0 && (n += i),
          (i = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0)
        for (var o = Array(i); ++r < i; ) o[r] = e[r + t]
        return o
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t) {
        var n = typeof e
        if (('string' == n && a.test(e)) || 'number' == n) return !0
        if (i(e)) return !1
        var r = !u.test(e)
        return r || (null != t && e in o(t))
      }
      var i = n(117),
        o = n(141),
        u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        a = /^\w*$/
      e.exports = r
    },
    function (e, t) {
      function n(e) {
        var t = e ? e.length : 0
        return t ? e[t - 1] : void 0
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e) {
        if (o(e)) return e
        var t = []
        return (
          i(e).replace(u, function (e, n, r, i) {
            t.push(r ? i.replace(a, '$1') : n || e)
          }),
          t
        )
      }
      var i = n(162),
        o = n(117),
        u = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        a = /\\(\\)?/g
      e.exports = r
    },
    function (e, t) {
      function n(e) {
        return null == e ? '' : e + ''
      }
      e.exports = n
    },
    function (e, t, n) {
      var r = n(164),
        i = n(128),
        o = n(165),
        u = o(function (e, t, n) {
          return n ? r(e, t, n) : i(e, t)
        })
      e.exports = u
    },
    function (e, t, n) {
      function r(e, t, n) {
        for (var r = -1, o = i(t), u = o.length; ++r < u; ) {
          var a = o[r],
            s = e[a],
            f = n(s, t[a], a, e, t)
          ;((f === f ? f === s : s !== s) && (void 0 !== s || a in e)) || (e[a] = f)
        }
        return e
      }
      var i = n(130)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return u(function (t, n) {
          var r = -1,
            u = null == t ? 0 : n.length,
            a = u > 2 ? n[u - 2] : void 0,
            s = u > 2 ? n[2] : void 0,
            f = u > 1 ? n[u - 1] : void 0
          for (
            'function' == typeof a
              ? ((a = i(a, f, 5)), (u -= 2))
              : ((a = 'function' == typeof f ? f : void 0), (u -= a ? 1 : 0)),
              s && o(n[0], n[1], s) && ((a = u < 3 ? void 0 : a), (u = 1));
            ++r < u;

          ) {
            var c = n[r]
            c && e(t, c, a)
          }
          return t
        })
      }
      var i = n(146),
        o = n(148),
        u = n(155)
      e.exports = r
    },
    function (e, t, n) {
      var r = n(167),
        i = n(169),
        o = i(r)
      e.exports = o
    },
    function (e, t, n) {
      var r = n(138),
        i = n(168),
        o = i(r)
      e.exports = o
    },
    function (e, t, n) {
      function r(e, t) {
        return function (n, r) {
          var a = n ? i(n) : 0
          if (!o(a)) return e(n, r)
          for (var s = t ? a : -1, f = u(n); (t ? s-- : ++s < a) && r(f[s], s, f) !== !1; );
          return n
        }
      }
      var i = n(132),
        o = n(122),
        u = n(141)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t) {
        return function (n, r, s) {
          if (((r = i(r, s, 3)), a(n))) {
            var f = u(n, r, t)
            return f > -1 ? n[f] : void 0
          }
          return o(n, r, e)
        }
      }
      var i = n(170),
        o = n(186),
        u = n(187),
        a = n(117)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = typeof e
        return 'function' == r
          ? void 0 === t
            ? e
            : u(e, t, n)
          : null == e
          ? a
          : 'object' == r
          ? i(e)
          : void 0 === t
          ? s(e)
          : o(e, t)
      }
      var i = n(171),
        o = n(183),
        u = n(146),
        a = n(147),
        s = n(184)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        var t = o(e)
        if (1 == t.length && t[0][2]) {
          var n = t[0][0],
            r = t[0][1]
          return function (e) {
            return null != e && e[n] === r && (void 0 !== r || n in u(e))
          }
        }
        return function (e) {
          return i(e, t)
        }
      }
      var i = n(172),
        o = n(180),
        u = n(141)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = t.length,
          u = r,
          a = !n
        if (null == e) return !u
        for (e = o(e); r--; ) {
          var s = t[r]
          if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
        }
        for (; ++r < u; ) {
          s = t[r]
          var f = s[0],
            c = e[f],
            l = s[1]
          if (a && s[2]) {
            if (void 0 === c && !(f in e)) return !1
          } else {
            var d = n ? n(c, l, f) : void 0
            if (!(void 0 === d ? i(l, c, n, !0) : d)) return !1
          }
        }
        return !0
      }
      var i = n(173),
        o = n(141)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n, a, s, f) {
        return (
          e === t ||
          (null == e || null == t || (!o(e) && !u(t)) ? e !== e && t !== t : i(e, t, r, n, a, s, f))
        )
      }
      var i = n(174),
        o = n(121),
        u = n(116)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n, r, d, v, _) {
        var y = a(e),
          g = a(t),
          m = c,
          k = c
        y || ((m = p.call(e)), m == f ? (m = l) : m != l && (y = s(e))),
          g || ((k = p.call(t)), k == f ? (k = l) : k != l && (g = s(t)))
        var b = m == l,
          E = k == l,
          N = m == k
        if (N && !y && !b) return o(e, t, m)
        if (!d) {
          var O = b && h.call(e, '__wrapped__'),
            I = E && h.call(t, '__wrapped__')
          if (O || I) return n(O ? e.value() : e, I ? t.value() : t, r, d, v, _)
        }
        if (!N) return !1
        v || (v = []), _ || (_ = [])
        for (var w = v.length; w--; ) if (v[w] == e) return _[w] == t
        v.push(e), _.push(t)
        var S = (y ? i : u)(e, t, n, r, d, v, _)
        return v.pop(), _.pop(), S
      }
      var i = n(175),
        o = n(177),
        u = n(178),
        a = n(117),
        s = n(179),
        f = '[object Arguments]',
        c = '[object Array]',
        l = '[object Object]',
        d = Object.prototype,
        h = d.hasOwnProperty,
        p = d.toString
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t, n, r, o, u, a) {
        var s = -1,
          f = e.length,
          c = t.length
        if (f != c && !(o && c > f)) return !1
        for (; ++s < f; ) {
          var l = e[s],
            d = t[s],
            h = r ? r(o ? d : l, o ? l : d, s) : void 0
          if (void 0 !== h) {
            if (h) continue
            return !1
          }
          if (o) {
            if (
              !i(t, function (e) {
                return l === e || n(l, e, r, o, u, a)
              })
            )
              return !1
          } else if (l !== d && !n(l, d, r, o, u, a)) return !1
        }
        return !0
      }
      var i = n(176)
      e.exports = r
    },
    function (e, t) {
      function n(e, t) {
        for (var n = -1, r = e.length; ++n < r; ) if (t(e[n], n, e)) return !0
        return !1
      }
      e.exports = n
    },
    function (e, t) {
      function n(e, t, n) {
        switch (n) {
          case r:
          case i:
            return +e == +t
          case o:
            return e.name == t.name && e.message == t.message
          case u:
            return e != +e ? t != +t : e == +t
          case a:
          case s:
            return e == t + ''
        }
        return !1
      }
      var r = '[object Boolean]',
        i = '[object Date]',
        o = '[object Error]',
        u = '[object Number]',
        a = '[object RegExp]',
        s = '[object String]'
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t, n, r, o, a, s) {
        var f = i(e),
          c = f.length,
          l = i(t),
          d = l.length
        if (c != d && !o) return !1
        for (var h = c; h--; ) {
          var p = f[h]
          if (!(o ? p in t : u.call(t, p))) return !1
        }
        for (var v = o; ++h < c; ) {
          p = f[h]
          var _ = e[p],
            y = t[p],
            g = r ? r(o ? y : _, o ? _ : y, p) : void 0
          if (!(void 0 === g ? n(_, y, r, o, a, s) : g)) return !1
          v || (v = 'constructor' == p)
        }
        if (!v) {
          var m = e.constructor,
            k = t.constructor
          if (
            m != k &&
            'constructor' in e &&
            'constructor' in t &&
            !('function' == typeof m && m instanceof m && 'function' == typeof k && k instanceof k)
          )
            return !1
        }
        return !0
      }
      var i = n(130),
        o = Object.prototype,
        u = o.hasOwnProperty
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return o(e) && i(e.length) && !!R[L.call(e)]
      }
      var i = n(122),
        o = n(116),
        u = '[object Arguments]',
        a = '[object Array]',
        s = '[object Boolean]',
        f = '[object Date]',
        c = '[object Error]',
        l = '[object Function]',
        d = '[object Map]',
        h = '[object Number]',
        p = '[object Object]',
        v = '[object RegExp]',
        _ = '[object Set]',
        y = '[object String]',
        g = '[object WeakMap]',
        m = '[object ArrayBuffer]',
        k = '[object Float32Array]',
        b = '[object Float64Array]',
        E = '[object Int8Array]',
        N = '[object Int16Array]',
        O = '[object Int32Array]',
        I = '[object Uint8Array]',
        w = '[object Uint8ClampedArray]',
        S = '[object Uint16Array]',
        A = '[object Uint32Array]',
        R = {}
      ;(R[k] = R[b] = R[E] = R[N] = R[O] = R[I] = R[w] = R[S] = R[A] = !0),
        (R[u] = R[a] = R[m] = R[s] = R[f] = R[c] = R[l] = R[d] = R[h] = R[p] = R[v] = R[_] = R[
          y
        ] = R[g] = !1)
      var T = Object.prototype,
        L = T.toString
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        for (var t = o(e), n = t.length; n--; ) t[n][2] = i(t[n][1])
        return t
      }
      var i = n(181),
        o = n(182)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return e === e && !i(e)
      }
      var i = n(121)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        e = o(e)
        for (var t = -1, n = i(e), r = n.length, u = Array(r); ++t < r; ) {
          var a = n[t]
          u[t] = [a, e[a]]
        }
        return u
      }
      var i = n(130),
        o = n(141)
      e.exports = r
    },
    function (e, t, n) {
      function r(e, t) {
        var n = a(e),
          r = s(e) && f(t),
          h = e + ''
        return (
          (e = d(e)),
          function (a) {
            if (null == a) return !1
            var s = h
            if (((a = l(a)), (n || !r) && !(s in a))) {
              if (((a = 1 == e.length ? a : i(a, u(e, 0, -1))), null == a)) return !1
              ;(s = c(e)), (a = l(a))
            }
            return a[s] === t ? void 0 !== t || s in a : o(t, a[s], void 0, !0)
          }
        )
      }
      var i = n(157),
        o = n(173),
        u = n(158),
        a = n(117),
        s = n(159),
        f = n(181),
        c = n(160),
        l = n(141),
        d = n(161)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return u(e) ? i(e) : o(e)
      }
      var i = n(133),
        o = n(185),
        u = n(159)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        var t = e + ''
        return (
          (e = o(e)),
          function (n) {
            return i(n, e, t)
          }
        )
      }
      var i = n(157),
        o = n(161)
      e.exports = r
    },
    function (e, t) {
      function n(e, t, n, r) {
        var i
        return (
          n(e, function (e, n, o) {
            if (t(e, n, o)) return (i = r ? n : e), !1
          }),
          i
        )
      }
      e.exports = n
    },
    function (e, t) {
      function n(e, t, n) {
        for (var r = e.length, i = n ? r : -1; n ? i-- : ++i < r; ) if (t(e[i], i, e)) return i
        return -1
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t, n) {
        var r = a(e) ? i : u
        return (
          n && s(e, t, n) && (t = void 0),
          ('function' == typeof t && void 0 === n) || (t = o(t, n, 3)),
          r(e, t)
        )
      }
      var i = n(189),
        o = n(170),
        u = n(190),
        a = n(117),
        s = n(148)
      e.exports = r
    },
    function (e, t) {
      function n(e, t) {
        for (var n = -1, r = e.length; ++n < r; ) if (!t(e[n], n, e)) return !1
        return !0
      }
      e.exports = n
    },
    function (e, t, n) {
      function r(e, t) {
        var n = !0
        return (
          i(e, function (e, r, i) {
            return (n = !!t(e, r, i))
          }),
          n
        )
      }
      var i = n(167)
      e.exports = r
    },
    function (e, t, n) {
      function r(e) {
        return o(i(e, !0))
      }
      var i = n(125),
        o = n(171)
      e.exports = r
    },
    function (e, t, n) {
      var r
      !(function (i) {
        'use strict'
        function o() {
          var e = i.crypto || i.msCrypto
          if (!l && e && e.getRandomValues)
            try {
              var t = new Uint8Array(16)
              ;(p = l = function () {
                return e.getRandomValues(t), t
              }),
                l()
            } catch (n) {}
          if (!l) {
            var r = new Array(16)
            ;(d = l = function () {
              for (var e, t = 0; t < 16; t++)
                0 === (3 & t) && (e = 4294967296 * Math.random()),
                  (r[t] = (e >>> ((3 & t) << 3)) & 255)
              return r
            }),
              'undefined' != typeof console &&
                console.warn &&
                console.warn(
                  '[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()',
                )
          }
        }
        function u() {
          try {
            var e = n(193).randomBytes
            ;(h = l =
              e &&
              function () {
                return e(16)
              }),
              l()
          } catch (t) {}
        }
        function a(e, t, n) {
          var r = (t && n) || 0,
            i = 0
          for (
            t = t || [],
              e.toLowerCase().replace(/[0-9a-f]{2}/g, function (e) {
                i < 16 && (t[r + i++] = y[e])
              });
            i < 16;

          )
            t[r + i++] = 0
          return t
        }
        function s(e, t) {
          var n = t || 0,
            r = _
          return (
            r[e[n++]] +
            r[e[n++]] +
            r[e[n++]] +
            r[e[n++]] +
            '-' +
            r[e[n++]] +
            r[e[n++]] +
            '-' +
            r[e[n++]] +
            r[e[n++]] +
            '-' +
            r[e[n++]] +
            r[e[n++]] +
            '-' +
            r[e[n++]] +
            r[e[n++]] +
            r[e[n++]] +
            r[e[n++]] +
            r[e[n++]] +
            r[e[n++]]
          )
        }
        function f(e, t, n) {
          var r = (t && n) || 0,
            i = t || []
          e = e || {}
          var o = null != e.clockseq ? e.clockseq : b,
            u = null != e.msecs ? e.msecs : new Date().getTime(),
            a = null != e.nsecs ? e.nsecs : N + 1,
            f = u - E + (a - N) / 1e4
          if (
            (f < 0 && null == e.clockseq && (o = (o + 1) & 16383),
            (f < 0 || u > E) && null == e.nsecs && (a = 0),
            a >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
          ;(E = u), (N = a), (b = o), (u += 122192928e5)
          var c = (1e4 * (268435455 & u) + a) % 4294967296
          ;(i[r++] = (c >>> 24) & 255),
            (i[r++] = (c >>> 16) & 255),
            (i[r++] = (c >>> 8) & 255),
            (i[r++] = 255 & c)
          var l = ((u / 4294967296) * 1e4) & 268435455
          ;(i[r++] = (l >>> 8) & 255),
            (i[r++] = 255 & l),
            (i[r++] = ((l >>> 24) & 15) | 16),
            (i[r++] = (l >>> 16) & 255),
            (i[r++] = (o >>> 8) | 128),
            (i[r++] = 255 & o)
          for (var d = e.node || k, h = 0; h < 6; h++) i[r + h] = d[h]
          return t ? t : s(i)
        }
        function c(e, t, n) {
          var r = (t && n) || 0
          'string' == typeof e && ((t = 'binary' === e ? new v(16) : null), (e = null)),
            (e = e || {})
          var i = e.random || (e.rng || l)()
          if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t))
            for (var o = 0; o < 16; o++) t[r + o] = i[o]
          return t || s(i)
        }
        var l, d, h, p
        i ? o() : u()
        for (
          var v = 'function' == typeof Buffer ? Buffer : Array, _ = [], y = {}, g = 0;
          g < 256;
          g++
        )
          (_[g] = (g + 256).toString(16).substr(1)), (y[_[g]] = g)
        var m = l(),
          k = [1 | m[0], m[1], m[2], m[3], m[4], m[5]],
          b = 16383 & ((m[6] << 8) | m[7]),
          E = 0,
          N = 0,
          O = c
        ;(O.v1 = f),
          (O.v4 = c),
          (O.parse = a),
          (O.unparse = s),
          (O.BufferClass = v),
          (O._rng = l),
          (O._mathRNG = d),
          (O._nodeRNG = h),
          (O._whatwgRNG = p),
          'undefined' != typeof e && e.exports
            ? (e.exports = O)
            : ((r = function () {
                return O
              }.call(t, n, t, e)),
              !(void 0 !== r && (e.exports = r)))
      })('undefined' != typeof window ? window : null)
    },
    function (t, n) {
      t.exports = e
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(195),
        f = r(s),
        c = n(198),
        l = r(c),
        d = n(226),
        h = r(d),
        p = n(258),
        v = r(p),
        _ = (function () {
          function e() {
            ;(0, o['default'])(this, e),
              (this._prodApnsConnector = new v['default'](f['default'].PRODUCTION_ENVIRONMENT)),
              (this._devApnsConnector = new v['default'](f['default'].DEVELOPMENT_ENVIRONMENT))
          }
          return (
            (0, a['default'])(e, [
              {
                key: 'registerContainerForNotification',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  if (t.apnsToken)
                    return this._registerToken(e, t.apnsToken, t.clientID).then(function () {
                      return e
                    })
                  var n = this._getConnectorForContainer(e)
                  t.refreshToken === !0 && n.clearApnsInfo()
                  var r = n.hasApnsToken
                    ? this._registerToken(e, n.apnsToken, t.clientID)
                    : this._createToken(e, t.clientID)
                  return t.dontPoll
                    ? r
                    : r.then(function (t) {
                        var r = t.httpResponse.body
                        return n.consumeApnsInfo(r), n.addNotificationListener(e), e
                      })
                },
              },
              {
                key: 'unregisterContainerForNotification',
                value: function (e) {
                  return this._getConnectorForContainer(e).removeNotificationListener(e)
                },
              },
              {
                key: 'isContainerRegisteredForNotifications',
                value: function (e) {
                  return this._getConnectorForContainer(e).hasNotificationListener(e)
                },
              },
              {
                key: '_getConnectorForContainer',
                value: function (e) {
                  if (e.apnsEnvironment === f['default'].PRODUCTION_ENVIRONMENT)
                    return this._prodApnsConnector
                  if (e.apnsEnvironment === f['default'].DEVELOPMENT_ENVIRONMENT)
                    return this._devApnsConnector
                  throw h['default'].makeConfigurationError(
                    'No apnsEnvironment configured for container: ' + e.containerIdentifier,
                  )
                },
              },
              {
                key: '_createToken',
                value: function (e, t) {
                  return e.sendRequest(
                    new l['default']()
                      .setApiModuleName('device')
                      .setApiEntityName('tokens')
                      .setApiActionName('create')
                      .setPayload({ apnsEnvironment: e.apnsEnvironment, clientId: t }),
                  )
                },
              },
              {
                key: '_registerToken',
                value: function (e, t, n) {
                  return e.sendRequest(
                    new l['default']()
                      .setApiModuleName('device')
                      .setApiEntityName('tokens')
                      .setApiActionName('register')
                      .setPayload({
                        apnsEnvironment: e.apnsEnvironment,
                        apnsToken: t,
                        clientId: n,
                      }),
                  )
                },
              },
            ]),
            e
          )
        })()
      t['default'] = _
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(196),
        o = r(i),
        u = n(197),
        a = r(u),
        s = 'production',
        f = 'development',
        c = 'https://api.apple-cloudkit.com',
        l = 1,
        d = 'cloudkitloaded'
      t['default'] = {
        CLOUDKIT_LOADED: d,
        PRODUCTION_ENVIRONMENT: s,
        DEVELOPMENT_ENVIRONMENT: f,
        BUILD_VERSION: o['default'],
        VERSION: a['default'],
        WS_API_VERSION: l,
        URL_PREFIX: c,
      }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = '2005ProjectDev34')
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = '2.6.1')
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(214),
        h = r(d),
        p = n(218),
        v = r(p),
        _ = n(226),
        y = r(_),
        g = n(227),
        m = r(g),
        k = n(257),
        b = r(k),
        E = n(195),
        N = r(E),
        O = n(85),
        I = r(O),
        w = n(229),
        S = r(w),
        A = n(112),
        R = r(A),
        T = 'ckAPIToken',
        L = 'ckWebAuthToken',
        C = 'clientId',
        x = 'X-Apple-CloudKit-Request-ISO8601Date',
        M = 'X-Apple-CloudKit-Request-KeyID',
        U = 'X-Apple-CloudKit-Request-SignatureV1',
        P = {
          parameters: {
            ckjsBuildVersion: N['default'].BUILD_VERSION,
            ckjsVersion: N['default'].VERSION,
          },
          headers: { 'content-type': 'text/plain' },
        },
        D = (function (e) {
          function t() {
            ;(0, a['default'])(this, t)
            var e = (0, l['default'])(
              this,
              (t.__proto__ || (0, o['default'])(t)).call(this, I['default'].assign({}, P)),
            )
            return (
              (e._wsApiVersion = N['default'].WS_API_VERSION),
              (e._host = N['default'].URL_PREFIX),
              (e._containerIdentifier = null),
              (e._containerEnvironment = null),
              (e._databaseName = null),
              (e._containerEnvironment = null),
              (e._apiModuleName = null),
              (e._responseClass = m['default']),
              e
            )
          }
          return (
            (0, v['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'setPayload',
                value: function (e) {
                  return this.setMethod('POST'), this.setBody(e), this
                },
              },
              {
                key: 'getPayload',
                value: function () {
                  return this._body
                },
              },
              {
                key: 'setContainerIdentifier',
                value: function (e) {
                  return (this._containerIdentifier = e), this
                },
              },
              {
                key: 'setContainerEnvironment',
                value: function (e) {
                  return (this._containerEnvironment = e), this
                },
              },
              {
                key: 'setDatabaseName',
                value: function (e) {
                  return (this._databaseName = e), this
                },
              },
              {
                key: 'setApiModuleName',
                value: function (e) {
                  return (this._apiModuleName = e), this
                },
              },
              {
                key: 'setApiEntityName',
                value: function (e) {
                  return (this._apiEntityName = e), this
                },
              },
              {
                key: 'setApiActionName',
                value: function (e) {
                  return (this._apiAction = e), this
                },
              },
              {
                key: 'setResponseClass',
                value: function (e) {
                  return (this._responseClass = e), this
                },
              },
              {
                key: 'setApiToken',
                value: function (e) {
                  return this.setParameter(T, e), this
                },
              },
              {
                key: 'setCKSession',
                value: function (e) {
                  return this.setParameter(L, encodeURIComponent(e)), this
                },
              },
              {
                key: 'setISODate',
                value: function (e) {
                  return this.setHeader(x, e), this
                },
              },
              {
                key: 'setSigningKeyID',
                value: function (e) {
                  return this.setHeader(M, e), this
                },
              },
              {
                key: 'setSignatureV1',
                value: function (e) {
                  return this.setHeader(U, e), this
                },
              },
              {
                key: 'setClientID',
                value: function (e) {
                  return I['default'].isNullOrUndefined(e) || this.setParameter(C, e), this
                },
              },
              {
                key: 'getPath',
                value: function () {
                  return (
                    '/' +
                    [
                      this._apiModuleName,
                      this._wsApiVersion,
                      this._containerIdentifier,
                      this._containerEnvironment,
                      this._databaseName,
                      this._apiEntityName,
                      this._apiAction,
                    ]
                      .filter(function (e) {
                        return !I['default'].isNullOrUndefined(e)
                      })
                      .join('/')
                  )
                },
              },
              {
                key: 'send',
                value: function () {
                  var e = this
                  return (0, h['default'])(
                    t.prototype.__proto__ || (0, o['default'])(t.prototype),
                    'send',
                    this,
                  )
                    .call(this)
                    ['catch'](function (e) {
                      throw (S['default'].warn(e, e.stack), y['default'].makeNetworkError(e))
                    })
                    .then(function (t) {
                      var n = t.status,
                        r = t.headers
                      return t
                        .text()
                        .then(function (e) {
                          try {
                            return JSON.parse(e)
                          } catch (t) {
                            return 503 === n
                              ? R['default'].Promise.reject(
                                  y['default'].makeServiceUnavailableError(),
                                )
                              : R['default'].Promise.reject(
                                  y['default'].makeUnexpectedServerResponse(
                                    'Could not parse json: ' + e,
                                  ),
                                )
                          }
                        })
                        .then(function (t) {
                          if (n < 200 || n >= 300) throw y['default'].fromServerError(t)
                          var i = e._responseClass
                          return new i(e, { status: n, body: t, headers: r })
                        })
                    })
                },
              },
            ]),
            t
          )
        })(b['default'])
      t['default'] = D
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(200),
        o = r(i)
      t['default'] = function (e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t ||
          ('object' !== ('undefined' == typeof t ? 'undefined' : (0, o['default'])(t)) &&
            'function' != typeof t)
          ? e
          : t
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(201),
        o = r(i),
        u = n(204),
        a = r(u),
        s =
          'function' == typeof a['default'] && 'symbol' == typeof o['default']
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' == typeof a['default'] && e.constructor === a['default']
                  ? 'symbol'
                  : typeof e
              }
      t['default'] =
        'function' == typeof a['default'] && 'symbol' === s(o['default'])
          ? function (e) {
              return 'undefined' == typeof e ? 'undefined' : s(e)
            }
          : function (e) {
              return e && 'function' == typeof a['default'] && e.constructor === a['default']
                ? 'symbol'
                : 'undefined' == typeof e
                ? 'undefined'
                : s(e)
            }
    },
    function (e, t, n) {
      e.exports = { default: n(202), __esModule: !0 }
    },
    function (e, t, n) {
      n(44), n(56), (e.exports = n(203).f('iterator'))
    },
    function (e, t, n) {
      t.f = n(54)
    },
    function (e, t, n) {
      e.exports = { default: n(205), __esModule: !0 }
    },
    function (e, t, n) {
      n(206), n(43), n(212), n(213), (e.exports = n(8).Symbol)
    },
    function (e, t, n) {
      'use strict'
      var r = n(7),
        i = n(21),
        o = n(16),
        u = n(6),
        a = n(47),
        s = n(207).KEY,
        f = n(17),
        c = n(34),
        l = n(53),
        d = n(36),
        h = n(54),
        p = n(203),
        v = n(208),
        _ = n(209),
        y = n(210),
        g = n(13),
        m = n(14),
        k = n(25),
        b = n(19),
        E = n(20),
        N = n(50),
        O = n(104),
        I = n(211),
        w = n(12),
        S = n(23),
        A = I.f,
        R = w.f,
        T = O.f,
        L = r.Symbol,
        C = r.JSON,
        x = C && C.stringify,
        M = 'prototype',
        U = h('_hidden'),
        P = h('toPrimitive'),
        D = {}.propertyIsEnumerable,
        j = c('symbol-registry'),
        Q = c('symbols'),
        B = c('op-symbols'),
        F = Object[M],
        z = 'function' == typeof L,
        K = r.QObject,
        H = !K || !K[M] || !K[M].findChild,
        V =
          o &&
          f(function () {
            return (
              7 !=
              N(
                R({}, 'a', {
                  get: function () {
                    return R(this, 'a', { value: 7 }).a
                  },
                }),
              ).a
            )
          })
            ? function (e, t, n) {
                var r = A(F, t)
                r && delete F[t], R(e, t, n), r && e !== F && R(F, t, r)
              }
            : R,
        q = function (e) {
          var t = (Q[e] = N(L[M]))
          return (t._k = e), t
        },
        W =
          z && 'symbol' == typeof L.iterator
            ? function (e) {
                return 'symbol' == typeof e
              }
            : function (e) {
                return e instanceof L
              },
        Z = function (e, t, n) {
          return (
            e === F && Z(B, t, n),
            g(e),
            (t = b(t, !0)),
            g(n),
            i(Q, t)
              ? (n.enumerable
                  ? (i(e, U) && e[U][t] && (e[U][t] = !1), (n = N(n, { enumerable: E(0, !1) })))
                  : (i(e, U) || R(e, U, E(1, {})), (e[U][t] = !0)),
                V(e, t, n))
              : R(e, t, n)
          )
        },
        G = function (e, t) {
          g(e)
          for (var n, r = _((t = k(t))), i = 0, o = r.length; o > i; ) Z(e, (n = r[i++]), t[n])
          return e
        },
        Y = function (e, t) {
          return void 0 === t ? N(e) : G(N(e), t)
        },
        J = function (e) {
          var t = D.call(this, (e = b(e, !0)))
          return (
            !(this === F && i(Q, e) && !i(B, e)) &&
            (!(t || !i(this, e) || !i(Q, e) || (i(this, U) && this[U][e])) || t)
          )
        },
        X = function (e, t) {
          if (((e = k(e)), (t = b(t, !0)), e !== F || !i(Q, t) || i(B, t))) {
            var n = A(e, t)
            return !n || !i(Q, t) || (i(e, U) && e[U][t]) || (n.enumerable = !0), n
          }
        },
        $ = function (e) {
          for (var t, n = T(k(e)), r = [], o = 0; n.length > o; )
            i(Q, (t = n[o++])) || t == U || t == s || r.push(t)
          return r
        },
        ee = function (e) {
          for (var t, n = e === F, r = T(n ? B : k(e)), o = [], u = 0; r.length > u; )
            !i(Q, (t = r[u++])) || (n && !i(F, t)) || o.push(Q[t])
          return o
        }
      z ||
        ((L = function () {
          if (this instanceof L) throw TypeError('Symbol is not a constructor!')
          var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function (n) {
              this === F && t.call(B, n),
                i(this, U) && i(this[U], e) && (this[U][e] = !1),
                V(this, e, E(1, n))
            }
          return o && H && V(F, e, { configurable: !0, set: t }), q(e)
        }),
        a(L[M], 'toString', function () {
          return this._k
        }),
        (I.f = X),
        (w.f = Z),
        (n(105).f = O.f = $),
        (n(39).f = J),
        (n(38).f = ee),
        o && !n(35) && a(F, 'propertyIsEnumerable', J, !0),
        (p.f = function (e) {
          return q(h(e))
        })),
        u(u.G + u.W + u.F * !z, { Symbol: L })
      for (
        var te = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ',',
          ),
          ne = 0;
        te.length > ne;

      )
        h(te[ne++])
      for (var re = S(h.store), ie = 0; re.length > ie; ) v(re[ie++])
      u(u.S + u.F * !z, 'Symbol', {
        for: function (e) {
          return i(j, (e += '')) ? j[e] : (j[e] = L(e))
        },
        keyFor: function (e) {
          if (!W(e)) throw TypeError(e + ' is not a symbol!')
          for (var t in j) if (j[t] === e) return t
        },
        useSetter: function () {
          H = !0
        },
        useSimple: function () {
          H = !1
        },
      }),
        u(u.S + u.F * !z, 'Object', {
          create: Y,
          defineProperty: Z,
          defineProperties: G,
          getOwnPropertyDescriptor: X,
          getOwnPropertyNames: $,
          getOwnPropertySymbols: ee,
        }),
        C &&
          u(
            u.S +
              u.F *
                (!z ||
                  f(function () {
                    var e = L()
                    return '[null]' != x([e]) || '{}' != x({ a: e }) || '{}' != x(Object(e))
                  })),
            'JSON',
            {
              stringify: function (e) {
                for (var t, n, r = [e], i = 1; arguments.length > i; ) r.push(arguments[i++])
                if (((n = t = r[1]), (m(t) || void 0 !== e) && !W(e)))
                  return (
                    y(t) ||
                      (t = function (e, t) {
                        if (('function' == typeof n && (t = n.call(this, e, t)), !W(t))) return t
                      }),
                    (r[1] = t),
                    x.apply(C, r)
                  )
              },
            },
          ),
        L[M][P] || n(11)(L[M], P, L[M].valueOf),
        l(L, 'Symbol'),
        l(Math, 'Math', !0),
        l(r.JSON, 'JSON', !0)
    },
    function (e, t, n) {
      var r = n(36)('meta'),
        i = n(14),
        o = n(21),
        u = n(12).f,
        a = 0,
        s =
          Object.isExtensible ||
          function () {
            return !0
          },
        f = !n(17)(function () {
          return s(Object.preventExtensions({}))
        }),
        c = function (e) {
          u(e, r, { value: { i: 'O' + ++a, w: {} } })
        },
        l = function (e, t) {
          if (!i(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e
          if (!o(e, r)) {
            if (!s(e)) return 'F'
            if (!t) return 'E'
            c(e)
          }
          return e[r].i
        },
        d = function (e, t) {
          if (!o(e, r)) {
            if (!s(e)) return !0
            if (!t) return !1
            c(e)
          }
          return e[r].w
        },
        h = function (e) {
          return f && p.NEED && s(e) && !o(e, r) && c(e), e
        },
        p = (e.exports = { KEY: r, NEED: !1, fastKey: l, getWeak: d, onFreeze: h })
    },
    function (e, t, n) {
      var r = n(7),
        i = n(8),
        o = n(35),
        u = n(203),
        a = n(12).f
      e.exports = function (e) {
        var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {})
        '_' == e.charAt(0) || e in t || a(t, e, { value: u.f(e) })
      }
    },
    function (e, t, n) {
      var r = n(23),
        i = n(38),
        o = n(39)
      e.exports = function (e) {
        var t = r(e),
          n = i.f
        if (n)
          for (var u, a = n(e), s = o.f, f = 0; a.length > f; ) s.call(e, (u = a[f++])) && t.push(u)
        return t
      }
    },
    function (e, t, n) {
      var r = n(27)
      e.exports =
        Array.isArray ||
        function (e) {
          return 'Array' == r(e)
        }
    },
    function (e, t, n) {
      var r = n(39),
        i = n(20),
        o = n(25),
        u = n(19),
        a = n(21),
        s = n(15),
        f = Object.getOwnPropertyDescriptor
      t.f = n(16)
        ? f
        : function (e, t) {
            if (((e = o(e)), (t = u(t, !0)), s))
              try {
                return f(e, t)
              } catch (n) {}
            if (a(e, t)) return i(!r.f.call(e, t), e[t])
          }
    },
    function (e, t, n) {
      n(208)('asyncIterator')
    },
    function (e, t, n) {
      n(208)('observable')
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(106),
        o = r(i),
        u = n(215),
        a = r(u)
      t['default'] = function s(e, t, n) {
        null === e && (e = Function.prototype)
        var r = (0, a['default'])(e, t)
        if (void 0 === r) {
          var i = (0, o['default'])(e)
          return null === i ? void 0 : s(i, t, n)
        }
        if ('value' in r) return r.value
        var u = r.get
        if (void 0 !== u) return u.call(n)
      }
    },
    function (e, t, n) {
      e.exports = { default: n(216), __esModule: !0 }
    },
    function (e, t, n) {
      n(217)
      var r = n(8).Object
      e.exports = function (e, t) {
        return r.getOwnPropertyDescriptor(e, t)
      }
    },
    function (e, t, n) {
      var r = n(25),
        i = n(211).f
      n(98)('getOwnPropertyDescriptor', function () {
        return function (e, t) {
          return i(r(e), t)
        }
      })
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(219),
        o = r(i),
        u = n(223),
        a = r(u),
        s = n(200),
        f = r(s)
      t['default'] = function (e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function, not ' +
              ('undefined' == typeof t ? 'undefined' : (0, f['default'])(t)),
          )
        ;(e.prototype = (0, a['default'])(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (o['default'] ? (0, o['default'])(e, t) : (e.__proto__ = t))
      }
    },
    function (e, t, n) {
      e.exports = { default: n(220), __esModule: !0 }
    },
    function (e, t, n) {
      n(221), (e.exports = n(8).Object.setPrototypeOf)
    },
    function (e, t, n) {
      var r = n(6)
      r(r.S, 'Object', { setPrototypeOf: n(222).set })
    },
    function (e, t, n) {
      var r = n(14),
        i = n(13),
        o = function (e, t) {
          if ((i(e), !r(t) && null !== t)) throw TypeError(t + ": can't set as prototype!")
        }
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function (e, t, r) {
                try {
                  ;(r = n(9)(Function.call, n(211).f(Object.prototype, '__proto__').set, 2)),
                    r(e, []),
                    (t = !(e instanceof Array))
                } catch (i) {
                  t = !0
                }
                return function (e, n) {
                  return o(e, n), t ? (e.__proto__ = n) : r(e, n), e
                }
              })({}, !1)
            : void 0),
        check: o,
      }
    },
    function (e, t, n) {
      e.exports = { default: n(224), __esModule: !0 }
    },
    function (e, t, n) {
      n(225)
      var r = n(8).Object
      e.exports = function (e, t) {
        return r.create(e, t)
      }
    },
    function (e, t, n) {
      var r = n(6)
      r(r.S, 'Object', { create: n(50) })
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        function t() {
          e.apply(this, arguments)
        }
        return (
          (t.prototype = (0, s['default'])(e.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })),
          u['default'] ? (0, u['default'])(t, e) : (t.__proto__ = e),
          t
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var o = n(219),
        u = r(o),
        a = n(223),
        s = r(a),
        f = n(106),
        c = r(f),
        l = n(80),
        d = r(l),
        h = n(81),
        p = r(h),
        v = n(199),
        _ = r(v),
        y = n(218),
        g = r(y),
        m = n(85),
        k = r(m),
        b = 'ACCESS_DENIED',
        E = 'ATOMIC_ERROR',
        N = 'AUTHENTICATION_FAILED',
        O = 'AUTHENTICATION_REQUIRED',
        I = 'BAD_REQUEST',
        w = 'CONFLICT',
        S = 'EXISTS',
        A = 'INTERNAL_ERROR',
        R = 'NOT_FOUND',
        T = 'QUOTA_EXCEEDED',
        L = 'THROTTLED',
        C = 'TRY_AGAIN_LATER',
        x = 'UNIQUE_FIELD_ERROR',
        M = 'VALIDATING_REFERENCE_ERROR',
        U = 'ZONE_NOT_FOUND',
        P = 'ZONE_BUSY',
        D = [b, E, N, O, I, w, S, A, R, T, L, C, x, M, U, P],
        j = 'UNKNOWN_ERROR',
        Q = 'NETWORK_ERROR',
        B = 'SERVICE_UNAVAILABLE',
        F = 'INVALID_ARGUMENTS',
        z = 'UNEXPECTED_SERVER_RESPONSE',
        K = 'CONFIGURATION_ERROR',
        H = 'AUTH_PERSIST_ERROR',
        V = 'SIGN_IN_FAILED',
        q = 'SHARE_UI_TIMEOUT',
        W = [j, Q, B, F, z, K, H, V],
        Z = {
          AUTH_PERSIST_ERROR: 'Could not read or write ckSession',
          SIGN_IN_FAILED: 'Error in sign in popup',
        },
        G = (function (e) {
          function t(e) {
            var n = e.uuid,
              r = e.serverErrorCode,
              i = e.extensionErrorCode,
              o = e.reason,
              u = e.retryAfter,
              a = e.subscriptionID,
              s = e.recordName,
              f = e.zoneID,
              l = e.redirectURL,
              h = e.ckErrorCode
            ;(0, d['default'])(this, t)
            var p = (0, _['default'])(this, (t.__proto__ || (0, c['default'])(t)).call(this))
            return (
              Error.captureStackTrace && Error.captureStackTrace(p, p.constructor),
              k['default'].isNullOrUndefined(h) && (h = t.isKnownServerErrorCode(r) ? r : j),
              (p._ckErrorCode = h),
              (p._uuid = n),
              (p._reason = k['default'].isNullOrUndefined(o) ? h : o),
              (p._serverErrorCode = r),
              (p._extensionErrorCode = i),
              (p._retryAfter = u),
              (p._recordName = s),
              (p._subscriptionID = a),
              (p._zoneID = f),
              (p._redirectURL = l),
              (p.message = p._reason),
              p
            )
          }
          return (
            (0, g['default'])(t, e),
            (0, p['default'])(
              t,
              [
                {
                  key: 'toString',
                  value: function () {
                    return k['default'].instanceToString('CKError', this)
                  },
                },
                {
                  key: 'toJSON',
                  value: function () {
                    return {
                      uuid: this._uuid,
                      serverErrorCode: this._serverErrorCode,
                      extensionErrorCode: this._extensionErrorCode,
                      reason: this._reason,
                      retryAfter: this._retryAfter,
                      subscriptionID: this._subscriptionID,
                      recordName: this._recordName,
                      zoneID: this._zoneID,
                      redirectURL: this._redirectURL,
                      ckErrorCode: this._ckErrorCode,
                    }
                  },
                },
                {
                  key: 'ckErrorCode',
                  get: function () {
                    return this._ckErrorCode
                  },
                },
                {
                  key: 'uuid',
                  get: function () {
                    return this._uuid
                  },
                },
                {
                  key: 'reason',
                  get: function () {
                    return this._reason
                  },
                },
                {
                  key: 'serverErrorCode',
                  get: function () {
                    return this._serverErrorCode
                  },
                },
                {
                  key: 'extensionErrorCode',
                  get: function () {
                    return this._extensionErrorCode
                  },
                },
                {
                  key: 'retryAfter',
                  get: function () {
                    return this._retryAfter
                  },
                },
                {
                  key: 'subscriptionID',
                  get: function () {
                    return this._subscriptionID
                  },
                },
                {
                  key: 'recordName',
                  get: function () {
                    return this._recordName
                  },
                },
                {
                  key: 'zoneID',
                  get: function () {
                    return this._zoneID
                  },
                },
                {
                  key: 'redirectURL',
                  get: function () {
                    return this._redirectURL
                  },
                },
                {
                  key: 'isError',
                  get: function () {
                    return !0
                  },
                },
                {
                  key: 'isCKError',
                  get: function () {
                    return !0
                  },
                },
                {
                  key: 'isServerError',
                  get: function () {
                    return null !== this.serverErrorCode
                  },
                },
                {
                  key: 'isServerExtensionError',
                  get: function () {
                    return null !== this.extensionErrorCode
                  },
                },
              ],
              [
                {
                  key: 'isErrorObject',
                  value: function (e) {
                    var t = e.serverErrorCode,
                      n = e.extensionErrorCode
                    return !k['default'].isNullOrUndefined(t) || !k['default'].isNullOrUndefined(n)
                  },
                },
                {
                  key: 'isKnownServerErrorCode',
                  value: function (e) {
                    return D.some(function (t) {
                      return t === e
                    })
                  },
                },
                {
                  key: 'isKnownCKErrorCode',
                  value: function (e) {
                    return W.some(function (t) {
                      return t === e
                    })
                  },
                },
                {
                  key: 'fromServerError',
                  value: function (e) {
                    return (
                      k['default'].isNullOrUndefined(e.redirectUrl) ||
                        (e.redirectURL = e.redirectUrl),
                      k['default'].isNullOrUndefined(e.subscriptionId) ||
                        (e.subscriptionID = e.subscriptionId),
                      new t(e)
                    )
                  },
                },
                {
                  key: 'fromErrorCode',
                  value: function (e, n) {
                    var r = Z[e]
                    return (
                      k['default'].isNullOrUndefined(r) && (r = e),
                      k['default'].isNullOrUndefined(n) || (r += ': ' + n),
                      new t({ ckErrorCode: e, reason: r })
                    )
                  },
                },
                {
                  key: 'makeNetworkError',
                  value: function () {
                    return t.fromErrorCode(Q)
                  },
                },
                {
                  key: 'makeInvalidArguments',
                  value: function (e) {
                    return t.fromErrorCode(F, e)
                  },
                },
                {
                  key: 'makeUnexpectedServerResponse',
                  value: function (e) {
                    return t.fromErrorCode(z, e)
                  },
                },
                {
                  key: 'makeConfigurationError',
                  value: function (e) {
                    return t.fromErrorCode(K, e)
                  },
                },
                {
                  key: 'makeServiceUnavailableError',
                  value: function () {
                    return t.fromErrorCode(B)
                  },
                },
                {
                  key: 'makeAuthPersistError',
                  value: function () {
                    return t.fromErrorCode(H)
                  },
                },
                {
                  key: 'makeSignInFailedError',
                  value: function (e) {
                    return t.fromErrorCode(V, e.errorMessage)
                  },
                },
                {
                  key: 'makeUnknownError',
                  value: function () {
                    return t.fromErrorCode(j)
                  },
                },
                {
                  key: 'makeShareUITimeout',
                  value: function () {
                    return t.fromErrorCode(q)
                  },
                },
                {
                  key: 'ACCESS_DENIED',
                  get: function () {
                    return b
                  },
                },
                {
                  key: 'ATOMIC_ERROR',
                  get: function () {
                    return E
                  },
                },
                {
                  key: 'AUTHENTICATION_FAILED',
                  get: function () {
                    return N
                  },
                },
                {
                  key: 'AUTHENTICATION_REQUIRED',
                  get: function () {
                    return O
                  },
                },
                {
                  key: 'BAD_REQUEST',
                  get: function () {
                    return I
                  },
                },
                {
                  key: 'CONFLICT',
                  get: function () {
                    return w
                  },
                },
                {
                  key: 'EXISTS',
                  get: function () {
                    return S
                  },
                },
                {
                  key: 'INTERNAL_ERROR',
                  get: function () {
                    return A
                  },
                },
                {
                  key: 'NOT_FOUND',
                  get: function () {
                    return R
                  },
                },
                {
                  key: 'QUOTA_EXCEEDED',
                  get: function () {
                    return T
                  },
                },
                {
                  key: 'THROTTLED',
                  get: function () {
                    return L
                  },
                },
                {
                  key: 'TRY_AGAIN_LATER',
                  get: function () {
                    return C
                  },
                },
                {
                  key: 'VALIDATING_REFERENCE_ERROR',
                  get: function () {
                    return M
                  },
                },
                {
                  key: 'UNIQUE_FIELD_ERROR',
                  get: function () {
                    return x
                  },
                },
                {
                  key: 'ZONE_NOT_FOUND',
                  get: function () {
                    return U
                  },
                },
                {
                  key: 'UNKNOWN_ERROR',
                  get: function () {
                    return j
                  },
                },
                {
                  key: 'NETWORK_ERROR',
                  get: function () {
                    return Q
                  },
                },
                {
                  key: 'SERVICE_UNAVAILABLE',
                  get: function () {
                    return B
                  },
                },
                {
                  key: 'INVALID_ARGUMENTS',
                  get: function () {
                    return F
                  },
                },
                {
                  key: 'UNEXPECTED_SERVER_RESPONSE',
                  get: function () {
                    return z
                  },
                },
                {
                  key: 'CONFIGURATION_ERROR',
                  get: function () {
                    return K
                  },
                },
                {
                  key: 'AUTH_PERSIST_ERROR',
                  get: function () {
                    return H
                  },
                },
                {
                  key: 'SIGN_IN_FAILED',
                  get: function () {
                    return V
                  },
                },
                {
                  key: 'SHARE_UI_TIMEOUT',
                  get: function () {
                    return q
                  },
                },
                {
                  key: 'ZONE_BUSY',
                  get: function () {
                    return P
                  },
                },
              ],
            ),
            t
          )
        })(i(Error))
      t['default'] = G
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(199),
        a = r(u),
        s = n(218),
        f = r(s),
        c = n(80),
        l = r(c),
        d = n(81),
        h = r(d),
        p = n(85),
        v = r(p),
        _ = n(226),
        y = r(_),
        g = n(228),
        m = r(g),
        k = 'x-apple-cloudkit-web-auth-token',
        b = 'x-apple-cloudkit-session',
        E = (function () {
          function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
            if (
              ((0, l['default'])(this, e),
              v['default'].assertArg(t, 'request cannot be null'),
              v['default'].assertArg(n, 'httpResponse cannot be null'),
              (this._request = t),
              (this._httpResponse = n),
              null !== r)
            ) {
              var i = n.body[r]
              if (!v['default'].isArray(i)) throw y['default'].makeUnexpectedServerResponse()
              var o = i.reduce(
                  function (e, t) {
                    return (
                      y['default'].isErrorObject(t)
                        ? e.errors.push(y['default'].fromServerError(t))
                        : e.results.push(t),
                      e
                    )
                  },
                  { results: [], errors: [] },
                ),
                u = o.results,
                a = o.errors
              ;(this._errors = a), (this._results = u)
            }
          }
          return (
            (0, h['default'])(
              e,
              [
                {
                  key: 'getCKSession',
                  value: function () {
                    var e = null
                    try {
                      e = m['default'].readHeader(this.httpResponse.headers, k)
                    } catch (t) {}
                    return (
                      v['default'].isNullOrUndefined(e) &&
                        (e = m['default'].readHeader(this.httpResponse.headers, b)),
                      e
                    )
                  },
                },
                {
                  key: 'request',
                  get: function () {
                    return this._request
                  },
                },
                {
                  key: 'httpResponse',
                  get: function () {
                    return this._httpResponse
                  },
                },
                {
                  key: 'errors',
                  get: function () {
                    return this._errors
                  },
                },
                {
                  key: 'hasErrors',
                  get: function () {
                    var e = this.errors
                    return e && e.length > 0
                  },
                },
                {
                  key: 'isResponse',
                  get: function () {
                    return !0
                  },
                },
              ],
              [
                {
                  key: 'createGenericResponseClass',
                  value: function (t) {
                    return (function (e) {
                      function n(e, r) {
                        return (
                          (0, l['default'])(this, n),
                          (0, a['default'])(
                            this,
                            (n.__proto__ || (0, o['default'])(n)).call(this, e, r, t),
                          )
                        )
                      }
                      return (
                        (0, f['default'])(n, e),
                        (0, h['default'])(n, [
                          {
                            key: t,
                            get: function () {
                              return this._results
                            },
                          },
                        ]),
                        n
                      )
                    })(e)
                  },
                },
              ],
            ),
            e
          )
        })()
      t['default'] = E
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(3),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(85),
        l = r(c),
        d = n(229),
        h = r(d),
        p = n(230),
        v = r(p),
        _ = n(112),
        y = r(_),
        g = n(231),
        m = r(g),
        k = (function () {
          function e() {
            ;(0, a['default'])(this, e), l['default'].isNode() || this.setDelegate(m['default'])
          }
          return (
            (0, f['default'])(e, [
              {
                key: 'setDelegate',
                value: function (e) {
                  if (l['default'].isNullOrUndefined(e)) {
                    if (l['default'].isNode()) throw new Error('No fetch delegate.')
                    this._delegate = m['default']
                  } else this._delegate = e
                },
              },
              {
                key: 'fetch',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = v['default'].newNetworkStat(e, t)
                  return (
                    (t = (0, o['default'])({ Promise: y['default'].Promise }, t)),
                    this.fetchWithoutReporting(e, t)
                      ['catch'](function (e) {
                        throw (n.networkError(e), e)
                      })
                      .then(function (e) {
                        return e.status >= 500 && e.status < 600 && n.error5XX(e), e
                      })
                  )
                },
              },
              {
                key: 'fetchJSON',
                value: function (e, t) {
                  return this.fetch(e, t).then(function (e) {
                    return e.json()
                  })
                },
              },
              {
                key: 'fetchWithoutReporting',
                value: function (e, t) {
                  return this._delegate.apply(null, [e, t, m['default']])
                },
              },
              {
                key: 'readHeader',
                value: function (e, t) {
                  try {
                    if (l['default'].isNullOrUndefined(e)) return null
                    if (l['default'].isFunction(e.get)) return e.get(t)
                    if (!l['default'].isNullOrUndefined(e[t])) return e[t]
                  } catch (n) {
                    h['default'].warn('Error reading header: ' + t + ' ' + n + '}')
                  }
                  return null
                },
              },
            ]),
            e
          )
        })(),
        b = new k()
      t['default'] = b
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(86),
        o = r(i),
        u = n(85),
        a = r(u),
        s = 'CloudKitJS',
        f = null,
        c = function () {
          return a['default'].isNullOrUndefined(f)
            ? 'undefined' != typeof CloudKit && CloudKit.logToConsole
              ? console
              : void 0
            : f
        },
        l = {
          setDelegate: function (e) {
            f = e
          },
          info: function () {
            var e = c()
            if (!a['default'].isNullOrUndefined(e) && a['default'].isFunction(e.info)) {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]
              e.info.apply(e, (0, o['default'])([s].concat(n)))
            }
          },
          warn: function () {
            var e = c()
            if (!a['default'].isNullOrUndefined(e) && a['default'].isFunction(e.warn)) {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]
              e.warn.apply(e, (0, o['default'])([s].concat(n)))
            }
          },
          error: function () {
            var e = c()
            if (!a['default'].isNullOrUndefined(e) && a['default'].isFunction(e.error)) {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r]
              e.error.apply(e, (0, o['default'])([s].concat(n)))
            }
          },
        }
      t['default'] = l
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        var t = A.exec(e)
        return { host: t[10], pathName: t[13] }
      }
      function o() {
        try {
          var e = i(window.location.href),
            t = e.host
          if (t.endsWith('icloud.com')) return 'https://feedbackws.icloud.com/reportStats'
        } catch (n) {}
        return 'https://feedbackws.apple-cloudkit.com/reportStats'
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var u = n(99),
        a = r(u),
        s = n(2),
        f = r(s),
        c = n(106),
        l = r(c),
        d = n(199),
        h = r(d),
        p = n(214),
        v = r(p),
        _ = n(218),
        y = r(_),
        g = n(80),
        m = r(g),
        k = n(81),
        b = r(k),
        E = n(195),
        N = r(E),
        O = n(228),
        I = r(O),
        w = n(226),
        S = r(w),
        A = /^(((([^:\/#\?]+:)?(?:(\/\/)((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?\]\[]+|\[[^\/\]@#?]+\])(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/,
        R = (function () {
          try {
            return i(window.location.href)
          } catch (e) {
            return {}
          }
        })(),
        T = 15e3,
        L = 'CKJS',
        C = 'CKJSNetworkError',
        x = 'CKJSStatus5XX',
        M = 'CKJSDeprecatedMethod',
        U = 'CKJSDeprecatedConfig',
        P = 'CKJSDeprecatedOptions',
        D = 'CKJSUnexpectedAuthError',
        j = 'CKJSSharingFlowDidRun',
        Q = 'CKJSSharingFlowTimeout',
        B = 'CKJSSharingFlowError',
        F = 'X-Apple-Request-UUID',
        z = (function () {
          function e(t, n, r) {
            ;(0, m['default'])(this, e),
              (this._reporting = t),
              (this._start = new Date().getTime()),
              (this._statName = n),
              (this._message = r),
              (this._hostname = R.host),
              (this._urlPath = R.pathName)
          }
          return (
            (0, b['default'])(e, [
              {
                key: 'report',
                value: function () {
                  this._reporting.reportStat(this)
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return {
                    appName: L,
                    ckjsBuildVersion: N['default'].BUILD_VERSION,
                    statName: this._statName,
                    message: this._message,
                    clientTiming: new Date().getTime() - this._start,
                    hostname: this._hostname,
                    urlPath: this._urlPath,
                  }
                },
              },
            ]),
            e
          )
        })(),
        K = (function (e) {
          function t(e, n, r) {
            ;(0, m['default'])(this, t)
            var o = (0, h['default'])(this, (t.__proto__ || (0, l['default'])(t)).call(this, e)),
              u = i(n),
              a = u.host,
              s = u.pathName
            return (o._hostname = a), (o._urlPath = s), (o._httpMethod = r.method), o
          }
          return (
            (0, y['default'])(t, e),
            (0, b['default'])(t, [
              {
                key: 'networkError',
                value: function () {
                  ;(this._statName = C), this.report()
                },
              },
              {
                key: 'error5XX',
                value: function (e) {
                  ;(this._statName = x),
                    (this._statusCode = e.status),
                    (this._requestUUID = I['default'].readHeader(e.headers, F)),
                    this.report()
                },
              },
              {
                key: 'toJSON',
                value: function () {
                  return (0, f['default'])(
                    {},
                    (0, v['default'])(
                      t.prototype.__proto__ || (0, l['default'])(t.prototype),
                      'toJSON',
                      this,
                    ).call(this),
                    {
                      httpMethod: this._httpMethod,
                      requestUUID: this._requestUUID,
                      statusCode: this._statusCode,
                    },
                  )
                },
              },
            ]),
            t
          )
        })(z),
        H = (function (e) {
          function t(e) {
            return (
              (0, m['default'])(this, t),
              (0, h['default'])(this, (t.__proto__ || (0, l['default'])(t)).call(this, e))
            )
          }
          return (
            (0, y['default'])(t, e),
            (0, b['default'])(t, [
              {
                key: 'didRun',
                value: function () {
                  ;(this._statName = j), this.report()
                },
              },
              {
                key: 'didError',
                value: function (e) {
                  S['default'].SHARE_UI_TIMEOUT === e.ckErrorCode
                    ? (this._statName = Q)
                    : (this._statName = B),
                    this.report()
                },
              },
            ]),
            t
          )
        })(z),
        V = (function () {
          function e() {
            ;(0, m['default'])(this, e), (this._stats = []), this._flushLater()
          }
          return (
            (0, b['default'])(e, [
              {
                key: 'reportStat',
                value: function (e) {
                  this._stats.push(e.toJSON())
                },
              },
              {
                key: '_flushLater',
                value: function () {
                  var e = this
                  setTimeout(function () {
                    return e._flush()
                  }, T)
                },
              },
              {
                key: '_flush',
                value: function () {
                  this._stats.length > 0 &&
                    (I['default'].fetchWithoutReporting(o(), {
                      method: 'POST',
                      body: (0, a['default'])({ stats: this._stats }),
                      credentials: 'omit',
                      headers: { 'content-type': 'text/plain' },
                    }),
                    (this._stats = [])),
                    this._flushLater()
                },
              },
              {
                key: 'newNetworkStat',
                value: function (e, t) {
                  return new K(this, e, t)
                },
              },
              {
                key: 'newSharingFlowStat',
                value: function () {
                  return new H(this)
                },
              },
              {
                key: 'reportDeprecatedOptionUsed',
                value: function (e) {
                  new z(this, P, e).report()
                },
              },
              {
                key: 'reportDeprecatedConfigurationUsed',
                value: function (e) {
                  new z(this, U, e).report()
                },
              },
              {
                key: 'reportDeprecatedMethodUsed',
                value: function (e, t) {
                  new z(this, M, e + '->' + t).report()
                },
              },
              {
                key: 'reportUnexpectedAuthError',
                value: function () {
                  new z(this, D).report()
                },
              },
            ]),
            e
          )
        })(),
        q = new V()
      t['default'] = q
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e, t) {
        return new A(e, t).fetch()
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = n(106),
        u = r(o),
        a = n(199),
        s = r(a),
        f = n(218),
        c = r(f),
        l = n(41),
        d = r(l),
        h = n(232),
        p = r(h),
        v = n(235),
        _ = r(v),
        y = n(101),
        g = r(y),
        m = n(251),
        k = r(m),
        b = n(80),
        E = r(b),
        N = n(81),
        O = r(N)
      t['default'] = i
      var I = (function () {
          function e(t) {
            var n = this
            ;(0, E['default'])(this, e),
              (this._headers = new k['default']()),
              t instanceof e
                ? t.forEach(function (e, t) {
                    return t.forEach(function (t) {
                      return n.append(e, t)
                    })
                  })
                : t &&
                  (0, g['default'])(t).forEach(function (e) {
                    return n.append(e, t[e])
                  })
          }
          return (
            (0, O['default'])(
              e,
              [
                {
                  key: 'append',
                  value: function (e, t) {
                    ;(e = e.toLowerCase()), this.has(e) ? this.getAll(e).add(t) : this.set(e, t)
                  },
                },
                {
                  key: 'delete',
                  value: function (e) {
                    ;(e = e.toLowerCase()), this._headers['delete'](e)
                  },
                },
                {
                  key: 'get',
                  value: function (e) {
                    e = e.toLowerCase()
                    var t = this.getAll(e)
                    return 0 === t.size ? null : t.values().next().value
                  },
                },
                {
                  key: 'getAll',
                  value: function (e) {
                    return (
                      (e = e.toLowerCase()), this.has(e) ? this._headers.get(e) : new _['default']()
                    )
                  },
                },
                {
                  key: 'has',
                  value: function (e) {
                    return (e = e.toLowerCase()), this._headers.has(e)
                  },
                },
                {
                  key: 'set',
                  value: function (e, t) {
                    ;(e = e.toLowerCase()), this._headers.set(e, new _['default']().add(t))
                  },
                },
                {
                  key: 'forEach',
                  value: function (e) {
                    var t = !0,
                      n = !1,
                      r = void 0
                    try {
                      for (
                        var i, o = (0, p['default'])(this._headers.keys());
                        !(t = (i = o.next()).done);
                        t = !0
                      ) {
                        var u = i.value
                        e(u, this._headers.get(u))
                      }
                    } catch (a) {
                      ;(n = !0), (r = a)
                    } finally {
                      try {
                        !t && o['return'] && o['return']()
                      } finally {
                        if (n) throw r
                      }
                    }
                  },
                },
              ],
              [
                {
                  key: 'fromXHR',
                  value: function (t) {
                    var n = new e(),
                      r = t.getAllResponseHeaders().trim().split('\n')
                    return (
                      r.forEach(function (e) {
                        var t = e.trim().split(':'),
                          r = t.shift().trim(),
                          i = t.join(':').trim()
                        i.split(';').forEach(function (e) {
                          n.append(r, e.trim())
                        })
                      }),
                      n
                    )
                  },
                },
              ],
            ),
            e
          )
        })(),
        w = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            ;(0, E['default'])(this, e),
              (this._payload = t),
              (this.bodyUsed = !1),
              (this._Promise = n.Promise || d['default'])
          }
          return (
            (0, O['default'])(e, [
              {
                key: 'text',
                value: function () {
                  return this.bodyUsed
                    ? this._Promise.reject(new TypeError('Body already used'))
                    : ((this.bodyUsed = !0), this._Promise.resolve(this._payload))
                },
              },
              {
                key: 'json',
                value: function () {
                  return this.text().then(JSON.parse)
                },
              },
              {
                key: 'blob',
                value: function () {
                  return this._Promise.resolve(new Blob([this._payload]))
                },
              },
            ]),
            e
          )
        })(),
        S = (function (e) {
          function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            ;(0, E['default'])(this, t)
            var r = (0, s['default'])(this, (t.__proto__ || (0, u['default'])(t)).call(this, e, n))
            return (
              (r.type = 'default'),
              (r.url = null),
              (r.status = n.status),
              (r.statusText = n.statusText),
              (r.headers = n.headers),
              (r.url = n.url || ''),
              r
            )
          }
          return (0, c['default'])(t, e), t
        })(w),
        A = (function (e) {
          function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            ;(0, E['default'])(this, t)
            var r = (0, s['default'])(
              this,
              (t.__proto__ || (0, u['default'])(t)).call(this, n.body, n),
            )
            return (
              (r.url = e),
              (r.credentials = n.credentials || 'omit'),
              (r.headers = new I(n.headers)),
              (r.method = n.method ? n.method.toUpperCase() : 'GET'),
              (r.mode = n.mode || null),
              (r.options = n),
              r
            )
          }
          return (
            (0, c['default'])(t, e),
            (0, O['default'])(t, [
              {
                key: 'fetch',
                value: function () {
                  var e = this
                  return new this._Promise(function (t, n) {
                    var r = new XMLHttpRequest()
                    'include' === e.credentials && (r.withCredentials = !0)
                    var i = function u() {
                        r.removeEventListener('load', u), r.removeEventListener('error', o)
                        var i = r.status
                        if (i < 100 || i > 599) return void n(new TypeError('Network failure'))
                        var a = {
                          status: i,
                          statusText: r.statusText,
                          headers: I.fromXHR(r),
                          url: r.responseURL,
                          Promise: e._Promise,
                        }
                        t(new S(r.responseText, a))
                      },
                      o = function a() {
                        r.removeEventListener('load', i),
                          r.removeEventListener('error', a),
                          n(new TypeError('Network failure'))
                      }
                    r.addEventListener('load', i),
                      r.addEventListener('error', o),
                      e.options &&
                        e.options.exposeImplementation &&
                        e.options.exposeImplementation(r),
                      r.open(e.method, e.url, !0),
                      e.headers.forEach(function (e, t) {
                        t.forEach(function (t) {
                          r.setRequestHeader(e, t)
                        })
                      }),
                      r.send('undefined' == typeof e._payload ? null : e._payload)
                  })
                },
              },
            ]),
            t
          )
        })(w)
    },
    function (e, t, n) {
      e.exports = { default: n(233), __esModule: !0 }
    },
    function (e, t, n) {
      n(56), n(44), (e.exports = n(234))
    },
    function (e, t, n) {
      var r = n(13),
        i = n(66)
      e.exports = n(8).getIterator = function (e) {
        var t = i(e)
        if ('function' != typeof t) throw TypeError(e + ' is not iterable!')
        return r(t.call(e))
      }
    },
    function (e, t, n) {
      e.exports = { default: n(236), __esModule: !0 }
    },
    function (e, t, n) {
      n(43), n(44), n(56), n(237), n(244), n(247), n(249), (e.exports = n(8).Set)
    },
    function (e, t, n) {
      'use strict'
      var r = n(238),
        i = n(239),
        o = 'Set'
      e.exports = n(240)(
        o,
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        },
        {
          add: function (e) {
            return r.def(i(this, o), (e = 0 === e ? 0 : e), e)
          },
        },
        r,
      )
    },
    function (e, t, n) {
      'use strict'
      var r = n(12).f,
        i = n(50),
        o = n(75),
        u = n(9),
        a = n(62),
        s = n(63),
        f = n(46),
        c = n(59),
        l = n(76),
        d = n(16),
        h = n(207).fastKey,
        p = n(239),
        v = d ? '_s' : 'size',
        _ = function (e, t) {
          var n,
            r = h(t)
          if ('F' !== r) return e._i[r]
          for (n = e._f; n; n = n.n) if (n.k == t) return n
        }
      e.exports = {
        getConstructor: function (e, t, n, f) {
          var c = e(function (e, r) {
            a(e, c, t, '_i'),
              (e._t = t),
              (e._i = i(null)),
              (e._f = void 0),
              (e._l = void 0),
              (e[v] = 0),
              void 0 != r && s(r, n, e[f], e)
          })
          return (
            o(c.prototype, {
              clear: function () {
                for (var e = p(this, t), n = e._i, r = e._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i]
                ;(e._f = e._l = void 0), (e[v] = 0)
              },
              delete: function (e) {
                var n = p(this, t),
                  r = _(n, e)
                if (r) {
                  var i = r.n,
                    o = r.p
                  delete n._i[r.i],
                    (r.r = !0),
                    o && (o.n = i),
                    i && (i.p = o),
                    n._f == r && (n._f = i),
                    n._l == r && (n._l = o),
                    n[v]--
                }
                return !!r
              },
              forEach: function (e) {
                p(this, t)
                for (
                  var n, r = u(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (r(n.v, n.k, this); n && n.r; ) n = n.p
              },
              has: function (e) {
                return !!_(p(this, t), e)
              },
            }),
            d &&
              r(c.prototype, 'size', {
                get: function () {
                  return p(this, t)[v]
                },
              }),
            c
          )
        },
        def: function (e, t, n) {
          var r,
            i,
            o = _(e, t)
          return (
            o
              ? (o.v = n)
              : ((e._l = o = { i: i = h(t, !0), k: t, v: n, p: r = e._l, n: void 0, r: !1 }),
                e._f || (e._f = o),
                r && (r.n = o),
                e[v]++,
                'F' !== i && (e._i[i] = o)),
            e
          )
        },
        getEntry: _,
        setStrong: function (e, t, n) {
          f(
            e,
            t,
            function (e, n) {
              ;(this._t = p(e, t)), (this._k = n), (this._l = void 0)
            },
            function () {
              for (var e = this, t = e._k, n = e._l; n && n.r; ) n = n.p
              return e._t && (e._l = n = n ? n.n : e._t._f)
                ? 'keys' == t
                  ? c(0, n.k)
                  : 'values' == t
                  ? c(0, n.v)
                  : c(0, [n.k, n.v])
                : ((e._t = void 0), c(1))
            },
            n ? 'entries' : 'values',
            !n,
            !0,
          ),
            l(t)
        },
      }
    },
    function (e, t, n) {
      var r = n(14)
      e.exports = function (e, t) {
        if (!r(e) || e._t !== t) throw TypeError('Incompatible receiver, ' + t + ' required!')
        return e
      }
    },
    function (e, t, n) {
      'use strict'
      var r = n(7),
        i = n(6),
        o = n(207),
        u = n(17),
        a = n(11),
        s = n(75),
        f = n(63),
        c = n(62),
        l = n(14),
        d = n(53),
        h = n(12).f,
        p = n(241)(0),
        v = n(16)
      e.exports = function (e, t, n, _, y, g) {
        var m = r[e],
          k = m,
          b = y ? 'set' : 'add',
          E = k && k.prototype,
          N = {}
        return (
          v &&
          'function' == typeof k &&
          (g ||
            (E.forEach &&
              !u(function () {
                new k().entries().next()
              })))
            ? ((k = t(function (t, n) {
                c(t, k, e, '_c'), (t._c = new m()), void 0 != n && f(n, y, t[b], t)
              })),
              p(
                'add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','),
                function (e) {
                  var t = 'add' == e || 'set' == e
                  e in E &&
                    (!g || 'clear' != e) &&
                    a(k.prototype, e, function (n, r) {
                      if ((c(this, k, e), !t && g && !l(n))) return 'get' == e && void 0
                      var i = this._c[e](0 === n ? 0 : n, r)
                      return t ? this : i
                    })
                },
              ),
              g ||
                h(k.prototype, 'size', {
                  get: function () {
                    return this._c.size
                  },
                }))
            : ((k = _.getConstructor(t, e, y, b)), s(k.prototype, n), (o.NEED = !0)),
          d(k, e),
          (N[e] = k),
          i(i.G + i.W + i.F, N),
          g || _.setStrong(k, e, y),
          k
        )
      }
    },
    function (e, t, n) {
      var r = n(9),
        i = n(26),
        o = n(40),
        u = n(30),
        a = n(242)
      e.exports = function (e, t) {
        var n = 1 == e,
          s = 2 == e,
          f = 3 == e,
          c = 4 == e,
          l = 6 == e,
          d = 5 == e || l,
          h = t || a
        return function (t, a, p) {
          for (
            var v,
              _,
              y = o(t),
              g = i(y),
              m = r(a, p, 3),
              k = u(g.length),
              b = 0,
              E = n ? h(t, k) : s ? h(t, 0) : void 0;
            k > b;
            b++
          )
            if ((d || b in g) && ((v = g[b]), (_ = m(v, b, y)), e))
              if (n) E[b] = _
              else if (_)
                switch (e) {
                  case 3:
                    return !0
                  case 5:
                    return v
                  case 6:
                    return b
                  case 2:
                    E.push(v)
                }
              else if (c) return !1
          return l ? -1 : f || c ? c : E
        }
      }
    },
    function (e, t, n) {
      var r = n(243)
      e.exports = function (e, t) {
        return new (r(e))(t)
      }
    },
    function (e, t, n) {
      var r = n(14),
        i = n(210),
        o = n(54)('species')
      e.exports = function (e) {
        var t
        return (
          i(e) &&
            ((t = e.constructor),
            'function' != typeof t || (t !== Array && !i(t.prototype)) || (t = void 0),
            r(t) && ((t = t[o]), null === t && (t = void 0))),
          void 0 === t ? Array : t
        )
      }
    },
    function (e, t, n) {
      var r = n(6)
      r(r.P + r.R, 'Set', { toJSON: n(245)('Set') })
    },
    function (e, t, n) {
      var r = n(61),
        i = n(246)
      e.exports = function (e) {
        return function () {
          if (r(this) != e) throw TypeError(e + "#toJSON isn't generic")
          return i(this)
        }
      }
    },
    function (e, t, n) {
      var r = n(63)
      e.exports = function (e, t) {
        var n = []
        return r(e, !1, n.push, n, t), n
      }
    },
    function (e, t, n) {
      n(248)('Set')
    },
    function (e, t, n) {
      'use strict'
      var r = n(6)
      e.exports = function (e) {
        r(r.S, e, {
          of: function () {
            for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e]
            return new this(t)
          },
        })
      }
    },
    function (e, t, n) {
      n(250)('Set')
    },
    function (e, t, n) {
      'use strict'
      var r = n(6),
        i = n(10),
        o = n(9),
        u = n(63)
      e.exports = function (e) {
        r(r.S, e, {
          from: function (e) {
            var t,
              n,
              r,
              a,
              s = arguments[1]
            return (
              i(this),
              (t = void 0 !== s),
              t && i(s),
              void 0 == e
                ? new this()
                : ((n = []),
                  t
                    ? ((r = 0),
                      (a = o(s, arguments[2], 2)),
                      u(e, !1, function (e) {
                        n.push(a(e, r++))
                      }))
                    : u(e, !1, n.push, n),
                  new this(n))
            )
          },
        })
      }
    },
    function (e, t, n) {
      e.exports = { default: n(252), __esModule: !0 }
    },
    function (e, t, n) {
      n(43), n(44), n(56), n(253), n(254), n(255), n(256), (e.exports = n(8).Map)
    },
    function (e, t, n) {
      'use strict'
      var r = n(238),
        i = n(239),
        o = 'Map'
      e.exports = n(240)(
        o,
        function (e) {
          return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        },
        {
          get: function (e) {
            var t = r.getEntry(i(this, o), e)
            return t && t.v
          },
          set: function (e, t) {
            return r.def(i(this, o), 0 === e ? 0 : e, t)
          },
        },
        r,
        !0,
      )
    },
    function (e, t, n) {
      var r = n(6)
      r(r.P + r.R, 'Map', { toJSON: n(245)('Map') })
    },
    function (e, t, n) {
      n(248)('Map')
    },
    function (e, t, n) {
      n(250)('Map')
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(95),
        o = r(i),
        u = n(99),
        a = r(u),
        s = n(80),
        f = r(s),
        c = n(81),
        l = r(c),
        d = n(228),
        h = r(d),
        p = n(85),
        v = r(p),
        _ = (function () {
          function e(t) {
            var n = t.host,
              r = void 0 === n ? null : n,
              i = t.parameters,
              o = void 0 === i ? {} : i,
              u = t.headers,
              a = void 0 === u ? {} : u,
              s = t.body,
              c = void 0 === s ? null : s
            ;(0, f['default'])(this, e),
              (this._host = r),
              (this._path = ''),
              (this._params = v['default'].assign({}, o)),
              (this._headers = v['default'].assign({}, a)),
              (this._body = v['default'].isNullOrUndefined(c) ? void 0 : c),
              (this._method = v['default'].isNullOrUndefined(c) ? 'GET' : 'POST')
          }
          return (
            (0, l['default'])(e, [
              {
                key: 'setMethod',
                value: function (e) {
                  return (this._method = e), this
                },
              },
              {
                key: 'setHost',
                value: function (e) {
                  return (this._host = e), this
                },
              },
              {
                key: 'setPath',
                value: function (e) {
                  return (this._path = e), this
                },
              },
              {
                key: 'setBody',
                value: function (e) {
                  return (this._body = e), this
                },
              },
              {
                key: 'getBody',
                value: function () {
                  return this._body
                },
              },
              {
                key: 'getBodyStringified',
                value: function () {
                  return v['default'].isString(this._body)
                    ? this._body
                    : v['default'].isNullOrUndefined(this._body)
                    ? this._body
                    : (0, a['default'])(this._body)
                },
              },
              {
                key: 'setHeader',
                value: function (e, t) {
                  return (this._headers[e] = t), this
                },
              },
              {
                key: 'addHeaders',
                value: function (e) {
                  return (this._headers = v['default'].assign(this._headers, e)), this
                },
              },
              {
                key: 'setParameter',
                value: function (e, t) {
                  var n = {}
                  return (n[e] = t), this.addParams(n), this
                },
              },
              {
                key: 'addParams',
                value: function (e) {
                  return (this._params = v['default'].assign(this._params, e)), this
                },
              },
              {
                key: 'getParameterString',
                value: function () {
                  var e = this._params
                  return v['default'].isNullOrUndefined(e)
                    ? ''
                    : (0, o['default'])(e)
                        .reduce(function (t, n) {
                          return t + n + '=' + e[n] + '&'
                        }, '?')
                        .slice(0, -1)
                },
              },
              {
                key: 'getPath',
                value: function () {
                  return this._path
                },
              },
              {
                key: 'getPathWithParams',
                value: function () {
                  return this.getPath() + this.getParameterString()
                },
              },
              {
                key: 'getFullURL',
                value: function () {
                  return this._host
                    ? this._host + this.getPathWithParams()
                    : this.getPathWithParams()
                },
              },
              {
                key: 'send',
                value: function () {
                  var e = this.getFullURL(),
                    t = this._method,
                    n = this._headers,
                    r = this.getBodyStringified(),
                    i = { method: t, headers: n, body: r, credentials: 'same-origin' }
                  return h['default'].fetch(e, i)
                },
              },
            ]),
            e
          )
        })()
      t['default'] = _
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(235),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(85),
        l = r(c),
        d = n(228),
        h = r(d),
        p = n(229),
        v = r(p),
        _ = 10,
        y = 1e3,
        g = (function () {
          function e(t) {
            ;(0, a['default'])(this, e),
              (this._apnsEnvironment = t),
              (this._apnsToken = null),
              (this._notificationListeners = new o['default']()),
              (this._isPolling = !1),
              (this._urlPath = null),
              (this._failureBackoff = _)
          }
          return (
            (0, f['default'])(e, [
              {
                key: 'consumeApnsInfo',
                value: function (e) {
                  var t = e.apnsToken,
                    n = e.webcourierURL
                  ;(this._apnsToken = t), (this._urlPath = n)
                },
              },
              {
                key: 'clearApnsInfo',
                value: function () {
                  ;(this._apnsToken = null), (this._urlPath = null)
                },
              },
              {
                key: '_canParkConnection',
                value: function () {
                  return (
                    !this._isPolling && this.hasApnsToken && this._notificationListeners.size > 0
                  )
                },
              },
              {
                key: '_parkConnection',
                value: function () {
                  var e = this
                  this._canParkConnection() &&
                    ((this._isPolling = !0),
                    h['default']
                      .fetchJSON(this._urlPath)
                      .then(function (t) {
                        e._isPolling = !1
                        try {
                          e._handleNotification(t)
                        } catch (n) {
                          throw (v['default'].warn('Error', n), n)
                        }
                        ;(e._failureBackoff = _),
                          setTimeout(function () {
                            return e._parkConnection()
                          }, _)
                      })
                      ['catch'](function (t) {
                        ;(e._isPolling = !1),
                          v['default'].warn('Error', t),
                          setTimeout(function () {
                            return e._parkConnection()
                          }, e._failureBackoff),
                          (e._failureBackoff = Math.min(y, e._failureBackoff * _))
                      }))
                },
              },
              {
                key: '_handleNotification',
                value: function (e) {
                  e &&
                    this._notificationListeners.forEach(function (t) {
                      l['default'].isFunction(t)
                        ? t(e)
                        : l['default'].isFunction(t.handleNotification) && t.handleNotification(e)
                    })
                },
              },
              {
                key: 'addNotificationListener',
                value: function (e) {
                  if (!l['default'].isFunction(e) && !l['default'].isFunction(e.handleNotification))
                    throw new Error(
                      'notification listener must be either a function or an object with a function called "handleNotification"',
                    )
                  return this._notificationListeners.add(e), this._parkConnection(), e
                },
              },
              {
                key: 'removeNotificationListener',
                value: function (e) {
                  return this._notificationListeners['delete'](e), e
                },
              },
              {
                key: 'hasNotificationListener',
                value: function (e) {
                  return this._notificationListeners.has(e)
                },
              },
              {
                key: 'apnsToken',
                get: function () {
                  return this._apnsToken
                },
              },
              {
                key: 'hasApnsToken',
                get: function () {
                  return (
                    !l['default'].isNullOrUndefined(this._urlPath) &&
                    !l['default'].isNullOrUndefined(this._apnsToken)
                  )
                },
              },
            ]),
            e
          )
        })()
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(235),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(260),
        l = r(c),
        d = n(85),
        h = r(d),
        p = n(198),
        v = r(p),
        _ = n(288),
        y = r(_),
        g = n(289),
        m = r(g),
        k = n(290),
        b = r(k),
        E = n(294),
        N = r(E),
        O = n(195),
        I = r(O),
        w = n(263),
        S = r(w),
        A = n(229),
        R = r(A),
        T = n(112),
        L = r(T),
        C = (function () {
          function e(t) {
            var n = t.containerConfig,
              r = t.apnsManager,
              i = t.authTokenStore
            ;(0, a['default'])(this, e),
              (this._config = n),
              (this._apnsManager = r),
              (this._containerIdentifier = n.containerIdentifier),
              (this._environment = n.environment || I['default'].DEVELOPMENT_ENVIRONMENT),
              (this._apnsEnvironment = n.apnsEnvironment || I['default'].DEVELOPMENT_ENVIRONMENT),
              (this._publicDatabase = new l['default'](
                this,
                S['default'].PUBLIC,
                n.publicDatabasePartition,
              )),
              (this._privateDatabase = new l['default'](
                this,
                S['default'].PRIVATE,
                n.privateDatabasePartition,
              )),
              (this._sharedDatabase = new l['default'](
                this,
                S['default'].SHARED,
                void 0 !== n.sharedDatabasePartition
                  ? n.sharedDatabasePartition
                  : n.privateDatabasePartition,
              )),
              (this._notificationListeners = new o['default']()),
              (this._auth = N['default'].createAuth({
                container: this,
                containerConfig: n,
                authTokenStore: i,
              }))
          }
          return (
            (0, f['default'])(e, [
              {
                key: 'getDatabaseWithDatabaseScope',
                value: function (e) {
                  return e === S['default'].PUBLIC
                    ? this.publicCloudDatabase
                    : e === S['default'].PRIVATE
                    ? this.privateCloudDatabase
                    : e === S['default'].SHARED
                    ? this.sharedCloudDatabase
                    : void 0
                },
              },
              {
                key: 'setUpAuth',
                value: function () {
                  return this._auth.setup()
                },
              },
              {
                key: 'whenUserSignsIn',
                value: function () {
                  return this._auth.whenUserSignsIn()
                },
              },
              {
                key: 'whenUserSignsOut',
                value: function () {
                  return this._auth.whenUserSignsOut()
                },
              },
              {
                key: 'signOut',
                value: function () {
                  this._auth.signOut()
                },
              },
              {
                key: 'fetchCurrentUserIdentity',
                value: function () {
                  var e = new v['default']().setApiEntityName('users').setApiActionName('caller')
                  return this.publicCloudDatabase.sendRequest(e).then(function (e) {
                    return e.httpResponse.body
                  })
                },
              },
              {
                key: 'discoverUserIdentities',
                value: function (e) {
                  h['default'].assertArg(e, 'at least one UserLookupInfo required')
                  var t = h['default'].asArray(e),
                    n = new v['default']()
                      .setApiEntityName('users')
                      .setApiActionName('discover')
                      .setPayload({ lookupInfos: t })
                      .setResponseClass(y['default'])
                  return this.publicCloudDatabase.sendRequest(n)
                },
              },
              {
                key: 'discoverUserIdentityWithEmailAddress',
                value: function (e) {
                  return this.discoverUserIdentities([{ emailAddress: e }])
                },
              },
              {
                key: 'discoverUserIdentityWithPhoneNumber',
                value: function (e) {
                  return this.discoverUserIdentities([{ phoneNumber: e }])
                },
              },
              {
                key: 'discoverUserIdentityWithUserRecordName',
                value: function (e) {
                  return this.discoverUserIdentities([{ userRecordName: e }])
                },
              },
              {
                key: 'discoverAllUserIdentities',
                value: function () {
                  var e = new v['default']()
                    .setApiEntityName('users')
                    .setApiActionName('discover')
                    .setResponseClass(y['default'])
                  return this.publicCloudDatabase.sendRequest(e)
                },
              },
              {
                key: 'addNotificationListener',
                value: function (e) {
                  return this._notificationListeners.add(e), this
                },
              },
              {
                key: 'removeNotificationListener',
                value: function (e) {
                  return this._notificationListeners['delete'](e), this
                },
              },
              {
                key: 'handleNotification',
                value: function (e) {
                  R['default'].info('Notification', e, 'handled by', this),
                    (e = b['default'].parseRawNotification(e) || e),
                    this._notificationListeners.forEach(function (t) {
                      h['default'].tryInvokeFunction(
                        t,
                        [e],
                        'Error while invoking ' + t + ' with ' + e,
                      )
                    })
                },
              },
              {
                key: 'registerForNotifications',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  return (
                    (e.clientID = e.clientId || e.clientID || this.getConfig().clientID),
                    this._apnsManager.registerContainerForNotification(this, e)
                  )
                },
              },
              {
                key: 'unregisterForNotifications',
                value: function () {
                  return this._apnsManager.unregisterContainerForNotification(this)
                },
              },
              {
                key: 'fetchRecordInfos',
                value: function (e) {
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  e = h['default'].asArray(e).map(function (e) {
                    return h['default'].isString(e) ? { value: e } : e
                  })
                  var t = new v['default']()
                    .setApiEntityName('records')
                    .setApiActionName('resolve')
                    .setPayload({ shortGUIDs: e })
                    .setResponseClass(m['default'])
                  return this._publicDatabase.sendRequest(t)
                },
              },
              {
                key: 'acceptShares',
                value: function (e) {
                  arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  e = h['default'].asArray(e).map(function (e) {
                    return h['default'].isString(e) ? { value: e } : e
                  })
                  var t = new v['default']()
                    .setApiEntityName('records')
                    .setApiActionName('accept')
                    .setPayload({ shortGUIDs: e })
                    .setResponseClass(m['default'])
                  return this._publicDatabase.sendRequest(t)
                },
              },
              {
                key: 'getConfig',
                value: function () {
                  return h['default'].assign({}, this._config, this._auth.getConfig())
                },
              },
              {
                key: 'sendRequest',
                value: function (e) {
                  e.setContainerIdentifier(this.containerIdentifier),
                    e.setContainerEnvironment(this.environment),
                    e.setClientID(this._config.clientID)
                  var t = this._auth.requestHandler(),
                    n = this._auth.responseHandler()
                  return L['default'].Promise.resolve(e)
                    .then(t)
                    .then(function (e) {
                      return e.send()
                    })
                    .then(n)
                },
              },
              {
                key: 'toString',
                value: function () {
                  return h['default'].instanceToString('Container', this)
                },
              },
              {
                key: 'containerIdentifier',
                get: function () {
                  return this._containerIdentifier
                },
              },
              {
                key: 'publicCloudDatabase',
                get: function () {
                  return this._publicDatabase
                },
              },
              {
                key: 'privateCloudDatabase',
                get: function () {
                  return this._privateDatabase
                },
              },
              {
                key: 'sharedCloudDatabase',
                get: function () {
                  return this._sharedDatabase
                },
              },
              {
                key: 'apnsEnvironment',
                get: function () {
                  return this._apnsEnvironment
                },
              },
              {
                key: 'environment',
                get: function () {
                  return this._environment
                },
              },
              {
                key: 'isRegisteredForNotifications',
                get: function () {
                  return this._apnsManager.isContainerRegisteredForNotifications(this)
                },
              },
            ]),
            e
          )
        })()
      t['default'] = C
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i,
        o = n(80),
        u = r(o),
        a = n(81),
        s = r(a),
        f = n(261),
        c = r(f),
        l = n(229),
        d = r(l),
        h = n(230),
        p = (r(h), n(85)),
        v = r(p),
        _ = n(262),
        y = r(_),
        g = n(263),
        m = r(g),
        k = n(264),
        b = r(k),
        E = n(266),
        N = r(E),
        O = n(269),
        I = r(O),
        w = n(265),
        S = r(w),
        A = n(270),
        R = r(A),
        T = n(271),
        L = r(T),
        C = n(272),
        x = r(C),
        M = n(273),
        U = r(M),
        P = n(274),
        D = r(P),
        j = n(275),
        Q = r(j),
        B = n(276),
        F = (r(B), n(277)),
        z = r(F),
        K = n(278),
        H = r(K),
        V = n(198),
        q = r(V),
        W = n(226),
        Z = r(W),
        G = n(267),
        Y = r(G),
        J = n(279),
        X = r(J),
        $ = n(285),
        ee = r($),
        te = n(286),
        ne = r(te),
        re = n(287),
        ie = r(re),
        oe = Y['default'].forKeys(
          'zoneID',
          'numbersAsStrings',
          'desiredKeys',
          'zoneWide',
          'resultsLimit',
          'continuationMarker',
        ),
        ue = Y['default'].forKeys(
          'zoneID',
          'desiredKeys',
          'numbersAsStrings',
          'assetPrivacyMaskType',
        ),
        ae = Y['default'].forKeys(
          'zoneID',
          'numbersAsStrings',
          'desiredKeys',
          'desiredRecordTypes',
          'resultsLimit',
          'syncToken',
          'reverse',
        ),
        se = Y['default'].forKeys(
          'zoneID',
          'desiredKeys',
          'pluginFields',
          'includeRecords',
          'excludeRecords',
          'shareName',
          'archiveName',
        ),
        fe = Y['default'].forKeys(
          'sourceZoneID',
          'targetZoneID',
          'sourceShareName',
          'targetRootName',
          'includeRecords',
          'excludeRecords',
        ),
        ce = Y['default'].forKeys('jobID'),
        le = function (e) {
          var t = { syncToken: e.syncToken }
          return t
        },
        de =
          ((i = {}),
          (0, c['default'])(i, m['default'].PUBLIC, 'public'),
          (0, c['default'])(i, m['default'].PRIVATE, 'private'),
          (0, c['default'])(i, m['default'].SHARED, 'shared'),
          i),
        he = (function () {
          function e(t, n, r) {
            ;(0, u['default'])(this, e),
              (this._container = t),
              (this._partition = r),
              (this._databaseScope = n)
          }
          return (
            (0, s['default'])(e, [
              {
                key: 'performQuery',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  if (
                    (d['default'].info('CloudKit Database#performQuery', e, t), e.isQueryResponse)
                  ) {
                    var n = e
                    return this.performQuery(n.query, v['default'].assign(oe(n), t))
                  }
                  var r = v['default'].assign({ query: e }, oe(t)),
                    i = new q['default']()
                      .setApiEntityName('records')
                      .setApiActionName('query')
                      .setResponseClass(b['default'])
                      .setPayload(r)
                  return this.sendRequest(i)
                },
              },
              {
                key: 'fetchRecords',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  d['default'].info('CloudKit Database#fetchRecords', e, t)
                  var n = y['default'].normalizeRecords(e).map(v['default'].picker('recordName')),
                    r = v['default'].assign({ records: n }, ue(t)),
                    i = new q['default']()
                      .setApiEntityName('records')
                      .setApiActionName('lookup')
                      .setResponseClass(S['default'])
                      .setPayload(r)
                  return this.sendRequest(i)
                },
              },
              {
                key: 'saveRecords',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    d['default'].info('CloudKit Database#saveRecords', e, t),
                    this.newRecordsBatch(t).createOrUpdate(e).commit()
                  )
                },
              },
              {
                key: 'deleteRecords',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    d['default'].info('CloudKit Database#deleteRecords', e, t),
                    this.newRecordsBatch(t).forceDelete(e).commit()
                  )
                },
              },
              {
                key: 'newRecordsBatch',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  return new N['default'](this, e)
                },
              },
              {
                key: 'commitRecordsBatchBuilder',
                value: function (e) {
                  var t = this,
                    n = I['default'].handleAssetsInBatchBeforeCommit(e)
                  return n.then(function () {
                    var n = new q['default']()
                      .setApiEntityName('records')
                      .setApiActionName('modify')
                      .setResponseClass(S['default'])
                      .setPayload(e.build())
                    return t.sendRequest(n)
                  })
                },
              },
              {
                key: 'assetRereference',
                value: function (e, t) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  d['default'].info('Database#assetRereference')
                  var r = {
                    assets: Q['default'].normalizeAssetRereferenceArray(e),
                    zoneID: y['default'].normalizeZone(t).zoneID,
                  }
                  n && (r.targetZoneID = y['default'].normalizeZone(n).zoneID)
                  var i = new q['default']()
                    .setApiEntityName('assets')
                    .setApiActionName('rereference')
                    .setResponseClass(D['default'])
                    .setPayload(r)
                  return this.sendRequest(i)
                },
              },
              {
                key: 'fetchAllRecordZones',
                value: function () {
                  d['default'].info('Database#fetchAllRecordZones')
                  var e = new q['default']()
                    .setApiEntityName('zones')
                    .setApiActionName('list')
                    .setResponseClass(L['default'])
                  return this.sendRequest(e)
                },
              },
              {
                key: 'fetchRecordZones',
                value: function (e) {
                  d['default'].info('Database#fetchRecordZones', e)
                  var t = y['default'].normalizeZones(e).map(function (e) {
                      return e.zoneID
                    }),
                    n = new q['default']()
                      .setApiEntityName('zones')
                      .setApiActionName('lookup')
                      .setPayload({ zones: t })
                      .setResponseClass(L['default'])
                  return this.sendRequest(n)
                },
              },
              {
                key: 'saveRecordZones',
                value: function (e) {
                  return (
                    d['default'].info('Database#saveRecordZones', e),
                    this.newRecordZonesBatch().create(e).commit()
                  )
                },
              },
              {
                key: 'deleteRecordZones',
                value: function (e) {
                  return (
                    d['default'].info('Database#deleteRecordZones', e),
                    this.newRecordZonesBatch()['delete'](e).commit()
                  )
                },
              },
              {
                key: 'newRecordZonesBatch',
                value: function () {
                  return new R['default'](this)
                },
              },
              {
                key: 'commitRecordZoneBatchBuilder',
                value: function (e) {
                  var t = new q['default']()
                    .setApiEntityName('zones')
                    .setApiActionName('modify')
                    .setPayload(e.build())
                    .setResponseClass(L['default'])
                  return this.sendRequest(t)
                },
              },
              {
                key: 'fetchAllSubscriptions',
                value: function () {
                  d['default'].info('Database#fetchAllSubscriptions')
                  var e = new q['default']()
                    .setApiEntityName('subscriptions')
                    .setApiActionName('list')
                    .setResponseClass(H['default'])
                  return this.sendRequest(e)
                },
              },
              {
                key: 'fetchSubscriptions',
                value: function (e) {
                  d['default'].info('Database#fetchSubscriptions', e),
                    (e = v['default'].asArray(e).map(function (e) {
                      return v['default'].isString(e) ? { subscriptionID: e } : e
                    }))
                  var t = new q['default']()
                    .setApiEntityName('subscriptions')
                    .setApiActionName('lookup')
                    .setPayload({ subscriptions: e })
                    .setResponseClass(H['default'])
                  return this.sendRequest(t)
                },
              },
              {
                key: 'deleteSubscriptions',
                value: function (e) {
                  return (
                    d['default'].info('Database#deleteSubscriptions', e),
                    this.newSubscriptionsBatch()['delete'](e).commit()
                  )
                },
              },
              {
                key: 'saveSubscriptions',
                value: function (e) {
                  return (
                    d['default'].info('Database#saveSubscriptions', e),
                    this.newSubscriptionsBatch().create(e).commit()
                  )
                },
              },
              {
                key: 'newSubscriptionsBatch',
                value: function () {
                  return new z['default'](this)
                },
              },
              {
                key: 'commitSubscriptionsBatchBuilder',
                value: function (e) {
                  var t = new q['default']()
                    .setApiEntityName('subscriptions')
                    .setApiActionName('modify')
                    .setPayload(e.build())
                    .setResponseClass(H['default'])
                  return this.sendRequest(t)
                },
              },
              {
                key: 'sendRequest',
                value: function (e) {
                  return (
                    v['default'].isNullOrUndefined(this._partition) || e.setHost(this._partition),
                    e.setDatabaseName(de[this.databaseScope]),
                    e.setApiModuleName('database'),
                    this._container.sendRequest(e)
                  )
                },
              },
              {
                key: 'toString',
                value: function () {
                  return (
                    '[Database (containerIdentifier: ' +
                    this.containerIdentifier +
                    ', scope: ' +
                    this.databaseScope +
                    ')]'
                  )
                },
              },
              {
                key: 'shareWithUI',
                value: function (e) {
                  var t = this.databaseScope,
                    n = this._container.getConfig()
                  return X['default'].run(
                    v['default'].assign({}, e, { databaseScope: t, containerConfiguration: n }),
                  )
                },
              },
              {
                key: 'fetchDatabaseChanges',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = void 0
                  n = e.isDatabaseChangesResponse ? v['default'].assign({}, le(e), t) : le(e)
                  var r = new q['default']()
                    .setApiEntityName('changes')
                    .setApiActionName('database')
                    .setPayload(n)
                    .setResponseClass(x['default'])
                  return this.sendRequest(r)
                },
              },
              {
                key: 'fetchRecordZoneChanges',
                value: function (e) {
                  var t = v['default'].asArray(e).map(ae),
                    n = new q['default']()
                      .setApiEntityName('changes')
                      .setApiActionName('zone')
                      .setPayload({ zones: t })
                      .setResponseClass(U['default'])
                  return this.sendRequest(n)
                },
              },
              {
                key: 'prepareZipDownload',
                value: function (e) {
                  d['default'].info('CloudKit Database#prepareZipDownload', e)
                  var t = v['default'].assign({}, se(e)),
                    n = new q['default']()
                      .setApiEntityName('records')
                      .setApiActionName('zip/prepare')
                      .setResponseClass(ee['default'])
                      .setPayload(t)
                  return this.sendRequest(n)
                },
              },
              {
                key: 'startAssetCopierJob',
                value: function (e) {
                  d['default'].info('CloudKit Database#startAssetCopierJob', e)
                  var t = new q['default']()
                    .setApiEntityName('records')
                    .setApiActionName('copy/start')
                    .setResponseClass(ne['default'])
                    .setPayload(fe(e))
                  if (
                    (e.includeRecords && e.excludeRecords) ||
                    (!e.includeRecords && !e.excludeRecords)
                  )
                    throw Z['default'].makeInvalidArguments(
                      'Request to StartAssetCopierJob can not simultaneously include or exlude both fields for `includeRecords` and `excludeRecords`',
                    )
                  return this.sendRequest(t)
                },
              },
              {
                key: 'checkAssetCopierJobStatus',
                value: function (e) {
                  d['default'].info('CloudKit Database#checkAssetCopierJobStatus', e)
                  var t = new q['default']()
                    .setApiEntityName('records')
                    .setApiActionName('copy/status')
                    .setResponseClass(ie['default'])
                    .setPayload(ce(e))
                  return this.sendRequest(t)
                },
              },
              {
                key: 'containerIdentifier',
                get: function () {
                  return this._container.containerIdentifier
                },
              },
              {
                key: 'databaseScope',
                get: function () {
                  return this._databaseScope
                },
              },
            ]),
            e
          )
        })()
      t['default'] = he
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.__esModule = !0
      var i = n(82),
        o = r(i)
      t['default'] = function (e, t, n) {
        return (
          t in e
            ? (0, o['default'])(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        if (f['default'].isNullOrUndefined(e))
          throw l['default'].makeInvalidArguments(
            'not a valid record/recordName: ' + f['default'].stringifyExposingUndefined(e),
          )
        return f['default'].isString(e) ? { recordName: e } : 'recordName' in e ? e : e
      }
      function o(e) {
        return f['default'].asArray(e).map(i)
      }
      function u(e) {
        if (f['default'].isNullOrUndefined(e))
          throw l['default'].makeInvalidArguments(
            'not a valid zone/zoneID: ' + f['default'].stringifyExposingUndefined(e),
          )
        if (f['default'].isString(e)) return { zoneID: { zoneName: e } }
        if (f['default'].isString(e.zoneName)) return { zoneID: e }
        if ('zoneID' in e && !f['default'].isNullOrUndefined(e.zoneID) && 'zoneName' in e.zoneID)
          return e
        throw l['default'].makeInvalidArguments(
          'not a valid zone/zoneID: ' + f['default'].stringifyExposingUndefined(e),
        )
      }
      function a(e) {
        return f['default'].asArray(e).map(u)
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var s = n(85),
        f = r(s),
        c = n(226),
        l = r(c)
      t['default'] = { normalizeRecords: o, normalizeZones: a, normalizeZone: u }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'PUBLIC',
        r = 'PRIVATE',
        i = 'SHARED'
      t['default'] = { PUBLIC: n, PRIVATE: r, SHARED: i }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(265),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e, n) {
            ;(0, a['default'])(this, t)
            var r = (0, l['default'])(this, (t.__proto__ || (0, o['default'])(t)).call(this, e, n))
            return (r._continuationMarker = n.body.continuationMarker), r
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('QueryResponse', this)
                },
              },
              {
                key: 'continuationMarker',
                get: function () {
                  return this._continuationMarker
                },
              },
              {
                key: 'moreComing',
                get: function () {
                  return !y['default'].isNullOrUndefined(this.continuationMarker)
                },
              },
              {
                key: 'query',
                get: function () {
                  return this.request.getPayload().query
                },
              },
              {
                key: 'zoneID',
                get: function () {
                  return this.request.getPayload().zoneID
                },
              },
              {
                key: 'zoneWide',
                get: function () {
                  return Boolean(this.request.getPayload().zoneWide)
                },
              },
              {
                key: 'resultsLimit',
                get: function () {
                  return this.request.getPayload().resultsLimit
                },
              },
              {
                key: 'desiredKeys',
                get: function () {
                  return this.request.getPayload().desiredKeys
                },
              },
              {
                key: 'isQueryResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(
                this,
                (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'records'),
              )
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('RecordsResponse', this)
                },
              },
              {
                key: 'records',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'numbersAsStrings',
                get: function () {
                  return Boolean(this.request.getPayload().numbersAsStrings)
                },
              },
              {
                key: 'isRecordsResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        return e === T || e === L
      }
      function o(e, t) {
        return i(e) ? p['default'].assign({}, t, { fields: void 0 }) : t
      }
      function u(e) {
        return (
          e.recordType === O['default'].NAME &&
            (p['default'].isNullOrUndefined(e.forRecord) ||
              (e.forRecord = p['default'].pick(e.forRecord, ['recordName', 'recordChangeTag']))),
          e
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var a = n(99),
        s = r(a),
        f = n(80),
        c = r(f),
        l = n(81),
        d = r(l),
        h = n(85),
        p = r(h),
        v = n(229),
        _ = r(v),
        y = n(262),
        g = r(y),
        m = n(226),
        k = r(m),
        b = n(267),
        E = r(b),
        N = n(268),
        O = r(N),
        I = 'create',
        w = 'update',
        S = 'forceUpdate',
        A = 'replace',
        R = 'forceReplace',
        T = 'delete',
        L = 'forceDelete',
        C = E['default'].forKeys(
          'zoneID',
          'desiredKeys',
          'numbersAsStrings',
          'atomic',
          'onAssetUploadStart',
        ),
        x = E['default'].forKeys('desiredKeys', 'numbersAsStrings'),
        M = p['default'].makeObjectHasValuesForKeysPredicate({
          recordChangeTag: !1,
          recordType: !0,
        }),
        U = p['default'].makeObjectHasValuesForKeysPredicate({
          recordChangeTag: !0,
          recordName: !0,
        }),
        P = (function () {
          function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            ;(0, c['default'])(this, e),
              (this._database = t),
              (this._operations = []),
              (this._options = C(n))
          }
          return (
            (0, d['default'])(e, [
              {
                key: '_pushOperations',
                value: function (e, t) {
                  var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = x(r)
                  return (
                    g['default']
                      .normalizeRecords(t)
                      .map(function (t) {
                        return o(e, t)
                      })
                      .map(u)
                      .map(function (t) {
                        return p['default'].assign({ operationType: e, record: t }, i)
                      })
                      .forEach(function (e) {
                        return n._operations.push(e)
                      }),
                    this
                  )
                },
              },
              {
                key: 'createOrUpdate',
                value: function (e) {
                  var t = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#createOrUpdate', e, n),
                    g['default'].normalizeRecords(e).forEach(function (e) {
                      if (M(e)) t.create(e, n)
                      else {
                        if (!U(e))
                          throw k['default'].makeInvalidArguments(
                            'Cannot create or update record:' + (0, s['default'])(e),
                          )
                        t.update(e, n)
                      }
                    }),
                    this
                  )
                },
              },
              {
                key: 'create',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#create', e, t),
                    this._pushOperations(I, e, t)
                  )
                },
              },
              {
                key: 'update',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#update', e, t),
                    this._pushOperations(w, e, t)
                  )
                },
              },
              {
                key: 'forceUpdate',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#forceUpdate', e, t),
                    this._pushOperations(S, e, t)
                  )
                },
              },
              {
                key: 'replace',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#replace', e, t),
                    this._pushOperations(A, e, t)
                  )
                },
              },
              {
                key: 'forceReplace',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#forceReplace', e, t),
                    this._pushOperations(R, e, t)
                  )
                },
              },
              {
                key: 'delete',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#delete', e, t),
                    this._pushOperations(T, e, t)
                  )
                },
              },
              {
                key: 'forceDelete',
                value: function (e) {
                  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#forceDelete', e, t),
                    this._pushOperations(L, e, t)
                  )
                },
              },
              {
                key: 'commit',
                value: function () {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  return (
                    _['default'].info('RecordsBatchBuilder#commit'),
                    this._database.commitRecordsBatchBuilder(this, e)
                  )
                },
              },
              {
                key: 'build',
                value: function () {
                  return p['default'].assign({ operations: this._operations }, this._options)
                },
              },
              {
                key: '_notifyAssetUploadStart',
                value: function (e, t) {
                  this._options.onAssetUploadStart && this._options.onAssetUploadStart(e, t)
                },
              },
              {
                key: 'zoneID',
                get: function () {
                  return this._options.zoneID
                },
              },
              {
                key: 'options',
                get: function () {
                  return this._options
                },
              },
            ]),
            e
          )
        })()
      t['default'] = P
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e, t, n, r) {
        return (
          e + ' ' + n.errorMessage + t + ' (in: ' + d['default'].stringifyExposingUndefined(r) + ')'
        )
      }
      function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        return function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = {}
          return (
            t.forEach(function (t) {
              if (!t.shouldIgnore || !t.shouldIgnore(e)) {
                var r = t.key
                if (r in e) {
                  var o = e[r]
                  if (
                    ((o = d['default'].isFunction(t.normalize) ? t.normalize(o, e) : o),
                    !t.isValid(o, e))
                  )
                    throw p['default'].makeInvalidArguments(i(r, o, t, e))
                  n[r] = o
                } else {
                  var u = t.isRequired
                  if (d['default'].isFunction(u) ? u(e) : u)
                    throw p['default'].makeInvalidArguments(i(r, void 0, t, e))
                }
              }
            }),
            n
          )
        }
      }
      function u() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
        var r = t.map(function (e) {
          var t = d['default'].find(Q, function (t) {
            return t.key === e
          })
          if (!t) throw new Error('Cannot find request option definition for: ' + e)
          return t
        })
        return o.apply(void 0, (0, s['default'])(r))
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a = n(86),
        s = r(a),
        f = n(2),
        c = r(f),
        l = n(85),
        d = r(l),
        h = n(226),
        p = r(h),
        v = n(262),
        _ = r(v),
        y = {
          key: 'zoneID',
          normalize: function (e) {
            return d['default'].isNullOrUndefined(e)
              ? { zoneName: '_defaultZone' }
              : _['default'].normalizeZone(e).zoneID
          },
          shouldIgnore: function (e) {
            return e.zoneWide
          },
          errorMessage: ' should be a valid zoneID but was normalized to: ',
          mustDifferFromOtherZoneID: void 0,
          isValid: function (e, t) {
            if (null === e) return !1
            var n = this.mustDifferFromOtherZoneID
            if (!n || !t[n]) return !0
            var r = this.normalize(e),
              i = this.normalize(t[n])
            return r.zoneName !== i.zoneName || r.ownerRecordName !== i.ownerRecordName
          },
        },
        g = (0, c['default'])({}, y, {
          key: 'sourceZoneID',
          isRequired: !0,
          shouldIgnore: function () {
            return !1
          },
          mustDifferFromOtherZoneID: 'targetZoneID',
        }),
        m = (0, c['default'])({}, y, {
          key: 'targetZoneID',
          isRequired: !0,
          shouldIgnore: function () {
            return !1
          },
          mustDifferFromOtherZoneID: 'sourceZoneID',
        }),
        k = {
          key: 'atomic',
          isValid: d['default'].isBoolean,
          errorMessage: ' should be a boolean but was: ',
        },
        b = {
          key: 'desiredKeys',
          isValid: function (e) {
            return d['default'].isUndefined(e) || d['default'].isStringArray(e)
          },
          errorMessage: ' should be an array of strings but was: ',
        },
        E = {
          key: 'desiredRecordTypes',
          isValid: function (e) {
            return d['default'].isUndefined(e) || d['default'].isStringArray(e)
          },
          errorMessage: ' should be an array of strings but was: ',
        },
        N = {
          key: 'numbersAsStrings',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isBoolean(e)
          },
          errorMessage: ' should be a boolean but was: ',
        },
        O = {
          key: 'zoneWide',
          isValid: function (e) {
            return d['default'].isUndefined(e) || d['default'].isBoolean(e)
          },
          errorMessage: ' should be a boolean but was: ',
        },
        I = {
          key: 'resultsLimit',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isNumberish(e)
          },
          errorMessage: ' should be a number but was: ',
        },
        w = {
          key: 'continuationMarker',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isString(e)
          },
          errorMessage: ' should be a string but was: ',
        },
        S = {
          key: 'syncToken',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isString(e)
          },
          errorMessage: ' should be a string but was: ',
        },
        A = {
          key: 'reverse',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isBoolean(e)
          },
          errorMessage: ' should be a boolean but was: ',
        },
        R = {
          key: 'onAssetUploadStart',
          isValid: d['default'].isFunction,
          errorMessage: ' should be a function but was: ',
        },
        T = {
          key: 'assetPrivacyMaskType',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isString(e)
          },
          errorMessage: ' should be a string but was: ',
        },
        L = {
          key: 'pluginFields',
          isValid: function (e) {
            return void 0 !== e
          },
          errorMessage: ' should be defined but was ',
          isRequired: !0,
        },
        C = {
          key: 'includeRecords',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isStringArray(e)
          },
          errorMessage: ' should be an array of strings but was: ',
        },
        x = {
          key: 'excludeRecords',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isStringArray(e)
          },
          errorMessage: ' should be an array of strings but was: ',
        },
        M = {
          key: 'shareName',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isString(e)
          },
          errorMessage: ' should be a string but was ',
        },
        U = {
          key: 'archiveName',
          isValid: function (e) {
            return d['default'].isNullOrUndefined(e) || d['default'].isString(e)
          },
          errorMessage: ' should be a string but was ',
        },
        P = {
          key: 'sourceShareName',
          isValid: function (e) {
            return d['default'].isString(e)
          },
          errorMessage: ' should be a string but was ',
          isRequired: function (e) {
            return !('targetRootName' in e)
          },
        },
        D = {
          key: 'targetRootName',
          isValid: function (e) {
            return d['default'].isString(e)
          },
          errorMessage: ' should be a string but was ',
          isRequired: function (e) {
            return !('sourceShareName' in e)
          },
        },
        j = {
          key: 'jobID',
          isValid: function (e) {
            return d['default'].isString(e)
          },
          errorMessage: ' should be a string but was ',
          isRequired: !0,
        },
        Q = [y, g, m, k, b, E, N, O, I, w, S, A, R, T, L, C, x, M, U, P, D, j]
      t['default'] = {
        forKeys: function () {
          return u.apply(void 0, arguments)
        },
      }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'UNKNOWN',
        r = 'PRIVATE_USER',
        i = 'PUBLIC_USER',
        o = 'OWNER'
      t['default'] = { UNKNOWN: n, PRIVATE_USER: r, PUBLIC_USER: i, OWNER: o }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        return U['default'].isNode() ? e instanceof U['default'].Buffer : e instanceof window.Blob
      }
      function o(e) {
        return U['default'].isArray(e) && e.some(i)
      }
      function u(e) {
        return (
          !U['default'].isNullOrUndefined(e) &&
          !U['default'].isNullOrUndefined(e.recordName) &&
          !U['default'].isNullOrUndefined(e.fieldName)
        )
      }
      function a(e) {
        return U['default'].isArray(e) && e.some(u)
      }
      function s(e) {
        var t = [],
          n = []
        return (
          e._operations.forEach(function (e) {
            var r = e.record,
              s = r.fields
            U['default'].isNullOrUndefined(s) ||
              (0, v['default'])(r.fields).forEach(function (e) {
                var s = r.fields[e]
                i(s.value)
                  ? t.push(new B(r, e, s))
                  : o(s.value)
                  ? s.value.forEach(function (n, o) {
                      i(n) && t.push(new B(r, e, s, o))
                    })
                  : u(s.value)
                  ? n.push(new F(r, e, s))
                  : a(s.value) &&
                    s.value.forEach(function (t, i) {
                      u(t) && n.push(new F(r, e, s, i))
                    })
              })
          }),
          { uploadInfos: t, rerefInfos: n }
        )
      }
      function f(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = {
            tokens: e.map(function (e) {
              return e.toRequestToken()
            }),
            zoneID: n.zoneID,
          },
          i = new x['default']()
            .setApiEntityName('assets')
            .setApiActionName('upload')
            .setResponseClass(R['default'].createGenericResponseClass('tokens'))
            .setPayload(r)
        return t.sendRequest(i)
      }
      function c(e, t) {
        var n = e.getAssetValueForUpload(),
          r = e.getUrlForUpload()
        return S['default']
          .fetch(r, {
            method: 'POST',
            body: n,
            exposeImplementation: function (n) {
              t._notifyAssetUploadStart(n, e.toAssetUploadStartEventPayload())
            },
          })
          ['catch'](function () {
            throw D['default'].makeNetworkError()
          })
          .then(function (e) {
            return e.json()
          })
          ['catch'](function (e) {
            throw D['default'].makeUnexpectedServerResponse(e)
          })
          .then(function (e) {
            return e.singleFile
          })
      }
      function l(e, t) {
        return f(t, e._database, e.options)
          .then(function (n) {
            return L['default'].Promise.all(
              n.tokens.map(function (n, r) {
                var i = t[r]
                return i.consumeUploadToken(n), c(i, e)
              }),
            )
          })
          .then(function (e) {
            return e.forEach(function (e, n) {
              return t[n].consumeUploadReceipt(e)
            })
          })
      }
      function d(e, t) {
        var n = e._database,
          r = {
            assets: t.map(function (e) {
              return e.toRequestToken()
            }),
            zoneID: e.zoneID,
          },
          i = new x['default']()
            .setApiEntityName('assets')
            .setApiActionName('rereference')
            .setResponseClass(R['default'].createGenericResponseClass('assets'))
            .setPayload(r)
        return n.sendRequest(i).then(function (e) {
          if (e.hasErrors)
            throw (
              (Q['default'].warn('rereference failed', e.errors),
              D['default'].fromServerError(e.errors[0]))
            )
          e.assets.forEach(function (e, n) {
            t[n].consumeUploadReceipt(e)
          })
        })
      }
      function h(e) {
        var t = L['default'].Promise.resolve(),
          n = s(e),
          r = n.uploadInfos,
          i = n.rerefInfos
        return (
          r.length > 0 && (Q['default'].info('uploading assets', r), (t = l(e, r))),
          i.length > 0 &&
            (Q['default'].info('rereferencing assets', i),
            (t = t.then(function () {
              return d(e, i)
            }))),
          t
        )
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var p = n(95),
        v = r(p),
        _ = n(106),
        y = r(_),
        g = n(199),
        m = r(g),
        k = n(218),
        b = r(k),
        E = n(80),
        N = r(E),
        O = n(81),
        I = r(O),
        w = n(228),
        S = r(w),
        A = n(227),
        R = r(A),
        T = n(112),
        L = r(T),
        C = n(198),
        x = r(C),
        M = n(85),
        U = r(M),
        P = n(226),
        D = r(P),
        j = n(229),
        Q = r(j),
        B = (function () {
          function e(t, n, r) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
            ;(0, N['default'])(this, e),
              (this._record = t),
              (this._fieldName = n),
              (this._field = r),
              (this._indexInField = i)
          }
          return (
            (0, I['default'])(e, [
              {
                key: 'toRequestToken',
                value: function () {
                  var e = { fieldName: this._fieldName }
                  return (
                    U['default'].isNullOrUndefined(this._record.recordType) ||
                      (e.recordType = this._record.recordType),
                    U['default'].isNullOrUndefined(this._record.recordName) ||
                      (e.recordName = this._record.recordName),
                    e
                  )
                },
              },
              {
                key: 'toAssetUploadStartEventPayload',
                value: function () {
                  return {
                    record: this._record,
                    fieldName: this._fieldName,
                    indexInField: this._indexInField,
                  }
                },
              },
              {
                key: 'consumeUploadToken',
                value: function (e) {
                  this._uploadToken = e
                },
              },
              {
                key: 'consumeUploadReceipt',
                value: function (e) {
                  U['default'].isNullOrUndefined(this._indexInField)
                    ? (this._field.value = e)
                    : (this._field.value[this._indexInField] = e)
                },
              },
              {
                key: 'getUrlForUpload',
                value: function () {
                  return this._uploadToken.url
                },
              },
              {
                key: 'getAssetValueForUpload',
                value: function () {
                  var e = U['default'].isNullOrUndefined(this._indexInField)
                    ? this._field.value
                    : this._field.value[this._indexInField]
                  return U['default'].prepareForUpload(e)
                },
              },
            ]),
            e
          )
        })(),
        F = (function (e) {
          function t(e, n, r) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
            return (
              (0, N['default'])(this, t),
              (0, m['default'])(this, (t.__proto__ || (0, y['default'])(t)).call(this, e, n, r, i))
            )
          }
          return (
            (0, b['default'])(t, e),
            (0, I['default'])(t, [
              {
                key: 'toRequestToken',
                value: function () {
                  var e = this._field.value
                  return U['default'].isNullOrUndefined(this._indexInField)
                    ? e
                    : e[this._indexInField]
                },
              },
            ]),
            t
          )
        })(B)
      t['default'] = { handleAssetsInBatchBeforeCommit: h }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(262),
        f = r(s),
        c = n(85),
        l = r(c),
        d = 'create',
        h = 'delete',
        p = (function () {
          function e(t) {
            ;(0, o['default'])(this, e), (this._database = t), (this._operations = [])
          }
          return (
            (0, a['default'])(e, [
              {
                key: '_pushOperations',
                value: function (e, t) {
                  var n = this
                  return (
                    l['default']
                      .asArray(t)
                      .map(f['default'].normalizeZone)
                      .map(function (t) {
                        return { zone: t, operationType: e }
                      })
                      .forEach(function (e) {
                        return n._operations.push(e)
                      }),
                    this
                  )
                },
              },
              {
                key: 'create',
                value: function (e) {
                  return this._pushOperations(d, e), this
                },
              },
              {
                key: 'delete',
                value: function (e) {
                  return this._pushOperations(h, e), this
                },
              },
              {
                key: 'commit',
                value: function () {
                  return this._database.commitRecordZoneBatchBuilder(this)
                },
              },
              {
                key: 'build',
                value: function () {
                  var e = this._operations
                  return { operations: e }
                },
              },
            ]),
            e
          )
        })()
      t['default'] = p
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(
                this,
                (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'zones'),
              )
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('RecordZonesResponse', this)
                },
              },
              {
                key: 'zones',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'isRecordZonesResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = 'moreComing',
        y = 'syncToken',
        g = (function (e) {
          function t(e, n) {
            ;(0, a['default'])(this, t)
            var r = (0, l['default'])(
              this,
              (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'zones'),
            )
            return (r._moreComing = n.body[_]), (r._syncToken = n.body[y]), r
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'zones',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'moreComing',
                get: function () {
                  return this._moreComing
                },
              },
              {
                key: 'syncToken',
                get: function () {
                  return this._syncToken
                },
              },
              {
                key: 'resultsLimit',
                get: function () {
                  return this.request.getPayload().resultsLimit
                },
              },
              {
                key: 'isDatabaseChangesResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(
                this,
                (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'zones'),
              )
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'zones',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'isRecordZoneChangesResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = _
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(
                this,
                (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'assets'),
              )
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('AssetRereferenceResponse', this)
                },
              },
              {
                key: 'assets',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'isAssetReferenceResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        if (a['default'].isNullOrUndefined(e))
          throw f['default'].makeInvalidArguments(
            'not a valid Rereference object: ' + a['default'].stringifyExposingUndefined(e),
          )
        if (!a['default'].has(e, 'recordName') || !a['default'].has(e, 'fieldName'))
          throw f['default'].makeInvalidArguments(
            'a valid Rereference object requires `recordName` and `fieldName` properties',
          )
        return e
      }
      function o(e) {
        return a['default'].asArray(e).map(i)
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var u = n(85),
        a = r(u),
        s = n(226),
        f = r(s)
      t['default'] = { normalizeAssetRereference: i, normalizeAssetRereferenceArray: o }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(265),
        v = r(p),
        _ = 'moreComing',
        y = 'syncToken',
        g = (function (e) {
          function t(e, n) {
            ;(0, a['default'])(this, t)
            var r = (0, l['default'])(this, (t.__proto__ || (0, o['default'])(t)).call(this, e, n))
            return (r._moreComing = n.body[_]), (r._syncToken = n.body[y]), r
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'moreComing',
                get: function () {
                  return this._moreComing
                },
              },
              {
                key: 'syncToken',
                get: function () {
                  return this._syncToken
                },
              },
              {
                key: 'zoneID',
                get: function () {
                  return this.request.getPayload().zoneID
                },
              },
              {
                key: 'resultsLimit',
                get: function () {
                  return this.request.getPayload().resultsLimit
                },
              },
              {
                key: 'desiredKeys',
                get: function () {
                  return this.request.getPayload().desiredKeys
                },
              },
              {
                key: 'desiredRecordTypes',
                get: function () {
                  return this.request.getPayload().desiredRecordTypes
                },
              },
              {
                key: 'reverse',
                get: function () {
                  return this.request.getPayload().reverse
                },
              },
              {
                key: 'isChangedRecordsResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(85),
        f = r(s),
        c = 'create',
        l = 'delete',
        d = (function () {
          function e(t) {
            ;(0, o['default'])(this, e), (this._database = t), (this._operations = [])
          }
          return (
            (0, a['default'])(e, [
              {
                key: '_pushOperation',
                value: function (e, t) {
                  var n = this
                  return (
                    (t = f['default'].asArray(t)),
                    t.forEach(function (t) {
                      n._operations.push({ operationType: e, subscription: t })
                    }),
                    this
                  )
                },
              },
              {
                key: 'create',
                value: function (e) {
                  return this._pushOperation(c, e), this
                },
              },
              {
                key: 'delete',
                value: function (e) {
                  return (
                    (e = f['default'].asArray(e).map(function (e) {
                      return f['default'].isString(e) ? { subscriptionID: e } : e
                    })),
                    this._pushOperation(l, e),
                    this
                  )
                },
              },
              {
                key: 'commit',
                value: function () {
                  return this._database.commitSubscriptionsBatchBuilder(this)
                },
              },
              {
                key: 'build',
                value: function () {
                  var e = this._operations
                  return { operations: e }
                },
              },
            ]),
            e
          )
        })()
      t['default'] = d
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(
                this,
                (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'subscriptions'),
              )
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('SubscriptionsResponse', this)
                },
              },
              {
                key: 'subscriptions',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'isSubscriptionsResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(280),
        o = r(i),
        u = n(230),
        a = r(u),
        s = !1,
        f = {
          run: function (e) {
            if (s) throw new Error('already running')
            s = !0
            var t = a['default'].newSharingFlowStat()
            return o['default'].createAndRun(e).then(
              function (e) {
                return (s = !1), t.didRun(), e
              },
              function (e) {
                throw ((s = !1), t.didError(e), e)
              },
            )
          },
        }
      t['default'] = f
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(112),
        f = r(s),
        c = n(85),
        l = r(c),
        d = n(226),
        h = r(d),
        p = n(281),
        v = r(p),
        _ = n(283),
        y = r(_),
        g = n(284),
        m = r(g),
        k = 15e3,
        b = 'https://cdn.apple-cloudkit.com',
        E = b + '/applications/ck-share-ui/current',
        N = (function () {
          function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            ;(0, o['default'])(this, e),
              (this._options = t),
              (this._shareSheetURL = E + '/' + (t.containerConfiguration.locale || 'en-us') + '/'),
              (this._view = null),
              (this._delegate = new y['default'](t.delegate || {}, this))
          }
          return (
            (0, a['default'])(e, [
              {
                key: '_destroy',
                value: function () {
                  this._view.hide(),
                    this._channel.disconnect(),
                    this._view.unmount(),
                    (this._view = null),
                    this._delegate.componentWasDestroyed()
                },
              },
              {
                key: '_createView',
                value: function () {
                  var e = this,
                    t =
                      this._delegate._provideURLForComponent(this._shareSheetURL) ||
                      this._shareSheetURL
                  ;(this._view = v['default'].create({
                    url: t,
                    parentElement: this._options.parentElement,
                  })),
                    this._view.mount(),
                    this._view.showLoading(),
                    setTimeout(function () {
                      e._delegate.componentWasCreated(e._view.iFrame),
                        e._options.startHidden || e._view.show()
                    })
                },
              },
              {
                key: '_connect',
                value: function () {
                  var e = this
                  return new f['default'].Promise(function (t, n) {
                    e._channel = m['default'].create({
                      win: window,
                      otherWin: e._view.iFrame.contentWindow,
                      otherWinOrigin: b,
                      methods: {
                        channelDidOpen: function () {
                          setTimeout(t)
                        },
                        applicationIsReady: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.width,
                            r = t.height
                          return (
                            e._view.hideLoading({
                              width: n,
                              height: r,
                              immediate: e._options.startHidden,
                            }),
                            e._delegate.componentDidBecomeReady(),
                            !0
                          )
                        },
                      },
                      P: f['default'].Promise,
                    })
                  })
                },
              },
              {
                key: '_run',
                value: function () {
                  var e = l['default'].assign({}, this._options, {
                    delegate: 'blacklisted',
                    parentElement: 'blacklisted',
                  })
                  return this._channel.send('run', e)
                },
              },
              {
                key: 'run',
                value: function () {
                  var e = this
                  this._createView()
                  var t = this._connect()
                  return f['default']
                    .waitOrFail(t, k, h['default'].makeShareUITimeout())
                    .then(function () {
                      var t = new f['default'].Promise(function (t, n) {
                          e._onCancel = function () {
                            return n(new Error('canceled'))
                          }
                        }),
                        n = e._run()
                      return f['default'].Promise.race([t, n])
                    })
                    .then(
                      function (t) {
                        return e._destroy(), t
                      },
                      function (t) {
                        e._destroy()
                        try {
                          h['default'].isErrorObject(JSON.parse(t.message)) &&
                            (t = h['default'].fromServerError(JSON.parse(t.message)))
                        } catch (n) {}
                        return f['default'].Promise.reject(t)
                      },
                    )
                },
              },
              {
                key: 'show',
                value: function () {
                  this._view.show()
                },
              },
              {
                key: 'hide',
                value: function () {
                  this._view.hide()
                },
              },
              {
                key: 'cancel',
                value: function () {
                  this._onCancel && this._onCancel()
                },
              },
            ]),
            e
          )
        })()
      t['default'] = {
        createAndRun: function (e) {
          return (
            e.__shareSheetOrigin &&
              ((b = e.__shareSheetOrigin), (E = b + '/applications/ck-share-ui/current')),
            new N(e).run()
          )
        },
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(282),
        f = r(s),
        c = 250,
        l = 100,
        d = 100,
        h = 400,
        p = 300,
        v =
          '<style>\n.cloudkit-sharing-ui {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  /*opacity: 0;*/\n  z-index: 999;\n  display: block;\n}\n\n.cloudkit-sharing-ui-iframe {\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    /*opacity: 0;*/\n    display: block;\n}\n\n.cloudkit-sharing-ui-loading {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 1;\n  transition: ' +
          c +
          'ms ease-in-out;\n}\n\n.cloudkit-sharing-ui-modal-background {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.25);\n    \n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.cloudkit-sharing-ui-content-box {\n    width: ' +
          l +
          'px;\n    height: ' +
          d +
          'px;\n    background-color: white;\n    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.4);\n    border-radius: 8px;\n    transition: ' +
          c +
          'ms ease-in-out;\n    \n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.cloudkit-sharing-ui-spinning {\n  width: 32px;\n  height: 32px;\n  -webkit-animation: __ck_share_ui_spin 2s linear infinite;\n  -moz-animation: __ck_share_ui_spin 2s linear infinite;\n  animation: __ck_share_ui_spin 2s linear infinite;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICAgICAgICAgIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogICAgPHBhdGggZmlsbD0iIzY2NiIKICAgICAgICAgIHN0cm9rZS13aWR0aD0iMSIKICAgICAgICAgIGQ9Ik0zMS4yLDE0LjFjLTAuOS03LjUtNy4zLTEzLjMtMTUtMTMuM0M3LjgsMC44LDEuMSw3LjYsMS4xLDE1LjlzNi44LDE1LjIsMTUuMiwxNS4yYzcuNywwLDE0LjEtNS44LDE1LTEzLjMKICAgICAgICAgICAgSDMyYy0wLjksNy45LTcuNywxNC0xNS44LDE0Yy04LjgsMC0xNS45LTcuMS0xNS45LTE1LjlTNy40LDAsMTYuMiwwYzguMSwwLDE0LjgsNi4xLDE1LjgsMTRIMzEuMnoiLz4KPC9zdmc+Cg==);\n}\n\n@-moz-keyframes __ck_share_ui_spin {\n  100% {\n    -moz-transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes __ck_share_ui_spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes __ck_share_ui_spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}</style>',
        _ =
          '<div class="cloudkit-sharing-ui">\n  <iframe \n      class="cloudkit-sharing-ui-iframe" \n      src="" \n      frameborder="0" \n      seamless="seamless" \n      allowtransparency="true"></iframe>\n  <div class="cloudkit-sharing-ui-loading">\n    <div class="cloudkit-sharing-ui-modal-background">\n        <div class="cloudkit-sharing-ui-content-box">\n            <div class="cloudkit-sharing-ui-spinning"></div>\n        </div>\n    </div>\n  </div>\n  ' +
          v +
          '\n</div>',
        y = (function () {
          function e(t) {
            ;(0, o['default'])(this, e),
              (this._options = t),
              (this._parentElement = t.parentElement || f['default'].doc().body),
              (this._element = f['default'].createElement(_))
          }
          return (
            (0, a['default'])(e, [
              {
                key: 'mount',
                value: function () {
                  this._parentElement.appendChild(this._element),
                    this.iFrame.setAttribute('src', this._options.url)
                },
              },
              {
                key: 'unmount',
                value: function () {
                  this._parentElement.removeChild(this._element)
                },
              },
              {
                key: 'showLoading',
                value: function () {
                  f['default'].assignStyle('.cloudkit-sharing-ui-loading', {
                    visibility: 'visible',
                  }),
                    f['default'].assignStyle('.cloudkit-sharing-ui-iframe', { opacity: 0 })
                },
              },
              {
                key: 'hideLoading',
                value: function (e) {
                  var t = e.width,
                    n = e.height,
                    r = e.immediate,
                    i = void 0 !== r && r
                  ;(t = t || h),
                    (n = n || p),
                    i
                      ? (f['default'].assignStyle('.cloudkit-sharing-ui-iframe', { opacity: 1 }),
                        f['default'].assignStyle('.cloudkit-sharing-ui-loading', {
                          visibility: 'collapse',
                        }))
                      : f['default'].animate(
                          [
                            {
                              '.cloudkit-sharing-ui-content-box': {
                                height: n + 'px',
                                width: t + 'px',
                              },
                              '.cloudkit-sharing-ui-spinning': { visibility: 'collapse' },
                            },
                            {
                              '.cloudkit-sharing-ui-iframe': { opacity: 1 },
                              '.cloudkit-sharing-ui-modal-background': { display: 'none' },
                              '.cloudkit-sharing-ui-loading': { opacity: 0 },
                            },
                            { '.cloudkit-sharing-ui-loading': { visibility: 'collapse' } },
                          ],
                          c,
                        )
                },
              },
              {
                key: 'show',
                value: function () {
                  f['default'].assignStyle('.cloudkit-sharing-ui', { opacity: 1, display: 'block' })
                },
              },
              {
                key: 'hide',
                value: function () {
                  f['default'].assignStyle('.cloudkit-sharing-ui', { opacity: 0, display: 'none' })
                },
              },
              {
                key: 'iFrame',
                get: function () {
                  return f['default'].querySelector('.cloudkit-sharing-ui-iframe')
                },
              },
            ]),
            e
          )
        })()
      t['default'] = {
        create: function (e) {
          return new y(e)
        },
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e, t) {
        var n = y['default'].isString(e) ? a(e) : e
        y['default'].assign(n.style, t)
      }
      function o(e, t) {
        var n = y['default'].isString(e) ? a(e) : e
        ;(0, h['default'])(t).forEach(function (e) {
          return n.setAttribute(e, t[e])
        })
      }
      function u(e, t) {
        var n = m().createElement('div')
        n.innerHTML = e
        var r = n.firstChild
        if (t && t.classes)
          if (r.classList)
            t.classes.forEach(function (e) {
              return r.classList.add(e)
            })
          else {
            var u = r.getAttribute('class') || '',
              a = t.classes.reduce(function (e, t) {
                return e + ' ' + t
              }, u)
            r.setAttribute('class', a.trim())
          }
        return (
          t && t.style && i(r, t.style),
          t && t.attributes && o(r, t.attributes),
          t &&
            t.children &&
            t.children.forEach(function (e) {
              r.appendChild(e)
            }),
          r
        )
      }
      function a(e) {
        return m().querySelector(e)
      }
      function s(e, t) {
        return e.reduce(function (e, n) {
          return e.then(function () {
            return (
              (0, h['default'])(n).forEach(function (e) {
                return i(e, n[e])
              }),
              v['default'].wait(t)
            )
          })
        }, v['default'].Promise.resolve())
      }
      function f(e, t, n) {
        return function (r, o) {
          return i(r, (0, l['default'])({}, e, o ? t : n))
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var c = n(261),
        l = r(c),
        d = n(95),
        h = r(d),
        p = n(112),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = function () {
          return window
        },
        m = function () {
          return 'undefined' == typeof window ? null : window.document
        }
      t['default'] = {
        createElement: u,
        assignStyle: i,
        querySelector: a,
        animate: s,
        makeStyleToggle: f,
        win: g,
        doc: m,
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(85),
        f = r(s),
        c = (function () {
          function e(t, n) {
            ;(0, o['default'])(this, e),
              (this._actual = t),
              (this._component = {
                show: function () {
                  return n.show()
                },
                hide: function () {
                  return n.hide()
                },
                __cancel: function () {
                  return n.cancel()
                },
              })
          }
          return (
            (0, a['default'])(e, [
              {
                key: 'componentWasCreated',
                value: function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return !f['default'].isNullOrUndefined(this._actual) &&
                    f['default'].isFunction(this._actual.componentWasCreated)
                    ? f['default'].tryInvokeMethod(
                        this._actual,
                        'componentWasCreated',
                        [this._component].concat(t),
                        'shareWithUI.delegate',
                      )
                    : f['default'].tryInvokeMethod(
                        this._actual,
                        'componentDidCreate',
                        [this._component].concat(t),
                        'shareWithUI.delegate',
                      )
                },
              },
              {
                key: 'componentDidBecomeReady',
                value: function () {
                  return f['default'].tryInvokeMethod(
                    this._actual,
                    'componentDidBecomeReady',
                    [this._component],
                    'shareWithUI.delegate',
                  )
                },
              },
              {
                key: 'componentWasDestroyed',
                value: function () {
                  return f['default'].tryInvokeMethod(
                    this._actual,
                    'componentWasDestroyed',
                    [this._component],
                    'shareWithUI.delegate',
                  )
                },
              },
              {
                key: '_provideURLForComponent',
                value: function () {
                  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n]
                  return f['default'].tryInvokeMethod(
                    this._actual,
                    '_provideURLForComponent',
                    [this._component].concat(t),
                    'shareWithUI.delegate',
                  )
                },
              },
            ]),
            e
          )
        })()
      t['default'] = c
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e, t, n) {
        var r = p.bind(null, e, t),
          i = []
        return {
          handle: function (n, r) {
            if (r.source === e && r.origin === t) {
              var o = i[n.id]
              o && (delete i[n.id], n.error ? o.reject(n.error) : o.resolve(n.result))
            }
          },
          send: function (e) {
            for (var t = arguments.length, o = Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
              o[u - 1] = arguments[u]
            var a = { id: v(), method: e, params: o }
            if (!d(a)) throw new Error('Not a valid json rpc call message: ' + (0, l['default'])(a))
            return new n(function (e, t) {
              ;(i[a.id] = { resolve: e, reject: t }), r(a)
            })
          },
        }
      }
      function o(e, t) {
        return {
          handle: function (n, r) {
            var i = p.bind(r.source, r.source, r.origin),
              o = e[n.method]
            o &&
              t
                .resolve(1)
                .then(function () {
                  return o.apply(null, n.params)
                })
                .then(
                  function (e) {
                    return { id: n.id, result: e }
                  },
                  function (e) {
                    return { id: n.id, error: e }
                  },
                )
                .then(function (e) {
                  if ('id' in n)
                    try {
                      i(e)
                    } catch (t) {
                      i({ id: n.id, error: t.message || t })
                    }
                })
          },
        }
      }
      function u(e, t, n, r) {
        var i = function (e) {
          if (e.source === t)
            try {
              var i = JSON.parse(e.data)
              d(i) ? n.handle(i, e) : h(i) && r.handle(i, e)
            } catch (o) {}
        }
        return (
          e.addEventListener('message', i),
          {
            disconnect: function () {
              e.removeEventListener('message', i)
            },
          }
        )
      }
      function a(e) {
        var t = e.win,
          n = e.otherWin,
          r = e.otherWinOrigin,
          a = e.methods,
          s = void 0 === a ? {} : a,
          c = e.P,
          l = void 0 === c ? f['default'] : c,
          d = o(s, l),
          h = i(n, r, l),
          p = u(t, n, d, h)
        return {
          send: function (e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
              n[r - 1] = arguments[r]
            return h.send.apply(h, [e].concat(n))
          },
          disconnect: function () {
            p.disconnect()
          },
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var s = n(41),
        f = r(s),
        c = n(99),
        l = r(c),
        d = function (e) {
          return 'method' in e
        },
        h = function (e) {
          return !d(e) && 'id' in e
        },
        p = function (e, t, n) {
          ;(n.jsonrpc = '2.0'), e.postMessage((0, l['default'])(n), t)
        },
        v = function () {
          return 'ckjs-jsonrpc-message-id-' + ('' + Math.random()).substring(2)
        }
      t['default'] = { create: a }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(this, (t.__proto__ || (0, o['default'])(t)).call(this, e, n))
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'downloadURL',
                get: function () {
                  return this.httpResponse.body.downloadURL
                },
              },
              {
                key: 'isZipDownloadResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = _
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = (function (e) {
          function t(e, n) {
            ;(0, a['default'])(this, t)
            var r = (0, l['default'])(this, (t.__proto__ || (0, o['default'])(t)).call(this, e, n))
            return (r._jobID = n.body.jobID), r
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'jobID',
                get: function () {
                  return this._jobID
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = _
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = (function (e) {
          function t(e, n) {
            ;(0, a['default'])(this, t)
            var r = (0, l['default'])(this, (t.__proto__ || (0, o['default'])(t)).call(this, e, n)),
              i = n.body
            return (
              (r._jobID = i.jobID),
              (r._itemsProcessed = i.itemsProcessed),
              (r._itemsTotalEstimate = i.itemsTotalEstimate),
              (r._status = i.status),
              (r._reason = i.reason),
              (r._serverErrorCode = i.serverErrorCode),
              r
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'jobID',
                get: function () {
                  return this._jobID
                },
              },
              {
                key: 'itemsProcessed',
                get: function () {
                  return this._itemsProcessed
                },
              },
              {
                key: 'itemsTotalEstimate',
                get: function () {
                  return this._itemsTotalEstimate
                },
              },
              {
                key: 'status',
                get: function () {
                  return this._status
                },
              },
              {
                key: 'reason',
                get: function () {
                  return this._reason
                },
              },
              {
                key: 'serverErrorCode',
                get: function () {
                  return this._serverErrorCode
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = _
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(
                this,
                (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'users'),
              )
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('UserIdentitiesResponse', this)
                },
              },
              {
                key: 'users',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'isUserIdentitiesResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(227),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e, n) {
            return (
              (0, a['default'])(this, t),
              (0, l['default'])(
                this,
                (t.__proto__ || (0, o['default'])(t)).call(this, e, n, 'results'),
              )
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('RecordInfosResponse', this)
                },
              },
              {
                key: 'results',
                get: function () {
                  return this._results
                },
              },
              {
                key: 'isRecordInfosResponse',
                get: function () {
                  return !0
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        try {
          if (!u['default'].isNullOrUndefined(e.ck)) {
            if (!u['default'].isNullOrUndefined(e.ck.fet)) return new d['default'](e)
            if (!u['default'].isNullOrUndefined(e.ck.qry)) return new c['default'](e)
          }
        } catch (t) {
          s['default'].warn(t)
        }
        return null
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = n(85),
        u = r(o),
        a = n(229),
        s = r(a),
        f = n(291),
        c = r(f),
        l = n(293),
        d = r(l)
      t['default'] = { parseRawNotification: i }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(101),
        o = r(i),
        u = n(232),
        a = r(u),
        s = n(106),
        f = r(s),
        c = n(80),
        l = r(c),
        d = n(81),
        h = r(d),
        p = n(199),
        v = r(p),
        _ = n(218),
        y = r(_),
        g = n(292),
        m = r(g),
        k = n(85),
        b = r(k),
        E = (function (e) {
          function t(e) {
            ;(0, l['default'])(this, t)
            var n = (0, v['default'])(this, (t.__proto__ || (0, f['default'])(t)).call(this, e)),
              r = e.ck.qry
            if (
              ((n._zoneID = { zoneName: r.zid, ownerRecordName: r.zoid }),
              (n._subscriptionID = r.sid),
              (n._dbType = r.dbs),
              (n._recordName = r.rid),
              (n._reason = r.fo),
              !b['default'].isNullOrUndefined(r.af))
            ) {
              var i = {},
                u = !0,
                s = !1,
                c = void 0
              try {
                for (
                  var d, h = (0, a['default'])((0, o['default'])(r.af));
                  !(u = (d = h.next()).done);
                  u = !0
                ) {
                  var p = d.value
                  i[p] = { value: r.af[p] }
                }
              } catch (_) {
                ;(s = !0), (c = _)
              } finally {
                try {
                  !u && h['return'] && h['return']()
                } finally {
                  if (s) throw c
                }
              }
              n._fields = i
            }
            return n
          }
          return (
            (0, y['default'])(t, e),
            (0, h['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return b['default'].instanceToString('QueryNotification', this)
                },
              },
              {
                key: 'isQueryNotification',
                get: function () {
                  return !0
                },
              },
              {
                key: 'notificationType',
                get: function () {
                  return m['default'].NOTIFICATION_TYPE_QUERY
                },
              },
              {
                key: 'queryNotificationReason',
                get: function () {
                  switch (this._reason) {
                    case 1:
                      return m['default'].QUERY_NOTIFICATION_REASON_RECORD_CREATED
                    case 2:
                      return m['default'].QUERY_NOTIFICATION_REASON_RECORD_UPDATED
                    case 3:
                      return m['default'].QUERY_NOTIFICATION_REASON_RECORD_DELETED
                  }
                  return null
                },
              },
              {
                key: 'isPublicDatabase',
                get: function () {
                  return 0 === this._dbType
                },
              },
              {
                key: 'recordName',
                get: function () {
                  return this._recordName
                },
              },
              {
                key: 'recordFields',
                get: function () {
                  return this._fields
                },
              },
            ]),
            t
          )
        })(m['default'])
      t['default'] = E
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = 'NOTIFICATION_TYPE_QUERY',
        f = 'NOTIFICATION_TYPE_RECORD_ZONE',
        c = 'QUERY_NOTIFICATION_REASON_RECORD_CREATED',
        l = 'QUERY_NOTIFICATION_REASON_RECORD_UPDATED',
        d = 'QUERY_NOTIFICATION_REASON_RECORD_DELETED',
        h = (function () {
          function e(t) {
            ;(0, o['default'])(this, e),
              (this._notificationID = t.ck.nid),
              (this._containerIdentifier = t.ck.cid)
            var n = t.aps || {}
            ;(n.alert = n.alert || {}),
              (this._category = n.category),
              (this._alertBody = n.alert.body),
              (this._alertLocKey = n.alert['loc-key']),
              (this._alertLocArgs = n.alert['loc-args']),
              (this._actionLocKey = n.alert['action-loc-key']),
              (this._launchImage = n.alert['launch-image']),
              (this._soundName = n.sound),
              (this._badge = n.badge)
          }
          return (
            (0, a['default'])(
              e,
              [
                {
                  key: 'isQueryNotification',
                  get: function () {
                    return !1
                  },
                },
                {
                  key: 'isRecordZoneNotification',
                  get: function () {
                    return !1
                  },
                },
                {
                  key: 'category',
                  get: function () {
                    return this._category
                  },
                },
                {
                  key: 'notificationType',
                  get: function () {
                    return null
                  },
                },
                {
                  key: 'notificationID',
                  get: function () {
                    return this._notificationID
                  },
                },
                {
                  key: 'containerIdentifier',
                  get: function () {
                    return this._containerIdentifier
                  },
                },
                {
                  key: 'alertBody',
                  get: function () {
                    return this._alertBody
                  },
                },
                {
                  key: 'alertLocalizationKey',
                  get: function () {
                    return this._alertLocKey
                  },
                },
                {
                  key: 'alertLocalizationArgs',
                  get: function () {
                    return this._alertLocArgs
                  },
                },
                {
                  key: 'alertActionLocalizationKey',
                  get: function () {
                    return this._actionLocKey
                  },
                },
                {
                  key: 'alertLaunchImage',
                  get: function () {
                    return this._launchImage
                  },
                },
                {
                  key: 'soundName',
                  get: function () {
                    return this._soundName
                  },
                },
                {
                  key: 'badge',
                  get: function () {
                    return this._badge
                  },
                },
                {
                  key: 'zoneID',
                  get: function () {
                    return this._zoneID
                  },
                },
                {
                  key: 'subscriptionID',
                  get: function () {
                    return this._subscriptionID
                  },
                },
              ],
              [
                {
                  key: 'NOTIFICATION_TYPE_QUERY',
                  get: function () {
                    return s
                  },
                },
                {
                  key: 'NOTIFICATION_TYPE_RECORD_ZONE',
                  get: function () {
                    return f
                  },
                },
                {
                  key: 'QUERY_NOTIFICATION_REASON_RECORD_CREATED',
                  get: function () {
                    return c
                  },
                },
                {
                  key: 'QUERY_NOTIFICATION_REASON_RECORD_UPDATED',
                  get: function () {
                    return l
                  },
                },
                {
                  key: 'QUERY_NOTIFICATION_REASON_RECORD_DELETED',
                  get: function () {
                    return d
                  },
                },
              ],
            ),
            e
          )
        })()
      t['default'] = h
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(106),
        o = r(i),
        u = n(80),
        a = r(u),
        s = n(81),
        f = r(s),
        c = n(199),
        l = r(c),
        d = n(218),
        h = r(d),
        p = n(292),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = (function (e) {
          function t(e) {
            ;(0, a['default'])(this, t)
            var n = (0, l['default'])(this, (t.__proto__ || (0, o['default'])(t)).call(this, e)),
              r = e.ck.fet || {}
            return (
              (n._zoneID = { zoneName: r.zid, ownerRecordName: r.zoid }),
              (n._subscriptionID = r.sid),
              n
            )
          }
          return (
            (0, h['default'])(t, e),
            (0, f['default'])(t, [
              {
                key: 'toString',
                value: function () {
                  return y['default'].instanceToString('RecordZoneNotification', this)
                },
              },
              {
                key: 'isRecordZoneNotification',
                get: function () {
                  return !0
                },
              },
              {
                key: 'notificationType',
                get: function () {
                  return v['default'].NOTIFICATION_TYPE_RECORD_ZONE
                },
              },
            ]),
            t
          )
        })(v['default'])
      t['default'] = g
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        var t = e.container,
          n = e.containerConfig,
          r = e.authTokenStore
        return u['default'].isNullOrUndefined(n[h])
          ? u['default'].isNullOrUndefined(n[p])
            ? new s['default']({ container: t })
            : new d['default']({ container: t, config: n[p], locale: n.locale, authTokenStore: r })
          : new c['default']({ container: t, config: n[h], locale: n.locale })
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var o = n(85),
        u = r(o),
        a = n(295),
        s = r(a),
        f = n(296),
        c = r(f),
        l = n(298),
        d = r(l),
        h = 'serverToServerKeyAuth',
        p = 'apiTokenAuth'
      t['default'] = { SERVER_TO_SERVER_KEY_AUTH: h, API_TOKEN_AUTH: p, createAuth: i }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(226),
        f = r(s),
        c = (function () {
          function e(t) {
            var n = t.container
            ;(0, o['default'])(this, e), (this._container = n)
          }
          return (
            (0, a['default'])(e, [
              {
                key: '_fetchCurrentUserIdentity',
                value: function () {
                  return this._container.fetchCurrentUserIdentity()
                },
              },
              {
                key: 'setup',
                value: function () {
                  return this._fetchCurrentUserIdentity()
                },
              },
              {
                key: 'whenUserSignsIn',
                value: function () {
                  throw f['default'].makeConfigurationError(
                    'whenUserSignsIn not implemented by this auth type',
                  )
                },
              },
              {
                key: 'whenUserSignsOut',
                value: function () {
                  throw f['default'].makeConfigurationError(
                    'whenUserSignsOut not implemented by this auth type',
                  )
                },
              },
              {
                key: 'signOut',
                value: function () {
                  throw f['default'].makeConfigurationError(
                    'signOut not implemented by this auth type',
                  )
                },
              },
              {
                key: 'requestHandler',
                value: function () {
                  return function (e) {
                    return e
                  }
                },
              },
              {
                key: 'responseHandler',
                value: function () {
                  return function (e) {
                    return e
                  }
                },
              },
              {
                key: 'getConfig',
                value: function () {
                  return {}
                },
              },
            ]),
            e
          )
        })()
      t['default'] = c
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function i(e) {
        var t = L['default'].createHash(U)
        return t.update(new N['default'].Buffer(e, 'utf-8')), t.digest('base64')
      }
      function o(e, t) {
        var n = L['default'].createSign(P)
        return n.update(t), n.sign(e, 'base64')
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var u = n(99),
        a = r(u),
        s = n(106),
        f = r(s),
        c = n(80),
        l = r(c),
        d = n(81),
        h = r(d),
        p = n(199),
        v = r(p),
        _ = n(214),
        y = r(_),
        g = n(218),
        m = r(g),
        k = n(295),
        b = r(k),
        E = n(85),
        N = r(E),
        O = n(226),
        I = r(O),
        w = n(112),
        S = r(w),
        A = n(297),
        R = r(A),
        T = n(193),
        L = r(T),
        C = 'keyID',
        x = 'privateKeyFile',
        M = 'privateKeyPassPhrase',
        U = 'sha256',
        P = 'RSA-SHA256',
        D = (function (e) {
          function t(e) {
            var n = e.container,
              r = e.config
            ;(0, l['default'])(this, t)
            var i = (0, v['default'])(
              this,
              (t.__proto__ || (0, f['default'])(t)).call(this, { container: n }),
            )
            return (i._config = r), (i._keyID = null), (i._key = null), i
          }
          return (
            (0, m['default'])(t, e),
            (0, h['default'])(t, [
              {
                key: 'setup',
                value: function () {
                  if (N['default'].isNullOrUndefined(this._config[C]))
                    throw I['default'].makeConfigurationError(
                      C + ' not set in ' + (0, a['default'])(this._config),
                    )
                  if (N['default'].isNullOrUndefined(this._config[x]))
                    throw I['default'].makeConfigurationError(
                      x + ' not set in ' + (0, a['default'])(this._config),
                    )
                  if (
                    ((this._keyID = this._config[C]),
                    (this._key = R['default'].readFileSync(this._config[x], 'utf8')),
                    N['default'].isNullOrUndefined(this._key))
                  )
                    throw I['default'].makeConfigurationError('Could not read key from ' + x + '}')
                  return (
                    N['default'].isNullOrUndefined(this._config[M]) ||
                      (this._key = { key: this._key, passphrase: this._config[M] }),
                    (0, y['default'])(
                      t.prototype.__proto__ || (0, f['default'])(t.prototype),
                      'setup',
                      this,
                    ).call(this)
                  )
                },
              },
              {
                key: 'requestHandler',
                value: function () {
                  var e = this
                  return function (t) {
                    var n = new Date().toISOString().replace(/(\.\d\d\d)Z/, 'Z'),
                      r = t.getBodyStringified() || '',
                      u = t.getPathWithParams(),
                      a = n + ':' + i(r) + ':' + u,
                      s = null
                    return (
                      (s = N['default'].isFunction(e._externalSigner)
                        ? e._externalSigner(e._keyID, a)
                        : o(e._key, a)),
                      S['default'].Promise.resolve(s).then(function (r) {
                        return t.setISODate(n), t.setSigningKeyID(e._keyID), t.setSignatureV1(r), t
                      })
                    )
                  }
                },
              },
            ]),
            t
          )
        })(b['default'])
      t['default'] = D
    },
    function (e, n) {
      e.exports = t
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }), (t['default'] = void 0)
      var i = n(261),
        o = r(i),
        u = n(106),
        a = r(u),
        s = n(80),
        f = r(s),
        c = n(81),
        l = r(c),
        d = n(199),
        h = r(d),
        p = n(218),
        v = r(p),
        _ = n(85),
        y = r(_),
        g = n(112),
        m = r(g),
        k = n(229),
        b = r(k),
        E = n(226),
        N = r(E),
        O = n(295),
        I = r(O),
        w = n(230),
        S = r(w),
        A = n(299),
        R = r(A),
        T = n(294),
        L = r(T),
        C = n(304),
        x = r(C),
        M = 525,
        U = 640,
        P = 84e4,
        D = {
          persist: !1,
          signInButton: { id: 'apple-sign-in-button', theme: 'medium' },
          signOutButton: { id: 'apple-sign-out-button', theme: 'medium' },
        },
        j = (function (e) {
          function t(e) {
            var n = e.container,
              r = e.config,
              i = e.locale,
              o = e.authTokenStore
            ;(0, f['default'])(this, t)
            var u = (0, h['default'])(
              this,
              (t.__proto__ || (0, a['default'])(t)).call(this, { container: n }),
            )
            return (
              r.persist && (u._authTokenStore = x['default'].create(o)),
              (u._apiToken = r.apiToken),
              (u._authButtons = R['default'].create({
                locale: i,
                signInButton: y['default'].assign({}, D.signInButton, r.signInButton),
                signOutButton: y['default'].assign({}, D.signOutButton, r.signOutButton),
              })),
              (u._ckSession = null),
              (u._signInURL = null),
              (u._whenUserSignsIn = m['default'].defer()),
              (u._whenUserSignsOut = m['default'].defer()),
              y['default'].isNullOrUndefined(r.ckWebAuthToken) || u._setSession(r.ckWebAuthToken),
              u
            )
          }
          return (
            (0, v['default'])(t, e),
            (0, l['default'])(t, [
              {
                key: 'setup',
                value: function () {
                  return this._authButtons.reset(), this._fetchAndHandleCurrentUserIdentity()
                },
              },
              {
                key: 'whenUserSignsIn',
                value: function () {
                  return this._whenUserSignsIn.promise
                },
              },
              {
                key: 'whenUserSignsOut',
                value: function () {
                  return this._whenUserSignsOut.promise
                },
              },
              {
                key: 'signOut',
                value: function () {
                  this._setSession(null),
                    this._whenUserSignsOut.resolve('cuzzo'),
                    (this._whenUserSignsOut = m['default'].defer())
                },
              },
              {
                key: 'requestHandler',
                value: function () {
                  var e = this
                  return function (t) {
                    return e._getSessionAsync().then(function (n) {
                      return (
                        y['default'].isNullOrUndefined(n) || t.setCKSession(n),
                        t.setApiToken(e._apiToken),
                        t
                      )
                    })
                  }
                },
              },
              {
                key: 'responseHandler',
                value: function () {
                  var e = this
                  return function (t) {
                    return (
                      y['default'].isNullOrUndefined(t.getCKSession()) ||
                        y['default'].isNullOrUndefined(e._ckSession) ||
                        e._setSession(t.getCKSession()),
                      t
                    )
                  }
                },
              },
              {
                key: 'getConfig',
                value: function () {
                  return (0, o['default'])({}, L['default'].API_TOKEN_AUTH, {
                    apiToken: this._apiToken,
                    ckWebAuthToken: this._ckSession,
                  })
                },
              },
              {
                key: '_getSessionAsync',
                value: function () {
                  var e = this,
                    t = m['default'].Promise.resolve(this._ckSession)
                  return (
                    this._authTokenStore &&
                      (t = m['default'].Promise.resolve(
                        this._authTokenStore.getToken(this._container.containerIdentifier),
                      ).then(function (t) {
                        return (e._ckSession = t), e._ckSession
                      })),
                    t
                  )
                },
              },
              {
                key: '_setSession',
                value: function (e) {
                  ;(this._ckSession = e),
                    this._authTokenStore &&
                      this._authTokenStore.putToken(this._container.containerIdentifier, e)
                },
              },
              {
                key: '_fetchAndHandleCurrentUserIdentity',
                value: function () {
                  var e = this
                  return this._fetchCurrentUserIdentity()
                    .then(function (t) {
                      return e._handleCurrentUserIdentity(t)
                    })
                    ['catch'](function (t) {
                      if (t.ckErrorCode === N['default'].AUTHENTICATION_REQUIRED)
                        return e._handleSignInURL(t.redirectURL), null
                      throw t
                    })
                },
              },
              {
                key: '_handleSignInURL',
                value: function (e) {
                  var t = this
                  ;(this._signInURL = e),
                    setTimeout(function () {
                      return t._fetchAndHandleCurrentUserIdentity()['catch'](function () {})
                    }, P),
                    this._authButtons.showSignInButton(function () {
                      y['default']
                        .getAsyncMessageFromPopup(t._signInURL, U, M)
                        .then(function (e) {
                          var n = e.data.ckSession
                          if (y['default'].isNullOrUndefined(n))
                            throw y['default'].isNullOrUndefined(e.data.errorMessage)
                              ? (b['default'].warn(
                                  'Event of type message has neither a ckSession nor an error message',
                                  e,
                                ),
                                N['default'].makeUnknownError())
                              : (b['default'].warn(
                                  'Message event from popup reports error: ',
                                  e.data,
                                ),
                                N['default'].makeSignInFailedError(e.data))
                          t._setSession(n)
                        })
                        .then(function () {
                          return t._fetchAndHandleCurrentUserIdentity()
                        })
                        ['catch'](function (e) {
                          S['default'].reportUnexpectedAuthError(),
                            b['default'].warn('Unexpected error', e),
                            t._whenUserSignsIn.reject(e),
                            (t._whenUserSignsIn = m['default'].defer()),
                            t.setup()
                        })
                    })
                },
              },
              {
                key: '_handleCurrentUserIdentity',
                value: function (e) {
                  var t = this
                  return (
                    this._whenUserSignsIn.resolve(e),
                    (this._whenUserSignsIn = m['default'].defer()),
                    this._authButtons.showSignOutButton(function () {
                      t.signOut(), t.setup()
                    }),
                    e
                  )
                },
              },
            ]),
            t
          )
        })(I['default'])
      t['default'] = j
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(85),
        f = r(s),
        c = n(300),
        l = r(c),
        d = (function () {
          function e(t) {
            ;(0, o['default'])(this, e),
              (this._config = t),
              (this._signInButton = l['default'].create(
                f['default'].assign(
                  {},
                  t.signInButton,
                  { locale: t.locale },
                  { l10nKey: 'Auth.SignIn' },
                ),
              )),
              (this._signOutButton = l['default'].create(
                f['default'].assign(
                  {},
                  t.signOutButton,
                  { locale: t.locale },
                  { l10nKey: 'Auth.SignOut' },
                ),
              ))
          }
          return (
            (0, a['default'])(e, [
              {
                key: 'showSignInButton',
                value: function (e) {
                  this._signOutButton.hide(), this._signInButton.show(e)
                },
              },
              {
                key: 'showSignOutButton',
                value: function (e) {
                  this._signInButton.hide(), this._signOutButton.show(e)
                },
              },
              {
                key: 'reset',
                value: function () {
                  this._signInButton.hide(), this._signOutButton.hide()
                },
              },
            ]),
            e
          )
        })()
      t['default'] = {
        create: function (e) {
          return new d(e)
        },
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i,
        o = n(80),
        u = r(o),
        a = n(81),
        s = r(a),
        f = n(261),
        c = r(f),
        l = n(282),
        d = r(l),
        h = n(301),
        p = r(h),
        v = n(303),
        _ = r(v),
        y = 218,
        g = 40,
        m =
          ((i = {}),
          (0, c['default'])(i, _['default'].WHITE, {
            outer: 'white',
            inner: 'white',
            text: 'black',
          }),
          (0, c['default'])(i, _['default'].WHITE_WITH_OUTLINE, {
            outer: 'black',
            inner: 'white',
            text: 'black',
          }),
          (0, c['default'])(i, _['default'].BLACK, {
            outer: 'black',
            inner: 'black',
            text: 'white',
          }),
          i),
        k = function (e) {
          var t = p['default'].translations(e.locale)[e.l10nKey],
            n = e.theme || _['default'].WHITE_WITH_OUTLINE,
            r = m[n] || m[_['default'].WHITE_WITH_OUTLINE],
            i = d['default'].createElement('<div>', {
              classes: ['apple-auth-button'],
              style: {
                height: g + 'px',
                width: y + 'px',
                cursor: 'pointer',
                'border-style': 'solid',
                'border-width': '1px',
                'border-radius': '5px',
                'border-color': r.outer,
                'background-color': r.inner,
              },
              attributes: { alt: t.string },
              children: [
                d['default'].createElement(unescape(t.asset), {
                  classes: ['apple-auth-button-text'],
                  style: {
                    overflow: 'visible',
                    fill: r.text,
                    top: '50%',
                    left: '50%',
                    position: 'relative',
                  },
                }),
              ],
            })
          return i
        },
        b = d['default'].makeStyleToggle('display', 'block', 'none'),
        E = d['default'].makeStyleToggle('opacity', 1, 0.5),
        N = (function () {
          function e(t) {
            ;(0, u['default'])(this, e), (this._config = t)
          }
          return (
            (0, s['default'])(e, [
              {
                key: '_append',
                value: function () {
                  var e = document.querySelector('#' + this._config.id)
                  if (e) {
                    var t = k(this._config)
                    return e.appendChild(t), !0
                  }
                  return !1
                },
              },
              {
                key: 'show',
                value: function (e) {
                  var t = this
                  ;(this._button || this._append()) &&
                    (b(this._button, !0),
                    E(this._button, !0),
                    (this._button.onclick = function () {
                      ;(t._button.onclick = null), E(t._button, !1), e()
                    }))
                },
              },
              {
                key: 'hide',
                value: function () {
                  this._button && b(this._button, !1)
                },
              },
              {
                key: '_button',
                get: function () {
                  return document.querySelector('#' + this._config.id + ' > .apple-auth-button')
                },
              },
            ]),
            e
          )
        })()
      t['default'] = {
        create: function (e) {
          return new N(e)
        },
      }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(85),
        o = r(i),
        u = n(302),
        a = 'en-us',
        s = {
          'zh-hk': 'zh-tw',
          'nb-no': 'no-no',
          'nn-no': 'no-no',
          nb: 'no-no',
          nn: 'no-no',
          he: 'iw-il',
          'he-il': 'iw-il',
          pt: 'pt-pt',
          'vi-vn': 'vi-vi',
          'es-419': 'es-mx',
          'es-xl': 'es-mx',
        },
        f = function (e) {
          return o['default'].isString(e)
            ? ((e = e.toLowerCase()), 2 === e.length && (e = e + '-' + e), s[e] || e)
            : a
        },
        c = function (e) {
          return (e = f(e)), u[e] || u[a]
        },
        l = function (e) {
          return c(
            e
              ? e
              : 'undefined' == typeof navigator
              ? a
              : navigator.language || navigator.browserLanguage,
          )
        }
      t['default'] = { translations: l }
    },
    function (e, t) {
      e.exports = {
        'en-us': {
          'Auth.SignIn': {
            string: 'Sign in with Apple ID',
            asset:
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="177.42" height="21.52"><path d="M-79.53 2.00Q-79.53 3.72-80.73 4.80Q-82.05 5.98-84.41 5.98Q-86.59 5.98-87.91 5.14L-87.41 3.34Q-85.99 4.18-84.29 4.18Q-83.07 4.18-82.39 3.63Q-81.71 3.08-81.71 2.16Q-81.71 1.34-82.27 0.78Q-82.83 0.22-84.13-0.26Q-87.67-1.58-87.67-4.12Q-87.67-5.78-86.42-6.84Q-85.17-7.90-83.11-7.90Q-81.27-7.90-80.05-7.26L-80.59-5.50Q-81.73-6.12-83.17-6.12Q-84.31-6.12-84.95-5.56Q-85.49-5.06-85.49-4.34Q-85.49-3.54-84.87-3.02Q-84.33-2.54-82.91-1.98Q-81.17-1.28-80.35-0.34Q-79.53 0.60-79.53 2.00ZM-74.97-6.84Q-74.97-6.26-75.35-5.90Q-75.73-5.54-76.33-5.54Q-76.87-5.54-77.24-5.91Q-77.61-6.28-77.61-6.84Q-77.61-7.40-77.23-7.76Q-76.85-8.12-76.29-8.12Q-75.73-8.12-75.35-7.76Q-74.97-7.40-74.97-6.84M-75.21 5.78L-77.37 5.78L-77.37-3.94L-75.21-3.94L-75.21 5.78ZM-63.97-3.94Q-64.05-2.76-64.05-1.18L-64.05 4.38Q-64.05 7.52-65.45 8.78Q-66.73 9.94-69.05 9.94Q-71.07 9.94-72.31 9.18L-71.81 7.52Q-70.59 8.26-69.05 8.26Q-66.19 8.26-66.19 5.18L-66.19 4.24L-66.23 4.24Q-67.13 5.72-69.09 5.72Q-70.85 5.72-71.99 4.38Q-73.13 3.04-73.13 0.98Q-73.13-1.36-71.81-2.80Q-70.59-4.14-68.83-4.14Q-66.85-4.14-65.99-2.60L-65.95-2.60L-65.87-3.94L-63.97-3.94M-66.21 1.62L-66.21-0.10Q-66.21-1.08-66.82-1.78Q-67.43-2.48-68.43-2.48Q-69.53-2.48-70.24-1.56Q-70.95-0.64-70.95 0.90Q-70.95 2.30-70.29 3.16Q-69.61 4.10-68.43 4.10Q-67.71 4.10-67.14 3.67Q-66.57 3.24-66.33 2.50Q-66.21 2.14-66.21 1.62ZM-52.89 5.78L-55.05 5.78L-55.05 0.20Q-55.05-2.38-57.01-2.38Q-57.97-2.38-58.57-1.67Q-59.17-0.96-59.17-0.00L-59.17 5.78L-61.33 5.78L-61.33-1.16Q-61.33-2.44-61.41-3.94L-59.51-3.94L-59.41-2.44L-59.35-2.44Q-58.97-3.14-58.23-3.60Q-57.35-4.14-56.27-4.14Q-54.91-4.14-54.01-3.26Q-52.89-2.18-52.89-0.04L-52.89 5.78ZM-43.09-6.84Q-43.09-6.26-43.47-5.90Q-43.85-5.54-44.45-5.54Q-44.99-5.54-45.36-5.91Q-45.73-6.28-45.73-6.84Q-45.73-7.40-45.35-7.76Q-44.97-8.12-44.41-8.12Q-43.85-8.12-43.47-7.76Q-43.09-7.40-43.09-6.84M-43.33 5.78L-45.49 5.78L-45.49-3.94L-43.33-3.94L-43.33 5.78ZM-32.17 5.78L-34.33 5.78L-34.33 0.20Q-34.33-2.38-36.29-2.38Q-37.25-2.38-37.85-1.67Q-38.45-0.96-38.45-0.00L-38.45 5.78L-40.61 5.78L-40.61-1.16Q-40.61-2.44-40.69-3.94L-38.79-3.94L-38.69-2.44L-38.63-2.44Q-38.25-3.14-37.51-3.60Q-36.63-4.14-35.55-4.14Q-34.19-4.14-33.29-3.26Q-32.17-2.18-32.17-0.04L-32.17 5.78ZM-11.75-3.94L-14.79 5.78L-16.77 5.78L-18.03 1.56Q-18.51-0.02-18.81-1.58L-18.85-1.58Q-19.13 0.02-19.63 1.56L-20.97 5.78L-22.97 5.78L-25.83-3.94L-23.61-3.94L-22.51 0.68Q-22.11 2.32-21.85 3.80L-21.81 3.80Q-21.57 2.58-21.01 0.70L-19.63-3.94L-17.87-3.94L-16.55 0.60Q-16.07 2.26-15.77 3.80L-15.71 3.80Q-15.49 2.30-15.05 0.60L-13.87-3.94L-11.75-3.94ZM-7.71-6.84Q-7.71-6.26-8.09-5.90Q-8.47-5.54-9.07-5.54Q-9.61-5.54-9.98-5.91Q-10.35-6.28-10.35-6.84Q-10.35-7.40-9.97-7.76Q-9.59-8.12-9.03-8.12Q-8.47-8.12-8.09-7.76Q-7.71-7.40-7.71-6.84M-7.95 5.78L-10.11 5.78L-10.11-3.94L-7.95-3.94L-7.95 5.78ZM-0.33-2.32L-2.71-2.32L-2.71 2.40Q-2.71 4.20-1.45 4.20Q-0.87 4.20-0.49 4.10L-0.43 5.74Q-1.07 5.98-2.11 5.98Q-3.39 5.98-4.11 5.20Q-4.83 4.42-4.83 2.58L-4.83-2.32L-6.25-2.32L-6.25-3.94L-4.83-3.94L-4.83-5.72L-2.71-6.36L-2.71-3.94L-0.33-3.94L-0.33-2.32ZM9.99 5.78L7.83 5.78L7.83 0.24Q7.83-2.38 5.87-2.38Q4.37-2.38 3.81-0.86Q3.71-0.54 3.71-0.08L3.71 5.78L1.55 5.78L1.55-8.40L3.71-8.40L3.71-2.56L3.75-2.56Q4.77-4.14 6.67-4.14Q8.01-4.14 8.89-3.26Q9.99-2.16 9.99-0.00L9.99 5.78ZM27.85 5.78L25.55 5.78L24.29 1.82L19.91 1.82L18.71 5.78L16.47 5.78L20.81-7.70L23.49-7.70L27.85 5.78M23.91 0.16L22.77-3.36Q22.59-3.90 22.09-5.90L22.05-5.90Q21.85-5.04 21.41-3.36L20.29 0.16L23.91 0.16ZM38.81 0.80Q38.81 3.28 37.47 4.72Q36.27 6.00 34.49 6.00Q32.57 6.00 31.73 4.62L31.69 4.62L31.69 9.74L29.53 9.74L29.53-0.74Q29.53-2.30 29.45-3.94L31.35-3.94L31.47-2.40L31.51-2.40Q32.59-4.14 34.79-4.14Q36.51-4.14 37.66-2.78Q38.81-1.42 38.81 0.80M36.61 0.88Q36.61-0.54 35.97-1.46Q35.27-2.42 34.09-2.42Q33.29-2.42 32.64-1.89Q31.99-1.36 31.79-0.50Q31.69-0.10 31.69 0.16L31.69 1.78Q31.69 2.84 32.34 3.57Q32.99 4.30 34.03 4.30Q35.25 4.30 35.93 3.36Q36.61 2.42 36.61 0.88ZM50.09 0.80Q50.09 3.28 48.75 4.72Q47.55 6.00 45.77 6.00Q43.85 6.00 43.01 4.62L42.97 4.62L42.97 9.74L40.81 9.74L40.81-0.74Q40.81-2.30 40.73-3.94L42.63-3.94L42.75-2.40L42.79-2.40Q43.87-4.14 46.07-4.14Q47.79-4.14 48.94-2.78Q50.09-1.42 50.09 0.80M47.89 0.88Q47.89-0.54 47.25-1.46Q46.55-2.42 45.37-2.42Q44.57-2.42 43.92-1.89Q43.27-1.36 43.07-0.50Q42.97-0.10 42.97 0.16L42.97 1.78Q42.97 2.84 43.62 3.57Q44.27 4.30 45.31 4.30Q46.53 4.30 47.21 3.36Q47.89 2.42 47.89 0.88ZM54.33 5.78L52.17 5.78L52.17-8.40L54.33-8.40L54.33 5.78ZM65.05 0.46Q65.05 1.04 64.97 1.44L58.49 1.44Q58.53 2.88 59.43 3.64Q60.25 4.32 61.55 4.32Q62.99 4.32 64.17 3.86L64.51 5.36Q63.13 5.96 61.25 5.96Q58.99 5.96 57.70 4.63Q56.41 3.30 56.41 1.06Q56.41-1.14 57.61-2.60Q58.87-4.16 61.01-4.16Q63.11-4.16 64.19-2.60Q65.05-1.36 65.05 0.46M62.99-0.10Q63.01-1.06 62.57-1.76Q62.01-2.66 60.85-2.66Q59.79-2.66 59.13-1.78Q58.59-1.08 58.49-0.10L62.99-0.10ZM74.03 5.78L71.87 5.78L71.87-7.70L74.03-7.70L74.03 5.78ZM87.99-1.28Q87.99 2.36 85.81 4.20Q83.79 5.90 80.07 5.90Q78.23 5.90 76.91 5.74L76.91-7.52Q78.63-7.80 80.63-7.80Q84.17-7.80 85.97-6.26Q87.99-4.52 87.99-1.28M85.71-1.22Q85.71-3.58 84.46-4.84Q83.21-6.10 80.81-6.10Q79.79-6.10 79.07-5.96L79.07 4.12Q79.47 4.18 80.53 4.18Q83.01 4.18 84.36 2.80Q85.71 1.42 85.71-1.22Z"/></svg>',
          },
          'Auth.SignOut': {
            string: 'Sign out',
            asset:
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70.61999999999999" height="21.52"><path d="M-26.13 2.00Q-26.13 3.72-27.33 4.80Q-28.65 5.98-31.01 5.98Q-33.19 5.98-34.51 5.14L-34.01 3.34Q-32.59 4.18-30.89 4.18Q-29.67 4.18-28.99 3.63Q-28.31 3.08-28.31 2.16Q-28.31 1.34-28.87 0.78Q-29.43 0.22-30.73-0.26Q-34.27-1.58-34.27-4.12Q-34.27-5.78-33.02-6.84Q-31.77-7.90-29.71-7.90Q-27.87-7.90-26.65-7.26L-27.19-5.50Q-28.33-6.12-29.77-6.12Q-30.91-6.12-31.55-5.56Q-32.09-5.06-32.09-4.34Q-32.09-3.54-31.47-3.02Q-30.93-2.54-29.51-1.98Q-27.77-1.28-26.95-0.34Q-26.13 0.60-26.13 2.00ZM-21.57-6.84Q-21.57-6.26-21.95-5.90Q-22.33-5.54-22.93-5.54Q-23.47-5.54-23.84-5.91Q-24.21-6.28-24.21-6.84Q-24.21-7.40-23.83-7.76Q-23.45-8.12-22.89-8.12Q-22.33-8.12-21.95-7.76Q-21.57-7.40-21.57-6.84M-21.81 5.78L-23.97 5.78L-23.97-3.94L-21.81-3.94L-21.81 5.78ZM-10.57-3.94Q-10.65-2.76-10.65-1.18L-10.65 4.38Q-10.65 7.52-12.05 8.78Q-13.33 9.94-15.65 9.94Q-17.67 9.94-18.91 9.18L-18.41 7.52Q-17.19 8.26-15.65 8.26Q-12.79 8.26-12.79 5.18L-12.79 4.24L-12.83 4.24Q-13.73 5.72-15.69 5.72Q-17.45 5.72-18.59 4.38Q-19.73 3.04-19.73 0.98Q-19.73-1.36-18.41-2.80Q-17.19-4.14-15.43-4.14Q-13.45-4.14-12.59-2.60L-12.55-2.60L-12.47-3.94L-10.57-3.94M-12.81 1.62L-12.81-0.10Q-12.81-1.08-13.42-1.78Q-14.03-2.48-15.03-2.48Q-16.13-2.48-16.84-1.56Q-17.55-0.64-17.55 0.90Q-17.55 2.30-16.89 3.16Q-16.21 4.10-15.03 4.10Q-14.31 4.10-13.74 3.67Q-13.17 3.24-12.93 2.50Q-12.81 2.14-12.81 1.62ZM0.51 5.78L-1.65 5.78L-1.65 0.20Q-1.65-2.38-3.61-2.38Q-4.57-2.38-5.17-1.67Q-5.77-0.96-5.77-0.00L-5.77 5.78L-7.93 5.78L-7.93-1.16Q-7.93-2.44-8.01-3.94L-6.11-3.94L-6.01-2.44L-5.95-2.44Q-5.57-3.14-4.83-3.60Q-3.95-4.14-2.87-4.14Q-1.51-4.14-0.61-3.26Q0.51-2.18 0.51-0.04L0.51 5.78ZM16.79 0.84Q16.79 3.08 15.51 4.52Q14.17 6.00 11.95 6.00Q9.81 6.00 8.54 4.58Q7.27 3.16 7.27 1.00Q7.27-1.26 8.58-2.70Q9.89-4.14 12.11-4.14Q14.25-4.14 15.55-2.72Q16.79-1.34 16.79 0.84M14.55 0.90Q14.55-0.44 13.97-1.40Q13.29-2.56 12.03-2.56Q10.73-2.56 10.05-1.40Q9.47-0.44 9.47 0.94Q9.47 2.28 10.05 3.24Q10.75 4.40 12.01 4.40Q13.25 4.40 13.95 3.22Q14.55 2.24 14.55 0.90ZM27.25 5.78L25.35 5.78L25.23 4.30L25.19 4.30Q24.17 6.00 22.11 6.00Q20.67 6.00 19.81 5.10Q18.79 4.00 18.79 1.78L18.79-3.94L20.95-3.94L20.95 1.42Q20.95 4.22 22.87 4.22Q24.31 4.22 24.87 2.82Q25.01 2.46 25.01 2.00L25.01-3.94L27.17-3.94L27.17 2.98Q27.17 4.36 27.25 5.78ZM34.79-2.32L32.41-2.32L32.41 2.40Q32.41 4.20 33.67 4.20Q34.25 4.20 34.63 4.10L34.69 5.74Q34.05 5.98 33.01 5.98Q31.73 5.98 31.01 5.20Q30.29 4.42 30.29 2.58L30.29-2.32L28.87-2.32L28.87-3.94L30.29-3.94L30.29-5.72L32.41-6.36L32.41-3.94L34.79-3.94L34.79-2.32Z"/></svg>',
          },
        },
      }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'white',
        r = 'white-with-outline',
        i = 'black'
      t['default'] = { WHITE: n, BLACK: i, WHITE_WITH_OUTLINE: r }
    },
    function (e, t, n) {
      'use strict'
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(80),
        o = r(i),
        u = n(81),
        a = r(u),
        s = n(85),
        f = r(s),
        c = n(229),
        l = (r(c), n(226)),
        d = r(l),
        h = {
          putToken: function (e, t) {
            f['default'].setCookie(e, t)
          },
          getToken: function (e) {
            return f['default'].getCookie(e)
          },
        },
        p = {},
        v = {
          putToken: function (e, t) {
            p[e] = t
          },
          getToken: function (e) {
            return p[e]
          },
        },
        _ = f['default'].isNode() ? v : h,
        y = (function () {
          function e() {
            ;(0, o['default'])(this, e), this.setDelegate()
          }
          return (
            (0, a['default'])(e, [
              {
                key: 'setDelegate',
                value: function (e) {
                  f['default'].isNullOrUndefined(e) ? (this._delegate = _) : (this._delegate = e)
                },
              },
              {
                key: 'putToken',
                value: function (e, t) {
                  try {
                    this._delegate.putToken(e, t)
                  } catch (n) {
                    this._delegate[e] = t
                  }
                  if (t !== this.getToken(e)) throw d['default'].makeAuthPersistError()
                },
              },
              {
                key: 'getToken',
                value: function (e) {
                  try {
                    return this._delegate.getToken(e)
                  } catch (t) {
                    return this._delegate[e]
                  }
                },
              },
            ]),
            e
          )
        })()
      t['default'] = {
        create: function (e) {
          var t = new y()
          return t.setDelegate(e), t
        },
      }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'EQUALS',
        r = 'NOT_EQUALS',
        i = 'LESS_THAN',
        o = 'LESS_THAN_OR_EQUALS',
        u = 'GREATER_THAN',
        a = 'GREATER_THAN_OR_EQUALS',
        s = 'NEAR',
        f = 'CONTAINS_ALL_TOKENS',
        c = 'IN',
        l = 'CONTAINS_ANY_TOKENS',
        d = 'LIST_CONTAINS',
        h = 'NOT_LIST_CONTAINS',
        p = 'LIST_CONTAINS_ANY',
        v = 'NOT_LIST_CONTAINS_ANY',
        _ = 'NOT_IN',
        y = 'BEGINS_WITH',
        g = 'NOT_BEGINS_WITH',
        m = 'LIST_MEMBER_BEGINS_WITH',
        k = 'NOT_LIST_MEMBER_BEGINS_WITH',
        b = 'LIST_CONTAINS_ALL',
        E = 'NOT_LIST_CONTAINS_ALL'
      t['default'] = {
        EQUALS: n,
        NOT_EQUALS: r,
        LESS_THAN: i,
        LESS_THAN_OR_EQUALS: o,
        GREATER_THAN: u,
        GREATER_THAN_OR_EQUALS: a,
        NEAR: s,
        CONTAINS_ALL_TOKENS: f,
        IN: c,
        NOT_IN: _,
        CONTAINS_ANY_TOKENS: l,
        LIST_CONTAINS: d,
        LIST_CONTAINS_ANY: p,
        NOT_LIST_CONTAINS: h,
        NOT_LIST_CONTAINS_ANY: v,
        BEGINS_WITH: y,
        NOT_BEGINS_WITH: g,
        LIST_MEMBER_BEGINS_WITH: m,
        NOT_LIST_MEMBER_BEGINS_WITH: k,
        LIST_CONTAINS_ALL: b,
        NOT_LIST_CONTAINS_ALL: E,
      }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'NONE',
        r = 'DELETE_SELF',
        i = 'VALIDATE'
      t['default'] = { NONE: n, DELETE_SELF: r, VALIDATE: i }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'query',
        r = 'zone',
        i = 'database'
      t['default'] = { QUERY: n, RECORD_ZONE: r, DATABASE: i }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'cloudkit.share',
        r = 'cloudkit.title',
        i = 'cloudkit.thumbnailImageData',
        o = 'cloudkit.type'
      t['default'] = {
        NAME: n,
        TITLE_FIELD_NAME: r,
        THUMBNAIL_IMAGE_DATA_FIELD_NAME: i,
        TYPE_FIELD_NAME: o,
      }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'UNKNOWN',
        r = 'NONE',
        i = 'READ_ONLY',
        o = 'READ_WRITE'
      t['default'] = { UNKNOWN: n, NONE: r, READ_ONLY: i, READ_WRITE: o }
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = 'UNKNOWN',
        r = 'PENDING',
        i = 'ACCEPTED'
      t['default'] = { UNKNOWN: n, PENDING: r, ACCEPTED: i }
    },
  ])
})
//# sourceMappingURL=resources/cloudkit.js.map
