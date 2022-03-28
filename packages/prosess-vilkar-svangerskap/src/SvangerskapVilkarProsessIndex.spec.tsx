import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './SvangerskapVilkarProsessIndex.stories';

const {
  ÅpentAksjonspunktSkalKunneInnvilge, ÅpentAksjonspunktSkalIkkeKunneInnvilge, OppfyltVilkår, AvslåttVilkår,
} = composeStories(stories);

describe('<SvangerskapVilkarProsessIndex>', () => {
  it('skal bestemme at vilkåret ikke er oppfylt fordi en ikke har perioder som kan innvilges', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunktSkalIkkeKunneInnvilge submitCallback={lagre} />);

    expect(await screen.findByText('Svangerskap')).toBeInTheDocument();
    expect(screen.getByText('Rett til svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByText('Det finnes ingen perioder med svangerskapspenger som kan innvilges')).toBeInTheDocument();

    userEvent.click(screen.getByText(/Mor har ikke rett til svangerskapspenger, vilkåret er/));

    userEvent.selectOptions(utils.getByLabelText('Avslagsårsak'), '1065');

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.paste(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avslagDato: undefined,
      avslagskode: '1065',
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: false,
      kode: '5092',
    });
  });

  it('skal kunne bestemme at vilkåret er oppfylt når en har perioder som kan innvilges', async () => {
    const lagre = jest.fn();

    render(<ÅpentAksjonspunktSkalKunneInnvilge submitCallback={lagre} />);

    expect(await screen.findByText('Svangerskap')).toBeInTheDocument();
    expect(screen.getByText('Rett til svangerskapspenger')).toBeInTheDocument();
    expect(screen.queryByText('Det finnes ingen perioder med svangerskapspenger som kan innvilges')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Mor har rett til svangerskapspenger, vilkåret er oppfylt'));

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: '',
      erVilkarOk: true,
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
