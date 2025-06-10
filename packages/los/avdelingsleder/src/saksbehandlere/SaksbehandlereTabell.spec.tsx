import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './SaksbehandlereTabell.stories';

const { Default, TomTabell, MedSaksbehandlerUtenAnsattAvdeling } = composeStories(stories);

describe('SaksbehandlereTabell', () => {
  mswTest('skal vise to saksbehandlere i tabell', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Navn')).toBeInTheDocument();

    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();

    expect(screen.getByText('Brukerident')).toBeInTheDocument();
    expect(screen.getByText('R12122')).toBeInTheDocument();
    expect(screen.getByText('S53343')).toBeInTheDocument();
  });

  it('skal vise tekst som viser at ingen saksbehandlere er lagt til', async () => {
    render(<TomTabell />);
    expect(await screen.findByText('Ingen saksbehandlere lagt til')).toBeInTheDocument();
  });

  mswTest('skal fjerne en saksbehandler ved å trykk på fjern-knappen', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);

    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('img')[1]);

    expect(await screen.findByText('Ønsker du å slette Espen Utvikler?')).toBeInTheDocument();
  });

  mswTest('skal sortere saksbehandlere etter ansattAvdeling og navn', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);

    const sortedNames = ['Hildegunn', 'Espen Utvikler', 'Steffen'];

    const rows = await screen.findAllByRole('row');

    rows.slice(1).forEach((row, index) => {
      expect(row).toHaveTextContent(sortedNames[index]);
    });
  });

  mswTest('skal sortere saksbehandlere med ansattAvdeling null sist', async ({ setHandlers }) => {
    setHandlers(MedSaksbehandlerUtenAnsattAvdeling.parameters['msw']);
    render(<MedSaksbehandlerUtenAnsattAvdeling />);
    const sortedNames = ['Hildegunn', 'Ukjent saksbehandler (X11111)'];

    const rows = await screen.findAllByRole('row');

    rows.slice(1).forEach((row, index) => {
      expect(row).toHaveTextContent(sortedNames[index]);
    });
  });
});
