import { Meta } from '@storybook/react';
import PageWithBackAction from './PageWithBackAction';
import { action } from '@storybook/addon-actions';
import { Box, Typography } from '@mui/material';
import { PageLayout } from '../page';

export default {
  title: 'Page/PageWithBackAction',
  component: PageWithBackAction,
  argTypes: {
    backBtnClicked: { action: 'back button clicked' },
    children: { control: 'text' },
  },
} as Meta;

// @ts-ignore
const Template = (args) => (
  <PageLayout>
    <PageWithBackAction {...args}>
      <Box sx={{ padding: 3 }}>
        <Typography variant="h4">Page Content Goes Here</Typography>
        <Typography variant="body1">
          This is the page content wrapped within the PageWithBackAction component.
        </Typography>
      </Box>
    </PageWithBackAction>
  </PageLayout>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  backBtnClicked: action('backBtnClicked'),
  children: 'This is a sample content inside the PageWithBackAction component.',
};
