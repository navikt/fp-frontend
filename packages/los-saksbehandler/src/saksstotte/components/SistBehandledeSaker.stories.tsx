import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import { RestApiPathsKeys, RestApiGlobalStatePathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';
import Oppgave from '../../typer/oppgaveTsType';
import SistBehandledeSaker from './SistBehandledeSaker';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/saksbehandler/saksstotte/SistBehandledeSaker',
  component: SistBehandledeSaker,
  decorators: [withIntl],
};

const Template: Story<{ behandledeOppgaver?: Oppgave[] }> = ({
  behandledeOppgaver,
}) => {
  const data = [
    { key: RestApiGlobalStatePathsKeys.FPSAK_URL.name, data: { value: 'fpsak-url' }, global: true },
    { key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name, data: behandledeOppgaver },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  behandledeOppgaver: [{
    id: 1,
    personnummer: '334342323',
    navn: 'Espen Utvikler',
  } as Oppgave],
};

export const IngenBehandlinger = Template.bind({});
