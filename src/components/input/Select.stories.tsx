import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';
import { action as actionFn } from '@storybook/addon-actions';
import { Box } from '@mui/material';

const meta: Meta<typeof Select> = {
  title: 'Input/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'A customizable select component using MUI TextField and MenuItem.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'The selected value of the select input.',
    },
    handleValueChange: {
      action: 'value changed',
      description: 'Function called when the selected value changes.',
    },
    options: {
      control: 'object',
      description: 'An array of options to be displayed in the select input.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number>(args?.value ?? '');

    const handleValueChange = (value: string | number) => {
      setSelectedValue(value);
      actionFn('value changed')(value);
    };

    return (
      <Box width={300}>
        <Select {...args} value={selectedValue} handleValueChange={handleValueChange} />
      </Box>
    );
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    value: 'option1',
  },
};

export const Custom: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<string | number>(args?.value ?? '');

    const handleValueChange = (value: string | number) => {
      setSelectedValue(value);
      actionFn('value changed')(value);
    };

    return (
      <Box width={300}>
        <Select {...args} value={selectedValue} handleValueChange={handleValueChange} />
      </Box>
    );
  },
  args: {
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    value: 'option1',
    sxProps: {
      background: 'lime',
      border: 1,
      borderColor: 'blue',
    },
  },
};
