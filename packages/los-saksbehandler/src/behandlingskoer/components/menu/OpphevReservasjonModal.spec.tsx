import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import * as stories from './OpphevReservasjonModal.stories';

const { Default } = composeStories(stories);

describe('<OpphevReservasjonModal>', () => {
  it('skal vise modal for oppheving av reservasjon', async () => {
    const begrunnelse = 'Dette er en begrunnelse';
    const hentReserverteOppgaver = jest.fn();

    const utils = render(<Default opphevData={{ oppgaveId: 1, begrunnelse }} hentReserverteOppgaver={hentReserverteOppgaver} />);

    expect(await screen.findByText('Når en reservert sak frigjøres er begrunnelse obligatorisk')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Når en reservert sak frigjøres er begrunnelse obligatorisk');
    await userEvent.type(begrunnelseInput, begrunnelse);

    expect(await screen.findByText('OK')).toBeInTheDocument();
    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(hentReserverteOppgaver).toHaveBeenCalledTimes(1));
    expect(hentReserverteOppgaver).toHaveBeenNthCalledWith(1, {}, true);
  });
});
