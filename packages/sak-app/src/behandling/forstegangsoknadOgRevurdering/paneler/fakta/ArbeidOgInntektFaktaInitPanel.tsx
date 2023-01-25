import React, {
  FunctionComponent, useCallback, useMemo,
} from 'react';
import { useIntl } from 'react-intl';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import aksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import ArbeidOgInntektFaktaIndex from '@navikt/fp-fakta-arbeid-og-inntekt';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidOgInntektsmelding, AksessRettigheter } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../../felles/typer/faktaPanelInitProps';
import { BehandlingFellesApiKeys } from '../../../felles/data/behandlingFellesApi';
import FaktaDefaultInitPanel from '../../../felles/fakta/FaktaDefaultInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingFellesApiKeys.ARBEID_OG_INNTEKT];
type EndepunktPanelData = {
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
      behandlingVersjon: props.behandling.versjon,
    }).then(() => hentBehandling(false));
  }, [props.behandling.versjon]);

  return (
    <FaktaDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      faktaPanelKode={FaktaPanelCode.ARBEID_OG_INNTEKT}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'ArbeidOgInntektInfoPanel.Title' })}
      skalPanelVisesIMeny={() => requestApi.hasPath(BehandlingFellesApiKeys.ARBEID_OG_INNTEKT.name)
        && !props.behandling.aksjonspunkt.some((ap) => aksjonspunktCodes.AVKLAR_ARBEIDSFORHOLD === ap.definisjon)}
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
