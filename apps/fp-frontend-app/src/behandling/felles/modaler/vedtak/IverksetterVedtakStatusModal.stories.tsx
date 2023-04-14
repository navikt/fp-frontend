import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { createIntl } from '@navikt/ft-utils';
import { BehandlingResultatType } from '@navikt/ft-kodeverk';

import IverksetterVedtakStatusModal from './IverksetterVedtakStatusModal';

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
    <IverksetterVedtakStatusModal visModal lukkModal={() => undefined} />
  </RawIntlProvider>
);

export const visIverksetterVedtakAvslatt = () => (
  <RawIntlProvider value={intl}>
    <IverksetterVedtakStatusModal
      visModal
      lukkModal={() => undefined}
      behandlingsresultat={{
        type: BehandlingResultatType.AVSLATT,
      }}
    />
  </RawIntlProvider>
);
