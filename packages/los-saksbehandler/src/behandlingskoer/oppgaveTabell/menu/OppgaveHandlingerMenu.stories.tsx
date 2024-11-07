import React from 'react';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosSaksbehandlerRestApi';
import { OppgaveHandlingerMenu } from './OppgaveHandlingerMenu';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/behandlingskoer/OppgaveHandlingerMenu',
  component: OppgaveHandlingerMenu,
  decorators: [withIntl],
  render: ({ oppgave }) => {
    const data = [
      { key: RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON.name, data: {} },
      {
        key: RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name,
        data: {
          brukerIdent: 'teasdfa',
          navn: 'Espen Utvikler',
        },
      },
      { key: RestApiPathsKeys.FLYTT_RESERVASJON.name, data: {} },
      { key: RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON.name, data: {} },
    ];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <OppgaveHandlingerMenu
          oppgave={oppgave}
          hentReserverteOppgaver={action('button-click')}
          setEnableTableEvents={action('button-click')}
        />
      </RestApiMock>
    );
  },
} satisfies Meta<typeof OppgaveHandlingerMenu>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    oppgave: {
      id: 1,
      status: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet',
        },
        reservertTilTidspunkt: '2021-08-02T00:54:25.455',
      },
      saksnummer: 1234,
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
      behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
      erTilSaksbehandling: true,
      behandlingId: '1',
    },
    hentReserverteOppgaver: action('button-click'),
    setEnableTableEvents: action('button-click'),
  },
};
