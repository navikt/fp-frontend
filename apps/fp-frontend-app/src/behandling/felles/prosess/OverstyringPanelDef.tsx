import React, { useMemo } from 'react';

import { KodeverkType, OverstyringAksjonspunkter,VilkarType } from '@navikt/fp-kodeverk';
import { VilkarresultatMedOverstyringProsessIndex } from '@navikt/fp-prosess-vilkar-overstyring';
import { Aksjonspunkt, KodeverkMedNavn, Medlemskap, Vilkar } from '@navikt/fp-types';

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
  aksjonspunkter: Aksjonspunkt[];
  aksjonspunktKode: OverstyringAksjonspunkter;
  vilkar: Vilkar[];
  vilkarKoder: string[];
  medlemskap?: Medlemskap;
  panelTekstKode: string;
  erOverstyrt: boolean;
  toggleOverstyring: () => void;
  kanOverstyreAccess: { isEnabled: boolean; employeeHasAccess: boolean };
  overrideReadOnly: boolean;
}

export const OverstyringPanelDef = ({
  aksjonspunkter,
  aksjonspunktKode,
  vilkar,
  vilkarKoder,
  panelTekstKode,
  medlemskap,
  erOverstyrt,
  toggleOverstyring,
  kanOverstyreAccess,
  overrideReadOnly,
}: Props) => {
  const overstyrteAksjonspunkter = useMemo(
    () => aksjonspunkter.filter(ap => aksjonspunktKode === ap.definisjon),
    [aksjonspunkter],
  );

  const standardProps = useStandardProsessPanelProps([aksjonspunktKode], vilkarKoder);

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
      overrideReadOnly={overrideReadOnly}
      kanOverstyreAccess={kanOverstyreAccess}
      toggleOverstyring={toggleOverstyring}
      avslagsarsaker={avslagsarsaker}
      erOverstyrt={erOverstyrt}
      panelTittelKode={panelTekstKode}
      overstyringApKode={aksjonspunktKode}
      lovReferanse={vilkar.length > 0 ? vilkar[0].lovReferanse : undefined}
      {...standardProps}
    />
  );
};
