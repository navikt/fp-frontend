import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import {
  ArbeidsgiverOpplysningerPerId,
  Fagsak,
  SimuleringResultat,
  StandardProsessPanelProps,
  TilbakekrevingValg,
} from '@navikt/fp-types';

import SimuleringPanel from './components/SimuleringPanel';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface OwnProps {
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  previewFptilbakeCallback: (mottaker: string, fritekst: string) => Promise<any>;
}

const SimuleringProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  fagsak,
  behandling,
  aksjonspunkter,
  simuleringResultat,
  tilbakekrevingvalg,
  arbeidsgiverOpplysningerPerId,
  submitCallback,
  isReadOnly,
  isAksjonspunktOpen,
  previewFptilbakeCallback,
  formData,
  setFormData,
}) => (
  <RawIntlProvider value={intl}>
    <SimuleringPanel
      fagsak={fagsak}
      arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
      sprakkode={behandling.sprakkode}
      aksjonspunkter={aksjonspunkter}
      simuleringResultat={simuleringResultat}
      tilbakekrevingvalg={tilbakekrevingvalg}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      isApOpen={isAksjonspunktOpen}
      previewCallback={previewFptilbakeCallback}
      formData={formData}
      setFormData={setFormData}
    />
  </RawIntlProvider>
);

export default SimuleringProsessIndex;
