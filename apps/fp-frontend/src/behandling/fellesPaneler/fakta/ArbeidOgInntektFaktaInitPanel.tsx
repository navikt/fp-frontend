import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ArbeidOgInntektFaktaIndex } from '@navikt/fp-fakta-arbeid-og-inntekt';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { FaktaPanelCode } from '@navikt/fp-konstanter';
import type {
  ArbeidsgiverOpplysningerPerId,
  ManglendeInntektsmeldingVurdering,
  ManueltArbeidsforhold,
} from '@navikt/fp-types';
import { harAksjonspunkt } from '@navikt/fp-utils';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { FaktaDefaultInitPanel } from '../../felles/fakta/FaktaDefaultInitPanel';
import { useStandardFaktaPanelProps } from '../../felles/fakta/useStandardFaktaPanelProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.VURDER_ARBEIDSFORHOLD_INNTEKTSMELDING];

interface Props {
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
}

export const ArbeidOgInntektFaktaInitPanel = ({ arbeidsgiverOpplysningerPerId }: Props) => {
  const intl = useIntl();

  const { behandling, hentOgSettBehandling, rettigheter } = use(BehandlingDataContext);

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
      standardPanelProps={standardPanelProps}
      faktaPanelKode={FaktaPanelCode.ARBEID_OG_INNTEKT}
      faktaPanelMenyTekst={intl.formatMessage({ id: 'FaktaInitPanel.Title.ArbeidOgInntekt' })}
      skalPanelVisesIMeny={
        harLenke(behandling, 'ARBEID_OG_INNTEKT') &&
        !harAksjonspunkt(AksjonspunktKode.UTGÅTT_5080, behandling.aksjonspunkt)
      }
    >
      {arbeidOgInntekt ? (
        <ArbeidOgInntektFaktaIndex
          arbeidOgInntekt={arbeidOgInntekt}
          arbeidsgiverOpplysningerPerId={arbeidsgiverOpplysningerPerId}
          erOverstyrer={rettigheter.kanOverstyreAccess.isEnabled}
          registrerArbeidsforhold={registrerArbeidsforhold}
          lagreVurdering={lagreVurdering}
          settBehandlingPåVentCallback={settBehandlingPåVent}
          åpneForNyVurdering={åpneForNyVurdering}
        />
      ) : (
        <LoadingPanel />
      )}
    </FaktaDefaultInitPanel>
  );
};
