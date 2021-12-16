import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './LoadingPanel.stories';

// @ts-ignore Fjern når fiksa
const { Default } = composeStories(stories);

describe('<LoadingPanel>', () => {
  it('skal vise lasteikon', async () => {
    render(<Default />);

    expect(await screen.findByText('Venter...')).toBeInTheDocument();
  });
});
