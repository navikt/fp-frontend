import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';
import { vi } from 'vitest';

import * as stories from './EndreSakslisterPanel.stories';

vi.mock('@navikt/fp-los-felles', () => ({
  AktiveOgTilgjengeligeOppgaverGraf: vi.fn(() => null),
  LukkedeOppgaverPanel: vi.fn(() => null),
}));

const { IngenSakslister, ToSakslister } = composeStories(stories);

describe('EndreSakslisterPanel', () => {
  it('skal vise at ingen behandlingskøer er laget og så legge til en ny kø', async () => {
    applyRequestHandlers(IngenSakslister.parameters['msw'] as MswParameters['msw']);
    render(<IngenSakslister />);
    expect(await screen.findByText('Ingen behandlingskøer er laget')).toBeInTheDocument();
    expect(screen.queryByRole('columnheader', { name: 'Navn' })).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Legg til behandlingskø' }));

    expect(screen.getByRole('columnheader', { name: 'Navn' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Ny liste' })).toBeInTheDocument();
  });

  it('skal vise antall saksbehandlere og oppgaver for kø', async () => {
    applyRequestHandlers(ToSakslister.parameters['msw'] as MswParameters['msw']);
    render(<ToSakslister />);
    const rows = await screen.findAllByRole('row');
    const headerRow = rows[0]!;
    expect(headerRow).toHaveTextContent('Navn');
    expect(headerRow).toHaveTextContent('Antall saksbehandlere');
    expect(headerRow).toHaveTextContent('Alle oppgaver');
    expect(headerRow).toHaveTextContent('Reserverte oppgaver');

    const saksliste1 = rows[1]!;
    expect(saksliste1).toHaveTextContent('A00 Hurtig kø');
    expect(saksliste1).toHaveTextContent('0'); // Antall saksbehandlere
    expect(saksliste1).toHaveTextContent('22'); // Behandlinger på vent
    expect(saksliste1).toHaveTextContent('33'); // Alle oppgaver
    expect(saksliste1).toHaveTextContent('8'); // Reserverte oppgaver

    const saksliste2 = rows[2]!;
    expect(saksliste2).toHaveTextContent('A02 - Registrere papirsøknad');
    expect(saksliste2).toHaveTextContent('0'); // Antall saksbehandlere
    expect(saksliste2).toHaveTextContent('10'); // Behandlinger på vent
    expect(saksliste2).toHaveTextContent('12'); // Alle oppgaver
    expect(saksliste2).toHaveTextContent('4'); // Reserverte oppgaver
  });

  it('skal vise graf ved å trykke på graf ikon', async () => {
    applyRequestHandlers(ToSakslister.parameters['msw'] as MswParameters['msw']);
    render(<ToSakslister />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Vis oppgave graf for A00 Hurtig kø'));

    const dialog = await screen.findByRole('dialog');
    expect(await within(dialog).findByText('Aktive og ledige oppgaver')).toBeInTheDocument();

    // Lukk dialogen ved å klikke på Lukk-knappen
    const lukkeKnapp = screen.getAllByRole('button', { name: 'Lukk' })[1]!;
    await userEvent.click(lukkeKnapp);

    expect(screen.queryByText('Aktive og ledige oppgaver')).not.toBeInTheDocument();
  });

  it('skal vise slette kø ved å trykke på ikon for sletting', async () => {
    applyRequestHandlers(ToSakslister.parameters['msw'] as MswParameters['msw']);
    render(<ToSakslister />);
    expect(await screen.findByText('Navn')).toBeInTheDocument();

    await userEvent.click(screen.getByTitle('Slett saksliste A00 Hurtig kø'));

    expect(await screen.findByText('Ønsker du å slette A00 Hurtig kø?')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Ja'));

    expect(screen.queryByText('Ønsker du å slette A00 Hurtig kø?')).not.toBeInTheDocument();
  });
});
