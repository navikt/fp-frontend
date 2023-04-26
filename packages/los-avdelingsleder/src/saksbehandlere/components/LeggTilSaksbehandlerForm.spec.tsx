import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './LeggTilSaksbehandlerForm.stories';

const { Default, SaksbehandlerFinnesIkke } = composeStories(stories);

describe('<LeggTilSaksbehandlerForm>', () => {
  it('skal vise at oppgitt brukerident ikke finnes', async () => {
    const utils = render(<SaksbehandlerFinnesIkke />);

    expect(await screen.findByText('Legg til saksbehandler')).toBeInTheDocument();

    const brukerIdentInput = utils.getByLabelText('Brukerident');
    await userEvent.type(brukerIdentInput, 'TESTIDENT');

    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Kan ikke finne brukerident')).toBeInTheDocument();
    expect(screen.getByText('Legg til i listen').closest('button')).toBeDisabled();
  });

  it('skal finne brukerident og så legge saksbehandler til listen', async () => {
    const hentAvdelingensSaksbehandlere = vi.fn();
    const utils = render(<Default hentAvdelingensSaksbehandlere={hentAvdelingensSaksbehandlere} />);

    expect(await screen.findByText('Legg til saksbehandler')).toBeInTheDocument();

    const brukerIdentInput = utils.getByLabelText('Brukerident');
    await userEvent.type(brukerIdentInput, 'TESTIDENT');

    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Espen Utvikler, NAV Viken')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Legg til i listen')).toBeEnabled());

    await userEvent.click(screen.getByText('Legg til i listen'));

    await waitFor(() => expect(hentAvdelingensSaksbehandlere).toHaveBeenCalledTimes(1));
    expect(hentAvdelingensSaksbehandlere).toHaveBeenNthCalledWith(1, { avdelingEnhet: 'NAV Viken' });
  });
});
