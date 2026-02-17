import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './ReservasjonerTabell.stories';

const { ViseAtIngenReservasjonerBleFunnet, VisTabellMedReservasjoner } = composeStories(stories);

describe('ReservasjonerTabell', () => {
  it('skal vise tekst som viser at ingen reservasjoner er lagt til', async () => {
    applyRequestHandlers(ViseAtIngenReservasjonerBleFunnet.parameters['msw'] as MswParameters['msw']);
    render(<ViseAtIngenReservasjonerBleFunnet />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findByText('Ingen reservasjoner funnet')).toBeInTheDocument();
  });

  it('skal vise alle reservasjoner i tabell', async () => {
    applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw'] as MswParameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findAllByText('Espen Utvikler')).toHaveLength(6);
    expect(await screen.findAllByText('Espen Tester')).toHaveLength(6);
    expect(await screen.findAllByText('Eirik Utvikler')).toHaveLength(6);
    expect(await screen.findAllByText('Jens-Otto Techer')).toHaveLength(6);
    expect(await screen.findAllByText('Tor På Spore')).toHaveLength(6);
    expect(await screen.findAllByText('Siri Utvikler')).toHaveLength(5);
    expect(await screen.findAllByText('Steffen Heffen')).toHaveLength(5);
  });

  it('skal filtrere reservasjoner ved søk på Espen - skal vise flere innslag fra samme person', async () => {
    const user = userEvent.setup();
    applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw'] as MswParameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', { name: /Søk etter saksbehandler på navn/i });
    await user.type(searchInput, 'Esp');

    expect(await screen.findAllByText('Espen Utvikler')).toHaveLength(6);
    expect(await screen.findAllByText('Espen Tester')).toHaveLength(6);
    expect(screen.queryByText('Eirik Utvikler')).not.toBeInTheDocument();
    expect(screen.queryByText('Jens-Otto Techer')).not.toBeInTheDocument();
  });
});
