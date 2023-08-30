import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../../i18n/nb_NO.json';
import SettPaVentReadOnlyModal from './SettPaVentReadOnlyModal';

const intl = createIntl(messages);

export default {
  title: 'app/settpavent/SettPaVentReadOnlyModal',
  component: SettPaVentReadOnlyModal,
};

const ventearsaker = [
  {
    kode: 'test',
    navn: 'Dette er en venteårsak',
    kodeverk: 'VENTEARSAK',
  },
];

export const visModal = () => (
  <RawIntlProvider value={intl}>
    <SettPaVentReadOnlyModal ventearsaker={ventearsaker} ventearsak="test" lukkCallback={action('button-click')} />
  </RawIntlProvider>
);
