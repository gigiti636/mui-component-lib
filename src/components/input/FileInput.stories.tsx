import { Meta, StoryObj } from '@storybook/react';
import FileInput from './FileInput';
import { action as actionFn } from '@storybook/addon-actions';

const meta: Meta<typeof FileInput> = {
  title: 'Input/FileInput',
  component: FileInput,
  parameters: {
    docs: {
      description: {
        component:
          'A file input component that supports file uploads with size and type validation, and provides options for customization.',
      },
    },
  },
  argTypes: {
    onFileSelected: {
      action: 'file selected',
      description: 'Function called when a file is selected and converted to base64.',
    },
    accept: {
      control: 'text',
      description: 'Comma-separated list of acceptable file types.',
    },
    maxMbSize: {
      control: 'number',
      description: 'Maximum allowed file size in megabytes.',
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width of the file input component.',
    },
    label: {
      control: 'object',
      description: 'Labels for various parts of the file input component.',
    },
    errorMsg: {
      control: 'text',
      description: 'Optional Error message',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Default: Story = {
  args: {
    accept: '.png,.jpg,.jpeg',
    maxMbSize: 5,
    onFileSelected: actionFn('file selected'),
    maxWidth: '400px',
    label: {
      upload_button: 'Upload',
      upload_prompt: 'Upload a file',
      max_size: 'Max size:',
      file_type: 'File type:',
    },
  },
};

export const CustomLabels: Story = {
  args: {
    accept: '.pdf,.doc,.docx',
    maxMbSize: 10,
    onFileSelected: actionFn('file selected'),
    maxWidth: '500px',
    label: {
      upload_button: 'Upload Document',
      upload_prompt: 'Drag and drop or click to upload a document',
      max_size: 'Maximum size:',
      file_type: 'Allowed file types:',
    },
  },
};

export const ErrorState: Story = {
  args: {
    accept: '.png,.jpg',
    maxMbSize: 1,
    onFileSelected: actionFn('file selected'),
    maxWidth: '400px',
    label: {
      upload_button: 'Upload Image',
      upload_prompt: 'Upload an image',
      max_size: 'Max size:',
      file_type: 'File type:',
    },
    errorMsg: 'File could not be uploaded',
  },
};
