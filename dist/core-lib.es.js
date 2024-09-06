import { jsx as Je } from "react/jsx-runtime";
import { useTheme as gt, useMediaQuery as Jt, Box as bt } from "@mui/material";
import * as H from "react";
import { forwardRef as Zt, useContext as Qt } from "react";
function Re(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Re
}, Symbol.toStringTag, { value: "Module" }));
function z() {
  return z = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        ({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, z.apply(null, arguments);
}
function vt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var rn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, tn = /* @__PURE__ */ vt(
  function(e) {
    return rn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), nn = !1;
function on(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function an(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var sn = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? !nn : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(an(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = on(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), K = "-ms-", Ke = "-moz-", N = "-webkit-", xt = "comm", Ar = "rule", kr = "decl", cn = "@import", Et = "@keyframes", un = "@layer", fn = Math.abs, Ze = String.fromCharCode, ln = Object.assign;
function dn(e, r) {
  return G(e, 0) ^ 45 ? (((r << 2 ^ G(e, 0)) << 2 ^ G(e, 1)) << 2 ^ G(e, 2)) << 2 ^ G(e, 3) : 0;
}
function Ot(e) {
  return e.trim();
}
function pn(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function I(e, r, t) {
  return e.replace(r, t);
}
function Sr(e, r) {
  return e.indexOf(r);
}
function G(e, r) {
  return e.charCodeAt(r) | 0;
}
function Ne(e, r, t) {
  return e.slice(r, t);
}
function ae(e) {
  return e.length;
}
function $r(e) {
  return e.length;
}
function Fe(e, r) {
  return r.push(e), e;
}
function mn(e, r) {
  return e.map(r).join("");
}
var Qe = 1, we = 1, Tt = 0, Z = 0, Y = 0, _e = "";
function er(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: Qe, column: we, length: a, return: "" };
}
function Ae(e, r) {
  return ln(er("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function hn() {
  return Y;
}
function yn() {
  return Y = Z > 0 ? G(_e, --Z) : 0, we--, Y === 10 && (we = 1, Qe--), Y;
}
function ee() {
  return Y = Z < Tt ? G(_e, Z++) : 0, we++, Y === 10 && (we = 1, Qe++), Y;
}
function ce() {
  return G(_e, Z);
}
function qe() {
  return Z;
}
function De(e, r) {
  return Ne(_e, e, r);
}
function Ie(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function St(e) {
  return Qe = we = 1, Tt = ae(_e = e), Z = 0, [];
}
function wt(e) {
  return _e = "", e;
}
function Ye(e) {
  return Ot(De(Z - 1, wr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gn(e) {
  for (; (Y = ce()) && Y < 33; )
    ee();
  return Ie(e) > 2 || Ie(Y) > 3 ? "" : " ";
}
function bn(e, r) {
  for (; --r && ee() && !(Y < 48 || Y > 102 || Y > 57 && Y < 65 || Y > 70 && Y < 97); )
    ;
  return De(e, qe() + (r < 6 && ce() == 32 && ee() == 32));
}
function wr(e) {
  for (; ee(); )
    switch (Y) {
      case e:
        return Z;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wr(Y);
        break;
      case 40:
        e === 41 && wr(e);
        break;
      case 92:
        ee();
        break;
    }
  return Z;
}
function vn(e, r) {
  for (; ee() && e + Y !== 57; )
    if (e + Y === 84 && ce() === 47)
      break;
  return "/*" + De(r, Z - 1) + "*" + Ze(e === 47 ? e : ee());
}
function xn(e) {
  for (; !Ie(ce()); )
    ee();
  return De(e, Z);
}
function En(e) {
  return wt(Ge("", null, null, null, [""], e = St(e), 0, [0], e));
}
function Ge(e, r, t, n, o, i, a, s, l) {
  for (var f = 0, c = 0, p = a, d = 0, b = 0, y = 0, u = 1, x = 1, E = 1, R = 0, T = "", B = o, h = i, F = n, P = T; x; )
    switch (y = R, R = ee()) {
      case 40:
        if (y != 108 && G(P, p - 1) == 58) {
          Sr(P += I(Ye(R), "&", "&\f"), "&\f") != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += Ye(R);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += gn(y);
        break;
      case 92:
        P += bn(qe() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Fe(On(vn(ee(), qe()), r, t), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * u:
        s[f++] = ae(P) * E;
      case 125 * u:
      case 59:
      case 0:
        switch (R) {
          case 0:
          case 125:
            x = 0;
          case 59 + c:
            E == -1 && (P = I(P, /\f/g, "")), b > 0 && ae(P) - p && Fe(b > 32 ? Wr(P + ";", n, t, p - 1) : Wr(I(P, " ", "") + ";", n, t, p - 2), l);
            break;
          case 59:
            P += ";";
          default:
            if (Fe(F = Ur(P, r, t, f, c, o, s, T, B = [], h = [], p), i), R === 123)
              if (c === 0)
                Ge(P, r, F, F, B, i, p, s, h);
              else
                switch (d === 99 && G(P, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ge(e, F, F, n && Fe(Ur(e, F, F, 0, 0, o, s, T, o, B = [], p), h), o, h, p, s, n ? B : h);
                    break;
                  default:
                    Ge(P, F, F, F, [""], h, 0, s, h);
                }
        }
        f = c = b = 0, u = E = 1, T = P = "", p = a;
        break;
      case 58:
        p = 1 + ae(P), b = y;
      default:
        if (u < 1) {
          if (R == 123)
            --u;
          else if (R == 125 && u++ == 0 && yn() == 125)
            continue;
        }
        switch (P += Ze(R), R * u) {
          case 38:
            E = c > 0 ? 1 : (P += "\f", -1);
            break;
          case 44:
            s[f++] = (ae(P) - 1) * E, E = 1;
            break;
          case 64:
            ce() === 45 && (P += Ye(ee())), d = ce(), c = p = ae(T = P += xn(qe())), R++;
            break;
          case 45:
            y === 45 && ae(P) == 2 && (u = 0);
        }
    }
  return i;
}
function Ur(e, r, t, n, o, i, a, s, l, f, c) {
  for (var p = o - 1, d = o === 0 ? i : [""], b = $r(d), y = 0, u = 0, x = 0; y < n; ++y)
    for (var E = 0, R = Ne(e, p + 1, p = fn(u = a[y])), T = e; E < b; ++E)
      (T = Ot(u > 0 ? d[E] + " " + R : I(R, /&\f/g, d[E]))) && (l[x++] = T);
  return er(e, r, t, o === 0 ? Ar : s, l, f, c);
}
function On(e, r, t) {
  return er(e, r, t, xt, Ze(hn()), Ne(e, 2, -2), 0);
}
function Wr(e, r, t, n) {
  return er(e, r, t, kr, Ne(e, 0, n), Ne(e, n + 1, -1), n);
}
function Te(e, r) {
  for (var t = "", n = $r(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Tn(e, r, t, n) {
  switch (e.type) {
    case un:
      if (e.children.length)
        break;
    case cn:
    case kr:
      return e.return = e.return || e.value;
    case xt:
      return "";
    case Et:
      return e.return = e.value + "{" + Te(e.children, n) + "}";
    case Ar:
      e.value = e.props.join(",");
  }
  return ae(t = Te(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Sn(e) {
  var r = $r(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function wn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var _n = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = ce(), o === 38 && i === 12 && (t[n] = 1), !Ie(i); )
    ee();
  return De(r, Z);
}, Cn = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Ie(o)) {
      case 0:
        o === 38 && ce() === 12 && (t[n] = 1), r[n] += _n(Z - 1, t, n);
        break;
      case 2:
        r[n] += Ye(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ce() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += Ze(o);
    }
  while (o = ee());
  return r;
}, Pn = function(r, t) {
  return wt(Cn(St(r), t));
}, Fr = /* @__PURE__ */ new WeakMap(), An = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Fr.get(n)) && !o) {
      Fr.set(r, !0);
      for (var i = [], a = Pn(t, i), s = n.props, l = 0, f = 0; l < a.length; l++)
        for (var c = 0; c < s.length; c++, f++)
          r.props[f] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l];
    }
  }
}, kn = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function _t(e, r) {
  switch (dn(e, r)) {
    case 5103:
      return N + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return N + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return N + e + Ke + e + K + e + e;
    case 6828:
    case 4268:
      return N + e + K + e + e;
    case 6165:
      return N + e + K + "flex-" + e + e;
    case 5187:
      return N + e + I(e, /(\w+).+(:[^]+)/, N + "box-$1$2" + K + "flex-$1$2") + e;
    case 5443:
      return N + e + K + "flex-item-" + I(e, /flex-|-self/, "") + e;
    case 4675:
      return N + e + K + "flex-line-pack" + I(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return N + e + K + I(e, "shrink", "negative") + e;
    case 5292:
      return N + e + K + I(e, "basis", "preferred-size") + e;
    case 6060:
      return N + "box-" + I(e, "-grow", "") + N + e + K + I(e, "grow", "positive") + e;
    case 4554:
      return N + I(e, /([^-])(transform)/g, "$1" + N + "$2") + e;
    case 6187:
      return I(I(I(e, /(zoom-|grab)/, N + "$1"), /(image-set)/, N + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, N + "$1$`$1");
    case 4968:
      return I(I(e, /(.+:)(flex-)?(.*)/, N + "box-pack:$3" + K + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + N + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, N + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ae(e) - 1 - r > 6)
        switch (G(e, r + 1)) {
          case 109:
            if (G(e, r + 4) !== 45)
              break;
          case 102:
            return I(e, /(.+:)(.+)-([^]+)/, "$1" + N + "$2-$3$1" + Ke + (G(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Sr(e, "stretch") ? _t(I(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (G(e, r + 1) !== 115)
        break;
    case 6444:
      switch (G(e, ae(e) - 3 - (~Sr(e, "!important") && 10))) {
        case 107:
          return I(e, ":", ":" + N) + e;
        case 101:
          return I(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + N + (G(e, 14) === 45 ? "inline-" : "") + "box$3$1" + N + "$2$3$1" + K + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (G(e, r + 11)) {
        case 114:
          return N + e + K + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return N + e + K + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return N + e + K + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return N + e + K + e + e;
  }
  return e;
}
var $n = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case kr:
        r.return = _t(r.value, r.length);
        break;
      case Et:
        return Te([Ae(r, {
          value: I(r.value, "@", "@" + N)
        })], o);
      case Ar:
        if (r.length)
          return mn(r.props, function(i) {
            switch (pn(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Te([Ae(r, {
                  props: [I(i, /:(read-\w+)/, ":" + Ke + "$1")]
                })], o);
              case "::placeholder":
                return Te([Ae(r, {
                  props: [I(i, /:(plac\w+)/, ":" + N + "input-$1")]
                }), Ae(r, {
                  props: [I(i, /:(plac\w+)/, ":" + Ke + "$1")]
                }), Ae(r, {
                  props: [I(i, /:(plac\w+)/, K + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Rn = [$n], Nn = function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(u) {
      var x = u.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(u), u.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Rn, i = {}, a, s = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(u) {
      for (var x = u.getAttribute("data-emotion").split(" "), E = 1; E < x.length; E++)
        i[x[E]] = !0;
      s.push(u);
    }
  );
  var l, f = [An, kn];
  {
    var c, p = [Tn, wn(function(u) {
      c.insert(u);
    })], d = Sn(f.concat(o, p)), b = function(x) {
      return Te(En(x), d);
    };
    l = function(x, E, R, T) {
      c = R, b(x ? x + "{" + E.styles + "}" : E.styles), T && (y.inserted[E.name] = !0);
    };
  }
  var y = {
    key: t,
    sheet: new sn({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return y.sheet.hydrate(s), y;
};
function In(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ct(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Mn = !0;
function Pt(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Rr = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Mn === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, At = function(r, t, n) {
  Rr(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function jn(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var Dn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Bn = !1, Ln = /[A-Z]|^ms/g, zn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, kt = function(r) {
  return r.charCodeAt(1) === 45;
}, Vr = function(r) {
  return r != null && typeof r != "boolean";
}, yr = /* @__PURE__ */ vt(function(e) {
  return kt(e) ? e : e.replace(Ln, "-$&").toLowerCase();
}), qr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(zn, function(n, o, i) {
          return se = {
            name: o,
            styles: i,
            next: se
          }, o;
        });
  }
  return Dn[r] !== 1 && !kt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, Un = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Me(e, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var o = t;
      if (o.anim === 1)
        return se = {
          name: o.name,
          styles: o.styles,
          next: se
        }, o.name;
      var i = t;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            se = {
              name: a.name,
              styles: a.styles,
              next: se
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Wn(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var l = se, f = t(e);
        return se = l, Me(e, r, f);
      }
      break;
    }
  }
  var c = t;
  if (r == null)
    return c;
  var p = r[c];
  return p !== void 0 ? p : c;
}
function Wn(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += Me(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object") {
        var s = a;
        r != null && r[s] !== void 0 ? n += i + "{" + r[s] + "}" : Vr(s) && (n += yr(i) + ":" + qr(i, s) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && Bn)
          throw new Error(Un);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            Vr(a[l]) && (n += yr(i) + ":" + qr(i, a[l]) + ";");
        else {
          var f = Me(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += yr(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var Yr = /label:\s*([^\s;\n{]+)\s*(;|$)/g, se;
function _r(e, r, t) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  se = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Me(t, r, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Me(t, r, e[s]), n) {
      var l = i;
      o += l[s];
    }
  Yr.lastIndex = 0;
  for (var f = "", c; (c = Yr.exec(o)) !== null; )
    f += "-" + c[1];
  var p = jn(o) + f;
  return {
    name: p,
    styles: o,
    next: se
  };
}
var Fn = function(r) {
  return r();
}, Vn = H.useInsertionEffect ? H.useInsertionEffect : !1, $t = Vn || Fn, qn = {}.hasOwnProperty, Nr = /* @__PURE__ */ H.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Nn({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Nr.displayName = "EmotionCacheContext");
Nr.Provider;
var Rt = function(r) {
  return /* @__PURE__ */ Zt(function(t, n) {
    var o = Qt(Nr);
    return r(t, o, n);
  });
}, rr = /* @__PURE__ */ H.createContext({});
process.env.NODE_ENV !== "production" && (rr.displayName = "EmotionThemeContext");
var Gr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Kr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Yn = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Rr(t, n, o), $t(function() {
    return At(t, n, o);
  }), null;
}, Gn = /* @__PURE__ */ Rt(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[Gr], i = [n], a = "";
  typeof e.className == "string" ? a = Pt(r.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = _r(i, void 0, H.useContext(rr));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[Kr];
    l && (s = _r([s, "label:" + l + ";"]));
  }
  a += r.key + "-" + s.name;
  var f = {};
  for (var c in e)
    qn.call(e, c) && c !== "css" && c !== Gr && (process.env.NODE_ENV === "production" || c !== Kr) && (f[c] = e[c]);
  return f.ref = t, f.className = a, /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(Yn, {
    cache: r,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ H.createElement(o, f));
});
process.env.NODE_ENV !== "production" && (Gn.displayName = "EmotionCssPropInternal");
var Kn = tn, Hn = function(r) {
  return r !== "theme";
}, Hr = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Kn : Hn;
}, Xr = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Jr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Xn = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Rr(t, n, o), $t(function() {
    return At(t, n, o);
  }), null;
}, Jn = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var s = Xr(r, t, n), l = s || Hr(o), f = !l("as");
  return function() {
    var c = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      p.push.apply(p, c);
    else {
      process.env.NODE_ENV !== "production" && c[0][0] === void 0 && console.error(Jr), p.push(c[0][0]);
      for (var d = c.length, b = 1; b < d; b++)
        process.env.NODE_ENV !== "production" && c[0][b] === void 0 && console.error(Jr), p.push(c[b], c[0][b]);
    }
    var y = Rt(function(u, x, E) {
      var R = f && u.as || o, T = "", B = [], h = u;
      if (u.theme == null) {
        h = {};
        for (var F in u)
          h[F] = u[F];
        h.theme = H.useContext(rr);
      }
      typeof u.className == "string" ? T = Pt(x.registered, B, u.className) : u.className != null && (T = u.className + " ");
      var P = _r(p.concat(B), x.registered, h);
      T += x.key + "-" + P.name, a !== void 0 && (T += " " + a);
      var Pe = f && s === void 0 ? Hr(R) : l, le = {};
      for (var de in u)
        f && de === "as" || // $FlowFixMe
        Pe(de) && (le[de] = u[de]);
      return le.className = T, le.ref = E, /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement(Xn, {
        cache: x,
        serialized: P,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ H.createElement(R, le));
    });
    return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = r.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = p, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), y.withComponent = function(u, x) {
      return e(u, z({}, t, x, {
        shouldForwardProp: Xr(y, x, !0)
      })).apply(void 0, p);
    }, y;
  };
}, Zn = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Cr = Jn.bind();
Zn.forEach(function(e) {
  Cr[e] = Cr(e);
});
var Pr = { exports: {} }, Ve = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function Qn() {
  if (Zr)
    return M;
  Zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function T(h) {
    if (typeof h == "object" && h !== null) {
      var F = h.$$typeof;
      switch (F) {
        case r:
          switch (h = h.type, h) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case p:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case s:
                case c:
                case y:
                case b:
                case a:
                  return h;
                default:
                  return F;
              }
          }
        case t:
          return F;
      }
    }
  }
  function B(h) {
    return T(h) === f;
  }
  return M.AsyncMode = l, M.ConcurrentMode = f, M.ContextConsumer = s, M.ContextProvider = a, M.Element = r, M.ForwardRef = c, M.Fragment = n, M.Lazy = y, M.Memo = b, M.Portal = t, M.Profiler = i, M.StrictMode = o, M.Suspense = p, M.isAsyncMode = function(h) {
    return B(h) || T(h) === l;
  }, M.isConcurrentMode = B, M.isContextConsumer = function(h) {
    return T(h) === s;
  }, M.isContextProvider = function(h) {
    return T(h) === a;
  }, M.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === r;
  }, M.isForwardRef = function(h) {
    return T(h) === c;
  }, M.isFragment = function(h) {
    return T(h) === n;
  }, M.isLazy = function(h) {
    return T(h) === y;
  }, M.isMemo = function(h) {
    return T(h) === b;
  }, M.isPortal = function(h) {
    return T(h) === t;
  }, M.isProfiler = function(h) {
    return T(h) === i;
  }, M.isStrictMode = function(h) {
    return T(h) === o;
  }, M.isSuspense = function(h) {
    return T(h) === p;
  }, M.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === n || h === f || h === i || h === o || h === p || h === d || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === b || h.$$typeof === a || h.$$typeof === s || h.$$typeof === c || h.$$typeof === x || h.$$typeof === E || h.$$typeof === R || h.$$typeof === u);
  }, M.typeOf = T, M;
}
var j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function eo() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function T(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === f || g === i || g === o || g === p || g === d || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === b || g.$$typeof === a || g.$$typeof === s || g.$$typeof === c || g.$$typeof === x || g.$$typeof === E || g.$$typeof === R || g.$$typeof === u);
    }
    function B(g) {
      if (typeof g == "object" && g !== null) {
        var ie = g.$$typeof;
        switch (ie) {
          case r:
            var We = g.type;
            switch (We) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case p:
                return We;
              default:
                var zr = We && We.$$typeof;
                switch (zr) {
                  case s:
                  case c:
                  case y:
                  case b:
                  case a:
                    return zr;
                  default:
                    return ie;
                }
            }
          case t:
            return ie;
        }
      }
    }
    var h = l, F = f, P = s, Pe = a, le = r, de = c, ze = n, dr = y, pr = b, ge = t, mr = i, oe = o, he = p, Ue = !1;
    function hr(g) {
      return Ue || (Ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(g) || B(g) === l;
    }
    function m(g) {
      return B(g) === f;
    }
    function v(g) {
      return B(g) === s;
    }
    function C(g) {
      return B(g) === a;
    }
    function w(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    function O(g) {
      return B(g) === c;
    }
    function A(g) {
      return B(g) === n;
    }
    function S(g) {
      return B(g) === y;
    }
    function _(g) {
      return B(g) === b;
    }
    function k(g) {
      return B(g) === t;
    }
    function D(g) {
      return B(g) === i;
    }
    function $(g) {
      return B(g) === o;
    }
    function J(g) {
      return B(g) === p;
    }
    j.AsyncMode = h, j.ConcurrentMode = F, j.ContextConsumer = P, j.ContextProvider = Pe, j.Element = le, j.ForwardRef = de, j.Fragment = ze, j.Lazy = dr, j.Memo = pr, j.Portal = ge, j.Profiler = mr, j.StrictMode = oe, j.Suspense = he, j.isAsyncMode = hr, j.isConcurrentMode = m, j.isContextConsumer = v, j.isContextProvider = C, j.isElement = w, j.isForwardRef = O, j.isFragment = A, j.isLazy = S, j.isMemo = _, j.isPortal = k, j.isProfiler = D, j.isStrictMode = $, j.isSuspense = J, j.isValidElementType = T, j.typeOf = B;
  }()), j;
}
var et;
function Nt() {
  return et || (et = 1, process.env.NODE_ENV === "production" ? Ve.exports = Qn() : Ve.exports = eo()), Ve.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var gr, rt;
function ro() {
  if (rt)
    return gr;
  rt = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(c) {
        return a[c];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        f[c] = c;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return gr = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), f, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var p in s)
        r.call(s, p) && (l[p] = s[p]);
      if (e) {
        f = e(s);
        for (var d = 0; d < f.length; d++)
          t.call(s, f[d]) && (l[f[d]] = s[f[d]]);
      }
    }
    return l;
  }, gr;
}
var br, tt;
function Ir() {
  if (tt)
    return br;
  tt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return br = e, br;
}
var vr, nt;
function It() {
  return nt || (nt = 1, vr = Function.call.bind(Object.prototype.hasOwnProperty)), vr;
}
var xr, ot;
function to() {
  if (ot)
    return xr;
  ot = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = Ir(), t = {}, n = It();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (n(i, c)) {
          var p;
          try {
            if (typeof i[c] != "function") {
              var d = Error(
                (l || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = i[c](a, c, l, s, null, r);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in t)) {
            t[p.message] = !0;
            var b = f ? f() : "";
            e(
              "Failed " + s + " type: " + p.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, xr = o, xr;
}
var Er, it;
function no() {
  if (it)
    return Er;
  it = 1;
  var e = Nt(), r = ro(), t = Ir(), n = It(), o = to(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Er = function(s, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function p(m) {
      var v = m && (f && m[f] || m[c]);
      if (typeof v == "function")
        return v;
    }
    var d = "<<anonymous>>", b = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: R(),
      arrayOf: T,
      element: B(),
      elementType: h(),
      instanceOf: F,
      node: de(),
      objectOf: Pe,
      oneOf: P,
      oneOfType: le,
      shape: dr,
      exact: pr
    };
    function y(m, v) {
      return m === v ? m !== 0 || 1 / m === 1 / v : m !== m && v !== v;
    }
    function u(m, v) {
      this.message = m, this.data = v && typeof v == "object" ? v : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function x(m) {
      if (process.env.NODE_ENV !== "production")
        var v = {}, C = 0;
      function w(A, S, _, k, D, $, J) {
        if (k = k || d, $ = $ || _, J !== t) {
          if (l) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ie = k + ":" + _;
            !v[ie] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + k + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), v[ie] = !0, C++);
          }
        }
        return S[_] == null ? A ? S[_] === null ? new u("The " + D + " `" + $ + "` is marked as required " + ("in `" + k + "`, but its value is `null`.")) : new u("The " + D + " `" + $ + "` is marked as required in " + ("`" + k + "`, but its value is `undefined`.")) : null : m(S, _, k, D, $);
      }
      var O = w.bind(null, !1);
      return O.isRequired = w.bind(null, !0), O;
    }
    function E(m) {
      function v(C, w, O, A, S, _) {
        var k = C[w], D = oe(k);
        if (D !== m) {
          var $ = he(k);
          return new u(
            "Invalid " + A + " `" + S + "` of type " + ("`" + $ + "` supplied to `" + O + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return x(v);
    }
    function R() {
      return x(a);
    }
    function T(m) {
      function v(C, w, O, A, S) {
        if (typeof m != "function")
          return new u("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var _ = C[w];
        if (!Array.isArray(_)) {
          var k = oe(_);
          return new u("Invalid " + A + " `" + S + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected an array."));
        }
        for (var D = 0; D < _.length; D++) {
          var $ = m(_, D, O, A, S + "[" + D + "]", t);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return x(v);
    }
    function B() {
      function m(v, C, w, O, A) {
        var S = v[C];
        if (!s(S)) {
          var _ = oe(S);
          return new u("Invalid " + O + " `" + A + "` of type " + ("`" + _ + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(m);
    }
    function h() {
      function m(v, C, w, O, A) {
        var S = v[C];
        if (!e.isValidElementType(S)) {
          var _ = oe(S);
          return new u("Invalid " + O + " `" + A + "` of type " + ("`" + _ + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(m);
    }
    function F(m) {
      function v(C, w, O, A, S) {
        if (!(C[w] instanceof m)) {
          var _ = m.name || d, k = hr(C[w]);
          return new u("Invalid " + A + " `" + S + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return x(v);
    }
    function P(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function v(C, w, O, A, S) {
        for (var _ = C[w], k = 0; k < m.length; k++)
          if (y(_, m[k]))
            return null;
        var D = JSON.stringify(m, function(J, g) {
          var ie = he(g);
          return ie === "symbol" ? String(g) : g;
        });
        return new u("Invalid " + A + " `" + S + "` of value `" + String(_) + "` " + ("supplied to `" + O + "`, expected one of " + D + "."));
      }
      return x(v);
    }
    function Pe(m) {
      function v(C, w, O, A, S) {
        if (typeof m != "function")
          return new u("Property `" + S + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var _ = C[w], k = oe(_);
        if (k !== "object")
          return new u("Invalid " + A + " `" + S + "` of type " + ("`" + k + "` supplied to `" + O + "`, expected an object."));
        for (var D in _)
          if (n(_, D)) {
            var $ = m(_, D, O, A, S + "." + D, t);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return x(v);
    }
    function le(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var v = 0; v < m.length; v++) {
        var C = m[v];
        if (typeof C != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ue(C) + " at index " + v + "."
          ), a;
      }
      function w(O, A, S, _, k) {
        for (var D = [], $ = 0; $ < m.length; $++) {
          var J = m[$], g = J(O, A, S, _, k, t);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && D.push(g.data.expectedType);
        }
        var ie = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new u("Invalid " + _ + " `" + k + "` supplied to " + ("`" + S + "`" + ie + "."));
      }
      return x(w);
    }
    function de() {
      function m(v, C, w, O, A) {
        return ge(v[C]) ? null : new u("Invalid " + O + " `" + A + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return x(m);
    }
    function ze(m, v, C, w, O) {
      return new u(
        (m || "React class") + ": " + v + " type `" + C + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function dr(m) {
      function v(C, w, O, A, S) {
        var _ = C[w], k = oe(_);
        if (k !== "object")
          return new u("Invalid " + A + " `" + S + "` of type `" + k + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var D in m) {
          var $ = m[D];
          if (typeof $ != "function")
            return ze(O, A, S, D, he($));
          var J = $(_, D, O, A, S + "." + D, t);
          if (J)
            return J;
        }
        return null;
      }
      return x(v);
    }
    function pr(m) {
      function v(C, w, O, A, S) {
        var _ = C[w], k = oe(_);
        if (k !== "object")
          return new u("Invalid " + A + " `" + S + "` of type `" + k + "` " + ("supplied to `" + O + "`, expected `object`."));
        var D = r({}, C[w], m);
        for (var $ in D) {
          var J = m[$];
          if (n(m, $) && typeof J != "function")
            return ze(O, A, S, $, he(J));
          if (!J)
            return new u(
              "Invalid " + A + " `" + S + "` key `" + $ + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(C[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var g = J(_, $, O, A, S + "." + $, t);
          if (g)
            return g;
        }
        return null;
      }
      return x(v);
    }
    function ge(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(ge);
          if (m === null || s(m))
            return !0;
          var v = p(m);
          if (v) {
            var C = v.call(m), w;
            if (v !== m.entries) {
              for (; !(w = C.next()).done; )
                if (!ge(w.value))
                  return !1;
            } else
              for (; !(w = C.next()).done; ) {
                var O = w.value;
                if (O && !ge(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function mr(m, v) {
      return m === "symbol" ? !0 : v ? v["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && v instanceof Symbol : !1;
    }
    function oe(m) {
      var v = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : mr(v, m) ? "symbol" : v;
    }
    function he(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var v = oe(m);
      if (v === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return v;
    }
    function Ue(m) {
      var v = he(m);
      switch (v) {
        case "array":
        case "object":
          return "an " + v;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + v;
        default:
          return v;
      }
    }
    function hr(m) {
      return !m.constructor || !m.constructor.name ? d : m.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Er;
}
var Or, at;
function oo() {
  if (at)
    return Or;
  at = 1;
  var e = Ir();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, Or = function() {
    function n(a, s, l, f, c, p) {
      if (p !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, Or;
}
if (process.env.NODE_ENV !== "production") {
  var io = Nt(), ao = !0;
  Pr.exports = no()(io.isElement, ao);
} else
  Pr.exports = oo()();
var so = Pr.exports;
const X = /* @__PURE__ */ In(so);
/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function co(e, r) {
  const t = Cr(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = `"${e}"`;
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
function pe(e, r) {
  if (e == null)
    return {};
  var t = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (r.includes(n))
        continue;
      t[n] = e[n];
    }
  return t;
}
function ye(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const r = Object.getPrototypeOf(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Mt(e) {
  if (!ye(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = Mt(e[t]);
  }), r;
}
function ue(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? z({}, e) : e;
  return ye(e) && ye(r) && Object.keys(r).forEach((o) => {
    ye(r[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ye(e[o]) ? n[o] = ue(e[o], r[o], t) : t.clone ? n[o] = ye(r[o]) ? Mt(r[o]) : r[o] : n[o] = r[o];
  }), n;
}
const uo = ["values", "unit", "step"], fo = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => z({}, t, {
    [n.key]: n.val
  }), {});
};
function lo(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = pe(e, uo), i = fo(r), a = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t})`;
  }
  function l(d) {
    return `@media (max-width:${(typeof r[d] == "number" ? r[d] : d) - n / 100}${t})`;
  }
  function f(d, b) {
    const y = a.indexOf(b);
    return `@media (min-width:${typeof r[d] == "number" ? r[d] : d}${t}) and (max-width:${(y !== -1 && typeof r[a[y]] == "number" ? r[a[y]] : b) - n / 100}${t})`;
  }
  function c(d) {
    return a.indexOf(d) + 1 < a.length ? f(d, a[a.indexOf(d) + 1]) : s(d);
  }
  function p(d) {
    const b = a.indexOf(d);
    return b === 0 ? s(a[1]) : b === a.length - 1 ? l(a[b]) : f(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return z({
    keys: a,
    values: i,
    up: s,
    down: l,
    between: f,
    only: c,
    not: p,
    unit: t
  }, o);
}
const po = {
  borderRadius: 4
}, me = process.env.NODE_ENV !== "production" ? X.oneOfType([X.number, X.string, X.object, X.array]) : {};
function $e(e, r) {
  return r ? ue(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Mr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, st = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Mr[e]}px)`
};
function fe(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || st;
    return r.reduce((a, s, l) => (a[i.up(i.keys[l])] = t(r[l]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || st;
    return Object.keys(r).reduce((a, s) => {
      if (Object.keys(i.values || Mr).indexOf(s) !== -1) {
        const l = i.up(s);
        a[l] = t(r[s], s);
      } else {
        const l = s;
        a[l] = r[l];
      }
      return a;
    }, {});
  }
  return t(r);
}
function mo(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function ho(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function jt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Re(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function tr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function He(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = tr(e, t) || n, r && (o = r(o, n, e)), o;
}
function V(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const s = a[r], l = a.theme, f = tr(l, n) || {};
    return fe(a, s, (p) => {
      let d = He(f, o, p);
      return p === d && typeof p == "string" && (d = He(f, o, `${r}${p === "default" ? "" : jt(p)}`, p)), t === !1 ? d : {
        [t]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: me
  } : {}, i.filterProps = [r], i;
}
function yo(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const go = {
  m: "margin",
  p: "padding"
}, bo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ct = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, vo = yo((e) => {
  if (e.length > 2)
    if (ct[e])
      e = ct[e];
    else
      return [e];
  const [r, t] = e.split(""), n = go[r], o = bo[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), nr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], or = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], xo = [...nr, ...or];
function Be(e, r, t, n) {
  var o;
  const i = (o = tr(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Dt(e) {
  return Be(e, "spacing", 8, "spacing");
}
function Le(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Eo(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Le(r, t), n), {});
}
function Oo(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = vo(t), i = Eo(o, n), a = e[t];
  return fe(e, a, i);
}
function Bt(e, r) {
  const t = Dt(e.theme);
  return Object.keys(e).map((n) => Oo(e, r, n, t)).reduce($e, {});
}
function U(e) {
  return Bt(e, nr);
}
U.propTypes = process.env.NODE_ENV !== "production" ? nr.reduce((e, r) => (e[r] = me, e), {}) : {};
U.filterProps = nr;
function W(e) {
  return Bt(e, or);
}
W.propTypes = process.env.NODE_ENV !== "production" ? or.reduce((e, r) => (e[r] = me, e), {}) : {};
W.filterProps = or;
process.env.NODE_ENV !== "production" && xo.reduce((e, r) => (e[r] = me, e), {});
function To(e = 8) {
  if (e.mui)
    return e;
  const r = Dt({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function ir(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? $e(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function re(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function ne(e, r) {
  return V({
    prop: e,
    themeKey: "borders",
    transform: r
  });
}
const So = ne("border", re), wo = ne("borderTop", re), _o = ne("borderRight", re), Co = ne("borderBottom", re), Po = ne("borderLeft", re), Ao = ne("borderColor"), ko = ne("borderTopColor"), $o = ne("borderRightColor"), Ro = ne("borderBottomColor"), No = ne("borderLeftColor"), Io = ne("outline", re), Mo = ne("outlineColor"), ar = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Be(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Le(r, n)
    });
    return fe(e, e.borderRadius, t);
  }
  return null;
};
ar.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: me
} : {};
ar.filterProps = ["borderRadius"];
ir(So, wo, _o, Co, Po, Ao, ko, $o, Ro, No, ar, Io, Mo);
const sr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Be(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Le(r, n)
    });
    return fe(e, e.gap, t);
  }
  return null;
};
sr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: me
} : {};
sr.filterProps = ["gap"];
const cr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Be(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Le(r, n)
    });
    return fe(e, e.columnGap, t);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: me
} : {};
cr.filterProps = ["columnGap"];
const ur = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Be(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Le(r, n)
    });
    return fe(e, e.rowGap, t);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: me
} : {};
ur.filterProps = ["rowGap"];
const jo = V({
  prop: "gridColumn"
}), Do = V({
  prop: "gridRow"
}), Bo = V({
  prop: "gridAutoFlow"
}), Lo = V({
  prop: "gridAutoColumns"
}), zo = V({
  prop: "gridAutoRows"
}), Uo = V({
  prop: "gridTemplateColumns"
}), Wo = V({
  prop: "gridTemplateRows"
}), Fo = V({
  prop: "gridTemplateAreas"
}), Vo = V({
  prop: "gridArea"
});
ir(sr, cr, ur, jo, Do, Bo, Lo, zo, Uo, Wo, Fo, Vo);
function Se(e, r) {
  return r === "grey" ? r : e;
}
const qo = V({
  prop: "color",
  themeKey: "palette",
  transform: Se
}), Yo = V({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Se
}), Go = V({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Se
});
ir(qo, Yo, Go);
function Q(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ko = V({
  prop: "width",
  transform: Q
}), jr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || Mr[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Q(t)
      };
    };
    return fe(e, e.maxWidth, r);
  }
  return null;
};
jr.filterProps = ["maxWidth"];
const Ho = V({
  prop: "minWidth",
  transform: Q
}), Xo = V({
  prop: "height",
  transform: Q
}), Jo = V({
  prop: "maxHeight",
  transform: Q
}), Zo = V({
  prop: "minHeight",
  transform: Q
});
V({
  prop: "size",
  cssProperty: "width",
  transform: Q
});
V({
  prop: "size",
  cssProperty: "height",
  transform: Q
});
const Qo = V({
  prop: "boxSizing"
});
ir(Ko, jr, Ho, Xo, Jo, Zo, Qo);
const fr = {
  // borders
  border: {
    themeKey: "borders",
    transform: re
  },
  borderTop: {
    themeKey: "borders",
    transform: re
  },
  borderRight: {
    themeKey: "borders",
    transform: re
  },
  borderBottom: {
    themeKey: "borders",
    transform: re
  },
  borderLeft: {
    themeKey: "borders",
    transform: re
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: re
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ar
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Se
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Se
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Se
  },
  // spacing
  p: {
    style: W
  },
  pt: {
    style: W
  },
  pr: {
    style: W
  },
  pb: {
    style: W
  },
  pl: {
    style: W
  },
  px: {
    style: W
  },
  py: {
    style: W
  },
  padding: {
    style: W
  },
  paddingTop: {
    style: W
  },
  paddingRight: {
    style: W
  },
  paddingBottom: {
    style: W
  },
  paddingLeft: {
    style: W
  },
  paddingX: {
    style: W
  },
  paddingY: {
    style: W
  },
  paddingInline: {
    style: W
  },
  paddingInlineStart: {
    style: W
  },
  paddingInlineEnd: {
    style: W
  },
  paddingBlock: {
    style: W
  },
  paddingBlockStart: {
    style: W
  },
  paddingBlockEnd: {
    style: W
  },
  m: {
    style: U
  },
  mt: {
    style: U
  },
  mr: {
    style: U
  },
  mb: {
    style: U
  },
  ml: {
    style: U
  },
  mx: {
    style: U
  },
  my: {
    style: U
  },
  margin: {
    style: U
  },
  marginTop: {
    style: U
  },
  marginRight: {
    style: U
  },
  marginBottom: {
    style: U
  },
  marginLeft: {
    style: U
  },
  marginX: {
    style: U
  },
  marginY: {
    style: U
  },
  marginInline: {
    style: U
  },
  marginInlineStart: {
    style: U
  },
  marginInlineEnd: {
    style: U
  },
  marginBlock: {
    style: U
  },
  marginBlockStart: {
    style: U
  },
  marginBlockEnd: {
    style: U
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: sr
  },
  rowGap: {
    style: ur
  },
  columnGap: {
    style: cr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Q
  },
  maxWidth: {
    style: jr
  },
  minWidth: {
    transform: Q
  },
  height: {
    transform: Q
  },
  maxHeight: {
    transform: Q
  },
  minHeight: {
    transform: Q
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function ei(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function ri(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function ti() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, s = i[t];
    if (!s)
      return {
        [t]: n
      };
    const {
      cssProperty: l = t,
      themeKey: f,
      transform: c,
      style: p
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const d = tr(o, f) || {};
    return p ? p(a) : fe(a, n, (y) => {
      let u = He(d, c, y);
      return y === u && typeof y == "string" && (u = He(d, c, `${t}${y === "default" ? "" : jt(y)}`, y)), l === !1 ? u : {
        [l]: u
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : fr;
    function s(l) {
      let f = l;
      if (typeof l == "function")
        f = l(i);
      else if (typeof l != "object")
        return l;
      if (!f)
        return null;
      const c = mo(i.breakpoints), p = Object.keys(c);
      let d = c;
      return Object.keys(f).forEach((b) => {
        const y = ri(f[b], i);
        if (y != null)
          if (typeof y == "object")
            if (a[b])
              d = $e(d, e(b, y, i, a));
            else {
              const u = fe({
                theme: i
              }, y, (x) => ({
                [b]: x
              }));
              ei(u, y) ? d[b] = r({
                sx: y,
                theme: i
              }) : d = $e(d, u);
            }
          else
            d = $e(d, e(b, y, i, a));
      }), ho(p, d);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return r;
}
const lr = ti();
lr.filterProps = ["sx"];
function ni(e, r) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function" ? {
    [t.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: r
  } : t.palette.mode === e ? r : {};
}
const oi = ["breakpoints", "palette", "spacing", "shape"];
function Lt(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = pe(e, oi), s = lo(t), l = To(o);
  let f = ue({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: z({
      mode: "light"
    }, n),
    spacing: l,
    shape: z({}, po, i)
  }, a);
  return f.applyStyles = ni, f = r.reduce((c, p) => ue(c, p), f), f.unstable_sxConfig = z({}, fr, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return lr({
      sx: p,
      theme: this
    });
  }, f;
}
function ii(e) {
  return Object.keys(e).length === 0;
}
function ai(e = null) {
  const r = H.useContext(rr);
  return !r || ii(r) ? e : r;
}
const si = Lt();
function ci(e = si) {
  return ai(e);
}
const ui = ["sx"], fi = (e) => {
  var r, t;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (r = e == null || (t = e.theme) == null ? void 0 : t.unstable_sxConfig) != null ? r : fr;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function li(e) {
  const {
    sx: r
  } = e, t = pe(e, ui), {
    systemProps: n,
    otherProps: o
  } = fi(t);
  let i;
  return Array.isArray(r) ? i = [n, ...r] : typeof r == "function" ? i = (...a) => {
    const s = r(...a);
    return ye(s) ? z({}, n, s) : n;
  } : i = z({}, n, r), z({}, o, {
    sx: i
  });
}
const ut = (e) => e, di = () => {
  let e = ut;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = ut;
    }
  };
}, zt = di();
function Ut(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (r = 0; r < o; r++)
        e[r] && (t = Ut(e[r])) && (n && (n += " "), n += t);
    } else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function pi() {
  for (var e, r, t = 0, n = "", o = arguments.length; t < o; t++)
    (e = arguments[t]) && (r = Ut(e)) && (n && (n += " "), n += r);
  return n;
}
const mi = ["className", "component"];
function hi(e = {}) {
  const {
    themeId: r,
    defaultTheme: t,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = co("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(lr);
  return /* @__PURE__ */ H.forwardRef(function(l, f) {
    const c = ci(t), p = li(l), {
      className: d,
      component: b = "div"
    } = p, y = pe(p, mi);
    return /* @__PURE__ */ Je(i, z({
      as: b,
      ref: f,
      className: pi(d, o ? o(n) : n),
      theme: r && c[r] || c
    }, y));
  });
}
const yi = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Wt(e, r, t = "Mui") {
  const n = yi[r];
  return n ? `${t}-${n}` : `${zt.generate(e)}-${r}`;
}
function gi(e, r, t = "Mui") {
  const n = {};
  return r.forEach((o) => {
    n[o] = Wt(e, o, t);
  }), n;
}
function bi(e, r = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(e, t));
}
const vi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bi
}, Symbol.toStringTag, { value: "Module" })), xi = "$$material";
function Ei(e, r) {
  return z({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
var q = {}, Ft = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ft);
var Oi = Ft.exports;
const Ti = /* @__PURE__ */ Ct(en), Si = /* @__PURE__ */ Ct(vi);
var Vt = Oi;
Object.defineProperty(q, "__esModule", {
  value: !0
});
q.alpha = Kt;
q.blend = ji;
q.colorChannel = void 0;
var wi = q.darken = Br;
q.decomposeColor = te;
q.emphasize = Ht;
var ft = q.getContrastRatio = $i;
q.getLuminance = Xe;
q.hexToRgb = qt;
q.hslToRgb = Gt;
var _i = q.lighten = Lr;
q.private_safeAlpha = Ri;
q.private_safeColorChannel = void 0;
q.private_safeDarken = Ni;
q.private_safeEmphasize = Mi;
q.private_safeLighten = Ii;
q.recomposeColor = Ce;
q.rgbToHex = ki;
var lt = Vt(Ti), Ci = Vt(Si);
function Dr(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), (0, Ci.default)(e, r, t);
}
function qt(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Pi(e) {
  const r = e.toString(16);
  return r.length === 1 ? `0${r}` : r;
}
function te(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return te(qt(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, lt.default)(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, lt.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
const Yt = (e) => {
  const r = te(e);
  return r.values.slice(0, 3).map((t, n) => r.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t).join(" ");
};
q.colorChannel = Yt;
const Ai = (e, r) => {
  try {
    return Yt(e);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
};
q.private_safeColorChannel = Ai;
function Ce(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function ki(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: r
  } = te(e);
  return `#${r.map((t, n) => Pi(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function Gt(e) {
  e = te(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (f, c = (f + t / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(r[3])), Ce({
    type: s,
    values: l
  });
}
function Xe(e) {
  e = te(e);
  let r = e.type === "hsl" || e.type === "hsla" ? te(Gt(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function $i(e, r) {
  const t = Xe(e), n = Xe(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function Kt(e, r) {
  return e = te(e), r = Dr(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, Ce(e);
}
function Ri(e, r, t) {
  try {
    return Kt(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Br(e, r) {
  if (e = te(e), r = Dr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return Ce(e);
}
function Ni(e, r, t) {
  try {
    return Br(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Lr(e, r) {
  if (e = te(e), r = Dr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return Ce(e);
}
function Ii(e, r, t) {
  try {
    return Lr(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function Ht(e, r = 0.15) {
  return Xe(e) > 0.5 ? Br(e, r) : Lr(e, r);
}
function Mi(e, r, t) {
  try {
    return Ht(e, r);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
}
function ji(e, r, t, n = 1) {
  const o = (l, f) => Math.round((l ** (1 / n) * (1 - t) + f ** (1 / n) * t) ** n), i = te(e), a = te(r), s = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return Ce({
    type: "rgb",
    values: s
  });
}
const je = {
  black: "#000",
  white: "#fff"
}, Di = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, be = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, ve = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, ke = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, xe = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Ee = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, Oe = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Bi = ["mode", "contrastThreshold", "tonalOffset"], dt = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: je.white,
    default: je.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Tr = {
  text: {
    primary: je.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: je.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function pt(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = _i(e.main, o) : r === "dark" && (e.dark = wi(e.main, i)));
}
function Li(e = "light") {
  return e === "dark" ? {
    main: xe[200],
    light: xe[50],
    dark: xe[400]
  } : {
    main: xe[700],
    light: xe[400],
    dark: xe[800]
  };
}
function zi(e = "light") {
  return e === "dark" ? {
    main: be[200],
    light: be[50],
    dark: be[400]
  } : {
    main: be[500],
    light: be[300],
    dark: be[700]
  };
}
function Ui(e = "light") {
  return e === "dark" ? {
    main: ve[500],
    light: ve[300],
    dark: ve[700]
  } : {
    main: ve[700],
    light: ve[400],
    dark: ve[800]
  };
}
function Wi(e = "light") {
  return e === "dark" ? {
    main: Ee[400],
    light: Ee[300],
    dark: Ee[700]
  } : {
    main: Ee[700],
    light: Ee[500],
    dark: Ee[900]
  };
}
function Fi(e = "light") {
  return e === "dark" ? {
    main: Oe[400],
    light: Oe[300],
    dark: Oe[700]
  } : {
    main: Oe[800],
    light: Oe[500],
    dark: Oe[900]
  };
}
function Vi(e = "light") {
  return e === "dark" ? {
    main: ke[400],
    light: ke[300],
    dark: ke[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: ke[500],
    dark: ke[900]
  };
}
function qi(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = pe(e, Bi), i = e.primary || Li(r), a = e.secondary || zi(r), s = e.error || Ui(r), l = e.info || Wi(r), f = e.success || Fi(r), c = e.warning || Vi(r);
  function p(u) {
    const x = ft(u, Tr.text.primary) >= t ? Tr.text.primary : dt.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = ft(u, x);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${x} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return x;
  }
  const d = ({
    color: u,
    name: x,
    mainShade: E = 500,
    lightShade: R = 300,
    darkShade: T = 700
  }) => {
    if (u = z({}, u), !u.main && u[E] && (u.main = u[E]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : Re(11, x ? ` (${x})` : "", E));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${x ? ` (${x})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Re(12, x ? ` (${x})` : "", JSON.stringify(u.main)));
    return pt(u, "light", R, n), pt(u, "dark", T, n), u.contrastText || (u.contrastText = p(u.main)), u;
  }, b = {
    dark: Tr,
    light: dt
  };
  return process.env.NODE_ENV !== "production" && (b[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), ue(z({
    // A collection of common colors.
    common: z({}, je),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: c,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Di,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, b[r]), o);
}
const Yi = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Gi(e) {
  return Math.round(e * 1e5) / 1e5;
}
const mt = {
  textTransform: "uppercase"
}, ht = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ki(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = ht,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: c,
    pxToRem: p
  } = t, d = pe(t, Yi);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, y = p || ((E) => `${E / f * b}rem`), u = (E, R, T, B, h) => z({
    fontFamily: n,
    fontWeight: E,
    fontSize: y(R),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T
  }, n === ht ? {
    letterSpacing: `${Gi(B / R)}em`
  } : {}, h, c), x = {
    h1: u(i, 96, 1.167, -1.5),
    h2: u(i, 60, 1.2, -0.5),
    h3: u(a, 48, 1.167, 0),
    h4: u(a, 34, 1.235, 0.25),
    h5: u(a, 24, 1.334, 0),
    h6: u(s, 20, 1.6, 0.15),
    subtitle1: u(a, 16, 1.75, 0.15),
    subtitle2: u(s, 14, 1.57, 0.1),
    body1: u(a, 16, 1.5, 0.15),
    body2: u(a, 14, 1.43, 0.15),
    button: u(s, 14, 1.75, 0.4, mt),
    caption: u(a, 12, 1.66, 0.4),
    overline: u(a, 12, 2.66, 1, mt),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ue(z({
    htmlFontSize: f,
    pxToRem: y,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l
  }, x), d, {
    clone: !1
    // No need to clone deep
  });
}
const Hi = 0.2, Xi = 0.14, Ji = 0.12;
function L(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Hi})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Xi})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ji})`].join(",");
}
const Zi = ["none", L(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), L(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), L(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), L(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), L(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), L(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), L(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), L(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), L(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), L(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), L(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), L(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), L(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), L(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), L(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), L(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), L(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), L(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), L(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), L(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), L(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), L(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), L(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), L(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Qi = ["duration", "easing", "delay"], ea = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ra = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function yt(e) {
  return `${Math.round(e)}ms`;
}
function ta(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function na(e) {
  const r = z({}, ea, e.easing), t = z({}, ra, e.duration);
  return z({
    getAutoHeightDuration: ta,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: s = r.easeInOut,
        delay: l = 0
      } = i, f = pe(i, Qi);
      if (process.env.NODE_ENV !== "production") {
        const c = (d) => typeof d == "string", p = (d) => !isNaN(parseFloat(d));
        !c(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !c(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), c(s) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !c(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((c) => `${c} ${typeof a == "string" ? a : yt(a)} ${s} ${typeof l == "string" ? l : yt(l)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const oa = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, ia = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function aa(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = pe(e, ia);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Re(18));
  const s = qi(n), l = Lt(e);
  let f = ue(l, {
    mixins: Ei(l.breakpoints, t),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Zi.slice(),
    typography: Ki(s, i),
    transitions: na(o),
    zIndex: z({}, oa)
  });
  if (f = ue(f, a), f = r.reduce((c, p) => ue(c, p), f), process.env.NODE_ENV !== "production") {
    const c = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (d, b) => {
      let y;
      for (y in d) {
        const u = d[y];
        if (c.indexOf(y) !== -1 && Object.keys(u).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const x = Wt("", y);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${y}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${x}' syntax:`, JSON.stringify({
              root: {
                [`&.${x}`]: u
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[y] = {};
        }
      }
    };
    Object.keys(f.components).forEach((d) => {
      const b = f.components[d].styleOverrides;
      b && d.indexOf("Mui") === 0 && p(b, d);
    });
  }
  return f.unstable_sxConfig = z({}, fr, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return lr({
      sx: p,
      theme: this
    });
  }, f;
}
const sa = gi("MuiBox", ["root"]), ca = aa(), Xt = hi({
  themeId: xi,
  defaultTheme: ca,
  defaultClassName: sa.root,
  generateClassName: zt.generate
});
process.env.NODE_ENV !== "production" && (Xt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: X.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: X.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: X.oneOfType([X.arrayOf(X.oneOfType([X.func, X.object, X.bool])), X.func, X.object])
});
function ua() {
  const e = gt();
  return Jt(e.breakpoints.down("md"));
}
function pa({ children: e, transparent: r = !1, ...t }) {
  const n = ua();
  return /* @__PURE__ */ Je(
    Xt,
    {
      component: "main",
      boxShadow: r ? 0 : 2,
      bgcolor: r ? "transparent" : "background.paper",
      minHeight: n ? "100vh" : "200px",
      borderRadius: (o) => n ? "25px 25px 0 0" : o.shape.borderRadius,
      boxSizing: "content-box",
      pb: n ? 4 : 0,
      ...t,
      children: e
    }
  );
}
const ma = ({ title: e, sx: r, ...t }) => {
  const n = gt();
  return /* @__PURE__ */ Je(
    bt,
    {
      sx: {
        fontSize: {
          xs: n.typography.fontSize * 1.9,
          md: n.typography.fontSize * 2.3,
          lg: n.typography.fontSize * 2.5
        },
        fontWeight: "900",
        textAlign: "left",
        component: "h2",
        my: 0,
        mt: 1,
        color: n.palette.mode === "dark" ? n.palette.common.white : n.palette.common.black,
        ...r
      },
      ...t,
      children: e
    }
  );
};
function ha({ bgcolor: e, sx: r, children: t, ...n }) {
  return /* @__PURE__ */ Je(
    bt,
    {
      bgcolor: e || ((o) => o.palette.mode === "dark" ? "#353535" : "#F8F7F7"),
      boxShadow: "0.3px 0.8px 1.1px 0px rgba(187, 187, 187, 0.11), 0.5px 1.3px 1.8px -0.6px rgba(187, 187, 187, 0.18), 1.1px 2.7px 3.8px -1.2px rgba(187, 187, 187, 0.26)",
      border: "0.5px solid rgba(0, 0, 0, 0.30)",
      sx: r,
      py: { xs: 1, md: 2.5 },
      px: { xs: 2, md: 7 },
      textAlign: "left",
      ...n,
      children: t
    }
  );
}
export {
  pa as PageLayout,
  ha as PageSection,
  ma as PageTitle
};
