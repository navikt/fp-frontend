import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import * as stories from './UttakDokumentasjonFaktaIndex.stories';

const {
  AksjonspunktMedUavklartePerioder,
  AksjonspunktSomErBekreftetOgBehandlingAvsluttet,
  AksjonspunktErBekreftetMenBehandlingErÅpen,
  UavklartePerioderMenIkkeAksjonspunktEnnå,
} = composeStories(stories);

describe('UttakDokumentasjonFaktaIndex', () => {
  it('skal avklare perioder og så bekrefte aksjonspunkt', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<AksjonspunktMedUavklartePerioder submitCallback={lagre} />);

    expect(screen.getByText('Kontroller dokumentasjon')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    expect(screen.getByText('08.01.2022 – 13.02.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.getByText('Oppdater').closest('button')).toBeDisabled());

    expect(screen.getByText('01.11.2022 – 07.01.2023')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Ikke godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));
    await waitFor(() => expect(screen.getByText('Oppdater').closest('button')).toBeDisabled());

    expect(screen.getByText('15.11.2022 – 20.11.2022')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));

    await waitFor(() => expect(screen.getByText('Oppdater').closest('button')).toBeDisabled());

    expect(screen.getByText('18.11.2022 – 03.12.2022')).toBeInTheDocument();
    //Mors aktivitet tabell
    expect(screen.getByText('40% Utdanning')).toBeInTheDocument();
    expect(screen.getByText('Nei')).toBeInTheDocument();
    expect(screen.getByText('60%')).toBeInTheDocument();
    expect(screen.getByText('50%')).toBeInTheDocument();
    await userEvent.click(screen.getByLabelText('Godkjent - Mor jobber mindre enn 75%'));
    await userEvent.type(screen.getByLabelText('Hvor mange prosent jobber mor?'), '60');
    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5074',
      begrunnelse: 'Dette er en begrunnelse',
      vurderingBehov: [
        {
          fom: '2022-01-08',
          morsStillingsprosent: undefined,
          tom: '2022-02-13',
          type: 'OVERFØRING',
          årsak: 'SYKDOM_ANNEN_FORELDER',
          vurdering: 'GODKJENT',
          aktivitetskravGrunnlag: [],
        },
        {
          fom: '2022-11-01',
          morsStillingsprosent: undefined,
          tom: '2023-01-07',
          type: 'UTSETTELSE',
          årsak: 'INNLEGGELSE_SØKER',
          vurdering: 'IKKE_GODKJENT',
          aktivitetskravGrunnlag: [],
        },
        {
          fom: '2022-11-15',
          morsStillingsprosent: undefined,
          tom: '2022-11-20',
          type: 'UTTAK',
          årsak: 'TIDLIG_OPPSTART_FAR',
          vurdering: 'GODKJENT',
          aktivitetskravGrunnlag: [],
        },
        {
          fom: '2022-11-18',
          tom: '2022-12-03',
          type: 'UTTAK',
          årsak: 'AKTIVITETSKRAV_ARBEID',
          vurdering: 'GODKJENT',
          morsStillingsprosent: '60',
          aktivitetskravGrunnlag: [
            {
              orgNummer: '123456789',
              stillingsprosent: 60,
              permisjon: {
                prosent: 40,
                type: 'UTDANNING',
              },
            },
            {
              orgNummer: '987654321',
              stillingsprosent: 50,
              permisjon: {
                prosent: 0,
                type: '-',
              },
            },
          ],
        },
      ],
    });
  });

  it('skal vise bekreftet periode i tabell når behandling er avsluttet', () => {
    render(<AksjonspunktSomErBekreftetOgBehandlingAvsluttet />);

    expect(screen.queryByText('Kontroller dokumentasjon')).not.toBeInTheDocument();

    expect(screen.getByText('Godkjent')).toBeInTheDocument();
    expect(screen.getByText('Dette er en begrunnelse')).toBeInTheDocument();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
  });

  it('skal vise bekreftet periode i tabell og så endre den', async () => {
    const lagre = vi.fn(() => Promise.resolve());
    render(<AksjonspunktErBekreftetMenBehandlingErÅpen submitCallback={lagre} />);

    expect(screen.queryByText('Kontroller dokumentasjon')).not.toBeInTheDocument();

    expect(screen.getByText('Godkjent')).toBeInTheDocument();
    expect(screen.getByLabelText('Begrunnelse')).toBeInTheDocument();
    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getByTitle('Vis mer'));

    expect(await screen.findByText('Del opp periode')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Ikke godkjent'));
    await userEvent.click(screen.getByText('Oppdater'));
    await userEvent.type(screen.getByLabelText('Begrunnelse'), 'Dette er en begrunnelse');
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
          aktivitetskravGrunnlag: [],
        },
      ],
    });
  });

  it('skal vise tabellrader som ikke kan ekspanderes når det ikke er aksjonspunkt', () => {
    render(<UavklartePerioderMenIkkeAksjonspunktEnnå />);
    expect(screen.queryByText('Kontroller dokumentasjon')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Åpne rad')).not.toBeInTheDocument();
  });
});
