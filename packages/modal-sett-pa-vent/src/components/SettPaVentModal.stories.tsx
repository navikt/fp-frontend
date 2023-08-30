import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';
import { createIntl } from '@navikt/ft-utils';
import { alleKodeverk } from '@navikt/fp-storybook-utils';
import messages from '../../i18n/nb_NO.json';
import SettPaVentModal from './SettPaVentModal';

const intl = createIntl(messages);

const venteårsaker = alleKodeverk['Venteårsak'];

export default {
  title: 'modal-sett-pa-vent/SettPaVentModal',
  component: SettPaVentModal,
};

export const visModal = () => (
  <RawIntlProvider value={intl}>
    <SettPaVentModal
      ventearsaker={venteårsaker}
      showModal
      submitCallback={action('button-click')}
      cancelEvent={action('button-click')}
      erTilbakekreving={false}
      hasManualPaVent={false}
    />
  </RawIntlProvider>
);
