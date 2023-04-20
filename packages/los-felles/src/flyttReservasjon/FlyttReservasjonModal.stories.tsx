import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { Modal } from '@navikt/ds-react';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import FlyttReservasjonModal from './FlyttReservasjonModal';
import SaksbehandlerAvdeling from '../typer/saksbehandlerAvdelingTsType';

import messages from '../../i18n/nb_NO.json';

Modal.setAppElement('body');

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/FlyttReservasjonModal',
  component: FlyttReservasjonModal,
  decorators: [withIntl],
};

const Template: StoryFn<{
  saksbehandler: SaksbehandlerAvdeling;
  hentReserverteOppgaver: (params: any, keepData: boolean) => void;
}> = ({ saksbehandler, hentReserverteOppgaver }) => {
  const [harHentet, setHentet] = useState(false);
  const hentSaksbehandler = () => {
    setHentet(true);
    return Promise.resolve(saksbehandler);
  };

  return (
    <FlyttReservasjonModal
      showModal
      oppgaveId={1}
      closeModal={action('button-click')}
      toggleMenu={action('button-click')}
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
    avdelingsnavn: ['NAV Viken'],
  },
};
