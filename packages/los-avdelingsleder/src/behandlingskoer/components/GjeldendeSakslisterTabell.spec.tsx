import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './GjeldendeSakslisterTabell.stories';

const { TabellNårDetIkkeFinnesBehandlingskøer, TabellNårDetFinnesEnBehandlingskø } = composeStories(stories);

describe('<GjeldendeSakslisterTabell>', () => {
  it('skal vise at ingen behandlingskøer er laget og så legge til en ny kø', async () => {
    render(<TabellNårDetIkkeFinnesBehandlingskøer />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByText('Navn')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til behandlingskø'));

    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(await screen.findByText('Ny liste')).toBeInTheDocument();
  });

  it('skal vise slette kø ved å trykke på ikon for sletting og så velge ja i dialog', async () => {
    const hentAvdelingensSakslister = jest.fn();
    render(<TabellNårDetFinnesEnBehandlingskø hentAvdelingensSakslister={hentAvdelingensSakslister} />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('img')[0]);

    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await waitFor(() => expect(hentAvdelingensSakslister).toHaveBeenCalledTimes(1));
    expect(hentAvdelingensSakslister).toHaveBeenNthCalledWith(1, { avdelingEnhet: '1' });
  });

  it('skal legge til en ny kø ved bruk av tastaturet (enter)', async () => {
    render(<TabellNårDetIkkeFinnesBehandlingskøer />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByText('Navn')).not.toBeInTheDocument();

    await fireEvent.keyDown(screen.getByText('Legg til behandlingskø'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Ny liste')).toBeInTheDocument();
  });
});
