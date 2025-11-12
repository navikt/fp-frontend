import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SoknadsfristVilkarProsessIndex.stories';

const { ÅpentAksjonspunkt, OppfyltVilkår, AvslåttVilkår } = composeStories(stories);

describe('SoknadsfristVilkarProsessIndex', () => {
  it('skal bestemme at vilkåret er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(screen.getByText(/Søknaden ble mottatt 2 dager etter søknadsfristen/)).toBeInTheDocument();
    expect(screen.getByText(/30.12.2018/)).toBeInTheDocument();
    expect(screen.getByText('Vurder følgende')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('02.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Vilkåret er oppfylt')[0]!);

    const vurderingInput = screen.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5007',
    });
  });

  it('skal vise at vilkår er oppfylt', () => {
    render(<OppfyltVilkår />);

    expect(screen.getByText('Er søknadsfristvilkåret oppfylt?')).toBeInTheDocument();
    expect(screen.getAllByText('Vilkåret er oppfylt')).toHaveLength(2);
    expect(screen.getByText('Dette vilkåret er godkjent')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at vilkår er avslått', () => {
    render(<AvslåttVilkår />);

    expect(screen.getByText('Er søknadsfristvilkåret oppfylt?')).toBeInTheDocument();
    expect(screen.getByText(/ikke/)).toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
