import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilleggsopplysningerFaktaIndex from '@fpsak-frontend/fakta-tilleggsopplysninger';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.TILLEGGSOPPLYSNINGER];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [EsBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
}

/**
 * TilleggsopplysningerFaktaInitPanel
 */
const TilleggsopplysningerFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.TILLEGGSOPPLYSNINGER}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'TilleggsopplysningerInfoPanel.Tilleggsopplysninger' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter?.some((ap) => ap.definisjon.kode === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <TilleggsopplysningerFaktaIndex {...data} />}
  />
);

export default TilleggsopplysningerFaktaInitPanel;
