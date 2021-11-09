import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './BesteberegningFaktaIndex.stories';

const {
  BesteberegningMedDagpengerOgArbeid,
  BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt,
} = composeStories(stories);

describe('<BesteberegningFaktaIndex>', () => {
  it('skal se at tabell renderes med korrekt antall måneder og at passende navn vises for aktivitetene', async () => {
    render(<BesteberegningMedDagpengerOgArbeid />);
    expect(await screen.findByText('Beregning etter §14-7, 1. ledd gir beste beregning.')).toBeInTheDocument();
    expect(screen.getByText('Inntektsgrunnlag for besteberegning')).toBeInTheDocument();
    expect(screen.queryByText('Beregning etter §14-7, 3. ledd gir beste beregning.')).not.toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
    expect(screen.queryByText('Vurdering')).not.toBeInTheDocument();

    expect(screen.getAllByText('Dagpenger')).toHaveLength(9);
    expect(screen.getAllByText('BEDRIFT AS (910909088)')).toHaveLength(3);
    expect(screen.getByText('Jan Bertheussen Johansen (03.03.1943)')).toBeInTheDocument();

    expect(screen.getByText('Januar - 2020')).toBeInTheDocument();
    expect(screen.getByText('Februar - 2020')).toBeInTheDocument();
    expect(screen.getByText('Mars - 2020')).toBeInTheDocument();
    expect(screen.getByText('April - 2020')).toBeInTheDocument();
    expect(screen.getByText('Mai - 2020')).toBeInTheDocument();
    expect(screen.getByText('Juni - 2020')).toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for vurder besteberegning', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<BesteberegningMedDagpengerOgArbeidÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(await screen.findByText('Bekreft og fortsett')).toBeDisabled();

    expect(screen.getByText('Saken er riktig beregnet, fortsett behandlingen')).toBeEnabled();
    expect(screen.getByText('Saken er ikke riktig beregnet, sett saken på vent')).toBeEnabled();
    userEvent.click(screen.getAllByRole('radio')[0]);
    userEvent.type(utils.getByLabelText('Vurdering'), 'Min begrunnelse for vurdering av besteberegning');

    expect(screen.getByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5048',
      begrunnelse: 'Min begrunnelse for vurdering av besteberegning',
      besteberegningErKorrekt: true,
    });
  });
});
