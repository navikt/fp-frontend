import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './BehandlingMenuIndex.stories';

const { ValgNårBehandlingErValgt, ValgNårBehandlingIkkeErValgt } = composeStories(stories);

describe('BehandlingMenuIndex', () => {
  it('skal vise alle menyhandlinger når behandling er valgt', async () => {
    await ValgNårBehandlingErValgt.run();

    expect(await screen.findByText('Sett behandlingen på vent')).toBeInTheDocument();
    expect(screen.getByText('Henlegg behandlingen og avslutt')).toBeInTheDocument();
    expect(screen.getByText('Endre behandlende enhet')).toBeInTheDocument();
    expect(screen.getByText('Åpne behandling for endringer')).toBeInTheDocument();
    expect(screen.getByText('Opprett ny behandling')).toBeInTheDocument();
    expect(screen.getByText('Endre saksmerking')).toBeInTheDocument();
    expect(screen.getByText('Opprett verge/fullmektig')).toBeInTheDocument();
  });

  it('skal vise kun to valg når behandling ikke er valgt', async () => {
    await ValgNårBehandlingIkkeErValgt.run();

    expect(await screen.findByText('Opprett ny behandling')).toBeInTheDocument();
    expect(screen.getByText('Endre saksmerking')).toBeInTheDocument();

    expect(screen.queryByText('Sett behandlingen på vent')).not.toBeInTheDocument();
    expect(screen.queryByText('Henlegg behandlingen og avslutt')).not.toBeInTheDocument();
    expect(screen.queryByText('Endre behandlende enhet')).not.toBeInTheDocument();
    expect(screen.queryByText('Åpne behandling for endringer')).not.toBeInTheDocument();
    expect(screen.queryByText('Opprett verge/fullmektig')).not.toBeInTheDocument();
  });

  it('skal kunne navigere i menyvalg med piltaster', async () => {
    await ValgNårBehandlingErValgt.run();

    await userEvent.click(await screen.findByRole('button', { name: 'Behandlingsmeny' }));

    const førsteMenyvalg = screen.getByRole('button', { name: 'Sett behandlingen på vent' });
    const andreMenyvalg = screen.getByRole('button', { name: 'Henlegg behandlingen og avslutt' });

    førsteMenyvalg.focus();
    await userEvent.keyboard('{ArrowDown}');

    expect(andreMenyvalg).toHaveFocus();
  });
});
