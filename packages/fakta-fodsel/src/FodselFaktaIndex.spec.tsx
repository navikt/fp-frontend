import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './FodselFaktaIndex.stories';

const { AksjonspunktTerminbekreftelse } = composeStories(stories);

describe('<FodselFaktaIndex>', () => {
  it('skal avklare to perioder og så bekrefte aksjonspunkt', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<AksjonspunktTerminbekreftelse submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller terminbekreftelse')).toBeInTheDocument();
    expect(screen.getByText('Opplysninger om termin oppgitt i søknaden')).toBeInTheDocument();
    expect(screen.getByText('Utstedt dato')).toBeInTheDocument();
    expect(screen.getByText('Termindato')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();

    expect(screen.getByText('Opplysninger om fødsel fra folkeregisteret')).toBeInTheDocument();
    expect(screen.getByText('Fødselsdato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Antall barn')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Oppdater'));

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      test: '',
    });
  });
});
