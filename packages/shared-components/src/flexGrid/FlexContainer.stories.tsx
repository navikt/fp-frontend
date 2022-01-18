import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import FlexContainer from './FlexContainer';
import FlexRow from './FlexRow';
import FlexColumn from './FlexColumn';

export default {
  title: 'sharedComponents/FlexContainer',
  component: FlexContainer,
};

const Template: Story = () => (
  <FlexContainer>
    <FlexRow>
      <FlexColumn>
        Tekst 1
      </FlexColumn>
      <FlexColumn>
        Tekst 2
      </FlexColumn>
      <FlexColumn>
        Tekst 3
      </FlexColumn>
    </FlexRow>
    <FlexRow>
      <FlexColumn>
        Tekst 4
      </FlexColumn>
      <FlexColumn>
        Tekst 5
      </FlexColumn>
      <FlexColumn>
        Tekst 6
      </FlexColumn>
    </FlexRow>
  </FlexContainer>
);

export const Default = Template.bind({});
