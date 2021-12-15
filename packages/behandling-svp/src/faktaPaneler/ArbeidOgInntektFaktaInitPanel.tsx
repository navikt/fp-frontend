import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidOgInntektFaktaIndex from '@fpsak-frontend/fakta-arbeid-og-inntekt';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId, ArbeidOgInntektsmelding, AksessRettigheter,
} from '@fpsak-frontend/types';
import { FaktaDefaultInitPanel, FaktaPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { SvpBehandlingApiKeys, requestSvpApi } from '../data/svpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.ARBEID_OG_INNTEKT];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}

interface OwnProps {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
}

const ArbeidOgInntektFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData>
    {...props}
    requestApi={requestSvpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.ARBEID_OG_INNTEKT}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'ArbeidOgInntektInfoPanel.Title' })}
    skalPanelVisesIMeny={({ arbeidOgInntekt }) => !!arbeidOgInntekt}
    renderPanel={(data) => (
      <ArbeidOgInntektFaktaIndex
        arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
        erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
        {...data}
      />
    )}
  />
);

export default ArbeidOgInntektFaktaInitPanel;
