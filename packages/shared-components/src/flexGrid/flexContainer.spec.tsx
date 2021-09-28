import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FlexContainer.stories';

const { Default } = composeStories(stories);

describe('<FlexContainer>', () => {
  it('skal rendre korrekt', async () => {
    render(<Default />);

    expect(await screen.findByText('Tekst 1')).toBeInTheDocument();
    expect(screen.getByText('Tekst 2')).toBeInTheDocument();
    expect(screen.getByText('Tekst 3')).toBeInTheDocument();
    expect(screen.getByText('Tekst 4')).toBeInTheDocument();
    expect(screen.getByText('Tekst 5')).toBeInTheDocument();
    expect(screen.getByText('Tekst 6')).toBeInTheDocument();
  });
});
