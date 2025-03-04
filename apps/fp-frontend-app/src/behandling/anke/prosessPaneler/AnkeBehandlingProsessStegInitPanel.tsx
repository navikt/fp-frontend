import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeProsessIndex } from '@navikt/fp-prosess-anke';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

export const AnkeBehandlingProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, alleBehandlinger } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);
  const { data: ankeVurdering } = useQuery(api.anke.ankeVurderingOptions(behandling));

  const standardPanelProps = useStandardProsessPanelProps();

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.ANKEBEHANDLING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Ankebehandling' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={
        behandling.behandlingsresultat?.type ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT
      }
    >
      {ankeVurdering ? (
        <AnkeProsessIndex
          behandlinger={alleBehandlinger.filter(b => !b.behandlingHenlagt)}
          ankeVurdering={ankeVurdering}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
