import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './OppgaverPerForsteStonadsdagPanel.stories';

const { Default } = composeStories(stories);

describe('<OppgaverPerForsteStonadsdagPanel>', () => {
  // TODO echarts-testing
  it.skip('skal rendre graf', async () => {
    render(<Default />);
    expect(await screen.findByText('Antall åpne oppgaver for førstegangsbehandlinger fordelt på første stønadsdag - alle ytelser')).toBeInTheDocument();
  });
});
