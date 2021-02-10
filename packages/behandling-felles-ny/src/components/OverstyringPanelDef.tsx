import React, {
  FunctionComponent,
} from 'react';

import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import VilkarresultatMedOverstyringProsessIndex from '@fpsak-frontend/prosess-vilkar-overstyring';
import {
  Aksjonspunkt, Behandling, Medlemskap, Vilkar,
} from '@fpsak-frontend/types';
import useSkalViseProsessPanel from '../utils/useSkalViseProsessPanel';
import useStandardProsessPanelProps from '../utils/useStandardProsessPanelProps';

const avslagsarsakerES = ['1002', '1003', '1032'];
const filtrerAvslagsarsaker = (avslagsarsaker, vilkarTypeKode) => (vilkarTypeKode === vilkarType.FODSELSVILKARET_MOR
  ? avslagsarsaker[vilkarTypeKode].filter((arsak) => !avslagsarsakerES.includes(arsak.kode))
  : avslagsarsaker[vilkarTypeKode]);

interface OwnProps {
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  aksjonspunktKode: string;
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
  behandling,
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
  const standardProps = useStandardProsessPanelProps(aksjonspunkter, vilkar);

  const skalVises = useSkalViseProsessPanel(aksjonspunkter, vilkarKoder, vilkar);

  const avslagsarsaker = filtrerAvslagsarsaker(standardProps.alleKodeverk[kodeverkTyper.AVSLAGSARSAK], vilkar[0].vilkarType.kode);

  if (!skalVises) {
    return null;
  }

  return (
    <VilkarresultatMedOverstyringProsessIndex
      behandling={behandling}
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
  );
};

export default OverstyringPanelDef;
