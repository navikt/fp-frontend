import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus } from '@navikt/fp-kodeverk';
import { type Oppgave } from '@navikt/fp-los-felles';
import { getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../../data/fplosSaksbehandlerApi';
import { SistBehandledeSaker } from './SistBehandledeSaker';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'saksstotte/SistBehandledeSaker',
  component: SistBehandledeSaker,
  decorators: [withIntl, withQueryClient],
  args: {
    åpneFagsak: action('button-click'),
  },
} satisfies Meta<typeof SistBehandledeSaker>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.BEHANDLEDE_OPPGAVER, () =>
          HttpResponse.json([
            {
              id: 1,
              personnummer: '334342323',
              navn: 'Espen Utvikler',
              saksnummer: '13232323',
              behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
            } as Oppgave,
          ]),
        ),
      ],
    },
  },
};

export const IngenBehandlinger: Story = {
  parameters: {
    msw: {
      handlers: [http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([]))],
    },
  },
};
