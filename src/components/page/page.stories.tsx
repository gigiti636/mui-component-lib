import { PageTitle, PageLayout, PageSection } from './index';

interface PageProps {
  title: string;
}

export default {
  title: 'Page/Components',
  component: [PageTitle, PageLayout, PageSection],
  argTypes: {
    // Enabling control for the title prop
    title: { control: 'text' },
  },
};

const Template = (args: PageProps) => (
  <>
    <PageTitle title={args.title} mx={2} />

    <PageSection>
      <p>Page Section</p>
    </PageSection>
    <PageLayout mt={2}>Page Layout that is used across stories</PageLayout>
  </>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  title: 'Page Title',
};
