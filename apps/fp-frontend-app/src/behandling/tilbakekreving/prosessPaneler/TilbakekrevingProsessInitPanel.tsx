import { useIntl } from 'react-intl';

import { TilbakekrevingAksjonspunktCodes, TilbakekrevingProsessIndex } from '@navikt/ft-prosess-tilbakekreving';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { isAksjonspunktOpen, KodeverkType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { Aksjonspunkt, AlleKodeverkTilbakekreving } from '@navikt/fp-types';

import { BeregnBeløpParams, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

import '@navikt/ft-prosess-tilbakekreving/dist/style.css';

const AKSJONSPUNKT_KODER = [TilbakekrevingAksjonspunktCodes.VURDER_TILBAKEKREVING];

interface Props {
  relasjonsRolleType: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const TilbakekrevingProsessInitPanel = ({ ...props }: Props & ProsessPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: perioderForeldelse } = useQuery(api.tilbakekreving.perioderForeldelseOptions(props.behandling));
  const { data: vilkårvurderingsperioder } = useQuery(
    api.tilbakekreving.vilkårsvurderingsperioderOptions(props.behandling),
  );
  const { data: vilkårvurdering } = useQuery(api.tilbakekreving.vilkårsvurderingOptions(props.behandling));

  const { mutateAsync: beregnBeløp } = useMutation({
    mutationFn: (values: BeregnBeløpParams) => api.tilbakekreving.beregneBeløp(values),
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.TILBAKEKREVING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Tilbakekreving' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={finnTilbakekrevingStatus(standardPanelProps.aksjonspunkter)}
    >
      {perioderForeldelse && vilkårvurderingsperioder && vilkårvurdering ? (
        <TilbakekrevingProsessIndex
          perioderForeldelse={perioderForeldelse}
          vilkarvurderingsperioder={vilkårvurderingsperioder}
          vilkarvurdering={vilkårvurdering}
          kodeverkSamlingFpTilbake={props.tilbakekrevingKodeverk}
          beregnBelop={(data: BeregnBeløpParams) => beregnBeløp(data)}
          relasjonsRolleType={props.relasjonsRolleType}
          relasjonsRolleTypeKodeverk={standardPanelProps.alleKodeverk[KodeverkType.RELASJONSROLLE_TYPE]}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};

const finnTilbakekrevingStatus = (aksjonspunkter: Aksjonspunkt[]): string => {
  if (aksjonspunkter.length > 0) {
    return aksjonspunkter.some(ap => isAksjonspunktOpen(ap.status))
      ? VilkarUtfallType.IKKE_VURDERT
      : VilkarUtfallType.OPPFYLT;
  }
  return VilkarUtfallType.IKKE_VURDERT;
};
