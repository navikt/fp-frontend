import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../data/fplosAvdelingslederApi';
import { LeggTilSaksbehandlerForm } from './LeggTilSaksbehandlerForm';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const saksbehandler = {
  brukerIdent: 'P123456',
  navn: 'Espen Utvikler',
  ansattAvdeling: 'Avdeling Å',
};

const meta = {
  title: 'los/avdelingsleder/saksbehandlere/LeggTilSaksbehandlerForm',
  component: LeggTilSaksbehandlerForm,
  decorators: [withIntl, withQueryClient],
  args: {
    valgtAvdelingEnhet: '1',
  },
} satisfies Meta<typeof LeggTilSaksbehandlerForm>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(encodeURI(LosUrl.SAKSBEHANDLER_SOK), () => HttpResponse.json(saksbehandler)),
        http.post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    avdelingensSaksbehandlere: [],
  },
};

export const AlleredeLagtTil: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(encodeURI(LosUrl.SAKSBEHANDLER_SOK), () => HttpResponse.json(saksbehandler)),
        http.post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    avdelingensSaksbehandlere: [saksbehandler],
  },
};

export const SaksbehandlerFinnesIkke: Story = {
  parameters: {
    msw: {
      handlers: [
        http.post(encodeURI(LosUrl.SAKSBEHANDLER_SOK), () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    avdelingensSaksbehandlere: [saksbehandler],
  },
};
