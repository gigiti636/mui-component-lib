import { Box, MenuItem, TextField } from '@mui/material';
import { ReactNode } from 'react';

interface SelectProps<T> {
  value?: T;
  handleValueChange: (_value: T) => void;
  options: { value: T; label: ReactNode }[];
}

export const Select = <T extends string | number>({ value, handleValueChange, options }: SelectProps<T>) => {
  return (
    <TextField
      select
      value={value}
      fullWidth={true}
      sx={{ '& .MuiSelect-select': { p: 1, fontWeight: 'bold' }, fieldset: { border: 'none' } }}
      onBlur={(e) => e.stopPropagation()}
      onChange={(event) => handleValueChange(event.target.value as T)} // Use the generic type here
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <Box component={'span'} display={'flex'} flexDirection={'column'}>
            <Box component={'span'}>{option.label}</Box>
          </Box>
        </MenuItem>
      ))}
    </TextField>
  );
};
