import React from 'react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Modal } from '@navikt/ds-react';

import BehandlingPollingTimoutModal from './BehandlingPollingTimoutModal';

import messages from '../../../i18n/nb_NO.json';

Modal.setAppElement('body');

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/behandlingskoer/BehandlingPollingTimoutModal',
  component: BehandlingPollingTimoutModal,
  decorators: [withIntl],
};

export const Default = () => <BehandlingPollingTimoutModal />;
