import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import { BehandlingTypeEnum, OppgaveBehandlingStatus } from '@navikt/fp-kodeverk';
import type { Oppgave } from '@navikt/fp-los-felles';
import { getIntlDecorator } from '@navikt/fp-storybook-utils';

import { OppgaveErReservertAvAnnenModal } from './OppgaveErReservertAvAnnenModal';

import messages from '../../i18n/nb_NO.json';

const withIntl = getIntlDecorator(messages);

const oppgaveForResevertAvAnnenModal = {
  id: 1,
  reservasjonStatus: {
    erReservert: false,
    flyttetReservasjon: {
      tidspunkt: '2019-02-02',
      uid: '23423',
      navn: 'Espen Utvikler',
      begrunnelse: 'Flyttet',
    },
  },
  saksnummer: '1234',
  personnummer: '1212',
  navn: 'Espen Utvikler',
  system: 'SAK',
  behandlingstype: BehandlingTypeEnum.FORSTEGANGSSOKNAD,
  opprettetTidspunkt: '2019-01-01',
  behandlingsfrist: '2019-01-01',
  fagsakYtelseType: 'FP',
  erTilSaksbehandling: true,
  behandlingId: '1',
  andreKriterier: [],
  oppgaveBehandlingStatus: OppgaveBehandlingStatus.UNDER_ARBEID,
} satisfies Oppgave;

const meta = {
  title: 'OppgaveErReservertAvAnnenModal',
  component: OppgaveErReservertAvAnnenModal,
  decorators: [withIntl],
} satisfies Meta<typeof OppgaveErReservertAvAnnenModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    lukkErReservertModalOgOpneOppgave: action('button-click'),
    oppgave: oppgaveForResevertAvAnnenModal,
    reservasjonStatus: {
      erReservert: false,
      reservertAvNavn: 'Espen Utvikler',
      reservertAvUid: 'E232323',
      reservertTilTidspunkt: '2020-01-01',
    },
  },
};
