import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';
import pLimit from 'p-limit';

import type { ReservasjonStatus, SaksbehandlerProfil } from '@navikt/fp-los-felles';
import type { AlleKodeverkLos, AndreKriterierType } from '@navikt/fp-types';

import type { Avdeling } from '../typer/avdelingTsType';
import type { BehandlingVentefrist } from '../typer/behandlingVentefristTsType';
import type { InnloggetBruker } from '../typer/innloggetBruker';
import type { OppgaverForAvdeling } from '../typer/oppgaverForAvdelingTsType';
import type { OppgaveForDato } from '../typer/oppgaverForDatoTsType';
import type { OppgaverForForsteStonadsdag } from '../typer/oppgaverForForsteStonadsdagTsType';
import type { OppgaverSomErApneEllerPaVent } from '../typer/oppgaverSomErApneEllerPaVentTsType';
import type { Reservasjon } from '../typer/reservasjonTsType';
import type { SaksbehandlereOgSaksbehandlerGrupper } from '../typer/saksbehandlereOgSaksbehandlerGrupper';
import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';

export type InitDataLos = {
  innloggetBruker: InnloggetBruker;
  avdelinger: Avdeling[];
};

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

export const LosUrl = {
  KODEVERK_LOS: wrapUrl('/fplos/api/kodeverk'),
  INIT_FETCH: wrapUrl('/fplos/api/avdelingsleder/init-fetch'),
  SAKSBEHANDLERE_FOR_AVDELING: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere'),
  OPPGAVE_AVDELING_ANTALL: wrapUrl('/fplos/api/avdelingsleder/oppgaver/avdelingantall'),
  SAKSLISTER_FOR_AVDELING: wrapUrl('/fplos/api/avdelingsleder/sakslister'),
  OPPRETT_NY_SAKSLISTE: wrapUrl('/fplos/api/avdelingsleder/sakslister'),
  OPPGAVE_ANTALL: wrapUrl('/fplos/api/avdelingsleder/oppgaver/antall'),
  LAGRE_SAKSLISTE_NAVN: wrapUrl('/fplos/api/avdelingsleder/sakslister/navn'),
  LAGRE_SAKSLISTE_SAKSBEHANDLER: wrapUrl('/fplos/api/avdelingsleder/sakslister/saksbehandler'),
  LAGRE_SAKSLISTE_SORTERING: wrapUrl('/fplos/api/avdelingsleder/sakslister/sortering'),
  LAGRE_SAKSLISTE_SORTERING_INTERVALL: wrapUrl('/fplos/api/avdelingsleder/sakslister/sortering-numerisk-intervall'),
  LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE: wrapUrl(
    '/fplos/api/avdelingsleder/sakslister/sortering-tidsintervall-type',
  ),
  LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO: wrapUrl(
    '/fplos/api/avdelingsleder/sakslister/sortering-tidsintervall-dato',
  ),
  LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE: wrapUrl('/fplos/api/avdelingsleder/sakslister/ytelsetyper'),
  LAGRE_SAKSLISTE_BEHANDLINGSTYPE: wrapUrl('/fplos/api/avdelingsleder/sakslister/behandlingstype'),
  LAGRE_SAKSLISTE_ANDRE_KRITERIER: wrapUrl('/fplos/api/avdelingsleder/sakslister/andre-kriterier'),
  HENT_OPPGAVER_FOR_AVDELING: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid'),
  HENT_OPPGAVER_PER_DATO: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid-historikk'),
  HENT_OPPGAVER_APNE_ELLER_PA_VENT: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/åpne-behandlinger'),
  HENT_BEHANDLINGER_FRISTUTLOP: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/frist-utløp'),
  HENT_OPPGAVER_PER_FORSTE_STONADSDAG: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/behandlinger-første-stønadsdag'),
  RESERVASJONER_FOR_AVDELING: wrapUrl('/fplos/api/avdelingsleder/reservasjoner'),
  SLETT_SAKSLISTE: wrapUrl('/fplos/api/avdelingsleder/sakslister/slett'),
  HENT_GRUPPER: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/grupper'),
  OPPRETT_GRUPPE: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/grupper/opprett-gruppe'),
  LEGG_SAKSBEHANDLER_TIL_GRUPPE: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/grupper/legg-til-saksbehandler'),
  FJERN_SAKSBEHANDLER_FRA_GRUPPE: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/grupper/fjern-saksbehandler'),
  ENDRE_GRUPPENAVN: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/grupper/endre-gruppenavn'),
  SLETT_GRUPPE: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/grupper/slett-saksbehandlergruppe'),
  AVDELINGSLEDER_OPPHEVER_RESERVASJON: wrapUrl('/fplos/api/avdelingsleder/reservasjoner/opphev'),
  FLYTT_RESERVASJON: wrapUrl('/fplos/api/reservasjon/flytt-reservasjon'),
  ENDRE_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/endre-varighet'),
  FLYTT_RESERVASJON_SAKSBEHANDLER_SOK: wrapUrl('/fplos/api/reservasjon/flytt-reservasjon/søk'),
  SLETT_SAKSBEHANDLER: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/slett'),
  SAKSBEHANDLER_SOK: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere/søk'),
  OPPRETT_NY_SAKSBEHANDLER: wrapUrl('/fplos/api/avdelingsleder/saksbehandlere'),
};

export const initFetchOptions = () =>
  queryOptions({
    queryKey: [LosUrl.INIT_FETCH],
    queryFn: () => kyExtended.get(LosUrl.INIT_FETCH).json<InitDataLos>(),
  });

export const oppgaverForAvdelingAntallOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL, avdelingEnhet],
    queryFn: () => kyExtended.get(LosUrl.OPPGAVE_AVDELING_ANTALL, { searchParams: { avdelingEnhet } }).json<number>(),
  });

export const sakslisterForAvdelingOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING, avdelingEnhet],
    queryFn: () =>
      kyExtended.get(LosUrl.SAKSLISTER_FOR_AVDELING, { searchParams: { avdelingEnhet } }).json<SakslisteAvdeling[]>(),
    initialData: [],
  });

export const saksbehandlareForAvdelingOptions = (avdelingEnhet?: string) =>
  queryOptions({
    queryKey: [LosUrl.SAKSBEHANDLERE_FOR_AVDELING, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.SAKSBEHANDLERE_FOR_AVDELING, { searchParams: { avdelingEnhet: avdelingEnhet ?? '' } })
        .json<SaksbehandlerProfil[]>(),
    initialData: [],
    enabled: !!avdelingEnhet,
  });

// Limit concurrency to 2 requests at once
const limit = pLimit(2);

export const oppgaveAntallOptions = (sakslisteId: number, avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVE_ANTALL, sakslisteId, avdelingEnhet],
    queryFn: () =>
      limit(() =>
        kyExtended.get(LosUrl.OPPGAVE_ANTALL, { searchParams: { sakslisteId, avdelingEnhet } }).json<number>(),
      ),
  });

export const losKodeverkOptions = () =>
  queryOptions({
    queryKey: [LosUrl.KODEVERK_LOS],
    queryFn: () => kyExtended.get(LosUrl.KODEVERK_LOS).json<AlleKodeverkLos>(),
    staleTime: Infinity,
  });

export const grupperOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_GRUPPER, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_GRUPPER, { searchParams: { avdelingEnhet } })
        .json<SaksbehandlereOgSaksbehandlerGrupper>(),
  });

export const oppgaverPerFørsteStønadsdagOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG, { searchParams: { avdelingEnhet } })
        .json<OppgaverForForsteStonadsdag[]>(),
    initialData: [],
  });

export const oppgaverÅpneEllerPåVentOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT, { searchParams: { avdelingEnhet } })
        .json<OppgaverSomErApneEllerPaVent[]>(),
    initialData: [],
  });

export const oppgaverForAvdelingOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_FOR_AVDELING, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_OPPGAVER_FOR_AVDELING, { searchParams: { avdelingEnhet } })
        .json<OppgaverForAvdeling[]>(),
    initialData: [],
  });

export const oppgaverPerDatoOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_PER_DATO, avdelingEnhet],
    queryFn: () =>
      kyExtended.get(LosUrl.HENT_OPPGAVER_PER_DATO, { searchParams: { avdelingEnhet } }).json<OppgaveForDato[]>(),
    initialData: [],
  });

export const behandlingerFristUtløptOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_BEHANDLINGER_FRISTUTLOP, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_BEHANDLINGER_FRISTUTLOP, { searchParams: { avdelingEnhet } })
        .json<BehandlingVentefrist[]>(),
    initialData: [],
  });

export const reservasjonerForAvdelingOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.RESERVASJONER_FOR_AVDELING, avdelingEnhet],
    queryFn: () =>
      kyExtended.get(LosUrl.RESERVASJONER_FOR_AVDELING, { searchParams: { avdelingEnhet } }).json<Reservasjon[]>(),
    initialData: [],
  });

export const opprettNySaksliste = (avdelingEnhet: string) =>
  kyExtended.post(LosUrl.OPPRETT_NY_SAKSLISTE, { json: { avdelingEnhet } }).json<{ sakslisteId: string }>();

export const lagreSakslisteNavn = (sakslisteId: number, navn: string, avdelingEnhet: string) =>
  kyExtended.post(LosUrl.LAGRE_SAKSLISTE_NAVN, { json: { sakslisteId, navn, avdelingEnhet } }).json();

export const lagreSakslisteSaksbehandler = (
  sakslisteId: number,
  brukerIdent: string,
  checked: boolean,
  avdelingEnhet: string,
) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, { json: { sakslisteId, brukerIdent, checked, avdelingEnhet } })
    .json();

export const lagreSakslisteSortering = (sakslisteId: number, sakslisteSorteringValg: string, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_SORTERING, { json: { sakslisteId, sakslisteSorteringValg, avdelingEnhet } })
    .json();

export const lagreSakslisteSorteringIntervall = (
  sakslisteId: number,
  fra: string | undefined,
  til: string | undefined,
  avdelingEnhet: string,
) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_SORTERING_INTERVALL, { json: { sakslisteId, fra, til, avdelingEnhet } })
    .json();

export const lagreSakslisteSorteringDynamiskPeriode = (sakslisteId: number, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE, {
      json: { sakslisteId, avdelingEnhet },
    })
    .json();

export const lagreSakslisteSorteringTidsintervallDato = (
  sakslisteId: number,
  avdelingEnhet: string,
  fomDato?: string,
  tomDato?: string,
) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO, {
      json: { sakslisteId, avdelingEnhet, fomDato, tomDato },
    })
    .json();

export const lagreSakslisteFagsakYtelseType = (
  sakslisteId: number,
  avdelingEnhet: string,
  fagsakYtelseType: string,
  checked: boolean,
) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE, {
      json: { sakslisteId, avdelingEnhet, fagsakYtelseType, checked },
    })
    .json();

export const lagreSakslisteBehandlingstype = (
  sakslisteId: number,
  avdelingEnhet: string,
  behandlingType: string,
  checked: boolean,
) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_BEHANDLINGSTYPE, {
      json: { sakslisteId, avdelingEnhet, behandlingType, checked },
    })
    .json();

export const lagreSakslisteAndreKriterier = (
  sakslisteId: number,
  avdelingEnhet: string,
  andreKriterierType: AndreKriterierType,
  checked: boolean,
  inkluder: boolean,
) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_ANDRE_KRITERIER, {
      json: { sakslisteId, avdelingEnhet, andreKriterierType, checked, inkluder },
    })
    .json();

export const slettSaksliste = (sakslisteId: number, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.SLETT_SAKSLISTE, {
      json: { sakslisteId, avdelingEnhet },
    })
    .json();

export const opprettGruppe = (avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.OPPRETT_GRUPPE, {
      json: { avdelingEnhet },
    })
    .json();

export const leggSaksbehandlerTilGruppe = (brukerIdent: string, avdelingEnhet: string, gruppeId: number) =>
  kyExtended
    .post(LosUrl.LEGG_SAKSBEHANDLER_TIL_GRUPPE, {
      json: { brukerIdent, avdelingEnhet, gruppeId },
    })
    .json();

export const fjernSaksbehandlerFraGruppe = (brukerIdent: string, avdelingEnhet: string, gruppeId: number) =>
  kyExtended
    .post(LosUrl.FJERN_SAKSBEHANDLER_FRA_GRUPPE, {
      json: { brukerIdent, avdelingEnhet, gruppeId },
    })
    .json();

export const endreGruppenavn = (gruppeId: number, gruppeNavn: string, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.ENDRE_GRUPPENAVN, {
      json: { gruppeId, gruppeNavn, avdelingEnhet },
    })
    .json();

export const slettGruppe = (gruppeId: number, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.SLETT_GRUPPE, {
      json: { gruppeId, avdelingEnhet },
    })
    .json();

export const opphevReservasjon = (oppgaveId: number) =>
  kyExtended
    .post(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, {
      json: { oppgaveId },
    })
    .json();

export const flyttReservasjon = (oppgaveId: number, brukerIdent: string, begrunnelse: string) =>
  kyExtended
    .post(LosUrl.FLYTT_RESERVASJON, {
      json: { oppgaveId, brukerIdent, begrunnelse },
    })
    .json<ReservasjonStatus>();

export const endreReservasjon = (oppgaveId: number, reserverTil: string) =>
  kyExtended
    .post(LosUrl.ENDRE_OPPGAVERESERVASJON, {
      json: { oppgaveId, reserverTil },
    })
    .json<ReservasjonStatus>();

export const flyttReservasjonSaksbehandlerSøk = (brukerIdent: string) =>
  kyExtended
    .post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, {
      json: { brukerIdent },
    })
    .json<SaksbehandlerProfil>();

export const slettSaksbehandler = (brukerIdent: string, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.SLETT_SAKSBEHANDLER, {
      json: { brukerIdent, avdelingEnhet },
    })
    .json();

export const saksbehandlgerSøk = (brukerIdent: string) =>
  kyExtended
    .post(LosUrl.SAKSBEHANDLER_SOK, {
      json: { brukerIdent },
    })
    .json<SaksbehandlerProfil | null>();

export const opprettNySaksbehandler = (brukerIdent: string, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, {
      json: { brukerIdent, avdelingEnhet },
    })
    .json();
