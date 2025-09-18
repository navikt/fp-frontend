import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers, type MswParameters } from 'msw-storybook-addon';

import * as stories from './TilBehandlingPanel.stories';

const { Default } = composeStories(stories);

describe('TilBehandlingPanel', () => {
  // TODO echarts-testing
  it.skip('skal vise graffilter', async () => {
    applyRequestHandlers(Default.parameters['msw'] as MswParameters['msw']);
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Antall åpne oppgaver pr dato')).toBeInTheDocument();

    expect(screen.getByText<HTMLOptionElement>('2 siste uker').selected).toBeTruthy();
    expect(screen.getByText<HTMLOptionElement>('4 siste uker').selected).toBeFalsy();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
