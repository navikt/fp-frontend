import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './SaksbehandlereTabell.stories';

const { Default, TomTabell } = composeStories(stories);

describe('<SaksbehandlereTabell>', () => {
  it('skal vise to saksbehandlere i tabell', async () => {
    render(<Default />);
    expect(await screen.findByText('Tilgjengelige saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();

    expect(screen.getByText('Brukerident')).toBeInTheDocument();
    expect(screen.getByText('R12122')).toBeInTheDocument();
    expect(screen.getByText('S53343')).toBeInTheDocument();

    expect(screen.getByText('Avdeling')).toBeInTheDocument();
    expect(screen.getByText('NAV Viken')).toBeInTheDocument();
    expect(screen.getByText('NAV Oslo')).toBeInTheDocument();
  });

  it('skal vise tekst som viser at ingen saksbehandlere er lagt til', async () => {
    render(<TomTabell />);
    expect(await screen.findByText('Ingen saksbehandlere lagt til')).toBeInTheDocument();
  });

  it('skal fjerne en saksbehandler ved å trykk på fjern-knappen', async () => {
    const hentAvdelingensSaksbehandlere = jest.fn();
    render(<Default hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} />);
    expect(await screen.findByText('Tilgjengelige saksbehandlere')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('img')[0]);

    expect(await screen.findByText('Ønsker du å slette Espen Utvikler?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await waitFor(() => expect(hentAvdelingensSaksbehandlere).toHaveBeenCalledTimes(1));
    expect(hentAvdelingensSaksbehandlere).toHaveBeenNthCalledWith(1, { avdelingEnhet: 'NAV Viken' });
  });
});
