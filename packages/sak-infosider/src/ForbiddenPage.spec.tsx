import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './InfosiderSakIndex.stories';

// @ts-ignore Fjern når fiksa
const { HarIkkeTilgang } = composeStories(stories);

describe('<ForbiddenPage>', () => {
  it('skal rendre ForbiddenPage korrekt', async () => {
    render(<HarIkkeTilgang />);
    expect(await screen.findByText('Du har ikke tilgang til å slå opp denne personen')).toBeInTheDocument();
  });
});
