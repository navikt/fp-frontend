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

    expect(await screen.findByText('Fakta om omsorg')).toBeInTheDocument();
    expect(screen.getByText('Vurder om søker har omsorg for barnet i søknadsperioden')).toBeInTheDocument();

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
