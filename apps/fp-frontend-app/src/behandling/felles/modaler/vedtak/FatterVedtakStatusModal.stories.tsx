import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { action } from '@storybook/addon-actions';
import { createIntl } from '@navikt/ft-utils';

import FatterVedtakStatusModal from './FatterVedtakStatusModal';

import messages from '../../../../../i18n/nb_NO.json';

const intl = createIntl(messages);

export default {
  title: 'app/vedtak/FatterVedtakStatusModal',
  component: FatterVedtakStatusModal,
};

export const visFatterVedtakModal = () => (
  <RawIntlProvider value={intl}>
    <FatterVedtakStatusModal
      visModal
      lukkModal={action('button-click')}
      tekst="Forslag til vedtak er sendt til beslutter"
    />
  </RawIntlProvider>
);
