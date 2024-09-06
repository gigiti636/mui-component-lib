import { Meta, StoryObj } from '@storybook/react';
import { default as SearchInput } from './SearchInput';

declare const meta: Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof SearchInput>;
export declare const Default: Story;
export declare const CustomStyle: Story;
