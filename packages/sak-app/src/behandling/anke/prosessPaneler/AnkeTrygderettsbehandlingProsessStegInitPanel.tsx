import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Aksjonspunkt } from '@navikt/ft-types';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AnkeTrygderettsbehandlingProsessIndex from '@fpsak-frontend/prosess-anke-trygderettsbehandling';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { AnkeVurdering } from '@fpsak-frontend/types';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingFellesApiKeys } from '../../felles/data/behandlingFellesApi';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const AKSJONSPUNKT_KODER = [
  aksjonspunktCodes.MANUELL_VURDERING_AV_ANKE_MERKNADER,
  aksjonspunktCodes.AUTO_VENT_ANKE_MERKNADER_FRA_BRUKER,
];

const ENDEPUNKTER_INIT_DATA = [BehandlingFellesApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [AnkeBehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
}

interface OwnProps {
  alleBehandlinger: {
    uuid: string;
    type: string;
    avsluttet?: string;
  }[];
}

const AnkeTrygderettsbehandlingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  alleBehandlinger,
  ...props
}) => {
  const intl = useIntl();
  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestAnkeApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => (
        <AnkeTrygderettsbehandlingProsessIndex
          {...data}
          behandlinger={alleBehandlinger}
        />
      )}
    />
  );
};

export default AnkeTrygderettsbehandlingProsessStegInitPanel;
