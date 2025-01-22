import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeTrygderettsbehandlingProsessIndex } from '@navikt/fp-prosess-anke-trygderettsbehandling';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN];

export const AnkeTrygderettsbehandlingProsessStegInitPanel = ({ ...props }: ProsessPanelInitProps) => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const api = useBehandlingApi(props.behandling);
  const { data: ankeVurdering } = useQuery(api.anke.ankeVurderingOptions(props.behandling));

  return (
    <ProsessDefaultInitPanel
      {...props}
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny
    >
      {ankeVurdering ? (
        <AnkeTrygderettsbehandlingProsessIndex
          ankeVurdering={ankeVurdering}
          alleKodeverk={standardPanelProps.alleKodeverk}
        />
      ) : (
        <LoadingPanel />
      )}
    </ProsessDefaultInitPanel>
  );
};
