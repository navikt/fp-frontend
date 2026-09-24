import { composeStories } from '@storybook/react';
import { screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './AnnenForelderPapirsoknadIndex.stories';

const { SokerErMor, SokerErFar } = composeStories(stories);

describe('AnnenForelderPapirsoknadIndex', () => {
  it.each([
    {
      spørsmål: 'Har søker aleneomsorg for barnet?',
      forventedeRettigheter: {
        søkerHarAleneomsorg: true,
        denAndreForelderenHarRettPåForeldrepenger: undefined,
        annenForelderRettEØS: undefined,
        morMottarUføretrygd: undefined,
      },
    },
    {
      spørsmål: 'Har den andre forelderen rett på foreldrepenger i Norge?',
      forventedeRettigheter: {
        søkerHarAleneomsorg: false,
        denAndreForelderenHarRettPåForeldrepenger: true,
        annenForelderRettEØS: undefined,
        morMottarUføretrygd: undefined,
      },
    },
    {
      spørsmål: 'Annen forelder har tilstrekkelig opptjening fra land i EØS?',
      forventedeRettigheter: {
        søkerHarAleneomsorg: false,
        denAndreForelderenHarRettPåForeldrepenger: false,
        annenForelderRettEØS: true,
        morMottarUføretrygd: undefined,
      },
    },
  ])(
    'skal fjerne skjulte rettighetsfelt når svaret endres til ja på "$spørsmål"',
    async ({ spørsmål, forventedeRettigheter }) => {
      const lagre = vi.fn();

      await SokerErFar.run({
        parameters: {
          submitCallback: lagre,
        },
      });

      await userEvent.type(screen.getByLabelText('Fødselsnummer/D-nummer'), '30013726678');
      for (const navn of [
        'Har søker aleneomsorg for barnet?',
        'Har den andre forelderen rett på foreldrepenger i Norge?',
        'Annen forelder har tilstrekkelig opptjening fra land i EØS?',
      ]) {
        await userEvent.click(
          within(screen.getByRole('radiogroup', { name: navn })).getByRole('radio', { name: 'Nei' }),
        );
      }
      await userEvent.click(
        within(screen.getByRole('radiogroup', { name: 'Bare far rett og mor mottar uføretryd?' })).getByRole('radio', {
          name: 'Ja',
        }),
      );

      await userEvent.click(
        within(screen.getByRole('radiogroup', { name: spørsmål })).getByRole('radio', { name: 'Ja' }),
      );
      expect(
        screen.queryByRole('radiogroup', { name: 'Bare far rett og mor mottar uføretryd?' }),
      ).not.toBeInTheDocument();

      await userEvent.click(screen.getByRole('button', { name: 'Lagreknapp (Kun for test)' }));

      await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
      expect(lagre.mock.calls[0]![0]).toStrictEqual({
        annenForelder: {
          fødselsnummer: '30013726678',
          kanIkkeOppgiAnnenForelder: false,
          kanIkkeOppgiBegrunnelse: undefined,
          ...forventedeRettigheter,
        },
      });
    },
  );

  it('skal validere fødselsnummer', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Den andre forelderen')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(screen.getAllByText('Feltet må fylles ut')).toHaveLength(2);

    const fødselsnummer = screen.getByLabelText('Fødselsnummer/D-nummer');
    await userEvent.type(fødselsnummer, '03');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må være et fødselsnummer (11 siffer)')).toBeInTheDocument();

    await userEvent.type(fødselsnummer, '232334232');
    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Ugyldig fødselsnummer')).toBeInTheDocument();

    await userEvent.clear(fødselsnummer);
    await userEvent.type(fødselsnummer, '07078518434');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(
      await screen.findByText('Fødselsnummer til den andre forelderen kan ikke være det samme som søker'),
    ).toBeInTheDocument();

    await userEvent.clear(fødselsnummer);
    await userEvent.type(fødselsnummer, '30013726678');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
    expect(lagre).toHaveBeenCalledWith({
      annenForelder: {
        fødselsnummer: '30013726678',
        kanIkkeOppgiAnnenForelder: false,
        søkerHarAleneomsorg: true,
        annenForelderRettEØS: undefined,
        morMottarUføretrygd: undefined,
        denAndreForelderenHarRettPåForeldrepenger: undefined,
      },
    });
  });

  it('skal håndtere "Kan ikke oppgi annen forelder"', async () => {
    const lagre = vi.fn();

    await SokerErMor.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Den andre forelderen')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Kan ikke oppgi annen forelder'));

    await userEvent.click(screen.getByText('Har ikke norsk f.nr. eller d-nr.'));

    await userEvent.selectOptions(screen.getByLabelText('Land'), 'AND');

    const fødselsnummer = screen.getByLabelText('Utenlandsk fødselsnummer');
    await userEvent.type(fødselsnummer, '032323');

    await userEvent.click(screen.getByText('Ja'));
    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledOnce());
    expect(lagre).toHaveBeenCalledWith({
      annenForelder: {
        fødselsnummer: undefined,
        kanIkkeOppgiAnnenForelder: true,
        kanIkkeOppgiBegrunnelse: {
          årsak: 'IKKE_NORSK_FNR',
          land: 'AND',
          utenlandskFødselsnummer: '032323',
        },
        søkerHarAleneomsorg: true,
      },
    });
  });
});
