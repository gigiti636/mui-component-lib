import { jsx as se, jsxs as Ln } from "react/jsx-runtime";
import * as z from "react";
import { forwardRef as Ws, useContext as jn, createContext as In, useState as Hs, useCallback as qs, useMemo as Ks } from "react";
function tt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tt
}, Symbol.toStringTag, { value: "Module" }));
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, W.apply(null, arguments);
}
function Fn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Js = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Zs = /* @__PURE__ */ Fn(
  function(e) {
    return Js.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Qs = !1;
function Xs(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function eo(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var to = /* @__PURE__ */ function() {
  function e(n) {
    var r = this;
    this._insertTag = function(s) {
      var o;
      r.tags.length === 0 ? r.insertionPoint ? o = r.insertionPoint.nextSibling : r.prepend ? o = r.container.firstChild : o = r.before : o = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(s, o), r.tags.push(s);
    }, this.isSpeedy = n.speedy === void 0 ? !Qs : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(eo(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var o = Xs(s);
      try {
        o.insertRule(r, o.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var s;
      return (s = r.parentNode) == null ? void 0 : s.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), me = "-ms-", bt = "-moz-", q = "-webkit-", Yn = "comm", gr = "rule", yr = "decl", ro = "@import", Un = "@keyframes", no = "@layer", so = Math.abs, Ct = String.fromCharCode, oo = Object.assign;
function io(e, t) {
  return he(e, 0) ^ 45 ? (((t << 2 ^ he(e, 0)) << 2 ^ he(e, 1)) << 2 ^ he(e, 2)) << 2 ^ he(e, 3) : 0;
}
function zn(e) {
  return e.trim();
}
function ao(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, n) {
  return e.replace(t, n);
}
function ur(e, t) {
  return e.indexOf(t);
}
function he(e, t) {
  return e.charCodeAt(t) | 0;
}
function rt(e, t, n) {
  return e.slice(t, n);
}
function Te(e) {
  return e.length;
}
function br(e) {
  return e.length;
}
function dt(e, t) {
  return t.push(e), e;
}
function uo(e, t) {
  return e.map(t).join("");
}
var $t = 1, We = 1, Vn = 0, ye = 0, fe = 0, He = "";
function kt(e, t, n, r, s, o, i) {
  return { value: e, root: t, parent: n, type: r, props: s, children: o, line: $t, column: We, length: i, return: "" };
}
function Ke(e, t) {
  return oo(kt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function co() {
  return fe;
}
function lo() {
  return fe = ye > 0 ? he(He, --ye) : 0, We--, fe === 10 && (We = 1, $t--), fe;
}
function ve() {
  return fe = ye < Vn ? he(He, ye++) : 0, We++, fe === 10 && (We = 1, $t++), fe;
}
function $e() {
  return he(He, ye);
}
function mt() {
  return ye;
}
function ct(e, t) {
  return rt(He, e, t);
}
function nt(e) {
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
function Bn(e) {
  return $t = We = 1, Vn = Te(He = e), ye = 0, [];
}
function Wn(e) {
  return He = "", e;
}
function gt(e) {
  return zn(ct(ye - 1, cr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fo(e) {
  for (; (fe = $e()) && fe < 33; )
    ve();
  return nt(e) > 2 || nt(fe) > 3 ? "" : " ";
}
function po(e, t) {
  for (; --t && ve() && !(fe < 48 || fe > 102 || fe > 57 && fe < 65 || fe > 70 && fe < 97); )
    ;
  return ct(e, mt() + (t < 6 && $e() == 32 && ve() == 32));
}
function cr(e) {
  for (; ve(); )
    switch (fe) {
      case e:
        return ye;
      case 34:
      case 39:
        e !== 34 && e !== 39 && cr(fe);
        break;
      case 40:
        e === 41 && cr(e);
        break;
      case 92:
        ve();
        break;
    }
  return ye;
}
function ho(e, t) {
  for (; ve() && e + fe !== 57; )
    if (e + fe === 84 && $e() === 47)
      break;
  return "/*" + ct(t, ye - 1) + "*" + Ct(e === 47 ? e : ve());
}
function mo(e) {
  for (; !nt($e()); )
    ve();
  return ct(e, ye);
}
function go(e) {
  return Wn(yt("", null, null, null, [""], e = Bn(e), 0, [0], e));
}
function yt(e, t, n, r, s, o, i, a, u) {
  for (var c = 0, l = 0, d = i, f = 0, g = 0, b = 0, h = 1, y = 1, S = 1, $ = 0, O = "", C = s, p = o, L = r, D = O; y; )
    switch (b = $, $ = ve()) {
      case 40:
        if (b != 108 && he(D, d - 1) == 58) {
          ur(D += K(gt($), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        D += gt($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        D += fo(b);
        break;
      case 92:
        D += po(mt() - 1, 7);
        continue;
      case 47:
        switch ($e()) {
          case 42:
          case 47:
            dt(yo(ho(ve(), mt()), t, n), u);
            break;
          default:
            D += "/";
        }
        break;
      case 123 * h:
        a[c++] = Te(D) * S;
      case 125 * h:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            y = 0;
          case 59 + l:
            S == -1 && (D = K(D, /\f/g, "")), g > 0 && Te(D) - d && dt(g > 32 ? Rr(D + ";", r, n, d - 1) : Rr(K(D, " ", "") + ";", r, n, d - 2), u);
            break;
          case 59:
            D += ";";
          default:
            if (dt(L = Ar(D, t, n, c, l, s, a, O, C = [], p = [], d), o), $ === 123)
              if (l === 0)
                yt(D, t, L, L, C, o, d, a, p);
              else
                switch (f === 99 && he(D, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    yt(e, L, L, r && dt(Ar(e, L, L, 0, 0, s, a, O, s, C = [], d), p), s, p, d, a, r ? C : p);
                    break;
                  default:
                    yt(D, L, L, L, [""], p, 0, a, p);
                }
        }
        c = l = g = 0, h = S = 1, O = D = "", d = i;
        break;
      case 58:
        d = 1 + Te(D), g = b;
      default:
        if (h < 1) {
          if ($ == 123)
            --h;
          else if ($ == 125 && h++ == 0 && lo() == 125)
            continue;
        }
        switch (D += Ct($), $ * h) {
          case 38:
            S = l > 0 ? 1 : (D += "\f", -1);
            break;
          case 44:
            a[c++] = (Te(D) - 1) * S, S = 1;
            break;
          case 64:
            $e() === 45 && (D += gt(ve())), f = $e(), l = d = Te(O = D += mo(mt())), $++;
            break;
          case 45:
            b === 45 && Te(D) == 2 && (h = 0);
        }
    }
  return o;
}
function Ar(e, t, n, r, s, o, i, a, u, c, l) {
  for (var d = s - 1, f = s === 0 ? o : [""], g = br(f), b = 0, h = 0, y = 0; b < r; ++b)
    for (var S = 0, $ = rt(e, d + 1, d = so(h = i[b])), O = e; S < g; ++S)
      (O = zn(h > 0 ? f[S] + " " + $ : K($, /&\f/g, f[S]))) && (u[y++] = O);
  return kt(e, t, n, s === 0 ? gr : a, u, c, l);
}
function yo(e, t, n) {
  return kt(e, t, n, Yn, Ct(co()), rt(e, 2, -2), 0);
}
function Rr(e, t, n, r) {
  return kt(e, t, n, yr, rt(e, 0, r), rt(e, r + 1, -1), r);
}
function Ve(e, t) {
  for (var n = "", r = br(e), s = 0; s < r; s++)
    n += t(e[s], s, e, t) || "";
  return n;
}
function bo(e, t, n, r) {
  switch (e.type) {
    case no:
      if (e.children.length)
        break;
    case ro:
    case yr:
      return e.return = e.return || e.value;
    case Yn:
      return "";
    case Un:
      return e.return = e.value + "{" + Ve(e.children, r) + "}";
    case gr:
      e.value = e.props.join(",");
  }
  return Te(n = Ve(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function vo(e) {
  var t = br(e);
  return function(n, r, s, o) {
    for (var i = "", a = 0; a < t; a++)
      i += e[a](n, r, s, o) || "";
    return i;
  };
}
function xo(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var So = function(t, n, r) {
  for (var s = 0, o = 0; s = o, o = $e(), s === 38 && o === 12 && (n[r] = 1), !nt(o); )
    ve();
  return ct(t, ye);
}, wo = function(t, n) {
  var r = -1, s = 44;
  do
    switch (nt(s)) {
      case 0:
        s === 38 && $e() === 12 && (n[r] = 1), t[r] += So(ye - 1, n, r);
        break;
      case 2:
        t[r] += gt(s);
        break;
      case 4:
        if (s === 44) {
          t[++r] = $e() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      default:
        t[r] += Ct(s);
    }
  while (s = ve());
  return t;
}, _o = function(t, n) {
  return Wn(wo(Bn(t), n));
}, Dr = /* @__PURE__ */ new WeakMap(), Oo = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, s = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Dr.get(r)) && !s) {
      Dr.set(t, !0);
      for (var o = [], i = _o(n, o), a = r.props, u = 0, c = 0; u < i.length; u++)
        for (var l = 0; l < a.length; l++, c++)
          t.props[c] = o[u] ? i[u].replace(/&\f/g, a[l]) : a[l] + " " + i[u];
    }
  }
}, To = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Hn(e, t) {
  switch (io(e, t)) {
    case 5103:
      return q + "print-" + e + e;
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
      return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + bt + e + me + e + e;
    case 6828:
    case 4268:
      return q + e + me + e + e;
    case 6165:
      return q + e + me + "flex-" + e + e;
    case 5187:
      return q + e + K(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return q + e + me + "flex-item-" + K(e, /flex-|-self/, "") + e;
    case 4675:
      return q + e + me + "flex-line-pack" + K(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return q + e + me + K(e, "shrink", "negative") + e;
    case 5292:
      return q + e + me + K(e, "basis", "preferred-size") + e;
    case 6060:
      return q + "box-" + K(e, "-grow", "") + q + e + me + K(e, "grow", "positive") + e;
    case 4554:
      return q + K(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
      return K(K(K(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return K(K(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, q + "$1$2") + e;
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
      if (Te(e) - 1 - t > 6)
        switch (he(e, t + 1)) {
          case 109:
            if (he(e, t + 4) !== 45)
              break;
          case 102:
            return K(e, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + bt + (he(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ur(e, "stretch") ? Hn(K(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (he(e, t + 1) !== 115)
        break;
    case 6444:
      switch (he(e, Te(e) - 3 - (~ur(e, "!important") && 10))) {
        case 107:
          return K(e, ":", ":" + q) + e;
        case 101:
          return K(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + q + (he(e, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + me + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (he(e, t + 11)) {
        case 114:
          return q + e + me + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return q + e + me + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return q + e + me + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return q + e + me + e + e;
  }
  return e;
}
var Eo = function(t, n, r, s) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case yr:
        t.return = Hn(t.value, t.length);
        break;
      case Un:
        return Ve([Ke(t, {
          value: K(t.value, "@", "@" + q)
        })], s);
      case gr:
        if (t.length)
          return uo(t.props, function(o) {
            switch (ao(o, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ve([Ke(t, {
                  props: [K(o, /:(read-\w+)/, ":" + bt + "$1")]
                })], s);
              case "::placeholder":
                return Ve([Ke(t, {
                  props: [K(o, /:(plac\w+)/, ":" + q + "input-$1")]
                }), Ke(t, {
                  props: [K(o, /:(plac\w+)/, ":" + bt + "$1")]
                }), Ke(t, {
                  props: [K(o, /:(plac\w+)/, me + "input-$1")]
                })], s);
            }
            return "";
          });
    }
}, Co = [Eo], qn = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var y = h.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var s = t.stylisPlugins || Co, o = {}, i, a = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var y = h.getAttribute("data-emotion").split(" "), S = 1; S < y.length; S++)
        o[y[S]] = !0;
      a.push(h);
    }
  );
  var u, c = [Oo, To];
  {
    var l, d = [bo, xo(function(h) {
      l.insert(h);
    })], f = vo(c.concat(s, d)), g = function(y) {
      return Ve(go(y), f);
    };
    u = function(y, S, $, O) {
      l = $, g(y ? y + "{" + S.styles + "}" : S.styles), O && (b.inserted[S.name] = !0);
    };
  }
  var b = {
    key: n,
    sheet: new to({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: o,
    registered: {},
    insert: u
  };
  return b.sheet.hydrate(a), b;
}, Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function De(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Kn(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var lr = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function $o() {
  if (Nr)
    return G;
  Nr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function O(p) {
    if (typeof p == "object" && p !== null) {
      var L = p.$$typeof;
      switch (L) {
        case t:
          switch (p = p.type, p) {
            case u:
            case c:
            case r:
            case o:
            case s:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case b:
                case g:
                case i:
                  return p;
                default:
                  return L;
              }
          }
        case n:
          return L;
      }
    }
  }
  function C(p) {
    return O(p) === c;
  }
  return G.AsyncMode = u, G.ConcurrentMode = c, G.ContextConsumer = a, G.ContextProvider = i, G.Element = t, G.ForwardRef = l, G.Fragment = r, G.Lazy = b, G.Memo = g, G.Portal = n, G.Profiler = o, G.StrictMode = s, G.Suspense = d, G.isAsyncMode = function(p) {
    return C(p) || O(p) === u;
  }, G.isConcurrentMode = C, G.isContextConsumer = function(p) {
    return O(p) === a;
  }, G.isContextProvider = function(p) {
    return O(p) === i;
  }, G.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, G.isForwardRef = function(p) {
    return O(p) === l;
  }, G.isFragment = function(p) {
    return O(p) === r;
  }, G.isLazy = function(p) {
    return O(p) === b;
  }, G.isMemo = function(p) {
    return O(p) === g;
  }, G.isPortal = function(p) {
    return O(p) === n;
  }, G.isProfiler = function(p) {
    return O(p) === o;
  }, G.isStrictMode = function(p) {
    return O(p) === s;
  }, G.isSuspense = function(p) {
    return O(p) === d;
  }, G.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === c || p === o || p === s || p === d || p === f || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === g || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || p.$$typeof === y || p.$$typeof === S || p.$$typeof === $ || p.$$typeof === h);
  }, G.typeOf = O, G;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lr;
function ko() {
  return Lr || (Lr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function O(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === r || v === c || v === o || v === s || v === d || v === f || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === g || v.$$typeof === i || v.$$typeof === a || v.$$typeof === l || v.$$typeof === y || v.$$typeof === S || v.$$typeof === $ || v.$$typeof === h);
    }
    function C(v) {
      if (typeof v == "object" && v !== null) {
        var ne = v.$$typeof;
        switch (ne) {
          case t:
            var ge = v.type;
            switch (ge) {
              case u:
              case c:
              case r:
              case o:
              case s:
              case d:
                return ge;
              default:
                var Oe = ge && ge.$$typeof;
                switch (Oe) {
                  case a:
                  case l:
                  case b:
                  case g:
                  case i:
                    return Oe;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var p = u, L = c, D = a, te = i, ee = t, H = l, I = r, oe = b, ie = g, P = n, E = o, w = s, k = d, _ = !1;
    function M(v) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(v) || C(v) === u;
    }
    function m(v) {
      return C(v) === c;
    }
    function x(v) {
      return C(v) === a;
    }
    function A(v) {
      return C(v) === i;
    }
    function R(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function N(v) {
      return C(v) === l;
    }
    function F(v) {
      return C(v) === r;
    }
    function Y(v) {
      return C(v) === b;
    }
    function U(v) {
      return C(v) === g;
    }
    function V(v) {
      return C(v) === n;
    }
    function B(v) {
      return C(v) === o;
    }
    function j(v) {
      return C(v) === s;
    }
    function X(v) {
      return C(v) === d;
    }
    J.AsyncMode = p, J.ConcurrentMode = L, J.ContextConsumer = D, J.ContextProvider = te, J.Element = ee, J.ForwardRef = H, J.Fragment = I, J.Lazy = oe, J.Memo = ie, J.Portal = P, J.Profiler = E, J.StrictMode = w, J.Suspense = k, J.isAsyncMode = M, J.isConcurrentMode = m, J.isContextConsumer = x, J.isContextProvider = A, J.isElement = R, J.isForwardRef = N, J.isFragment = F, J.isLazy = Y, J.isMemo = U, J.isPortal = V, J.isProfiler = B, J.isStrictMode = j, J.isSuspense = X, J.isValidElementType = O, J.typeOf = C;
  }()), J;
}
process.env.NODE_ENV === "production" ? lr.exports = $o() : lr.exports = ko();
var Po = lr.exports, Gn = Po, Mo = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ao = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Jn = {};
Jn[Gn.ForwardRef] = Mo;
Jn[Gn.Memo] = Ao;
var Ro = !0;
function vr(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(s) {
    e[s] !== void 0 ? t.push(e[s] + ";") : r += s + " ";
  }), r;
}
var Pt = function(t, n, r) {
  var s = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ro === !1) && t.registered[s] === void 0 && (t.registered[s] = n.styles);
}, Mt = function(t, n, r) {
  Pt(t, n, r);
  var s = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var o = n;
    do
      t.insert(n === o ? "." + s : "", o, t.sheet, !0), o = o.next;
    while (o !== void 0);
  }
};
function Do(e) {
  for (var t = 0, n, r = 0, s = e.length; s >= 4; ++r, s -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var No = {
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
}, Lo = !1, jo = /[A-Z]|^ms/g, Io = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zn = function(t) {
  return t.charCodeAt(1) === 45;
}, jr = function(t) {
  return t != null && typeof t != "boolean";
}, Gt = /* @__PURE__ */ Fn(function(e) {
  return Zn(e) ? e : e.replace(jo, "-$&").toLowerCase();
}), Ir = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Io, function(r, s, o) {
          return Ee = {
            name: s,
            styles: o,
            next: Ee
          }, s;
        });
  }
  return No[t] !== 1 && !Zn(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
}, Fo = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function st(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var s = n;
      if (s.anim === 1)
        return Ee = {
          name: s.name,
          styles: s.styles,
          next: Ee
        }, s.name;
      var o = n;
      if (o.styles !== void 0) {
        var i = o.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Ee = {
              name: i.name,
              styles: i.styles,
              next: Ee
            }, i = i.next;
        var a = o.styles + ";";
        return a;
      }
      return Yo(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var u = Ee, c = n(e);
        return Ee = u, st(e, t, c);
      }
      break;
    }
  }
  var l = n;
  if (t == null)
    return l;
  var d = t[l];
  return d !== void 0 ? d : l;
}
function Yo(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var s = 0; s < n.length; s++)
      r += st(e, t, n[s]) + ";";
  else
    for (var o in n) {
      var i = n[o];
      if (typeof i != "object") {
        var a = i;
        t != null && t[a] !== void 0 ? r += o + "{" + t[a] + "}" : jr(a) && (r += Gt(o) + ":" + Ir(o, a) + ";");
      } else {
        if (o === "NO_COMPONENT_SELECTOR" && Lo)
          throw new Error(Fo);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var u = 0; u < i.length; u++)
            jr(i[u]) && (r += Gt(o) + ":" + Ir(o, i[u]) + ";");
        else {
          var c = st(e, t, i);
          switch (o) {
            case "animation":
            case "animationName": {
              r += Gt(o) + ":" + c + ";";
              break;
            }
            default:
              r += o + "{" + c + "}";
          }
        }
      }
    }
  return r;
}
var Fr = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ee;
function ot(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, s = "";
  Ee = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0)
    r = !1, s += st(n, t, o);
  else {
    var i = o;
    s += i[0];
  }
  for (var a = 1; a < e.length; a++)
    if (s += st(n, t, e[a]), r) {
      var u = o;
      s += u[a];
    }
  Fr.lastIndex = 0;
  for (var c = "", l; (l = Fr.exec(s)) !== null; )
    c += "-" + l[1];
  var d = Do(s) + c;
  return {
    name: d,
    styles: s,
    next: Ee
  };
}
var Uo = function(t) {
  return t();
}, Qn = z.useInsertionEffect ? z.useInsertionEffect : !1, xr = Qn || Uo, Yr = Qn || z.useLayoutEffect, zo = {}.hasOwnProperty, Sr = /* @__PURE__ */ z.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ qn({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Sr.displayName = "EmotionCacheContext");
var Vo = Sr.Provider, At = function(t) {
  return /* @__PURE__ */ Ws(function(n, r) {
    var s = jn(Sr);
    return t(n, s, r);
  });
}, Ne = /* @__PURE__ */ z.createContext({});
process.env.NODE_ENV !== "production" && (Ne.displayName = "EmotionThemeContext");
var Ur = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", zr = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Bo = function(t) {
  var n = t.cache, r = t.serialized, s = t.isStringTag;
  return Pt(n, r, s), xr(function() {
    return Mt(n, r, s);
  }), null;
}, Wo = /* @__PURE__ */ At(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var s = e[Ur], o = [r], i = "";
  typeof e.className == "string" ? i = vr(t.registered, o, e.className) : e.className != null && (i = e.className + " ");
  var a = ot(o, void 0, z.useContext(Ne));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[zr];
    u && (a = ot([a, "label:" + u + ";"]));
  }
  i += t.key + "-" + a.name;
  var c = {};
  for (var l in e)
    zo.call(e, l) && l !== "css" && l !== Ur && (process.env.NODE_ENV === "production" || l !== zr) && (c[l] = e[l]);
  return c.ref = n, c.className = i, /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(Bo, {
    cache: t,
    serialized: a,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ z.createElement(s, c));
});
process.env.NODE_ENV !== "production" && (Wo.displayName = "EmotionCssPropInternal");
var Jt = { exports: {} }, Vr;
function Ho() {
  return Vr || (Vr = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(n) {
        for (var r = 1; r < arguments.length; r++) {
          var s = arguments[r];
          for (var o in s)
            ({}).hasOwnProperty.call(s, o) && (n[o] = s[o]);
        }
        return n;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Jt)), Jt.exports;
}
Ho();
var qo = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Br = !1, Xn = /* @__PURE__ */ At(function(e, t) {
  process.env.NODE_ENV !== "production" && !Br && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Br = !0);
  var n = e.styles, r = ot([n], void 0, z.useContext(Ne)), s = z.useRef();
  return Yr(function() {
    var o = t.key + "-global", i = new t.sheet.constructor({
      key: o,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + o + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", o), i.hydrate([u])), s.current = [i, a], function() {
      i.flush();
    };
  }, [t]), Yr(function() {
    var o = s.current, i = o[0], a = o[1];
    if (a) {
      o[1] = !1;
      return;
    }
    if (r.next !== void 0 && Mt(t, r.next, !0), i.tags.length) {
      var u = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = u, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (Xn.displayName = "EmotionGlobal");
var Ko = function e(t) {
  for (var n = t.length, r = 0, s = ""; r < n; r++) {
    var o = t[r];
    if (o != null) {
      var i = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            i = e(o);
          else {
            process.env.NODE_ENV !== "production" && o.styles !== void 0 && o.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var a in o)
              o[a] && a && (i && (i += " "), i += a);
          }
          break;
        }
        default:
          i = o;
      }
      i && (s && (s += " "), s += i);
    }
  }
  return s;
};
function Go(e, t, n) {
  var r = [], s = vr(e, r, n);
  return r.length < 2 ? n : s + t(r);
}
var Jo = function(t) {
  var n = t.cache, r = t.serializedArr;
  return xr(function() {
    for (var s = 0; s < r.length; s++)
      Mt(n, r[s], !1);
  }), null;
}, Zo = /* @__PURE__ */ At(function(e, t) {
  var n = !1, r = [], s = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, l = new Array(c), d = 0; d < c; d++)
      l[d] = arguments[d];
    var f = ot(l, t.registered);
    return r.push(f), Pt(t, f, !1), t.key + "-" + f.name;
  }, o = function() {
    if (n && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, l = new Array(c), d = 0; d < c; d++)
      l[d] = arguments[d];
    return Go(t.registered, s, Ko(l));
  }, i = {
    css: s,
    cx: o,
    theme: z.useContext(Ne)
  }, a = e.children(i);
  return n = !0, /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(Jo, {
    cache: t,
    serializedArr: r
  }), a);
});
process.env.NODE_ENV !== "production" && (Zo.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Wr = !0, Qo = typeof jest < "u" || typeof vi < "u";
  if (Wr && !Qo) {
    var Hr = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Wr ? window : global
    ), qr = "__EMOTION_REACT_" + qo.version.split(".")[0] + "__";
    Hr[qr] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Hr[qr] = !0;
  }
}
var Xo = Zs, ei = function(t) {
  return t !== "theme";
}, Kr = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Xo : ei;
}, Gr = function(t, n, r) {
  var s;
  if (n) {
    var o = n.shouldForwardProp;
    s = t.__emotion_forwardProp && o ? function(i) {
      return t.__emotion_forwardProp(i) && o(i);
    } : o;
  }
  return typeof s != "function" && r && (s = t.__emotion_forwardProp), s;
}, Jr = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ti = function(t) {
  var n = t.cache, r = t.serialized, s = t.isStringTag;
  return Pt(n, r, s), xr(function() {
    return Mt(n, r, s);
  }), null;
}, ri = function e(t, n) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, s = r && t.__emotion_base || t, o, i;
  n !== void 0 && (o = n.label, i = n.target);
  var a = Gr(t, n, r), u = a || Kr(s), c = !u("as");
  return function() {
    var l = arguments, d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (o !== void 0 && d.push("label:" + o + ";"), l[0] == null || l[0].raw === void 0)
      d.push.apply(d, l);
    else {
      process.env.NODE_ENV !== "production" && l[0][0] === void 0 && console.error(Jr), d.push(l[0][0]);
      for (var f = l.length, g = 1; g < f; g++)
        process.env.NODE_ENV !== "production" && l[0][g] === void 0 && console.error(Jr), d.push(l[g], l[0][g]);
    }
    var b = At(function(h, y, S) {
      var $ = c && h.as || s, O = "", C = [], p = h;
      if (h.theme == null) {
        p = {};
        for (var L in h)
          p[L] = h[L];
        p.theme = z.useContext(Ne);
      }
      typeof h.className == "string" ? O = vr(y.registered, C, h.className) : h.className != null && (O = h.className + " ");
      var D = ot(d.concat(C), y.registered, p);
      O += y.key + "-" + D.name, i !== void 0 && (O += " " + i);
      var te = c && a === void 0 ? Kr($) : u, ee = {};
      for (var H in h)
        c && H === "as" || // $FlowFixMe
        te(H) && (ee[H] = h[H]);
      return ee.className = O, ee.ref = S, /* @__PURE__ */ z.createElement(z.Fragment, null, /* @__PURE__ */ z.createElement(ti, {
        cache: y,
        serialized: D,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ z.createElement($, ee));
    });
    return b.displayName = o !== void 0 ? o : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = s, b.__emotion_styles = d, b.__emotion_forwardProp = a, Object.defineProperty(b, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), b.withComponent = function(h, y) {
      return e(h, W({}, n, y, {
        shouldForwardProp: Gr(b, y, !0)
      })).apply(void 0, d);
    }, b;
  };
}, ni = [
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
], fr = ri.bind();
ni.forEach(function(e) {
  fr[e] = fr(e);
});
var dr = { exports: {} }, pt = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function si() {
  if (Zr)
    return Z;
  Zr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function O(p) {
    if (typeof p == "object" && p !== null) {
      var L = p.$$typeof;
      switch (L) {
        case t:
          switch (p = p.type, p) {
            case u:
            case c:
            case r:
            case o:
            case s:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case a:
                case l:
                case b:
                case g:
                case i:
                  return p;
                default:
                  return L;
              }
          }
        case n:
          return L;
      }
    }
  }
  function C(p) {
    return O(p) === c;
  }
  return Z.AsyncMode = u, Z.ConcurrentMode = c, Z.ContextConsumer = a, Z.ContextProvider = i, Z.Element = t, Z.ForwardRef = l, Z.Fragment = r, Z.Lazy = b, Z.Memo = g, Z.Portal = n, Z.Profiler = o, Z.StrictMode = s, Z.Suspense = d, Z.isAsyncMode = function(p) {
    return C(p) || O(p) === u;
  }, Z.isConcurrentMode = C, Z.isContextConsumer = function(p) {
    return O(p) === a;
  }, Z.isContextProvider = function(p) {
    return O(p) === i;
  }, Z.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, Z.isForwardRef = function(p) {
    return O(p) === l;
  }, Z.isFragment = function(p) {
    return O(p) === r;
  }, Z.isLazy = function(p) {
    return O(p) === b;
  }, Z.isMemo = function(p) {
    return O(p) === g;
  }, Z.isPortal = function(p) {
    return O(p) === n;
  }, Z.isProfiler = function(p) {
    return O(p) === o;
  }, Z.isStrictMode = function(p) {
    return O(p) === s;
  }, Z.isSuspense = function(p) {
    return O(p) === d;
  }, Z.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === c || p === o || p === s || p === d || p === f || typeof p == "object" && p !== null && (p.$$typeof === b || p.$$typeof === g || p.$$typeof === i || p.$$typeof === a || p.$$typeof === l || p.$$typeof === y || p.$$typeof === S || p.$$typeof === $ || p.$$typeof === h);
  }, Z.typeOf = O, Z;
}
var Q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function oi() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function O(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === r || v === c || v === o || v === s || v === d || v === f || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === g || v.$$typeof === i || v.$$typeof === a || v.$$typeof === l || v.$$typeof === y || v.$$typeof === S || v.$$typeof === $ || v.$$typeof === h);
    }
    function C(v) {
      if (typeof v == "object" && v !== null) {
        var ne = v.$$typeof;
        switch (ne) {
          case t:
            var ge = v.type;
            switch (ge) {
              case u:
              case c:
              case r:
              case o:
              case s:
              case d:
                return ge;
              default:
                var Oe = ge && ge.$$typeof;
                switch (Oe) {
                  case a:
                  case l:
                  case b:
                  case g:
                  case i:
                    return Oe;
                  default:
                    return ne;
                }
            }
          case n:
            return ne;
        }
      }
    }
    var p = u, L = c, D = a, te = i, ee = t, H = l, I = r, oe = b, ie = g, P = n, E = o, w = s, k = d, _ = !1;
    function M(v) {
      return _ || (_ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(v) || C(v) === u;
    }
    function m(v) {
      return C(v) === c;
    }
    function x(v) {
      return C(v) === a;
    }
    function A(v) {
      return C(v) === i;
    }
    function R(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function N(v) {
      return C(v) === l;
    }
    function F(v) {
      return C(v) === r;
    }
    function Y(v) {
      return C(v) === b;
    }
    function U(v) {
      return C(v) === g;
    }
    function V(v) {
      return C(v) === n;
    }
    function B(v) {
      return C(v) === o;
    }
    function j(v) {
      return C(v) === s;
    }
    function X(v) {
      return C(v) === d;
    }
    Q.AsyncMode = p, Q.ConcurrentMode = L, Q.ContextConsumer = D, Q.ContextProvider = te, Q.Element = ee, Q.ForwardRef = H, Q.Fragment = I, Q.Lazy = oe, Q.Memo = ie, Q.Portal = P, Q.Profiler = E, Q.StrictMode = w, Q.Suspense = k, Q.isAsyncMode = M, Q.isConcurrentMode = m, Q.isContextConsumer = x, Q.isContextProvider = A, Q.isElement = R, Q.isForwardRef = N, Q.isFragment = F, Q.isLazy = Y, Q.isMemo = U, Q.isPortal = V, Q.isProfiler = B, Q.isStrictMode = j, Q.isSuspense = X, Q.isValidElementType = O, Q.typeOf = C;
  }()), Q;
}
var Xr;
function es() {
  return Xr || (Xr = 1, process.env.NODE_ENV === "production" ? pt.exports = si() : pt.exports = oi()), pt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zt, en;
function ii() {
  if (en)
    return Zt;
  en = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var i = {}, a = 0; a < 10; a++)
        i["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(i).map(function(l) {
        return i[l];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        c[l] = l;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Zt = s() ? Object.assign : function(o, i) {
    for (var a, u = r(o), c, l = 1; l < arguments.length; l++) {
      a = Object(arguments[l]);
      for (var d in a)
        t.call(a, d) && (u[d] = a[d]);
      if (e) {
        c = e(a);
        for (var f = 0; f < c.length; f++)
          n.call(a, c[f]) && (u[c[f]] = a[c[f]]);
      }
    }
    return u;
  }, Zt;
}
var Qt, tn;
function wr() {
  if (tn)
    return Qt;
  tn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Qt = e, Qt;
}
var Xt, rn;
function ts() {
  return rn || (rn = 1, Xt = Function.call.bind(Object.prototype.hasOwnProperty)), Xt;
}
var er, nn;
function ai() {
  if (nn)
    return er;
  nn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = wr(), n = {}, r = ts();
    e = function(o) {
      var i = "Warning: " + o;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function s(o, i, a, u, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in o)
        if (r(o, l)) {
          var d;
          try {
            if (typeof o[l] != "function") {
              var f = Error(
                (u || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = o[l](i, l, u, a, null, t);
          } catch (b) {
            d = b;
          }
          if (d && !(d instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var g = c ? c() : "";
            e(
              "Failed " + a + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, er = s, er;
}
var tr, sn;
function ui() {
  if (sn)
    return tr;
  sn = 1;
  var e = es(), t = ii(), n = wr(), r = ts(), s = ai(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return tr = function(a, u) {
    var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function d(m) {
      var x = m && (c && m[c] || m[l]);
      if (typeof x == "function")
        return x;
    }
    var f = "<<anonymous>>", g = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: $(),
      arrayOf: O,
      element: C(),
      elementType: p(),
      instanceOf: L,
      node: H(),
      objectOf: te,
      oneOf: D,
      oneOfType: ee,
      shape: oe,
      exact: ie
    };
    function b(m, x) {
      return m === x ? m !== 0 || 1 / m === 1 / x : m !== m && x !== x;
    }
    function h(m, x) {
      this.message = m, this.data = x && typeof x == "object" ? x : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function y(m) {
      if (process.env.NODE_ENV !== "production")
        var x = {}, A = 0;
      function R(F, Y, U, V, B, j, X) {
        if (V = V || f, j = j || U, X !== n) {
          if (u) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = V + ":" + U;
            !x[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            A < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + V + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), x[ne] = !0, A++);
          }
        }
        return Y[U] == null ? F ? Y[U] === null ? new h("The " + B + " `" + j + "` is marked as required " + ("in `" + V + "`, but its value is `null`.")) : new h("The " + B + " `" + j + "` is marked as required in " + ("`" + V + "`, but its value is `undefined`.")) : null : m(Y, U, V, B, j);
      }
      var N = R.bind(null, !1);
      return N.isRequired = R.bind(null, !0), N;
    }
    function S(m) {
      function x(A, R, N, F, Y, U) {
        var V = A[R], B = w(V);
        if (B !== m) {
          var j = k(V);
          return new h(
            "Invalid " + F + " `" + Y + "` of type " + ("`" + j + "` supplied to `" + N + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return y(x);
    }
    function $() {
      return y(i);
    }
    function O(m) {
      function x(A, R, N, F, Y) {
        if (typeof m != "function")
          return new h("Property `" + Y + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var U = A[R];
        if (!Array.isArray(U)) {
          var V = w(U);
          return new h("Invalid " + F + " `" + Y + "` of type " + ("`" + V + "` supplied to `" + N + "`, expected an array."));
        }
        for (var B = 0; B < U.length; B++) {
          var j = m(U, B, N, F, Y + "[" + B + "]", n);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return y(x);
    }
    function C() {
      function m(x, A, R, N, F) {
        var Y = x[A];
        if (!a(Y)) {
          var U = w(Y);
          return new h("Invalid " + N + " `" + F + "` of type " + ("`" + U + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(m);
    }
    function p() {
      function m(x, A, R, N, F) {
        var Y = x[A];
        if (!e.isValidElementType(Y)) {
          var U = w(Y);
          return new h("Invalid " + N + " `" + F + "` of type " + ("`" + U + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(m);
    }
    function L(m) {
      function x(A, R, N, F, Y) {
        if (!(A[R] instanceof m)) {
          var U = m.name || f, V = M(A[R]);
          return new h("Invalid " + F + " `" + Y + "` of type " + ("`" + V + "` supplied to `" + N + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return y(x);
    }
    function D(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), i;
      function x(A, R, N, F, Y) {
        for (var U = A[R], V = 0; V < m.length; V++)
          if (b(U, m[V]))
            return null;
        var B = JSON.stringify(m, function(X, v) {
          var ne = k(v);
          return ne === "symbol" ? String(v) : v;
        });
        return new h("Invalid " + F + " `" + Y + "` of value `" + String(U) + "` " + ("supplied to `" + N + "`, expected one of " + B + "."));
      }
      return y(x);
    }
    function te(m) {
      function x(A, R, N, F, Y) {
        if (typeof m != "function")
          return new h("Property `" + Y + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var U = A[R], V = w(U);
        if (V !== "object")
          return new h("Invalid " + F + " `" + Y + "` of type " + ("`" + V + "` supplied to `" + N + "`, expected an object."));
        for (var B in U)
          if (r(U, B)) {
            var j = m(U, B, N, F, Y + "." + B, n);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return y(x);
    }
    function ee(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var x = 0; x < m.length; x++) {
        var A = m[x];
        if (typeof A != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _(A) + " at index " + x + "."
          ), i;
      }
      function R(N, F, Y, U, V) {
        for (var B = [], j = 0; j < m.length; j++) {
          var X = m[j], v = X(N, F, Y, U, V, n);
          if (v == null)
            return null;
          v.data && r(v.data, "expectedType") && B.push(v.data.expectedType);
        }
        var ne = B.length > 0 ? ", expected one of type [" + B.join(", ") + "]" : "";
        return new h("Invalid " + U + " `" + V + "` supplied to " + ("`" + Y + "`" + ne + "."));
      }
      return y(R);
    }
    function H() {
      function m(x, A, R, N, F) {
        return P(x[A]) ? null : new h("Invalid " + N + " `" + F + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return y(m);
    }
    function I(m, x, A, R, N) {
      return new h(
        (m || "React class") + ": " + x + " type `" + A + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function oe(m) {
      function x(A, R, N, F, Y) {
        var U = A[R], V = w(U);
        if (V !== "object")
          return new h("Invalid " + F + " `" + Y + "` of type `" + V + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var B in m) {
          var j = m[B];
          if (typeof j != "function")
            return I(N, F, Y, B, k(j));
          var X = j(U, B, N, F, Y + "." + B, n);
          if (X)
            return X;
        }
        return null;
      }
      return y(x);
    }
    function ie(m) {
      function x(A, R, N, F, Y) {
        var U = A[R], V = w(U);
        if (V !== "object")
          return new h("Invalid " + F + " `" + Y + "` of type `" + V + "` " + ("supplied to `" + N + "`, expected `object`."));
        var B = t({}, A[R], m);
        for (var j in B) {
          var X = m[j];
          if (r(m, j) && typeof X != "function")
            return I(N, F, Y, j, k(X));
          if (!X)
            return new h(
              "Invalid " + F + " `" + Y + "` key `" + j + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(A[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var v = X(U, j, N, F, Y + "." + j, n);
          if (v)
            return v;
        }
        return null;
      }
      return y(x);
    }
    function P(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(P);
          if (m === null || a(m))
            return !0;
          var x = d(m);
          if (x) {
            var A = x.call(m), R;
            if (x !== m.entries) {
              for (; !(R = A.next()).done; )
                if (!P(R.value))
                  return !1;
            } else
              for (; !(R = A.next()).done; ) {
                var N = R.value;
                if (N && !P(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function E(m, x) {
      return m === "symbol" ? !0 : x ? x["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && x instanceof Symbol : !1;
    }
    function w(m) {
      var x = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : E(x, m) ? "symbol" : x;
    }
    function k(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var x = w(m);
      if (x === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return x;
    }
    function _(m) {
      var x = k(m);
      switch (x) {
        case "array":
        case "object":
          return "an " + x;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + x;
        default:
          return x;
      }
    }
    function M(m) {
      return !m.constructor || !m.constructor.name ? f : m.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, tr;
}
var rr, on;
function ci() {
  if (on)
    return rr;
  on = 1;
  var e = wr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, rr = function() {
    function r(i, a, u, c, l, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function s() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, rr;
}
if (process.env.NODE_ENV !== "production") {
  var li = es(), fi = !0;
  dr.exports = ui()(li.isElement, fi);
} else
  dr.exports = ci()();
var di = dr.exports;
const T = /* @__PURE__ */ De(di);
let pr;
typeof document == "object" && (pr = qn({
  key: "css",
  prepend: !0
}));
function rs(e) {
  const {
    injectFirst: t,
    children: n
  } = e;
  return t && pr ? /* @__PURE__ */ se(Vo, {
    value: pr,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (rs.propTypes = {
  /**
   * Your component tree.
   */
  children: T.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: T.bool
});
function pi(e) {
  return e == null || Object.keys(e).length === 0;
}
function ns(e) {
  const {
    styles: t,
    defaultTheme: n = {}
  } = e;
  return /* @__PURE__ */ se(Xn, {
    styles: typeof t == "function" ? (s) => t(pi(s) ? n : s) : t
  });
}
process.env.NODE_ENV !== "production" && (ns.propTypes = {
  defaultTheme: T.object,
  styles: T.oneOfType([T.array, T.string, T.object, T.func])
});
/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function hi(e, t) {
  const n = fr(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const s = `"${e}"`;
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${s})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((o) => o === void 0) && console.error(`MUI: the styled(${s})(...args) API requires all its args to be defined.`), n(...r);
  } : n;
}
function _e(e, t) {
  if (e == null)
    return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r))
        continue;
      n[r] = e[r];
    }
  return n;
}
function Re(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ss(e) {
  if (!Re(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[n] = ss(e[n]);
  }), t;
}
function ke(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? W({}, e) : e;
  return Re(e) && Re(t) && Object.keys(t).forEach((s) => {
    Re(t[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && Re(e[s]) ? r[s] = ke(e[s], t[s], n) : n.clone ? r[s] = Re(t[s]) ? ss(t[s]) : t[s] : r[s] = t[s];
  }), r;
}
const mi = ["values", "unit", "step"], gi = (e) => {
  const t = Object.keys(e).map((n) => ({
    key: n,
    val: e[n]
  })) || [];
  return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => W({}, n, {
    [r.key]: r.val
  }), {});
};
function yi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: n = "px",
    step: r = 5
  } = e, s = _e(e, mi), o = gi(t), i = Object.keys(o);
  function a(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n})`;
  }
  function u(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${n})`;
  }
  function c(f, g) {
    const b = i.indexOf(g);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${n}) and (max-width:${(b !== -1 && typeof t[i[b]] == "number" ? t[i[b]] : g) - r / 100}${n})`;
  }
  function l(f) {
    return i.indexOf(f) + 1 < i.length ? c(f, i[i.indexOf(f) + 1]) : a(f);
  }
  function d(f) {
    const g = i.indexOf(f);
    return g === 0 ? a(i[1]) : g === i.length - 1 ? u(i[g]) : c(f, i[i.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return W({
    keys: i,
    values: o,
    up: a,
    down: u,
    between: c,
    only: l,
    not: d,
    unit: n
  }, s);
}
const bi = {
  borderRadius: 4
}, Ae = process.env.NODE_ENV !== "production" ? T.oneOfType([T.number, T.string, T.object, T.array]) : {};
function Xe(e, t) {
  return t ? ke(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const _r = {
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
}, an = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${_r[e]}px)`
};
function Pe(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const o = r.breakpoints || an;
    return t.reduce((i, a, u) => (i[o.up(o.keys[u])] = n(t[u]), i), {});
  }
  if (typeof t == "object") {
    const o = r.breakpoints || an;
    return Object.keys(t).reduce((i, a) => {
      if (Object.keys(o.values || _r).indexOf(a) !== -1) {
        const u = o.up(a);
        i[u] = n(t[a], a);
      } else {
        const u = a;
        i[u] = t[u];
      }
      return i;
    }, {});
  }
  return n(t);
}
function xi(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, s) => {
    const o = e.up(s);
    return r[o] = {}, r;
  }, {})) || {};
}
function Si(e, t) {
  return e.reduce((n, r) => {
    const s = n[r];
    return (!s || Object.keys(s).length === 0) && delete n[r], n;
  }, t);
}
function os(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : tt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Rt(e, t, n = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((s, o) => s && s[o] ? s[o] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, s) => r && r[s] != null ? r[s] : null, e);
}
function vt(e, t, n, r = n) {
  let s;
  return typeof e == "function" ? s = e(n) : Array.isArray(e) ? s = e[n] || r : s = Rt(e, n) || r, t && (s = t(s, r, e)), s;
}
function ce(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: s
  } = e, o = (i) => {
    if (i[t] == null)
      return null;
    const a = i[t], u = i.theme, c = Rt(u, r) || {};
    return Pe(i, a, (d) => {
      let f = vt(c, s, d);
      return d === f && typeof d == "string" && (f = vt(c, s, `${t}${d === "default" ? "" : os(d)}`, d)), n === !1 ? f : {
        [n]: f
      };
    });
  };
  return o.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Ae
  } : {}, o.filterProps = [t], o;
}
function wi(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const _i = {
  m: "margin",
  p: "padding"
}, Oi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, un = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ti = wi((e) => {
  if (e.length > 2)
    if (un[e])
      e = un[e];
    else
      return [e];
  const [t, n] = e.split(""), r = _i[t], s = Oi[n] || "";
  return Array.isArray(s) ? s.map((o) => r + o) : [r + s];
}), Dt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Nt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ei = [...Dt, ...Nt];
function lt(e, t, n, r) {
  var s;
  const o = (s = Rt(e, t, !1)) != null ? s : n;
  return typeof o == "number" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${i}.`), o * i) : Array.isArray(o) ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && (Number.isInteger(i) ? i > o.length - 1 && console.error([`MUI: The value provided (${i}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${i} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), o[i]) : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function is(e) {
  return lt(e, "spacing", 8, "spacing");
}
function ft(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const n = Math.abs(t), r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Ci(e, t) {
  return (n) => e.reduce((r, s) => (r[s] = ft(t, n), r), {});
}
function $i(e, t, n, r) {
  if (t.indexOf(n) === -1)
    return null;
  const s = Ti(n), o = Ci(s, r), i = e[n];
  return Pe(e, i, o);
}
function as(e, t) {
  const n = is(e.theme);
  return Object.keys(e).map((r) => $i(e, t, r, n)).reduce(Xe, {});
}
function ae(e) {
  return as(e, Dt);
}
ae.propTypes = process.env.NODE_ENV !== "production" ? Dt.reduce((e, t) => (e[t] = Ae, e), {}) : {};
ae.filterProps = Dt;
function ue(e) {
  return as(e, Nt);
}
ue.propTypes = process.env.NODE_ENV !== "production" ? Nt.reduce((e, t) => (e[t] = Ae, e), {}) : {};
ue.filterProps = Nt;
process.env.NODE_ENV !== "production" && Ei.reduce((e, t) => (e[t] = Ae, e), {});
function ki(e = 8) {
  if (e.mui)
    return e;
  const t = is({
    spacing: e
  }), n = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((o) => {
    const i = t(o);
    return typeof i == "number" ? `${i}px` : i;
  }).join(" "));
  return n.mui = !0, n;
}
function Lt(...e) {
  const t = e.reduce((r, s) => (s.filterProps.forEach((o) => {
    r[o] = s;
  }), r), {}), n = (r) => Object.keys(r).reduce((s, o) => t[o] ? Xe(s, t[o](r)) : s, {});
  return n.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, s) => Object.assign(r, s.propTypes), {}) : {}, n.filterProps = e.reduce((r, s) => r.concat(s.filterProps), []), n;
}
function xe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function we(e, t) {
  return ce({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Pi = we("border", xe), Mi = we("borderTop", xe), Ai = we("borderRight", xe), Ri = we("borderBottom", xe), Di = we("borderLeft", xe), Ni = we("borderColor"), Li = we("borderTopColor"), ji = we("borderRightColor"), Ii = we("borderBottomColor"), Fi = we("borderLeftColor"), Yi = we("outline", xe), Ui = we("outlineColor"), jt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = lt(e.theme, "shape.borderRadius", 4, "borderRadius"), n = (r) => ({
      borderRadius: ft(t, r)
    });
    return Pe(e, e.borderRadius, n);
  }
  return null;
};
jt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Ae
} : {};
jt.filterProps = ["borderRadius"];
Lt(Pi, Mi, Ai, Ri, Di, Ni, Li, ji, Ii, Fi, jt, Yi, Ui);
const It = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = lt(e.theme, "spacing", 8, "gap"), n = (r) => ({
      gap: ft(t, r)
    });
    return Pe(e, e.gap, n);
  }
  return null;
};
It.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Ae
} : {};
It.filterProps = ["gap"];
const Ft = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = lt(e.theme, "spacing", 8, "columnGap"), n = (r) => ({
      columnGap: ft(t, r)
    });
    return Pe(e, e.columnGap, n);
  }
  return null;
};
Ft.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Ae
} : {};
Ft.filterProps = ["columnGap"];
const Yt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = lt(e.theme, "spacing", 8, "rowGap"), n = (r) => ({
      rowGap: ft(t, r)
    });
    return Pe(e, e.rowGap, n);
  }
  return null;
};
Yt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Ae
} : {};
Yt.filterProps = ["rowGap"];
const zi = ce({
  prop: "gridColumn"
}), Vi = ce({
  prop: "gridRow"
}), Bi = ce({
  prop: "gridAutoFlow"
}), Wi = ce({
  prop: "gridAutoColumns"
}), Hi = ce({
  prop: "gridAutoRows"
}), qi = ce({
  prop: "gridTemplateColumns"
}), Ki = ce({
  prop: "gridTemplateRows"
}), Gi = ce({
  prop: "gridTemplateAreas"
}), Ji = ce({
  prop: "gridArea"
});
Lt(It, Ft, Yt, zi, Vi, Bi, Wi, Hi, qi, Ki, Gi, Ji);
function Be(e, t) {
  return t === "grey" ? t : e;
}
const Zi = ce({
  prop: "color",
  themeKey: "palette",
  transform: Be
}), Qi = ce({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Be
}), Xi = ce({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Be
});
Lt(Zi, Qi, Xi);
function be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ea = ce({
  prop: "width",
  transform: be
}), Or = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (n) => {
      var r, s;
      const o = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || _r[n];
      return o ? ((s = e.theme) == null || (s = s.breakpoints) == null ? void 0 : s.unit) !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: be(n)
      };
    };
    return Pe(e, e.maxWidth, t);
  }
  return null;
};
Or.filterProps = ["maxWidth"];
const ta = ce({
  prop: "minWidth",
  transform: be
}), ra = ce({
  prop: "height",
  transform: be
}), na = ce({
  prop: "maxHeight",
  transform: be
}), sa = ce({
  prop: "minHeight",
  transform: be
});
ce({
  prop: "size",
  cssProperty: "width",
  transform: be
});
ce({
  prop: "size",
  cssProperty: "height",
  transform: be
});
const oa = ce({
  prop: "boxSizing"
});
Lt(ea, Or, ta, ra, na, sa, oa);
const Ut = {
  // borders
  border: {
    themeKey: "borders",
    transform: xe
  },
  borderTop: {
    themeKey: "borders",
    transform: xe
  },
  borderRight: {
    themeKey: "borders",
    transform: xe
  },
  borderBottom: {
    themeKey: "borders",
    transform: xe
  },
  borderLeft: {
    themeKey: "borders",
    transform: xe
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
    transform: xe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: jt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Be
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Be
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Be
  },
  // spacing
  p: {
    style: ue
  },
  pt: {
    style: ue
  },
  pr: {
    style: ue
  },
  pb: {
    style: ue
  },
  pl: {
    style: ue
  },
  px: {
    style: ue
  },
  py: {
    style: ue
  },
  padding: {
    style: ue
  },
  paddingTop: {
    style: ue
  },
  paddingRight: {
    style: ue
  },
  paddingBottom: {
    style: ue
  },
  paddingLeft: {
    style: ue
  },
  paddingX: {
    style: ue
  },
  paddingY: {
    style: ue
  },
  paddingInline: {
    style: ue
  },
  paddingInlineStart: {
    style: ue
  },
  paddingInlineEnd: {
    style: ue
  },
  paddingBlock: {
    style: ue
  },
  paddingBlockStart: {
    style: ue
  },
  paddingBlockEnd: {
    style: ue
  },
  m: {
    style: ae
  },
  mt: {
    style: ae
  },
  mr: {
    style: ae
  },
  mb: {
    style: ae
  },
  ml: {
    style: ae
  },
  mx: {
    style: ae
  },
  my: {
    style: ae
  },
  margin: {
    style: ae
  },
  marginTop: {
    style: ae
  },
  marginRight: {
    style: ae
  },
  marginBottom: {
    style: ae
  },
  marginLeft: {
    style: ae
  },
  marginX: {
    style: ae
  },
  marginY: {
    style: ae
  },
  marginInline: {
    style: ae
  },
  marginInlineStart: {
    style: ae
  },
  marginInlineEnd: {
    style: ae
  },
  marginBlock: {
    style: ae
  },
  marginBlockStart: {
    style: ae
  },
  marginBlockEnd: {
    style: ae
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
    style: It
  },
  rowGap: {
    style: Yt
  },
  columnGap: {
    style: Ft
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
    transform: be
  },
  maxWidth: {
    style: Or
  },
  minWidth: {
    transform: be
  },
  height: {
    transform: be
  },
  maxHeight: {
    transform: be
  },
  minHeight: {
    transform: be
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
function ia(...e) {
  const t = e.reduce((r, s) => r.concat(Object.keys(s)), []), n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function aa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ua() {
  function e(n, r, s, o) {
    const i = {
      [n]: r,
      theme: s
    }, a = o[n];
    if (!a)
      return {
        [n]: r
      };
    const {
      cssProperty: u = n,
      themeKey: c,
      transform: l,
      style: d
    } = a;
    if (r == null)
      return null;
    if (c === "typography" && r === "inherit")
      return {
        [n]: r
      };
    const f = Rt(s, c) || {};
    return d ? d(i) : Pe(i, r, (b) => {
      let h = vt(f, l, b);
      return b === h && typeof b == "string" && (h = vt(f, l, `${n}${b === "default" ? "" : os(b)}`, b)), u === !1 ? h : {
        [u]: h
      };
    });
  }
  function t(n) {
    var r;
    const {
      sx: s,
      theme: o = {}
    } = n || {};
    if (!s)
      return null;
    const i = (r = o.unstable_sxConfig) != null ? r : Ut;
    function a(u) {
      let c = u;
      if (typeof u == "function")
        c = u(o);
      else if (typeof u != "object")
        return u;
      if (!c)
        return null;
      const l = xi(o.breakpoints), d = Object.keys(l);
      let f = l;
      return Object.keys(c).forEach((g) => {
        const b = aa(c[g], o);
        if (b != null)
          if (typeof b == "object")
            if (i[g])
              f = Xe(f, e(g, b, o, i));
            else {
              const h = Pe({
                theme: o
              }, b, (y) => ({
                [g]: y
              }));
              ia(h, b) ? f[g] = t({
                sx: b,
                theme: o
              }) : f = Xe(f, h);
            }
          else
            f = Xe(f, e(g, b, o, i));
      }), Si(d, f);
    }
    return Array.isArray(s) ? s.map(a) : a(s);
  }
  return t;
}
const zt = ua();
zt.filterProps = ["sx"];
function ca(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function" ? {
    [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : n.palette.mode === e ? t : {};
}
const la = ["breakpoints", "palette", "spacing", "shape"];
function us(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: s,
    shape: o = {}
  } = e, i = _e(e, la), a = yi(n), u = ki(s);
  let c = ke({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: W({
      mode: "light"
    }, r),
    spacing: u,
    shape: W({}, bi, o)
  }, i);
  return c.applyStyles = ca, c = t.reduce((l, d) => ke(l, d), c), c.unstable_sxConfig = W({}, Ut, i == null ? void 0 : i.unstable_sxConfig), c.unstable_sx = function(d) {
    return zt({
      sx: d,
      theme: this
    });
  }, c;
}
function fa(e) {
  return Object.keys(e).length === 0;
}
function Tr(e = null) {
  const t = z.useContext(Ne);
  return !t || fa(t) ? e : t;
}
const da = us();
function Er(e = da) {
  return Tr(e);
}
function cs({
  styles: e,
  themeId: t,
  defaultTheme: n = {}
}) {
  const r = Er(n), s = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ se(ns, {
    styles: s
  });
}
process.env.NODE_ENV !== "production" && (cs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: T.object,
  /**
   * @ignore
   */
  styles: T.oneOfType([T.array, T.func, T.number, T.object, T.string, T.bool]),
  /**
   * @ignore
   */
  themeId: T.string
});
const pa = ["sx"], ha = (e) => {
  var t, n;
  const r = {
    systemProps: {},
    otherProps: {}
  }, s = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Ut;
  return Object.keys(e).forEach((o) => {
    s[o] ? r.systemProps[o] = e[o] : r.otherProps[o] = e[o];
  }), r;
};
function ma(e) {
  const {
    sx: t
  } = e, n = _e(e, pa), {
    systemProps: r,
    otherProps: s
  } = ha(n);
  let o;
  return Array.isArray(t) ? o = [r, ...t] : typeof t == "function" ? o = (...i) => {
    const a = t(...i);
    return Re(a) ? W({}, r, a) : r;
  } : o = W({}, r, t), W({}, s, {
    sx: o
  });
}
const cn = (e) => e, ga = () => {
  let e = cn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = cn;
    }
  };
}, ls = ga();
function fs(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = fs(e[t])) && (r && (r += " "), r += n);
    } else
      for (n in e)
        e[n] && (r && (r += " "), r += n);
  return r;
}
function ya() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = fs(e)) && (r && (r += " "), r += t);
  return r;
}
const ba = ["className", "component"];
function va(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: s
  } = e, o = hi("div", {
    shouldForwardProp: (a) => a !== "theme" && a !== "sx" && a !== "as"
  })(zt);
  return /* @__PURE__ */ z.forwardRef(function(u, c) {
    const l = Er(n), d = ma(u), {
      className: f,
      component: g = "div"
    } = d, b = _e(d, ba);
    return /* @__PURE__ */ se(o, W({
      as: g,
      ref: c,
      className: ya(f, s ? s(r) : r),
      theme: t && l[t] || l
    }, b));
  });
}
const xa = {
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
function ds(e, t, n = "Mui") {
  const r = xa[t];
  return r ? `${n}-${r}` : `${ls.generate(e)}-${t}`;
}
function Sa(e, t, n = "Mui") {
  const r = {};
  return t.forEach((s) => {
    r[s] = ds(e, s, n);
  }), r;
}
function ps(e, t) {
  const n = W({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      n[r] = W({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const s = e[r] || {}, o = t[r];
      n[r] = {}, !o || !Object.keys(o) ? n[r] = s : !s || !Object.keys(s) ? n[r] = o : (n[r] = W({}, o), Object.keys(s).forEach((i) => {
        n[r][i] = ps(s[i], o[i]);
      }));
    } else
      n[r] === void 0 && (n[r] = e[r]);
  }), n;
}
function hs(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : ps(t.components[n].defaultProps, r);
}
function wa({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let s = Er(n);
  return r && (s = s[r] || s), hs({
    theme: s,
    name: t,
    props: e
  });
}
const _a = typeof window < "u" ? z.useLayoutEffect : z.useEffect;
function Oa(e, t, n, r, s) {
  const [o, i] = z.useState(() => s && n ? n(e).matches : r ? r(e).matches : t);
  return _a(() => {
    let a = !0;
    if (!n)
      return;
    const u = n(e), c = () => {
      a && i(u.matches);
    };
    return c(), u.addListener(c), () => {
      a = !1, u.removeListener(c);
    };
  }, [e, n]), o;
}
const ms = z.useSyncExternalStore;
function Ta(e, t, n, r, s) {
  const o = z.useCallback(() => t, [t]), i = z.useMemo(() => {
    if (s && n)
      return () => n(e).matches;
    if (r !== null) {
      const {
        matches: l
      } = r(e);
      return () => l;
    }
    return o;
  }, [o, e, r, s, n]), [a, u] = z.useMemo(() => {
    if (n === null)
      return [o, () => () => {
      }];
    const l = n(e);
    return [() => l.matches, (d) => (l.addListener(d), () => {
      l.removeListener(d);
    })];
  }, [o, n, e]);
  return ms(u, a, i);
}
function Ea(e, t = {}) {
  const n = Tr(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: s = !1,
    matchMedia: o = r ? window.matchMedia : null,
    ssrMatchMedia: i = null,
    noSsr: a = !1
  } = hs({
    name: "MuiUseMediaQuery",
    props: t,
    theme: n
  });
  process.env.NODE_ENV;
  let u = e;
  u = u.replace(/^@media( ?)/m, "");
  const l = (ms !== void 0 ? Ta : Oa)(u, s, o, i, a);
  return process.env.NODE_ENV !== "production" && z.useDebugValue({
    query: u,
    match: l
  }), l;
}
function Ca(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const $a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ca
}, Symbol.toStringTag, { value: "Module" })), ka = "exact-prop: ​";
function gs(e) {
  return process.env.NODE_ENV === "production" ? e : W({}, e, {
    [ka]: (t) => {
      const n = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return n.length > 0 ? new Error(`The following props are not supported: ${n.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
const Cr = /* @__PURE__ */ z.createContext(null);
process.env.NODE_ENV !== "production" && (Cr.displayName = "ThemeContext");
function ys() {
  const e = z.useContext(Cr);
  return process.env.NODE_ENV !== "production" && z.useDebugValue(e), e;
}
const Pa = typeof Symbol == "function" && Symbol.for, Ma = Pa ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Aa(e, t) {
  if (typeof t == "function") {
    const n = t(e);
    return process.env.NODE_ENV !== "production" && (n || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), n;
  }
  return W({}, e, t);
}
function xt(e) {
  const {
    children: t,
    theme: n
  } = e, r = ys();
  process.env.NODE_ENV !== "production" && r === null && typeof n == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = z.useMemo(() => {
    const o = r === null ? n : Aa(r, n);
    return o != null && (o[Ma] = r !== null), o;
  }, [n, r]);
  return /* @__PURE__ */ se(Cr.Provider, {
    value: s,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (xt.propTypes = {
  /**
   * Your component tree.
   */
  children: T.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: T.oneOfType([T.object, T.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (xt.propTypes = gs(xt.propTypes));
const Ra = ["value"], Da = /* @__PURE__ */ z.createContext();
function bs(e) {
  let {
    value: t
  } = e, n = _e(e, Ra);
  return /* @__PURE__ */ se(Da.Provider, W({
    value: t ?? !0
  }, n));
}
process.env.NODE_ENV !== "production" && (bs.propTypes = {
  children: T.node,
  value: T.bool
});
const Na = /* @__PURE__ */ z.createContext(void 0);
function vs({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ se(Na.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (vs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: T.node,
  /**
   * @ignore
   */
  value: T.object
});
const ln = {};
function fn(e, t, n, r = !1) {
  return z.useMemo(() => {
    const s = e && t[e] || t;
    if (typeof n == "function") {
      const o = n(s), i = e ? W({}, t, {
        [e]: o
      }) : o;
      return r ? () => i : i;
    }
    return e ? W({}, t, {
      [e]: n
    }) : W({}, t, n);
  }, [e, t, n, r]);
}
function St(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, s = Tr(ln), o = ys() || ln;
  process.env.NODE_ENV !== "production" && (s === null && typeof n == "function" || r && s && !s[r] && typeof n == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const i = fn(r, s, n), a = fn(r, o, n, !0), u = i.direction === "rtl";
  return /* @__PURE__ */ se(xt, {
    theme: a,
    children: /* @__PURE__ */ se(Ne.Provider, {
      value: i,
      children: /* @__PURE__ */ se(bs, {
        value: u,
        children: /* @__PURE__ */ se(vs, {
          value: i == null ? void 0 : i.components,
          children: t
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (St.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: T.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: T.oneOfType([T.func, T.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: T.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (St.propTypes = gs(St.propTypes));
const it = "$$material";
function La(e, t) {
  return W({
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
  }, t);
}
var le = {}, xs = { exports: {} };
(function(e) {
  function t(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(xs);
var ja = xs.exports;
const Ia = /* @__PURE__ */ Kn(Gs), Fa = /* @__PURE__ */ Kn($a);
var Ss = ja;
Object.defineProperty(le, "__esModule", {
  value: !0
});
le.alpha = Ts;
le.blend = Za;
le.colorChannel = void 0;
var Ya = le.darken = kr;
le.decomposeColor = Se;
le.emphasize = Es;
var dn = le.getContrastRatio = Ha;
le.getLuminance = wt;
le.hexToRgb = ws;
le.hslToRgb = Os;
var Ua = le.lighten = Pr;
le.private_safeAlpha = qa;
le.private_safeColorChannel = void 0;
le.private_safeDarken = Ka;
le.private_safeEmphasize = Ja;
le.private_safeLighten = Ga;
le.recomposeColor = qe;
le.rgbToHex = Wa;
var pn = Ss(Ia), za = Ss(Fa);
function $r(e, t = 0, n = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > n) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${n}].`), (0, za.default)(e, t, n);
}
function ws(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map((r) => r + r)), n ? `rgb${n.length === 4 ? "a" : ""}(${n.map((r, s) => s < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Va(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Se(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Se(ws(e));
  const t = e.indexOf("("), n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, pn.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), s;
  if (n === "color") {
    if (r = r.split(" "), s = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(s) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${s}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, pn.default)(10, s));
  } else
    r = r.split(",");
  return r = r.map((o) => parseFloat(o)), {
    type: n,
    values: r,
    colorSpace: s
  };
}
const _s = (e) => {
  const t = Se(e);
  return t.values.slice(0, 3).map((n, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n).join(" ");
};
le.colorChannel = _s;
const Ba = (e, t) => {
  try {
    return _s(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
le.private_safeColorChannel = Ba;
function qe(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function Wa(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Se(e);
  return `#${t.map((n, r) => Va(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function Os(e) {
  e = Se(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, s = t[2] / 100, o = r * Math.min(s, 1 - s), i = (c, l = (c + n / 30) % 12) => s - o * Math.max(Math.min(l - 3, 9 - l, 1), -1);
  let a = "rgb";
  const u = [Math.round(i(0) * 255), Math.round(i(8) * 255), Math.round(i(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), qe({
    type: a,
    values: u
  });
}
function wt(e) {
  e = Se(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Se(Os(e)).values : e.values;
  return t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Ha(e, t) {
  const n = wt(e), r = wt(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Ts(e, t) {
  return e = Se(e), t = $r(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, qe(e);
}
function qa(e, t, n) {
  try {
    return Ts(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function kr(e, t) {
  if (e = Se(e), t = $r(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] *= 1 - t;
  return qe(e);
}
function Ka(e, t, n) {
  try {
    return kr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Pr(e, t) {
  if (e = Se(e), t = $r(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1)
      e.values[n] += (1 - e.values[n]) * t;
  return qe(e);
}
function Ga(e, t, n) {
  try {
    return Pr(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Es(e, t = 0.15) {
  return wt(e) > 0.5 ? kr(e, t) : Pr(e, t);
}
function Ja(e, t, n) {
  try {
    return Es(e, t);
  } catch {
    return n && process.env.NODE_ENV !== "production" && console.warn(n), e;
  }
}
function Za(e, t, n, r = 1) {
  const s = (u, c) => Math.round((u ** (1 / r) * (1 - n) + c ** (1 / r) * n) ** r), o = Se(e), i = Se(t), a = [s(o.values[0], i.values[0]), s(o.values[1], i.values[1]), s(o.values[2], i.values[2])];
  return qe({
    type: "rgb",
    values: a
  });
}
const at = {
  black: "#000",
  white: "#fff"
}, Qa = {
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
}, Le = {
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
}, je = {
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
}, Ge = {
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
}, Ie = {
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
}, Fe = {
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
}, Ye = {
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
}, Xa = ["mode", "contrastThreshold", "tonalOffset"], hn = {
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
    paper: at.white,
    default: at.white
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
}, nr = {
  text: {
    primary: at.white,
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
    active: at.white,
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
function mn(e, t, n, r) {
  const s = r.light || r, o = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = Ua(e.main, s) : t === "dark" && (e.dark = Ya(e.main, o)));
}
function eu(e = "light") {
  return e === "dark" ? {
    main: Ie[200],
    light: Ie[50],
    dark: Ie[400]
  } : {
    main: Ie[700],
    light: Ie[400],
    dark: Ie[800]
  };
}
function tu(e = "light") {
  return e === "dark" ? {
    main: Le[200],
    light: Le[50],
    dark: Le[400]
  } : {
    main: Le[500],
    light: Le[300],
    dark: Le[700]
  };
}
function ru(e = "light") {
  return e === "dark" ? {
    main: je[500],
    light: je[300],
    dark: je[700]
  } : {
    main: je[700],
    light: je[400],
    dark: je[800]
  };
}
function nu(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: Fe[700],
    light: Fe[500],
    dark: Fe[900]
  };
}
function su(e = "light") {
  return e === "dark" ? {
    main: Ye[400],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[800],
    light: Ye[500],
    dark: Ye[900]
  };
}
function ou(e = "light") {
  return e === "dark" ? {
    main: Ge[400],
    light: Ge[300],
    dark: Ge[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ge[500],
    dark: Ge[900]
  };
}
function iu(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = 0.2
  } = e, s = _e(e, Xa), o = e.primary || eu(t), i = e.secondary || tu(t), a = e.error || ru(t), u = e.info || nu(t), c = e.success || su(t), l = e.warning || ou(t);
  function d(h) {
    const y = dn(h, nr.text.primary) >= n ? nr.text.primary : hn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = dn(h, y);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${y} on ${h}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const f = ({
    color: h,
    name: y,
    mainShade: S = 500,
    lightShade: $ = 300,
    darkShade: O = 700
  }) => {
    if (h = W({}, h), !h.main && h[S] && (h.main = h[S]), !h.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : tt(11, y ? ` (${y})` : "", S));
    if (typeof h.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(h.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : tt(12, y ? ` (${y})` : "", JSON.stringify(h.main)));
    return mn(h, "light", $, r), mn(h, "dark", O, r), h.contrastText || (h.contrastText = d(h.main)), h;
  }, g = {
    dark: nr,
    light: hn
  };
  return process.env.NODE_ENV !== "production" && (g[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ke(W({
    // A collection of common colors.
    common: W({}, at),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: o,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: i,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: l,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: c,
      name: "success"
    }),
    // The grey colors.
    grey: Qa,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: n,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: d,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, g[t]), s);
}
const au = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function uu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const gn = {
  textTransform: "uppercase"
}, yn = '"Roboto", "Helvetica", "Arial", sans-serif';
function cu(e, t) {
  const n = typeof t == "function" ? t(e) : t, {
    fontFamily: r = yn,
    // The default font size of the Material Specification.
    fontSize: s = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: l,
    pxToRem: d
  } = n, f = _e(n, au);
  process.env.NODE_ENV !== "production" && (typeof s != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = s / 14, b = d || ((S) => `${S / c * g}rem`), h = (S, $, O, C, p) => W({
    fontFamily: r,
    fontWeight: S,
    fontSize: b($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O
  }, r === yn ? {
    letterSpacing: `${uu(C / $)}em`
  } : {}, p, l), y = {
    h1: h(o, 96, 1.167, -1.5),
    h2: h(o, 60, 1.2, -0.5),
    h3: h(i, 48, 1.167, 0),
    h4: h(i, 34, 1.235, 0.25),
    h5: h(i, 24, 1.334, 0),
    h6: h(a, 20, 1.6, 0.15),
    subtitle1: h(i, 16, 1.75, 0.15),
    subtitle2: h(a, 14, 1.57, 0.1),
    body1: h(i, 16, 1.5, 0.15),
    body2: h(i, 14, 1.43, 0.15),
    button: h(a, 14, 1.75, 0.4, gn),
    caption: h(i, 12, 1.66, 0.4),
    overline: h(i, 12, 2.66, 1, gn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ke(W({
    htmlFontSize: c,
    pxToRem: b,
    fontFamily: r,
    fontSize: s,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: u
  }, y), f, {
    clone: !1
    // No need to clone deep
  });
}
const lu = 0.2, fu = 0.14, du = 0.12;
function re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${lu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${fu})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${du})`].join(",");
}
const pu = ["none", re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], hu = ["duration", "easing", "delay"], mu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, gu = {
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
function bn(e) {
  return `${Math.round(e)}ms`;
}
function yu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function bu(e) {
  const t = W({}, mu, e.easing), n = W({}, gu, e.duration);
  return W({
    getAutoHeightDuration: yu,
    create: (s = ["all"], o = {}) => {
      const {
        duration: i = n.standard,
        easing: a = t.easeInOut,
        delay: u = 0
      } = o, c = _e(o, hu);
      if (process.env.NODE_ENV !== "production") {
        const l = (f) => typeof f == "string", d = (f) => !isNaN(parseFloat(f));
        !l(s) && !Array.isArray(s) && console.error('MUI: Argument "props" must be a string or Array.'), !d(i) && !l(i) && console.error(`MUI: Argument "duration" must be a number or a string but found ${i}.`), l(a) || console.error('MUI: Argument "easing" must be a string.'), !d(u) && !l(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof o != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(c).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(c).join(",")}].`);
      }
      return (Array.isArray(s) ? s : [s]).map((l) => `${l} ${typeof i == "string" ? i : bn(i)} ${a} ${typeof u == "string" ? u : bn(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: n
  });
}
const vu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, xu = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Mr(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: s = {},
    typography: o = {}
  } = e, i = _e(e, xu);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : tt(18));
  const a = iu(r), u = us(e);
  let c = ke(u, {
    mixins: La(u.breakpoints, n),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: pu.slice(),
    typography: cu(a, o),
    transitions: bu(s),
    zIndex: W({}, vu)
  });
  if (c = ke(c, i), c = t.reduce((l, d) => ke(l, d), c), process.env.NODE_ENV !== "production") {
    const l = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], d = (f, g) => {
      let b;
      for (b in f) {
        const h = f[b];
        if (l.indexOf(b) !== -1 && Object.keys(h).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = ds("", b);
            console.error([`MUI: The \`${g}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: h
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[b] = {};
        }
      }
    };
    Object.keys(c.components).forEach((f) => {
      const g = c.components[f].styleOverrides;
      g && f.indexOf("Mui") === 0 && d(g, f);
    });
  }
  return c.unstable_sxConfig = W({}, Ut, i == null ? void 0 : i.unstable_sxConfig), c.unstable_sx = function(d) {
    return zt({
      sx: d,
      theme: this
    });
  }, c;
}
const Cs = Mr();
function $s({
  props: e,
  name: t
}) {
  return wa({
    props: e,
    name: t,
    defaultTheme: Cs,
    themeId: it
  });
}
const Su = ["theme"];
function ks(e) {
  let {
    theme: t
  } = e, n = _e(e, Su);
  const r = t[it];
  return /* @__PURE__ */ se(St, W({}, n, {
    themeId: r ? it : void 0,
    theme: r || t
  }));
}
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  /**
   * Your component tree.
   */
  children: T.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: T.oneOfType([T.object, T.func]).isRequired
});
const wu = Sa("MuiBox", ["root"]), _u = Mr(), Vt = va({
  themeId: it,
  defaultTheme: _u,
  defaultClassName: wu.root,
  generateClassName: ls.generate
});
process.env.NODE_ENV !== "production" && (Vt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: T.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: T.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object])
});
const sr = 3, Ou = 2;
function Ml({ children: e, sx: t, ...n }) {
  return /* @__PURE__ */ se(
    Vt,
    {
      component: "section",
      sx: {
        background: "background.paper",
        mx: { sm: 0, md: Ou },
        mt: { sm: 0, md: sr },
        mb: { sm: 0, md: sr },
        borderRadius: { sm: 0, md: "13px" },
        paddingX: { xs: 2, lg: 5 },
        paddingTop: 3,
        paddingBottom: sr * 2,
        flexGrow: { xs: 1, md: 0 },
        ...t
      },
      ...n,
      children: e
    }
  );
}
const Tu = {
  50: "#ede7f6",
  100: "#d1c4e9",
  200: "#b39ddb",
  300: "#9575cd",
  400: "#7e57c2",
  500: "#673ab7",
  600: "#5e35b1",
  700: "#512da8",
  800: "#4527a0",
  900: "#311b92",
  A100: "#b388ff",
  A200: "#7c4dff",
  A400: "#651fff",
  A700: "#6200ea"
}, Eu = {
  50: "#fff8e1",
  100: "#ffecb3",
  200: "#ffe082",
  300: "#ffd54f",
  400: "#ffca28",
  500: "#ffc107",
  600: "#ffb300",
  700: "#ffa000",
  800: "#ff8f00",
  900: "#ff6f00",
  A100: "#ffe57f",
  A200: "#ffd740",
  A400: "#ffc400",
  A700: "#ffab00"
};
function Ps(e) {
  return /* @__PURE__ */ se(cs, W({}, e, {
    defaultTheme: Cs,
    themeId: it
  }));
}
process.env.NODE_ENV !== "production" && (Ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: T.oneOfType([T.array, T.func, T.number, T.object, T.string, T.bool])
});
const Cu = (e, t) => W({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, t && !e.vars && {
  colorScheme: e.palette.mode
}), $u = (e) => W({
  color: (e.vars || e).palette.text.primary
}, e.typography.body1, {
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), ku = (e, t = !1) => {
  var n;
  const r = {};
  t && e.colorSchemes && Object.entries(e.colorSchemes).forEach(([i, a]) => {
    var u;
    r[e.getColorSchemeSelector(i).replace(/\s*&/, "")] = {
      colorScheme: (u = a.palette) == null ? void 0 : u.mode
    };
  });
  let s = W({
    html: Cu(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: W({
      margin: 0
    }, $u(e), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    })
  }, r);
  const o = (n = e.components) == null || (n = n.MuiCssBaseline) == null ? void 0 : n.styleOverrides;
  return o && (s = [s, o]), s;
};
function Ms(e) {
  const t = $s({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: n,
    enableColorScheme: r = !1
  } = t;
  return /* @__PURE__ */ Ln(z.Fragment, {
    children: [/* @__PURE__ */ se(Ps, {
      styles: (s) => ku(s, r)
    }), n]
  });
}
process.env.NODE_ENV !== "production" && (Ms.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: T.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: T.bool
});
const Al = ({ title: e, sx: t, ...n }) => /* @__PURE__ */ se(
  Vt,
  {
    component: "h2",
    sx: {
      fontWeight: "900",
      textAlign: "left",
      my: 0,
      mt: 1,
      ...t
    },
    ...n,
    children: e
  }
);
function Rl({ bgcolor: e, sx: t, children: n, ...r }) {
  return /* @__PURE__ */ se(
    Vt,
    {
      bgcolor: e || ((s) => s.palette.mode === "dark" ? "#353535" : "#F8F7F7"),
      boxShadow: "0.3px 0.8px 1.1px 0px rgba(187, 187, 187, 0.11), 0.5px 1.3px 1.8px -0.6px rgba(187, 187, 187, 0.18), 1.1px 2.7px 3.8px -1.2px rgba(187, 187, 187, 0.26)",
      border: "0.5px solid rgba(0, 0, 0, 0.30)",
      sx: t,
      py: { xs: 1, md: 2.5 },
      px: { xs: 2, md: 7 },
      textAlign: "left",
      ...r,
      children: n
    }
  );
}
const Pu = ["localeText"], hr = /* @__PURE__ */ z.createContext(null);
process.env.NODE_ENV !== "production" && (hr.displayName = "MuiPickersAdapterContext");
const As = function(t) {
  const {
    localeText: n
  } = t, r = _e(t, Pu), {
    utils: s,
    localeText: o
  } = z.useContext(hr) ?? {
    utils: void 0,
    localeText: void 0
  }, i = $s({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: r,
    name: "MuiLocalizationProvider"
  }), {
    children: a,
    dateAdapter: u,
    dateFormats: c,
    dateLibInstance: l,
    adapterLocale: d,
    localeText: f
  } = i, g = z.useMemo(() => W({}, f, o, n), [f, o, n]), b = z.useMemo(() => {
    if (!u)
      return s || null;
    const S = new u({
      locale: d,
      formats: c,
      instance: l
    });
    if (!S.isMUIAdapter)
      throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    return S;
  }, [u, d, c, l, s]), h = z.useMemo(() => b ? {
    minDate: b.date("1900-01-01T00:00:00.000"),
    maxDate: b.date("2099-12-31T00:00:00.000")
  } : null, [b]), y = z.useMemo(() => ({
    utils: b,
    defaultDates: h,
    localeText: g
  }), [h, b, g]);
  return /* @__PURE__ */ se(hr.Provider, {
    value: y,
    children: a
  });
};
process.env.NODE_ENV !== "production" && (As.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: T.any,
  children: T.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
   */
  dateAdapter: T.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: T.shape({
    dayOfMonth: T.string,
    dayOfMonthFull: T.string,
    fullDate: T.string,
    fullTime: T.string,
    fullTime12h: T.string,
    fullTime24h: T.string,
    hours12h: T.string,
    hours24h: T.string,
    keyboardDate: T.string,
    keyboardDateTime: T.string,
    keyboardDateTime12h: T.string,
    keyboardDateTime24h: T.string,
    meridiem: T.string,
    minutes: T.string,
    month: T.string,
    monthShort: T.string,
    normalDate: T.string,
    normalDateWithWeekday: T.string,
    seconds: T.string,
    shortDate: T.string,
    weekday: T.string,
    weekdayShort: T.string,
    year: T.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: T.any,
  /**
   * Locale for components texts
   */
  localeText: T.object
});
const Mu = (e, t = "warning") => {
  let n = !1;
  const r = Array.isArray(e) ? e.join(`
`) : e;
  return () => {
    n || (n = !0, t === "error" ? console.error(r) : console.warn(r));
  };
};
var Rs = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Me, function() {
    var n = 1e3, r = 6e4, s = 36e5, o = "millisecond", i = "second", a = "minute", u = "hour", c = "day", l = "week", d = "month", f = "quarter", g = "year", b = "date", h = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, S = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
      var E = ["th", "st", "nd", "rd"], w = P % 100;
      return "[" + P + (E[(w - 20) % 10] || E[w] || E[0]) + "]";
    } }, O = function(P, E, w) {
      var k = String(P);
      return !k || k.length >= E ? P : "" + Array(E + 1 - k.length).join(w) + P;
    }, C = { s: O, z: function(P) {
      var E = -P.utcOffset(), w = Math.abs(E), k = Math.floor(w / 60), _ = w % 60;
      return (E <= 0 ? "+" : "-") + O(k, 2, "0") + ":" + O(_, 2, "0");
    }, m: function P(E, w) {
      if (E.date() < w.date())
        return -P(w, E);
      var k = 12 * (w.year() - E.year()) + (w.month() - E.month()), _ = E.clone().add(k, d), M = w - _ < 0, m = E.clone().add(k + (M ? -1 : 1), d);
      return +(-(k + (w - _) / (M ? _ - m : m - _)) || 0);
    }, a: function(P) {
      return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
    }, p: function(P) {
      return { M: d, y: g, w: l, d: c, D: b, h: u, m: a, s: i, ms: o, Q: f }[P] || String(P || "").toLowerCase().replace(/s$/, "");
    }, u: function(P) {
      return P === void 0;
    } }, p = "en", L = {};
    L[p] = $;
    var D = "$isDayjsObject", te = function(P) {
      return P instanceof oe || !(!P || !P[D]);
    }, ee = function P(E, w, k) {
      var _;
      if (!E)
        return p;
      if (typeof E == "string") {
        var M = E.toLowerCase();
        L[M] && (_ = M), w && (L[M] = w, _ = M);
        var m = E.split("-");
        if (!_ && m.length > 1)
          return P(m[0]);
      } else {
        var x = E.name;
        L[x] = E, _ = x;
      }
      return !k && _ && (p = _), _ || !k && p;
    }, H = function(P, E) {
      if (te(P))
        return P.clone();
      var w = typeof E == "object" ? E : {};
      return w.date = P, w.args = arguments, new oe(w);
    }, I = C;
    I.l = ee, I.i = te, I.w = function(P, E) {
      return H(P, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var oe = function() {
      function P(w) {
        this.$L = ee(w.locale, null, !0), this.parse(w), this.$x = this.$x || w.x || {}, this[D] = !0;
      }
      var E = P.prototype;
      return E.parse = function(w) {
        this.$d = function(k) {
          var _ = k.date, M = k.utc;
          if (_ === null)
            return /* @__PURE__ */ new Date(NaN);
          if (I.u(_))
            return /* @__PURE__ */ new Date();
          if (_ instanceof Date)
            return new Date(_);
          if (typeof _ == "string" && !/Z$/i.test(_)) {
            var m = _.match(y);
            if (m) {
              var x = m[2] - 1 || 0, A = (m[7] || "0").substring(0, 3);
              return M ? new Date(Date.UTC(m[1], x, m[3] || 1, m[4] || 0, m[5] || 0, m[6] || 0, A)) : new Date(m[1], x, m[3] || 1, m[4] || 0, m[5] || 0, m[6] || 0, A);
            }
          }
          return new Date(_);
        }(w), this.init();
      }, E.init = function() {
        var w = this.$d;
        this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
      }, E.$utils = function() {
        return I;
      }, E.isValid = function() {
        return this.$d.toString() !== h;
      }, E.isSame = function(w, k) {
        var _ = H(w);
        return this.startOf(k) <= _ && _ <= this.endOf(k);
      }, E.isAfter = function(w, k) {
        return H(w) < this.startOf(k);
      }, E.isBefore = function(w, k) {
        return this.endOf(k) < H(w);
      }, E.$g = function(w, k, _) {
        return I.u(w) ? this[k] : this.set(_, w);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function(w, k) {
        var _ = this, M = !!I.u(k) || k, m = I.p(w), x = function(B, j) {
          var X = I.w(_.$u ? Date.UTC(_.$y, j, B) : new Date(_.$y, j, B), _);
          return M ? X : X.endOf(c);
        }, A = function(B, j) {
          return I.w(_.toDate()[B].apply(_.toDate("s"), (M ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(j)), _);
        }, R = this.$W, N = this.$M, F = this.$D, Y = "set" + (this.$u ? "UTC" : "");
        switch (m) {
          case g:
            return M ? x(1, 0) : x(31, 11);
          case d:
            return M ? x(1, N) : x(0, N + 1);
          case l:
            var U = this.$locale().weekStart || 0, V = (R < U ? R + 7 : R) - U;
            return x(M ? F - V : F + (6 - V), N);
          case c:
          case b:
            return A(Y + "Hours", 0);
          case u:
            return A(Y + "Minutes", 1);
          case a:
            return A(Y + "Seconds", 2);
          case i:
            return A(Y + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function(w) {
        return this.startOf(w, !1);
      }, E.$set = function(w, k) {
        var _, M = I.p(w), m = "set" + (this.$u ? "UTC" : ""), x = (_ = {}, _[c] = m + "Date", _[b] = m + "Date", _[d] = m + "Month", _[g] = m + "FullYear", _[u] = m + "Hours", _[a] = m + "Minutes", _[i] = m + "Seconds", _[o] = m + "Milliseconds", _)[M], A = M === c ? this.$D + (k - this.$W) : k;
        if (M === d || M === g) {
          var R = this.clone().set(b, 1);
          R.$d[x](A), R.init(), this.$d = R.set(b, Math.min(this.$D, R.daysInMonth())).$d;
        } else
          x && this.$d[x](A);
        return this.init(), this;
      }, E.set = function(w, k) {
        return this.clone().$set(w, k);
      }, E.get = function(w) {
        return this[I.p(w)]();
      }, E.add = function(w, k) {
        var _, M = this;
        w = Number(w);
        var m = I.p(k), x = function(N) {
          var F = H(M);
          return I.w(F.date(F.date() + Math.round(N * w)), M);
        };
        if (m === d)
          return this.set(d, this.$M + w);
        if (m === g)
          return this.set(g, this.$y + w);
        if (m === c)
          return x(1);
        if (m === l)
          return x(7);
        var A = (_ = {}, _[a] = r, _[u] = s, _[i] = n, _)[m] || 1, R = this.$d.getTime() + w * A;
        return I.w(R, this);
      }, E.subtract = function(w, k) {
        return this.add(-1 * w, k);
      }, E.format = function(w) {
        var k = this, _ = this.$locale();
        if (!this.isValid())
          return _.invalidDate || h;
        var M = w || "YYYY-MM-DDTHH:mm:ssZ", m = I.z(this), x = this.$H, A = this.$m, R = this.$M, N = _.weekdays, F = _.months, Y = _.meridiem, U = function(j, X, v, ne) {
          return j && (j[X] || j(k, M)) || v[X].slice(0, ne);
        }, V = function(j) {
          return I.s(x % 12 || 12, j, "0");
        }, B = Y || function(j, X, v) {
          var ne = j < 12 ? "AM" : "PM";
          return v ? ne.toLowerCase() : ne;
        };
        return M.replace(S, function(j, X) {
          return X || function(v) {
            switch (v) {
              case "YY":
                return String(k.$y).slice(-2);
              case "YYYY":
                return I.s(k.$y, 4, "0");
              case "M":
                return R + 1;
              case "MM":
                return I.s(R + 1, 2, "0");
              case "MMM":
                return U(_.monthsShort, R, F, 3);
              case "MMMM":
                return U(F, R);
              case "D":
                return k.$D;
              case "DD":
                return I.s(k.$D, 2, "0");
              case "d":
                return String(k.$W);
              case "dd":
                return U(_.weekdaysMin, k.$W, N, 2);
              case "ddd":
                return U(_.weekdaysShort, k.$W, N, 3);
              case "dddd":
                return N[k.$W];
              case "H":
                return String(x);
              case "HH":
                return I.s(x, 2, "0");
              case "h":
                return V(1);
              case "hh":
                return V(2);
              case "a":
                return B(x, A, !0);
              case "A":
                return B(x, A, !1);
              case "m":
                return String(A);
              case "mm":
                return I.s(A, 2, "0");
              case "s":
                return String(k.$s);
              case "ss":
                return I.s(k.$s, 2, "0");
              case "SSS":
                return I.s(k.$ms, 3, "0");
              case "Z":
                return m;
            }
            return null;
          }(j) || m.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function(w, k, _) {
        var M, m = this, x = I.p(k), A = H(w), R = (A.utcOffset() - this.utcOffset()) * r, N = this - A, F = function() {
          return I.m(m, A);
        };
        switch (x) {
          case g:
            M = F() / 12;
            break;
          case d:
            M = F();
            break;
          case f:
            M = F() / 3;
            break;
          case l:
            M = (N - R) / 6048e5;
            break;
          case c:
            M = (N - R) / 864e5;
            break;
          case u:
            M = N / s;
            break;
          case a:
            M = N / r;
            break;
          case i:
            M = N / n;
            break;
          default:
            M = N;
        }
        return _ ? M : I.a(M);
      }, E.daysInMonth = function() {
        return this.endOf(d).$D;
      }, E.$locale = function() {
        return L[this.$L];
      }, E.locale = function(w, k) {
        if (!w)
          return this.$L;
        var _ = this.clone(), M = ee(w, k, !0);
        return M && (_.$L = M), _;
      }, E.clone = function() {
        return I.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, P;
    }(), ie = oe.prototype;
    return H.prototype = ie, [["$ms", o], ["$s", i], ["$m", a], ["$H", u], ["$W", c], ["$M", d], ["$y", g], ["$D", b]].forEach(function(P) {
      ie[P[1]] = function(E) {
        return this.$g(E, P[0], P[1]);
      };
    }), H.extend = function(P, E) {
      return P.$i || (P(E, oe, H), P.$i = !0), H;
    }, H.locale = ee, H.isDayjs = te, H.unix = function(P) {
      return H(1e3 * P);
    }, H.en = L[p], H.Ls = L, H.p = {}, H;
  });
})(Rs);
var Ds = Rs.exports;
const de = /* @__PURE__ */ De(Ds);
var Ns = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Me, function() {
    var n = "week", r = "year";
    return function(s, o, i) {
      var a = o.prototype;
      a.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var l = i(this).startOf(r).add(1, r).date(c), d = i(this).endOf(n);
          if (l.isBefore(d))
            return 1;
        }
        var f = i(this).startOf(r).date(c).startOf(n).subtract(1, "millisecond"), g = this.diff(f, n, !0);
        return g < 0 ? i(this).startOf("week").week() : Math.ceil(g);
      }, a.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(Ns);
var Au = Ns.exports;
const Ru = /* @__PURE__ */ De(Au);
var Ls = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Me, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, o = /\d\d/, i = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, u = {}, c = function(y) {
      return (y = +y) + (y > 68 ? 1900 : 2e3);
    }, l = function(y) {
      return function(S) {
        this[y] = +S;
      };
    }, d = [/[+-]\d\d:?(\d\d)?|Z/, function(y) {
      (this.zone || (this.zone = {})).offset = function(S) {
        if (!S || S === "Z")
          return 0;
        var $ = S.match(/([+-]|\d\d)/g), O = 60 * $[1] + (+$[2] || 0);
        return O === 0 ? 0 : $[0] === "+" ? -O : O;
      }(y);
    }], f = function(y) {
      var S = u[y];
      return S && (S.indexOf ? S : S.s.concat(S.f));
    }, g = function(y, S) {
      var $, O = u.meridiem;
      if (O) {
        for (var C = 1; C <= 24; C += 1)
          if (y.indexOf(O(C, 0, S)) > -1) {
            $ = C > 12;
            break;
          }
      } else
        $ = y === (S ? "pm" : "PM");
      return $;
    }, b = { A: [a, function(y) {
      this.afternoon = g(y, !1);
    }], a: [a, function(y) {
      this.afternoon = g(y, !0);
    }], Q: [s, function(y) {
      this.month = 3 * (y - 1) + 1;
    }], S: [s, function(y) {
      this.milliseconds = 100 * +y;
    }], SS: [o, function(y) {
      this.milliseconds = 10 * +y;
    }], SSS: [/\d{3}/, function(y) {
      this.milliseconds = +y;
    }], s: [i, l("seconds")], ss: [i, l("seconds")], m: [i, l("minutes")], mm: [i, l("minutes")], H: [i, l("hours")], h: [i, l("hours")], HH: [i, l("hours")], hh: [i, l("hours")], D: [i, l("day")], DD: [o, l("day")], Do: [a, function(y) {
      var S = u.ordinal, $ = y.match(/\d+/);
      if (this.day = $[0], S)
        for (var O = 1; O <= 31; O += 1)
          S(O).replace(/\[|\]/g, "") === y && (this.day = O);
    }], w: [i, l("week")], ww: [o, l("week")], M: [i, l("month")], MM: [o, l("month")], MMM: [a, function(y) {
      var S = f("months"), $ = (f("monthsShort") || S.map(function(O) {
        return O.slice(0, 3);
      })).indexOf(y) + 1;
      if ($ < 1)
        throw new Error();
      this.month = $ % 12 || $;
    }], MMMM: [a, function(y) {
      var S = f("months").indexOf(y) + 1;
      if (S < 1)
        throw new Error();
      this.month = S % 12 || S;
    }], Y: [/[+-]?\d+/, l("year")], YY: [o, function(y) {
      this.year = c(y);
    }], YYYY: [/\d{4}/, l("year")], Z: d, ZZ: d };
    function h(y) {
      var S, $;
      S = y, $ = u && u.formats;
      for (var O = (y = S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(H, I, oe) {
        var ie = oe && oe.toUpperCase();
        return I || $[oe] || n[oe] || $[ie].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(P, E, w) {
          return E || w.slice(1);
        });
      })).match(r), C = O.length, p = 0; p < C; p += 1) {
        var L = O[p], D = b[L], te = D && D[0], ee = D && D[1];
        O[p] = ee ? { regex: te, parser: ee } : L.replace(/^\[|\]$/g, "");
      }
      return function(H) {
        for (var I = {}, oe = 0, ie = 0; oe < C; oe += 1) {
          var P = O[oe];
          if (typeof P == "string")
            ie += P.length;
          else {
            var E = P.regex, w = P.parser, k = H.slice(ie), _ = E.exec(k)[0];
            w.call(I, _), H = H.replace(_, "");
          }
        }
        return function(M) {
          var m = M.afternoon;
          if (m !== void 0) {
            var x = M.hours;
            m ? x < 12 && (M.hours += 12) : x === 12 && (M.hours = 0), delete M.afternoon;
          }
        }(I), I;
      };
    }
    return function(y, S, $) {
      $.p.customParseFormat = !0, y && y.parseTwoDigitYear && (c = y.parseTwoDigitYear);
      var O = S.prototype, C = O.parse;
      O.parse = function(p) {
        var L = p.date, D = p.utc, te = p.args;
        this.$u = D;
        var ee = te[1];
        if (typeof ee == "string") {
          var H = te[2] === !0, I = te[3] === !0, oe = H || I, ie = te[2];
          I && (ie = te[2]), u = this.$locale(), !H && ie && (u = $.Ls[ie]), this.$d = function(k, _, M, m) {
            try {
              if (["x", "X"].indexOf(_) > -1)
                return new Date((_ === "X" ? 1e3 : 1) * k);
              var x = h(_)(k), A = x.year, R = x.month, N = x.day, F = x.hours, Y = x.minutes, U = x.seconds, V = x.milliseconds, B = x.zone, j = x.week, X = /* @__PURE__ */ new Date(), v = N || (A || R ? 1 : X.getDate()), ne = A || X.getFullYear(), ge = 0;
              A && !R || (ge = R > 0 ? R - 1 : X.getMonth());
              var Oe, Wt = F || 0, Ht = Y || 0, qt = U || 0, Kt = V || 0;
              return B ? new Date(Date.UTC(ne, ge, v, Wt, Ht, qt, Kt + 60 * B.offset * 1e3)) : M ? new Date(Date.UTC(ne, ge, v, Wt, Ht, qt, Kt)) : (Oe = new Date(ne, ge, v, Wt, Ht, qt, Kt), j && (Oe = m(Oe).week(j).toDate()), Oe);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(L, ee, D, $), this.init(), ie && ie !== !0 && (this.$L = this.locale(ie).$L), oe && L != this.format(ee) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
        } else if (ee instanceof Array)
          for (var P = ee.length, E = 1; E <= P; E += 1) {
            te[1] = ee[E - 1];
            var w = $.apply(this, te);
            if (w.isValid()) {
              this.$d = w.$d, this.$L = w.$L, this.init();
              break;
            }
            E === P && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          C.call(this, p);
      };
    };
  });
})(Ls);
var Du = Ls.exports;
const Nu = /* @__PURE__ */ De(Du);
var js = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Me, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(r, s, o) {
      var i = s.prototype, a = i.format;
      o.en.formats = n, i.format = function(u) {
        u === void 0 && (u = "YYYY-MM-DDTHH:mm:ssZ");
        var c = this.$locale().formats, l = function(d, f) {
          return d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(g, b, h) {
            var y = h && h.toUpperCase();
            return b || f[h] || n[h] || f[y].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(S, $, O) {
              return $ || O.slice(1);
            });
          });
        }(u, c === void 0 ? {} : c);
        return a.call(this, l);
      };
    };
  });
})(js);
var Lu = js.exports;
const ju = /* @__PURE__ */ De(Lu);
var Is = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Me, function() {
    return function(n, r, s) {
      r.prototype.isBetween = function(o, i, a, u) {
        var c = s(o), l = s(i), d = (u = u || "()")[0] === "(", f = u[1] === ")";
        return (d ? this.isAfter(c, a) : !this.isBefore(c, a)) && (f ? this.isBefore(l, a) : !this.isAfter(l, a)) || (d ? this.isBefore(c, a) : !this.isAfter(c, a)) && (f ? this.isAfter(l, a) : !this.isBefore(l, a));
      };
    };
  });
})(Is);
var Iu = Is.exports;
const Fu = /* @__PURE__ */ De(Iu);
var Fs = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Me, function() {
    return function(n, r) {
      var s = r.prototype, o = s.format;
      s.format = function(i) {
        var a = this, u = this.$locale();
        if (!this.isValid())
          return o.bind(this)(i);
        var c = this.$utils(), l = (i || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(d) {
          switch (d) {
            case "Q":
              return Math.ceil((a.$M + 1) / 3);
            case "Do":
              return u.ordinal(a.$D);
            case "gggg":
              return a.weekYear();
            case "GGGG":
              return a.isoWeekYear();
            case "wo":
              return u.ordinal(a.week(), "W");
            case "w":
            case "ww":
              return c.s(a.week(), d === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(a.isoWeek(), d === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(a.$H === 0 ? 24 : a.$H), d === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(a.$d.getTime() / 1e3);
            case "x":
              return a.$d.getTime();
            case "z":
              return "[" + a.offsetName() + "]";
            case "zzz":
              return "[" + a.offsetName("long") + "]";
            default:
              return d;
          }
        });
        return o.bind(this)(l);
      };
    };
  });
})(Fs);
var Yu = Fs.exports;
const Uu = /* @__PURE__ */ De(Yu);
de.extend(ju);
de.extend(Ru);
de.extend(Fu);
de.extend(Uu);
const zu = Mu(["Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale"]), Vu = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, Bu = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  dayOfMonthFull: "Do",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, or = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), vn = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Wu = (e, t) => t ? (...n) => e(...n).locale(t) : e;
class Hu {
  constructor({
    locale: t,
    formats: n
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = Vu, this.setLocaleToValue = (r) => {
      const s = this.getCurrentLocaleCode();
      return s === r.locale() ? r : r.locale(s);
    }, this.hasUTCPlugin = () => typeof de.utc < "u", this.hasTimezonePlugin = () => typeof de.tz < "u", this.isSame = (r, s, o) => {
      const i = this.setTimezone(s, this.getTimezone(r));
      return r.format(o) === i.format(o);
    }, this.cleanTimezone = (r) => {
      switch (r) {
        case "default":
          return;
        case "system":
          return de.tz.guess();
        default:
          return r;
      }
    }, this.createSystemDate = (r) => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const s = de.tz.guess();
        return s !== "UTC" ? de.tz(r, s) : de(r);
      }
      return de(r);
    }, this.createUTCDate = (r) => {
      if (!this.hasUTCPlugin())
        throw new Error(or);
      return de.utc(r);
    }, this.createTZDate = (r, s) => {
      if (!this.hasUTCPlugin())
        throw new Error(or);
      if (!this.hasTimezonePlugin())
        throw new Error(vn);
      const o = r !== void 0 && !r.endsWith("Z");
      return de(r).tz(this.cleanTimezone(s), o);
    }, this.getLocaleFormats = () => {
      const r = de.Ls, s = this.locale || "en";
      let o = r[s];
      return o === void 0 && (zu(), o = r.en), o.formats;
    }, this.adjustOffset = (r) => {
      if (!this.hasTimezonePlugin())
        return r;
      const s = this.getTimezone(r);
      if (s !== "UTC") {
        const o = r.tz(this.cleanTimezone(s), !0);
        if ((o.$offset ?? 0) === (r.$offset ?? 0))
          return r;
        r.$offset = o.$offset;
      }
      return r;
    }, this.date = (r, s = "default") => {
      if (r === null)
        return null;
      let o;
      return s === "UTC" ? o = this.createUTCDate(r) : s === "system" || s === "default" && !this.hasTimezonePlugin() ? o = this.createSystemDate(r) : o = this.createTZDate(r, s), this.locale === void 0 ? o : o.locale(this.locale);
    }, this.getInvalidDate = () => de(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (r) => {
      var s;
      if (this.hasTimezonePlugin()) {
        const o = (s = r.$x) == null ? void 0 : s.$timezone;
        if (o)
          return o;
      }
      return this.hasUTCPlugin() && r.isUTC() ? "UTC" : "system";
    }, this.setTimezone = (r, s) => {
      if (this.getTimezone(r) === s)
        return r;
      if (s === "UTC") {
        if (!this.hasUTCPlugin())
          throw new Error(or);
        return r.utc();
      }
      if (s === "system")
        return r.local();
      if (!this.hasTimezonePlugin()) {
        if (s === "default")
          return r;
        throw new Error(vn);
      }
      return de.tz(r, this.cleanTimezone(s));
    }, this.toJsDate = (r) => r.toDate(), this.parse = (r, s) => r === "" ? null : this.dayjs(r, s, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (r) => {
      const s = this.getLocaleFormats(), o = (i) => i.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (a, u, c) => u || c.slice(1));
      return r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (i, a, u) => {
        const c = u && u.toUpperCase();
        return a || s[u] || o(s[c]);
      });
    }, this.isValid = (r) => r == null ? !1 : r.isValid(), this.format = (r, s) => this.formatByString(r, this.formats[s]), this.formatByString = (r, s) => this.dayjs(r).format(s), this.formatNumber = (r) => r, this.isEqual = (r, s) => r === null && s === null ? !0 : r === null || s === null ? !1 : r.toDate().getTime() === s.toDate().getTime(), this.isSameYear = (r, s) => this.isSame(r, s, "YYYY"), this.isSameMonth = (r, s) => this.isSame(r, s, "YYYY-MM"), this.isSameDay = (r, s) => this.isSame(r, s, "YYYY-MM-DD"), this.isSameHour = (r, s) => r.isSame(s, "hour"), this.isAfter = (r, s) => r > s, this.isAfterYear = (r, s) => this.hasUTCPlugin() ? !this.isSameYear(r, s) && r.utc() > s.utc() : r.isAfter(s, "year"), this.isAfterDay = (r, s) => this.hasUTCPlugin() ? !this.isSameDay(r, s) && r.utc() > s.utc() : r.isAfter(s, "day"), this.isBefore = (r, s) => r < s, this.isBeforeYear = (r, s) => this.hasUTCPlugin() ? !this.isSameYear(r, s) && r.utc() < s.utc() : r.isBefore(s, "year"), this.isBeforeDay = (r, s) => this.hasUTCPlugin() ? !this.isSameDay(r, s) && r.utc() < s.utc() : r.isBefore(s, "day"), this.isWithinRange = (r, [s, o]) => r >= s && r <= o, this.startOfYear = (r) => this.adjustOffset(r.startOf("year")), this.startOfMonth = (r) => this.adjustOffset(r.startOf("month")), this.startOfWeek = (r) => this.adjustOffset(r.startOf("week")), this.startOfDay = (r) => this.adjustOffset(r.startOf("day")), this.endOfYear = (r) => this.adjustOffset(r.endOf("year")), this.endOfMonth = (r) => this.adjustOffset(r.endOf("month")), this.endOfWeek = (r) => this.adjustOffset(r.endOf("week")), this.endOfDay = (r) => this.adjustOffset(r.endOf("day")), this.addYears = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "year") : r.add(s, "year")), this.addMonths = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "month") : r.add(s, "month")), this.addWeeks = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "week") : r.add(s, "week")), this.addDays = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "day") : r.add(s, "day")), this.addHours = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "hour") : r.add(s, "hour")), this.addMinutes = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "minute") : r.add(s, "minute")), this.addSeconds = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "second") : r.add(s, "second")), this.getYear = (r) => r.year(), this.getMonth = (r) => r.month(), this.getDate = (r) => r.date(), this.getHours = (r) => r.hour(), this.getMinutes = (r) => r.minute(), this.getSeconds = (r) => r.second(), this.getMilliseconds = (r) => r.millisecond(), this.setYear = (r, s) => this.adjustOffset(r.set("year", s)), this.setMonth = (r, s) => this.adjustOffset(r.set("month", s)), this.setDate = (r, s) => this.adjustOffset(r.set("date", s)), this.setHours = (r, s) => this.adjustOffset(r.set("hour", s)), this.setMinutes = (r, s) => this.adjustOffset(r.set("minute", s)), this.setSeconds = (r, s) => this.adjustOffset(r.set("second", s)), this.setMilliseconds = (r, s) => this.adjustOffset(r.set("millisecond", s)), this.getDaysInMonth = (r) => r.daysInMonth(), this.getWeekArray = (r) => {
      const s = this.setLocaleToValue(r), o = this.startOfWeek(this.startOfMonth(s)), i = this.endOfWeek(this.endOfMonth(s));
      let a = 0, u = o;
      const c = [];
      for (; u < i; ) {
        const l = Math.floor(a / 7);
        c[l] = c[l] || [], c[l].push(u), u = this.addDays(u, 1), a += 1;
      }
      return c;
    }, this.getWeekNumber = (r) => r.week(), this.getYearRange = ([r, s]) => {
      const o = this.startOfYear(r), i = this.endOfYear(s), a = [];
      let u = o;
      for (; this.isBefore(u, i); )
        a.push(u), u = this.addYears(u, 1);
      return a;
    }, this.dayjs = Wu(de, t), this.locale = t, this.formats = W({}, Bu, n), de.extend(Nu);
  }
  getDayOfWeek(t) {
    return t.day() + 1;
  }
}
const qu = {
  components: {
    MuiBreadcrumbs: {
      defaultProps: {
        expandText: "Εμφάνιση διαδρομής"
      }
    },
    MuiTablePagination: {
      defaultProps: {
        getItemAriaLabel: (e) => e === "first" ? "Πρώτη σελίδα" : e === "last" ? "Τελευταία σελίδα" : e === "next" ? "Επόμενη σελίδα" : "Προηγούμενη σελίδα",
        labelRowsPerPage: "Γραμμές ανα σελίδα:",
        labelDisplayedRows: ({
          from: e,
          to: t,
          count: n
        }) => `${e}–${t} από ${n !== -1 ? n : `πάνω από ${t}`}`
      }
    },
    MuiRating: {
      defaultProps: {
        getLabelText: (e) => `${e} Αστέρι${e !== 1 ? "α" : ""}`,
        emptyLabelText: "Χωρίς βαθμολόγηση"
      }
    },
    MuiAutocomplete: {
      defaultProps: {
        clearText: "Καθαρισμός",
        closeText: "Κλείσιμο",
        loadingText: "Φόρτωση…",
        noOptionsText: "Δεν υπάρχουν επιλογές",
        openText: "Άνοιγμα"
      }
    },
    MuiAlert: {
      defaultProps: {
        closeText: "Κλείσιμο"
      }
    },
    MuiPagination: {
      defaultProps: {
        "aria-label": "Πλοήγηση σε σελίδες",
        getItemAriaLabel: (e, t, n) => e === "page" ? `${n ? "" : "Μετάβαση "}σελίδα ${t}` : e === "first" ? "Πρώτη σελίδα" : e === "last" ? "Τελευταία σελίδα" : e === "next" ? "Επόμενη σελίδα" : "Προηγούμενη σελίδα"
      }
    }
  }
}, Ku = {
  /*
  components: {
    MuiBreadcrumbs: { defaultProps: {
      expandText: 'Show path',
    }},
    MuiTablePagination: { defaultProps: {
      getItemAriaLabel: (type) => {
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) =>
  `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`,
    }},
    MuiRating: { defaultProps: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    }},
    MuiAutocomplete: { defaultProps: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    }},
    MuiAlert: { defaultProps: {
      closeText: 'Close',
    }},
    MuiPagination: {  defaultProps: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        // if (type === 'previous') {
        return 'Go to previous page';
      },
    }},
  },
  */
};
var Gu = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Me, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(n) {
      var r = ["th", "st", "nd", "rd"], s = n % 100;
      return "[" + n + (r[(s - 20) % 10] || r[s] || r[0]) + "]";
    } };
  });
})(Gu);
var Ju = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r(Ds);
  })(Me, function(n) {
    function r(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var s = r(n), o = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(i) {
      return i;
    }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
    return s.default.locale(o, null, !0), o;
  });
})(Ju);
const Ys = {
  primary: Tu,
  secondary: Eu
}, Us = (e = "light") => {
  let t, n, r;
  return e === "dark" ? (t = "#6b6b6b", n = "#2b2b2b", r = "#959595") : (t = "#b2b1af", n = "#f1efef", r = "#959595"), {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${t} ${n}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: n
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: t,
            minHeight: 24,
            border: `2px solid ${n}`
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: r
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: r
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: r
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: n
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: e === "light" ? "#f7f7f7" : "",
          transition: "background-color, box-shadow",
          "&:hover": {
            backgroundColor: (s) => s.palette.action.hover,
            boxShadow: (s) => s.shadows[4]
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          borderRadius: "7px",
          paddingRight: "30px;",
          paddingLeft: "30px;"
        }
      }
    }
  };
}, Zu = {
  palette: {
    mode: "light",
    ...Ys,
    background: {
      default: "#e5e3e3",
      paper: "#FEFEFE"
    }
  },
  components: Us("light")
}, Qu = {
  components: Us("dark"),
  palette: {
    mode: "dark",
    background: {
      default: "#170a1a",
      paper: "#252525"
    },
    ...Ys
  }
}, Xu = {
  light: Zu,
  dark: Qu
};
function ec(e) {
  return Xu[e];
}
const tc = In({
  currentTheme: "dark",
  toggleTheme: () => null
}), rc = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  }
};
class _t {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = n.prefix || "i18next:", this.logger = t || rc, this.options = n, this.debug = n.debug;
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, n, r, s) {
    return s && !this.debug ? null : (typeof t[0] == "string" && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new _t(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new _t(this.logger, t);
  }
}
var Ce = new _t();
class Bt {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const s = this.observers[r].get(n) || 0;
      this.observers[r].set(n, s + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++)
      r[s - 1] = arguments[s];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((i) => {
      let [a, u] = i;
      for (let c = 0; c < u; c++)
        a(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((i) => {
      let [a, u] = i;
      for (let c = 0; c < u; c++)
        a.apply(a, [t, ...r]);
    });
  }
}
const Je = () => {
  let e, t;
  const n = new Promise((r, s) => {
    e = r, t = s;
  });
  return n.resolve = e, n.reject = t, n;
}, xn = (e) => e == null ? "" : "" + e, nc = (e, t, n) => {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}, sc = /###/g, Sn = (e) => e && e.indexOf("###") > -1 ? e.replace(sc, ".") : e, wn = (e) => !e || typeof e == "string", et = (e, t, n) => {
  const r = typeof t != "string" ? t : t.split(".");
  let s = 0;
  for (; s < r.length - 1; ) {
    if (wn(e))
      return {};
    const o = Sn(r[s]);
    !e[o] && n && (e[o] = new n()), Object.prototype.hasOwnProperty.call(e, o) ? e = e[o] : e = {}, ++s;
  }
  return wn(e) ? {} : {
    obj: e,
    k: Sn(r[s])
  };
}, _n = (e, t, n) => {
  const {
    obj: r,
    k: s
  } = et(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[s] = n;
    return;
  }
  let o = t[t.length - 1], i = t.slice(0, t.length - 1), a = et(e, i, Object);
  for (; a.obj === void 0 && i.length; )
    o = `${i[i.length - 1]}.${o}`, i = i.slice(0, i.length - 1), a = et(e, i, Object), a && a.obj && typeof a.obj[`${a.k}.${o}`] < "u" && (a.obj = void 0);
  a.obj[`${a.k}.${o}`] = n;
}, oc = (e, t, n, r) => {
  const {
    obj: s,
    k: o
  } = et(e, t, Object);
  s[o] = s[o] || [], s[o].push(n);
}, Ot = (e, t) => {
  const {
    obj: n,
    k: r
  } = et(e, t);
  if (n)
    return n[r];
}, ic = (e, t, n) => {
  const r = Ot(e, n);
  return r !== void 0 ? r : Ot(t, n);
}, zs = (e, t, n) => {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? typeof e[r] == "string" || e[r] instanceof String || typeof t[r] == "string" || t[r] instanceof String ? n && (e[r] = t[r]) : zs(e[r], t[r], n) : e[r] = t[r]);
  return e;
}, Ue = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var ac = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const uc = (e) => typeof e == "string" ? e.replace(/[&<>"'\/]/g, (t) => ac[t]) : e;
class cc {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const lc = [" ", ",", "?", "!", ";"], fc = new cc(20), dc = (e, t, n) => {
  t = t || "", n = n || "";
  const r = lc.filter((i) => t.indexOf(i) < 0 && n.indexOf(i) < 0);
  if (r.length === 0)
    return !0;
  const s = fc.getRegExp(`(${r.map((i) => i === "?" ? "\\?" : i).join("|")})`);
  let o = !s.test(e);
  if (!o) {
    const i = e.indexOf(n);
    i > 0 && !s.test(e.substring(0, i)) && (o = !0);
  }
  return o;
}, mr = function(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e)
    return;
  if (e[t])
    return e[t];
  const r = t.split(n);
  let s = e;
  for (let o = 0; o < r.length; ) {
    if (!s || typeof s != "object")
      return;
    let i, a = "";
    for (let u = o; u < r.length; ++u)
      if (u !== o && (a += n), a += r[u], i = s[a], i !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof i) > -1 && u < r.length - 1)
          continue;
        o += u - o + 1;
        break;
      }
    s = i;
  }
  return s;
}, Tt = (e) => e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
class On extends Bt {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, i = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let a;
    t.indexOf(".") > -1 ? a = t.split(".") : (a = [t, n], r && (Array.isArray(r) ? a.push(...r) : typeof r == "string" && o ? a.push(...r.split(o)) : a.push(r)));
    const u = Ot(this.data, a);
    return !u && !n && !r && t.indexOf(".") > -1 && (t = a[0], n = a[1], r = a.slice(2).join(".")), u || !i || typeof r != "string" ? u : mr(this.data && this.data[t] && this.data[t][n], r, o);
  }
  addResource(t, n, r, s) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const i = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let a = [t, n];
    r && (a = a.concat(i ? r.split(i) : r)), t.indexOf(".") > -1 && (a = t.split("."), s = n, n = a[1]), this.addNamespaces(n), _n(this.data, a, s), o.silent || this.emit("added", t, n, r, s);
  }
  addResources(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const o in r)
      (typeof r[o] == "string" || Array.isArray(r[o])) && this.addResource(t, n, o, r[o], {
        silent: !0
      });
    s.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, s, o) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, a = [t, n];
    t.indexOf(".") > -1 && (a = t.split("."), s = r, r = n, n = a[1]), this.addNamespaces(n);
    let u = Ot(this.data, a) || {};
    i.skipCopy || (r = JSON.parse(JSON.stringify(r))), s ? zs(u, r, o) : u = {
      ...u,
      ...r
    }, _n(this.data, a, u), i.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(t, n)
    } : this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((s) => n[s] && Object.keys(n[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Vs = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, s) {
    return e.forEach((o) => {
      this.processors[o] && (t = this.processors[o].process(t, n, r, s));
    }), t;
  }
};
const Tn = {};
class Et extends Bt {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), nc(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ce.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (t == null)
      return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const s = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let o = n.ns || this.options.defaultNS || [];
    const i = r && t.indexOf(r) > -1, a = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !dc(t, r, s);
    if (i && !a) {
      const u = t.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: t,
          namespaces: o
        };
      const c = t.split(r);
      (r !== s || r === s && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()), t = c.join(s);
    }
    return typeof o == "string" && (o = [o]), {
      key: t,
      namespaces: o
    };
  }
  translate(t, n, r) {
    if (typeof n != "object" && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), typeof n == "object" && (n = {
      ...n
    }), n || (n = {}), t == null)
      return "";
    Array.isArray(t) || (t = [String(t)]);
    const s = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails, o = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator, {
      key: i,
      namespaces: a
    } = this.extractFromKey(t[t.length - 1], n), u = a[a.length - 1], c = n.lng || this.language, l = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (c && c.toLowerCase() === "cimode") {
      if (l) {
        const C = n.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${u}${C}${i}`,
          usedKey: i,
          exactUsedKey: i,
          usedLng: c,
          usedNS: u,
          usedParams: this.getUsedParamsDetails(n)
        } : `${u}${C}${i}`;
      }
      return s ? {
        res: i,
        usedKey: i,
        exactUsedKey: i,
        usedLng: c,
        usedNS: u,
        usedParams: this.getUsedParamsDetails(n)
      } : i;
    }
    const d = this.resolve(t, n);
    let f = d && d.res;
    const g = d && d.usedKey || i, b = d && d.exactUsedKey || i, h = Object.prototype.toString.apply(f), y = ["[object Number]", "[object Function]", "[object RegExp]"], S = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays, $ = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if ($ && f && (typeof f != "string" && typeof f != "boolean" && typeof f != "number") && y.indexOf(h) < 0 && !(typeof S == "string" && Array.isArray(f))) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const C = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, f, {
          ...n,
          ns: a
        }) : `key '${i} (${this.language})' returned an object instead of string.`;
        return s ? (d.res = C, d.usedParams = this.getUsedParamsDetails(n), d) : C;
      }
      if (o) {
        const C = Array.isArray(f), p = C ? [] : {}, L = C ? b : g;
        for (const D in f)
          if (Object.prototype.hasOwnProperty.call(f, D)) {
            const te = `${L}${o}${D}`;
            p[D] = this.translate(te, {
              ...n,
              joinArrays: !1,
              ns: a
            }), p[D] === te && (p[D] = f[D]);
          }
        f = p;
      }
    } else if ($ && typeof S == "string" && Array.isArray(f))
      f = f.join(S), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let C = !1, p = !1;
      const L = n.count !== void 0 && typeof n.count != "string", D = Et.hasDefaultValue(n), te = L ? this.pluralResolver.getSuffix(c, n.count, n) : "", ee = n.ordinal && L ? this.pluralResolver.getSuffix(c, n.count, {
        ordinal: !1
      }) : "", H = L && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), I = H && n[`defaultValue${this.options.pluralSeparator}zero`] || n[`defaultValue${te}`] || n[`defaultValue${ee}`] || n.defaultValue;
      !this.isValidLookup(f) && D && (C = !0, f = I), this.isValidLookup(f) || (p = !0, f = i);
      const ie = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && p ? void 0 : f, P = D && I !== f && this.options.updateMissing;
      if (p || C || P) {
        if (this.logger.log(P ? "updateKey" : "missingKey", c, u, i, P ? I : f), o) {
          const _ = this.resolve(i, {
            ...n,
            keySeparator: !1
          });
          _ && _.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let E = [];
        const w = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && w && w[0])
          for (let _ = 0; _ < w.length; _++)
            E.push(w[_]);
        else
          this.options.saveMissingTo === "all" ? E = this.languageUtils.toResolveHierarchy(n.lng || this.language) : E.push(n.lng || this.language);
        const k = (_, M, m) => {
          const x = D && m !== f ? m : ie;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(_, u, M, x, P, n) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(_, u, M, x, P, n), this.emit("missingKey", _, u, M, f);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && L ? E.forEach((_) => {
          const M = this.pluralResolver.getSuffixes(_, n);
          H && n[`defaultValue${this.options.pluralSeparator}zero`] && M.indexOf(`${this.options.pluralSeparator}zero`) < 0 && M.push(`${this.options.pluralSeparator}zero`), M.forEach((m) => {
            k([_], i + m, n[`defaultValue${m}`] || I);
          });
        }) : k(E, i, I));
      }
      f = this.extendTranslation(f, t, n, d, r), p && f === i && this.options.appendNamespaceToMissingKey && (f = `${u}:${i}`), (p || C) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${u}:${i}` : i, C ? f : void 0) : f = this.options.parseMissingKeyHandler(f));
    }
    return s ? (d.res = f, d.usedParams = this.getUsedParamsDetails(n), d) : f;
  }
  extendTranslation(t, n, r, s, o) {
    var i = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const c = typeof t == "string" && (r && r.interpolation && r.interpolation.skipOnVariables !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let l;
      if (c) {
        const f = t.match(this.interpolator.nestingRegexp);
        l = f && f.length;
      }
      let d = r.replace && typeof r.replace != "string" ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (d = {
        ...this.options.interpolation.defaultVariables,
        ...d
      }), t = this.interpolator.interpolate(t, d, r.lng || this.language || s.usedLng, r), c) {
        const f = t.match(this.interpolator.nestingRegexp), g = f && f.length;
        l < g && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== "v1" && s && s.res && (r.lng = this.language || s.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var f = arguments.length, g = new Array(f), b = 0; b < f; b++)
          g[b] = arguments[b];
        return o && o[0] === g[0] && !r.context ? (i.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`), null) : i.translate(...g, n);
      }, r)), r.interpolation && this.interpolator.reset();
    }
    const a = r.postProcess || this.options.postProcess, u = typeof a == "string" ? [a] : a;
    return t != null && u && u.length && r.applyPostProcessor !== !1 && (t = Vs.handle(u, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r, s, o, i, a;
    return typeof t == "string" && (t = [t]), t.forEach((u) => {
      if (this.isValidLookup(r))
        return;
      const c = this.extractFromKey(u, n), l = c.key;
      s = l;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const f = n.count !== void 0 && typeof n.count != "string", g = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(), b = n.context !== void 0 && (typeof n.context == "string" || typeof n.context == "number") && n.context !== "", h = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((y) => {
        this.isValidLookup(r) || (a = y, !Tn[`${h[0]}-${y}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(a) && (Tn[`${h[0]}-${y}`] = !0, this.logger.warn(`key "${s}" for languages "${h.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach((S) => {
          if (this.isValidLookup(r))
            return;
          i = S;
          const $ = [l];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys($, l, S, y, n);
          else {
            let C;
            f && (C = this.pluralResolver.getSuffix(S, n.count, n));
            const p = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (f && ($.push(l + C), n.ordinal && C.indexOf(L) === 0 && $.push(l + C.replace(L, this.options.pluralSeparator)), g && $.push(l + p)), b) {
              const D = `${l}${this.options.contextSeparator}${n.context}`;
              $.push(D), f && ($.push(D + C), n.ordinal && C.indexOf(L) === 0 && $.push(D + C.replace(L, this.options.pluralSeparator)), g && $.push(D + p));
            }
          }
          let O;
          for (; O = $.pop(); )
            this.isValidLookup(r) || (o = O, r = this.getResource(S, y, O, n));
        }));
      });
    }), {
      res: r,
      usedKey: s,
      exactUsedKey: o,
      usedLng: i,
      usedNS: a
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, n, r, s) : this.resourceStore.getResource(t, n, r, s);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && typeof t.replace != "string";
    let s = r ? t.replace : t;
    if (r && typeof t.count < "u" && (s.count = t.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !r) {
      s = {
        ...s
      };
      for (const o of n)
        delete s[o];
    }
    return s;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
const ir = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class En {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ce.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Tt(t), !t || t.indexOf("-") < 0)
      return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Tt(t), !t || t.indexOf("-") < 0)
      return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == "string" && t.indexOf("-") > -1) {
      const n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let r = t.split("-");
      return this.options.lowerCaseLng ? r = r.map((s) => s.toLowerCase()) : r.length === 2 ? (r[0] = r[0].toLowerCase(), r[1] = r[1].toUpperCase(), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ir(r[1].toLowerCase()))) : r.length === 3 && (r[0] = r[0].toLowerCase(), r[1].length === 2 && (r[1] = r[1].toUpperCase()), r[0] !== "sgn" && r[2].length === 2 && (r[2] = r[2].toUpperCase()), n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = ir(r[1].toLowerCase())), n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = ir(r[2].toLowerCase()))), r.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t)
      return null;
    let n;
    return t.forEach((r) => {
      if (n)
        return;
      const s = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (n = s);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n)
        return;
      const s = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(s))
        return n = s;
      n = this.options.supportedLngs.find((o) => {
        if (o === s)
          return o;
        if (!(o.indexOf("-") < 0 && s.indexOf("-") < 0) && (o.indexOf("-") > 0 && s.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === s || o.indexOf(s) === 0 && s.length > 1))
          return o;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t)
      return [];
    if (typeof t == "function" && (t = t(n)), typeof t == "string" && (t = [t]), Array.isArray(t))
      return t;
    if (!n)
      return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t), s = [], o = (i) => {
      i && (this.isSupportedCode(i) ? s.push(i) : this.logger.warn(`rejecting language code not found in supportedLngs: ${i}`));
    };
    return typeof t == "string" && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && o(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && o(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && o(this.getLanguagePartFromCode(t))) : typeof t == "string" && o(this.formatLanguageCode(t)), r.forEach((i) => {
      s.indexOf(i) < 0 && o(this.formatLanguageCode(i));
    }), s;
  }
}
let pc = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], hc = {
  1: (e) => +(e > 1),
  2: (e) => +(e != 1),
  3: (e) => 0,
  4: (e) => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
  5: (e) => e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5,
  6: (e) => e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2,
  7: (e) => e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
  8: (e) => e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3,
  9: (e) => +(e >= 2),
  10: (e) => e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4,
  11: (e) => e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
  12: (e) => +(e % 10 != 1 || e % 100 == 11),
  13: (e) => +(e !== 0),
  14: (e) => e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3,
  15: (e) => e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
  16: (e) => e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2,
  17: (e) => e == 1 || e % 10 == 1 && e % 100 != 11 ? 0 : 1,
  18: (e) => e == 0 ? 0 : e == 1 ? 1 : 2,
  19: (e) => e == 1 ? 0 : e == 0 || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3,
  20: (e) => e == 1 ? 0 : e == 0 || e % 100 > 0 && e % 100 < 20 ? 1 : 2,
  21: (e) => e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0,
  22: (e) => e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
};
const mc = ["v1", "v2", "v3"], gc = ["v4"], Cn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, yc = () => {
  const e = {};
  return pc.forEach((t) => {
    t.lngs.forEach((n) => {
      e[n] = {
        numbers: t.nr,
        plurals: hc[t.fc]
      };
    });
  }), e;
};
class bc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = n, this.logger = Ce.create("pluralResolver"), (!this.options.compatibilityJSON || gc.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = yc(), this.pluralRulesCache = {};
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        const r = Tt(t === "dev" ? "en" : t), s = n.ordinal ? "ordinal" : "cardinal", o = JSON.stringify({
          cleanedCode: r,
          type: s
        });
        if (o in this.pluralRulesCache)
          return this.pluralRulesCache[o];
        const i = new Intl.PluralRules(r, {
          type: s
        });
        return this.pluralRulesCache[o] = i, i;
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map((s) => `${n}${s}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((s, o) => Cn[s] - Cn[o]).map((s) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : r.numbers.map((s) => this.getSuffix(t, s, n)) : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(t, r);
    return s ? this.shouldUseIntlApi() ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(n)}` : this.getSuffixRetroCompatible(s, n) : (this.logger.warn(`no plural rule found for: ${t}`), "");
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let s = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (s === 2 ? s = "plural" : s === 1 && (s = ""));
    const o = () => this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString();
    return this.options.compatibilityJSON === "v1" ? s === 1 ? "" : typeof s == "number" ? `_plural_${s.toString()}` : o() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 ? o() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
  }
  shouldUseIntlApi() {
    return !mc.includes(this.options.compatibilityJSON);
  }
}
const $n = function(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, o = ic(e, t, n);
  return !o && s && typeof n == "string" && (o = mr(e, n, r), o === void 0 && (o = mr(t, n, r))), o;
}, ar = (e) => e.replace(/\$/g, "$$$$");
class vc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Ce.create("interpolator"), this.options = t, this.format = t.interpolation && t.interpolation.format || ((n) => n), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: s,
      prefix: o,
      prefixEscaped: i,
      suffix: a,
      suffixEscaped: u,
      formatSeparator: c,
      unescapeSuffix: l,
      unescapePrefix: d,
      nestingPrefix: f,
      nestingPrefixEscaped: g,
      nestingSuffix: b,
      nestingSuffixEscaped: h,
      nestingOptionsSeparator: y,
      maxReplaces: S,
      alwaysFormat: $
    } = t.interpolation;
    this.escape = n !== void 0 ? n : uc, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = o ? Ue(o) : i || "{{", this.suffix = a ? Ue(a) : u || "}}", this.formatSeparator = c || ",", this.unescapePrefix = l ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : l || "", this.nestingPrefix = f ? Ue(f) : g || Ue("$t("), this.nestingSuffix = b ? Ue(b) : h || Ue(")"), this.nestingOptionsSeparator = y || ",", this.maxReplaces = S || 1e3, this.alwaysFormat = $ !== void 0 ? $ : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => n && n.source === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, s) {
    let o, i, a;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (g) => {
      if (g.indexOf(this.formatSeparator) < 0) {
        const S = $n(n, u, g, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(S, void 0, r, {
          ...s,
          ...n,
          interpolationkey: g
        }) : S;
      }
      const b = g.split(this.formatSeparator), h = b.shift().trim(), y = b.join(this.formatSeparator).trim();
      return this.format($n(n, u, h, this.options.keySeparator, this.options.ignoreJSONStructure), y, r, {
        ...s,
        ...n,
        interpolationkey: h
      });
    };
    this.resetRegExp();
    const l = s && s.missingInterpolationHandler || this.options.missingInterpolationHandler, d = s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (g) => ar(g)
    }, {
      regex: this.regexp,
      safeValue: (g) => this.escapeValue ? ar(this.escape(g)) : ar(g)
    }].forEach((g) => {
      for (a = 0; o = g.regex.exec(t); ) {
        const b = o[1].trim();
        if (i = c(b), i === void 0)
          if (typeof l == "function") {
            const y = l(t, o, s);
            i = typeof y == "string" ? y : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, b))
            i = "";
          else if (d) {
            i = o[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${b} for interpolating ${t}`), i = "";
        else
          typeof i != "string" && !this.useRawValueToEscape && (i = xn(i));
        const h = g.safeValue(i);
        if (t = t.replace(o[0], h), d ? (g.regex.lastIndex += i.length, g.regex.lastIndex -= o[0].length) : g.regex.lastIndex = 0, a++, a >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, o, i;
    const a = (u, c) => {
      const l = this.nestingOptionsSeparator;
      if (u.indexOf(l) < 0)
        return u;
      const d = u.split(new RegExp(`${l}[ ]*{`));
      let f = `{${d[1]}`;
      u = d[0], f = this.interpolate(f, i);
      const g = f.match(/'/g), b = f.match(/"/g);
      (g && g.length % 2 === 0 && !b || b.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        i = JSON.parse(f), c && (i = {
          ...c,
          ...i
        });
      } catch (h) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, h), `${u}${l}${f}`;
      }
      return i.defaultValue && i.defaultValue.indexOf(this.prefix) > -1 && delete i.defaultValue, u;
    };
    for (; s = this.nestingRegexp.exec(t); ) {
      let u = [];
      i = {
        ...r
      }, i = i.replace && typeof i.replace != "string" ? i.replace : i, i.applyPostProcessor = !1, delete i.defaultValue;
      let c = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const l = s[1].split(this.formatSeparator).map((d) => d.trim());
        s[1] = l.shift(), u = l, c = !0;
      }
      if (o = n(a.call(this, s[1].trim(), i), i), o && s[0] === t && typeof o != "string")
        return o;
      typeof o != "string" && (o = xn(o)), o || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`), o = ""), c && (o = u.reduce((l, d) => this.format(l, d, r.lng, {
        ...r,
        interpolationkey: s[1].trim()
      }), o.trim())), t = t.replace(s[0], o), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const xc = (e) => {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const s = r[1].substring(0, r[1].length - 1);
    t === "currency" && s.indexOf(":") < 0 ? n.currency || (n.currency = s.trim()) : t === "relativetime" && s.indexOf(":") < 0 ? n.range || (n.range = s.trim()) : s.split(";").forEach((i) => {
      if (i) {
        const [a, ...u] = i.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, ""), l = a.trim();
        n[l] || (n[l] = c), c === "false" && (n[l] = !1), c === "true" && (n[l] = !0), isNaN(c) || (n[l] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}, ze = (e) => {
  const t = {};
  return (n, r, s) => {
    let o = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (o = {
      ...o,
      [s.interpolationkey]: void 0
    });
    const i = r + JSON.stringify(o);
    let a = t[i];
    return a || (a = e(Tt(r), s), t[i] = a), a(n);
  };
};
class Sc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Ce.create("formatter"), this.options = t, this.formats = {
      number: ze((n, r) => {
        const s = new Intl.NumberFormat(n, {
          ...r
        });
        return (o) => s.format(o);
      }),
      currency: ze((n, r) => {
        const s = new Intl.NumberFormat(n, {
          ...r,
          style: "currency"
        });
        return (o) => s.format(o);
      }),
      datetime: ze((n, r) => {
        const s = new Intl.DateTimeFormat(n, {
          ...r
        });
        return (o) => s.format(o);
      }),
      relativetime: ze((n, r) => {
        const s = new Intl.RelativeTimeFormat(n, {
          ...r
        });
        return (o) => s.format(o, r.range || "day");
      }),
      list: ze((n, r) => {
        const s = new Intl.ListFormat(n, {
          ...r
        });
        return (o) => s.format(o);
      })
    }, this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ",";
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = ze(n);
  }
  format(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = n.split(this.formatSeparator);
    if (o.length > 1 && o[0].indexOf("(") > 1 && o[0].indexOf(")") < 0 && o.find((a) => a.indexOf(")") > -1)) {
      const a = o.findIndex((u) => u.indexOf(")") > -1);
      o[0] = [o[0], ...o.splice(1, a)].join(this.formatSeparator);
    }
    return o.reduce((a, u) => {
      const {
        formatName: c,
        formatOptions: l
      } = xc(u);
      if (this.formats[c]) {
        let d = a;
        try {
          const f = s && s.formatParams && s.formatParams[s.interpolationkey] || {}, g = f.locale || f.lng || s.locale || s.lng || r;
          d = this.formats[c](a, g, {
            ...l,
            ...s,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return d;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return a;
    }, t);
  }
}
const wc = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class _c extends Bt {
  constructor(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = s, this.logger = Ce.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(r, s.backend, s);
  }
  queueLoad(t, n, r, s) {
    const o = {}, i = {}, a = {}, u = {};
    return t.forEach((c) => {
      let l = !0;
      n.forEach((d) => {
        const f = `${c}|${d}`;
        !r.reload && this.store.hasResourceBundle(c, d) ? this.state[f] = 2 : this.state[f] < 0 || (this.state[f] === 1 ? i[f] === void 0 && (i[f] = !0) : (this.state[f] = 1, l = !1, i[f] === void 0 && (i[f] = !0), o[f] === void 0 && (o[f] = !0), u[d] === void 0 && (u[d] = !0)));
      }), l || (a[c] = !0);
    }), (Object.keys(o).length || Object.keys(i).length) && this.queue.push({
      pending: i,
      pendingCount: Object.keys(i).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(o),
      pending: Object.keys(i),
      toLoadLanguages: Object.keys(a),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(t, n, r) {
    const s = t.split("|"), o = s[0], i = s[1];
    n && this.emit("failedLoading", o, i, n), !n && r && this.store.addResourceBundle(o, i, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
    const a = {};
    this.queue.forEach((u) => {
      oc(u.loaded, [o], i), wc(u, t), n && u.errors.push(n), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((c) => {
        a[c] || (a[c] = {});
        const l = u.loaded[c];
        l.length && l.forEach((d) => {
          a[c][d] === void 0 && (a[c][d] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", a), this.queue = this.queue.filter((u) => !u.done);
  }
  read(t, n, r) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, i = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length)
      return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: s,
        wait: o,
        callback: i
      });
      return;
    }
    this.readingCalls++;
    const a = (c, l) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && l && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, s + 1, o * 2, i);
        }, o);
        return;
      }
      i(c, l);
    }, u = this.backend[r].bind(this.backend);
    if (u.length === 2) {
      try {
        const c = u(t, n);
        c && typeof c.then == "function" ? c.then((l) => a(null, l)).catch(a) : a(null, c);
      } catch (c) {
        a(c);
      }
      return;
    }
    return u(t, n, a);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    typeof t == "string" && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == "string" && (n = [n]);
    const o = this.queueLoad(t, n, r, s);
    if (!o.toLoad.length)
      return o.pending.length || s(), null;
    o.toLoad.forEach((i) => {
      this.loadOne(i);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const r = t.split("|"), s = r[0], o = r[1];
    this.read(s, o, "read", void 0, void 0, (i, a) => {
      i && this.logger.warn(`${n}loading namespace ${o} for language ${s} failed`, i), !i && a && this.logger.log(`${n}loaded namespace ${o} for language ${s}`, a), this.loaded(t, i, a);
    });
  }
  saveMissing(t, n, r, s, o) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, a = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if (this.backend && this.backend.create) {
        const u = {
          ...i,
          isUpdate: o
        }, c = this.backend.create.bind(this.backend);
        if (c.length < 6)
          try {
            let l;
            c.length === 5 ? l = c(t, n, r, s, u) : l = c(t, n, r, s), l && typeof l.then == "function" ? l.then((d) => a(null, d)).catch(a) : a(null, l);
          } catch (l) {
            a(l);
          }
        else
          c(t, n, r, s, a, u);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, s);
    }
  }
}
const kn = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const n = e[3] || e[2];
      Object.keys(n).forEach((r) => {
        t[r] = n[r];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Pn = (e) => (typeof e.ns == "string" && (e.ns = [e.ns]), typeof e.fallbackLng == "string" && (e.fallbackLng = [e.fallbackLng]), typeof e.fallbackNS == "string" && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e), ht = () => {
}, Oc = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
};
class ut extends Bt {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Pn(t), this.services = {}, this.logger = Ce, this.modules = {
      external: []
    }, Oc(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initImmediate)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof n == "function" && (r = n, n = {}), !n.defaultNS && n.defaultNS !== !1 && n.ns && (typeof n.ns == "string" ? n.defaultNS = n.ns : n.ns.indexOf("translation") < 0 && (n.defaultNS = n.ns[0]));
    const s = kn();
    this.options = {
      ...s,
      ...this.options,
      ...Pn(n)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }), n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator), n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    const o = (l) => l ? typeof l == "function" ? new l() : l : null;
    if (!this.options.isClone) {
      this.modules.logger ? Ce.init(o(this.modules.logger), this.options) : Ce.init(null, this.options);
      let l;
      this.modules.formatter ? l = this.modules.formatter : typeof Intl < "u" && (l = Sc);
      const d = new En(this.options);
      this.store = new On(this.options.resources, this.options);
      const f = this.services;
      f.logger = Ce, f.resourceStore = this.store, f.languageUtils = d, f.pluralResolver = new bc(d, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), l && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (f.formatter = o(l), f.formatter.init(f, this.options), this.options.interpolation.format = f.formatter.format.bind(f.formatter)), f.interpolator = new vc(this.options), f.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, f.backendConnector = new _c(o(this.modules.backend), f.resourceStore, f, this.options), f.backendConnector.on("*", function(g) {
        for (var b = arguments.length, h = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++)
          h[y - 1] = arguments[y];
        t.emit(g, ...h);
      }), this.modules.languageDetector && (f.languageDetector = o(this.modules.languageDetector), f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)), this.modules.i18nFormat && (f.i18nFormat = o(this.modules.i18nFormat), f.i18nFormat.init && f.i18nFormat.init(this)), this.translator = new Et(this.services, this.options), this.translator.on("*", function(g) {
        for (var b = arguments.length, h = new Array(b > 1 ? b - 1 : 0), y = 1; y < b; y++)
          h[y - 1] = arguments[y];
        t.emit(g, ...h);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = ht), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const l = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      l.length > 0 && l[0] !== "dev" && (this.options.lng = l[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((l) => {
      this[l] = function() {
        return t.store[l](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((l) => {
      this[l] = function() {
        return t.store[l](...arguments), t;
      };
    });
    const u = Je(), c = () => {
      const l = (d, f) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), u.resolve(f), r(d, f);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized)
        return l(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, l);
    };
    return this.options.resources || !this.options.initImmediate ? c() : setTimeout(c, 0), u;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht;
    const s = typeof t == "string" ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (s && s.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0))
        return r();
      const o = [], i = (a) => {
        if (!a || a === "cimode")
          return;
        this.services.languageUtils.toResolveHierarchy(a).forEach((c) => {
          c !== "cimode" && o.indexOf(c) < 0 && o.push(c);
        });
      };
      s ? i(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((u) => i(u)), this.options.preload && this.options.preload.forEach((a) => i(a)), this.services.backendConnector.load(o, this.options.ns, (a) => {
        !a && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(a);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const s = Je();
    return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = ht), this.services.backendConnector.reload(t, n, (o) => {
      s.resolve(), r(o);
    }), s;
  }
  use(t) {
    if (!t)
      throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type)
      throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Vs.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const s = Je();
    this.emit("languageChanging", t);
    const o = (u) => {
      this.language = u, this.languages = this.services.languageUtils.toResolveHierarchy(u), this.resolvedLanguage = void 0, this.setResolvedLanguage(u);
    }, i = (u, c) => {
      c ? (o(c), this.translator.changeLanguage(c), this.isLanguageChangingTo = void 0, this.emit("languageChanged", c), this.logger.log("languageChanged", c)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return r.t(...arguments);
      }), n && n(u, function() {
        return r.t(...arguments);
      });
    }, a = (u) => {
      !t && !u && this.services.languageDetector && (u = []);
      const c = typeof u == "string" ? u : this.services.languageUtils.getBestMatchFromCodes(u);
      c && (this.language || o(c), this.translator.language || this.translator.changeLanguage(c), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(c)), this.loadResources(c, (l) => {
        i(l, c);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), s;
  }
  getFixedT(t, n, r) {
    var s = this;
    const o = function(i, a) {
      let u;
      if (typeof a != "object") {
        for (var c = arguments.length, l = new Array(c > 2 ? c - 2 : 0), d = 2; d < c; d++)
          l[d - 2] = arguments[d];
        u = s.options.overloadTranslationOptionHandler([i, a].concat(l));
      } else
        u = {
          ...a
        };
      u.lng = u.lng || o.lng, u.lngs = u.lngs || o.lngs, u.ns = u.ns || o.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || r || o.keyPrefix);
      const f = s.options.keySeparator || ".";
      let g;
      return u.keyPrefix && Array.isArray(i) ? g = i.map((b) => `${u.keyPrefix}${f}${b}`) : g = u.keyPrefix ? `${u.keyPrefix}${f}${i}` : i, s.t(g, u);
    };
    return typeof t == "string" ? o.lng = t : o.lngs = t, o.ns = n, o.keyPrefix = r, o;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, o = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode")
      return !0;
    const i = (a, u) => {
      const c = this.services.backendConnector.state[`${a}|${u}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const a = n.precheck(this, i);
      if (a !== void 0)
        return a;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(r, t) && (!s || i(o, t)));
  }
  loadNamespaces(t, n) {
    const r = Je();
    return this.options.ns ? (typeof t == "string" && (t = [t]), t.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      r.resolve(), n && n(s);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Je();
    typeof t == "string" && (t = [t]);
    const s = this.options.preload || [], o = t.filter((i) => s.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i));
    return o.length ? (this.options.preload = s.concat(o), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t)
      return "rtl";
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = this.services && this.services.languageUtils || new En(kn());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    return new ut(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ht;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const s = {
      ...this.options,
      ...t,
      isClone: !0
    }, o = new ut(s);
    return (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)), ["store", "services", "language"].forEach((a) => {
      o[a] = this[a];
    }), o.services = {
      ...this.services
    }, o.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, r && (o.store = new On(this.store.data, s), o.services.resourceStore = o.store), o.translator = new Et(o.services, s), o.translator.on("*", function(a) {
      for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), l = 1; l < u; l++)
        c[l - 1] = arguments[l];
      o.emit(a, ...c);
    }), o.init(s, n), o.translator.options = s, o.translator.backendConnector.services.utils = {
      hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
    }, o;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const pe = ut.createInstance();
pe.createInstance = ut.createInstance;
pe.createInstance;
pe.dir;
pe.init;
pe.loadResources;
pe.reloadResources;
pe.use;
pe.changeLanguage;
pe.getFixedT;
pe.t;
pe.exists;
pe.setDefaultNamespace;
pe.hasLoadedNamespace;
pe.loadNamespaces;
pe.loadLanguages;
const Tc = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Ec = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, Cc = (e) => Ec[e], $c = (e) => e.replace(Tc, Cc);
let Mn = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: $c
};
const kc = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Mn = {
    ...Mn,
    ...e
  };
}, Pc = {
  type: "3rdParty",
  init(e) {
    kc(e.options.react);
  }
}, {
  slice: Mc,
  forEach: Ac
} = [];
function Rc(e) {
  return Ac.call(Mc.call(arguments, 1), (t) => {
    if (t)
      for (const n in t)
        e[n] === void 0 && (e[n] = t[n]);
  }), e;
}
const An = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, Dc = (e, t, n) => {
  const r = n || {};
  r.path = r.path || "/";
  const s = encodeURIComponent(t);
  let o = `${e}=${s}`;
  if (r.maxAge > 0) {
    const i = r.maxAge - 0;
    if (Number.isNaN(i))
      throw new Error("maxAge should be a Number");
    o += `; Max-Age=${Math.floor(i)}`;
  }
  if (r.domain) {
    if (!An.test(r.domain))
      throw new TypeError("option domain is invalid");
    o += `; Domain=${r.domain}`;
  }
  if (r.path) {
    if (!An.test(r.path))
      throw new TypeError("option path is invalid");
    o += `; Path=${r.path}`;
  }
  if (r.expires) {
    if (typeof r.expires.toUTCString != "function")
      throw new TypeError("option expires is invalid");
    o += `; Expires=${r.expires.toUTCString()}`;
  }
  if (r.httpOnly && (o += "; HttpOnly"), r.secure && (o += "; Secure"), r.sameSite)
    switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case !0:
        o += "; SameSite=Strict";
        break;
      case "lax":
        o += "; SameSite=Lax";
        break;
      case "strict":
        o += "; SameSite=Strict";
        break;
      case "none":
        o += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return o;
}, Rn = {
  create(e, t, n, r) {
    let s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      path: "/",
      sameSite: "strict"
    };
    n && (s.expires = /* @__PURE__ */ new Date(), s.expires.setTime(s.expires.getTime() + n * 60 * 1e3)), r && (s.domain = r), document.cookie = Dc(e, encodeURIComponent(t), s);
  },
  read(e) {
    const t = `${e}=`, n = document.cookie.split(";");
    for (let r = 0; r < n.length; r++) {
      let s = n[r];
      for (; s.charAt(0) === " "; )
        s = s.substring(1, s.length);
      if (s.indexOf(t) === 0)
        return s.substring(t.length, s.length);
    }
    return null;
  },
  remove(e) {
    this.create(e, "", -1);
  }
};
var Nc = {
  name: "cookie",
  // Deconstruct the options object and extract the lookupCookie property
  lookup(e) {
    let {
      lookupCookie: t
    } = e;
    if (t && typeof document < "u")
      return Rn.read(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(e, t) {
    let {
      lookupCookie: n,
      cookieMinutes: r,
      cookieDomain: s,
      cookieOptions: o
    } = t;
    n && typeof document < "u" && Rn.create(n, e, r, s, o);
  }
}, Lc = {
  name: "querystring",
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(e) {
    var r;
    let {
      lookupQuerystring: t
    } = e, n;
    if (typeof window < "u") {
      let {
        search: s
      } = window.location;
      !window.location.search && ((r = window.location.hash) == null ? void 0 : r.indexOf("?")) > -1 && (s = window.location.hash.substring(window.location.hash.indexOf("?")));
      const i = s.substring(1).split("&");
      for (let a = 0; a < i.length; a++) {
        const u = i[a].indexOf("=");
        u > 0 && i[a].substring(0, u) === t && (n = i[a].substring(u + 1));
      }
    }
    return n;
  }
};
let Ze = null;
const Dn = () => {
  if (Ze !== null)
    return Ze;
  try {
    Ze = window !== "undefined" && window.localStorage !== null;
    const e = "i18next.translate.boo";
    window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
  } catch {
    Ze = !1;
  }
  return Ze;
};
var jc = {
  name: "localStorage",
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(e) {
    let {
      lookupLocalStorage: t
    } = e;
    if (t && Dn())
      return window.localStorage.getItem(t) || void 0;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(e, t) {
    let {
      lookupLocalStorage: n
    } = t;
    n && Dn() && window.localStorage.setItem(n, e);
  }
};
let Qe = null;
const Nn = () => {
  if (Qe !== null)
    return Qe;
  try {
    Qe = window !== "undefined" && window.sessionStorage !== null;
    const e = "i18next.translate.boo";
    window.sessionStorage.setItem(e, "foo"), window.sessionStorage.removeItem(e);
  } catch {
    Qe = !1;
  }
  return Qe;
};
var Ic = {
  name: "sessionStorage",
  lookup(e) {
    let {
      lookupSessionStorage: t
    } = e;
    if (t && Nn())
      return window.sessionStorage.getItem(t) || void 0;
  },
  cacheUserLanguage(e, t) {
    let {
      lookupSessionStorage: n
    } = t;
    n && Nn() && window.sessionStorage.setItem(n, e);
  }
}, Fc = {
  name: "navigator",
  lookup(e) {
    const t = [];
    if (typeof navigator < "u") {
      const {
        languages: n,
        userLanguage: r,
        language: s
      } = navigator;
      if (n)
        for (let o = 0; o < n.length; o++)
          t.push(n[o]);
      r && t.push(r), s && t.push(s);
    }
    return t.length > 0 ? t : void 0;
  }
}, Yc = {
  name: "htmlTag",
  // Deconstruct the options object and extract the htmlTag property
  lookup(e) {
    let {
      htmlTag: t
    } = e, n;
    const r = t || (typeof document < "u" ? document.documentElement : null);
    return r && typeof r.getAttribute == "function" && (n = r.getAttribute("lang")), n;
  }
}, Uc = {
  name: "path",
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(e) {
    var s;
    let {
      lookupFromPathIndex: t
    } = e;
    if (typeof window > "u")
      return;
    const n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    return Array.isArray(n) ? (s = n[typeof t == "number" ? t : 0]) == null ? void 0 : s.replace("/", "") : void 0;
  }
}, zc = {
  name: "subdomain",
  lookup(e) {
    var s, o;
    let {
      lookupFromSubdomainIndex: t
    } = e;
    const n = typeof t == "number" ? t + 1 : 1, r = typeof window < "u" && ((o = (s = window.location) == null ? void 0 : s.hostname) == null ? void 0 : o.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));
    if (r)
      return r[n];
  }
};
function Vc() {
  return {
    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    // cache user language
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    // cookieMinutes: 10,
    // cookieDomain: 'myDomain'
    convertDetectedLanguage: (e) => e
  };
}
class Bs {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.type = "languageDetector", this.detectors = {}, this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    this.services = t || {
      languageUtils: {}
    }, this.options = Rc(n, this.options || {}, Vc()), typeof this.options.convertDetectedLanguage == "string" && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = (s) => s.replace("-", "_")), this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex), this.i18nOptions = r, this.addDetector(Nc), this.addDetector(Lc), this.addDetector(jc), this.addDetector(Ic), this.addDetector(Fc), this.addDetector(Yc), this.addDetector(Uc), this.addDetector(zc);
  }
  addDetector(t) {
    return this.detectors[t.name] = t, this;
  }
  detect(t) {
    t || (t = this.options.order);
    let n = [];
    return t.forEach((r) => {
      if (this.detectors[r]) {
        let s = this.detectors[r].lookup(this.options);
        s && typeof s == "string" && (s = [s]), s && (n = n.concat(s));
      }
    }), n = n.map((r) => this.options.convertDetectedLanguage(r)), this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null;
  }
  cacheUserLanguage(t, n) {
    n || (n = this.options.caches), n && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1 || n.forEach((r) => {
      this.detectors[r] && this.detectors[r].cacheUserLanguage(t, this.options);
    }));
  }
}
Bs.type = "languageDetector";
const Bc = "common", Wc = {
  homepage: "Αρχική",
  pool: "Λογαριασμός",
  employees: "Εργαζόμενοι",
  cards: "Κάρτες",
  solutions: "Καλάθι",
  transactions: "Reports",
  notifications: "Comms",
  billing: "Χρέωση & Αποστολή",
  billing_cards_order: "Προβολή"
}, Hc = {
  home: "Αρχική",
  pool: "Pool Accounts",
  employees: "Εργαζόμενοι",
  cards: "Κάρτες",
  reports: "Reports",
  comms: "Comms",
  shop: "Καλάθι",
  billing: "Χρέωση & Αποστολή",
  update_card: "Αναβάθμιση Κάρτας",
  create_employee: "Δημιουργία Εργαζομένου",
  add_pool_account: "Προσθήκη Νέου Pool Account",
  topUp_pool_account: "Προσθήκη Χρημάτων στον Pool Account",
  all_employees: "Όλοι οι εργαζόμενοι ({{number}})",
  transaction: "Συναλλαγή #"
}, qc = {
  logout: "Αποσύνδεση",
  search: "Αναζήτηση",
  save: "Αποθήκευση",
  close: "Κλείσιμο",
  yes: "Ναι",
  cancel: "Ακύρωση",
  submit: "Αποστολή",
  from: "Από",
  to: "Πρός",
  add_new: "Προσθήκη Νέου",
  back: "Πίσω",
  delete: "Διαγραφή",
  prev_step: "Προηγούμενο Βήμα",
  next_step: "Επομενο Βήμα",
  save_store: "Αποθηκευση καταστήματος",
  finish: "Τέλος",
  go_back: "Πίσω",
  skip: "Παράλειψη",
  cancel_import: "Ακύρωση Εισαγωγής",
  save_employees: "Αποθήκευση Εργαζομένων",
  import_new_employees: "Εισαγωγή Νέων Υπαλλήλων",
  start: "Έναρξη",
  import: "Εισαγωγή",
  save_draft: "Αποθήκευση σαν προσχέδιο",
  add_employee: "Προσθήκη Εργαζομένου",
  save_changes: "Αποθήκευση Αλλαγών",
  upgrade_card: "Αναβάθμιση Κάρτας",
  generate_spending_report: "Δημιουργία Report Δαπανών",
  generate_report: "Δημιουργία Report",
  upload_file: "Ανέβασμα Αρχείου",
  upload: "Ανέβασμα",
  navigate_to_billing: "Πίσω στο Ιστορικό Τιμολογίων",
  view_billing: "Προβολή τιμολογίου",
  select: "Επίλεξε",
  save_template: "Αποθήκευση προτύπου",
  continue_edit: "Συνέχεια Επεξεργασίας"
}, Kc = "Αν προχωρήσετε θα χάσετε όλη την πρόοδό σας. Είστε βέβαιοι ότι θέλετε να ακυρώσετε τη διαδικασία; ", Gc = "Βήμα 1: Επιλέξτε το τελικό αρχείο excel στη μορφή που παρέχεται. ", Jc = "Έληξε", Zc = "Προειδοποίηση", Qc = "Χρέωση", Xc = "Όριο", el = "Σας ευχαριστούμε!", tl = "μηνιαία", rl = {
  max_address_description: "Η περιγραφή της διεύθυνσης δεν πρέπει να ξεπερνά τους 150 χαρακτήρες",
  matches_address_description: "Το πεδίο μπορεί να περιέχει μόνο ελληνικούς χαρακτήρες, αριθμούς και κενά",
  matches_address: "Το πεδίο μπορεί να περιέχει μόνο ελληνικούς χαρακτήρες, αριθμούς και κενά",
  max_address: "Η διεύθυνση δεν πρέπει να ξεπερνά τους 100 χαρακτήρες",
  test_address: "Η διεύθυνση πρέπει να περιέχει αριθμό",
  required_address: "Απαιτείται διεύθυνση",
  max_floor: "Ο όροφος δεν πρέπει να ξεπερνά τους 50 χαρακτήρες",
  matches_floor: "Το πεδίο μπορεί να περιέχει μόνο ελληνικούς χαρακτήρες και αριθμούς",
  required_floor: "Απαιτείται όροφος",
  matches_zip_code: "Μη έγκυρη μορφή ΤΚ",
  required_zip_code: "Απαιτείται ΤΚ",
  max_city: "Η πόλη δεν πρέπει να ξεπερνά τους 100 χαρακτήρες",
  matches_city: "Το πεδίο μπορεί να περιέχει μόνο ελληνικούς χαρακτήρες",
  required_city: "Απαιτείται πόλη",
  max_area: "Η περιοχή δεν πρέπει να ξεπερνά τους 100 χαρακτήρες",
  matches_area: "Το πεδίο μπορεί να περιέχει μόνο ελληνικούς χαρακτήρες",
  required_area: "Απαιτείται περιοχή",
  max_contact_person: "Το πρόσωπο επικοινωνίας δεν πρέπει να ξεπερνά τους 100 χαρακτήρες",
  required_contact_person: "Απαιτείται πρόσωπο επικοινωνίας",
  matches_contact_person: "Το πεδίο μπορεί να περιέχει μόνο ελληνικούς χαρακτήρες",
  required_contact_number: "Απαιτείται τηλέφωνο",
  matches_contact_number: "Το τηλέφωνο επικοινωνίας μπορεί να περιέχει μόνο αριθμούς",
  min_contact_number: "Το τηλέφωνο δεν είναι έγκυρο",
  required_contact_email: "Απαιτείται διεύθυνση email",
  invalid_contact_email: "Μη έγκυρη διεύθυνση email",
  "is-valid-phone_contact_number": "Χρειάζεται κωδικός τηλεφώνου"
}, nl = "Αριθμός ΓΕΜΗ", sl = {
  title: "Κάτι πήγε στραβά.",
  message_1_order: "Η πληρωμή σας για το τιμολόγιο με αριθμό <strong>{{invoiceId}}</strong>,<br> και συνολικό ποσό <strong>{{amount}}</strong> € μέσω της υπηρεσίας IRIS,<br> δεν ολοκληρώθηκε!",
  message_1_topup: "Η πληρωμή σας για το top-up με αριθμό <strong>{{topupId}}</strong>,<br> και συνολικό ποσό <strong>{{amount}}</strong> € μέσω της υπηρεσίας IRIS,<br> δεν ολοκληρώθηκε!",
  message_2: "Παρακαλώ προσπαθήστε ξανά αργότερα ή χρησιμοποιήστε άλλο μέσο πληρωμής.",
  message_3: "Εάν έχετε ερωτήσεις ή χρειάζεστε βοήθεια, μη διστάσετε να επικοινωνήσετε."
}, ol = {
  title: "Ευχαριστούμε!",
  message_1_order: "Η πληρωμή σας για το τιμολόγιο με αριθμό <strong>{{invoiceId}}</strong>,<br> και συνολικό ποσό <strong>{{amount}}</strong> € μέσω της υπηρεσίας IRIS,<br> ολοκληρώθηκε με επιτυχία!",
  message_1_topup: "Η πληρωμή σας για το top-up με αριθμό <strong>{{topupId}}</strong>,<br> και συνολικό ποσό <strong>{{amount}}</strong> € μέσω της υπηρεσίας IRIS,<br> ολοκληρώθηκε με επιτυχία!"
}, il = `Έχουμε στείλει αίτημα πληρωμής στο email σας.
Η παραγγελία σας θα ολοκληρωθεί μόλις ληφθεί η πληρωμή.`, al = {
  ns: Bc,
  navigation: Wc,
  pageTitles: Hc,
  buttons: qc,
  cancel_confirmation: Kc,
  choose_completed_excel_file: Gc,
  expired: Jc,
  warning: Zc,
  spent: Qc,
  limit: Xc,
  thank_you: el,
  monthly: tl,
  validation: rl,
  for: "Για",
  gemi_number: nl,
  error_page: sl,
  success_page: ol,
  pending_page: il
}, ul = "common", cl = {
  homepage: "Home",
  pool: "Account",
  employees: "Employees",
  cards: "Cards",
  solutions: "Shop",
  transactions: "Reports",
  notifications: "Comms",
  billing: "Billing & Shipping",
  billing_cards_order: "View"
}, ll = {
  home: "Home",
  pool: "Pool Accounts",
  employees: "Employees",
  cards: "Cards",
  reports: "Reports",
  comms: "Comms",
  shop: "Shop",
  billing: "Billing & Shipping",
  update_card: "Update Card",
  create_employee: "Create an Employee",
  add_pool_account: "Add New Pool Account",
  topUp_pool_account: "Top Up Pool Account",
  all_employees: "All employees ({{number}})",
  transaction: "Transaction #"
}, fl = {
  logout: "Logout",
  search: "Search",
  save: "Save",
  close: "Close",
  yes: "Yes",
  cancel: "Cancel",
  submit: "Submit",
  from: "From",
  to: "To",
  add_new: "Add New",
  back: "Back",
  delete: "Delete",
  prev_step: "Go to previous step",
  next_step: "Next step",
  save_store: "Save store",
  finish: "Finish",
  go_back: "Go Back",
  skip: "Skip",
  cancel_import: "Cancel Import",
  save_employees: "Save employees",
  import_new_employees: "Import New Employees",
  start: "Start",
  import: "Import",
  save_draft: "Save as a draft",
  add_employee: "Add employee",
  save_changes: "Save Changes",
  upgrade_card: "Upgrade Card",
  generate_spending_report: "Generate Spending Report",
  generate_report: "Generate Report",
  upload_file: "Upload a file",
  upload: "Upload",
  navigate_to_billing: "Back to Invoice History",
  view_billing: "View Billing",
  select: "Choose",
  save_template: "Save Template",
  continue_edit: "Continue Editing"
}, dl = "Are you sure you want to cancel the process, you will loose all your progress.", pl = "Step 1: Choose the completed excel file with the format provided.", hl = "Expired", ml = "Warning", gl = "Spent", yl = "Limit", bl = "Thank You!", vl = "monthly", xl = {
  max_address_description: "Address Description must be at most 150 characters",
  matches_address_description: "Field can only contain Greek characters, numbers, and spaces",
  matches_address: "Field can only contain Greek characters, numbers, and spaces",
  max_address: "Address must be at most 100 characters",
  test_address: "Address must contain address number",
  required_address: "Address is required",
  max_floor: "Floor must be at most 50 characters",
  matches_floor: "Field can only contain Greek characters and numbers",
  required_floor: "Floor is required",
  matches_zip_code: "Invalid ZIP Code format",
  required_zip_code: "ZIP Code is required",
  max_city: "City must be at most 100 characters",
  matches_city: "Field can only contain Greek characters",
  required_city: "City is required",
  max_area: "Area must be at most 100 characters",
  matches_area: "Field can only contain Greek characters",
  required_area: "Area is required",
  max_contact_person: "Contact person must be at most 100 characters",
  required_contact_person: "Contact person is required",
  matches_contact_person: "Field can only contain Greek characters",
  required_contact_number: "Phone number is required",
  matches_contact_number: "Contact number can only contain digits",
  min_contact_number: "Phone is invalid",
  required_contact_email: "Email address is required",
  invalid_contact_email: "Invalid email address",
  "is-valid-phone_contact_number": "Phone country code is required"
}, Sl = "GECR (GEMI) Number", wl = {
  title: "Something went wrong.",
  message_1_order: "Your payment regarding invoice number <strong>{{invoiceId}}</strong>,<br> with a total amount of <strong>{{amount}}</strong> € through the IRIS service,<br> has been <strong>ΝΟΤ COMPLETED!</strong>",
  message_1_topup: "Your payment regarding topup number <strong>{{topupId}}</strong>,<br> with a total amount of <strong>{{amount}}</strong> € through the IRIS service,<br> has been <strong>ΝΟΤ COMPLETED!</strong>",
  message_2: "Please try again later or use an other payment method. ",
  message_3: "Should you have any questions or need assistance, feel free to reach out."
}, _l = {
  title: "Thank you!",
  message_1_order: "Your payment regarding invoice number <strong>{{invoiceId}}</strong>,<br> with a total amount of <strong>{{amount}}</strong> € through the IRIS service,<br> has been <strong>COMPLETED!</strong>",
  message_1_topup: "Your payment regarding topup number <strong>{{topupId}}</strong>,<br> with a total amount of <strong>{{amount}}</strong> € through the IRIS service,<br> has been <strong>COMPLETED!</strong>"
}, Ol = `We have sent a payment request to your email. 
Your order will be completed once payment is received.`, Tl = {
  ns: ul,
  navigation: cl,
  pageTitles: ll,
  buttons: fl,
  cancel_confirmation: dl,
  choose_completed_excel_file: pl,
  expired: hl,
  warning: ml,
  spent: gl,
  limit: yl,
  thank_you: bl,
  monthly: vl,
  validation: xl,
  gemi_number: Sl,
  for: "for",
  error_page: wl,
  success_page: _l,
  pending_page: Ol
};
pe.use(Bs).use(Pc).init({
  detection: {
    order: ["localStorage", "cookie", "querystring", "navigator"],
    lookupLocalStorage: "lang",
    lookupCookie: "lang",
    lookupQuerystring: "lang",
    caches: ["localStorage", "cookie"]
  },
  react: {
    bindI18n: "loaded languageChanged",
    bindI18nStore: "added",
    useSuspense: !0
  },
  ns: ["common"],
  resources: {
    en: {
      common: Tl
    },
    el: {
      common: al
    }
  },
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: !1
  }
});
function El({ locale: e = "en", children: t }) {
  const n = Ea("(prefers-color-scheme: dark)"), [r, s] = Hs(() => {
    const u = localStorage.getItem("appTheme");
    return u && (u === "light" || u === "dark") ? u : n ? "dark" : "light";
  }), o = Mr(ec(r), pe.language === "en" ? Ku : qu), i = qs(() => {
    localStorage.setItem("appTheme", r === "light" ? "dark" : "light"), s(r === "light" ? "dark" : "light");
  }, [r]), a = Ks(
    () => ({
      currentTheme: r,
      toggleTheme: i
    }),
    [r, i]
  );
  return /* @__PURE__ */ se(tc.Provider, { value: a, children: /* @__PURE__ */ se(rs, { injectFirst: !0, children: /* @__PURE__ */ se(ks, { theme: o, children: /* @__PURE__ */ Ln(As, { dateAdapter: Hu, adapterLocale: de.locale(e), children: [
    /* @__PURE__ */ se(Ms, {}),
    t
  ] }) }) }) });
}
const Cl = In({
  currentLanguage: pe.language.includes("el") ? "el" : "en",
  changeLanguage: () => null
}), Dl = ({ children: e }) => {
  const { currentLanguage: t } = jn(Cl);
  return /* @__PURE__ */ se(El, { locale: t, children: e });
};
export {
  Ml as PageLayout,
  Rl as PageSection,
  Dl as ThemeProvider,
  Al as Title
};
