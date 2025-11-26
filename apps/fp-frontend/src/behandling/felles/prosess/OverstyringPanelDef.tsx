import { VilkarresultatMedOverstyringProsessIndex } from '@navikt/fp-prosess-vilkar-overstyring';
import type { Medlemskap, VilkårType } from '@navikt/fp-types';
import { usePanelOverstyring } from '@navikt/fp-utils';

import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useStandardProsessPanelProps } from './useStandardProsessPanelProps';

interface Props {
  vilkårKoder: VilkårType[];
  medlemskap?: Medlemskap;
  panelTekstKode: string;
}

export const OverstyringPanelDef = ({ vilkårKoder, panelTekstKode, medlemskap }: Props) => {
  const { overstyringApKode } = usePanelOverstyring();

  const { aksjonspunkterForPanel, vilkårForPanel } = useStandardProsessPanelProps([overstyringApKode], vilkårKoder);

  const skalVises = skalViseProsessPanel(aksjonspunkterForPanel, vilkårKoder, vilkårForPanel);

  if (!skalVises) {
    return null;
  }

  return (
    <VilkarresultatMedOverstyringProsessIndex
      medlemskapManuellBehandlingResultat={medlemskap?.manuellBehandlingResultat ?? undefined}
      panelTekstKode={panelTekstKode}
    />
  );
};
