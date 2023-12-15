import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import * as stories from './TilretteleggingFaktaIndex.stories';

const {
  TilretteleggingMedVelferdspermisjon,
  HarOpphold,
  SokerVarIkkeAnsattDaBehovetForTilretteleggingOppsto,
  TilretteleggingMed100ProsentVelferdspermisjon,
} = composeStories(stories);

const lagNyDato = (nyDato: string) => {
  const backspace = [...Array(10)].reduce(prev => `${prev}{backspace}`, '');
  return backspace + nyDato;
};

describe('<FodselOgTilretteleggingFaktaIndex>', () => {
  it('skal vurdere velferdspermisjon og så bekrefte aksjonspunkt', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<TilretteleggingMedVelferdspermisjon submitCallback={lagre} />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    expect(screen.getByText('Arbeidsgiveren AS')).toBeInTheDocument();
    expect(screen.getByText('100% stilling')).toBeInTheDocument();
    expect(screen.getByText('Skal ha svangerskapspenger')).toBeInTheDocument();
    expect(screen.getByText('Skal ha svangerskapspenger for arbeidsforholdet')).toBeInTheDocument();
    expect(screen.getByText('Dato for tilrettelegging fra lege eller jordmor')).toBeInTheDocument();

    expect(screen.getByText('Registrerte velferdspermisjoner')).toBeInTheDocument();
    expect(screen.getByText('17.02.2020 - 12.07.2020')).toBeInTheDocument();
    expect(screen.getByText('50% velferdspermisjon')).toBeInTheDocument();
    expect(screen.getByText('AA-registeret')).toBeInTheDocument();

    expect(screen.getByText('Perioder')).toBeInTheDocument();
    expect(screen.getByText('17.03.2020 - 14.08.2020')).toBeInTheDocument();
    expect(screen.getByText('15.08.2020 - 15.10.2020')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Ikke alle velferdspermisjoner er vurdert')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getAllByText('Oppdater')[0]);

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5091',
      begrunnelse: 'Dette er en begrunnelse',
      fødselsdato: undefined,
      termindato: '2020-11-06',
      bekreftetSvpArbeidsforholdList: [
        {
          arbeidsgiverReferanse: '999999999',
          avklarteOppholdPerioder: [],
          eksternArbeidsforholdReferanse: '23422323',
          kanTilrettelegges: true,
          kopiertFraTidligereBehandling: true,
          mottattTidspunkt: '2020-03-11T16:21:48.532298',
          skalBrukes: true,
          tilretteleggingBehovFom: '2020-03-17',
          tilretteleggingDatoer: [
            {
              fom: '2020-03-17',
              kilde: 'SØKNAD',
              mottattDato: '2020-02-20',
              overstyrtUtbetalingsgrad: 0,
              stillingsprosent: 50,
              type: 'DELVIS_TILRETTELEGGING',
            },
            {
              fom: '2020-08-15',
              kilde: 'SØKNAD',
              mottattDato: '2020-02-20',
              type: 'HEL_TILRETTELEGGING',
            },
          ],
          tilretteleggingId: 1116961,
          uttakArbeidType: 'FRILANS',
          velferdspermisjoner: [
            {
              erGyldig: true,
              permisjonFom: '2020-02-17',
              permisjonTom: '2020-07-12',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
            {
              permisjonFom: '2019-08-06',
              permisjonTom: '2019-08-06',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
            {
              permisjonFom: '2019-10-03',
              permisjonTom: '2019-10-03',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
          ],
        },
      ],
    });
  });

  it('skal validere at en må velge minst ett arbeidsforhold og at alle velferdspermisjoner er vurdert', async () => {
    const utils = render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Skal ha svangerskapspenger for arbeidsforholdet'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Ikke alle velferdspermisjoner er vurdert')).toBeInTheDocument();
    expect(screen.getByText('Minst ett arbeidsforhold må brukes')).toBeInTheDocument();
  });

  it('skal validere at en må ferdigstille tilretteleggingsperiode som er lagt til', async () => {
    const utils = render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Periode med svangerskapspenger'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Det er minst en periode som er lagt til men ikke ferdigstilt')).toBeInTheDocument();
  });

  it('skal validere at en må ferdigstille oppholdsperiode som er lagt til', async () => {
    const utils = render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Opphold'));

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Det er minst en periode som er lagt til men ikke ferdigstilt')).toBeInTheDocument();
  });

  it('skal validere at dato for tilrettelegging fra lege eller jordmor må være før termindato', async () => {
    const utils = render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    const dato = screen.getByText('Dato for tilrettelegging fra lege eller jordmor');
    await userEvent.type(dato, '{backspace}1');
    fireEvent.blur(dato);

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Tilrettelegging fra og med må være tidligere enn 15.10.2020')).toBeInTheDocument();
  });

  it('skal validere at dato for tilrettelegging må være minst tre uker før termindato', async () => {
    render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));
    await userEvent.click(screen.getByText('Oppdater'));

    const dato = screen.getAllByText('Fra og med')[0];
    await userEvent.type(dato, '{backspace}1');
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Dato kan ikke være senere enn tre uker før termindato')).toBeInTheDocument();
  });

  it('skal validere at dato for tilrettelegging må være lik eller etter dato for tilrettelegging fra lege eller jordmor', async () => {
    render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));
    await userEvent.click(screen.getByText('Oppdater'));

    const dato = screen.getAllByText('Fra og med')[0];
    await userEvent.type(dato, lagNyDato('16.03.2020'));
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(
      await screen.findByText('Dato kan ikke være før dato for tilrettelegging fra lege eller jordmor'),
    ).toBeInTheDocument();
  });

  it('skal validere alle tilrettelegginger har unike fra og med datoer', async () => {
    render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));
    await userEvent.click(screen.getByText('Oppdater'));

    const dato = screen.getAllByText('Fra og med')[0];
    await userEvent.type(dato, lagNyDato('15.08.2020'));
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Flere perioder med samme Fra og med')).toBeInTheDocument();
  });

  it('skal legge til ny tilretteleggingsperiode', async () => {
    const utils = render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));
    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.click(screen.getByText('Periode med svangerskapspenger'));

    expect(await screen.findByText('Periode')).toBeInTheDocument();
    expect(screen.getByText('Tilrettelegging')).toBeInTheDocument();
    expect(screen.getByText('Saksbehandler')).toBeInTheDocument();
    expect(screen.getByText('Legg til ny periode')).toBeInTheDocument();
    expect(screen.getAllByText('Avbryt')).toHaveLength(3);

    await userEvent.click(screen.getAllByText('Arbeidstakeren kan fortsette med redusert arbeidstid')[2]);

    await userEvent.click(screen.getByText('Legg til ny periode'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const dato = screen.getAllByText('Fra og med')[2];
    await userEvent.type(dato, lagNyDato('15.09.2020'));
    fireEvent.blur(dato);

    await userEvent.type(utils.getByLabelText('Arbeidsprosent'), '40');

    await userEvent.click(screen.getByText('Legg til ny periode'));

    expect(await screen.findByText('15.08.2020 - 14.09.2020')).toBeInTheDocument();
    expect(screen.getByText('15.09.2020 - 15.10.2020')).toBeInTheDocument();
  });

  it('skal slette tilretteleggingsperiode og da endre sluttdato for den perioden som er igjen', async () => {
    render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));
    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.click(screen.getAllByText('Slett periode')[1]);

    expect(await screen.findByText('17.03.2020 - 15.10.2020')).toBeInTheDocument();
  });

  it('skal legge til ny oppholdsperiode', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    const utils = render(<TilretteleggingMedVelferdspermisjon submitCallback={lagre} />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));
    await userEvent.click(screen.getByText('Oppdater'));

    await userEvent.click(screen.getByText('Opphold'));

    expect(await screen.findByText('Periode')).toBeInTheDocument();
    expect(screen.getAllByText('Opphold')).toHaveLength(2);
    expect(screen.getByText('Saksbehandler')).toBeInTheDocument();
    expect(screen.getByText('Legg til ny periode')).toBeInTheDocument();
    expect(screen.getAllByText('Avbryt')).toHaveLength(3);

    await userEvent.click(screen.getByText('Ferie'));

    await userEvent.click(screen.getByText('Legg til ny periode'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(2);

    const fomDato = screen.getAllByText('Fra og med')[2];
    await userEvent.type(fomDato, lagNyDato('14.07.2020'));
    fireEvent.blur(fomDato);

    const tomDato = screen.getByText('Til og med');
    await userEvent.type(tomDato, lagNyDato('25.07.2020'));
    fireEvent.blur(tomDato);

    await userEvent.click(screen.getByText('Legg til ny periode'));

    expect(await screen.findByText('14.07.2020 - 25.07.2020')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getAllByText('Oppdater')[0]);

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      kode: '5091',
      begrunnelse: 'Dette er en begrunnelse',
      fødselsdato: undefined,
      termindato: '2020-11-06',
      bekreftetSvpArbeidsforholdList: [
        {
          arbeidsgiverReferanse: '999999999',
          avklarteOppholdPerioder: [
            {
              fom: '2020-07-14',
              oppholdÅrsak: 'FERIE',
              tom: '2020-07-25',
            },
          ],
          eksternArbeidsforholdReferanse: '23422323',
          kanTilrettelegges: true,
          kopiertFraTidligereBehandling: true,
          mottattTidspunkt: '2020-03-11T16:21:48.532298',
          skalBrukes: true,
          tilretteleggingBehovFom: '2020-03-17',
          tilretteleggingDatoer: [
            {
              fom: '2020-03-17',
              overstyrtUtbetalingsgrad: 0,
              kilde: 'SØKNAD',
              mottattDato: '2020-02-20',
              stillingsprosent: 50,
              type: 'DELVIS_TILRETTELEGGING',
            },
            {
              fom: '2020-08-15',
              kilde: 'SØKNAD',
              mottattDato: '2020-02-20',
              type: 'HEL_TILRETTELEGGING',
            },
          ],
          tilretteleggingId: 1116961,
          uttakArbeidType: 'FRILANS',
          velferdspermisjoner: [
            {
              erGyldig: true,
              permisjonFom: '2020-02-17',
              permisjonTom: '2020-07-12',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
            {
              permisjonFom: '2019-08-06',
              permisjonTom: '2019-08-06',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
            {
              permisjonFom: '2019-10-03',
              permisjonTom: '2019-10-03',
              permisjonsprosent: 50,
              type: 'VELFERDSPERMISJON',
            },
          ],
        },
      ],
    });
  });

  it('skal slette oppholdsperiode', async () => {
    render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Slett periode')[1]);

    await waitFor(() => expect(screen.queryByText('15.09.2020 - 20.09.2020')).not.toBeInTheDocument());
  });

  it('skal validere at opphold ikke har overlappende fom-dato med andre perioder', async () => {
    render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    const dato = screen.getAllByText('Fra og med')[1];
    await userEvent.type(dato, lagNyDato('17.03.2020'));
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Flere perioder med samme Fra og med')).toBeInTheDocument();

    await userEvent.type(dato, lagNyDato('25.09.2020'));
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Flere perioder med samme Fra og med')).toBeInTheDocument();
  });

  it('skal validere at dato for opphold må være minst tre uker før termindato', async () => {
    render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    const dato = screen.getAllByText('Fra og med')[1];
    await userEvent.type(dato, '{backspace}1');
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Dato kan ikke være senere enn tre uker før termindato')).toBeInTheDocument();
  });

  it('skal validere at dato for opphold må være lik eller etter dato for første tilrettelegging', async () => {
    render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    const dato = screen.getAllByText('Fra og med')[1];
    await userEvent.type(dato, lagNyDato('16.03.2020'));
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Dato kan ikke være før første tilrettelegging')).toBeInTheDocument();
  });

  it('skal validere at opphold ikke overlapper med annet opphold', async () => {
    render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    const tomDato = screen.getAllByText('Til og med')[0];
    await userEvent.type(tomDato, lagNyDato('26.09.2020'));
    fireEvent.blur(tomDato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Perioder kan ikke overlappe i tid')).toBeInTheDocument();
  });

  it('skal validere at tom-datoen til opphold er etter fom-datoen', async () => {
    render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    const dato = screen.getAllByText('Fra og med')[1];
    await userEvent.type(dato, lagNyDato('21.09.2020'));
    fireEvent.blur(dato);

    await userEvent.click(screen.getAllByText('Oppdater')[1]);

    expect(await screen.findByText('Dato kan ikke være før fra og med')).toBeInTheDocument();
  });

  it('skal ikke kunne endre eller slette opphold som kommer fra søknaden', async () => {
    render(<HarOpphold />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    // Kun for manuelt lagt til opphold kan en velge "sykepenger...". Derfor kun ett innslag i DOM
    expect(screen.getByText('Sykepenger 100% i perioden med svangerskapspenger')).toBeInTheDocument();

    // Kun for tilretteleggingene og manuelt lagt til opphold kan en slette.
    expect(screen.getAllByText('Slett periode')).toHaveLength(3);
  });

  it('skal vise advarsel når søker ikke var ansatt da behovet for tilrettelegging oppstod', async () => {
    render(<SokerVarIkkeAnsattDaBehovetForTilretteleggingOppsto />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();

    expect(screen.getAllByText('Svangerskapspenger kan ikke beregnes')).toHaveLength(1);
    expect(
      screen.getAllByText(
        'Søker var ikke ansatt da behovet for tilrettelegging oppsto. Vurder om du skal kontakte arbeidsgiver ' +
          'eller søker for avklaring. Hvis du innvilger behandlingen nå, vil bruker få 0 kroner utbetalt.',
      ),
    ).toHaveLength(1);

    await userEvent.click(screen.getAllByText('Skal ha svangerskapspenger for arbeidsforholdet')[0]);

    expect(await screen.findByText('Skal ikke ha svangerskapspenger')).toBeInTheDocument();
  });

  it('skal vise infoboks når en velger at en 100% permisjon er gyldig og feilmelding om en bekrefter ved å velge arbeidsforhold på ny', async () => {
    const lagre = vi.fn(() => Promise.resolve());

    render(<TilretteleggingMed100ProsentVelferdspermisjon submitCallback={lagre} />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    expect(
      await screen.findByText(
        'Permisjonen på 100% er satt som gyldig, og dette fører til at søker ikke får svangerskapsenger for arbeidsforholdet.',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Oppdater')[0]);

    await userEvent.click(screen.getAllByText('Skal ha svangerskapspenger for arbeidsforholdet')[0]);

    await userEvent.type(screen.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(
      await screen.findByText('Arbeidsforhold med gyldig permisjon på 100% kan ikke ha svangerskapspenger'),
    ).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Skal ha svangerskapspenger for arbeidsforholdet')[0]);

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
  });
});
