import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './SupportMenySakIndex.stories';

const { UtenBeslutterGodkjenningOgTilbakesending } = composeStories(stories);

describe('<SupportMenySakIndex>', () => {
  it('skal vise meny uten beslutter-panelet', async () => {
    render(<UtenBeslutterGodkjenningOgTilbakesending />);

    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('1234567')).toBeInTheDocument();
  });
});
