import { Meta } from '@storybook/react';
import FormSectionLabel from './FormSectionLabel';
import { JSX } from 'react/jsx-runtime';

export default {
  title: 'Form/FormSectionLabel',
  component: FormSectionLabel,
  argTypes: {
    label: { control: 'text' },
    sx: { control: 'object' },
  },
} as Meta;

const Template = (args: JSX.IntrinsicAttributes & FormSectionLabel) => <FormSectionLabel {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  label: 'Section Label to group form elements',
  sx: {},
};

export const CustomStyling = Template.bind({});
// @ts-ignore
CustomStyling.args = {
  label: 'Custom Section Label',
  sx: { color: 'yellow', fontWeight: 'bold', fontSize: '24px' },
};
