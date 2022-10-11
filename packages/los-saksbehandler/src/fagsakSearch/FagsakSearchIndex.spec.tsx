import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FagsakSearchIndex.stories';

const { Default } = composeStories(stories);

describe('<FagsakSearchIndex>', () => {
  it('skal skrive inn ugyldig fødselsnummer og vise feilmelding', async () => {
    render(<Default />);
    expect(await screen.findByText('Søk på sak eller person')).toBeInTheDocument();
  });
});
