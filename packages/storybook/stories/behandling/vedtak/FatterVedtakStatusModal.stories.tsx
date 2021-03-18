import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { FatterVedtakStatusModal } from '@fpsak-frontend/behandling-felles-ny';

const intl = createIntl({
  locale: 'nb-NO',
  messages: {
    'FatterVedtakStatusModal.GoToSearchPage': 'Gå til søkeside',
    'FatterVedtakStatusModal.Ok': 'OK',
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
      tekst="Forslag til vedtak er sendt til beslutter"
    />
  </RawIntlProvider>
);
