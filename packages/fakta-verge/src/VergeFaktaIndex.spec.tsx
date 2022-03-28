import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './VergeFaktaIndex.stories';

const { Default } = composeStories(stories);

describe('<VergeFaktaIndex>', () => {
  it('skal velge vergetype og bekrefte aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Fyll ut og kontroller vergeopplysninger')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.selectOptions(utils.getByLabelText('Type verge'), 'ADVOKAT');

    const navnInput = utils.getByLabelText('Navn');
    userEvent.paste(navnInput, 'Espen Utvikler');

    const organisasjonsnummerInput = utils.getByLabelText('Organisasjonsnummer');
    userEvent.paste(organisasjonsnummerInput, '2322323233');

    const fomInput = utils.getByLabelText('Periode f.o.m.');
    userEvent.paste(fomInput, '14.09.2022');
    fireEvent.blur(fomInput);

    const tomInput = utils.getByLabelText('Periode t.o.m.');
    userEvent.paste(tomInput, '24.09.2022');
    fireEvent.blur(tomInput);

    const begrunnelseInput = utils.getByLabelText('Begrunn endringene');
    userEvent.paste(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

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
