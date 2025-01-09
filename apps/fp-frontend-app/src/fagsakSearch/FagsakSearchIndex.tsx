import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useMutation, useQuery } from '@tanstack/react-query';
import { HTTPError } from 'ky';

import { FagsakSokSakIndex } from '@navikt/fp-sak-sok';
import { FagsakEnkel } from '@navikt/fp-types';

import { pathToFagsak } from '../app/paths';
import { useFagsakApi } from '../data/fagsakApi';
import { notEmpty } from '../data/notEmpty';

const EMPTY_ARRAY = [] as FagsakEnkel[];

/**
 * FagsakSearchIndex
 *
 * Har ansvar for å vise søkeskjermbildet og å håndtere fagsaksøket
 * mot server og lagringen av resultatet i klientens state.
 */
export const FagsakSearchIndex = () => {
  const { kodeverkOptions, søkFagsak } = useFagsakApi();
  const { data: alleKodeverk } = useQuery(kodeverkOptions());

  const navigate = useNavigate();
  const goToFagsak = (saksnummer?: string) => {
    if (saksnummer) {
      navigate(pathToFagsak(saksnummer));
    }
  };

  const {
    mutate: searchFagsaker,
    data: fagsaker = EMPTY_ARRAY,
    status: søkeStatus,
    error: fagsakError,
  } = useMutation({
    mutationFn: (valuesToStore: { searchString: string }) => søkFagsak(valuesToStore.searchString),
    onSuccess: resultatFagsaker => {
      if (resultatFagsaker.length === 1) {
        goToFagsak(resultatFagsaker[0].saksnummer);
      }
    },
  });

  const searchResultAccessDenied =
    fagsakError && fagsakError instanceof HTTPError && fagsakError.response.status === 403
      ? //@ts-expect-error response.data når ein refaktorerar feilhåndteringa
        fagsakError.response?.data
      : undefined;

  return (
    <FagsakSokSakIndex
      fagsaker={fagsaker}
      searchFagsakCallback={searchFagsaker}
      searchResultReceived={søkeStatus === 'success'}
      selectFagsakCallback={goToFagsak}
      searchStarted={søkeStatus === 'pending'}
      searchResultAccessDenied={searchResultAccessDenied}
      alleKodeverk={notEmpty(alleKodeverk)}
    />
  );
};
