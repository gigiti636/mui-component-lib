import Modal from './index';
import { action as actionFn } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'A button component that can be customized with different props.',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      defaultValue: true,
      description: 'Controls whether the modal is open or closed.',
      name: 'Modal visibility',
    },
    maxWidth: {
      control: 'number',
      validation: {
        min: 0,
        message: 'Max width must be a positive number.',
      },
      description: 'Max width of the modal content (in pixels)',
    },
    header: {
      control: 'text',
      description: 'The text or custom element to be displayed in the header of the modal.',
    },
    callToActionLabel: {
      control: 'text',
      description: 'Label for the primary action button in the modal.',
    },
    cancelActionLabel: {
      control: 'text',
      description: 'Label for the cancel action button.',
    },
    callToActionIsDelete: {
      control: 'boolean',
      description: 'Indicates if the call-to-action is a delete operation.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the modal interactions.',
    },
    children: {
      control: 'text',
      description: 'Content to be displayed inside the modal.',
    },
    callToActionHidden: {
      control: 'boolean',
      description: 'Controls whether the call-to-action button is hidden.',
    },
    callToAction: {
      control: 'object',
      name: 'ACTION - main action LABEL was clicked',
    },
    cancelAction: {
      control: 'object',
      name: 'ACTION - cancel action LABEL was clicked',
    },
    closeModal: {
      control: 'object',
      name: 'ACTION - close modal by clicking "x" ',
    },
    onClose: {
      control: 'object',
      name: 'ACTION - click outside modal box',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    open: true,
    maxWidth: '900px',
    header: 'Modal header',
    callToActionLabel: 'Action label',
    cancelActionLabel: 'Cancel label',
    callToActionIsDelete: false,
    callToActionHidden: false,
    disabled: false,
    children: 'This is modal content. The modal is always rendered in the center of the page.',
    callToAction: actionFn('main action LABEL was clicked'),
    cancelAction: actionFn('cancel action LABEL was clicked'),
    closeModal: actionFn('close modal by clicking "x"'),
    onClose: actionFn('click outside modal box'),
  },
};

export const Delete: Story = {
  args: {
    open: true,
    maxWidth: '900px',
    header: 'Modal header',
    callToActionLabel: 'Action label',
    cancelActionLabel: 'Cancel label',
    callToActionIsDelete: true,
    callToActionHidden: false,
    disabled: false,
    children: 'This is modal content. The modal is always rendered in the center of the page.',
    callToAction: actionFn('main action LABEL was clicked'),
    cancelAction: actionFn('cancel action LABEL was clicked'),
    closeModal: actionFn('close modal by clicking "x"'),
    onClose: actionFn('click outside modal box'),
  },
};

export const Simple: Story = {
  args: {
    open: true,
    header: 'Modal header',
    children: 'This is modal content. The modal is always rendered in the center of the page.',
    closeModal: actionFn('close modal by clicking "x"'),
    onClose: actionFn('click outside modal box'),
  },
};

/*
You can also customize modal footer
-by passing prop sxFooter and passing sx property on footer actions wrapper
-by not passing cancelCallback/callToAction callbacks the buttons aren't rendered
*/
