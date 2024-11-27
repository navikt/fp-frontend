import React from 'react';

import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './InfosiderSakIndex.stories';

const { HarIkkeTilgang } = composeStories(stories);

describe('<ForbiddenPage>', () => {
  it('skal rendre ForbiddenPage korrekt', async () => {
    render(<HarIkkeTilgang />);
    expect(await screen.findByText('Du har ikke tilgang til å slå opp denne personen')).toBeInTheDocument();
  });
});
