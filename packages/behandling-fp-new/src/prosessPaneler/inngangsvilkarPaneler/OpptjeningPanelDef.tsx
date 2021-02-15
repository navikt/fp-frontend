import React, {
  FunctionComponent, useCallback, useEffect, useState,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-opptjening';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, Aksjonspunkt, Opptjening, Vilkar,
} from '@fpsak-frontend/types';
import { useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../../data/fpBehandlingApi';

const aksjonspunktKoder = [aksjonspunktCodes.VURDER_OPPTJENINGSVILKARET];

const vilkarKoder = [vilkarType.OPPTJENINGSPERIODE, vilkarType.OPPTJENINGSVILKARET];

const endepunkterInit = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const endepunkterPanelData = [FpBehandlingApiKeys.OPPTJENING];
type EndepunktPanelData = {
  opptjening: Opptjening;
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

const OpptjeningPanelDef: FunctionComponent<OwnProps> = ({
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
        id: 'OPPTJENINGSVILKARET',
        aksjonspunktTekst: erOverstyrt || standardPanelProps.isAksjonspunktOpen
          ? getPackageIntl().formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' }) : undefined,
        harApentAksjonspunkt: erOverstyrt || standardPanelProps.isAksjonspunktOpen,
        status: standardPanelProps.status,
      });
    }
  }, [standardPanelProps.isAksjonspunktOpen, skalVises, erDataFerdighentet, erOverstyrt]);

  if (!erPanelValgt || !skalVises) {
    return null;
  }

  if (!erDataFerdighentet || panelDataState !== RestApiState.SUCCESS) {
    return <LoadingPanel />;
  }

  // FIXME Korleis sette denne?
  const harMinstEttPanelApentAksjonspunkt = false;

  if (standardPanelProps.aksjonspunkter.length === 0) {
    return (
      <OverstyringPanelDef
        behandling={standardPanelProps.behandling}
        aksjonspunkter={initData.aksjonspunkter.filter((ap) => ap.definisjon.kode === aksjonspunktCodes.OVERSTYRING_AV_OPPTJENINGSVILKARET)}
        aksjonspunktKode={aksjonspunktCodes.OVERSTYRING_AV_OPPTJENINGSVILKARET}
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={vilkarKoder}
        panelTekstKode="Inngangsvilkar.Opptjeningsvilkaret"
        erMedlemskapsPanel={false}
        toggleOverstyring={toggleOverstyring}
        erOverstyrt={erOverstyrt}
        overrideReadOnly={standardPanelProps.isReadOnly || (harMinstEttPanelApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      />
    );
  }

  return (
    <OpptjeningVilkarProsessIndex
      lovReferanse={standardPanelProps.vilkar[0].lovReferanse}
      {...panelData}
      {...standardPanelProps}
    />
  );
};

export default OpptjeningPanelDef;
