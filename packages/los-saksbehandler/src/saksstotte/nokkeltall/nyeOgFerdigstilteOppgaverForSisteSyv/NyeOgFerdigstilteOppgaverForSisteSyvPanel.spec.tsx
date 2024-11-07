import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './NyeOgFerdigstilteOppgaverForSisteSyvPanel.stories';

const { Default } = composeStories(stories);

describe('<NyeOgFerdigstilteOppgaverForSisteSyvPanel>', () => {
  // TODO echarts-testing
  it.skip('skal rendre graf', async () => {
    render(<Default />);
    expect(await screen.findByText('Siste 7 dager')).toBeInTheDocument();
  });
});
