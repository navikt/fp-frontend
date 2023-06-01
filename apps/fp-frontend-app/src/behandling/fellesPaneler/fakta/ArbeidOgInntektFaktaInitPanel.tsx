import React, { FunctionComponent, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { ArbeidsgiverOpplysningerPerId } from '@navikt/ft-types';

import { AksjonspunktCode } from '@navikt/fp-kodeverk';
import { ArbeidOgInntektFaktaIndex } from '@navikt/fp-fakta-arbeid-og-inntekt';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { ArbeidOgInntektsmelding, AksessRettigheter } from '@navikt/fp-types';

import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ARBEID_OG_INNTEKT];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
};

interface OwnProps {
  saksnummer: string;
  behandlingUuid: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
  hentOgSettBehandling: () => void;
}

const ArbeidOgInntektFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  saksnummer,
  behandlingUuid,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  hentOgSettBehandling,
  ...props
}) => {
  const intl = useIntl();

  const { startRequest: registrerArbeidsforhold } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.ARBEID_OG_INNTEKT_REGISTRER_ARBEIDSFORHOLD,
  );
  const { startRequest: lagreVurdering } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.ARBEID_OG_INNTEKT_LAGRE_VURDERING,
  );
  const { startRequest: settBehandlingPåVent } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_ON_HOLD,
  );
  const { startRequest: åpneForNyVurdering } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.ARBEID_OG_INNTEKT_ÅPNE_FOR_NY_VURDERING,
  );
  const åpneForNyVurderingOgOppfriskBehandling = useCallback(() => {
    åpneForNyVurdering({
      behandlingUuid,
      behandlingVersjon: props.behandling.versjon,
    }).then(() => hentOgSettBehandling());
  }, [props.behandling.versjon]);

  const settBehandlingPåVentOgOppfriskBehandling = useCallback(
    (params: { frist?: string; ventearsak: string }) =>
      settBehandlingPåVent({
        frist: params.frist || '',
        ventearsak: params.ventearsak,
        behandlingUuid,
        behandlingVersjon: props.behandling.versjon,
      }).then(() => hentOgSettBehandling()),
    [props.behandling.versjon],
  );

  return (
    <FaktaDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      faktaPanelKode={FaktaPanelCode.ARBEID_OG_INNTEKT}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'ArbeidOgInntektInfoPanel.Title' })}
      skalPanelVisesIMeny={() =>
        requestBehandlingApi.hasPath(BehandlingApiKeys.ARBEID_OG_INNTEKT.name) &&
        !props.behandling.aksjonspunkt.some(ap => AksjonspunktCode.AVKLAR_ARBEIDSFORHOLD === ap.definisjon)
      }
      renderPanel={data => (
        <ArbeidOgInntektFaktaIndex
          saksnummer={saksnummer}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
          registrerArbeidsforhold={registrerArbeidsforhold}
          lagreVurdering={lagreVurdering}
          settBehandlingPåVentCallback={settBehandlingPåVentOgOppfriskBehandling}
          åpneForNyVurdering={åpneForNyVurderingOgOppfriskBehandling}
          {...data}
        />
      )}
    />
  );
};

export default ArbeidOgInntektFaktaInitPanel;
