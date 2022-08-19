import { Dokument } from '@navikt/ft-types';

import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import { Innsyn } from '@fpsak-frontend/types';

import { behandlingFellesEndepunkter } from '../../felles/data/behandlingFellesApi';

export const InnsynBehandlingApiKeys = {
  INNSYN: new RestKey<Innsyn, void>('INNSYN'),
  INNSYN_DOKUMENTER: new RestKey<Dokument[], void>('INNSYN_DOKUMENTER'),
};

const endepunkter = new RestApiConfigBuilder()
  // behandlingsdata
  .withRel('innsyn', InnsynBehandlingApiKeys.INNSYN)
  .withRel('dokumenter', InnsynBehandlingApiKeys.INNSYN_DOKUMENTER)

  .build();

const alleEndepunkter = endepunkter.concat(behandlingFellesEndepunkter);

export const requestInnsynApi = createRequestApi(alleEndepunkter);

export const restApiInnsynHooks = RestApiHooks.initHooks(requestInnsynApi);
