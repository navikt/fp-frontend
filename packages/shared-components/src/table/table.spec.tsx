import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Table.stories';

const { TabellMedRadhoover } = composeStories(stories);

describe('<Table>', () => {
  it('skal vise korrekt antall kolonneheadere med korrekt tekst', async () => {
    render(<TabellMedRadhoover />);

    expect(await screen.findByText('Navn')).toBeInTheDocument();
    expect(screen.getByText('Alder')).toBeInTheDocument();

    expect(screen.getByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText('41')).toBeInTheDocument();
    expect(screen.getByText('Auto Joakim')).toBeInTheDocument();
    expect(screen.getByText('35')).toBeInTheDocument();
  });
});
