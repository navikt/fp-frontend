import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './LeggTilSaksbehandlerForm.stories';

const { Default, SaksbehandlerFinnesIkke } = composeStories(stories);

describe('LeggTilSaksbehandlerForm', () => {
  mswTest('skal vise at oppgitt brukerident ikke finnes', async ({ setHandlers }) => {
    setHandlers(SaksbehandlerFinnesIkke.parameters['msw']);
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

  mswTest('skal finne brukerident og så legge saksbehandler til listen', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    const utils = render(<Default />);

    expect(await screen.findByText('Legg til saksbehandler')).toBeInTheDocument();

    const brukerIdentInput = utils.getByLabelText('Brukerident');
    await userEvent.type(brukerIdentInput, 'TESTIDENT');

    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Legg til i listen')).toBeEnabled());
  });
});
