import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './IkkeTilgangTilAvdelingslederPanel.stories';

const { IkkeTilgangTilAvdelingsleder } = composeStories(stories);

describe('<IkkeTilgangTilAvdelingslederPanel>', () => {
  it('skal vise side for ikke tilgang til avdelingsleder', async () => {
    render(<IkkeTilgangTilAvdelingsleder />);
    expect(await screen.findByText('Du har ikke tilgang til å bruke dette programmet')).toBeInTheDocument();
  });
});
