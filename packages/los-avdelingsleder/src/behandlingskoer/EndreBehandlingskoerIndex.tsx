import React, { FunctionComponent, useCallback,useState } from 'react';

import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import EndreSakslisterPanel from './components/EndreSakslisterPanel';

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
