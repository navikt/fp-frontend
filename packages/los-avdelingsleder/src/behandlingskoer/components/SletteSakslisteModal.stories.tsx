import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { Modal } from '@navikt/ds-react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import SletteSakslisteModal from './SletteSakslisteModal';
import Saksliste from '../../typer/sakslisteAvdelingTsType';

import messages from '../../../i18n/nb_NO.json';

Modal.setAppElement('body');

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/SletteSakslisteModal',
  component: SletteSakslisteModal,
  decorators: [withIntl],
};

const Template: Story<{
  cancel: () => void;
  submit: (saksliste: Saksliste) => void;
}> = ({
  cancel,
  submit,
}) => (
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
