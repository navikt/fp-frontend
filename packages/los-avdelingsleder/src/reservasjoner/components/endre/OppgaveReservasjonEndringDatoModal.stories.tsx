import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosRestApi';
import OppgaveReservasjonEndringDatoModal from './OppgaveReservasjonEndringDatoModal';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/OppgaveReservasjonEndringDatoModal',
  component: OppgaveReservasjonEndringDatoModal,
  decorators: [withIntl],
};

const Template: Story<{ endreReserverasjonState: () => void }> = ({
  endreReserverasjonState,
}) => {
  const data = [
    { key: RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON.name, data: {} },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <OppgaveReservasjonEndringDatoModal
        showModal
        closeModal={action('button-click')}
        reserverTilDefault=""
        oppgaveId={1}
        endreReserverasjonState={endreReserverasjonState}
        hentReserverteOppgaver={action('button-click')}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  endreReserverasjonState: action('button-click'),
};
