window.Q = function (t, i, e) {
    'use strict';
    function n(i, e) {
        e || (e = t);
        for (var n = i.split(Os), s = 0, r = n[Ps]; r > s; s++) {
            var h = n[s];
            e = e[h]
        }
        return e
    }
    function s(t) {
        return t instanceof MouseEvent || t instanceof Object && t[Is] !== e
    }
    function r(t, i) {
        function e(t, e) {
            for (var n = t[Ps], s = e.length, r = n + s, h = new Array(r), a = 0, o = 0, f = 0; r > f; )
            h[f++] = a === n ? e[o++] : o === s || i(t[a], e[o]) <= 0 ? t[a++] : e[o++];
            return h
        }
        function n(t) {
            var i = t[Ps],
            s = Math.ceil(i / 2);
            return 1 >= i ? t : e(n(t[Ss](0, s)), n(t[Ss](s)))
        }
        return n(t)
    }
    function h(t, i) {
        var e = !1;
        return qL.nj(t, function (t) {
            return i == t ? (e = !0, !1)  : void 0
        }),
        e
    }
    function a(t, i, e) {
        var n,
        s,
        r;
        0 == t._l6 ? (n = - 1, r = 0, s = i)  : 0 == t._l8 ? (n = 0, r = 1, s = e)  : (n = - 1 / t._l6, s = (t._l6 - n) * i + t._l7, r = 1);
        var h = new KL;
        return h._l6 = n,
        h._l7 = s,
        h._l8 = r,
        h._kv = i,
        h._kx = e,
        h._j3 = Math[As](n, r),
        h._l8os = Math[Ms](h._j3),
        h._sin = Math[ks](h._j3),
        h
    }
    function o(t, i, e, n, s) {
        var r,
        h;
        i > n ? r = - 1 : n > i && (r = 1),
        e > s ? h = - 1 : s > e && (h = 1);
        var a,
        o;
        if (!r)
        return o = 0 > h ? t.y : t.bottom,
        {
            x: i,
            y: o
        };
        if (!h)
        return a = 0 > r ? t.x : t.right,
        {
            x: a,
            y: e
        };
        var f = (e - s) / (i - n),
        _ = e - f * i,
        c = 0 > r ? i - t.x : i - t[Ls],
        u = 0 > h ? e - t.y : e - t[Cs];
        return Math[Rs](f) >= Math.abs(u / c) ? (o = 0 > h ? t.y : t.bottom, a = (o - _) / f)  : (a = 0 > r ? t.x : t[Ls], o = f * a + _),
        {
            x: a,
            y: o
        }
    }
    function f(t, i, e, n, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= e || 0 >= n ? !1 : (h += s, a += r, e += t, n += i, (s > h || h > t) && (r > a || a > i) && (t > e || e > s) && (i > n || n > r))
    }
    function _(t, i, e, n, s, r) {
        return s >= t && t + e >= s && r >= i && i + n >= r
    }
    function c(t, i, e, n, s, r, h, a) {
        return s >= t && r >= i && t + e >= s + h && i + n >= r + a
    }
    function u(t, i, e) {
        t[Ns].add(i, e),
        t[Ds](i, e)
    }
    function d(t, i) {
        t._dq && (t._dq.remove(i), t.onChildRemove(i))
    }
    function l() {
        if (!i[Bs])
        return !1;
        for (var n = i.head, s = 'Webkit Moz O ms Khtml'[js]($s), r = 0; r < s.length; r++)
        if (n[Gs][s[r] + Fs] !== e) {
            SC._hb = qs + s[r].toLowerCase() + qs;
            break
        }
        var h = i[zs](Gs);
        t[Ys] || h[Hs](i.createTextNode('')),
        h[Us] && (SC._3z = !0),
        h[Ws] = Vs,
        h.id = Xs,
        n.appendChild(h),
        SC._l7w = h[Ks];
        var a,
        o;
        for (var f in AC) {
            var _ = AC[f];
            a = f,
            o = '';
            for (var c in _)
            o += SC._kp(c) + Zs + _[c] + Js;
            SC._g7(a, o)
        }
    }
    function v(t, i) {
        return this[Qs + i] = qL.lt(t, i, function (t) {
            return p[tr](this, t, i)
        }, !1, this)
    }
    function b(t) {
        var i = this;
        return t[ir] = function () {
            return i._in[er](t)
        },
        t[nr] = function () {
            return i._in[sr](t)
        },
        t
    }
    function g(t) {
        this.__l8ancelClick || (this.__l8lickEvent = t, this.__l8lickTime ? this.__l8lickTime++ : (this.__l8lickTime = 1, setTimeout(qL.m2(this, function () {
            if (this.__l8lickEvent) {
                var t = this.__l8lickTime;
                this.__l8lickTime = 0,
                1 == t ? this._gm(this.__l8lickEvent, rr)  : t > 1 && this._gm(this.__l8lickEvent, hr),
                this.__l8lickEvent = null
            }
        }), zL[ar])))
    }
    function y(t) {
        if (t[Is]) {
            for (var i = t[Is], e = [
            ], n = 0, s = i.length; s > n; n++) {
                var r = i[n];
                e[or]({
                    pageX: r[fr],
                    pageY: r[_r],
                    clientX: r.clientX,
                    clientY: r[cr]
                })
            }
            return {
                timeStamp: t.timeStamp,
                touches: e,
                scale: t[ur]
            }
        }
        return {
            timeStamp: t.timeStamp,
            x: t[dr],
            y: t[cr]
        }
    }
    function p(t, i) {
        switch (t = b[tr](this, t), i) {
        case 'touchstart':
            if (t[Is].length >= 2)
            return this._8x = y(t),
            this._l75[lr](),
            this._1n(),
            void 0;
        case 'mousedown':
            if (qL.mp(t), this._gm(t, vr), this._l79 = t, this._8x = y(t), t.button || (this.__onLongPressFunction ? this.__longPressTimer && this._1n()  : this.__onLongPressFunction = qL.m2(this, function () {
                this.__longPressTimer = null,
                this._l79 && (this.__l8ancelClick = !0, this._gm(this._l79, br))
            }), this.__longPressTimer = setTimeout(this.__onLongPressFunction, zL.LONG_PRESS_INTERVAL), this.__l8ancelClick = !1), NL)
            return ;
            return LC._l8urrentInteractionSupport = this,
            void 0;
        case 'touchend':
            if (!this._l79)
            return ;
            if (t.touches[Ps])
            return this._8x = y(t),
            void 0;
            t[gr] - this._l79.timeStamp < 200 && g[tr](this, this._l79);
        case 'touchcancel':
            if (!this._l79)
            return ;
            this._moving && (delete this._moving, this._go(t));
        case 'mouseup':
            return this._l8y(t),
            void 0;
        case 'click':
            return g[tr](this, t),
            void 0;
        case 'mousewheel':
        case 'DOMMouseScroll':
            return t.delta = t.wheelDelta || - t.detail,
            this._gm(t, yr);
        case 'touchmove':
            var e = t.touches.length;
            return this._moving || (this._moving = !0, 1 == e && this._l8z()),
            this._hy(t),
            void 0
        }
        return this._gm(t, pr + i)
    }
    function x(t, i) {
        var e = Qs + i;
        qL.lo(t, i, this[e]),
        qL.m4(this, e)
    }
    function E(i) {
        qL.nj(MC, function (t) {
            v.call(this, i, t)
        }, this),
        NL || LC._91 || (LC._91 = !0, qL.lt(t, xr, function (t) {
            if (LC._l8urrentInteractionSupport) {
                qL.mp(t);
                var i = LC._l8urrentInteractionSupport;
                if (!LC._dragging) {
                    if (i._l79) {
                        var e = i._l79[Er] - t[Er],
                        n = i._l79[mr] - t[mr];
                        if (4 > e * e + n * n)
                        return
                    }
                    LC._dragging = !0,
                    i._l8z()
                }
                i._hy(t)
            }
        }, !0), qL.lt(t, wr, function (t) {
            var i = LC._l8urrentInteractionSupport;
            delete LC._l8urrentInteractionSupport,
            LC._dragging && (delete LC._dragging, qL.ln(t), t = b[tr](i, t), i._go(t), i._l8y(t))
        }, !0))
    }
    function m(t) {
        qL.nj(MC, function (i) {
            x[tr](this, t, i)
        }, this),
        NL || (LC._l8urrentInteractionSupport == this && (delete LC._dragging, delete LC._l8urrentInteractionSupport), this._1n(), delete this._l79, delete this._8x)
    }
    function w(t, i, e) {
        this._jn = t,
        this._l75 = new O,
        E.call(this, t),
        i && (this._listener = i),
        this._ji = e
    }
    function T(t) {
        return RL && t[Tr] || !RL && t[Or]
    }
    function O() {
        this[Pr] = [
        ]
    }
    function P(t, i, e, n, s) {
        S(t, function (n) {
            if (i) {
                var s = n[Ir];
                if (!s)
                return (e || HC) (Sr + t + Ar),
                void 0;
                i(s)
            }
        }, e, n, s)
    }
    function I(t, i, e, n, s) {
        S(t, function (n) {
            if (i) {
                var s = n[Mr];
                if (!s)
                return (e || HC) (Sr + t + Ar),
                void 0;
                try {
                    i(JSON.parse(s))
                } catch (r) {
                    (e || HC) (r)
                }
            }
        }, e, n, s)
    }
    function S(t, i, e, n, s) {
        try {
            var r = new XMLHttpRequest,
            h = encodeURI(t);
            if (s !== !1) {
                var a;
                a = h[kr](Lr) > 0 ? '&' : Lr,
                h += a + Cr + Date[Rr]()
            }
            r.open(Nr, h),
            r[Dr] = function () {
                return 4 == r[Br] ? r[jr] && 200 != r[jr] ? ((e || HC) (Sr + t + $r), void 0)  : (i && i(r), void 0)  : void 0
            },
            r.send(n)
        } catch (o) {
            (e || HC) (Sr + t + $r, o)
        }
    }
    function f(t, i, e, n, s, r, h, a) {
        return 0 >= h || 0 >= a || 0 >= e || 0 >= n ? !1 : (h += s, a += r, e += t, n += i, (s > h || h > t) && (r > a || a > i) && (t > e || e > s) && (i > n || n > r))
    }
    function c(t, i, e, n, s, r, h, a) {
        return s >= t && r >= i && t + e >= s + h && i + n >= r + a
    }
    function A(t, i, e) {
        return t instanceof Object && t.x ? k(t, i, 0, 0)  : M(t, i, e, 0, 0)
    }
    function M(t, i, e, n, s) {
        var r = Math.sin(e),
        h = Math[Ms](e),
        a = t - n,
        o = i - s;
        return t = a * h - o * r + n,
        i = a * r + o * h + s,
        new VL(t, i, e)
    }
    function k(t, i, e, n) {
        e = e || 0,
        n = n || 0;
        var s = Math[ks](i),
        r = Math[Ms](i),
        h = t.x - e,
        a = t.y - n;
        return t.x = h * r - a * s + e,
        t.y = h * s + a * r + n,
        t
    }
    function L(t, i, e) {
        return C(t, i, e, 0, 0)
    }
    function C(t, i, e, n, s) {
        var r = M(t.x, t.y, i, n, s),
        h = A(t.x + t[Gr], t.y, i, n, s),
        a = A(t.x + t[Gr], t.y + t[Fr], i, n, s),
        o = A(t.x, t.y + t[Fr], i, n, s);
        return e ? e[lr]()  : e = new JL,
        e.addPoint(r),
        e[qr](h),
        e[qr](a),
        e[qr](o),
        e
    }
    function R(t, i) {
        var n = this._g;
        if (this._ib === e) {
            var s = n.webkitBackingStorePixelRatio || n[zr] || n[Yr] || n[Hr] || n[Ur] || 1,
            r = VC / s;
            this._ib = r
        }
        var r = this._ib;
        return 1 == r ? (this.width = t, this.height = i, this.style.width = t + Wr, this.style[Fr] = i + Wr, void 0)  : (this[Gr] = t * r, this.height = i * r, this[Gs].width = t + Wr, this[Gs][Fr] = i + Wr, void 0)
    }
    function N() {
        this[Vr](),
        this[Xr](1, 0, 0, 1, 0, 0),
        this[Kr](0, 0, this.canvas[Gr], this.canvas[Fr]),
        this.restore()
    }
    function D(t) {
        return Math[Zr](t + Math[Jr](t * t + 1))
    }
    function B(t, i) {
        i = i || t(1);
        var e = 1 / i,
        n = 0.5 * e,
        s = Math[Qr](1, i / 100);
        return function (r) {
            if (0 >= r)
            return 0;
            if (r >= i)
            return 1;
            for (var h = r * e, a = 0; a++ < 10; ) {
                var o = t(h),
                f = r - o;
                if (Math.abs(f) <= s)
                return h;
                h += f * n
            }
            return h
        }
    }
    function j(t, i, e) {
        var n = 1 - t,
        s = n * n * i[0] + 2 * n * t * i[2] + t * t * i[4],
        r = n * n * i[1] + 2 * n * t * i[3] + t * t * i[5];
        if (e) {
            var h = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
            a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
            return {
                x: s,
                y: r,
                rotate: Math[As](a, h)
            }
        }
        return {
            t: t,
            x: s,
            y: r
        }
    }
    function $(t, i, e) {
        var n = t - 2 * i + e;
        return 0 != n ? (t - i) / n : - 1
    }
    function G(t, i) {
        i.add(t[4], t[5]);
        var e = $(t[0], t[2], t[4]);
        if (e > 0 && 1 > e) {
            var n = j(e, t);
            i.add(n.x, n.y)
        }
        var s = $(t[1], t[3], t[5]);
        if (s > 0 && 1 > s) {
            var n = j(s, t);
            i[th](n.x, n.y)
        }
        return i
    }
    function F(t) {
        if (t[0] == t[2] && t[1] == t[3] || t[1] == t[3] && t[1] == t[5]) {
            var i = t[0],
            e = t[1],
            n = t[4],
            s = t[5],
            r = Math.sqrt(KC(i, e, n, s));
            return function (t) {
                return r * t
            }
        }
        var h = t[0],
        a = t[2],
        o = t[4],
        f = h - 2 * a + o,
        _ = 2 * a - 2 * h;
        h = t[1],
        a = t[3],
        o = t[5];
        var c = h - 2 * a + o,
        u = 2 * a - 2 * h,
        d = 4 * (f * f + c * c),
        l = 4 * (f * _ + c * u),
        v = _ * _ + u * u,
        r = 4 * d * v - l * l,
        b = 1 / r,
        g = 0.125 * Math[ih](d, - 1.5),
        y = 2 * Math[Jr](d),
        p = (r * D(l / Math[Jr](r)) + 2 * Math[Jr](d) * l * Math.sqrt(v)) * g;
        return function (t) {
            var i = l + 2 * t * d,
            e = i / Math.sqrt(r),
            n = i * i * b;
            return (r * Math.log(e + Math.sqrt(n + 1)) + y * i * Math[Jr](v + t * l + t * t * d)) * g - p
        }
    }
    function q(t, i, e) {
        var n = 1 - t,
        s = i[0],
        r = i[2],
        h = i[4],
        a = i[6],
        o = s * n * n * n + 3 * r * t * n * n + 3 * h * t * t * n + a * t * t * t;
        if (e)
        var f = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + ( - 3 * t * t + 6 * t - 3) * s;
        s = i[1],
        r = i[3],
        h = i[5],
        a = i[7];
        var _ = s * n * n * n + 3 * r * t * n * n + 3 * h * t * t * n + a * t * t * t;
        if (e) {
            var c = 3 * t * t * a + (6 * t - 9 * t * t) * h + (9 * t * t - 12 * t + 3) * r + ( - 3 * t * t + 6 * t - 3) * s;
            return {
                x: o,
                y: _,
                rotate: Math[As](c, f)
            }
        }
        return {
            x: o,
            y: _
        }
    }
    function z(t, i, e, n) {
        var s = - t + 3 * i - 3 * e + n;
        if (0 == s)
        return [(t - i) / (2 * e - 4 * i + 2 * t)];
        var r = 2 * t - 4 * i + 2 * e,
        h = i - t,
        a = r * r - 4 * s * h;
        return 0 > a ? void 0 : 0 == a ? [
            - r / (2 * s)
        ] : (a = Math[Jr](a), [
            (a - r) / (2 * s),
            ( - a - r) / (2 * s)
        ])
    }
    function Y(t, i) {
        i.add(t[6], t[7]);
        var e = z(t[0], t[2], t[4], t[6]);
        if (e)
        for (var n = 0; n < e[Ps]; n++) {
            var s = e[n];
            if (!(0 >= s || s >= 1)) {
                var r = q(s, t);
                i[th](r.x, r.y)
            }
        }
        if (e = z(t[1], t[3], t[5], t[7]))
        for (var n = 0; n < e.length; n++) {
            var s = e[n];
            if (!(0 >= s || s >= 1)) {
                var r = q(s, t);
                i.add(r.x, r.y)
            }
        }
    }
    function H(t) {
        var i = {
            x: t[0],
            y: t[1]
        },
        e = {
            x: t[2],
            y: t[3]
        },
        n = {
            x: t[4],
            y: t[5]
        },
        s = {
            x: t[6],
            y: t[7]
        },
        r = i.x - 0,
        h = i.y - 0,
        a = e.x - 0,
        o = e.y - 0,
        f = n.x - 0,
        _ = n.y - 0,
        c = s.x - 0,
        u = s.y - 0,
        d = 3 * ( - r + 3 * a - 3 * f + c),
        l = 6 * (r - 2 * a + f),
        v = 3 * ( - r + a),
        b = 3 * ( - h + 3 * o - 3 * _ + u),
        g = 6 * (h - 2 * o + _),
        y = 3 * ( - h + o),
        p = function (t) {
            var i = d * t * t + l * t + v,
            e = b * t * t + g * t + y;
            return Math[Jr](i * i + e * e)
        },
        x = (p(0) + 4 * p(0.5) + p(1)) / 6;
        return x
    }
    function U(t, i) {
        function e(t, i, e, n) {
            var s = - t + 3 * i - 3 * e + n,
            r = 2 * t - 4 * i + 2 * e,
            h = i - t;
            return function (t) {
                return 3 * (s * t * t + r * t + h)
            }
        }
        function n(t, i) {
            var e = s(t),
            n = r(t);
            return Math[Jr](e * e + n * n) * i
        }
        var s = e(t[0], t[2], t[4], t[6]),
        r = e(t[1], t[3], t[5], t[7]);
        i = i || 100;
        var h = 1 / i;
        return function (t) {
            if (!t)
            return 0;
            for (var i, e = 0, s = 0; ; ) {
                if (i = e + h, i >= t)
                return s += n(e, i - e);
                s += n(e, h),
                e = i
            }
        }
    }
    function W(t, i, e) {
        return KC(i, e, t.cx, t.cy) <= t._squareR + ZC
    }
    function V(t, i, e, n) {
        return e = e || X(t, i),
        new K((t.x + i.x) / 2, (t.y + i.y) / 2, e / 2, t, i, null, n)
    }
    function X(t, i) {
        return XL(t.x, t.y, i.x, i.y)
    }
    function K(t, i, e, n, s, r, h) {
        this.cx = t,
        this.cy = i,
        this.r = e,
        this._squareR = e * e,
        this.p1 = n,
        this.p2 = s,
        this.p3 = r,
        this._otherPoint = h
    }
    function Z(t, i, e, n) {
        this.cx = t,
        this.cy = i,
        this.width = e,
        this.height = n
    }
    function J(t) {
        var i = t[0],
        e = t[1],
        n = t[2],
        s = K._hwCircle(i, e, n);
        return ti(t, i, e, n, s)
    }
    function Q(t, i) {
        i = i || ii(t);
        for (var e, n = i.width / i[Fr], s = [
        ], r = t.length, h = 0; r > h; h++)
        e = t[h],
        s[or]({
            x: e.x,
            y: e.y * n
        });
        var a = J(s);
        return a ? new Z(a.cx, a.cy / n, 2 * a.r, 2 * a.r / n)  : void 0
    }
    function ti(t, i, e, n, s) {
        for (var r, h, a = t.length, o = s._squareR, f = 0; a > f; f++)
        if (r = t[f], r != i && r != e && r != n) {
            var _ = KC(s.cx, s.cy, r.x, r.y);
            _ - ZC > o && (o = _, h = r)
        }
        if (!h)
        return s;
        var c,
        u = K._hwCircle(h, i, e),
        d = K._hwCircle(h, i, n),
        l = K._hwCircle(h, n, e);
        return W(u, n.x, n.y) && (c = u),
        W(d, e.x, e.y) && (!c || c.r > d.r) && (c = d),
        W(l, i.x, i.y) && (!c || c.r > l.r) && (c = l),
        i = c.p1,
        e = c.p2,
        n = c.p3 || c._otherPoint,
        ti(t, i, e, n, c)
    }
    function ii(t) {
        for (var i, e = t[Ps], n = new JL, s = 0; e > s; s++)
        i = t[s],
        n.add(i.x, i.y);
        return n
    }
    function ei(t, i, e, n, s) {
        this._5r && this[eh]();
        var r = s ? this.getBounds(s)  : this[nh],
        h = e / r[Gr],
        a = t - h * r.x,
        o = n / r[Fr],
        f = i - o * r.y,
        _ = this._e8,
        c = [
        ];
        return qL.nj(_, function (t) {
            var i = t.clone(),
            e = i[Pr];
            if (e && e[Ps]) {
                for (var n = e.length, s = [
                ], r = 0; n > r; r++) {
                    var _ = e[r];
                    r++;
                    var u = e[r];
                    _ = h * _ + a,
                    u = o * u + f,
                    s[or](_),
                    s[or](u)
                }
                i[Pr] = s
            }
            c.push(i)
        }, this),
        new bR(c)
    }
    function ni(t, i, e, n, s, r) {
        if (s = s || 0, e = e || 0, !s && !r)
        return !1;
        if (!n) {
            var h = this.getBounds(s);
            if (!h.intersectsPoint(t, i, e))
            return !1
        }
        var a = XC.g,
        o = a.canvas,
        f = Math[sh](2 * e) || 1;
        o[Gr] != f || o[Fr] != f ? (o[Gr] = f, o.height = f)  : (a[Xr](1, 0, 0, 1, 0, 0), a[Kr](0, 0, f, f));
        var _ = - t + e,
        c = - i + e;
        if (a[Xr](1, 0, 0, 1, _, c), !a[rh]) {
            this._jp(a),
            s && a[hh](),
            r && a.fill();
            for (var u = a.getImageData(0, 0, f, f) [ah], d = u.length / 4; d > 0; ) {
                if (u[4 * d - 1] > vR)
                return !0;
                --d
            }
            return !1
        }
        return a[oh] = (s || 0) + 2 * e,
        this._jp(a),
        s && a[rh](e, e) ? !0 : r ? a[fh](e, e)  : !1
    }
    function si(t, i, e) {
        if (!this._h0)
        return null;
        var n = this._e8;
        if (n.length < 2)
        return null;
        e === !1 && (t += this._h0);
        var s = n[0];
        if (0 >= t)
        return Pn(s.points[0], s[Pr][1], n[1].points[0], n[1][Pr][1], t, i);
        if (t >= this._h0) {
            s = n[n[Ps] - 1];
            var r,
            h,
            a = s[Pr],
            o = a[Ps],
            f = a[o - 2],
            _ = a[o - 1];
            if (o >= 4)
            r = a[o - 4],
            h = a[o - 3];
             else {
                s = n[n.length - 2];
                var c = s.lastPoint;
                r = c.x,
                h = c.y
            }
            return Pn(f, _, f + f - r, _ + _ - h, t - this._h0, i)
        }
        for (var u, d = 0, l = 1, o = n[Ps]; o > l; l++)
        if (u = n[l], u._h0) {
            if (!(d + u._h0 < t)) {
                var v,
                c = s[_h];
                if (u[Ws] == uR) {
                    var b = u.points;
                    v = ri(t - d, u, c.x, c.y, b[0], b[1], b[2], b[3], u._r)
                } else {
                    if (!u._lf)
                    return Pn(c.x, c.y, u.points[0], u[Pr][1], t - d, i);
                    var g = B(u._lf, u._h0) (t - d),
                    b = u.points;
                    v = u[Ws] == cR && 6 == b[Ps] ? q(g, [
                        c.x,
                        c.y
                    ].concat(b), !0)  : j(g, [
                        c.x,
                        c.y
                    ][ch](b), !0)
                }
                return i && (v.x -= i * Math.sin(v[uh] || 0), v.y += i * Math[Ms](v[uh] || 0)),
                v
            }
            d += u._h0,
            s = u
        } else
        s = u
    }
    function ri(t, i, e, n, s, r, h, a) {
        if (t <= i._l1)
        return Pn(e, n, s, r, t);
        if (t >= i._h0)
        return t -= i._h0,
        Pn(i._p2x, i._p2y, h, a, t);
        if (t -= i._l1, i._o) {
            var o = t / i._r;
            i._CCW && (o = - o);
            var f = M(i._p1x, i._p1y, o, i._o.x, i._o.y);
            return f.rotate += i._l61 || 0,
            f.rotate += Math.PI,
            f
        }
        return Pn(i._p1x, i._p1y, i._p2x, i._p2y, t)
    }
    function a(t, i, e) {
        var n,
        s,
        r;
        0 == t._l6 ? (n = - 1, r = 0, s = i)  : 0 == t._l8 ? (n = 0, r = 1, s = e)  : (n = - 1 / t._l6, s = (t._l6 - n) * i + t._l7, r = 1);
        var h = new KL;
        return h._l6 = n,
        h._l7 = s,
        h._l8 = r,
        h._kv = i,
        h._kx = e,
        h
    }
    function hi(t) {
        return t %= 2 * Math.PI,
        0 > t && (t += 2 * Math.PI),
        t
    }
    function ai(t, i, e, n, s, r, h, o) {
        var f = XL(i, e, n, s),
        _ = XL(n, s, r, h);
        if (!f || !_)
        return t._d = 0,
        t._r = 0,
        t._l1 = f,
        t._l2 = _,
        t._h0 = 0;
        var c = fi(n, s, i, e),
        u = fi(n, s, r, h);
        t._l61 = c,
        t._l62 = u;
        var d = c - u;
        d = hi(d),
        d > Math.PI && (d = 2 * Math.PI - d, t._CCW = !0);
        var l = Math.PI - d,
        v = Math[dh](d / 2),
        b = o / v,
        g = Math[Qr](f, _);
        b > g && (b = g, o = v * b);
        var y,
        p = n + Math[Ms](c) * b,
        x = s + Math.sin(c) * b,
        E = n + Math.cos(u) * b,
        m = s + Math.sin(u) * b,
        w = new KL(i, e, n, s),
        T = new KL(n, s, r, h),
        O = a(w, p, x),
        P = a(T, E, m),
        I = O._33(P),
        S = Math[As](x - I.y, p - I.x),
        A = Math[As](m - I.y, E - I.x);
        y = t._CCW ? A : S;
        for (var M, k = 0; 4 > k; ) {
            var L = k * UL;
            if (hi(L - y) <= l) {
                var C,
                R;
                if (M ? M++ : M = 1, 0 == k ? (C = I.x + o, R = I.y)  : 1 == k ? (C = I.x, R = I.y + o)  : 2 == k ? (C = I.x - o, R = I.y)  : (C = I.x, R = I.y - o), t[lh + M] = {
                    x: C,
                    y: R
                }, 2 == M)
                break
            }
            k++
        }
        return t._p1x = p,
        t._p1y = x,
        t._p2x = E,
        t._p2y = m,
        t._o = I,
        t._d = b,
        t._r = o,
        t._l1 = f - b,
        t._l2 = _ - b,
        t._h0 = t._l1 + l * o
    }
    function oi(t, i, e, n, s, r, h) {
        var a = fi(e, n, t, i),
        o = fi(e, n, s, r),
        f = a - o;
        return h ? f : (0 > f && (f = - f), f > Math.PI && (f -= Math.PI), f)
    }
    function fi(t, i, e, n) {
        return Math[As](n - i, e - t)
    }
    function _i(t) {
        var i = t.width,
        e = t.height;
        try {
            var n = t._g[vh](0, 0, i, e),
            s = n.data;
            return ci(s, i, e)
        } catch (r) {
            UC[bh](r)
        }
    }
    function ci(t, i) {
        var e,
        n,
        s,
        r,
        h,
        a = t.length,
        o = 0,
        f = 0;
        for (h = 0; a > h; h += 4)
        if (t[h + 3] > 0) {
            e = 0 | (h + 4) / i / 4;
            break
        }
        for (h = a - 4; h >= 0; h -= 4)
        if (t[h + 3] > 0) {
            n = 0 | (h + 4) / i / 4;
            break
        }
        for (o = 0; i > o; o++) {
            for (f = e; n > f; f++)
            if (t[4 * f * i + 4 * o + 3] > 0) {
                s = o;
                break
            }
            if (s >= 0)
            break
        }
        for (o = i - 1; o >= 0; o--) {
            for (f = e; n > f; f++)
            if (t[4 * f * i + 4 * o + 3] > 0) {
                r = o;
                break
            }
            if (r >= 0)
            break
        }
        var _,
        c,
        u,
        d = [
        ],
        l = [
        ];
        for (o = s; r >= o; o++)
        for (u = [
        ], d[or](u), f = e; n >= f; f++)
        h = 4 * (f * i + o),
        _ = t[h + 3],
        _ ? (c = {
            a: _,
            r: t[h],
            g: t[h + 1],
            b: t[h + 2]
        }, u.push(c), l[or](c.r), l[or](c.g), l[or](c.b), l.push(c.a))  : (u.push(null), l[or](0), l.push(0), l[or](0), l[or](0));
        return d._width = r - s + 1,
        d._height = n - e + 1,
        d._h1 = new JL(s, e, d._width, d._height),
        d._pixelSize = d._width * d._height,
        d
    }
    function ui(t, i, e, n, s) {
        if (!s || 1 > s) {
            var r = t[e];
            return r ? r[n] : !1
        }
        var h = n - s,
        a = e - s;
        0 > h && (h = 0),
        0 > a && (a = 0);
        var o = e + s,
        f = n + s;
        for (o > i[Gr] && (o = i[Gr]), f > i[Fr] && (f = i[Fr]); o > a; ) {
            for (; f > h; ) {
                if (t[a][h])
                return !0;
                h++
            }
            a++
        }
        return !1
    }
    function di(t) {
        if (gh == t[0]) {
            if (t = t[yh](1), 3 == t.length)
            t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
             else if (6 != t[Ps])
            return ;
            return t = parseInt(t, 16),
            [
                255 & t >> 16,
                255 & t >> 8,
                255 & t
            ]
        }
        if (/^rgb/i.test(t)) {
            var i = t[kr](ph),
            e = t[kr](xh);
            if (0 > i || i > e)
            return ;
            if (t = t.substring(i + 1, e), t = t[js](Eh), t[Ps] < 3)
            return ;
            var n = parseInt(t[0]),
            s = parseInt(t[1]),
            r = parseInt(t[2]),
            h = 3 == t[Ps] ? 255 : parseInt(t[3]);
            return [n,
            s,
            r,
            h]
        }
    }
    function li(t, i, e) {
        return e || (e = zL[mh]),
        e == WC.BLEND_MODE_MULTIPLY ? t * i : e == WC[wh] ? Math.min(t, i)  : e == WC.BLEND_MODE_COLOR_BURN ? 1 - (1 - i) / t : e == WC[Th] ? t + i - 1 : e == WC[Oh] ? Math[Ph](t, i)  : e == WC[Ih] ? t + i - t * i : i
    }
    function vi(t, i, e) {
        var n = di(i),
        s = t._g[vh](0, 0, t.width, t.height),
        r = s[ah];
        if (e instanceof Function)
        r = e(t, r, n) || r;
         else {
            var h = n[0] / 255,
            a = n[1] / 255,
            o = n[2] / 255;
            if (e == WC[Sh])
            for (var f = 0, _ = r[Ps]; _ > f; f += 4) {
                var c = 77 * r[f] + 151 * r[f + 1] + 28 * r[f + 2] >> 8;
                r[f] = 0 | c * h,
                r[f + 1] = 0 | c * a,
                r[f + 2] = 0 | c * o
            } 
            else
            for (var f = 0, _ = r[Ps]; _ > f; f += 4)
            r[f] = 0 | 255 * li(h, r[f] / 255, e),
            r[f + 1] = 0 | 255 * li(a, r[f + 1] / 255, e),
            r[f + 2] = 0 | 255 * li(o, r[f + 2] / 255, e)
        }
        var t = XC._8n(t.width, t.height);
        return t._g[Ah](s, 0, 0),
        t
    }
    function bi(t) {
        var i = t[Gr] || zL.IMAGE_MAX_SIZE,
        e = t[Fr] || zL.IMAGE_MAX_SIZE,
        n = XC.g;
        n[Mh][Gr] = i,
        n[Mh].height = e,
        n[Vr](),
        n.beginPath(),
        t[kh](n),
        n[Lh]();
        var s = n.getImageData(0, 0, i, e),
        r = ci(s.data, i, e);
        if (r && r._width && r._height) {
            var h = r._h1;
            t._width = r._width,
            t._height = r._height,
            t._h1 = h,
            t._pixels = r,
            t._ek = gR;
            var a = XC._8n(h[Gr], h[Fr]);
            a._g[Ah](s, - h.x, - h.y);
            var o = new yR(a, t._h1);
            t._ht = {
                1: o,
                maxScale: 1
            },
            t._7b = o
        }
    }
    function gi(t, i, e, n) {
        return yi(t - e, i - e, 2 * e, 2 * e, n)
    }
    function yi(t, i, e, n, s) {
        e = Math.round(e) || 1,
        n = Math[sh](n) || 1;
        var r = XC.g,
        h = r.canvas;
        h[Gr] < e || h[Fr] < n ? (h.width = e, h[Fr] = n)  : (r.setTransform(1, 0, 0, 1, 0, 0), r[Kr](0, 0, e, n)),
        r.setTransform(1, 0, 0, 1, - t, - i),
        s.draw(r);
        for (var a = r[vh](0, 0, e, n) .data, o = a.length / 4; o-- > 0; )
        if (a[4 * o - 1] > vR)
        return !0;
        return !1
    }
    function pi(t, i, e, n, s, r) {
        t -= s.$x,
        i -= s.$y;
        var h = s._do[Ch](t, i, e, n);
        if (!h)
        return !1;
        t = h.x * r,
        i = h.y * r,
        e = h[Gr] * r,
        n = h[Fr] * r,
        e = Math.round(e) || 1,
        n = Math[sh](n) || 1;
        var a = XC.g,
        o = a[Mh];
        o[Gr] < e || o[Fr] < n ? (o[Gr] = e, o.height = n)  : (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, e, n)),
        a.setTransform(1, 0, 0, 1, - t - s.$x * r, - i - s.$y * r),
        a[ur](r, r),
        s._ha(a, 1);
        for (var f = a.getImageData(0, 0, e, n) [ah], _ = f.length / 4; _-- > 0; )
        if (f[4 * _ - 1] > vR)
        return !0;
        return !1
    }
    function xi(t) {
        return t[kh] instanceof Function ? pR : qL.n3(t) ? xR : void 0
    }
    function Ei(t) {
        if (this.data = t, this._l1pe = xi(t), !this._l1pe)
        throw new Error('Image type is not supported - \n' + t);
        if (this._l1pe == xR) {
            this._l7o = new bC,
            this._ipLoading = !0;
            var i = new Image;
            i[Rh] = this[ah],
            i.width ? this._9p({
                target: i
            })  : i[Nh] = qL.m2(this, this._9p)
        }
    }
    function mi(t, i, e, n, s, r, h, a, o) {
        if (_(t, i, e, n, a, o))
        return null;
        var f = new lR(fR, [
            t + e - s,
            i
        ]),
        c = new lR(_R, [
            t + e,
            i,
            t + e,
            i + r
        ]),
        u = new lR(fR, [
            t + e,
            i + n - r
        ]),
        d = new lR(_R, [
            t + e,
            i + n,
            t + e - s,
            i + n
        ]),
        l = new lR(fR, [
            t + s,
            i + n
        ]),
        v = new lR(_R, [
            t,
            i + n,
            t,
            i + n - r
        ]),
        b = new lR(fR, [
            t,
            i + r
        ]),
        g = new lR(_R, [
            t,
            i,
            t + s,
            i
        ]);
        new lR(dR);
        var y,
        p,
        x,
        E = [
            f,
            c,
            u,
            d,
            l,
            v,
            b,
            g
        ],
        m = new JL(t + s, i + r, e - s - s, n - r - r);
        t > a ? (y = iC, x = 5)  : a > t + e ? (y = nC, x = 1)  : (y = eC, x = 0),
        i > o ? (p = sC, y == iC && (x = 7))  : o > i + n ? (p = hC, y == nC ? x = 3 : y == eC && (x = 4))  : (p = rC, y == iC ? x = 6 : y == nC && (x = 2));
        var w = Si(x, t, i, e, n, s, r, h, a, o, m),
        T = w[0],
        O = w[1],
        P = new bR,
        I = P._e8;
        I[or](new lR(oR, [
            T.x,
            T.y
        ])),
        I[or](new lR(fR, [
            a,
            o
        ])),
        I.push(new lR(fR, [
            O.x,
            O.y
        ])),
        O._jk && (I[or](O._jk), O._jkNO++);
        for (var S = O._jkNO % 8, A = T._jkNO; I[or](E[S]), ++S, S %= 8, S != A; )
        ;
        return T._jk && I.push(T._jk),
        P[Dh](),
        P
    }
    function wi(t, i, n, s, r, h, a, o, f, _, c, u, d, l) {
        var v = new KL(u, d, n, s),
        b = new KL(i[0], i[1], i[4], i[5]),
        g = b._33(v, c),
        y = g[0],
        p = g[1];
        if (y._rest !== e) {
            y._jkNO = (t - 1) % 8,
            p._jkNO = (t + 1) % 8;
            var x = y._rest;
            7 == t ? (y.y = h + _ + Math[Qr](l[Fr], x), p.x = r + f + Math[Qr](l[Gr], x))  : 5 == t ? (y.x = r + f + Math[Qr](l.width, x), p.y = h + o - _ - Math.min(l[Fr], x))  : 3 == t ? (y.y = h + o - _ - Math.min(l[Fr], x), p.x = r + a - f - Math[Qr](l[Gr], x))  : 1 == t && (y.x = r + a - f - Math[Qr](l.width, x), p.y = h + _ + Math.min(l[Fr], x))
        } else {
            v._km(v._kv, v._kx, y.x, y.y),
            y = v._8(i),
            v._km(v._kv, v._kx, p.x, p.y),
            p = v._8(i);
            var E = Ai(i, [
                y,
                p
            ]),
            m = E[0],
            w = E[2];
            y._jkNO = t,
            p._jkNO = t,
            y._jk = new lR(_R, m.slice(2)),
            p._jk = new lR(_R, w.slice(2))
        }
        return [y,
        p]
    }
    function Ti(t, i, e, n, s, r, h, a, o, f) {
        var _,
        c;
        if (o - a >= i + r)
        _ = {
            y: e,
            x: o - a
        },
        _._jkNO = 0;
         else {
            _ = {
                y: e + h,
                x: Math[Ph](i, o - a)
            };
            var u = [
                i,
                e + h,
                i,
                e,
                i + r,
                e
            ],
            d = new KL(o, f, _.x, _.y);
            if (_ = d._8(u)) {
                qL.nh(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Ai(u, [
                    _
                ]);
                l = l[0],
                l && (_._jk = new lR(_R, l.slice(2))),
                _._jkNO = 7
            } else
            _ = {
                y: e,
                x: i + r
            },
            _._jkNO = 0
        }
        if (i + n - r >= o + a)
        c = {
            y: e,
            x: o + a
        },
        c._jkNO = 0;
         else {
            c = {
                y: e + h,
                x: Math[Qr](i + n, o + a)
            };
            var v = [
                i + n - r,
                e,
                i + n,
                e,
                i + n,
                e + h
            ],
            d = new KL(o, f, c.x, c.y);
            if (c = d._8(v)) {
                qL.nh(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ai(v, [
                    c
                ]);
                l && l[l.length - 1] && (c._jk = new lR(_R, l[l[Ps] - 1][Ss](2))),
                c._jkNO = 1
            } else
            c = {
                y: e,
                x: i + n - r
            },
            c._jkNO = 0
        }
        return [_,
        c]
    }
    function Oi(t, i, e, n, s, r, h, a, o, f) {
        var _,
        c;
        if (f - a >= e + h)
        _ = {
            x: i + n,
            y: f - a
        },
        _._jkNO = 2;
         else {
            _ = {
                x: i + n - r,
                y: Math[Ph](e, f - a)
            };
            var u = [
                i + n - r,
                e,
                i + n,
                e,
                i + n,
                e + h
            ],
            d = new KL(o, f, _.x, _.y);
            if (_ = d._8(u)) {
                qL.nh(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Ai(u, [
                    _
                ]);
                l = l[0],
                l && (_._jk = new lR(_R, l[Ss](2))),
                _._jkNO = 1
            } else
            _ = {
                x: i + n,
                y: e + h
            },
            _._jkNO = 2
        }
        if (e + s - h >= f + a)
        c = {
            x: i + n,
            y: f + a
        },
        c._jkNO = 2;
         else {
            c = {
                x: i + n - r,
                y: Math[Qr](e + s, f + a)
            };
            var v = [
                i + n,
                e + s - h,
                i + n,
                e + s,
                i + n - r,
                e + s
            ],
            d = new KL(o, f, c.x, c.y);
            if (c = d._8(v)) {
                qL.nh(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ai(v, [
                    c
                ]);
                l[1] && (c._jk = new lR(_R, l[1].slice(2))),
                c._jkNO = 3
            } else
            c = {
                x: i + n,
                y: e + s - h
            },
            c._jkNO = 2
        }
        return [_,
        c]
    }
    function Pi(t, i, e, n, s, r, h, a, o, f) {
        var _,
        c;
        if (o - a >= i + r)
        c = {
            y: e + s,
            x: o - a
        },
        c._jkNO = 4;
         else {
            c = {
                y: e + s - h,
                x: Math[Ph](i, o - a)
            };
            var u = [
                i + r,
                e + s,
                i,
                e + s,
                i,
                e + s - h
            ],
            d = new KL(o, f, c.x, c.y);
            if (c = d._8(u)) {
                qL.nh(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ai(u, [
                    c
                ]);
                l = l[l.length - 1],
                l && (c._jk = new lR(_R, l[Ss](2))),
                c._jkNO = 5
            } else
            c = {
                y: e + s,
                x: i + r
            },
            c._jkNO = 4
        }
        if (i + n - r >= o + a)
        _ = {
            y: e + s,
            x: o + a
        },
        _._jkNO = 4;
         else {
            _ = {
                y: e + s - h,
                x: Math[Qr](i + n, o + a)
            };
            var v = [
                i + n,
                e + s - h,
                i + n,
                e + s,
                i + n - r,
                e + s
            ],
            d = new KL(o, f, _.x, _.y);
            if (_ = d._8(v)) {
                qL.nh(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Ai(v, [
                    _
                ]);
                l[0] && (_._jk = new lR(_R, l[0].slice(2))),
                _._jkNO = 3
            } else
            _ = {
                y: e + s,
                x: i + n - r
            },
            _._jkNO = 4
        }
        return [_,
        c]
    }
    function Ii(t, i, e, n, s, r, h, a, o, f) {
        var _,
        c;
        if (f - a >= e + h)
        c = {
            x: i,
            y: f - a
        },
        c._jkNO = 6;
         else {
            c = {
                x: i + r,
                y: Math[Ph](e, f - a)
            };
            var u = [
                i,
                e + h,
                i,
                e,
                i + r,
                e
            ],
            d = new KL(o, f, c.x, c.y);
            if (c = d._8(u)) {
                qL.nh(c) && (c = c[0].t < c[1].t ? c[0] : c[1]);
                var l = Ai(u, [
                    c
                ]);
                l = l[l[Ps] - 1],
                l && (c._jk = new lR(_R, l[Ss](2)))
            } else
            c = {
                x: i,
                y: e + h
            };
            c._jkNO = 7
        }
        if (e + s - h >= f + a)
        _ = {
            x: i,
            y: f + a
        },
        _._jkNO = 6;
         else {
            _ = {
                x: i + r,
                y: Math[Qr](e + s, f + a)
            };
            var v = [
                i + r,
                e + s,
                i,
                e + s,
                i,
                e + s - h
            ],
            d = new KL(o, f, _.x, _.y);
            if (_ = d._8(v)) {
                qL.nh(_) && (_ = _[0].t > _[1].t ? _[0] : _[1]);
                var l = Ai(v, [
                    _
                ]);
                l[0] && (_._jk = new lR(_R, l[0][Ss](2))),
                _._jkNO = 5
            } else
            _ = {
                x: i,
                y: e + s - h
            },
            _._jkNO = 6
        }
        return [_,
        c]
    }
    function Si(t, i, e, n, s, r, h, a, o, f, _) {
        var c = a / 2;
        switch (t) {
        case 7:
            var u = [
                i,
                e + h,
                i,
                e,
                i + r,
                e
            ],
            d = i + r,
            l = e + h;
            return wi(t, u, d, l, i, e, n, s, r, h, a, o, f, _);
        case 5:
            return u = [
                i + r,
                e + s,
                i,
                e + s,
                i,
                e + s - h
            ],
            d = i + r,
            l = e + s - h,
            wi(t, u, d, l, i, e, n, s, r, h, a, o, f, _);
        case 3:
            return u = [
                i + n,
                e + s - h,
                i + n,
                e + s,
                i + n - r,
                e + s
            ],
            d = i + n - r,
            l = e + s - h,
            wi(t, u, d, l, i, e, n, s, r, h, a, o, f, _);
        case 1:
            return u = [
                i + n - r,
                e,
                i + n,
                e,
                i + n,
                e + h
            ],
            d = i + n - r,
            l = e + h,
            wi(t, u, d, l, i, e, n, s, r, h, a, o, f, _);
        case 0:
            return Ti(t, i, e, n, s, r, h, c, o, f, _);
        case 2:
            return Oi(t, i, e, n, s, r, h, c, o, f, _);
        case 4:
            return Pi(t, i, e, n, s, r, h, c, o, f, _);
        case 6:
            return Ii(t, i, e, n, s, r, h, c, o, f, _)
        }
    }
    function Ai(t, i) {
        for (var n, s, r, h, a, o, f = t[0], _ = t[1], c = t[2], u = t[3], d = t[4], l = t[5], v = [
        ], b = 0; b < i[Ps]; b++)
        a = i[b],
        o = a.t,
        0 != o && 1 != o ? (n = f + (c - f) * o, s = _ + (u - _) * o, r = c + (d - c) * o, h = u + (l - u) * o, v[or]([f,
        _,
        n,
        s,
        a.x,
        a.y]), f = a.x, _ = a.y, c = r, u = h)  : v.push(null);
        return r !== e && v[or]([a.x,
        a.y,
        r,
        h,
        d,
        l]),
        v
    }
    function Mi(t) {
        return this[Bh] && this._93 && (t.x -= this._93.x, t.y -= this._93.y),
        this[jh] && k(t, this.$rotate),
        t.x += this[$h] || 0,
        t.y += this[Gh] || 0,
        this[Fh] && this[qh] ? k(t, this[qh])  : t
    }
    function ki(t) {
        return this.$rotatable && this[qh] && k(t, - this.$_hostRotate),
        t.x -= this.$offsetX || 0,
        t.y -= this.$offsetY || 0,
        this.$rotate && k(t, - this.$rotate),
        this.$layoutByAnchorPoint && this._93 && (t.x += this._93.x, t.y += this._93.y),
        t
    }
    function Li() {
        var t = this[zh];
        this[zh] && (this[zh] = !1, this[Yh] = !0, this._77.setByRect(this._h1), this.$padding && this._77[Hh](this[Uh]), this.$border && this._77[Hh](this.$border));
        var i = this._$p();
        if (i)
        var e = this.showPointer && this[Wh];
        return this.$invalidateAnchorPoint && this[Bh] && (this[Yh] = !1, e && (t = !0), this._93 = qL.mj(this.$anchorPosition, this._77[Gr], this._77.height), this._93.x += this._77.x, this._93.y += this._77.y),
        i ? (t && (this._l7ackgroundGradientInvalidateFlag = !0, Ci.call(this, e)), this._l7ackgroundGradientInvalidateFlag && (this._l7ackgroundGradientInvalidateFlag = !1, this._l7ackgroundGradient = this.backgroundGradient && this._k5Shape && this._k5Shape.bounds ? this[Vh][Xh](this._k5Shape.bounds)  : null), t)  : (this.__kdPointer = !1, t)
    }
    function Ci(t) {
        var i = this._77.x + this[Kh] / 2,
        e = this._77.y + this.$border / 2,
        n = this._77.width - this[Kh],
        s = this._77[Fr] - this.$border,
        r = 0,
        h = 0;
        if (this[Zh] && (qL.n6(this.$borderRadius) ? r = h = this[Zh] : (r = this[Zh].x || 0, h = this[Zh].y || 0), r = Math.min(r, n / 2), h = Math[Qr](h, s / 2)), t && (this._pointerX = this._93.x - this[$h] + this[Jh], this._pointerY = this._93.y - this[Gh] + this[Qh], !this._77.intersectsPoint(this._pointerX, this._pointerY))) {
            var a = new wR(i, e, n, s, r, h, this.$pointerWidth, this._pointerX, this._pointerY);
            return this._k5Shape = a._jk,
            this._k5Shape[nh].set(i, e, n, s),
            this.__kdPointer = !0,
            void 0
        }
        this._k5Shape && this._k5Shape.clear(),
        this._k5Shape = SN[ta](i, e, n, s, r, h, this._k5Shape),
        this._k5Shape.bounds[ia](i, e, n, s)
    }
    function Ri(t, i, e, n) {
        return n && (t.width < 0 || t[Fr] < 0) ? (t.x = i, t.y = e, t[Gr] = t[Fr] = 0, void 0)  : (i < t.x ? (t.width += t.x - i, t.x = i)  : i > t.x + t[Gr] && (t[Gr] = i - t.x), e < t.y ? (t[Fr] += t.y - e, t.y = e)  : e > t.y + t[Fr] && (t[Fr] = e - t.y), void 0)
    }
    function Ni(t, i, n) {
        var s,
        r = t.position,
        h = t.layoutByPath === e ? this[ea] : t.layoutByPath;
        return this[na] instanceof bR && h ? (s = JC._l62(r, this[na], this[oh], i, n), s.x *= this._hk, s.y *= this._hj)  : (s = qL.mj(r, this._77.width, this._77[Fr]), s.x += this._77.x, s.y += this._77.y),
        Mi.call(this, s)
    }
    function Di(t, i) {
        if (i)
        if (i._77.isEmpty())
        t.$x = i.$x,
        t.$y = i.$y;
         else {
            var e = Ni.call(i, t);
            t.$x = e.x,
            t.$y = e.y,
            t._hostRotate = e.rotate
        } 
        else
        t.$x = 0,
        t.$y = 0;
        t[sa] && OR[tr](t)
    }
    function Bi(t) {
        if (t[ra] === e) {
            var i,
            n;
            if (t[ha])
            i = t.getLineDash,
            n = t[ha];
             else {
                var s;
                if (t[aa] !== e)
                s = aa;
                 else {
                    if (t.webkitLineDash === e)
                    return !1;
                    s = oa
                }
                n = function (t) {
                    this[s] = t
                },
                i = function () {
                    return this[s]
                }
            }
            qL.lx(t, ra, {
                get: function () {
                    return i[tr](this)
                },
                set: function (t) {
                    n[tr](this, t)
                }
            })
        }
        if (t.lineDashOffset === e) {
            var r;
            if (t[fa] !== e)
            r = fa;
             else {
                if (t[_a] === e)
                return ;
                r = _a
            }
            qL.lx(t, ca, {
                get: function () {
                    return this[r]
                },
                set: function (t) {
                    this[r] = t
                }
            })
        }
    }
    function ji(t, i, e, n, s) {
        var r,
        h,
        a,
        o,
        f,
        _,
        c,
        u,
        d = function (t) {
            return function (i) {
                t(i)
            }
        },
        l = function () {
            h = null,
            a = null,
            o = f,
            f = null,
            _ = null
        },
        v = function (t) {
            r = t,
            c || (c = XC._8n()),
            c._kmSize(r.width, r[Fr]),
            i._width = r[Gr],
            i._height = r[Fr]
        },
        b = function (t) {
            g(),
            l(),
            h = t.transparencyGiven ? t.transparencyIndex : null,
            a = 10 * t[ua],
            f = t.disposalMethod
        },
        g = function () {
            if (_) {
                var t = _[vh](0, 0, r.width, r[Fr]),
                e = {
                    data: t,
                    _pixels: ci(t[ah], r.width, r[Fr]),
                    delay: a
                };
                s[tr](i, e)
            }
        },
        y = function (t) {
            _ || (_ = c.getContext(da));
            var i = t[la] ? t.lct : r.gct,
            e = _[vh](t[va], t[ba], t[Gr], t.height);
            t.pixels[ga](function (t, n) {
                h !== t ? (e.data[4 * n + 0] = i[t][0], e[ah][4 * n + 1] = i[t][1], e[ah][4 * n + 2] = i[t][2], e.data[4 * n + 3] = 255)  : (2 === o || 3 === o) && (e.data[4 * n + 3] = 0)
            }),
            _[Kr](0, 0, r[Gr], r[Fr]),
            _.putImageData(e, t[va], t.topPos)
        },
        p = function () {
        },
        x = {
            hdr: d(v),
            gce: d(b),
            com: d(p),
            app: {
                NETSCAPE: d(p)
            },
            img: d(y, !0),
            eof: function () {
                g(),
                e[tr](i)
            }
        },
        E = new XMLHttpRequest;
        IL || E[ya]('text/plain; charset=x-user-defined'),
        E[Nh] = function () {
            u = new AR(E.responseText);
            try {
                kR(u, x)
            } catch (t) {
                n[tr](i, pa)
            }
        },
        E[xa] = function () {
            n.call(i, Ea)
        },
        E[ma](Nr, t, !0),
        E[wa]()
    }
    function $i(t) {
        this.data = t,
        this._l1pe = ER,
        this._h1 = new JL(0, 0, zL[Ta], zL[Oa]),
        this._l7o = new bC,
        this._l7o[Pa] = function (t) {
            if (!this[Ia] || !this[Ia].length)
            return !1;
            for (var i, e = 0, n = this.listeners[Ps]; n > e; e++) {
                var s = this[Ia][e];
                !s.scope._hf || s.scope._hf._g9ed ? (i || (i = [
                ]), i[or](s))  : s[Pa][tr](s.scope, t)
            }
            if (i) {
                if (i[Ps] == this[Ia][Ps])
                return this.listeners[Ps] = 0,
                !1;
                for (var e = 0, n = i[Ps]; n > e; e++) {
                    var s = i[e];
                    qL.nn(this[Ia], s)
                }
            }
        },
        ji(t, this, this._l7m, this._ga, this._l8g)
    }
    function Gi(t) {
        var i = [
            51,
            10,
            10,
            100,
            101,
            109,
            111,
            46,
            113,
            117,
            110,
            101,
            101,
            46,
            99,
            111,
            109,
            10,
            49,
            46,
            54,
            10,
            49,
            52,
            49,
            48,
            51,
            53,
            49,
            52,
            52,
            54,
            56,
            52,
            53,
            10,
            10,
            48,
            10
        ];
        return i.forEach(function (e, n) {
            i[n] = t(e)
        }),
        i[Sa]('')
    }
    function Fi(t, i) {
        if (!(null == t || t[Ps] < 8 || null == i || i[Ps] <= 0)) {
            for (var e = '', n = 0; n < i[Ps]; n++)
            e += i[Aa](n) .toString();
            var s = Math[Ma](e[Ps] / 5),
            r = parseInt(e[ka](s) + e.charAt(2 * s) + e[ka](3 * s) + e[ka](4 * s) + e[ka](5 * s)),
            h = Math[sh](i.length / 2),
            a = Math[ih](2, 31) - 1,
            o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), e += o; e.length > 10; )
            e = (parseInt(e[yh](0, 10)) + parseInt(e[yh](10, e[Ps]))) .toString();
            e = (r * e + h) % a;
            for (var f = '', _ = '', n = 0; n < t[Ps]; n += 2)
            f = parseInt(parseInt(t.substring(n, n + 2), 16) ^ Math.floor(255 * (e / a))),
            _ += String[La](f),
            e = (r * e + h) % a;
            return 0 | _[0] ? oN = BR[Ca + GR + Ra + Na](_)  : null
        }
    }
    function qi() {
        var t = CR;
        if (!t)
        return lN = !0,
        void 0;
        aN = t;
        var i;
        t = t[js](Eh);
        for (var e = 0; e < t[Ps] && (i = Fi(t[e], NR), !(i && i.split(Da) .length >= 8)); )
        1 == t.length && (i = Fi(t[e], Ba)),
        e++;
        if (!i || i.split(Da) .length < 8)
        return cN = !0,
        '' === NR || NR == ja + YR + $a + HR + Ga || NR == Fa + zR + qa + za ? (uN = yN, lN = !1, bN = !1, hN = !1, void 0)  : (uN = yN, lN = !0, void 0);
        hN = i.split(Da);
        var n = hN[3];
        if (n != QD)
        return cN = !0,
        bN = !0,
        void 0;
        lN = !1,
        bN = !1;
        var s = hN[0];
        (Ya == s || Ha == s) && (cN = !1);
        var r = hN[5];
        dN = r;
        var h = hN[6];
        uN = h
    }
    function zi() {
        var t = aN;
        if (t) {
            var i;
            t = t[js](Eh);
            for (var e = 0; e < t.length && (i = pN(t[e], NR), !(i && i.split(Da) [Ps] >= 8)); )
            1 == t[Ps] && (i = pN(t[e], Ba)),
            e++;
            if (i.split(Da) [Ps] >= 8)
            return vN = !1,
            void 0
        }
        return '' === NR || NR == ja + YR + $a + HR + Ga || NR == Fa + zR + qa + za ? (vN = !1, void 0)  : (vN = !0, void 0)
    }
    function Yi() {
        if (cN) {
            var t = Wn[KR + Ws]._ha,
            i = _N;
            Wn[KR + Ws]._ha = function () {
                t.apply(this, arguments),
                i[tr](this._l7b, this._g)
            };
            var e = Je[KR + Ws]._f0;
            Je[KR + Ws]._f0 = function (t) {
                e[Ua](this, arguments),
                i[tr](this, t)
            }
        }
    }
    function Hi() {
        if (dN !== !0 && dN) {
            var t = dN[js](Os);
            if (3 != t[Ps])
            return kN[Wa]._ha = null,
            void 0;
            var i = parseInt(t[0]),
            e = parseInt(t[1]),
            n = parseInt(t[2]),
            s = 3,
            r = 9600000 * (365.2425 * (i - 2000 + 10 * s) + 10 * (e - 1) * s + n) * s * s;
            RR > r && (kN[Wa]._ha = null)
        }
    }
    function Ui() {
        var t = 0 | uN;
        t && (HL[KR + Ws]._id = function (i, n) {
            var s = i.id;
            return s === e || this[Va](s) ? !1 : this._i0[Ps] > t ? !1 : (qL.nw(this._i0, i, n), this._jm[s] = i, i)
        })
    }
    function Wi() {
        lN && (HL[KR + Ws]._id = HL[KR + Ws]._e2)
    }
    function Vi() {
        vN && (Je[KR + Ws]._i3 = null)
    }
    function Xi() {
        gN && (Qe[Wa]._ho = Qe[Wa]._5p)
    }
    function Ki() {
        bN && (XN[KR + Ws]._i3 = null)
    }
    function Zi() {
        hN === e && (Je[KR + Ws]._i3 = null)
    }
    function Ji(t) {
        return t[Xa] ? (t = t[Xa], t._l8x ? t._l8x : t._fi === !1 ? t : null)  : null
    }
    function Qi(t, i, e) {
        if (e = e || i[Ka], e == t)
        return !1;
        var n = t[Za](e);
        return n || (n = new qD(t, e), t._linkedNodes[e.id] = n),
        n._g1(i, t)
    }
    function te(t, i, e) {
        if (e = e || i.toAgent, e == t)
        return !1;
        var n = t.getEdgeBundle(e);
        return n ? n._l86(i, t)  : void 0
    }
    function ie(t, i, n) {
        return n === e && (n = i.toAgent),
        n != t ? (t._70 || (t._70 = new HL), t._70.add(i) === !1 ? !1 : (t._8g++, void 0))  : void 0
    }
    function ee(t, i, e) {
        return t._70 && t._70.remove(i) !== !1 ? (t._8g--, te(t, i, e), void 0)  : !1
    }
    function ne(t, i) {
        return i[Ja] != t ? (t._8d || (t._8d = new HL), t._8d.add(i) === !1 ? !1 : (t._9g++, void 0))  : void 0
    }
    function se(t, i) {
        return t._8d && t._8d.remove(i) !== !1 ? (t._9g--, te(i[Ja], i, t), void 0)  : !1
    }
    function re(t, i) {
        if (i === e && (i = t instanceof ON), i) {
            if (t[Qa]())
            return null;
            var n = re(t.from, !1);
            if (t[to]())
            return n;
            for (var s = re(t.to, !1); null != n && null != s; ) {
                if (n == s)
                return n;
                if (n.isDescendantOf(s))
                return s;
                if (s.isDescendantOf(n))
                return n;
                n = re(n, !1),
                s = re(s, !1)
            }
            return null
        }
        for (var r = t[Xa]; null != r; ) {
            if (r instanceof AN)
            return r;
            r = r[Xa]
        }
        return null
    }
    function he(t, i, e) {
        t instanceof AN && t.hasChildren() && t[Ns][ga](function (t) {
            t instanceof PN && i.add(t) && he(t, i, e)
        }, this),
        t[io]() && t._l8w[ga](function (t) {
            (null == e || e.accept(t)) && i.add(t) && he(t, i, e)
        })
    }
    function ae(t, i) {
        i.parent ? i[Xa].setChildIndex(i, i[Xa][eo] - 1)  : t[no][so](i, t.roots[Ps] - 1)
    }
    function oe(t, i) {
        if (i instanceof ON)
        return i[Qa]() || _e(t, i),
        void 0;
        for (ae(t, i); i = i[Xa]; )
        ae(t, i)
    }
    function fe(t, i) {
        if (i instanceof ON)
        return i[Qa]() || _e(t, i),
        void 0;
        for (ae(t, i); i = i.parent; )
        ae(t, i)
    }
    function _e(t, i) {
        var e = i.fromAgent;
        if (i.isLooped())
        ae(t, e);
         else {
            var n = i.toAgent;
            ae(t, e),
            ae(t, n)
        }
    }
    function ce(t, i) {
        return t._8g++,
        t._em ? (i._g3 = t._gj, t._gj._g5 = i, t._gj = i, void 0)  : (t._em = i, t._gj = i, void 0)
    }
    function ue(t, i) {
        t._8g--,
        t._gj == i && (t._gj = i._g3),
        i._g3 ? i._g3._g5 = i._g5 : t._em = i._g5,
        i._g5 && (i._g5._g3 = i._g3),
        i._g3 = null,
        i._g5 = null,
        te(t, i, i.$to)
    }
    function de(t, i) {
        return t._9g++,
        t._ft ? (i._h4 = t._hu, t._hu._h6 = i, t._hu = i, void 0)  : (t._ft = i, t._hu = i, void 0)
    }
    function le(t, i) {
        t._9g--,
        t._hu == i && (t._hu = i._h4),
        i._h4 ? i._h4._h6 = i._h6 : t._ft = i._h6,
        i._h6 && (i._h6._h4 = i._h4),
        i._h4 = null,
        i._h6 = null
    }
    function ve(t, i) {
        return i = i || new HL,
        t[ro](function (t) {
            i.add({
                id: t.id,
                edge: t,
                fromAgent: t.$from._l8x,
                toAgent: t.$to._l8x
            })
        }),
        t[ho](function (t) {
            ve(t, i)
        }),
        i
    }
    function be(t, i, e) {
        return ye(t, i, e) === !1 ? !1 : ge(t, i, e)
    }
    function ge(t, i, e) {
        if (t._em)
        for (var n = t._em; n; ) {
            if (i[tr](e, n) === !1)
            return !1;
            n = n._g5
        }
    }
    function ye(t, i, e) {
        if (t._ft)
        for (var n = t._ft; n; ) {
            if (i[tr](e, n) === !1)
            return !1;
            n = n._h6
        }
    }
    function pe(t, i, n, s, r, h, a) {
        return h || a ? (h = h || 0, a = a === e ? h : a || 0, h = Math[Qr](h, s / 2), a = Math.min(a, r / 2), t.moveTo(i + h, n), t[ao](i + s - h, n), t.quadTo(i + s, n, i + s, n + a), t.lineTo(i + s, n + r - a), t[oo](i + s, n + r, i + s - h, n + r), t[ao](i + h, n + r), t.quadTo(i, n + r, i, n + r - a), t[ao](i, n + a), t[oo](i, n, i + h, n), t.closePath(), t)  : (t[fo](i, n), t.lineTo(i + s, n), t.lineTo(i + s, n + r), t.lineTo(i, n + r), t[Dh](), t)
    }
    function xe(t, i) {
        var e = i.r || 1,
        n = i.cx || 0,
        s = i.cy || 0,
        r = e * Math[dh](Math.PI / 8),
        h = e * Math[ks](Math.PI / 4);
        t.moveTo(n + e, s),
        t.quadTo(n + e, s + r, n + h, s + h),
        t[oo](n + r, s + e, n, s + e),
        t[oo](n - r, s + e, n - h, s + h),
        t[oo](n - e, s + r, n - e, s),
        t[oo](n - e, s - r, n - h, s - h),
        t[oo](n - r, s - e, n, s - e),
        t.quadTo(n + r, s - e, n + h, s - h),
        t[oo](n + e, s - r, n + e, s)
    }
    function Ee(t, i, e, n, s) {
        i instanceof Z && (n = i.width, s = i[Fr], e = i.cy - s / 2, i = i.cx - n / 2);
        var r = 0.5522848,
        h = n / 2 * r,
        a = s / 2 * r,
        o = i + n,
        f = e + s,
        _ = i + n / 2,
        c = e + s / 2;
        return t[fo](i, c),
        t.curveTo(i, c - a, _ - h, e, _, e),
        t[_o](_ + h, e, o, c - a, o, c),
        t.curveTo(o, c + a, _ + h, f, _, f),
        t.curveTo(_ - h, f, i, c + a, i, c),
        t
    }
    function me(t, i, e, n, s) {
        var r = 2 * n,
        h = 2 * s,
        a = i + n / 2,
        o = e + s / 2;
        return t[fo](a - r / 4, o - h / 12),
        t.lineTo(i + 0.306 * n, e + 0.579 * s),
        t[ao](a - r / 6, o + h / 4),
        t.lineTo(i + n / 2, e + 0.733 * s),
        t[ao](a + r / 6, o + h / 4),
        t[ao](i + 0.693 * n, e + 0.579 * s),
        t[ao](a + r / 4, o - h / 12),
        t.lineTo(i + 0.611 * n, e + 0.332 * s),
        t[ao](a + 0, o - h / 4),
        t[ao](i + 0.388 * n, e + 0.332 * s),
        t[Dh](),
        t
    }
    function we(t, i, e, n, s) {
        return t[fo](i, e),
        t[ao](i + n, e + s / 2),
        t.lineTo(i, e + s),
        t.closePath(),
        t
    }
    function Te(t, i, e, n, s) {
        return t.moveTo(i, e + s / 2),
        t[ao](i + n / 2, e),
        t.lineTo(i + n, e + s / 2),
        t.lineTo(i + n / 2, e + s),
        t.closePath(),
        t
    }
    function Oe(t, i, e, n, s, r) {
        return t.moveTo(i, e),
        t[ao](i + n, e + s / 2),
        t.lineTo(i, e + s),
        r || (t[ao](i + 0.25 * n, e + s / 2), t.closePath()),
        t
    }
    function Pe(t, i, e, n, s) {
        if (!t || 3 > t)
        throw new Error('edge number must greater than 2');
        t = 0 | t,
        n = n || 50,
        s = s || 0,
        i = i || 0,
        e = e || 0;
        for (var r, h, a = 0, o = 2 * Math.PI / t, f = new bR; t > a; )
        r = i + n * Math.cos(s),
        h = e + n * Math.sin(s),
        a ? f.lineTo(r, h)  : f.moveTo(r, h),
        ++a,
        s += o;
        return f.closePath(),
        f
    }
    function Ie() {
        var t = new bR;
        return t[fo](75, 40),
        t[_o](75, 37, 70, 25, 50, 25),
        t.curveTo(20, 25, 20, 62.5, 20, 62.5),
        t[_o](20, 80, 40, 102, 75, 120),
        t[_o](110, 102, 130, 80, 130, 62.5),
        t[_o](130, 62.5, 130, 25, 100, 25),
        t.curveTo(85, 25, 75, 37, 75, 40),
        t
    }
    function Se() {
        var t = new bR;
        return t.moveTo(20, 0),
        t.lineTo(80, 0),
        t[ao](100, 100),
        t[ao](0, 100),
        t.closePath(),
        t
    }
    function Ae() {
        var t = new bR;
        return t[fo](100, 0),
        t[ao](100, 80),
        t.lineTo(0, 100),
        t[ao](0, 20),
        t.closePath(),
        t
    }
    function Me() {
        var t = new bR;
        return t[fo](20, 0),
        t.lineTo(100, 0),
        t[ao](80, 100),
        t.lineTo(0, 100),
        t[Dh](),
        t
    }
    function ke() {
        var t = new bR;
        return t[fo](43, 23),
        t[ao](28, 10),
        t[ao](37, 2),
        t[ao](63, 31),
        t.lineTo(37, 59),
        t[ao](28, 52),
        t[ao](44, 38),
        t.lineTo(3, 38),
        t[ao](3, 23),
        t.closePath(),
        t
    }
    function Le() {
        var t = new bR;
        return t[fo](1, 8),
        t[ao](7, 2),
        t.lineTo(32, 26),
        t[ao](7, 50),
        t[ao](1, 44),
        t[ao](18, 26),
        t[Dh](),
        t[fo](27, 8),
        t[ao](33, 2),
        t.lineTo(57, 26),
        t.lineTo(33, 50),
        t.lineTo(27, 44),
        t[ao](44, 26),
        t.closePath(),
        t
    }
    function Ce() {
        var t = new bR;
        return t.moveTo(0, 15),
        t[ao](23, 15),
        t[ao](23, 1),
        t[ao](47, 23),
        t[ao](23, 43),
        t[ao](23, 29),
        t[ao](0, 29),
        t[Dh](),
        t
    }
    function Re() {
        var t = new bR;
        return t.moveTo(0, 21),
        t[ao](30, 21),
        t.lineTo(19, 0),
        t.lineTo(25, 0),
        t.lineTo(47, 25),
        t.lineTo(25, 48),
        t.lineTo(19, 48),
        t[ao](30, 28),
        t.lineTo(0, 28),
        t.closePath(),
        t
    }
    function Ne() {
        var t = new bR;
        return t[fo](0, 0),
        t[ao](34, 24),
        t[ao](0, 48),
        t.lineTo(14, 24),
        t[Dh](),
        t
    }
    function De() {
        var t = new bR;
        return t[fo](20, 0),
        t.lineTo(34, 14),
        t.lineTo(20, 28),
        t[ao](22, 18),
        t.lineTo(1, 25),
        t.lineTo(10, 14),
        t[ao](1, 3),
        t[ao](22, 10),
        t[Dh](),
        t
    }
    function Be() {
        var t = new bR;
        return t[fo](4, 18),
        t[ao](45, 18),
        t.lineTo(37, 4),
        t.lineTo(83, 25),
        t[ao](37, 46),
        t[ao](45, 32),
        t.lineTo(4, 32),
        t[Dh](),
        t
    }
    function je() {
        var t = new bR;
        return t[fo](17, 11),
        t[ao](27, 11),
        t.lineTo(42, 27),
        t.lineTo(27, 42),
        t[ao](17, 42),
        t[ao](28, 30),
        t.lineTo(4, 30),
        t[ao](4, 23),
        t.lineTo(28, 23),
        t[Dh](),
        t
    }
    function $e() {
        SN[co](WC[uo], Ee(new bR, 0, 0, 100, 100)),
        SN[co](WC.SHAPE_RECT, pe(new bR, 0, 0, 100, 100)),
        SN.register(WC.SHAPE_ROUNDRECT, pe(new bR, 0, 0, 100, 100, 20, 20)),
        SN.register(WC[lo], me(new bR, 0, 0, 100, 100)),
        SN.register(WC[vo], we(new bR, 0, 0, 100, 100)),
        SN[co](WC.SHAPE_PENTAGON, Pe(5)),
        SN[co](WC[bo], Pe(6)),
        SN.register(WC.SHAPE_DIAMOND, Te(new bR, 0, 0, 100, 100)),
        SN[co](WC.SHAPE_HEART, Ie()),
        SN.register(WC[go], Se()),
        SN.register(WC[yo], Ae()),
        SN.register(WC[po], Me());
        var t = new bR;
        t[fo](20, 0),
        t.lineTo(40, 0),
        t.lineTo(40, 20),
        t[ao](60, 20),
        t.lineTo(60, 40),
        t.lineTo(40, 40),
        t[ao](40, 60),
        t.lineTo(20, 60),
        t.lineTo(20, 40),
        t[ao](0, 40),
        t[ao](0, 20),
        t[ao](20, 20),
        t.closePath(),
        SN.register(WC[xo], t),
        SN.register(WC[Eo], Oe(new bR, 0, 0, 100, 100)),
        SN[co](WC.SHAPE_ARROW_1, ke()),
        SN[co](WC.SHAPE_ARROW_2, Le()),
        SN.register(WC.SHAPE_ARROW_3, Ce()),
        SN[co](WC.SHAPE_ARROW_4, Re()),
        SN[co](WC[mo], Ne()),
        SN[co](WC[wo], De()),
        SN.register(WC[To], Be()),
        SN.register(WC.SHAPE_ARROW_8, je()),
        SN[co](WC[Oo], Oe(new bR, 0, 0, 100, 100, !0))
    }
    function Ge() {
        qL.lr(this, Ge, arguments),
        this.busLayout = !0
    }
    function Fe() {
        qL.lr(this, Fe)
    }
    function qe() {
        if (this._fi === !0) {
            var t = this._70,
            i = this._8d;
            if (t)
            for (t = t._i0; t[Ps]; ) {
                var e = t[0];
                ee(this, e, e.toAgent)
            }
            if (i)
            for (i = i._i0; i[Ps]; ) {
                var e = i[0];
                se(this, e, e.fromAgent)
            }
            return this.forEachChild(function (t) {
                t instanceof AN && qe.call(t)
            }),
            void 0
        }
        var n = ve(this);
        n.forEach(function (t) {
            t = t[Po];
            var i = t.$from,
            e = t.$to,
            n = i[Io](this),
            s = e[Io](this);
            n && !s ? (ie(this, t), Qi(this, t))  : s && !n && (ne(this, t), Qi(t.fromAgent, t, this))
        }, this)
    }
    function ze() {
        qL.lr(this, ze, arguments),
        this.$image = null
    }
    function Ye(t, i, e, n) {
        return t[i] = e,
        n ? {
            get: function () {
                return this[i]
            },
            set: function (t) {
                if (t !== this[i]) {
                    this[i] = t,
                    this._1k = !0;
                    for (var e = n[Ps]; --e >= 0; )
                    this[n[e]] = !0
                }
            }
        }
         : {
            get: function () {
                return this[i]
            },
            set: function (t) {
                t !== this[i] && (this[i] = t)
            }
        }
    }
    function He(t, i) {
        var e = {
        },
        n = {
        };
        for (var s in i) {
            var r = i[s];
            r.validateFlags && r.validateFlags[ga](function (t, i, e) {
                e[i] = So + t,
                n[t] = !0
            }),
            e[s] = Ye(t, Qs + s, r[Ao], r[Mo])
        }
        for (var h in n)
        t[So + h] = !0;
        Object[ko](t, e)
    }
    function Ue(t, i, e, n) {
        if (Array[Lo](i))
        for (var s = i[Ps]; --s >= 0; )
        Ue(t, i[s], e, n);
         else {
            var r = i.target;
            if (r) {
                if (r instanceof kN || (r = t[r]), !r)
                return
            } else
            r = t;
            if (n || (n = t[Co](i.property, e)), i.bindingProperty && (r[i[Ro]] = n), i[No]) {
                var h = i[No];
                h instanceof Function || (h = t[h]),
                h instanceof Function && h[tr](t, n, r)
            }
        }
    }
    function We() {
        LN.forEach(function (t) {
            this[t] = {
            }
        }, this)
    }
    function Ve(t, i, e, n) {
        return n == WC.PROPERTY_TYPE_ACCESSOR ? (t[e] = i, void 0)  : n == WC[Do] ? (t[ia](e, i), void 0)  : n == WC[Bo] ? (t.setStyle(e, i), void 0)  : !1
    }
    function Xe() {
        qL.lr(this, Xe, arguments)
    }
    function Ke() {
        qL.lr(this, Ke, arguments),
        this._measureProperties._2k = !0
    }
    function Ze(t) {
        var i = XC._8n();
        return Bi(i._g),
        i.onselectstart = function () {
            return !1
        },
        t[Hs](i),
        SC._kq(i, UN),
        i
    }
    function Je(t) {
        this._ks = t,
        qL.me(this._ks, jo),
        t[$o] = 0,
        this._hr = Ze(t),
        this._ib = this._hr._ib || 1,
        this._topCanvas = new Wn(this, t),
        this._ef = [
        ],
        this._9d = new WN,
        this._hh = new Qe(this),
        this._kn = new HL;
        var i = this;
        this._kn._e2 = function (t, e, n) {
            e._g9ed = !0;
            var s = e[Go];
            return e._gb && s && i._9d._k5(e.$x + e[Go].x, e.$y + e[Go].y, e.uiBounds.width, e[Go][Fr]),
            HL.prototype._e2.call(this, t, e, n)
        },
        this._kn[lr] = function () {
            return this.forEach(function (t) {
                t._g9ed = !0
            }),
            HL.prototype.clear[tr](this)
        },
        this._l84 = [
        ],
        this._7n = {
        },
        this._7o = new JL,
        this._7u = [
        ],
        this._l7d()
    }
    function Qe(t) {
        this._l7b = t,
        this._hh = new YL,
        this._hh._ib = t._ib,
        this._6s = new JL
    }
    function tn(t, i, e, n) {
        var s = en(t, i, e, n),
        r = [
        ];
        if (hn(t))
        nn(s, i, e, r, n.getStyle(CN[Fo]));
         else {
            bn(t, i, e, r, s, n);
            var h = sn(t, n),
            a = h ? cn(t, s, i, e, n.getStyle(CN[qo]))  : n.getStyle(CN[zo]);
            0 == a && (s = !s)
        }
        return r
    }
    function en(t, i, e) {
        if (null != t) {
            if (t == WC[Yo] || t == WC[Ho] || t == WC[Uo] || t == WC.EDGE_TYPE_EXTEND_LEFT || t == WC.EDGE_TYPE_EXTEND_RIGHT)
            return !0;
            if (t == WC[Wo] || t == WC[Vo] || t == WC[Xo] || t == WC.EDGE_TYPE_EXTEND_TOP || t == WC[Ko])
            return !1
        }
        var n = fn(i, e),
        s = _n(i, e);
        return n >= s
    }
    function nn(t, i, e, n, s) {
        t ? En(i, e, n, s)  : mn(i, e, n, s)
    }
    function sn(t, i) {
        return i[Zo](CN[Jo])
    }
    function rn(t) {
        return null != t && (t == WC.EDGE_TYPE_EXTEND_TOP || t == WC[Qo] || t == WC[Ko] || t == WC[tf])
    }
    function hn(t) {
        return t && (t == WC[ef] || t == WC[Yo] || t == WC[Wo])
    }
    function an(t, i, e, n, s) {
        if (t == WC[Uo] || t == WC.EDGE_TYPE_VERTICAL_HORIZONTAL)
        return new VL(n.x + n.width / 2, n.y + n[Fr] / 2);
        var r;
        if (rn(t)) {
            var h = Math[Qr](e.y, n.y),
            a = Math.min(e.x, n.x),
            o = Math[Ph](e[Cs], n[Cs]),
            f = Math.max(e[Ls], n[Ls]);
            if (r = s[Zo](CN.EDGE_EXTEND), t == WC[nf])
            return new VL((a + f) / 2, h - r);
            if (t == WC[Qo])
            return new VL(a - r, (h + o) / 2);
            if (t == WC[Ko])
            return new VL((a + f) / 2, o + r);
            if (t == WC[tf])
            return new VL(f + r, (h + o) / 2)
        }
        var _ = sn(t, s);
        if (r = _ ? cn(t, i, e, n, s.getStyle(CN[qo]))  : s.getStyle(CN[zo]), r == Number[sf] || r == Number.POSITIVE_INFINITY)
        return new VL(n.x + n[Gr] / 2, n.y + n[Fr] / 2);
        if (0 == r)
        return new VL(e.x + e.width / 2, e.y + e.height / 2);
        if (i) {
            var c = e.x + e[Ls] < n.x + n[Ls];
            return new VL(ln(c, r, e.x, e.width), e.y + e[Fr] / 2)
        }
        var u = e.y + e.bottom < n.y + n.bottom;
        return new VL(e.x + e[Gr] / 2, ln(u, r, e.y, e[Fr]))
    }
    function on(t, i, e, n) {
        var s = Math[Ph](i, n) - Math.min(t, e);
        return s - (i - t + n - e)
    }
    function fn(t, i) {
        var e = Math.max(t.x + t.width, i.x + i[Gr]) - Math.min(t.x, i.x);
        return e - t[Gr] - i[Gr]
    }
    function _n(t, i) {
        var e = Math[Ph](t.y + t[Fr], i.y + i[Fr]) - Math[Qr](t.y, i.y);
        return e - t.height - i.height
    }
    function cn(t, i, e, n, s) {
        var r = un(s, i, e, n, null);
        return r * s
    }
    function un(t, i, e, n) {
        return i ? dn(t, e.x, e.right, n.x, n.right)  : dn(t, e.y, e.bottom, n.y, n[Cs])
    }
    function dn(t, i, e, n, s) {
        var r = on(i, e, n, s),
        h = n + s > i + e;
        if (r > 0) {
            if (1 == t)
            return r + (s - n) / 2;
            if (t >= 0 && 1 > t)
            return r;
            if (0 > t)
            return h ? n - i : e - s
        }
        return h && t > 0 || !h && 0 > t ? Math[Rs](e - s)  : Math.abs(i - n)
    }
    function ln(t, i, e, n) {
        return t == i > 0 ? e + n + Math[Rs](i)  : e - Math.abs(i)
    }
    function vn(t, i) {
        var e = t.length;
        if (!(3 > e)) {
            var n = i[Zo](CN.EDGE_CORNER);
            if (n != WC[rf]) {
                var s = i[Zo](CN[hf]),
                r = 0,
                h = 0;
                s && (qL.n6(s) ? r = h = s : (r = s.x || 0, h = s.y || 0));
                for (var a, o, f, _, c = t[0], u = t[1], d = null, l = 2; e > l; l++) {
                    var v = t[l],
                    b = u.x - c.x,
                    g = u.y - c.y,
                    y = v.x - u.x,
                    p = v.y - u.y,
                    x = !b || b > - ZC && ZC > b,
                    E = !g || g > - ZC && ZC > g,
                    m = !y || y > - ZC && ZC > y,
                    w = !p || p > - ZC && ZC > p,
                    T = E;
                    (x && w || E && m) && (T ? (a = Math[Qr](2 == l ? Math.abs(b)  : Math.abs(b) / 2, r), o = Math[Qr](l == e - 1 ? Math[Rs](p)  : Math.abs(p) / 2, h), f = new VL(u.x - (b > 0 ? a : - a), u.y), _ = new VL(u.x, u.y + (p > 0 ? o : - o)))  : (a = Math[Qr](l == e - 1 ? Math[Rs](y)  : Math[Rs](y) / 2, r), o = Math[Qr](2 == l ? Math.abs(g)  : Math[Rs](g) / 2, h), f = new VL(u.x, u.y - (g > 0 ? o : - o)), _ = new VL(u.x + (y > 0 ? a : - a), u.y)), qL.nn(t, u), l--, e--, (f.x != c.x || f.y != c.y) && (qL.nw(t, f, l), l++, e++), n == WC.EDGE_CORNER_BEVEL ? (qL.nw(t, _, l), l++, e++)  : n == WC[af] && (qL.nw(t, [
                        u,
                        _
                    ], l), l++, e++)),
                    c = u,
                    u = v
                }
                null != d && _.x == u.x && _.y == u.y && qL.nn(t, u)
            }
        }
    }
    function bn(t, i, e, n, s, r) {
        var h = r.getStyle(CN[of]),
        a = null == h;
        if (null != h) {
            var o = (new JL) .union(i) [ff](e);
            o[_f](h) || (s = gn(h.x, h.y, o.y, o.x, o.bottom, o[Ls]))
        } else
        h = an(t, s, i, e, r);
        s ? xn(i, e, h, n, a)  : pn(i, e, h, n, a)
    }
    function gn(t, i, e, n, s, r) {
        return e > i && e - i > n - t && e - i > t - r || i > s && i - s > n - t && i - s > t - r ? !1 : !0
    }
    function yn(t, i, e) {
        return i >= t.x && i <= t[Ls] && e >= t.y && e <= t[Cs]
    }
    function pn(t, i, e, n, s) {
        var r = Math[Ph](t.y, i.y),
        h = Math.min(t.y + t.height, i.y + i[Fr]),
        a = null != e ? e.y : h + (r - h) / 2,
        o = t.x + t.width / 2,
        f = i.x + i[Gr] / 2;
        if (0 == s && null != e && (e.x >= t.x && e.x <= t.x + t[Gr] && (o = e.x), e.x >= i.x && e.x <= i.x + i.width && (f = e.x)), yn(i, o, a) || yn(t, o, a) || n[or](new VL(o, a)), yn(i, f, a) || yn(t, f, a) || n[or](new VL(f, a)), 0 == n[Ps])
        if (null != e)
        yn(i, e.x, a) || yn(t, e.x, a) || n[or](new VL(e.x, a));
         else {
            var _ = Math.max(t.x, i.x),
            c = Math[Qr](t.x + t[Gr], i.x + i[Gr]);
            n[or](new VL(_ + (c - _) / 2, a))
        }
    }
    function xn(t, i, e, n, s) {
        var r = Math.max(t.x, i.x),
        h = Math.min(t.x + t.width, i.x + i.width),
        a = null != e ? e.x : h + (r - h) / 2,
        o = t.y + t[Fr] / 2,
        f = i.y + i[Fr] / 2;
        if (0 == s && null != e && (e.y >= t.y && e.y <= t.y + t.height && (o = e.y), e.y >= i.y && e.y <= i.y + i[Fr] && (f = e.y)), yn(i, a, o) || yn(t, a, o) || n.push(new VL(a, o)), yn(i, a, f) || yn(t, a, f) || n[or](new VL(a, f)), 0 == n.length)
        if (null != e)
        yn(i, a, e.y) || yn(t, a, e.y) || n[or](new VL(a, e.y));
         else {
            var _ = Math.max(t.y, i.y),
            c = Math.min(t.y + t.height, i.y + i.height);
            n[or](new VL(a, _ + (c - _) / 2))
        }
    }
    function En(t, i, e, n) {
        var s = i.x + i[Gr] < t.x,
        r = t.x + t[Gr] < i.x,
        h = s ? t.x : t.x + t[Gr],
        a = t.y + t[Fr] / 2,
        o = r ? i.x : i.x + i[Gr],
        f = i.y + i[Fr] / 2,
        _ = n,
        c = s ? - _ : _,
        u = new VL(h + c, a);
        c = r ? - _ : _;
        var d = new VL(o + c, f);
        if (s == r) {
            var l = s ? Math[Qr](h, o) - n : Math.max(h, o) + n;
            e[or](new VL(l, a)),
            e[or](new VL(l, f))
        } else if (u.x < d.x == s) {
            var v = a + (f - a) / 2;
            e.push(u),
            e[or](new VL(u.x, v)),
            e.push(new VL(d.x, v)),
            e[or](d)
        } else
        e[or](u),
        e[or](d)
    }
    function mn(t, i, e, n) {
        var s = i.y + i.height < t.y,
        r = t.y + t.height < i.y,
        h = t.x + t[Gr] / 2,
        a = s ? t.y : t.y + t.height,
        o = i.x + i.width / 2,
        f = r ? i.y : i.y + i[Fr],
        _ = n,
        c = s ? - _ : _,
        u = new VL(h, a + c);
        c = r ? - _ : _;
        var d = new VL(o, f + c);
        if (s == r) {
            var l = s ? Math[Qr](a, f) - n : Math[Ph](a, f) + n;
            e[or](new VL(h, l)),
            e.push(new VL(o, l))
        } else if (u.y < d.y == s) {
            var v = h + (o - h) / 2;
            e[or](u),
            e.push(new VL(v, u.y)),
            e[or](new VL(v, d.y)),
            e.push(d)
        } else
        e[or](u),
        e.push(d)
    }
    function wn(t) {
        return t == WC[cf] || t == WC.EDGE_TYPE_ORTHOGONAL_HORIZONTAL || t == WC[Uo] || t == WC.EDGE_TYPE_ORTHOGONAL_VERTICAL || t == WC[Xo] || t == WC.EDGE_TYPE_EXTEND_TOP || t == WC.EDGE_TYPE_EXTEND_LEFT || t == WC[Ko] || t == WC[tf] || t == WC[ef] || t == WC[Yo] || t == WC.EDGE_TYPE_ELBOW_VERTICAL
    }
    function Tn(t, i) {
        var e,
        n;
        i && i.width && i[Fr] ? (e = i.width, n = i.height)  : e = n = isNaN(i) ? zL.ARROW_SIZE : i;
        var s = SN[uf](t, - e, - n / 2, e, n);
        return s || (s = new bR, s.moveTo( - e, - n / 2), s.lineTo(0, 0), s[ao]( - e, n / 2)),
        s
    }
    function On(t, i) {
        var e = Math.sin(i),
        n = Math[Ms](i),
        s = t.x,
        r = t.y;
        return t.x = s * n - r * e,
        t.y = s * e + r * n,
        t
    }
    function Pn(t, i, e, n, s, r) {
        var h = Math[As](n - i, e - t),
        a = new VL(s, r);
        return a[uh] = h,
        On(a, h),
        a.x += t,
        a.y += i,
        a
    }
    function In(t, i, e, n, s) {
        i = o(n, i.x, i.y, e.x, e.y),
        e = o(s, e.x, e.y, i.x, i.y);
        var r = Math.PI / 2 + Math[As](e.y - i.y, e.x - i.x),
        h = t * Math[Ms](r),
        a = t * Math[ks](r),
        f = e.x - i.x,
        _ = e.y - i.y,
        c = i.x + 0.25 * f,
        u = i.y + 0.25 * _,
        d = i.x + 0.75 * f,
        l = i.y + 0.75 * _;
        return [new lR(cR, [
            c + h,
            u + a,
            d + h,
            l + a
        ])]
    }
    function Sn(t, i, n) {
        if (qL.nw(t, new lR(oR, [
            i.x,
            i.y
        ]), 0), n) {
            if (t.length > 1) {
                var s = t[t[Ps] - 1];
                if (_R == s.type && (s[Pr][2] === e || null === s.points[2]))
                return s.points[2] = n.x,
                s[Pr][3] = n.y,
                void 0;
                if (cR == s[Ws] && (s[Pr][4] === e || null === s.points[4]))
                return s[Pr][4] = n.x,
                s.points[5] = n.y,
                void 0
            }
            t[or](new lR(fR, [
                n.x,
                n.y
            ]))
        }
    }
    function An(t, i, e, n, s, r, h, a) {
        return i.hasPathSegments() ? (e._e8 = i._8p[df](), void 0)  : n == s ? (t.drawLoopedEdge(e, n, r, h), void 0)  : (t.drawEdge(e, n, s, r, h, a), void 0)
    }
    function Mn(t, i, e, n, s) {
        var r = n == s,
        h = t.graph.getUI(n),
        a = r ? h : t[lf].getUI(s),
        o = i.edgeType,
        f = h[vf],
        _ = r ? f : a.bodyBounds,
        c = i[bf]();
        if (!r && !o && !c) {
            var u = n[gf],
            d = s.busLayout;
            if (u != d) {
                var l,
                v,
                b,
                g,
                y = i[yf];
                u ? (l = h, v = f, b = a, g = _)  : (l = a, v = _, b = h, g = f);
                var p = Dn(v, l, u, b, g, y);
                if (p && 2 == p.length) {
                    var x = p[0],
                    E = p[1];
                    return e[fo](x.x, x.y),
                    E.x == x.x && E.y == x.y && (E.y += 0.01),
                    e[ao](E.x, E.y),
                    e._5r = !0,
                    void 0
                }
            }
        }
        An(t, i, e, h, a, o, f, _),
        (!r || c) && kn(t, i, e, h, a, o, f, _),
        e._5r = !0
    }
    function kn(t, i, n, s, r, h, a, o) {
        var f = n._e8,
        _ = a[pf],
        c = o.center;
        if (f[Ps]) {
            var u = f[0],
            d = u[xf],
            l = f[f[Ps] - 1],
            v = l.lastPoint;
            a.contains(d.x, d.y) && (u.type == cR ? (_ = d, d = {
                x: u[Pr][2],
                y: u[Pr][3]
            }, u[Pr] = u[Pr].slice(2), u.type = _R)  : u[Ws] == _R && (_ = d, d = {
                x: u[Pr][0],
                y: u.points[1]
            }, u[Pr] = u.points.slice(2), u[Ws] = fR)),
            Ln(s, a, d, _, e, e);
            var b,
            g = l.points[Ps],
            y = v.x === e || v.y === e;
            g >= 4 && (y || o.contains(v.x, v.y)) && (y || (c = v), b = !0, v = {
                x: l[Pr][g - 4],
                y: l.points[g - 3]
            }, o[Ef](v.x, v.y) && (c = v, g >= 6 ? (v = {
                x: l.points[g - 6],
                y: l.points[g - 5]
            }, l.points = l[Pr][Ss](0, 4), l.type = _R)  : 1 == f[Ps] ? (v = {
                x: _.x,
                y: _.y
            }, l[Pr] = l.points.slice(0, 2), l.type = fR)  : (l = f[f.length - 2], v = l.lastPoint))),
            Ln(r, o, v, c, e, e),
            b && (g = l[Pr][Ps], l.points[g - 2] = c.x, l[Pr][g - 1] = c.y, c = null)
        } else {
            var p = Math[As](c.y - _.y, c.x - _.x),
            x = Math[Ms](p),
            E = Math.sin(p);
            Ln(s, a, c, _, x, E),
            Ln(r, o, _, c, - x, - E)
        }
        Sn(n._e8, _, c)
    }
    function Ln(t, i, n, s, r, h) {
        if (r === e) {
            var a = Math.atan2(n.y - s.y, n.x - s.x);
            r = Math[Ms](a),
            h = Math[ks](a)
        }
        for (n = {
            x: n.x,
            y: n.y
        }, i.contains(n.x, n.y) || (n = o(i, s.x, s.y, n.x, n.y)); ; ) {
            if (!i[Ef](n.x, n.y))
            return s;
            if (t._fx(n.x - r, n.y - h)) {
                s.x = n.x - r / 4,
                s.y = n.y - h / 4;
                break
            }
            n.x -= r,
            n.y -= h
        }
        return s
    }
    function Cn(t, i, e, n, s, r, h, a) {
        if (i.hasPathSegments())
        return i._8p;
        var o = i[mf];
        if (wn(o)) {
            var f = tn(o, e, n, t, s, r);
            if (!f || !f[Ps])
            return null;
            qL.nw(f, h, 0),
            f.push(a),
            o != WC.EDGE_TYPE_ELBOW && vn(f, t);
            for (var _ = [
            ], c = f[Ps], u = 1; c - 1 > u; u++) {
                var d = f[u];
                qL.nh(d) ? _[or](new lR(_R, [
                    d[0].x,
                    d[0].y,
                    d[1].x,
                    d[1].y
                ]))  : _[or](new lR(fR, [
                    d.x,
                    d.y
                ]))
            }
            return _
        }
        if (i.$bundleEnabled) {
            var l = t._2f();
            if (l)
            return In(l, h, a, e, n)
        }
    }
    function Rn(t, i, e) {
        var n = t[Zo](CN[wf]),
        s = t._2f(),
        r = n + 0.2 * s,
        h = i.x + i[Gr] - r,
        a = i.y,
        o = i.x + i.width,
        f = i.y + r;
        n += s;
        var _ = 0.707,
        c = - 0.707,
        u = i.x + i.width,
        d = i.y,
        l = u + _ * n,
        v = d + c * n,
        b = {
            x: h,
            y: a
        },
        g = {
            x: l,
            y: v
        },
        y = {
            x: o,
            y: f
        },
        p = b.x,
        x = g.x,
        E = y.x,
        m = b.y,
        w = g.y,
        T = y.y,
        O = ((T - m) * (w * w - m * m + x * x - p * p) + (w - m) * (m * m - T * T + p * p - E * E)) / (2 * (x - p) * (T - m) - 2 * (E - p) * (w - m)),
        P = ((E - p) * (x * x - p * p + w * w - m * m) + (x - p) * (p * p - E * E + m * m - T * T)) / (2 * (w - m) * (E - p) - 2 * (T - m) * (x - p)),
        r = Math[Jr]((p - O) * (p - O) + (m - P) * (m - P)),
        I = Math[As](b.y - P, b.x - O),
        S = Math.atan2(y.y - P, y.x - O),
        A = S - I;
        return 0 > A && (A += 2 * Math.PI),
        Nn(O, P, I, A, r, r, !0, e)
    }
    function Nn(t, i, e, n, s, r, h, a) {
        var o,
        f,
        _,
        c,
        u,
        d,
        l,
        v,
        b,
        g,
        y;
        if (Math[Rs](n) > 2 * Math.PI && (n = 2 * Math.PI), u = Math[Tf](Math.abs(n) / (Math.PI / 4)), o = n / u, f = o, _ = e, u > 0) {
            d = t + Math.cos(_) * s,
            l = i + Math[ks](_) * r,
            moveTo ? a[fo](d, l)  : a.lineTo(d, l);
            for (var p = 0; u > p; p++)
            _ += f,
            c = _ - f / 2,
            v = t + Math.cos(_) * s,
            b = i + Math.sin(_) * r,
            g = t + Math[Ms](c) * (s / Math[Ms](f / 2)),
            y = i + Math[ks](c) * (r / Math[Ms](f / 2)),
            a[oo](g, y, v, b)
        }
    }
    function Dn(t, i, n, s, r, h) {
        var a = r.cx,
        o = r.cy,
        f = a < t.x,
        _ = a > t.right,
        c = o < t.y,
        u = o > t[Cs],
        d = t.cx,
        l = t.cy,
        v = f || _,
        b = c || u,
        g = h === e || null === h;
        g && (h = Math[As](o - l, a - d), v || b || (h += Math.PI));
        var y = Math[Ms](h),
        p = Math[ks](h),
        x = jn(i, t, {
            x: a,
            y: o
        }, - y, - p);
        x || (h = Math[As](o - l, a - d), v || b || (h += Math.PI), y = Math.cos(h), p = Math.sin(h), x = jn(i, t, {
            x: a,
            y: o
        }, - y, - p) || {
            x: d,
            y: l
        });
        var E = jn(s, r, {
            x: x.x,
            y: x.y
        }, - x[Of] || y, - x[Pf] || p, !1) || {
            x: a,
            y: o
        };
        return n ? [
            x,
            E
        ] : [
            E,
            x
        ]
    }
    function Bn(t, i, e, n, s, r) {
        var h = i < t.x,
        a = i > t[Ls],
        o = e < t.y,
        f = e > t[Cs];
        if (h && n > 0) {
            var _ = t.x - i,
            c = e + _ * s / n;
            if (c >= t.y && c <= t.bottom)
            return {
                x: t.x,
                y: c,
                perX: n,
                perY: s
            }
        }
        if (a && 0 > n) {
            var _ = t.right - i,
            c = e + _ * s / n;
            if (c >= t.y && c <= t[Cs])
            return {
                x: t.right,
                y: c,
                perX: n,
                perY: s
            }
        }
        if (o && s > 0) {
            var u = t.y - e,
            d = i + u * n / s;
            if (d >= t.x && d <= t.right)
            return {
                x: d,
                y: t.y,
                perX: n,
                perY: s
            }
        }
        if (f && 0 > s) {
            var u = t[Cs] - e,
            d = i + u * n / s;
            if (d >= t.x && d <= t[Ls])
            return {
                x: d,
                y: t[Cs],
                perX: n,
                perY: s
            }
        }
        return r !== !1 ? Bn(t, i, e, - n, - s, !1)  : void 0
    }
    function jn(t, i, e, n, s, r) {
        if (!i.contains(e.x, e.y)) {
            if (e = Bn(i, e.x, e.y, n, s, r), !e)
            return ;
            return $n(t, i, e, e.perX, e.perY)
        }
        return r === !1 ? $n(t, i, e, n, s)  : $n(t, i, {
            x: e.x,
            y: e.y,
            perX: n,
            perY: s
        }, n, s) || $n(t, i, e, - n, - s)
    }
    function $n(t, i, e, n, s) {
        for (; ; ) {
            if (!i[Ef](e.x, e.y))
            return ;
            if (t._fx(e.x + n, e.y + s))
            break;
            e.x += n,
            e.y += s
        }
        return e
    }
    function Gn(t) {
        return t[If](/.(gif|jpg|jpeg|png)$/gi) ? t : (t = n(t), t instanceof Object && t.draw ? t : void 0)
    }
    function Fn() {
        qL.lr(this, Fn, arguments)
    }
    function qn(t, e, n, s, r, h, a) {
        var o = i[zs](Sf);
        o[Af] = Mf,
        SC._kq(o, QN),
        e && SC._kq(o, e);
        var f = i[zs](kf);
        return h && (NL ? f.ontouchstart = h : f[Lf] = h),
        f[Cf] = a,
        f[Rh] = n,
        SC._kq(f, tD),
        r && SC._kq(f, r),
        s && SC._hc(f, Rf, Nf),
        o._img = f,
        o[Hs](f),
        t.appendChild(o),
        o
    }
    function zn(t, e) {
        this._navPane = i[zs](Sf),
        this._navPane[Af] = Df,
        SC._kq(this._navPane, {
            'background-color': Bf,
            overflow: jf,
            'float': $f,
            'user-select': Gf,
            position: Ff
        }),
        this._top = qn(this._navPane, {
            width: qf
        }, zL.NAVIGATION_IMAGE_TOP, !1, null, e, zf),
        this._left = qn(this._navPane, {
            height: qf
        }, zL[Yf], !1, iD, e, $f),
        this._right = qn(this._navPane, {
            height: qf,
            right: Hf
        }, zL[Yf], !0, iD, e, Ls),
        this._l7ottom = qn(this._navPane, {
            width: qf,
            bottom: Hf
        }, zL[Uf], !0, null, e, Cs),
        t[Hs](this._navPane)
    }
    function Yn(t, i) {
        this._l7b = t;
        var e = function (i) {
            var e,
            n,
            s = i.target,
            r = s.name;
            if ($f == r)
            e = 1;
             else if (Ls == r)
            e = - 1;
             else if (zf == r)
            n = 1;
             else {
                if (Cs != r)
                return ;
                n = - 1
            }
            NL && (s.className = Wf, setTimeout(function () {
                s[Af] = ''
            }, 100)),
            qL.mp(i),
            t._in._8q(e, n)
        };
        zn[tr](this, i, e),
        this._37(i.clientWidth, i[Vf])
    }
    function Hn(t, i) {
        this._l7b = t,
        this[Xf](i, t)
    }
    function Un() {
        qL.lr(this, Un, arguments)
    }
    function Wn(t, i) {
        this._l7b = t,
        this._hr = Ze(i),
        this._g = this._hr._g,
        this._85 = new HL
    }
    function Vn(t) {
        var i = t.selectionModel,
        e = [
        ];
        return t.graphModel[ga](function (i) {
            t[Kf](i) && t[Zf](i) && e[or](i)
        }),
        i[ia](e)
    }
    function Xn(t, i, n, s) {
        s === e && (s = zL[Jf]);
        var r = t[Qf](i);
        return n ? t[t_](r.x, r.y, s)  : t.zoomOut(r.x, r.y, s)
    }
    function Kn(t, i, e) {
        var n = t[nh];
        e = e || n,
        i = i || 1;
        var s = null;
        s && e[Gr] * e.height * i * i > s && (i = Math[Jr](s / e[Gr] / e[Fr]));
        var r = XC._8n();
        return r.width = e[Gr] * i,
        r[Fr] = e.height * i,
        t._75._f0(r._g, i, e),
        {
            canvas: r,
            data: r[i_](e_),
            width: r[Gr],
            height: r.height
        }
    }
    function Zn(t) {
        this[lf] = t,
        this[n_] = t.topCanvas
    }
    function Jn(t, i) {
        this.interactions = t,
        this.defaultCursor = i || s_
    }
    function Qn() {
        qL.lr(this, Qn, arguments)
    }
    function ts(t, i) {
        if (!t)
        return i;
        var n = {
        };
        for (var s in t)
        n[s] = t[s];
        for (var s in i)
        n[s] === e && (n[s] = i[s]);
        return n
    }
    function is() {
        qL.lr(this, is, arguments)
    }
    function es() {
        qL.lr(this, es, arguments)
    }
    function ns() {
        qL.lr(this, ns, arguments)
    }
    function ss() {
        qL.lr(this, ss, arguments)
    }
    function rs(i, e, n) {
        i += t[r_],
        e += t[h_];
        var s = n[a_]();
        return {
            x: i + s[$f],
            y: e + s[zf]
        }
    }
    function hs(t, i, e) {
        var n = t[o_],
        s = t[f_];
        t[Gs].left = i - n / 2 + Wr,
        t.style[zf] = e - s / 2 + Wr
    }
    function as(t) {
        var e = i[zs](Mh),
        n = e[__](da),
        s = getComputedStyle(t, null),
        r = s.font;
        r || (r = s[c_] + $s + s[u_] + $s + s[d_]),
        n[l_] = r;
        var h = t.value,
        a = h[js](Da),
        o = parseInt(s.fontSize),
        f = 0,
        _ = 0;
        return UC.forEach(a, function (t) {
            var i = n[v_](t) .width;
            i > f && (f = i),
            _ += 1.2 * o
        }),
        {
            width: f,
            height: _
        }
    }
    function os(t, e) {
        if (t.focus(), b_ == typeof t[g_] && b_ == typeof t[y_]) {
            var n = t[Ao],
            s = t[g_];
            t[Ao] = n.slice(0, s) + e + n.slice(t[y_]),
            t.selectionEnd = t[g_] = s + e[Ps]
        } else if (p_ != typeof i[x_]) {
            var r = i.selection[E_]();
            r.text = e,
            r.collapse(!1),
            r[m_]()
        }
    }
    function fs() {
    }
    function _s(t) {
        this[lf] = t,
        this[w_] = t[n_],
        this[T_] = NL ? 8 : 5
    }
    function cs(t) {
        this[lf] = t,
        this.topCanvas = t[n_],
        this[T_] = NL ? 8 : 4,
        this._rotateHandleLength = NL ? 30 : 20
    }
    function us(t, i) {
        var e = new JL;
        return e[qr](Mi[tr](t, {
            x: i.x,
            y: i.y
        })),
        e.addPoint(Mi[tr](t, {
            x: i.x + i.width,
            y: i.y
        })),
        e[qr](Mi[tr](t, {
            x: i.x + i[Gr],
            y: i.y + i.height
        })),
        e[qr](Mi[tr](t, {
            x: i.x,
            y: i.y + i.height
        })),
        e
    }
    function ds(t) {
        t %= 2 * Math.PI;
        var i = Math[sh](t / sD);
        return 0 == i || 4 == i ? 'ew-resize' : 1 == i || 5 == i ? 'nwse-resize' : 2 == i || 6 == i ? 'ns-resize' : O_
    }
    function ls(e, n, s) {
        var r = i[P_],
        h = new UC.Rect(t[r_], t.pageYOffset, r.clientWidth - 2, r[Vf] - 2),
        a = e[o_],
        o = e[f_];
        n + a > h.x + h[Gr] && (n = h.x + h[Gr] - a),
        s + o > h.y + h.height && (s = h.y + h[Fr] - o),
        n < h.x && (n = h.x),
        s < h.y && (s = h.y),
        e[Gs][$f] = n + Wr,
        e[Gs][zf] = s + Wr
    }
    function vs(t, i, e, n, s) {
        this[I_] = t,
        this.type = S_,
        this[A_] = i,
        this[M_] = e,
        this[ah] = n,
        this.datas = s
    }
    function bs(t) {
        this._41 = {
        },
        this._in = t,
        this._in._1p.addListener(this._8b, this),
        this.currentMode = WC[k_]
    }
    function gs(t) {
        return t >= 10 && 20 > t
    }
    function ys(t) {
        return t == ED || t == TD
    }
    function ps() {
        var t = {
        },
        i = [
        ],
        e = 0,
        n = {
        },
        s = 0;
        this.graph.forEach(function (r) {
            if (this[L_](r))
            if (r instanceof PN) {
                var h = {
                    node: r,
                    id: r.id,
                    x: r.x,
                    y: r.y
                };
                this[C_] && this[C_](r, h),
                t[r.id] = h,
                i[or](h),
                e++
            } else if (r instanceof ON && !r.isLooped() && r[Ja] && r[Ka]) {
                var h = {
                    edge: r
                };
                n[r.id] = h,
                s++
            }
        }, this);
        var r = {
        };
        for (var h in n) {
            var a = n[h],
            o = a[Po],
            f = o[Ja],
            _ = o[Ka],
            c = f.id + qs + _.id,
            u = _.id + qs + f.id;
            if (t[f.id] && t[_.id] && !r[c] && !r[u]) {
                var d = t[f.id],
                l = t[_.id];
                a[R_] = d,
                a.to = l,
                r[c] = a,
                this.appendEdgeInfo && this.appendEdgeInfo(o, a)
            } else
            delete n[h],
            s--
        }
        return {
            nodesArray: i,
            nodes: t,
            nodeCount: e,
            edges: n,
            edgeCount: s,
            minEnergy: this[N_](e, s)
        }
    }
    function xs(t) {
        this.graph = t,
        this.currentMovingNodes = {
        }
    }
    function Es() {
        qL.lr(this, Es, arguments)
    }
    function ms(t, i, e, n, s) {
        n ? t[ro](function (n) {
            var r = n.otherNode(t);
            r != e && r._marker != s && i(r, t)
        }, this, !0)  : t[D_](function (n) {
            var r = n.toAgent;
            r != e && r._marker != s && i(r, t)
        })
    }
    var ws = '642006e5575928d91a372ba8c0b1eabea6db684e391b21b5cfe942acf635a5afae45681e31b693f07fd4f55ff75545e0a2ed4a77f7025ca29812d07f9e5e52c87989651e3dede97ff314d6571c1872f0221b19fe520b2fdb3bc19c095157d33973f5e456141587156672cf2cfa69f043ef7fdb309472bb62deae30c8d4c7c39509c116c89c725d6c9c54cf88ea0b56704f0dbd49397bb4b1616399d1ce0fbe32f3203929c7ab03c73ddf13e2c12959fda5d02490a6376da8dcbd9ef90a00208e54627c5e47a92069a19e763f1aaf0118a4cad6b264fb995f8ab4605e384aa875766b99af979f6d74035296644ae5504d79890225d34f36ba1a96cadc6f61f3a224ecd7309e557ab28737508959ca01ceac5a8621b0502ad6aac0b76f2f69e274d193761ac95cec2dd838b992b2f1a8652299204757c6d0b5e75bb1da7c5305fd88b1fe42e6a42d415270f75029360dfd92f26fc81082cf1a87f6075cf7f56924a2623e92a4c24ba56fb208372b986dc2072c58fe06867e958373b9dd23a9beb5390ed056b89f60943e8cf32d745f1328432c284852881be6ce71263ede66fe7a97612375f23f67eebe89b38602004aad7da169d9a24cd487ec0bdf3d4d033b7777406169fa0351e53e77e5d8060a930f7bcbf8c9e7a57a89dd21524e75e48df86645e460f97fe7f4524951b565b6b44c2ec918a86a828d5ff676d56652c7be9947f478df5b1bd0cddce668043806392fb61ee35a1a62e516f07520f7cde5e524f4e5447972250f4221064bafd4315bdf82cbde70474b1d2cd1d547d9d23e784c9d3118af3571dbc07c78ea9beddb8c2804f7b9c7eb2122f8039f2db8cae4599ee4da81ec82dba035248d95603a21fc3bd7498860f1ef84f05d1e675c7b72bca36eea58034774b0d4b89f40e0d5561444ce838c7c581b1ad4ed2df0bd7fb6a3cb1ea622496f042cc5f765b7696de0ee4decfccfe12c5b5d7c7d15a214a0d6348a895631cd01356f4ecc7fbe8b8da2e8a4b2bf05d6216334eb7c3076e9631b24c6aa15e18bf949125a0fb6a1709c8516b42d2c757dc41815171013bbbfee60fdf9de8ff5ff69327d26e164433055912fc419a9dca19225b0fc6d04c4ba3e80ecd74e96856e4bbcd2c9409d490758a0f4084c1dcbdd8f2504292d0999592f60618eaefb2703fdda81d8a344afd3c18d003e995b5b22515612ca185d2b5cc8917bdee86f6e0d6a3ece2ed76cda66d761b42e64ea00472efed18cc8d3df2132afd46e8b4682743d48e6bab0e19bca37e1fea6184a49cf75ada229c86fd8c10248cf0887738359fb4a4cd96c4e5d4c4e6035d66260f0d5716c94f6b099ae6e8439f85bbe07382e1cb38c5daa193599a4acc7f2e42e3b771f7ed2d53beec7a4f2edb7f9afb0692c71badaa5ff5b9c596f6e5a41aeb190b6503758f5565ae3baa76c7d51bf998faa8cf1854f94b347d8ffb6cdee93e4238d68e374f624a5f629f261c83e43b287a8051e1f6f6b9d1e227756941f835a2b9d6559388a1f04bd22109f8173004368546c3c74e973f2b6283afac1f89a60f62650baf6f6fd0f2d72330261f2a7f10351644dd16ce25f79c00a08574de4080fc1aad94fe6a5c92f3b10955c0492604ce2f8c87b269bc3071250e9da8ad44a5d1156e4ee4b361945939d1cdfc674ccce3a663d75270fd9b7480452e6601d527b1f7a9ed50e7cf0c5cd7811285a44a96f6b92df86bdb73047f2683e65ba421f282351998495c21d1144430cd1ec4d6d4751de6439cb9c449afdb49e06af063bb2e024c82d49817cc42d506f41b25e72f9b2eb11d639656459c8c257d6a724fa9cde4302a0056f3450f1ea8f22cb4b00076d30f5b0eb8bddbef0e51d59b8a63ced22ad99e9478455ee557b4de7d9a81e8776292e8fc8af729052ebf88ea27c719c3a4b364e4443f0c552f06918db1f845a1cafe28cee321d9be1c8d3ed5c8071fa359f2ddf213f166fb314742f43f31405c813dfa8db29a283969240b659460d7cf9bef6f7ff2f9e4362c7f51911c083b1824e57b02f285486e4258d99d2114f1351ae2947ae2c544ce7c250250e5b9c6fba2821ef295e59e4fea066e233567e4c0effb9a2657343339faf001cda7c1eb422b7cac1b4c531f73a7606924dc3ab747c28906dca95acc904b9be9b0cbfebd9e8bb0b0b7c7c3a57e4836856f2776f080069c310946fa72548f95cfe231d6520a81cc9be42012a59501f3c52cc66a364da70c20104510ffe55ef00088bbdca95a9f1233d31982218b0ee70102d917d7f18dd231fd673344e1c91f4065b4601334f57ad5147b6f2280c3c9107644dec1d653056377d860534a05553db413d3a28cfe9409b0c4c3d1af518e07d15d1d0d032913d7480981077f1b48660f4ed8ee190ee6bf50a15c56f96f7ea83951bf5e6922a22d94ae4f6169aa675f5e97b6524ac7d8efbabb92b5db444fdb4615eb7ad0bb7f9550531a1373c299372c2141f5367558167d82976d762c404ab3da415d7beb8c6952f095374fd1861e0de51b3e8f2e7a894edc764cfeb67895f443cdef786de794ff9f8235ba2815a85322631466e99ef0b637f3245f10f0d6b80674f64e0ce54804630604aaa11d8415940861141ebc88c4d918f05218802f551ec5d81535bb790b9bea678ee5cdd96cfa7c1ea2ee0f2008ab688d4688483f078c3cfae73d16a2413e64c90bafa0b2aa449c02db7ca12dff7ed5ed021a29556a0ea3baa3baf6d388a6c8ee97469896935165f594d6bf1b36cd3ec5630bc01c3b8c5bbf5aacbbf658895ccf7b3301518cdc5685e005884b8ebeded6c7970ca98d44fb3b950e8ada203a7ccaaeca7b616bab4f52754098f93d1d2faf1071c5669494a01f6e223154749011a738e23c02d8303d1b7e35f1d85fdcfc95abdf215172865ffc97d950f00c97615119d81d32bef504165c332bcc4010c91fcc0794cb079880d3c1f7c5c24ee3cfbfe5c982fc4cef9e4f2606fe2441a4b727d9e75b1eb75d884fe65842414f0b91dfbdcd5559b9c6e0b2c6511fcf1a724d4f9dd9ddc15500de8b293117c17c8306656d948649e9b9108fa57fa50b7ad637e9844b081529774a9a5854e5797980a27974b5088c4612bf3d302ec3194a3f4ed8f798290f78efd46ea1b32b82eeebf5e39b017838e767dbb5cf8773bd6eae3046e07fd3cbf265e983f3e4036ea41f10bed3b3a055953cc8fd0adfa249fc0887f643d2b617c63730bb3b98fbf4365df149157b3023f9d4c9f97bb2587cc5e3c00831c20b45b6b3e72a29ece0eef3eec641698a165055f215e947a1acca3af32cba66a9cd04c238d01fd8477dba9cf5a83ba4861e8ecae98e0d8a2c4a62606de5664f5add94315fb533a01e1a1a319b7f0b609784fd5f95d78a004a488f36ec85e5963557e7408157ec23c5409d793803d66713693b417aac57ecf7bc5ce3c4e51bb42b2b1264ba6bec82e08c2a5be6f2f2b89a613f7ceb464171fd7943b9a175f1cecc8348a1c73c5989280e587eba68250b15f3c14af5fd3dc4a8f234bfcd80888e08082d5a58b0d9a0630f30c3d4438db8e52d4de95627d6dff51e9899f825fd49d840146f719d068d7897f14883d10eddb7f9e97d8a1382b63e3ab23dff3d144217997e2489f3c8bf4304ebee541a492d105d84cb72876dfe61a44850d4a113bea88ab60e90bb8ff9ea9643d684d8995dac7c24f8c025db4ad0605ad4eae18955b2ca4a782c5785a667ea035a028f084a48ab73b6786eeed35de076bcf819e9cb503da748257aa87901aa12f2fe94d0e14992cdaecefca3e5e9b4b2b24ee0aec271c5488440c2b9079d9eae723445408a6aceca604d616b5e22598c07880b818c81e07fa354c188a00ae0cd0d52727879c491ae8576e8f9bce97ccfd5657f13698ba25c687d2f1497616bf235967fce3ee2305f10d60865c0e02d210a89474e6a9be5af913b9bcebc447cd286ec321b635483125947904cb0ef2f1582cf0686fc61528b6919b65fd5a27001af2838ada1c849a82857dde3bafc8bdcca99c863df609b6da138a0c247b7c655c1385dbb828ef871f6114c868dfc756acde6ba5c58925b20c778eb1f083aa82e64e1d36c7886f9c02ab7e26aa2d35582f377fe697fa79d06ab1ec5856e89557234e71e924db1aade413254cef35d95971faa9c9dfb1e3d79fe804c9f382728f40e59fac881ca6f916529a888cb647584f523372f28073a56a22a600a88c8fec7f7c786a4569e0a8e0d1a76f8a22725898c0d6dc72aed2b87c1ac7e4be1118d4c5e4600815c1b5e7a95ea3d13fdffb64beea72d4ab0c1d87648083c6855964b2bd1b8b899aab407eac109a6edf635fb0f0eb751bb6078223479527087a0373908bb18fa4a4f4c83cf40522b8c2d2cb97a993523247786ca1bf9e68b691ead379e7e5831f05c93f1b48e1a31456babfdbbbf25b471db1ffca769b1e0aebc317b1450988a240786512c016e881579084b4cd35631780ec3e72236a8c1ffa5094dbe9ee300e99edc7bcc93cfef94cd0e3e7ba19f9e6552b7d1c4bae068ef28c25ca259da26f6a987b7241cbc1e024168ad747af3615627d2cd8431aea36dfca2ab2d236e0e895deaa756f21279f2d0f8e1244eebc07861900d572c8d66ac47eed624709469fa5ed92d2649aa691251b8b2e0cde28fb00fe5622a803cf02e69b37db156c4b65c34381900ec289afcb0bf5cde7b8d6d16755bb18028ca81215c36a973a7a77382444d3e204fc7bc33933b00953d7ce71bb1c94fb0b20f94ef24237e7ba6cc37dccb7abfe5bded3e2736eead7d510e5e04bcf6f005392329eb07ed4f0326c6769984626ca5f87e2f5bef192c87db9a930a052e498765f2ed4bd9337089e8eb39f34bac021e87679802776a3edfd660692704dc5c55ef99c01531424e49f8f583cb628f435c83ee02296cd0e11222d8f9144d12a165dbe96dbcd88c99904006fcbb7ad39dd0182bff99f354966713941382d50f17883f59f46227c58dda905cedeadfa2d1f966a6b73f2209c1f8a9dbaa63da16fa2433e11afeb8d6fa9e99855d7d8f97ddea7d0a68e149b8ed1ef9ad91590af9088747f8291018e377200a0e2ca62b525939985049f767a60f7816c89f035d94c6b22a1eecd93a8859eb711b742364b8c0e8b1b20a8adabecc54a7e9a81595efb14c94571d737f15171f440613779a83a0e59cbae2b10fa0089e6683eda6a54a806fff043287351c89c70c6e661de04f4f441ad47376c17ea41d6d387391704424501d58fde0137331e98ae9c3de8ddf74ffd22b16a01082c07f17c9cc81c4d8426df3d97cb1f1f23546e2b2c49a65dab7a3bb3b09ceec49686b42d781850521eed4294c00b735801321313cb346939304db3d85b705bc4657aebdd49aa201a3bc768e5ee00636757de90469055e5d47dcc2ea451469e6ddea18cbbbc5fa2ed86a08b69550ebc864550dccbc29d3332da5c5cd77b754013bcfee34732fec16a5dffc345e8461d9fd8356729f0187c4e977b9a68f3e3bcd2ae54bae06ac07b6e0e90d9acc81080027ca2881be39a83fa04b7381d5244d0388e28ea327996431324bef33cfa51d31a95cdf1c6255f92bd315303cb8b1182ec651c14f8f27d572e06b5f24b32dd6f79b3823a5cfbd19327dc3aa84c969daf6f7420d7d209fabc814a37756025aaa8f70fa92f6240477570056efd8ef3e67a042e0a41e4391c3a577ef6128e750ba8872f7d6e8ef57f176207f0a4ee1d021581e28bc242bf7dc7b4fe8a70f05665900e4154342a14a27e12ba00c6f4be10a9a2d1092aecc7ef00c05aed609361d48202b46102194e2ef8c64e9ba7fcf259ae5cc8618ae71c2b8c51e806052787ea106e6096231b62857aa956f9eca52f24eb8996dd6c66ccbc253831c9997ce3b20f1a6bda4bb56fc336bec6b535be7722973ebab73414c85be4018e6cfdbcd5910be8c87b75387b739e2ddc8cdd4494219c3334a0bde5d624f77b9e81c4fecb17f90ef323a9c287024e019805a1204aacf50139e5763b113394ae0294aa9a2f94bbfd1edf72b54372c764cb7dc1ceca98e545950b85e7c3375f40a8a74d34d06a515efbfaba3a5d1506eeb8045a64deb52afe5e5fb48f20be8af1a59dd20cca837cdae765a99f8b71b5b2e2ffaac523525caf5d4e14ac3a9f16b4d32300759bd8f6fe21e22ef68bffa68cda189387263b50a2219919f1872add8ecc3d89c715613c9513724a2043e9ff2bb0a018382105ba54e35dd7d9b4f72525b263a1d43f887c72b40875c6ac1dbdf25dd1c69c8fc2d37d4d1ff98cbe82ade7c7ea590c5d0b98847f66f33e3b3fbd4ca740ec613743b22645d8d6ce5af635aee242ecb848c91fbdd9ea650c1576cd4336e0006ae22ecca02327c521a8109fbba81f2cb9194d5112350747789b9aa716e0ebe541e58d2c37ba8d4bbc47e2b505db33c09a4ec38d035b0827afc5a2e072f2a84f463fbea4f5e9cc4765806f4e6e8e4a43200af3373a37cfff2cb3398decd1d1398abddeb232512904b30efd79f931ad6829eca6bac350426a5086aca40b530ec1a8d1431f2678793f00547d8174569d75c2f53702ca486c02c158125a0fda04f6897037e19e5b4926222ae82f6aeb13e00d497fe09fac1e9cf80d21ccb61d2883c330177704f99a93548ffe127a264cb7d6b04f5ab642e4c3bf46d53b285f8d0cd0632d0ec5d19efcb2613ef00781fb484bebd40e1d476259d8601a3c4ecaa66d903ecb96cbaf326e45657638b9ed99456dec9a7f937e0ba098cbd43627791bc868e7ece0f0c2539347c58ce246d200a9793c131a45587342cd56d2973f60797ff8896cd5e592907fa9337f96c4c013a40055850d4e108e0dbc01c8d8f0cbab351cf0ef49a2e8c0207944e216fe8169c3eb9d015da79e3a3341ca9a0a5f6054995b6e85ac8adde8da6c1290c456b380c4bf7fcd63260a33bae07246b56f9f14979f0471a2f835fc64bb2cfa8c58954751203d36109122c641437da0339cc5882d6e2411e3ebd55be4390d33329119610909d1930755d0f459cf2045ccdbcd1a148e6b522cc428cd0d956120effa50e4edd122b579567077615fe78015b5f9388db16599d36ad66045a03ce6657cf1de9799ba9ebb30690e4c0ba0fe48dd2236adb64db4d0d2226695ad7d0501b16eb256d3a1db01d3cfca3683638f203c14c5b0ea7da2dbacb58055d497855c561ed5b66b18403cb1145cf2404a93983ce5948e0a97a40ccd3212864bbb5b6cb0b99ebd457bd69db2988c0684d792277795cfd937b885e6e11b69b9f00f21c0b82dc7e0071da88600968913db177faf05d4205b8197f1270f3c6cb66a19f50549f67b4ac69bb3ea4a8eb67d966cd81c79c928a1bfe54d69e836cb302d816be03cb134c6af3c9f479a53b6b07f470f6ccf612512d9025cde0883a9e644d25d8f067d938b2fd2d605434fb5d6ad1a12747301da4298044396d709fa445c48d460f401242879660f31655284b33a30f164de357c46c91a2e30c634f77bf2ab307e5ac37e902646f98e781389282b60084a0099d9ad84d4633d1589798df3b359eff35994a58c73ffb6b0695f53bbee683f0592904a1d5c614f7281e7ac5e3a1cafaad846a92736396b05a2505bc4cde57a5909b2e97c47887237aa3b94edbbab293c0c0be21732352f64f8d0004bdc513cacdcefbd27e5b63a81a3d11bc680139943a1361705d507ff3db8d2023b67c6f21f396f88f34adaffb65c66d43b6c464810d8b8636f2dc8b294605534d56d095bbdd96c03124dd1ccb194e6931dd141ea01ada4c814110b2b3bccd572f7d41b7ecbfb880db1ab12618a92a18d8a91c3e148ea593081e6e7f18d3f2b0d52f1b7df2e694b4c9d7f74c472973fac24e3bbbe58590aea601719baf7ac8ea54eb78ce94504d68b1bc3457ee24565742ee3c29b8eb5d0f5d20957a39d7b77946a893238f3f77205a116604bf6a4a41bf88cfa345eedce0cb663267d1fecdda8ac9345734650074b8ca44f2a5b6def13efaf5475868640c2abb5e565ea8ce16c312ea5f54255012926ae91d298f635830fa3e23a031321a52c9dfe59cc53370d2bcbd0e91f26013e132e89bf780181868e4946c47a948e59b61f0d69a7f52527ce0e451640630971a941cfa12490737d70fd775a2c59282d2a36ba26df9edae10b5691897454ba9ceaf18c04e739a3eacf61486f6a57dfe872e78df1af5f9822295986bbde45727f50fb10d55045e232b157fdbb8a095467d369dbdd9444ef18b6d90aa13cc67bdab84358cba7fbf2e6f267a61a17005d8447ad4f1de5b730732bac174e2425fd7b666f6f379a19dab7ac3473db01dffd90a993e22c890ef8fb70ec1280cdefca0a70825d6e1272abd65e8fd2cb52bc619551955d3d9b90473b2483fbd62e5434cf521f4d6210db5d9e5161696fb8570677eadf97fb50f637721b5e5976aa5713321a5cd46dd603d8bd2745fc430339dff0c6c6f7863aa1e2ffbba52053ea1a6b45372a46b2e44dc499ea829d04a4fe2952f8a1a1e888453c08a9f12309d2a8cc67795726bfd5d5b37e18f406919804e446533d28dd461f73af6fdd2043e2aecec3e9528b77bd6d84926df63a8f7fd6fcfdb21b9af158326e9521bab01df006caccb1eb0419964fe3a34cf1b99f4cafd52f36d4279a3f8bf270fc39d2a6dae82cea66e701a26cae89dfdf8f647c57141be0b31389b2b703d4f377c0de7cbd117ac82db4a84b3517c207a7fa3380c25727af2024e231dee265913b6bbb6b70eb0e3df2ee066e6b4d6908a29922de776ec0aeef5bcef355a9a76ac96e125b8bf79473a0831fb348eb4979350721cf931362ca06f3a4e49625f91198bcb9ecae0d0332f2e67507597749bf775f0062ec08b6a4ff21a245ac5d2ce3b08590cdd9b31474e607208a2c8bc2ba1a393fd09d1209c84b134cfc026e7a1ad064457c53a29b2aca6c226f647f40921c17afff676616cc4003fdecd6f43014a4f5a23af3a4bae67d3e9d35b55bd12a8ab071f498507b51c4a6df4d30cad4433511a135c30611faca91566cac3118f15d948bf3d134d425ce7514e231e7a08089a953f68d8349f3df8e7338b3dbc78caddf89399eab5b3770701a9d62694083650957a41c135da3b9fb2eb1f03340e44612ec30a7feae3b15efe8230897a547cba14827022caa812f67d104a9a144c9ecf0846537f9bae441f6367d29755088db84d9b1c7a8ea0200098d20b3768f0e2145a6ea8ebccb246ff47aee4130605b38464b0c9fd2acf811cec4d8dbfc30658a938c8561c8ee62c010a0827717eb7214f915516ce142410e8467e2a8fbd6f4a0ff8918c6bece65539fb2ef60a9c90d9f7040daf267ddf6fa02b5116f8675402a3aa380204db7f0758630194bee0132a40758eba0c93ecb35a535acac483bfce58f341901494c508d5053866eb614630e3d56d4dc5e31b8b0e3fc8ad653590a83fc39287963b1fb99cb2d1a1fee3434018efd8b0eaf8c7cd77a2c7c06ae2082e5b0898f7c5df0fe5296dce0d7511c0189d078695eb18be01c112c1da4ce5cd2b81bee62ecc0c5bde939c9bc6e60d10bb5c72a808c0c74d6f4f542ba86f38f15597edc90c215a3820fe5a247224903b427ae4c98201ef80ab283c4c4c4422fa1df8595744862b2e0587f29841adf03e239ac97556e209c3f9ce5173b64ac174b172444d7621f884f7a5ad674e254af79baa32fc9c071fff1e6b552493347665c991e7cd5c8fc66487c6aacdbbf6576fd2d830a69160930f515114d62a7aca8a90fb0c138531b1d1e239e7dd68b7956b834847a674ba41d6f278852878010d8e3abc3f36512e309aba58a9ead5b3433db23bd94929f2b69ee26c44cd97ae6892f9ed75120fe8424bebd33edbdd6742b19805c6bac9a6bc6de4e4d723ee143b4a96779150698236a2cecb7870119ef164004367485bfe39ccf6e8ffc5e5faa786033fde891a82aa0854fca50753f1cb5329f6af08cee0e44c3ed87805cfba5866ba044fae05b2a365d8cfc988b5ec6fb68b2fee54c6a0399a79f6e0a0b42afb5856ca174f8854efe72f5058d89a09005f0d0075273c8ef8cfe3c9b0472b917ad849f534963f9e957999ab875c449581d0e4aae31541826938edf23db556e86d9e86806c126c5cc7e4504601b0b6d6a94bfe0751511ee92f6502722f086a04eaa577fa6579f71e37035dd43b845f0098efb2b07b0615da3101d7a7ff476133166cddafdd155ee856970253a5d6042e9c816a3010ca7a0c2c6bf716b0a3d93cdb44d6432ca6a868db1b2d396ab8ac94fd4d7f0d9c342f6fa36d53c10befbe8fd24ec37951235e2209ebead49518637880b465221033cae16bccef361a56d0cf09da7895e8a2d57f595bf44545ebe0c358330e5d7d24a280ac3322baf13548c7ca822bef1b0645c78fa1848c921a465f4835ad7836521de829e051363b60678c4e416e64c22587ed0155c1992255bd0dd92d3bb53242d83e352554c9565e1984237d07ddc693ede00f34e6b01fe473d1b2a90c7ba491f778b3aa7bd6710fee98e3d811c536e1dd5845786aa0a4376c2431c52dc1aa824144e95dbe3c1fe60e4eaf6322e7b256389fde461b44a716727e89630c2bf732e4d7c3298312a08bcac74ee7f359823cb206728fb2eb8154b5a63d1f736cecef8d78f5bd4990243b0469da9dc5b8c696256e4c4c447efe0cabc9c2ca3c9c314d40459f8a566a13498ea69b4e37069b4b00773e9f8fa1f0706a07d575e51a6b23ec9672fabfeac2264ff1f154194ecfa2da76a0c91168642100bff1bcc4e5f77a6f2bbf3c6fa210e33819c16e770e4e8d81906dc2ec677b1eb0a404446f0110f67f2d4feda8a09bb3ec534b9738ef199543329b9902f70a91e03013ce8a9a7e32c4eb2ecd1c753a2d44489c9f61e604ea5a656e21ea1da1ad6bd95757709c251d48abf8bee438fdad63bb4d6a05214f3b9b4e690171c72fb6ceae2f6e85ba7845fce549b2aec67fa8bc8f43a469ad1313389d95e010c5a0ef43d934cff3a2fb150e422b22f821f65e3be82fa08ab83a77e45465682c5520d2d99e7275f738df911fc55dc68102b1c4aeaa742e1d1f27352831b5f9e53cfc62fe80aeeb7154f785d9fb4f850bee1b737270969263c87b1feea065920f5d8dfca7ed6014e143ece89bce2e9e1cada4a2465f1912fd7b4c4371a3edeb8b811efcf9dccfda039e03e8454b4785e6f7a22a538863ce01cd7151f52e3fbdfd3bbf5122030a78d689c6766499238feff5046ca4e88f7847c376c4e36e56970da11f39e8810509f866d7334733f8339eb2c4ba34170a4f6589d4679e9169ff3811944c06bba3e258ded412692d1b7c07044225b5736db98bc83f37256dd6c51593d4f01f3eb5f03076d55d36017a601e1903a2bd103c5d29d78ed9a961819815854d3194c628da494b43418ed56debae3f7f5c6764fe7d9b10cd52c6e40b8cf8e8f82d361c2e948d2a5d2576d2a3950ad572ddc9c87721e25420049b75f07ea3e32b94a652ba7fa55805e02b0d3e44c3322bf9412b721ba5eb676d4d971b84a27d2b262d07a7d1dc3100863b0beb2c0ec2dfdda14c96851ba27d0b76d4eafc55d46a8da897eb61b8a448df07ed088f9224a9461ae774b82cc71370343b1d08082168a08819f27c161e262993857650b7df9c889c3f82fcb6510ca87631042517c365902abac16f9f16eb4c843f4463645c983d1e566df0471cd6f7ba50fea94c8f1fe23c421776ca95f51888c3275d164b9854eebc0d1c8603420460dcb80d976f8cb4a0f526715f9be49dc58fe31059122e35f1e2e72f5c13bf6ac92cb178b0e70b14617ab055b0a48fe5cf5e1c31ea69a74f72a518f56906659f07c115131ca7536f57e7b70e6bcf93e83b1c95d62900363ae048f65bdac7498c47378a86885028e5a15efce5f1795b81d16386ebe67c0367db091842ca620f86ed01bec362728b7cf185ac4f04ff5017a28269f38d3abfd84584107a17ea156538b456db99afeaea57836036caee4443e1128dcafbd1ebc54f0daf74278ce060ddef3080dc91da6ff6df61baae64e1fee5c57082a193d2df4bca7d4c57313bcba3cbb7f96d46069904a489b30b8289aee7064fbb75413a1c963749cc52b7f6722d8049bf7b2441c23525d18a8691cec8567729c8eef8ff8402000fa17dc03443e00f0220c887eeb85be4131c19c160d9089f44972376b8de4b449d66ea10d4ebe64b13e2ece8958b3d6506aa3829442637eca8aed01652fa534a9970e626ab910a13117370ab0b3bb885fc88ed31aeddf8324f83b1c8d3acaed96ff69169e8f424940fd135445da8e0ee2d20e0e0b1995795714b8d52596a704c34c8ed9563b8f879e0579a5cac26bf8aa1d6bcbe8237acec6bc1457afc8a10dc5af368443b7b767954877bd7535df9ce40739dd450a91d36c66e4d6b6a344d18d47dbfcaa11d72818c03d059bca81e89894e972e1c9b7070ee9dc586f19ea37d048b05ef23aaecb2a45ed2b00d6c80f8b5f936633ab3683e0075ecea88f9fc976e589681489a295a5241b25dc730d7fde82f912e54c1119562c386f860bf2b8732f1e375f765e219c9b15620b960f57735250857c09da9b11b507364da28932597f3c9e2bd8fe2e8d429efb7e066c48b428ef3bc07bbea64d310c8ffc8261bd98da72415fa742046b5678e55cf857d368c8a11c97d7c4d2c2095792c1d9f68e36e97de732dacbb70262cbe0a8da5e67fc514659a87622a3e0cbd99737a99de5bc78c13c07d8098af9fa18870f017f99d62e1d2bafbb3ac47bb29193af756e1fdaa579a75965ed8c6862d573ca577cd1469d48162dd9d6a4b68f9beb02a985ecca4fecbc9ded008e3b6b5e558a691168910d571dd30b27d896587682ceba6c0d5b78961842020332a00ccd8b65928716662da130eeed4ea5b6ce1e16f90360a1d7a6bc2c5ff6dfd214635a06becd21f71df744fd9d8b21db4e4c7aa6a0afc9906a2f6f184d3852ebde095327f62910486084b690492dfa29d9ce05dbfcdf9bfd6b78ee97a0894053ff7a753d170b19fbb38fbade3bb420a2e87f77511686149ecc67ef7e87277f8ae69220cbd663e38e62c38daced401f1869ae1131d9d3fc99b0bcd603287bd60602ab4af2604988917ee8a1f7ed0e24e2c0a56e5dfb32032a236b25288073fbd8322f74aeb9c02b631e9c7f6c2f95a3d37166a18766baa809a7797c501ed215fdf38024e437be9c41db23c31928fb07025e246b8d7897fd0f942a977ca5715ae5e5186c49a1d580894a7e170d8a25cc3ecd14a76ea20b49e829cabbcaaf3e339d736417a19b09d0c0e0b6fc75144743caeeb35900a3e48837e6184b89b2991879e2c560704ea34005bb73987996d5fefab898d9803149c720abcf58260b603ea31571d8efaa91ae52f51e24e356cf5686a6d5ecc2b359872210c2fbcba0f7757fc6e93a9532fce9a68aa1662662450753ad3530332e279c6501c4c175a99320048f0dd1bd0a21b54ab4adcb2dc1140cf0ceb6b76fbcf7a9a8a1d1cd3d7aff8ca9c7eb3e81e863cefeec3c84515a2f5dd2a5f040f38ae3ea0c3994c110ae273ba6b5723bb721233e1d4edb235667e66fba4c81d4c95dfad964944b91356d289d5b4df8752f138bba338b115fd118d4f4e812bebb7236f97ab470a8cc3724b7ae86b1ac25d273ba7ce3fc9b55f7ef0ba62b9de0be69b6f40b95ed5a33cbf4e8c7240ac00b4a63265854cb8f85940d96dd8b1bce6c0e52a47dfa961e83217cb453dbd5904e0df101a9318f186f4dabe490db5b99a34ebacfa2fd00c9ebfa6003f6ae515b0d207a52ce49e7a75a66ef984abb7c36fc5f4ec3406d66eadc4bd18aa34328ec375d84e04cae5e92849a3f1c0c5747e4091755eaabaf9f6f47b5958c9c3f3625e5621001eaa5798863bef67b77a26ae5d4ded6edf285a8839f416712bd75c2b2692885b53c0ed0c8f446c9c8153d432bd3342dd0cfd981e019b038561143f9dace3b0653f385a5349fcebaaaa48a2d8a1eb0b224f10be019c52d5f8085b15e371dba9b37e85b6e07edfe2c59e9a899f3efcdbf2719f7534e84f95458b5693a3d08ae060eed4361385a6e64a6d4e1740d4b06c32567eb063c77a90e93d6fce91f0e0e8d9ca156108b108f3926141916696ad09e800a3ee839159dd742b3fcaea8f728d5986ece8ffd859ef763607ebce8ca2797e1e9cb001b45159f8498c5965bbe301ef83544489686a2bfd1e91a231080fadf4e1e6d75c357153ee3542f76974e5011281b11e07c397ca6162ff55239634294f88e55d73a7f72370cf87317a0847fae678113b3c3a77f9f5ac75410dd23f96ed5d8dcea12859a685e8b8883ef211703952a6c33c47705e815ac7f27c1369df22b0b49819fb47bb673fc685b043c31d415ba4d0654c8370b0fd900751d669cd74eac6bbe37b59b76fd001e15de0c368a09a20dc7631c2811639acd3bca8ebbd6fe8e4c94f28f47f23e020022de07d1230e122b206af4a43644b92a0bb10e640055af7af52733fe273953e539a030347b086e760ef1cceebb78faac7e4ec520bcb107a513f08ca6ef3659df27d32519cca15850a483e24fc8d9a0d88df5ed76ffebb856734300331abf623ac851f480c8b6439405c6064d5f65acb10f83d106b91525b95a37701ceac5f296b792377552e0c51f6c44854cc3267bfdd6b685d85e941c9709037be390efdfec6b921f7bd05d202990603b5502973c03f63b3c9dd01ccb025c586e1b3b024b0f0ed868f9ba09a65168b7e8254c7c44853f0621e622c525d2f0b30546508d4c8f7b396b30d477db7eb608f41008fdaf9cb56c80841b0e75038b2c269c8b5a4b5eb1f7d5ce6003553f726a62bb57e0fec66d9f8b83dd299b7113406c086450d4b4fdd9d112a87e16681470c7322400c0bffa315677f0331eba6dd98e39d6954d22c5f178f8ff52305e4edc8320063906d536d819c49c72c07254de4193a106e331dbdde681f6fd3f1c451b4d7b7da6f34d4b661c58a15d7d9fe578eec33b162dcfd49d1d8a966ad2d1e9c6fea8e91e21c9cd3ffa5f63f016343779476d6696d2ce9707c7800d56d71adbc57670e646a2d9146d6d47667cf3856d4f5e80b2ee00096506d1b34669e8cfcc641b10d3a98b61e7154224c31c013d420457b9ede34e900f38aec9e9ac16ca701dd29075b2abfc0f5559b374e74d05e43bce072559968e3ea3001359a2fa031f6536447a0c43fd4bff12a653464f1a3c2c8cae3aec6903d5d1f333fd2becd3d5cb991fbbcff48be3b55c2bc48b64a546bbd64103440f7e67544773650b0beda84a7bebd5bfea9cbe104226dca09aaa1aa222a9af93057c3710764a6ed96509d9546f0d0150e2c622321b9b2d0422d4709869233eb37f052d452ab3ebc3be42db6e6d9776632990d7b8a83bacbc82966660376364d8259e29781c705d3a722bbd0986eda9cb09f88612c9e4d78df2ca16756a2798af1287ae6ab98f3a5fdd2f97f5cff3a43a70f53d3ad90c453d4be08fd32bf84cb8b9b1677d65d612923bb139959bcccea703596029c30b21217996ce67ade32d4e942e95113d9dbea7076c15940316a90efadf2c575b69312ade41f4930e711feacaae27cfecdaff2a8c3ff11ee3561a0f7c1952d2162c7b1f446ad85ece79bcaeb7e7ab3f0dc02f513c1757c16cf0d635a023ff385c4d466305dcebf5855bd7beb2262356c2c7d5445b11820b05a90b03ce25fc3338a98e983bc40084bf9e8308cdd94f8d4023376f218055653ccee9fba5ad342a8a069cf9e9d7e9135367738d0b6929f631ec4c0994fee62e69c30eb05926f6f2c1ef76a2d717fefa3134b6382218a8d1be9e83556522b1f628ad552b95e5acd434676bffd798be38558deaff1dc782690e6be16241077ac8c6892fca0362774d0114bfa207cd296eea5a59c211f6f1b68e8674d0ebef9ce18c22dccb2084f6181468be81c4dc041e2459',
    Ts = '[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]';
    !function (t) {
        function i(t, i) {
            for (var e = '', n = 0; n < i.length; n++)
            e += i.charCodeAt(n) .toString();
            var s = Math.floor(e.length / 5),
            r = parseInt(e.charAt(s) + e.charAt(2 * s) + e.charAt(3 * s) + e.charAt(4 * s) + e.charAt(5 * s)),
            h = Math.round(i.length / 2),
            a = Math.pow(2, 31) - 1,
            o = parseInt(t.substring(t.length - 8, t.length), 16);
            for (t = t.substring(0, t.length - 8), e += o; e.length > 10; )
            e = (parseInt(e.substring(0, 10)) + parseInt(e.substring(10, e.length))) .toString();
            e = (r * e + h) % a;
            for (var f = '', _ = '', n = 0; n < t.length; n += 2)
            f = parseInt(parseInt(t.substring(n, n + 2), 16) ^ Math.floor(255 * (e / a))),
            _ += String.fromCharCode(f),
            e = (r * e + h) % a;
            return _
        }
        t = i(t, 'QUNEE'),
        Ts = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93));
        console.log(Ts);

    }(ws);
    var Os = Ts[0],
    Ps = Ts[1],
    Is = Ts[2],
    Ss = Ts[3],
    As = Ts[4] + Ts[5],
    Ms = Ts[6],
    ks = Ts[7],
    Ls = Ts[8],
    Cs = Ts[9],
    Rs = Ts[10],
    Ns = Ts[11],
    Ds = Ts[12] + Ts[13] + Ts[14] + Ts[15] + Ts[16],
    Bs = Ts[17],
    js = Ts[18],
    $s = Ts[19],
    Gs = Ts[20],
    Fs = Ts[21] + Ts[22],
    qs = Ts[23],
    zs = Ts[24] + Ts[25] + Ts[26],
    Ys = Ts[24] + Ts[27] + Ts[28],
    Hs = Ts[29] + Ts[13] + Ts[14],
    Us = Ts[30] + Ts[31] + Ts[32],
    Ws = Ts[33],
    Vs = Ts[34] + Ts[35] + Ts[36],
    Xs = Ts[37] + Ts[23] + Ts[38],
    Ks = Ts[39],
    Zs = Ts[40],
    Js = Ts[41],
    Qs = Ts[42],
    tr = Ts[43],
    ir = Ts[44] + Ts[45] + Ts[46],
    er = Ts[44] + Ts[25] + Ts[26] + Ts[47] + Ts[48] + Ts[49] + Ts[50] + Ts[25] + Ts[51],
    nr = Ts[44] + Ts[52],
    sr = Ts[44] + Ts[53] + Ts[48] + Ts[49] + Ts[50] + Ts[25] + Ts[51],
    rr = Ts[54],
    hr = Ts[55],
    ar = Ts[56] + Ts[57] + Ts[58] + Ts[57] + Ts[59] + Ts[57] + Ts[60],
    or = Ts[61],
    fr = Ts[62] + Ts[63],
    _r = Ts[62] + Ts[64],
    cr = Ts[65] + Ts[64],
    ur = Ts[66],
    dr = Ts[65] + Ts[63],
    lr = Ts[67],
    vr = Ts[68],
    br = Ts[69],
    gr = Ts[70] + Ts[71] + Ts[72],
    yr = Ts[73],
    pr = Ts[12],
    xr = Ts[74],
    Er = Ts[75] + Ts[63],
    mr = Ts[75] + Ts[64],
    wr = Ts[76],
    Tr = Ts[77] + Ts[78] + Ts[79],
    Or = Ts[80] + Ts[78] + Ts[79],
    Pr = Ts[81],
    Ir = Ts[82] + Ts[83],
    Sr = Ts[84],
    Ar = Ts[85] + Ts[83] + Ts[19] + Ts[86] + Ts[19] + Ts[87] + Ts[0],
    Mr = Ts[82] + Ts[21] + Ts[88],
    kr = Ts[89] + Ts[90] + Ts[91],
    Lr = Ts[92],
    Cr = Ts[93] + Ts[70] + Ts[94],
    Rr = Ts[95],
    Nr = Ts[96],
    Dr = Ts[97],
    Br = Ts[98] + Ts[71] + Ts[99],
    jr = Ts[100],
    $r = Ts[85] + Ts[101] + Ts[19] + Ts[87],
    Gr = Ts[102],
    Fr = Ts[103],
    qr = Ts[104] + Ts[27] + Ts[105],
    zr = Ts[106] + Ts[47] + Ts[107] + Ts[71] + Ts[108] + Ts[27] + Ts[109] + Ts[110] + Ts[111],
    Yr = Ts[112] + Ts[47] + Ts[107] + Ts[71] + Ts[108] + Ts[27] + Ts[109] + Ts[110] + Ts[111],
    Hr = Ts[113] + Ts[47] + Ts[107] + Ts[71] + Ts[108] + Ts[27] + Ts[109] + Ts[110] + Ts[111],
    Ur = Ts[114] + Ts[71] + Ts[108] + Ts[27] + Ts[109] + Ts[110] + Ts[111],
    Wr = Ts[115],
    Vr = Ts[116],
    Xr = Ts[117] + Ts[21] + Ts[22],
    Kr = Ts[67] + Ts[110] + Ts[118],
    Zr = Ts[119],
    Jr = Ts[120],
    Qr = Ts[121],
    th = Ts[104],
    ih = Ts[122],
    eh = Ts[123],
    nh = Ts[124],
    sh = Ts[125],
    rh = Ts[126] + Ts[27] + Ts[105] + Ts[127] + Ts[128] + Ts[71] + Ts[129],
    hh = Ts[130],
    ah = Ts[131],
    oh = Ts[132] + Ts[133] + Ts[134],
    fh = Ts[126] + Ts[27] + Ts[105] + Ts[127] + Ts[128] + Ts[27] + Ts[135],
    _h = Ts[136] + Ts[27] + Ts[105],
    ch = Ts[137],
    uh = Ts[138],
    dh = Ts[139],
    lh = Ts[57] + Ts[140] + Ts[141] + Ts[142] + Ts[27] + Ts[105],
    vh = Ts[44] + Ts[127] + Ts[143] + Ts[45] + Ts[46],
    bh = Ts[87],
    gh = Ts[144],
    yh = Ts[145],
    ph = Ts[146],
    xh = Ts[147],
    Eh = Ts[148],
    mh = Ts[149] + Ts[57] + Ts[150],
    wh = Ts[149] + Ts[57] + Ts[150] + Ts[57] + Ts[151],
    Th = Ts[149] + Ts[57] + Ts[150] + Ts[57] + Ts[152] + Ts[57] + Ts[153],
    Oh = Ts[149] + Ts[57] + Ts[150] + Ts[57] + Ts[154],
    Ph = Ts[155],
    Ih = Ts[149] + Ts[57] + Ts[150] + Ts[57] + Ts[156],
    Sh = Ts[149] + Ts[57] + Ts[150] + Ts[57] + Ts[157],
    Ah = Ts[158] + Ts[127] + Ts[143] + Ts[45] + Ts[46],
    Mh = Ts[159],
    kh = Ts[160],
    Lh = Ts[161],
    Ch = Ts[162],
    Rh = Ts[163],
    Nh = Ts[164],
    Dh = Ts[165] + Ts[27] + Ts[135],
    Bh = Ts[42] + Ts[166] + Ts[47] + Ts[48] + Ts[15] + Ts[167] + Ts[27] + Ts[105],
    jh = Ts[42] + Ts[138],
    $h = Ts[42] + Ts[168] + Ts[63],
    Gh = Ts[42] + Ts[168] + Ts[64],
    Fh = Ts[42] + Ts[169],
    qh = Ts[170] + Ts[171] + Ts[110] + Ts[172],
    zh = Ts[42] + Ts[173] + Ts[71] + Ts[174],
    Yh = Ts[42] + Ts[173] + Ts[15] + Ts[167] + Ts[27] + Ts[105],
    Hh = Ts[175],
    Uh = Ts[42] + Ts[176],
    Wh = Ts[42] + Ts[177] + Ts[133] + Ts[134],
    Vh = Ts[178] + Ts[179] + Ts[180],
    Xh = Ts[181] + Ts[179] + Ts[180],
    Kh = Ts[42] + Ts[182],
    Zh = Ts[42] + Ts[182] + Ts[110] + Ts[183],
    Jh = Ts[42] + Ts[177] + Ts[63],
    Qh = Ts[42] + Ts[177] + Ts[64],
    ta = Ts[44] + Ts[110] + Ts[118],
    ia = Ts[117],
    ea = Ts[166] + Ts[47] + Ts[48] + Ts[27] + Ts[135],
    na = Ts[42] + Ts[131],
    sa = Ts[42] + Ts[173] + Ts[110] + Ts[172],
    ra = Ts[132] + Ts[45] + Ts[184],
    ha = Ts[117] + Ts[31] + Ts[185] + Ts[45] + Ts[184],
    aa = Ts[106] + Ts[45] + Ts[184],
    oa = Ts[186] + Ts[31] + Ts[185] + Ts[45] + Ts[184],
    fa = Ts[106] + Ts[45] + Ts[184] + Ts[90] + Ts[187],
    _a = Ts[186] + Ts[31] + Ts[185] + Ts[45] + Ts[184] + Ts[90] + Ts[187],
    ca = Ts[132] + Ts[45] + Ts[184] + Ts[90] + Ts[187],
    ua = Ts[188] + Ts[21] + Ts[189],
    da = Ts[5] + Ts[190],
    la = Ts[191] + Ts[192] + Ts[193],
    va = Ts[194] + Ts[27] + Ts[195],
    ba = Ts[196] + Ts[27] + Ts[195],
    ga = Ts[197] + Ts[25] + Ts[198],
    ya = Ts[199] + Ts[49] + Ts[189] + Ts[21] + Ts[200],
    pa = Ts[201],
    xa = Ts[202],
    Ea = Ts[203],
    ma = Ts[204],
    wa = Ts[205],
    Ta = Ts[206] + Ts[57] + Ts[207],
    Oa = Ts[206] + Ts[57] + Ts[208],
    Pa = Ts[12] + Ts[25] + Ts[51],
    Ia = Ts[209],
    Sa = Ts[210],
    Aa = Ts[211] + Ts[13] + Ts[212] + Ts[15] + Ts[213],
    Ma = Ts[214],
    ka = Ts[211] + Ts[15] + Ts[213],
    La = Ts[215] + Ts[13] + Ts[216] + Ts[13] + Ts[212],
    Ca = Ts[217] + Ts[218],
    Ra = Ts[219],
    Na = Ts[220],
    Da = Ts[221],
    Ba = Ts[37],
    ja = Ts[222],
    $a = Ts[223],
    Ga = Ts[213],
    Fa = Ts[224],
    qa = Ts[225] + Ts[0],
    za = Ts[225] + Ts[0] + Ts[226],
    Ya = Ts[5],
    Ha = Ts[227],
    Ua = Ts[228],
    Wa = Ts[229],
    Va = Ts[230] + Ts[47] + Ts[48] + Ts[127] + Ts[190],
    Xa = Ts[231],
    Ka = Ts[232] + Ts[15] + Ts[233],
    Za = Ts[44] + Ts[25] + Ts[234] + Ts[47] + Ts[235],
    Ja = Ts[215] + Ts[15] + Ts[233],
    Qa = Ts[126] + Ts[127] + Ts[236],
    to = Ts[126] + Ts[31] + Ts[237],
    io = Ts[238] + Ts[192] + Ts[239],
    eo = Ts[11] + Ts[13] + Ts[240],
    no = Ts[241],
    so = Ts[117] + Ts[127] + Ts[242],
    ro = Ts[197] + Ts[25] + Ts[198] + Ts[25] + Ts[234],
    ho = Ts[197] + Ts[25] + Ts[198] + Ts[13] + Ts[14],
    ao = Ts[132] + Ts[21] + Ts[113],
    oo = Ts[243] + Ts[21] + Ts[113],
    fo = Ts[244] + Ts[21] + Ts[113],
    _o = Ts[245] + Ts[21] + Ts[113],
    co = Ts[246],
    uo = Ts[247] + Ts[57] + Ts[248],
    lo = Ts[247] + Ts[57] + Ts[249],
    vo = Ts[247] + Ts[57] + Ts[250],
    bo = Ts[247] + Ts[57] + Ts[251],
    go = Ts[247] + Ts[57] + Ts[252],
    yo = Ts[247] + Ts[57] + Ts[253],
    po = Ts[247] + Ts[57] + Ts[254],
    xo = Ts[247] + Ts[57] + Ts[255],
    Eo = Ts[247] + Ts[57] + Ts[256] + Ts[57] + Ts[257],
    mo = Ts[247] + Ts[57] + Ts[256] + Ts[57] + Ts[258],
    wo = Ts[247] + Ts[57] + Ts[256] + Ts[57] + Ts[259],
    To = Ts[247] + Ts[57] + Ts[256] + Ts[57] + Ts[141],
    Oo = Ts[247] + Ts[57] + Ts[256] + Ts[57] + Ts[260],
    Po = Ts[261],
    Io = Ts[126] + Ts[45] + Ts[262] + Ts[90] + Ts[91],
    So = Ts[42] + Ts[173],
    Ao = Ts[263],
    Mo = Ts[123] + Ts[192] + Ts[264],
    ko = Ts[265] + Ts[27] + Ts[266],
    Lo = Ts[126] + Ts[15] + Ts[267],
    Co = Ts[44] + Ts[27] + Ts[268],
    Ro = Ts[269] + Ts[27] + Ts[268],
    No = Ts[270],
    Do = Ts[271] + Ts[57] + Ts[272] + Ts[57] + Ts[273],
    Bo = Ts[271] + Ts[57] + Ts[272] + Ts[57] + Ts[274],
    jo = Ts[275] + Ts[23] + Ts[179] + Ts[276],
    $o = Ts[277] + Ts[127] + Ts[242],
    Go = Ts[278] + Ts[47] + Ts[279],
    Fo = Ts[280] + Ts[57] + Ts[281],
    qo = Ts[280] + Ts[57] + Ts[282] + Ts[57] + Ts[283],
    zo = Ts[280] + Ts[57] + Ts[282] + Ts[57] + Ts[284],
    Yo = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[285] + Ts[57] + Ts[286],
    Ho = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[287] + Ts[57] + Ts[286],
    Uo = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[286] + Ts[57] + Ts[288],
    Wo = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[285] + Ts[57] + Ts[288],
    Vo = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[287] + Ts[57] + Ts[288],
    Xo = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[288] + Ts[57] + Ts[286],
    Ko = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[281] + Ts[57] + Ts[289],
    Zo = Ts[44] + Ts[71] + Ts[290],
    Jo = Ts[280] + Ts[57] + Ts[282] + Ts[57] + Ts[291] + Ts[57] + Ts[283],
    Qo = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[281] + Ts[57] + Ts[292],
    tf = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[281] + Ts[57] + Ts[293],
    ef = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[285],
    nf = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[281] + Ts[57] + Ts[294],
    sf = Ts[295] + Ts[57] + Ts[296],
    rf = Ts[280] + Ts[57] + Ts[297] + Ts[57] + Ts[298],
    hf = Ts[280] + Ts[57] + Ts[297] + Ts[57] + Ts[299],
    af = Ts[280] + Ts[57] + Ts[297] + Ts[57] + Ts[300],
    of = Ts[280] + Ts[57] + Ts[301] + Ts[57] + Ts[302],
    ff = Ts[303],
    _f = Ts[304],
    cf = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[287],
    uf = Ts[44] + Ts[71] + Ts[305],
    df = Ts[232] + Ts[45] + Ts[306],
    lf = Ts[307],
    vf = Ts[308] + Ts[47] + Ts[279],
    bf = Ts[238] + Ts[27] + Ts[135] + Ts[71] + Ts[309],
    gf = Ts[310] + Ts[31] + Ts[311],
    yf = Ts[312],
    pf = Ts[313],
    xf = Ts[314] + Ts[27] + Ts[105],
    Ef = Ts[230],
    mf = Ts[261] + Ts[21] + Ts[200],
    wf = Ts[280] + Ts[57] + Ts[315] + Ts[57] + Ts[316],
    Tf = Ts[317],
    Of = Ts[318] + Ts[63],
    Pf = Ts[318] + Ts[64],
    If = Ts[319],
    Sf = Ts[320],
    Af = Ts[30] + Ts[321] + Ts[322],
    Mf = Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[321] + Ts[323] + Ts[23] + Ts[47] + Ts[324],
    kf = Ts[325],
    Lf = Ts[326],
    Cf = Ts[327],
    Rf = Ts[328],
    Nf = Ts[138] + Ts[146] + Ts[329] + Ts[330] + Ts[147],
    Df = Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[321] + Ts[323],
    Bf = Ts[331] + Ts[146] + Ts[225] + Ts[332] + Ts[225] + Ts[332] + Ts[225] + Ts[332] + Ts[225] + Ts[147],
    jf = Ts[333],
    $f = Ts[194],
    Gf = Ts[334],
    Ff = Ts[335],
    qf = Ts[336] + Ts[337],
    zf = Ts[196],
    Yf = Ts[338] + Ts[57] + Ts[206] + Ts[57] + Ts[292],
    Hf = Ts[225] + Ts[115],
    Uf = Ts[338] + Ts[57] + Ts[206] + Ts[57] + Ts[294],
    Wf = Ts[339],
    Vf = Ts[65] + Ts[340] + Ts[341],
    Xf = Ts[342],
    Kf = Ts[126] + Ts[343] + Ts[344],
    Zf = Ts[126] + Ts[71] + Ts[345],
    Jf = Ts[346] + Ts[57] + Ts[347],
    Qf = Ts[348] + Ts[21] + Ts[113] + Ts[31] + Ts[349],
    t_ = Ts[350] + Ts[127] + Ts[128],
    i_ = Ts[232] + Ts[45] + Ts[46] + Ts[351],
    e_ = Ts[352] + Ts[35] + Ts[353],
    n_ = Ts[196] + Ts[13] + Ts[354],
    s_ = Ts[355],
    r_ = Ts[62] + Ts[356] + Ts[187],
    h_ = Ts[62] + Ts[357] + Ts[187],
    a_ = Ts[44] + Ts[47] + Ts[358] + Ts[13] + Ts[359] + Ts[110] + Ts[118],
    o_ = Ts[168] + Ts[133] + Ts[134],
    f_ = Ts[168] + Ts[340] + Ts[341],
    __ = Ts[44] + Ts[13] + Ts[360],
    c_ = Ts[361] + Ts[71] + Ts[290],
    u_ = Ts[361] + Ts[71] + Ts[174],
    d_ = Ts[361] + Ts[192] + Ts[362],
    l_ = Ts[361],
    v_ = Ts[363] + Ts[21] + Ts[88],
    b_ = Ts[364],
    g_ = Ts[365] + Ts[71] + Ts[366],
    y_ = Ts[365] + Ts[25] + Ts[367],
    p_ = Ts[368],
    x_ = Ts[365],
    E_ = Ts[24] + Ts[110] + Ts[369],
    m_ = Ts[370],
    w_ = Ts[196] + Ts[13] + Ts[371],
    T_ = Ts[372] + Ts[71] + Ts[174],
    O_ = Ts[373] + Ts[23] + Ts[374],
    P_ = Ts[375] + Ts[25] + Ts[26],
    I_ = Ts[376],
    S_ = Ts[377],
    A_ = Ts[378],
    M_ = Ts[379],
    k_ = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[381],
    L_ = Ts[126] + Ts[31] + Ts[382],
    C_ = Ts[29] + Ts[321] + Ts[212] + Ts[127] + Ts[383],
    R_ = Ts[215],
    N_ = Ts[121] + Ts[25] + Ts[384] + Ts[192] + Ts[385],
    D_ = Ts[197] + Ts[25] + Ts[198] + Ts[90] + Ts[386] + Ts[25] + Ts[234],
    B_ = Ts[387] + Ts[15] + Ts[233],
    j_ = Ts[388],
    $_ = Ts[389],
    G_ = Ts[390] + Ts[15] + Ts[391] + Ts[192] + Ts[392],
    F_ = Ts[106] + Ts[110] + Ts[393] + Ts[15] + Ts[391] + Ts[192] + Ts[392],
    q_ = Ts[113] + Ts[110] + Ts[393] + Ts[15] + Ts[391] + Ts[192] + Ts[392],
    z_ = Ts[117] + Ts[21] + Ts[394],
    Y_ = Ts[395] + Ts[15] + Ts[391] + Ts[192] + Ts[392],
    H_ = Ts[106] + Ts[13] + Ts[396] + Ts[15] + Ts[391] + Ts[192] + Ts[392],
    U_ = Ts[113] + Ts[13] + Ts[396] + Ts[15] + Ts[391] + Ts[192] + Ts[392],
    W_ = Ts[397] + Ts[71] + Ts[398] + Ts[15] + Ts[399],
    V_ = Ts[397] + Ts[71] + Ts[398],
    X_ = Ts[30],
    K_ = Ts[44] + Ts[15] + Ts[400],
    Z_ = Ts[401],
    J_ = Ts[402],
    Q_ = Ts[403],
    tc = Ts[404] + Ts[45] + Ts[405],
    ic = Ts[406] + Ts[27] + Ts[407],
    ec = Ts[408],
    nc = Ts[409] + Ts[410] + Ts[84] + Ts[213] + Ts[19] + Ts[411] + Ts[19] + Ts[412],
    sc = Ts[409] + Ts[413] + Ts[19] + Ts[411] + Ts[19] + Ts[33] + Ts[19] + Ts[414] + Ts[415],
    rc = Ts[416],
    hc = Ts[44] + Ts[13] + Ts[417],
    ac = Ts[238] + Ts[13] + Ts[417],
    oc = Ts[418],
    fc = Ts[419],
    _c = Ts[420],
    cc = Ts[421],
    uc = Ts[232] + Ts[192] + Ts[422],
    dc = Ts[423],
    lc = Ts[424],
    vc = Ts[265] + Ts[27] + Ts[268],
    bc = Ts[44],
    gc = Ts[425] + Ts[25] + Ts[51],
    yc = Ts[355] + Ts[343] + Ts[426],
    pc = Ts[331] + Ts[146],
    xc = Ts[427],
    Ec = Ts[428],
    mc = Ts[57],
    wc = Ts[429],
    Tc = Ts[144] + Ts[430],
    Oc = Ts[431],
    Pc = Ts[432] + Ts[57] + Ts[433],
    Ic = Ts[115] + Ts[19],
    Sc = Ts[432] + Ts[57] + Ts[434],
    Ac = Ts[435] + Ts[146],
    Mc = Ts[148] + Ts[225] + Ts[148] + Ts[225] + Ts[148],
    kc = Ts[85] + Ts[436] + Ts[19] + Ts[437],
    Lc = Ts[44] + Ts[47] + Ts[48] + Ts[127] + Ts[190],
    Cc = Ts[401] + Ts[47] + Ts[48] + Ts[127] + Ts[190],
    Rc = Ts[126] + Ts[25] + Ts[438],
    Nc = Ts[232] + Ts[218] + Ts[439] + Ts[13] + Ts[440],
    Dc = Ts[314] + Ts[13] + Ts[14],
    Bc = Ts[314] + Ts[25] + Ts[26] + Ts[13] + Ts[14],
    jc = Ts[441] + Ts[71] + Ts[442],
    $c = Ts[441] + Ts[25] + Ts[26] + Ts[71] + Ts[442],
    Gc = Ts[443] + Ts[321] + Ts[322],
    Fc = Ts[27] + Ts[105] + Ts[146],
    qc = Ts[332],
    zc = Ts[444],
    Yc = Ts[321] + Ts[445] + Ts[321],
    Hc = Ts[71] + Ts[174] + Ts[146],
    Uc = Ts[304] + Ts[110] + Ts[118],
    Wc = Ts[304] + Ts[27] + Ts[105],
    Vc = Ts[446] + Ts[57] + Ts[284],
    Xc = Ts[447],
    Kc = Ts[448] + Ts[27] + Ts[449],
    Zc = Ts[450] + Ts[27] + Ts[449],
    Jc = Ts[451] + Ts[321] + Ts[322],
    Qc = Ts[140],
    tu = Ts[452],
    iu = '',//Ts[453],//r
    eu = Ts[454],
    nu = Ts[455],
    su = Ts[292] + Ts[57] + Ts[456],
    ru = Ts[457] + Ts[57] + Ts[294],
    hu = Ts[457] + Ts[57] + Ts[289],
    au = Ts[293] + Ts[57] + Ts[294],
    ou = Ts[293] + Ts[57] + Ts[456],
    fu = Ts[292] + Ts[57] + Ts[289],
    _u = Ts[457] + Ts[57] + Ts[456],
    cu = Ts[293] + Ts[57] + Ts[289],
    uu = Ts[458],
    du = Ts[459],
    lu = Ts[376] + Ts[460],
    vu = Ts[332] + Ts[33] + Ts[460],
    bu = Ts[332] + Ts[378] + Ts[460],
    gu = Ts[461] + Ts[0] + Ts[462],
    yu = Ts[332] + Ts[461] + Ts[321] + Ts[322] + Ts[460],
    pu = Ts[332] + Ts[463] + Ts[343] + Ts[426] + Ts[460],
    xu = Ts[332] + Ts[263] + Ts[460],
    Eu = Ts[461] + Ts[321] + Ts[322],
    mu = Ts[463] + Ts[343] + Ts[426],
    wu = Ts[463] + Ts[127] + Ts[242],
    Tu = Ts[464] + Ts[0] + Ts[104],
    Ou = Ts[464] + Ts[0] + Ts[401],
    Pu = Ts[464],
    Iu = Ts[464] + Ts[0] + Ts[89],
    Su = Ts[465],
    Au = Ts[466],
    Mu = Ts[104] + Ts[31] + Ts[467],
    ku = Ts[468],
    Lu = Ts[89],
    Cu = Ts[332] + Ts[131] + Ts[460],
    Ru = Ts[332] + Ts[89] + Ts[460],
    Nu = Ts[332] + Ts[463] + Ts[127] + Ts[242] + Ts[460],
    Du = Ts[469] + Ts[57] + Ts[470],
    Bu = Ts[469] + Ts[57] + Ts[471],
    ju = Ts[469] + Ts[57] + Ts[472],
    $u = Ts[469] + Ts[57] + Ts[473] + Ts[57] + Ts[474],
    Gu = Ts[89] + Ts[0] + Ts[462],
    Fu = Ts[461] + Ts[21] + Ts[200],
    qu = Ts[12] + Ts[13] + Ts[14] + Ts[110] + Ts[475],
    zu = Ts[232] + Ts[13] + Ts[417],
    Yu = Ts[12] + Ts[13] + Ts[417] + Ts[13] + Ts[476],
    Hu = Ts[44] + Ts[127] + Ts[190],
    Uu = Ts[477],
    Wu = Ts[57] + Ts[478],
    Vu = Ts[57] + Ts[479] + Ts[5],
    Xu = Ts[480],
    Ku = Ts[468] + Ts[13] + Ts[481] + Ts[45] + Ts[482],
    Zu = Ts[131] + Ts[13] + Ts[481] + Ts[45] + Ts[482],
    Ju = Ts[425] + Ts[45] + Ts[46] + Ts[27] + Ts[268] + Ts[13] + Ts[481],
    Qu = Ts[12] + Ts[45] + Ts[46] + Ts[27] + Ts[268] + Ts[13] + Ts[483],
    td = Ts[464] + Ts[127] + Ts[242] + Ts[13] + Ts[481] + Ts[45] + Ts[482],
    id = Ts[42] + Ts[241],
    ed = Ts[401] + Ts[13] + Ts[14],
    nd = Ts[231] + Ts[13] + Ts[481] + Ts[45] + Ts[482],
    sd = Ts[131] + Ts[415],
    rd = Ts[44] + Ts[47] + Ts[48] + Ts[127] + Ts[242],
    hd = Ts[365] + Ts[49] + Ts[484],
    ad = Ts[485],
    od = Ts[486],
    fd = Ts[487],
    _d = Ts[112] + Ts[23],
    cd = Ts[488] + Ts[455],
    ud = Ts[489],
    dd = Ts[490] + Ts[110] + Ts[491],
    ld = Ts[492],
    vd = Ts[493],
    bd = Ts[104] + Ts[110] + Ts[491],
    gd = Ts[494] + Ts[21] + Ts[495],
    yd = Ts[104] + Ts[25] + Ts[51] + Ts[31] + Ts[467],
    pd = Ts[496] + Ts[57] + Ts[497] + Ts[57] + Ts[59],
    xd = Ts[498] + Ts[148] + Ts[499] + Ts[148] + Ts[500] + Ts[148] + Ts[501],
    Ed = Ts[502] + Ts[50] + Ts[71] + Ts[503],
    md = Ts[148] + Ts[504] + Ts[148] + Ts[76] + Ts[148] + Ts[505] + Ts[148] + Ts[74] + Ts[148] + Ts[506],
    wd = Ts[507],
    Td = Ts[508],
    Od = Ts[509],
    Pd = Ts[44] + Ts[13] + Ts[510] + Ts[71] + Ts[511],
    Id = Ts[512],
    Sd = Ts[513],
    Ad = Ts[12] + Ts[25] + Ts[26] + Ts[110] + Ts[514],
    Md = Ts[12] + Ts[13] + Ts[476],
    kd = Ts[515],
    Ld = Ts[516],
    Cd = Ts[190] + Ts[71] + Ts[517],
    Rd = Ts[518] + Ts[13] + Ts[240],
    Nd = Ts[23] + Ts[186] + Ts[23] + Ts[350] + Ts[23] + Ts[519],
    Dd = Ts[23] + Ts[186] + Ts[23] + Ts[350] + Ts[23] + Ts[520],
    Bd = Ts[23] + Ts[186] + Ts[23] + Ts[521],
    jd = Ts[23] + Ts[186] + Ts[23] + Ts[522],
    $d = Ts[23] + Ts[106] + Ts[23] + Ts[350] + Ts[23] + Ts[519],
    Gd = Ts[23] + Ts[106] + Ts[23] + Ts[350] + Ts[23] + Ts[520],
    Fd = Ts[23] + Ts[106] + Ts[23] + Ts[521],
    qd = Ts[23] + Ts[106] + Ts[23] + Ts[522],
    zd = Ts[523],
    Yd = Ts[244],
    Hd = Ts[524] + Ts[146] + Ts[131] + Ts[40] + Ts[352] + Ts[35] + Ts[525] + Ts[526] + Ts[527] + Ts[528] + Ts[148] + Ts[529] + Ts[530] + Ts[531] + Ts[225] + Ts[532] + Ts[533] + Ts[534] + Ts[535] + Ts[536] + Ts[489] + Ts[537] + Ts[91] + Ts[538] + Ts[35] + Ts[539] + Ts[535] + Ts[540] + Ts[455] + Ts[5] + Ts[541] + Ts[225] + Ts[190] + Ts[5] + Ts[192] + Ts[48] + Ts[542] + Ts[539] + Ts[529] + Ts[543] + Ts[455] + Ts[544] + Ts[128] + Ts[545] + Ts[140] + Ts[546] + Ts[258] + Ts[547] + Ts[548] + Ts[479] + Ts[321] + Ts[549] + Ts[35] + Ts[27] + Ts[550] + Ts[27] + Ts[531] + Ts[49] + Ts[551] + Ts[552] + Ts[91] + Ts[553] + Ts[48] + Ts[554] + Ts[128] + Ts[35] + Ts[555] + Ts[556] + Ts[557] + Ts[558] + Ts[479] + Ts[15] + Ts[559] + Ts[179] + Ts[489] + Ts[63] + Ts[560] + Ts[561] + Ts[562] + Ts[563] + Ts[454] + Ts[564] + Ts[531] + Ts[226] + Ts[13] + Ts[565] + Ts[566] + Ts[140] + Ts[15] + Ts[226] + Ts[48] + Ts[15] + Ts[560] + Ts[567] + Ts[78] + Ts[535] + Ts[64] + Ts[531] + Ts[47] + Ts[568] + Ts[569] + Ts[570] + Ts[571] + Ts[572] + Ts[573] + Ts[489] + Ts[574] + Ts[489] + Ts[575] + Ts[538] + Ts[535] + Ts[35] + Ts[560] + Ts[576] + Ts[577] + Ts[578] + Ts[579] + Ts[258] + Ts[580] + Ts[581] + Ts[538] + Ts[19] + Ts[538] + Ts[148] + Ts[523],
    Ud = Ts[582] + Ts[90] + Ts[386],
    Wd = Ts[582] + Ts[127] + Ts[128],
    Vd = Ts[57] + Ts[583],
    Xd = Ts[225] + Ts[0] + Ts[225],
    Kd = Ts[126] + Ts[21] + Ts[584] + Ts[71] + Ts[585],
    Zd = Ts[126] + Ts[586],
    Jd = Ts[110] + Ts[118],
    Qd = Ts[27] + Ts[105],
    tl = Ts[127] + Ts[587],
    il = Ts[27] + Ts[268] + Ts[13] + Ts[481] + Ts[25] + Ts[51],
    el = Ts[45] + Ts[482],
    nl = Ts[27] + Ts[449],
    sl = Ts[71] + Ts[588] + Ts[49] + Ts[484],
    rl = Ts[589] + Ts[467],
    hl = Ts[101] + Ts[351],
    al = Ts[101] + Ts[83],
    ol = Ts[101] + Ts[590],
    fl = Ts[126] + Ts[49] + Ts[591] + Ts[78] + Ts[79],
    _l = Ts[592],
    cl = Ts[593],
    ul = Ts[594],
    dl = Ts[104] + Ts[595] + Ts[491],
    ll = Ts[182] + Ts[0] + Ts[596],
    vl = Ts[182],
    bl = Ts[597],
    gl = Ts[598],
    yl = Ts[598] + Ts[0] + Ts[340],
    pl = Ts[598] + Ts[0] + Ts[343],
    xl = Ts[599],
    El = Ts[599] + Ts[0] + Ts[340],
    ml = Ts[599] + Ts[0] + Ts[343],
    wl = Ts[599] + Ts[0] + Ts[340] + Ts[0] + Ts[343],
    Tl = Ts[599] + Ts[0] + Ts[343] + Ts[0] + Ts[340],
    Ol = Ts[600] + Ts[0] + Ts[196],
    Pl = Ts[600] + Ts[0] + Ts[194],
    Il = Ts[600] + Ts[0] + Ts[9],
    Sl = Ts[600] + Ts[0] + Ts[8],
    Al = Ts[601],
    Ml = Ts[602],
    kl = Ts[596],
    Ll = Ts[603],
    Cl = Ts[604],
    Rl = Ts[605],
    Nl = Ts[606],
    Dl = Ts[607],
    Bl = Ts[608],
    jl = Ts[609],
    $l = Ts[610],
    Gl = Ts[611],
    Fl = Ts[612],
    ql = Ts[613],
    zl = Ts[614],
    Yl = Ts[615],
    Hl = Ts[616],
    Ul = Ts[617] + Ts[0] + Ts[618],
    Wl = Ts[617] + Ts[0] + Ts[226],
    Vl = Ts[617] + Ts[0] + Ts[5],
    Xl = Ts[617] + Ts[0] + Ts[227],
    Kl = Ts[617] + Ts[0] + Ts[560],
    Zl = Ts[617] + Ts[0] + Ts[258],
    Jl = Ts[617] + Ts[0] + Ts[259],
    Ql = Ts[617] + Ts[0] + Ts[141],
    tv = Ts[617] + Ts[0] + Ts[538],
    iv = Ts[617] + Ts[0] + Ts[204],
    ev = Ts[619],
    nv = Ts[620] + Ts[57] + Ts[621] + Ts[57] + Ts[272] + Ts[57] + Ts[300],
    sv = Ts[620] + Ts[57] + Ts[621] + Ts[57] + Ts[272] + Ts[57] + Ts[622],
    rv = Ts[623],
    hv = Ts[620] + Ts[57] + Ts[624] + Ts[57] + Ts[272] + Ts[57] + Ts[625],
    av = Ts[620] + Ts[57] + Ts[624] + Ts[57] + Ts[272] + Ts[57] + Ts[300],
    ov = Ts[620] + Ts[57] + Ts[624] + Ts[57] + Ts[272] + Ts[57] + Ts[626],
    fv = Ts[627],
    _v = Ts[628] + Ts[57] + Ts[272],
    cv = Ts[628] + Ts[57] + Ts[272] + Ts[57] + Ts[629],
    uv = Ts[628] + Ts[57] + Ts[630],
    dv = Ts[628] + Ts[57] + Ts[629] + Ts[57] + Ts[631],
    lv = Ts[628] + Ts[57] + Ts[632],
    vv = Ts[630] + Ts[57] + Ts[299],
    bv = Ts[633] + Ts[57] + Ts[207],
    gv = Ts[56] + Ts[57] + Ts[634],
    yv = Ts[620] + Ts[57] + Ts[208],
    pv = Ts[24] + Ts[25] + Ts[26] + Ts[635],
    xv = Ts[635] + Ts[57] + Ts[636],
    Ev = Ts[117] + Ts[15] + Ts[400],
    mv = Ts[401] + Ts[15] + Ts[400],
    wv = Ts[432],
    Tv = Ts[206] + Ts[57] + Ts[446] + Ts[57] + Ts[433],
    Ov = Ts[637] + Ts[21] + Ts[113],
    Pv = Ts[638] + Ts[13] + Ts[639] + Ts[21] + Ts[113],
    Iv = Ts[640],
    Sv = Ts[641] + Ts[57] + Ts[272] + Ts[57] + Ts[152],
    Av = Ts[642],
    Mv = Ts[641] + Ts[57] + Ts[272] + Ts[57] + Ts[643],
    kv = Ts[644],
    Lv = Ts[24] + Ts[110] + Ts[645] + Ts[179] + Ts[180],
    Cv = Ts[643] + Ts[57] + Ts[641],
    Rv = Ts[646] + Ts[57] + Ts[152] + Ts[57] + Ts[641] + Ts[57] + Ts[288],
    Nv = Ts[646] + Ts[57] + Ts[643] + Ts[57] + Ts[641],
    Dv = Ts[565],
    Bv = Ts[445],
    jv = Ts[562],
    $v = Ts[647] + Ts[57] + Ts[648] + Ts[57] + Ts[649],
    Gv = Ts[647] + Ts[57] + Ts[650] + Ts[57] + Ts[649],
    Fv = Ts[647] + Ts[57] + Ts[651],
    qv = Ts[126] + Ts[321] + Ts[652],
    zv = Ts[232] + Ts[590],
    Yv = Ts[365] + Ts[71] + Ts[653] + Ts[47] + Ts[654],
    Hv = Ts[597] + Ts[13] + Ts[655],
    Uv = Ts[365] + Ts[13] + Ts[655],
    Wv = Ts[628] + Ts[57] + Ts[272] + Ts[57] + Ts[630],
    Vv = Ts[130] + Ts[71] + Ts[290],
    Xv = Ts[132] + Ts[13] + Ts[656],
    Kv = Ts[132] + Ts[657] + Ts[658],
    Zv = Ts[365] + Ts[21] + Ts[200],
    Jv = Ts[659] + Ts[71] + Ts[290],
    Qv = Ts[660] + Ts[13] + Ts[655],
    tb = Ts[661] + Ts[13] + Ts[655],
    ib = Ts[660] + Ts[179] + Ts[180],
    eb = Ts[660],
    nb = Ts[662] + Ts[27] + Ts[135],
    sb = Ts[663],
    rb = Ts[149] + Ts[57] + Ts[150] + Ts[57] + Ts[664],
    hb = Ts[665],
    ab = Ts[149] + Ts[57] + Ts[150] + Ts[57] + Ts[632] + Ts[57] + Ts[153],
    ob = Ts[666] + Ts[0] + Ts[667],
    fb = Ts[668] + Ts[0] + Ts[667],
    _b = Ts[669],
    cb = Ts[75],
    ub = Ts[670],
    db = Ts[155] + Ts[71] + Ts[517],
    lb = Ts[671],
    vb = Ts[160] + Ts[127] + Ts[143],
    bb = Ts[352],
    gb = Ts[101],
    yb = Ts[130] + Ts[110] + Ts[118],
    pb = Ts[660] + Ts[71] + Ts[290],
    xb = Ts[672],
    Eb = Ts[34] + Ts[47] + Ts[673],
    mb = Ts[674],
    wb = Ts[144] + Ts[675],
    Tb = Ts[431] + Ts[19] + Ts[259] + Ts[115] + Ts[19] + Ts[343] + Ts[676] + Ts[148] + Ts[677] + Ts[148] + Ts[678] + Ts[148] + Ts[679] + Ts[23] + Ts[680],
    Ob = Ts[31] + Ts[681] + Ts[682],
    Pb = Ts[331] + Ts[146] + Ts[225] + Ts[148] + Ts[225] + Ts[148] + Ts[225] + Ts[148] + Ts[225] + Ts[147],
    Ib = Ts[627] + Ts[31] + Ts[683],
    Sb = Ts[24] + Ts[31] + Ts[684] + Ts[179] + Ts[180],
    Ab = Ts[104] + Ts[13] + Ts[655] + Ts[71] + Ts[196],
    Mb = Ts[144] + Ts[226] + Ts[13] + Ts[259] + Ts[47] + Ts[539] + Ts[45],
    kb = Ts[144] + Ts[685],
    Lb = Ts[144] + Ts[686] + Ts[25] + Ts[538] + Ts[47],
    Cb = Ts[144] + Ts[687] + Ts[47] + Ts[688],
    Rb = Ts[144] + Ts[687] + Ts[15] + Ts[689],
    Nb = Ts[144] + Ts[690] + Ts[13] + Ts[691],
    Db = Ts[144] + Ts[692],
    Bb = Ts[144] + Ts[226] + Ts[45] + Ts[259] + Ts[13] + Ts[539] + Ts[192],
    jb = Ts[144] + Ts[693] + Ts[47] + Ts[225],
    $b = Ts[144] + Ts[694] + Ts[695],
    Gb = Ts[144] + Ts[226] + Ts[192] + Ts[259] + Ts[696] + Ts[5],
    Fb = Ts[144] + Ts[687] + Ts[15] + Ts[697],
    qb = Ts[144] + Ts[698],
    zb = Ts[699] + Ts[13] + Ts[639] + Ts[21] + Ts[113],
    Yb = Ts[144] + Ts[5] + Ts[479] + Ts[538] + Ts[700],
    Hb = Ts[144] + Ts[701],
    Ub = Ts[144] + Ts[702] + Ts[45] + Ts[691],
    Wb = Ts[144] + Ts[703],
    Vb = Ts[144] + Ts[226] + Ts[192] + Ts[704] + Ts[15] + Ts[560],
    Xb = Ts[144] + Ts[705] + Ts[706] + Ts[5],
    Kb = Ts[144] + Ts[707] + Ts[708],
    Zb = Ts[144] + Ts[226] + Ts[25] + Ts[259] + Ts[709] + Ts[225],
    Jb = Ts[144] + Ts[710],
    Qb = Ts[144] + Ts[91] + Ts[141] + Ts[91] + Ts[538] + Ts[91] + Ts[538],
    tg = Ts[144] + Ts[259] + Ts[15] + Ts[711],
    ig = Ts[144] + Ts[560] + Ts[192] + Ts[560] + Ts[13] + Ts[560] + Ts[47],
    eg = Ts[144] + Ts[712],
    ng = Ts[144] + Ts[713],
    sg = Ts[144] + Ts[259] + Ts[192] + Ts[259] + Ts[25] + Ts[259] + Ts[192],
    rg = Ts[144] + Ts[560] + Ts[13] + Ts[714],
    hg = Ts[144] + Ts[715],
    ag = Ts[144] + Ts[141] + Ts[45] + Ts[141] + Ts[45] + Ts[141] + Ts[45],
    og = Ts[144] + Ts[716],
    fg = Ts[144] + Ts[717],
    _g = Ts[144] + Ts[718],
    cg = Ts[144] + Ts[539] + Ts[25] + Ts[539] + Ts[45] + Ts[539] + Ts[45],
    ug = Ts[144] + Ts[15] + Ts[141] + Ts[15] + Ts[258] + Ts[15] + Ts[560],
    dg = Ts[144] + Ts[15] + Ts[539] + Ts[15] + Ts[259] + Ts[15] + Ts[258],
    lg = Ts[144] + Ts[15] + Ts[141] + Ts[15] + Ts[560] + Ts[15] + Ts[227],
    vg = Ts[144] + Ts[719],
    bg = Ts[144] + Ts[25] + Ts[539] + Ts[720],
    gg = Ts[144] + Ts[539] + Ts[721] + Ts[225] + Ts[445] + Ts[225],
    yg = Ts[144] + Ts[452] + Ts[539] + Ts[722],
    pg = Ts[144] + Ts[227] + Ts[479] + Ts[227] + Ts[445] + Ts[723],
    xg = Ts[144] + Ts[47] + Ts[5] + Ts[724],
    Eg = Ts[144] + Ts[5] + Ts[25] + Ts[538] + Ts[725],
    mg = Ts[348] + Ts[15] + Ts[726],
    wg = Ts[144] + Ts[727],
    Tg = Ts[144] + Ts[455] + Ts[258] + Ts[455] + Ts[258] + Ts[455] + Ts[259],
    Og = Ts[401] + Ts[31] + Ts[467],
    Pg = Ts[525],
    Ig = Ts[728] + Ts[0] + Ts[494],
    Sg = Ts[188],
    Ag = Ts[729],
    Mg = Ts[730],
    kg = Ts[731] + Ts[47] + Ts[732],
    Lg = Ts[733],
    Cg = Ts[731] + Ts[47] + Ts[734],
    Rg = Ts[731],
    Ng = Ts[731] + Ts[218] + Ts[735],
    Dg = Ts[127] + Ts[236] + Ts[19] + Ts[736] + Ts[19] + Ts[737] + Ts[0],
    Bg = Ts[738],
    jg = Ts[739],
    $g = Ts[740],
    Gg = Ts[321] + Ts[741] + Ts[19] + Ts[445] + Ts[19] + Ts[740] + Ts[19] + Ts[742] + Ts[0],
    Fg = Ts[743] + Ts[192] + Ts[193],
    qg = Ts[666] + Ts[110] + Ts[744],
    zg = Ts[743],
    Yg = Ts[743] + Ts[71] + Ts[174],
    Hg = Ts[745],
    Ug = Ts[746],
    Wg = Ts[747] + Ts[49] + Ts[748],
    Vg = Ts[387] + Ts[127] + Ts[749],
    Xg = Ts[750],
    Kg = Ts[751] + Ts[127] + Ts[242],
    Zg = Ts[752],
    Jg = Ts[753] + Ts[340] + Ts[754],
    Qg = Ts[753] + Ts[45] + Ts[46],
    ty = Ts[755],
    iy = Ts[756],
    ey = Ts[757],
    ny = Ts[756] + Ts[45] + Ts[46],
    sy = Ts[758],
    ry = Ts[759],
    hy = Ts[760],
    ay = Ts[88] + Ts[21] + Ts[200],
    oy = Ts[761],
    fy = Ts[191] + Ts[71] + Ts[174],
    _y = Ts[191],
    cy = Ts[762] + Ts[49] + Ts[519] + Ts[13] + Ts[212] + Ts[71] + Ts[174],
    uy = Ts[763],
    dy = Ts[764],
    ly = Ts[88],
    vy = Ts[765],
    by = Ts[218] + Ts[766] + Ts[19] + Ts[767] + Ts[460] + Ts[225] + Ts[768],
    gy = Ts[506],
    yy = Ts[769],
    py = Ts[750] + Ts[78] + Ts[79],
    xy = Ts[221] + Ts[343] + Ts[770] + Ts[771],
    Ey = Ts[772],
    my = Ts[221] + Ts[27] + Ts[773] + Ts[19] + Ts[45] + Ts[774] + Ts[771],
    wy = Ts[775] + Ts[45] + Ts[774],
    Ty = Ts[776],
    Oy = Ts[91] + Ts[777] + Ts[455] + Ts[560] + Ts[479] + Ts[778] + Ts[779] + Ts[141] + Ts[445] + Ts[780] + Ts[479] + Ts[781] + Ts[452] + Ts[227] + Ts[782] + Ts[539] + Ts[783] + Ts[784] + Ts[455] + Ts[785] + Ts[786] + Ts[258] + Ts[787] + Ts[259] + Ts[455] + Ts[560] + Ts[91] + Ts[226] + Ts[479] + Ts[226] + Ts[788] + Ts[789] + Ts[190] + Ts[790] + Ts[455] + Ts[791] + Ts[91] + Ts[258] + Ts[91] + Ts[792] + Ts[455] + Ts[141] + Ts[793] + Ts[227] + Ts[794] + Ts[258] + Ts[795] + Ts[796] + Ts[797] + Ts[798] + Ts[452] + Ts[799] + Ts[479] + Ts[258] + Ts[779] + Ts[800],
    Py = Ts[221] + Ts[31] + Ts[801] + Ts[19] + Ts[232] + Ts[460],
    Iy = Ts[802],
    Sy = '',//Ts[803],//nee
    Ay = Ts[804],
    My = Ts[117] + Ts[21],
    ky = Ts[805],
    Ly = Ts[141] + Ts[0],
    Cy = Ts[806],
    Ry = Ts[195],
    Ny = Ts[807],
    Dy = Ts[13] + Ts[354],
    By = Ts[110] + Ts[808],
    jy = Ts[13] + Ts[809],
    $y = Ts[810],
    Gy = Ts[811],
    Fy = Ts[24],
    qy = Ts[812],
    zy = Ts[813],
    Yy = Ts[814],
    Hy = Ts[815],
    Uy = Ts[816],
    Wy = Ts[817],
    Vy = Ts[394],
    Xy = Ts[818],
    Ky = Ts[819],
    Zy = '',//Ts[275] + Ts[820],//Qu
    Jy = '',//Ts[19] + Ts[197],//for
    Qy = '',//Ts[19] + Ts[821],//HT
    tp = '',//Ts[49],//M
    ip = '',//Ts[31] + Ts[258],//L5
    ep = Ts[822],
    np = Ts[823],
    sp = Ts[824],
    rp = Ts[825] + Ts[133] + Ts[826],
    hp = Ts[827],
    ap = Ts[828] + Ts[0] + Ts[829] + Ts[0] + Ts[226],
    op = Ts[231] + Ts[321] + Ts[212],
    fp = Ts[830],
    _p = Ts[25] + Ts[26],
    cp = Ts[322],
    up = Ts[831],
    dp = Ts[832] + Ts[133],
    lp = Ts[826],
    vp = Ts[45] + Ts[774],
    bp = Ts[833],
    gp = Ts[88] + Ts[5] + Ts[45],
    yp = Ts[140] + Ts[21],
    pp = Ts[42] + Ts[327],
    xp = Ts[117] + Ts[71] + Ts[290],
    Ep = Ts[238] + Ts[25] + Ts[234],
    mp = Ts[278],
    wp = Ts[173],
    Tp = Ts[275] + Ts[0] + Ts[25] + Ts[26],
    Op = Ts[278] + Ts[13] + Ts[834],
    Pp = Ts[562] + Ts[127] + Ts[242],
    Ip = Ts[42] + Ts[215],
    Sp = Ts[42] + Ts[232],
    Ap = Ts[835],
    Mp = Ts[275] + Ts[0] + Ts[25] + Ts[234],
    kp = Ts[836] + Ts[25] + Ts[837],
    Lp = Ts[838] + Ts[0] + Ts[839],
    Cp = Ts[840] + Ts[27] + Ts[135] + Ts[13] + Ts[481],
    Rp = Ts[401] + Ts[47] + Ts[48],
    Np = Ts[841],
    Dp = Ts[232],
    Bp = Ts[842],
    jp = Ts[42] + Ts[843] + Ts[27] + Ts[449],
    $p = Ts[42] + Ts[844],
    Gp = Ts[844],
    Fp = Ts[171],
    qp = Ts[173] + Ts[343] + Ts[845],
    zp = Ts[275] + Ts[0] + Ts[321] + Ts[212],
    Yp = Ts[846] + Ts[0] + Ts[104],
    Hp = Ts[846] + Ts[0] + Ts[401],
    Up = Ts[847],
    Wp = Ts[843] + Ts[27] + Ts[449],
    Vp = Ts[848] + Ts[57] + Ts[849],
    Xp = Ts[275] + Ts[0] + Ts[71] + Ts[305] + Ts[321] + Ts[212],
    Kp = Ts[838],
    Zp = Ts[71] + Ts[305] + Ts[321] + Ts[212],
    Jp = Ts[181],
    Qp = Ts[275] + Ts[0] + Ts[47] + Ts[850],
    tx = Ts[47] + Ts[850],
    ix = Ts[419] + Ts[321] + Ts[212],
    ex = Ts[851] + Ts[57] + Ts[272] + Ts[57] + Ts[852],
    nx = Ts[851] + Ts[57] + Ts[853],
    sx = Ts[851] + Ts[57] + Ts[854],
    rx = Ts[851] + Ts[57] + Ts[855] + Ts[57] + Ts[433],
    hx = Ts[42] + Ts[856] + Ts[21] + Ts[200],
    ax = Ts[856],
    ox = Ts[42] + Ts[121] + Ts[71] + Ts[174],
    fx = Ts[275] + Ts[0] + Ts[179] + Ts[857],
    _x = Ts[858],
    cx = Ts[121] + Ts[71] + Ts[174],
    ux = Ts[856] + Ts[21] + Ts[200],
    dx = Ts[176],
    lx = Ts[856] + Ts[127] + Ts[143],
    vx = Ts[275] + Ts[0] + Ts[21] + Ts[88],
    bx = Ts[21] + Ts[88],
    gx = Ts[173] + Ts[45] + Ts[46],
    yx = Ts[144] + Ts[859],
    px = Ts[42] + Ts[843] + Ts[27] + Ts[105],
    xx = Ts[365] + Ts[47] + Ts[860] + Ts[13] + Ts[655],
    Ex = Ts[660] + Ts[110] + Ts[118],
    mx = Ts[861] + Ts[71] + Ts[588],
    wx = Ts[861] + Ts[71] + Ts[588] + Ts[71] + Ts[862],
    Tx = Ts[168] + Ts[63],
    Ox = Ts[168] + Ts[64],
    Px = Ts[628] + Ts[57] + Ts[272] + Ts[57] + Ts[630] + Ts[57] + Ts[852],
    Ix = Ts[182] + Ts[13] + Ts[655],
    Sx = Ts[182] + Ts[31] + Ts[185] + Ts[45] + Ts[184],
    Ax = Ts[178] + Ts[13] + Ts[655],
    Mx = Ts[597] + Ts[47] + Ts[654],
    kx = Ts[42] + Ts[173] + Ts[45] + Ts[46],
    Lx = Ts[42] + Ts[178] + Ts[13] + Ts[655],
    Cx = Ts[42] + Ts[178] + Ts[179] + Ts[180],
    Rx = Ts[123] + Ts[71] + Ts[174],
    Nx = Ts[42] + Ts[173] + Ts[31] + Ts[863],
    Dx = Ts[42] + Ts[173] + Ts[343] + Ts[845],
    Bx = Ts[42] + Ts[864],
    jx = Ts[42] + Ts[865] + Ts[25] + Ts[438],
    $x = Ts[866] + Ts[343] + Ts[867],
    Gx = Ts[168],
    Fx = Ts[12] + Ts[45] + Ts[46] + Ts[13] + Ts[483],
    qx = Ts[343] + Ts[845],
    zx = Ts[15] + Ts[167] + Ts[27] + Ts[105],
    Yx = Ts[31] + Ts[863],
    Hx = Ts[71] + Ts[174],
    Ux = Ts[47] + Ts[860] + Ts[179] + Ts[180],
    Wx = Ts[110] + Ts[172],
    Vx = Ts[45] + Ts[46],
    Xx = Ts[271] + Ts[57] + Ts[272] + Ts[57] + Ts[868],
    Kx = Ts[461],
    Zx = Ts[365] + Ts[0] + Ts[666],
    Jx = Ts[365] + Ts[0] + Ts[182],
    Qx = Ts[365] + Ts[0] + Ts[33],
    tE = Ts[869] + Ts[57] + Ts[632],
    iE = Ts[661] + Ts[0] + Ts[666],
    eE = Ts[247] + Ts[57] + Ts[870],
    nE = Ts[871] + Ts[0] + Ts[130],
    sE = Ts[871] + Ts[0] + Ts[130] + Ts[0] + Ts[20],
    rE = Ts[871] + Ts[0] + Ts[132] + Ts[0] + Ts[872],
    hE = Ts[247] + Ts[57] + Ts[620] + Ts[57] + Ts[873] + Ts[57] + Ts[874],
    aE = Ts[871] + Ts[0] + Ts[660] + Ts[0] + Ts[666],
    oE = Ts[247] + Ts[57] + Ts[875] + Ts[57] + Ts[641],
    fE = Ts[871] + Ts[0] + Ts[660] + Ts[0] + Ts[876],
    _E = Ts[871] + Ts[0] + Ts[659],
    cE = Ts[871] + Ts[0] + Ts[659] + Ts[0] + Ts[20],
    uE = Ts[132] + Ts[0] + Ts[877],
    dE = Ts[132] + Ts[0] + Ts[210],
    lE = Ts[878] + Ts[57] + Ts[291] + Ts[57] + Ts[879],
    vE = Ts[166] + Ts[0] + Ts[880] + Ts[0] + Ts[838],
    bE = Ts[881] + Ts[57] + Ts[632],
    gE = Ts[178] + Ts[0] + Ts[666],
    yE = Ts[881] + Ts[57] + Ts[641],
    pE = Ts[178] + Ts[0] + Ts[876],
    xE = Ts[182] + Ts[0] + Ts[102],
    EE = Ts[630] + Ts[57] + Ts[632],
    mE = Ts[182] + Ts[0] + Ts[666],
    wE = Ts[630] + Ts[57] + Ts[620] + Ts[57] + Ts[873],
    TE = Ts[182] + Ts[0] + Ts[132] + Ts[0] + Ts[872],
    OE = Ts[182] + Ts[0] + Ts[458],
    PE = Ts[853],
    IE = Ts[206] + Ts[57] + Ts[881] + Ts[57] + Ts[632],
    SE = Ts[206] + Ts[57] + Ts[881] + Ts[57] + Ts[641],
    AE = Ts[206] + Ts[57] + Ts[630],
    ME = Ts[352] + Ts[0] + Ts[182] + Ts[0] + Ts[102],
    kE = Ts[206] + Ts[57] + Ts[630] + Ts[57] + Ts[274],
    LE = Ts[352] + Ts[0] + Ts[182] + Ts[0] + Ts[20],
    CE = Ts[206] + Ts[57] + Ts[630] + Ts[57] + Ts[620] + Ts[57] + Ts[873] + Ts[57] + Ts[874],
    RE = Ts[206] + Ts[57] + Ts[299],
    NE = Ts[206] + Ts[57] + Ts[630] + Ts[57] + Ts[299],
    DE = Ts[352] + Ts[0] + Ts[458],
    BE = Ts[206] + Ts[57] + Ts[853],
    jE = Ts[352] + Ts[0] + Ts[176],
    $E = Ts[882] + Ts[57] + Ts[883],
    GE = Ts[759] + Ts[0] + Ts[138],
    FE = Ts[882] + Ts[57] + Ts[884],
    qE = Ts[759] + Ts[0] + Ts[644],
    zE = Ts[759] + Ts[0] + Ts[666],
    YE = Ts[759] + Ts[0] + Ts[361] + Ts[0] + Ts[847],
    HE = Ts[759] + Ts[0] + Ts[361] + Ts[0] + Ts[885],
    UE = Ts[882] + Ts[57] + Ts[432] + Ts[57] + Ts[274],
    WE = Ts[759] + Ts[0] + Ts[361] + Ts[0] + Ts[20],
    VE = Ts[882] + Ts[57] + Ts[853],
    XE = Ts[759] + Ts[0] + Ts[176],
    KE = Ts[882] + Ts[57] + Ts[633] + Ts[57] + Ts[207],
    ZE = Ts[759] + Ts[0] + Ts[177] + Ts[0] + Ts[102],
    JE = Ts[882] + Ts[57] + Ts[633],
    QE = Ts[759] + Ts[0] + Ts[177],
    tm = Ts[759] + Ts[0] + Ts[458],
    im = Ts[759] + Ts[0] + Ts[168] + Ts[0] + Ts[768],
    em = Ts[882] + Ts[57] + Ts[874] + Ts[57] + Ts[64],
    nm = Ts[759] + Ts[0] + Ts[168] + Ts[0] + Ts[48],
    sm = Ts[882] + Ts[57] + Ts[433],
    rm = Ts[759] + Ts[0] + Ts[847],
    hm = Ts[759] + Ts[0] + Ts[886] + Ts[0] + Ts[644],
    am = Ts[759] + Ts[0] + Ts[182],
    om = Ts[882] + Ts[57] + Ts[630] + Ts[57] + Ts[274],
    fm = Ts[759] + Ts[0] + Ts[182] + Ts[0] + Ts[20],
    _m = Ts[882] + Ts[57] + Ts[881] + Ts[57] + Ts[632],
    cm = Ts[882] + Ts[57] + Ts[881] + Ts[57] + Ts[641],
    um = Ts[882] + Ts[57] + Ts[887],
    dm = Ts[759] + Ts[0] + Ts[169],
    lm = Ts[851] + Ts[57] + Ts[870],
    vm = Ts[856] + Ts[0] + Ts[130],
    bm = Ts[856] + Ts[0] + Ts[130] + Ts[0] + Ts[666],
    gm = Ts[851] + Ts[57] + Ts[870] + Ts[57] + Ts[620] + Ts[57] + Ts[873] + Ts[57] + Ts[874],
    ym = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[883],
    pm = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[632],
    xm = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[432] + Ts[57] + Ts[433],
    Em = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[432] + Ts[57] + Ts[274],
    mm = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[874] + Ts[57] + Ts[63],
    wm = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[630],
    Tm = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[630] + Ts[57] + Ts[274],
    Om = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[881] + Ts[57] + Ts[641],
    Pm = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[887],
    Im = Ts[261] + Ts[0] + Ts[102],
    Sm = Ts[280] + Ts[57] + Ts[632],
    Am = Ts[261] + Ts[0] + Ts[666],
    Mm = Ts[280] + Ts[57] + Ts[889],
    km = Ts[261] + Ts[0] + Ts[659],
    Lm = Ts[261] + Ts[0] + Ts[659] + Ts[0] + Ts[20],
    Cm = Ts[280] + Ts[57] + Ts[620] + Ts[57] + Ts[873],
    Rm = Ts[261] + Ts[0] + Ts[132] + Ts[0] + Ts[872],
    Nm = Ts[280] + Ts[57] + Ts[620] + Ts[57] + Ts[873] + Ts[57] + Ts[874],
    Dm = Ts[280] + Ts[57] + Ts[890] + Ts[57] + Ts[874],
    Bm = Ts[261] + Ts[0] + Ts[215] + Ts[0] + Ts[168],
    jm = Ts[261] + Ts[0] + Ts[232] + Ts[0] + Ts[168],
    $m = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[891],
    Gm = Ts[261] + Ts[0] + Ts[836] + Ts[0] + Ts[892],
    Fm = Ts[261] + Ts[0] + Ts[893] + Ts[0] + Ts[894],
    qm = Ts[261] + Ts[0] + Ts[600],
    zm = Ts[261] + Ts[0] + Ts[895] + Ts[0] + Ts[896],
    Ym = Ts[261] + Ts[0] + Ts[18] + Ts[0] + Ts[897],
    Hm = Ts[261] + Ts[0] + Ts[18] + Ts[0] + Ts[263],
    Um = Ts[261] + Ts[0] + Ts[898],
    Wm = Ts[261] + Ts[0] + Ts[898] + Ts[0] + Ts[458],
    Vm = Ts[256] + Ts[57] + Ts[890],
    Xm = Ts[617] + Ts[0] + Ts[215],
    Km = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[433],
    Zm = Ts[617] + Ts[0] + Ts[215] + Ts[0] + Ts[847],
    Jm = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[874],
    Qm = Ts[617] + Ts[0] + Ts[215] + Ts[0] + Ts[168],
    tw = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[870],
    iw = Ts[617] + Ts[0] + Ts[215] + Ts[0] + Ts[130],
    ew = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[889],
    nw = Ts[617] + Ts[0] + Ts[215] + Ts[0] + Ts[659],
    sw = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[889] + Ts[57] + Ts[274],
    rw = Ts[617] + Ts[0] + Ts[215] + Ts[0] + Ts[132] + Ts[0] + Ts[872],
    hw = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[620] + Ts[57] + Ts[873] + Ts[57] + Ts[874],
    aw = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[875] + Ts[57] + Ts[632],
    ow = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[875] + Ts[57] + Ts[641],
    fw = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[620] + Ts[57] + Ts[621],
    _w = Ts[617] + Ts[0] + Ts[215] + Ts[0] + Ts[132] + Ts[0] + Ts[877],
    cw = Ts[617] + Ts[0] + Ts[215] + Ts[0] + Ts[132] + Ts[0] + Ts[210],
    uw = Ts[617] + Ts[0] + Ts[232],
    dw = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[847],
    lw = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[874],
    vw = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[168],
    bw = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[870],
    gw = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[130],
    yw = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[870] + Ts[57] + Ts[274],
    pw = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[659],
    xw = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[132] + Ts[0] + Ts[872],
    Ew = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[620] + Ts[57] + Ts[873] + Ts[57] + Ts[874],
    mw = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[660] + Ts[0] + Ts[666],
    ww = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[875] + Ts[57] + Ts[641],
    Tw = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[620] + Ts[57] + Ts[621],
    Ow = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[132] + Ts[0] + Ts[877],
    Pw = Ts[617] + Ts[0] + Ts[232] + Ts[0] + Ts[132] + Ts[0] + Ts[210],
    Iw = Ts[104] + Ts[47] + Ts[899] + Ts[27] + Ts[268],
    Sw = Ts[869] + Ts[57] + Ts[632] + Ts[57] + Ts[149] + Ts[57] + Ts[150],
    Aw = Ts[661] + Ts[13] + Ts[655] + Ts[47] + Ts[900] + Ts[49] + Ts[212],
    Mw = Ts[365] + Ts[47] + Ts[901],
    kw = Ts[666],
    Lw = Ts[882] + Ts[57] + Ts[902] + Ts[57] + Ts[884],
    Cw = Ts[886] + Ts[27] + Ts[449],
    Rw = Ts[882] + Ts[57] + Ts[432] + Ts[57] + Ts[433],
    Nw = Ts[882] + Ts[57] + Ts[432] + Ts[57] + Ts[434],
    Dw = Ts[177] + Ts[133] + Ts[134],
    Bw = Ts[865] + Ts[27] + Ts[903],
    jw = Ts[882] + Ts[57] + Ts[299],
    $w = Ts[182] + Ts[110] + Ts[183],
    Gw = Ts[882] + Ts[57] + Ts[630],
    Fw = Ts[169],
    qw = Ts[173] + Ts[71] + Ts[174],
    zw = Ts[401] + Ts[47] + Ts[899],
    Yw = Ts[12] + Ts[47] + Ts[899] + Ts[27] + Ts[268] + Ts[13] + Ts[481],
    Hw = Ts[104] + Ts[13] + Ts[14],
    Uw = Ts[342] + Ts[31] + Ts[904],
    Ww = Ts[342] + Ts[47] + Ts[899] + Ts[27] + Ts[266],
    Vw = Ts[104] + Ts[47] + Ts[899] + Ts[27] + Ts[268] + Ts[5],
    Xw = Ts[269] + Ts[27] + Ts[266],
    Kw = Ts[104] + Ts[47] + Ts[899],
    Zw = Ts[905],
    Jw = Ts[363],
    Qw = Ts[12] + Ts[47] + Ts[279] + Ts[13] + Ts[483],
    tT = Ts[308] + Ts[13] + Ts[483],
    iT = Ts[104] + Ts[110] + Ts[118],
    eT = Ts[308],
    nT = Ts[144] + Ts[906],
    sT = Ts[117] + Ts[49] + Ts[907] + Ts[47] + Ts[279],
    rT = Ts[42] + Ts[660] + Ts[179] + Ts[180],
    hT = Ts[42] + Ts[661] + Ts[13] + Ts[655],
    aT = Ts[42] + Ts[661] + Ts[13] + Ts[655] + Ts[47] + Ts[900] + Ts[49] + Ts[212],
    oT = Ts[34] + Ts[15] + Ts[908],
    fT = Ts[432] + Ts[57] + Ts[274],
    _T = Ts[659],
    cT = Ts[838] + Ts[47] + Ts[279],
    uT = Ts[44] + Ts[47] + Ts[279],
    dT = Ts[123] + Ts[192] + Ts[909] + Ts[15] + Ts[910],
    lT = Ts[123] + Ts[21] + Ts[113] + Ts[15] + Ts[910],
    vT = Ts[215] + Ts[15] + Ts[910] + Ts[31] + Ts[863],
    bT = Ts[179] + Ts[180],
    gT = Ts[215] + Ts[15] + Ts[910] + Ts[71] + Ts[862],
    yT = Ts[215] + Ts[15] + Ts[910] + Ts[192] + Ts[911] + Ts[179] + Ts[180],
    pT = Ts[44] + Ts[31] + Ts[863],
    xT = Ts[232] + Ts[15] + Ts[910] + Ts[71] + Ts[862],
    ET = Ts[232] + Ts[15] + Ts[910] + Ts[192] + Ts[911] + Ts[179] + Ts[180],
    mT = Ts[232] + Ts[15] + Ts[910] + Ts[31] + Ts[863],
    wT = Ts[15] + Ts[910] + Ts[71] + Ts[129],
    TT = Ts[15] + Ts[910] + Ts[71] + Ts[129] + Ts[71] + Ts[290],
    OT = Ts[15] + Ts[910] + Ts[71] + Ts[862],
    PT = Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[45] + Ts[184],
    IT = Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[45] + Ts[184] + Ts[90] + Ts[187],
    ST = Ts[15] + Ts[910] + Ts[192] + Ts[911] + Ts[13] + Ts[655],
    AT = Ts[15] + Ts[910] + Ts[192] + Ts[911] + Ts[179] + Ts[180],
    MT = Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[13] + Ts[656],
    kT = Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[657] + Ts[658],
    LT = Ts[15] + Ts[910] + Ts[90] + Ts[912],
    CT = Ts[15] + Ts[910] + Ts[90] + Ts[912] + Ts[71] + Ts[290],
    RT = Ts[160] + Ts[15] + Ts[910],
    NT = Ts[173] + Ts[15] + Ts[910],
    DT = Ts[57] + Ts[560] + Ts[128],
    BT = Ts[280] + Ts[57] + Ts[207],
    jT = Ts[871],
    $T = Ts[280] + Ts[57] + Ts[649] + Ts[57] + Ts[874],
    GT = Ts[620] + Ts[57] + Ts[624],
    FT = Ts[215] + Ts[15] + Ts[910],
    qT = Ts[215] + Ts[15] + Ts[910] + Ts[71] + Ts[174],
    zT = Ts[215] + Ts[15] + Ts[910] + Ts[90] + Ts[187],
    YT = Ts[215] + Ts[15] + Ts[910] + Ts[71] + Ts[129],
    HT = Ts[215] + Ts[15] + Ts[910] + Ts[71] + Ts[129] + Ts[71] + Ts[290],
    UT = Ts[215] + Ts[15] + Ts[910] + Ts[90] + Ts[912],
    WT = Ts[215] + Ts[15] + Ts[910] + Ts[192] + Ts[911] + Ts[13] + Ts[655],
    VT = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[620] + Ts[57] + Ts[873],
    XT = Ts[215] + Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[45] + Ts[184],
    KT = Ts[256] + Ts[57] + Ts[890] + Ts[57] + Ts[620] + Ts[57] + Ts[624],
    ZT = Ts[215] + Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[657] + Ts[658],
    JT = Ts[215] + Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[13] + Ts[656],
    QT = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[433],
    tO = Ts[232] + Ts[15] + Ts[910] + Ts[71] + Ts[174],
    iO = Ts[232] + Ts[15] + Ts[910] + Ts[90] + Ts[187],
    eO = Ts[256] + Ts[57] + Ts[649],
    nO = Ts[232] + Ts[15] + Ts[910],
    sO = Ts[232] + Ts[15] + Ts[910] + Ts[71] + Ts[129],
    rO = Ts[232] + Ts[15] + Ts[910] + Ts[71] + Ts[129] + Ts[71] + Ts[290],
    hO = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[889],
    aO = Ts[232] + Ts[15] + Ts[910] + Ts[90] + Ts[912],
    oO = Ts[232] + Ts[15] + Ts[910] + Ts[90] + Ts[912] + Ts[71] + Ts[290],
    fO = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[875] + Ts[57] + Ts[632],
    _O = Ts[232] + Ts[15] + Ts[910] + Ts[192] + Ts[911] + Ts[13] + Ts[655],
    cO = Ts[232] + Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[45] + Ts[184],
    uO = Ts[232] + Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[657] + Ts[658],
    dO = Ts[232] + Ts[15] + Ts[910] + Ts[31] + Ts[185] + Ts[13] + Ts[656],
    lO = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[884],
    vO = Ts[836] + Ts[31] + Ts[904],
    bO = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[432] + Ts[57] + Ts[434],
    gO = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[853],
    yO = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[633],
    pO = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[299],
    xO = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[874] + Ts[57] + Ts[64],
    EO = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[881] + Ts[57] + Ts[632],
    mO = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[913],
    wO = Ts[126] + Ts[47] + Ts[235] + Ts[25] + Ts[837],
    TO = Ts[410] + Ts[47] + Ts[914],
    OO = Ts[44] + Ts[47] + Ts[235] + Ts[31] + Ts[904],
    PO = Ts[24] + Ts[47] + Ts[235] + Ts[31] + Ts[904],
    IO = Ts[915],
    SO = Ts[916],
    AO = Ts[123] + Ts[27] + Ts[917],
    MO = Ts[918] + Ts[47] + Ts[235] + Ts[31] + Ts[904],
    kO = Ts[280] + Ts[57] + Ts[272] + Ts[57] + Ts[381],
    LO = Ts[57] + Ts[5] + Ts[919],
    CO = Ts[630],
    RO = Ts[630] + Ts[57] + Ts[620] + Ts[57] + Ts[873] + Ts[57] + Ts[874],
    NO = Ts[182] + Ts[31] + Ts[185] + Ts[45] + Ts[184] + Ts[90] + Ts[187],
    DO = Ts[57] + Ts[140] + Ts[259] + Ts[529],
    BO = Ts[247] + Ts[57] + Ts[889],
    jO = Ts[247] + Ts[57] + Ts[889] + Ts[57] + Ts[274],
    $O = Ts[247] + Ts[57] + Ts[620] + Ts[57] + Ts[873],
    GO = Ts[206] + Ts[57] + Ts[630] + Ts[57] + Ts[632],
    FO = Ts[225] + Ts[19] + Ts[225],
    qO = Ts[197] + Ts[25] + Ts[198] + Ts[110] + Ts[920],
    zO = Ts[225],
    YO = Ts[921] + Ts[15] + Ts[213] + Ts[13] + Ts[922],
    HO = Ts[451],
    UO = Ts[278] + Ts[127] + Ts[190],
    WO = Ts[628] + Ts[57] + Ts[923],
    VO = Ts[65] + Ts[133] + Ts[134],
    XO = Ts[882] + Ts[57] + Ts[632],
    KO = Ts[144] + Ts[924],
    ZO = Ts[851] + Ts[57] + Ts[881] + Ts[57] + Ts[632],
    JO = Ts[256] + Ts[57] + Ts[433],
    QO = Ts[280] + Ts[57] + Ts[297],
    tP = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[882] + Ts[57] + Ts[925] + Ts[57] + Ts[884],
    iP = Ts[144] + Ts[926] + Ts[927] + Ts[258],
    eP = Ts[144] + Ts[928] + Ts[25] + Ts[225],
    nP = Ts[929] + Ts[0] + Ts[930],
    sP = Ts[338] + Ts[57] + Ts[298],
    rP = Ts[929] + Ts[0] + Ts[334],
    hP = Ts[929] + Ts[0] + Ts[931],
    aP = Ts[338] + Ts[57] + Ts[932],
    oP = Ts[44] + Ts[25] + Ts[26] + Ts[47] + Ts[48] + Ts[127] + Ts[190],
    fP = Ts[933],
    _P = Ts[173] + Ts[110] + Ts[934],
    cP = Ts[12] + Ts[27] + Ts[268] + Ts[13] + Ts[481],
    uP = Ts[57] + Ts[935],
    dP = Ts[307] + Ts[49] + Ts[484],
    lP = Ts[197] + Ts[25] + Ts[198] + Ts[47] + Ts[48] + Ts[45] + Ts[936] + Ts[192] + Ts[937],
    vP = Ts[52] + Ts[415],
    bP = Ts[85] + Ts[436] + Ts[19] + Ts[938],
    gP = Ts[338] + Ts[57] + Ts[939],
    yP = Ts[940] + Ts[0] + Ts[124],
    pP = Ts[374],
    xP = Ts[941] + Ts[343] + Ts[942],
    EP = Ts[943],
    mP = Ts[406] + Ts[25] + Ts[51],
    wP = Ts[131] + Ts[21] + Ts[944],
    TP = Ts[34],
    OP = Ts[232] + Ts[31] + Ts[945],
    PP = Ts[321] + Ts[212],
    IP = Ts[24] + Ts[21] + Ts[88],
    SP = Ts[24] + Ts[71] + Ts[305] + Ts[321] + Ts[212],
    AP = Ts[179] + Ts[857],
    MP = Ts[24] + Ts[179] + Ts[857],
    kP = Ts[24] + Ts[321] + Ts[212],
    LP = Ts[12] + Ts[25] + Ts[26] + Ts[13] + Ts[946],
    CP = Ts[947] + Ts[57] + Ts[948],
    RP = Ts[12] + Ts[127] + Ts[949] + Ts[25] + Ts[51],
    NP = Ts[950],
    DP = Ts[951],
    BP = Ts[671] + Ts[21] + Ts[113],
    jP = Ts[43] + Ts[31] + Ts[952],
    $P = Ts[313] + Ts[21] + Ts[113],
    GP = Ts[350] + Ts[15] + Ts[213],
    FP = Ts[953] + Ts[64],
    qP = Ts[954],
    zP = Ts[953] + Ts[21] + Ts[113],
    YP = Ts[955],
    HP = Ts[117] + Ts[31] + Ts[863],
    UP = Ts[126] + Ts[49] + Ts[956],
    WP = Ts[104] + Ts[13] + Ts[957] + Ts[127] + Ts[949],
    VP = Ts[958],
    XP = Ts[57] + Ts[959],
    KP = Ts[45] + Ts[960] + Ts[19] + Ts[25] + Ts[961] + Ts[771],
    ZP = Ts[401] + Ts[71] + Ts[588],
    JP = Ts[71] + Ts[305],
    QP = Ts[31] + Ts[185],
    tI = Ts[71] + Ts[862],
    iI = Ts[247] + Ts[57] + Ts[875] + Ts[57] + Ts[632],
    eI = Ts[24] + Ts[25] + Ts[234],
    nI = Ts[25] + Ts[234],
    sI = Ts[261] + Ts[962] + Ts[834],
    rI = Ts[377] + Ts[27] + Ts[266],
    hI = Ts[963] + Ts[25] + Ts[438] + Ts[31] + Ts[904],
    aI = Ts[173] + Ts[25] + Ts[26],
    oI = Ts[31] + Ts[904] + Ts[19] + Ts[13] + Ts[964] + Ts[84] + Ts[213] + Ts[19] + Ts[25] + Ts[438],
    fI = Ts[377] + Ts[49] + Ts[212],
    _I = Ts[965],
    cI = Ts[355] + Ts[13] + Ts[966],
    uI = Ts[967] + Ts[49] + Ts[212],
    dI = Ts[365] + Ts[13] + Ts[481] + Ts[45] + Ts[482],
    lI = Ts[918] + Ts[47] + Ts[968],
    vI = Ts[57] + Ts[969],
    bI = Ts[851] + Ts[57] + Ts[870] + Ts[57] + Ts[274],
    gI = Ts[851] + Ts[57] + Ts[870] + Ts[57] + Ts[620] + Ts[57] + Ts[873],
    yI = Ts[864],
    pI = Ts[851] + Ts[57] + Ts[272] + Ts[57] + Ts[248],
    xI = Ts[851] + Ts[57] + Ts[272] + Ts[57] + Ts[604],
    EI = Ts[173] + Ts[192] + Ts[193],
    mI = Ts[970] + Ts[213],
    wI = Ts[131] + Ts[40] + Ts[352] + Ts[35] + Ts[353] + Ts[526] + Ts[527] + Ts[528] + Ts[148] + Ts[529] + Ts[530] + Ts[531] + Ts[225] + Ts[532] + Ts[533] + Ts[534] + Ts[535] + Ts[536] + Ts[489] + Ts[971] + Ts[113] + Ts[972] + Ts[916] + Ts[49] + Ts[973] + Ts[540] + Ts[455] + Ts[5] + Ts[541] + Ts[225] + Ts[190] + Ts[5] + Ts[192] + Ts[48] + Ts[542] + Ts[539] + Ts[529] + Ts[543] + Ts[455] + Ts[544] + Ts[128] + Ts[545] + Ts[140] + Ts[546] + Ts[258] + Ts[547] + Ts[974] + Ts[975] + Ts[976] + Ts[479] + Ts[321] + Ts[977] + Ts[343] + Ts[140] + Ts[226] + Ts[127] + Ts[919] + Ts[226] + Ts[978] + Ts[979] + Ts[127] + Ts[980] + Ts[981] + Ts[35] + Ts[982] + Ts[983] + Ts[984] + Ts[179] + Ts[227] + Ts[985] + Ts[190] + Ts[986] + Ts[987] + Ts[45] + Ts[190] + Ts[47] + Ts[535] + Ts[988] + Ts[35] + Ts[226] + Ts[989] + Ts[213] + Ts[226] + Ts[990] + Ts[225] + Ts[991] + Ts[259] + Ts[25] + Ts[916] + Ts[992] + Ts[259] + Ts[993] + Ts[225] + Ts[529] + Ts[994] + Ts[995] + Ts[996] + Ts[5] + Ts[91] + Ts[321] + Ts[688] + Ts[535] + Ts[5] + Ts[91] + Ts[64] + Ts[916] + Ts[445] + Ts[997] + Ts[998] + Ts[45] + Ts[999] + Ts[538] + Ts[1000] + Ts[27] + Ts[539] + Ts[35] + Ts[259] + Ts[452] + Ts[1001] + Ts[555] + Ts[541] + Ts[5] + Ts[1002] + Ts[805] + Ts[1003] + Ts[1004] + Ts[1005] + Ts[531] + Ts[1006] + Ts[531] + Ts[45] + Ts[535] + Ts[141] + Ts[820] + Ts[259] + Ts[386] + Ts[141] + Ts[1007] + Ts[1008] + Ts[1009] + Ts[110] + Ts[141] + Ts[1010] + Ts[63] + Ts[227] + Ts[179] + Ts[445] + Ts[31] + Ts[227] + Ts[1011] + Ts[489] + Ts[275] + Ts[452] + Ts[226] + Ts[1012] + Ts[259] + Ts[570] + Ts[71] + Ts[489] + Ts[1013] + Ts[489] + Ts[1014] + Ts[1015] + Ts[179] + Ts[538] + Ts[1016] + Ts[445] + Ts[218] + Ts[140] + Ts[1017] + Ts[225] + Ts[1018] + Ts[213] + Ts[31] + Ts[529] + Ts[1019] + Ts[454] + Ts[275] + Ts[1020] + Ts[15] + Ts[1021] + Ts[1022] + Ts[141] + Ts[768] + Ts[1023] + Ts[226] + Ts[1024] + Ts[533] + Ts[35] + Ts[192] + Ts[1025] + Ts[227] + Ts[90] + Ts[259] + Ts[27] + Ts[1026] + Ts[1027] + Ts[259] + Ts[1028] + Ts[226] + Ts[489] + Ts[1029] + Ts[140] + Ts[1030] + Ts[48] + Ts[1031] + Ts[225] + Ts[531] + Ts[25] + Ts[779] + Ts[343] + Ts[1032] + Ts[1033] + Ts[453] + Ts[259] + Ts[916] + Ts[1034] + Ts[1035] + Ts[140] + Ts[1036] + Ts[1037] + Ts[1038] + Ts[63] + Ts[445] + Ts[226] + Ts[1039] + Ts[35] + Ts[1040] + Ts[226] + Ts[1041] + Ts[1042] + Ts[5] + Ts[1043] + Ts[1044] + Ts[1045] + Ts[141] + Ts[218] + Ts[140] + Ts[35] + Ts[1046] + Ts[141] + Ts[90] + Ts[1047] + Ts[1002] + Ts[1048] + Ts[78] + Ts[453] + Ts[127] + Ts[128] + Ts[541] + Ts[5] + Ts[343] + Ts[454] + Ts[657] + Ts[768] + Ts[916] + Ts[49] + Ts[452] + Ts[35] + Ts[489] + Ts[25] + Ts[91] + Ts[5] + Ts[343] + Ts[538] + Ts[916] + Ts[1049] + Ts[820] + Ts[5] + Ts[192] + Ts[1050] + Ts[133] + Ts[1051] + Ts[226] + Ts[1052] + Ts[1053] + Ts[919] + Ts[1022] + Ts[560] + Ts[455] + Ts[31] + Ts[479] + Ts[259] + Ts[1054] + Ts[539] + Ts[489] + Ts[47] + Ts[227] + Ts[1055] + Ts[226] + Ts[63] + Ts[916] + Ts[15] + Ts[128] + Ts[225] + Ts[275] + Ts[916] + Ts[1056] + Ts[1057] + Ts[35] + Ts[225] + Ts[25] + Ts[128] + Ts[110] + Ts[1057] + Ts[343] + Ts[141] + Ts[1058] + Ts[141] + Ts[1059] + Ts[1060] + Ts[1061] + Ts[190] + Ts[15] + Ts[529] + Ts[1008] + Ts[479] + Ts[258] + Ts[45] + Ts[1062] + Ts[35] + Ts[1063] + Ts[657] + Ts[227] + Ts[489] + Ts[1064] + Ts[35] + Ts[179] + Ts[455] + Ts[538] + Ts[1065] + Ts[71] + Ts[35] + Ts[5] + Ts[1066] + Ts[49] + Ts[555] + Ts[78] + Ts[259] + Ts[35] + Ts[227] + Ts[49] + Ts[539] + Ts[1067] + Ts[1063] + Ts[1068] + Ts[1069] + Ts[179] + Ts[489] + Ts[225] + Ts[179] + Ts[226] + Ts[916] + Ts[1070] + Ts[141] + Ts[916] + Ts[258] + Ts[1071] + Ts[1072] + Ts[1073] + Ts[179] + Ts[1074] + Ts[1075] + Ts[454] + Ts[657] + Ts[1076] + Ts[133] + Ts[5] + Ts[321] + Ts[531] + Ts[226] + Ts[35] + Ts[489] + Ts[560] + Ts[35] + Ts[539] + Ts[1077] + Ts[1078] + Ts[45] + Ts[1079] + Ts[1059] + Ts[560] + Ts[1080] + Ts[452] + Ts[110] + Ts[529] + Ts[1081] + Ts[213] + Ts[258] + Ts[1074] + Ts[21] + Ts[1082] + Ts[916] + Ts[48] + Ts[1083] + Ts[538] + Ts[1084] + Ts[453] + Ts[1085] + Ts[565] + Ts[226] + Ts[1086] + Ts[5] + Ts[35] + Ts[1087] + Ts[275] + Ts[453] + Ts[916] + Ts[1088] + Ts[275] + Ts[1057] + Ts[343] + Ts[1089] + Ts[259] + Ts[916] + Ts[1090] + Ts[343] + Ts[1091] + Ts[1092] + Ts[1093] + Ts[225] + Ts[1094] + Ts[1095] + Ts[343] + Ts[141] + Ts[531] + Ts[31] + Ts[1096] + Ts[538] + Ts[1074] + Ts[1097] + Ts[226] + Ts[479] + Ts[63] + Ts[140] + Ts[1098] + Ts[453] + Ts[5] + Ts[1099] + Ts[1100] + Ts[1101] + Ts[5] + Ts[321] + Ts[454] + Ts[1102] + Ts[565] + Ts[1103] + Ts[140] + Ts[916] + Ts[1104] + Ts[226] + Ts[1105] + Ts[213] + Ts[225] + Ts[1106] + Ts[340] + Ts[113] + Ts[321] + Ts[535] + Ts[63] + Ts[919] + Ts[1107] + Ts[1108] + Ts[1109] + Ts[919] + Ts[21] + Ts[1110] + Ts[538] + Ts[27] + Ts[1074] + Ts[192] + Ts[560] + Ts[1111] + Ts[1074] + Ts[179] + Ts[1112] + Ts[1113] + Ts[1114] + Ts[340] + Ts[1115] + Ts[1116] + Ts[213] + Ts[227] + Ts[63] + Ts[1117] + Ts[560] + Ts[133] + Ts[1057] + Ts[539] + Ts[90] + Ts[1057] + Ts[1118] + Ts[560] + Ts[1016] + Ts[141] + Ts[190] + Ts[227] + Ts[321] + Ts[48] + Ts[218] + Ts[529] + Ts[64] + Ts[454] + Ts[657] + Ts[227] + Ts[71] + Ts[1119] + Ts[78] + Ts[1057] + Ts[78] + Ts[1120] + Ts[541] + Ts[1121] + Ts[259] + Ts[1122] + Ts[916] + Ts[45] + Ts[1123] + Ts[1124] + Ts[445] + Ts[259] + Ts[78] + Ts[1125] + Ts[78] + Ts[538] + Ts[63] + Ts[529] + Ts[916] + Ts[340] + Ts[227] + Ts[128] + Ts[1126] + Ts[1127] + Ts[179] + Ts[225] + Ts[140] + Ts[179] + Ts[226] + Ts[453] + Ts[13] + Ts[479] + Ts[21] + Ts[48] + Ts[64] + Ts[768] + Ts[226] + Ts[140] + Ts[538] + Ts[1128] + Ts[63] + Ts[141] + Ts[1129] + Ts[560] + Ts[13] + Ts[531] + Ts[258] + Ts[71] + Ts[455] + Ts[340] + Ts[768] + Ts[538] + Ts[91] + Ts[45] + Ts[1130] + Ts[1131] + Ts[213] + Ts[64] + Ts[560] + Ts[562] + Ts[5] + Ts[179] + Ts[1132] + Ts[1133] + Ts[531] + Ts[192] + Ts[35] + Ts[48] + Ts[560] + Ts[820] + Ts[31] + Ts[1134] + Ts[133] + Ts[1135] + Ts[1136] + Ts[35] + Ts[445] + Ts[1137] + Ts[916] + Ts[1138] + Ts[538] + Ts[179] + Ts[113] + Ts[110] + Ts[1057] + Ts[225] + Ts[291] + Ts[565] + Ts[1139] + Ts[1140] + Ts[574] + Ts[113] + Ts[258] + Ts[1141] + Ts[258] + Ts[190] + Ts[1142] + Ts[454] + Ts[27] + Ts[560] + Ts[47] + Ts[1143] + Ts[1144] + Ts[916] + Ts[128] + Ts[226] + Ts[806] + Ts[1145] + Ts[1146] + Ts[227] + Ts[1147] + Ts[213] + Ts[49] + Ts[768] + Ts[1148] + Ts[259] + Ts[768] + Ts[25] + Ts[454] + Ts[90] + Ts[258] + Ts[90] + Ts[479] + Ts[1149] + Ts[562] + Ts[259] + Ts[190] + Ts[1150] + Ts[1151] + Ts[1152] + Ts[455] + Ts[133] + Ts[5] + Ts[1153] + Ts[227] + Ts[321] + Ts[555] + Ts[1154] + Ts[445] + Ts[1155] + Ts[820] + Ts[657] + Ts[555] + Ts[1156] + Ts[1157] + Ts[1158] + Ts[1159] + Ts[1160] + Ts[1161] + Ts[1162] + Ts[71] + Ts[225] + Ts[541] + Ts[539] + Ts[1163] + Ts[141] + Ts[1164] + Ts[1165] + Ts[259] + Ts[531] + Ts[1166] + Ts[128] + Ts[71] + Ts[258] + Ts[1167] + Ts[275] + Ts[140] + Ts[141] + Ts[1168] + Ts[90] + Ts[1169] + Ts[1170] + Ts[1057] + Ts[27] + Ts[190] + Ts[1171] + Ts[452] + Ts[1172] + Ts[15] + Ts[141] + Ts[820] + Ts[538] + Ts[445] + Ts[340] + Ts[453] + Ts[141] + Ts[179] + Ts[489] + Ts[45] + Ts[141] + Ts[479] + Ts[71] + Ts[1173] + Ts[259] + Ts[1174] + Ts[133] + Ts[445] + Ts[192] + Ts[225] + Ts[1074] + Ts[21] + Ts[539] + Ts[1057] + Ts[1175] + Ts[916] + Ts[452] + Ts[45] + Ts[539] + Ts[140] + Ts[141] + Ts[479] + Ts[1176] + Ts[555] + Ts[141] + Ts[916] + Ts[71] + Ts[1177] + Ts[1178] + Ts[25] + Ts[479] + Ts[259] + Ts[453] + Ts[1179] + Ts[227] + Ts[1180] + Ts[916] + Ts[1057] + Ts[227] + Ts[343] + Ts[1181] + Ts[141] + Ts[1182] + Ts[560] + Ts[47] + Ts[1074] + Ts[90] + Ts[259] + Ts[1183] + Ts[340] + Ts[1074] + Ts[1184] + Ts[562] + Ts[259] + Ts[213] + Ts[1185] + Ts[48] + Ts[5] + Ts[1186] + Ts[49] + Ts[531] + Ts[227] + Ts[1187] + Ts[565] + Ts[21] + Ts[1074] + Ts[1188] + Ts[225] + Ts[1063] + Ts[1189] + Ts[1190] + Ts[5] + Ts[1191] + Ts[916] + Ts[1192] + Ts[1193] + Ts[27] + Ts[258] + Ts[529] + Ts[538] + Ts[455] + Ts[63] + Ts[1194] + Ts[579] + Ts[258] + Ts[580] + Ts[94],
    TI = Ts[131] + Ts[40] + Ts[352] + Ts[35] + Ts[353] + Ts[526] + Ts[527] + Ts[528] + Ts[148] + Ts[529] + Ts[530] + Ts[531] + Ts[225] + Ts[532] + Ts[533] + Ts[534] + Ts[535] + Ts[536] + Ts[489] + Ts[1195] + Ts[489] + Ts[1196] + Ts[35] + Ts[110] + Ts[128] + Ts[916] + Ts[141] + Ts[540] + Ts[455] + Ts[5] + Ts[541] + Ts[225] + Ts[190] + Ts[5] + Ts[192] + Ts[48] + Ts[542] + Ts[539] + Ts[529] + Ts[543] + Ts[455] + Ts[544] + Ts[128] + Ts[545] + Ts[140] + Ts[546] + Ts[258] + Ts[547] + Ts[974] + Ts[1197] + Ts[976] + Ts[479] + Ts[321] + Ts[453] + Ts[1198] + Ts[1063] + Ts[916] + Ts[1199] + Ts[140] + Ts[1200] + Ts[919] + Ts[538] + Ts[555] + Ts[1201] + Ts[489] + Ts[1202] + Ts[453] + Ts[1203] + Ts[535] + Ts[15] + Ts[529] + Ts[1204] + Ts[48] + Ts[225] + Ts[1205] + Ts[1194] + Ts[343] + Ts[1206] + Ts[275] + Ts[91] + Ts[225] + Ts[15] + Ts[916] + Ts[13] + Ts[1207] + Ts[1208] + Ts[445] + Ts[192] + Ts[140] + Ts[321] + Ts[820] + Ts[560] + Ts[1209] + Ts[213] + Ts[275] + Ts[565] + Ts[179] + Ts[1210] + Ts[1211] + Ts[489] + Ts[1212] + Ts[919] + Ts[536] + Ts[213] + Ts[179] + Ts[5] + Ts[127] + Ts[454] + Ts[1213] + Ts[555] + Ts[539] + Ts[128] + Ts[5] + Ts[27] + Ts[452] + Ts[225] + Ts[1214] + Ts[1215] + Ts[227] + Ts[63] + Ts[555] + Ts[538] + Ts[90] + Ts[91] + Ts[321] + Ts[1216] + Ts[1217] + Ts[35] + Ts[190] + Ts[1218] + Ts[1219] + Ts[340] + Ts[1220] + Ts[64] + Ts[453] + Ts[192] + Ts[1221] + Ts[1222] + Ts[535] + Ts[560] + Ts[91] + Ts[916] + Ts[140] + Ts[218] + Ts[1223] + Ts[25] + Ts[1224] + Ts[538] + Ts[63] + Ts[128] + Ts[916] + Ts[48] + Ts[1225] + Ts[560] + Ts[820] + Ts[1226] + Ts[555] + Ts[1227] + Ts[768] + Ts[141] + Ts[1228] + Ts[192] + Ts[113] + Ts[227] + Ts[916] + Ts[1229] + Ts[1230] + Ts[35] + Ts[1231] + Ts[562] + Ts[1232] + Ts[1233] + Ts[35] + Ts[539] + Ts[1234] + Ts[1235] + Ts[35] + Ts[479] + Ts[15] + Ts[1236] + Ts[1205] + Ts[555] + Ts[1237] + Ts[453] + Ts[1238] + Ts[128] + Ts[179] + Ts[227] + Ts[455] + Ts[225] + Ts[1239] + Ts[225] + Ts[1240] + Ts[45] + Ts[141] + Ts[15] + Ts[1063] + Ts[35] + Ts[232] + Ts[340] + Ts[225] + Ts[1241] + Ts[1242] + Ts[916] + Ts[1243] + Ts[452] + Ts[258] + Ts[1244] + Ts[1063] + Ts[127] + Ts[453] + Ts[1245] + Ts[128] + Ts[15] + Ts[225] + Ts[1246] + Ts[1057] + Ts[1247] + Ts[1248] + Ts[1249] + Ts[531] + Ts[1250] + Ts[179] + Ts[1251] + Ts[1252] + Ts[192] + Ts[1253] + Ts[179] + Ts[489] + Ts[1254] + Ts[1074] + Ts[1255] + Ts[538] + Ts[553] + Ts[919] + Ts[227] + Ts[35] + Ts[538] + Ts[321] + Ts[1256] + Ts[1213] + Ts[916] + Ts[768] + Ts[25] + Ts[113] + Ts[226] + Ts[1257] + Ts[258] + Ts[1258] + Ts[1259] + Ts[192] + Ts[531] + Ts[259] + Ts[1260] + Ts[445] + Ts[541] + Ts[1261] + Ts[227] + Ts[916] + Ts[226] + Ts[78] + Ts[213] + Ts[343] + Ts[565] + Ts[63] + Ts[455] + Ts[141] + Ts[541] + Ts[1057] + Ts[227] + Ts[213] + Ts[225] + Ts[340] + Ts[48] + Ts[538] + Ts[541] + Ts[538] + Ts[1262] + Ts[15] + Ts[91] + Ts[133] + Ts[489] + Ts[1263] + Ts[1264] + Ts[1265] + Ts[1266] + Ts[1267] + Ts[5] + Ts[445] + Ts[275] + Ts[1268] + Ts[25] + Ts[226] + Ts[1269] + Ts[275] + Ts[1270] + Ts[275] + Ts[1271] + Ts[1272] + Ts[110] + Ts[445] + Ts[1273] + Ts[919] + Ts[5] + Ts[454] + Ts[1254] + Ts[91] + Ts[539] + Ts[1274] + Ts[1275] + Ts[1276] + Ts[21] + Ts[1074] + Ts[15] + Ts[1277] + Ts[541] + Ts[529] + Ts[1278] + Ts[1279] + Ts[275] + Ts[1280] + Ts[275] + Ts[538] + Ts[454] + Ts[1281] + Ts[1282] + Ts[45] + Ts[1283] + Ts[15] + Ts[562] + Ts[1284] + Ts[529] + Ts[539] + Ts[63] + Ts[1063] + Ts[539] + Ts[110] + Ts[919] + Ts[1251] + Ts[445] + Ts[90] + Ts[258] + Ts[47] + Ts[697] + Ts[1057] + Ts[63] + Ts[489] + Ts[90] + Ts[479] + Ts[1285] + Ts[452] + Ts[657] + Ts[258] + Ts[1286] + Ts[565] + Ts[541] + Ts[226] + Ts[110] + Ts[555] + Ts[259] + Ts[90] + Ts[529] + Ts[218] + Ts[113] + Ts[1287] + Ts[455] + Ts[226] + Ts[1288] + Ts[1289] + Ts[259] + Ts[1290] + Ts[1291] + Ts[1292] + Ts[1293] + Ts[226] + Ts[1294] + Ts[127] + Ts[1074] + Ts[1295] + Ts[562] + Ts[1172] + Ts[127] + Ts[1296] + Ts[226] + Ts[535] + Ts[13] + Ts[1297] + Ts[64] + Ts[227] + Ts[535] + Ts[227] + Ts[64] + Ts[5] + Ts[555] + Ts[25] + Ts[1298] + Ts[141] + Ts[555] + Ts[1299] + Ts[1057] + Ts[49] + Ts[1300] + Ts[218] + Ts[452] + Ts[1216] + Ts[1301] + Ts[179] + Ts[565] + Ts[1302] + Ts[1303] + Ts[27] + Ts[1304] + Ts[916] + Ts[820] + Ts[133] + Ts[565] + Ts[224] + Ts[113] + Ts[657] + Ts[565] + Ts[179] + Ts[560] + Ts[179] + Ts[1305] + Ts[227] + Ts[63] + Ts[226] + Ts[21] + Ts[1306] + Ts[226] + Ts[48] + Ts[15] + Ts[259] + Ts[1307] + Ts[1054] + Ts[1308] + Ts[1309] + Ts[657] + Ts[91] + Ts[27] + Ts[560] + Ts[479] + Ts[49] + Ts[453] + Ts[1310] + Ts[141] + Ts[13] + Ts[560] + Ts[13] + Ts[226] + Ts[531] + Ts[49] + Ts[535] + Ts[1311] + Ts[562] + Ts[1312] + Ts[1313] + Ts[225] + Ts[531] + Ts[657] + Ts[213] + Ts[1314] + Ts[489] + Ts[1315] + Ts[531] + Ts[1316] + Ts[48] + Ts[1317] + Ts[555] + Ts[538] + Ts[1318] + Ts[691] + Ts[27] + Ts[48] + Ts[1005] + Ts[226] + Ts[71] + Ts[565] + Ts[218] + Ts[529] + Ts[539] + Ts[63] + Ts[1319] + Ts[1320] + Ts[190] + Ts[343] + Ts[1321] + Ts[1057] + Ts[225] + Ts[64] + Ts[226] + Ts[1322] + Ts[5] + Ts[1323] + Ts[560] + Ts[445] + Ts[343] + Ts[1324] + Ts[1325] + Ts[1132] + Ts[127] + Ts[227] + Ts[1326] + Ts[5] + Ts[1327] + Ts[141] + Ts[321] + Ts[453] + Ts[63] + Ts[128] + Ts[343] + Ts[259] + Ts[140] + Ts[1328] + Ts[5] + Ts[1329] + Ts[555] + Ts[258] + Ts[565] + Ts[321] + Ts[128] + Ts[538] + Ts[919] + Ts[90] + Ts[1330] + Ts[1331] + Ts[1332] + Ts[31] + Ts[1333] + Ts[1334] + Ts[226] + Ts[15] + Ts[1335] + Ts[538] + Ts[1336] + Ts[1173] + Ts[259] + Ts[140] + Ts[192] + Ts[565] + Ts[321] + Ts[1337] + Ts[47] + Ts[35] + Ts[445] + Ts[27] + Ts[1338] + Ts[1339] + Ts[25] + Ts[91] + Ts[31] + Ts[1340] + Ts[5] + Ts[455] + Ts[1341] + Ts[1262] + Ts[35] + Ts[340] + Ts[916] + Ts[15] + Ts[128] + Ts[258] + Ts[1342] + Ts[321] + Ts[1074] + Ts[1343] + Ts[479] + Ts[78] + Ts[919] + Ts[227] + Ts[1344] + Ts[539] + Ts[1345] + Ts[225] + Ts[1346] + Ts[35] + Ts[321] + Ts[565] + Ts[21] + Ts[1347] + Ts[35] + Ts[1348] + Ts[539] + Ts[454] + Ts[1349] + Ts[259] + Ts[445] + Ts[25] + Ts[555] + Ts[657] + Ts[445] + Ts[539] + Ts[1350] + Ts[218] + Ts[452] + Ts[225] + Ts[541] + Ts[550] + Ts[45] + Ts[535] + Ts[916] + Ts[31] + Ts[190] + Ts[49] + Ts[227] + Ts[1074] + Ts[5] + Ts[1074] + Ts[539] + Ts[140] + Ts[1351] + Ts[140] + Ts[1352] + Ts[560] + Ts[321] + Ts[141] + Ts[192] + Ts[1353] + Ts[1354] + Ts[258] + Ts[25] + Ts[1355] + Ts[657] + Ts[1356] + Ts[1357],
    OI = Ts[1358] + Ts[115],
    PI = Ts[1359] + Ts[19] + Ts[225] + Ts[0] + Ts[5] + Ts[1063] + Ts[19] + Ts[1360] + Ts[23] + Ts[519],
    II = Ts[1361],
    SI = Ts[767],
    AI = Ts[0] + Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[321] + Ts[323] + Ts[19] + Ts[325],
    MI = Ts[1359] + Ts[40] + Ts[226] + Ts[526] + Ts[178] + Ts[23] + Ts[666] + Ts[460] + Ts[331] + Ts[146] + Ts[225] + Ts[332] + Ts[225] + Ts[332] + Ts[225] + Ts[332] + Ts[225] + Ts[0] + Ts[258] + Ts[147],
    kI = Ts[0] + Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[321] + Ts[323],
    LI = Ts[1359] + Ts[40] + Ts[225] + Ts[526],
    CI = Ts[1362],
    RI = Ts[40] + Ts[1359] + Ts[19] + Ts[227] + Ts[1063] + Ts[19] + Ts[1363] + Ts[23] + Ts[699] + Ts[146] + Ts[225] + Ts[0] + Ts[538] + Ts[332] + Ts[225] + Ts[332] + Ts[225] + Ts[0] + Ts[538] + Ts[332] + Ts[226] + Ts[147],
    NI = Ts[0] + Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[321] + Ts[323] + Ts[40] + Ts[339],
    DI = Ts[1359] + Ts[40] + Ts[226] + Ts[526],
    BI = Ts[40] + Ts[1359] + Ts[19] + Ts[225] + Ts[0] + Ts[227] + Ts[1063] + Ts[19] + Ts[668],
    jI = Ts[1364] + Ts[47] + Ts[279],
    $I = Ts[0] + Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[71] + Ts[503] + Ts[47] + Ts[1309],
    GI = Ts[644] + Ts[460] + Ts[335] + Ts[526] + Ts[485] + Ts[23] + Ts[1365] + Ts[460] + Ts[182] + Ts[23] + Ts[485] + Ts[526] + Ts[485] + Ts[23] + Ts[597] + Ts[1366] + Ts[1367] + Ts[19] + Ts[225] + Ts[115] + Ts[19] + Ts[225] + Ts[115] + Ts[19] + Ts[226] + Ts[115] + Ts[1368] + Ts[178] + Ts[23] + Ts[666] + Ts[460] + Ts[331] + Ts[146] + Ts[1369] + Ts[148] + Ts[1369] + Ts[148] + Ts[1369] + Ts[148] + Ts[225] + Ts[0] + Ts[227] + Ts[1370] + Ts[182] + Ts[23] + Ts[458] + Ts[460] + Ts[259] + Ts[115] + Ts[526] + Ts[1371] + Ts[460] + Ts[226] + Ts[115] + Ts[526],
    FI = Ts[178] + Ts[23] + Ts[666] + Ts[1366] + Ts[141] + Ts[25] + Ts[141] + Ts[25] + Ts[141] + Ts[25] + Ts[526] + Ts[1362] + Ts[460] + Ts[178] + Ts[23] + Ts[666] + Ts[19] + Ts[225] + Ts[0] + Ts[5] + Ts[1063] + Ts[19] + Ts[668] + Ts[526],
    qI = Ts[1371] + Ts[23] + Ts[9] + Ts[460] + Ts[1358] + Ts[115] + Ts[526],
    zI = Ts[1371] + Ts[23] + Ts[8] + Ts[460] + Ts[1358] + Ts[115] + Ts[526],
    YI = Ts[0] + Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[71] + Ts[503] + Ts[27] + Ts[1372],
    HI = Ts[40] + Ts[1359] + Ts[19] + Ts[227] + Ts[1063] + Ts[19] + Ts[1363] + Ts[23] + Ts[699] + Ts[146] + Ts[225] + Ts[0] + Ts[538] + Ts[332] + Ts[225] + Ts[332] + Ts[225] + Ts[0] + Ts[538] + Ts[332] + Ts[226] + Ts[1370],
    UI = Ts[275] + Ts[23] + Ts[179] + Ts[276] + Ts[23] + Ts[71] + Ts[503] + Ts[27] + Ts[1372],
    WI = Ts[126] + Ts[340],
    VI = Ts[47] + Ts[1373],
    XI = Ts[173] + Ts[71] + Ts[305],
    KI = Ts[620] + Ts[57] + Ts[621],
    ZI = Ts[256] + Ts[57] + Ts[649] + Ts[57] + Ts[620] + Ts[57] + Ts[624],
    JI = Ts[1374],
    QI = Ts[1375],
    tS = Ts[1376] + Ts[57] + Ts[1377],
    iS = Ts[1376] + Ts[57] + Ts[272],
    eS = Ts[380] + Ts[57] + Ts[883] + Ts[57] + Ts[1378] + Ts[57] + Ts[433] + Ts[57] + Ts[1379],
    nS = Ts[380] + Ts[57] + Ts[883] + Ts[57] + Ts[1378] + Ts[57] + Ts[433] + Ts[57] + Ts[1380],
    sS = Ts[940],
    rS = Ts[401] + Ts[45] + Ts[1381],
    hS = Ts[866] + Ts[45] + Ts[1382],
    aS = Ts[1383] + Ts[13] + Ts[212],
    oS = Ts[1384],
    fS = Ts[160] + Ts[27] + Ts[105],
    _S = Ts[44] + Ts[45] + Ts[405] + Ts[45] + Ts[1382] + Ts[71] + Ts[862],
    cS = Ts[647] + Ts[57] + Ts[1385] + Ts[57] + Ts[649],
    uS = Ts[647] + Ts[57] + Ts[620] + Ts[57] + Ts[649],
    dS = Ts[1386],
    lS = Ts[1387],
    vS = Ts[1388],
    bS = Ts[967] + Ts[27] + Ts[105],
    gS = Ts[24] + Ts[31] + Ts[185] + Ts[47] + Ts[48] + Ts[127] + Ts[949],
    yS = Ts[247] + Ts[57] + Ts[870] + Ts[57] + Ts[274],
    pS = Ts[25] + Ts[234] + Ts[52],
    xS = Ts[410] + Ts[31] + Ts[1389] + Ts[192] + Ts[909],
    ES = Ts[410] + Ts[31] + Ts[1389] + Ts[21] + Ts[113],
    mS = Ts[24] + Ts[25] + Ts[234] + Ts[47] + Ts[48] + Ts[127] + Ts[949],
    wS = Ts[13] + Ts[1390] + Ts[71] + Ts[1391] + Ts[25] + Ts[234] + Ts[127] + Ts[949],
    TS = Ts[1392],
    OS = Ts[275] + Ts[23] + Ts[31] + Ts[904] + Ts[25] + Ts[1393],
    PS = Ts[1394] + Ts[1395] + Ts[1271] + Ts[25] + Ts[19] + Ts[226] + Ts[115],
    IS = Ts[258] + Ts[115],
    SS = Ts[485] + Ts[71] + Ts[653],
    AS = Ts[1396],
    MS = Ts[1397],
    kS = Ts[395] + Ts[25] + Ts[1398],
    LS = Ts[1399],
    CS = Ts[1400] + Ts[78] + Ts[79],
    RS = Ts[12] + Ts[343] + Ts[426] + Ts[13] + Ts[481],
    NS = Ts[406] + Ts[25] + Ts[1398],
    DS = Ts[12] + Ts[71] + Ts[174] + Ts[13] + Ts[481],
    BS = Ts[24] + Ts[1401],
    jS = Ts[406] + Ts[25] + Ts[1398] + Ts[133] + Ts[1402] + Ts[13] + Ts[1403] + Ts[90] + Ts[128] + Ts[133] + Ts[826],
    $S = Ts[504],
    GS = Ts[117] + Ts[21] + Ts[88],
    FS = Ts[126] + Ts[25] + Ts[1404],
    qS = Ts[401] + Ts[25] + Ts[51] + Ts[31] + Ts[467],
    zS = Ts[759] + Ts[25] + Ts[1393],
    YS = Ts[1405] + Ts[45] + Ts[1406] + Ts[13] + Ts[1403] + Ts[21] + Ts[113] + Ts[90] + Ts[1407],
    HS = Ts[1408] + Ts[21] + Ts[1409],
    US = Ts[1386] + Ts[31] + Ts[904] + Ts[25] + Ts[1398],
    WS = Ts[401] + Ts[71] + Ts[588] + Ts[47] + Ts[48] + Ts[127] + Ts[949],
    VS = Ts[375],
    XS = Ts[1410] + Ts[19] + Ts[352] + Ts[771],
    KS = Ts[19] + Ts[768] + Ts[19],
    ZS = Ts[1411] + Ts[25] + Ts[961],
    JS = Ts[967] + Ts[45] + Ts[1412] + Ts[25] + Ts[26],
    QS = Ts[126] + Ts[71] + Ts[1413],
    tA = Ts[197] + Ts[25] + Ts[198] + Ts[110] + Ts[920] + Ts[343] + Ts[344] + Ts[52],
    iA = Ts[1414],
    eA = Ts[947] + Ts[57] + Ts[648] + Ts[57] + Ts[1415],
    nA = Ts[160] + Ts[31] + Ts[185] + Ts[127] + Ts[190],
    sA = Ts[637],
    rA = Ts[144] + Ts[1416],
    hA = Ts[144] + Ts[1417],
    aA = Ts[838] + Ts[71] + Ts[309],
    oA = Ts[302] + Ts[57] + Ts[648] + Ts[57] + Ts[1418],
    fA = Ts[839],
    _A = Ts[896] + Ts[127] + Ts[242],
    cA = Ts[896],
    uA = Ts[628] + Ts[57] + Ts[1419] + Ts[57] + Ts[870],
    dA = Ts[628] + Ts[57] + Ts[1419] + Ts[57] + Ts[875] + Ts[57] + Ts[632],
    lA = Ts[104] + Ts[45] + Ts[1381],
    vA = Ts[197] + Ts[25] + Ts[198] + Ts[343] + Ts[344] + Ts[52],
    bA = Ts[1420] + Ts[23] + Ts[374],
    gA = Ts[1421] + Ts[23] + Ts[374],
    yA = Ts[1422] + Ts[23] + Ts[374],
    pA = Ts[331] + Ts[146] + Ts[225] + Ts[332] + Ts[1423] + Ts[332] + Ts[225] + Ts[332] + Ts[226] + Ts[147],
    xA = Ts[144] + Ts[1424] + Ts[225],
    EA = Ts[126] + Ts[110] + Ts[1425],
    mA = Ts[126] + Ts[25] + Ts[1426],
    wA = Ts[1427] + Ts[57] + Ts[1418],
    TA = Ts[1428] + Ts[47] + Ts[279],
    OA = Ts[1429],
    PA = Ts[1427] + Ts[57] + Ts[1415],
    IA = Ts[117] + Ts[71] + Ts[588],
    SA = Ts[1261] + Ts[71] + Ts[1430] + Ts[15] + Ts[399],
    AA = Ts[275] + Ts[23] + Ts[21] + Ts[1431],
    MA = Ts[36],
    kA = Ts[144] + Ts[1432],
    LA = Ts[226] + Ts[115] + Ts[19] + Ts[1394] + Ts[1395] + Ts[45] + Ts[539] + Ts[45] + Ts[539] + Ts[45] + Ts[539],
    CA = Ts[5] + Ts[115] + Ts[19] + Ts[560] + Ts[115],
    RA = Ts[44] + Ts[21] + Ts[1431],
    NA = Ts[958] + Ts[21] + Ts[200],
    DA = Ts[1433] + Ts[1089] + Ts[1434],
    BA = Ts[34] + Ts[13] + Ts[1435],
    jA = Ts[1436],
    $A = Ts[24] + Ts[192] + Ts[385],
    GA = Ts[947] + Ts[57] + Ts[648] + Ts[57] + Ts[1418],
    FA = Ts[940] + Ts[0] + Ts[244] + Ts[0] + Ts[1386],
    qA = Ts[947] + Ts[57] + Ts[1437],
    zA = Ts[940] + Ts[0] + Ts[1438],
    YA = Ts[940] + Ts[0] + Ts[244] + Ts[0] + Ts[808],
    HA = Ts[940] + Ts[0] + Ts[1439],
    UA = Ts[947] + Ts[57] + Ts[1440],
    WA = Ts[940] + Ts[0] + Ts[1441],
    VA = Ts[896] + Ts[0] + Ts[244] + Ts[0] + Ts[1386],
    XA = Ts[896] + Ts[0] + Ts[1438],
    KA = Ts[302] + Ts[57] + Ts[648] + Ts[57] + Ts[1415],
    ZA = Ts[896] + Ts[0] + Ts[244] + Ts[0] + Ts[808],
    JA = Ts[374] + Ts[0] + Ts[1386],
    QA = Ts[1442],
    tM = Ts[374] + Ts[0] + Ts[808],
    iM = Ts[280] + Ts[57] + Ts[888],
    eM = Ts[261] + Ts[0] + Ts[836],
    nM = Ts[1443] + Ts[57] + Ts[1418],
    sM = Ts[370] + Ts[0] + Ts[1386],
    rM = Ts[370] + Ts[0] + Ts[1444],
    hM = Ts[1443] + Ts[57] + Ts[1415],
    aM = Ts[370] + Ts[0] + Ts[808],
    oM = Ts[1445] + Ts[0] + Ts[505],
    fM = Ts[967] + Ts[127] + Ts[949] + Ts[49] + Ts[212],
    _M = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[1446],
    cM = Ts[1447],
    uM = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[628],
    dM = Ts[1448],
    lM = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[1449],
    vM = Ts[1450],
    bM = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[1451] + Ts[57] + Ts[1452] + Ts[57] + Ts[280],
    gM = Ts[24] + Ts[0] + Ts[1453] + Ts[0] + Ts[261],
    yM = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[1451] + Ts[57] + Ts[280],
    pM = Ts[24] + Ts[0] + Ts[261],
    xM = Ts[24] + Ts[0] + Ts[871],
    EM = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[1451] + Ts[57] + Ts[620],
    mM = Ts[24] + Ts[0] + Ts[132],
    wM = Ts[246] + Ts[127] + Ts[1454],
    TM = Ts[380] + Ts[57] + Ts[150] + Ts[57] + Ts[1451] + Ts[57] + Ts[247],
    OM = Ts[71] + Ts[588] + Ts[127] + Ts[949],
    PM = Ts[49] + Ts[1455] + Ts[127] + Ts[949],
    IM = Ts[45] + Ts[1406] + Ts[13] + Ts[1403] + Ts[127] + Ts[949],
    SM = Ts[110] + Ts[1456] + Ts[71] + Ts[588] + Ts[127] + Ts[949],
    AM = Ts[27] + Ts[917] + Ts[127] + Ts[949],
    MM = Ts[44] + Ts[53] + Ts[279],
    kM = Ts[1457],
    LM = Ts[1458],
    CM = Ts[1459] + Ts[21] + Ts[200],
    RM = Ts[880] + Ts[15] + Ts[1460],
    NM = Ts[1461],
    DM = Ts[941] + Ts[31] + Ts[1462],
    BM = Ts[1463] + Ts[57] + Ts[293],
    jM = Ts[1463] + Ts[57] + Ts[294],
    $M = Ts[1463] + Ts[57] + Ts[456],
    GM = Ts[1464],
    FM = Ts[1465] + Ts[0] + Ts[1466],
    qM = Ts[1464] + Ts[0] + Ts[535],
    zM = Ts[1464] + Ts[0] + Ts[1074],
    YM = Ts[878] + Ts[57] + Ts[272] + Ts[57] + Ts[1467] + Ts[57] + Ts[286],
    HM = Ts[231] + Ts[13] + Ts[417] + Ts[45] + Ts[1468],
    UM = Ts[535] + Ts[179] + Ts[656],
    WM = Ts[1074] + Ts[179] + Ts[656],
    VM = Ts[166] + Ts[21] + Ts[200],
    XM = Ts[1469],
    KM = Ts[866] + Ts[31] + Ts[311],
    ZM = Ts[57] + Ts[140] + Ts[1270],
    JM = Ts[57] + Ts[140] + Ts[538] + Ts[452],
    QM = Ts[171] + Ts[1470],
    tk = Ts[171] + Ts[1016],
    ik = Ts[842] + Ts[63],
    ek = Ts[842] + Ts[64],
    nk = Ts[231] + Ts[47] + Ts[279],
    sk = Ts[166] + Ts[110] + Ts[920],
    rk = Ts[967] + Ts[49] + Ts[1471] + Ts[321] + Ts[1472],
    hk = Ts[173] + Ts[31] + Ts[311] + Ts[45] + Ts[306],
    ak = Ts[1473],
    ok = Ts[406],
    fk = Ts[1474] + Ts[31] + Ts[311] + Ts[45] + Ts[306],
    _k = Ts[44] + Ts[49] + Ts[1475] + Ts[127] + Ts[1476],
    ck = Ts[166] + Ts[45] + Ts[306],
    uk = Ts[261] + Ts[13] + Ts[240],
    dk = Ts[1477],
    lk = Ts[1478],
    vk = Ts[892],
    bk = Ts[1386] + Ts[15] + Ts[1479],
    gk = Ts[47] + Ts[1480] + Ts[31] + Ts[1481],
    yk = Ts[1482],
    pk = Ts[1483],
    xk = Ts[1484],
    Ek = Ts[1485],
    mk = Ts[1486] + Ts[57] + Ts[1487] + Ts[57] + Ts[1488],
    wk = Ts[1486] + Ts[57] + Ts[1487] + Ts[57] + Ts[1489],
    Tk = Ts[299] + Ts[57] + Ts[150] + Ts[57] + Ts[1490],
    Ok = Ts[1491],
    Pk = Ts[355] + Ts[71] + Ts[174],
    Ik = Ts[44] + Ts[179] + Ts[656],
    Sk = Ts[1492],
    Ak = Ts[44] + Ts[110] + Ts[183],
    Mk = Ts[842] + Ts[226],
    kk = Ts[842] + Ts[5],
    Lk = Ts[280] + Ts[57] + Ts[888] + Ts[57] + Ts[854],
    Ck = Ts[126] + Ts[27] + Ts[1493] + Ts[90] + Ts[1494],
    Rk = Ts[1495] + Ts[25] + Ts[234],
    Nk = Ts[1496],
    Dk = Ts[1497] + Ts[127] + Ts[1498],
    Bk = Ts[1499],
    jk = Ts[1500] + Ts[63],
    $k = Ts[126] + Ts[127] + Ts[1501],
    Gk = Ts[1474],
    Fk = Ts[1497],
    qk = Ts[1500],
    zk = Ts[1500] + Ts[64],
    Yk = Ts[855] + Ts[57] + Ts[284],
    Hk = Ts[1502],
    Uk = Ts[166] + Ts[49] + Ts[1503],
    Wk = Ts[166] + Ts[25] + Ts[1504],
    Vk = Ts[1505],
    Xk = Ts[1506],
    Kk = Ts[941],
    Zk = Ts[967] + Ts[25] + Ts[384],
    Jk = Ts[463] + Ts[31] + Ts[1462],
    Qk = Ts[1507],
    tL = Ts[238] + Ts[127] + Ts[128] + Ts[25] + Ts[234],
    iL = Ts[232] + Ts[13] + Ts[655],
    eL = Ts[1508],
    nL = Ts[126] + Ts[1509],
    sL = Ts[126] + Ts[133] + Ts[1510],
    rL = Ts[126] + Ts[179] + Ts[1511],
    hL = Ts[126] + Ts[71] + Ts[1512],
    aL = Ts[126] + Ts[13] + Ts[1513],
    oL = Ts[126] + Ts[49] + Ts[1514],
    fL = Ts[45] + Ts[1515],
    _L = Ts[13] + Ts[1516],
    cL = Ts[179] + Ts[1517],
    uL = Ts[25] + Ts[26] + Ts[52],
    dL = Ts[71] + Ts[1518],
    lL = Ts[27] + Ts[135],
    vL = Ts[127] + Ts[949] + Ts[25] + Ts[51],
    bL = Ts[179] + Ts[276] + Ts[49] + Ts[484],
    gL = Ts[21] + Ts[1519] + Ts[31] + Ts[1481],
    yL = 'WHU',//Ts[275] + Ts[1520] + Ts[19] + Ts[197] + Ts[19] + Ts[1401] + Ts[258],
    pL = Ts[226] + Ts[0] + Ts[259],
    xL = Ts[226] + Ts[0] + Ts[259] + Ts[0] + Ts[226],
    EL = 'WHU',//Ts[275] + Ts[1520] + Ts[771] + Ts[45] + Ts[1521] + Ts[19] + Ts[13] + Ts[1522] + Ts[19] + Ts[197] + Ts[19] + Ts[1401] + Ts[258] + Ts[35] + Ts[13] + Ts[354],
    mL = Ts[1523],
    wL = Ts[1064] + Ts[1381],
    TL = Ts[1524] + Ts[35] + Ts[539] + Ts[35] + Ts[1525];

    if (t.navigator) {
        var OL = navigator[B_],
        PL = /opera/i[j_](OL),
        IL = !PL && /msie/i[j_](OL),
        SL = /rv:11.0/i.test(OL);
        if (SL && (IL = !0), /msie\s[6,7,8]/i.test(OL))
        throw new Error('your browser is not supported');
        var AL = /webkit|khtml/i[j_](OL),
        ML = !AL && /gecko/i.test(OL),
        kL = /firefox\//i.test(OL),
        LL = /Chrome\//i[j_](OL),
        CL = !LL && /Safari\//i[j_](OL),
        RL = /Macintosh;/i[j_](OL),
        NL = i[P_].hasOwnProperty($_),
        DL = /(iPad|iPhone|iPod)/g[j_](OL),
        BL = /Android/g[j_](OL),
        jL = OL[If](/AppleWebKit\/([0-9\.]*)/);
        if (jL && jL[Ps] > 1)
        var $L = parseFloat(jL[1]);
        if (BL && (parseFloat(OL[If](/Android\s([0-9\.]*)/) [1]), $L && 534.3 >= $L))
        var GL = !0
    }
    var FL = 0;
    t.requestAnimationFrame || (t[G_] = t.webkitRequestAnimationFrame || t[F_] || t[q_] || t.msRequestAnimationFrame || function (i) {
        return t[z_](function () {
            i()
        }, 1000 / 60)
    }),
    t[Y_] || (t.cancelAnimationFrame = t.webkitCancelAnimationFrame || t[H_] || t[U_] || t.msCancelAnimationFrame || function (i) {
        return t.clearTimeout(i)
    });
    var qL = {
        nu: function (t, e) {
            return 1 == arguments[Ps] && (e = t, t = i),
            t[W_](e)
        },
        nv: function (t, e) {
            return 1 == arguments[Ps] && (e = t, t = i),
            t[V_](e)
        },
        n5: function (t, i) {
            t.className = i
        },
        me: function (t, i) {
            if (!t.hasOwnProperty(Us)) {
                var e = t.getAttribute(X_);
                if (!e)
                return qL.n5(t, i);
                for (var n = e.split($s), s = 0, r = n.length; r > s; s++)
                if (n[s] == i)
                return ;
                return e += $s + i,
                qL.n5(t, e)
            }
            t.classList.add(i)
        },
        mg: function (t, i) {
            if (!t.hasOwnProperty(Us)) {
                var e = t[K_](X_);
                if (!e || !e.indexOf(i))
                return ;
                for (var n = '', s = e[js]($s), r = 0, h = s[Ps]; h > r; r++)
                s[r] != i && (n += s[r] + $s);
                return qL.n5(t, n)
            }
            t[Us][Z_](i)
        },
        n6: function (t) {
            return t instanceof Number || b_ == typeof t
        },
        n3: function (t) {
            return t !== e && (t instanceof String || J_ == typeof t)
        },
        mw: function (t) {
            return t !== e && (t instanceof Boolean || Q_ == typeof t)
        },
        nh: function (t) {
            return Array.isArray(t)
        },
        ln: function (i) {
            i || (i = t[M_]),
            i[tc] ? i[tc]()  : i.returnValue = !1
        },
        ll: function (i) {
            i || (i = t.event),
            i[ic] ? i.stopPropagation()  : i.cancelBubble || (i.cancelBubble = !0)
        },
        mp: function (t) {
            qL.ln(t),
            qL.ll(t)
        },
        mu: function (t, i, e) {
            return i instanceof Object ? t = qL.m2(i, t)  : i && !e && (e = parseInt(i)),
            i && !e && (e = parseInt(i)),
            e ? setTimeout(t, e)  : setTimeout(t)
        },
        ms: function (i, e) {
            return e && (i = qL.m2(e, i)),
            t[G_](i)
        },
        m5: function (t, i, n) {
            if (null === t || t === e)
            throw i || (i = ec),
            new Error(Sr + i + nc);
            if (n && typeof t != n)
            throw i || (i = ec),
            new Error(Sr + i + sc + n)
        },
        nt: function (t, i, e) {
            if (t && 0 != t[Ps])
            for (var n = 0; n < t[Ps]; n++) {
                var s = t[rc](n);
                e ? i[tr](e, s)  : i(s)
            }
        },
        ma: function (t, i, e) {
            if (t.hasChildren()) {
                var n = t._dq || t[hc]();
                if (n) {
                    n = n._i0 || n;
                    for (var s = 0, r = n.length; r > s; s++)
                    if (i.call(e, n[s]) === !1 || qL.ma(n[s], i, e) === !1)
                    return !1;
                    return !0
                }
            }
        },
        mz: function (t) {
            if (!t[ac]())
            return t instanceof PN ? t : null;
            for (var i, e = t._dq._i0, n = e[Ps] - 1; n >= 0; ) {
                if (i = e[n], i = qL.mz(i))
                return i;
                n++
            }
            return null
        },
        lp: function (t, i, e, n) {
            return n ? qL.ld(t, i, e)  : qL.lf(t, i, e)
        },
        ld: function (t, i, e) {
            t = t._i0 || t;
            for (var n, s = 0, r = t.length; r > s; s++)
            if (n = t[s], n[ac]() && !qL.ld(n.children, i, e) || i[tr](e, n) === !1)
            return !1;
            return !0
        },
        lf: function (t, i, e) {
            t = t._i0 || t;
            for (var n, s = 0, r = t.length; r > s; s++)
            if (n = t[s], i[tr](e, n) === !1 || n.hasChildren() && !qL.lf(n[Ns], i, e))
            return !1;
            return !0
        },
        lh: function (t, i, e, n) {
            return n ? qL.la(t, i, e)  : qL.lc(t, i, e)
        },
        la: function (t, i, e) {
            t = t._i0 || t;
            for (var n, s = t[Ps], r = s - 1; r >= 0; r--)
            if (n = t[r], n[ac]() && !qL.la(n[Ns], i, e) || i[tr](e, n) === !1)
            return !1;
            return !0
        },
        lc: function (t, i, e) {
            t = t._i0 || t;
            for (var n, s = t.length, r = s - 1; r >= 0; r--)
            if (n = t[r], i.call(e, n) === !1 || n[ac]() && !qL.lc(n[Ns], i, e))
            return !1;
            return !0
        },
        lj: function (t, i, e) {
            for (var n, s = (t._i0 || t) .slice(0); s.length; ) {
                n = s[0],
                s = s[oc](1);
                var r = i[tr](e, n);
                if (r === !1)
                return !1;
                if (n.hasChildren()) {
                    var h = n.children;
                    h = h._i0 || h,
                    s = s[ch](h)
                }
            }
            return !0
        },
        le: function (t, i, e) {
            for (var n, s = (t._i0 || t) [Ss](0); s[Ps]; ) {
                n = s[s.length - 1],
                s = s[oc](0, s.length - 1);
                var r = i[tr](e, n);
                if (r === !1)
                return !1;
                if (n.hasChildren()) {
                    var h = n.children;
                    h = h._i0 || h,
                    s = s[ch](h)
                }
            }
            return !0
        },
        mr: function (t) {
            return Math[Ma](Math[fc]() * t)
        },
        ml: function () {
            return Math[fc]() >= 0.5
        },
        ng: function () {
            FL = 0
        },
        mx: function () {
            return ++FL
        },
        nq: function (t, i, e) {
            if (e && qL.nq(t, e), t && i && _c == typeof i)
            for (var n in i)
            n && (t[n] = i[n]);
            return t
        },
        ne: function (t, i) {
            if (t && i)
            for (var e in i)
            p_ == typeof t[e] && (t[e] = i[e]);
            return t
        },
        n8: function (t, i) {
            var e = t;
            for (var n in i)
            if (i.__lookupGetter__) {
                var s = i.__lookupGetter__(n),
                r = i.__lookupSetter__(n);
                s || r ? (s && e.__defineGetter__(n, s), r && e.__defineSetter__(n, r))  : e[n] = i[n]
            } else
            e[n] = i[n];
            return e
        },
        nm: function (t, i, e) {
            if (!(t instanceof Function))
            throw new Error('subclass must be type of Function');
            var n = null;
            _c == typeof i && (n = i, i = t, t = function () {
                i.apply(this, arguments)
            });
            var s = t[Wa],
            r = function () {
            };
            return r.prototype = i.prototype,
            t[Wa] = new r,
            t.superclass = i[Wa],
            t[cc].constructor = i,
            qL.n8(t[Wa], s),
            n && qL.n8(t[Wa], n),
            e && qL.n8(t[Wa], e),
            t.prototype[X_] = t,
            t
        },
        lr: function (t, i, e) {
            return qL.nc(t, i, 'constructor', e)
        },
        nc: function (t, i, e, n) {
            var s = i.superclass;
            if (s) {
                var r = s[e];
                return r ? r[Ua](t, n)  : void 0
            }
        },
        mb: function (t) {
            return t[uc](4)
        },
        m0: function (t) {
            delete t[dc],
            delete t[lc]
        },
        m4: function (t, i) {
            t[i] && (qL.m0(t[i]), delete t[i])
        },
        m2: function (t, i) {
            var e = function () {
                return e[lc].apply(e.scope, arguments)
            };
            return e[lc] = i,
            e[dc] = t,
            e
        },
        ly: function (t) {
            for (var i = 0, e = 0; e < t[Ps]; e++)
            i = 31 * i + t.charCodeAt(e);
            return i
        },
        nk: function (t, i) {
            return t == i
        },
        mk: function (t, i, n, s, r) {
            if (s)
            return Object[vc](t, i, {
                value: n,
                enumerable: !0
            }),
            void 0;
            var h = {
                configurable: !0,
                enumerable: !0
            },
            a = Qs + i;
            n !== e && (t[a] = n),
            h[bc] = function () {
                return this[a]
            },
            h[ia] = function (t) {
                var e = this[a];
                if (qL.nk(e, t))
                return !1;
                var n = new _C(this, i, t, e);
                return this[gc](n) ? (this[a] = t, r && r[tr](this, t, e), this[Pa](n), !0)  : !1
            },
            Object.defineProperty(t, i, h)
        },
        m7: function (t, i) {
            for (var e = 0, n = i.length; n > e; e++) {
                var s = i[e];
                qL.mk(t, s[Cf] || s, s[yc] || s[Ao], s.readOnly, s.onSetting)
            }
        },
        mi: function (t) {
            if (t && t > 0 && 1 > t) {
                var i = Math[Ma](16777215 * Math.random());
                return pc + (255 & i >> 16) + Eh + (255 & i >> 8) + Eh + (255 & i) + Eh + t[uc](2) + xh
            }
            return qL.n9(Math[Ma](16777215 * Math.random()))
        },
        lw: function (t, i) {
            return i / (i - t)
        },
        mo: function (t, i) {
            return i - i / t
        },
        mn: function (t) {
            return t > 0 ? Math.floor(t)  : Math[Tf](t)
        },
        n0: function (t) {
            return t > 0 ? Math.ceil(t)  : Math[Ma](t)
        },
        n9: function (t) {
            return 16777216 > t ? gh + (xc + t.toString(16)) .slice( - 6)  : pc + (255 & t >> 16) + Eh + (255 & t >> 8) + Eh + (255 & t) + Eh + ((255 & t >> 24) / 255) [uc](2) + xh
        }
    };
    qL.lx = function (t, i, e) {
        _c != typeof e || e.hasOwnProperty(Ec) || (e.enumerable = !0),
        Object[vc](t, i, e)
    },
    qL.ls = function (t, i) {
        for (var e in i)
        if (mc != e[0]) {
            var n = i[e];
            _c != typeof n || n.hasOwnProperty(Ec) || (n.enumerable = !0)
        }
        Object.defineProperties(t, i)
    },
    qL.nx = function (t) {
        console[Zr](t)
    },
    qL.nr = function (t) {
        console.trace(t)
    },
    qL.no = function (t) {
        console.error(t)
    },
    qL.ni = function (t, i) {
        var e = Date[Rr]();
        if (i && i > 1)
        for (var n = 0, s = 10000; i > n; ) {
            if (Date.now() - e > s)
            return !1;
            t(n++)
        } 
        else
        t();
        return Date[Rr]() - e
    },
    qL.nj = function (t, i, e, n) {
        t instanceof HL && (t = t._i0);
        for (var s = 0, r = (t._i0 || t) [Ps]; r > s; s++) {
            var h = i.call(e, t[s], s, n);
            if (h === !1)
            return !1
        }
        return !0
    },
    qL.mc = function (t, i, e) {
        for (var n = t instanceof HL, s = t._i0 || t, r = 0, h = s.length; h > r; r++) {
            var a = s[r];
            i.call(e, a) && (n ? t.remove(a)  : t.splice(r, 1), r--, h--)
        }
    },
    qL.lv = function (t, i, e, n) {
        t instanceof HL && (t = t._i0);
        for (var s = (t._i0 || t) [Ps] - 1; s >= 0; s--) {
            var r = i[tr](e, t[s], s, n);
            if (r === !1)
            return !1
        }
        return !0
    },
    qL.mm = function (t) {
        if (t[wc] instanceof Function)
        return t[wc](!0);
        var i,
        e = [
        ];
        return qL.nj(t, function (t) {
            i = t && t[wc] instanceof Function ? t[wc]()  : t,
            e.push(i)
        }, this),
        e
    },
    qL.nw = function (t, i, n) {
        n === e || 0 > n ? t[or](i)  : t.splice(n, 0, i)
    },
    qL.nn = function (t, i) {
        var e = t[kr](i);
        return 0 > e || e >= t.length ? !1 : t[oc](e, 1)
    },
    qL.n2 = function (t, i, e) {
        var n = t[kr](i);
        return n === e || 0 > n || n >= t[Ps] ? !1 : (t[oc](n, 1), qL.nw(t, i, e), !0)
    };
    var zL = {
        SELECTION_TOLERANCE: 3,
        DOUBLE_BUFFER: e,
        LABEL_COLOR: Tc
    };
    qL.ls(zL, {
        FONT_STYLE: {
            get: function () {
                return this._l8v || (this._l8v = Oc)
            },
            set: function (t) {
                this._l8v != t && (this._l8v = t, this._9l = !0)
            }
        },
        FONT_SIZE: {
            get: function () {
                return this._fr || (this._fr = 12)
            },
            set: function (t) {
                this._fr != t && (this._fr = t, this._9l = !0)
            }
        },
        FONT_FAMILY: {
            get: function () {
                return this._l72 || (this._l72 = 'Verdana,helvetica,arial,sans-serif')
            },
            set: function (t) {
                this._l72 != t && (this._l72 = t, this._9l = !0)
            }
        },
        FONT: {
            get: function () {
                return (this._9l || this._9l === e) && (this._9l = !1, this._font = this.FONT_STYLE + $s + this[Pc] + Ic + this[Sc]),
                this._font
            }
        }
    });
    var YL = function () {
    };
    YL[Wa] = {
        _l3: 0,
        _l1: 0,
        _ih: !0,
        _if: 1,
        _dy: function (t, i, e) {
            var n = this._l6t(i),
            s = this._l6v(e),
            r = t * n,
            h = t * s;
            return this._8z(t, i - r, e - h)
        },
        _l6t: function (t) {
            return (t - this._l3) / this._if
        },
        _l6v: function (t) {
            return (t - this._l1) / this._if
        },
        _l8n: function (t, i) {
            return this._8z(this._if, this._l3 + t, this._l1 + i)
        },
        _8z: function (t, i, e) {
            return this._if == t && this._l3 == i && this._l1 == e ? !1 : (this._ih && (1 != this._ib || 2 != this._ib ? (i = Math.round(i * this._ib) / this._ib, e = Math.round(e * this._ib) / this._ib)  : (i = Math[sh](i), e = Math.round(e))), this._l3 = i, this._l1 = e, this._if = t, this._2o && this._2o(), void 0)
        },
        _f9: function () {
            return {
                a: this._if,
                b: 0,
                c: 0,
                d: this._if,
                e: this._l3,
                f: this._l1
            }
        },
        toString: function () {
            return Ac + qL.mb(this._if) + Mc + qL.mb(this._if) + Eh + qL.mb(this._l3) + Eh + qL.mb(this._l1) + xh
        },
        _dm: function (t) {
            SC._hc(t, Rf, this.toString())
        }
    };
    var HL = function (t) {
        this._i0 = [
        ],
        this._jm = {
        },
        t && this.add(t)
    };
    HL[Wa] = {
        _i0: null,
        _jm: null,
        get: function (t) {
            return this.getByIndex(t)
        },
        getById: function (t) {
            return this._jm[t]
        },
        getByIndex: function (t) {
            return this._i0[t]
        },
        forEach: function (t, i, e) {
            return qL.nj(this._i0, t, i, e)
        },
        forEachReverse: function (t, i, e) {
            return qL.lv(this._i0, t, i, e)
        },
        size: function () {
            return this._i0[Ps]
        },
        contains: function (t) {
            return this.containsById(t.id)
        },
        containsById: function (t) {
            return this._jm.hasOwnProperty(t)
        },
        setIndex: function (t, i) {
            var e = this._i0.indexOf(t);
            if (0 > e)
            throw new Error(Sr + t.id + kc);
            return e == i ? !1 : (this._i0[oc](e, 1), this._i0.splice(i, 0, t), !0)
        },
        setIndexAfter: function (t, i) {
            var e = this._i0.indexOf(t);
            if (0 > e)
            throw new Error(Sr + t.id + kc);
            return e == i ? i : e == i + 1 ? i + 1 : (e > i && (i += 1), this._i0[oc](e, 1), this._i0[oc](i, 0, t), i)
        },
        setIndexBefore: function (t, i) {
            var e = this._i0[kr](t);
            if (0 > e)
            throw new Error(Sr + t.id + kc);
            return e == i ? i : e == i - 1 ? i - 1 : (i > e && (i -= 1), this._i0[oc](e, 1), this._i0[oc](i, 0, t), i)
        },
        indexOf: function (t) {
            return this._i0[kr](t)
        },
        getIndexById: function (t) {
            var i = this[Lc](t);
            return i ? this._i0.indexOf(i)  : - 1
        },
        add: function (t, i) {
            return qL.nh(t) ? this._dw(t, i)  : this._id(t, i)
        },
        addFirst: function (t) {
            return this[th](t, 0)
        },
        _dw: function (t, i) {
            if (0 == t.length)
            return !1;
            var n = !1,
            s = i >= 0;
            t = t._i0 || t;
            for (var r = 0, h = t[Ps]; h > r; r++) {
                var a = t[r];
                null !== a && a !== e && this._id(a, i, !0) && (n = !0, s && i++)
            }
            return n
        },
        _id: function (t, i) {
            var n = t.id;
            return n === e || this[Va](n) ? !1 : (qL.nw(this._i0, t, i), this._jm[n] = t, t)
        },
        remove: function (t) {
            return qL.nh(t) ? this._9i(t)  : t.id ? this._e2(t.id, t)  : this[Cc](t)
        },
        _9i: function (t) {
            if (0 == t[Ps])
            return !1;
            var i = !1;
            t = t._i0 || t;
            for (var n = 0, s = t.length; s > n; n++) {
                var r = t[n];
                if (null !== r && r !== e) {
                    r.id === e && (r = this._jm[r]);
                    var h = r.id;
                    this._e2(h, r, !0) && (i = !0)
                }
            }
            return i
        },
        _e2: function (t, i) {
            return t !== e && this[Va](t) ? ((null === i || i === e) && (i = this[Lc](t)), delete this._jm[t], qL.nn(this._i0, i), !0)  : !1
        },
        removeById: function (t) {
            var i = this._jm[t];
            return i ? this._e2(t, i)  : !1
        },
        set: function (t) {
            if (!t || 0 == t)
            return this[lr](),
            void 0;
            if (this[Rc]() || !qL.nh(t))
            return this.clear(),
            this.add(t);
            var i = [
            ],
            e = {
            },
            n = 0;
            if (qL.nj(t, function (t) {
                this._jm[t.id] ? (e[t.id] = t, n++)  : i[or](t)
            }, this), n != this.length) {
                var s = [
                ];
                this[ga](function (t) {
                    e[t.id] || s.push(t)
                }, this),
                s[Ps] && this._9i(s)
            }
            return i[Ps] && this._dw(i),
            !0
        },
        clear: function () {
            return this[Rc]() ? !1 : (this._i0.length = 0, this._jm = {
            }, !0)
        },
        toDatas: function () {
            return this._i0[Ss](0)
        },
        isEmpty: function () {
            return 0 == this._i0[Ps]
        },
        valueOf: function () {
            return this._i0.length
        },
        clone: function (t) {
            var i = new HL;
            return t ? i[th](qL.mm(this._i0))  : i.add(this.toDatas()),
            i
        }
    },
    qL.ls(HL[Wa], {
        datas: {
            get: function () {
                return this._i0
            }
        },
        random: {
            get: function () {
                return this._i0 && this._i0[Ps] ? this._i0[qL.mr(this._i0[Ps])] : null
            }
        },
        length: {
            get: function () {
                return this._i0 ? this._i0[Ps] : 0
            }
        }
    }),
    2 * Math.PI;
    var UL = 0.5 * Math.PI,
    WL = function (t, i) {
        i = i[Nc]();
        for (var e = IL ? t[Dc] : t[Bc]; e && (1 != e.nodeType || e.tagName && e.tagName[Nc]() != i); )
        e = IL ? e[jc] : e[$c];
        return e && 1 == e.nodeType && e[Gc] && e.tagName.toUpperCase() == i ? e : null
    },
    VL = function (t, i, e) {
        t instanceof VL && (i = t.y, t = t.x, e = t[uh]),
        this[ia](t, i, e)
    },
    XL = function (t, i, e, n) {
        var s = t - e,
        r = i - n;
        return Math[Jr](s * s + r * r)
    };
    VL.prototype = {
        x: 0,
        y: 0,
        rotate: e,
        set: function (t, i, e) {
            this.x = t || 0,
            this.y = i || 0,
            this.rotate = e || 0
        },
        negate: function () {
            this.x = - this.x,
            this.y = - this.y
        },
        offset: function (t, i) {
            this.x += t,
            this.y += i
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y
        },
        distanceTo: function (t) {
            return XL(this.x, this.y, t.x, t.y)
        },
        toString: function () {
            return Fc + this.x + qc + this.y + xh
        },
        clone: function () {
            return new VL(this.x, this.y)
        }
    },
    Object.defineProperty(VL.prototype, zc, {
        get: function () {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
    });
    var KL = function (t, i, n, s) {
        t !== e && this._km(t, i, n, s)
    };
    KL[Wa] = {
        _kv: null,
        _kx: null,
        _l5: null,
        _kz: null,
        _l6: null,
        _l7: null,
        _l8: 1,
        _km: function (t, i, e, n) {
            this._kv = t,
            this._kx = i,
            this._l5 = e,
            this._kz = n,
            t == e ? (this._l6 = - 1, this._l8 = 0, this._l7 = t)  : (this._l6 = (i - n) / (t - e), this._l7 = i - this._l6 * t, this._l8 = 1),
            this._j3 = Math.atan2(this._kz - this._kx, this._l5 - this._kv),
            this._l8os = Math[Ms](this._j3),
            this._sin = Math[ks](this._j3)
        },
        _l7y: function (t) {
            return 0 == this._l8 ? Number[Yc] : this._l6 * t + this._l7
        },
        _l7q: function (t) {
            return 0 == this._l6 ? Number[Yc] : (t - this._l7) / this._l6
        },
        _8: function (t) {
            var i,
            e,
            n,
            s,
            r,
            h = t[0],
            a = t[2],
            o = t[4],
            f = t[1],
            _ = t[3],
            c = t[5],
            u = this._l6,
            d = this._l7,
            l = this._l8;
            if (0 == l ? (n = Math[Jr](( - u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = - u * a + u * h, r = u * o - 2 * u * a + u * h)  : (n = Math[Jr](( - f + u * h + d) * c + _ * _ + ( - 2 * u * a - 2 * d) * _ + (u * o + d) * f + ( - u * u * h - u * d) * o + u * u * a * a + 2 * u * d * a - u * d * h), s = - _ + f + u * a - u * h, r = c - 2 * _ + f - u * o + 2 * u * a - u * h), 0 != r) {
                i = (n + s) / r,
                e = ( - n + s) / r;
                var v,
                b;
                return i >= 0 && 1 >= i && (v = j(i, t)),
                e >= 0 && 1 >= e && (b = j(e, t)),
                v && b ? [
                    v,
                    b
                ] : v ? v : b ? b : void 0
            }
        },
        _33: function (t, i, e) {
            if (this._l6 == t._l6 || 0 == this._l8 && 0 == t._l8)
            return null;
            var n,
            s;
            if (n = 0 == this._l8 ? this._l7 : 0 == t._l8 ? t._l7 : (t._l7 - this._l7) / (this._l6 - t._l6), s = 0 == this._l6 ? this._l7 : 0 == t._l6 ? t._l7 : this._l8 ? this._l6 * n + this._l7 : t._l6 * n + t._l7, !i)
            return {
                x: n,
                y: s
            };
            var r,
            h,
            a;
            if (e)
            r = - i / 2,
            h = - r;
             else {
                r = - XL(this._kv, this._kx, n, s),
                h = XL(this._l5, this._kz, n, s);
                var o = - r + h;
                if (o > i) {
                    var f = i / o;
                    r *= f,
                    h *= f
                } else
                a = (i - o) / 2
            }
            var _ = this._6u(n, s, r),
            c = this._6u(n, s, h);
            return a && (_._rest = a, c._rest = a),
            [
                _,
                c
            ]
        },
        _6u: function (t, i, e) {
            return 0 == this._l8 ? {
                x: t,
                y: i + e
            }
             : {
                x: t + e * this._l8os,
                y: i + e * this._sin
            }
        }
    };
    var ZL = function (t, i) {
        this.width = t,
        this.height = i
    };
    ZL.prototype = {
        width: 0,
        height: 0,
        isEmpty: function () {
            return this.width <= 0 || this[Fr] <= 0
        },
        clone: function () {
            return new ZL(this[Gr], this[Fr])
        },
        toString: function () {
            return Hc + this.width + qc + this[Fr] + xh
        }
    };
    var JL = function (t, i, n, s) {
        n === e && (n = - 1),
        s === e && (s = - 1),
        this.x = t || 0,
        this.y = i || 0,
        this.width = n,
        this[Fr] = s
    };
    JL[Wa] = {
        x: 0,
        y: 0,
        width: - 1,
        height: - 1,
        setByRect: function (t) {
            this.x = t.x || 0,
            this.y = t.y || 0,
            this.width = t.width || 0,
            this[Fr] = t[Fr] || 0
        },
        set: function (t, i, e, n) {
            this.x = t || 0,
            this.y = i || 0,
            this.width = e || 0,
            this[Fr] = n || 0
        },
        offset: function (t, i) {
            this.x += t,
            this.y += i
        },
        contains: function (t, i) {
            return t instanceof JL ? c(this.x, this.y, this[Gr], this[Fr], t.x, t.y, t[Gr], t[Fr])  : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[Fr]
        },
        intersectsPoint: function (t, i, e) {
            return this[Gr] <= 0 && this.height <= 0 ? !1 : e ? this[Uc](t - e, i - e, 2 * e, 2 * e)  : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this[Fr]
        },
        intersectsRect: function (t, i, e, n) {
            return f(this.x, this.y, this[Gr], this[Fr], t, i, e, n)
        },
        intersects: function (t, i) {
            return t instanceof JL ? this.intersectsRect(t.x, t.y, t[Gr], t.height)  : this[Wc](t, i)
        },
        intersection: function (t, i, e, n) {
            var s = this.x,
            r = this.y,
            h = s;
            h += this[Gr];
            var a = r;
            a += this.height;
            var o = t;
            o += e;
            var f = i;
            return f += n,
            t > s && (s = t),
            i > r && (r = i),
            h > o && (h = o),
            a > f && (a = f),
            h -= s,
            a -= r,
            0 > h || 0 > a ? null : new JL(s, r, h, a)
        },
        addPoint: function (t) {
            this[th](t.x, t.y)
        },
        add: function (t, i) {
            if (t instanceof JL)
            return this.addRect(t.x, t.y, t[Gr], t[Fr]);
            if (t instanceof VL && (i = t.y, t = t.x), this.width < 0 || this.height < 0)
            return this.x = t,
            this.y = i,
            this.width = this[Fr] = 0,
            void 0;
            var e = this.x,
            n = this.y,
            s = this[Gr],
            r = this.height;
            s += e,
            r += n,
            e > t && (e = t),
            n > i && (n = i),
            t > s && (s = t),
            i > r && (r = i),
            s -= e,
            r -= n,
            s > Number.MAX_VALUE && (s = Number[Vc]),
            r > Number[Vc] && (r = Number.MAX_VALUE),
            this.set(e, n, s, r)
        },
        addRect: function (t, i, e, n) {
            var s = this[Gr],
            r = this[Fr];
            (0 > s || 0 > r) && this.set(t, i, e, n);
            var h = e,
            a = n;
            if (!(0 > h || 0 > a)) {
                var o = this.x,
                f = this.y;
                s += o,
                r += f;
                var _ = t,
                c = i;
                h += _,
                a += c,
                o > _ && (o = _),
                f > c && (f = c),
                h > s && (s = h),
                a > r && (r = a),
                s -= o,
                r -= f,
                s > Number.MAX_VALUE && (s = Number[Vc]),
                r > Number[Vc] && (r = Number[Vc]),
                this.set(o, f, s, r)
            }
        },
        grow: function (t, i, e, n) {
            return qL.n6(t) ? 1 == arguments[Ps] ? n = i = e = t || 0 : 2 == arguments[Ps] ? (e = t || 0, n = i || 0)  : (t = t || 0, i = i || 0, e = e || 0, n = n || 0)  : (i = t.left || 0, e = t[Cs] || 0, n = t[Ls] || 0, t = t.top || 0),
            this.x -= i,
            this.y -= t,
            this[Gr] += i + n,
            this[Fr] += t + e,
            this
        },
        isEmpty: function () {
            return this[Gr] <= 0 && this[Fr] <= 0
        },
        toString: function () {
            return this.x + Xc + this.y + Xc + this.width + Xc + this.height
        },
        union: function (t) {
            var i = this[Gr],
            e = this[Fr];
            if (0 > i || 0 > e)
            return new JL(t.x, t.y, t[Gr], t[Fr]);
            var n = t.width,
            s = t.height;
            if (0 > n || 0 > s)
            return new JL(this.x, this.y, this[Gr], this[Fr]);
            var r = this.x,
            h = this.y;
            i += r,
            e += h;
            var a = t.x,
            o = t.y;
            return n += a,
            s += o,
            r > a && (r = a),
            h > o && (h = o),
            n > i && (i = n),
            s > e && (e = s),
            i -= r,
            e -= h,
            i > Number[Vc] && (i = Number[Vc]),
            e > Number.MAX_VALUE && (e = Number.MAX_VALUE),
            new JL(r, h, i, e)
        },
        clear: function () {
            this[ia](0, 0, - 1, - 1)
        },
        equals: function (t) {
            return this.x == t.x && this.y == t.y && this[Gr] == t.width && this[Fr] == t[Fr]
        },
        clone: function () {
            return new JL(this.x, this.y, this.width, this.height)
        },
        getIntersectionPoint: function (t, i, e, n) {
            return o(this, t, i, e, n)
        }
    },
    qL.nm(JL, ZL),
    qL.ls(JL.prototype, {
        bottom: {
            get: function () {
                return this.y + this[Fr]
            }
        },
        right: {
            get: function () {
                return this.x + this.width
            }
        },
        cx: {
            get: function () {
                return this.x + this[Gr] / 2
            }
        },
        cy: {
            get: function () {
                return this.y + this.height / 2
            }
        },
        center: {
            get: function () {
                return new VL(this.cx, this.cy)
            }
        }
    });
    var QL = function (t, i, e, n) {
        1 == arguments[Ps] ? i = e = n = t : 2 == arguments.length && (e = t, n = i),
        this.set(t, i, e, n)
    };
    QL.prototype = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        set: function (t, i, e, n) {
            this[zf] = t || 0,
            this[$f] = i || 0,
            this[Cs] = e || 0,
            this.right = n || 0
        },
        clone: function () {
            return new QL(this.top, this[$f], this[Cs], this.right)
        },
        equals: function (t) {
            return t && this[zf] == t[zf] && this[Cs] == t[Cs] && this.left == t.left && this[Ls] == t[Ls]
        }
    };
    var tC = function (t, i) {
        this[Kc] = t,
        this[Zc] = i
    };
    tC.prototype = {
        verticalPosition: !1,
        horizontalPosition: !1,
        toString: function () {
            return (this.horizontalPosition || '') + (this[Zc] || '')
        }
    },
    qL.lx(tC.prototype, Jc, {
        get: function () {
            return (this[Kc] || '') + (this[Zc] || '')
        }
    });
    var iC = Qc,
    eC = tu,
    nC = iu,
    sC = Ga,
    rC = eu,
    hC = nu;
    tC.LEFT_TOP = new tC(iC, sC),
    tC[su] = new tC(iC, rC),
    tC.LEFT_BOTTOM = new tC(iC, hC),
    tC[ru] = new tC(eC, sC),
    tC.CENTER_MIDDLE = new tC(eC, rC),
    tC[hu] = new tC(eC, hC),
    tC[au] = new tC(nC, sC),
    tC[ou] = new tC(nC, rC),
    tC.RIGHT_BOTTOM = new tC(nC, hC);
    var aC = [
        tC.LEFT_TOP,
        tC.LEFT_MIDDLE,
        tC[fu],
        tC[ru],
        tC[_u],
        tC[hu],
        tC[au],
        tC[ou],
        tC[cu]
    ];
    qL.lx(tC, fc, {
        get: function () {
            return aC[qL.mr(aC.length)]
        }
    }),
    qL.mj = function (t, i, n) {
        if (!t)
        return {
            x: 0,
            y: 0
        };
        if (t.x !== e)
        return {
            x: t.x,
            y: t.y
        };
        var s,
        r,
        h = t.horizontalPosition,
        a = t[Zc];
        switch (h) {
        case iC:
            s = 0;
            break;
        case nC:
            s = i;
            break;
        default:
            s = i / 2
        }
        switch (a) {
        case sC:
            r = 0;
            break;
        case hC:
            r = n;
            break;
        default:
            r = n / 2
        }
        return {
            x: s,
            y: r
        }
    };
    var oC = function (t, i, e, n, s) {
        this[ia](t, i, e, n),
        this[uu] = s
    };
    oC[Wa] = {
        radius: 0,
        classify: function (t, i, e, n) {
            return i > t ? 0 : i + n > t ? 1 : e - n > t ? 2 : e > t ? 3 : 4
        },
        intersectsRect: function (t, i, e, n) {
            if (qL.nc(this, oC, Uc, arguments) === !1)
            return !1;
            var s = this.x,
            r = this.y,
            h = s + this.width,
            a = r + this[Fr],
            o = 2 * radius,
            f = 2 * radius,
            _ = Math.min(this.width, Math.abs(o)) / 2,
            c = Math[Qr](this[Fr], Math[Rs](f)) / 2,
            u = this[du](t, s, h, _),
            d = this[du](t + e, s, h, _),
            l = this[du](i, r, a, c),
            v = this[du](i + n, r, a, c);
            return 2 == u || 2 == d || 2 == l || 2 == v ? !0 : 2 > u && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + e - (s + _)  : t -= h - _, i = 1 == v ? i = i + n - (r + c)  : i -= a - c, t /= _, i /= c, 1 >= t * t + i * i)
        },
        intersectsPoint: function (t, i) {
            if (qL.nc(this, oC, Wc, arguments) === !1)
            return !1;
            var e = this.x,
            n = this.y,
            s = e + this.width,
            r = n + this[Fr];
            if (e > t || n > i || t >= s || i >= r)
            return !1;
            var h = 2 * radius,
            a = 2 * radius,
            o = Math.min(this.width, Math[Rs](h)) / 2,
            f = Math.min(this.height, Math.abs(a)) / 2;
            return t >= (e += o) && t < (e = s - o) ? !0 : i >= (n += f) && i < (n = r - f) ? !0 : (t = (t - e) / o, i = (i - n) / f, 1 >= t * t + i * i)
        },
        clone: function () {
            return new oC(this.x, this.y, this.width, this.height, this[uu])
        }
    },
    qL.nm(oC, JL);
    var fC = function (t, i, e, n) {
        this[I_] = t,
        this[Ws] = i,
        this[A_] = e,
        this[Ao] = n
    };
    fC[Wa] = {
        source: null,
        type: null,
        kind: null,
        value: null,
        toString: function () {
            return lu + this[I_] + vu + this[Ws] + bu + this.kind
        }
    };
    var _C = function (t, i, e, n) {
        this.source = t,
        this.kind = i,
        this.oldValue = n,
        this.value = e
    };
    _C[Wa] = {
        type: gu,
        propertyType: null,
        toString: function () {
            return lu + this.source + vu + this[Ws] + yu + this[A_] + pu + this.oldValue + xu + this[Ao]
        }
    },
    qL.nm(_C, fC),
    qL.lx(_C.prototype, Eu, {
        get: function () {
            return this.kind
        },
        set: function (t) {
            this.kind = t
        }
    });
    var cC = function (t, i, e) {
        this[I_] = t,
        this[mu] = t[Xa],
        this[Ao] = i,
        this.newIndex = e,
        this[mu] && (this[wu] = this.oldValue.getChildIndex(t))
    };
    cC.prototype = {
        kind: Xa
    },
    qL.nm(cC, _C);
    var uC = function (t, i) {
        this[I_] = t,
        this[Ao] = i
    };
    uC[Wa].kind = Tu,
    qL.nm(uC, _C);
    var dC = function (t, i) {
        this[I_] = t,
        this.value = i
    };
    dC.prototype.kind = Ou,
    qL.nm(dC, _C);
    var lC = function (t, i, e, n) {
        this[I_] = i,
        this[mu] = e,
        this.value = n,
        this.parent = t,
        this[Pu] = i,
        this.oldIndex = e,
        this.newIndex = n
    };
    lC.prototype[A_] = Iu,
    qL.nm(lC, _C);
    var vC = function () {
    };
    vC[Wa] = {
        listener: null,
        beforeEvent: function (t) {
            return null != this.listener && this[Su].beforeEvent ? this.listener[gc](t)  : !0
        },
        onEvent: function (t) {
            null != this.listener && this[Su].onEvent && this.listener[Pa](t)
        }
    };
    var bC = function () {
        qL.lr(this, bC, arguments),
        this[Au] = {
        },
        this[Ia] = [
        ]
    },
    gC = function (t, i) {
        this.listener = t,
        this.scope = i,
        t instanceof Function ? this.onEvent = t : (this[Pa] = t.onEvent, this.beforeEvent = t[gc]),
        this.equals = function (t) {
            return t && this[Su] == t[Su] && this.scope == t[dc]
        }
    };
    gC[Wa] = {
        equals: function (t) {
            return t && this.listener == t.listener && this.scope == t[dc]
        },
        destroy: function () {
            delete this.scope,
            delete this[Su]
        }
    },
    bC[Wa] = {
        listeners: null,
        _9o: function () {
            return this[Ia] && this[Ia][Ps] > 0
        },
        _6c: function (t, i) {
            return t instanceof bC ? t : new gC(t, i)
        },
        _90: function (t, i) {
            if (t instanceof bC)
            return this.listeners.indexOf(t);
            for (var e = this[Ia], n = 0, s = e.length; s > n; n++) {
                var r = e[n];
                if (r.listener == t && r[dc] == i)
                return n
            }
            return - 1
        },
        contains: function (t, i) {
            return this._90(t, i) >= 0
        },
        addListener: function (t, i) {
            return this[Ef](t, i) ? !1 : (this.listeners[or](this._6c(t, i)), void 0)
        },
        removeListener: function (t, i, e) {
            var n = this._90(t, i);
            if (n >= 0) {
                var s = this[Ia][oc](n, 1) [0];
                e || qL.m0(s)
            }
        },
        on: function (t, i) {
            this[Mu](t, i)
        },
        un: function (t, i, e) {
            this.removeListener(t, i, e)
        },
        onEvent: function (t) {
            return this[Ia] ? (qL.nj(this[Ia], function (i) {
                i.onEvent && (i.scope ? i[Pa][tr](i.scope, t)  : i[Pa](t))
            }, this), void 0)  : !1
        },
        beforeEvent: function (t) {
            return this.listeners ? qL.nj(this.listeners, function (i) {
                return i[gc] ? i[dc] ? i[gc].call(i[dc], t)  : i[gc](t)  : !0
            }, this)  : !0
        },
        _da: function (t) {
            return this[gc](t) === !1 ? !1 : (this.onEvent(t), !0)
        },
        clear: function () {
            this[Ia] = [
            ]
        },
        destroy: function () {
            this.clear()
        }
    },
    qL.nm(bC, vC);
    var yC = {
        onEvent: function () {
        },
        beforeEvent: function () {
        }
    },
    pC = function (t, i, e, n, s) {
        this[I_] = t,
        this[Ws] = ku,
        this[A_] = i,
        this[ah] = e,
        this[Lu] = n,
        this.oldIndex = s
    };
    pC[Wa] = {
        index: - 1,
        oldIndex: - 1,
        toString: function () {
            return lu + this.source + vu + this[Ws] + bu + this.kind + Cu + this[ah] + Ru + this.index + Nu + this.oldIndex
        }
    },
    qL.nm(pC, fC),
    pC[Du] = th,
    pC[Bu] = Z_,
    pC[ju] = lr,
    pC[$u] = Gu;
    var xC = function () {
        this.id = ++FL,
        this._l6s = {
        }
    };
    xC.prototype = {
        _l6s: null,
        id: null,
        get: function (t) {
            return this._l6s[t]
        },
        set: function (t, i) {
            var e = this[bc](t);
            if (e === i)
            return !1;
            var n = new _C(this, t, i, e);
            return n[Fu] = WC.PROPERTY_TYPE_CLIENT,
            this._9h(t, i, n, this._l6s)
        },
        _9h: function (t, i, n, s) {
            return this[gc](n) === !1 ? !1 : (s || (s = this._l6s), i === e ? delete s[t] : s[t] = i, this[Pa](n), !0)
        },
        remove: function (t) {
            this.set(t, null)
        },
        valueOf: function () {
            return this.id
        },
        toString: function () {
            return this.id
        },
        _l89: function (t, i) {
            if (i === e && (i = - 1), this == t || t == this._hf)
            return !1;
            if (t && this == t._hf && !t._l89(null))
            return !1;
            var n = new cC(this, t, i);
            if (!this.beforeEvent(n))
            return !1;
            var s,
            r,
            h = this._hf;
            return t && (s = new uC(t, this), !t[gc](s)) ? !1 : null == h || (r = new dC(h, this), h.beforeEvent(r)) ? (this._hf = t, null != t && u(t, this, i), null != h && d(h, this), this[Pa](n), null != t && t[Pa](s), null != h && h.onEvent(r), this.onParentChanged(h, t), !0)  : !1
        },
        addChild: function (t, i) {
            var e = t._l89(this, i);
            return e && this.onChildAdd(t, i),
            e
        },
        onChildAdd: function () {
        },
        removeChild: function (t) {
            if (!this._dq || !this._dq.contains(t))
            return !1;
            var i = t._l89(null);
            return this[qu](t),
            i
        },
        onChildRemove: function () {
        },
        toChildren: function () {
            return this._dq ? this._dq.toDatas()  : null
        },
        clearChildren: function () {
            if (this._dq && this._dq[Ps]) {
                var t = this[zu]();
                qL.nj(t, function (t) {
                    t._l89(null)
                }, this),
                this[Yu](t)
            }
        },
        forEachChild: function (t, i) {
            return this[ac]() ? this._dq[ga](t, i)  : !1
        },
        onChildrenClear: function () {
        },
        getChildIndex: function (t) {
            return this._dq && this._dq[Ps] ? this._dq.indexOf(t)  : - 1
        },
        setChildIndex: function (t, i) {
            if (!this._dq || !this._dq.length)
            return !1;
            var e = this._dq.indexOf(t);
            if (0 > e || e == i)
            return !1;
            var n = new lC(this, t, e, i);
            return this[gc](n) === !1 ? !1 : (this._dq.remove(t) && this._dq[th](t, i), this[Pa](n), !0)
        },
        hasChildren: function () {
            return this._dq && this._dq[Ps] > 0
        },
        getChildAt: function (t) {
            return null == this._dq ? null : this._dq._i0[t]
        },
        isDescendantOf: function (t) {
            if (!t[ac]())
            return !1;
            for (var i = this[Xa]; null != i; ) {
                if (t == i)
                return !0;
                i = i.parent
            }
            return !1
        },
        onParentChanged: function () {
        }
    },
    qL.nm(xC, vC),
    qL.ls(xC.prototype, {
        childrenCount: {
            get: function () {
                return this._dq ? this._dq[Ps] : 0
            }
        },
        children: {
            get: function () {
                return this._dq || (this._dq = new HL),
                this._dq
            }
        },
        parent: {
            get: function () {
                return this._hf
            },
            set: function (t) {
                this._l89(t, - 1)
            }
        },
        properties: {
            get: function () {
                return this._l6s
            },
            set: function (t) {
                this._l6s != t && (this._l6s = t)
            }
        }
    });
    var EC = function () {
        this._i0 = [
        ],
        this._jm = {
        },
        this._1p = new bC
    };
    EC[Wa] = {
        beforeEvent: function (t) {
            return null != this._1p && this._1p[gc] ? this._1p.beforeEvent(t)  : !0
        },
        onEvent: function (t) {
            return this._1p instanceof Function ? (this._1p(t), void 0)  : (null != this._1p && this._1p[Pa] && this._1p[Pa](t), void 0)
        },
        _1p: null,
        setIndex: function (t, i) {
            if (!this.contains(t))
            throw new Error(Sr + t[Hu]() + kc);
            var e = this[kr](t);
            if (e == i)
            return !1;
            var n = new pC(this, pC.KIND_INDEX_CHANGE, t, i, e);
            return this.beforeEvent(n) === !1 ? !1 : (this._i0[Z_](t) >= 0 && this._i0.add(i, t), this[Pa](n), !0)
        },
        _dw: function (t, i) {
            if (0 == t[Ps])
            return !1;
            var n = !1,
            s = i >= 0,
            r = new pC(this, pC[Du], t, i);
            if (this.beforeEvent(r) === !1)
            return !1;
            var h = [
            ];
            t = t._i0 || t;
            for (var a = 0, o = t.length; o > a; a++) {
                var f = t[a];
                null !== f && f !== e && this._id(f, i, !0) && (h.push(f), n = !0, s && i++)
            }
            return r[ah] = h,
            this[Pa](r),
            n
        },
        _id: function (t, i, e) {
            if (this[Uu](t) === !1)
            return !1;
            if (e)
            return qL.nc(this, EC, Wu, arguments);
            var n = new pC(this, pC[Du], t, i);
            return this[gc](n) === !1 ? !1 : qL.nc(this, EC, Wu, arguments) ? (this._iw(t, n), t)  : !1
        },
        _iw: function (t, i) {
            this.onEvent(i)
        },
        _9i: function (t) {
            if (0 == t.length)
            return !1;
            var i = new pC(this, pC[Bu], t);
            if (this[gc](i) === !1)
            return !1;
            var n = [
            ],
            s = !1;
            t = t._i0 || t;
            for (var r = 0, h = t[Ps]; h > r; r++) {
                var a = t[r];
                if (null !== a && a !== e) {
                    var o = a.id || a;
                    a.id === e && (a = null),
                    this._e2(o, a, !0) && (n[or](a), s = !0)
                }
            }
            return i[ah] = n,
            this.onEvent(i),
            s
        },
        _e2: function (t, i, e) {
            if (e)
            return qL.nc(this, EC, Vu, arguments);
            var n = new pC(this, pC[Bu], i);
            return this.beforeEvent(n) === !1 ? !1 : qL.nc(this, EC, Vu, arguments) ? (this[Pa](n), !0)  : !1
        },
        clear: function () {
            if (this.isEmpty())
            return !1;
            var t = new pC(this, pC.KIND_CLEAR, this.toDatas());
            return this[gc](t) === !1 ? !1 : qL.nc(this, EC, lr) ? (this[Pa](t), !0)  : !1
        },
        accept: function (t) {
            return this.filter && this[Xu](t) === !1 ? !1 : !0
        }
    },
    qL.nm(EC, HL),
    qL.lx(EC[Wa], Ku, {
        get: function () {
            return this._1p
        }
    });
    var mC = function () {
        qL.lr(this, mC, arguments),
        this.selectionChangeDispatcher = new bC,
        this._selectionModel = new wC(this),
        this._selectionModel._1p = this.selectionChangeDispatcher,
        this.dataChangeDispatcher = new bC,
        this[Zu].addListener({
            beforeEvent: this[Ju],
            onEvent: this[Qu]
        }, this),
        this.parentChangeDispatcher = new bC,
        this[td] = new bC,
        this[id] = new HL;
        var t = this;
        this[id][so] = function (i, e) {
            if (!t[id].contains(i))
            throw new Error(Sr + i.id + kc);
            var n = t.$roots._i0[kr](i);
            if (n == e)
            return !1;
            t.$roots._i0[oc](n, 1),
            t[id]._i0[oc](e, 0, i),
            t._l7dIndexFlag = !0;
            var s = new lC(t, i, n, e);
            return t._28(s),
            !0
        }
    };
    mC.prototype = {
        selectionModel: null,
        selectionChangeDispatcher: null,
        dataChangeDispatcher: null,
        parentChangeDispatcher: null,
        roots: null,
        _iw: function (t, i) {
            t[Su] = this[Zu],
            t[Xa] || this[id][th](t),
            this[Pa](i)
        },
        _e2: function (t, i) {
            if (qL.nc(this, mC, Vu, arguments)) {
                if (i instanceof ON)
                i.disconnect();
                 else if (i instanceof PN) {
                    var e = i.getEdges();
                    this.remove(e)
                }
                var n = i[Xa];
                return null == n ? this.$roots.remove(i)  : (n[ed](i), n.__5r = !0),
                i[ac]() && this.remove(i[zu]()),
                i[Su] = null,
                !0
            }
            return !1
        },
        _59: function (t) {
            var i = t[I_];
            this.contains(i) && (null == i.parent ? this[id].add(i)  : null == t.oldValue && this[id][Z_](i), this.parentChangeDispatcher[Pa](t))
        },
        _28: function (t) {
            this[td].onEvent(t)
        },
        beforeDataPropertyChange: function (t) {
            return t instanceof cC ? this[nd][gc](t)  : !0
        },
        onDataPropertyChanged: function (t) {
            return t instanceof cC ? (this._l7dIndexFlag = !0, t[I_]._l7dIndexFlag = !0, this._59(t), void 0)  : (t instanceof lC && (this._l7dIndexFlag = !0, t.source._l7dIndexFlag = !0, this._28(t)), void 0)
        },
        toRoots: function () {
            return this.$roots[df]()
        },
        _eg: function (t) {
            var i,
            e = t._hf;
            i = e ? e._dq : this[id];
            var n = i.indexOf(t);
            if (0 > n)
            throw new Error(sd + t + '\' not exist in the box');
            return 0 == n ? e : i[rd](n - 1)
        },
        _ei: function (t) {
            var i,
            e = t._hf;
            i = e ? e._dq : this.$roots;
            var n = i.indexOf(t);
            if (0 > n)
            throw new Error(sd + t + '\' not exist in the box');
            return n == i[Ps] - 1 ? e ? this._ei(e)  : null : i.getByIndex(n + 1)
        },
        forEachByDepthFirst: function (t, i, e) {
            return this.$roots.length ? qL.lp(this.$roots, t, i, e)  : !1
        },
        forEachByDepthFirstReverse: function (t, i, e) {
            return this[id][Ps] ? qL.lh(this.$roots, t, i, e)  : !1
        },
        forEachByBreadthFirst: function (t, i) {
            return this[id][Ps] ? qL.lj(this[id], t, i)  : !1
        },
        forEachByBreadthFirstReverse: function (t, i) {
            return this[id].length ? qL.le(this[id], t, i)  : !1
        },
        clear: function () {
            return qL.nc(this, mC, lr) ? (this[id][lr](), this[hd].clear(), !0)  : !1
        }
    },
    qL.nm(mC, EC),
    qL.ls(mC[Wa], {
        selectionModel: {
            get: function () {
                return this._selectionModel
            }
        },
        roots: {
            get: function () {
                return this[id]
            }
        }
    });
    var wC = function (t) {
        qL.lr(this, wC),
        this[ad] = t,
        this._l7oxChangeListener = {
            onEvent: function (t) {
                pC.KIND_REMOVE == t[A_] ? null != t.data ? this[Z_](t.data)  : null != t[od] && this.remove(t.datas)  : pC[ju] == t.kind && this.clear()
            }
        },
        this[ad].listChangeDispatcher[Mu](this._l7oxChangeListener, this)
    };
    wC[Wa] = {
        box: null,
        isSelected: function (t) {
            return this[Va](t.id || t)
        },
        select: function (t) {
            return this.add(t)
        },
        unselect: function (t) {
            return this[Z_](t)
        },
        reverseSelect: function (t) {
            return this[Ef](t) ? this.remove(t)  : this.add(t)
        },
        accept: function (t) {
            return this[ad][Ef](t)
        }
    },
    qL.nm(wC, EC);
    var TC = /^-ms-/,
    OC = /-([\da-z])/gi,
    PC = function (t, i) {
        return i[Nc]()
    },
    IC = function (t) {
        return t[fd](TC, _d) [fd](OC, PC)
    },
    SC = {
        _3z: null,
        _fd: function (t, i) {
            return SC._3z ? (t[Us][th](i), void 0)  : (SC._fc(t, i) || (t.className += $s + i), void 0)
        },
        _fc: function (t, i) {
            return t[Af] && t.className.match(new RegExp(cd + i + cd))
        },
        _l60: function (t, i) {
            return SC._3z ? (t.classList[Z_](i), void 0)  : (t[Af] && (t[Af] = t[Af].replace(new RegExp(cd + i + cd, ud), '')), void 0)
        },
        _l7w: null,
        _hb: null,
        _kp: function () {
            if (!i[zs])
            return function (t) {
                return t
            };
            var t = i[zs](Sf),
            n = t.style,
            s = {
            };
            return function (t) {
                if (s[t])
                return s[t];
                var i = IC(t);
                return n[i] !== e || SC._hb && n[i = IC(SC._hb + i)] !== e ? (s[t] = i, i)  : t
            }
        }(),
        _l7u: {
        },
        _kq: function (t, i) {
            var e = t[Gs];
            if (!e)
            return !1;
            var n,
            s;
            for (n in i)
            i.hasOwnProperty(n) && (s = SC._kp(n)) && (e[s] = i[n]);
            return t
        },
        _hc: function (t, i, e) {
            (i = SC._kp(i)) && (t[Gs][i] = e)
        },
        _g7: function (t, i) {
            return SC._l7w ? SC._l7w.insertRule ? (SC._l7w[dd](t + ld + i + vd, 0), void 0)  : (SC._l7w[bd] && SC._l7w.addRule(t, i, 0), void 0)  : !1
        }
    },
    AC = {
    };
    l(),
    qL.m8 = function (i, e) {
        i.touches && (i = i.changedTouches && i[gd][Ps] ? i[gd][0] : i[Is][0]);
        var n = e.getBoundingClientRect(),
        s = i[dr] || 0,
        r = i.clientY || 0;
        return NL && CL && (t[r_] && s == i[fr] && (s -= t[r_]), t.pageYOffset && r == i[_r] && (r -= t[h_])),
        {
            x: s - n[$f],
            y: r - n[zf]
        }
    },
    qL.lt = function (t, i, e, n, s) {
        if (s) {
            var r = function (t) {
                r.handle.call(r[dc], t)
            };
            return r.scope = s,
            r[lc] = e,
            t[yd](i, r, n),
            r
        }
        return t.addEventListener(i, e, n),
        e
    },
    qL.lo = function (t, i, e) {
        t.removeEventListener(i, e)
    },
    qL.ln = function (t) {
        t[tc] ? t[tc]()  : t.returnValue = !1
    },
    qL.ll = function (t) {
        t.stopPropagation ? t[ic]()  : t.cancelBubble || (t.cancelBubble = !0)
    },
    qL.mp = function (t) {
        qL.ln(t),
        qL.ll(t)
    },
    zL.DOUBLE_CLICK_INTERVAL_TIME = NL ? 500 : 300,
    zL[pd] = NL ? 1500 : 1000;
    var MC;
    if (NL)
    MC = xd[js](Eh);
     else {
        var kC = yr in t ? 'mousewheel' : Ed;
        MC = (kC + md) .split(Eh)
    }
    w.prototype = {
        _ji: null,
        _g9: function () {
            var t = this._jn;
            t && m[tr](this, t)
        },
        destroy: function () {
            this._g9()
        },
        _l79: null,
        _1n: function () {
            this.__longPressTimer && (clearTimeout(this.__longPressTimer), this.__longPressTimer = null)
        },
        _l8z: function () {
            this.__l8ancelClick = !0,
            this._1n(),
            this._gm(this._l79, wd),
            this._l75.clear()
        },
        _l75: null,
        _6g: function (t) {
            var i = this._8x;
            this._8x = y(t),
            this._l75[th](i, this._8x, t)
        },
        _hy: function (t) {
            this._6g(t),
            this._gm(t, Td),
            t[Is] && t[Is].length > 1 && this._gm(t, Od)
        },
        _go: function (t) {
            NL || this._6g(t);
            var i = this._l75[Pd]();
            i && (t.vx = i.x, t.vy = i.y),
            this._gm(t, Id),
            this._l75[lr]()
        },
        _l8y: function (t) {
            this._l79 && (this._1n(), this._gm(t, Sd), this._l79 = null, this._8x = null)
        },
        _gm: function (t, i) {
            this._listener && this._listener[i] instanceof Function && this._listener[i][tr](this._listener, t, this._ji || this._jn)
        }
    };
    var LC = function (t) {
        this._in = t,
        qL.lr(this, LC, [
            t.html
        ])
    };
    LC._l8urrentInteractionSupport = null,
    LC[Wa] = {
        _4k: function (t) {
            this._4f(function (i) {
                i[Ad] instanceof Function && i.onElementRemoved(t, this._in)
            })
        },
        _6n: function () {
            this._4f(function (t) {
                t.onClear instanceof Function && t[Md](this._in)
            })
        },
        _g9: function () {
            this._1x && this._2e(this._1x),
            this._$i && this._2e(this._$i);
            var t = this._in.html;
            t && m[tr](this, t)
        },
        _in: null,
        _1x: null,
        _$i: null,
        _6l: function (t) {
            return this._1x == t ? !1 : (this._1x && this._1x[Ps] && this._2e(this._1x), this._1x = t, void 0)
        },
        _6: function (t) {
            this._$i || (this._$i = [
            ]),
            this._$i[or](t)
        },
        _2: function (t) {
            this._$i && 0 != this._$i[Ps] && qL.nn(this._$i, t)
        },
        _gm: function (t, i, e) {
            this._in[i] instanceof Function && this._in[i][tr](this._in, t, e),
            this._1x && this._eb(t, i, this._1x, e),
            this._$i && this._eb(t, i, this._$i, e)
        },
        _4f: function (t) {
            this._1x && qL.nj(this._1x, t, this),
            this._$i && qL.nj(this._$i, t, this)
        },
        _eb: function (t, i, e, n) {
            if (!qL.nh(e))
            return this._8h(t, i, e, n),
            void 0;
            for (var s = 0; s < e[Ps]; s++) {
                var r = e[s];
                this._8h(t, i, r, n)
            }
        },
        _8h: function (t, i, e, n) {
            var s = e[i];
            s && s[tr](e, t, this._in, n)
        },
        _2i: function (t) {
            t[kd] instanceof Function && t[kd].call(t, this._in)
        },
        _2e: function (t) {
            if (!qL.nh(t))
            return this._2i(t),
            void 0;
            for (var i = 0; i < t[Ps]; i++) {
                var e = t[i];
                e && this._2i(e)
            }
        }
    },
    qL.nm(LC, w),
    O[Wa] = {
        limitCount: 10,
        points: null,
        add: function (t, i, e) {
            var n = i.timeStamp - t.timeStamp || 1;
            e[Ld] = n;
            var s,
            r;
            if (!e.touches)
            return s = i.x - t.x,
            r = i.y - t.y,
            e.dx = s,
            e.dy = r,
            this._id(s, r, n),
            void 0;
            var h = e.touches[Ps];
            if (1 == h)
            s = e[Is][0][dr] - t[Is][0][dr],
            r = e[Is][0][cr] - t.touches[0][cr];
             else {
                for (var a, o, f, _ = [
                ], c = [
                ], u = 0, d = 0, l = 0, v = 0, b = 0, g = 0, y = 0, h = t.touches.length; h > y; y++) {
                    a = t[Is][y];
                    var p = a[dr],
                    x = a.clientY;
                    u += p,
                    d += x,
                    y && (b = Math[Ph](b, Math.sqrt((p - o) * (p - o) + (x - f) * (x - f)))),
                    o = p,
                    f = x,
                    _.push({
                        x: p,
                        y: x
                    })
                }
                u /= h,
                d /= h;
                for (var y = 0, h = e.touches[Ps]; h > y; y++) {
                    a = e[Is][y];
                    var p = a[dr],
                    x = a[cr];
                    l += p,
                    v += x,
                    y && (g = Math[Ph](g, Math[Jr]((p - o) * (p - o) + (x - f) * (x - f)))),
                    o = p,
                    f = x,
                    c[or]({
                        x: p,
                        y: x
                    })
                }
                if (l /= h, v /= h, s = l - u, r = v - d, b && g) {
                    var E = g / b;
                    e[ur] && t[ur] && (E = e[ur] / t[ur]),
                    e.center = {
                        x: l,
                        y: v,
                        clientX: l,
                        clientY: v
                    },
                    e[Cd] = E,
                    e.prev = t
                }
            }
            e.dx = s,
            e.dy = r,
            this._id(s, r, n)
        },
        _id: function (t, i, e) {
            var n = {
                interval: e,
                dx: t,
                dy: i
            };
            this[Pr].splice(0, 0, n),
            this[Pr].length > this[Rd] && this[Pr].pop()
        },
        getCurrentSpeed: function () {
            if (!this.points[Ps])
            return null;
            for (var t = 0, i = 0, e = 0, n = 0, s = this[Pr].length; s > n; n++) {
                var r = this[Pr][n],
                h = r.interval;
                if (h > 300)
                break;
                if (t += r[Ld], i += r.dx, e += r.dy, t > 500)
                break
            }
            return 0 == t || 0 == i && 0 == e ? null : {
                x: i / t,
                y: e / t
            }
        },
        clear: function () {
            this[Pr] = [
            ]
        }
    };
    var CC,
    RC,
    NC,
    DC;
    AL ? (CC = Nd, RC = Dd, NC = Bd, DC = jd)  : ML ? (CC = $d, RC = Gd, NC = Fd, DC = qd)  : (CC = zd, RC = zd, NC = s_, DC = Yd);
    var BC = Hd,
    jC = Math.PI,
    $C = Math[ih],
    GC = Math[ks],
    FC = 1.70158,
    qC = {
        swing: function (t) {
            return - Math[Ms](t * jC) / 2 + 0.5
        },
        easeNone: function (t) {
            return t
        },
        easeIn: function (t) {
            return t * t
        },
        easeOut: function (t) {
            return (2 - t) * t
        },
        easeBoth: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t : 0.5 * (1 - --t * (t - 2))
        },
        easeInStrong: function (t) {
            return t * t * t * t
        },
        easeOutStrong: function (t) {
            return 1 - --t * t * t * t
        },
        easeBothStrong: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t * t * t : 0.5 * (2 - (t -= 2) * t * t * t)
        },
        elasticIn: function (t) {
            var i = 0.3,
            e = i / 4;
            return 0 === t || 1 === t ? t : - ($C(2, 10 * (t -= 1)) * GC(2 * (t - e) * jC / i))
        },
        elasticOut: function (t) {
            var i = 0.3,
            e = i / 4;
            return 0 === t || 1 === t ? t : $C(2, - 10 * t) * GC(2 * (t - e) * jC / i) + 1
        },
        elasticBoth: function (t) {
            var i = 0.45,
            e = i / 4;
            return 0 === t || 2 === (t *= 2) ? t : 1 > t ? - 0.5 * $C(2, 10 * (t -= 1)) * GC(2 * (t - e) * jC / i)  : 0.5 * $C(2, - 10 * (t -= 1)) * GC(2 * (t - e) * jC / i) + 1
        },
        backIn: function (t) {
            return 1 === t && (t -= 0.001),
            t * t * ((FC + 1) * t - FC)
        },
        backOut: function (t) {
            return (t -= 1) * t * ((FC + 1) * t + FC) + 1
        },
        backBoth: function (t) {
            return (t *= 2) < 1 ? 0.5 * t * t * (((FC *= 1.525) + 1) * t - FC)  : 0.5 * ((t -= 2) * t * (((FC *= 1.525) + 1) * t + FC) + 2)
        },
        bounceIn: function (t) {
            return 1 - qC[Ud](1 - t)
        },
        bounceOut: function (t) {
            var i,
            e = 7.5625;
            return i = 1 / 2.75 > t ? e * t * t : 2 / 2.75 > t ? e * (t -= 1.5 / 2.75) * t + 0.75 : 2.5 / 2.75 > t ? e * (t -= 2.25 / 2.75) * t + 0.9375 : e * (t -= 2.625 / 2.75) * t + 0.984375
        },
        bounceBoth: function (t) {
            return 0.5 > t ? 0.5 * qC[Wd](2 * t)  : 0.5 * qC[Ud](2 * t - 1) + 0.5
        }
    },
    zC = function (t) {
        this._i2 = t
    };
    zC[Wa] = {
        _i2: null,
        _jh: function (t) {
            var i = Date[Rr]();
            this._jo();
            var e = this;
            this._requestID = requestAnimationFrame(function n() {
                var s = Date[Rr](),
                r = s - i;
                return !r || e._i2 && e._i2(r) !== !1 ? (i = s, e._requestID = requestAnimationFrame(n), void 0)  : (e._jo(), t instanceof Function && t[tr](), void 0)
            })
        },
        _jo: function () {
            return this._requestID ? (t.cancelAnimationFrame(this._requestID), delete this._requestID, void 0)  : !1
        },
        _di: function () {
            return null != this._requestID
        }
    };
    var YC = function (t, i, e, n) {
        this._onStep = t,
        this._ji = i || this,
        this._31 = n,
        e && e > 0 && (this._gr = e)
    };
    YC[Wa] = {
        _gr: 1000,
        _31: null,
        _dj: 0,
        _jo: function () {
            return this._dj = 0,
            this._l6x = 0,
            qL.nc(this, YC, Vd)
        },
        _l6x: 0,
        _i2: function (t) {
            if (this._dj += t, this._dj >= this._gr)
            return this._onStep[tr](this._ji, 1, (1 - this._l6x) * this._gr, t, this._gr),
            !1;
            var i = this._dj / this._gr;
            return this._31 && (i = this._31(i)),
            this._onStep.call(this._ji, i, (i - this._l6x) * this._gr, t, this._gr) === !1 ? !1 : (this._l6x = i, void 0)
        }
    },
    qL.nm(YC, zC);
    var HC = function (t, i) {
        qL.no(Sr + t + $r),
        i && qL.no(i)
    },
    UC = {
        version: Xd,
        extend: qL.nm,
        doSuperConstructor: qL.lr,
        doSuper: qL.nc,
        createFunction: qL.m2,
        find: qL.nu,
        get: qL.nv,
        setClass: qL.n5,
        appendClass: qL.me,
        removeClass: qL.mg,
        forEach: qL.nj,
        forEachReverse: qL.lv,
        isNumber: qL.n6,
        isString: qL.n3,
        isBoolean: qL.mw,
        isArray: qL.nh,
        eventPreventDefault: qL.ln,
        eventStopPropagation: qL.ll,
        stopEvent: qL.mp,
        callLater: qL.mu,
        nextFrame: qL.ms,
        forEachChild: qL.ma,
        forEachByDepthFirst: qL.lp,
        forEachByDepthFirstReverse: qL.lh,
        forEachByBreadthFirst: qL.lj,
        randomInt: qL.mr,
        randomBool: qL.ml,
        randomColor: qL.mi,
        addEventListener: qL.lt,
        getFirstElementChildByTagName: WL
    };
    UC[Kd] = NL,
    UC[Zd] = DL,
    UC.intersectsPoint = _,
    UC.containsRect = c,
    UC[Jd] = JL,
    UC.Size = ZL,
    UC[Qd] = VL,
    UC[tl] = QL,
    UC.Event = fC,
    UC[il] = _C,
    UC.ListEvent = pC,
    UC.Handler = vC,
    UC[el] = bC,
    UC[nl] = tC,
    UC.Data = xC,
    UC[sl] = wC,
    UC.DataModel = mC,
    UC[rl] = yC,
    UC[hl] = S,
    UC[al] = P,
    UC[ol] = I,
    UC[fl] = T,
    UC.calculateDistance = XL,
    UC.HashList = HL,
    UC.DragSupport = w,
    UC[_l] = function (t) {
        alert(t)
    },
    UC[cl] = function (t, i, e, n) {
        var s = prompt(t, i);
        return s != i && e ? e[tr](n, s)  : s
    },
    UC[ul] = function (t, i, e) {
        var n = confirm(t);
        return n && i ? i.call(e)  : n
    },
    UC[dl] = SC._g7;
    var WC = {
        SELECTION_TYPE_BORDER_RECT: ll,
        SELECTION_TYPE_BORDER: vl,
        SELECTION_TYPE_SHADOW: bl,
        NS_SVG: 'http://www.w3.org/2000/svg',
        PROPERTY_TYPE_ACCESSOR: 0,
        PROPERTY_TYPE_STYLE: 1,
        PROPERTY_TYPE_CLIENT: 2,
        EDGE_TYPE_DEFAULT: null,
        EDGE_TYPE_ELBOW: gl,
        EDGE_TYPE_ELBOW_HORIZONTAL: yl,
        EDGE_TYPE_ELBOW_VERTICAL: pl,
        EDGE_TYPE_ORTHOGONAL: xl,
        EDGE_TYPE_ORTHOGONAL_HORIZONTAL: El,
        EDGE_TYPE_ORTHOGONAL_VERTICAL: ml,
        EDGE_TYPE_HORIZONTAL_VERTICAL: wl,
        EDGE_TYPE_VERTICAL_HORIZONTAL: Tl,
        EDGE_TYPE_EXTEND_TOP: Ol,
        EDGE_TYPE_EXTEND_LEFT: Pl,
        EDGE_TYPE_EXTEND_BOTTOM: Il,
        EDGE_TYPE_EXTEND_RIGHT: Sl,
        EDGE_TYPE_ZIGZAG: Al,
        EDGE_CORNER_NONE: Gf,
        EDGE_CORNER_ROUND: sh,
        EDGE_CORNER_BEVEL: Ml,
        GROUP_TYPE_RECT: kl,
        GROUP_TYPE_CIRCLE: Ll,
        GROUP_TYPE_ELLIPSE: Cl,
        SHAPE_CIRCLE: Rl,
        SHAPE_RECT: kl,
        SHAPE_ROUNDRECT: Nl,
        SHAPE_STAR: Dl,
        SHAPE_TRIANGLE: Bl,
        SHAPE_HEXAGON: jl,
        SHAPE_PENTAGON: $l,
        SHAPE_TRAPEZIUM: Gl,
        SHAPE_RHOMBUS: Fl,
        SHAPE_PARALLELOGRAM: ql,
        SHAPE_HEART: zl,
        SHAPE_DIAMOND: Yl,
        SHAPE_CROSS: Hl,
        SHAPE_ARROW_STANDARD: Ul,
        SHAPE_ARROW_1: Wl,
        SHAPE_ARROW_2: Vl,
        SHAPE_ARROW_3: Xl,
        SHAPE_ARROW_4: Kl,
        SHAPE_ARROW_5: Zl,
        SHAPE_ARROW_6: Jl,
        SHAPE_ARROW_7: Ql,
        SHAPE_ARROW_8: tv,
        SHAPE_ARROW_OPEN: iv
    };
    WC.LINE_CAP_TYPE_BUTT = ev,
    WC[nv] = sh,
    WC[sv] = rv,
    WC[hv] = Ml,
    WC[av] = sh,
    WC[ov] = fv,
    zL[_v] = WC[cv],
    zL.SELECTION_TOLERANCE = 3,
    zL[uv] = 2,
    zL[dv] = 7,
    zL[lv] = qL.n9(3422561023),
    zL[_v] = WC.SELECTION_TYPE_SHADOW,
    zL[vv] = 10,
    zL[bv] = 10,
    zL[gv] = e,
    zL.ARROW_SIZE = 10,
    zL[yv] = 1.2;
    var VC = t.devicePixelRatio || 1;
    1 > VC && (VC = 1);
    var XC = {
        _8n: function (t, e) {
            var n = i[zs](Mh);
            if (n._g = n[__](da), n._kmSize = R, n._g._ii = N, t)
            n._kmSize(t, e);
             else {
                var s = n._g,
                r = s.webkitBackingStorePixelRatio || s[zr] || s[Yr] || s[Hr] || s[Ur] || 1,
                h = VC / r;
                n._ib = h
            }
            return n
        },
        _4i: function (t, i, e) {
            var n = t[pv](WC[xv], i);
            return e && XC._73(n, e),
            n
        },
        _73: function (t, i) {
            var n;
            for (var s in i)
            n = i[s],
            n !== e && null !== n ? t[Ev](s, n)  : t[mv](s);
            return t
        },
        _l6e: function (t, i, n) {
            if (t === e || null === t)
            return {
                width: 0,
                height: 0
            };
            n = n || zL[wv],
            XC.g[l_] != n && (XC.g.font = n);
            var s = XC.g.measureText(t);
            return {
                width: s[Gr],
                height: i * zL.LINE_HEIGHT
            }
        },
        _$z: function (t, i, n) {
            if (t === e || null === t)
            return {
                width: 0,
                height: 0
            };
            n = n || zL[wv],
            XC.g.font != n && (XC.g[l_] = n);
            for (var s = i * zL[yv], r = 0, h = 0, a = t.split(Da), o = 0, f = a[Ps]; f > o; o++) {
                var _ = a[o];
                r = Math[Ph](XC.g.measureText(_) .width, r),
                h += s
            }
            return {
                width: r,
                height: h
            }
        },
        _l6h: function (t) {
            t.setTransform(1, 0, 0, 1, 0, 0)
        }
    };
    qL.lx(XC, ud, {
        get: function () {
            return this._g || (this._g = XC._8n(zL[Tv], zL.IMAGE_MAX_SIZE) ._g, this._g[l_] = zL[wv]),
            this._g
        }
    }),
    zL[Tv] = 200,
    UC.createCanvas = XC._8n;
    var KC = function (t, i, e, n) {
        var s = t - e,
        r = i - n;
        return s * s + r * r
    };
    K[Wa] = {
        equals: function (t) {
            return this.cx == t.cx && this.cy == t.cy && this.r == t.r
        }
    },
    K._hwCircle = function (t, i, e) {
        if (!e)
        return V(t, i);
        var n = KC(t.x, t.y, i.x, i.y),
        s = KC(t.x, t.y, e.x, e.y),
        r = KC(e.x, e.y, i.x, i.y);
        if (n + ZC >= s + r)
        return V(t, i, 0, e);
        if (s + ZC >= n + r)
        return V(t, e, 0, i);
        if (r + ZC >= n + s)
        return V(i, e, 0, t);
        var h;
        Math.abs(e.y - i.y) < 0.0001 && (h = t, t = i, i = h),
        h = e.x * (t.y - i.y) + t.x * (i.y - e.y) + i.x * ( - t.y + e.y);
        var a = (e.x * e.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - e.y)) * (i.y - e.y) + i.x * i.x * ( - t.y + e.y)) / (2 * h),
        o = (i.y + e.y) / 2 - (e.x - i.x) / (e.y - i.y) * (a - (i.x + e.x) / 2);
        return new K(a, o, XL(a, o, t.x, t.y), t, i, e)
    };
    var ZC = 0.01,
    JC = {
        _l62: function (t, i, n, s, r) {
            var h = 0,
            a = 0,
            o = i._h0;
            if (n = n || 0, t.x === e) {
                var f = t.horizontalPosition,
                _ = t.verticalPosition,
                c = !0;
                switch (f) {
                case nC:
                    c = !1;
                    break;
                case eC:
                    h += o / 2
                }
                switch (_) {
                case sC:
                    a -= n / 2;
                    break;
                case hC:
                    a += n / 2
                }
            } else
            h = t.x,
            a = t.y,
            Math.abs(h) > 0 && Math[Rs](h) < 1 && (h *= o);
            r && null != s && (a += s.y, h += Math.abs(s.x) < 1 ? s.x * o : s.x);
            var u = si[tr](i, h, a, c);
            return u ? (r || null == s || u.offset(s), u)  : {
                x: 0,
                y: 0
            }
        },
        _jp: function (t, i) {
            var e = i[Ws],
            n = i.points;
            switch (e) {
            case uR:
                t[Ov](n[0], n[1], n[2], n[3], i._r);
                break;
            case oR:
                t[fo](n[0], n[1]);
                break;
            case fR:
                t[ao](n[0], n[1]);
                break;
            case _R:
                t[Pv](n[0], n[1], n[2], n[3]);
                break;
            case cR:
                t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                break;
            case dR:
                t[Dh]()
            }
        },
        _4y: function (t, i, e, n) {
            var s = i.type;
            if (s != oR && s != dR) {
                var r = e[_h],
                h = i[Pr];
                switch (e[Ws] == oR && t[th](r.x, r.y), s) {
                case uR:
                    ai(i, r.x, r.y, h[0], h[1], h[2], h[3], h[4]),
                    t[th](h[0], h[1]),
                    t.add(i._p1x, i._p1y),
                    t[th](i._p2x, i._p2y),
                    i._l7oundaryPoint1 && t[th](i._l7oundaryPoint1.x, i._l7oundaryPoint1.y),
                    i._l7oundaryPoint2 && t.add(i._l7oundaryPoint2.x, i._l7oundaryPoint2.y);
                    break;
                case fR:
                    t[th](h[0], h[1]);
                    break;
                case _R:
                    G([r.x,
                    r.y][ch](h), t);
                    break;
                case cR:
                    Y([r.x,
                    r.y][ch](h), t);
                    break;
                case dR:
                    n && t.add(n[Pr][0], n[Pr][1])
                }
            }
        },
        _5f: function (t, i, e) {
            var n = t.type;
            if (n == oR)
            return 0;
            var s = i.lastPoint,
            r = t[Pr];
            switch (n == cR && 4 == r[Ps] && (n = _R), n) {
            case fR:
                return XL(r[0], r[1], s.x, s.y);
            case uR:
                return t._h0;
            case _R:
                var h = F([s.x,
                s.y][ch](r));
                return t._lf = h,
                h(1);
            case cR:
                var h = U([s.x,
                s.y].concat(r));
                return t._lf = h,
                h(1) || H([s.x,
                s.y].concat(r));
            case dR:
                if (s && e)
                return t.points = e[Pr],
                XL(e.points[0], e[Pr][1], s.x, s.y)
            }
            return 0
        }
    },
    QC = function (t, i, e, n, s, r) {
        this.type = t,
        this[Iv] = i,
        this.positions = e,
        this.angle = n || 0,
        this.tx = s || 0,
        this.ty = r || 0
    };
    WC.GRADIENT_TYPE_RADIAL = iu,
    WC[Sv] = Qc,
    QC.prototype = {
        type: null,
        colors: null,
        positions: null,
        angle: null,
        tx: 0,
        ty: 0,
        position: tC[_u],
        isEmpty: function () {
            return null == this.colors || 0 == this[Iv][Ps]
        },
        _5w: function () {
            var t = this.colors[Ps];
            if (1 == t)
            return [0];
            for (var i = [
            ], e = 1 / (t - 1), n = 0; t > n; n++)
            i[or](e * n);
            return this[Av] || (this[Av] = i),
            i
        },
        generatorGradient: function (t) {
            if (null == this[Iv] || 0 == this.colors[Ps])
            return null;
            var i,
            e = XC.g;
            if (this[Ws] == WC[Sv]) {
                var n = this[yf];
                n > Math.PI && (n -= Math.PI);
                var s;
                if (n <= Math.PI / 2) {
                    var r = Math.atan2(t[Fr], t.width),
                    h = Math[Jr](t.width * t[Gr] + t[Fr] * t.height),
                    a = r - n;
                    s = Math.cos(a) * h
                } else {
                    var r = Math[As](t[Gr], t[Fr]),
                    h = Math.sqrt(t.width * t.width + t.height * t[Fr]),
                    a = r - (n - Math.PI / 2);
                    s = Math.cos(a) * h
                }
                var o = s / 2,
                f = o * Math[Ms](n),
                _ = o * Math[ks](n),
                c = t.x + t[Gr] / 2 - f,
                u = t.y + t.height / 2 - _,
                d = t.x + t.width / 2 + f,
                l = t.y + t.height / 2 + _;
                i = e.createLinearGradient(c, u, d, l)
            } else {
                if (!(this.type = WC[Mv]))
                return null;
                var v = qL.mj(this[kv], t.width, t[Fr]);
                v.x += t.x,
                v.y += t.y,
                this.tx && (v.x += Math[Rs](this.tx) < 1 ? t.width * this.tx : this.tx),
                this.ty && (v.y += Math[Rs](this.ty) < 1 ? t[Fr] * this.ty : this.ty);
                var b = XL(v.x, v.y, t.x, t.y);
                b = Math[Ph](b, XL(v.x, v.y, t.x, t.y + t[Fr])),
                b = Math.max(b, XL(v.x, v.y, t.x + t[Gr], t.y + t[Fr])),
                b = Math.max(b, XL(v.x, v.y, t.x + t[Gr], t.y)),
                i = e[Lv](v.x, v.y, 0, v.x, v.y, b)
            }
            var g = this.colors,
            y = this[Av];
            y && y[Ps] == g[Ps] || (y = this._5w());
            for (var p = 0, x = g[Ps]; x > p; p++)
            i.addColorStop(y[p], g[p]);
            return i
        }
    };
    var tR = new QC(WC[Sv], [
        qL.n9(2332033023),
        qL.n9(1154272460),
        qL.n9(1154272460),
        qL.n9(1442840575)
    ], [
        0.1,
        0.3,
        0.7,
        0.9
    ], Math.PI / 2),
    iR = new QC(WC.GRADIENT_TYPE_LINEAR, [
        qL.n9(2332033023),
        qL.n9(1154272460),
        qL.n9(1154272460),
        qL.n9(1442840575)
    ], [
        0.1,
        0.3,
        0.7,
        0.9
    ], 0);
    new QC(WC[Sv], [
        qL.n9(1154272460),
        qL.n9(1442840575)
    ], [
        0.1,
        0.9
    ], 0);
    var eR = new QC(WC[Mv], [
        qL.n9(2298478591),
        qL.n9(1156509422),
        qL.n9(1720223880),
        qL.n9(1147561574)
    ], [
        0.1,
        0.3,
        0.7,
        0.9
    ], 0, - 0.3, - 0.3),
    nR = [
        qL.n9(0),
        qL.n9(4294901760),
        qL.n9(4294967040),
        qL.n9(4278255360),
        qL.n9(4278250239),
        qL.n9(4278190992),
        qL.n9(4294901958),
        qL.n9(0)
    ],
    sR = [
        0,
        0.12,
        0.28,
        0.45,
        0.6,
        0.75,
        0.8,
        1
    ],
    rR = new QC(WC[Sv], nR, sR),
    hR = new QC(WC[Sv], nR, sR, Math.PI / 2),
    aR = new QC(WC[Mv], nR, sR);
    QC.LINEAR_GRADIENT_VERTICAL = tR,
    QC.LINEAR_GRADIENT_HORIZONTAL = iR,
    QC[Cv] = eR,
    QC.RAINBOW_LINEAR_GRADIENT = rR,
    QC[Rv] = hR,
    QC[Nv] = aR;
    var oR = eu,
    fR = Qc,
    _R = Dv,
    cR = tu,
    uR = Bv,
    dR = jv;
    WC[$v] = oR,
    WC.SEGMENT_LINE_TO = fR,
    WC.SEGMENT_QUAD_TO = _R,
    WC.SEGMENT_CURVE_TO = cR,
    WC[Gv] = uR,
    WC[Fv] = dR;
    var lR = function (t, i) {
        this.id = ++FL,
        qL.nh(t) ? this[Pr] = t : (this.type = t, this[Pr] = i)
    };
    lR.prototype = {
        toJSON: function () {
            return {
                type: this.type,
                points: this.points
            }
        },
        parseJSON: function (t) {
            this[Ws] = t.type,
            this[Pr] = t[Pr]
        },
        points: null,
        type: fR,
        clone: function () {
            return new lR(this[Ws], qL.mm(this[Pr]))
        },
        move: function (t, i) {
            if (this[Pr])
            for (var e = 0, n = this[Pr][Ps]; n > e; e++) {
                var s = this[Pr][e];
                UC[qv](s) && (this.points[e] += 0 == e % 2 ? t : i)
            }
        }
    },
    qL.ls(lR[Wa], {
        lastPoint: {
            get: function () {
                return this[Ws] == uR ? {
                    x: this._p2x,
                    y: this._p2y
                }
                 : {
                    x: this[Pr][this.points.length - 2],
                    y: this.points[this.points.length - 1]
                }
            }
        },
        firstPoint: {
            get: function () {
                return {
                    x: this[Pr][0],
                    y: this.points[1]
                }
            }
        }
    }),
    UC.PathSegment = lR;
    var vR = 0,
    bR = function (t) {
        this[nh] = new JL,
        this._e8 = t || []
    };
    bR[Wa] = {
        toJSON: function () {
            var t = [
            ];
            return this._e8[ga](function (i) {
                t[or](i[zv]())
            }),
            t
        },
        parseJSON: function (t) {
            var i = this._e8;
            t[ga](function (t) {
                i[or](new lR(t.type, t[Pr]))
            })
        },
        clear: function () {
            this._e8[Ps] = 0,
            this[nh].clear(),
            this._h0 = 0,
            this._5r = !0
        },
        _l8e: !0,
        _60: function (t, i) {
            this._l8e && 0 === this._e8.length && t != oR && this._e8[or](new lR(oR, [
                0,
                0
            ])),
            this._e8.push(new lR(t, i)),
            this._5r = !0
        },
        moveTo: function (t, i) {
            this._60(oR, [
                t,
                i
            ])
        },
        lineTo: function (t, i) {
            this._60(fR, [
                t,
                i
            ])
        },
        quadTo: function (t, i, e, n) {
            this._60(_R, [
                t,
                i,
                e,
                n
            ])
        },
        curveTo: function (t, i, e, n, s, r) {
            this._60(cR, [
                t,
                i,
                e,
                n,
                s,
                r
            ])
        },
        arcTo: function (t, i, e, n, s) {
            this._60(uR, [
                t,
                i,
                e,
                n,
                s
            ])
        },
        closePath: function () {
            this._60(dR)
        },
        _6x: function (t, i, e, n, s) {
            if (n.selectionColor) {
                if (e == WC.SELECTION_TYPE_SHADOW) {
                    if (!n[Yv])
                    return ;
                    return t[Hv] = n[Uv],
                    t.shadowBlur = n[Yv] * i,
                    void 0
                }
                if (e == WC[Wv]) {
                    if (!n.selectionBorder)
                    return ;
                    t[Vv] = n[Uv],
                    t[oh] = n.selectionBorder + (s[oh] || 0),
                    this._jp(t),
                    t[hh]()
                }
            }
        },
        _5r: !0,
        _e8: null,
        _h0: 0,
        lineCap: ev,
        lineJoin: sh,
        draw: function (t, i, e, n, s) {
            t[Xv] = e[Xv] || this[Xv],
            t[Kv] = e[Kv] || this.lineJoin,
            n && (s || (s = e), this._6x(t, i, s[Zv], s, e)),
            e[Jv] && (this._jp(t), t.lineWidth = e.lineWidth + 2 * (e.outline || 0), t[Vv] = e[Jv], t.stroke()),
            t[oh] = 0,
            this._jp(t),
            e[Qv] && (t.fillStyle = e[tb] || e[Qv], t.fill()),
            e[ib] && (t.fillStyle = e._fillGradient || e.fillGradient, t[eb]()),
            e.lineWidth && (t.lineWidth = e[oh], e[ra] && (t.lineDash = e[ra], t[ca] = e[ca]), t[Vv] = e.renderColor || e[Vv], t[hh](), t[ra] = [
            ])
        },
        _jp: function (t) {
            t[nb]();
            for (var i, e, n = 0, s = this._e8.length; s > n; n++)
            i = this._e8[n],
            JC._jp(t, i, e),
            e = i
        },
        validate: function () {
            if (this._5r = !1, this.bounds.clear(), this._h0 = 0, 0 != this._e8[Ps])
            for (var t, i, e = this._e8, n = 1, s = e[0], r = s, h = e[Ps]; h > n; n++)
            t = e[n],
            t[Ws] == oR ? r = t : (JC._4y(this[nh], t, s, r), i = JC._5f(t, s, r), t._h0 = i, this._h0 += i),
            s = t
        },
        getBounds: function (t) {
            if (this._5r && this[eh](), this.bounds.isEmpty())
            return new JL;
            t = t || 0;
            var i = t / 2;
            return new JL(this.bounds.x - i, this[nh].y - i, this[nh][Gr] + t, this.bounds.height + t)
        },
        _fx: function (t, i, e, n, s, r) {
            return ni[tr](this, t, i, e, n, s, r)
        },
        _l6j: function () {
            return [][ch](this._e8)
        },
        generator: function (t, i, e, n, s) {
            return ei.call(this, t, i, e, n, s)
        },
        getLocation: function (t, i) {
            return si.call(this, t, i || 0)
        }
    },
    qL.ls(bR.prototype, {
        length: {
            get: function () {
                return this._5r && this[eh](),
                this._h0
            }
        },
        _iu: {
            get: function () {
                return 0 == this._e8[Ps]
            }
        }
    }),
    WC.BLEND_MODE_DARKEN = sb,
    WC[rb] = hb,
    WC[ab] = ob,
    WC[Th] = fb,
    WC.BLEND_MODE_LIGHTEN = _b,
    WC.BLEND_MODE_SCREEN = cb,
    WC[Sh] = ub,
    zL[mh] = WC.BLEND_MODE_LINEAR_BURN;
    var gR = function (t) {
        t = Math.ceil(t);
        var i = this._ht[db];
        if (i >= t) {
            for (var e = t, n = this._ht[e]; !n && ++e <= i; )
            n = this._ht[e];
            if (n)
            return n
        }
        var s = XC._8n(this._h1[Gr] * t, this._h1.height * t),
        r = s._g;
        r[Vr](),
        r[lb]( - this._h1.x * t, - this._h1.y * t),
        r.scale(t, t),
        r.beginPath(),
        this[kh](r, t),
        r.restore();
        var n = new yR(s, this._h1, t);
        return this._ht[t] = n,
        this._ht[db] = t,
        n
    },
    yR = function (t, i, e) {
        this._h1 = i,
        this._hr = t,
        this[ur] = e || 1
    };
    yR.prototype = {
        scale: 1,
        _h1: null,
        _hr: null,
        _ht: null,
        _jp: function (t, i, e) {
            if (this._hr) {
                if (1 == this.scale && !i)
                return t.drawImage(this._hr, this._h1.x, this._h1.y),
                void 0;
                t[Vr](),
                t.translate(this._h1.x, this._h1.y),
                t.scale(1 / this[ur], 1 / this.scale);
                var n;
                if (i) {
                    this._ht || (this._ht = {
                    });
                    var s = i + e;
                    if (n = this._ht[s], !n) {
                        if (this._hr instanceof Image) {
                            var n = XC._8n(this._hr.width, this._hr.height);
                            n._g[vb](this._hr, 0, 0),
                            this._hr = n
                        }
                        this._ht[s] = n = vi(this._hr, i, e)
                    }
                } else
                n = this._hr;
                t[vb](n, 0, 0),
                t[Lh]()
            }
        }
    };
    var vR = 1,
    pR = 1,
    xR = 3,
    ER = 4;
    zL.IMAGE_WIDTH = 20,
    zL[Oa] = 20,
    Ei[Wa] = {
        _9s: function (t, i) {
            this._l7o && this._l7o[Mu](t, i)
        },
        _6e: function (t, i) {
            this._l7o && this._l7o.removeListener(t, i)
        },
        _9p: function (t) {
            var i = t.target;
            this._ip = i,
            delete this._ipLoading,
            this[zh] = !0,
            this._ipMeasured && (this._l7o.onEvent(new fC(this, bb, gb, i)), this._l7o[lr](), delete this._l7o)
        },
        _7b: null,
        $invalidateSize: !0,
        getBounds: function () {
            return this.$invalidateSize && this._e4(),
            this._h1
        },
        _e4: function () {
            this[zh] = !1;
            var t = this._l1pe == xR;
            if (t)
            if (this._ipMeasured = !0, this._ip) {
                if (this._h1 = new JL(0, 0, this._ip[Gr], this._ip.height), !this._ip._pixels) {
                    var i = XC._8n(this._ip[Gr], this._ip.height);
                    i._g.drawImage(this._ip, 0, 0),
                    this._ip._pixels = _i(i),
                    this._ip._pixels && (this._7b = new yR(i, this._h1))
                }
            } else
            this._h1 = new JL(0, 0, zL[Ta], zL[Oa]);
             else
            this._l1pe == pR && (bi(this.data), this._h1 = this[ah]._h1, this._7b = this[ah]._7b);
            this._iu = !(this._7b || this._ip || this[ah][kh] || t)
        },
        _iu: !1,
        _ek: function (t) {
            return this[ah]._ek ? this.data._ek(t)  : void 0
        },
        draw: function (t, i, e, n, s, r, h, a) {
            if (r = r || i, !this._iu && r) {
                if (n)
                if (MN && s[Zv] == WC[cv])
                t[Hv] = s[Uv],
                t.shadowBlur = s[Yv] * i;
                 else {
                    var o = s.selectionBorder;
                    (e._hk || e._hj) && (o /= Math[Ph](e._hk, e._hj)),
                    t[Vv] = s[Uv],
                    t[oh] = o,
                    t[yb](this._h1.x - o / 2, this._h1.y - o / 2, this._h1.width + o, this._h1.height + o)
                }
                if (this._7b && (1 >= r || this._l1pe == xR))
                return this._7b._jp(t, h, a),
                void 0;
                if (this._l1pe == xR || this._l1pe == ER)
                return this._ip ? h && this._l1pe == ER ? (this._9r(t, h, a), void 0)  : (t[vb](this._ip, 0, 0), void 0)  : (t[pb] = 'rgba(200,200,200, 0.7)', t[kl](0, 0, zL[Ta], zL[Oa]), t[eb](), t[xb](), t.textAlign = pf, t[Eb] = mb, t[pb] = wb, t[l_] = Tb, t.fillText(Ob, zL[Ta] / 2, zL[Oa] / 2, 0.9 * zL[Ta]), void 0);
                if (h || n && MN) {
                    var f = this._ek(r);
                    if (f)
                    return f._jp(t, h, a),
                    void 0
                }
                this[ah][kh] instanceof Function && this[ah][kh](t, i, h)
            }
        },
        _fx: function (t, i, e) {
            var n;
            if (this._ip && this._ip._pixels)
            n = this._ip._pixels;
             else {
                if (!this[ah] || !this[ah]._pixels)
                return !0;
                n = this[ah]._pixels
            }
            return t = Math.round(t - n._h1.x),
            i = Math.round(i - n._h1.y),
            ui(n, n._h1, t, i, e)
        }
    };
    var mR = {
        _ic: {
        },
        _kt: function (t, i) {
            var e = mR._ic[t];
            return i && !e && (e = !IL && t[If](/.gif$/gi) ? new $i(t)  : new Ei(t), mR._ic[t] = e),
            e
        },
        _fz: function (t) {
            return t._ip ? t._ip : qL.n3(t) ? mR._kt(t, !0)  : t._ip = new Ei(t)
        }
    },
    wR = function (t, i, e, n, s, r, h, a, o) {
        this._jk = mi(t, i, e, n, s, r, h, a, o)
    },
    TR = {
        server: {
            draw: function (t) {
                t.save(),
                t.translate(0, 0),
                t[nb](),
                t.moveTo(0, 0),
                t.lineTo(40, 0),
                t[ao](40, 40),
                t[ao](0, 40),
                t[Dh](),
                t[xb](),
                t[lb](0, 0),
                t[lb](0, 0),
                t.scale(1, 1),
                t[lb](0, 0),
                t[Vv] = Pb,
                t.lineCap = ev,
                t.lineJoin = fv,
                t[Ib] = 4,
                t[Vr](),
                t[Vr](),
                t.restore(),
                t[Vr](),
                t[Lh](),
                t[Vr](),
                t.restore(),
                t[Vr](),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t.save(),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t.save(),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t[Vr](),
                t.restore(),
                t[Vr](),
                t[Lh](),
                t.save(),
                t.restore(),
                t[Lh](),
                t[Vr]();
                var i = t[Sb](6.75, 3.9033, 30.5914, 27.7447);
                i[Ab](0.0493, Mb),
                i.addColorStop(0.0689, kb),
                i.addColorStop(0.0939, Lb),
                i[Ab](0.129, Cb),
                i.addColorStop(0.2266, Rb),
                i.addColorStop(0.2556, Nb),
                i[Ab](0.2869, Db),
                i.addColorStop(0.3194, Bb),
                i[Ab](0.3525, jb),
                i[Ab](0.3695, $b),
                i[Ab](0.5025, Gb),
                i[Ab](0.9212, Fb),
                i[Ab](1, qb),
                t.fillStyle = i,
                t[nb](),
                t[fo](25.677, 4.113),
                t[zb](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004),
                t[zb](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003),
                t[zb](12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004),
                t[zb](9.19, 2.897, 8.977, 2.989, 8.805, 3.094),
                t[zb](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63),
                t[zb](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05),
                t[zb](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307),
                t.bezierCurveTo(22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575),
                t.bezierCurveTo(24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004),
                t[zb](25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004),
                t[zb](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85),
                t[zb](25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253),
                t.bezierCurveTo(25.706, 4.885, 25.749, 4.478, 25.677, 4.113),
                t[zb](25.67, 4.077, 25.697, 4.217, 25.677, 4.113),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t[Lh](),
                t.save(),
                t[Vr](),
                t.fillStyle = Yb,
                t.beginPath(),
                t[fo](19.763, 6.645),
                t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778),
                t.bezierCurveTo(20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999),
                t.bezierCurveTo(21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999),
                t[zb](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372),
                t[ao](21.398, 36.253),
                t.bezierCurveTo(21.397, 36.489, 21.349, 36.713, 21.262, 36.917),
                t.bezierCurveTo(21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458),
                t.bezierCurveTo(20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996),
                t[zb](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949),
                t[ao](4.675, 37.877),
                t[zb](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741),
                t.bezierCurveTo(3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376),
                t[zb](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996),
                t[zb](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172),
                t[ao](2.924, 8.431),
                t.bezierCurveTo(2.923, 8.192, 2.971, 7.964, 3.057, 7.758),
                t[zb](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209),
                t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837),
                t[zb](4.17, 6.749, 4.396, 6.701, 4.633, 6.7),
                t[ao](19.763, 6.645),
                t.closePath(),
                t[eb](),
                t.stroke(),
                t[Lh](),
                t[Lh](),
                t[Vr](),
                t[pb] = Hb,
                t[nb](),
                t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0),
                t[Dh](),
                t.fill(),
                t[hh](),
                t[Lh](),
                t.save(),
                t[pb] = Yb,
                t[nb](),
                t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0),
                t.closePath(),
                t.fill(),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t.fillStyle = Hb,
                t[nb](),
                t[fo](19.377, 17.247),
                t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998),
                t[ao](5.882, 18.108999999999998),
                t.bezierCurveTo(5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247),
                t[ao](5.02, 11.144),
                t[zb](5.02, 10.666, 5.406, 10.281, 5.882, 10.281),
                t[ao](18.516, 10.281),
                t[zb](18.993, 10.281, 19.377, 10.666, 19.377, 11.144),
                t.lineTo(19.377, 17.247),
                t.closePath(),
                t.fill(),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t.save(),
                t.fillStyle = Yb,
                t[nb](),
                t[fo](18.536, 13.176),
                t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794),
                t.lineTo(6.479, 13.794),
                t.bezierCurveTo(6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176),
                t[ao](5.861, 11.84),
                t[zb](5.861, 11.498, 6.137, 11.221, 6.479, 11.221),
                t.lineTo(17.918, 11.221),
                t[zb](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84),
                t.lineTo(18.535, 13.176),
                t.closePath(),
                t[eb](),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t.fillStyle = Yb,
                t.beginPath(),
                t[fo](18.536, 16.551),
                t[zb](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997),
                t[ao](6.479, 17.168999999999997),
                t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551),
                t[ao](5.861, 15.215999999999998),
                t[zb](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998),
                t.lineTo(17.918, 14.596999999999998),
                t[zb](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998),
                t[ao](18.535, 16.551),
                t.closePath(),
                t.fill(),
                t[hh](),
                t[Lh](),
                t.restore(),
                t.restore()
            }
        },
        exchanger2: {
            draw: function (t) {
                t[Vr](),
                t[lb](0, 0),
                t.beginPath(),
                t[fo](0, 0),
                t[ao](40, 0),
                t[ao](40, 40),
                t.lineTo(0, 40),
                t.closePath(),
                t.clip(),
                t[lb](0, 0),
                t[lb](0, 0),
                t[ur](1, 1),
                t[lb](0, 0),
                t.strokeStyle = Pb,
                t.lineCap = ev,
                t.lineJoin = fv,
                t[Ib] = 4,
                t.save(),
                t[Vr](),
                t[Lh](),
                t.save(),
                t.restore(),
                t.save(),
                t[Lh](),
                t[Vr](),
                t.restore(),
                t[Vr](),
                t.restore(),
                t.save(),
                t[Lh](),
                t.save(),
                t[Lh](),
                t[Vr](),
                t.restore(),
                t[Vr](),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t[Lh](),
                t.save();
                var i = t[Sb](0.4102, 24.3613, 39.5898, 24.3613);
                i[Ab](0, Mb),
                i[Ab](0.0788, Rb),
                i[Ab](0.2046, Ub),
                i[Ab](0.3649, Wb),
                i[Ab](0.5432, Vb),
                i[Ab](0.6798, Xb),
                i[Ab](0.7462, Kb),
                i[Ab](0.8508, Zb),
                i[Ab](0.98, Nb),
                i[Ab](1, Jb),
                t[pb] = i,
                t[nb](),
                t[fo](0.41, 16.649),
                t.bezierCurveTo(0.633, 19.767, 0.871, 20.689, 1.094, 23.807000000000002),
                t[zb](1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002),
                t[zb](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523),
                t.bezierCurveTo(26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004),
                t[zb](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005),
                t[zb](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005),
                t.bezierCurveTo(39.589, 16.135000000000005, 3.26, 16.647, 0.41, 16.649),
                t.closePath(),
                t[eb](),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t.save(),
                t[pb] = Yb,
                t[nb](),
                t[fo](16.4, 25.185),
                t[zb](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705),
                t.bezierCurveTo(3.175999999999999, 21.450999999999997, - 0.32200000000000095, 18.971999999999998, 0.544999999999999, 15.533999999999999),
                t[zb](1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998),
                t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998),
                t[zb](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998),
                t[zb](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998),
                t[zb](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997),
                t[zb](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996),
                t[zb](23.289, 25.28, 19.824, 25.436, 16.4, 25.185),
                t[zb](13.529, 24.977, 19.286, 25.396, 16.4, 25.185),
                t[Dh](),
                t.fill(),
                t[hh](),
                t.restore(),
                t[Lh](),
                t[Vr](),
                t[Vr](),
                t[Vr](),
                t.save(),
                t[Vr](),
                t.fillStyle = Qb,
                t[nb](),
                t.moveTo(5.21, 21.754),
                t.lineTo(8.188, 17.922),
                t[ao](9.53, 18.75),
                t[ao](15.956, 16.004),
                t[ao](18.547, 17.523),
                t.lineTo(12.074, 20.334),
                t[ao](13.464, 21.204),
                t[ao](5.21, 21.754),
                t[Dh](),
                t[eb](),
                t.stroke(),
                t.restore(),
                t[Lh](),
                t[Lh](),
                t.save(),
                t.save(),
                t.save(),
                t.fillStyle = Qb,
                t[nb](),
                t[fo](17.88, 14.61),
                t[ao](9.85, 13.522),
                t[ao](11.703, 12.757),
                t[ao](7.436, 10.285),
                t.lineTo(10.783, 8.942),
                t.lineTo(15.091, 11.357),
                t[ao](16.88, 10.614),
                t[ao](17.88, 14.61),
                t[Dh](),
                t[eb](),
                t.stroke(),
                t[Lh](),
                t.restore(),
                t[Vr](),
                t[Vr](),
                t.fillStyle = Qb,
                t[nb](),
                t[fo](17.88, 14.61),
                t.lineTo(9.85, 13.522),
                t[ao](11.703, 12.757),
                t[ao](7.436, 10.285),
                t[ao](10.783, 8.942),
                t[ao](15.091, 11.357),
                t[ao](16.88, 10.614),
                t[ao](17.88, 14.61),
                t.closePath(),
                t[eb](),
                t[hh](),
                t[Lh](),
                t.restore(),
                t[Lh](),
                t.save(),
                t[Vr](),
                t[Vr](),
                t[pb] = Qb,
                t[nb](),
                t[fo](23.556, 15.339),
                t[ao](20.93, 13.879),
                t.lineTo(26.953, 11.304),
                t.lineTo(25.559, 10.567),
                t.lineTo(33.251, 9.909),
                t[ao](31.087, 13.467),
                t[ao](29.619, 12.703),
                t[ao](23.556, 15.339),
                t.closePath(),
                t[eb](),
                t.stroke(),
                t.restore(),
                t[Lh](),
                t[Lh](),
                t[Vr](),
                t.save(),
                t.save(),
                t[pb] = Qb,
                t[nb](),
                t.moveTo(30.028, 23.383),
                t[ao](24.821, 20.366),
                t[ao](22.915, 21.227),
                t.lineTo(21.669, 16.762),
                t[ao](30.189, 17.942),
                t[ao](28.33, 18.782),
                t.lineTo(33.579, 21.725),
                t[ao](30.028, 23.383),
                t[Dh](),
                t.fill(),
                t[hh](),
                t[Lh](),
                t.restore(),
                t[Vr](),
                t.save(),
                t.fillStyle = Qb,
                t[nb](),
                t[fo](30.028, 23.383),
                t.lineTo(24.821, 20.366),
                t[ao](22.915, 21.227),
                t.lineTo(21.669, 16.762),
                t.lineTo(30.189, 17.942),
                t.lineTo(28.33, 18.782),
                t[ao](33.579, 21.725),
                t.lineTo(30.028, 23.383),
                t[Dh](),
                t[eb](),
                t[hh](),
                t[Lh](),
                t[Lh](),
                t[Lh](),
                t[Lh](),
                t.restore(),
                t[Lh]()
            }
        },
        exchanger: {
            draw: function (t) {
                t[Vr](),
                t.translate(0, 0),
                t.beginPath(),
                t.moveTo(0, 0),
                t[ao](40, 0),
                t[ao](40, 40),
                t[ao](0, 40),
                t.closePath(),
                t.clip(),
                t.translate(0, 0),
                t.translate(0, 0),
                t.scale(1, 1),
                t[lb](0, 0),
                t[Vv] = Pb,
                t[Xv] = ev,
                t.lineJoin = fv,
                t.miterLimit = 4,
                t.save(),
                t[Vr](),
                t[Lh](),
                t.save(),
                t[Lh](),
                t.save(),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t[Vr](),
                t.restore(),
                t.save(),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t[Lh](),
                t.save();
                var i = t[Sb](0.2095, 20.7588, 39.4941, 20.7588);
                i[Ab](0, tg),
                i[Ab](0.0788, ig),
                i.addColorStop(0.352, eg),
                i.addColorStop(0.6967, ng),
                i.addColorStop(0.8916, sg),
                i[Ab](0.9557, rg),
                i.addColorStop(1, hg),
                t.fillStyle = i,
                t[nb](),
                t.moveTo(39.449, 12.417),
                t[ao](39.384, 9.424),
                t[zb](39.384, 9.424, 0.7980000000000018, 22.264, 0.3710000000000022, 23.024),
                t[zb]( - 0.026999999999997804, 23.733, 0.4240000000000022, 24.903000000000002, 0.5190000000000022, 25.647000000000002),
                t.bezierCurveTo(0.7240000000000022, 27.244000000000003, 0.9240000000000023, 28.841, 1.1350000000000022, 30.437),
                t[zb](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094),
                t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089),
                t[zb](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996),
                t[zb](34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997),
                t[zb](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997),
                t.lineTo(37.711, 30.316999999999997),
                t[ao](39.281, 16.498999999999995),
                t.bezierCurveTo(39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994),
                t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417),
                t.closePath(),
                t[eb](),
                t[hh](),
                t[Lh](),
                t.save(),
                t[Vr](),
                t[Vr](),
                t[Vr](),
                t.restore(),
                t.save(),
                t[Lh](),
                t.save(),
                t.restore(),
                t[Vr](),
                t.restore(),
                t[Vr](),
                t[Lh](),
                t.save(),
                t[Lh](),
                t.save(),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t[Lh](),
                t.save();
                var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
                i[Ab](0, ag),
                i[Ab](0.1455, og),
                i[Ab](0.2975, fg),
                i[Ab](0.4527, _g),
                i[Ab](0.6099, cg),
                i.addColorStop(0.7687, ug),
                i[Ab](0.9268, dg),
                i[Ab](0.9754, lg),
                i[Ab](1, vg),
                t[pb] = i,
                t.beginPath(),
                t[fo](33.591, 24.763),
                t[zb](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003),
                t[zb](3.140000000000002, 24.737000000000002, - 0.48799999999999777, 24.838000000000005, 0.3520000000000021, 22.837000000000003),
                t[zb](1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004),
                t[zb](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004),
                t[zb](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004),
                t[zb](16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005),
                t.bezierCurveTo(30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004),
                t.bezierCurveTo(36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005),
                t[zb](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005),
                t[zb](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005),
                t[zb](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005),
                t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007),
                t.bezierCurveTo(37.151, 24.271, 35.264, 24.77, 33.591, 24.763),
                t.closePath(),
                t.fill(),
                t[hh](),
                t[Lh](),
                t[Lh](),
                t[Lh](),
                t[Vr](),
                t[Vr](),
                t.save(),
                t.fillStyle = Qb,
                t.beginPath(),
                t[fo](10.427, 19.292),
                t.lineTo(5.735, 16.452),
                t[ao](12.58, 13.8),
                t[ao](12.045, 15.07),
                t[ao](20.482, 15.072),
                t[ao](19.667, 17.887),
                t.lineTo(11.029, 17.851),
                t[ao](10.427, 19.292),
                t.closePath(),
                t[eb](),
                t[hh](),
                t[Lh](),
                t.restore(),
                t[Vr](),
                t[Vr](),
                t[pb] = Qb,
                t[nb](),
                t[fo](13.041, 13.042),
                t[ao](8.641, 10.73),
                t[ao](14.82, 8.474),
                t.lineTo(14.373, 9.537),
                t.lineTo(22.102, 9.479),
                t.lineTo(21.425, 11.816),
                t.lineTo(13.54, 11.85),
                t.lineTo(13.041, 13.042),
                t[Dh](),
                t[eb](),
                t.stroke(),
                t.restore(),
                t[Lh](),
                t[Vr](),
                t[Vr](),
                t[pb] = Qb,
                t[nb](),
                t.moveTo(29.787, 16.049),
                t.lineTo(29.979, 14.704),
                t[ao](21.51, 14.706),
                t.lineTo(22.214, 12.147),
                t.lineTo(30.486, 12.116),
                t[ao](30.653, 10.926),
                t[ao](36.141, 13.4),
                t.lineTo(29.787, 16.049),
                t.closePath(),
                t.fill(),
                t.stroke(),
                t.restore(),
                t.restore(),
                t[Vr](),
                t.save(),
                t.fillStyle = Qb,
                t[nb](),
                t.moveTo(28.775, 23.14),
                t.lineTo(29.011, 21.49),
                t[ao](19.668, 21.405),
                t[ao](20.523, 18.295),
                t.lineTo(29.613, 18.338),
                t[ao](29.815, 16.898),
                t[ao](35.832, 19.964),
                t[ao](28.775, 23.14),
                t.closePath(),
                t[eb](),
                t.stroke(),
                t.restore(),
                t[Lh](),
                t.restore(),
                t[Lh]()
            }
        },
        cloud: {
            draw: function (t) {
                t[Vr](),
                t[nb](),
                t.moveTo(0, 0),
                t.lineTo(90.75, 0),
                t[ao](90.75, 62.125),
                t.lineTo(0, 62.125),
                t[Dh](),
                t[xb](),
                t[Vv] = Pb,
                t[Xv] = ev,
                t[Kv] = fv,
                t[Ib] = 4,
                t[Vr]();
                var i = t[Sb](44.0054, 6.4116, 44.0054, 51.3674);
                i[Ab](0, 'rgba(159, 160, 160, 0.7)'),
                i[Ab](0.9726, bg),
                t.fillStyle = i,
                t[nb](),
                t[fo](57.07, 20.354),
                t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358),
                t[zb](54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001),
                t[zb](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003),
                t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004),
                t[zb](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49),
                t.bezierCurveTo(29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961),
                t[zb](34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995),
                t[zb](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994),
                t.bezierCurveTo(49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999),
                t[zb](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999),
                t[zb](73.986, 27.436, 66.413, 20.354, 57.07, 20.354),
                t.closePath(),
                t.fill(),
                t[hh](),
                t[Lh](),
                t[Lh]()
            }
        },
        node: {
            width: 60,
            height: 100,
            draw: function (t) {
                t.save(),
                t[lb](0, 0),
                t[nb](),
                t.moveTo(0, 0),
                t.lineTo(40, 0),
                t[ao](40, 40),
                t.lineTo(0, 40),
                t[Dh](),
                t.clip(),
                t[lb](0, 0),
                t[lb](0, 0),
                t[ur](1, 1),
                t[lb](0, 0),
                t.strokeStyle = Pb,
                t[Xv] = ev,
                t[Kv] = fv,
                t[Ib] = 4,
                t.save(),
                t[pb] = gg,
                t[nb](),
                t[fo](13.948, 31.075),
                t.lineTo(25.914, 31.075),
                t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075),
                t.lineTo(25.914, 34.862),
                t[Pv](25.914, 34.862, 25.914, 34.862),
                t.lineTo(13.948, 34.862),
                t.quadraticCurveTo(13.948, 34.862, 13.948, 34.862),
                t.lineTo(13.948, 31.075),
                t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075),
                t[Dh](),
                t[eb](),
                t[hh](),
                t[Lh](),
                t.save(),
                t[pb] = yg,
                t[nb](),
                t[fo](29.679, 35.972),
                t[zb](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244),
                t.lineTo(11.456, 37.244),
                t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972),
                t[ao](10.183, 36.136),
                t[zb](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863),
                t[ao](28.407, 34.863),
                t[zb](29.11, 34.863, 29.678, 35.431, 29.678, 36.136),
                t.lineTo(29.678, 35.972),
                t[Dh](),
                t[eb](),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t[pb] = yg,
                t.beginPath(),
                t.moveTo(0.196, 29.346),
                t.bezierCurveTo(0.196, 30.301, 0.9690000000000001, 31.075, 1.925, 31.075),
                t.lineTo(37.936, 31.075),
                t.bezierCurveTo(38.891, 31.075, 39.665, 30.301, 39.665, 29.346),
                t.lineTo(39.665, 27.174),
                t.lineTo(0.196, 27.174),
                t[ao](0.196, 29.346),
                t[Dh](),
                t[eb](),
                t.stroke(),
                t[Lh](),
                t.save(),
                t.fillStyle = pg,
                t.beginPath(),
                t[fo](37.937, 3.884),
                t[ao](1.926, 3.884),
                t[zb](0.97, 3.884, 0.19699999999999984, 4.657, 0.19699999999999984, 5.614),
                t.lineTo(0.19699999999999984, 27.12),
                t.lineTo(39.666000000000004, 27.12),
                t[ao](39.666000000000004, 5.615),
                t.bezierCurveTo(39.665, 4.657, 38.892, 3.884, 37.937, 3.884),
                t.closePath(),
                t.fill(),
                t[hh](),
                t[Lh](),
                t.save(),
                t.save(),
                t.restore(),
                t[Vr](),
                t[Lh](),
                t.restore(),
                t[Vr]();
                var i = t[Sb](6.9609, 2.9341, 32.9008, 28.874);
                i[Ab](0, xg),
                i[Ab](1, Eg),
                t.fillStyle = i,
                t[nb](),
                t.moveTo(35.788, 6.39),
                t[ao](4.074, 6.39),
                t[zb](3.315, 6.39, 2.702, 7.003, 2.702, 7.763),
                t[ao](2.702, 24.616),
                t[ao](37.159, 24.616),
                t.lineTo(37.159, 7.763),
                t.bezierCurveTo(37.159, 7.003, 36.546, 6.39, 35.788, 6.39),
                t[Dh](),
                t.fill(),
                t[hh](),
                t.restore(),
                t.restore()
            }
        },
        group: {
            draw: function (t) {
                t[Vr](),
                t[lb](0, 0),
                t.beginPath(),
                t.moveTo(0, 0),
                t.lineTo(47.75, 0),
                t[ao](47.75, 40),
                t[ao](0, 40),
                t[Dh](),
                t[xb](),
                t[lb](0, 0),
                t[lb](0, 0),
                t[ur](1, 1),
                t.translate(0, 0),
                t[Vv] = Pb,
                t[Xv] = ev,
                t[Kv] = fv,
                t[Ib] = 4,
                t[Vr](),
                t.save(),
                t.fillStyle = gg,
                t[nb](),
                t[fo](10.447, 26.005),
                t[ao](18.847, 26.005),
                t[Pv](18.847, 26.005, 18.847, 26.005),
                t.lineTo(18.847, 28.663),
                t[Pv](18.847, 28.663, 18.847, 28.663),
                t.lineTo(10.447, 28.663),
                t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663),
                t[ao](10.447, 26.005),
                t.quadraticCurveTo(10.447, 26.005, 10.447, 26.005),
                t[Dh](),
                t[eb](),
                t[hh](),
                t.restore(),
                t[Vr](),
                t.fillStyle = yg,
                t[nb](),
                t[fo](21.491, 29.443),
                t.bezierCurveTo(21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338),
                t.lineTo(8.698, 30.338),
                t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443),
                t.lineTo(7.8020000000000005, 29.557000000000002),
                t[zb](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003),
                t[ao](20.597, 28.662000000000003),
                t[zb](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002),
                t[ao](21.491, 29.443),
                t[Dh](),
                t.fill(),
                t[hh](),
                t.restore(),
                t[Vr](),
                t.fillStyle = yg,
                t.beginPath(),
                t.moveTo(0.789, 24.79),
                t.bezierCurveTo(0.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005),
                t.lineTo(27.289, 26.005),
                t[zb](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79),
                t.lineTo(28.504, 23.267),
                t[ao](0.789, 23.267),
                t[ao](0.789, 24.79),
                t.closePath(),
                t.fill(),
                t[hh](),
                t.restore(),
                t[Vr](),
                t.fillStyle = pg,
                t[nb](),
                t.moveTo(27.289, 6.912),
                t.lineTo(2.006, 6.912),
                t.bezierCurveTo(1.3339999999999996, 6.912, 0.7889999999999997, 7.455, 0.7889999999999997, 8.126),
                t.lineTo(0.7889999999999997, 23.227),
                t[ao](28.503999999999998, 23.227),
                t[ao](28.503999999999998, 8.126),
                t.bezierCurveTo(28.504, 7.455, 27.961, 6.912, 27.289, 6.912),
                t[Dh](),
                t.fill(),
                t.stroke(),
                t.restore(),
                t[Vr](),
                t.save(),
                t[Lh](),
                t.save(),
                t[Lh](),
                t.restore(),
                t.save();
                var i = t[Sb](5.54, 6.2451, 23.7529, 24.458);
                i.addColorStop(0, xg),
                i.addColorStop(1, Eg),
                t[pb] = i,
                t[nb](),
                t.moveTo(25.78, 8.671),
                t[ao](3.514, 8.671),
                t.bezierCurveTo(2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635),
                t.lineTo(2.549, 21.466),
                t[ao](26.743, 21.466),
                t.lineTo(26.743, 9.636),
                t.bezierCurveTo(26.743, 9.102, 26.312, 8.671, 25.78, 8.671),
                t[Dh](),
                t.fill(),
                t[hh](),
                t.restore(),
                t.restore(),
                t[Vr](),
                t[Vr](),
                t[pb] = gg,
                t[nb](),
                t.moveTo(27.053, 33.602),
                t[ao](36.22, 33.602),
                t.quadraticCurveTo(36.22, 33.602, 36.22, 33.602),
                t[ao](36.22, 36.501),
                t.quadraticCurveTo(36.22, 36.501, 36.22, 36.501),
                t[ao](27.053, 36.501),
                t[Pv](27.053, 36.501, 27.053, 36.501),
                t[ao](27.053, 33.602),
                t.quadraticCurveTo(27.053, 33.602, 27.053, 33.602),
                t[Dh](),
                t[eb](),
                t.stroke(),
                t[Lh](),
                t[Vr](),
                t[pb] = yg,
                t.beginPath(),
                t[fo](39.104, 37.352),
                t[zb](39.104, 37.891, 38.67, 38.327, 38.13, 38.327),
                t[ao](25.143, 38.327),
                t[zb](24.602, 38.327, 24.166, 37.891, 24.166, 37.352),
                t[ao](24.166, 37.477999999999994),
                t[zb](24.166, 36.937, 24.602, 36.501, 25.143, 36.501),
                t[ao](38.131, 36.501),
                t.bezierCurveTo(38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994),
                t[ao](39.105, 37.352),
                t[Dh](),
                t.fill(),
                t[hh](),
                t[Lh](),
                t.save(),
                t[pb] = yg,
                t[nb](),
                t[fo](16.514, 32.275),
                t[zb](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601),
                t[ao](45.433, 33.601),
                t.bezierCurveTo(46.166, 33.601, 46.758, 33.005, 46.758, 32.275),
                t[ao](46.758, 30.607999999999997),
                t.lineTo(16.514, 30.607999999999997),
                t.lineTo(16.514, 32.275),
                t[Dh](),
                t.fill(),
                t[hh](),
                t.restore(),
                t[Vr](),
                t.fillStyle = pg,
                t.beginPath(),
                t[fo](45.433, 12.763),
                t[ao](17.839, 12.763),
                t[zb](17.107, 12.763, 16.514, 13.356, 16.514, 14.089),
                t[ao](16.514, 30.57),
                t.lineTo(46.757999999999996, 30.57),
                t[ao](46.757999999999996, 14.088),
                t[zb](46.758, 13.356, 46.166, 12.763, 45.433, 12.763),
                t[Dh](),
                t[eb](),
                t[hh](),
                t.restore(),
                t.save(),
                t[Vr](),
                t.restore(),
                t[Vr](),
                t.restore(),
                t[Lh](),
                t[Vr](),
                i = t.createLinearGradient(21.6973, 12.0352, 41.5743, 31.9122),
                i.addColorStop(0, xg),
                i[Ab](1, Eg),
                t[pb] = i,
                t.beginPath(),
                t[fo](43.785, 14.683),
                t[ao](19.486, 14.683),
                t[zb](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735),
                t[ao](18.433, 28.649),
                t[ao](44.837, 28.649),
                t[ao](44.837, 15.734),
                t[zb](44.838, 15.153, 44.367, 14.683, 43.785, 14.683),
                t[Dh](),
                t[eb](),
                t[hh](),
                t[Lh](),
                t.restore(),
                t.save(),
                t[mg] = 0.5,
                t.beginPath(),
                t[fo](23.709, 36.33),
                t.lineTo(4.232, 36.33),
                t.lineTo(4.232, 27.199),
                t[ao](5.304, 27.199),
                t[ao](5.304, 35.259),
                t[ao](23.709, 35.259),
                t[ao](23.709, 36.33),
                t.closePath(),
                t[eb](),
                t[hh](),
                t[Lh](),
                t[Lh]()
            }
        },
        subnetwork: {
            draw: function (t) {
                t.save(),
                t[lb](0, 0),
                t[nb](),
                t.moveTo(0, 0),
                t.lineTo(60.75, 0),
                t[ao](60.75, 42.125),
                t[ao](0, 42.125),
                t.closePath(),
                t[xb](),
                t[lb](0, 0.26859504132231393),
                t.scale(0.6694214876033058, 0.6694214876033058),
                t[lb](0, 0),
                t[Vv] = Pb,
                t[Xv] = ev,
                t[Kv] = fv,
                t.miterLimit = 4,
                t.save(),
                t.save(),
                t.restore(),
                t[Vr](),
                t.restore(),
                t[Lh](),
                t[Vr]();
                var i = t.createLinearGradient(43.6724, - 2.7627, 43.6724, 59.3806);
                i.addColorStop(0, 'rgba(159, 160, 160, 0.7)'),
                i[Ab](0.9726, bg),
                t[pb] = i,
                t[nb](),
                t[fo](61.732, 16.509),
                t[zb](61.686, 16.509, 61.644, 16.515, 61.599, 16.515),
                t.bezierCurveTo(58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006),
                t[zb](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415),
                t[zb](9.09, 20.566, 2.229, 28.136, 2.229, 37.326),
                t[zb](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006),
                t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001),
                t[zb](31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001),
                t[zb](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001),
                t[zb](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014),
                t.bezierCurveTo(74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001),
                t[zb](85.116, 26.298, 74.646, 16.509, 61.732, 16.509),
                t[Dh](),
                t[eb](),
                t[hh](),
                t.restore(),
                t[Vr](),
                t.save(),
                t[pb] = gg,
                t[nb](),
                t[fo](34.966, 44.287),
                t.lineTo(45.112, 44.287),
                t[Pv](45.112, 44.287, 45.112, 44.287),
                t[ao](45.112, 47.497),
                t.quadraticCurveTo(45.112, 47.497, 45.112, 47.497),
                t[ao](34.966, 47.497),
                t[Pv](34.966, 47.497, 34.966, 47.497),
                t.lineTo(34.966, 44.287),
                t.quadraticCurveTo(34.966, 44.287, 34.966, 44.287),
                t[Dh](),
                t.fill(),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t.fillStyle = wg,
                t[nb](),
                t[fo](48.306, 48.439),
                t.bezierCurveTo(48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52),
                t[ao](32.854, 49.52),
                t[zb](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439),
                t.lineTo(31.771, 48.578),
                t[zb](31.771, 47.981, 32.253, 47.497, 32.854, 47.497),
                t.lineTo(47.226, 47.497),
                t[zb](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578),
                t.lineTo(48.306, 48.439),
                t[Dh](),
                t[eb](),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t[pb] = Tg,
                t.beginPath(),
                t[fo](23.302, 42.82),
                t.bezierCurveTo(23.302, 43.63, 23.96, 44.287, 24.772, 44.287),
                t.lineTo(55.308, 44.287),
                t.bezierCurveTo(56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82),
                t[ao](56.775, 40.98),
                t.lineTo(23.302, 40.98),
                t.lineTo(23.302, 42.82),
                t.closePath(),
                t[eb](),
                t.stroke(),
                t[Lh](),
                t[Vr](),
                t.fillStyle = pg,
                t[nb](),
                t[fo](55.307, 21.229),
                t[ao](24.771, 21.229),
                t[zb](23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695),
                t.lineTo(23.301000000000002, 40.933),
                t.lineTo(56.774, 40.933),
                t.lineTo(56.774, 22.695),
                t[zb](56.774, 21.884, 56.119, 21.229, 55.307, 21.229),
                t.closePath(),
                t.fill(),
                t[hh](),
                t[Lh](),
                t[Vr](),
                t.save(),
                t[Lh](),
                t[Vr](),
                t[Lh](),
                t.restore(),
                t[Vr](),
                i = t[Sb](29.04, 20.4219, 51.0363, 42.4181),
                i[Ab](0, xg),
                i.addColorStop(1, Eg),
                t[pb] = i,
                t[nb](),
                t.moveTo(53.485, 23.353),
                t.lineTo(26.592, 23.353),
                t[zb](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003),
                t[ao](25.427, 38.807),
                t[ao](54.647, 38.807),
                t[ao](54.647, 24.517000000000003),
                t[zb](54.648, 23.873, 54.127, 23.353, 53.485, 23.353),
                t.closePath(),
                t[eb](),
                t[hh](),
                t.restore(),
                t[Lh](),
                t[Lh]()
            }
        }
    },
    OR = function () {
        this[sa] = !1;
        var t = this._do;
        t.clear();
        var i = this._77.x + this.$border / 2,
        e = this._77.y + this.$border / 2,
        n = this._77[Gr] - this[Kh],
        s = this._77[Fr] - this.$border,
        r = Mi[tr](this, {
            x: i,
            y: e
        });
        Ri(t, r.x, r.y, !0),
        r = Mi[tr](this, {
            x: i + n,
            y: e
        }),
        Ri(t, r.x, r.y),
        r = Mi[tr](this, {
            x: i + n,
            y: e + s
        }),
        Ri(t, r.x, r.y),
        r = Mi[tr](this, {
            x: i,
            y: e + s
        }),
        Ri(t, r.x, r.y),
        this.__kdPointer && (r = Mi[tr](this, {
            x: this._pointerX,
            y: this._pointerY
        }), Ri(t, r.x, r.y)),
        this[Kh] && t.grow(this[Kh] / 2)
    },
    PR = 20;
    $i[Wa] = {
        _ez: !1,
        _l7o: null,
        _hd: null,
        _l7n: 0,
        _ij: - 1,
        _ip: null,
        _g9: function () {
            this._jo(),
            this._l7o.clear()
        },
        _9s: function (t, i) {
            this._l7o[Mu](t, i),
            this._ez && !this._iq && this._l7i()
        },
        _6e: function (t, i) {
            this._l7o[Og](t, i),
            this._l7o._9o() || this._jo()
        },
        _ga: function () {
        },
        _l8g: function (t) {
            this._ip || (this._ip = XC._8n(this._width, this._height), this._h1[ia](0, 0, this._width, this._height), this._jh = Date[Rr](), this._hd = [
            ]),
            this._eu(t)
        },
        _eu: function (t) {
            this._hd.push(t),
            this._iq || (this._ep(t), this._ij = this._hd.length - 1, this._l7i())
        },
        _l7m: function () {
            return this._hd ? (this._ez = !0, this._l7n = this._hd.length, this._l7i(), void 0)  : (this._ga(), void 0)
        },
        _e4: function () {
            this[zh] = !1
        },
        _l7l: function () {
            return this._er(0)
        },
        _l8i: function () {
            return this._er(this._ij + 1)
        },
        _er: function (t) {
            if (this._ez)
            t %= this._l7n;
             else if (t >= this._hd[Ps])
            return !1;
            return this._ij != t ? (this._ij = t, this._ep(this._hd[this._ij], this._ij))  : void 0
        },
        _ep: function (t) {
            var i = t._ic;
            return i || (t._ic = i = XC._8n(this._h1.width, this._h1[Fr]), i._g[Ah](t[ah], 0, 0), i._pixels = t._pixels),
            this._ip = i,
            this.$invalidateSize = !0,
            this._l7o[Pa](new fC(this, Pg, Ig)) === !1 ? !1 : void 0
        },
        _eo: function () {
            return Math[Ph](PR, this._hd[this._ij][Sg])
        },
        _8v: function () {
            return this._l7n > 1
        },
        _iq: null,
        _l7i: function () {
            if (!this._l7o.listeners[Ps])
            return this._jo(),
            void 0;
            if (!this._iq) {
                var t = this;
                this._iq = setTimeout(function i() {
                    return t._l8i() !== !1 ? (t._iq = setTimeout(i, t._eo()), void 0)  : (delete t._iq, void 0)
                }, this._eo())
            }
        },
        _jo: function () {
            this._iq && (clearTimeout(this._iq), delete this._iq)
        },
        _9r: function (t, i, e) {
            var n = this._ip._7b;
            if (!n) {
                var s = XC._8n(this._ip[Gr], this._ip.height);
                s._g[vb](this._ip, 0, 0),
                this._ip._7b = n = new yR(s, this._h1)
            }
            n._jp(t, i, e)
        }
    },
    qL.nm($i, Ei);
    var IR = function (t) {
        return t[Ag](function (t, i) {
            return 2 * t + i
        }, 0)
    },
    SR = function (t) {
        for (var i = [
        ], e = 7; e >= 0; e--)
        i[or](!!(t & 1 << e));
        return i
    },
    AR = function (t) {
        this.data = t,
        this[Mg] = this[ah][Ps],
        this.pos = 0,
        this[kg] = function () {
            if (this.pos >= this[ah][Ps])
            throw new Error('Attempted to read past end of stream.');
            return 255 & t[Aa](this[Lg]++)
        },
        this[Cg] = function (t) {
            for (var i = [
            ], e = 0; t > e; e++)
            i[or](this[kg]());
            return i
        },
        this[Rg] = function (t) {
            for (var i = '', e = 0; t > e; e++)
            i += String[La](this.readByte());
            return i
        },
        this[Ng] = function () {
            var t = this.readBytes(2);
            return (t[1] << 8) + t[0]
        }
    },
    MR = function (t, i) {
        for (var e, n, s = 0, r = function (t) {
            for (var e = 0, n = 0; t > n; n++)
            i[Aa](s >> 3) & 1 << (7 & s) && (e |= 1 << n),
            s++;
            return e
        }, h = [
        ], a = 1 << t, o = a + 1, f = t + 1, _ = [
        ], c = function () {
            _ = [
            ],
            f = t + 1;
            for (var i = 0; a > i; i++)
            _[i] = [
                i
            ];
            _[a] = [
            ],
            _[o] = null
        }; ; )
        if (n = e, e = r(f), e !== a) {
            if (e === o)
            break;
            if (e < _[Ps])
            n !== a && _.push(_[n][ch](_[e][0]));
             else {
                if (e !== _[Ps])
                throw new Error(Dg);
                _[or](_[n][ch](_[n][0]))
            }
            h[or][Ua](h, _[e]),
            _[Ps] === 1 << f && 12 > f && f++
        } else
        c();
        return h
    },
    kR = function (t, i) {
        i || (i = {
        });
        var e = function (i) {
            for (var e = [
            ], n = 0; i > n; n++)
            e.push(t[Cg](3));
            return e
        },
        n = function () {
            var i,
            e;
            e = '';
            do
            i = t.readByte(),
            e += t[Rg](i);
            while (0 !== i);
            return e
        },
        s = function () {
            var n = {
            };
            if (n[Bg] = t.read(3), n[jg] = t[Rg](3), $g !== n[Bg])
            throw new Error(Gg);
            n.width = t.readUnsigned(),
            n.height = t.readUnsigned();
            var s = SR(t[kg]());
            n[Fg] = s.shift(),
            n[qg] = IR(s[oc](0, 3)),
            n.sorted = s.shift(),
            n.gctSize = IR(s[oc](0, 3)),
            n.bgColor = t[kg](),
            n.pixelAspectRatio = t.readByte(),
            n.gctFlag && (n[zg] = e(1 << n[Yg] + 1)),
            i.hdr && i[Hg](n)
        },
        r = function (e) {
            var s = function (e) {
                t.readByte();
                var n = SR(t.readByte());
                e[Ug] = n.splice(0, 3),
                e[Wg] = IR(n.splice(0, 3)),
                e[Vg] = n.shift(),
                e.transparencyGiven = n[Xg](),
                e[ua] = t[Ng](),
                e[Kg] = t[kg](),
                e.terminator = t[kg](),
                i.gce && i.gce(e)
            },
            r = function (t) {
                t.comment = n(),
                i.com && i[Zg](t)
            },
            h = function (e) {
                t[kg](),
                e[Jg] = t[Cg](12),
                e[Qg] = n(),
                i.pte && i.pte(e)
            },
            a = function (e) {
                var s = function (e) {
                    t[kg](),
                    e[ty] = t[kg](),
                    e.iterations = t[Ng](),
                    e.terminator = t[kg](),
                    i[iy] && i.app[ey] && i[iy][ey](e)
                },
                r = function (t) {
                    t[ny] = n(),
                    i[iy] && i[iy][t[sy]] && i.app[t[sy]](t)
                };
                switch (t.readByte(), e[sy] = t.read(8), e.authCode = t.read(3), e.identifier) {
                case 'NETSCAPE':
                    s(e);
                    break;
                default:
                    r(e)
                }
            },
            o = function (t) {
                t[ah] = n(),
                i[ty] && i[ty](t)
            };
            switch (e.label = t.readByte(), e[ry]) {
            case 249:
                e.extType = hy,
                s(e);
                break;
            case 254:
                e[ay] = Zg,
                r(e);
                break;
            case 1:
                e[ay] = oy,
                h(e);
                break;
            case 255:
                e.extType = iy,
                a(e);
                break;
            default:
                e[ay] = ty,
                o(e)
            }
        },
        h = function (s) {
            var r = function (t, i) {
                for (var e = new Array(t.length), n = t[Ps] / i, s = function (n, s) {
                    var r = t.slice(s * i, (s + 1) * i);
                    e.splice[Ua](e, [
                        n * i,
                        i
                    ][ch](r))
                }, r = [
                    0,
                    4,
                    2,
                    1
                ], h = [
                    8,
                    8,
                    4,
                    2
                ], a = 0, o = 0; 4 > o; o++)
                for (var f = r[o]; n > f; f += h[o])
                s(f, a),
                a++;
                return e
            };
            s[va] = t[Ng](),
            s[ba] = t.readUnsigned(),
            s.width = t.readUnsigned(),
            s.height = t.readUnsigned();
            var h = SR(t.readByte());
            s[la] = h[Xg](),
            s.interlaced = h[Xg](),
            s.sorted = h.shift(),
            s[Ug] = h.splice(0, 2),
            s[fy] = IR(h[oc](0, 3)),
            s.lctFlag && (s[_y] = e(1 << s[fy] + 1)),
            s[cy] = t[kg]();
            var a = n();
            s.pixels = MR(s.lzwMinCodeSize, a),
            s[uy] && (s.pixels = r(s.pixels, s[Gr])),
            i.img && i[kf](s)
        },
        a = function () {
            var e = {
            };
            switch (e[dy] = t.readByte(), String[La](e[dy])) {
            case '!':
                e[Ws] = ly,
                r(e);
                break;
            case ',':
                e.type = kf,
                h(e);
                break;
            case ';':
                e[Ws] = vy,
                i[vy] && i.eof(e);
                break;
            default:
                throw new Error(by + e[dy].toString(16))
            }
            vy !== e.type && setTimeout(a, 0)
        },
        o = function () {
            s(),
            setTimeout(a, 0)
        };
        o()
    },
    LR = '';
    i.addEventListener && i[yd](gy, function (t) {
        if (t[yy] && t[py] && t.altKey && 73 == t.keyCode) {
            var i = UC.name + xy + UC[Ey] + my + UC[wy] + Da + UC[Ty] + Da + UC.copyright + LR;
            UC.alert(i)
        }
    }, !1);
    var CR = Oy;
    LR = Py + decodeURIComponent('%20website%3A%20demo.qunee.com');
    var RR,
    NR,
    DR,
    BR = t,
    jR = Iy,
    $R = Sy,
    GR = Ay,
    FR = My,
    qR = ky,
    zR = Ly,
    YR = Cy,
    HR = Ry,
    UR = Ny,
    WR = Dy,
    VR = By,
    XR = jy,
    KR = $y,
    ZR = Gy,
    JR = Fy,
    QR = qy,
    tN = zy,
    iN = Yy,
    eN = Hy,
    nN = Uy,
    sN = Wy,
    rN = BR[FR + Vy];
    rN && (NR = BR[ZR + Xy][qR + Ky + Cf], rN.call(BR, qi, QR), rN.call(BR, zi, eN), rN[tr](BR, function () {
        aN && aN == CR && (gN = !1)
    }, tN));
    var hN,
    aN,
    oN,
    fN = 20,
    _N = function (t, i) {
        i || (i = Zy + $R + Jy + Qy + tp + ip),
        DR[tr](t, i, 10 * fN, 1 * fN)
    },
    cN = !0,
    uN = !0,
    dN = !0,
    lN = !0,
    vN = !0,
    bN = !0,
    gN = !0,
    yN = NL ? 200 : 1024,
    pN = function (t, i) {
        return Fi ? Fi(t, i) || '' : void 0
    };
    if (i.createElement) {
        var xN = i[zs](ep);
        xN[Gs][np] = Gf,
        xN[Nh] = function (t) {
            var i = t[sp][rp],
            e = NR;
            if ('' === e || hp == e || ap == e)
            return this.parentNode[op][ed](this.parentNode),
            void 0;
            var n = i.String[La];
            i[FR + Vy](function () {
                Gi(n) != hN && (kN.prototype._ha = null)
            }, eN),
            this.parentNode[op][ed](this[op])
        };
        var EN = i.createElement(Sf);
        EN.style.width = Hf,
        EN[Gs][Fr] = Hf,
        EN[Gs][fp] = jf,
        EN.appendChild(xN),
        i.documentElement.appendChild(EN)
    }
    if (i[JR + _p]) {
        var mN = i[JR + _p](UR + cp);
        mN[Gs][np] = Gf,
        mN[Nh] = function (t) {
            var i = up,
            e = t.target[i + dp + lp];
            RR = e[vp][Rr]();
            var n = e[WR + VR + bp + XR + gp][KR + Ws];
            DR = n[jR + yp + ly];
            var s = e[FR + Vy];
            s[tr](BR, Wi, eN),
            s.call(BR, Vi, nN),
            s.call(BR, Ki, sN),
            s[tr](BR, Zi, tN),
            s[tr](BR, Yi, iN),
            s[tr](BR, Ui, sN),
            s.call(BR, Xi, eN),
            s[tr](BR, Hi, eN),
            this.parentNode[op][ed](this[op])
        };
        var EN = i.createElement(Sf);
        EN.style.width = Hf,
        EN[Gs].height = Hf,
        EN.style.overflow = jf,
        EN.appendChild(mN),
        i[P_].appendChild(EN)
    }
    var wN = function (t, i, e, n) {
        this[I_] = t,
        this[A_] = i,
        this[mu] = n,
        this[Ao] = e
    };
    wN.prototype = {
        propertyType: WC.PROPERTY_TYPE_STYLE
    },
    qL.nm(wN, _C);
    var TN = function (t) {
        this.id = ++FL,
        this._l6s = {
        },
        this._h2 = {
        },
        t && (this[pp] = t)
    };
    TN[Wa] = {
        _h2: null,
        getStyle: function (t) {
            return this._h2[t]
        },
        setStyle: function (t, i) {
            var e = this._h2[t];
            return e === i || e && i && e.equals && e.equals(i) ? !1 : this._9h(t, i, new wN(this, t, i, e), this._h2)
        },
        putStyles: function (t, i) {
            for (var e in t) {
                var n = t[e];
                i ? this._h2[e] = n : this[xp](e, n)
            }
        },
        _$n: !0,
        invalidateVisibility: function (t) {
            this._$n = !0,
            t || (this instanceof PN && this[Ep]() && this[ro](function (t) {
                t._$n = !0
            }), this instanceof AN && this.hasChildren() && this.forEachChild(function (t) {
                t.invalidateVisibility()
            }))
        },
        invalidate: function () {
            this[Pa](new fC(this, mp, wp))
        },
        _l6o: null,
        addUI: function (t, i) {
            if (this._l6o || (this._l6o = new HL), this._l6o[Va](t.id))
            return !1;
            var e = {
                id: t.id,
                ui: t,
                bindingProperties: i
            };
            this._l6o[th](e);
            var n = new fC(this, mp, th, e);
            return this[Pa](n)
        },
        removeUI: function (t) {
            if (!this._l6o)
            return !1;
            var i = this._l6o.getById(t.id);
            return i ? (this._l6o[Z_](i), this.onEvent(new fC(this, mp, Z_, i)), void 0)  : !1
        },
        toString: function () {
            return this[pp] || this.id
        },
        type: Tp
    },
    qL.nm(TN, xC),
    qL.m7(TN[Wa], [
        Op,
        Cf,
        Pp
    ]),
    qL.ls(TN[Wa], {
        bindingUIs: {
            get: function () {
                return this._l6o
            }
        },
        styles: {
            get: function () {
                return this._h2
            },
            set: function (t) {
                if (this._h2 != t) {
                    for (var i in this._h2)
                    i in t || (t[i] = e);
                    this.putStyles(t),
                    this._h2 = t
                }
            }
        }
    });
    var ON = function (t, i, e) {
        this.id = ++FL,
        this._l6s = {
        },
        this._h2 = {
        },
        e && (this[pp] = e),
        this[Ip] = t,
        this[Sp] = i,
        this[Ap]()
    };
    ON[Wa] = {
        $uiClass: Xe,
        _h4: null,
        _g3: null,
        _h6: null,
        _g5: null,
        _d6: !1,
        type: Mp,
        otherNode: function (t) {
            return t == this[R_] ? this.to : t == this.to ? this.from : void 0
        },
        connect: function () {
            if (this._d6)
            return !1;
            if (!this.$from || !this.$to)
            return !1;
            if (this._d6 = !0, this.$from == this.$to)
            return this[Ip]._gh(this),
            void 0;
            de(this[Sp], this),
            ce(this[Ip], this),
            Qi(this[Ip], this, this.$to);
            var t = this.fromAgent,
            i = this[Ka];
            if (t != i) {
                var e;
                this[Ip]._l8x && (ie(t, this, i), e = !0),
                this[Sp]._l8x && (ne(i, this, t), e = !0),
                e && Qi(t, this, i)
            }
        },
        disconnect: function () {
            if (!this._d6)
            return !1;
            if (this._d6 = !1, this.$from == this[Sp])
            return this[Ip]._l6l(this),
            void 0;
            ue(this[Ip], this),
            le(this.$to, this),
            te(this[Ip], this, this.$to);
            var t = this[Ja],
            i = this[Ka];
            if (t != i) {
                var e;
                this[Ip]._l8x && (ee(t, this, i), e = !0),
                this[Sp]._l8x && (se(i, this, t), e = !0),
                e && te(t, this, i)
            }
        },
        isConnected: function () {
            return this._d6
        },
        isInvalid: function () {
            return !this[Ip] || !this.$to
        },
        isLooped: function () {
            return this.$from == this.$to
        },
        getEdgeBundle: function (t) {
            return t ? this._2q()  : this[to]() ? this[Ip]._3r : this[Ip].getEdgeBundle(this[Sp])
        },
        _2q: function () {
            var t = this.fromAgent,
            i = this.toAgent;
            return t == i ? this[Ip]._l8x || this.$to._l8x ? null : this[Ip]._3r : this.fromAgent[Za](this[Ka])
        },
        _6h: function () {
            this._jk._5r = !0
        },
        _8p: null,
        hasPathSegments: function () {
            return this._8p && !this._8p.isEmpty()
        },
        isBundleEnabled: function () {
            return this[kp] && !this.hasPathSegments()
        },
        firePathChange: function (t) {
            this[Pa](new _C(this, Lp, t))
        },
        addPathSegement: function (t, i, e) {
            var n = new lR(i || fR, t);
            this._8p || (this._8p = new HL),
            this._8p[th](n, e),
            this[Cp](n)
        },
        removePathSegementByIndex: function (t) {
            if (!this._8p)
            return !1;
            var i = this._8p[rd](t);
            i && (this._8p[Rp](i), this.firePathChange(i))
        },
        removePathSegement: function (t) {
            return this._8p ? (this._8p[Z_](t), this[Cp](t), void 0)  : !1
        },
        movePathSegment: function (t, i, e) {
            if (!this._8p)
            return !1;
            if (t = t || 0, i = i || 0, UC.isNumber(e)) {
                var n = this._8p[rd](e);
                return n ? (n[Yd](t, i), this[Cp](), void 0)  : !1
            }
            qL.nj(function (e) {
                e[Yd](t, i)
            }),
            this.firePathChange()
        }
    },
    qL.nm(ON, TN),
    qL.ls(ON[Wa], {
        pathSegments: {
            get: function () {
                return this._8p
            },
            set: function (t) {
                this._8p = t,
                this[Cp]()
            }
        },
        from: {
            get: function () {
                return this[Ip]
            },
            set: function (t) {
                if (this[Ip] != t) {
                    var i = new _C(this, R_, t, this[Ip]);
                    this.beforeEvent(i) !== !1 && (this[Np](), this.$from = t, this[Ap](), this[Pa](i))
                }
            }
        },
        to: {
            get: function () {
                return this.$to
            },
            set: function (t) {
                if (this[Sp] != t) {
                    var i = new _C(this, Dp, t, this[Sp]);
                    this[gc](i) !== !1 && (this[Np](), this.$to = t, this[Ap](), this[Pa](i))
                }
            }
        },
        fromAgent: {
            get: function () {
                return this[Ip] ? this.$from._l8x || this.$from : null
            }
        },
        toAgent: {
            get: function () {
                return this[Sp] ? this[Sp]._l8x || this[Sp] : null
            }
        }
    }),
    qL.m7(ON.prototype, [
        mf,
        {
            name: kp,
            value: !0
        },
        yf
    ]);
    var PN = function (t, i, e) {
        this.id = ++FL,
        this._l6s = {
        },
        this._h2 = {
        },
        t && (this[pp] = t),
        this.$image = TR[Bp],
        this[jp] = tC[_u],
        this.$location = {
            x: i || 0,
            y: e || 0
        },
        this._linkedNodes = {
        }
    };
    PN[Wa] = {
        $uiClass: Ke,
        _l8x: null,
        forEachEdge: function (t, i, e) {
            return !e && this._iv && this._iv.forEach(t, i) === !1 ? !1 : be(this, t, i)
        },
        forEachOutEdge: function (t, i) {
            return ge(this, t, i)
        },
        forEachInEdge: function (t, i) {
            return ye(this, t, i)
        },
        getEdges: function () {
            var t = [
            ];
            return this[ro](function (i) {
                t[or](i)
            }),
            t
        },
        _ft: null,
        _em: null,
        _hu: null,
        _gj: null,
        _9g: 0,
        _8g: 0,
        hasInEdge: function () {
            return null != this._ft
        },
        hasOutEdge: function () {
            return null != this._em
        },
        hasEdge: function () {
            return null != this._ft || null != this._em || this.hasLoops()
        },
        hasEdgeWith: function (t) {
            var i = this[Za](t);
            return i && i.edges[Ps] > 0
        },
        _iv: null,
        _3r: null,
        hasLoops: function () {
            return this._iv && this._iv.length > 0
        },
        _gh: function (t) {
            return this._iv || (this._iv = new HL, this._3r = new qD(this, this, this._iv)),
            this._3r._g1(t)
        },
        _l6l: function (t) {
            return this._3r ? this._3r._l86(t)  : void 0
        },
        getEdgeBundle: function (t) {
            return t == this ? this._3r : this._linkedNodes[t.id] || t._linkedNodes[this.id]
        },
        _6b: function () {
            return this._8d && this._8d.length
        },
        _57: function () {
            return this._70 && this._70.length
        },
        _8s: function () {
            return this._6b() || this._57()
        },
        _70: null,
        _8d: null,
        onParentChanged: function () {
            var t = this._l8x,
            i = Ji(this);
            if (t != i) {
                var e = ve(this);
                this._80(i),
                e[ga](function (t) {
                    var i = t[Ja],
                    e = t.toAgent,
                    t = t[Po],
                    n = t[Ip]._l8x,
                    s = t[Sp]._l8x;
                    i != e && (i && ee(i, t, e || t[Sp]), e && se(e, t, i || t.$from)),
                    n != s && (n && ie(n, t, s || t.$to), s && ne(s, t, n || t[Ip]), Qi(n || t[Ip], t, s || t[Sp]))
                }, this)
            }
        },
        _6z: null,
        _$x: function () {
            var t = this._l8x;
            if (t || this._fi || (t = this), this._6z == t)
            return !1;
            if (this._6z = t, this._dq && this._dq._i0[Ps])
            for (var i, e = this._dq._i0, n = 0, s = e.length; s > n; n++)
            i = e[n],
            i instanceof PN && i._80(t)
        },
        setLocation: function (t, i) {
            if (this[$p] && this.$location.x == t && this[$p].y == i)
            return !1;
            var e = new _C(this, Gp, this[$p], {
                x: t,
                y: i
            });
            return this.beforeEvent(e) === !1 ? !1 : (this[$p] ? (this[$p].x = t, this[$p].y = i)  : this[$p] = new VL(t, i), this[Pa](e), !0)
        },
        _l8w: null,
        addFollower: function (t) {
            return null == t ? !1 : t[Fp] = this
        },
        removeFollower: function (t) {
            return this._l8w && this._l8w[Ef](t) ? t[Fp] = null : !1
        },
        hasFollowers: function () {
            return this._l8w && !this._l8w.isEmpty()
        },
        toFollowers: function () {
            return this[io]() ? this._l8w.toDatas()  : null
        },
        clearFollowers: function () {
            this.hasFollowers() && (this.toFollowers(), qL.nj(this.toFollowers(), function (t) {
                t.host = null
            }))
        },
        getFollowerIndex: function (t) {
            return this._l8w && this._l8w[Ef](t) ? this._l8w[kr](t)  : - 1
        },
        setFollowerIndex: function (t, i) {
            return this._l8w && this._l8w.contains(t) ? (this._l8w.setIndex(t, i), void 0)  : - 1
        },
        getFollowerCount: function () {
            return null == !this._l8w ? 0 : this._l8w[Ps]
        },
        _81: function () {
            return this._l8w ? this._l8w : (this._l8w = new HL, this._l8w)
        },
        isFollow: function (t) {
            if (!t || !this._host)
            return !1;
            for (var i = this._host; i; ) {
                if (i == t)
                return !0;
                i = i._host
            }
            return !1
        },
        _80: function (t) {
            return t == this._l8x ? !1 : (this._l8x = t, this[qp](), this._$x(), void 0)
        },
        type: zp
    },
    qL.nm(PN, TN),
    qL.ls(PN[Wa], {
        loops: {
            get: function () {
                return this._iv
            }
        },
        edgeCount: {
            get: function () {
                return this._9g + this._8g
            }
        },
        agentNode: {
            get: function () {
                return this._l8x || this
            }
        },
        host: {
            set: function (t) {
                if (this == t || t == this._host)
                return !1;
                var i = new _C(this, Fp, this._host, t);
                if (!1 === this.beforeEvent(i))
                return !1;
                var e = null,
                n = null,
                s = this._host;
                if (null != t && (e = new _C(t, Yp, null, this), !1 === t[gc](e)))
                return !1;
                if (null != s && (n = new _C(s, Hp, null, this), !1 === s[gc](n)))
                return !1;
                if (this._host = t, null != t) {
                    var r = t._81();
                    r.add(this)
                }
                if (null != s) {
                    var r = s._81();
                    r[Z_](this)
                }
                return this[Pa](i),
                null != t && t[Pa](e),
                null != s && s[Pa](n),
                !0
            },
            get: function () {
                return this._host
            }
        }
    }),
    qL.m7(PN.prototype, [
        Gp,
        Up,
        bb,
        uh,
        Wp
    ]),
    qL.ls(PN.prototype, {
        x: {
            get: function () {
                return this.location.x
            },
            set: function (t) {
                t != this[Gp].x && (this[Gp] = new VL(t, this.location.y))
            }
        },
        y: {
            get: function () {
                return this.location.y
            },
            set: function (t) {
                t != this[Gp].y && (this[Gp] = new VL(this[Gp].x, t))
            }
        }
    });
    var IN = function (t, i) {
        t instanceof bR && (i = t, t = e),
        qL.lr(this, IN, [
            t
        ]),
        this.$path = i || new bR,
        this[bb] = this.$path,
        this[Wp] = null,
        this.uiClass = Un,
        zL[Vp] || (zL[Vp] = {
        }, zL[Vp][CN.ARROW_TO] = !1),
        this.putStyles(zL[Vp])
    };
    IN.prototype = {
        $uiClass: Un,
        type: Xp,
        moveTo: function (t, i) {
            this.path[fo](t, i),
            this[Cp]()
        },
        lineTo: function (t, i) {
            this[Kp][ao](t, i),
            this.firePathChange()
        },
        quadTo: function (t, i, e, n) {
            this[Kp][oo](t, i, e, n),
            this[Cp]()
        },
        curveTo: function (t, i, e, n, s, r) {
            this[Kp][_o](t, i, e, n, s, r),
            this[Cp]()
        },
        arcTo: function (t, i, e, n, s) {
            this.path[Ov](t, i, e, n, s),
            this[Cp]()
        },
        closePath: function () {
            this.path[Dh](),
            this[Cp]()
        },
        clear: function () {
            this[Kp][lr](),
            this.firePathChange()
        },
        firePathChange: function () {
            this.path._5r = !0,
            this[Pa](new _C(this, Lp))
        }
    },
    qL.nm(IN, PN),
    qL.m7(IN.prototype, [
        Kp
    ]),
    qL.ls(IN[Wa], {
        pathSegments: {
            get: function () {
                return this[Kp]._e8
            }
        },
        length: {
            get: function () {
                return this.path[Ps]
            }
        }
    }),
    UC[Zp] = IN;
    var SN = {
        _he: {
        },
        register: function (t, i) {
            SN._he[t] = i
        },
        getShape: function (t, i, n, s, r, h) {
            s === e && (s = i, r = n, i = 0, n = 0),
            s || (s = 50),
            r || (r = 50);
            var a = SN._he[t];
            return a ? a[Jp] instanceof Function ? a[Jp](i, n, s, r, h)  : a : void 0
        },
        getRect: function (t, i, e, n, s, r, h) {
            return pe(h || new bR, t, i, e, n, s, r)
        },
        getAllShapes: function (t, i, e, n, s) {
            var r = {
            };
            for (var h in SN._he) {
                var a = SN[uf](h, t, i, e, n, s);
                a && (r[h] = a)
            }
            return r
        },
        createRegularShape: function (t, i, e, n, s) {
            return Pe(t, i, e, n, s)
        }
    };
    $e(),
    Ge.prototype = {
        type: Qp
    },
    qL.nm(Ge, IN),
    UC[tx] = Ge,
    Fe[Wa] = {
        _ed: function (t) {
            var i,
            e = t._hf;
            i = e ? e._dq : this.$roots;
            var n = i[kr](t);
            if (0 > n)
            throw new Error(sd + t + '\' not exist in the box');
            for (; n >= 0; ) {
                if (0 == n)
                return e instanceof PN ? e : null;
                n -= 1;
                var s = i[rd](n);
                if (s = qL.mz(s))
                return s
            }
            return null
        },
        forEachNode: function (t, i) {
            this.forEach(function (e) {
                return e instanceof PN && t[tr](i, e) === !1 ? !1 : void 0
            })
        }
    },
    qL.nm(Fe, mC),
    qL.ls(Fe[Wa], {
        randomNode: {
            get: function () {
                return this._inModel[ix]
            }
        }
    }),
    zL.GROUP_TYPE = WC[ex],
    zL[nx] = 5,
    zL[sx] = !0,
    zL[rx] = {
        width: 60,
        height: 60
    };
    var AN = function (t, i, n) {
        qL.lr(this, AN, arguments),
        (i === e || n === e) && (this.$location.invalidateFlag = !0),
        this._fi = zL[sx],
        this[hx] = zL.GROUP_TYPE,
        this[Uh] = zL[nx],
        this.$image = TR[ax],
        this[ox] = zL[rx]
    };
    AN[Wa] = {
        type: fx,
        $uiClass: Fn,
        _83: function () {
            return !this._fi && !this._l8x
        },
        forEachOutEdge: function (t, i, e) {
            return ge(this, t, i) === !1 ? !1 : !e && this._83() ? this._70 ? this._70.forEach(t, i)  : void 0 : void 0
        },
        forEachInEdge: function (t, i, e) {
            return ye(this, t, i) === !1 ? !1 : !e && this._83() ? this._8d ? this._8d[ga](t, i)  : void 0 : void 0
        },
        forEachEdge: function (t, i, e) {
            return qL.nc(this, AN, ro, arguments) === !1 ? !1 : e || e || !this._83() ? void 0 : this._8d && this._8d.forEach(t, i) === !1 ? !1 : this._70 ? this._70.forEach(t, i)  : void 0
        },
        hasInEdge: function (t) {
            return t ? null != this._ft : null != this._ft || this._6b()
        },
        hasOutEdge: function (t) {
            return t ? null != this._em : null != this._em || this._57()
        },
        hasEdge: function (t) {
            return t ? null != this._ft || null != this._em : null != this._ft || null != this._em || this._8s()
        }
    },
    qL.nm(AN, PN),
    qL.ls(AN[Wa], {
        expanded: {
            get: function () {
                return this._fi
            },
            set: function (t) {
                if (this._fi != t) {
                    var i = new _C(this, _x, t, this._fi);
                    this[gc](i) !== !1 && (this._fi = t, this._$x(), this[Pa](i), this._l8x || qe[tr](this))
                }
            }
        }
    }),
    qL.m7(AN[Wa], [
        cx,
        ux,
        dx,
        lx
    ]),
    UC.Group = AN,
    ze[Wa].type = vx,
    qL.nm(ze, PN),
    UC[bx] = ze;
    var MN = !LL,
    kN = function (t) {
        this._h1 = new JL,
        this._77 = new JL,
        this._do = new JL,
        this.id = ++FL,
        this._measureProperties = {
        },
        this._measureProperties[Wp] = !0,
        this._measureProperties[kv] = !0,
        this._measureProperties._rotate = !0,
        this._measureProperties[dx] = !0,
        this._measureProperties[vl] = !0,
        this._measureProperties.backgroundColor = !0,
        this._measureProperties.backgroundGradient = !0,
        this._measureProperties[ea] = !0,
        t && (this[ah] = t)
    };
    kN[Wa] = {
        invalidate: function () {
            this[gx]()
        },
        _1k: !0,
        _h1: null,
        _77: null,
        _do: null,
        _91: !1,
        _hk: 1,
        _hj: 1,
        _gb: !0,
        _79: 0,
        _5t: 0,
        _hf: null,
        _93: null,
        borderColor: yx,
        borderLineDash: null,
        borderLineDashOffset: null,
        syncSelection: !0,
        syncSelectionStyles: !0,
        _1c: function () {
            this[px] = qL.mj(this[Wp], this._79, this._5t)
        },
        setMeasuredBounds: function (t, i, e, n) {
            return t instanceof Object && (e = t.x, n = t.y, i = t[Fr], t = t[Gr]),
            this._h1.width == t && this._h1[Fr] == i && this._h1.x == e && this._h1.y == n ? !1 : (this._h1.set(e || 0, n || 0, t || 0, i || 0), void 0)
        },
        initialize: function () {
        },
        measure: function () {
        },
        draw: function () {
        },
        _6x: function (t, i, e) {
            e[Zv] == WC[cv] ? (t[Hv] = e.selectionColor, t.shadowBlur = e.selectionShadowBlur * i)  : this._23(t, i, e)
        },
        _23: function (t, i, e) {
            var n = e.selectionBorder || 0;
            e[xx] && (t[pb] = e[xx], t[Ex](this._77.x - n / 2, this._77.y - n / 2, this._77[Gr] + n, this._77[Fr] + n)),
            t[Vv] = e[Uv],
            t[oh] = n,
            t[yb](this._77.x - n / 2, this._77.y - n / 2, this._77[Gr] + n, this._77[Fr] + n)
        },
        _ha: function (t, i, e, n) {
            if (!this._gb)
            return !1;
            if (this[mx] || (e = this.selected), (e && !this[wx] || !n) && (n = this), t.save(), t[lb](this.$x, this.$y), this.$rotatable && this[qh] && t.rotate(this[qh]), (this[Tx] || this.offsetY) && t[lb](this.offsetX, this[Ox]), this[jh] && t.rotate(this.$rotate), this.$layoutByAnchorPoint && this._93 && t[lb]( - this._93.x, - this._93.y), e && n[Zv] == WC[Px] && (this._23(t, i, n), e = !1), this._$p() && this._k5Shape && !this._k5Shape._iu) {
                this._k5Shape.validate();
                var s = {
                    lineWidth: this.$border,
                    strokeStyle: this[Ix],
                    lineDash: this[Sx],
                    lineDashOffset: this.borderLineDashOffset,
                    fillColor: this[Ax],
                    fillGradient: this._l7ackgroundGradient,
                    lineCap: ev,
                    lineJoin: sh
                };
                this._k5Shape[kh](t, i, s, e, n),
                e = !1,
                t[Mx] = 0
            }
            t.beginPath(),
            this[kh](t, i, e, n),
            t[Lh]()
        },
        invalidateData: function () {
            this[kx] = !0,
            this._1k = !0
        },
        invalidateSize: function () {
            this[zh] = !0,
            this._1k = !0
        },
        invalidateRender: function () {
            this._1k = !0
        },
        _4q: function () {
        },
        _$p: function () {
            return this[Lx] || this.$backgroundGradient || this.$border
        },
        _40: function () {
            return this[Lx] || this[Cx]
        },
        doValidate: function () {
            return this.$invalidateData && (this.$invalidateData = !1, this.measure() !== !1 && (this.$invalidateSize = !0)),
            this.$invalidateSize && this.validateSize && this[Rx](),
            Li.call(this) ? (this[sa] = !0, this.onBoundsChanged && this.onBoundsChanged(), !0)  : this[Nx] ? (this[Nx] = !1, !0)  : void 0
        },
        validate: function () {
            var t = this._gb;
            return this[Dx] && (this[Dx] = !1, this._gb = this[Bx], !this._gb || (this[na] || this[jx]) && this._4q() !== !1 || (this._gb = !1), !this._gb) ? t : this._gb ? (this._1k = !1, this._91 || (this._91 = !0, this.initialize()), this[$x]())  : t
        },
        _fx: function (t, i, e, n) {
            if (t -= this.$x, i -= this.$y, !this._do[Wc](t, i, e))
            return !1;
            var s = ki[tr](this, {
                x: t,
                y: i
            });
            return t = s.x,
            i = s.y,
            !n && this._$p() && this._k5Shape && this._k5Shape._fx(t, i, e, !1, this[vl], this[Ax] || this[Vh]) ? !0 : this._l8j ? this._l8j(t, i, e)  : this._h1.intersectsPoint(t, i, e)
        },
        onDataChanged: function () {
            this.$invalidateData = !0,
            this._1k = !0,
            this.$invalidateVisibility = !0
        },
        getBounds: function () {
            var t = this._do[wc]();
            return t[Gx](this.x, this.y),
            this[Xa] && (this[Xa][uh] && L(t, this.parent[uh], t), t[Gx](this[Xa].x || 0, this.parent.y || 0)),
            t
        }
    },
    qL.ls(kN[Wa], {
        data: {
            get: function () {
                return this[na]
            },
            set: function (t) {
                if (this.$data != t) {
                    var i = this[na];
                    this[na] = t,
                    this[Fx](t, i)
                }
            }
        },
        parent: {
            get: function () {
                return this._hf
            }
        }
    }),
    He(kN[Wa], {
        visible: {
            value: !0,
            validateFlags: [
                qx
            ]
        },
        showEmpty: {
            validateFlags: [
                qx
            ]
        },
        anchorPosition: {
            value: tC[_u],
            validateFlags: [
                zx
            ]
        },
        position: {
            value: tC[_u],
            validateFlags: [
                Yx
            ]
        },
        offsetX: {
            value: 0,
            validateFlags: [
                Yx
            ]
        },
        offsetY: {
            value: 0,
            validateFlags: [
                Yx
            ]
        },
        layoutByAnchorPoint: {
            value: !0,
            validateFlags: [
                Hx,
                zx
            ]
        },
        padding: {
            value: 0,
            validateFlags: [
                Hx
            ]
        },
        border: {
            value: 0,
            validateFlags: [
                Hx
            ]
        },
        borderRadius: {
            value: zL[vv]
        },
        showPointer: {
            value: !1,
            validateFlags: [
                Hx
            ]
        },
        pointerX: {
            value: 0,
            validateFlags: [
                Hx
            ]
        },
        pointerY: {
            value: 0,
            validateFlags: [
                Hx
            ]
        },
        pointerWidth: {
            value: zL[bv]
        },
        backgroundColor: {
            validateFlags: [
                Hx
            ]
        },
        selected: {
            value: !1,
            validateFlags: [
                Hx
            ]
        },
        selectionBorder: {
            value: zL.SELECTION_BORDER,
            validateFlags: [
                Hx
            ]
        },
        selectionShadowBlur: {
            value: zL[dv],
            validateFlags: [
                Hx
            ]
        },
        selectionColor: {
            value: zL[lv],
            validateFlags: [
                Hx
            ]
        },
        selectionType: {
            value: zL[_v],
            validateFlags: [
                Hx
            ]
        },
        renderColorBlendMode: {
        },
        renderColor: {
        },
        backgroundGradient: {
            validateFlags: [
                Hx,
                Ux
            ]
        },
        x: {
            value: 0,
            validateFlags: [
                Yx
            ]
        },
        y: {
            value: 0,
            validateFlags: [
                Yx
            ]
        },
        rotatable: {
            value: !0,
            validateFlags: [
                Wx,
                Hx
            ]
        },
        rotate: {
            value: 0,
            validateFlags: [
                Wx,
                Hx
            ]
        },
        _hostRotate: {
            validateFlags: [
                Wx
            ]
        },
        lineWidth: {
            value: 0,
            validateFlags: [
                Vx,
                Hx
            ]
        }
    });
    var LN = [
        WC.PROPERTY_TYPE_ACCESSOR,
        WC.PROPERTY_TYPE_STYLE,
        WC[Do]
    ];
    We[Wa] = {
        removeBinding: function (t) {
            for (var i = LN.length; --i >= 0; ) {
                var e = LN[i],
                n = this[e];
                for (var s in n) {
                    var r = n[s];
                    Array.isArray(r) ? (qL.mc(r, function (i) {
                        return i.target == t
                    }, this), r[Ps] || delete n[s])  : r.target == t && delete n[s]
                }
            }
        },
        addBindingProperty2: function (t, i, e) {
            if (!e && (e = this[i.propertyType || WC[Xx]], !e))
            return !1;
            var n = e[t];
            n ? (Array.isArray(n) || (e[t] = n = [
                n
            ]), n.push(i))  : e[t] = i
        },
        addBindingProperty: function (t, i, e, n, s, r) {
            t = t || WC[Xx];
            var h = this[t];
            if (!h)
            return !1;
            var a = {
                property: i,
                propertyType: t,
                bindingProperty: n,
                target: e,
                callback: s,
                invalidateSize: r
            };
            this.addBindingProperty2(i, a, h)
        },
        onBindingPropertyChange: function (t, i, e, n) {
            var s = this[e || WC[Xx]];
            if (!s)
            return !1;
            var r = s[i];
            return r ? (t._1k = !0, Ue(t, r, e, n), !0)  : !1
        },
        initBindingProperties: function (t, i) {
            for (var n = LN[Ps], s = t.$data; --n >= 0; ) {
                var r = LN[n],
                h = this[r];
                for (var a in h) {
                    var o = h[a];
                    if (o.bindingProperty) {
                        var f = o[sp];
                        if (f) {
                            if (f instanceof kN || (f = t[f]), !f)
                            return
                        } else
                        f = t;
                        var _;
                        _ = i ? t.getProperty(o[Kx], r)  : r == WC[Bo] ? t[lf][Zo](s, o[Kx])  : s[o[Kx]],
                        _ !== e && (f[o[Ro]] = _)
                    }
                }
            }
        }
    };
    var CN = {
    };
    CN[lv] = Zx,
    CN.SELECTION_BORDER = Jx,
    CN[dv] = 'selection.shadow.blur',
    CN[_v] = Qx,
    CN[tE] = iE,
    CN.RENDER_COLOR_BLEND_MODE = 'render.color.blend.mode',
    CN[eE] = nE,
    CN.SHAPE_STROKE_STYLE = sE,
    CN.SHAPE_LINE_DASH = rE,
    CN[hE] = 'shape.line.dash.offset',
    CN.SHAPE_FILL_COLOR = aE,
    CN[oE] = fE,
    CN.SHAPE_OUTLINE = _E,
    CN.SHAPE_OUTLINE_STYLE = cE,
    CN.LINE_CAP = uE,
    CN.LINE_JOIN = dE,
    CN[lE] = vE,
    CN[bE] = gE,
    CN[yE] = pE,
    CN.BORDER = xE,
    CN[EE] = mE,
    CN[wE] = TE,
    CN.BORDER_LINE_DASH_OFFSET = 'border.line.dash.offset',
    CN[vv] = OE,
    CN[PE] = dx,
    CN[IE] = 'image.background.color',
    CN[SE] = 'image.background.gradient',
    CN[AE] = ME,
    CN[kE] = CN.IMAGE_BORDER_COLOR = LE,
    CN.IMAGE_BORDER_LINE_DASH = 'image.border.line.dash',
    CN[CE] = 'image.border.line.dash.offset',
    CN[RE] = CN[NE] = DE,
    CN[BE] = jE,
    CN[$E] = GE,
    CN[FE] = qE,
    CN.LABEL_ANCHOR_POSITION = 'label.anchor.position',
    CN.LABEL_COLOR = zE,
    CN.LABEL_FONT_SIZE = YE,
    CN.LABEL_FONT_FAMILY = HE,
    CN[UE] = WE,
    CN[VE] = XE,
    CN[KE] = ZE,
    CN[JE] = QE,
    CN.LABEL_RADIUS = tm,
    CN.LABEL_OFFSET_X = im,
    CN[em] = nm,
    CN[sm] = rm,
    CN.LABEL_ALIGN_POSITION = hm,
    CN.LABEL_BORDER = am,
    CN[om] = fm,
    CN[_m] = 'label.background.color',
    CN[cm] = 'label.background.gradient',
    CN[um] = dm,
    CN.GROUP_BACKGROUND_COLOR = 'group.background.color',
    CN.GROUP_BACKGROUND_GRADIENT = 'group.background.gradient',
    CN[lm] = vm,
    CN.GROUP_STROKE_STYLE = bm,
    CN.GROUP_STROKE_LINE_DASH = 'group.stroke.line.dash',
    CN[gm] = 'group.stroke.line.dash.offset',
    CN[ym] = 'edge.bundle.label.rotate',
    CN.EDGE_BUNDLE_LABEL_POSITION = 'edge.bundle.label.position',
    CN.EDGE_BUNDLE_LABEL_ANCHOR_POSITION = 'edge.bundle.label.anchor.position',
    CN[pm] = 'edge.bundle.label.color',
    CN[xm] = 'edge.bundle.label.font.size',
    CN.EDGE_BUNDLE_LABEL_FONT_FAMILY = 'edge.bundle.label.font.family',
    CN[Em] = 'edge.bundle.label.font.style',
    CN.EDGE_BUNDLE_LABEL_PADDING = 'edge.bundle.label.padding',
    CN.EDGE_BUNDLE_LABEL_POINTER_WIDTH = 'edge.bundle.label.pointer.width',
    CN.EDGE_BUNDLE_LABEL_POINTER = 'edge.bundle.label.pointer',
    CN.EDGE_BUNDLE_LABEL_RADIUS = 'edge.bundle.label.radius',
    CN[mm] = 'edge.bundle.label.offset.x',
    CN.EDGE_BUNDLE_LABEL_OFFSET_Y = 'edge.bundle.label.offset.y',
    CN[wm] = 'edge.bundle.label.border',
    CN[Tm] = 'edge.bundle.label.border.color',
    CN.EDGE_BUNDLE_LABEL_BACKGROUND_COLOR = 'edge.bundle.label.background.color',
    CN[Om] = 'edge.bundle.label.background.gradient',
    CN[Pm] = 'edge.bundle.label.rotatable',
    CN.EDGE_WIDTH = Im,
    CN[Sm] = Am,
    CN[Mm] = km,
    CN.EDGE_OUTLINE_STYLE = Lm,
    CN[Cm] = Rm,
    CN[Nm] = 'edge.line.dash.offset',
    CN[Dm] = Bm,
    CN.EDGE_TO_OFFSET = jm,
    CN[$m] = Gm,
    CN[wf] = Fm,
    CN[Fo] = qm,
    CN.EDGE_CONTROL_POINT = zm,
    CN.EDGE_SPLIT_BY_PERCENT = 'edge.split.by.percent',
    CN[qo] = Ym,
    CN[zo] = Hm,
    CN.EDGE_CORNER = Um,
    CN[hf] = Wm,
    CN[Vm] = Xm,
    CN[Km] = Zm,
    CN[Jm] = Qm,
    CN[tw] = iw,
    CN.ARROW_FROM_STROKE_STYLE = 'arrow.from.stroke.style',
    CN[ew] = nw,
    CN[sw] = 'arrow.from.outline.style',
    CN.ARROW_FROM_LINE_DASH = rw,
    CN[hw] = 'arrow.from.line.dash.offset',
    CN[aw] = 'arrow.from.fill.color',
    CN[ow] = 'arrow.from.fill.gradient',
    CN[fw] = _w,
    CN.ARROW_FROM_LINE_JOIN = cw,
    CN.ARROW_TO = uw,
    CN.ARROW_TO_SIZE = dw,
    CN[lw] = vw,
    CN[bw] = gw,
    CN[yw] = 'arrow.to.stroke.style',
    CN.ARROW_TO_OUTLINE = pw,
    CN.ARROW_TO_OUTLINE_STYLE = 'arrow.to.outline.style',
    CN.ARROW_TO_LINE_DASH = xw,
    CN[Ew] = 'arrow.to.line.dash.offset',
    CN.ARROW_TO_FILL_COLOR = mw,
    CN[ww] = 'arrow.to.fill.gradient',
    CN[Tw] = Ow,
    CN.ARROW_TO_LINE_JOIN = Pw;
    var RN = function (t, i) {
        return t = t[Pp],
        i = i.zIndex,
        t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? - 1 : void 0)
    },
    NN = new We,
    DN = WC.PROPERTY_TYPE_ACCESSOR,
    BN = WC[Bo];
    NN[Iw](BN, CN.RENDER_COLOR, null, tb),
    NN[Iw](BN, CN[Sw], null, Aw),
    NN.addBindingProperty(BN, CN[_v], null, Zv),
    NN.addBindingProperty(BN, CN[uv], null, Mw),
    NN.addBindingProperty(BN, CN.SELECTION_SHADOW_BLUR, null, Yv),
    NN[Iw](BN, CN[lv], null, Uv),
    NN[Iw](DN, Cf, ry, ah),
    NN[Iw](BN, CN[FE], ry, kv),
    NN.addBindingProperty(BN, CN.LABEL_ANCHOR_POSITION, ry, Wp),
    NN.addBindingProperty(BN, CN.LABEL_COLOR, ry, kw),
    NN[Iw](BN, CN[sm], ry, Up),
    NN.addBindingProperty(BN, CN[Lw], ry, Cw),
    NN[Iw](BN, CN.LABEL_ROTATE, ry, uh),
    NN.addBindingProperty(BN, CN[Rw], ry, u_),
    NN[Iw](BN, CN[Nw], ry, d_),
    NN[Iw](BN, CN[UE], ry, c_),
    NN.addBindingProperty(BN, CN[VE], ry, dx),
    NN[Iw](BN, CN[KE], ry, Dw),
    NN[Iw](BN, CN.LABEL_POINTER, ry, Bw),
    NN[Iw](BN, CN[jw], ry, $w),
    NN[Iw](BN, CN.LABEL_OFFSET_X, ry, Tx),
    NN[Iw](BN, CN[em], ry, Ox),
    NN[Iw](BN, CN[Gw], ry, vl),
    NN[Iw](BN, CN.LABEL_ROTATABLE, ry, Fw),
    NN[Iw](BN, CN.LABEL_BORDER_STYLE, ry, Ix),
    NN[Iw](BN, CN[_m], ry, Ax),
    NN.addBindingProperty(BN, CN[cm], ry, Vh);
    var jN = function (t, i) {
        this[Go] = new JL,
        qL.lr(this, jN, arguments),
        this.id = this[na].id,
        this.graph = i,
        this._dq = [
        ],
        this._l6q = new We
    };
    jN.prototype = {
        syncSelection: !1,
        graph: null,
        layoutByAnchorPoint: !1,
        _l6q: null,
        _dq: null,
        addChild: function (t, i) {
            t._hf = this,
            i !== e ? qL.nw(this._dq, t, i)  : this._dq.push(t),
            this.invalidateChildrenIndex(),
            this[qw]()
        },
        removeChild: function (t) {
            this._l6q[zw](t),
            t._hf = null,
            qL.nn(this._dq, t),
            this[qw]()
        },
        getProperty: function (t, i) {
            return i == WC.PROPERTY_TYPE_STYLE ? this[lf].getStyle(this.$data, t)  : i == WC.PROPERTY_TYPE_CLIENT ? this.$data.get(t)  : this[na][t]
        },
        getStyle: function (t) {
            return this[lf][Zo](this[na], t)
        },
        _$t: function (t, i, e) {
            var n = this._l6q[Yw](this, t, i, e);
            return NN[Yw](this, t, i, e) || n
        },
        onPropertyChange: function (t) {
            if (mp == t[Ws]) {
                if (wp == t[A_])
                return this[wp](),
                !0;
                var i = t.value;
                return i && i.ui ? (th == t.kind ? this._87(i)  : Z_ == t[A_] && this.removeChild(i.ui), !0)  : !1
            }
            return this._$t(t[A_], t[Fu] || DN, t.value)
        },
        label: null,
        initLabel: function () {
            var t = new GN;
            t[Cf] = ry,
            this[Hw](t),
            this[ry] = t
        },
        initialize: function () {
            if (this[Uw](), this.$data._l6o) {
                var t = this[na]._l6o;
                t[ga](this._87, this)
            }
            NN.initBindingProperties(this),
            this._l6q[Ww](this, !0)
        },
        addBinding: function (t, i) {
            return i.property ? (i[sp] = t, this._l6q[Vw](i[Kx], i), void 0)  : !1
        },
        _e0: function (t, i) {
            var e = this.$data;
            if (!e._l6o)
            return !1;
            var n = e._l6o[Lc](t.id);
            if (!n || !n[Xw])
            return !1;
            var s = n[Xw];
            if (qL.nh(s)) {
                var r = !1;
                return qL.nj(s, function (t) {
                    return ah == t.bindingProperty ? (r = Ve(e, i, t[Kx], t[Fu]), !1)  : void 0
                }, this),
                r
            }
            return ah == s[Ro] ? Ve(e, i, s.property, s[Fu])  : !1
        },
        _87: function (t) {
            var i = t.ui;
            if (i) {
                var e = t.bindingProperties;
                e && (Array[Lo](e) ? e.forEach(function (t) {
                    this.addBinding(i, t)
                }, this)  : this[Kw](i, e)),
                this[Hw](i)
            }
        },
        validate: function () {
            return this._91 || (this[Zw](), this._91 = !0),
            this[$x]()
        },
        _$a: !0,
        invalidateChildrenIndex: function () {
            this._$a = !0
        },
        doValidate: function () {
            return this._1k && (this._1k = !1, this.validateChildren() && (this[Jw](), this[zh] = !0), this._$a && (this._$a = !1, LL ? this._dq = r(this._dq, RN)  : this._dq.sort(RN))),
            Li[tr](this) && (this[sa] = !0),
            this[sa] ? (OR[tr](this), this[Go].setByRect(this._do), this[Yv] && this[Go][Hh](this[Yv]), this[Qw](), !0)  : void 0
        },
        onBoundsChanged: function () {
        },
        validateChildren: function () {
            var t,
            i = this._l7ody,
            e = this.bodyChanged;
            i && e && (i[tb] = this.renderColor, i[Aw] = this[Aw]),
            this[tT] = !1,
            i && i._1k && (e = i[eh]() || e, i.$x = 0, i.$y = 0, i.$invalidateRotate && OR[tr](i), t = !0);
            for (var n = 0, s = this._dq[Ps]; s > n; n++) {
                var r = this._dq[n];
                r != i && (r._1k && r.validate() || e) && r._gb && (Di(r, i, this), t || (t = !0))
            }
            return t
        },
        measure: function () {
            this._h1.clear();
            for (var t, i, e = 0, n = this._dq[Ps]; n > e; e++)
            t = this._dq[e],
            t._gb && (i = t._do, i.width <= 0 || i[Fr] <= 0 || this._h1[iT](t.$x + i.x, t.$y + i.y, i[Gr], i[Fr]))
        },
        draw: function (t, i, e) {
            for (var n, s = 0, r = this._dq.length; r > s; s++)
            n = this._dq[s],
            n._gb && n._ha(t, i, e, this)
        },
        _l8j: function (t, i, e) {
            if (e) {
                if (!this._h1.intersectsRect(t - e, i - e, 2 * e, 2 * e))
                return !1
            } else if (!this._h1.intersectsPoint(t, i))
            return !1;
            return this._4t(t, i, e)
        },
        _4t: function (t, i, e) {
            for (var n, s = this._dq[Ps] - 1; s >= 0; s--)
            if (n = this._dq[s], n._gb && n._fx(t, i, e))
            return n;
            return !1
        }
    },
    qL.nm(jN, kN),
    qL.ls(jN[Wa], {
        renderColorBlendMode: {
            get: function () {
                return this._haColorBlendMode
            },
            set: function (t) {
                this._haColorBlendMode = t,
                this._1k = !0,
                this[eT] && (this.body.renderColorBlendMode = this._haColorBlendMode)
            }
        },
        renderColor: {
            get: function () {
                return this._haColor
            },
            set: function (t) {
                this._haColor = t,
                this._1k = !0,
                this[eT] && (this.body[tb] = this._haColor)
            }
        },
        bodyBounds: {
            get: function () {
                var t,
                i = this.body;
                return t = i && i._gb && !this._$p() ? i._do[wc]()  : this._do.clone(),
                this.rotate && L(t, this[uh], t),
                t.x += this.$x,
                t.y += this.$y,
                t
            }
        },
        body: {
            get: function () {
                return this._l7ody
            },
            set: function (t) {
                t && this._l7ody != t && (this._l7ody = t, this[tT] = !0, this.invalidateSize())
            }
        }
    });
    var $N = function () {
        qL.lr(this, $N, arguments),
        this._measureProperties.lineWidth = !0,
        this._measureProperties.outline = !0,
        this._measureProperties[Jv] = !0
    };
    $N[Wa] = {
        strokeStyle: nT,
        lineWidth: 0,
        fillColor: null,
        fillGradient: null,
        _jv: null,
        _hk: 1,
        _hj: 1,
        outline: 0,
        onDataChanged: function (t) {
            qL.nc(this, $N, Fx, arguments),
            this._9ped && this._ip && (this._ip._ipLoading || this._ip._l1pe == ER) && this._ip._6e(this._9ped, this),
            t && (t instanceof bR ? this._ip = t : (this._ip = mR._fz(t), this._91 && this._42()))
        },
        _ip: null,
        _42: function () {
            (this._ip._l1pe == ER || this._ip._ipLoading) && (this._9ped || (this._9ped = function () {
                this.invalidateData(),
                this._hf && this._hf.graph && (this._hf[qw](), this._hf[lf][wp]())
            }), this._ip._9s(this._9ped, this))
        },
        initialize: function () {
            this._42()
        },
        _4q: function () {
            return this._ip && this._ip.draw
        },
        _8l: function (t) {
            if (!t || t[Gr] <= 0 || t[Fr] <= 0 || !this._jv || !(this[Up] instanceof Object))
            return this._hk = 1,
            this._hj = 1,
            void 0;
            var i = this.size[Gr],
            n = this.size[Fr];
            if ((i === e || null === i) && (i = - 1), (n === e || null === n) && (n = - 1), 0 > i && 0 > n)
            return this._hk = 1,
            this._hj = 1,
            void 0;
            var s,
            r,
            h = t[Gr],
            a = t[Fr];
            i >= 0 && (s = i / h),
            n >= 0 && (r = n / a),
            0 > i ? s = r : 0 > n && (r = s),
            this._hk = s,
            this._hj = r
        },
        validateSize: function () {
            if (this._2s) {
                this._2s = !1;
                var t = this._originalBounds;
                this._hk,
                this._hj,
                this._8l(t),
                this[sT](t.width * this._hk, t[Fr] * this._hj, t.x * this._hk, t.y * this._hj)
            }
        },
        measure: function () {
            var t = this._ip.getBounds(this.lineWidth + this.outline);
            return t ? (this._2s = !0, this._originalBounds = t[wc](), void 0)  : (this._h1[ia](0, 0, 0, 0), void 0)
        },
        onBoundsChanged: function () {
            this._l7dFillGradientFlag = !0
        },
        _1j: function () {
            this._l7dFillGradientFlag = !1,
            this._fillGradient = this[ib] ? this[rT][Xh](this._77)  : null
        },
        draw: function (t, i, e, n) {
            var s = i * Math[Qr](this._hk, this._hj);
            s && (this._l7dFillGradientFlag && this._1j(), t[Vr](), t[ur](this._hk, this._hj), this._ip.draw(t, i, this, e, n || this, s, this[hT], this[aT]), t.restore())
        },
        _l8j: function (t, i, e) {
            if (this._ip._fx) {
                t /= this._hk,
                i /= this._hj;
                var n = (this._hk + this._hj) / 2;
                return n > 1 && (e /= n, e = 0 | e),
                this._ip._fx(t, i, e, !0, this[oh], this[Qv] || this.fillGradient)
            }
            return !0
        },
        _2s: !0
    },
    qL.nm($N, kN),
    qL.ls($N[Wa], {
        originalBounds: {
            get: function () {
                return this._originalBounds
            }
        },
        fillGradient: {
            get: function () {
                return this.$fillGradient
            },
            set: function (t) {
                this._l7dFillGradientFlag = !0,
                this.$fillGradient = t
            }
        },
        size: {
            get: function () {
                return this._jv
            },
            set: function (t) {
                this._jv != t && (this.$invalidateSize = !0, this._2s = !0, this._1k = !0, this._jv = t)
            }
        }
    }),
    zL.ALIGN_POSITION = tC[_u];
    var GN = function () {
        qL.lr(this, GN, arguments),
        this[kw] = zL.LABEL_COLOR
    };
    GN.prototype = {
        showPointer: !0,
        _9l: !0,
        fontSize: null,
        fontFamily: null,
        fontStyle: null,
        color: null,
        _jv: null,
        _fk: null,
        alignPosition: null,
        measure: function () {
            (this._9l || this._9l === e) && (this._9l = !1, this._font = (this._l8v || zL.FONT_STYLE) + $s + (this._fr || zL[Pc]) + Ic + (this._l72 || zL.FONT_FAMILY));
            var t = XC._$z(this[na], this._fr || zL[Pc], this._font);
            if (this._fk = t, this._jv) {
                var i = this._jv.width || 0,
                n = this._jv.height || 0;
                return this.setMeasuredBounds(i > t[Gr] ? i : t[Gr], n > t[Fr] ? n : t.height)
            }
            return this[sT](t[Gr], t[Fr])
        },
        _l8j: function (t, i, e) {
            return this[na] ? gi(t, i, e, this)  : !1
        },
        draw: function (t, i, e, n) {
            e && this._6x(t, i, n);
            var s = this._fr || zL[Pc];
            if (this[Fh] && this.$_hostRotate) {
                var r = hi(this[qh]);
                r > UL && 3 * UL > r && (t[lb](this._h1.width / 2, this._h1[Fr] / 2), t[uh](Math.PI), t[lb]( - this._h1[Gr] / 2, - this._h1.height / 2))
            }
            var h = this.alignPosition || zL.ALIGN_POSITION,
            a = h[Kc],
            o = h[Zc],
            f = s * zL[yv],
            _ = f / 2;
            if (o != sC && this._fk.height < this._h1[Fr]) {
                var c = this._h1[Fr] - this._fk.height;
                _ += o == rC ? c / 2 : c
            }
            t[lb](0, _),
            t.font != this._font && (t.font = this._font),
            a == eC ? (t.textAlign = pf, t[lb](this._h1[Gr] / 2, 0))  : a == nC ? (t[oT] = Ls, t.translate(this._h1.width, 0))  : t.textAlign = $f,
            t.textBaseline = mb,
            t.fillStyle = this[kw];
            for (var u = 0, d = this[na].split(Da), l = 0, v = d[Ps]; v > l; l++) {
                var b = d[l];
                t.fillText(b, 0, u),
                u += f
            }
        },
        _4q: function () {
            return null != this.$data || this._jv
        }
    },
    qL.nm(GN, kN),
    qL.ls(GN.prototype, {
        size: {
            get: function () {
                return this._jv
            },
            set: function (t) {
                this._jv != t && (this._jv = t, this.invalidateData())
            }
        },
        fontStyle: {
            get: function () {
                return this._l8v || zL.FONT_STYLE
            },
            set: function (t) {
                this._l8v != t && (this._l8v = t, this[gx](), this._9l = !0)
            }
        },
        fontSize: {
            get: function () {
                return this._fr || zL[Pc]
            },
            set: function (t) {
                this._fr != t && (this._fr = t, this[gx](), this._9l = !0)
            }
        },
        fontFamily: {
            get: function () {
                return this._l72 || zL[Sc]
            },
            set: function (t) {
                this._l72 != t && (this._l72 = t, this.invalidateData(), this._9l = !0)
            }
        },
        font: {
            get: function () {
                return (this._9l || this._9l === e) && (this._9l = !1, this._font = (this._l8v || zL[fT]) + $s + (this._fr || zL[Pc]) + Ic + (this._l72 || zL[Sc])),
                this._font
            }
        }
    });
    var FN = function (t) {
        t = t || new bR,
        qL.lr(this, FN, [
            t
        ]),
        this._measureProperties.lineWidth = !0,
        this._measureProperties[_T] = !0,
        this._measureProperties[Jv] = !0
    };
    FN[Wa] = {
        lineWidth: 0,
        _$v: !0,
        _1g: !0,
        layoutByPath: !0,
        layoutByAnchorPoint: !1,
        measure: function () {
            return this._$v = !0,
            this._1g = !0,
            this[cT] = this.$data[uT](this.lineWidth + this[_T]),
            this[cT] ? (this.setMeasuredBounds(this[cT]), void 0)  : (this._h1[lr](), void 0)
        },
        validateSize: function () {
            if (this._$v || this._1g) {
                var t = this[cT][wc]();
                if (this._$v) {
                    this._$v = !1;
                    var i = this[dT]();
                    i && t[th](i)
                }
                if (this._1g) {
                    this._1g = !1;
                    var i = this[lT]();
                    i && t[th](i)
                }
                this.setMeasuredBounds(t)
            }
        },
        validateFromArrow: function () {
            if (!this.$data._h0 || !this._fromArrow)
            return this._fromArrowShape = null,
            void 0;
            var t = this[na],
            i = 0,
            e = 0,
            n = this._fromArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0)  : i += n || 0, i > 0 && 1 > i && (i *= t._h0)),
            this[vT] = t.getLocation(i, e),
            this.fromArrowLocation[uh] = Math.PI + this.fromArrowLocation.rotate || 0,
            this._fromArrowShape = Tn(this._fromArrow, this._fromArrowSize);
            var s = this._fromArrowShape.getBounds(this.fromArrowStyles[oh] + this.fromArrowStyles[_T]);
            return this.fromArrowFillGradient instanceof UC[bT] ? this[gT]._fillGradient = this[yT].generatorGradient(s)  : this.fromArrowStyles && (this.fromArrowStyles._fillGradient = null),
            C(s, this.fromArrowLocation[uh], s, s[Ls], s.cy),
            s[Gx](this[vT].x, this[vT].y),
            s
        },
        validateToArrow: function () {
            if (!this.$data._h0 || !this._toArrow)
            return this._toArrowShape = null,
            void 0;
            var t = this[na],
            i = 0,
            e = 0,
            n = this._toArrowOffset;
            n && (isNaN(n) && (n.x || n.y) ? (i += n.x || 0, e += n.y || 0)  : i += n || 0),
            0 > i && i > - 1 && (i *= t._h0),
            i += t._h0,
            this.toArrowLocation = t[pT](i, e),
            this._toArrowShape = Tn(this._toArrow, this._toArrowSize);
            var s = this._toArrowShape[uT](this.toArrowStyles[oh] + this.toArrowStyles[_T]);
            return this.toArrowFillGradient instanceof UC[bT] ? this[xT]._fillGradient = this[ET][Xh](s)  : this[xT] && (this[xT]._fillGradient = null),
            C(s, this[mT].rotate, s, s[Ls], s.cy),
            s[Gx](this[mT].x, this.toArrowLocation.y),
            s
        },
        invalidateArrow: function (t) {
            this[qw](),
            t ? this._$v = !0 : this._1g = !0
        },
        _22: function (t) {
            var i = t ? 'from' : Dp,
            n = this[i + wT];
            n === e && (n = this.lineWidth);
            var s = this[i + TT];
            s === e && (s = this[Vv]);
            var r = this[i + OT];
            r || (this[i + OT] = r = {
            }),
            r.lineWidth = n,
            r[Vv] = s,
            r.lineDash = this[i + PT],
            r[ca] = this[i + IT],
            r.fillColor = this[i + ST],
            r[ib] = this[i + AT],
            r.lineCap = this[i + MT],
            r.lineJoin = this[i + kT],
            r[_T] = this[i + LT] || 0,
            r[Jv] = this[i + CT]
        },
        doValidate: function () {
            return this._fromArrow && this._22(!0),
            this._toArrow && this._22(!1),
            qL.nc(this, FN, $x)
        },
        drawArrow: function (t, i, e, n) {
            if (this._fromArrow && this._fromArrowShape) {
                t.save();
                var s = this[vT],
                r = s.x,
                h = s.y,
                a = s[uh];
                t.translate(r, h),
                a && t.rotate(a),
                this._fromArrowShape[kh](t, i, this[gT], e, n),
                t[Lh]()
            }
            if (this._toArrow && this._toArrowShape) {
                t.save();
                var s = this.toArrowLocation,
                r = s.x,
                h = s.y,
                a = s[uh];
                t.translate(r, h),
                a && t[uh](a),
                this._toArrowShape[kh](t, i, this[xT], e, n),
                t.restore()
            }
        },
        outlineStyle: null,
        outline: 0,
        onBoundsChanged: function () {
            this._l7dFillGradientFlag = !0
        },
        _1j: function () {
            this._l7dFillGradientFlag = !1,
            this._fillGradient = this[ib] ? this[rT][Xh](this._77)  : null
        },
        draw: function (t, i, e, n) {
            this._l7dFillGradientFlag && this._1j(),
            this.$data.draw(t, i, this, e, n),
            this[RT](t, i, e, n)
        },
        _l8j: function (t, i, e) {
            if (this[na]._fx(t, i, e, !0, this[oh] + this.outline, this.fillColor || this[ib]))
            return !0;
            if (this._toArrow && this._toArrowShape) {
                var n = t - this.toArrowLocation.x,
                s = i - this[mT].y;
                if (this[mT][uh]) {
                    var r = A(n, s, - this[mT][uh]);
                    n = r.x,
                    s = r.y
                }
                var h = this[xT].fillColor || this[xT].fillGradient;
                if (this._toArrowShape._fx(n, s, e, !0, this[xT].lineWidth, h))
                return !0
            }
            if (this._fromArrow && this._fromArrowShape) {
                var n = t - this[vT].x,
                s = i - this[vT].y;
                if (this[vT][uh]) {
                    var r = A(n, s, - this[vT].rotate);
                    n = r.x,
                    s = r.y
                }
                var h = this[gT].fillColor || this[gT].fillGradient;
                if (this._fromArrowShape._fx(n, s, e, !0, this[gT][oh], h))
                return !0
            }
            return !1
        },
        _4g: 0,
        _5y: 0
    },
    qL.nm(FN, kN),
    qL.ls(FN.prototype, {
        length: {
            get: function () {
                return this[ah].length
            }
        },
        fillGradient: {
            get: function () {
                return this.$fillGradient
            },
            set: function (t) {
                this._l7dFillGradientFlag = !0,
                this.$fillGradient = t
            }
        },
        fromArrowOffset: {
            get: function () {
                return this._fromArrowOffset
            },
            set: function (t) {
                this._fromArrowOffset != t && (this._fromArrowOffset = t, this.invalidateArrow(!0))
            }
        },
        fromArrowSize: {
            get: function () {
                return this._fromArrowSize
            },
            set: function (t) {
                this._fromArrowSize != t && (this._fromArrowSize = t, this[NT](!0))
            }
        },
        fromArrow: {
            get: function () {
                return this._fromArrow
            },
            set: function (t) {
                this._fromArrow != t && (this._fromArrow = t, t && this[NT](!0))
            }
        },
        fromArrowOutline: {
            get: function () {
                return this._4g
            },
            set: function (t) {
                this._4g != t && (this._4g = t, t && this[NT](!1))
            }
        },
        fromArrowStroke: {
            get: function () {
                return this._fromArrowStroke
            },
            set: function (t) {
                this._fromArrowStroke != t && (this._fromArrowStroke = t, t && this.invalidateArrow(!0))
            }
        },
        toArrowOffset: {
            get: function () {
                return this._toArrowOffset
            },
            set: function (t) {
                this._toArrowOffset != t && (this._toArrowOffset = t, this[NT](!1))
            }
        },
        toArrowSize: {
            get: function () {
                return this._toArrowSize
            },
            set: function (t) {
                this._toArrowSize != t && (this._toArrowSize = t, this.invalidateArrow(!1))
            }
        },
        toArrow: {
            get: function () {
                return this._toArrow
            },
            set: function (t) {
                this._toArrow != t && (this._toArrow = t, t && this[NT](!1))
            }
        },
        toArrowStroke: {
            get: function () {
                return this._toArrowStroke
            },
            set: function (t) {
                this._toArrowStroke != t && (this._toArrowStroke = t, t && this[NT](!1))
            }
        },
        toArrowOutline: {
            get: function () {
                return this._5y
            },
            set: function (t) {
                this._5y != t && (this._5y = t, t && this.invalidateArrow(!1))
            }
        }
    });
    var qN = new We;
    qN.addBindingProperty(DN, Lp, null, null, DT, !0),
    qN.addBindingProperty(DN, yf, null, null, DT, !0),
    qN[Iw](BN, CN[BT], jT, oh),
    qN.addBindingProperty(BN, CN[Sm], jT, Vv),
    qN[Iw](BN, CN.EDGE_OUTLINE, jT, _T),
    qN[Iw](BN, CN.EDGE_OUTLINE_STYLE, jT, Jv),
    qN[Iw](BN, CN[Cm], jT, ra),
    qN[Iw](BN, CN[Nm], jT, ca),
    qN[Iw](BN, CN[of], jT, null, DT),
    qN.addBindingProperty(BN, CN.EDGE_FROM_OFFSET, jT, null, DT),
    qN[Iw](BN, CN[$T], jT, null, DT),
    qN.addBindingProperty(BN, CN.LINE_CAP, jT, Xv),
    qN[Iw](BN, CN[GT], jT, Kv),
    qN[Iw](DN, R_, jT, null, DT),
    qN[Iw](DN, Dp, jT, null, DT),
    qN.addBindingProperty(DN, mf, jT, null, DT),
    qN[Iw](BN, CN[Vm], jT, FT),
    qN.addBindingProperty(BN, CN[Km], jT, qT),
    qN[Iw](BN, CN[Jm], jT, zT),
    qN[Iw](BN, CN[tw], jT, YT),
    qN[Iw](BN, CN.ARROW_FROM_STROKE_STYLE, jT, HT),
    qN.addBindingProperty(BN, CN.ARROW_FROM_OUTLINE, jT, UT),
    qN.addBindingProperty(BN, CN[sw], jT, 'fromArrowOutlineStyle'),
    qN[Iw](BN, CN[aw], jT, WT),
    qN[Iw](BN, CN.ARROW_FROM_FILL_GRADIENT, jT, 'fromArrowFillGradient'),
    qN.addBindingProperty(BN, CN[VT], jT, XT),
    qN[Iw](BN, CN[hw], jT, 'fromArrowLineDashOffset'),
    qN.addBindingProperty(BN, CN[KT], jT, ZT),
    qN.addBindingProperty(BN, CN[fw], jT, JT),
    qN.addBindingProperty(BN, CN[QT], jT, tO),
    qN[Iw](BN, CN.ARROW_TO_OFFSET, jT, iO),
    qN[Iw](BN, CN[eO], jT, nO),
    qN.addBindingProperty(BN, CN[bw], jT, sO),
    qN[Iw](BN, CN[yw], jT, rO),
    qN[Iw](BN, CN[hO], jT, aO),
    qN.addBindingProperty(BN, CN.ARROW_TO_OUTLINE_STYLE, jT, oO),
    qN[Iw](BN, CN[fO], jT, _O),
    qN.addBindingProperty(BN, CN[ww], jT, ET),
    qN[Iw](BN, CN.ARROW_TO_LINE_DASH, jT, cO),
    qN[Iw](BN, CN[Ew], jT, 'toArrowLineDashOffset'),
    qN[Iw](BN, CN.ARROW_TO_LINE_JOIN, jT, uO),
    qN[Iw](BN, CN[Tw], jT, dO);
    var zN = new We;
    zN[Iw](BN, CN[lO], vO, kv),
    zN[Iw](BN, CN.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, vO, Wp),
    zN[Iw](BN, CN[pm], vO, kw),
    zN[Iw](BN, CN.EDGE_BUNDLE_LABEL_ROTATE, vO, uh),
    zN.addBindingProperty(BN, CN[xm], vO, u_),
    zN[Iw](BN, CN[bO], vO, d_),
    zN[Iw](BN, CN.EDGE_BUNDLE_LABEL_FONT_STYLE, vO, c_),
    zN[Iw](BN, CN[gO], vO, dx),
    zN.addBindingProperty(BN, CN.EDGE_BUNDLE_LABEL_POINTER_WIDTH, vO, Dw),
    zN[Iw](BN, CN[yO], vO, Bw),
    zN[Iw](BN, CN[pO], vO, $w),
    zN[Iw](BN, CN[mm], vO, Tx),
    zN[Iw](BN, CN[xO], vO, Ox),
    zN[Iw](BN, CN[wm], vO, vl),
    zN.addBindingProperty(BN, CN[Pm], vO, Fw),
    zN[Iw](BN, CN[Tm], vO, Ix),
    zN[Iw](BN, CN[EO], vO, Ax),
    zN[Iw](BN, CN.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, vO, Vh),
    Xe.prototype = {
        shape: null,
        path: null,
        initialize: function () {
            qL.nc(this, Xe, Zw),
            this.path = new bR,
            this[Kp]._l8e = !1,
            this.shape = new FN(this.path),
            this[Hw](this[jT], 0),
            this._l7ody = this[jT],
            qN.initBindingProperties(this)
        },
        _1z: !0,
        _5e: null,
        _$p: function () {
            return !1
        },
        _40: function () {
            return !1
        },
        validatePoints: function () {
            this.shape.invalidateData();
            var t = this.$data,
            i = this[Kp];
            i[lr]();
            var e = t[Ja],
            n = t[Ka];
            null != e && null != n && Mn(this, t, i, e, n)
        },
        drawLoopedEdge: function (t, i, e, n) {
            Rn(this, n, t)
        },
        drawEdge: function (t, i, e, n, s, r) {
            var h = this[Zo](CN[Dm]),
            a = this[Zo](CN.EDGE_TO_OFFSET);
            if (h && (s.x += h.x || 0, s.y += h.y || 0), a && (r.x += a.x || 0, r.y += a.y || 0), n == WC[mO]) {
                var o = s.center,
                f = r[pf],
                _ = (o.x + f.x) / 2,
                c = (o.y + f.y) / 2,
                u = o.x - f.x,
                d = o.y - f.y,
                l = Math[Jr](u * u + d * d),
                v = Math[As](d, u);
                v += Math.PI / 6,
                l *= 0.04,
                l > 30 && (l = 30);
                var b = Math.cos(v) * l,
                g = Math[ks](v) * l;
                return t[ao](_ - g, c + b),
                t.lineTo(_ + g, c - b),
                void 0
            }
            var y = Cn(this, this.data, s, r, i, e, s.center, r.center);
            y && (t._e8 = y)
        },
        _2f: function () {
            if (!this.$data[wO]())
            return null;
            var t = this[lf]._75._7k(this[na]);
            if (!t || !t[TO]() || !t._fi)
            return null;
            var i = t.getYOffset(this);
            return t.isPositiveOrder(this[na]) || (i = - i),
            i
        },
        checkBundleLabel: function () {
            var t = this[OO]();
            return t ? (this[vO] || this[PO](), this.bundleLabel._gb = !0, this[vO][ah] = t, void 0)  : (this[vO] && (this.bundleLabel._gb = !1, this[vO][ah] = null), void 0)
        },
        createBundleLabel: function () {
            var t = new GN;
            t[IO] = !1,
            this[vO] = t,
            this.addChild(this.bundleLabel),
            zN[Ww](this)
        },
        getBundleLabel: function () {
            var t = this.graph._75._7k(this[na]);
            return t && t.agentEdge == this.$data ? SO + t.bindableEdges[Ps] : null
        },
        doValidate: function () {
            return this._1z && (this._1z = !1, this[AO]()),
            this[MO](),
            qL.nc(this, Xe, $x)
        },
        _4n: function () {
            this._1z = !0,
            this.invalidateSize()
        },
        _$t: function (t, i, e) {
            var n = this._l6q[Yw](this, t, i, e);
            return n = NN[Yw](this, t, i, e) || n,
            this[vO] && this.bundleLabel[na] && (n = zN.onBindingPropertyChange(this, t, i, e) || n),
            qN[Yw](this, t, i, e) || n
        }
    },
    qL.nm(Xe, jN),
    Xe.drawReferenceLine = function (t, i, e, n) {
        if (t[fo](i.x, i.y), !n || n == WC[kO])
        return t.lineTo(e.x, e.y),
        void 0;
        if (n == WC[Xo])
        t[ao](i.x, e.y);
         else if (n == WC[Uo])
        t[ao](e.x, i.y);
         else if (0 == n[kr](WC.EDGE_TYPE_ORTHOGONAL)) {
            var s;
            s = n == WC[Ho] ? !0 : n == WC[Vo] ? !1 : Math[Rs](i.x - e.x) > Math.abs(i.y - e.y);
            var r = (i.x + e.x) / 2,
            h = (i.y + e.y) / 2;
            s ? (t.lineTo(r, i.y), t[ao](r, e.y))  : (t.lineTo(i.x, h), t[ao](e.x, h))
        }
        t.lineTo(e.x, e.y)
    },
    qL.ls(Xe.prototype, {
        length: {
            get: function () {
                return this[Kp][Ps]
            }
        }
    });
    var YN = new We;
    YN[Iw](DN, Gp),
    YN[Iw](DN, uh, null, uh),
    YN[Iw](DN, Wp, null, LO),
    YN[Iw](BN, CN.BACKGROUND_COLOR, null, Ax),
    YN.addBindingProperty(BN, CN.BACKGROUND_GRADIENT, null, Vh),
    YN.addBindingProperty(BN, CN.PADDING, null, dx),
    YN[Iw](BN, CN[CO], null, vl),
    YN[Iw](BN, CN[vv], null, $w),
    YN[Iw](BN, CN[EE], null, Ix),
    YN.addBindingProperty(BN, CN[wE], null, Sx),
    YN.addBindingProperty(BN, CN[RO], null, NO),
    YN[Iw](DN, bb, bb, ah, DO),
    YN[Iw](DN, Up, bb, Up),
    YN[Iw](BN, CN.SHAPE_STROKE, bb, oh),
    YN[Iw](BN, CN.SHAPE_STROKE_STYLE, bb, Vv),
    YN[Iw](BN, CN[BO], bb, _T),
    YN.addBindingProperty(BN, CN[jO], bb, Jv),
    YN.addBindingProperty(BN, CN.SHAPE_FILL_COLOR, bb, Qv),
    YN[Iw](BN, CN[oE], bb, ib),
    YN[Iw](BN, CN[$O], bb, ra),
    YN.addBindingProperty(BN, CN[hE], bb, ca),
    YN.addBindingProperty(BN, CN.LINE_CAP, bb, Xv),
    YN[Iw](BN, CN[GT], bb, Kv),
    YN[Iw](BN, CN.LAYOUT_BY_PATH, bb, ea),
    YN[Iw](BN, CN[IE], bb, Ax),
    YN.addBindingProperty(BN, CN[SE], bb, Vh),
    YN[Iw](BN, CN[BE], bb, dx),
    YN[Iw](BN, CN[AE], bb, vl),
    YN[Iw](BN, CN.IMAGE_BORDER_RADIUS, bb, $w),
    YN.addBindingProperty(BN, CN[GO], bb, Ix),
    YN[Iw](BN, CN.IMAGE_BORDER_LINE_DASH, bb, Sx),
    YN[Iw](BN, CN[CE], bb, NO),
    Ke[Wa] = {
        _2k: null,
        image: null,
        initialize: function () {
            qL.nc(this, Ke, Zw),
            this._9k(),
            YN[Ww](this)
        },
        _l6i: function () {
            this[ah].image ? this[bb] && (this[eT] = this.image)  : this[ry] && (this.body = this[ry])
        },
        _9k: function () {
            this[bb] = new $N,
            this.addChild(this[bb], 0),
            this._l6i()
        },
        doValidate: function () {
            this.body && (this instanceof Fn && !this.$data[lx] && this.$data[_x] ? this[eT][Bh] = !1 : (this[eT].$layoutByAnchorPoint = null != this._2k, this[eT].anchorPosition = this._2k));
            var t = this[na][$p],
            i = 0,
            e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return this.$x = i,
            this.$y = e,
            jN.prototype[$x].call(this) || n
        },
        _$t: function (t, i, e) {
            var n = this._l6q[Yw](this, t, i, e);
            return n = NN[Yw](this, t, i, e) || n,
            YN[Yw](this, t, i, e) || n
        }
    },
    qL.nm(Ke, jN);
    var HN = function (t, i) {
        return t = t.$data[Pp] || 0,
        i = i.$data[Pp] || 0,
        t - i
    },
    UN = {
        position: Ff,
        'user-select': Gf,
        'transform-origin': FO,
        '-webkit-tap-highlight-color': Pb
    };
    Je[Wa] = {
        _ib: 1,
        _l84: null,
        _7n: null,
        _7o: null,
        _9: !0,
        _kn: null,
        _ks: null,
        _hr: null,
        _9d: null,
        _5r: !1,
        _91: !1,
        _hh: null,
        _3s: function (t, i) {
            for (var e = this._l84, n = 0, s = e[Ps]; s > n; n++)
            if (t[tr](i, e[n]) === !1)
            return !1
        },
        _d8: function (t, i) {
            this._kn.forEach(t, i)
        },
        _$r: function (t, i) {
            for (var e = this._l84, n = e.length - 1; n >= 0; n--)
            if (t.call(i, e[n]) === !1)
            return !1
        },
        _3u: function (t, i) {
            this._kn[qO](t, i)
        },
        _37: function (t, i) {
            this._6p && this._6p._37 && this._6p._37(t, i)
        },
        _l7e: function () {
            SC._kq(this._ks, {
                overflow: jf,
                padding: zO
            }),
            this._hh._49(),
            this._in && this._in[YO] ? this._hh._l8m(0, 0)  : this._hh._2g = !0
        },
        _3y: function () {
            return this._9 && (this._9 = !1, this._1l()),
            this._7o
        },
        _35: function () {
            return this._hh._19 ? !1 : (this._hh._19 = !0, this._l7d(), void 0)
        },
        _l7d: function () {
            this._5r || (this._5r = !0, this._jh = Date[Rr](), qL.ms(this._e4, this))
        },
        _9c: function () {
            var t = !this._91 || 0 == this._kn[Ps];
            this._91 || (this._91 = !0, this._l7e()),
            this._9a(t);
            var i = this._hr._g;
            return this._kn.isEmpty() ? (i._ii(), this._topCanvas._ha(), this._5r = !1, this._hh._ho(this, !0), void 0)  : (this._hh._ho(this, this._9d._k9), this._i3 && this._i3(i, this._if, t), this._9d._ii(), this._hh._6w(), this._topCanvas._ha(), this._5r = !1, void 0)
        },
        _e4: function () {
            this._5r && (this._g9ed || (this._9c(), this._2a()))
        },
        _ef: null,
        _1b: function (t, i, e, n, s) {
            if (!e || !n)
            return this._5l(),
            void 0;
            var r = this._l84,
            h = this._7n;
            this._5l(),
            this._ef[Ps] = 0;
            var a,
            o = {
            },
            f = this._9d;
            s = s || f._k9;
            for (var _, c, u, d, l, v, b = this._kn._i0, g = t + e, y = i + n, p = 0, x = b[Ps]; x > p; p++)
            if (v = b[p], l = v.__oldBounds, v.__oldBounds = null, v._gb)
            if (d = v.__h1Changed, v.__h1Changed = !1, _ = v[Go], c = _.x + v.$x, u = _.y + v.$y, g > c && y > u && c + _.width > t && u + _.height > i) {
                if (a = v[na][Pp], a in o || (o[a] = !0, this._ef[or](a || 0)), r.push(v), this._7n[v.id] = v, s)
                continue;
                l && (f._k5(l.x, l.y, l[Gr], l[Fr]), s = f._k9),
                d && (f._k5(c, u, _[Gr], _[Fr]), s = f._k9)
            } else
            !s && h[v.id] && l && (f._k5(l.x, l.y, l[Gr], l.height), s = f._k9);
             else
            !s && l && (f._k5(l.x, l.y, l[Gr], l.height), s = f._k9)
        },
        _l73: function (t) {
            var i = t.$data.__gbChanged;
            return t[na].__gbChanged = !1,
            t._1k || t.$data._5r ? (t[na]._5r = !1, t._91 && (t.__oldBounds = {
                x: t.$x + t[Go].x,
                y: t.$y + t[Go].y,
                width: t.uiBounds.width,
                height: t[Go].height
            }), t.__h1Changed = t.validate(), i || t.__h1Changed)  : (i && t._91 && (t.__oldBounds = {
                x: t.$x + t.uiBounds.x,
                y: t.$y + t[Go].y,
                width: t[Go].width,
                height: t.uiBounds.height
            }), i)
        },
        _i3: function (t, i, e, n) {
            Date[Rr](),
            n = n || this._hh._6s;
            var s = n.x,
            h = n.y,
            a = n.width,
            o = n.height;
            this._1b(s, h, a, o, e),
            this._3y(),
            this._ef[Ps] && (LL ? (this._ef[HO](), this._l84 = r(this._l84, HN))  : this._l84.sort(HN)),
            this._fv(t, i)
        },
        _fv: function (t, i) {
            t.save(),
            this._9d._hp(t, this._hr, this._hh),
            this._hh._98(t);
            for (var e, n, s = this._l84, r = 0, h = s.length; h > r; r++)
            e = s[r],
            n = e[Go],
            (this._9d._k9 || this._9d._l8r(n.x + e.$x, n.y + e.$y, n[Gr], n.height)) && e._ha(t, i);
            t.restore()
        },
        _f0: function (t, i, e) {
            t[Vr](),
            t[lb]( - e.x * i, - e.y * i),
            t.scale(i, i);
            var n,
            s,
            h = this._kn._i0[Ss]();
            this._ef.length && (LL ? (this._ef.sort(), h = r(h, HN))  : h[HO](HN));
            for (var a = 0, o = h[Ps]; o > a; a++)
            n = h[a],
            n._gb && (s = n[Go], e.intersectsRect(s.x + n.$x, s.y + n.$y, s[Gr], s.height) && n._ha(t, i));
            t.restore()
        },
        _12: function () {
        },
        _1l: function () {
            for (var t, i, e = this._kn._i0, n = new JL, s = e[Ps] - 1; s >= 0; s--)
            t = e[s],
            t._gb && (i = t.uiBounds, n[iT](t.$x + i.x, t.$y + i.y, i[Gr], i[Fr]));
            var r = this._7o;
            this._7o = n,
            n.equals(r) || this._12(r, n)
        },
        _9a: function () {
            for (var t, i = this._kn._i0, e = i[Ps] - 1; e >= 0; e--)
            t = i[e],
            this._l73(t) && !this._9 && (this._9 = !0)
        },
        _20: function (t, i, e, n) {
            this._9d._k9 || (t && (t > 0 && this._9d._k5(this._hh._6s.x, this._hh._6s.y, t / this._hh._if, this._hh._88 / this._hh._if), e + t < this._hh._9m && this._9d._k5(this._hh._6s.x + (e + t) / this._hh._if, this._hh._6s.y, (this._hh._9m - e - t) / this._hh._if, this._hh._88 / this._hh._if)), i && (i > 0 && this._9d._k5(this._hh._6s.x, this._hh._6s.y, this._hh._9m / this._hh._if, i / this._hh._if), n + i < this._hh._88 && this._9d._k5(this._hh._6s.x, this._hh._6s.y + (n + i) / this._hh._if, this._hh._9m / this._hh._if, (this._hh._88 - n - i) / this._hh._if)))
        },
        _l8n: function (t, i) {
            this._l7d(),
            this._hh._l8n(t, i)
        },
        _95: function (t, i, e) {
            this._l7d(),
            this._hh._95(t, i, e)
        },
        _7l: function () {
        },
        _dy: function (t, i, e) {
            return this._91 ? (this._hh._dy(t, i, e) !== !1 && this._l7d(), void 0)  : (this._hh._if = t, void 0)
        },
        _21: function () {
            var t = this._3y();
            if (!t[Rc]()) {
                var i = this._hh._9m / t[Gr],
                e = this._hh._88 / t.height;
                return {
                    scale: Math[Qr](i, e),
                    cx: t.cx,
                    cy: t.cy
                }
            }
        },
        _hm: function (t, i, e) {
            return this._hh._hm(t, i, e) === !1 ? !1 : (this._l7d(), void 0)
        },
        _gd: function (t, i) {
            return this._hh._gd(t, i) === !1 ? !1 : (this._l7d(), void 0)
        },
        _hn: function (t, i) {
            return this._hh._hn(t, i) === !1 ? !1 : (this._l7d(), void 0)
        },
        _66: function () {
            return this._hh._66Flag ? !1 : (this._hh._66Flag = !0, this._l7d(), void 0)
        },
        _5l: function () {
            this._l84[Ps] = 0,
            this._7n = {
            }
        },
        _ik: function () {
            this._ii()
        },
        _g9: function () {
            this._ii(),
            this._g9ed = !0,
            this._5r = !1,
            this._topCanvas._ii(),
            this._7u[Ps] = 0,
            this._6p && (this._6p._g9(), delete this._6p)
        },
        _ii: function () {
            this._9 = !0,
            this._kn.clear(),
            this._5l(),
            this._9d._ii(),
            this._l7d()
        },
        _7q: function (t, i, e, n) {
            var s = this._if;
            return new JL(this._l6t(t), this._l6v(i), e / s, n / s)
        },
        _l6t: function (t) {
            return this._hh._l6t(t)
        },
        _l6v: function (t) {
            return this._hh._l6v(t)
        },
        _l8o: function (t) {
            return this._hh._l8o(t)
        },
        _l8q: function (t) {
            return this._hh._l8q(t)
        },
        _im: function (t) {
            return this._kn[Lc](t.id || t)
        },
        _$b: function (t) {
            var i = this._7s(t);
            return i.x = this._l6t(i.x),
            i.y = this._l6v(i.y),
            i
        },
        _ev: function (t, i) {
            return {
                x: this._l8o(t),
                y: this._l8q(i)
            }
        },
        _dc: function (t, i) {
            return {
                x: this._l6t(t),
                y: this._l6v(i)
            }
        },
        _7s: function (t) {
            return qL.m8(t, this._ks)
        },
        _39: function (t) {
            if (t[UO] !== e)
            return t[UO] ? this._kn.getById(t.uiId)  : null;
            for (var i, n = Math[sh](zL[WO] / this._hh._if) || 1, s = this._$b(t), r = s.x, h = s.y, a = this._l84, o = a[Ps] - 1; o >= 0; o--)
            if (i = a[o], i._gb && i._fx(r, h, n))
            return t[UO] = i.id,
            i;
            t.uiId = null
        },
        _fx: function (t) {
            var i = this._39(t);
            if (!i)
            return null;
            var e = Math.round(zL[WO] / this._hh._if) || 1,
            n = this._$b(t),
            s = n.x,
            r = n.y,
            h = i._fx(s, r, e, !0);
            return h instanceof kN ? h : i
        },
        _96: function (t) {
            t.id !== e && (t = t.id);
            var i = this._kn[Lc](t);
            return i ? new JL((i.$x || 0) + i[Go].x, (i.$y || 0) + i[Go].y, i.uiBounds.width, i.uiBounds[Fr])  : void 0
        },
        _7u: null,
        _2a: function () {
            if (!this._7u[Ps])
            return !1;
            var t = this._7u;
            this._7u = [
            ],
            qL.nj(t, function (t) {
                try {
                    t[Sg] ? qL.mu(t.call, t.scope, t.delay)  : t[tr].call(t.scope)
                } catch (i) {
                }
            }, this),
            this._e4()
        },
        callLater: function (t, i, e) {
            i && qL.n6(i) && (e = i, i = null);
            var n = this._7u;
            n[or]({
                call: t,
                scope: i,
                delay: e
            }),
            this._5r || this._2a()
        }
    },
    qL.ls(Je.prototype, {
        _6s: {
            get: function () {
                return this._hh._6s
            }
        },
        _l8l: {
            get: function () {
                return this._hh._l8l
            },
            set: function (t) {
                return !t || 1 > t ? !1 : (this._hh._l8l = t, void 0)
            }
        },
        _du: {
            get: function () {
                return this._hh._du
            },
            set: function (t) {
                return !t || 1 > t ? !1 : (this._hh._du = t, void 0)
            }
        },
        _ds: {
            get: function () {
                return this._hh._ds
            },
            set: function (t) {
                return !t || 0 >= t ? !1 : (this._hh._ds = t, void 0)
            }
        },
        _if: {
            get: function () {
                return this._hh._f8()
            },
            set: function (t) {
                this._dy(t)
            }
        },
        _l3: {
            get: function () {
                return this._hh._iy()
            }
        },
        _l1: {
            get: function () {
                return this._hh._iz()
            }
        }
    }),
    Qe[Wa] = {
        _l7b: null,
        _9m: 0,
        _88: 0,
        _2g: !0,
        _19: !0,
        _hh: null,
        _6s: null,
        _l8l: 1.3,
        _du: 10,
        _ds: 0.1,
        _if: 1,
        _l3: 0,
        _l1: 0,
        _6w: function () {
            this._hh._dm(this._l7b._hr)
        },
        _49: function () {
            return this._19 = !1,
            this._5p(this._l7b._ks[VO], this._l7b._ks.clientHeight)
        },
        _5p: function (t, i) {
            return this._9m == t && this._88 == i ? !1 : (this._9m = t, this._88 = i, this._l7b._37(t, i), void 0)
        },
        _l8m: function (t, i, e) {
            e && (e = Math.max(this._ds, Math.min(this._du, e)), this._if = e),
            this._l3 = this._9m / 2 - t * this._if,
            this._l1 = this._88 / 2 - i * this._if,
            this._2g = !0
        },
        _2t: function (t, i) {
            t = t || this._9m,
            i = i || this._88,
            this._6s[ia]( - this._l3 / this._if, - this._l1 / this._if, t / this._if, i / this._if)
        },
        _hm: function (t, i, e) {
            return this._dy(this._5d() * t, i, e)
        },
        _hn: function (t, i) {
            return this._dy(this._5d() * this._l8l, t, i)
        },
        _gd: function (t, i) {
            return this._dy(this._5d() / this._l8l, t, i)
        },
        _dy: function (t, i, n) {
            this._66Flag = !1,
            t = Math.max(this._ds, Math.min(this._du, t));
            var s = this._5d();
            return i === e && (i = this._9m / 2, n = this._88 / 2),
            t != s && (this._2g = !0, this._l7b._7l(s, t)),
            this._hh._dy(t / this._if, i, n)
        },
        _5d: function () {
            return this._if * this._hh._if
        },
        _l8n: function (t, i) {
            this._hh._l8n(t, i)
        },
        _95: function (t, i, e) {
            var n = this._iy(),
            s = this._iz(),
            r = this._f8();
            return e && (e = Math[Ph](this._ds, Math.min(this._du, e))),
            t != n || i != s || e && e != r ? (e && e != r ? (e /= this._if, this._2g = !0)  : e = this._hh._if, t -= n * e, i -= s * e, this._hh._8z(e, t, i), this._l7b._2o(n, s, r, arguments[0], arguments[1], arguments[2]), r != arguments[2] && this._l7b._7l(r, arguments[2]), !0)  : !1
        },
        _66: function () {
            this._66Flag = !0
        },
        _f8: function () {
            return this._if * this._hh._if
        },
        _iy: function () {
            return this._l3 * this._hh._if + this._hh._l3
        },
        _iz: function () {
            return this._l1 * this._hh._if + this._hh._l1
        },
        _ho: function (t, e) {
            this._19 && this._49();
            var n = t._hr,
            s = n._ib || 1,
            r = n.clientWidth,
            h = n[Vf],
            a = this._9m != r,
            o = this._88 != h,
            f = a || o;
            f && t._topCanvas._hr._kmSize(this._9m, this._88);
            var _ = this._l3,
            c = this._l1,
            u = this._if;
            if (this._66Flag) {
                this._66Flag = !1;
                var d = t._21();
                d && this._l8m(d.cx, d.cy, d.scale)
            }
            if (this._2g || e || f)
            return this._2g = !1,
            this._if *= this._hh._if,
            this._l3 = this._l3 * this._hh._if + this._hh._l3,
            this._l1 = this._l1 * this._hh._if + this._hh._l1,
            this._hh._if = 1,
            this._hh._l3 = 0,
            this._hh._l1 = 0,
            f && n._kmSize(this._9m, this._88),
            t._9d._k9 = !0,
            this._2t(this._9m, this._88),
            (_ != this._l3 || c != this._l1 || u != this._if) && (t._2o(_, c, u, this._l3, this._l1, this._if), u != this._if && t._7l(u, this._if)),
            void 0;
            var l = this._hh._l3,
            v = this._hh._l1;
            if (l || v) {
                this._hh._l3 = 0,
                this._hh._l1 = 0,
                this._l3 += l,
                this._l1 += v,
                this._2t(r, h);
                var b = n._g;
                if (CL) {
                    var g = b.getImageData(0, 0, n.width, n.height);
                    b[Ah](g, l * s, v * s)
                } else {
                    var y = this._l7ackCanvas;
                    y || (y = this._l7ackCanvas = i[zs](Mh), y._g = y[__](da)),
                    y.width = n.width,
                    y[Fr] = n[Fr],
                    y._g.drawImage(n, l * s, v * s),
                    b._ii(),
                    b.drawImage(y, 0, 0)
                }
                t._20(l, v, r, h),
                t._2o(_, c, u, this._l3, this._l1, this._if)
            }
        },
        _98: function (t) {
            1 != t[Mh]._ib && t[ur](t[Mh]._ib, t[Mh]._ib),
            t.translate(this._l3, this._l1),
            t[ur](this._if, this._if)
        },
        _l6t: function (t) {
            return (t - this._l3) / this._if
        },
        _l6v: function (t) {
            return (t - this._l1) / this._if
        },
        _l8o: function (t) {
            return t * this._if + this._l3
        },
        _l8q: function (t) {
            return t * this._if + this._l1
        }
    };
    var WN = function () {
        this._e7 = [
        ],
        this._h1 = new JL
    };
    WN.prototype = {
        _ea: 20,
        _e7: null,
        _k9: !1,
        _h1: null,
        _ii: function () {
            this._k9 = !1,
            this._e7[Ps] = 0,
            this._h1[lr]()
        },
        _gf: function () {
            return this._k9 || this._e7.length > 0
        },
        _k5: function (t, i, e, n) {
            this._k9 || 0 >= e || 0 >= n || (this._e7[or]({
                x: t,
                y: i,
                width: e,
                height: n
            }), this._h1.addRect(t, i, e, n))
        },
        _e5: function (t) {
            this._k5(t.x, t.y, t[Gr], t.height)
        },
        _l8r: function (t, i, e, n) {
            if (!this._h1.intersectsRect(t, i, e, n))
            return !1;
            if (GL || this._e7[Ps] >= this._ea)
            return !0;
            for (var s, r = 0, h = this._e7.length; h > r; r++)
            if (s = this._e7[r], f(t, i, e, n, s.x, s.y, s[Gr], s[Fr]))
            return !0;
            return !1
        },
        _hp: function (t, i, e) {
            if (this._k9)
            return t[Xr](1, 0, 0, 1, 0, 0),
            t[Kr](0, 0, i[Gr], i[Fr]),
            void 0;
            t.beginPath();
            var n,
            s,
            r,
            h,
            a = e._if,
            o = this._e7,
            f = i._ib || 1;
            if (GL || o[Ps] >= this._ea)
            return n = e._l8o(this._h1.x) * f,
            s = e._l8q(this._h1.y) * f,
            r = qL.n0(n + this._h1[Gr] * a * f) - (n = qL.mn(n)),
            h = qL.n0(s + this._h1[Fr] * a * f) - (s = qL.mn(s)),
            t.clearRect(n, s, r, h),
            t[kl](n, s, r, h),
            t[xb](),
            void 0;
            for (var _, c = 0, u = o.length; u > c; c++)
            _ = o[c],
            n = e._l8o(_.x) * f,
            s = e._l8q(_.y) * f,
            r = qL.n0(n + _.width * a * f) - (n = qL.mn(n)),
            h = qL.n0(s + _[Fr] * a * f) - (s = qL.mn(s)),
            t[Kr](n, s, r, h),
            t.rect(n, s, r, h);
            t[xb]()
        }
    };
    var VN = {
    };
    VN[CN[lv]] = zL.SELECTION_COLOR,
    VN[CN[uv]] = zL.SELECTION_BORDER,
    VN[CN[dv]] = zL.SELECTION_SHADOW_BLUR,
    VN[CN.SELECTION_TYPE] = WC.SELECTION_TYPE_SHADOW,
    VN[CN[XO]] = zL.LABEL_COLOR,
    VN[CN[FE]] = tC.CENTER_BOTTOM,
    VN[CN.LABEL_ANCHOR_POSITION] = tC[ru],
    VN[CN.LABEL_PADDING] = new QL(0, 2),
    VN[CN[KE]] = 8,
    VN[CN[jw]] = 8,
    VN[CN.LABEL_POINTER] = !0,
    VN[CN[Gw]] = 0,
    VN[CN[om]] = nT,
    VN[CN.LABEL_ROTATABLE] = !0,
    VN[CN.LABEL_BACKGROUND_COLOR] = null,
    VN[CN[cm]] = null,
    VN[CN[Sm]] = KO,
    VN[CN[BT]] = 1.5,
    VN[CN[ZO]] = qL.n9(3438210798),
    VN[CN[lm]] = 1,
    VN[CN.GROUP_STROKE_STYLE] = nT,
    VN[CN[eO]] = !0,
    VN[CN[Km]] = zL.ARROW_SIZE,
    VN[CN[QT]] = zL[JO],
    VN[CN.EDGE_LOOPED_EXTAND] = 10,
    VN[CN.EDGE_CORNER_RADIUS] = 8,
    VN[CN[QO]] = WC[af],
    VN[CN.EDGE_SPLIT_BY_PERCENT] = !0,
    VN[CN.EDGE_EXTEND] = 20,
    VN[CN.EDGE_SPLIT_PERCENT] = 0.5,
    VN[CN[zo]] = 20,
    VN[CN[$m]] = 20,
    VN[CN[tP]] = tC[hu],
    VN[CN.EDGE_BUNDLE_LABEL_POSITION] = tC[ru],
    VN[CN.EDGE_BUNDLE_LABEL_COLOR] = iP,
    VN[CN[eE]] = 1,
    VN[CN.SHAPE_STROKE_STYLE] = eP,
    VN[CN[Sw]] = zL[mh],
    WC.NAVIGATION_SCROLLBAR = nP,
    WC[sP] = rP,
    WC.NAVIGATION_BUTTON = hP,
    zL.NAVIGATION_TYPE = WC[aP];
    var XN = function (t, e) {
        this._in = t,
        qL.n3(e) && (e = i[oP](e)),
        e && e[Gc] || (e = i[zs](Sf)),
        qL.lr(this, XN, [
            e
        ]),
        this._in._$m[Mu](this._14, this),
        this._in._4[Mu](this._1q, this),
        this._in._1p.addListener(this._8b, this),
        this._in._10.addListener(this._5u, this),
        this._in._$h[Mu](this._2v, this),
        this._in._$k[Mu](this._3i, this),
        this._9v = {
        },
        this._3q(zL.NAVIGATION_TYPE, !0)
    };
    XN.prototype = {
        _$d: null,
        _3i: function (t) {
            var i = t.source,
            e = t.data;
            if (e)
            if (this._91) {
                var n,
                s;
                if (qL.nh(e))
                for (var r = 0, h = e[Ps]; h > r; r++)
                s = e[r].id,
                n = this._kn[Lc](s),
                n && (n[fP] = i[Va](s), n[_P]());
                 else {
                    if (s = e.id, n = this._kn[Lc](s), !n)
                    return ;
                    n.selected = i.containsById(s),
                    n.invalidateRender()
                }
                this._l7d()
            } else {
                this._$d || (this._$d = {
                });
                var n,
                s;
                if (qL.nh(e))
                for (var r = 0, h = e[Ps]; h > r; r++)
                s = e[r].id,
                this._$d[s] = !0;
                 else
                s = e.id,
                this._$d[s] = !0
            }
        },
        _in: null,
        _l7s: function (t) {
            var i = t[Op];
            return i ? new i(t, this._in)  : void 0
        },
        _14: function () {
        },
        _1q: function (t) {
            if (!this._91)
            return !1;
            var i = t.source,
            e = t[A_];
            Op == e ? (this._kn.removeById(i.id), this._iw(i))  : _x == e && i instanceof AN && t.value && this._5i(i);
            var n = this._kn.getById(i.id);
            n && n._91 && n[cP](t) && this._l7d()
        },
        _3k: function (t) {
            var i = this._im(t);
            i && (i[gx](), this._l7d())
        },
        _8b: function (t) {
            if (!this._91)
            return !1;
            switch (this._9 = !0, t.kind) {
            case pC[Du]:
                this._iw(t.data);
                break;
            case pC.KIND_REMOVE:
                this._fm(t[ah]);
                break;
            case pC[ju]:
                this._gs(t[ah])
            }
        },
        _ii: function () {
            this._9v = {
            },
            qL.nc(this, XN, uP)
        },
        _9v: null,
        _iw: function (t) {
            var i = this._l7s(t);
            i && (this._kn[th](i), this._91 && (this._9v[t.id] = t), this._l7d())
        },
        _fm: function (t) {
            if (UC[Lo](t)) {
                for (var i, e = [
                ], n = 0, s = t.length; s > n; n++)
                i = t[n].id,
                e.push(i),
                delete this._9v[i];
                t = e
            } else
            t = t.id,
            delete this._9v[t];
            this._kn.remove(t) && this._l7d()
        },
        _gs: function () {
            this._ii()
        },
        _5u: function (t) {
            return this._91 ? (t.source instanceof PN && !this._9v[t.source.id] && (t[mu] && (this._3k(t[mu]), t[mu].__5r = !0), t[Ao] && (this._3k(t[Ao]), t[Ao].__5r = !0), this._5i(t[I_])), void 0)  : !1
        },
        _2v: function (t) {
            return this._91 ? (t[I_] instanceof PN && !this._9v[t[I_].id] && this._5i(t.source), void 0)  : !1
        },
        _9a: function (t) {
            return t ? this._$o()  : (this._8f(), void 0)
        },
        _2w: function (t) {
            if (t._edgeBundleInvalidateFlag) {
                var i = t[Za](!0);
                i ? i._e4(this._in)  : t._edgeBundleInvalidateFlag = !1
            }
        },
        _$o: function () {
            this._in;
            var t,
            i = this._in[dP],
            e = this._kn,
            n = [
            ],
            s = 1;
            if (i[lP](function (i) {
                return i instanceof ON ? (this._2w(i), n.push(i), void 0)  : (t = this._l7s(i), t && (e.add(t), t._gb = this._d7(i, !1, !0), i.__ij = s++), void 0)
            }, this), e[Ps])
            for (var r = e._i0, s = r[Ps] - 1; s >= 0; s--)
            t = r[s],
            t._gb && this._3m(t, t.$data);
            for (var h, s = 0, a = n[Ps]; a > s; s++)
            if (h = n[s], t = this._l7s(h))
            if (t._gb = this._d7(h, !0, !0), t._gb) {
                this._3m(t, h, !0),
                e[th](t);
                var o = h[Ja],
                f = h[Ka],
                _ = o.__ij || 0;
                o != f && (_ = Math[Ph](_, f.__ij || 0)),
                h.__ij = _
            } else
            e.add(t);
            if (n[Ps] && e._i0.sort(function (t, i) {
                return t.$data.__ij - i[na].__ij
            }), this._$d) {
                var c = i[hd];
                for (var u in this._$d)
                if (c[Va](u)) {
                    var t = e[Lc](u);
                    t && (t[fP] = !0)
                }
                this._$d = null
            }
        },
        _8f: function () {
            for (var t in this._9v) {
                var i = this._9v[t];
                i instanceof PN ? this._5i(i)  : this._5h(i)
            }
            this._9v = {
            };
            for (var e, n, s, r = this._kn._i0, h = [
            ], a = r.length - 1; a >= 0; a--)
            e = r[a],
            n = e.$data,
            s = n instanceof ON,
            s && this._2w(n),
            e._gb = this._d7(n, s),
            e._gb ? s ? h[or](e)  : this._3m(e, n) && !this._9 && (this._9 = !0)  : n.__gbChanged && e._91 && (e.__oldBounds = {
                x: e.$x + e.uiBounds.x,
                y: e.$y + e[Go].y,
                width: e.uiBounds[Gr],
                height: e[Go].height
            });
            if (h.length)
            for (var a = 0, o = h.length; o > a; a++)
            e = h[a],
            this._3m(e, e.$data) && !this._9 && (this._9 = !0)
        },
        _3m: function (t, i, n) {
            if (n || n === e && i instanceof ON)
            return i.__4n && (i.__4n = !1, t._4n()),
            this._l73(t);
            if (i.__5r && i instanceof AN && (t._53(), i.__5r = !1), this._l73(t)) {
                var s = this._3w(i);
                return s && (s.__5r = !0),
                i[Ep]() && i.forEachEdge(function (t) {
                    t.__4n = !0
                }, this),
                !0
            }
        },
        _2j: function (t, i) {
            var e = t[Ja],
            n = t[Ka],
            s = i.getIndexById(e.id);
            if (e == n)
            return s;
            var r = i.getIndexById(n.id);
            return Math[Ph](s, r)
        },
        _30: function (t, i) {
            var e = this.graphModel._ed(t);
            return e ? i.getIndexById(e.id)  : 0
        },
        _5i: function (t) {
            var i = this._kn,
            e = i.getById(t.id);
            if (!e)
            throw new Error(vP + t[Cf] + bP);
            var n = this._30(t, i),
            s = [
                e
            ];
            t.hasChildren() && qL.ma(t, function (t) {
                t instanceof PN && (e = i[Lc](t.id), e && s.push(e))
            }, this),
            this._3x(i, n, s)
        },
        _5h: function (t) {
            var i = this._kn.getById(t.id);
            if (i) {
                var e = this._2j(t, this._kn);
                this._kn.setIndexBefore(i, e)
            }
        },
        _3x: function (t, i, e) {
            function n(t) {
                s.add(t)
            }
            var s = new HL;
            qL.nj(e, function (e) {
                i = t.setIndexAfter(e, i),
                e[na][ro](n)
            }, this),
            0 != s[Ps] && s[ga](this._5h, this)
        },
        _7k: function (t) {
            return t[Za](!0)
        },
        _54: function (t) {
            if (!t.isBundleEnabled())
            return !1;
            var i = t[Za](!0);
            i && i.reverseExpanded() !== !1 && this._l7d()
        },
        _3w: function (t) {
            var i = re(t);
            return i && i[_x] ? i : null
        },
        _ew: function (t) {
            return re(t)
        },
        _2m: function (t, i, e) {
            t._$n = !1;
            var n = t._gb;
            t._gb = this._4q(t, i),
            e || t._gb == n || (t.__gbChanged = !0)
        },
        _4q: function (t, i) {
            return this._3o(t, i) ? !this._in._gbFilter || this._in._gbFilter(t) !== !1 : !1
        },
        _d7: function (t, i, e) {
            return t._$n && this._2m(t, i, e),
            t._gb
        },
        _3o: function (t, i) {
            if (t.visible === !1)
            return !1;
            if (i === e && (i = t instanceof ON), !i)
            return !t._l8x;
            var n = t[Ja],
            s = t.toAgent;
            if (!n || !s)
            return !1;
            if (n == s && !t.isLooped())
            return !1;
            if (t.isBundleEnabled()) {
                var r = t.getEdgeBundle(!0);
                if (r && !r._d7(t))
                return !1
            }
            var h = this._d7(n, !1),
            a = this._d7(s, !1);
            return h && a ? !0 : !1
        },
        _6q: null,
        _6p: null,
        _3q: function (t, i) {
            return i || t != this._6q ? (this._6q = t, this._6p && (this._6p._g9(), delete this._6p), t == WC[aP] ? (this._6p = new Hn(this, this._ks), void 0)  : t == WC[gP] ? (this._6p = new Yn(this, this._ks), void 0)  : void 0)  : !1
        },
        _2o: function (t, i, e, n, s, r) {
            this._in._4b(new _C(this._in, Rf, {
                tx: n,
                ty: s,
                scale: r
            }, {
                tx: t,
                ty: i,
                scale: e
            })),
            this._5q()
        },
        _7l: function (t, i) {
            this._in._4b(new _C(this._in, ur, i, t))
        },
        _5q: function () {
            this._6p && this._6p._ho(),
            this._in._4b(new _C(this._in, nh))
        },
        _12: function (t, i) {
            this._in._4b(new _C(this._in, yP, i, t)),
            this._5q()
        }
    },
    qL.nm(XN, Je),
    qL.ls(XN[Wa], {
        graphModel: {
            get: function () {
                return this._in._inModel
            }
        }
    });
    var KN = function (i, e) {
        this._$m = new bC,
        this._1p = new bC,
        this._4 = new bC,
        this._10 = new bC,
        this._$h = new bC,
        this._$k = new bC,
        this[dP] = e || new Fe,
        this._75 = new XN(this, i),
        this._2h = new bs(this),
        this._1h = new bC,
        this._onresize = qL.lt(t, pP, function () {
            this[xP]()
        }, !1, this);
        var n = this;
        this._75._ks[EP] = function (t) {
            n[EP](t)
        },
        this._75._ks.ondragover = function (t) {
            n.ondragover(t)
        }
    };
    KN[Wa] = {
        originAtCenter: !0,
        editable: !1,
        ondragover: function (t) {
            this[IO] && UC[mP](t)
        },
        ondrop: function (t) {
            if (this.editable) {
                var i,
                e,
                s,
                r,
                h = t[wP],
                a = h[ir](TP);
                if (a) {
                    var o = JSON.parse(a);
                    i = o[bb],
                    e = o[Ws],
                    s = o.label,
                    r = o[lx]
                } else
                i = h[ir](bb),
                e = h.getData(Ws),
                s = h[ir](ry),
                r = h[ir](lx);
                if (i || s) {
                    UC[mP](t);
                    var f = this.globalToLocal(t);
                    f = this[OP](f.x, f.y);
                    var _;
                    if (e && PP != e ? bx == e ? _ = this[IP](s, f.x, f.y)  : Zp == e ? _ = this[SP](s, f.x, f.y)  : AP == e ? (_ = this[MP](s, f.x, f.y), r && (r = Gn(r), r && (_[lx] = r)))  : (e = n(e), e instanceof Function && e.prototype instanceof PN && (_ = new e, _[Cf] = s, _[Gp] = new VL(f.x, f.y), this._inModel.add(_)))  : _ = this[kP](s, f.x, f.y), _) {
                        if (i && (i = Gn(i), i && (_[bb] = i)), t[py]) {
                            var c = this[er](t);
                            c instanceof AN && (_.parent = c)
                        }
                        this[LP](_, t, o);
                        var u = new vs(this, vs[CP], t, _);
                        return this[RP](u),
                        _
                    }
                }
            }
        },
        enableDoubleClickToOverview: !0,
        _75: null,
        _$m: null,
        _1p: null,
        _4: null,
        _$k: null,
        _10: null,
        _$h: null,
        _1u: function (t) {
            return this._$m.beforeEvent(t)
        },
        _4b: function (t) {
            this._$m[Pa](t)
        },
        isVisible: function (t) {
            return this._75._d7(t)
        },
        isMovable: function (t) {
            return t instanceof PN && t[NP] !== !1
        },
        isSelectable: function (t) {
            return t[DP] !== !1
        },
        isEditable: function (t) {
            return t[IO] !== !1
        },
        isRotatable: function (t) {
            return t[Fw] !== !1
        },
        isResizable: function (t) {
            return t.resizable !== !1
        },
        canLinkFrom: function (t) {
            return t.linkable !== !1
        },
        canLinkTo: function (t) {
            return t.linkable !== !1
        },
        createNode: function (t, i, e) {
            var n = new PN(t, i, e);
            return this._inModel[th](n),
            n
        },
        createText: function (t, i, e) {
            var n = new ze(t, i, e);
            return this._inModel.add(n),
            n
        },
        createShapeNode: function (t, i, e, n) {
            qL.n6(i) && (n = e, e = i, i = null);
            var s = new IN(t, i);
            return s[$p] = new VL(e, n),
            this._inModel[th](s),
            s
        },
        createGroup: function (t, i, e) {
            var n = new AN(t, i, e);
            return this._inModel[th](n),
            n
        },
        createEdge: function (t, i, e) {
            if (t instanceof PN) {
                var n = e;
                e = i,
                i = t,
                t = n
            }
            var s = new ON(i, e);
            return t && (s.$name = t),
            this._inModel[th](s),
            s
        },
        addElement: function (t) {
            this._inModel.add(t)
        },
        removeElement: function (t) {
            this._inModel.remove(t)
        },
        clear: function () {
            this._inModel[lr]()
        },
        getStyle: function (t, i) {
            var n = t._h2[i];
            return n !== e ? n : this._h2 && (n = this._h2[i], n !== e) ? n : VN[i]
        },
        translate: function (t, i, e) {
            return e ? this.translateTo(this.tx + t, this.ty + i, this[ur], e)  : this._75._l8n(t, i)
        },
        translateTo: function (t, i, e, n) {
            if (n) {
                var s = this._55();
                return s._is(t, i, e, n)
            }
            return this._75._95(t, i, e)
        },
        centerTo: function (t, i, e, n) {
            return (!e || 0 >= e) && (e = this.scale),
            this[BP](this[Gr] / 2 - t * e, this[Fr] / 2 - i * e, e, n)
        },
        moveToCenter: function (t, i) {
            this[jP](function () {
                var e = this.bounds;
                this[$P](e.cx, e.cy, t, i)
            }, this)
        },
        zoomToOverview: function (t) {
            return t ? this.callLater(function () {
                var i = this._75._21();
                i && this[$P](i.cx, i.cy, i.scale, t)
            }, this)  : (this._75._66(), void 0)
        },
        zoomAt: function (t, i, e, n) {
            if (n) {
                var s = this[ur];
                return t = s * t,
                t >= this[db] || t <= this.minScale ? !1 : (i = t * (this.tx - i) / s + i, e = t * (this.ty - e) / s + e, this.translateTo(i, e, t, n))
            }
            return this._75._hm(t, i, e)
        },
        zoomOut: function (t, i, e) {
            return this.zoomAt(1 / this.scaleStep, t, i, e)
        },
        zoomIn: function (t, i, e) {
            return this[GP](this.scaleStep, t, i, e)
        },
        _55: function () {
            return this._panAnimation || (this._panAnimation = new nD(this)),
            this._panAnimation
        },
        enableInertia: !0,
        _8q: function (t, i) {
            var e = this._55();
            return e._et(t || 0, i || 0)
        },
        getUI: function (t) {
            return s(t) ? this._75._39(t)  : this._75._im(t)
        },
        getUIByMouseEvent: function (t) {
            return this._75._39(t)
        },
        hitTest: function (t) {
            return this._75._fx(t)
        },
        globalToLocal: function (t) {
            return this._75._7s(t)
        },
        toCanvas: function (t, i) {
            return this._75._ev(t, i)
        },
        toLogical: function (t, i) {
            return s(t) ? this._75._$b(t)  : this._75._dc(t, i)
        },
        getElementByMouseEvent: function (t) {
            var i = this._75._39(t);
            return i ? i[na] : void 0
        },
        getElement: function (t) {
            if (s(t)) {
                var i = this._75._39(t);
                return i ? i.$data : null
            }
            return this._inModel[Lc](t)
        },
        invalidate: function () {
            this._75._l7d()
        },
        invalidateUI: function (t) {
            t[wp](),
            this[wp]()
        },
        invalidateElement: function (t) {
            this._75._3k(t)
        },
        getUIBounds: function (t) {
            return this._75._96(t)
        },
        forEachVisibleUI: function (t, i) {
            return this._75._3s(t, i)
        },
        forEachReverseVisibleUI: function (t, i) {
            return this._75._$r(t, i)
        },
        forEachUI: function (t, i) {
            return this._75._d8(t, i)
        },
        forEachReverseUI: function (t, i) {
            return this._75._3u(t, i)
        },
        forEach: function (t, i) {
            return this._inModel[ga](t, i)
        },
        getElementByName: function (t) {
            var i;
            return this._inModel[ga](function (e) {
                return e.name == t ? (i = e, !1)  : void 0
            }),
            i
        },
        focus: function (i) {
            if (i) {
                var e = t.scrollX || t.pageXOffset,
                n = t[FP] || t[h_];
                return this.html[qP](),
                t[zP](e, n),
                void 0
            }
            this[YP][qP]()
        },
        callLater: function (t, i, e) {
            this._75[jP](t, i, e)
        },
        exportImage: function (t, i) {
            return Kn(this, t, i)
        },
        setSelection: function (t) {
            return this._inModel._selectionModel[ia](t)
        },
        select: function (t) {
            return this._inModel._selectionModel[m_](t)
        },
        unselect: function (t) {
            return this._inModel._selectionModel.unselect(t)
        },
        reverseSelect: function (t) {
            return this._inModel._selectionModel.reverseSelect(t)
        },
        selectAll: function () {
            Vn(this)
        },
        unSelectAll: function () {
            this[hd].clear()
        },
        isSelected: function (t) {
            return this._inModel._selectionModel[Ef](t)
        },
        sendToTop: function (t) {
            oe(this._inModel, t)
        },
        sendToBottom: function (t) {
            fe(this._inModel, t)
        },
        moveElements: function (t, i, e) {
            var n = [
            ],
            s = new HL;
            return qL.nj(t, function (t) {
                t instanceof PN ? n[or](t)  : t instanceof ON && s[th](t)
            }),
            this._d0(n, i, e, s)
        },
        _d0: function (t, i, e, n) {
            if (0 == i && 0 == e || 0 == t[Ps] && 0 == n[Ps])
            return !1;
            if (0 != t[Ps]) {
                var s = this._4e(t);
                n = this._4c(s, n),
                qL.nj(s, function (t) {
                    var n = t[$p];
                    n ? t[HP](n.x + i, n.y + e)  : t[HP](i, e)
                })
            }
            return !0
        },
        _4c: function (t, i) {
            return i
        },
        _4e: function (t) {
            var i = new HL;
            return qL.nj(t, function (t) {
                !this[UP](t),
                i[th](t),
                he(t, i, this._movableFilter)
            }, this),
            i
        },
        reverseExpanded: function (t) {
            return this._75._54(t)
        },
        _2h: null,
        _1h: null,
        beforeInteractionEvent: function (t) {
            return this._1h.beforeEvent(t)
        },
        onInteractionEvent: function (t) {
            this._1h[Pa](t)
        },
        addCustomInteraction: function (t) {
            this._2h[WP](t)
        },
        enableWheelZoom: !0,
        enableTooltip: !0,
        getTooltip: function (t) {
            return t[VP] || t[Cf]
        },
        updateViewport: function () {
            this._75._35()
        },
        destroy: function () {
            this._4b(new _C(this, kd, !0, this._g9ed)),
            this._g9ed = !0,
            qL.lo(t, pP, this._onresize),
            qL.m4(this, XP),
            this._2h[kd](),
            this.graphModel = new Fe;
            var i = this.html;
            this._75._g9(),
            i && (i.innerHTML = '')
        },
        onPropertyChange: function (t, i, e) {
            this._$m.addListener(function (n) {
                n.kind == t && i.call(e, n)
            })
        },
        removeSelection: function () {
            var t = this[hd]._i0;
            return t && 0 != t.length ? (t = t.slice(), this._inModel[Z_](t), t)  : !1
        },
        removeSelectionByInteraction: function (t) {
            var i = this.selectionModel.datas;
            return i && 0 != i[Ps] ? (UC[ul](KP + i[Ps], function () {
                var i = this[ZP]();
                if (i) {
                    var e = new vs(this, vs.ELEMENT_REMOVED, t, i);
                    this.onInteractionEvent(e)
                }
            }, this), void 0)  : !1
        },
        createShapeByInteraction: function (t, i, e, n) {
            var s = new bR(i);
            i[Ps] > 2 && s[Dh]();
            var r = this[SP](JP, s, e, n);
            this[LP](r, t);
            var h = new vs(this, vs[CP], t, r);
            return this.onInteractionEvent(h),
            r
        },
        createLineByInteraction: function (t, i, e, n) {
            var s = new bR(i),
            r = this.createShapeNode(QP, s, e, n);
            r[xp](UC[tI][iI], null),
            r[xp](UC[tI][oE], null),
            r.setStyle(UC.Styles[lE], !0),
            this[LP](r, t);
            var h = new vs(this, vs[CP], t, r);
            return this.onInteractionEvent(h),
            r
        },
        createEdgeByInteraction: function (t, i, e, n) {
            var s = this[eI](nI, t, i);
            if (n)
            s._8p = n;
             else {
                var r = this[sI],
                h = this[mf];
                this[rI] && (r = this[rI][Op] || r, h = this.interactionProperties[mf] || h),
                r && (s[Op] = r),
                h && (s.edgeType = h)
            }
            this[LP](s, e);
            var a = new vs(this, vs[CP], e, s);
            return this[RP](a),
            s
        },
        onElementCreated: function () {
        },
        allowEmptyLabel: !1,
        startLabelEdit: function (t, i, e, n) {
            var s = this;
            e.startEdit(n.x, n.y, i[ah], this[Zo](t, CN[Rw]), function (e) {
                return s.onLabelEdit(t, i, e, i[Xa])
            })
        },
        onLabelEdit: function (t, i, e, n) {
            return e || this[hI] ? (ry == i[Cf] ? t.name = e : n._e0(i, e) === !1 && (i[ah] = e, this[aI](t)), void 0)  : (UC.alert(oI), !1)
        },
        setInteractionMode: function (t, i) {
            this[fI] = t,
            this.interactionProperties = i
        }
    },
    qL.ls(KN[Wa], {
        center: {
            get: function () {
                return this[OP](this[YP].clientWidth / 2, this[YP][Vf] / 2)
            }
        },
        visibleFilter: {
            get: function () {
                return this._gbFilter
            },
            set: function (t) {
                this._gbFilter = t,
                this[wp]()
            }
        },
        topCanvas: {
            get: function () {
                return this._75._topCanvas
            }
        },
        propertyChangeDispatcher: {
            get: function () {
                return this._$m
            }
        },
        listChangeDispatcher: {
            get: function () {
                return this._1p
            }
        },
        dataPropertyChangeDispatcher: {
            get: function () {
                return this._4
            }
        },
        selectionChangeDispatcher: {
            get: function () {
                return this._$k
            }
        },
        parentChangeDispatcher: {
            get: function () {
                return this._10
            }
        },
        childIndexChangeDispatcher: {
            get: function () {
                return this._$h
            }
        },
        bounds: {
            get: function () {
                return this._75._3y()
            }
        },
        interactionDispatcher: {
            get: function () {
                return this._1h
            }
        },
        cursor: {
            set: function (t) {
                this.html.style[_I] = t || this._2h[cI]
            },
            get: function () {
                return this[YP][Gs].cursor
            }
        },
        interactionMode: {
            get: function () {
                return this._2h._l8urrentMode
            },
            set: function (t) {
                this._2h[uI] = t
            }
        },
        scaleStep: {
            get: function () {
                return this._75._l8l
            },
            set: function (t) {
                this._75._l8l = t
            }
        },
        maxScale: {
            get: function () {
                return this._75._du
            },
            set: function (t) {
                this._75._du = t
            }
        },
        minScale: {
            get: function () {
                return this._75._ds
            },
            set: function (t) {
                this._75._ds = t
            }
        },
        scale: {
            get: function () {
                return this._75._if
            },
            set: function (t) {
                return this._75._if = t
            }
        },
        tx: {
            get: function () {
                return this._75._l3
            }
        },
        ty: {
            get: function () {
                return this._75._l1
            }
        },
        styles: {
            get: function () {
                return this._h2
            },
            set: function (t) {
                this._h2 = t
            }
        },
        selectionModel: {
            get: function () {
                return this._inModel._selectionModel
            }
        },
        graphModel: {
            get: function () {
                return this._inModel
            },
            set: function (t) {
                if (this._inModel == t)
                return !1;
                var i = this._inModel,
                e = new _C(this, dP, i, t);
                return this._1u(e) === !1 ? !1 : (null != i && (i[Ku].removeListener(this._1p, this), i.dataChangeDispatcher.removeListener(this._4, this), i[nd][Og](this._10, this), i.childIndexChangeDispatcher[Og](this._$h, this), i[dI].removeListener(this._$k, this)), this._inModel = t, this._inModel && (this._inModel[Ku][Mu](this._1p, this), this._inModel[Zu][Mu](this._4, this), this._inModel.parentChangeDispatcher.addListener(this._10, this), this._inModel[td][Mu](this._$h, this), this._inModel[dI].addListener(this._$k, this)), this._75 && this._75._ik(), this._4b(e), void 0)
            }
        },
        count: {
            get: function () {
                return this._inModel[Ps]
            }
        },
        width: {
            get: function () {
                return this[YP][VO]
            }
        },
        height: {
            get: function () {
                return this.html[Vf]
            }
        },
        viewportBounds: {
            get: function () {
                return this._75._6s
            }
        },
        html: {
            get: function () {
                return this._75._ks
            }
        },
        navigationType: {
            get: function () {
                return this._75._6q
            },
            set: function (t) {
                this._75._3q(t)
            }
        }
    }),
    YN[Iw](DN, _x, null, null, lI);
    var ZN = new We;
    ZN[Iw](DN, _x, null, null, lI),
    ZN[Iw](DN, ux, null, null, vI),
    ZN[Iw](DN, lx, null, null, vI),
    ZN[Iw](DN, cx, null, null, vI),
    ZN[Iw](DN, dx, null, null, vI),
    ZN.addBindingProperty(BN, CN[ZO], jT, Qv),
    ZN[Iw](BN, CN.GROUP_BACKGROUND_GRADIENT, jT, ib),
    ZN[Iw](BN, CN[lm], jT, oh),
    ZN.addBindingProperty(BN, CN[bI], jT, Vv),
    ZN[Iw](BN, CN[gI], jT, ra),
    ZN[Iw](BN, CN[gm], jT, ca),
    Fn[Wa] = {
        initialize: function () {
            qL.nc(this, Fn, Zw),
            this.checkBody()
        },
        _l65: function () {
            this._jk = new bR,
            this[jT] = new $N(this._jk),
            this.shape.layoutByPath = !1,
            this[Hw](this[jT], 0),
            this.body = this[jT]
        },
        checkBody: function () {
            return this[na][_x] ? (this._25 = !0, this[jT] ? (this[jT].visible = !0, this.body = this[jT])  : (this._l65(), ZN[Ww](this)), this[bb] && (this[bb][yI] = !1), void 0)  : (this.image ? (this.image[yI] = !0, this[eT] = this.image)  : this._9k(), this[jT] && (this[jT][yI] = !1), void 0)
        },
        _jk: null,
        _25: !0,
        _53: function () {
            this._1k = !0,
            this._25 = !0
        },
        doValidate: function () {
            if (this._25 && this[na][_x]) {
                if (this._25 = !1, this.shape.invalidateData(), this.$data.groupImage) {
                    this.shape[ah] = this[na][lx];
                    var t = this._27();
                    return this.shape[Tx] = t.x + t[Gr] / 2,
                    this.shape[Ox] = t.y + t[Fr] / 2,
                    this[jT][Up] = {
                        width: t[Gr],
                        height: t[Fr]
                    },
                    Ke[Wa].doValidate[tr](this)
                }
                this.shape.offsetX = 0,
                this[jT].offsetY = 0;
                var i = this._7g(this.$data[ux]);
                this._jk[lr](),
                i instanceof JL ? pe(this._jk, i.x, i.y, i[Gr], i[Fr], i.rx, i.ry)  : i instanceof K ? xe(this._jk, i)  : i instanceof Z && Ee(this._jk, i),
                this._jk._5r = !0,
                this[jT].invalidateData()
            }
            return Ke[Wa].doValidate[tr](this)
        },
        _6r: function (t, i, e) {
            switch (t) {
            case WC[pI]:
                return new K(0, 0, Math[Ph](i, e) / 2);
            case WC.GROUP_TYPE_ELLIPSE:
                return new Z(0, 0, i, e);
            default:
                return new JL( - i / 2, - e / 2, i, e)
            }
        },
        _27: function () {
            return this._7g(null)
        },
        _7g: function (t) {
            var i = this.data,
            e = i.padding,
            n = i.minSize,
            s = 60,
            r = 60;
            if (n && (s = n[Gr], r = n[Fr]), !i.hasChildren())
            return this._6r(t, s, r);
            var h,
            a = this[na]._dq._i0;
            (t == WC[pI] || t == WC[xI]) && (h = [
            ]);
            for (var o, f, _, c, u = new JL, d = 0, l = a[Ps]; l > d; d++) {
                var v = a[d];
                if (this[lf].isVisible(v)) {
                    var b = this[lf][nr](v);
                    b && (o = b.$x + b._do.x, f = b.$y + b._do.y, _ = b._do[Gr], c = b._do[Fr], u[iT](o, f, _, c), h && (h.push({
                        x: o,
                        y: f
                    }), h.push({
                        x: o + _,
                        y: f
                    }), h[or]({
                        x: o + _,
                        y: f + c
                    }), h[or]({
                        x: o,
                        y: f + c
                    })))
                }
            }
            e && u.grow(e);
            var g,
            y,
            p = this.$data.$location;
            p[EI] ? (p.invalidateFlag = !1, g = u.cx, y = u.cy, p.x = g, p.y = y)  : (g = p.x, y = p.y);
            var x;
            if (t == WC.GROUP_TYPE_CIRCLE) {
                x = J(h),
                x.cx -= g,
                x.cy -= y;
                var E = Math[Ph](s, r) / 2;
                return x.r < E && (x.cx += E - x.r, x.cy += E - x.r, x.r = E),
                x
            }
            return t == WC.GROUP_TYPE_ELLIPSE ? (x = Q(h, u), x.cx -= g, x.cy -= y, x.width < s && (x.cx += (s - x.width) / 2, x[Gr] = s), x[Fr] < r && (x.cy += (r - x[Fr]) / 2, x.height = r), x)  : (x = u, u.width < s && (u[Gr] = s), u[Fr] < r && (u[Fr] = r), u[Gx]( - g, - y), x)
        },
        _$t: function (t, i, e) {
            if (!this.$data[_x])
            return qL.nc(this, Fn, mI, arguments);
            var n = this._l6q[Yw](this, t, i, e);
            return n = NN.onBindingPropertyChange(this, t, i, e) || n,
            n = YN.onBindingPropertyChange(this, t, i, e) || n,
            ZN[Yw](this, t, i, e) || n
        }
    },
    qL.nm(Fn, Ke);
    var JN = {
        draw: function () {
        }
    };
    zL.NAVIGATION_IMAGE_LEFT = wI,
    zL.NAVIGATION_IMAGE_TOP = TI;
    var QN = {
        position: Ff,
        'text-align': pf
    },
    tD = {
        padding: OI,
        transition: PI
    },
    iD = {
        position: II,
        display: SI
    };
    SC._g7(AI, 'opacity:0.7;vertical-align:middle;'),
    SC._g7('.Q-Graph-Nav img:hover,img.hover', MI),
    NL || (SC._g7(kI, LI + SC._kp(CI) + RI), SC._g7(NI, DI + SC._kp(CI) + BI)),
    Yn[Wa] = {
        _l77: function (t, i) {
            return t._gb == i ? !1 : (t._gb = i, t.style.display = i ? 'block' : Gf, void 0)
        },
        _37: function (t, i) {
            var e = i / 2 - this._left._img.clientHeight / 2 + Wr;
            this._left._img[Gs][zf] = e,
            this._right._img[Gs][zf] = e,
            this._navPane.style[Gr] = t + Wr,
            this._navPane.style.height = i + Wr
        },
        _8a: function (t, i, e, n) {
            this._l77(this._top, t),
            this._l77(this._left, i),
            this._l77(this._l7ottom, e),
            this._l77(this._right, n)
        },
        _g9: function () {
            var t = this._navPane[op];
            t && t[ed](this._navPane)
        },
        _ho: function () {
            var t = this._l7b._in;
            if (t) {
                var i = t[jI],
                e = t[nh],
                n = i.y > e.y + 1,
                s = i.x > e.x + 1,
                r = i[Cs] < e.bottom - 1,
                h = i[Ls] < e[Ls] - 1;
                this._8a(n, s, r, h)
            }
        }
    },
    SC._g7($I, GI),
    SC._g7('.Q-Graph-ScrollBar:hover', FI),
    SC._g7('.Q-Graph-ScrollBar--V', 'width: 10px;right: 0px;'),
    SC._g7('.Q-Graph-ScrollBar--H', 'height: 10px;bottom: 0px;'),
    SC._g7('.Q-Graph-ScrollBar--V.Both', qI),
    SC._g7('.Q-Graph-ScrollBar--H.Both', zI),
    NL || (SC._g7(YI, LI + SC._kp(CI) + HI), SC._g7('.Q-Graph-ScrollPane:hover', DI + SC._kp(CI) + ':opacity 0.3s linear;')),
    Hn.prototype = {
        _g9: function () {
            this._verticalDragSupport._g9(),
            this._horizontalDragSupport._g9(),
            delete this._verticalDragSupport,
            delete this._horizontalDragSupport,
            this._jn[op] && this._jn[op][ed](this._jn)
        },
        _jn: null,
        _l66: null,
        _7c: null,
        init: function (t) {
            var e = i.createElement(Sf);
            e[Af] = UI,
            SC._kq(e, {
                width: qf,
                height: qf,
                position: II
            });
            var n = i[zs](Sf);
            n[Af] = 'Q-Graph-ScrollBar Q-Graph-ScrollBar--V';
            var s = i.createElement(Sf);
            s.className = 'Q-Graph-ScrollBar Q-Graph-ScrollBar--H',
            e[Hs](n),
            e[Hs](s),
            t[Hs](e),
            this._jn = e,
            this._7c = s,
            this._l66 = n,
            s.isH = !0;
            var r = this,
            h = {
                ondrag: function (t, i) {
                    var e = r._l7b._in;
                    if (e) {
                        var n = i[WI],
                        s = n ? t.dx : t.dy;
                        if (s && i[ur]) {
                            var h = e[ur] / i.scale;
                            n ? e[lb]( - h * s, 0)  : e[lb](0, - h * s),
                            UC.stopEvent(t)
                        }
                    }
                },
                enddrag: function (t, i) {
                    var e = r._l7b._in;
                    if (e) {
                        var n = i[WI],
                        s = n ? t.vx : t.vy;
                        if (Math[Rs](s) > 0.1) {
                            var h = e.scale / i[ur];
                            s *= h,
                            n ? e._8q( - s, 0)  : e._8q(0, - s)
                        }
                    }
                }
            };
            this._verticalDragSupport = new w(n, h),
            this._horizontalDragSupport = new w(s, h)
        },
        _ho: function () {
            var t = this._l7b._in;
            if (t) {
                var i = t[jI],
                e = t[nh],
                n = t[Gr],
                s = t.height,
                r = t[ur],
                h = 1 / r,
                a = i.x > e.x + h || i.right < e[Ls] - h,
                o = i.y > e.y + h || i[Cs] < e.bottom - h,
                f = a && o,
                _ = 10;
                f ? (this._l66[Us].add(VI), this._7c.classList[th](VI))  : (this._l66[Us][Z_](VI), this._7c.classList[Z_](VI)),
                this._45(a, i, e, f ? n - _ : n),
                this._47(o, i, e, f ? s - _ : s)
            }
        },
        _45: function (t, i, e, n) {
            if (!t)
            return this._7c[Gs][np] = Gf,
            this._7c.scale = 0,
            void 0;
            var s = Math.min(i.x, e.x),
            r = Math[Ph](i[Ls], e.right),
            h = r - s,
            a = n / h;
            this._7c[ur] = a,
            this._7c[Gs][$f] = parseInt((i.x - s) * a) + Wr,
            this._7c[Gs].right = parseInt((r - i[Ls]) * a) + Wr,
            this._7c.style.display = ''
        },
        _47: function (t, i, e, n) {
            if (!t)
            return this._l66.style[np] = Gf,
            this._l66.scale = 0,
            void 0;
            var s = Math[Qr](i.y, e.y),
            r = Math.max(i.bottom, e[Cs]),
            h = r - s,
            a = n / h;
            this._l66.scale = a,
            this._l66[Gs][zf] = parseInt((i.y - s) * a) + Wr,
            this._l66[Gs].bottom = parseInt((r - i.bottom) * a) + Wr,
            this._l66[Gs][np] = ''
        }
    };
    var eD = new We;
    eD.addBindingProperty(DN, Gp),
    eD[Iw](DN, uh, null, uh),
    eD[Iw](BN, CN.BACKGROUND_COLOR, null, Ax),
    eD.addBindingProperty(BN, CN.BACKGROUND_GRADIENT, null, Vh),
    eD[Iw](BN, CN[PE], null, dx),
    eD.addBindingProperty(BN, CN[CO], null, vl),
    eD.addBindingProperty(BN, CN[vv], null, $w),
    eD[Iw](BN, CN.BORDER_COLOR, null, Ix),
    eD.addBindingProperty(BN, CN[wE], null, Sx),
    eD[Iw](BN, CN[RO], null, NO),
    eD[Iw](DN, Lp, null, null, XI),
    eD[Iw](DN, Kp, bb, ah),
    eD[Iw](DN, Up, bb, Up),
    eD[Iw](BN, CN[eE], bb, oh),
    eD.addBindingProperty(BN, CN.SHAPE_STROKE_STYLE, bb, Vv),
    eD.addBindingProperty(BN, CN.SHAPE_OUTLINE, bb, _T),
    eD.addBindingProperty(BN, CN.SHAPE_OUTLINE_STYLE, bb, Jv),
    eD.addBindingProperty(BN, CN.SHAPE_FILL_COLOR, bb, Qv),
    eD.addBindingProperty(BN, CN[oE], bb, ib),
    eD.addBindingProperty(BN, CN[$O], bb, ra),
    eD.addBindingProperty(BN, CN.SHAPE_LINE_DASH_OFFSET, bb, ca),
    eD[Iw](BN, CN[KI], bb, Xv),
    eD[Iw](BN, CN[GT], bb, Kv),
    eD.addBindingProperty(BN, CN[lE], bb, ea),
    eD[Iw](BN, CN.IMAGE_BACKGROUND_COLOR, bb, Ax),
    eD[Iw](BN, CN[SE], bb, Vh),
    eD.addBindingProperty(BN, CN.IMAGE_PADDING, bb, dx),
    eD.addBindingProperty(BN, CN[AE], bb, vl),
    eD.addBindingProperty(BN, CN.IMAGE_BORDER_RADIUS, bb, $w),
    eD[Iw](BN, CN.IMAGE_BORDER_COLOR, bb, Ix),
    eD.addBindingProperty(BN, CN.IMAGE_BORDER_LINE_DASH, bb, Sx),
    eD.addBindingProperty(BN, CN[CE], bb, NO),
    eD[Iw](BN, CN.ARROW_FROM, bb, FT),
    eD[Iw](BN, CN[Km], bb, qT),
    eD[Iw](BN, CN.ARROW_FROM_OFFSET, bb, zT),
    eD[Iw](BN, CN.ARROW_FROM_STROKE, bb, YT),
    eD[Iw](BN, CN.ARROW_FROM_STROKE_STYLE, bb, HT),
    eD[Iw](BN, CN.ARROW_FROM_FILL_COLOR, bb, WT),
    eD[Iw](BN, CN[ow], bb, 'fromArrowFillGradient'),
    eD.addBindingProperty(BN, CN.ARROW_FROM_LINE_DASH, bb, XT),
    eD[Iw](BN, CN.ARROW_FROM_LINE_DASH_OFFSET, bb, 'fromArrowLineDashOffset'),
    eD[Iw](BN, CN[KT], bb, ZT),
    eD[Iw](BN, CN[fw], bb, JT),
    eD.addBindingProperty(BN, CN[QT], bb, tO),
    eD.addBindingProperty(BN, CN[lw], bb, iO),
    eD[Iw](BN, CN.ARROW_TO, bb, nO),
    eD[Iw](BN, CN[bw], bb, sO),
    eD[Iw](BN, CN[yw], bb, rO),
    eD[Iw](BN, CN[fO], bb, _O),
    eD[Iw](BN, CN.ARROW_TO_FILL_GRADIENT, bb, ET),
    eD[Iw](BN, CN.ARROW_TO_LINE_DASH, bb, cO),
    eD.addBindingProperty(BN, CN.ARROW_TO_LINE_DASH_OFFSET, bb, 'toArrowLineDashOffset'),
    eD[Iw](BN, CN[ZI], bb, uO),
    eD[Iw](BN, CN[Tw], bb, dO),
    Un[Wa] = {
        shape: null,
        initialize: function () {
            qL.nc(this, Un, Zw),
            this._9k(),
            eD.initBindingProperties(this)
        },
        _9k: function () {
            this[bb] = new FN(this[na][Kp]),
            this.addChild(this[bb], 0),
            this.body = this[bb]
        },
        invalidateShape: function () {
            this.image.invalidateData(),
            this[_P]()
        },
        _$t: function (t, i, e) {
            var n = this._l6q[Yw](this, t, i, e);
            return n = NN[Yw](this, t, i, e) || n,
            eD[Yw](this, t, i, e) || n
        },
        doValidate: function () {
            this[eT] && (this.body[Bh] = null != this._2k, this[eT].anchorPosition = this._2k);
            var t = this[na].$location,
            i = 0,
            e = 0;
            t && (i = t.x, e = t.y);
            var n = this.$x != i || this.$y != e;
            return this.$x = i,
            this.$y = e,
            jN.prototype.doValidate[tr](this) || n
        }
    },
    qL.nm(Un, jN),
    qL.ls(Un[Wa], {
        length: {
            get: function () {
                return this[ah][Ps]
            }
        }
    }),
    Wn[Wa] = {
        _kd: function () {
            this._hr.style.visibility = yI
        },
        _h9: function () {
            this._hr.style[JI] = jf
        },
        _ii: function () {
            this._85[lr](),
            this._l7d()
        },
        addDrawable: function (t, i) {
            if (i) {
                var e = {
                    id: ++FL,
                    drawable: t,
                    scope: i
                };
                return this._85.add(e),
                e
            }
            return t.id || (t.id = ++FL),
            this._85[th](t),
            t
        },
        removeDrawable: function (t) {
            return t.id ? (this._85[Z_](t), void 0)  : this._85[Cc](t)
        },
        _85: null,
        invalidate: function () {
            this._l7d()
        },
        _l7d: function () {
            this._l7b._5r || this._ha()
        },
        _ha: function () {
            SC._hc(this._hr, Rf, '');
            var t = this._l7b._if,
            i = this._g;
            i.setTransform(1, 0, 0, 1, 0, 0),
            i[Kr](0, 0, this._hr.width, this._hr[Fr]),
            i[Vr](),
            this._l7b._hh._98(i);
            for (var e = this._85._i0, n = 0, s = e.length; s > n; n++)
            i[Vr](),
            i[nb](),
            this._fg(i, e[n], t),
            i[Lh]();
            i[Lh]()
        },
        _fg: function (t, i, e) {
            return i instanceof Function ? (i(t, e), void 0)  : (i.drawable instanceof Function && i[dc] && i[QI].call(i.scope, t, e), void 0)
        }
    },
    zL[Jf] = !0;
    var nD = function (t) {
        this._in = t
    };
    zL[tS] = 600,
    zL.ANIMATION_TYPE = qC.easeOut,
    nD[Wa] = {
        _in: null,
        _l6: 0.001,
        _dg: null,
        _l71: function (t) {
            return t > 1 ? 1 : - 1 > t ? - 1 : t
        },
        _et: function (t, i) {
            t *= 0.6,
            i *= 0.6,
            t = this._l71(t),
            i = this._l71(i),
            this._jo();
            var e = Math.sqrt(t * t + i * i);
            if (0.01 > e)
            return !1;
            var n = Math.min(zL[tS], e / this._l6);
            this._speedX = t,
            this._speedY = i,
            this._l6X = t / n,
            this._l6Y = i / n,
            this._dg = new YC(this._5b, this, n, qC.easeOutStrong),
            this._dg._jh()
        },
        _5b: function (t, i) {
            if (0 != t) {
                var e = this._speedX * i - 0.5 * this._l6X * i * i,
                n = this._speedY * i - 0.5 * this._l6Y * i * i;
                this._speedX -= this._l6X * i,
                this._speedY -= this._l6Y * i,
                this._in.translate(e, n)
            }
        },
        _jo: function () {
            this._dg && this._dg._jo()
        },
        _gw: function (t) {
            var i = this._fromTX + (this._toTX - this._fromTX) * t,
            e = this._fromTY + (this._toTY - this._fromTY) * t,
            n = this._fromScale + (this._toScale - this._fromScale) * t;
            this._in[BP](i, e, n)
        },
        _is: function (t, i, e, n) {
            var s = this._in,
            r = s.scale;
            if (0 >= e && (e = r), this._jo(), t != s.tx || i != s.ty || e != r) {
                var h,
                a,
                o;
                n instanceof Object && (h = n.duration, a = n.maxTime, o = n.animationType);
                var f = s.tx,
                _ = s.ty;
                if (!h) {
                    var c = XL(t, i, f, _);
                    if (h = c / 2, e != r) {
                        var u = e > r ? e / r : r / e;
                        h = Math.max(h, 50 * u)
                    }
                }
                a = a || zL.ANIMATION_MAXTIME,
                o = o || zL[iS],
                h = Math[Qr](a, h),
                this._fromTX = f,
                this._fromTY = _,
                this._fromScale = r,
                this._toTX = t,
                this._toTY = i,
                this._toScale = e,
                this._dg = new YC(this._gw, this, h, o),
                this._dg._jh()
            }
        }
    },
    zL.INTERACTION_HANDLER_SIZE_TOUCH = 8,
    zL.INTERACTION_HANDLER_SIZE_DESKTOP = 4,
    zL[eS] = 30,
    zL[nS] = 20;
    var sD = Math.PI / 4;
    Zn[Wa] = {
        onElementRemoved: function (t, i) {
            this.element && (t == this.element || qL.nh(t) && h(t, this.element)) && this[kd](i)
        },
        onClear: function (t) {
            this.element && this[kd](t)
        },
        destroy: function () {
            delete this[sS],
            this[rS]()
        },
        invalidate: function () {
            this[n_][wp]()
        },
        removeDrawable: function () {
            this._enId && (this[n_][rS](this._enId), delete this._enId, this.invalidate())
        },
        addDrawable: function () {
            this._enId || (this._enId = this[n_].addDrawable(this[hS], this) .id, this.invalidate())
        },
        doDraw: function () {
        },
        escapable: !0,
        onkeydown: function (t, i) {
            this.escapable && 27 == t[aS] && (qL.mp(t), this[kd](i))
        }
    },
    UC.ResizeInteraction = cs,
    Jn[Wa] = {
        defaultCursor: s_,
        getInteractionInstances: function (t) {
            if (!this[oS])
            return null;
            for (var i = [
            ], e = 0, n = this[oS].length; n > e; e++) {
                var s = this[oS][e];
                s instanceof Function ? i[or](new s(t))  : s instanceof Object && i.push(s)
            }
            return i
        }
    },
    Qn.prototype = {
        _l8b: null,
        _h8: null,
        destroy: function () {
            qL.nc(this, Qn, kd, arguments),
            delete this._h8,
            delete this._8x,
            delete this._l8b
        },
        doDraw: function (t) {
            var i = this.points;
            i && (i.forEach(function (i) {
                this[fS](t, i)
            }, this), this.styleDraw(t))
        },
        styleDraw: function (t) {
            var i = ts(this[lf].interactionProperties, this[_S]());
            i.lineWidth && (t.lineWidth = i.lineWidth, i.lineCap && (t.lineCap = i[Xv]), i.lineJoin && (t.lineJoin = i[Kv]), i[ra] && (t[ra] = i[ra], t.lineDashOffset = i.lineDashOffset || 0), t[Vv] = i[Vv], t[hh]()),
            i[pb] && (t.fillStyle = i[pb], t.fill())
        },
        drawPoint: function (t, i, e) {
            if (e)
            return t[fo](i.x, i.y),
            void 0;
            if (UC[Lo](i)) {
                var n = i[0],
                s = i[1];
                t.quadraticCurveTo(n.x, n.y, s.x, s.y)
            } else
            t[ao](i.x, i.y)
        },
        _dx: function (t) {
            this._h8 || (this._h8 = [
            ], this.addDrawable()),
            this._h8.push(t),
            this[wp]()
        }
    },
    qL.ls(Qn[Wa], {
        currentPoint: {
            get: function () {
                return this._8x
            },
            set: function (t) {
                this._8x = t,
                this[wp]()
            }
        },
        points: {
            get: function () {
                return this._8x && this._h8 && this._h8[Ps] ? this._h8[ch](this._8x)  : void 0
            }
        }
    }),
    qL.nm(Qn, Zn),
    is[Wa] = {
        destroy: function () {
            qL.nc(this, is, kd, arguments),
            delete this.start
        },
        doDraw: function (t, i) {
            return this._h8 ? this._h8.length <= 1 ? ss[Wa][hS][tr](this, t, i)  : (qL.nc(this, is, hS, arguments), void 0)  : void 0
        },
        ondblclick: function (t, i) {
            this[kd](i)
        },
        finish: function (t, i, e) {
            var n;
            this._h8 && this._h8[Ps] >= 2 && (this._h8.shift(), n = new HL, qL.nj(this._h8, function (t) {
                if (UC[Lo](t)) {
                    var i = t[0],
                    e = t[1];
                    n.add(new lR(WC[cS], [
                        i.x,
                        i.y,
                        e.x,
                        e.y
                    ]))
                } else
                n[th](new lR(WC[uS], [
                    t.x,
                    t.y
                ]))
            }, this)),
            i.createEdgeByInteraction(this.start, e, t, n),
            this.destroy(i)
        },
        onstart: function (t, i) {
            var e = t.getData(),
            n = e instanceof PN;
            return this[dS] ? n ? (this[lS](t, i, e), void 0)  : (this._dx(i[OP](t)), void 0)  : (n && (this.start = e, this._dx(i.toLogical(t))), void 0)
        },
        onmousemove: function (t, i) {
            this[dS] && (this.currentPoint = i[OP](t))
        },
        startdrag: function (t) {
            this.start && (t[vS] = !0)
        },
        ondrag: function (t, i) {
            this.start && (this[bS] = i[OP](t))
        },
        enddrag: function (t, i) {
            if (this[dS]) {
                var e = t.getData();
                e instanceof PN && this[lS](t, i, e)
            }
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: VN[CN[BT]],
                strokeStyle: VN[CN[Sm]]
            }
        }
    },
    qL.nm(is, Qn),
    es[Wa] = {
        getDefaultDrawStyles: function () {
            return {
                lineWidth: VN[CN[eE]],
                strokeStyle: VN[CN.SHAPE_STROKE_STYLE],
                fillStyle: VN[CN.SHAPE_FILL_COLOR]
            }
        },
        finish: function (t, i) {
            if (this._h8 && this._h8[Ps]) {
                var e = this._h8,
                n = 0,
                s = 0,
                r = 0;
                e[ga](function (t) {
                    return UC[Lo](t) ? (t[ga](function () {
                        n += t.x,
                        s += t.y,
                        r++
                    }), void 0)  : (n += t.x, s += t.y, r++, void 0)
                }),
                n /= r,
                s /= r;
                var h = [
                ];
                e.forEach(function (t, i) {
                    if (0 == i)
                    return h[or](new lR(WC[$v], [
                        t.x - n,
                        t.y - s
                    ])),
                    void 0;
                    if (UC.isArray(t)) {
                        var e = t[0],
                        r = t[1];
                        h.push(new lR(WC.SEGMENT_QUAD_TO, [
                            e.x - n,
                            e.y - s,
                            r.x - n,
                            r.y - s
                        ]))
                    } else
                    h.push(new lR(WC[uS], [
                        t.x - n,
                        t.y - s
                    ]))
                }),
                this.createElement(t, h, n, s),
                this[kd](i)
            }
        },
        startdrag: function (t) {
            t[vS] = !0
        },
        createElement: function (t, i, e, n) {
            return this[lf].createShapeByInteraction(t, i, e, n)
        },
        onstart: function (t, i) {
            var e = i[OP](t);
            this._l8b = e,
            this._dx(e)
        },
        onmousemove: function (t, i) {
            this._l8b && (this.currentPoint = i.toLogical(t))
        },
        ondblclick: function (t, i) {
            if (this._l8b) {
                if (this._h8[Ps] < 3)
                return this.destroy(i),
                void 0;
                delete this._h8[this._h8[Ps] - 1],
                this[lS](t, i)
            }
        }
    },
    qL.nm(es, Qn),
    UC.CreateShapeInteraction = es,
    ns.prototype = {
        createElement: function (t, i, e, n) {
            return this[lf][gS](t, i, e, n)
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: VN[CN.SHAPE_STROKE],
                strokeStyle: VN[CN[yS]]
            }
        }
    },
    qL.nm(ns, es),
    UC.CreateLineInteraction = ns,
    ss.prototype = {
        destroy: function (t) {
            qL.nc(this, ss, kd, arguments),
            t[_I] = '',
            this.start = null
        },
        doDraw: function (t) {
            if (this.start && this.currentPoint) {
                var i,
                e;
                this[lf].interactionProperties && (i = this[lf].interactionProperties.uiClass, e = this.graph.interactionProperties[mf]),
                i = i || this.graph.edgeUIClass || UC[pS],
                e = e || this[lf].edgeType;
                var n = i.drawReferenceLine || UC[pS].drawReferenceLine;
                n(t, this.start, this.currentPoint, e),
                this.styleDraw(t)
            }
        },
        canLinkFrom: function (t, i) {
            return t instanceof PN && i[xS](t)
        },
        canLinkTo: function (t, i) {
            return t instanceof PN && i[ES](t, this.start)
        },
        startdrag: function (t, i) {
            var e = t[ir]();
            this[xS](e, i) && (t.responded = !0, this[dS] = e, i[_I] = zd, this.addDrawable())
        },
        ondrag: function (t, i) {
            this[dS] && (UC[mP](t), this.currentPoint = i[OP](t), this.invalidate())
        },
        enddrag: function (t, i) {
            if (this[dS]) {
                this[wp]();
                var e = t[ir]();
                this.canLinkTo(e, i) && i[mS](this[dS], e, t),
                this.destroy(i)
            }
        },
        getDefaultDrawStyles: function () {
            return {
                lineWidth: VN[CN[BT]],
                strokeStyle: VN[CN[Sm]]
            }
        }
    },
    qL.nm(ss, Qn),
    UC[wS] = ss,
    fs.prototype = {
        html: null,
        createHTML: function () {
            var t = i.createElement(TS);
            t.className = OS,
            t[Gs][kv] = Ff,
            t.style[oT] = pf,
            t.style.border = PS,
            t[Gs][dx] = IS,
            t[Gs][SS] = '0px 0px 10px rgba(40, 85, 184, 0.75)',
            t[Gs][np] = Gf;
            var e = this;
            return t[AS] = function (t) {
                e.onValueChange(t)
            },
            t[MS] = function (t) {
                return 27 == t.keyCode ? (e[kS](), void 0)  : void 0
            },
            t[LS] = function (i) {
                if (13 == i[aS]) {
                    if (i.preventDefault(), i[CS])
                    return os(t, Da),
                    e[RS](i),
                    void 0;
                    e[NS]()
                }
            },
            i[eT].appendChild(t),
            t
        },
        setText: function (t, i) {
            this[YP][Ao] = t || '',
            i && (this[YP].style[u_] = i),
            this[YP][m_](),
            this[DS](this[YP])
        },
        onSizeChange: function (t) {
            t[o_],
            t.offsetHeight;
            var i = as(t);
            return t.style.width = i.width + 30 + Wr,
            t.style.height = i.height + 10 + Wr,
            i
        },
        onValueChange: function (t) {
            var i = t[sp];
            this[DS](i),
            i[Gs][$f] = i.x - i.offsetWidth / 2 + Wr
        },
        startEdit: function (i, e, n, s, r) {
            if (this[YP] || (this.html = this[BS]()), !this.stopEditWhenClickOnWindow) {
                var h = this;
                this[jS] = function (t) {
                    t.target != h[YP] && h.cancelEdit()
                }
            }
            t.addEventListener($S, this.stopEditWhenClickOnWindow, !0),
            this.callback = r,
            this[YP].x = i,
            this.html.y = e,
            this.html.style.display = SI,
            this[GS](n, s || 10),
            hs(this[YP], i, e),
            this.html.focus()
        },
        isEditing: function () {
            return Gf != this.html[Gs][np]
        },
        cancelEdit: function () {
            this[NS](!0)
        },
        stopEdit: function (i) {
            if (this[FS]()) {
                t[qS]($S, this[jS]);
                var e = this[YP].value;
                if (!i && this[No] && this[No](e) === !1)
                return !1;
                this[YP][Gs].display = Gf,
                this[YP].value = null,
                this[No] = null
            }
        },
        destroy: function () {
            this[YP] && i.body[ed](this[YP])
        }
    },
    UC.LabelEditor = fs;
    var rD = function (t) {
        this[lf] = t
    };
    rD.prototype = {
        destroy: function (t) {
            t[zS] && (t[zS].destroy(), delete t[zS])
        },
        ondblclick: function (t, i) {
            var e = t[ir]();
            if (!e)
            return i[YS] && i.zoomToOverview(zL.ZOOM_ANIMATE),
            void 0;
            if (i.editable && i.isEditable(e)) {
                var n = i[HS](t);
                if (n instanceof GN && n[IO] !== !1) {
                    var s = i[zS];
                    s || (i[zS] = s = new fs);
                    var r = n.getBounds();
                    return r = i.toCanvas(r.x + r.width / 2, r.y + r[Fr] / 2),
                    r = rs(r.x, r.y, i[YP]),
                    i[US](e, n, s, r),
                    void 0
                }
            }
            e instanceof AN ? e.expanded = !e[_x] : e instanceof ON && this[lf].reverseExpanded(e)
        }
    };
    var hD = function (t) {
        this[lf] = t
    };
    hD[Wa] = {
        onkeydown: function (t, i) {
            if (i.editable) {
                var e = t[aS];
                if (8 == e || 46 == e || 127 == e)
                return i[WS](t),
                qL.ln(t),
                void 0;
                if (T(t)) {
                    if (67 == e)
                    ;
                     else if (86 == e)
                    ;
                     else if (90 == e)
                    ;
                     else if (89 != e)
                    return ;
                    qL.ln(t)
                }
            }
        }
    };
    var aD = function (t) {
        this.graph = t
    };
    aD.prototype = {
        onkeydown: function (i, e) {
            if (i[Tr] && 83 == i[aS]) {
                var n = e.exportImage(e[ur], e[jI]),
                s = t[ma](),
                r = s[VS];
                r.title = XS + n[Gr] + KS + n.height;
                var h = r.createElement(kf);
                h.src = n.data,
                r[eT][Hs](h),
                qL.ln(i)
            }
        }
    };
    var oD = function (t) {
        this[lf] = t
    };
    oD[Wa] = {
        destroy: function () {
            delete this[ZS],
            delete this.currentDraggingElement
        },
        _2c: function (t) {
            var i = new HL;
            return t.selectionModel[ga](function (e) {
                t[UP](e) && t.isVisible(e) && i.add(e)
            }, this),
            i
        },
        onstart: function (t, i) {
            this[JS] && this[kd](i)
        },
        startdrag: function (t, i) {
            if (!t.responded) {
                var e = t.getData();
                if (!e || !i[QS](e) || !i.isMovable(e))
                return this.destroy(i),
                void 0;
                t[vS] = !0,
                this[JS] = e,
                this[ZS] = this._2c(i);
                var n = new vs(i, vs.ELEMENT_MOVE_START, t, this.currentDraggingElement, this.draggingElements[od]);
                return i.beforeInteractionEvent(n) === !1 ? (this[kd](i), void 0)  : (i.onInteractionEvent(n), void 0)
            }
        },
        ondrag: function (t, i) {
            if (this[JS]) {
                qL.mp(t);
                var e = t.dx,
                n = t.dy,
                s = i[ur];
                e /= s,
                n /= s;
                var r = new vs(i, vs.ELEMENT_MOVING, t, this[JS], this[ZS].datas);
                i.moveElements(this.draggingElements[od], e, n),
                i[RP](r)
            }
        },
        enddrag: function (t, i) {
            if (this[JS]) {
                if (this[ZS] && this[ZS][Ps]) {
                    if (t[py]) {
                        var e,
                        n = i[OP](t),
                        s = n.x,
                        r = n.y;
                        i[tA](function (t) {
                            var i = t.data;
                            return !this.draggingElements.contains(i) && t.uiBounds[Wc](s - t.x, r - t.y) ? (i instanceof AN && i.expanded && (e = i), !1)  : void 0
                        }, this),
                        e && this[ZS].forEach(function (t) {
                            t.parent = e
                        })
                    }
                    var h = new vs(i, vs.ELEMENT_MOVE_END, t, this[JS], this[ZS].datas);
                    i[RP](h)
                }
                this.destroy(i)
            }
        },
        onpinch: function (t, i) {
            this[JS] && this[Id](t, i)
        },
        step: 1,
        onkeydown: function (t, i) {
            if (T(t)) {
                var e,
                n;
                if (37 == t[aS] ? e = - 1 : 39 == t.keyCode ? e = 1 : 38 == t.keyCode ? n = - 1 : 40 == t[aS] && (n = 1), e || n) {
                    var s = this._2c(i) [od];
                    if (0 != s[Ps]) {
                        qL.ln(t),
                        e = e || 0,
                        n = n || 0;
                        var r = this[iA] / i[ur],
                        h = new vs(i, vs[eA], t, null, s);
                        i.moveElements(s, e * r, n * r),
                        i.onInteractionEvent(h)
                    }
                }
            }
        }
    };
    var fD = function (t) {
        this[lf] = t
    };
    fD[Wa] = {
        onkeydown: function (t, i) {
            T(t) || (37 == t[aS] ? (this._52(i, 1, 0), qL.ln(t))  : 39 == t.keyCode ? (this._52(i, - 1, 0), qL.ln(t))  : 38 == t[aS] ? (this._52(i, 0, 1), qL.ln(t))  : 40 == t.keyCode && (this._52(i, 0, - 1), qL.ln(t)))
        },
        _52: function (t, i, e) {
            t._8q(i, e)
        },
        onstart: function (t, i) {
            this._jh && this[kd](i)
        },
        _jh: !1,
        startdrag: function (t, i) {
            t[vS] || (t[vS] = !0, this._jh = !0, i[_I] = DC)
        },
        ondrag: function (t, i) {
            this._jh && (qL.mp(t), i.translate(t.dx || 0, t.dy || 0))
        },
        enddrag: function (t, i) {
            if (this._jh) {
                if (i.enableInertia !== !1) {
                    var e = t.vx,
                    n = t.vy;
                    (Math.abs(e) > 0.1 || Math.abs(n) > 0.1) && i._8q(e, n)
                }
                this.destroy(i)
            }
        },
        onpinch: function (t, i) {
            this._jh = !0;
            var e = t[Cd];
            if (e && 1 != e) {
                var n = i.globalToLocal(t[pf]);
                i.zoomAt(e, n.x, n.y)
            }
        },
        destroy: function (t) {
            this._jh = !1,
            t.cursor = null
        }
    },
    _s[Wa] = {
        onElementRemoved: function (t, i) {
            this[sS] && (t == this[sS] || qL.nh(t) && h(t, this[sS])) && this.destroy(i)
        },
        onClear: function (t) {
            this[sS] && this.destroy(t)
        },
        destroy: function (t) {
            t.cursor = null,
            this.element && delete this.element._editting,
            delete this.element,
            delete this._8p,
            delete this._8x,
            delete this._l8anEdit,
            this._62()
        },
        _62: function () {
            this.drawLineId && (this[w_][rS](this.drawLineId), delete this[nA], this.topCavans[wp]())
        },
        _l63: function () {
            this.drawLineId || (this.drawLineId = this[w_].addDrawable(this.drawLine, this) .id, this[w_][wp]())
        },
        _8p: null,
        _4p: function (t) {
            this._8p = t,
            this[wp]()
        },
        _d1: function (t, i, e, n) {
            t.beginPath(),
            t[sA](i, e, this[T_] / n, 0, 2 * Math.PI, !1),
            t.lineWidth = 1 / n,
            t[ra] = [
            ],
            t.strokeStyle = rA,
            t[pb] = 'rgba(255, 255, 0, 0.8)',
            t.stroke(),
            t.fill()
        },
        _en: function (t, i, e, n) {
            n ? t[fo](i, e)  : t[ao](i, e)
        },
        drawLine: function (t, i) {
            if (this._8p && this._8p.length) {
                t[Vr]();
                var e = this[sS] instanceof IN;
                e && (t[lb](this.element.x, this[sS].y), this[sS][uh] && t[uh](this[sS][uh]));
                var n,
                s = [
                ];
                t.beginPath(),
                qL.nj(this._8p, function (i) {
                    for (var e = 0, r = i[Pr]; e + 1 < r[Ps]; ) {
                        var h = r[e],
                        a = r[e + 1],
                        o = {
                            x: h,
                            y: a
                        };
                        s[or](o),
                        this._en(t, o.x, o.y, null == n),
                        n = o,
                        e += 2
                    }
                }, this),
                t[oh] = 1 / i,
                t.lineDash = [
                    2 / i,
                    3 / i
                ],
                t[Vv] = hA,
                t.stroke(),
                qL.nj(s, function (e) {
                    this._d1(t, e.x, e.y, i)
                }, this),
                t.restore()
            }
        },
        invalidate: function () {
            this[w_].invalidate()
        },
        _3g: function (t, i) {
            this[sS] = t,
            t._editting = !0,
            this._l8anEdit = !0,
            this._4p(i)
        },
        _4r: function (t, i) {
            if (i.isEditable(t)) {
                var e = t[aA];
                if (e && 0 != e.length)
                return e
            }
        },
        _gq: function (t, i) {
            t -= this.element.x,
            i -= this[sS].y;
            var e = {
                x: t,
                y: i
            };
            return this.element.rotate && On(e, - this.element[uh]),
            e
        },
        ondblclick: function (t, i) {
            if (!i.editable)
            return this[sS] && this[kd](i),
            void 0;
            var e = t[ir]();
            if (!e || e == this[sS] || e._editting)
            return this[kd](i),
            void 0;
            var n = this._4r(e, i);
            return n ? (this._l63(), this._3g(e, n), void 0)  : (this.element && this.destroy(i), void 0)
        },
        onstart: function (t, i) {
            if (!t[vS]) {
                var e = t[ir]();
                if (e != this[sS]) {
                    if (this[sS] && this._ey(t, i))
                    return t[vS] = !0,
                    void 0;
                    if (this[sS])
                    return this[kd](i),
                    void 0;
                    if (e instanceof ON) {
                        var n = this._4r(e, i);
                        if (!n)
                        return this[sS] && this[kd](i),
                        void 0;
                        this._l63(),
                        this._3g(e, n)
                    }
                }
            }
        },
        onrelease: function () {
            this.element && (this._l8anEdit = !0)
        },
        _8x: null,
        _ey: function (t, i) {
            var e = i[OP](t);
            this[sS] instanceof IN && (e = this._gq(e.x, e.y));
            var n,
            s = i[ur],
            r = this[T_] / s;
            return qL.nj(this._8p, function (t, i) {
                for (var s = 0, h = t[Pr]; s + 1 < h.length; ) {
                    var a = h[s],
                    o = h[s + 1],
                    f = XL(e.x, e.y, a, o);
                    if (r > f)
                    return n = {
                        segment: t,
                        index: i,
                        pointIndex: s
                    },
                    !1;
                    s += 2
                }
            }, this),
            n
        },
        startdrag: function (t, i) {
            if (this.element && this._l8anEdit && (this._8x = this._ey(t, i), this._8x)) {
                this._62(),
                t.responded = !0;
                var e = new vs(i, vs[oA], t, this.element);
                e.point = this._8x,
                i[RP](e)
            }
        },
        ondrag: function (t, i) {
            if (this[sS] && this._8x) {
                var e = t.dx,
                n = t.dy,
                s = i[ur];
                if (e /= s, n /= s, this[sS][uh]) {
                    var r = {
                        x: e,
                        y: n
                    };
                    On(r, - this[sS][uh]),
                    e = r.x,
                    n = r.y
                }
                var h = this._8x[fA],
                a = this._8x[_A];
                h[Pr][a] += e,
                h.points[a + 1] += n,
                this.element.firePathChange();
                var o = new vs(i, vs.POINT_MOVING, t, this.element);
                o.point = this._8x,
                i.onInteractionEvent(o)
            }
        },
        enddrag: function (t, i) {
            if (this.element && this._8x) {
                this._l63();
                var e = new vs(i, vs.POINT_MOVE_END, t, this[sS]);
                e[cA] = this._8x,
                i.onInteractionEvent(e)
            }
        }
    },
    zL[uA] = 1,
    zL.SELECTION_RECTANGLE_STROKE_COLOR = qL.n9(3724541951),
    zL[dA] = qL.n9(1430753245);
    var _D = function (t) {
        this[lf] = t,
        this[w_] = t._75._topCanvas
    };
    _D[Wa] = {
        onstart: function (t, i) {
            this._jh && this[kd](i)
        },
        startdrag: function (t, i) {
            t[vS] || (t[vS] = !0, this._jh = i.toLogical(t), i[_I] = zd, this._16Id = this[w_][lA](this._16, this) .id)
        },
        ondrag: function (t, i) {
            this._jh && (qL.mp(t), this._end = i.toLogical(t), this[wp]())
        },
        enddrag: function (t, i) {
            this._jh && (this._e4(), this[kd](i))
        },
        onpinch: function (t, i) {
            this._jh && this.enddrag(t, i)
        },
        _16: function (t, i) {
            t.strokeStyle = zL.SELECTION_RECTANGLE_STROKE_COLOR,
            t[pb] = zL.SELECTION_RECTANGLE_FILL_COLOR,
            t.lineWidth = zL.SELECTION_RECTANGLE_STROKE / i;
            var e = this._jh.x,
            n = this._jh.y;
            t[kl](e, n, this._end.x - e, this._end.y - n),
            t[eb](),
            t.stroke()
        },
        invalidate: function () {
            return this[EI] ? (this[w_].invalidate(), void 0)  : (this[EI] = !0, qL.mu(this._e4, this, 100), void 0)
        },
        _e4: function () {
            if (this[EI] = !1, !this._jh)
            return this[w_][wp](),
            void 0;
            var t = Math[Qr](this._jh.x, this._end.x),
            i = Math[Qr](this._jh.y, this._end.y),
            e = Math.abs(this._jh.x - this._end.x),
            n = Math.abs(this._jh.y - this._end.y);
            if (!e || !n)
            return this[lf].selectionModel.clear(),
            void 0;
            var s,
            r = [
            ],
            h = this.graph[ur];
            this[lf][vA](function (a) {
                a._gb && this[lf][Zf](a.$data) && (s = a._do, (c(t, i, e, n, s.x + a._x, s.y + a._y, s[Gr], s.height) || pi(t, i, e, n, a, h)) && r.push(a[na]))
            }, this),
            this.graph[hd][ia](r),
            this[w_][wp]()
        },
        destroy: function (t) {
            this._jh = null,
            t[_I] = null,
            this._16Id && (this[w_][rS](this._16Id), delete this._16Id, this[w_][wp]())
        }
    };
    var sD = Math.PI / 4;
    cs[Wa] = {
        _d4: !1,
        _d3: !1,
        onElementRemoved: function (t, i) {
            this[sS] && (t == this.element || qL.nh(t) && h(t, this.element)) && this.destroy(i)
        },
        onClear: function (t) {
            this.element && this[kd](t)
        },
        ondblclick: function (t, i) {
            this[sS] && this.destroy(i)
        },
        destroy: function (t) {
            t[_I] = null,
            delete this[sS],
            delete this._l80,
            delete this._l7ody,
            delete this._8x,
            delete this._l8anEdit,
            delete this._h8,
            delete this._rotatePoint,
            delete this._d3,
            delete this._d4,
            delete this._insets,
            this._62()
        },
        _62: function () {
            this._enId && (this[n_][rS](this._enId), delete this._enId, this.topCanvas.invalidate())
        },
        _l63: function () {
            this._enId || (this._enId = this.topCanvas.addDrawable(this._en, this) .id, this[n_].invalidate())
        },
        _l80: null,
        _h8: null,
        _7d: function (t) {
            this._l80 = t;
            var i = this._l80.x,
            e = this._l80.y,
            n = this._l80[Gr],
            s = this._l80[Fr];
            if (this._d3) {
                var r = [
                ];
                r[or]({
                    x: i,
                    y: e,
                    p: tC.LEFT_TOP,
                    cursor: bA,
                    rotate: 5 * sD
                }),
                r[or]({
                    x: i + n / 2,
                    y: e,
                    p: tC.CENTER_TOP,
                    cursor: gA,
                    rotate: 6 * sD
                }),
                r[or]({
                    x: i + n,
                    y: e,
                    p: tC[au],
                    cursor: O_,
                    rotate: 7 * sD
                }),
                r.push({
                    x: i,
                    y: e + s / 2,
                    p: tC[su],
                    cursor: yA,
                    rotate: 4 * sD
                }),
                r[or]({
                    x: i + n,
                    y: e + s / 2,
                    p: tC[ou],
                    cursor: yA,
                    rotate: 0
                }),
                r[or]({
                    x: i,
                    y: e + s,
                    p: tC.LEFT_BOTTOM,
                    cursor: O_,
                    rotate: 3 * sD
                }),
                r[or]({
                    x: i + n / 2,
                    y: e + s,
                    p: tC[hu],
                    cursor: gA,
                    rotate: 2 * sD
                }),
                r[or]({
                    x: i + n,
                    y: e + s,
                    p: tC[cu],
                    cursor: bA,
                    rotate: sD
                }),
                this._h8 = r
            }
            this._rotatePoint = this._d4 ? {
                x: i + n / 2,
                y: e,
                cursor: BC
            }
             : null,
            this._l7d()
        },
        _d1: function (t, i, e, n) {
            t[nb]();
            var s = (this.handlerSize - 1) / n;
            t[kl](i - s, e - s, 2 * s, 2 * s),
            t.lineWidth = 1 / n,
            t.lineDash = [
            ],
            t[Vv] = rA,
            t.fillStyle = 'rgba(255, 255, 255, 0.8)',
            t[hh](),
            t[eb]()
        },
        _5k: function (t, i, e, n, s, r) {
            s = s || this[T_],
            r = r || pA,
            t.beginPath(),
            s /= n,
            t[sA](i, e, s, 0, 2 * Math.PI, !1),
            t[oh] = 1 / n,
            t.lineDash = [
            ],
            t.strokeStyle = rA,
            t.fillStyle = r,
            t[hh](),
            t.fill()
        },
        _gq: function (t, i) {
            t -= this[sS].x,
            i -= this.element.y;
            var e = {
                x: t,
                y: i
            };
            return this[sS].rotate && On(e, - this[sS].rotate),
            e
        },
        _en: function (t, i) {
            if (this._l80) {
                if (t.save(), t[lb](this.element.x, this[sS].y), this.element[uh] && t.rotate(this.element[uh]), this._rotatePoint) {
                    this._5k(t, 0, 0, i, 3, xA);
                    var e = this._rotatePoint.x,
                    n = this._rotatePoint.y - this._rotateHandleLength / i;
                    t.beginPath(),
                    t[fo](e, this._rotatePoint.y),
                    t[ao](e, n),
                    t.lineWidth = 1 / i,
                    t.strokeStyle = hA,
                    t[hh](),
                    this._5k(t, e, n, i)
                }
                if (this._h8) {
                    var s = this._l80.x,
                    r = this._l80.y,
                    h = this._l80.width,
                    a = this._l80[Fr];
                    t.beginPath(),
                    t[kl](s, r, h, a),
                    t[oh] = 1 / i,
                    t[ra] = [
                        2 / i,
                        3 / i
                    ],
                    t[Vv] = hA,
                    t[hh](),
                    qL.nj(this._h8, function (e) {
                        this._d1(t, e.x, e.y, i)
                    }, this)
                }
                t.restore()
            }
        },
        _l7d: function () {
            this.topCanvas.invalidate()
        },
        _3g: function (t, i, e, n) {
            this[sS] = t,
            this._l63();
            var s = i[nr](t);
            this._l7ody = s.body,
            this._d3 = e,
            this._d4 = n,
            this._7z()
        },
        _7z: function () {
            var t = us(this._l7ody, this._l7ody._h1),
            i = us(this._l7ody, this._l7ody._77);
            this._insets = new QL(t.y - i.y, t.x - i.x, i[Cs] - t[Cs], i[Ls] - t.right),
            this._7d(i)
        },
        _l68: function (t, i) {
            return !(t instanceof AN && t[_x] || !i.isResizable(t))
        },
        _l6a: function (t, i) {
            return !(t instanceof AN && t[_x] || !i[EA](t))
        },
        _l6n: function (t, i) {
            return t instanceof PN && i[mA](t)
        },
        onstart: function (t, i) {
            if (!i[IO])
            return this.element && this[kd](i),
            void 0;
            if (!t[vS]) {
                var e = i[nr](t),
                n = t.getData();
                if (n != this.element) {
                    if (this[sS]) {
                        if (this._ey(t, i))
                        return t[vS] = !0,
                        void 0;
                        this.destroy(i)
                    }
                    if (n && !n._editting && this._l6n(n, i)) {
                        var s = this._l68(n, i, e),
                        r = this._l6a(n, i, e);
                        (s || r) && this._3g(n, i, s, r)
                    }
                }
            }
        },
        onrelease: function (t, i) {
            this[sS] && (this._l8anEdit = !0, this._l63(), i[jP](function () {
                this._7z()
            }, this))
        },
        _8x: null,
        _ey: function (t, i) {
            var e = i.toLogical(t);
            e = this._gq(e.x, e.y);
            var n = i[ur],
            s = this.handlerSize / n;
            if (this._rotatePoint) {
                var r = this._rotatePoint.x,
                h = this._rotatePoint.y - this._rotateHandleLength / n;
                if (XL(e.x, e.y, r, h) < s)
                return this._rotatePoint
            }
            if (this._h8 && this._h8.length) {
                var a;
                return qL.nj(this._h8, function (t) {
                    return XL(e.x, e.y, t.x, t.y) < s ? (a = t, !1)  : void 0
                }, this),
                a
            }
        },
        onmousemove: function (t, i) {
            if (this[sS]) {
                var e = this._ey(t, i);
                if (!e)
                return i[_I] = null,
                void 0;
                if (e != this._rotatePoint && this.element.rotate) {
                    var n = e.rotate + this[sS][uh];
                    return i.cursor = ds(n),
                    void 0
                }
                i[_I] = e[_I]
            }
        },
        startdrag: function (t, i) {
            if (this[sS] && (this._62(), this._l8anEdit && (this._8x = this._ey(t, i), this._8x))) {
                if (t[vS] = !0, this._8x == this._rotatePoint)
                return this._8x[dS] = i.toLogical(t),
                this._8x[uh] = this[sS][uh] || 0,
                void 0;
                var e = new vs(i, vs[wA], t, this[sS]);
                e.point = this._8x,
                i.onInteractionEvent(e)
            }
        },
        _6a: function (t, i, e, n, s, r) {
            var h = this._l80,
            a = h.x,
            o = h.y,
            f = h[Gr],
            _ = h.height;
            if (r) {
                var c = n != f;
                c ? s = n * _ / f : n = s * f / _
            }
            var u = t[Kp]._e8,
            d = n / f,
            l = s / _,
            v = - a * d + i,
            b = - o * l + e;
            u[ga](function (t) {
                if (t[Ws] != WC[Fv]) {
                    var n = t.points;
                    if (n && n.length)
                    for (var s = 0, r = n[Ps]; r > s; s += 2) {
                        var h = n[s],
                        f = n[s + 1];
                        n[s] = (h - a) * d + i - v,
                        n[s + 1] = (f - o) * l + e - b
                    }
                }
            }),
            this._l80.set(i - v, e - b, n, s),
            t[HP](t.x + v, t.y + b),
            t.firePathChange()
        },
        _43: function (t, i, e, n, s) {
            if (this[sS] instanceof IN)
            return this._6a(this[sS], t, i, e, n, s);
            var r = this._l7ody instanceof GN;
            if (!r && s) {
                var h = this._l80,
                a = this._l7ody[TA],
                o = e != h.width;
                o ? n = e * a[Fr] / a[Gr] : e = n * a.width / a[Fr]
            }
            var f = this[sS][Wp],
            _ = new ZL(e - this._insets[$f] - this._insets[Ls], n - this._insets.top - this._insets.bottom);
            if (_[Gr] < 1 && (e = this._insets[$f] + this._insets[Ls] + 1, _.width = 1), _.height < 1 && (n = this._insets[zf] + this._insets.bottom + 1, _[Fr] = 1), r ? this[sS][xp](CN[sm], _)  : this.element.size = _, f) {
                var c = qL.mj(f, e, n),
                u = c.x + t - (this._l7ody.offsetX || 0),
                d = c.y + i - (this._l7ody[Ox] || 0);
                if (this._l80.set(t - u, i - d, e, n), this.element[uh]) {
                    var c = On({
                        x: u,
                        y: d
                    }, this.element[uh]);
                    u = c.x,
                    d = c.y
                }
                this[sS].x += u,
                this.element.y += d
            } else {
                var u = this._l80.x * e / this._l80[Gr] - t,
                d = this._l80.y * n / this._l80[Fr] - i;
                if (this._l80[ia](t + u, i + d, e, n), this[sS][uh]) {
                    var c = On({
                        x: u,
                        y: d
                    }, this.element[uh]);
                    u = c.x,
                    d = c.y
                }
                this.element.x -= u,
                this[sS].y -= d
            }
        },
        ondrag: function (t, i) {
            if (this[sS] && this._8x) {
                if (this._8x == this._rotatePoint) {
                    var e = i[OP](t),
                    n = oi(e.x, e.y, this[sS].x, this[sS].y, this._8x.start.x, this._8x[dS].y, !0);
                    return n += this._8x[uh] || 0,
                    t[py] && (n = Math.round(4 * (n / Math.PI)) * Math.PI / 4),
                    this[sS].rotate = n % (2 * Math.PI),
                    void 0
                }
                var s = t.dx,
                r = t.dy,
                h = i[ur];
                if (s /= h, r /= h, this[sS].rotate) {
                    var e = {
                        x: s,
                        y: r
                    };
                    On(e, - this.element.rotate),
                    s = e.x,
                    r = e.y
                }
                var a = this._8x.p,
                o = this._l80,
                f = o.x,
                _ = o.y,
                c = o[Gr],
                u = o.height;
                a[Kc] == iC ? s >= c ? (f += c, c = s - c || 1)  : (f += s, c -= s)  : a[Kc] == nC && ( - s >= c ? (c = - s - c || 1, f -= c)  : c += s),
                a.verticalPosition == sC ? r >= u ? (_ += u, u = r - u || 1)  : (_ += r, u -= r)  : a.verticalPosition == hC && ( - r >= u ? (u = - r - u || 1, _ -= u)  : u += r),
                this._43(f, _, c, u, t[py]);
                var d = new vs(i, vs[OA], t, this[sS]);
                d[cA] = this._8x,
                i[RP](d)
            }
        },
        enddrag: function (t, i) {
            if (this.element && this._8x && this._8x != this._rotatePoint) {
                var e = new vs(i, vs[PA], t, this[sS]);
                e.point = this._8x,
                i[RP](e)
            }
        }
    },
    UC.ResizeInteraction = cs;
    var cD = function (t) {
        this[lf] = t
    };
    cD[Wa] = {
        onstart: function (t, i) {
            if (!t.responded) {
                NL || IL || i[qP](!0);
                var e = t[ir]();
                return e && !i[Zf](e) && (e = null),
                e && T(t) ? (i.reverseSelect(e), void 0)  : (e && i[hd].isSelected(e) || (e ? (i.setSelection(e), i.sendToTop(e))  : i[IA](null)), void 0)
            }
        },
        onkeydown: function (t, i) {
            return 27 == t[aS] ? (i[SA](), void 0)  : (T(t) && 65 == t[aS] && (i.selectAll(), qL.ln(t)), void 0)
        }
    };
    var uD = 0,
    dD = 15,
    lD = function (t) {
        this[lf] = t
    };
    lD[Wa] = {
        _9x: {
        },
        _9y: null,
        _l61: function () {
            delete this._initTimer,
            this._9x[ah] && (this._9y = i.createElement(Sf), this._9y[Af] = AA, UC[MA](this._9y, {
                'background-color': kA,
                overflow: jf,
                'box-shadow': '0 5px 10px rgba(136, 136, 136, 0.5)',
                color: nT,
                'pointer-events': Gf,
                border: LA,
                padding: CA,
                display: SI,
                position: Ff
            }), i.body[Hs](this._9y), this._l7j(this.graph, this._9x.data))
        },
        _l7j: function (t, i) {
            var e = t[RA](i),
            n = TP == i[NA];
            e && !n && (e = e[fd](/\n/g, DA)),
            n ? this._9y[BA] = e || '' : this._9y.innerHTML = e || '';
            var s = this._9x[jA][fr] + uD,
            r = this._9x.evt[_r] + dD;
            ls(this._9y, s, r),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
            this._deleteTimer = setTimeout(UC.createFunction(this, this._7i), 3000)
        },
        _7i: function () {
            delete this._deleteTimer,
            this._9y && this._9y[op] && this._9y.parentNode[ed](this._9y),
            delete this._9y,
            this._9x = {
            }
        },
        _l87: function (t, i, e, n) {
            return this._9y ? (this._l7j(n, t), void 0)  : (this._initTimer = setTimeout(UC[$A](this, this._l61), 1000), void 0)
        },
        onstart: function (t, i) {
            this.destroy(i)
        },
        onmousemove: function (t, i) {
            if (i.enableTooltip) {
                var e = t.getData();
                if (this._9x.evt = t, this._9x[ah] != e && (this._9x.data = e, this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer), e)) {
                    var n = i[RA](e);
                    n && this._l87(e, n, t, i)
                }
            }
        },
        destroy: function () {
            this._initTimer && (clearTimeout(this._initTimer), delete this._initTimer),
            this._deleteTimer && (clearTimeout(this._deleteTimer), delete this._deleteTimer),
            this._9y && this._7i()
        }
    };
    var vD = function (t) {
        this.graph = t
    };
    vD[Wa] = {
        onmousewheel: function (t, i) {
            if (i.enableWheelZoom !== !1) {
                if (i._scaling)
                return qL.ln(t),
                void 0;
                i._scaling = !0,
                qL.mu(function () {
                    delete i._scaling
                }, this, 100),
                Xn(i, t, t.delta > 0) !== !1 && qL.ln(t)
            }
        }
    };
    var bD = function (t) {
        this[lf] = t
    };
    bD.prototype = {
        onclick: function (t, i) {
            Xn(i, t, !T(t))
        }
    };
    var gD = function (t) {
        this[lf] = t
    };
    gD[Wa] = {
        onclick: function (t, i) {
            Xn(i, t, T(t))
        }
    },
    qL.nm(vs, fC),
    vs[GA] = FA,
    vs[qA] = zA,
    vs[eA] = YA,
    vs[CP] = HA,
    vs[UA] = WA,
    vs.POINT_MOVE_START = VA,
    vs.POINT_MOVING = XA,
    vs[KA] = ZA,
    vs[wA] = JA,
    vs[OA] = QA,
    vs.RESIZE_END = tM,
    vs[iM] = eM,
    vs[nM] = sM,
    vs.SELECT_BETWEEN = rM,
    vs[hM] = aM,
    vs.LONG_CLICK = oM,
    bs.prototype = {
        _8b: function (t) {
            if (this._interactionSupport)
            switch (t.kind) {
            case pC.KIND_REMOVE:
                this._interactionSupport._4k(t[ah]);
                break;
            case pC.KIND_CLEAR:
                this._interactionSupport._6n(t.data)
            }
        },
        destroy: function () {
            delete this._in,
            delete this._41,
            this._interactionSupport && (this._interactionSupport._g9(), delete this._interactionSupport)
        },
        _in: null,
        _41: null,
        defaultMode: null,
        _fo: function (t, i, e) {
            this._41[t] = new Jn(i, e),
            t == this.currentMode && this._interactionSupport._6l(i)
        },
        addCustomInteraction: function (t) {
            this._interactionSupport._6(t)
        },
        _kt: function (t) {
            var i = this._41[t];
            return i ? i : yD[t]
        }
    },
    qL.ls(bs[Wa], {
        defaultCursor: {
            get: function () {
                return this.currentInteractionMode ? this.currentInteractionMode[cI] : void 0
            }
        },
        currentMode: {
            get: function () {
                return this._l8urrentMode
            },
            set: function (t) {
                this._l8urrentMode != t && (this._interactionSupport || (this._interactionSupport = new LC(this._in)), this._l8urrentMode = t, this.currentInteractionMode = this._kt(this._l8urrentMode), this._in[_I] = this[cI], this.currentInteractionMode ? this._interactionSupport._6l(this[fM].getInteractionInstances(this._in))  : this._interactionSupport._6l([]))
            }
        }
    });
    var yD = {
    };
    zL.registerInteractions = function (t, i, e) {
        var n = new Jn(i, e);
        yD[t] = n
    },
    WC[_M] = cM,
    WC.INTERACTION_MODE_DEFAULT = s_,
    WC[uM] = x_,
    WC.INTERACTION_MODE_ZOOMIN = dM,
    WC[lM] = vM,
    WC[bM] = gM,
    WC[yM] = pM,
    WC.INTERACTION_MODE_CREATE_SHAPE = xM,
    WC[EM] = mM,
    zL.registerInteractions(WC.INTERACTION_MODE_VIEW, [
        cD,
        fD,
        vD,
        aD,
        rD,
        lD
    ]),
    zL[wM](WC.INTERACTION_MODE_CREATE_SIMPLE_EDGE, [
        hD,
        ss,
        cD,
        fD,
        vD,
        aD,
        lD
    ]),
    zL[wM](WC[yM], [
        hD,
        is,
        cD,
        fD,
        vD,
        aD,
        lD
    ]),
    zL.registerInteractions(WC[TM], [
        hD,
        es,
        cD,
        fD,
        vD,
        aD,
        lD
    ]),
    zL[wM](WC.INTERACTION_MODE_CREATE_LINE, [
        ns,
        cD,
        fD,
        vD,
        aD,
        lD
    ]),
    zL[wM](WC[k_], [
        hD,
        cs,
        _s,
        cD,
        oD,
        fD,
        vD,
        aD,
        rD,
        lD
    ]),
    zL[wM](WC[uM], [
        hD,
        cs,
        _s,
        cD,
        oD,
        _D,
        fD,
        vD,
        aD,
        rD,
        lD
    ]),
    zL.registerInteractions(WC.INTERACTION_MODE_ZOOMIN, [
        vD,
        aD,
        bD
    ], CC),
    zL[wM](WC.INTERACTION_MODE_ZOOMOUT, [
        vD,
        aD,
        gD
    ], RC),
    UC.PanInteraction = fD,
    UC[OM] = cD,
    UC[PM] = oD,
    UC.WheelZoomInteraction = vD,
    UC[IM] = rD,
    UC.ExportInteraction = aD,
    UC.TooltipInteraction = lD,
    UC[SM] = _D,
    UC[AM] = _s;
    var pD = function (t) {
        this.graph = t
    };
    UC.Layouter = pD,
    pD.prototype = {
        getNodeBounds: function (t) {
            return this.graph[MM](t)
        },
        isLayoutable: function (t) {
            return t[kM] !== !1
        },
        getLayoutResult: function () {
        },
        updateLocations: function (t, i, e, n, s) {
            if (i === !0) {
                if (this[LM] || (this[LM] = new UD), e && (this[LM].duration = e), n && (this[LM][CM] = n), this.animate.locations = t, s) {
                    var r = s,
                    h = this;
                    s = function () {
                        r.call(h, t)
                    }
                }
                return this[LM][dS](s),
                void 0
            }
            for (var a in t) {
                var o = t[a],
                f = o[Bp];
                f.setLocation(o.x, o.y)
            }
            s && s[tr](this, t)
        },
        _dl: function (t) {
            var i,
            e,
            n,
            s = null;
            t && (i = t[RM], s = t[No], e = t[NM], n = t[CM]);
            var r = this.getLayoutResult(t);
            return r ? (this[DM](r, i, e, n, s), r)  : !1
        },
        doLayout: function (t, i) {
            return this[lf] && i !== !0 ? (this[lf][jP](function () {
                this._dl(t)
            }, this), void 0)  : this._dl(t)
        }
    };
    var xD = 11,
    ED = 12,
    mD = 13,
    wD = 21,
    TD = 22,
    OD = 23;
    WC[BM] = xD,
    WC.DIRECTION_LEFT = ED,
    WC.DIRECTION_CENTER = mD,
    WC.DIRECTION_BOTTOM = wD,
    WC[jM] = TD,
    WC[$M] = OD;
    var PD = GM,
    ID = FM,
    SD = qM,
    AD = zM;
    WC.LAYOUT_TYPE_EVEN = PD,
    WC[YM] = SD,
    WC.LAYOUT_TYPE_EVEN_VERTICAL = AD,
    WC.LAYOUT_TYPE_TWO_SIDE = ID,
    UC.isHorizontalDirection = gs;
    var MD = function (t) {
        this.graph = t
    };
    MD.prototype = {
        hGap: 50,
        vGap: 50,
        parentChildrenDirection: wD,
        layoutType: PD,
        defaultSize: {
            width: 50,
            height: 60
        },
        getNodeSize: function (t) {
            if (this.graph._75._91) {
                var i = this.graph[nr](t);
                if (i)
                return i._do
            }
            return t.image && t.image[nh] ? {
                width: t.image.bounds[Gr],
                height: t.image[nh].height
            }
             : this.defaultSize
        },
        _l7f: function (t, i) {
            if (this.isLayoutable(t)) {
                var e = this.getNodeSize(t),
                n = t.id;
                t[HM];
                var s = i ? this._8u[i.id] : this._9f;
                this._8u[n] = new kD(t[UM] || this.hGap, t.vGap || this[WM], t.layoutType || this[VM], t[HM], s, t, e[Gr], e[Fr])
            }
        },
        _8u: null,
        _9f: null,
        _ii: function () {
            this._8u = null,
            this._9f = null
        },
        getLayoutResult: function (t) {
            var i,
            e,
            n,
            s,
            r = this[lf];
            t instanceof Object && (i = t.x, e = t.y, r = t.root || this[lf], n = t[nh], s = t[XM]),
            this._8u = {
            },
            this._9f = new kD,
            this._9f._km(this.hGap, this.vGap, this.parentChildrenDirection, this[VM]);
            var h = {
            },
            a = XD(r, this._l7f, this, !1, s);
            return a && (this._9f._dl(i || 0, e || 0, h), n && n.set(this._9f.x, this._9f.y, this._9f.width, this._9f[Fr])),
            this._ii(),
            h
        },
        doLayout: function (t, i) {
            if (qL.n6(t)) {
                var e = t,
                n = 0;
                qL.n6(i) && (n = i),
                t = {
                    x: e,
                    y: n
                },
                i = !0
            }
            return qL.nc(this, MD, KM, [
                t,
                i
            ])
        }
    },
    qL.nm(MD, pD);
    var kD = function (t, i, e, n, s, r, h, a) {
        this._ki = t || 0,
        this._kh = i || 0,
        this.layoutType = e,
        this.parentChildrenDirection = n,
        this.parentBounds = s,
        s && s._f6(this),
        this[Bp] = r,
        this._l8c = h,
        this._l82 = a
    };
    kD.prototype = {
        _km: function (t, i, e, n) {
            this._ki = t,
            this._kh = i,
            this.parentChildrenDirection = e,
            this[VM] = n
        },
        _71: function () {
            this._dq = [
            ]
        },
        _ki: 0,
        _kh: 0,
        _dq: null,
        _l8c: 0,
        _l82: 0,
        layoutType: null,
        parentChildrenDirection: null,
        _f6: function (t) {
            this._dq || (this._dq = [
            ]),
            this._dq[or](t)
        },
        _l81: function (t, i, e, n) {
            var s = new JL;
            return e(this._dq, function (e) {
                e._3c(t, i),
                s.add(e),
                n ? t += e.width + this._ki : i += e[Fr] + this._kh
            }, this),
            s
        },
        _72: function (t, i, e, n, s) {
            var r,
            h = n ? this._ki : this._kh,
            a = n ? this._kh : this._ki,
            o = n ? 'width' : Fr,
            f = n ? 'height' : Gr,
            _ = n ? '_l8c' : ZM,
            c = n ? '_l82' : JM,
            u = n ? 'hostDX' : QM,
            d = n ? 'hostDY' : tk,
            l = new JL,
            v = 0,
            b = 0,
            g = [
            ],
            y = 0,
            p = 0;
            e(this._dq, function (e) {
                var s = p >= b;
                e._inheritedParentChildrenDirection = s ? n ? ED : TD : n ? xD : wD,
                e._3c(t, i),
                s ? (g.push(e), v = Math[Ph](v, e[o]), b += e[f] + a)  : (r || (r = [
                ]), r.push(e), y = Math.max(y, e[o]), p += e[f] + a)
            }, this),
            b -= a,
            p -= a;
            var x = Math.max(b, p),
            E = h,
            m = 0;
            this.node && (s && (E += this[_] + h, x > this[c] ? this[d] = (x - this[c]) / 2 : m = (this[c] - x) / 2), this[u] = v + E / 2 - this[_] / 2);
            var w = 0,
            T = m;
            return qL.nj(g, function (t) {
                n ? t[Gx](v - t[o], T)  : t[Gx](T, v - t[o]),
                T += a + t[f],
                l.add(t)
            }, this),
            r ? (T = m, w = v + E, qL.nj(r, function (t) {
                n ? t[Gx](w, T)  : t[Gx](T, w),
                T += a + t[f],
                l.add(t)
            }, this), l)  : l
        },
        offset: function (t, i) {
            this.x += t,
            this.y += i,
            this[ik] += t,
            this[ek] += i,
            this._68(t, i)
        },
        _l6d: function (t, i) {
            return 2 * this.cx - t - i - t
        },
        _l6b: function (t, i) {
            return 2 * this.cy - t - i - t
        },
        _kf: function (t) {
            if (this._dq && 0 != this._dq[Ps]) {
                if (t)
                return this.node && (this.nodeX += this._l6d(this.nodeX, this._l8c)),
                qL.nj(this._dq, function (t) {
                    t[Gx](this._l6d(t.x, t.width), 0)
                }, this),
                void 0;
                this[Bp] && (this.nodeY += this._l6b(this[ek], this._l82)),
                qL.nj(this._dq, function (t) {
                    t[Gx](0, this._l6b(t.y, t[Fr]))
                }, this)
            }
        },
        _68: function (t, i) {
            this._dq && qL.nj(this._dq, function (e) {
                e[Gx](t, i)
            }, this)
        },
        _3c: function (t, i) {
            return this.x = t || 0,
            this.y = i || 0,
            this._dq && 0 != this._dq.length ? (this._1s(this.x, this.y, this[VM]), void 0)  : (this[Bp] && (this[Gr] = this._l8c, this[Fr] = this._l82, this[ik] = this.x, this[ek] = this.y), void 0)
        },
        _64: function (t) {
            this.node && (t[this.node.id] = {
                node: this.node,
                x: this.nodeX + this._l8c / 2,
                y: this.nodeY + this._l82 / 2,
                left: this.nodeX,
                top: this[ek],
                width: this._l8c,
                height: this._l82
            }),
            this._dq && qL.nj(this._dq, function (i) {
                i._64(t)
            }, this)
        },
        _dl: function (t, i, e) {
            this._3c(t, i),
            this._64(e)
        },
        _1s: function (t, i, n) {
            var s,
            r = t,
            h = i;
            !this.parentChildrenDirection && this.parentBounds && (this.parentChildrenDirection = this._inheritedParentChildrenDirection || this[nk][HM]);
            var a = this[HM],
            o = gs(a);
            if (this[Bp]) {
                s = a == mD || a == OD;
                var f = ys(a);
                s || (o ? t += this._l8c + this._ki : i += this._l82 + this._kh)
            }
            var _,
            c = this[Bp] && this.node[sk] ? qL.lv : qL.nj;
            if (n == ID)
            _ = this._72(t, i, c, !o, s);
             else {
                var u;
                u = n == PD ? !o : n == SD,
                _ = this._l81(t, i, c, u, s)
            }
            var d = 0,
            l = 0;
            _ && !_[Rc]() && (d = _[Gr], l = _[Fr], this[th](_)),
            this[Bp] && (this[ik] = r, this[ek] = h, this[tk] !== e || this.hostDY !== e ? (this[ik] += this.hostDX || 0, this[ek] += this[QM] || 0)  : o ? this[ek] += l / 2 - this._l82 / 2 : this[ik] += d / 2 - this._l8c / 2, this.addRect(this[ik], this.nodeY, this._l8c, this._l82), f && this._kf(o))
        },
        node: null,
        uiBounds: null
    },
    qL.nm(kD, JL),
    xs.prototype = {
        layoutDatas: null,
        isMovable: function (t) {
            return !this.currentMovingNodes[t.id]
        },
        _6k: !1,
        _3e: function () {
            this._6k = !0,
            this[lf]._1p.addListener(this._8k, this),
            this[lf]._1h[Mu](this._29, this)
        },
        _1w: function () {
            this._6k = !1,
            this[lf]._1p.removeListener(this._8k, this),
            this[lf]._1h[Og](this._29, this)
        },
        invalidateFlag: !0,
        invalidateLayoutDatas: function () {
            this.invalidateFlag = !0
        },
        resetLayoutDatas: function () {
            return this[EI] = !1,
            this.layoutDatas = ps[tr](this)
        },
        _29: function (t) {
            vs[GA] == t[A_] ? (this[rk] = {
            }, t[od][ga](function (t) {
                this.currentMovingNodes[t.id] = t
            }, this))  : vs.ELEMENT_MOVE_END == t.kind && (this[rk] = {
            })
        },
        _8k: function () {
            this[hk]()
        },
        isRunning: function () {
            return this[ak] && this[ak]._di()
        },
        getLayoutResult: function () {
            this[ok](),
            this[fk]();
            for (var t = this[_k](this[ck].nodeCount || 0, this[ck][uk] || 0), i = 0; t > i && this.step(!1) !== !1; i++)
            ;
            var e = this.layoutDatas[dk];
            return this.onstop(),
            e
        },
        _k1: function () {
            return !1
        },
        step: function (t) {
            if (t === !1)
            return this._k1(this.timeStep);
            (this[EI] || !this[ck]) && this[fk]();
            var i = this._k1(t),
            e = this[ck].nodes;
            for (var n in e) {
                var s = e[n],
                r = s.node;
                this[UP](r) ? r.setLocation(s.x, s.y)  : (s.x = r.x, s.y = r.y, s.vx = 0, s.vy = 0)
            }
            return i
        },
        onstop: function () {
            delete this[ck]
        },
        start: function (t) {
            if (this.isRunning())
            return !1;
            this._6k || this._3e(),
            this._i2r || (this._i2r = qL.m2(this, function (t) {
                return this[iA](t)
            })),
            this[hk](),
            this[ak] = new zC(this._i2r);
            var i = this;
            return this.timer._jh(function () {
                i[lk](),
                t && t()
            }),
            !0
        },
        stop: function () {
            this[ak] && (this.timer._jo(), this[lk]())
        },
        getMaxIterations: function (t) {
            return Math[Qr](1000, 3 * t + 10)
        },
        minEnergyFunction: function (t, i) {
            return 10 + Math[ih](t + i, 1.4)
        },
        resetGraph: function () {
            this._6k || this._3e(),
            this[fk]()
        },
        destroy: function () {
            this[ok](),
            this._1w()
        }
    },
    qL.nm(xs, pD);
    var LD = function (t, i, e, n) {
        this[lf] = t,
        qL.n6(i) && (this.radius = i),
        qL.n6(e) && (this[vk] = e),
        qL.n6(n) && (this[bk] = n)
    };
    UC[gk] = LD;
    var CD = yk,
    RD = pk,
    ND = xk,
    DD = Ek;
    WC[mk] = CD,
    WC[wk] = RD,
    WC.RADIUS_MODE_UNIFORM = ND,
    WC[Tk] = DD,
    LD.prototype = {
        angleSpacing: CD,
        radiusMode: DD,
        gap: 4,
        radius: 50,
        startAngle: 0,
        _8u: null,
        _9f: null,
        _ii: function () {
            this._8u = null,
            this._9f = null
        },
        getLayoutResult: function (t) {
            var i,
            e = 0,
            n = 0,
            s = this[lf];
            t instanceof Object && (e = t.cx || 0, n = t.cy || 0, s = t[Ok] || this[lf], i = t[nh]),
            this._8u = {
            },
            this._9f = new $D(this);
            var r = {
            },
            h = KD(s, this._l7f, this);
            return h && (this._9f._dq && 1 == this._9f._dq[Ps] && (this._9f = this._9f._dq[0]), this._9f._df(!0), this._9f._4v(e, n, this.startAngle, r, i)),
            this._ii(),
            r
        },
        _l7f: function (t, i) {
            if (this[L_](t)) {
                var e = i ? this._8u[i.id] : this._9f;
                this._8u[t.id] = new $D(this, t, e)
            }
        },
        defaultSize: 40,
        getRadius: function () {
            return this[uu]
        },
        getNodeSize: function (t) {
            if (this.graph._75._91) {
                var i = this.graph.getUI(t);
                if (i)
                return (i._do[Gr] + i._do.height) / 2
            }
            return this[Pk]
        },
        getGap: function () {
            return this[vk]
        },
        _2x: function (t, i, e) {
            return this.getNodeSize(t, i, e) + this[Ik](t, i, e)
        }
    };
    var BD = function (t) {
        var i,
        e = this._dq.length,
        n = 0,
        s = 0;
        if (qL.nj(this._dq, function (t) {
            var e = t._df();
            1 > e && (e = 1),
            s += e,
            e > n && (n = e, i = t)
        }, this), e > 1) {
            var r = 0,
            h = {
            },
            a = s / e / 3;
            s = 0,
            qL.nj(this._dq, function (t) {
                var i = t._jv;
                a > i && (i = a),
                h[t.id] = i,
                s += i
            }, this);
            var o = GD / s;
            qL.nj(this._dq, function (i, e) {
                var n = h[i.id],
                s = n * o;
                0 === e && (r = t ? - s / 2 : - s),
                i._j3 = r + s / 2,
                i._j4 = s,
                r += s
            }, this)
        }
        return [n,
        i._j4]
    },
    jD = function (t) {
        var i = this._7w,
        e = 2 * Math.PI / i,
        n = 0,
        s = t ? 0 : i > 1 ? - e / 2 : 0;
        return qL.nj(this._dq, function (t) {
            t._j3 = s % GD,
            s += e,
            t._j4 = e;
            var i = t._df();
            i > n && (n = i)
        }, this),
        [
            n,
            e
        ]
    },
    $D = function (t, i, e) {
        this.layouter = t,
        i && (this._kb = i, this.id = i.id),
        e && (e._f6(this), e._ka = !1, this._j1 = e._j1 + 1)
    },
    GD = 2 * Math.PI;
    $D.prototype = {
        _j4: 0,
        _j3: 0,
        _i5: 0,
        _dd: 0,
        _l7p: 0,
        _j1: 0,
        _ka: !0,
        _jv: 0,
        _fe: 0,
        _dq: null,
        _kb: null,
        _f6: function (t) {
            this._dq || (this._dq = [
            ]),
            this._dq[or](t),
            t.parent = this
        },
        _f2: function (t) {
            if (this._j3 = (this._j3 + t) % GD, this._dq) {
                var i = this._dq[Ps];
                if (1 == i)
                return this._dq[0]._f2(this._j3),
                void 0;
                t = this._j3 + Math.PI,
                qL.nj(this._dq, function (i) {
                    i._f2(t)
                }, this)
            }
        },
        _7w: 0,
        _6j: function (t) {
            return this._kb && (this._fe = this.layouter._2x(this._kb, this._j1, this._ka) / 2),
            this._dq ? (this._fe, this._7w = this._dq.length, this._7w <= 2 || this[Sk].angleSpacing == RD ? jD.call(this, t)  : BD.call(this, t))  : null
        },
        _df: function (t) {
            var i = this._6j(t);
            if (!i)
            return this._jv = this._fe;
            var e = i[0],
            n = i[1],
            s = this[Sk][Ak](this._kb, this._j1);
            if (s < this._fe && (s = this._fe), this._dd = s, this._fe + e > s && (s = this._fe + e), e && this._7w > 1 && n < Math.PI) {
                var r = e / Math.sin(n / 2);
                r > s && (s = r)
            }
            return this._i5 = s,
            this._jv = s + e,
            this._kb && this._dq && this.layouter.radiusMode == DD && qL.nj(this._dq, function (t) {
                var i = t._jv;
                1 == t._7w && (i /= 2);
                var e = this._fe + i,
                n = t._j4;
                if (n && n < Math.PI) {
                    var s = Math[ks](n / 2),
                    r = i / s;
                    r > i && (i = r)
                }
                e > i && (i = e),
                t._l7p = i
            }, this),
            (!this._kb || t) && this._f2(0),
            this._jv
        },
        _4v: function (t, i, e, n, s) {
            if (this._kb && (n[this._kb.id] = {
                x: t,
                y: i,
                node: this._kb
            }, s && s[iT](t - this._fe / 2, i - this._fe / 2, this._fe, this._fe)), this._dq) {
                if (!this._kb && 1 == this._dq.length)
                return this._dq[0]._4v(t, i, e, n, s),
                void 0;
                e = e || 0;
                var r = this._i5,
                h = this._dd;
                qL.nj(this._dq, function (a) {
                    var o = r;
                    a._l7p && (o = Math[Ph](h, a._l7p));
                    var f = a._j3 + e,
                    _ = t + o * Math[Ms](f),
                    c = i + o * Math[ks](f);
                    a._4v(_, c, e, n, s)
                }, this)
            }
        }
    },
    qL.nm(LD, pD);
    var FD = function () {
        qL.lr(this, FD, arguments)
    };
    qL.nm(FD, Es);
    var qD = function (t, i) {
        this[Mk] = t,
        this[kk] = i,
        t == i ? (this.isLooped = !0, this._j8 = t._iv)  : this._j8 = new HL,
        this._7y = [
        ],
        this._fi = zL[Lk]
    };
    zL.EDGE_BUNDLE_EXPANDED = !0,
    qD.prototype = {
        node1: null,
        node2: null,
        _j8: null,
        _fi: zL.EDGE_BUNDLE_EXPANDED,
        _7y: null,
        _fp: null,
        agentEdge: null,
        _9t: function (t, i, e) {
            this._j8[ga](function (n) {
                return e && n[Ip] != e && n[Ja] != e ? void 0 : t.call(i, n)
            })
        },
        _5n: 0,
        _5o: 0,
        _g1: function (t, i) {
            return this._j8.add(t) === !1 ? !1 : (i == this.node1 ? this._5n++ : this._5o++, this._91 ? (this._18(t), void 0)  : (this._91 = !0, void 0))
        },
        _l86: function (t, i) {
            return this._j8[Z_](t) === !1 ? !1 : (i == this[Mk] ? this._5n-- : this._5o--, this._l7dBindableFlag = !0, this._5r = !0, this._j8[ga](function (t) {
                t._edgeBundleInvalidateFlag = !0,
                t.__4n = !0
            }, this), void 0)
        },
        _18: function (t) {
            this._l7dBindableFlag = !0,
            this._5r = !0,
            t._edgeBundleInvalidateFlag = !0,
            t.__4n = !0
        },
        _l7d: function () {
            this._5r || (this._5r = !0, this._j8.forEach(function (t) {
                t._edgeBundleInvalidateFlag = !0
            }))
        },
        isEmpty: function () {
            return this._j8[Rc]()
        },
        isPositiveOrder: function (t) {
            return this[Mk] == t[Ip] || this[Mk] == t[Ja]
        },
        canBind: function () {
            return this._j8.length > 1 && this._7y.length > 1
        },
        _g2: function (t) {
            return this._7y[kr](t)
        },
        getYOffset: function (t) {
            return this._fp[t.id]
        },
        _4l: function (t) {
            if (!this.canBind())
            return this._fp = {
            },
            void 0;
            var i = {
            },
            e = this._7y[Ps];
            if (!(2 > e)) {
                var n = 0,
                s = this._7y[0];
                i[s.id] = 0;
                for (var r = 1; e > r; r++) {
                    s = this._7y[r];
                    var h = t.getStyle(s, CN.EDGE_BUNDLE_GAP) || VN[CN[$m]];
                    n += h,
                    i[s.id] = n
                }
                if (!this[to])
                for (var a = n / 2, r = 0; e > r; r++)
                s = this._7y[r],
                i[s.id] -= a;
                this._fp = i
            }
        },
        _l6f: function (t) {
            return this._fi == t ? !1 : (this._fi = t, this._l7d(), !0)
        },
        reverseExpanded: function () {
            return this._l6f(!this._fi)
        },
        _1e: function () {
            this._l7dBindableFlag = !1,
            this._7y[Ps] = 0;
            var t;
            this._j8.forEach(function (i) {
                if (i[wO]()) {
                    if (!this[Ck](i))
                    return t || (t = [
                    ]),
                    t.push(i),
                    void 0;
                    this._7y.push(i)
                }
            }, this),
            t && (this._7y = t[ch](this._7y))
        },
        _d7: function (t) {
            return t == this[Rk] || !this[TO]() || this._fi
        },
        _e4: function (t) {
            this._5r = !1,
            this._j8[ga](function (t) {
                t._edgeBundleInvalidateFlag = !1
            }),
            this._l7dBindableFlag && this._1e();
            var i = this._fi,
            e = this.canBind(),
            n = !e || i;
            qL.nj(this._7y, function (t) {
                t._$n = !0,
                t._gbInBundle = n,
                n && (t.__4n = !0)
            }, this),
            n ? this[Rk] = null : (this.agentEdge = this._7y[0], this[Rk]._gbInBundle = !0, this[Rk].__4n = !0),
            n && this._4l(t)
        }
    },
    qL.ls(qD.prototype, {
        bindableEdges: {
            get: function () {
                return this._7y
            }
        },
        edges: {
            get: function () {
                return this._j8._i0
            }
        },
        expanded: {
            get: function () {
                return this._fi
            },
            set: function (t) {
                return this._fi == t ? !1 : (this._fi = t, this._l7d(), void 0)
            }
        }
    });
    var zD = function () {
        function t(t, i) {
            this[Bp] = t,
            this[eT] = i
        }
        function i() {
            this[Nk] = [
            ],
            this.popIdx = 0
        }
        var e = - 1000000,
        n = 0.8;
        i.prototype = {
            isEmpty: function () {
                return 0 === this.popIdx
            },
            push: function (i, e) {
                var n = this[Nk][this.popIdx];
                n ? (n[Bp] = i, n[eT] = e)  : this.stack[this[Dk]] = new t(i, e),
                ++this[Dk]
            },
            pop: function () {
                return this[Dk] > 0 ? this[Nk][--this[Dk]] : void 0
            },
            reset: function () {
                this[Dk] = 0
            }
        };
        var s = [
        ],
        r = new i,
        h = function () {
            this.body = null,
            this.quads = [
            ],
            this.mass = 0,
            this.massX = 0,
            this.massY = 0,
            this[$f] = 0,
            this[zf] = 0,
            this[Cs] = 0,
            this[Ls] = 0,
            this.isInternal = !1
        },
        a = [
        ],
        o = 0,
        f = function () {
            var t;
            return a[o] ? (t = a[o], t[Bk][0] = null, t[Bk][1] = null, t[Bk][2] = null, t[Bk][3] = null, t.body = null, t.mass = t[jk] = t.massY = 0, t[$f] = t[Ls] = t.top = t[Cs] = 0, t[$k] = !1)  : (t = new h, a[o] = t),
            ++o,
            t
        },
        _ = f(),
        c = function (t, i) {
            var e = Math.abs(t.x - i.x),
            n = Math[Rs](t.y - i.y);
            return 1e-8 > e && 1e-8 > n
        },
        u = function (t) {
            for (r[Gk](), r.push(_, t); !r.isEmpty(); ) {
                var i = r[Fk](),
                e = i[Bp],
                n = i[eT];
                if (e[$k]) {
                    var s = n.x,
                    h = n.y;
                    e[qk] = e[qk] + n.mass,
                    e.massX = e[jk] + n[qk] * s,
                    e.massY = e[zk] + n[qk] * h;
                    var a = 0,
                    o = e[$f],
                    u = (e[Ls] + o) / 2,
                    d = e.top,
                    l = (e[Cs] + d) / 2;
                    if (s > u) {
                        a += 1;
                        var v = o;
                        o = u,
                        u += u - v
                    }
                    if (h > l) {
                        a += 2;
                        var b = d;
                        d = l,
                        l += l - b
                    }
                    var g = e[Bk][a];
                    g || (g = f(), g.left = o, g.top = d, g.right = u, g[Cs] = l, e[Bk][a] = g),
                    r[or](g, n)
                } else if (e[eT]) {
                    var y = e.body;
                    if (e.body = null, e[$k] = !0, c(y, n)) {
                        if (e[Ls] - e[$f] < 1e-8)
                        return ;
                        do {
                            var p = Math[fc](),
                            x = (e.right - e.left) * p,
                            E = (e[Cs] - e[zf]) * p;
                            y.x = e[$f] + x,
                            y.y = e.top + E
                        } while (c(y, n))
                    }
                    r[or](e, y),
                    r[or](e, n)
                } else
                e[eT] = n
            }
        },
        d = function (t) {
            var i,
            r,
            h,
            a,
            o = s,
            f = 1,
            c = 0,
            u = 1;
            for (o[0] = _; f; ) {
                var d = o[c],
                l = d[eT];
                f -= 1,
                c += 1,
                l && l !== t ? (r = l.x - t.x, h = l.y - t.y, a = Math[Jr](r * r + h * h), 0 === a && (r = (Math.random() - 0.5) / 50, h = (Math[fc]() - 0.5) / 50, a = Math.sqrt(r * r + h * h)), i = e * l.mass * t[qk] / (a * a), - 1000 > i && (i = - 1000), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h)  : (r = d.massX / d.mass - t.x, h = d[zk] / d.mass - t.y, a = Math[Jr](r * r + h * h), 0 === a && (r = (Math.random() - 0.5) / 50, h = (Math[fc]() - 0.5) / 50, a = Math[Jr](r * r + h * h)), (d[Ls] - d.left) / a < n ? (i = e * d[qk] * t[qk] / (a * a), - 1000 > i && (i = - 1000), i /= a, t.fx = t.fx + i * r, t.fy = t.fy + i * h)  : (d.quads[0] && (o[u] = d[Bk][0], f += 1, u += 1), d[Bk][1] && (o[u] = d.quads[1], f += 1, u += 1), d[Bk][2] && (o[u] = d[Bk][2], f += 1, u += 1), d[Bk][3] && (o[u] = d.quads[3], f += 1, u += 1)))
            }
        },
        l = function (t, i) {
            e = i;
            var n,
            s = Number[Vc],
            r = Number[Vc],
            h = Number.MIN_VALUE,
            a = Number[Yk],
            c = t,
            d = c[Ps];
            for (n = d; n--; ) {
                var l = c[n].x,
                v = c[n].y;
                s > l && (s = l),
                l > h && (h = l),
                r > v && (r = v),
                v > a && (a = v)
            }
            var b = h - s,
            g = a - r;
            for (b > g ? a = r + b : h = s + g, o = 0, _ = f(), _[$f] = s, _[Ls] = h, _.top = r, _[Cs] = a, n = d; n--; )
            u(c[n], _)
        };
        return {
            init: l,
            update: d
        }
    },
    YD = function (t) {
        t.fx -= t.x * this[Hk],
        t.fy -= t.y * this[Hk]
    },
    HD = function (t) {
        if (0 != t.k) {
            var i = this._l7g,
            e = t[R_],
            n = t.to,
            s = n.x - e.x,
            r = n.y - e.y,
            h = s * s + r * r,
            a = Math[Jr](h) || 0.1,
            o = (a - i) * t.k * this.elastic;
            o /= a;
            var f = o * s,
            _ = o * r;
            n.fx -= f,
            n.fy -= _,
            e.fx += f,
            e.fy += _
        }
    };
    Es.prototype = {
        appendNodeInfo: function (t, i) {
            i[qk] = t.layoutMass || 1,
            i.fx = 0,
            i.fy = 0,
            i.vx = 0,
            i.vy = 0
        },
        appendEdgeInfo: function (t, i) {
            i.k = t.layoutElasticity || 1
        },
        setMass: function (t, i) {
            t[Uk] = i,
            this.layoutDatas && this[ck][dk] && (t = this.layoutDatas.nodes[t.id], t && (t.mass = i))
        },
        setElasticity: function (t, i) {
            t[Wk] = i,
            this[ck] && this.layoutDatas[Vk] && (t = this[ck].edges[t.id], t && (t.k = i))
        },
        _l7g: 50,
        _gu: 0.5,
        timeStep: 0.15,
        repulsion: 50,
        attractive: 0.1,
        elastic: 3,
        _k7: 1000,
        _i6: function (t) {
            return this._k7 + 0.3 * (t - this._k7)
        },
        _k1: function (t, i) {
            Date[Rr]();
            var e = this[ck].nodes;
            for (var n in e) {
                var s = e[n];
                i && (s.x += Math.random() - 0.5, s.y += Math[fc]() - 0.5),
                YD.call(this, s)
            }
            var r = this._nbodyForce;
            r || (r = this._nbodyForce = zD()),
            r.init(this[ck].nodesArray, - this.repulsion * this.repulsion * this[Xk]);
            for (var n in e)
            r[Kk](e[n]);
            if (this.elastic) {
                var h = this.layoutDatas[Vk];
                for (var n in h)
                HD[tr](this, h[n])
            }
            return this._k0(t)
        },
        _k0: function (t) {
            var i = this[ck].minEnergy;
            this[ck][Zk];
            var e = this.layoutDatas.nodes,
            t = this.timeStep,
            n = 0,
            s = this._gu;
            for (var r in e) {
                var h = e[r],
                a = h.fx / h.mass,
                o = h.fy / h.mass,
                f = h.vx += a * t,
                _ = h.vy += o * t;
                h.x += f * t,
                h.y += _ * t,
                i > n && (n += 2 * (f * f + _ * _)),
                h.fx = 0,
                h.fy = 0,
                h.vx *= s,
                h.vy *= s
            }
            return this.layoutDatas.currentEnergy = n,
            n >= i
        }
    },
    qL.nm(Es, xs),
    UC.SpringLayouter = Es;
    var UD = function (t) {
        this.locations = t
    };
    UD.prototype = {
        oldLocations: null,
        _l8t: null,
        duration: 700,
        animationType: qC.easeOutStrong,
        _6d: function (t) {
            if (this._l8t = t, this.oldLocations = {
            }, t)
            for (var i in t) {
                var e = t[i],
                n = e[Bp];
                this[Jk][i] = {
                    x: n.x,
                    y: n.y
                }
            }
        },
        setLocation: function (t, i, e) {
            t[HP](i, e)
        },
        forEach: function (t, i) {
            for (var e in this[Qk]) {
                var n = this.oldLocations[e],
                s = this.locations[e];
                t[tr](i, n, s)
            }
        },
        _hq: function (t) {
            this[ga](function (i, e) {
                var n = e.node,
                s = i.x + (e.x - i.x) * t,
                r = i.y + (e.y - i.y) * t;
                this[HP](n, s, r)
            }, this)
        },
        stop: function () {
            this._l6nimate && this._l6nimate._jo()
        },
        start: function (t) {
            this._l6nimate ? (this._l6nimate._jo(), this._l6nimate._gr = this.duration, this._l6nimate._dgType = this.animationType, this._l6nimate._onfinish = this._onfinish)  : this._l6nimate = new YC(this._hq, this, this.duration, this[CM]),
            this._l6nimate._jh(t)
        }
    },
    qL.ls(UD[Wa], {
        locations: {
            get: function () {
                return this._l8t
            },
            set: function (t) {
                this._l8t != t && this._6d(t)
            }
        }
    });
    var WD = function (t) {
        var i = new HL;
        return t[ga](function (t) {
            t instanceof PN && (t[tL]() || i[th](t._l8x || t))
        }),
        i
    },
    VD = function (t, i, e, n, s, r) {
        if (i instanceof xC)
        return t(i, e, n, s, r),
        i;
        if (i instanceof KN) {
            var h = new HL;
            i._inModel.forEach(function (t) {
                return i.isVisible(t) ? t instanceof AN && t._fi && t.hasChildren() ? (t.$location = null, void 0)  : (h[th](t), void 0)  : void 0
            }),
            i = h
        }
        var i = WD(i);
        return qL.nj(i, function (i) {
            t(i, e, n, s, r)
        }),
        i
    },
    XD = function (t, i, e, n, s) {
        return VD(ZD, t, i, e, n, s)
    },
    KD = function (t, i, e, n, s) {
        return VD(JD, t, i, e, n, s)
    };
    Fe[Wa].forEachByTopoDepthFirstSearch = function (t, i, e, n) {
        XD(this, t, i, e, n)
    },
    Fe[Wa].forEachByTopoBreadthFirstSearch = function (t, i, e, n) {
        KD(this, t, i, e, n)
    };
    var ZD = function (t, i, e, n, s) {
        function r(t, i, e, n, s, h, a, o) {
            t._marker = h,
            n || i.call(e, t, o, a),
            ms(t, function (o) {
                r(o, i, e, n, s, h, a + 1, t)
            }, o, s, h),
            n && i[tr](e, t, o, a)
        }
        r(t, i, e, n, s, {
        }, 0)
    },
    JD = function (t, i, e, n, s) {
        function r(t, i, e, n, s, h, a) {
            var o,
            f = t[Ps];
            t.forEach(function (t, r) {
                var _ = t.v;
                _._marker = h,
                n || i[tr](e, _, t._from, a, r, f),
                ms(_, function (t) {
                    o || (o = [
                    ]),
                    t._marker = h,
                    o.push({
                        v: t,
                        _from: _
                    })
                }, _, s, h)
            }),
            o && r(o, i, e, n, s, h, a + 1),
            n && t[ga](function (t, n) {
                i[tr](e, t.v, t._from, a, n, f)
            })
        }
        r([{
            v: t
        }
        ], i, e, n, s, {
        }, 0)
    };
    UC[iL] = qL.n9,
    UC.log = qL.nx,
    UC[bh] = function (t) {
        console.error(t)
    },
    UC[eL] = qL.nr,
    UC[nL] = IL,
    UC.isOpera = PL,
    UC[sL] = AL,
    UC[rL] = ML,
    UC.isFirefox = kL,
    UC[hL] = CL,
    UC[aL] = LL,
    UC[oL] = RL,
    UC.DefaultStyles = VN,
    UC[fL] = zL,
    UC.Styles = CN,
    UC[_L] = WC,
    UC[cL] = TR,
    UC.Graph = KN,
    UC.BaseUI = kN,
    UC[uL] = jN,
    UC.NodeUI = Ke,
    UC.EdgeUI = Xe,
    UC.LabelUI = GN,
    UC.ImageUI = $N,
    UC[dL] = SN,
    UC[lL] = bR,
    UC[bT] = QC,
    UC[vL] = vs,
    UC[_p] = TN,
    UC[PP] = PN,
    UC[nI] = ON,
    UC[bL] = Fe,
    UC.EdgeBundle = qD,
    UC[gL] = MD,
    UC.name = yL;
    var QD = pL;
    return UC.version = xL,
    UC[Ty] = EL,
    UC[mL] = 'Copyright ? 2014 Qunee.com',
    UC[MA] = SC._kq,
    UC[wL] = JN,
    qL.nx = function () {
    },
    UC[wy] = TL,
    UC
}(window, document);
