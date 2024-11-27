import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './NyeOgFerdigstilteOppgaverForIdagPanel.stories';

const { Default } = composeStories(stories);

describe('<NyeOgFerdigstilteOppgaverForIdagPanel>', () => {
  it('skal rendre graf', async () => {
    render(<Default />);
    expect(await screen.findByText('For i dag')).toBeInTheDocument();
  });
});
