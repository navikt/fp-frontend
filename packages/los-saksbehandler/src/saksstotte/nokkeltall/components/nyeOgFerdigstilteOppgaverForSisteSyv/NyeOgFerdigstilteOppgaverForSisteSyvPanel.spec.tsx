import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './NyeOgFerdigstilteOppgaverForSisteSyvPanel.stories';

const { Default } = composeStories(stories);

describe('<NyeOgFerdigstilteOppgaverForSisteSyvPanel>', () => {
  // TODO echarts-testing
  it.skip('skal rendre graf', async () => {
    // @ts-ignore Ta vekk når fiksa
    render(<Default />);
    expect(await screen.findByText('Siste 7 dager')).toBeInTheDocument();
  });
});
