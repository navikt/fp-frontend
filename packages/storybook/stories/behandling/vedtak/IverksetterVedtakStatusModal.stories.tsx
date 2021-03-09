import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { IverksetterVedtakStatusModal } from '@fpsak-frontend/behandling-felles-ny';

const intl = createIntl({
  locale: 'nb-NO',
  messages: {
    'IverksetterVedtakStatusModal.Avslatt': 'Avslått',
    'IverksetterVedtakStatusModal.VedtakAvslatt': 'Vedtak avslått',
    'IverksetterVedtakStatusModal.Innvilget': 'Innvilget',
    'IverksetterVedtakStatusModal.VedtakInnvilet': 'Vedtak innvilget',
    'IverksetterVedtakStatusModal.GoToSearchPage': 'Gå til søkeside',
    'IverksetterVedtakStatusModal.Ok': 'OK',
  },
}, createIntlCache());

export default {
  title: 'behandling/vedtak/IverksetterVedtakStatusModal',
  component: IverksetterVedtakStatusModal,
  decorators: [withKnobs],
};

export const visIverksetterVedtakInnvilget = () => (
  <RawIntlProvider value={intl}>
    <IverksetterVedtakStatusModal
      visModal
      lukkModal={() => undefined}
    />
  </RawIntlProvider>
);

export const visIverksetterVedtakAvslatt = () => (
  <RawIntlProvider value={intl}>
    <IverksetterVedtakStatusModal
      visModal
      lukkModal={() => undefined}
      behandlingsresultat={{
        type: {
          kode: behandlingResultatType.AVSLATT,
          kodeverk: '',
        },
      }}
    />
  </RawIntlProvider>
);
