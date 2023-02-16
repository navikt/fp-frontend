import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './AndreYtelserPapirsoknadIndex.stories';

const { Default, KunMiliterEllerSiviltjeneste } = composeStories(stories);

describe('<AndreYtelserPapirsoknadIndex>', () => {
  it('skal validere at fom-dato er før tom-dato', async () => {
    const lagre = vi.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Andre inntektskilder')).toBeInTheDocument();
    expect(screen.getByText('Etterlønn eller sluttpakke')).toBeInTheDocument();
    expect(screen.getByText('Militær eller siviltjeneste')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ventelønn eller vartpenger'));

    expect(await screen.findByText('F.o.m.')).toBeInTheDocument();

    const fomInput = utils.getByLabelText('F.o.m.');
    await userEvent.type(fomInput, '14.09.2022');
    fireEvent.blur(fomInput);

    const tomInput = utils.getByLabelText('T.o.m.');
    await userEvent.type(tomInput, '13.09.2022');
    fireEvent.blur(tomInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Dato må være før eller lik 13.09.2022')).toBeInTheDocument();
    expect(screen.getByText('Dato må være etter eller lik 14.09.2022')).toBeInTheDocument();

    await userEvent.clear(tomInput);
    await userEvent.type(tomInput, '15.09.2022');
    fireEvent.blur(tomInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      periodeFom: '2022-09-14',
      periodeTom: '2022-09-15',
      ytelseType: 'VENTELØNN_VARTPENGER',
    }]);
  });

  it('skal legge til flere perioder under militær eller siviltjeneste', async () => {
    const lagre = vi.fn();

    const utils = render(<KunMiliterEllerSiviltjeneste submitCallback={lagre} />);

    expect(await screen.findByText('Andre inntektskilder')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Militær eller siviltjeneste'));

    expect(await screen.findByText('F.o.m.')).toBeInTheDocument();

    const fomInput = utils.getByLabelText('F.o.m.');
    await userEvent.type(fomInput, '14.09.2022');
    fireEvent.blur(fomInput);

    const tomInput = utils.getByLabelText('T.o.m.');
    await userEvent.type(tomInput, '15.09.2022');
    fireEvent.blur(tomInput);

    await userEvent.click(screen.getByText('Legg til periode'));

    const datoInputs = await screen.findAllByRole('textbox');
    expect(datoInputs).toHaveLength(4);

    await userEvent.type(datoInputs[2], '10.10.2022');
    fireEvent.blur(datoInputs[2]);

    await userEvent.type(datoInputs[3], '11.10.2022');
    fireEvent.blur(datoInputs[3]);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      periodeFom: '2022-09-14',
      periodeTom: '2022-09-15',
      ytelseType: 'MILITÆR_ELLER_SIVILTJENESTE',
    }, {
      periodeFom: '2022-10-10',
      periodeTom: '2022-10-11',
      ytelseType: 'MILITÆR_ELLER_SIVILTJENESTE',
    }]);
  });
});
