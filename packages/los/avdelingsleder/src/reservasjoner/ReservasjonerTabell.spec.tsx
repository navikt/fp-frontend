import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './ReservasjonerTabell.stories';

const { ViseAtIngenReservasjonerBleFunnet, VisTabellMedReservasjoner } = composeStories(stories);

describe('<ReservasjonerTabell>', () => {
  it('skal vise tekst som viser at ingen reservasjoner er lagt til', async () => {
    await applyRequestHandlers(ViseAtIngenReservasjonerBleFunnet.parameters['msw']);
    render(<ViseAtIngenReservasjonerBleFunnet />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findByText('Ingen reservasjoner funnet')).toBeInTheDocument();
  });

  it('skal vise to reservasjoner i tabell', async () => {
    await applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findByText('Eirik Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
  });
});
