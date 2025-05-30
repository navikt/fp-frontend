import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SoknadsfristVilkarProsessIndex.stories';

const { ÅpentAksjonspunkt, OppfyltVilkår, AvslåttVilkår } = composeStories(stories);

describe('SoknadsfristVilkarProsessIndex', () => {
  it('skal bestemme at vilkåret er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Søknadsfrist')).toBeInTheDocument();
    expect(screen.getByText(/Søknaden ble mottatt/)).toBeInTheDocument();
    expect(screen.getByText(/2 dager/)).toBeInTheDocument();
    expect(screen.getByText(/etter søknadsfristen/)).toBeInTheDocument();
    expect(screen.getByText(/30.12.2018/)).toBeInTheDocument();
    expect(screen.getByText('Vurder følgende')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019')).toBeInTheDocument();
    expect(screen.getByText('02.01.2019')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Vilkåret er oppfylt')[0]);

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5007',
    });
  });

  it('skal vise at vilkår er oppfylt', async () => {
    render(<OppfyltVilkår />);

    expect(await screen.findByText('Søknadsfrist')).toBeInTheDocument();
    expect(screen.getByLabelText('Vilkåret er oppfylt')).toBeChecked();
    expect(screen.getByLabelText('Vilkåret er ikke oppfylt')).not.toBeChecked();
    expect(screen.getByText('Dette vilkåret er godkjent')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at vilkår er avslått', async () => {
    render(<AvslåttVilkår />);

    expect(await screen.findByText('Søknadsfrist')).toBeInTheDocument();
    expect(screen.getAllByText(/ikke/)).toHaveLength(2);
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
