import { Meta, StoryObj } from '@storybook/react';
import { ModalDateRangePicker } from './ModalDateRangePicker';
import { action as actionFn } from '@storybook/addon-actions';
import { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

const meta: Meta<typeof ModalDateRangePicker> = {
  title: 'Input/ModalDateRangePicker',
  component: ModalDateRangePicker,
  parameters: {
    docs: {
      description: {
        component:
          'A modal component for selecting a date range with predefined options and custom date range selection.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Controls whether the modal is open or closed.',
    },
    handleClose: {
      action: 'closed',
      description: 'Function called when the modal is closed.',
    },
    handleDateSelection: {
      action: 'date selected',
      description: 'Function called with the selected date range when the user selects a date range.',
    },
    labels: {
      control: 'object',
      description: 'Labels for various buttons in the modal.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalDateRangePicker>;

const mockFn = () => actionFn('Date range selected');

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);

    const handleClose = () => setOpen(false);
    const handleDateSelection = () => {
      mockFn();
    };

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={dayjs.locale('en')}>
        <ModalDateRangePicker
          // @ts-ignore
          open={open}
          // @ts-ignore
          handleClose={handleClose}
          // @ts-ignore
          handleDateSelection={handleDateSelection}
          {...args}
        />
      </LocalizationProvider>
    );
  },
  args: {
    labels: {
      selectButton: 'Select',
      custom: 'Custom',
      lastMonth: 'Last Month',
      last3Months: 'Last 3 Months',
      last6Months: 'Last 6 Months',
    },
  },
};
