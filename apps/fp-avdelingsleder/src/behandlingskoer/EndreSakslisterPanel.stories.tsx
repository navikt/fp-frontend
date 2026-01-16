import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType';
import { EndreSakslisterPanel } from './EndreSakslisterPanel';

import messages from '../../i18n/nb_NO.json';
import type { OppgaveFilterStatistikk } from '@navikt/fp-los-felles';

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

// Generer OPPGAVE_KØ_STATISTIKK programmatisk
const generateOppgaveKøStatistikk = (): OppgaveFilterStatistikk[] => {
  const data: OppgaveFilterStatistikk[] = [];
  for (let i = 24*7; i >= 0; i--) {
    data.push({
      tidspunkt: minusHours(i),
      aktive: 3500 + Math.floor(Math.random() * 20),
      aktiveLedige: 3400 + Math.floor(Math.random() * 15),
      behandlingerPåVent: 2321 + Math.floor(Math.random() * 15),
    });
  }
  return data;
};

const OPPGAVE_KØ_STATISTIKK = generateOppgaveKøStatistikk() satisfies OppgaveFilterStatistikk[];


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
