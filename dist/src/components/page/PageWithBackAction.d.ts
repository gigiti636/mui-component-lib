import { ReactNode } from 'react';
import { BoxProps } from '@mui/material/Box';

interface WrapperWithBackBtnProps extends BoxProps {
    children: ReactNode;
    backBtnClicked: () => void;
}
declare const PageWithBackAction: ({ children, backBtnClicked, ...rest }: WrapperWithBackBtnProps) => import("react/jsx-runtime").JSX.Element;
export default PageWithBackAction;
