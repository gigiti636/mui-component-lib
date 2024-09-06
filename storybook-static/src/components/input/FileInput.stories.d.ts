import { Meta, StoryObj } from '@storybook/react';
import { default as FileInput } from './FileInput';

declare const meta: Meta<typeof FileInput>;
export default meta;
type Story = StoryObj<typeof FileInput>;
export declare const Default: Story;
export declare const CustomLabels: Story;
export declare const ErrorState: Story;
