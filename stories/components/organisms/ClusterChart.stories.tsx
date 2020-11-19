import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ClusterChart } from '../../../components/organisms/ClusterChart';

export default {
  title: 'Component/Organisms/ClusterChart',
  component: ClusterChart
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <ClusterChart {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
