import React, {
  FunctionComponent,
} from 'react';

import TilbakekrevingProsessIndex from '@fpsak-frontend/prosess-tilbakekreving';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import {
  Aksjonspunkt, AlleKodeverkTilbakekreving, DetaljerteFeilutbetalingsperioder, FeilutbetalingPerioderWrapper, Kodeverk, VilkarsVurdertePerioderWrapper,
} from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import { restApiTilbakekrevingHooks, requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodesTilbakekreving.VURDER_TILBAKEKREVING];

const ENDEPUNKTER_INIT_DATA = [TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
}

const ENDEPUNKTER_PANEL_DATA = [
  TilbakekrevingBehandlingApiKeys.VILKARVURDERINGSPERIODER,
  TilbakekrevingBehandlingApiKeys.VILKARVURDERING,
  TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE,
];
type EndepunktPanelData = {
  vilkarvurderingsperioder: DetaljerteFeilutbetalingsperioder;
  vilkarvurdering: VilkarsVurdertePerioderWrapper;
  perioderForeldelse: FeilutbetalingPerioderWrapper;
}

interface OwnProps {
  fagsakKjønn: Kodeverk;
  fptilbakeKodeverk: AlleKodeverkTilbakekreving;
}

const TilbakekrevingProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsakKjønn,
  fptilbakeKodeverk,
  ...props
}) => {
  const { startRequest: beregnBelop } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData, EndepunktPanelData>
      {...props}
      requestApi={requestTilbakekrevingApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.TILBAKEKREVING}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Tilbakekreving' })}
      skalPanelVisesIMeny={() => true}
      renderPanel={(data) => (
        <TilbakekrevingProsessIndex
          navBrukerKjonn={fagsakKjønn.kode}
          beregnBelop={beregnBelop}
          {...data}
          alleKodeverk={fptilbakeKodeverk}
        />
      )}
    />
  );
};

export default TilbakekrevingProsessStegInitPanel;
