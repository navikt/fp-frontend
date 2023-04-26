import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './BehandlingPollingTimoutModal.stories';

const { Default } = composeStories(stories);

describe('<BehandlingPollingTimoutModal>', () => {
  it('skal rendre modal', async () => {
    // @ts-ignore Ta vekk når fiksa
    render(<Default />);
    expect(await screen.findByText('Din økt er gått ut på tid, trykk Fortsett')).toBeInTheDocument();
    expect(screen.getByText('Fortsett')).toBeInTheDocument();
  });
});
