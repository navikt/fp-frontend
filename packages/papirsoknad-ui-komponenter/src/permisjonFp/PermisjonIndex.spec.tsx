import React from 'react';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './PermisjonIndex.stories';

const { Default } = composeStories(stories);

describe('<PermisjonIndex>', () => {
  it('skal velge fullt uttak', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(
      'Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering',
    )).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Fullt uttak')[1]);

    userEvent.selectOptions(utils.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, '2022.05.20');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, '2022.06.20');
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getAllByRole('checkbox')[2]);

    expect(await screen.findByText('Prosentandel uttak')).toBeInTheDocument();

    const prosentUttakInput = utils.getByLabelText('Prosentandel uttak');
    userEvent.paste(prosentUttakInput, '100');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      tidsromPermisjon: {
        fulltUttak: true,
        permisjonsPerioder: [{
          flerbarnsdager: false,
          harSamtidigUttak: true,
          samtidigUttaksprosent: '100.00',
          periodeFom: '2022-05-20',
          periodeTom: '2022-06-20',
          periodeType: 'MØDREKVOTE',
        }],
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
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    userEvent.click(screen.getByText('Søker ønsker å overta kvote'));

    userEvent.selectOptions(utils.getByLabelText('Angi årsak'), 'ALENEOMSORG');

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, '2022.05.20');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, '2022.06.20');
    fireEvent.blur(tomDatoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      tidsromPermisjon: {
        fulltUttak: false,
        overforingsperioder: [{
          overforingArsak: 'ALENEOMSORG',
          periodeFom: '2022-05-20',
          periodeTom: '2022-06-20',
        }],
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
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    userEvent.click(screen.getByText('Søker ønsker å utsette uttaket'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(4);

    userEvent.selectOptions(utils.getByLabelText('Hva skal utsettes'), 'MØDREKVOTE');

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, '2022.05.20');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, '2022.06.20');
    fireEvent.blur(tomDatoInput);

    userEvent.selectOptions(utils.getByLabelText('Årsak til utsettelse'), 'ARBEID');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    userEvent.selectOptions(utils.getByLabelText('Type arbeid'), 'true');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      tidsromPermisjon: {
        fulltUttak: false,
        utsettelsePeriode: [{
          arsakForUtsettelse: 'ARBEID',
          erArbeidstaker: 'true',
          periodeForUtsettelse: 'MØDREKVOTE',
          periodeFom: '2022-05-20',
          periodeTom: '2022-06-20',
        }],
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

  it.skip('skal velge gradering', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    userEvent.click(screen.getByText('Søker ønsker å gradere uttaket'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(5);

    userEvent.selectOptions(utils.getByLabelText('Hva skal graderes'), 'MØDREKVOTE');

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, '2022.05.20');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, '2022.06.20');
    fireEvent.blur(tomDatoInput);

    const prosentandelInput = utils.getAllByRole('textbox')[3];
    userEvent.type(prosentandelInput, '8023232323');

    const virksomhetsnummerInput = utils.getByLabelText('Virksomhetsnummer');
    userEvent.paste(virksomhetsnummerInput, '802323232');

    userEvent.selectOptions(utils.getByLabelText('Type arbeid'), 'ARBEIDSTAKER');

    userEvent.click(screen.getAllByRole('checkbox')[6]);

    expect(await screen.findByText('Prosentandel uttak')).toBeInTheDocument();

    const prosentInput = utils.getByLabelText('Prosentandel uttak');
    userEvent.paste(prosentInput, '100');

    await waitFor(() => expect(screen.queryByText('Feltet må fylles ut')).not.toBeInTheDocument());

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      tidsromPermisjon: {
        fulltUttak: undefined,
        utsettelsePeriode: [{
          arsakForUtsettelse: 'ARBEID',
          erArbeidstaker: 'true',
          periodeForUtsettelse: 'MØDREKVOTE',
          periodeFom: '2022-05-20',
          periodeTom: '2022-06-20',
        }],
        skalGradere: undefined,
        skalHaOpphold: undefined,
        skalOvertaKvote: undefined,
        skalUtsette: true,
      },
    });
  });

  it('skal velge opphold', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Tidsrom for permisjon')).toBeInTheDocument();

    userEvent.click(screen.getByText('Søker ønsker opphold i uttaket'));

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(3);

    const fomDatoInput = utils.getByLabelText('F.o.m.');
    userEvent.paste(fomDatoInput, '2022.05.20');
    fireEvent.blur(fomDatoInput);

    const tomDatoInput = utils.getByLabelText('T.o.m.');
    userEvent.paste(tomDatoInput, '2022.06.20');
    fireEvent.blur(tomDatoInput);

    userEvent.selectOptions(utils.getByLabelText('Årsak til opphold'), 'UTTAK_FORELDREPENGER_ANNEN_FORELDER');

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(
      'Minst en av følgende perioder må være utfylt: fullt uttak, overføring av kvote, utsettelse eller gradering',
    )).toBeInTheDocument();

    userEvent.click(screen.getAllByText('Fullt uttak')[1]);

    userEvent.selectOptions(utils.getByLabelText('Periodetype'), 'MØDREKVOTE');

    const fomDatoUttakInput = utils.getAllByLabelText('F.o.m.')[0];
    userEvent.paste(fomDatoUttakInput, '2022.05.20');
    fireEvent.blur(fomDatoUttakInput);

    const tomDatoUttakInput = utils.getAllByLabelText('T.o.m.')[0];
    userEvent.paste(tomDatoUttakInput, '2022.06.20');
    fireEvent.blur(tomDatoUttakInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      tidsromPermisjon: {
        fulltUttak: true,
        oppholdPerioder: [{
          periodeFom: '2022-05-20',
          periodeTom: '2022-06-20',
          årsak: 'UTTAK_FORELDREPENGER_ANNEN_FORELDER',

        }],
        skalGradere: false,
        skalHaOpphold: true,
        skalOvertaKvote: false,
        skalUtsette: false,
        permisjonsPerioder: [{
          flerbarnsdager: false,
          harSamtidigUttak: false,
          periodeFom: '2022-05-20',
          periodeTom: '2022-06-20',
          periodeType: 'MØDREKVOTE',
        }],
        utsettelsePeriode: undefined,
        overforingsperioder: undefined,
        graderingPeriode: undefined,
      },
    });
  });
});
