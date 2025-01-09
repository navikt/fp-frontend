import { useIntl } from 'react-intl';

import { useMutation } from '@tanstack/react-query';

import { ArbeidOgInntektFaktaIndex } from '@navikt/fp-fakta-arbeid-og-inntekt';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import {
  AksessRettigheter,
  ArbeidOgInntektsmelding,
  ArbeidsgiverOpplysningerPerId,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
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

  const api = useBehandlingApi(props.behandling);

  const { mutate: settBehandlingPåVent } = useMutation({
    mutationFn: (values: { frist?: string; ventearsak: string }) =>
      api.settBehandlingPåVent({
        frist: values.frist ?? '',
        ventearsak: values.ventearsak,
        behandlingUuid,
        behandlingVersjon: props.behandling.versjon,
      }),
    onSuccess: () => hentOgSettBehandling(),
  });

  const { mutateAsync: registrerArbeidsforhold } = useMutation({
    mutationFn: (values: ManueltArbeidsforhold) => api.registrerArbeidsforholdForAOI(values),
  });

  const { mutateAsync: lagreVurdering } = useMutation({
    mutationFn: (values: ManglendeInntektsmeldingVurdering) => api.lagreVurderingForAOI(values),
  });

  const { mutate: åpneForNyVurdering } = useMutation({
    mutationFn: () =>
      api.åpneForNyVurderingAOI({
        behandlingUuid,
        behandlingVersjon: props.behandling.versjon,
      }),
    onSuccess: () => hentOgSettBehandling(),
  });

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
          settBehandlingPåVentCallback={settBehandlingPåVent}
          åpneForNyVurdering={åpneForNyVurdering}
          {...data}
        />
      )}
    />
  );
};
