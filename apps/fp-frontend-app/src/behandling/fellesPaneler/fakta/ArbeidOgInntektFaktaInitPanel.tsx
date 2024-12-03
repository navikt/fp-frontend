import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';

import { ArbeidOgInntektFaktaIndex } from '@navikt/fp-fakta-arbeid-og-inntekt';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { AksessRettigheter, ArbeidOgInntektsmelding, ArbeidsgiverOpplysningerPerId } from '@navikt/fp-types';

import { BehandlingApiKeys, requestBehandlingApi, restBehandlingApiHooks } from '../../../data/behandlingContextApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ARBEID_OG_INNTEKT];
type EndepunktPanelData = {
  arbeidOgInntekt: ArbeidOgInntektsmelding;
};

interface Props {
  saksnummer: string;
  behandlingUuid: string;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  rettigheter: AksessRettigheter;
  hentOgSettBehandling: () => void;
}

export const ArbeidOgInntektFaktaInitPanel = ({
  saksnummer,
  behandlingUuid,
  arbeidsgiverOpplysningerPerId,
  rettigheter,
  hentOgSettBehandling,
  ...props
}: Props & FaktaPanelInitProps) => {
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
        frist: params.frist ?? '',
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
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.ArbeidOgInntekt' })}
      skalPanelVisesIMeny={() =>
        requestBehandlingApi.hasPath(BehandlingApiKeys.ARBEID_OG_INNTEKT.name) &&
        !hasAksjonspunkt(AksjonspunktKode.AVKLAR_ARBEIDSFORHOLD, props.behandling.aksjonspunkt)
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
