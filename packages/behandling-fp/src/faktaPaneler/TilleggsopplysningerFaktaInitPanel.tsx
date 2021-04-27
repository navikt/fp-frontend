import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import TilleggsopplysningerFaktaIndex from '@fpsak-frontend/fakta-tilleggsopplysninger';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Soknad } from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.TILLEGGSOPPLYSNINGER];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  soknad: Soknad;
}

/**
 * TilleggsopplysningerFaktaInitPanel
 */
const TilleggsopplysningerFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.TILLEGGSOPPLYSNINGER}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'TilleggsopplysningerInfoPanel.Tilleggsopplysninger' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter?.some((ap) => ap.definisjon.kode === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <TilleggsopplysningerFaktaIndex {...data} />}
  />
);

export default TilleggsopplysningerFaktaInitPanel;
