import React, {
  FunctionComponent,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, Aksjonspunkt, Medlemskap, Vilkar,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef, InngangsvilkarPanelData, useInngangsvilkarRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';

import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR];

const VILKAR_KODER = [vilkarType.MEDLEMSKAPSVILKARET];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
}

interface OwnProps {
  behandlingVersjon?: number;
  rettigheter: AksessRettigheter;
  setPanelInfo: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
}

const MedlemskapInngangsvilkarInitPanel: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  rettigheter,
  setPanelInfo,
  erPanelValgt,
  harInngangsvilkarApentAksjonspunkt,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, VILKAR_KODER);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, VILKAR_KODER, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    setPanelInfo,
    'MEDLEMSKAP',
    '',
    erDataFerdighentet && skalVises,
    standardPanelProps.isAksjonspunktOpen,
    standardPanelProps.status,
  );

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (!erDataFerdighentet || panelDataState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  return (
    <OverstyringPanelDef
      behandling={standardPanelProps.behandling}
      aksjonspunkter={standardPanelProps.aksjonspunkter}
      aksjonspunktKode={AKSJONSPUNKT_KODER[0]}
      vilkar={standardPanelProps.vilkar}
      vilkarKoder={VILKAR_KODER}
      panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
      erMedlemskapsPanel
      medlemskap={panelData.medlemskap}
      toggleOverstyring={toggleOverstyring}
      erOverstyrt={erOverstyrt}
      overrideReadOnly={standardPanelProps.isReadOnly || (harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
    />
  );
};

export default MedlemskapInngangsvilkarInitPanel;
