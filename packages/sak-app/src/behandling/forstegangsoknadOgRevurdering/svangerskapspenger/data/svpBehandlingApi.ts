import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import { FodselOgTilrettelegging } from '@fpsak-frontend/types';

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
