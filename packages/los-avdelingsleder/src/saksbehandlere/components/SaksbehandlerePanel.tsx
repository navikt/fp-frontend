import React, { FunctionComponent } from 'react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import LeggTilSaksbehandlerForm from './LeggTilSaksbehandlerForm';
import SaksbehandlereTabell from './SaksbehandlereTabell';

interface OwnProps {
  saksbehandlere: Saksbehandler[];
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: Saksbehandler[];
  hentAvdelingensSaksbehandlere: (params: {avdelingEnhet: string}) => void;
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
    <VerticalSpacer sixteenPx />
    <LeggTilSaksbehandlerForm
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere}
    />
  </>
);

export default SaksbehandlerePanel;
