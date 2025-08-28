import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BehandlingType, FagsakYtelseType, OppgaveBehandlingStatus } from '@navikt/fp-kodeverk';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { OppgaveReservasjonForlengetModal } from './OppgaveReservasjonForlengetModal';

import messages from '../../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandlingskoer/OppgaveReservasjonForlengetModal',
  component: OppgaveReservasjonForlengetModal,
  decorators: [withIntl],
} satisfies Meta<typeof OppgaveReservasjonForlengetModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    oppgave: {
      id: 1,
      reservasjonStatus: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          uid: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet',
        },
        reservertTilTidspunkt: '2017-08-02T00:54:25.455',
      },
      saksnummer: '1234',
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'SAK',
      behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
      oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
    },
    closeModal: action('button-click'),
  },
};
