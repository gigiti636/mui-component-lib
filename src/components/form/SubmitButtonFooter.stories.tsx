import { Meta } from '@storybook/react';
import SubmitButton from './SubmitButtonFooter.tsx';
import { Box } from '@mui/material';

export default {
  title: 'Form/SubmitButton',
  component: SubmitButton,
  argTypes: {
    onClick: { action: 'clicked' },
    isValid: { control: 'boolean' },
    label: { control: 'text' },
  },
} as Meta;

// @ts-ignore
const Template = (args) => (
  <Box sx={{ mx: 'auto', mt: 4 }}>
    <SubmitButton {...args} />
  </Box>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  isValid: true,
  label: 'Submit',
};

export const Disabled = Template.bind({});
// @ts-ignore
Disabled.args = {
  isValid: false,
  label: 'Submit',
};
