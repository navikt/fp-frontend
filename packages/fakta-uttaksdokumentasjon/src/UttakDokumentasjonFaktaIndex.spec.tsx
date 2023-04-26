import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './UttakDokumentasjonFaktaIndex.stories';

const {
  AksjonspunktMedUavklartePerioder,
  AksjonspunktSomErBekreftetOgBehandlingAvsluttet,
  AksjonspunktErBekreftetMenBehandlingErÅpen,
  UavklartePerioderMenIkkeAksjonspunktEnnå,
} = composeStories(stories);

describe('<UttakDokumentasjonFaktaIndex>', () => {
  it('skal avklare perioder og så bekrefte aksjonspunkt', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<AksjonspunktMedUavklartePerioder submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttaksdokumentasjon')).toBeInTheDocument();
    expect(screen.getByText('Kontroller dokumentasjon')).toBeInTheDocument();
    expect(screen.getByText('01.11.2022 - 07.11.2022')).toBeInTheDocument();
    expect(screen.getByText('Oppdater').closest('button')).toBeDisabled();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByText('Godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.getByText('Oppdater').closest('button')).toBeDisabled());

    expect(screen.getByText('08.11.2022 - 13.11.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Ikke godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.getByText('Oppdater').closest('button')).toBeDisabled());

    expect(screen.getByText('15.11.2022 - 20.11.2022')).toBeInTheDocument();
    await userEvent.click(screen.getAllByText('Godkjent')[1]);
    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.getByText('Oppdater').closest('button')).toBeDisabled());

    expect(await screen.findByText('Mangler dokumentasjon')).toBeInTheDocument();

    expect(screen.getByText('08.12.2022 - 13.12.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Mangler dokumentasjon'));
    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(utils.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5074',
      begrunnelse: 'Dette er en begrunnelse',
      vurderingBehov: [
        {
          fom: '2022-11-01',
          tom: '2022-11-07',
          type: 'UTSETTELSE',
          vurdering: 'GODKJENT',
          årsak: 'INNLEGGELSE_SØKER',
        },
        {
          fom: '2022-11-08',
          tom: '2022-11-13',
          type: 'OVERFØRING',
          vurdering: 'IKKE_GODKJENT',
          årsak: 'SYKDOM_ANNEN_FORELDER',
        },
        {
          fom: '2022-11-15',
          tom: '2022-11-20',
          type: 'UTTAK',
          vurdering: 'GODKJENT',
          årsak: 'TIDLIG_OPPSTART_FAR',
        },
        {
          fom: '2022-12-08',
          tom: '2022-12-13',
          type: 'UTTAK',
          vurdering: 'IKKE_DOKUMENTERT',
          årsak: 'AKTIVITETSKRAV_ARBEID',
        },
      ],
    });
  });

  it('skal vise bekreftet periode i tabell når behandling er avsluttet', async () => {
    render(<AksjonspunktSomErBekreftetOgBehandlingAvsluttet />);

    expect(await screen.findByText('Fakta om uttaksdokumentasjon')).toBeInTheDocument();
    expect(screen.queryByText('Kontroller dokumentasjon')).not.toBeInTheDocument();
    expect(screen.getByText('Godkjent')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise bekreftet periode i tabell og så endre den', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    render(<AksjonspunktErBekreftetMenBehandlingErÅpen submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttaksdokumentasjon')).toBeInTheDocument();
    expect(screen.queryByText('Kontroller dokumentasjon')).not.toBeInTheDocument();
    expect(screen.getByText('Godkjent')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByAltText('Åpne rad'));

    expect(await screen.findByText('Del opp periode')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ikke godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));
    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      kode: '5074',
      vurderingBehov: [
        {
          fom: '2022-12-08',
          tom: '2022-12-13',
          type: 'UTTAK',
          vurdering: 'IKKE_GODKJENT',
          årsak: 'HV_ØVELSE',
        },
      ],
    });
  });

  it('skal vise tabellrader som ikke kan ekspanderes når det ikke er aksjonspunkt', async () => {
    render(<UavklartePerioderMenIkkeAksjonspunktEnnå />);

    expect(await screen.findByText('Fakta om uttaksdokumentasjon')).toBeInTheDocument();

    expect(await screen.queryByAltText('Åpne rad')).not.toBeInTheDocument();
  });
});
