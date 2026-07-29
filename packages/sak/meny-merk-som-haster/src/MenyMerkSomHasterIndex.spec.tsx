import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './MenyMerkSomHasterIndex.stories';

const { Default } = composeStories(stories);

const finnKnapp = (tekst: string): HTMLButtonElement => {
  const knapp = screen.getByText(tekst).closest('button');
  if (!knapp) {
    throw new Error(`Fant ikke <button> for teksten "${tekst}"`);
  }
  return knapp;
};

describe('MenyMerkSomHasterIndex', () => {
  it('skal vise modal og merke sak som haster', async () => {
    const merkSomHaster = vi.fn();
    const lukkModal = vi.fn();
    render(<Default merkSomHaster={merkSomHaster} lukkModal={lukkModal} />);

    expect(await screen.findByText('Merk som haster?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(merkSomHaster).toHaveBeenCalledTimes(1));
    expect(lukkModal).not.toHaveBeenCalled();
  });

  it('skal disable OK/Avbryt-knappene og hindre ny innsending når lagring er isPending', async () => {
    const merkSomHaster = vi.fn();
    const lukkModal = vi.fn();
    render(<Default merkSomHaster={merkSomHaster} lukkModal={lukkModal} isPending />);

    expect(await screen.findByText('Merk som haster?')).toBeInTheDocument();

    const okKnapp = finnKnapp('OK');
    const avbrytKnapp = finnKnapp('Avbryt');
    expect(okKnapp).toBeDisabled();
    expect(avbrytKnapp).toBeDisabled();

    await userEvent.click(okKnapp);
    await userEvent.click(avbrytKnapp);

    expect(merkSomHaster).not.toHaveBeenCalled();
    expect(lukkModal).not.toHaveBeenCalled();
  });
});
