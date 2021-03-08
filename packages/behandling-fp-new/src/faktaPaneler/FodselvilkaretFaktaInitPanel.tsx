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
import { FaktaPanelInitProps, FaktaVanligOppforselInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, restApiFpHooks } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.TERMINBEKREFTELSE,
  aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  FpBehandlingApiKeys.SOKNAD,
  FpBehandlingApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
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
  <FaktaVanligOppforselInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    useMultipleRestApi={restApiFpHooks.useMultipleRestApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.FODSELSVILKARET}
    faktaPanelTekst={getPackageIntl().formatMessage({ id: 'FodselInfoPanel.Fodsel' })}
    skalVisesFn={(initData) => initData && initData.vilkar.some((v) => fodselsvilkarene.includes(v.vilkarType.kode))}
    render={(data) => <FodselFaktaIndex {...data} />}
  />
);

export default FodselvilkaretFaktaInitPanel;
