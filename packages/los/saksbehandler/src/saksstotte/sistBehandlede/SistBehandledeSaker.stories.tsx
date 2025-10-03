import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import type { Meta, StoryObj } from '@storybook/react';
import { useQuery } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';
import { action } from 'storybook/actions';

import { type Oppgave } from '@navikt/fp-los-felles';
import { alleKodeverkLos, getIntlDecorator, withQueryClient } from '@navikt/fp-storybook-utils';

import { losKodeverkOptions, LosUrl } from '../../data/fplosSaksbehandlerApi';
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
  render: props => {
    //Må hente data til cache før testa komponent blir kalla
    const alleKodeverk = useQuery(losKodeverkOptions()).data;
    return alleKodeverk ? <SistBehandledeSaker {...props} /> : <LoadingPanel />;
  },
} satisfies Meta<typeof SistBehandledeSaker>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.BEHANDLEDE_OPPGAVER, () =>
          HttpResponse.json([
            {
              id: 1,
              personnummer: '334342323',
              navn: 'Espen Utvikler',
              saksnummer: '13232323',
              oppgaveBehandlingStatus: 'UNDER_ARBEID',
              reservasjonStatus: {
                erReservert: true,
                reservertAvNavn: 'Ola Nordmann',
              },
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
      handlers: [
        http.get(LosUrl.KODEVERK_LOS, () => HttpResponse.json(alleKodeverkLos)),
        http.get(LosUrl.BEHANDLEDE_OPPGAVER, () => HttpResponse.json([])),
      ],
    },
  },
};
