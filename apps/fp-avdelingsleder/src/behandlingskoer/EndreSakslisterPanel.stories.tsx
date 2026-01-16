import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import type { OppgaveFilterStatistikk } from '@navikt/fp-los-felles';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
import { EndreSakslisterPanel } from './EndreSakslisterPanel';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const SAKSLISTER = [
  {
    sakslisteId: 1,
    navn: 'test',
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
  },
] satisfies SakslisteAvdeling[];

// Hjelpefunksjon for relative datoer
const minusHours = (hours: number): string => {
  const date = new Date();
  date.setHours(date.getHours() - hours);
  return date.toISOString();
};

const OPPGAVE_KØ_STATISTIKK: OppgaveFilterStatistikk[] = [
  { tidspunkt: minusHours(43), aktive: 21, aktiveLedige: 5 },
  { tidspunkt: minusHours(42), aktive: 21, aktiveLedige: 4 },
  { tidspunkt: minusHours(41), aktive: 21, aktiveLedige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(28), aktive: 19, aktiveLedige: 8 },
  { tidspunkt: minusHours(27), aktive: 19, aktiveLedige: 8 },
  { tidspunkt: minusHours(26), aktive: 19, aktiveLedige: 6 },
  { tidspunkt: minusHours(25), aktive: 18, aktiveLedige: 3 },
  { tidspunkt: minusHours(24), aktive: 18, aktiveLedige: 1 },
  { tidspunkt: minusHours(23), aktive: 24, aktiveLedige: 5 },
  { tidspunkt: minusHours(22), aktive: 27, aktiveLedige: 7 },
  { tidspunkt: minusHours(21), aktive: 27, aktiveLedige: 7 },
  { tidspunkt: minusHours(20), aktive: 25, aktiveLedige: 9 },
  { tidspunkt: minusHours(19), aktive: 21, aktiveLedige: 5 },
  { tidspunkt: minusHours(18), aktive: 18, aktiveLedige: 3 },
  { tidspunkt: minusHours(17), aktive: 18, aktiveLedige: 6 },
  // gap på ~13 timer
  { tidspunkt: minusHours(4), aktive: 20, aktiveLedige: 10 },
  { tidspunkt: minusHours(3), aktive: 20, aktiveLedige: 9 },
  { tidspunkt: minusHours(2), aktive: 18, aktiveLedige: 6 },
  { tidspunkt: minusHours(1), aktive: 21, aktiveLedige: 4 },
  { tidspunkt: minusHours(0), aktive: 29, aktiveLedige: 9 },
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
        http.post(LosUrl.LAGRE_SAKSLISTE_NAVN, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_INTERVALL, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_SORTERING_DYNAMISK_PERIDE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_FAGSAK_YTELSE_TYPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_BEHANDLINGSTYPE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.LAGRE_SAKSLISTE_ANDRE_KRITERIER, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.OPPGAVE_KØ_STATISTIKK, () => HttpResponse.json(OPPGAVE_KØ_STATISTIKK)),
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
