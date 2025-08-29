import { VilkarType } from '@navikt/fp-kodeverk';
import { VilkarresultatMedOverstyringProsessIndex } from '@navikt/fp-prosess-vilkar-overstyring';
import type { KodeverkMedNavn, Medlemskap, Vilkar } from '@navikt/fp-types';
import { usePanelOverstyring } from '@navikt/fp-utils';

import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useStandardProsessPanelProps } from './useStandardProsessPanelProps';

// TODO Spesifikk ES-kodar bør ikkje ligga her
const avslagsarsakerES = ['1002', '1003', '1032'];
const filtrerAvslagsarsaker = (
  avslagsarsaker: { [key: string]: KodeverkMedNavn<'Avslagsårsak'>[] },
  vilkarTypeKode: string,
): KodeverkMedNavn<'Avslagsårsak'>[] =>
  vilkarTypeKode === VilkarType.FODSELSVILKARET_MOR
    ? avslagsarsaker[vilkarTypeKode].filter(arsak => !avslagsarsakerES.includes(arsak.kode))
    : avslagsarsaker[vilkarTypeKode];

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

  const avslagsarsaker = filtrerAvslagsarsaker(standardProps.alleKodeverk['Avslagsårsak'], vilkår[0].vilkarType);

  if (!skalVises) {
    return null;
  }

  return (
    <VilkarresultatMedOverstyringProsessIndex
      medlemskap={medlemskap}
      avslagsarsaker={avslagsarsaker}
      panelTittelKode={panelTekstKode}
      lovReferanse={vilkar[0]?.lovReferanse ?? undefined}
      status={standardProps.status}
    />
  );
};
