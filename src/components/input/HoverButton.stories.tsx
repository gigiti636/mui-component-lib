import { Meta, StoryObj } from '@storybook/react';
import { HoverButton } from './HoverButton';
import { action as actionFn } from '@storybook/addon-actions';

const meta: Meta<typeof HoverButton> = {
  title: 'Input/HoverButton',
  component: HoverButton,
  parameters: {
    docs: {
      description: {
        component: 'A button component that changes content and background color on hover.',
      },
    },
  },
  argTypes: {
    defaultContent: {
      control: 'text',
      description: 'Content displayed when the button is not hovered.',
    },
    defaultSx: {
      control: 'object',
      description: 'Styles applied to the button when not hovered.',
    },
    hoveredContent: {
      control: 'text',
      description: 'Content displayed when the button is hovered.',
    },
    hoveredBgColor: {
      control: 'color',
      description: 'Background color of the button when hovered.',
    },
    parentHovered: {
      control: 'boolean',
      description: 'If true, applies hover styles based on parent hover.',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HoverButton>;

export const Default: Story = {
  args: {
    defaultContent: 'Default Content',
    hoveredContent: 'Hovered Content',
    onClick: actionFn('button clicked'),
  },
};

export const CustomStyle: Story = {
  args: {
    defaultContent: 'Default Content',
    hoveredContent: 'Hovered Content',
    hoveredBgColor: '#4caf50',
    defaultSx: {
      minWidth: 200,
      fontSize: 'large',
    },
    onClick: actionFn('button clicked'),
  },
};
