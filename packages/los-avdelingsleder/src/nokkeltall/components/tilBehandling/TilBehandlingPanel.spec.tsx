import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './TilBehandlingPanel.stories';

const { Default } = composeStories(stories);

describe('<TilBehandlingPanel>', () => {
  // TODO echarts-testing
  it.skip('skal vise graffilter', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Antall åpne oppgaver pr dato')).toBeInTheDocument();

    expect((screen.getByText('2 siste uker') as HTMLOptionElement).selected).toBeTruthy();
    expect((screen.getByText('4 siste uker') as HTMLOptionElement).selected).toBeFalsy();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
