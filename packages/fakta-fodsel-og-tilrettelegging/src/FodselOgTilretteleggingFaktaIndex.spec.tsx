import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FodselOgTilretteleggingFaktaIndex.stories';

const {
  TilretteleggingMedVelferdspermisjon,
  ErOverstyrer,
  AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende,
} = composeStories(stories);

describe('<FodselOgTilretteleggingFaktaIndex>', () => {
  it('skal sjekke valideringer og så bekrefte aksjonspunkt for velferdspermisjon', async () => {
    const bekreft = jest.fn(() => Promise.resolve());

    const utils = render(<TilretteleggingMedVelferdspermisjon submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    const termindato = utils.getByLabelText('Termindato');
    await userEvent.clear(termindato);
    await userEvent.type(termindato, '06.11.2015');

    const begrunnEndringene = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnEndringene, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Tilrettelegging fra og med må være tidligere enn 16.10.2015')).toBeInTheDocument();

    await userEvent.clear(termindato);
    await userEvent.type(termindato, '06.11.2020');

    const dato = utils.getAllByLabelText('Dato')[0];
    await userEvent.clear(dato);
    await userEvent.type(dato, '15.10.2020');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Flere like datoer.')).toBeInTheDocument();

    await userEvent.clear(dato);
    await userEvent.type(dato, '16.10.2020');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekreft).toHaveBeenCalledTimes(1));
    expect(bekreft).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      bekreftetSvpArbeidsforholdList: [{
        arbeidsgiverReferanse: '999999999',
        kanTilrettelegges: true,
        kopiertFraTidligereBehandling: true,
        mottattTidspunkt: '2020-03-11T16:21:48.532298',
        'permisjon2019-08-06': true,
        'permisjon2019-10-03': true,
        'permisjon2020-02-17': true,
        skalBrukes: true,
        tilretteleggingBehovFom: '2020-03-17',
        tilretteleggingDatoer: [{
          fom: '2020-10-16',
          overstyrtUtbetalingsgrad: undefined,
          stillingsprosent: undefined,
          type: 'INGEN_TILRETTELEGGING',
        }, {
          fom: '2020-10-15',
          overstyrtUtbetalingsgrad: null,
          stillingsprosent: undefined,
          type: 'HEL_TILRETTELEGGING',
        }],
        tilretteleggingId: 1116961,
        uttakArbeidType: 'FRILANS',
        velferdspermisjoner: [{
          erGyldig: true,
          permisjonFom: '2020-02-17',
          permisjonTom: '2020-07-12',
          permisjonsprosent: 50,
          type: 'VELFERDSPERMISJON',
        }],
      }],
      fødselsdato: undefined,
      kode: '5091',
      termindato: '2020-11-06',
    });
  });

  it('skal legge til tilretteleggingsbehov', async () => {
    const bekreft = jest.fn(() => Promise.resolve());

    const utils = render(<TilretteleggingMedVelferdspermisjon submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    expect(screen.getAllByText('Dato')).toHaveLength(2);

    await userEvent.click(screen.getByText('Legg til tilretteleggingsbehov'));

    expect(await screen.findAllByText('Dato')).toHaveLength(3);

    await userEvent.selectOptions(utils.getAllByLabelText('Tilretteleggingsbehov')[2], 'DELVIS_TILRETTELEGGING');

    expect(await screen.findByText('Stillingsprosent skal oppgis ut fra en 100% stilling')).toBeInTheDocument();

    const dato = utils.getAllByLabelText('Dato')[2];
    await userEvent.type(dato, '06.11.2020');

    expect(screen.getByText('Utbetalingsgrad (%)')).toBeInTheDocument();

    const stillingsprosent = utils.getByLabelText('Stillingsprosent');
    await userEvent.type(stillingsprosent, '40');

    expect(screen.getAllByText('Utbetalingsgrad (%)')).toHaveLength(2);
    expect(screen.getByText('20.00')).toBeInTheDocument();

    const begrunnEndringene = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnEndringene, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekreft).toHaveBeenCalledTimes(1));
    expect(bekreft).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      bekreftetSvpArbeidsforholdList: [{
        arbeidsgiverReferanse: '999999999',
        kanTilrettelegges: true,
        kopiertFraTidligereBehandling: true,
        mottattTidspunkt: '2020-03-11T16:21:48.532298',
        'permisjon2019-08-06': true,
        'permisjon2019-10-03': true,
        'permisjon2020-02-17': true,
        skalBrukes: true,
        tilretteleggingBehovFom: '2020-03-17',
        tilretteleggingDatoer: [{
          fom: '2020-03-17',
          overstyrtUtbetalingsgrad: undefined,
          stillingsprosent: undefined,
          type: 'INGEN_TILRETTELEGGING',
        }, {
          fom: '2020-10-15',
          overstyrtUtbetalingsgrad: null,
          stillingsprosent: undefined,
          type: 'HEL_TILRETTELEGGING',
        }, {
          fom: '2020-11-06',
          overstyrtUtbetalingsgrad: undefined,
          stillingsprosent: '40.00',
          type: 'DELVIS_TILRETTELEGGING',
        }],
        tilretteleggingId: 1116961,
        uttakArbeidType: 'FRILANS',
        velferdspermisjoner: [{
          erGyldig: true,
          permisjonFom: '2020-02-17',
          permisjonTom: '2020-07-12',
          permisjonsprosent: 50,
          type: 'VELFERDSPERMISJON',
        }],
      }],
      fødselsdato: undefined,
      kode: '5091',
      termindato: '2020-11-06',
    });
  });

  it('skal vise feilmelding når en ikke har valgt noen tilrettelegginger', async () => {
    render(<TilretteleggingMedVelferdspermisjon />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Søker har søkt svangerskapspenger for dette arbeidsforholdet'));

    expect(await screen.findByText('Minst en tilrettelegging må brukes.')).toBeInTheDocument();

    expect(screen.getByText('Bekreft og fortsett')).toBeInTheDocument();
  });

  it('skal overstyre utbetalingsgrad og så lagre', async () => {
    const bekreft = jest.fn(() => Promise.resolve());

    const utils = render(<ErOverstyrer submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getByAltText('Endre utbetalingsgrad'));

    const utbetalingsgrad = utils.getByLabelText('Utbetalingsgrad (%)');
    await userEvent.clear(utbetalingsgrad);
    await userEvent.type(utbetalingsgrad, '70');

    const begrunnEndringene = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnEndringene, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekreft).toHaveBeenCalledTimes(1));
    expect(bekreft).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      bekreftetSvpArbeidsforholdList: [{
        arbeidsgiverReferanse: '999999999',
        kanTilrettelegges: true,
        kopiertFraTidligereBehandling: true,
        mottattTidspunkt: '2020-03-11T16:21:48.532298',
        'permisjon2019-08-06': true,
        'permisjon2019-10-03': true,
        'permisjon2020-02-17': true,
        skalBrukes: true,
        tilretteleggingBehovFom: '2020-03-17',
        tilretteleggingDatoer: [{
          fom: '2020-03-17',
          overstyrtUtbetalingsgrad: '70.00',
          stillingsprosent: undefined,
          type: 'INGEN_TILRETTELEGGING',
        }, {
          fom: '2020-10-15',
          overstyrtUtbetalingsgrad: null,
          stillingsprosent: undefined,
          type: 'HEL_TILRETTELEGGING',
        }],
        tilretteleggingId: 1116961,
        uttakArbeidType: 'FRILANS',
        velferdspermisjoner: [{
          erGyldig: true,
          permisjonFom: '2020-02-17',
          permisjonTom: '2020-07-12',
          permisjonsprosent: 50,
          type: 'VELFERDSPERMISJON',
        }],
      }],
      fødselsdato: undefined,
      kode: '5091',
      termindato: '2020-11-06',
    });
  });

  it('skal vise arbeidsforhold det søkt tilrettelegging men ikke kan beregnes svangeskapspenger for', async () => {
    const bekreft = jest.fn(() => Promise.resolve());

    const utils = render(<AksjonspunktForFødselstilretteleggingForFrilanserOgSelvstendigNæringsdrivende submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();
    expect(screen.getByText('Det er søkt for et org.nr. eller fødselsnummer der søker ikke var ansatt da behovet for tilrettelegging oppsto. '
    + 'Vurder om du skal kontakte arbeidsgiver eller søker for avklaring. Hvis du innvilger behandlingen nå, vil bruker få 0 kroner utbetalt.',
    )).toBeInTheDocument();

    expect(screen.getByText('Frilanser, samlet aktivitet (973861778)')).toBeInTheDocument();
    expect(screen.getByText('Selvstendig næringsdrivende')).toBeInTheDocument();
    expect(screen.getAllByText('Jordmor/lege oppgir at tilrettelegging er nødvendig fra og med')).toHaveLength(2);
    expect(screen.getAllByText('01.10.2019')).toHaveLength(2);

    const begrunnEndringene = utils.getByLabelText('Begrunn endringene');
    await userEvent.type(begrunnEndringene, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(bekreft).toHaveBeenCalledTimes(1));
    expect(bekreft).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      bekreftetSvpArbeidsforholdList: [{
        arbeidsgiverReferanse: '1',
        skalBrukes: undefined,
        tilretteleggingBehovFom: '2019-10-01',
        tilretteleggingDatoer: [{
          fom: '2019-10-01',
          overstyrtUtbetalingsgrad: undefined,
          stillingsprosent: undefined,
          type: 'INGEN_TILRETTELEGGING',
        }],
        tilretteleggingId: 1008653,
        velferdspermisjoner: [],
      }, {
        arbeidsgiverReferanse: '2',
        skalBrukes: undefined,
        tilretteleggingBehovFom: '2019-10-01',
        tilretteleggingDatoer: [{
          fom: '2019-10-01',
          overstyrtUtbetalingsgrad: undefined,
          stillingsprosent: undefined,
          type: 'INGEN_TILRETTELEGGING',
        }],
        tilretteleggingId: 1008654,
        uttakArbeidType: 'ORDINÆRT_ARBEID',
        velferdspermisjoner: [],
      }],
      fødselsdato: undefined,
      kode: '5091',
      termindato: '2020-02-27',
    });
  });
});
