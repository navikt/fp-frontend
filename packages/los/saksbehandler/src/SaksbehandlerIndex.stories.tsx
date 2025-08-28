import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import type { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import {
  AndreKriterierType,
  BehandlingType,
  FagsakYtelseType,
  KøSortering,
  OppgaveBehandlingStatus,
} from '@navikt/fp-kodeverk';
import { ApiPollingStatus } from '@navikt/fp-konstanter';
import { type Oppgave } from '@navikt/fp-los-felles';
import { alleKodeverkLos, withQueryClient } from '@navikt/fp-storybook-utils';
import type { NavAnsatt } from '@navikt/fp-types';

import { LosUrl } from './data/fplosSaksbehandlerApi';
import { SaksbehandlerIndex } from './SaksbehandlerIndex';
import type { NyeOgFerdigstilteOppgaver } from './typer/nyeOgFerdigstilteOppgaverTsType';
import type { Saksbehandler } from './typer/saksbehandlerTsType';
import type { Saksliste } from './typer/sakslisteTsType';

const SAKSLISTER = [
  {
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sortering: {
      sorteringType: KøSortering.BEHANDLINGSFRIST,
      fra: 1,
      til: 4,
      erDynamiskPeriode: true,
    },
    behandlingTyper: [BehandlingTypeEnum.FORSTEGANGSSOKNAD],
    fagsakYtelseTyper: ['FP'],
    andreKriterier: [
      {
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true,
      },
      {
        andreKriterierType: AndreKriterierType.PAPIRSOKNAD,
        inkluder: false,
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
    behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    opprettetTidspunkt: '2024-11-01',
    behandlingsfrist: '2024-11-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '12',
    andreKriterier: [AndreKriterierType.REVURDERING_INNTEKTSMELDING],
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
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
    behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    opprettetTidspunkt: '2024-01-01',
    behandlingsfrist: '2024-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '12',
    andreKriterier: [],
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
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
    behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    opprettetTidspunkt: '2023-04-01',
    behandlingsfrist: '2023-04-05',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '34',
    andreKriterier: [],
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
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
    behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: 'FP',
    erTilSaksbehandling: true,
    behandlingId: '2',
    andreKriterier: [AndreKriterierType.REVURDERING_INNTEKTSMELDING],
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
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

const NYE_OG_FERDIGSTILTE_OPPGAVER = [
  {
    behandlingType: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    antallNye: 10,
    antallFerdigstilte: 20,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingTypeEnum.KLAGE,
    antallNye: 23,
    antallFerdigstilte: 2,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingTypeEnum.REVURDERING,
    antallNye: 3,
    antallFerdigstilte: 24,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingTypeEnum.DOKUMENTINNSYN,
    antallNye: 23,
    antallFerdigstilte: 12,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    antallNye: 10,
    antallFerdigstilte: 20,
    dato: dayjs().subtract(1, 'd').format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
    antallNye: 30,
    antallFerdigstilte: 15,
    dato: dayjs().subtract(3, 'd').format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingTypeEnum.KLAGE,
    antallNye: 23,
    antallFerdigstilte: 2,
    dato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingTypeEnum.KLAGE,
    antallNye: 23,
    antallFerdigstilte: 2,
    dato: dayjs().subtract(5, 'd').format(ISO_DATE_FORMAT),
  },
] as NyeOgFerdigstilteOppgaver[];

const BEHANDLEDE_OPPGAVER = [
  {
    id: 1,
    personnummer: '343453534',
    navn: 'Gaute Johansen',
    saksnummer: '54343',
    reservasjonStatus: {
      erReservert: false,
    },
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
  } as Oppgave,
  {
    id: 2,
    personnummer: '334342323',
    navn: 'Olga Mortensen',
    saksnummer: '13232',
    reservasjonStatus: {
      erReservert: false,
    },
    oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
  } as Oppgave,
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
        http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json(BEHANDLEDE_OPPGAVER)),
        http.get(LosUrl.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER, () => HttpResponse.json(NYE_OG_FERDIGSTILTE_OPPGAVER)),
        http.get(LosUrl.FORLENG_OPPGAVERESERVASJON, () => new HttpResponse(null, { status: 200 })),
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
