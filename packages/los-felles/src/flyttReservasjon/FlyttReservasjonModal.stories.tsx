import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import FlyttReservasjonModal from './FlyttReservasjonModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const meta = {
  component: FlyttReservasjonModal,
  decorators: [withIntl],
  args: {
    hentSaksbehandlerState: RestApiState.NOT_STARTED,
    showModal: true,
    oppgaveId: 1,
    closeModal: action('onCloseModal'),
    toggleMenu: action('onToggleMenu'),
    resetHentSaksbehandler: action('onResetHentSaksbehandler'),
    hentReserverteOppgaver: action('onHentReserverteOppgaver'),
    flyttOppgavereservasjon: params => {
      action('onFlyttOppgavereservasjon')(params);
      return Promise.resolve();
    },
    hentSaksbehandler: args => {
      action('onHentSaksbehandler')(args);
      return Promise.resolve(undefined);
    },
  },
  render: args => {
    const [harHentet, setHentet] = useState(false);
    return (
      <FlyttReservasjonModal
        {...args}
        hentSaksbehandlerState={harHentet ? RestApiState.SUCCESS : RestApiState.NOT_STARTED}
        hentSaksbehandler={({ brukerIdent }) => {
          setHentet(true);
          return args.hentSaksbehandler({ brukerIdent });
        }}
      />
    );
  },
} satisfies Meta<typeof FlyttReservasjonModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    saksbehandler: undefined,
  },
};

export const MedTreffPåSøk: Story = {
  args: {
    saksbehandler: {
      brukerIdent: 'R232323',
      navn: 'Espen Utvikler',
      ansattAvdeling: 'Avdeling A',
    },
  },
};
