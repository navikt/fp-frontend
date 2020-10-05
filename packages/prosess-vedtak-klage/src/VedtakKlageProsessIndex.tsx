import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import { KlageVurdering } from '@fpsak-frontend/types';
import { StandardProsessFormProps } from '@fpsak-frontend/prosess-felles';

import VedtakKlageForm from './components/VedtakKlageForm';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  klageVurdering: KlageVurdering;
  previewVedtakCallback: (data: any) => Promise<any>;
}

const VedtakKlageProsessIndex: FunctionComponent<OwnProps & StandardProsessFormProps> = ({
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
