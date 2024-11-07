import React, { ComponentProps } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { alleKodeverkLos, getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiMock } from '@navikt/fp-utils-test';
import { Oppgave } from '@navikt/fp-los-felles';

import { RestApiGlobalStatePathsKeys, RestApiPathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';
import { SistBehandledeSaker } from './SistBehandledeSaker';

import messages from '../../../i18n/nb_NO.json';
import { BehandlingStatus } from '@navikt/ft-kodeverk';

const withIntl = getIntlDecorator(messages);

type StoryArgs = {
  behandledeOppgaver?: Oppgave[];
} & ComponentProps<typeof SistBehandledeSaker>;

const meta = {
  title: 'los/saksbehandler/saksstotte/SistBehandledeSaker',
  component: SistBehandledeSaker,
  decorators: [withIntl],
  render: ({ behandledeOppgaver, åpneFagsak }) => {
    const data = [
      { key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name, data: behandledeOppgaver },
      { key: RestApiGlobalStatePathsKeys.KODEVERK_LOS.name, data: alleKodeverkLos, global: true },
    ];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <SistBehandledeSaker åpneFagsak={åpneFagsak} />
      </RestApiMock>
    );
  },
} satisfies Meta<StoryArgs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    åpneFagsak: action('button-click'),
    behandledeOppgaver: [
      {
        id: 1,
        personnummer: '334342323',
        navn: 'Espen Utvikler',
        saksnummer: 13232323,
        behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
      } as Oppgave,
    ],
  },
};

export const IngenBehandlinger: Story = {
  args: {
    åpneFagsak: action('button-click'),
    behandledeOppgaver: [],
  },
};
