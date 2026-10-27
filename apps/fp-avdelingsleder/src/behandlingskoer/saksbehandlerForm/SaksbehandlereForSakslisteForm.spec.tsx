import { composeStories } from '@storybook/react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './SaksbehandlereForSakslisteForm.stories';

const { lagreSakslisteSaksbehandler } = vi.hoisted(() => ({
  lagreSakslisteSaksbehandler: vi.fn(() => Promise.resolve()),
}));

vi.mock('../../data/fplosAvdelingslederApi', async importOriginal => ({
  ...(await importOriginal<typeof import('../../data/fplosAvdelingslederApi')>()),
  lagreSakslisteSaksbehandler,
}));

const { IngenSaksbehandlere, ToSaksbehandlere, SaksbehandlereSomErGruppert } = composeStories(stories);

describe('SaksbehandlereForSakslisteForm', () => {
  beforeEach(() => {
    lagreSakslisteSaksbehandler.mockClear();
  });

  it('skal lagre endrede saksbehandlere ved gruppevalg', async () => {
    await SaksbehandlereSomErGruppert.run();

    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();

    const gruppeCheckbox = screen.getByRole('checkbox', { name: 'Velg alle i Gruppe 1' });
    await userEvent.click(gruppeCheckbox);

    const gruppe1Identer = ['S34354', 'E23232', 'A123456', 'T123421', 'M00000', 'S00001', 'M00002', 'K123456'];
    const endredeIdenter = gruppe1Identer.filter(ident => ident !== 'S34354');
    await waitFor(() => expect(lagreSakslisteSaksbehandler).toHaveBeenCalledTimes(endredeIdenter.length));
    endredeIdenter.forEach(ident => {
      expect(lagreSakslisteSaksbehandler).toHaveBeenCalledWith(1, ident, true, 'Nav Vikafossen');
    });

    lagreSakslisteSaksbehandler.mockClear();
    await userEvent.click(gruppeCheckbox);

    await waitFor(() => expect(lagreSakslisteSaksbehandler).toHaveBeenCalledTimes(gruppe1Identer.length));
    gruppe1Identer.forEach(ident => {
      expect(lagreSakslisteSaksbehandler).toHaveBeenCalledWith(1, ident, false, 'Nav Vikafossen');
    });
  });

  it('skal vise tekst som viser at ingen saksbehandlere er tilknyttet', async () => {
    await IngenSaksbehandlere.run();
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Avdelingen har ingen saksbehandlere tilknyttet')).toBeInTheDocument();
  });

  it('skal vise to saksbehandlere i listen', async () => {
    await ToSaksbehandlere.run();
    expect(await screen.findByText('Saksbehandlere')).toBeInTheDocument();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('Steffen')).toBeInTheDocument();
  });

  it('skal vise gruppe og liste med alle saksbehandlere', async () => {
    await SaksbehandlereSomErGruppert.run();
    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();
    expect(screen.getByText('Saksbehandlere')).toBeInTheDocument();
    expect(screen.getByText('Gruppe 1')).toBeInTheDocument();
    expect(screen.getByText('Antall saksbehandlere')).toBeInTheDocument();
    expect(screen.getAllByText('1')).toHaveLength(3);

    expect(screen.getByLabelText('Alle saksbehandlere')).toHaveTextContent('Steffen');
    expect(screen.getAllByText('Espen Utvikler')).toHaveLength(4);
    expect(screen.getByText('Eirik')).toBeInTheDocument();

    expect(screen.getByRole<HTMLInputElement>('checkbox', { name: 'Velg alle i Gruppe 1' }).indeterminate).toBeTruthy();
  });

  it('skal huke av alle saksbehandler i gruppe ved gruppe avhukning og fjerne ved avhuking', async () => {
    await SaksbehandlereSomErGruppert.run();

    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();

    const gruppeCheckbox = screen.getByRole('checkbox', { name: 'Velg alle i Gruppe 1' });
    await userEvent.click(gruppeCheckbox);

    // Expander gruppe 1 for å vise medlemmene
    await userEvent.click(screen.getByText('Gruppe 1'));

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
    await SaksbehandlereSomErGruppert.run();

    expect(await screen.findByText('Gruppenavn')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('cell', { name: 'Drammen' }));

    const gruppeCheckbox = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Velg alle i Drammen' });
    expect(gruppeCheckbox).not.toBeChecked();
    expect(gruppeCheckbox.indeterminate).toBeFalsy();
    expect(screen.getByRole('checkbox', { name: 'Kari Kanari' })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Marte' })).not.toBeChecked();

    await userEvent.click(screen.getByRole('checkbox', { name: 'Kari Kanari' }));

    expect(gruppeCheckbox.indeterminate).toBeTruthy();
    expect(screen.getByRole('checkbox', { name: 'Kari Kanari' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Marte' })).not.toBeChecked();
  });
});
