import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './FordelingAvBehandlingstypePanel.stories';

const { Default } = composeStories(stories);

describe('FordelingAvBehandlingstypePanel', () => {
  // TODO echarts-testing
  mswTest.skip('skal vise graffilter', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Antall åpne oppgaver nå')).toBeInTheDocument();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
