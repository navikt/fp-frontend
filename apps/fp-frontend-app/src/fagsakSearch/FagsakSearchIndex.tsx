import React, { FunctionComponent, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { errorOfType, ErrorTypes, getErrorResponseData } from '@navikt/fp-rest-api';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { FagsakEnkel } from '@navikt/fp-types';
import { FagsakSokSakIndex } from '@navikt/fp-sak-sok';

import { pathToFagsak } from '../app/paths';
import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';

const EMPTY_ARRAY = [] as FagsakEnkel[];

/**
 * FagsakSearchIndex
 *
 * Container komponent. Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
 * mot server og lagringen av resultatet i klientens state.
 */
const FagsakSearchIndex: FunctionComponent = () => {
  const alleKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);

  const navigate = useNavigate();
  const goToFagsak = (saksnummer?: string) => {
    if (saksnummer) {
      navigate(pathToFagsak(saksnummer));
    }
  };

  const {
    startRequest: searchFagsaker,
    data: fagsaker = EMPTY_ARRAY,
    state: sokeStatus,
    error,
  } = restFagsakApiHooks.useRestApiRunner(FagsakApiKeys.SEARCH_FAGSAK);

  const searchResultAccessDenied = useMemo(
    () => (errorOfType(ErrorTypes.MANGLER_TILGANG_FEIL, error) ? getErrorResponseData(error) : undefined),
    [error],
  );

  const sokFerdig = sokeStatus === RestApiState.SUCCESS;

  useEffect(() => {
    if (sokFerdig && fagsaker.length === 1) {
      goToFagsak(fagsaker[0].saksnummer);
    }
  }, [sokFerdig, fagsaker]);

  return (
    <FagsakSokSakIndex
      fagsaker={fagsaker}
      searchFagsakCallback={searchFagsaker}
      searchResultReceived={sokFerdig}
      selectFagsakCallback={(e: React.SyntheticEvent, saksnummer?: string) => goToFagsak(saksnummer)}
      searchStarted={sokeStatus === RestApiState.LOADING}
      searchResultAccessDenied={searchResultAccessDenied}
      alleKodeverk={alleKodeverk}
    />
  );
};

export default FagsakSearchIndex;
