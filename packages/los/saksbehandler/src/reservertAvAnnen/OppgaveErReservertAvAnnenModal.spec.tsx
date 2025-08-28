import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BehandlingTypeEnum, OppgaveBehandlingStatus } from '@navikt/fp-kodeverk';
import type { Oppgave } from '@navikt/fp-los-felles';

import * as stories from './OppgaveErReservertAvAnnenModal.stories';

const { Default } = composeStories(stories);

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

describe('OppgaveErReservertAvAnnenModal', () => {
  it('skal modal og lukke den ved trykk på Ok-knappen', async () => {
    const lukkErReservertModalOgOpneOppgave = vi.fn();
    render(<Default lukkErReservertModalOgOpneOppgave={lukkErReservertModalOgOpneOppgave} />);
    expect(
      await screen.findByText(
        'Espen Utvikler (E232323) arbeider nå med denne behandlingen (reservert fram t.o.m 01.01.2020 - 00:00)',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkErReservertModalOgOpneOppgave).toHaveBeenCalledTimes(1));
    expect(lukkErReservertModalOgOpneOppgave).toHaveBeenNthCalledWith(1, oppgaveForResevertAvAnnenModal);
  });
});
