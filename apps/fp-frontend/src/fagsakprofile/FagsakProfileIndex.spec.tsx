import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './FagsakProfileIndex.stories';

const { BehandlingErValgt, BehandlingErIkkeValgt } = composeStories(stories);

describe('FagsakProfileIndex', () => {
  it('skal vise en behandling i liste når behandling er valgt', async () => {
    await BehandlingErValgt.run();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsmeny')).toBeInTheDocument();
    expect(screen.getByText('Venter på mulige faresignaler')).toBeInTheDocument();
    expect(screen.getByText('Finn søker andre steder')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.queryByText('Revurdering')).not.toBeInTheDocument();
  });

  it('skal vise alle behandlinger i liste når ingen behandling er valgt', async () => {
    await BehandlingErIkkeValgt.run();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();
  });
});
