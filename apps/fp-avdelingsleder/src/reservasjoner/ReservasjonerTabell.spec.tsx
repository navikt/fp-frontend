import { composeStories } from '@storybook/react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './ReservasjonerTabell.stories';
import { expect } from 'vitest';

const { ViseAtIngenReservasjonerBleFunnet, VisTabellMedReservasjoner } = composeStories(stories);

describe('ReservasjonerTabell', () => {
  it('skal vise tekst som viser at ingen reservasjoner er lagt til', async () => {
    applyRequestHandlers(ViseAtIngenReservasjonerBleFunnet.parameters['msw'] as MswParameters['msw']);
    render(<ViseAtIngenReservasjonerBleFunnet />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findByText('Ingen reservasjoner funnet')).toBeInTheDocument();
  });

  it('skal vise alle reservasjoner i tabell', async () => {
    applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw'] as MswParameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();
    expect(await screen.findAllByText('Espen Utvikler')).toHaveLength(6);
    expect(await screen.findAllByText('Espen Tester')).toHaveLength(6);
    expect(await screen.findAllByText('Eirik Utvikler')).toHaveLength(6);
    expect(await screen.findAllByText('Jens-Otto Techer')).toHaveLength(6);
    expect(await screen.findAllByText('Tor På Spore')).toHaveLength(6);
    expect(await screen.findAllByText('Siri Utvikler')).toHaveLength(5);
    expect(await screen.findAllByText('Steffen Heffen')).toHaveLength(5);
  });

  it('skal filtrere reservasjoner ved søk på Espen - skal vise flere innslag fra samme person', async () => {
    const user = userEvent.setup();
    applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw'] as MswParameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', { name: /Søk etter saksbehandler på navn/i });
    await user.type(searchInput, 'Esp');

    expect(await screen.findAllByText('Espen Utvikler')).toHaveLength(6);
    expect(await screen.findAllByText('Espen Tester')).toHaveLength(6);
    expect(screen.queryByText('Eirik Utvikler')).not.toBeInTheDocument();
    expect(screen.queryByText('Jens-Otto Techer')).not.toBeInTheDocument();
  });

  it('skal endre dato', async () => {
    applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw'] as MswParameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();

    const actionBtns = await screen.findAllByTitle('Reservasjonsmeny');
    expect(actionBtns).toHaveLength(40);

    await userEvent.click(actionBtns[0]!);
    expect(screen.getByText('Endre dato'));
    expect(screen.getByText('Flytt til ny saksbehandler'));
    expect(screen.getByText('Legg tilbake i felles kø'));

    await userEvent.click(screen.getByText('Endre dato'));
    expect(screen.getByRole('dialog', { name: 'Velg dato som reservasjonen avsluttes' }));
  });

  it('skal vise action meny', async () => {
    applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw'] as MswParameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();

    const actionBtns = await screen.findAllByTitle('Reservasjonsmeny');
    expect(actionBtns).toHaveLength(40);

    await userEvent.click(actionBtns[0]!);
    expect(screen.getByText('Endre dato'));
    expect(screen.getByText('Flytt til ny saksbehandler'));
    expect(screen.getByText('Legg tilbake i felles kø'));

    await userEvent.click(screen.getByText('Endre dato'));
    expect(screen.getByRole('dialog', { name: 'Velg dato som reservasjonen avsluttes' }));

    await userEvent.click(screen.getByText('Flytt til ny saksbehandler'));
    expect(screen.getByRole('dialog', { name: 'Flytt reservasjonen til annen saksbehandler' }));
  });

  it('skal opphøre reservasjon', async () => {
    applyRequestHandlers(VisTabellMedReservasjoner.parameters['msw'] as MswParameters['msw']);
    render(<VisTabellMedReservasjoner />);

    expect(await screen.findByText('Reservasjoner for avdelingen')).toBeInTheDocument();

    const actionBtns = await screen.findAllByTitle('Reservasjonsmeny');
    expect(actionBtns).toHaveLength(40);

    await userEvent.click(actionBtns[0]!);
    expect(screen.getByText('Legg tilbake i felles kø')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Legg tilbake i felles kø'));

    await waitFor(() => {
      expect(screen.getAllByTitle('Reservasjonsmeny')).toHaveLength(39);
    });
  });
});
