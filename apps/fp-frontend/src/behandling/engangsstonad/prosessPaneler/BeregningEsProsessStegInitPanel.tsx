import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { BeregningsresultatProsessIndex } from '@navikt/fp-prosess-beregningsresultat';

import { getBehandlingApi, harLenke } from '../../../data/behandlingApi';
import { useBehandlingDataContext } from '../../felles/context/BehandlingDataContext';
import { medPrioritet } from '../../felles/prioritet/medPrioritet';
import { useSkalHenteData } from '../../felles/prioritet/PanelDataPrioritetContext';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useErProsessPanelAktiv } from '../../felles/prosess/useProsessMenyRegistrerer';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';

export const BeregningEsProsessStegInitPanel = () => {
  const intl = useIntl();

  const standardPanelProps = useStandardProsessPanelProps();

  const { behandling } = useBehandlingDataContext();

  const erAktiv = useErProsessPanelAktiv(ProsessStegCode.BEREGNING, true, standardPanelProps.harÅpentAksjonspunkt);
  const skalHenteData = useSkalHenteData(ProsessStegCode.BEREGNING, erAktiv, 'prosess', true);

  const api = getBehandlingApi(behandling);

  const { data: beregningsresultatEngangsstønad, isFetching } = useQuery(
    medPrioritet(api.es.beregningsresultatEngangsstønadOptions(behandling), skalHenteData),
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
