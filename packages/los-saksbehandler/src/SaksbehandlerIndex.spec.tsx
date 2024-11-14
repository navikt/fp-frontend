import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './SaksbehandlerIndex.stories';

const { Default } = composeStories(stories);

describe('<SaksbehandlerIndex>', () => {
  it('skal saksbehandler-los', async () => {
    await render(<Default />);
    expect(await screen.findByText('Behandlingskø')).toBeInTheDocument();
    expect(screen.getByText('Neste i køen')).toBeInTheDocument();
    expect(screen.getByText('Søk')).toBeInTheDocument();
    expect(screen.getByText('Dine siste reserverte behandlinger')).toBeInTheDocument();
    expect(screen.getByText('Statistikk')).toBeInTheDocument();
  });
});
