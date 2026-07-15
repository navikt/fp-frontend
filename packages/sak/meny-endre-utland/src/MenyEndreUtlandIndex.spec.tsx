import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './MenyEndreUtlandIndex.stories';

const { Default } = composeStories(stories);

const finnKnapp = (tekst: string): HTMLButtonElement => {
  const knapp = screen.getByText(tekst).closest('button');
  if (!knapp) {
    throw new Error(`Fant ikke <button> for teksten "${tekst}"`);
  }
  return knapp;
};

describe('MenyEndreUtlandIndex', () => {
  it('skal endre fra ingenting til eøs', async () => {
    const endreFagsakMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreFagsakMarkering={endreFagsakMarkering} lukkModal={lukkModal} />);
    expect(await screen.findByText('Saksmarkering')).toBeInTheDocument();

    await userEvent.click(screen.getByText('EØS bosatt Norge'));

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(endreFagsakMarkering).toHaveBeenCalledTimes(1));
    expect(endreFagsakMarkering).toHaveBeenNthCalledWith(1, {
      fagsakMarkeringer: ['EØS_BOSATT_NORGE'],
      saksnummer: '123',
    });
    expect(lukkModal).not.toHaveBeenCalled();
  });

  it('skal endre fra eøs til bosatt utland', async () => {
    const endreFagsakMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreFagsakMarkering={endreFagsakMarkering} lukkModal={lukkModal} />);
    expect(await screen.findByText('Saksmarkering')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Bosatt utland'));

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(endreFagsakMarkering).toHaveBeenCalledTimes(1));
    expect(endreFagsakMarkering).toHaveBeenNthCalledWith(1, {
      fagsakMarkeringer: ['BOSATT_UTLAND'],
      saksnummer: '123',
    });
    expect(lukkModal).not.toHaveBeenCalled();
  });

  it('skal disable OK/Avbryt-knappene og hindre ny innsending når lagring er isPending', async () => {
    const endreFagsakMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreFagsakMarkering={endreFagsakMarkering} lukkModal={lukkModal} isPending />);
    expect(await screen.findByText('Saksmarkering')).toBeInTheDocument();

    const okKnapp = finnKnapp('OK');
    const avbrytKnapp = finnKnapp('Avbryt');
    expect(okKnapp).toBeDisabled();
    expect(avbrytKnapp).toBeDisabled();

    await userEvent.click(okKnapp);
    await userEvent.click(avbrytKnapp);

    expect(endreFagsakMarkering).not.toHaveBeenCalled();
    expect(lukkModal).not.toHaveBeenCalled();
  });
});
