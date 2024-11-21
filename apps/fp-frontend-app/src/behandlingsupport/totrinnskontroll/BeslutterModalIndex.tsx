import React, { useCallback } from 'react';

import { BehandlingAppKontekst } from '@navikt/fp-types';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@navikt/fp-sak-totrinnskontroll';

interface Props {
  behandling: BehandlingAppKontekst;
  pushLocation: (location: string) => void;
  allAksjonspunktApproved: boolean;
}

export const BeslutterModalIndex = ({ behandling, pushLocation, allAksjonspunktApproved }: Props) => {
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
