import { use, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { BeregningsresultatProsessIndex } from '@navikt/fp-prosess-beregningsresultat';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.OVERSTYR_BEREGNING];

export const BeregningEsProsessStegInitPanel = (props: ProsessPanelInitProps) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: beregningsresultatEngangsstønad } = useQuery(api.es.beregningsresultatEngangsstønadOptions(behandling));

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.BEREGNING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={
        harLenke(behandling, 'BEREGNINGRESULTAT_ENGANGSSTONAD')
          ? VilkarUtfallType.OPPFYLT
          : VilkarUtfallType.IKKE_VURDERT
      }
      erOverstyrt={erOverstyrt}
    >
      {beregningsresultatEngangsstønad ? (
        <BeregningsresultatProsessIndex
          beregningresultatEngangsstonad={beregningsresultatEngangsstønad}
          overrideReadOnly={standardPanelProps.isReadOnly}
          kanOverstyreAccess={rettigheter.kanOverstyreAccess}
          toggleOverstyring={toggleOverstyring}
          {...standardPanelProps}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
