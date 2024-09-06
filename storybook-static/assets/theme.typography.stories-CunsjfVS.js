import{j as r}from"./defaultTheme-CsXV0Sr8.js";import{u as y}from"./useTheme-Yl1OmhDb.js";import{B as l}from"./Box-DP5ickGI.js";import{T as e}from"./Typography-BTCUE2LK.js";import"./index-CTjT7uj6.js";import"./extends-CF3RwP-h.js";import"./useTheme-C4EEJ3Wb.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./DefaultPropsProvider-Df08ATIX.js";const M={title:"Theme Preview/Typography"},g=()=>{const c=y(),h=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","button","caption","overline"],p=[{label:"Primary Text",color:"text.primary"},{label:"Secondary Text",color:"text.secondary"},{label:"Disabled Text",color:"text.disabled"},{label:"Light Main",color:"primary.light"},{label:"Dark Main",color:"primary.main"},{label:"Primary Main",color:"primary.dark"},{label:"Secondary Light",color:"secondary.light"},{label:"Secondary Main",color:"secondary.main"},{label:"Secondary Dark",color:"secondary.dark"},{label:"Success Light",color:"success.light"},{label:"Success Main",color:"success.main"},{label:"Success Dark",color:"success.dark"},{label:"Error Light",color:"error.light"},{label:"Error Main",color:"error.main"},{label:"Error Dark",color:"error.dark"},{label:"Warning Light",color:"warning.light"},{label:"Warning Main",color:"warning.main"},{label:"Warning Dark",color:"warning.dark"},{label:"Light Light",color:"info.light"},{label:"Info Main",color:"info.main"},{label:"Info Dark",color:"info.dark"}];return r.jsxs(l,{sx:{padding:4},children:[r.jsx(e,{variant:"h4",gutterBottom:!0,children:"Typography Variants"}),h.map(o=>r.jsxs(l,{sx:{marginBottom:6},children:[r.jsxs(e,{variant:"h6",gutterBottom:!0,children:[o.charAt(0).toUpperCase()+o.slice(1)," Variant"]}),p.map(a=>r.jsxs(l,{sx:{marginBottom:2},children:[r.jsx(e,{variant:"subtitle2",gutterBottom:!0,children:a.label}),r.jsx(e,{variant:o,sx:{color:a.color},gutterBottom:!0,children:`This is "${o}" in ${a.label} with ${c.typography[o].fontSize||"default"} font size `})]},a.label))]},o))]})},t=g.bind({});var i,n,s;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const theme = useTheme(); // Access the MUI theme
  const typographyVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'button', 'caption', 'overline']; // List of variants you are interested in
  const colorOptions = [{
    label: 'Primary Text',
    color: 'text.primary'
  }, {
    label: 'Secondary Text',
    color: 'text.secondary'
  }, {
    label: 'Disabled Text',
    color: 'text.disabled'
  }, {
    label: 'Light Main',
    color: 'primary.light'
  }, {
    label: 'Dark Main',
    color: 'primary.main'
  }, {
    label: 'Primary Main',
    color: 'primary.dark'
  }, {
    label: 'Secondary Light',
    color: 'secondary.light'
  }, {
    label: 'Secondary Main',
    color: 'secondary.main'
  }, {
    label: 'Secondary Dark',
    color: 'secondary.dark'
  }, {
    label: 'Success Light',
    color: 'success.light'
  }, {
    label: 'Success Main',
    color: 'success.main'
  }, {
    label: 'Success Dark',
    color: 'success.dark'
  }, {
    label: 'Error Light',
    color: 'error.light'
  }, {
    label: 'Error Main',
    color: 'error.main'
  }, {
    label: 'Error Dark',
    color: 'error.dark'
  }, {
    label: 'Warning Light',
    color: 'warning.light'
  }, {
    label: 'Warning Main',
    color: 'warning.main'
  }, {
    label: 'Warning Dark',
    color: 'warning.dark'
  }, {
    label: 'Light Light',
    color: 'info.light'
  }, {
    label: 'Info Main',
    color: 'info.main'
  }, {
    label: 'Info Dark',
    color: 'info.dark'
  }];
  return <Box sx={{
    padding: 4
  }}>\r
      <Typography variant="h4" gutterBottom>\r
        Typography Variants\r
      </Typography>\r
\r
      {typographyVariants.map(variant => <Box key={variant} sx={{
      marginBottom: 6
    }}>\r
          <Typography variant="h6" gutterBottom>\r
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant\r
          </Typography>\r
\r
          {colorOptions.map(colorOption => <Box key={colorOption.label} sx={{
        marginBottom: 2
      }}>\r
              <Typography variant="subtitle2" gutterBottom>\r
                {colorOption.label}\r
              </Typography>\r
              <Typography
        // @ts-ignore
        variant={(variant as keyof typeof theme.typography)} sx={{
          color: colorOption.color
        }} gutterBottom>\r
                {\`This is "\${variant}" in \${colorOption.label} with \${
          // @ts-ignore
          theme.typography[(variant as keyof typeof theme.typography)].fontSize || 'default'} font size \`}\r
              </Typography>\r
            </Box>)}\r
        </Box>)}\r
    </Box>;
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const D=["TypographyDemo"];export{t as TypographyDemo,D as __namedExportsOrder,M as default};
