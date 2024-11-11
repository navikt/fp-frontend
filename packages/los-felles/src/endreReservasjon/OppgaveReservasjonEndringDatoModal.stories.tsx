import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { OppgaveReservasjonEndringDatoModal } from './OppgaveReservasjonEndringDatoModal';

import messages from '../../i18n/nb_NO.json';
import dayjs from 'dayjs';

const withIntl = getIntlDecorator(messages);

export default {
  title: 'los/OppgaveReservasjonEndringDatoModal',
  component: OppgaveReservasjonEndringDatoModal,
  decorators: [withIntl],
};

const Template: StoryFn<{ endreReserverasjonState: () => void; reserverTilDefault?: string }> = ({
  endreReserverasjonState,
  reserverTilDefault,
}) => (
  <OppgaveReservasjonEndringDatoModal
    closeModal={action('button-click')}
    reserverTilDefault={reserverTilDefault}
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

export const MedDefaultverdi = Template.bind({});
MedDefaultverdi.args = {
  endreReserverasjonState: action('button-click'),
  reserverTilDefault: dayjs().add(1, 'week').format('YYYY-MM-DD'),
};
