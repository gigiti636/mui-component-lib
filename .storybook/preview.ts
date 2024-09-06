import type { Preview } from '@storybook/react';
import { storyDecorators } from './decorators';

const preview: Preview = {
  // @ts-ignore
  decorators: storyDecorators,
  tags: ['autodocs'],
};

export default preview;
