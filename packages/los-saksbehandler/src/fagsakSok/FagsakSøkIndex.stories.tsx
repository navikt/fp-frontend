import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RestApiMock } from '@navikt/fp-utils-test';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { FagsakSøkIndex } from './FagsakSøkIndex';
import { RestApiPathsKeys, requestApi } from '../data/fplosSaksbehandlerRestApi';

import messages from '../../i18n/nb_NO.json';
import { action } from '@storybook/addon-actions';

const withIntl = getIntlDecorator(messages);

const meta = {
  title: 'los/saksbehandler/søk/FagsakSøkIndex',
  component: FagsakSøkIndex,
  decorators: [withIntl],
  render: props => {
    const data = [
      { key: RestApiPathsKeys.RESERVER_OPPGAVE.name, data: undefined },
      { key: RestApiPathsKeys.SEARCH_FAGSAK.name, data: {} },
      { key: RestApiPathsKeys.OPPGAVER_FOR_FAGSAKER.name, data: [] },
      { key: RestApiPathsKeys.HENT_RESERVASJONSSTATUS.name, data: undefined },
    ];

    return (
      <RestApiMock data={data} requestApi={requestApi}>
        <FagsakSøkIndex {...props} />
      </RestApiMock>
    );
  },
} satisfies Meta<typeof FagsakSøkIndex>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    åpneFagsak: action('button-click'),
    kanSaksbehandle: true,
  },
};
