import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgFaktaIndex from '@fpsak-frontend/fakta-omsorg';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';
import {
  FaktaPanelInitProps, useStandardFaktaPanelProps, useFaktaMenyRegistrerer, FaktaPanelWrapper,
} from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, useHentInitPanelData, useHentInputDataTilPanel } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.YTELSEFORDELING, FpBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  ytelsefordeling: Ytelsefordeling;
  soknad: Soknad;
}

interface OwnProps {
  personoversikt: Personoversikt;
}

/**
 * OmsorgFaktaInitPanel
 */
const OmsorgFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandlingVersjon,
  registrerFaktaPanel,
  personoversikt,
}) => {
  const { initData, initState } = useHentInitPanelData<EndepunktInitData>(ENDEPUNKTER_INIT_DATA, behandlingVersjon);

  const standardPanelProps = useStandardFaktaPanelProps(initData, AKSJONSPUNKT_KODER);

  const skalVises = !!initData?.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.includes(ap.definisjon.kode));

  const erPanelValgt = useFaktaMenyRegistrerer(
    registrerFaktaPanel,
    initState,
    faktaPanelCodes.OMSORG,
    getPackageIntl().formatMessage({ id: 'OmsorgInfoPanel.Omsorg' }),
    valgtFaktaSteg,
    skalVises,
    standardPanelProps.harApneAksjonspunkter,
  );

  const { panelData, panelDataState } = useHentInputDataTilPanel<EndepunktPanelData>(ENDEPUNKTER_PANEL_DATA, erPanelValgt, behandlingVersjon);

  return (
    <FaktaPanelWrapper erPanelValgt={erPanelValgt} dataState={panelDataState}>
      <OmsorgFaktaIndex personoversikt={personoversikt} {...panelData} {...standardPanelProps} />
    </FaktaPanelWrapper>
  );
};

export default OmsorgFaktaInitPanel;
