import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Fagsak } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';

import ProsessPanelInitProps from '../../felles/types/prosessPanelInitProps';
import VurderingFellesProsessStegInitPanel from './VurderingFellesProsessStegInitPanel';

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.BEHANDLE_KLAGE_NK];

interface OwnProps {
  fagsak: Fagsak;
}

const VurderingKlageInstansProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  ...props
}) => (
  <VurderingFellesProsessStegInitPanel
    {...props}
    fagsak={fagsak}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_KLAGEINSTANS}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNK' })}
  />
);

export default VurderingKlageInstansProsessStegInitPanel;
