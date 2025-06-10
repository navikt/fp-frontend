import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './GjeldendeSakslisterTabell.stories';

const { TabellNårDetIkkeFinnesBehandlingskøer, TabellNårDetFinnesEnBehandlingskø } = composeStories(stories);

describe('GjeldendeSakslisterTabell', () => {
  mswTest('skal vise at ingen behandlingskøer er laget og så legge til en ny kø', async ({ setHandlers }) => {
    setHandlers(TabellNårDetIkkeFinnesBehandlingskøer.parameters['msw']);
    render(<TabellNårDetIkkeFinnesBehandlingskøer />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByText('Navn')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til behandlingskø'));

    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(await screen.findByText('Ny liste')).toBeInTheDocument();
  });

  mswTest('skal vise slette kø ved å trykke på ikon for sletting', async ({ setHandlers }) => {
    setHandlers(TabellNårDetFinnesEnBehandlingskø.parameters['msw']);
    render(<TabellNårDetFinnesEnBehandlingskø />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('img')[1]);

    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    expect(screen.queryByText('Ønsker du å slette Saksliste 1?')).not.toBeInTheDocument();
  });

  mswTest('skal legge til en ny kø ved bruk av tastaturet (enter)', async ({ setHandlers }) => {
    setHandlers(TabellNårDetIkkeFinnesBehandlingskøer.parameters['msw']);
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
