import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ClusterChartItem, ClusterChartItemProps } from '../../../components/organisms/ClusterChartItem';

export default {
  title: 'Component/Organisms/ClusterChartItem',
  component: ClusterChartItem
} as Meta;

const Template: Story<ClusterChartItemProps> = (args) => (
  <Wrapper>
    <ClusterChartItem {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'Test',
  type: 'amd',
  ip: 'http://147.46.219.61:35100'
};
