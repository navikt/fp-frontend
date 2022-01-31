import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './AktorSakIndex.stories';

const { Default, UgyldigAktørId } = composeStories(stories);

describe('<AktorSakIndex>', () => {
  it('skal vise to fagsaker til aktør', async () => {
    render(<Default />);
    expect(await screen.findByText('Espen Utvikler')).toBeInTheDocument();
    expect(screen.getByText(/(35425245)/)).toBeInTheDocument();
    expect(screen.getAllByText(/(123)/)).toHaveLength(2);
  });

  it('skal vise ugyldig aktør', async () => {
    render(<UgyldigAktørId />);
    expect(await screen.findByText('Ugyldig aktørId: 123')).toBeInTheDocument();
  });
});
