import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MenyVergeIndex } from './MenyVergeIndex';

export default {
  title: 'sak/sak-meny-verge',
  component: MenyVergeIndex,
};

const Template: StoryFn<{
  opprettVerge?: () => Promise<void>;
  fjernVerge?: () => Promise<void>;
  lukkModal: () => void;
}> = ({ opprettVerge, fjernVerge, lukkModal }) => (
  <MenyVergeIndex opprettVerge={opprettVerge} fjernVerge={fjernVerge} lukkModal={lukkModal} />
);

export const LeggeTilVerge = Template.bind({});
LeggeTilVerge.args = {
  opprettVerge: action('button-click') as () => Promise<void>,
  lukkModal: action('button-click'),
};

export const FjerneVerge = Template.bind({});
FjerneVerge.args = {
  fjernVerge: action('button-click') as () => Promise<void>,
  lukkModal: action('button-click'),
};
