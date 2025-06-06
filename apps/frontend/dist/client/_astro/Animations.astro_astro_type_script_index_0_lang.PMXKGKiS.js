import { g as ut } from './index.D3jsOSc0.js';
function bo(i, e) {
  for (var n = 0; n < e.length; n++) {
    var t = e[n];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      'value' in t && (t.writable = !0),
      Object.defineProperty(i, t.key, t);
  }
}
function wo(i, e, n) {
  return e && bo(i.prototype, e), i;
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var me,
  Ur,
  qe,
  Rt,
  At,
  or,
  Zn,
  Bt,
  yr,
  Jn,
  bt,
  it,
  Qn,
  jn = function () {
    return me || (typeof window < 'u' && (me = window.gsap) && me.registerPlugin && me);
  },
  eo = 1,
  nr = [],
  M = [],
  pt = [],
  xr = Date.now,
  pn = function (e, n) {
    return n;
  },
  Co = function () {
    var e = yr.core,
      n = e.bridge || {},
      t = e._scrollers,
      r = e._proxies;
    t.push.apply(t, M),
      r.push.apply(r, pt),
      (M = t),
      (pt = r),
      (pn = function (u, a) {
        return n[u](a);
      });
  },
  Ot = function (e, n) {
    return ~pt.indexOf(e) && pt[pt.indexOf(e) + 1][n];
  },
  br = function (e) {
    return !!~Jn.indexOf(e);
  },
  Ae = function (e, n, t, r, o) {
    return e.addEventListener(n, t, { passive: r !== !1, capture: !!o });
  },
  Re = function (e, n, t, r) {
    return e.removeEventListener(n, t, !!r);
  },
  Or = 'scrollLeft',
  Lr = 'scrollTop',
  dn = function () {
    return (bt && bt.isPressed) || M.cache++;
  },
  Jr = function (e, n) {
    var t = function r(o) {
      if (o || o === 0) {
        eo && (qe.history.scrollRestoration = 'manual');
        var u = bt && bt.isPressed;
        (o = r.v = Math.round(o) || (bt && bt.iOS ? 1 : 0)),
          e(o),
          (r.cacheID = M.cache),
          u && pn('ss', o);
      } else (n || M.cache !== r.cacheID || pn('ref')) && ((r.cacheID = M.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (t.offset = 0), e && t;
  },
  Fe = {
    s: Or,
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: Jr(function (i) {
      return arguments.length
        ? qe.scrollTo(i, le.sc())
        : qe.pageXOffset || Rt[Or] || At[Or] || or[Or] || 0;
    }),
  },
  le = {
    s: Lr,
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: Fe,
    sc: Jr(function (i) {
      return arguments.length
        ? qe.scrollTo(Fe.sc(), i)
        : qe.pageYOffset || Rt[Lr] || At[Lr] || or[Lr] || 0;
    }),
  },
  He = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || me.utils.toArray)(e)[0] ||
      (typeof e == 'string' && me.config().nullTargetWarn !== !1
        ? console.warn('Element not found:', e)
        : null)
    );
  },
  So = function (e, n) {
    for (var t = n.length; t--; ) if (n[t] === e || n[t].contains(e)) return !0;
    return !1;
  },
  Lt = function (e, n) {
    var t = n.s,
      r = n.sc;
    br(e) && (e = Rt.scrollingElement || At);
    var o = M.indexOf(e),
      u = r === le.sc ? 1 : 2;
    !~o && (o = M.push(e) - 1), M[o + u] || Ae(e, 'scroll', dn);
    var a = M[o + u],
      p =
        a ||
        (M[o + u] =
          Jr(Ot(e, t), !0) ||
          (br(e)
            ? r
            : Jr(function (y) {
                return arguments.length ? (e[t] = y) : e[t];
              })));
    return (p.target = e), a || (p.smooth = me.getProperty(e, 'scrollBehavior') === 'smooth'), p;
  },
  gn = function (e, n, t) {
    var r = e,
      o = e,
      u = xr(),
      a = u,
      p = n || 50,
      y = Math.max(500, p * 3),
      L = function (m, U) {
        var X = xr();
        U || X - u > p
          ? ((o = r), (r = m), (a = u), (u = X))
          : t
            ? (r += m)
            : (r = o + ((m - o) / (X - a)) * (u - a));
      },
      P = function () {
        (o = r = t ? 0 : r), (a = u = 0);
      },
      h = function (m) {
        var U = a,
          X = o,
          ne = xr();
        return (
          (m || m === 0) && m !== r && L(m),
          u === a || ne - a > y ? 0 : ((r + (t ? X : -X)) / ((t ? ne : u) - U)) * 1e3
        );
      };
    return { update: L, reset: P, getVelocity: h };
  },
  pr = function (e, n) {
    return n && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  },
  Rn = function (e) {
    var n = Math.max.apply(Math, e),
      t = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(t) ? n : t;
  },
  to = function () {
    (yr = me.core.globals().ScrollTrigger), yr && yr.core && Co();
  },
  ro = function (e) {
    return (
      (me = e || jn()),
      !Ur &&
        me &&
        typeof document < 'u' &&
        document.body &&
        ((qe = window),
        (Rt = document),
        (At = Rt.documentElement),
        (or = Rt.body),
        (Jn = [qe, Rt, At, or]),
        me.utils.clamp,
        (Qn = me.core.context || function () {}),
        (Bt = 'onpointerenter' in or ? 'pointer' : 'mouse'),
        (Zn = J.isTouch =
          qe.matchMedia && qe.matchMedia('(hover: none), (pointer: coarse)').matches
            ? 1
            : 'ontouchstart' in qe || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (it = J.eventTypes =
          (
            'ontouchstart' in At
              ? 'touchstart,touchmove,touchcancel,touchend'
              : 'onpointerdown' in At
                ? 'pointerdown,pointermove,pointercancel,pointerup'
                : 'mousedown,mousemove,mouseup,mouseup'
          ).split(',')),
        setTimeout(function () {
          return (eo = 0);
        }, 500),
        to(),
        (Ur = 1)),
      Ur
    );
  };
Fe.op = le;
M.cache = 0;
var J = (function () {
  function i(n) {
    this.init(n);
  }
  var e = i.prototype;
  return (
    (e.init = function (t) {
      Ur || ro(me) || console.warn('Please gsap.registerPlugin(Observer)'), yr || to();
      var r = t.tolerance,
        o = t.dragMinimum,
        u = t.type,
        a = t.target,
        p = t.lineHeight,
        y = t.debounce,
        L = t.preventDefault,
        P = t.onStop,
        h = t.onStopDelay,
        c = t.ignore,
        m = t.wheelSpeed,
        U = t.event,
        X = t.onDragStart,
        ne = t.onDragEnd,
        W = t.onDrag,
        ge = t.onPress,
        T = t.onRelease,
        Ve = t.onRight,
        B = t.onLeft,
        b = t.onUp,
        ke = t.onDown,
        Ie = t.onChangeX,
        g = t.onChangeY,
        ue = t.onChange,
        x = t.onToggleX,
        dt = t.onToggleY,
        oe = t.onHover,
        Ee = t.onHoverEnd,
        Me = t.onMove,
        I = t.ignoreCheck,
        Q = t.isNormalizer,
        j = t.onGestureStart,
        s = t.onGestureEnd,
        ie = t.onWheel,
        Yt = t.onEnable,
        Ct = t.onDisable,
        Ke = t.onClick,
        gt = t.scrollSpeed,
        ve = t.capture,
        ee = t.allowClicks,
        Pe = t.lockAxis,
        ye = t.onLockAxis;
      (this.target = a = He(a) || At),
        (this.vars = t),
        c && (c = me.utils.toArray(c)),
        (r = r || 1e-9),
        (o = o || 0),
        (m = m || 1),
        (gt = gt || 1),
        (u = u || 'wheel,touch,pointer'),
        (y = y !== !1),
        p || (p = parseFloat(qe.getComputedStyle(or).lineHeight) || 22);
      var St,
        De,
        ze,
        O,
        V,
        Xe,
        Be,
        l = this,
        Ne = 0,
        ht = 0,
        Tt = t.passive || (!L && t.passive !== !1),
        $ = Lt(a, Fe),
        _t = Lt(a, le),
        kt = $(),
        Ft = _t(),
        ce = ~u.indexOf('touch') && !~u.indexOf('pointer') && it[0] === 'pointerdown',
        Et = br(a),
        K = a.ownerDocument || Rt,
        et = [0, 0, 0],
        Ze = [0, 0, 0],
        mt = 0,
        lr = function () {
          return (mt = xr());
        },
        te = function (v, Y) {
          return (
            ((l.event = v) && c && So(v.target, c)) ||
            (Y && ce && v.pointerType !== 'touch') ||
            (I && I(v, Y))
          );
        },
        Dr = function () {
          l._vx.reset(), l._vy.reset(), De.pause(), P && P(l);
        },
        vt = function () {
          var v = (l.deltaX = Rn(et)),
            Y = (l.deltaY = Rn(Ze)),
            f = Math.abs(v) >= r,
            w = Math.abs(Y) >= r;
          ue && (f || w) && ue(l, v, Y, et, Ze),
            f &&
              (Ve && l.deltaX > 0 && Ve(l),
              B && l.deltaX < 0 && B(l),
              Ie && Ie(l),
              x && l.deltaX < 0 != Ne < 0 && x(l),
              (Ne = l.deltaX),
              (et[0] = et[1] = et[2] = 0)),
            w &&
              (ke && l.deltaY > 0 && ke(l),
              b && l.deltaY < 0 && b(l),
              g && g(l),
              dt && l.deltaY < 0 != ht < 0 && dt(l),
              (ht = l.deltaY),
              (Ze[0] = Ze[1] = Ze[2] = 0)),
            (O || ze) &&
              (Me && Me(l), ze && (X && ze === 1 && X(l), W && W(l), (ze = 0)), (O = !1)),
            Xe && !(Xe = !1) && ye && ye(l),
            V && (ie(l), (V = !1)),
            (St = 0);
        },
        Zt = function (v, Y, f) {
          (et[f] += v),
            (Ze[f] += Y),
            l._vx.update(v),
            l._vy.update(Y),
            y ? St || (St = requestAnimationFrame(vt)) : vt();
        },
        Jt = function (v, Y) {
          Pe && !Be && ((l.axis = Be = Math.abs(v) > Math.abs(Y) ? 'x' : 'y'), (Xe = !0)),
            Be !== 'y' && ((et[2] += v), l._vx.update(v, !0)),
            Be !== 'x' && ((Ze[2] += Y), l._vy.update(Y, !0)),
            y ? St || (St = requestAnimationFrame(vt)) : vt();
        },
        Mt = function (v) {
          if (!te(v, 1)) {
            v = pr(v, L);
            var Y = v.clientX,
              f = v.clientY,
              w = Y - l.x,
              _ = f - l.y,
              C = l.isDragging;
            (l.x = Y),
              (l.y = f),
              (C || ((w || _) && (Math.abs(l.startX - Y) >= o || Math.abs(l.startY - f) >= o))) &&
                ((ze = C ? 2 : 1), C || (l.isDragging = !0), Jt(w, _));
          }
        },
        It = (l.onPress = function (S) {
          te(S, 1) ||
            (S && S.button) ||
            ((l.axis = Be = null),
            De.pause(),
            (l.isPressed = !0),
            (S = pr(S)),
            (Ne = ht = 0),
            (l.startX = l.x = S.clientX),
            (l.startY = l.y = S.clientY),
            l._vx.reset(),
            l._vy.reset(),
            Ae(Q ? a : K, it[1], Mt, Tt, !0),
            (l.deltaX = l.deltaY = 0),
            ge && ge(l));
        }),
        D = (l.onRelease = function (S) {
          if (!te(S, 1)) {
            Re(Q ? a : K, it[1], Mt, !0);
            var v = !isNaN(l.y - l.startY),
              Y = l.isDragging,
              f = Y && (Math.abs(l.x - l.startX) > 3 || Math.abs(l.y - l.startY) > 3),
              w = pr(S);
            !f &&
              v &&
              (l._vx.reset(),
              l._vy.reset(),
              L &&
                ee &&
                me.delayedCall(0.08, function () {
                  if (xr() - mt > 300 && !S.defaultPrevented) {
                    if (S.target.click) S.target.click();
                    else if (K.createEvent) {
                      var _ = K.createEvent('MouseEvents');
                      _.initMouseEvent(
                        'click',
                        !0,
                        !0,
                        qe,
                        1,
                        w.screenX,
                        w.screenY,
                        w.clientX,
                        w.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        S.target.dispatchEvent(_);
                    }
                  }
                })),
              (l.isDragging = l.isGesturing = l.isPressed = !1),
              P && Y && !Q && De.restart(!0),
              ze && vt(),
              ne && Y && ne(l),
              T && T(l, f);
          }
        }),
        zt = function (v) {
          return v.touches && v.touches.length > 1 && (l.isGesturing = !0) && j(v, l.isDragging);
        },
        tt = function () {
          return (l.isGesturing = !1) || s(l);
        },
        rt = function (v) {
          if (!te(v)) {
            var Y = $(),
              f = _t();
            Zt((Y - kt) * gt, (f - Ft) * gt, 1), (kt = Y), (Ft = f), P && De.restart(!0);
          }
        },
        nt = function (v) {
          if (!te(v)) {
            (v = pr(v, L)), ie && (V = !0);
            var Y = (v.deltaMode === 1 ? p : v.deltaMode === 2 ? qe.innerHeight : 1) * m;
            Zt(v.deltaX * Y, v.deltaY * Y, 0), P && !Q && De.restart(!0);
          }
        },
        Xt = function (v) {
          if (!te(v)) {
            var Y = v.clientX,
              f = v.clientY,
              w = Y - l.x,
              _ = f - l.y;
            (l.x = Y), (l.y = f), (O = !0), P && De.restart(!0), (w || _) && Jt(w, _);
          }
        },
        Qt = function (v) {
          (l.event = v), oe(l);
        },
        yt = function (v) {
          (l.event = v), Ee(l);
        },
        ur = function (v) {
          return te(v) || (pr(v, L) && Ke(l));
        };
      (De = l._dc = me.delayedCall(h || 0.25, Dr).pause()),
        (l.deltaX = l.deltaY = 0),
        (l._vx = gn(0, 50, !0)),
        (l._vy = gn(0, 50, !0)),
        (l.scrollX = $),
        (l.scrollY = _t),
        (l.isDragging = l.isGesturing = l.isPressed = !1),
        Qn(this),
        (l.enable = function (S) {
          return (
            l.isEnabled ||
              (Ae(Et ? K : a, 'scroll', dn),
              u.indexOf('scroll') >= 0 && Ae(Et ? K : a, 'scroll', rt, Tt, ve),
              u.indexOf('wheel') >= 0 && Ae(a, 'wheel', nt, Tt, ve),
              ((u.indexOf('touch') >= 0 && Zn) || u.indexOf('pointer') >= 0) &&
                (Ae(a, it[0], It, Tt, ve),
                Ae(K, it[2], D),
                Ae(K, it[3], D),
                ee && Ae(a, 'click', lr, !0, !0),
                Ke && Ae(a, 'click', ur),
                j && Ae(K, 'gesturestart', zt),
                s && Ae(K, 'gestureend', tt),
                oe && Ae(a, Bt + 'enter', Qt),
                Ee && Ae(a, Bt + 'leave', yt),
                Me && Ae(a, Bt + 'move', Xt)),
              (l.isEnabled = !0),
              (l.isDragging = l.isGesturing = l.isPressed = O = ze = !1),
              l._vx.reset(),
              l._vy.reset(),
              (kt = $()),
              (Ft = _t()),
              S && S.type && It(S),
              Yt && Yt(l)),
            l
          );
        }),
        (l.disable = function () {
          l.isEnabled &&
            (nr.filter(function (S) {
              return S !== l && br(S.target);
            }).length || Re(Et ? K : a, 'scroll', dn),
            l.isPressed && (l._vx.reset(), l._vy.reset(), Re(Q ? a : K, it[1], Mt, !0)),
            Re(Et ? K : a, 'scroll', rt, ve),
            Re(a, 'wheel', nt, ve),
            Re(a, it[0], It, ve),
            Re(K, it[2], D),
            Re(K, it[3], D),
            Re(a, 'click', lr, !0),
            Re(a, 'click', ur),
            Re(K, 'gesturestart', zt),
            Re(K, 'gestureend', tt),
            Re(a, Bt + 'enter', Qt),
            Re(a, Bt + 'leave', yt),
            Re(a, Bt + 'move', Xt),
            (l.isEnabled = l.isPressed = l.isDragging = !1),
            Ct && Ct(l));
        }),
        (l.kill = l.revert =
          function () {
            l.disable();
            var S = nr.indexOf(l);
            S >= 0 && nr.splice(S, 1), bt === l && (bt = 0);
          }),
        nr.push(l),
        Q && br(a) && (bt = l),
        l.enable(U);
    }),
    wo(i, [
      {
        key: 'velocityX',
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: 'velocityY',
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    i
  );
})();
J.version = '3.13.0';
J.create = function (i) {
  return new J(i);
};
J.register = ro;
J.getAll = function () {
  return nr.slice();
};
J.getById = function (i) {
  return nr.filter(function (e) {
    return e.vars.id === i;
  })[0];
};
jn() && me.registerPlugin(J);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var d,
  tr,
  E,
  H,
  $e,
  F,
  wn,
  Qr,
  Mr,
  wr,
  gr,
  Yr,
  Ce,
  rn,
  hn,
  Le,
  An,
  On,
  rr,
  no,
  on,
  oo,
  Oe,
  _n,
  io,
  so,
  Dt,
  mn,
  Cn,
  ir,
  Sn,
  jr,
  vn,
  sn,
  Fr = 1,
  Se = Date.now,
  an = Se(),
  je = 0,
  hr = 0,
  Ln = function (e, n, t) {
    var r = Ue(e) && (e.substr(0, 6) === 'clamp(' || e.indexOf('max') > -1);
    return (t['_' + n + 'Clamp'] = r), r ? e.substr(6, e.length - 7) : e;
  },
  Yn = function (e, n) {
    return n && (!Ue(e) || e.substr(0, 6) !== 'clamp(') ? 'clamp(' + e + ')' : e;
  },
  To = function i() {
    return hr && requestAnimationFrame(i);
  },
  Fn = function () {
    return (rn = 1);
  },
  In = function () {
    return (rn = 0);
  },
  ct = function (e) {
    return e;
  },
  _r = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  ao = function () {
    return typeof window < 'u';
  },
  lo = function () {
    return d || (ao() && (d = window.gsap) && d.registerPlugin && d);
  },
  qt = function (e) {
    return !!~wn.indexOf(e);
  },
  uo = function (e) {
    return (e === 'Height' ? Sn : E['inner' + e]) || $e['client' + e] || F['client' + e];
  },
  co = function (e) {
    return (
      Ot(e, 'getBoundingClientRect') ||
      (qt(e)
        ? function () {
            return (Zr.width = E.innerWidth), (Zr.height = Sn), Zr;
          }
        : function () {
            return xt(e);
          })
    );
  },
  ko = function (e, n, t) {
    var r = t.d,
      o = t.d2,
      u = t.a;
    return (u = Ot(e, 'getBoundingClientRect'))
      ? function () {
          return u()[r];
        }
      : function () {
          return (n ? uo(o) : e['client' + o]) || 0;
        };
  },
  Eo = function (e, n) {
    return !n || ~pt.indexOf(e)
      ? co(e)
      : function () {
          return Zr;
        };
  },
  ft = function (e, n) {
    var t = n.s,
      r = n.d2,
      o = n.d,
      u = n.a;
    return Math.max(
      0,
      (t = 'scroll' + r) && (u = Ot(e, t))
        ? u() - co(e)()[o]
        : qt(e)
          ? ($e[t] || F[t]) - uo(r)
          : e[t] - e['offset' + r],
    );
  },
  Ir = function (e, n) {
    for (var t = 0; t < rr.length; t += 3)
      (!n || ~n.indexOf(rr[t + 1])) && e(rr[t], rr[t + 1], rr[t + 2]);
  },
  Ue = function (e) {
    return typeof e == 'string';
  },
  Te = function (e) {
    return typeof e == 'function';
  },
  mr = function (e) {
    return typeof e == 'number';
  },
  Nt = function (e) {
    return typeof e == 'object';
  },
  dr = function (e, n, t) {
    return e && e.progress(n ? 0 : 1) && t && e.pause();
  },
  ln = function (e, n) {
    if (e.enabled) {
      var t = e._ctx
        ? e._ctx.add(function () {
            return n(e);
          })
        : n(e);
      t && t.totalTime && (e.callbackAnimation = t);
    }
  },
  jt = Math.abs,
  fo = 'left',
  po = 'top',
  Tn = 'right',
  kn = 'bottom',
  Gt = 'width',
  Ut = 'height',
  Cr = 'Right',
  Sr = 'Left',
  Tr = 'Top',
  kr = 'Bottom',
  re = 'padding',
  Je = 'margin',
  ar = 'Width',
  En = 'Height',
  ae = 'px',
  Qe = function (e) {
    return E.getComputedStyle(e);
  },
  Mo = function (e) {
    var n = Qe(e).position;
    e.style.position = n === 'absolute' || n === 'fixed' ? n : 'relative';
  },
  zn = function (e, n) {
    for (var t in n) t in e || (e[t] = n[t]);
    return e;
  },
  xt = function (e, n) {
    var t =
        n &&
        Qe(e)[hn] !== 'matrix(1, 0, 0, 1, 0, 0)' &&
        d
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = e.getBoundingClientRect();
    return t && t.progress(0).kill(), r;
  },
  en = function (e, n) {
    var t = n.d2;
    return e['offset' + t] || e['client' + t] || 0;
  },
  go = function (e) {
    var n = [],
      t = e.labels,
      r = e.duration(),
      o;
    for (o in t) n.push(t[o] / r);
    return n;
  },
  Po = function (e) {
    return function (n) {
      return d.utils.snap(go(e), n);
    };
  },
  Mn = function (e) {
    var n = d.utils.snap(e),
      t =
        Array.isArray(e) &&
        e.slice(0).sort(function (r, o) {
          return r - o;
        });
    return t
      ? function (r, o, u) {
          u === void 0 && (u = 0.001);
          var a;
          if (!o) return n(r);
          if (o > 0) {
            for (r -= u, a = 0; a < t.length; a++) if (t[a] >= r) return t[a];
            return t[a - 1];
          } else for (a = t.length, r += u; a--; ) if (t[a] <= r) return t[a];
          return t[0];
        }
      : function (r, o, u) {
          u === void 0 && (u = 0.001);
          var a = n(r);
          return !o || Math.abs(a - r) < u || a - r < 0 == o < 0 ? a : n(o < 0 ? r - e : r + e);
        };
  },
  Do = function (e) {
    return function (n, t) {
      return Mn(go(e))(n, t.direction);
    };
  },
  zr = function (e, n, t, r) {
    return t.split(',').forEach(function (o) {
      return e(n, o, r);
    });
  },
  de = function (e, n, t, r, o) {
    return e.addEventListener(n, t, { passive: !r, capture: !!o });
  },
  pe = function (e, n, t, r) {
    return e.removeEventListener(n, t, !!r);
  },
  Xr = function (e, n, t) {
    (t = t && t.wheelHandler), t && (e(n, 'wheel', t), e(n, 'touchmove', t));
  },
  Xn = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
  Hr = { toggleActions: 'play', anticipatePin: 0 },
  tn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  $r = function (e, n) {
    if (Ue(e)) {
      var t = e.indexOf('='),
        r = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
      ~t && (e.indexOf('%') > t && (r *= n / 100), (e = e.substr(0, t - 1))),
        (e =
          r +
          (e in tn ? tn[e] * n : ~e.indexOf('%') ? (parseFloat(e) * n) / 100 : parseFloat(e) || 0));
    }
    return e;
  },
  Br = function (e, n, t, r, o, u, a, p) {
    var y = o.startColor,
      L = o.endColor,
      P = o.fontSize,
      h = o.indent,
      c = o.fontWeight,
      m = H.createElement('div'),
      U = qt(t) || Ot(t, 'pinType') === 'fixed',
      X = e.indexOf('scroller') !== -1,
      ne = U ? F : t,
      W = e.indexOf('start') !== -1,
      ge = W ? y : L,
      T =
        'border-color:' +
        ge +
        ';font-size:' +
        P +
        ';color:' +
        ge +
        ';font-weight:' +
        c +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (T += 'position:' + ((X || p) && U ? 'fixed;' : 'absolute;')),
      (X || p || !U) && (T += (r === le ? Tn : kn) + ':' + (u + parseFloat(h)) + 'px;'),
      a && (T += 'box-sizing:border-box;text-align:left;width:' + a.offsetWidth + 'px;'),
      (m._isStart = W),
      m.setAttribute('class', 'gsap-marker-' + e + (n ? ' marker-' + n : '')),
      (m.style.cssText = T),
      (m.innerText = n || n === 0 ? e + '-' + n : e),
      ne.children[0] ? ne.insertBefore(m, ne.children[0]) : ne.appendChild(m),
      (m._offset = m['offset' + r.op.d2]),
      qr(m, 0, r, W),
      m
    );
  },
  qr = function (e, n, t, r) {
    var o = { display: 'block' },
      u = t[r ? 'os2' : 'p2'],
      a = t[r ? 'p2' : 'os2'];
    (e._isFlipped = r),
      (o[t.a + 'Percent'] = r ? -100 : 0),
      (o[t.a] = r ? '1px' : 0),
      (o['border' + u + ar] = 1),
      (o['border' + a + ar] = 0),
      (o[t.p] = n + 'px'),
      d.set(e, o);
  },
  k = [],
  yn = {},
  Pr,
  Hn = function () {
    return Se() - je > 34 && (Pr || (Pr = requestAnimationFrame(wt)));
  },
  er = function () {
    (!Oe || !Oe.isPressed || Oe.startX > F.clientWidth) &&
      (M.cache++,
      Oe ? Pr || (Pr = requestAnimationFrame(wt)) : wt(),
      je || Kt('scrollStart'),
      (je = Se()));
  },
  un = function () {
    (so = E.innerWidth), (io = E.innerHeight);
  },
  vr = function (e) {
    M.cache++,
      (e === !0 ||
        (!Ce &&
          !oo &&
          !H.fullscreenElement &&
          !H.webkitFullscreenElement &&
          (!_n || so !== E.innerWidth || Math.abs(E.innerHeight - io) > E.innerHeight * 0.25))) &&
        Qr.restart(!0);
  },
  Vt = {},
  Ro = [],
  ho = function i() {
    return pe(R, 'scrollEnd', i) || Wt(!0);
  },
  Kt = function (e) {
    return (
      (Vt[e] &&
        Vt[e].map(function (n) {
          return n();
        })) ||
      Ro
    );
  },
  Ge = [],
  _o = function (e) {
    for (var n = 0; n < Ge.length; n += 5)
      (!e || (Ge[n + 4] && Ge[n + 4].query === e)) &&
        ((Ge[n].style.cssText = Ge[n + 1]),
        Ge[n].getBBox && Ge[n].setAttribute('transform', Ge[n + 2] || ''),
        (Ge[n + 3].uncache = 1));
  },
  Pn = function (e, n) {
    var t;
    for (Le = 0; Le < k.length; Le++)
      (t = k[Le]), t && (!n || t._ctx === n) && (e ? t.kill(1) : t.revert(!0, !0));
    (jr = !0), n && _o(n), n || Kt('revert');
  },
  mo = function (e, n) {
    M.cache++,
      (n || !Ye) &&
        M.forEach(function (t) {
          return Te(t) && t.cacheID++ && (t.rec = 0);
        }),
      Ue(e) && (E.history.scrollRestoration = Cn = e);
  },
  Ye,
  $t = 0,
  Bn,
  Ao = function () {
    if (Bn !== $t) {
      var e = (Bn = $t);
      requestAnimationFrame(function () {
        return e === $t && Wt(!0);
      });
    }
  },
  vo = function () {
    F.appendChild(ir), (Sn = (!Oe && ir.offsetHeight) || E.innerHeight), F.removeChild(ir);
  },
  Nn = function (e) {
    return Mr(
      '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end',
    ).forEach(function (n) {
      return (n.style.display = e ? 'none' : 'block');
    });
  },
  Wt = function (e, n) {
    if ((($e = H.documentElement), (F = H.body), (wn = [E, H, $e, F]), je && !e && !jr)) {
      de(R, 'scrollEnd', ho);
      return;
    }
    vo(),
      (Ye = R.isRefreshing = !0),
      M.forEach(function (r) {
        return Te(r) && ++r.cacheID && (r.rec = r());
      });
    var t = Kt('refreshInit');
    no && R.sort(),
      n || Pn(),
      M.forEach(function (r) {
        Te(r) && (r.smooth && (r.target.style.scrollBehavior = 'auto'), r(0));
      }),
      k.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (jr = !1),
      k.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var o = r.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            u = r.pin[o];
          r.revert(!0, 1), r.adjustPinSpacing(r.pin[o] - u), r.refresh();
        }
      }),
      (vn = 1),
      Nn(!0),
      k.forEach(function (r) {
        var o = ft(r.scroller, r._dir),
          u = r.vars.end === 'max' || (r._endClamp && r.end > o),
          a = r._startClamp && r.start >= o;
        (u || a) &&
          r.setPositions(a ? o - 1 : r.start, u ? Math.max(a ? o : r.start + 1, o) : r.end, !0);
      }),
      Nn(!1),
      (vn = 0),
      t.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      M.forEach(function (r) {
        Te(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = 'smooth');
            }),
          r.rec && r(r.rec));
      }),
      mo(Cn, 1),
      Qr.pause(),
      $t++,
      (Ye = 2),
      wt(2),
      k.forEach(function (r) {
        return Te(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (Ye = R.isRefreshing = !1),
      Kt('refresh');
  },
  xn = 0,
  Vr = 1,
  Er,
  wt = function (e) {
    if (e === 2 || (!Ye && !jr)) {
      (R.isUpdating = !0), Er && Er.update(0);
      var n = k.length,
        t = Se(),
        r = t - an >= 50,
        o = n && k[0].scroll();
      if (
        ((Vr = xn > o ? -1 : 1),
        Ye || (xn = o),
        r && (je && !rn && t - je > 200 && ((je = 0), Kt('scrollEnd')), (gr = an), (an = t)),
        Vr < 0)
      ) {
        for (Le = n; Le-- > 0; ) k[Le] && k[Le].update(0, r);
        Vr = 1;
      } else for (Le = 0; Le < n; Le++) k[Le] && k[Le].update(0, r);
      R.isUpdating = !1;
    }
    Pr = 0;
  },
  bn = [
    fo,
    po,
    kn,
    Tn,
    Je + kr,
    Je + Cr,
    Je + Tr,
    Je + Sr,
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order',
  ],
  Kr = bn.concat([
    Gt,
    Ut,
    'boxSizing',
    'max' + ar,
    'max' + En,
    'position',
    Je,
    re,
    re + Tr,
    re + Cr,
    re + kr,
    re + Sr,
  ]),
  Oo = function (e, n, t) {
    sr(t);
    var r = e._gsap;
    if (r.spacerIsNative) sr(r.spacerState);
    else if (e._gsap.swappedIn) {
      var o = n.parentNode;
      o && (o.insertBefore(e, n), o.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  cn = function (e, n, t, r) {
    if (!e._gsap.swappedIn) {
      for (var o = bn.length, u = n.style, a = e.style, p; o--; ) (p = bn[o]), (u[p] = t[p]);
      (u.position = t.position === 'absolute' ? 'absolute' : 'relative'),
        t.display === 'inline' && (u.display = 'inline-block'),
        (a[kn] = a[Tn] = 'auto'),
        (u.flexBasis = t.flexBasis || 'auto'),
        (u.overflow = 'visible'),
        (u.boxSizing = 'border-box'),
        (u[Gt] = en(e, Fe) + ae),
        (u[Ut] = en(e, le) + ae),
        (u[re] = a[Je] = a[po] = a[fo] = '0'),
        sr(r),
        (a[Gt] = a['max' + ar] = t[Gt]),
        (a[Ut] = a['max' + En] = t[Ut]),
        (a[re] = t[re]),
        e.parentNode !== n && (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Lo = /([A-Z])/g,
  sr = function (e) {
    if (e) {
      var n = e.t.style,
        t = e.length,
        r = 0,
        o,
        u;
      for ((e.t._gsap || d.core.getCache(e.t)).uncache = 1; r < t; r += 2)
        (u = e[r + 1]),
          (o = e[r]),
          u ? (n[o] = u) : n[o] && n.removeProperty(o.replace(Lo, '-$1').toLowerCase());
    }
  },
  Nr = function (e) {
    for (var n = Kr.length, t = e.style, r = [], o = 0; o < n; o++) r.push(Kr[o], t[Kr[o]]);
    return (r.t = e), r;
  },
  Yo = function (e, n, t) {
    for (var r = [], o = e.length, u = t ? 8 : 0, a; u < o; u += 2)
      (a = e[u]), r.push(a, a in n ? n[a] : e[u + 1]);
    return (r.t = e.t), r;
  },
  Zr = { left: 0, top: 0 },
  Wn = function (e, n, t, r, o, u, a, p, y, L, P, h, c, m) {
    Te(e) && (e = e(p)),
      Ue(e) &&
        e.substr(0, 3) === 'max' &&
        (e = h + (e.charAt(4) === '=' ? $r('0' + e.substr(3), t) : 0));
    var U = c ? c.time() : 0,
      X,
      ne,
      W;
    if ((c && c.seek(0), isNaN(e) || (e = +e), mr(e)))
      c && (e = d.utils.mapRange(c.scrollTrigger.start, c.scrollTrigger.end, 0, h, e)),
        a && qr(a, t, r, !0);
    else {
      Te(n) && (n = n(p));
      var ge = (e || '0').split(' '),
        T,
        Ve,
        B,
        b;
      (W = He(n, p) || F),
        (T = xt(W) || {}),
        (!T || (!T.left && !T.top)) &&
          Qe(W).display === 'none' &&
          ((b = W.style.display),
          (W.style.display = 'block'),
          (T = xt(W)),
          b ? (W.style.display = b) : W.style.removeProperty('display')),
        (Ve = $r(ge[0], T[r.d])),
        (B = $r(ge[1] || '0', t)),
        (e = T[r.p] - y[r.p] - L + Ve + o - B),
        a && qr(a, B, r, t - B < 20 || (a._isStart && B > 20)),
        (t -= t - B);
    }
    if ((m && ((p[m] = e || -0.001), e < 0 && (e = 0)), u)) {
      var ke = e + t,
        Ie = u._isStart;
      (X = 'scroll' + r.d2),
        qr(
          u,
          ke,
          r,
          (Ie && ke > 20) || (!Ie && (P ? Math.max(F[X], $e[X]) : u.parentNode[X]) <= ke + 1),
        ),
        P && ((y = xt(a)), P && (u.style[r.op.p] = y[r.op.p] - r.op.m - u._offset + ae));
    }
    return (
      c &&
        W &&
        ((X = xt(W)),
        c.seek(h),
        (ne = xt(W)),
        (c._caScrollDist = X[r.p] - ne[r.p]),
        (e = (e / c._caScrollDist) * h)),
      c && c.seek(U),
      c ? e : Math.round(e)
    );
  },
  Fo = /(webkit|moz|length|cssText|inset)/i,
  Gn = function (e, n, t, r) {
    if (e.parentNode !== n) {
      var o = e.style,
        u,
        a;
      if (n === F) {
        (e._stOrig = o.cssText), (a = Qe(e));
        for (u in a)
          !+u && !Fo.test(u) && a[u] && typeof o[u] == 'string' && u !== '0' && (o[u] = a[u]);
        (o.top = t), (o.left = r);
      } else o.cssText = e._stOrig;
      (d.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  yo = function (e, n, t) {
    var r = n,
      o = r;
    return function (u) {
      var a = Math.round(e());
      return (
        a !== r && a !== o && Math.abs(a - r) > 3 && Math.abs(a - o) > 3 && ((u = a), t && t()),
        (o = r),
        (r = Math.round(u)),
        r
      );
    };
  },
  Wr = function (e, n, t) {
    var r = {};
    (r[n.p] = '+=' + t), d.set(e, r);
  },
  Un = function (e, n) {
    var t = Lt(e, n),
      r = '_scroll' + n.p2,
      o = function u(a, p, y, L, P) {
        var h = u.tween,
          c = p.onComplete,
          m = {};
        y = y || t();
        var U = yo(t, y, function () {
          h.kill(), (u.tween = 0);
        });
        return (
          (P = (L && P) || 0),
          (L = L || a - y),
          h && h.kill(),
          (p[r] = a),
          (p.inherit = !1),
          (p.modifiers = m),
          (m[r] = function () {
            return U(y + L * h.ratio + P * h.ratio * h.ratio);
          }),
          (p.onUpdate = function () {
            M.cache++, u.tween && wt();
          }),
          (p.onComplete = function () {
            (u.tween = 0), c && c.call(h);
          }),
          (h = u.tween = d.to(e, p)),
          h
        );
      };
    return (
      (e[r] = t),
      (t.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      de(e, 'wheel', t.wheelHandler),
      R.isTouch && de(e, 'touchmove', t.wheelHandler),
      o
    );
  },
  R = (function () {
    function i(n, t) {
      tr || i.register(d) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
        mn(this),
        this.init(n, t);
    }
    var e = i.prototype;
    return (
      (e.init = function (t, r) {
        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !hr)) {
          this.update = this.refresh = this.kill = ct;
          return;
        }
        t = zn(Ue(t) || mr(t) || t.nodeType ? { trigger: t } : t, Hr);
        var o = t,
          u = o.onUpdate,
          a = o.toggleClass,
          p = o.id,
          y = o.onToggle,
          L = o.onRefresh,
          P = o.scrub,
          h = o.trigger,
          c = o.pin,
          m = o.pinSpacing,
          U = o.invalidateOnRefresh,
          X = o.anticipatePin,
          ne = o.onScrubComplete,
          W = o.onSnapComplete,
          ge = o.once,
          T = o.snap,
          Ve = o.pinReparent,
          B = o.pinSpacer,
          b = o.containerAnimation,
          ke = o.fastScrollEnd,
          Ie = o.preventOverlaps,
          g = t.horizontal || (t.containerAnimation && t.horizontal !== !1) ? Fe : le,
          ue = !P && P !== 0,
          x = He(t.scroller || E),
          dt = d.core.getCache(x),
          oe = qt(x),
          Ee = ('pinType' in t ? t.pinType : Ot(x, 'pinType') || (oe && 'fixed')) === 'fixed',
          Me = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          I = ue && t.toggleActions.split(' '),
          Q = 'markers' in t ? t.markers : Hr.markers,
          j = oe ? 0 : parseFloat(Qe(x)['border' + g.p2 + ar]) || 0,
          s = this,
          ie =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(s);
            },
          Yt = ko(x, oe, g),
          Ct = Eo(x, oe),
          Ke = 0,
          gt = 0,
          ve = 0,
          ee = Lt(x, g),
          Pe,
          ye,
          St,
          De,
          ze,
          O,
          V,
          Xe,
          Be,
          l,
          Ne,
          ht,
          Tt,
          $,
          _t,
          kt,
          Ft,
          ce,
          Et,
          K,
          et,
          Ze,
          mt,
          lr,
          te,
          Dr,
          vt,
          Zt,
          Jt,
          Mt,
          It,
          D,
          zt,
          tt,
          rt,
          nt,
          Xt,
          Qt,
          yt;
        if (
          ((s._startClamp = s._endClamp = !1),
          (s._dir = g),
          (X *= 45),
          (s.scroller = x),
          (s.scroll = b ? b.time.bind(b) : ee),
          (De = ee()),
          (s.vars = t),
          (r = r || t.animation),
          'refreshPriority' in t && ((no = 1), t.refreshPriority === -9999 && (Er = s)),
          (dt.tweenScroll = dt.tweenScroll || { top: Un(x, le), left: Un(x, Fe) }),
          (s.tweenTo = Pe = dt.tweenScroll[g.p]),
          (s.scrubDuration = function (f) {
            (zt = mr(f) && f),
              zt
                ? D
                  ? D.duration(f)
                  : (D = d.to(r, {
                      ease: 'expo',
                      totalProgress: '+=0',
                      inherit: !1,
                      duration: zt,
                      paused: !0,
                      onComplete: function () {
                        return ne && ne(s);
                      },
                    }))
                : (D && D.progress(1).kill(), (D = 0));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !s.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (s.animation = r.pause()),
            (r.scrollTrigger = s),
            s.scrubDuration(P),
            (Mt = 0),
            p || (p = r.vars.id)),
          T &&
            ((!Nt(T) || T.push) && (T = { snapTo: T }),
            'scrollBehavior' in F.style && d.set(oe ? [F, $e] : x, { scrollBehavior: 'auto' }),
            M.forEach(function (f) {
              return Te(f) && f.target === (oe ? H.scrollingElement || $e : x) && (f.smooth = !1);
            }),
            (St = Te(T.snapTo)
              ? T.snapTo
              : T.snapTo === 'labels'
                ? Po(r)
                : T.snapTo === 'labelsDirectional'
                  ? Do(r)
                  : T.directional !== !1
                    ? function (f, w) {
                        return Mn(T.snapTo)(f, Se() - gt < 500 ? 0 : w.direction);
                      }
                    : d.utils.snap(T.snapTo)),
            (tt = T.duration || { min: 0.1, max: 2 }),
            (tt = Nt(tt) ? wr(tt.min, tt.max) : wr(tt, tt)),
            (rt = d
              .delayedCall(T.delay || zt / 2 || 0.1, function () {
                var f = ee(),
                  w = Se() - gt < 500,
                  _ = Pe.tween;
                if ((w || Math.abs(s.getVelocity()) < 10) && !_ && !rn && Ke !== f) {
                  var C = (f - O) / $,
                    fe = r && !ue ? r.totalProgress() : C,
                    A = w ? 0 : ((fe - It) / (Se() - gr)) * 1e3 || 0,
                    Z = d.utils.clamp(-C, 1 - C, (jt(A / 2) * A) / 0.185),
                    xe = C + (T.inertia === !1 ? 0 : Z),
                    q,
                    N,
                    z = T,
                    ot = z.onStart,
                    G = z.onInterrupt,
                    We = z.onComplete;
                  if (
                    ((q = St(xe, s)),
                    mr(q) || (q = xe),
                    (N = Math.max(0, Math.round(O + q * $))),
                    f <= V && f >= O && N !== f)
                  ) {
                    if (_ && !_._initted && _.data <= jt(N - f)) return;
                    T.inertia === !1 && (Z = q - C),
                      Pe(
                        N,
                        {
                          duration: tt(
                            jt((Math.max(jt(xe - fe), jt(q - fe)) * 0.185) / A / 0.05 || 0),
                          ),
                          ease: T.ease || 'power3',
                          data: jt(N - f),
                          onInterrupt: function () {
                            return rt.restart(!0) && G && G(s);
                          },
                          onComplete: function () {
                            s.update(),
                              (Ke = ee()),
                              r &&
                                !ue &&
                                (D
                                  ? D.resetTo('totalProgress', q, r._tTime / r._tDur)
                                  : r.progress(q)),
                              (Mt = It = r && !ue ? r.totalProgress() : s.progress),
                              W && W(s),
                              We && We(s);
                          },
                        },
                        f,
                        Z * $,
                        N - f - Z * $,
                      ),
                      ot && ot(s, Pe.tween);
                  }
                } else s.isActive && Ke !== f && rt.restart(!0);
              })
              .pause())),
          p && (yn[p] = s),
          (h = s.trigger = He(h || (c !== !0 && c))),
          (yt = h && h._gsap && h._gsap.stRevert),
          yt && (yt = yt(s)),
          (c = c === !0 ? h : He(c)),
          Ue(a) && (a = { targets: h, className: a }),
          c &&
            (m === !1 ||
              m === Je ||
              (m =
                !m && c.parentNode && c.parentNode.style && Qe(c.parentNode).display === 'flex'
                  ? !1
                  : re),
            (s.pin = c),
            (ye = d.core.getCache(c)),
            ye.spacer
              ? (_t = ye.pinState)
              : (B &&
                  ((B = He(B)),
                  B && !B.nodeType && (B = B.current || B.nativeElement),
                  (ye.spacerIsNative = !!B),
                  B && (ye.spacerState = Nr(B))),
                (ye.spacer = ce = B || H.createElement('div')),
                ce.classList.add('pin-spacer'),
                p && ce.classList.add('pin-spacer-' + p),
                (ye.pinState = _t = Nr(c))),
            t.force3D !== !1 && d.set(c, { force3D: !0 }),
            (s.spacer = ce = ye.spacer),
            (Jt = Qe(c)),
            (lr = Jt[m + g.os2]),
            (K = d.getProperty(c)),
            (et = d.quickSetter(c, g.a, ae)),
            cn(c, ce, Jt),
            (Ft = Nr(c))),
          Q)
        ) {
          (ht = Nt(Q) ? zn(Q, Xn) : Xn),
            (l = Br('scroller-start', p, x, g, ht, 0)),
            (Ne = Br('scroller-end', p, x, g, ht, 0, l)),
            (Et = l['offset' + g.op.d2]);
          var ur = He(Ot(x, 'content') || x);
          (Xe = this.markerStart = Br('start', p, ur, g, ht, Et, 0, b)),
            (Be = this.markerEnd = Br('end', p, ur, g, ht, Et, 0, b)),
            b && (Qt = d.quickSetter([Xe, Be], g.a, ae)),
            !Ee &&
              !(pt.length && Ot(x, 'fixedMarkers') === !0) &&
              (Mo(oe ? F : x),
              d.set([l, Ne], { force3D: !0 }),
              (Dr = d.quickSetter(l, g.a, ae)),
              (Zt = d.quickSetter(Ne, g.a, ae)));
        }
        if (b) {
          var S = b.vars.onUpdate,
            v = b.vars.onUpdateParams;
          b.eventCallback('onUpdate', function () {
            s.update(0, 0, 1), S && S.apply(b, v || []);
          });
        }
        if (
          ((s.previous = function () {
            return k[k.indexOf(s) - 1];
          }),
          (s.next = function () {
            return k[k.indexOf(s) + 1];
          }),
          (s.revert = function (f, w) {
            if (!w) return s.kill(!0);
            var _ = f !== !1 || !s.enabled,
              C = Ce;
            _ !== s.isReverted &&
              (_ &&
                ((nt = Math.max(ee(), s.scroll.rec || 0)),
                (ve = s.progress),
                (Xt = r && r.progress())),
              Xe &&
                [Xe, Be, l, Ne].forEach(function (fe) {
                  return (fe.style.display = _ ? 'none' : 'block');
                }),
              _ && ((Ce = s), s.update(_)),
              c && (!Ve || !s.isActive) && (_ ? Oo(c, ce, _t) : cn(c, ce, Qe(c), te)),
              _ || s.update(_),
              (Ce = C),
              (s.isReverted = _));
          }),
          (s.refresh = function (f, w, _, C) {
            if (!((Ce || !s.enabled) && !w)) {
              if (c && f && je) {
                de(i, 'scrollEnd', ho);
                return;
              }
              !Ye && ie && ie(s),
                (Ce = s),
                Pe.tween && !_ && (Pe.tween.kill(), (Pe.tween = 0)),
                D && D.pause(),
                U &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren &&
                    r.getChildren(!0, !0, !1).forEach(function (Pt) {
                      return Pt.vars.immediateRender && Pt.render(0, !0, !0);
                    })),
                s.isReverted || s.revert(!0, !0),
                (s._subPinOffset = !1);
              var fe = Yt(),
                A = Ct(),
                Z = b ? b.duration() : ft(x, g),
                xe = $ <= 0.01 || !$,
                q = 0,
                N = C || 0,
                z = Nt(_) ? _.end : t.end,
                ot = t.endTrigger || h,
                G = Nt(_) ? _.start : t.start || (t.start === 0 || !h ? 0 : c ? '0 0' : '0 100%'),
                We = (s.pinnedContainer = t.pinnedContainer && He(t.pinnedContainer, s)),
                st = (h && Math.max(0, k.indexOf(s))) || 0,
                he = st,
                _e,
                be,
                Ht,
                Rr,
                we,
                se,
                at,
                nn,
                Dn,
                cr,
                lt,
                fr,
                Ar;
              for (
                Q && Nt(_) && ((fr = d.getProperty(l, g.p)), (Ar = d.getProperty(Ne, g.p)));
                he-- > 0;

              )
                (se = k[he]),
                  se.end || se.refresh(0, 1) || (Ce = s),
                  (at = se.pin),
                  at &&
                    (at === h || at === c || at === We) &&
                    !se.isReverted &&
                    (cr || (cr = []), cr.unshift(se), se.revert(!0, !0)),
                  se !== k[he] && (st--, he--);
              for (
                Te(G) && (G = G(s)),
                  G = Ln(G, 'start', s),
                  O =
                    Wn(
                      G,
                      h,
                      fe,
                      g,
                      ee(),
                      Xe,
                      l,
                      s,
                      A,
                      j,
                      Ee,
                      Z,
                      b,
                      s._startClamp && '_startClamp',
                    ) || (c ? -0.001 : 0),
                  Te(z) && (z = z(s)),
                  Ue(z) &&
                    !z.indexOf('+=') &&
                    (~z.indexOf(' ')
                      ? (z = (Ue(G) ? G.split(' ')[0] : '') + z)
                      : ((q = $r(z.substr(2), fe)),
                        (z = Ue(G)
                          ? G
                          : (b
                              ? d.utils.mapRange(
                                  0,
                                  b.duration(),
                                  b.scrollTrigger.start,
                                  b.scrollTrigger.end,
                                  O,
                                )
                              : O) + q),
                        (ot = h))),
                  z = Ln(z, 'end', s),
                  V =
                    Math.max(
                      O,
                      Wn(
                        z || (ot ? '100% 0' : Z),
                        ot,
                        fe,
                        g,
                        ee() + q,
                        Be,
                        Ne,
                        s,
                        A,
                        j,
                        Ee,
                        Z,
                        b,
                        s._endClamp && '_endClamp',
                      ),
                    ) || -0.001,
                  q = 0,
                  he = st;
                he--;

              )
                (se = k[he]),
                  (at = se.pin),
                  at &&
                    se.start - se._pinPush <= O &&
                    !b &&
                    se.end > 0 &&
                    ((_e = se.end - (s._startClamp ? Math.max(0, se.start) : se.start)),
                    ((at === h && se.start - se._pinPush < O) || at === We) &&
                      isNaN(G) &&
                      (q += _e * (1 - se.progress)),
                    at === c && (N += _e));
              if (
                ((O += q),
                (V += q),
                s._startClamp && (s._startClamp += q),
                s._endClamp && !Ye && ((s._endClamp = V || -0.001), (V = Math.min(V, ft(x, g)))),
                ($ = V - O || ((O -= 0.01) && 0.001)),
                xe && (ve = d.utils.clamp(0, 1, d.utils.normalize(O, V, nt))),
                (s._pinPush = N),
                Xe &&
                  q &&
                  ((_e = {}),
                  (_e[g.a] = '+=' + q),
                  We && (_e[g.p] = '-=' + ee()),
                  d.set([Xe, Be], _e)),
                c && !(vn && s.end >= ft(x, g)))
              )
                (_e = Qe(c)),
                  (Rr = g === le),
                  (Ht = ee()),
                  (Ze = parseFloat(K(g.a)) + N),
                  !Z &&
                    V > 1 &&
                    ((lt = (oe ? H.scrollingElement || $e : x).style),
                    (lt = { style: lt, value: lt['overflow' + g.a.toUpperCase()] }),
                    oe &&
                      Qe(F)['overflow' + g.a.toUpperCase()] !== 'scroll' &&
                      (lt.style['overflow' + g.a.toUpperCase()] = 'scroll')),
                  cn(c, ce, _e),
                  (Ft = Nr(c)),
                  (be = xt(c, !0)),
                  (nn = Ee && Lt(x, Rr ? Fe : le)()),
                  m
                    ? ((te = [m + g.os2, $ + N + ae]),
                      (te.t = ce),
                      (he = m === re ? en(c, g) + $ + N : 0),
                      he &&
                        (te.push(g.d, he + ae),
                        ce.style.flexBasis !== 'auto' && (ce.style.flexBasis = he + ae)),
                      sr(te),
                      We &&
                        k.forEach(function (Pt) {
                          Pt.pin === We && Pt.vars.pinSpacing !== !1 && (Pt._subPinOffset = !0);
                        }),
                      Ee && ee(nt))
                    : ((he = en(c, g)),
                      he && ce.style.flexBasis !== 'auto' && (ce.style.flexBasis = he + ae)),
                  Ee &&
                    ((we = {
                      top: be.top + (Rr ? Ht - O : nn) + ae,
                      left: be.left + (Rr ? nn : Ht - O) + ae,
                      boxSizing: 'border-box',
                      position: 'fixed',
                    }),
                    (we[Gt] = we['max' + ar] = Math.ceil(be.width) + ae),
                    (we[Ut] = we['max' + En] = Math.ceil(be.height) + ae),
                    (we[Je] = we[Je + Tr] = we[Je + Cr] = we[Je + kr] = we[Je + Sr] = '0'),
                    (we[re] = _e[re]),
                    (we[re + Tr] = _e[re + Tr]),
                    (we[re + Cr] = _e[re + Cr]),
                    (we[re + kr] = _e[re + kr]),
                    (we[re + Sr] = _e[re + Sr]),
                    (kt = Yo(_t, we, Ve)),
                    Ye && ee(0)),
                  r
                    ? ((Dn = r._initted),
                      on(1),
                      r.render(r.duration(), !0, !0),
                      (mt = K(g.a) - Ze + $ + N),
                      (vt = Math.abs($ - mt) > 1),
                      Ee && vt && kt.splice(kt.length - 2, 2),
                      r.render(0, !0, !0),
                      Dn || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      on(0))
                    : (mt = $),
                  lt &&
                    (lt.value
                      ? (lt.style['overflow' + g.a.toUpperCase()] = lt.value)
                      : lt.style.removeProperty('overflow-' + g.a));
              else if (h && ee() && !b)
                for (be = h.parentNode; be && be !== F; )
                  be._pinOffset && ((O -= be._pinOffset), (V -= be._pinOffset)),
                    (be = be.parentNode);
              cr &&
                cr.forEach(function (Pt) {
                  return Pt.revert(!1, !0);
                }),
                (s.start = O),
                (s.end = V),
                (De = ze = Ye ? nt : ee()),
                !b && !Ye && (De < nt && ee(nt), (s.scroll.rec = 0)),
                s.revert(!1, !0),
                (gt = Se()),
                rt && ((Ke = -1), rt.restart(!0)),
                (Ce = 0),
                r &&
                  ue &&
                  (r._initted || Xt) &&
                  r.progress() !== Xt &&
                  r.progress(Xt || 0, !0).render(r.time(), !0, !0),
                (xe || ve !== s.progress || b || U || (r && !r._initted)) &&
                  (r &&
                    !ue &&
                    (r._initted || ve || r.vars.immediateRender !== !1) &&
                    r.totalProgress(b && O < -0.001 && !ve ? d.utils.normalize(O, V, 0) : ve, !0),
                  (s.progress = xe || (De - O) / $ === ve ? 0 : ve)),
                c && m && (ce._pinOffset = Math.round(s.progress * mt)),
                D && D.invalidate(),
                isNaN(fr) ||
                  ((fr -= d.getProperty(l, g.p)),
                  (Ar -= d.getProperty(Ne, g.p)),
                  Wr(l, g, fr),
                  Wr(Xe, g, fr - (C || 0)),
                  Wr(Ne, g, Ar),
                  Wr(Be, g, Ar - (C || 0))),
                xe && !Ye && s.update(),
                L && !Ye && !Tt && ((Tt = !0), L(s), (Tt = !1));
            }
          }),
          (s.getVelocity = function () {
            return ((ee() - ze) / (Se() - gr)) * 1e3 || 0;
          }),
          (s.endAnimation = function () {
            dr(s.callbackAnimation),
              r &&
                (D
                  ? D.progress(1)
                  : r.paused()
                    ? ue || dr(r, s.direction < 0, 1)
                    : dr(r, r.reversed()));
          }),
          (s.labelToScroll = function (f) {
            return (
              (r && r.labels && (O || s.refresh() || O) + (r.labels[f] / r.duration()) * $) || 0
            );
          }),
          (s.getTrailing = function (f) {
            var w = k.indexOf(s),
              _ = s.direction > 0 ? k.slice(0, w).reverse() : k.slice(w + 1);
            return (
              Ue(f)
                ? _.filter(function (C) {
                    return C.vars.preventOverlaps === f;
                  })
                : _
            ).filter(function (C) {
              return s.direction > 0 ? C.end <= O : C.start >= V;
            });
          }),
          (s.update = function (f, w, _) {
            if (!(b && !_ && !f)) {
              var C = Ye === !0 ? nt : s.scroll(),
                fe = f ? 0 : (C - O) / $,
                A = fe < 0 ? 0 : fe > 1 ? 1 : fe || 0,
                Z = s.progress,
                xe,
                q,
                N,
                z,
                ot,
                G,
                We,
                st;
              if (
                (w &&
                  ((ze = De),
                  (De = b ? ee() : C),
                  T && ((It = Mt), (Mt = r && !ue ? r.totalProgress() : A))),
                X &&
                  c &&
                  !Ce &&
                  !Fr &&
                  je &&
                  (!A && O < C + ((C - ze) / (Se() - gr)) * X
                    ? (A = 1e-4)
                    : A === 1 && V > C + ((C - ze) / (Se() - gr)) * X && (A = 0.9999)),
                A !== Z && s.enabled)
              ) {
                if (
                  ((xe = s.isActive = !!A && A < 1),
                  (q = !!Z && Z < 1),
                  (G = xe !== q),
                  (ot = G || !!A != !!Z),
                  (s.direction = A > Z ? 1 : -1),
                  (s.progress = A),
                  ot &&
                    !Ce &&
                    ((N = A && !Z ? 0 : A === 1 ? 1 : Z === 1 ? 2 : 3),
                    ue &&
                      ((z = (!G && I[N + 1] !== 'none' && I[N + 1]) || I[N]),
                      (st = r && (z === 'complete' || z === 'reset' || z in r)))),
                  Ie &&
                    (G || st) &&
                    (st || P || !r) &&
                    (Te(Ie)
                      ? Ie(s)
                      : s.getTrailing(Ie).forEach(function (Ht) {
                          return Ht.endAnimation();
                        })),
                  ue ||
                    (D && !Ce && !Fr
                      ? (D._dp._time - D._start !== D._time && D.render(D._dp._time - D._start),
                        D.resetTo
                          ? D.resetTo('totalProgress', A, r._tTime / r._tDur)
                          : ((D.vars.totalProgress = A), D.invalidate().restart()))
                      : r && r.totalProgress(A, !!(Ce && (gt || f)))),
                  c)
                ) {
                  if ((f && m && (ce.style[m + g.os2] = lr), !Ee)) et(_r(Ze + mt * A));
                  else if (ot) {
                    if (((We = !f && A > Z && V + 1 > C && C + 1 >= ft(x, g)), Ve))
                      if (!f && (xe || We)) {
                        var he = xt(c, !0),
                          _e = C - O;
                        Gn(
                          c,
                          F,
                          he.top + (g === le ? _e : 0) + ae,
                          he.left + (g === le ? 0 : _e) + ae,
                        );
                      } else Gn(c, ce);
                    sr(xe || We ? kt : Ft),
                      (vt && A < 1 && xe) || et(Ze + (A === 1 && !We ? mt : 0));
                  }
                }
                T && !Pe.tween && !Ce && !Fr && rt.restart(!0),
                  a &&
                    (G || (ge && A && (A < 1 || !sn))) &&
                    Mr(a.targets).forEach(function (Ht) {
                      return Ht.classList[xe || ge ? 'add' : 'remove'](a.className);
                    }),
                  u && !ue && !f && u(s),
                  ot && !Ce
                    ? (ue &&
                        (st &&
                          (z === 'complete'
                            ? r.pause().totalProgress(1)
                            : z === 'reset'
                              ? r.restart(!0).pause()
                              : z === 'restart'
                                ? r.restart(!0)
                                : r[z]()),
                        u && u(s)),
                      (G || !sn) &&
                        (y && G && ln(s, y),
                        Me[N] && ln(s, Me[N]),
                        ge && (A === 1 ? s.kill(!1, 1) : (Me[N] = 0)),
                        G || ((N = A === 1 ? 1 : 3), Me[N] && ln(s, Me[N]))),
                      ke &&
                        !xe &&
                        Math.abs(s.getVelocity()) > (mr(ke) ? ke : 2500) &&
                        (dr(s.callbackAnimation),
                        D ? D.progress(1) : dr(r, z === 'reverse' ? 1 : !A, 1)))
                    : ue && u && !Ce && u(s);
              }
              if (Zt) {
                var be = b ? (C / b.duration()) * (b._caScrollDist || 0) : C;
                Dr(be + (l._isFlipped ? 1 : 0)), Zt(be);
              }
              Qt && Qt((-C / b.duration()) * (b._caScrollDist || 0));
            }
          }),
          (s.enable = function (f, w) {
            s.enabled ||
              ((s.enabled = !0),
              de(x, 'resize', vr),
              oe || de(x, 'scroll', er),
              ie && de(i, 'refreshInit', ie),
              f !== !1 && ((s.progress = ve = 0), (De = ze = Ke = ee())),
              w !== !1 && s.refresh());
          }),
          (s.getTween = function (f) {
            return f && Pe ? Pe.tween : D;
          }),
          (s.setPositions = function (f, w, _, C) {
            if (b) {
              var fe = b.scrollTrigger,
                A = b.duration(),
                Z = fe.end - fe.start;
              (f = fe.start + (Z * f) / A), (w = fe.start + (Z * w) / A);
            }
            s.refresh(
              !1,
              !1,
              { start: Yn(f, _ && !!s._startClamp), end: Yn(w, _ && !!s._endClamp) },
              C,
            ),
              s.update();
          }),
          (s.adjustPinSpacing = function (f) {
            if (te && f) {
              var w = te.indexOf(g.d) + 1;
              (te[w] = parseFloat(te[w]) + f + ae), (te[1] = parseFloat(te[1]) + f + ae), sr(te);
            }
          }),
          (s.disable = function (f, w) {
            if (
              s.enabled &&
              (f !== !1 && s.revert(!0, !0),
              (s.enabled = s.isActive = !1),
              w || (D && D.pause()),
              (nt = 0),
              ye && (ye.uncache = 1),
              ie && pe(i, 'refreshInit', ie),
              rt && (rt.pause(), Pe.tween && Pe.tween.kill() && (Pe.tween = 0)),
              !oe)
            ) {
              for (var _ = k.length; _--; ) if (k[_].scroller === x && k[_] !== s) return;
              pe(x, 'resize', vr), oe || pe(x, 'scroll', er);
            }
          }),
          (s.kill = function (f, w) {
            s.disable(f, w), D && !w && D.kill(), p && delete yn[p];
            var _ = k.indexOf(s);
            _ >= 0 && k.splice(_, 1),
              _ === Le && Vr > 0 && Le--,
              (_ = 0),
              k.forEach(function (C) {
                return C.scroller === s.scroller && (_ = 1);
              }),
              _ || Ye || (s.scroll.rec = 0),
              r && ((r.scrollTrigger = null), f && r.revert({ kill: !1 }), w || r.kill()),
              Xe &&
                [Xe, Be, l, Ne].forEach(function (C) {
                  return C.parentNode && C.parentNode.removeChild(C);
                }),
              Er === s && (Er = 0),
              c &&
                (ye && (ye.uncache = 1),
                (_ = 0),
                k.forEach(function (C) {
                  return C.pin === c && _++;
                }),
                _ || (ye.spacer = 0)),
              t.onKill && t.onKill(s);
          }),
          k.push(s),
          s.enable(!1, !1),
          yt && yt(s),
          r && r.add && !$)
        ) {
          var Y = s.update;
          (s.update = function () {
            (s.update = Y), M.cache++, O || V || s.refresh();
          }),
            d.delayedCall(0.01, s.update),
            ($ = 0.01),
            (O = V = 0);
        } else s.refresh();
        c && Ao();
      }),
      (i.register = function (t) {
        return tr || ((d = t || lo()), ao() && window.document && i.enable(), (tr = hr)), tr;
      }),
      (i.defaults = function (t) {
        if (t) for (var r in t) Hr[r] = t[r];
        return Hr;
      }),
      (i.disable = function (t, r) {
        (hr = 0),
          k.forEach(function (u) {
            return u[r ? 'kill' : 'disable'](t);
          }),
          pe(E, 'wheel', er),
          pe(H, 'scroll', er),
          clearInterval(Yr),
          pe(H, 'touchcancel', ct),
          pe(F, 'touchstart', ct),
          zr(pe, H, 'pointerdown,touchstart,mousedown', Fn),
          zr(pe, H, 'pointerup,touchend,mouseup', In),
          Qr.kill(),
          Ir(pe);
        for (var o = 0; o < M.length; o += 3) Xr(pe, M[o], M[o + 1]), Xr(pe, M[o], M[o + 2]);
      }),
      (i.enable = function () {
        if (
          ((E = window),
          (H = document),
          ($e = H.documentElement),
          (F = H.body),
          d &&
            ((Mr = d.utils.toArray),
            (wr = d.utils.clamp),
            (mn = d.core.context || ct),
            (on = d.core.suppressOverwrites || ct),
            (Cn = E.history.scrollRestoration || 'auto'),
            (xn = E.pageYOffset || 0),
            d.core.globals('ScrollTrigger', i),
            F))
        ) {
          (hr = 1),
            (ir = document.createElement('div')),
            (ir.style.height = '100vh'),
            (ir.style.position = 'absolute'),
            vo(),
            To(),
            J.register(d),
            (i.isTouch = J.isTouch),
            (Dt = J.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (_n = J.isTouch === 1),
            de(E, 'wheel', er),
            (wn = [E, H, $e, F]),
            d.matchMedia
              ? ((i.matchMedia = function (y) {
                  var L = d.matchMedia(),
                    P;
                  for (P in y) L.add(P, y[P]);
                  return L;
                }),
                d.addEventListener('matchMediaInit', function () {
                  return Pn();
                }),
                d.addEventListener('matchMediaRevert', function () {
                  return _o();
                }),
                d.addEventListener('matchMedia', function () {
                  Wt(0, 1), Kt('matchMedia');
                }),
                d.matchMedia().add('(orientation: portrait)', function () {
                  return un(), un;
                }))
              : console.warn('Requires GSAP 3.11.0 or later'),
            un(),
            de(H, 'scroll', er);
          var t = F.hasAttribute('style'),
            r = F.style,
            o = r.borderTopStyle,
            u = d.core.Animation.prototype,
            a,
            p;
          for (
            u.revert ||
              Object.defineProperty(u, 'revert', {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = 'solid',
              a = xt(F),
              le.m = Math.round(a.top + le.sc()) || 0,
              Fe.m = Math.round(a.left + Fe.sc()) || 0,
              o ? (r.borderTopStyle = o) : r.removeProperty('border-top-style'),
              t || (F.setAttribute('style', ''), F.removeAttribute('style')),
              Yr = setInterval(Hn, 250),
              d.delayedCall(0.5, function () {
                return (Fr = 0);
              }),
              de(H, 'touchcancel', ct),
              de(F, 'touchstart', ct),
              zr(de, H, 'pointerdown,touchstart,mousedown', Fn),
              zr(de, H, 'pointerup,touchend,mouseup', In),
              hn = d.utils.checkPrefix('transform'),
              Kr.push(hn),
              tr = Se(),
              Qr = d.delayedCall(0.2, Wt).pause(),
              rr = [
                H,
                'visibilitychange',
                function () {
                  var y = E.innerWidth,
                    L = E.innerHeight;
                  H.hidden ? ((An = y), (On = L)) : (An !== y || On !== L) && vr();
                },
                H,
                'DOMContentLoaded',
                Wt,
                E,
                'load',
                Wt,
                E,
                'resize',
                vr,
              ],
              Ir(de),
              k.forEach(function (y) {
                return y.enable(0, 1);
              }),
              p = 0;
            p < M.length;
            p += 3
          )
            Xr(pe, M[p], M[p + 1]), Xr(pe, M[p], M[p + 2]);
        }
      }),
      (i.config = function (t) {
        'limitCallbacks' in t && (sn = !!t.limitCallbacks);
        var r = t.syncInterval;
        (r && clearInterval(Yr)) || ((Yr = r) && setInterval(Hn, r)),
          'ignoreMobileResize' in t && (_n = i.isTouch === 1 && t.ignoreMobileResize),
          'autoRefreshEvents' in t &&
            (Ir(pe) || Ir(de, t.autoRefreshEvents || 'none'),
            (oo = (t.autoRefreshEvents + '').indexOf('resize') === -1));
      }),
      (i.scrollerProxy = function (t, r) {
        var o = He(t),
          u = M.indexOf(o),
          a = qt(o);
        ~u && M.splice(u, a ? 6 : 2), r && (a ? pt.unshift(E, r, F, r, $e, r) : pt.unshift(o, r));
      }),
      (i.clearMatchMedia = function (t) {
        k.forEach(function (r) {
          return r._ctx && r._ctx.query === t && r._ctx.kill(!0, !0);
        });
      }),
      (i.isInViewport = function (t, r, o) {
        var u = (Ue(t) ? He(t) : t).getBoundingClientRect(),
          a = u[o ? Gt : Ut] * r || 0;
        return o
          ? u.right - a > 0 && u.left + a < E.innerWidth
          : u.bottom - a > 0 && u.top + a < E.innerHeight;
      }),
      (i.positionInViewport = function (t, r, o) {
        Ue(t) && (t = He(t));
        var u = t.getBoundingClientRect(),
          a = u[o ? Gt : Ut],
          p =
            r == null
              ? a / 2
              : r in tn
                ? tn[r] * a
                : ~r.indexOf('%')
                  ? (parseFloat(r) * a) / 100
                  : parseFloat(r) || 0;
        return o ? (u.left + p) / E.innerWidth : (u.top + p) / E.innerHeight;
      }),
      (i.killAll = function (t) {
        if (
          (k.slice(0).forEach(function (o) {
            return o.vars.id !== 'ScrollSmoother' && o.kill();
          }),
          t !== !0)
        ) {
          var r = Vt.killAll || [];
          (Vt = {}),
            r.forEach(function (o) {
              return o();
            });
        }
      }),
      i
    );
  })();
R.version = '3.13.0';
R.saveStyles = function (i) {
  return i
    ? Mr(i).forEach(function (e) {
        if (e && e.style) {
          var n = Ge.indexOf(e);
          n >= 0 && Ge.splice(n, 5),
            Ge.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute('transform'),
              d.core.getCache(e),
              mn(),
            );
        }
      })
    : Ge;
};
R.revert = function (i, e) {
  return Pn(!i, e);
};
R.create = function (i, e) {
  return new R(i, e);
};
R.refresh = function (i) {
  return i ? vr(!0) : (tr || R.register()) && Wt(!0);
};
R.update = function (i) {
  return ++M.cache && wt(i === !0 ? 2 : 0);
};
R.clearScrollMemory = mo;
R.maxScroll = function (i, e) {
  return ft(i, e ? Fe : le);
};
R.getScrollFunc = function (i, e) {
  return Lt(He(i), e ? Fe : le);
};
R.getById = function (i) {
  return yn[i];
};
R.getAll = function () {
  return k.filter(function (i) {
    return i.vars.id !== 'ScrollSmoother';
  });
};
R.isScrolling = function () {
  return !!je;
};
R.snapDirectional = Mn;
R.addEventListener = function (i, e) {
  var n = Vt[i] || (Vt[i] = []);
  ~n.indexOf(e) || n.push(e);
};
R.removeEventListener = function (i, e) {
  var n = Vt[i],
    t = n && n.indexOf(e);
  t >= 0 && n.splice(t, 1);
};
R.batch = function (i, e) {
  var n = [],
    t = {},
    r = e.interval || 0.016,
    o = e.batchMax || 1e9,
    u = function (y, L) {
      var P = [],
        h = [],
        c = d
          .delayedCall(r, function () {
            L(P, h), (P = []), (h = []);
          })
          .pause();
      return function (m) {
        P.length || c.restart(!0), P.push(m.trigger), h.push(m), o <= P.length && c.progress(1);
      };
    },
    a;
  for (a in e)
    t[a] = a.substr(0, 2) === 'on' && Te(e[a]) && a !== 'onRefreshInit' ? u(a, e[a]) : e[a];
  return (
    Te(o) &&
      ((o = o()),
      de(R, 'refresh', function () {
        return (o = e.batchMax());
      })),
    Mr(i).forEach(function (p) {
      var y = {};
      for (a in t) y[a] = t[a];
      (y.trigger = p), n.push(R.create(y));
    }),
    n
  );
};
var $n = function (e, n, t, r) {
    return n > r ? e(r) : n < 0 && e(0), t > r ? (r - n) / (t - n) : t < 0 ? n / (n - t) : 1;
  },
  fn = function i(e, n) {
    n === !0
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction =
          n === !0 ? 'auto' : n ? 'pan-' + n + (J.isTouch ? ' pinch-zoom' : '') : 'none'),
      e === $e && i(F, n);
  },
  Gr = { auto: 1, scroll: 1 },
  Io = function (e) {
    var n = e.event,
      t = e.target,
      r = e.axis,
      o = (n.changedTouches ? n.changedTouches[0] : n).target,
      u = o._gsap || d.core.getCache(o),
      a = Se(),
      p;
    if (!u._isScrollT || a - u._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== F &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(Gr[(p = Qe(o)).overflowY] || Gr[p.overflowX]));

      )
        o = o.parentNode;
      (u._isScroll = o && o !== t && !qt(o) && (Gr[(p = Qe(o)).overflowY] || Gr[p.overflowX])),
        (u._isScrollT = a);
    }
    (u._isScroll || r === 'x') && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  xo = function (e, n, t, r) {
    return J.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (r = r && Io),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return t && de(H, J.eventTypes[0], Vn, !1, !0);
      },
      onDisable: function () {
        return pe(H, J.eventTypes[0], Vn, !0);
      },
    });
  },
  zo = /(input|label|select|textarea)/i,
  qn,
  Vn = function (e) {
    var n = zo.test(e.target.tagName);
    (n || qn) && ((e._gsapAllow = !0), (qn = n));
  },
  Xo = function (e) {
    Nt(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer');
    var n = e,
      t = n.normalizeScrollX,
      r = n.momentum,
      o = n.allowNestedScroll,
      u = n.onRelease,
      a,
      p,
      y = He(e.target) || $e,
      L = d.core.globals().ScrollSmoother,
      P = L && L.get(),
      h =
        Dt &&
        ((e.content && He(e.content)) || (P && e.content !== !1 && !P.smooth() && P.content())),
      c = Lt(y, le),
      m = Lt(y, Fe),
      U = 1,
      X =
        (J.isTouch && E.visualViewport
          ? E.visualViewport.scale * E.visualViewport.width
          : E.outerWidth) / E.innerWidth,
      ne = 0,
      W = Te(r)
        ? function () {
            return r(a);
          }
        : function () {
            return r || 2.8;
          },
      ge,
      T,
      Ve = xo(y, e.type, !0, o),
      B = function () {
        return (T = !1);
      },
      b = ct,
      ke = ct,
      Ie = function () {
        (p = ft(y, le)), (ke = wr(Dt ? 1 : 0, p)), t && (b = wr(0, ft(y, Fe))), (ge = $t);
      },
      g = function () {
        (h._gsap.y = _r(parseFloat(h._gsap.y) + c.offset) + 'px'),
          (h.style.transform =
            'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(h._gsap.y) + ', 0, 1)'),
          (c.offset = c.cacheID = 0);
      },
      ue = function () {
        if (T) {
          requestAnimationFrame(B);
          var Q = _r(a.deltaY / 2),
            j = ke(c.v - Q);
          if (h && j !== c.v + c.offset) {
            c.offset = j - c.v;
            var s = _r((parseFloat(h && h._gsap.y) || 0) - c.offset);
            (h.style.transform =
              'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + s + ', 0, 1)'),
              (h._gsap.y = s + 'px'),
              (c.cacheID = M.cache),
              wt();
          }
          return !0;
        }
        c.offset && g(), (T = !0);
      },
      x,
      dt,
      oe,
      Ee,
      Me = function () {
        Ie(),
          x.isActive() &&
            x.vars.scrollY > p &&
            (c() > p ? x.progress(1) && c(p) : x.resetTo('scrollY', p));
      };
    return (
      h && d.set(h, { y: '+=0' }),
      (e.ignoreCheck = function (I) {
        return (
          (Dt && I.type === 'touchmove' && ue()) ||
          (U > 1.05 && I.type !== 'touchstart') ||
          a.isGesturing ||
          (I.touches && I.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        T = !1;
        var I = U;
        (U = _r(((E.visualViewport && E.visualViewport.scale) || 1) / X)),
          x.pause(),
          I !== U && fn(y, U > 1.01 ? !0 : t ? !1 : 'x'),
          (dt = m()),
          (oe = c()),
          Ie(),
          (ge = $t);
      }),
      (e.onRelease = e.onGestureStart =
        function (I, Q) {
          if ((c.offset && g(), !Q)) Ee.restart(!0);
          else {
            M.cache++;
            var j = W(),
              s,
              ie;
            t &&
              ((s = m()),
              (ie = s + (j * 0.05 * -I.velocityX) / 0.227),
              (j *= $n(m, s, ie, ft(y, Fe))),
              (x.vars.scrollX = b(ie))),
              (s = c()),
              (ie = s + (j * 0.05 * -I.velocityY) / 0.227),
              (j *= $n(c, s, ie, ft(y, le))),
              (x.vars.scrollY = ke(ie)),
              x.invalidate().duration(j).play(0.01),
              ((Dt && x.vars.scrollY >= p) || s >= p - 1) &&
                d.to({}, { onUpdate: Me, duration: j });
          }
          u && u(I);
        }),
      (e.onWheel = function () {
        x._ts && x.pause(), Se() - ne > 1e3 && ((ge = 0), (ne = Se()));
      }),
      (e.onChange = function (I, Q, j, s, ie) {
        if (
          ($t !== ge && Ie(),
          Q && t && m(b(s[2] === Q ? dt + (I.startX - I.x) : m() + Q - s[1])),
          j)
        ) {
          c.offset && g();
          var Yt = ie[2] === j,
            Ct = Yt ? oe + I.startY - I.y : c() + j - ie[1],
            Ke = ke(Ct);
          Yt && Ct !== Ke && (oe += Ke - Ct), c(Ke);
        }
        (j || Q) && wt();
      }),
      (e.onEnable = function () {
        fn(y, t ? !1 : 'x'),
          R.addEventListener('refresh', Me),
          de(E, 'resize', Me),
          c.smooth && ((c.target.style.scrollBehavior = 'auto'), (c.smooth = m.smooth = !1)),
          Ve.enable();
      }),
      (e.onDisable = function () {
        fn(y, !0), pe(E, 'resize', Me), R.removeEventListener('refresh', Me), Ve.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (a = new J(e)),
      (a.iOS = Dt),
      Dt && !c() && c(1),
      Dt && d.ticker.add(ct),
      (Ee = a._dc),
      (x = d.to(a, {
        ease: 'power4',
        paused: !0,
        inherit: !1,
        scrollX: t ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: {
          scrollY: yo(c, c(), function () {
            return x.pause();
          }),
        },
        onUpdate: wt,
        onComplete: Ee.vars.onComplete,
      })),
      a
    );
  };
R.sort = function (i) {
  if (Te(i)) return k.sort(i);
  var e = E.pageYOffset || 0;
  return (
    R.getAll().forEach(function (n) {
      return (n._sortY = n.trigger
        ? e + n.trigger.getBoundingClientRect().top
        : n.start + E.innerHeight);
    }),
    k.sort(
      i ||
        function (n, t) {
          return (
            (n.vars.refreshPriority || 0) * -1e6 +
            (n.vars.containerAnimation ? 1e6 : n._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
R.observe = function (i) {
  return new J(i);
};
R.normalizeScroll = function (i) {
  if (typeof i > 'u') return Oe;
  if (i === !0 && Oe) return Oe.enable();
  if (i === !1) {
    Oe && Oe.kill(), (Oe = i);
    return;
  }
  var e = i instanceof J ? i : Xo(i);
  return Oe && Oe.target === e.target && Oe.kill(), qt(e.target) && (Oe = e), e;
};
R.core = {
  _getVelocityProp: gn,
  _inputObserver: xo,
  _scrollers: M,
  _proxies: pt,
  bridge: {
    ss: function () {
      je || Kt('scrollStart'), (je = Se());
    },
    ref: function () {
      return Ce;
    },
  },
};
lo() && d.registerPlugin(R);
ut.registerPlugin(R);
function Ho() {
  ut.to('header', {
    scrollTrigger: {
      trigger: 'body',
      start: 'top -50',
      toggleClass: { className: 'scrolled', targets: 'header' },
    },
  }),
    document.querySelectorAll('.reveal-effect').forEach((t) => {
      ut.fromTo(
        t,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 85%', toggleActions: 'play none none none' },
        },
      );
    });
  const e = {
    subtitle: '.animate-subtitle',
    title: '.animate-title',
    description: '.animate-description',
    buttons: '.animate-buttons',
  };
  ut.from(e.subtitle, { opacity: 0, y: 20, duration: 0.8, delay: 0.2 }),
    ut.from(e.title, { opacity: 0, y: 30, duration: 0.8, delay: 0.4 }),
    ut.from(e.description, { opacity: 0, y: 30, duration: 0.8, delay: 0.6 }),
    ut.from(e.buttons, { opacity: 0, y: 30, duration: 0.8, delay: 0.8 }),
    ut.from('.animate-dots', { opacity: 0, scale: 0, duration: 0.5, stagger: 0.05, delay: 1 }),
    ut.to('.scroll-down', { y: 10, duration: 1.5, repeat: -1, yoyo: !0, ease: 'power1.inOut' }),
    document.querySelectorAll('.counter-value').forEach((t) => {
      const r = parseInt(t.textContent);
      ut.to(t, {
        innerHTML: r,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: { trigger: '.counter-section', start: 'top 80%' },
        onUpdate: function () {
          t.textContent = Math.round(this.targets()[0].innerHTML);
        },
      });
    });
}
function Bo() {
  document.querySelectorAll('a[href^="#"]').forEach((i) => {
    i.addEventListener('click', function (e) {
      e.preventDefault();
      const n = this.getAttribute('href');
      if (n === '#') return;
      const t = document.querySelector(n);
      t && window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' });
    });
  });
}
function Kn() {
  Ho(), Bo();
}
document.readyState === 'complete' || document.readyState === 'interactive'
  ? setTimeout(Kn, 100)
  : document.addEventListener('DOMContentLoaded', Kn);
