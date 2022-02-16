import React, {
  FunctionComponent, useCallback,
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
import { FpBehandlingApiKeys, restApiFpHooks, requestFpApi } from '../data/fpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER, FpBehandlingApiKeys.ARBEID_OG_INNTEKT];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  arbeidOgInntekt: ArbeidOgInntektsmelding;
}

interface OwnProps {
  saksnummer: string;
  behandlingUuid: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
  settBehandlingPåVentCallback: (params: {
    frist: string;
    ventearsak: string;
  }) => Promise<any>
  hentBehandling: (keepData: boolean) => Promise<any>;
}

const ArbeidOgInntektFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  saksnummer,
  behandlingUuid,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  settBehandlingPåVentCallback,
  hentBehandling,
  ...props
}) => {
  const { startRequest: registrerArbeidsforhold } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD);
  const { startRequest: lagreVurdering } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.ARBEID_OG_INNTEKT_LAGRE_VURDERING);
  const { startRequest: åpneForNyVurdering } = restApiFpHooks.useRestApiRunner(FpBehandlingApiKeys.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING);
  const åpneForNyVurderingOgOppfriskBehandling = useCallback(() => {
    åpneForNyVurdering({
      behandlingUuid,
      behandlingVersjon: props.behandlingVersjon,
    }).then(() => hentBehandling(false));
  }, [props.behandlingVersjon]);

  return (
    <FaktaDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestFpApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      faktaPanelKode={FaktaPanelCode.ARBEID_OG_INNTEKT}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'ArbeidOgInntektInfoPanel.Title' })}
      skalPanelVisesIMeny={({ arbeidOgInntekt }) => !!arbeidOgInntekt}
      renderPanel={(data) => (
        <ArbeidOgInntektFaktaIndex
          saksnummer={saksnummer}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
          registrerArbeidsforhold={registrerArbeidsforhold}
          lagreVurdering={lagreVurdering}
          settBehandlingPåVentCallback={settBehandlingPåVentCallback}
          åpneForNyVurdering={åpneForNyVurderingOgOppfriskBehandling}
          {...data}
        />
      )}
    />
  );
};

export default ArbeidOgInntektFaktaInitPanel;
