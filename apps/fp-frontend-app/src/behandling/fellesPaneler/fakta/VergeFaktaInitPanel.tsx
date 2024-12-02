import React from 'react';
import { useIntl } from 'react-intl';

import { VergeFaktaIndex } from '@navikt/fp-fakta-verge';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { Verge } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

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
    skalPanelVisesIMeny={() => AKSJONSPUNKT_KODER.some(kode => hasAksjonspunkt(kode, behandling.aksjonspunkt))}
    renderPanel={data => <VergeFaktaIndex {...data} />}
  />
);
