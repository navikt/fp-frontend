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
        http.get(LosUrl.SAKSLISTE_SAKSBEHANDLERE, () =>
          HttpResponse.json([
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
          ]),
        ),
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
        saksbehandlerIdenter: [],
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
        saksbehandlerIdenter: [],
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
        saksbehandlerIdenter: [],
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
        http.get(LosUrl.SAKSLISTE_SAKSBEHANDLERE, () =>
          HttpResponse.json([
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
            {
              brukerIdent: {
                brukerIdent: '3111123',
                verdi: '3211123',
              },
              navn: 'Hans Haugerud',
            },
            {
              brukerIdent: {
                brukerIdent: '232323',
                verdi: '23343',
              },
              navn: 'Olav Hellerud',
            },
            {
              brukerIdent: {
                brukerIdent: '311112',
                verdi: '321112',
              },
              navn: 'Bente Frogner',
            },
          ]),
        ),
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
        saksbehandlerIdenter: [],
        andreKriterie: {
          inkluder: ['TIL_BESLUTTER'],
          ekskluder: [],
        },
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
          fra: 2,
          til: 3,
          periodefilter: 'FAST_PERIODE',
        },
        sorteringTyper: [{ sorteringType: 'BELOP', feltType: 'HELTALL' }],
        saksbehandlerIdenter: [],
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
          fra: 2,
          periodefilter: 'FAST_PERIODE',
        },
        sorteringTyper: [{ sorteringType: 'BELOP', feltType: 'HELTALL' }],
        saksbehandlerIdenter: [],
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
          til: 3,
          periodefilter: 'FAST_PERIODE',
        },
        sorteringTyper: [{ sorteringType: 'BELOP', feltType: 'HELTALL' }],
        saksbehandlerIdenter: [],
        andreKriterie: {
          inkluder: [],
          ekskluder: [],
        },
      },
    ],
  },
};
