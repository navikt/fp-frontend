import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FagsakProfilSakIndex.stories';

// @ts-ignore Fjern når fiksa
const { Default } = composeStories(stories);

describe('<FagsakProfile>', () => {
  it('skal vise fagsak-profil', async () => {
    render(<Default />);
    expect(await screen.findByText('Foreldrepenger')).toBeInTheDocument();
    expect(screen.getByText('Dekningsgraden er 100%')).toBeInTheDocument();
    expect(screen.getByText('232341251 - Opprettet')).toBeInTheDocument();
  });
});
