import{j as t}from"./defaultTheme-CsXV0Sr8.js";import{r as g}from"./index-CTjT7uj6.js";import{T as x}from"./TextField-DG4d8yEJ.js";import{M as V}from"./MenuItem-C9sJaH6P.js";import{B as u}from"./Box-DP5ickGI.js";import{a as b}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./extends-CF3RwP-h.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./InputBase-DdiKLNG9.js";import"./useFormControl-B9FSkLKA.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./createSvgIcon-ShKUGmxd.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-lPRD4BR6.js";import"./useTheme-C4EEJ3Wb.js";import"./index-C-RamHs9.js";import"./Modal-Cl-5GAuR.js";import"./useTheme-Yl1OmhDb.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CYM-y3Gt.js";import"./Paper-DXlsPgaF.js";import"./useControlled-5JjQu8rW.js";import"./ButtonBase-BvvLlLjR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./v4-CQkTLCs1.js";const s=({value:n,handleValueChange:a,options:o,sxProps:l={}})=>t.jsx(x,{select:!0,value:n,fullWidth:!0,sx:{"& .MuiSelect-select":{p:1,fontWeight:"bold"},fieldset:{border:"none"},...l},onBlur:e=>e.stopPropagation(),onChange:e=>a(e.target.value),children:o.map(e=>t.jsx(V,{value:e.value,children:t.jsx(u,{component:"span",display:"flex",flexDirection:"column",children:t.jsx(u,{component:"span",children:e.label})})},e.value))});s.__docgenInfo={description:"",methods:[],displayName:"Select",props:{value:{required:!1,tsType:{name:"T"},description:""},handleValueChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(_value: T) => void",signature:{arguments:[{type:{name:"T"},name:"_value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: T; label: ReactNode }",signature:{properties:[{key:"value",value:{name:"T",required:!0}},{key:"label",value:{name:"ReactNode",required:!0}}]}}],raw:"{ value: T; label: ReactNode }[]"},description:""},sxProps:{required:!1,tsType:{name:"SxProps"},description:"",defaultValue:{value:"{}",computed:!1}}}};const Q={title:"Input/Select",component:s,parameters:{docs:{description:{component:"A customizable select component using MUI TextField and MenuItem."}}},argTypes:{value:{control:"text",description:"The selected value of the select input."},handleValueChange:{action:"value changed",description:"Function called when the selected value changes."},options:{control:"object",description:"An array of options to be displayed in the select input."}}},r={render:n=>{const[a,o]=g.useState((n==null?void 0:n.value)??""),l=e=>{o(e),b("value changed")(e)};return t.jsx(u,{width:300,children:t.jsx(s,{...n,value:a,handleValueChange:l})})},args:{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1"}},i={render:n=>{const[a,o]=g.useState((n==null?void 0:n.value)??""),l=e=>{o(e),b("value changed")(e)};return t.jsx(u,{width:300,children:t.jsx(s,{...n,value:a,handleValueChange:l})})},args:{options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],value:"option1",sxProps:{background:"lime",border:1,borderColor:"blue"}}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string | number>(args?.value ?? '');
    const handleValueChange = (value: string | number) => {
      setSelectedValue(value);
      actionFn('value changed')(value);
    };
    return <Box width={300}>\r
        <Select {...args} value={selectedValue} handleValueChange={handleValueChange} />\r
      </Box>;
  },
  args: {
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }],
    value: 'option1'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,v,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [selectedValue, setSelectedValue] = useState<string | number>(args?.value ?? '');
    const handleValueChange = (value: string | number) => {
      setSelectedValue(value);
      actionFn('value changed')(value);
    };
    return <Box width={300}>\r
        <Select {...args} value={selectedValue} handleValueChange={handleValueChange} />\r
      </Box>;
  },
  args: {
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }],
    value: 'option1',
    sxProps: {
      background: 'lime',
      border: 1,
      borderColor: 'blue'
    }
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};const X=["Default","Custom"];export{i as Custom,r as Default,X as __namedExportsOrder,Q as default};
