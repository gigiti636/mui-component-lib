import { FC, ReactNode } from 'react';
import { SxProps } from '../../../node_modules/@mui/material/styles';
import { BoxProps } from '../../../node_modules/@mui/material/Box';

interface PageTitleProps extends Omit<BoxProps, 'title'> {
    title: ReactNode;
    sx?: SxProps;
}
declare const PageTitle: FC<PageTitleProps>;
export default PageTitle;
