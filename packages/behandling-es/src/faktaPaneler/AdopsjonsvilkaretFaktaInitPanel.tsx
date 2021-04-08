import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { adopsjonsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER, EsBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  EsBehandlingApiKeys.FAMILIEHENDELSE,
  EsBehandlingApiKeys.SOKNAD,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
}

/**
 * AdopsjonsvilkaretFaktaInitPanel
 */
const AdopsjonsvilkaretFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.ADOPSJONSVILKARET}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'AdopsjonInfoPanel.Adopsjon' })}
    skalPanelVisesIMeny={(initData) => initData && initData.vilkar.some((v) => adopsjonsvilkarene.includes(v.vilkarType.kode))}
    renderPanel={(data) => (
      <AdopsjonFaktaIndex
        isForeldrepengerFagsak={false}
        {...data}
      />
    )}
  />
);

export default AdopsjonsvilkaretFaktaInitPanel;
