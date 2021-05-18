import React, { FunctionComponent } from 'react';

import { Aksjonspunkt, Behandling, FastsattOpptjening } from '@fpsak-frontend/types';
import { AvklarOpptjeningsvilkaretAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import OpptjeningVilkarView from './OpptjeningVilkarView';
import OpptjeningVilkarAksjonspunktPanel from './OpptjeningVilkarAksjonspunktPanel';

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
