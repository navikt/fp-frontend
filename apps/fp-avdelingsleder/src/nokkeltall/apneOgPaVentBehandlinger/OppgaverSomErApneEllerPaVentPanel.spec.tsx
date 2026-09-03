import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import * as stories from './OppgaverSomErApneEllerPaVentPanel.stories';

vi.mock('@navikt/fp-los-felles', async importOriginal => {
  const actual = await importOriginal<typeof import('@navikt/fp-los-felles')>();
  return {
    ...actual,
    ReactECharts: () => <div data-testid="mock-chart" />,
  };
});

const { Default } = composeStories(stories);

describe('OppgaverSomErApneEllerPaVentPanel', () => {
  it('skal vise graffilter', async () => {
    await Default.run();
    expect(
      await screen.findByText('Åpne behandlinger foreldrepenger fordelt på første uttaksdag fra søknad'),
    ).toBeInTheDocument();

    expect(screen.getByLabelText('Førstegangsbehandling')).toBeChecked();
    expect(screen.getByLabelText('Klage')).toBeChecked();
    expect(screen.getByLabelText('Revurdering')).toBeChecked();
    expect(screen.getByLabelText('Innsyn')).toBeChecked();
    expect(screen.getByLabelText('Anke')).toBeChecked();
  });
});
