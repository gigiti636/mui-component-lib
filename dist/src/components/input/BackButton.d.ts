import { FC } from 'react';
import { SxProps } from '@mui/material/styles';

interface BackButtonProps {
    onClick: () => void;
    sx?: SxProps;
}
declare const BackButton: FC<BackButtonProps>;
export default BackButton;
