import React, { MouseEventHandler } from 'react';
import { default as MuiDrawer } from '@mui/material/Drawer';
import type { DrawerProps } from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

interface Props extends DrawerProps {
  open: boolean;
  anchor?: 'left' | 'right';
  closeDrawer?: MouseEventHandler;
  onClose: MouseEventHandler;
  children: React.ReactNode;
  header?: React.ReactNode;
  width?: string | number;
}

export function Drawer({
  open,
  anchor = 'right',
  closeDrawer,
  onClose,
  children,
  header,
  width = 300,
}: Props) {
  const styleOuter: SxProps<Theme> = {
    boxShadow: 24,
  };

  const styleInner: SxProps<Theme> = {
    p: 2,
    width: width,
    overflow: 'auto',
    outline: 'none',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
  };

  return (
    <MuiDrawer anchor={anchor} open={open} sx={styleOuter} onClose={onClose}>
      <Box sx={styleInner}>
        <Box display={'flex'} mb={2}>
          <Box flexGrow={1} fontWeight={'bold'} fontSize={'24px'}>
            {header}
          </Box>
          {closeDrawer && (
            <div
              style={{
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <CloseIcon onClick={closeDrawer} />
            </div>
          )}
        </Box>
        {children}
      </Box>
    </MuiDrawer>
  );
}

export default Drawer;
