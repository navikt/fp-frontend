import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './OpptjeningFaktaIndex.stories';

const { MedAksjonspunkt, UtenAksjonspunkt } = composeStories(stories);

describe('<OpptjeningFaktaIndex>', () => {
  it('skal åpne aktivitet automatisk når det har åpent aksjonspunkt og så godkjenne det', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    const utils = render(<MedAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Vurder om aktivitetene kan godkjennes')).toBeInTheDocument();
    expect(screen.getByText('Skjæringstidspunkt for opptjening')).toBeInTheDocument();
    expect(screen.getByText('25.10.2019')).toBeInTheDocument();

    expect(screen.getByText('Detaljer for valgt aktivitet')).toBeInTheDocument();
    expect(screen.getByText('(8 mndr. 14 dager)')).toBeInTheDocument();
    expect(screen.getAllByText('Næring')).toHaveLength(2);

    expect(screen.getByText('Oppdater').closest('button')).toBeDisabled();
    expect(screen.getByText('Avbryt')).toBeEnabled();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'D');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();
    expect(screen.getByText('Du må skrive minst 3 tegn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('radio')[0]);

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    await userEvent.clear(utils.getByLabelText('Begrunn endringene'));
    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await waitFor(() => expect(screen.queryByText('Du må skrive minst 3 tegn')).not.toBeInTheDocument());

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findAllByText('Sykepenger')).toHaveLength(2);

    await userEvent.click(screen.getAllByRole('radio')[1]);
    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse 2');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5051',
      opptjeningsaktiviteter: [
        {
          arbeidsforholdRef: undefined,
          arbeidsgiverReferanse: '1',
          aktivitetType: 'NÆRING',
          begrunnelse: 'Dette er en begrunnelse',
          erGodkjent: true,
          opptjeningFom: '2019-02-11',
          opptjeningTom: '2019-10-24',
        },
        {
          arbeidsforholdRef: undefined,
          arbeidsgiverReferanse: '1',
          aktivitetType: 'SYKEPENGER',
          begrunnelse: 'Dette er en begrunnelse 2',
          erGodkjent: false,
          opptjeningFom: '2018-12-11',
          opptjeningTom: '2019-04-24',
        },
      ],
    });
  });

  it('skal bytte og så lukke aktiviteter ved hjelp av pil-ikoner', async () => {
    render(<MedAksjonspunkt />);

    expect(await screen.findByText('Vurder om aktivitetene kan godkjennes')).toBeInTheDocument();

    expect(screen.getByText('Detaljer for valgt aktivitet')).toBeInTheDocument();
    expect(screen.getAllByText('Næring')).toHaveLength(2);

    await userEvent.click(screen.getByText('Forrige'));

    expect(await screen.findByText('Arbeidsavklaringspenger')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Neste'));

    expect(await screen.findAllByText('Næring')).toHaveLength(2);

    await userEvent.click(screen.getByTitle('Lukk periode'));

    expect(await screen.findByText('Næring')).toBeInTheDocument();
  });

  it('skal ikke vise aksjonspunkt-tekst og knapper når det ikke finnes aksjonspunkt', async () => {
    render(<UtenAksjonspunkt />);

    expect(await screen.findByText('Skjæringstidspunkt for opptjening')).toBeInTheDocument();
    expect(screen.getByText('Arbeid')).toBeInTheDocument();
    expect(screen.getByText('Dagpenger')).toBeInTheDocument();

    expect(screen.queryByText('Oppdater')).not.toBeInTheDocument();
    expect(screen.queryByText('Avbryt')).not.toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
