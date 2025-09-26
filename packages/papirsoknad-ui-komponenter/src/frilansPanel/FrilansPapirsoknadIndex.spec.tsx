import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FrilansPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('FrilansPapirsoknadIndex', () => {
  it('skal velge at søker ikke har periode med frilansvirksomhet', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findByText('Frilanser')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      frilans: {
        harSokerPeriodeMedFrilans: false,
      },
    });
  });

  it('skal velge at søker har periode med frilansvirksomhet', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Frilanser')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(5);

    const fomInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomInput, '27.05.2022');
    fireEvent.blur(fomInput);

    const tomInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomInput, '15.06.2022');
    fireEvent.blur(tomInput);

    await userEvent.click(screen.getAllByText('Nei')[1]!);
    await userEvent.click(screen.getAllByText('Ja')[2]!);
    await userEvent.click(screen.getAllByText('Nei')[3]!);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      frilans: {
        harSokerPeriodeMedFrilans: true,
        perioder: [
          {
            periodeFom: '2022-05-27',
            periodeTom: '2022-06-15',
          },
        ],
        erNyoppstartetFrilanser: false,
        harInntektFraFosterhjem: true,
        harHattOppdragForFamilie: false,
        oppdragPerioder: undefined,
      },
    });
  });

  it('skal oppgi periode for når en har hatt oppdrag for nær familie', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });

    expect(await screen.findByText('Frilanser')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    const fomInput = screen.getByLabelText('F.o.m.');
    await userEvent.type(fomInput, '27.05.2022');
    fireEvent.blur(fomInput);

    const tomInput = screen.getByLabelText('T.o.m.');
    await userEvent.type(tomInput, '15.06.2022');
    fireEvent.blur(tomInput);

    await userEvent.click(screen.getAllByText('Nei')[1]!);
    await userEvent.click(screen.getAllByText('Ja')[2]!);
    await userEvent.click(screen.getAllByText('Ja')[3]!);

    expect(await screen.findByText('Oppgi periode')).toBeInTheDocument();

    const oppdragFomInput = screen.getAllByLabelText('F.o.m.')[1]!;
    await userEvent.type(oppdragFomInput, '26.05.2022');
    fireEvent.blur(oppdragFomInput);

    const oppdragTomInput = screen.getAllByLabelText('T.o.m.')[1]!;
    await userEvent.type(oppdragTomInput, '15.06.2022');
    fireEvent.blur(oppdragTomInput);

    const oppdragsgiverInput = screen.getByLabelText('Oppdragsgiver');
    await userEvent.type(oppdragsgiverInput, 'test-oppdragsgiver');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(
      await screen.findByText('F.o.m må være lik eller etter dato for første periode med frilansvirksomhet'),
    ).toBeInTheDocument();

    await userEvent.clear(oppdragFomInput);
    await userEvent.type(oppdragFomInput, '28.05.2022');
    fireEvent.blur(oppdragFomInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      frilans: {
        harSokerPeriodeMedFrilans: true,
        perioder: [
          {
            periodeFom: '2022-05-27',
            periodeTom: '2022-06-15',
          },
        ],
        erNyoppstartetFrilanser: false,
        harInntektFraFosterhjem: true,
        harHattOppdragForFamilie: true,
        oppdragPerioder: [
          {
            fomDato: '2022-05-28',
            oppdragsgiver: 'test-oppdragsgiver',
            tomDato: '2022-06-15',
          },
        ],
      },
    });
  });
});
