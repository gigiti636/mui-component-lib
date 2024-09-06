import{j as r}from"./defaultTheme-CsXV0Sr8.js";import{u as x}from"./useTheme-Yl1OmhDb.js";import{B as n}from"./Box-DP5ickGI.js";import{T as s}from"./Typography-BTCUE2LK.js";import{B as d}from"./Button-DDZbZLjO.js";import"./index-CTjT7uj6.js";import"./extends-CF3RwP-h.js";import"./useTheme-C4EEJ3Wb.js";import"./generateUtilityClasses-CN27YKX3.js";import"./styled-DzvXPvDf.js";import"./DefaultPropsProvider-Df08ATIX.js";import"./ButtonBase-BvvLlLjR.js";import"./TransitionGroupContext-BBeR8EVf.js";import"./useEnhancedEffect-TT6gT8pk.js";import"./assertThisInitialized-B9jnkVVz.js";import"./inheritsLoose-DR8r8Ogv.js";import"./useIsFocusVisible-tBGK3nBo.js";const O={title:"Theme Preview/Buttons"},B=()=>{const i=x(),l=["contained","outlined","text"],u=["small","medium","large"],h=Object.keys(i.palette).filter(t=>{var e;return(e=i.palette[t])==null?void 0:e.main});return r.jsxs(n,{sx:{padding:4},children:[r.jsx(s,{variant:"h4",gutterBottom:!0,children:"Buttons"}),l.map(t=>r.jsxs(n,{sx:{marginBottom:4},children:[r.jsxs(s,{variant:"h6",gutterBottom:!0,children:[t.charAt(0).toUpperCase()+t.slice(1)," Variant"]}),u.map(e=>r.jsxs(n,{sx:{marginBottom:2},children:[r.jsxs(s,{variant:"subtitle1",gutterBottom:!0,children:["Size: ",e.charAt(0).toUpperCase()+e.slice(1)]}),r.jsx(n,{sx:{display:"flex",gap:2,flexWrap:"wrap"},children:h.map(o=>r.jsx(d,{variant:t,size:e,color:o,children:`${t.charAt(0).toUpperCase()+t.slice(1)} - ${e.charAt(0).toUpperCase()+e.slice(1)} - ${o.charAt(0).toUpperCase()+o.slice(1)}`},`${t}-${e}-${o}`))})]},`${t}-${e}`))]},t))]})},a=B.bind({});var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const theme = useTheme(); // Access the MUI theme
  const buttonVariants = ['contained', 'outlined', 'text'];
  const buttonSizes = ['small', 'medium', 'large'];

  // Getting color keys from the theme.palette
  const buttonColors = Object.keys(theme.palette).filter(
  // @ts-ignore
  color => theme.palette[color]?.main);
  return <Box sx={{
    padding: 4
  }}>\r
      <Typography variant="h4" gutterBottom>\r
        Buttons\r
      </Typography>\r
\r
      {buttonVariants.map(variant => <Box key={variant} sx={{
      marginBottom: 4
    }}>\r
          <Typography variant="h6" gutterBottom>\r
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant\r
          </Typography>\r
\r
          {buttonSizes.map(size => <Box key={\`\${variant}-\${size}\`} sx={{
        marginBottom: 2
      }}>\r
              <Typography variant="subtitle1" gutterBottom>\r
                Size: {size.charAt(0).toUpperCase() + size.slice(1)}\r
              </Typography>\r
\r
              <Box sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap'
        }}>\r
                {buttonColors.map(color => <Button key={\`\${variant}-\${size}-\${color}\`} variant={(variant as 'contained' | 'outlined' | 'text')} size={(size as 'small' | 'medium' | 'large')}
          // @ts-ignore
          color={(color as keyof typeof theme.palette)}>\r
                    {\`\${variant.charAt(0).toUpperCase() + variant.slice(1)} - \${size.charAt(0).toUpperCase() + size.slice(1)} - \${color.charAt(0).toUpperCase() + color.slice(1)}\`}\r
                  </Button>)}\r
              </Box>\r
            </Box>)}\r
        </Box>)}\r
    </Box>;
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const D=["ButtonsDemo"];export{a as ButtonsDemo,D as __namedExportsOrder,O as default};
