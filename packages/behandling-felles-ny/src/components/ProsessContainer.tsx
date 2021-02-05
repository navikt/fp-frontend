import React, { FunctionComponent, ReactElement, useState } from 'react';

import ProsessInnhold from './ProsessInnhold';
import ProsessMeny from './ProsessMeny';

interface OwnProps {
  paneler?: ((props: any) => ReactElement)[];
  oppdaterProsessPanelIUrl: (faktanavn: string) => void;
}

const ProsessContainer: FunctionComponent<OwnProps> = ({
  paneler,
}) => {
  const [menyData, leggFaktaPanelTilMeny] = useState({});

  if (!paneler) {
    return null;
  }

  return (
    <>
      <ProsessMeny data={menyData} />
      <ProsessInnhold>
        {paneler.map((p) => p({
          leggFaktaPanelTilMeny,
        }))}
      </ProsessInnhold>
    </>
  );
};

export default ProsessContainer;
