import React from 'react';
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import dayjs from 'dayjs';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './TerminFodselSvpPanel.stories';

const { Default } = composeStories(stories);

describe('<TerminFodselSvpPanel>', () => {
  it('skal velge termindato og fødselsdato', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    const termindato = utils.getByLabelText('Termindato');
    userEvent.type(termindato, '01.05.2022');
    fireEvent.blur(termindato);

    const fødselsdato = utils.getByLabelText('Fødselsdato');
    userEvent.type(fødselsdato, dayjs().add(1, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fødselsdato);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText(`Dato må være før eller lik ${dayjs().format(DDMMYYYY_DATE_FORMAT)}`)).toBeInTheDocument();

    userEvent.clear(fødselsdato);
    userEvent.type(fødselsdato, dayjs().subtract(1, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fødselsdato);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      foedselsDato: dayjs().subtract(1, 'day').format(ISO_DATE_FORMAT),
      termindato: '2022-05-01',
    });
  });
});
