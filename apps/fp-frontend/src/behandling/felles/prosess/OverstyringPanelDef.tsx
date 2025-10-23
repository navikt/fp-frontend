import { VilkarresultatMedOverstyringProsessIndex } from '@navikt/fp-prosess-vilkar-overstyring';
import type { AlleKodeverk, Medlemskap, VilkårType } from '@navikt/fp-types';
import { usePanelOverstyring } from '@navikt/fp-utils';

import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useStandardProsessPanelProps } from './useStandardProsessPanelProps';

const filtrerAvslagsårsaker = (vilkår: Vilkar, alleKodeverk: AlleKodeverk) => {
  return alleKodeverk['LineærAvslagsårsak'].filter(kodeverk => vilkår.aktuelleAvslagsårsaker.includes(kodeverk.kode));
};

interface Props {
  vilkårKoder: VilkårType[];
  medlemskap?: Medlemskap;
  panelTekstKode: string;
}

export const OverstyringPanelDef = ({ vilkårKoder, panelTekstKode, medlemskap }: Props) => {
  const { overstyringApKode } = usePanelOverstyring();

  const { status, aksjonspunkterForPanel, vilkårForPanel, alleKodeverk } = useStandardProsessPanelProps(
    [overstyringApKode],
    vilkårKoder,
  );

  const skalVises = skalViseProsessPanel(aksjonspunkterForPanel, vilkårKoder, vilkårForPanel);

  if (!skalVises) {
    return null;
  }

  const avslagsårsaker = filtrerAvslagsårsaker(alleKodeverk['Avslagsårsak'], vilkårForPanel[0]!.vilkarType);

  return (
    <VilkarresultatMedOverstyringProsessIndex
      medlemskap={medlemskap}
      avslagsårsaker={avslagsårsaker}
      panelTekstKode={panelTekstKode}
      lovReferanse={vilkårForPanel[0]?.lovReferanse}
      status={status}
    />
  );
};
