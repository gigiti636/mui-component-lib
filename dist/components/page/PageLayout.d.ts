import { BoxProps } from '../../../node_modules/@mui/material/Box';
import { SxProps } from '../../../node_modules/@mui/material';
import { ReactNode } from 'react';

interface MainProps extends BoxProps {
    children: ReactNode;
    sx?: SxProps;
}
export default function PageLayout({ children, sx, ...other }: MainProps): import("react/jsx-runtime").JSX.Element;
export {};
