import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import SakenFaktaIndex from '@fpsak-frontend/fakta-saken';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaVanligOppforselInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, restApiFpHooks } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.AUTOMATISK_MARKERING_AV_UTENLANDSSAK,
  aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE,
];

const OVERSTYRING_AP_CODES = [aksjonspunktCodes.MANUELL_MARKERING_AV_UTLAND_SAKSTYPE];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.UTLAND_DOK_STATUS];
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
  <FaktaVanligOppforselInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    useMultipleRestApi={restApiFpHooks.useMultipleRestApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    overstyringApKoder={OVERSTYRING_AP_CODES}
    faktaPanelKode={faktaPanelCodes.SAKEN}
    faktaPanelTekst={getPackageIntl().formatMessage({ id: 'SakenFaktaPanel.Title' })}
    skalVisesFn={() => true}
    render={(data) => <SakenFaktaIndex {...data} />}
  />
);

export default SakenFaktaInitPanel;
