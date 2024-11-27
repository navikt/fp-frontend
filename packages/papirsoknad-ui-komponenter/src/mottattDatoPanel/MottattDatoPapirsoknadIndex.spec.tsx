import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';

import * as stories from './MottattDatoPapirsoknadIndex.stories';

const { Default } = composeStories(stories);

describe('<MottattDatoPapirsoknadIndex>', () => {
  it('skal velge mottatt dato', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findAllByText('Mottatt dato')).toHaveLength(2);

    const datoInput = screen.getByLabelText('Mottatt dato');
    await userEvent.type(datoInput, '28.05.2050');
    fireEvent.blur(datoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    const iDag = dayjs().format(DDMMYYYY_DATE_FORMAT);
    expect(await screen.findByText(`Dato må være før eller lik ${iDag}`)).toBeInTheDocument();

    await userEvent.clear(datoInput);
    await userEvent.type(datoInput, '26.05.2022');
    fireEvent.blur(datoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      mottattDato: '2022-05-26',
    });
  });
});
