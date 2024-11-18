import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './MenyTaAvVentIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyTaAvVentIndex>', () => {
  it('skal vise modal og velge å åpne ta behandling av vent', async () => {
    const taBehandlingAvVent = vi.fn();
    const lukkModal = vi.fn();
    render(<Default taBehandlingAvVent={taBehandlingAvVent} lukkModal={lukkModal} />);

    expect(await screen.findByText('Ta behandlingen av vent?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(taBehandlingAvVent).toHaveBeenCalledTimes(1));
    expect(lukkModal).toHaveBeenCalledTimes(1);
  });
});
