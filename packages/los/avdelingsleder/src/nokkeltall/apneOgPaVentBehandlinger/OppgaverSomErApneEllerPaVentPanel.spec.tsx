import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './OppgaverSomErApneEllerPaVentPanel.stories';

const { Default } = composeStories(stories);

describe('OppgaverSomErApneEllerPaVentPanel', () => {
  // TODO echarts-testing
  mswTest.skip('skal vise graffilter', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
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
