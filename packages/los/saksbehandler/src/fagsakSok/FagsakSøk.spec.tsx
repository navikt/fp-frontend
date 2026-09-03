import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './FagsakSøk.stories';

const { Default, IngentingBleFunnet } = composeStories(stories);

describe('FagsakSøk', () => {
  it('skal vise tabell med saksnummer og behandlinger', async () => {
    await Default.run();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('12213234')).toBeInTheDocument();
  });

  it('skal ikke finne noe på bruker', async () => {
    await IngentingBleFunnet.run();
    expect(await screen.findByText('Søket ga ingen treff eller du mangler tilgang til saken')).toBeInTheDocument();
  });
});
