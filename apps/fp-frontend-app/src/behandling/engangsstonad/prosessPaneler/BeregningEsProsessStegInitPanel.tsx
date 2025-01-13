import { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode, VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { BeregningsresultatProsessIndex } from '@navikt/fp-prosess-beregningsresultat';
import { AksessRettigheter } from '@navikt/fp-types';

import { harLenke, useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.OVERSTYR_BEREGNING];

interface Props {
  rettigheter: AksessRettigheter;
}

export const BeregningEsProsessStegInitPanel = ({ rettigheter, ...props }: Props & ProsessPanelInitProps) => {
  const [erOverstyrt, setOverstyrt] = useState(false);
  const toggleOverstyring = useCallback(() => setOverstyrt(!erOverstyrt), [erOverstyrt]);

  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);

  const { data: beregningsresultatEngangsstønad } = useQuery(
    api.es.beregningsresultatEngangsstønadOptions(props.behandling),
  );

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.BEREGNING}
      prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.Beregning' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={
        harLenke(props.behandling, 'BEREGNINGRESULTAT_ENGANGSSTONAD')
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
