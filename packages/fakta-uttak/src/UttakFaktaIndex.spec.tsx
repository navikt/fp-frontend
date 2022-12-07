import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './UttakFaktaIndex.stories';

const {
  VisUttaksperiodeUtenAksjonspunkt,
  VisUttaksperiodeUtenAksjonspunktKanOverstyre,
} = composeStories(stories);

describe('<UttakFaktaIndex>', () => {
  it('skal vise tabellrader som ikke kan ekspanderes når det ikke er aksjonspunkt', async () => {
    render(<VisUttaksperiodeUtenAksjonspunkt />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(await screen.queryByAltText('Åpne rad')).not.toBeInTheDocument();
    expect(await screen.queryByAltText('Overstyr')).not.toBeInTheDocument();
  });

  it('skal kunne overstyre når det ikke er aksjonspunkter og en er overstyrer', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<VisUttaksperiodeUtenAksjonspunktKanOverstyre submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(await screen.queryByAltText('Åpne rad')).not.toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Overstyr'));

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();

    expect(await screen.getByAltText('Åpne rad')).toBeInTheDocument();

    await userEvent.click(screen.queryByAltText('Åpne rad'));

    await userEvent.type(utils.getByLabelText('Samtidig uttaksprosent'), '10');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      kode: '6065',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [{
        fom: '2022-11-12',
        tom: '2022-12-01',
        originalFom: '2022-11-12',
        periodeKilde: 'SAKSBEHANDLER',
        samtidigUttaksprosent: '10',
        uttakPeriodeType: 'MØDREKVOTE',
        arbeidsforhold: undefined,
        arbeidstidsprosent: undefined,
        flerbarnsdager: false,
        morsAktivitet: undefined,
      }],
    }]);
  });
});
