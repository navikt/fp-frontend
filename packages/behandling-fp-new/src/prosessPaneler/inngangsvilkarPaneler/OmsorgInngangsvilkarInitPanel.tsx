import React, {
  FunctionComponent,
} from 'react';

import { LoadingPanel, VerticalSpacer } from '@fpsak-frontend/shared-components';
import vilkarType from '@fpsak-frontend/kodeverk/src/vilkarType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgVilkarProsessIndex from '@fpsak-frontend/prosess-vilkar-omsorg';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';
import {
  useStandardProsessPanelProps, useSkalViseProsessPanel, InngangsvilkarPanelData, useInngangsvilkarRegistrerer,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData } from '../../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AVKLAR_OM_STONAD_GJELDER_SAMME_BARN,
  aksjonspunktCodes.AVKLAR_OM_STONAD_TIL_ANNEN_FORELDER_GJELDER_SAMME_BARN,
];

const VILKAR_KODER = [
  vilkarType.OMSORGSVILKARET,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

interface OwnProps {
  behandlingVersjon?: number;
  setPanelInfo: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
}

const OmsorgInngangsvilkarInitPanel: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  setPanelInfo,
  erPanelValgt,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);
  const erDataFerdighentet = initState === RestApiState.SUCCESS;

  const standardPanelProps = useStandardProsessPanelProps(initData, AKSJONSPUNKT_KODER, VILKAR_KODER);

  const skalVises = useSkalViseProsessPanel(standardPanelProps.aksjonspunkter, VILKAR_KODER, standardPanelProps.vilkar);

  useInngangsvilkarRegistrerer(
    setPanelInfo,
    'OMSORG',
    getPackageIntl().formatMessage({ id: 'ErOmsorgVilkaarOppfyltForm.Vurder' }),
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

  return (
    <>
      <OmsorgVilkarProsessIndex {...standardPanelProps} />
      <VerticalSpacer thirtyTwoPx />
    </>
  );
};

export default OmsorgInngangsvilkarInitPanel;
