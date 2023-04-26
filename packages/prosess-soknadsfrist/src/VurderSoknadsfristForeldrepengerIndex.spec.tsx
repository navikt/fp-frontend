import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './VurderSoknadsfristForeldrepengerIndex.stories';

const { PanelForSoknadsfrist } = composeStories(stories);

describe('<VurderSoknadsfristForeldrepengerIndex>', () => {
  it('skal velge ingen grunn og så løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    const utils = render(<PanelForSoknadsfrist submitCallback={lagre} />);

    expect(await screen.findByText('Søknadsfrist')).toBeInTheDocument();
    expect(screen.getByText('Søknad ble mottatt 2 dager etter søknadsfrist (01.10.2019)')).toBeInTheDocument();
    expect(screen.getByText('Søknad mottatt dato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Søknadsperiode')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 10.01.2019')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Ingen gyldig grunn for sen fremsetting av søknaden'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      ansesMottattDato: '2019-01-01',
      begrunnelse: 'Dette er en vurdering',
      harGyldigGrunn: false,
      kode: '5043',
    });
  });

  it('skal velge gyldig grunn og så løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    const utils = render(<PanelForSoknadsfrist submitCallback={lagre} />);

    expect(await screen.findByText('Søknadsfrist')).toBeInTheDocument();
    expect(screen.getByText('Søknad ble mottatt 2 dager etter søknadsfrist (01.10.2019)')).toBeInTheDocument();
    expect(screen.getByText('Søknad mottatt dato')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Søknadsperiode')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 10.01.2019')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Gyldig grunn for sen fremsetting av søknaden'));

    const datoMottattFelt = screen.getByText('Dato for når søknaden kan anses som mottatt');
    await userEvent.type(datoMottattFelt, '{backspace}{backspace}20');
    fireEvent.blur(datoMottattFelt);

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      ansesMottattDato: '2020-01-01',
      begrunnelse: 'Dette er en vurdering',
      harGyldigGrunn: true,
      kode: '5043',
    });
  });
});
