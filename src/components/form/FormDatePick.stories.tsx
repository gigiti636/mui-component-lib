import { Meta } from '@storybook/react';
import { useForm, FormProvider } from 'react-hook-form';
import FormField from './FormDatePick.tsx';
import { Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export default {
  title: 'Form/FormDatePicker',
  component: FormField,
  argTypes: {
    has_error: { control: 'boolean' },
    error_message: { control: 'text' },
    with_label: { control: 'text' },
    with_helper_text: { control: 'text' },
    readonly: { control: 'boolean' },
    noFuture: { control: 'boolean' },
  },
} as Meta;

// @ts-ignore
const Template = (args) => {
  const methods = useForm({
    defaultValues: {
      date: null,
    },
  });
  const { control } = methods;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale('en')}>
      <FormProvider {...methods}>
        <Box sx={{ maxWidth: '400px', mx: 'auto', mt: 4 }}>
          <FormField for_name="date" control={control} {...args} />
        </Box>
      </FormProvider>
    </LocalizationProvider>
  );
};

export const Outlined = Template.bind({});
// @ts-ignore
Outlined.args = {
  with_label: 'Select a Date',
  with_helper_text: 'Pick a date',
  has_error: false,
  error_message: 'This field is required',
  readonly: false,
  noFuture: false,
  datePickerProps: {},
};

export const Standard = Template.bind({});
// @ts-ignore
Standard.args = {
  with_label: 'Select a Date',
  with_helper_text: 'Pick a date',
  has_error: false,
  error_message: 'Invalid date selected',
  readonly: false,
  noFuture: false,
  datePickerProps: {},
  variant: 'standard',
};

export const Filled = Template.bind({});
// @ts-ignore
Filled.args = {
  with_label: 'Select a Date',
  has_error: false,
  error_message: 'Invalid date selected',
  with_helper_text: 'Some helper text',
  readonly: false,
  noFuture: false,
  datePickerProps: {},
  variant: 'filled',
};

export const WithError = Template.bind({});
// @ts-ignore
WithError.args = {
  with_label: 'Select a Date',
  has_error: true,
  error_message: 'Invalid date selected',
  with_helper_text: '',
  readonly: false,
  noFuture: false,
  datePickerProps: {},
  variant: 'filled',
};
