import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';

import { FaktaPanelCode } from '@navikt/fp-konstanter';
import { FeilutbetalingAarsak, FeilutbetalingFakta } from '@navikt/ft-types';
import {
  FeilutbetalingAksjonspunktCode,
  FeilutbetalingFaktaIndex,
} from '@navikt/ft-fakta-tilbakekreving-feilutbetaling';
import { AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import { BehandlingApiKeys, requestBehandlingApi } from '../../../data/behandlingContextApi';
import FaktaDefaultInitPanel from '../../felles/fakta/FaktaDefaultInitPanel';
import FaktaPanelInitProps from '../../felles/typer/faktaPanelInitProps';

import '@navikt/ft-fakta-tilbakekreving-feilutbetaling/dist/style.css';

const AKSJONSPUNKT_KODER = [FeilutbetalingAksjonspunktCode.AVKLAR_FAKTA_FOR_FEILUTBETALING];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.FEILUTBETALING_FAKTA, BehandlingApiKeys.FEILUTBETALING_AARSAK];
type EndepunktPanelData = {
  feilutbetalingFakta: FeilutbetalingFakta;
  feilutbetalingAarsak: FeilutbetalingAarsak[];
};

interface OwnProps {
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
  fagsakYtelseTypeKode: string;
}

/**
 * FeilutbetalingFaktaInitPanel
 */
const FeilutbetalingFaktaInitPanel: FunctionComponent<FaktaPanelInitProps & OwnProps> = ({
  behandling,
  valgtFaktaSteg,
  registrerFaktaPanel,
  tilbakekrevingKodeverk,
  fagsakYtelseTypeKode,
}) => (
  <FaktaDefaultInitPanel<EndepunktPanelData>
    behandling={behandling}
    valgtFaktaSteg={valgtFaktaSteg}
    registrerFaktaPanel={registrerFaktaPanel}
    panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    faktaPanelKode={FaktaPanelCode.FEILUTBETALING}
    faktaPanelMenyTekst={useIntl().formatMessage({ id: 'TilbakekrevingFakta.FaktaFeilutbetaling' })}
    skalPanelVisesIMeny={() => requestBehandlingApi.hasPath(BehandlingApiKeys.FEILUTBETALING_FAKTA.name)}
    renderPanel={data => (
      <FeilutbetalingFaktaIndex
        fagsakYtelseTypeKode={fagsakYtelseTypeKode}
        kodeverkSamlingFpTilbake={tilbakekrevingKodeverk}
        kodeverkSamlingFpsak={data.alleKodeverk}
        isAksjonspunktOpen={data.harApneAksjonspunkter}
        isReadOnly={data.readOnly}
        {...data}
      />
    )}
  />
);

export default FeilutbetalingFaktaInitPanel;
