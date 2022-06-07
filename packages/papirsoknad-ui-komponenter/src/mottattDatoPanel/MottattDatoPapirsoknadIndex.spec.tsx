import React from 'react';
import dayjs from 'dayjs';
import {
  fireEvent,
  render, screen, waitFor,
} from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './MottattDatoPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<MottattDatoPapirsoknadIndex>', () => {
  it('skal velge mottatt dato', async () => {
    const lagre = jest.fn();

    const utils = render(<Default submitCallback={lagre} />);

    expect(await screen.findAllByText('Mottatt dato')).toHaveLength(2);

    const datoInput = utils.getByLabelText('Mottatt dato');
    userEvent.paste(datoInput, '28.05.2050');
    fireEvent.blur(datoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    const iDag = dayjs().format(DDMMYYYY_DATE_FORMAT);
    expect(await screen.findByText(`Dato må være før eller lik ${iDag}`)).toBeInTheDocument();

    userEvent.clear(datoInput);
    userEvent.paste(datoInput, '26.05.2022');
    fireEvent.blur(datoInput);

    userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    await waitFor(() => expect(lagre).toHaveBeenCalledTimes(1));
    expect(lagre).toHaveBeenNthCalledWith(1, {
      mottattDato: '2022-05-26',
    });
  });
});
