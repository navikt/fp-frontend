import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './BehandlingMenuIndex.stories';

const { ValgNårBehandlingErValgt, ValgNårBehandlingIkkeErValgt } = composeStories(stories);

describe('BehandlingMenuIndex', () => {
  it('skal vise alle menyhandlinger når behandling er valgt', async () => {
    await applyRequestHandlers(ValgNårBehandlingErValgt.parameters.msw);
    render(<ValgNårBehandlingErValgt />);

    expect(await screen.findByText('Sett behandlingen på vent')).toBeInTheDocument();
    expect(screen.getByText('Henlegg behandlingen og avslutt')).toBeInTheDocument();
    expect(screen.getByText('Endre behandlende enhet')).toBeInTheDocument();
    expect(screen.getByText('Åpne behandling for endringer')).toBeInTheDocument();
    expect(screen.getByText('Opprett ny behandling')).toBeInTheDocument();
    expect(screen.getByText('Endre saksmerking')).toBeInTheDocument();
    expect(screen.getByText('Opprett verge/fullmektig')).toBeInTheDocument();
  });

  it('skal vise kun to valg når behandling ikke er valgt', async () => {
    await applyRequestHandlers(ValgNårBehandlingIkkeErValgt.parameters.msw);
    render(<ValgNårBehandlingIkkeErValgt />);

    expect(await screen.findByText('Opprett ny behandling')).toBeInTheDocument();
    expect(screen.getByText('Endre saksmerking')).toBeInTheDocument();

    expect(screen.queryByText('Sett behandlingen på vent')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlegg behandlingen og avslutt')).not.toBeInTheDocument();
    expect(screen.queryByText('Endre behandlende enhet')).not.toBeInTheDocument();
    expect(screen.queryByText('Åpne behandling for endringer')).not.toBeInTheDocument();
    expect(screen.queryByText('Opprett verge/fullmektig')).not.toBeInTheDocument();
  });
});
