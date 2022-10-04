import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './SletteSakslisteModal.stories';

const { Default } = composeStories(stories);

describe('<SletteSakslisteModal>', () => {
  it('skal vise modal for sletting av saksliste og så svare ja', async () => {
    const submit = jest.fn();
    render(<Default submit={submit} />);
    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await waitFor(() => expect(submit).toHaveBeenCalledTimes(1));
    expect(submit).toHaveBeenNthCalledWith(1, {
      antallBehandlinger: 2,
      navn: 'Saksliste 1',
      saksbehandlerIdenter: [],
      sakslisteId: 1,
      sistEndret: '2020-01-01',
    });
  });

  it('skal vise modal for sletting av saksliste og så svare nei', async () => {
    const cancel = jest.fn();
    render(<Default cancel={cancel} />);
    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));

    await waitFor(() => expect(cancel).toHaveBeenCalledTimes(1));
  });
});
