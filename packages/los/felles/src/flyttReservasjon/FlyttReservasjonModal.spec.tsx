import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { applyRequestHandlers } from 'msw-storybook-addon';
import { expect } from 'vitest';

import { LosUrlFelles } from '../api/fplosFellesApi';
import * as stories from './FlyttReservasjonModal.stories';

const { Default } = composeStories(stories);

describe('FlyttReservasjonModal', () => {
  it('skal vise feilmelding når flytting blir forsøkt utført uten at skjemaet er fylt ut', async () => {
    render(<Default />);
    expect(screen.getByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    expect(screen.getByText('Notat til annen saksbehandler')).toBeInTheDocument();
    expect(screen.getByLabelText('Saksbehandler')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'OK' })).toBeDisabled();

    await userEvent.type(screen.getByLabelText('Notat til annen saksbehandler'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('OK'));

    expect(await screen.findByText('Du må velge en saksbehandler')).toBeInTheDocument();
  });

  it('skal vise at oppgitt bruker ikke finnes', async () => {
    render(<Default />);

    expect(screen.getByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    expect(screen.getByLabelText('Kari Konsulent (S12345)')).toBeInTheDocument();
    expect(screen.getByLabelText('Espen Utvikler (P123456)')).toBeInTheDocument();

    const saksbehandlerInput = screen.getByLabelText('Saksbehandler');
    await userEvent.type(saksbehandlerInput, 'TESTTES');

    expect(await screen.findByText('Ingen søketreff')).toBeInTheDocument();
  });

  it('skal vise finne brukerident og så lagre begrunnelse for flytting', async () => {
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

    expect(screen.getByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    expect(screen.getByLabelText('Kari Konsulent (S12345)')).toBeInTheDocument();
    expect(screen.getByLabelText('Espen Utvikler (P123456)')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Saksbehandler'));
    await userEvent.click(screen.getByLabelText('Espen Utvikler (P123456)'));
    await userEvent.type(screen.getByLabelText('Notat til annen saksbehandler'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() =>
      expect(requestBody).toHaveBeenCalledExactlyOnceWith({
        oppgaveId: 123,
        begrunnelse: 'Dette er en begrunnelse',
        brukerIdent: 'P123456',
      }),
    );
  });
});
