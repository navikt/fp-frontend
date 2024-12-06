import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { BehandlingStatus } from '@navikt/fp-kodeverk';
import { Oppgave } from '@navikt/fp-los-felles';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../../data/fplosSaksbehandlerApi';
import { withQueryClient } from '../../data/withQueryClientProvider';
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
              saksnummer: 13232323,
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
