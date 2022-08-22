import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
  aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE, aksjonspunktCodes.OVERSTYR_AVKLAR_STARTDATO];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.UTLAND_DOK_STATUS, BehandlingFellesApiKeys.SOKNAD];
type EndepunktPanelData = {
  utlandDokStatus?: {
    dokStatus: string;
  };
  soknad: Soknad;
}

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
const SakenFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.SAKEN}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'SakenFaktaPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={(data) => <SakenFaktaIndex {...data} />}
  />
);

export default SakenFaktaInitPanel;
