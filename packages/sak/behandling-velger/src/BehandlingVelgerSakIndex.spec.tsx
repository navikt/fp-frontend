import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './BehandlingVelgerSakIndex.stories';

const { IngenBehandlinger, EnBehandling, AlleBehandlinger } = composeStories(stories);

describe('BehandlingVelgerSakIndex', () => {
  it('skal vise kun en behandling når behandlingslisten ikke er ekspandert', async () => {
    render(<AlleBehandlinger />);
    expect(await screen.findByText('Revurdering')).toBeInTheDocument();
    expect(screen.getAllByTestId('behandling', { exact: false })).toHaveLength(1);
    expect(screen.getByTestId('behandling-3')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Åpne behandlingsliste' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Behandlingsstatus')).toBeInTheDocument();
    expect(screen.queryByText('Avsluttet')).not.toBeInTheDocument();
    expect(screen.queryByText('Resultat')).not.toBeInTheDocument();
    expect(screen.queryByText('-')).not.toBeInTheDocument();
    expect(screen.getAllByText('Opprettet')).toHaveLength(2);
    expect(screen.getByText(/02.10.2017/)).toBeInTheDocument();
    expect(screen.getByText(/Enhet\s+4812/)).toBeInTheDocument();
    expect(screen.getByLabelText('Nav familie- og pensjonsytelser Bergen')).toBeInTheDocument();
  });

  it('skal ekspandere behandlingslisten og da vise alle behandlinger', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);
    expect(await screen.findByText('Førstegangsbehandling')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    expect(await screen.findByText('Revurdering')).toBeInTheDocument();
    expect(screen.getByText('Dokumentinnsyn')).toBeInTheDocument();
    expect(screen.getAllByText('Førstegangsbehandling')).toHaveLength(2);
  });

  it('skal vise at ingen behandlinger er opprettet', async () => {
    render(<IngenBehandlinger />);
    expect(await screen.findByText('Ingen behandlinger er opprettet')).toBeInTheDocument();
  });

  it('skal bare markere aktiv behandling som presset når behandlingslisten er åpen', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);

    expect(screen.getByTestId('behandling-1').querySelector('[data-pressed]')).toBeNull();
    const åpneKnapp = screen.getByRole('button', { name: /Åpne behandlingsliste/ });
    expect(screen.getByRole('button', { name: 'Førstegangsbehandling' })).toHaveAttribute('aria-current', 'page');
    expect(åpneKnapp).toHaveAttribute('aria-expanded', 'false');
    expect(åpneKnapp).toHaveAttribute('aria-controls', screen.getByRole('list').id);

    await userEvent.click(åpneKnapp);

    const aktivBoks = screen.getByTestId('behandling-1').querySelector('[data-pressed]');
    expect(aktivBoks).toHaveAttribute('data-pressed', 'true');
    expect(aktivBoks).toHaveAttribute('data-color', 'neutral');
    expect(screen.getByTestId('behandling-2').querySelector('[data-pressed]')).toBeNull();
    expect(screen.getByRole('button', { name: /Lukk behandlingsliste/ })).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(screen.getByText('Lukk behandlingsliste'));

    expect(screen.getByTestId('behandling-1').querySelector('[data-pressed]')).toBeNull();
  });

  it('skal bare vise lenke til nytt vindu for andre behandlinger uten å endre behandlingslisten', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);

    expect(screen.queryByRole('link', { name: 'Åpne behandlingen i nytt vindu' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    const rader = screen.getAllByTestId('behandling', { exact: false });
    expect(rader).toHaveLength(4);
    expect(
      within(screen.getByTestId('behandling-1')).queryByRole('link', { name: 'Åpne behandlingen i nytt vindu' }),
    ).not.toBeInTheDocument();

    for (const rad of rader.filter(behandlingRad => behandlingRad.dataset['testid'] !== 'behandling-1')) {
      const uuid = rad.dataset['testid']?.replace('behandling-', '');
      const lenke = within(rad).getByRole('link', { name: 'Åpne behandlingen i nytt vindu' });
      expect(lenke).toHaveAttribute('href', `/fagsak/123/behandling/${uuid}/?punkt=default&fakta=default`);
      expect(lenke).toHaveAttribute('target', '_blank');
      expect(lenke).toHaveAttribute('rel', 'noopener noreferrer');
      expect(lenke.closest('button')).toBeNull();

      await userEvent.click(lenke);

      expect(screen.getAllByTestId('behandling', { exact: false })).toHaveLength(4);
    }
  });

  it('skal ha en egen chevronknapp og fortsatt kunne åpne listen fra tittelen', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);

    const tittelKnapp = screen.getByRole('button', { name: 'Førstegangsbehandling' });
    const chevronKnapp = screen.getByRole('button', { name: 'Åpne behandlingsliste' });
    expect(tittelKnapp).not.toContainElement(chevronKnapp);
    expect(chevronKnapp).not.toContainElement(tittelKnapp);

    await userEvent.click(tittelKnapp);
    expect(screen.getAllByTestId('behandling', { exact: false })).toHaveLength(4);
    expect(tittelKnapp).toHaveAttribute('aria-expanded', 'true');

    const lukkKnapp = screen.getByRole('button', { name: 'Lukk behandlingsliste' });
    lukkKnapp.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.getAllByTestId('behandling', { exact: false })).toHaveLength(1);
    expect(chevronKnapp).toHaveAttribute('aria-expanded', 'false');
    expect(chevronKnapp).toHaveFocus();

    await userEvent.keyboard(' ');
    expect(screen.getAllByTestId('behandling', { exact: false })).toHaveLength(4);
  });

  it('skal ikke vise lenke til nytt vindu når saken bare har den aktive behandlingen', () => {
    render(<EnBehandling />);

    expect(screen.queryByRole('link', { name: 'Åpne behandlingen i nytt vindu' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByTestId('behandling-1')).toHaveAttribute('aria-current', 'page');
    expect(screen.getByTestId('behandling-1').querySelector('[data-interaktiv]')).toBeNull();
  });

  it('skal kunne velge en annen behandling med tastaturet', async () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    const lenke = screen.getByRole('link', { name: /Dokumentinnsyn/ });
    expect(lenke).toHaveAttribute('href', '/fagsak/123/behandling/2/?punkt=default&fakta=default');
    lenke.focus();

    await userEvent.keyboard('{Enter}');

    expect(screen.getAllByTestId('behandling', { exact: false })).toHaveLength(1);
    expect(screen.getByTestId('behandling-2')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dokumentinnsyn/ })).toHaveAttribute('aria-current', 'page');
  });

  it('skal vise gjeldende vedtak som synlig tekst bare på riktig behandling', () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    expect(screen.getAllByText('Gjeldende vedtak')).toHaveLength(1);
    expect(within(screen.getByTestId('behandling-1')).getByText('Gjeldende vedtak')).toBeVisible();
    expect(within(screen.getByTestId('behandling-4')).queryByText('Gjeldende vedtak')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Revurdering/ })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByTestId('behandling-1').querySelector('[data-pressed]')).toBeNull();
  });

  it('skal bare vise avsluttet når behandlingen har en avsluttet dato', () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    expect(within(screen.getByTestId('behandling-3')).queryByText('Avsluttet')).not.toBeInTheDocument();
    expect(within(screen.getByTestId('behandling-1')).getAllByText('Avsluttet')).toHaveLength(2);
    expect(within(screen.getByTestId('behandling-1')).getByText(/03.08.2017/)).toBeInTheDocument();
  });

  it('skal sortere behandlingene og vise nyeste først', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);
    expect(await screen.findByText('Førstegangsbehandling')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    expect(await screen.findByText('Revurdering')).toBeInTheDocument();

    const alleRader = screen.getAllByTestId('behandling', { exact: false });
    expect(alleRader.length).toBe(4);
    expect(alleRader[0]!).toHaveTextContent(/Opprettet02.10.2017/);
    expect(alleRader[1]!).toHaveTextContent(/Opprettet02.08.2017/);
    expect(alleRader[2]!).toHaveTextContent(/Opprettet01.08.2017/);
    expect(alleRader[3]!).toHaveTextContent(/Opprettet12.07.2017/);
  });
});
