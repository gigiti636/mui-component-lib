import { Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormCheckboxField } from './index.ts';
import { Box } from '@mui/material';

export default {
  title: 'Form/CheckboxField',
  component: FormCheckboxField,
  argTypes: {
    has_error: { control: 'boolean' },
    error_message: { control: 'text' },
    with_label: { control: 'text' },
  },
} as Meta;

// @ts-ignore
const Template = (args) => {
  const methods = useForm();
  const { control } = methods;

  return (
    <FormProvider {...methods}>
      <Box sx={{ maxWidth: '400px', mx: 'auto', mt: 4 }}>
        <FormCheckboxField for_name="example" control={control} {...args} />
      </Box>
    </FormProvider>
  );
};

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  with_label: 'Example Checkbox',
  has_error: false,
  error_message: 'This field is required',
};

export const WithError = Template.bind({});
// @ts-ignore
WithError.args = {
  with_label: 'Example Checkbox',
  has_error: true,
  error_message: 'This field is required',
};
