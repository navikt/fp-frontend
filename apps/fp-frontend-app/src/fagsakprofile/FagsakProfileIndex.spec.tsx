import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './FagsakProfileIndex.stories';

const { BehandlingErValgt, BehandlingErIkkeValgt } = composeStories(stories);

describe('FagsakProfileIndex', () => {
  mswTest('skal vise en behandling i liste når behandling er valgt', async ({ setHandlers }) => {
    setHandlers(BehandlingErValgt.parameters['msw']);
    render(<BehandlingErValgt />);

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsmeny')).toBeInTheDocument();
    expect(screen.getByText('Venter på mulige faresignaler')).toBeInTheDocument();
    expect(screen.getByText('Finn søker andre steder')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.queryByText('Revurdering')).not.toBeInTheDocument();
  });

  mswTest('skal vise alle behandlinger i liste når ingen behandling er valgt', async ({ setHandlers }) => {
    setHandlers(BehandlingErIkkeValgt.parameters['msw']);
    render(<BehandlingErIkkeValgt />);

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();
  });
});
