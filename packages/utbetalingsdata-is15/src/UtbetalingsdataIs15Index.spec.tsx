import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './UtbetalingsdataIs15Index.stories';

const { Default } = composeStories(stories);

describe('<UtbetalingsdataIs15Index>', () => {
  it('skal rendre søk', async () => {
    render(<Default />);

    expect(await screen.findByText('Søk i Infotrygd')).toBeInTheDocument();
  });
});
