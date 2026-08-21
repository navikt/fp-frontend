import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { BeregningsresultatProsessIndex } from '@navikt/fp-prosess-beregningsresultat';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { useProsessPanelPrioritet } from '../../felles/prioritet/usePanelPrioritet';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

export const BeregningEsProsessStegInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps();

  const { behandling } = useBehandlingDataContext();

  const prioriter = useProsessPanelPrioritet({
    panelKode: ProsessStegCode.BEREGNING,
    skalMarkeresSomAktiv: standardPanelProps.harÅpentAksjonspunkt,
  });

  const api = getBehandlingApi(behandling);

  const { data: beregningsresultatEngangsstønad, isFetching } = useQuery(
    prioriter(api.es.beregningsresultatEngangsstønadOptions(behandling)),
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
