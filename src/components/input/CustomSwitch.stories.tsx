import { Meta, StoryObj } from '@storybook/react';
import { CustomSwitch } from './CustomSwitch';
import { action as actionFn } from '@storybook/addon-actions';

const meta: Meta<typeof CustomSwitch> = {
  title: 'Input/CustomSwitch',
  component: CustomSwitch,
  parameters: {
    docs: {
      description: {
        component: 'A customizable switch component with options for different colors and states.',
      },
    },
  },
  argTypes: {
    onChange: {
      action: 'toggled',
      description: 'Function called when the switch is toggled.',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      description: 'Color of the switch.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch.',
    },
    title: {
      control: 'text',
      description: 'Tooltip text for the switch.',
    },
    checked: {
      control: 'boolean',
      description: 'Controls the checked state of the switch.',
    },
    name: {
      control: 'text',
      description: 'Name of the switch.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSwitch>;

export const Default: Story = {
  args: {
    title: 'Default Switch',
    checked: true,
    onChange: actionFn('switch toggled'),
    color: 'primary',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    title: 'Disabled Switch',
    checked: true,
    onChange: actionFn('switch toggled'),
    color: 'success',
    disabled: true,
  },
};
