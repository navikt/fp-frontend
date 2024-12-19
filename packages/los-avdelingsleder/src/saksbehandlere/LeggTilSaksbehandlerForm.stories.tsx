import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../data/fplosAvdelingslederApi';
import { withQueryClient } from '../data/withQueryClientProvider';
import { LeggTilSaksbehandlerForm } from './LeggTilSaksbehandlerForm';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const saksbehandler = {
  brukerIdent: 'R232323',
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
        http.post(LosUrl.SAKSBEHANDLER_SOK.replace('søk', 's%C3%B8k'), () => HttpResponse.json(saksbehandler)),
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
        http.post(LosUrl.SAKSBEHANDLER_SOK.replace('søk', 's%C3%B8k'), () => HttpResponse.json(saksbehandler)),
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
        http.post(LosUrl.SAKSBEHANDLER_SOK.replace('søk', 's%C3%B8k'), () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.OPPRETT_NY_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    avdelingensSaksbehandlere: [saksbehandler],
  },
};
