import{T as h}from"./index-CZlrRKMw.js";import{a as e}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./defaultTheme-CsXV0Sr8.js";import"./index-CTjT7uj6.js";import"./extends-CF3RwP-h.js";import"./Close-D-2U7SAI.js";import"./createSvgIcon-ByPedIi_.js";import"./createSvgIcon-ShKUGmxd.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./useControlled-5JjQu8rW.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./Stack-BbfZ5qrn.js";import"./useThemeProps-D8z9BOAe.js";import"./getThemeProps-ClK_6XBd.js";import"./useTheme-C4EEJ3Wb.js";import"./Button-DDZbZLjO.js";import"./ButtonBase-BvvLlLjR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./Modal-Cl-5GAuR.js";import"./useTheme-Yl1OmhDb.js";import"./index-CYM-y3Gt.js";import"./isHostComponent-DVu5iVWx.js";import"./Box-DP5ickGI.js";import"./IconButton-DI03T9q8.js";import"./v4-CQkTLCs1.js";const G={title:"Components/Modal",component:h,parameters:{docs:{description:{component:"A button component that can be customized with different props."}}},argTypes:{open:{control:"boolean",defaultValue:!0,description:"Controls whether the modal is open or closed.",name:"Modal visibility"},maxWidth:{control:"number",validation:{min:0,message:"Max width must be a positive number."},description:"Max width of the modal content (in pixels)"},header:{control:"text",description:"The text or custom element to be displayed in the header of the modal."},callToActionLabel:{control:"text",description:"Label for the primary action button in the modal."},cancelActionLabel:{control:"text",description:"Label for the cancel action button."},callToActionIsDelete:{control:"boolean",description:"Indicates if the call-to-action is a delete operation."},disabled:{control:"boolean",description:"Disables the modal interactions."},children:{control:"text",description:"Content to be displayed inside the modal."},callToActionHidden:{control:"boolean",description:"Controls whether the call-to-action button is hidden."},callToAction:{control:"object",name:"ACTION - main action LABEL was clicked"},cancelAction:{control:"object",name:"ACTION - cancel action LABEL was clicked"},closeModal:{control:"object",name:'ACTION - close modal by clicking "x" '},onClose:{control:"object",name:"ACTION - click outside modal box"}}},o={args:{open:!0,maxWidth:"900px",header:"Modal header",callToActionLabel:"Action label",cancelActionLabel:"Cancel label",callToActionIsDelete:!1,callToActionHidden:!1,disabled:!1,children:"This is modal content. The modal is always rendered in the center of the page.",callToAction:e("main action LABEL was clicked"),cancelAction:e("cancel action LABEL was clicked"),closeModal:e('close modal by clicking "x"'),onClose:e("click outside modal box")}},a={args:{open:!0,maxWidth:"900px",header:"Modal header",callToActionLabel:"Action label",cancelActionLabel:"Cancel label",callToActionIsDelete:!0,callToActionHidden:!1,disabled:!1,children:"This is modal content. The modal is always rendered in the center of the page.",callToAction:e("main action LABEL was clicked"),cancelAction:e("cancel action LABEL was clicked"),closeModal:e('close modal by clicking "x"'),onClose:e("click outside modal box")}},t={args:{open:!0,header:"Modal header",children:"This is modal content. The modal is always rendered in the center of the page.",closeModal:e('close modal by clicking "x"'),onClose:e("click outside modal box")}};var c,l,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    open: true,
    maxWidth: '900px',
    header: 'Modal header',
    callToActionLabel: 'Action label',
    cancelActionLabel: 'Cancel label',
    callToActionIsDelete: false,
    callToActionHidden: false,
    disabled: false,
    children: 'This is modal content. The modal is always rendered in the center of the page.',
    callToAction: actionFn('main action LABEL was clicked'),
    cancelAction: actionFn('cancel action LABEL was clicked'),
    closeModal: actionFn('close modal by clicking "x"'),
    onClose: actionFn('click outside modal box')
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var n,r,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    open: true,
    maxWidth: '900px',
    header: 'Modal header',
    callToActionLabel: 'Action label',
    cancelActionLabel: 'Cancel label',
    callToActionIsDelete: true,
    callToActionHidden: false,
    disabled: false,
    children: 'This is modal content. The modal is always rendered in the center of the page.',
    callToAction: actionFn('main action LABEL was clicked'),
    cancelAction: actionFn('cancel action LABEL was clicked'),
    closeModal: actionFn('close modal by clicking "x"'),
    onClose: actionFn('click outside modal box')
  }
}`,...(d=(r=a.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    open: true,
    header: 'Modal header',
    children: 'This is modal content. The modal is always rendered in the center of the page.',
    closeModal: actionFn('close modal by clicking "x"'),
    onClose: actionFn('click outside modal box')
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const J=["Primary","Delete","Simple"];export{a as Delete,o as Primary,t as Simple,J as __namedExportsOrder,G as default};
