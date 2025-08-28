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
  vilkar: Vilkar[];
  vilkarKoder: VilkarType[];
  medlemskap?: Medlemskap;
  panelTekstKode: string;
}

export const OverstyringPanelDef = ({ vilkar, vilkarKoder, panelTekstKode, medlemskap }: Props) => {
  const { overstyringApKode } = usePanelOverstyring();

  const standardProps = useStandardProsessPanelProps([overstyringApKode], vilkarKoder);

  const skalVises = skalViseProsessPanel(standardProps.aksjonspunkterForPanel, vilkarKoder, vilkar);

  const avslagsarsaker = filtrerAvslagsarsaker(standardProps.alleKodeverk['Avslagsårsak'], vilkar[0].vilkarType);

  if (!skalVises) {
    return null;
  }

  return (
    <VilkarresultatMedOverstyringProsessIndex
      medlemskap={medlemskap}
      avslagsarsaker={avslagsarsaker}
      panelTittelKode={panelTekstKode}
      lovReferanse={vilkar.length > 0 ? vilkar[0].lovReferanse : undefined}
      status={standardProps.status}
    />
  );
};
