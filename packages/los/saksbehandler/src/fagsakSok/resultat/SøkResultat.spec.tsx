import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './SøkResultat.stories';

const { Default } = composeStories(stories);

describe('SøkResultat', () => {
  it('skal vise en tabell med en rad og tilhørende kolonnedata', async () => {
    await Default.run();

    expect(await screen.findByText('Saksnummer')).toBeInTheDocument();
    expect(screen.getByText('12213234')).toBeInTheDocument();
    expect(screen.getByText('Under behandling')).toBeInTheDocument();
  });
});
