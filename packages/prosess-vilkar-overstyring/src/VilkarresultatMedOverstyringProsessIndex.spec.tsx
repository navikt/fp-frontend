import React from 'react';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './VilkarresultatMedOverstyringProsessIndex.stories';

const {
  OverstyringspanelForFødsel, OverstyringspanelForMedlemskap, OverstyrtAksjonspunktSomErBekreftet,
} = composeStories(stories);

describe('<VilkarresultatMedOverstyringProsessIndex>', () => {
  it('skal overstyre og fylle ut fødselsvilkåret ikke er oppfylt og så lagre', async () => {
    const lagre = jest.fn();

    const utils = render(<OverstyringspanelForFødsel submitCallback={lagre} />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText('Manuell overstyring av automatisk vurdering')).not.toBeInTheDocument();

    userEvent.click(screen.getAllByRole('img')[1]);

    expect(await screen.findByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.queryByText('Avslagsårsak')).not.toBeInTheDocument();

    userEvent.click(screen.getByText(/ikke/));

    expect(await screen.findByText('Avslagsårsak')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), 'AVSLAG_TEST_1');

    const vurderingInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft overstyring'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagDato: undefined,
      avslagskode: 'AVSLAG_TEST_1',
      begrunnelse: 'Dette er en begrunnelse',
      erVilkarOk: false,
      kode: '6003',
    });
  });

  it('skal overstyre og så avbryte', async () => {
    render(<OverstyringspanelForFødsel />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();

    userEvent.click(screen.getAllByRole('img')[1]);

    expect(await screen.findByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();

    userEvent.click(screen.getByText('Avbryt'));

    expect(await screen.getAllByRole('img')).toHaveLength(2);
  });

  it('skal overstyre og fylle ut medlemskapsvilkåret ikke er oppfylt og så lagre', async () => {
    const lagre = jest.fn();

    const utils = render(<OverstyringspanelForMedlemskap submitCallback={lagre} />);

    expect(await screen.findByText('Medlemskap')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText('Manuell overstyring av automatisk vurdering')).not.toBeInTheDocument();

    userEvent.click(screen.getAllByRole('img')[1]);

    expect(await screen.findByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.queryByText('Avslagsårsak')).not.toBeInTheDocument();

    userEvent.click(screen.getByText(/ikke/));

    expect(await screen.findByText('Avslagsårsak')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), 'AVSLAG_TEST_1');

    const opphørDatoInput = utils.getByLabelText('Dato for opphør av medlemskapet');
    userEvent.type(opphørDatoInput, '20.12.2021');
    fireEvent.blur(opphørDatoInput);

    const vurderingInput = utils.getByLabelText('Begrunnelse');
    userEvent.type(vurderingInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Bekreft overstyring'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagDato: '2021-12-20',
      avslagskode: 'AVSLAG_TEST_1',
      begrunnelse: 'Dette er en begrunnelse',
      erVilkarOk: false,
      kode: '6005',
    });
  });

  it('skal overstyre et vilkår på nytt etter at det allerede er overstyrt og bekreftet', async () => {
    render(<OverstyrtAksjonspunktSomErBekreftet />);

    expect(await screen.findByText('Fødsel')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText('Manuell overstyring av automatisk vurdering')).toBeInTheDocument();
    expect(screen.getByText('Dette er en avslagsårsak')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
  });
});
