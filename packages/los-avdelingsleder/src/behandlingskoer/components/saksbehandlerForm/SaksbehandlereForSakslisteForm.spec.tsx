import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './SaksbehandlereForSakslisteForm.stories';

const { IngenSaksbehandlere, ToSaksbehandlere } = composeStories(stories);

describe('<SaksbehandlereForSakslisteForm>', () => {
  it('skal vise tekst som viser at ingen saksbehandlere er tilknyttet', async () => {
    render(<IngenSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Avdelingen har ingen saksbehandlere tilknyttet')).toBeInTheDocument();
  });

  it('skal vise to saksbehandlere i listen', async () => {
    render(<ToSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();
  });

  it('skal lagre og hente listen med saksbehandlere på nytt når en velger en av saksbehandlerene', async () => {
    const hentAvdelingensSakslister = jest.fn();

    render(<ToSaksbehandlere hentAvdelingensSakslister={hentAvdelingensSakslister} />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();

    expect(screen.getAllByRole('checkbox')).toHaveLength(2);
    expect(screen.getAllByRole('checkbox')[0]).not.toBeChecked();
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();

    await userEvent.click(screen.getAllByRole('checkbox')[0]);

    await waitFor(() => expect(hentAvdelingensSakslister).toHaveBeenCalledTimes(1));
    expect(hentAvdelingensSakslister).toHaveBeenNthCalledWith(1, { avdelingEnhet: 'NAV Viken' });

    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });
});
