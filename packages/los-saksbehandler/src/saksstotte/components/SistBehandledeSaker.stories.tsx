import React from 'react';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@navikt/fp-utils-test/src/rest/RestApiMock';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Oppgave } from '@navikt/fp-los-felles';

import { RestApiPathsKeys, requestApi } from '../../data/fplosSaksbehandlerRestApi';
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
    { key: RestApiPathsKeys.BEHANDLEDE_OPPGAVER.name, data: behandledeOppgaver },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <SistBehandledeSaker åpneFagsak={() => undefined} />
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
