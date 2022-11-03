import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgFaktaIndex from '@fpsak-frontend/fakta-omsorg';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  Personoversikt, Ytelsefordeling,
} from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_KONTROLL_AV_OM_BRUKER_HAR_OMSORG,
];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.YTELSEFORDELING];
type EndepunktPanelData = {
  ytelsefordeling: Ytelsefordeling;
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
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OMSORG}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'OmsorgInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={() => !!props.behandling.aksjonspunkt?.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => <OmsorgFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgFaktaInitPanel;
