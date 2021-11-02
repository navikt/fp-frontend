import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './OpptjeningFaktaIndex.stories';

const {
  MedAksjonspunkt, UtenAksjonspunkt,
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
    expect(screen.getAllByText('Næring')).toHaveLength(2);

    expect(screen.getByText('Oppdater')).toBeDisabled();
    expect(screen.getByText('Avbryt')).toBeEnabled();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    userEvent.click(screen.getAllByRole('radio')[0]);

    const begrunnelseInput = utils.getByLabelText('Begrunn endringene');
    userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Bekreft og fortsett')).toBeEnabled();
    expect(screen.queryByText('Detaljer for valgt aktivitet')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5051',
      opptjeningsaktiviteter: [{
        arbeidsforholdRef: undefined,
        arbeidsgiverReferanse: '1',
        aktivitetType: {
          kode: 'NÆRING',
          kodeverk: '',
        },
        begrunnelse: 'Dette er en begrunnelse',
        erGodkjent: true,
        opptjeningFom: '1995-09-14',
        opptjeningTom: '9999-12-31',
      }],
    });
  });

  it('skal bytte og så lukke aktiviteter ved hjelp av pil-ikoner', async () => {
    render(<MedAksjonspunkt />);

    expect(await screen.findByText('Vurder om aktiviteten kan godkjennes')).toBeInTheDocument();

    expect(screen.getByText('Detaljer for valgt aktivitet')).toBeInTheDocument();
    expect(screen.getAllByText('Næring')).toHaveLength(2);

    userEvent.click(screen.getByAltText('Forrige periode'));

    expect(await screen.findAllByText('Arbeid')).toHaveLength(2);

    userEvent.click(screen.getByAltText('Neste periode'));

    expect(await screen.findAllByText('Næring')).toHaveLength(2);

    userEvent.click(screen.getByAltText('Åpne info om første periode'));

    expect(await screen.findAllByText('Næring')[0]).toBeInTheDocument();
  });

  it('skal ikke vise aksjonspunkt-tekst og knapper når det ikke finnes aksjonspunkt', async () => {
    render(<UtenAksjonspunkt />);

    expect(await screen.findByText('Detaljer for valgt aktivitet')).toBeInTheDocument();
    expect(screen.queryByText('Vurder om aktiviteten kan godkjennes')).not.toBeInTheDocument();
    expect(screen.getAllByText('Arbeid')).toHaveLength(2);

    expect(screen.queryByText('Oppdater')).not.toBeInTheDocument();
    expect(screen.queryByText('Avbryt')).not.toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
