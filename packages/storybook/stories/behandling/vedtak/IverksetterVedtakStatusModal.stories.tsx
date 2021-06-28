import React from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@fpsak-frontend/utils';
import behandlingResultatType from '@fpsak-frontend/kodeverk/src/behandlingResultatType';
import { IverksetterVedtakStatusModal } from '@fpsak-frontend/behandling-felles';

const messages = {
  'IverksetterVedtakStatusModal.Avslatt': 'Avslått',
  'IverksetterVedtakStatusModal.VedtakAvslatt': 'Vedtak avslått',
  'IverksetterVedtakStatusModal.Innvilget': 'Innvilget',
  'IverksetterVedtakStatusModal.VedtakInnvilet': 'Vedtak innvilget',
  'IverksetterVedtakStatusModal.GoToSearchPage': 'Gå til søkeside',
  'IverksetterVedtakStatusModal.Ok': 'OK',
};
const intl = createIntl(messages);

export default {
  title: 'behandling/vedtak/IverksetterVedtakStatusModal',
  component: IverksetterVedtakStatusModal,
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
