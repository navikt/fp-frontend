import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import SletteSaksbehandlerModal from './SletteSaksbehandlerModal';

export default {
  title: 'avdelingsleder/saksbehandlere/SletteSaksbehandlerModal',
  component: SletteSaksbehandlerModal,
};

const Template: Story<{
  fjernSaksbehandler: (saksbehandler: Saksbehandler) => void;
}> = ({
  fjernSaksbehandler,
}) => (
  <SletteSaksbehandlerModal
    valgtSaksbehandler={{
      brukerIdent: 'R12122',
      navn: 'Espen Utvikler',
      avdelingsnavn: [],
    }}
    closeSletteModal={action('button-click')}
    fjernSaksbehandler={fjernSaksbehandler}
  />
);

export const Default = Template.bind({});
Default.args = {
  fjernSaksbehandler: action('button-click'),
};
