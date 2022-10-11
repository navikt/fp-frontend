import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SaksbehandlerIndex.stories';

const { Default } = composeStories(stories);

describe('<SaksbehandlerIndex>', () => {
  it('skal vise sist behandlede saker', async () => {
    render(<Default />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
    expect(screen.getByText('Siste behandlinger')).toBeInTheDocument();
  });
});
