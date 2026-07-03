import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeProsessIndex } from '@navikt/fp-prosess-anke';

import { getBehandlingApi } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

export const AnkeBehandlingProsessStegInitPanel = () => {
  const intl = useIntl();

  const { behandling, alleBehandlinger } = useBehandlingDataContext();

  const standardPanelProps = useStandardProsessPanelProps();

  const erAktiv = useErProsessPanelAktiv(ProsessStegCode.ANKEBEHANDLING, true, standardPanelProps.harÅpentAksjonspunkt);
  const skalHenteData = useSkalHenteData(ProsessStegCode.ANKEBEHANDLING, erAktiv, 'prosess');

  const api = getBehandlingApi(behandling);
  const { data: ankeVurdering } = useQuery(medPrioritet(api.anke.ankeVurderingOptions(behandling), skalHenteData));

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
