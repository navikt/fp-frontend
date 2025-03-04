import { type ComponentProps, use } from 'react';
import { useIntl } from 'react-intl';

import {
  ForeldelseAksjonspunktCodes,
  ForeldelseProsessIndex,
  type ForeldelsesresultatActivity,
} from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { KodeverkType, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import type { AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { useFormData } from '@navikt/fp-utils';

import { type BeregnBeløpParams, harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

import '@navikt/ft-prosess-tilbakekreving-foreldelse/dist/style.css';

const AKSJONSPUNKT_KODER = [ForeldelseAksjonspunktCodes.VURDER_FORELDELSE];

interface Props {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

export const ForeldelseProsessInitPanel = ({ tilbakekrevingKodeverk }: Props) => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, fagsak } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: perioderForeldelse } = useQuery(api.tilbakekreving.perioderForeldelseOptions(behandling));

  const { mutateAsync: beregnBeløp } = useMutation({
    mutationFn: (values: BeregnBeløpParams) => api.tilbakekreving.beregneBeløp(values),
  });

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.FORELDELSE}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Foreldelse' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={
        harLenke(behandling, 'PERIODER_FORELDELSE') ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT
      }
    >
      {perioderForeldelse ? (
        <Wrapper
          perioderForeldelse={perioderForeldelse}
          kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
          beregnBelop={(data: BeregnBeløpParams) => beregnBeløp(data)}
          relasjonsRolleType={fagsak.relasjonsRolleType}
          relasjonsRolleTypeKodeverk={standardPanelProps.alleKodeverk[KodeverkType.RELASJONSROLLE_TYPE]}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};

const Wrapper = (props: ComponentProps<typeof ForeldelseProsessIndex>) => {
  const { formData, setFormData } = useFormData<ForeldelsesresultatActivity[]>();
  return <ForeldelseProsessIndex {...props} formData={formData} setFormData={setFormData} />;
};
