import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import type { BehandlingType } from '@navikt/fp-types';

import * as stories from './NøkkeltallbokserPanel.stories';

const { Default } = composeStories(stories);

describe('NøkkeltallbokserPanel', () => {
  it('skal vise nøkkeltallbokser', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Status')).toBeInTheDocument();

    const førstegangsbehandlingBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-002' satisfies BehandlingType}`));
    expect(førstegangsbehandlingBoks.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(førstegangsbehandlingBoks.getByText('10')).toBeInTheDocument();
    expect(førstegangsbehandlingBoks.getByText('0 til beslutter')).toBeInTheDocument();

    const revurderingBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-004' satisfies BehandlingType}`));
    expect(revurderingBoks.getByText('Revurdering')).toBeInTheDocument();
    expect(revurderingBoks.getByText('18')).toBeInTheDocument();
    expect(revurderingBoks.getByText('4 til beslutter')).toBeInTheDocument();

    const KlageBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-003' satisfies BehandlingType}`));
    expect(KlageBoks.getByText('Klage')).toBeInTheDocument();
    expect(KlageBoks.getByText('4')).toBeInTheDocument();
    expect(KlageBoks.getByText('0 til beslutter')).toBeInTheDocument();

    const TilbakebetalingBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-007' satisfies BehandlingType}`));
    expect(TilbakebetalingBoks.getByText('Tilbakebetaling')).toBeInTheDocument();
    expect(TilbakebetalingBoks.getByText('6')).toBeInTheDocument();
    expect(TilbakebetalingBoks.getByText('6 til beslutter')).toBeInTheDocument();

    const øvrigeBoks = within(screen.getByTestId('nokkeltallboks-resten'));
    expect(øvrigeBoks.getByText('Øvrige')).toBeInTheDocument();
    expect(øvrigeBoks.getByText('0')).toBeInTheDocument();
    expect(øvrigeBoks.getByText('0 til beslutter')).toBeInTheDocument();
  });

  it('skal velge bort foreldrepenger i filter', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Status')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Foreldrepenger'));

    const førstegangsbehandlingBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-002' satisfies BehandlingType}`));
    expect(førstegangsbehandlingBoks.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(førstegangsbehandlingBoks.getByText('0')).toBeInTheDocument();
    expect(førstegangsbehandlingBoks.getByText('0 til beslutter')).toBeInTheDocument();

    const revurderingBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-004' satisfies BehandlingType}`));
    expect(revurderingBoks.getByText('Revurdering')).toBeInTheDocument();
    expect(revurderingBoks.getByText('18')).toBeInTheDocument();
    expect(revurderingBoks.getByText('4 til beslutter')).toBeInTheDocument();

    const KlageBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-003' satisfies BehandlingType}`));
    expect(KlageBoks.getByText('Klage')).toBeInTheDocument();
    expect(KlageBoks.getByText('4')).toBeInTheDocument();
    expect(KlageBoks.getByText('0 til beslutter')).toBeInTheDocument();

    const TilbakebetalingBoks = within(screen.getByTestId(`nokkeltallboks-${'BT-007' satisfies BehandlingType}`));
    expect(TilbakebetalingBoks.getByText('Tilbakebetaling')).toBeInTheDocument();
    expect(TilbakebetalingBoks.getByText('0')).toBeInTheDocument();
    expect(TilbakebetalingBoks.getByText('0 til beslutter')).toBeInTheDocument();

    const øvrigeBoks = within(screen.getByTestId('nokkeltallboks-resten'));
    expect(øvrigeBoks.getByText('Øvrige')).toBeInTheDocument();
    expect(øvrigeBoks.getByText('0')).toBeInTheDocument();
    expect(øvrigeBoks.getByText('0 til beslutter')).toBeInTheDocument();
  });
});
