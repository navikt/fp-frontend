import React, { FunctionComponent } from 'react';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';
import SaksbehandlerePanel from './components/SaksbehandlerePanel';

interface OwnProps {
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
  valgtAvdelingEnhet: string;
  hentAvdelingensSaksbehandlere: (params: { avdelingEnhet: string }) => void;
}

/**
 * EndreSaksbehandlereIndex
 */
const EndreSaksbehandlereIndex: FunctionComponent<OwnProps> = ({
  valgtAvdelingEnhet,
  avdelingensSaksbehandlere,
  hentAvdelingensSaksbehandlere,
}) => (
  <SaksbehandlerePanel
    saksbehandlere={avdelingensSaksbehandlere}
    valgtAvdelingEnhet={valgtAvdelingEnhet}
    avdelingensSaksbehandlere={avdelingensSaksbehandlere}
    hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere}
  />
);

export default EndreSaksbehandlereIndex;
