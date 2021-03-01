import React, {
  FunctionComponent,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-fodsel';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, Aksjonspunkt, Vilkar,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef, InngangsvilkarPanelData, useInngangsvilkarRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../../data/fpBehandlingApi';

const aksjonspunktKoder = [
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const vilkarKoder = [
  vilkarType.FODSELSVILKARET_MOR,
  vilkarType.FODSELSVILKARET_FAR,
];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon?: number;
  rettigheter: AksessRettigheter;
  setPanelInfo: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
}

const FodselPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  rettigheter,
  setPanelInfo,
  erPanelValgt,
  harInngangsvilkarApentAksjonspunkt,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    setPanelInfo,
    'FODSEL',
    getPackageIntl().formatMessage({ id: 'FodselVilkarForm.VurderGjelderSammeBarn' }),
    erDataFerdighentet && skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (!erDataFerdighentet) {
    return <LoadingPanel />;
  }

  if (standardPanelProps.aksjonspunkter.length === 0) {
    return (
      <OverstyringPanelDef
        behandling={standardPanelProps.behandling}
        aksjonspunkter={initData.aksjonspunkter.filter((ap) => ap.definisjon.kode === aksjonspunktCodes.OVERSTYR_FODSELSVILKAR
          || ap.definisjon.kode === aksjonspunktCodes.OVERSTYR_FODSELSVILKAR_FAR_MEDMOR)}
        // FIXME Dette må vel vera feil? Kan vera ein kode
        aksjonspunktKode={aksjonspunktCodes.OVERSTYR_FODSELSVILKAR}
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={vilkarKoder}
        panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
        erMedlemskapsPanel={false}
        toggleOverstyring={toggleOverstyring}
        erOverstyrt={erOverstyrt}
        overrideReadOnly={standardPanelProps.isReadOnly || (harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      />
    );
  }

  return (
    <FodselVilkarProsessIndex
      ytelseTypeKode={fagsakYtelseType.FORELDREPENGER}
      {...standardPanelProps}
    />
  );
};

export default FodselPanelDef;
