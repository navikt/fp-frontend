import React from 'react';
import { useIntl } from 'react-intl';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeTrygderettsbehandlingProsessIndex } from '@navikt/fp-prosess-anke-trygderettsbehandling';
import { AnkeVurdering } from '@navikt/fp-types';

import { BehandlingApiKeys } from '../../../data/behandlingContextApi';
import { ProsessDefaultInitPanel } from '../../felles/prosess/ProsessDefaultInitPanel';
import { ProsessPanelInitProps } from '../../felles/typer/prosessPanelInitProps';

const AKSJONSPUNKT_KODER = [AksjonspunktKode.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
};

export const AnkeTrygderettsbehandlingProsessStegInitPanel = ({ ...props }: ProsessPanelInitProps) => {
  const intl = useIntl();
  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={data => <AnkeTrygderettsbehandlingProsessIndex {...data} />}
    />
  );
};
