import{j as r}from"./defaultTheme-CsXV0Sr8.js";import{a as f,u as C,F as k}from"./index.esm-BbT1cBw0.js";import"./FormField-B2e8aFGg.js";import"./FormSelect-BnYzRyPu.js";import"./FormSectionLabel-BlNu66rK.js";import{B as s}from"./Box-DP5ickGI.js";import{F as j,C as y}from"./FormControlLabel-Bod7tNiU.js";import"./FormDatePick-bo1scWPY.js";import"./SubmitButtonFooter-QpSdsXgS.js";import"./index-CTjT7uj6.js";import"./extends-CF3RwP-h.js";import"./TextField-DG4d8yEJ.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./InputBase-DdiKLNG9.js";import"./useFormControl-B9FSkLKA.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./createSvgIcon-ShKUGmxd.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-lPRD4BR6.js";import"./useTheme-C4EEJ3Wb.js";import"./index-C-RamHs9.js";import"./Modal-Cl-5GAuR.js";import"./useTheme-Yl1OmhDb.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CYM-y3Gt.js";import"./Paper-DXlsPgaF.js";import"./useControlled-5JjQu8rW.js";import"./MenuItem-C9sJaH6P.js";import"./ButtonBase-BvvLlLjR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./Typography-BTCUE2LK.js";import"./SwitchBase-DUKY472Z.js";import"./Stack-BbfZ5qrn.js";import"./useThemeProps-D8z9BOAe.js";import"./getThemeProps-ClK_6XBd.js";import"./dayjs.min-6hL3tk7d.js";import"./InputAdornment-NcN309yI.js";import"./useMediaQuery-DJfISDKz.js";import"./index-BzjuzjN8.js";import"./IconButton-DI03T9q8.js";import"./Button-DDZbZLjO.js";const u=({for_name:t,with_label:m,control:i,has_error:a,error_message:b,..._})=>{const{field:g}=f({name:t,control:i});return r.jsxs(s,{marginBottom:0,textAlign:"left",..._,sx:{width:"300px",mx:"auto"},"data-testid":`${t}_textbox`,children:[r.jsx(j,{control:r.jsx(y,{...g,color:"primary",sx:{px:2,py:2}}),label:m,sx:{...a&&{color:"error.main"}}}),a&&r.jsx(s,{color:"error.main",children:b})]})},h=u;u.__docgenInfo={description:"",methods:[],displayName:"CheckboxField",props:{for_name:{required:!0,tsType:{name:"K"},description:""},with_label:{required:!0,tsType:{name:"string"},description:""},control:{required:!0,tsType:{name:"Control",elements:[{name:"FieldValues[K]",raw:"FieldValues[K]"}],raw:"Control<FieldValues[K]>"},description:""},has_error:{required:!0,tsType:{name:"boolean"},description:""},error_message:{required:!0,tsType:{name:"string"},description:""}},composes:["BoxProps"]};const Fr={title:"Form/CheckboxField",component:h,argTypes:{has_error:{control:"boolean"},error_message:{control:"text"},with_label:{control:"text"}}},F=t=>{const m=C(),{control:i}=m;return r.jsx(k,{...m,children:r.jsx(s,{sx:{maxWidth:"400px",mx:"auto",mt:4},children:r.jsx(h,{for_name:"example",control:i,...t})})})},o=F.bind({});o.args={with_label:"Example Checkbox",has_error:!1,error_message:"This field is required"};const e=F.bind({});e.args={with_label:"Example Checkbox",has_error:!0,error_message:"This field is required"};var p,n,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const methods = useForm();
  const {
    control
  } = methods;
  return <FormProvider {...methods}>\r
      <Box sx={{
      maxWidth: '400px',
      mx: 'auto',
      mt: 4
    }}>\r
        <FormCheckboxField for_name="example" control={control} {...args} />\r
      </Box>\r
    </FormProvider>;
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,d,x;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const methods = useForm();
  const {
    control
  } = methods;
  return <FormProvider {...methods}>\r
      <Box sx={{
      maxWidth: '400px',
      mx: 'auto',
      mt: 4
    }}>\r
        <FormCheckboxField for_name="example" control={control} {...args} />\r
      </Box>\r
    </FormProvider>;
}`,...(x=(d=e.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const br=["Default","WithError"];export{o as Default,e as WithError,br as __namedExportsOrder,Fr as default};
