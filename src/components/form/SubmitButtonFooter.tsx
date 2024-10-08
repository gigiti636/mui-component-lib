import type { SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface SubmitButtonFooter {
  onClick: (_event: SyntheticEvent) => void;
  isValid?: boolean;
  label?: string;
}

function SubmitButton({ onClick, isValid, label = 'Submit' }: SubmitButtonFooter) {
  return (
    <Box marginTop={3} marginBottom={3} textAlign={'right'}>
      <Button
        onClick={onClick}
        variant="contained"
        color={'success'}
        sx={{ minWidth: 150, opacity: isValid ? 1 : 0.6 }}
      >
        {label}
      </Button>
    </Box>
  );
}

export default SubmitButton;
