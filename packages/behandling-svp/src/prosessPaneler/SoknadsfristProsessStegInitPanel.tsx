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
import { requestSvpApi, SvpBehandlingApiKeys } from '../data/svpBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.VURDER_SOKNADSFRIST_FORELDREPENGER];

const ENDEPUNKTER_INIT_DATA = [SvpBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [SvpBehandlingApiKeys.UTTAK_PERIODE_GRENSE, SvpBehandlingApiKeys.SOKNAD];
type EndepunktPanelData = {
  uttakPeriodeGrense?: UttakPeriodeGrense;
  soknad: Soknad;
}

const SoknadsfristProsessStegInitPanel: FunctionComponent<ProsessPanelInitProps> = (props) => (
  <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestSvpApi}
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
