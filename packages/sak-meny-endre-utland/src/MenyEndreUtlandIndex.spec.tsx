import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { FagsakMarkeringKode } from '@navikt/fp-kodeverk';

import * as stories from './MenyEndreUtlandIndex.stories';

const { Default } = composeStories(stories);

describe('<MenyEndreUtlandIndex>', () => {
  it('skal endre fra ingenting til eøs', async () => {
    const endreFagsakMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreFagsakMarkering={endreFagsakMarkering} lukkModal={lukkModal} />);
    expect(await screen.findByText('Saksmarkering')).toBeInTheDocument();

    await userEvent.click(screen.getByText('EØS bosatt Norge'));

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(endreFagsakMarkering).toHaveBeenCalledTimes(1));
    expect(endreFagsakMarkering).toHaveBeenNthCalledWith(1, {
      fagsakMarkering: FagsakMarkeringKode.EØS_BOSATT_NORGE,
      saksnummer: '123',
    });
  });

  it('skal endre fra eøs til bosatt utland', async () => {
    const endreFagsakMarkering = vi.fn();
    const lukkModal = vi.fn();
    render(<Default endreFagsakMarkering={endreFagsakMarkering} lukkModal={lukkModal} />);
    expect(await screen.findByText('Saksmarkering')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Bosatt utland'));

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(lukkModal).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(endreFagsakMarkering).toHaveBeenCalledTimes(1));
    expect(endreFagsakMarkering).toHaveBeenNthCalledWith(1, {
      fagsakMarkering: FagsakMarkeringKode.BOSATT_UTLAND,
      saksnummer: '123',
    });
  });
});
