import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

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

describe('<UttakFaktaIndex>', () => {
  it('skal vise tabellrader som ikke kan ekspanderes når det ikke er aksjonspunkt', async () => {
    render(<VisUttaksperiodeUtenAksjonspunkt />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(await screen.getByAltText('Åpne rad')).toBeInTheDocument();
    expect(await screen.queryByAltText('Overstyr')).not.toBeInTheDocument();
  });

  it('skal kunne overstyre når det ikke er aksjonspunkter og en er overstyrer', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<VisUttaksperiodeUtenAksjonspunktKanOverstyre submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(await screen.getByAltText('Åpne rad')).toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Overstyr'));

    expect(await screen.findByText('Legg til periode')).toBeInTheDocument();

    expect(await screen.getByAltText('Åpne rad')).toBeInTheDocument();

    await userEvent.click(screen.queryByAltText('Åpne rad'));

    const periodeFra = utils.getByLabelText('Periode fra');
    await userEvent.clear(periodeFra);
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    await userEvent.click(screen.getByText('Samtidig uttaksprosent'));

    await userEvent.type(utils.getAllByLabelText('Samtidig uttaksprosent')[1], '10');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      kode: '6065',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [{
        fom: '2022-01-31',
        tom: '2022-12-01',
        originalFom: '2022-11-12',
        periodeKilde: 'SAKSBEHANDLER',
        samtidigUttaksprosent: '10',
        uttakPeriodeType: 'MØDREKVOTE',
        aksjonspunktType: undefined,
        arbeidsforhold: undefined,
        arbeidstidsprosent: undefined,
        flerbarnsdager: false,
        morsAktivitet: undefined,
      }],
    }]);
  });

  it('skal få aksjonspunkt der en må justere fom dato til avklart startdato', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<VisUttaksperiodeMedAksjonspunkt submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.getByText('Første periode starter ikke på avklart startdato 31.01.2022. Legg inn periode fra startdato')).toBeInTheDocument();

    await userEvent.click(screen.getAllByAltText('Åpne rad')[0]);

    expect(await screen.findByText('Periode til')).toBeInTheDocument();

    const periodeFra = utils.getByLabelText('Periode fra');
    await userEvent.clear(periodeFra);
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      kode: '5065',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [{
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
        morsAktivitet: undefined,
      }, {
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
      }, {
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
      }],
    }]);
  });

  it('skal vise aksjonspunkt når det ikke finnes perioder og så legge til en periode', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<VisAksjonspunktDerIngenPerioderFinnes submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.getByText('Ingen perioder å vurdere. Vurder om behandlingen er feilopprettet og kan henlegges')).toBeInTheDocument();

    expect(screen.queryByAltText('Åpne rad')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til periode'));

    const periodeFra = utils.getByLabelText('Periode fra');
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    const periodeTil = utils.getByLabelText('Periode til');
    await userEvent.type(periodeTil, '14.12.2022');
    fireEvent.blur(periodeTil);

    await userEvent.click(screen.getByText('Opphold'));

    await userEvent.selectOptions(utils.getByLabelText('Årsak'), 'UTTAK_FEDREKVOTE_ANNEN_FORELDER');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      kode: '5064',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [{
        fom: '2022-01-31',
        tom: '2022-12-14',
        periodeKilde: 'SAKSBEHANDLER',
        aksjonspunktType: undefined,
        arbeidsforhold: undefined,
        morsAktivitet: undefined,
        oppholdÅrsak: 'UTTAK_FEDREKVOTE_ANNEN_FORELDER',
      }],
    }]);
  });

  it('skal få aksjonspunkt der arbeidsforholdet i periode er ukjent', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<VisAksjonspunktDerArbeidsfoholdErUkjentVedGradering submitCallback={lagre} />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.getByText('Gradering av ukjent arbeidsforhold. Vurder gradering')).toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Åpne rad'));

    expect(await screen.findByText('Arbeidsgiver oppgitt for perioden er ukjent. Referanse: 91090823')).toBeInTheDocument();

    const periodeFra = utils.getByLabelText('Periode fra');
    await userEvent.clear(periodeFra);
    await userEvent.type(periodeFra, '31.01.2022');
    fireEvent.blur(periodeFra);

    await userEvent.selectOptions(utils.getByLabelText('Arbeidsgiver'), '910909088-ORDINÆRT_ARBEID');

    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, [{
      kode: '5063',
      begrunnelse: 'Dette er en begrunnelse',
      perioder: [{
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
        morsAktivitet: undefined,
      }],
    }]);
  });

  it('skal vise ulike felter for ulike periodetyper', async () => {
    const utils = render(<VisUtsettelseperiodeMedAksjonspunkt />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Åpne rad'));

    expect(await screen.findByText('Periodetype')).toBeInTheDocument();

    // For periodetype = Utsettelse
    expect(utils.getByLabelText('Årsak')).toBeInTheDocument();
    expect(utils.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Stønadskonto')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Arbeidsgiver')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Samtidig uttaksprosent')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Flerbarnsdager')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Overføring'));

    expect(await utils.findByLabelText('Stønadskonto')).toBeInTheDocument();
    expect(utils.getByLabelText('Årsak')).toBeInTheDocument();
    expect(utils.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Arbeidsgiver')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Samtidig uttaksprosent')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Flerbarnsdager')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Uttak'));

    expect(await utils.findByLabelText('Gradering')).toBeInTheDocument();
    expect(utils.getByLabelText('Samtidig uttaksprosent')).toBeInTheDocument();
    expect(utils.getByLabelText('Stønadskonto')).toBeInTheDocument();
    expect(utils.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(utils.getByLabelText('Flerbarnsdager')).toBeInTheDocument();
    expect(utils.queryByLabelText('Årsak')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Gradering'));
    expect(await utils.findByLabelText('Gradering %')).toBeInTheDocument();
    expect(utils.getByLabelText('Arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Samtidig uttaksprosent'));
    expect(await utils.findAllByLabelText('Samtidig uttaksprosent')).toHaveLength(2);

    await userEvent.click(screen.getByText('Opphold'));

    expect(await utils.getByLabelText('Årsak')).toBeInTheDocument();
    expect(utils.queryByLabelText('Mors aktivitet')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Stønadskonto')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Gradering %')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Arbeidsgiver')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Samtidig uttaksprosent')).not.toBeInTheDocument();
    expect(utils.queryByLabelText('Flerbarnsdager')).not.toBeInTheDocument();
  });

  it('skal vise periode der aksjonspunkt er løst og behandlingen er avsluttet', async () => {
    render(<VisPanelDerAksjonspunktErLøstOgBehandlingAvsluttet />);

    expect(await screen.findByText('Fakta om uttak')).toBeInTheDocument();

    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Åpne rad'));

    expect(await screen.findByText('Periodetype')).toBeInTheDocument();
    expect(screen.queryByRole('input')).not.toBeInTheDocument();
    expect(screen.queryByText('Oppdater')).not.toBeInTheDocument();
  });
});
