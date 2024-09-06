import{r as l,a as _}from"./index-CTjT7uj6.js";/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}var x;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(x||(x={}));function z(e){e===void 0&&(e={});let{initialEntries:t=["/"],initialIndex:n,v5Compat:a=!1}=e,r;r=t.map((s,c)=>h(s,typeof s=="string"?null:s.state,c===0?"default":void 0));let o=f(n??r.length-1),i=x.Pop,u=null;function f(s){return Math.min(Math.max(s,0),r.length-1)}function d(){return r[o]}function h(s,c,m){c===void 0&&(c=null);let y=K(r?d().pathname:"/",s,c,m);return $(y.pathname.charAt(0)==="/","relative pathnames are not supported in memory history: "+JSON.stringify(s)),y}function p(s){return typeof s=="string"?s:F(s)}return{get index(){return o},get action(){return i},get location(){return d()},createHref:p,createURL(s){return new URL(p(s),"http://localhost")},encodeLocation(s){let c=typeof s=="string"?C(s):s;return{pathname:c.pathname||"",search:c.search||"",hash:c.hash||""}},push(s,c){i=x.Push;let m=h(s,c);o+=1,r.splice(o,r.length,m),a&&u&&u({action:i,location:m,delta:1})},replace(s,c){i=x.Replace;let m=h(s,c);r[o]=m,a&&u&&u({action:i,location:m,delta:0})},go(s){i=x.Pop;let c=f(o+s),m=r[c];o=c,u&&u({action:i,location:m,delta:s})},listen(s){return u=s,()=>{u=null}}}}function g(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q(){return Math.random().toString(36).substr(2,8)}function K(e,t,n,a){return n===void 0&&(n=null),b({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?C(t):t,{state:n,key:t&&t.key||a||q()})}function F(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function C(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var I;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(I||(I={}));function G(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Q(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?C(e):e;return{pathname:n?n.startsWith("/")?n:V(n,t):t,search:Y(a),hash:Z(r)}}function V(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function S(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function X(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function M(e,t){let n=X(e);return t?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function O(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=C(e):(r=b({},e),g(!r.pathname||!r.pathname.includes("?"),S("?","pathname","search",r)),g(!r.pathname||!r.pathname.includes("#"),S("#","pathname","hash",r)),g(!r.search||!r.search.includes("#"),S("#","search","hash",r)));let o=e===""||r.pathname==="",i=o?"/":r.pathname,u;if(i==null)u=n;else{let p=t.length-1;if(!a&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),p-=1;r.pathname=v.join("/")}u=p>=0?t[p]:"/"}let f=Q(r,u),d=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(d||h)&&(f.pathname+="/"),f}const w=e=>e.join("/").replace(/\/\/+/g,"/"),Y=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Z=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,j=["post","put","patch","delete"];new Set(j);const k=["get",...j];new Set(k);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}const T=l.createContext(null),P=l.createContext(null),E=l.createContext(null),N=l.createContext({outlet:null,matches:[],isDataRoute:!1});function se(e,t){let{relative:n}=t===void 0?{}:t;L()||g(!1);let{basename:a,navigator:r}=l.useContext(P),{hash:o,pathname:i,search:u}=H(e,{relative:n}),f=i;return a!=="/"&&(f=i==="/"?a:w([a,i])),r.createHref({pathname:f,search:u,hash:o})}function L(){return l.useContext(E)!=null}function W(){return L()||g(!1),l.useContext(E).location}function A(e){l.useContext(P).static||l.useLayoutEffect(e)}function oe(){let{isDataRoute:e}=l.useContext(N);return e?ae():D()}function D(){L()||g(!1);let e=l.useContext(T),{basename:t,future:n,navigator:a}=l.useContext(P),{matches:r}=l.useContext(N),{pathname:o}=W(),i=JSON.stringify(M(r,n.v7_relativeSplatPath)),u=l.useRef(!1);return A(()=>{u.current=!0}),l.useCallback(function(d,h){if(h===void 0&&(h={}),!u.current)return;if(typeof d=="number"){a.go(d);return}let p=O(d,JSON.parse(i),o,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:w([t,p.pathname])),(h.replace?a.replace:a.push)(p,h.state,h)},[t,a,i,o,e])}function H(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=l.useContext(P),{matches:r}=l.useContext(N),{pathname:o}=W(),i=JSON.stringify(M(r,a.v7_relativeSplatPath));return l.useMemo(()=>O(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}var J=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(J||{}),B=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(B||{});function ee(e){let t=l.useContext(T);return t||g(!1),t}function te(e){let t=l.useContext(N);return t||g(!1),t}function ne(e){let t=te(),n=t.matches[t.matches.length-1];return n.route.id||g(!1),n.route.id}function ae(){let{router:e}=ee(J.UseNavigateStable),t=ne(B.UseNavigateStable),n=l.useRef(!1);return A(()=>{n.current=!0}),l.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,R({fromRouteId:t},o)))},[e,t])}const re="startTransition",U=_[re];function ue(e){let{basename:t,children:n,initialEntries:a,initialIndex:r,future:o}=e,i=l.useRef();i.current==null&&(i.current=z({initialEntries:a,initialIndex:r,v5Compat:!0}));let u=i.current,[f,d]=l.useState({action:u.action,location:u.location}),{v7_startTransition:h}=o||{},p=l.useCallback(v=>{h&&U?U(()=>d(v)):d(v)},[d,h]);return l.useLayoutEffect(()=>u.listen(p),[u,p]),l.createElement(ie,{basename:t,children:n,location:f.location,navigationType:f.action,navigator:u,future:o})}function ie(e){let{basename:t="/",children:n=null,location:a,navigationType:r=x.Pop,navigator:o,static:i=!1,future:u}=e;L()&&g(!1);let f=t.replace(/^\/*/,"/"),d=l.useMemo(()=>({basename:f,navigator:o,static:i,future:R({v7_relativeSplatPath:!1},u)}),[f,u,o,i]);typeof a=="string"&&(a=C(a));let{pathname:h="/",search:p="",hash:v="",state:s=null,key:c="default"}=a,m=l.useMemo(()=>{let y=G(h,f);return y==null?null:{location:{pathname:y,search:p,hash:v,state:s,key:c},navigationType:r}},[f,h,p,v,s,c,r]);return m==null?null:l.createElement(P.Provider,{value:d},l.createElement(E.Provider,{children:n,value:m}))}new Promise(()=>{});export{ue as M,P as N,oe as a,W as b,H as c,F as d,G as s,se as u};
