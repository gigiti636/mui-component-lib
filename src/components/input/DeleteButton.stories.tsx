import DeleteButton from './DeleteButton.tsx';
import { action as actionFn } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DeleteButton> = {
  title: 'Input/DeleteButton',
  component: DeleteButton,
  parameters: {
    docs: {
      description: {
        component: 'A back button component that can be customized with different sx props.',
      },
    },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Function called when the back button is clicked.',
    },
    sx: {
      control: 'object',
      description: 'Styles applied to the button.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DeleteButton>;

export const Default: Story = {
  args: {
    onClick: actionFn('delete button clicked'),
  },
};
