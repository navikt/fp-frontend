import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Fagsak, Aksjonspunkt, FamilieHendelseSamling } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AdopsjonFaktaIndex from '@fpsak-frontend/fakta-adopsjon';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { adopsjonsvilkarene } from '@fpsak-frontend/kodeverk/src/vilkarType';
import { Soknad, Vilkar } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.VILKAR];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
}

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingFellesApiKeys.FAMILIEHENDELSE,
  BehandlingFellesApiKeys.SOKNAD,
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
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.ADOPSJONSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'AdopsjonInfoPanel.Adopsjon' })}
    skalPanelVisesIMeny={(initData) => !!initData?.vilkar && initData.vilkar.some((v) => adopsjonsvilkarene.some((av) => av === v.vilkarType))}
    renderPanel={(data) => (
      <AdopsjonFaktaIndex
        isForeldrepengerFagsak={fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER}
        {...data}
      />
    )}
  />
);

export default AdopsjonsvilkaretFaktaInitPanel;
