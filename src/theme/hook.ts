import { useTheme, useMediaQuery } from '@mui/material';

// This is the custom hook
export function useIsMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('md'));
}

export function useIsMobileLayout() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down('xl')) ?? false;
}
