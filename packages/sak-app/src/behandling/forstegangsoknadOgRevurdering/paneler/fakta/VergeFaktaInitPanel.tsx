import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VergeFaktaIndex from '@fpsak-frontend/fakta-verge';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Verge } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_VERGE];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.VERGE];
type EndepunktPanelData = {
  verge: Verge;
}

/**
 * VergeFaktaInitPanel
 */
const VergeFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  valgtFaktaSteg,
  behandling,
  registrerFaktaPanel,
  requestApi,
}) => (
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    valgtFaktaSteg={valgtFaktaSteg}
    behandling={behandling}
    registrerFaktaPanel={registrerFaktaPanel}
    requestApi={requestApi}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.VERGE}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'RegistrereVergeInfoPanel.Info' })}
    skalPanelVisesIMeny={() => !!behandling.aksjonspunkter?.some((ap) => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <VergeFaktaIndex {...data} />}
  />
);

export default VergeFaktaInitPanel;
