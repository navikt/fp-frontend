import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './TilkjentYtelseProsessIndex.stories';

const { UtenAksjonspunkt, UtførtAksjonspunkt } = composeStories(stories);

describe('<TilkjentYtelseProsessIndex>', () => {
  it('skal se på tilkjent ytelse uten aksjonspunkt', async () => {
    render(<UtenAksjonspunkt />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();

    // Trykk på periode i tidslinja
    await userEvent.click(screen.getAllByRole('button')[2]);

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018 - 10.01.2019')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Fellesperiode')).toBeInTheDocument();
    expect(screen.getByText('Nei')).toBeInTheDocument();
  });

  it('skal lese tidligere løst aksjonspunkt', async () => {
    render(<UtførtAksjonspunkt />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Saksbehandler har vurdert om ytelsen skal endres fra direkte utbetaling til refusjon til arbeidsgiver, ' +
          'og tilbakekreves fra bruker, eller om det er en sak mellom arbeidstaker og arbeidsgiver.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse saksbehandler tidligere har gjort.')).toBeInTheDocument();
  });
});
