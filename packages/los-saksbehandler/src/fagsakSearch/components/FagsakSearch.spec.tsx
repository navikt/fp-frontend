import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FagsakSearch.stories';

const { Default, IngentingBleFunnet } = composeStories(stories);

describe('<FagsakSearch>', () => {
  it('skal vise tabell med saksnummer og behandlinger', async () => {
    render(<Default />);

    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('41 år')).toBeInTheDocument();
    expect(screen.getByText('12213234')).toBeInTheDocument();
  });

  it('skal ikke finne noe på bruker', async () => {
    render(<IngentingBleFunnet />);
    expect(await screen.findByText('Søket ga ingen treff eller du mangler tilgang til saken')).toBeInTheDocument();
  });
});
