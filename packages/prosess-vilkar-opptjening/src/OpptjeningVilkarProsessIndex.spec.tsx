import React from 'react';
import crypto from 'crypto';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './OpptjeningVilkarProsessIndex.stories';

const {
  ÅpentAksjonspunkt, HarIkkeAksjonspunkt,
} = composeStories(stories);

Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: (arr) => crypto.randomBytes(arr.length),
  },
});

describe('<OpptjeningVilkarProsessIndex>', () => {
  it('skal løse aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Opptjening')).toBeInTheDocument();
    expect(screen.getByText('Opptjent rett til foreldrepenger')).toBeInTheDocument();

    expect(screen.getByText('2 måneder og 3 dager aktivitet i opptjeningsperioden')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018 - 01.10.2018')).toBeInTheDocument();

    userEvent.click(screen.getByText('Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.paste(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      erVilkarOk: true,
      kode: '5089',
    });
  });

  it('skal ikke ha aksjonspunkt men vise aktiviteter i opptjeningsperioden', async () => {
    render(<HarIkkeAksjonspunkt />);

    expect(await screen.findByText('2 måneder og 3 dager aktivitet i opptjeningsperioden')).toBeInTheDocument();
    expect(screen.getByText('01.01.2018 - 01.10.2018')).toBeInTheDocument();

    expect(screen.queryByText('Opptjent rett til foreldrepenger')).not.toBeInTheDocument();
    expect(screen.queryByText('Søker har oppfylt krav om 6 mnd opptjening, vilkåret er oppfylt.')).not.toBeInTheDocument();
    expect(screen.queryByText('Vurdering')).not.toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
