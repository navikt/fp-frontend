import {
  RestApiConfigBuilder, createRequestApi, RestKey,
} from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';

export const RestApiPathsKeys = {
  ALLE_JOURNAL_OPPGAVER: new RestKey<OppgaveOversikt[], { avdelingEnhet?: string }>('ALLE_JOURNAL_OPPGAVER'),
};

export const endpoints = new RestApiConfigBuilder()
  .withGet('/fpfordel/api/journalfoering/oppgaver', RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER)
  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
