import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import type { OppgaveFilterStatistikk } from '@navikt/fp-los-felles';
import { alleKodeverkLos, getIntlDecorator, urlEncodeNorskeBokstaver, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
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
      erDynamiskPeriode: true,
    },
    behandlingTyper: ['BT-002'],
    fagsakYtelseTyper: ['FP'],
    sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
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
    gjeldendeStatistikk: {
      alleOppgaver: 33,
      tilgjengligeOppgaver: 25,
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
      erDynamiskPeriode: true,
    },
    behandlingTyper: ['BT-002'],
    fagsakYtelseTyper: ['FP'],
    sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO', feltKategori: 'UNIVERSAL' }],
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
    gjeldendeStatistikk: {
      alleOppgaver: 12,
      tilgjengligeOppgaver: 8,
    },
  },
] satisfies SakslisteAvdeling[];

// Hjelpefunksjon for relative datoer
const minusHours = (hours: number): string => {
  const date = new Date();
  date.setHours(date.getHours() - hours);
  return date.toISOString();
};

const OPPGAVE_FILTER_STATISTIKK: OppgaveFilterStatistikk[] = [
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
        http.post(LosUrl.LAGRE_SAKSLISTE_NAVN, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_INTERVALL, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_BEHANDLINGSTYPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_ANDRE_KRITERIER, () => new HttpResponse(null, { status: 200 })),
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
