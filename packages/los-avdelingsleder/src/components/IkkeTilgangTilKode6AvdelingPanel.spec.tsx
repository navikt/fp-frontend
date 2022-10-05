import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './IkkeTilgangTilKode6AvdelingPanel.stories';

const { IkkeTilgangGrunnetKode6 } = composeStories(stories);

describe('<IkkeTilgangTilKode6AvdelingPanel>', () => {
  it('skal vise side for ikke tilgang grunnet kode 6', async () => {
    render(<IkkeTilgangGrunnetKode6 />);
    expect(await screen.findByText('Du har ikke tilgang til denne avdelingen')).toBeInTheDocument();
  });
});
