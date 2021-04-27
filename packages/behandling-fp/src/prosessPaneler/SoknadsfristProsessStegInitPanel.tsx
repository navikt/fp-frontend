import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import VurderSoknadsfristForeldrepengerIndex from '@fpsak-frontend/prosess-soknadsfrist';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { Aksjonspunkt, Soknad, UttakPeriodeGrense } from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps, skalViseProsessPanel } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { FpBehandlingApiKeys, requestFpApi } from '../data/fpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER];

const ENDEPUNKTER_INIT_DATA = [FpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [FpBehandlingApiKeys.UTTAK_PERIODE_GRENSE, FpBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  uttakPeriodeGrense?: UttakPeriodeGrense;
  soknad: Soknad;
}

const SoknadsfristProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = (props) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestFpApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.SOEKNADSFRIST}
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Soknadsfristvilkaret' })}
    skalPanelVisesIMeny={(data) => skalViseProsessPanel(data.aksjonspunkter)}
    renderPanel={(data) => (
      <VurderSoknadsfristForeldrepengerIndex
        {...data}
      />
    )}
  />
);

export default SoknadsfristProsessStegInitPanel;
