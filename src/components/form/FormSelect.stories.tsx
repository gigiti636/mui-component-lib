import { Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import FormSelect from './FormSelect';
import { Box } from '@mui/material';

export default {
  title: 'Form/FormSelect',
  component: FormSelect,
  argTypes: {
    has_error: { control: 'boolean' },
    error_message: { control: 'text' },
    with_label: { control: 'text' },
    with_helper_text: { control: 'text' },
    withValueTitle: { control: 'boolean' },
  },
} as Meta;

// @ts-ignore
const Template = (args) => {
  const methods = useForm();
  const { control } = methods;

  return (
    <FormProvider {...methods}>
      <Box sx={{ maxWidth: '400px', mx: 'auto', mt: 4 }}>
        <FormSelect for_name="select_example" control={control} {...args} />
      </Box>
    </FormProvider>
  );
};

export const Outlined = Template.bind({});
// @ts-ignore
Outlined.args = {
  with_label: 'Select an Option',
  with_helper_text: 'Please choose an option',
  has_error: false,
  error_message: 'This field is required',
  withValueTitle: false,
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};

export const Filled = Template.bind({});
// @ts-ignore
Filled.args = {
  with_label: 'Select an Option',
  with_helper_text: 'Please choose an option',
  has_error: false,
  error_message: 'This field is required',
  withValueTitle: false,
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  variant: 'filled',
};

export const Standard = Template.bind({});
// @ts-ignore
Standard.args = {
  with_label: 'Select an Option',
  with_helper_text: 'Please choose an option',
  has_error: false,
  error_message: 'This field is required',
  withValueTitle: false,
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  variant: 'standard',
};

export const WithError = Template.bind({});
// @ts-ignore
WithError.args = {
  with_label: 'Select an Option',
  has_error: true,
  error_message: 'You must select an option',
  with_helper_text: '',
  withValueTitle: false,
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
};
