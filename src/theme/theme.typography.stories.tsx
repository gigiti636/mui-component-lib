import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Theme Preview/Typography',
};

const TypographyShowcase = () => {
  const theme = useTheme(); // Access the MUI theme
  const typographyVariants = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'button',
    'caption',
    'overline',
  ]; // List of variants you are interested in
  const colorOptions = [
    { label: 'Primary Text', color: 'text.primary' },
    { label: 'Secondary Text', color: 'text.secondary' },
    { label: 'Disabled Text', color: 'text.disabled' },
    { label: 'Light Main', color: 'primary.light' },
    { label: 'Dark Main', color: 'primary.main' },
    { label: 'Primary Main', color: 'primary.dark' },
    { label: 'Secondary Light', color: 'secondary.light' },
    { label: 'Secondary Main', color: 'secondary.main' },
    { label: 'Secondary Dark', color: 'secondary.dark' },
    { label: 'Success Light', color: 'success.light' },
    { label: 'Success Main', color: 'success.main' },
    { label: 'Success Dark', color: 'success.dark' },
    { label: 'Error Light', color: 'error.light' },
    { label: 'Error Main', color: 'error.main' },
    { label: 'Error Dark', color: 'error.dark' },
    { label: 'Warning Light', color: 'warning.light' },
    { label: 'Warning Main', color: 'warning.main' },
    { label: 'Warning Dark', color: 'warning.dark' },
    { label: 'Light Light', color: 'info.light' },
    { label: 'Info Main', color: 'info.main' },
    { label: 'Info Dark', color: 'info.dark' },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Typography Variants
      </Typography>

      {typographyVariants.map((variant) => (
        <Box key={variant} sx={{ marginBottom: 6 }}>
          <Typography variant="h6" gutterBottom>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
          </Typography>

          {colorOptions.map((colorOption) => (
            <Box key={colorOption.label} sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle2" gutterBottom>
                {colorOption.label}
              </Typography>
              <Typography
                // @ts-ignore
                variant={variant as keyof typeof theme.typography}
                sx={{ color: colorOption.color }}
                gutterBottom
              >
                {`This is "${variant}" in ${colorOption.label} with ${
                  // @ts-ignore
                  theme.typography[variant as keyof typeof theme.typography].fontSize || 'default'
                } font size `}
              </Typography>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export const TypographyDemo = TypographyShowcase.bind({});
