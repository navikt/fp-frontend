import { composeStories } from '@storybook/react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { KontrollerFaktaPeriodeMedApMarkering } from './typer/kontrollerFaktaPeriodeMedApMarkering';
import * as stories from './UttakFaktaIndex.stories';

const {
  VisUttaksperiodeUtenAksjonspunkt,
  VisUttaksperiodeUtenAksjonspunktKanOverstyre,
  VisUttaksperiodeMedAksjonspunkt,
  VisUtsettelseperiodeMedAksjonspunkt,
  VisAksjonspunktDerIngenPerioderFinnes,
  VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering,
  VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet,
} = composeStories(stories);

describe('UttakFaktaIndex', () => {
  it('skal vise tabellrader som ikke kan ekspanderes når det ikke er aksjonspunkt', async () => {
    render(<VisUttaksperiodeUtenAksjonspunkt />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.getByTitle('Vis mer')).toBeInTheDocument();
    expect(screen.queryByTitle('Overstyr')).not.toBeInTheDocument();
  });

  it('skal kunne overstyre når det ikke er aksjonspunkter og en er overstyrer', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<VisUttaksperiodeUtenAksjonspunktKanOverstyre submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.getByTitle('Vis mer')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Overstyr'));

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();

    expect(screen.getByTitle('Vis mer')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Vis mer'));

    const periodeFra = screen.getByLabelText('Periode fra');
    await userEvent.clear(periodeFra);
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    await userEvent.click(screen.getByText('Samtidig uttaksprosent'));

    await userEvent.type(screen.getAllByLabelText('Samtidig uttaksprosent')[1]!, '10');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(screen.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '6065',
        begrunnelse: 'Dette er en begrunnelse',
        perioder: [
          {
            fom: '2022-01-31',
            tom: '2022-12-01',
            originalFom: '2022-11-12',
            periodeKilde: 'SAKSBEHANDLER',
            // @ts-expect-error -- typene i formet er inkonsekvente
            samtidigUttaksprosent: '10',
            uttakPeriodeType: 'MØDREKVOTE',
            aksjonspunktType: undefined,
            arbeidsforhold: undefined,
            arbeidstidsprosent: undefined,
            flerbarnsdager: false,
          },
        ] satisfies KontrollerFaktaPeriodeMedApMarkering[],
      },
    ]);
  });

  it('skal få aksjonspunkt der en må justere fom dato til avklart startdato', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<VisUttaksperiodeMedAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(
      screen.getByText('Første periode starter ikke på avklart startdato 31.01.2022. Legg inn periode fra startdato'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getAllByTitle('Vis mer')[0]!);

    expect(await screen.findByText('Periode til')).toBeInTheDocument();

    const periodeFra = screen.getByLabelText('Periode fra');
    await userEvent.clear(periodeFra);
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(screen.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5065',
        begrunnelse: 'Dette er en begrunnelse',
        perioder: [
          {
            fom: '2022-01-31',
            tom: '2022-12-01',
            originalFom: '2022-11-12',
            periodeKilde: 'SAKSBEHANDLER',
            samtidigUttaksprosent: 80,
            uttakPeriodeType: 'MØDREKVOTE',
            arbeidsforhold: {
              arbeidType: 'ORDINÆRT_ARBEID',
              arbeidsgiverReferanse: '910909088',
            },
            arbeidstidsprosent: 10,
            flerbarnsdager: true,
            aksjonspunktType: undefined,
          },
          {
            fom: '2022-12-02',
            tom: '2022-12-10',
            originalFom: '2022-12-02',
            periodeKilde: 'SØKNAD',
            uttakPeriodeType: 'MØDREKVOTE',
            arbeidsforhold: {
              arbeidType: 'ORDINÆRT_ARBEID',
              arbeidsgiverReferanse: '910909088',
            },
            arbeidstidsprosent: 50,
            flerbarnsdager: false,
          },
          {
            fom: '2022-12-11',
            tom: '2022-12-20',
            originalFom: '2022-12-11',
            periodeKilde: 'SØKNAD',
            uttakPeriodeType: 'MØDREKVOTE',
            arbeidsforhold: {
              arbeidType: 'ORDINÆRT_ARBEID',
              arbeidsgiverReferanse: '910909088',
            },
            arbeidstidsprosent: 50,
            flerbarnsdager: false,
          },
        ] satisfies KontrollerFaktaPeriodeMedApMarkering[],
      },
    ]);
  });

  it('skal vise aksjonspunkt når det ikke finnes perioder og så legge til en periode', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<VisAksjonspunktDerIngenPerioderFinnes submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(
      screen.getByText('Ingen perioder å vurdere. Vurder om behandlingen er feilopprettet og kan henlegges'),
    ).toBeInTheDocument();

    expect(screen.queryByAltText('Vis mer')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til periode'));

    const periodeFra = screen.getByLabelText('Periode fra');
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    const periodeTil = screen.getByLabelText('Periode til');
    await userEvent.type(periodeTil, '14.12.2022');
    fireEvent.blur(periodeTil);

    await userEvent.click(screen.getByText('Opphold'));

    await userEvent.selectOptions(screen.getByLabelText('Årsak'), 'UTTAK_FEDREKVOTE_ANNEN_FORELDER');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(screen.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5064',
        begrunnelse: 'Dette er en begrunnelse',
        perioder: [
          {
            fom: '2022-01-31',
            tom: '2022-12-14',
            periodeKilde: 'SAKSBEHANDLER',
            aksjonspunktType: undefined,
            arbeidsforhold: undefined,
            morsAktivitet: undefined,
            oppholdÅrsak: 'UTTAK_FEDREKVOTE_ANNEN_FORELDER',
          },
        ],
      },
    ]);
  });

  it('skal få aksjonspunkt der arbeidsforholdet i periode er ukjent', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.getByText('Gradering av ukjent arbeidsforhold. Vurder gradering')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Vis mer'));

    expect(
      await screen.findByText('Arbeidsgiver oppgitt for perioden er ukjent. Referanse: 91090823'),
    ).toBeInTheDocument();

    const periodeFra = screen.getByLabelText('Periode fra');
    await userEvent.clear(periodeFra);
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    await userEvent.selectOptions(screen.getByLabelText('Arbeidsgiver'), '910909088-ORDINÆRT_ARBEID');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(screen.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [
      {
        kode: '5063',
        begrunnelse: 'Dette er en begrunnelse',
        perioder: [
          {
            fom: '2022-01-31',
            tom: '2022-12-01',
            originalFom: '2022-11-12',
            periodeKilde: 'SAKSBEHANDLER',
            samtidigUttaksprosent: undefined,
            uttakPeriodeType: 'MØDREKVOTE',
            arbeidsforhold: {
              arbeidType: 'ORDINÆRT_ARBEID',
              arbeidsgiverReferanse: '910909088',
            },
            arbeidstidsprosent: 50,
            flerbarnsdager: false,
            aksjonspunktType: undefined,
          },
        ] satisfies KontrollerFaktaPeriodeMedApMarkering[],
      },
    ]);
  });

  it('skal vise ulike felter for ulike periodetyper', async () => {
    render(<VisUtsettelseperiodeMedAksjonspunkt />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Vis mer'));

    expect(await screen.findByText('Periodetype')).toBeInTheDocument();

    // For periodetype = Utsettelse
    expect(screen.getByLabelText('Årsak')).toBeInTheDocument();
    expect(screen.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Stønadskonto')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Arbeidsgiver')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Samtidig uttaksprosent')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Flerbarnsdager')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Overføring'));

    expect(await screen.findByLabelText('Stønadskonto')).toBeInTheDocument();
    expect(screen.getByLabelText('Årsak')).toBeInTheDocument();
    expect(screen.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Arbeidsgiver')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Samtidig uttaksprosent')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Flerbarnsdager')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Uttak'));

    expect(await screen.findByLabelText('Gradering')).toBeInTheDocument();
    expect(screen.getByLabelText('Samtidig uttaksprosent')).toBeInTheDocument();
    expect(screen.getByLabelText('Stønadskonto')).toBeInTheDocument();
    expect(screen.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Flerbarnsdager')).toBeInTheDocument();
    expect(screen.queryByLabelText('Årsak')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Gradering'));
    expect(await screen.findByLabelText('Gradering %')).toBeInTheDocument();
    expect(screen.getByLabelText('Arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Samtidig uttaksprosent'));
    expect(await screen.findAllByLabelText('Samtidig uttaksprosent')).toHaveLength(2);

    await userEvent.click(screen.getByText('Opphold'));

    expect(screen.getByLabelText('Årsak')).toBeInTheDocument();
    expect(screen.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Stønadskonto')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Arbeidsgiver')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Samtidig uttaksprosent')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Flerbarnsdager')).not.toBeInTheDocument();
  });

  it('skal vise periode der aksjonspunkt er løst og behandlingen er avsluttet', async () => {
    render(<VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Vis mer'));

    expect(await screen.findByText('Periodetype')).toBeInTheDocument();
    expect(screen.queryByRole('input')).not.toBeInTheDocument();
    expect(screen.queryByText('Oppdater')).not.toBeInTheDocument();
  });
});
