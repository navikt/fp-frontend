import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';
import { Fagsak } from '@fpsak-frontend/types';
import { ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';
import VurderingFellesProsessStegInitPanel from './VurderingFellesProsessStegInitPanel';

const intl = createIntl(messages);

const AKSJONSPUNKT_KODER = [aksjonspunktCodes.BEHANDLE_KLAGE_NFP];

interface OwnProps {
  fagsak: Fagsak;
  toggleOppdatereFagsakContext: (skalHenteFagsak: boolean) => void,
  opneSokeside: () => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
}

const VurderingFamOgPensjonProsessStegInitPanel: FunctionComponent<OwnProps & ProsessPanelInitProps> = ({
  fagsak,
  toggleOppdatereFagsakContext,
  opneSokeside,
  oppdaterProsessStegOgFaktaPanelIUrl,
  ...props
}) => (
  <VurderingFellesProsessStegInitPanel
    {...props}
    fagsak={fagsak}
    toggleOppdatereFagsakContext={toggleOppdatereFagsakContext}
    opneSokeside={opneSokeside}
    oppdaterProsessStegOgFaktaPanelIUrl={oppdaterProsessStegOgFaktaPanelIUrl}
    aksjonspunktKoder={AKSJONSPUNKT_KODER}
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_FAMILIE_OG_PENSJON}
    prosessPanelMenyTekst={intl.formatMessage({ id: 'Behandlingspunkt.CheckKlageNFP' })}
  />
);

export default VurderingFamOgPensjonProsessStegInitPanel;
