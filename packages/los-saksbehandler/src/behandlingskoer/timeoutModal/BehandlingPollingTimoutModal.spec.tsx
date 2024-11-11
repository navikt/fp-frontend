import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './BehandlingPollingTimoutModal.stories';

const { Default } = composeStories(stories);

describe('<BehandlingPollingTimoutModal>', () => {
  it('skal rendre modal', async () => {
    render(<Default />);
    expect(await screen.findAllByText('Din økt er gått ut på tid, trykk Fortsett')).toHaveLength(2);
    expect(screen.getByText('Fortsett')).toBeInTheDocument();
  });
});
