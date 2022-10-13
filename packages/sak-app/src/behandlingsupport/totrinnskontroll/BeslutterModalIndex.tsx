import React, {
  FunctionComponent, useCallback,
} from 'react';
import { BehandlingAppKontekst } from '@navikt/ft-types';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@fpsak-frontend/sak-totrinnskontroll';

import { FpsakApiKeys, restApiHooks, requestApi } from '../../data/fpsakApi';

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
  const { data, state } = restApiHooks.useRestApi(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT, undefined, {
    updateTriggers: [behandling.uuid, behandling.versjon],
    suspendRequest: !requestApi.hasPath(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT.name),
    keepData: true,
  });

  const goToSearchPage = useCallback(() => {
    pushLocation('/');
  }, []);

  if (state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <FatterVedtakTotrinnskontrollModalSakIndex
      behandling={behandling}
      closeEvent={goToSearchPage}
      allAksjonspunktApproved={allAksjonspunktApproved}
      harSammeResultatSomOriginalBehandling={data?.harRevurderingSammeResultat}
    />
  );
};

export default BeslutterModalIndex;
