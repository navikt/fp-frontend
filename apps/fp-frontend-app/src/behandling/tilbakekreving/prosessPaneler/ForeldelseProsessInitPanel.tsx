import { useIntl } from 'react-intl';

import { ForeldelseAksjonspunktCodes, ForeldelseProsessIndex } from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { KodeverkType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AlleKodeverkTilbakekreving } from '@navikt/fp-types';

import { BehandlingRel, BeregnBeløpParams, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanelNew';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

import '@navikt/ft-prosess-tilbakekreving-foreldelse/dist/style.css';

const AKSJONSPUNKT_KODER = [ForeldelseAksjonspunktCodes.VURDER_FORELDELSE];

interface Props {
  relasjonsRolleType: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const ForeldelseProsessInitPanel = ({ ...props }: Props & ProsessPanelInitProps) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: perioderForeldelse } = useQuery(api.tilbakekreving.perioderForeldelseOptions(props.behandling));

  const { mutateAsync: beregnBeløp } = useMutation({
    mutationFn: (values: BeregnBeløpParams) => api.tilbakekreving.beregneBeløp(values),
  });

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.FORELDELSE}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Foreldelse' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={
        props.behandling.links.some(link => link.rel === BehandlingRel.PERIODER_FORELDELSE)
          ? VilkarUtfallType.OPPFYLT
          : VilkarUtfallType.IKKE_VURDERT
      }
    >
      {perioderForeldelse ? (
        <ForeldelseProsessIndex
          perioderForeldelse={perioderForeldelse}
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
