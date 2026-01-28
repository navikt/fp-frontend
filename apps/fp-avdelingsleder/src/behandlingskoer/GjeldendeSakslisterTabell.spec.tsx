import { composeStories } from '@storybook/react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';
import { vi } from 'vitest';

import * as stories from './GjeldendeSakslisterTabell.stories';

vi.mock('@navikt/fp-los-felles', () => ({
  AktiveOgTilgjengeligeOppgaverGraf: () => <div data-testid="mocked-graph">Mocked Graph</div>,
}));

const { TabellNårDetIkkeFinnesBehandlingskøer, TabellNårDetFinnesEnBehandlingskø } = composeStories(stories);

describe('GjeldendeSakslisterTabell', () => {
  it('skal vise at ingen behandlingskøer er laget og så legge til en ny kø', async () => {
    applyRequestHandlers(TabellNårDetIkkeFinnesBehandlingskøer.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetIkkeFinnesBehandlingskøer />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByText('Navn')).not.toBeInTheDocument();

    await userEvent.click(screen.getByText('Legg til behandlingskø'));

    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(await screen.findByText('Ny liste')).toBeInTheDocument();
  });

  it('skal vise antall saksbehandlere og oppgaver for kø', async () => {
    applyRequestHandlers(TabellNårDetFinnesEnBehandlingskø.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetFinnesEnBehandlingskø />);
    const rows = await screen.findAllByRole('row');
    const headerRow = rows[0]!;
    expect(headerRow).toHaveTextContent('Navn');
    expect(headerRow).toHaveTextContent('Antall saksbehandlere');
    expect(headerRow).toHaveTextContent('Alle oppgaver');
    expect(headerRow).toHaveTextContent('Tilgjengelige oppgaver');
    expect(headerRow).toHaveTextContent('Graf');

    const dataRow = rows[1]!;
    expect(dataRow).toHaveTextContent('Saksliste 1');
    expect(dataRow).toHaveTextContent('1'); // Antall saksbehandlere
    expect(dataRow).toHaveTextContent('33'); // Antall oppgaver
    expect(dataRow).toHaveTextContent('25'); // Antall tilgjengelige oppgaver
  });

  it('skal vise graf ved å trykke på graf ikon', async () => {
    applyRequestHandlers(TabellNårDetFinnesEnBehandlingskø.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetFinnesEnBehandlingskø />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    // Klikk på graf-ikonet (index 1)
    await userEvent.click(screen.getByTitle('Vis oppgave graf'));

    expect(await screen.findByText('Antall oppgaver')).toBeInTheDocument();

    // Lukk dialogen ved å klikke på Lukk-knappen
    const lukkeKnapper = screen.getAllByRole('button', { name: /lukk/i });
    await userEvent.click(lukkeKnapper[lukkeKnapper.length - 1]!);

    expect(screen.queryByText('Antall oppgaver')).not.toBeInTheDocument();
  });

  it('skal vise slette kø ved å trykke på ikon for sletting', async () => {
    applyRequestHandlers(TabellNårDetFinnesEnBehandlingskø.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetFinnesEnBehandlingskø />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getAllByRole('img')[2]!);

    expect(await screen.findByText('Ønsker du å slette Saksliste 1?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    expect(screen.queryByText('Ønsker du å slette Saksliste 1?')).not.toBeInTheDocument();
  });

  it('skal legge til en ny kø ved bruk av tastaturet (enter)', async () => {
    applyRequestHandlers(TabellNårDetIkkeFinnesBehandlingskøer.parameters['msw'] as MswParameters['msw']);
    render(<TabellNårDetIkkeFinnesBehandlingskøer />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByText('Navn')).not.toBeInTheDocument();

    fireEvent.keyDown(screen.getByText('Legg til behandlingskø'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    });

    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Ny liste')).toBeInTheDocument();
  });
});
