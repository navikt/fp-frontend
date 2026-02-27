import { composeStories } from '@storybook/react';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './AndreKriterierVelger.stories';

const { Default, MedFpOgFørstegang, MedEngangsstønad } = composeStories(stories);

describe('AndreKriterierVelger', () => {
  it('skal vise pluss/minus-knapper for Arbeid og inntekt der det er inkludert fra før', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Arbeid og inntekt')).toBeInTheDocument();

    const container = screen.getByTestId('av-og-pa-knapper-ARBEID_INNTEKT');
    const plusButton = within(container).getByRole('button', { name: 'pluss' });
    const minusButton = within(container).getByRole('button', { name: 'minus' });
    expect(plusButton).toHaveAttribute('data-variant', 'primary');
    expect(minusButton).toHaveAttribute('data-variant', 'secondary');
  });

  it('skal velge Registrer papirsøknad og fjerne dette fra køen', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Registrer papirsøknad')).toBeInTheDocument();

    const container = screen.getByTestId('av-og-pa-knapper-PAPIRSOKNAD');
    const plusButton = within(container).getByRole('button', { name: 'pluss' });
    const minusButton = within(container).getByRole('button', { name: 'minus' });
    expect(plusButton).toHaveAttribute('data-variant', 'secondary');
    expect(minusButton).toHaveAttribute('data-variant', 'secondary');
    await userEvent.click(plusButton);

    expect(plusButton).toHaveAttribute('data-variant', 'primary');
    expect(minusButton).toHaveAttribute('data-variant', 'secondary');

    await userEvent.click(minusButton);
    expect(plusButton).toHaveAttribute('data-variant', 'secondary');
    expect(minusButton).toHaveAttribute('data-variant', 'primary');
    expect(minusButton).toHaveAttribute('data-color', 'danger');
  });

  it('skal vise Bare far har rett og skjule Klage på tilbakebetaling når FP og Førstegangsbehandling er valgt', async () => {
    applyRequestHandlers(MedFpOgFørstegang.parameters['msw'] as MswParameters['msw']);
    render(<MedFpOgFørstegang />);

    expect(await screen.findByText('Bare far har rett')).toBeInTheDocument();
    expect(screen.queryByText('Klage på tilbakebetaling')).not.toBeInTheDocument();
  });

  it('skal skjule Bare far har rett i UI når Engangsstønad er valgt', async () => {
    // Merk: testen verifiserer kun at kriteriet skjules i UI.
    // Opprydding av BARE_FAR_RETT fra andreKriterie i formstate (via setValue i useEffect)
    // dekkes ikke her, da composeStories ikke eksponerer formstate utad.
    applyRequestHandlers(MedEngangsstønad.parameters['msw'] as MswParameters['msw']);
    render(<MedEngangsstønad />);

    await waitFor(() => {
      expect(screen.queryByText('Bare far har rett')).not.toBeInTheDocument();
    });

    expect(screen.queryByTestId('av-og-pa-knapper-BARE_FAR_RETT')).not.toBeInTheDocument();
  });

  it('skal vise alle kriterier uten filter når ingen stønadstype eller behandlingstype er valgt', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Bare far har rett')).toBeInTheDocument();
    expect(screen.getByText('Klage på tilbakebetaling')).toBeInTheDocument();
  });
});
