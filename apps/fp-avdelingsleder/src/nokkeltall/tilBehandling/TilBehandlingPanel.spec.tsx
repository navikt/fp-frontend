import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';
import { vi } from 'vitest';

import * as stories from './TilBehandlingPanel.stories';

vi.mock('@navikt/fp-los-felles', async importOriginal => {
  const actual = await importOriginal<typeof import('@navikt/fp-los-felles')>();
  return {
    ...actual,
    ReactECharts: () => <div data-testid="mock-chart" />,
  };
});

const { Default } = composeStories(stories);

describe('TilBehandlingPanel', () => {
  it('skal vise graffilter', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Antall åpne oppgaver pr dato')).toBeInTheDocument();

    expect(screen.getByRole('radio', { name: '2 siste uker' })).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByRole('radio', { name: '4 siste uker' })).toHaveAttribute('aria-checked', 'false');

    expect(screen.getByRole('button', { name: 'Foreldrepenger' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Engangsstønad' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Svangerskapspenger' })).toHaveAttribute('aria-pressed', 'true');
  });
});
