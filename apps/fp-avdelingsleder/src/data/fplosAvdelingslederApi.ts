import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import {
  type AlleKodeverkLos,
  type InitLinksDto,
  type KøStatistikkDto,
  type NøkkeltallBehandlingFørsteUttakDto,
  type NøkkeltallBehandlingVentefristUtløperDto,
  type OppgaverForAvdeling,
  type OppgaverForAvdelingPerDato,
  type OppgaverForFørsteStønadsdagUkeMåned,
  type ReservasjonDto,
  type ReservasjonStatusDto,
  type SaksbehandlerDto,
  type SaksbehandlereOgSaksbehandlerGrupper,
  type SakslisteDto,
  type SakslisteLagreDto,
} from '@navikt/fp-types';

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
  ENDRE_EKSISTERENDE_SAKSLISTE: wrapUrl('/fplos/api/avdelingsleder/sakslister/endre'),
  OPPGAVE_ANTALL: wrapUrl('/fplos/api/avdelingsleder/oppgaver/antall'),
  LAGRE_SAKSLISTE_SAKSBEHANDLER: wrapUrl('/fplos/api/avdelingsleder/sakslister/saksbehandler'),
  HENT_OPPGAVER_FOR_AVDELING: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid'),
  HENT_OPPGAVER_PER_DATO: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid-historikk'),
  HENT_OPPGAVER_APNE_ELLER_PA_VENT: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/åpne-behandlinger'),
  HENT_BEHANDLINGER_FRISTUTLOP: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/frist-utløp'),
  HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND: wrapUrl(
    '/fplos/api/avdelingsleder/nøkkeltall/behandlinger-første-stønadsdag-mnd',
  ),
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
  OPPGAVE_FILTER_STATISTIKK: wrapUrl('/fplos/api/avdelingsleder/nøkkeltall/statistikk-oppgave-filter'),
};

export const initFetchOptions = () =>
  queryOptions({
    queryKey: [LosUrl.INIT_FETCH],
    queryFn: () => kyExtended.get(LosUrl.INIT_FETCH).json<InitLinksDto>(),
  });

const getOppgaveFilterStatistikk = (sakslisteId: number, avdelingEnhet: string) =>
  kyExtended
    .get(LosUrl.OPPGAVE_FILTER_STATISTIKK, { searchParams: { sakslisteId, avdelingEnhet } })
    .json<KøStatistikkDto[]>();

export const oppgaveFilterStatistikkOptions = (valgtSakslisteId: number, valgtAvdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVE_FILTER_STATISTIKK, valgtSakslisteId, valgtAvdelingEnhet],
    queryFn: () => getOppgaveFilterStatistikk(valgtSakslisteId, valgtAvdelingEnhet),
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
      kyExtended.get(LosUrl.SAKSLISTER_FOR_AVDELING, { searchParams: { avdelingEnhet } }).json<SakslisteDto[]>(),
    initialData: [],
  });

export const saksbehandlareForAvdelingOptions = (avdelingEnhet?: string) =>
  queryOptions({
    queryKey: [LosUrl.SAKSBEHANDLERE_FOR_AVDELING, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.SAKSBEHANDLERE_FOR_AVDELING, { searchParams: { avdelingEnhet: avdelingEnhet ?? '' } })
        .json<SaksbehandlerDto[]>(),
    initialData: [],
    enabled: !!avdelingEnhet,
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

export const oppgaverPerFørsteStønadsdagMånedOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND, { searchParams: { avdelingEnhet } })
        .json<OppgaverForFørsteStønadsdagUkeMåned[]>(),
    initialData: [],
  });

export const oppgaverÅpneEllerPåVentOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT, { searchParams: { avdelingEnhet } })
        .json<NøkkeltallBehandlingFørsteUttakDto[]>(),
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
      kyExtended
        .get(LosUrl.HENT_OPPGAVER_PER_DATO, { searchParams: { avdelingEnhet } })
        .json<OppgaverForAvdelingPerDato[]>(),
    initialData: [],
  });

export const behandlingerFristUtløptOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_BEHANDLINGER_FRISTUTLOP, avdelingEnhet],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_BEHANDLINGER_FRISTUTLOP, { searchParams: { avdelingEnhet } })
        .json<NøkkeltallBehandlingVentefristUtløperDto[]>(),
    initialData: [],
  });

export const reservasjonerForAvdelingOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.RESERVASJONER_FOR_AVDELING, avdelingEnhet],
    queryFn: () =>
      kyExtended.get(LosUrl.RESERVASJONER_FOR_AVDELING, { searchParams: { avdelingEnhet } }).json<ReservasjonDto[]>(),
    initialData: [],
  });

export const opprettNySaksliste = (avdelingEnhet: string) =>
  kyExtended.post(LosUrl.OPPRETT_NY_SAKSLISTE, { json: { avdelingEnhet } }).json<{ sakslisteId: string }>();

export const lagreUtvalgskriterierForKø = (sakslisteDto: SakslisteLagreDto) =>
  kyExtended.post(LosUrl.ENDRE_EKSISTERENDE_SAKSLISTE, { json: sakslisteDto }).json();

export const lagreSakslisteSaksbehandler = (
  sakslisteId: number,
  brukerIdent: string,
  checked: boolean,
  avdelingEnhet: string,
) =>
  kyExtended
    .post(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, { json: { sakslisteId, brukerIdent, checked, avdelingEnhet } })
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
    .json<ReservasjonStatusDto>();

export const endreReservasjon = (oppgaveId: number, reserverTil: string) =>
  kyExtended
    .post(LosUrl.ENDRE_OPPGAVERESERVASJON, {
      json: { oppgaveId, reserverTil },
    })
    .json<ReservasjonStatusDto>();

export const flyttReservasjonSaksbehandlerSøk = (brukerIdent: string) =>
  kyExtended
    .post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, {
      json: { brukerIdent },
    })
    .json<SaksbehandlerDto>();

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
    .json<SaksbehandlerDto | null>();

export const opprettNySaksbehandler = (brukerIdent: string, avdelingEnhet: string) =>
  kyExtended
    .post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, {
      json: { brukerIdent, avdelingEnhet },
    })
    .json();
