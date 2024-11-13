import React from 'react';
import { StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { MenyTaAvVentIndex } from './MenyTaAvVentIndex';

export default {
  title: 'sak/sak-meny-ta-av-vent',
  component: MenyTaAvVentIndex,
};

const Template: StoryFn<{
  taBehandlingAvVent: () => void;
  lukkModal: () => void;
}> = ({ taBehandlingAvVent, lukkModal }) => (
  <MenyTaAvVentIndex behandlingVersjon={2} taBehandlingAvVent={taBehandlingAvVent} lukkModal={lukkModal} />
);

export const Default = Template.bind({});
Default.args = {
  taBehandlingAvVent: action('button-click'),
  lukkModal: action('button-click'),
};
