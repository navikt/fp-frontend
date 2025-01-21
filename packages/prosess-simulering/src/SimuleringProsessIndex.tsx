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

interface Props {
  fagsak: Fagsak;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  simuleringResultat?: SimuleringResultat;
  tilbakekrevingvalg?: TilbakekrevingValg;
  previewFptilbakeCallback: (mottaker: string, fritekst: string) => Promise<any>;
}

export const SimuleringProsessIndex = ({
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
}: Props & StandardProsessPanelProps) => (
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
