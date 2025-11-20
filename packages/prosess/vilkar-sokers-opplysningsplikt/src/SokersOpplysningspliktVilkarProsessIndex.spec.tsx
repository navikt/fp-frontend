import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import * as stories from './SokersOpplysningspliktVilkarProsessIndex.stories';

const { UtførtAPMedOppfyltVilkår, UtførtAPMedAvslåttVilkår, KanOverstyreVilkår } = composeStories(stories);

describe('SokersOpplysningspliktVilkarProsessIndex', () => {
  it('skal vise at vilkår er oppfylt', async () => {
    render(<UtførtAPMedOppfyltVilkår />);

    expect(await screen.findByText('Søkers opplysningsplikt')).toBeInTheDocument();
    expect(screen.getAllByText('Vilkåret er oppfylt')).toHaveLength(2);
    expect(screen.queryByText(/ikke/)).not.toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at vilkår er avslått', async () => {
    render(<UtførtAPMedAvslåttVilkår />);

    expect(await screen.findByText('Søkers opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal overstyre at vilkåret er avslått', async () => {
    const lagre = vi.fn();

    render(<KanOverstyreVilkår submitCallback={lagre} />);

    expect(await screen.findByText('Søkers opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Dokumenter som mangler')).toBeInTheDocument();
    expect(screen.getByText('Fødselsattest')).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding fra arbeidsgiver1 (1234)...1234')).toBeInTheDocument();

    const vurderingInput = screen.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByRole('radio', { name: /ikke/ }));
    await userEvent.selectOptions(screen.getByLabelText('Avslagsårsak'), '1019');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagskode: '1019',
      begrunnelse: 'Dette er en begrunnelse',
      erVilkarOk: false,
      kode: '6002',
    });
  });
});
