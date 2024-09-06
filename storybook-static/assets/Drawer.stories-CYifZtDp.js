import{_ as W,j as m,c as N}from"./defaultTheme-CsXV0Sr8.js";import{d as ne}from"./Close-D-2U7SAI.js";import{_ as p}from"./extends-CF3RwP-h.js";import{r as g}from"./index-CTjT7uj6.js";import{g as ae,a as ie,c as A}from"./generateUtilityClasses-CN27YKX3.js";import{u as se}from"./index-C-RamHs9.js";import{u as J}from"./useTheme-Yl1OmhDb.js";import{s as q,r as ce,c as le}from"./styled-DzvXPvDf.js";import{T as de,r as pe,g as H,M as ue}from"./Modal-Cl-5GAuR.js";import{P as fe}from"./Paper-DXlsPgaF.js";import{u as me}from"./DefaultPropsProvider-Df08ATIX.js";import{u as he}from"./TransitionGroupContext-BBeR8EVf.js";import{d as xe,o as K}from"./createSvgIcon-ShKUGmxd.js";import{B as V}from"./Box-DP5ickGI.js";import{a as Y}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./createSvgIcon-ByPedIi_.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./useControlled-5JjQu8rW.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./useTheme-C4EEJ3Wb.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CYM-y3Gt.js";import"./isHostComponent-DVu5iVWx.js";import"./v4-CQkTLCs1.js";const ge=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function we(r,e,n){const t=e.getBoundingClientRect(),a=n&&n.getBoundingClientRect(),h=K(e);let c;if(e.fakeTransform)c=e.fakeTransform;else{const i=h.getComputedStyle(e);c=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let u=0,l=0;if(c&&c!=="none"&&typeof c=="string"){const i=c.split("(")[1].split(")")[0].split(",");u=parseInt(i[4],10),l=parseInt(i[5],10)}return r==="left"?a?`translateX(${a.right+u-t.left}px)`:`translateX(${h.innerWidth+u-t.left}px)`:r==="right"?a?`translateX(-${t.right-a.left-u}px)`:`translateX(-${t.left+t.width-u}px)`:r==="up"?a?`translateY(${a.bottom+l-t.top}px)`:`translateY(${h.innerHeight+l-t.top}px)`:a?`translateY(-${t.top-a.top+t.height-l}px)`:`translateY(-${t.top+t.height-l}px)`}function ve(r){return typeof r=="function"?r():r}function B(r,e,n){const t=ve(n),a=we(r,e,t);a&&(e.style.webkitTransform=a,e.style.transform=a)}const ye=g.forwardRef(function(e,n){const t=J(),a={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},h={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:c,appear:u=!0,children:l,container:i,direction:f="down",easing:T=a,in:w,onEnter:R,onEntered:z,onEntering:b,onExit:P,onExited:C,onExiting:_,style:D,timeout:v=h,TransitionComponent:I=de}=e,E=W(e,ge),d=g.useRef(null),L=he(l.ref,d,n),y=o=>s=>{o&&(s===void 0?o(d.current):o(d.current,s))},k=y((o,s)=>{B(f,o,i),pe(o),R&&R(o,s)}),x=y((o,s)=>{const S=H({timeout:v,style:D,easing:T},{mode:"enter"});o.style.webkitTransition=t.transitions.create("-webkit-transform",p({},S)),o.style.transition=t.transitions.create("transform",p({},S)),o.style.webkitTransform="none",o.style.transform="none",b&&b(o,s)}),$=y(z),j=y(_),re=y(o=>{const s=H({timeout:v,style:D,easing:T},{mode:"exit"});o.style.webkitTransition=t.transitions.create("-webkit-transform",s),o.style.transition=t.transitions.create("transform",s),B(f,o,i),P&&P(o)}),te=y(o=>{o.style.webkitTransition="",o.style.transition="",C&&C(o)}),oe=o=>{c&&c(d.current,o)},O=g.useCallback(()=>{d.current&&B(f,d.current,i)},[f,i]);return g.useEffect(()=>{if(w||f==="down"||f==="right")return;const o=xe(()=>{d.current&&B(f,d.current,i)}),s=K(d.current);return s.addEventListener("resize",o),()=>{o.clear(),s.removeEventListener("resize",o)}},[f,w,i]),g.useEffect(()=>{w||O()},[w,O]),m.jsx(I,p({nodeRef:d,onEnter:k,onEntered:$,onEntering:x,onExit:re,onExited:te,onExiting:j,addEndListener:oe,appear:u,in:w,timeout:v},E,{children:(o,s)=>g.cloneElement(l,p({ref:L,style:p({visibility:o==="exited"&&!w?"hidden":void 0},D,l.props.style)},s))}))});function ke(r){return ae("MuiDrawer",r)}ie("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const be=["BackdropProps"],De=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Q=(r,e)=>{const{ownerState:n}=r;return[e.root,(n.variant==="permanent"||n.variant==="persistent")&&e.docked,e.modal]},Ee=r=>{const{classes:e,anchor:n,variant:t}=r,a={root:["root"],docked:[(t==="permanent"||t==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${N(n)}`,t!=="temporary"&&`paperAnchorDocked${N(n)}`]};return le(a,ke,e)},Te=q(ue,{name:"MuiDrawer",slot:"Root",overridesResolver:Q})(({theme:r})=>({zIndex:(r.vars||r).zIndex.drawer})),F=q("div",{shouldForwardProp:ce,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Q})({flex:"0 0 auto"}),Pe=q(fe,{name:"MuiDrawer",slot:"Paper",overridesResolver:(r,e)=>{const{ownerState:n}=r;return[e.paper,e[`paperAnchor${N(n.anchor)}`],n.variant!=="temporary"&&e[`paperAnchorDocked${N(n.anchor)}`]]}})(({theme:r,ownerState:e})=>p({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(r.vars||r).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},e.anchor==="left"&&{left:0},e.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="right"&&{right:0},e.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},e.anchor==="left"&&e.variant!=="temporary"&&{borderRight:`1px solid ${(r.vars||r).palette.divider}`},e.anchor==="top"&&e.variant!=="temporary"&&{borderBottom:`1px solid ${(r.vars||r).palette.divider}`},e.anchor==="right"&&e.variant!=="temporary"&&{borderLeft:`1px solid ${(r.vars||r).palette.divider}`},e.anchor==="bottom"&&e.variant!=="temporary"&&{borderTop:`1px solid ${(r.vars||r).palette.divider}`})),Z={left:"right",right:"left",top:"down",bottom:"up"};function Re(r){return["left","right"].indexOf(r)!==-1}function Ce({direction:r},e){return r==="rtl"&&Re(e)?Z[e]:e}const $e=g.forwardRef(function(e,n){const t=me({props:e,name:"MuiDrawer"}),a=J(),h=se(),c={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:u="left",BackdropProps:l,children:i,className:f,elevation:T=16,hideBackdrop:w=!1,ModalProps:{BackdropProps:R}={},onClose:z,open:b=!1,PaperProps:P={},SlideProps:C,TransitionComponent:_=ye,transitionDuration:D=c,variant:v="temporary"}=t,I=W(t.ModalProps,be),E=W(t,De),d=g.useRef(!1);g.useEffect(()=>{d.current=!0},[]);const L=Ce({direction:h?"rtl":"ltr"},u),k=p({},t,{anchor:u,elevation:T,open:b,variant:v},E),x=Ee(k),$=m.jsx(Pe,p({elevation:v==="temporary"?T:0,square:!0},P,{className:A(x.paper,P.className),ownerState:k,children:i}));if(v==="permanent")return m.jsx(F,p({className:A(x.root,x.docked,f),ownerState:k,ref:n},E,{children:$}));const j=m.jsx(_,p({in:b,direction:Z[L],timeout:D,appear:d.current},C,{children:$}));return v==="persistent"?m.jsx(F,p({className:A(x.root,x.docked,f),ownerState:k,ref:n},E,{children:j})):m.jsx(Te,p({BackdropProps:p({},l,R,{transitionDuration:D}),className:A(x.root,x.modal,f),open:b,ownerState:k,onClose:z,hideBackdrop:w,ref:n},E,I,{children:j}))});function ee({open:r,anchor:e="right",closeDrawer:n,onClose:t,children:a,header:h,width:c=300}){const u={boxShadow:24},l={p:2,width:c,overflow:"auto",outline:"none",wordWrap:"break-word",overflowWrap:"break-word"};return m.jsx($e,{anchor:e,open:r,sx:u,onClose:t,children:m.jsxs(V,{sx:l,children:[m.jsxs(V,{display:"flex",mb:2,children:[m.jsx(V,{flexGrow:1,fontWeight:"bold",fontSize:"24px",children:h}),n&&m.jsx("div",{style:{position:"relative",cursor:"pointer"},children:m.jsx(ne,{onClick:n})})]}),a]})})}ee.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},anchor:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},closeDrawer:{required:!1,tsType:{name:"MouseEventHandler"},description:""},onClose:{required:!0,tsType:{name:"MouseEventHandler"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"",defaultValue:{value:"300",computed:!1}}},composes:["DrawerProps"]};const er={title:"Components/Drawer",component:ee,parameters:{docs:{description:{component:"A Drawer component that can be customized with different props."}}},argTypes:{open:{control:"boolean",defaultValue:!0,description:"Controls whether the modal is open or closed.",name:"Drawer visibility"},width:{control:"number",name:"Drawer width"},header:{control:"text",name:"Drawer header"},anchor:{control:"select",options:["left","right"],default:"left",description:"Drawer anshor"},closeDrawer:{control:"object",name:'ACTION - close modal by clicking "x" '},onClose:{control:"object",name:"ACTION - click outside drawer box"}}},M={args:{open:!0,header:"Drawer header",width:300,anchor:"left",children:"This is drawer content",closeDrawer:Y('close drawer by clicking "x"'),onClose:Y("click outside drawer box")}};var X,U,G;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    open: true,
    header: 'Drawer header',
    width: 300,
    anchor: 'left',
    children: 'This is drawer content',
    closeDrawer: actionFn('close drawer by clicking "x"'),
    onClose: actionFn('click outside drawer box')
  }
}`,...(G=(U=M.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const rr=["Primary"];export{M as Primary,rr as __namedExportsOrder,er as default};
