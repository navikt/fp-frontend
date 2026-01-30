import { useState } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import type { OppgaveFilterStatistikk } from '@navikt/fp-los-felles';
import {
  alleKodeverkLos,
  getIntlDecorator,
  urlEncodeNorskeBokstaver,
  withQueryClient,
} from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../data/fplosAvdelingslederApi';
import { GjeldendeSakslisterTabell } from './GjeldendeSakslisterTabell';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/behandlingskoer/GjeldendeSakslisterTabell',
  component: GjeldendeSakslisterTabell,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.post(LosUrl.SLETT_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
        http.get(urlEncodeNorskeBokstaver(LosUrl.OPPGAVE_FILTER_STATISTIKK), () =>
          HttpResponse.json(OPPGAVE_FILTER_STATISTIKK),
        ),
      ],
    },
  },
  args: {
    setValgtSakslisteId: action('button-click'),
    resetValgtSakslisteId: action('button-click'),
    lagNySaksliste: action('button-click'),
    valgtAvdelingEnhet: '1',
    children: <div>test</div>,
  },
  render: storyArgs => {
    const [args, setArgs] = useState(storyArgs);

    const { data: kodeverkLos } = useQuery(losKodeverkOptions());

    const lagNySaksliste = () => {
      args.lagNySaksliste();
      setArgs(oldArgs => ({
        ...oldArgs,
        sakslister: oldArgs.sakslister.concat({
          sakslisteId: oldArgs.sakslister.length === 1 ? 1 : 2,
          navn: 'Ny liste',
          sorteringTyper: [],
          saksbehandlerIdenter: [],
        }),
      }));
    };

    return kodeverkLos ? <GjeldendeSakslisterTabell {...args} lagNySaksliste={lagNySaksliste} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof GjeldendeSakslisterTabell>;
export default meta;

type Story = StoryObj<typeof meta>;

export const TabellNårDetIkkeFinnesBehandlingskøer: Story = {
  args: {
    sakslister: [],
  },
};

export const TabellNårDetFinnesEnBehandlingskø: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
        sorteringTyper: [],
        saksbehandlerIdenter: ['R23233'],
        gjeldendeStatistikk: {
          alleOppgaver: 33,
          tilgjengeligeOppgaver: 25,
          behandlingerPåVent: 10,
        },
      },
    ],
    oppgaverForAvdelingAntall: 1,
  },
};

// Hjelpefunksjon for relative datoer
const getTidspunktForAntallTimerSiden = (hours: number): string => {
  return dayjs().subtract(hours, 'hour').toISOString();
};

const OPPGAVE_FILTER_STATISTIKK: OppgaveFilterStatistikk[] = [
  // gap på ~13 timer
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
