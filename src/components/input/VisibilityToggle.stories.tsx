import { Meta, StoryObj } from '@storybook/react';
import { VisibilityToggle } from './VisibilityToggle';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof VisibilityToggle> = {
  title: 'Input/VisibilityToggle',
  component: VisibilityToggle,
  parameters: {
    docs: {
      description: {
        component: 'A toggle button to switch between visibility and hidden state using icons.',
      },
    },
  },
  argTypes: {
    visibility: {
      control: 'boolean',
      description: 'The visibility state (true for visible, false for hidden).',
    },
    onClick: {
      action: 'clicked',
      description: 'Triggered when the toggle button is clicked.',
    },
    color: {
      control: 'text',
      description: 'Color of the icon button.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof VisibilityToggle>;

export const Default: Story = {
  render: (args) => <VisibilityToggle {...args} onClick={action('Visibility toggled')} />,
  args: {
    visibility: true,
  },
};
