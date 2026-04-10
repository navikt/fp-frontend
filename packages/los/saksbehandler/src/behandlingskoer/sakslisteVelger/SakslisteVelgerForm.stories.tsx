import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';
import type { SakslisteDto } from '@navikt/fp-types';

import { losKodeverkOptions, LosUrl } from '../../data/fplosSaksbehandlerApi';
import { SakslisteVelgerForm } from './SakslisteVelgerForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);
const saksliste1: SakslisteDto = {
  sakslisteId: 1,
  navn: 'A03 Førstegangsbehandling',
  beskrivelse: 'Direkte utbetaling',
  behandlingTyper: ['BT-002', 'BT-004'],
  fagsakYtelseTyper: ['FP'],
  sortering: {
    sorteringType: 'BEHFRIST',
    fra: 2,
    til: 4,
    periodefilter: 'RELATIV_PERIODE_DAGER',
  },
  sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO' }],
  saksbehandlere: [
    {
      brukerIdent: '32434',
      navn: 'Espen Utvikler',
      ansattAvdeling: '1234',
    },
    {
      brukerIdent: '31111',
      navn: 'Auto Joakim',
      ansattAvdeling: '1234',
    },
  ],
  gjeldendeStatistikk: {
    alleOppgaver: 9,
    tilgjengeligeOppgaver: 3,
  },
  andreKriterie: {
    inkluder: ['TIL_BESLUTTER'],
    ekskluder: [],
  },
};

const køStatistikkMock = [
  { tidspunkt: '2024-04-08T08:00:00', aktive: 21, tilgjengelige: 5, ventende: 32, avsluttet: 14 },
  { tidspunkt: '2024-04-08T10:00:00', aktive: 19, tilgjengelige: 3, ventende: 28, avsluttet: 22 },
  { tidspunkt: '2024-04-09T08:00:00', aktive: 24, tilgjengelige: 8, ventende: 37, avsluttet: 31 },
  { tidspunkt: '2024-04-09T10:00:00', aktive: 27, tilgjengelige: 7, ventende: 41, avsluttet: 19 },
];

const meta = {
  title: 'behandlingskoer/SakslisteVelgerForm',
  component: SakslisteVelgerForm,
  decorators: [withIntl, withQueryClient],
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.SAKSBEHANDLER_KØ_STATISTIKK, () => HttpResponse.json([])),
      ],
    },
  },
  args: {
    setValgtSakslisteId: action('setValgtSakslisteId'),
    fetchAntallOppgaver: action('fetchAntallOppgaver'),
  },
  render: function Render(props) {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <SakslisteVelgerForm {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof SakslisteVelgerForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sakslister: [saksliste1],
  },
};

export const MedAvsluttedeOppgaver: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.SAKSBEHANDLER_KØ_STATISTIKK, () => HttpResponse.json(køStatistikkMock)),
      ],
    },
  },
  args: {
    sakslister: [saksliste1],
  },
};

export const MedAvsluttedeOppgaverTomListe: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.SAKSBEHANDLER_KØ_STATISTIKK, () => HttpResponse.json([])),
      ],
    },
  },
  args: {
    sakslister: [saksliste1],
  },
};

export const MedToSakslister: Story = {
  args: {
    sakslister: [
      saksliste1,
      {
        sakslisteId: 2,
        navn: 'A04 Revurdering',
        beskrivelse:
          'Endringsøknad fra desember. \nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales neque ' +
          'id quam gravida, sit amet euismod lorem convallis. Ut non dui id libero, sed pharetra nisl at, scelerisque ' +
          'ligula. \nHasta la vista.',
        behandlingTyper: ['BT-002', 'BT-003'],
        fagsakYtelseTyper: ['SVP'],
        sortering: {
          sorteringType: 'BEHFRIST',
          fra: 2,
          til: 4,
          periodefilter: 'RELATIV_PERIODE_DAGER',
        },
        sorteringTyper: [{ sorteringType: 'BEHFRIST', feltType: 'DATO' }],
        saksbehandlere: [],
        gjeldendeStatistikk: {
          alleOppgaver: 9,
          tilgjengeligeOppgaver: 114,
        },
        andreKriterie: {
          inkluder: ['UTBETALING_TIL_BRUKER'],
          ekskluder: [],
        },
      },
    ],
  },
};

export const MedIngenSakslister: Story = {
  args: {
    sakslister: [],
  },
};

export const MedFlereEnnTreSaksbehandlere: Story = {
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos))],
    },
  },
  args: {
    sakslister: [
      {
        ...saksliste1,
        saksbehandlere: [
          {
            brukerIdent: '32434',
            navn: 'Espen Utvikler',
            ansattAvdeling: '1234',
          },
          {
            brukerIdent: '31111',
            navn: 'Auto Joakim',
            ansattAvdeling: '1234',
          },
          {
            brukerIdent: '3111123',
            navn: 'Hans Haugerud',
            ansattAvdeling: '1234',
          },
          {
            brukerIdent: '232323',
            navn: 'Olav Hellerud',
            ansattAvdeling: '1234',
          },
          {
            brukerIdent: '311112',
            navn: 'Bente Frogner',
            ansattAvdeling: '1234',
          },
        ],
      },
    ],
  },
};

export const MedBelopFraOgTil: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
        behandlingTyper: ['BT-007'],
        fagsakYtelseTyper: ['FP'],
        sortering: {
          sorteringType: 'BELOP',
          fra: 20000,
          til: 30000,
          periodefilter: 'FAST_PERIODE',
        },
        sorteringTyper: [{ sorteringType: 'BELOP', feltType: 'HELTALL' }],
        saksbehandlere: [],
        andreKriterie: {
          inkluder: [],
          ekskluder: [],
        },
      },
    ],
  },
};

export const MedBelopKunFra: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
        behandlingTyper: ['BT-007'],
        fagsakYtelseTyper: ['FP'],
        sortering: {
          sorteringType: 'BELOP',
          fra: 20000,
          periodefilter: 'FAST_PERIODE',
        },
        sorteringTyper: [{ sorteringType: 'BELOP', feltType: 'HELTALL' }],
        saksbehandlere: [],
        andreKriterie: {
          inkluder: [],
          ekskluder: [],
        },
      },
    ],
  },
};

export const MedBelopKunTil: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
        behandlingTyper: ['BT-007'],
        fagsakYtelseTyper: ['FP'],
        sortering: {
          sorteringType: 'BELOP',
          til: 30000,
          periodefilter: 'FAST_PERIODE',
        },
        sorteringTyper: [{ sorteringType: 'BELOP', feltType: 'HELTALL' }],
        saksbehandlere: [],
        andreKriterie: {
          inkluder: [],
          ekskluder: [],
        },
      },
    ],
  },
};
