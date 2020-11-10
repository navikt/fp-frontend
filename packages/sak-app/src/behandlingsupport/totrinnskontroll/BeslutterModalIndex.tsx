import React, {
  FunctionComponent, useCallback,
} from 'react';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { Kodeverk, BehandlingAppKontekst } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@fpsak-frontend/sak-totrinnskontroll';

import { FpsakApiKeys, restApiHooks, requestApi } from '../../data/fpsakApi';

interface OwnProps {
  behandling: BehandlingAppKontekst;
  fagsakYtelseType: Kodeverk;
  pushLocation: (location: string) => void;
  allAksjonspunktApproved: boolean,
  erKlageWithKA: boolean,
}

const BeslutterModalIndex: FunctionComponent<OwnProps> = ({
  behandling,
  fagsakYtelseType,
  pushLocation,
  allAksjonspunktApproved,
  erKlageWithKA,
}) => {
  const { data, state } = restApiHooks.useRestApi<{ harRevurderingSammeResultat: boolean }>(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT, undefined, {
    updateTriggers: [behandling.id, behandling.versjon],
    suspendRequest: !requestApi.hasPath(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT),
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
      fagsakYtelseType={fagsakYtelseType}
      erKlageWithKA={erKlageWithKA}
      harSammeResultatSomOriginalBehandling={data?.harRevurderingSammeResultat}
    />
  );
};

export default BeslutterModalIndex;
