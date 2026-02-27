import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../../../../data/fplosSaksbehandlerApi';
import { OppgaveHandlingerMenu } from './OppgaveHandlingerMenu';

import messages from '../../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'behandlingskoer/OppgaveHandlingerMenu',
  component: OppgaveHandlingerMenu,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.post(LosUrl.OPPHEV_OPPGAVERESERVASJON, () => HttpResponse.json({})),
        http.post(LosUrl.FLYTT_RESERVASJON, () => HttpResponse.json({})),
        http.post(LosUrl.FORLENG_OPPGAVERESERVASJON, () => HttpResponse.json({})),
      ],
    },
  },
  args: {
    setEnableTableEvents: action('setEnableTableEvents'),
    brukernavn: 'P123456',
    saksbehandlereForSaksliste: [
      {
        navn: 'Espen Utvikler',
        brukerIdent: 'P123456',
        ansattAvdeling: 'Avdeling A',
      },
      {
        navn: 'Kari Konsulent',
        brukerIdent: 'S12345',
        ansattAvdeling: 'Avdeling B',
      },
    ],
    oppgave: {
      id: 1,
      reservasjonStatus: {
        erReservert: false,
        flyttetReservasjon: {
          tidspunkt: '2019-02-02',
          flyttetAvIdent: '23423',
          navn: 'Espen Utvikler',
          begrunnelse: 'Flyttet',
        },
        reservertTilTidspunkt: '2021-08-02T00:54:25.455',
      },
      saksnummer: '1234',
      personnummer: '1212',
      navn: 'Espen Utvikler',
      system: 'FPSAK',
      behandlingstype: 'BT-002',
      opprettetTidspunkt: '2019-01-01',
      behandlingsfrist: '2019-01-01',
      fagsakYtelseType: 'FP',
      erTilSaksbehandling: true,
      behandlingId: '1',
      andreKriterier: [],
    },
  },
} satisfies Meta<typeof OppgaveHandlingerMenu>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
