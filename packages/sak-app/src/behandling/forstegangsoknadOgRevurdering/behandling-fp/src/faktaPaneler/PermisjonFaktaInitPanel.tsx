import React, { FunctionComponent } from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import PermisjonFaktaIndex from '@fpsak-frontend/fakta-permisjon';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, ArbeidOgInntektsmelding,
} from '@fpsak-frontend/types';
import { FaktaDefaultInitPanel, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_ARBEIDSFORHOLD_PERMISJON];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.ARBEID_OG_INNTEKT];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}

interface OwnProps {
  saksnummer: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

const PermisjonFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  saksnummer,
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.PERMISJON}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'PermisjonFaktaInitPanel.Title' })}
    skalPanelVisesIMeny={(initData) => !!initData?.aksjonspunkter?.some((ap) => ap.definisjon === AKSJONSPUNKT_KODER[0])}
    renderPanel={(data) => (
      <PermisjonFaktaIndex
        saksnummer={saksnummer}
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default PermisjonFaktaInitPanel;
