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

    await userEvent.click(screen.getAllByText('Fullt uttak')[1]);

    await userEvent.selectOptions(screen.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomDatoInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomDatoInput, '20.05.2022');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomDatoInput, '20.06.2022');
    fireEvent.blur(tomDatoInput);

    await userEvent.click(screen.getAllByRole('checkbox')[2]);

    expect(await screen.findByText('Prosentandel uttak')).toBeInTheDocument();

    const prosentUttakInput = screen.getByLabelText('Prosentandel uttak');
    await userEvent.type(prosentUttakInput, '100');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      tidsromPermisjon: {
        fulltUttak: true,
        permisjonsPerioder: [
          {
            flerbarnsdager: false,
            harSamtidigUttak: true,
            samtidigUttaksprosent: '100.00',
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
            periodeType: 'MØDREKVOTE',
          },
        ],
        skalGradere: false,
        skalHaOpphold: false,
        skalOvertaKvote: false,
        skalUtsette: false,
        graderingPeriode: undefined,
        oppholdPerioder: undefined,
        overforingsperioder: undefined,
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

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      tidsromPermisjon: {
        fulltUttak: false,
        overforingsperioder: [
          {
            overforingArsak: 'SYKDOM_ANNEN_FORELDER',
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
          },
        ],
        skalGradere: false,
        skalHaOpphold: false,
        skalOvertaKvote: true,
        skalUtsette: false,
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

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      tidsromPermisjon: {
        fulltUttak: false,
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
        overforingsperioder: undefined,
        permisjonsPerioder: undefined,
        skalGradere: false,
        skalHaOpphold: false,
        skalOvertaKvote: false,
        skalUtsette: true,
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

    const prosentandelInput = screen.getAllByRole('textbox')[2];
    await userEvent.type(prosentandelInput, '100');

    const virksomhetsnummerInput = screen.getByLabelText('Virksomhetsnummer');
    await userEvent.type(virksomhetsnummerInput, '802323232');

    await userEvent.selectOptions(screen.getByLabelText('Type arbeid'), 'ARBEIDSTAKER');

    await userEvent.click(screen.getAllByRole('checkbox')[6]);

    expect(await screen.findByText('Prosentandel uttak')).toBeInTheDocument();

    const prosentInput = screen.getByLabelText('Prosentandel uttak');
    await userEvent.type(prosentInput, '100');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      tidsromPermisjon: {
        fulltUttak: false,
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
        overforingsperioder: undefined,
        permisjonsPerioder: undefined,
        skalGradere: true,
        skalHaOpphold: false,
        skalOvertaKvote: false,
        skalUtsette: false,
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

    await userEvent.click(screen.getAllByText('Fullt uttak')[1]);

    await userEvent.selectOptions(screen.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomDatoUttakInput = screen.getAllByLabelText('F.o.m.')[0];
    await userEvent.type(fomDatoUttakInput, '20.05.2022');
    fireEvent.blur(fomDatoUttakInput);

    const tomDatoUttakInput = screen.getAllByLabelText('T.o.m.')[0];
    await userEvent.type(tomDatoUttakInput, '20.06.2022');
    fireEvent.blur(tomDatoUttakInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      tidsromPermisjon: {
        fulltUttak: true,
        oppholdPerioder: [
          {
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
            årsak: 'UTTAK_FORELDREPENGER_ANNEN_FORELDER',
          },
        ],
        skalGradere: false,
        skalHaOpphold: true,
        skalOvertaKvote: false,
        skalUtsette: false,
        permisjonsPerioder: [
          {
            flerbarnsdager: false,
            harSamtidigUttak: false,
            periodeFom: '2022-05-20',
            periodeTom: '2022-06-20',
            periodeType: 'MØDREKVOTE',
          },
        ],
        utsettelsePeriode: undefined,
        overforingsperioder: undefined,
        graderingPeriode: undefined,
      },
    });
  });
});
