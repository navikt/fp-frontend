import { composeStories } from '@storybook/react';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as stories from './FagsakProfileIndex.stories';

const { BehandlingErValgt, BehandlingErIkkeValgt } = composeStories(stories);

describe('FagsakProfileIndex', () => {
  it('skal vise en behandling i liste når behandling er valgt', async () => {
    await BehandlingErValgt.run();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();
    expect(screen.getByText('Behandlingsmeny')).toBeInTheDocument();
    expect(screen.getByText('Venter på mulige faresignaler')).toBeInTheDocument();
    expect(screen.getByText('Finn søker andre steder')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.queryByText('Revurdering')).not.toBeInTheDocument();
  });

  it('skal vise plassholderen når ingen behandling er valgt og åpne listen på forespørsel', async () => {
    await BehandlingErIkkeValgt.run();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Velg behandling' })).toBeVisible();
    expect(screen.queryByText('Førstegangsbehandling')).not.toBeInTheDocument();
    expect(screen.queryByText('Revurdering')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Velg behandling' }));

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();

    const rad = within(screen.getByTestId('card-select-option-2'));
    expect(rad.getByRole('button', { name: /Revurdering/ })).toBeVisible();
    const eksternLenke = rad.getByRole('link', { name: 'Åpne i ny fane' });
    expect(eksternLenke).toHaveAttribute('href', '/fagsak/123/behandling/2/?punkt=default&fakta=default');
    expect(eksternLenke).toHaveAttribute('target', '_blank');
    expect(eksternLenke).toHaveAttribute('rel', 'noopener noreferrer');

    eksternLenke.focus();
    expect(eksternLenke).toHaveFocus();
    await userEvent.click(eksternLenke);

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();
  });

  it('skal navigere mellom behandlinger uten at containerens tastaturhåndtering flytter fokus en gang til', async () => {
    await BehandlingErValgt.run();
    const utløser = await screen.findByRole('button', { name: 'Åpne behandlingsliste' });
    utløser.focus();

    await userEvent.keyboard('{Enter}');

    const rader = screen.getAllByTestId(/^card-select-option-/);
    const første = rader[0]!.querySelector('a, button');
    const andre = rader[1]!.querySelector('a, button');
    expect(første).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(andre).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}');
    expect(første).toHaveFocus();
  });

  it('skal navigere til valgt behandling med standard prosessteg og fakta', async () => {
    await BehandlingErIkkeValgt.run();
    await userEvent.click(await screen.findByRole('button', { name: 'Velg behandling' }));

    await userEvent.click(
      within(screen.getByTestId('card-select-option-2')).getByRole('button', { name: /Revurdering/ }),
    );

    expect(window.location.pathname).toBe('/fagsak/123/behandling/2/');
    const params = new URLSearchParams(window.location.search);
    expect(params.get('punkt')).toBe('default');
    expect(params.get('fakta')).toBe('default');
    expect(screen.queryAllByTestId(/^card-select-option-/)).toHaveLength(0);
  });
});
