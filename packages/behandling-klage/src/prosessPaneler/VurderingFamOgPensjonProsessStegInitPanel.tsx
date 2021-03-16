import React, {
  FunctionComponent,
} from 'react';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { prosessStegCodes } from '@fpsak-frontend/konstanter';
import { Fagsak } from '@fpsak-frontend/types';
import { ProsessPanelInitProps } from '@fpsak-frontend/behandling-felles-ny';

import getPackageIntl from '../../i18n/getPackageIntl';
import VurderingFellesProsessStegInitPanel from './VurderingFellesProsessStegInitPanel';

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
    prosessPanelKode={prosessStegCodes.KLAGE_NAV_FAMILIE_OG_PENSJON}
    prosessPanelMenyTekst={getPackageIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNFP' })}
  />
);

export default VurderingFamOgPensjonProsessStegInitPanel;
