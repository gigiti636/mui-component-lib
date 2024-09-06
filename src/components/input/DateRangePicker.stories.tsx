import { Meta, StoryObj } from '@storybook/react';
import CustomDatePicker from './DateRangePicker.tsx';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
import { action as actionFn } from '@storybook/addon-actions';

const meta: Meta<typeof CustomDatePicker> = {
  title: 'Input/CustomDatePicker',
  component: CustomDatePicker,
  parameters: {
    docs: {
      description: {
        component: 'A customizable date picker component for selecting date ranges.',
      },
    },
  },
  argTypes: {
    onDateRangeChange: {
      action: 'date range changed',
      description: 'Function called when the date range is updated.',
    },
    dateRange: {
      control: 'object',
      description: 'The currently selected date range.',
    },
    label: {
      control: 'object',
      description: 'Labels for the date pickers.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomDatePicker>;

export const Default: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale('en')}>
      <CustomDatePicker {...args} />
    </LocalizationProvider>
  ),
  args: {
    dateRange: {
      startDate: dayjs().subtract(1, 'month').format('YYYY-MM-DD'),
      endDate: dayjs().format('YYYY-MM-DD'),
    },
    onDateRangeChange: actionFn('date range changed'),
    label: { from: 'From Date', to: 'To Date' },
  },
};

export const EmptyRange: Story = {
  render: (args) => (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale('en')}>
      <CustomDatePicker {...args} />
    </LocalizationProvider>
  ),
  args: {
    dateRange: {
      startDate: 'Invalid Date',
      endDate: 'Invalid Date',
    },
    onDateRangeChange: actionFn('date range changed'),
    label: { from: 'Start Date', to: 'End Date' },
  },
};
