import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ReactNode, useState } from 'react';
import type { SxProps } from '@mui/material/styles';

interface HoverButtonProps extends ButtonProps {
  defaultContent: ReactNode;
  defaultSx?: SxProps;
  hoveredContent: ReactNode;
  hoveredBgColor: string;
  parentHovered?: boolean;
}
export function HoverButton({
  defaultContent,
  defaultSx,
  hoveredContent,
  hoveredBgColor,
  parentHovered = false,
  ...rest
}: HoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      sx={{
        minWidth: 176,
        position: 'relative',
        top: '16px',
        px: 0,
        py: 0,
        borderRadius: '15px',
        transition: 'all 0.3s',
        boxShadow: 'none',
        lineHeight: 'unset',
        minHeight: '35px',
        fontSize: (theme) => theme.typography.fontSize * (parentHovered ? 1.25 : 1),
        backgroundColor: parentHovered ? hoveredBgColor : grey[300],
        color: parentHovered ? (theme) => theme.palette.primary.contrastText : grey[900],
        ...defaultSx,
        '&:hover': {
          boxShadow: 1,
          backgroundColor: hoveredBgColor,
          color: (theme) => theme.palette.primary.contrastText,
        },
      }}
      {...rest}
    >
      {isHovered || parentHovered ? hoveredContent : defaultContent}
    </Button>
  );
}
