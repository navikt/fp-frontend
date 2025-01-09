import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { Oppgave } from '@navikt/fp-los-felles';
import { AsyncPollingStatus } from '@navikt/fp-rest-api';
import { alleKodeverkLos, withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrl } from './data/fplosSaksbehandlerApi';
import { AndreKriterierType } from './kodeverk/andreKriterierType';
import { KoSortering } from './kodeverk/KoSortering';
import { SaksbehandlerIndex } from './SaksbehandlerIndex';
import { NyeOgFerdigstilteOppgaver } from './typer/nyeOgFerdigstilteOppgaverTsType';
import { Saksbehandler } from './typer/saksbehandlerTsType';
import { Saksliste } from './typer/sakslisteTsType';

const SAKSLISTER = [
  {
    sakslisteId: 1,
    navn: 'Saksliste 1',
    sortering: {
      sorteringType: KoSortering.BEHANDLINGSFRIST,
      fra: 1,
      til: 4,
      erDynamiskPeriode: true,
    },
    behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD],
    fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
    andreKriterier: [
      {
        andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
        inkluder: true,
      },
      {
        andreKriterierType: AndreKriterierType.REGISTRER_PAPIRSOKNAD,
        inkluder: false,
      },
    ],
  },
] satisfies Saksliste[];

const OPPGAVER_TIL_BEHANDLING = [
  {
    id: 1,
    status: {
      erReservert: false,
    },
    saksnummer: 46435,
    personnummer: '3433434434',
    navn: 'Sara Sahara',
    system: 'SAK',
    behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2024-11-01',
    behandlingsfrist: '2024-11-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '12',
  },
  {
    id: 4,
    status: {
      erReservert: false,
    },
    saksnummer: 43546,
    personnummer: '53343423232',
    navn: 'Petter Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2024-01-01',
    behandlingsfrist: '2024-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '12',
  },
  {
    id: 3,
    status: {
      erReservert: false,
    },
    saksnummer: 35344,
    personnummer: '34343535423',
    navn: 'Helga Tester',
    system: 'SAK',
    behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2023-04-01',
    behandlingsfrist: '2023-04-05',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '34',
  },
] satisfies Oppgave[];

const RESERVERTE_OPPGAVER = [
  {
    id: 2,
    status: {
      erReservert: true,
      reservertTilTidspunkt: '2019-08-02T00:54:25.455',
      flyttetReservasjon: {
        navn: 'Petter',
        tidspunkt: '2019-08-02T00:54:25.455',
        uid: 'uid',
        begrunnelse: 'Denne er flyttet',
      },
    },
    saksnummer: 23233,
    personnummer: '5434231232',
    navn: 'Espen Utvikler',
    system: 'SAK',
    behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
    opprettetTidspunkt: '2019-01-01',
    behandlingsfrist: '2019-01-01',
    fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
    erTilSaksbehandling: true,
    behandlingId: '2',
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
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    antallNye: 10,
    antallFerdigstilte: 20,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingType.KLAGE,
    antallNye: 23,
    antallFerdigstilte: 2,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingType.REVURDERING,
    antallNye: 3,
    antallFerdigstilte: 24,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingType.DOKUMENTINNSYN,
    antallNye: 23,
    antallFerdigstilte: 12,
    dato: dayjs().format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    antallNye: 10,
    antallFerdigstilte: 20,
    dato: dayjs().subtract(1, 'd').format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingType.FORSTEGANGSSOKNAD,
    antallNye: 30,
    antallFerdigstilte: 15,
    dato: dayjs().subtract(3, 'd').format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingType.KLAGE,
    antallNye: 23,
    antallFerdigstilte: 2,
    dato: dayjs().subtract(4, 'd').format(ISO_DATE_FORMAT),
  },
  {
    behandlingType: BehandlingType.KLAGE,
    antallNye: 23,
    antallFerdigstilte: 2,
    dato: dayjs().subtract(5, 'd').format(ISO_DATE_FORMAT),
  },
] satisfies NyeOgFerdigstilteOppgaver[];

const BEHANDLEDE_OPPGAVER = [
  {
    id: 1,
    personnummer: '343453534',
    navn: 'Gaute Johansen',
    saksnummer: 54343,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
  } as Oppgave,
  {
    id: 2,
    personnummer: '334342323',
    navn: 'Olga Mortensen',
    saksnummer: 13232,
    behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
  } as Oppgave,
];

const meta = {
  title: 'SaksbehandlerIndex',
  decorators: [withQueryClient],
  component: SaksbehandlerIndex,
  parameters: {
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
            ? new HttpResponse(null, { status: 202, headers: { location: 'http://www.test.com/api/status' } })
            : new HttpResponse(null, { status: 202, headers: { location: 'http://www.test.com/api/result' } });
        }),
        http.get('http://www.test.com/api/status', () =>
          HttpResponse.json({
            status: AsyncPollingStatus.PENDING,
            pollIntervalMillis: 100000000,
          }),
        ),
        http.get('http://www.test.com/api/result', () => HttpResponse.json(OPPGAVER_TIL_BEHANDLING)),
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
    kanSaksbehandle: true,
  },
};
