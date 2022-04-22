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
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import { SvpBehandlingApiKeys, restApiSvpHooks, requestSvpApi } from '../data/svpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER, SvpBehandlingApiKeys.ARBEID_OG_INNTEKT];
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
  const { startRequest: registrerArbeidsforhold } = restApiSvpHooks.useRestApiRunner(SvpBehandlingApiKeys.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD);
  const { startRequest: lagreVurdering } = restApiSvpHooks.useRestApiRunner(SvpBehandlingApiKeys.ARBEID_OG_INNTEKT_LAGRE_VURDERING);
  const { startRequest: åpneForNyVurdering } = restApiSvpHooks.useRestApiRunner(SvpBehandlingApiKeys.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING);
  const åpneForNyVurderingOgOppfriskBehandling = useCallback(() => {
    åpneForNyVurdering({
      behandlingUuid,
      behandlingVersjon: props.behandlingVersjon,
    }).then(() => hentBehandling(false));
  }, [props.behandlingVersjon]);

  return (
    <FaktaDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestSvpApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      faktaPanelKode={FaktaPanelCode.ARBEID_OG_INNTEKT}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'ArbeidOgInntektInfoPanel.Title' })}
      skalPanelVisesIMeny={({ aksjonspunkter, arbeidOgInntekt }) => !!arbeidOgInntekt
        && !aksjonspunkter.some((ap) => aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD === ap.definisjon)}
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
