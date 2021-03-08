import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import { adopsjonsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import {
  Aksjonspunkt, Fagsak, FamilieHendelseSamling, Soknad, Vilkar,
} from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaVanligOppforselInitPanel } from '@fpsak-frontend/behandling-felles-ny';
import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, restApiFpHooks } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  FpBehandlingApiKeys.FAMILIEHENDELSE,
  FpBehandlingApiKeys.SOKNAD,
];
type EndepunktPanelData = {
  familiehendelse: FamilieHendelseSamling;
  soknad: Soknad;
}

interface OwnProps {
  fagsak: Fagsak;
}

/**
 * AdopsjonsvilkaretFaktaInitPanel
 */
const AdopsjonsvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  fagsak,
  ...props
}) => (
  <FaktaVanligOppforselInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    useMultipleRestApi={restApiFpHooks.useMultipleRestApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.ADOPSJONSVILKARET}
    faktaPanelTekst={getPackageIntl().formatMessage({ id: 'AdopsjonInfoPanel.Adopsjon' })}
    skalVisesFn={(initData) => initData && initData.vilkar.some((v) => adopsjonsvilkarene.includes(v.vilkarType.kode))}
    render={(data) => (
      <AdopsjonFaktaIndex
        isForeldrepengerFagsak={fagsak.sakstype.kode === fagsakYtelseType.FORELDREPENGER}
        {...data}
      />
    )}
  />
);

export default AdopsjonsvilkaretFaktaInitPanel;
