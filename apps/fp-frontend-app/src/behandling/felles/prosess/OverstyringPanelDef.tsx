import React, {
  FunctionComponent, useMemo,
} from 'react';
import { Aksjonspunkt, KodeverkMedNavn } from '@navikt/ft-types';
import { KodeverkType, VilkarType } from '@navikt/ft-kodeverk';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import VilkarresultatMedOverstyringProsessIndex from '@navikt/fp-prosess-vilkar-overstyring';
import { Medlemskap, Vilkar } from '@navikt/fp-types';
import { OverstyringAksjonspunkter } from '@navikt/fp-kodeverk';

import skalViseProsessPanel from './skalViseProsessPanel';
import useStandardProsessPanelProps from './useStandardProsessPanelProps';

// TODO Spesifikk ES-kodar bør ikkje ligga her
const avslagsarsakerES = ['1002', '1003', '1032'];
const filtrerAvslagsarsaker = (
  avslagsarsaker: {[key: string]: KodeverkMedNavn[] },
  vilkarTypeKode: string,
): KodeverkMedNavn[] => (vilkarTypeKode === VilkarType.FODSELSVILKARET_MOR
  ? avslagsarsaker[vilkarTypeKode].filter((arsak) => !avslagsarsakerES.includes(arsak.kode))
  : avslagsarsaker[vilkarTypeKode]);

interface OwnProps {
  aksjonspunkter: Aksjonspunkt[];
  aksjonspunktKode: OverstyringAksjonspunkter;
  vilkar: Vilkar[];
  vilkarKoder: string[];
  erMedlemskapsPanel: boolean;
  medlemskap?: Medlemskap;
  panelTekstKode: string;
  erOverstyrt: boolean;
  toggleOverstyring: () => void;
  kanOverstyreAccess: { isEnabled: boolean; employeeHasAccess: boolean },
  overrideReadOnly: boolean;
}

const OverstyringPanelDef: FunctionComponent<OwnProps> = ({
  aksjonspunkter,
  aksjonspunktKode,
  vilkar,
  vilkarKoder,
  panelTekstKode,
  erMedlemskapsPanel,
  medlemskap,
  erOverstyrt,
  toggleOverstyring,
  kanOverstyreAccess,
  overrideReadOnly,
}) => {
  const overstyrteAksjonspunkter = useMemo(() => aksjonspunkter.filter((ap) => aksjonspunktKode === ap.definisjon),
    [aksjonspunkter]);

  const standardProps = useStandardProsessPanelProps([aksjonspunktKode], vilkarKoder);

  const skalVises = skalViseProsessPanel(overstyrteAksjonspunkter, vilkarKoder, vilkar);

  // @ts-ignore Avslagsårsaker er ikkje støtta i kodeverk-typen. Fiks!
  const avslagsarsaker = filtrerAvslagsarsaker(standardProps.alleKodeverk[KodeverkType.AVSLAGSARSAK], vilkar[0].vilkarType);

  if (!skalVises) {
    return null;
  }

  return (
    <>
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
        erMedlemskapsPanel={erMedlemskapsPanel}
        {...standardProps}
      />
      <VerticalSpacer thirtyTwoPx />
    </>
  );
};

export default OverstyringPanelDef;
