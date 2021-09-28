import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import * as stories from './MenyVergeIndex.stories';

const { LeggeTilVerge, FjerneVerge } = composeStories(stories);

describe('<MenyVergeIndex>', () => {
  Modal.setAppElement('body');

  it('skal vise modal for opprett og så velge å opprette verge', async () => {
    const opprettVerge = jest.fn();
    const lukkModal = jest.fn();
    render(<LeggeTilVerge opprettVerge={opprettVerge} lukkModal={lukkModal} />);

    expect(await screen.findByText('Opprett verge/fullmektig?')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(opprettVerge).toHaveBeenCalledTimes(1));
    expect(lukkModal).toHaveBeenCalledTimes(1);
  });

  it('skal vise modal for fjerne og så velge å fjerne verge', async () => {
    const fjernVerge = jest.fn();
    const lukkModal = jest.fn();
    render(<FjerneVerge fjernVerge={fjernVerge} lukkModal={lukkModal} />);

    expect(await screen.findByText('Fjern verge/fullmektig?')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(fjernVerge).toHaveBeenCalledTimes(1));
    expect(lukkModal).toHaveBeenCalledTimes(1);
  });
});
