import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './VentefristUtløperPanel.stories';

const { Default } = composeStories(stories);

describe('VentefristUtløperPanel', () => {
  // TODO echarts-testing
  it.skip('skal vise graffilter', async () => {
    const { getByLabelText } = render(<Default />);
    expect(
      await screen.findByText('Førstegangsbehandlinger på vent fordelt på utløp av ventefrist'),
    ).toBeInTheDocument();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
