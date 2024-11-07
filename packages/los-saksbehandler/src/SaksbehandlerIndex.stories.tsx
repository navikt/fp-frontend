import React from 'react';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { alleKodeverkLos } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from './data/fplosSaksbehandlerRestApi';
import { AndreKriterierType } from './kodeverk/andreKriterierType';
import { KoSortering } from './kodeverk/KoSortering';
import { SaksbehandlerIndex } from './SaksbehandlerIndex';
import { action } from '@storybook/addon-actions';
import { Saksliste } from './typer/sakslisteTsType';
import { Oppgave } from '@navikt/fp-los-felles';
import { Saksbehandler } from './typer/saksbehandlerTsType';
import { NyeOgFerdigstilteOppgaver } from './typer/nyeOgFerdigstilteOppgaverTsType';

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

const RESERVERTE_OPPGAVER = [
  {
    id: 2,
    status: {
      erReservert: true,
      reservertTilTidspunkt: '2019-08-02T00:54:25.455',
    },
    saksnummer: 1234,
    personnummer: '1212',
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

const OPPGAVER_TIL_BEHANDLING = [] satisfies Oppgave[];

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

const REST_API_DATA = [
  { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
  { key: RestApiPathsKeys.DRIFTSMELDINGER.name, data: [] },
  { key: RestApiPathsKeys.SAKSLISTE.name, data: SAKSLISTER },
  { key: RestApiPathsKeys.RESERVER_OPPGAVE.name, data: undefined },
  { key: RestApiPathsKeys.RESERVERTE_OPPGAVER.name, data: RESERVERTE_OPPGAVER },
  { key: RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE.name, data: SAKSLISTE_SAKSBEHANDLERE },
  { key: RestApiPathsKeys.BEHANDLINGSKO_OPPGAVE_ANTALL.name, data: 1 },
  { key: RestApiPathsKeys.RESERVER_OPPGAVE.name, data: undefined },
  { key: RestApiPathsKeys.SEARCH_FAGSAK.name, data: undefined },
  { key: RestApiPathsKeys.OPPGAVER_FOR_FAGSAKER.name, data: undefined },
  { key: RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name, data: OPPGAVER_TIL_BEHANDLING },
  { key: RestApiPathsKeys.HENT_RESERVASJONSSTATUS.name, data: undefined },
  { key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name, data: [] },
  { key: RestApiPathsKeys.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER.name, data: NYE_OG_FERDIGSTILTE_OPPGAVER },
  { key: RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON.name, data: {} },
];

const meta = {
  title: 'los/saksbehandler/SaksbehandlerIndex',
  component: SaksbehandlerIndex,
  render: props => (
    <RestApiMock data={REST_API_DATA} requestApi={requestApi}>
      <SaksbehandlerIndex {...props} />
    </RestApiMock>
  ),
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
