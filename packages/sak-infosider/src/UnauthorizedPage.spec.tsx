import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './InfosiderSakIndex.stories';

// @ts-ignore Fjern når fiksa
const { IkkeInnloggetBruker } = composeStories(stories);

describe('<UnauthorizedPage>', () => {
  it('skal rendre UnauthorizedPage korrekt', async () => {
    render(<IkkeInnloggetBruker />);
    expect(await screen.findByText('Du må logge inn for å få tilgang til systemet')).toBeInTheDocument();
  });
});
