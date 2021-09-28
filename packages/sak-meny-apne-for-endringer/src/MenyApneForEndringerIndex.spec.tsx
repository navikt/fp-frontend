import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import * as stories from './MenyApneForEndringerIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyApneForEndringerIndex>', () => {
  Modal.setAppElement('body');

  it('skal vise modal og velge å åpne behandling for endringer', async () => {
    const apneBehandlingForEndringer = jest.fn();
    const lukkModal = jest.fn();
    render(<Default apneBehandlingForEndringer={apneBehandlingForEndringer} lukkModal={lukkModal} />);

    expect(await screen.findByText('Åpne behandling for endringer?')).toBeInTheDocument();

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(apneBehandlingForEndringer).toHaveBeenCalledTimes(1));
    expect(lukkModal).toHaveBeenCalledTimes(1);
  });
});
