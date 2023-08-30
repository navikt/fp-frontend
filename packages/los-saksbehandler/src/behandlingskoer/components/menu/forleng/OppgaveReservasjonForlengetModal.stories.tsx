import React from 'react';
import { action } from '@storybook/addon-actions';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import OppgaveReservasjonForlengetModal from './OppgaveReservasjonForlengetModal';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/behandlingskoer/OppgaveReservasjonForlengetModal',
  component: OppgaveReservasjonForlengetModal,
  decorators: [withIntl],
};

export const Default = () => (
  <OppgaveReservasjonForlengetModal
    showModal
    oppgave={{
      id: 1,
      status: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet',
        },
        reservertTilTidspunkt: '2017-08-02T00:54:25.455',
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
    }}
    closeModal={action('button-click')}
  />
);
