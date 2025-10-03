import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { BeregningsresultatProsessIndex } from '@navikt/fp-prosess-beregningsresultat';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { BehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

export const BeregningEsProsessStegInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps();

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: beregningsresultatEngangsstønad, isFetching } = useQuery(
    api.es.beregningsresultatEngangsstønadOptions(behandling),
  );

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.BEREGNING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny
      overstyrtStatus={harLenke(behandling, 'BEREGNINGRESULTAT_ENGANGSSTONAD') ? 'OPPFYLT' : 'IKKE_VURDERT'}
    >
      {isFetching ? (
        <LoadingPanel />
      ) : (
        <BeregningsresultatProsessIndex beregningresultatEngangsstonad={beregningsresultatEngangsstønad} />
      )}
    </ProsessDefaultInitPanel>
  );
};
