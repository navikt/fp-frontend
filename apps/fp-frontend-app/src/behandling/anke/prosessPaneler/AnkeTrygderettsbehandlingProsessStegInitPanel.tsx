import { use } from 'react';
import { useIntl } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { useQuery } from '@tanstack/react-query';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeTrygderettsbehandlingProsessIndex } from '@navikt/fp-prosess-anke-trygderettsbehandling';

import { useBehandlingApi } from '../../../data/behandlingApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { useStandardProsessPanelProps } from '../../felles/prosess/useStandardProsessPanelProps';
import { BehandlingDataContext } from '../../felles/utils/behandlingDataContext';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN];

export const AnkeTrygderettsbehandlingProsessStegInitPanel = () => {
  const intl = useIntl();
  const standardPanelProps = useStandardProsessPanelProps(AKSJONSPUNKT_KODER);

  const { behandling } = use(BehandlingDataContext);

  const api = useBehandlingApi(behandling);
  const { data: ankeVurdering } = useQuery(api.anke.ankeVurderingOptions(behandling));

  return (
    <ProsessDefaultInitPanel
      standardPanelProps={standardPanelProps}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny
    >
      {ankeVurdering ? <AnkeTrygderettsbehandlingProsessIndex ankeVurdering={ankeVurdering} /> : <LoadingPanel />}
    </ProsessDefaultInitPanel>
  );
};
