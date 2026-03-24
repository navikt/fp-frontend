import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { applyRequestHandlers } from 'msw-storybook-addon';
import { expect } from 'vitest';

import { LosUrlFelles } from '@navikt/fp-los-felles';

import * as stories from './NotatModal.stories';

const { Default } = composeStories(stories);

describe('NotatModal', () => {
  it('skal legge til notat på reservasjon', async () => {
    const requestBody = vi.fn();

    applyRequestHandlers({
      handlers: [
        http.post(LosUrlFelles.FLYTT_RESERVASJON, async ({ request }) => {
          requestBody(await request.json());
          return HttpResponse.json({ erReservert: true });
        }),
      ],
    });
    render(<Default />);

    expect(await screen.findByText('Legg til notat på reservasjon')).toBeInTheDocument();

    const notatInput = screen.getByLabelText('Notat');
    await userEvent.type(notatInput, 'Dette er et testnotat');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() =>
      expect(requestBody).toHaveBeenCalledExactlyOnceWith({
        oppgaveId: 123,
        begrunnelse: 'Dette er et testnotat',
        brukerIdent: 'T232332',
      }),
    );
  });
});
