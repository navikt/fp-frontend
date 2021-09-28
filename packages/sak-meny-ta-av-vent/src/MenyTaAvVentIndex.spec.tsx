import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import * as stories from './MenyTaAvVentIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyTaAvVentIndex>', () => {
  Modal.setAppElement('body');

  it('skal vise modal og velge å åpne ta behandling av vent', async () => {
    const taBehandlingAvVent = jest.fn();
    const lukkModal = jest.fn();
    render(<Default taBehandlingAvVent={taBehandlingAvVent} lukkModal={lukkModal} />);

    expect(await screen.findByText('Ta behandlingen av vent?')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(taBehandlingAvVent).toHaveBeenCalledTimes(1));
    expect(lukkModal).toHaveBeenCalledTimes(1);
  });
});
