import React from 'react';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosSaksbehandlerApi';
import { AndreKriterierType } from '../../kodeverk/andreKriterierType';
import { KoSortering } from '../../kodeverk/KoSortering';
import { SakslisteVelgerForm } from './SakslisteVelgerForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandlingskoer/SakslisteVelgerForm',
  component: SakslisteVelgerForm,
  decorators: [withIntl, withQueryClient],
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
    getValueFromLocalStorage: () => '',
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
        behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
        fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
        andreKriterier: [
          {
            andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
            inkluder: true,
          },
        ],
        sortering: {
          sorteringType: KoSortering.BEHANDLINGSFRIST,
          fra: 2,
          til: 4,
          erDynamiskPeriode: true,
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
        behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
        fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
        andreKriterier: [
          {
            andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
            inkluder: true,
          },
        ],
        sortering: {
          sorteringType: KoSortering.BEHANDLINGSFRIST,
          fra: 2,
          til: 4,
          erDynamiskPeriode: true,
        },
      },
      {
        sakslisteId: 2,
        navn: 'Saksliste 2',
        behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.KLAGE],
        fagsakYtelseTyper: [FagsakYtelseType.SVANGERSKAPSPENGER],
        andreKriterier: [
          {
            andreKriterierType: AndreKriterierType.UTBETALING_TIL_BRUKER,
            inkluder: true,
          },
        ],
        sortering: {
          sorteringType: KoSortering.BEHANDLINGSFRIST,
          fra: 2,
          til: 4,
          erDynamiskPeriode: true,
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
        behandlingTyper: [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING],
        fagsakYtelseTyper: [FagsakYtelseType.FORELDREPENGER],
        andreKriterier: [
          {
            andreKriterierType: AndreKriterierType.TIL_BESLUTTER,
            inkluder: true,
          },
        ],
        sortering: {
          sorteringType: KoSortering.BEHANDLINGSFRIST,
          fra: 2,
          til: 4,
          erDynamiskPeriode: true,
        },
      },
    ],
  },
};
