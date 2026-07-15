import { type ComponentProps } from 'react';
import { useIntl } from 'react-intl';

import {
  type BeregnBeløpParams,
  TilbakekrevingAksjonspunktCodes,
  TilbakekrevingProsessIndex,
} from '@navikt/ft-prosess-tilbakekreving';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { Aksjonspunkt, AlleKodeverkTilbakekreving, BehandlingFpTilbake, VilkårUtfallType } from '@navikt/fp-types';
import { erAksjonspunktÅpent, useMellomlagretFormData } from '@navikt/fp-utils';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

import '@navikt/ft-prosess-tilbakekreving/dist/style.css';

const AKSJONSPUNKT_KODER = [TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const TilbakekrevingProsessInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const intl = useIntl();

  const { behandling, fagsak } = useBehandlingDataContext<BehandlingFpTilbake>();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = getBehandlingApi(behandling);

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
          kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
          beregnBelop={(data: BeregnBeløpParams) => beregnBeløp(data)}
          // @ts-expect-error K9 har ein verdi 'DELTAKER' som me ikkje har. Legg til?
          relasjonsRolleType={fagsak.relasjonsRolleType}
          // @ts-expect-error K9 har ein verdi 'DELTAKER' som me ikkje har. Legg til?
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

const finnTilbakekrevingStatus = (aksjonspunkt: Aksjonspunkt[]): VilkårUtfallType => {
  if (aksjonspunkt.length > 0) {
    return aksjonspunkt.some(erAksjonspunktÅpent) ? 'IKKE_VURDERT' : 'OPPFYLT';
  }
  return 'IKKE_VURDERT';
};
