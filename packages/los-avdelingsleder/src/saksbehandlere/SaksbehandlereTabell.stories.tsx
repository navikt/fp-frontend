import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../data/fplosAvdelingslederApi';
import { withQueryClient } from '../data/withQueryClientProvider';
import { SaksbehandlereTabell } from './SaksbehandlereTabell';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/avdelingsleder/saksbehandlere/SaksbehandlereTabell',
  component: SaksbehandlereTabell,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.post(LosUrl.SLETT_SAKSBEHANDLER, () => new HttpResponse(null, { status: 200 })),
        http.get(LosUrl.SAKSBEHANDLERE_FOR_AVDELING, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    valgtAvdelingEnhet: 'Nav Vikafossen',
  },
} satisfies Meta<typeof SaksbehandlereTabell>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    saksbehandlere: [
      {
        brukerIdent: 'R12122',
        navn: 'Espen Utvikler',
        ansattAvdeling: 'Oslo',
      },
      {
        brukerIdent: 'S53343',
        navn: 'Steffen',
        ansattAvdeling: 'Oslo',
      },
      {
        brukerIdent: 'H11111',
        navn: 'Hildegunn',
        ansattAvdeling: 'Drammen',
      },
    ],
  },
};

export const TomTabell: Story = {
  args: {
    saksbehandlere: [],
  },
};

export const MedSaksbehandlerUtenAnsattAvdeling: Story = {
  args: {
    saksbehandlere: [
      {
        brukerIdent: 'X1111',
        navn: 'Ukjent saksbehandler (X11111)',
        ansattAvdeling: null,
      },
      {
        brukerIdent: 'H11111',
        navn: 'Hildegunn',
        ansattAvdeling: 'Drammen',
      },
    ],
  },
};
