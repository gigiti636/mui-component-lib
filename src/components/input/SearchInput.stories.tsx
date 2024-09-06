import { Meta, StoryObj } from '@storybook/react';
import SearchInput from './SearchInput';
import { action as actionFn } from '@storybook/addon-actions';
import { useState } from 'react';

const meta: Meta<typeof SearchInput> = {
  title: 'Input/SearchInput',
  component: SearchInput,
  parameters: {
    docs: {
      description: {
        component:
          'A customizable search input component with options for manual search, clear button, and various styles.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Placeholder text for the search input.',
    },
    onChange: {
      action: 'search value changed',
      description: 'Function called when the input value changes.',
    },
    onClear: {
      action: 'search cleared',
      description: 'Function called when the clear button is clicked.',
    },
    presetValue: {
      control: 'text',
      description: 'Initial value of the search input.',
    },
    sx: {
      control: 'object',
      description: 'Custom styles for the search input.',
    },
    manualSearch: {
      control: 'boolean',
      description: 'Controls whether the search is triggered manually (by clicking the search icon).',
    },
    flavor: {
      control: 'select',
      options: ['contained', 'outlined'],
      description: 'Style variant of the search input.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  render: (args) => {
    const [query, setQuery] = useState<string>('');

    const handleSearchChange = (value: string) => {
      setQuery(value);
      actionFn('search value changed')(value);
    };

    const handleClear = () => {
      setQuery('');
      actionFn('search cleared')();
    };

    return <SearchInput {...args} onChange={handleSearchChange} onClear={handleClear} presetValue={query} />;
  },
  args: {
    title: 'Search',
    flavor: 'contained',
    manualSearch: false,
  },
};

export const CustomStyle: Story = {
  render: (args) => {
    const [query, setQuery] = useState<string>('');

    const handleSearchChange = (value: string) => {
      setQuery(value);
      actionFn('search value changed')(value);
    };

    const handleClear = () => {
      setQuery('');
      actionFn('search cleared')();
    };

    return <SearchInput {...args} onChange={handleSearchChange} onClear={handleClear} presetValue={query} />;
  },
  args: {
    title: 'Custom Style',
    flavor: 'outlined',
    manualSearch: true,
    sx: {
      border: '2px solid #ff5722',
      borderRadius: '20px',
      backgroundColor: '#fafafa',
    },
  },
};
