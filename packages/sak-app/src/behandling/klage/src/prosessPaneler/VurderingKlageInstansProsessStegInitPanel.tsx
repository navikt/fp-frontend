import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { Fagsak } from '@fpsak-frontend/types';
import { ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import VurderingFellesProsessStegInitPanel from './VurderingFellesProsessStegInitPanel';

const intl = createIntl(messages);

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
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.CheckKlageNK' })}
  />
);

export default VurderingKlageInstansProsessStegInitPanel;
