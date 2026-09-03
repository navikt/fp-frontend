import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
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
    await Default.run();
    expect(
      await screen.findByText('Antall åpne oppgaver for førstegangsbehandlinger fordelt på første stønadsdag'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });
});
