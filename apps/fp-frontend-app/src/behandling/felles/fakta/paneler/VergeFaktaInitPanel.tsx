import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Verge } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../FaktaDefaultInitPanel';
import { BehandlingFellesApiKeys } from '../../data/behandlingFellesApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.AVKLAR_VERGE];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.VERGE];
type EndepunktPanelData = {
  verge: Verge;
};

/**
 * VergeFaktaInitPanel
 */
const VergeFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = ({
  behandling,
  valgtFaktaSteg,
  registrerFaktaPanel,
  requestApi,
}) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    behandling={behandling}
    valgtFaktaSteg={valgtFaktaSteg}
    registrerFaktaPanel={registrerFaktaPanel}
    requestApi={requestApi}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.VERGE}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'RegistrereVergeInfoPanel.Info' })}
    skalPanelVisesIMeny={() => !!behandling.aksjonspunkt.some(ap => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={data => <VergeFaktaIndex {...data} />}
  />
);

export default VergeFaktaInitPanel;
