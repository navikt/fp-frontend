import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './SaksbehandlereTabell.stories';

const { Default, TomTabell, MedSaksbehandlerUtenAnsattAvdeling } = composeStories(stories);

describe('<SaksbehandlereTabell>', () => {
  it('skal vise to saksbehandlere i tabell', async () => {
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

  it('skal fjerne en saksbehandler ved å trykk på fjern-knappen', async () => {
    const hentAvdelingensSaksbehandlere = vi.fn();
    render(<Default hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('img')[1]);

    expect(await screen.findByText('Ønsker du å slette Espen Utvikler?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await waitFor(() => expect(hentAvdelingensSaksbehandlere).toHaveBeenCalledTimes(1));
    expect(hentAvdelingensSaksbehandlere).toHaveBeenNthCalledWith(1, { avdelingEnhet: 'Nav Vikafossen' });
  });

  it('skal sortere saksbehandlere etter ansattAvdeling og navn', async () => {
    render(<Default />);

    const sortedNames = ['Hildegunn', 'Espen Utvikler', 'Steffen'];

    const rows = await screen.findAllByRole('row');

    rows.slice(1).forEach((row, index) => {
      expect(row).toHaveTextContent(sortedNames[index]);
    });
  });

  it('skal sortere saksbehandlere med ansattAvdeling null sist', async () => {
    render(<MedSaksbehandlerUtenAnsattAvdeling />);
    const sortedNames = ['Hildegunn', 'Ukjent saksbehandler (X11111)'];

    const rows = await screen.findAllByRole('row');

    rows.slice(1).forEach((row, index) => {
      expect(row).toHaveTextContent(sortedNames[index]);
    });
  });
});
