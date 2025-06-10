import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './ReservasjonerTabell.stories';

const { ViseAtIngenReservasjonerBleFunnet, VisTabellMedReservasjoner } = composeStories(stories);

describe('ReservasjonerTabell', () => {
  mswTest('skal vise tekst som viser at ingen reservasjoner er lagt til', async ({ setHandlers }) => {
    setHandlers(ViseAtIngenReservasjonerBleFunnet.parameters['msw']);
    render(<ViseAtIngenReservasjonerBleFunnet />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findByText('Ingen reservasjoner funnet')).toBeInTheDocument();
  });

  mswTest('skal vise to reservasjoner i tabell', async ({ setHandlers }) => {
    setHandlers(VisTabellMedReservasjoner.parameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findByText('Eirik Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
  });
});
