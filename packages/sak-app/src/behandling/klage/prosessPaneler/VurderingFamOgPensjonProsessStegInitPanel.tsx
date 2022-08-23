import React, {
  FunctionComponent,
} from 'react';
import { useIntl } from 'react-intl';
import { Fagsak } from '@navikt/ft-types';

import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { ProsessStegCode } from '@fpsak-frontend/konstanter';

import ProsessPanelInitProps from '../../felles/typer/prosessPanelInitProps';
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
    prosessPanelKode={ProsessStegCode.KLAGE_NAV_FAMILIE_OG_PENSJON}
    prosessPanelMenyTekst={useIntl().formatMessage({ id: 'Behandlingspunkt.CheckKlageNFP' })}
  />
);

export default VurderingFamOgPensjonProsessStegInitPanel;
