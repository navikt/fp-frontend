import { RestApiConfigBuilder, createRequestApi, RestKey } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { FodselOgTilrettelegging } from '@navikt/fp-types';

import { behandlingFellesEndepunkter } from '../../../felles/data/behandlingFellesApi';

export const SvpBehandlingApiKeys = {
  SVANGERSKAPSPENGER_TILRETTELEGGING: new RestKey<FodselOgTilrettelegging, void>('SVANGERSKAPSPENGER_TILRETTELEGGING'),
};

const endepunkter = new RestApiConfigBuilder()

  // behandlingsdata
  .withRel('svangerskapspenger-tilrettelegging', SvpBehandlingApiKeys.SVANGERSKAPSPENGER_TILRETTELEGGING)

  .build();

const alleEndepunkter = endepunkter.concat(behandlingFellesEndepunkter);

export const requestSvpApi = createRequestApi(alleEndepunkter);

export const restApiSvpHooks = RestApiHooks.initHooks(requestSvpApi);
