import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import userEvent from '@testing-library/user-event';
import * as stories from './OpphevReservasjonModal.stories';

const { Default } = composeStories(stories);

describe('<OpphevReservasjonModal>', () => {
  it('skal vise modal for oppheving av reservasjon', async () => {
    const hentReserverteOppgaver = vi.fn();

    const utils = render(<Default hentReserverteOppgaver={hentReserverteOppgaver} />);

    expect(await screen.findByText('Når en reservert sak frigjøres er begrunnelse obligatorisk')).toBeInTheDocument();

    const begrunnelseInput = utils.getByLabelText('Når en reservert sak frigjøres er begrunnelse obligatorisk');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(hentReserverteOppgaver).toHaveBeenCalledTimes(1));
    expect(hentReserverteOppgaver).toHaveBeenNthCalledWith(1, undefined, true);
  });
});
