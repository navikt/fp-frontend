import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { FamilieHendelseSamling } from '@navikt/ft-types';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { OmsorgOgForeldreansvarFaktaIndex } from '@navikt/fp-fakta-omsorg-og-foreldreansvar';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { InntektArbeidYtelse, Personoversikt, Soknad } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.OMSORGSOVERTAKELSE];

const ENDEPUNKTER_PANEL_DATA = [
  BehandlingApiKeys.SOKNAD,
  BehandlingApiKeys.FAMILIEHENDELSE,
  BehandlingApiKeys.INNTEKT_ARBEID_YTELSE,
];
type EndepunktPanelData = {
  soknad: Soknad;
  familiehendelse: FamilieHendelseSamling;
  inntektArbeidYtelse: InntektArbeidYtelse;
};

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
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.OMSORGSVILKARET}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'OmsorgOgForeldreansvarInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={() => !!props.behandling.aksjonspunkt.some(ap => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={data => <OmsorgOgForeldreansvarFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgvilkaretFaktaInitPanel;
