import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';
import { vi } from 'vitest';

import * as stories from './OppgaverPerForsteStonadsdagPanel.stories';

vi.mock('@navikt/fp-los-felles', async importOriginal => {
  const actual = await importOriginal<typeof import('@navikt/fp-los-felles')>();
  return {
    ...actual,
    ReactECharts: () => <div data-testid="mock-chart" />,
  };
});

const { Default } = composeStories(stories);

describe('OppgaverPerForsteStonadsdagPanel', () => {
  it('skal rendre graf', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    render(<Default />);
    expect(
      await screen.findByText('Antall åpne oppgaver for førstegangsbehandlinger fordelt på første stønadsdag'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });
});
