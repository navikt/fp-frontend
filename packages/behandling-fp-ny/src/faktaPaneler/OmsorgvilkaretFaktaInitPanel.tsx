import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import OmsorgOgForeldreansvarFaktaIndex from '@fpsak-frontend/fakta-omsorg-og-foreldreansvar';
import { faktaPanelCodes } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, FamilieHendelseSamling, InntektArbeidYtelse, Personoversikt, Soknad,
} from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_VILKAR_FOR_FORELDREANSVAR];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.SOKNAD, FpBehandlingApiKeys.FAMILIEHENDELSE, FpBehandlingApiKeys.INNTEKT_ARBEID_YTELSE];
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
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={faktaPanelCodes.OMSORGSVILKARET}
    faktaPanelMenyTekst={getPackageIntl().formatMessage({ id: 'OmsorgOgForeldreansvarInfoPanel.Omsorg' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter.some((ap) => ap.definisjon.kode === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => <OmsorgOgForeldreansvarFaktaIndex personoversikt={personoversikt} {...data} />}
  />
);

export default OmsorgvilkaretFaktaInitPanel;
