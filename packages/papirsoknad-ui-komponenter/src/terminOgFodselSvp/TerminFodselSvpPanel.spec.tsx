import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { composeStories } from '@storybook/react';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';

import * as stories from './TerminFodselSvpPanel.stories';

const { Default } = composeStories(stories);

describe('<TerminFodselSvpPanel>', () => {
  it('skal velge termindato og fødselsdato', async () => {
    const lagre = vi.fn();

    await Default.run({ parameters: { submitCallback: lagre } });

    expect(await screen.findByText('Opplysninger om termin og fødsel')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(await screen.findByText('Feltet må fylles ut')).toBeInTheDocument();

    const termindato = screen.getByLabelText('Termindato');
    await userEvent.type(termindato, '01.05.2022');
    fireEvent.blur(termindato);

    const fødselsdato = screen.getByLabelText('Fødselsdato');
    await userEvent.type(fødselsdato, dayjs().add(1, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fødselsdato);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(
      await screen.findByText(`Dato må være før eller lik ${dayjs().format(DDMMYYYY_DATE_FORMAT)}`),
    ).toBeInTheDocument();

    await userEvent.clear(fødselsdato);
    await userEvent.type(fødselsdato, dayjs().subtract(1, 'day').format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(fødselsdato);

    await userEvent.click(screen.getByText('Lagreknapp (Kun for test)'));

    expect(lagre).toHaveBeenCalledOnce();
    expect(lagre).toHaveBeenCalledWith({
      foedselsDato: dayjs().subtract(1, 'day').format(ISO_DATE_FORMAT),
      termindato: '2022-05-01',
    });
  });
});
