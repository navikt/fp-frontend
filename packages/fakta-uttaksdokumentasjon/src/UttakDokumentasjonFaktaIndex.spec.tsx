import React from 'react';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './UttakDokumentasjonFaktaIndex.stories';

const {
  AksjonspunktMedUavklartePerioder, AksjonspunktSomErBekreftetOgBehandlingAvsluttet, AksjonspunktErBekreftetMenBehandlingErÅpen,
} = composeStories(stories);

describe('<UttakDokumentasjonFaktaIndex>', () => {
  it('skal avklare perioder og så bekrefte aksjonspunkt', async () => {
    const lagre = jest.fn(() => Promise.resolve());

    const utils = render(<AksjonspunktMedUavklartePerioder submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttaksdokumentasjon')).toBeInTheDocument();
    expect(screen.getByText('Kontroller årsak')).toBeInTheDocument();
    expect(screen.getByText('01.11.2022 - 07.11.2022')).toBeInTheDocument();
    expect(screen.getByText('Oppdater').closest('button')).toBeDisabled();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('Godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Godkjent')).not.toBeChecked();

    expect(screen.getByText('08.11.2022 - 13.11.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ikke godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Ikke godkjent')).not.toBeChecked();

    expect(screen.getByText('15.11.2022 - 20.11.2022')).toBeInTheDocument();
    await userEvent.click(screen.getAllByText('Godkjent')[1]);
    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Ikke godkjent')).not.toBeChecked();

    console.log(screen.debug(undefined, 30000));

    expect(await screen.findByText('Mangler dokumentasjon')).toBeInTheDocument();

    expect(screen.getByText('08.12.2022 - 13.12.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Mangler dokumentasjon'));
    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

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

  it('skal vise bekreftet periode i tabell når behandling er avsluttet', async () => {
    render(<AksjonspunktSomErBekreftetOgBehandlingAvsluttet />);

    expect(await screen.findByText('Fakta om uttaksdokumentasjon')).toBeInTheDocument();
    expect(screen.queryByText('Kontroller årsak')).not.toBeInTheDocument();
    expect(screen.getByText('Godkjent')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise bekreftet periode i tabell og så endre den', async () => {
    render(<AksjonspunktErBekreftetMenBehandlingErÅpen />);

    expect(await screen.findByText('Fakta om uttaksdokumentasjon')).toBeInTheDocument();
    expect(screen.queryByText('Kontroller årsak')).not.toBeInTheDocument();
    expect(screen.getByText('Godkjent')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });
});
