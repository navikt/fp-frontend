import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import MessagesModalSakIndex from './MessagesModalSakIndex';

export default {
  title: 'sak/sak-meldinger/modal',
  component: MessagesModalSakIndex,
};

const Template: Story<{ closeEvent: () => void }> = ({
  closeEvent,
}) => (
  <MessagesModalSakIndex
    showModal
    closeEvent={closeEvent}
  />
);

export const Default = Template.bind({});
Default.args = {
  closeEvent: action('button-click') as () => Promise<any>,
};
