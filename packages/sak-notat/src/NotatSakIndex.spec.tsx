import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './NotatSakIndex.stories';

const { Default } = composeStories(stories);

describe('<NotatSakIndex>', () => {
  it('skal legge til notat', async () => {
    const lagre = vi.fn();

    const utils = render(<Default lagreNotat={lagre} />);

    expect(await screen.findByText('Dette er et notat skrevet av Espen som nå er innlogget')).toBeInTheDocument();
    expect(screen.getByText('Du')).toBeInTheDocument();
    expect(screen.getByText('02. august 2022 kl. 00:54')).toBeInTheDocument();

    expect(screen.getByText('Dette er et annet notat')).toBeInTheDocument();
    expect(screen.getByText('02. september 2022 kl. 00:23')).toBeInTheDocument();
    expect(screen.getByText('Dette er et tredje notat')).toBeInTheDocument();
    expect(screen.getByText('02. september 2022 kl. 11:12')).toBeInTheDocument();
    expect(screen.getAllByText('Saksbehandler Eva')).toHaveLength(2);

    expect(screen.getByText('Kun saksbehandlere får se notatet')).toBeInTheDocument();

    const notatInput = utils.getByRole('textbox');
    await userEvent.type(notatInput, 'Dette er et notat');

    await userEvent.click(screen.getByText('Legg til notat'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      saksnummer: '12343432',
      notat: 'Dette er et notat',
    });
  });
});
