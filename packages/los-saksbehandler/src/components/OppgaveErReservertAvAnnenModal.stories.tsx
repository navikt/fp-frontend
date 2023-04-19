import React from 'react';
import { StoryFn } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { Modal } from '@navikt/ds-react';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { Oppgave } from '@navikt/fp-los-felles';

import OppgaveErReservertAvAnnenModal from './OppgaveErReservertAvAnnenModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

Modal.setAppElement('body');

export default {
  title: 'los/saksbehandler/OppgaveErReservertAvAnnenModal',
  component: OppgaveErReservertAvAnnenModal,
  decorators: [withIntl],
};

const oppgaveForResevertAvAnnenModal = {
  id: 1,
  status: {
    erReservert: false,
    flyttetReservasjon: {
      tidspunkt: '2019-02-02',
      uid: '23423',
      navn: 'Espen Utvikler',
      begrunnelse: 'Flyttet',
    },
  },
  saksnummer: 1234,
  personnummer: '1212',
  navn: 'Espen Utvikler',
  system: 'SAK',
  behandlingstype: BehandlingType.FORSTEGANGSSOKNAD,
  behandlingStatus: BehandlingStatus.BEHANDLING_UTREDES,
  opprettetTidspunkt: '2019-01-01',
  behandlingsfrist: '2019-01-01',
  fagsakYtelseType: FagsakYtelseType.FORELDREPENGER,
  erTilSaksbehandling: true,
  behandlingId: '1',
  href: '',
};

const Template: StoryFn<{ lukkErReservertModalOgOpneOppgave: (oppgave: Oppgave) => void }> = ({
  lukkErReservertModalOgOpneOppgave,
}) => (
  <OppgaveErReservertAvAnnenModal
    lukkErReservertModalOgOpneOppgave={lukkErReservertModalOgOpneOppgave}
    oppgave={oppgaveForResevertAvAnnenModal}
    oppgaveStatus={{
      erReservert: false,
      reservertAvNavn: 'Espen Utvikler',
      reservertAvUid: 'E232323',
      reservertTilTidspunkt: '2020-01-01',
    }}
  />
);

export const Default = Template.bind({});
Default.args = {
  lukkErReservertModalOgOpneOppgave: action('button-click'),
};
