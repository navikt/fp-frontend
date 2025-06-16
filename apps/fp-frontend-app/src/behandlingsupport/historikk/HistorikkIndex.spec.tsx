import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import { mswTest } from '@navikt/fp-utils-test';

import * as stories from './HistorikkIndex.stories';

const { Default } = composeStories(stories);

describe('HistorikkIndex', () => {
  mswTest('skal vise historikk-panel', async ({ setHandlers }) => {
    setHandlers(Default.parameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Historikk')).toBeInTheDocument();
    expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
  });
});
