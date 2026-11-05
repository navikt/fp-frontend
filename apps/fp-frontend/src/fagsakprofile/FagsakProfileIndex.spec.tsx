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

  it('skal vise alle behandlinger i liste når ingen behandling er valgt', async () => {
    await BehandlingErIkkeValgt.run();

    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('123 - Under behandling')).toBeInTheDocument();

    expect(screen.getByText('Førstegangsbehandling')).toBeInTheDocument();
    expect(screen.getByText('Revurdering')).toBeInTheDocument();

    const rad = within(screen.getByTestId('behandling-2'));
    expect(rad.getByRole('link', { name: /Revurdering/ })).toHaveAttribute(
      'href',
      '/fagsak/123/behandling/2/?punkt=default&fakta=default',
    );
    const eksternLenke = rad.getByRole('link', { name: 'Åpne behandlingen i nytt vindu' });
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

    const rader = screen.getAllByTestId(/^behandling-/);
    const første = rader[0]!.querySelector('a, button');
    const andre = rader[1]!.querySelector('a, button');
    expect(første).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(andre).toHaveFocus();
    await userEvent.keyboard('{ArrowUp}');
    expect(første).toHaveFocus();
  });
});
