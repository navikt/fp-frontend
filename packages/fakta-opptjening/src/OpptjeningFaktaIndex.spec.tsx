import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './OpptjeningFaktaIndex.stories';

const {
  MedAksjonspunkt,
} = composeStories(stories);

describe('<OpptjeningFaktaIndex>', () => {
  it('skal åpne aktivitet automatisk når det har åpent aksjonspunkt og så godkjenne det', async () => {
    const lagre = jest.fn(() => Promise.resolve());
    const utils = render(<MedAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Vurder om aktiviteten kan godkjennes')).toBeInTheDocument();
    expect(screen.getByText('Skjæringstidspunkt for opptjening')).toBeInTheDocument();
    expect(screen.getByText('25.10.2019')).toBeInTheDocument();
    expect(screen.getByText('25.12.2018')).toBeInTheDocument();
    expect(screen.getByText('24.10.2019')).toBeInTheDocument();

    expect(screen.getByText('Detaljer for valgt aktivitet')).toBeInTheDocument();
    // expect(screen.getByText('Næring')).toHaveLength(2);

    expect(screen.getByText('Oppdater')).toBeDisabled();
    expect(screen.getByText('Avbryt')).not.toBeDisabled();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.click(screen.getAllByRole('radio')[0]);

    const begrunnelseInput = utils.getByLabelText('Begrunn endringene');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.queryByText('Bekreft og fortsett')).not.toBeDisabled());
    expect(screen.queryByText('Detaljer for valgt aktivitet')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5051',
      opptjeningsaktiviteter: [{
        arbeidsforholdRef: undefined,
        arbeidsgiverReferanse: '1',
        begrunnelse: 'Dette er en begrunnelse',
        erGodkjent: true,
      }],
    });
  });
});
