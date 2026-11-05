import { composeStories } from '@storybook/react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './BehandlingVelgerSakIndex.stories';

const { IngenBehandlinger, EnBehandling, AlleBehandlinger } = composeStories(stories);

describe('BehandlingVelgerSakIndex', () => {
  it('skal vise kun en behandling når behandlingslisten ikke er ekspandert', async () => {
    render(<AlleBehandlinger />);
    expect(await screen.findByText('Revurdering')).toBeInTheDocument();
    expect(screen.queryAllByTestId(/^card-select-option-/)).toHaveLength(0);
    expect(screen.getByTestId('card-select-selected')).toHaveTextContent('Revurdering');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Åpne behandlingsliste' })).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Behandlingsstatus')).toBeInTheDocument();
    expect(screen.queryByText('Avsluttet')).not.toBeInTheDocument();
    expect(screen.queryByText('Resultat')).not.toBeInTheDocument();
    expect(screen.queryByText('-')).not.toBeInTheDocument();
    expect(screen.getAllByText('Opprettet')).toHaveLength(2);
    expect(screen.getByText(/02.10.2017/)).toBeInTheDocument();
    const enhet = screen.getByText('Enhet', { selector: 'dt' }).nextElementSibling;
    expect(enhet).toHaveTextContent('4812 - Nav familie- og pensjonsytelser Bergen');
    expect(enhet).toBeVisible();
  });

  it('skal ekspandere behandlingslisten og da vise alle behandlinger', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);
    expect(await screen.findByText('Førstegangsbehandling')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    expect(await screen.findByText('Revurdering')).toBeInTheDocument();
    expect(screen.getByText('Dokumentinnsyn')).toBeInTheDocument();
    expect(screen.getAllByText('Førstegangsbehandling')).toHaveLength(3);
  });

  it('skal vise at ingen behandlinger er opprettet', async () => {
    render(<IngenBehandlinger />);
    expect(await screen.findByText('Ingen behandlinger er opprettet')).toBeInTheDocument();
    expect(screen.queryByText('Velg behandling')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('skal bare markere valgt behandling i menyen, ikke feltet over', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);

    const valgtBehandling = screen.getByTestId('card-select-selected');
    expect(valgtBehandling.querySelector('[data-pressed]')).toBeNull();
    const åpneKnapp = screen.getByRole('button', { name: /Åpne behandlingsliste/ });
    expect(screen.getByRole('button', { name: 'Førstegangsbehandling' })).toHaveAttribute('aria-expanded', 'false');
    expect(åpneKnapp).toHaveAttribute('aria-expanded', 'false');
    expect(åpneKnapp).toHaveAttribute('aria-controls', screen.getByRole('list', { hidden: true }).id);

    await userEvent.click(åpneKnapp);

    const aktivBoks = screen.getByTestId('card-select-option-1').querySelector('[data-pressed]');
    expect(aktivBoks).toHaveAttribute('data-pressed', 'true');
    expect(aktivBoks).toHaveAttribute('data-color', 'accent');
    expect(valgtBehandling.querySelector('[data-pressed]')).toBeNull();
    expect(screen.getByTestId('card-select-option-2').querySelector('[data-pressed]')).toBeNull();
    expect(screen.getByRole('button', { name: /Lukk behandlingsliste/ })).toHaveAttribute('aria-expanded', 'true');

    await userEvent.click(screen.getByText('Lukk behandlingsliste'));

    expect(screen.queryByTestId('card-select-option-1')).not.toBeInTheDocument();
    expect(valgtBehandling.querySelector('[data-pressed]')).toBeNull();
  });

  it('skal bare vise lenke til nytt vindu for andre behandlinger uten å endre behandlingslisten', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);

    expect(screen.queryByRole('link', { name: 'Åpne i ny fane' })).not.toBeInTheDocument();
    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    const rader = screen.getAllByTestId(/^card-select-option-/);
    expect(rader).toHaveLength(4);
    expect(
      within(screen.getByTestId('card-select-option-1')).queryByRole('link', {
        name: 'Åpne i ny fane',
      }),
    ).not.toBeInTheDocument();

    for (const rad of rader.filter(behandlingRad => behandlingRad.dataset['testid'] !== 'card-select-option-1')) {
      const uuid = rad.dataset['testid']?.replace('card-select-option-', '');
      const lenke = within(rad).getByRole('link', { name: 'Åpne i ny fane' });
      expect(lenke).toHaveAttribute('href', `/fagsak/123/behandling/${uuid}/?punkt=default&fakta=default`);
      expect(lenke).toHaveAttribute('target', '_blank');
      expect(lenke).toHaveAttribute('rel', 'noopener noreferrer');
      expect(lenke.closest('button')).toBeNull();

      await userEvent.click(lenke);

      expect(screen.getAllByTestId(/^card-select-option-/)).toHaveLength(4);
    }
  });

  it('skal ha en egen chevronknapp og fortsatt kunne åpne listen fra tittelen', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);

    const tittelKnapp = screen.getByRole('button', { name: 'Førstegangsbehandling' });
    const chevronKnapp = screen.getByRole('button', { name: 'Åpne behandlingsliste' });
    expect(tittelKnapp).not.toContainElement(chevronKnapp);
    expect(chevronKnapp).not.toContainElement(tittelKnapp);

    await userEvent.click(tittelKnapp);
    expect(screen.getAllByTestId(/^card-select-option-/)).toHaveLength(4);
    expect(tittelKnapp).toHaveAttribute('aria-expanded', 'true');
    expect(tittelKnapp).toHaveFocus();

    const lukkKnapp = screen.getByRole('button', { name: 'Lukk behandlingsliste' });
    lukkKnapp.focus();
    await userEvent.keyboard('{Enter}');
    expect(screen.queryAllByTestId(/^card-select-option-/)).toHaveLength(0);
    expect(chevronKnapp).toHaveAttribute('aria-expanded', 'false');
    expect(chevronKnapp).toHaveFocus();

    await userEvent.keyboard(' ');
    expect(screen.getAllByTestId(/^card-select-option-/)).toHaveLength(4);
  });

  it.each([
    { utløser: 'Førstegangsbehandling', tast: '{Enter}', uuid: '1' },
    { utløser: 'Åpne behandlingsliste', tast: ' ', uuid: '1' },
    { utløser: 'Revurdering', tast: ' ', uuid: '3' },
    { utløser: 'Åpne behandlingsliste', tast: '{Enter}', uuid: '3' },
  ])('skal fokusere første behandling ved åpning med $tast fra $utløser', async ({ utløser, tast, uuid }) => {
    render(<AlleBehandlinger behandlingUuid={uuid} />);
    const valgtKnapp = within(screen.getByTestId('card-select-selected')).getByRole('button', {
      name: /Revurdering|Førstegangsbehandling/,
    });
    screen.getByRole('button', { name: new RegExp(utløser) }).focus();

    await userEvent.keyboard(tast);

    const førsteRad = screen.getAllByTestId(/^card-select-option-/)[0]!;
    expect(within(førsteRad).getByRole('button', { name: /Revurdering/ })).toHaveFocus();

    await userEvent.keyboard('{Escape}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(valgtKnapp).toHaveFocus();
  });

  it('skal åpne med pil ned og navigere mellom behandlinger med piltaster og Home/End', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);
    screen.getByRole('button', { name: 'Førstegangsbehandling' }).focus();

    await userEvent.keyboard('{ArrowDown}');

    const rader = screen.getAllByTestId(/^card-select-option-/);
    const første = within(rader[0]!).getByRole('button', { name: /Revurdering/ });
    const andre = within(rader[1]!).getByRole('button', { name: /Førstegangsbehandling/ });
    const tredje = within(rader[2]!).getByRole('button', { name: /Dokumentinnsyn/ });
    const siste = within(rader[3]!).getByRole('button', { name: /Førstegangsbehandling/ });
    expect(første).toHaveFocus();

    await userEvent.keyboard('{ArrowRight}');
    expect(within(rader[0]!).getByRole('link', { name: 'Åpne i ny fane' })).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(første).toHaveFocus();
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{ArrowDown}');
    expect(andre).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    expect(tredje).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}');
    expect(andre).toHaveFocus();
    await userEvent.keyboard('{End}');
    expect(siste).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    expect(første).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}');
    expect(siste).toHaveFocus();
    await userEvent.keyboard('{Home}');
    expect(første).toHaveFocus();

    await userEvent.keyboard('{Enter}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByTestId('card-select-selected')).toHaveTextContent('Revurdering');
  });

  it('skal ikke vise lenke til nytt vindu når saken bare har den aktive behandlingen', () => {
    render(<EnBehandling />);

    expect(screen.queryByRole('link', { name: 'Åpne i ny fane' })).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByTestId('card-select-selected')).toHaveAttribute('aria-current', 'true');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('skal vise plassholder og la den eneste behandlingen velges fra nedtrekket', async () => {
    render(<EnBehandling behandlingUuid={undefined} />);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.queryByText('Førstegangsbehandling')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Velg behandling' }));

    expect(screen.getByRole('list')).toBeVisible();
    const rad = screen.getByTestId('card-select-option-1');
    expect(rad).toBeVisible();
    const velgKnapp = within(rad).getByRole('button', { name: 'Førstegangsbehandling' });

    await userEvent.click(velgKnapp);

    expect(screen.getByTestId('card-select-selected')).toHaveTextContent('Førstegangsbehandling');
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('skal kunne velge en annen behandling med tastaturet', async () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    screen.getByRole('button', { name: /Dokumentinnsyn/ }).focus();

    await userEvent.keyboard('{Enter}');

    expect(screen.queryAllByTestId(/^card-select-option-/)).toHaveLength(0);
    expect(screen.getByTestId('card-select-selected')).toHaveTextContent('Dokumentinnsyn');
    expect(screen.getByRole('button', { name: /Dokumentinnsyn/ })).toHaveAttribute('aria-expanded', 'false');
  });

  it('skal vise gjeldende vedtak som synlig tekst bare på riktig behandling', () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    expect(screen.getAllByText('Gjeldende vedtak')).toHaveLength(1);
    expect(within(screen.getByTestId('card-select-option-1')).getByText('Gjeldende vedtak')).toBeVisible();
    expect(within(screen.getByTestId('card-select-option-4')).queryByText('Gjeldende vedtak')).not.toBeInTheDocument();
    expect(
      within(screen.getByTestId('card-select-selected')).getByRole('button', { name: /Revurdering/ }),
    ).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByTestId('card-select-option-1').querySelector('[data-pressed]')).toBeNull();
  });

  it('skal bare vise avsluttet når behandlingen har en avsluttet dato', () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    expect(within(screen.getByTestId('card-select-option-3')).queryByText('Avsluttet')).not.toBeInTheDocument();
    expect(within(screen.getByTestId('card-select-option-1')).getAllByText('Avsluttet')).toHaveLength(2);
    expect(within(screen.getByTestId('card-select-option-1')).getByText(/03.08.2017/)).toBeInTheDocument();
  });

  it('skal beholde valgt behandling over menyen og vise alle valg med nyeste først', async () => {
    render(<AlleBehandlinger behandlingUuid="1" />);
    expect(await screen.findByText('Førstegangsbehandling')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Åpne behandlingsliste'));

    expect(await screen.findByText('Revurdering')).toBeInTheDocument();

    expect(screen.getByTestId('card-select-selected')).toHaveTextContent('Førstegangsbehandling');
    const alleRader = screen.getAllByTestId(/^card-select-option-/);
    expect(alleRader.length).toBe(4);
    expect(alleRader[0]!).toHaveTextContent(/Opprettet02.10.2017/);
    expect(alleRader[1]!).toHaveTextContent(/Opprettet02.08.2017/);
    expect(alleRader[2]!).toHaveTextContent(/Opprettet01.08.2017/);
    expect(alleRader[3]!).toHaveTextContent(/Opprettet12.07.2017/);
  });

  it('skal lukke menyen uten navigasjon når valgt behandling velges på nytt', async () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    const utløser = within(screen.getByTestId('card-select-selected')).getByRole('button', { name: /Revurdering/ });
    const valgtRad = within(screen.getByTestId('card-select-option-3'));
    const velgKnapp = valgtRad.getByRole('button', { name: /Revurdering/ });
    expect(velgKnapp).toHaveAttribute('aria-current', 'true');
    expect(velgKnapp).not.toHaveAttribute('aria-expanded');
    expect(valgtRad.queryByRole('button', { name: 'Lukk behandlingsliste' })).not.toBeInTheDocument();
    velgKnapp.focus();

    await userEvent.keyboard('{Enter}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByTestId('card-select-selected')).toHaveTextContent('Revurdering');
    expect(utløser).toHaveAttribute('aria-expanded', 'false');
    expect(utløser).toHaveFocus();
  });

  it('skal lukke menyen med Escape og flytte fokus tilbake til feltet', async () => {
    render(<AlleBehandlinger skalViseAlleBehandlinger />);

    screen.getByRole('button', { name: /Dokumentinnsyn/ }).focus();

    await userEvent.keyboard('{Escape}');

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(
      within(screen.getByTestId('card-select-selected')).getByRole('button', { name: /Revurdering/ }),
    ).toHaveFocus();
  });

  it('skal lukke menyen ved klikk utenfor og beholde fokus på det som klikkes', async () => {
    render(
      <>
        <AlleBehandlinger />
        <button type="button">Utenfor</button>
      </>,
    );
    await userEvent.click(screen.getByRole('button', { name: 'Åpne behandlingsliste' }));
    screen.getByRole('button', { name: /Dokumentinnsyn/ }).focus();

    await userEvent.click(screen.getByRole('button', { name: 'Utenfor' }));

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Utenfor' })).toHaveFocus();
  });

  it('skal lukke menyen når fokus flyttes videre med Tab uten å fange fokus', async () => {
    render(
      <>
        <AlleBehandlinger skalViseAlleBehandlinger />
        <button type="button">Utenfor</button>
      </>,
    );
    within(screen.getByTestId('card-select-option-3'))
      .getByRole('button', { name: /Revurdering/ })
      .focus();

    await userEvent.tab();

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Utenfor' })).toHaveFocus();
  });

  it('skal åpne listen fra plassholderen med piltast og bruke Tab til å forlate listen', async () => {
    render(
      <>
        <button type="button">Før listen</button>
        <AlleBehandlinger behandlingUuid={undefined} />
        <button type="button">Etter listen</button>
      </>,
    );

    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Før listen' })).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Velg behandling' })).toHaveFocus();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    await userEvent.keyboard('{ArrowDown}');
    expect(
      within(screen.getByTestId('card-select-option-3')).getByRole('button', { name: /Revurdering/ }),
    ).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    expect(
      within(screen.getByTestId('card-select-option-1')).getByRole('button', { name: /Førstegangsbehandling/ }),
    ).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole('button', { name: 'Etter listen' })).toHaveFocus();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });
});
