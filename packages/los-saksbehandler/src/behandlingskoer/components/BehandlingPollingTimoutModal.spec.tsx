import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './BehandlingPollingTimoutModal.stories';

// @ts-ignore Ta vekk når fiksa
const { Default } = composeStories(stories);

describe('<BehandlingPollingTimoutModal>', () => {
  it('skal rendre modal', async () => {
    render(<Default />);
    expect(await screen.findByText('Din økt er gått ut på tid, trykk Fortsett')).toBeInTheDocument();
    expect(screen.getByText('Fortsett')).toBeInTheDocument();
  });
});
