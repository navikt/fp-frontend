import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './GrupperPanel.stories';

const { Default } = composeStories(stories);

describe('GrupperPanel', () => {
  it('skal vise gruppe i tabell', async () => {
    await Default.run();
    expect(await screen.findByText('Grupper')).toBeInTheDocument();
    expect(screen.getByText('Id')).toBeInTheDocument();
    expect(screen.getByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Antall saksbehandlere')).toBeInTheDocument();
  });
});
