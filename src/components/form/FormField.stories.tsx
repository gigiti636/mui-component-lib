import { Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import FormField from './FormField';
import { Box } from '@mui/material';

export default {
  title: 'Form/FormField',
  component: FormField,
  argTypes: {
    has_error: { control: 'boolean' },
    error_message: { control: 'text' },
    v: { control: 'text' },
    with_label: { control: 'text' },
    with_helper_text: { control: 'text' },
    readonly: { control: 'boolean' },
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard'],
      },
    },
    multiline: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} as Meta;

// @ts-ignore
const Template = (args) => {
  const methods = useForm();
  const { control } = methods;

  return (
    <FormProvider {...methods}>
      <Box sx={{ maxWidth: '400px', mx: 'auto', mt: 4 }}>
        <FormField for_name="example" control={control} {...args} />
      </Box>
    </FormProvider>
  );
};

export const Outlined = Template.bind({});
// @ts-ignore
Outlined.args = {
  with_label: 'Outlined TextField',
  with_helper_text: 'Helper text here',
  has_error: false,
  error_message: 'This field is required',
  readonly: false,
  variant: 'outlined',
  placeholder: 'Enter text here...',
};

export const Filled = Template.bind({});
// @ts-ignore
Filled.args = {
  with_label: 'Filled TextField',
  with_helper_text: 'Helper text here',
  has_error: false,
  error_message: 'This field is required',
  readonly: false,
  variant: 'filled',
  placeholder: 'Enter text here...',
};

export const Standard = Template.bind({});
// @ts-ignore
Standard.args = {
  with_label: 'Standard TextField',
  with_helper_text: 'Helper text here',
  has_error: false,
  error_message: 'This field is required',
  readonly: false,
  variant: 'standard',
  placeholder: 'Enter text here...',
};

export const WithError = Template.bind({});
// @ts-ignore
WithError.args = {
  with_label: 'Field with Error',
  has_error: true,
  error_message: 'This field is required',
  readonly: false,
  variant: 'outlined',
  placeholder: 'Enter text here...',
};
