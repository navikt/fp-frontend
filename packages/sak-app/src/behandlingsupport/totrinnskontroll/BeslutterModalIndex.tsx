import React, {
  FunctionComponent, useCallback,
} from 'react';

import { BehandlingAppKontekst } from '@fpsak-frontend/types';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@fpsak-frontend/sak-totrinnskontroll';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  pushLocation: (location: string) => void;
  allAksjonspunktApproved: boolean,
}

const BeslutterModalIndex: FunctionComponent<OwnProps> = ({
  behandling,
  pushLocation,
  allAksjonspunktApproved,
}) => {
  const goToSearchPage = useCallback(() => {
    pushLocation('/');
  }, []);

  return (
    <FatterVedtakTotrinnskontrollModalSakIndex
      behandling={behandling}
      closeEvent={goToSearchPage}
      allAksjonspunktApproved={allAksjonspunktApproved}
    />
  );
};

export default BeslutterModalIndex;
