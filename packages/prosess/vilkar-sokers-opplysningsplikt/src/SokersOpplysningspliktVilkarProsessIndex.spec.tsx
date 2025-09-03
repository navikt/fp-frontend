import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SokersOpplysningspliktVilkarProsessIndex.stories';

const { ÅpentAksjonspunkt, OppfyltVilkår, AvslåttVilkår } = composeStories(stories);

describe('SokersOpplysningspliktVilkarProsessIndex', () => {
  it('skal bestemme at vilkåret er oppfylt og så løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Søkers opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Manglende dokumentasjon')).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding')).toBeInTheDocument();
    expect(screen.getByText('Arbeidsgiver1 (1234)')).toBeInTheDocument();

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getAllByText(/Vilkåret er oppfylt/)[0]);

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5017',
      inntektsmeldingerSomIkkeKommer: [
        {
          aktørId: undefined,
          brukerHarSagtAtIkkeKommer: false,
          organisasjonsnummer: '1234',
        },
      ],
    });
  });

  it('skal vise at vilkår er oppfylt', async () => {
    render(<OppfyltVilkår />);

    expect(await screen.findByText('Søkers opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText(/ikke/)).not.toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er godkjent')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at vilkår er avslått', async () => {
    render(<AvslåttVilkår />);

    expect(await screen.findByText('Søkers opplysningsplikt')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
