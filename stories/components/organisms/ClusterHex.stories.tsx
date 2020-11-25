import React from 'react';
import Wrapper from '../../../components/organisms/Wrapper';

import { Story, Meta } from '@storybook/react/types-6-0';

import { ClusterHex } from '../../../components/organisms/ClusterHex';

export default {
  title: 'Component/Organisms/ClusterHex',
  component: ClusterHex
} as Meta;

const Template: Story = (args) => (
  <Wrapper>
    <ClusterHex {...args} />
  </Wrapper>
);

export const Basic = Template.bind({});
