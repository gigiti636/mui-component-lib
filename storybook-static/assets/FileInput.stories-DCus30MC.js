import{i as B,j as e}from"./defaultTheme-CsXV0Sr8.js";import{r as m}from"./index-CTjT7uj6.js";import{r as L}from"./createSvgIcon-ByPedIi_.js";import{B as h}from"./Box-DP5ickGI.js";import{T as i}from"./Typography-BTCUE2LK.js";import{B as R}from"./Button-DDZbZLjO.js";import{a as f}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-ShKUGmxd.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./useControlled-5JjQu8rW.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./useTheme-C4EEJ3Wb.js";import"./ButtonBase-BvvLlLjR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./v4-CQkTLCs1.js";const V=l=>new Promise((s,u)=>{const n=new FileReader;n.onload=a=>{if(a.target){const r=a.target.result;s(r)}},n.onerror=a=>{var r,t;u(new Error(((t=(r=a==null?void 0:a.target)==null?void 0:r.error)==null?void 0:t.message)??"Error reading file"))},n.readAsDataURL(l)});var x={},A=B;Object.defineProperty(x,"__esModule",{value:!0});var W=x.default=void 0,H=A(L()),O=e;W=x.default=(0,H.default)((0,O.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile");const D=({accept:l,maxMbSize:s,onFileSelected:u,maxWidth:n="unset",label:a={upload_button:"Upload",upload_prompt:"Upload a file",max_size:"Max size",file_type:"File type"},errorMsg:r=""})=>{const[t,I]=m.useState(null),[g,T]=m.useState(r),E=async o=>{if(o.preventDefault(),o.target.files&&o.target.files.length>0){const y=o.target.files[0];y.size<b?I(y):T(`Max file size is ${b/_}`)}},b=1024*1024*s,k=async()=>{if(t){const o=await V(t);u(t,o)}},_=1048576,C=m.useMemo(()=>t?(t.size/_).toFixed(2):0,[t]);return e.jsxs(h,{border:1,borderColor:o=>o.palette.text.disabled,maxWidth:n,minWidth:"170px",minHeight:"185px",position:"relative",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",bgcolor:o=>o.palette.mode==="dark"?"#464646":"#f6f6f6",p:1,children:[t?e.jsx(i,{fontWeight:"bold",color:"text.secondary",variant:"subtitle1",sx:{width:"100%",wordWrap:"break-word"},children:t.name}):e.jsx(i,{variant:"subtitle1",fontWeight:"bold",children:a.upload_prompt}),e.jsx(h,{fontSize:"40px",children:e.jsx(W,{fontSize:"inherit"})}),e.jsx("input",{"aria-label":"upload-file",type:"file",onChange:E,accept:l,value:"",style:{cursor:"pointer",position:"absolute",top:0,bottom:0,right:0,left:0,opacity:0,overflow:"hidden"}}),!t&&e.jsxs(e.Fragment,{children:[e.jsxs(i,{variant:"subtitle2",children:[a.max_size," ",e.jsx("strong",{children:s})," mb"]}),e.jsxs(i,{variant:"subtitle2",children:[a.file_type," ",e.jsxs("strong",{children:[" ",l]})]})]}),g&&e.jsx(i,{color:"error.main",variant:"subtitle1",children:g}),t&&e.jsxs(e.Fragment,{children:[e.jsxs(i,{variant:"subtitle2",children:[" ",C," mb"]}),e.jsx(R,{onClick:k,type:"button",disabled:!t,variant:"outlined",sx:{mt:1},children:a.upload_button})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{accept:{required:!0,tsType:{name:"string"},description:""},maxMbSize:{required:!0,tsType:{name:"number"},description:""},onFileSelected:{required:!0,tsType:{name:"signature",type:"function",raw:"(_file: File, _base64file: string) => void",signature:{arguments:[{type:{name:"File"},name:"_file"},{type:{name:"string"},name:"_base64file"}],return:{name:"void"}}},description:""},maxWidth:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'unset'",computed:!1}},label:{required:!1,tsType:{name:"signature",type:"object",raw:"{ upload_button: string; upload_prompt: string; max_size: string; file_type: string }",signature:{properties:[{key:"upload_button",value:{name:"string",required:!0}},{key:"upload_prompt",value:{name:"string",required:!0}},{key:"max_size",value:{name:"string",required:!0}},{key:"file_type",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:`{
  upload_button: 'Upload',
  upload_prompt: 'Upload a file',
  max_size: 'Max size',
  file_type: 'File type',
}`,computed:!1}},errorMsg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ce={title:"Input/FileInput",component:D,parameters:{docs:{description:{component:"A file input component that supports file uploads with size and type validation, and provides options for customization."}}},argTypes:{onFileSelected:{action:"file selected",description:"Function called when a file is selected and converted to base64."},accept:{control:"text",description:"Comma-separated list of acceptable file types."},maxMbSize:{control:"number",description:"Maximum allowed file size in megabytes."},maxWidth:{control:"text",description:"Maximum width of the file input component."},label:{control:"object",description:"Labels for various parts of the file input component."},errorMsg:{control:"text",description:"Optional Error message"}}},p={args:{accept:".png,.jpg,.jpeg",maxMbSize:5,onFileSelected:f("file selected"),maxWidth:"400px",label:{upload_button:"Upload",upload_prompt:"Upload a file",max_size:"Max size:",file_type:"File type:"}}},d={args:{accept:".pdf,.doc,.docx",maxMbSize:10,onFileSelected:f("file selected"),maxWidth:"500px",label:{upload_button:"Upload Document",upload_prompt:"Drag and drop or click to upload a document",max_size:"Maximum size:",file_type:"Allowed file types:"}}},c={args:{accept:".png,.jpg",maxMbSize:1,onFileSelected:f("file selected"),maxWidth:"400px",label:{upload_button:"Upload Image",upload_prompt:"Upload an image",max_size:"Max size:",file_type:"File type:"},errorMsg:"File could not be uploaded"}};var z,F,v;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    accept: '.png,.jpg,.jpeg',
    maxMbSize: 5,
    onFileSelected: actionFn('file selected'),
    maxWidth: '400px',
    label: {
      upload_button: 'Upload',
      upload_prompt: 'Upload a file',
      max_size: 'Max size:',
      file_type: 'File type:'
    }
  }
}`,...(v=(F=p.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var S,j,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.doc,.docx',
    maxMbSize: 10,
    onFileSelected: actionFn('file selected'),
    maxWidth: '500px',
    label: {
      upload_button: 'Upload Document',
      upload_prompt: 'Drag and drop or click to upload a document',
      max_size: 'Maximum size:',
      file_type: 'Allowed file types:'
    }
  }
}`,...(M=(j=d.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var U,w,q;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    accept: '.png,.jpg',
    maxMbSize: 1,
    onFileSelected: actionFn('file selected'),
    maxWidth: '400px',
    label: {
      upload_button: 'Upload Image',
      upload_prompt: 'Upload an image',
      max_size: 'Max size:',
      file_type: 'File type:'
    },
    errorMsg: 'File could not be uploaded'
  }
}`,...(q=(w=c.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const ue=["Default","CustomLabels","ErrorState"];export{d as CustomLabels,p as Default,c as ErrorState,ue as __namedExportsOrder,ce as default};
