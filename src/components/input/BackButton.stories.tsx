import BackButton from './BackButton.tsx';
import { action as actionFn } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof BackButton> = {
  title: 'Input/BackButton',
  component: BackButton,
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

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {
    onClick: actionFn('back button clicked'),
  },
};

export const Styled: Story = {
  args: {
    onClick: actionFn('back button clicked'),
    sx: {
      backgroundColor: 'lightcoral',
      '&:hover': {
        backgroundColor: 'darkred',
      },
      fontSize: 'x-large',
    },
  },
};
