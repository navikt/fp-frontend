import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { PermisjonFaktaIndex } from '@navikt/fp-fakta-permisjon';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import {
  ArbeidsgiverOpplysningerPerId, ArbeidOgInntektsmelding,
} from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_ARBEIDSFORHOLD_PERMISJON];

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
  <FaktaDefaultInitPanel<EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.PERMISJON}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'PermisjonFaktaInitPanel.Title' })}
    skalPanelVisesIMeny={() => !!props.behandling.aksjonspunkt.some((ap) => ap.definisjon === AKSJONSPUNKT_KODER[0])}
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
