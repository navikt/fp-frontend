import { useState } from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
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
          HttpResponse.json(OPPGAVE_KØ_STATISTIKK),
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
          tilgjengligeOppgaver: 25,
        },
      },
    ],
    oppgaverForAvdelingAntall: 1,
  },
};

export const TabellNårDetLasterOppgaver: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
        sorteringTyper: [],
        saksbehandlerIdenter: ['R23233'],
        gjeldendeStatistikk: {
          alleOppgaver: 33,
          tilgjengligeOppgaver: 25,
        },
      },
    ],
  },
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.post(LosUrl.SLETT_SAKSLISTE, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.OPPGAVE_FILTER_STATISTIKK, () => HttpResponse.json(OPPGAVE_KØ_STATISTIKK)),
        http.get(LosUrl.OPPGAVE_ANTALL, async () => {
          await new Promise(resolve => setTimeout(resolve, 5000));
          return HttpResponse.json({ ledige: 5, reserverte: 3 });
        }),
      ],
    },
  },
};

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

