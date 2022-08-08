import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './AktivitetskravFaktaIndex.stories';

const { AksjonspunktMedToUavklartePerioder, AksjonspunktSomErBekreftetOgBehandlingAvsluttet } = composeStories(stories);

describe('<AktivitetskravFaktaIndex>', () => {
  it.skip('skal avklare to perioder og så bekrefte aksjonspunkt', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<AksjonspunktMedToUavklartePerioder submitCallback={lagre} />);

    expect(await screen.findByText('Kontroller kravet til mors aktivitet')).toBeInTheDocument();
    expect(screen.getAllByText('08.01.2021 - 13.01.2021')).toHaveLength(2);
    expect(screen.getByText('Oppdater')).toBeDisabled();
    expect(screen.getByText('Bekreft og fortsett')).toBeDisabled();

    await userEvent.click(screen.getByText('Aktiviteten er ikke dokumentert'));

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findAllByText('15.01.2021 - 20.01.2021')).toHaveLength(2);

    await userEvent.click(screen.getByText('Mor er ikke i aktivitet'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse på andre periode');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      avklartePerioder: [{
        avklaring: 'I_AKTIVITET',
        begrunnelse: 'Dette er en test',
        endret: false,
        fom: '2021-01-01',
        morsAktivitet: 'INNLAGT',
        tom: '2021-01-07',
      }, {
        avklaring: 'IKKE_I_AKTIVITET_IKKE_DOKUMENTERT',
        begrunnelse: 'Dette er en begrunnelse',
        endret: false,
        fom: '2021-01-08',
        morsAktivitet: 'ARBEID_OG_UTDANNING',
        tom: '2021-01-13',
      },
      {
        avklaring: 'IKKE_I_AKTIVITET_DOKUMENTERT',
        begrunnelse: 'Dette er en begrunnelse på andre periode',
        endret: false,
        fom: '2021-01-15',
        morsAktivitet: 'ARBEID_OG_UTDANNING',
        tom: '2021-01-20',
      }],
      kode: '5099',
    });
  });

  it('skal vise bekreftede perioder i tabell og så åpne en av de', async () => {
    render(<AksjonspunktSomErBekreftetOgBehandlingAvsluttet />);

    expect(await screen.findByText('Perioder med aktivitetskrav')).toBeInTheDocument();
    expect(screen.queryByText('Kontroller kravet til mors aktivitet')).not.toBeInTheDocument();
    expect(screen.getByText('01.01.2021 - 07.01.2021')).toBeInTheDocument();
    expect(screen.getByText('Er innlagt på institusjon')).toBeInTheDocument();
    expect(screen.getByText('Mor er i aktivitet')).toBeInTheDocument();
    expect(screen.queryByText('Detaljer')).not.toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('row', { hidden: true })[1]);

    expect(await screen.findByText('Detaljer')).toBeInTheDocument();
    expect(screen.getByText('Oppdater')).toBeDisabled();
  });
});
