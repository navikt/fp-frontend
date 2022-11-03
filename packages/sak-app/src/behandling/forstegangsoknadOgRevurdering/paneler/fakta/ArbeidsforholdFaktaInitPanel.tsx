import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidsforholdFaktaIndex from '@fpsak-frontend/fakta-arbeidsforhold';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId,
} from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.ARBEID_OG_INNTEKT];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

/**
 * ArbeidsforholdFaktaInitPanel
 *
 * Dette faktapanelet skal alltid vises
 */
const ArbeidsforholdFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}) => (
  <FaktaDefaultInitPanel<Record<string, never>, EndepunktPanelData>
    {...props}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.ARBEIDSFORHOLD}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'ArbeidsforholdInfoPanel.Title' })}
    skalPanelVisesIMeny={() => props.behandling.aksjonspunkt
      && props.behandling.aksjonspunkt.some((ap) => AKSJONSPUNKT_KODER.some((kode) => kode === ap.definisjon))}
    renderPanel={(data) => (
      <ArbeidsforholdFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        {...data}
      />
    )}
  />
);

export default ArbeidsforholdFaktaInitPanel;
