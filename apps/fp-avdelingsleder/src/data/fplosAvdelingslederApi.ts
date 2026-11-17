import { queryOptions } from '@tanstack/react-query';

import { losEndepunkt, losGet, losPost, LosUrlFelles } from '@navikt/fp-los-felles';
import type {
  AktiveOgTilgjengligeOppgaverStatistikkForKøData,
  AktiveOgTilgjengligeOppgaverStatistikkForKøResponse,
  EndreSaksbehandlerGruppeData,
  FjernSaksbehandlerFraGruppeData,
  GetAlleBehandlingerForAvdelingData,
  GetAlleBehandlingerForAvdelingResponse,
  GetAlleOppgaverForAvdelingData,
  GetAlleOppgaverForAvdelingResponse,
  GetAlleVentefristerForAvdelingData,
  GetAlleVentefristerForAvdelingResponse,
  GetAntallOppgaverForAvdelingPerDatoData,
  GetAntallOppgaverForAvdelingPerDatoResponse,
  GetOppgaverPerFørsteStønadsdagMånedData,
  GetOppgaverPerFørsteStønadsdagMånedResponse,
  HentAntallOppgaverForAvdelingData,
  HentAntallOppgaverForAvdelingResponse,
  HentAntallOppgaverForSakslisteData,
  HentAntallOppgaverForSakslisteResponse,
  HentAvdelingensReservasjonerData,
  HentAvdelingensReservasjonerResponse,
  HentAvdelingensSaksbehandlereData,
  HentAvdelingensSaksbehandlereResponse,
  HentAvdelingensSakslisterData,
  HentAvdelingensSakslisterResponse,
  HentInitielleRessurserData,
  HentInitielleRessurserResponse,
  HentKriterieFilterData,
  HentKriterieFilterResponse,
  HentSaksbehandlerGrupperData,
  HentSaksbehandlerGrupperResponse,
  LagreNavnData,
  LeggSaksbehandlerTilGruppeData,
  LeggSaksbehandlerTilSakslisteData,
  LeggTilNySaksbehandlerData,
  OpphevOppgaveReservasjonData,
  OpprettNySakslisteData,
  OpprettNySakslisteResponse,
  OpprettSaksbehandlerGruppeData,
  OpprettSaksbehandlerGruppeResponse,
  SakslisteLagreDto,
  SlettSaksbehandlerData,
  SlettSaksbehandlerGruppeData,
  SlettSakslisteData,
  SøkAvdelingensSaksbehandlereData,
  SøkAvdelingensSaksbehandlereResponse,
} from '@navikt/fp-types';

export { losKodeverkOptions } from '@navikt/fp-los-felles';

export const LosUrl = {
  ...LosUrlFelles,
  KODEVERK_KRITERIE_FILTER: losEndepunkt<HentKriterieFilterData, HentKriterieFilterResponse>(
    '/api/kodeverk/kriterie-filter',
  ),
  INIT_FETCH: losEndepunkt<HentInitielleRessurserData, HentInitielleRessurserResponse>(
    '/api/avdelingsleder/init-fetch',
  ),
  SAKSBEHANDLERE_FOR_AVDELING: losEndepunkt<HentAvdelingensSaksbehandlereData, HentAvdelingensSaksbehandlereResponse>(
    '/api/avdelingsleder/saksbehandlere',
  ),
  OPPGAVE_AVDELING_ANTALL: losEndepunkt<HentAntallOppgaverForAvdelingData, HentAntallOppgaverForAvdelingResponse>(
    '/api/avdelingsleder/oppgaver/avdelingantall',
  ),
  SAKSLISTER_FOR_AVDELING: losEndepunkt<HentAvdelingensSakslisterData, HentAvdelingensSakslisterResponse>(
    '/api/avdelingsleder/sakslister',
  ),
  OPPRETT_NY_SAKSLISTE: losEndepunkt<OpprettNySakslisteData, OpprettNySakslisteResponse>(
    '/api/avdelingsleder/sakslister',
  ),
  ENDRE_EKSISTERENDE_SAKSLISTE: losEndepunkt<LagreNavnData>('/api/avdelingsleder/sakslister/endre'),
  OPPGAVE_ANTALL: losEndepunkt<HentAntallOppgaverForSakslisteData, HentAntallOppgaverForSakslisteResponse>(
    '/api/avdelingsleder/oppgaver/antall',
  ),
  LAGRE_SAKSLISTE_SAKSBEHANDLER: losEndepunkt<LeggSaksbehandlerTilSakslisteData>(
    '/api/avdelingsleder/sakslister/saksbehandler',
  ),
  HENT_OPPGAVER_FOR_AVDELING: losEndepunkt<GetAlleOppgaverForAvdelingData, GetAlleOppgaverForAvdelingResponse>(
    '/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid',
  ),
  HENT_OPPGAVER_PER_DATO: losEndepunkt<
    GetAntallOppgaverForAvdelingPerDatoData,
    GetAntallOppgaverForAvdelingPerDatoResponse
  >('/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid-historikk'),
  HENT_OPPGAVER_APNE_ELLER_PA_VENT: losEndepunkt<
    GetAlleBehandlingerForAvdelingData,
    GetAlleBehandlingerForAvdelingResponse
  >('/api/avdelingsleder/nøkkeltall/åpne-behandlinger'),
  HENT_BEHANDLINGER_FRISTUTLOP: losEndepunkt<
    GetAlleVentefristerForAvdelingData,
    GetAlleVentefristerForAvdelingResponse
  >('/api/avdelingsleder/nøkkeltall/frist-utløp'),
  HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND: losEndepunkt<
    GetOppgaverPerFørsteStønadsdagMånedData,
    GetOppgaverPerFørsteStønadsdagMånedResponse
  >('/api/avdelingsleder/nøkkeltall/behandlinger-første-stønadsdag-mnd'),
  RESERVASJONER_FOR_AVDELING: losEndepunkt<HentAvdelingensReservasjonerData, HentAvdelingensReservasjonerResponse>(
    '/api/avdelingsleder/reservasjoner',
  ),
  SLETT_SAKSLISTE: losEndepunkt<SlettSakslisteData>('/api/avdelingsleder/sakslister/slett'),
  HENT_GRUPPER: losEndepunkt<HentSaksbehandlerGrupperData, HentSaksbehandlerGrupperResponse>(
    '/api/avdelingsleder/saksbehandlere/grupper',
  ),
  OPPRETT_GRUPPE: losEndepunkt<OpprettSaksbehandlerGruppeData, OpprettSaksbehandlerGruppeResponse>(
    '/api/avdelingsleder/saksbehandlere/grupper/opprett-gruppe',
  ),
  LEGG_SAKSBEHANDLER_TIL_GRUPPE: losEndepunkt<LeggSaksbehandlerTilGruppeData>(
    '/api/avdelingsleder/saksbehandlere/grupper/legg-til-saksbehandler',
  ),
  FJERN_SAKSBEHANDLER_FRA_GRUPPE: losEndepunkt<FjernSaksbehandlerFraGruppeData>(
    '/api/avdelingsleder/saksbehandlere/grupper/fjern-saksbehandler',
  ),
  ENDRE_GRUPPENAVN: losEndepunkt<EndreSaksbehandlerGruppeData>(
    '/api/avdelingsleder/saksbehandlere/grupper/endre-gruppenavn',
  ),
  SLETT_GRUPPE: losEndepunkt<SlettSaksbehandlerGruppeData>(
    '/api/avdelingsleder/saksbehandlere/grupper/slett-saksbehandlergruppe',
  ),
  AVDELINGSLEDER_OPPHEVER_RESERVASJON: losEndepunkt<OpphevOppgaveReservasjonData>(
    '/api/avdelingsleder/reservasjoner/opphev',
  ),
  SLETT_SAKSBEHANDLER: losEndepunkt<SlettSaksbehandlerData>('/api/avdelingsleder/saksbehandlere/slett'),
  SAKSBEHANDLER_SOK: losEndepunkt<SøkAvdelingensSaksbehandlereData, SøkAvdelingensSaksbehandlereResponse>(
    '/api/avdelingsleder/saksbehandlere/søk',
  ),
  OPPRETT_NY_SAKSBEHANDLER: losEndepunkt<LeggTilNySaksbehandlerData>('/api/avdelingsleder/saksbehandlere'),
  OPPGAVE_FILTER_STATISTIKK: losEndepunkt<
    AktiveOgTilgjengligeOppgaverStatistikkForKøData,
    AktiveOgTilgjengligeOppgaverStatistikkForKøResponse
  >('/api/avdelingsleder/nøkkeltall/statistikk-oppgave-filter'),
};

export const initFetchOptions = () =>
  queryOptions({
    queryKey: [LosUrl.INIT_FETCH],
    queryFn: () => losGet(LosUrl.INIT_FETCH).json(),
  });

export const oppgaveFilterStatistikkOptions = (sakslisteId: number) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVE_FILTER_STATISTIKK, sakslisteId],
    queryFn: () => losGet(LosUrl.OPPGAVE_FILTER_STATISTIKK, { sakslisteId }).json(),
  });

export const oppgaverForAvdelingAntallOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVE_AVDELING_ANTALL, avdelingEnhet],
    queryFn: () => losGet(LosUrl.OPPGAVE_AVDELING_ANTALL, { avdelingEnhet }).json(),
  });

export const sakslisterForAvdelingOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.SAKSLISTER_FOR_AVDELING, avdelingEnhet],
    queryFn: () => losGet(LosUrl.SAKSLISTER_FOR_AVDELING, { avdelingEnhet }).json(),
    initialData: [],
  });

export const saksbehandlareForAvdelingOptions = (avdelingEnhet?: string) =>
  queryOptions({
    queryKey: [LosUrl.SAKSBEHANDLERE_FOR_AVDELING, avdelingEnhet],
    queryFn: () => losGet(LosUrl.SAKSBEHANDLERE_FOR_AVDELING, { avdelingEnhet: avdelingEnhet ?? '' }).json(),
    initialData: [],
    enabled: !!avdelingEnhet,
  });

export const kriterieFilterOptions = () =>
  queryOptions({
    queryKey: [LosUrl.KODEVERK_KRITERIE_FILTER],
    queryFn: () => losGet(LosUrl.KODEVERK_KRITERIE_FILTER).json(),
    staleTime: Infinity,
  });

export const grupperOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_GRUPPER, avdelingEnhet],
    queryFn: () => losGet(LosUrl.HENT_GRUPPER, { avdelingEnhet }).json(),
  });

export const oppgaverPerFørsteStønadsdagMånedOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND, avdelingEnhet],
    queryFn: () => losGet(LosUrl.HENT_OPPGAVER_PER_FORSTE_STONADSDAG_MND, { avdelingEnhet }).json(),
    initialData: [],
  });

export const oppgaverÅpneEllerPåVentOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT, avdelingEnhet],
    queryFn: () => losGet(LosUrl.HENT_OPPGAVER_APNE_ELLER_PA_VENT, { avdelingEnhet }).json(),
    initialData: [],
  });

export const oppgaverForAvdelingOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_FOR_AVDELING, avdelingEnhet],
    queryFn: () => losGet(LosUrl.HENT_OPPGAVER_FOR_AVDELING, { avdelingEnhet }).json(),
    initialData: [],
  });

export const oppgaverPerDatoOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_OPPGAVER_PER_DATO, avdelingEnhet],
    queryFn: () => losGet(LosUrl.HENT_OPPGAVER_PER_DATO, { avdelingEnhet }).json(),
    initialData: [],
  });

export const behandlingerFristUtløptOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.HENT_BEHANDLINGER_FRISTUTLOP, avdelingEnhet],
    queryFn: () => losGet(LosUrl.HENT_BEHANDLINGER_FRISTUTLOP, { avdelingEnhet }).json(),
    initialData: [],
  });

export const reservasjonerForAvdelingOptions = (avdelingEnhet: string) =>
  queryOptions({
    queryKey: [LosUrl.RESERVASJONER_FOR_AVDELING, avdelingEnhet],
    queryFn: () => losGet(LosUrl.RESERVASJONER_FOR_AVDELING, { avdelingEnhet }).json(),
    initialData: [],
  });

export const opprettNySaksliste = (avdelingEnhet: string) =>
  losPost(LosUrl.OPPRETT_NY_SAKSLISTE, { avdelingEnhet }).json();

export const lagreUtvalgskriterierForKø = (sakslisteDto: SakslisteLagreDto) =>
  losPost(LosUrl.ENDRE_EKSISTERENDE_SAKSLISTE, sakslisteDto).then(() => {});

export const lagreSakslisteSaksbehandler = (
  sakslisteId: number,
  brukerIdent: string,
  checked: boolean,
  avdelingEnhet: string,
) => losPost(LosUrl.LAGRE_SAKSLISTE_SAKSBEHANDLER, { sakslisteId, brukerIdent, checked, avdelingEnhet }).then(() => {});

export const slettSaksliste = (sakslisteId: number, avdelingEnhet: string) =>
  losPost(LosUrl.SLETT_SAKSLISTE, { sakslisteId, avdelingEnhet }).then(() => {});

export const opprettGruppe = (avdelingEnhet: string) =>
  losPost(LosUrl.OPPRETT_GRUPPE, { avdelingEnhet }).then(() => {});

export const leggSaksbehandlerTilGruppe = (brukerIdent: string, avdelingEnhet: string, gruppeId: number) =>
  losPost(LosUrl.LEGG_SAKSBEHANDLER_TIL_GRUPPE, { brukerIdent, avdelingEnhet, gruppeId }).then(() => {});

export const fjernSaksbehandlerFraGruppe = (brukerIdent: string, avdelingEnhet: string, gruppeId: number) =>
  losPost(LosUrl.FJERN_SAKSBEHANDLER_FRA_GRUPPE, { brukerIdent, avdelingEnhet, gruppeId }).then(() => {});

export const endreGruppenavn = (gruppeId: number, gruppeNavn: string, avdelingEnhet: string) =>
  losPost(LosUrl.ENDRE_GRUPPENAVN, { gruppeId, gruppeNavn, avdelingEnhet }).then(() => {});

export const slettGruppe = (gruppeId: number, avdelingEnhet: string) =>
  losPost(LosUrl.SLETT_GRUPPE, { gruppeId, avdelingEnhet }).then(() => {});

export const opphevReservasjon = (oppgaveId: number) =>
  losPost(LosUrl.AVDELINGSLEDER_OPPHEVER_RESERVASJON, { oppgaveId }).then(() => {});

export const slettSaksbehandler = (brukerIdent: string, avdelingEnhet: string) =>
  losPost(LosUrl.SLETT_SAKSBEHANDLER, { brukerIdent, avdelingEnhet }).then(() => {});

export const saksbehandlerSøk = async (brukerIdent: string) => {
  const response = await losPost(LosUrl.SAKSBEHANDLER_SOK, { brukerIdent });
  if (response.status === 204) {
    return;
  }
  return response.json();
};

export const opprettNySaksbehandler = (brukerIdent: string, avdelingEnhet: string) =>
  losPost(LosUrl.OPPRETT_NY_SAKSBEHANDLER, { brukerIdent, avdelingEnhet }).then(() => {});
