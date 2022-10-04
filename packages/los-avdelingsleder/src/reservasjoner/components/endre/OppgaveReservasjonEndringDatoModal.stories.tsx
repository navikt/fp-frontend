import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosRestApi';
import OppgaveReservasjonEndringDatoModal from './OppgaveReservasjonEndringDatoModal';

export default {
  title: 'saksbehandler/behandlingskoer/OppgaveReservasjonEndringDatoModal',
  component: OppgaveReservasjonEndringDatoModal,
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
