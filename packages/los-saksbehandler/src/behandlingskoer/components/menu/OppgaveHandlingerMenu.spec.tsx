import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './OppgaveHandlingerMenu.stories';

const { Default } = composeStories(stories);

describe('<OppgaveHandlingerMenu>', () => {
  it('skal vise fire meny-knapper for reserverte oppgaver', async () => {
    render(<Default />);

    expect(await screen.findByText('Reservert til 02.08.2021 - 00:54')).toBeInTheDocument();
    expect(screen.getByText(/Legg behandling/i)).toBeInTheDocument();
    expect(screen.getByText(/tilbake i felles kø/i)).toBeInTheDocument();
    expect(screen.getByText(/Forleng din reservasjon av/i)).toBeInTheDocument();
    expect(screen.getByText(/behandlingen med 24 timer/i)).toBeInTheDocument();
    expect(screen.getByText('Reserver behandlingen med dato')).toBeInTheDocument();
    expect(screen.getByText(/Flytt reservasjonen til/i)).toBeInTheDocument();
    expect(screen.getByText(/annen saksbehandler/i)).toBeInTheDocument();
  });

  it('skal åpne og lukke modal for oppheving av reservasjon', async () => {
    render(<Default />);

    expect(await screen.findByText('Reservert til 02.08.2021 - 00:54')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[0]);

    expect(await screen.findByText('Når en reservert sak frigjøres er begrunnelse obligatorisk')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Avbryt'));

    await waitFor(() => expect(screen.queryByText('Når en reservert sak frigjøres er begrunnelse obligatorisk')).not.toBeInTheDocument());
  });

  it('skal åpne modal for å forlenge reservasjon', async () => {
    render(<Default />);

    expect(await screen.findByText('Reservert til 02.08.2021 - 00:54')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[1]);

    expect(await screen.findByText('Behandlingen er reservert på deg')).toBeInTheDocument();
  });

  it('skal åpne modal for å reservere med dato', async () => {
    render(<Default />);

    expect(await screen.findByText('Reservert til 02.08.2021 - 00:54')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[2]);

    expect(await screen.findByText('Velg dato som reservasjonen avsluttes')).toBeInTheDocument();
  });

  it('skal åpne og lukke modal for å flytte reservasjon', async () => {
    render(<Default />);

    expect(await screen.findByText('Reservert til 02.08.2021 - 00:54')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('button')[3]);

    expect(await screen.findByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Avbryt'));

    await waitFor(() => expect(screen.queryByText('Flytt reservasjonen til annen saksbehandler')).not.toBeInTheDocument());
  });
});
