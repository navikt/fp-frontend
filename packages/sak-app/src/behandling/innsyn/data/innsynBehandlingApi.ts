import { Dokument } from '@navikt/ft-types';

import { RestApiConfigBuilder, createRequestApi, RestKey } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { Innsyn } from '@navikt/fp-types';

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
