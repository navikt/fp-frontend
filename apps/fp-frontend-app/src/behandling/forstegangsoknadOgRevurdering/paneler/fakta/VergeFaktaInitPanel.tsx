import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Verge } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.AVKLAR_VERGE];

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
  <FaktaDefaultInitPanel<EndepunktPanelData>
    valgtFaktaSteg={valgtFaktaSteg}
    behandling={behandling}
    registrerFaktaPanel={registrerFaktaPanel}
    requestApi={requestApi}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.VERGE}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'RegistrereVergeInfoPanel.Info' })}
    skalPanelVisesIMeny={() => !!behandling.aksjonspunkt?.some((ap) => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <VergeFaktaIndex {...data} />}
  />
);

export default VergeFaktaInitPanel;
