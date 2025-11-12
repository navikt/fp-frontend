import type { FastsattOpptjening } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { OpptjeningVilkarAksjonspunktPanel } from './OpptjeningVilkarAksjonspunktPanel';
import { OpptjeningVilkarView } from './OpptjeningVilkarView';

interface Props {
  fastsattOpptjening: FastsattOpptjening;
  erSvpFagsak: boolean;
}

/**
 * OpptjeningVilkarForm
 *
 * Presentasjonskomponent. Viser resultatet av opptjeningsvilkåret.
 */
export const OpptjeningVilkarForm = ({ fastsattOpptjening, erSvpFagsak }: Props) => {
  const { aksjonspunkterForPanel } = usePanelDataContext();

  if (aksjonspunkterForPanel.length > 0) {
    return <OpptjeningVilkarAksjonspunktPanel fastsattOpptjening={fastsattOpptjening} erSvpFagsak={erSvpFagsak} />;
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
