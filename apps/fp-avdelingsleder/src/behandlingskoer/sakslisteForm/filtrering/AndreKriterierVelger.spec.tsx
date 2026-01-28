import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './AndreKriterierVelger.stories';

const { Default } = composeStories(stories);

describe('AndreKriterierVelger', () => {
  it('skal vise checkboxer for arbeid inntekt der Til beslutter er valgt fra før', async () => {
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
  });
});
