import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './TilBehandlingPanel.stories';

const { Default } = composeStories(stories);

describe('<TilBehandlingPanel>', () => {
  it('skal vise graffilter', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Antall til behandling')).toBeInTheDocument();

    expect((screen.getByText('2 siste uker') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('4 siste uker') as HTMLOptionElement).selected).toBeFalsy();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
