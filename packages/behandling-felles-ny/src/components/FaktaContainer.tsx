import React, { FunctionComponent, ReactElement, useState } from 'react';

import FaktaInnhold from './FaktaInnhold';
import FaktaMeny from './FaktaMeny';

interface OwnProps {
  paneler?: ((props: any) => ReactElement)[];
}

const FaktaContainer: FunctionComponent<OwnProps> = ({
  paneler,
}) => {
  const [menyData, leggFaktaPanelTilMeny] = useState({});

  if (!paneler) {
    return null;
  }

  return (
    <>
      <FaktaMeny data={menyData} />
      <FaktaInnhold>
        {paneler.map((p) => p({
          leggFaktaPanelTilMeny,
        }))}
      </FaktaInnhold>
    </>
  );
};

export default FaktaContainer;
