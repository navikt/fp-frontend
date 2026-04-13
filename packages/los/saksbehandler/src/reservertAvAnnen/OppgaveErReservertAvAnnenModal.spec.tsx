import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './OppgaveErReservertAvAnnenModal.stories';

const { Default } = composeStories(stories);

describe('OppgaveErReservertAvAnnenModal', () => {
  it('skal modal og lukke den ved trykk på Ok-knappen', async () => {
    const lukkErReservertModalOgOpneOppgave = vi.fn();
    render(<Default lukkErReservertModalOgOpneOppgave={lukkErReservertModalOgOpneOppgave} />);
    expect(
      await screen.findByText(
        'Espen Utvikler (E232323) arbeider nå med denne behandlingen (reservert fram t.o.m 01.01.2020 - 23:59)',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkErReservertModalOgOpneOppgave).toHaveBeenCalledTimes(1));
    expect(lukkErReservertModalOgOpneOppgave).toHaveBeenNthCalledWith(1, Default.args.oppgave);
  });
});
