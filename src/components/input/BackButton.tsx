import { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import type { SxProps } from '@mui/material/styles';

interface BackButtonProps {
  onClick: () => void;
  sx?: SxProps;
}

const BackButton: FC<BackButtonProps> = ({ onClick, sx }) => {
  return (
    <IconButton
      aria-label={'back-button'}
      sx={{
        fontSize: (theme) => ({
          md: theme.typography.fontSize * 2.5,
          lg: theme.typography.fontSize * 3,
        }),
        ...sx,
      }}
      onClick={onClick}
    >
      <ArrowBackIcon fontSize={'inherit'} color={'inherit'} />
    </IconButton>
  );
};

export default BackButton;
