import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { FatterVedtakStatusModal } from '@fpsak-frontend/behandling-felles-ny';

const intl = createIntl({
  locale: 'nb-NO',
  messages: {
    'FatterVedtakStatusModal.GoToSearchPage': 'Gå til søkeside',
    'FatterVedtakStatusModal.Ok': 'OK',
    'Eksempel.Tekstkode': 'Forslag til vedtak er sendt til beslutter',
  },
}, createIntlCache());

export default {
  title: 'behandling/vedtak/FatterVedtakStatusModal',
  component: FatterVedtakStatusModal,
  decorators: [withKnobs],
};

export const visFatterVedtakModal = () => (
  <RawIntlProvider value={intl}>
    <FatterVedtakStatusModal
      visModal
      lukkModal={() => undefined}
      tekstkode="Eksempel.Tekstkode"
    />
  </RawIntlProvider>
);
