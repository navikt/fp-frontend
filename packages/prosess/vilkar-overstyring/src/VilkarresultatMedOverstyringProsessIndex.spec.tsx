import { composeStories } from '@storybook/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './VilkarresultatMedOverstyringProsessIndex.stories';

const { OverstyringspanelForFødsel, OverstyringspanelForMedlemskap, OverstyrtAksjonspunktSomErBekreftet } =
  composeStories(stories);

describe('VilkarresultatMedOverstyringProsessIndex', () => {
  it('skal overstyre og fylle ut fødselsvilkåret ikke er oppfylt og så lagre', async () => {
    const lagre = vi.fn();

    render(<OverstyringspanelForFødsel submitCallback={lagre} />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText('Manuell overstyring av automatisk vurdering')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.queryByText('Avslagsårsak')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText(/ikke/));

    expect(await screen.findByText('Avslagsårsak')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Avslagsårsak'), 'Søker er far');

    const vurderingInput = screen.getByLabelText('Begrunnelse');
    await userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft overstyring'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagskode: '1003',
      begrunnelse: 'Dette er en begrunnelse',
      erVilkårOk: false,
      kode: '6003',
    });
  });

  it('skal overstyre og så avbryte', async () => {
    render(<OverstyringspanelForFødsel />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Avbryt'));

    expect(screen.getAllByRole('button')).toHaveLength(1);
  });

  it('skal overstyre og fylle ut medlemskapsvilkåret ikke er oppfylt og så lagre', async () => {
    const lagre = vi.fn();

    render(<OverstyringspanelForMedlemskap submitCallback={lagre} />);

    expect(await screen.findByText('Medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText('Manuell overstyring av automatisk vurdering')).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(await screen.findByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.getByText('Er medlemskapsvilkåret oppfylt?')).toBeInTheDocument();

    expect(screen.queryByText('Avslagsårsak')).not.toBeInTheDocument();
    expect(screen.queryByText('Opphørsdato')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Delvis oppfylt'));

    expect(screen.getByText('Avslagsårsak')).toBeInTheDocument();
    expect(screen.getByText('Opphørsdato')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Avslagsårsak'), 'Søker er utflyttet');

    const opphørDatoInput = screen.getByLabelText('Opphørsdato');
    await userEvent.type(opphørDatoInput, '20.12.2021');
    fireEvent.blur(opphørDatoInput);

    const vurderingInput = screen.getByLabelText('Begrunnelse');
    await userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft overstyring'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      opphørFom: '2021-12-20',
      avslagskode: '1021',
      begrunnelse: 'Dette er en begrunnelse',
      kode: '6005',
    });
  });

  it('skal overstyre et vilkår på nytt etter at det allerede er overstyrt og bekreftet', async () => {
    render(<OverstyrtAksjonspunktSomErBekreftet />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.getByText('Søker er medmor')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });
});
