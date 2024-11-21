import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Verge } from '@navikt/fp-types';

import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AVKLAR_VERGE];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.VERGE];
type EndepunktPanelData = {
  verge: Verge;
};

export const VergeFaktaInitPanel = ({ valgtFaktaSteg, behandling, registrerFaktaPanel }: FaktaPanelInitProps) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    valgtFaktaSteg={valgtFaktaSteg}
    behandling={behandling}
    registrerFaktaPanel={registrerFaktaPanel}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.VERGE}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'RegistrereVergeInfoPanel.Info' })}
    skalPanelVisesIMeny={() => !!behandling.aksjonspunkt?.some(ap => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={data => <VergeFaktaIndex {...data} />}
  />
);
