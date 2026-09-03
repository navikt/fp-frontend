import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SaksbehandlereTabell.stories';

const { Default, TomTabell, MedSaksbehandlerUtenAnsattAvdeling } = composeStories(stories);

describe('SaksbehandlereTabell', () => {
  it('skal vise to saksbehandlere i tabell', async () => {
    await Default.run();

    expect(await screen.findByText('Navn')).toBeInTheDocument();

    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();

    expect(screen.getByText('Brukerident')).toBeInTheDocument();
    expect(screen.getByText('R12122')).toBeInTheDocument();
    expect(screen.getByText('S53343')).toBeInTheDocument();
  });

  it('skal vise tekst som viser at ingen saksbehandlere er lagt til', async () => {
    await TomTabell.run();
    expect(await screen.findByText('Ingen saksbehandlere lagt til')).toBeInTheDocument();
  });

  it('skal fjerne en saksbehandler ved å trykk på fjern-knappen', async () => {
    await Default.run();

    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Slett Espen Utvikler'));

    expect(await screen.findByText('Ønsker du å slette Espen Utvikler?')).toBeInTheDocument();
  });

  it('skal sortere saksbehandlere etter ansattAvdeling og navn', async () => {
    await Default.run();

    const sortedNames = ['Hildegunn', 'Espen Utvikler', 'Steffen'];

    const rows = await screen.findAllByRole('row');

    for (const [index, row] of rows.slice(1).entries()) {
      expect(row).toHaveTextContent(sortedNames[index]!);
    }
  });

  it('skal sortere saksbehandlere med ansattAvdeling null sist', async () => {
    await MedSaksbehandlerUtenAnsattAvdeling.run();
    const sortedNames = ['Hildegunn', 'Ukjent saksbehandler (X11111)'];

    const rows = await screen.findAllByRole('row');

    for (const [index, row] of rows.slice(1).entries()) {
      expect(row).toHaveTextContent(sortedNames[index]!);
    }
  });
});
