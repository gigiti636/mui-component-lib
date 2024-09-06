import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Design System/Buttons',
};

const ButtonShowcase = () => {
  const theme = useTheme(); // Access the MUI theme
  const buttonVariants = ['contained', 'outlined', 'text'];
  const buttonSizes = ['small', 'medium', 'large'];

  // Getting color keys from the theme.palette
  const buttonColors = Object.keys(theme.palette).filter(
    // @ts-ignore
    (color) => theme.palette[color]?.main,
  );

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Buttons
      </Typography>

      {buttonVariants.map((variant) => (
        <Box key={variant} sx={{ marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            {variant.charAt(0).toUpperCase() + variant.slice(1)} Variant
          </Typography>

          {buttonSizes.map((size) => (
            <Box key={`${variant}-${size}`} sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Size: {size.charAt(0).toUpperCase() + size.slice(1)}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {buttonColors.map((color) => (
                  <Button
                    key={`${variant}-${size}-${color}`}
                    variant={variant as 'contained' | 'outlined' | 'text'}
                    size={size as 'small' | 'medium' | 'large'}
                    // @ts-ignore
                    color={color as keyof typeof theme.palette}
                  >
                    {`${variant.charAt(0).toUpperCase() + variant.slice(1)} - ${
                      size.charAt(0).toUpperCase() + size.slice(1)
                    } - ${color.charAt(0).toUpperCase() + color.slice(1)}`}
                  </Button>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export const ButtonsDemo = ButtonShowcase.bind({});
