import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import type { SxProps } from '@mui/material';
import type { HTMLAttributes } from 'react';
import { useIsMobile } from '@/theme/hook';

type NavContentProps = {
  transparent?: boolean;
} & BoxProps &
  HTMLAttributes<HTMLDivElement> & {
    sx?: SxProps;
  };

function PageLayout({ children, transparent = false, ...rest }: NavContentProps) {
  const isMobile = useIsMobile();
  const theme = useTheme();

  return (
    <Box
      component="main"
      boxShadow={transparent ? 0 : 2}
      bgcolor={transparent ? 'transparent' : 'background.paper'}
      minHeight={isMobile ? '100vh' : '200px'}
      borderRadius={isMobile ? '25px 25px 0 0' : theme.shape.borderRadius}
      boxSizing={'content-box'}
      pb={isMobile ? 4 : 0}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default PageLayout;
