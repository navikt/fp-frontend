import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { BehandlingStatus, BehandlingType, FagsakYtelseType } from '@navikt/ft-kodeverk';

import * as stories from './OppgaveErReservertAvAnnenModal.stories';

const { Default } = composeStories(stories);

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

describe('<OppgaveErReservertAvAnnenModal>', () => {
  it('skal modal og lukke den ved trykk på Ok-knappen', async () => {
    const lukkErReservertModalOgOpneOppgave = jest.fn();
    render(<Default lukkErReservertModalOgOpneOppgave={lukkErReservertModalOgOpneOppgave} />);
    expect(await screen.findByText(
      'Espen Utvikler (E232323) arbeider nå med denne behandlingen (reservert fram t.o.m 01.01.2020 - 00:00)',
    )).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkErReservertModalOgOpneOppgave).toHaveBeenCalledTimes(1));
    expect(lukkErReservertModalOgOpneOppgave).toHaveBeenNthCalledWith(1, oppgaveForResevertAvAnnenModal);
  });
});
