import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import FeilutbetalingFaktaIndex from '@fpsak-frontend/fakta-feilutbetaling';
import { FaktaPanelCode } from '@fpsak-frontend/konstanter';
import { createIntl } from '@fpsak-frontend/utils';
import {
  Aksjonspunkt, Fagsak, FeilutbetalingAarsak, FeilutbetalingFakta, AlleKodeverkTilbakekreving,
} from '@fpsak-frontend/types';
import { FaktaPanelInitProps, FaktaDefaultInitPanel } from '@fpsak-frontend/behandling-felles';

import messages from '../../i18n/nb_NO.json';
import { requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodesTilbakekreving.AVKLAR_FAKTA_FOR_FEILUTBETALING];

const ENDEPUNKTER_INIT_DATA = [TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER, TilbakekrevingBehandlingApiKeys.FEILUTBETALING_FAKTA];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  feilutbetalingFakta: FeilutbetalingFakta;
}

const ENDEPUNKTER_PANEL_DATA = [TilbakekrevingBehandlingApiKeys.FEILUTBETALING_AARSAK];
type EndepunktPanelData = {
  feilutbetalingAarsak: FeilutbetalingAarsak[];
}

interface OwnProps {
  fagsak: Fagsak;
  fptilbakeKodeverk: AlleKodeverkTilbakekreving;
}

/**
 * FeilutbetalingFaktaInitPanel
 */
const FeilutbetalingFaktaInitPanel: FunctionComponent<OwnProps & FaktaPanelInitProps> = ({
  fagsak,
  fptilbakeKodeverk,
  ...props
}) => (
  <FaktaDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
    {...props}
    requestApi={requestTilbakekrevingApi}
    initEndepunkter={ENDEPUNKTER_INIT_DATA}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FEILUTBETALING}
    faktaPanelMenyTekst={intl.formatMessage({ id: 'TilbakekrevingFakta.FaktaFeilutbetaling' })}
    skalPanelVisesIMeny={(initData) => !!initData?.feilutbetalingFakta}
    renderPanel={(data) => (
      <FeilutbetalingFaktaIndex
        {...data}
        fagsakYtelseTypeKode={fagsak.fagsakYtelseType.kode}
        fpsakKodeverk={data.alleKodeverk}
        alleKodeverk={fptilbakeKodeverk}
      />
    )}
  />
);

export default FeilutbetalingFaktaInitPanel;
