import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { AktorSakIndex } from '@navikt/fp-sak-aktor';

import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { KodeverkType } from '@navikt/fp-kodeverk';

import useTrackRouteParam from '../app/useTrackRouteParam';
import { restFagsakApiHooks, FagsakApiKeys } from '../data/fagsakContextApi';
import { pathToFagsak } from '../app/paths';

/**
 * AktoerIndex
 */
const AktoerIndex: FunctionComponent = () => {
  const { selected: selectedAktoerId } = useTrackRouteParam<string>({
    paramName: 'aktoerId',
    parse: aktoerIdFromUrl => Number.parseInt(aktoerIdFromUrl, 10),
  });

  const alleKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);

  const { data, state } = restFagsakApiHooks.useRestApi(
    FagsakApiKeys.AKTOER_INFO,
    { aktoerId: selectedAktoerId },
    { keepData: true, suspendRequest: !selectedAktoerId, updateTriggers: [selectedAktoerId] },
  );

  if (state === RestApiState.NOT_STARTED || state === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <AktorSakIndex
      valgtAktorId={selectedAktoerId}
      aktorInfo={data}
      fagsakStatuser={alleKodeverk[KodeverkType.FAGSAK_STATUS]}
      fagsakYtelseTyper={alleKodeverk[KodeverkType.FAGSAK_YTELSE]}
      renderSomLenke={(className, fagsakKomponent, saksnummer) => (
        <Link to={pathToFagsak(saksnummer)} className={className}>
          {fagsakKomponent}
        </Link>
      )}
    />
  );
};

export default AktoerIndex;
