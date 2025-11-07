import type { FastsattOpptjening } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { OpptjeningVilkarAksjonspunktPanel } from './OpptjeningVilkarAksjonspunktPanel';
import { OpptjeningVilkarView } from './OpptjeningVilkarView';

interface Props {
  fastsattOpptjening: FastsattOpptjening;
}

/**
 * OpptjeningVilkarForm
 *
 * Presentasjonskomponent. Viser resultatet av opptjeningsvilkåret.
 */
export const OpptjeningVilkarForm = ({ fastsattOpptjening }: Props) => {
  const { aksjonspunkterForPanel } = usePanelDataContext();

  return aksjonspunkterForPanel.length > 0 ? (
    <OpptjeningVilkarAksjonspunktPanel fastsattOpptjening={fastsattOpptjening} />
  ) : (
    <OpptjeningVilkarView fastsattOpptjening={fastsattOpptjening} />
  );
};
