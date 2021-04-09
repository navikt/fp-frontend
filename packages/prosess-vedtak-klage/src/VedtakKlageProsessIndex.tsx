import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { KlageVurdering, StandardProsessPanelProps } from '@fpsak-frontend/types';
import { createIntl } from '@fpsak-frontend/utils';

import VedtakKlageForm, { ForhandsvisData } from './components/VedtakKlageForm';
import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  klageVurdering: KlageVurdering;
  previewVedtakCallback: (data: ForhandsvisData) => Promise<any>;
}

const VedtakKlageProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
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
