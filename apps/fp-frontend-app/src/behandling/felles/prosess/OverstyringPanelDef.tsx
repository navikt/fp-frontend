import { KodeverkType, VilkarType } from '@navikt/fp-kodeverk';
import { VilkarresultatMedOverstyringProsessIndex } from '@navikt/fp-prosess-vilkar-overstyring';
import { KodeverkMedNavn, Medlemskap, Vilkar } from '@navikt/fp-types';
import { usePanelContext, usePanelOverstyring } from '@navikt/fp-utils';

import { skalViseProsessPanel } from './skalViseProsessPanel';
import { useStandardProsessPanelProps } from './useStandardProsessPanelProps';

// TODO Spesifikk ES-kodar bør ikkje ligga her
const avslagsarsakerES = ['1002', '1003', '1032'];
const filtrerAvslagsarsaker = (
  avslagsarsaker: { [key: string]: KodeverkMedNavn[] },
  vilkarTypeKode: string,
): KodeverkMedNavn[] =>
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
  const { aksjonspunkterForPanel } = usePanelContext();
  const { overstyringApKode } = usePanelOverstyring();

  const overstyrteAksjonspunkter = aksjonspunkterForPanel.filter(ap => overstyringApKode === ap.definisjon);

  const standardProps = useStandardProsessPanelProps([overstyringApKode], vilkarKoder);

  const skalVises = skalViseProsessPanel(overstyrteAksjonspunkter, vilkarKoder, vilkar);

  const avslagsarsaker = filtrerAvslagsarsaker(
    standardProps.alleKodeverk[KodeverkType.AVSLAGSARSAK],
    vilkar[0].vilkarType,
  );

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
