import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import OppdaterePeriodeModal from './OppdaterePeriodeModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'fakta/fakta-uttaksdokumentasjon-oppdater-modal',
  component: OppdaterePeriodeModal,
  decorators: [withIntl],
};

const Template: Story = () => (
  <OppdaterePeriodeModal
    submit={action('button-click')}
    cancel={action('button-click')}
  />
);

export const VisModalForÅOppdaterePeriode = Template.bind({});
