import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { ApiPollingStatus } from '@navikt/fp-konstanter';
import { alleKodeverkLos, withQueryClient } from '@navikt/fp-storybook-utils';
import type { NavAnsatt } from '@navikt/fp-types';

import type { OppgaveFilterStatistikk } from '../../felles/src/typer/oppgaveFilterStatistikk.ts';
import { LosUrl } from './data/fplosSaksbehandlerApi';
import { SaksbehandlerIndex } from './SaksbehandlerIndex';
import { type Oppgave, type OppgaveMedStatus } from './typer/oppgaveTsType';
import type { Saksbehandler } from './typer/saksbehandlerTsType';
import type { Saksliste } from './typer/sakslisteTsType';

const SAKSLISTER = [
  {
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sortering: {
      sorteringType: 'BEHFRIST',
      fra: 1,
      til: 4,
      erDynamiskPeriode: true,
    },
    behandlingTyper: ['BT-002'],
    fagsakYtelseTyper: ['FP'],
    andreKriterier: [
      {
        andreKriterierType: 'TIL_BESLUTTER',
        inkluder: true,
      },
      {
        andreKriterierType: 'PAPIRSOKNAD',
        inkluder: false,
      },
    ],
  },
  {
    sakslisteId: 2,
    navn: 'Beslutter kø',
    sortering: {
      sorteringType: 'BEHFRIST',
      fra: 1,
      til: 4,
      erDynamiskPeriode: true,
    },
    behandlingTyper: ['BT-002', 'BT-004'],
    fagsakYtelseTyper: ['FP', 'SVP', 'ES'],
    andreKriterier: [
      {
        andreKriterierType: 'TIL_BESLUTTER',
        inkluder: true,
      },
    ],
  },
] satisfies Saksliste[];

const OPPGAVER_TIL_BEHANDLING = [
  {
    id: 1,
    reservasjonStatus: {
      erReservert: false,
    },
    saksnummer: '46435',
    personnummer: '3433434434',
    navn: 'Sara Sahara',
    system: 'SAK',
    behandlingstype: 'BT-002',
    opprettetTidspunkt: '2024-11-01',
    behandlingsfrist: '2024-11-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '12',
    andreKriterier: ['REVURDERING_INNTEKTSMELDING'],
  },
  {
    id: 4,
    reservasjonStatus: {
      erReservert: false,
    },
    saksnummer: '43546',
    personnummer: '53343423232',
    navn: 'Petter Utvikler',
    system: 'SAK',
    behandlingstype: 'BT-002',
    opprettetTidspunkt: '2024-01-01',
    behandlingsfrist: '2024-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '12',
    andreKriterier: [],
  },
  {
    id: 3,
    reservasjonStatus: {
      erReservert: false,
    },
    saksnummer: '35344',
    personnummer: '34343535423',
    navn: 'Helga Tester',
    system: 'SAK',
    behandlingstype: 'BT-002',
    opprettetTidspunkt: '2023-04-01',
    behandlingsfrist: '2023-04-05',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '34',
    andreKriterier: [],
  },
] satisfies Oppgave[];

const RESERVERTE_OPPGAVER = [
  {
    id: 2,
    reservasjonStatus: {
      erReservert: true,
      reservertTilTidspunkt: '2019-08-02T00:54:25.455',
      flyttetReservasjon: {
        navn: 'Petter',
        tidspunkt: '2019-08-02T00:54:25.455',
        uid: 'uid',
        begrunnelse: 'Denne er flyttet',
      },
    },
    saksnummer: '23233',
    personnummer: '5434231232',
    navn: 'Espen Utvikler',
    system: 'SAK',
    behandlingstype: 'BT-002',
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '2',
    andreKriterier: ['REVURDERING_INNTEKTSMELDING'],
  },
] satisfies Oppgave[];

const SAKSLISTE_SAKSBEHANDLERE = [
  {
    brukerIdent: {
      brukerIdent: '32434',
      verdi: '32434',
    },
    navn: 'Espen Utvikler',
  },
  {
    brukerIdent: {
      brukerIdent: '31111',
      verdi: '32111',
    },
    navn: 'Auto Joakim',
  },
] satisfies Saksbehandler[];

const BEHANDLEDE_OPPGAVER = [
  {
    id: 1,
    personnummer: '343453534',
    navn: 'Gaute Johansen',
    saksnummer: '54343',
    reservasjonStatus: {
      erReservert: false,
    },
    oppgaveBehandlingStatus: 'UNDER_ARBEID',
  } as OppgaveMedStatus,
  {
    id: 2,
    personnummer: '334342323',
    navn: 'Olga Mortensen',
    saksnummer: '13232',
    reservasjonStatus: {
      erReservert: false,
    },
    oppgaveBehandlingStatus: 'UNDER_ARBEID',
  } as OppgaveMedStatus,
];

// Hjelpefunksjon for relative datoer
const minusHours = (hours: number): string => {
  const date = new Date();
  date.setHours(date.getHours() - hours);
  return date.toISOString();
};

const OPPGAVE_KØ_STATISTIKK: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
  { tidspunkt: minusHours(43), aktive: 21, tilgjenglige: 5 },
  { tidspunkt: minusHours(42), aktive: 21, tilgjenglige: 4 },
  { tidspunkt: minusHours(41), aktive: 21, tilgjenglige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 19, tilgjenglige: 8 },
  { tidspunkt: minusHours(27), aktive: 19, tilgjenglige: 8 },
  { tidspunkt: minusHours(26), aktive: 19, tilgjenglige: 6 },
  { tidspunkt: minusHours(25), aktive: 18, tilgjenglige: 3 },
  { tidspunkt: minusHours(24), aktive: 18, tilgjenglige: 1 },
  { tidspunkt: minusHours(23), aktive: 24, tilgjenglige: 5 },
  { tidspunkt: minusHours(22), aktive: 27, tilgjenglige: 7 },
  { tidspunkt: minusHours(21), aktive: 27, tilgjenglige: 7 },
  { tidspunkt: minusHours(20), aktive: 25, tilgjenglige: 9 },
  { tidspunkt: minusHours(19), aktive: 21, tilgjenglige: 5 },
  { tidspunkt: minusHours(18), aktive: 18, tilgjenglige: 3 },
  { tidspunkt: minusHours(17), aktive: 18, tilgjenglige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 20, tilgjenglige: 10 },
  { tidspunkt: minusHours(3), aktive: 20, tilgjenglige: 9 },
  { tidspunkt: minusHours(2), aktive: 18, tilgjenglige: 6 },
  { tidspunkt: minusHours(1), aktive: 21, tilgjenglige: 4 },
  { tidspunkt: minusHours(0), aktive: 29, tilgjenglige: 9 },
];

const meta = {
  title: 'SaksbehandlerIndex',
  decorators: [withQueryClient],
  component: SaksbehandlerIndex,
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.DRIFTSMELDINGER, () => HttpResponse.json([])),
        http.get(LosUrl.SAKSLISTE, () => HttpResponse.json(SAKSLISTER)),
        http.get(LosUrl.RESERVER_OPPGAVE, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.RESERVERTE_OPPGAVER, () => HttpResponse.json(RESERVERTE_OPPGAVER)),
        http.get(LosUrl.SAKSLISTE_SAKSBEHANDLERE, () => HttpResponse.json(SAKSLISTE_SAKSBEHANDLERE)),
        http.get(LosUrl.BEHANDLINGSKO_OPPGAVE_ANTALL, () => HttpResponse.json(100)),
        http.get(LosUrl.RESERVER_OPPGAVE, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.SØK_FAGSAK, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.OPPGAVER_FOR_FAGSAKER, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.OPPGAVER_TIL_BEHANDLING, t => {
          const doPolling = t.request.url.includes('oppgaveIder');
          return doPolling
            ? new HttpResponse(null, { status: 202, headers: { location: 'https://www.test.com/api/status' } })
            : new HttpResponse(null, { status: 202, headers: { location: 'https://www.test.com/api/result' } });
        }),
        http.get('https://www.test.com/api/status', () =>
          HttpResponse.json({
            status: ApiPollingStatus.PENDING,
            pollIntervalMillis: 100000000,
          }),
        ),
        http.get('https://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING)),
        http.get(LosUrl.HENT_RESERVASJONSSTATUS, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.TIDLIGERE_RESERVERTE, () => HttpResponse.json(BEHANDLEDE_OPPGAVER)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.OPPGAVE_KØ_STATISTIKK, () => HttpResponse.json(OPPGAVE_KØ_STATISTIKK)),
      ],
    },
  },
} satisfies Meta<typeof SaksbehandlerIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setLosErIkkeTilgjengelig: action('button-click'),
    åpneFagsak: action('button-click'),
    navAnsatt: {
      brukernavn: 'T232332',
      kanSaksbehandle: true,
    } as NavAnsatt,
  },
};
