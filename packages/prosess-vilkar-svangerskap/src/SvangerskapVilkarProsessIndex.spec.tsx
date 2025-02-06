import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SvangerskapVilkarProsessIndex.stories';

const { ÅpentAksjonspunktSkalKunneInnvilge, ÅpentAksjonspunktSkalIkkeKunneInnvilge, OppfyltVilkår, AvslåttVilkår } =
  composeStories(stories);

describe('<SvangerskapVilkarProsessIndex>', () => {
  it('skal bestemme at vilkåret ikke er oppfylt fordi en ikke har perioder som kan innvilges', async () => {
    const lagre = vi.fn();

    const utils = render(<ÅpentAksjonspunktSkalIkkeKunneInnvilge submitCallback={lagre} />);

    expect(await screen.findByText('Svangerskap')).toBeInTheDocument();
    expect(screen.getByText('Rett til svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByText('Det finnes ingen perioder med svangerskapspenger som kan innvilges')).toBeInTheDocument();

    await userEvent.click(screen.getByText(/Mor har ikke rett til svangerskapspenger, vilkåret er/));

    await userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), '1065');

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagskode: '1065',
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: false,
      kode: '5092',
    });
  });

  it('skal kunne bestemme at vilkåret er oppfylt når en har perioder som kan innvilges', async () => {
    const lagre = vi.fn();

    const utils = render(<ÅpentAksjonspunktSkalKunneInnvilge submitCallback={lagre} />);

    expect(await screen.findByText('Svangerskap')).toBeInTheDocument();
    expect(screen.getByText('Rett til svangerskapspenger')).toBeInTheDocument();
    expect(
      screen.queryByText('Det finnes ingen perioder med svangerskapspenger som kan innvilges'),
    ).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Mor har rett til svangerskapspenger, vilkåret er oppfylt'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    await userEvent.type(vurderingInput, 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      erVilkarOk: true,
      begrunnelse: 'Dette er en vurdering',
      kode: '5092',
    });
  });

  it('skal vise at vilkår er oppfylt', async () => {
    render(<OppfyltVilkår />);

    expect(await screen.findByText('Svangerskap')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.getByText('Rett til svangerskapspenger')).toBeInTheDocument();
    expect(screen.queryByText(/ikke/)).not.toBeInTheDocument();
    expect(screen.getByText('Det finnes ingen perioder med svangerskapspenger som kan innvilges')).toBeInTheDocument();
    expect(screen.getByText('Mor har rett til svangerskapspenger, vilkåret er oppfylt')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise at vilkår er avslått', async () => {
    render(<AvslåttVilkår />);

    expect(await screen.findByText('Svangerskap')).toBeInTheDocument();
    expect(screen.getByText('Vilkåret er avslått')).toBeInTheDocument();
    expect(screen.getByText('Rett til svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByText('Det finnes ingen perioder med svangerskapspenger som kan innvilges')).toBeInTheDocument();
    expect(screen.getByText(/Mor har ikke rett til svangerskapspenger, vilkåret er/)).toBeInTheDocument();
    expect(screen.getByText('Dette vilkåret er avslått')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
