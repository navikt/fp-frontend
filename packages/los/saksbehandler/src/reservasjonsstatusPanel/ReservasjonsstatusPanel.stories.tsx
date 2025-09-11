import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../data/fplosSaksbehandlerApi';
import { ReservasjonsstatusPanel } from './ReservasjonsstatusPanel';

const oppgaver = [
  {
    id: 0,
    behandlingId: '012',
    reservasjonStatus: {
      erReservert: false,
      erReservertAvInnloggetBruker: false,
    },
  },
  {
    id: 1,
    behandlingId: '123',
    reservasjonStatus: {
      erReservert: true,
      erReservertAvInnloggetBruker: true,
      reservertAvBrukerIdent: 'Z123456',
      reservertTidspunkt: '2024-01-01T12:00:00',
    },
  },
  {
    id: 2,
    behandlingId: '456',
    reservasjonStatus: {
      erReservert: true,
      erReservertAvInnloggetBruker: false,
      reservertAvBrukerIdent: 'Z123456',
      reservertTidspunkt: '2024-01-01T12:00:00',
      reservertAvNavn: 'Ola Nordmann',
    },
  },
];

const meta = {
  title: 'ReservasjonsstatusPanel',
  component: ReservasjonsstatusPanel,
  decorators: [withQueryClient],
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.OPPGAVER_FOR_FAGSAKER, () => HttpResponse.json(oppgaver))],
    },
  },
} satisfies Meta<typeof ReservasjonsstatusPanel>;
export default meta;

type Story = StoryObj<typeof meta>;

export const ErIkkeReservert: Story = {
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[0].behandlingId,
  },
};

export const ErReservertPåInnloggetBruker: Story = {
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[1].behandlingId,
  },
};

export const ErReservertPåAnnenBruker: Story = {
  args: {
    saksnummer: '12345',
    behandlingUuid: oppgaver[2].behandlingId,
  },
};
