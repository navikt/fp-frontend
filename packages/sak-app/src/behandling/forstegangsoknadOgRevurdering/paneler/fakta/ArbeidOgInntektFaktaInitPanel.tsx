import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt, ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import ArbeidOgInntektFaktaIndex from '@fpsak-frontend/fakta-arbeid-og-inntekt';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { ArbeidOgInntektsmelding, AksessRettigheter } from '@fpsak-frontend/types';

import FaktaPanelInitProps from '../../../felles/types/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/components/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER, BehandlingFellesApiKeys.ARBEID_OG_INNTEKT];
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
  const intl = useIntl();

  const { requestApi } = props;
  const { useRestApiRunner } = useMemo(() => RestApiHooks.initHooks(requestApi), [requestApi]);

  const { startRequest: registrerArbeidsforhold } = useRestApiRunner(BehandlingFellesApiKeys.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD);
  const { startRequest: lagreVurdering } = useRestApiRunner(BehandlingFellesApiKeys.ARBEID_OG_INNTEKT_LAGRE_VURDERING);
  const { startRequest: åpneForNyVurdering } = useRestApiRunner(BehandlingFellesApiKeys.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING);
  const åpneForNyVurderingOgOppfriskBehandling = useCallback(() => {
    åpneForNyVurdering({
      behandlingUuid,
      behandlingVersjon: props.behandlingVersjon,
    }).then(() => hentBehandling(false));
  }, [props.behandlingVersjon]);

  return (
    <FaktaDefaultInitPanel<EndepunktInitData>
      {...props}
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
          // @ts-ignore Eg trur denne feilar grunna feil i typescript-pakka. Sjekk på eit seinare tidspunkt om denne er retta
          {...data}
        />
      )}
    />
  );
};

export default ArbeidOgInntektFaktaInitPanel;
