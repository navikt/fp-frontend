import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './DateLabel.stories';

const { Default } = composeStories(stories);

describe('<DateLabel>', () => {
  it('skal vise dato korrekt format', async () => {
    render(<Default />);

    expect(await screen.findByText('02.10.2017')).toBeInTheDocument();
  });
});
