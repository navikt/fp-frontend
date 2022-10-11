import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import FagsakSearchIndex from './FagsakSearchIndex';
import { RestApiPathsKeys, requestApi } from '../data/fplosSaksbehandlerRestApi';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/fagsakSearch/FagsakSearchIndex',
  component: FagsakSearchIndex,
  decorators: [withIntl],
};

const Template: Story = () => {
  const data = [
    { key: RestApiPathsKeys.RESERVER_OPPGAVE.name, data: undefined },
    { key: RestApiPathsKeys.SEARCH_FAGSAK.name, data: {} },
    { key: RestApiPathsKeys.OPPGAVER_FOR_FAGSAKER.name, data: [] },
    { key: RestApiPathsKeys.HENT_RESERVASJONSSTATUS.name, data: undefined },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <FagsakSearchIndex
        åpneFagsak={() => undefined}
        kanSaksbehandle
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
