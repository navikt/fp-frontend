import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { Modal } from '@navikt/ds-react';
import { UtlandMarkeringKode } from '@navikt/fp-kodeverk';

import * as stories from './MenyEndreUtlandIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyEndreUtlandIndex>', () => {
  if (Modal.setAppElement) {
    Modal.setAppElement('body');
  }

  it('skal endre fra ingenting til eøs', async () => {
    const endreUtlandMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreUtlandMarkering={endreUtlandMarkering} lukkModal={lukkModal} />);
    expect(await screen.findByText('Utland')).toBeInTheDocument();

    await userEvent.click(screen.getByText('EØS bosatt Norge'));

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(endreUtlandMarkering).toHaveBeenCalledTimes(1));
    expect(endreUtlandMarkering).toHaveBeenNthCalledWith(1, false, {
      utlandMarkering: UtlandMarkeringKode.EØS_BOSATT_NORGE,
      saksnummer: '123',
    });
  });

  it('skal endre fra eøs til bosatt utland', async () => {
    const endreUtlandMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreUtlandMarkering={endreUtlandMarkering} lukkModal={lukkModal} />);
    expect(await screen.findByText('Utland')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Bosatt utland'));

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(endreUtlandMarkering).toHaveBeenCalledTimes(1));
    expect(endreUtlandMarkering).toHaveBeenNthCalledWith(1, false, {
      utlandMarkering: UtlandMarkeringKode.BOSATT_UTLAND,
      saksnummer: '123',
    });
  });

  it('skal gi feilmelding når obligatoriske felter ikke er fylt ut', async () => {
    const endreUtlandMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreUtlandMarkering={endreUtlandMarkering} lukkModal={lukkModal} />);
    expect(await screen.findByText('Utland')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();
  });
});
