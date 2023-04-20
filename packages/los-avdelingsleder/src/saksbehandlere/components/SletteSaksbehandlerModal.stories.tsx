import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { Modal } from '@navikt/ds-react';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import Saksbehandler from '../../typer/saksbehandlerAvdelingTsType';
import SletteSaksbehandlerModal from './SletteSaksbehandlerModal';

import messages from '../../../i18n/nb_NO.json';

Modal.setAppElement('body');

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/saksbehandlere/SletteSaksbehandlerModal',
  component: SletteSaksbehandlerModal,
  decorators: [withIntl],
};

const Template: StoryFn<{
  fjernSaksbehandler: (saksbehandler: Saksbehandler) => void;
}> = ({ fjernSaksbehandler }) => (
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
