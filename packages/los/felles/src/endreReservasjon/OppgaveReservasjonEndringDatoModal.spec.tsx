import { DDMMYYYY_DATE_FORMAT, ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';

import * as stories from './OppgaveReservasjonEndringDatoModal.stories';

const { Default } = composeStories(stories);

describe('OppgaveReservasjonEndringDatoModal', () => {
  it('skal vise modal for oppheving av reservasjon og velge dato', async () => {
    const endreOppgavereservasjon = vi.fn();

    render(<Default endreOppgavereservasjon={endreOppgavereservasjon} />);

    expect(await screen.findByText('Velg dato som reservasssdsjonen avsluttes')).toBeInTheDocument();

    const datoInput = screen.getByRole('textbox', { hidden: true });
    await userEvent.type(datoInput, dayjs().format(DDMMYYYY_DATE_FORMAT));

    expect(await screen.findByText('OK')).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(endreOppgavereservasjon).toHaveBeenCalledTimes(1));
    expect(endreOppgavereservasjon).toHaveBeenNthCalledWith(1, dayjs().format(ISO_DATE_FORMAT));
  });
});
