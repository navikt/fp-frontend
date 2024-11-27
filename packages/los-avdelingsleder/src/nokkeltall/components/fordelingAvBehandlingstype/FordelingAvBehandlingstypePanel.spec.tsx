import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './FordelingAvBehandlingstypePanel.stories';

const { Default } = composeStories(stories);

describe('<FordelingAvBehandlingstypePanel>', () => {
  // TODO echarts-testing
  it.skip('skal vise graffilter', async () => {
    const { getByLabelText } = render(<Default />);
    expect(await screen.findByText('Antall åpne oppgaver nå')).toBeInTheDocument();

    expect(getByLabelText('Foreldrepenger')).not.toBeChecked();
    expect(getByLabelText('Engangsstønad')).not.toBeChecked();
    expect(getByLabelText('Svangerskapspenger')).not.toBeChecked();
    expect(getByLabelText('Alle')).toBeChecked();
  });
});
