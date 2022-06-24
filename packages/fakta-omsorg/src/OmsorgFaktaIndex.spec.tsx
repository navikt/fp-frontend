import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './OmsorgFaktaIndex.stories';

const {
  ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg,
} = composeStories(stories);

describe('<OmsorgFaktaIndex>', () => {
  it('skal velge at søker har omsorg for barnet', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om omsorg')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker har omsorg for barnet i søknadsperioden')).toBeInTheDocument();

    expect(screen.getByText('Barn 1')).toBeInTheDocument();
    expect(screen.getByText('Tutta Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Født')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018')).toBeInTheDocument();
    expect(screen.getByText('Død')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();

    expect(screen.getByText('Søker')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();

    expect(screen.getByText('Annen forelder')).toBeInTheDocument();
    expect(screen.getByText('Petra Utvikler')).toBeInTheDocument();

    expect(screen.getAllByText('Samboer')).toHaveLength(2);

    expect(screen.getAllByText('Adresse')).toHaveLength(3);
    expect(screen.getAllByText('Veigata 1')).toHaveLength(3);
    expect(screen.getAllByText('Oddelandet')).toHaveLength(3);
    expect(screen.getAllByText('Leilighet 2')).toHaveLength(3);
    expect(screen.getAllByText('0123 Bobygda, Norge')).toHaveLength(3);

    expect(screen.queryByText('Barn 2')).not.toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    expect(screen.getByText('Søker har oppgitt å ha omsorg for barnet')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Søker har omsorg for barnet')[0]);

    userEvent.paste(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5061',
      begrunnelse: 'Dette er en begrunnelse',
      ikkeOmsorgPerioder: [{
        periodeFom: undefined,
        periodeTom: undefined,
      }],
      omsorg: true,
    });
  });

  it('skal velge at søker ikke har omsorg for barnet', async () => {
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Fakta om omsorg')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker har omsorg for barnet i søknadsperioden')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    expect(screen.getByText('Søker har oppgitt å ha omsorg for barnet')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Søker har omsorg for barnet')[1]);

    userEvent.paste(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    const periodeFra = screen.getByText('Fra og med dato');
    userEvent.type(periodeFra, '01.02.2020');
    fireEvent.blur(periodeFra);

    const periodeTil = screen.getByText('Til og med dato');
    userEvent.type(periodeTil, '01.03.2020');
    fireEvent.blur(periodeTil);

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5061',
      begrunnelse: 'Dette er en begrunnelse',
      ikkeOmsorgPerioder: [{
        periodeFom: '2020-02-01',
        periodeTom: '2020-03-01',
      }],
      omsorg: false,
    });
  });
});
