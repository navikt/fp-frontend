import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './NotatModal.stories';

const { Default } = composeStories(stories);

describe('NotatModal', () => {
  it('skal legge til notat på reservasjon', async () => {
    const flyttOppgavereservasjon = vi.fn();
    render(<Default flyttOppgavereservasjon={flyttOppgavereservasjon} />);

    expect(await screen.findByText('Legg til notat på reservasjon')).toBeInTheDocument();

    const notatInput = screen.getByLabelText('Notat');
    await userEvent.type(notatInput, 'Dette er et testnotat');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(flyttOppgavereservasjon).toHaveBeenCalledTimes(1));
    expect(flyttOppgavereservasjon).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er et testnotat',
      brukerIdent: 'T232332',
    });
  });
});
