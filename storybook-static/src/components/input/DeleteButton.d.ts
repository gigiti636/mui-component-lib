import { IconButtonProps } from '@mui/material/IconButton';
import { FC } from '../../../node_modules/react';

interface DeleteButtonProps extends IconButtonProps {
    cursor?: string;
}
declare const DeleteButton: FC<DeleteButtonProps>;
export default DeleteButton;
