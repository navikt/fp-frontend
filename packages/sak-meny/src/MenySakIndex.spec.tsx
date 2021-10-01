import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './MenySakIndex.stories';

const { MenyMedToHandlinger } = composeStories(stories);

describe('<MenySakIndex>', () => {
  it('skal toggle menyvisning ved trykk på knapp', async () => {
    render(<MenyMedToHandlinger />);

    expect(await screen.findByText('Behandlingsmeny')).toBeInTheDocument();
    expect(screen.getByText('Sett behandling på vent')).toBeInTheDocument();
    expect(screen.getByText('Lag ny behandling')).toBeInTheDocument();
  });
});
