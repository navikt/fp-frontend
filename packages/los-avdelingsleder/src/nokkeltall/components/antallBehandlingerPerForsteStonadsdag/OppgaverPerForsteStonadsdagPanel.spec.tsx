import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './OppgaverPerForsteStonadsdagPanel.stories';

// @ts-ignore Ta vekk når fiksa
const { Default } = composeStories(stories);

describe('<OppgaverPerForsteStonadsdagPanel>', () => {
  it('skal rendre graf', async () => {
    render(<Default />);
    expect(await screen.findByText('Antall førstegangsbehandlinger fordelt på første stønadsdag')).toBeInTheDocument();
  });
});
