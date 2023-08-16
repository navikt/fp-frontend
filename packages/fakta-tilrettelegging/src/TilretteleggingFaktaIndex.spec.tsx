import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/react';
import * as stories from './TilretteleggingFaktaIndex.stories';

const { TilretteleggingMedVelferdspermisjon, SokerVarIkkeAnsattDaBehovetForTilretteleggingOppsto } =
  composeStories(stories);

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
    expect(screen.getByText('15.08.2020 - 16.10.2020')).toBeInTheDocument();

    await userEvent.type(utils.getByLabelText('Begrunn endringene'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('Bekreft og fortsett'));

    expect(await screen.findByText('Ikke alle velferdspermisjoner er vurdert')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getAllByText('Oppdater')[0]);

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

  it('skal legge til tilretteleggingsbehov', async () => {
    const bekreft = vi.fn(() => Promise.resolve());

    render(<TilretteleggingMedVelferdspermisjon submitCallback={bekreft} />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();
  });

  it('skal vise feilmelding når en ikke har valgt noen arbeidsforhold', async () => {
    render(<TilretteleggingMedVelferdspermisjon />);

    expect(
      await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver og om velferdspermisjonene stemmer'),
    ).toBeInTheDocument();
  });

  it('skal vise arbeidsforhold det søkt tilrettelegging men ikke kan beregnes svangeskapspenger for', async () => {
    const bekreft = vi.fn(() => Promise.resolve());

    render(<SokerVarIkkeAnsattDaBehovetForTilretteleggingOppsto submitCallback={bekreft} />);

    expect(await screen.findByText('Kontroller opplysninger fra jordmor og arbeidsgiver')).toBeInTheDocument();
  });
});
