import un, { jsx as E, jsxs as le, Fragment as ri } from "react/jsx-runtime";
import { useTheme as Kr, useMediaQuery as Yc, Box as ze, CircularProgress as cf, Button as jt, Stack as uf, Modal as df, Backdrop as pf, Fade as ff, IconButton as Kc, TextField as Ti, MenuItem as Gc, Typography as wn, FormControlLabel as mf, Checkbox as hf } from "@mui/material";
import * as m from "react";
import _e, { forwardRef as bf, useContext as gf, Children as yf, isValidElement as Sr, cloneElement as Er, useState as Qn, useMemo as Xc, useTransition as vf, useCallback as Ys, useDeferredValue as xf, useEffect as Ks } from "react";
import * as wf from "react-dom";
import pr from "react-dom";
function Kt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let o = 1; o < arguments.length; o += 1)
    t += "&args[]=" + encodeURIComponent(arguments[o]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const Cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kt
}, Symbol.toStringTag, { value: "Module" }));
function T() {
  return T = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, T.apply(null, arguments);
}
function Zc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return t[o] === void 0 && (t[o] = e(o)), t[o];
  };
}
var Sf = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ef = /* @__PURE__ */ Zc(
  function(e) {
    return Sf.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Of = !1;
function Pf(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Rf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Tf = /* @__PURE__ */ function() {
  function e(o) {
    var r = this;
    this._insertTag = function(a) {
      var i;
      r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(a, i), r.tags.push(a);
    }, this.isSpeedy = o.speedy === void 0 ? !Of : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Rf(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Pf(a);
      try {
        i.insertRule(r, i.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var a;
      return (a = r.parentNode) == null ? void 0 : a.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), ot = "-ms-", Nr = "-moz-", Pe = "-webkit-", Qc = "comm", ki = "rule", Di = "decl", kf = "@import", Jc = "@keyframes", Df = "@layer", Mf = Math.abs, Gr = String.fromCharCode, $f = Object.assign;
function If(e, t) {
  return nt(e, 0) ^ 45 ? (((t << 2 ^ nt(e, 0)) << 2 ^ nt(e, 1)) << 2 ^ nt(e, 2)) << 2 ^ nt(e, 3) : 0;
}
function eu(e) {
  return e.trim();
}
function Nf(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Re(e, t, o) {
  return e.replace(t, o);
}
function ai(e, t) {
  return e.indexOf(t);
}
function nt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Lo(e, t, o) {
  return e.slice(t, o);
}
function Ft(e) {
  return e.length;
}
function Mi(e) {
  return e.length;
}
function fr(e, t) {
  return t.push(e), e;
}
function _f(e, t) {
  return e.map(t).join("");
}
var Xr = 1, Jn = 1, tu = 0, ut = 0, Xe = 0, po = "";
function Zr(e, t, o, r, a, i, s) {
  return { value: e, root: t, parent: o, type: r, props: a, children: i, line: Xr, column: Jn, length: s, return: "" };
}
function wo(e, t) {
  return $f(Zr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Af() {
  return Xe;
}
function Ff() {
  return Xe = ut > 0 ? nt(po, --ut) : 0, Jn--, Xe === 10 && (Jn = 1, Xr--), Xe;
}
function pt() {
  return Xe = ut < tu ? nt(po, ut++) : 0, Jn++, Xe === 10 && (Jn = 1, Xr++), Xe;
}
function Bt() {
  return nt(po, ut);
}
function Or() {
  return ut;
}
function Xo(e, t) {
  return Lo(po, e, t);
}
function jo(e) {
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
function nu(e) {
  return Xr = Jn = 1, tu = Ft(po = e), ut = 0, [];
}
function ou(e) {
  return po = "", e;
}
function Pr(e) {
  return eu(Xo(ut - 1, ii(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Vf(e) {
  for (; (Xe = Bt()) && Xe < 33; )
    pt();
  return jo(e) > 2 || jo(Xe) > 3 ? "" : " ";
}
function Lf(e, t) {
  for (; --t && pt() && !(Xe < 48 || Xe > 102 || Xe > 57 && Xe < 65 || Xe > 70 && Xe < 97); )
    ;
  return Xo(e, Or() + (t < 6 && Bt() == 32 && pt() == 32));
}
function ii(e) {
  for (; pt(); )
    switch (Xe) {
      case e:
        return ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ii(Xe);
        break;
      case 40:
        e === 41 && ii(e);
        break;
      case 92:
        pt();
        break;
    }
  return ut;
}
function jf(e, t) {
  for (; pt() && e + Xe !== 57; )
    if (e + Xe === 84 && Bt() === 47)
      break;
  return "/*" + Xo(t, ut - 1) + "*" + Gr(e === 47 ? e : pt());
}
function Bf(e) {
  for (; !jo(Bt()); )
    pt();
  return Xo(e, ut);
}
function zf(e) {
  return ou(Rr("", null, null, null, [""], e = nu(e), 0, [0], e));
}
function Rr(e, t, o, r, a, i, s, l, c) {
  for (var u = 0, d = 0, p = s, f = 0, v = 0, h = 0, b = 1, y = 1, C = 1, S = 0, w = "", x = a, g = i, P = r, R = w; y; )
    switch (h = S, S = pt()) {
      case 40:
        if (h != 108 && nt(R, p - 1) == 58) {
          ai(R += Re(Pr(S), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += Pr(S);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += Vf(h);
        break;
      case 92:
        R += Lf(Or() - 1, 7);
        continue;
      case 47:
        switch (Bt()) {
          case 42:
          case 47:
            fr(Wf(jf(pt(), Or()), t, o), c);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * b:
        l[u++] = Ft(R) * C;
      case 125 * b:
      case 59:
      case 0:
        switch (S) {
          case 0:
          case 125:
            y = 0;
          case 59 + d:
            C == -1 && (R = Re(R, /\f/g, "")), v > 0 && Ft(R) - p && fr(v > 32 ? Xs(R + ";", r, o, p - 1) : Xs(Re(R, " ", "") + ";", r, o, p - 2), c);
            break;
          case 59:
            R += ";";
          default:
            if (fr(P = Gs(R, t, o, u, d, a, l, w, x = [], g = [], p), i), S === 123)
              if (d === 0)
                Rr(R, t, P, P, x, i, p, l, g);
              else
                switch (f === 99 && nt(R, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Rr(e, P, P, r && fr(Gs(e, P, P, 0, 0, a, l, w, a, x = [], p), g), a, g, p, l, r ? x : g);
                    break;
                  default:
                    Rr(R, P, P, P, [""], g, 0, l, g);
                }
        }
        u = d = v = 0, b = C = 1, w = R = "", p = s;
        break;
      case 58:
        p = 1 + Ft(R), v = h;
      default:
        if (b < 1) {
          if (S == 123)
            --b;
          else if (S == 125 && b++ == 0 && Ff() == 125)
            continue;
        }
        switch (R += Gr(S), S * b) {
          case 38:
            C = d > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            l[u++] = (Ft(R) - 1) * C, C = 1;
            break;
          case 64:
            Bt() === 45 && (R += Pr(pt())), f = Bt(), d = p = Ft(w = R += Bf(Or())), S++;
            break;
          case 45:
            h === 45 && Ft(R) == 2 && (b = 0);
        }
    }
  return i;
}
function Gs(e, t, o, r, a, i, s, l, c, u, d) {
  for (var p = a - 1, f = a === 0 ? i : [""], v = Mi(f), h = 0, b = 0, y = 0; h < r; ++h)
    for (var C = 0, S = Lo(e, p + 1, p = Mf(b = s[h])), w = e; C < v; ++C)
      (w = eu(b > 0 ? f[C] + " " + S : Re(S, /&\f/g, f[C]))) && (c[y++] = w);
  return Zr(e, t, o, a === 0 ? ki : l, c, u, d);
}
function Wf(e, t, o) {
  return Zr(e, t, o, Qc, Gr(Af()), Lo(e, 2, -2), 0);
}
function Xs(e, t, o, r) {
  return Zr(e, t, o, Di, Lo(e, 0, r), Lo(e, r + 1, -1), r);
}
function Un(e, t) {
  for (var o = "", r = Mi(e), a = 0; a < r; a++)
    o += t(e[a], a, e, t) || "";
  return o;
}
function Uf(e, t, o, r) {
  switch (e.type) {
    case Df:
      if (e.children.length)
        break;
    case kf:
    case Di:
      return e.return = e.return || e.value;
    case Qc:
      return "";
    case Jc:
      return e.return = e.value + "{" + Un(e.children, r) + "}";
    case ki:
      e.value = e.props.join(",");
  }
  return Ft(o = Un(e.children, r)) ? e.return = e.value + "{" + o + "}" : "";
}
function qf(e) {
  var t = Mi(e);
  return function(o, r, a, i) {
    for (var s = "", l = 0; l < t; l++)
      s += e[l](o, r, a, i) || "";
    return s;
  };
}
function Hf(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Yf = function(t, o, r) {
  for (var a = 0, i = 0; a = i, i = Bt(), a === 38 && i === 12 && (o[r] = 1), !jo(i); )
    pt();
  return Xo(t, ut);
}, Kf = function(t, o) {
  var r = -1, a = 44;
  do
    switch (jo(a)) {
      case 0:
        a === 38 && Bt() === 12 && (o[r] = 1), t[r] += Yf(ut - 1, o, r);
        break;
      case 2:
        t[r] += Pr(a);
        break;
      case 4:
        if (a === 44) {
          t[++r] = Bt() === 58 ? "&\f" : "", o[r] = t[r].length;
          break;
        }
      default:
        t[r] += Gr(a);
    }
  while (a = pt());
  return t;
}, Gf = function(t, o) {
  return ou(Kf(nu(t), o));
}, Zs = /* @__PURE__ */ new WeakMap(), Xf = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var o = t.value, r = t.parent, a = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r)
        return;
    if (!(t.props.length === 1 && o.charCodeAt(0) !== 58 && !Zs.get(r)) && !a) {
      Zs.set(t, !0);
      for (var i = [], s = Gf(o, i), l = r.props, c = 0, u = 0; c < s.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = i[c] ? s[c].replace(/&\f/g, l[d]) : l[d] + " " + s[c];
    }
  }
}, Zf = function(t) {
  if (t.type === "decl") {
    var o = t.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ru(e, t) {
  switch (If(e, t)) {
    case 5103:
      return Pe + "print-" + e + e;
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
      return Pe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Pe + e + Nr + e + ot + e + e;
    case 6828:
    case 4268:
      return Pe + e + ot + e + e;
    case 6165:
      return Pe + e + ot + "flex-" + e + e;
    case 5187:
      return Pe + e + Re(e, /(\w+).+(:[^]+)/, Pe + "box-$1$2" + ot + "flex-$1$2") + e;
    case 5443:
      return Pe + e + ot + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    case 4675:
      return Pe + e + ot + "flex-line-pack" + Re(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return Pe + e + ot + Re(e, "shrink", "negative") + e;
    case 5292:
      return Pe + e + ot + Re(e, "basis", "preferred-size") + e;
    case 6060:
      return Pe + "box-" + Re(e, "-grow", "") + Pe + e + ot + Re(e, "grow", "positive") + e;
    case 4554:
      return Pe + Re(e, /([^-])(transform)/g, "$1" + Pe + "$2") + e;
    case 6187:
      return Re(Re(Re(e, /(zoom-|grab)/, Pe + "$1"), /(image-set)/, Pe + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Pe + "$1$`$1");
    case 4968:
      return Re(Re(e, /(.+:)(flex-)?(.*)/, Pe + "box-pack:$3" + ot + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Pe + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Pe + "$1$2") + e;
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
      if (Ft(e) - 1 - t > 6)
        switch (nt(e, t + 1)) {
          case 109:
            if (nt(e, t + 4) !== 45)
              break;
          case 102:
            return Re(e, /(.+:)(.+)-([^]+)/, "$1" + Pe + "$2-$3$1" + Nr + (nt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ai(e, "stretch") ? ru(Re(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (nt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (nt(e, Ft(e) - 3 - (~ai(e, "!important") && 10))) {
        case 107:
          return Re(e, ":", ":" + Pe) + e;
        case 101:
          return Re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Pe + (nt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Pe + "$2$3$1" + ot + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (nt(e, t + 11)) {
        case 114:
          return Pe + e + ot + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return Pe + e + ot + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return Pe + e + ot + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Pe + e + ot + e + e;
  }
  return e;
}
var Qf = function(t, o, r, a) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Di:
        t.return = ru(t.value, t.length);
        break;
      case Jc:
        return Un([wo(t, {
          value: Re(t.value, "@", "@" + Pe)
        })], a);
      case ki:
        if (t.length)
          return _f(t.props, function(i) {
            switch (Nf(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Un([wo(t, {
                  props: [Re(i, /:(read-\w+)/, ":" + Nr + "$1")]
                })], a);
              case "::placeholder":
                return Un([wo(t, {
                  props: [Re(i, /:(plac\w+)/, ":" + Pe + "input-$1")]
                }), wo(t, {
                  props: [Re(i, /:(plac\w+)/, ":" + Nr + "$1")]
                }), wo(t, {
                  props: [Re(i, /:(plac\w+)/, ot + "input-$1")]
                })], a);
            }
            return "";
          });
    }
}, Jf = [Qf], au = function(t) {
  var o = t.key;
  if (o === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(b) {
      var y = b.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var a = t.stylisPlugins || Jf, i = {}, s, l = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(b) {
      for (var y = b.getAttribute("data-emotion").split(" "), C = 1; C < y.length; C++)
        i[y[C]] = !0;
      l.push(b);
    }
  );
  var c, u = [Xf, Zf];
  {
    var d, p = [Uf, Hf(function(b) {
      d.insert(b);
    })], f = qf(u.concat(a, p)), v = function(y) {
      return Un(zf(y), f);
    };
    c = function(y, C, S, w) {
      d = S, v(y ? y + "{" + C.styles + "}" : C.styles), w && (h.inserted[C.name] = !0);
    };
  }
  var h = {
    key: o,
    sheet: new Tf({
      key: o,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: c
  };
  return h.sheet.hydrate(l), h;
}, em = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function iu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Qt(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var o = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    o.prototype = t.prototype;
  } else
    o = {};
  return Object.defineProperty(o, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(o, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), o;
}
var si = { exports: {} }, ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qs;
function tm() {
  if (Qs)
    return ke;
  Qs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function w(g) {
    if (typeof g == "object" && g !== null) {
      var P = g.$$typeof;
      switch (P) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case r:
            case i:
            case a:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case h:
                case v:
                case s:
                  return g;
                default:
                  return P;
              }
          }
        case o:
          return P;
      }
    }
  }
  function x(g) {
    return w(g) === u;
  }
  return ke.AsyncMode = c, ke.ConcurrentMode = u, ke.ContextConsumer = l, ke.ContextProvider = s, ke.Element = t, ke.ForwardRef = d, ke.Fragment = r, ke.Lazy = h, ke.Memo = v, ke.Portal = o, ke.Profiler = i, ke.StrictMode = a, ke.Suspense = p, ke.isAsyncMode = function(g) {
    return x(g) || w(g) === c;
  }, ke.isConcurrentMode = x, ke.isContextConsumer = function(g) {
    return w(g) === l;
  }, ke.isContextProvider = function(g) {
    return w(g) === s;
  }, ke.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ke.isForwardRef = function(g) {
    return w(g) === d;
  }, ke.isFragment = function(g) {
    return w(g) === r;
  }, ke.isLazy = function(g) {
    return w(g) === h;
  }, ke.isMemo = function(g) {
    return w(g) === v;
  }, ke.isPortal = function(g) {
    return w(g) === o;
  }, ke.isProfiler = function(g) {
    return w(g) === i;
  }, ke.isStrictMode = function(g) {
    return w(g) === a;
  }, ke.isSuspense = function(g) {
    return w(g) === p;
  }, ke.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === i || g === a || g === p || g === f || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === v || g.$$typeof === s || g.$$typeof === l || g.$$typeof === d || g.$$typeof === y || g.$$typeof === C || g.$$typeof === S || g.$$typeof === b);
  }, ke.typeOf = w, ke;
}
var De = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js;
function nm() {
  return Js || (Js = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function w(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === i || _ === a || _ === p || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === h || _.$$typeof === v || _.$$typeof === s || _.$$typeof === l || _.$$typeof === d || _.$$typeof === y || _.$$typeof === C || _.$$typeof === S || _.$$typeof === b);
    }
    function x(_) {
      if (typeof _ == "object" && _ !== null) {
        var B = _.$$typeof;
        switch (B) {
          case t:
            var H = _.type;
            switch (H) {
              case c:
              case u:
              case r:
              case i:
              case a:
              case p:
                return H;
              default:
                var oe = H && H.$$typeof;
                switch (oe) {
                  case l:
                  case d:
                  case h:
                  case v:
                  case s:
                    return oe;
                  default:
                    return B;
                }
            }
          case o:
            return B;
        }
      }
    }
    var g = c, P = u, R = l, I = s, j = t, M = d, N = r, q = h, k = v, A = o, $ = i, D = a, V = p, O = !1;
    function U(_) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(_) || x(_) === c;
    }
    function F(_) {
      return x(_) === u;
    }
    function Y(_) {
      return x(_) === l;
    }
    function K(_) {
      return x(_) === s;
    }
    function J(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Z(_) {
      return x(_) === d;
    }
    function L(_) {
      return x(_) === r;
    }
    function z(_) {
      return x(_) === h;
    }
    function X(_) {
      return x(_) === v;
    }
    function ee(_) {
      return x(_) === o;
    }
    function ne(_) {
      return x(_) === i;
    }
    function G(_) {
      return x(_) === a;
    }
    function te(_) {
      return x(_) === p;
    }
    De.AsyncMode = g, De.ConcurrentMode = P, De.ContextConsumer = R, De.ContextProvider = I, De.Element = j, De.ForwardRef = M, De.Fragment = N, De.Lazy = q, De.Memo = k, De.Portal = A, De.Profiler = $, De.StrictMode = D, De.Suspense = V, De.isAsyncMode = U, De.isConcurrentMode = F, De.isContextConsumer = Y, De.isContextProvider = K, De.isElement = J, De.isForwardRef = Z, De.isFragment = L, De.isLazy = z, De.isMemo = X, De.isPortal = ee, De.isProfiler = ne, De.isStrictMode = G, De.isSuspense = te, De.isValidElementType = w, De.typeOf = x;
  }()), De;
}
process.env.NODE_ENV === "production" ? si.exports = tm() : si.exports = nm();
var om = si.exports, su = om, rm = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, am = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, lu = {};
lu[su.ForwardRef] = rm;
lu[su.Memo] = am;
var im = !0;
function $i(e, t, o) {
  var r = "";
  return o.split(" ").forEach(function(a) {
    e[a] !== void 0 ? t.push(e[a] + ";") : r += a + " ";
  }), r;
}
var Qr = function(t, o, r) {
  var a = t.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  im === !1) && t.registered[a] === void 0 && (t.registered[a] = o.styles);
}, Jr = function(t, o, r) {
  Qr(t, o, r);
  var a = t.key + "-" + o.name;
  if (t.inserted[o.name] === void 0) {
    var i = o;
    do
      t.insert(o === i ? "." + a : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function sm(e) {
  for (var t = 0, o, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    o = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, t = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
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
var lm = {
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
}, cm = !1, um = /[A-Z]|^ms/g, dm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, cu = function(t) {
  return t.charCodeAt(1) === 45;
}, el = function(t) {
  return t != null && typeof t != "boolean";
}, La = /* @__PURE__ */ Zc(function(e) {
  return cu(e) ? e : e.replace(um, "-$&").toLowerCase();
}), tl = function(t, o) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(dm, function(r, a, i) {
          return Vt = {
            name: a,
            styles: i,
            next: Vt
          }, a;
        });
  }
  return lm[t] !== 1 && !cu(t) && typeof o == "number" && o !== 0 ? o + "px" : o;
}, pm = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Bo(e, t, o) {
  if (o == null)
    return "";
  var r = o;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var a = o;
      if (a.anim === 1)
        return Vt = {
          name: a.name,
          styles: a.styles,
          next: Vt
        }, a.name;
      var i = o;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Vt = {
              name: s.name,
              styles: s.styles,
              next: Vt
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return fm(e, t, o);
    }
    case "function": {
      if (e !== void 0) {
        var c = Vt, u = o(e);
        return Vt = c, Bo(e, t, u);
      }
      break;
    }
  }
  var d = o;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function fm(e, t, o) {
  var r = "";
  if (Array.isArray(o))
    for (var a = 0; a < o.length; a++)
      r += Bo(e, t, o[a]) + ";";
  else
    for (var i in o) {
      var s = o[i];
      if (typeof s != "object") {
        var l = s;
        t != null && t[l] !== void 0 ? r += i + "{" + t[l] + "}" : el(l) && (r += La(i) + ":" + tl(i, l) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && cm)
          throw new Error(pm);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var c = 0; c < s.length; c++)
            el(s[c]) && (r += La(i) + ":" + tl(i, s[c]) + ";");
        else {
          var u = Bo(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              r += La(i) + ":" + u + ";";
              break;
            }
            default:
              r += i + "{" + u + "}";
          }
        }
      }
    }
  return r;
}
var nl = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Vt;
function eo(e, t, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, a = "";
  Vt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    r = !1, a += Bo(o, t, i);
  else {
    var s = i;
    a += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (a += Bo(o, t, e[l]), r) {
      var c = i;
      a += c[l];
    }
  nl.lastIndex = 0;
  for (var u = "", d; (d = nl.exec(a)) !== null; )
    u += "-" + d[1];
  var p = sm(a) + u;
  return {
    name: p,
    styles: a,
    next: Vt
  };
}
var mm = function(t) {
  return t();
}, uu = m.useInsertionEffect ? m.useInsertionEffect : !1, Ii = uu || mm, ol = uu || m.useLayoutEffect, hm = {}.hasOwnProperty, Ni = /* @__PURE__ */ m.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ au({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ni.displayName = "EmotionCacheContext");
var bm = Ni.Provider, ea = function(t) {
  return /* @__PURE__ */ bf(function(o, r) {
    var a = gf(Ni);
    return t(o, a, r);
  });
}, kn = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (kn.displayName = "EmotionThemeContext");
var rl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", al = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", gm = function(t) {
  var o = t.cache, r = t.serialized, a = t.isStringTag;
  return Qr(o, r, a), Ii(function() {
    return Jr(o, r, a);
  }), null;
}, ym = /* @__PURE__ */ ea(function(e, t, o) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var a = e[rl], i = [r], s = "";
  typeof e.className == "string" ? s = $i(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var l = eo(i, void 0, m.useContext(kn));
  if (process.env.NODE_ENV !== "production" && l.name.indexOf("-") === -1) {
    var c = e[al];
    c && (l = eo([l, "label:" + c + ";"]));
  }
  s += t.key + "-" + l.name;
  var u = {};
  for (var d in e)
    hm.call(e, d) && d !== "css" && d !== rl && (process.env.NODE_ENV === "production" || d !== al) && (u[d] = e[d]);
  return u.ref = o, u.className = s, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(gm, {
    cache: t,
    serialized: l,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ m.createElement(a, u));
});
process.env.NODE_ENV !== "production" && (ym.displayName = "EmotionCssPropInternal");
var ja = { exports: {} }, il;
function du() {
  return il || (il = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(o) {
        for (var r = 1; r < arguments.length; r++) {
          var a = arguments[r];
          for (var i in a)
            ({}).hasOwnProperty.call(a, i) && (o[i] = a[i]);
        }
        return o;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(ja)), ja.exports;
}
du();
var vm = {
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
}, sl = !1, pu = /* @__PURE__ */ ea(function(e, t) {
  process.env.NODE_ENV !== "production" && !sl && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), sl = !0);
  var o = e.styles, r = eo([o], void 0, m.useContext(kn)), a = m.useRef();
  return ol(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", i), s.hydrate([c])), a.current = [s, l], function() {
      s.flush();
    };
  }, [t]), ol(function() {
    var i = a.current, s = i[0], l = i[1];
    if (l) {
      i[1] = !1;
      return;
    }
    if (r.next !== void 0 && Jr(t, r.next, !0), s.tags.length) {
      var c = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = c, s.flush();
    }
    t.insert("", r, s, !1);
  }, [t, r.name]), null;
});
process.env.NODE_ENV !== "production" && (pu.displayName = "EmotionGlobal");
function fu() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return eo(t);
}
var ta = function() {
  var t = fu.apply(void 0, arguments), o = "animation-" + t.name;
  return {
    name: o,
    styles: "@keyframes " + o + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, xm = function e(t) {
  for (var o = t.length, r = 0, a = ""; r < o; r++) {
    var i = t[r];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var l in i)
              i[l] && l && (s && (s += " "), s += l);
          }
          break;
        }
        default:
          s = i;
      }
      s && (a && (a += " "), a += s);
    }
  }
  return a;
};
function wm(e, t, o) {
  var r = [], a = $i(e, r, o);
  return r.length < 2 ? o : a + t(r);
}
var Cm = function(t) {
  var o = t.cache, r = t.serializedArr;
  return Ii(function() {
    for (var a = 0; a < r.length; a++)
      Jr(o, r[a], !1);
  }), null;
}, Sm = /* @__PURE__ */ ea(function(e, t) {
  var o = !1, r = [], a = function() {
    if (o && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    var f = eo(d, t.registered);
    return r.push(f), Qr(t, f, !1), t.key + "-" + f.name;
  }, i = function() {
    if (o && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var u = arguments.length, d = new Array(u), p = 0; p < u; p++)
      d[p] = arguments[p];
    return wm(t.registered, a, xm(d));
  }, s = {
    css: a,
    cx: i,
    theme: m.useContext(kn)
  }, l = e.children(s);
  return o = !0, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Cm, {
    cache: t,
    serializedArr: r
  }), l);
});
process.env.NODE_ENV !== "production" && (Sm.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var ll = !0, Em = typeof jest < "u" || typeof vi < "u";
  if (ll && !Em) {
    var cl = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : ll ? window : global
    ), ul = "__EMOTION_REACT_" + vm.version.split(".")[0] + "__";
    cl[ul] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), cl[ul] = !0;
  }
}
var Om = Ef, Pm = function(t) {
  return t !== "theme";
}, dl = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Om : Pm;
}, pl = function(t, o, r) {
  var a;
  if (o) {
    var i = o.shouldForwardProp;
    a = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof a != "function" && r && (a = t.__emotion_forwardProp), a;
}, fl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Rm = function(t) {
  var o = t.cache, r = t.serialized, a = t.isStringTag;
  return Qr(o, r, a), Ii(function() {
    return Jr(o, r, a);
  }), null;
}, Tm = function e(t, o) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var r = t.__emotion_real === t, a = r && t.__emotion_base || t, i, s;
  o !== void 0 && (i = o.label, s = o.target);
  var l = pl(t, o, r), c = l || dl(a), u = !c("as");
  return function() {
    var d = arguments, p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(fl), p.push(d[0][0]);
      for (var f = d.length, v = 1; v < f; v++)
        process.env.NODE_ENV !== "production" && d[0][v] === void 0 && console.error(fl), p.push(d[v], d[0][v]);
    }
    var h = ea(function(b, y, C) {
      var S = u && b.as || a, w = "", x = [], g = b;
      if (b.theme == null) {
        g = {};
        for (var P in b)
          g[P] = b[P];
        g.theme = m.useContext(kn);
      }
      typeof b.className == "string" ? w = $i(y.registered, x, b.className) : b.className != null && (w = b.className + " ");
      var R = eo(p.concat(x), y.registered, g);
      w += y.key + "-" + R.name, s !== void 0 && (w += " " + s);
      var I = u && l === void 0 ? dl(S) : c, j = {};
      for (var M in b)
        u && M === "as" || // $FlowFixMe
        I(M) && (j[M] = b[M]);
      return j.className = w, j.ref = C, /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement(Rm, {
        cache: y,
        serialized: R,
        isStringTag: typeof S == "string"
      }), /* @__PURE__ */ m.createElement(S, j));
    });
    return h.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = a, h.__emotion_styles = p, h.__emotion_forwardProp = l, Object.defineProperty(h, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), h.withComponent = function(b, y) {
      return e(b, T({}, o, y, {
        shouldForwardProp: pl(h, y, !0)
      })).apply(void 0, p);
    }, h;
  };
}, km = [
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
], li = Tm.bind();
km.forEach(function(e) {
  li[e] = li(e);
});
var ci = { exports: {} }, mr = { exports: {} }, Me = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ml;
function Dm() {
  if (ml)
    return Me;
  ml = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function w(g) {
    if (typeof g == "object" && g !== null) {
      var P = g.$$typeof;
      switch (P) {
        case t:
          switch (g = g.type, g) {
            case c:
            case u:
            case r:
            case i:
            case a:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case h:
                case v:
                case s:
                  return g;
                default:
                  return P;
              }
          }
        case o:
          return P;
      }
    }
  }
  function x(g) {
    return w(g) === u;
  }
  return Me.AsyncMode = c, Me.ConcurrentMode = u, Me.ContextConsumer = l, Me.ContextProvider = s, Me.Element = t, Me.ForwardRef = d, Me.Fragment = r, Me.Lazy = h, Me.Memo = v, Me.Portal = o, Me.Profiler = i, Me.StrictMode = a, Me.Suspense = p, Me.isAsyncMode = function(g) {
    return x(g) || w(g) === c;
  }, Me.isConcurrentMode = x, Me.isContextConsumer = function(g) {
    return w(g) === l;
  }, Me.isContextProvider = function(g) {
    return w(g) === s;
  }, Me.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, Me.isForwardRef = function(g) {
    return w(g) === d;
  }, Me.isFragment = function(g) {
    return w(g) === r;
  }, Me.isLazy = function(g) {
    return w(g) === h;
  }, Me.isMemo = function(g) {
    return w(g) === v;
  }, Me.isPortal = function(g) {
    return w(g) === o;
  }, Me.isProfiler = function(g) {
    return w(g) === i;
  }, Me.isStrictMode = function(g) {
    return w(g) === a;
  }, Me.isSuspense = function(g) {
    return w(g) === p;
  }, Me.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === u || g === i || g === a || g === p || g === f || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === v || g.$$typeof === s || g.$$typeof === l || g.$$typeof === d || g.$$typeof === y || g.$$typeof === C || g.$$typeof === S || g.$$typeof === b);
  }, Me.typeOf = w, Me;
}
var $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hl;
function Mm() {
  return hl || (hl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, h = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function w(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === r || _ === u || _ === i || _ === a || _ === p || _ === f || typeof _ == "object" && _ !== null && (_.$$typeof === h || _.$$typeof === v || _.$$typeof === s || _.$$typeof === l || _.$$typeof === d || _.$$typeof === y || _.$$typeof === C || _.$$typeof === S || _.$$typeof === b);
    }
    function x(_) {
      if (typeof _ == "object" && _ !== null) {
        var B = _.$$typeof;
        switch (B) {
          case t:
            var H = _.type;
            switch (H) {
              case c:
              case u:
              case r:
              case i:
              case a:
              case p:
                return H;
              default:
                var oe = H && H.$$typeof;
                switch (oe) {
                  case l:
                  case d:
                  case h:
                  case v:
                  case s:
                    return oe;
                  default:
                    return B;
                }
            }
          case o:
            return B;
        }
      }
    }
    var g = c, P = u, R = l, I = s, j = t, M = d, N = r, q = h, k = v, A = o, $ = i, D = a, V = p, O = !1;
    function U(_) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), F(_) || x(_) === c;
    }
    function F(_) {
      return x(_) === u;
    }
    function Y(_) {
      return x(_) === l;
    }
    function K(_) {
      return x(_) === s;
    }
    function J(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function Z(_) {
      return x(_) === d;
    }
    function L(_) {
      return x(_) === r;
    }
    function z(_) {
      return x(_) === h;
    }
    function X(_) {
      return x(_) === v;
    }
    function ee(_) {
      return x(_) === o;
    }
    function ne(_) {
      return x(_) === i;
    }
    function G(_) {
      return x(_) === a;
    }
    function te(_) {
      return x(_) === p;
    }
    $e.AsyncMode = g, $e.ConcurrentMode = P, $e.ContextConsumer = R, $e.ContextProvider = I, $e.Element = j, $e.ForwardRef = M, $e.Fragment = N, $e.Lazy = q, $e.Memo = k, $e.Portal = A, $e.Profiler = $, $e.StrictMode = D, $e.Suspense = V, $e.isAsyncMode = U, $e.isConcurrentMode = F, $e.isContextConsumer = Y, $e.isContextProvider = K, $e.isElement = J, $e.isForwardRef = Z, $e.isFragment = L, $e.isLazy = z, $e.isMemo = X, $e.isPortal = ee, $e.isProfiler = ne, $e.isStrictMode = G, $e.isSuspense = te, $e.isValidElementType = w, $e.typeOf = x;
  }()), $e;
}
var bl;
function mu() {
  return bl || (bl = 1, process.env.NODE_ENV === "production" ? mr.exports = Dm() : mr.exports = Mm()), mr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ba, gl;
function $m() {
  if (gl)
    return Ba;
  gl = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        u[d] = d;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ba = a() ? Object.assign : function(i, s) {
    for (var l, c = r(i), u, d = 1; d < arguments.length; d++) {
      l = Object(arguments[d]);
      for (var p in l)
        t.call(l, p) && (c[p] = l[p]);
      if (e) {
        u = e(l);
        for (var f = 0; f < u.length; f++)
          o.call(l, u[f]) && (c[u[f]] = l[u[f]]);
      }
    }
    return c;
  }, Ba;
}
var za, yl;
function _i() {
  if (yl)
    return za;
  yl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return za = e, za;
}
var Wa, vl;
function hu() {
  return vl || (vl = 1, Wa = Function.call.bind(Object.prototype.hasOwnProperty)), Wa;
}
var Ua, xl;
function Im() {
  if (xl)
    return Ua;
  xl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = _i(), o = {}, r = hu();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, l, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (r(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var f = Error(
                (c || "React class") + ": " + l + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            p = i[d](s, d, c, l, null, t);
          } catch (h) {
            p = h;
          }
          if (p && !(p instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in o)) {
            o[p.message] = !0;
            var v = u ? u() : "";
            e(
              "Failed " + l + " type: " + p.message + (v ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, Ua = a, Ua;
}
var qa, wl;
function Nm() {
  if (wl)
    return qa;
  wl = 1;
  var e = mu(), t = $m(), o = _i(), r = hu(), a = Im(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return qa = function(l, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(F) {
      var Y = F && (u && F[u] || F[d]);
      if (typeof Y == "function")
        return Y;
    }
    var f = "<<anonymous>>", v = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: S(),
      arrayOf: w,
      element: x(),
      elementType: g(),
      instanceOf: P,
      node: M(),
      objectOf: I,
      oneOf: R,
      oneOfType: j,
      shape: q,
      exact: k
    };
    function h(F, Y) {
      return F === Y ? F !== 0 || 1 / F === 1 / Y : F !== F && Y !== Y;
    }
    function b(F, Y) {
      this.message = F, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function y(F) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, K = 0;
      function J(L, z, X, ee, ne, G, te) {
        if (ee = ee || f, G = G || X, te !== o) {
          if (c) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var B = ee + ":" + X;
            !Y[B] && // Avoid spamming the console because they are often not actionable except for lib authors
            K < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[B] = !0, K++);
          }
        }
        return z[X] == null ? L ? z[X] === null ? new b("The " + ne + " `" + G + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new b("The " + ne + " `" + G + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : F(z, X, ee, ne, G);
      }
      var Z = J.bind(null, !1);
      return Z.isRequired = J.bind(null, !0), Z;
    }
    function C(F) {
      function Y(K, J, Z, L, z, X) {
        var ee = K[J], ne = D(ee);
        if (ne !== F) {
          var G = V(ee);
          return new b(
            "Invalid " + L + " `" + z + "` of type " + ("`" + G + "` supplied to `" + Z + "`, expected ") + ("`" + F + "`."),
            { expectedType: F }
          );
        }
        return null;
      }
      return y(Y);
    }
    function S() {
      return y(s);
    }
    function w(F) {
      function Y(K, J, Z, L, z) {
        if (typeof F != "function")
          return new b("Property `" + z + "` of component `" + Z + "` has invalid PropType notation inside arrayOf.");
        var X = K[J];
        if (!Array.isArray(X)) {
          var ee = D(X);
          return new b("Invalid " + L + " `" + z + "` of type " + ("`" + ee + "` supplied to `" + Z + "`, expected an array."));
        }
        for (var ne = 0; ne < X.length; ne++) {
          var G = F(X, ne, Z, L, z + "[" + ne + "]", o);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return y(Y);
    }
    function x() {
      function F(Y, K, J, Z, L) {
        var z = Y[K];
        if (!l(z)) {
          var X = D(z);
          return new b("Invalid " + Z + " `" + L + "` of type " + ("`" + X + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(F);
    }
    function g() {
      function F(Y, K, J, Z, L) {
        var z = Y[K];
        if (!e.isValidElementType(z)) {
          var X = D(z);
          return new b("Invalid " + Z + " `" + L + "` of type " + ("`" + X + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(F);
    }
    function P(F) {
      function Y(K, J, Z, L, z) {
        if (!(K[J] instanceof F)) {
          var X = F.name || f, ee = U(K[J]);
          return new b("Invalid " + L + " `" + z + "` of type " + ("`" + ee + "` supplied to `" + Z + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return y(Y);
    }
    function R(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function Y(K, J, Z, L, z) {
        for (var X = K[J], ee = 0; ee < F.length; ee++)
          if (h(X, F[ee]))
            return null;
        var ne = JSON.stringify(F, function(te, _) {
          var B = V(_);
          return B === "symbol" ? String(_) : _;
        });
        return new b("Invalid " + L + " `" + z + "` of value `" + String(X) + "` " + ("supplied to `" + Z + "`, expected one of " + ne + "."));
      }
      return y(Y);
    }
    function I(F) {
      function Y(K, J, Z, L, z) {
        if (typeof F != "function")
          return new b("Property `" + z + "` of component `" + Z + "` has invalid PropType notation inside objectOf.");
        var X = K[J], ee = D(X);
        if (ee !== "object")
          return new b("Invalid " + L + " `" + z + "` of type " + ("`" + ee + "` supplied to `" + Z + "`, expected an object."));
        for (var ne in X)
          if (r(X, ne)) {
            var G = F(X, ne, Z, L, z + "." + ne, o);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return y(Y);
    }
    function j(F) {
      if (!Array.isArray(F))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var Y = 0; Y < F.length; Y++) {
        var K = F[Y];
        if (typeof K != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + O(K) + " at index " + Y + "."
          ), s;
      }
      function J(Z, L, z, X, ee) {
        for (var ne = [], G = 0; G < F.length; G++) {
          var te = F[G], _ = te(Z, L, z, X, ee, o);
          if (_ == null)
            return null;
          _.data && r(_.data, "expectedType") && ne.push(_.data.expectedType);
        }
        var B = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new b("Invalid " + X + " `" + ee + "` supplied to " + ("`" + z + "`" + B + "."));
      }
      return y(J);
    }
    function M() {
      function F(Y, K, J, Z, L) {
        return A(Y[K]) ? null : new b("Invalid " + Z + " `" + L + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return y(F);
    }
    function N(F, Y, K, J, Z) {
      return new b(
        (F || "React class") + ": " + Y + " type `" + K + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Z + "`."
      );
    }
    function q(F) {
      function Y(K, J, Z, L, z) {
        var X = K[J], ee = D(X);
        if (ee !== "object")
          return new b("Invalid " + L + " `" + z + "` of type `" + ee + "` " + ("supplied to `" + Z + "`, expected `object`."));
        for (var ne in F) {
          var G = F[ne];
          if (typeof G != "function")
            return N(Z, L, z, ne, V(G));
          var te = G(X, ne, Z, L, z + "." + ne, o);
          if (te)
            return te;
        }
        return null;
      }
      return y(Y);
    }
    function k(F) {
      function Y(K, J, Z, L, z) {
        var X = K[J], ee = D(X);
        if (ee !== "object")
          return new b("Invalid " + L + " `" + z + "` of type `" + ee + "` " + ("supplied to `" + Z + "`, expected `object`."));
        var ne = t({}, K[J], F);
        for (var G in ne) {
          var te = F[G];
          if (r(F, G) && typeof te != "function")
            return N(Z, L, z, G, V(te));
          if (!te)
            return new b(
              "Invalid " + L + " `" + z + "` key `" + G + "` supplied to `" + Z + "`.\nBad object: " + JSON.stringify(K[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(F), null, "  ")
            );
          var _ = te(X, G, Z, L, z + "." + G, o);
          if (_)
            return _;
        }
        return null;
      }
      return y(Y);
    }
    function A(F) {
      switch (typeof F) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !F;
        case "object":
          if (Array.isArray(F))
            return F.every(A);
          if (F === null || l(F))
            return !0;
          var Y = p(F);
          if (Y) {
            var K = Y.call(F), J;
            if (Y !== F.entries) {
              for (; !(J = K.next()).done; )
                if (!A(J.value))
                  return !1;
            } else
              for (; !(J = K.next()).done; ) {
                var Z = J.value;
                if (Z && !A(Z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(F, Y) {
      return F === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function D(F) {
      var Y = typeof F;
      return Array.isArray(F) ? "array" : F instanceof RegExp ? "object" : $(Y, F) ? "symbol" : Y;
    }
    function V(F) {
      if (typeof F > "u" || F === null)
        return "" + F;
      var Y = D(F);
      if (Y === "object") {
        if (F instanceof Date)
          return "date";
        if (F instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function O(F) {
      var Y = V(F);
      switch (Y) {
        case "array":
        case "object":
          return "an " + Y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Y;
        default:
          return Y;
      }
    }
    function U(F) {
      return !F.constructor || !F.constructor.name ? f : F.constructor.name;
    }
    return v.checkPropTypes = a, v.resetWarningCache = a.resetWarningCache, v.PropTypes = v, v;
  }, qa;
}
var Ha, Cl;
function _m() {
  if (Cl)
    return Ha;
  Cl = 1;
  var e = _i();
  function t() {
  }
  function o() {
  }
  return o.resetWarningCache = t, Ha = function() {
    function r(s, l, c, u, d, p) {
      if (p !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: o,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ha;
}
if (process.env.NODE_ENV !== "production") {
  var Am = mu(), Fm = !0;
  ci.exports = Nm()(Am.isElement, Fm);
} else
  ci.exports = _m()();
var Vm = ci.exports;
const n = /* @__PURE__ */ iu(Vm);
let ui;
typeof document == "object" && (ui = au({
  key: "css",
  prepend: !0
}));
function bu(e) {
  const {
    injectFirst: t,
    children: o
  } = e;
  return t && ui ? /* @__PURE__ */ E(bm, {
    value: ui,
    children: o
  }) : o;
}
process.env.NODE_ENV !== "production" && (bu.propTypes = {
  /**
   * Your component tree.
   */
  children: n.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: n.bool
});
function Lm(e) {
  return e == null || Object.keys(e).length === 0;
}
function Ai(e) {
  const {
    styles: t,
    defaultTheme: o = {}
  } = e;
  return /* @__PURE__ */ E(pu, {
    styles: typeof t == "function" ? (a) => t(Lm(a) ? o : a) : t
  });
}
process.env.NODE_ENV !== "production" && (Ai.propTypes = {
  defaultTheme: n.object,
  styles: n.oneOfType([n.array, n.string, n.object, n.func])
});
/**
 * @mui/styled-engine v5.16.6
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function gu(e, t) {
  const o = li(e, t);
  return process.env.NODE_ENV !== "production" ? (...r) => {
    const a = typeof e == "string" ? `"${e}"` : "component";
    return r.length === 0 ? console.error([`MUI: Seems like you called \`styled(${a})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : r.some((i) => i === void 0) && console.error(`MUI: the styled(${a})(...args) API requires all its args to be defined.`), o(...r);
  } : o;
}
const jm = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Ai,
  StyledEngineProvider: bu,
  ThemeContext: kn,
  css: fu,
  default: gu,
  internal_processStyles: jm,
  keyframes: ta
}, Symbol.toStringTag, { value: "Module" }));
function ue(e, t) {
  if (e == null)
    return {};
  var o = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r))
        continue;
      o[r] = e[r];
    }
  return o;
}
function ln(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function yu(e) {
  if (!ln(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((o) => {
    t[o] = yu(e[o]);
  }), t;
}
function ft(e, t, o = {
  clone: !0
}) {
  const r = o.clone ? T({}, e) : e;
  return ln(e) && ln(t) && Object.keys(t).forEach((a) => {
    ln(t[a]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, a) && ln(e[a]) ? r[a] = ft(e[a], t[a], o) : o.clone ? r[a] = ln(t[a]) ? yu(t[a]) : t[a] : r[a] = t[a];
  }), r;
}
const zm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft,
  isPlainObject: ln
}, Symbol.toStringTag, { value: "Module" })), Wm = ["values", "unit", "step"], Um = (e) => {
  const t = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return t.sort((o, r) => o.val - r.val), t.reduce((o, r) => T({}, o, {
    [r.key]: r.val
  }), {});
};
function vu(e) {
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
    unit: o = "px",
    step: r = 5
  } = e, a = ue(e, Wm), i = Um(t), s = Object.keys(i);
  function l(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${o})`;
  }
  function c(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - r / 100}${o})`;
  }
  function u(f, v) {
    const h = s.indexOf(v);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${o}) and (max-width:${(h !== -1 && typeof t[s[h]] == "number" ? t[s[h]] : v) - r / 100}${o})`;
  }
  function d(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : l(f);
  }
  function p(f) {
    const v = s.indexOf(f);
    return v === 0 ? l(s[1]) : v === s.length - 1 ? c(s[v]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  return T({
    keys: s,
    values: i,
    up: l,
    down: c,
    between: u,
    only: d,
    not: p,
    unit: o
  }, a);
}
const qm = {
  borderRadius: 4
}, dn = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.string, n.object, n.array]) : {};
function $o(e, t) {
  return t ? ft(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Fi = {
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
}, Sl = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Fi[e]}px)`
};
function Gt(e, t, o) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Sl;
    return t.reduce((s, l, c) => (s[i.up(i.keys[c])] = o(t[c]), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Sl;
    return Object.keys(t).reduce((s, l) => {
      if (Object.keys(i.values || Fi).indexOf(l) !== -1) {
        const c = i.up(l);
        s[c] = o(t[l], l);
      } else {
        const c = l;
        s[c] = t[c];
      }
      return s;
    }, {});
  }
  return o(t);
}
function Hm(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, a) => {
    const i = e.up(a);
    return r[i] = {}, r;
  }, {})) || {};
}
function Ym(e, t) {
  return e.reduce((o, r) => {
    const a = o[r];
    return (!a || Object.keys(a).length === 0) && delete o[r], o;
  }, t);
}
function re(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Kt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Km = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: re
}, Symbol.toStringTag, { value: "Module" }));
function na(e, t, o = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && o) {
    const r = `vars.${t}`.split(".").reduce((a, i) => a && a[i] ? a[i] : null, e);
    if (r != null)
      return r;
  }
  return t.split(".").reduce((r, a) => r && r[a] != null ? r[a] : null, e);
}
function _r(e, t, o, r = o) {
  let a;
  return typeof e == "function" ? a = e(o) : Array.isArray(e) ? a = e[o] || r : a = na(e, o) || r, t && (a = t(a, r, e)), a;
}
function Ke(e) {
  const {
    prop: t,
    cssProperty: o = e.prop,
    themeKey: r,
    transform: a
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, u = na(c, r) || {};
    return Gt(s, l, (p) => {
      let f = _r(u, a, p);
      return p === f && typeof p == "string" && (f = _r(u, a, `${t}${p === "default" ? "" : re(p)}`, p)), o === !1 ? f : {
        [o]: f
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: dn
  } : {}, i.filterProps = [t], i;
}
function Gm(e) {
  const t = {};
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
const Xm = {
  m: "margin",
  p: "padding"
}, Zm = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, El = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Qm = Gm((e) => {
  if (e.length > 2)
    if (El[e])
      e = El[e];
    else
      return [e];
  const [t, o] = e.split(""), r = Xm[t], a = Zm[o] || "";
  return Array.isArray(a) ? a.map((i) => r + i) : [r + a];
}), oa = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ra = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Jm = [...oa, ...ra];
function Zo(e, t, o, r) {
  var a;
  const i = (a = na(e, t, !1)) != null ? a : o;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${r} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function xu(e) {
  return Zo(e, "spacing", 8, "spacing");
}
function Qo(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const o = Math.abs(t), r = e(o);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function eh(e, t) {
  return (o) => e.reduce((r, a) => (r[a] = Qo(t, o), r), {});
}
function th(e, t, o, r) {
  if (t.indexOf(o) === -1)
    return null;
  const a = Qm(o), i = eh(a, r), s = e[o];
  return Gt(e, s, i);
}
function wu(e, t) {
  const o = xu(e.theme);
  return Object.keys(e).map((r) => th(e, t, r, o)).reduce($o, {});
}
function We(e) {
  return wu(e, oa);
}
We.propTypes = process.env.NODE_ENV !== "production" ? oa.reduce((e, t) => (e[t] = dn, e), {}) : {};
We.filterProps = oa;
function Ue(e) {
  return wu(e, ra);
}
Ue.propTypes = process.env.NODE_ENV !== "production" ? ra.reduce((e, t) => (e[t] = dn, e), {}) : {};
Ue.filterProps = ra;
process.env.NODE_ENV !== "production" && Jm.reduce((e, t) => (e[t] = dn, e), {});
function nh(e = 8) {
  if (e.mui)
    return e;
  const t = xu({
    spacing: e
  }), o = (...r) => (process.env.NODE_ENV !== "production" && (r.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${r.length}`)), (r.length === 0 ? [1] : r).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return o.mui = !0, o;
}
function aa(...e) {
  const t = e.reduce((r, a) => (a.filterProps.forEach((i) => {
    r[i] = a;
  }), r), {}), o = (r) => Object.keys(r).reduce((a, i) => t[i] ? $o(a, t[i](r)) : a, {});
  return o.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((r, a) => Object.assign(r, a.propTypes), {}) : {}, o.filterProps = e.reduce((r, a) => r.concat(a.filterProps), []), o;
}
function wt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Tt(e, t) {
  return Ke({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const oh = Tt("border", wt), rh = Tt("borderTop", wt), ah = Tt("borderRight", wt), ih = Tt("borderBottom", wt), sh = Tt("borderLeft", wt), lh = Tt("borderColor"), ch = Tt("borderTopColor"), uh = Tt("borderRightColor"), dh = Tt("borderBottomColor"), ph = Tt("borderLeftColor"), fh = Tt("outline", wt), mh = Tt("outlineColor"), ia = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Zo(e.theme, "shape.borderRadius", 4, "borderRadius"), o = (r) => ({
      borderRadius: Qo(t, r)
    });
    return Gt(e, e.borderRadius, o);
  }
  return null;
};
ia.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: dn
} : {};
ia.filterProps = ["borderRadius"];
aa(oh, rh, ah, ih, sh, lh, ch, uh, dh, ph, ia, fh, mh);
const sa = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Zo(e.theme, "spacing", 8, "gap"), o = (r) => ({
      gap: Qo(t, r)
    });
    return Gt(e, e.gap, o);
  }
  return null;
};
sa.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: dn
} : {};
sa.filterProps = ["gap"];
const la = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Zo(e.theme, "spacing", 8, "columnGap"), o = (r) => ({
      columnGap: Qo(t, r)
    });
    return Gt(e, e.columnGap, o);
  }
  return null;
};
la.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: dn
} : {};
la.filterProps = ["columnGap"];
const ca = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Zo(e.theme, "spacing", 8, "rowGap"), o = (r) => ({
      rowGap: Qo(t, r)
    });
    return Gt(e, e.rowGap, o);
  }
  return null;
};
ca.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: dn
} : {};
ca.filterProps = ["rowGap"];
const hh = Ke({
  prop: "gridColumn"
}), bh = Ke({
  prop: "gridRow"
}), gh = Ke({
  prop: "gridAutoFlow"
}), yh = Ke({
  prop: "gridAutoColumns"
}), vh = Ke({
  prop: "gridAutoRows"
}), xh = Ke({
  prop: "gridTemplateColumns"
}), wh = Ke({
  prop: "gridTemplateRows"
}), Ch = Ke({
  prop: "gridTemplateAreas"
}), Sh = Ke({
  prop: "gridArea"
});
aa(sa, la, ca, hh, bh, gh, yh, vh, xh, wh, Ch, Sh);
function qn(e, t) {
  return t === "grey" ? t : e;
}
const Eh = Ke({
  prop: "color",
  themeKey: "palette",
  transform: qn
}), Oh = Ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qn
}), Ph = Ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qn
});
aa(Eh, Oh, Ph);
function dt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Rh = Ke({
  prop: "width",
  transform: dt
}), Vi = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (o) => {
      var r, a;
      const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[o]) || Fi[o];
      return i ? ((a = e.theme) == null || (a = a.breakpoints) == null ? void 0 : a.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: dt(o)
      };
    };
    return Gt(e, e.maxWidth, t);
  }
  return null;
};
Vi.filterProps = ["maxWidth"];
const Th = Ke({
  prop: "minWidth",
  transform: dt
}), kh = Ke({
  prop: "height",
  transform: dt
}), Dh = Ke({
  prop: "maxHeight",
  transform: dt
}), Mh = Ke({
  prop: "minHeight",
  transform: dt
});
Ke({
  prop: "size",
  cssProperty: "width",
  transform: dt
});
Ke({
  prop: "size",
  cssProperty: "height",
  transform: dt
});
const $h = Ke({
  prop: "boxSizing"
});
aa(Rh, Vi, Th, kh, Dh, Mh, $h);
const Jo = {
  // borders
  border: {
    themeKey: "borders",
    transform: wt
  },
  borderTop: {
    themeKey: "borders",
    transform: wt
  },
  borderRight: {
    themeKey: "borders",
    transform: wt
  },
  borderBottom: {
    themeKey: "borders",
    transform: wt
  },
  borderLeft: {
    themeKey: "borders",
    transform: wt
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
    transform: wt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: ia
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qn
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qn
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qn
  },
  // spacing
  p: {
    style: Ue
  },
  pt: {
    style: Ue
  },
  pr: {
    style: Ue
  },
  pb: {
    style: Ue
  },
  pl: {
    style: Ue
  },
  px: {
    style: Ue
  },
  py: {
    style: Ue
  },
  padding: {
    style: Ue
  },
  paddingTop: {
    style: Ue
  },
  paddingRight: {
    style: Ue
  },
  paddingBottom: {
    style: Ue
  },
  paddingLeft: {
    style: Ue
  },
  paddingX: {
    style: Ue
  },
  paddingY: {
    style: Ue
  },
  paddingInline: {
    style: Ue
  },
  paddingInlineStart: {
    style: Ue
  },
  paddingInlineEnd: {
    style: Ue
  },
  paddingBlock: {
    style: Ue
  },
  paddingBlockStart: {
    style: Ue
  },
  paddingBlockEnd: {
    style: Ue
  },
  m: {
    style: We
  },
  mt: {
    style: We
  },
  mr: {
    style: We
  },
  mb: {
    style: We
  },
  ml: {
    style: We
  },
  mx: {
    style: We
  },
  my: {
    style: We
  },
  margin: {
    style: We
  },
  marginTop: {
    style: We
  },
  marginRight: {
    style: We
  },
  marginBottom: {
    style: We
  },
  marginLeft: {
    style: We
  },
  marginX: {
    style: We
  },
  marginY: {
    style: We
  },
  marginInline: {
    style: We
  },
  marginInlineStart: {
    style: We
  },
  marginInlineEnd: {
    style: We
  },
  marginBlock: {
    style: We
  },
  marginBlockStart: {
    style: We
  },
  marginBlockEnd: {
    style: We
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
    style: sa
  },
  rowGap: {
    style: ca
  },
  columnGap: {
    style: la
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
    transform: dt
  },
  maxWidth: {
    style: Vi
  },
  minWidth: {
    transform: dt
  },
  height: {
    transform: dt
  },
  maxHeight: {
    transform: dt
  },
  minHeight: {
    transform: dt
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
function Ih(...e) {
  const t = e.reduce((r, a) => r.concat(Object.keys(a)), []), o = new Set(t);
  return e.every((r) => o.size === Object.keys(r).length);
}
function Nh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cu() {
  function e(o, r, a, i) {
    const s = {
      [o]: r,
      theme: a
    }, l = i[o];
    if (!l)
      return {
        [o]: r
      };
    const {
      cssProperty: c = o,
      themeKey: u,
      transform: d,
      style: p
    } = l;
    if (r == null)
      return null;
    if (u === "typography" && r === "inherit")
      return {
        [o]: r
      };
    const f = na(a, u) || {};
    return p ? p(s) : Gt(s, r, (h) => {
      let b = _r(f, d, h);
      return h === b && typeof h == "string" && (b = _r(f, d, `${o}${h === "default" ? "" : re(h)}`, h)), c === !1 ? b : {
        [c]: b
      };
    });
  }
  function t(o) {
    var r;
    const {
      sx: a,
      theme: i = {}
    } = o || {};
    if (!a)
      return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Jo;
    function l(c) {
      let u = c;
      if (typeof c == "function")
        u = c(i);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = Hm(i.breakpoints), p = Object.keys(d);
      let f = d;
      return Object.keys(u).forEach((v) => {
        const h = Nh(u[v], i);
        if (h != null)
          if (typeof h == "object")
            if (s[v])
              f = $o(f, e(v, h, i, s));
            else {
              const b = Gt({
                theme: i
              }, h, (y) => ({
                [v]: y
              }));
              Ih(b, h) ? f[v] = t({
                sx: h,
                theme: i
              }) : f = $o(f, b);
            }
          else
            f = $o(f, e(v, h, i, s));
      }), Ym(p, f);
    }
    return Array.isArray(a) ? a.map(l) : l(a);
  }
  return t;
}
const er = Cu();
er.filterProps = ["sx"];
function Su(e, t) {
  const o = this;
  return o.vars && typeof o.getColorSchemeSelector == "function" ? {
    [o.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : o.palette.mode === e ? t : {};
}
const _h = ["breakpoints", "palette", "spacing", "shape"];
function ua(e = {}, ...t) {
  const {
    breakpoints: o = {},
    palette: r = {},
    spacing: a,
    shape: i = {}
  } = e, s = ue(e, _h), l = vu(o), c = nh(a);
  let u = ft({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: T({
      mode: "light"
    }, r),
    spacing: c,
    shape: T({}, qm, i)
  }, s);
  return u.applyStyles = Su, u = t.reduce((d, p) => ft(d, p), u), u.unstable_sxConfig = T({}, Jo, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return er({
      sx: p,
      theme: this
    });
  }, u;
}
const Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ua,
  private_createBreakpoints: vu,
  unstable_applyStyles: Su
}, Symbol.toStringTag, { value: "Module" }));
function Fh(e) {
  return Object.keys(e).length === 0;
}
function Eu(e = null) {
  const t = m.useContext(kn);
  return !t || Fh(t) ? e : t;
}
const Vh = ua();
function da(e = Vh) {
  return Eu(e);
}
function Ou({
  styles: e,
  themeId: t,
  defaultTheme: o = {}
}) {
  const r = da(o), a = typeof e == "function" ? e(t && r[t] || r) : e;
  return /* @__PURE__ */ E(Ai, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (Ou.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: n.object,
  /**
   * @ignore
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool]),
  /**
   * @ignore
   */
  themeId: n.string
});
const Lh = ["sx"], jh = (e) => {
  var t, o;
  const r = {
    systemProps: {},
    otherProps: {}
  }, a = (t = e == null || (o = e.theme) == null ? void 0 : o.unstable_sxConfig) != null ? t : Jo;
  return Object.keys(e).forEach((i) => {
    a[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i];
  }), r;
};
function Li(e) {
  const {
    sx: t
  } = e, o = ue(e, Lh), {
    systemProps: r,
    otherProps: a
  } = jh(o);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const l = t(...s);
    return ln(l) ? T({}, r, l) : r;
  } : i = T({}, r, t), T({}, a, {
    sx: i
  });
}
const Bh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er,
  extendSxProp: Li,
  unstable_createStyleFunctionSx: Cu,
  unstable_defaultSxConfig: Jo
}, Symbol.toStringTag, { value: "Module" })), Ol = (e) => e, zh = () => {
  let e = Ol;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ol;
    }
  };
}, ji = zh();
function Pu(e) {
  var t, o, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (o = Pu(e[t])) && (r && (r += " "), r += o);
    } else
      for (o in e)
        e[o] && (r && (r += " "), r += o);
  return r;
}
function ae() {
  for (var e, t, o = 0, r = "", a = arguments.length; o < a; o++)
    (e = arguments[o]) && (t = Pu(e)) && (r && (r += " "), r += t);
  return r;
}
const Wh = ["className", "component"];
function Uh(e = {}) {
  const {
    themeId: t,
    defaultTheme: o,
    defaultClassName: r = "MuiBox-root",
    generateClassName: a
  } = e, i = gu("div", {
    shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as"
  })(er);
  return /* @__PURE__ */ m.forwardRef(function(c, u) {
    const d = da(o), p = Li(c), {
      className: f,
      component: v = "div"
    } = p, h = ue(p, Wh);
    return /* @__PURE__ */ E(i, T({
      as: v,
      ref: u,
      className: ae(f, a ? a(r) : r),
      theme: t && d[t] || d
    }, h));
  });
}
const qh = {
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
function pe(e, t, o = "Mui") {
  const r = qh[t];
  return r ? `${o}-${r}` : `${ji.generate(e)}-${t}`;
}
function de(e, t, o = "Mui") {
  const r = {};
  return t.forEach((a) => {
    r[a] = pe(e, a, o);
  }), r;
}
var di = { exports: {} }, Ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pl;
function Hh() {
  if (Pl)
    return Ie;
  Pl = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h;
  h = Symbol.for("react.module.reference");
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var C = y.$$typeof;
      switch (C) {
        case e:
          switch (y = y.type, y) {
            case o:
            case a:
            case r:
            case u:
            case d:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case s:
                case c:
                case f:
                case p:
                case i:
                  return y;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return Ie.ContextConsumer = s, Ie.ContextProvider = i, Ie.Element = e, Ie.ForwardRef = c, Ie.Fragment = o, Ie.Lazy = f, Ie.Memo = p, Ie.Portal = t, Ie.Profiler = a, Ie.StrictMode = r, Ie.Suspense = u, Ie.SuspenseList = d, Ie.isAsyncMode = function() {
    return !1;
  }, Ie.isConcurrentMode = function() {
    return !1;
  }, Ie.isContextConsumer = function(y) {
    return b(y) === s;
  }, Ie.isContextProvider = function(y) {
    return b(y) === i;
  }, Ie.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, Ie.isForwardRef = function(y) {
    return b(y) === c;
  }, Ie.isFragment = function(y) {
    return b(y) === o;
  }, Ie.isLazy = function(y) {
    return b(y) === f;
  }, Ie.isMemo = function(y) {
    return b(y) === p;
  }, Ie.isPortal = function(y) {
    return b(y) === t;
  }, Ie.isProfiler = function(y) {
    return b(y) === a;
  }, Ie.isStrictMode = function(y) {
    return b(y) === r;
  }, Ie.isSuspense = function(y) {
    return b(y) === u;
  }, Ie.isSuspenseList = function(y) {
    return b(y) === d;
  }, Ie.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === o || y === a || y === r || y === u || y === d || y === v || typeof y == "object" && y !== null && (y.$$typeof === f || y.$$typeof === p || y.$$typeof === i || y.$$typeof === s || y.$$typeof === c || y.$$typeof === h || y.getModuleId !== void 0);
  }, Ie.typeOf = b, Ie;
}
var Ne = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl;
function Yh() {
  return Rl || (Rl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), h = !1, b = !1, y = !1, C = !1, S = !1, w;
    w = Symbol.for("react.module.reference");
    function x(H) {
      return !!(typeof H == "string" || typeof H == "function" || H === o || H === a || S || H === r || H === u || H === d || C || H === v || h || b || y || typeof H == "object" && H !== null && (H.$$typeof === f || H.$$typeof === p || H.$$typeof === i || H.$$typeof === s || H.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      H.$$typeof === w || H.getModuleId !== void 0));
    }
    function g(H) {
      if (typeof H == "object" && H !== null) {
        var oe = H.$$typeof;
        switch (oe) {
          case e:
            var he = H.type;
            switch (he) {
              case o:
              case a:
              case r:
              case u:
              case d:
                return he;
              default:
                var ie = he && he.$$typeof;
                switch (ie) {
                  case l:
                  case s:
                  case c:
                  case f:
                  case p:
                  case i:
                    return ie;
                  default:
                    return oe;
                }
            }
          case t:
            return oe;
        }
      }
    }
    var P = s, R = i, I = e, j = c, M = o, N = f, q = p, k = t, A = a, $ = r, D = u, V = d, O = !1, U = !1;
    function F(H) {
      return O || (O = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(H) {
      return U || (U = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(H) {
      return g(H) === s;
    }
    function J(H) {
      return g(H) === i;
    }
    function Z(H) {
      return typeof H == "object" && H !== null && H.$$typeof === e;
    }
    function L(H) {
      return g(H) === c;
    }
    function z(H) {
      return g(H) === o;
    }
    function X(H) {
      return g(H) === f;
    }
    function ee(H) {
      return g(H) === p;
    }
    function ne(H) {
      return g(H) === t;
    }
    function G(H) {
      return g(H) === a;
    }
    function te(H) {
      return g(H) === r;
    }
    function _(H) {
      return g(H) === u;
    }
    function B(H) {
      return g(H) === d;
    }
    Ne.ContextConsumer = P, Ne.ContextProvider = R, Ne.Element = I, Ne.ForwardRef = j, Ne.Fragment = M, Ne.Lazy = N, Ne.Memo = q, Ne.Portal = k, Ne.Profiler = A, Ne.StrictMode = $, Ne.Suspense = D, Ne.SuspenseList = V, Ne.isAsyncMode = F, Ne.isConcurrentMode = Y, Ne.isContextConsumer = K, Ne.isContextProvider = J, Ne.isElement = Z, Ne.isForwardRef = L, Ne.isFragment = z, Ne.isLazy = X, Ne.isMemo = ee, Ne.isPortal = ne, Ne.isProfiler = G, Ne.isStrictMode = te, Ne.isSuspense = _, Ne.isSuspenseList = B, Ne.isValidElementType = x, Ne.typeOf = g;
  }()), Ne;
}
process.env.NODE_ENV === "production" ? di.exports = Hh() : di.exports = Yh();
var zo = di.exports;
const Kh = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ru(e) {
  const t = `${e}`.match(Kh);
  return t && t[1] || "";
}
function Tu(e, t = "") {
  return e.displayName || e.name || Ru(e) || t;
}
function Tl(e, t, o) {
  const r = Tu(t);
  return e.displayName || (r !== "" ? `${o}(${r})` : o);
}
function Gh(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Tu(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case zo.ForwardRef:
          return Tl(e, e.render, "ForwardRef");
        case zo.Memo:
          return Tl(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gh,
  getFunctionName: Ru
}, Symbol.toStringTag, { value: "Module" }));
function Zh(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
ua();
function Wo(e, t) {
  const o = T({}, t);
  return Object.keys(e).forEach((r) => {
    if (r.toString().match(/^(components|slots)$/))
      o[r] = T({}, e[r], o[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const a = e[r] || {}, i = t[r];
      o[r] = {}, !i || !Object.keys(i) ? o[r] = a : !a || !Object.keys(a) ? o[r] = i : (o[r] = T({}, i), Object.keys(a).forEach((s) => {
        o[r][s] = Wo(a[s], i[s]);
      }));
    } else
      o[r] === void 0 && (o[r] = e[r]);
  }), o;
}
function ku(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  return !t || !t.components || !t.components[o] || !t.components[o].defaultProps ? r : Wo(t.components[o].defaultProps, r);
}
function Qh({
  props: e,
  name: t,
  defaultTheme: o,
  themeId: r
}) {
  let a = da(o);
  return r && (a = a[r] || a), ku({
    theme: a,
    name: t,
    props: e
  });
}
const et = typeof window < "u" ? m.useLayoutEffect : m.useEffect;
function Jh(e, t, o, r, a) {
  const [i, s] = m.useState(() => a && o ? o(e).matches : r ? r(e).matches : t);
  return et(() => {
    let l = !0;
    if (!o)
      return;
    const c = o(e), u = () => {
      l && s(c.matches);
    };
    return u(), c.addListener(u), () => {
      l = !1, c.removeListener(u);
    };
  }, [e, o]), i;
}
const Du = m.useSyncExternalStore;
function eb(e, t, o, r, a) {
  const i = m.useCallback(() => t, [t]), s = m.useMemo(() => {
    if (a && o)
      return () => o(e).matches;
    if (r !== null) {
      const {
        matches: d
      } = r(e);
      return () => d;
    }
    return i;
  }, [i, e, r, a, o]), [l, c] = m.useMemo(() => {
    if (o === null)
      return [i, () => () => {
      }];
    const d = o(e);
    return [() => d.matches, (p) => (d.addListener(p), () => {
      d.removeListener(p);
    })];
  }, [i, o, e]);
  return Du(c, l, s);
}
function Mu(e, t = {}) {
  const o = Eu(), r = typeof window < "u" && typeof window.matchMedia < "u", {
    defaultMatches: a = !1,
    matchMedia: i = r ? window.matchMedia : null,
    ssrMatchMedia: s = null,
    noSsr: l = !1
  } = ku({
    name: "MuiUseMediaQuery",
    props: t,
    theme: o
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && o === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let c = typeof e == "function" ? e(o) : e;
  c = c.replace(/^@media( ?)/m, "");
  const d = (Du !== void 0 ? eb : Jh)(c, a, i, s, l);
  return process.env.NODE_ENV !== "production" && m.useDebugValue({
    query: c,
    match: d
  }), d;
}
function $u(e, t = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, o));
}
const tb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $u
}, Symbol.toStringTag, { value: "Module" }));
function nb(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), $u(e, t, o);
}
function ob(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Iu(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Iu(ob(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Kt(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (o === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Kt(10, a));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: o,
    values: r,
    colorSpace: a
  };
}
function rb(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, i) => i < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function to(e, t) {
  return e = Iu(e), t = nb(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, rb(e);
}
function Jt(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...r) {
    return e(...r) || t(...r);
  };
}
function ab(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Nu(e, t, o, r, a) {
  const i = e[t], s = a || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  const c = i.type;
  return typeof c == "function" && !ab(c) && (l = "Did you accidentally use a plain function component for an element instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an element that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const fo = Jt(n.element, Nu);
fo.isRequired = Jt(n.element.isRequired, Nu);
function ib(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function sb(e, t, o, r, a) {
  const i = e[t], s = a || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let l;
  return typeof i == "function" && !ib(i) && (l = "Did you accidentally provide a plain function component instead?"), l !== void 0 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an element type that can hold a ref. ${l} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const pa = Jt(n.elementType, sb), lb = "exact-prop: ​";
function _u(e) {
  return process.env.NODE_ENV === "production" ? e : T({}, e, {
    [lb]: (t) => {
      const o = Object.keys(t).filter((r) => !e.hasOwnProperty(r));
      return o.length > 0 ? new Error(`The following props are not supported: ${o.map((r) => `\`${r}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Wt(e, t, o, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = e[t], s = a || t;
  return i == null ? null : i && i.nodeType !== 1 ? new Error(`Invalid ${r} \`${s}\` supplied to \`${o}\`. Expected an HTMLElement.`) : null;
}
const qe = n.oneOfType([n.func, n.object]);
function pi(...e) {
  return e.reduce((t, o) => o == null ? t : function(...a) {
    t.apply(this, a), o.apply(this, a);
  }, () => {
  });
}
function fa(e, t = 166) {
  let o;
  function r(...a) {
    const i = () => {
      e.apply(this, a);
    };
    clearTimeout(o), o = setTimeout(i, t);
  }
  return r.clear = () => {
    clearTimeout(o);
  }, r;
}
function cb(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (o, r, a, i, s) => {
    const l = a || "<<anonymous>>", c = s || r;
    return typeof o[r] < "u" ? new Error(`The ${i} \`${c}\` of \`${l}\` is deprecated. ${t}`) : null;
  };
}
function Hn(e, t) {
  var o, r;
  return /* @__PURE__ */ m.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (o = e.type.muiName) != null ? o : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function Je(e) {
  return e && e.ownerDocument || document;
}
function Ut(e) {
  return Je(e).defaultView || window;
}
function ub(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const o = t ? T({}, t.propTypes) : null;
  return (a) => (i, s, l, c, u, ...d) => {
    const p = u || s, f = o == null ? void 0 : o[p];
    if (f) {
      const v = f(i, s, l, c, u, ...d);
      if (v)
        return v;
    }
    return typeof i[s] < "u" && !i[a] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${a}\` prop.`) : null;
  };
}
function Ar(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let kl = 0;
function db(e) {
  const [t, o] = m.useState(e), r = e || t;
  return m.useEffect(() => {
    t == null && (kl += 1, o(`mui-${kl}`));
  }, [t]), r;
}
const Dl = m.useId;
function en(e) {
  if (Dl !== void 0) {
    const t = Dl();
    return e ?? t;
  }
  return db(e);
}
function Au(e, t, o, r, a) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = a || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function $t({
  controlled: e,
  default: t,
  name: o,
  state: r = "value"
}) {
  const {
    current: a
  } = m.useRef(e !== void 0), [i, s] = m.useState(t), l = a ? e : i;
  if (process.env.NODE_ENV !== "production") {
    m.useEffect(() => {
      a !== (e !== void 0) && console.error([`MUI: A component is changing the ${a ? "" : "un"}controlled ${r} state of ${o} to be ${a ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${o} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [r, o, e]);
    const {
      current: u
    } = m.useRef(t);
    m.useEffect(() => {
      !a && !Object.is(u, t) && console.error([`MUI: A component is changing the default ${r} state of an uncontrolled ${o} after being initialized. To suppress this warning opt to use a controlled ${o}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const c = m.useCallback((u) => {
    a || s(u);
  }, []);
  return [l, c];
}
function se(e) {
  const t = m.useRef(e);
  return et(() => {
    t.current = e;
  }), m.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...o)
  )).current;
}
function Se(...e) {
  return m.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((o) => {
      Ar(o, t);
    });
  }, e);
}
const Ml = {};
function pb(e, t) {
  const o = m.useRef(Ml);
  return o.current === Ml && (o.current = e(t)), o;
}
const fb = [];
function mb(e) {
  m.useEffect(e, fb);
}
class ma {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new ma();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, t);
  }
}
function Fu() {
  const e = pb(ma.create).current;
  return mb(e.disposeEffect), e;
}
let ha = !0, fi = !1;
const hb = new ma(), bb = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function gb(e) {
  const {
    type: t,
    tagName: o
  } = e;
  return !!(o === "INPUT" && bb[t] && !e.readOnly || o === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function yb(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ha = !0);
}
function Ya() {
  ha = !1;
}
function vb() {
  this.visibilityState === "hidden" && fi && (ha = !0);
}
function xb(e) {
  e.addEventListener("keydown", yb, !0), e.addEventListener("mousedown", Ya, !0), e.addEventListener("pointerdown", Ya, !0), e.addEventListener("touchstart", Ya, !0), e.addEventListener("visibilitychange", vb, !0);
}
function wb(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return ha || gb(t);
}
function Vu() {
  const e = m.useCallback((a) => {
    a != null && xb(a.ownerDocument);
  }, []), t = m.useRef(!1);
  function o() {
    return t.current ? (fi = !0, hb.start(100, () => {
      fi = !1;
    }), t.current = !1, !0) : !1;
  }
  function r(a) {
    return wb(a) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: o,
    ref: e
  };
}
function Lu(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
const Cb = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: "1px"
};
function Sb(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Eb(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const Ob = Number.isInteger || Eb;
function ju(e, t, o, r) {
  const a = e[t];
  if (a == null || !Ob(a)) {
    const i = Sb(a);
    return new RangeError(`Invalid ${r} \`${t}\` of type \`${i}\` supplied to \`${o}\`, expected \`integer\`.`);
  }
  return null;
}
function Bu(e, t, ...o) {
  return e[t] === void 0 ? null : ju(e, t, ...o);
}
function mi() {
  return null;
}
Bu.isRequired = ju;
mi.isRequired = mi;
const Bi = process.env.NODE_ENV === "production" ? mi : Bu;
function me(e, t, o = void 0) {
  const r = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (a) => {
      r[a] = e[a].reduce((i, s) => {
        if (s) {
          const l = t(s);
          l !== "" && i.push(l), o && o[s] && i.push(o[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), r;
}
function no(e) {
  return typeof e == "string";
}
function Pb(e, t, o) {
  return e === void 0 || no(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, o)
  });
}
function zu(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function $l(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function Rb(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: i
  } = e;
  if (!t) {
    const v = ae(o == null ? void 0 : o.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), h = T({}, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), b = T({}, o, a, r);
    return v.length > 0 && (b.className = v), Object.keys(h).length > 0 && (b.style = h), {
      props: b,
      internalRef: void 0
    };
  }
  const s = zu(T({}, a, r)), l = $l(r), c = $l(a), u = t(s), d = ae(u == null ? void 0 : u.className, o == null ? void 0 : o.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), p = T({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), f = T({}, u, o, c, l);
  return d.length > 0 && (f.className = d), Object.keys(p).length > 0 && (f.style = p), {
    props: f,
    internalRef: u.ref
  };
}
function Tb(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
const kb = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Pn(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: i = !1
  } = e, s = ue(e, kb), l = i ? {} : Tb(r, a), {
    props: c,
    internalRef: u
  } = Rb(T({}, s, {
    externalSlotProps: l
  })), d = Se(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return Pb(o, T({}, c, {
    ref: d
  }), a);
}
const Db = /* @__PURE__ */ m.createContext();
process.env.NODE_ENV !== "production" && (n.node, n.bool);
const It = () => {
  const e = m.useContext(Db);
  return e ?? !1;
}, Mb = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (n.node, n.object);
function $b(e) {
  const {
    theme: t,
    name: o,
    props: r
  } = e;
  if (!t || !t.components || !t.components[o])
    return r;
  const a = t.components[o];
  return a.defaultProps ? Wo(a.defaultProps, r) : !a.styleOverrides && !a.variants ? Wo(a, r) : r;
}
function Ib({
  props: e,
  name: t
}) {
  const o = m.useContext(Mb);
  return $b({
    props: e,
    name: t,
    theme: {
      components: o
    }
  });
}
const tr = "$$material";
function Nb(e, t) {
  return T({
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
var Ge = {}, Wu = { exports: {} };
(function(e) {
  function t(o) {
    return o && o.__esModule ? o : {
      default: o
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Wu);
var Ht = Wu.exports;
const _b = /* @__PURE__ */ Qt(Cf), Ab = /* @__PURE__ */ Qt(tb);
var Uu = Ht;
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
var Be = Ge.alpha = Xu;
Ge.blend = Hb;
Ge.colorChannel = void 0;
var qu = Ge.darken = Wi;
Ge.decomposeColor = Et;
Ge.emphasize = Zu;
var Il = Ge.getContrastRatio = Bb;
Ge.getLuminance = Fr;
Ge.hexToRgb = Yu;
Ge.hslToRgb = Gu;
var Hu = Ge.lighten = Ui;
Ge.private_safeAlpha = zb;
Ge.private_safeColorChannel = void 0;
Ge.private_safeDarken = Wb;
Ge.private_safeEmphasize = qb;
Ge.private_safeLighten = Ub;
Ge.recomposeColor = mo;
Ge.rgbToHex = jb;
var Nl = Uu(_b), Fb = Uu(Ab);
function zi(e, t = 0, o = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > o) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${o}].`), (0, Fb.default)(e, t, o);
}
function Yu(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(t);
  return o && o[0].length === 1 && (o = o.map((r) => r + r)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((r, a) => a < 3 ? parseInt(r, 16) : Math.round(parseInt(r, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Vb(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Et(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Et(Yu(e));
  const t = e.indexOf("("), o = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(o) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Nl.default)(9, e));
  let r = e.substring(t + 1, e.length - 1), a;
  if (o === "color") {
    if (r = r.split(" "), a = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(a) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${a}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Nl.default)(10, a));
  } else
    r = r.split(",");
  return r = r.map((i) => parseFloat(i)), {
    type: o,
    values: r,
    colorSpace: a
  };
}
const Ku = (e) => {
  const t = Et(e);
  return t.values.slice(0, 3).map((o, r) => t.type.indexOf("hsl") !== -1 && r !== 0 ? `${o}%` : o).join(" ");
};
Ge.colorChannel = Ku;
const Lb = (e, t) => {
  try {
    return Ku(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
Ge.private_safeColorChannel = Lb;
function mo(e) {
  const {
    type: t,
    colorSpace: o
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((a, i) => i < 3 ? parseInt(a, 10) : a) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${o} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`;
}
function jb(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Et(e);
  return `#${t.map((o, r) => Vb(r === 3 ? Math.round(255 * o) : o)).join("")}`;
}
function Gu(e) {
  e = Et(e);
  const {
    values: t
  } = e, o = t[0], r = t[1] / 100, a = t[2] / 100, i = r * Math.min(a, 1 - a), s = (u, d = (u + o / 30) % 12) => a - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), mo({
    type: l,
    values: c
  });
}
function Fr(e) {
  e = Et(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Et(Gu(e)).values : e.values;
  return t = t.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Bb(e, t) {
  const o = Fr(e), r = Fr(t);
  return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
}
function Xu(e, t) {
  return e = Et(e), t = zi(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, mo(e);
}
function zb(e, t, o) {
  try {
    return Xu(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Wi(e, t) {
  if (e = Et(e), t = zi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - t;
  return mo(e);
}
function Wb(e, t, o) {
  try {
    return Wi(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Ui(e, t) {
  if (e = Et(e), t = zi(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * t;
  return mo(e);
}
function Ub(e, t, o) {
  try {
    return Ui(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Zu(e, t = 0.15) {
  return Fr(e) > 0.5 ? Wi(e, t) : Ui(e, t);
}
function qb(e, t, o) {
  try {
    return Zu(e, t);
  } catch {
    return o && process.env.NODE_ENV !== "production" && console.warn(o), e;
  }
}
function Hb(e, t, o, r = 1) {
  const a = (c, u) => Math.round((c ** (1 / r) * (1 - o) + u ** (1 / r) * o) ** r), i = Et(e), s = Et(t), l = [a(i.values[0], s.values[0]), a(i.values[1], s.values[1]), a(i.values[2], s.values[2])];
  return mo({
    type: "rgb",
    values: l
  });
}
const Uo = {
  black: "#000",
  white: "#fff"
}, Vr = {
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
}, In = {
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
}, Nn = {
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
}, Yt = {
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
}, _n = {
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
}, An = {
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
}, Fn = {
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
}, Yb = ["mode", "contrastThreshold", "tonalOffset"], _l = {
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
    paper: Uo.white,
    default: Uo.white
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
}, Ka = {
  text: {
    primary: Uo.white,
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
    active: Uo.white,
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
function Al(e, t, o, r) {
  const a = r.light || r, i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(o) ? e[t] = e[o] : t === "light" ? e.light = Hu(e.main, a) : t === "dark" && (e.dark = qu(e.main, i)));
}
function Kb(e = "light") {
  return e === "dark" ? {
    main: _n[200],
    light: _n[50],
    dark: _n[400]
  } : {
    main: _n[700],
    light: _n[400],
    dark: _n[800]
  };
}
function Gb(e = "light") {
  return e === "dark" ? {
    main: In[200],
    light: In[50],
    dark: In[400]
  } : {
    main: In[500],
    light: In[300],
    dark: In[700]
  };
}
function Xb(e = "light") {
  return e === "dark" ? {
    main: Nn[500],
    light: Nn[300],
    dark: Nn[700]
  } : {
    main: Nn[700],
    light: Nn[400],
    dark: Nn[800]
  };
}
function Zb(e = "light") {
  return e === "dark" ? {
    main: An[400],
    light: An[300],
    dark: An[700]
  } : {
    main: An[700],
    light: An[500],
    dark: An[900]
  };
}
function Qb(e = "light") {
  return e === "dark" ? {
    main: Fn[400],
    light: Fn[300],
    dark: Fn[700]
  } : {
    main: Fn[800],
    light: Fn[500],
    dark: Fn[900]
  };
}
function Jb(e = "light") {
  return e === "dark" ? {
    main: Yt[400],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Yt[500],
    dark: Yt[900]
  };
}
function eg(e) {
  const {
    mode: t = "light",
    contrastThreshold: o = 3,
    tonalOffset: r = 0.2
  } = e, a = ue(e, Yb), i = e.primary || Kb(t), s = e.secondary || Gb(t), l = e.error || Xb(t), c = e.info || Zb(t), u = e.success || Qb(t), d = e.warning || Jb(t);
  function p(b) {
    const y = Il(b, Ka.text.primary) >= o ? Ka.text.primary : _l.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = Il(b, y);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${y} on ${b}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const f = ({
    color: b,
    name: y,
    mainShade: C = 500,
    lightShade: S = 300,
    darkShade: w = 700
  }) => {
    if (b = T({}, b), !b.main && b[C] && (b.main = b[C]), !b.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Kt(11, y ? ` (${y})` : "", C));
    if (typeof b.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(b.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Kt(12, y ? ` (${y})` : "", JSON.stringify(b.main)));
    return Al(b, "light", S, r), Al(b, "dark", w, r), b.contrastText || (b.contrastText = p(b.main)), b;
  }, v = {
    dark: Ka,
    light: _l
  };
  return process.env.NODE_ENV !== "production" && (v[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), ft(T({
    // A collection of common colors.
    common: T({}, Uo),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: c,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: u,
      name: "success"
    }),
    // The grey colors.
    grey: Vr,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: r
  }, v[t]), a);
}
const tg = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ng(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Fl = {
  textTransform: "uppercase"
}, Vl = '"Roboto", "Helvetica", "Arial", sans-serif';
function og(e, t) {
  const o = typeof t == "function" ? t(e) : t, {
    fontFamily: r = Vl,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: l = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p
  } = o, f = ue(o, tg);
  process.env.NODE_ENV !== "production" && (typeof a != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = a / 14, h = p || ((C) => `${C / u * v}rem`), b = (C, S, w, x, g) => T({
    fontFamily: r,
    fontWeight: C,
    fontSize: h(S),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w
  }, r === Vl ? {
    letterSpacing: `${ng(x / S)}em`
  } : {}, g, d), y = {
    h1: b(i, 96, 1.167, -1.5),
    h2: b(i, 60, 1.2, -0.5),
    h3: b(s, 48, 1.167, 0),
    h4: b(s, 34, 1.235, 0.25),
    h5: b(s, 24, 1.334, 0),
    h6: b(l, 20, 1.6, 0.15),
    subtitle1: b(s, 16, 1.75, 0.15),
    subtitle2: b(l, 14, 1.57, 0.1),
    body1: b(s, 16, 1.5, 0.15),
    body2: b(s, 14, 1.43, 0.15),
    button: b(l, 14, 1.75, 0.4, Fl),
    caption: b(s, 12, 1.66, 0.4),
    overline: b(s, 12, 2.66, 1, Fl),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ft(T({
    htmlFontSize: u,
    pxToRem: h,
    fontFamily: r,
    fontSize: a,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: l,
    fontWeightBold: c
  }, y), f, {
    clone: !1
    // No need to clone deep
  });
}
const rg = 0.2, ag = 0.14, ig = 0.12;
function je(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rg})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ag})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ig})`].join(",");
}
const sg = ["none", je(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), je(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), je(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), je(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), je(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), je(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), je(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), je(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), je(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), je(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), je(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), je(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), je(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), je(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), je(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), je(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), je(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), je(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), je(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), je(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), je(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), je(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), je(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), je(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], lg = ["duration", "easing", "delay"], cg = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ug = {
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
function Ll(e) {
  return `${Math.round(e)}ms`;
}
function dg(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function pg(e) {
  const t = T({}, cg, e.easing), o = T({}, ug, e.duration);
  return T({
    getAutoHeightDuration: dg,
    create: (a = ["all"], i = {}) => {
      const {
        duration: s = o.standard,
        easing: l = t.easeInOut,
        delay: c = 0
      } = i, u = ue(i, lg);
      if (process.env.NODE_ENV !== "production") {
        const d = (f) => typeof f == "string", p = (f) => !isNaN(parseFloat(f));
        !d(a) && !Array.isArray(a) && console.error('MUI: Argument "props" must be a string or Array.'), !p(s) && !d(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), d(l) || console.error('MUI: Argument "easing" must be a string.'), !p(c) && !d(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(a) ? a : [a]).map((d) => `${d} ${typeof s == "string" ? s : Ll(s)} ${l} ${typeof c == "string" ? c : Ll(c)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: o
  });
}
const fg = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, mg = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Qu(e = {}, ...t) {
  const {
    mixins: o = {},
    palette: r = {},
    transitions: a = {},
    typography: i = {}
  } = e, s = ue(e, mg);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Kt(18));
  const l = eg(r), c = ua(e);
  let u = ft(c, {
    mixins: Nb(c.breakpoints, o),
    palette: l,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: sg.slice(),
    typography: og(l, i),
    transitions: pg(a),
    zIndex: T({}, fg)
  });
  if (u = ft(u, s), u = t.reduce((d, p) => ft(d, p), u), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (f, v) => {
      let h;
      for (h in f) {
        const b = f[h];
        if (d.indexOf(h) !== -1 && Object.keys(b).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = pe("", h);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${h}\` internal state.`, "You can not override it like this: ", JSON.stringify(f, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: b
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          f[h] = {};
        }
      }
    };
    Object.keys(u.components).forEach((f) => {
      const v = u.components[f].styleOverrides;
      v && f.indexOf("Mui") === 0 && p(v, f);
    });
  }
  return u.unstable_sxConfig = T({}, Jo, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(p) {
    return er({
      sx: p,
      theme: this
    });
  }, u;
}
const ba = Qu();
function tn() {
  const e = da(ba);
  return process.env.NODE_ENV !== "production" && m.useDebugValue(e), e[tr] || e;
}
function Le({
  props: e,
  name: t
}) {
  return Qh({
    props: e,
    name: t,
    defaultTheme: ba,
    themeId: tr
  });
}
var nr = {}, Ga = { exports: {} }, jl;
function hg() {
  return jl || (jl = 1, function(e) {
    function t(o, r) {
      if (o == null)
        return {};
      var a = {};
      for (var i in o)
        if ({}.hasOwnProperty.call(o, i)) {
          if (r.includes(i))
            continue;
          a[i] = o[i];
        }
      return a;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(Ga)), Ga.exports;
}
const Ju = /* @__PURE__ */ Qt(Bm), bg = /* @__PURE__ */ Qt(zm), gg = /* @__PURE__ */ Qt(Km), yg = /* @__PURE__ */ Qt(Xh), vg = /* @__PURE__ */ Qt(Ah), xg = /* @__PURE__ */ Qt(Bh);
var ho = Ht;
Object.defineProperty(nr, "__esModule", {
  value: !0
});
var wg = nr.default = _g;
nr.shouldForwardProp = Tr;
nr.systemDefaultTheme = void 0;
var vt = ho(du()), hi = ho(hg()), Bl = Dg(Ju), Cg = bg, Sg = ho(gg), Eg = ho(yg), Og = ho(vg), Pg = ho(xg);
const Rg = ["ownerState"], Tg = ["variants"], kg = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ed(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (ed = function(r) {
    return r ? o : t;
  })(e);
}
function Dg(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = ed(t);
  if (o && o.has(e))
    return o.get(e);
  var r = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = e[i];
    }
  return r.default = e, o && o.set(e, r), r;
}
function Mg(e) {
  return Object.keys(e).length === 0;
}
function $g(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Tr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Ig = nr.systemDefaultTheme = (0, Og.default)(), zl = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function hr({
  defaultTheme: e,
  theme: t,
  themeId: o
}) {
  return Mg(t) ? e : t[o] || t;
}
function Ng(e) {
  return e ? (t, o) => o[e] : null;
}
function kr(e, t) {
  let {
    ownerState: o
  } = t, r = (0, hi.default)(t, Rg);
  const a = typeof e == "function" ? e((0, vt.default)({
    ownerState: o
  }, r)) : e;
  if (Array.isArray(a))
    return a.flatMap((i) => kr(i, (0, vt.default)({
      ownerState: o
    }, r)));
  if (a && typeof a == "object" && Array.isArray(a.variants)) {
    const {
      variants: i = []
    } = a;
    let l = (0, hi.default)(a, Tg);
    return i.forEach((c) => {
      let u = !0;
      typeof c.props == "function" ? u = c.props((0, vt.default)({
        ownerState: o
      }, r, o)) : Object.keys(c.props).forEach((d) => {
        (o == null ? void 0 : o[d]) !== c.props[d] && r[d] !== c.props[d] && (u = !1);
      }), u && (Array.isArray(l) || (l = [l]), l.push(typeof c.style == "function" ? c.style((0, vt.default)({
        ownerState: o
      }, r, o)) : c.style));
    }), l;
  }
  return a;
}
function _g(e = {}) {
  const {
    themeId: t,
    defaultTheme: o = Ig,
    rootShouldForwardProp: r = Tr,
    slotShouldForwardProp: a = Tr
  } = e, i = (s) => (0, Pg.default)((0, vt.default)({}, s, {
    theme: hr((0, vt.default)({}, s, {
      defaultTheme: o,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, l = {}) => {
    (0, Bl.internal_processStyles)(s, (g) => g.filter((P) => !(P != null && P.__mui_systemSx)));
    const {
      name: c,
      slot: u,
      skipVariantsResolver: d,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Ng(zl(u))
    } = l, v = (0, hi.default)(l, kg), h = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      u && u !== "Root" && u !== "root" || !1
    ), b = p || !1;
    let y;
    process.env.NODE_ENV !== "production" && c && (y = `${c}-${zl(u || "Root")}`);
    let C = Tr;
    u === "Root" || u === "root" ? C = r : u ? C = a : $g(s) && (C = void 0);
    const S = (0, Bl.default)(s, (0, vt.default)({
      shouldForwardProp: C,
      label: y
    }, v)), w = (g) => typeof g == "function" && g.__emotion_real !== g || (0, Cg.isPlainObject)(g) ? (P) => kr(g, (0, vt.default)({}, P, {
      theme: hr({
        theme: P.theme,
        defaultTheme: o,
        themeId: t
      })
    })) : g, x = (g, ...P) => {
      let R = w(g);
      const I = P ? P.map(w) : [];
      c && f && I.push((N) => {
        const q = hr((0, vt.default)({}, N, {
          defaultTheme: o,
          themeId: t
        }));
        if (!q.components || !q.components[c] || !q.components[c].styleOverrides)
          return null;
        const k = q.components[c].styleOverrides, A = {};
        return Object.entries(k).forEach(([$, D]) => {
          A[$] = kr(D, (0, vt.default)({}, N, {
            theme: q
          }));
        }), f(N, A);
      }), c && !h && I.push((N) => {
        var q;
        const k = hr((0, vt.default)({}, N, {
          defaultTheme: o,
          themeId: t
        })), A = k == null || (q = k.components) == null || (q = q[c]) == null ? void 0 : q.variants;
        return kr({
          variants: A
        }, (0, vt.default)({}, N, {
          theme: k
        }));
      }), b || I.push(i);
      const j = I.length - P.length;
      if (Array.isArray(g) && j > 0) {
        const N = new Array(j).fill("");
        R = [...g, ...N], R.raw = [...g.raw, ...N];
      }
      const M = S(R, ...I);
      if (process.env.NODE_ENV !== "production") {
        let N;
        c && (N = `${c}${(0, Sg.default)(u || "")}`), N === void 0 && (N = `Styled(${(0, Eg.default)(s)})`), M.displayName = N;
      }
      return s.muiName && (M.muiName = s.muiName), M;
    };
    return S.withConfig && (x.withConfig = S.withConfig), x;
  };
}
function td(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ht = (e) => td(e) && e !== "classes", Q = wg({
  themeId: tr,
  defaultTheme: ba,
  rootShouldForwardProp: ht
}), Wl = (e) => {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2);
}, Ag = de("MuiBox", ["root"]), Fg = Qu(), Yn = Uh({
  themeId: tr,
  defaultTheme: Fg,
  defaultClassName: Ag.root,
  generateClassName: ji.generate
});
process.env.NODE_ENV !== "production" && (Yn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: n.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function Vg() {
  const e = Kr();
  return Yc(e.breakpoints.down("md"));
}
function kR() {
  const e = Kr();
  return Yc(e.breakpoints.down("xl")) ?? !1;
}
function DR({ children: e, transparent: t = !1, ...o }) {
  const r = Vg(), a = Kr();
  return /* @__PURE__ */ E(
    Yn,
    {
      component: "main",
      boxShadow: t ? 0 : 2,
      bgcolor: t ? "transparent" : "background.paper",
      minHeight: r ? "100vh" : "200px",
      borderRadius: r ? "25px 25px 0 0" : a.shape.borderRadius,
      boxSizing: "content-box",
      pb: r ? 4 : 0,
      ...o,
      children: e
    }
  );
}
const MR = ({ title: e, sx: t, ...o }) => {
  const r = Kr();
  return /* @__PURE__ */ E(
    ze,
    {
      sx: {
        fontSize: {
          xs: r.typography.fontSize * 1.9,
          md: r.typography.fontSize * 2.3,
          lg: r.typography.fontSize * 2.5
        },
        fontWeight: "900",
        textAlign: "left",
        component: "h2",
        my: 0,
        mt: 1,
        color: r.palette.mode === "dark" ? r.palette.common.white : r.palette.common.black,
        ...t
      },
      ...o,
      children: e
    }
  );
};
function $R({ bgcolor: e, sx: t, children: o, ...r }) {
  return /* @__PURE__ */ E(
    ze,
    {
      bgcolor: e || ((a) => a.palette.mode === "dark" ? "#353535" : "#F8F7F7"),
      boxShadow: "0.3px 0.8px 1.1px 0px rgba(187, 187, 187, 0.11), 0.5px 1.3px 1.8px -0.6px rgba(187, 187, 187, 0.18), 1.1px 2.7px 3.8px -1.2px rgba(187, 187, 187, 0.26)",
      border: "0.5px solid rgba(0, 0, 0, 0.30)",
      sx: t,
      py: { xs: 1, md: 2.5 },
      px: { xs: 2, md: 7 },
      textAlign: "left",
      ...r,
      children: o
    }
  );
}
const Lg = Q(ze)(() => ({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  opacity: 0.3
}));
function IR() {
  return /* @__PURE__ */ E(Lg, { children: /* @__PURE__ */ E(cf, { size: 80, color: "primary", sx: { position: "absolute" } }) });
}
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, bi.apply(this, arguments);
}
var Ul;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ul || (Ul = {}));
function Ye(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function or(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function gi(e) {
  let {
    pathname: t = "/",
    search: o = "",
    hash: r = ""
  } = e;
  return o && o !== "?" && (t += o.charAt(0) === "?" ? o : "?" + o), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function nd(e) {
  let t = {};
  if (e) {
    let o = e.indexOf("#");
    o >= 0 && (t.hash = e.substr(o), e = e.substr(0, o));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
var ql;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(ql || (ql = {}));
function Hl(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [o, r] = jg(e.path, e.caseSensitive, e.end), a = t.match(o);
  if (!a)
    return null;
  let i = a[0], s = i.replace(/(.)\/+$/, "$1"), l = a.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      let {
        paramName: f,
        isOptional: v
      } = d;
      if (f === "*") {
        let b = l[p] || "";
        s = i.slice(0, i.length - b.length).replace(/(.)\/+$/, "$1");
      }
      const h = l[p];
      return v && !h ? u[f] = void 0 : u[f] = (h || "").replace(/%2F/g, "/"), u;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function jg(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !0), or(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, c) => (r.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push({
    paramName: "*"
  }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), r];
}
function oo(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let o = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(o);
  return r && r !== "/" ? null : e.slice(o) || "/";
}
function Bg(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: o,
    search: r = "",
    hash: a = ""
  } = typeof e == "string" ? nd(e) : e;
  return {
    pathname: o ? o.startsWith("/") ? o : zg(o, t) : t,
    search: Ug(r),
    hash: qg(a)
  };
}
function zg(e, t) {
  let o = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? o.length > 1 && o.pop() : a !== "." && o.push(a);
  }), o.length > 1 ? o.join("/") : "/";
}
function Xa(e, t, o, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + o + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Wg(e) {
  return e.filter((t, o) => o === 0 || t.route.path && t.route.path.length > 0);
}
function od(e, t) {
  let o = Wg(e);
  return t ? o.map((r, a) => a === o.length - 1 ? r.pathname : r.pathnameBase) : o.map((r) => r.pathnameBase);
}
function rd(e, t, o, r) {
  r === void 0 && (r = !1);
  let a;
  typeof e == "string" ? a = nd(e) : (a = bi({}, e), Ye(!a.pathname || !a.pathname.includes("?"), Xa("?", "pathname", "search", a)), Ye(!a.pathname || !a.pathname.includes("#"), Xa("#", "pathname", "hash", a)), Ye(!a.search || !a.search.includes("#"), Xa("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", s = i ? "/" : a.pathname, l;
  if (s == null)
    l = o;
  else {
    let p = t.length - 1;
    if (!r && s.startsWith("..")) {
      let f = s.split("/");
      for (; f[0] === ".."; )
        f.shift(), p -= 1;
      a.pathname = f.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let c = Bg(a, l), u = s && s !== "/" && s.endsWith("/"), d = (i || s === ".") && o.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const qi = (e) => e.join("/").replace(/\/\/+/g, "/"), Ug = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, qg = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ad = ["post", "put", "patch", "delete"];
new Set(ad);
const Hg = ["get", ...ad];
new Set(Hg);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, yi.apply(this, arguments);
}
const ga = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (ga.displayName = "DataRouter");
const id = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (id.displayName = "DataRouterState");
const Yg = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Yg.displayName = "Await");
const nn = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (nn.displayName = "Navigation");
const Hi = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Hi.displayName = "Location");
const bo = /* @__PURE__ */ m.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (bo.displayName = "Route");
const Kg = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (Kg.displayName = "RouteError");
function Gg(e, t) {
  let {
    relative: o
  } = t === void 0 ? {} : t;
  Yi() || (process.env.NODE_ENV !== "production" ? Ye(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : Ye(!1));
  let {
    basename: r,
    navigator: a
  } = m.useContext(nn), {
    hash: i,
    pathname: s,
    search: l
  } = ar(e, {
    relative: o
  }), c = s;
  return r !== "/" && (c = s === "/" ? r : qi([r, s])), a.createHref({
    pathname: c,
    search: l,
    hash: i
  });
}
function Yi() {
  return m.useContext(Hi) != null;
}
function rr() {
  return Yi() || (process.env.NODE_ENV !== "production" ? Ye(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Ye(!1)), m.useContext(Hi).location;
}
const sd = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ld(e) {
  m.useContext(nn).static || m.useLayoutEffect(e);
}
function Xg() {
  let {
    isDataRoute: e
  } = m.useContext(bo);
  return e ? ty() : Zg();
}
function Zg() {
  Yi() || (process.env.NODE_ENV !== "production" ? Ye(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Ye(!1));
  let e = m.useContext(ga), {
    basename: t,
    future: o,
    navigator: r
  } = m.useContext(nn), {
    matches: a
  } = m.useContext(bo), {
    pathname: i
  } = rr(), s = JSON.stringify(od(a, o.v7_relativeSplatPath)), l = m.useRef(!1);
  return ld(() => {
    l.current = !0;
  }), m.useCallback(function(u, d) {
    if (d === void 0 && (d = {}), process.env.NODE_ENV !== "production" && or(l.current, sd), !l.current)
      return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let p = rd(u, JSON.parse(s), i, d.relative === "path");
    e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : qi([t, p.pathname])), (d.replace ? r.replace : r.push)(p, d.state, d);
  }, [t, r, s, i, e]);
}
function ar(e, t) {
  let {
    relative: o
  } = t === void 0 ? {} : t, {
    future: r
  } = m.useContext(nn), {
    matches: a
  } = m.useContext(bo), {
    pathname: i
  } = rr(), s = JSON.stringify(od(a, r.v7_relativeSplatPath));
  return m.useMemo(() => rd(e, JSON.parse(s), i, o === "path"), [e, s, i, o]);
}
var cd = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(cd || {}), Ki = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Ki || {});
function ud(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Qg(e) {
  let t = m.useContext(ga);
  return t || (process.env.NODE_ENV !== "production" ? Ye(!1, ud(e)) : Ye(!1)), t;
}
function Jg(e) {
  let t = m.useContext(bo);
  return t || (process.env.NODE_ENV !== "production" ? Ye(!1, ud(e)) : Ye(!1)), t;
}
function dd(e) {
  let t = Jg(e), o = t.matches[t.matches.length - 1];
  return o.route.id || (process.env.NODE_ENV !== "production" ? Ye(!1, e + ' can only be used on routes that contain a unique "id"') : Ye(!1)), o.route.id;
}
function ey() {
  return dd(Ki.UseRouteId);
}
function ty() {
  let {
    router: e
  } = Qg(cd.UseNavigateStable), t = dd(Ki.UseNavigateStable), o = m.useRef(!1);
  return ld(() => {
    o.current = !0;
  }), m.useCallback(function(a, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && or(o.current, sd), o.current && (typeof a == "number" ? e.navigate(a) : e.navigate(a, yi({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, ro.apply(this, arguments);
}
function Gi(e, t) {
  if (e == null)
    return {};
  var o = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (o[a] = e[a]);
  return o;
}
const Dr = "get", Mr = "application/x-www-form-urlencoded";
function ya(e) {
  return e != null && typeof e.tagName == "string";
}
function ny(e) {
  return ya(e) && e.tagName.toLowerCase() === "button";
}
function oy(e) {
  return ya(e) && e.tagName.toLowerCase() === "form";
}
function ry(e) {
  return ya(e) && e.tagName.toLowerCase() === "input";
}
function ay(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function iy(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !ay(e);
}
let br = null;
function sy() {
  if (br === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), br = !1;
    } catch {
      br = !0;
    }
  return br;
}
const ly = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Za(e) {
  return e != null && !ly.has(e) ? (process.env.NODE_ENV !== "production" && or(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + Mr + '"')), null) : e;
}
function cy(e, t) {
  let o, r, a, i, s;
  if (oy(e)) {
    let l = e.getAttribute("action");
    r = l ? oo(l, t) : null, o = e.getAttribute("method") || Dr, a = Za(e.getAttribute("enctype")) || Mr, i = new FormData(e);
  } else if (ny(e) || ry(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (r = c ? oo(c, t) : null, o = e.getAttribute("formmethod") || l.getAttribute("method") || Dr, a = Za(e.getAttribute("formenctype")) || Za(l.getAttribute("enctype")) || Mr, i = new FormData(l, e), !sy()) {
      let {
        name: u,
        type: d,
        value: p
      } = e;
      if (d === "image") {
        let f = u ? u + "." : "";
        i.append(f + "x", "0"), i.append(f + "y", "0");
      } else
        u && i.append(u, p);
    }
  } else {
    if (ya(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    o = Dr, r = null, a = Mr, s = e;
  }
  return i && a === "text/plain" && (s = i, i = void 0), {
    action: r,
    method: o.toLowerCase(),
    encType: a,
    formData: i,
    body: s
  };
}
const uy = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"], dy = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"], py = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"], fy = "6";
try {
  window.__reactRouterVersion = fy;
} catch {
}
const pd = /* @__PURE__ */ m.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (pd.displayName = "ViewTransition");
const my = /* @__PURE__ */ m.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (my.displayName = "Fetchers");
process.env.NODE_ENV;
const hy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", by = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Xi = /* @__PURE__ */ m.forwardRef(function(t, o) {
  let {
    onClick: r,
    relative: a,
    reloadDocument: i,
    replace: s,
    state: l,
    target: c,
    to: u,
    preventScrollReset: d,
    unstable_viewTransition: p
  } = t, f = Gi(t, uy), {
    basename: v
  } = m.useContext(nn), h, b = !1;
  if (typeof u == "string" && by.test(u) && (h = u, hy))
    try {
      let w = new URL(window.location.href), x = u.startsWith("//") ? new URL(w.protocol + u) : new URL(u), g = oo(x.pathname, v);
      x.origin === w.origin && g != null ? u = g + x.search + x.hash : b = !0;
    } catch {
      process.env.NODE_ENV !== "production" && or(!1, '<Link to="' + u + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let y = Gg(u, {
    relative: a
  }), C = xy(u, {
    replace: s,
    state: l,
    target: c,
    preventScrollReset: d,
    relative: a,
    unstable_viewTransition: p
  });
  function S(w) {
    r && r(w), w.defaultPrevented || C(w);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ m.createElement("a", ro({}, f, {
      href: h || y,
      onClick: b || i ? r : S,
      ref: o,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (Xi.displayName = "Link");
const gy = /* @__PURE__ */ m.forwardRef(function(t, o) {
  let {
    "aria-current": r = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: s = !1,
    style: l,
    to: c,
    unstable_viewTransition: u,
    children: d
  } = t, p = Gi(t, dy), f = ar(c, {
    relative: p.relative
  }), v = rr(), h = m.useContext(id), {
    navigator: b,
    basename: y
  } = m.useContext(nn), C = h != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Py(f) && u === !0, S = b.encodeLocation ? b.encodeLocation(f).pathname : f.pathname, w = v.pathname, x = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
  a || (w = w.toLowerCase(), x = x ? x.toLowerCase() : null, S = S.toLowerCase()), x && y && (x = oo(x, y) || x);
  const g = S !== "/" && S.endsWith("/") ? S.length - 1 : S.length;
  let P = w === S || !s && w.startsWith(S) && w.charAt(g) === "/", R = x != null && (x === S || !s && x.startsWith(S) && x.charAt(S.length) === "/"), I = {
    isActive: P,
    isPending: R,
    isTransitioning: C
  }, j = P ? r : void 0, M;
  typeof i == "function" ? M = i(I) : M = [i, P ? "active" : null, R ? "pending" : null, C ? "transitioning" : null].filter(Boolean).join(" ");
  let N = typeof l == "function" ? l(I) : l;
  return /* @__PURE__ */ m.createElement(Xi, ro({}, p, {
    "aria-current": j,
    className: M,
    ref: o,
    style: N,
    to: c,
    unstable_viewTransition: u
  }), typeof d == "function" ? d(I) : d);
});
process.env.NODE_ENV !== "production" && (gy.displayName = "NavLink");
const yy = /* @__PURE__ */ m.forwardRef((e, t) => {
  let {
    fetcherKey: o,
    navigate: r,
    reloadDocument: a,
    replace: i,
    state: s,
    method: l = Dr,
    action: c,
    onSubmit: u,
    relative: d,
    preventScrollReset: p,
    unstable_viewTransition: f
  } = e, v = Gi(e, py), h = Ey(), b = Oy(c, {
    relative: d
  }), y = l.toLowerCase() === "get" ? "get" : "post", C = (S) => {
    if (u && u(S), S.defaultPrevented)
      return;
    S.preventDefault();
    let w = S.nativeEvent.submitter, x = (w == null ? void 0 : w.getAttribute("formmethod")) || l;
    h(w || S.currentTarget, {
      fetcherKey: o,
      method: x,
      navigate: r,
      replace: i,
      state: s,
      relative: d,
      preventScrollReset: p,
      unstable_viewTransition: f
    });
  };
  return /* @__PURE__ */ m.createElement("form", ro({
    ref: t,
    method: y,
    action: b,
    onSubmit: a ? u : C
  }, v));
});
process.env.NODE_ENV !== "production" && (yy.displayName = "Form");
process.env.NODE_ENV;
var Lr;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(Lr || (Lr = {}));
var Yl;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Yl || (Yl = {}));
function vy(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function fd(e) {
  let t = m.useContext(ga);
  return t || (process.env.NODE_ENV !== "production" ? Ye(!1, vy(e)) : Ye(!1)), t;
}
function xy(e, t) {
  let {
    target: o,
    replace: r,
    state: a,
    preventScrollReset: i,
    relative: s,
    unstable_viewTransition: l
  } = t === void 0 ? {} : t, c = Xg(), u = rr(), d = ar(e, {
    relative: s
  });
  return m.useCallback((p) => {
    if (iy(p, o)) {
      p.preventDefault();
      let f = r !== void 0 ? r : gi(u) === gi(d);
      c(e, {
        replace: f,
        state: a,
        preventScrollReset: i,
        relative: s,
        unstable_viewTransition: l
      });
    }
  }, [u, c, d, r, a, o, e, i, s, l]);
}
function wy() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let Cy = 0, Sy = () => "__" + String(++Cy) + "__";
function Ey() {
  let {
    router: e
  } = fd(Lr.UseSubmit), {
    basename: t
  } = m.useContext(nn), o = ey();
  return m.useCallback(function(r, a) {
    a === void 0 && (a = {}), wy();
    let {
      action: i,
      method: s,
      encType: l,
      formData: c,
      body: u
    } = cy(r, t);
    if (a.navigate === !1) {
      let d = a.fetcherKey || Sy();
      e.fetch(d, o, a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: c,
        body: u,
        formMethod: a.method || s,
        formEncType: a.encType || l,
        unstable_flushSync: a.unstable_flushSync
      });
    } else
      e.navigate(a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: c,
        body: u,
        formMethod: a.method || s,
        formEncType: a.encType || l,
        replace: a.replace,
        state: a.state,
        fromRouteId: o,
        unstable_flushSync: a.unstable_flushSync,
        unstable_viewTransition: a.unstable_viewTransition
      });
  }, [e, t, o]);
}
function Oy(e, t) {
  let {
    relative: o
  } = t === void 0 ? {} : t, {
    basename: r
  } = m.useContext(nn), a = m.useContext(bo);
  a || (process.env.NODE_ENV !== "production" ? Ye(!1, "useFormAction must be used inside a RouteContext") : Ye(!1));
  let [i] = a.matches.slice(-1), s = ro({}, ar(e || ".", {
    relative: o
  })), l = rr();
  if (e == null) {
    s.search = l.search;
    let c = new URLSearchParams(s.search);
    c.has("index") && c.get("index") === "" && (c.delete("index"), s.search = c.toString() ? "?" + c.toString() : "");
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : qi([r, s.pathname])), gi(s);
}
function Py(e, t) {
  t === void 0 && (t = {});
  let o = m.useContext(pd);
  o == null && (process.env.NODE_ENV !== "production" ? Ye(!1, "`unstable_useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : Ye(!1));
  let {
    basename: r
  } = fd(Lr.useViewTransitionState), a = ar(e, {
    relative: t.relative
  });
  if (!o.isTransitioning)
    return !1;
  let i = oo(o.currentLocation.pathname, r) || o.currentLocation.pathname, s = oo(o.nextLocation.pathname, r) || o.nextLocation.pathname;
  return Hl(a.pathname, s) != null || Hl(a.pathname, i) != null;
}
const NR = () => /* @__PURE__ */ E(ze, { sx: { flexGrow: 1 }, children: /* @__PURE__ */ le("div", { className: "container", children: [
  /* @__PURE__ */ E("div", { className: "gif", children: /* @__PURE__ */ E("img", { src: "https://i.postimg.cc/2yrFyxKv/giphy.gif", alt: "gif_ing" }) }),
  /* @__PURE__ */ le("div", { className: "content", children: [
    /* @__PURE__ */ E("h1", { className: "main-heading", children: "This page is gone." }),
    /* @__PURE__ */ E("p", { children: "...maybe the page you are looking for is not found or never existed." }),
    /* @__PURE__ */ E(jt, { component: Xi, to: "/", color: "primary", children: "back to Home" })
  ] })
] }) }), _R = () => /* @__PURE__ */ le(ri, { children: [
  /* @__PURE__ */ le(ze, { textAlign: "center", fontSize: "large", children: [
    "Oops..",
    /* @__PURE__ */ E("br", {}),
    "something went wrong"
  ] }),
  /* @__PURE__ */ le(ze, { className: "container", children: [
    /* @__PURE__ */ E("div", { className: "bg", children: /* @__PURE__ */ E("div", { className: "light" }) }),
    /* @__PURE__ */ le("div", { className: "ufo", children: [
      /* @__PURE__ */ E("div", { className: "ufo-bottom" }),
      /* @__PURE__ */ E("div", { className: "ufo-top" }),
      /* @__PURE__ */ E("div", { className: "ufo-glass", children: /* @__PURE__ */ E("div", { className: "alien", children: /* @__PURE__ */ E("div", { className: "alien-eye" }) }) })
    ] }),
    /* @__PURE__ */ E("div", { className: "bed", children: /* @__PURE__ */ E("div", { className: "mattress" }) }),
    /* @__PURE__ */ le("div", { className: "man", children: [
      /* @__PURE__ */ E("div", { className: "foot" }),
      /* @__PURE__ */ le("div", { className: "head", children: [
        /* @__PURE__ */ E("div", { className: "face" }),
        /* @__PURE__ */ E("div", { className: "hair" })
      ] }),
      /* @__PURE__ */ E("div", { className: "man-body" }),
      /* @__PURE__ */ E("div", { className: "arm" })
    ] })
  ] }),
  /* @__PURE__ */ E(ze, { textAlign: "center", children: /* @__PURE__ */ E(
    jt,
    {
      sx: { mt: 3 },
      onClick: () => window.location.assign(window.location.origin),
      variant: "contained",
      children: "Refresh Page"
    }
  ) })
] }), Ry = ["onChange", "maxRows", "minRows", "style", "value"];
function gr(e) {
  return parseInt(e, 10) || 0;
}
const Ty = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function ky(e) {
  return e == null || Object.keys(e).length === 0 || e.outerHeightStyle === 0 && !e.overflowing;
}
const md = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    onChange: r,
    maxRows: a,
    minRows: i = 1,
    style: s,
    value: l
  } = t, c = ue(t, Ry), {
    current: u
  } = m.useRef(l != null), d = m.useRef(null), p = Se(o, d), f = m.useRef(null), v = m.useRef(null), h = m.useCallback(() => {
    const C = d.current, w = Ut(C).getComputedStyle(C);
    if (w.width === "0px")
      return {
        outerHeightStyle: 0,
        overflowing: !1
      };
    const x = v.current;
    x.style.width = w.width, x.value = C.value || t.placeholder || "x", x.value.slice(-1) === `
` && (x.value += " ");
    const g = w.boxSizing, P = gr(w.paddingBottom) + gr(w.paddingTop), R = gr(w.borderBottomWidth) + gr(w.borderTopWidth), I = x.scrollHeight;
    x.value = "x";
    const j = x.scrollHeight;
    let M = I;
    i && (M = Math.max(Number(i) * j, M)), a && (M = Math.min(Number(a) * j, M)), M = Math.max(M, j);
    const N = M + (g === "border-box" ? P + R : 0), q = Math.abs(M - I) <= 1;
    return {
      outerHeightStyle: N,
      overflowing: q
    };
  }, [a, i, t.placeholder]), b = m.useCallback(() => {
    const C = h();
    if (ky(C))
      return;
    const S = C.outerHeightStyle, w = d.current;
    f.current !== S && (f.current = S, w.style.height = `${S}px`), w.style.overflow = C.overflowing ? "hidden" : "";
  }, [h]);
  et(() => {
    const C = () => {
      b();
    };
    let S;
    const w = () => {
      cancelAnimationFrame(S), S = requestAnimationFrame(() => {
        C();
      });
    }, x = fa(C), g = d.current, P = Ut(g);
    P.addEventListener("resize", x);
    let R;
    return typeof ResizeObserver < "u" && (R = new ResizeObserver(process.env.NODE_ENV === "test" ? w : C), R.observe(g)), () => {
      x.clear(), cancelAnimationFrame(S), P.removeEventListener("resize", x), R && R.disconnect();
    };
  }, [h, b]), et(() => {
    b();
  });
  const y = (C) => {
    u || b(), r && r(C);
  };
  return /* @__PURE__ */ le(m.Fragment, {
    children: [/* @__PURE__ */ E("textarea", T({
      value: l,
      onChange: y,
      ref: p,
      rows: i,
      style: s
    }, c)), /* @__PURE__ */ E("textarea", {
      "aria-hidden": !0,
      className: t.className,
      readOnly: !0,
      ref: v,
      tabIndex: -1,
      style: T({}, Ty.shadow, s, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (md.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  onChange: n.func,
  /**
   * @ignore
   */
  placeholder: n.string,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * @ignore
   */
  value: n.oneOfType([n.arrayOf(n.string), n.number, n.string])
});
function go({
  props: e,
  states: t,
  muiFormControl: o
}) {
  return t.reduce((r, a) => (r[a] = e[a], o && typeof e[a] > "u" && (r[a] = o[a]), r), {});
}
const ir = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (ir.displayName = "FormControlContext");
function kt() {
  return m.useContext(ir);
}
process.env.NODE_ENV !== "production" && (n.node, n.object.isRequired);
function Oe(e) {
  return Ib(e);
}
function hd(e) {
  return /* @__PURE__ */ E(Ou, T({}, e, {
    defaultTheme: ba,
    themeId: tr
  }));
}
process.env.NODE_ENV !== "production" && (hd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: n.oneOfType([n.array, n.func, n.number, n.object, n.string, n.bool])
});
function Kl(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function jr(e, t = !1) {
  return e && (Kl(e.value) && e.value !== "" || t && Kl(e.defaultValue) && e.defaultValue !== "");
}
function Dy(e) {
  return e.startAdornment;
}
function My(e) {
  return pe("MuiInputBase", e);
}
const ao = de("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), $y = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], va = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.formControl && t.formControl, o.startAdornment && t.adornedStart, o.endAdornment && t.adornedEnd, o.error && t.error, o.size === "small" && t.sizeSmall, o.multiline && t.multiline, o.color && t[`color${re(o.color)}`], o.fullWidth && t.fullWidth, o.hiddenLabel && t.hiddenLabel];
}, xa = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.input, o.size === "small" && t.inputSizeSmall, o.multiline && t.inputMultiline, o.type === "search" && t.inputTypeSearch, o.startAdornment && t.inputAdornedStart, o.endAdornment && t.inputAdornedEnd, o.hiddenLabel && t.inputHiddenLabel];
}, Iy = (e) => {
  const {
    classes: t,
    color: o,
    disabled: r,
    error: a,
    endAdornment: i,
    focused: s,
    formControl: l,
    fullWidth: c,
    hiddenLabel: u,
    multiline: d,
    readOnly: p,
    size: f,
    startAdornment: v,
    type: h
  } = e, b = {
    root: ["root", `color${re(o)}`, r && "disabled", a && "error", c && "fullWidth", s && "focused", l && "formControl", f && f !== "medium" && `size${re(f)}`, d && "multiline", v && "adornedStart", i && "adornedEnd", u && "hiddenLabel", p && "readOnly"],
    input: ["input", r && "disabled", h === "search" && "inputTypeSearch", d && "inputMultiline", f === "small" && "inputSizeSmall", u && "inputHiddenLabel", v && "inputAdornedStart", i && "inputAdornedEnd", p && "readOnly"]
  };
  return me(b, My, t);
}, wa = Q("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: va
})(({
  theme: e,
  ownerState: t
}) => T({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${ao.disabled}`]: {
    color: (e.vars || e).palette.text.disabled,
    cursor: "default"
  }
}, t.multiline && T({
  padding: "4px 0 5px"
}, t.size === "small" && {
  paddingTop: 1
}), t.fullWidth && {
  width: "100%"
})), Ca = Q("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: xa
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light", r = T({
    color: "currentColor"
  }, e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  }, {
    transition: e.transitions.create("opacity", {
      duration: e.transitions.duration.shorter
    })
  }), a = {
    opacity: "0 !important"
  }, i = e.vars ? {
    opacity: e.vars.opacity.inputPlaceholder
  } : {
    opacity: o ? 0.42 : 0.5
  };
  return T({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": r,
    "&::-moz-placeholder": r,
    // Firefox 19+
    "&:-ms-input-placeholder": r,
    // IE11
    "&::-ms-input-placeholder": r,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${ao.formControl} &`]: {
      "&::-webkit-input-placeholder": a,
      "&::-moz-placeholder": a,
      // Firefox 19+
      "&:-ms-input-placeholder": a,
      // IE11
      "&::-ms-input-placeholder": a,
      // Edge
      "&:focus::-webkit-input-placeholder": i,
      "&:focus::-moz-placeholder": i,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": i,
      // IE11
      "&:focus::-ms-input-placeholder": i
      // Edge
    },
    [`&.${ao.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (e.vars || e).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, t.size === "small" && {
    paddingTop: 1
  }, t.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, t.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), Ny = /* @__PURE__ */ E(hd, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), sr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const a = Oe({
    props: t,
    name: "MuiInputBase"
  }), {
    "aria-describedby": i,
    autoComplete: s,
    autoFocus: l,
    className: c,
    components: u = {},
    componentsProps: d = {},
    defaultValue: p,
    disabled: f,
    disableInjectingGlobalStyles: v,
    endAdornment: h,
    fullWidth: b = !1,
    id: y,
    inputComponent: C = "input",
    inputProps: S = {},
    inputRef: w,
    maxRows: x,
    minRows: g,
    multiline: P = !1,
    name: R,
    onBlur: I,
    onChange: j,
    onClick: M,
    onFocus: N,
    onKeyDown: q,
    onKeyUp: k,
    placeholder: A,
    readOnly: $,
    renderSuffix: D,
    rows: V,
    slotProps: O = {},
    slots: U = {},
    startAdornment: F,
    type: Y = "text",
    value: K
  } = a, J = ue(a, $y), Z = S.value != null ? S.value : K, {
    current: L
  } = m.useRef(Z != null), z = m.useRef(), X = m.useCallback((we) => {
    process.env.NODE_ENV !== "production" && we && we.nodeName !== "INPUT" && !we.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), ee = Se(z, w, S.ref, X), [ne, G] = m.useState(!1), te = kt();
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (te)
      return te.registerEffect();
  }, [te]);
  const _ = go({
    props: a,
    muiFormControl: te,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  _.focused = te ? te.focused : ne, m.useEffect(() => {
    !te && f && ne && (G(!1), I && I());
  }, [te, f, ne, I]);
  const B = te && te.onFilled, H = te && te.onEmpty, oe = m.useCallback((we) => {
    jr(we) ? B && B() : H && H();
  }, [B, H]);
  et(() => {
    L && oe({
      value: Z
    });
  }, [Z, oe, L]);
  const he = (we) => {
    if (_.disabled) {
      we.stopPropagation();
      return;
    }
    N && N(we), S.onFocus && S.onFocus(we), te && te.onFocus ? te.onFocus(we) : G(!0);
  }, ie = (we) => {
    I && I(we), S.onBlur && S.onBlur(we), te && te.onBlur ? te.onBlur(we) : G(!1);
  }, ce = (we, ...be) => {
    if (!L) {
      const gt = we.target || z.current;
      if (gt == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : Kt(1));
      oe({
        value: gt.value
      });
    }
    S.onChange && S.onChange(we, ...be), j && j(we, ...be);
  };
  m.useEffect(() => {
    oe(z.current);
  }, []);
  const xe = (we) => {
    z.current && we.currentTarget === we.target && z.current.focus(), M && M(we);
  };
  let Ce = C, ye = S;
  P && Ce === "input" && (V ? (process.env.NODE_ENV !== "production" && (g || x) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), ye = T({
    type: void 0,
    minRows: V,
    maxRows: V
  }, ye)) : ye = T({
    type: void 0,
    maxRows: x,
    minRows: g
  }, ye), Ce = md);
  const Ze = (we) => {
    oe(we.animationName === "mui-auto-fill-cancel" ? z.current : {
      value: "x"
    });
  };
  m.useEffect(() => {
    te && te.setAdornedStart(!!F);
  }, [te, F]);
  const Qe = T({}, a, {
    color: _.color || "primary",
    disabled: _.disabled,
    endAdornment: h,
    error: _.error,
    focused: _.focused,
    formControl: te,
    fullWidth: b,
    hiddenLabel: _.hiddenLabel,
    multiline: P,
    size: _.size,
    startAdornment: F,
    type: Y
  }), Te = Iy(Qe), tt = U.root || u.Root || wa, it = O.root || d.root || {}, st = U.input || u.Input || Ca;
  return ye = T({}, ye, (r = O.input) != null ? r : d.input), /* @__PURE__ */ le(m.Fragment, {
    children: [!v && Ny, /* @__PURE__ */ le(tt, T({}, it, !no(tt) && {
      ownerState: T({}, Qe, it.ownerState)
    }, {
      ref: o,
      onClick: xe
    }, J, {
      className: ae(Te.root, it.className, c, $ && "MuiInputBase-readOnly"),
      children: [F, /* @__PURE__ */ E(ir.Provider, {
        value: null,
        children: /* @__PURE__ */ E(st, T({
          ownerState: Qe,
          "aria-invalid": _.error,
          "aria-describedby": i,
          autoComplete: s,
          autoFocus: l,
          defaultValue: p,
          disabled: _.disabled,
          id: y,
          onAnimationStart: Ze,
          name: R,
          placeholder: A,
          readOnly: $,
          required: _.required,
          rows: V,
          value: Z,
          onKeyDown: q,
          onKeyUp: k,
          type: Y
        }, ye, !no(st) && {
          as: Ce,
          ownerState: T({}, Qe, ye.ownerState)
        }, {
          ref: ee,
          className: ae(Te.input, ye.className, $ && "MuiInputBase-readOnly"),
          onBlur: ie,
          onChange: ce,
          onFocus: he
        }))
      }), h, D ? D(T({}, _, {
        startAdornment: F
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (sr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: pa,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * @ignore
   */
  renderSuffix: n.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
var Zi = {};
Object.defineProperty(Zi, "__esModule", {
  value: !0
});
var bd = Zi.default = void 0, _y = Fy(_e), Ay = Ju;
function gd(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  return (gd = function(r) {
    return r ? o : t;
  })(e);
}
function Fy(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var o = gd(t);
  if (o && o.has(e))
    return o.get(e);
  var r = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = a ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : r[i] = e[i];
    }
  return r.default = e, o && o.set(e, r), r;
}
function Vy(e) {
  return Object.keys(e).length === 0;
}
function Ly(e = null) {
  const t = _y.useContext(Ay.ThemeContext);
  return !t || Vy(t) ? e : t;
}
bd = Zi.default = Ly;
var lt = "top", Ot = "bottom", Pt = "right", ct = "left", Qi = "auto", lr = [lt, Ot, Pt, ct], io = "start", qo = "end", jy = "clippingParents", yd = "viewport", Co = "popper", By = "reference", Gl = /* @__PURE__ */ lr.reduce(function(e, t) {
  return e.concat([t + "-" + io, t + "-" + qo]);
}, []), vd = /* @__PURE__ */ [].concat(lr, [Qi]).reduce(function(e, t) {
  return e.concat([t, t + "-" + io, t + "-" + qo]);
}, []), zy = "beforeRead", Wy = "read", Uy = "afterRead", qy = "beforeMain", Hy = "main", Yy = "afterMain", Ky = "beforeWrite", Gy = "write", Xy = "afterWrite", Zy = [zy, Wy, Uy, qy, Hy, Yy, Ky, Gy, Xy];
function qt(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function mt(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Rn(e) {
  var t = mt(e).Element;
  return e instanceof t || e instanceof Element;
}
function St(e) {
  var t = mt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = mt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Qy(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, a = t.attributes[o] || {}, i = t.elements[o];
    !St(i) || !qt(i) || (Object.assign(i.style, r), Object.keys(a).forEach(function(s) {
      var l = a[s];
      l === !1 ? i.removeAttribute(s) : i.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function Jy(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var a = t.elements[r], i = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), l = s.reduce(function(c, u) {
        return c[u] = "", c;
      }, {});
      !St(a) || !qt(a) || (Object.assign(a.style, l), Object.keys(i).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
const ev = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qy,
  effect: Jy,
  requires: ["computeStyles"]
};
function zt(e) {
  return e.split("-")[0];
}
var On = Math.max, Br = Math.min, so = Math.round;
function xi() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function xd() {
  return !/^((?!chrome|android).)*safari/i.test(xi());
}
function lo(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), a = 1, i = 1;
  t && St(e) && (a = e.offsetWidth > 0 && so(r.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && so(r.height) / e.offsetHeight || 1);
  var s = Rn(e) ? mt(e) : window, l = s.visualViewport, c = !xd() && o, u = (r.left + (c && l ? l.offsetLeft : 0)) / a, d = (r.top + (c && l ? l.offsetTop : 0)) / i, p = r.width / a, f = r.height / i;
  return {
    width: p,
    height: f,
    top: d,
    right: u + p,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function es(e) {
  var t = lo(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function wd(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Ji(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Xt(e) {
  return mt(e).getComputedStyle(e);
}
function tv(e) {
  return ["table", "td", "th"].indexOf(qt(e)) >= 0;
}
function pn(e) {
  return ((Rn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Sa(e) {
  return qt(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ji(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pn(e)
  );
}
function Xl(e) {
  return !St(e) || // https://github.com/popperjs/popper-core/issues/837
  Xt(e).position === "fixed" ? null : e.offsetParent;
}
function nv(e) {
  var t = /firefox/i.test(xi()), o = /Trident/i.test(xi());
  if (o && St(e)) {
    var r = Xt(e);
    if (r.position === "fixed")
      return null;
  }
  var a = Sa(e);
  for (Ji(a) && (a = a.host); St(a) && ["html", "body"].indexOf(qt(a)) < 0; ) {
    var i = Xt(a);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function cr(e) {
  for (var t = mt(e), o = Xl(e); o && tv(o) && Xt(o).position === "static"; )
    o = Xl(o);
  return o && (qt(o) === "html" || qt(o) === "body" && Xt(o).position === "static") ? t : o || nv(e) || t;
}
function ts(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Io(e, t, o) {
  return On(e, Br(t, o));
}
function ov(e, t, o) {
  var r = Io(e, t, o);
  return r > o ? o : r;
}
function Cd() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Sd(e) {
  return Object.assign({}, Cd(), e);
}
function Ed(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var rv = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Sd(typeof t != "number" ? t : Ed(t, lr));
};
function av(e) {
  var t, o = e.state, r = e.name, a = e.options, i = o.elements.arrow, s = o.modifiersData.popperOffsets, l = zt(o.placement), c = ts(l), u = [ct, Pt].indexOf(l) >= 0, d = u ? "height" : "width";
  if (!(!i || !s)) {
    var p = rv(a.padding, o), f = es(i), v = c === "y" ? lt : ct, h = c === "y" ? Ot : Pt, b = o.rects.reference[d] + o.rects.reference[c] - s[c] - o.rects.popper[d], y = s[c] - o.rects.reference[c], C = cr(i), S = C ? c === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, w = b / 2 - y / 2, x = p[v], g = S - f[d] - p[h], P = S / 2 - f[d] / 2 + w, R = Io(x, P, g), I = c;
    o.modifiersData[r] = (t = {}, t[I] = R, t.centerOffset = R - P, t);
  }
}
function iv(e) {
  var t = e.state, o = e.options, r = o.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || wd(t.elements.popper, a) && (t.elements.arrow = a));
}
const sv = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: av,
  effect: iv,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function co(e) {
  return e.split("-")[1];
}
var lv = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function cv(e, t) {
  var o = e.x, r = e.y, a = t.devicePixelRatio || 1;
  return {
    x: so(o * a) / a || 0,
    y: so(r * a) / a || 0
  };
}
function Zl(e) {
  var t, o = e.popper, r = e.popperRect, a = e.placement, i = e.variation, s = e.offsets, l = e.position, c = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, p = e.isFixed, f = s.x, v = f === void 0 ? 0 : f, h = s.y, b = h === void 0 ? 0 : h, y = typeof d == "function" ? d({
    x: v,
    y: b
  }) : {
    x: v,
    y: b
  };
  v = y.x, b = y.y;
  var C = s.hasOwnProperty("x"), S = s.hasOwnProperty("y"), w = ct, x = lt, g = window;
  if (u) {
    var P = cr(o), R = "clientHeight", I = "clientWidth";
    if (P === mt(o) && (P = pn(o), Xt(P).position !== "static" && l === "absolute" && (R = "scrollHeight", I = "scrollWidth")), P = P, a === lt || (a === ct || a === Pt) && i === qo) {
      x = Ot;
      var j = p && P === g && g.visualViewport ? g.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[R]
      );
      b -= j - r.height, b *= c ? 1 : -1;
    }
    if (a === ct || (a === lt || a === Ot) && i === qo) {
      w = Pt;
      var M = p && P === g && g.visualViewport ? g.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[I]
      );
      v -= M - r.width, v *= c ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: l
  }, u && lv), q = d === !0 ? cv({
    x: v,
    y: b
  }, mt(o)) : {
    x: v,
    y: b
  };
  if (v = q.x, b = q.y, c) {
    var k;
    return Object.assign({}, N, (k = {}, k[x] = S ? "0" : "", k[w] = C ? "0" : "", k.transform = (g.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + b + "px)" : "translate3d(" + v + "px, " + b + "px, 0)", k));
  }
  return Object.assign({}, N, (t = {}, t[x] = S ? b + "px" : "", t[w] = C ? v + "px" : "", t.transform = "", t));
}
function uv(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, a = r === void 0 ? !0 : r, i = o.adaptive, s = i === void 0 ? !0 : i, l = o.roundOffsets, c = l === void 0 ? !0 : l, u = {
    placement: zt(t.placement),
    variation: co(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Zl(Object.assign({}, u, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Zl(Object.assign({}, u, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const dv = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: uv,
  data: {}
};
var yr = {
  passive: !0
};
function pv(e) {
  var t = e.state, o = e.instance, r = e.options, a = r.scroll, i = a === void 0 ? !0 : a, s = r.resize, l = s === void 0 ? !0 : s, c = mt(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", o.update, yr);
  }), l && c.addEventListener("resize", o.update, yr), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", o.update, yr);
    }), l && c.removeEventListener("resize", o.update, yr);
  };
}
const fv = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pv,
  data: {}
};
var mv = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function $r(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return mv[t];
  });
}
var hv = {
  start: "end",
  end: "start"
};
function Ql(e) {
  return e.replace(/start|end/g, function(t) {
    return hv[t];
  });
}
function ns(e) {
  var t = mt(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function os(e) {
  return lo(pn(e)).left + ns(e).scrollLeft;
}
function bv(e, t) {
  var o = mt(e), r = pn(e), a = o.visualViewport, i = r.clientWidth, s = r.clientHeight, l = 0, c = 0;
  if (a) {
    i = a.width, s = a.height;
    var u = xd();
    (u || !u && t === "fixed") && (l = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: i,
    height: s,
    x: l + os(e),
    y: c
  };
}
function gv(e) {
  var t, o = pn(e), r = ns(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, i = On(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = On(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), l = -r.scrollLeft + os(e), c = -r.scrollTop;
  return Xt(a || o).direction === "rtl" && (l += On(o.clientWidth, a ? a.clientWidth : 0) - i), {
    width: i,
    height: s,
    x: l,
    y: c
  };
}
function rs(e) {
  var t = Xt(e), o = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + a + r);
}
function Od(e) {
  return ["html", "body", "#document"].indexOf(qt(e)) >= 0 ? e.ownerDocument.body : St(e) && rs(e) ? e : Od(Sa(e));
}
function No(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = Od(e), a = r === ((o = e.ownerDocument) == null ? void 0 : o.body), i = mt(r), s = a ? [i].concat(i.visualViewport || [], rs(r) ? r : []) : r, l = t.concat(s);
  return a ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(No(Sa(s)))
  );
}
function wi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function yv(e, t) {
  var o = lo(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function Jl(e, t, o) {
  return t === yd ? wi(bv(e, o)) : Rn(t) ? yv(t, o) : wi(gv(pn(e)));
}
function vv(e) {
  var t = No(Sa(e)), o = ["absolute", "fixed"].indexOf(Xt(e).position) >= 0, r = o && St(e) ? cr(e) : e;
  return Rn(r) ? t.filter(function(a) {
    return Rn(a) && wd(a, r) && qt(a) !== "body";
  }) : [];
}
function xv(e, t, o, r) {
  var a = t === "clippingParents" ? vv(e) : [].concat(t), i = [].concat(a, [o]), s = i[0], l = i.reduce(function(c, u) {
    var d = Jl(e, u, r);
    return c.top = On(d.top, c.top), c.right = Br(d.right, c.right), c.bottom = Br(d.bottom, c.bottom), c.left = On(d.left, c.left), c;
  }, Jl(e, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Pd(e) {
  var t = e.reference, o = e.element, r = e.placement, a = r ? zt(r) : null, i = r ? co(r) : null, s = t.x + t.width / 2 - o.width / 2, l = t.y + t.height / 2 - o.height / 2, c;
  switch (a) {
    case lt:
      c = {
        x: s,
        y: t.y - o.height
      };
      break;
    case Ot:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Pt:
      c = {
        x: t.x + t.width,
        y: l
      };
      break;
    case ct:
      c = {
        x: t.x - o.width,
        y: l
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var u = a ? ts(a) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case io:
        c[u] = c[u] - (t[d] / 2 - o[d] / 2);
        break;
      case qo:
        c[u] = c[u] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return c;
}
function Ho(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, a = r === void 0 ? e.placement : r, i = o.strategy, s = i === void 0 ? e.strategy : i, l = o.boundary, c = l === void 0 ? jy : l, u = o.rootBoundary, d = u === void 0 ? yd : u, p = o.elementContext, f = p === void 0 ? Co : p, v = o.altBoundary, h = v === void 0 ? !1 : v, b = o.padding, y = b === void 0 ? 0 : b, C = Sd(typeof y != "number" ? y : Ed(y, lr)), S = f === Co ? By : Co, w = e.rects.popper, x = e.elements[h ? S : f], g = xv(Rn(x) ? x : x.contextElement || pn(e.elements.popper), c, d, s), P = lo(e.elements.reference), R = Pd({
    reference: P,
    element: w,
    strategy: "absolute",
    placement: a
  }), I = wi(Object.assign({}, w, R)), j = f === Co ? I : P, M = {
    top: g.top - j.top + C.top,
    bottom: j.bottom - g.bottom + C.bottom,
    left: g.left - j.left + C.left,
    right: j.right - g.right + C.right
  }, N = e.modifiersData.offset;
  if (f === Co && N) {
    var q = N[a];
    Object.keys(M).forEach(function(k) {
      var A = [Pt, Ot].indexOf(k) >= 0 ? 1 : -1, $ = [lt, Ot].indexOf(k) >= 0 ? "y" : "x";
      M[k] += q[$] * A;
    });
  }
  return M;
}
function wv(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, a = o.boundary, i = o.rootBoundary, s = o.padding, l = o.flipVariations, c = o.allowedAutoPlacements, u = c === void 0 ? vd : c, d = co(r), p = d ? l ? Gl : Gl.filter(function(h) {
    return co(h) === d;
  }) : lr, f = p.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = p);
  var v = f.reduce(function(h, b) {
    return h[b] = Ho(e, {
      placement: b,
      boundary: a,
      rootBoundary: i,
      padding: s
    })[zt(b)], h;
  }, {});
  return Object.keys(v).sort(function(h, b) {
    return v[h] - v[b];
  });
}
function Cv(e) {
  if (zt(e) === Qi)
    return [];
  var t = $r(e);
  return [Ql(e), t, Ql(t)];
}
function Sv(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = o.mainAxis, i = a === void 0 ? !0 : a, s = o.altAxis, l = s === void 0 ? !0 : s, c = o.fallbackPlacements, u = o.padding, d = o.boundary, p = o.rootBoundary, f = o.altBoundary, v = o.flipVariations, h = v === void 0 ? !0 : v, b = o.allowedAutoPlacements, y = t.options.placement, C = zt(y), S = C === y, w = c || (S || !h ? [$r(y)] : Cv(y)), x = [y].concat(w).reduce(function(Z, L) {
      return Z.concat(zt(L) === Qi ? wv(t, {
        placement: L,
        boundary: d,
        rootBoundary: p,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : L);
    }, []), g = t.rects.reference, P = t.rects.popper, R = /* @__PURE__ */ new Map(), I = !0, j = x[0], M = 0; M < x.length; M++) {
      var N = x[M], q = zt(N), k = co(N) === io, A = [lt, Ot].indexOf(q) >= 0, $ = A ? "width" : "height", D = Ho(t, {
        placement: N,
        boundary: d,
        rootBoundary: p,
        altBoundary: f,
        padding: u
      }), V = A ? k ? Pt : ct : k ? Ot : lt;
      g[$] > P[$] && (V = $r(V));
      var O = $r(V), U = [];
      if (i && U.push(D[q] <= 0), l && U.push(D[V] <= 0, D[O] <= 0), U.every(function(Z) {
        return Z;
      })) {
        j = N, I = !1;
        break;
      }
      R.set(N, U);
    }
    if (I)
      for (var F = h ? 3 : 1, Y = function(L) {
        var z = x.find(function(X) {
          var ee = R.get(X);
          if (ee)
            return ee.slice(0, L).every(function(ne) {
              return ne;
            });
        });
        if (z)
          return j = z, "break";
      }, K = F; K > 0; K--) {
        var J = Y(K);
        if (J === "break")
          break;
      }
    t.placement !== j && (t.modifiersData[r]._skip = !0, t.placement = j, t.reset = !0);
  }
}
const Ev = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Sv,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ec(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function tc(e) {
  return [lt, Pt, Ot, ct].some(function(t) {
    return e[t] >= 0;
  });
}
function Ov(e) {
  var t = e.state, o = e.name, r = t.rects.reference, a = t.rects.popper, i = t.modifiersData.preventOverflow, s = Ho(t, {
    elementContext: "reference"
  }), l = Ho(t, {
    altBoundary: !0
  }), c = ec(s, r), u = ec(l, a, i), d = tc(c), p = tc(u);
  t.modifiersData[o] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: u,
    isReferenceHidden: d,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": p
  });
}
const Pv = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ov
};
function Rv(e, t, o) {
  var r = zt(e), a = [ct, lt].indexOf(r) >= 0 ? -1 : 1, i = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, s = i[0], l = i[1];
  return s = s || 0, l = (l || 0) * a, [ct, Pt].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function Tv(e) {
  var t = e.state, o = e.options, r = e.name, a = o.offset, i = a === void 0 ? [0, 0] : a, s = vd.reduce(function(d, p) {
    return d[p] = Rv(p, t.rects, i), d;
  }, {}), l = s[t.placement], c = l.x, u = l.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = s;
}
const kv = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tv
};
function Dv(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Pd({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Mv = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Dv,
  data: {}
};
function $v(e) {
  return e === "x" ? "y" : "x";
}
function Iv(e) {
  var t = e.state, o = e.options, r = e.name, a = o.mainAxis, i = a === void 0 ? !0 : a, s = o.altAxis, l = s === void 0 ? !1 : s, c = o.boundary, u = o.rootBoundary, d = o.altBoundary, p = o.padding, f = o.tether, v = f === void 0 ? !0 : f, h = o.tetherOffset, b = h === void 0 ? 0 : h, y = Ho(t, {
    boundary: c,
    rootBoundary: u,
    padding: p,
    altBoundary: d
  }), C = zt(t.placement), S = co(t.placement), w = !S, x = ts(C), g = $v(x), P = t.modifiersData.popperOffsets, R = t.rects.reference, I = t.rects.popper, j = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, M = typeof j == "number" ? {
    mainAxis: j,
    altAxis: j
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, j), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (P) {
    if (i) {
      var k, A = x === "y" ? lt : ct, $ = x === "y" ? Ot : Pt, D = x === "y" ? "height" : "width", V = P[x], O = V + y[A], U = V - y[$], F = v ? -I[D] / 2 : 0, Y = S === io ? R[D] : I[D], K = S === io ? -I[D] : -R[D], J = t.elements.arrow, Z = v && J ? es(J) : {
        width: 0,
        height: 0
      }, L = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cd(), z = L[A], X = L[$], ee = Io(0, R[D], Z[D]), ne = w ? R[D] / 2 - F - ee - z - M.mainAxis : Y - ee - z - M.mainAxis, G = w ? -R[D] / 2 + F + ee + X + M.mainAxis : K + ee + X + M.mainAxis, te = t.elements.arrow && cr(t.elements.arrow), _ = te ? x === "y" ? te.clientTop || 0 : te.clientLeft || 0 : 0, B = (k = N == null ? void 0 : N[x]) != null ? k : 0, H = V + ne - B - _, oe = V + G - B, he = Io(v ? Br(O, H) : O, V, v ? On(U, oe) : U);
      P[x] = he, q[x] = he - V;
    }
    if (l) {
      var ie, ce = x === "x" ? lt : ct, xe = x === "x" ? Ot : Pt, Ce = P[g], ye = g === "y" ? "height" : "width", Ze = Ce + y[ce], Qe = Ce - y[xe], Te = [lt, ct].indexOf(C) !== -1, tt = (ie = N == null ? void 0 : N[g]) != null ? ie : 0, it = Te ? Ze : Ce - R[ye] - I[ye] - tt + M.altAxis, st = Te ? Ce + R[ye] + I[ye] - tt - M.altAxis : Qe, we = v && Te ? ov(it, Ce, st) : Io(v ? it : Ze, Ce, v ? st : Qe);
      P[g] = we, q[g] = we - Ce;
    }
    t.modifiersData[r] = q;
  }
}
const Nv = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Iv,
  requiresIfExists: ["offset"]
};
function _v(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Av(e) {
  return e === mt(e) || !St(e) ? ns(e) : _v(e);
}
function Fv(e) {
  var t = e.getBoundingClientRect(), o = so(t.width) / e.offsetWidth || 1, r = so(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Vv(e, t, o) {
  o === void 0 && (o = !1);
  var r = St(t), a = St(t) && Fv(t), i = pn(t), s = lo(e, a, o), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((qt(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  rs(i)) && (l = Av(t)), St(t) ? (c = lo(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : i && (c.x = os(i))), {
    x: s.left + l.scrollLeft - c.x,
    y: s.top + l.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
function Lv(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function a(i) {
    o.add(i.name);
    var s = [].concat(i.requires || [], i.requiresIfExists || []);
    s.forEach(function(l) {
      if (!o.has(l)) {
        var c = t.get(l);
        c && a(c);
      }
    }), r.push(i);
  }
  return e.forEach(function(i) {
    o.has(i.name) || a(i);
  }), r;
}
function jv(e) {
  var t = Lv(e);
  return Zy.reduce(function(o, r) {
    return o.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function Bv(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function zv(e) {
  var t = e.reduce(function(o, r) {
    var a = o[r.name];
    return o[r.name] = a ? Object.assign({}, a, r, {
      options: Object.assign({}, a.options, r.options),
      data: Object.assign({}, a.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var nc = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function oc() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Wv(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, a = t.defaultOptions, i = a === void 0 ? nc : a;
  return function(l, c, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, nc, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: c
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, v = {
      state: d,
      setOptions: function(C) {
        var S = typeof C == "function" ? C(d.options) : C;
        b(), d.options = Object.assign({}, i, d.options, S), d.scrollParents = {
          reference: Rn(l) ? No(l) : l.contextElement ? No(l.contextElement) : [],
          popper: No(c)
        };
        var w = jv(zv([].concat(r, d.options.modifiers)));
        return d.orderedModifiers = w.filter(function(x) {
          return x.enabled;
        }), h(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var C = d.elements, S = C.reference, w = C.popper;
          if (oc(S, w)) {
            d.rects = {
              reference: Vv(S, cr(w), d.options.strategy === "fixed"),
              popper: es(w)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(M) {
              return d.modifiersData[M.name] = Object.assign({}, M.data);
            });
            for (var x = 0; x < d.orderedModifiers.length; x++) {
              if (d.reset === !0) {
                d.reset = !1, x = -1;
                continue;
              }
              var g = d.orderedModifiers[x], P = g.fn, R = g.options, I = R === void 0 ? {} : R, j = g.name;
              typeof P == "function" && (d = P({
                state: d,
                options: I,
                name: j,
                instance: v
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Bv(function() {
        return new Promise(function(y) {
          v.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!oc(l, c))
      return v;
    v.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function h() {
      d.orderedModifiers.forEach(function(y) {
        var C = y.name, S = y.options, w = S === void 0 ? {} : S, x = y.effect;
        if (typeof x == "function") {
          var g = x({
            state: d,
            name: C,
            instance: v,
            options: w
          }), P = function() {
          };
          p.push(g || P);
        }
      });
    }
    function b() {
      p.forEach(function(y) {
        return y();
      }), p = [];
    }
    return v;
  };
}
var Uv = [fv, Mv, dv, ev, kv, Ev, Nv, sv, Pv], qv = /* @__PURE__ */ Wv({
  defaultModifiers: Uv
});
function Hv(e) {
  return typeof e == "function" ? e() : e;
}
const Yo = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    children: r,
    container: a,
    disablePortal: i = !1
  } = t, [s, l] = m.useState(null), c = Se(/* @__PURE__ */ m.isValidElement(r) ? r.ref : null, o);
  if (et(() => {
    i || l(Hv(a) || document.body);
  }, [a, i]), et(() => {
    if (s && !i)
      return Ar(o, s), () => {
        Ar(o, null);
      };
  }, [o, s, i]), i) {
    if (/* @__PURE__ */ m.isValidElement(r)) {
      const u = {
        ref: c
      };
      return /* @__PURE__ */ m.cloneElement(r, u);
    }
    return /* @__PURE__ */ E(m.Fragment, {
      children: r
    });
  }
  return /* @__PURE__ */ E(m.Fragment, {
    children: s && /* @__PURE__ */ wf.createPortal(r, s)
  });
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: n.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Wt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool
});
process.env.NODE_ENV !== "production" && (Yo.propTypes = _u(Yo.propTypes));
function Yv(e) {
  return pe("MuiPopper", e);
}
de("MuiPopper", ["root"]);
const Kv = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], Gv = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function Xv(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function zr(e) {
  return typeof e == "function" ? e() : e;
}
function Ea(e) {
  return e.nodeType !== void 0;
}
function Zv(e) {
  return !Ea(e);
}
const Qv = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, Yv, t);
}, Jv = {}, e0 = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const {
    anchorEl: a,
    children: i,
    direction: s,
    disablePortal: l,
    modifiers: c,
    open: u,
    placement: d,
    popperOptions: p,
    popperRef: f,
    slotProps: v = {},
    slots: h = {},
    TransitionProps: b
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, y = ue(t, Kv), C = m.useRef(null), S = Se(C, o), w = m.useRef(null), x = Se(w, f), g = m.useRef(x);
  et(() => {
    g.current = x;
  }, [x]), m.useImperativeHandle(f, () => w.current, []);
  const P = Xv(d, s), [R, I] = m.useState(P), [j, M] = m.useState(zr(a));
  m.useEffect(() => {
    w.current && w.current.forceUpdate();
  }), m.useEffect(() => {
    a && M(zr(a));
  }, [a]), et(() => {
    if (!j || !u)
      return;
    const $ = (O) => {
      I(O.placement);
    };
    if (process.env.NODE_ENV !== "production" && j && Ea(j) && j.nodeType === 1) {
      const O = j.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && O.top === 0 && O.left === 0 && O.right === 0 && O.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let D = [{
      name: "preventOverflow",
      options: {
        altBoundary: l
      }
    }, {
      name: "flip",
      options: {
        altBoundary: l
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: O
      }) => {
        $(O);
      }
    }];
    c != null && (D = D.concat(c)), p && p.modifiers != null && (D = D.concat(p.modifiers));
    const V = qv(j, C.current, T({
      placement: P
    }, p, {
      modifiers: D
    }));
    return g.current(V), () => {
      V.destroy(), g.current(null);
    };
  }, [j, l, c, u, p, P]);
  const N = {
    placement: R
  };
  b !== null && (N.TransitionProps = b);
  const q = Qv(t), k = (r = h.root) != null ? r : "div", A = Pn({
    elementType: k,
    externalSlotProps: v.root,
    externalForwardedProps: y,
    additionalProps: {
      role: "tooltip",
      ref: S
    },
    ownerState: t,
    className: q.root
  });
  return /* @__PURE__ */ E(k, T({}, A, {
    children: typeof i == "function" ? i(N) : i
  }));
}), Rd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: a,
    container: i,
    direction: s = "ltr",
    disablePortal: l = !1,
    keepMounted: c = !1,
    modifiers: u,
    open: d,
    placement: p = "bottom",
    popperOptions: f = Jv,
    popperRef: v,
    style: h,
    transition: b = !1,
    slotProps: y = {},
    slots: C = {}
  } = t, S = ue(t, Gv), [w, x] = m.useState(!0), g = () => {
    x(!1);
  }, P = () => {
    x(!0);
  };
  if (!c && !d && (!b || w))
    return null;
  let R;
  if (i)
    R = i;
  else if (r) {
    const M = zr(r);
    R = M && Ea(M) ? Je(M).body : Je(null).body;
  }
  const I = !d && c && (!b || w) ? "none" : void 0, j = b ? {
    in: d,
    onEnter: g,
    onExited: P
  } : void 0;
  return /* @__PURE__ */ E(Yo, {
    disablePortal: l,
    container: R,
    children: /* @__PURE__ */ E(e0, T({
      anchorEl: r,
      direction: s,
      disablePortal: l,
      modifiers: u,
      ref: o,
      open: b ? !w : d,
      placement: p,
      popperOptions: f,
      popperRef: v,
      slotProps: y,
      slots: C
    }, S, {
      style: T({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: I
      }, h),
      TransitionProps: j,
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (Rd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Jt(n.oneOfType([Wt, n.object, n.func]), (e) => {
    if (e.open) {
      const t = zr(e.anchorEl);
      if (t && Ea(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || Zv(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Wt, n.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: n.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: qe,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
const t0 = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], n0 = Q(Rd, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Td = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const a = bd(), i = Oe({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: s,
    component: l,
    components: c,
    componentsProps: u,
    container: d,
    disablePortal: p,
    keepMounted: f,
    modifiers: v,
    open: h,
    placement: b,
    popperOptions: y,
    popperRef: C,
    transition: S,
    slots: w,
    slotProps: x
  } = i, g = ue(i, t0), P = (r = w == null ? void 0 : w.root) != null ? r : c == null ? void 0 : c.Root, R = T({
    anchorEl: s,
    container: d,
    disablePortal: p,
    keepMounted: f,
    modifiers: v,
    open: h,
    placement: b,
    popperOptions: y,
    popperRef: C,
    transition: S
  }, g);
  return /* @__PURE__ */ E(n0, T({
    as: l,
    direction: a == null ? void 0 : a.direction,
    slots: {
      root: P
    },
    slotProps: x ?? u
  }, R, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (Td.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: n.oneOfType([Wt, n.object, n.func]),
  /**
   * Popper render function or node.
   */
  children: n.oneOfType([n.node, n.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Wt, n.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: n.arrayOf(n.shape({
    data: n.object,
    effect: n.func,
    enabled: n.bool,
    fn: n.func,
    name: n.any,
    options: n.object,
    phase: n.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: n.arrayOf(n.string),
    requiresIfExists: n.arrayOf(n.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: n.shape({
    modifiers: n.array,
    onFirstUpdate: n.func,
    placement: n.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: n.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: qe,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: n.shape({
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: n.bool
});
function o0(e) {
  return pe("MuiPaper", e);
}
de("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const r0 = ["className", "component", "elevation", "square", "variant"], a0 = (e) => {
  const {
    square: t,
    elevation: o,
    variant: r,
    classes: a
  } = e, i = {
    root: ["root", r, !t && "rounded", r === "elevation" && `elevation${o}`]
  };
  return me(i, o0, a);
}, i0 = Q("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], !o.square && t.rounded, o.variant === "elevation" && t[`elevation${o.elevation}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  return T({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !t.square && {
    borderRadius: e.shape.borderRadius
  }, t.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, t.variant === "elevation" && T({
    boxShadow: (e.vars || e).shadows[t.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${Be("#fff", Wl(t.elevation))}, ${Be("#fff", Wl(t.elevation))})`
  }, e.vars && {
    backgroundImage: (o = e.vars.overlays) == null ? void 0 : o[t.elevation]
  }));
}), yo = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiPaper"
  }), {
    className: a,
    component: i = "div",
    elevation: s = 1,
    square: l = !1,
    variant: c = "elevation"
  } = r, u = ue(r, r0), d = T({}, r, {
    component: i,
    elevation: s,
    square: l,
    variant: c
  }), p = a0(d);
  return process.env.NODE_ENV !== "production" && tn().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ E(i0, T({
    as: i,
    ownerState: d,
    className: ae(p.root, a),
    ref: o
  }, u));
});
process.env.NODE_ENV !== "production" && (yo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: Jt(Bi, (e) => {
    const {
      elevation: t,
      variant: o
    } = e;
    return t > 0 && o === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${o}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: n.oneOfType([n.oneOf(["elevation", "outlined"]), n.string])
});
function Ci(e, t) {
  return Ci = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
    return o.__proto__ = r, o;
  }, Ci(e, t);
}
function as(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Ci(e, t);
}
function s0(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function l0(e, t) {
  e.classList ? e.classList.add(t) : s0(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function rc(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function c0(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = rc(e.className, t) : e.setAttribute("class", rc(e.className && e.className.baseVal || "", t));
}
const ac = {
  disabled: !1
};
var u0 = process.env.NODE_ENV !== "production" ? n.oneOfType([n.number, n.shape({
  enter: n.number,
  exit: n.number,
  appear: n.number
}).isRequired]) : null, d0 = process.env.NODE_ENV !== "production" ? n.oneOfType([n.string, n.shape({
  enter: n.string,
  exit: n.string,
  active: n.string
}), n.shape({
  enter: n.string,
  enterDone: n.string,
  enterActive: n.string,
  exit: n.string,
  exitDone: n.string,
  exitActive: n.string
})]) : null;
const Wr = _e.createContext(null);
var kd = function(t) {
  return t.scrollTop;
}, Mo = "unmounted", Cn = "exited", Sn = "entering", jn = "entered", Si = "exiting", bt = /* @__PURE__ */ function(e) {
  as(t, e);
  function t(r, a) {
    var i;
    i = e.call(this, r, a) || this;
    var s = a, l = s && !s.isMounting ? r.enter : r.appear, c;
    return i.appearStatus = null, r.in ? l ? (c = Cn, i.appearStatus = Sn) : c = jn : r.unmountOnExit || r.mountOnEnter ? c = Mo : c = Cn, i.state = {
      status: c
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(a, i) {
    var s = a.in;
    return s && i.status === Mo ? {
      status: Cn
    } : null;
  };
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, o.componentDidUpdate = function(a) {
    var i = null;
    if (a !== this.props) {
      var s = this.state.status;
      this.props.in ? s !== Sn && s !== jn && (i = Sn) : (s === Sn || s === jn) && (i = Si);
    }
    this.updateStatus(!1, i);
  }, o.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, o.getTimeouts = function() {
    var a = this.props.timeout, i, s, l;
    return i = s = l = a, a != null && typeof a != "number" && (i = a.exit, s = a.enter, l = a.appear !== void 0 ? a.appear : s), {
      exit: i,
      enter: s,
      appear: l
    };
  }, o.updateStatus = function(a, i) {
    if (a === void 0 && (a = !1), i !== null)
      if (this.cancelNextCallback(), i === Sn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var s = this.props.nodeRef ? this.props.nodeRef.current : pr.findDOMNode(this);
          s && kd(s);
        }
        this.performEnter(a);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === Cn && this.setState({
        status: Mo
      });
  }, o.performEnter = function(a) {
    var i = this, s = this.props.enter, l = this.context ? this.context.isMounting : a, c = this.props.nodeRef ? [l] : [pr.findDOMNode(this), l], u = c[0], d = c[1], p = this.getTimeouts(), f = l ? p.appear : p.enter;
    if (!a && !s || ac.disabled) {
      this.safeSetState({
        status: jn
      }, function() {
        i.props.onEntered(u);
      });
      return;
    }
    this.props.onEnter(u, d), this.safeSetState({
      status: Sn
    }, function() {
      i.props.onEntering(u, d), i.onTransitionEnd(f, function() {
        i.safeSetState({
          status: jn
        }, function() {
          i.props.onEntered(u, d);
        });
      });
    });
  }, o.performExit = function() {
    var a = this, i = this.props.exit, s = this.getTimeouts(), l = this.props.nodeRef ? void 0 : pr.findDOMNode(this);
    if (!i || ac.disabled) {
      this.safeSetState({
        status: Cn
      }, function() {
        a.props.onExited(l);
      });
      return;
    }
    this.props.onExit(l), this.safeSetState({
      status: Si
    }, function() {
      a.props.onExiting(l), a.onTransitionEnd(s.exit, function() {
        a.safeSetState({
          status: Cn
        }, function() {
          a.props.onExited(l);
        });
      });
    });
  }, o.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, o.safeSetState = function(a, i) {
    i = this.setNextCallback(i), this.setState(a, i);
  }, o.setNextCallback = function(a) {
    var i = this, s = !0;
    return this.nextCallback = function(l) {
      s && (s = !1, i.nextCallback = null, a(l));
    }, this.nextCallback.cancel = function() {
      s = !1;
    }, this.nextCallback;
  }, o.onTransitionEnd = function(a, i) {
    this.setNextCallback(i);
    var s = this.props.nodeRef ? this.props.nodeRef.current : pr.findDOMNode(this), l = a == null && !this.props.addEndListener;
    if (!s || l) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], u = c[0], d = c[1];
      this.props.addEndListener(u, d);
    }
    a != null && setTimeout(this.nextCallback, a);
  }, o.render = function() {
    var a = this.state.status;
    if (a === Mo)
      return null;
    var i = this.props, s = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var l = ue(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ _e.createElement(Wr.Provider, {
        value: null
      }, typeof s == "function" ? s(a, l) : _e.cloneElement(_e.Children.only(s), l))
    );
  }, t;
}(_e.Component);
bt.contextType = Wr;
bt.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: n.shape({
    current: typeof Element > "u" ? n.any : function(e, t, o, r, a, i) {
      var s = e[t];
      return n.instanceOf(s && "ownerDocument" in s ? s.ownerDocument.defaultView.Element : Element)(e, t, o, r, a, i);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: n.oneOfType([n.func.isRequired, n.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: n.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: n.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: n.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: n.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: n.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: n.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(t) {
    var o = u0;
    t.addEndListener || (o = o.isRequired);
    for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
      a[i - 1] = arguments[i];
    return o.apply(void 0, [t].concat(a));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: n.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: n.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: n.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: n.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: n.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: n.func
} : {};
function Vn() {
}
bt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Vn,
  onEntering: Vn,
  onEntered: Vn,
  onExit: Vn,
  onExiting: Vn,
  onExited: Vn
};
bt.UNMOUNTED = Mo;
bt.EXITED = Cn;
bt.ENTERING = Sn;
bt.ENTERED = jn;
bt.EXITING = Si;
var p0 = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return l0(t, r);
  });
}, Qa = function(t, o) {
  return t && o && o.split(" ").forEach(function(r) {
    return c0(t, r);
  });
}, is = /* @__PURE__ */ function(e) {
  as(t, e);
  function t() {
    for (var r, a = arguments.length, i = new Array(a), s = 0; s < a; s++)
      i[s] = arguments[s];
    return r = e.call.apply(e, [this].concat(i)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1];
      r.removeClasses(d, "exit"), r.addClass(d, p ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(l, c);
    }, r.onEntering = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1], f = p ? "appear" : "enter";
      r.addClass(d, f, "active"), r.props.onEntering && r.props.onEntering(l, c);
    }, r.onEntered = function(l, c) {
      var u = r.resolveArguments(l, c), d = u[0], p = u[1], f = p ? "appear" : "enter";
      r.removeClasses(d, f), r.addClass(d, f, "done"), r.props.onEntered && r.props.onEntered(l, c);
    }, r.onExit = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "appear"), r.removeClasses(u, "enter"), r.addClass(u, "exit", "base"), r.props.onExit && r.props.onExit(l);
    }, r.onExiting = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.addClass(u, "exit", "active"), r.props.onExiting && r.props.onExiting(l);
    }, r.onExited = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "exit"), r.addClass(u, "exit", "done"), r.props.onExited && r.props.onExited(l);
    }, r.resolveArguments = function(l, c) {
      return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, c];
    }, r.getClassNames = function(l) {
      var c = r.props.classNames, u = typeof c == "string", d = u && c ? c + "-" : "", p = u ? "" + d + l : c[l], f = u ? p + "-active" : c[l + "Active"], v = u ? p + "-done" : c[l + "Done"];
      return {
        baseClassName: p,
        activeClassName: f,
        doneClassName: v
      };
    }, r;
  }
  var o = t.prototype;
  return o.addClass = function(a, i, s) {
    var l = this.getClassNames(i)[s + "ClassName"], c = this.getClassNames("enter"), u = c.doneClassName;
    i === "appear" && s === "done" && u && (l += " " + u), s === "active" && a && kd(a), l && (this.appliedClasses[i][s] = l, p0(a, l));
  }, o.removeClasses = function(a, i) {
    var s = this.appliedClasses[i], l = s.base, c = s.active, u = s.done;
    this.appliedClasses[i] = {}, l && Qa(a, l), c && Qa(a, c), u && Qa(a, u);
  }, o.render = function() {
    var a = this.props;
    a.classNames;
    var i = ue(a, ["classNames"]);
    return /* @__PURE__ */ _e.createElement(bt, T({}, i, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(_e.Component);
is.defaultProps = {
  classNames: ""
};
is.propTypes = process.env.NODE_ENV !== "production" ? T({}, bt.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: d0,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: n.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: n.func
}) : {};
function f0(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ss(e, t) {
  var o = function(i) {
    return t && Sr(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && yf.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    r[a.key] = o(a);
  }), r;
}
function m0(e, t) {
  e = e || {}, t = t || {};
  function o(d) {
    return d in t ? t[d] : e[d];
  }
  var r = /* @__PURE__ */ Object.create(null), a = [];
  for (var i in e)
    i in t ? a.length && (r[i] = a, a = []) : a.push(i);
  var s, l = {};
  for (var c in t) {
    if (r[c])
      for (s = 0; s < r[c].length; s++) {
        var u = r[c][s];
        l[r[c][s]] = o(u);
      }
    l[c] = o(c);
  }
  for (s = 0; s < a.length; s++)
    l[a[s]] = o(a[s]);
  return l;
}
function En(e, t, o) {
  return o[t] != null ? o[t] : e.props[t];
}
function h0(e, t) {
  return ss(e.children, function(o) {
    return Er(o, {
      onExited: t.bind(null, o),
      in: !0,
      appear: En(o, "appear", e),
      enter: En(o, "enter", e),
      exit: En(o, "exit", e)
    });
  });
}
function b0(e, t, o) {
  var r = ss(e.children), a = m0(t, r);
  return Object.keys(a).forEach(function(i) {
    var s = a[i];
    if (Sr(s)) {
      var l = i in t, c = i in r, u = t[i], d = Sr(u) && !u.props.in;
      c && (!l || d) ? a[i] = Er(s, {
        onExited: o.bind(null, s),
        in: !0,
        exit: En(s, "exit", e),
        enter: En(s, "enter", e)
      }) : !c && l && !d ? a[i] = Er(s, {
        in: !1
      }) : c && l && Sr(u) && (a[i] = Er(s, {
        onExited: o.bind(null, s),
        in: u.props.in,
        exit: En(s, "exit", e),
        enter: En(s, "enter", e)
      }));
    }
  }), a;
}
var g0 = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, y0 = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ur = /* @__PURE__ */ function(e) {
  as(t, e);
  function t(r, a) {
    var i;
    i = e.call(this, r, a) || this;
    var s = i.handleExited.bind(f0(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var o = t.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(a, i) {
    var s = i.children, l = i.handleExited, c = i.firstRender;
    return {
      children: c ? h0(a, l) : b0(a, s, l),
      firstRender: !1
    };
  }, o.handleExited = function(a, i) {
    var s = ss(this.props.children);
    a.key in s || (a.props.onExited && a.props.onExited(i), this.mounted && this.setState(function(l) {
      var c = T({}, l.children);
      return delete c[a.key], {
        children: c
      };
    }));
  }, o.render = function() {
    var a = this.props, i = a.component, s = a.childFactory, l = ue(a, ["component", "childFactory"]), c = this.state.contextValue, u = g0(this.state.children).map(s);
    return delete l.appear, delete l.enter, delete l.exit, i === null ? /* @__PURE__ */ _e.createElement(Wr.Provider, {
      value: c
    }, u) : /* @__PURE__ */ _e.createElement(Wr.Provider, {
      value: c
    }, /* @__PURE__ */ _e.createElement(i, l, u));
  }, t;
}(_e.Component);
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: n.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: n.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: n.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: n.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: n.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: n.func
} : {};
ur.defaultProps = y0;
function Dd(e) {
  const {
    className: t,
    classes: o,
    pulsate: r = !1,
    rippleX: a,
    rippleY: i,
    rippleSize: s,
    in: l,
    onExited: c,
    timeout: u
  } = e, [d, p] = m.useState(!1), f = ae(t, o.ripple, o.rippleVisible, r && o.ripplePulsate), v = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + a
  }, h = ae(o.child, d && o.childLeaving, r && o.childPulsate);
  return !l && !d && p(!0), m.useEffect(() => {
    if (!l && c != null) {
      const b = setTimeout(c, u);
      return () => {
        clearTimeout(b);
      };
    }
  }, [c, l, u]), /* @__PURE__ */ E("span", {
    className: f,
    style: v,
    children: /* @__PURE__ */ E("span", {
      className: h
    })
  });
}
process.env.NODE_ENV !== "production" && (Dd.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object.isRequired,
  className: n.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: n.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: n.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: n.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: n.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: n.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: n.number,
  /**
   * exit delay
   */
  timeout: n.number.isRequired
});
const xt = de("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), v0 = ["center", "classes", "className"];
let Oa = (e) => e, ic, sc, lc, cc;
const Ei = 550, x0 = 80, w0 = ta(ic || (ic = Oa`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), C0 = ta(sc || (sc = Oa`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), S0 = ta(lc || (lc = Oa`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), E0 = Q("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), O0 = Q(Dd, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(cc || (cc = Oa`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), xt.rippleVisible, w0, Ei, ({
  theme: e
}) => e.transitions.easing.easeInOut, xt.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, xt.child, xt.childLeaving, C0, Ei, ({
  theme: e
}) => e.transitions.easing.easeInOut, xt.childPulsate, S0, ({
  theme: e
}) => e.transitions.easing.easeInOut), Md = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: i = {},
    className: s
  } = r, l = ue(r, v0), [c, u] = m.useState([]), d = m.useRef(0), p = m.useRef(null);
  m.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [c]);
  const f = m.useRef(!1), v = Fu(), h = m.useRef(null), b = m.useRef(null), y = m.useCallback((x) => {
    const {
      pulsate: g,
      rippleX: P,
      rippleY: R,
      rippleSize: I,
      cb: j
    } = x;
    u((M) => [...M, /* @__PURE__ */ E(O0, {
      classes: {
        ripple: ae(i.ripple, xt.ripple),
        rippleVisible: ae(i.rippleVisible, xt.rippleVisible),
        ripplePulsate: ae(i.ripplePulsate, xt.ripplePulsate),
        child: ae(i.child, xt.child),
        childLeaving: ae(i.childLeaving, xt.childLeaving),
        childPulsate: ae(i.childPulsate, xt.childPulsate)
      },
      timeout: Ei,
      pulsate: g,
      rippleX: P,
      rippleY: R,
      rippleSize: I
    }, d.current)]), d.current += 1, p.current = j;
  }, [i]), C = m.useCallback((x = {}, g = {}, P = () => {
  }) => {
    const {
      pulsate: R = !1,
      center: I = a || g.pulsate,
      fakeElement: j = !1
      // For test purposes
    } = g;
    if ((x == null ? void 0 : x.type) === "mousedown" && f.current) {
      f.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (f.current = !0);
    const M = j ? null : b.current, N = M ? M.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let q, k, A;
    if (I || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      q = Math.round(N.width / 2), k = Math.round(N.height / 2);
    else {
      const {
        clientX: $,
        clientY: D
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      q = Math.round($ - N.left), k = Math.round(D - N.top);
    }
    if (I)
      A = Math.sqrt((2 * N.width ** 2 + N.height ** 2) / 3), A % 2 === 0 && (A += 1);
    else {
      const $ = Math.max(Math.abs((M ? M.clientWidth : 0) - q), q) * 2 + 2, D = Math.max(Math.abs((M ? M.clientHeight : 0) - k), k) * 2 + 2;
      A = Math.sqrt($ ** 2 + D ** 2);
    }
    x != null && x.touches ? h.current === null && (h.current = () => {
      y({
        pulsate: R,
        rippleX: q,
        rippleY: k,
        rippleSize: A,
        cb: P
      });
    }, v.start(x0, () => {
      h.current && (h.current(), h.current = null);
    })) : y({
      pulsate: R,
      rippleX: q,
      rippleY: k,
      rippleSize: A,
      cb: P
    });
  }, [a, y, v]), S = m.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), w = m.useCallback((x, g) => {
    if (v.clear(), (x == null ? void 0 : x.type) === "touchend" && h.current) {
      h.current(), h.current = null, v.start(0, () => {
        w(x, g);
      });
      return;
    }
    h.current = null, u((P) => P.length > 0 ? P.slice(1) : P), p.current = g;
  }, [v]);
  return m.useImperativeHandle(o, () => ({
    pulsate: S,
    start: C,
    stop: w
  }), [S, C, w]), /* @__PURE__ */ E(E0, T({
    className: ae(xt.root, i.root, s),
    ref: b
  }, l, {
    children: /* @__PURE__ */ E(ur, {
      component: null,
      exit: !0,
      children: c
    })
  }));
});
process.env.NODE_ENV !== "production" && (Md.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string
});
function P0(e) {
  return pe("MuiButtonBase", e);
}
const R0 = de("MuiButtonBase", ["root", "disabled", "focusVisible"]), T0 = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], k0 = (e) => {
  const {
    disabled: t,
    focusVisible: o,
    focusVisibleClassName: r,
    classes: a
  } = e, s = me({
    root: ["root", t && "disabled", o && "focusVisible"]
  }, P0, a);
  return o && r && (s.root += ` ${r}`), s;
}, D0 = Q("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${R0.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), cn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: a,
    centerRipple: i = !1,
    children: s,
    className: l,
    component: c = "button",
    disabled: u = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: f = !1,
    LinkComponent: v = "a",
    onBlur: h,
    onClick: b,
    onContextMenu: y,
    onDragLeave: C,
    onFocus: S,
    onFocusVisible: w,
    onKeyDown: x,
    onKeyUp: g,
    onMouseDown: P,
    onMouseLeave: R,
    onMouseUp: I,
    onTouchEnd: j,
    onTouchMove: M,
    onTouchStart: N,
    tabIndex: q = 0,
    TouchRippleProps: k,
    touchRippleRef: A,
    type: $
  } = r, D = ue(r, T0), V = m.useRef(null), O = m.useRef(null), U = Se(O, A), {
    isFocusVisibleRef: F,
    onFocus: Y,
    onBlur: K,
    ref: J
  } = Vu(), [Z, L] = m.useState(!1);
  u && Z && L(!1), m.useImperativeHandle(a, () => ({
    focusVisible: () => {
      L(!0), V.current.focus();
    }
  }), []);
  const [z, X] = m.useState(!1);
  m.useEffect(() => {
    X(!0);
  }, []);
  const ee = z && !d && !u;
  m.useEffect(() => {
    Z && f && !d && z && O.current.pulsate();
  }, [d, f, Z, z]);
  function ne(be, gt, bn = p) {
    return se((_t) => (gt && gt(_t), !bn && O.current && O.current[be](_t), !0));
  }
  const G = ne("start", P), te = ne("stop", y), _ = ne("stop", C), B = ne("stop", I), H = ne("stop", (be) => {
    Z && be.preventDefault(), R && R(be);
  }), oe = ne("start", N), he = ne("stop", j), ie = ne("stop", M), ce = ne("stop", (be) => {
    K(be), F.current === !1 && L(!1), h && h(be);
  }, !1), xe = se((be) => {
    V.current || (V.current = be.currentTarget), Y(be), F.current === !0 && (L(!0), w && w(be)), S && S(be);
  }), Ce = () => {
    const be = V.current;
    return c && c !== "button" && !(be.tagName === "A" && be.href);
  }, ye = m.useRef(!1), Ze = se((be) => {
    f && !ye.current && Z && O.current && be.key === " " && (ye.current = !0, O.current.stop(be, () => {
      O.current.start(be);
    })), be.target === be.currentTarget && Ce() && be.key === " " && be.preventDefault(), x && x(be), be.target === be.currentTarget && Ce() && be.key === "Enter" && !u && (be.preventDefault(), b && b(be));
  }), Qe = se((be) => {
    f && be.key === " " && O.current && Z && !be.defaultPrevented && (ye.current = !1, O.current.stop(be, () => {
      O.current.pulsate(be);
    })), g && g(be), b && be.target === be.currentTarget && Ce() && be.key === " " && !be.defaultPrevented && b(be);
  });
  let Te = c;
  Te === "button" && (D.href || D.to) && (Te = v);
  const tt = {};
  Te === "button" ? (tt.type = $ === void 0 ? "button" : $, tt.disabled = u) : (!D.href && !D.to && (tt.role = "button"), u && (tt["aria-disabled"] = u));
  const it = Se(o, J, V);
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    ee && !O.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [ee]);
  const st = T({}, r, {
    centerRipple: i,
    component: c,
    disabled: u,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: f,
    tabIndex: q,
    focusVisible: Z
  }), we = k0(st);
  return /* @__PURE__ */ le(D0, T({
    as: Te,
    className: ae(we.root, l),
    ownerState: st,
    onBlur: ce,
    onClick: b,
    onContextMenu: te,
    onFocus: xe,
    onKeyDown: Ze,
    onKeyUp: Qe,
    onMouseDown: G,
    onMouseLeave: H,
    onMouseUp: B,
    onDragLeave: _,
    onTouchEnd: he,
    onTouchMove: ie,
    onTouchStart: oe,
    ref: it,
    tabIndex: u ? -1 : q,
    type: $
  }, tt, D, {
    children: [s, ee ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ E(Md, T({
        ref: U,
        center: i
      }, k))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (cn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: qe,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: pa,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  /**
   * @ignore
   */
  href: n.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: n.elementType,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * @ignore
   */
  onContextMenu: n.func,
  /**
   * @ignore
   */
  onDragLeave: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * @ignore
   */
  onMouseDown: n.func,
  /**
   * @ignore
   */
  onMouseLeave: n.func,
  /**
   * @ignore
   */
  onMouseUp: n.func,
  /**
   * @ignore
   */
  onTouchEnd: n.func,
  /**
   * @ignore
   */
  onTouchMove: n.func,
  /**
   * @ignore
   */
  onTouchStart: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string])
});
function M0(e) {
  return pe("MuiIconButton", e);
}
const $0 = de("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), I0 = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], N0 = (e) => {
  const {
    classes: t,
    disabled: o,
    color: r,
    edge: a,
    size: i
  } = e, s = {
    root: ["root", o && "disabled", r !== "default" && `color${re(r)}`, a && `edge${re(a)}`, `size${re(i)}`]
  };
  return me(s, M0, t);
}, _0 = Q(cn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "default" && t[`color${re(o.color)}`], o.edge && t[`edge${re(o.edge)}`], t[`size${re(o.size)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  })
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.edge === "start" && {
  marginLeft: t.size === "small" ? -3 : -12
}, t.edge === "end" && {
  marginRight: t.size === "small" ? -3 : -12
}), ({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = (o = (e.vars || e).palette) == null ? void 0 : o[t.color];
  return T({}, t.color === "inherit" && {
    color: "inherit"
  }, t.color !== "inherit" && t.color !== "default" && T({
    color: r == null ? void 0 : r.main
  }, !t.disableRipple && {
    "&:hover": T({}, r && {
      backgroundColor: e.vars ? `rgba(${r.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(r.main, e.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), t.size === "small" && {
    padding: 5,
    fontSize: e.typography.pxToRem(18)
  }, t.size === "large" && {
    padding: 12,
    fontSize: e.typography.pxToRem(28)
  }, {
    [`&.${$0.disabled}`]: {
      backgroundColor: "transparent",
      color: (e.vars || e).palette.action.disabled
    }
  });
}), fn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: a = !1,
    children: i,
    className: s,
    color: l = "default",
    disabled: c = !1,
    disableFocusRipple: u = !1,
    size: d = "medium"
  } = r, p = ue(r, I0), f = T({}, r, {
    edge: a,
    color: l,
    disabled: c,
    disableFocusRipple: u,
    size: d
  }), v = N0(f);
  return /* @__PURE__ */ E(_0, T({
    className: ae(v.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: c,
    ref: o
  }, p, {
    ownerState: f,
    children: i
  }));
});
process.env.NODE_ENV !== "production" && (fn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Jt(n.node, (e) => m.Children.toArray(e.children).some((o) => /* @__PURE__ */ m.isValidElement(o) && o.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function A0(e) {
  return pe("MuiSvgIcon", e);
}
de("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const F0 = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], V0 = (e) => {
  const {
    color: t,
    fontSize: o,
    classes: r
  } = e, a = {
    root: ["root", t !== "inherit" && `color${re(t)}`, `fontSize${re(o)}`]
  };
  return me(a, A0, r);
}, L0 = Q("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.color !== "inherit" && t[`color${re(o.color)}`], t[`fontSize${re(o.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r, a, i, s, l, c, u, d, p, f, v, h;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (o = e.transitions) == null || (r = o.create) == null ? void 0 : r.call(o, "fill", {
      duration: (a = e.transitions) == null || (a = a.duration) == null ? void 0 : a.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
      medium: ((l = e.typography) == null || (c = l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem",
      large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (f = (e.vars || e).palette) == null || (f = f[t.color]) == null ? void 0 : f.main) != null ? p : {
      action: (v = (e.vars || e).palette) == null || (v = v.action) == null ? void 0 : v.active,
      disabled: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.disabled,
      inherit: void 0
    }[t.color]
  };
}), Ur = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: a,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: u,
    inheritViewBox: d = !1,
    titleAccess: p,
    viewBox: f = "0 0 24 24"
  } = r, v = ue(r, F0), h = /* @__PURE__ */ m.isValidElement(a) && a.type === "svg", b = T({}, r, {
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: d,
    viewBox: f,
    hasSvgAsChild: h
  }), y = {};
  d || (y.viewBox = f);
  const C = V0(b);
  return /* @__PURE__ */ le(L0, T({
    as: l,
    className: ae(C.root, i),
    focusable: "false",
    color: u,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: o
  }, y, v, h && a.props, {
    ownerState: b,
    children: [h ? a.props.children : a, p ? /* @__PURE__ */ E("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ur.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: n.oneOfType([n.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: n.oneOfType([n.oneOf(["inherit", "large", "medium", "small"]), n.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: n.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: n.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: n.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: n.string
});
Ur.muiName = "SvgIcon";
function Nt(e, t) {
  function o(r, a) {
    return /* @__PURE__ */ E(Ur, T({
      "data-testid": `${t}Icon`,
      ref: a
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (o.displayName = `${t}Icon`), o.muiName = Ur.muiName, /* @__PURE__ */ m.memo(/* @__PURE__ */ m.forwardRef(o));
}
const j0 = Nt(/* @__PURE__ */ E("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function B0(e) {
  return pe("MuiChip", e);
}
const Ee = de("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), z0 = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], W0 = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: a,
    iconColor: i,
    onDelete: s,
    clickable: l,
    variant: c
  } = e, u = {
    root: ["root", c, o && "disabled", `size${re(r)}`, `color${re(a)}`, l && "clickable", l && `clickableColor${re(a)}`, s && "deletable", s && `deletableColor${re(a)}`, `${c}${re(a)}`],
    label: ["label", `label${re(r)}`],
    avatar: ["avatar", `avatar${re(r)}`, `avatarColor${re(a)}`],
    icon: ["icon", `icon${re(r)}`, `iconColor${re(i)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${re(r)}`, `deleteIconColor${re(a)}`, `deleteIcon${re(c)}Color${re(a)}`]
  };
  return me(u, B0, t);
}, U0 = Q("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: a,
      clickable: i,
      onDelete: s,
      size: l,
      variant: c
    } = o;
    return [{
      [`& .${Ee.avatar}`]: t.avatar
    }, {
      [`& .${Ee.avatar}`]: t[`avatar${re(l)}`]
    }, {
      [`& .${Ee.avatar}`]: t[`avatarColor${re(r)}`]
    }, {
      [`& .${Ee.icon}`]: t.icon
    }, {
      [`& .${Ee.icon}`]: t[`icon${re(l)}`]
    }, {
      [`& .${Ee.icon}`]: t[`iconColor${re(a)}`]
    }, {
      [`& .${Ee.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${Ee.deleteIcon}`]: t[`deleteIcon${re(l)}`]
    }, {
      [`& .${Ee.deleteIcon}`]: t[`deleteIconColor${re(r)}`]
    }, {
      [`& .${Ee.deleteIcon}`]: t[`deleteIcon${re(c)}Color${re(r)}`]
    }, t.root, t[`size${re(l)}`], t[`color${re(r)}`], i && t.clickable, i && r !== "default" && t[`clickableColor${re(r)})`], s && t.deletable, s && r !== "default" && t[`deletableColor${re(r)}`], t[c], t[`${c}${re(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return T({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${Ee.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${Ee.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : o,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${Ee.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${Ee.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${Ee.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${Ee.icon}`]: T({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && T({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : o
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${Ee.deleteIcon}`]: T({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : Be(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : Be(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : Be(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${Ee.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${Ee.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => T({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${Ee.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Be(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${Ee.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => T({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${Ee.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${Ee.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${Ee.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Ee.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ee.icon}`]: {
    marginLeft: 4
  },
  [`& .${Ee.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Ee.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Ee.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Be(e.palette[t.color].main, 0.7)}`,
  [`&.${Ee.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${Ee.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : Be(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${Ee.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : Be(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), q0 = Q("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${re(r)}`]];
  }
})(({
  ownerState: e
}) => T({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function uc(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const $d = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiChip"
  }), {
    avatar: a,
    className: i,
    clickable: s,
    color: l = "default",
    component: c,
    deleteIcon: u,
    disabled: d = !1,
    icon: p,
    label: f,
    onClick: v,
    onDelete: h,
    onKeyDown: b,
    onKeyUp: y,
    size: C = "medium",
    variant: S = "filled",
    tabIndex: w,
    skipFocusWhenDisabled: x = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, g = ue(r, z0), P = m.useRef(null), R = Se(P, o), I = (U) => {
    U.stopPropagation(), h && h(U);
  }, j = (U) => {
    U.currentTarget === U.target && uc(U) && U.preventDefault(), b && b(U);
  }, M = (U) => {
    U.currentTarget === U.target && (h && uc(U) ? h(U) : U.key === "Escape" && P.current && P.current.blur()), y && y(U);
  }, N = s !== !1 && v ? !0 : s, q = N || h ? cn : c || "div", k = T({}, r, {
    component: q,
    disabled: d,
    size: C,
    color: l,
    iconColor: /* @__PURE__ */ m.isValidElement(p) && p.props.color || l,
    onDelete: !!h,
    clickable: N,
    variant: S
  }), A = W0(k), $ = q === cn ? T({
    component: c || "div",
    focusVisibleClassName: A.focusVisible
  }, h && {
    disableRipple: !0
  }) : {};
  let D = null;
  h && (D = u && /* @__PURE__ */ m.isValidElement(u) ? /* @__PURE__ */ m.cloneElement(u, {
    className: ae(u.props.className, A.deleteIcon),
    onClick: I
  }) : /* @__PURE__ */ E(j0, {
    className: ae(A.deleteIcon),
    onClick: I
  }));
  let V = null;
  a && /* @__PURE__ */ m.isValidElement(a) && (V = /* @__PURE__ */ m.cloneElement(a, {
    className: ae(A.avatar, a.props.className)
  }));
  let O = null;
  return p && /* @__PURE__ */ m.isValidElement(p) && (O = /* @__PURE__ */ m.cloneElement(p, {
    className: ae(A.icon, p.props.className)
  })), process.env.NODE_ENV !== "production" && V && O && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ le(U0, T({
    as: q,
    className: ae(A.root, i),
    disabled: N && d ? !0 : void 0,
    onClick: v,
    onKeyDown: j,
    onKeyUp: M,
    ref: R,
    tabIndex: x && d ? -1 : w,
    ownerState: k
  }, $, g, {
    children: [V || O, /* @__PURE__ */ E(q0, {
      className: ae(A.label),
      ownerState: k,
      children: f
    }), D]
  }));
});
process.env.NODE_ENV !== "production" && ($d.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Avatar element to display.
   */
  avatar: n.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Au,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: n.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * Icon element.
   */
  icon: n.element,
  /**
   * The content of the component.
   */
  label: n.node,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: n.func,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * @ignore
   */
  onKeyUp: n.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  tabIndex: n.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined"]), n.string])
});
function H0(e) {
  return pe("MuiInput", e);
}
const So = T({}, ao, de("MuiInput", ["root", "underline", "input"]));
function Y0(e) {
  return pe("MuiOutlinedInput", e);
}
const sn = T({}, ao, de("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
function K0(e) {
  return pe("MuiFilledInput", e);
}
const gn = T({}, ao, de("MuiFilledInput", ["root", "underline", "input"])), G0 = Nt(/* @__PURE__ */ E("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), Kn = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (Kn.displayName = "ListContext");
function X0(e) {
  return pe("MuiList", e);
}
de("MuiList", ["root", "padding", "dense", "subheader"]);
const Z0 = ["children", "className", "component", "dense", "disablePadding", "subheader"], Q0 = (e) => {
  const {
    classes: t,
    disablePadding: o,
    dense: r,
    subheader: a
  } = e;
  return me({
    root: ["root", !o && "padding", r && "dense", a && "subheader"]
  }, X0, t);
}, J0 = Q("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disablePadding && t.padding, o.dense && t.dense, o.subheader && t.subheader];
  }
})(({
  ownerState: e
}) => T({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !e.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, e.subheader && {
  paddingTop: 0
})), ls = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiList"
  }), {
    children: a,
    className: i,
    component: s = "ul",
    dense: l = !1,
    disablePadding: c = !1,
    subheader: u
  } = r, d = ue(r, Z0), p = m.useMemo(() => ({
    dense: l
  }), [l]), f = T({}, r, {
    component: s,
    dense: l,
    disablePadding: c
  }), v = Q0(f);
  return /* @__PURE__ */ E(Kn.Provider, {
    value: p,
    children: /* @__PURE__ */ le(J0, T({
      as: s,
      className: ae(v.root, i),
      ref: o,
      ownerState: f
    }, d, {
      children: [u, a]
    }))
  });
});
process.env.NODE_ENV !== "production" && (ls.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const ex = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function Ja(e, t, o) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : o ? null : e.firstChild;
}
function dc(e, t, o) {
  return e === t ? o ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : o ? null : e.lastChild;
}
function Id(e, t) {
  if (t === void 0)
    return !0;
  let o = e.innerText;
  return o === void 0 && (o = e.textContent), o = o.trim().toLowerCase(), o.length === 0 ? !1 : t.repeating ? o[0] === t.keys[0] : o.indexOf(t.keys.join("")) === 0;
}
function Eo(e, t, o, r, a, i) {
  let s = !1, l = a(e, t, t ? o : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (s)
        return !1;
      s = !0;
    }
    const c = r ? !1 : l.disabled || l.getAttribute("aria-disabled") === "true";
    if (!l.hasAttribute("tabindex") || !Id(l, i) || c)
      l = a(e, l, o);
    else
      return l.focus(), !0;
  }
  return !1;
}
const Nd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: r,
    autoFocus: a = !1,
    autoFocusItem: i = !1,
    children: s,
    className: l,
    disabledItemsFocusable: c = !1,
    disableListWrap: u = !1,
    onKeyDown: d,
    variant: p = "selectedMenu"
  } = t, f = ue(t, ex), v = m.useRef(null), h = m.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  et(() => {
    a && v.current.focus();
  }, [a]), m.useImperativeHandle(r, () => ({
    adjustStyleForScrollbar: (w, {
      direction: x
    }) => {
      const g = !v.current.style.width;
      if (w.clientHeight < v.current.clientHeight && g) {
        const P = `${Lu(Je(w))}px`;
        v.current.style[x === "rtl" ? "paddingLeft" : "paddingRight"] = P, v.current.style.width = `calc(100% + ${P})`;
      }
      return v.current;
    }
  }), []);
  const b = (w) => {
    const x = v.current, g = w.key, P = Je(x).activeElement;
    if (g === "ArrowDown")
      w.preventDefault(), Eo(x, P, u, c, Ja);
    else if (g === "ArrowUp")
      w.preventDefault(), Eo(x, P, u, c, dc);
    else if (g === "Home")
      w.preventDefault(), Eo(x, null, u, c, Ja);
    else if (g === "End")
      w.preventDefault(), Eo(x, null, u, c, dc);
    else if (g.length === 1) {
      const R = h.current, I = g.toLowerCase(), j = performance.now();
      R.keys.length > 0 && (j - R.lastTime > 500 ? (R.keys = [], R.repeating = !0, R.previousKeyMatched = !0) : R.repeating && I !== R.keys[0] && (R.repeating = !1)), R.lastTime = j, R.keys.push(I);
      const M = P && !R.repeating && Id(P, R);
      R.previousKeyMatched && (M || Eo(x, P, !1, c, Ja, R)) ? w.preventDefault() : R.previousKeyMatched = !1;
    }
    d && d(w);
  }, y = Se(v, o);
  let C = -1;
  m.Children.forEach(s, (w, x) => {
    if (!/* @__PURE__ */ m.isValidElement(w)) {
      C === x && (C += 1, C >= s.length && (C = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && zo.isFragment(w) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), w.props.disabled || (p === "selectedMenu" && w.props.selected || C === -1) && (C = x), C === x && (w.props.disabled || w.props.muiSkipListHighlight || w.type.muiSkipListHighlight) && (C += 1, C >= s.length && (C = -1));
  });
  const S = m.Children.map(s, (w, x) => {
    if (x === C) {
      const g = {};
      return i && (g.autoFocus = !0), w.props.tabIndex === void 0 && p === "selectedMenu" && (g.tabIndex = 0), /* @__PURE__ */ m.cloneElement(w, g);
    }
    return w;
  });
  return /* @__PURE__ */ E(ls, T({
    role: "menu",
    ref: y,
    className: l,
    onKeyDown: b,
    tabIndex: a ? 0 : -1
  }, f, {
    children: S
  }));
});
process.env.NODE_ENV !== "production" && (Nd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: n.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: n.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: n.bool,
  /**
   * @ignore
   */
  onKeyDown: n.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
const cs = (e) => e.scrollTop;
function uo(e, t) {
  var o, r;
  const {
    timeout: a,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (o = s.transitionDuration) != null ? o : typeof a == "number" ? a : a[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  };
}
const tx = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function Oi(e) {
  return `scale(${e}, ${e ** 2})`;
}
const nx = {
  entering: {
    opacity: 1,
    transform: Oi(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, ei = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), Pa = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    addEndListener: r,
    appear: a = !0,
    children: i,
    easing: s,
    in: l,
    onEnter: c,
    onEntered: u,
    onEntering: d,
    onExit: p,
    onExited: f,
    onExiting: v,
    style: h,
    timeout: b = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: y = bt
  } = t, C = ue(t, tx), S = Fu(), w = m.useRef(), x = tn(), g = m.useRef(null), P = Se(g, i.ref, o), R = ($) => (D) => {
    if ($) {
      const V = g.current;
      D === void 0 ? $(V) : $(V, D);
    }
  }, I = R(d), j = R(($, D) => {
    cs($);
    const {
      duration: V,
      delay: O,
      easing: U
    } = uo({
      style: h,
      timeout: b,
      easing: s
    }, {
      mode: "enter"
    });
    let F;
    b === "auto" ? (F = x.transitions.getAutoHeightDuration($.clientHeight), w.current = F) : F = V, $.style.transition = [x.transitions.create("opacity", {
      duration: F,
      delay: O
    }), x.transitions.create("transform", {
      duration: ei ? F : F * 0.666,
      delay: O,
      easing: U
    })].join(","), c && c($, D);
  }), M = R(u), N = R(v), q = R(($) => {
    const {
      duration: D,
      delay: V,
      easing: O
    } = uo({
      style: h,
      timeout: b,
      easing: s
    }, {
      mode: "exit"
    });
    let U;
    b === "auto" ? (U = x.transitions.getAutoHeightDuration($.clientHeight), w.current = U) : U = D, $.style.transition = [x.transitions.create("opacity", {
      duration: U,
      delay: V
    }), x.transitions.create("transform", {
      duration: ei ? U : U * 0.666,
      delay: ei ? V : V || U * 0.333,
      easing: O
    })].join(","), $.style.opacity = 0, $.style.transform = Oi(0.75), p && p($);
  }), k = R(f);
  return /* @__PURE__ */ E(y, T({
    appear: a,
    in: l,
    nodeRef: g,
    onEnter: j,
    onEntered: M,
    onEntering: I,
    onExit: q,
    onExited: k,
    onExiting: N,
    addEndListener: ($) => {
      b === "auto" && S.start(w.current || 0, $), r && r(g.current, $);
    },
    timeout: b === "auto" ? null : b
  }, C, {
    children: ($, D) => /* @__PURE__ */ m.cloneElement(i, T({
      style: T({
        opacity: 0,
        transform: Oi(0.75),
        visibility: $ === "exited" && !l ? "hidden" : void 0
      }, nx[$], h, i.props.style),
      ref: P
    }, D))
  }));
});
process.env.NODE_ENV !== "production" && (Pa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: fo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
Pa.muiSupportAuto = !0;
function ox(e) {
  return pe("MuiTypography", e);
}
de("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const rx = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], ax = (e) => {
  const {
    align: t,
    gutterBottom: o,
    noWrap: r,
    paragraph: a,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, e.align !== "inherit" && `align${re(t)}`, o && "gutterBottom", r && "noWrap", a && "paragraph"]
  };
  return me(l, ox, s);
}, ix = Q("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.variant && t[o.variant], o.align !== "inherit" && t[`align${re(o.align)}`], o.noWrap && t.noWrap, o.gutterBottom && t.gutterBottom, o.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), pc = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, sx = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, lx = (e) => sx[e] || e, mn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiTypography"
  }), a = lx(r.color), i = Li(T({}, r, {
    color: a
  })), {
    align: s = "inherit",
    className: l,
    component: c,
    gutterBottom: u = !1,
    noWrap: d = !1,
    paragraph: p = !1,
    variant: f = "body1",
    variantMapping: v = pc
  } = i, h = ue(i, rx), b = T({}, i, {
    align: s,
    color: a,
    className: l,
    component: c,
    gutterBottom: u,
    noWrap: d,
    paragraph: p,
    variant: f,
    variantMapping: v
  }), y = c || (p ? "p" : v[f] || pc[f]) || "span", C = ax(b);
  return /* @__PURE__ */ E(ix, T({
    as: y,
    ref: o,
    ownerState: b,
    className: ae(C.root, l)
  }, h));
});
process.env.NODE_ENV !== "production" && (mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: n.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: n.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: n.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: n.oneOfType([n.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), n.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: n.object
});
const cx = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), ji.configure(e);
  }
}, ux = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: re,
  createChainedFunction: pi,
  createSvgIcon: Nt,
  debounce: fa,
  deprecatedPropType: cb,
  isMuiElement: Hn,
  ownerDocument: Je,
  ownerWindow: Ut,
  requirePropFactory: ub,
  setRef: Ar,
  unstable_ClassNameGenerator: cx,
  unstable_useEnhancedEffect: et,
  unstable_useId: en,
  unsupportedProp: Au,
  useControlled: $t,
  useEventCallback: se,
  useForkRef: Se,
  useIsFocusVisible: Vu
}, Symbol.toStringTag, { value: "Module" })), dx = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function px(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function fx(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let o = t(`[name="${e.name}"]:checked`);
  return o || (o = t(`[name="${e.name}"]`)), o !== e;
}
function mx(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || fx(e));
}
function hx(e) {
  const t = [], o = [];
  return Array.from(e.querySelectorAll(dx)).forEach((r, a) => {
    const i = px(r);
    i === -1 || !mx(r) || (i === 0 ? t.push(r) : o.push({
      documentOrder: a,
      tabIndex: i,
      node: r
    }));
  }), o.sort((r, a) => r.tabIndex === a.tabIndex ? r.documentOrder - a.documentOrder : r.tabIndex - a.tabIndex).map((r) => r.node).concat(t);
}
function bx() {
  return !0;
}
function Ko(e) {
  const {
    children: t,
    disableAutoFocus: o = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: a = !1,
    getTabbable: i = hx,
    isEnabled: s = bx,
    open: l
  } = e, c = m.useRef(!1), u = m.useRef(null), d = m.useRef(null), p = m.useRef(null), f = m.useRef(null), v = m.useRef(!1), h = m.useRef(null), b = Se(t.ref, h), y = m.useRef(null);
  m.useEffect(() => {
    !l || !h.current || (v.current = !o);
  }, [o, l]), m.useEffect(() => {
    if (!l || !h.current)
      return;
    const w = Je(h.current);
    return h.current.contains(w.activeElement) || (h.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), h.current.setAttribute("tabIndex", "-1")), v.current && h.current.focus()), () => {
      a || (p.current && p.current.focus && (c.current = !0, p.current.focus()), p.current = null);
    };
  }, [l]), m.useEffect(() => {
    if (!l || !h.current)
      return;
    const w = Je(h.current), x = (R) => {
      y.current = R, !(r || !s() || R.key !== "Tab") && w.activeElement === h.current && R.shiftKey && (c.current = !0, d.current && d.current.focus());
    }, g = () => {
      const R = h.current;
      if (R === null)
        return;
      if (!w.hasFocus() || !s() || c.current) {
        c.current = !1;
        return;
      }
      if (R.contains(w.activeElement) || r && w.activeElement !== u.current && w.activeElement !== d.current)
        return;
      if (w.activeElement !== f.current)
        f.current = null;
      else if (f.current !== null)
        return;
      if (!v.current)
        return;
      let I = [];
      if ((w.activeElement === u.current || w.activeElement === d.current) && (I = i(h.current)), I.length > 0) {
        var j, M;
        const N = !!((j = y.current) != null && j.shiftKey && ((M = y.current) == null ? void 0 : M.key) === "Tab"), q = I[0], k = I[I.length - 1];
        typeof q != "string" && typeof k != "string" && (N ? k.focus() : q.focus());
      } else
        R.focus();
    };
    w.addEventListener("focusin", g), w.addEventListener("keydown", x, !0);
    const P = setInterval(() => {
      w.activeElement && w.activeElement.tagName === "BODY" && g();
    }, 50);
    return () => {
      clearInterval(P), w.removeEventListener("focusin", g), w.removeEventListener("keydown", x, !0);
    };
  }, [o, r, a, s, l, i]);
  const C = (w) => {
    p.current === null && (p.current = w.relatedTarget), v.current = !0, f.current = w.target;
    const x = t.props.onFocus;
    x && x(w);
  }, S = (w) => {
    p.current === null && (p.current = w.relatedTarget), v.current = !0;
  };
  return /* @__PURE__ */ le(m.Fragment, {
    children: [/* @__PURE__ */ E("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: u,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ m.cloneElement(t, {
      ref: b,
      onFocus: C
    }), /* @__PURE__ */ E("div", {
      tabIndex: l ? 0 : -1,
      onFocus: S,
      ref: d,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: fo,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: n.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: n.func,
  /**
   * If `true`, focus is locked.
   */
  open: n.bool.isRequired
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = _u(Ko.propTypes));
function gx(e) {
  return pe("MuiFormControl", e);
}
de("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const yx = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], vx = (e) => {
  const {
    classes: t,
    margin: o,
    fullWidth: r
  } = e, a = {
    root: ["root", o !== "none" && `margin${re(o)}`, r && "fullWidth"]
  };
  return me(a, gx, t);
}, xx = Q("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => T({}, t.root, t[`margin${re(e.margin)}`], e.fullWidth && t.fullWidth)
})(({
  ownerState: e
}) => T({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, e.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, e.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, e.fullWidth && {
  width: "100%"
})), us = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiFormControl"
  }), {
    children: a,
    className: i,
    color: s = "primary",
    component: l = "div",
    disabled: c = !1,
    error: u = !1,
    focused: d,
    fullWidth: p = !1,
    hiddenLabel: f = !1,
    margin: v = "none",
    required: h = !1,
    size: b = "medium",
    variant: y = "outlined"
  } = r, C = ue(r, yx), S = T({}, r, {
    color: s,
    component: l,
    disabled: c,
    error: u,
    fullWidth: p,
    hiddenLabel: f,
    margin: v,
    required: h,
    size: b,
    variant: y
  }), w = vx(S), [x, g] = m.useState(() => {
    let k = !1;
    return a && m.Children.forEach(a, (A) => {
      if (!Hn(A, ["Input", "Select"]))
        return;
      const $ = Hn(A, ["Select"]) ? A.props.input : A;
      $ && Dy($.props) && (k = !0);
    }), k;
  }), [P, R] = m.useState(() => {
    let k = !1;
    return a && m.Children.forEach(a, (A) => {
      Hn(A, ["Input", "Select"]) && (jr(A.props, !0) || jr(A.props.inputProps, !0)) && (k = !0);
    }), k;
  }), [I, j] = m.useState(!1);
  c && I && j(!1);
  const M = d !== void 0 && !c ? d : I;
  let N;
  if (process.env.NODE_ENV !== "production") {
    const k = m.useRef(!1);
    N = () => (k.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), k.current = !0, () => {
      k.current = !1;
    });
  }
  const q = m.useMemo(() => ({
    adornedStart: x,
    setAdornedStart: g,
    color: s,
    disabled: c,
    error: u,
    filled: P,
    focused: M,
    fullWidth: p,
    hiddenLabel: f,
    size: b,
    onBlur: () => {
      j(!1);
    },
    onEmpty: () => {
      R(!1);
    },
    onFilled: () => {
      R(!0);
    },
    onFocus: () => {
      j(!0);
    },
    registerEffect: N,
    required: h,
    variant: y
  }), [x, s, c, u, P, M, p, f, N, h, b, y]);
  return /* @__PURE__ */ E(ir.Provider, {
    value: q,
    children: /* @__PURE__ */ E(xx, T({
      as: l,
      ownerState: S,
      className: ae(w.root, i),
      ref: o
    }, C, {
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (us.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const wx = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], Cx = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = me({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, H0, t);
  return T({}, t, a);
}, Sx = Q(wa, {
  shouldForwardProp: (e) => ht(e) || e === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...va(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), T({
    position: "relative"
  }, t.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${So.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${So.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${r}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${So.disabled}, .${So.error}):before`]: {
      borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${r}`
      }
    },
    [`&.${So.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), Ex = Q(Ca, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: xa
})({}), Ra = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, a, i, s;
  const l = Oe({
    props: t,
    name: "MuiInput"
  }), {
    disableUnderline: c,
    components: u = {},
    componentsProps: d,
    fullWidth: p = !1,
    inputComponent: f = "input",
    multiline: v = !1,
    slotProps: h,
    slots: b = {},
    type: y = "text"
  } = l, C = ue(l, wx), S = Cx(l), x = {
    root: {
      ownerState: {
        disableUnderline: c
      }
    }
  }, g = h ?? d ? ft(h ?? d, x) : x, P = (r = (a = b.root) != null ? a : u.Root) != null ? r : Sx, R = (i = (s = b.input) != null ? s : u.Input) != null ? i : Ex;
  return /* @__PURE__ */ E(sr, T({
    slots: {
      root: P,
      input: R
    },
    slotProps: g,
    fullWidth: p,
    inputComponent: f,
    multiline: v,
    ref: o,
    type: y
  }, C, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (Ra.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Ra.muiName = "Input";
const Ox = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], Px = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = me({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, K0, t);
  return T({}, t, a);
}, Rx = Q(wa, {
  shouldForwardProp: (e) => ht(e) || e === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [...va(e, t), !o.disableUnderline && t.underline];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o;
  const r = e.palette.mode === "light", a = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", l = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return T({
    position: "relative",
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
      }
    },
    [`&.${gn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i
    },
    [`&.${gn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : l
    }
  }, !t.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(o = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : o.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: e.transitions.create("transform", {
        duration: e.transitions.duration.shorter,
        easing: e.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${gn.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${gn.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (e.vars || e).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : a}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: e.transitions.create("border-bottom-color", {
        duration: e.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${gn.disabled}, .${gn.error}):before`]: {
      borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
    },
    [`&.${gn.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, t.startAdornment && {
    paddingLeft: 12
  }, t.endAdornment && {
    paddingRight: 12
  }, t.multiline && T({
    padding: "25px 12px 8px"
  }, t.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, t.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, t.hiddenLabel && t.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
}), Tx = Q(Ca, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: xa
})(({
  theme: e,
  ownerState: t
}) => T({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, t.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
}, t.hiddenLabel && t.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, t.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
})), Ta = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, a, i, s;
  const l = Oe({
    props: t,
    name: "MuiFilledInput"
  }), {
    components: c = {},
    componentsProps: u,
    fullWidth: d = !1,
    // declare here to prevent spreading to DOM
    inputComponent: p = "input",
    multiline: f = !1,
    slotProps: v,
    slots: h = {},
    type: b = "text"
  } = l, y = ue(l, Ox), C = T({}, l, {
    fullWidth: d,
    inputComponent: p,
    multiline: f,
    type: b
  }), S = Px(l), w = {
    root: {
      ownerState: C
    },
    input: {
      ownerState: C
    }
  }, x = v ?? u ? ft(w, v ?? u) : w, g = (r = (a = h.root) != null ? a : c.Root) != null ? r : Rx, P = (i = (s = h.input) != null ? s : c.Input) != null ? i : Tx;
  return /* @__PURE__ */ E(sr, T({
    slots: {
      root: g,
      input: P
    },
    componentsProps: x,
    fullWidth: d,
    inputComponent: p,
    multiline: f,
    ref: o,
    type: b
  }, y, {
    classes: S
  }));
});
process.env.NODE_ENV !== "production" && (Ta.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    input: n.object,
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
Ta.muiName = "Input";
var fc;
const kx = ["children", "classes", "className", "label", "notched"], Dx = Q("fieldset", {
  shouldForwardProp: ht
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), Mx = Q("legend", {
  shouldForwardProp: ht
})(({
  ownerState: e,
  theme: t
}) => T({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !e.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: t.transitions.create("width", {
    duration: 150,
    easing: t.transitions.easing.easeOut
  })
}, e.withLabel && T({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: t.transitions.create("max-width", {
    duration: 50,
    easing: t.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, e.notched && {
  maxWidth: "100%",
  transition: t.transitions.create("max-width", {
    duration: 100,
    easing: t.transitions.easing.easeOut,
    delay: 50
  })
})));
function _d(e) {
  const {
    className: t,
    label: o,
    notched: r
  } = e, a = ue(e, kx), i = o != null && o !== "", s = T({}, e, {
    notched: r,
    withLabel: i
  });
  return /* @__PURE__ */ E(Dx, T({
    "aria-hidden": !0,
    className: t,
    ownerState: s
  }, a, {
    children: /* @__PURE__ */ E(Mx, {
      ownerState: s,
      children: i ? /* @__PURE__ */ E("span", {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        fc || (fc = /* @__PURE__ */ E("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (_d.propTypes = {
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The label.
   */
  label: n.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool.isRequired,
  /**
   * @ignore
   */
  style: n.object
});
const $x = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], Ix = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, Y0, t);
  return T({}, t, r);
}, Nx = Q(wa, {
  shouldForwardProp: (e) => ht(e) || e === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: va
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return T({
    position: "relative",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${sn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${sn.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : o
      }
    },
    [`&.${sn.focused} .${sn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette[t.color].main,
      borderWidth: 2
    },
    [`&.${sn.error} .${sn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    [`&.${sn.disabled} .${sn.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.action.disabled
    }
  }, t.startAdornment && {
    paddingLeft: 14
  }, t.endAdornment && {
    paddingRight: 14
  }, t.multiline && T({
    padding: "16.5px 14px"
  }, t.size === "small" && {
    padding: "8.5px 14px"
  }));
}), _x = Q(_d, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), Ax = Q(Ca, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: xa
})(({
  theme: e,
  ownerState: t
}) => T({
  padding: "16.5px 14px"
}, !e.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
    caretColor: e.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, e.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [e.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, t.size === "small" && {
  padding: "8.5px 14px"
}, t.multiline && {
  padding: 0
}, t.startAdornment && {
  paddingLeft: 0
}, t.endAdornment && {
  paddingRight: 0
})), ka = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, a, i, s, l;
  const c = Oe({
    props: t,
    name: "MuiOutlinedInput"
  }), {
    components: u = {},
    fullWidth: d = !1,
    inputComponent: p = "input",
    label: f,
    multiline: v = !1,
    notched: h,
    slots: b = {},
    type: y = "text"
  } = c, C = ue(c, $x), S = Ix(c), w = kt(), x = go({
    props: c,
    muiFormControl: w,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), g = T({}, c, {
    color: x.color || "primary",
    disabled: x.disabled,
    error: x.error,
    focused: x.focused,
    formControl: w,
    fullWidth: d,
    hiddenLabel: x.hiddenLabel,
    multiline: v,
    size: x.size,
    type: y
  }), P = (r = (a = b.root) != null ? a : u.Root) != null ? r : Nx, R = (i = (s = b.input) != null ? s : u.Input) != null ? i : Ax;
  return /* @__PURE__ */ E(sr, T({
    slots: {
      root: P,
      input: R
    },
    renderSuffix: (I) => /* @__PURE__ */ E(_x, {
      ownerState: g,
      className: S.notchedOutline,
      label: f != null && f !== "" && x.required ? l || (l = /* @__PURE__ */ le(m.Fragment, {
        children: [f, " ", "*"]
      })) : f,
      notched: typeof h < "u" ? h : !!(I.startAdornment || I.filled || I.focused)
    }),
    fullWidth: d,
    inputComponent: p,
    multiline: v,
    ref: o,
    type: y
  }, C, {
    classes: T({}, S, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (ka.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary"]), n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Input: n.elementType,
    Root: n.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: n.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: n.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: n.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: n.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: n.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: n.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: n.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    input: n.elementType,
    root: n.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any
});
ka.muiName = "Input";
function Fx(e) {
  return pe("MuiFormLabel", e);
}
const _o = de("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Vx = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], Lx = (e) => {
  const {
    classes: t,
    color: o,
    focused: r,
    disabled: a,
    error: i,
    filled: s,
    required: l
  } = e, c = {
    root: ["root", `color${re(o)}`, a && "disabled", i && "error", s && "filled", r && "focused", l && "required"],
    asterisk: ["asterisk", i && "error"]
  };
  return me(c, Fx, t);
}, jx = Q("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: e
  }, t) => T({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled)
})(({
  theme: e,
  ownerState: t
}) => T({
  color: (e.vars || e).palette.text.secondary
}, e.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${_o.focused}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${_o.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${_o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Bx = Q("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${_o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ad = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiFormLabel"
  }), {
    children: a,
    className: i,
    component: s = "label"
  } = r, l = ue(r, Vx), c = kt(), u = go({
    props: r,
    muiFormControl: c,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), d = T({}, r, {
    color: u.color || "primary",
    component: s,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = Lx(d);
  return /* @__PURE__ */ le(jx, T({
    as: s,
    ownerState: d,
    className: ae(p.root, i),
    ref: o
  }, l, {
    children: [a, u.required && /* @__PURE__ */ le(Bx, {
      ownerState: d,
      "aria-hidden": !0,
      className: p.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Ad.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function zx(e) {
  return pe("MuiInputLabel", e);
}
de("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const Wx = ["disableAnimation", "margin", "shrink", "variant", "className"], Ux = (e) => {
  const {
    classes: t,
    formControl: o,
    size: r,
    shrink: a,
    disableAnimation: i,
    variant: s,
    required: l
  } = e, c = {
    root: ["root", o && "formControl", !i && "animated", a && "shrink", r && r !== "normal" && `size${re(r)}`, s],
    asterisk: [l && "asterisk"]
  }, u = me(c, zx, t);
  return T({}, t, u);
}, qx = Q(Ad, {
  shouldForwardProp: (e) => ht(e) || e === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [{
      [`& .${_o.asterisk}`]: t.asterisk
    }, t.root, o.formControl && t.formControl, o.size === "small" && t.sizeSmall, o.shrink && t.shrink, !o.disableAnimation && t.animated, o.focused && t.focused, t[o.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, t.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, t.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, t.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !t.disableAnimation && {
  transition: e.transitions.create(["color", "transform", "max-width"], {
    duration: e.transitions.duration.shorter,
    easing: e.transitions.easing.easeOut
  })
}, t.variant === "filled" && T({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, t.shrink && T({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, t.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), t.variant === "outlined" && T({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, t.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, t.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), ds = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    name: "MuiInputLabel",
    props: t
  }), {
    disableAnimation: a = !1,
    shrink: i,
    className: s
  } = r, l = ue(r, Wx), c = kt();
  let u = i;
  typeof u > "u" && c && (u = c.filled || c.focused || c.adornedStart);
  const d = go({
    props: r,
    muiFormControl: c,
    states: ["size", "variant", "required", "focused"]
  }), p = T({}, r, {
    disableAnimation: a,
    formControl: c,
    shrink: u,
    size: d.size,
    variant: d.variant,
    required: d.required,
    focused: d.focused
  }), f = Ux(p);
  return /* @__PURE__ */ E(qx, T({
    "data-shrink": u,
    ownerState: p,
    ref: o,
    className: ae(f.root, s)
  }, l, {
    classes: f
  }));
});
process.env.NODE_ENV !== "production" && (ds.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: n.oneOfType([n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), n.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: n.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: n.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: n.oneOfType([n.oneOf(["normal", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function Hx(e) {
  return pe("MuiFormHelperText", e);
}
const mc = de("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
var hc;
const Yx = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], Kx = (e) => {
  const {
    classes: t,
    contained: o,
    size: r,
    disabled: a,
    error: i,
    filled: s,
    focused: l,
    required: c
  } = e, u = {
    root: ["root", a && "disabled", i && "error", r && `size${re(r)}`, o && "contained", l && "focused", s && "filled", c && "required"]
  };
  return me(u, Hx, t);
}, Gx = Q("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.size && t[`size${re(o.size)}`], o.contained && t.contained, o.filled && t.filled];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${mc.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${mc.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, t.size === "small" && {
  marginTop: 4
}, t.contained && {
  marginLeft: 14,
  marginRight: 14
})), ps = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiFormHelperText"
  }), {
    children: a,
    className: i,
    component: s = "p"
  } = r, l = ue(r, Yx), c = kt(), u = go({
    props: r,
    muiFormControl: c,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), d = T({}, r, {
    component: s,
    contained: u.variant === "filled" || u.variant === "outlined",
    variant: u.variant,
    size: u.size,
    disabled: u.disabled,
    error: u.error,
    filled: u.filled,
    focused: u.focused,
    required: u.required
  }), p = Kx(d);
  return /* @__PURE__ */ E(Gx, T({
    as: s,
    ownerState: d,
    className: ae(p.root, i),
    ref: o
  }, l, {
    children: a === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      hc || (hc = /* @__PURE__ */ E("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : a
  }));
});
process.env.NODE_ENV !== "production" && (ps.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
function Xx(e) {
  const t = Je(e);
  return t.body === e ? Ut(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function Ao(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function bc(e) {
  return parseInt(Ut(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Zx(e) {
  const o = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1, r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return o || r;
}
function gc(e, t, o, r, a) {
  const i = [t, o, ...r];
  [].forEach.call(e.children, (s) => {
    const l = i.indexOf(s) === -1, c = !Zx(s);
    l && c && Ao(s, a);
  });
}
function ti(e, t) {
  let o = -1;
  return e.some((r, a) => t(r) ? (o = a, !0) : !1), o;
}
function Qx(e, t) {
  const o = [], r = e.container;
  if (!t.disableScrollLock) {
    if (Xx(r)) {
      const s = Lu(Je(r));
      o.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${bc(r) + s}px`;
      const l = Je(r).querySelectorAll(".mui-fixed");
      [].forEach.call(l, (c) => {
        o.push({
          value: c.style.paddingRight,
          property: "padding-right",
          el: c
        }), c.style.paddingRight = `${bc(c) + s}px`;
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment)
      i = Je(r).body;
    else {
      const s = r.parentElement, l = Ut(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && l.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    o.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden";
  }
  return () => {
    o.forEach(({
      value: i,
      el: s,
      property: l
    }) => {
      i ? s.style.setProperty(l, i) : s.style.removeProperty(l);
    });
  };
}
function Jx(e) {
  const t = [];
  return [].forEach.call(e.children, (o) => {
    o.getAttribute("aria-hidden") === "true" && t.push(o);
  }), t;
}
class ew {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(t, o) {
    let r = this.modals.indexOf(t);
    if (r !== -1)
      return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && Ao(t.modalRef, !1);
    const a = Jx(o);
    gc(o, t.mount, t.modalRef, a, !0);
    const i = ti(this.containers, (s) => s.container === o);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: o,
      restore: null,
      hiddenSiblings: a
    }), r);
  }
  mount(t, o) {
    const r = ti(this.containers, (i) => i.modals.indexOf(t) !== -1), a = this.containers[r];
    a.restore || (a.restore = Qx(a, o));
  }
  remove(t, o = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1)
      return r;
    const a = ti(this.containers, (s) => s.modals.indexOf(t) !== -1), i = this.containers[a];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0)
      i.restore && i.restore(), t.modalRef && Ao(t.modalRef, o), gc(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(a, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && Ao(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const tw = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], nw = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Dn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = tn(), a = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: i,
    appear: s = !0,
    children: l,
    easing: c,
    in: u,
    onEnter: d,
    onEntered: p,
    onEntering: f,
    onExit: v,
    onExited: h,
    onExiting: b,
    style: y,
    timeout: C = a,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = bt
  } = t, w = ue(t, tw), x = m.useRef(null), g = Se(x, l.ref, o), P = (A) => ($) => {
    if (A) {
      const D = x.current;
      $ === void 0 ? A(D) : A(D, $);
    }
  }, R = P(f), I = P((A, $) => {
    cs(A);
    const D = uo({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "enter"
    });
    A.style.webkitTransition = r.transitions.create("opacity", D), A.style.transition = r.transitions.create("opacity", D), d && d(A, $);
  }), j = P(p), M = P(b), N = P((A) => {
    const $ = uo({
      style: y,
      timeout: C,
      easing: c
    }, {
      mode: "exit"
    });
    A.style.webkitTransition = r.transitions.create("opacity", $), A.style.transition = r.transitions.create("opacity", $), v && v(A);
  }), q = P(h);
  return /* @__PURE__ */ E(S, T({
    appear: s,
    in: u,
    nodeRef: x,
    onEnter: I,
    onEntered: j,
    onEntering: R,
    onExit: N,
    onExited: q,
    onExiting: M,
    addEndListener: (A) => {
      i && i(x.current, A);
    },
    timeout: C
  }, w, {
    children: (A, $) => /* @__PURE__ */ m.cloneElement(l, T({
      style: T({
        opacity: 0,
        visibility: A === "exited" && !u ? "hidden" : void 0
      }, nw[A], y, l.props.style),
      ref: g
    }, $))
  }));
});
process.env.NODE_ENV !== "production" && (Dn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: fo.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function ow(e) {
  return pe("MuiBackdrop", e);
}
de("MuiBackdrop", ["root", "invisible"]);
const rw = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], aw = (e) => {
  const {
    classes: t,
    invisible: o
  } = e;
  return me({
    root: ["root", o && "invisible"]
  }, ow, t);
}, iw = Q("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.invisible && t.invisible];
  }
})(({
  ownerState: e
}) => T({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, e.invisible && {
  backgroundColor: "transparent"
})), fs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, a, i;
  const s = Oe({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: l,
    className: c,
    component: u = "div",
    components: d = {},
    componentsProps: p = {},
    invisible: f = !1,
    open: v,
    slotProps: h = {},
    slots: b = {},
    TransitionComponent: y = Dn,
    transitionDuration: C
  } = s, S = ue(s, rw), w = T({}, s, {
    component: u,
    invisible: f
  }), x = aw(w), g = (r = h.root) != null ? r : p.root;
  return /* @__PURE__ */ E(y, T({
    in: v,
    timeout: C
  }, S, {
    children: /* @__PURE__ */ E(iw, T({
      "aria-hidden": !0
    }, g, {
      as: (a = (i = b.root) != null ? i : d.Root) != null ? a : u,
      className: ae(x.root, c, g == null ? void 0 : g.className),
      ownerState: T({}, w, g == null ? void 0 : g.ownerState),
      classes: x,
      ref: o,
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: n.bool,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function sw(e) {
  return typeof e == "function" ? e() : e;
}
function lw(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const cw = new ew();
function uw(e) {
  const {
    container: t,
    disableEscapeKeyDown: o = !1,
    disableScrollLock: r = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: a = cw,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: l,
    children: c,
    onClose: u,
    open: d,
    rootRef: p
  } = e, f = m.useRef({}), v = m.useRef(null), h = m.useRef(null), b = Se(h, p), [y, C] = m.useState(!d), S = lw(c);
  let w = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (w = !1);
  const x = () => Je(v.current), g = () => (f.current.modalRef = h.current, f.current.mount = v.current, f.current), P = () => {
    a.mount(g(), {
      disableScrollLock: r
    }), h.current && (h.current.scrollTop = 0);
  }, R = se(() => {
    const D = sw(t) || x().body;
    a.add(g(), D), h.current && P();
  }), I = m.useCallback(() => a.isTopModal(g()), [a]), j = se((D) => {
    v.current = D, D && (d && I() ? P() : h.current && Ao(h.current, w));
  }), M = m.useCallback(() => {
    a.remove(g(), w);
  }, [w, a]);
  m.useEffect(() => () => {
    M();
  }, [M]), m.useEffect(() => {
    d ? R() : (!S || !i) && M();
  }, [d, M, S, i, R]);
  const N = (D) => (V) => {
    var O;
    (O = D.onKeyDown) == null || O.call(D, V), !(V.key !== "Escape" || V.which === 229 || // Wait until IME is settled.
    !I()) && (o || (V.stopPropagation(), u && u(V, "escapeKeyDown")));
  }, q = (D) => (V) => {
    var O;
    (O = D.onClick) == null || O.call(D, V), V.target === V.currentTarget && u && u(V, "backdropClick");
  };
  return {
    getRootProps: (D = {}) => {
      const V = zu(e);
      delete V.onTransitionEnter, delete V.onTransitionExited;
      const O = T({}, V, D);
      return T({
        role: "presentation"
      }, O, {
        onKeyDown: N(O),
        ref: b
      });
    },
    getBackdropProps: (D = {}) => {
      const V = D;
      return T({
        "aria-hidden": !0
      }, V, {
        onClick: q(V),
        open: d
      });
    },
    getTransitionProps: () => {
      const D = () => {
        C(!1), s && s();
      }, V = () => {
        C(!0), l && l(), i && M();
      };
      return {
        onEnter: pi(D, c == null ? void 0 : c.props.onEnter),
        onExited: pi(V, c == null ? void 0 : c.props.onExited)
      };
    },
    rootRef: b,
    portalRef: j,
    isTopModal: I,
    exited: y,
    hasTransition: S
  };
}
function dw(e) {
  return pe("MuiModal", e);
}
de("MuiModal", ["root", "hidden", "backdrop"]);
const pw = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], fw = (e) => {
  const {
    open: t,
    exited: o,
    classes: r
  } = e;
  return me({
    root: ["root", !t && o && "hidden"],
    backdrop: ["backdrop"]
  }, dw, r);
}, mw = Q("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.open && o.exited && t.hidden];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !t.open && t.exited && {
  visibility: "hidden"
})), hw = Q(fs, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), Da = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, a, i, s, l, c;
  const u = Oe({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: d = hw,
    BackdropProps: p,
    className: f,
    closeAfterTransition: v = !1,
    children: h,
    container: b,
    component: y,
    components: C = {},
    componentsProps: S = {},
    disableAutoFocus: w = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: g = !1,
    disablePortal: P = !1,
    disableRestoreFocus: R = !1,
    disableScrollLock: I = !1,
    hideBackdrop: j = !1,
    keepMounted: M = !1,
    onBackdropClick: N,
    open: q,
    slotProps: k,
    slots: A
    // eslint-disable-next-line react/prop-types
  } = u, $ = ue(u, pw), D = T({}, u, {
    closeAfterTransition: v,
    disableAutoFocus: w,
    disableEnforceFocus: x,
    disableEscapeKeyDown: g,
    disablePortal: P,
    disableRestoreFocus: R,
    disableScrollLock: I,
    hideBackdrop: j,
    keepMounted: M
  }), {
    getRootProps: V,
    getBackdropProps: O,
    getTransitionProps: U,
    portalRef: F,
    isTopModal: Y,
    exited: K,
    hasTransition: J
  } = uw(T({}, D, {
    rootRef: o
  })), Z = T({}, D, {
    exited: K
  }), L = fw(Z), z = {};
  if (h.props.tabIndex === void 0 && (z.tabIndex = "-1"), J) {
    const {
      onEnter: B,
      onExited: H
    } = U();
    z.onEnter = B, z.onExited = H;
  }
  const X = (r = (a = A == null ? void 0 : A.root) != null ? a : C.Root) != null ? r : mw, ee = (i = (s = A == null ? void 0 : A.backdrop) != null ? s : C.Backdrop) != null ? i : d, ne = (l = k == null ? void 0 : k.root) != null ? l : S.root, G = (c = k == null ? void 0 : k.backdrop) != null ? c : S.backdrop, te = Pn({
    elementType: X,
    externalSlotProps: ne,
    externalForwardedProps: $,
    getSlotProps: V,
    additionalProps: {
      ref: o,
      as: y
    },
    ownerState: Z,
    className: ae(f, ne == null ? void 0 : ne.className, L == null ? void 0 : L.root, !Z.open && Z.exited && (L == null ? void 0 : L.hidden))
  }), _ = Pn({
    elementType: ee,
    externalSlotProps: G,
    additionalProps: p,
    getSlotProps: (B) => O(T({}, B, {
      onClick: (H) => {
        N && N(H), B != null && B.onClick && B.onClick(H);
      }
    })),
    className: ae(G == null ? void 0 : G.className, p == null ? void 0 : p.className, L == null ? void 0 : L.backdrop),
    ownerState: Z
  });
  return !M && !q && (!J || K) ? null : /* @__PURE__ */ E(Yo, {
    ref: F,
    container: b,
    disablePortal: P,
    children: /* @__PURE__ */ le(X, T({}, te, {
      children: [!j && d ? /* @__PURE__ */ E(ee, T({}, _)) : null, /* @__PURE__ */ E(Ko, {
        disableEnforceFocus: x,
        disableAutoFocus: w,
        disableRestoreFocus: R,
        isEnabled: Y,
        open: q,
        children: /* @__PURE__ */ m.cloneElement(h, z)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Da.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: n.object,
  /**
   * A single child content element.
   */
  children: fo.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: n.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Backdrop: n.elementType,
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Wt, n.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: n.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: n.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: n.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: n.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: n.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: n.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: n.shape({
    backdrop: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: n.shape({
    backdrop: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function bw(e) {
  return pe("MuiPopover", e);
}
de("MuiPopover", ["root", "paper"]);
const gw = ["onEntering"], yw = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], vw = ["slotProps"];
function yc(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.height / 2 : t === "bottom" && (o = e.height), o;
}
function vc(e, t) {
  let o = 0;
  return typeof t == "number" ? o = t : t === "center" ? o = e.width / 2 : t === "right" && (o = e.width), o;
}
function xc(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function Ir(e) {
  return typeof e == "function" ? e() : e;
}
const xw = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"]
  }, bw, t);
}, ww = Q(Da, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Fd = Q(yo, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Vd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, a, i;
  const s = Oe({
    props: t,
    name: "MuiPopover"
  }), {
    action: l,
    anchorEl: c,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: p = "anchorEl",
    children: f,
    className: v,
    container: h,
    elevation: b = 8,
    marginThreshold: y = 16,
    open: C,
    PaperProps: S = {},
    slots: w,
    slotProps: x,
    transformOrigin: g = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: P = Pa,
    transitionDuration: R = "auto",
    TransitionProps: {
      onEntering: I
    } = {},
    disableScrollLock: j = !1
  } = s, M = ue(s.TransitionProps, gw), N = ue(s, yw), q = (r = x == null ? void 0 : x.paper) != null ? r : S, k = m.useRef(), A = Se(k, q.ref), $ = T({}, s, {
    anchorOrigin: u,
    anchorReference: p,
    elevation: b,
    marginThreshold: y,
    externalPaperSlotProps: q,
    transformOrigin: g,
    TransitionComponent: P,
    transitionDuration: R,
    TransitionProps: M
  }), D = xw($), V = m.useCallback(() => {
    if (p === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (d || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), d;
    const B = Ir(c), H = B && B.nodeType === 1 ? B : Je(k.current).body, oe = H.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const he = H.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && he.top === 0 && he.left === 0 && he.right === 0 && he.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: oe.top + yc(oe, u.vertical),
      left: oe.left + vc(oe, u.horizontal)
    };
  }, [c, u.horizontal, u.vertical, d, p]), O = m.useCallback((B) => ({
    vertical: yc(B, g.vertical),
    horizontal: vc(B, g.horizontal)
  }), [g.horizontal, g.vertical]), U = m.useCallback((B) => {
    const H = {
      width: B.offsetWidth,
      height: B.offsetHeight
    }, oe = O(H);
    if (p === "none")
      return {
        top: null,
        left: null,
        transformOrigin: xc(oe)
      };
    const he = V();
    let ie = he.top - oe.vertical, ce = he.left - oe.horizontal;
    const xe = ie + H.height, Ce = ce + H.width, ye = Ut(Ir(c)), Ze = ye.innerHeight - y, Qe = ye.innerWidth - y;
    if (y !== null && ie < y) {
      const Te = ie - y;
      ie -= Te, oe.vertical += Te;
    } else if (y !== null && xe > Ze) {
      const Te = xe - Ze;
      ie -= Te, oe.vertical += Te;
    }
    if (process.env.NODE_ENV !== "production" && H.height > Ze && H.height && Ze && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${H.height - Ze}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), y !== null && ce < y) {
      const Te = ce - y;
      ce -= Te, oe.horizontal += Te;
    } else if (Ce > Qe) {
      const Te = Ce - Qe;
      ce -= Te, oe.horizontal += Te;
    }
    return {
      top: `${Math.round(ie)}px`,
      left: `${Math.round(ce)}px`,
      transformOrigin: xc(oe)
    };
  }, [c, p, V, O, y]), [F, Y] = m.useState(C), K = m.useCallback(() => {
    const B = k.current;
    if (!B)
      return;
    const H = U(B);
    H.top !== null && (B.style.top = H.top), H.left !== null && (B.style.left = H.left), B.style.transformOrigin = H.transformOrigin, Y(!0);
  }, [U]);
  m.useEffect(() => (j && window.addEventListener("scroll", K), () => window.removeEventListener("scroll", K)), [c, j, K]);
  const J = (B, H) => {
    I && I(B, H), K();
  }, Z = () => {
    Y(!1);
  };
  m.useEffect(() => {
    C && K();
  }), m.useImperativeHandle(l, () => C ? {
    updatePosition: () => {
      K();
    }
  } : null, [C, K]), m.useEffect(() => {
    if (!C)
      return;
    const B = fa(() => {
      K();
    }), H = Ut(c);
    return H.addEventListener("resize", B), () => {
      B.clear(), H.removeEventListener("resize", B);
    };
  }, [c, C, K]);
  let L = R;
  R === "auto" && !P.muiSupportAuto && (L = void 0);
  const z = h || (c ? Je(Ir(c)).body : void 0), X = (a = w == null ? void 0 : w.root) != null ? a : ww, ee = (i = w == null ? void 0 : w.paper) != null ? i : Fd, ne = Pn({
    elementType: ee,
    externalSlotProps: T({}, q, {
      style: F ? q.style : T({}, q.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: b,
      ref: A
    },
    ownerState: $,
    className: ae(D.paper, q == null ? void 0 : q.className)
  }), G = Pn({
    elementType: X,
    externalSlotProps: (x == null ? void 0 : x.root) || {},
    externalForwardedProps: N,
    additionalProps: {
      ref: o,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: z,
      open: C
    },
    ownerState: $,
    className: ae(D.root, v)
  }), {
    slotProps: te
  } = G, _ = ue(G, vw);
  return /* @__PURE__ */ E(X, T({}, _, !no(X) && {
    slotProps: te,
    disableScrollLock: j
  }, {
    children: /* @__PURE__ */ E(P, T({
      appear: !0,
      in: C,
      onEntering: J,
      onExited: Z,
      timeout: L
    }, M, {
      children: /* @__PURE__ */ E(ee, T({}, ne, {
        children: f
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Vd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: qe,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: Jt(n.oneOfType([Wt, n.func]), (e) => {
    if (e.open && (!e.anchorReference || e.anchorReference === "anchorEl")) {
      const t = Ir(e.anchorEl);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${t}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: n.shape({
    left: n.number.isRequired,
    top: n.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: n.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: n.oneOfType([Wt, n.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: n.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: Bi,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: n.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: n.shape({
    component: pa
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: n.shape({
    horizontal: n.oneOfType([n.oneOf(["center", "left", "right"]), n.number]).isRequired,
    vertical: n.oneOfType([n.oneOf(["bottom", "center", "top"]), n.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: n.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object
});
function Cw(e) {
  return pe("MuiMenu", e);
}
de("MuiMenu", ["root", "paper", "list"]);
const Sw = ["onEntering"], Ew = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], Ow = {
  vertical: "top",
  horizontal: "right"
}, Pw = {
  vertical: "top",
  horizontal: "left"
}, Rw = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, Cw, t);
}, Tw = Q(Vd, {
  shouldForwardProp: (e) => ht(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), kw = Q(Fd, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), Dw = Q(Nd, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), Ld = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r, a;
  const i = Oe({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: l,
    className: c,
    disableAutoFocusItem: u = !1,
    MenuListProps: d = {},
    onClose: p,
    open: f,
    PaperProps: v = {},
    PopoverClasses: h,
    transitionDuration: b = "auto",
    TransitionProps: {
      onEntering: y
    } = {},
    variant: C = "selectedMenu",
    slots: S = {},
    slotProps: w = {}
  } = i, x = ue(i.TransitionProps, Sw), g = ue(i, Ew), P = It(), R = T({}, i, {
    autoFocus: s,
    disableAutoFocusItem: u,
    MenuListProps: d,
    onEntering: y,
    PaperProps: v,
    transitionDuration: b,
    TransitionProps: x,
    variant: C
  }), I = Rw(R), j = s && !u && f, M = m.useRef(null), N = (O, U) => {
    M.current && M.current.adjustStyleForScrollbar(O, {
      direction: P ? "rtl" : "ltr"
    }), y && y(O, U);
  }, q = (O) => {
    O.key === "Tab" && (O.preventDefault(), p && p(O, "tabKeyDown"));
  };
  let k = -1;
  m.Children.map(l, (O, U) => {
    /* @__PURE__ */ m.isValidElement(O) && (process.env.NODE_ENV !== "production" && zo.isFragment(O) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), O.props.disabled || (C === "selectedMenu" && O.props.selected || k === -1) && (k = U));
  });
  const A = (r = S.paper) != null ? r : kw, $ = (a = w.paper) != null ? a : v, D = Pn({
    elementType: S.root,
    externalSlotProps: w.root,
    ownerState: R,
    className: [I.root, c]
  }), V = Pn({
    elementType: A,
    externalSlotProps: $,
    ownerState: R,
    className: I.paper
  });
  return /* @__PURE__ */ E(Tw, T({
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: P ? "right" : "left"
    },
    transformOrigin: P ? Ow : Pw,
    slots: {
      paper: A,
      root: S.root
    },
    slotProps: {
      root: D,
      paper: V
    },
    open: f,
    ref: o,
    transitionDuration: b,
    TransitionProps: T({
      onEntering: N
    }, x),
    ownerState: R
  }, g, {
    classes: h,
    children: /* @__PURE__ */ E(Dw, T({
      onKeyDown: q,
      actions: M,
      autoFocus: s && (k === -1 || u),
      autoFocusItem: j,
      variant: C
    }, d, {
      className: ae(I.list, d.className),
      children: l
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Ld.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: n.oneOfType([Wt, n.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: n.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: n.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: n.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: n.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: n.shape({
    paper: n.oneOfType([n.func, n.object]),
    root: n.oneOfType([n.func, n.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.shape({
    paper: n.elementType,
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: n.oneOfType([n.oneOf(["auto"]), n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: n.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: n.oneOf(["menu", "selectedMenu"])
});
function Mw(e) {
  return pe("MuiNativeSelect", e);
}
const ms = de("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), $w = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], Iw = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: a,
    open: i,
    error: s
  } = e, l = {
    select: ["select", o, r && "disabled", a && "multiple", s && "error"],
    icon: ["icon", `icon${re(o)}`, i && "iconOpen", r && "disabled"]
  };
  return me(l, Mw, t);
}, jd = ({
  ownerState: e,
  theme: t
}) => T({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": T({}, t.vars ? {
    backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${ms.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (t.vars || t).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, e.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, e.variant === "outlined" && {
  borderRadius: (t.vars || t).shape.borderRadius,
  "&:focus": {
    borderRadius: (t.vars || t).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), Nw = Q("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: ht,
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.select, t[o.variant], o.error && t.error, {
      [`&.${ms.multiple}`]: t.multiple
    }];
  }
})(jd), Bd = ({
  ownerState: e,
  theme: t
}) => T({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (t.vars || t).palette.action.active,
  [`&.${ms.disabled}`]: {
    color: (t.vars || t).palette.action.disabled
  }
}, e.open && {
  transform: "rotate(180deg)"
}, e.variant === "filled" && {
  right: 7
}, e.variant === "outlined" && {
  right: 7
}), _w = Q("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${re(o.variant)}`], o.open && t.iconOpen];
  }
})(Bd), zd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    className: r,
    disabled: a,
    error: i,
    IconComponent: s,
    inputRef: l,
    variant: c = "standard"
  } = t, u = ue(t, $w), d = T({}, t, {
    disabled: a,
    variant: c,
    error: i
  }), p = Iw(d);
  return /* @__PURE__ */ le(m.Fragment, {
    children: [/* @__PURE__ */ E(Nw, T({
      ownerState: d,
      className: ae(p.select, r),
      disabled: a,
      ref: l || o
    }, u)), t.multiple ? null : /* @__PURE__ */ E(_w, {
      as: s,
      ownerState: d,
      className: p.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (zd.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: qe,
  /**
   * @ignore
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
function Aw(e) {
  return pe("MuiSelect", e);
}
const Oo = de("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var wc;
const Fw = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], Vw = Q("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [
      // Win specificity over the input base
      {
        [`&.${Oo.select}`]: t.select
      },
      {
        [`&.${Oo.select}`]: t[o.variant]
      },
      {
        [`&.${Oo.error}`]: t.error
      },
      {
        [`&.${Oo.multiple}`]: t.multiple
      }
    ];
  }
})(jd, {
  // Win specificity over the input base
  [`&.${Oo.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), Lw = Q("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.icon, o.variant && t[`icon${re(o.variant)}`], o.open && t.iconOpen];
  }
})(Bd), jw = Q("input", {
  shouldForwardProp: (e) => td(e) && e !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (e, t) => t.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function Cc(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function Bw(e) {
  return e == null || typeof e == "string" && !e.trim();
}
const zw = (e) => {
  const {
    classes: t,
    variant: o,
    disabled: r,
    multiple: a,
    open: i,
    error: s
  } = e, l = {
    select: ["select", o, r && "disabled", a && "multiple", s && "error"],
    icon: ["icon", `icon${re(o)}`, i && "iconOpen", r && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return me(l, Aw, t);
}, Wd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var r;
  const {
    "aria-describedby": a,
    "aria-label": i,
    autoFocus: s,
    autoWidth: l,
    children: c,
    className: u,
    defaultOpen: d,
    defaultValue: p,
    disabled: f,
    displayEmpty: v,
    error: h = !1,
    IconComponent: b,
    inputRef: y,
    labelId: C,
    MenuProps: S = {},
    multiple: w,
    name: x,
    onBlur: g,
    onChange: P,
    onClose: R,
    onFocus: I,
    onOpen: j,
    open: M,
    readOnly: N,
    renderValue: q,
    SelectDisplayProps: k = {},
    tabIndex: A,
    value: $,
    variant: D = "standard"
  } = t, V = ue(t, Fw), [O, U] = $t({
    controlled: $,
    default: p,
    name: "Select"
  }), [F, Y] = $t({
    controlled: M,
    default: d,
    name: "Select"
  }), K = m.useRef(null), J = m.useRef(null), [Z, L] = m.useState(null), {
    current: z
  } = m.useRef(M != null), [X, ee] = m.useState(), ne = Se(o, y), G = m.useCallback((fe) => {
    J.current = fe, fe && L(fe);
  }, []), te = Z == null ? void 0 : Z.parentNode;
  m.useImperativeHandle(ne, () => ({
    focus: () => {
      J.current.focus();
    },
    node: K.current,
    value: O
  }), [O]), m.useEffect(() => {
    d && F && Z && !z && (ee(l ? null : te.clientWidth), J.current.focus());
  }, [Z, l]), m.useEffect(() => {
    s && J.current.focus();
  }, [s]), m.useEffect(() => {
    if (!C)
      return;
    const fe = Je(J.current).getElementById(C);
    if (fe) {
      const ve = () => {
        getSelection().isCollapsed && J.current.focus();
      };
      return fe.addEventListener("click", ve), () => {
        fe.removeEventListener("click", ve);
      };
    }
  }, [C]);
  const _ = (fe, ve) => {
    fe ? j && j(ve) : R && R(ve), z || (ee(l ? null : te.clientWidth), Y(fe));
  }, B = (fe) => {
    fe.button === 0 && (fe.preventDefault(), J.current.focus(), _(!0, fe));
  }, H = (fe) => {
    _(!1, fe);
  }, oe = m.Children.toArray(c), he = (fe) => {
    const ve = oe.find((He) => He.props.value === fe.target.value);
    ve !== void 0 && (U(ve.props.value), P && P(fe, ve));
  }, ie = (fe) => (ve) => {
    let He;
    if (ve.currentTarget.hasAttribute("tabindex")) {
      if (w) {
        He = Array.isArray(O) ? O.slice() : [];
        const rn = O.indexOf(fe.props.value);
        rn === -1 ? He.push(fe.props.value) : He.splice(rn, 1);
      } else
        He = fe.props.value;
      if (fe.props.onClick && fe.props.onClick(ve), O !== He && (U(He), P)) {
        const rn = ve.nativeEvent || ve, Fe = new rn.constructor(rn.type, rn);
        Object.defineProperty(Fe, "target", {
          writable: !0,
          value: {
            value: He,
            name: x
          }
        }), P(Fe, fe);
      }
      w || _(!1, ve);
    }
  }, ce = (fe) => {
    N || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(fe.key) !== -1 && (fe.preventDefault(), _(!0, fe));
  }, xe = Z !== null && F, Ce = (fe) => {
    !xe && g && (Object.defineProperty(fe, "target", {
      writable: !0,
      value: {
        value: O,
        name: x
      }
    }), g(fe));
  };
  delete V["aria-invalid"];
  let ye, Ze;
  const Qe = [];
  let Te = !1, tt = !1;
  (jr({
    value: O
  }) || v) && (q ? ye = q(O) : Te = !0);
  const it = oe.map((fe) => {
    if (!/* @__PURE__ */ m.isValidElement(fe))
      return null;
    process.env.NODE_ENV !== "production" && zo.isFragment(fe) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let ve;
    if (w) {
      if (!Array.isArray(O))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : Kt(2));
      ve = O.some((He) => Cc(He, fe.props.value)), ve && Te && Qe.push(fe.props.children);
    } else
      ve = Cc(O, fe.props.value), ve && Te && (Ze = fe.props.children);
    return ve && (tt = !0), /* @__PURE__ */ m.cloneElement(fe, {
      "aria-selected": ve ? "true" : "false",
      onClick: ie(fe),
      onKeyUp: (He) => {
        He.key === " " && He.preventDefault(), fe.props.onKeyUp && fe.props.onKeyUp(He);
      },
      role: "option",
      selected: ve,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": fe.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && m.useEffect(() => {
    if (!tt && !w && O !== "") {
      const fe = oe.map((ve) => ve.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${O}\` for the select ${x ? `(name="${x}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${fe.filter((ve) => ve != null).map((ve) => `\`${ve}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [tt, oe, w, x, O]), Te && (w ? Qe.length === 0 ? ye = null : ye = Qe.reduce((fe, ve, He) => (fe.push(ve), He < Qe.length - 1 && fe.push(", "), fe), []) : ye = Ze);
  let st = X;
  !l && z && Z && (st = te.clientWidth);
  let we;
  typeof A < "u" ? we = A : we = f ? null : 0;
  const be = k.id || (x ? `mui-component-select-${x}` : void 0), gt = T({}, t, {
    variant: D,
    value: O,
    open: xe,
    error: h
  }), bn = zw(gt), _t = T({}, S.PaperProps, (r = S.slotProps) == null ? void 0 : r.paper), $n = en();
  return /* @__PURE__ */ le(m.Fragment, {
    children: [/* @__PURE__ */ E(Vw, T({
      ref: G,
      tabIndex: we,
      role: "combobox",
      "aria-controls": $n,
      "aria-disabled": f ? "true" : void 0,
      "aria-expanded": xe ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": i,
      "aria-labelledby": [C, be].filter(Boolean).join(" ") || void 0,
      "aria-describedby": a,
      onKeyDown: ce,
      onMouseDown: f || N ? null : B,
      onBlur: Ce,
      onFocus: I
    }, k, {
      ownerState: gt,
      className: ae(k.className, bn.select, u),
      id: be,
      children: Bw(ye) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        wc || (wc = /* @__PURE__ */ E("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : ye
    })), /* @__PURE__ */ E(jw, T({
      "aria-invalid": h,
      value: Array.isArray(O) ? O.join(",") : O,
      name: x,
      ref: K,
      "aria-hidden": !0,
      onChange: he,
      tabIndex: -1,
      disabled: f,
      className: bn.nativeInput,
      autoFocus: s,
      ownerState: gt
    }, V)), /* @__PURE__ */ E(Lw, {
      as: b,
      className: bn.icon,
      ownerState: gt
    }), /* @__PURE__ */ E(Ld, T({
      id: `menu-${x || ""}`,
      anchorEl: te,
      open: xe,
      onClose: H,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, S, {
      MenuListProps: T({
        "aria-labelledby": C,
        role: "listbox",
        "aria-multiselectable": w ? "true" : void 0,
        disableListWrap: !0,
        id: $n
      }, S.MenuListProps),
      slotProps: T({}, S.slotProps, {
        paper: T({}, _t, {
          style: T({
            minWidth: st
          }, _t != null ? _t.style : null)
        })
      }),
      children: it
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Wd.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": n.string,
  /**
   * @ignore
   */
  "aria-label": n.string,
  /**
   * @ignore
   */
  autoFocus: n.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * The CSS class name of the select element.
   */
  className: n.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: n.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: n.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: n.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: qe,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: n.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool,
  /**
   * @ignore
   */
  readOnly: n.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * @ignore
   */
  type: n.any,
  /**
   * The input value.
   */
  value: n.any,
  /**
   * The variant to use.
   */
  variant: n.oneOf(["standard", "outlined", "filled"])
});
const Ww = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], Uw = ["root"], qw = (e) => {
  const {
    classes: t
  } = e;
  return t;
}, hs = {
  name: "MuiSelect",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => ht(e) && e !== "variant",
  slot: "Root"
}, Hw = Q(Ra, hs)(""), Yw = Q(ka, hs)(""), Kw = Q(Ta, hs)(""), bs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    name: "MuiSelect",
    props: t
  }), {
    autoWidth: a = !1,
    children: i,
    classes: s = {},
    className: l,
    defaultOpen: c = !1,
    displayEmpty: u = !1,
    IconComponent: d = G0,
    id: p,
    input: f,
    inputProps: v,
    label: h,
    labelId: b,
    MenuProps: y,
    multiple: C = !1,
    native: S = !1,
    onClose: w,
    onOpen: x,
    open: g,
    renderValue: P,
    SelectDisplayProps: R,
    variant: I = "outlined"
  } = r, j = ue(r, Ww), M = S ? zd : Wd, N = kt(), q = go({
    props: r,
    muiFormControl: N,
    states: ["variant", "error"]
  }), k = q.variant || I, A = T({}, r, {
    variant: k,
    classes: s
  }), $ = qw(A), D = ue($, Uw), V = f || {
    standard: /* @__PURE__ */ E(Hw, {
      ownerState: A
    }),
    outlined: /* @__PURE__ */ E(Yw, {
      label: h,
      ownerState: A
    }),
    filled: /* @__PURE__ */ E(Kw, {
      ownerState: A
    })
  }[k], O = Se(o, V.ref);
  return /* @__PURE__ */ E(m.Fragment, {
    children: /* @__PURE__ */ m.cloneElement(V, T({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: M,
      inputProps: T({
        children: i,
        error: q.error,
        IconComponent: d,
        variant: k,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: C
      }, S ? {
        id: p
      } : {
        autoWidth: a,
        defaultOpen: c,
        displayEmpty: u,
        labelId: b,
        MenuProps: y,
        onClose: w,
        onOpen: x,
        open: g,
        renderValue: P,
        SelectDisplayProps: T({
          id: p
        }, R)
      }, v, {
        classes: v ? ft(D, v.classes) : D
      }, f ? f.props.inputProps : {})
    }, (C && S || u) && k === "outlined" ? {
      notched: !0
    } : {}, {
      ref: O,
      className: ae(V.props.className, l, $.root)
    }, !f && {
      variant: k
    }, j))
  });
});
process.env.NODE_ENV !== "production" && (bs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: n.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: n.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: n.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: n.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: n.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: n.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: n.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: n.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: n.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: n.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: n.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: n.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: n.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: n.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: n.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: n.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: n.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: n.oneOfType([n.oneOf([""]), n.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
bs.muiName = "Select";
function Gw(e) {
  return pe("MuiTextField", e);
}
de("MuiTextField", ["root"]);
const Xw = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], Zw = {
  standard: Ra,
  filled: Ta,
  outlined: ka
}, Qw = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, Gw, t);
}, Jw = Q(us, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), Ud = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiTextField"
  }), {
    autoComplete: a,
    autoFocus: i = !1,
    children: s,
    className: l,
    color: c = "primary",
    defaultValue: u,
    disabled: d = !1,
    error: p = !1,
    FormHelperTextProps: f,
    fullWidth: v = !1,
    helperText: h,
    id: b,
    InputLabelProps: y,
    inputProps: C,
    InputProps: S,
    inputRef: w,
    label: x,
    maxRows: g,
    minRows: P,
    multiline: R = !1,
    name: I,
    onBlur: j,
    onChange: M,
    onFocus: N,
    placeholder: q,
    required: k = !1,
    rows: A,
    select: $ = !1,
    SelectProps: D,
    type: V,
    value: O,
    variant: U = "outlined"
  } = r, F = ue(r, Xw), Y = T({}, r, {
    autoFocus: i,
    color: c,
    disabled: d,
    error: p,
    fullWidth: v,
    multiline: R,
    required: k,
    select: $,
    variant: U
  }), K = Qw(Y);
  process.env.NODE_ENV !== "production" && $ && !s && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const J = {};
  U === "outlined" && (y && typeof y.shrink < "u" && (J.notched = y.shrink), J.label = x), $ && ((!D || !D.native) && (J.id = void 0), J["aria-describedby"] = void 0);
  const Z = en(b), L = h && Z ? `${Z}-helper-text` : void 0, z = x && Z ? `${Z}-label` : void 0, X = Zw[U], ee = /* @__PURE__ */ E(X, T({
    "aria-describedby": L,
    autoComplete: a,
    autoFocus: i,
    defaultValue: u,
    fullWidth: v,
    multiline: R,
    name: I,
    rows: A,
    maxRows: g,
    minRows: P,
    type: V,
    value: O,
    id: Z,
    inputRef: w,
    onBlur: j,
    onChange: M,
    onFocus: N,
    placeholder: q,
    inputProps: C
  }, J, S));
  return /* @__PURE__ */ le(Jw, T({
    className: ae(K.root, l),
    disabled: d,
    error: p,
    fullWidth: v,
    ref: o,
    required: k,
    color: c,
    variant: U,
    ownerState: Y
  }, F, {
    children: [x != null && x !== "" && /* @__PURE__ */ E(ds, T({
      htmlFor: Z,
      id: z
    }, y, {
      children: x
    })), $ ? /* @__PURE__ */ E(bs, T({
      "aria-describedby": L,
      id: Z,
      labelId: z,
      value: O,
      input: ee
    }, D, {
      children: s
    })) : ee, h && /* @__PURE__ */ E(ps, T({
      id: L
    }, f, {
      children: h
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Ud.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: n.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  /**
   * @ignore
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: n.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: n.oneOfType([n.number, n.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: n.oneOfType([n.number, n.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: n.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: n.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: n.oneOfType([n.number, n.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: n.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: n.object,
  /**
   * The size of the component.
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: n.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: n.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
function eC(e) {
  return pe("PrivateSwitchBase", e);
}
de("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const tC = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], nC = (e) => {
  const {
    classes: t,
    checked: o,
    disabled: r,
    edge: a
  } = e, i = {
    root: ["root", o && "checked", r && "disabled", a && `edge${re(a)}`],
    input: ["input"]
  };
  return me(i, eC, t);
}, oC = Q(cn)(({
  ownerState: e
}) => T({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), rC = Q("input", {
  shouldForwardProp: ht
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), qd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const {
    autoFocus: r,
    checked: a,
    checkedIcon: i,
    className: s,
    defaultChecked: l,
    disabled: c,
    disableFocusRipple: u = !1,
    edge: d = !1,
    icon: p,
    id: f,
    inputProps: v,
    inputRef: h,
    name: b,
    onBlur: y,
    onChange: C,
    onFocus: S,
    readOnly: w,
    required: x = !1,
    tabIndex: g,
    type: P,
    value: R
  } = t, I = ue(t, tC), [j, M] = $t({
    controlled: a,
    default: !!l,
    name: "SwitchBase",
    state: "checked"
  }), N = kt(), q = (U) => {
    S && S(U), N && N.onFocus && N.onFocus(U);
  }, k = (U) => {
    y && y(U), N && N.onBlur && N.onBlur(U);
  }, A = (U) => {
    if (U.nativeEvent.defaultPrevented)
      return;
    const F = U.target.checked;
    M(F), C && C(U, F);
  };
  let $ = c;
  N && typeof $ > "u" && ($ = N.disabled);
  const D = P === "checkbox" || P === "radio", V = T({}, t, {
    checked: j,
    disabled: $,
    disableFocusRipple: u,
    edge: d
  }), O = nC(V);
  return /* @__PURE__ */ le(oC, T({
    component: "span",
    className: ae(O.root, s),
    centerRipple: !0,
    focusRipple: !u,
    disabled: $,
    tabIndex: null,
    role: void 0,
    onFocus: q,
    onBlur: k,
    ownerState: V,
    ref: o
  }, I, {
    children: [/* @__PURE__ */ E(rC, T({
      autoFocus: r,
      checked: a,
      defaultChecked: l,
      className: O.input,
      disabled: $,
      id: D ? f : void 0,
      name: b,
      onChange: A,
      readOnly: w,
      ref: h,
      required: x,
      ownerState: V,
      tabIndex: g,
      type: P
    }, P === "checkbox" && R === void 0 ? {} : {
      value: R
    }, v)), j ? i : p]
  }));
});
process.env.NODE_ENV !== "production" && (qd.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: n.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: n.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * @ignore
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: n.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /*
   * @ignore
   */
  name: n.string,
  /**
   * @ignore
   */
  onBlur: n.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * @ignore
   */
  onFocus: n.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: n.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.object,
  /**
   * @ignore
   */
  tabIndex: n.oneOfType([n.number, n.string]),
  /**
   * The input component prop `type`.
   */
  type: n.string.isRequired,
  /**
   * The value of the component.
   */
  value: n.any
});
function aC(e) {
  return pe("MuiButton", e);
}
const vr = de("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Hd = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (Hd.displayName = "ButtonGroupContext");
const Yd = /* @__PURE__ */ m.createContext(void 0);
process.env.NODE_ENV !== "production" && (Yd.displayName = "ButtonGroupButtonContext");
const iC = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], sC = (e) => {
  const {
    color: t,
    disableElevation: o,
    fullWidth: r,
    size: a,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, `${i}${re(t)}`, `size${re(a)}`, `${i}Size${re(a)}`, `color${re(t)}`, o && "disableElevation", r && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${re(a)}`],
    endIcon: ["icon", "endIcon", `iconSize${re(a)}`]
  }, c = me(l, aC, s);
  return T({}, s, c);
}, Kd = (e) => T({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), lC = Q(cn, {
  shouldForwardProp: (e) => ht(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, t[o.variant], t[`${o.variant}${re(o.color)}`], t[`size${re(o.size)}`], t[`${o.variant}Size${re(o.size)}`], o.color === "inherit" && t.colorInherit, o.disableElevation && t.disableElevation, o.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var o, r;
  const a = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return T({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": T({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": T({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${vr.focusVisible}`]: T({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${vr.disabled}`]: T({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${Be(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (o = (r = e.palette).getContrastText) == null ? void 0 : o.call(r, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : a,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${vr.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${vr.disabled}`]: {
    boxShadow: "none"
  }
}), cC = Q("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.startIcon, t[`iconSize${re(o.size)}`]];
  }
})(({
  ownerState: e
}) => T({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Kd(e))), uC = Q("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.endIcon, t[`iconSize${re(o.size)}`]];
  }
})(({
  ownerState: e
}) => T({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Kd(e))), zn = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = m.useContext(Hd), a = m.useContext(Yd), i = Wo(r, t), s = Oe({
    props: i,
    name: "MuiButton"
  }), {
    children: l,
    color: c = "primary",
    component: u = "button",
    className: d,
    disabled: p = !1,
    disableElevation: f = !1,
    disableFocusRipple: v = !1,
    endIcon: h,
    focusVisibleClassName: b,
    fullWidth: y = !1,
    size: C = "medium",
    startIcon: S,
    type: w,
    variant: x = "text"
  } = s, g = ue(s, iC), P = T({}, s, {
    color: c,
    component: u,
    disabled: p,
    disableElevation: f,
    disableFocusRipple: v,
    fullWidth: y,
    size: C,
    type: w,
    variant: x
  }), R = sC(P), I = S && /* @__PURE__ */ E(cC, {
    className: R.startIcon,
    ownerState: P,
    children: S
  }), j = h && /* @__PURE__ */ E(uC, {
    className: R.endIcon,
    ownerState: P,
    children: h
  }), M = a || "";
  return /* @__PURE__ */ le(lC, T({
    ownerState: P,
    className: ae(r.className, R.root, d, M),
    component: u,
    disabled: p,
    focusRipple: !v,
    focusVisibleClassName: ae(R.focusVisible, b),
    ref: o,
    type: w
  }, g, {
    classes: R,
    children: [I, l, j]
  }));
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), n.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: n.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * Element placed after the children.
   */
  endIcon: n.node,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: n.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["small", "medium", "large"]), n.string]),
  /**
   * Element placed before the children.
   */
  startIcon: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @ignore
   */
  type: n.oneOfType([n.oneOf(["button", "reset", "submit"]), n.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: n.oneOfType([n.oneOf(["contained", "outlined", "text"]), n.string])
});
function dC(e) {
  return pe("MuiInputAdornment", e);
}
const Sc = de("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var Ec;
const pC = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"], fC = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, t[`position${re(o.position)}`], o.disablePointerEvents === !0 && t.disablePointerEvents, t[o.variant]];
}, mC = (e) => {
  const {
    classes: t,
    disablePointerEvents: o,
    hiddenLabel: r,
    position: a,
    size: i,
    variant: s
  } = e, l = {
    root: ["root", o && "disablePointerEvents", a && `position${re(a)}`, s, r && "hiddenLabel", i && `size${re(i)}`]
  };
  return me(l, dC, t);
}, hC = Q("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver: fC
})(({
  theme: e,
  ownerState: t
}) => T({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (e.vars || e).palette.action.active
}, t.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${Sc.positionStart}&:not(.${Sc.hiddenLabel})`]: {
    marginTop: 16
  }
}, t.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, t.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, t.disablePointerEvents === !0 && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
})), gs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiInputAdornment"
  }), {
    children: a,
    className: i,
    component: s = "div",
    disablePointerEvents: l = !1,
    disableTypography: c = !1,
    position: u,
    variant: d
  } = r, p = ue(r, pC), f = kt() || {};
  let v = d;
  d && f.variant && process.env.NODE_ENV !== "production" && d === f.variant && console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one."), f && !v && (v = f.variant);
  const h = T({}, r, {
    hiddenLabel: f.hiddenLabel,
    size: f.size,
    disablePointerEvents: l,
    position: u,
    variant: v
  }), b = mC(h);
  return /* @__PURE__ */ E(ir.Provider, {
    value: null,
    children: /* @__PURE__ */ E(hC, T({
      as: s,
      ownerState: h,
      className: ae(b.root, i),
      ref: o
    }, p, {
      children: typeof a == "string" && !c ? /* @__PURE__ */ E(mn, {
        color: "text.secondary",
        children: a
      }) : /* @__PURE__ */ le(m.Fragment, {
        children: [u === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          Ec || (Ec = /* @__PURE__ */ E("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, a]
      })
    }))
  });
});
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: n.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: n.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: n.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const AR = (e) => ({
  ".react-multiple-carousel__arrow": {
    background: `rgba(130, 130, 130,${e.palette.mode === "dark" ? 0.5 : 0.1})`,
    minWidth: "20px",
    minHeight: "20px"
  },
  ".react-multiple-carousel__arrow--right:before": { color: Yt[600] },
  ".react-multiple-carousel__arrow--left:before": { color: Yt[600] },
  ".react-multi-carousel-dot button": { background: Yt[200], border: "none" },
  ".react-multi-carousel-dot--active button": { background: Yt[600], border: "none" }
}), FR = (e) => e.palette.mode === "dark" ? "#353535" : "#EEEFF0", VR = (e) => e.palette.mode === "dark" ? "rgba(179 ,168, 168 , 0.8)" : "rgba(0, 0, 0, 0.30)", bC = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function gC(e, t, o) {
  const r = t.getBoundingClientRect(), a = o && o.getBoundingClientRect(), i = Ut(t);
  let s;
  if (t.fakeTransform)
    s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform");
  }
  let l = 0, c = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    l = parseInt(u[4], 10), c = parseInt(u[5], 10);
  }
  return e === "left" ? a ? `translateX(${a.right + l - r.left}px)` : `translateX(${i.innerWidth + l - r.left}px)` : e === "right" ? a ? `translateX(-${r.right - a.left - l}px)` : `translateX(-${r.left + r.width - l}px)` : e === "up" ? a ? `translateY(${a.bottom + c - r.top}px)` : `translateY(${i.innerHeight + c - r.top}px)` : a ? `translateY(-${r.top - a.top + r.height - c}px)` : `translateY(-${r.top + r.height - c}px)`;
}
function Gd(e) {
  return typeof e == "function" ? e() : e;
}
function xr(e, t, o) {
  const r = Gd(o), a = gC(e, t, r);
  a && (t.style.webkitTransform = a, t.style.transform = a);
}
const Xd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = tn(), a = {
    enter: r.transitions.easing.easeOut,
    exit: r.transitions.easing.sharp
  }, i = {
    enter: r.transitions.duration.enteringScreen,
    exit: r.transitions.duration.leavingScreen
  }, {
    addEndListener: s,
    appear: l = !0,
    children: c,
    container: u,
    direction: d = "down",
    easing: p = a,
    in: f,
    onEnter: v,
    onEntered: h,
    onEntering: b,
    onExit: y,
    onExited: C,
    onExiting: S,
    style: w,
    timeout: x = i,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: g = bt
  } = t, P = ue(t, bC), R = m.useRef(null), I = Se(c.ref, R, o), j = (O) => (U) => {
    O && (U === void 0 ? O(R.current) : O(R.current, U));
  }, M = j((O, U) => {
    xr(d, O, u), cs(O), v && v(O, U);
  }), N = j((O, U) => {
    const F = uo({
      timeout: x,
      style: w,
      easing: p
    }, {
      mode: "enter"
    });
    O.style.webkitTransition = r.transitions.create("-webkit-transform", T({}, F)), O.style.transition = r.transitions.create("transform", T({}, F)), O.style.webkitTransform = "none", O.style.transform = "none", b && b(O, U);
  }), q = j(h), k = j(S), A = j((O) => {
    const U = uo({
      timeout: x,
      style: w,
      easing: p
    }, {
      mode: "exit"
    });
    O.style.webkitTransition = r.transitions.create("-webkit-transform", U), O.style.transition = r.transitions.create("transform", U), xr(d, O, u), y && y(O);
  }), $ = j((O) => {
    O.style.webkitTransition = "", O.style.transition = "", C && C(O);
  }), D = (O) => {
    s && s(R.current, O);
  }, V = m.useCallback(() => {
    R.current && xr(d, R.current, u);
  }, [d, u]);
  return m.useEffect(() => {
    if (f || d === "down" || d === "right")
      return;
    const O = fa(() => {
      R.current && xr(d, R.current, u);
    }), U = Ut(R.current);
    return U.addEventListener("resize", O), () => {
      O.clear(), U.removeEventListener("resize", O);
    };
  }, [d, f, u]), m.useEffect(() => {
    f || V();
  }, [f, V]), /* @__PURE__ */ E(g, T({
    nodeRef: R,
    onEnter: M,
    onEntered: q,
    onEntering: N,
    onExit: A,
    onExited: $,
    onExiting: k,
    addEndListener: D,
    appear: l,
    in: f,
    timeout: x
  }, P, {
    children: (O, U) => /* @__PURE__ */ m.cloneElement(c, T({
      ref: I,
      style: T({
        visibility: O === "exited" && !f ? "hidden" : void 0
      }, w, c.props.style)
    }, U))
  }));
});
process.env.NODE_ENV !== "production" && (Xd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: n.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: n.bool,
  /**
   * A single child content element.
   */
  children: fo.isRequired,
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the container the Slide is transitioning from.
   */
  container: Jt(n.oneOfType([Wt, n.func]), (e) => {
    if (e.open) {
      const t = Gd(e.container);
      if (t && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `container` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `container` prop provided to the component is invalid.", "It should be an HTML element instance."].join(`
`));
    }
    return null;
  }),
  /**
   * Direction the child node will enter from.
   * @default 'down'
   */
  direction: n.oneOf(["down", "left", "right", "up"]),
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   * @default {
   *   enter: theme.transitions.easing.easeOut,
   *   exit: theme.transitions.easing.sharp,
   * }
   */
  easing: n.oneOfType([n.shape({
    enter: n.string,
    exit: n.string
  }), n.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: n.bool,
  /**
   * @ignore
   */
  onEnter: n.func,
  /**
   * @ignore
   */
  onEntered: n.func,
  /**
   * @ignore
   */
  onEntering: n.func,
  /**
   * @ignore
   */
  onExit: n.func,
  /**
   * @ignore
   */
  onExited: n.func,
  /**
   * @ignore
   */
  onExiting: n.func,
  /**
   * @ignore
   */
  style: n.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })])
});
function yC(e) {
  return pe("MuiDrawer", e);
}
de("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const vC = ["BackdropProps"], xC = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"], Zd = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, (o.variant === "permanent" || o.variant === "persistent") && t.docked, t.modal];
}, wC = (e) => {
  const {
    classes: t,
    anchor: o,
    variant: r
  } = e, a = {
    root: ["root"],
    docked: [(r === "permanent" || r === "persistent") && "docked"],
    modal: ["modal"],
    paper: ["paper", `paperAnchor${re(o)}`, r !== "temporary" && `paperAnchorDocked${re(o)}`]
  };
  return me(a, yC, t);
}, CC = Q(Da, {
  name: "MuiDrawer",
  slot: "Root",
  overridesResolver: Zd
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.drawer
})), Oc = Q("div", {
  shouldForwardProp: ht,
  name: "MuiDrawer",
  slot: "Docked",
  skipVariantsResolver: !1,
  overridesResolver: Zd
})({
  flex: "0 0 auto"
}), SC = Q(yo, {
  name: "MuiDrawer",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`paperAnchor${re(o.anchor)}`], o.variant !== "temporary" && t[`paperAnchorDocked${re(o.anchor)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flex: "1 0 auto",
  zIndex: (e.vars || e).zIndex.drawer,
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  // temporary style
  position: "fixed",
  top: 0,
  // We disable the focus ring for mouse, touch and keyboard users.
  // At some point, it would be better to keep it for keyboard users.
  // :focus-ring CSS pseudo-class will help.
  outline: 0
}, t.anchor === "left" && {
  left: 0
}, t.anchor === "top" && {
  top: 0,
  left: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "right" && {
  right: 0
}, t.anchor === "bottom" && {
  top: "auto",
  left: 0,
  bottom: 0,
  right: 0,
  height: "auto",
  maxHeight: "100%"
}, t.anchor === "left" && t.variant !== "temporary" && {
  borderRight: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "top" && t.variant !== "temporary" && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "right" && t.variant !== "temporary" && {
  borderLeft: `1px solid ${(e.vars || e).palette.divider}`
}, t.anchor === "bottom" && t.variant !== "temporary" && {
  borderTop: `1px solid ${(e.vars || e).palette.divider}`
})), Qd = {
  left: "right",
  right: "left",
  top: "down",
  bottom: "up"
};
function EC(e) {
  return ["left", "right"].indexOf(e) !== -1;
}
function OC({
  direction: e
}, t) {
  return e === "rtl" && EC(t) ? Qd[t] : t;
}
const Jd = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiDrawer"
  }), a = tn(), i = It(), s = {
    enter: a.transitions.duration.enteringScreen,
    exit: a.transitions.duration.leavingScreen
  }, {
    anchor: l = "left",
    BackdropProps: c,
    children: u,
    className: d,
    elevation: p = 16,
    hideBackdrop: f = !1,
    ModalProps: {
      BackdropProps: v
    } = {},
    onClose: h,
    open: b = !1,
    PaperProps: y = {},
    SlideProps: C,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: S = Xd,
    transitionDuration: w = s,
    variant: x = "temporary"
  } = r, g = ue(r.ModalProps, vC), P = ue(r, xC), R = m.useRef(!1);
  m.useEffect(() => {
    R.current = !0;
  }, []);
  const I = OC({
    direction: i ? "rtl" : "ltr"
  }, l), M = T({}, r, {
    anchor: l,
    elevation: p,
    open: b,
    variant: x
  }, P), N = wC(M), q = /* @__PURE__ */ E(SC, T({
    elevation: x === "temporary" ? p : 0,
    square: !0
  }, y, {
    className: ae(N.paper, y.className),
    ownerState: M,
    children: u
  }));
  if (x === "permanent")
    return /* @__PURE__ */ E(Oc, T({
      className: ae(N.root, N.docked, d),
      ownerState: M,
      ref: o
    }, P, {
      children: q
    }));
  const k = /* @__PURE__ */ E(S, T({
    in: b,
    direction: Qd[I],
    timeout: w,
    appear: R.current
  }, C, {
    children: q
  }));
  return x === "persistent" ? /* @__PURE__ */ E(Oc, T({
    className: ae(N.root, N.docked, d),
    ownerState: M,
    ref: o
  }, P, {
    children: k
  })) : /* @__PURE__ */ E(CC, T({
    BackdropProps: T({}, c, v, {
      transitionDuration: w
    }),
    className: ae(N.root, N.modal, d),
    open: b,
    ownerState: M,
    onClose: h,
    hideBackdrop: f,
    ref: o
  }, P, g, {
    children: k
  }));
});
process.env.NODE_ENV !== "production" && (Jd.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Side from which the drawer will appear.
   * @default 'left'
   */
  anchor: n.oneOf(["bottom", "left", "right", "top"]),
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The elevation of the drawer.
   * @default 16
   */
  elevation: Bi,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: n.bool,
  /**
   * Props applied to the [`Modal`](/material-ui/api/modal/) element.
   * @default {}
   */
  ModalProps: n.object,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   * @default false
   */
  open: n.bool,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Props applied to the [`Slide`](/material-ui/api/slide/) element.
   */
  SlideProps: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * The variant to use.
   * @default 'temporary'
   */
  variant: n.oneOf(["permanent", "persistent", "temporary"])
});
var ys = {}, ni = {};
const PC = /* @__PURE__ */ Qt(ux);
var Pc;
function hn() {
  return Pc || (Pc = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = PC;
  }(ni)), ni;
}
var RC = Ht;
Object.defineProperty(ys, "__esModule", {
  value: !0
});
var vs = ys.default = void 0, TC = RC(hn()), kC = un;
vs = ys.default = (0, TC.default)(/* @__PURE__ */ (0, kC.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function LR({
  open: e,
  anchor: t = "right",
  closeDrawer: o,
  onClose: r,
  children: a,
  header: i,
  width: s = 300
}) {
  return /* @__PURE__ */ E(Jd, { anchor: t, open: e, sx: {
    boxShadow: 24
  }, onClose: r, children: /* @__PURE__ */ le(Yn, { sx: {
    p: 2,
    width: s,
    overflow: "auto",
    outline: "none",
    wordWrap: "break-word",
    overflowWrap: "break-word"
  }, children: [
    /* @__PURE__ */ le(Yn, { display: "flex", mb: 2, children: [
      /* @__PURE__ */ E(Yn, { flexGrow: 1, fontWeight: "bold", fontSize: "24px", children: i }),
      o && /* @__PURE__ */ E(
        "div",
        {
          style: {
            position: "relative",
            cursor: "pointer"
          },
          children: /* @__PURE__ */ E(vs, { onClick: o })
        }
      )
    ] }),
    a
  ] }) });
}
const DC = ({
  cancelAction: e,
  cancelActionLabel: t,
  action: o,
  callToAction: r,
  disabled: a = !1,
  callToActionHidden: i = !1,
  callToActionIsDelete: s = !1,
  sx: l,
  ...c
}) => /* @__PURE__ */ le(uf, { flexDirection: "row", justifyContent: { xs: "space-between", md: "end" }, mt: 6, sx: l, ...c, children: [
  e && /* @__PURE__ */ E(
    jt,
    {
      role: "button",
      "aria-label": "cancel",
      color: "primary",
      sx: { fontSize: (u) => u.typography.fontSize * 1.15 },
      onClick: e,
      children: t || "cancel"
    }
  ),
  !i && /* @__PURE__ */ E(
    jt,
    {
      role: "button",
      "aria-label": "proceed",
      onClick: r,
      disabled: a,
      color: s ? "error" : "primary",
      variant: "contained",
      sx: { fontSize: (u) => u.typography.fontSize * 1 * 1.15 },
      children: o
    }
  )
] });
function MC({
  open: e,
  header: t,
  children: o,
  maxWidth: r,
  closeModal: a,
  cancelActionLabel: i,
  cancelAction: s,
  callToActionLabel: l,
  callToAction: c,
  callToActionHidden: u = !1,
  callToActionIsDelete: d = !1,
  disabled: p,
  sxFooter: f,
  ...v
}) {
  const { TransitionProps: h = {}, ...b } = v;
  return /* @__PURE__ */ E(
    df,
    {
      closeAfterTransition: !0,
      BackdropComponent: pf,
      BackdropProps: {
        timeout: 500
      },
      open: e,
      ...b,
      children: /* @__PURE__ */ E(ff, { in: e, ...h, children: /* @__PURE__ */ le(ze, { sx: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: r || "900px",
        width: "90%",
        maxHeight: "90%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: { xs: 2, md: 3 },
        overflow: "auto",
        outline: "none",
        borderRadius: "12px"
      }, display: "flex", flexDirection: "column", children: [
        /* @__PURE__ */ le(ze, { display: "flex", alignItems: "center", children: [
          /* @__PURE__ */ E(ze, { flex: 1, children: t && /* @__PURE__ */ E(ze, { fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem", lg: "2.25rem" }, children: t }) }),
          a && /* @__PURE__ */ E(Kc, { sx: { cursor: "pointer" }, onClick: a, children: /* @__PURE__ */ E(vs, {}) })
        ] }),
        /* @__PURE__ */ E(ze, { children: o }),
        c && /* @__PURE__ */ E(
          DC,
          {
            action: l ?? "Proceed",
            cancelActionLabel: i,
            callToAction: c,
            callToActionHidden: u,
            cancelAction: s,
            callToActionIsDelete: d,
            disabled: p,
            sx: f
          }
        )
      ] }) })
    }
  );
}
var $C = (e) => e.type === "checkbox", IC = (e) => e instanceof Date, ep = (e) => e == null;
const NC = (e) => typeof e == "object";
var vo = (e) => !ep(e) && !Array.isArray(e) && NC(e) && !IC(e), _C = (e) => vo(e) && e.target ? $C(e.target) ? e.target.checked : e.target.value : e, AC = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, FC = (e, t) => e.has(AC(t)), VC = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return vo(t) && t.hasOwnProperty("isPrototypeOf");
}, LC = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function xs(e) {
  let t;
  const o = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(LC && (e instanceof Blob || e instanceof FileList)) && (o || vo(e)))
    if (t = o ? [] : {}, !o && !VC(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = xs(e[r]));
  else
    return e;
  return t;
}
var tp = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Pi = (e) => e === void 0, rt = (e, t, o) => {
  if (!t || !vo(e))
    return o;
  const r = tp(t.split(/[,[\].]+?/)).reduce((a, i) => ep(a) ? a : a[i], e);
  return Pi(r) || r === e ? Pi(e[t]) ? o : e[t] : r;
}, Rc = (e) => typeof e == "boolean", jC = (e) => /^\w*$/.test(e), BC = (e) => tp(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Tc = (e, t, o) => {
  let r = -1;
  const a = jC(t) ? [t] : BC(t), i = a.length, s = i - 1;
  for (; ++r < i; ) {
    const l = a[r];
    let c = o;
    if (r !== s) {
      const u = e[l];
      c = vo(u) || Array.isArray(u) ? u : isNaN(+a[r + 1]) ? {} : [];
    }
    if (l === "__proto__")
      return;
    e[l] = c, e = e[l];
  }
  return e;
};
const kc = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Dc = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, zC = _e.createContext(null), ws = () => _e.useContext(zC);
var WC = (e, t, o, r = !0) => {
  const a = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(a, i, {
      get: () => {
        const s = i;
        return t._proxyFormState[s] !== Dc.all && (t._proxyFormState[s] = !r || Dc.all), o && (o[s] = !0), e[s];
      }
    });
  return a;
}, UC = (e) => vo(e) && !Object.keys(e).length, qC = (e, t, o, r) => {
  o(e);
  const { name: a, ...i } = e;
  return UC(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((s) => t[s] === !r);
}, HC = (e) => Array.isArray(e) ? e : [e], np = (e, t, o) => !e || !t || e === t || HC(e).some((r) => r && (o ? r === t : r.startsWith(t) || t.startsWith(r)));
function op(e) {
  const t = _e.useRef(e);
  t.current = e, _e.useEffect(() => {
    const o = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      o && o.unsubscribe();
    };
  }, [e.disabled]);
}
function YC(e) {
  const t = ws(), { control: o = t.control, disabled: r, name: a, exact: i } = e || {}, [s, l] = _e.useState(o._formState), c = _e.useRef(!0), u = _e.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), d = _e.useRef(a);
  return d.current = a, op({
    disabled: r,
    next: (p) => c.current && np(d.current, p.name, i) && qC(p, u.current, o._updateFormState) && l({
      ...o._formState,
      ...p
    }),
    subject: o._subjects.state
  }), _e.useEffect(() => (c.current = !0, u.current.isValid && o._updateValid(!0), () => {
    c.current = !1;
  }), [o]), WC(s, o, u.current, !1);
}
var KC = (e) => typeof e == "string", GC = (e, t, o, r, a) => KC(e) ? rt(o, e, a) : Array.isArray(e) ? e.map((i) => rt(o, i)) : o;
function XC(e) {
  const t = ws(), { control: o = t.control, name: r, defaultValue: a, disabled: i, exact: s } = e || {}, l = _e.useRef(r);
  l.current = r, op({
    disabled: i,
    subject: o._subjects.values,
    next: (d) => {
      np(l.current, d.name, s) && u(xs(GC(l.current, o._names, d.values || o._formValues, !1, a)));
    }
  });
  const [c, u] = _e.useState(o._getWatch(r, a));
  return _e.useEffect(() => o._removeUnmounted()), c;
}
function Ma(e) {
  const t = ws(), { name: o, disabled: r, control: a = t.control, shouldUnregister: i } = e, s = FC(a._names.array, o), l = XC({
    control: a,
    name: o,
    defaultValue: rt(a._formValues, o, rt(a._defaultValues, o, e.defaultValue)),
    exact: !0
  }), c = YC({
    control: a,
    name: o,
    exact: !0
  }), u = _e.useRef(a.register(o, {
    ...e.rules,
    value: l,
    ...Rc(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return _e.useEffect(() => {
    const d = a._options.shouldUnregister || i, p = (f, v) => {
      const h = rt(a._fields, f);
      h && h._f && (h._f.mount = v);
    };
    if (p(o, !0), d) {
      const f = xs(rt(a._options.defaultValues, o));
      Tc(a._defaultValues, o, f), Pi(rt(a._formValues, o)) && Tc(a._formValues, o, f);
    }
    return () => {
      (s ? d && !a._state.action : d) ? a.unregister(o) : p(o, !1);
    };
  }, [o, a, s, i]), _e.useEffect(() => {
    rt(a._fields, o) && a._updateDisabledField({
      disabled: r,
      fields: a._fields,
      name: o,
      value: rt(a._fields, o)._f.value
    });
  }, [r, o, a]), {
    field: {
      name: o,
      value: l,
      ...Rc(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: _e.useCallback((d) => u.current.onChange({
        target: {
          value: _C(d),
          name: o
        },
        type: kc.CHANGE
      }), [o]),
      onBlur: _e.useCallback(() => u.current.onBlur({
        target: {
          value: rt(a._formValues, o),
          name: o
        },
        type: kc.BLUR
      }), [o, a]),
      ref: _e.useCallback((d) => {
        const p = rt(a._fields, o);
        p && d && (p._f.ref = {
          focus: () => d.focus(),
          select: () => d.select(),
          setCustomValidity: (f) => d.setCustomValidity(f),
          reportValidity: () => d.reportValidity()
        });
      }, [a._fields, o])
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!rt(c.errors, o)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!rt(c.dirtyFields, o)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!rt(c.touchedFields, o)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!rt(c.validatingFields, o)
      },
      error: {
        enumerable: !0,
        get: () => rt(c.errors, o)
      }
    })
  };
}
const jR = ({
  for_name: e,
  with_label: t,
  with_helper_text: o = "",
  control: r,
  has_error: a,
  error_message: i,
  readonly: s = !1,
  sx: l,
  sxInput: c = {},
  variant: u = "outlined",
  multiline: d = !1,
  placeholder: p = "",
  ...f
}) => {
  const { field: v } = Ma({
    name: e,
    control: r
  });
  return /* @__PURE__ */ E(
    ze,
    {
      marginBottom: 2,
      ...f,
      sx: { width: "300px", ...l },
      mx: "auto",
      "data-testid": `${e}_textbox`,
      children: /* @__PURE__ */ E(
        Ti,
        {
          placeholder: p,
          multiline: d,
          rows: d ? 3 : 1,
          fullWidth: !0,
          size: "small",
          label: t,
          variant: u,
          ...v,
          error: a,
          helperText: a ? i : o,
          FormHelperTextProps: {
            style: { padding: 0 }
          },
          InputProps: {
            readOnly: s
          },
          sx: {
            ...s && {
              pointerEvents: "none",
              opacity: 0.7
            },
            ...c
          }
        }
      )
    }
  );
}, BR = ({
  for_name: e,
  with_label: t,
  with_helper_text: o = "",
  control: r,
  has_error: a,
  error_message: i,
  options: s,
  variant: l = "outlined",
  withValueTitle: c = !1,
  ...u
}) => {
  const { field: d } = Ma({
    name: e,
    control: r
  });
  return /* @__PURE__ */ E(ze, { marginBottom: 2, mx: "auto", ...u, width: "300px", "data-testid": `${e}_textbox`, children: /* @__PURE__ */ E(
    Ti,
    {
      select: !0,
      fullWidth: !0,
      size: "small",
      label: t,
      variant: l,
      sx: { textAlign: "left" },
      ...d,
      error: a,
      helperText: a ? i : o,
      FormHelperTextProps: {
        style: { padding: 0 }
      },
      children: s.map((p) => /* @__PURE__ */ E(Gc, { value: p.value, title: c ? p.value : "", children: p.label }, p.value))
    }
  ) });
}, zR = ({ label: e, sx: t }) => /* @__PURE__ */ le(
  wn,
  {
    textAlign: "center",
    color: (o) => o.palette.mode === "dark" ? "white" : "black",
    fontSize: "1.2rem",
    sx: { ml: 1, mb: 1, ...t },
    children: [
      e,
      ":"
    ]
  }
), WR = ({
  for_name: e,
  with_label: t,
  control: o,
  has_error: r,
  error_message: a,
  ...i
}) => {
  const { field: s } = Ma({
    name: e,
    control: o
  });
  return /* @__PURE__ */ le(
    ze,
    {
      marginBottom: 0,
      textAlign: "left",
      ...i,
      sx: { width: "300px", mx: "auto" },
      "data-testid": `${e}_textbox`,
      children: [
        /* @__PURE__ */ E(
          mf,
          {
            control: /* @__PURE__ */ E(hf, { ...s, color: "primary", sx: { px: 2, py: 2 } }),
            label: t,
            sx: {
              ...r && {
                color: "error.main"
              }
            }
          }
        ),
        r && /* @__PURE__ */ E(ze, { color: "error.main", children: a })
      ]
    }
  );
};
function W() {
  return W = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var r in o)
        ({}).hasOwnProperty.call(o, r) && (e[r] = o[r]);
    }
    return e;
  }, W.apply(null, arguments);
}
function ge(e, t) {
  if (e == null)
    return {};
  var o = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r))
        continue;
      o[r] = e[r];
    }
  return o;
}
const ZC = ["localeText"], qr = /* @__PURE__ */ m.createContext(null);
process.env.NODE_ENV !== "production" && (qr.displayName = "MuiPickersAdapterContext");
const Cs = function(t) {
  const {
    localeText: o
  } = t, r = ge(t, ZC), {
    utils: a,
    localeText: i
  } = m.useContext(qr) ?? {
    utils: void 0,
    localeText: void 0
  }, s = Le({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: r,
    name: "MuiLocalizationProvider"
  }), {
    children: l,
    dateAdapter: c,
    dateFormats: u,
    dateLibInstance: d,
    adapterLocale: p,
    localeText: f
  } = s, v = m.useMemo(() => W({}, f, i, o), [f, i, o]), h = m.useMemo(() => {
    if (!c)
      return a || null;
    const C = new c({
      locale: p,
      formats: u,
      instance: d
    });
    if (!C.isMUIAdapter)
      throw new Error(["MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    return C;
  }, [c, p, u, d, a]), b = m.useMemo(() => h ? {
    minDate: h.date("1900-01-01T00:00:00.000"),
    maxDate: h.date("2099-12-31T00:00:00.000")
  } : null, [h]), y = m.useMemo(() => ({
    utils: h,
    defaultDates: b,
    localeText: v
  }), [b, h, v]);
  return /* @__PURE__ */ E(qr.Provider, {
    value: y,
    children: l
  });
};
process.env.NODE_ENV !== "production" && (Cs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: n.any,
  children: n.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
   */
  dateAdapter: n.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: n.shape({
    dayOfMonth: n.string,
    dayOfMonthFull: n.string,
    fullDate: n.string,
    fullTime: n.string,
    fullTime12h: n.string,
    fullTime24h: n.string,
    hours12h: n.string,
    hours24h: n.string,
    keyboardDate: n.string,
    keyboardDateTime: n.string,
    keyboardDateTime12h: n.string,
    keyboardDateTime24h: n.string,
    meridiem: n.string,
    minutes: n.string,
    month: n.string,
    monthShort: n.string,
    normalDate: n.string,
    normalDateWithWeekday: n.string,
    seconds: n.string,
    shortDate: n.string,
    weekday: n.string,
    weekdayShort: n.string,
    year: n.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: n.any,
  /**
   * Locale for components texts
   */
  localeText: n.object
});
const QC = (e) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: W({}, e)
      }
    }
  }
}), rp = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "Open previous view",
  openNextView: "Open next view",
  calendarViewSwitchingButtonAriaLabel: (e) => e === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange labels
  start: "Start",
  end: "End",
  startDate: "Start date",
  startTime: "Start time",
  endDate: "End date",
  endTime: "End time",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (e, t, o) => `Select ${e}. ${t === null ? "No time selected" : `Selected time is ${o.format(t, "fullTime")}`}`,
  hoursClockNumberText: (e) => `${e} hours`,
  minutesClockNumberText: (e) => `${e} minutes`,
  secondsClockNumberText: (e) => `${e} seconds`,
  // Digital clock labels
  selectViewText: (e) => `Select ${e}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (e) => `Week ${e}`,
  calendarWeekNumberText: (e) => `${e}`,
  // Open picker labels
  openDatePickerDialogue: (e, t) => e !== null && t.isValid(e) ? `Choose date, selected date is ${t.format(e, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (e, t) => e !== null && t.isValid(e) ? `Choose time, selected time is ${t.format(e, "fullTime")}` : "Choose time",
  fieldClearLabel: "Clear value",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (e) => "Y".repeat(e.digitAmount),
  fieldMonthPlaceholder: (e) => e.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (e) => e.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Year",
  month: "Month",
  day: "Day",
  weekDay: "Week day",
  hours: "Hours",
  minutes: "Minutes",
  seconds: "Seconds",
  meridiem: "Meridiem",
  // Common
  empty: "Empty"
}, JC = rp;
QC(rp);
const Mn = () => {
  const e = m.useContext(qr);
  if (e === null)
    throw new Error(["MUI X: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (e.utils === null)
    throw new Error(["MUI X: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const t = m.useMemo(() => W({}, JC, e.localeText), [e.localeText]);
  return m.useMemo(() => W({}, e, {
    localeText: t
  }), [e, t]);
}, Ae = () => Mn().utils, dr = () => Mn().defaultDates, on = () => Mn().localeText, $a = (e) => {
  const t = Ae(), o = m.useRef();
  return o.current === void 0 && (o.current = t.date(void 0, e)), o.current;
};
function e1(e) {
  return typeof e == "string";
}
function t1(e, t, o) {
  return e === void 0 || e1(e) ? t : T({}, t, {
    ownerState: T({}, t.ownerState, o)
  });
}
function n1(e, t = []) {
  if (e === void 0)
    return {};
  const o = {};
  return Object.keys(e).filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach((r) => {
    o[r] = e[r];
  }), o;
}
function Ss(e, t, o) {
  return typeof e == "function" ? e(t, o) : e;
}
function Mc(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((o) => !(o.match(/^on[A-Z]/) && typeof e[o] == "function")).forEach((o) => {
    t[o] = e[o];
  }), t;
}
function o1(e) {
  const {
    getSlotProps: t,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: i
  } = e;
  if (!t) {
    const v = ae(o == null ? void 0 : o.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), h = T({}, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), b = T({}, o, a, r);
    return v.length > 0 && (b.className = v), Object.keys(h).length > 0 && (b.style = h), {
      props: b,
      internalRef: void 0
    };
  }
  const s = n1(T({}, a, r)), l = Mc(r), c = Mc(a), u = t(s), d = ae(u == null ? void 0 : u.className, o == null ? void 0 : o.className, i, a == null ? void 0 : a.className, r == null ? void 0 : r.className), p = T({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), f = T({}, u, o, c, l);
  return d.length > 0 && (f.className = d), Object.keys(p).length > 0 && (f.style = p), {
    props: f,
    internalRef: u.ref
  };
}
const r1 = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Ve(e) {
  var t;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: i = !1
  } = e, s = ue(e, r1), l = i ? {} : Ss(r, a), {
    props: c,
    internalRef: u
  } = o1(T({}, s, {
    externalSlotProps: l
  })), d = Se(u, l == null ? void 0 : l.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return t1(o, T({}, c, {
    ref: d
  }), a);
}
const a1 = Nt(/* @__PURE__ */ E("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), i1 = Nt(/* @__PURE__ */ E("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft"), s1 = Nt(/* @__PURE__ */ E("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight"), l1 = Nt(/* @__PURE__ */ E("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
Nt(/* @__PURE__ */ le(m.Fragment, {
  children: [/* @__PURE__ */ E("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ E("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
Nt(/* @__PURE__ */ E("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
Nt(/* @__PURE__ */ le(m.Fragment, {
  children: [/* @__PURE__ */ E("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ E("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
const c1 = Nt(/* @__PURE__ */ E("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
function u1(e) {
  return pe("MuiPickersArrowSwitcher", e);
}
de("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
const d1 = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], p1 = ["ownerState"], f1 = ["ownerState"], m1 = Q("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex"
}), h1 = Q("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})(({
  theme: e
}) => ({
  width: e.spacing(3)
})), $c = Q(fn, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (e, t) => t.button
})({
  variants: [{
    props: {
      hidden: !0
    },
    style: {
      visibility: "hidden"
    }
  }]
}), b1 = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  }, u1, t);
}, g1 = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = It(), a = Le({
    props: t,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: i,
    className: s,
    slots: l,
    slotProps: c,
    isNextDisabled: u,
    isNextHidden: d,
    onGoToNext: p,
    nextLabel: f,
    isPreviousDisabled: v,
    isPreviousHidden: h,
    onGoToPrevious: b,
    previousLabel: y
  } = a, C = ge(a, d1), S = a, w = b1(S), x = {
    isDisabled: u,
    isHidden: d,
    goTo: p,
    label: f
  }, g = {
    isDisabled: v,
    isHidden: h,
    goTo: b,
    label: y
  }, P = (l == null ? void 0 : l.previousIconButton) ?? $c, R = Ve({
    elementType: P,
    externalSlotProps: c == null ? void 0 : c.previousIconButton,
    additionalProps: {
      size: "medium",
      title: g.label,
      "aria-label": g.label,
      disabled: g.isDisabled,
      edge: "end",
      onClick: g.goTo
    },
    ownerState: W({}, S, {
      hidden: g.isHidden
    }),
    className: w.button
  }), I = (l == null ? void 0 : l.nextIconButton) ?? $c, j = Ve({
    elementType: I,
    externalSlotProps: c == null ? void 0 : c.nextIconButton,
    additionalProps: {
      size: "medium",
      title: x.label,
      "aria-label": x.label,
      disabled: x.isDisabled,
      edge: "start",
      onClick: x.goTo
    },
    ownerState: W({}, S, {
      hidden: x.isHidden
    }),
    className: w.button
  }), M = (l == null ? void 0 : l.leftArrowIcon) ?? i1, N = Ve({
    elementType: M,
    externalSlotProps: c == null ? void 0 : c.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), q = ge(N, p1), k = (l == null ? void 0 : l.rightArrowIcon) ?? s1, A = Ve({
    elementType: k,
    externalSlotProps: c == null ? void 0 : c.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), $ = ge(A, f1);
  return /* @__PURE__ */ le(m1, W({
    ref: o,
    className: ae(w.root, s),
    ownerState: S
  }, C, {
    children: [/* @__PURE__ */ E(P, W({}, R, {
      children: r ? /* @__PURE__ */ E(k, W({}, $)) : /* @__PURE__ */ E(M, W({}, q))
    })), i ? /* @__PURE__ */ E(mn, {
      variant: "subtitle1",
      component: "span",
      children: i
    }) : /* @__PURE__ */ E(h1, {
      className: w.spacer,
      ownerState: S
    }), /* @__PURE__ */ E(I, W({}, j, {
      children: r ? /* @__PURE__ */ E(M, W({}, q)) : /* @__PURE__ */ E(k, W({}, $))
    }))]
  }));
}), Po = (e, t) => e.length !== t.length ? !1 : t.every((o) => e.includes(o)), y1 = ({
  openTo: e,
  defaultOpenTo: t,
  views: o,
  defaultViews: r
}) => {
  const a = o ?? r;
  let i;
  if (e != null)
    i = e;
  else if (a.includes(t))
    i = t;
  else if (a.length > 0)
    i = a[0];
  else
    throw new Error("MUI X: The `views` prop must contain at least one view.");
  return {
    views: a,
    openTo: i
  };
}, v1 = ["hours", "minutes", "seconds"], x1 = (e) => v1.includes(e), Ic = (e, t) => t.getHours(e) * 3600 + t.getMinutes(e) * 60 + t.getSeconds(e), w1 = (e, t) => (o, r) => e ? t.isAfter(o, r) : Ic(o, t) > Ic(r, t);
let oi = !1;
function ap({
  onChange: e,
  onViewChange: t,
  openTo: o,
  view: r,
  views: a,
  autoFocus: i,
  focusedView: s,
  onFocusedViewChange: l
}) {
  process.env.NODE_ENV !== "production" && (oi || (r != null && !a.includes(r) && (console.warn(`MUI X: \`view="${r}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), oi = !0), r == null && o != null && !a.includes(o) && (console.warn(`MUI X: \`openTo="${o}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), oi = !0)));
  const c = m.useRef(o), u = m.useRef(a), d = m.useRef(a.includes(o) ? o : a[0]), [p, f] = $t({
    name: "useViews",
    state: "view",
    controlled: r,
    default: d.current
  }), v = m.useRef(i ? p : null), [h, b] = $t({
    name: "useViews",
    state: "focusedView",
    controlled: s,
    default: v.current
  });
  m.useEffect(() => {
    (c.current && c.current !== o || u.current && u.current.some((R) => !a.includes(R))) && (f(a.includes(o) ? o : a[0]), u.current = a, c.current = o);
  }, [o, f, p, a]);
  const y = a.indexOf(p), C = a[y - 1] ?? null, S = a[y + 1] ?? null, w = se((R, I) => {
    b(I ? R : (j) => R === j ? null : j), l == null || l(R, I);
  }), x = se((R) => {
    w(R, !0), R !== p && (f(R), t && t(R));
  }), g = se(() => {
    S && x(S);
  }), P = se((R, I, j) => {
    const M = I === "finish", N = j ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but when it's not the final view given all `views` -> overall selection state should be `partial`.
      a.indexOf(j) < a.length - 1
    ) : !!S;
    if (e(R, M && N ? "partial" : I, j), j && j !== p) {
      const k = a[a.indexOf(j) + 1];
      k && x(k);
    } else
      M && g();
  });
  return {
    view: p,
    setView: x,
    focusedView: h,
    setFocusedView: w,
    nextView: S,
    previousView: C,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: a.includes(o) ? o : a[0],
    goToNextView: g,
    setValueAndGoToNextView: P
  };
}
function C1(e, {
  disableFuture: t,
  maxDate: o,
  timezone: r
}) {
  const a = Ae();
  return m.useMemo(() => {
    const i = a.date(void 0, r), s = a.startOfMonth(t && a.isBefore(i, o) ? i : o);
    return !a.isAfter(s, e);
  }, [t, o, e, a, r]);
}
function S1(e, {
  disablePast: t,
  minDate: o,
  timezone: r
}) {
  const a = Ae();
  return m.useMemo(() => {
    const i = a.date(void 0, r), s = a.startOfMonth(t && a.isAfter(i, o) ? i : o);
    return !a.isBefore(s, e);
  }, [t, o, e, a, r]);
}
const Go = 36, Ia = 2, Na = 320, E1 = 280, Es = 336, O1 = Q("div")({
  overflow: "hidden",
  width: Na,
  maxHeight: Es,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), Hr = (e, t, o) => {
  let r = t;
  return r = e.setHours(r, e.getHours(o)), r = e.setMinutes(r, e.getMinutes(o)), r = e.setSeconds(r, e.getSeconds(o)), r;
}, Fo = ({
  date: e,
  disableFuture: t,
  disablePast: o,
  maxDate: r,
  minDate: a,
  isDateDisabled: i,
  utils: s,
  timezone: l
}) => {
  const c = Hr(s, s.date(void 0, l), e);
  o && s.isBefore(a, c) && (a = c), t && s.isAfter(r, c) && (r = c);
  let u = e, d = e;
  for (s.isBefore(e, a) && (u = a, d = null), s.isAfter(e, r) && (d && (d = r), u = null); u || d; ) {
    if (u && s.isAfter(u, r) && (u = null), d && s.isBefore(d, a) && (d = null), u) {
      if (!i(u))
        return u;
      u = s.addDays(u, 1);
    }
    if (d) {
      if (!i(d))
        return d;
      d = s.addDays(d, -1);
    }
  }
  return null;
}, P1 = (e, t) => t == null || !e.isValid(t) ? null : t, Rt = (e, t, o) => t == null || !e.isValid(t) ? o : t, R1 = (e, t, o) => !e.isValid(t) && t != null && !e.isValid(o) && o != null ? !0 : e.isEqual(t, o), Os = (e, t) => {
  const r = [e.startOfYear(t)];
  for (; r.length < 12; ) {
    const a = r[r.length - 1];
    r.push(e.addMonths(a, 1));
  }
  return r;
}, ip = (e, t, o) => o === "date" ? e.startOfDay(e.date(void 0, t)) : e.date(void 0, t), T1 = ["year", "month", "day"], Nc = (e) => T1.includes(e), Ps = (e, {
  format: t,
  views: o
}, r) => {
  if (t != null)
    return t;
  const a = e.formats;
  return Po(o, ["year"]) ? a.year : Po(o, ["month"]) ? a.month : Po(o, ["day"]) ? a.dayOfMonth : Po(o, ["month", "year"]) ? `${a.month} ${a.year}` : Po(o, ["day", "month"]) ? `${a.month} ${a.dayOfMonth}` : r ? /en/.test(e.getCurrentLocaleCode()) ? a.normalDateWithWeekday : a.normalDate : a.keyboardDate;
}, k1 = (e, t) => {
  const o = e.startOfWeek(t);
  return [0, 1, 2, 3, 4, 5, 6].map((r) => e.addDays(o, r));
}, Rs = ({
  timezone: e,
  value: t,
  defaultValue: o,
  onChange: r,
  valueManager: a
}) => {
  const i = Ae(), s = m.useRef(o), l = t ?? s.current ?? a.emptyValue, c = m.useMemo(() => a.getTimezone(i, l), [i, a, l]), u = se((v) => c == null ? v : a.setTimezone(i, c, v)), d = e ?? c ?? "default", p = m.useMemo(() => a.setTimezone(i, d, l), [a, i, d, l]), f = se((v, ...h) => {
    const b = u(v);
    r == null || r(b, ...h);
  });
  return {
    value: p,
    handleValueChange: f,
    timezone: d
  };
}, Ts = ({
  name: e,
  timezone: t,
  value: o,
  defaultValue: r,
  onChange: a,
  valueManager: i
}) => {
  const [s, l] = $t({
    name: e,
    state: "value",
    controlled: o,
    default: r ?? i.emptyValue
  }), c = se((u, ...d) => {
    l(u), a == null || a(u, ...d);
  });
  return Rs({
    timezone: t,
    value: s,
    defaultValue: void 0,
    onChange: c,
    valueManager: i
  });
}, Lt = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, D1 = (e) => Math.max(...e.map((t) => Lt[t.type] ?? 1)), Ro = (e, t, o) => {
  if (t === Lt.year)
    return e.startOfYear(o);
  if (t === Lt.month)
    return e.startOfMonth(o);
  if (t === Lt.day)
    return e.startOfDay(o);
  let r = o;
  return t < Lt.minutes && (r = e.setMinutes(r, 0)), t < Lt.seconds && (r = e.setSeconds(r, 0)), t < Lt.milliseconds && (r = e.setMilliseconds(r, 0)), r;
}, M1 = ({
  props: e,
  utils: t,
  granularity: o,
  timezone: r,
  getTodayDate: a
}) => {
  let i = a ? a() : Ro(t, o, ip(t, r));
  e.minDate != null && t.isAfterDay(e.minDate, i) && (i = Ro(t, o, e.minDate)), e.maxDate != null && t.isBeforeDay(e.maxDate, i) && (i = Ro(t, o, e.maxDate));
  const s = w1(e.disableIgnoringDatePartForTimeValidation ?? !1, t);
  return e.minTime != null && s(e.minTime, i) && (i = Ro(t, o, e.disableIgnoringDatePartForTimeValidation ? e.minTime : Hr(t, i, e.minTime))), e.maxTime != null && s(i, e.maxTime) && (i = Ro(t, o, e.disableIgnoringDatePartForTimeValidation ? e.maxTime : Hr(t, i, e.maxTime))), i;
}, ks = (e, t) => {
  const o = e.formatTokenMap[t];
  if (o == null)
    throw new Error([`MUI X: The token "${t}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join(`
`));
  return typeof o == "string" ? {
    type: o,
    contentType: o === "meridiem" ? "letter" : "digit",
    maxLength: void 0
  } : {
    type: o.sectionType,
    contentType: o.contentType,
    maxLength: o.maxLength
  };
}, $1 = (e) => {
  switch (e) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}, _a = (e, t, o) => {
  const r = [], a = e.date(void 0, t), i = e.startOfWeek(a), s = e.endOfWeek(a);
  let l = i;
  for (; e.isBefore(l, s); )
    r.push(l), l = e.addDays(l, 1);
  return r.map((c) => e.formatByString(c, o));
}, sp = (e, t, o, r) => {
  switch (o) {
    case "month":
      return Os(e, e.date(void 0, t)).map((a) => e.formatByString(a, r));
    case "weekDay":
      return _a(e, t, r);
    case "meridiem": {
      const a = e.date(void 0, t);
      return [e.startOfDay(a), e.endOfDay(a)].map((i) => e.formatByString(i, r));
    }
    default:
      return [];
  }
}, _c = "s", I1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], N1 = (e) => {
  const t = e.date(void 0);
  return e.formatByString(e.setSeconds(t, 0), _c) === "0" ? I1 : Array.from({
    length: 10
  }).map((r, a) => e.formatByString(e.setSeconds(t, a), _c));
}, Tn = (e, t) => {
  if (t[0] === "0")
    return e;
  const o = [];
  let r = "";
  for (let a = 0; a < e.length; a += 1) {
    r += e[a];
    const i = t.indexOf(r);
    i > -1 && (o.push(i.toString()), r = "");
  }
  return o.join("");
}, Ds = (e, t) => t[0] === "0" ? e : e.split("").map((o) => t[Number(o)]).join(""), Ac = (e, t) => {
  const o = Tn(e, t);
  return !Number.isNaN(Number(o));
}, lp = (e, t) => {
  let o = e;
  for (o = Number(o).toString(); o.length < t; )
    o = `0${o}`;
  return o;
}, cp = (e, t, o, r, a) => {
  if (process.env.NODE_ENV !== "production" && a.type !== "day" && a.contentType === "digit-with-letter")
    throw new Error([`MUI X: The token "${a.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join(`
`));
  if (a.type === "day" && a.contentType === "digit-with-letter") {
    const s = e.setDate(o.longestMonth, t);
    return e.formatByString(s, a.format);
  }
  let i = t.toString();
  return a.hasLeadingZerosInInput && (i = lp(i, a.maxLength)), Ds(i, r);
}, _1 = (e, t, o, r, a, i, s, l) => {
  const c = $1(r), u = r === "Home", d = r === "End", p = o.value === "" || u || d, f = () => {
    const h = a[o.type]({
      currentDate: s,
      format: o.format,
      contentType: o.contentType
    }), b = (w) => cp(e, w, h, i, o), y = o.type === "minutes" && (l != null && l.minutesStep) ? l.minutesStep : 1;
    let S = parseInt(Tn(o.value, i), 10) + c * y;
    if (p) {
      if (o.type === "year" && !d && !u)
        return e.formatByString(e.date(void 0, t), o.format);
      c > 0 || u ? S = h.minimum : S = h.maximum;
    }
    return S % y !== 0 && ((c < 0 || u) && (S += y - (y + S) % y), (c > 0 || d) && (S -= S % y)), S > h.maximum ? b(h.minimum + (S - h.maximum - 1) % (h.maximum - h.minimum + 1)) : S < h.minimum ? b(h.maximum - (h.minimum - S - 1) % (h.maximum - h.minimum + 1)) : b(S);
  }, v = () => {
    const h = sp(e, t, o.type, o.format);
    if (h.length === 0)
      return o.value;
    if (p)
      return c > 0 || u ? h[0] : h[h.length - 1];
    const C = ((h.indexOf(o.value) + c) % h.length + h.length) % h.length;
    return h[C];
  };
  return o.contentType === "digit" || o.contentType === "digit-with-letter" ? f() : v();
}, Ms = (e, t, o) => {
  let r = e.value || e.placeholder;
  const a = t === "non-input" ? e.hasLeadingZerosInFormat : e.hasLeadingZerosInInput;
  return t === "non-input" && e.hasLeadingZerosInInput && !e.hasLeadingZerosInFormat && (r = Number(Tn(r, o)).toString()), ["input-rtl", "input-ltr"].includes(t) && e.contentType === "digit" && !a && r.length === 1 && (r = `${r}‎`), t === "input-rtl" && (r = `⁨${r}⁩`), r;
}, Fc = (e, t, o, r) => {
  if (process.env.NODE_ENV !== "production" && ks(e, o).type === "weekDay")
    throw new Error("changeSectionValueFormat doesn't support week day formats");
  return e.formatByString(e.parse(t, o), r);
}, up = (e, t, o) => e.formatByString(e.date(void 0, t), o).length === 4, dp = (e, t, o, r, a) => {
  if (o !== "digit")
    return !1;
  const i = e.date(void 0, t);
  switch (r) {
    case "year":
      return up(e, t, a) ? e.formatByString(e.setYear(i, 1), a) === "0001" : e.formatByString(e.setYear(i, 2001), a) === "01";
    case "month":
      return e.formatByString(e.startOfYear(i), a).length > 1;
    case "day":
      return e.formatByString(e.startOfMonth(i), a).length > 1;
    case "weekDay":
      return e.formatByString(e.startOfWeek(i), a).length > 1;
    case "hours":
      return e.formatByString(e.setHours(i, 1), a).length > 1;
    case "minutes":
      return e.formatByString(e.setMinutes(i, 1), a).length > 1;
    case "seconds":
      return e.formatByString(e.setSeconds(i, 1), a).length > 1;
    default:
      throw new Error("Invalid section type");
  }
}, A1 = (e, t, o) => {
  const r = t.some((c) => c.type === "day"), a = [], i = [];
  for (let c = 0; c < t.length; c += 1) {
    const u = t[c];
    r && u.type === "weekDay" || (a.push(u.format), i.push(Ms(u, "non-input", o)));
  }
  const s = a.join(" "), l = i.join(" ");
  return e.parse(l, s);
}, F1 = (e) => e.map((t) => `${t.startSeparator}${t.value || t.placeholder}${t.endSeparator}`).join(""), V1 = (e, t, o) => {
  const a = e.map((i) => {
    const s = Ms(i, o ? "input-rtl" : "input-ltr", t);
    return `${i.startSeparator}${s}${i.endSeparator}`;
  }).join("");
  return o ? `⁦${a}⁩` : a;
}, L1 = (e, t, o) => {
  const r = e.date(void 0, o), a = e.endOfYear(r), i = e.endOfDay(r), {
    maxDaysInMonth: s,
    longestMonth: l
  } = Os(e, r).reduce((c, u) => {
    const d = e.getDaysInMonth(u);
    return d > c.maxDaysInMonth ? {
      maxDaysInMonth: d,
      longestMonth: u
    } : c;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format: c
    }) => ({
      minimum: 0,
      maximum: up(e, o, c) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: e.getMonth(a) + 1
    }),
    day: ({
      currentDate: c
    }) => ({
      minimum: 1,
      maximum: c != null && e.isValid(c) ? e.getDaysInMonth(c) : s,
      longestMonth: l
    }),
    weekDay: ({
      format: c,
      contentType: u
    }) => {
      if (u === "digit") {
        const d = _a(e, o, c).map(Number);
        return {
          minimum: Math.min(...d),
          maximum: Math.max(...d)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format: c
    }) => {
      const u = e.getHours(i);
      return Tn(e.formatByString(e.endOfDay(r), c), t) !== u.toString() ? {
        minimum: 1,
        maximum: Number(Tn(e.formatByString(e.startOfDay(r), c), t))
      } : {
        minimum: 0,
        maximum: u
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: e.getMinutes(i)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: e.getSeconds(i)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
let Vc = !1;
const Lc = (e, t) => {
  if (process.env.NODE_ENV !== "production" && !Vc) {
    const o = ["empty"];
    ["date", "date-time"].includes(t) && o.push("weekDay", "day", "month", "year"), ["time", "date-time"].includes(t) && o.push("hours", "minutes", "seconds", "meridiem");
    const r = e.find((a) => !o.includes(a.type));
    r && (console.warn(`MUI X: The field component you are using is not compatible with the "${r.type}" date section.`, `The supported date sections are ["${o.join('", "')}"]\`.`), Vc = !0);
  }
}, j1 = (e, t, o, r, a) => {
  switch (o.type) {
    case "year":
      return e.setYear(a, e.getYear(r));
    case "month":
      return e.setMonth(a, e.getMonth(r));
    case "weekDay": {
      const i = _a(e, t, o.format), s = e.formatByString(r, o.format), l = i.indexOf(s), u = i.indexOf(o.value) - l;
      return e.addDays(r, u);
    }
    case "day":
      return e.setDate(a, e.getDate(r));
    case "meridiem": {
      const i = e.getHours(r) < 12, s = e.getHours(a);
      return i && s >= 12 ? e.addHours(a, -12) : !i && s < 12 ? e.addHours(a, 12) : a;
    }
    case "hours":
      return e.setHours(a, e.getHours(r));
    case "minutes":
      return e.setMinutes(a, e.getMinutes(r));
    case "seconds":
      return e.setSeconds(a, e.getSeconds(r));
    default:
      return a;
  }
}, jc = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
}, Bc = (e, t, o, r, a, i) => (
  // cloning sections before sort to avoid mutating it
  [...r].sort((s, l) => jc[s.type] - jc[l.type]).reduce((s, l) => !i || l.modified ? j1(e, t, l, o, s) : s, a)
), B1 = () => navigator.userAgent.toLowerCase().indexOf("android") > -1, z1 = (e, t) => {
  const o = {};
  if (!t)
    return e.forEach((c, u) => {
      const d = u === 0 ? null : u - 1, p = u === e.length - 1 ? null : u + 1;
      o[u] = {
        leftIndex: d,
        rightIndex: p
      };
    }), {
      neighbors: o,
      startIndex: 0,
      endIndex: e.length - 1
    };
  const r = {}, a = {};
  let i = 0, s = 0, l = e.length - 1;
  for (; l >= 0; ) {
    s = e.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (c, u) => {
        var d;
        return u >= i && ((d = c.endSeparator) == null ? void 0 : d.includes(" ")) && // Special case where the spaces were not there in the initial input
        c.endSeparator !== " / ";
      }
    ), s === -1 && (s = e.length - 1);
    for (let c = s; c >= i; c -= 1)
      a[c] = l, r[l] = c, l -= 1;
    i = s + 1;
  }
  return e.forEach((c, u) => {
    const d = a[u], p = d === 0 ? null : r[d - 1], f = d === e.length - 1 ? null : r[d + 1];
    o[u] = {
      leftIndex: p,
      rightIndex: f
    };
  }), {
    neighbors: o,
    startIndex: r[0],
    endIndex: r[e.length - 1]
  };
}, Ri = (e, t) => e == null ? null : e === "all" ? "all" : typeof e == "string" ? t.findIndex((o) => o.type === e) : e, W1 = (e, t) => {
  if (e.value)
    switch (e.type) {
      case "month": {
        if (e.contentType === "digit")
          return t.format(t.setMonth(t.date(), Number(e.value) - 1), "month");
        const o = t.parse(e.value, e.format);
        return o ? t.format(o, "month") : void 0;
      }
      case "day":
        return e.contentType === "digit" ? t.format(t.setDate(t.startOfYear(t.date()), Number(e.value)), "dayOfMonthFull") : e.value;
      case "weekDay":
        return;
      default:
        return;
    }
}, U1 = (e, t) => {
  if (e.value)
    switch (e.type) {
      case "weekDay":
        return e.contentType === "letter" ? void 0 : Number(e.value);
      case "meridiem": {
        const o = t.parse(`01:00 ${e.value}`, `${t.formats.hours12h}:${t.formats.minutes} ${e.format}`);
        return o ? t.getHours(o) >= 12 ? 1 : 0 : void 0;
      }
      case "day":
        return e.contentType === "digit-with-letter" ? parseInt(e.value, 10) : Number(e.value);
      case "month": {
        if (e.contentType === "digit")
          return Number(e.value);
        const o = t.parse(e.value, e.format);
        return o ? t.getMonth(o) + 1 : void 0;
      }
      default:
        return e.contentType !== "letter" ? Number(e.value) : void 0;
    }
}, q1 = ["value", "referenceDate"], Zt = {
  emptyValue: null,
  getTodayValue: ip,
  getInitialReferenceValue: (e) => {
    let {
      value: t,
      referenceDate: o
    } = e, r = ge(e, q1);
    return t != null && r.utils.isValid(t) ? t : o ?? M1(r);
  },
  cleanValue: P1,
  areValuesEqual: R1,
  isSameError: (e, t) => e === t,
  hasError: (e) => e != null,
  defaultErrorState: null,
  getTimezone: (e, t) => t == null || !e.isValid(t) ? null : e.getTimezone(t),
  setTimezone: (e, t, o) => o == null ? null : e.setTimezone(o, t)
}, H1 = {
  updateReferenceValue: (e, t, o) => t == null || !e.isValid(t) ? o : t,
  getSectionsFromValue: (e, t, o, r) => !e.isValid(t) && !!o ? o : r(t),
  getV7HiddenInputValueFromSections: F1,
  getV6InputValueFromSections: V1,
  getActiveDateManager: (e, t) => ({
    date: t.value,
    referenceDate: t.referenceValue,
    getSections: (o) => o,
    getNewValuesFromNewActiveDate: (o) => ({
      value: o,
      referenceValue: o == null || !e.isValid(o) ? t.referenceValue : o
    })
  }),
  parseValueStr: (e, t, o) => o(e.trim(), t)
};
function Y1(e) {
  return pe("MuiPickersDay", e);
}
const yn = de("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]), K1 = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"], G1 = (e) => {
  const {
    selected: t,
    disableMargin: o,
    disableHighlightToday: r,
    today: a,
    disabled: i,
    outsideCurrentMonth: s,
    showDaysOutsideCurrentMonth: l,
    classes: c
  } = e, u = s && !l;
  return me({
    root: ["root", t && !u && "selected", i && "disabled", !o && "dayWithMargin", !r && a && "today", s && l && "dayOutsideMonth", u && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  }, Y1, c);
}, pp = ({
  theme: e
}) => W({}, e.typography.caption, {
  width: Go,
  height: Go,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.short
  }),
  color: (e.vars || e).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})` : to(e.palette.primary.main, e.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})` : to(e.palette.primary.main, e.palette.action.focusOpacity),
    [`&.${yn.selected}`]: {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${yn.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    fontWeight: e.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  },
  [`&.${yn.disabled}:not(.${yn.selected})`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${yn.disabled}&.${yn.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: !1
    },
    style: {
      margin: `0 ${Ia}px`
    }
  }, {
    props: {
      outsideCurrentMonth: !0,
      showDaysOutsideCurrentMonth: !0
    },
    style: {
      color: (e.vars || e).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: !1,
      today: !0
    },
    style: {
      [`&:not(.${yn.selected})`]: {
        border: `1px solid ${(e.vars || e).palette.text.secondary}`
      }
    }
  }]
}), fp = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, !o.disableMargin && t.dayWithMargin, !o.disableHighlightToday && o.today && t.today, !o.outsideCurrentMonth && o.showDaysOutsideCurrentMonth && t.dayOutsideMonth, o.outsideCurrentMonth && !o.showDaysOutsideCurrentMonth && t.hiddenDaySpacingFiller];
}, X1 = Q(cn, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: fp
})(pp), Z1 = Q("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: fp
})(({
  theme: e
}) => W({}, pp({
  theme: e
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), To = () => {
}, mp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersDay"
  }), {
    autoFocus: a = !1,
    className: i,
    day: s,
    disabled: l = !1,
    disableHighlightToday: c = !1,
    disableMargin: u = !1,
    isAnimating: d,
    onClick: p,
    onDaySelect: f,
    onFocus: v = To,
    onBlur: h = To,
    onKeyDown: b = To,
    onMouseDown: y = To,
    onMouseEnter: C = To,
    outsideCurrentMonth: S,
    selected: w = !1,
    showDaysOutsideCurrentMonth: x = !1,
    children: g,
    today: P = !1
  } = r, R = ge(r, K1), I = W({}, r, {
    autoFocus: a,
    disabled: l,
    disableHighlightToday: c,
    disableMargin: u,
    selected: w,
    showDaysOutsideCurrentMonth: x,
    today: P
  }), j = G1(I), M = Ae(), N = m.useRef(null), q = Se(N, o);
  et(() => {
    a && !l && !d && !S && N.current.focus();
  }, [a, l, d, S]);
  const k = ($) => {
    y($), S && $.preventDefault();
  }, A = ($) => {
    l || f(s), S && $.currentTarget.focus(), p && p($);
  };
  return S && !x ? /* @__PURE__ */ E(Z1, {
    className: ae(j.root, j.hiddenDaySpacingFiller, i),
    ownerState: I,
    role: R.role
  }) : /* @__PURE__ */ E(X1, W({
    className: ae(j.root, i),
    ref: q,
    centerRipple: !0,
    disabled: l,
    tabIndex: w ? 0 : -1,
    onKeyDown: ($) => b($, s),
    onFocus: ($) => v($, s),
    onBlur: ($) => h($, s),
    onMouseEnter: ($) => C($, s),
    onClick: A,
    onMouseDown: k
  }, R, {
    ownerState: I,
    children: g || M.format(s, "dayOfMonth")
  }));
});
process.env.NODE_ENV !== "production" && (mp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: n.oneOfType([n.func, n.shape({
    current: n.shape({
      focusVisible: n.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  component: n.elementType,
  /**
   * The date to show.
   */
  day: n.object.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: n.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: n.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: n.string,
  isAnimating: n.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: n.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: n.bool.isRequired,
  onBlur: n.func,
  onDaySelect: n.func.isRequired,
  onFocus: n.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: n.func,
  onKeyDown: n.func,
  onMouseEnter: n.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: n.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: n.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * @default 0
   */
  tabIndex: n.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: n.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: n.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      pulsate: n.func.isRequired,
      start: n.func.isRequired,
      stop: n.func.isRequired
    })
  })])
});
const Q1 = /* @__PURE__ */ m.memo(mp);
function hp(e, t, o, r) {
  const {
    value: a,
    onError: i
  } = e, s = Mn(), l = m.useRef(r), c = t({
    adapter: s,
    value: a,
    props: e
  });
  return m.useEffect(() => {
    i && !o(c, l.current) && i(c, a), l.current = c;
  }, [o, i, l, c, a]), c;
}
const J1 = ({
  utils: e,
  format: t
}) => {
  let o = 10, r = t, a = e.expandFormat(t);
  for (; a !== r; )
    if (r = a, a = e.expandFormat(r), o -= 1, o < 0)
      throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the picker component.");
  return a;
}, eS = ({
  utils: e,
  expandedFormat: t
}) => {
  const o = [], {
    start: r,
    end: a
  } = e.escapedCharacters, i = new RegExp(`(\\${r}[^\\${a}]*\\${a})+`, "g");
  let s = null;
  for (; s = i.exec(t); )
    o.push({
      start: s.index,
      end: i.lastIndex - 1
    });
  return o;
}, tS = (e, t, o, r, a) => {
  switch (r.type) {
    case "year":
      return o.fieldYearPlaceholder({
        digitAmount: e.formatByString(e.date(void 0, t), a).length,
        format: a
      });
    case "month":
      return o.fieldMonthPlaceholder({
        contentType: r.contentType,
        format: a
      });
    case "day":
      return o.fieldDayPlaceholder({
        format: a
      });
    case "weekDay":
      return o.fieldWeekDayPlaceholder({
        contentType: r.contentType,
        format: a
      });
    case "hours":
      return o.fieldHoursPlaceholder({
        format: a
      });
    case "minutes":
      return o.fieldMinutesPlaceholder({
        format: a
      });
    case "seconds":
      return o.fieldSecondsPlaceholder({
        format: a
      });
    case "meridiem":
      return o.fieldMeridiemPlaceholder({
        format: a
      });
    default:
      return a;
  }
}, nS = ({
  utils: e,
  timezone: t,
  date: o,
  shouldRespectLeadingZeros: r,
  localeText: a,
  localizedDigits: i,
  now: s,
  token: l,
  startSeparator: c
}) => {
  if (l === "")
    throw new Error("MUI X: Should not call `commitToken` with an empty token");
  const u = ks(e, l), d = dp(e, t, u.contentType, u.type, l), p = r ? d : u.contentType === "digit", f = o != null && e.isValid(o);
  let v = f ? e.formatByString(o, l) : "", h = null;
  if (p)
    if (d)
      h = v === "" ? e.formatByString(s, l).length : v.length;
    else {
      if (u.maxLength == null)
        throw new Error(`MUI X: The token ${l} should have a 'maxDigitNumber' property on it's adapter`);
      h = u.maxLength, f && (v = Ds(lp(Tn(v, i), h), i));
    }
  return W({}, u, {
    format: l,
    maxLength: h,
    value: v,
    placeholder: tS(e, t, a, u, l),
    hasLeadingZerosInFormat: d,
    hasLeadingZerosInInput: p,
    startSeparator: c,
    endSeparator: "",
    modified: !1
  });
}, oS = (e) => {
  var v;
  const {
    utils: t,
    expandedFormat: o,
    escapedParts: r
  } = e, a = t.date(void 0), i = [];
  let s = "";
  const l = Object.keys(t.formatTokenMap).sort((h, b) => b.length - h.length), c = /^([a-zA-Z]+)/, u = new RegExp(`^(${l.join("|")})*$`), d = new RegExp(`^(${l.join("|")})`), p = (h) => r.find((b) => b.start <= h && b.end >= h);
  let f = 0;
  for (; f < o.length; ) {
    const h = p(f), b = h != null, y = (v = c.exec(o.slice(f))) == null ? void 0 : v[1];
    if (!b && y != null && u.test(y)) {
      let C = y;
      for (; C.length > 0; ) {
        const S = d.exec(C)[1];
        C = C.slice(S.length), i.push(nS(W({}, e, {
          now: a,
          token: S,
          startSeparator: s
        }))), s = "";
      }
      f += y.length;
    } else {
      const C = o[f];
      b && (h == null ? void 0 : h.start) === f || (h == null ? void 0 : h.end) === f || (i.length === 0 ? s += C : i[i.length - 1].endSeparator += C), f += 1;
    }
  }
  return i.length === 0 && s.length > 0 && i.push({
    type: "empty",
    contentType: "letter",
    maxLength: null,
    format: "",
    value: "",
    placeholder: "",
    hasLeadingZerosInFormat: !1,
    hasLeadingZerosInInput: !1,
    startSeparator: s,
    endSeparator: "",
    modified: !1
  }), i;
}, rS = ({
  isRtl: e,
  formatDensity: t,
  sections: o
}) => o.map((r) => {
  const a = (i) => {
    let s = i;
    return e && s !== null && s.includes(" ") && (s = `⁩${s}⁦`), t === "spacious" && ["/", ".", "-"].includes(s) && (s = ` ${s} `), s;
  };
  return r.startSeparator = a(r.startSeparator), r.endSeparator = a(r.endSeparator), r;
}), zc = (e) => {
  let t = J1(e);
  e.isRtl && e.enableAccessibleFieldDOMStructure && (t = t.split(" ").reverse().join(" "));
  const o = eS(W({}, e, {
    expandedFormat: t
  })), r = oS(W({}, e, {
    expandedFormat: t,
    escapedParts: o
  }));
  return rS(W({}, e, {
    sections: r
  }));
}, aS = (e) => {
  const t = Ae(), o = on(), r = Mn(), a = It(), {
    valueManager: i,
    fieldValueManager: s,
    valueType: l,
    validator: c,
    internalProps: u,
    internalProps: {
      value: d,
      defaultValue: p,
      referenceDate: f,
      onChange: v,
      format: h,
      formatDensity: b = "dense",
      selectedSections: y,
      onSelectedSectionsChange: C,
      shouldRespectLeadingZeros: S = !1,
      timezone: w,
      enableAccessibleFieldDOMStructure: x = !1
    }
  } = e, {
    timezone: g,
    value: P,
    handleValueChange: R
  } = Rs({
    timezone: w,
    value: d,
    defaultValue: p,
    onChange: v,
    valueManager: i
  }), I = m.useMemo(() => N1(t), [t]), j = m.useMemo(() => L1(t, I, g), [t, I, g]), M = m.useCallback((L, z = null) => s.getSectionsFromValue(t, L, z, (X) => zc({
    utils: t,
    timezone: g,
    localeText: o,
    localizedDigits: I,
    format: h,
    date: X,
    formatDensity: b,
    shouldRespectLeadingZeros: S,
    enableAccessibleFieldDOMStructure: x,
    isRtl: a
  })), [s, h, o, I, a, S, t, b, g, x]), [N, q] = m.useState(() => {
    const L = M(P);
    Lc(L, l);
    const z = {
      sections: L,
      value: P,
      referenceValue: i.emptyValue,
      tempValueStrAndroid: null
    }, X = D1(L), ee = i.getInitialReferenceValue({
      referenceDate: f,
      value: P,
      utils: t,
      props: u,
      granularity: X,
      timezone: g
    });
    return W({}, z, {
      referenceValue: ee
    });
  }), [k, A] = $t({
    controlled: y,
    default: null,
    name: "useField",
    state: "selectedSections"
  }), $ = (L) => {
    A(L), C == null || C(L);
  }, D = m.useMemo(() => Ri(k, N.sections), [k, N.sections]), V = D === "all" ? 0 : D, O = ({
    value: L,
    referenceValue: z,
    sections: X
  }) => {
    if (q((ne) => W({}, ne, {
      sections: X,
      value: L,
      referenceValue: z,
      tempValueStrAndroid: null
    })), i.areValuesEqual(t, N.value, L))
      return;
    const ee = {
      validationError: c({
        adapter: r,
        value: L,
        props: W({}, u, {
          value: L,
          timezone: g
        })
      })
    };
    R(L, ee);
  }, U = (L, z) => {
    const X = [...N.sections];
    return X[L] = W({}, X[L], {
      value: z,
      modified: !0
    }), X;
  }, F = () => {
    O({
      value: i.emptyValue,
      referenceValue: N.referenceValue,
      sections: M(i.emptyValue)
    });
  }, Y = () => {
    if (V == null)
      return;
    const L = N.sections[V], z = s.getActiveDateManager(t, N, L), ee = z.getSections(N.sections).filter((_) => _.value !== "").length === (L.value === "" ? 0 : 1), ne = U(V, ""), G = ee ? null : t.getInvalidDate(), te = z.getNewValuesFromNewActiveDate(G);
    O(W({}, te, {
      sections: ne
    }));
  }, K = (L) => {
    const z = (ne, G) => {
      const te = t.parse(ne, h);
      if (te == null || !t.isValid(te))
        return null;
      const _ = zc({
        utils: t,
        timezone: g,
        localeText: o,
        localizedDigits: I,
        format: h,
        date: te,
        formatDensity: b,
        shouldRespectLeadingZeros: S,
        enableAccessibleFieldDOMStructure: x,
        isRtl: a
      });
      return Bc(t, g, te, _, G, !1);
    }, X = s.parseValueStr(L, N.referenceValue, z), ee = s.updateReferenceValue(t, X, N.referenceValue);
    O({
      value: X,
      referenceValue: ee,
      sections: M(X, N.sections)
    });
  }, J = ({
    activeSection: L,
    newSectionValue: z,
    shouldGoToNextSection: X
  }) => {
    X && V < N.sections.length - 1 && $(V + 1);
    const ee = s.getActiveDateManager(t, N, L), ne = U(V, z), G = ee.getSections(ne), te = A1(t, G, I);
    let _, B;
    if (te != null && t.isValid(te)) {
      const H = Bc(t, g, te, G, ee.referenceDate, !0);
      _ = ee.getNewValuesFromNewActiveDate(H), B = !0;
    } else
      _ = ee.getNewValuesFromNewActiveDate(te), B = (te != null && !t.isValid(te)) != (ee.date != null && !t.isValid(ee.date));
    return B ? O(W({}, _, {
      sections: ne
    })) : q((H) => W({}, H, _, {
      sections: ne,
      tempValueStrAndroid: null
    }));
  }, Z = (L) => q((z) => W({}, z, {
    tempValueStrAndroid: L
  }));
  return m.useEffect(() => {
    const L = M(N.value);
    Lc(L, l), q((z) => W({}, z, {
      sections: L
    }));
  }, [h, t.locale, a]), m.useEffect(() => {
    let L;
    i.areValuesEqual(t, N.value, P) ? L = i.getTimezone(t, N.value) !== i.getTimezone(t, P) : L = !0, L && q((z) => W({}, z, {
      value: P,
      referenceValue: s.updateReferenceValue(t, P, z.referenceValue),
      sections: M(P)
    }));
  }, [P]), {
    state: N,
    activeSectionIndex: V,
    parsedSelectedSections: D,
    setSelectedSections: $,
    clearValue: F,
    clearActiveSection: Y,
    updateSectionValue: J,
    updateValueFromValueStr: K,
    setTempAndroidValueStr: Z,
    getSectionsFromValue: M,
    sectionsValueBoundaries: j,
    localizedDigits: I,
    timezone: g
  };
}, iS = 5e3, Ln = (e) => e.saveQuery != null, sS = ({
  sections: e,
  updateSectionValue: t,
  sectionsValueBoundaries: o,
  localizedDigits: r,
  setTempAndroidValueStr: a,
  timezone: i
}) => {
  const s = Ae(), [l, c] = m.useState(null), u = se(() => c(null));
  m.useEffect(() => {
    var h;
    l != null && ((h = e[l.sectionIndex]) == null ? void 0 : h.type) !== l.sectionType && u();
  }, [e, l, u]), m.useEffect(() => {
    if (l != null) {
      const h = setTimeout(() => u(), iS);
      return () => {
        clearTimeout(h);
      };
    }
    return () => {
    };
  }, [l, u]);
  const d = ({
    keyPressed: h,
    sectionIndex: b
  }, y, C) => {
    const S = h.toLowerCase(), w = e[b];
    if (l != null && (!C || C(l.value)) && l.sectionIndex === b) {
      const g = `${l.value}${S}`, P = y(g, w);
      if (!Ln(P))
        return c({
          sectionIndex: b,
          value: g,
          sectionType: w.type
        }), P;
    }
    const x = y(S, w);
    return Ln(x) && !x.saveQuery ? (u(), null) : (c({
      sectionIndex: b,
      value: S,
      sectionType: w.type
    }), Ln(x) ? null : x);
  }, p = (h) => {
    const b = (S, w, x) => {
      const g = w.filter((P) => P.toLowerCase().startsWith(x));
      return g.length === 0 ? {
        saveQuery: !1
      } : {
        sectionValue: g[0],
        shouldGoToNextSection: g.length === 1
      };
    }, y = (S, w, x, g) => {
      const P = (R) => sp(s, i, w.type, R);
      if (w.contentType === "letter")
        return b(w.format, P(w.format), S);
      if (x && g != null && ks(s, x).contentType === "letter") {
        const R = P(x), I = b(x, R, S);
        return Ln(I) ? {
          saveQuery: !1
        } : W({}, I, {
          sectionValue: g(I.sectionValue, R)
        });
      }
      return {
        saveQuery: !1
      };
    };
    return d(h, (S, w) => {
      switch (w.type) {
        case "month": {
          const x = (g) => Fc(s, g, s.formats.month, w.format);
          return y(S, w, s.formats.month, x);
        }
        case "weekDay": {
          const x = (g, P) => P.indexOf(g).toString();
          return y(S, w, s.formats.weekday, x);
        }
        case "meridiem":
          return y(S, w);
        default:
          return {
            saveQuery: !1
          };
      }
    });
  }, f = (h) => {
    const b = (C, S) => {
      const w = Tn(C, r), x = Number(w), g = o[S.type]({
        currentDate: null,
        format: S.format,
        contentType: S.contentType
      });
      if (x > g.maximum)
        return {
          saveQuery: !1
        };
      if (x < g.minimum)
        return {
          saveQuery: !0
        };
      const P = x * 10 > g.maximum || w.length === g.maximum.toString().length;
      return {
        sectionValue: cp(s, x, g, r, S),
        shouldGoToNextSection: P
      };
    };
    return d(h, (C, S) => {
      if (S.contentType === "digit" || S.contentType === "digit-with-letter")
        return b(C, S);
      if (S.type === "month") {
        const w = dp(s, i, "digit", "month", "MM"), x = b(C, {
          type: S.type,
          format: "MM",
          hasLeadingZerosInFormat: w,
          hasLeadingZerosInInput: !0,
          contentType: "digit",
          maxLength: 2
        });
        if (Ln(x))
          return x;
        const g = Fc(s, x.sectionValue, "MM", S.format);
        return W({}, x, {
          sectionValue: g
        });
      }
      if (S.type === "weekDay") {
        const w = b(C, S);
        if (Ln(w))
          return w;
        const x = _a(s, i, S.format)[Number(w.sectionValue) - 1];
        return W({}, w, {
          sectionValue: x
        });
      }
      return {
        saveQuery: !1
      };
    }, (C) => Ac(C, r));
  };
  return {
    applyCharacterEditing: se((h) => {
      const b = e[h.sectionIndex], C = Ac(h.keyPressed, r) ? f(W({}, h, {
        keyPressed: Ds(h.keyPressed, r)
      })) : p(h);
      if (C == null) {
        a(null);
        return;
      }
      t({
        activeSection: b,
        newSectionValue: C.sectionValue,
        shouldGoToNextSection: C.shouldGoToNextSection
      });
    }),
    resetCharacterQuery: u
  };
};
function lS(e, t) {
  return Array.isArray(t) ? t.every((o) => e.indexOf(o) !== -1) : e.indexOf(t) !== -1;
}
const cS = (e, t) => (o) => {
  (o.key === "Enter" || o.key === " ") && (e(o), o.preventDefault(), o.stopPropagation());
}, Ct = (e = document) => {
  const t = e.activeElement;
  return t ? t.shadowRoot ? Ct(t.shadowRoot) : t : null;
}, uS = "@media (pointer: fine)", dS = (e) => {
  const {
    internalProps: {
      disabled: t,
      readOnly: o = !1
    },
    forwardedProps: {
      sectionListRef: r,
      onBlur: a,
      onClick: i,
      onFocus: s,
      onInput: l,
      onPaste: c,
      focused: u,
      autoFocus: d = !1
    },
    fieldValueManager: p,
    applyCharacterEditing: f,
    resetCharacterQuery: v,
    setSelectedSections: h,
    parsedSelectedSections: b,
    state: y,
    clearActiveSection: C,
    clearValue: S,
    updateSectionValue: w,
    updateValueFromValueStr: x,
    sectionOrder: g,
    areAllSectionsEmpty: P,
    sectionsValueBoundaries: R
  } = e, I = m.useRef(null), j = Se(r, I), M = on(), N = Ae(), q = en(), [k, A] = m.useState(!1), $ = m.useMemo(() => ({
    syncSelectionToDOM: () => {
      if (!I.current)
        return;
      const B = document.getSelection();
      if (!B)
        return;
      if (b == null) {
        B.rangeCount > 0 && I.current.getRoot().contains(B.getRangeAt(0).startContainer) && B.removeAllRanges(), k && I.current.getRoot().blur();
        return;
      }
      if (!I.current.getRoot().contains(Ct(document)))
        return;
      const H = new window.Range();
      let oe;
      b === "all" ? oe = I.current.getRoot() : y.sections[b].type === "empty" ? oe = I.current.getSectionContainer(b) : oe = I.current.getSectionContent(b), H.selectNodeContents(oe), oe.focus(), B.removeAllRanges(), B.addRange(H);
    },
    getActiveSectionIndexFromDOM: () => {
      const B = Ct(document);
      return !B || !I.current || !I.current.getRoot().contains(B) ? null : I.current.getSectionIndexFromDOMElement(B);
    },
    focusField: (B = 0) => {
      if (!I.current)
        return;
      const H = Ri(B, y.sections);
      A(!0), I.current.getSectionContent(H).focus();
    },
    setSelectedSections: (B) => {
      if (!I.current)
        return;
      const H = Ri(B, y.sections);
      A((H === "all" ? 0 : H) !== null), h(B);
    },
    isFieldFocused: () => {
      const B = Ct(document);
      return !!I.current && I.current.getRoot().contains(B);
    }
  }), [b, h, y.sections, k]), D = se((B) => {
    if (!I.current)
      return;
    const H = y.sections[B];
    I.current.getSectionContent(B).innerHTML = H.value || H.placeholder, $.syncSelectionToDOM();
  }), V = se((B, ...H) => {
    B.isDefaultPrevented() || !I.current || (A(!0), i == null || i(B, ...H), b === "all" ? setTimeout(() => {
      const oe = document.getSelection().getRangeAt(0).startOffset;
      if (oe === 0) {
        h(g.startIndex);
        return;
      }
      let he = 0, ie = 0;
      for (; ie < oe && he < y.sections.length; ) {
        const ce = y.sections[he];
        he += 1, ie += `${ce.startSeparator}${ce.value || ce.placeholder}${ce.endSeparator}`.length;
      }
      h(he - 1);
    }) : k ? I.current.getRoot().contains(B.target) || h(g.startIndex) : (A(!0), h(g.startIndex)));
  }), O = se((B) => {
    if (l == null || l(B), !I.current || b !== "all")
      return;
    const oe = B.target.textContent ?? "";
    I.current.getRoot().innerHTML = y.sections.map((he) => `${he.startSeparator}${he.value || he.placeholder}${he.endSeparator}`).join(""), $.syncSelectionToDOM(), oe.length === 0 || oe.charCodeAt(0) === 10 ? (v(), S(), h("all")) : oe.length > 1 ? x(oe) : f({
      keyPressed: oe,
      sectionIndex: 0
    });
  }), U = se((B) => {
    if (c == null || c(B), o || b !== "all") {
      B.preventDefault();
      return;
    }
    const H = B.clipboardData.getData("text");
    B.preventDefault(), v(), x(H);
  }), F = se((...B) => {
    if (s == null || s(...B), k || !I.current)
      return;
    A(!0), I.current.getSectionIndexFromDOMElement(Ct(document)) != null || h(g.startIndex);
  }), Y = se((...B) => {
    a == null || a(...B), setTimeout(() => {
      if (!I.current)
        return;
      const H = Ct(document);
      !I.current.getRoot().contains(H) && (A(!1), h(null));
    });
  }), K = se((B) => (H) => {
    H.isDefaultPrevented() || o || h(B);
  }), J = se((B) => {
    B.preventDefault();
  }), Z = se((B) => () => {
    o || h(B);
  }), L = se((B) => {
    if (B.preventDefault(), o || typeof b != "number")
      return;
    const H = y.sections[b], oe = B.clipboardData.getData("text"), he = /^[a-zA-Z]+$/.test(oe), ie = /^[0-9]+$/.test(oe), ce = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(oe);
    H.contentType === "letter" && he || H.contentType === "digit" && ie || H.contentType === "digit-with-letter" && ce ? (v(), w({
      activeSection: H,
      newSectionValue: oe,
      shouldGoToNextSection: !0
    })) : !he && !ie && (v(), x(oe));
  }), z = se((B) => {
    B.preventDefault(), B.dataTransfer.dropEffect = "none";
  }), X = se((B) => {
    if (!I.current)
      return;
    const H = B.target, oe = H.textContent ?? "", he = I.current.getSectionIndexFromDOMElement(H), ie = y.sections[he];
    if (o || !I.current) {
      D(he);
      return;
    }
    if (oe.length === 0) {
      if (ie.value === "") {
        D(he);
        return;
      }
      const ce = B.nativeEvent.inputType;
      if (ce === "insertParagraph" || ce === "insertLineBreak") {
        D(he);
        return;
      }
      v(), C();
      return;
    }
    f({
      keyPressed: oe,
      sectionIndex: he
    }), D(he);
  });
  et(() => {
    if (!(!k || !I.current)) {
      if (b === "all")
        I.current.getRoot().focus();
      else if (typeof b == "number") {
        const B = I.current.getSectionContent(b);
        B && B.focus();
      }
    }
  }, [b, k]);
  const ee = m.useMemo(() => y.sections.reduce((B, H) => (B[H.type] = R[H.type]({
    currentDate: null,
    contentType: H.contentType,
    format: H.format
  }), B), {}), [R, y.sections]), ne = b === "all", G = m.useMemo(() => y.sections.map((B, H) => {
    const oe = !ne && !t && !o;
    return {
      container: {
        "data-sectionindex": H,
        onClick: K(H)
      },
      content: {
        tabIndex: ne || H > 0 ? -1 : 0,
        contentEditable: !ne && !t && !o,
        role: "spinbutton",
        id: `${q}-${B.type}`,
        "aria-labelledby": `${q}-${B.type}`,
        "aria-readonly": o,
        "aria-valuenow": U1(B, N),
        "aria-valuemin": ee[B.type].minimum,
        "aria-valuemax": ee[B.type].maximum,
        "aria-valuetext": B.value ? W1(B, N) : M.empty,
        "aria-label": M[B.type],
        "aria-disabled": t,
        spellCheck: oe ? !1 : void 0,
        autoCapitalize: oe ? "off" : void 0,
        autoCorrect: oe ? "off" : void 0,
        [parseInt(m.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: oe ? "next" : void 0,
        children: B.value || B.placeholder,
        onInput: X,
        onPaste: L,
        onFocus: Z(H),
        onDragOver: z,
        onMouseUp: J,
        inputMode: B.contentType === "letter" ? "text" : "numeric"
      },
      before: {
        children: B.startSeparator
      },
      after: {
        children: B.endSeparator
      }
    };
  }), [y.sections, Z, L, z, X, K, J, t, o, ne, M, N, ee, q]), te = se((B) => {
    x(B.target.value);
  }), _ = m.useMemo(() => P ? "" : p.getV7HiddenInputValueFromSections(y.sections), [P, y.sections, p]);
  return m.useEffect(() => {
    if (I.current == null)
      throw new Error(["MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`", "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.", "", "If you want to keep using an `<input />` HTML element for the editing, please remove the `enableAccessibleFieldDOMStructure` prop from your picker or field component:", "", "<DatePicker slots={{ textField: MyCustomTextField }} />", "", "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"].join(`
`));
    d && I.current && I.current.getSectionContent(g.startIndex).focus();
  }, []), {
    interactions: $,
    returnedValue: {
      // Forwarded
      autoFocus: d,
      readOnly: o,
      focused: u ?? k,
      sectionListRef: j,
      onBlur: Y,
      onClick: V,
      onFocus: F,
      onInput: O,
      onPaste: U,
      // Additional
      enableAccessibleFieldDOMStructure: !0,
      elements: G,
      // TODO v7: Try to set to undefined when there is a section selected.
      tabIndex: b === 0 ? -1 : 0,
      contentEditable: ne,
      value: _,
      onChange: te,
      areAllSectionsEmpty: P
    }
  };
}, Wn = (e) => e.replace(/[\u2066\u2067\u2068\u2069]/g, ""), pS = (e, t, o) => {
  let r = 0, a = o ? 1 : 0;
  const i = [];
  for (let s = 0; s < e.length; s += 1) {
    const l = e[s], c = Ms(l, o ? "input-rtl" : "input-ltr", t), u = `${l.startSeparator}${c}${l.endSeparator}`, d = Wn(u).length, p = u.length, f = Wn(c), v = a + (f === "" ? 0 : c.indexOf(f[0])) + l.startSeparator.length, h = v + f.length;
    i.push(W({}, l, {
      start: r,
      end: r + d,
      startInInput: v,
      endInInput: h
    })), r += d, a += p;
  }
  return i;
}, fS = (e) => {
  const t = It(), o = m.useRef(), {
    forwardedProps: {
      onFocus: r,
      onClick: a,
      onPaste: i,
      onBlur: s,
      inputRef: l,
      placeholder: c
    },
    internalProps: {
      readOnly: u = !1
    },
    parsedSelectedSections: d,
    activeSectionIndex: p,
    state: f,
    fieldValueManager: v,
    valueManager: h,
    applyCharacterEditing: b,
    resetCharacterQuery: y,
    updateSectionValue: C,
    updateValueFromValueStr: S,
    clearActiveSection: w,
    clearValue: x,
    setTempAndroidValueStr: g,
    setSelectedSections: P,
    getSectionsFromValue: R,
    areAllSectionsEmpty: I,
    localizedDigits: j
  } = e, M = m.useRef(null), N = Se(l, M), q = m.useMemo(() => pS(f.sections, j, t), [f.sections, j, t]), k = m.useMemo(() => ({
    syncSelectionToDOM: () => {
      if (!M.current)
        return;
      if (d == null) {
        M.current.scrollLeft && (M.current.scrollLeft = 0);
        return;
      }
      if (M.current !== Ct(document))
        return;
      const L = M.current.scrollTop;
      if (d === "all")
        M.current.select();
      else {
        const z = q[d], X = z.type === "empty" ? z.startInInput - z.startSeparator.length : z.startInInput, ee = z.type === "empty" ? z.endInInput + z.endSeparator.length : z.endInInput;
        (X !== M.current.selectionStart || ee !== M.current.selectionEnd) && M.current === Ct(document) && M.current.setSelectionRange(X, ee);
      }
      M.current.scrollTop = L;
    },
    getActiveSectionIndexFromDOM: () => {
      var ne;
      const L = M.current.selectionStart ?? 0, z = M.current.selectionEnd ?? 0, X = !!((ne = M.current) != null && ne.readOnly);
      if (L === 0 && z === 0 || X)
        return null;
      const ee = L <= q[0].startInInput ? 1 : q.findIndex((G) => G.startInInput - G.startSeparator.length > L);
      return ee === -1 ? q.length - 1 : ee - 1;
    },
    focusField: (L = 0) => {
      var z;
      (z = M.current) == null || z.focus(), P(L);
    },
    setSelectedSections: (L) => P(L),
    isFieldFocused: () => M.current === Ct(document)
  }), [M, d, q, P]), A = () => {
    if (u) {
      P(null);
      return;
    }
    const L = M.current.selectionStart ?? 0;
    let z;
    L <= q[0].startInInput || L >= q[q.length - 1].endInInput ? z = 1 : z = q.findIndex((ee) => ee.startInInput - ee.startSeparator.length > L);
    const X = z === -1 ? q.length - 1 : z - 1;
    P(X);
  }, $ = se((...L) => {
    r == null || r(...L);
    const z = M.current;
    clearTimeout(o.current), o.current = setTimeout(() => {
      !z || z !== M.current || p != null || u || (// avoid selecting all sections when focusing empty field without value
      z.value.length && Number(z.selectionEnd) - Number(z.selectionStart) === z.value.length ? P("all") : A());
    });
  }), D = se((L, ...z) => {
    L.isDefaultPrevented() || (a == null || a(L, ...z), A());
  }), V = se((L) => {
    if (i == null || i(L), L.preventDefault(), u)
      return;
    const z = L.clipboardData.getData("text");
    if (typeof d == "number") {
      const X = f.sections[d], ee = /^[a-zA-Z]+$/.test(z), ne = /^[0-9]+$/.test(z), G = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(z);
      if (X.contentType === "letter" && ee || X.contentType === "digit" && ne || X.contentType === "digit-with-letter" && G) {
        y(), C({
          activeSection: X,
          newSectionValue: z,
          shouldGoToNextSection: !0
        });
        return;
      }
      if (ee || ne)
        return;
    }
    y(), S(z);
  }), O = se((...L) => {
    s == null || s(...L), P(null);
  }), U = se((L) => {
    if (u)
      return;
    const z = L.target.value;
    if (z === "") {
      y(), x();
      return;
    }
    const X = L.nativeEvent.data, ee = X && X.length > 1, ne = ee ? X : z, G = Wn(ne);
    if (p == null || ee) {
      S(ee ? X : G);
      return;
    }
    let te;
    if (d === "all" && G.length === 1)
      te = G;
    else {
      const _ = Wn(v.getV6InputValueFromSections(q, j, t));
      let B = -1, H = -1;
      for (let ce = 0; ce < _.length; ce += 1)
        B === -1 && _[ce] !== G[ce] && (B = ce), H === -1 && _[_.length - ce - 1] !== G[G.length - ce - 1] && (H = ce);
      const oe = q[p];
      if (B < oe.start || _.length - H - 1 > oe.end)
        return;
      const ie = G.length - _.length + oe.end - Wn(oe.endSeparator || "").length;
      te = G.slice(oe.start + Wn(oe.startSeparator || "").length, ie);
    }
    if (te.length === 0) {
      B1() ? g(ne) : (y(), w());
      return;
    }
    b({
      keyPressed: te,
      sectionIndex: p
    });
  }), F = m.useMemo(() => c !== void 0 ? c : v.getV6InputValueFromSections(R(h.emptyValue), j, t), [c, v, R, h.emptyValue, j, t]), Y = m.useMemo(() => f.tempValueStrAndroid ?? v.getV6InputValueFromSections(f.sections, j, t), [f.sections, v, f.tempValueStrAndroid, j, t]);
  m.useEffect(() => (M.current && M.current === Ct(document) && P("all"), () => {
    clearTimeout(o.current);
  }), []);
  const K = m.useMemo(() => p == null || f.sections[p].contentType === "letter" ? "text" : "numeric", [p, f.sections]), Z = !(M.current && M.current === Ct(document)) && I;
  return {
    interactions: k,
    returnedValue: {
      // Forwarded
      readOnly: u,
      onBlur: O,
      onClick: D,
      onFocus: $,
      onPaste: V,
      inputRef: N,
      // Additional
      enableAccessibleFieldDOMStructure: !1,
      placeholder: F,
      inputMode: K,
      autoComplete: "off",
      value: Z ? "" : Y,
      onChange: U
    }
  };
}, mS = (e) => {
  const t = Ae(), {
    internalProps: o,
    internalProps: {
      unstableFieldRef: r,
      minutesStep: a,
      enableAccessibleFieldDOMStructure: i = !1,
      disabled: s = !1,
      readOnly: l = !1
    },
    forwardedProps: {
      onKeyDown: c,
      error: u,
      clearable: d,
      onClear: p
    },
    fieldValueManager: f,
    valueManager: v,
    validator: h
  } = e, b = It(), y = aS(e), {
    state: C,
    activeSectionIndex: S,
    parsedSelectedSections: w,
    setSelectedSections: x,
    clearValue: g,
    clearActiveSection: P,
    updateSectionValue: R,
    setTempAndroidValueStr: I,
    sectionsValueBoundaries: j,
    localizedDigits: M,
    timezone: N
  } = y, q = sS({
    sections: C.sections,
    updateSectionValue: R,
    sectionsValueBoundaries: j,
    localizedDigits: M,
    setTempAndroidValueStr: I,
    timezone: N
  }), {
    resetCharacterQuery: k
  } = q, A = v.areValuesEqual(t, C.value, v.emptyValue), $ = i ? dS : fS, D = m.useMemo(() => z1(C.sections, b && !i), [C.sections, b, i]), {
    returnedValue: V,
    interactions: O
  } = $(W({}, e, y, q, {
    areAllSectionsEmpty: A,
    sectionOrder: D
  })), U = se((L) => {
    switch (c == null || c(L), !0) {
      case ((L.ctrlKey || L.metaKey) && L.key.toLowerCase() === "a" && !L.shiftKey && !L.altKey): {
        L.preventDefault(), x("all");
        break;
      }
      case L.key === "ArrowRight": {
        if (L.preventDefault(), w == null)
          x(D.startIndex);
        else if (w === "all")
          x(D.endIndex);
        else {
          const z = D.neighbors[w].rightIndex;
          z !== null && x(z);
        }
        break;
      }
      case L.key === "ArrowLeft": {
        if (L.preventDefault(), w == null)
          x(D.endIndex);
        else if (w === "all")
          x(D.startIndex);
        else {
          const z = D.neighbors[w].leftIndex;
          z !== null && x(z);
        }
        break;
      }
      case L.key === "Delete": {
        if (L.preventDefault(), l)
          break;
        w == null || w === "all" ? g() : P(), k();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(L.key): {
        if (L.preventDefault(), l || S == null)
          break;
        const z = C.sections[S], X = f.getActiveDateManager(t, C, z), ee = _1(t, N, z, L.key, j, M, X.date, {
          minutesStep: a
        });
        R({
          activeSection: z,
          newSectionValue: ee,
          shouldGoToNextSection: !1
        });
        break;
      }
    }
  });
  et(() => {
    O.syncSelectionToDOM();
  });
  const F = hp(W({}, o, {
    value: C.value,
    timezone: N
  }), h, v.isSameError, v.defaultErrorState), Y = m.useMemo(() => u !== void 0 ? u : v.hasError(F), [v, F, u]);
  m.useEffect(() => {
    !Y && S == null && k();
  }, [C.referenceValue, S, Y]), m.useEffect(() => {
    C.tempValueStrAndroid != null && S != null && (k(), P());
  }, [C.sections]), m.useImperativeHandle(r, () => ({
    getSections: () => C.sections,
    getActiveSectionIndex: O.getActiveSectionIndexFromDOM,
    setSelectedSections: O.setSelectedSections,
    focusField: O.focusField,
    isFieldFocused: O.isFieldFocused
  }));
  const K = se((L, ...z) => {
    L.preventDefault(), p == null || p(L, ...z), g(), O.isFieldFocused() ? x(D.startIndex) : O.focusField(0);
  }), J = {
    onKeyDown: U,
    onClear: K,
    error: Y,
    clearable: !!(d && !A && !l && !s)
  }, Z = {
    disabled: s,
    readOnly: l
  };
  return W({}, e.forwardedProps, J, Z, V);
}, Aa = ({
  props: e,
  value: t,
  adapter: o
}) => {
  if (t === null)
    return null;
  const {
    shouldDisableDate: r,
    shouldDisableMonth: a,
    shouldDisableYear: i,
    disablePast: s,
    disableFuture: l,
    timezone: c
  } = e, u = o.utils.date(void 0, c), d = Rt(o.utils, e.minDate, o.defaultDates.minDate), p = Rt(o.utils, e.maxDate, o.defaultDates.maxDate);
  switch (!0) {
    case !o.utils.isValid(t):
      return "invalidDate";
    case !!(r && r(t)):
      return "shouldDisableDate";
    case !!(a && a(t)):
      return "shouldDisableMonth";
    case !!(i && i(t)):
      return "shouldDisableYear";
    case !!(l && o.utils.isAfterDay(t, u)):
      return "disableFuture";
    case !!(s && o.utils.isBeforeDay(t, u)):
      return "disablePast";
    case !!(d && o.utils.isBeforeDay(t, d)):
      return "minDate";
    case !!(p && o.utils.isAfterDay(t, p)):
      return "maxDate";
    default:
      return null;
  }
}, bp = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"], hS = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"], bS = ["minDateTime", "maxDateTime"], gS = [...bp, ...hS, ...bS], gp = (e) => gS.reduce((t, o) => (e.hasOwnProperty(o) && (t[o] = e[o]), t), {}), yS = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef", "enableAccessibleFieldDOMStructure", "disabled", "readOnly", "dateSeparator"], vS = (e, t) => {
  const o = W({}, e), r = {}, a = (i) => {
    o.hasOwnProperty(i) && (r[i] = o[i], delete o[i]);
  };
  return yS.forEach(a), bp.forEach(a), {
    forwardedProps: o,
    internalProps: r
  };
}, xS = (e) => {
  const t = Ae(), o = dr();
  return W({}, e, {
    disablePast: e.disablePast ?? !1,
    disableFuture: e.disableFuture ?? !1,
    format: e.format ?? t.formats.keyboardDate,
    minDate: Rt(t, e.minDate, o.minDate),
    maxDate: Rt(t, e.maxDate, o.maxDate)
  });
}, wS = (e) => {
  const t = xS(e), {
    forwardedProps: o,
    internalProps: r
  } = vS(t);
  return mS({
    forwardedProps: o,
    internalProps: r,
    valueManager: Zt,
    fieldValueManager: H1,
    validator: Aa,
    valueType: "date"
  });
}, CS = ["clearable", "onClear", "InputProps", "sx", "slots", "slotProps"], SS = ["ownerState"], ES = (e) => {
  const t = on(), {
    clearable: o,
    onClear: r,
    InputProps: a,
    sx: i,
    slots: s,
    slotProps: l
  } = e, c = ge(e, CS), u = (s == null ? void 0 : s.clearButton) ?? fn, d = Ve({
    elementType: u,
    externalSlotProps: l == null ? void 0 : l.clearButton,
    ownerState: {},
    className: "clearButton",
    additionalProps: {
      title: t.fieldClearLabel
    }
  }), p = ge(d, SS), f = (s == null ? void 0 : s.clearIcon) ?? c1, v = Ve({
    elementType: f,
    externalSlotProps: l == null ? void 0 : l.clearIcon,
    ownerState: {}
  });
  return W({}, c, {
    InputProps: W({}, a, {
      endAdornment: /* @__PURE__ */ le(m.Fragment, {
        children: [o && /* @__PURE__ */ E(gs, {
          position: "end",
          sx: {
            marginRight: a != null && a.endAdornment ? -1 : -1.5
          },
          children: /* @__PURE__ */ E(u, W({}, p, {
            onClick: r,
            children: /* @__PURE__ */ E(f, W({
              fontSize: "small"
            }, v))
          }))
        }), a == null ? void 0 : a.endAdornment]
      })
    }),
    sx: [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(i) ? i : [i]]
  });
};
function OS(e) {
  return pe("MuiPickersTextField", e);
}
de("MuiPickersTextField", ["root", "focused", "disabled", "error", "required"]);
function PS(e) {
  return pe("MuiPickersInputBase", e);
}
const Gn = de("MuiPickersInputBase", ["root", "focused", "disabled", "error", "notchedOutline", "sectionContent", "sectionBefore", "sectionAfter", "adornedStart", "adornedEnd", "input"]);
function RS(e) {
  return pe("MuiPickersSectionList", e);
}
const ko = de("MuiPickersSectionList", ["root", "section", "sectionContent"]), TS = ["slots", "slotProps", "elements", "sectionListRef"], yp = Q("div", {
  name: "MuiPickersSectionList",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  direction: "ltr /*! @noflip */",
  outline: "none"
}), vp = Q("span", {
  name: "MuiPickersSectionList",
  slot: "Section",
  overridesResolver: (e, t) => t.section
})({}), xp = Q("span", {
  name: "MuiPickersSectionList",
  slot: "SectionSeparator",
  overridesResolver: (e, t) => t.sectionSeparator
})({
  whiteSpace: "pre"
}), wp = Q("span", {
  name: "MuiPickersSectionList",
  slot: "SectionContent",
  overridesResolver: (e, t) => t.sectionContent
})({
  outline: "none"
}), kS = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    section: ["section"],
    sectionContent: ["sectionContent"]
  }, RS, t);
};
function DS(e) {
  const {
    slots: t,
    slotProps: o,
    element: r,
    classes: a
  } = e, i = (t == null ? void 0 : t.section) ?? vp, s = Ve({
    elementType: i,
    externalSlotProps: o == null ? void 0 : o.section,
    externalForwardedProps: r.container,
    className: a.section,
    ownerState: {}
  }), l = (t == null ? void 0 : t.sectionContent) ?? wp, c = Ve({
    elementType: l,
    externalSlotProps: o == null ? void 0 : o.sectionContent,
    externalForwardedProps: r.content,
    additionalProps: {
      suppressContentEditableWarning: !0
    },
    className: a.sectionContent,
    ownerState: {}
  }), u = (t == null ? void 0 : t.sectionSeparator) ?? xp, d = Ve({
    elementType: u,
    externalSlotProps: o == null ? void 0 : o.sectionSeparator,
    externalForwardedProps: r.before,
    ownerState: {
      position: "before"
    }
  }), p = Ve({
    elementType: u,
    externalSlotProps: o == null ? void 0 : o.sectionSeparator,
    externalForwardedProps: r.after,
    ownerState: {
      position: "after"
    }
  });
  return /* @__PURE__ */ le(i, W({}, s, {
    children: [/* @__PURE__ */ E(u, W({}, d)), /* @__PURE__ */ E(l, W({}, c)), /* @__PURE__ */ E(u, W({}, p))]
  }));
}
const Cp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersSectionList"
  }), {
    slots: a,
    slotProps: i,
    elements: s,
    sectionListRef: l
  } = r, c = ge(r, TS), u = kS(r), d = m.useRef(null), p = Se(o, d), f = (b) => {
    if (!d.current)
      throw new Error(`MUI X: Cannot call sectionListRef.${b} before the mount of the component.`);
    return d.current;
  };
  m.useImperativeHandle(l, () => ({
    getRoot() {
      return f("getRoot");
    },
    getSectionContainer(b) {
      return f("getSectionContainer").querySelector(`.${ko.section}[data-sectionindex="${b}"]`);
    },
    getSectionContent(b) {
      return f("getSectionContent").querySelector(`.${ko.section}[data-sectionindex="${b}"] .${ko.sectionContent}`);
    },
    getSectionIndexFromDOMElement(b) {
      const y = f("getSectionIndexFromDOMElement");
      if (b == null || !y.contains(b))
        return null;
      let C = null;
      return b.classList.contains(ko.section) ? C = b : b.classList.contains(ko.sectionContent) && (C = b.parentElement), C == null ? null : Number(C.dataset.sectionindex);
    }
  }));
  const v = (a == null ? void 0 : a.root) ?? yp, h = Ve({
    elementType: v,
    externalSlotProps: i == null ? void 0 : i.root,
    externalForwardedProps: c,
    additionalProps: {
      ref: p,
      suppressContentEditableWarning: !0
    },
    className: u.root,
    ownerState: {}
  });
  return /* @__PURE__ */ E(v, W({}, h, {
    children: h.contentEditable ? s.map(({
      content: b,
      before: y,
      after: C
    }) => `${y.children}${b.children}${C.children}`).join("") : /* @__PURE__ */ E(m.Fragment, {
      children: s.map((b, y) => /* @__PURE__ */ E(DS, {
        slots: a,
        slotProps: i,
        element: b,
        classes: u
      }, y))
    })
  }));
});
process.env.NODE_ENV !== "production" && (Cp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   */
  slots: n.object
});
const MS = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef"], $S = (e) => Math.round(e * 1e5) / 1e5, Fa = Q("div", {
  name: "MuiPickersInputBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => W({}, e.typography.body1, {
  color: (e.vars || e).palette.text.primary,
  cursor: "text",
  padding: 0,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  letterSpacing: `${$S(0.15 / 16)}em`,
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }]
})), $s = Q(yp, {
  name: "MuiPickersInputBase",
  slot: "SectionsContainer",
  overridesResolver: (e, t) => t.sectionsContainer
})(({
  theme: e
}) => ({
  padding: "4px 0 5px",
  fontFamily: e.typography.fontFamily,
  fontSize: "inherit",
  lineHeight: "1.4375em",
  // 23px
  flexGrow: 1,
  outline: "none",
  display: "flex",
  flexWrap: "nowrap",
  overflow: "hidden",
  letterSpacing: "inherit",
  // Baseline behavior
  width: "182px",
  variants: [{
    props: {
      isRtl: !0
    },
    style: {
      textAlign: "right /*! @noflip */"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      paddingTop: 1
    }
  }, {
    props: {
      adornedStart: !1,
      focused: !1,
      filled: !1
    },
    style: {
      color: "currentColor",
      opacity: 0
    }
  }, {
    // Can't use the object notation because label can be null or undefined
    props: ({
      adornedStart: t,
      focused: o,
      filled: r,
      label: a
    }) => !t && !o && !r && a == null,
    style: e.vars ? {
      opacity: e.vars.opacity.inputPlaceholder
    } : {
      opacity: e.palette.mode === "light" ? 0.42 : 0.5
    }
  }]
})), IS = Q(vp, {
  name: "MuiPickersInputBase",
  slot: "Section",
  overridesResolver: (e, t) => t.section
})(({
  theme: e
}) => ({
  fontFamily: e.typography.fontFamily,
  fontSize: "inherit",
  letterSpacing: "inherit",
  lineHeight: "1.4375em",
  // 23px
  display: "flex"
})), NS = Q(wp, {
  name: "MuiPickersInputBase",
  slot: "SectionContent",
  overridesResolver: (e, t) => t.content
})(({
  theme: e
}) => ({
  fontFamily: e.typography.fontFamily,
  lineHeight: "1.4375em",
  // 23px
  letterSpacing: "inherit",
  width: "fit-content",
  outline: "none"
})), _S = Q(xp, {
  name: "MuiPickersInputBase",
  slot: "Separator",
  overridesResolver: (e, t) => t.separator
})(() => ({
  whiteSpace: "pre",
  letterSpacing: "inherit"
})), AS = Q("input", {
  name: "MuiPickersInputBase",
  slot: "Input",
  overridesResolver: (e, t) => t.hiddenInput
})(W({}, Cb)), FS = (e) => {
  const {
    focused: t,
    disabled: o,
    error: r,
    classes: a,
    fullWidth: i,
    readOnly: s,
    color: l,
    size: c,
    endAdornment: u,
    startAdornment: d
  } = e, p = {
    root: ["root", t && !o && "focused", o && "disabled", s && "readOnly", r && "error", i && "fullWidth", `color${re(l)}`, c === "small" && "inputSizeSmall", !!d && "adornedStart", !!u && "adornedEnd"],
    notchedOutline: ["notchedOutline"],
    input: ["input"],
    sectionsContainer: ["sectionsContainer"],
    sectionContent: ["sectionContent"],
    sectionBefore: ["sectionBefore"],
    sectionAfter: ["sectionAfter"]
  };
  return me(p, PS, a);
}, Va = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersInputBase"
  }), {
    elements: a,
    areAllSectionsEmpty: i,
    value: s,
    onChange: l,
    id: c,
    endAdornment: u,
    startAdornment: d,
    renderSuffix: p,
    slots: f,
    slotProps: v,
    contentEditable: h,
    tabIndex: b,
    onInput: y,
    onPaste: C,
    onKeyDown: S,
    name: w,
    readOnly: x,
    inputProps: g,
    inputRef: P,
    sectionListRef: R
  } = r, I = ge(r, MS), j = m.useRef(null), M = Se(o, j), N = Se(g == null ? void 0 : g.ref, P), q = It(), k = kt();
  if (!k)
    throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
  const A = (F) => {
    var Y;
    if (k.disabled) {
      F.stopPropagation();
      return;
    }
    (Y = k.onFocus) == null || Y.call(k, F);
  };
  m.useEffect(() => {
    k && k.setAdornedStart(!!d);
  }, [k, d]), m.useEffect(() => {
    k && (i ? k.onEmpty() : k.onFilled());
  }, [k, i]);
  const $ = W({}, r, k, {
    isRtl: q
  }), D = FS($), V = (f == null ? void 0 : f.root) || Fa, O = Ve({
    elementType: V,
    externalSlotProps: v == null ? void 0 : v.root,
    externalForwardedProps: I,
    additionalProps: {
      "aria-invalid": k.error,
      ref: M
    },
    className: D.root,
    ownerState: $
  }), U = (f == null ? void 0 : f.input) || $s;
  return /* @__PURE__ */ le(V, W({}, O, {
    children: [d, /* @__PURE__ */ E(Cp, {
      sectionListRef: R,
      elements: a,
      contentEditable: h,
      tabIndex: b,
      className: D.sectionsContainer,
      onFocus: A,
      onBlur: k.onBlur,
      onInput: y,
      onPaste: C,
      onKeyDown: S,
      slots: {
        root: U,
        section: IS,
        sectionContent: NS,
        sectionSeparator: _S
      },
      slotProps: {
        root: {
          ownerState: $
        },
        sectionContent: {
          className: Gn.sectionContent
        },
        sectionSeparator: ({
          position: F
        }) => ({
          className: F === "before" ? Gn.sectionBefore : Gn.sectionAfter
        })
      }
    }), u, p ? p(W({}, k)) : null, /* @__PURE__ */ E(AS, W({
      name: w,
      className: D.input,
      value: s,
      onChange: l,
      id: c,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly: x,
      required: k.required,
      disabled: k.disabled
    }, g, {
      ref: N
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Va.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: qe,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
function VS(e) {
  return pe("MuiPickersOutlinedInput", e);
}
const Dt = W({}, Gn, de("MuiPickersOutlinedInput", ["root", "notchedOutline", "input"])), LS = ["children", "className", "label", "notched", "shrink"], jS = Q("fieldset", {
  name: "MuiPickersOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (e, t) => t.notchedOutline
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
    borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
  };
}), Wc = Q("span")(({
  theme: e
}) => ({
  fontFamily: e.typography.fontFamily,
  fontSize: "inherit"
})), BS = Q("legend")(({
  theme: e
}) => ({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden",
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      withLabel: !1
    },
    style: {
      padding: 0,
      lineHeight: "11px",
      // sync with `height` in `legend` styles
      transition: e.transitions.create("width", {
        duration: 150,
        easing: e.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      withLabel: !0
    },
    style: {
      display: "block",
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: "0.75em",
      visibility: "hidden",
      maxWidth: 0.01,
      transition: e.transitions.create("max-width", {
        duration: 50,
        easing: e.transitions.easing.easeOut
      }),
      whiteSpace: "nowrap",
      "& > span": {
        paddingLeft: 5,
        paddingRight: 5,
        display: "inline-block",
        opacity: 0,
        visibility: "visible"
      }
    }
  }, {
    props: {
      withLabel: !0,
      notched: !0
    },
    style: {
      maxWidth: "100%",
      transition: e.transitions.create("max-width", {
        duration: 100,
        easing: e.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));
function zS(e) {
  const {
    className: t,
    label: o
  } = e, r = ge(e, LS), a = o != null && o !== "", i = W({}, e, {
    withLabel: a
  });
  return /* @__PURE__ */ E(jS, W({
    "aria-hidden": !0,
    className: t
  }, r, {
    ownerState: i,
    children: /* @__PURE__ */ E(BS, {
      ownerState: i,
      children: a ? /* @__PURE__ */ E(Wc, {
        children: o
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        /* @__PURE__ */ E(Wc, {
          className: "notranslate",
          children: "​"
        })
      )
    })
  }));
}
const WS = ["label", "autoFocus", "ownerState", "notched"], US = Q(Fa, {
  name: "MuiPickersOutlinedInput",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    padding: "0 14px",
    borderRadius: (e.vars || e).shape.borderRadius,
    [`&:hover .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${Dt.notchedOutline}`]: {
        borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t
      }
    },
    [`&.${Dt.focused} .${Dt.notchedOutline}`]: {
      borderStyle: "solid",
      borderWidth: 2
    },
    [`&.${Dt.disabled}`]: {
      [`& .${Dt.notchedOutline}`]: {
        borderColor: (e.vars || e).palette.action.disabled
      },
      "*": {
        color: (e.vars || e).palette.action.disabled
      }
    },
    [`&.${Dt.error} .${Dt.notchedOutline}`]: {
      borderColor: (e.vars || e).palette.error.main
    },
    variants: Object.keys((e.vars ?? e).palette).filter((o) => {
      var r;
      return ((r = (e.vars ?? e).palette[o]) == null ? void 0 : r.main) ?? !1;
    }).map((o) => ({
      props: {
        color: o
      },
      style: {
        [`&.${Dt.focused}:not(.${Dt.error}) .${Dt.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (e.vars || e).palette[o].main
        }
      }
    }))
  };
}), qS = Q($s, {
  name: "MuiPickersOutlinedInput",
  slot: "SectionsContainer",
  overridesResolver: (e, t) => t.sectionsContainer
})({
  padding: "16.5px 0",
  variants: [{
    props: {
      size: "small"
    },
    style: {
      padding: "8.5px 0"
    }
  }]
}), HS = (e) => {
  const {
    classes: t
  } = e, r = me({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, VS, t);
  return W({}, t, r);
}, Is = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersOutlinedInput"
  }), {
    label: a,
    ownerState: i,
    notched: s
  } = r, l = ge(r, WS), c = kt(), u = W({}, r, i, c, {
    color: (c == null ? void 0 : c.color) || "primary"
  }), d = HS(u);
  return /* @__PURE__ */ E(Va, W({
    slots: {
      root: US,
      input: qS
    },
    renderSuffix: (p) => /* @__PURE__ */ E(zS, {
      shrink: !!(s || p.adornedStart || p.focused || p.filled),
      notched: !!(s || p.adornedStart || p.focused || p.filled),
      className: d.notchedOutline,
      label: a != null && a !== "" && (c != null && c.required) ? /* @__PURE__ */ le(m.Fragment, {
        children: [a, " ", "*"]
      }) : a,
      ownerState: u
    })
  }, l, {
    label: a,
    classes: d,
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (Is.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: qe,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  notched: n.bool,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
Is.muiName = "Input";
function YS(e) {
  return pe("MuiPickersFilledInput", e);
}
const vn = W({}, Gn, de("MuiPickersFilledInput", ["root", "underline", "input"])), KS = ["label", "autoFocus", "disableUnderline", "ownerState"], GS = Q(Fa, {
  name: "MuiPickersFilledInput",
  slot: "Root",
  overridesResolver: (e, t) => t.root,
  shouldForwardProp: (e) => Zh(e) && e !== "disableUnderline"
})(({
  theme: e
}) => {
  const t = e.palette.mode === "light", o = t ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = t ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", a = t ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = t ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return {
    backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r,
    borderTopLeftRadius: (e.vars || e).shape.borderRadius,
    borderTopRightRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shorter,
      easing: e.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : a,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
      }
    },
    [`&.${vn.focused}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : r
    },
    [`&.${vn.disabled}`]: {
      backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : i
    },
    variants: [...Object.keys((e.vars ?? e).palette).filter((s) => (e.vars ?? e).palette[s].main).map((s) => {
      var l;
      return {
        props: {
          color: s,
          disableUnderline: !1
        },
        style: {
          "&::after": {
            // @ts-ignore
            borderBottom: `2px solid ${(l = (e.vars || e).palette[s]) == null ? void 0 : l.main}`
          }
        }
      };
    }), {
      props: {
        disableUnderline: !1
      },
      style: {
        "&::after": {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${vn.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${vn.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${vn.disabled}, .${vn.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`
        },
        [`&.${vn.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }, {
      props: ({
        startAdornment: s
      }) => !!s,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        endAdornment: s
      }) => !!s,
      style: {
        paddingRight: 12
      }
    }]
  };
}), XS = Q($s, {
  name: "MuiPickersFilledInput",
  slot: "sectionsContainer",
  overridesResolver: (e, t) => t.sectionsContainer
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      startAdornment: e
    }) => !!e,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      endAdornment: e
    }) => !!e,
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: !0
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: !0,
      size: "small"
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
}), ZS = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = me({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, YS, t);
  return W({}, t, a);
}, Ns = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersFilledInput"
  }), {
    label: a,
    disableUnderline: i = !1,
    ownerState: s
  } = r, l = ge(r, KS), c = kt(), u = W({}, r, s, c, {
    color: (c == null ? void 0 : c.color) || "primary"
  }), d = ZS(u);
  return /* @__PURE__ */ E(Va, W({
    slots: {
      root: GS,
      input: XS
    },
    slotProps: {
      root: {
        disableUnderline: i
      }
    }
  }, l, {
    label: a,
    classes: d,
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (Ns.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  disableUnderline: n.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  hiddenLabel: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: qe,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
Ns.muiName = "Input";
function QS(e) {
  return pe("MuiPickersFilledInput", e);
}
const Do = W({}, Gn, de("MuiPickersInput", ["root", "input"])), JS = ["label", "autoFocus", "disableUnderline", "ownerState"], eE = Q(Fa, {
  name: "MuiPickersInput",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => {
  let o = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return e.vars && (o = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`), {
    "label + &": {
      marginTop: 16
    },
    variants: [...Object.keys((e.vars ?? e).palette).filter((r) => (e.vars ?? e).palette[r].main).map((r) => ({
      props: {
        color: r
      },
      style: {
        "&::after": {
          // @ts-ignore
          borderBottom: `2px solid ${(e.vars || e).palette[r].main}`
        }
      }
    })), {
      props: {
        disableUnderline: !1
      },
      style: {
        "&::after": {
          background: "red",
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&.${Do.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: "scaleX(1) translateX(0)"
        },
        [`&.${Do.error}`]: {
          "&:before, &:after": {
            borderBottomColor: (e.vars || e).palette.error.main
          }
        },
        "&::before": {
          borderBottom: `1px solid ${o}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", {
            duration: e.transitions.duration.shorter
          }),
          pointerEvents: "none"
          // Transparent to the hover style.
        },
        [`&:hover:not(.${Do.disabled}, .${Do.error}):before`]: {
          borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            borderBottom: `1px solid ${o}`
          }
        },
        [`&.${Do.disabled}:before`]: {
          borderBottomStyle: "dotted"
        }
      }
    }]
  };
}), tE = (e) => {
  const {
    classes: t,
    disableUnderline: o
  } = e, a = me({
    root: ["root", !o && "underline"],
    input: ["input"]
  }, QS, t);
  return W({}, t, a);
}, _s = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersInput"
  }), {
    label: a,
    disableUnderline: i = !1,
    ownerState: s
  } = r, l = ge(r, JS), c = kt(), u = W({}, r, s, c, {
    disableUnderline: i,
    color: (c == null ? void 0 : c.color) || "primary"
  }), d = tE(u);
  return /* @__PURE__ */ E(Va, W({
    slots: {
      root: eE
    }
  }, l, {
    label: a,
    classes: d,
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (_s.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  disableUnderline: n.bool,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  fullWidth: n.bool,
  id: n.string,
  inputProps: n.object,
  inputRef: qe,
  label: n.node,
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  ownerState: n.any,
  readOnly: n.bool,
  renderSuffix: n.func,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: n.object,
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired
});
_s.muiName = "Input";
const nE = ["onFocus", "onBlur", "className", "color", "disabled", "error", "variant", "required", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps"], oE = {
  standard: _s,
  filled: Ns,
  outlined: Is
}, rE = Q(us, {
  name: "MuiPickersTextField",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), aE = (e) => {
  const {
    focused: t,
    disabled: o,
    classes: r,
    required: a
  } = e;
  return me({
    root: ["root", t && !o && "focused", o && "disabled", a && "required"]
  }, OS, r);
}, Sp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersTextField"
  }), {
    // Props used by FormControl
    onFocus: a,
    onBlur: i,
    className: s,
    color: l = "primary",
    disabled: c = !1,
    error: u = !1,
    variant: d = "outlined",
    required: p = !1,
    // Props used by PickersInput
    InputProps: f,
    inputProps: v,
    inputRef: h,
    sectionListRef: b,
    elements: y,
    areAllSectionsEmpty: C,
    onClick: S,
    onKeyDown: w,
    onPaste: x,
    onInput: g,
    endAdornment: P,
    startAdornment: R,
    tabIndex: I,
    contentEditable: j,
    focused: M,
    value: N,
    onChange: q,
    fullWidth: k,
    id: A,
    name: $,
    // Props used by FormHelperText
    helperText: D,
    FormHelperTextProps: V,
    // Props used by InputLabel
    label: O,
    InputLabelProps: U
  } = r, F = ge(r, nE), Y = m.useRef(null), K = Se(o, Y), J = en(A), Z = D && J ? `${J}-helper-text` : void 0, L = O && J ? `${J}-label` : void 0, z = W({}, r, {
    color: l,
    disabled: c,
    error: u,
    focused: M,
    required: p,
    variant: d
  }), X = aE(z), ee = oE[d];
  return /* @__PURE__ */ le(rE, W({
    className: ae(X.root, s),
    ref: K,
    focused: M,
    onFocus: a,
    onBlur: i,
    disabled: c,
    variant: d,
    error: u,
    color: l,
    fullWidth: k,
    required: p,
    ownerState: z
  }, F, {
    children: [/* @__PURE__ */ E(ds, W({
      htmlFor: J,
      id: L
    }, U, {
      children: O
    })), /* @__PURE__ */ E(ee, W({
      elements: y,
      areAllSectionsEmpty: C,
      onClick: S,
      onKeyDown: w,
      onInput: g,
      onPaste: x,
      endAdornment: P,
      startAdornment: R,
      tabIndex: I,
      contentEditable: j,
      value: N,
      onChange: q,
      id: J,
      fullWidth: k,
      inputProps: v,
      inputRef: h,
      sectionListRef: b,
      label: O,
      name: $,
      role: "group",
      "aria-labelledby": L
    }, f)), D && /* @__PURE__ */ E(ps, W({
      id: Z
    }, V, {
      children: D
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (Sp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Is `true` if the current values equals the empty value.
   * For a single item value, it means that `value === null`
   * For a range value, it means that `value === [null, null]`
   */
  areAllSectionsEmpty: n.bool.isRequired,
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: n.elementType,
  /**
   * If true, the whole element is editable.
   * Useful when all the sections are selected.
   */
  contentEditable: n.bool.isRequired,
  disabled: n.bool.isRequired,
  /**
   * The elements to render.
   * Each element contains the prop to edit a section of the value.
   */
  elements: n.arrayOf(n.shape({
    after: n.object.isRequired,
    before: n.object.isRequired,
    container: n.object.isRequired,
    content: n.object.isRequired
  })).isRequired,
  endAdornment: n.node,
  error: n.bool.isRequired,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  FormHelperTextProps: n.object,
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  id: n.string,
  InputLabelProps: n.object,
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  inputRef: qe,
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  name: n.string,
  onBlur: n.func.isRequired,
  onChange: n.func.isRequired,
  onClick: n.func.isRequired,
  onFocus: n.func.isRequired,
  onInput: n.func.isRequired,
  onKeyDown: n.func.isRequired,
  onPaste: n.func.isRequired,
  readOnly: n.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: n.bool,
  sectionListRef: n.oneOfType([n.func, n.shape({
    current: n.shape({
      getRoot: n.func.isRequired,
      getSectionContainer: n.func.isRequired,
      getSectionContent: n.func.isRequired,
      getSectionIndexFromDOMElement: n.func.isRequired
    })
  })]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: n.oneOf(["medium", "small"]),
  startAdornment: n.node,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.string.isRequired,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const iE = ["enableAccessibleFieldDOMStructure"], sE = ["InputProps", "readOnly"], lE = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef"], cE = (e) => {
  let {
    enableAccessibleFieldDOMStructure: t
  } = e, o = ge(e, iE);
  if (t) {
    const {
      InputProps: p,
      readOnly: f
    } = o, v = ge(o, sE);
    return W({}, v, {
      InputProps: W({}, p ?? {}, {
        readOnly: f
      })
    });
  }
  const {
    onPaste: r,
    onKeyDown: a,
    inputMode: i,
    readOnly: s,
    InputProps: l,
    inputProps: c,
    inputRef: u
  } = o, d = ge(o, lE);
  return W({}, d, {
    InputProps: W({}, l ?? {}, {
      readOnly: s
    }),
    inputProps: W({}, c ?? {}, {
      inputMode: i,
      onPaste: r,
      onKeyDown: a,
      ref: u
    })
  });
}, uE = ["slots", "slotProps", "InputProps", "inputProps"], As = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiDateField"
  }), {
    slots: a,
    slotProps: i,
    InputProps: s,
    inputProps: l
  } = r, c = ge(r, uE), u = r, d = (a == null ? void 0 : a.textField) ?? (t.enableAccessibleFieldDOMStructure ? Sp : Ud), p = Ve({
    elementType: d,
    externalSlotProps: i == null ? void 0 : i.textField,
    externalForwardedProps: c,
    additionalProps: {
      ref: o
    },
    ownerState: u
  });
  p.inputProps = W({}, l, p.inputProps), p.InputProps = W({}, s, p.InputProps);
  const f = wS(p), v = cE(f), h = ES(W({}, v, {
    slots: a,
    slotProps: i
  }));
  return /* @__PURE__ */ E(d, W({}, h));
});
process.env.NODE_ENV !== "production" && (As.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: n.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: n.elementType,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: n.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: n.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: n.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * The helper text content.
   */
  helperText: n.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: n.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: n.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: n.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: n.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   */
  minDate: n.object,
  /**
   * Name attribute of the `input` element.
   */
  name: n.string,
  onBlur: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  onFocus: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: n.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: n.object,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default false
   */
  shouldRespectLeadingZeros: n.bool,
  /**
   * The size of the component.
   */
  size: n.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  style: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: n.oneOfType([n.func, n.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: n.oneOf(["filled", "outlined", "standard"])
});
const Ep = ({
  shouldDisableDate: e,
  shouldDisableMonth: t,
  shouldDisableYear: o,
  minDate: r,
  maxDate: a,
  disableFuture: i,
  disablePast: s,
  timezone: l
}) => {
  const c = Mn();
  return m.useCallback((u) => Aa({
    adapter: c,
    value: u,
    props: {
      shouldDisableDate: e,
      shouldDisableMonth: t,
      shouldDisableYear: o,
      minDate: r,
      maxDate: a,
      disableFuture: i,
      disablePast: s,
      timezone: l
    }
  }) !== null, [c, e, t, o, r, a, i, s, l]);
}, dE = (e, t, o) => (r, a) => {
  switch (a.type) {
    case "changeMonth":
      return W({}, r, {
        slideDirection: a.direction,
        currentMonth: a.newMonth,
        isMonthSwitchingAnimating: !e
      });
    case "finishMonthSwitchingAnimation":
      return W({}, r, {
        isMonthSwitchingAnimating: !1
      });
    case "changeFocusedDay": {
      if (r.focusedDay != null && a.focusedDay != null && o.isSameDay(a.focusedDay, r.focusedDay))
        return r;
      const i = a.focusedDay != null && !t && !o.isSameMonth(r.currentMonth, a.focusedDay);
      return W({}, r, {
        focusedDay: a.focusedDay,
        isMonthSwitchingAnimating: i && !e && !a.withoutMonthSwitchingAnimation,
        currentMonth: i ? o.startOfMonth(a.focusedDay) : r.currentMonth,
        slideDirection: a.focusedDay != null && o.isAfterDay(a.focusedDay, r.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
}, pE = (e) => {
  const {
    value: t,
    referenceDate: o,
    disableFuture: r,
    disablePast: a,
    disableSwitchToMonthOnDayFocus: i = !1,
    maxDate: s,
    minDate: l,
    onMonthChange: c,
    reduceAnimations: u,
    shouldDisableDate: d,
    timezone: p
  } = e, f = Ae(), v = m.useRef(dE(!!u, i, f)).current, h = m.useMemo(
    () => Zt.getInitialReferenceValue({
      value: t,
      utils: f,
      timezone: p,
      props: e,
      referenceDate: o,
      granularity: Lt.day
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), [b, y] = m.useReducer(v, {
    isMonthSwitchingAnimating: !1,
    focusedDay: h,
    currentMonth: f.startOfMonth(h),
    slideDirection: "left"
  }), C = m.useCallback((P) => {
    y(W({
      type: "changeMonth"
    }, P)), c && c(P.newMonth);
  }, [c]), S = m.useCallback((P) => {
    const R = P;
    f.isSameMonth(R, b.currentMonth) || C({
      newMonth: f.startOfMonth(R),
      direction: f.isAfterDay(R, b.currentMonth) ? "left" : "right"
    });
  }, [b.currentMonth, C, f]), w = Ep({
    shouldDisableDate: d,
    minDate: l,
    maxDate: s,
    disableFuture: r,
    disablePast: a,
    timezone: p
  }), x = m.useCallback(() => {
    y({
      type: "finishMonthSwitchingAnimation"
    });
  }, []), g = se((P, R) => {
    w(P) || y({
      type: "changeFocusedDay",
      focusedDay: P,
      withoutMonthSwitchingAnimation: R
    });
  });
  return {
    referenceDate: h,
    calendarState: b,
    changeMonth: S,
    changeFocusedDay: g,
    isDateDisabled: w,
    onMonthSwitchingAnimationEnd: x,
    handleChangeMonth: C
  };
}, fE = (e) => pe("MuiPickersFadeTransitionGroup", e);
de("MuiPickersFadeTransitionGroup", ["root"]);
const mE = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, fE, t);
}, hE = Q(ur, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "block",
  position: "relative"
});
function Op(e) {
  const t = Le({
    props: e,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: i
  } = t, s = mE(t), l = tn();
  return a ? o : /* @__PURE__ */ E(hE, {
    className: ae(s.root, r),
    children: /* @__PURE__ */ E(Dn, {
      appear: !1,
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: {
        appear: l.transitions.duration.enteringScreen,
        enter: l.transitions.duration.enteringScreen,
        exit: 0
      },
      children: o
    }, i)
  });
}
const bE = (e) => pe("MuiPickersSlideTransition", e), yt = de("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), gE = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], yE = (e) => {
  const {
    classes: t,
    slideDirection: o
  } = e, r = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${o}`],
    exitActive: [`slideExitActiveLeft-${o}`]
  };
  return me(r, bE, t);
}, vE = Q(ur, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (e, t) => [t.root, {
    [`.${yt["slideEnter-left"]}`]: t["slideEnter-left"]
  }, {
    [`.${yt["slideEnter-right"]}`]: t["slideEnter-right"]
  }, {
    [`.${yt.slideEnterActive}`]: t.slideEnterActive
  }, {
    [`.${yt.slideExit}`]: t.slideExit
  }, {
    [`.${yt["slideExitActiveLeft-left"]}`]: t["slideExitActiveLeft-left"]
  }, {
    [`.${yt["slideExitActiveLeft-right"]}`]: t["slideExitActiveLeft-right"]
  }]
})(({
  theme: e
}) => {
  const t = e.transitions.create("transform", {
    duration: e.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${yt["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${yt["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${yt.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: t
    },
    [`& .${yt.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${yt["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: t,
      zIndex: 0
    },
    [`& .${yt["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: t,
      zIndex: 0
    }
  };
});
function xE(e) {
  const t = Le({
    props: e,
    name: "MuiPickersSlideTransition"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: i
    // extracting `classes` from `other`
  } = t, s = ge(t, gE), l = yE(t), c = tn();
  if (a)
    return /* @__PURE__ */ E("div", {
      className: ae(l.root, r),
      children: o
    });
  const u = {
    exit: l.exit,
    enterActive: l.enterActive,
    enter: l.enter,
    exitActive: l.exitActive
  };
  return /* @__PURE__ */ E(vE, {
    className: ae(l.root, r),
    childFactory: (d) => /* @__PURE__ */ m.cloneElement(d, {
      classNames: u
    }),
    role: "presentation",
    children: /* @__PURE__ */ E(is, W({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: c.transitions.duration.complex,
      classNames: u
    }, s, {
      children: o
    }), i)
  });
}
const wE = (e) => pe("MuiDayCalendar", e);
de("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]);
const CE = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], SE = ["ownerState"], EE = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  }, wE, t);
}, Pp = (Go + Ia * 2) * 6, OE = Q("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), PE = Q("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (e, t) => t.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), RE = Q(mn, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (e, t) => t.weekDayLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (e.vars || e).palette.text.secondary
})), TE = Q(mn, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (e, t) => t.weekNumberLabel
})(({
  theme: e
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: e.palette.text.disabled
})), kE = Q(mn, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (e, t) => t.weekNumber
})(({
  theme: e
}) => W({}, e.typography.caption, {
  width: Go,
  height: Go,
  padding: 0,
  margin: `0 ${Ia}px`,
  color: e.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), DE = Q("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (e, t) => t.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: Pp
}), ME = Q(xE, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (e, t) => t.slideTransition
})({
  minHeight: Pp
}), $E = Q("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (e, t) => t.monthContainer
})({
  overflow: "hidden"
}), IE = Q("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (e, t) => t.weekContainer
})({
  margin: `${Ia}px 0`,
  display: "flex",
  justifyContent: "center"
});
function NE(e) {
  let {
    parentProps: t,
    day: o,
    focusableDay: r,
    selectedDays: a,
    isDateDisabled: i,
    currentMonthNumber: s,
    isViewFocused: l
  } = e, c = ge(e, CE);
  const {
    disabled: u,
    disableHighlightToday: d,
    isMonthSwitchingAnimating: p,
    showDaysOutsideCurrentMonth: f,
    slots: v,
    slotProps: h,
    timezone: b
  } = t, y = Ae(), C = $a(b), S = r !== null && y.isSameDay(o, r), w = a.some((q) => y.isSameDay(q, o)), x = y.isSameDay(o, C), g = (v == null ? void 0 : v.day) ?? Q1, P = Ve({
    elementType: g,
    externalSlotProps: h == null ? void 0 : h.day,
    additionalProps: W({
      disableHighlightToday: d,
      showDaysOutsideCurrentMonth: f,
      role: "gridcell",
      isAnimating: p,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": y.toJsDate(o).valueOf()
    }, c),
    ownerState: W({}, t, {
      day: o,
      selected: w
    })
  }), R = ge(P, SE), I = m.useMemo(() => u || i(o), [u, i, o]), j = m.useMemo(() => y.getMonth(o) !== s, [y, o, s]), M = m.useMemo(() => {
    const q = y.startOfMonth(y.setMonth(o, s));
    return f ? y.isSameDay(o, y.startOfWeek(q)) : y.isSameDay(o, q);
  }, [s, o, f, y]), N = m.useMemo(() => {
    const q = y.endOfMonth(y.setMonth(o, s));
    return f ? y.isSameDay(o, y.endOfWeek(q)) : y.isSameDay(o, q);
  }, [s, o, f, y]);
  return /* @__PURE__ */ E(g, W({}, R, {
    day: o,
    disabled: I,
    autoFocus: l && S,
    today: x,
    outsideCurrentMonth: j,
    isFirstVisibleCell: M,
    isLastVisibleCell: N,
    selected: w,
    tabIndex: S ? 0 : -1,
    "aria-selected": w,
    "aria-current": x ? "date" : void 0
  }));
}
function _E(e) {
  const t = Le({
    props: e,
    name: "MuiDayCalendar"
  }), o = Ae(), {
    onFocusedDayChange: r,
    className: a,
    currentMonth: i,
    selectedDays: s,
    focusedDay: l,
    loading: c,
    onSelectedDaysChange: u,
    onMonthSwitchingAnimationEnd: d,
    readOnly: p,
    reduceAnimations: f,
    renderLoading: v = () => /* @__PURE__ */ E("span", {
      children: "..."
    }),
    slideDirection: h,
    TransitionProps: b,
    disablePast: y,
    disableFuture: C,
    minDate: S,
    maxDate: w,
    shouldDisableDate: x,
    shouldDisableMonth: g,
    shouldDisableYear: P,
    dayOfWeekFormatter: R = (ie) => o.format(ie, "weekdayShort").charAt(0).toUpperCase(),
    hasFocus: I,
    onFocusedViewChange: j,
    gridLabelId: M,
    displayWeekNumber: N,
    fixedWeekNumber: q,
    autoFocus: k,
    timezone: A
  } = t, $ = $a(A), D = EE(t), V = It(), O = Ep({
    shouldDisableDate: x,
    shouldDisableMonth: g,
    shouldDisableYear: P,
    minDate: S,
    maxDate: w,
    disablePast: y,
    disableFuture: C,
    timezone: A
  }), U = on(), [F, Y] = $t({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: I,
    default: k ?? !1
  }), [K, J] = m.useState(() => l || $), Z = se((ie) => {
    p || u(ie);
  }), L = (ie) => {
    O(ie) || (r(ie), J(ie), j == null || j(!0), Y(!0));
  }, z = se((ie, ce) => {
    switch (ie.key) {
      case "ArrowUp":
        L(o.addDays(ce, -7)), ie.preventDefault();
        break;
      case "ArrowDown":
        L(o.addDays(ce, 7)), ie.preventDefault();
        break;
      case "ArrowLeft": {
        const xe = o.addDays(ce, V ? 1 : -1), Ce = o.addMonths(ce, V ? 1 : -1), ye = Fo({
          utils: o,
          date: xe,
          minDate: V ? xe : o.startOfMonth(Ce),
          maxDate: V ? o.endOfMonth(Ce) : xe,
          isDateDisabled: O,
          timezone: A
        });
        L(ye || xe), ie.preventDefault();
        break;
      }
      case "ArrowRight": {
        const xe = o.addDays(ce, V ? -1 : 1), Ce = o.addMonths(ce, V ? -1 : 1), ye = Fo({
          utils: o,
          date: xe,
          minDate: V ? o.startOfMonth(Ce) : xe,
          maxDate: V ? xe : o.endOfMonth(Ce),
          isDateDisabled: O,
          timezone: A
        });
        L(ye || xe), ie.preventDefault();
        break;
      }
      case "Home":
        L(o.startOfWeek(ce)), ie.preventDefault();
        break;
      case "End":
        L(o.endOfWeek(ce)), ie.preventDefault();
        break;
      case "PageUp":
        L(o.addMonths(ce, 1)), ie.preventDefault();
        break;
      case "PageDown":
        L(o.addMonths(ce, -1)), ie.preventDefault();
        break;
    }
  }), X = se((ie, ce) => L(ce)), ee = se((ie, ce) => {
    F && o.isSameDay(K, ce) && (j == null || j(!1));
  }), ne = o.getMonth(i), G = o.getYear(i), te = m.useMemo(() => s.filter((ie) => !!ie).map((ie) => o.startOfDay(ie)), [o, s]), _ = `${G}-${ne}`, B = m.useMemo(() => /* @__PURE__ */ m.createRef(), [_]), H = o.startOfWeek($), oe = m.useMemo(() => {
    const ie = o.startOfMonth(i), ce = o.endOfMonth(i);
    return O(K) || o.isAfterDay(K, ce) || o.isBeforeDay(K, ie) ? Fo({
      utils: o,
      date: K,
      minDate: ie,
      maxDate: ce,
      disablePast: y,
      disableFuture: C,
      isDateDisabled: O,
      timezone: A
    }) : K;
  }, [i, C, y, K, O, o, A]), he = m.useMemo(() => {
    const ie = o.setTimezone(i, A), ce = o.getWeekArray(ie);
    let xe = o.addMonths(ie, 1);
    for (; q && ce.length < q; ) {
      const Ce = o.getWeekArray(xe), ye = o.isSameDay(ce[ce.length - 1][0], Ce[0][0]);
      Ce.slice(ye ? 1 : 0).forEach((Ze) => {
        ce.length < q && ce.push(Ze);
      }), xe = o.addMonths(xe, 1);
    }
    return ce;
  }, [i, q, o, A]);
  return /* @__PURE__ */ le(OE, {
    role: "grid",
    "aria-labelledby": M,
    className: D.root,
    children: [/* @__PURE__ */ le(PE, {
      role: "row",
      className: D.header,
      children: [N && /* @__PURE__ */ E(TE, {
        variant: "caption",
        role: "columnheader",
        "aria-label": U.calendarWeekNumberHeaderLabel,
        className: D.weekNumberLabel,
        children: U.calendarWeekNumberHeaderText
      }), k1(o, $).map((ie, ce) => /* @__PURE__ */ E(RE, {
        variant: "caption",
        role: "columnheader",
        "aria-label": o.format(o.addDays(H, ce), "weekday"),
        className: D.weekDayLabel,
        children: R(ie)
      }, ce.toString()))]
    }), c ? /* @__PURE__ */ E(DE, {
      className: D.loadingContainer,
      children: v()
    }) : /* @__PURE__ */ E(ME, W({
      transKey: _,
      onExited: d,
      reduceAnimations: f,
      slideDirection: h,
      className: ae(a, D.slideTransition)
    }, b, {
      nodeRef: B,
      children: /* @__PURE__ */ E($E, {
        ref: B,
        role: "rowgroup",
        className: D.monthContainer,
        children: he.map((ie, ce) => /* @__PURE__ */ le(IE, {
          role: "row",
          className: D.weekContainer,
          "aria-rowindex": ce + 1,
          children: [N && /* @__PURE__ */ E(kE, {
            className: D.weekNumber,
            role: "rowheader",
            "aria-label": U.calendarWeekNumberAriaLabelText(o.getWeekNumber(ie[0])),
            children: U.calendarWeekNumberText(o.getWeekNumber(ie[0]))
          }), ie.map((xe, Ce) => /* @__PURE__ */ E(NE, {
            parentProps: t,
            day: xe,
            selectedDays: te,
            focusableDay: oe,
            onKeyDown: z,
            onFocus: X,
            onBlur: ee,
            onDaySelect: Z,
            isDateDisabled: O,
            currentMonthNumber: ne,
            isViewFocused: F,
            "aria-colindex": Ce + 1
          }, xe.toString()))]
        }, `week-${ie[0]}`))
      })
    }))]
  });
}
function AE(e) {
  return pe("MuiPickersMonth", e);
}
const wr = de("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]), FE = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow"], VE = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return me({
    root: ["root"],
    monthButton: ["monthButton", t && "disabled", o && "selected"]
  }, AE, r);
}, LE = Q("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "33.3%",
  variants: [{
    props: {
      monthsPerRow: 4
    },
    style: {
      flexBasis: "25%"
    }
  }]
}), jE = Q("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (e, t) => [t.monthButton, {
    [`&.${wr.disabled}`]: t.disabled
  }, {
    [`&.${wr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => W({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : to(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : to(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${wr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${wr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), BE = /* @__PURE__ */ m.memo(function(t) {
  const o = Le({
    props: t,
    name: "MuiPickersMonth"
  }), {
    autoFocus: r,
    children: a,
    disabled: i,
    selected: s,
    value: l,
    tabIndex: c,
    onClick: u,
    onKeyDown: d,
    onFocus: p,
    onBlur: f,
    "aria-current": v,
    "aria-label": h
    // We don't want to forward this prop to the root element
  } = o, b = ge(o, FE), y = m.useRef(null), C = VE(o);
  return et(() => {
    var S;
    r && ((S = y.current) == null || S.focus());
  }, [r]), /* @__PURE__ */ E(LE, W({
    className: C.root,
    ownerState: o
  }, b, {
    children: /* @__PURE__ */ E(jE, {
      ref: y,
      disabled: i,
      type: "button",
      role: "radio",
      tabIndex: i ? -1 : c,
      "aria-current": v,
      "aria-checked": s,
      "aria-label": h,
      onClick: (S) => u(S, l),
      onKeyDown: (S) => d(S, l),
      onFocus: (S) => p(S, l),
      onBlur: (S) => f(S, l),
      className: C.monthButton,
      ownerState: o,
      children: a
    })
  }));
});
function zE(e) {
  return pe("MuiMonthCalendar", e);
}
de("MuiMonthCalendar", ["root"]);
const WE = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"], UE = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, zE, t);
};
function qE(e, t) {
  const o = Ae(), r = dr(), a = Le({
    props: e,
    name: t
  });
  return W({
    disableFuture: !1,
    disablePast: !1
  }, a, {
    minDate: Rt(o, a.minDate, r.minDate),
    maxDate: Rt(o, a.maxDate, r.maxDate)
  });
}
const HE = Q("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: Na,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
}), Rp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = qE(t, "MuiMonthCalendar"), {
    className: a,
    value: i,
    defaultValue: s,
    referenceDate: l,
    disabled: c,
    disableFuture: u,
    disablePast: d,
    maxDate: p,
    minDate: f,
    onChange: v,
    shouldDisableMonth: h,
    readOnly: b,
    autoFocus: y = !1,
    onMonthFocus: C,
    hasFocus: S,
    onFocusedViewChange: w,
    monthsPerRow: x = 3,
    timezone: g,
    gridLabelId: P
  } = r, R = ge(r, WE), {
    value: I,
    handleValueChange: j,
    timezone: M
  } = Ts({
    name: "MonthCalendar",
    timezone: g,
    value: i,
    defaultValue: s,
    onChange: v,
    valueManager: Zt
  }), N = $a(M), q = It(), k = Ae(), A = m.useMemo(
    () => Zt.getInitialReferenceValue({
      value: I,
      utils: k,
      props: r,
      timezone: M,
      referenceDate: l,
      granularity: Lt.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), $ = r, D = UE($), V = m.useMemo(() => k.getMonth(N), [k, N]), O = m.useMemo(() => I != null ? k.getMonth(I) : null, [I, k]), [U, F] = m.useState(() => O || k.getMonth(A)), [Y, K] = $t({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: S,
    default: y ?? !1
  }), J = se((G) => {
    K(G), w && w(G);
  }), Z = m.useCallback((G) => {
    const te = k.startOfMonth(d && k.isAfter(N, f) ? N : f), _ = k.startOfMonth(u && k.isBefore(N, p) ? N : p), B = k.startOfMonth(G);
    return k.isBefore(B, te) || k.isAfter(B, _) ? !0 : h ? h(B) : !1;
  }, [u, d, p, f, N, h, k]), L = se((G, te) => {
    if (b)
      return;
    const _ = k.setMonth(I ?? A, te);
    j(_);
  }), z = se((G) => {
    Z(k.setMonth(I ?? A, G)) || (F(G), J(!0), C && C(G));
  });
  m.useEffect(() => {
    F((G) => O !== null && G !== O ? O : G);
  }, [O]);
  const X = se((G, te) => {
    switch (G.key) {
      case "ArrowUp":
        z((12 + te - 3) % 12), G.preventDefault();
        break;
      case "ArrowDown":
        z((12 + te + 3) % 12), G.preventDefault();
        break;
      case "ArrowLeft":
        z((12 + te + (q ? 1 : -1)) % 12), G.preventDefault();
        break;
      case "ArrowRight":
        z((12 + te + (q ? -1 : 1)) % 12), G.preventDefault();
        break;
    }
  }), ee = se((G, te) => {
    z(te);
  }), ne = se((G, te) => {
    U === te && J(!1);
  });
  return /* @__PURE__ */ E(HE, W({
    ref: o,
    className: ae(D.root, a),
    ownerState: $,
    role: "radiogroup",
    "aria-labelledby": P
  }, R, {
    children: Os(k, I ?? A).map((G) => {
      const te = k.getMonth(G), _ = k.format(G, "monthShort"), B = k.format(G, "month"), H = te === O, oe = c || Z(G);
      return /* @__PURE__ */ E(BE, {
        selected: H,
        value: te,
        onClick: L,
        onKeyDown: X,
        autoFocus: Y && te === U,
        disabled: oe,
        tabIndex: te === U ? 0 : -1,
        onFocus: ee,
        onBlur: ne,
        "aria-current": V === te ? "date" : void 0,
        "aria-label": B,
        monthsPerRow: x,
        children: _
      }, _);
    })
  }));
});
process.env.NODE_ENV !== "production" && (Rp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true` picker is disabled
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  gridLabelId: n.string,
  hasFocus: n.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: n.func,
  onFocusedViewChange: n.func,
  onMonthFocus: n.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: n.object,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object
});
function YE(e) {
  return pe("MuiPickersYear", e);
}
const Cr = de("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]), KE = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"], GE = (e) => {
  const {
    disabled: t,
    selected: o,
    classes: r
  } = e;
  return me({
    root: ["root"],
    yearButton: ["yearButton", t && "disabled", o && "selected"]
  }, YE, r);
}, XE = Q("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (e, t) => [t.root]
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexBasis: "33.3%",
  variants: [{
    props: {
      yearsPerRow: 4
    },
    style: {
      flexBasis: "25%"
    }
  }]
}), ZE = Q("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (e, t) => [t.yearButton, {
    [`&.${Cr.disabled}`]: t.disabled
  }, {
    [`&.${Cr.selected}`]: t.selected
  }]
})(({
  theme: e
}) => W({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, e.typography.subtitle1, {
  margin: "6px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.focusOpacity})` : to(e.palette.action.active, e.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : to(e.palette.action.active, e.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${Cr.disabled}`]: {
    color: (e.vars || e).palette.text.secondary
  },
  [`&.${Cr.selected}`]: {
    color: (e.vars || e).palette.primary.contrastText,
    backgroundColor: (e.vars || e).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (e.vars || e).palette.primary.dark
    }
  }
})), QE = /* @__PURE__ */ m.memo(function(t) {
  const o = Le({
    props: t,
    name: "MuiPickersYear"
  }), {
    autoFocus: r,
    className: a,
    children: i,
    disabled: s,
    selected: l,
    value: c,
    tabIndex: u,
    onClick: d,
    onKeyDown: p,
    onFocus: f,
    onBlur: v,
    "aria-current": h
    // We don't want to forward this prop to the root element
  } = o, b = ge(o, KE), y = m.useRef(null), C = GE(o);
  return m.useEffect(() => {
    r && y.current.focus();
  }, [r]), /* @__PURE__ */ E(XE, W({
    className: ae(C.root, a),
    ownerState: o
  }, b, {
    children: /* @__PURE__ */ E(ZE, {
      ref: y,
      disabled: s,
      type: "button",
      role: "radio",
      tabIndex: s ? -1 : u,
      "aria-current": h,
      "aria-checked": l,
      onClick: (S) => d(S, c),
      onKeyDown: (S) => p(S, c),
      onFocus: (S) => f(S, c),
      onBlur: (S) => v(S, c),
      className: C.yearButton,
      ownerState: o,
      children: i
    })
  }));
});
function JE(e) {
  return pe("MuiYearCalendar", e);
}
de("MuiYearCalendar", ["root"]);
const eO = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"], tO = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"]
  }, JE, t);
};
function nO(e, t) {
  const o = Ae(), r = dr(), a = Le({
    props: e,
    name: t
  });
  return W({
    disablePast: !1,
    disableFuture: !1
  }, a, {
    yearsPerRow: a.yearsPerRow ?? 3,
    minDate: Rt(o, a.minDate, r.minDate),
    maxDate: Rt(o, a.maxDate, r.maxDate)
  });
}
const oO = Q("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: Na,
  maxHeight: E1,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
}), Tp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = nO(t, "MuiYearCalendar"), {
    autoFocus: a,
    className: i,
    value: s,
    defaultValue: l,
    referenceDate: c,
    disabled: u,
    disableFuture: d,
    disablePast: p,
    maxDate: f,
    minDate: v,
    onChange: h,
    readOnly: b,
    shouldDisableYear: y,
    onYearFocus: C,
    hasFocus: S,
    onFocusedViewChange: w,
    yearsPerRow: x,
    timezone: g,
    gridLabelId: P
  } = r, R = ge(r, eO), {
    value: I,
    handleValueChange: j,
    timezone: M
  } = Ts({
    name: "YearCalendar",
    timezone: g,
    value: s,
    defaultValue: l,
    onChange: h,
    valueManager: Zt
  }), N = $a(M), q = It(), k = Ae(), A = m.useMemo(
    () => Zt.getInitialReferenceValue({
      value: I,
      utils: k,
      props: r,
      timezone: M,
      referenceDate: c,
      granularity: Lt.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), $ = r, D = tO($), V = m.useMemo(() => k.getYear(N), [k, N]), O = m.useMemo(() => I != null ? k.getYear(I) : null, [I, k]), [U, F] = m.useState(() => O || k.getYear(A)), [Y, K] = $t({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: S,
    default: a ?? !1
  }), J = se((_) => {
    K(_), w && w(_);
  }), Z = m.useCallback((_) => {
    if (p && k.isBeforeYear(_, N) || d && k.isAfterYear(_, N) || v && k.isBeforeYear(_, v) || f && k.isAfterYear(_, f))
      return !0;
    if (!y)
      return !1;
    const B = k.startOfYear(_);
    return y(B);
  }, [d, p, f, v, N, y, k]), L = se((_, B) => {
    if (b)
      return;
    const H = k.setYear(I ?? A, B);
    j(H);
  }), z = se((_) => {
    Z(k.setYear(I ?? A, _)) || (F(_), J(!0), C == null || C(_));
  });
  m.useEffect(() => {
    F((_) => O !== null && _ !== O ? O : _);
  }, [O]);
  const X = se((_, B) => {
    switch (_.key) {
      case "ArrowUp":
        z(B - x), _.preventDefault();
        break;
      case "ArrowDown":
        z(B + x), _.preventDefault();
        break;
      case "ArrowLeft":
        z(B + (q ? 1 : -1)), _.preventDefault();
        break;
      case "ArrowRight":
        z(B + (q ? -1 : 1)), _.preventDefault();
        break;
    }
  }), ee = se((_, B) => {
    z(B);
  }), ne = se((_, B) => {
    U === B && J(!1);
  }), G = m.useRef(null), te = Se(o, G);
  return m.useEffect(() => {
    if (a || G.current === null)
      return;
    const _ = G.current.querySelector('[tabindex="0"]');
    if (!_)
      return;
    const B = _.offsetHeight, H = _.offsetTop, oe = G.current.clientHeight, he = G.current.scrollTop, ie = H + B;
    B > oe || H < he || (G.current.scrollTop = ie - oe / 2 - B / 2);
  }, [a]), /* @__PURE__ */ E(oO, W({
    ref: te,
    className: ae(D.root, i),
    ownerState: $,
    role: "radiogroup",
    "aria-labelledby": P
  }, R, {
    children: k.getYearRange([v, f]).map((_) => {
      const B = k.getYear(_), H = B === O, oe = u || Z(_);
      return /* @__PURE__ */ E(QE, {
        selected: H,
        value: B,
        onClick: L,
        onKeyDown: X,
        autoFocus: Y && B === U,
        disabled: oe,
        tabIndex: B === U ? 0 : -1,
        onFocus: ee,
        onBlur: ne,
        "aria-current": V === B ? "date" : void 0,
        yearsPerRow: x,
        children: k.format(_, "year")
      }, k.format(_, "year"));
    })
  }));
});
process.env.NODE_ENV !== "production" && (Tp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true` picker is disabled
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  gridLabelId: n.string,
  hasFocus: n.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   */
  minDate: n.object,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: n.func,
  onFocusedViewChange: n.func,
  onYearFocus: n.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: n.object,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
});
const rO = (e) => pe("MuiPickersCalendarHeader", e), aO = de("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]), iO = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone", "format"], sO = ["ownerState"], lO = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  }, rO, t);
}, cO = Q("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
}), uO = Q("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (e, t) => t.labelContainer
})(({
  theme: e
}) => W({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, e.typography.body1, {
  fontWeight: e.typography.fontWeightMedium
})), dO = Q("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (e, t) => t.label
})({
  marginRight: 6
}), pO = Q(fn, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (e, t) => t.switchViewButton
})({
  marginRight: "auto",
  variants: [{
    props: {
      view: "year"
    },
    style: {
      [`.${aO.switchViewIcon}`]: {
        transform: "rotate(180deg)"
      }
    }
  }]
}), fO = Q(a1, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (e, t) => t.switchViewIcon
})(({
  theme: e
}) => ({
  willChange: "transform",
  transition: e.transitions.create("transform"),
  transform: "rotate(0deg)"
})), kp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = on(), a = Ae(), i = Le({
    props: t,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: s,
    slotProps: l,
    currentMonth: c,
    disabled: u,
    disableFuture: d,
    disablePast: p,
    maxDate: f,
    minDate: v,
    onMonthChange: h,
    onViewChange: b,
    view: y,
    reduceAnimations: C,
    views: S,
    labelId: w,
    className: x,
    timezone: g,
    format: P = `${a.formats.month} ${a.formats.year}`
  } = i, R = ge(i, iO), I = i, j = lO(i), M = (s == null ? void 0 : s.switchViewButton) ?? pO, N = Ve({
    elementType: M,
    externalSlotProps: l == null ? void 0 : l.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": r.calendarViewSwitchingButtonAriaLabel(y)
    },
    ownerState: I,
    className: j.switchViewButton
  }), q = (s == null ? void 0 : s.switchViewIcon) ?? fO, k = Ve({
    elementType: q,
    externalSlotProps: l == null ? void 0 : l.switchViewIcon,
    ownerState: void 0,
    className: j.switchViewIcon
  }), A = ge(k, sO), $ = () => h(a.addMonths(c, 1), "left"), D = () => h(a.addMonths(c, -1), "right"), V = C1(c, {
    disableFuture: d,
    maxDate: f,
    timezone: g
  }), O = S1(c, {
    disablePast: p,
    minDate: v,
    timezone: g
  }), U = () => {
    if (!(S.length === 1 || !b || u))
      if (S.length === 2)
        b(S.find((Y) => Y !== y) || S[0]);
      else {
        const Y = S.indexOf(y) !== 0 ? 0 : 1;
        b(S[Y]);
      }
  };
  if (S.length === 1 && S[0] === "year")
    return null;
  const F = a.formatByString(c, P);
  return /* @__PURE__ */ le(cO, W({}, R, {
    ownerState: I,
    className: ae(x, j.root),
    ref: o,
    children: [/* @__PURE__ */ le(uO, {
      role: "presentation",
      onClick: U,
      ownerState: I,
      "aria-live": "polite",
      className: j.labelContainer,
      children: [/* @__PURE__ */ E(Op, {
        reduceAnimations: C,
        transKey: F,
        children: /* @__PURE__ */ E(dO, {
          id: w,
          ownerState: I,
          className: j.label,
          children: F
        })
      }), S.length > 1 && !u && /* @__PURE__ */ E(M, W({}, N, {
        children: /* @__PURE__ */ E(q, W({}, A))
      }))]
    }), /* @__PURE__ */ E(Dn, {
      in: y === "day",
      children: /* @__PURE__ */ E(g1, {
        slots: s,
        slotProps: l,
        onGoToPrevious: D,
        isPreviousDisabled: O,
        previousLabel: r.previousMonth,
        onGoToNext: $,
        isNextDisabled: V,
        nextLabel: r.nextMonth
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (kp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  currentMonth: n.object.isRequired,
  disabled: n.bool,
  disableFuture: n.bool,
  disablePast: n.bool,
  /**
   * Format used to display the date.
   * @default `${adapter.formats.month} ${adapter.formats.year}`
   */
  format: n.string,
  labelId: n.string,
  maxDate: n.object.isRequired,
  minDate: n.object.isRequired,
  onMonthChange: n.func.isRequired,
  onViewChange: n.func,
  reduceAnimations: n.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  timezone: n.string.isRequired,
  view: n.oneOf(["day", "month", "year"]).isRequired,
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired).isRequired
});
const mO = "@media (prefers-reduced-motion: reduce)", Xn = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), Uc = Xn && Xn[1] ? parseInt(Xn[1], 10) : null, qc = Xn && Xn[2] ? parseInt(Xn[2], 10) : null, hO = Uc && Uc < 10 || qc && qc < 13 || !1, Dp = () => Mu(mO, {
  defaultMatches: !1
}) || hO, bO = (e) => pe("MuiDateCalendar", e);
de("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const gO = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"], yO = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  }, bO, t);
};
function vO(e, t) {
  const o = Ae(), r = dr(), a = Dp(), i = Le({
    props: e,
    name: t
  });
  return W({}, i, {
    loading: i.loading ?? !1,
    disablePast: i.disablePast ?? !1,
    disableFuture: i.disableFuture ?? !1,
    openTo: i.openTo ?? "day",
    views: i.views ?? ["year", "day"],
    reduceAnimations: i.reduceAnimations ?? a,
    renderLoading: i.renderLoading ?? (() => /* @__PURE__ */ E("span", {
      children: "..."
    })),
    minDate: Rt(o, i.minDate, r.minDate),
    maxDate: Rt(o, i.maxDate, r.maxDate)
  });
}
const xO = Q(O1, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "flex",
  flexDirection: "column",
  height: Es
}), wO = Q(Op, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (e, t) => t.viewTransitionContainer
})({}), Mp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Ae(), a = en(), i = vO(t, "MuiDateCalendar"), {
    autoFocus: s,
    onViewChange: l,
    value: c,
    defaultValue: u,
    referenceDate: d,
    disableFuture: p,
    disablePast: f,
    onChange: v,
    onYearChange: h,
    onMonthChange: b,
    reduceAnimations: y,
    shouldDisableDate: C,
    shouldDisableMonth: S,
    shouldDisableYear: w,
    view: x,
    views: g,
    openTo: P,
    className: R,
    disabled: I,
    readOnly: j,
    minDate: M,
    maxDate: N,
    disableHighlightToday: q,
    focusedView: k,
    onFocusedViewChange: A,
    showDaysOutsideCurrentMonth: $,
    fixedWeekNumber: D,
    dayOfWeekFormatter: V,
    slots: O,
    slotProps: U,
    loading: F,
    renderLoading: Y,
    displayWeekNumber: K,
    yearsPerRow: J,
    monthsPerRow: Z,
    timezone: L
  } = i, z = ge(i, gO), {
    value: X,
    handleValueChange: ee,
    timezone: ne
  } = Ts({
    name: "DateCalendar",
    timezone: L,
    value: c,
    defaultValue: u,
    onChange: v,
    valueManager: Zt
  }), {
    view: G,
    setView: te,
    focusedView: _,
    setFocusedView: B,
    goToNextView: H,
    setValueAndGoToNextView: oe
  } = ap({
    view: x,
    views: g,
    openTo: P,
    onChange: ee,
    onViewChange: l,
    autoFocus: s,
    focusedView: k,
    onFocusedViewChange: A
  }), {
    referenceDate: he,
    calendarState: ie,
    changeFocusedDay: ce,
    changeMonth: xe,
    handleChangeMonth: Ce,
    isDateDisabled: ye,
    onMonthSwitchingAnimationEnd: Ze
  } = pE({
    value: X,
    referenceDate: d,
    reduceAnimations: y,
    onMonthChange: b,
    minDate: M,
    maxDate: N,
    shouldDisableDate: C,
    disablePast: f,
    disableFuture: p,
    timezone: ne
  }), Qe = I && X || M, Te = I && X || N, tt = `${a}-grid-label`, it = _ !== null, st = (O == null ? void 0 : O.calendarHeader) ?? kp, we = Ve({
    elementType: st,
    externalSlotProps: U == null ? void 0 : U.calendarHeader,
    additionalProps: {
      views: g,
      view: G,
      currentMonth: ie.currentMonth,
      onViewChange: te,
      onMonthChange: (Fe, At) => Ce({
        newMonth: Fe,
        direction: At
      }),
      minDate: Qe,
      maxDate: Te,
      disabled: I,
      disablePast: f,
      disableFuture: p,
      reduceAnimations: y,
      timezone: ne,
      labelId: tt
    },
    ownerState: i
  }), be = se((Fe) => {
    const At = r.startOfMonth(Fe), xo = r.endOfMonth(Fe), an = ye(Fe) ? Fo({
      utils: r,
      date: Fe,
      minDate: r.isBefore(M, At) ? At : M,
      maxDate: r.isAfter(N, xo) ? xo : N,
      disablePast: f,
      disableFuture: p,
      isDateDisabled: ye,
      timezone: ne
    }) : Fe;
    an ? (oe(an, "finish"), b == null || b(At)) : (H(), xe(At)), ce(an, !0);
  }), gt = se((Fe) => {
    const At = r.startOfYear(Fe), xo = r.endOfYear(Fe), an = ye(Fe) ? Fo({
      utils: r,
      date: Fe,
      minDate: r.isBefore(M, At) ? At : M,
      maxDate: r.isAfter(N, xo) ? xo : N,
      disablePast: f,
      disableFuture: p,
      isDateDisabled: ye,
      timezone: ne
    }) : Fe;
    an ? (oe(an, "finish"), h == null || h(an)) : (H(), xe(At)), ce(an, !0);
  }), bn = se((Fe) => ee(Fe && Hr(r, Fe, X ?? he), "finish", G));
  m.useEffect(() => {
    X != null && r.isValid(X) && xe(X);
  }, [X]);
  const _t = i, $n = yO(_t), fe = {
    disablePast: f,
    disableFuture: p,
    maxDate: N,
    minDate: M
  }, ve = {
    disableHighlightToday: q,
    readOnly: j,
    disabled: I,
    timezone: ne,
    gridLabelId: tt
  }, He = m.useRef(G);
  m.useEffect(() => {
    He.current !== G && (_ === He.current && B(G, !0), He.current = G);
  }, [_, B, G]);
  const rn = m.useMemo(() => [X], [X]);
  return /* @__PURE__ */ le(xO, W({
    ref: o,
    className: ae($n.root, R),
    ownerState: _t
  }, z, {
    children: [/* @__PURE__ */ E(st, W({}, we, {
      slots: O,
      slotProps: U
    })), /* @__PURE__ */ E(wO, {
      reduceAnimations: y,
      className: $n.viewTransitionContainer,
      transKey: G,
      ownerState: _t,
      children: /* @__PURE__ */ le("div", {
        children: [G === "year" && /* @__PURE__ */ E(Tp, W({}, fe, ve, {
          value: X,
          onChange: gt,
          shouldDisableYear: w,
          hasFocus: it,
          onFocusedViewChange: (Fe) => B("year", Fe),
          yearsPerRow: J,
          referenceDate: he
        })), G === "month" && /* @__PURE__ */ E(Rp, W({}, fe, ve, {
          hasFocus: it,
          className: R,
          value: X,
          onChange: be,
          shouldDisableMonth: S,
          onFocusedViewChange: (Fe) => B("month", Fe),
          monthsPerRow: Z,
          referenceDate: he
        })), G === "day" && /* @__PURE__ */ E(_E, W({}, ie, fe, ve, {
          onMonthSwitchingAnimationEnd: Ze,
          onFocusedDayChange: ce,
          reduceAnimations: y,
          selectedDays: rn,
          onSelectedDaysChange: bn,
          shouldDisableDate: C,
          shouldDisableMonth: S,
          shouldDisableYear: w,
          hasFocus: it,
          onFocusedViewChange: (Fe) => B("day", Fe),
          showDaysOutsideCurrentMonth: $,
          fixedWeekNumber: D,
          dayOfWeekFormatter: V,
          displayWeekNumber: K,
          slots: O,
          slotProps: U,
          loading: F,
          renderLoading: Y
        }))]
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Mp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Controlled focused view.
   */
  focusedView: n.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: n.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
});
function CO(e) {
  return pe("MuiPickersToolbar", e);
}
de("MuiPickersToolbar", ["root", "content"]);
const SO = ["children", "className", "toolbarTitle", "hidden", "titleId", "isLandscape", "classes", "landscapeDirection"], EO = (e) => {
  const {
    classes: t,
    isLandscape: o
  } = e;
  return me({
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", o && "penIconButtonLandscape"]
  }, CO, t);
}, OO = Q("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: e.spacing(2, 3),
  variants: [{
    props: {
      isLandscape: !0
    },
    style: {
      height: "auto",
      maxWidth: 160,
      padding: 16,
      justifyContent: "flex-start",
      flexWrap: "wrap"
    }
  }]
})), PO = Q("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (e, t) => t.content
})({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  variants: [{
    props: {
      isLandscape: !0
    },
    style: {
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexDirection: "column"
    }
  }, {
    props: {
      isLandscape: !0,
      landscapeDirection: "row"
    },
    style: {
      flexDirection: "row"
    }
  }]
}), RO = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiPickersToolbar"
  }), {
    children: a,
    className: i,
    toolbarTitle: s,
    hidden: l,
    titleId: c
  } = r, u = ge(r, SO), d = r, p = EO(d);
  return l ? null : /* @__PURE__ */ le(OO, W({
    ref: o,
    className: ae(p.root, i),
    ownerState: d
  }, u, {
    children: [/* @__PURE__ */ E(mn, {
      color: "text.secondary",
      variant: "overline",
      id: c,
      children: s
    }), /* @__PURE__ */ E(PO, {
      className: p.content,
      ownerState: d,
      children: a
    })]
  }));
});
function TO(e) {
  return pe("MuiDatePickerToolbar", e);
}
de("MuiDatePickerToolbar", ["root", "title"]);
const kO = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views", "className", "onViewChange", "view"], DO = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    title: ["title"]
  }, TO, t);
}, MO = Q(RO, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), $O = Q(mn, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (e, t) => t.title
})({
  variants: [{
    props: {
      isLandscape: !0
    },
    style: {
      margin: "auto 16px auto auto"
    }
  }]
}), $p = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiDatePickerToolbar"
  }), {
    value: a,
    isLandscape: i,
    toolbarFormat: s,
    toolbarPlaceholder: l = "––",
    views: c,
    className: u
  } = r, d = ge(r, kO), p = Ae(), f = on(), v = DO(r), h = m.useMemo(() => {
    if (!a)
      return l;
    const y = Ps(p, {
      format: s,
      views: c
    }, !0);
    return p.formatByString(a, y);
  }, [a, s, l, p, c]), b = r;
  return /* @__PURE__ */ E(MO, W({
    ref: o,
    toolbarTitle: f.datePickerToolbarTitle,
    isLandscape: i,
    className: ae(v.root, u)
  }, d, {
    children: /* @__PURE__ */ E($O, {
      variant: "h4",
      align: i ? "left" : "center",
      ownerState: b,
      className: v.title,
      children: h
    })
  }));
});
process.env.NODE_ENV !== "production" && ($p.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  disabled: n.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: n.bool,
  isLandscape: n.bool.isRequired,
  onChange: n.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: n.func.isRequired,
  readOnly: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  titleId: n.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: n.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: n.node,
  value: n.object,
  /**
   * Currently visible picker view.
   */
  view: n.oneOf(["day", "month", "year"]).isRequired,
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired).isRequired
});
function Ip(e, t) {
  const o = Ae(), r = dr(), a = Le({
    props: e,
    name: t
  }), i = m.useMemo(() => {
    var s;
    return ((s = a.localeText) == null ? void 0 : s.toolbarTitle) == null ? a.localeText : W({}, a.localeText, {
      datePickerToolbarTitle: a.localeText.toolbarTitle
    });
  }, [a.localeText]);
  return W({}, a, {
    localeText: i
  }, y1({
    views: a.views,
    openTo: a.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: a.disableFuture ?? !1,
    disablePast: a.disablePast ?? !1,
    minDate: Rt(o, a.minDate, r.minDate),
    maxDate: Rt(o, a.maxDate, r.maxDate),
    slots: W({
      toolbar: $p
    }, a.slots)
  });
}
function IO(e) {
  return pe("MuiPickersPopper", e);
}
de("MuiPickersPopper", ["root", "paper"]);
const NO = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"], _O = (e) => {
  const {
    classes: t
  } = e;
  return me({
    root: ["root"],
    paper: ["paper"]
  }, IO, t);
}, AO = Q(Td, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  zIndex: e.zIndex.modal
})), FO = Q(yo, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  outline: 0,
  transformOrigin: "top center",
  variants: [{
    props: ({
      placement: e
    }) => ["top", "top-start", "top-end"].includes(e),
    style: {
      transformOrigin: "bottom center"
    }
  }]
});
function VO(e, t) {
  return t.documentElement.clientWidth < e.clientX || t.documentElement.clientHeight < e.clientY;
}
function LO(e, t) {
  const o = m.useRef(!1), r = m.useRef(!1), a = m.useRef(null), i = m.useRef(!1);
  m.useEffect(() => {
    if (!e)
      return;
    function c() {
      i.current = !0;
    }
    return document.addEventListener("mousedown", c, !0), document.addEventListener("touchstart", c, !0), () => {
      document.removeEventListener("mousedown", c, !0), document.removeEventListener("touchstart", c, !0), i.current = !1;
    };
  }, [e]);
  const s = se((c) => {
    if (!i.current)
      return;
    const u = r.current;
    r.current = !1;
    const d = Je(a.current);
    if (!a.current || // is a TouchEvent?
    "clientX" in c && VO(c, d))
      return;
    if (o.current) {
      o.current = !1;
      return;
    }
    let p;
    c.composedPath ? p = c.composedPath().indexOf(a.current) > -1 : p = !d.documentElement.contains(c.target) || a.current.contains(c.target), !p && !u && t(c);
  }), l = () => {
    r.current = !0;
  };
  return m.useEffect(() => {
    if (e) {
      const c = Je(a.current), u = () => {
        o.current = !0;
      };
      return c.addEventListener("touchstart", s), c.addEventListener("touchmove", u), () => {
        c.removeEventListener("touchstart", s), c.removeEventListener("touchmove", u);
      };
    }
  }, [e, s]), m.useEffect(() => {
    if (e) {
      const c = Je(a.current);
      return c.addEventListener("click", s), () => {
        c.removeEventListener("click", s), r.current = !1;
      };
    }
  }, [e, s]), [a, l, l];
}
const jO = /* @__PURE__ */ m.forwardRef((e, t) => {
  const {
    PaperComponent: o,
    popperPlacement: r,
    ownerState: a,
    children: i,
    paperSlotProps: s,
    paperClasses: l,
    onPaperClick: c,
    onPaperTouchStart: u
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = e, d = ge(e, NO), p = W({}, a, {
    placement: r
  }), f = Ve({
    elementType: o,
    externalSlotProps: s,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: t
    },
    className: l,
    ownerState: p
  });
  return /* @__PURE__ */ E(o, W({}, d, f, {
    onClick: (v) => {
      var h;
      c(v), (h = f.onClick) == null || h.call(f, v);
    },
    onTouchStart: (v) => {
      var h;
      u(v), (h = f.onTouchStart) == null || h.call(f, v);
    },
    ownerState: p,
    children: i
  }));
});
function BO(e) {
  const t = Le({
    props: e,
    name: "MuiPickersPopper"
  }), {
    anchorEl: o,
    children: r,
    containerRef: a = null,
    shouldRestoreFocus: i,
    onBlur: s,
    onDismiss: l,
    open: c,
    role: u,
    placement: d,
    slots: p,
    slotProps: f,
    reduceAnimations: v
  } = t;
  m.useEffect(() => {
    function $(D) {
      c && D.key === "Escape" && l();
    }
    return document.addEventListener("keydown", $), () => {
      document.removeEventListener("keydown", $);
    };
  }, [l, c]);
  const h = m.useRef(null);
  m.useEffect(() => {
    u === "tooltip" || i && !i() || (c ? h.current = Ct(document) : h.current && h.current instanceof HTMLElement && setTimeout(() => {
      h.current instanceof HTMLElement && h.current.focus();
    }));
  }, [c, u, i]);
  const [b, y, C] = LO(c, s ?? l), S = m.useRef(null), w = Se(S, a), x = Se(w, b), g = t, P = _O(g), R = Dp(), I = v ?? R, j = ($) => {
    $.key === "Escape" && ($.stopPropagation(), l());
  }, M = (p == null ? void 0 : p.desktopTransition) ?? I ? Dn : Pa, N = (p == null ? void 0 : p.desktopTrapFocus) ?? Ko, q = (p == null ? void 0 : p.desktopPaper) ?? FO, k = (p == null ? void 0 : p.popper) ?? AO, A = Ve({
    elementType: k,
    externalSlotProps: f == null ? void 0 : f.popper,
    additionalProps: {
      transition: !0,
      role: u,
      open: c,
      anchorEl: o,
      placement: d,
      onKeyDown: j
    },
    className: P.root,
    ownerState: t
  });
  return /* @__PURE__ */ E(k, W({}, A, {
    children: ({
      TransitionProps: $,
      placement: D
    }) => /* @__PURE__ */ E(N, W({
      open: c,
      disableAutoFocus: !0,
      disableRestoreFocus: !0,
      disableEnforceFocus: u === "tooltip",
      isEnabled: () => !0
    }, f == null ? void 0 : f.desktopTrapFocus, {
      children: /* @__PURE__ */ E(M, W({}, $, f == null ? void 0 : f.desktopTransition, {
        children: /* @__PURE__ */ E(jO, {
          PaperComponent: q,
          ownerState: g,
          popperPlacement: D,
          ref: x,
          onPaperClick: y,
          onPaperTouchStart: C,
          paperClasses: P.paper,
          paperSlotProps: f == null ? void 0 : f.desktopPaper,
          children: r
        })
      }))
    }))
  }));
}
const zO = ({
  open: e,
  onOpen: t,
  onClose: o
}) => {
  const r = m.useRef(typeof e == "boolean").current, [a, i] = m.useState(!1);
  m.useEffect(() => {
    if (r) {
      if (typeof e != "boolean")
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      i(e);
    }
  }, [r, e]);
  const s = m.useCallback((l) => {
    r || i(l), l && t && t(), !l && o && o();
  }, [r, t, o]);
  return {
    isOpen: a,
    setIsOpen: s
  };
}, WO = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: r,
    isControlled: a
  } = e, i = !a && !r.hasBeenModifiedSinceMount;
  return t.name === "setValueFromField" ? !0 : t.name === "setValueFromAction" ? i && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(r.lastPublishedValue) : t.name === "setValueFromView" && t.selectionState !== "shallow" || t.name === "setValueFromShortcut" ? i ? !0 : o(r.lastPublishedValue) : !1;
}, UO = (e) => {
  const {
    action: t,
    hasChanged: o,
    dateState: r,
    isControlled: a,
    closeOnSelect: i
  } = e, s = !a && !r.hasBeenModifiedSinceMount;
  return t.name === "setValueFromAction" ? s && ["accept", "today", "clear"].includes(t.pickerAction) ? !0 : o(r.lastCommittedValue) : t.name === "setValueFromView" && t.selectionState === "finish" && i ? s ? !0 : o(r.lastCommittedValue) : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" && o(r.lastCommittedValue) : !1;
}, qO = (e) => {
  const {
    action: t,
    closeOnSelect: o
  } = e;
  return t.name === "setValueFromAction" ? !0 : t.name === "setValueFromView" ? t.selectionState === "finish" && o : t.name === "setValueFromShortcut" ? t.changeImportance === "accept" : !1;
}, HO = ({
  props: e,
  valueManager: t,
  valueType: o,
  wrapperVariant: r,
  validator: a
}) => {
  const {
    onAccept: i,
    onChange: s,
    value: l,
    defaultValue: c,
    closeOnSelect: u = r === "desktop",
    timezone: d
  } = e, {
    current: p
  } = m.useRef(c), {
    current: f
  } = m.useRef(l !== void 0);
  process.env.NODE_ENV !== "production" && (m.useEffect(() => {
    f !== (l !== void 0) && console.error([`MUI X: A component is changing the ${f ? "" : "un"}controlled value of a picker to be ${f ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled valuefor the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
  }, [l]), m.useEffect(() => {
    !f && p !== c && console.error(["MUI X: A component is changing the defaultValue of an uncontrolled picker after being initialized. To suppress this warning opt to use a controlled value."].join(`
`));
  }, [JSON.stringify(p)]));
  const v = Ae(), h = Mn(), {
    isOpen: b,
    setIsOpen: y
  } = zO(e), [C, S] = m.useState(() => {
    let K;
    return l !== void 0 ? K = l : p !== void 0 ? K = p : K = t.emptyValue, {
      draft: K,
      lastPublishedValue: K,
      lastCommittedValue: K,
      lastControlledValue: l,
      hasBeenModifiedSinceMount: !1
    };
  }), {
    timezone: w,
    handleValueChange: x
  } = Rs({
    timezone: d,
    value: l,
    defaultValue: p,
    onChange: s,
    valueManager: t
  });
  hp(W({}, e, {
    value: C.draft,
    timezone: w
  }), a, t.isSameError, t.defaultErrorState);
  const g = se((K) => {
    const J = {
      action: K,
      dateState: C,
      hasChanged: (X) => !t.areValuesEqual(v, K.value, X),
      isControlled: f,
      closeOnSelect: u
    }, Z = WO(J), L = UO(J), z = qO(J);
    if (S((X) => W({}, X, {
      draft: K.value,
      lastPublishedValue: Z ? K.value : X.lastPublishedValue,
      lastCommittedValue: L ? K.value : X.lastCommittedValue,
      hasBeenModifiedSinceMount: !0
    })), Z) {
      const ee = {
        validationError: K.name === "setValueFromField" ? K.context.validationError : a({
          adapter: h,
          value: K.value,
          props: W({}, e, {
            value: K.value,
            timezone: w
          })
        })
      };
      K.name === "setValueFromShortcut" && (ee.shortcut = K.shortcut), x(K.value, ee);
    }
    L && i && i(K.value), z && y(!1);
  });
  if (l !== void 0 && (C.lastControlledValue === void 0 || !t.areValuesEqual(v, C.lastControlledValue, l))) {
    const K = t.areValuesEqual(v, C.draft, l);
    S((J) => W({}, J, {
      lastControlledValue: l
    }, K ? {} : {
      lastCommittedValue: l,
      lastPublishedValue: l,
      draft: l,
      hasBeenModifiedSinceMount: !0
    }));
  }
  const P = se(() => {
    g({
      value: t.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  }), R = se(() => {
    g({
      value: C.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  }), I = se(() => {
    g({
      value: C.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  }), j = se(() => {
    g({
      value: C.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  }), M = se(() => {
    g({
      value: t.getTodayValue(v, w, o),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  }), N = se((K) => {
    K.preventDefault(), y(!0);
  }), q = se((K) => {
    K == null || K.preventDefault(), y(!1);
  }), k = se((K, J = "partial") => g({
    name: "setValueFromView",
    value: K,
    selectionState: J
  })), A = se((K, J, Z) => g({
    name: "setValueFromShortcut",
    value: K,
    changeImportance: J,
    shortcut: Z
  })), $ = se((K, J) => g({
    name: "setValueFromField",
    value: K,
    context: J
  })), D = {
    onClear: P,
    onAccept: R,
    onDismiss: I,
    onCancel: j,
    onSetToday: M,
    onOpen: N,
    onClose: q
  }, V = {
    value: C.draft,
    onChange: $
  }, O = m.useMemo(() => t.cleanValue(v, C.draft), [v, t, C.draft]), U = {
    value: O,
    onChange: k,
    onClose: q,
    open: b
  }, Y = W({}, D, {
    value: O,
    onChange: k,
    onSelectShortcut: A,
    isValid: (K) => {
      const J = a({
        adapter: h,
        value: K,
        props: W({}, e, {
          value: K,
          timezone: w
        })
      });
      return !t.hasError(J);
    }
  });
  return {
    open: b,
    fieldProps: V,
    viewProps: U,
    layoutProps: Y,
    actions: D
  };
}, YO = ["className", "sx"], KO = ({
  props: e,
  propsFromPickerValue: t,
  additionalViewProps: o,
  autoFocusView: r,
  rendererInterceptor: a,
  fieldRef: i
}) => {
  const {
    onChange: s,
    open: l,
    onClose: c
  } = t, {
    views: u,
    openTo: d,
    onViewChange: p,
    viewRenderers: f,
    timezone: v
  } = e, h = ge(e, YO), {
    view: b,
    setView: y,
    defaultView: C,
    focusedView: S,
    setFocusedView: w,
    setValueAndGoToNextView: x
  } = ap({
    view: void 0,
    views: u,
    openTo: d,
    onChange: s,
    onViewChange: p,
    autoFocus: r
  }), {
    hasUIView: g,
    viewModeLookup: P
  } = m.useMemo(() => u.reduce((k, A) => {
    let $;
    return f[A] != null ? $ = "UI" : $ = "field", k.viewModeLookup[A] = $, $ === "UI" && (k.hasUIView = !0), k;
  }, {
    hasUIView: !1,
    viewModeLookup: {}
  }), [f, u]), R = m.useMemo(() => u.reduce((k, A) => f[A] != null && x1(A) ? k + 1 : k, 0), [f, u]), I = P[b], j = se(() => I === "UI"), [M, N] = m.useState(I === "UI" ? b : null);
  return M !== b && P[b] === "UI" && N(b), et(() => {
    I === "field" && l && (c(), setTimeout(() => {
      var k, A;
      (k = i == null ? void 0 : i.current) == null || k.setSelectedSections(b), (A = i == null ? void 0 : i.current) == null || A.focusField(b);
    }));
  }, [b]), et(() => {
    if (!l)
      return;
    let k = b;
    I === "field" && M != null && (k = M), k !== C && P[k] === "UI" && P[C] === "UI" && (k = C), k !== b && y(k), w(k, !0);
  }, [l]), {
    hasUIView: g,
    shouldRestoreFocus: j,
    layoutProps: {
      views: u,
      view: M,
      onViewChange: y
    },
    renderCurrentView: () => {
      if (M == null)
        return null;
      const k = f[M];
      if (k == null)
        return null;
      const A = W({}, h, o, t, {
        views: u,
        timezone: v,
        onChange: x,
        view: M,
        onViewChange: y,
        focusedView: S,
        onFocusedViewChange: w,
        showViewSwitcher: R > 1,
        timeViewsCount: R
      });
      return a ? a(f, M, A) : k(A);
    }
  };
};
function Hc() {
  return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
}
const GO = (e, t) => {
  const [o, r] = m.useState(Hc);
  return et(() => {
    const i = () => {
      r(Hc());
    };
    return window.addEventListener("orientationchange", i), () => {
      window.removeEventListener("orientationchange", i);
    };
  }, []), lS(e, ["hours", "minutes", "seconds"]) ? !1 : (t || o) === "landscape";
}, XO = ({
  props: e,
  propsFromPickerValue: t,
  propsFromPickerViews: o,
  wrapperVariant: r
}) => {
  const {
    orientation: a
  } = e, i = GO(o.views, a), s = It();
  return {
    layoutProps: W({}, o, t, {
      isLandscape: i,
      isRtl: s,
      wrapperVariant: r,
      disabled: e.disabled,
      readOnly: e.readOnly
    })
  };
}, ZO = (e, t = "warning") => {
  let o = !1;
  const r = Array.isArray(e) ? e.join(`
`) : e;
  return () => {
    o || (o = !0, t === "error" ? console.error(r) : console.warn(r));
  };
}, QO = ZO(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]), Np = ({
  props: e,
  valueManager: t,
  valueType: o,
  wrapperVariant: r,
  additionalViewProps: a,
  validator: i,
  autoFocusView: s,
  rendererInterceptor: l,
  fieldRef: c
}) => {
  process.env.NODE_ENV !== "production" && e.renderInput != null && QO();
  const u = HO({
    props: e,
    valueManager: t,
    valueType: o,
    wrapperVariant: r,
    validator: i
  }), d = KO({
    props: e,
    additionalViewProps: a,
    autoFocusView: s,
    fieldRef: c,
    propsFromPickerValue: u.viewProps,
    rendererInterceptor: l
  }), p = XO({
    props: e,
    wrapperVariant: r,
    propsFromPickerValue: u.layoutProps,
    propsFromPickerViews: d.layoutProps
  });
  return {
    // Picker value
    open: u.open,
    actions: u.actions,
    fieldProps: u.fieldProps,
    // Picker views
    renderCurrentView: d.renderCurrentView,
    hasUIView: d.hasUIView,
    shouldRestoreFocus: d.shouldRestoreFocus,
    // Picker layout
    layoutProps: p.layoutProps
  };
};
function _p(e) {
  return pe("MuiPickersLayout", e);
}
const xn = de("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]);
function JO(e) {
  return pe("MuiDialogActions", e);
}
de("MuiDialogActions", ["root", "spacing"]);
const eP = ["className", "disableSpacing"], tP = (e) => {
  const {
    classes: t,
    disableSpacing: o
  } = e;
  return me({
    root: ["root", !o && "spacing"]
  }, JO, t);
}, nP = Q("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, !o.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => T({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), Ap = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: a,
    disableSpacing: i = !1
  } = r, s = ue(r, eP), l = T({}, r, {
    disableSpacing: i
  }), c = tP(l);
  return /* @__PURE__ */ E(nP, T({
    className: ae(c.root, a),
    ownerState: l,
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (Ap.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const oP = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function Fp(e) {
  const {
    onAccept: t,
    onClear: o,
    onCancel: r,
    onSetToday: a,
    actions: i
  } = e, s = ge(e, oP), l = on();
  if (i == null || i.length === 0)
    return null;
  const c = i == null ? void 0 : i.map((u) => {
    switch (u) {
      case "clear":
        return /* @__PURE__ */ E(zn, {
          onClick: o,
          children: l.clearButtonLabel
        }, u);
      case "cancel":
        return /* @__PURE__ */ E(zn, {
          onClick: r,
          children: l.cancelButtonLabel
        }, u);
      case "accept":
        return /* @__PURE__ */ E(zn, {
          onClick: t,
          children: l.okButtonLabel
        }, u);
      case "today":
        return /* @__PURE__ */ E(zn, {
          onClick: a,
          children: l.todayButtonLabel
        }, u);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ E(Ap, W({}, s, {
    children: c
  }));
}
process.env.NODE_ENV !== "production" && (Fp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: n.arrayOf(n.oneOf(["accept", "cancel", "clear", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: n.bool,
  onAccept: n.func.isRequired,
  onCancel: n.func.isRequired,
  onClear: n.func.isRequired,
  onSetToday: n.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function rP(e) {
  return pe("MuiListItem", e);
}
const Bn = de("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), aP = de("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]);
function iP(e) {
  return pe("MuiListItemSecondaryAction", e);
}
de("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const sP = ["className"], lP = (e) => {
  const {
    disableGutters: t,
    classes: o
  } = e;
  return me({
    root: ["root", t && "disableGutters"]
  }, iP, o);
}, cP = Q("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => T({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), Fs = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: a
  } = r, i = ue(r, sP), s = m.useContext(Kn), l = T({}, r, {
    disableGutters: s.disableGutters
  }), c = lP(l);
  return /* @__PURE__ */ E(cP, T({
    className: ae(c.root, a),
    ownerState: l,
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (Fs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
Fs.muiName = "ListItemSecondaryAction";
const uP = ["className"], dP = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], pP = (e, t) => {
  const {
    ownerState: o
  } = e;
  return [t.root, o.dense && t.dense, o.alignItems === "flex-start" && t.alignItemsFlexStart, o.divider && t.divider, !o.disableGutters && t.gutters, !o.disablePadding && t.padding, o.button && t.button, o.hasSecondaryAction && t.secondaryAction];
}, fP = (e) => {
  const {
    alignItems: t,
    button: o,
    classes: r,
    dense: a,
    disabled: i,
    disableGutters: s,
    disablePadding: l,
    divider: c,
    hasSecondaryAction: u,
    selected: d
  } = e;
  return me({
    root: ["root", a && "dense", !s && "gutters", !l && "padding", c && "divider", i && "disabled", o && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", d && "selected"],
    container: ["container"]
  }, rP, r);
}, mP = Q("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: pP
})(({
  theme: e,
  ownerState: t
}) => T({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && T({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${aP.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${Bn.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Bn.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Be(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Bn.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Be(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Bn.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Bn.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Be(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Be(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), hP = Q("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), Vp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: a = "center",
    autoFocus: i = !1,
    button: s = !1,
    children: l,
    className: c,
    component: u,
    components: d = {},
    componentsProps: p = {},
    ContainerComponent: f = "li",
    ContainerProps: {
      className: v
    } = {},
    dense: h = !1,
    disabled: b = !1,
    disableGutters: y = !1,
    disablePadding: C = !1,
    divider: S = !1,
    focusVisibleClassName: w,
    secondaryAction: x,
    selected: g = !1,
    slotProps: P = {},
    slots: R = {}
  } = r, I = ue(r.ContainerProps, uP), j = ue(r, dP), M = m.useContext(Kn), N = m.useMemo(() => ({
    dense: h || M.dense || !1,
    alignItems: a,
    disableGutters: y
  }), [a, M.dense, h, y]), q = m.useRef(null);
  et(() => {
    i && (q.current ? q.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [i]);
  const k = m.Children.toArray(l), A = k.length && Hn(k[k.length - 1], ["ListItemSecondaryAction"]), $ = T({}, r, {
    alignItems: a,
    autoFocus: i,
    button: s,
    dense: N.dense,
    disabled: b,
    disableGutters: y,
    disablePadding: C,
    divider: S,
    hasSecondaryAction: A,
    selected: g
  }), D = fP($), V = Se(q, o), O = R.root || d.Root || mP, U = P.root || p.root || {}, F = T({
    className: ae(D.root, U.className, c),
    disabled: b
  }, j);
  let Y = u || "li";
  return s && (F.component = u || "div", F.focusVisibleClassName = ae(Bn.focusVisible, w), Y = cn), A ? (Y = !F.component && !u ? "div" : Y, f === "li" && (Y === "li" ? Y = "div" : F.component === "li" && (F.component = "div")), /* @__PURE__ */ E(Kn.Provider, {
    value: N,
    children: /* @__PURE__ */ le(hP, T({
      as: f,
      className: ae(D.container, v),
      ref: V,
      ownerState: $
    }, I, {
      children: [/* @__PURE__ */ E(O, T({}, U, !no(O) && {
        as: Y,
        ownerState: T({}, $, U.ownerState)
      }, F, {
        children: k
      })), k.pop()]
    }))
  })) : /* @__PURE__ */ E(Kn.Provider, {
    value: N,
    children: /* @__PURE__ */ le(O, T({}, U, {
      as: Y,
      ref: V
    }, !no(O) && {
      ownerState: T({}, $, U.ownerState)
    }, F, {
      children: [k, x && /* @__PURE__ */ E(Fs, {
        children: x
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Vp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: n.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: n.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: n.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Jt(n.node, (e) => {
    const t = m.Children.toArray(e.children);
    let o = -1;
    for (let r = t.length - 1; r >= 0; r -= 1) {
      const a = t[r];
      if (Hn(a, ["ListItemSecondaryAction"])) {
        o = r;
        break;
      }
    }
    return o !== -1 && o !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: n.shape({
    Root: n.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: n.shape({
    root: n.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: pa,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: n.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: n.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: n.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: n.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: n.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: n.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: n.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: n.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: n.shape({
    root: n.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: n.shape({
    root: n.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
const bP = ["items", "changeImportance", "isLandscape", "onChange", "isValid"], gP = ["getValue"];
function Lp(e) {
  const {
    items: t,
    changeImportance: o = "accept",
    onChange: r,
    isValid: a
  } = e, i = ge(e, bP);
  if (t == null || t.length === 0)
    return null;
  const s = t.map((l) => {
    let {
      getValue: c
    } = l, u = ge(l, gP);
    const d = c({
      isValid: a
    });
    return W({}, u, {
      label: u.label,
      onClick: () => {
        r(d, o, u);
      },
      disabled: !a(d)
    });
  });
  return /* @__PURE__ */ E(ls, W({
    dense: !0,
    sx: [{
      maxHeight: Es,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(i.sx) ? i.sx : [i.sx]]
  }, i, {
    children: s.map((l) => /* @__PURE__ */ E(Vp, {
      children: /* @__PURE__ */ E($d, W({}, l))
    }, l.id ?? l.label))
  }));
}
process.env.NODE_ENV !== "production" && (Lp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the picker.
   * @default "accept"
   */
  changeImportance: n.oneOf(["accept", "set"]),
  className: n.string,
  component: n.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: n.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: n.bool,
  isLandscape: n.bool.isRequired,
  isValid: n.func.isRequired,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default []
   */
  items: n.arrayOf(n.shape({
    getValue: n.func.isRequired,
    id: n.string,
    label: n.string.isRequired
  })),
  onChange: n.func.isRequired,
  style: n.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: n.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function yP(e) {
  return e.view !== null;
}
const vP = (e) => {
  const {
    classes: t,
    isLandscape: o
  } = e;
  return me({
    root: ["root", o && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  }, _p, t);
}, xP = (e) => {
  const {
    wrapperVariant: t,
    onAccept: o,
    onClear: r,
    onCancel: a,
    onSetToday: i,
    view: s,
    views: l,
    onViewChange: c,
    value: u,
    onChange: d,
    onSelectShortcut: p,
    isValid: f,
    isLandscape: v,
    disabled: h,
    readOnly: b,
    children: y,
    slots: C,
    slotProps: S
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = e, w = vP(e), x = (C == null ? void 0 : C.actionBar) ?? Fp, g = Ve({
    elementType: x,
    externalSlotProps: S == null ? void 0 : S.actionBar,
    additionalProps: {
      onAccept: o,
      onClear: r,
      onCancel: a,
      onSetToday: i,
      actions: t === "desktop" ? [] : ["cancel", "accept"]
    },
    className: w.actionBar,
    ownerState: W({}, e, {
      wrapperVariant: t
    })
  }), P = /* @__PURE__ */ E(x, W({}, g)), R = C == null ? void 0 : C.toolbar, I = Ve({
    elementType: R,
    externalSlotProps: S == null ? void 0 : S.toolbar,
    additionalProps: {
      isLandscape: v,
      onChange: d,
      value: u,
      view: s,
      onViewChange: c,
      views: l,
      disabled: h,
      readOnly: b
    },
    className: w.toolbar,
    ownerState: W({}, e, {
      wrapperVariant: t
    })
  }), j = yP(I) && R ? /* @__PURE__ */ E(R, W({}, I)) : null, M = y, N = C == null ? void 0 : C.tabs, q = s && N ? /* @__PURE__ */ E(N, W({
    view: s,
    onViewChange: c,
    className: w.tabs
  }, S == null ? void 0 : S.tabs)) : null, k = (C == null ? void 0 : C.shortcuts) ?? Lp, A = Ve({
    elementType: k,
    externalSlotProps: S == null ? void 0 : S.shortcuts,
    additionalProps: {
      isValid: f,
      isLandscape: v,
      onChange: p
    },
    className: w.shortcuts,
    ownerState: {
      isValid: f,
      isLandscape: v,
      onChange: p,
      wrapperVariant: t
    }
  }), $ = s && k ? /* @__PURE__ */ E(k, W({}, A)) : null;
  return {
    toolbar: j,
    content: M,
    tabs: q,
    actionBar: P,
    shortcuts: $
  };
}, wP = (e) => {
  const {
    isLandscape: t,
    classes: o
  } = e;
  return me({
    root: ["root", t && "landscape"],
    contentWrapper: ["contentWrapper"]
  }, _p, o);
}, CP = Q("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${xn.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  },
  variants: [{
    props: {
      isLandscape: !0
    },
    style: {
      [`& .${xn.toolbar}`]: {
        gridColumn: 1,
        gridRow: "2 / 3"
      },
      [`.${xn.shortcuts}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      }
    }
  }, {
    props: {
      isLandscape: !0,
      isRtl: !0
    },
    style: {
      [`& .${xn.toolbar}`]: {
        gridColumn: 3
      }
    }
  }, {
    props: {
      isLandscape: !1
    },
    style: {
      [`& .${xn.toolbar}`]: {
        gridColumn: "2 / 4",
        gridRow: 1
      },
      [`& .${xn.shortcuts}`]: {
        gridColumn: 1,
        gridRow: "2 / 3"
      }
    }
  }, {
    props: {
      isLandscape: !1,
      isRtl: !0
    },
    style: {
      [`& .${xn.shortcuts}`]: {
        gridColumn: 3
      }
    }
  }]
}), SP = Q("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (e, t) => t.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
}), Vs = function(t) {
  const o = Le({
    props: t,
    name: "MuiPickersLayout"
  }), {
    toolbar: r,
    content: a,
    tabs: i,
    actionBar: s,
    shortcuts: l
  } = xP(o), {
    sx: c,
    className: u,
    isLandscape: d,
    ref: p,
    wrapperVariant: f
  } = o, v = wP(o);
  return /* @__PURE__ */ le(CP, {
    ref: p,
    sx: c,
    className: ae(u, v.root),
    ownerState: o,
    children: [d ? l : r, d ? r : l, /* @__PURE__ */ E(SP, {
      className: v.contentWrapper,
      children: f === "desktop" ? /* @__PURE__ */ le(m.Fragment, {
        children: [a, i]
      }) : /* @__PURE__ */ le(m.Fragment, {
        children: [i, a]
      })
    }), s]
  });
};
process.env.NODE_ENV !== "production" && (Vs.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  className: n.string,
  disabled: n.bool,
  isLandscape: n.bool.isRequired,
  /**
   * `true` if the application is in right-to-left direction.
   */
  isRtl: n.bool.isRequired,
  isValid: n.func.isRequired,
  onAccept: n.func.isRequired,
  onCancel: n.func.isRequired,
  onChange: n.func.isRequired,
  onClear: n.func.isRequired,
  onClose: n.func.isRequired,
  onDismiss: n.func.isRequired,
  onOpen: n.func.isRequired,
  onSelectShortcut: n.func.isRequired,
  onSetToday: n.func.isRequired,
  onViewChange: n.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  value: n.any,
  view: n.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: n.arrayOf(n.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: n.oneOf(["desktop", "mobile"])
});
const EP = ["props", "getOpenDialogAriaText"], OP = ["ownerState"], PP = ["ownerState"], RP = (e) => {
  var B;
  let {
    props: t,
    getOpenDialogAriaText: o
  } = e, r = ge(e, EP);
  const {
    slots: a,
    slotProps: i,
    className: s,
    sx: l,
    format: c,
    formatDensity: u,
    enableAccessibleFieldDOMStructure: d,
    selectedSections: p,
    onSelectedSectionsChange: f,
    timezone: v,
    name: h,
    label: b,
    inputRef: y,
    readOnly: C,
    disabled: S,
    autoFocus: w,
    localeText: x,
    reduceAnimations: g
  } = t, P = Ae(), R = m.useRef(null), I = m.useRef(null), j = en(), M = ((B = i == null ? void 0 : i.toolbar) == null ? void 0 : B.hidden) ?? !1, {
    open: N,
    actions: q,
    hasUIView: k,
    layoutProps: A,
    renderCurrentView: $,
    shouldRestoreFocus: D,
    fieldProps: V
  } = Np(W({}, r, {
    props: t,
    fieldRef: I,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  })), O = a.inputAdornment ?? gs, U = Ve({
    elementType: O,
    externalSlotProps: i == null ? void 0 : i.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: t
  }), F = ge(U, OP), Y = a.openPickerButton ?? fn, K = Ve({
    elementType: Y,
    externalSlotProps: i == null ? void 0 : i.openPickerButton,
    additionalProps: {
      disabled: S || C,
      onClick: N ? q.onClose : q.onOpen,
      "aria-label": o(V.value, P),
      edge: F.position
    },
    ownerState: t
  }), J = ge(K, PP), Z = a.openPickerIcon, L = a.field, z = Ve({
    elementType: L,
    externalSlotProps: i == null ? void 0 : i.field,
    additionalProps: W({}, V, M && {
      id: j
    }, {
      readOnly: C,
      disabled: S,
      className: s,
      sx: l,
      format: c,
      formatDensity: u,
      enableAccessibleFieldDOMStructure: d,
      selectedSections: p,
      onSelectedSectionsChange: f,
      timezone: v,
      label: b,
      name: h,
      autoFocus: w && !t.open,
      focused: N ? !0 : void 0
    }, y ? {
      inputRef: y
    } : {}),
    ownerState: t
  });
  k && (z.InputProps = W({}, z.InputProps, {
    ref: R
  }, !t.disableOpenPicker && {
    [`${F.position}Adornment`]: /* @__PURE__ */ E(O, W({}, F, {
      children: /* @__PURE__ */ E(Y, W({}, J, {
        children: /* @__PURE__ */ E(Z, W({}, i == null ? void 0 : i.openPickerIcon))
      }))
    }))
  }));
  const X = W({
    textField: a.textField,
    clearIcon: a.clearIcon,
    clearButton: a.clearButton
  }, z.slots), ee = a.layout ?? Vs;
  let ne = j;
  M && (b ? ne = `${j}-label` : ne = void 0);
  const G = W({}, i, {
    toolbar: W({}, i == null ? void 0 : i.toolbar, {
      titleId: j
    }),
    popper: W({
      "aria-labelledby": ne
    }, i == null ? void 0 : i.popper)
  }), te = Se(I, z.unstableFieldRef);
  return {
    renderPicker: () => /* @__PURE__ */ le(Cs, {
      localeText: x,
      children: [/* @__PURE__ */ E(L, W({}, z, {
        slots: X,
        slotProps: G,
        unstableFieldRef: te
      })), /* @__PURE__ */ E(BO, W({
        role: "dialog",
        placement: "bottom-start",
        anchorEl: R.current
      }, q, {
        open: N,
        slots: a,
        slotProps: G,
        shouldRestoreFocus: D,
        reduceAnimations: g,
        children: /* @__PURE__ */ E(ee, W({}, A, G == null ? void 0 : G.layout, {
          slots: a,
          slotProps: G,
          children: $()
        }))
      }))]
    })
  };
}, Zn = ({
  view: e,
  onViewChange: t,
  views: o,
  focusedView: r,
  onFocusedViewChange: a,
  value: i,
  defaultValue: s,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: p,
  disablePast: f,
  minDate: v,
  maxDate: h,
  shouldDisableDate: b,
  shouldDisableMonth: y,
  shouldDisableYear: C,
  reduceAnimations: S,
  onMonthChange: w,
  monthsPerRow: x,
  onYearChange: g,
  yearsPerRow: P,
  slots: R,
  slotProps: I,
  loading: j,
  renderLoading: M,
  disableHighlightToday: N,
  readOnly: q,
  disabled: k,
  showDaysOutsideCurrentMonth: A,
  dayOfWeekFormatter: $,
  sx: D,
  autoFocus: V,
  fixedWeekNumber: O,
  displayWeekNumber: U,
  timezone: F
}) => /* @__PURE__ */ E(Mp, {
  view: e,
  onViewChange: t,
  views: o.filter(Nc),
  focusedView: r && Nc(r) ? r : null,
  onFocusedViewChange: a,
  value: i,
  defaultValue: s,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: d,
  disableFuture: p,
  disablePast: f,
  minDate: v,
  maxDate: h,
  shouldDisableDate: b,
  shouldDisableMonth: y,
  shouldDisableYear: C,
  reduceAnimations: S,
  onMonthChange: w,
  monthsPerRow: x,
  onYearChange: g,
  yearsPerRow: P,
  slots: R,
  slotProps: I,
  loading: j,
  renderLoading: M,
  disableHighlightToday: N,
  readOnly: q,
  disabled: k,
  showDaysOutsideCurrentMonth: A,
  dayOfWeekFormatter: $,
  sx: D,
  autoFocus: V,
  fixedWeekNumber: O,
  displayWeekNumber: U,
  timezone: F
}), jp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var u, d;
  const r = on(), a = Ae(), i = Ip(t, "MuiDesktopDatePicker"), s = W({
    day: Zn,
    month: Zn,
    year: Zn
  }, i.viewRenderers), l = W({}, i, {
    viewRenderers: s,
    format: Ps(a, i, !1),
    yearsPerRow: i.yearsPerRow ?? 4,
    slots: W({
      openPickerIcon: l1,
      field: As
    }, i.slots),
    slotProps: W({}, i.slotProps, {
      field: (p) => {
        var f;
        return W({}, Ss((f = i.slotProps) == null ? void 0 : f.field, p), gp(i), {
          ref: o
        });
      },
      toolbar: W({
        hidden: !0
      }, (u = i.slotProps) == null ? void 0 : u.toolbar)
    })
  }), {
    renderPicker: c
  } = RP({
    props: l,
    valueManager: Zt,
    valueType: "date",
    getOpenDialogAriaText: ((d = l.localeText) == null ? void 0 : d.openDatePickerDialogue) ?? r.openDatePickerDialogue,
    validator: Aa
  });
  return c();
});
jp.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: n.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: n.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: n.oneOf([3, 4])
};
function TP(e) {
  return pe("MuiDialogContent", e);
}
de("MuiDialogContent", ["root", "dividers"]);
const kP = de("MuiDialogTitle", ["root"]), DP = ["className", "dividers"], MP = (e) => {
  const {
    classes: t,
    dividers: o
  } = e;
  return me({
    root: ["root", o && "dividers"]
  }, TP, t);
}, $P = Q("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${kP.root} + &`]: {
    paddingTop: 0
  }
})), Bp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: a,
    dividers: i = !1
  } = r, s = ue(r, DP), l = T({}, r, {
    dividers: i
  }), c = MP(l);
  return /* @__PURE__ */ E($P, T({
    className: ae(c.root, a),
    ownerState: l,
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (Bp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object])
});
function IP(e) {
  return pe("MuiDialog", e);
}
const Vo = de("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), zp = /* @__PURE__ */ m.createContext({});
process.env.NODE_ENV !== "production" && (zp.displayName = "DialogContext");
const NP = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], _P = Q(fs, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), AP = (e) => {
  const {
    classes: t,
    scroll: o,
    maxWidth: r,
    fullWidth: a,
    fullScreen: i
  } = e, s = {
    root: ["root"],
    container: ["container", `scroll${re(o)}`],
    paper: ["paper", `paperScroll${re(o)}`, `paperWidth${re(String(r))}`, a && "paperFullWidth", i && "paperFullScreen"]
  };
  return me(s, IP, t);
}, FP = Q(Da, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), VP = Q("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.container, t[`scroll${re(o.scroll)}`]];
  }
})(({
  ownerState: e
}) => T({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), LP = Q(yo, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.paper, t[`scrollPaper${re(o.scroll)}`], t[`paperWidth${re(String(o.maxWidth))}`], o.fullWidth && t.paperFullWidth, o.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => T({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${Vo.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${Vo.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${Vo.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Wp = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiDialog"
  }), a = tn(), i = {
    enter: a.transitions.duration.enteringScreen,
    exit: a.transitions.duration.leavingScreen
  }, {
    "aria-describedby": s,
    "aria-labelledby": l,
    BackdropComponent: c,
    BackdropProps: u,
    children: d,
    className: p,
    disableEscapeKeyDown: f = !1,
    fullScreen: v = !1,
    fullWidth: h = !1,
    maxWidth: b = "sm",
    onBackdropClick: y,
    onClick: C,
    onClose: S,
    open: w,
    PaperComponent: x = yo,
    PaperProps: g = {},
    scroll: P = "paper",
    TransitionComponent: R = Dn,
    transitionDuration: I = i,
    TransitionProps: j
  } = r, M = ue(r, NP), N = T({}, r, {
    disableEscapeKeyDown: f,
    fullScreen: v,
    fullWidth: h,
    maxWidth: b,
    scroll: P
  }), q = AP(N), k = m.useRef(), A = (O) => {
    k.current = O.target === O.currentTarget;
  }, $ = (O) => {
    C && C(O), k.current && (k.current = null, y && y(O), S && S(O, "backdropClick"));
  }, D = en(l), V = m.useMemo(() => ({
    titleId: D
  }), [D]);
  return /* @__PURE__ */ E(FP, T({
    className: ae(q.root, p),
    closeAfterTransition: !0,
    components: {
      Backdrop: _P
    },
    componentsProps: {
      backdrop: T({
        transitionDuration: I,
        as: c
      }, u)
    },
    disableEscapeKeyDown: f,
    onClose: S,
    open: w,
    ref: o,
    onClick: $,
    ownerState: N
  }, M, {
    children: /* @__PURE__ */ E(R, T({
      appear: !0,
      in: w,
      timeout: I,
      role: "presentation"
    }, j, {
      children: /* @__PURE__ */ E(VP, {
        className: ae(q.container),
        onMouseDown: A,
        ownerState: N,
        children: /* @__PURE__ */ E(LP, T({
          as: x,
          elevation: 24,
          role: "dialog",
          "aria-describedby": s,
          "aria-labelledby": D
        }, g, {
          className: ae(q.paper, g.className),
          ownerState: N,
          children: /* @__PURE__ */ E(zp.Provider, {
            value: V,
            children: d
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Wp.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": n.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": n.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: n.elementType,
  /**
   * @ignore
   */
  BackdropProps: n.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: n.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: n.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: n.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: n.oneOfType([n.oneOf(["xs", "sm", "md", "lg", "xl", !1]), n.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: n.func,
  /**
   * @ignore
   */
  onClick: n.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: n.func,
  /**
   * If `true`, the component is shown.
   */
  open: n.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: n.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: n.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: n.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: n.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: n.oneOfType([n.number, n.shape({
    appear: n.number,
    enter: n.number,
    exit: n.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: n.object
});
const jP = Q(Wp)({
  [`& .${Vo.container}`]: {
    outline: 0
  },
  [`& .${Vo.paper}`]: {
    outline: 0,
    minWidth: Na
  }
}), BP = Q(Bp)({
  "&:first-of-type": {
    padding: 0
  }
});
function zP(e) {
  const {
    children: t,
    onDismiss: o,
    open: r,
    slots: a,
    slotProps: i
  } = e, s = (a == null ? void 0 : a.dialog) ?? jP, l = (a == null ? void 0 : a.mobileTransition) ?? Dn;
  return /* @__PURE__ */ E(s, W({
    open: r,
    onClose: o
  }, i == null ? void 0 : i.dialog, {
    TransitionComponent: l,
    TransitionProps: i == null ? void 0 : i.mobileTransition,
    PaperComponent: a == null ? void 0 : a.mobilePaper,
    PaperProps: i == null ? void 0 : i.mobilePaper,
    children: /* @__PURE__ */ E(BP, {
      children: t
    })
  }));
}
const WP = ["props", "getOpenDialogAriaText"], UP = (e) => {
  var Y;
  let {
    props: t,
    getOpenDialogAriaText: o
  } = e, r = ge(e, WP);
  const {
    slots: a,
    slotProps: i,
    className: s,
    sx: l,
    format: c,
    formatDensity: u,
    enableAccessibleFieldDOMStructure: d,
    selectedSections: p,
    onSelectedSectionsChange: f,
    timezone: v,
    name: h,
    label: b,
    inputRef: y,
    readOnly: C,
    disabled: S,
    localeText: w
  } = t, x = Ae(), g = m.useRef(null), P = en(), R = ((Y = i == null ? void 0 : i.toolbar) == null ? void 0 : Y.hidden) ?? !1, {
    open: I,
    actions: j,
    layoutProps: M,
    renderCurrentView: N,
    fieldProps: q
  } = Np(W({}, r, {
    props: t,
    fieldRef: g,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  })), k = a.field, A = Ve({
    elementType: k,
    externalSlotProps: i == null ? void 0 : i.field,
    additionalProps: W({}, q, R && {
      id: P
    }, !(S || C) && {
      onClick: j.onOpen,
      onKeyDown: cS(j.onOpen)
    }, {
      readOnly: C ?? !0,
      disabled: S,
      className: s,
      sx: l,
      format: c,
      formatDensity: u,
      enableAccessibleFieldDOMStructure: d,
      selectedSections: p,
      onSelectedSectionsChange: f,
      timezone: v,
      label: b,
      name: h
    }, y ? {
      inputRef: y
    } : {}),
    ownerState: t
  });
  A.inputProps = W({}, A.inputProps, {
    "aria-label": o(q.value, x)
  });
  const $ = W({
    textField: a.textField
  }, A.slots), D = a.layout ?? Vs;
  let V = P;
  R && (b ? V = `${P}-label` : V = void 0);
  const O = W({}, i, {
    toolbar: W({}, i == null ? void 0 : i.toolbar, {
      titleId: P
    }),
    mobilePaper: W({
      "aria-labelledby": V
    }, i == null ? void 0 : i.mobilePaper)
  }), U = Se(g, A.unstableFieldRef);
  return {
    renderPicker: () => /* @__PURE__ */ le(Cs, {
      localeText: w,
      children: [/* @__PURE__ */ E(k, W({}, A, {
        slots: $,
        slotProps: O,
        unstableFieldRef: U
      })), /* @__PURE__ */ E(zP, W({}, j, {
        open: I,
        slots: a,
        slotProps: O,
        children: /* @__PURE__ */ E(D, W({}, M, O == null ? void 0 : O.layout, {
          slots: a,
          slotProps: O,
          children: N()
        }))
      }))]
    })
  };
}, Up = /* @__PURE__ */ m.forwardRef(function(t, o) {
  var u, d;
  const r = on(), a = Ae(), i = Ip(t, "MuiMobileDatePicker"), s = W({
    day: Zn,
    month: Zn,
    year: Zn
  }, i.viewRenderers), l = W({}, i, {
    viewRenderers: s,
    format: Ps(a, i, !1),
    slots: W({
      field: As
    }, i.slots),
    slotProps: W({}, i.slotProps, {
      field: (p) => {
        var f;
        return W({}, Ss((f = i.slotProps) == null ? void 0 : f.field, p), gp(i), {
          ref: o
        });
      },
      toolbar: W({
        hidden: !1
      }, (u = i.slotProps) == null ? void 0 : u.toolbar)
    })
  }), {
    renderPicker: c
  } = UP({
    props: l,
    valueManager: Zt,
    valueType: "date",
    getOpenDialogAriaText: ((d = l.localeText) == null ? void 0 : d.openDatePickerDialogue) ?? r.openDatePickerDialogue,
    validator: Aa
  });
  return c();
});
Up.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: n.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: n.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: n.oneOf([3, 4])
};
const qP = ["desktopModeMediaQuery"], Yr = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Le({
    props: t,
    name: "MuiDatePicker"
  }), {
    desktopModeMediaQuery: a = uS
  } = r, i = ge(r, qP);
  return Mu(a, {
    defaultMatches: !0
  }) ? /* @__PURE__ */ E(jp, W({
    ref: o
  }, i)) : /* @__PURE__ */ E(Up, W({
    ref: o
  }, i));
});
process.env.NODE_ENV !== "production" && (Yr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: n.bool,
  className: n.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: n.bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: n.func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: n.object,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: n.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: n.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: n.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: n.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: n.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: n.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: n.bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: n.any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: n.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: n.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: n.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * The label content.
   */
  label: n.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: n.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: n.object,
  /**
   * Maximal selectable date.
   */
  maxDate: n.object,
  /**
   * Minimal selectable date.
   */
  minDate: n.object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: n.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: n.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: n.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: n.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: n.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: n.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: n.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: n.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: n.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: n.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: n.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: n.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: n.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: n.oneOf(["landscape", "portrait"]),
  readOnly: n.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: n.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: n.object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: n.func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: n.oneOfType([n.oneOf(["all", "day", "empty", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), n.number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: n.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: n.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: n.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: n.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: n.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: n.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: n.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: n.object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: n.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: n.shape({
    day: n.func,
    month: n.func,
    year: n.func
  }),
  /**
   * Available views.
   */
  views: n.arrayOf(n.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: n.oneOf([3, 4])
});
var qp = { exports: {} };
(function(e, t) {
  (function(o, r) {
    e.exports = r();
  })(em, function() {
    var o = 1e3, r = 6e4, a = 36e5, i = "millisecond", s = "second", l = "minute", c = "hour", u = "day", d = "week", p = "month", f = "quarter", v = "year", h = "date", b = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(A) {
      var $ = ["th", "st", "nd", "rd"], D = A % 100;
      return "[" + A + ($[(D - 20) % 10] || $[D] || $[0]) + "]";
    } }, w = function(A, $, D) {
      var V = String(A);
      return !V || V.length >= $ ? A : "" + Array($ + 1 - V.length).join(D) + A;
    }, x = { s: w, z: function(A) {
      var $ = -A.utcOffset(), D = Math.abs($), V = Math.floor(D / 60), O = D % 60;
      return ($ <= 0 ? "+" : "-") + w(V, 2, "0") + ":" + w(O, 2, "0");
    }, m: function A($, D) {
      if ($.date() < D.date())
        return -A(D, $);
      var V = 12 * (D.year() - $.year()) + (D.month() - $.month()), O = $.clone().add(V, p), U = D - O < 0, F = $.clone().add(V + (U ? -1 : 1), p);
      return +(-(V + (D - O) / (U ? O - F : F - O)) || 0);
    }, a: function(A) {
      return A < 0 ? Math.ceil(A) || 0 : Math.floor(A);
    }, p: function(A) {
      return { M: p, y: v, w: d, d: u, D: h, h: c, m: l, s, ms: i, Q: f }[A] || String(A || "").toLowerCase().replace(/s$/, "");
    }, u: function(A) {
      return A === void 0;
    } }, g = "en", P = {};
    P[g] = S;
    var R = "$isDayjsObject", I = function(A) {
      return A instanceof q || !(!A || !A[R]);
    }, j = function A($, D, V) {
      var O;
      if (!$)
        return g;
      if (typeof $ == "string") {
        var U = $.toLowerCase();
        P[U] && (O = U), D && (P[U] = D, O = U);
        var F = $.split("-");
        if (!O && F.length > 1)
          return A(F[0]);
      } else {
        var Y = $.name;
        P[Y] = $, O = Y;
      }
      return !V && O && (g = O), O || !V && g;
    }, M = function(A, $) {
      if (I(A))
        return A.clone();
      var D = typeof $ == "object" ? $ : {};
      return D.date = A, D.args = arguments, new q(D);
    }, N = x;
    N.l = j, N.i = I, N.w = function(A, $) {
      return M(A, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var q = function() {
      function A(D) {
        this.$L = j(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[R] = !0;
      }
      var $ = A.prototype;
      return $.parse = function(D) {
        this.$d = function(V) {
          var O = V.date, U = V.utc;
          if (O === null)
            return /* @__PURE__ */ new Date(NaN);
          if (N.u(O))
            return /* @__PURE__ */ new Date();
          if (O instanceof Date)
            return new Date(O);
          if (typeof O == "string" && !/Z$/i.test(O)) {
            var F = O.match(y);
            if (F) {
              var Y = F[2] - 1 || 0, K = (F[7] || "0").substring(0, 3);
              return U ? new Date(Date.UTC(F[1], Y, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, K)) : new Date(F[1], Y, F[3] || 1, F[4] || 0, F[5] || 0, F[6] || 0, K);
            }
          }
          return new Date(O);
        }(D), this.init();
      }, $.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, $.$utils = function() {
        return N;
      }, $.isValid = function() {
        return this.$d.toString() !== b;
      }, $.isSame = function(D, V) {
        var O = M(D);
        return this.startOf(V) <= O && O <= this.endOf(V);
      }, $.isAfter = function(D, V) {
        return M(D) < this.startOf(V);
      }, $.isBefore = function(D, V) {
        return this.endOf(V) < M(D);
      }, $.$g = function(D, V, O) {
        return N.u(D) ? this[V] : this.set(O, D);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(D, V) {
        var O = this, U = !!N.u(V) || V, F = N.p(D), Y = function(ne, G) {
          var te = N.w(O.$u ? Date.UTC(O.$y, G, ne) : new Date(O.$y, G, ne), O);
          return U ? te : te.endOf(u);
        }, K = function(ne, G) {
          return N.w(O.toDate()[ne].apply(O.toDate("s"), (U ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(G)), O);
        }, J = this.$W, Z = this.$M, L = this.$D, z = "set" + (this.$u ? "UTC" : "");
        switch (F) {
          case v:
            return U ? Y(1, 0) : Y(31, 11);
          case p:
            return U ? Y(1, Z) : Y(0, Z + 1);
          case d:
            var X = this.$locale().weekStart || 0, ee = (J < X ? J + 7 : J) - X;
            return Y(U ? L - ee : L + (6 - ee), Z);
          case u:
          case h:
            return K(z + "Hours", 0);
          case c:
            return K(z + "Minutes", 1);
          case l:
            return K(z + "Seconds", 2);
          case s:
            return K(z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(D) {
        return this.startOf(D, !1);
      }, $.$set = function(D, V) {
        var O, U = N.p(D), F = "set" + (this.$u ? "UTC" : ""), Y = (O = {}, O[u] = F + "Date", O[h] = F + "Date", O[p] = F + "Month", O[v] = F + "FullYear", O[c] = F + "Hours", O[l] = F + "Minutes", O[s] = F + "Seconds", O[i] = F + "Milliseconds", O)[U], K = U === u ? this.$D + (V - this.$W) : V;
        if (U === p || U === v) {
          var J = this.clone().set(h, 1);
          J.$d[Y](K), J.init(), this.$d = J.set(h, Math.min(this.$D, J.daysInMonth())).$d;
        } else
          Y && this.$d[Y](K);
        return this.init(), this;
      }, $.set = function(D, V) {
        return this.clone().$set(D, V);
      }, $.get = function(D) {
        return this[N.p(D)]();
      }, $.add = function(D, V) {
        var O, U = this;
        D = Number(D);
        var F = N.p(V), Y = function(Z) {
          var L = M(U);
          return N.w(L.date(L.date() + Math.round(Z * D)), U);
        };
        if (F === p)
          return this.set(p, this.$M + D);
        if (F === v)
          return this.set(v, this.$y + D);
        if (F === u)
          return Y(1);
        if (F === d)
          return Y(7);
        var K = (O = {}, O[l] = r, O[c] = a, O[s] = o, O)[F] || 1, J = this.$d.getTime() + D * K;
        return N.w(J, this);
      }, $.subtract = function(D, V) {
        return this.add(-1 * D, V);
      }, $.format = function(D) {
        var V = this, O = this.$locale();
        if (!this.isValid())
          return O.invalidDate || b;
        var U = D || "YYYY-MM-DDTHH:mm:ssZ", F = N.z(this), Y = this.$H, K = this.$m, J = this.$M, Z = O.weekdays, L = O.months, z = O.meridiem, X = function(G, te, _, B) {
          return G && (G[te] || G(V, U)) || _[te].slice(0, B);
        }, ee = function(G) {
          return N.s(Y % 12 || 12, G, "0");
        }, ne = z || function(G, te, _) {
          var B = G < 12 ? "AM" : "PM";
          return _ ? B.toLowerCase() : B;
        };
        return U.replace(C, function(G, te) {
          return te || function(_) {
            switch (_) {
              case "YY":
                return String(V.$y).slice(-2);
              case "YYYY":
                return N.s(V.$y, 4, "0");
              case "M":
                return J + 1;
              case "MM":
                return N.s(J + 1, 2, "0");
              case "MMM":
                return X(O.monthsShort, J, L, 3);
              case "MMMM":
                return X(L, J);
              case "D":
                return V.$D;
              case "DD":
                return N.s(V.$D, 2, "0");
              case "d":
                return String(V.$W);
              case "dd":
                return X(O.weekdaysMin, V.$W, Z, 2);
              case "ddd":
                return X(O.weekdaysShort, V.$W, Z, 3);
              case "dddd":
                return Z[V.$W];
              case "H":
                return String(Y);
              case "HH":
                return N.s(Y, 2, "0");
              case "h":
                return ee(1);
              case "hh":
                return ee(2);
              case "a":
                return ne(Y, K, !0);
              case "A":
                return ne(Y, K, !1);
              case "m":
                return String(K);
              case "mm":
                return N.s(K, 2, "0");
              case "s":
                return String(V.$s);
              case "ss":
                return N.s(V.$s, 2, "0");
              case "SSS":
                return N.s(V.$ms, 3, "0");
              case "Z":
                return F;
            }
            return null;
          }(G) || F.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(D, V, O) {
        var U, F = this, Y = N.p(V), K = M(D), J = (K.utcOffset() - this.utcOffset()) * r, Z = this - K, L = function() {
          return N.m(F, K);
        };
        switch (Y) {
          case v:
            U = L() / 12;
            break;
          case p:
            U = L();
            break;
          case f:
            U = L() / 3;
            break;
          case d:
            U = (Z - J) / 6048e5;
            break;
          case u:
            U = (Z - J) / 864e5;
            break;
          case c:
            U = Z / a;
            break;
          case l:
            U = Z / r;
            break;
          case s:
            U = Z / o;
            break;
          default:
            U = Z;
        }
        return O ? U : N.a(U);
      }, $.daysInMonth = function() {
        return this.endOf(p).$D;
      }, $.$locale = function() {
        return P[this.$L];
      }, $.locale = function(D, V) {
        if (!D)
          return this.$L;
        var O = this.clone(), U = j(D, V, !0);
        return U && (O.$L = U), O;
      }, $.clone = function() {
        return N.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, A;
    }(), k = q.prototype;
    return M.prototype = k, [["$ms", i], ["$s", s], ["$m", l], ["$H", c], ["$W", u], ["$M", p], ["$y", v], ["$D", h]].forEach(function(A) {
      k[A[1]] = function($) {
        return this.$g($, A[0], A[1]);
      };
    }), M.extend = function(A, $) {
      return A.$i || (A($, q, M), A.$i = !0), M;
    }, M.locale = j, M.isDayjs = I, M.unix = function(A) {
      return M(1e3 * A);
    }, M.en = P[g], M.Ls = P, M.p = {}, M;
  });
})(qp);
var HP = qp.exports;
const Mt = /* @__PURE__ */ iu(HP), UR = ({
  for_name: e,
  with_label: t,
  with_helper_text: o = "",
  control: r,
  has_error: a,
  error_message: i,
  readonly: s = !1,
  sx: l,
  datePickerProps: c,
  variant: u = "outlined",
  noFuture: d = !1,
  ...p
}) => {
  const { field: f } = Ma({
    name: e,
    control: r
  });
  return /* @__PURE__ */ E(
    ze,
    {
      marginBottom: 2,
      ...p,
      sx: { width: "300px", ...l },
      mx: "auto",
      "data-testid": `${e}_textbox`,
      children: /* @__PURE__ */ E(
        Yr,
        {
          ...c,
          label: t,
          format: "DD-MM-YYYY",
          value: Mt(f == null ? void 0 : f.value),
          onChange: (v) => {
            v && f.onChange(v.format("YYYY-MM-DD"));
          },
          disableFuture: d,
          slotProps: {
            textField: {
              variant: u,
              size: "small",
              sx: {
                width: 300,
                ...s && {
                  pointerEvents: "none",
                  opacity: 0.7
                },
                "& input": {
                  fontSize: {
                    xs: 13,
                    md: 16
                  }
                },
                "& .MuiFormHelperText-root": {
                  padding: 0
                }
              },
              helperText: a ? i : o,
              error: a
            }
          },
          closeOnSelect: !0
        }
      )
    }
  );
};
function qR({ onClick: e, isValid: t, label: o = "Submit" }) {
  return /* @__PURE__ */ E(Yn, { marginTop: 3, marginBottom: 3, textAlign: "right", children: /* @__PURE__ */ E(
    zn,
    {
      onClick: e,
      variant: "contained",
      color: "success",
      sx: { minWidth: 150, opacity: t ? 1 : 0.6 },
      children: o
    }
  ) });
}
var Ls = {}, YP = Ht;
Object.defineProperty(Ls, "__esModule", {
  value: !0
});
var Hp = Ls.default = void 0, KP = YP(hn()), GP = un;
Hp = Ls.default = (0, KP.default)(/* @__PURE__ */ (0, GP.jsx)("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), "ArrowBack");
const HR = ({ onClick: e, sx: t }) => /* @__PURE__ */ E(
  fn,
  {
    "aria-label": "back-button",
    sx: {
      fontSize: (o) => ({
        md: o.typography.fontSize * 2.5,
        lg: o.typography.fontSize * 3
      }),
      ...t
    },
    onClick: e,
    children: /* @__PURE__ */ E(Hp, { fontSize: "inherit", color: "inherit" })
  }
);
function XP(e) {
  return pe("MuiSwitch", e);
}
const at = de("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), ZP = ["className", "color", "edge", "size", "sx"], QP = (e) => {
  const {
    classes: t,
    edge: o,
    size: r,
    color: a,
    checked: i,
    disabled: s
  } = e, l = {
    root: ["root", o && `edge${re(o)}`, `size${re(r)}`],
    switchBase: ["switchBase", `color${re(a)}`, i && "checked", s && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, c = me(l, XP, t);
  return T({}, t, c);
}, JP = Q("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.root, o.edge && t[`edge${re(o.edge)}`], t[`size${re(o.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${at.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${at.switchBase}`]: {
        padding: 4,
        [`&.${at.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), eR = Q(qd, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e;
    return [t.switchBase, {
      [`& .${at.input}`]: t.input
    }, o.color !== "default" && t[`color${re(o.color)}`]];
  }
})(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  transition: e.transitions.create(["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${at.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${at.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${at.checked} + .${at.track}`]: {
    opacity: 0.5
  },
  [`&.${at.disabled} + .${at.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${at.input}`]: {
    left: "-100%",
    width: "300%"
  }
}), ({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(([, t]) => t.main && t.light).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${at.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Be(e.palette[t].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${at.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? Hu(e.palette[t].main, 0.62) : qu(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${at.checked} + .${at.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
})), tR = Q("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: e.transitions.create(["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
})), nR = Q("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
})), js = /* @__PURE__ */ m.forwardRef(function(t, o) {
  const r = Oe({
    props: t,
    name: "MuiSwitch"
  }), {
    className: a,
    color: i = "primary",
    edge: s = !1,
    size: l = "medium",
    sx: c
  } = r, u = ue(r, ZP), d = T({}, r, {
    color: i,
    edge: s,
    size: l
  }), p = QP(d), f = /* @__PURE__ */ E(nR, {
    className: p.thumb,
    ownerState: d
  });
  return /* @__PURE__ */ le(JP, {
    className: ae(p.root, a),
    sx: c,
    ownerState: d,
    children: [/* @__PURE__ */ E(eR, T({
      type: "checkbox",
      icon: f,
      checkedIcon: f,
      ref: o,
      ownerState: d
    }, u, {
      classes: T({}, p, {
        root: p.switchBase
      })
    })), /* @__PURE__ */ E(tR, {
      className: p.track,
      ownerState: d
    })]
  });
});
process.env.NODE_ENV !== "production" && (js.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: n.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: n.oneOfType([n.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), n.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: n.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: n.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: n.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: n.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: n.node,
  /**
   * The id of the `input` element.
   */
  id: n.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: n.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: qe,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: n.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: n.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: n.oneOfType([n.oneOf(["medium", "small"]), n.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: n.any
});
function YR({
  title: e,
  checked: t,
  onChange: o,
  name: r,
  color: a = "primary",
  disabled: i = !1,
  ...s
}) {
  const [l, c] = Qn(t);
  function u() {
    c(!l), o();
  }
  return /* @__PURE__ */ E(
    js,
    {
      ...s,
      title: e,
      checked: l,
      onChange: u,
      name: r,
      color: a,
      disabled: i
    }
  );
}
Q(js)(({ theme: e }) => ({
  width: 28,
  height: 16,
  padding: 0,
  transform: "scale(1.3)",
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)"
    }
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: e.palette.info.main
      }
    }
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: e.transitions.create(["width"], {
      duration: 200
    })
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: e.palette.mode === "dark" ? "rgba(255,255,255,.35)" : "rgba(0,0,0,.25)",
    boxSizing: "border-box"
  }
}));
function oR({
  dateRange: e,
  onDateRangeChange: t,
  label: o = { from: "From", to: "To" }
}) {
  const r = (a, i) => {
    const s = { ...e, [i]: a.format("YYYY-MM-DD") }, { startDate: l, endDate: c } = s;
    Mt(l).isAfter(Mt(c)) && (s.startDate = c, s.endDate = l), t(s);
  };
  return /* @__PURE__ */ le(ze, { display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", children: [
    /* @__PURE__ */ E(
      Yr,
      {
        label: o.from,
        closeOnSelect: !0,
        format: "DD/MM/YYYY",
        disableFuture: !0,
        value: Mt(e.startDate),
        onChange: (a) => r(Mt(a), "startDate"),
        slotProps: {
          textField: {
            variant: "outlined",
            size: "small",
            sx: {
              mt: 1,
              mr: 1,
              width: 300,
              "& input": {
                fontSize: {
                  xs: 13,
                  md: 16
                }
              },
              "& .MuiFormHelperText-root": {
                padding: 0
              }
            }
          }
        }
      }
    ),
    /* @__PURE__ */ E(
      Yr,
      {
        label: o.to,
        closeOnSelect: !0,
        format: "DD/MM/YYYY",
        maxDate: Mt(),
        minDate: Mt(e.startDate),
        value: Mt(e.endDate),
        onChange: (a) => r(Mt(a), "endDate"),
        slotProps: {
          textField: {
            variant: "outlined",
            size: "small",
            sx: {
              mt: 1,
              mr: 1,
              width: 300,
              "& input": {
                fontSize: {
                  xs: 13,
                  md: 16
                }
              },
              "& .MuiFormHelperText-root": {
                padding: 0
              }
            }
          }
        }
      }
    )
  ] });
}
var Bs = {}, rR = Ht;
Object.defineProperty(Bs, "__esModule", {
  value: !0
});
var Yp = Bs.default = void 0, aR = rR(hn()), iR = un;
Yp = Bs.default = (0, aR.default)(/* @__PURE__ */ (0, iR.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
}), "Delete");
const KR = ({ cursor: e, ...t }) => {
  const o = tn();
  return /* @__PURE__ */ E(fn, { ...t, children: /* @__PURE__ */ E(
    Yp,
    {
      cursor: e ?? "pointer",
      sx: {
        color: o.palette.text.secondary,
        "&:hover": {
          color: o.palette.error.main
        }
      }
    }
  ) });
}, sR = (e) => new Promise((t, o) => {
  const r = new FileReader();
  r.onload = (a) => {
    if (a.target) {
      const i = a.target.result;
      t(i);
    }
  }, r.onerror = (a) => {
    var i, s;
    o(new Error(((s = (i = a == null ? void 0 : a.target) == null ? void 0 : i.error) == null ? void 0 : s.message) ?? "Error reading file"));
  }, r.readAsDataURL(e);
});
var zs = {}, lR = Ht;
Object.defineProperty(zs, "__esModule", {
  value: !0
});
var Kp = zs.default = void 0, cR = lR(hn()), uR = un;
Kp = zs.default = (0, cR.default)(/* @__PURE__ */ (0, uR.jsx)("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"
}), "UploadFile");
const GR = ({
  accept: e,
  maxMbSize: t,
  onFileSelected: o,
  maxWidth: r = "unset",
  label: a = {
    upload_button: "Upload",
    upload_prompt: "Upload a file",
    max_size: "Max size",
    file_type: "File type"
  },
  errorMsg: i = ""
}) => {
  const [s, l] = Qn(null), [c, u] = Qn(i), d = async (b) => {
    if (b.preventDefault(), b.target.files && b.target.files.length > 0) {
      const y = b.target.files[0];
      y.size < p ? l(y) : u(`Max file size is ${p / v}`);
    }
  }, p = 1024 * 1024 * t, f = async () => {
    if (s) {
      const b = await sR(s);
      o(s, b);
    }
  }, v = 1048576, h = Xc(() => s ? (s.size / v).toFixed(2) : 0, [s]);
  return /* @__PURE__ */ le(
    ze,
    {
      border: 1,
      borderColor: (b) => b.palette.text.disabled,
      maxWidth: r,
      minWidth: "170px",
      minHeight: "185px",
      position: "relative",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      bgcolor: (b) => b.palette.mode === "dark" ? "#464646" : "#f6f6f6",
      p: 1,
      children: [
        s ? /* @__PURE__ */ E(
          wn,
          {
            fontWeight: "bold",
            color: "text.secondary",
            variant: "subtitle1",
            sx: { width: "100%", wordWrap: "break-word" },
            children: s.name
          }
        ) : /* @__PURE__ */ E(wn, { variant: "subtitle1", fontWeight: "bold", children: a.upload_prompt }),
        /* @__PURE__ */ E(ze, { fontSize: "40px", children: /* @__PURE__ */ E(Kp, { fontSize: "inherit" }) }),
        /* @__PURE__ */ E(
          "input",
          {
            "aria-label": "upload-file",
            type: "file",
            onChange: d,
            accept: e,
            value: "",
            style: {
              cursor: "pointer",
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              opacity: 0,
              overflow: "hidden"
            }
          }
        ),
        !s && /* @__PURE__ */ le(ri, { children: [
          /* @__PURE__ */ le(wn, { variant: "subtitle2", children: [
            a.max_size,
            " ",
            /* @__PURE__ */ E("strong", { children: t }),
            " mb"
          ] }),
          /* @__PURE__ */ le(wn, { variant: "subtitle2", children: [
            a.file_type,
            " ",
            /* @__PURE__ */ le("strong", { children: [
              " ",
              e
            ] })
          ] })
        ] }),
        c && /* @__PURE__ */ E(wn, { color: "error.main", variant: "subtitle1", children: c }),
        s && /* @__PURE__ */ le(ri, { children: [
          /* @__PURE__ */ le(wn, { variant: "subtitle2", children: [
            " ",
            h,
            " mb"
          ] }),
          /* @__PURE__ */ E(
            jt,
            {
              onClick: f,
              type: "button",
              disabled: !s,
              variant: "outlined",
              sx: { mt: 1 },
              children: a.upload_button
            }
          )
        ] })
      ]
    }
  );
};
function XR({
  defaultContent: e,
  defaultSx: t,
  hoveredContent: o,
  hoveredBgColor: r,
  parentHovered: a = !1,
  ...i
}) {
  const [s, l] = Qn(!1), c = () => {
    l(!s);
  };
  return /* @__PURE__ */ E(
    jt,
    {
      variant: "contained",
      color: "primary",
      onMouseEnter: c,
      onMouseLeave: c,
      sx: {
        minWidth: 176,
        position: "relative",
        top: "16px",
        px: 0,
        py: 0,
        borderRadius: "15px",
        transition: "all 0.3s",
        boxShadow: "none",
        lineHeight: "unset",
        minHeight: "35px",
        fontSize: (u) => u.typography.fontSize * (a ? 1.25 : 1),
        backgroundColor: a ? r : Vr[300],
        color: a ? (u) => u.palette.primary.contrastText : Vr[900],
        ...t,
        "&:hover": {
          boxShadow: 1,
          backgroundColor: r,
          color: (u) => u.palette.primary.contrastText
        }
      },
      ...i,
      children: s || a ? o : e
    }
  );
}
const ZR = ({
  open: e,
  handleClose: t,
  handleDateSelection: o,
  labels: r = {
    selectButton: "Select",
    custom: "Custom",
    lastMonth: "Last Month",
    last3Months: "Last 3 Months",
    last6Months: "Last 6 Months"
  }
}) => {
  const [a, i] = Qn({ startDate: "", endDate: "" }), s = (c) => {
    const u = Mt(), d = u.subtract(c, "month").format("YYYY-MM-DD");
    i({ startDate: d, endDate: u.format("YYYY-MM-DD") });
  }, l = Xc(() => {
    if (a.startDate && a.endDate) {
      const c = Mt(), u = c.subtract(1, "month").format("YYYY-MM-DD"), d = c.subtract(3, "month").format("YYYY-MM-DD"), p = c.subtract(6, "month").format("YYYY-MM-DD");
      return a.endDate === c.format("YYYY-MM-DD") && a.startDate === u ? "one_month_block" : a.endDate === c.format("YYYY-MM-DD") && a.startDate === d ? "three_month_block" : a.endDate === c.format("YYYY-MM-DD") && a.startDate === p ? "six_month_block" : "custom_block";
    } else
      return "custom_block";
  }, [a.endDate, a.startDate]);
  return /* @__PURE__ */ le(
    MC,
    {
      open: e,
      maxWidth: "640px",
      onClose: t,
      closeModal: t,
      cancelAction: t,
      callToActionLabel: r == null ? void 0 : r.selectButton,
      callToAction: () => o(a),
      "aria-label": "date-selection-modal",
      children: [
        /* @__PURE__ */ le(ze, { display: "flex", gap: 1, flexWrap: "wrap", children: [
          /* @__PURE__ */ E(
            jt,
            {
              color: "info",
              variant: l === "custom_block" ? "contained" : "outlined",
              size: "small",
              onClick: () => i({ startDate: "", endDate: "" }),
              children: r.custom
            }
          ),
          /* @__PURE__ */ E(
            jt,
            {
              color: "info",
              variant: l === "one_month_block" ? "contained" : "outlined",
              size: "small",
              onClick: () => s(1),
              "aria-label": "selection-1-month",
              children: r.lastMonth
            }
          ),
          /* @__PURE__ */ E(
            jt,
            {
              color: "info",
              variant: l === "three_month_block" ? "contained" : "outlined",
              size: "small",
              onClick: () => s(3),
              "aria-label": "selection-3-month",
              children: r.last3Months
            }
          ),
          /* @__PURE__ */ E(
            jt,
            {
              color: "info",
              variant: l === "six_month_block" ? "contained" : "outlined",
              size: "small",
              onClick: () => s(6),
              "aria-label": "selection-6-month",
              children: r.last6Months
            }
          )
        ] }),
        /* @__PURE__ */ E(ze, { my: 3, children: /* @__PURE__ */ E(
          oR,
          {
            dateRange: { startDate: a.startDate, endDate: a.endDate },
            onDateRangeChange: (c) => i(c)
          }
        ) })
      ]
    }
  );
};
var Ws = {}, dR = Ht;
Object.defineProperty(Ws, "__esModule", {
  value: !0
});
var Gp = Ws.default = void 0, pR = dR(hn()), fR = un;
Gp = Ws.default = (0, pR.default)(/* @__PURE__ */ (0, fR.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
}), "Search");
var Us = {}, mR = Ht;
Object.defineProperty(Us, "__esModule", {
  value: !0
});
var Xp = Us.default = void 0, hR = mR(hn()), bR = un;
Xp = Us.default = (0, hR.default)(/* @__PURE__ */ (0, bR.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
const gR = Q("div")(({ theme: e, flavor: t = "contained" }) => ({
  position: "relative",
  borderRadius: t === "contained" ? "28px" : "11px",
  marginLeft: 0,
  marginRight: 0,
  maxWidth: "450px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  background: t === "contained" ? e.palette.secondary.main : "transparent",
  color: Vr[800],
  border: t === "contained" ? `1px solid ${e.palette.mode === "dark" ? "background.paper" : e.palette.text.disabled} ` : `1px solid ${e.palette.primary.main}`
})), yR = Q(sr)(({ theme: e }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: e.spacing(1, 1, 1, 1),
    width: "100%"
  }
}));
function QR({
  title: e = "Search",
  onChange: t,
  onClear: o,
  presetValue: r,
  sx: a,
  manualSearch: i = !0,
  clearQuery: s,
  flavor: l = "contained"
}) {
  const [c, u] = Qn(r ?? ""), [, d] = vf(), p = Ys(
    (b) => {
      const { value: y } = b.target;
      d(() => {
        u(y), i || t(y);
      });
    },
    [t, i]
  ), f = xf(c), v = Ys(() => {
    d(() => {
      u(""), o ? o() : t("");
    });
  }, [o, t]), h = (b) => {
    b.key === "Enter" && t(c);
  };
  return Ks(() => {
    s && u("");
  }, s), Ks(() => {
    c.length % 3 === 0 && t(c);
  }, [c]), /* @__PURE__ */ le(gR, { sx: a, title: e, flavor: l, "aria-label": "search-input", children: [
    /* @__PURE__ */ E(
      yR,
      {
        onChange: p,
        placeholder: e,
        inputProps: { "aria-label": "search" },
        value: f,
        onKeyPress: h
      }
    ),
    c.length > 0 && /* @__PURE__ */ E(Kc, { onClick: v, color: "inherit", children: /* @__PURE__ */ E(Xp, { sx: { cursor: "pointer", color: "inherit" }, fontSize: "small" }) }),
    i && /* @__PURE__ */ E(
      Gp,
      {
        onClick: () => t(c),
        style: { paddingRight: 4, marginRight: 5, opacity: c.length > 0 ? 1 : 0.6, cursor: "pointer" }
      }
    )
  ] });
}
const JR = ({
  value: e,
  handleValueChange: t,
  options: o,
  sxProps: r = {}
}) => /* @__PURE__ */ E(
  Ti,
  {
    select: !0,
    value: e,
    fullWidth: !0,
    sx: { "& .MuiSelect-select": { p: 1, fontWeight: "bold" }, fieldset: { border: "none" }, ...r },
    onBlur: (a) => a.stopPropagation(),
    onChange: (a) => t(a.target.value),
    children: o.map((a) => /* @__PURE__ */ E(Gc, { value: a.value, children: /* @__PURE__ */ E(ze, { component: "span", display: "flex", flexDirection: "column", children: /* @__PURE__ */ E(ze, { component: "span", children: a.label }) }) }, a.value))
  }
);
var qs = {}, vR = Ht;
Object.defineProperty(qs, "__esModule", {
  value: !0
});
var Zp = qs.default = void 0, xR = vR(hn()), wR = un;
Zp = qs.default = (0, xR.default)(/* @__PURE__ */ (0, wR.jsx)("path", {
  d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"
}), "Visibility");
var Hs = {}, CR = Ht;
Object.defineProperty(Hs, "__esModule", {
  value: !0
});
var Qp = Hs.default = void 0, SR = CR(hn()), ER = un;
Qp = Hs.default = (0, SR.default)(/* @__PURE__ */ (0, ER.jsx)("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), "VisibilityOff");
function eT({ visibility: e, ...t }) {
  return /* @__PURE__ */ E(fn, { ...t, children: e ? /* @__PURE__ */ E(
    Zp,
    {
      sx: {
        color: (o) => o.palette.primary.main
      }
    }
  ) : /* @__PURE__ */ E(
    Qp,
    {
      sx: {
        color: (o) => o.palette.text.secondary
      }
    }
  ) });
}
const Jp = {
  primary: {
    light: "#f3a34e",
    main: "#ff9018",
    dark: "#f87d02"
  },
  secondary: {
    light: "#ab92ee",
    main: "#6750a4",
    dark: "#4f2baf"
  },
  error: {
    light: "#f72b2b",
    main: "#c50e1f",
    dark: "#a80f22"
  },
  warning: {
    light: "#fcd37a",
    main: "#ffcc66",
    dark: "#ffbc27"
  },
  info: {
    light: "#4eccef",
    main: "#1ba0ce",
    dark: "#0066cc"
  },
  success: {
    light: "#4caf50",
    main: "#2e7d32",
    dark: "#1b5e20"
  },
  common: {
    black: "#000",
    white: "#fff"
  }
}, ef = {
  values: {
    xs: 0,
    sm: 480,
    md: 810,
    lg: 1050,
    xl: 1400
  }
}, tf = (e = "light") => {
  let t, o, r;
  return e === "dark" ? (t = "#6b6b6b", o = "#2b2b2b", r = "#959595") : (t = "#b2b1af", o = "#f1efef", r = "#959595"), {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${t} ${o}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: o
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: t,
            minHeight: 24,
            border: `2px solid ${o}`
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
            backgroundColor: o
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: e === "light" ? "#f7f7f7" : "",
          transition: "background-color, box-shadow",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: (a) => a.palette.action.hover,
            boxShadow: (a) => a.shadows[4]
          }
        }
      }
    },
    //theme.typography.fontsize * 1.1rem => 14px
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          borderRadius: "17px",
          fontSize: "0.88rem",
          fontWeight: 400,
          paddingRight: "30px;",
          paddingLeft: "30px;"
        }
      }
    }
  };
}, nf = {
  borderRadius: 5
}, tT = {
  palette: {
    mode: "light",
    background: {
      default: "#e2e6ee",
      paper: "#fbfbfb"
    },
    ...Jp,
    text: {
      primary: "#444141",
      secondary: "#6b6b6b",
      disabled: "#999"
    }
  },
  components: tf("light"),
  shape: nf,
  breakpoints: ef
}, nT = {
  palette: {
    mode: "dark",
    background: {
      default: "#09091c",
      paper: "#282c34"
    },
    ...Jp
  },
  components: tf("dark"),
  shape: nf,
  breakpoints: ef
}, of = {
  primary: {
    light: "#ADDBFF",
    main: "#3A5CB4",
    dark: "#03387a"
  },
  secondary: {
    light: "#f5f8fa",
    main: "#F1F9FF",
    dark: "#E8EDF5"
  },
  error: {
    light: "#f72b2b",
    main: "#c50e1f",
    dark: "#a80f22"
  },
  warning: {
    light: "#fcd37a",
    main: "#ffcc66",
    dark: "#ffbc27"
  },
  info: {
    light: "#DDF1FF",
    main: "#096BDE",
    dark: "#0066cc"
  },
  success: {
    light: "#4caf50",
    main: "#2e7d32",
    dark: "#1b5e20"
  },
  common: {
    black: "#000",
    white: "#fff"
  }
}, rf = {
  values: {
    xs: 0,
    sm: 480,
    md: 810,
    lg: 1050,
    xl: 1580
  }
}, af = (e = "light") => {
  let t, o, r;
  return e === "dark" ? (t = "#6b6b6b", o = "#2b2b2b", r = "#959595") : (t = "#b2b1af", o = "#f1efef", r = "#959595"), {
    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: e === "light" ? "linear-gradient(167deg, rgba(229, 237, 255, 0.15) 2.39%, rgba(241, 248, 255, 0.30) 22.83%, rgba(255, 255, 255, 0.16) 61.1%, rgba(255, 228, 193, 0.14) 81.54%), #F5F5F5" : "default",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          scrollbarColor: `${t} ${o}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: o
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: t,
            minHeight: 24,
            border: `2px solid ${o}`
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
            backgroundColor: o
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
            backgroundColor: (a) => a.palette.action.hover,
            boxShadow: (a) => a.shadows[4]
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
          borderRadius: "25px",
          fontSize: "0.88rem",
          fontWeight: 400,
          paddingRight: "30px;",
          paddingLeft: "30px;"
        }
      }
    }
  };
}, sf = {
  //fontFamily: 'FontUp',
}, lf = {
  borderRadius: 5
}, oT = {
  palette: {
    mode: "light",
    background: {
      default: "#F7F7f8",
      paper: "#FEFEFE"
    },
    ...of,
    text: {
      primary: "#272930",
      // Dark gray
      secondary: "#757575",
      // Gray
      disabled: "#999"
      // Light gray
    }
  },
  components: af("light"),
  typography: sf,
  shape: lf,
  breakpoints: rf
}, rT = {
  palette: {
    mode: "dark",
    background: {
      paper: "#262626;"
    },
    ...of
  },
  components: af("dark"),
  typography: sf,
  shape: lf,
  breakpoints: rf
};
export {
  HR as BackButton,
  nT as BackofficeDark,
  tT as BackofficeLight,
  YR as CustomSwitch,
  oR as DateRangePicker,
  KR as DeleteButton,
  LR as Drawer,
  _R as ErrorPage,
  rT as ExpenseDark,
  oT as ExpenseLight,
  IR as Fallback,
  GR as FileInput,
  WR as FormCheckboxField,
  UR as FormDatePick,
  jR as FormField,
  zR as FormSectionLabel,
  BR as FormSelect,
  XR as HoverButton,
  ZR as ModalDateRangePicker,
  NR as NotFound,
  DR as PageLayout,
  $R as PageSection,
  MR as PageTitle,
  QR as SearchInput,
  JR as Select,
  qR as SubmitButtonFooter,
  eT as VisibilityToggle,
  VR as getBorderColor,
  AR as getCommonCarouselStyles,
  FR as getSecondaryBgColor,
  Vg as useIsMobile,
  kR as useIsMobileLayout
};
