import { FastsattOpptjening } from '@navikt/fp-types';
import { usePanelContext } from '@navikt/fp-utils';

import { OpptjeningVilkarAksjonspunktPanel } from './OpptjeningVilkarAksjonspunktPanel';
import OpptjeningVilkarView from './OpptjeningVilkarView';

interface Props {
  fastsattOpptjening: FastsattOpptjening;
  status: string;
  lovReferanse?: string;
  readOnlySubmitButton: boolean;
  erSvpFagsak: boolean;
}

/**
 * OpptjeningVilkarForm
 *
 * Presentasjonskomponent. Viser resultatet av opptjeningsvilkåret.
 */
export const OpptjeningVilkarForm = ({
  fastsattOpptjening,
  status,
  lovReferanse,
  readOnlySubmitButton,
  erSvpFagsak,
}: Props) => {
  const { aksjonspunkterForPanel } = usePanelContext();

  if (aksjonspunkterForPanel.length > 0) {
    return (
      <OpptjeningVilkarAksjonspunktPanel
        readOnlySubmitButton={readOnlySubmitButton}
        status={status}
        lovReferanse={lovReferanse}
        fastsattOpptjening={fastsattOpptjening}
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
