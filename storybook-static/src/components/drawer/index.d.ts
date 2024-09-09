import { default as React, MouseEventHandler } from '../../../node_modules/react';
import { DrawerProps } from '@mui/material/Drawer';

interface Props extends DrawerProps {
    open: boolean;
    anchor?: 'left' | 'right';
    closeDrawer?: MouseEventHandler;
    onClose: MouseEventHandler;
    children: React.ReactNode;
    header?: React.ReactNode;
    width?: string | number;
}
export declare function Drawer({ open, anchor, closeDrawer, onClose, children, header, width, }: Props): import("react/jsx-runtime").JSX.Element;
export default Drawer;
