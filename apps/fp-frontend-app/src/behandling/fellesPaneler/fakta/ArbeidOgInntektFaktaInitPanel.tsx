import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ArbeidOgInntektFaktaIndex } from '@navikt/fp-fakta-arbeid-og-inntekt';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import {
  AksessRettigheter,
  ArbeidsgiverOpplysningerPerId,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import { BehandlingRel, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

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

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: arbeidOgInntekt } = useQuery(api.arbeidOgInntektOptions(props.behandling));

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
    <FaktaDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ARBEID_OG_INNTEKT}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.ArbeidOgInntekt' })}
      skalPanelVisesIMeny={
        standardPanelProps.behandling.links.some(link => link.rel === BehandlingRel.ARBEID_OG_INNTEKT) &&
        !hasAksjonspunkt(AksjonspunktKode.AVKLAR_ARBEIDSFORHOLD, props.behandling.aksjonspunkt)
      }
    >
      {arbeidOgInntekt ? (
        <ArbeidOgInntektFaktaIndex
          arbeidOgInntekt={arbeidOgInntekt}
          saksnummer={saksnummer}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
          registrerArbeidsforhold={registrerArbeidsforhold}
          lagreVurdering={lagreVurdering}
          settBehandlingPåVentCallback={settBehandlingPåVent}
          åpneForNyVurdering={åpneForNyVurdering}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
