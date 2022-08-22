import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import PermisjonFaktaIndex from '@fpsak-frontend/fakta-permisjon';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, ArbeidOgInntektsmelding,
} from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_ARBEIDSFORHOLD_PERMISJON];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.ARBEID_OG_INNTEKT];
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
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.PERMISJON}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'PermisjonFaktaInitPanel.Title' })}
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
