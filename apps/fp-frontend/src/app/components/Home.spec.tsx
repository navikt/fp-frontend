import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './Home.stories';

const { VisAktør, VisSøk, VisSideIkkeFunnet } = composeStories(stories);

describe('Home', () => {
  it('skal rendre aktør-panel', async () => {
    await VisAktør.run();
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
  });

  it('skal rendre søke-panel', async () => {
    await VisSøk.run();
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
  });

  it('skal rendre side-ikke-funnet-panel', async () => {
    await VisSideIkkeFunnet.run();
    expect(await screen.findByText('Beklager, vi finner ikke siden du leter etter.')).toBeInTheDocument();
  });
});
