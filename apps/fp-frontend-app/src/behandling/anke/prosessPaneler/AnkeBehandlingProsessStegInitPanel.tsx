import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeProsessIndex } from '@navikt/fp-prosess-anke';
import { BehandlingAppKontekst } from '@navikt/fp-types';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanelNew';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

interface Props {
  alleBehandlinger: BehandlingAppKontekst[];
}

export const AnkeBehandlingProsessStegInitPanel = ({ alleBehandlinger, ...props }: Props & ProsessPanelInitProps) => {
  const intl = useIntl();
  const { behandling } = props;

  const api = useBehandlingApi(behandling);
  const { data: ankeVurdering } = useQuery(api.anke.ankeVurderingOptions(behandling));

  const standardPanelProps = useStandardProsessPanelProps();

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.ANKEBEHANDLING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Ankebehandling' })}
      skalPanelVisesIMeny
      hentOverstyrtStatus={
        behandling.behandlingsresultat?.type ? VilkarUtfallType.OPPFYLT : VilkarUtfallType.IKKE_VURDERT
      }
    >
      {ankeVurdering ? (
        <AnkeProsessIndex behandlinger={alleBehandlinger} ankeVurdering={ankeVurdering} {...standardPanelProps} />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
