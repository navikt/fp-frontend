import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';
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
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    const { getByLabelText } = render(<Default />);
    expect(
      await screen.findByText('Åpne behandlinger foreldrepenger fordelt på første uttaksdag fra søknad'),
    ).toBeInTheDocument();

    expect(getByLabelText('Førstegangsbehandling')).toBeChecked();
    expect(getByLabelText('Klage')).toBeChecked();
    expect(getByLabelText('Revurdering')).toBeChecked();
    expect(getByLabelText('Innsyn')).toBeChecked();
    expect(getByLabelText('Anke')).toBeChecked();
  });
});
