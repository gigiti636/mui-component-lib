import { ReactNode } from 'react';
import { BoxProps } from '../../../node_modules/@mui/material/Box';
import { SxProps } from '../../../node_modules/@mui/material/styles';

interface CustomBoxProps extends BoxProps {
    children: ReactNode;
    bgcolor?: string;
    sx?: SxProps;
}
declare function PageSection({ bgcolor, sx, children, ...otherProps }: CustomBoxProps): import("react/jsx-runtime").JSX.Element;
export default PageSection;
