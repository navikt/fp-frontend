import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/fp-kodeverk';
import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../../../data/fplosSaksbehandlerApi';
import { OpphevReservasjonModal } from './OpphevReservasjonModal';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandlingskoer/OpphevReservasjonModal',
  component: OpphevReservasjonModal,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [http.post(LosUrl.OPPHEV_OPPGAVERESERVASJON, () => HttpResponse.json({}))],
    },
  },
  args: {
    closeModal: action('button-click'),
  },
} satisfies Meta<typeof OpphevReservasjonModal>;
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
