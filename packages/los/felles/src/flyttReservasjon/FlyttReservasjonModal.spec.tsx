import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FlyttReservasjonModal.stories';

const { Default, MedTreffPåSøk } = composeStories(stories);

describe('FlyttReservasjonModal', () => {
  it('skal vise søkeknapp som disablet når en ikke har skrevet inn noen tegn i brukerident-feltet', async () => {
    render(<Default />);

    expect(await screen.findByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    expect(screen.getByText('Søk').closest('button')).toBeDisabled();
    expect(screen.getByText('OK').closest('button')).toBeDisabled();
  });

  it('skal vise at oppgitt brukerident ikke finnes', async () => {
    const utils = render(<Default />);

    expect(await screen.findByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    const brukerIdentInput = utils.getByLabelText('Brukerident');
    await userEvent.type(brukerIdentInput, 'TESTTES');

    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Kan ikke finne brukerident')).toBeInTheDocument();
    expect(screen.getByText('OK').closest('button')).toBeDisabled();
  });

  it('skal vise finne brukerident og så lagre begrunnelse for flytting', async () => {
    const flyttOppgavereservasjon = vi.fn();
    const utils = render(<MedTreffPåSøk flyttOppgavereservasjon={flyttOppgavereservasjon} />);

    expect(await screen.findByText('Flytt reservasjonen til annen saksbehandler')).toBeInTheDocument();

    const brukerIdentInput = utils.getByLabelText('Brukerident');
    await userEvent.type(brukerIdentInput, 'TESTTES');

    expect(await screen.findByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeEnabled();

    await userEvent.click(screen.getByText('Søk'));

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('OK').closest('button')).toBeDisabled();

    const begrunnelseInput = utils.getByLabelText('Begrunn flytting av reservasjonen');
    await userEvent.type(begrunnelseInput, 'Dette er en begrunnelse');

    await waitFor(() => expect(screen.getByText('OK')).toBeEnabled());

    await userEvent.click(screen.getByText('OK'));

    await waitFor(() => expect(flyttOppgavereservasjon).toHaveBeenCalledTimes(1));
    expect(flyttOppgavereservasjon).toHaveBeenNthCalledWith(1, {
      begrunnelse: 'Dette er en begrunnelse',
      brukerIdent: 'R232323',
    });
  });
});
