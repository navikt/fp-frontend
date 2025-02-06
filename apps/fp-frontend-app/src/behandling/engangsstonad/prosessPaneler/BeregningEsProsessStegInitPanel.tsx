import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { BeregningsresultatProsessIndex } from '@navikt/fp-prosess-beregningsresultat';
import { PanelOverstyringProvider } from '@navikt/fp-utils';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitOverstyringPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import type { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODE = AksjonspunktKode.OVERSTYR_BEREGNING;

export const BeregningEsProsessStegInitPanel = (props: ProsessPanelInitProps) => {
  const standardPanelProps = useStandardProsessPanelProps([AKSJONSPUNKT_KODE]);

  const { behandling, rettigheter } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);

  const { data: beregningsresultatEngangsstønad } = useQuery(api.es.beregningsresultatEngangsstønadOptions(behandling));

  return (
    <PanelOverstyringProvider
      overstyringApKode={AKSJONSPUNKT_KODE}
      kanOverstyreAccess={rettigheter.kanOverstyreAccess}
      overrideReadOnly={standardPanelProps.isReadOnly}
    >
      <ProsessDefaultInitOverstyringPanel
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
      >
        {beregningsresultatEngangsstønad ? (
          <BeregningsresultatProsessIndex beregningresultatEngangsstonad={beregningsresultatEngangsstønad} />
        ) : (
          <LoadingPanel />
        )}
      </ProsessDefaultInitOverstyringPanel>
    </PanelOverstyringProvider>
  );
};
