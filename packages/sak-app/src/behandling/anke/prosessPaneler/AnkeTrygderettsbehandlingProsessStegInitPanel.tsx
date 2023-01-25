import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { ProsessStegCode } from '@navikt/fp-konstanter';
import { AnkeVurdering } from '@navikt/fp-types';
import AksjonspunktCodes from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import AnkeTrygderettsbehandlingProsessIndex from '@navikt/fp-prosess-anke-trygderettsbehandling';

import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { requestAnkeApi, AnkeBehandlingApiKeys } from '../data/ankeBehandlingApi';

const AKSJONSPUNKT_KODER = [AksjonspunktCodes.AUTO_VENT_ANKE_OVERSENDT_TIL_TRYGDERETTEN];

const ENDEPUNKTER_PANEL_DATA = [AnkeBehandlingApiKeys.ANKE_VURDERING];
type EndepunktPanelData = {
  ankeVurdering: AnkeVurdering;
}

const AnkeTrygderettsbehandlingProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = ({
  ...props
}) => {
  const intl = useIntl();
  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      requestApi={requestAnkeApi}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      prosessPanelKode={ProsessStegCode.ANKE_MERKNADER}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.AnkeMerknader' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => (
        <AnkeTrygderettsbehandlingProsessIndex
          {...data}
        />
      )}
    />
  );
};

export default AnkeTrygderettsbehandlingProsessStegInitPanel;
