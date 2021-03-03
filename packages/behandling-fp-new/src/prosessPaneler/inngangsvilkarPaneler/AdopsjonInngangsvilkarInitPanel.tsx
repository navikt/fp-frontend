import React, {
  FunctionComponent,
} from 'react';

import { LoadingPanel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AdopsjonVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-adopsjon';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  AksessRettigheter, Aksjonspunkt, Vilkar,
} from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, useSkalViseProsessPanel, OverstyringPanelDef, InngangsvilkarPanelData, useInngangsvilkarRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [
  vilkarType.ADOPSJONSVILKARET_FORELDREPENGER,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
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

const AdopsjonInngangsvilkarInitPanel: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  rettigheter,
  setPanelInfo,
  erPanelValgt,
  harInngangsvilkarApentAksjonspunkt,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, VILKAR_KODER);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, VILKAR_KODER, standardPanelProps.vilkar);

  const { erOverstyrt, toggleOverstyring } = useInngangsvilkarRegistrerer(
    setPanelInfo,
    'ADOPSJON',
    getPackageIntl().formatMessage({ id: 'AdopsjonVilkarForm.VurderGjelderSammeBarn' }),
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
        aksjonspunkter={initData.aksjonspunkter}
        aksjonspunktKoder={[aksjonspunktCodes.OVERSTYRING_AV_ADOPSJONSVILKÅRET_FP]}
        vilkar={standardPanelProps.vilkar}
        vilkarKoder={VILKAR_KODER}
        panelTekstKode="Inngangsvilkar.Adopsjonsvilkaret"
        erMedlemskapsPanel={false}
        toggleOverstyring={toggleOverstyring}
        erOverstyrt={erOverstyrt}
        overrideReadOnly={standardPanelProps.isReadOnly || (harInngangsvilkarApentAksjonspunkt && !(standardPanelProps.isAksjonspunktOpen || erOverstyrt))}
        kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      />
    );
  }

  return (
    <>
      <AdopsjonVilkarProsessIndex
        {...standardPanelProps}
      />
      <VerticalSpacer thirtyTwoPx />
    </>
  );
};

export default AdopsjonInngangsvilkarInitPanel;
