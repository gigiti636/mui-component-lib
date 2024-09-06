import Drawer from './index';
import { action as actionFn } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    docs: {
      description: {
        component: 'A Drawer component that can be customized with different props.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      defaultValue: true,
      description: 'Controls whether the modal is open or closed.',
      name: 'Drawer visibility',
    },
    width: {
      control: 'number',
      name: 'Drawer width',
    },
    header: {
      control: 'text',
      name: 'Drawer header',
    },
    anchor: {
      control: 'select',
      options: ['left', 'right'],
      default: 'left',
      description: 'Drawer anshor',
    },
    closeDrawer: {
      control: 'object',
      name: 'ACTION - close modal by clicking "x" ',
    },
    onClose: {
      control: 'object',
      name: 'ACTION - click outside drawer box',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Primary: Story = {
  args: {
    open: true,
    header: 'Drawer header',
    width: 300,
    anchor: 'left',
    children: 'This is drawer content',
    closeDrawer: actionFn('close drawer by clicking "x"'),
    onClose: actionFn('click outside drawer box'),
  },
};
