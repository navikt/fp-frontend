import { FunctionComponent } from 'react';

import { Aksjonspunkt, Behandling, FastsattOpptjening } from '@navikt/fp-types';
import { AvklarOpptjeningsvilkaretAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import OpptjeningVilkarAksjonspunktPanel from './OpptjeningVilkarAksjonspunktPanel';
import OpptjeningVilkarView from './OpptjeningVilkarView';

interface OwnProps {
  behandlingsresultat?: Behandling['behandlingsresultat'];
  fastsattOpptjening: FastsattOpptjening;
  aksjonspunkter: Aksjonspunkt[];
  status: string;
  lovReferanse?: string;
  isAksjonspunktOpen: boolean;
  readOnly: boolean;
  readOnlySubmitButton: boolean;
  submitCallback: (aksjonspunktData: AvklarOpptjeningsvilkaretAp) => Promise<void>;
  erIkkeGodkjentAvBeslutter: boolean;
  erSvpFagsak: boolean;
}

/**
 * OpptjeningVilkarForm
 *
 * Presentasjonskomponent. Viser resultatet av opptjeningsvilkåret.
 */
const OpptjeningVilkarForm: FunctionComponent<OwnProps> = ({
  behandlingsresultat,
  fastsattOpptjening,
  isAksjonspunktOpen,
  aksjonspunkter,
  status,
  lovReferanse,
  readOnlySubmitButton,
  readOnly,
  submitCallback,
  erIkkeGodkjentAvBeslutter,
  erSvpFagsak,
}) => {
  if (aksjonspunkter.length > 0) {
    return (
      <OpptjeningVilkarAksjonspunktPanel
        submitCallback={submitCallback}
        isApOpen={isAksjonspunktOpen}
        readOnly={readOnly}
        readOnlySubmitButton={readOnlySubmitButton}
        behandlingsresultat={behandlingsresultat}
        aksjonspunkter={aksjonspunkter}
        status={status}
        lovReferanse={lovReferanse}
        fastsattOpptjening={fastsattOpptjening}
        erIkkeGodkjentAvBeslutter={erIkkeGodkjentAvBeslutter}
        erSvpFagsak={erSvpFagsak}
      />
    );
  }
  return (
    <OpptjeningVilkarView
      months={fastsattOpptjening.opptjeningperiode.måneder}
      days={fastsattOpptjening.opptjeningperiode.dager}
      fastsattOpptjeningActivities={fastsattOpptjening.fastsattOpptjeningAktivitetList}
      opptjeningFomDate={fastsattOpptjening.opptjeningFom}
      opptjeningTomDate={fastsattOpptjening.opptjeningTom}
    />
  );
};

export default OpptjeningVilkarForm;
