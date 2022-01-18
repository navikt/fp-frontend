import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import LoadingPanel from './LoadingPanel';

export default {
  title: 'sharedComponents/LoadingPanel',
  component: LoadingPanel,
};

const Template: Story = () => <LoadingPanel />;

export const Default = Template.bind({});
