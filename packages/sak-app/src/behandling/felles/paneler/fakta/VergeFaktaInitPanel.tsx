import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VergeFaktaIndex from '@fpsak-frontend/fakta-verge';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Verge } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../types/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../components/fakta/FaktaDefaultInitPanel';
import { BehandlingFellesApiKeys } from '../../data/behandlingFellesApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_VERGE];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.VERGE];
type EndepunktPanelData = {
  verge: Verge;
}

/**
 * VergeFaktaInitPanel
 */
const VergeFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.VERGE}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'RegistrereVergeInfoPanel.Info' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter?.some((ap) => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <VergeFaktaIndex {...data} />}
  />
);

export default VergeFaktaInitPanel;
