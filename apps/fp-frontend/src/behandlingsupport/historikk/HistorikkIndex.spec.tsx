import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './HistorikkIndex.stories';

const { Default } = composeStories(stories);

describe('HistorikkIndex', () => {
  it('skal vise historikk-panel', async () => {
    await Default.run();
    expect(await screen.findByText('Historikk')).toBeInTheDocument();
    expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
    expect(screen.getByLabelText('Utvid behandling detaljer panel')).toBeInTheDocument();
  });
});
