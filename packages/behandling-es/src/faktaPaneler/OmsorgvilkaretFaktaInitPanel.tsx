import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgOgForeldreansvarFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-foreldreansvar';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, FamilieHendelseSamling, InntektArbeidYtelse, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';

import getPackageIntl from '../../i18n/getPackageIntl';
import { EsBehandlingApiKeys, requestEsApi } from '../data/esBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.OMSORGSOVERTAKELSE];

const ENDEPUNKTER_INIT_DATA = [EsBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [EsBehandlingApiKeys.SOKNAD, EsBehandlingApiKeys.FAMILIEHENDELSE, EsBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
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
    requestApi={requestEsApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.OMSORGSVILKARET}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'OmsorgOgForeldreansvarInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter?.some((ap) => ap.definisjon.kode === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <OmsorgOgForeldreansvarFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgvilkaretFaktaInitPanel;
