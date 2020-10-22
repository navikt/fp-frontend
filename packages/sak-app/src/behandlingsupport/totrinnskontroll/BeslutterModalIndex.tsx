import React, {
  FunctionComponent, useCallback,
} from 'react';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { Kodeverk } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { FatterVedtakTotrinnskontrollModalSakIndex } from '@fpsak-frontend/sak-totrinnskontroll';

import { FpsakApiKeys, restApiHooks, requestApi } from '../../data/fpsakApi';
import BehandlingAppKontekst from 'sak-app/src/behandling/behandlingAppKontekstTsType';

interface TotrinnsKlageVurdering {
  klageVurdering?: Kodeverk;
  klageVurderingOmgjoer?: Kodeverk;
  klageVurderingResultatNFP?: any;
  klageVurderingResultatNK?: any;
}

interface OwnProps {
  selectedBehandlingVersjon?: number;
  fagsakYtelseType: Kodeverk;
  behandlingsresultat: BehandlingAppKontekst['behandlingsresultat'];
  behandlingId: number;
  behandlingTypeKode: string;
  pushLocation: (location: string) => void;
  allAksjonspunktApproved: boolean,
  behandlingStatus: Kodeverk;
  totrinnsKlageVurdering: TotrinnsKlageVurdering,
}

const BeslutterModalIndex: FunctionComponent<OwnProps> = ({
  selectedBehandlingVersjon,
  fagsakYtelseType,
  behandlingsresultat,
  behandlingId,
  behandlingTypeKode,
  pushLocation,
  allAksjonspunktApproved,
  behandlingStatus,
  totrinnsKlageVurdering,
}) => {
  const { data, state } = restApiHooks.useRestApi<{ harRevurderingSammeResultat: boolean }>(FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT, undefined, {
    updateTriggers: [behandlingId, selectedBehandlingVersjon],
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
      closeEvent={goToSearchPage}
      allAksjonspunktApproved={allAksjonspunktApproved}
      fagsakYtelseType={fagsakYtelseType}
      erKlageWithKA={totrinnsKlageVurdering ? !!totrinnsKlageVurdering.klageVurderingResultatNK : undefined}
      behandlingsresultat={behandlingsresultat}
      behandlingId={behandlingId}
      behandlingStatusKode={behandlingStatus.kode}
      behandlingTypeKode={behandlingTypeKode}
      harSammeResultatSomOriginalBehandling={data?.harRevurderingSammeResultat}
    />
  );
};

export default BeslutterModalIndex;
