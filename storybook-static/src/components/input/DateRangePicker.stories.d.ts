import { Meta, StoryObj } from '@storybook/react';
import { default as CustomDatePicker } from './DateRangePicker.tsx';

declare const meta: Meta<typeof CustomDatePicker>;
export default meta;
type Story = StoryObj<typeof CustomDatePicker>;
export declare const Default: Story;
export declare const EmptyRange: Story;
