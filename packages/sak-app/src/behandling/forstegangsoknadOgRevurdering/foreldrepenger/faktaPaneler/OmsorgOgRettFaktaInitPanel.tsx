import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgOgRettFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-rett';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, Personoversikt, Ytelsefordeling,
} from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_ALENEOMSORG,
  aksjonspunktCodes.AVKLAR_ANNEN_FORELDER_RETT,
];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.YTELSEFORDELING];
type EndepunktPanelData = {
  ytelsefordeling: Ytelsefordeling;
}

interface OwnProps {
  personoversikt: Personoversikt;
}

/**
 * OmsorgOgRettFaktaInitPanel
 */
const OmsorgOgRettFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  personoversikt,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OMSORG_OG_RETT}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'OmsorgInfoPanel.OmsorgOgRett' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter?.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => <OmsorgOgRettFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgOgRettFaktaInitPanel;
