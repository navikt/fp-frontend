import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from './FrilansPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<FrilansPapirsoknadIndex>', () => {
  it('skal velge at søker ikke har periode med frilansvirksomhet', async () => {
    const lagre = jest.fn();

    render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Frilanser')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Nei'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      frilans: {
        harSokerPeriodeMedFrilans: false,
      },
    });
  });

  it('skal velge at søker har periode med frilansvirksomhet', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Frilanser')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findAllByText('Feltet må fylles ut')).toHaveLength(5);

    const fomInput = utils.getByLabelText('F.o.m.');
    await userEvent.type(fomInput, '27.05.2022');
    fireEvent.blur(fomInput);

    const tomInput = utils.getByLabelText('T.o.m.');
    await userEvent.type(tomInput, '15.06.2022');
    fireEvent.blur(tomInput);

    await userEvent.click(screen.getAllByText('Nei')[1]);
    await userEvent.click(screen.getAllByText('Ja')[2]);
    await userEvent.click(screen.getAllByText('Nei')[3]);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      frilans: {
        erNyoppstartetFrilanser: false,
        harHattOppdragForFamilie: false,
        harInntektFraFosterhjem: true,
        harSokerPeriodeMedFrilans: true,
        oppdragPerioder: [{
          fomDato: '',
          oppdragsgiver: '',
          tomDato: '',
        }],
        perioder: [{
          periodeFom: '2022-05-27',
          periodeTom: '2022-06-15',
        }],
      },
    });
  });

  it('skal oppgi periode for når en har hatt oppdrag for nær familie', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Frilanser')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    const fomInput = utils.getByLabelText('F.o.m.');
    await userEvent.type(fomInput, '27.05.2022');
    fireEvent.blur(fomInput);

    const tomInput = utils.getByLabelText('T.o.m.');
    await userEvent.type(tomInput, '15.06.2022');
    fireEvent.blur(tomInput);

    await userEvent.click(screen.getAllByText('Nei')[1]);
    await userEvent.click(screen.getAllByText('Ja')[2]);
    await userEvent.click(screen.getAllByText('Ja')[3]);

    expect(await screen.findByText('Oppgi periode')).toBeInTheDocument();

    const oppdragFomInput = utils.getAllByLabelText('F.o.m.')[1];
    await userEvent.type(oppdragFomInput, '26.05.2022');
    fireEvent.blur(oppdragFomInput);

    const oppdragTomInput = utils.getAllByLabelText('T.o.m.')[1];
    await userEvent.type(oppdragTomInput, '15.06.2022');
    fireEvent.blur(oppdragTomInput);

    const oppdragsgiverInput = utils.getByLabelText('Oppdragsgiver');
    await userEvent.type(oppdragsgiverInput, 'test-oppdragsgiver');

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('F.o.m må være lik eller etter dato for første periode med frilansvirksomhet')).toBeInTheDocument();

    await userEvent.clear(oppdragFomInput);
    await userEvent.type(oppdragFomInput, '28.05.2022');
    fireEvent.blur(oppdragFomInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      frilans: {
        erNyoppstartetFrilanser: false,
        harHattOppdragForFamilie: true,
        harInntektFraFosterhjem: true,
        harSokerPeriodeMedFrilans: true,
        oppdragPerioder: [{
          fomDato: '2022-05-28',
          oppdragsgiver: 'test-oppdragsgiver',
          tomDato: '2022-06-15',
        }],
        perioder: [{
          periodeFom: '2022-05-27',
          periodeTom: '2022-06-15',
        }],
      },
    });
  });
});
