import { RestApiConfigBuilder, createRequestApi, RestKey } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import JournalførSubmitValue from '../typer/ferdigstillJournalføringSubmit';
import Journalpost from '../typer/journalpostTsType';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import SaksnummerType from '../typer/saksnummerTsType';
import OppdaterMedBruker from '../typer/oppdaterBrukerTsType';
import ForhåndsvisBrukerRespons from '../typer/forhåndsvisBrukerResponsTsType';

export const RestApiPathsKeys = {
  ALLE_JOURNAL_OPPGAVER: new RestKey<OppgaveOversikt[], { ident: string }>('ALLE_JOURNAL_OPPGAVER'),
  HENT_JOURNALPOST_DETALJER: new RestKey<Journalpost, { journalpostId: string }>('HENT_JOURNALPOST_DETALJER'),
  FERDIGSTILL_JOURNALFØRING: new RestKey<SaksnummerType, JournalførSubmitValue>('FERDIGSTILL_JOURNALFØRING'),
  OPPDATER_MED_BRUKER: new RestKey<Journalpost, OppdaterMedBruker>('OPPDATER_MED_BRUKER'),
  HENT_BRUKER: new RestKey<ForhåndsvisBrukerRespons, { fødselsnummer: string }>('HENT_BRUKER'),
};

export const endpoints = new RestApiConfigBuilder()
  .withGet('/fpfordel/api/journalfoering/oppgaver', RestApiPathsKeys.ALLE_JOURNAL_OPPGAVER)
  .withGet('/fpfordel/api/journalfoering/oppgave/detaljer', RestApiPathsKeys.HENT_JOURNALPOST_DETALJER)
  .withPost('/fpfordel/api/sak/ferdigstill', RestApiPathsKeys.FERDIGSTILL_JOURNALFØRING)
  .withPost('/fpfordel/api/bruker/oppdater', RestApiPathsKeys.OPPDATER_MED_BRUKER)
  .withPost('/fpfordel/api/bruker/hent', RestApiPathsKeys.HENT_BRUKER)
  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
