var randomNoteNum
var totalScore = 0;
var timerLength = 10 / 60; // in minutes
var timerTripped = false;
var keyType = "major";
var noteRange = 1 * 12;
var scaleInterval = 2;
var keyOf = 0;
var noteKeyRange = 7;
var scaleAdapter = 0;
var noteAdapter = 24; // limited by the lower limit of my audio files, 10 is the lowest you should go.
var testing = "yep";
var noteToSing = "";
var instrument = "synth";
var newQuestionTime = false;
var beginning = true;
var previousNote = "";
var audioArray = [];
var synth = new Tone.PolySynth(1, Tone.Synth).toMaster();
var score = 0;
var intervalDirection = "up";
var randomScaleNum=0;
var buttonColor = '#00cc00';
var buttonNormalColor = 'buttonface';
var accompaniment = true;
var chordIsDone=true;
var lastReferenceInversion=false;
var referenceInversion=false;
var lastReference=0;
var lastRandomScaleNum=0;
var firstChordOver=false;
var inversionsAreOn=true;
var newLastRandomScaleNum=0;
var referenceVolume=50;
var accompanimentVolume=50;
var justPlayingScaleFam=false;
var continuous=false;
var timeRequirement=2;
var pauseTimeStart = 0;
var pauseTimeAmount=0;
var paused=false;
var majorCheck=false;
var thirdType="";
var previousPauseTimeAmount=0;
function startTimer() {
	// set timer for 60 minutes from start
	var now = new Date();
	timeEnd = new Date(now.getTime());

	updateTimer();
}

function pauseTimer(){
var pauseTime = new Date();
pauseTimeStart = new Date(pauseTime.getTime());
}
/**
 * Function to update the time remaining every second
 */
function updateTimer() {

	var now = new Date();
		if (paused){
	pauseTimeAmount=previousPauseTimeAmount+(now.getTime()-pauseTimeStart);
	}
	var distance = (now.getTime() - pauseTimeAmount) - timeEnd.getTime();
	var minutes = Math.floor(distance / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	var distance2 = distance / (totalScore + 1);
	var minutes2 = Math.floor(distance2 / (1000 * 60));
	var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

	if (minutes < 10)
		minutes = "0" + minutes;
	if (seconds < 10)
		seconds = "0" + seconds;

	document.querySelector('#countdown').innerText = minutes + ":" + seconds + " ";
	document.getElementById("averagetime").innerText = minutes2 + ":" + seconds2 + " ";
	if (minutes > 0 || seconds > 0) {
		window.setTimeout(function () {
			updateTimer();
		}, 1000);
	} else if (minutes == 0 && seconds == 0) {
		window.setTimeout(function () {
			updateTimer();
		}, 1000);
	}

}

!function (e) {
	"use strict";

	function t(e) {
		if (Array.isArray(e)) {
			for (var t = 0, i = Array(e.length); t < e.length; t++)
				i[t] = e[t];
			return i
		}
		return Array.from(e)
	}

	function i(e, t) {
		if (!e)
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}

	function r(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}),
		t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}

	function o(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}

	function n(e, t) {
		if (t || (t = "undefined" == typeof window ? global : window), void 0 !== t[e])
			return t[e];
		for (var i = ["webkit", "moz", "ms", "o"], r = 0, o = i.length, n = e.charAt(0).toUpperCase() + e.substr(1); r < o; r++) {
			var a = t[i[r] + n];
			if (void 0 !== a)
				return a
		}
		return null
	}

	function a(e, t, i, r, o, n, l) {
		if ("function" != typeof r)
			throw new TypeError("Invalid animation rule:", r);
		var s = e - i,
		d = s / o,
		c = 0;
		d > 1 && (d = 1),
		1 !== d && (c = r(d), isFinite(c) && !isNaN(c) && (d = c)),
		t && t(d),
		s < o ? l.frame = ue(function (e) {
				return a(e, t, i, r, o, n, l)
			}) : (n && n(), l.inProgress = !1)
	}

	function l() {
		Array.prototype.constructor.apply(this, arguments)
	}

	function s(e) {
		if (!(e instanceof DOMException && 2152923147 === e.result))
			throw e
	}

	function d(e) {
		return e.majorTicks instanceof Array || (e.majorTicks = e.majorTicks ? [e.majorTicks] : []),
		e.majorTicks.length || (e.majorTicks.push(Te.formatMajorTickNumber(e.minValue, e)), e.majorTicks.push(Te.formatMajorTickNumber(e.maxValue, e))),
		["right" !== e.tickSide, "left" !== e.tickSide]
	}

	function c(e, t, i, r, o, n) {
		e.beginPath(),
		e.moveTo(t + n, i),
		e.lineTo(t + r - n, i),
		e.quadraticCurveTo(t + r, i, t + r, i + n),
		e.lineTo(t + r, i + o - n),
		e.quadraticCurveTo(t + r, i + o, t + r - n, i + o),
		e.lineTo(t + n, i + o),
		e.quadraticCurveTo(t, i + o, t, i + o - n),
		e.lineTo(t, i + n),
		e.quadraticCurveTo(t, i, t + n, i),
		e.closePath()
	}

	function h(e, t) {
		var i = t.valueDec,
		r = t.valueInt,
		o = 0,
		n = void 0,
		a = void 0,
		l = void 0;
		if (e = parseFloat(e), l = e < 0, e = Math.abs(e), i > 0) {
			for (a = e.toFixed(i).toString().split("."), n = r - a[0].length; o < n; ++o)
				a[0] = "0" + a[0];
			a = (l ? "-" : "") + a[0] + "." + a[1]
		} else {
			for (a = Math.round(e).toString(), n = r - a.length; o < n; ++o)
				a = "0" + a;
			a = (l ? "-" : "") + a
		}
		return a
	}

	function u(e, t) {
		var i = void 0,
		r = !1;
		return i = 0 === t.majorTicksDec ? Math.round(e).toString() : e.toFixed(t.majorTicksDec),
		t.majorTicksInt > 1 ? (r = ~i.indexOf("."), ~i.indexOf("-") ? "-" + [t.majorTicksInt + t.majorTicksDec + 2 + (r ? 1 : 0) - i.length].join("0") + i.replace("-", "") : [t.majorTicksInt + t.majorTicksDec + 1 + (r ? 1 : 0) - i.length].join("0") + i) : i
	}

	function f(e) {
		return e * Math.PI / 180
	}

	function m(e, t) {
		return {
			x: -e * Math.sin(t),
			y: e * Math.cos(t)
		}
	}

	function v(e, t, i, r) {
		var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
		n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
		a = e.createLinearGradient(o ? 0 : n, o ? n : 0, o ? 0 : r, o ? r : 0);
		return a.addColorStop(0, t),
		a.addColorStop(1, i),
		a
	}

	function b(e, t) {
		if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
			return e.restore(), !0;
		e.save();
		var i = t.borderShadowWidth;
		return i && (e.shadowBlur = i, e.shadowColor = t.colorBorderShadow),
		!0
	}

	function g(e, t) {
		t.needleShadow && (e.shadowOffsetX = 2, e.shadowOffsetY = 2, e.shadowBlur = 10, e.shadowColor = t.colorNeedleShadowDown)
	}

	function p(e, t, i) {
		return e["font" + t + "Style"] + " " + e["font" + t + "Weight"] + " " + e["font" + t + "Size"] * i + "px " + e["font" + t]
	}

	function w(e) {
		e.shadowOffsetX = null,
		e.shadowOffsetY = null,
		e.shadowBlur = null,
		e.shadowColor = "",
		e.strokeStyle = null,
		e.lineWidth = 0,
		e.save()
	}

	function k(e, t, i, r) {
		t.valueTextShadow && (e.shadowOffsetX = i, e.shadowOffsetY = i, e.shadowBlur = r, e.shadowColor = t.colorValueTextShadow)
	}

	function y(e, t, i, r, o, n) {
		if (t.valueBox) {
			w(e);
			var a = t.valueDec ? 1 + t.valueDec : 0,
			l = "9".repeat(Math.max.apply(null, [String(parseInt(i)).length + a].concat(t.majorTicks.map(function (e) {
								return String(parseInt(e, 10)).length + a
							})))),
			s = t.valueText || h(i, t),
			d = n / 200,
			u = n / 100,
			f = .4 * u,
			m = 1.2 * u;
			e.font = p(t, "Value", d),
			k(e, t, f, m);
			var v = e.measureText(t.valueText ? s : "-" + h(Number(l), t)).width;
			w(e);
			var b = parseFloat(t.fontValueSize) * d + f + m,
			g = u * parseFloat(t.valueBoxStroke),
			y = 2 * n - 2 * g,
			x = v + 10 * u,
			T = 1.1 * b + f + m,
			S = u * t.valueBoxBorderRadius,
			W = (parseFloat(t.valueBoxWidth) || 0) / 100 * y;
			W > x && (x = W),
			x > y && (x = y);
			var O = r - x / 2,
			V = o - T / 2,
			P = o - 5.75 * u;
			if (e.beginPath(), S ? c(e, O, V, x, T, S) : e.rect(O, V, x, T), g) {
				var M = e.createRadialGradient(r, P, 10 * u, r, P, 20 * u);
				M.addColorStop(0, t.colorValueBoxRect),
				M.addColorStop(1, t.colorValueBoxRectEnd),
				e.strokeStyle = M,
				e.lineWidth = g,
				e.stroke()
			}
			t.colorValueBoxShadow && (e.shadowBlur = 1.2 * u, e.shadowColor = t.colorValueBoxShadow),
			t.colorValueBoxBackground && (e.fillStyle = t.colorValueBoxBackground, e.fill()),
			e.closePath(),
			e.restore(),
			k(e, t, f, m),
			e.fillStyle = t.colorValueText,
			e.textAlign = "center",
			e.textBaseline = "alphabetic",
			e.fillText(s, O + x / 2, o + T / 2 - b / 3),
			e.restore()
		}
	}

	function x(e) {
		var t = e.value,
		i = e.minValue,
		r = e.maxValue,
		o = .01 * (r - i);
		return {
			normal: t < i ? i : t > r ? r : t,
			indented: t < i ? i - o : t > r ? r + o : t
		}
	}

	function T(e, t, i, r, o) {
		i.beginPath(),
		i.arc(0, 0, ke(e), 0, 2 * Se, !0),
		i.lineWidth = t,
		i.strokeStyle = o ? Te.linearGradient(i, r, o, e) : r,
		i.stroke(),
		i.closePath()
	}

	function S(e, t) {
		var i = be.pixelRatio;
		return e.maxRadius || (e.maxRadius = e.max - t.borderShadowWidth - t.borderOuterWidth * i - t.borderMiddleWidth * i - t.borderInnerWidth * i + (t.borderOuterWidth ? .5 : 0) + (t.borderMiddleWidth ? .5 : 0) + (t.borderInnerWidth ? .5 : 0)),
		e.maxRadius
	}

	function W(e, t) {
		var i = be.pixelRatio,
		r = t.borderShadowWidth * i,
		o = e.max - r - t.borderOuterWidth * i / 2,
		n = o - t.borderOuterWidth * i / 2 - t.borderMiddleWidth * i / 2 + .5,
		a = n - t.borderMiddleWidth * i / 2 - t.borderInnerWidth * i / 2 + .5,
		l = S(e, t),
		s = void 0,
		d = !1;
		e.save(),
		t.borderOuterWidth && (d = Te.drawShadow(e, t, d), T(o, t.borderOuterWidth * i, e, t.colorBorderOuter, t.colorBorderOuterEnd)),
		t.borderMiddleWidth && (d = Te.drawShadow(e, t, d), T(n, t.borderMiddleWidth * i, e, t.colorBorderMiddle, t.colorBorderMiddleEnd)),
		t.borderInnerWidth && (d = Te.drawShadow(e, t, d), T(a, t.borderInnerWidth * i, e, t.colorBorderInner, t.colorBorderInnerEnd)),
		Te.drawShadow(e, t, d),
		e.beginPath(),
		e.arc(0, 0, ke(l), 0, 2 * Se, !0),
		t.colorPlateEnd ? (s = e.createRadialGradient(0, 0, l / 2, 0, 0, l), s.addColorStop(0, t.colorPlate), s.addColorStop(1, t.colorPlateEnd)) : s = t.colorPlate,
		e.fillStyle = s,
		e.fill(),
		e.closePath(),
		e.restore()
	}

	function O(e, t) {
		var i = e.max * (parseFloat(t.highlightsWidth) || 0) / 100;
		if (i) {
			var r = ke(P(e, t) - i / 2),
			o = 0,
			n = t.highlights.length,
			a = (t.maxValue - t.minValue) / t.ticksAngle;
			for (e.save(); o < n; o++) {
				var l = t.highlights[o];
				e.beginPath(),
				e.rotate(We),
				e.arc(0, 0, r, Te.radians(t.startAngle + (l.from - t.minValue) / a), Te.radians(t.startAngle + (l.to - t.minValue) / a), !1),
				e.strokeStyle = l.color,
				e.lineWidth = i,
				e.stroke(),
				e.closePath(),
				e.restore(),
				e.save()
			}
		}
	}

	function V(e, t) {
		var i = P(e, t),
		r = void 0,
		o = void 0,
		n = void 0,
		a = 0,
		l = 0,
		s = Math.abs(t.minorTicks) || 0,
		d = t.ticksAngle / (t.maxValue - t.minValue);
		for (e.lineWidth = be.pixelRatio, e.strokeStyle = t.colorMinorTicks || t.colorStrokeTicks, e.save(), t.exactTicks ? (o = t.maxValue - t.minValue, r = s ? o / s : 0, l = (t.majorTicks[0] % s || 0) * d) : r = s * (t.majorTicks.length - 1); a < r; ++a)
			n = t.startAngle + l + a * (t.ticksAngle / r), e.rotate(Te.radians(n)), e.beginPath(), e.moveTo(0, i), e.lineTo(0, i - .075 * e.max), A(e)
	}

	function P(e, t) {
		var i = e.max / 100;
		return S(e, t) - 5 * i - (t.barWidth ? 2 * (parseFloat(t.barStrokeWidth) || 0) + ((parseFloat(t.barWidth) || 0) + 5) * i : 0)
	}

	function M(e, t) {
		Te.prepareTicks(t);
		var i = ke(P(e, t)),
		r = void 0,
		o = void 0,
		n = t.majorTicks.length,
		a = be.pixelRatio;
		for (e.lineWidth = 2 * a, e.save(), o = t.colorMajorTicks instanceof Array ? t.colorMajorTicks : new Array(n).fill(t.colorStrokeTicks || t.colorMajorTicks), r = 0; r < n; ++r)
			e.strokeStyle = o[r], e.rotate(Te.radians(B(t, t.exactTicks ? t.majorTicks[r] : r, n))), e.beginPath(), e.moveTo(0, i), e.lineTo(0, i - .15 * e.max), A(e);
		t.strokeTicks && (e.strokeStyle = t.colorStrokeTicks || o[0], e.rotate(We), e.beginPath(), e.arc(0, 0, i, Te.radians(t.startAngle), Te.radians(t.startAngle + t.ticksAngle), !1), A(e))
	}

	function B(e, t, i) {
		if (e.exactTicks) {
			var r = e.ticksAngle / (e.maxValue - e.minValue);
			return e.startAngle + r * (t - e.minValue)
		}
		return e.startAngle + t * (e.ticksAngle / (i - 1))
	}

	function A(e) {
		e.stroke(),
		e.restore(),
		e.closePath(),
		e.save()
	}

	function j(e, t) {
		var i = P(e, t) - .15 * e.max,
		r = {},
		o = 0,
		n = t.majorTicks.length,
		a = "needle" !== t.animationTarget,
		l = t.colorNumbers instanceof Array ? t.colorNumbers : new Array(n).fill(t.colorNumbers),
		s = a ?  - (t.value - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle : 0;
		for (a && (e.save(), e.rotate(-Te.radians(s))), e.font = Te.font(t, "Numbers", e.max / 200), e.lineWidth = 0, e.textAlign = "center", e.textBaseline = "middle"; o < n; ++o) {
			var d = s + B(t, t.exactTicks ? t.majorTicks[o] : o, n),
			c = e.measureText(t.majorTicks[o]).width,
			h = t.fontNumbersSize,
			u = Math.sqrt(c * c + h * h) / 2,
			f = Te.radialPoint(i - u - t.numbersMargin / 100 * e.max, Te.radians(d));
			360 === d && (d = 0),
			r[d] || (r[d] = !0, e.fillStyle = l[o], e.fillText(t.majorTicks[o], f.x, f.y))
		}
		a && e.restore()
	}

	function C(e, t) {
		t.title && (e.save(), e.font = Te.font(t, "Title", e.max / 200), e.fillStyle = t.colorTitle, e.textAlign = "center", e.fillText(t.title, 0, -e.max / 4.25, .8 * e.max), e.restore())
	}

	function N(e, t) {
		t.units && (e.save(), e.font = Te.font(t, "Units", e.max / 200), e.fillStyle = t.colorUnits, e.textAlign = "center", e.fillText(t.units, 0, e.max / 3.25, .8 * e.max), e.restore())
	}

	function E(e, t) {
		if (t.needle) {
			var i = t.ticksAngle < 360 ? Te.normalizedValue(t).indented : t.value,
			r = S(e, t),
			o = ke(r / 100 * t.needleCircleSize),
			n = ke(r / 100 * t.needleCircleSize * .75),
			a = ke(r / 100 * t.needleEnd),
			l = ke(t.needleStart ? r / 100 * t.needleStart : 0),
			s = r / 100 * t.needleWidth,
			d = r / 100 * t.needleWidth / 2,
			c = be.pixelRatio,
			h = "needle" !== t.animationTarget;
			e.save(),
			Te.drawNeedleShadow(e, t),
			e.rotate(Te.radians(h ? t.startAngle : t.startAngle + (i - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle)),
			e.fillStyle = Te.linearGradient(e, t.colorNeedle, t.colorNeedleEnd, a - l),
			"arrow" === t.needleType ? (e.beginPath(), e.moveTo(-d, -l), e.lineTo(-s, 0), e.lineTo(-1 * c, a), e.lineTo(c, a), e.lineTo(s, 0), e.lineTo(d, -l), e.closePath(), e.fill(), e.beginPath(), e.lineTo( - .5 * c, a), e.lineTo(-1 * c, a), e.lineTo(-s, 0), e.lineTo(-d, -l), e.lineTo(d / 2 * c - 2 * c, -l), e.closePath(), e.fillStyle = t.colorNeedleShadowUp, e.fill()) : (e.beginPath(), e.moveTo(-d, a), e.lineTo(-d, l), e.lineTo(d, l), e.lineTo(d, a), e.closePath(), e.fill()),
			t.needleCircleSize && (e.restore(), Te.drawNeedleShadow(e, t), t.needleCircleOuter && (e.beginPath(), e.arc(0, 0, o, 0, 2 * Se, !0), e.fillStyle = Te.linearGradient(e, t.colorNeedleCircleOuter, t.colorNeedleCircleOuterEnd, o), e.fill(), e.closePath()), t.needleCircleInner && (e.beginPath(), e.arc(0, 0, n, 0, 2 * Se, !0), e.fillStyle = Te.linearGradient(e, t.colorNeedleCircleInner, t.colorNeedleCircleInnerEnd, n), e.fill(), e.closePath()), e.restore())
		}
	}

	function _(e, t, i) {
		Te.drawValueBox(e, t, i, 0, e.max - .33 * e.max, e.max)
	}

	function R(e, t) {
		var i = e.max / 100,
		r = S(e, t) - 5 * i,
		o = parseFloat(t.barStrokeWidth) || 0,
		n = (parseFloat(t.barWidth) || 0) * i,
		a = r - 2 * o - n,
		l = (r - a) / 2,
		s = a + l,
		d = o / s,
		c = t.startAngle,
		h = t.startAngle + t.ticksAngle;
		e.save(),
		e.rotate(We),
		o && (e.beginPath(), e.arc(0, 0, s, Te.radians(c) - d, Te.radians(h) + d, !1), e.strokeStyle = t.colorBarStroke, e.lineWidth = 2 * l, e.stroke(), e.closePath()),
		n && (e.beginPath(), e.arc(0, 0, s, Te.radians(c), Te.radians(h), !1), e.strokeStyle = t.colorBar, e.lineWidth = n, e.stroke(), e.closePath(), t.barShadow && (e.beginPath(), e.arc(0, 0, r, Te.radians(c), Te.radians(h), !1), e.clip(), e.beginPath(), e.strokeStyle = t.colorBar, e.lineWidth = 1, e.shadowBlur = t.barShadow, e.shadowColor = t.colorBarShadow, e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.arc(0, 0, r, Te.radians(t.startAngle), Te.radians(t.startAngle + t.ticksAngle), !1), e.stroke(), e.closePath(), e.restore(), e.rotate(We)), t.barProgress && (e.beginPath(), e.arc(0, 0, s, Te.radians(c), Te.radians(c + (Te.normalizedValue(t).normal - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle), !1), e.strokeStyle = t.colorBarProgress, e.lineWidth = n, e.stroke(), e.closePath())),
		e.restore()
	}

	function I(e) {
		return e.options.animatedValue ? e.options.value : e.value
	}

	function D(e, t, i, r, o, n, a, l) {
		e.beginPath(),
		e.fillStyle = l ? Te.linearGradient(e, a, l, o > n ? o : n, n > o, o > n ? i : r) : a,
		t > 0 ? Te.roundRect(e, i, r, o, n, t) : e.rect(i, r, o, n),
		e.fill(),
		e.closePath()
	}

	function z(e, t, i, r, o, n, a, l, s) {
		e.beginPath(),
		e.lineWidth = t,
		e.strokeStyle = s ? Te.linearGradient(e, l, s, a, !0, o) : l,
		i > 0 ? Te.roundRect(e, r, o, n, a, i) : e.rect(r, o, n, a),
		e.stroke(),
		e.closePath()
	}

	function L(e, t, i, r, o, n) {
		var a = be.pixelRatio;
		e.save();
		var l = t.borderRadius * a,
		s = o - t.borderShadowWidth - t.borderOuterWidth * a,
		d = s - t.borderOuterWidth * a - t.borderMiddleWidth * a,
		c = d - t.borderMiddleWidth * a - t.borderInnerWidth * a,
		h = c - t.borderInnerWidth * a,
		u = n - t.borderShadowWidth - t.borderOuterWidth * a,
		f = u - t.borderOuterWidth * a - t.borderMiddleWidth * a,
		m = f - t.borderMiddleWidth * a - t.borderInnerWidth * a,
		v = m - t.borderInnerWidth * a,
		b = i - (d - s) / 2,
		g = b - (c - d) / 2,
		p = g - (h - c) / 2,
		w = r - (f - u) / 2,
		k = w - (m - f) / 2,
		y = k - (v - m) / 2,
		x = 0,
		T = !1;
		return t.borderOuterWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderOuterWidth * a, l, i + t.borderOuterWidth * a / 2 - x, r + t.borderOuterWidth * a / 2 - x, s, u, t.colorBorderOuter, t.colorBorderOuterEnd), x += .5 * a),
		t.borderMiddleWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderMiddleWidth * a, l -= 1 + 2 * x, b + t.borderMiddleWidth * a / 2 - x, w + t.borderMiddleWidth * a / 2 - x, d + 2 * x, f + 2 * x, t.colorBorderMiddle, t.colorBorderMiddleEnd), x += .5 * a),
		t.borderInnerWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderInnerWidth * a, l -= 1 + 2 * x, g + t.borderInnerWidth * a / 2 - x, k + t.borderInnerWidth * a / 2 - x, c + 2 * x, m + 2 * x, t.colorBorderInner, t.colorBorderInnerEnd), x += .5 * a),
		Te.drawShadow(e, t, T),
		D(e, l, p, y, h + 2 * x, v + 2 * x, t.colorPlate, t.colorPlateEnd),
		e.restore(),
		[p, y, h, v]
	}

	function G(e, t, i, r, o, n) {
		var a = be.pixelRatio,
		l = n >= o,
		s = l ? .85 * o : n,
		d = l ? n : o;
		i = l ? we(i + (o - s) / 2) : i;
		var c = !!t.title,
		h = !!t.units,
		u = !!t.valueBox,
		f = void 0,
		m = void 0,
		v = void 0;
		l ? (m = we(.05 * d), f = we(.075 * d), v = we(.11 * d), c && (d -= f, r += f), h && (d -= m), u && (d -= v)) : (m = f = we(.15 * s), c && (s -= f, r += f), h && (s -= m));
		var b = 2 * t.barStrokeWidth,
		g = t.barBeginCircle ? we(s * t.barBeginCircle / 200 - b / 2) : 0,
		p = we(s * t.barWidth / 100 - b),
		w = we(d * t.barLength / 100 - b),
		k = we((d - w) / 2),
		y = we(i + (l ? s / 2 : k + g)),
		x = we(r + (l ? d - k - g + b / 2 : s / 2)),
		T = !l || t.hasLeft && t.hasRight ? 0 : (t.hasRight ? -1 : 1) * t.ticksWidth / 100 * s,
		S = l || t.hasLeft && t.hasRight ? 0 : (t.hasRight ? -1 : 1) * t.ticksWidth / 100 * s;
		return e.barDimensions = {
			isVertical: l,
			width: s,
			length: d,
			barWidth: p,
			barLength: w,
			strokeWidth: b,
			barMargin: k,
			radius: g,
			pixelRatio: a,
			barOffset: null,
			titleMargin: c ? f : 0,
			unitsMargin: h ? m : 0,
			get ticksLength() {
				return this.barLength - this.barOffset - this.strokeWidth
			},
			X: i + T,
			Y: r + S,
			x0: y + T,
			y0: x + S,
			baseX: i,
			baseY: r,
			ticksPadding: t.ticksPadding / 100
		},
		e.barDimensions
	}

	function F(e, t, i, r, o, n, a) {
		var l = G(e, t, r, o, n, a),
		s = l.isVertical,
		d = l.width,
		c = l.barWidth,
		h = l.barLength,
		u = l.strokeWidth,
		f = l.barMargin,
		m = l.radius,
		v = l.x0,
		b = l.y0,
		g = l.X,
		p = l.Y,
		w = h;
		if (e.save(), e.beginPath(), t.barBeginCircle) {
			var k = Te.radians(s ? 270 : 0),
			y = Math.asin(c / 2 / m),
			x = Math.cos(y),
			T = Math.sin(y),
			S = v + (s ? m * T : m * x - u / 2),
			W = s ? b - m * x : b + m * T,
			O = ke(s ? W - b : S - v);
			e.barDimensions.barOffset = we(O + m);
			var V = s ? we(v - m * T) : S,
			P = s ? W : we(b - m * T);
			"progress" === i && (h = e.barDimensions.barOffset + (h - e.barDimensions.barOffset) * (Te.normalizedValue(t).normal - t.minValue) / (t.maxValue - t.minValue));
			var M = we(S + h - e.barDimensions.barOffset + u / 2),
			B = we(W - h + e.barDimensions.barOffset - u / 2);
			e.arc(v, b, m, k + y, k - y),
			s ? (e.moveTo(S, P), e.lineTo(S, B), e.lineTo(V, B), e.lineTo(V, P)) : (e.moveTo(S, P), e.lineTo(M, P), e.lineTo(M, W), e.lineTo(S, W))
		} else {
			var A = we(s ? g + (d - c) / 2 : g + f),
			j = we(s ? p + h + f : p + (d - c) / 2);
			"progress" === i && (h *= (t.value - t.minValue) / (t.maxValue - t.minValue)),
			s ? e.rect(A, j, c, -h) : e.rect(A, j, h, c)
		}
		"progress" !== i && t.barStrokeWidth && (e.lineWidth = u, e.strokeStyle = t.colorBarStroke, e.stroke()),
		"progress" !== i && t.colorBar ? (e.fillStyle = t.colorBarEnd ? Te.linearGradient(e, t.colorBar, t.colorBarEnd, h, s, s ? p : g) : t.colorBar, e.fill()) : "progress" === i && t.colorBarProgress && (e.fillStyle = t.colorBarProgressEnd ? Te.linearGradient(e, t.colorBarProgress, t.colorBarProgressEnd, w, s, s ? p : g) : t.colorBarProgress, e.fill()),
		e.closePath(),
		t.barBeginCircle && (e.barDimensions.radius += u),
		e.barDimensions.barWidth += u,
		e.barDimensions.barLength += u
	}

	function X(e, t, i, r, o, n) {
		F(e, t, "", i, r, o, n)
	}

	function Y(e, t) {
		return t.needleSide !== e || t.tickSide !== e || t.numberSide !== e
	}

	function U(e, t, i, r, o, n) {
		t.barProgress && F(e, t, "progress", i, r, o, n)
	}

	function q(e, t) {
		var i = e.barDimensions,
		r = i.isVertical,
		o = i.width,
		n = i.length,
		a = i.barWidth,
		l = i.barOffset,
		s = i.barMargin,
		d = i.X,
		c = i.Y,
		h = i.ticksLength,
		u = i.ticksPadding,
		f = o * (parseFloat(t.highlightsWidth) || 0) / 100;
		if (t.highlights && f) {
			var m = "right" !== t.tickSide,
			v = "left" !== t.tickSide,
			b = 0,
			g = t.highlights.length,
			p = (o - a) / 2,
			w = t.maxValue - t.minValue,
			k = we(r ? d + p : d + s + l),
			y = f,
			x = r ? c + n - s - l : c + p,
			T = we((t.ticksWidth / 100 + u) * o) + (f - t.ticksWidth / 100 * o),
			S = we(a + u * o);
			for (e.save(); b < g; b++) {
				var W = t.highlights[b],
				O = h * ke(t.minValue - W.from) / w,
				V = h * ke((W.to - W.from) / w);
				e.beginPath(),
				e.fillStyle = W.color,
				r ? (m && e.rect(k - T, x - O, y, -V), v && e.rect(k + S, x - O, y, -V)) : (m && e.rect(k + O, x - T, V, y), v && e.rect(k + O, x + S, V, y)),
				e.fill(),
				e.closePath()
			}
		}
	}

	function H(e, t, i, r, o) {
		e.beginPath(),
		e.moveTo(t, i),
		e.lineTo(r, o),
		e.stroke(),
		e.closePath(),
		e.save()
	}

	function J(e, t, i, r, o, n, a, l, s) {
		var d = e.barDimensions,
		c = d.isVertical,
		h = d.length,
		u = d.barWidth,
		f = d.barOffset,
		m = d.barMargin,
		v = d.pixelRatio,
		b = d.width,
		g = d.X,
		p = d.Y,
		w = d.ticksLength,
		k = d.ticksPadding,
		y = (b - u) / 2,
		x = void 0,
		T = void 0,
		S = 0,
		W = i.length,
		O = void 0,
		V = s * b,
		P = y - k * b,
		M = y + u + V + k * b,
		B = t instanceof Array ? t : new Array(i.length).fill(t);
		e.lineWidth = l * v,
		e.save();
		for (var A = w / (o - r); S < W; S++)
			O = i[S], e.strokeStyle = B[S], c ? (T = p + h - m - f + (r - O) * A, n && (x = g + P, H(e, x, T, we(x - V), T)), a && (x = g + M, H(e, x, T, we(x - V), T))) : (x = g + m + f - (r - O) * A, n && (T = p + P, H(e, x, T, x, we(T - V))), a && (T = p + M, H(e, x, we(T), x, T - V)))
	}

	function $(e, t) {
		var i = Te.prepareTicks(t),
		r = le(i, 2),
		o = r[0],
		n = r[1],
		a = 2,
		l = (t.maxValue - t.minValue) / (t.majorTicks.length - 1),
		s = t.colorMajorTicks instanceof Array ? t.colorMajorTicks : new Array(t.majorTicks.length).fill(t.colorStrokeTicks || t.colorMajorTicks);
		if (J(e, s, t.exactTicks ? t.majorTicks : t.majorTicks.map(function (e, i) {
					return t.minValue + l * i
				}), t.minValue, t.maxValue, o, n, a, t.ticksWidth / 100), t.strokeTicks) {
			var d = e.barDimensions,
			c = d.isVertical,
			h = d.length,
			u = d.width,
			f = d.barWidth,
			m = d.barMargin,
			v = d.barOffset,
			b = d.X,
			g = d.Y,
			p = d.ticksLength,
			w = d.pixelRatio,
			k = d.ticksPadding,
			y = (u - f) / 2 + f + k * u,
			x = (u - f) / 2 - k * u,
			T = void 0,
			S = void 0,
			W = void 0,
			O = void 0;
			e.strokeStyle = t.colorStrokeTicks || s[0],
			a *= w,
			c ? (S = g + h - m - v + a / 2, O = S - p - a, o && (W = T = we(b + x), Z(e, T, S, W, O)), n && (W = T = we(b + y), Z(e, T, S, W, O))) : (T = b + m + v - a / 2, W = T + p + a, o && (O = S = we(g + x), Z(e, T, S, W, O)), n && (O = S = we(g + y), Z(e, T, S, W, O)))
		}
	}

	function Z(e, t, i, r, o) {
		e.beginPath(),
		e.moveTo(t, i),
		e.lineTo(r, o),
		e.stroke(),
		e.closePath()
	}

	function K(e, t) {
		var i = Te.prepareTicks(t),
		r = le(i, 2),
		o = r[0],
		n = r[1],
		a = [],
		l = t.minValue,
		s = Math.abs(t.minorTicks) || 0,
		d = s ? (t.maxValue - t.minValue) / (s * (t.majorTicks.length - 1)) : 0;
		if (s)
			if (t.exactTicks)
				for (var c = t.majorTicks[0] % s || 0; l < t.maxValue; l += s)
					a.push(c + l);
			else
				for (; l < t.maxValue; l += d)
					a.push(l);
		J(e, t.colorMinorTicks || t.colorStrokeTicks, a, t.minValue, t.maxValue, o, n, 1, t.ticksWidthMinor / 100)
	}

	function Q(e, t) {
		var i = e.barDimensions,
		r = i.isVertical,
		o = i.length,
		n = i.width,
		a = i.barWidth,
		l = i.barMargin,
		s = i.barOffset,
		d = i.X,
		c = i.Y,
		h = i.ticksLength,
		u = i.ticksPadding,
		f = t.maxValue - t.minValue,
		m = f / (t.majorTicks.length - 1),
		v = t.exactTicks ? t.majorTicks : t.majorTicks.map(function (e, i) {
				return t.minValue + m * i
			}),
		b = v.length,
		g = "right" !== t.numberSide,
		p = "left" !== t.numberSide,
		w = t.fontNumbersSize * n / 200,
		k = 0,
		y = (t.ticksWidth / 100 + 2 * u) * n,
		x = (n - a) / 2 - y,
		T = (n - a) / 2 + a + y,
		S = void 0,
		W = void 0,
		O = void 0,
		V = void 0,
		P = t.colorNumbers instanceof Array ? t.colorNumbers : new Array(b).fill(t.colorNumbers),
		M = t.numbersMargin / 100 * n;
		for (e.font = Te.font(t, "Numbers", n / 200), e.lineWidth = 0, e.textAlign = "center"; k < b; k++)
			e.fillStyle = P[k], V = t.majorTicks[k], O = t.exactTicks ? h * ((v[k] - t.minValue) / f) : k * h / (b - 1), r ? (W = c + o - l - s - O + w / 3, g && (e.textAlign = "right", e.fillText(V, d + x - M, W)), p && (e.textAlign = "left", e.fillText(V, d + T + M, W))) : (e.measureText(V).width, S = d + l + s + O, g && e.fillText(V, S, c + x - M), p && e.fillText(V, S, c + T + w + M))
	}

	function ee(e, t) {
		if (t.title) {
			var i = e.barDimensions,
			r = i.isVertical,
			o = i.width,
			n = i.length,
			a = i.baseX,
			l = i.baseY,
			s = i.titleMargin,
			d = t.fontTitleSize * o / 200,
			c = we(a + (r ? o : n) / 2),
			h = we(l + s / 2 - (r ? d : d / 2) - .025 * (r ? n : o));
			e.save(),
			e.textAlign = "center",
			e.fillStyle = t.colorTitle,
			e.font = Te.font(t, "Title", o / 200),
			e.lineWidth = 0,
			e.fillText(t.title, c, h, r ? o : n)
		}
	}

	function te(e, t) {
		if (t.units) {
			var i = e.barDimensions,
			r = i.isVertical,
			o = i.width,
			n = i.length,
			a = i.baseX,
			l = i.baseY,
			s = i.unitsMargin,
			d = t.fontUnitsSize * o / 200,
			c = we(a + (r ? o : n) / 2),
			h = we(l + (r ? n : o) + s / 2 - d / 2);
			e.save(),
			e.textAlign = "center",
			e.fillStyle = t.colorUnits,
			e.font = Te.font(t, "Units", o / 200),
			e.lineWidth = 0,
			e.fillText(t.units, c, h, r ? o : n)
		}
	}

	function ie(e, t) {
		if (t.needle) {
			var i = e.barDimensions,
			r = i.isVertical,
			o = i.width,
			n = i.length,
			a = i.barWidth,
			l = i.barOffset,
			s = i.barMargin,
			d = i.ticksLength,
			c = i.X,
			h = i.Y,
			u = i.ticksPadding,
			f = "right" !== t.needleSide,
			m = "left" !== t.needleSide,
			v = d * (Te.normalizedValue(t).indented - t.minValue) / (t.maxValue - t.minValue),
			b = (t.ticksWidth / 100 + u) * o,
			g = a / 2 + b,
			p = g * (t.needleEnd / 100),
			w = void 0,
			k = void 0,
			y = void 0,
			x = void 0,
			T = "arrow" === t.needleType.toLowerCase() ? ne : oe,
			S = (o - a) / 2,
			W = g * (t.needleStart / 100),
			O = S - b - W,
			V = S + a + b + W;
			e.save(),
			Te.drawNeedleShadow(e, t),
			r ? (y = we(h + n - s - l - v), f && (w = we(c + O), k = w + p, T(e, t, w, y, k, y, p)), m && (w = we(c + V), k = w - p, T(e, t, w, y, k, y, p, !0))) : (w = we(c + s + l + v), f && (y = we(h + O), x = y + p, T(e, t, w, y, w, x, p)), m && (y = we(h + V), x = y - p, T(e, t, w, y, w, x, p, !0))),
			e.restore()
		}
	}

	function re(e, t, i, r) {
		return t.colorNeedleEnd ? Te.linearGradient(e, r ? t.colorNeedleEnd : t.colorNeedle, r ? t.colorNeedle : t.colorNeedleEnd, i, !e.barDimensions.isVertical) : t.colorNeedle
	}

	function oe(e, t, i, r, o, n, a, l) {
		e.lineWidth = t.needleWidth,
		e.strokeStyle = re(e, t, a, l),
		e.beginPath(),
		e.moveTo(i, r),
		e.lineTo(o, n),
		e.stroke(),
		e.closePath()
	}

	function ne(e, t, i, r, o, n, a, l) {
		var s = we(.4 * a),
		d = a - s,
		c = i === o,
		h = t.needleWidth / 2;
		e.fillStyle = re(e, t, a, l),
		e.beginPath(),
		c ? (r > n && (d *= -1), e.moveTo(i - h, r), e.lineTo(i + h, r), e.lineTo(i + h, r + d), e.lineTo(i, n), e.lineTo(i - h, r + d), e.lineTo(i - h, r)) : (i > o && (d *= -1), e.moveTo(i, r - h), e.lineTo(i, r + h), e.lineTo(i + d, r + h), e.lineTo(o, r), e.lineTo(i + d, r - h), e.lineTo(i, r - h)),
		e.fill(),
		e.closePath()
	}

	function ae(e, t, i, r, o, n, a) {
		var l = (parseFloat(t.fontValueSize) || 0) * n / 200,
		s = (.11 * a - l) / 2;
		e.barDimensions.isVertical && Te.drawValueBox(e, t, i, r + n / 2, o + a - l - s, n)
	}
	var le = function () {
		function e(e, t) {
			var i = [],
			r = !0,
			o = !1,
			n = void 0;
			try {
				for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0);
			} catch (e) {
				o = !0,
				n = e
			}
			finally {
				try {
					!r && l.return && l.return()
				}
				finally {
					if (o)
						throw n
				}
			}
			return i
		}
		return function (t, i) {
			if (Array.isArray(t))
				return t;
			if (Symbol.iterator in Object(t))
				return e(t, i);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}
	(),
	se = function e(t, i, r) {
		null === t && (t = Function.prototype);
		var o = Object.getOwnPropertyDescriptor(t, i);
		if (void 0 === o) {
			var n = Object.getPrototypeOf(t);
			return null === n ? void 0 : e(n, i, r)
		}
		if ("value" in o)
			return o.value;
		var a = o.get;
		if (void 0 !== a)
			return a.call(r)
	},
	de = function e(t, i, r, o) {
		var n = Object.getOwnPropertyDescriptor(t, i);
		if (void 0 === n) {
			var a = Object.getPrototypeOf(t);
			null !== a && e(a, i, r, o)
		} else if ("value" in n && n.writable)
			n.value = r;
		else {
			var l = n.set;
			void 0 !== l && l.call(o, r)
		}
		return r
	},
	ce = function () {
		function e(e, t) {
			for (var i = 0; i < t.length; i++) {
				var r = t[i];
				r.enumerable = r.enumerable || !1,
				r.configurable = !0,
				"value" in r && (r.writable = !0),
				Object.defineProperty(e, r.key, r)
			}
		}
		return function (t, i, r) {
			return i && e(t.prototype, i),
			r && e(t, r),
			t
		}
	}
	();
	Object.assign || Object.defineProperty(Object, "assign", {
		enumerable: !1,
		configurable: !0,
		writable: !0,
		value: function (e, t) {
			if (void 0 === e || null === e)
				throw new TypeError("Cannot convert first argument to object");
			for (var i = Object(e), r = 1; r < arguments.length; r++) {
				var o = arguments[r];
				if (void 0 !== o && null !== o)
					for (var n = Object.keys(Object(o)), a = 0, l = n.length; a < l; a++) {
						var s = n[a],
						d = Object.getOwnPropertyDescriptor(o, s);
						void 0 !== d && d.enumerable && (i[s] = o[s])
					}
			}
			return i
		}
	}),
	Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
		var i;
		if (null === this)
			throw new TypeError('"this" is null or not defined');
		var r = Object(this),
		o = r.length >>> 0;
		if (0 === o)
			return -1;
		var n = +t || 0;
		if (Math.abs(n) === 1 / 0 && (n = 0), n >= o)
			return -1;
		for (i = Math.max(n >= 0 ? n : o - Math.abs(n), 0); i < o; ) {
			if (i in r && r[i] === e)
				return i;
			i++
		}
		return -1
	}),
	Array.prototype.fill || (Array.prototype.fill = function (e) {
		if (null === this)
			throw new TypeError("this is null or not defined");
		for (var t = Object(this), i = t.length >>> 0, r = arguments[1], o = r >> 0, n = o < 0 ? Math.max(i + o, 0) : Math.min(o, i), a = arguments[2], l = void 0 === a ? i : a >> 0, s = l < 0 ? Math.max(i + l, 0) : Math.min(l, i); n < s; )
			t[n] = e, n++;
		return t
	}),
	"undefined" == typeof window && (window = "undefined" == typeof global ? {}
		 : global);
	var he = function () {
		function e() {
			o(this, e),
			this._events = {},
			this.addListener = this.on,
			this.removeListener = this.off
		}
		return ce(e, [{
					key: "emit",
					value: function (e) {
						if (this._events[e]) {
							for (var t = 0, i = this._events[e].length, r = arguments.length, o = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
								o[n - 1] = arguments[n];
							for (; t < i; t++)
								this._events[e][t] && this._events[e][t].apply(this, o)
						}
					}
				}, {
					key: "once",
					value: function (e) {
						for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
							i[r - 1] = arguments[r];
						for (var o = 0, n = i.length, a = this; o < n; o++)
							!function () {
								var t = i[o],
								r = function i() {
									a.off(e, i),
									t.apply(a, arguments)
								};
								i[o] = r
							}
						();
						this.on.apply(this, [e].concat(i))
					}
				}, {
					key: "on",
					value: function (e) {
						this._events[e] || (this._events[e] = []);
						for (var t = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; t < i; t++)
							this._events[e].push(arguments.length <= t + 1 ? void 0 : arguments[t + 1])
					}
				}, {
					key: "off",
					value: function (e) {
						if (this._events[e])
							for (var t = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; t < i; t++)
								for (var r = arguments.length <= t + 1 ? void 0 : arguments[t + 1], o = void 0; ~(o = this._events[e].indexOf(r)); )
									this._events[e].splice(o, 1)
					}
				}, {
					key: "removeAllListeners",
					value: function (e) {
						delete this._events[e]
					}
				}, {
					key: "listeners",
					get: function () {
						return this._events
					}
				}
			]),
		e
	}
	(),
	ue = n("requestAnimationFrame") || function (e) {
		return setTimeout(function () {
			return e((new Date).getTime())
		}, 1e3 / 60)
	},
	fe = {
		linear: function (e) {
			return e
		},
		quad: function (e) {
			return Math.pow(e, 2)
		},
		dequad: function (e) {
			return 1 - fe.quad(1 - e)
		},
		quint: function (e) {
			return Math.pow(e, 5)
		},
		dequint: function (e) {
			return 1 - Math.pow(1 - e, 5)
		},
		cycle: function (e) {
			return 1 - Math.sin(Math.acos(e))
		},
		decycle: function (e) {
			return Math.sin(Math.acos(1 - e))
		},
		bounce: function (e) {
			return 1 - fe.debounce(1 - e)
		},
		debounce: function (e) {
			for (var t = 0, i = 1; 1; t += i, i /= 2)
				if (e >= (7 - 4 * t) / 11)
					return -Math.pow((11 - 6 * t - 11 * e) / 4, 2) + Math.pow(i, 2)
		},
		elastic: function (e) {
			return 1 - fe.delastic(1 - e)
		},
		delastic: function (e) {
			return Math.pow(2, 10 * (e - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * e)
		}
	},
	me = function () {
		function e() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "linear",
			i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
			r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
			n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
			if (o(this, e), this.duration = i, this.rule = t, this.draw = r, this.end = n, "function" != typeof this.draw)
				throw new TypeError("Invalid animation draw callback:", r);
			if ("function" != typeof this.end)
				throw new TypeError("Invalid animation end callback:", n)
		}
		return ce(e, [{
					key: "animate",
					value: function (e, t) {
						var i = this;
						this.frame && this.cancel();
						var r = window.performance && window.performance.now ? window.performance.now() : n("animationStartTime") || Date.now();
						e = e || this.draw,
						t = t || this.end,
						this.draw = e,
						this.end = t,
						this.frame = ue(function (o) {
								return a(o, e, r, fe[i.rule] || i.rule, i.duration, t, i)
							})
					}
				}, {
					key: "cancel",
					value: function () {
						if (this.frame) {
							(n("cancelAnimationFrame") || function (e) {})(this.frame),
							this.frame = null
						}
					}
				}, {
					key: "destroy",
					value: function () {
						this.cancel(),
						this.draw = null,
						this.end = null
					}
				}
			]),
		e
	}
	();
	me.rules = fe;
	var ve = function () {
		function t(i, r, n) {
			o(this, t),
			this.options = i,
			this.element = r.toLowerCase(),
			this.type = t.toDashed(n),
			this.Type = e[n],
			this.mutationsObserved = !1,
			this.isObservable = !!window.MutationObserver,
			window.GAUGES_NO_AUTO_INIT || t.domReady(this.traverse.bind(this))
		}
		return ce(t, [{
					key: "isValidNode",
					value: function (e) {
						return !(!e.tagName || e.tagName.toLowerCase() !== this.element || e.getAttribute("data-type") !== this.type)
					}
				}, {
					key: "traverse",
					value: function () {
						for (var e = document.getElementsByTagName(this.element), t = 0, i = e.length; t < i; t++)
							this.process(e[t]);
						this.isObservable && !this.mutationsObserved && (new MutationObserver(this.observe.bind(this)).observe(document.body, {
								childList: !0,
								subtree: !0,
								attributes: !0,
								characterData: !0,
								attributeOldValue: !0,
								characterDataOldValue: !0
							}), this.mutationsObserved = !0)
					}
				}, {
					key: "observe",
					value: function (e) {
						for (var t = 0, i = e.length; t < i; t++) {
							var r = e[t];
							if ("attributes" === r.type && "data-type" === r.attributeName && this.isValidNode(r.target) && r.oldValue !== this.type)
								setTimeout(this.process.bind(this, r.target));
							else if (r.addedNodes && r.addedNodes.length)
								for (var o = 0, n = r.addedNodes.length; o < n; o++)
									setTimeout(this.process.bind(this, r.addedNodes[o]))
						}
					}
				}, {
					key: "process",
					value: function (e) {
						var i = this;
						if (!this.isValidNode(e))
							return null;
						var r = void 0,
						o = JSON.parse(JSON.stringify(this.options)),
						n = null;
						for (r in o)
							if (o.hasOwnProperty(r)) {
								var a = t.toAttributeName(r),
								l = t.parse(e.getAttribute(a));
								null !== l && void 0 !== l && (o[r] = l)
							}
						return o.renderTo = e,
						n = new this.Type(o),
						n.draw && n.draw(),
						this.isObservable ? (n.observer = new MutationObserver(function (r) {
									r.forEach(function (r) {
										if ("attributes" === r.type) {
											var o = r.attributeName.toLowerCase(),
											a = e.getAttribute(o).toLowerCase();
											if ("data-type" === o && a && a !== i.type)
												n.observer.disconnect(), delete n.observer, n.destroy && n.destroy();
											else if ("data-" === o.substr(0, 5)) {
												var l = o.substr(5).split("-").map(function (e, t) {
														return t ? e.charAt(0).toUpperCase() + e.substr(1) : e
													}).join(""),
												s = {};
												s[l] = t.parse(e.getAttribute(r.attributeName)),
												"value" === l ? n && (n.value = s[l]) : n.update && n.update(s)
											}
										}
									})
								}), n.observer.observe(e, {
								attributes: !0
							}), n) : n
					}
				}
			], [{
					key: "parse",
					value: function (e) {
						if ("true" === e)
							return !0;
						if ("false" === e)
							return !1;
						if ("undefined" !== e) {
							if ("null" === e)
								return null;
							if (/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e))
								return e.split(",");
							try {
								return JSON.parse(e)
							} catch (e) {}
							return e
						}
					}
				}, {
					key: "toDashed",
					value: function (e) {
						for (var t = e.split(/(?=[A-Z])/), i = 1, r = t.length, o = t[0].toLowerCase(); i < r; i++)
							o += "-" + t[i].toLowerCase();
						return o
					}
				}, {
					key: "toCamelCase",
					value: function (e) {
						for (var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = e.split(/-/), r = 0, o = i.length, n = ""; r < o; r++)
							n += r || t ? i[r][0].toUpperCase() + i[r].substr(1).toLowerCase() : i[r].toLowerCase();
						return n
					}
				}, {
					key: "toAttributeName",
					value: function (e) {
						return "data-" + t.toDashed(e)
					}
				}, {
					key: "domReady",
					value: function (e) {
						if (/comp|inter|loaded/.test((window.document || {}).readyState + ""))
							return e();
						window.addEventListener ? window.addEventListener("DOMContentLoaded", e, !1) : window.attachEvent && window.attachEvent("onload", e)
					}
				}
			]),
		t
	}
	(),
	be = function () {
		function e(t, i, r) {
			o(this, e),
			e.collection.push(this),
			this.width = i || 0,
			this.height = r || 0,
			this.element = t,
			this.init()
		}
		return ce(e, [{
					key: "init",
					value: function () {
						var t = e.pixelRatio;
						this.element.width = this.width * t,
						this.element.height = this.height * t,
						this.element.style.width = this.width + "px",
						this.element.style.height = this.height + "px",
						this.elementClone = this.element.cloneNode(!0),
						this.context = this.element.getContext("2d"),
						this.contextClone = this.elementClone.getContext("2d"),
						this.drawWidth = this.element.width,
						this.drawHeight = this.element.height,
						this.drawX = this.drawWidth / 2,
						this.drawY = this.drawHeight / 2,
						this.minSide = this.drawX < this.drawY ? this.drawX : this.drawY,
						this.elementClone.initialized = !1,
						this.contextClone.translate(this.drawX, this.drawY),
						this.contextClone.save(),
						this.context.translate(this.drawX, this.drawY),
						this.context.save(),
						this.context.max = this.contextClone.max = this.minSide,
						this.context.maxRadius = this.contextClone.maxRadius = null
					}
				}, {
					key: "destroy",
					value: function () {
						var t = e.collection.indexOf(this);
						~t && e.collection.splice(t, 1),
						this.context.clearRect(-this.drawX, -this.drawY, this.drawWidth, this.drawHeight),
						this.context.max = null,
						delete this.context.max,
						this.context.maxRadius = null,
						delete this.context.maxRadius,
						this.context = null,
						this.contextClone = null,
						this.elementClone = null,
						this.element = null,
						this.onRedraw = null
					}
				}, {
					key: "commit",
					value: function () {
						var t = e.pixelRatio;
						return 1 !== t && (this.contextClone.scale(t, t), this.contextClone.save()),
						this
					}
				}, {
					key: "redraw",
					value: function () {
						return this.init(),
						this.onRedraw && this.onRedraw(),
						this
					}
				}
			], [{
					key: "redraw",
					value: function () {
						for (var t = 0, i = e.collection.length; t < i; t++)
							e.collection[t].redraw()
					}
				}, {
					key: "pixelRatio",
					get: function () {
						return window.devicePixelRatio || 1
					}
				}
			]),
		e
	}
	();
	be.collection = [],
	window.matchMedia && window.matchMedia("screen and (min-resolution: 2dppx)").addListener(be.redraw);
	var ge = {
		renderTo: null,
		width: 0,
		height: 0,
		minValue: 0,
		maxValue: 100,
		value: 0,
		units: !1,
		exactTicks: !1,
		majorTicks: [0, 20, 40, 60, 80, 100],
		minorTicks: 10,
		strokeTicks: !0,
		animatedValue: !1,
		animateOnInit: !1,
		title: !1,
		borders: !0,
		numbersMargin: 1,
		listeners: null,
		valueInt: 3,
		valueDec: 2,
		majorTicksInt: 1,
		majorTicksDec: 0,
		animation: !0,
		animationDuration: 500,
		animationRule: "cycle",
		colorPlate: "#fff",
		colorPlateEnd: "",
		colorMajorTicks: "#444",
		colorMinorTicks: "#666",
		colorStrokeTicks: "",
		colorTitle: "#888",
		colorUnits: "#888",
		colorNumbers: "#444",
		colorNeedle: "rgba(240,128,128,1)",
		colorNeedleEnd: "rgba(255,160,122,.9)",
		colorValueText: "#444",
		colorValueTextShadow: "rgba(0,0,0,0.3)",
		colorBorderShadow: "rgba(0,0,0,0.5)",
		colorBorderOuter: "#ddd",
		colorBorderOuterEnd: "#aaa",
		colorBorderMiddle: "#eee",
		colorBorderMiddleEnd: "#f0f0f0",
		colorBorderInner: "#fafafa",
		colorBorderInnerEnd: "#ccc",
		colorValueBoxRect: "#888",
		colorValueBoxRectEnd: "#666",
		colorValueBoxBackground: "#babab2",
		colorValueBoxShadow: "rgba(0,0,0,1)",
		colorNeedleShadowUp: "rgba(2,255,255,0.2)",
		colorNeedleShadowDown: "rgba(188,143,143,0.45)",
		colorBarStroke: "#222",
		colorBar: "#ccc",
		colorBarProgress: "#888",
		colorBarShadow: "#000",
		fontNumbers: "Arial",
		fontTitle: "Arial",
		fontUnits: "Arial",
		fontValue: "Arial",
		fontNumbersSize: 20,
		fontTitleSize: 24,
		fontUnitsSize: 22,
		fontValueSize: 26,
		fontNumbersStyle: "normal",
		fontTitleStyle: "normal",
		fontUnitsStyle: "normal",
		fontValueStyle: "normal",
		fontNumbersWeight: "normal",
		fontTitleWeight: "normal",
		fontUnitsWeight: "normal",
		fontValueWeight: "normal",
		needle: !0,
		needleShadow: !0,
		needleType: "arrow",
		needleStart: 5,
		needleEnd: 85,
		needleWidth: 4,
		borderOuterWidth: 3,
		borderMiddleWidth: 3,
		borderInnerWidth: 3,
		borderShadowWidth: 3,
		valueBox: !0,
		valueBoxStroke: 5,
		valueBoxWidth: 0,
		valueText: "",
		valueTextShadow: !0,
		valueBoxBorderRadius: 2.5,
		highlights: [{
				from: 20,
				to: 60,
				color: "#eee"
			}, {
				from: 60,
				to: 80,
				color: "#ccc"
			}, {
				from: 80,
				to: 100,
				color: "#999"
			}
		],
		highlightsWidth: 15,
		barWidth: 20,
		barStrokeWidth: 0,
		barProgress: !0,
		barShadow: 0
	};
	l.prototype = Object.create(Array.prototype),
	l.prototype.constructor = l,
	l.prototype.get = function (e) {
		if ("string" == typeof e)
			for (var t = 0, i = this.length; t < i; t++) {
				var r = this[t].options.renderTo.tagName ? this[t].options.renderTo : document.getElementById(this[t].options.renderTo || "");
				if (r.getAttribute("id") === e)
					return this[t]
			}
		else if ("number" == typeof e)
			return this[e];
		return null
	};
	var pe = "2.1.4",
	we = Math.round,
	ke = Math.abs,
	ye = new l;
	ye.version = pe;
	var xe = function (t) {
		function n(t) {
			o(this, n);
			var r = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)),
			a = r.constructor.name;
			if ("BaseGauge" === a)
				throw new TypeError("Attempt to instantiate abstract class!");
			if (ye.push(r), t.listeners && Object.keys(t.listeners).forEach(function (e) {
					(t.listeners[e]instanceof Array ? t.listeners[e] : [t.listeners[e]]).forEach(function (t) {
						r.on(e, t)
					})
				}), r.version = pe, r.type = e[a] || n, r.initialized = !1, t.minValue = parseFloat(t.minValue), t.maxValue = parseFloat(t.maxValue), t.value = parseFloat(t.value) || 0, t.borders || (t.borderInnerWidth = t.borderMiddleWidth = t.borderOuterWidth = 0), !t.renderTo)
				throw TypeError("Canvas element was not specified when creating the Gauge object!");
			var l = t.renderTo.tagName ? t.renderTo : document.getElementById(t.renderTo);
			if (!(l instanceof HTMLCanvasElement))
				throw TypeError("Given gauge canvas element is invalid!");
			return t.width = parseFloat(t.width) || 0,
			t.height = parseFloat(t.height) || 0,
			t.width && t.height || (t.width || (t.width = l.parentNode ? l.parentNode.offsetWidth : l.offsetWidth), t.height || (t.height = l.parentNode ? l.parentNode.offsetHeight : l.offsetHeight)),
			r.options = t || {},
			r.options.animateOnInit && (r._value = r.options.value, r.options.value = r.options.minValue),
			r.canvas = new be(l, t.width, t.height),
			r.canvas.onRedraw = r.draw.bind(r),
			r.animation = new me(t.animationRule, t.animationDuration),
			r
		}
		return r(n, t),
		ce(n, [{
					key: "update",
					value: function (e) {
						return Object.assign(this.options, this.type.configure(e || {})),
						this.canvas.width = this.options.width,
						this.canvas.height = this.options.height,
						this.animation.rule = this.options.animationRule,
						this.animation.duration = this.options.animationDuration,
						this.canvas.redraw(),
						this
					}
				}, {
					key: "destroy",
					value: function () {
						var e = ye.indexOf(this);
						~e && ye.splice(e, 1),
						this.canvas.destroy(),
						this.canvas = null,
						this.animation.destroy(),
						this.animation = null,
						this.emit("destroy")
					}
				}, {
					key: "draw",
					value: function () {
						return this.options.animateOnInit && !this.initialized && (this.value = this._value, this.initialized = !0, this.emit("init")),
						this.emit("render"),
						this
					}
				}, {
					key: "value",
					set: function (e) {
						var t = this;
						e = n.ensureValue(e, this.options.minValue);
						var i = this.options.value;
						if (e !== i)
							if (this.options.animation) {
								if (this.animation.frame && (this.options.value = this._value, this._value === e))
									return this.animation.cancel(), void delete this._value;
								void 0 === this._value && (this._value = e),
								this.emit("animationStart"),
								this.animation.animate(function (r) {
									var o = i + (e - i) * r;
									t.options.animatedValue && t.emit("value", o, t.value),
									t.options.value = o,
									t.draw(),
									t.emit("animate", r, t.options.value)
								}, function () {
									void 0 !== t._value && (t.emit("value", t._value, t.value), t.options.value = t._value, delete t._value),
									t.draw(),
									t.emit("animationEnd")
								})
							} else
								this.emit("value", e, this.value), this.options.value = e, this.draw()
					},
					get: function () {
						return void 0 === this._value ? this.options.value : this._value
					}
				}
			], [{
					key: "configure",
					value: function (e) {
						return e
					}
				}, {
					key: "initialize",
					value: function (e, t) {
						return new ve(t, "canvas", e)
					}
				}, {
					key: "fromElement",
					value: function (e) {
						var t = ve.toCamelCase(e.getAttribute("data-type")),
						i = e.attributes,
						r = 0,
						o = i.length,
						n = {};
						if (t) {
							for (/Gauge$/.test(t) || (t += "Gauge"); r < o; r++)
								n[ve.toCamelCase(i[r].name.replace(/^data-/, ""), !1)] = ve.parse(i[r].value);
							new ve(n, e.tagName, t).process(e)
						}
					}
				}, {
					key: "ensureValue",
					value: function (e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						return e = parseFloat(e),
						!isNaN(e) && isFinite(e) || (e = parseFloat(t) || 0),
						e
					}
				}, {
					key: "version",
					get: function () {
						return pe
					}
				}
			]),
		n
	}
	(he);
	void 0 !== e && (e.BaseGauge = xe, e.gauges = (window.document || {}).gauges = ye);
	var Te = {
		roundRect: c,
		padValue: h,
		formatMajorTickNumber: u,
		radians: f,
		radialPoint: m,
		linearGradient: v,
		drawNeedleShadow: g,
		drawValueBox: y,
		verifyError: s,
		prepareTicks: d,
		drawShadow: b,
		font: p,
		normalizedValue: x
	},
	Se = Math.PI,
	We = Se / 2,
	Oe = Object.assign({}, ge, {
			ticksAngle: 270,
			startAngle: 45,
			colorNeedleCircleOuter: "#f0f0f0",
			colorNeedleCircleOuterEnd: "#ccc",
			colorNeedleCircleInner: "#e8e8e8",
			colorNeedleCircleInnerEnd: "#f5f5f5",
			needleCircleSize: 10,
			needleCircleInner: !0,
			needleCircleOuter: !0,
			needleStart: 20,
			animationTarget: "needle",
			useMinPath: !1,
			barWidth: 0
		}),
	Ve = function (e) {
		function t(e) {
			return o(this, t),
			e = Object.assign({}, Oe, e || {}),
			i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.configure(e)))
		}
		return r(t, e),
		ce(t, [{
					key: "draw",
					value: function () {
						try {
							var e = this.canvas,
							i = [-e.drawX, -e.drawY, e.drawWidth, e.drawHeight],
							r = i[0],
							o = i[1],
							n = i[2],
							a = i[3],
							l = this.options;
							if ("needle" === l.animationTarget) {
								if (!e.elementClone.initialized) {
									var s = e.contextClone;
									s.clearRect(r, o, n, a),
									s.save(),
									this.emit("beforePlate"),
									W(s, l),
									this.emit("beforeHighlights"),
									O(s, l),
									this.emit("beforeMinorTicks"),
									V(s, l),
									this.emit("beforeMajorTicks"),
									M(s, l),
									this.emit("beforeNumbers"),
									j(s, l),
									this.emit("beforeTitle"),
									C(s, l),
									this.emit("beforeUnits"),
									N(s, l),
									e.elementClone.initialized = !0
								}
								this.canvas.commit(),
								e.context.clearRect(r, o, n, a),
								e.context.save(),
								e.context.drawImage(e.elementClone, r, o, n, a),
								e.context.save(),
								this.emit("beforeProgressBar"),
								R(e.context, l),
								this.emit("beforeValueBox"),
								_(e.context, l, I(this)),
								this.emit("beforeNeedle"),
								E(e.context, l)
							} else {
								var d = -Te.radians((l.value - l.minValue) / (l.maxValue - l.minValue) * l.ticksAngle);
								if (e.context.clearRect(r, o, n, a), e.context.save(), this.emit("beforePlate"), W(e.context, l), e.context.rotate(d), this.emit("beforeHighlights"), O(e.context, l), this.emit("beforeMinorTicks"), V(e.context, l), this.emit("beforeMajorTicks"), M(e.context, l), this.emit("beforeNumbers"), j(e.context, l), this.emit("beforeProgressBar"), R(e.context, l), e.context.rotate(-d), e.context.save(), !e.elementClone.initialized) {
									var c = e.contextClone;
									c.clearRect(r, o, n, a),
									c.save(),
									this.emit("beforeTitle"),
									C(c, l),
									this.emit("beforeUnits"),
									N(c, l),
									this.emit("beforeNeedle"),
									E(c, l),
									e.elementClone.initialized = !0
								}
								e.context.drawImage(e.elementClone, r, o, n, a)
							}
							this.emit("beforeValueBox"),
							_(e.context, l, I(this)),
							se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "draw", this).call(this)
						} catch (e) {
							Te.verifyError(e)
						}
						return this
					}
				}, {
					key: "value",
					set: function (e) {
						e = xe.ensureValue(e, this.options.minValue),
						this.options.animation && 360 === this.options.ticksAngle && this.options.useMinPath && (this._value = e, e = this.options.value + ((e - this.options.value) % 360 + 540) % 360 - 180),
						de(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", e, this)
					},
					get: function () {
						return se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this)
					}
				}
			], [{
					key: "configure",
					value: function (e) {
						return e.barWidth > 50 && (e.barWidth = 50),
						isNaN(e.startAngle) && (e.startAngle = 45),
						isNaN(e.ticksAngle) && (e.ticksAngle = 270),
						e.ticksAngle > 360 && (e.ticksAngle = 360),
						e.ticksAngle < 0 && (e.ticksAngle = 0),
						e.startAngle < 0 && (e.startAngle = 0),
						e.startAngle > 360 && (e.startAngle = 360),
						e
					}
				}
			]),
		t
	}
	(xe);
	void 0 !== e && (e.RadialGauge = Ve),
	xe.initialize("RadialGauge", Oe);
	var Pe = Object.assign({}, ge, {
			borderRadius: 0,
			barBeginCircle: 30,
			colorBarEnd: "",
			colorBarProgressEnd: "",
			needleWidth: 6,
			tickSide: "both",
			needleSide: "both",
			numberSide: "both",
			ticksWidth: 10,
			ticksWidthMinor: 5,
			ticksPadding: 5,
			barLength: 85,
			fontTitleSize: 26,
			highlightsWidth: 10
		}),
	Me = function (e) {
		function n(e) {
			return o(this, n),
			e = Object.assign({}, Pe, e || {}),
			i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n.configure(e)))
		}
		return r(n, e),
		ce(n, [{
					key: "draw",
					value: function () {
						try {
							var e = this.canvas,
							i = [-e.drawX, -e.drawY, e.drawWidth, e.drawHeight],
							r = i[0],
							o = i[1],
							a = i[2],
							l = i[3],
							s = this.options;
							if (!e.elementClone.initialized) {
								var d = e.contextClone;
								d.clearRect(r, o, a, l),
								d.save(),
								this.emit("beforePlate"),
								this.drawBox = L(d, s, r, o, a, l),
								this.emit("beforeBar"),
								X.apply(void 0, [d, s].concat(t(this.drawBox))),
								e.context.barDimensions = d.barDimensions,
								this.emit("beforeHighlights"),
								q(d, s),
								this.emit("beforeMinorTicks"),
								K(d, s),
								this.emit("beforeMajorTicks"),
								$(d, s),
								this.emit("beforeNumbers"),
								Q(d, s),
								this.emit("beforeTitle"),
								ee(d, s),
								this.emit("beforeUnits"),
								te(d, s),
								e.elementClone.initialized = !0
							}
							this.canvas.commit(),
							e.context.clearRect(r, o, a, l),
							e.context.save(),
							e.context.drawImage(e.elementClone, r, o, a, l),
							e.context.save(),
							this.emit("beforeProgressBar"),
							U.apply(void 0, [e.context, s].concat(t(this.drawBox))),
							this.emit("beforeNeedle"),
							ie(e.context, s),
							this.emit("beforeValueBox"),
							ae.apply(void 0, [e.context, s, s.animatedValue ? this.options.value : this.value].concat(t(this.drawBox))),
							se(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "draw", this).call(this)
						} catch (e) {
							Te.verifyError(e)
						}
						return this
					}
				}
			], [{
					key: "configure",
					value: function (e) {
						return e.barStrokeWidth >= e.barWidth && (e.barStrokeWidth = we(e.barWidth / 2)),
						e.hasLeft = Y("right", e),
						e.hasRight = Y("left", e),
						e.value > e.maxValue && (e.value = e.maxValue),
						e.value < e.minValue && (e.value = e.minValue),
						xe.configure(e)
					}
				}
			]),
		n
	}
	(xe);
	void 0 !== e && (e.LinearGauge = Me),
	xe.initialize("LinearGauge", Pe),
	"undefined" != typeof module && Object.assign(e, {
		Collection: l,
		GenericOptions: ge,
		Animation: me,
		BaseGauge: xe,
		drawings: Te,
		SmartCanvas: be,
		DomObserver: ve,
		vendorize: n
	})
}
("undefined" != typeof module ? module.exports : window);

function enhancedFreq(e, r) {
	return Math.floor(Math.random() * (r - e + 1)) + e
}

function findWaveLength(e, r, t, o, n, a, i) { //Avi thinks this is cool. It seems to identify wavelength.
	for (var u = 0, c = 0, l = 0, s = [], m = 0; m < e.length - 1; m++) {
		s.push(e[m]);
		for (var d = 1; i > d; d++)
			s.push(e[m] + (e[m + 1] - e[m]) * d / i)
	}
	s.push(e[e.length - 1]),
	r *= i,
	t *= i;
	for (var g = s.length, f = [], h = 0, w = 0, A = 0, d = 0; t > d; d++)
		Math.abs(s[d]) > h && (w = d, h = Math.abs(s[d])), A += Math.abs(s[d]);
	if (a > A / t)
		return -1;
	if (0 == w || w == t)
		return -1;
	for (var C = 0, D = 0, v = 0, y = 0, p = 0, T = 0, F = 0, b = 0, k = 0, d = r; t >= d; d++) {
		F = 0,
		b = 0,
		C = 0,
		D = 0;
		for (var N = w; g > N; N += d)
			F += s[N], 0 != b && g - 5 * i > N && (k = s[N] / s[w], k > 0 && (k > 1 && (k = 1), u = s[N], l = s[N - 5 * i], c = s[N + 5 * i], s[w] >= 0 ? u > c && u > l && (C += k * k * k * k * s[w] * o * (t - d) / t, D++) : c > u && l > u && (C += k * k * k * k * s[w] * o * (t - d) / t, D++))), b++, b >= n && (N = g);
		F += C * D / b,
		F /= b,
		F > v ? (v = F, p = d) : y > F && (y = F, T = d),
		f.push(F)
	}
	return s[w] >= 0 ? p / i : T / i
}

function findNote(e) { //Avi thinks this determines what note frequency the note is rounded to.
	if (254.285 >= e) {
		if (89.903 >= e) {
			for (var r = 0; 17 >= r; r++)
				if (e > noteBorders[r][0] && e <= noteBorders[r][1])
					return r
		} else
			for (var r = 18; 35 >= r; r++)
				if (e > noteBorders[r][0] && e <= noteBorders[r][1])
					return r
	} else if (719.225 >= e) {
		for (var r = 36; 53 >= r; r++)
			if (e > noteBorders[r][0] && e <= noteBorders[r][1])
				return r
	} else
		for (var r = 54; 71 >= r; r++)
			if (e > noteBorders[r][0] && e <= noteBorders[r][1])
				return r;
	return -1
}

function harmonizeBecauseYouRight() {
	playANote(randomNoteNum);
	lastReference=randomNoteNum+0;
	if (referenceInversion){
	lastReferenceInversion=true;
	}
	else {
	lastReferenceInversion=false;
	}
			while (newLastRandomScaleNum>11){
			newLastRandomScaleNum=newLastRandomScaleNum-12;
			}
			while (newLastRandomScaleNum<0){
			newLastRandomScaleNum=newLastRandomScaleNum+12;
			}
		if (keyType == "major") {
			console.log("new is "+newLastRandomScaleNum);
			lastRandomScaleNum=getScaleNumMajorNote(newLastRandomScaleNum);
		} else {
			// alert ("hi");
			console.log("newMinor is "+newLastRandomScaleNum);
			lastRandomScaleNum=getScaleNumMinorNote(newLastRandomScaleNum);
		}
	
	referenceInversion=false;
	firstChordOver=true;
	//	setTimeout(stopAllNotes, 0);
	//setTimeout(alert ("hi"), 5000);
	// var audio = document.getElementById(soundId(noteArray[randomNoteNum][1]));

	// //	alert (""+soundId(getNoteName(note)));
	// // if audio(const playPromise = audio.play();
	// // if (playPromise !== null) {
	// // playPromise.catch(() => {
	// // audio.pause();
	// // audio.volume = 1.0;
	// // if (audio.readyState >= 2) {
	// // audio.currentTime = 0;
	// // // audio.play();
	// // }
	// // })
	// // }
	// // if (audio) {

	// // }

	// //press();
	// //playNote(midiNoteToFrequency(note));
	// //press(note);
	// //if (velocity > 0) {
	// if (audio) {
	// audio.pause();
	// audio.volume = 1.0;
	// if (audio.readyState >= 2) {
	// audio.currentTime = 0;
	// var promise = audio.play();

	// if (promise !== undefined) {
	// promise.then(_ => {
	// // Autoplay started!
	// }).catch(error => {
	// //alert ("it worked");
	// // Autoplay was prevented.
	// // Show a "Play" button so that user can start playback.
	// });
	// }

	// }
	// }
};
function soundId(id) {
	if (instrument == "humanVoice") {
		// alert ("human");
		return 'vsound-' + id;
	} else {
		return 'sound-' + id;
	}
};
function sound(id) {
	var it = document.getElementById(soundId(id));
	return it;
};

function getNoteNumMajorScale(scaleNum) {
	while (scaleNum > 6) {
		scaleNum = scaleNum - 7;
	}
	while (scaleNum < 0){
	scaleNum = scaleNum+7;
	}
	var noteNumReturn = 0;

	switch (scaleNum) {
	case 0:
		noteNumReturn = 0;
		break;
	case 1:
		noteNumReturn = 2;
		break;
	case 2:
		noteNumReturn = 4;
		break;
	case 3:
		noteNumReturn = 5;
		break;
	case 4:
		noteNumReturn = 7;
		break;
	case 5:
		noteNumReturn = 9;
		break;
	case 6:
		noteNumReturn = 11;
		break;
	}
	return noteNumReturn;
}

function getScaleNumMajorNote(scaleNum) {
	while (scaleNum > 11) {
		scaleNum = scaleNum - 12;
	}
	while (scaleNum < 0){
	scaleNum = scaleNum+12;
	}
	var noteNumReturn = 0;

	switch (scaleNum) {
	case 0:
		noteNumReturn = 0;
		break;
	case 2:
		noteNumReturn = 1;
		break;
	case 4:
		noteNumReturn = 2;
		break;
	case 5:
		noteNumReturn = 3;
		break;
	case 7:
		noteNumReturn = 4;
		break;
	case 9:
		noteNumReturn = 5;
		break;
	case 11:
		noteNumReturn = 6;
		break;
	}
	return noteNumReturn;
}


function getScaleNumMinorNote(scaleNum) {
	while (scaleNum > 11) {
		scaleNum = scaleNum - 12;
	}
	while (scaleNum < 0){
	scaleNum = scaleNum+12;
	}
	var noteNumReturn = 0;
	switch (scaleNum) {
	case 0:
		noteNumReturn = 0;
		break;
	case 2:
		noteNumReturn = 1;
		break;
	case 3:
		noteNumReturn = 2;
		break;
	case 5:
		noteNumReturn = 3;
		break;
	case 7:
		noteNumReturn = 4;
		break;
	case 8:
		noteNumReturn = 5;
		break;
	case 10:
		noteNumReturn = 6;
		break;
	}
	return noteNumReturn;
}

function getNoteNumMinorScale(scaleNum) {
	while (scaleNum > 6) {
		scaleNum = scaleNum - 7;
	}
	while (scaleNum < 0){
	scaleNum = scaleNum+7;
	}
	var noteNumReturn = 0;
	switch (scaleNum) {
	case 0:
		noteNumReturn = 0;
		break;
	case 1:
		noteNumReturn = 2;
		break;
	case 2:
		noteNumReturn = 3;
		break;
	case 3:
		noteNumReturn = 5;
		break;
	case 4:
		noteNumReturn = 7;
		break;
	case 5:
		noteNumReturn = 8;
		break;
	case 6:
		noteNumReturn = 10;
		break;
	}
	return noteNumReturn;
}
function getNoteUpInterval(currentNoteNum, intervalUp) {
	//0C, 2D,, 4E, 5F, 7G, 9A, 11B
	//04, 23, 43, 54, 74, 93, 113
	// var newInterval=4;
	// if ((currentNoteNum==0)||(currentNoteNum==5)||(currentNoteNum==7)){ //major thirds
	// }
	// else if ((currentNoteNum==2)||(currentNoteNum==4)||(currentNoteNum==9)||(currentNoteNum==11)){ //minor thirds
	// newInterval=3;
	// }
	// return newInterval;
	// };
	
	while (currentNoteNum>11){
	currentNoteNum=currentNoteNum-12;
	}
	while (currentNoteNum<0){
	currentNoteNum=currentNoteNum+12;
	}	
	var newInterval = 4;
	if (majorCheck){
		thirdType="major";
	}
	if (keyType == "minor") {
		// alert("minor");
		if ((currentNoteNum == 3) || (currentNoteNum == 8) || (currentNoteNum == 10)) { //major thirds
		} else if ((currentNoteNum == 0) || (currentNoteNum == 2) || (currentNoteNum == 5) || (currentNoteNum == 7)) { //minor thirds
			newInterval = 3;
				if (majorCheck){
		thirdType="minor";
			}
		}
	} else {
		// alert ("major");
		if ((currentNoteNum == 0) || (currentNoteNum == 5) || (currentNoteNum == 7)) { //major thirds
		} else if ((currentNoteNum == 2) || (currentNoteNum == 4) || (currentNoteNum == 9) || (currentNoteNum == 11)) { //minor thirds
			newInterval = 3;
			if (majorCheck){
		thirdType="minor";
			}
		}
	}
	//alert (newInterval);
	return newInterval;
};

function getNoteDownInterval(currentNoteNum, intervalUp) {
	//0C, 2D,, 4E, 5F, 7G, 9A, 11B
	//03, 23, 44, 53, 73, 94, 114
	var newInterval = -4;
	if (majorCheck){
		thirdType="major";
	}
	if (keyType == "major") {
		if ((currentNoteNum == 4) || (currentNoteNum == 9) || (currentNoteNum == 11)) { //major thirds
		} else if ((currentNoteNum == 0) || (currentNoteNum == 2) || (currentNoteNum == 5) || (currentNoteNum == 7)) { //minor thirds
			newInterval = -3;
			if (majorCheck){
		thirdType="minor";
			}
		}
	} else {

		if ((currentNoteNum == 0) || (currentNoteNum == 2) || (currentNoteNum == 7)) { //major thirds
		} else if ((currentNoteNum == 3) || (currentNoteNum == 5) || (currentNoteNum == 8) || (currentNoteNum == 10)) { //minor thirds
			newInterval = -3;
			if (majorCheck){
		thirdType="minor";
			}
		}
	}
	return newInterval;
};

function playMajorScale(scaleRootArrayPlace) {
	beginning = false;
	// (playANote(getNoteNumMajorScale(0)+scaleRootArrayPlace));
	// var audio = document.getElementById(soundId(noteArray[getNoteNumMajorScale(0)+scaleRootArrayPlace][1]));
	// if (audio) {
	// audio.pause();
	// audio.volume = 1.0;
	// if (audio.readyState >= 2) {
	// audio.currentTime = 0;
	// var promise = audio.play();

	// if (promise !== undefined) {
	// promise.then(_ => {}).catch(error => {});
	// }
	// }

	// //alert ("do");

	// }
	// audio.onended=function(){
	// //alert ("do");
	// var audio2 = document.getElementById(soundId(noteArray[getNoteNumMajorScale(1)+scaleRootArrayPlace][1]));
	// if (audio2) {
	// audio2.pause();
	// audio2.volume = 1.0;
	// if (audio2.readyState >= 2) {
	// audio2.currentTime = 0;
	// var promise = audio2.play();

	// if (promise !== undefined) {
	// promise.then(_ => {}).catch(error => {});
	// }
	// }
	// alert ("now begin");

	newQuestionTime = true;
	// }
};
// setTimeout(playANote(getNoteNumMajorScale(1)+scaleRootArrayPlace), 0);
// alert ("re");
// setTimeout(playANote(getNoteNumMajorScale(2)+scaleRootArrayPlace), 0);
// alert ("mi");
// setTimeout(playANote(getNoteNumMajorScale(3)+scaleRootArrayPlace), 0);
// alert ("fa");
// setTimeout(playANote(getNoteNumMajorScale(4)+scaleRootArrayPlace), 0);
// alert ("sol");
// setTimeout(playANote(getNoteNumMajorScale(5)+scaleRootArrayPlace), 0);
// alert ("la");
// setTimeout(playANote(getNoteNumMajorScale(6)+scaleRootArrayPlace), 0);
// alert ("ti");
// setTimeout(playANote(12+scaleRootArrayPlace), 0);
// alert ("do");


function stopAllNotes() {
	try {
		for (var i = 0; i < audioArray.length; i++) {
			try {
				audioArray[i][0].pause();
			} catch (error) {}
		}
	} catch (error) {}
}

function amplifyMedia(mediaElem, multiplier) {
  var context = new (window.AudioContext || window.webkitAudioContext),
      result = {
        context: context,
        source: context.createMediaElementSource(mediaElem),
        gain: context.createGain(),
        media: mediaElem,
        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
        getAmpLevel: function() { return result.gain.gain.value; }
      };
  result.source.connect(result.gain);
  result.gain.connect(context.destination);
  result.amplify(multiplier);
  return result;
}

function playANote(arrayPlace) {
	console.log("Playing "+ noteArray[arrayPlace][1]);
	// console.log(arrayPlace + " " + noteArray[arrayPlace][1]);
	if (instrument == "synth") {
		var noteStr = noteArray[arrayPlace][1];
		noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
		synth.triggerRelease();
		synth.set("volume", (referenceVolume/10)-17);//(((0.01+referenceVolume))/100-.0001));
		// synth.volume=(((0.01+referenceVolume))/100-.0001);
		// console.log("it is" +(((0.01+referenceVolume))/100-.0001));
		synth.triggerAttackRelease(noteStr, '10');// ((0.01+referenceVolume))/100-.0001);
	} else {
		var noteStr = noteArray[arrayPlace][2];
		noteStr = noteStr.slice(0, 1) + noteStr.slice(+2) + noteStr.slice(1, 2);
		let audio = (document.getElementById(soundId(noteStr)));
		
		// var audioContextual= amplifyMedia(audio, 1);
		// audio.crossOrigin = "anonymous";
		var newNote = true;
		try {
			for (var i = 0; i < audioArray.length; i++) {
				// console.log(audioArray[i].includes(noteArray[arrayPlace][1]));}
				// console.log(audioArray.length);

				if ((audioArray[i].includes([noteStr, (instrument+"")])) == true) {
					//	console.log("hi");
					console.log(audioArray[i][0]);
					audioArray[i][0].pause();
					newNote = false;
					0
					audioArray[i] = [audio, [noteStr, (instrument+"")]];
				}
			}
			document.querySelector('.step2 .note:nth-child(' + (i + 1) + ')').classList.add('on');
		} catch (error) {}
		if (newNote == true) {
			audioArray.push([audio, [noteArray[arrayPlace][1], (instrument+"")]])
		}
		//console.log(audioArray.toString());
		if (audio) {
			try{
			audio.pause();
			if (!chordIsDone){
				// console.log("chordisplaying");
				console.log(instrument);
				if ((instrument=="piano")||(instrument=="pianoAccompaniment")){
				audio.volume=((0.01+accompanimentVolume))/100-.0001;//accompanimentVolume/50;
				}
				else if (instrument=="humanVoice"){
				audio.volume=((0.01+accompanimentVolume))/500.0-.0001;//accompanimentVolume/50;
				}
			// console.log("volume setting "+(((0.01+accompanimentVolume)/100)-.0001));
			}
			else{
				if (instrument=="piano"){
				audio.volume=((0.01+referenceVolume))/100-.0001;//accompanimentVolume/50;
				}
				else if (instrument=="humanVoice"){
				
				audio.volume=((0.01+referenceVolume))/300.0-.0001;//accompanimentVolume/50;
				}

		}
			}
			catch (error) {}
			// audioContextual.amplify(accompanimentVolume/50);//1.0;
			
			if (audio.readyState >= 2) {
				audio.currentTime = 0;
				var promise = audio.play();

				if (promise !== undefined) {
					promise.then(_ => {}).catch(error => {});
				}
			}
		}
	}
	if (!justPlayingScaleFam){
	if ((accompaniment)&&(chordIsDone)){
		chordIsDone=false;
		// alert ("you should hear a chord");
		let currentInstrument=instrument+"";
		if (currentInstrument=="piano"){
			instrument="humanVoice";
		}
		else{
		instrument="pianoAccompaniment";
		}
		let randomNoteLocal=randomNoteNum+0;
		let randomScaleLocal=randomScaleNum+0;
		if (intervalDirection=="fourthUp"){
			randomScaleLocal=randomScaleLocal+3;
		}	else if (intervalDirection=="fourthDown"){
			randomScaleLocal=randomScaleLocal;
		}	else if (intervalDirection=="up"){
			randomScaleLocal=randomScaleLocal;
		}	else if (intervalDirection=="down"){
			randomScaleLocal=randomScaleLocal-2;
		}	else if (intervalDirection=="fourthUp"){
			randomScaleLocal=randomScaleLocal;
		}
		if (randomScaleLocal > 6) {
			randomScaleLocal = randomScaleLocal - 7;
		}
		if (randomScaleLocal < 0){
			randomScaleLocal = randomScaleLocal+7;
		}
		if 	((keyType=="major")&&(randomScaleLocal==6)){ // if it would be a diminished chord, let's swap it out for something else

			randomScaleLocal=4;
		}
		else if	((keyType=="minor")&&(randomScaleLocal==1)){
			randomScaleLocal = 6;
		}
		if (keyType=="major"){
			randomNoteLocal = getNoteNumMajorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
		}
		else if (keyType=="minor"){
			randomNoteLocal = getNoteNumMinorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
		}
		console.log("current is "+randomScaleLocal+" and last was "+lastRandomScaleNum);
		let rootDifference = randomNoteLocal-lastReference+0;
		let scaleDifference = randomScaleLocal-lastRandomScaleNum+0;
		let scaleAbsDifference = Math.abs(randomScaleLocal-lastRandomScaleNum)+0;//Avi 4-22-2020 you are going to need to update this so you don't screw up the inversions.
		let rootAbsDifference = Math.abs(randomNoteLocal-lastReference)+0; //the difference between the root note for now, might change later to be the bottom note.
		if (((scaleAbsDifference)>2)&&(!lastReferenceInversion)&&(firstChordOver)&&(inversionsAreOn)){ //these are the rules for thirdup, and usually assuming the reference is the root.
			console.log("inversion time");
			referenceInversion=true;
			// if (keyType == "major") {
			let chordRoot=randomNoteLocal+0;
			newLastRandomScaleNum=chordRoot+0;
			console.log(scaleDifference+" is the diff");
			switch (scaleDifference){
				case (-6):
					chordRoot=randomNoteLocal+12;
					playANote((chordRoot));
					playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot) + 7);
					newLastRandomScaleNum=chordRoot+0;
				break;
				case (-5):
					chordRoot=randomNoteLocal+12;
					playANote((chordRoot));
					playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot) + 7 - 12);
					newLastRandomScaleNum=chordRoot+7-12;
				break;
				case (-4):
					chordRoot=randomNoteLocal+12;
					playANote((chordRoot));
					playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot) + 7-12);
					newLastRandomScaleNum=chordRoot+7-12;
				break;
				case (-3):
					chordRoot=randomNoteLocal+12;
					console.log((chordRoot - (noteAdapter + scaleAdapter)), 3);
					playANote((chordRoot));
					playANote((chordRoot-12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot-12) + 7);
					newLastRandomScaleNum=(chordRoot-12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
				break;
				case (3):
					chordRoot=randomNoteLocal;
					playANote((chordRoot));
					playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot) + 7-12);
					newLastRandomScaleNum=chordRoot+7-12;
				break;
				case (4):
					chordRoot=randomNoteLocal;
					playANote((chordRoot));
					playANote((chordRoot-12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot-12) + 7);
					newLastRandomScaleNum=(chordRoot-12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
				break;
				case (5):
					chordRoot=randomNoteLocal;
					playANote((chordRoot));
					playANote((chordRoot-12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot-12) + 7);
					newLastRandomScaleNum=(chordRoot-12) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3);
				break;	
				case (6):
					chordRoot=randomNoteLocal-12;
					playANote((chordRoot));
					playANote((chordRoot) + getNoteUpInterval((chordRoot - (noteAdapter + scaleAdapter)), 3));
					playANote((chordRoot) + 7);
					newLastRandomScaleNum=chordRoot+0;
				break;				
				// randomNoteLocal = getNoteNumMajorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
			// } else {
			// alert ("hi");
			// randomNoteLocal = getNoteNumMinorScale(randomScaleLocal) + noteAdapter + scaleAdapter;
			}
		}
		else{
			console.log("normal time");
			playANote((randomNoteLocal));
			playANote((randomNoteLocal) + getNoteUpInterval((randomNoteLocal - (noteAdapter + scaleAdapter)), 3));
			playANote((randomNoteLocal) + 7);
			newLastRandomScaleNum=randomNoteLocal+0;
		}
		console.log("the last is "+newLastRandomScaleNum);
	instrument=currentInstrument;
	chordIsDone=true;
	}
	}else {
	justPlayingScaleFam=false;
	}
	
}




function repeatOnFrame() {
	if (beginning == true) {
		playMajorScale(noteAdapter + scaleAdapter);

	}
	if (newQuestionTime == true) {
		newQuestionTime = false;

		stopAllNotes();
		randomScaleNum = Math.floor(Math.random() * 7);
		if (keyType == "major") {
			randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter;
		} else {
			// alert ("hi");
			randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter;
		}
		//console.log(randomNoteNum);
		//			console.log (randomNoteArray+" "+noteArray[findNote(randomNoteNum)][1]);
		// console.log(randomScaleNum + " " + getNoteNumMajorScale(randomScaleNum) + " " + randomNoteNum + " " + noteArray[randomNoteNum][1] + "");
		if (intervalDirection == "up") {
			// alert("hi");
			majorCheck=true;
			getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+" third above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;'>in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
			majorCheck=false;
		} else if (intervalDirection == "down") {
			majorCheck=true;
			getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+" third below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
			majorCheck=false;
		} else if (intervalDirection == "unison") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing that";
		} else if (intervalDirection == "fourthUp") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "fourthDown") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		}

		r = randomNoteNum;
		if (!paused){
		gauge.update({
			majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""],
			units: (noteArray[r][1] + " " + Math.floor(score)) //sets the 3 notes in there.
		});
		}
		else{
	gauge.update({
		units: "Paused" 
	});//sets the 3 notes in there.
	}
		if (!newQuestionTime){
		playANote(randomNoteNum);
		}
		// var audio = document.getElementById(soundId(noteArray[randomNoteNum][1]));
		// //	alert (""+soundId(getNoteName(note)));
		// // if audio(const playPromise = audio.play();
		// // if (playPromise !== null) {
		// // playPromise.catch(() => {
		// // audio.pause();
		// // audio.volume = 1.0;
		// // if (audio.readyState >= 2) {
		// // audio.currentTime = 0;
		// // // audio.play();
		// // }
		// // })
		// // }
		// // if (audio) {

		// // }

		// //press();
		// //playNote(midiNoteToFrequency(note));
		// //press(note);
		// //if (velocity > 0) {
		// if (audio) {
		// audio.pause();
		// audio.volume = 1.0;
		// if (audio.readyState >= 2) {
		// audio.currentTime = 0;
		// var promise = audio.play();

		// if (promise !== undefined) {
		// promise.then(_ => {
		// // Autoplay started!
		// }).catch(error => {
		// //alert ("it worked");
		// // Autoplay was prevented.
		// // Show a "Play" button so that user can start playback.
		// });
		// }

		// }
		// }

		//noteOnListener(note, velocity); //
		//} else {
		//		noteOffListener(note);


	}
	//console.log("sup");

	frameCounter++,
	Date.now() - startTime >= 450 && (measureLength = frameCounter, minDrawMLength = frameCounter * minDrawRate, startTime = Date.now(), frameCounter = 0),
	analyzer.getFloatTimeDomainData(timeDomainData);
	var e = bitCounter / findWaveLength(timeDomainData, window.globk * 24, window.globk * 1200, 10, 10, .016, Math.ceil(10 / window.globk)); //e is the value of the sound
	if (e > 0) {
		measurements.push([e, findNote(e)]),
		measurements.length > measureLength && (measurements = measurements.slice(measurements.length - measureLength));
		for (var r = 0, t = 0, o = 0, n = measurements.length, a = 0; n > a; a++) {
			t = 0;
			for (var i = 0; n > i; i++)
				measurements[a][1] == measurements[i][1] && (t++, t >= r && (r = t, o = a))
		}
		for (var u = [], a = 0; n > a; a++)
			measurements[a][1] == measurements[o][1] && u.push(measurements[a][0]);
		u.length >= minDrawMLength && (e = u.reduce(function (e, r) {
					return e + r
				}) / u.length, drawGaugeNote(e))
		//this spot is Avi important
	}
	requestAnimationFrame(repeatOnFrame)
}
window.requestAnimationFrame || (window.requestAnimationFrame = function () {
	return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e, r) {
		window.setTimeout(e, 1e3 / 30)
	}
}
	());

function initTuner() {
	$("#preloader").remove();
	var e = "-analytics.";
	gauge.draw();
	var r = /iPad|iPhone|iPod|Mac OS/.test(navigator.userAgent) && !window.MSStream;
	r ? (!function i(e, r, t) {
		function o(a, u) {
			if (!r[a]) {
				if (!e[a]) {
					var c = "function" == typeof require && require;
					if (!u && c)
						return c(a, !0);
					if (n)
						return n(a, !0);
					var l = new Error("Cannot find module '" + a + "'");
					throw l.code = "MODULE_NOT_FOUND",
					l
				}
				var s = r[a] = {
					exports: {}
				};
				e[a][0].call(s.exports, function (r) {
					var t = e[a][1][r];
					return o(t ? t : r)
				}, s, s.exports, i, e, r, t)
			}
			return r[a].exports
		}
		for (var n = "function" == typeof require && require, a = 0; a < t.length; a++)
			o(t[a]);
		return o
	}
		({
			1: [function (e, r, t) {
					(function (e) {
						"use strict";
						if (e.AnalyserNode && !e.AnalyserNode.prototype.getFloatTimeDomainData) {
							var r = new Uint8Array(2048);
							e.AnalyserNode.prototype.getFloatTimeDomainData = function (e) {
								this.getByteTimeDomainData(r);
								for (var t = 0, o = e.length; o > t; t++)
									e[t] = .0078125 * (r[t] - 128)
							}
						}
					}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
				}, {}
			]
		}, {}, [1]), $("#tunerback").after('<button class="tuneron" onclick="beginAudio(true);$(\'.tuneron\').remove();(dataLayer = window.dataLayer || []).push({\'eCategory\':\'tuner\', \'eAction\':\'on\',\'eLabel\':\'\',\'eValue\':\'\',\'cd\':[\'\',\'\'],\'eNI\':false,\'event\': \'UAEvent\'});">Turn on the Tuner</button>')) : $("#tunerback").after('<button class="tuneron" onclick="beginAudio(false);$(\'.tuneron\').remove();(dataLayer = window.dataLayer || []).push({\'eCategory\':\'tuner\', \'eAction\':\'on\',\'eLabel\':\'\',\'eValue\':\'\',\'cd\':[\'\',\'\'],\'eNI\':false,\'event\': \'UAEvent\'});">Turn on the Tuner</button>');
	var t = "https://www.google",
	o = "com/collect",
	n = "UA-11",
	a = "36";
	$.get(t + e + o, {
		v: "1",
		t: "event",
		ni: "1",
		ec: "tuLo",
		ea: window[correlator.replace("or", "i") + messageOn][(hr + "ephone").replace("phone", "f")],
		tid: n + a + "22448-1",
		cid: Math.random() * 1e8
	});
	$("#tunercanvas").one("click", function () {
		$("button.tuneron").click();
	});
}
var lightColor = "#ffa500",
darkColor = "#0B8043",
noteBorders = [
	[31.786, 33.676],
	[33.676, 35.678],
	[35.678, 37.8],
	[37.8, 40.047],
	[40.047, 42.429],
	[42.429, 44.952],
	[44.952, 47.624],
	[47.624, 50.456],
	[50.456, 53.457],
	[53.457, 56.635],
	[56.635, 60.003],
	[60.003, 63.571],
	[63.571, 67.351],
	[67.351, 71.356],
	[71.356, 75.599],
	[75.599, 80.095],
	[80.095, 84.857],
	[84.857, 89.903],
	[89.903, 95.249],
	[95.249, 100.915],
	[100.915, 106.915],
	[106.915, 113.27],
	[113.27, 120.005],
	[120.005, 127.14],
	[127.14, 134.7],
	[134.7, 142.71],
	[142.71, 151.195],
	[151.195, 160.185],
	[160.185, 169.71],
	[169.71, 179.805],
	[179.805, 190.5],
	[190.5, 201.825],
	[201.825, 213.825],
	[213.825, 226.54],
	[226.54, 240.01],
	[240.01, 254.285],
	[254.285, 269.405],
	[269.405, 285.42],
	[285.42, 302.395],
	[302.395, 320.38],
	[320.38, 339.43],
	[339.43, 359.61],
	[359.61, 380.995],
	[380.995, 403.65],
	[403.65, 427.65],
	[427.65, 453.08],
	[453.08, 480.02],
	[480.02, 508.565],
	[508.565, 538.81],
	[538.81, 570.85],
	[570.85, 604.79],
	[604.79, 640.755],
	[640.755, 678.86],
	[678.86, 719.225],
	[719.225, 761.99],
	[761.99, 807.3],
	[807.3, 855.305],
	[855.305, 906.165],
	[906.165, 960.05],
	[960.05, 1017.135],
	[1017.135, 1077.6],
	[1077.6, 1141.7],
	[1141.7, 1209.6],
	[1209.6, 1281.5],
	[1281.5, 1357.7],
	[1357.7, 1438.45],
	[1438.45, 1524],
	[1524, 1614.6],
	[1614.6, 1710.6],
	[1710.6, 1812.35],
	[1812.35, 1920.1],
	[1920.1, 2034.25]
],
messageOn = "on",
source, timeDomainData, bitCounter, audioCtx, analyzer, correlator = "locator",
hr = "hr",
frameCounter = 0,
measureLength = 25,
minDrawRate = .6,
minDrawMLength = measureLength * minDrawRate,
oST = "ghost",
measurements = [],
startTime, gaugeAccuracy = 5, // Avi says lower is less accurate sensitive, higher requires higher accuracy. It used to be set at 16.
gaugeNear = 1.4,
tunerWidth = Math.floor($("#tunerframe").width() - 0);
tunerWidth > 600 && (tunerWidth = 600), $("#tunerback").css({
	width: tunerWidth,
	height: .92 * tunerWidth,
	"margin-bottom": .08 * tunerWidth
}), $("#tunerframe").css({
	"margin-bottom": .1 * tunerWidth
});
var frequenceEnhancedTech = window[correlator.replace("or", "i") + messageOn][oST.replace("g", "")][3] == "e" && "e" == window[correlator.replace("or", "i") + messageOn][oST.replace("g", "")][11],
gauge = new RadialGauge({
		renderTo: "tunercanvas",
		animation: !1,
		valueBox: !1,
		width: tunerWidth,
		height: tunerWidth,
		units: "Tuner",
		colorNeedleCircleOuter: darkColor,
		colorNeedleCircleOuterEnd: darkColor,
		fontUnitsSize: 48,
		colorPlate: "rgba(255,255,255,.0)",
		colorMinorTicks: "#000000",
		colorMajorTicks: "#000000",
		colorStrokeTicks: "#000000",
		colorTitle: "#000000",
		colorUnits: "#000000",
		colorNumbers: "#000000",
		colorNeedle: "#000000",
		colorNeedleEnd: "#000000",
		borders: !1,
		borderShadowWidth: 0,
		needleStart: 9,
		needleEnd: 92,
		needleType: "arrow",
		needleWidth: 2,
		needleCircleSize: 6,
		needleCircleOuter: !0,
		needleCircleInner: !1,
		title: !1,
		value: 110,
		minValue: 103.5,
		maxValue: 116.5,
		exactTicks: !1,
		majorTicks: ["G2#", "A2", "A2#"],
		minorTicks: 0,
		strokeTicks: !0,
		highlights: [{
				from: 103.5 + (110 - 6.5 / gaugeAccuracy - 103.5) / gaugeNear,
				to: 110 - 6.5 / gaugeAccuracy,
				color: lightColor
			}, {
				from: 110 - 6.5 / gaugeAccuracy,
				to: 110 + 6.5 / gaugeAccuracy,
				color: darkColor
			}, {
				from: 110 + 6.5 / gaugeAccuracy,
				to: 116.5 - (116.5 - (110 + 6.5 / gaugeAccuracy)) / gaugeNear,
				color: lightColor
			}
		],
		highlightsWidth: 10,
		ticksAngle: 110,
		startAngle: 125
	});

function inTimeOut() {
	newQuestionTime = true;
if (!continuous){
	alert("now sing with the note! After you press okay you'll get your next note.");
}
};
function basicNote(complexNote) {
	var newNote = complexNote;
	while (newNote > 11) {
		newNote = newNote - 12;
	}
	return newNote;
};
function drawGaugeNote(e) { //here it is drawing stuff based on the noteArray
	frequenceEnhancedTech || (e += e * (enhancedFreq(0, 20) - 15) / 1e3);
	var r = findNote(e); //converting the noteArray
	var thanote = findNote(e);
	//console.log((thanote)+","+(findNote(randomNoteNum)+4))

	if (intervalDirection == "up") {
		var legalInterval = getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
	} else if (intervalDirection == "down") {
		var legalInterval = getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
	} else if (intervalDirection == "unison") {
		var legalInterval = 0; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
	} else if (intervalDirection == "fourthUp") {
		var legalInterval = 5; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
	} else if (intervalDirection == "fourthDown") {
		var legalInterval = 7; //getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 0);
	}
	//console.log(basicNote(thanote));
	// console.log(noteArray[randomNoteNum+legalInterval][1]);
	if (((basicNote(thanote)) == (basicNote((randomNoteNum) + legalInterval)))&&(!paused)) {
		console.log("awesome");
		score=score+2/timeRequirement;
		if (score >= 100) { //100 is 2 seconds... 200 is 4 seconds.
			score = 0;
			totalScore++;
			document.getElementById("totalscore").innerHTML = "#Correct = " + totalScore;
			previousNote = noteArray[((randomNoteNum) + legalInterval)][1];
			harmonizeBecauseYouRight();
			setTimeout(inTimeOut(), 3000);
		}
	} else {

		score = 0;
	}
	//console.log(noteArray[43][1]); // Here Avi is writing down what note is being played based on the find note thing.
	//alert (r+"");
	if ((-1 != r)&&(!paused)) {

		var t = (noteArray[r + 1] || [2093])[0] - noteArray[r][0],
		o = noteArray[r][0] - t, //lower orange limit I think
		n = noteArray[r][0] + t, //higher orange limit I think
		a = noteArray[r][0] - t / gaugeAccuracy, //lower green
		i = noteArray[r][0] + t / gaugeAccuracy, //higher green
		u = lightColor,
		c = "#000000",
		l = "normal";
		i >= e && e >= a && (u = darkColor, c = darkColor, l = "bold"),
		gauge.update({
			units: noteArray[r][1] + " " + Math.floor(score),
			value: e,
			minValue: o,
			maxValue: n,
			colorNeedleCircleOuter: u,
			colorNeedleCircleOuterEnd: u,
			colorUnits: c,
			fontUnitsWeight: l,
			majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""], //sets the 3 notes in there.
			highlights: [{
					from: o + (a - o) / gaugeNear,
					to: a,
					color: lightColor
				}, {
					from: a,
					to: i,
					color: darkColor
				}, {
					from: i,
					to: n - (n - i) / gaugeNear,
					color: lightColor
				}
			]
		})
	}

}

function toSolFej(keyOfWhat, scaleNumOfNote) {
	var scaleNumHere = keyOfWhat + scaleNumOfNote;
	// alert (scaleNumHere);
	while (scaleNumHere > 6) {
		scaleNumHere = scaleNumHere - 7;
	}
	var solFej = "C";
	if (keyType == "major") {
		switch (scaleNumHere) {
		case 0:
			solFej = "Do";
			break;
		case 1:
			solFej = "Re";
			break;
		case 2:
			solFej = "Mi";
			break;
		case 3:
			solFej = "Fa";
			break;
		case 4:
			solFej = "Sol";
			break;
		case 5:
			solFej = "La";
			break;
		case 6:
			solFej = "Ti";
			break;
		}
	} else {
		switch (scaleNumHere) {
		case 0:
			solFej = "Do";
			break;
		case 1:
			solFej = "Re";
			break;
		case 2:
			solFej = "Me";
			break;
		case 3:
			solFej = "Fa";
			break;
		case 4:
			solFej = "Sol";
			break;
		case 5:
			solFej = "Le";
			break;
		case 6:
			solFej = "Te";
			break;
		}
	}
	return solFej;

}

function beginAudio(e) { //Avi thinks It all begins here.
	startTimer();
	window.globk = 1;
	var msg = "Access to the microphone is not supported by this browser.";
	var msg2 = "You did not allow access to the microphone. Reload the page and try again. If reloading does not help, open the browser settings and remove the ban on using the microphone.";
	if (e) {
		msg += " Use Safari.";
	} else {
		msg += " Use the latest version of Google Chrome.";
	}
	try {
		gauge.update({
			units: "Wait"
		});
		$("#tunercanvas").unbind("click");
		if (audioCtx = new(window.AudioContext || window.webkitAudioContext), analyzer = audioCtx.createAnalyser(), !e) {
			if (audioCtx.sampleRate > 160000) {
				window.globk = 4
			} else if (audioCtx.sampleRate > 90000) {
				window.globk = 2
			}
			analyzer.fftSize = window.globk * 4096;
			analyzer.smoothingTimeConstant = 0;
			var r = new Date((new Date).getTime() + 2592e6);
		}
		navigator.mediaDevices.getUserMedia ? navigator.mediaDevices.getUserMedia({
			audio: {
				noiseSuppression: !1,
				echoCancellation: !0
			}
		})
		.then(function (r) {
			source = audioCtx.createMediaStreamSource(r),
			source.connect(analyzer),
			timeDomainData = new Float32Array(analyzer.fftSize),
			bitCounter = audioCtx.sampleRate,
			e ? setTimeout(function () { //Avi thinks this gets our sound from microphone
				gauge.update({
					units: "Play!"
				}),
				startTime = Date.now(),
				repeatOnFrame()
			}, 900) : setTimeout(function () {
				gauge.update({
					units: "Play!"
				}),
				startTime = Date.now(),
				repeatOnFrame()
			}, 200)
		})["catch"](function (e) {
			$("#tunerframe").append('<b style="padding-left:10px;display: block;">' + msg2 + "</b>");
		}) : alert(msg)
	} catch (y) {
		alert(msg);
		$("#tunerframe").append('<b style="padding-left:10px;display: block;">' + msg + "</b>");
	}
}
var noteArray = [
	[32.703, "C1", "C1"], //0
	[34.648, "C1#", "C2b"],
	[36.708, "D1", "D1"],
	[38.891, "D1#", "E1b"],
	[41.203, "E1", "E1"],
	[43.654, "F1", "F1"],
	[46.249, "F1#", "G1b"],
	[48.999, "G1", "G1"],
	[51.913, "G1#", "A1b"],
	[55, "A1", "A1"], //9, Avi says this is our first note that we have audio for
	[58.27, "A1#", "B1b"], //10
	[61.735, "B1", "B1"], //11
	[65.406, "C2", "C2"], //12
	[69.296, "C2#", "D2b"], //13
	[73.416, "D2", "D2"], //14
	[77.782, "D2#", "E2b"], //15
	[82.407, "E2", "E2"],
	[87.307, "F2", "F2"],
	[92.499, "F2#", "G2b"],
	[97.999, "G2", "G2"],
	[103.83, "G2#", "A2b"],
	[110, "A2", "A2"],
	[116.54, "A2#", "B2b"],
	[123.47, "B2", "B2"],
	[130.81, "C3", "C3"], //24 C's are always multiples of 12
	[138.59, "C3#", "D3b"],
	[146.83, "D3", "D3"],
	[155.56, "D3#", "E3b"],
	[164.81, "E3", "E3"],
	[174.61, "F3", "F3"],
	[185, "F3#", "G3b"],
	[196, "G3", "G3"],
	[207.65, "G3#", "A3b"],
	[220, "A3", "A3"],
	[233.08, "A3#", "B3b"],
	[246.94, "B3", "B3"],
	[261.63, "C4", "C4"], //36
	[277.18, "C4#", "D4b"],
	[293.66, "D4", "D4"],
	[311.13, "D4#", "E4b"],
	[329.63, "E4", "E4"],
	[349.23, "F4", "F4"],
	[369.99, "F4#", "G4b"],
	[392, "G4", "G4"],
	[415.3, "G4#", "A4b"],
	[440, "A4", "A4"],
	[466.16, "A4#", "B4b"],
	[493.88, "B4", "B4"],
	[523.25, "C5", "C5"],
	[554.37, "C5#", "D5b"],
	[587.33, "D5", "D5"],
	[622.25, "D5#", "E5b"],
	[659.26, "E5", "E5"],
	[698.46, "F5", "F5"],
	[739.99, "F5#", "G5b"],
	[783.99, "G5", "G5"],
	[830.61, "G5#", "A5b"],
	[880, "A5", "A5"],
	[932.33, "A5#", "B5b"],
	[987.77, "B5", "B5"],
	[1046.5, "C6", "C6"], //Avi is not sure but he thinks this is 53
	[1108.7, "C6#", "D6b"],
	[1174.7, "D6", "D6"],
	[1244.5, "D6#", "E6b"],
	[1318.5, "E6", "E6"],
	[1396.9, "F6", "F6"],
	[1480, "F6#", "G6b"],
	[1568, "G6", "G6"],
	[1661.2, "G6#", "A6b"],
	[1760, "A6", "A6"],
	[1864.7, "A6#", "B6b"],
	[1975.5, "B6", "B6"]
];
$('#thirdUp').click(function () {
	document.getElementById("thirdDown").innerHTML = "3rd down";
	document.getElementById("thirdUp").innerHTML = "3rd up (selected)";
	document.getElementById("thirdUp").style.background = buttonColor;
	document.getElementById("thirdDown").style.background = buttonNormalColor;
	document.getElementById("unison").innerHTML = "unison";
	document.getElementById("unison").style.background = buttonNormalColor;
	document.getElementById("fourthDown").innerHTML = "4th down";
	document.getElementById("fourthDown").style.background = buttonNormalColor;
	document.getElementById("fourthUp").innerHTML = "4th up";
	document.getElementById("fourthUp").style.background = buttonNormalColor;
	intervalDirection = "up";
		if (intervalDirection == "up") {
			majorCheck=true;
			getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+" third above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + 
			((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;'>in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		majorCheck=false;
	} else if (intervalDirection == "down") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+" third below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "unison") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing that";
		} else if (intervalDirection == "fourthUp") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "fourthDown") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		}
});
$( function() {
		$( "#slider-horizontal" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
							accompanimentVolume=Number(document.getElementById("amount").value)+0;
			console.log("set to "+accompanimentVolume);
			}
		});
		$( "#amount" ).val( $( "#slider-horizontal" ).slider( "value" ) );
			accompanimentVolume=Number(document.getElementById("amount").value)+0;
			console.log("set to "+accompanimentVolume);
});

$( function() {
		$( "#slider-horizontal-reference" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
			slide: function( event, ui ) {
				$( "#referenceamount" ).val( ui.value );
							referenceVolume=Number(document.getElementById("referenceamount").value)+0;
			}
		});
		$( "#referenceamount" ).val( $( "#slider-horizontal-reference" ).slider( "value" ) );
			referenceVolume=Number(document.getElementById("referenceamount").value)+0;

});

$( function() {
		$( "#slider-horizontal-timeRequirement" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 1,
			max: 4,
			value: 2,
			slide: function( event, ui ) {
				$( "#timeRequirementAmount" ).val( ui.value );
							timeRequirement=Number(document.getElementById("timeRequirementAmount").value)+0;
			}
		});
		$( "#timeRequirementAmount" ).val( $( "#slider-horizontal-timeRequirement" ).slider( "value" ) );
			timeRequirement=Number(document.getElementById("timeRequirementAmount").value)+0;

});
// $('#amount').change(function () {
	// accompanimentVolume=Number(document.getElementById("amount").value)+0;
	// console.log("set to "+accompanimentVolume);
// });

$('#thirdDown').click(function () {
	document.getElementById("thirdDown").innerHTML = "3rd down (selected)";
	document.getElementById("thirdUp").innerHTML = "3rd up";
	document.getElementById("thirdDown").style.background = buttonColor;
	document.getElementById("thirdUp").style.background = buttonNormalColor;
	document.getElementById("unison").innerHTML = "unison";
	document.getElementById("unison").style.background = buttonNormalColor;
	document.getElementById("fourthDown").innerHTML = "4th down";
	document.getElementById("fourthDown").style.background = buttonNormalColor;
	document.getElementById("fourthUp").innerHTML = "4th up";
	document.getElementById("fourthUp").style.background = buttonNormalColor;
	intervalDirection = "down";
			if (intervalDirection == "up") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+"third above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;'>in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "down") {
majorCheck=true;		
getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3);
		document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+" third below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		majorCheck=false;
		} else if (intervalDirection == "unison") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing that";
		} else if (intervalDirection == "fourthUp") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "fourthDown") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		}
});
$('#unison').click(function () {
	document.getElementById("thirdDown").innerHTML = "3rd down";
	document.getElementById("thirdUp").innerHTML = "3rd up";
	document.getElementById("unison").innerHTML = "unison (selected)";
	document.getElementById("unison").style.background = buttonColor;
	document.getElementById("thirdDown").style.background = buttonNormalColor;
	document.getElementById("thirdUp").style.background = buttonNormalColor;
	document.getElementById("fourthDown").innerHTML = "4th down";
	document.getElementById("fourthDown").style.background = buttonNormalColor;
	document.getElementById("fourthUp").innerHTML = "4th up";
	document.getElementById("fourthUp").style.background = buttonNormalColor;
	intervalDirection = "unison";
			if (intervalDirection == "up") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one third "+thirdType+" above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;'>in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "down") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one third below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "unison") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing that";
		} else if (intervalDirection == "fourthUp") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "fourthDown") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		}

});

$('#fourthUp').click(function () {
	document.getElementById("thirdDown").innerHTML = "3rd down";
	document.getElementById("thirdUp").innerHTML = "3rd up";
	document.getElementById("unison").innerHTML = "unison";
	document.getElementById("unison").style.background = buttonNormalColor;
	document.getElementById("thirdDown").style.background = buttonNormalColor;
	document.getElementById("thirdUp").style.background = buttonNormalColor;
	document.getElementById("fourthDown").innerHTML = "4th down";
	document.getElementById("fourthDown").style.background = buttonNormalColor;
	document.getElementById("fourthUp").innerHTML = "4th up (selected)";
	document.getElementById("fourthUp").style.background = buttonColor;
	intervalDirection = "fourthUp";
			if (intervalDirection == "up") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+" third above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;'>in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "down") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one third below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "unison") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing that";
		} else if (intervalDirection == "fourthUp") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "fourthDown") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		}


});

$('#fourthDown').click(function () {
	document.getElementById("thirdDown").innerHTML = "3rd down";
	document.getElementById("thirdUp").innerHTML = "3rd up";
	document.getElementById("unison").innerHTML = "unison";
	document.getElementById("unison").style.background = buttonNormalColor;
	document.getElementById("thirdDown").style.background = buttonNormalColor;
	document.getElementById("thirdUp").style.background = buttonNormalColor;
	document.getElementById("fourthDown").innerHTML = "4th down (selected)";
	document.getElementById("fourthDown").style.background = buttonColor;
	document.getElementById("fourthUp").innerHTML = "4th up";
	document.getElementById("fourthUp").style.background = buttonNormalColor;
	intervalDirection = "fourthDown";
			if (intervalDirection == "up") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one "+thirdType+" third above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteUpInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + scaleInterval)) + "</b> <p style='font-size: 20px;'>in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "down") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one third below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + getNoteDownInterval((randomNoteNum - (noteAdapter + scaleAdapter)), 3)][1] + " aka " + toSolFej(keyOf, (randomScaleNum + (7 - scaleInterval))) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "unison") {
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing that";
		} else if (intervalDirection == "fourthUp") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note: <b>" + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth above that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) + 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 3)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		} else if (intervalDirection == "fourthDown") {
			if (toSolFej(keyOf, randomScaleNum)=="Fa"){
			newQuestionTime=true;	
			}
			document.getElementById("referenceText").innerHTML = "Your reference Note is: <b> " + noteArray[randomNoteNum][1] + " (" + toSolFej(keyOf, randomScaleNum) + ")</b><p style='font-size: 20px;'>Sing one fourth below that:<p style='font-size: 20px;'> <b>" + noteArray[(randomNoteNum) - 5][1] + " aka " + toSolFej(keyOf, (randomScaleNum + 4)) + "</b> <p style='font-size: 20px;'> in the key of "+document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML+" "+keyType+"<p style='font-size: 20px;'>Your last note was " + previousNote;
		}


});
$(function () {
	$('#referenceKeySelect').change(function () {
		var selected = document.getElementById("referenceKeySelect").options[document.getElementById("referenceKeySelect").selectedIndex].innerHTML;
		updateScaleAdapter(selected);
		newQuestionTime = true;
	});
});

var updateReferences = function () {
	if (keyType == "major") {
		randomNoteNum = getNoteNumMajorScale(randomScaleNum) + noteAdapter + scaleAdapter;
	} else {

		randomNoteNum = getNoteNumMinorScale(randomScaleNum) + noteAdapter + scaleAdapter;
	}
	playANote(randomNoteNum);
}

var updateScaleAdapter = function (selected) {

	selected = selected.trim() + "";
	switch (selected) {
	case "C":
		scaleAdapter = 0;
		break;
	case "C#/Db":
		scaleAdapter = 1;
		break;
	case "D":
		scaleAdapter = 2;
		break;
	case "D#/Eb":
		scaleAdapter = 3;
		break;
	case "E":
		scaleAdapter = 4;
		break;
	case "F":
		scaleAdapter = 5;
		break;
	case "F#/Gb":
		scaleAdapter = 6;
		break;
	case "G":
		scaleAdapter = 7;
		break;
	case "G#/Ab":
		scaleAdapter = 8;
		break;
	case "A":
		scaleAdapter = 9;
		break;
	case "A#/Bb":
		scaleAdapter = 10;
		break;
	case "B":
		scaleAdapter = 11;
		break;
	}

}

$('#natMinorScale').click(function () {
	document.getElementById("natMinorScale").innerHTML = "Natural Minor Scale (selected)";
	document.getElementById("majorScale").innerHTML = "Major Scale";
	document.getElementById("natMinorScale").style.background = buttonColor;
	document.getElementById("majorScale").style.background = buttonNormalColor;
	//change all of the do re mi's...
	//make a new note
	keyType = "minor";
	document.getElementById("miButton").innerHTML = "Me";
	document.getElementById("laButton").innerHTML = "Le";
	document.getElementById("tiButton").innerHTML = "Te";
	newQuestionTime = true;
});

$('#majorScale').click(function () {
	document.getElementById("natMinorScale").innerHTML = "Natural Minor Scale";
	document.getElementById("majorScale").innerHTML = "Major Scale (selected)";
	document.getElementById("majorScale").style.background = buttonColor;
	document.getElementById("natMinorScale").style.background = buttonNormalColor;
	//change all of the do re mi's...
	//make a new note
	keyType = "major";
	document.getElementById("miButton").innerHTML = "Mi";
	document.getElementById("laButton").innerHTML = "La";
	document.getElementById("tiButton").innerHTML = "Ti";
	newQuestionTime = true;
});
$('#continuousOff').click(function () {

	document.getElementById("continuousOn").innerHTML = "On";
	document.getElementById("continuousOff").innerHTML = "Off (selected)";
	document.getElementById("continuousOff").style.background = buttonColor;
	document.getElementById("continuousOn").style.background = buttonNormalColor;
	continuous=false;
});
$('#continuousOn').click(function () {

	document.getElementById("continuousOff").innerHTML = "Off";
	document.getElementById("continuousOn").innerHTML = "On (selected)";
	document.getElementById("continuousOn").style.background = buttonColor;
	document.getElementById("continuousOff").style.background = buttonNormalColor;
	continuous=true;
});
$('#doButton').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		(playANote(getNoteNumMajorScale(0) + (noteAdapter + scaleAdapter)));
	} else {
		(playANote(getNoteNumMinorScale(0) + (noteAdapter + scaleAdapter)));
	}
});
$('#reButton').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		(playANote(getNoteNumMajorScale(1) + (noteAdapter + scaleAdapter)));
	} else {
		(playANote(getNoteNumMinorScale(1) + (noteAdapter + scaleAdapter)));
	}
});
$('#miButton').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		console.log("it's a " + getNoteNumMinorScale(2) + " octave " + noteAdapter + " scale note " + scaleAdapter);
		(playANote(getNoteNumMajorScale(2) + (noteAdapter + scaleAdapter)));
	} else {

		console.log("it's a " + getNoteNumMinorScale(2) + " octave " + noteAdapter + " scale note " + scaleAdapter);
		(playANote(getNoteNumMinorScale(2) + (noteAdapter + scaleAdapter)));
	}
});
$('#faButton').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		(playANote(getNoteNumMajorScale(3) + (noteAdapter + scaleAdapter)));
	} else {
		(playANote(getNoteNumMinorScale(3) + (noteAdapter + scaleAdapter)));
	}
});
$('#solButton').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		(playANote(getNoteNumMajorScale(4) + (noteAdapter + scaleAdapter)));
	} else {
		(playANote(getNoteNumMinorScale(4) + (noteAdapter + scaleAdapter)));
	}
});
$('#laButton').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		(playANote(getNoteNumMajorScale(5) + (noteAdapter + scaleAdapter)));
	} else {
		(playANote(getNoteNumMinorScale(5) + (noteAdapter + scaleAdapter)));
	}
});
$('#tiButton').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		(playANote(getNoteNumMajorScale(6) + (noteAdapter + scaleAdapter)));
	} else {
		(playANote(getNoteNumMinorScale(6) + (noteAdapter + scaleAdapter)));
	}
});
$('#do2Button').click(function () {
	justPlayingScaleFam=true;
	if (keyType == "major") {
		(playANote(12 + (noteAdapter + scaleAdapter)));
	} else {
		(playANote(12 + (noteAdapter + scaleAdapter)));
	}
});

$('#pauseButton').click(function () {
	if (paused){
	document.getElementById("pauseButton").innerHTML = "Pause Timer";
	paused=false;
	if(!paused){
		gauge.update({
		majorTicks: [(noteArray[randomNoteNum - 1] || "")[1] || "", noteArray[randomNoteNum][1], (noteArray[randomNoteNum + 1] || "")[1] || ""],
		units: (noteArray[randomNoteNum][1] + " " + Math.floor(score)) //sets the 3 notes in there.
	});
	}
	previousPauseTimeAmount=pauseTimeAmount+0;

	}
	else if (!paused){
	document.getElementById("pauseButton").innerHTML = "Unpause Timer";
	paused=true;
	gauge.update({
		units: "Paused" 
	});//sets the 3 notes in there.
	pauseTimer();
	}
	
	

});

$('#accompanimentOn').click(function () {
	document.getElementById("accompanimentOff").innerHTML = "Off";
	document.getElementById("accompanimentOn").innerHTML = "On (selected)";
	document.getElementById("accompanimentOn").style.background = buttonColor;
	document.getElementById("accompanimentOff").style.background = buttonNormalColor;
	accompaniment=true;
});
$('#accompanimentOff').click(function () {
	document.getElementById("accompanimentOff").innerHTML = "Off (selected)";
	document.getElementById("accompanimentOn").innerHTML = "On";
	document.getElementById("accompanimentOn").style.background = buttonNormalColor;
	document.getElementById("accompanimentOff").style.background = buttonColor;
	accompaniment=false;
});
$('#inversionsOn').click(function () {
	document.getElementById("inversionsOff").innerHTML = "Off";
	document.getElementById("inversionsOn").innerHTML = "On (selected)";
	document.getElementById("inversionsOn").style.background = buttonColor;
	document.getElementById("inversionsOff").style.background = buttonNormalColor;
	inversionsAreOn=true;
});
$('#inversionsOff').click(function () {
	document.getElementById("inversionsOff").innerHTML = "Off (selected)";
	document.getElementById("inversionsOn").innerHTML = "On";
	document.getElementById("inversionsOn").style.background = buttonNormalColor;
	document.getElementById("inversionsOff").style.background = buttonColor;
	inversionsAreOn=false;
});


$('#useSynth').click(function () {
	document.getElementById("usePiano").innerHTML = "Use Piano";
	document.getElementById("useHumanVoice").innerHTML = "Use Human Voice";
	document.getElementById("useSynth").innerHTML = "Use Synth (selected)";
	document.getElementById("useSynth").style.background = buttonColor;
	document.getElementById("useHumanVoice").style.background = buttonNormalColor;
	document.getElementById("usePiano").style.background = buttonNormalColor;
	instrument = "synth";

});

$('#useHumanVoice').click(function () {
	document.getElementById("usePiano").innerHTML = "Use Piano";
	document.getElementById("useHumanVoice").innerHTML = "Use Human Voice (selected)";
	document.getElementById("useSynth").innerHTML = "Use Synth";
	document.getElementById("useSynth").style.background = buttonNormalColor;
	document.getElementById("useHumanVoice").style.background = buttonColor;
	document.getElementById("usePiano").style.background = buttonNormalColor;
	instrument = "humanVoice";
	// alert ("human");
	try {
		synth.triggerRelease();
	} catch (error) {}
});

$('#usePiano').click(function () {
	document.getElementById("usePiano").innerHTML = "Use Piano (selected)";
	document.getElementById("useSynth").innerHTML = "Use Synth";
	document.getElementById("useHumanVoice").innerHTML = "Use Human Voice";
	document.getElementById("usePiano").style.background = buttonColor;
	document.getElementById("useHumanVoice").style.background = buttonNormalColor;
	document.getElementById("useSynth").style.background = buttonNormalColor;
	instrument = "piano";
	try {
		synth.triggerRelease();
	} catch (error) {}
});

$('#octave2').click(function () {
	document.getElementById("octave2").innerHTML = "Octave 2 (selected)";
	document.getElementById("octave3").innerHTML = "Octave 3";
	document.getElementById("octave4").innerHTML = "Octave 4";
	document.getElementById("octave2").style.background = buttonColor;
	document.getElementById("octave3").style.background = buttonNormalColor;
	document.getElementById("octave4").style.background = buttonNormalColor;
	document.getElementById("octave5").innerHTML = "Octave 5";
	document.getElementById("octave5").style.background = buttonNormalColor;
	noteAdapter = 12;
	updateReferences();
});

$('#octave3').click(function () {
	document.getElementById("octave2").style.background = buttonNormalColor;
	document.getElementById("octave3").style.background = buttonColor;
	document.getElementById("octave4").style.background = buttonNormalColor;
	document.getElementById("octave2").innerHTML = "Octave 2";
	document.getElementById("octave3").innerHTML = "Octave 3 (selected)";
	document.getElementById("octave4").innerHTML = "Octave 4";
	document.getElementById("octave5").innerHTML = "Octave 5";
	document.getElementById("octave5").style.background = buttonNormalColor;
	noteAdapter = 24;
	updateReferences();
});

$('#octave4').click(function () {
	document.getElementById("octave2").style.background = buttonNormalColor;
	document.getElementById("octave4").style.background = buttonColor;
	document.getElementById("octave3").style.background = buttonNormalColor;
	document.getElementById("octave2").innerHTML = "Octave 2";
	document.getElementById("octave3").innerHTML = "Octave 3";
	document.getElementById("octave4").innerHTML = "Octave 4 (selected)";
	
	document.getElementById("octave5").innerHTML = "Octave 5";
	document.getElementById("octave5").style.background = buttonNormalColor;
	noteAdapter = 36;
	updateReferences();
});

$('#octave5').click(function () {	
document.getElementById("octave2").style.background = buttonNormalColor;
	document.getElementById("octave4").style.background = buttonNormalColor;
	document.getElementById("octave3").style.background = buttonNormalColor;
	document.getElementById("octave2").innerHTML = "Octave 2";
	document.getElementById("octave3").innerHTML = "Octave 3";
	document.getElementById("octave4").innerHTML = "Octave 4";
	
	document.getElementById("octave5").innerHTML = "Octave 5 (selected)";
	document.getElementById("octave5").style.background = buttonColor;
	noteAdapter = 48;
	updateReferences();
});

$('#playAgainButton').click(function () {
	r = randomNoteNum;
	if(!paused){gauge.update({
		majorTicks: [(noteArray[r - 1] || "")[1] || "", noteArray[r][1], (noteArray[r + 1] || "")[1] || ""],
		units: (noteArray[r][1] + " " + Math.floor(score)) //sets the 3 notes in there.
	});
	}
	else{
	gauge.update({
		units: "Paused" 
	});//sets the 3 notes in there.
	}
	playANote(randomNoteNum);
	// var audio = document.getElementById(soundId(noteArray[randomNoteNum][1]));
	// //	alert (""+soundId(getNoteName(note)));
	// // if audio(const playPromise = audio.play();
	// // if (playPromise !== null) {
	// // playPromise.catch(() => {
	// // audio.pause();
	// // audio.volume = 1.0;
	// // if (audio.readyState >= 2) {
	// // audio.currentTime = 0;
	// // // audio.play();
	// // }
	// // })
	// // }
	// // if (audio) {

	// // }

	// //press();
	// //playNote(midiNoteToFrequency(note));
	// //press(note);
	// //if (velocity > 0) {
	// if (audio) {
	// audio.pause();
	// audio.volume = 1.0;
	// if (audio.readyState >= 2) {
	// audio.currentTime = 0;
	// var promise = audio.play();

	// if (promise !== undefined) {
	// promise.then(_ => {
	// // Autoplay started!
	// }).catch(error => {
	// //alert ("it worked");
	// // Autoplay was prevented.
	// // Show a "Play" button so that user can start playback.
	// });
	// }

	// }
	// }
});
initTuner();
window.tuner_rand = 8319731;