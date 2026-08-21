import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeProsessIndex } from '@navikt/fp-prosess-anke';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { useProsessPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

export const AnkeBehandlingProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, alleBehandlinger } = useBehandlingDataContext();

  const standardPanelProps = useStandardProsessPanelProps();

  const prioriter = useProsessPanelPrioritet({
    panelKode: ProsessStegCode.ANKEBEHANDLING,
    skalMarkeresSomAktiv: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);
  const { data: ankeVurdering } = useQuery(prioriter(api.anke.ankeVurderingOptions(behandling)));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.ANKEBEHANDLING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Ankebehandling' })}
      skalPanelVisesIMeny={true}
      overstyrtStatus={behandling.behandlingsresultat?.type ? 'OPPFYLT' : 'IKKE_VURDERT'}
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
