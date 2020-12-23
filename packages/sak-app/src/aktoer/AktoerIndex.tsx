import React, { FunctionComponent } from 'react';

import { Aktor, KodeverkMedNavn } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import AktorSakIndex from '@fpsak-frontend/sak-aktor';

import useTrackRouteParam from '../app/useTrackRouteParam';
import { restApiHooks, FpsakApiKeys } from '../data/fpsakApi';
import { pathToFagsak } from '../app/paths';

/**
 * AktoerIndex
 */
const AktoerIndex: FunctionComponent = () => {
  const { selected: selectedAktoerId } = useTrackRouteParam<string>({
    paramName: 'aktoerId',
    parse: (aktoerIdFromUrl) => Number.parseInt(aktoerIdFromUrl, 10),
  });

  const alleKodeverk = restApiHooks.useGlobalStateRestApiData<{[key: string]: [KodeverkMedNavn]}>(FpsakApiKeys.KODEVERK);

  const { data, state } = restApiHooks.useRestApi<Aktor>(FpsakApiKeys.AKTOER_INFO, { aktoerId: selectedAktoerId },
    { keepData: true, suspendRequest: !selectedAktoerId, updateTriggers: [selectedAktoerId] });

  if (state === RestApiState.NOT_STARTED || state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return <AktorSakIndex valgtAktorId={selectedAktoerId} aktorInfo={data} alleKodeverk={alleKodeverk} finnPathToFagsak={pathToFagsak} />;
};

export default AktoerIndex;
