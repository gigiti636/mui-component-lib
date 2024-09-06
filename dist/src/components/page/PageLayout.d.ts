import { BoxProps } from '@mui/material/Box';
import { SxProps } from '@mui/material';
import { HTMLAttributes } from 'react';

type NavContentProps = {
    transparent?: boolean;
} & BoxProps & HTMLAttributes<HTMLDivElement> & {
    sx?: SxProps;
};
declare function PageLayout({ children, transparent, ...rest }: NavContentProps): import("react/jsx-runtime").JSX.Element;
export default PageLayout;
