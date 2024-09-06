import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import type { IconButtonProps } from '@mui/material/IconButton';

interface VisibilityToggleProps extends IconButtonProps {
  visibility: boolean;
}

export function VisibilityToggle({ visibility, ...rest }: VisibilityToggleProps) {
  return (
    <IconButton {...rest}>
      {visibility ? (
        <VisibilityIcon
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        />
      ) : (
        <VisibilityOffIcon
          sx={{
            color: (theme) => theme.palette.text.secondary,
          }}
        />
      )}
    </IconButton>
  );
}
