import { ButtonProps } from '@mui/material';
import { ReactNode } from '../../../node_modules/react';
import { SxProps } from '@mui/material/styles';

interface HoverButtonProps extends ButtonProps {
    defaultContent: ReactNode;
    defaultSx?: SxProps;
    hoveredContent: ReactNode;
    hoveredBgColor: string;
    parentHovered?: boolean;
}
export declare function HoverButton({ defaultContent, defaultSx, hoveredContent, hoveredBgColor, parentHovered, ...rest }: HoverButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
