import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import RestApiMock from '@fpsak-frontend/utils-test/src/rest/RestApiMock';
import getIntlDecorator from '@fpsak-frontend/storybook-utils/decorators/withIntl';

import { RestApiPathsKeys, requestApi } from '../../../data/fplosRestApi';
import FlyttReservasjonModal from './FlyttReservasjonModal';
import SaksbehandlerAvdeling from '../../../typer/saksbehandlerAvdelingTsType';

import messages from '../../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/FlyttReservasjonModal',
  component: FlyttReservasjonModal,
  decorators: [withIntl],
};

const Template: Story<{
  saksbehandler: SaksbehandlerAvdeling,
  hentReserverteOppgaver: (params: any, keepData: boolean) => void
}> = ({
  saksbehandler,
  hentReserverteOppgaver,
}) => {
  const data = [
    { key: RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK.name, data: saksbehandler },
    { key: RestApiPathsKeys.FLYTT_RESERVASJON.name, data: undefined },
  ];

  return (
    <RestApiMock data={data} requestApi={requestApi}>
      <FlyttReservasjonModal
        showModal
        oppgaveId={1}
        closeModal={action('button-click')}
        toggleMenu={action('button-click')}
        hentReserverteOppgaver={hentReserverteOppgaver}
      />
    </RestApiMock>
  );
};

export const Default = Template.bind({});
Default.args = {
  hentReserverteOppgaver: action('button-click'),
  saksbehandler: undefined,
};

export const MedTreffPåSøk = Template.bind({});
MedTreffPåSøk.args = {
  hentReserverteOppgaver: action('button-click'),
  saksbehandler: {
    brukerIdent: 'R232323',
    navn: 'Espen Utvikler',
    avdelingsnavn: ['NAV Viken'],
  },
};
