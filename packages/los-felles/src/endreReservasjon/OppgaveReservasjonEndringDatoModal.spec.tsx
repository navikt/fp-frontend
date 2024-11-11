import React from 'react';
import dayjs from 'dayjs';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './OppgaveReservasjonEndringDatoModal.stories';

const { Default } = composeStories(stories);

describe('<OppgaveReservasjonEndringDatoModal>', () => {
  it('skal vise modal for oppheving av reservasjon og velge dato', async () => {
    const endreReserverasjonState = vi.fn();

    render(<Default endreReserverasjonState={endreReserverasjonState} />);

    expect(await screen.findByText('Velg dato som reservasjonen avsluttes')).toBeInTheDocument();

    const datoInput = screen.getByRole('textbox', { hidden: true });
    console.log('datoInput', dayjs().format('DD.MM.YYYY'));
    await userEvent.type(datoInput, dayjs().format('DD.MM.YYYY'));
    fireEvent.blur(datoInput);

    expect(await screen.findByText('OK')).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(endreReserverasjonState).toHaveBeenCalledTimes(1));
    expect(endreReserverasjonState).toHaveBeenNthCalledWith(1);
  });
});
