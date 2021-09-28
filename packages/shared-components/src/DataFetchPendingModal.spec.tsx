import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './LoadingPanel.stories';

const { Default } = composeStories(stories);

describe('<DataFetchPendingModal>', () => {
  it('skal rendre modal når timer er gått ut', async () => {
    render(<Default />);

    expect(await screen.findByText('Venter...')).toBeInTheDocument();
  });
});
