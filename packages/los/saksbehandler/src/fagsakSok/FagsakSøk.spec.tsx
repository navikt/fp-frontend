import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { applyRequestHandlers } from 'msw-storybook-addon';

import * as stories from './FagsakSøk.stories';

const { Default, IngentingBleFunnet } = composeStories(stories);

describe('FagsakSøk', () => {
  it('skal vise tabell med saksnummer og behandlinger', async () => {
    applyRequestHandlers(Default.parameters['msw']);
    render(<Default />);
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('12213234')).toBeInTheDocument();
  });

  it('skal ikke finne noe på bruker', async () => {
    applyRequestHandlers(IngentingBleFunnet.parameters['msw']);
    render(<IngentingBleFunnet />);
    expect(await screen.findByText('Søket ga ingen treff eller du mangler tilgang til saken')).toBeInTheDocument();
  });
});
