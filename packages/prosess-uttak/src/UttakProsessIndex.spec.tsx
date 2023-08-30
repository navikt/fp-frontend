import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';

import * as stories from './UttakProsessIndex.stories';

const {
  AksjonspunktDerValgtStønadskontoIkkeFinnes,
  PeriodeMedGraderingUtenAksjonspunkt,
  StønadskontoMedUgyldigForbruk,
  VisAdvarselNårProsentIArbeidTotaltErMindreEnn100Prosent,
  VisAdvarselNårUtbetalingsgradOgProsentArbeidOverstiger100Prosent,
} = composeStories(stories);

describe('<UttakProsessIndex>', () => {
  it('skal vise periode med gradering', async () => {
    const lagre = vi.fn();

    render(<PeriodeMedGraderingUtenAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Uttak')).toBeInTheDocument();
    expect(screen.getByText('Disponible stønadsdager (u/d)')).toBeInTheDocument();
    expect(screen.getByText(/Sum permisjon:/)).toBeInTheDocument();
    expect(screen.getByText(/49/)).toBeInTheDocument();

    expect(screen.getByText('Før fødsel')).toBeInTheDocument();
    expect(screen.getByText('0/0')).toBeInTheDocument();

    expect(screen.getByText('Fellesperiode')).toBeInTheDocument();
    expect(screen.getByText('16/0')).toBeInTheDocument();

    expect(screen.getByText('Mødrekvote')).toBeInTheDocument();
    expect(screen.getByText('7/0')).toBeInTheDocument();

    expect(screen.getByText('Fedrekvote')).toBeInTheDocument();
    expect(screen.getByText('10/0')).toBeInTheDocument();

    expect(screen.queryByText('Aktivitet')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Før fødsel'));

    expect(await screen.findByText('Aktivitet')).toBeInTheDocument();
    expect(screen.getByText('BEDRIFT AS (910909088)')).toBeInTheDocument();
    expect(screen.getByText('Disponibelt')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Før fødsel'));

    expect(screen.queryByText('Detaljer for valgt periode')).not.toBeInTheDocument();

    // Trykk på første periode i tidslinja
    await userEvent.click(screen.getAllByRole('button')[3]);

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();
    expect(screen.getAllByText('Foreldrepenger før fødsel')).toHaveLength(2);
    expect(screen.getByText('11.10.2019 - 31.10.2019')).toBeInTheDocument();
    expect(screen.getByText('3 uker')).toBeInTheDocument();
    expect(screen.getByText('Mottatt dato: 01.11.2019')).toBeInTheDocument();
    expect(screen.getByText(/§14-10: Innvilget foreldrepenger før fødsel/)).toBeInTheDocument();

    expect(screen.getByText('BEDRIFT AS (910909088)...-001')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('skal kunne velge perioder med neste-ikon', async () => {
    const lagre = vi.fn();

    render(<PeriodeMedGraderingUtenAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Uttak')).toBeInTheDocument();

    // Trykk på første periode i tidslinja
    await userEvent.click(screen.getAllByRole('button')[3]);

    expect(await screen.findByText('11.10.2019 - 31.10.2019')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Neste'));

    expect(await screen.findByText('01.11.2019 - 12.12.2019')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Neste'));

    expect(await screen.findByText('13.12.2019 - 23.01.2020')).toBeInTheDocument();
    expect(screen.getByText('Gradering av arbeidsforhold')).toBeInTheDocument();
    expect(screen.getByText('BEDRIFT AS (910909088)')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Neste'));

    expect(await screen.findByText('24.01.2020 - 13.02.2020')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Neste'));

    expect(await screen.findByText('14.02.2020 - 20.02.2020')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Forrige'));

    expect(await screen.findByText('24.01.2020 - 13.02.2020')).toBeInTheDocument();
  });

  // TODO FIX
  it.skip('skal validere at stønadskonto ikke er gyldig, endre og så bekrefte', async () => {
    // Vil gi ein warning sidan ein prøver å setta ein ikkje gyldig verdi i dropdown
    vi.spyOn(console, 'warn').mockImplementation(() => {});

    const lagre = vi.fn();

    const utils = render(<AksjonspunktDerValgtStønadskontoIkkeFinnes submitCallback={lagre} />);

    expect(
      await screen.findByText('Alle aksjonspunkter skal vurderes manuelt. Kontakt søker ved behov.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden.',
      ),
    ).toBeInTheDocument();

    const inputFelter = utils.getAllByRole('textbox');
    expect(inputFelter).toHaveLength(7);

    await userEvent.type(inputFelter[2], '0');
    await userEvent.type(inputFelter[5], '10');

    await userEvent.type(utils.getByLabelText('Vurdering:'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Oppfylt'));

    await userEvent.selectOptions(utils.getByLabelText('Årsak til innvilgelse'), '2002');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Stønadskonto Foreldrepenger er ikke tilgjengelig')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();

    await userEvent.click(screen.getAllByRole('button')[4]);

    expect(await screen.findByText('Detaljer for valgt periode')).toBeInTheDocument();

    const dropdowns = utils.getAllByRole('combobox');
    expect(dropdowns).toHaveLength(3);

    await userEvent.selectOptions(dropdowns[0], 'MØDREKVOTE');
    await userEvent.selectOptions(dropdowns[1], 'FELLESPERIODE');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(screen.queryByText('Stønadskonto Foreldrepenger er ikke tilgjengelig')).not.toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeEnabled());

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5071',
        perioder: [
          {
            aktiviteter: [
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c1',
                arbeidsgiverReferanse: '910909088',
                eksternArbeidsforholdId: 'ARB001-001',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'MØDREKVOTE',
                trekkdagerDesimaler: 14,
                utbetalingsgrad: 0,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
                arbeidsgiverReferanse: '994884174',
                eksternArbeidsforholdId: 'ARB001-002',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'FELLESPERIODE',
                trekkdagerDesimaler: 15,
                utbetalingsgrad: 10,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
            ],
            begrunnelse: 'Dette er en vurdering',
            flerbarnsdager: false,
            fom: '2022-10-20',
            graderingAvslagÅrsak: '-',
            graderingInnvilget: false,
            gradertAktivitet: null,
            manuellBehandlingÅrsak: '5002',
            mottattDato: '2023-01-05',
            oppholdÅrsak: '-',
            periodeResultatType: 'INNVILGET',
            periodeResultatÅrsak: '2002',
            periodeType: 'FORELDREPENGER',
            samtidigUttak: false,
            samtidigUttaksprosent: undefined,
            tom: '2022-11-09',
            utsettelseType: '-',
          },
          {
            aktiviteter: [
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
                arbeidsgiverReferanse: '994884174',
                eksternArbeidsforholdId: 'ARB001-002',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'MØDREKVOTE',
                trekkdagerDesimaler: 30,
                utbetalingsgrad: 0,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
            ],
            begrunnelse: null,
            flerbarnsdager: false,
            fom: '2022-11-10',
            graderingAvslagÅrsak: '-',
            graderingInnvilget: false,
            gradertAktivitet: null,
            manuellBehandlingÅrsak: '-',
            mottattDato: null,
            oppholdÅrsak: '-',
            periodeResultatType: 'AVSLÅTT',
            periodeResultatÅrsak: '4103',
            periodeType: null,
            samtidigUttak: false,
            samtidigUttaksprosent: null,
            tom: '2022-12-21',
            utsettelseType: '-',
          },
        ],
      },
    ]);
  });

  it('skal ha aksjonspunkt og dele opp periode i to og så bekrefte', async () => {
    const lagre = vi.fn();

    const utils = render(<AksjonspunktDerValgtStønadskontoIkkeFinnes submitCallback={lagre} />);

    expect(
      await screen.findByText('Alle aksjonspunkter skal vurderes manuelt. Kontakt søker ved behov.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden.',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Del opp perioden'));

    expect(await screen.findByText('Angi t.o.m. dato for første periode')).toBeInTheDocument();

    const tom = screen.getByText('Angi t.o.m. dato for første periode');
    await userEvent.type(tom, '28.10.2022');
    fireEvent.blur(tom);

    await userEvent.click(screen.getByText('Ok'));

    expect(await screen.findByText('20.10.2022 - 28.10.2022')).toBeInTheDocument();

    const inputFelter = utils.getAllByRole('textbox');
    expect(inputFelter).toHaveLength(7);

    await userEvent.type(inputFelter[2], '0');
    await userEvent.type(inputFelter[5], '0');

    await userEvent.type(utils.getByLabelText('Vurdering:'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('29.10.2022 - 09.11.2022')).toBeInTheDocument();

    const inputFelter2 = utils.getAllByRole('textbox');
    expect(inputFelter2).toHaveLength(7);

    await userEvent.type(inputFelter2[2], '0');
    await userEvent.type(inputFelter2[5], '0');

    await userEvent.type(utils.getByLabelText('Vurdering:'), 'Dette er en vurdering på periode 2');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5071',
        perioder: [
          {
            aktiviteter: [
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c1',
                arbeidsgiverReferanse: '910909088',
                eksternArbeidsforholdId: 'ARB001-001',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'FORELDREPENGER',
                trekkdagerDesimaler: 7,
                utbetalingsgrad: 0,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
                arbeidsgiverReferanse: '994884174',
                eksternArbeidsforholdId: 'ARB001-002',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'FORELDREPENGER',
                trekkdagerDesimaler: 7,
                utbetalingsgrad: 0,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
            ],
            begrunnelse: ' Dette er en vurdering',
            flerbarnsdager: false,
            fom: '2022-10-20',
            graderingAvslagÅrsak: '-',
            graderingInnvilget: false,
            gradertAktivitet: null,
            manuellBehandlingÅrsak: '5002',
            mottattDato: '2023-01-05',
            oppholdÅrsak: '-',
            periodeResultatType: 'AVSLÅTT',
            periodeResultatÅrsak: '4002',
            periodeType: 'FORELDREPENGER',
            samtidigUttak: false,
            samtidigUttaksprosent: undefined,
            tom: '2022-10-28',
            utsettelseType: '-',
          },
          {
            aktiviteter: [
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c1',
                arbeidsgiverReferanse: '910909088',
                eksternArbeidsforholdId: 'ARB001-001',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'FORELDREPENGER',
                trekkdagerDesimaler: 8,
                utbetalingsgrad: 0,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
                arbeidsgiverReferanse: '994884174',
                eksternArbeidsforholdId: 'ARB001-002',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'FORELDREPENGER',
                trekkdagerDesimaler: 8,
                utbetalingsgrad: 0,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
            ],
            begrunnelse: ' Dette er en vurdering på periode 2',
            flerbarnsdager: false,
            fom: '2022-10-29',
            graderingAvslagÅrsak: '-',
            graderingInnvilget: false,
            gradertAktivitet: null,
            manuellBehandlingÅrsak: '5002',
            mottattDato: '2023-01-05',
            oppholdÅrsak: '-',
            periodeResultatType: 'AVSLÅTT',
            periodeResultatÅrsak: '4002',
            periodeType: 'FORELDREPENGER',
            samtidigUttak: false,
            samtidigUttaksprosent: undefined,
            tom: '2022-11-09',
            utsettelseType: '-',
          },
          {
            aktiviteter: [
              {
                arbeidsforholdId: 'de6cb16e-9520-418c-a438-aa781b0833c2',
                arbeidsgiverReferanse: '994884174',
                eksternArbeidsforholdId: 'ARB001-002',
                gradering: false,
                prosentArbeid: 0,
                stønadskontoType: 'MØDREKVOTE',
                trekkdagerDesimaler: 30,
                utbetalingsgrad: 0,
                uttakArbeidType: 'ORDINÆRT_ARBEID',
              },
            ],
            begrunnelse: null,
            flerbarnsdager: false,
            fom: '2022-11-10',
            graderingAvslagÅrsak: '-',
            graderingInnvilget: false,
            gradertAktivitet: null,
            manuellBehandlingÅrsak: '-',
            mottattDato: null,
            oppholdÅrsak: '-',
            periodeResultatType: 'AVSLÅTT',
            periodeResultatÅrsak: '4103',
            periodeType: null,
            samtidigUttak: false,
            samtidigUttaksprosent: null,
            tom: '2022-12-21',
            utsettelseType: '-',
          },
        ],
      },
    ]);
  });

  it('skal vise feilmelding når det ikke er valgt et gyldig antall dager for mødrekvoten', async () => {
    const utils = render(<StønadskontoMedUgyldigForbruk />);

    expect(
      await screen.findByText('Alle aksjonspunkter skal vurderes manuelt. Kontakt søker ved behov.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden.',
      ),
    ).toBeInTheDocument();

    const inputFelter = utils.getAllByRole('textbox');
    expect(inputFelter).toHaveLength(4);

    await userEvent.type(inputFelter[2], '0');

    await userEvent.type(utils.getByLabelText('Vurdering:'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Oppdater'));

    expect(await screen.findByText('Antall dager valgt for Mødrekvote er ikke gyldig')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett').closest('button')).toBeDisabled();
  });

  // TODO FIX!
  it.skip('skal vise varsel når samlet utbetalingsgrad og andel i arbeid overskrider 100%', async () => {
    const utils = render(<VisAdvarselNårProsentIArbeidTotaltErMindreEnn100Prosent />);

    expect(
      await screen.findByText('Alle aksjonspunkter skal vurderes manuelt. Kontakt søker ved behov.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Ikke gyldig grunn for uttak av denne stønadskontoen. Vurder bruk av annen stønadskonto eller avslå perioden.',
      ),
    ).toBeInTheDocument();

    const inputFelter = utils.getAllByRole('textbox');
    expect(inputFelter).toHaveLength(4);

    await userEvent.type(inputFelter[2], '0');

    await userEvent.type(utils.getByLabelText('Vurdering:'), 'Dette er en vurdering');

    await userEvent.click(screen.getByText('Oppfylt'));

    expect(
      await screen.findByText(
        'Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%. ' +
          'Søker har ikke 100% stilling, vurder om perioden kan utsettes.',
      ),
    ).toBeInTheDocument();
  });

  it('skal vise varsel når utbetalingsgrad og andel i arbeid overskrider 100%', async () => {
    const utils = render(<VisAdvarselNårUtbetalingsgradOgProsentArbeidOverstiger100Prosent />);

    expect(
      await screen.findByText('Alle aksjonspunkter skal vurderes manuelt. Kontakt søker ved behov.'),
    ).toBeInTheDocument();

    expect(screen.getByText('Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%.')).toBeInTheDocument();

    const inputFelter = utils.getAllByRole('textbox');
    expect(inputFelter).toHaveLength(4);

    await userEvent.clear(inputFelter[2]);
    await userEvent.type(inputFelter[2], '45');

    expect(
      screen.queryByText('Samlet utbetalingsgrad og andel i arbeid bør ikke overskride 100%.'),
    ).not.toBeInTheDocument();
  });
});
