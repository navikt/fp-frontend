import React, {
  FunctionComponent, useCallback,
} from 'react';

import { BehandlingAppKontekst } from '@navikt/fp-types';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@navikt/fp-sak-totrinnskontroll';

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
