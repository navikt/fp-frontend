import type { FastsattOpptjening, VilkårUtfallType } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { OpptjeningVilkarAksjonspunktPanel } from './OpptjeningVilkarAksjonspunktPanel';
import { OpptjeningVilkarView } from './OpptjeningVilkarView';

interface Props {
  fastsattOpptjening: FastsattOpptjening;
  status: VilkårUtfallType;
}

/**
 * OpptjeningVilkarForm
 *
 * Presentasjonskomponent. Viser resultatet av opptjeningsvilkåret.
 */
export const OpptjeningVilkarForm = ({ fastsattOpptjening, status }: Props) => {
  const { aksjonspunkterForPanel } = usePanelDataContext();

  return aksjonspunkterForPanel.length > 0 ? (
    <OpptjeningVilkarAksjonspunktPanel status={status} fastsattOpptjening={fastsattOpptjening} />
  ) : (
    <OpptjeningVilkarView fastsattOpptjening={fastsattOpptjening} />
  );
};
