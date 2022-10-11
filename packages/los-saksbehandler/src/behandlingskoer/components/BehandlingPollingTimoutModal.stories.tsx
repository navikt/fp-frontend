import React from 'react';

import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import BehandlingPollingTimoutModal from './BehandlingPollingTimoutModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/behandlingskoer/BehandlingPollingTimoutModal',
  component: BehandlingPollingTimoutModal,
  decorators: [withIntl],
};

export const Default = () => (
  <BehandlingPollingTimoutModal />
);
