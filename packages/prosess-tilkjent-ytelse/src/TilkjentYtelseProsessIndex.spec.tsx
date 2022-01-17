import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './TilkjentYtelseProsessIndex.stories';

const { UtenAksjonspunkt, ÅpentAksjonspunkt } = composeStories(stories);

describe('<TilkjentYtelseProsessIndex>', () => {
  it('skal se på tilkjent ytelse uten aksjonspunkt', async () => {
    render(<UtenAksjonspunkt />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();

    userEvent.click(screen.getByAltText('Åpne info om første periode'));

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getByText('01.01.2019 - 10.01.2019')).toBeInTheDocument();
    expect(screen.getByText('1000')).toBeInTheDocument();
    expect(screen.getByText('Fellesperiode')).toBeInTheDocument();
    expect(screen.getByText('Nei')).toBeInTheDocument();
  });

  it('skal bekrefte aksjonspunkt', async () => {
    const lagre = jest.fn();

    const utils = render(<ÅpentAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Tilkjent ytelse')).toBeInTheDocument();
    expect(screen.getByText('Pengene er utbetalt til søker, arbeidsgiver krever nå refusjon fra startdato. '
      + 'Vurder om beløpet som er feilutbetalt skal tilbakekreves fra søker eller om dette er en sak mellom '
      + 'arbeidstaker og arbeidsgiver.')).toBeInTheDocument();

    userEvent.click(screen.getByText('Tilbakekrev fra søker'));

    const vurderingInput = utils.getByLabelText('Vurdering');
    userEvent.type(vurderingInput, 'Dette er en vurdering');

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en vurdering',
      hindreTilbaketrekk: 'false',
      kode: '5090',
    });
  });
});
