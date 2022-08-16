import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import AktorSakIndex from '@navikt/ft-sak-aktor';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

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

  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.KODEVERK);

  const { data, state } = restApiHooks.useRestApi(FpsakApiKeys.AKTOER_INFO, { aktoerId: selectedAktoerId },
    { keepData: true, suspendRequest: !selectedAktoerId, updateTriggers: [selectedAktoerId] });

  if (state === RestApiState.NOT_STARTED || state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <AktorSakIndex
      valgtAktorId={selectedAktoerId}
      aktorInfo={data}
      alleKodeverk={alleKodeverk}
      renderSomLenke={(className, fagsakKomponent, saksnummer) => (
        <Link to={pathToFagsak(saksnummer)} className={className}>
          {fagsakKomponent}
        </Link>
      )}
    />
  );
};

export default AktoerIndex;
