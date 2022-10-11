import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './NyeOgFerdigstilteOppgaverForSisteSyvPanel.stories';

// @ts-ignore Ta vekk når fiksa
const { Default } = composeStories(stories);

describe('<NyeOgFerdigstilteOppgaverForSisteSyvPanel>', () => {
  it('skal rendre graf', async () => {
    render(<Default />);
    expect(await screen.findByText('Siste 7 dager')).toBeInTheDocument();
  });
});
