import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './SaksbehandlereForSakslisteForm.stories';

const { IngenSaksbehandlere, ToSaksbehandlere, SaksbehandlereSomErGruppert } = composeStories(stories);

describe('SaksbehandlereForSakslisteForm', () => {
  it('skal vise tekst som viser at ingen saksbehandlere er tilknyttet', async () => {
    applyRequestHandlers(IngenSaksbehandlere.parameters['msw'] as MswParameters['msw']);
    render(<IngenSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Avdelingen har ingen saksbehandlere tilknyttet')).toBeInTheDocument();
  });

  it('skal vise to saksbehandlere i listen', async () => {
    applyRequestHandlers(ToSaksbehandlere.parameters['msw'] as MswParameters['msw']);
    render(<ToSaksbehandlere />);
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();
  });

  it('skal vise gruppe og liste med alle saksbehandlere', async () => {
    applyRequestHandlers(SaksbehandlereSomErGruppert.parameters['msw'] as MswParameters['msw']);
    render(<SaksbehandlereSomErGruppert />);
    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();
    expect(screen.getByText('Saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Gruppe 1')).toBeInTheDocument();
    expect(screen.getByText('Antall saksbehandlere')).toBeInTheDocument();
    expect(screen.getAllByText('1')).toHaveLength(3);

    expect(screen.getAllByText('Steffen')).toHaveLength(4);
    expect(screen.getAllByText('Espen Utvikler')).toHaveLength(4);
    expect(screen.getByText('Eirik')).toBeInTheDocument();
  });

  it('skal huke av alle saksbehandler i gruppe ved gruppe avhukning og fjerne ved avhuking', async () => {
    applyRequestHandlers(SaksbehandlereSomErGruppert.parameters['msw'] as MswParameters['msw']);
    render(<SaksbehandlereSomErGruppert />);

    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();

    const gruppeCheckbox = screen.getByRole('checkbox', { name: '1001-checkbox' });
    await userEvent.click(gruppeCheckbox);

    // Expander gruppe 1 for å vise medlemmene
    const expandGruppeKnapp = screen.getByRole('cell', { name: /Gruppe 1/i });
    await userEvent.click(expandGruppeKnapp);

    // Verifiserer at alle medlemmer av Gruppe 1 er huket
    expect(screen.getByRole('checkbox', { name: 'Steffen' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Espen Utvikler' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Anders Utvikler' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Jens-Otto Techlead' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Morgan Designer' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Tor på Spor' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Marte' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Kari Kanari' })).toBeChecked();

    // Klikker gruppe-checkboxen andre gang for å avhuke alle
    await userEvent.click(gruppeCheckbox);

    // Verifiserer at alle medlemmer av Gruppe 1 er avhuket
    expect(screen.getByRole('checkbox', { name: 'Steffen' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Espen Utvikler' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Anders Utvikler' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Jens-Otto Techlead' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Morgan Designer' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Tor på Spor' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Marte' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Kari Kanari' })).not.toBeChecked();
  });

  it('skal vise indeterminate tilstand på gruppe-checkbox når en eller flere er valgt, men ikke alle', async () => {
    applyRequestHandlers(SaksbehandlereSomErGruppert.parameters['msw'] as MswParameters['msw']);
    render(<SaksbehandlereSomErGruppert />);

    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();
    const ekspanderKnappForGruppe = screen.getByRole('cell', { name: 'Drammen' });
    await userEvent.click(ekspanderKnappForGruppe);

    const gruppeCheckbox = screen.getByRole('checkbox', { name: '1002-checkbox' });
    expect(gruppeCheckbox).not.toBeChecked();
    expect(gruppeCheckbox).not.toHaveAttribute('data-state', 'indeterminate');
    expect(screen.getByRole('checkbox', { name: 'Kari Kanari' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Marte' })).not.toBeChecked();

    // Velger en av saksbehandlerene i gruppen
    const førsteCheckboxIGruppen = screen.getByRole('checkbox', { name: 'Kari Kanari' });
    await userEvent.click(førsteCheckboxIGruppen);

    // Verifiserer at steffen er valgt, men ingen av de andre
    expect(screen.getByRole('checkbox', { name: 'Kari Kanari' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Marte' })).not.toBeChecked();

    // Verifiserer at gruppe-checkboxen er i indeterminate tilstand
    expect(screen.getByRole<HTMLInputElement>('checkbox', { name: '1002-checkbox' }).indeterminate).toBeTruthy();
  });
});
