import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgFaktaIndex from '@fpsak-frontend/fakta-omsorg';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, Personoversikt, Soknad, Ytelsefordeling,
} from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

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
  personoversikt,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.OMSORG}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'OmsorgInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter.some((ap) => AKSJONSPUNKT_KODER.includes(ap.definisjon.kode))}
    renderPanel={(data) => <OmsorgFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgFaktaInitPanel;
