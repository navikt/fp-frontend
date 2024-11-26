import dayjs from 'dayjs';
import { fireEvent, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

import * as stories from './MottattDatoPapirsoknadIndex.stories';
import { maxMottattdato, minMottattdato } from './MottattDatoPapirsoknadIndex';

const { Default } = composeStories(stories);

describe('<MottattDatoPapirsoknadIndex>', () => {
  it('skal velge gyldig mottatt dato', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findAllByText('Mottatt dato')).toHaveLength(2);

    const datoInput = screen.getByLabelText('Mottatt dato');
    const enMaanedSiden = dayjs().subtract(1, 'month');
    await userEvent.type(datoInput, enMaanedSiden.format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(datoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      mottattDato: enMaanedSiden.format(ISO_DATE_FORMAT),
    });
  });

  it('skal velge en for sen mottatt dato', async () => {
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

    const maxDato = maxMottattdato().format(DDMMYYYY_DATE_FORMAT);
    expect(await screen.findByText(`Dato må være før eller lik ${maxDato}`)).toBeInTheDocument();

    expect(lagre).toHaveBeenCalledTimes(0);
  });

  it('skal velge for tidlig mottatt dato', async () => {
    const lagre = vi.fn();

    await Default.run({
      parameters: {
        submitCallback: lagre,
      },
    });
    expect(await screen.findAllByText('Mottatt dato')).toHaveLength(2);

    const datoInput = screen.getByLabelText('Mottatt dato');

    await userEvent.type(datoInput, '20.02.2020');
    fireEvent.blur(datoInput);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    const minDato = minMottattdato().format(DDMMYYYY_DATE_FORMAT);
    expect(await screen.findByText(`Dato må være etter eller lik ${minDato}`)).toBeInTheDocument();
    expect(lagre).toHaveBeenCalledTimes(0);
  });
});
