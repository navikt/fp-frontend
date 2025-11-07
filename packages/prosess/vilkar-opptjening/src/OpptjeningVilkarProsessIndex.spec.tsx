import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './OpptjeningVilkarProsessIndex.stories';

const { ÅpentAksjonspunkt, HarIkkeAksjonspunkt, ÅpentAksjonspunktMenUtenAktiviteter } = composeStories(stories);

describe('OpptjeningVilkarProsessIndex', () => {
  it('skal løse aksjonspunkt', async () => {
    const lagre = vi.fn();

    render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Opptjening')).toBeInTheDocument();
    expect(
      screen.getByLabelText('Er opptjeningsvilkåret på 6 mnd opptjening for foreldrepenger oppfylt?'),
    ).toBeInTheDocument();

    expect(screen.getByText('2 måneder og 3 dager')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018 - 01.10.2018')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Vilkåret er oppfylt.'));

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5089',
    });
  });

  it('skal ikke kunne oppfylle vilkår når det ikke finnes aktiviteter', async () => {
    const lagre = vi.fn();

    render(<ÅpentAksjonspunktMenUtenAktiviteter submitCallback={lagre} />);

    expect(await screen.findByText('Opptjening')).toBeInTheDocument();
    expect(screen.getByText('Det finnes ingen aktiviteter')).toBeInTheDocument();

    expect(
      screen.getByLabelText('Er opptjeningsvilkåret på 6 mnd opptjening for foreldrepenger oppfylt?'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Vilkåret er oppfylt.')).toBeDisabled();
    await userEvent.click(screen.getByLabelText(/ikke/));

    await userEvent.type(screen.getByLabelText('Vurdering'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: false,
      kode: '5089',
      avslagskode: '1035',
    });
  });

  it('skal ikke ha aksjonspunkt men vise aktiviteter i opptjeningsperioden', async () => {
    render(<HarIkkeAksjonspunkt />);

    expect(await screen.findByText('2 måneder og 3 dager')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018 - 01.10.2018')).toBeInTheDocument();

    expect(
      screen.queryByLabelText('Er opptjeningsvilkåret på 6 mnd opptjening for foreldrepenger oppfylt?'),
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Vilkåret er oppfylt.')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Vurdering')).not.toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
