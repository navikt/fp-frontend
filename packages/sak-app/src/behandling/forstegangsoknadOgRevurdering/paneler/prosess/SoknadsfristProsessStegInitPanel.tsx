import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';

import skalViseProsessPanel from '../../../felles/utils/prosess/skalViseProsessPanel';
import ProsessDefaultInitPanel from '../../../felles/components/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../../felles/types/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
}

const SoknadsfristProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = (props) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
    skalPanelVisesIMeny={(data) => skalViseProsessPanel(data.aksjonspunkter)}
    renderPanel={(data) => (
      <VurderSoknadsfristForeldrepengerIndex
        {...data}
      />
    )}
  />
);

export default SoknadsfristProsessStegInitPanel;
