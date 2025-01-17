import React from 'react';

import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './UtvalgskriterierForSakslisteForm.stories';

const { MedGittNavn, MedDefaultNavn } = composeStories(stories);

describe('<UtvalgskriterierForSakslisteForm>', () => {
  it('skal vise sakslistenavn som saksbehandler har skrive inn', async () => {
    await applyRequestHandlers(MedGittNavn.parameters.msw);
    render(<MedGittNavn />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(await screen.findByLabelText('Navn')).toHaveValue('liste');
  });

  it('skal vise default sakslistenavn', async () => {
    await applyRequestHandlers(MedDefaultNavn.parameters.msw);
    render(<MedDefaultNavn />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(await screen.findByLabelText('Navn')).toHaveValue('Ny behandlingskø');
  });

  it('skal vise feilmelding når en fjerner nok tegn til at navnet blir færre enn 3 tegn langt', async () => {
    await applyRequestHandlers(MedGittNavn.parameters.msw);
    const { getByLabelText } = render(<MedGittNavn />);

    expect(await screen.findByText('Navn')).toBeInTheDocument();

    const navnInput = getByLabelText('Navn');
    await userEvent.type(navnInput, '{Backspace}{Backspace}{Backspace}');
    await fireEvent.blur(navnInput);

    expect(await screen.findByText('Du må skrive minst 3 tegn')).toBeInTheDocument();
  });
});
