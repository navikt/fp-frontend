import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './PermisjonIndex.stories';

const { SokerErMor } = composeStories(stories);

describe('PermisjonIndex', () => {
  it('skal velge fullt uttak', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(
      await screen.findByText(
        'Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Fullt uttak')[1]!);

    await userEvent.selectOptions(screen.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomDatoInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomDatoInput, '20.05.2022');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomDatoInput, '20.06.2022');
    fireEvent.blur(tomDatoInput);

    await userEvent.click(screen.getAllByRole('checkbox')[2]!);

    expect(await screen.findByText('Prosentandel uttak')).toBeInTheDocument();

    const prosentUttakInput = screen.getByLabelText('Prosentandel uttak');
    await userEvent.type(prosentUttakInput, '100');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledExactlyOnceWith({
      tidsromPermisjon: {
        permisjonsPerioder: [
          {
            flerbarnsdager: false,
            harSamtidigUttak: true,
            samtidigUttaksprosent: '100.00',
            morsAktivitet: undefined,
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
            periodeType: 'MØDREKVOTE',
          },
        ],
        graderingPeriode: undefined,
        oppholdPerioder: undefined,
        overføringsperioder: undefined,
        utsettelsePeriode: undefined,
      },
    });
  });

  it('skal velge overføring av kvote', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Søker ønsker å overta kvote'));

    await userEvent.selectOptions(screen.getByLabelText('Angi årsak'), 'SYKDOM_ANNEN_FORELDER');

    const fomDatoInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomDatoInput, '20.05.2022');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomDatoInput, '20.06.2022');
    fireEvent.blur(tomDatoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledExactlyOnceWith({
      tidsromPermisjon: {
        overføringsperioder: [
          {
            overforingArsak: 'SYKDOM_ANNEN_FORELDER',
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
          },
        ],
        utsettelsePeriode: undefined,
        permisjonsPerioder: undefined,
        oppholdPerioder: undefined,
        graderingPeriode: undefined,
      },
    });
  });

  it('skal velge utsettelse', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Søker ønsker å utsette uttaket'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(4);

    await userEvent.selectOptions(screen.getByLabelText('Hva skal utsettes'), 'MØDREKVOTE');

    const fomDatoInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomDatoInput, '20.05.2022');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomDatoInput, '20.06.2022');
    fireEvent.blur(tomDatoInput);

    await userEvent.selectOptions(screen.getByLabelText('Årsak til utsettelse'), 'ARBEID');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.selectOptions(screen.getByLabelText('Type arbeid'), 'true');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledExactlyOnceWith({
      tidsromPermisjon: {
        utsettelsePeriode: [
          {
            arsakForUtsettelse: 'ARBEID',
            erArbeidstaker: 'true',
            periodeForUtsettelse: 'MØDREKVOTE',
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
          },
        ],
        graderingPeriode: undefined,
        oppholdPerioder: undefined,
        overføringsperioder: undefined,
        permisjonsPerioder: undefined,
      },
    });
  });

  it('skal velge gradering', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Søker ønsker å gradere uttaket'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(5);

    await userEvent.selectOptions(screen.getByLabelText('Hva skal graderes'), 'MØDREKVOTE');

    const fomDatoInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomDatoInput, '20.05.2022');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomDatoInput, '20.06.2022');
    fireEvent.blur(tomDatoInput);

    const prosentandelInput = screen.getAllByRole('textbox')[2]!;
    await userEvent.type(prosentandelInput, '100');

    const virksomhetsnummerInput = screen.getByLabelText('Virksomhetsnummer');
    await userEvent.type(virksomhetsnummerInput, '802323232');

    await userEvent.selectOptions(screen.getByLabelText('Type arbeid'), 'ARBEIDSTAKER');

    await userEvent.click(screen.getAllByRole('checkbox')[6]!);

    expect(await screen.findByText('Prosentandel uttak')).toBeInTheDocument();

    const prosentInput = screen.getByLabelText('Prosentandel uttak');
    await userEvent.type(prosentInput, '100');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledExactlyOnceWith({
      tidsromPermisjon: {
        graderingPeriode: [
          {
            arbeidsgiverIdentifikator: '802323232',
            arbeidskategoriType: 'ARBEIDSTAKER',
            erArbeidstaker: true,
            erFrilanser: false,
            erSelvstNæringsdrivende: false,
            flerbarnsdager: undefined,
            harSamtidigUttak: true,
            periodeFom: '2022-05-20',
            periodeForGradering: 'MØDREKVOTE',
            periodeTom: '2022-06-20',
            prosentandelArbeid: '100.00',
            samtidigUttaksprosent: '100',
            skalGraderes: false,
          },
        ],
        oppholdPerioder: undefined,
        overføringsperioder: undefined,
        permisjonsPerioder: undefined,
        utsettelsePeriode: undefined,
      },
    });
  });

  it('skal velge opphold', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Søker ønsker opphold i uttaket'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(3);

    const fomDatoInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomDatoInput, '20.05.2022');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomDatoInput, '20.06.2022');
    fireEvent.blur(tomDatoInput);

    await userEvent.selectOptions(screen.getByLabelText('Årsak til opphold'), 'UTTAK_FORELDREPENGER_ANNEN_FORELDER');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(
      await screen.findByText(
        'Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering',
      ),
    ).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Fullt uttak')[1]!);

    await userEvent.selectOptions(screen.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomDatoUttakInput = screen.getAllByLabelText('F.o.m.')[0]!;
    await userEvent.type(fomDatoUttakInput, '21.06.2022');
    fireEvent.blur(fomDatoUttakInput);

    const tomDatoUttakInput = screen.getAllByLabelText('T.o.m.')[0]!;
    await userEvent.type(tomDatoUttakInput, '21.07.2022');
    fireEvent.blur(tomDatoUttakInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledExactlyOnceWith({
      tidsromPermisjon: {
        oppholdPerioder: [
          {
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
            årsak: 'UTTAK_FORELDREPENGER_ANNEN_FORELDER',
          },
        ],
        permisjonsPerioder: [
          {
            flerbarnsdager: false,
            harSamtidigUttak: false,
            periodeFom: '2022-06-21',
            periodeTom: '2022-07-21',
            periodeType: 'MØDREKVOTE',
          },
        ],
        utsettelsePeriode: undefined,
        overføringsperioder: undefined,
        graderingPeriode: undefined,
      },
    });
  });

  it('skal vise feilmelding når periodetypar overlappar i tid på tvers av periodetype', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    // Fullt uttak 20.05.2022 - 20.06.2022
    await userEvent.click(screen.getAllByText('Fullt uttak')[1]!);

    await userEvent.selectOptions(screen.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomUttakInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomUttakInput, '20.05.2022');
    fireEvent.blur(fomUttakInput);

    const tomUttakInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomUttakInput, '20.06.2022');
    fireEvent.blur(tomUttakInput);

    // Utsettelse 25.05.2022 - 25.06.2022 - overlappar med fullt uttak over
    await userEvent.click(screen.getByText('Søker ønsker å utsette uttaket'));

    await userEvent.selectOptions(screen.getByLabelText('Hva skal utsettes'), 'MØDREKVOTE');

    const fomUtsettelseInput = screen.getAllByLabelText('F.o.m.')[1]!;
    await userEvent.type(fomUtsettelseInput, '25.05.2022');
    fireEvent.blur(fomUtsettelseInput);

    const tomUtsettelseInput = screen.getAllByLabelText('T.o.m.')[1]!;
    await userEvent.type(tomUtsettelseInput, '25.06.2022');
    fireEvent.blur(tomUtsettelseInput);

    await userEvent.selectOptions(screen.getByLabelText('Årsak til utsettelse'), 'ARBEID');
    await userEvent.selectOptions(screen.getByLabelText('Type arbeid'), 'true');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Perioder kan ikke overlappe i tid')).toBeInTheDocument();
    expect(lagre).not.toHaveBeenCalled();

    // Flytter utsettelsesperioden slik at han ikkje lenger overlappar med fullt uttak
    await userEvent.clear(fomUtsettelseInput);
    await userEvent.type(fomUtsettelseInput, '21.06.2022');
    fireEvent.blur(fomUtsettelseInput);

    await userEvent.clear(tomUtsettelseInput);
    await userEvent.type(tomUtsettelseInput, '21.07.2022');
    fireEvent.blur(tomUtsettelseInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(screen.queryByText('Perioder kan ikke overlappe i tid')).not.toBeInTheDocument();
    expect(lagre).toHaveBeenCalledOnce();
  });

  it('skal ikkje vise tverrgåande feilmelding når berre periodar av same periodetype overlappar', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    await userEvent.click(screen.getAllByText('Fullt uttak')[1]!);

    await userEvent.selectOptions(screen.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomFørstePeriodeInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomFørstePeriodeInput, '20.05.2022');
    fireEvent.blur(fomFørstePeriodeInput);

    const tomFørstePeriodeInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomFørstePeriodeInput, '20.06.2022');
    fireEvent.blur(tomFørstePeriodeInput);

    await userEvent.click(screen.getByText('Legg til periode'));

    await userEvent.selectOptions(screen.getAllByRole('combobox')[1]!, 'MØDREKVOTE');

    const fomAndrePeriodeInput = screen.getAllByRole('textbox')[2]!;
    await userEvent.type(fomAndrePeriodeInput, '25.05.2022');
    fireEvent.blur(fomAndrePeriodeInput);

    const tomAndrePeriodeInput = screen.getAllByRole('textbox')[3]!;
    await userEvent.type(tomAndrePeriodeInput, '25.06.2022');
    fireEvent.blur(tomAndrePeriodeInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    // Berre éin periodetype (fullt uttak) er skrudd på, så overlappet er reint internt i periodetypen.
    // Det gir feilmeldingar frå feltarray-valideringa, men den tverrgåande panel-feilmeldinga skal ikkje
    // leggast til i tillegg (elles ville talet auka). Submit skal likevel vere blokkert.
    const feilmeldingarVedInterntOverlapp = screen.getAllByText('Perioder kan ikke overlappe i tid').length;
    expect(lagre).not.toHaveBeenCalled();

    // Flyttar andre periode slik at periodane ikkje lenger overlappar
    await userEvent.clear(fomAndrePeriodeInput);
    await userEvent.type(fomAndrePeriodeInput, '21.06.2022');
    fireEvent.blur(fomAndrePeriodeInput);

    await userEvent.clear(tomAndrePeriodeInput);
    await userEvent.type(tomAndrePeriodeInput, '21.07.2022');
    fireEvent.blur(tomAndrePeriodeInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    // Utan overlapp forsvinn alle feilmeldingane og submit går gjennom
    expect(feilmeldingarVedInterntOverlapp).toBeGreaterThan(0);
    expect(screen.queryByText('Perioder kan ikke overlappe i tid')).not.toBeInTheDocument();
    expect(lagre).toHaveBeenCalledOnce();
  });
});
