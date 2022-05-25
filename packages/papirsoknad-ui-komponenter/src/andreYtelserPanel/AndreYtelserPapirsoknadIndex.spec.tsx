import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './AndreYtelserPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<AndreYtelserPapirsoknadIndex>', () => {
  it('skal velge vergetype og bekrefte aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Andre inntektskilder')).toBeInTheDocument();

    userEvent.click(screen.getByText('Ventelønn eller vartpenger'));

    expect(await screen.findByText('F.o.m.')).toBeInTheDocument();

    const fomInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomInput, '14.09.2022');
    fireEvent.blur(fomInput);

    const tomInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomInput, '13.09.2022');
    fireEvent.blur(tomInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Dato må være før eller lik 01.05.2022')).toBeInTheDocument();
    expect(screen.getByText('Dato må være etter eller lik 03.05.2022')).toBeInTheDocument();

    userEvent.paste(tomInput, '15.09.2022');
    fireEvent.blur(tomInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      fnr: undefined,
      gyldigFom: '2022-09-14',
      gyldigTom: '2022-09-24',
      kode: '5030',
      navn: 'Espen Utvikler',
      organisasjonsnummer: '2322323233',
      vergeType: 'ADVOKAT',
    });
  });
});
