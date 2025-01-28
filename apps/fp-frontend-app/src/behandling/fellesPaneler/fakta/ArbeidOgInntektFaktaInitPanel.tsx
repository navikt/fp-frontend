import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ArbeidOgInntektFaktaIndex } from '@navikt/fp-fakta-arbeid-og-inntekt';
import { AksjonspunktKode, hasAksjonspunkt } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import {
  ArbeidsgiverOpplysningerPerId,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';
import { FaktaPanelInitProps } from '../../felles/typer/faktaPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const ArbeidOgInntektFaktaInitPanel = ({
  arbeidsgiverOpplysningerPerId,
  ...props
}: Props & FaktaPanelInitProps) => {
  const intl = useIntl();

  const { behandling, fagsak, hentOgSettBehandling, rettigheter } = use(BehandlingDataContext);

  const standardPanelProps = useStandardFaktaPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  const { data: arbeidOgInntekt } = useQuery(api.arbeidOgInntektOptions(behandling));

  const { mutate: settBehandlingPåVent } = useMutation({
    mutationFn: (values: { frist?: string; ventearsak: string }) =>
      api.settBehandlingPåVent({
        frist: values.frist ?? '',
        ventearsak: values.ventearsak,
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
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
        behandlingUuid: behandling.uuid,
        behandlingVersjon: behandling.versjon,
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
        harLenke(behandling, 'ARBEID_OG_INNTEKT') &&
        !hasAksjonspunkt(AksjonspunktKode.AVKLAR_ARBEIDSFORHOLD, behandling.aksjonspunkt)
      }
    >
      {arbeidOgInntekt ? (
        <ArbeidOgInntektFaktaIndex
          arbeidOgInntekt={arbeidOgInntekt}
          saksnummer={fagsak.saksnummer}
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
