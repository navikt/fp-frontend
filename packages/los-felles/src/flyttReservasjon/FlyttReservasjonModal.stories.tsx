import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { FlyttReservasjonModal } from './FlyttReservasjonModal';
import SaksbehandlerProfil from '../typer/saksbehandlerProfilTsType';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/FlyttReservasjonModal',
  component: FlyttReservasjonModal,
  decorators: [withIntl],
};

const Template: StoryFn<{
  saksbehandler: SaksbehandlerProfil;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}> = ({ saksbehandler, hentReserverteOppgaver }) => {
  const [harHentet, setHentet] = useState(false);
  const hentSaksbehandler = () => {
    setHentet(true);
    return Promise.resolve(saksbehandler);
  };

  return (
    <FlyttReservasjonModal
      oppgaveId={1}
      closeModal={action('button-click')}
      hentReserverteOppgaver={hentReserverteOppgaver}
      flyttOppgavereservasjon={() => Promise.resolve()}
      hentSaksbehandler={hentSaksbehandler}
      hentSaksbehandlerState={harHentet ? RestApiState.SUCCESS : RestApiState.NOT_STARTED}
      saksbehandler={saksbehandler}
      resetHentSaksbehandler={() => undefined}
    />
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
    ansattAvdeling: 'Avdeling A',
  },
};
