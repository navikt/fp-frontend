import React, {
  FunctionComponent,
} from 'react';

import vilkarUtfallType from '@fpsak-frontend/kodeverk/src/vilkarUtfallType';
import ForeldelseProsessIndex from '@fpsak-frontend/prosess-foreldelse';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import aksjonspunktCodesTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';
import { Aksjonspunkt, FeilutbetalingPerioderWrapper, Kodeverk } from '@fpsak-frontend/types';
import { ProsessDefaultInitPanel, ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import { restApiTilbakekrevingHooks, requestTilbakekrevingApi, TilbakekrevingBehandlingApiKeys } from '../data/tilbakekrevingBehandlingApi';

const AKSJONSPUNKT_KODER = [aksjonspunktCodesTilbakekreving.VURDER_FORELDELSE];

const ENDEPUNKTER_INIT_DATA = [TilbakekrevingBehandlingApiKeys.AKSJONSPUNKTER, TilbakekrevingBehandlingApiKeys.PERIODER_FORELDELSE];
type EndepunktInitData = {
  aksjonspunkter: Aksjonspunkt[];
  perioderForeldelse: FeilutbetalingPerioderWrapper;
}

interface OwnProps {
  fagsakKjønn: Kodeverk;
}

const ForeldelseProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsakKjønn,
  ...props
}) => {
  const { startRequest: beregnBelop } = restApiTilbakekrevingHooks.useRestApiRunner(TilbakekrevingBehandlingApiKeys.BEREGNE_BELØP);

  return (
    <ProsessDefaultInitPanel<EndepunktInitData>
      {...props}
      requestApi={requestTilbakekrevingApi}
      initEndepunkter={ENDEPUNKTER_INIT_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={prosessStegCodes.FORELDELSE}
      prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.Foreldelse' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={(data) => (data?.perioderForeldelse ? vilkarUtfallType.OPPFYLT : vilkarUtfallType.IKKE_VURDERT)}
      renderPanel={(data) => (
        <ForeldelseProsessIndex
          navBrukerKjonn={fagsakKjønn.kode}
          beregnBelop={beregnBelop}
          {...data}
        />
      )}
    />
  );
};

export default ForeldelseProsessStegInitPanel;
