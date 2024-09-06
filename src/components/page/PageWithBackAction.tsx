import type { ReactNode } from 'react';
import { Box } from '@mui/material';
import BackButton from '../input/BackButton';
import type { BoxProps } from '@mui/material/Box';

interface WrapperWithBackBtnProps extends BoxProps {
  children: ReactNode;
  backBtnClicked: () => void;
}

const PageWithBackAction = ({ children, backBtnClicked, ...rest }: WrapperWithBackBtnProps) => {
  return (
    <Box {...rest}>
      <Box textAlign={'left'} pl={{ xs: 2, md: 5 }} mb={1}>
        <BackButton onClick={backBtnClicked} />
      </Box>
      {children}
    </Box>
  );
};

export default PageWithBackAction;
