import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosSaksbehandlerApi';
import { SakslisteVelgerForm } from './SakslisteVelgerForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandlingskoer/SakslisteVelgerForm',
  component: SakslisteVelgerForm,
  decorators: [withIntl, withQueryClient],
  parameters: {
    layout: 'fullscreen',
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
      ],
    },
  },
  args: {
    setValgtSakslisteId: action('button-click'),
    fetchAntallOppgaver: action('button-click'),
    setValueInLocalStorage: action('button-click'),
    removeValueFromLocalStorage: action('button-click'),
  },
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <SakslisteVelgerForm {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof SakslisteVelgerForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
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
        andreKriterie: {
          inkluder: ['TIL_BESLUTTER'],
          ekskluder: [],
        },
      },
    ],
  },
};

export const MedToSakslister: Story = {
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
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
        andreKriterie: {
          inkluder: ['TIL_BESLUTTER'],
          ekskluder: [],
        },
      },
      {
        sakslisteId: 2,
        navn: 'Saksliste 2',
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
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
      ],
    },
  },
  args: {
    sakslister: [
      {
        sakslisteId: 1,
        navn: 'Saksliste 1',
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
          }
        ],
        andreKriterie: {
          inkluder: ['TIL_BESLUTTER'],
          ekskluder: [],
        },
      },
    ],
  },
};
