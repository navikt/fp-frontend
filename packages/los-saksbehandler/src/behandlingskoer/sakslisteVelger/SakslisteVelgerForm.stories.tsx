import React from 'react';
import { BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';
import { KoSortering } from '../../kodeverk/KoSortering';
import { AndreKriterierType } from '../../kodeverk/andreKriterierType';
import { Saksbehandler } from '../../typer/saksbehandlerTsType';
import { Saksliste } from '../../typer/sakslisteTsType';
import { SakslisteVelgerForm } from './SakslisteVelgerForm';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

type StoryProps = {
  saksbehandlere: Saksbehandler[];
  sakslister: Saksliste[];
} & ComponentProps<typeof SakslisteVelgerForm>;

const meta = {
  title: 'los/saksbehandler/behandlingskoer/SakslisteVelgerForm',
  component: SakslisteVelgerForm,
  decorators: [withIntl],
  render: props => {
    const data = [
      { key: RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE.name, data: props.saksbehandlere },
      { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    ];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <SakslisteVelgerForm
          sakslister={props.sakslister}
          setValgtSakslisteId={action('button-click')}
          fetchAntallOppgaver={action('button-click')}
          getValueFromLocalStorage={() => ''}
          setValueInLocalStorage={action('button-click')}
          removeValueFromLocalStorage={action('button-click')}
        />
      </RestApiMock>
    );
  },
} satisfies Meta<StoryProps>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setValgtSakslisteId: action('button-click'),
    fetchAntallOppgaver: action('button-click'),
    getValueFromLocalStorage: () => '',
    setValueInLocalStorage: action('button-click'),
    removeValueFromLocalStorage: action('button-click'),
    saksbehandlere: [
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
    ],
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
    ...Default.args,
    saksbehandlere: [
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
    ],
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
    ...Default.args,
    saksbehandlere: [
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
    ],
    sakslister: [],
  },
};

export const MedFlereEnnTreSaksbehandlere: Story = {
  args: {
    setValgtSakslisteId: action('button-click'),
    fetchAntallOppgaver: action('button-click'),
    getValueFromLocalStorage: () => '',
    setValueInLocalStorage: action('button-click'),
    removeValueFromLocalStorage: action('button-click'),
    saksbehandlere: [
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
    ],
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
