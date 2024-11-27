import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import Saksliste from '../../typer/sakslisteAvdelingTsType';
import SletteSakslisteModal from './SletteSakslisteModal';

import messages from '../../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/SletteSakslisteModal',
  component: SletteSakslisteModal,
  decorators: [withIntl],
};

const Template: StoryFn<{
  cancel: () => void;
  submit: (saksliste: Saksliste) => void;
}> = ({ cancel, submit }) => (
  <SletteSakslisteModal
    valgtSaksliste={{
      sakslisteId: 1,
      navn: 'Saksliste 1',
      sistEndret: '2020-01-01',
      saksbehandlerIdenter: [],
      antallBehandlinger: 2,
    }}
    cancel={cancel}
    submit={submit}
  />
);

export const Default = Template.bind({});
Default.args = {
  cancel: action('button-click'),
  submit: action('button-click'),
};
