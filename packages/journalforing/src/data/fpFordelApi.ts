import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import type { JournalførSubmitValue } from '../typer/ferdigstillJournalføringSubmit';
import type { ForhåndsvisBrukerRespons } from '../typer/forhåndsvisBrukerResponsTsType';
import type { Journalpost } from '../typer/journalpostTsType';
import type { OppdaterMedBruker } from '../typer/oppdaterBrukerTsType';
import type { Oppgave } from '../typer/oppgaveTsType';
import type { ReserverOppgaveType } from '../typer/reserverOppgaveType';
import type { SaksnummerType } from '../typer/saksnummerTsType';

const kyExtended = ky.extend({
  retry: 0,
  hooks: {
    beforeRequest: [
      request => {
        const navCallId = `CallId_${new Date().getTime()}_${Math.floor(Math.random() * 1000000000)}`;
        request.headers.set('Nav-Callid', navCallId);
      },
    ],
  },
});

//MÅ være en gyldig URL for at KY skal fungere i test
const isTest = import.meta.env.MODE === 'test';
const wrapUrl = (url: string) => (isTest ? `http://www.test.com${url}` : url);

export const FpFordelUrl = {
  ALLE_JOURNAL_OPPGAVER: wrapUrl('/fpfordel/api/journalfoering/oppgaver'),
  HENT_JOURNALPOST_DETALJER: wrapUrl('/fpfordel/api/journalfoering/oppgave/detaljer'),
  FERDIGSTILL_JOURNALFØRING: wrapUrl('/fpfordel/api/sak/ferdigstill'),
  KNYTT_JOURNALPOST_TIL_ANNEN_SAK: wrapUrl('/fpfordel/api/sak/knyttTilAnnenSak'),
  OPPDATER_MED_BRUKER: wrapUrl('/fpfordel/api/journalfoering/bruker/oppdater'),
  HENT_BRUKER: wrapUrl('/fpfordel/api/journalfoering/bruker/hent'),
  RESERVER_OPPGAVE: wrapUrl('/fpfordel/api/journalfoering/oppgave/reserver'),
  FLYTT_OPPGAVE_TIL_GOSYS: wrapUrl('/fpfordel/api/journalfoering/oppgave/tilgosys'),
};

export const hentAlleJournalOppgaver = (ident?: string) =>
  queryOptions({
    queryKey: [FpFordelUrl.ALLE_JOURNAL_OPPGAVER, ident],
    queryFn: () =>
      kyExtended.get(FpFordelUrl.ALLE_JOURNAL_OPPGAVER, { searchParams: { ident: ident ?? '' } }).json<Oppgave[]>(),
    enabled: ident !== undefined,
    staleTime: Infinity,
  });

export const hentJournalpostDetaljer = (journalpostId: string) =>
  kyExtended.get(FpFordelUrl.HENT_JOURNALPOST_DETALJER, { searchParams: { journalpostId } }).json<Journalpost>();

export const ferdigstillJournalføring = (values: JournalførSubmitValue) =>
  kyExtended.post(FpFordelUrl.FERDIGSTILL_JOURNALFØRING, { json: values }).json<SaksnummerType>();

export const knyttJournalpostTilAnnenSak = (values: JournalførSubmitValue) =>
  kyExtended.post(FpFordelUrl.KNYTT_JOURNALPOST_TIL_ANNEN_SAK, { json: values }).json<SaksnummerType>();

export const oppdaterMedBruker = (values: OppdaterMedBruker) =>
  kyExtended.post(FpFordelUrl.OPPDATER_MED_BRUKER, { json: values }).json<Journalpost>();

export const hentBruker = (fødselsnummer: string) =>
  kyExtended.post(FpFordelUrl.HENT_BRUKER, { json: { fødselsnummer } }).json<ForhåndsvisBrukerRespons>();

export const reserverBruker = (values: ReserverOppgaveType) =>
  kyExtended.post(FpFordelUrl.RESERVER_OPPGAVE, { json: values }).json<void>();

export const flyttOppgaveTilGosys = (journalpostId: string) =>
  kyExtended.post(FpFordelUrl.FLYTT_OPPGAVE_TIL_GOSYS, { json: { journalpostId } }).json<void>();
