import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './OppgaveHandlingerMenu.stories';

const { Default } = composeStories(stories);

describe('OppgaveHandlingerMenu', () => {
  it('skal vise tre meny-knapper for reserverte oppgaver', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByTitle('Handlinger på oppgave')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));
    expect(screen.getAllByRole('menuitem')).toHaveLength(3);
    expect(await screen.findByText('Legg tilbake i felles kø')).toBeInTheDocument();
    expect(screen.getByText('Flytt til ny saksbehandler')).toBeInTheDocument();
    expect(screen.getByText('Legg til notat')).toBeInTheDocument();
  });

  it('skal åpne og lukke modal for å flytte reservasjon', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByTitle('Handlinger på oppgave')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Legg tilbake i felles kø')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Flytt til ny saksbehandler'));

    expect(await screen.findByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Avbryt'));

    await waitFor(() =>
      expect(screen.queryByText('Flytt reservasjonen til annen saksbehandler')).not.toBeInTheDocument(),
    );
  });

  it('skal legge tilbake oppgave i felles kø', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByTitle('Handlinger på oppgave')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Legg tilbake i felles kø')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg tilbake i felles kø'));

    await waitFor(() => expect(screen.queryByText('Legg tilbake i felles kø')).not.toBeInTheDocument());
  });

  it('skal åpne og lukke modal for å legge til notat', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByTitle('Handlinger på oppgave')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Legg til notat')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til notat'));

    expect(await screen.findByText('Legg til notat på reservasjon')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Avbryt'));

    await waitFor(() => expect(screen.queryByText('Legg til notat på reservasjon')).not.toBeInTheDocument());
  });
});
