import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt, FamilieHendelseSamling } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgOgForeldreansvarFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-foreldreansvar';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { InntektArbeidYtelse, Personoversikt, Soknad } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OMSORGSOVERTAKELSE];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.SOKNAD, BehandlingFellesApiKeys.FAMILIEHENDELSE, BehandlingFellesApiKeys.INNTEKT_ARBEID_YTELSE];
type EndepunktPanelData = {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  inntektArbeidYtelse: InntektArbeidYtelse;
}

interface OwnProps {
  personoversikt: Personoversikt;
}

/**
 * OmsorgvilkaretFaktaInitPanel
 */
const OmsorgvilkaretFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  personoversikt,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OMSORGSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'OmsorgOgForeldreansvarInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter?.some((ap) => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <OmsorgOgForeldreansvarFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgvilkaretFaktaInitPanel;
