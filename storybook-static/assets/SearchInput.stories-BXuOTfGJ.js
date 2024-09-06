import{i as j,j as o,g as F}from"./defaultTheme-CsXV0Sr8.js";import{r as k}from"./createSvgIcon-ByPedIi_.js";import{r as n}from"./index-CTjT7uj6.js";import{s as R}from"./styled-DzvXPvDf.js";import{I as P}from"./InputBase-DdiKLNG9.js";import{I as M}from"./IconButton-DI03T9q8.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./extends-CF3RwP-h.js";import"./createSvgIcon-ShKUGmxd.js";import"./generateUtilityClasses-CN27YKX3.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./useControlled-5JjQu8rW.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./useFormControl-B9FSkLKA.js";import"./isHostComponent-DVu5iVWx.js";import"./GlobalStyles-lPRD4BR6.js";import"./useTheme-C4EEJ3Wb.js";import"./ButtonBase-BvvLlLjR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./v4-CQkTLCs1.js";var f={},z=j;Object.defineProperty(f,"__esModule",{value:!0});var T=f.default=void 0,B=z(k()),L=o;T=f.default=(0,B.default)((0,L.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search");var g={},O=j;Object.defineProperty(g,"__esModule",{value:!0});var Q=g.default=void 0,K=O(k()),A=o;Q=g.default=(0,K.default)((0,A.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");const N=R("div")(({theme:r,flavor:e="contained"})=>({position:"relative",borderRadius:e==="contained"?"28px":"11px",marginLeft:0,marginRight:0,maxWidth:"450px",margin:"0 auto",display:"flex",alignItems:"center",background:e==="contained"?r.palette.secondary.main:"transparent",color:F[800],border:e==="contained"?`1px solid ${r.palette.mode==="dark"?"background.paper":r.palette.text.disabled} `:`1px solid ${r.palette.primary.main}`})),W=R(P)(({theme:r})=>({color:"inherit",width:"100%","& .MuiInputBase-input":{padding:r.spacing(1,1,1,1),width:"100%"}}));function p({title:r="Search",onChange:e,onClear:a,presetValue:i,sx:l,manualSearch:t=!0,clearQuery:y,flavor:V="contained"}){const[s,h]=n.useState(i??""),[,v]=n.useTransition(),w=n.useCallback(m=>{const{value:S}=m.target;v(()=>{h(S),t||e(S)})},[e,t]),D=n.useDeferredValue(s),E=n.useCallback(()=>{v(()=>{h(""),a?a():e("")})},[a,e]),$=m=>{m.key==="Enter"&&e(s)};return n.useEffect(()=>{y&&h("")},y),n.useEffect(()=>{s.length%3===0&&e(s)},[s]),o.jsxs(N,{sx:l,title:r,flavor:V,"aria-label":"search-input",children:[o.jsx(W,{onChange:w,placeholder:r,inputProps:{"aria-label":"search"},value:D,onKeyPress:$}),s.length>0&&o.jsx(M,{onClick:E,color:"inherit",children:o.jsx(Q,{sx:{cursor:"pointer",color:"inherit"},fontSize:"small"})}),t&&o.jsx(T,{onClick:()=>e(s),style:{paddingRight:4,marginRight:5,opacity:s.length>0?1:.6,cursor:"pointer"}})]})}p.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(_value: string) => void",signature:{arguments:[{type:{name:"string"},name:"_value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},presetValue:{required:!1,tsType:{name:"string"},description:""},sx:{required:!1,tsType:{name:"SxProps"},description:""},manualSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearQuery:{required:!1,tsType:{name:"DependencyList"},description:""},flavor:{required:!1,tsType:{name:"union",raw:"'contained' | 'outlined'",elements:[{name:"literal",value:"'contained'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'contained'",computed:!1}}}};const ge={title:"Input/SearchInput",component:p,parameters:{docs:{description:{component:"A customizable search input component with options for manual search, clear button, and various styles."}}},argTypes:{title:{control:"text",description:"Placeholder text for the search input."},onChange:{action:"search value changed",description:"Function called when the input value changes."},onClear:{action:"search cleared",description:"Function called when the clear button is clicked."},presetValue:{control:"text",description:"Initial value of the search input."},sx:{control:"object",description:"Custom styles for the search input."},manualSearch:{control:"boolean",description:"Controls whether the search is triggered manually (by clicking the search icon)."},flavor:{control:"select",options:["contained","outlined"],description:"Style variant of the search input."}}},c={render:r=>{const[e,a]=n.useState(""),i=t=>{a(t),d("search value changed")(t)},l=()=>{a(""),d("search cleared")()};return o.jsx(p,{...r,onChange:i,onClear:l,presetValue:e})},args:{title:"Search",flavor:"contained",manualSearch:!1}},u={render:r=>{const[e,a]=n.useState(""),i=t=>{a(t),d("search value changed")(t)},l=()=>{a(""),d("search cleared")()};return o.jsx(p,{...r,onChange:i,onClear:l,presetValue:e})},args:{title:"Custom Style",flavor:"outlined",manualSearch:!0,sx:{border:"2px solid #ff5722",borderRadius:"20px",backgroundColor:"#fafafa"}}};var x,C,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState<string>('');
    const handleSearchChange = (value: string) => {
      setQuery(value);
      actionFn('search value changed')(value);
    };
    const handleClear = () => {
      setQuery('');
      actionFn('search cleared')();
    };
    return <SearchInput {...args} onChange={handleSearchChange} onClear={handleClear} presetValue={query} />;
  },
  args: {
    title: 'Search',
    flavor: 'contained',
    manualSearch: false
  }
}`,...(b=(C=c.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var q,I,_;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => {
    const [query, setQuery] = useState<string>('');
    const handleSearchChange = (value: string) => {
      setQuery(value);
      actionFn('search value changed')(value);
    };
    const handleClear = () => {
      setQuery('');
      actionFn('search cleared')();
    };
    return <SearchInput {...args} onChange={handleSearchChange} onClear={handleClear} presetValue={query} />;
  },
  args: {
    title: 'Custom Style',
    flavor: 'outlined',
    manualSearch: true,
    sx: {
      border: '2px solid #ff5722',
      borderRadius: '20px',
      backgroundColor: '#fafafa'
    }
  }
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const ye=["Default","CustomStyle"];export{u as CustomStyle,c as Default,ye as __namedExportsOrder,ge as default};
