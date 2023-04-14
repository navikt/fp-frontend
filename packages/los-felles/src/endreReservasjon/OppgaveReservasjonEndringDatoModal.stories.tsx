import React from 'react';
import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies

import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Modal } from '@navikt/ds-react';

import OppgaveReservasjonEndringDatoModal from './OppgaveReservasjonEndringDatoModal';

import messages from '../../i18n/nb_NO.json';

Modal.setAppElement('body');

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/avdelingsleder/behandlingskoer/OppgaveReservasjonEndringDatoModal',
  component: OppgaveReservasjonEndringDatoModal,
  decorators: [withIntl],
};

const Template: Story<{ endreReserverasjonState: () => void }> = ({ endreReserverasjonState }) => (
  <OppgaveReservasjonEndringDatoModal
    showModal
    closeModal={action('button-click')}
    reserverTilDefault=""
    oppgaveId={1}
    endreReserverasjonState={endreReserverasjonState}
    hentReserverteOppgaver={action('button-click')}
    endreOppgavereservasjon={() => Promise.resolve([])}
  />
);

export const Default = Template.bind({});
Default.args = {
  endreReserverasjonState: action('button-click'),
};
