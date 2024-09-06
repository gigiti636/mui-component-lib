import{j as y,g as s}from"./defaultTheme-CsXV0Sr8.js";import{r as S}from"./index-CTjT7uj6.js";import{B as k}from"./Button-DDZbZLjO.js";import{a as h}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./extends-CF3RwP-h.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./ButtonBase-BvvLlLjR.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./v4-CQkTLCs1.js";function f({defaultContent:C,defaultSx:v,hoveredContent:g,hoveredBgColor:r,parentHovered:t=!1,...x}){const[a,b]=S.useState(!1),i=()=>{b(!a)};return y.jsx(k,{variant:"contained",color:"primary",onMouseEnter:i,onMouseLeave:i,sx:{minWidth:176,position:"relative",top:"16px",px:0,py:0,borderRadius:"15px",transition:"all 0.3s",boxShadow:"none",lineHeight:"unset",minHeight:"35px",fontSize:e=>e.typography.fontSize*(t?1.25:1),backgroundColor:t?r:s[300],color:t?e=>e.palette.primary.contrastText:s[900],...v,"&:hover":{boxShadow:1,backgroundColor:r,color:e=>e.palette.primary.contrastText}},...x,children:a||t?g:C})}f.__docgenInfo={description:"",methods:[],displayName:"HoverButton",props:{defaultContent:{required:!0,tsType:{name:"ReactNode"},description:""},defaultSx:{required:!1,tsType:{name:"SxProps"},description:""},hoveredContent:{required:!0,tsType:{name:"ReactNode"},description:""},hoveredBgColor:{required:!0,tsType:{name:"string"},description:""},parentHovered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["ButtonProps"]};const M={title:"Input/HoverButton",component:f,parameters:{docs:{description:{component:"A button component that changes content and background color on hover."}}},argTypes:{defaultContent:{control:"text",description:"Content displayed when the button is not hovered."},defaultSx:{control:"object",description:"Styles applied to the button when not hovered."},hoveredContent:{control:"text",description:"Content displayed when the button is hovered."},hoveredBgColor:{control:"color",description:"Background color of the button when hovered."},parentHovered:{control:"boolean",description:"If true, applies hover styles based on parent hover."},onClick:{action:"clicked",description:"Function called when the button is clicked."}}},o={args:{defaultContent:"Default Content",hoveredContent:"Hovered Content",onClick:h("button clicked")}},n={args:{defaultContent:"Default Content",hoveredContent:"Hovered Content",hoveredBgColor:"#4caf50",defaultSx:{minWidth:200,fontSize:"large"},onClick:h("button clicked")}};var d,c,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    defaultContent: 'Default Content',
    hoveredContent: 'Hovered Content',
    onClick: actionFn('button clicked')
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    defaultContent: 'Default Content',
    hoveredContent: 'Hovered Content',
    hoveredBgColor: '#4caf50',
    defaultSx: {
      minWidth: 200,
      fontSize: 'large'
    },
    onClick: actionFn('button clicked')
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const P=["Default","CustomStyle"];export{n as CustomStyle,o as Default,P as __namedExportsOrder,M as default};
