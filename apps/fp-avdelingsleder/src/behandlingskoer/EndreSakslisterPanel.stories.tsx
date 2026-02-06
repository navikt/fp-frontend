import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';

import type { OppgaveFilterStatistikk } from '@navikt/fp-los-felles';
import {
  alleKodeverkLos,
  getIntlDecorator,
  urlEncodeNorskeBokstaver,
  withQueryClient,
} from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import { type SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
import { EndreSakslisterPanel } from './EndreSakslisterPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const SAKSLISTER = [
  {
    sakslisteId: 1,
    navn: 'A00 Hurtig kø',
    saksbehandlerIdenter: [],
    sortering: {
      sorteringType: 'BEHFRIST',
      fra: 1,
      til: 4,
      periodefilter: 'RELATIV_PERIODE_DAGER',
    },
    behandlingTyper: ['BT-002'],
    fagsakYtelseTyper: ['FP'],
    sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
    andreKriterie: {
      inkluder: [],
      ekskluder: ['PAPIRSOKNAD', 'TIL_BESLUTTER'],
    },
    gjeldendeStatistikk: {
      alleOppgaver: 33,
      tilgjengeligeOppgaver: 25,
      behandlingerPåVent: 22,
    },
  },
  {
    sakslisteId: 2,
    navn: 'A02 - Registrere papirsøknad',
    saksbehandlerIdenter: [],
    sortering: {
      sorteringType: 'BEHFRIST',
      fra: 1,
      til: 4,
      periodefilter: 'RELATIV_PERIODE_DAGER',
    },
    behandlingTyper: ['BT-002'],
    fagsakYtelseTyper: ['FP'],
    sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
    andreKriterie: {
      inkluder: ['TIL_BESLUTTER'],
      ekskluder: ['PAPIRSOKNAD'],
    },
    gjeldendeStatistikk: {
      alleOppgaver: 12,
      tilgjengeligeOppgaver: 8,
      behandlingerPåVent: 10,
    },
  },
] satisfies SakslisteAvdeling[];

// Hjelpefunksjon for relative datoer
const getTidspunktForAntallTimerSiden = (hours: number): string => {
  return dayjs().subtract(hours, 'hour').toISOString();
};

const OPPGAVE_FILTER_STATISTIKK: OppgaveFilterStatistikk[] = [
  { tidspunkt: getTidspunktForAntallTimerSiden(43), aktive: 21, tilgjengelige: 5, ventende: 32 },
  { tidspunkt: getTidspunktForAntallTimerSiden(42), aktive: 21, tilgjengelige: 4, ventende: 31 },
  { tidspunkt: getTidspunktForAntallTimerSiden(41), aktive: 21, tilgjengelige: 6, ventende: 33 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(28), aktive: 19, tilgjengelige: 8, ventende: 29 },
  { tidspunkt: getTidspunktForAntallTimerSiden(27), aktive: 19, tilgjengelige: 8, ventende: 30 },
  { tidspunkt: getTidspunktForAntallTimerSiden(26), aktive: 19, tilgjengelige: 6, ventende: 28 },
  { tidspunkt: getTidspunktForAntallTimerSiden(25), aktive: 18, tilgjengelige: 3, ventende: 27 },
  { tidspunkt: getTidspunktForAntallTimerSiden(24), aktive: 18, tilgjengelige: 1, ventende: 26 },
  { tidspunkt: getTidspunktForAntallTimerSiden(23), aktive: 24, tilgjengelige: 5, ventende: 37 },
  { tidspunkt: getTidspunktForAntallTimerSiden(22), aktive: 27, tilgjengelige: 7, ventende: 41 },
  { tidspunkt: getTidspunktForAntallTimerSiden(21), aktive: 27, tilgjengelige: 7, ventende: 40 },
  { tidspunkt: getTidspunktForAntallTimerSiden(20), aktive: 25, tilgjengelige: 9, ventende: 38 },
  { tidspunkt: getTidspunktForAntallTimerSiden(19), aktive: 21, tilgjengelige: 5, ventende: 32 },
  { tidspunkt: getTidspunktForAntallTimerSiden(18), aktive: 18, tilgjengelige: 3, ventende: 27 },
  { tidspunkt: getTidspunktForAntallTimerSiden(17), aktive: 18, tilgjengelige: 6, ventende: 28 },
  // gap på ~13 timer
  { tidspunkt: getTidspunktForAntallTimerSiden(4), aktive: 20, tilgjengelige: 10, ventende: 31 },
  { tidspunkt: getTidspunktForAntallTimerSiden(3), aktive: 20, tilgjengelige: 9, ventende: 30 },
  { tidspunkt: getTidspunktForAntallTimerSiden(2), aktive: 18, tilgjengelige: 6, ventende: 27 },
  { tidspunkt: getTidspunktForAntallTimerSiden(1), aktive: 21, tilgjengelige: 4, ventende: 32 },
  { tidspunkt: getTidspunktForAntallTimerSiden(0), aktive: 29, tilgjengelige: 9, ventende: 44 },
];

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/EndreSakslisterPanel',
  component: EndreSakslisterPanel,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.OPPGAVE_ANTALL, () => HttpResponse.json(1)),
        http.get(LosUrl.SAKSLISTER_FOR_AVDELING, () => HttpResponse.json(SAKSLISTER)),
        http.get(urlEncodeNorskeBokstaver(LosUrl.OPPGAVE_FILTER_STATISTIKK), () =>
          HttpResponse.json(OPPGAVE_FILTER_STATISTIKK),
        ),
        http.post(LosUrl.ENDRE_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  render: args => {
    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    return kodeverkLos ? <EndreSakslisterPanel {...args} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof EndreSakslisterPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    valgtAvdelingEnhet: 'NAV Oslo',
    avdelingensSaksbehandlere: [],
  },
};
