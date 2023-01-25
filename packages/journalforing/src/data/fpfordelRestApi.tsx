import {
  RestApiConfigBuilder, createRequestApi, RestKey,
} from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import Journalpost from '../typer/journalpostTsType';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';

export const RestApiPathsKeys = {
  ALLE_JOURNAL_OPPGAVER: new RestKey<OppgaveOversikt[], { avdelingEnhet?: string }>('ALLE_JOURNAL_OPPGAVER'),
  HENT_JOURNALPOST_DETALJER: new RestKey<Journalpost, { journalpostId: string }>('HENT_JOURNALPOST_DETALJER'),
};

export const endpoints = new RestApiConfigBuilder()
  .withGet('/fpfordel/api/journalfoering/oppgaver', RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER)
<<<<<<< HEAD
=======
  .withGet('/fpfordel/api/journalfoering/oppgave/detaljer', RestApiPathsKeys.HENT_JOURNALPOST_DETALJER)
>>>>>>> 850ae30e3 (Detaljert visning av sak)
  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
