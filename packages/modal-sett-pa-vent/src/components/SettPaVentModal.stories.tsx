import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { action } from '@storybook/addon-actions';

import { alleKodeverk } from '@navikt/fp-storybook-utils';

import { SettPaVentModal } from './SettPaVentModal';

import messages from '../../i18n/nb_NO.json';

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
      hasManualPaVent
    />
  </RawIntlProvider>
);
