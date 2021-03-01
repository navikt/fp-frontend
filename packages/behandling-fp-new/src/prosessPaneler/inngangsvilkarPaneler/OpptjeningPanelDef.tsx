import React, {
  FunctionComponent,
} from 'react';

import { LoadingPanel } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OpptjeningVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-opptjening';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, Aksjonspunkt, Opptjening, Vilkar,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef, InngangsvilkarPanelData, useInngangsvilkarRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';

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
  rettigheter: AksessRettigheter;
  setPanelInfo: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
}

const OpptjeningPanelDef: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  rettigheter,
  setPanelInfo,
  erPanelValgt,
  harInngangsvilkarApentAksjonspunkt,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(endepunkterInit, behandlingVersjon);
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(endepunkterPanelData, erPanelValgt, behandlingVersjon);

  const standardPanelProps = useStandardProsessPanelProps(initData, aksjonspunktKoder, vilkarKoder);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, vilkarKoder, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    setPanelInfo,
    'OPPTJENINGSVILKARET',
    getPackageIntl().formatMessage({ id: 'OpptjeningVilkarView.VurderOmSøkerHarRett' }),
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
        overrideReadOnly={standardPanelProps.isReadOnly || (harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))}
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
