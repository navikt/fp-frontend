import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { http, HttpResponse } from 'msw';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { LosUrl } from '../data/fplosSaksbehandlerApi';
import { withQueryClient } from '../data/withQueryClientProvider';
import { FagsakSøkIndex } from './FagsakSøkIndex';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'søk/FagsakSøkIndex',
  component: FagsakSøkIndex,
  decorators: [withIntl, withQueryClient],
  parameters: {
    msw: {
      handlers: [
        http.post(LosUrl.RESERVER_OPPGAVE, () => new HttpResponse(null, { status: 200 })),
        http.post(LosUrl.SØK_FAGSAK, () => HttpResponse.json({})),
        http.post(LosUrl.OPPGAVER_FOR_FAGSAKER, () => HttpResponse.json([])),
        http.post(LosUrl.HENT_RESERVASJONSSTATUS, () => new HttpResponse(null, { status: 200 })),
      ],
    },
  },
  args: {
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true,
  },
} satisfies Meta<typeof FagsakSøkIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
