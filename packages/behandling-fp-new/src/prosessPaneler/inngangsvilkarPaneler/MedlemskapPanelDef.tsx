import React, {
  FunctionComponent, useEffect, useState, useCallback,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, Aksjonspunkt, Medlemskap, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles-ny';

import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../../data/fpBehandlingApi';

const aksjonspunktKoder = [aksjonspunktCodes.OVERSTYR_MEDLEMSKAPSVILKAR];

const vilkarKoder = [vilkarType.MEDLEMSKAPSVILKARET];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const endepunkterPanelData = [FpBehandlingApiKeys.MEDLEMSKAP];
type EndepunktPanelData = {
  medlemskap: Medlemskap;
}

interface OwnProps {
  behandlingVersjon?: number;
  setPanelInfo: (data: {
    id: string;
    aksjonspunktTekst: string;
    harApentAksjonspunkt: boolean;
    status: string;
  }) => void;
  erPanelValgt: boolean;
  rettigheter: AksessRettigheter;
}

const MedlemskapPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  setPanelInfo,
  erPanelValgt,
  rettigheter,
}) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  useEffect(() => {
    if (erDataFerdighentet && skalVises) {
      setPanelInfo({
        id: 'MEDLEMSKAP',
        aksjonspunktTekst: erOverstyrt || standardPanelProps.isAksjonspunktOpen ? 'tom' : undefined,
        harApentAksjonspunkt: erOverstyrt || standardPanelProps.isAksjonspunktOpen,
        status: standardPanelProps.status,
      });
    }
  }, [standardPanelProps.isAksjonspunktOpen, skalVises, erDataFerdighentet]);

  // FIXME Korleis sette denne?
  const harMinstEttPanelApentAksjonspunkt = false;

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
      aksjonspunktKode={aksjonspunktKoder[0]}
      vilkar={standardPanelProps.vilkar}
      vilkarKoder={vilkarKoder}
      panelTekstKode="Inngangsvilkar.Medlemskapsvilkaret"
      erMedlemskapsPanel
      medlemskap={panelData.medlemskap}
      toggleOverstyring={toggleOverstyring}
      erOverstyrt={erOverstyrt}
      overrideReadOnly={standardPanelProps.isReadOnly || (harMinstEttPanelApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
    />
  );
};

export default MedlemskapPanelDef;
