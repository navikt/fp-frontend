import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './SaksbehandlerIndex.stories';

const { Default } = composeStories(stories);

describe('<SaksbehandlerIndex>', () => {
  //TODO (TOR) Feilar på noko echarts-greier
  it.skip('skal vise sist behandlede saker', async () => {
    render(<Default />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
    expect(screen.getByText('Siste behandlinger')).toBeInTheDocument();
  });
});
