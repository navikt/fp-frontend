import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselFaktaIndex from '@fpsak-frontend/fakta-fodsel';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { fodselsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.TERMINBEKREFTELSE,
  aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER, EsBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  EsBehandlingApiKeys.FAMILIEHENDELSE,
  EsBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  EsBehandlingApiKeys.SOKNAD,
  EsBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  familiehendelseOriginalBehandling?: FamilieHendelse;
  soknad: Soknad;
  soknadOriginalBehandling?: Soknad;
}

/**
 * FodselvilkaretFaktaInitPanel
 */
const FodselvilkaretFaktaInitPanel: FunctionComponent<FaktaPanelInitProps> = (props) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.FODSELSVILKARET}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'FodselInfoPanel.Fodsel' })}
    skalPanelVisesIMeny={(initData) => initData && initData.vilkar.some((v) => fodselsvilkarene.includes(v.vilkarType.kode))}
    renderPanel={(data) => <FodselFaktaIndex {...data} />}
  />
);

export default FodselvilkaretFaktaInitPanel;
