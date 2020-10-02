import React, { FunctionComponent } from 'react';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';

import {
  Aksjonspunkt, Behandling, Fagsak, SimuleringResultat, TilbakekrevingValg,
} from '@fpsak-frontend/types';

import AvregningPanel from './components/AvregningPanel';
import messages from '../i18n/nb_NO.json';

const cache = createIntlCache();

const intl = createIntl({
  locale: 'nb-NO',
  messages,
}, cache);

interface OwnProps {
  fagsak: Fagsak;
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  submitCallback: (data: any) => Promise<any>;
  previewFptilbakeCallback: (mottaker: string, brevmalkode: string, fritekst: string, saksnummer: number) => Promise<any>;
  isReadOnly: boolean;
  isAksjonspunktOpen: boolean;
  readOnlySubmitButton: boolean;
}

const AvregningProsessIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  behandling,
  aksjonspunkter,
  simuleringResultat,
  tilbakekrevingvalg,
  submitCallback,
  isReadOnly,
  readOnlySubmitButton,
  isAksjonspunktOpen,
  previewFptilbakeCallback,
}) => (
  <RawIntlProvider value={intl}>
    <AvregningPanel
      fagsak={fagsak}
      behandlingId={behandling.id}
      behandlingVersjon={behandling.versjon}
      sprakkode={behandling.sprakkode}
      aksjonspunkter={aksjonspunkter}
      simuleringResultat={simuleringResultat}
      tilbakekrevingvalg={tilbakekrevingvalg}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      readOnlySubmitButton={readOnlySubmitButton}
      apCodes={aksjonspunkter.map((a: Aksjonspunkt) => a.definisjon.kode)}
      isApOpen={isAksjonspunktOpen}
      previewCallback={previewFptilbakeCallback}
    />
  </RawIntlProvider>
);

export default AvregningProsessIndex;
