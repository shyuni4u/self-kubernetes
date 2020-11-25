import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ClusterHexItem, ClusterHexItemProps } from '../../../components/organisms/ClusterHexItem';

export default {
  title: 'Component/Organisms/ClusterHexItem',
  component: ClusterHexItem
} as Meta;

const Template: Story<ClusterHexItemProps> = (args) => (
  <Wrapper>
    <ClusterHexItem {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
Basic.args = {
  name: 'Test',
  type: 'amd',
  ip: 'http://147.46.219.61:35100'
};
