import { VilkarType } from '@navikt/fp-kodeverk';
import { VilkarresultatMedOverstyringProsessIndex } from '@navikt/fp-prosess-vilkar-overstyring';
import type { KodeverkMedNavn, Medlemskap, Vilkar } from '@navikt/fp-types';
import { usePanelOverstyring } from '@navikt/fp-utils';

import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useStandardProsessPanelProps } from './useStandardProsessPanelProps';

// TODO Spesifikk ES-kodar bør ikkje ligga her
const avslagsårsakerES = ['1002', '1003', '1032'];
const filtrerAvslagsårsaker = (
  avslagsårsaker: { [key: string]: KodeverkMedNavn<'Avslagsårsak'>[] },
  vilkarTypeKode: string,
): KodeverkMedNavn<'Avslagsårsak'>[] =>
  vilkarTypeKode === VilkarType.FODSELSVILKARET_MOR
    ? avslagsårsaker[vilkarTypeKode]!.filter(årsak => !avslagsårsakerES.includes(årsak.kode))
    : avslagsårsaker[vilkarTypeKode]!;

interface Props {
  vilkår: Vilkar[];
  vilkårKoder: VilkarType[];
  medlemskap?: Medlemskap;
  panelTekstKode: string;
}

export const OverstyringPanelDef = ({ vilkår, vilkårKoder, panelTekstKode, medlemskap }: Props) => {
  const { overstyringApKode } = usePanelOverstyring();

  const standardProps = useStandardProsessPanelProps([overstyringApKode], vilkårKoder);

  const skalVises = skalViseProsessPanel(standardProps.aksjonspunkterForPanel, vilkårKoder, vilkår);

  const avslagsårsaker = filtrerAvslagsårsaker(standardProps.alleKodeverk['Avslagsårsak'], vilkår[0]!.vilkarType);

  if (!skalVises) {
    return null;
  }

  return (
    <VilkarresultatMedOverstyringProsessIndex
      medlemskap={medlemskap}
      avslagsårsaker={avslagsårsaker}
      panelTekstKode={panelTekstKode}
      lovReferanse={vilkår[0]?.lovReferanse ?? undefined}
      status={standardProps.status}
    />
  );
};
