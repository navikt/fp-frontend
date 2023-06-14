import React, { FunctionComponent } from 'react';
import { RawIntlProvider } from 'react-intl';

import { StandardProsessPanelProps, Opptjening } from '@navikt/fp-types';
import { createIntl } from '@navikt/ft-utils';

import OpptjeningVilkarForm from './components/OpptjeningVilkarForm';
import messages from '../i18n/nb_NO.json';

import '@navikt/fp-prosess-felles/dist/style.css';

const intl = createIntl(messages);

interface OwnProps {
  opptjening: Opptjening;
  lovReferanse?: string;
  erSvpFagsak?: boolean;
}

const OpptjeningVilkarProsessIndex: FunctionComponent<OwnProps & StandardProsessPanelProps> = ({
  behandling,
  opptjening,
  aksjonspunkter,
  status,
  lovReferanse,
  submitCallback,
  isReadOnly,
  isAksjonspunktOpen,
  readOnlySubmitButton,
  alleMerknaderFraBeslutter,
  formData,
  setFormData,
  erSvpFagsak = false,
}) => (
  <RawIntlProvider value={intl}>
    <OpptjeningVilkarForm
      behandlingsresultat={behandling.behandlingsresultat}
      fastsattOpptjening={opptjening.fastsattOpptjening}
      status={status}
      lovReferanse={lovReferanse}
      aksjonspunkter={aksjonspunkter}
      submitCallback={submitCallback}
      readOnly={isReadOnly}
      isAksjonspunktOpen={isAksjonspunktOpen}
      readOnlySubmitButton={readOnlySubmitButton}
      erIkkeGodkjentAvBeslutter={aksjonspunkter.some(a => alleMerknaderFraBeslutter[a.definisjon]?.notAccepted)}
      formData={formData}
      setFormData={setFormData}
      erSvpFagsak={erSvpFagsak}
    />
  </RawIntlProvider>
);

export default OpptjeningVilkarProsessIndex;
