import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FodselVilkarProsessIndex.stories';

const { ÅpentAksjonspunkt, OppfyltVilkår, AvslåttVilkår } = composeStories(stories);

describe('FodselVilkarProsessIndex', () => {
  it('skal bestemme at vilkåret er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();
    expect(screen.getByText('§§Dette er en lovreferanse')).toBeInTheDocument();
    expect(screen.getByText('Tidligere utbetalte foreldrepenger eller engangsstønad')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Er utbetalt for et annet barn, vilkåret er oppfylt'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5031',
    });
  });

  it('skal bestemme at vilkåret ikke er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText(/ikke/));

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), '1031');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagskode: '1031',
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: false,
      kode: '5031',
    });
  });

  it('skal vise at vilkår er oppfylt', async () => {
    render(<OppfyltVilkår />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.getByText('Er utbetalt for et annet barn, vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText(/ikke/)).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er godkjent')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at vilkår er avslått', async () => {
    render(<AvslåttVilkår />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText(/ikke/)).toBeInTheDocument();
    expect(screen.queryByText('Er utbetalt for et annet barn, vilkåret er oppfylt')).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
