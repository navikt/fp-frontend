import { RestApiConfigBuilder, createRequestApi, RestKey } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { AlleKodeverk } from '@navikt/fp-types';
import { Oppgave } from '@navikt/fp-los-felles';

import Avdeling from '../typer/avdelingTsType';
import SakslisteAvdeling from '../typer/sakslisteAvdelingTsType';
import SaksbehandlerAvdeling from '../typer/saksbehandlerAvdelingTsType';
import OppgaverForAvdeling from '../typer/oppgaverForAvdelingTsType';
import OppgaveForDato from '../typer/oppgaverForDatoTsType';
import BehandlingVentefrist from '../typer/behandlingVentefristTsType';
import OppgaverForForsteStonadsdag from '../typer/oppgaverForForsteStonadsdagTsType';
import OppgaverSomErApneEllerPaVent from '../typer/oppgaverSomErApneEllerPaVentTsType';
import Reservasjon from '../typer/reservasjonTsType';
import SaksbehandlerForFlytting from '../typer/saksbehandlerForFlyttingTsType';

export const RestApiGlobalStatePathsKeys = {
  KODEVERK_LOS: new RestKey<AlleKodeverk, void>('KODEVERK_LOS'),
};

export const RestApiPathsKeys = {
  AVDELINGER: new RestKey<Avdeling[], void>('AVDELINGER'),
  OPPHEV_OPPGAVERESERVASJON: new RestKey<void, { oppgaveId: number; begrunnelse: string }>('OPPHEV_OPPGAVERESERVASJON'),
  FLYTT_RESERVASJON: new RestKey<void, { oppgaveId: number; brukerIdent: string; begrunnelse: string }>(
    'FLYTT_RESERVASJON',
  ),
  BEHANDLINGSKO_OPPGAVE_ANTALL: new RestKey<number, { sakslisteId: number }>('BEHANDLINGSKO_OPPGAVE_ANTALL'),
  SAKSLISTER_FOR_AVDELING: new RestKey<SakslisteAvdeling[], { avdelingEnhet: string }>('SAKSLISTER_FOR_AVDELING'),
  SAKSBEHANDLERE_FOR_AVDELING: new RestKey<SaksbehandlerAvdeling[], { avdelingEnhet: string }>(
    'SAKSBEHANDLERE_FOR_AVDELING',
  ),
  OPPGAVE_AVDELING_ANTALL: new RestKey<number, { avdelingEnhet: string }>('OPPGAVE_AVDELING_ANTALL'),
  OPPGAVE_ANTALL: new RestKey<number, { sakslisteId: number; avdelingEnhet: string }>('OPPGAVE_ANTALL'),
  SAKSBEHANDLER_SOK: new RestKey<SaksbehandlerAvdeling, { brukerIdent: string }>('SAKSBEHANDLER_SOK'),
  FLYTT_RESERVASJON_SAKSBEHANDLER_SOK: new RestKey<SaksbehandlerForFlytting, { brukerIdent: string }>(
    'FLYTT_RESERVASJON_SAKSBEHANDLER_SOK',
  ),
  ENDRE_OPPGAVERESERVASJON: new RestKey<Oppgave[], { oppgaveId: number; reserverTil: string }>(
    'ENDRE_OPPGAVERESERVASJON',
  ),
  OPPRETT_NY_SAKSBEHANDLER: new RestKey<void, { brukerIdent: string; avdelingEnhet: string }>(
    'OPPRETT_NY_SAKSBEHANDLER',
  ),
  SLETT_SAKSBEHANDLER: new RestKey<void, { brukerIdent: string; avdelingEnhet: string }>('SLETT_SAKSBEHANDLER'),
  HENT_OPPGAVER_FOR_AVDELING: new RestKey<OppgaverForAvdeling[], { avdelingEnhet: string }>(
    'HENT_OPPGAVER_FOR_AVDELING',
  ),
  HENT_OPPGAVER_PER_DATO: new RestKey<OppgaveForDato[], { avdelingEnhet: string }>('HENT_OPPGAVER_PER_DATO'),
  HENT_OPPGAVER_PER_FORSTE_STONADSDAG: new RestKey<OppgaverForForsteStonadsdag[], { avdelingEnhet: string }>(
    'HENT_OPPGAVER_PER_FORSTE_STONADSDAG',
  ),
  HENT_BEHANDLINGER_FRISTUTLOP: new RestKey<BehandlingVentefrist[], { avdelingEnhet: string }>(
    'HENT_BEHANDLINGER_FRISTUTLOP',
  ),
  HENT_OPPGAVER_APNE_ELLER_PA_VENT: new RestKey<OppgaverSomErApneEllerPaVent[], { avdelingEnhet: string }>(
    'HENT_OPPGAVER_APNE_ELLER_PA_VENT',
  ),
  RESERVASJONER_FOR_AVDELING: new RestKey<Reservasjon[], { avdelingEnhet: string }>('RESERVASJONER_FOR_AVDELING'),
  AVDELINGSLEDER_OPPHEVER_RESERVASJON: new RestKey<void, { oppgaveId: number }>('AVDELINGSLEDER_OPPHEVER_RESERVASJON'),
  OPPRETT_NY_SAKSLISTE: new RestKey<{ sakslisteId: string }, { avdelingEnhet: string }>('OPPRETT_NY_SAKSLISTE'),
  SLETT_SAKSLISTE: new RestKey<void, { sakslisteId: number; avdelingEnhet: string }>('SLETT_SAKSLISTE'),
  LAGRE_SAKSLISTE_NAVN: new RestKey<void, { sakslisteId: number; navn: string; avdelingEnhet: string }>(
    'LAGRE_SAKSLISTE_NAVN',
  ),
  LAGRE_SAKSLISTE_BEHANDLINGSTYPE: new RestKey<
    void,
    {
      sakslisteId: number;
      avdelingEnhet: string;
      behandlingType: string;
      checked: boolean;
    }
  >('LAGRE_SAKSLISTE_BEHANDLINGSTYPE'),
  LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE: new RestKey<
    void,
    {
      sakslisteId: number;
      avdelingEnhet: string;
      fagsakYtelseType: string;
      checked: boolean;
    }
  >('LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE'),
  LAGRE_SAKSLISTE_SORTERING: new RestKey<
    void,
    {
      sakslisteId: number;
      sakslisteSorteringValg: string;
      avdelingEnhet: string;
    }
  >('LAGRE_SAKSLISTE_SORTERING'),
  LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE: new RestKey<
    void,
    {
      sakslisteId: number;
      avdelingEnhet: string;
    }
  >('LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE'),
  LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO: new RestKey<
    void,
    {
      sakslisteId: number;
      avdelingEnhet: string;
      fomDato: string;
      tomDato: string;
    }
  >('LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO'),
  LAGRE_SAKSLISTE_SORTERING_INTERVALL: new RestKey<
    void,
    {
      sakslisteId: number;
      fra: number;
      til: number;
      avdelingEnhet: string;
    }
  >('LAGRE_SAKSLISTE_SORTERING_INTERVALL'),
  LAGRE_SAKSLISTE_ANDRE_KRITERIER: new RestKey<
    void,
    {
      sakslisteId: number;
      avdelingEnhet: string;
      andreKriterierType: string;
      checked: boolean;
      inkluder: boolean;
    }
  >('LAGRE_SAKSLISTE_ANDRE_KRITERIER'),
  LAGRE_SAKSLISTE_SAKSBEHANDLER: new RestKey<
    void,
    {
      sakslisteId: number;
      brukerIdent: string;
      checked: boolean;
      avdelingEnhet: string;
    }
  >('LAGRE_SAKSLISTE_SAKSBEHANDLER'),
};

export const endpoints = new RestApiConfigBuilder()
  .withGet('/fplos/api/kodeverk', RestApiGlobalStatePathsKeys.KODEVERK_LOS)

  // Avdelingsleder
  .withGet('/fplos/api/avdelingsleder/avdelinger', RestApiPathsKeys.AVDELINGER)
  .withGet('/fplos/api/avdelingsleder/sakslister', RestApiPathsKeys.SAKSLISTER_FOR_AVDELING)
  .withGet('/fplos/api/avdelingsleder/saksbehandlere', RestApiPathsKeys.SAKSBEHANDLERE_FOR_AVDELING)
  .withGet('/fplos/api/avdelingsleder/oppgaver/avdelingantall', RestApiPathsKeys.OPPGAVE_AVDELING_ANTALL)
  .withGet('/fplos/api/avdelingsleder/oppgaver/antall', RestApiPathsKeys.OPPGAVE_ANTALL)
  .withPost('/fplos/api/avdelingsleder/sakslister', RestApiPathsKeys.OPPRETT_NY_SAKSLISTE)
  .withPost('/fplos/api/avdelingsleder/sakslister/slett', RestApiPathsKeys.SLETT_SAKSLISTE)
  .withPost('/fplos/api/avdelingsleder/sakslister/navn', RestApiPathsKeys.LAGRE_SAKSLISTE_NAVN)
  .withPost('/fplos/api/avdelingsleder/sakslister/behandlingstype', RestApiPathsKeys.LAGRE_SAKSLISTE_BEHANDLINGSTYPE)
  .withPost('/fplos/api/avdelingsleder/sakslister/ytelsetyper', RestApiPathsKeys.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE)
  .withPost('/fplos/api/avdelingsleder/sakslister/sortering', RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING)
  .withPost(
    '/fplos/api/avdelingsleder/sakslister/sortering-tidsintervall-type',
    RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE,
  )
  .withPost(
    '/fplos/api/avdelingsleder/sakslister/sortering-tidsintervall-dato',
    RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_TIDSINTERVALL_DATO,
  )
  .withPost(
    '/fplos/api/avdelingsleder/sakslister/sortering-numerisk-intervall',
    RestApiPathsKeys.LAGRE_SAKSLISTE_SORTERING_INTERVALL,
  )
  .withPost('/fplos/api/avdelingsleder/sakslister/andre-kriterier', RestApiPathsKeys.LAGRE_SAKSLISTE_ANDRE_KRITERIER)
  .withPost('/fplos/api/avdelingsleder/sakslister/saksbehandler', RestApiPathsKeys.LAGRE_SAKSLISTE_SAKSBEHANDLER)
  .withPost('/fplos/api/avdelingsleder/saksbehandlere/søk', RestApiPathsKeys.SAKSBEHANDLER_SOK)
  .withPost('/fplos/api/avdelingsleder/saksbehandlere', RestApiPathsKeys.OPPRETT_NY_SAKSBEHANDLER)
  .withPost('/fplos/api/avdelingsleder/saksbehandlere/slett', RestApiPathsKeys.SLETT_SAKSBEHANDLER)
  .withGet(
    '/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid',
    RestApiPathsKeys.HENT_OPPGAVER_FOR_AVDELING,
  )
  .withGet(
    '/fplos/api/avdelingsleder/nøkkeltall/behandlinger-under-arbeid-historikk',
    RestApiPathsKeys.HENT_OPPGAVER_PER_DATO,
  )
  .withGet(
    '/fplos/api/avdelingsleder/nøkkeltall/behandlinger-første-stønadsdag',
    RestApiPathsKeys.HENT_OPPGAVER_PER_FORSTE_STONADSDAG,
  )
  .withGet('/fplos/api/avdelingsleder/nøkkeltall/åpne-behandlinger', RestApiPathsKeys.HENT_OPPGAVER_APNE_ELLER_PA_VENT)
  .withGet('/fplos/api/avdelingsleder/nøkkeltall/frist-utløp', RestApiPathsKeys.HENT_BEHANDLINGER_FRISTUTLOP)
  .withGet('/fplos/api/avdelingsleder/reservasjoner', RestApiPathsKeys.RESERVASJONER_FOR_AVDELING)
  .withPost('/fplos/api/avdelingsleder/reservasjoner/opphev', RestApiPathsKeys.AVDELINGSLEDER_OPPHEVER_RESERVASJON)

  // Same URL som saksbehandlar brukar
  .withPost('/fplos/api/saksbehandler/oppgaver/flytt', RestApiPathsKeys.FLYTT_RESERVASJON)
  .withPost('/fplos/api/saksbehandler/oppgaver/flytt/søk', RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK)
  .withPost('/fplos/api/saksbehandler/oppgaver/reservasjon/endre', RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON)

  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
