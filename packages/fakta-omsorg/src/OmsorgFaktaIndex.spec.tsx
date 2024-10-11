import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './OmsorgFaktaIndex.stories';

const { ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg } = composeStories(stories);

describe('<OmsorgFaktaIndex>', () => {
  it('skal velge at søker har omsorg for barnet', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Vurder om søker har omsorg for barnet i søknadsperioden')).toBeInTheDocument();

    expect(screen.getByText('Barnet, Tutta Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Søker, Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Den andre forelderen, Petra Utvikler')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Søker har oppgitt å ha omsorg for barnet')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Søker har omsorg for barnet')[0]);

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5061',
      begrunnelse: 'Dette er en begrunnelse',
      omsorg: true,
    });
  });

  it('skal velge at søker ikke har omsorg for barnet', async () => {
    const lagreVurdering = vi.fn(() => Promise.resolve());

    const utils = render(<ÅpentAksjonspunktForKontrollAvOmBrukerHarOmsorg submitCallback={lagreVurdering} />);

    expect(await screen.findByText('Vurder om søker har omsorg for barnet i søknadsperioden')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('Søker har oppgitt å ha omsorg for barnet')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Søker har omsorg for barnet')[1]);

    await userEvent.type(utils.getByLabelText('Vurdering'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      kode: '5061',
      begrunnelse: 'Dette er en begrunnelse',
      omsorg: false,
    });
  });
});
