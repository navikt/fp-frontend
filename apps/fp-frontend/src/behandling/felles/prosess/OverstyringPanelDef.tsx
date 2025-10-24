import { VilkarresultatMedOverstyringProsessIndex } from '@navikt/fp-prosess-vilkar-overstyring';
import type { AlleKodeverk, Medlemskap, Vilkar, VilkårType } from '@navikt/fp-types';
import { usePanelOverstyring } from '@navikt/fp-utils';

import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useStandardProsessPanelProps } from './useStandardProsessPanelProps';

const filtrerAvslagsårsaker = (alleKodeverk: AlleKodeverk, vilkår: Vilkar) => {
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

  const avslagsårsaker = filtrerAvslagsårsaker(alleKodeverk, vilkårForPanel[0]!);

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
