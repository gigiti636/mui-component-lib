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
    <PageLayout>
      <PageTitle title={args.title} />
    </PageLayout>
    <PageLayout>
      <PageSection>
        <p>Page Section</p>
      </PageSection>
    </PageLayout>
    <PageLayout>Page Layout that is used across stories</PageLayout>
  </>
);

export const Default = Template.bind({});
// @ts-ignore
Default.args = {
  title: 'Page Title',
};
