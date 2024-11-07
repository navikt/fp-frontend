import React from 'react';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosSaksbehandlerRestApi';
import { OpphevReservasjonModal } from './OpphevReservasjonModal';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/behandlingskoer/OpphevReservasjonModal',
  component: OpphevReservasjonModal,
  decorators: [withIntl],
  render: ({ oppgave, hentReserverteOppgaver }) => {
    const data = [{ key: RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON.name, data: {} }];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <OpphevReservasjonModal
          oppgave={oppgave}
          closeModal={action('button-click')}
          hentReserverteOppgaver={hentReserverteOppgaver}
        />
      </RestApiMock>
    );
  },
} satisfies Meta<typeof OpphevReservasjonModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    closeModal: action('button-click'),
    hentReserverteOppgaver: action('button-click'),
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
  },
};
