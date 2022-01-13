import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './AdopsjonVilkarProsessIndex.stories';

const {
  ÅpentAksjonspunkt, OppfyltVilkår, AvslåttVilkår,
} = composeStories(stories);

describe('<AdopsjonVilkarProsessIndex>', () => {
  it('skal bestemme at vilkåret er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Adopsjon')).toBeInTheDocument();
    expect(screen.getByText('§§Dette er en lovreferanse')).toBeInTheDocument();
    expect(screen.getByText('Tidligere utbetalte foreldrepenger eller engangsstønad')).toBeInTheDocument();

    userEvent.click(screen.getByText('Er utbetalt for et annet barn, vilkåret er oppfylt'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5031',
    });
  });

  it('skal bestemme at vilkåret ikke er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Adopsjon')).toBeInTheDocument();

    userEvent.click(screen.getByText(/ikke/));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), '1006');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagDato: undefined,
      avslagskode: '1006',
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: false,
      kode: '5031',
    });
  });

  it('skal vise at vilkår er oppfylt', async () => {
    render(<OppfyltVilkår />);

    expect(await screen.findByText('Adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.getByText('Er utbetalt for et annet barn, vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText(/ikke/)).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er godkjent')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at vilkår er avslått', async () => {
    render(<AvslåttVilkår />);

    expect(await screen.findByText('Adopsjon')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText(/ikke/)).toBeInTheDocument();
    expect(screen.queryByText('Er utbetalt for et annet barn, vilkåret er oppfylt')).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
