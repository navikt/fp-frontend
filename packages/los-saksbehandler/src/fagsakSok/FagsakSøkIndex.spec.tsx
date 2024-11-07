import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './FagsakSøkIndex.stories';

const { Default } = composeStories(stories);

describe('<FagsakSøkIndex>', () => {
  it('skal rendre komponent korrekt', async () => {
    render(<Default />);
    expect(await screen.findAllByText('Søk')).toHaveLength(2);
  });
});
