import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FordelingAvBehandlingstypePanel.stories';

const { Default } = composeStories(stories);

describe('<FordelingAvBehandlingstypePanel>', () => {
  it('skal vise graffilter', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Antall åpne behandlinger')).toBeInTheDocument();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
