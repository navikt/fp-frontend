import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [EsBehandlingApiKeys.UTLAND_DOK_STATUS];
type EndepunktPanelData = {
  utlandDokStatus?: {
    dokStatus: string;
  };
}

/**
 * SakenFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
const SakenFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={FaktaPanelCode.SAKEN}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'SakenFaktaPanel.Title' })}
    skalPanelVisesIMeny={() => true}
    renderPanel={(data) => <SakenFaktaIndex {...data} />}
  />
);

export default SakenFaktaInitPanel;
