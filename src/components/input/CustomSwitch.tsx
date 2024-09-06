import { useState } from 'react';
import Switch from '@mui/material/Switch';
import type { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

interface Props extends SwitchProps {
  title?: string;
  checked: boolean;
  name?: string;
  onChange: () => void;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  disabled?: boolean;
}

export function CustomSwitch({
  title,
  checked,
  onChange,
  name,
  color = 'primary',
  disabled = false,
  ...rest
}: Props) {
  const [enabled, setEnabled] = useState(checked);

  function handleChange() {
    setEnabled(!enabled);
    onChange();
  }

  return (
    <Switch
      {...rest}
      title={title}
      checked={enabled}
      onChange={handleChange}
      name={name}
      color={color}
      disabled={disabled}
    />
  );
}

export const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,

  padding: 0,
  transform: 'scale(1.3)',
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.info.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));
