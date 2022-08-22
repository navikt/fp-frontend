import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt, FamilieHendelse, FamilieHendelseSamling } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import FodselFaktaIndex from '@fpsak-frontend/fakta-fodsel';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { fodselsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Soknad, Vilkar } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.TERMINBEKREFTELSE,
  aksjonspunktCodes.SJEKK_MANGLENDE_FODSEL,
  aksjonspunktCodes.VURDER_OM_VILKAR_FOR_SYKDOM_ER_OPPFYLT,
];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.FAMILIEHENDELSE,
  BehandlingFellesApiKeys.FAMILIEHENDELSE_ORIGINAL_BEHANDLING,
  BehandlingFellesApiKeys.SOKNAD,
  BehandlingFellesApiKeys.SOKNAD_ORIGINAL_BEHANDLING,
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
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FODSELSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'FodselInfoPanel.Fodsel' })}
    skalPanelVisesIMeny={(initData) => !!initData?.vilkar && initData.vilkar.some((v) => fodselsvilkarene.some((fv) => fv === v.vilkarType))}
    renderPanel={(data) => <FodselFaktaIndex {...data} />}
  />
);

export default FodselvilkaretFaktaInitPanel;
