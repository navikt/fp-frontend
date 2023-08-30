import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../../i18n/nb_NO.json';
import KlageBehandlingModal from './KlageBehandlingModal';

const intl = createIntl(messages);

export default {
  title: 'app/klage/KlageBehandlingModal',
  component: KlageBehandlingModal,
};

export const visModal = () => (
  <RawIntlProvider value={intl}>
    <KlageBehandlingModal visModal lukkModal={action('button-click')} />
  </RawIntlProvider>
);
