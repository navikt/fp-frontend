import { composeStories } from '@storybook/react';
import { screen } from '@testing-library/react';

import * as stories from './SaksbehandlerIndex.stories';

const { Default } = composeStories(stories);

describe('SaksbehandlerIndex', () => {
  it('skal saksbehandler-los', async () => {
    await Default.run();
    expect(await screen.findByText('Behandlingskø')).toBeInTheDocument();
    expect(await screen.findByText('Neste i køen')).toBeInTheDocument();
    expect(await screen.findByTitle('Søk')).toBeInTheDocument();
    expect(screen.getByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
  });
});
