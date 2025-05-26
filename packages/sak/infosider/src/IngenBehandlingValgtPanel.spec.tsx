import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './InfosiderSakIndex.stories';

const { BehandlingErIkkeValgt, BehandlingerFinnesIkke } = composeStories(stories);

describe('IngenBehandlingValgtPanel', () => {
  it('skal vise tekst når ingen behandlinger er valgt', async () => {
    render(<BehandlingErIkkeValgt />);
    expect(await screen.findByText('Velg behandling')).toBeInTheDocument();
  });

  it('skal vise tekst når ingen behandlinger finnes', async () => {
    render(<BehandlingerFinnesIkke />);
    expect(await screen.findByText('Ingen behandlinger er opprettet')).toBeInTheDocument();
  });
});
