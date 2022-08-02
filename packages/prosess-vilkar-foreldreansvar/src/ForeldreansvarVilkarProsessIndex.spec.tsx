import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './ForeldreansvarVilkarProsessIndex.stories';

const {
  ÅpentAksjonspunkt2Ledd, ÅpentAksjonspunkt4Ledd, OppfyltVilkår2Ledd, OppfyltVilkår4Ledd, AvslåttVilkår2Ledd, AvslåttVilkår4Ledd,
} = composeStories(stories);

describe('<ForeldreansvarVilkarProsessIndex>', () => {
  it('skal bestemme at 2-ledd er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt2Ledd submitCallback={lagre} />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();
    expect(screen.getByText('Rett til stønad ved overtakelse av foreldreansvaret')).toBeInTheDocument();

    userEvent.click(screen.getByText('Far har rett til foreldrepenger, vilkåret er oppfylt'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5013',
    }]);
  });

  it('skal bestemme at 2-ledd ikke er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt2Ledd submitCallback={lagre} />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();

    userEvent.click(screen.getByText(/Far har ikke rett til foreldrepenger, vilkåret er/));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), '1015');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      avslagDato: undefined,
      avslagskode: '1015',
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: false,
      kode: '5013',
    }]);
  });

  it('skal bestemme at 4-ledd er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt4Ledd submitCallback={lagre} />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();
    expect(screen.getByText('Rett til stønad ved overtakelse av foreldreansvaret')).toBeInTheDocument();

    userEvent.click(screen.getByText('Far har rett til foreldrepenger, vilkåret er oppfylt'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5014',
    }]);
  });

  it('skal bestemme at 4-ledd ikke er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt4Ledd submitCallback={lagre} />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();

    userEvent.click(screen.getByText(/Far har ikke rett til foreldrepenger, vilkåret er/));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), '1034');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      avslagDato: undefined,
      avslagskode: '1034',
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: false,
      kode: '5014',
    }]);
  });

  it('skal vise at 2-ledd vilkår er oppfylt', async () => {
    render(<OppfyltVilkår2Ledd />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.getByText('Far har rett til foreldrepenger, vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText(/ikke/)).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er godkjent')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at 4-ledd vilkår er oppfylt', async () => {
    render(<OppfyltVilkår4Ledd />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.getByText('Far har rett til foreldrepenger, vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText(/ikke/)).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er godkjent')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at 2-ledd vilkår er avslått', async () => {
    render(<AvslåttVilkår2Ledd />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText(/Far har ikke rett til foreldrepenger, vilkåret er/)).toBeInTheDocument();
    expect(screen.queryByText('Far har rett til foreldrepenger, vilkåret er oppfylt')).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at 4-ledd vilkår er avslått', async () => {
    render(<AvslåttVilkår4Ledd />);

    expect(await screen.findByText('Foreldreansvaret')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText(/Far har ikke rett til foreldrepenger, vilkåret er/)).toBeInTheDocument();
    expect(screen.queryByText('Far har rett til foreldrepenger, vilkåret er oppfylt')).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
