import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './BesteberegningFaktaIndex.stories';

const {
  BesteberegningMedDagpengerOgArbeid,
  BesteberegningMedAvvik,
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
    expect(screen.getAllByText('BEDRIFT AS (974652269)')).toHaveLength(3);
    expect(screen.getByText('Testy Test (03.03.1943)')).toBeInTheDocument();

    expect(screen.getByText('Januar - 2020')).toBeInTheDocument();
    expect(screen.getByText('Februar - 2020')).toBeInTheDocument();
    expect(screen.getByText('Mars - 2020')).toBeInTheDocument();
    expect(screen.getByText('April - 2020')).toBeInTheDocument();
    expect(screen.getByText('Mai - 2020')).toBeInTheDocument();
    expect(screen.getByText('Juni - 2020')).toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt for vurder besteberegning', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<BesteberegningMedAvvik submitCallback={lagre} />);

    expect(await screen.findByText('Bekreft og fortsett')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();
    expect(screen.getByText('Saken er tatt ut til kontroll på grunn av stort avvik mellom 3. og 1. ledd.'
      + ' Vennligst kontroller beregningen')).toBeInTheDocument();

    expect(screen.getByText('Beregningen er riktig, fortsett behandlingen.')).toBeEnabled();
    userEvent.click(screen.getByRole('checkbox'));
    userEvent.paste(utils.getByLabelText('Vurdering'), 'Min begrunnelse for vurdering av besteberegning');

    expect(screen.getByText('Bekreft og fortsett')).toBeEnabled();
    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5062',
      begrunnelse: 'Min begrunnelse for vurdering av besteberegning',
      besteberegningErKorrekt: true,
    });
  });
});
