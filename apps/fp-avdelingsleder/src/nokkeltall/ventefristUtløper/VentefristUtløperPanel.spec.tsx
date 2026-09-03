import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import * as stories from './VentefristUtløperPanel.stories';

vi.mock('@navikt/fp-los-felles', async importOriginal => {
  const actual = await importOriginal<typeof import('@navikt/fp-los-felles')>();
  return {
    ...actual,
    ReactECharts: () => <div data-testid="mock-chart" />,
  };
});

const { Default } = composeStories(stories);

describe('VentefristUtløperPanel', () => {
  it('skal vise graf', async () => {
    await Default.run();
    expect(
      await screen.findByText('Førstegangsbehandlinger på vent fordelt på utløp av ventefrist'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('mock-chart')).toBeInTheDocument();
  });
});
