import { getIntlDecorator } from '@navikt/fp-storybook-utils';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { OppgaveErReservertAvAnnenModal } from './OppgaveErReservertAvAnnenModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

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

const meta = {
  title: 'los/saksbehandler/OppgaveErReservertAvAnnenModal',
  component: OppgaveErReservertAvAnnenModal,
  decorators: [withIntl],
} satisfies Meta<typeof OppgaveErReservertAvAnnenModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lukkErReservertModalOgOpneOppgave: action('button-click'),
    oppgave: oppgaveForResevertAvAnnenModal,
    oppgaveStatus: {
      erReservert: false,
      reservertAvNavn: 'Espen Utvikler',
      reservertAvUid: 'E232323',
      reservertTilTidspunkt: '2020-01-01',
    },
  },
};
