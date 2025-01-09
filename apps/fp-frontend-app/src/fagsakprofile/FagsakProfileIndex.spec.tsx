import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './FagsakProfileIndex.stories';

const { BehandlingErValgt, BehandlingErIkkeValgt } = composeStories(stories);

describe('FagsakProfileIndex', () => {
  it('skal vise en behandling i liste når behandling er valgt', async () => {
    await applyRequestHandlers(BehandlingErValgt.parameters.msw);
    render(<BehandlingErValgt />);

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsmeny')).toBeInTheDocument();
    expect(screen.getByText('Venter på mulige faresignaler')).toBeInTheDocument();
    expect(screen.getByText('Finn søker andre steder')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.queryByText('Revurdering')).not.toBeInTheDocument();
  });

  it('skal vise alle behandlinger i liste når ingen behandling er valgt', async () => {
    await applyRequestHandlers(BehandlingErIkkeValgt.parameters.msw);
    render(<BehandlingErIkkeValgt />);

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();
  });
});
