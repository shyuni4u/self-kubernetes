import React from 'react';
import Wrapper from '../../../components/organisms/StorybookWrapper';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { DashboardItem, DashboardItemProps } from '../../../components/atoms/DashboardItem';

export default {
  title: 'Component/Atoms/DashboardItem',
  component: DashboardItem
  // argTypes: {
  //   color: { control: 'color' }
  // }
} as Meta;

const Template: Story<DashboardItemProps> = (args) => (
  <Wrapper>
    <DashboardItem {...args}></DashboardItem>
  </Wrapper>
);

export const BasicString = Template.bind({});
BasicString.args = {
  title: 'Title for storybook',
  value: 'value ...',
  gpu: 'amd'
};

const EditTemplate: Story<DashboardItemProps> = (args) => (
  <Wrapper>
    <DashboardItem {...args}></DashboardItem>
    Edit change true to false
  </Wrapper>
);

export const EditString = EditTemplate.bind({});
EditString.args = {
  title: 'Title for storybook (Click here)',
  value: '10',
  gpu: 'amd',
  edit: true
};

const ObjectTemplate: Story<DashboardItemProps> = (args) => (
  <Wrapper>
    <DashboardItem {...args}>
      <DashboardItem title={args.value.title} value={args.value.value} gpu={args.value.gpu}></DashboardItem>
    </DashboardItem>
  </Wrapper>
);

export const BasicObject = ObjectTemplate.bind({});
BasicObject.args = {
  title: 'Title for storybook',
  value: {
    title: 'Title in object',
    value: 'Value in object',
    gpu: 'amd'
  },
  gpu: 'amd'
};
