import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, KlageVurdering, KodeverkMedNavn,
} from '@fpsak-frontend/types';

import VedtakKlageForm from './components/VedtakKlageForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  behandling: Behandling;
  klageVurdering: KlageVurdering;
  aksjonspunkter: Aksjonspunkt[];
  submitCallback: (data: any) => Promise<any>;
  previewVedtakCallback: (data: any) => Promise<any>;
  isReadOnly: boolean;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}

const VedtakKlageProsessIndex: FunctionComponent<OwnProps> = ({
  behandling,
  klageVurdering,
  aksjonspunkter,
  submitCallback,
  previewVedtakCallback,
  isReadOnly,
  alleKodeverk,
}) => (
  <RawIntlProvider value={intl}>
    <VedtakKlageForm
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      behandlingsresultat={behandling.behandlingsresultat}
      behandlingPaaVent={behandling.behandlingPaaVent}
      klageVurdering={klageVurdering}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      previewVedtakCallback={previewVedtakCallback}
      readOnly={isReadOnly}
      alleKodeverk={alleKodeverk}
    />
  </RawIntlProvider>
);

export default VedtakKlageProsessIndex;
