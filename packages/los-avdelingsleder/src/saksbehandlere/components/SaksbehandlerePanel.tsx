import React, { FunctionComponent } from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import LeggTilSaksbehandlerForm from './LeggTilSaksbehandlerForm';
import SaksbehandlereTabell from './SaksbehandlereTabell';

interface OwnProps {
  saksbehandlere: SaksbehandlerProfil[];
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  hentAvdelingensSaksbehandlere: (params: { avdelingEnhet: string }) => void;
}

/**
 * SaksbehandlerePanel
 */
const SaksbehandlerePanel: FunctionComponent<OwnProps> = ({
  saksbehandlere,
  valgtAvdelingEnhet,
  avdelingensSaksbehandlere,
  hentAvdelingensSaksbehandlere,
}) => (
  <>
    <SaksbehandlereTabell
      saksbehandlere={saksbehandlere}
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere}
    />
    <VerticalSpacer twentyPx />
    <LeggTilSaksbehandlerForm
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere}
    />
  </>
);

export default SaksbehandlerePanel;
