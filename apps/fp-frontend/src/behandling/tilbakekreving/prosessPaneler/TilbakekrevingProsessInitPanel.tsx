import { type ComponentProps, use } from 'react';
import { useIntl } from 'react-intl';

import {
  type BeregnBeløpParams,
  TilbakekrevingAksjonspunktCodes,
  TilbakekrevingProsessIndex,
} from '@navikt/ft-prosess-tilbakekreving';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { erAksjonspunktÅpent, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { Aksjonspunkt, AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { useMellomlagretFormData } from '@navikt/fp-utils';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

import '@navikt/ft-prosess-tilbakekreving/dist/style.css';

const AKSJONSPUNKT_KODER = [TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const TilbakekrevingProsessInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const intl = useIntl();

  const { behandling, fagsak } = use(BehandlingDataContext);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(behandling);

  const { data: perioderForeldelse } = useQuery(api.tilbakekreving.perioderForeldelseOptions(behandling));
  const { data: vilkårvurderingsperioder } = useQuery(api.tilbakekreving.vilkårsvurderingsperioderOptions(behandling));
  const { data: vilkårvurdering } = useQuery(api.tilbakekreving.vilkårsvurderingOptions(behandling));

  const { mutateAsync: beregnBeløp } = useMutation({
    mutationFn: (values: BeregnBeløpParams) => api.tilbakekreving.beregneBeløp(values),
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.TILBAKEKREVING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Tilbakekreving' })}
      skalPanelVisesIMeny
      overstyrtStatus={finnTilbakekrevingStatus(standardPanelProps.aksjonspunkterForPanel)}
    >
      {perioderForeldelse && vilkårvurderingsperioder && vilkårvurdering ? (
        <Wrapper
          perioderForeldelse={perioderForeldelse}
          vilkarvurderingsperioder={vilkårvurderingsperioder}
          vilkarvurdering={vilkårvurdering}
          // @ts-expect-error Johannes ser på denne - Ser ut som det er feil i ft-repoet
          kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
          beregnBelop={(data: BeregnBeløpParams) => beregnBeløp(data)}
          // @ts-expect-error Johannes ser på denne - mismatch mellom type i ft-repo og generert type
          relasjonsRolleType={fagsak.relasjonsRolleType}
          relasjonsRolleTypeKodeverk={standardPanelProps.alleKodeverk['RelasjonsRolleType']}
          {...standardPanelProps}
          behandlingUuid={behandling.uuid}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};

const Wrapper = (props: Omit<ComponentProps<typeof TilbakekrevingProsessIndex>, 'formData' | 'setFormData'>) => {
  const { mellomlagretFormData, setMellomlagretFormData } =
    useMellomlagretFormData<React.ComponentProps<typeof TilbakekrevingProsessIndex>['formData']>();
  return (
    <TilbakekrevingProsessIndex {...props} formData={mellomlagretFormData} setFormData={setMellomlagretFormData} />
  );
};

const finnTilbakekrevingStatus = (aksjonspunkt: Aksjonspunkt[]): string => {
  if (aksjonspunkt.length > 0) {
    return aksjonspunkt.some(erAksjonspunktÅpent) ? VilkarUtfallType.IKKE_VURDERT : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};
