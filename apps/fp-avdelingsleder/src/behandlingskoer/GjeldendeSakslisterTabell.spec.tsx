import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './GjeldendeSakslisterTabell.stories';

const { TabellNårDetIkkeFinnesBehandlingskøer, TabellNårDetFinnesEnBehandlingskø } = composeStories(stories);

describe('GjeldendeSakslisterTabell', () => {
  it('skal vise at ingen behandlingskøer er laget og så legge til en ny kø', async () => {
    applyRequestHandlers(TabellNårDetIkkeFinnesBehandlingskøer.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetIkkeFinnesBehandlingskøer />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByText('Navn')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til behandlingskø'));

    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(await screen.findByText('Ny liste')).toBeInTheDocument();
  });

  it('skal vise slette kø ved å trykke på ikon for sletting', async () => {
    applyRequestHandlers(TabellNårDetFinnesEnBehandlingskø.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetFinnesEnBehandlingskø />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('img')[1]!);

    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    expect(screen.queryByText('Ønsker du å slette Saksliste 1?')).not.toBeInTheDocument();
  });

  it('skal legge til en ny kø ved bruk av tastaturet (enter)', async () => {
    applyRequestHandlers(TabellNårDetIkkeFinnesBehandlingskøer.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetIkkeFinnesBehandlingskøer />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByText('Navn')).not.toBeInTheDocument();

    fireEvent.keyDown(screen.getByText('Legg til behandlingskø'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Ny liste')).toBeInTheDocument();
  });
});
