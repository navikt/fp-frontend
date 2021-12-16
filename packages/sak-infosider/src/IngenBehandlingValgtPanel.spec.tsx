import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './InfosiderSakIndex.stories';

// @ts-ignore Fjern når fiksa
const { BehandlingErIkkeValgt, BehandlingerFinnesIkke } = composeStories(stories);

describe('<IngenBehandlingValgtPanel>', () => {
  it('skal vise tekst når ingen behandlinger er valgt', async () => {
    render(<BehandlingErIkkeValgt />);
    expect(await screen.findByText('Velg behandling')).toBeInTheDocument();
  });

  it('skal vise tekst når ingen behandlinger finnes', async () => {
    render(<BehandlingerFinnesIkke />);
    expect(await screen.findByText('Ingen behandlinger er opprettet')).toBeInTheDocument();
  });
});
