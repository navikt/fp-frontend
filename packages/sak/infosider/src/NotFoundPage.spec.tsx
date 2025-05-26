import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './InfosiderSakIndex.stories';

const { SideIkkeFunnet } = composeStories(stories);

describe('NotFoundPage', () => {
  it('skal rendre NotFoundPage korrekt', async () => {
    render(<SideIkkeFunnet />);
    expect(await screen.findByText('Beklager, vi finner ikke siden du leter etter.')).toBeInTheDocument();
  });
});
