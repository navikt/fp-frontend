import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import Modal from 'nav-frontend-modal';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import * as stories from './ArbeidOgInntektFaktaIndex.stories';

const {
  InnhentInntektsmelding,
  InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret,
  InnhentInntektsmeldingDerBehandlingErAvsluttet,
  AvklarManglendeArbeidsforhold,
  AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet,
  IngenAksjonspunktMenTilbakehoppMuligForOverstyrer,
  AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig,
  SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer,
  SkalIkkeKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnIkkeErOverstyrer,
  ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet,
  ArbeidsforholdErOK,
  ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet,
  FlereArbeidsforholdOgInntekstemeldinger,
  ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre,
  FoerRegisterinnhenting,
  AutomatiskIgnorertInntektsmelding,
  EtterAtEtterspurtInntektsmeldingErKommet,
} = composeStories(stories);

const frist = dayjs().add(28, 'days').format(ISO_DATE_FORMAT);

const scrollIntoViewMock = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

describe('<ArbeidOgInntektFaktaIndex>', () => {
  Modal.setAppElement('body');

  it('skal avklare arbeidsforhold som mangler inntektsmelding og så sette på vent', async () => {
    const settPåVent = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<InnhentInntektsmelding settBehandlingPåVentCallback={settPåVent} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Skjæringstidspunkt for opptjening: 10.11.2021')).toBeInTheDocument();
    expect(screen.getByText('Innhent manglende inntektsmeldinger.')).toBeInTheDocument();

    expect(screen.getByText('Stillingsprosent')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('Velferdspermisjon')).toBeInTheDocument();
    expect(screen.getByText('01.10.2022 - 01.12.2022')).toBeInTheDocument();
    expect(screen.getByText('Inntekter (fra A-ordningen)')).toBeInTheDocument();

    expect(screen.getByText('Lagre')).toBeDisabled();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
    expect(screen.queryByText('Sett på vent')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding'));

    userEvent.paste(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

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

    userEvent.paste(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

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

  it('skal vise at ingen inntektet er registrert på bruker i A-ordningen', async () => {
    render(<InnhentInntektsmeldingDerEnIkkeHarInntekterFraAAregisteret />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.')).toBeInTheDocument();
    expect(screen.queryByText('Inntekter (fra A-ordningen)')).not.toBeInTheDocument();
  });

  it('skal vise at inntektsmelding er innhentet og behandling er avsluttet', async () => {
    render(<InnhentInntektsmeldingDerBehandlingErAvsluttet />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByAltText('Åpne rad'));
    expect(await screen.findByAltText('Lukk rad')).toBeInTheDocument();

    expect(screen.getByRole('radio', { hidden: true })).toBeDisabled();
    expect(screen.getByText('Vil innehente inntektsmelding fordi...')).toBeInTheDocument();
  });

  it('skal avklare manglende arbeidsforhold og så kontakte arbeidsgiver angående inntektsmeldingen', async () => {
    const settPåVent = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<AvklarManglendeArbeidsforhold settBehandlingPåVentCallback={settPåVent} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Skjæringstidspunkt for opptjening: 10.11.2021')).toBeInTheDocument();
    expect(screen.getByText('Avklar manglende opplysninger.')).toBeInTheDocument();

    expect(screen.getAllByText('Inntektsmelding')).toHaveLength(3);
    expect(screen.getByText('30 000')).toBeInTheDocument();
    expect(screen.getByText('Refusjon')).toBeInTheDocument();
    expect(screen.getByText('Nei')).toBeInTheDocument();
    expect(screen.getByText('Kontaktinfo')).toBeInTheDocument();
    expect(screen.getByText('Corpolarsen')).toBeInTheDocument();
    expect(screen.getByText('Tlf. 41925090')).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding er mottatt, men arbeidsforholdet er ikke registrert i A-ordningen')).toBeInTheDocument();

    expect(screen.getByText('Lagre')).toBeDisabled();
    expect(screen.queryByText('Bekreft og fortsett')).not.toBeInTheDocument();
    expect(screen.queryByText('Sett på vent')).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Jeg kontakter arbeidsgiver'));

    userEvent.paste(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

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

  it('skal avklare manglende arbeidsforhold og så se bort fra inntektsmelding', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<AvklarManglendeArbeidsforhold submitCallback={bekrefteAksjonspunkt} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Se bort fra inntektsmeldingen'));

    userEvent.paste(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

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

  it('skal avklare manglende arbeidsforhold og så opprette arbeidsforhold', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const registrerArbeidsforhold = jest.fn(() => Promise.resolve());

    const utils = render(<AvklarManglendeArbeidsforhold submitCallback={bekrefteAksjonspunkt} registrerArbeidsforhold={registrerArbeidsforhold} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Opprett arbeidsforhold basert på inntektsmeldingen'));

    const periodeFra = screen.getByText('Periode fra');
    userEvent.type(periodeFra, '01.02.2020');
    fireEvent.blur(periodeFra);

    const periodeTil = screen.getByText('Periode til');
    userEvent.type(periodeTil, '01.02.2022');
    fireEvent.blur(periodeTil);

    userEvent.paste(utils.getByLabelText('Stillingsprosent'), '100');
    userEvent.paste(utils.getByLabelText('Begrunn valget'), 'Dette er en begrunnelse');

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

  it('skal vise at arbeidsforhold er manuelt opprettet og at behandling er avsluttet', async () => {
    render(<AvklarManglendeArbeidsforholdDerBehandlingErAvsluttet />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByAltText('Åpne rad'));
    expect(await screen.findByAltText('Lukk rad')).toBeInTheDocument();

    const radioKnapp = screen.getByRole('radio', { hidden: true });
    expect(radioKnapp).toBeInTheDocument();
    expect(radioKnapp).toBeDisabled();
    expect(screen.getByText('Jeg opprettet arbeidsforhold fordi...')).toBeInTheDocument();
  });

  it('skal kunne åpne for ny vurdering når aksjonspunkt er løst men behandling er åpen', async () => {
    const åpneForNyVurdering = jest.fn(() => Promise.resolve());

    render(
      <AvklarManglendeOpplysningerDerAksjonspunktErBekreftetOgTilbakehoppMulig
        åpneForNyVurdering={åpneForNyVurdering}
      />,
    );

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Ved å bruke "Åpne for ny vurdering" kan du endre valg som er '
    + 'gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.')).toBeInTheDocument();

    userEvent.click(screen.getByText('Åpne for ny vurdering'));

    await waitFor(() => expect(åpneForNyVurdering).toHaveBeenCalledTimes(1));
  });

  it('skal kunne åpne for ny revurdering når en ikke har hatt aksjonspunkter men er overstyrer', async () => {
    const åpneForNyVurdering = jest.fn(() => Promise.resolve());

    render(
      <IngenAksjonspunktMenTilbakehoppMuligForOverstyrer
        åpneForNyVurdering={åpneForNyVurdering}
      />,
    );

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText('Ved å bruke "Åpne for ny vurdering" kan du endre valg som er '
    + 'gjort i dette panelet. Det som er gjort senere i saken, må gjøres på ny.')).toBeInTheDocument();

    userEvent.click(screen.getByAltText('Åpne rad'));
    expect(await screen.findByAltText('Lukk rad')).toBeInTheDocument();

    expect(screen.queryByRole('radio', { hidden: true })).not.toBeInTheDocument();

    userEvent.click(screen.getByText('Åpne for ny vurdering'));

    await waitFor(() => expect(åpneForNyVurdering).toHaveBeenCalledTimes(1));
  });

  it('skal legge til nytt arbeidsforhold (Har overstyringsrettighet)', async () => {
    const bekrefteAksjonspunkt = jest.fn(() => Promise.resolve());
    const registrerArbeidsforhold = jest.fn(() => Promise.resolve());

    const utils = render(
      <SkalKunneLeggeTilNyttArbeidsforholdNårIngenArbeidsforholdEllerInntektsmeldingerFinnesOgEnHarReåpnetOgEnErOverstyrer
        submitCallback={bekrefteAksjonspunkt}
        registrerArbeidsforhold={registrerArbeidsforhold}
      />,
    );

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByText(
      'Ingen arbeidsforhold eller inntektsmeldinger registrert på bruker. Det er kun unntaksvis at det skal '
      + 'opprettes manuelle arbeidsforhold. Det kan være i saker søker er ambassadepersonell, utenlandske '
      + 'ansatte eller fisker. Hvis det er andre arbeidsforhold må du kontakte arbeidsgiver eller søker for riktig registrering i AA-reg.',
    )).toBeInTheDocument();
    expect(screen.queryByText('Legg til arbeidsforhold')).not.toBeInTheDocument();

    userEvent.click(screen.getByAltText('Overstyr'));

    userEvent.click(screen.getByText('Legg til arbeidsforhold'));

    userEvent.paste(utils.getByLabelText('Navn på arbeidsgiver'), 'Telenor');

    const periodeFra = screen.getByText('Periode fra');
    userEvent.type(periodeFra, '01.02.2020');
    fireEvent.blur(periodeFra);

    const periodeTil = screen.getByText('Periode til');
    userEvent.type(periodeTil, '01.02.2022');
    fireEvent.blur(periodeTil);

    userEvent.paste(utils.getByLabelText('Stillingsprosent'), '100');
    userEvent.paste(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

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
      <ArbeidsforholdErManueltLagtTilOgLagretOgReåpnet
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
    expect(screen.getByText('Velferdspermisjon')).toBeInTheDocument();
    expect(screen.getByText('01.10.2022 - 01.12.2022')).toBeInTheDocument();
    expect(screen.getAllByText('Inntektsmelding')).toHaveLength(2);
    expect(screen.getByText('30 000')).toBeInTheDocument();
    expect(screen.getByText('Refusjon')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløp')).toBeInTheDocument();
    expect(screen.getByText('20 000')).toBeInTheDocument();
    expect(screen.getByText('Kontaktinfo')).toBeInTheDocument();
    expect(screen.getByText('Corpolarsen')).toBeInTheDocument();
    expect(screen.getByText('Tlf. 41925090')).toBeInTheDocument();
  });

  it('skal vise to arbeidsforhold fra samme virksomhet som er komplette', async () => {
    render(<ArbeidsforholdErOKDerDetErToArbeidsforholdFraSammeVirksomhet />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();
    expect(screen.getByAltText('Arbeidsforhold er OK')).toBeInTheDocument();
    expect(screen.queryByAltText('Åpent aksjonspunkt')).not.toBeInTheDocument();
    expect(screen.queryByAltText('Lukk rad')).not.toBeInTheDocument();

    userEvent.click(screen.getByAltText('Åpne rad'));

    expect(await screen.findByAltText('Lukk rad')).toBeInTheDocument();

    expect(screen.getAllByText('ID')).toHaveLength(2);
    expect(screen.getByText('ARB001-001')).toBeInTheDocument();
    expect(screen.getByText('ARB001-002')).toBeInTheDocument();
    expect(screen.getAllByText('Periode')).toHaveLength(3);
    expect(screen.getAllByText('06.12.2019 -')).toHaveLength(2);
    expect(screen.getByText('01.12.2021 -')).toBeInTheDocument();
    expect(screen.getAllByText('Stillingsprosent')).toHaveLength(2);
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();

    expect(screen.getAllByText('Inntektsmelding mottatt')).toHaveLength(2);
    expect(screen.queryByText('30 000')).not.toBeInTheDocument();

    userEvent.click(screen.getAllByText('Vis mer')[0]);

    expect(await screen.findAllByText('Inntektsmelding')).toHaveLength(2);
    expect(screen.getByText('30 000')).toBeInTheDocument();
    expect(screen.getByText('Refusjon')).toBeInTheDocument();
    expect(screen.getByText('Ja')).toBeInTheDocument();
    expect(screen.getByText('Refusjonsbeløp')).toBeInTheDocument();
    expect(screen.getByText('20 000')).toBeInTheDocument();
    expect(screen.getByText('Kontaktinfo')).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Vis mindre')[0]);

    expect(await screen.getAllByText('Vis mer')).toHaveLength(2);
  });

  it('skal ha aksjonspunkt og vise flere arbeidsforhold i tabell', async () => {
    const settPåVent = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(<FlereArbeidsforholdOgInntekstemeldinger settBehandlingPåVentCallback={settPåVent} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    userEvent.click(screen.getByText('Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding'));

    userEvent.paste(utils.getAllByLabelText('Begrunn valget')[0], 'Dette er en begrunnelse');

    userEvent.click(screen.getAllByText('Lagre')[0]);

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909090',
      begrunnelse: 'Dette er en begrunnelse',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: 'bc9a409c-a15f-4416-856b-5b1ee42eb75d',
      vurdering: 'KONTAKT_ARBEIDSGIVER_VED_MANGLENDE_INNTEKTSMELDING',
    });

    userEvent.click(screen.getByText('Jeg kontakter arbeidsgiver'));

    userEvent.paste(utils.getAllByLabelText('Begrunn valget')[1], 'Dette er begrunnelse nr 2');

    userEvent.click(screen.getAllByText('Lagre')[1]);

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(2));
    expect(lagreVurdering).toHaveBeenNthCalledWith(2, {
      arbeidsgiverIdent: '910909092',
      begrunnelse: 'Dette er begrunnelse nr 2',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: undefined,
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

  it('skal vise to arbeidsforhold fra samme virksomhet der kun ett har fått inntektsmelding', async () => {
    const settPåVent = jest.fn(() => Promise.resolve());
    const lagreVurdering = jest.fn(() => Promise.resolve());

    const utils = render(
      <ArbeidsforholdMedSammeOrgNrDerEnManglerInntektsmeldingMenIkkeDetAndre settBehandlingPåVentCallback={settPåVent} lagreVurdering={lagreVurdering} />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    expect(screen.getByText('Ikke mottatt')).toBeInTheDocument();

    expect(screen.getAllByText('ID')).toHaveLength(2);
    expect(screen.getByText('93745463826748464534527202413273848373563636353542...')).toBeInTheDocument();
    expect(screen.getByText('2433453225')).toBeInTheDocument();
    expect(screen.getAllByText('Periode')).toHaveLength(3);
    expect(screen.getAllByText('06.06.2019 - 31.12.2021')).toHaveLength(3);
    expect(screen.getAllByText('Stillingsprosent')).toHaveLength(2);
    expect(screen.getAllByText('80%')).toHaveLength(2);
    expect(screen.getByText('Velferdspermisjon')).toBeInTheDocument();
    expect(screen.getByText('01.10.2022 - 01.12.2022')).toBeInTheDocument();
    expect(screen.getByText('Permittering')).toBeInTheDocument();
    expect(screen.getByText('01.10.2022 -')).toBeInTheDocument();

    expect(screen.getByText('Ikke mottatt inntektsmelding')).toBeInTheDocument();
    expect(screen.getByText('Inntektsmelding mottatt')).toBeInTheDocument();

    expect(screen.getByText('Inntekter totalt fra virksomheten (fra A-ordningen)')).toBeInTheDocument();

    userEvent.click(screen.getByText('Jeg tar kontakt med søker eller arbeidsgiver for å innhente inntektsmelding'));

    userEvent.paste(utils.getByLabelText('Kommentar'), 'Dette er en kommentar');

    userEvent.click(screen.getByText('Lagre'));

    await waitFor(() => expect(lagreVurdering).toHaveBeenCalledTimes(1));
    expect(lagreVurdering).toHaveBeenNthCalledWith(1, {
      arbeidsgiverIdent: '910909088',
      begrunnelse: 'Dette er en kommentar',
      behandlingUuid: '1223-2323-2323-22332',
      internArbeidsforholdRef: undefined,
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

  it('skal inntektsmelding før registerinnhenting', async () => {
    render(<FoerRegisterinnhenting />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    expect(screen.getByAltText('Arbeidsforhold er OK')).toBeInTheDocument();
    expect(screen.queryByAltText('Åpent aksjonspunkt')).not.toBeInTheDocument();

    expect(screen.getByAltText('Åpne rad')).toBeInTheDocument();
  });

  it('skal automatisk ignorere at inntektsmelding mangler', async () => {
    render(<AutomatiskIgnorertInntektsmelding />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    expect(screen.getByAltText('Arbeidsforhold er OK')).toBeInTheDocument();

    userEvent.click(screen.getByAltText('Åpne rad'));
    expect(await screen.findByAltText('Lukk rad')).toBeInTheDocument();

    expect(screen.getByText('Stillingsprosent')).toBeInTheDocument();
    expect(screen.getByText('20%')).toBeInTheDocument();
    expect(screen.getByText('Ingen inntekt registrert på bruker i A-ordningen siste seks mnd.')).toBeInTheDocument();
  });

  it('skal ha mottatt etterspurt innnteksmelding og kan da gå videre', async () => {
    render(<EtterAtEtterspurtInntektsmeldingErKommet />);

    expect(await screen.findByText('Fakta om arbeid og inntekt')).toBeInTheDocument();

    expect(screen.getByText('Innhent manglende inntektsmeldinger.')).toBeInTheDocument();
    expect(screen.getAllByAltText('Arbeidsforhold er OK')).toHaveLength(2);

    expect(screen.getByText('Bekreft og fortsett')).toBeInTheDocument();
  });
});
