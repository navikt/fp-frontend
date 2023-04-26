import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './NyeOgFerdigstilteOppgaverForIdagPanel.stories';

const { Default } = composeStories(stories);

describe('<NyeOgFerdigstilteOppgaverForIdagPanel>', () => {
  // TODO echarts-testing
  it.skip('skal rendre graf', async () => {
    render(<Default />);
    expect(await screen.findByText('Nye og ferdigstilte behandlinger')).toBeInTheDocument();
  });
});
