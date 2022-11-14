import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';

import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { Fagsak } from '@fpsak-frontend/types';
import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import VurderingFellesProsessStegInitPanel from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER = [AksjonspunktCode.BEHANDLE_KLAGE_NK];

interface OwnProps {
  fagsak: Fagsak;
}

const VurderingKlageInstansProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  ...props
}) => (
  <VurderingFellesProsessStegInitPanel
    {...props}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    fagsak={fagsak}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_KLAGEINSTANS}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNK' })}
  />
);

export default VurderingKlageInstansProsessStegInitPanel;
