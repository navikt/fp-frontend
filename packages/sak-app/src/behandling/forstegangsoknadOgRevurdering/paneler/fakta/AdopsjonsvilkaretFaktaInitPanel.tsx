import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Fagsak, FamilieHendelseSamling } from '@navikt/ft-types';
import { FagsakYtelseType } from '@navikt/ft-kodeverk';

import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import AdopsjonFaktaIndex from '@navikt/fp-fakta-adopsjon';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { adopsjonsvilkarene } from '@navikt/fp-kodeverk/src/vilkarType';
import { Soknad } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.OM_SOKER_ER_MANN_SOM_ADOPTERER_ALENE,
  aksjonspunktCodes.ADOPSJONSDOKUMENTAJON,
  aksjonspunktCodes.OM_ADOPSJON_GJELDER_EKTEFELLES_BARN,
];

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
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.ADOPSJONSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'AdopsjonInfoPanel.Adopsjon' })}
    skalPanelVisesIMeny={() => !!props.behandling.vilkår && props.behandling.vilkår.some((v) => adopsjonsvilkarene.some((av) => av === v.vilkarType))}
    renderPanel={(data) => (
      <AdopsjonFaktaIndex
        isForeldrepengerFagsak={fagsak.fagsakYtelseType === FagsakYtelseType.FORELDREPENGER}
        {...data}
      />
    )}
  />
);

export default AdopsjonsvilkaretFaktaInitPanel;
