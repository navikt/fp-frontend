import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';

import { Opptjening, StandardProsessPanelProps } from '@navikt/fp-types';

import OpptjeningVilkarForm from './components/OpptjeningVilkarForm';

import messages from '../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  opptjening: Opptjening;
  lovReferanse?: string;
  erSvpFagsak?: boolean;
}

export const OpptjeningVilkarProsessIndex = ({
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
  erSvpFagsak = false,
}: Props & StandardProsessPanelProps) => (
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
      erSvpFagsak={erSvpFagsak}
    />
  </RawIntlProvider>
);
