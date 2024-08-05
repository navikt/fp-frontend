import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './UttakDokumentasjonFaktaIndex.stories';
import { UttakType, UttakVurdering, UttakÅrsak } from '@navikt/fp-types';

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
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('08.01.2022 – 13.02.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('radio', { name: 'Godkjent' }));
    await userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Oppdater' }).closest('button')).toBeDisabled());

    expect(screen.getByText('01.11.2022 – 07.01.2023')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('radio', { name: 'Ikke godkjent' }));
    await userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));
    await waitFor(() => expect(screen.getByRole('button', { name: 'Oppdater' }).closest('button')).toBeDisabled());

    expect(screen.getByText('15.11.2022 – 20.11.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('radio', { name: 'Godkjent' }));
    await userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Oppdater' }).closest('button')).toBeDisabled());

    expect(screen.getByText('18.11.2022 – 03.12.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('radio', { name: 'Godkjent - Mor jobber mindre enn 75%' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Hvor mange prosent jobber mor?' }), '60');
    await userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));

    await userEvent.type(utils.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5074',
      begrunnelse: 'Dette er en begrunnelse',
      vurderingBehov: [
        {
          fom: '2022-01-08',
          morsStillingsprosent: undefined,
          tom: '2022-02-13',
          type: UttakType.OVERFØRING,
          årsak: UttakÅrsak.SYKDOM_ANNEN_FORELDER,
          vurdering: UttakVurdering.GODKJENT,
        },
        {
          fom: '2022-11-01',
          morsStillingsprosent: undefined,
          tom: '2023-01-07',
          type: UttakType.UTSETTELSE,
          årsak: UttakÅrsak.INNLEGGELSE_SØKER,
          vurdering: UttakVurdering.IKKE_GODKJENT,
        },
        {
          fom: '2022-11-15',
          morsStillingsprosent: undefined,
          tom: '2022-11-20',
          type: UttakType.UTTAK,
          årsak: UttakÅrsak.TIDLIG_OPPSTART_FAR,
          vurdering: UttakVurdering.GODKJENT,
        },
        {
          fom: '2022-11-18',
          tom: '2022-12-03',
          type: UttakType.UTTAK,
          årsak: UttakÅrsak.AKTIVITETSKRAV_ARBEID,
          vurdering: UttakVurdering.GODKJENT,
          morsStillingsprosent: '60',
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
    expect(screen.getByRole('textbox', { name: 'Begrunnelse' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Bekreft og fortsett' }).closest('button')).toBeDisabled();

    await userEvent.click(screen.getByTitle('Vis mer'));

    expect(await screen.findByText('Del opp periode')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('radio', { name: 'Ikke godkjent' }));
    await userEvent.click(screen.getByRole('button', { name: 'Oppdater' }));
    await userEvent.type(screen.getByRole('textbox', { name: 'Begrunnelse' }), 'Dette er en begrunnelse');
    await userEvent.click(screen.getByRole('button', { name: 'Bekreft og fortsett' }));

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
