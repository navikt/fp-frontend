import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from 'vitest';

import * as stories from './FlyttReservasjonModal.stories';

const { Default } = composeStories(stories);

describe('FlyttReservasjonModal', () => {
  it('skal vise feilmelding når flytting blir forsøkt utført uten at skjemaet er fylt ut', async () => {
    const flyttOppgavereservasjon = vi.fn();

    render(<Default flyttOppgavereservasjon={flyttOppgavereservasjon} />);
    expect(screen.getByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    expect(screen.getByText('Begrunn flytting av reservasjonen')).toBeInTheDocument();
    expect(screen.getByLabelText('Saksbehandler')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'OK' })).toBeDisabled();

    await userEvent.type(screen.getByLabelText('Begrunn flytting av reservasjonen'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('OK'));

    expect(await screen.findByText('Du må velge en saksbehandler')).toBeInTheDocument();
    expect(flyttOppgavereservasjon).not.toHaveBeenCalled();
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
    const flyttOppgavereservasjon = vi.fn();
    render(<Default flyttOppgavereservasjon={flyttOppgavereservasjon} />);

    expect(screen.getByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    expect(screen.getByLabelText('Kari Konsulent (S12345)')).toBeInTheDocument();
    expect(screen.getByLabelText('Espen Utvikler (P123456)')).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText('Saksbehandler'));
    await userEvent.click(screen.getByLabelText('Espen Utvikler (P123456)'));
    await userEvent.type(screen.getByLabelText('Begrunn flytting av reservasjonen'), 'Dette er en begrunnelse');

    await userEvent.click(screen.getByText('OK'));

    expect(flyttOppgavereservasjon).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      brukerIdent: 'P123456',
    });
  });
});
