import React, { FunctionComponent, useState, useCallback } from 'react';

import EndreSakslisterPanel from './components/EndreSakslisterPanel';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

interface OwnProps {
  valgtAvdelingEnhet: string;
  avdelingensSaksbehandlere: SaksbehandlerProfil[];
}

/**
 * EndreBehandlingskoerIndex
 */
const EndreBehandlingskoerIndex: FunctionComponent<OwnProps> = ({ valgtAvdelingEnhet, avdelingensSaksbehandlere }) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();
  const resetValgtSakslisteId = useCallback(() => setValgtSakslisteId(undefined), []);
  return (
    <EndreSakslisterPanel
      setValgtSakslisteId={setValgtSakslisteId}
      valgtSakslisteId={valgtSakslisteId}
      valgtAvdelingEnhet={valgtAvdelingEnhet}
      avdelingensSaksbehandlere={avdelingensSaksbehandlere}
      resetValgtSakslisteId={resetValgtSakslisteId}
    />
  );
};

export default EndreBehandlingskoerIndex;
