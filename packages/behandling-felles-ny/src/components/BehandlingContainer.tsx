import React, { FunctionComponent, ReactElement } from 'react';

import ProsessContainer from './ProsessContainer';
import FaktaContainer from './FaktaContainer';

interface OwnProps {
  faktaPaneler?: ((props: any) => ReactElement)[];
  prosessPaneler?: ((props: any) => ReactElement)[];
}

const BehandlingContainer: FunctionComponent<OwnProps> = ({
  faktaPaneler,
  prosessPaneler,
}) => (
  <>
    <ProsessContainer paneler={prosessPaneler} />
    <FaktaContainer paneler={faktaPaneler} />
  </>
);

export default BehandlingContainer;
