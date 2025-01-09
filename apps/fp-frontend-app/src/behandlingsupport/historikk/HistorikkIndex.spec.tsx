import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './HistorikkIndex.stories';

const { Default } = composeStories(stories);

describe('HistorikkIndex', () => {
  it('skal vise historikk-panel', async () => {
    await applyRequestHandlers(Default.parameters.msw);
    render(<Default />);
    expect(await screen.findByText('Filtrer på behandling')).toBeInTheDocument();
  });
});
