import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import { ISO_DATE_FORMAT } from '@fpsak-frontend/utils';
import * as stories from './ArbeidOgInntektFaktaIndex.stories';

const {
  InnhentInntektsmelding,
  AvklarManglendeOpplysninger,
  AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,
  SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer,
  SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,
  ArbeidsforholdErManueltLagtTilOgLagret,
  ArbeidsforholdErOK,
} = composeStories(stories);

const frist = dayjs().add(28, 'days').format(ISO_DATE_FORMAT);

describe('<ArbeidOgInntektFaktaIndex>', () => {
  Modal.setAppElement('body');

  it('skal avklare arbeidsforhold som mangler inntektsmelding og så sette på vent', async () => {
    const settPåVent = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<InnhentInntektsmelding settBehandlingPåVentCallback={settPåVent} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Skjæringstidspunkt for opptjening: 10.11.2021')).toBeInTheDocument();
    expect(screen.getByText('Innhent manglende inntektsmeldinger')).toBeInTheDocument();

    expect(screen.getByText('Stillingsprosent')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Inntekter (fra A-inntekt)')).toBeInTheDocument();

    expect(screen.getByText('Lagre')).toBeDisabled();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
    expect(screen.queryByText('Sett på vent')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Jeg tar kontakt med arbeidsgiver for å innhente inntektsmelding'));

    userEvent.type(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909088',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      vurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING',
    });

    userEvent.click(screen.getByText('Sett på vent'));
    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(settPåVent).toHaveBeenCalledTimes(1));
    expect(settPåVent).toHaveBeenNthCalledWith(1, {
      frist,
      ventearsak: 'VENT_OPDT_INNTEKTSMELDING',
    });
  });

  it('skal avklare arbeidsforhold som mangler inntektsmelding og gå videre uten inntektsmelding', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<InnhentInntektsmelding submitCallback={bekrefteAksjonspunkt} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Gå videre uten inntektsmelding'));

    userEvent.type(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909088',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: 'bc9a409c-a15f-4416-856b-5b1ee42eb75c',
      vurdering: 'FORTSETT_UTEN_INNTEKTSMELDING',
    });

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekrefteAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(bekrefteAksjonspunkt).toHaveBeenNthCalledWith(1, {
      kode: '5085',
    });
  });

  it('skal avklare manglende opplysninger og så kontakte arbeidsgiver angående inntektsmeldingen', async () => {
    const settPåVent = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<AvklarManglendeOpplysninger settBehandlingPåVentCallback={settPåVent} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Skjæringstidspunkt for opptjening: 10.11.2021')).toBeInTheDocument();
    expect(screen.getByText('Avklar manglende opplysninger')).toBeInTheDocument();

    expect(screen.getAllByText('Inntektsmelding')).toHaveLength(2);
    expect(screen.getByText('30 000')).toBeInTheDocument();
    expect(screen.getByText('Refusjon')).toBeInTheDocument();
    expect(screen.getByText('Nei')).toBeInTheDocument();
    expect(screen.getByText('Kontaktinfo')).toBeInTheDocument();
    expect(screen.getByText('Corpolarsen')).toBeInTheDocument();
    expect(screen.getByText('Tlf. 41925090')).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-inntekt')).toBeInTheDocument();

    expect(screen.getByText('Lagre')).toBeDisabled();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
    expect(screen.queryByText('Sett på vent')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Jeg kontakter arbeidsgiver'));

    userEvent.type(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909088',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      vurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_ARBEIDSFORHOLD',
    });

    userEvent.click(screen.getByText('Sett på vent'));
    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(settPåVent).toHaveBeenCalledTimes(1));
    expect(settPåVent).toHaveBeenNthCalledWith(1, {
      frist,
      ventearsak: 'VENT_OPDT_INNTEKTSMELDING',
    });
  });

  it('skal avklare manglende opplysninger og så se bort fra inntektsmelding', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<AvklarManglendeOpplysninger submitCallback={bekrefteAksjonspunkt} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Se bort fra inntektsmeldingen'));

    userEvent.type(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909088',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      vurdering: 'IKKE_OPPRETT_BASERT_PÅ_INNTEKTSMELDING',
    });

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekrefteAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(bekrefteAksjonspunkt).toHaveBeenNthCalledWith(1, {
      kode: '5085',
    });
  });

  it('skal avklare manglende opplysninger og så opprette arbeidsforhold', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const registrerArbeidsforhold = jest.fn(() => Promise.resolve());

    const utils = render(<AvklarManglendeOpplysninger submitCallback={bekrefteAksjonspunkt} registrerArbeidsforhold={registrerArbeidsforhold} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Opprett arbeidsforhold basert på inntektsmeldingen'));

    const periodeFra = screen.getByText('Periode fra');
    userEvent.type(periodeFra, '01.02.2020');
    fireEvent.blur(periodeFra);

    const periodeTil = screen.getByText('Periode til');
    userEvent.type(periodeTil, '01.02.2022');
    fireEvent.blur(periodeTil);

    userEvent.type(utils.getByLabelText('Stillingsprosent'), '100');
    userEvent.type(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(registrerArbeidsforhold).toHaveBeenCalledTimes(1));
    expect(registrerArbeidsforhold).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909088',
      arbeidsgiverNavn: 'BEDRIFT AS',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: '8ff2c608-6bab-4f83-9732-d26f8c89aa84',
      fom: '2020-02-01',
      stillingsprosent: 100,
      tom: '2022-02-01',
      vurdering: 'OPPRETT_BASERT_PÅ_INNTEKTSMELDING',
    });

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekrefteAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(bekrefteAksjonspunkt).toHaveBeenNthCalledWith(1, {
      kode: '5085',
    });
  });

  it('skal kunne åpne for ny vurdering når aksjonspunkt er løst men behandling er åpen', async () => {
    const åpneForNyVurdering = jest.fn(() => Promise.resolve());

    render(
      <AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig
        åpneForNyVurdering={åpneForNyVurdering}
      />,
    );

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Åpne for ny vurdering'));

    await waitFor(() => expect(åpneForNyVurdering).toHaveBeenCalledTimes(1));
  });

  it('skal legge til nytt arbeidsforhold (Har overstyringsrettighet)', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const registrerArbeidsforhold = jest.fn(() => Promise.resolve());

    const utils = render(
      <SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnErOverstyrer
        submitCallback={bekrefteAksjonspunkt}
        registrerArbeidsforhold={registrerArbeidsforhold}
      />,
    );

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText(
      'Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Vurder om det er dokumentert andre arbeidsforhold. '
      + 'Arbeidsforholdet må kun opprettes dersom...',
    )).toBeInTheDocument();
    expect(screen.queryByText('Legg til arbeidsforhold')).not.toBeInTheDocument();

    userEvent.click(screen.getByAltText('Overstyr'));

    userEvent.click(screen.getByText('Legg til arbeidsforhold'));

    userEvent.type(utils.getByLabelText('Arbeidsgiver'), 'Telenor');

    const periodeFra = screen.getByText('Periode fra');
    userEvent.type(periodeFra, '01.02.2020');
    fireEvent.blur(periodeFra);

    const periodeTil = screen.getByText('Periode til');
    userEvent.type(periodeTil, '01.02.2022');
    fireEvent.blur(periodeTil);

    userEvent.type(utils.getByLabelText('Stillingsprosent'), '100');
    userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(registrerArbeidsforhold).toHaveBeenCalledTimes(1));
    expect(registrerArbeidsforhold).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '342352362',
      arbeidsgiverNavn: 'Telenor',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      fom: '2020-02-01',
      stillingsprosent: 100,
      tom: '2022-02-01',
      vurdering: 'MANUELT_OPPRETTET_AV_SAKSBEHANDLER',
    });

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekrefteAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(bekrefteAksjonspunkt).toHaveBeenNthCalledWith(1, {
      kode: '5085',
    });
  });

  it('skal ikke kunne legge til nytt arbeidsforhold når en ikke har overstyringsrettighet', async () => {
    render(<SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.queryByText(
      'Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Vurder om det er dokumentert andre arbeidsforhold. '
      + 'Arbeidsforholdet må kun opprettes dersom...',
    )).not.toBeInTheDocument();
    expect(screen.queryByText('Legg til arbeidsforhold')).not.toBeInTheDocument();
    expect(screen.queryByText('Overstyr')).not.toBeInTheDocument();
  });

  it('skal slette manuelt lagt til arbeidsforhold (Har overstyringsrettighet)', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const registrerArbeidsforhold = jest.fn(() => Promise.resolve());

    render(
      <ArbeidsforholdErManueltLagtTilOgLagret
        submitCallback={bekrefteAksjonspunkt}
        registrerArbeidsforhold={registrerArbeidsforhold}
      />,
    );

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.queryByText(
      'Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Vurder om det er dokumentert andre arbeidsforhold. '
      + 'Arbeidsforholdet må kun opprettes dersom...',
    )).not.toBeInTheDocument();

    userEvent.click(screen.getByAltText('Overstyr'));

    expect(await screen.findByText('Slett')).toBeInTheDocument();
    expect(screen.queryByText('Legg til arbeidsforhold')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Slett'));

    userEvent.click(screen.getAllByText('Avbryt')[1]);

    userEvent.click(screen.getByText('Slett'));

    userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(registrerArbeidsforhold).toHaveBeenCalledTimes(1));
    expect(registrerArbeidsforhold).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '342352362',
      arbeidsgiverNavn: 'Telenor',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      fom: '2019-12-06',
      stillingsprosent: 100,
      tom: '2022-12-31',
      vurdering: 'FJERN_FRA_BEHANDLINGEN',
    });

    expect(screen.getByText('Legg til arbeidsforhold')).toBeInTheDocument();

    userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekrefteAksjonspunkt).toHaveBeenCalledTimes(1));
    expect(bekrefteAksjonspunkt).toHaveBeenNthCalledWith(1, {
      kode: '5085',
    });
  });

  it('skal vise arbeidsforhold som er komplett', async () => {
    render(<ArbeidsforholdErOK />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByAltText('Arbeidsforhold er OK')).toBeInTheDocument();
    expect(screen.queryByAltText('Åpent aksjonspunkt')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Lukk rad')).not.toBeInTheDocument();

    userEvent.click(screen.getByAltText('Åpne rad'));

    expect(await screen.findByAltText('Lukk rad')).toBeInTheDocument();

    expect(screen.getByText('Stillingsprosent')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding')).toBeInTheDocument();
    expect(screen.getByText('30 000')).toBeInTheDocument();
    expect(screen.getByText('Refusjon')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløp')).toBeInTheDocument();
    expect(screen.getByText('20 000')).toBeInTheDocument();
    expect(screen.getByText('Kontaktinfo')).toBeInTheDocument();
    expect(screen.getByText('Corpolarsen')).toBeInTheDocument();
    expect(screen.getByText('Tlf. 41925090')).toBeInTheDocument();
  });
});
