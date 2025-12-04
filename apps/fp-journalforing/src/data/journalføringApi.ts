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
  timeout: 15000,
  hooks: {
    beforeRequest: [
      request => {
        const navCallId = `CallId_${Date.now()}_${Math.floor(Math.random() * 1000000000)}`;
        request.headers.set('Nav-Callid', navCallId);
      },
    ],
  },
});

//MÅ være en gyldig URL for at KY skal fungere i test
const isTest = import.meta.env.MODE === 'test';
const wrapUrl = (url: string) => (isTest ? `https://www.test.com${url}` : url);

export const FpmottakUrl = {
  ALLE_JOURNAL_OPPGAVER: wrapUrl('/fpmottak/api/journalfoering/oppgaver'),
  HENT_JOURNALPOST_DETALJER: wrapUrl('/fpmottak/api/journalfoering/oppgave/detaljer'),
  FERDIGSTILL_JOURNALFØRING: wrapUrl('/fpmottak/api/sak/ferdigstill'),
  KNYTT_JOURNALPOST_TIL_ANNEN_SAK: wrapUrl('/fpmottak/api/sak/knyttTilAnnenSak'),
  OPPDATER_MED_BRUKER: wrapUrl('/fpmottak/api/journalfoering/bruker/oppdater'),
  HENT_BRUKER: wrapUrl('/fpmottak/api/journalfoering/bruker/hent'),
  RESERVER_OPPGAVE: wrapUrl('/fpmottak/api/journalfoering/oppgave/reserver'),
  FLYTT_OPPGAVE_TIL_GOSYS: wrapUrl('/fpmottak/api/journalfoering/oppgave/tilgosys'),
};

export const hentAlleJournalOppgaver = (ident?: string) =>
  queryOptions({
    queryKey: [FpmottakUrl.ALLE_JOURNAL_OPPGAVER, ident],
    queryFn: () =>
      kyExtended.get(FpmottakUrl.ALLE_JOURNAL_OPPGAVER, { searchParams: { ident: ident ?? '' } }).json<Oppgave[]>(),
    enabled: ident !== undefined,
    staleTime: Infinity,
  });

export const hentJournalpostDetaljer = (journalpostId: string) =>
  kyExtended.get(FpmottakUrl.HENT_JOURNALPOST_DETALJER, { searchParams: { journalpostId } }).json<Journalpost>();

export const ferdigstillJournalføring = (values: JournalførSubmitValue) =>
  kyExtended.post(FpmottakUrl.FERDIGSTILL_JOURNALFØRING, { json: values }).json<SaksnummerType>();

export const knyttJournalpostTilAnnenSak = (values: JournalførSubmitValue) =>
  kyExtended.post(FpmottakUrl.KNYTT_JOURNALPOST_TIL_ANNEN_SAK, { json: values }).json<SaksnummerType>();

export const oppdaterMedBruker = (values: OppdaterMedBruker) =>
  kyExtended.post(FpmottakUrl.OPPDATER_MED_BRUKER, { json: values }).json<Journalpost>();

export const hentBruker = (fødselsnummer: string) =>
  kyExtended.post(FpmottakUrl.HENT_BRUKER, { json: { fødselsnummer } }).json<ForhåndsvisBrukerRespons>();

export const reserverBruker = (values: ReserverOppgaveType) =>
  kyExtended.post(FpmottakUrl.RESERVER_OPPGAVE, { json: values }).json<void>();

export const flyttOppgaveTilGosys = (journalpostId: string) =>
  kyExtended.post(FpmottakUrl.FLYTT_OPPGAVE_TIL_GOSYS, { json: { journalpostId } }).json<void>();

type BrukerInfo = {
  onPremisesSamAccountName: string;
  displayName: string;
  givenName: string;
  mail: string;
  officeLocation: string;
  surname: string;
  userPrincipalName: string;
  id: string;
  jobTitle: string;
};

export const brukerOptions = () =>
  queryOptions({
    queryKey: ['bruker'],
    queryFn: () => kyExtended.get(`${globalThis.location.href}me`).json<BrukerInfo>(),
    staleTime: Infinity,
  });
