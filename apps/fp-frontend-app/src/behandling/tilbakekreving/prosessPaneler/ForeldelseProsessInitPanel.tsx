import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { VilkarUtfallType } from '@navikt/ft-kodeverk';
import { FeilutbetalingPerioderWrapper } from '@navikt/ft-types';
import { ForeldelseAksjonspunktCodes, ForeldelseProsessIndex } from '@navikt/ft-prosess-tilbakekreving-foreldelse';
import { KodeverkType } from '@navikt/fp-kodeverk';
import { ProsessStegCode } from '@navikt/fp-konstanter';

import { AlleKodeverkTilbakekreving } from '@navikt/fp-types';
import ProsessDefaultInitPanel from '../../felles/prosess/ProsessDefaultInitPanel';
import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
import { BehandlingApiKeys, restBehandlingApiHooks, requestBehandlingApi } from '../../../data/behandlingContextApi';

const AKSJONSPUNKT_KODER = [ForeldelseAksjonspunktCodes.VURDER_FORELDELSE];

const ENDEPUNKTER_PANEL_DATA = [BehandlingApiKeys.PERIODER_FORELDELSE];
type EndepunktPanelData = {
  perioderForeldelse: FeilutbetalingPerioderWrapper;
};

interface OwnProps {
  relasjonsRolleType: string;
  tilbakekrevingKodeverk: AlleKodeverkTilbakekreving;
}

const ForeldelseProsessInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({ ...props }) => {
  const intl = useIntl();

  const { startRequest: beregnBelop } = restBehandlingApiHooks.useRestApiRunner(BehandlingApiKeys.BEREGNE_BELØP);

  return (
    <ProsessDefaultInitPanel<EndepunktPanelData>
      {...props}
      panelEndepunkter={ENDEPUNKTER_PANEL_DATA}
      aksjonspunktKoder={AKSJONSPUNKT_KODER}
      prosessPanelKode={ProsessStegCode.FORELDELSE}
      prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.Foreldelse' })}
      skalPanelVisesIMeny={() => true}
      hentOverstyrtStatus={() =>
        requestBehandlingApi.hasPath(BehandlingApiKeys.PERIODER_FORELDELSE.name)
          ? VilkarUtfallType.OPPFYLT
          : VilkarUtfallType.IKKE_VURDERT
      }
      renderPanel={data => (
        <ForeldelseProsessIndex
          kodeverkSamlingFpTilbake={props.tilbakekrevingKodeverk}
          beregnBelop={beregnBelop}
          relasjonsRolleType={props.relasjonsRolleType}
          relasjonsRolleTypeKodeverk={data.alleKodeverk[KodeverkType.RELASJONSROLLE_TYPE]}
          {...data}
        />
      )}
    />
  );
};

export default ForeldelseProsessInitPanel;
