import dayjs from 'dayjs';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './OppgaveReservasjonEndringDatoModal.stories';
import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';

const { Default } = composeStories(stories);

describe('<OppgaveReservasjonEndringDatoModal>', () => {
  it('skal vise modal for oppheving av reservasjon og velge dato', async () => {
    const endreOppgavereservasjon = vi.fn().mockResolvedValueOnce([]);

    await Default.run({
      args: { ...Default.args, endreOppgavereservasjon },
    });
    expect(await screen.findByText('Velg dato som reservasjonen avsluttes')).toBeInTheDocument();

    const datoInput = screen.getByRole('textbox', { hidden: true });
    await userEvent.type(datoInput, dayjs().format(DDMMYYYY_DATE_FORMAT));
    fireEvent.blur(datoInput);

    expect(await screen.findByText('OK')).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(endreOppgavereservasjon).toHaveBeenCalledOnce());
    expect(endreOppgavereservasjon).toHaveBeenCalledWith({
      oppgaveId: 1,
      reserverTil: dayjs().format(ISO_DATE_FORMAT),
    });
  });
});
