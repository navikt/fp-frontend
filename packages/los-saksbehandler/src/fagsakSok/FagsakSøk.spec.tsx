import React from 'react';
import dayjs from 'dayjs';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './FagsakSøk.stories';

const { Default, IngentingBleFunnet } = composeStories(stories);

describe('<FagsakSøk>', () => {
  it('skal vise tabell med saksnummer og behandlinger', async () => {
    render(<Default />);

    const alder = dayjs().diff('1980-10-10', 'years');

    expect(await screen.findAllByText('Søk')).toHaveLength(2);
    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText(`${alder} år`)).toBeInTheDocument();
    expect(screen.getByText('12213234')).toBeInTheDocument();
  });

  it('skal ikke finne noe på bruker', async () => {
    render(<IngentingBleFunnet />);
    expect(await screen.findByText('Søket ga ingen treff eller du mangler tilgang til saken')).toBeInTheDocument();
  });
});
