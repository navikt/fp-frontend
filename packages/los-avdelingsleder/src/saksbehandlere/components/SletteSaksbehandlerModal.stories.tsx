import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { SaksbehandlerProfil } from '@navikt/fp-los-felles';

import SletteSaksbehandlerModal from './SletteSaksbehandlerModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/saksbehandlere/SletteSaksbehandlerModal',
  component: SletteSaksbehandlerModal,
  decorators: [withIntl],
};

const Template: StoryFn<{
  fjernSaksbehandler: (saksbehandler: SaksbehandlerProfil) => void;
}> = ({ fjernSaksbehandler }) => (
  <SletteSaksbehandlerModal
    valgtSaksbehandler={{
      brukerIdent: 'R12122',
      navn: 'Espen Utvikler',
      ansattAvdeling: null,
    }}
    closeSletteModal={action('button-click')}
    fjernSaksbehandler={fjernSaksbehandler}
  />
);

export const Default = Template.bind({});
Default.args = {
  fjernSaksbehandler: action('button-click'),
};
