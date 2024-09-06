import{j as o}from"./defaultTheme-CsXV0Sr8.js";import{T as b}from"./index-CZlrRKMw.js";import{C as x}from"./DateRangePicker-DHXL6yZC.js";import{d as h,L as y}from"./dayjs.min-6hL3tk7d.js";import{r as M}from"./index-CTjT7uj6.js";import{B as g}from"./Box-DP5ickGI.js";import{B as i}from"./Button-DDZbZLjO.js";import{a as L}from"./chunk-454WOBUV-CM0pFb8Z.js";import{A as j}from"./en-7bTsBNrb.js";import"./extends-CF3RwP-h.js";import"./Close-D-2U7SAI.js";import"./createSvgIcon-ByPedIi_.js";import"./createSvgIcon-ShKUGmxd.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./useControlled-5JjQu8rW.js";import"./useIsFocusVisible-tBGK3nBo.js";import"./Stack-BbfZ5qrn.js";import"./useThemeProps-D8z9BOAe.js";import"./getThemeProps-ClK_6XBd.js";import"./useTheme-C4EEJ3Wb.js";import"./Modal-Cl-5GAuR.js";import"./useTheme-Yl1OmhDb.js";import"./inheritsLoose-DR8r8Ogv.js";import"./index-CYM-y3Gt.js";import"./isHostComponent-DVu5iVWx.js";import"./IconButton-DI03T9q8.js";import"./ButtonBase-BvvLlLjR.js";import"./assertThisInitialized-B9jnkVVz.js";import"./InputAdornment-NcN309yI.js";import"./useFormControl-B9FSkLKA.js";import"./Typography-BTCUE2LK.js";import"./useMediaQuery-DJfISDKz.js";import"./index-BzjuzjN8.js";import"./index-C-RamHs9.js";import"./TextField-DG4d8yEJ.js";import"./InputBase-DdiKLNG9.js";import"./GlobalStyles-lPRD4BR6.js";import"./Paper-DXlsPgaF.js";import"./v4-CQkTLCs1.js";const D=({open:c,handleClose:a,handleDateSelection:m,labels:n={selectButton:"Select",custom:"Custom",lastMonth:"Last Month",last3Months:"Last 3 Months",last6Months:"Last 6 Months"}})=>{const[t,d]=M.useState({startDate:"",endDate:""}),p=e=>{const r=h(),u=r.subtract(e,"month").format("YYYY-MM-DD");d({startDate:u,endDate:r.format("YYYY-MM-DD")})},s=M.useMemo(()=>{if(t.startDate&&t.endDate){const e=h(),r=e.subtract(1,"month").format("YYYY-MM-DD"),u=e.subtract(3,"month").format("YYYY-MM-DD"),k=e.subtract(6,"month").format("YYYY-MM-DD");return t.endDate===e.format("YYYY-MM-DD")&&t.startDate===r?"one_month_block":t.endDate===e.format("YYYY-MM-DD")&&t.startDate===u?"three_month_block":t.endDate===e.format("YYYY-MM-DD")&&t.startDate===k?"six_month_block":"custom_block"}else return"custom_block"},[t.endDate,t.startDate]);return o.jsxs(b,{open:c,maxWidth:"640px",onClose:a,closeModal:a,cancelAction:a,callToActionLabel:n==null?void 0:n.selectButton,callToAction:()=>m(t),"aria-label":"date-selection-modal",children:[o.jsxs(g,{display:"flex",gap:1,flexWrap:"wrap",children:[o.jsx(i,{color:"info",variant:s==="custom_block"?"contained":"outlined",size:"small",onClick:()=>d({startDate:"",endDate:""}),children:n.custom}),o.jsx(i,{color:"info",variant:s==="one_month_block"?"contained":"outlined",size:"small",onClick:()=>p(1),"aria-label":"selection-1-month",children:n.lastMonth}),o.jsx(i,{color:"info",variant:s==="three_month_block"?"contained":"outlined",size:"small",onClick:()=>p(3),"aria-label":"selection-3-month",children:n.last3Months}),o.jsx(i,{color:"info",variant:s==="six_month_block"?"contained":"outlined",size:"small",onClick:()=>p(6),"aria-label":"selection-6-month",children:n.last6Months})]}),o.jsx(g,{my:3,children:o.jsx(x,{dateRange:{startDate:t.startDate,endDate:t.endDate},onDateRangeChange:e=>d(e)})})]})};D.__docgenInfo={description:"",methods:[],displayName:"ModalDateRangePicker",props:{open:{required:!0,tsType:{name:"boolean"},description:""},handleClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},handleDateSelection:{required:!0,tsType:{name:"signature",type:"function",raw:"(_date_range: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"_date_range"}],return:{name:"void"}}},description:""},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  selectButton: string;
  custom: string;
  lastMonth: string;
  last3Months: string;
  last6Months: string;
}`,signature:{properties:[{key:"selectButton",value:{name:"string",required:!0}},{key:"custom",value:{name:"string",required:!0}},{key:"lastMonth",value:{name:"string",required:!0}},{key:"last3Months",value:{name:"string",required:!0}},{key:"last6Months",value:{name:"string",required:!0}}]}},description:"",defaultValue:{value:`{
  selectButton: 'Select',
  custom: 'Custom',
  lastMonth: 'Last Month',
  last3Months: 'Last 3 Months',
  last6Months: 'Last 6 Months',
}`,computed:!1}}}};const gt={title:"Input/ModalDateRangePicker",component:D,parameters:{docs:{description:{component:"A modal component for selecting a date range with predefined options and custom date range selection."}}},argTypes:{open:{control:"boolean",description:"Controls whether the modal is open or closed."},handleClose:{action:"closed",description:"Function called when the modal is closed."},handleDateSelection:{action:"date selected",description:"Function called with the selected date range when the user selects a date range."},labels:{control:"object",description:"Labels for various buttons in the modal."}}},v=()=>L("Date range selected"),l={render:c=>{const[a,m]=M.useState(!0),n=()=>m(!1),t=()=>{v()};return o.jsx(y,{dateAdapter:j,adapterLocale:h.locale("en"),children:o.jsx(D,{open:a,handleClose:n,handleDateSelection:t,...c})})},args:{labels:{selectButton:"Select",custom:"Custom",lastMonth:"Last Month",last3Months:"Last 3 Months",last6Months:"Last 6 Months"}}};var f,Y,_;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    const handleDateSelection = () => {
      mockFn();
    };
    return <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale('en')}>\r
        <ModalDateRangePicker
      // @ts-ignore
      open={open}
      // @ts-ignore
      handleClose={handleClose}
      // @ts-ignore
      handleDateSelection={handleDateSelection} {...args} />\r
      </LocalizationProvider>;
  },
  args: {
    labels: {
      selectButton: 'Select',
      custom: 'Custom',
      lastMonth: 'Last Month',
      last3Months: 'Last 3 Months',
      last6Months: 'Last 6 Months'
    }
  }
}`,...(_=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const ft=["Default"];export{l as Default,ft as __namedExportsOrder,gt as default};
